import test from 'node:test';
import assert from 'node:assert/strict';
import { siteOrigin } from '../lib/site-origin.mjs';
process.env.APP_ORIGIN='https://preview.example.test';
// Even a deployment carrying both old activation flags must reject new sales.
process.env.COMMERCE_ENABLED='true';
process.env.TAX_READY='true';
test('Vercel entrypoints preserve their route after a rewrite and keep sales closed',async()=>{
  const health=(await import('../api/health.mjs')).default;
  const res=await health.fetch(new Request('https://preview.example.test/api/health'));
  assert.equal(res.status,200);assert.equal((await res.json()).salesEnabled,false);
  const checkout=(await import('../api/checkout.mjs')).default;
  const result=await checkout.fetch(new Request('https://preview.example.test/api/checkout',{method:'POST',headers:{Origin:process.env.APP_ORIGIN,'Content-Type':'application/x-www-form-urlencoded'},body:'sku=buggy'}));
  assert.equal(result.status,410);assert.match(await result.text(),/Previous purchases/);
});

test('legacy sales flags do not affect the canonical site or recovery origin',()=>{
  const env={VERCEL_URL:'preview.example.test',VERCEL_PROJECT_PRODUCTION_URL:'shop.example.test'};
  assert.equal(siteOrigin(env),'https://shop.example.test');
  assert.equal(siteOrigin({...env,COMMERCE_ENABLED:'true'}),'https://shop.example.test');
  assert.equal(siteOrigin({...env,COMMERCE_ENABLED:'true',APP_ORIGIN:'https://bots.example.test'}),'https://bots.example.test');
});

test('the access link can restore its credential through a same-origin fetch',async()=>{
  const access=(await import('../api/access.mjs')).default;
  const response=await access.fetch(new Request(process.env.APP_ORIGIN+'/access'));
  assert.equal(response.status,200);
  assert.match(response.headers.get('Content-Security-Policy'),/connect-src 'self'(?:;|$)/);
});
