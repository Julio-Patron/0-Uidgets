import { createHash, randomBytes, timingSafeEqual } from 'node:crypto';
import catalog from '../catalog.json' with { type: 'json' };
import releaseFiles from '../files.json' with { type: 'json' };

export const accessHash = token => createHash('sha256').update('0-uidgets-purchase:' + token).digest('hex');
export const tokenValid = token => typeof token === 'string' && /^[A-Za-z0-9_-]{43}$/.test(token);
const sessionValid = id => typeof id === 'string' && /^cs_(test|live)_[A-Za-z0-9]{8,240}$/.test(id);
const equal = (a,b) => typeof a === 'string' && typeof b === 'string' && a.length === b.length && timingSafeEqual(Buffer.from(a),Buffer.from(b));
const h = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const cookie = (req,name) => (req.headers.get('cookie')??'').split(';').map(s=>s.trim()).find(s=>s.startsWith(name+'='))?.slice(name.length+1)??'';
const cookieHeader = (name,value) => `${name}=${value}; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=2592000`;
const baseHeaders = { 'Cache-Control':'private, no-store', 'Referrer-Policy':'no-referrer', 'X-Content-Type-Options':'nosniff', 'X-Frame-Options':'DENY', 'Content-Security-Policy':"default-src 'none'; script-src 'self'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'" };
const response = (body,status=200,headers={}) => new Response(body,{status,headers:{...baseHeaders,...headers}});
const json = (data,status=200,headers={}) => response(JSON.stringify(data),status,{'Content-Type':'application/json; charset=utf-8',...headers});
const redirect = (url,headers={}) => response(null,303,{Location:url,...headers});
const html = (title,body,lang='es',status=200) => response(`<!doctype html><html lang="${lang}"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${h(title)} · 0-Uidgets</title><style>body{background:#0b1114;color:#f3f5ef;font:16px/1.65 system-ui;margin:48px auto;padding:0 24px;max-width:740px}a{color:#c5f57b}h1{line-height:1.2}li{margin:20px 0}small{display:block;color:#a2afa8}code{overflow-wrap:anywhere;font-size:11px}button,input{font:inherit}button{padding:10px 18px;border:0;border-radius:24px;background:#c5f57b;color:#12200c;cursor:pointer}input{box-sizing:border-box;width:100%;padding:12px}header{color:#c5f57b}footer{margin-top:40px;font-size:13px;color:#a2afa8}</style><header>0-Uidgets · 3D Bots</header><main><h1>${h(title)}</h1>${body}</main><footer><a href="/">0-Uidgets</a> · <a href="/purchase-privacy">Privacidad de la compra / Purchase privacy</a></footer></html>`,status,{'Content-Type':'text/html; charset=utf-8'});
const denied = () => html('Acceso no disponible','<p>Abre tu enlace privado o vuelve desde el navegador donde pagaste. / Open your private link or return with the browser used for payment.</p>', 'es',403);
const pending = id => html('Pago pendiente / Payment pending',`<p>La descarga estará disponible cuando Stripe confirme el pago. / Downloads become available when Stripe confirms payment.</p><p><a href="/order?session_id=${h(id)}">Comprobar de nuevo / Check again</a></p>`, 'es',202);

export class PurchaseError extends Error { constructor(code,status=409){super(code);this.code=code;this.status=status;} }

