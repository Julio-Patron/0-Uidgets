import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { Readable } from 'node:stream';
import { fileURLToPath } from 'node:url';
import api from '../api/index.mjs';
const site=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../public');
const server=http.createServer(async(req,res)=>{
  try{
    const url=new URL(req.url,'http://127.0.0.1');
    const routes=new Set(['/checkout','/order','/download','/access','/restore','/stripe/webhook','/purchase-privacy','/health']);
    if(routes.has(url.pathname)){
      const request=new Request((process.env.APP_ORIGIN??'https://localhost')+req.url,{method:req.method,headers:req.headers,...(req.method==='GET'||req.method==='HEAD'?{}:{body:Readable.toWeb(req),duplex:'half'})});
      const result=await api.fetch(request);const headers=Object.fromEntries(result.headers);const cookies=result.headers.getSetCookie();if(cookies.length)headers['set-cookie']=cookies;
      res.writeHead(result.status,headers);if(result.body)Readable.fromWeb(result.body).pipe(res);else res.end();return;
    }
    const name=decodeURIComponent(url.pathname).replace(/^\/+/, '')||'index.html';const file=path.resolve(site,name);
    if(!file.startsWith(site+path.sep)||name.split(/[\\/]/).some(s=>s.startsWith('.'))||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404).end();return;}
    const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.png':'image/png','.webp':'image/webp','.jpg':'image/jpeg','.svg':'image/svg+xml','.txt':'text/plain'}[path.extname(file)]??'application/octet-stream';
    res.writeHead(200,{'Content-Type':mime,'Cache-Control':'no-store'});fs.createReadStream(file).pipe(res);
  }catch{res.writeHead(500).end('Local server error');}
});
server.listen(Number(process.env.PORT??8091),'127.0.0.1',()=>console.log('Local review: http://127.0.0.1:'+server.address().port));
