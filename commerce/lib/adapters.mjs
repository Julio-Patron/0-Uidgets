import Stripe from 'stripe';
import { get, put, head, issueSignedToken, presignUrl } from '@vercel/blob';
import { PurchaseError } from './checkout.mjs';

export function stripePayments({key,webhookSecret,accountId,livemode}) {
  let client;
  function stripe(){if(!key)throw new Error('Stripe key missing');return client??=new Stripe(key,{apiVersion:'2026-10-28.endive',maxNetworkRetries:2,timeout:10000});}
  return {
    retrieve:id=>stripe().checkout.sessions.retrieve(id,{expand:['line_items.data.price','payment_intent.latest_charge']}),
    create:(params,idempotencyKey)=>stripe().checkout.sessions.create(params,{idempotencyKey}),
    verifyEvent:(raw,signature)=>{if(!webhookSecret||!signature)throw new Error('Missing webhook credentials');return stripe().webhooks.constructEvent(raw,signature,webhookSecret,300);},
    async assertReady(item){
      const [account,price,tax,registrations]=await Promise.all([
        stripe().accounts.retrieve(null),
        stripe().prices.retrieve(item.priceId,{expand:['product']}),
        stripe().tax.settings.retrieve(),
        stripe().tax.registrations.list({status:'active',limit:1}),
      ]);
      if(!accountId||account.id!==accountId||!account.charges_enabled)throw new PurchaseError('merchant_not_ready',503);
      if(tax.status!=='active'||!registrations.data.length)throw new PurchaseError('tax_not_ready',503);
      if(price.livemode!==livemode||!price.active||price.type!=='one_time'||price.unit_amount!==item.amount||price.currency!=='usd'||price.tax_behavior!=='inclusive'||!price.product?.active||price.product.id!==item.productId||price.product.tax_code!=='txcd_10202000')throw new PurchaseError('price_not_ready',503);
    },
  };
}

export function privateStorage() {
  async function readOrder(pathname){const result=await get(pathname,{access:'private',useCache:false});if(result?.statusCode!==200)return null;return JSON.parse(await new Response(result.stream).text());}
  return {
    async ensureOrder(order){
      const pathname=`orders/${order.sessionId}.json`,body=JSON.stringify(order);
      const existing=await readOrder(pathname);
      if(existing){if(JSON.stringify(existing)!==body)throw new Error('Order conflict');return;}
      try{await put(pathname,body,{access:'private',addRandomSuffix:false,allowOverwrite:false,contentType:'application/json'});}
      catch(error){const saved=await readOrder(pathname);if(!saved||JSON.stringify(saved)!==body)throw error;}
    },
    async assertFiles(files){
      for(const file of files){const info=await head(file.pathname);if(info.size!==file.bytes||info.pathname!==file.pathname||!new URL(info.url).hostname.endsWith('.private.blob.vercel-storage.com'))throw new PurchaseError('release_not_ready',503);}
    },
    async downloadUrl(file,validUntil){
      const token=await issueSignedToken({pathname:file.pathname,operations:['get'],validUntil});
      const {presignedUrl}=await presignUrl(token,{operation:'get',pathname:file.pathname,access:'private',validUntil});
      const url=new URL(presignedUrl);
      if(url.protocol!=='https:'||!url.hostname.endsWith('.private.blob.vercel-storage.com'))throw new Error('Private storage required');
      // Blob's download flag sets Content-Disposition; it grants no extra capability.
      url.searchParams.set('download','1');return url.href;
    },
  };
}
