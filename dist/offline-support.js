const status=document.querySelector('#offline-status');
const setStatus=text=>{if(status)status.textContent=text};
const isFile=location.protocol==='file:'||window.BATTERY_PORTABLE===true;
if(isFile){document.body.classList.add('offline-file');setStatus('Offline copy · all 3D assets included');}
else{
 const update=()=>{if(!navigator.onLine)setStatus('Offline · using saved 3D assets')};
 window.addEventListener('offline',update);window.addEventListener('online',()=>setStatus('Online · offline assets remain saved'));
 if('serviceWorker' in navigator&&window.isSecureContext){
  let refreshing=false;const hadController=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener('controllerchange',()=>{if(hadController&&!refreshing){refreshing=true;location.reload()}});
  navigator.serviceWorker.addEventListener('message',event=>{if(event.data?.type==='OFFLINE_READY')setStatus(navigator.onLine?'Ready for offline use on this device':'Offline · using saved 3D assets')});
  navigator.serviceWorker.register('./sw.js').then(async reg=>{const ready=await navigator.serviceWorker.ready;ready.active?.postMessage({type:'CHECK_OFFLINE'});reg.addEventListener('updatefound',()=>{const worker=reg.installing;worker?.addEventListener('statechange',()=>{if(worker.state==='activated')worker.postMessage({type:'CHECK_OFFLINE'})})})}).catch(()=>setStatus('Use the downloadable copy for offline access'));
 }else setStatus('Download the offline copy to use without internet');
}
