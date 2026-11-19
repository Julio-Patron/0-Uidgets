import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { siteOrigin } from '../lib/site-origin.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const source=root;
const dest=path.join(root,'commerce/public');
const out=path.join(root,'.qa/stripe-1.1.1');
const allow=['index.html','stage.html','privacy.html','buggy-avatar-3d.png','SHA256SUMS-ALL-SQUAD.txt','SHA256SUMS-STORE.txt','assets','css','js','widget'];
const manifest=[];
function copy(from,to){
  if(fs.statSync(from).isDirectory()){fs.mkdirSync(to,{recursive:true});for(const entry of fs.readdirSync(from)){
    if(entry==='showcase')continue; // Old-version recording stays in the source archive only.
    copy(path.join(from,entry),path.join(to,entry));
  }}else{
    if(!/\.(?:html|png|webp|svg|jpg|css|js|txt|json)$/.test(from))throw new Error('Unexpected public asset '+from);
    const data=fs.readFileSync(from);fs.writeFileSync(to,data);manifest.push({file:path.relative(dest,to).replaceAll('\\','/'),sha256:createHash('sha256').update(data).digest('hex')});
  }
}
fs.mkdirSync(dest,{recursive:true});
for(const name of allow)copy(path.join(source,name),path.join(dest,name));
fs.copyFileSync(path.join(root,'commerce/checkout-access.js'),path.join(dest,'checkout-access.js'));
const origin=siteOrigin(process.env);
if(origin){
  if(!/^https:\/\/[a-z0-9.-]+$/.test(origin))throw new Error('Invalid canonical origin');
  const file=path.join(dest,'index.html');let html=fs.readFileSync(file,'utf8');
  html=html.replaceAll('https://julio-patron.github.io/0-Uidgets/',origin+'/');fs.writeFileSync(file,html);
}
// Activation is explicit, requires an origin and must follow end-to-end verification.
if(process.env.COMMERCE_ENABLED==='true'){
  if(!origin||process.env.TAX_READY!=='true')throw new Error('Checkout activation not ready');
  const file=path.join(dest,'js/commerce-config.js');fs.writeFileSync(file,fs.readFileSync(file,'utf8').replace("checkoutOrigin: ''",`checkoutOrigin: '${origin}'`));
}
if(!process.env.VERCEL){
  fs.mkdirSync(out,{recursive:true});
  fs.writeFileSync(path.join(out,'site-copy-manifest.json'),JSON.stringify(manifest,null,2)+'\n');
}
console.log(`Prepared ${manifest.length} public assets without executables, credentials or desktop app source.`);
