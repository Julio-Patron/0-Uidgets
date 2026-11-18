const message=document.getElementById('access-message');
const fragment=location.hash.slice(1);
history.replaceState(null,'',location.pathname);
const match=/^(cs_(?:test|live)_[A-Za-z0-9]{8,240})\.([A-Za-z0-9_-]{43})$/.exec(fragment);
try {
  if(!match)throw new Error('invalid');
  const response=await fetch('/restore',{method:'POST',headers:{'Content-Type':'application/json'},credentials:'same-origin',body:JSON.stringify({sessionId:match[1],token:match[2]})});
  if(!response.ok)throw new Error('unavailable');
  const data=await response.json();
  if(typeof data.location!=='string'||!data.location.startsWith('/order?session_id=cs_'))throw new Error('invalid');
  location.replace(data.location);
}catch{message.textContent='No se pudo abrir el enlace. Usa el enlace completo o el navegador donde pagaste. / Could not open the link. Use the complete link or the browser used for payment.';}