export function createShop({payments,storage,config,log=()=>{}}) {
  const products = config.products ?? catalog.products;
  const release = config.release ?? catalog.release;
  const files = config.files ?? releaseFiles;
  const origin = config.origin;
  if (!/^https:\/\/[a-z0-9.-]+(?::\d+)?$/i.test(origin)) throw new Error('APP_ORIGIN must be an exact HTTPS origin');

  async function verifiedSession(id,token,needPaid=true) {
    if(!sessionValid(id)) throw new PurchaseError('invalid_session',403);
    const s=await payments.retrieve(id);
    const sku=s.metadata?.sku;
    const item=Object.hasOwn(products,sku??'')?products[sku]:null;
    if(!item||s.metadata?.app!=='0-uidgets'||s.metadata?.release_version!==release||s.mode!=='payment'||s.livemode!==config.livemode) throw new PurchaseError('unrecognized_order',403);
    if(token!==undefined && (!tokenValid(token)||!equal(accessHash(token),s.metadata.access_hash))) throw new PurchaseError('access_denied',403);
    if(!/^[a-f0-9]{64}$/.test(s.metadata.access_hash??''))throw new PurchaseError('invalid_proof',403);
    const lines=s.line_items?.data;
    if(s.line_items?.has_more||lines?.length!==1||lines[0].quantity!==1||lines[0].price?.id!==item.priceId||lines[0].price?.unit_amount!==item.amount||lines[0].price?.currency!=='usd'||lines[0].price?.tax_behavior!=='inclusive'||s.currency!=='usd'||s.amount_total!==item.amount||(s.total_details?.amount_discount??0)!==0) throw new PurchaseError('order_mismatch');
    if(needPaid){
      if(s.status!=='complete'||s.payment_status!=='paid')throw new PurchaseError('payment_pending',202);
      const intent=s.payment_intent;
      const charge=intent?.latest_charge;
      if(!intent||intent.status!=='succeeded'||intent.amount_received!==item.amount||intent.currency!=='usd'||!charge||charge.paid!==true||charge.refunded||charge.amount_refunded>0||charge.disputed||charge.status!=='succeeded')throw new PurchaseError('payment_unavailable',403);
    }
    return {session:s,item,sku};
  }

  async function fulfill(id,token) {
    const {session,item,sku}=await verifiedSession(id,token);
    // Stable contents and a conditional write make concurrent webhook/return retries idempotent.
    const order={schema:1,sessionId:session.id,sku,release,currency:'usd',amount:item.amount,accessHash:session.metadata.access_hash,files:files.filter(f=>item.members.includes(f.species)).map(f=>f.id)};
    await storage.ensureOrder(order);
    return order;
  }

  async function smallBody(req,max=8192) {
    if(Number(req.headers.get('content-length'))>max)throw new PurchaseError('body_too_large',413);
    const reader=req.body?.getReader();if(!reader)return '';
    const chunks=[];let size=0;
    while(true){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>max){await reader.cancel();throw new PurchaseError('body_too_large',413);}chunks.push(Buffer.from(value));}
    return Buffer.concat(chunks).toString('utf8');
  }

  async function handle(req) {
    const url=new URL(req.url),route=url.pathname;
    if(route==='/health'&&req.method==='GET')return json({service:'0-uidgets',release,salesEnabled:config.enabled===true&&config.taxReady===true});
    if(route==='/purchase-privacy'&&req.method==='GET')return html('Privacidad de la compra / Purchase privacy',`<p>Stripe procesa el pago y los datos de facturación. 0-Uidgets conserva en almacenamiento privado la referencia de pago, el producto y el permiso de descarga. La aplicación de escritorio mantiene su memoria y ajustes en tu equipo.</p><p>Una cookie necesaria de 30 días permite volver a las descargas desde este navegador. El enlace privado equivale a una credencial: guárdalo sin compartirlo. Los enlaces de archivo caducan en 5 minutos.</p><p>Stripe processes payment and billing data. 0-Uidgets keeps the payment reference, product and download entitlement in private storage. A necessary 30-day cookie restores downloads in this browser. Keep your private access link secret; individual file links expire after 5 minutes.</p><p><a href="https://stripe.com/privacy">Privacidad de Stripe</a> · <a href="/privacy.html">Privacidad de la app de escritorio</a></p>`);
    if(route==='/access'&&req.method==='GET')return html('Abrir descargas / Open downloads','<p id="access-message">Verificando el enlace privado… / Checking your private link…</p><script type="module" src="/checkout-access.js"></script>');
    if(route==='/restore'&&req.method==='POST'){
      if(req.headers.get('origin')!==origin)return denied();
      if(!req.headers.get('content-type')?.startsWith('application/json'))return json({error:'unsupported_media_type'},415);
      const data=JSON.parse(await smallBody(req));
      await verifiedSession(data.sessionId,data.token,false);
      const headers=new Headers(baseHeaders);headers.set('Content-Type','application/json');headers.append('Set-Cookie',cookieHeader('__Host-zui_access',data.token));headers.append('Set-Cookie',cookieHeader('__Host-zui_order',data.sessionId));
      return new Response(JSON.stringify({location:'/order?session_id='+data.sessionId}),{status:200,headers});
    }
    if(route==='/checkout'&&req.method==='POST'){
      if(!config.enabled||!config.taxReady)return html('Compra directa próximamente / Direct purchase coming soon','<p>La tienda todavía está en preparación. / The store is still being prepared.</p>','es',503);
      if(req.headers.get('origin')!==origin)return denied();
      if(!req.headers.get('content-type')?.startsWith('application/x-www-form-urlencoded'))return json({error:'unsupported_media_type'},415);
      const form=new URLSearchParams(await smallBody(req));
      const sku=form.get('sku');const item=Object.hasOwn(products,sku??'')?products[sku]:null;
      if(!item||form.getAll('sku').length!==1)return json({error:'invalid_product'},400);
      const lang=form.get('lang')==='en'?'en':'es';
      const oldToken=cookie(req,'__Host-zui_access');const token=tokenValid(oldToken)?oldToken:randomBytes(32).toString('base64url');
      // Inspect account/tax readiness, Price and private release availability before taking payment.
      await payments.assertReady(item);
      await storage.assertFiles(files.filter(f=>item.members.includes(f.species)));
      const params={mode:'payment',ui_mode:'hosted_page',origin_context:'web',integration_identifier:'0-uidgets-checkout-bxrwqjpm',line_items:[{price:item.priceId,quantity:1}],automatic_tax:{enabled:true},adaptive_pricing:{enabled:false},locale:lang,
        success_url:origin+'/order?session_id={CHECKOUT_SESSION_ID}',cancel_url:origin+'/?checkout=cancelled#pricing',
        metadata:{app:'0-uidgets',sku,release_version:release,access_hash:accessHash(token)},
        custom_text:{submit:{message:lang==='es'?'Pago único. Descarga privada tras confirmar el pago.':'One-time payment. Private downloads after payment confirmation.'}}};
      // Repeated submits in a short window reuse the same hosted session.
      const key=createHash('sha256').update([token,sku,Math.floor(Date.now()/600000),release].join(':')).digest('hex');
      const session=await payments.create(params,'zero-uidgets-'+key);
      const target=new URL(session.url);
      if(target.protocol!=='https:'||target.hostname!=='checkout.stripe.com'||!sessionValid(session.id))throw new PurchaseError('invalid_checkout');
      const headers=new Headers(baseHeaders);headers.set('Location',target.href);headers.append('Set-Cookie',cookieHeader('__Host-zui_access',token));headers.append('Set-Cookie',cookieHeader('__Host-zui_order',session.id));
      return new Response(null,{status:303,headers});
    }
    if(route==='/stripe/webhook'&&req.method==='POST'){
      const raw=await smallBody(req,262144);let event;
      try{event=payments.verifyEvent(raw,req.headers.get('stripe-signature'));}catch{return json({error:'invalid_signature'},400);}
      if(event.livemode!==config.livemode)return json({error:'wrong_mode'},400);
      if(['checkout.session.completed','checkout.session.async_payment_succeeded'].includes(event.type)){
        // Ignore other businesses sharing this Stripe account.
        if(event.data?.object?.metadata?.app!=='0-uidgets')return json({received:true});
        try{await fulfill(event.data.object.id);}catch(error){
          if(error instanceof PurchaseError && error.code==='payment_pending')return json({received:true,pending:true});
          // A temporary storage/Stripe failure must cause Stripe to retry.
          log('fulfillment_failed',error.code??'dependency_error');return json({error:'fulfillment_failed'},500);
        }
      }
      return json({received:true});
    }
    if(route==='/order'&&req.method==='GET'){
      const id=url.searchParams.get('session_id')||cookie(req,'__Host-zui_order');const token=cookie(req,'__Host-zui_access');
      if(!tokenValid(token)||!sessionValid(id))return denied();
      let order;try{order=await fulfill(id,token);}catch(error){if(error instanceof PurchaseError&&error.code==='payment_pending')return pending(id);throw error;}
      const item=products[order.sku];
      const links=order.files.map(id=>files.find(f=>f.id===id));
      const access=origin+'/access#'+id+'.'+token;
      return html('Tus descargas / Your downloads',`<p>${h(item.name)} · v${h(order.release)}</p><p>Pago confirmado / Payment confirmed · US$${(order.amount/100).toFixed(2)}</p><ul>${links.map(f=>`<li><a href="/download?session_id=${h(id)}&amp;file=${h(f.id)}">${h(f.filename)}</a><small>${(f.bytes/1048576).toFixed(2)} MiB · SHA-256</small><code>${h(f.sha256)}</code></li>`).join('')}</ul><p>Guarda este enlace privado para volver a descargar. / Save this private link to download again.</p><input aria-label="Enlace privado / Private link" value="${h(access)}" readonly><p><small>No lo compartas: da acceso a tu compra. / Do not share it: it grants access to your purchase.</small></p>`);
    }
    if(route==='/download'&&req.method==='GET'){
      const id=url.searchParams.get('session_id'),token=cookie(req,'__Host-zui_access');
      if(!tokenValid(token)||!sessionValid(id))return denied();
      const order=await fulfill(id,token);const file=files.find(f=>f.id===url.searchParams.get('file')&&order.files.includes(f.id));
      if(!file)return denied();
      return redirect(await storage.downloadUrl(file,Date.now()+300000));
    }
    return json({error:'not_found'},404);
  }
  return {fulfill,async fetch(req){try{return await handle(req);}catch(error){
    if(error instanceof PurchaseError){if(error.status===403)return denied();return json({error:error.code},error.status);}
    if(error instanceof SyntaxError)return json({error:'invalid_body'},400);
    // Do not log raw Stripe errors, signed URLs, cookie values, billing data or API keys.
    log('commerce_error','dependency_error');return json({error:'temporarily_unavailable'},503);
  }}};
}
