import test from 'node:test';
import assert from 'node:assert/strict';
import Stripe from 'stripe';
import { createShop, accessHash } from '../lib/checkout.mjs';
import { stripePayments } from '../lib/adapters.mjs';
import catalog from '../catalog.json' with {type:'json'};
import files from '../files.json' with {type:'json'};

const origin='https://shop.example.test';
const sid='cs_test_LocalPurchase12345678';
const token=Buffer.alloc(32,7).toString('base64url');
const otherToken=Buffer.alloc(32,8).toString('base64url');
const secret='whsec_local_fixture_only';
const sdk=new Stripe('local-fixture-no-network');
function paidSession(sku='buggy'){
  const item=catalog.products[sku];
  return {id:sid,status:'complete',payment_status:'paid',mode:'payment',livemode:false,metadata:{app:'0-uidgets',sku,release_version:'1.1.1',access_hash:accessHash(token)},currency:'usd',amount_total:item.amount,total_details:{amount_discount:0},
    line_items:{has_more:false,data:[{quantity:1,price:{id:item.priceId,unit_amount:item.amount,currency:'usd',tax_behavior:'inclusive'}}]},
    payment_intent:{status:'succeeded',amount_received:item.amount,currency:'usd',latest_charge:{paid:true,refunded:false,amount_refunded:0,disputed:false,status:'succeeded'}}};
}
function fixture({session=paidSession()}={}){
  const orders=new Map(),calls={downloads:[],ensure:0};
  const realVerifier=stripePayments({webhookSecret:secret});
  const payments={retrieve:async()=>structuredClone(session),verifyEvent:realVerifier.verifyEvent};
  const storage={ensureOrder:async(order)=>{calls.ensure++;if(orders.has(order.sessionId))assert.deepEqual(orders.get(order.sessionId),order);orders.set(order.sessionId,order);},downloadUrl:async(file,until)=>{calls.downloads.push({file,until});return 'https://test.private.blob.vercel-storage.com/private-download?signature=fixture';}};
  const shop=createShop({payments,storage,config:{origin,livemode:false}});
  return {shop,session,orders,calls,storage};
}
const request=(path,options={})=>new Request(origin+path,options);
const cookies=`__Host-zui_access=${token}; __Host-zui_order=${sid}`;
function webhook(event,bodyOverride,signatureOverride){const body=bodyOverride??JSON.stringify(event);return request('/stripe/webhook',{method:'POST',headers:{'stripe-signature':signatureOverride??sdk.webhooks.generateTestHeaderString({payload:body,secret})},body});}
const event=(type='checkout.session.completed',session=paidSession())=>({id:'evt_fixture',object:'event',type,livemode:false,data:{object:session}});

