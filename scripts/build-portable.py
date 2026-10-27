from pathlib import Path
import argparse,subprocess,base64,re,hashlib,json,mimetypes,zipfile
parser=argparse.ArgumentParser();parser.add_argument('--esbuild',default='esbuild');args=parser.parse_args()
root=Path(__file__).resolve().parents[1];dist=root/'dist';offline=dist/'offline';offline.mkdir(exist_ok=True)
bundle=root/'.openai'/'portable-bundle.js'
subprocess.run([args.esbuild,str(dist/'app.js'),'--bundle','--minify','--format=iife','--platform=browser','--target=es2020','--alias:three='+str(dist/'assets/three.module.js'),'--outfile='+str(bundle)],check=True)
code=bundle.read_text();(dist/'app.bundle.js').write_text(code);bundle_name='app.'+hashlib.sha256(code.encode()).hexdigest()[:12]+'.bundle.js'
for old in dist.glob('app.*.bundle.js'):old.unlink()
(dist/bundle_name).write_text(code);html=(dist/'index.html').read_text();css=(dist/'style.css').read_text()
paths=sorted(set(re.findall(r'assets/[A-Za-z0-9_.\-/]+',code+html)),key=len,reverse=True)
embedded=[]
for rel in paths:
 path=dist/rel
 if not path.is_file():continue
 mime=mimetypes.guess_type(path.name)[0] or ('model/gltf-binary' if path.suffix=='.glb' else 'application/octet-stream')
 data='data:'+mime+';base64,'+base64.b64encode(path.read_bytes()).decode()
 code=code.replace(rel,data);html=html.replace(rel,data);embedded.append(rel)
html=re.sub(r'<script type="importmap">.*?</script>','',html,flags=re.S)
html=re.sub(r'<link rel="manifest"[^>]*>','',html)
html=html.replace('<link rel="stylesheet" href="style.css">','<style>'+css+'</style>')
code=re.sub(r'</script',r'<\/script',code,flags=re.I)
html=re.sub(r'<script(?: type="module")? src="app(?:\.[a-f0-9]+)?(?:\.bundle)?\.js"></script>',lambda _: '<script>window.BATTERY_PORTABLE=true;</script><script>'+code+'</script>',html)
online=(dist/'index.html').read_text();online=re.sub(r'<script type="importmap">.*?</script>','',online,flags=re.S);online=re.sub(r'<script(?: type="module")? src="app(?:\.[a-f0-9]+)?(?:\.bundle)?\.js"></script>','<script src="'+bundle_name+'"></script>',online);(dist/'index.html').write_text(online)
output=offline/'Battery-Agitation-Offline.html';output.write_text(html)
readme='''BATTERY AGITATION — ONLINE AND OFFLINE

OFFLINE ON A COMPUTER
Open Battery-Agitation-Offline.html in a modern browser. All 3D models, air positions, code, images and reference drawings are embedded. No server, internet connection, installation or sign-in is required for this downloaded file.

PHONES AND TABLETS
Open the public online page once while connected. No sign-in is required. Open Controls and wait for “Ready for offline use on this device”. You can then install/add it to the home screen using your browser's menu and reopen it without internet. Browser storage must remain available; clearing website data removes the offline cache.

ONLINE
https://battery-agitation-touchscreen-charan.elatedrose129.chatgpt.site
The online page is public and does not require a ChatGPT login.

TOUCH CONTROLS
The camera is fixed. Tap a part or use Controls → Choose a part. Adjustments move only the existing side handle, needle and illustrative air. Main pipe diameter is a visual estimate, not a measured engineering size.

GRAPHICS
Interactive 3D requires a modern browser with WebGL. If unavailable, the supplied top-view render is shown as a static fallback. Some file-preview apps do not execute HTML: open the downloaded file in a browser, or use the installed online version.
'''
(offline/'START-HERE.txt').write_text(readme)
with zipfile.ZipFile(offline/'Battery-Agitation-Offline.zip','w',zipfile.ZIP_DEFLATED) as z:
 z.write(output,output.name);z.writestr('START-HERE.txt',readme)
# Build a versioned cache list. Download bundles are deliberately not duplicated in browser storage.
core=['./'+bundle_name,'./','./index.html','./style.css','./app.js','./app.bundle.js','./offline-support.js','./airflow3d.js','./manifest.webmanifest']
core+=['./'+str(p.relative_to(dist)).replace('\\','/') for p in sorted((dist/'assets').rglob('*')) if p.is_file()]
hash_=hashlib.sha256()
for rel in core:
 if rel!='./':hash_.update((dist/rel[2:]).read_bytes())
version='battery-3d-'+hash_.hexdigest()[:16]
sw='''const CACHE=__VERSION__;const CORE=__CORE__;
async function prepare(){const cache=await caches.open(CACHE);await Promise.all(CORE.map(async path=>{const response=await fetch(new Request(path,{credentials:'same-origin',cache:'reload'}));if(!response.ok)throw new Error('Offline asset failed');const content=response.headers.get('content-type')||'';if(!path.endsWith('.html')&&path!=='./'&&content.includes('text/html'))throw new Error('Login page is not an offline asset');if(path==='./'||path.endsWith('.html')){const text=await response.clone().text();if(!text.includes('bundle.js')&&!text.includes('app.js'))throw new Error('Sign in before offline preparation')}await cache.put(path,response)}));await self.skipWaiting()}
self.addEventListener('install',event=>event.waitUntil(prepare()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith('battery-3d-')&&key!==CACHE)await caches.delete(key);await self.clients.claim();for(const client of await self.clients.matchAll())client.postMessage({type:'OFFLINE_READY'})})()));
self.addEventListener('message',event=>{if(event.data?.type==='CHECK_OFFLINE')event.source?.postMessage({type:'OFFLINE_READY'})});
self.addEventListener('fetch',event=>{const request=event.request,url=new URL(request.url);if(request.method!=='GET'||url.origin!==self.location.origin||url.pathname.includes('/offline/'))return;
 if(request.mode==='navigate'){event.respondWith((async()=>{try{const response=await fetch(request);if(response.ok&&(response.headers.get('content-type')||'').includes('text/html')){const text=await response.clone().text();if(text.includes('bundle.js')||text.includes('app.js'))(await caches.open(CACHE)).put('./',response.clone())}return response}catch{return(await caches.open(CACHE)).match('./')}})());return}
 event.respondWith((async()=>{const cache=await caches.open(CACHE),cached=await cache.match(request,{ignoreSearch:true});return cached||fetch(request)})())});
'''.replace('__VERSION__',json.dumps(version)).replace('__CORE__',json.dumps(core))
(dist/'sw.js').write_text(sw)
manifest={'offline_file':str(output),'bytes':output.stat().st_size,'embedded_assets':embedded,'service_worker_cache':version,'cached_assets':len(core),'no_external_runtime_dependencies':True}
(root/'portable-build.json').write_text(json.dumps(manifest,indent=2));print(json.dumps(manifest,indent=2))
