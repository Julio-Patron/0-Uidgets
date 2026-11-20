import Stripe from 'stripe';
import { get, put, issueSignedToken, presignUrl } from '@vercel/blob';

export function stripePayments({key,webhookSecret}) {
  let client;
  function stripe(){if(!key)throw new Error('Stripe key missing');return client??=new Stripe(key,{apiVersion:'2026-10-28.endive',maxNetworkRetries:2,timeout:10000});}
  return {
    retrieve:id=>stripe().checkout.sessions.retrieve(id,{expand:['line_items.data.price','payment_intent.latest_charge']}),
    verifyEvent:(raw,signature)=>{if(!webhookSecret||!signature)throw new Error('Missing webhook credentials');return Stripe.webhooks.constructEvent(raw,signature,webhookSecret,300);},
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
