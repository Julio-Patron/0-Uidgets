import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { put, get } from '@vercel/blob';
import files from '../files.json' with {type:'json'};
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const releaseArg=process.argv.indexOf('--release-dir');
if(releaseArg<0||!process.argv[releaseArg+1])throw new Error('Provide --release-dir with the external dist-release directory. Do not copy executables into this repository.');
const releaseDir=fs.realpathSync(path.resolve(process.argv[releaseArg+1]));
const realRoot=fs.realpathSync(root);
if(releaseDir.toLowerCase()===realRoot.toLowerCase()||releaseDir.toLowerCase().startsWith(realRoot.toLowerCase()+path.sep))throw new Error('Release files must be outside the landing repository.');
const out=path.join(root,'.qa/stripe-1.1.1');
const upload=process.argv.includes('--upload');
const records=[];
for(const file of files){
  const source=path.join(releaseDir,file.species,file.filename);
  const hash=createHash('sha256');for await(const chunk of fs.createReadStream(source))hash.update(chunk);
  if(fs.statSync(source).size!==file.bytes||hash.digest('hex')!==file.sha256)throw new Error('Original hash mismatch: '+file.filename);
  if(upload){
    try{await put(file.pathname,fs.createReadStream(source),{access:'private',addRandomSuffix:false,allowOverwrite:false,contentType:'application/octet-stream',multipart:true});}
    catch(error){
      // A prior successful upload can be reused only after a full hash verification below.
      const existing=await get(file.pathname,{access:'private',useCache:false});
      if(existing?.statusCode!==200)throw error;
      await existing.stream.cancel();
    }
    const response=await get(file.pathname,{access:'private',useCache:false});
    if(response?.statusCode!==200)throw new Error('Private verification failed: '+file.filename);
    const check=createHash('sha256');let bytes=0;
    for await(const chunk of response.stream){bytes+=chunk.byteLength;check.update(chunk);}
    if(bytes!==file.bytes||check.digest('hex')!==file.sha256)throw new Error('Uploaded hash mismatch: '+file.filename);
  }
  records.push({filename:file.filename,bytes:file.bytes,sha256:file.sha256,localVerified:true,privateUploadVerified:upload});
  console.log(file.filename+': '+(upload?'private upload hash verified':'local hash verified; not uploaded'));
}
fs.mkdirSync(out,{recursive:true});
fs.writeFileSync(path.join(out,'storage-validation.json'),JSON.stringify({uploaded:upload,files:records},null,2)+'\n');
