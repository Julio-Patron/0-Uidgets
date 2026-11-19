import catalog from '../catalog.json' with { type:'json' };
import { createShop } from '../lib/checkout.mjs';
import { stripePayments, privateStorage } from '../lib/adapters.mjs';
import { siteOrigin } from '../lib/site-origin.mjs';
let shop;
function runtime(){
  if(shop)return shop;
  const env=process.env;
  const overrides=env.STRIPE_PRICE_IDS_JSON?JSON.parse(env.STRIPE_PRICE_IDS_JSON):null;
  const products=structuredClone(catalog.products);
  if(overrides){
    if(Object.keys(overrides).length!==Object.keys(products).length)throw new Error('Incomplete price mapping');
    for(const [sku,item]of Object.entries(products)){if(!/^price_[a-zA-Z0-9]+$/.test(overrides[sku]??''))throw new Error('Invalid price mapping');item.priceId=overrides[sku];}
  }
  const livemode=env.STRIPE_LIVEMODE==='true';
  if(!livemode&&!overrides&&env.COMMERCE_ENABLED==='true')throw new Error('Sandbox price mapping required');
  shop=createShop({config:{origin:siteOrigin(env),enabled:env.COMMERCE_ENABLED==='true',taxReady:env.TAX_READY==='true',livemode,products},
    payments:stripePayments({key:env.STRIPE_SECRET_KEY,webhookSecret:env.STRIPE_WEBHOOK_SECRET,accountId:env.STRIPE_ACCOUNT_ID,livemode}),
    storage:privateStorage(),log:(event,code)=>console.error(JSON.stringify({event,code}))});
  return shop;
}
export default {async fetch(request){
  try{return await runtime().fetch(request);}catch{
    return new Response(JSON.stringify({error:'store_not_configured'}),{status:503,headers:{'Content-Type':'application/json','Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff'}});
  }
}};