test('old checkout forms for every SKU lead back to the catalog', async () => {
  const { shop } = fixture();
  for (const sku of Object.keys(catalog.products)) {
    const res = await shop.fetch(request('/checkout', {method: 'POST', body: new URLSearchParams({sku})}));
    assert.equal(res.status, 410);
    assert.equal(res.headers.get('location'), null);
    assert.match(await res.text(), /href="\/#pricing"/);
  }
});
test('a success URL and a session ID alone never grant a download',async()=>{
  const f=fixture();for(const c of ['',`__Host-zui_access=${otherToken}`]){const res=await f.shop.fetch(request(`/download?session_id=${sid}&file=buggy-portable`,{headers:{Cookie:c}}));assert.equal(res.status,403);}assert.equal(f.calls.downloads.length,0);assert.equal(f.orders.size,0);
});
test('unpaid or processing sessions never fulfill, even on the success page',async()=>{
  for(const payment_status of ['unpaid','no_payment_required']){const f=fixture();f.session.payment_status=payment_status;assert.equal((await f.shop.fetch(request('/order?session_id='+sid,{headers:{Cookie:cookies}}))).status,202);assert.equal(f.orders.size,0);}
});
test('paid orders receive only the exact purchased creatures and both deliverable types',async()=>{
  for(const [sku,item]of Object.entries(catalog.products)){const f=fixture({session:paidSession(sku)});const order=await f.shop.fulfill(sid,token);assert.deepEqual(order.files,files.filter(x=>item.members.includes(x.species)).map(x=>x.id));assert.equal(order.files.length,item.members.length*2);}
});
test('downloads require membership, issue a five-minute private URL and recheck payment',async()=>{
  const f=fixture();const before=Date.now();let res=await f.shop.fetch(request(`/download?session_id=${sid}&file=buggy-portable`,{headers:{Cookie:cookies}}));assert.equal(res.status,303);assert.match(res.headers.get('location'),/^https:\/\/test.private.blob/);assert.ok(f.calls.downloads[0].until>=before+300000&&f.calls.downloads[0].until<=Date.now()+300000);
  for(const file of ['nimpu-portable','../../private','https://attacker.invalid'])assert.equal((await f.shop.fetch(request(`/download?session_id=${sid}&file=${encodeURIComponent(file)}`,{headers:{Cookie:cookies}}))).status,403);
  f.session.payment_intent.latest_charge.amount_refunded=1;res=await f.shop.fetch(request(`/download?session_id=${sid}&file=buggy-portable`,{headers:{Cookie:cookies}}));assert.equal(res.status,403);assert.equal(f.calls.downloads.length,1);
});
test('changed price, amount, mode, currency, release or multiple items are denied',async()=>{
  const mutations=[s=>s.amount_total=1,s=>s.currency='mxn',s=>s.livemode=true,s=>s.mode='subscription',s=>s.metadata.release_version='1.0.0',s=>s.line_items.data[0].price.id='price_other',s=>s.line_items.data[0].quantity=2,s=>s.line_items.data.push(s.line_items.data[0]),s=>s.total_details.amount_discount=1,s=>s.line_items.has_more=true];
  for(const mutate of mutations){const f=fixture();mutate(f.session);await assert.rejects(f.shop.fulfill(sid,token));assert.equal(f.orders.size,0);}
});
test('refunds, disputes, incomplete charges and insufficient receipt prevent fulfillment',async()=>{
  const mutations=[s=>s.payment_intent.latest_charge.refunded=true,s=>s.payment_intent.latest_charge.disputed=true,s=>s.payment_intent.latest_charge.status='failed',s=>s.payment_intent.amount_received=0,s=>s.payment_intent.latest_charge=null];
  for(const mutate of mutations){const f=fixture();mutate(f.session);await assert.rejects(f.shop.fulfill(sid,token));assert.equal(f.orders.size,0);}
});
test('signed completed + async succeeded + concurrent return fulfill idempotently',async()=>{
  const f=fixture();const results=await Promise.all([f.shop.fetch(webhook(event())),f.shop.fetch(webhook(event('checkout.session.async_payment_succeeded'))),f.shop.fetch(request('/order?session_id='+sid,{headers:{Cookie:cookies}}))]);assert.ok(results.every(r=>r.status===200));assert.equal(f.orders.size,1);assert.equal(f.calls.ensure,3);
});
test('webhook requires a valid fresh Stripe signature over the unmodified raw body',async()=>{
  const f=fixture();const body=JSON.stringify(event());const signature=sdk.webhooks.generateTestHeaderString({payload:body,secret});
  for(const req of [webhook(event(),body,'bad'),webhook(event(),body+' ',signature),webhook(event(),body,sdk.webhooks.generateTestHeaderString({payload:body,secret,timestamp:1}))])assert.equal((await f.shop.fetch(req)).status,400);
  assert.equal(f.orders.size,0);
});
test('async pending remains locked; wrong mode and unrelated account products do not fulfill',async()=>{
  const f=fixture();f.session.payment_status='unpaid';assert.equal((await f.shop.fetch(webhook(event()))).status,200);assert.equal(f.orders.size,0);
  const wrong=event();wrong.livemode=true;assert.equal((await f.shop.fetch(webhook(wrong))).status,400);
  const unrelated=event();unrelated.data.object.metadata.app='another-business';assert.equal((await f.shop.fetch(webhook(unrelated))).status,200);assert.equal(f.orders.size,0);
});
test('webhook storage failures return 500 so Stripe retries',async()=>{
  const f=fixture();f.storage.ensureOrder=async()=>{throw new Error('offline');};assert.equal((await f.shop.fetch(webhook(event()))).status,500);
});
test('private access link restores HttpOnly cookies, rejects wrong token and foreign origin',async()=>{
  const f=fixture();const restore=(tok=token,org=origin)=>request('/restore',{method:'POST',headers:{Origin:org,'Content-Type':'application/json'},body:JSON.stringify({sessionId:sid,token:tok})});
  const res=await f.shop.fetch(restore());assert.equal(res.status,200);assert.match(res.headers.get('set-cookie'),/HttpOnly/);assert.deepEqual(await res.json(),{location:'/order?session_id='+sid});
  assert.equal((await f.shop.fetch(restore(otherToken))).status,403);assert.equal((await f.shop.fetch(restore(token,'https://attacker.invalid'))).status,403);
});
test('latest-order recovery and saved fragment link work without exposing storage URLs in page',async()=>{
  const f=fixture();const res=await f.shop.fetch(request('/order',{headers:{Cookie:cookies}}));assert.equal(res.status,200);const body=await res.text();assert.ok(body.includes('/access#'+sid+'.'+token));assert.ok(body.includes('Buggy-1.1.1-portable.exe'));assert.ok(!body.includes('blob.vercel-storage.com'));assert.equal(res.headers.get('referrer-policy'),'no-referrer');assert.match(res.headers.get('content-security-policy'),/frame-ancestors 'none'/);
});
