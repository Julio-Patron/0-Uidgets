import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const manifestArg=process.argv.indexOf('--packages');
if(manifestArg<0||!process.argv[manifestArg+1])throw new Error('Provide --packages with the external validated release manifest.');
const evidence=JSON.parse(fs.readFileSync(path.resolve(process.argv[manifestArg+1]),'utf8'));
const files=evidence.packages.filter(x=>['portable','web-demo'].includes(x.kind)).map(x=>({
  id:x.species+'-'+x.kind,species:x.species,kind:x.kind,filename:path.basename(x.path),sha256:x.sha256,bytes:x.bytes,
  pathname:'releases/1.1.1/'+x.species+'/'+x.sha256+'/'+path.basename(x.path),
}));
fs.writeFileSync(path.join(root,'commerce/files.json'),JSON.stringify(files,null,2)+'\n');
