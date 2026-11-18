import test from 'node:test';
import assert from 'node:assert/strict';
process.env.APP_ORIGIN='https://preview.example.test';
process.env.COMMERCE_ENABLED='false';
process.env.TAX_READY='false';
test('Vercel entrypoints preserve their route after a rewrite and keep sales closed',async()=>{
  const health=(await import('../api/health.mjs')).default;
  const res=await health.fetch(new Request('https://preview.example.test/api/health'));
  assert.equal(res.status,200);assert.equal((await res.json()).salesEnabled,false);
  const checkout=(await import('../api/checkout.mjs')).default;
  const result=await checkout.fetch(new Request('https://preview.example.test/api/checkout',{method:'POST',headers:{Origin:process.env.APP_ORIGIN,'Content-Type':'application/x-www-form-urlencoded'},body:'sku=buggy'}));
  assert.equal(result.status,503);assert.match(await result.text(),/Direct purchase coming soon/);
});
