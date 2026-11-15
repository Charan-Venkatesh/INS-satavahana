(()=>{var ku=document.querySelector("#offline-status"),Ts=i=>{ku&&(ku.textContent=i)},kp=location.protocol==="file:"||window.BATTERY_PORTABLE===!0;if(kp)document.body.classList.add("offline-file"),Ts("Offline copy \xB7 all 3D assets included");else{let i=()=>{navigator.onLine||Ts("Offline \xB7 using saved 3D assets")};if(window.addEventListener("offline",i),window.addEventListener("online",()=>Ts("Online \xB7 offline assets remain saved")),"serviceWorker"in navigator&&window.isSecureContext){let e=!1,t=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{t&&!e&&(e=!0,location.reload())}),navigator.serviceWorker.addEventListener("message",n=>{n.data?.type==="OFFLINE_READY"&&Ts(navigator.onLine?"Ready for offline use on this device":"Offline \xB7 using saved 3D assets")}),navigator.serviceWorker.register("./sw.js").then(async n=>{(await navigator.serviceWorker.ready).active?.postMessage({type:"CHECK_OFFLINE"}),n.addEventListener("updatefound",()=>{let r=n.installing;r?.addEventListener("statechange",()=>{r.state==="activated"&&r.postMessage({type:"CHECK_OFFLINE"})})})}).catch(()=>Ts("Use the downloadable copy for offline access"))}else Ts("Download the offline copy to use without internet")}var Vp=0,Vu=1,Hp=2;var hf=1,uo=2,oi=3,pn=0,Kt=1,Mt=2,Vi=0,Ws=1,Ks=2,Hu=3,Gu=4,Gp=5,us=100,Wp=101,Xp=102,qp=103,Yp=104,Zp=200,Kp=201,Jp=202,$p=203,ol=204,al=205,jp=206,Qp=207,em=208,tm=209,nm=210,im=211,sm=212,rm=213,om=214,cl=0,ll=1,hl=2,Js=3,ul=4,dl=5,fl=6,pl=7,uf=0,am=1,cm=2,Hi=0,lm=1,hm=2,um=3,dm=4,fm=5,pm=6,mm=7,Wu="attached",gm="detached",df=300,$s=301,js=302,ml=303,gl=304,Wa=306,Fn=1e3,ci=1001,Jr=1002,Qt=1003,bh=1004;var Vs=1005;var cn=1006,Wr=1007;var Gn=1008;var ui=1009,ff=1010,pf=1011,$r=1012,Sh=1013,fs=1014,Nn=1015,fo=1016,wh=1017,Th=1018,Qs=1020,mf=35902,gf=1021,xf=1022,yn=1023,_f=1024,vf=1025,Xs=1026,er=1027,Ah=1028,Eh=1029,yf=1030,Rh=1031;var Ch=1033,aa=33776,ca=33777,la=33778,ha=33779,xl=35840,_l=35841,vl=35842,yl=35843,Ml=36196,bl=37492,Sl=37496,wl=37808,Tl=37809,Al=37810,El=37811,Rl=37812,Cl=37813,Il=37814,Pl=37815,Ll=37816,Dl=37817,Ul=37818,Nl=37819,Fl=37820,Ol=37821,ua=36492,Bl=36494,zl=36495,Mf=36283,kl=36284,Vl=36285,Hl=36286;var tr=2300,nr=2301,wc=2302,Xu=2400,qu=2401,Yu=2402,xm=2500;var bf=0,Xa=1,po=2,_m=3200,vm=3201;var Sf=0,ym=1,Bi="",yt="srgb",en="srgb-linear",qa="linear",_t="srgb";var As=7680;var Zu=519,Mm=512,bm=513,Sm=514,wf=515,wm=516,Tm=517,Am=518,Em=519,Gl=35044,Ih=35048;var Ku="300 es",li=2e3,da=2001,Gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ju=1234567,qs=Math.PI/180,ir=180/Math.PI;function Mn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function kt(i,e,t){return Math.max(e,Math.min(t,i))}function Ph(i,e){return(i%e+e)%e}function Rm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Cm(i,e,t){return i!==e?(t-i)/(e-i):0}function Xr(i,e,t){return(1-t)*i+t*e}function Im(i,e,t,n){return Xr(i,e,1-Math.exp(-t*n))}function Pm(i,e=1){return e-Math.abs(Ph(i,e*2)-e)}function Lm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Dm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Um(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Nm(i,e){return i+Math.random()*(e-i)}function Fm(i){return i*(.5-Math.random())}function Om(i){i!==void 0&&(Ju=i);let e=Ju+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bm(i){return i*qs}function zm(i){return i*ir}function km(i){return(i&i-1)===0&&i!==0}function Vm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gm(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Tf={DEG2RAD:qs,RAD2DEG:ir,generateUUID:Mn,clamp:kt,euclideanModulo:Ph,mapLinear:Rm,inverseLerp:Cm,lerp:Xr,damp:Im,pingpong:Pm,smoothstep:Lm,smootherstep:Dm,randInt:Um,randFloat:Nm,randFloatSpread:Fm,seededRandom:Om,degToRad:Bm,radToDeg:zm,isPowerOfTwo:km,ceilPowerOfTwo:Vm,floorPowerOfTwo:Hm,setQuaternionFromProperEuler:Gm,normalize:xt,denormalize:Un},re=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ke=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],y=s[1],v=s[4],_=s[7],C=s[2],T=s[5],E=s[8];return r[0]=o*x+a*y+c*C,r[3]=o*g+a*v+c*T,r[6]=o*p+a*_+c*E,r[1]=l*x+h*y+u*C,r[4]=l*g+h*v+u*T,r[7]=l*p+h*_+u*E,r[2]=d*x+f*y+m*C,r[5]=d*g+f*v+m*T,r[8]=d*p+f*_+m*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Tc.makeScale(e,t)),this}rotate(e){return this.premultiply(Tc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Tc=new Ke;function Af(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wm(){let i=jr("canvas");return i.style.display="block",i}var $u={};function Hr(i){i in $u||($u[i]=!0,console.warn(i))}function Xm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function qm(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ym(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var st={enabled:!0,workingColorSpace:en,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===_t&&(i.r=hi(i.r),i.g=hi(i.g),i.b=hi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===_t&&(i.r=Ys(i.r),i.g=Ys(i.g),i.b=Ys(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bi?qa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ju=[.64,.33,.3,.6,.15,.06],Qu=[.2126,.7152,.0722],ed=[.3127,.329],td=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nd=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);st.define({[en]:{primaries:ju,whitePoint:ed,transfer:qa,toXYZ:td,fromXYZ:nd,luminanceCoefficients:Qu,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:ju,whitePoint:ed,transfer:_t,toXYZ:td,fromXYZ:nd,luminanceCoefficients:Qu,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}});var Es,Wl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Es===void 0&&(Es=jr("canvas")),Es.width=e.width,Es.height=e.height;let n=Es.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=jr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hi(t[n]/255)*255):t[n]=hi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Zm=0,fa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=Mn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ac(s[o].image)):r.push(Ac(s[o]))}else r=Ac(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ac(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Km=0,qt=class i extends Gi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ci,s=ci,r=cn,o=Gn,a=yn,c=ui,l=i.DEFAULT_ANISOTROPY,h=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=Mn(),this.name="",this.source=new fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==df)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fn:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case Jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fn:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case Jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=df;qt.DEFAULT_ANISOTROPY=1;var ct=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,_=(f+1)/2,C=(p+1)/2,T=(h+d)/4,E=(u+x)/4,P=(m+g)/4;return v>_&&v>C?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=E/n):_>C?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=P/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=E/r,s=P/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xl=class extends Gi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new qt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new fa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},di=class extends Xl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},pa=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ql=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==m){let g=1-a,p=c*d+l*f+h*m+u*x,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let C=Math.sqrt(v),T=Math.atan2(C,p*y);g=Math.sin(g*T)/C,a=Math.sin(a*T)/C}let _=a*y;if(c=c*g+d*_,l=l*g+f*_,h=h*g+m*_,u=u*g+x*_,g===1-a){let C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-a*f,e[t+2]=l*m+h*f+a*d-c*u,e[t+3]=h*m-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(id.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(id.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ec.copy(this).projectOnVector(e),this.sub(Ec)}reflect(e){return this.sub(Ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ec=new A,id=new Yt,$e=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ro.copy(n.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ur),Co.subVectors(this.max,Ur),Rs.subVectors(e.a,Ur),Cs.subVectors(e.b,Ur),Is.subVectors(e.c,Ur),Li.subVectors(Cs,Rs),Di.subVectors(Is,Cs),ss.subVectors(Rs,Is);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-ss.z,ss.y,Li.z,0,-Li.x,Di.z,0,-Di.x,ss.z,0,-ss.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-ss.y,ss.x,0];return!Rc(t,Rs,Cs,Is,Co)||(t=[1,0,0,0,1,0,0,0,1],!Rc(t,Rs,Cs,Is,Co))?!1:(Io.crossVectors(Li,Di),t=[Io.x,Io.y,Io.z],Rc(t,Rs,Cs,Is,Co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ei=[new A,new A,new A,new A,new A,new A,new A,new A],Pn=new A,Ro=new $e,Rs=new A,Cs=new A,Is=new A,Li=new A,Di=new A,ss=new A,Ur=new A,Co=new A,Io=new A,rs=new A;function Rc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){rs.fromArray(i,r);let a=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),c=e.dot(rs),l=t.dot(rs),h=n.dot(rs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Jm=new $e,Nr=new A,Cc=new A,mn=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Jm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nr.subVectors(e,this.center);let t=Nr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Nr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nr.copy(e.center).add(Cc)),this.expandByPoint(Nr.copy(e.center).sub(Cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ti=new A,Ic=new A,Po=new A,Ui=new A,Pc=new A,Lo=new A,Lc=new A,sr=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ic.copy(e).add(t).multiplyScalar(.5),Po.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(Ic);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Po),a=Ui.dot(this.direction),c=-Ui.dot(Po),l=Ui.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ic).addScaledVector(Po,d),f}intersectSphere(e,t){ti.subVectors(e.center,this.origin);let n=ti.dot(this.direction),s=ti.dot(ti)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,s,r){Pc.subVectors(t,e),Lo.subVectors(n,e),Lc.crossVectors(Pc,Lo);let o=this.direction.dot(Lc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);let c=a*this.direction.dot(Lo.crossVectors(Ui,Lo));if(c<0)return null;let l=a*this.direction.dot(Pc.cross(Ui));if(l<0||c+l>o)return null;let h=-a*Ui.dot(Lc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,m,x,g)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ps.setFromMatrixColumn(e,0).length(),r=1/Ps.setFromMatrixColumn(e,1).length(),o=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,m=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,m=l*h,x=l*u;t[0]=d+x*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,m=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,m=a*h,x=a*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,m=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*c,f=o*l,m=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($m,e,jm)}lookAt(e,t,n){let s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ni.crossVectors(n,dn),Ni.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ni.crossVectors(n,dn)),Ni.normalize(),Do.crossVectors(dn,Ni),s[0]=Ni.x,s[4]=Do.x,s[8]=dn.x,s[1]=Ni.y,s[5]=Do.y,s[9]=dn.y,s[2]=Ni.z,s[6]=Do.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],y=n[3],v=n[7],_=n[11],C=n[15],T=s[0],E=s[4],P=s[8],M=s[12],S=s[1],L=s[5],W=s[9],B=s[13],D=s[2],G=s[6],k=s[10],j=s[14],z=s[3],ae=s[7],ue=s[11],ge=s[15];return r[0]=o*T+a*S+c*D+l*z,r[4]=o*E+a*L+c*G+l*ae,r[8]=o*P+a*W+c*k+l*ue,r[12]=o*M+a*B+c*j+l*ge,r[1]=h*T+u*S+d*D+f*z,r[5]=h*E+u*L+d*G+f*ae,r[9]=h*P+u*W+d*k+f*ue,r[13]=h*M+u*B+d*j+f*ge,r[2]=m*T+x*S+g*D+p*z,r[6]=m*E+x*L+g*G+p*ae,r[10]=m*P+x*W+g*k+p*ue,r[14]=m*M+x*B+g*j+p*ge,r[3]=y*T+v*S+_*D+C*z,r[7]=y*E+v*L+_*G+C*ae,r[11]=y*P+v*W+_*k+C*ue,r[15]=y*M+v*B+_*j+C*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+x*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+g*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],y=u*g*l-x*d*l+x*c*f-a*g*f-u*c*p+a*d*p,v=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,_=h*x*l-m*u*l+m*a*f-o*x*f-h*a*p+o*u*p,C=m*u*c-h*x*c-m*a*d+o*x*d+h*a*g-o*u*g,T=t*y+n*v+s*_+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return e[0]=y*E,e[1]=(x*d*r-u*g*r-x*s*f+n*g*f+u*s*p-n*d*p)*E,e[2]=(a*g*r-x*c*r+x*s*l-n*g*l-a*s*p+n*c*p)*E,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*E,e[4]=v*E,e[5]=(h*g*r-m*d*r+m*s*f-t*g*f-h*s*p+t*d*p)*E,e[6]=(m*c*r-o*g*r-m*s*l+t*g*l+o*s*p-t*c*p)*E,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*E,e[8]=_*E,e[9]=(m*u*r-h*x*r-m*n*f+t*x*f+h*n*p-t*u*p)*E,e[10]=(o*x*r-m*a*r+m*n*l-t*x*l-o*n*p+t*a*p)*E,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*E,e[12]=C*E,e[13]=(h*x*s-m*u*s+m*n*d-t*x*d-h*n*g+t*u*g)*E,e[14]=(m*a*s-o*x*s-m*n*c+t*x*c+o*n*g-t*a*g)*E,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*E,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,x=o*h,g=o*u,p=a*u,y=c*l,v=c*h,_=c*u,C=n.x,T=n.y,E=n.z;return s[0]=(1-(x+p))*C,s[1]=(f+_)*C,s[2]=(m-v)*C,s[3]=0,s[4]=(f-_)*T,s[5]=(1-(d+p))*T,s[6]=(g+y)*T,s[7]=0,s[8]=(m+v)*E,s[9]=(g-y)*E,s[10]=(1-(d+x))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ps.set(s[0],s[1],s[2]).length(),o=Ps.set(s[4],s[5],s[6]).length(),a=Ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ln.copy(this);let l=1/r,h=1/o,u=1/a;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,t.setFromRotationMatrix(Ln),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=li){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,m;if(a===li)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===da)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=li){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*l,f=(n+s)*h,m,x;if(a===li)m=(o+r)*u,x=-2*u;else if(a===da)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ps=new A,Ln=new ze,$m=new A(0,0,0),jm=new A(1,1,1),Ni=new A,Do=new A,dn=new A,sd=new ze,rd=new Yt,Wn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rd.setFromEuler(this),this.setFromQuaternion(rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var ma=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Qm=0,od=new A,Ls=new Yt,ni=new ze,Uo=new A,Fr=new A,eg=new A,tg=new Yt,ad=new A(1,0,0),cd=new A(0,1,0),ld=new A(0,0,1),hd={type:"added"},ng={type:"removed"},Ds={type:"childadded",child:null},Dc={type:"childremoved",child:null},Tt=class i extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new A,t=new Wn,n=new Yt,s=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new Ke}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(ad,e)}rotateY(e){return this.rotateOnAxis(cd,e)}rotateZ(e){return this.rotateOnAxis(ld,e)}translateOnAxis(e,t){return od.copy(e).applyQuaternion(this.quaternion),this.position.add(od.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ad,e)}translateY(e){return this.translateOnAxis(cd,e)}translateZ(e){return this.translateOnAxis(ld,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Uo.copy(e):Uo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Fr,Uo,this.up):ni.lookAt(Uo,Fr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(ni),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hd),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ng),Dc.child=e,this.dispatchEvent(Dc),Dc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hd),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,eg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,tg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Tt.DEFAULT_UP=new A(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=new A,ii=new A,Uc=new A,si=new A,Us=new A,Ns=new A,ud=new A,Nc=new A,Fc=new A,Oc=new A,Bc=new ct,zc=new ct,kc=new ct,zi=class i{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Dn.subVectors(e,t),s.cross(Dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Dn.subVectors(s,t),ii.subVectors(n,t),Uc.subVectors(e,t);let o=Dn.dot(Dn),a=Dn.dot(ii),c=Dn.dot(Uc),l=ii.dot(ii),h=ii.dot(Uc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,si.x),c.addScaledVector(o,si.y),c.addScaledVector(a,si.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Bc.setScalar(0),zc.setScalar(0),kc.setScalar(0),Bc.fromBufferAttribute(e,t),zc.fromBufferAttribute(e,n),kc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Bc,r.x),o.addScaledVector(zc,r.y),o.addScaledVector(kc,r.z),o}static isFrontFacing(e,t,n,s){return Dn.subVectors(n,t),ii.subVectors(e,t),Dn.cross(ii).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Dn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Us.subVectors(s,n),Ns.subVectors(r,n),Nc.subVectors(e,n);let c=Us.dot(Nc),l=Ns.dot(Nc);if(c<=0&&l<=0)return t.copy(n);Fc.subVectors(e,s);let h=Us.dot(Fc),u=Ns.dot(Fc);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Us,o);Oc.subVectors(e,r);let f=Us.dot(Oc),m=Ns.dot(Oc);if(m>=0&&f<=m)return t.copy(r);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(Ns,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return ud.subVectors(r,s),a=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(ud,a);let p=1/(g+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(Us,o).addScaledVector(Ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},No={h:0,s:0,l:0};function Vc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ee=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=Ph(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Vc(o,r,e+1/3),this.g=Vc(o,r,e),this.b=Vc(o,r,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let n=Ef[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return st.fromWorkingColorSpace(jt.copy(this),e),Math.round(kt(jt.r*255,0,255))*65536+Math.round(kt(jt.g*255,0,255))*256+Math.round(kt(jt.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(jt.copy(this),t);let n=jt.r,s=jt.g,r=jt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=yt){st.fromWorkingColorSpace(jt.copy(this),e);let t=jt.r,n=jt.g,s=jt.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(No);let n=Xr(Fi.h,No.h,t),s=Xr(Fi.s,No.s,t),r=Xr(Fi.l,No.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jt=new Ee;Ee.NAMES=Ef;var ig=0,ln=class extends Gi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=Mn(),this.name="",this.blending=Ws,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=al,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(n.blending=this.blending),this.side!==pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ol&&(n.blendSrc=this.blendSrc),this.blendDst!==al&&(n.blendDst=this.blendDst),this.blendEquation!==us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(n.stencilFail=this.stencilFail),this.stencilZFail!==As&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},It=class extends ln{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=uf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ut=new A,Fo=new re,dt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gl,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fo.fromBufferAttribute(this,t),Fo.applyMatrix3(e),this.setXY(t,Fo.x,Fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gl&&(e.usage=this.usage),e}};var ga=class extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var xa=class extends dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var et=class extends dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},sg=0,vn=new ze,Hc=new Tt,Fs=new A,fn=new $e,Or=new $e,Xt=new A,bt=class i extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Af(e)?xa:ga)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return Hc.lookAt(e),Hc.updateMatrix(),this.applyMatrix4(Hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new et(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $e);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Or.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(fn.min,Or.min),fn.expandByPoint(Xt),Xt.addVectors(fn.max,Or.max),fn.expandByPoint(Xt)):(fn.expandByPoint(Or.min),fn.expandByPoint(Or.max))}fn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Xt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Xt.fromBufferAttribute(a,l),c&&(Fs.fromBufferAttribute(e,l),Xt.add(Fs)),s=Math.max(s,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new A,c[P]=new A;let l=new A,h=new A,u=new A,d=new re,f=new re,m=new re,x=new A,g=new A;function p(P,M,S){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,M),m.fromBufferAttribute(r,S),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),a[P].add(x),a[M].add(x),a[S].add(x),c[P].add(g),c[M].add(g),c[S].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,M=y.length;P<M;++P){let S=y[P],L=S.start,W=S.count;for(let B=L,D=L+W;B<D;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let v=new A,_=new A,C=new A,T=new A;function E(P){C.fromBufferAttribute(s,P),T.copy(C);let M=a[P];v.copy(M),v.sub(C.multiplyScalar(C.dot(M))).normalize(),_.crossVectors(T,M);let L=_.dot(c[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,L)}for(let P=0,M=y.length;P<M;++P){let S=y[P],L=S.start,W=S.count;for(let B=L,D=L+W;B<D;B+=3)E(e.getX(B+0)),E(e.getX(B+1)),E(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new A,r=new A,o=new A,a=new A,c=new A,l=new A,h=new A,u=new A;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new dt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},dd=new ze,os=new sr,Oo=new mn,fd=new A,Bo=new A,zo=new A,ko=new A,Gc=new A,Vo=new A,pd=new A,Ho=new A,Be=class extends Tt{constructor(e=new bt,t=new It){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Vo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Gc.fromBufferAttribute(u,e),o?Vo.addScaledVector(Gc,h):Vo.addScaledVector(Gc.sub(t),h))}t.add(Vo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(r),os.copy(e.ray).recast(e.near),!(Oo.containsPoint(os.origin)===!1&&(os.intersectSphere(Oo,fd)===null||os.origin.distanceToSquared(fd)>(e.far-e.near)**2))&&(dd.copy(r).invert(),os.copy(e.ray).applyMatrix4(dd),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,C=v;_<C;_+=3){let T=a.getX(_),E=a.getX(_+1),P=a.getX(_+2);s=Go(this,p,e,n,l,h,u,T,E,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=a.getX(g),v=a.getX(g+1),_=a.getX(g+2);s=Go(this,o,e,n,l,h,u,y,v,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),v=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,C=v;_<C;_+=3){let T=_,E=_+1,P=_+2;s=Go(this,p,e,n,l,h,u,T,E,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=g,v=g+1,_=g+2;s=Go(this,o,e,n,l,h,u,y,v,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function rg(i,e,t,n,s,r,o,a){let c;if(e.side===Kt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===pn,a),c===null)return null;Ho.copy(a),Ho.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ho);return l<t.near||l>t.far?null:{distance:l,point:Ho.clone(),object:i}}function Go(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Bo),i.getVertexPosition(c,zo),i.getVertexPosition(l,ko);let h=rg(i,e,t,n,Bo,zo,ko,pd);if(h){let u=new A;zi.getBarycoord(pd,Bo,zo,ko,u),s&&(h.uv=zi.getInterpolatedAttribute(s,a,c,l,u,new re)),r&&(h.uv1=zi.getInterpolatedAttribute(r,a,c,l,u,new re)),o&&(h.normal=zi.getInterpolatedAttribute(o,a,c,l,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new A,materialIndex:0};zi.getNormal(Bo,zo,ko,d.normal),h.face=d,h.barycoord=u}return h}var Nt=class i extends bt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(u,2));function m(x,g,p,y,v,_,C,T,E,P,M){let S=_/E,L=C/P,W=_/2,B=C/2,D=T/2,G=E+1,k=P+1,j=0,z=0,ae=new A;for(let ue=0;ue<k;ue++){let ge=ue*L-B;for(let Ce=0;Ce<G;Ce++){let je=Ce*S-W;ae[x]=je*y,ae[g]=ge*v,ae[p]=D,l.push(ae.x,ae.y,ae.z),ae[x]=0,ae[g]=0,ae[p]=T>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(Ce/E),u.push(1-ue/P),j+=1}}for(let ue=0;ue<P;ue++)for(let ge=0;ge<E;ge++){let Ce=d+ge+G*ue,je=d+ge+G*(ue+1),Y=d+(ge+1)+G*(ue+1),ne=d+(ge+1)+G*ue;c.push(Ce,je,ne),c.push(je,Y,ne),z+=6}a.addGroup(f,z,M),f+=z,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function rr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function sn(i){let e={};for(let t=0;t<i.length;t++){let n=rr(i[t]);for(let s in n)e[s]=n[s]}return e}function og(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Rf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var ag={clone:rr,merge:sn},cg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zt=class extends ln{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cg,this.fragmentShader=lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=og(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},_a=class extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Oi=new A,md=new re,gd=new re,Vt=class extends _a{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,md,gd),t.subVectors(gd,md)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Os=-90,Bs=1,Yl=class extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(Os,Bs,e,t);s.layers=this.layers,this.add(s);let r=new Vt(Os,Bs,e,t);r.layers=this.layers,this.add(r);let o=new Vt(Os,Bs,e,t);o.layers=this.layers,this.add(o);let a=new Vt(Os,Bs,e,t);a.layers=this.layers,this.add(a);let c=new Vt(Os,Bs,e,t);c.layers=this.layers,this.add(c);let l=new Vt(Os,Bs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===da)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},va=class extends qt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:$s,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Zl=class extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new va(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Nt(5,5,5),r=new Zt({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Vi});r.uniforms.tEquirect.value=t;let o=new Be(s,r),a=t.minFilter;return t.minFilter===Gn&&(t.minFilter=cn),new Yl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Wc=new A,hg=new A,ug=new Ke,ai=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Wc.subVectors(n,t).cross(hg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Wc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ug.getNormalMatrix(e),s=this.coplanarPoint(Wc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},as=new mn,Wo=new A,Qr=class{constructor(e=new ai,t=new ai,n=new ai,s=new ai,r=new ai,o=new ai){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=li){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],x=s[10],g=s[11],p=s[12],y=s[13],v=s[14],_=s[15];if(n[0].setComponents(c-r,d-l,g-f,_-p).normalize(),n[1].setComponents(c+r,d+l,g+f,_+p).normalize(),n[2].setComponents(c+o,d+h,g+m,_+y).normalize(),n[3].setComponents(c-o,d-h,g-m,_-y).normalize(),n[4].setComponents(c-a,d-u,g-x,_-v).normalize(),t===li)n[5].setComponents(c+a,d+u,g+x,_+v).normalize();else if(t===da)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Wo.x=s.normal.x>0?e.max.x:e.min.x,Wo.y=s.normal.y>0?e.max.y:e.min.y,Wo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Cf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function dg(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var gn=class i extends bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let y=p*d-o;for(let v=0;v<l;v++){let _=v*u-r;m.push(_,-y,0),x.push(0,0,1),g.push(v/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let v=y+l*p,_=y+l*(p+1),C=y+1+l*(p+1),T=y+1+l*p;f.push(v,_,T),f.push(_,C,T)}this.setIndex(f),this.setAttribute("position",new et(m,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},fg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ag=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Eg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Og=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$g=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,t0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,r0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,o0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,u0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,d0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,f0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,p0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,b0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,C0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,P0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,N0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,F0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,H0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,J0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,j0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ox=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ax=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ax=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ex=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Px=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Dx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ux=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ox=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:fg,alphahash_pars_fragment:pg,alphamap_fragment:mg,alphamap_pars_fragment:gg,alphatest_fragment:xg,alphatest_pars_fragment:_g,aomap_fragment:vg,aomap_pars_fragment:yg,batching_pars_vertex:Mg,batching_vertex:bg,begin_vertex:Sg,beginnormal_vertex:wg,bsdfs:Tg,iridescence_fragment:Ag,bumpmap_pars_fragment:Eg,clipping_planes_fragment:Rg,clipping_planes_pars_fragment:Cg,clipping_planes_pars_vertex:Ig,clipping_planes_vertex:Pg,color_fragment:Lg,color_pars_fragment:Dg,color_pars_vertex:Ug,color_vertex:Ng,common:Fg,cube_uv_reflection_fragment:Og,defaultnormal_vertex:Bg,displacementmap_pars_vertex:zg,displacementmap_vertex:kg,emissivemap_fragment:Vg,emissivemap_pars_fragment:Hg,colorspace_fragment:Gg,colorspace_pars_fragment:Wg,envmap_fragment:Xg,envmap_common_pars_fragment:qg,envmap_pars_fragment:Yg,envmap_pars_vertex:Zg,envmap_physical_pars_fragment:r0,envmap_vertex:Kg,fog_vertex:Jg,fog_pars_vertex:$g,fog_fragment:jg,fog_pars_fragment:Qg,gradientmap_pars_fragment:e0,lightmap_pars_fragment:t0,lights_lambert_fragment:n0,lights_lambert_pars_fragment:i0,lights_pars_begin:s0,lights_toon_fragment:o0,lights_toon_pars_fragment:a0,lights_phong_fragment:c0,lights_phong_pars_fragment:l0,lights_physical_fragment:h0,lights_physical_pars_fragment:u0,lights_fragment_begin:d0,lights_fragment_maps:f0,lights_fragment_end:p0,logdepthbuf_fragment:m0,logdepthbuf_pars_fragment:g0,logdepthbuf_pars_vertex:x0,logdepthbuf_vertex:_0,map_fragment:v0,map_pars_fragment:y0,map_particle_fragment:M0,map_particle_pars_fragment:b0,metalnessmap_fragment:S0,metalnessmap_pars_fragment:w0,morphinstance_vertex:T0,morphcolor_vertex:A0,morphnormal_vertex:E0,morphtarget_pars_vertex:R0,morphtarget_vertex:C0,normal_fragment_begin:I0,normal_fragment_maps:P0,normal_pars_fragment:L0,normal_pars_vertex:D0,normal_vertex:U0,normalmap_pars_fragment:N0,clearcoat_normal_fragment_begin:F0,clearcoat_normal_fragment_maps:O0,clearcoat_pars_fragment:B0,iridescence_pars_fragment:z0,opaque_fragment:k0,packing:V0,premultiplied_alpha_fragment:H0,project_vertex:G0,dithering_fragment:W0,dithering_pars_fragment:X0,roughnessmap_fragment:q0,roughnessmap_pars_fragment:Y0,shadowmap_pars_fragment:Z0,shadowmap_pars_vertex:K0,shadowmap_vertex:J0,shadowmask_pars_fragment:$0,skinbase_vertex:j0,skinning_pars_vertex:Q0,skinning_vertex:ex,skinnormal_vertex:tx,specularmap_fragment:nx,specularmap_pars_fragment:ix,tonemapping_fragment:sx,tonemapping_pars_fragment:rx,transmission_fragment:ox,transmission_pars_fragment:ax,uv_pars_fragment:cx,uv_pars_vertex:lx,uv_vertex:hx,worldpos_vertex:ux,background_vert:dx,background_frag:fx,backgroundCube_vert:px,backgroundCube_frag:mx,cube_vert:gx,cube_frag:xx,depth_vert:_x,depth_frag:vx,distanceRGBA_vert:yx,distanceRGBA_frag:Mx,equirect_vert:bx,equirect_frag:Sx,linedashed_vert:wx,linedashed_frag:Tx,meshbasic_vert:Ax,meshbasic_frag:Ex,meshlambert_vert:Rx,meshlambert_frag:Cx,meshmatcap_vert:Ix,meshmatcap_frag:Px,meshnormal_vert:Lx,meshnormal_frag:Dx,meshphong_vert:Ux,meshphong_frag:Nx,meshphysical_vert:Fx,meshphysical_frag:Ox,meshtoon_vert:Bx,meshtoon_frag:zx,points_vert:kx,points_frag:Vx,shadow_vert:Hx,shadow_frag:Gx,sprite_vert:Wx,sprite_frag:Xx},me={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Hn={basic:{uniforms:sn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:sn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:sn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:sn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:sn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:sn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:sn([me.points,me.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:sn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:sn([me.common,me.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:sn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:sn([me.sprite,me.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:sn([me.common,me.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:sn([me.lights,me.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Hn.physical={uniforms:sn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Xo={r:0,b:0,g:0},cs=new Wn,qx=new ze;function Yx(i,e,t,n,s,r,o){let a=new Ee(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function x(y){let v=!1,_=m(y);_===null?p(a,c):_&&_.isColor&&(p(_,1),v=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,v){let _=m(v);_&&(_.isCubeTexture||_.mapping===Wa)?(h===void 0&&(h=new Be(new Nt(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:rr(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),cs.copy(v.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qx.makeRotationFromEuler(cs)),h.material.toneMapped=st.getTransfer(_.colorSpace)!==_t,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Be(new gn(2,2),new Zt({name:"BackgroundMaterial",uniforms:rr(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=st.getTransfer(_.colorSpace)!==_t,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,v){y.getRGB(Xo,Rf(i)),n.buffers.color.setClear(Xo.r,Xo.g,Xo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:x,addToRenderList:g}}function Zx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(S,L,W,B,D){let G=!1,k=u(B,W,L);r!==k&&(r=k,l(r.object)),G=f(S,B,W,D),G&&m(S,B,W,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,_(S,L,W,B),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,L,W){let B=W.wireframe===!0,D=n[S.id];D===void 0&&(D={},n[S.id]=D);let G=D[L.id];G===void 0&&(G={},D[L.id]=G);let k=G[B];return k===void 0&&(k=d(c()),G[B]=k),k}function d(S){let L=[],W=[],B=[];for(let D=0;D<t;D++)L[D]=0,W[D]=0,B[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:W,attributeDivisors:B,object:S,attributes:{},index:null}}function f(S,L,W,B){let D=r.attributes,G=L.attributes,k=0,j=W.getAttributes();for(let z in j)if(j[z].location>=0){let ue=D[z],ge=G[z];if(ge===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(ge=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(ge=S.instanceColor)),ue===void 0||ue.attribute!==ge||ge&&ue.data!==ge.data)return!0;k++}return r.attributesNum!==k||r.index!==B}function m(S,L,W,B){let D={},G=L.attributes,k=0,j=W.getAttributes();for(let z in j)if(j[z].location>=0){let ue=G[z];ue===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor));let ge={};ge.attribute=ue,ue&&ue.data&&(ge.data=ue.data),D[z]=ge,k++}r.attributes=D,r.attributesNum=k,r.index=B}function x(){let S=r.newAttributes;for(let L=0,W=S.length;L<W;L++)S[L]=0}function g(S){p(S,0)}function p(S,L){let W=r.newAttributes,B=r.enabledAttributes,D=r.attributeDivisors;W[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),D[S]!==L&&(i.vertexAttribDivisor(S,L),D[S]=L)}function y(){let S=r.newAttributes,L=r.enabledAttributes;for(let W=0,B=L.length;W<B;W++)L[W]!==S[W]&&(i.disableVertexAttribArray(W),L[W]=0)}function v(S,L,W,B,D,G,k){k===!0?i.vertexAttribIPointer(S,L,W,D,G):i.vertexAttribPointer(S,L,W,B,D,G)}function _(S,L,W,B){x();let D=B.attributes,G=W.getAttributes(),k=L.defaultAttributeValues;for(let j in G){let z=G[j];if(z.location>=0){let ae=D[j];if(ae===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),ae!==void 0){let ue=ae.normalized,ge=ae.itemSize,Ce=e.get(ae);if(Ce===void 0)continue;let je=Ce.buffer,Y=Ce.type,ne=Ce.bytesPerElement,de=Y===i.INT||Y===i.UNSIGNED_INT||ae.gpuType===Sh;if(ae.isInterleavedBufferAttribute){let te=ae.data,Ie=te.stride,Ve=ae.offset;if(te.isInstancedInterleavedBuffer){for(let Ne=0;Ne<z.locationSize;Ne++)p(z.location+Ne,te.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ne=0;Ne<z.locationSize;Ne++)g(z.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,je);for(let Ne=0;Ne<z.locationSize;Ne++)v(z.location+Ne,ge/z.locationSize,Y,ue,Ie*ne,(Ve+ge/z.locationSize*Ne)*ne,de)}else{if(ae.isInstancedBufferAttribute){for(let te=0;te<z.locationSize;te++)p(z.location+te,ae.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let te=0;te<z.locationSize;te++)g(z.location+te);i.bindBuffer(i.ARRAY_BUFFER,je);for(let te=0;te<z.locationSize;te++)v(z.location+te,ge/z.locationSize,Y,ue,ge*ne,ge/z.locationSize*te*ne,de)}}else if(k!==void 0){let ue=k[j];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(z.location,ue);break;case 3:i.vertexAttrib3fv(z.location,ue);break;case 4:i.vertexAttrib4fv(z.location,ue);break;default:i.vertexAttrib1fv(z.location,ue)}}}}y()}function C(){P();for(let S in n){let L=n[S];for(let W in L){let B=L[W];for(let D in B)h(B[D].object),delete B[D];delete L[W]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;let L=n[S.id];for(let W in L){let B=L[W];for(let D in B)h(B[D].object),delete B[D];delete L[W]}delete n[S.id]}function E(S){for(let L in n){let W=n[L];if(W[S.id]===void 0)continue;let B=W[S.id];for(let D in B)h(B[D].object),delete B[D];delete W[S.id]}}function P(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function Kx(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Jx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==yn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let P=E===fo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==ui&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Nn&&!P)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:C,maxSamples:T}}function $x(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ai,a=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let y=r?0:n,v=y*4,_=p.clippingState||null;c.value=_,_=h(m,d,v,f);for(let C=0;C!==v;++C)_[C]=t[C];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,_=f;v!==x;++v,_+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(g,_),g[_+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function jx(i){let e=new WeakMap;function t(o,a){return a===ml?o.mapping=$s:a===gl&&(o.mapping=js),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ml||a===gl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Zl(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Wi=class extends _a{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hs=4,xd=[.125,.215,.35,.446,.526,.582],ds=20,Xc=new Wi,_d=new Ee,qc=null,Yc=0,Zc=0,Kc=!1,hs=(1+Math.sqrt(5))/2,zs=1/hs,vd=[new A(-hs,zs,0),new A(hs,zs,0),new A(-zs,0,hs),new A(zs,0,hs),new A(0,hs,-zs),new A(0,hs,zs),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],or=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,Yc,Zc),this._renderer.xr.enabled=Kc,e.scissorTest=!1,qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$s||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:fo,format:yn,colorSpace:en,depthBuffer:!1},s=yd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qx(r)),this._blurMaterial=e_(r,e,t)}return s}_compileMaterial(e){let t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,Xc)}_sceneToCubeUV(e,t,n,s){let a=new Vt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(_d),h.toneMapping=Hi,h.autoClear=!1;let f=new It({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),m=new Be(new Nt,f),x=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,x=!0):(f.color.copy(_d),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;qo(s,y*v,p>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===$s||e.mapping===js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Md());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;qo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Xc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vd[(s-r-1)%vd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Be(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ds-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):ds;g>ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ds}`);let p=[],y=0;for(let E=0;E<ds;++E){let P=E/x,M=Math.exp(-P*P/2);p.push(M),E===0?y+=M:E<g&&(y+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;let _=this._sizeLods[s],C=3*_*(s>v-Hs?s-v+Hs:0),T=4*(this._cubeSize-_);qo(t,C,T,3*_,2*_),c.setRenderTarget(t),c.render(u,Xc)}};function Qx(i){let e=[],t=[],n=[],s=i,r=i-Hs+1+xd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Hs?c=xd[o-i+Hs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,y=new Float32Array(x*m*f),v=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let T=0;T<f;T++){let E=T%3*2/3-1,P=T>2?0:-1,M=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];y.set(M,x*m*T),v.set(d,g*m*T);let S=[T,T,T,T,T,T];_.set(S,p*m*T)}let C=new bt;C.setAttribute("position",new dt(y,x)),C.setAttribute("uv",new dt(v,g)),C.setAttribute("faceIndex",new dt(_,p)),e.push(C),s>Hs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yd(i,e,t){let n=new di(i,e,t);return n.texture.mapping=Wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function e_(i,e,t){let n=new Float32Array(ds),s=new A(0,1,0);return new Zt({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Md(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function bd(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Lh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function t_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===ml||c===gl,h=c===$s||c===js;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new or(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new or(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function n_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Hr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function i_(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);for(let m in d.morphAttributes){let x=d.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)e.remove(x[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)e.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let x=f[m];for(let g=0,p=x.length;g<p;g++)e.update(x[g],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let v=0,_=y.length;v<_;v+=3){let C=y[v+0],T=y[v+1],E=y[v+2];d.push(C,T,T,E,E,C)}}else if(m!==void 0){let y=m.array;x=m.version;for(let v=0,_=y.length/3-1;v<_;v+=3){let C=v+0,T=v+1,E=v+2;d.push(C,T,T,E,E,C)}}else return;let g=new(Af(d)?xa:ga)(d,1);g.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function s_(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,x){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*x[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function r_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function o_(i,e,t){let n=new WeakMap,s=new ct;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let M=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;f===!0&&(v=1),m===!0&&(v=2),x===!0&&(v=3);let _=a.attributes.position.count*v,C=1;_>e.maxTextureSize&&(C=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*C*4*u),E=new pa(T,_,C,u);E.type=Nn,E.needsUpdate=!0;let P=v*4;for(let S=0;S<u;S++){let L=g[S],W=p[S],B=y[S],D=_*C*4*S;for(let G=0;G<L.count;G++){let k=G*P;f===!0&&(s.fromBufferAttribute(L,G),T[D+k+0]=s.x,T[D+k+1]=s.y,T[D+k+2]=s.z,T[D+k+3]=0),m===!0&&(s.fromBufferAttribute(W,G),T[D+k+4]=s.x,T[D+k+5]=s.y,T[D+k+6]=s.z,T[D+k+7]=0),x===!0&&(s.fromBufferAttribute(B,G),T[D+k+8]=s.x,T[D+k+9]=s.y,T[D+k+10]=s.z,T[D+k+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new re(_,C)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function a_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var ya=class extends qt{constructor(e,t,n,s,r,o,a,c,l,h=Xs){if(h!==Xs&&h!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xs&&(n=fs),n===void 0&&h===er&&(n=Qs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=c!==void 0?c:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},If=new qt,Sd=new ya(1,1),Pf=new pa,Lf=new ql,Df=new va,wd=[],Td=[],Ad=new Float32Array(16),Ed=new Float32Array(9),Rd=new Float32Array(4);function pr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=wd[s];if(r===void 0&&(r=new Float32Array(s),wd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ya(i,e){let t=Td[e];t===void 0&&(t=new Int32Array(e),Td[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function c_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function l_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function h_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function u_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function d_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;Rd.set(n),i.uniformMatrix2fv(this.addr,!1,Rd),Gt(t,n)}}function f_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;Ed.set(n),i.uniformMatrix3fv(this.addr,!1,Ed),Gt(t,n)}}function p_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;Ad.set(n),i.uniformMatrix4fv(this.addr,!1,Ad),Gt(t,n)}}function m_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function g_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function x_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function __(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function v_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function M_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function b_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function S_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sd.compareFunction=wf,r=Sd):r=If,t.setTexture2D(e||r,s)}function w_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Lf,s)}function T_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Df,s)}function A_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Pf,s)}function E_(i){switch(i){case 5126:return c_;case 35664:return l_;case 35665:return h_;case 35666:return u_;case 35674:return d_;case 35675:return f_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return x_;case 35669:case 35673:return __;case 5125:return v_;case 36294:return y_;case 36295:return M_;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return A_}}function R_(i,e){i.uniform1fv(this.addr,e)}function C_(i,e){let t=pr(e,this.size,2);i.uniform2fv(this.addr,t)}function I_(i,e){let t=pr(e,this.size,3);i.uniform3fv(this.addr,t)}function P_(i,e){let t=pr(e,this.size,4);i.uniform4fv(this.addr,t)}function L_(i,e){let t=pr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function D_(i,e){let t=pr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function U_(i,e){let t=pr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function N_(i,e){i.uniform1iv(this.addr,e)}function F_(i,e){i.uniform2iv(this.addr,e)}function O_(i,e){i.uniform3iv(this.addr,e)}function B_(i,e){i.uniform4iv(this.addr,e)}function z_(i,e){i.uniform1uiv(this.addr,e)}function k_(i,e){i.uniform2uiv(this.addr,e)}function V_(i,e){i.uniform3uiv(this.addr,e)}function H_(i,e){i.uniform4uiv(this.addr,e)}function G_(i,e,t){let n=this.cache,s=e.length,r=Ya(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||If,r[o])}function W_(i,e,t){let n=this.cache,s=e.length,r=Ya(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Lf,r[o])}function X_(i,e,t){let n=this.cache,s=e.length,r=Ya(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Df,r[o])}function q_(i,e,t){let n=this.cache,s=e.length,r=Ya(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Pf,r[o])}function Y_(i){switch(i){case 5126:return R_;case 35664:return C_;case 35665:return I_;case 35666:return P_;case 35674:return L_;case 35675:return D_;case 35676:return U_;case 5124:case 35670:return N_;case 35667:case 35671:return F_;case 35668:case 35672:return O_;case 35669:case 35673:return B_;case 5125:return z_;case 36294:return k_;case 36295:return V_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return G_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return q_}}var Kl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=E_(t.type)}},Jl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y_(t.type)}},$l=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Jc=/(\w+)(\])?(\[|\.)?/g;function Cd(i,e){i.seq.push(e),i.map[e.id]=e}function Z_(i,e,t){let n=i.name,s=n.length;for(Jc.lastIndex=0;;){let r=Jc.exec(n),o=Jc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Cd(t,l===void 0?new Kl(a,i,e):new Jl(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new $l(a),Cd(t,u)),t=u}}}var Zs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Z_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Id(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var K_=37297,J_=0;function $_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Pd=new Ke;function j_(i){st._getMatrix(Pd,st.workingColorSpace,i);let e=`mat3( ${Pd.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case qa:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ld(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+$_(i.getShaderSource(e),o)}else return s}function Q_(i,e){let t=j_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ev(i,e){let t;switch(e){case lm:t="Linear";break;case hm:t="Reinhard";break;case um:t="Cineon";break;case dm:t="ACESFilmic";break;case pm:t="AgX";break;case mm:t="Neutral";break;case fm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Yo=new A;function tv(){st.getLuminanceCoefficients(Yo);let i=Yo.x.toFixed(4),e=Yo.y.toFixed(4),t=Yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function iv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Gr(i){return i!==""}function Dd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ud(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var rv=/^[ \t]*#include +<([\w\d./]+)>/gm;function jl(i){return i.replace(rv,av)}var ov=new Map;function av(i,e){let t=Je[e];if(t===void 0){let n=ov.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return jl(t)}var cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nd(i){return i.replace(cv,lv)}function lv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===uo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function uv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $s:case js:e="ENVMAP_TYPE_CUBE";break;case Wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function fv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case uf:e="ENVMAP_BLENDING_MULTIPLY";break;case am:e="ENVMAP_BLENDING_MIX";break;case cm:e="ENVMAP_BLENDING_ADD";break}return e}function pv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function mv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=hv(t),l=uv(t),h=dv(t),u=fv(t),d=pv(t),f=nv(t),m=iv(r),x=s.createProgram(),g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Gr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Gr).join(`
`),p.length>0&&(p+=`
`)):(g=[Fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),p=[Fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?Je.tonemapping_pars_fragment:"",t.toneMapping!==Hi?ev("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Q_("linearToOutputTexel",t.outputColorSpace),tv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gr).join(`
`)),o=jl(o),o=Dd(o,t),o=Ud(o,t),a=jl(a),a=Dd(a,t),a=Ud(a,t),o=Nd(o),a=Nd(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=y+g+o,_=y+p+a,C=Id(s,s.VERTEX_SHADER,v),T=Id(s,s.FRAGMENT_SHADER,_);s.attachShader(x,C),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(L){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(C).trim(),D=s.getShaderInfoLog(T).trim(),G=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,T);else{let j=Ld(s,C,"vertex"),z=Ld(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+j+`
`+z)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(B===""||D==="")&&(k=!1);k&&(L.diagnostics={runnable:G,programLog:W,vertexShader:{log:B,prefix:g},fragmentShader:{log:D,prefix:p}})}s.deleteShader(C),s.deleteShader(T),P=new Zs(s,x),M=sv(s,x)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,K_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=J_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=T,this}var gv=0,Ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new eh(e),t.set(e,n)),n}},eh=class{constructor(e){this.id=gv++,this.code=e,this.usedTimes=0}};function xv(i,e,t,n,s,r,o){let a=new ma,c=new Ql,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,S,L,W,B){let D=W.fog,G=B.geometry,k=M.isMeshStandardMaterial?W.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||k),z=j&&j.mapping===Wa?j.image.height:null,ae=m[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let ue=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ge=ue!==void 0?ue.length:0,Ce=0;G.morphAttributes.position!==void 0&&(Ce=1),G.morphAttributes.normal!==void 0&&(Ce=2),G.morphAttributes.color!==void 0&&(Ce=3);let je,Y,ne,de;if(ae){let X=Hn[ae];je=X.vertexShader,Y=X.fragmentShader}else je=M.vertexShader,Y=M.fragmentShader,c.update(M),ne=c.getVertexShaderID(M),de=c.getFragmentShaderID(M);let te=i.getRenderTarget(),Ie=i.state.buffers.depth.getReversed(),Ve=B.isInstancedMesh===!0,Ne=B.isBatchedMesh===!0,Qe=!!M.map,$=!!M.matcap,oe=!!j,I=!!M.aoMap,se=!!M.lightMap,ie=!!M.bumpMap,be=!!M.normalMap,le=!!M.displacementMap,Fe=!!M.emissiveMap,ve=!!M.metalnessMap,R=!!M.roughnessMap,b=M.anisotropy>0,O=M.clearcoat>0,K=M.dispersion>0,Q=M.iridescence>0,Z=M.sheen>0,Te=M.transmission>0,he=b&&!!M.anisotropyMap,_e=O&&!!M.clearcoatMap,Ye=O&&!!M.clearcoatNormalMap,ee=O&&!!M.clearcoatRoughnessMap,ye=Q&&!!M.iridescenceMap,Oe=Q&&!!M.iridescenceThicknessMap,ke=Z&&!!M.sheenColorMap,Ae=Z&&!!M.sheenRoughnessMap,it=!!M.specularMap,Xe=!!M.specularColorMap,gt=!!M.specularIntensityMap,U=Te&&!!M.transmissionMap,fe=Te&&!!M.thicknessMap,q=!!M.gradientMap,J=!!M.alphaMap,pe=M.alphaTest>0,xe=!!M.alphaHash,Ge=!!M.extensions,vt=Hi;M.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(vt=i.toneMapping);let zt={shaderID:ae,shaderType:M.type,shaderName:M.name,vertexShader:je,fragmentShader:Y,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:de,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&B._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&B.instanceColor!==null,instancingMorph:Ve&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:en,alphaToCoverage:!!M.alphaToCoverage,map:Qe,matcap:$,envMap:oe,envMapMode:oe&&j.mapping,envMapCubeUVHeight:z,aoMap:I,lightMap:se,bumpMap:ie,normalMap:be,displacementMap:d&&le,emissiveMap:Fe,normalMapObjectSpace:be&&M.normalMapType===ym,normalMapTangentSpace:be&&M.normalMapType===Sf,metalnessMap:ve,roughnessMap:R,anisotropy:b,anisotropyMap:he,clearcoat:O,clearcoatMap:_e,clearcoatNormalMap:Ye,clearcoatRoughnessMap:ee,dispersion:K,iridescence:Q,iridescenceMap:ye,iridescenceThicknessMap:Oe,sheen:Z,sheenColorMap:ke,sheenRoughnessMap:Ae,specularMap:it,specularColorMap:Xe,specularIntensityMap:gt,transmission:Te,transmissionMap:U,thicknessMap:fe,gradientMap:q,opaque:M.transparent===!1&&M.blending===Ws&&M.alphaToCoverage===!1,alphaMap:J,alphaTest:pe,alphaHash:xe,combine:M.combine,mapUv:Qe&&x(M.map.channel),aoMapUv:I&&x(M.aoMap.channel),lightMapUv:se&&x(M.lightMap.channel),bumpMapUv:ie&&x(M.bumpMap.channel),normalMapUv:be&&x(M.normalMap.channel),displacementMapUv:le&&x(M.displacementMap.channel),emissiveMapUv:Fe&&x(M.emissiveMap.channel),metalnessMapUv:ve&&x(M.metalnessMap.channel),roughnessMapUv:R&&x(M.roughnessMap.channel),anisotropyMapUv:he&&x(M.anisotropyMap.channel),clearcoatMapUv:_e&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&x(M.sheenRoughnessMap.channel),specularMapUv:it&&x(M.specularMap.channel),specularColorMapUv:Xe&&x(M.specularColorMap.channel),specularIntensityMapUv:gt&&x(M.specularIntensityMap.channel),transmissionMapUv:U&&x(M.transmissionMap.channel),thicknessMapUv:fe&&x(M.thicknessMap.channel),alphaMapUv:J&&x(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(be||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!G.attributes.uv&&(Qe||J),fog:!!D,useFog:M.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ie,skinning:B.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:vt,decodeVideoTexture:Qe&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===_t,decodeVideoTextureEmissive:Fe&&M.emissiveMap.isVideoTexture===!0&&st.getTransfer(M.emissiveMap.colorSpace)===_t,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Mt,flipSided:M.side===Kt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ge&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&M.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function p(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(y(S,M),v(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){let S=m[M.type],L;if(S){let W=Hn[S];L=ag.clone(W.uniforms)}else L=M.uniforms;return L}function C(M,S){let L;for(let W=0,B=h.length;W<B;W++){let D=h[W];if(D.cacheKey===S){L=D,++L.usedTimes;break}}return L===void 0&&(L=new mv(i,S,M,r),h.push(L)),L}function T(M){if(--M.usedTimes===0){let S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function E(M){c.remove(M)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:C,releaseProgram:T,releaseShaderCache:E,programs:h,dispose:P}}function _v(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function vv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Od(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,m,x,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),e++,p}function a(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||vv),n.length>1&&n.sort(d||Od),s.length>1&&s.sort(d||Od)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function yv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Bd,i.set(n,[o])):s>=r.length?(o=new Bd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Mv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ee};break;case"SpotLight":t={position:new A,direction:new A,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function bv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Sv=0;function wv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Tv(i){let e=new Mv,t=bv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);let s=new A,r=new ze,o=new ze;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,y=0,v=0,_=0,C=0,T=0,E=0;l.sort(wv);for(let M=0,S=l.length;M<S;M++){let L=l[M],W=L.color,B=L.intensity,D=L.distance,G=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=W.r*B,u+=W.g*B,d+=W.b*B;else if(L.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(L.sh.coefficients[k],B);E++}else if(L.isDirectionalLight){let k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,z=t.get(L);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=L.shadow.matrix,y++}n.directional[f]=k,f++}else if(L.isSpotLight){let k=e.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(W).multiplyScalar(B),k.distance=D,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,n.spot[x]=k;let j=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,j.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[x]=j.matrix,L.castShadow){let z=t.get(L);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=G,_++}x++}else if(L.isRectAreaLight){let k=e.get(L);k.color.copy(W).multiplyScalar(B),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=k,g++}else if(L.isPointLight){let k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){let j=L.shadow,z=t.get(L);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,z.shadowCameraNear=j.camera.near,z.shadowCameraFar=j.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=L.shadow.matrix,v++}n.point[m]=k,m++}else if(L.isHemisphereLight){let k=e.get(L);k.skyColor.copy(L.color).multiplyScalar(B),k.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[p]=k,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==v||P.numSpotShadows!==_||P.numSpotMaps!==C||P.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,P.directionalLength=f,P.pointLength=m,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=v,P.numSpotShadows=_,P.numSpotMaps=C,P.numLightProbes=E,n.version=Sv++)}function c(l,h){let u=0,d=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let v=l[p];if(v.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(v.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(v.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function zd(i){let e=new Tv(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Av(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new zd(i),e.set(s,[a])):r>=o.length?(a=new zd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var th=class extends ln{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=_m,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},nh=class extends ln{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Cv(i,e,t){let n=new Qr,s=new re,r=new re,o=new ct,a=new th({depthPacking:vm}),c=new nh,l={},h=t.maxTextureSize,u={[pn]:Kt,[Kt]:pn,[Mt]:Mt},d=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Ev,fragmentShader:Rv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new bt;m.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Be(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hf;let p=this.type;this.render=function(T,E,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let M=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Vi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let B=p!==oi&&this.type===oi,D=p===oi&&this.type!==oi;for(let G=0,k=T.length;G<k;G++){let j=T[G],z=j.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let ae=z.getFrameExtents();if(s.multiply(ae),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ae.x),s.x=r.x*ae.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ae.y),s.y=r.y*ae.y,z.mapSize.y=r.y)),z.map===null||B===!0||D===!0){let ge=this.type!==oi?{minFilter:Qt,magFilter:Qt}:{};z.map!==null&&z.map.dispose(),z.map=new di(s.x,s.y,ge),z.map.texture.name=j.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let ue=z.getViewportCount();for(let ge=0;ge<ue;ge++){let Ce=z.getViewport(ge);o.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),W.viewport(o),z.updateMatrices(j,ge),n=z.getFrustum(),_(E,P,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===oi&&y(z,P),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(M,S,L)};function y(T,E){let P=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new di(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,P,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,P,f,x,null)}function v(T,E,P,M){let S=null,L=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)S=L;else if(S=P.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let W=S.uuid,B=E.uuid,D=l[W];D===void 0&&(D={},l[W]=D);let G=D[B];G===void 0&&(G=S.clone(),D[B]=G,E.addEventListener("dispose",C)),S=G}if(S.visible=E.visible,S.wireframe=E.wireframe,M===oi?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:u[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let W=i.properties.get(S);W.light=P}return S}function _(T,E,P,M,S){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===oi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let B=e.update(T),D=T.material;if(Array.isArray(D)){let G=B.groups;for(let k=0,j=G.length;k<j;k++){let z=G[k],ae=D[z.materialIndex];if(ae&&ae.visible){let ue=v(T,ae,M,S);T.onBeforeShadow(i,T,E,P,B,ue,z),i.renderBufferDirect(P,null,B,ue,T,z),T.onAfterShadow(i,T,E,P,B,ue,z)}}}else if(D.visible){let G=v(T,D,M,S);T.onBeforeShadow(i,T,E,P,B,G,null),i.renderBufferDirect(P,null,B,G,T,null),T.onAfterShadow(i,T,E,P,B,G,null)}}let W=T.children;for(let B=0,D=W.length;B<D;B++)_(W[B],E,P,M,S)}function C(T){T.target.removeEventListener("dispose",C);for(let P in l){let M=l[P],S=T.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}var Iv={[cl]:ll,[hl]:fl,[ul]:pl,[Js]:dl,[ll]:cl,[fl]:hl,[pl]:ul,[dl]:Js};function Pv(i,e){function t(){let U=!1,fe=new ct,q=null,J=new ct(0,0,0,0);return{setMask:function(pe){q!==pe&&!U&&(i.colorMask(pe,pe,pe,pe),q=pe)},setLocked:function(pe){U=pe},setClear:function(pe,xe,Ge,vt,zt){zt===!0&&(pe*=vt,xe*=vt,Ge*=vt),fe.set(pe,xe,Ge,vt),J.equals(fe)===!1&&(i.clearColor(pe,xe,Ge,vt),J.copy(fe))},reset:function(){U=!1,q=null,J.set(-1,0,0,0)}}}function n(){let U=!1,fe=!1,q=null,J=null,pe=null;return{setReversed:function(xe){if(fe!==xe){let Ge=e.get("EXT_clip_control");fe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);let vt=pe;pe=null,this.setClear(vt)}fe=xe},getReversed:function(){return fe},setTest:function(xe){xe?te(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(xe){q!==xe&&!U&&(i.depthMask(xe),q=xe)},setFunc:function(xe){if(fe&&(xe=Iv[xe]),J!==xe){switch(xe){case cl:i.depthFunc(i.NEVER);break;case ll:i.depthFunc(i.ALWAYS);break;case hl:i.depthFunc(i.LESS);break;case Js:i.depthFunc(i.LEQUAL);break;case ul:i.depthFunc(i.EQUAL);break;case dl:i.depthFunc(i.GEQUAL);break;case fl:i.depthFunc(i.GREATER);break;case pl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=xe}},setLocked:function(xe){U=xe},setClear:function(xe){pe!==xe&&(fe&&(xe=1-xe),i.clearDepth(xe),pe=xe)},reset:function(){U=!1,q=null,J=null,pe=null,fe=!1}}}function s(){let U=!1,fe=null,q=null,J=null,pe=null,xe=null,Ge=null,vt=null,zt=null;return{setTest:function(X){U||(X?te(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(X){fe!==X&&!U&&(i.stencilMask(X),fe=X)},setFunc:function(X,Se,Re){(q!==X||J!==Se||pe!==Re)&&(i.stencilFunc(X,Se,Re),q=X,J=Se,pe=Re)},setOp:function(X,Se,Re){(xe!==X||Ge!==Se||vt!==Re)&&(i.stencilOp(X,Se,Re),xe=X,Ge=Se,vt=Re)},setLocked:function(X){U=X},setClear:function(X){zt!==X&&(i.clearStencil(X),zt=X)},reset:function(){U=!1,fe=null,q=null,J=null,pe=null,xe=null,Ge=null,vt=null,zt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,y=null,v=null,_=null,C=null,T=null,E=new Ee(0,0,0),P=0,M=!1,S=null,L=null,W=null,B=null,D=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,j=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(z)[1]),k=j>=1):z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),k=j>=2);let ae=null,ue={},ge=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),je=new ct().fromArray(ge),Y=new ct().fromArray(Ce);function ne(U,fe,q,J){let pe=new Uint8Array(4),xe=i.createTexture();i.bindTexture(U,xe),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<q;Ge++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(fe+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return xe}let de={};de[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),de[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),de[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(i.DEPTH_TEST),o.setFunc(Js),ie(!1),be(Vu),te(i.CULL_FACE),I(Vi);function te(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Ie(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ve(U,fe){return u[U]!==fe?(i.bindFramebuffer(U,fe),u[U]=fe,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=fe),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ne(U,fe){let q=f,J=!1;if(U){q=d.get(fe),q===void 0&&(q=[],d.set(fe,q));let pe=U.textures;if(q.length!==pe.length||q[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,Ge=pe.length;xe<Ge;xe++)q[xe]=i.COLOR_ATTACHMENT0+xe;q.length=pe.length,J=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,J=!0);J&&i.drawBuffers(q)}function Qe(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let $={[us]:i.FUNC_ADD,[Wp]:i.FUNC_SUBTRACT,[Xp]:i.FUNC_REVERSE_SUBTRACT};$[qp]=i.MIN,$[Yp]=i.MAX;let oe={[Zp]:i.ZERO,[Kp]:i.ONE,[Jp]:i.SRC_COLOR,[ol]:i.SRC_ALPHA,[nm]:i.SRC_ALPHA_SATURATE,[em]:i.DST_COLOR,[jp]:i.DST_ALPHA,[$p]:i.ONE_MINUS_SRC_COLOR,[al]:i.ONE_MINUS_SRC_ALPHA,[tm]:i.ONE_MINUS_DST_COLOR,[Qp]:i.ONE_MINUS_DST_ALPHA,[im]:i.CONSTANT_COLOR,[sm]:i.ONE_MINUS_CONSTANT_COLOR,[rm]:i.CONSTANT_ALPHA,[om]:i.ONE_MINUS_CONSTANT_ALPHA};function I(U,fe,q,J,pe,xe,Ge,vt,zt,X){if(U===Vi){x===!0&&(Ie(i.BLEND),x=!1);return}if(x===!1&&(te(i.BLEND),x=!0),U!==Gp){if(U!==g||X!==M){if((p!==us||_!==us)&&(i.blendEquation(i.FUNC_ADD),p=us,_=us),X)switch(U){case Ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ks:i.blendFunc(i.ONE,i.ONE);break;case Hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ks:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,v=null,C=null,T=null,E.set(0,0,0),P=0,g=U,M=X}return}pe=pe||fe,xe=xe||q,Ge=Ge||J,(fe!==p||pe!==_)&&(i.blendEquationSeparate($[fe],$[pe]),p=fe,_=pe),(q!==y||J!==v||xe!==C||Ge!==T)&&(i.blendFuncSeparate(oe[q],oe[J],oe[xe],oe[Ge]),y=q,v=J,C=xe,T=Ge),(vt.equals(E)===!1||zt!==P)&&(i.blendColor(vt.r,vt.g,vt.b,zt),E.copy(vt),P=zt),g=U,M=!1}function se(U,fe){U.side===Mt?Ie(i.CULL_FACE):te(i.CULL_FACE);let q=U.side===Kt;fe&&(q=!q),ie(q),U.blending===Ws&&U.transparent===!1?I(Vi):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let J=U.stencilWrite;a.setTest(J),J&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Fe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie(U){S!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),S=U)}function be(U){U!==Vp?(te(i.CULL_FACE),U!==L&&(U===Vu?i.cullFace(i.BACK):U===Hp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),L=U}function le(U){U!==W&&(k&&i.lineWidth(U),W=U)}function Fe(U,fe,q){U?(te(i.POLYGON_OFFSET_FILL),(B!==fe||D!==q)&&(i.polygonOffset(fe,q),B=fe,D=q)):Ie(i.POLYGON_OFFSET_FILL)}function ve(U){U?te(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function R(U){U===void 0&&(U=i.TEXTURE0+G-1),ae!==U&&(i.activeTexture(U),ae=U)}function b(U,fe,q){q===void 0&&(ae===null?q=i.TEXTURE0+G-1:q=ae);let J=ue[q];J===void 0&&(J={type:void 0,texture:void 0},ue[q]=J),(J.type!==U||J.texture!==fe)&&(ae!==q&&(i.activeTexture(q),ae=q),i.bindTexture(U,fe||de[U]),J.type=U,J.texture=fe)}function O(){let U=ue[ae];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(U){je.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),je.copy(U))}function Ae(U){Y.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Y.copy(U))}function it(U,fe){let q=l.get(fe);q===void 0&&(q=new WeakMap,l.set(fe,q));let J=q.get(U);J===void 0&&(J=i.getUniformBlockIndex(fe,U.name),q.set(U,J))}function Xe(U,fe){let J=l.get(fe).get(U);c.get(fe)!==J&&(i.uniformBlockBinding(fe,J,U.__bindingPointIndex),c.set(fe,J))}function gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ae=null,ue={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,y=null,v=null,_=null,C=null,T=null,E=new Ee(0,0,0),P=0,M=!1,S=null,L=null,W=null,B=null,D=null,je.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:te,disable:Ie,bindFramebuffer:Ve,drawBuffers:Ne,useProgram:Qe,setBlending:I,setMaterial:se,setFlipSided:ie,setCullFace:be,setLineWidth:le,setPolygonOffset:Fe,setScissorTest:ve,activeTexture:R,bindTexture:b,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:ye,texImage3D:Oe,updateUBOMapping:it,uniformBlockBinding:Xe,texStorage2D:Ye,texStorage3D:ee,texSubImage2D:Z,texSubImage3D:Te,compressedTexSubImage2D:he,compressedTexSubImage3D:_e,scissor:ke,viewport:Ae,reset:gt}}function kd(i,e,t,n){let s=Lv(n);switch(t){case gf:return i*e;case _f:return i*e;case vf:return i*e*2;case Ah:return i*e/s.components*s.byteLength;case Eh:return i*e/s.components*s.byteLength;case yf:return i*e*2/s.components*s.byteLength;case Rh:return i*e*2/s.components*s.byteLength;case xf:return i*e*3/s.components*s.byteLength;case yn:return i*e*4/s.components*s.byteLength;case Ch:return i*e*4/s.components*s.byteLength;case aa:case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case la:case ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _l:case yl:return Math.max(i,16)*Math.max(e,8)/4;case xl:case vl:return Math.max(i,8)*Math.max(e,8)/2;case Ml:case bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case El:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Il:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ol:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ua:case Bl:case zl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Mf:case kl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Vl:case Hl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lv(i){switch(i){case ui:case ff:return{byteLength:1,components:1};case $r:case pf:case fo:return{byteLength:2,components:1};case wh:case Th:return{byteLength:2,components:4};case fs:case Sh:case Nn:return{byteLength:4,components:1};case mf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Dv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new re,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,b){return f?new OffscreenCanvas(R,b):jr("canvas")}function x(R,b,O){let K=1,Q=ve(R);if((Q.width>O||Q.height>O)&&(K=O/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Z=Math.floor(K*Q.width),Te=Math.floor(K*Q.height);u===void 0&&(u=m(Z,Te));let he=b?m(Z,Te):u;return he.width=Z,he.height=Te,he.getContext("2d").drawImage(R,0,0,Z,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+Te+")."),he}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(R,b,O,K,Q=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=b;if(b===i.RED&&(O===i.FLOAT&&(Z=i.R32F),O===i.HALF_FLOAT&&(Z=i.R16F),O===i.UNSIGNED_BYTE&&(Z=i.R8)),b===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.R8UI),O===i.UNSIGNED_SHORT&&(Z=i.R16UI),O===i.UNSIGNED_INT&&(Z=i.R32UI),O===i.BYTE&&(Z=i.R8I),O===i.SHORT&&(Z=i.R16I),O===i.INT&&(Z=i.R32I)),b===i.RG&&(O===i.FLOAT&&(Z=i.RG32F),O===i.HALF_FLOAT&&(Z=i.RG16F),O===i.UNSIGNED_BYTE&&(Z=i.RG8)),b===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RG8UI),O===i.UNSIGNED_SHORT&&(Z=i.RG16UI),O===i.UNSIGNED_INT&&(Z=i.RG32UI),O===i.BYTE&&(Z=i.RG8I),O===i.SHORT&&(Z=i.RG16I),O===i.INT&&(Z=i.RG32I)),b===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),O===i.UNSIGNED_INT&&(Z=i.RGB32UI),O===i.BYTE&&(Z=i.RGB8I),O===i.SHORT&&(Z=i.RGB16I),O===i.INT&&(Z=i.RGB32I)),b===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),O===i.UNSIGNED_INT&&(Z=i.RGBA32UI),O===i.BYTE&&(Z=i.RGBA8I),O===i.SHORT&&(Z=i.RGBA16I),O===i.INT&&(Z=i.RGBA32I)),b===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),b===i.RGBA){let Te=Q?qa:st.getTransfer(K);O===i.FLOAT&&(Z=i.RGBA32F),O===i.HALF_FLOAT&&(Z=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Z=Te===_t?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(R,b){let O;return R?b===null||b===fs||b===Qs?O=i.DEPTH24_STENCIL8:b===Nn?O=i.DEPTH32F_STENCIL8:b===$r&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===fs||b===Qs?O=i.DEPTH_COMPONENT24:b===Nn?O=i.DEPTH_COMPONENT32F:b===$r&&(O=i.DEPTH_COMPONENT16),O}function C(R,b){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Qt&&R.minFilter!==cn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function T(R){let b=R.target;b.removeEventListener("dispose",T),P(b),b.isVideoTexture&&h.delete(b)}function E(R){let b=R.target;b.removeEventListener("dispose",E),S(b)}function P(R){let b=n.get(R);if(b.__webglInit===void 0)return;let O=R.source,K=d.get(O);if(K){let Q=K[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(R),Object.keys(K).length===0&&d.delete(O)}n.remove(R)}function M(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let O=R.source,K=d.get(O);delete K[b.__cacheKey],o.memory.textures--}function S(R){let b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let Q=0;Q<b.__webglFramebuffer[K].length;Q++)i.deleteFramebuffer(b.__webglFramebuffer[K][Q]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let O=R.textures;for(let K=0,Q=O.length;K<Q;K++){let Z=n.get(O[K]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(O[K])}n.remove(R)}let L=0;function W(){L=0}function B(){let R=L;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function D(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function G(R,b){let O=n.get(R);if(R.isVideoTexture&&le(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){let K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,R,b);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+b)}function k(R,b){let O=n.get(R);if(R.version>0&&O.__version!==R.version){Y(O,R,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+b)}function j(R,b){let O=n.get(R);if(R.version>0&&O.__version!==R.version){Y(O,R,b);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+b)}function z(R,b){let O=n.get(R);if(R.version>0&&O.__version!==R.version){ne(O,R,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+b)}let ae={[Fn]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[Jr]:i.MIRRORED_REPEAT},ue={[Qt]:i.NEAREST,[bh]:i.NEAREST_MIPMAP_NEAREST,[Vs]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[Wr]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},ge={[Mm]:i.NEVER,[Em]:i.ALWAYS,[bm]:i.LESS,[wf]:i.LEQUAL,[Sm]:i.EQUAL,[Am]:i.GEQUAL,[wm]:i.GREATER,[Tm]:i.NOTEQUAL};function Ce(R,b){if(b.type===Nn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===cn||b.magFilter===Wr||b.magFilter===Vs||b.magFilter===Gn||b.minFilter===cn||b.minFilter===Wr||b.minFilter===Vs||b.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ae[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ae[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ae[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ue[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ue[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ge[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Qt||b.minFilter!==Vs&&b.minFilter!==Gn||b.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function je(R,b){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",T));let K=b.source,Q=d.get(K);Q===void 0&&(Q={},d.set(K,Q));let Z=D(b);if(Z!==R.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[Z].usedTimes++;let Te=Q[R.__cacheKey];Te!==void 0&&(Q[R.__cacheKey].usedTimes--,Te.usedTimes===0&&M(b)),R.__cacheKey=Z,R.__webglTexture=Q[Z].texture}return O}function Y(R,b,O){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);let Q=je(R,b),Z=b.source;t.bindTexture(K,R.__webglTexture,i.TEXTURE0+O);let Te=n.get(Z);if(Z.version!==Te.__version||Q===!0){t.activeTexture(i.TEXTURE0+O);let he=st.getPrimaries(st.workingColorSpace),_e=b.colorSpace===Bi?null:st.getPrimaries(b.colorSpace),Ye=b.colorSpace===Bi||he===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ee=x(b.image,!1,s.maxTextureSize);ee=Fe(b,ee);let ye=r.convert(b.format,b.colorSpace),Oe=r.convert(b.type),ke=v(b.internalFormat,ye,Oe,b.colorSpace,b.isVideoTexture);Ce(K,b);let Ae,it=b.mipmaps,Xe=b.isVideoTexture!==!0,gt=Te.__version===void 0||Q===!0,U=Z.dataReady,fe=C(b,ee);if(b.isDepthTexture)ke=_(b.format===er,b.type),gt&&(Xe?t.texStorage2D(i.TEXTURE_2D,1,ke,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,ke,ee.width,ee.height,0,ye,Oe,null));else if(b.isDataTexture)if(it.length>0){Xe&&gt&&t.texStorage2D(i.TEXTURE_2D,fe,ke,it[0].width,it[0].height);for(let q=0,J=it.length;q<J;q++)Ae=it[q],Xe?U&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,Ae.width,Ae.height,ye,Oe,Ae.data):t.texImage2D(i.TEXTURE_2D,q,ke,Ae.width,Ae.height,0,ye,Oe,Ae.data);b.generateMipmaps=!1}else Xe?(gt&&t.texStorage2D(i.TEXTURE_2D,fe,ke,ee.width,ee.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,ye,Oe,ee.data)):t.texImage2D(i.TEXTURE_2D,0,ke,ee.width,ee.height,0,ye,Oe,ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Xe&&gt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,ke,it[0].width,it[0].height,ee.depth);for(let q=0,J=it.length;q<J;q++)if(Ae=it[q],b.format!==yn)if(ye!==null)if(Xe){if(U)if(b.layerUpdates.size>0){let pe=kd(Ae.width,Ae.height,b.format,b.type);for(let xe of b.layerUpdates){let Ge=Ae.data.subarray(xe*pe/Ae.data.BYTES_PER_ELEMENT,(xe+1)*pe/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,xe,Ae.width,Ae.height,1,ye,Ge)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Ae.width,Ae.height,ee.depth,ye,Ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,ke,Ae.width,Ae.height,ee.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Ae.width,Ae.height,ee.depth,ye,Oe,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,ke,Ae.width,Ae.height,ee.depth,0,ye,Oe,Ae.data)}else{Xe&&gt&&t.texStorage2D(i.TEXTURE_2D,fe,ke,it[0].width,it[0].height);for(let q=0,J=it.length;q<J;q++)Ae=it[q],b.format!==yn?ye!==null?Xe?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Ae.width,Ae.height,ye,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,q,ke,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?U&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,Ae.width,Ae.height,ye,Oe,Ae.data):t.texImage2D(i.TEXTURE_2D,q,ke,Ae.width,Ae.height,0,ye,Oe,Ae.data)}else if(b.isDataArrayTexture)if(Xe){if(gt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,ke,ee.width,ee.height,ee.depth),U)if(b.layerUpdates.size>0){let q=kd(ee.width,ee.height,b.format,b.type);for(let J of b.layerUpdates){let pe=ee.data.subarray(J*q/ee.data.BYTES_PER_ELEMENT,(J+1)*q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,ee.width,ee.height,1,ye,Oe,pe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ye,Oe,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ke,ee.width,ee.height,ee.depth,0,ye,Oe,ee.data);else if(b.isData3DTexture)Xe?(gt&&t.texStorage3D(i.TEXTURE_3D,fe,ke,ee.width,ee.height,ee.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ye,Oe,ee.data)):t.texImage3D(i.TEXTURE_3D,0,ke,ee.width,ee.height,ee.depth,0,ye,Oe,ee.data);else if(b.isFramebufferTexture){if(gt)if(Xe)t.texStorage2D(i.TEXTURE_2D,fe,ke,ee.width,ee.height);else{let q=ee.width,J=ee.height;for(let pe=0;pe<fe;pe++)t.texImage2D(i.TEXTURE_2D,pe,ke,q,J,0,ye,Oe,null),q>>=1,J>>=1}}else if(it.length>0){if(Xe&&gt){let q=ve(it[0]);t.texStorage2D(i.TEXTURE_2D,fe,ke,q.width,q.height)}for(let q=0,J=it.length;q<J;q++)Ae=it[q],Xe?U&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,ye,Oe,Ae):t.texImage2D(i.TEXTURE_2D,q,ke,ye,Oe,Ae);b.generateMipmaps=!1}else if(Xe){if(gt){let q=ve(ee);t.texStorage2D(i.TEXTURE_2D,fe,ke,q.width,q.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,Oe,ee)}else t.texImage2D(i.TEXTURE_2D,0,ke,ye,Oe,ee);g(b)&&p(K),Te.__version=Z.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ne(R,b,O){if(b.image.length!==6)return;let K=je(R,b),Q=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+O);let Z=n.get(Q);if(Q.version!==Z.__version||K===!0){t.activeTexture(i.TEXTURE0+O);let Te=st.getPrimaries(st.workingColorSpace),he=b.colorSpace===Bi?null:st.getPrimaries(b.colorSpace),_e=b.colorSpace===Bi||Te===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Ye=b.isCompressedTexture||b.image[0].isCompressedTexture,ee=b.image[0]&&b.image[0].isDataTexture,ye=[];for(let J=0;J<6;J++)!Ye&&!ee?ye[J]=x(b.image[J],!0,s.maxCubemapSize):ye[J]=ee?b.image[J].image:b.image[J],ye[J]=Fe(b,ye[J]);let Oe=ye[0],ke=r.convert(b.format,b.colorSpace),Ae=r.convert(b.type),it=v(b.internalFormat,ke,Ae,b.colorSpace),Xe=b.isVideoTexture!==!0,gt=Z.__version===void 0||K===!0,U=Q.dataReady,fe=C(b,Oe);Ce(i.TEXTURE_CUBE_MAP,b);let q;if(Ye){Xe&&gt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,it,Oe.width,Oe.height);for(let J=0;J<6;J++){q=ye[J].mipmaps;for(let pe=0;pe<q.length;pe++){let xe=q[pe];b.format!==yn?ke!==null?Xe?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,xe.width,xe.height,ke,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,it,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,xe.width,xe.height,ke,Ae,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,it,xe.width,xe.height,0,ke,Ae,xe.data)}}}else{if(q=b.mipmaps,Xe&&gt){q.length>0&&fe++;let J=ve(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,it,J.width,J.height)}for(let J=0;J<6;J++)if(ee){Xe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ye[J].width,ye[J].height,ke,Ae,ye[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,it,ye[J].width,ye[J].height,0,ke,Ae,ye[J].data);for(let pe=0;pe<q.length;pe++){let Ge=q[pe].image[J].image;Xe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,Ge.width,Ge.height,ke,Ae,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,it,Ge.width,Ge.height,0,ke,Ae,Ge.data)}}else{Xe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ke,Ae,ye[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,it,ke,Ae,ye[J]);for(let pe=0;pe<q.length;pe++){let xe=q[pe];Xe?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,ke,Ae,xe.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,it,ke,Ae,xe.image[J])}}}g(b)&&p(i.TEXTURE_CUBE_MAP),Z.__version=Q.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function de(R,b,O,K,Q,Z){let Te=r.convert(O.format,O.colorSpace),he=r.convert(O.type),_e=v(O.internalFormat,Te,he,O.colorSpace),Ye=n.get(b),ee=n.get(O);if(ee.__renderTarget=b,!Ye.__hasExternalTextures){let ye=Math.max(1,b.width>>Z),Oe=Math.max(1,b.height>>Z);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,Z,_e,ye,Oe,b.depth,0,Te,he,null):t.texImage2D(Q,Z,_e,ye,Oe,0,Te,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),be(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Q,ee.__webglTexture,0,ie(b)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,Q,ee.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function te(R,b,O){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){let K=b.depthTexture,Q=K&&K.isDepthTexture?K.type:null,Z=_(b.stencilBuffer,Q),Te=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=ie(b);be(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,Z,b.width,b.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,Z,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Z,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,R)}else{let K=b.textures;for(let Q=0;Q<K.length;Q++){let Z=K[Q],Te=r.convert(Z.format,Z.colorSpace),he=r.convert(Z.type),_e=v(Z.internalFormat,Te,he,Z.colorSpace),Ye=ie(b);O&&be(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,_e,b.width,b.height):be(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye,_e,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,_e,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(b.depthTexture);K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G(b.depthTexture,0);let Q=K.__webglTexture,Z=ie(b);if(b.depthTexture.format===Xs)be(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(b.depthTexture.format===er)be(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ve(R){let b=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let K=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){let Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=K}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ie(b.__webglFramebuffer,R)}else if(O){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),te(b.__webglDepthbuffer[K],R,!1);else{let Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),te(b.__webglDepthbuffer,R,!1);else{let K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(R,b,O){let K=n.get(R);b!==void 0&&de(K.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ve(R)}function Qe(R){let b=R.texture,O=n.get(R),K=n.get(b);R.addEventListener("dispose",E);let Q=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Te=Q.length>1;if(Te||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,o.memory.textures++),Z){O.__webglFramebuffer=[];for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[he]=[];for(let _e=0;_e<b.mipmaps.length;_e++)O.__webglFramebuffer[he][_e]=i.createFramebuffer()}else O.__webglFramebuffer[he]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let he=0;he<b.mipmaps.length;he++)O.__webglFramebuffer[he]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Te)for(let he=0,_e=Q.length;he<_e;he++){let Ye=n.get(Q[he]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&be(R)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let he=0;he<Q.length;he++){let _e=Q[he];O.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[he]);let Ye=r.convert(_e.format,_e.colorSpace),ee=r.convert(_e.type),ye=v(_e.internalFormat,Ye,ee,_e.colorSpace,R.isXRRenderTarget===!0),Oe=ie(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,ye,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,O.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),te(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,b);for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)de(O.__webglFramebuffer[he][_e],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,_e);else de(O.__webglFramebuffer[he],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let he=0,_e=Q.length;he<_e;he++){let Ye=Q[he],ee=n.get(Ye);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),Ce(i.TEXTURE_2D,Ye),de(O.__webglFramebuffer,R,Ye,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),g(Ye)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,K.__webglTexture),Ce(he,b),b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)de(O.__webglFramebuffer[_e],R,b,i.COLOR_ATTACHMENT0,he,_e);else de(O.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,he,0);g(b)&&p(he),t.unbindTexture()}R.depthBuffer&&Ve(R)}function $(R){let b=R.textures;for(let O=0,K=b.length;O<K;O++){let Q=b[O];if(g(Q)){let Z=y(R),Te=n.get(Q).__webglTexture;t.bindTexture(Z,Te),p(Z),t.unbindTexture()}}}let oe=[],I=[];function se(R){if(R.samples>0){if(be(R)===!1){let b=R.textures,O=R.width,K=R.height,Q=i.COLOR_BUFFER_BIT,Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(R),he=b.length>1;if(he)for(let _e=0;_e<b.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let _e=0;_e<b.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[_e]);let Ye=n.get(b[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ye,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,Q,i.NEAREST),c===!0&&(oe.length=0,I.length=0,oe.push(i.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(oe.push(Z),I.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let _e=0;_e<b.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,Te.__webglColorRenderbuffer[_e]);let Ye=n.get(b[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,Ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ie(R){return Math.min(s.maxSamples,R.samples)}function be(R){let b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function le(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Fe(R,b){let O=R.colorSpace,K=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==en&&O!==Bi&&(st.getTransfer(O)===_t?(K!==yn||Q!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),b}function ve(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=W,this.setTexture2D=G,this.setTexture2DArray=k,this.setTexture3D=j,this.setTextureCube=z,this.rebindTextures=Ne,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=de,this.useMultisampledRTT=be}function Uv(i,e){function t(n,s=Bi){let r,o=st.getTransfer(s);if(n===ui)return i.UNSIGNED_BYTE;if(n===wh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Th)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ff)return i.BYTE;if(n===pf)return i.SHORT;if(n===$r)return i.UNSIGNED_SHORT;if(n===Sh)return i.INT;if(n===fs)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===fo)return i.HALF_FLOAT;if(n===gf)return i.ALPHA;if(n===xf)return i.RGB;if(n===yn)return i.RGBA;if(n===_f)return i.LUMINANCE;if(n===vf)return i.LUMINANCE_ALPHA;if(n===Xs)return i.DEPTH_COMPONENT;if(n===er)return i.DEPTH_STENCIL;if(n===Ah)return i.RED;if(n===Eh)return i.RED_INTEGER;if(n===yf)return i.RG;if(n===Rh)return i.RG_INTEGER;if(n===Ch)return i.RGBA_INTEGER;if(n===aa||n===ca||n===la||n===ha)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xl||n===_l||n===vl||n===yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ml||n===bl||n===Sl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ml||n===bl)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wl||n===Tl||n===Al||n===El||n===Rl||n===Cl||n===Il||n===Pl||n===Ll||n===Dl||n===Ul||n===Nl||n===Fl||n===Ol)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Al)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===El)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Il)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ll)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ul)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ol)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ua||n===Bl||n===zl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ua)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mf||n===kl||n===Vl||n===Hl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ua)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ih=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ht=class extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nv={type:"move"},qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ov=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new qt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Zt({vertexShader:Fv,fragmentShader:Ov,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rh=class extends Gi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,x=new sh,g=t.getContextAttributes(),p=null,y=null,v=[],_=[],C=new re,T=null,E=new Vt;E.viewport=new ct;let P=new Vt;P.viewport=new ct;let M=[E,P],S=new ih,L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=v[Y];return ne===void 0&&(ne=new qr,v[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=v[Y];return ne===void 0&&(ne=new qr,v[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=v[Y];return ne===void 0&&(ne=new qr,v[Y]=ne),ne.getHandSpace()};function B(Y){let ne=_.indexOf(Y.inputSource);if(ne===-1)return;let de=v[ne];de!==void 0&&(de.update(Y.inputSource,Y.frame,l||o),de.dispatchEvent({type:Y.type,data:Y.inputSource}))}function D(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",G);for(let Y=0;Y<v.length;Y++){let ne=_[Y];ne!==null&&(_[Y]=null,v[Y].disconnect(ne))}L=null,W=null,x.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",D),s.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){let ne={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new di(f.framebufferWidth,f.framebufferHeight,{format:yn,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ne=null,de=null,te=null;g.depth&&(te=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=g.stencil?er:Xs,de=g.stencil?Qs:fs);let Ie={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ie),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new di(d.textureWidth,d.textureHeight,{format:yn,type:ui,depthTexture:new ya(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),je.setContext(s),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G(Y){for(let ne=0;ne<Y.removed.length;ne++){let de=Y.removed[ne],te=_.indexOf(de);te>=0&&(_[te]=null,v[te].disconnect(de))}for(let ne=0;ne<Y.added.length;ne++){let de=Y.added[ne],te=_.indexOf(de);if(te===-1){for(let Ve=0;Ve<v.length;Ve++)if(Ve>=_.length){_.push(de),te=Ve;break}else if(_[Ve]===null){_[Ve]=de,te=Ve;break}if(te===-1)break}let Ie=v[te];Ie&&Ie.connect(de)}}let k=new A,j=new A;function z(Y,ne,de){k.setFromMatrixPosition(ne.matrixWorld),j.setFromMatrixPosition(de.matrixWorld);let te=k.distanceTo(j),Ie=ne.projectionMatrix.elements,Ve=de.projectionMatrix.elements,Ne=Ie[14]/(Ie[10]-1),Qe=Ie[14]/(Ie[10]+1),$=(Ie[9]+1)/Ie[5],oe=(Ie[9]-1)/Ie[5],I=(Ie[8]-1)/Ie[0],se=(Ve[8]+1)/Ve[0],ie=Ne*I,be=Ne*se,le=te/(-I+se),Fe=le*-I;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Fe),Y.translateZ(le),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ie[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let ve=Ne+le,R=Qe+le,b=ie-Fe,O=be+(te-Fe),K=$*Qe/R*ve,Q=oe*Qe/R*ve;Y.projectionMatrix.makePerspective(b,O,K,Q,ve,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ae(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ne=Y.near,de=Y.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(de=x.depthFar)),S.near=P.near=E.near=ne,S.far=P.far=E.far=de,(L!==S.near||W!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,W=S.far),E.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,S.layers.mask=E.layers.mask|P.layers.mask;let te=Y.parent,Ie=S.cameras;ae(S,te);for(let Ve=0;Ve<Ie.length;Ve++)ae(Ie[Ve],te);Ie.length===2?z(S,E,P):S.projectionMatrix.copy(E.projectionMatrix),ue(Y,S,te)};function ue(Y,ne,de){de===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(de.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ir*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let ge=null;function Ce(Y,ne){if(h=ne.getViewerPose(l||o),m=ne,h!==null){let de=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let te=!1;de.length!==S.cameras.length&&(S.cameras.length=0,te=!0);for(let Ve=0;Ve<de.length;Ve++){let Ne=de[Ve],Qe=null;if(f!==null)Qe=f.getViewport(Ne);else{let oe=u.getViewSubImage(d,Ne);Qe=oe.viewport,Ve===0&&(e.setRenderTargetTextures(y,oe.colorTexture,d.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(y))}let $=M[Ve];$===void 0&&($=new Vt,$.layers.enable(Ve),$.viewport=new ct,M[Ve]=$),$.matrix.fromArray(Ne.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(Ne.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ve===0&&(S.matrix.copy($.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),te===!0&&S.cameras.push($)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){let Ve=u.getDepthInformation(de[0]);Ve&&Ve.isValid&&Ve.texture&&x.init(e,Ve,s.renderState)}}for(let de=0;de<v.length;de++){let te=_[de],Ie=v[de];te!==null&&Ie!==void 0&&Ie.update(te,ne,l||o)}ge&&ge(Y,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),m=null}let je=new Cf;je.setAnimationLoop(Ce),this.setAnimationLoop=function(Y){ge=Y},this.dispose=function(){}}},ls=new Wn,Bv=new ze;function zv(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Rf(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,y,v):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Kt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Kt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=e.get(p),v=y.envMap,_=y.envMapRotation;v&&(g.envMap.value=v,ls.copy(_),ls.x*=-1,ls.y*=-1,ls.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),g.envMapRotation.value.setFromMatrix4(Bv.makeRotationFromEuler(ls)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function kv(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,v){let _=v.program;n.uniformBlockBinding(y,_)}function l(y,v){let _=s[y.id];_===void 0&&(m(y),_=h(y),s[y.id]=_,y.addEventListener("dispose",g));let C=v.program;n.updateUBOMapping(y,C);let T=e.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){let v=u();y.__bindingPointIndex=v;let _=i.createBuffer(),C=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=s[y.id],_=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,E=_.length;T<E;T++){let P=Array.isArray(_[T])?_[T]:[_[T]];for(let M=0,S=P.length;M<S;M++){let L=P[M];if(f(L,T,M,C)===!0){let W=L.__offset,B=Array.isArray(L.value)?L.value:[L.value],D=0;for(let G=0;G<B.length;G++){let k=B[G],j=x(k);typeof k=="number"||typeof k=="boolean"?(L.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,W+D,L.__data)):k.isMatrix3?(L.__data[0]=k.elements[0],L.__data[1]=k.elements[1],L.__data[2]=k.elements[2],L.__data[3]=0,L.__data[4]=k.elements[3],L.__data[5]=k.elements[4],L.__data[6]=k.elements[5],L.__data[7]=0,L.__data[8]=k.elements[6],L.__data[9]=k.elements[7],L.__data[10]=k.elements[8],L.__data[11]=0):(k.toArray(L.__data,D),D+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,v,_,C){let T=y.value,E=v+"_"+_;if(C[E]===void 0)return typeof T=="number"||typeof T=="boolean"?C[E]=T:C[E]=T.clone(),!0;{let P=C[E];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[E]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function m(y){let v=y.uniforms,_=0,C=16;for(let E=0,P=v.length;E<P;E++){let M=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,L=M.length;S<L;S++){let W=M[S],B=Array.isArray(W.value)?W.value:[W.value];for(let D=0,G=B.length;D<G;D++){let k=B[D],j=x(k),z=_%C,ae=z%j.boundary,ue=z+ae;_+=ae,ue!==0&&C-ue<j.storage&&(_+=C-ue),W.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=_,_+=j.storage}}}let T=_%C;return T>0&&(_+=C-T),y.__size=_,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function g(y){let v=y.target;v.removeEventListener("dispose",g);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var ar=class{constructor(e={}){let{canvas:t=Wm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this.toneMapping=Hi,this.toneMappingExposure=1;let _=this,C=!1,T=0,E=0,P=null,M=-1,S=null,L=new ct,W=new ct,B=null,D=new Ee(0),G=0,k=t.width,j=t.height,z=1,ae=null,ue=null,ge=new ct(0,0,k,j),Ce=new ct(0,0,k,j),je=!1,Y=new Qr,ne=!1,de=!1,te=new ze,Ie=new ze,Ve=new A,Ne=new ct,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$=!1;function oe(){return P===null?z:1}let I=n;function se(w,N){return t.getContext(w,N)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",xe,!1),I===null){let N="webgl2";if(I=se(N,w),I===null)throw se(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ie,be,le,Fe,ve,R,b,O,K,Q,Z,Te,he,_e,Ye,ee,ye,Oe,ke,Ae,it,Xe,gt,U;function fe(){ie=new n_(I),ie.init(),Xe=new Uv(I,ie),be=new Jx(I,ie,e,Xe),le=new Pv(I,ie),be.reverseDepthBuffer&&d&&le.buffers.depth.setReversed(!0),Fe=new r_(I),ve=new _v,R=new Dv(I,ie,le,ve,be,Xe,Fe),b=new jx(_),O=new t_(_),K=new dg(I),gt=new Zx(I,K),Q=new i_(I,K,Fe,gt),Z=new a_(I,Q,K,Fe),ke=new o_(I,be,R),ee=new $x(ve),Te=new xv(_,b,O,ie,be,gt,ee),he=new zv(_,ve),_e=new yv,Ye=new Av(ie),Oe=new Yx(_,b,O,le,Z,f,c),ye=new Cv(_,Z,be),U=new kv(I,Fe,be,le),Ae=new Kx(I,ie,Fe),it=new s_(I,ie,Fe),Fe.programs=Te.programs,_.capabilities=be,_.extensions=ie,_.properties=ve,_.renderLists=_e,_.shadowMap=ye,_.state=le,_.info=Fe}fe();let q=new rh(_,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let w=ie.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ie.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(k,j,!1))},this.getSize=function(w){return w.set(k,j)},this.setSize=function(w,N,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,j=N,t.width=Math.floor(w*z),t.height=Math.floor(N*z),V===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(k*z,j*z).floor()},this.setDrawingBufferSize=function(w,N,V){k=w,j=N,z=V,t.width=Math.floor(w*V),t.height=Math.floor(N*V),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(ge)},this.setViewport=function(w,N,V,H){w.isVector4?ge.set(w.x,w.y,w.z,w.w):ge.set(w,N,V,H),le.viewport(L.copy(ge).multiplyScalar(z).round())},this.getScissor=function(w){return w.copy(Ce)},this.setScissor=function(w,N,V,H){w.isVector4?Ce.set(w.x,w.y,w.z,w.w):Ce.set(w,N,V,H),le.scissor(W.copy(Ce).multiplyScalar(z).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(w){le.setScissorTest(je=w)},this.setOpaqueSort=function(w){ae=w},this.setTransparentSort=function(w){ue=w},this.getClearColor=function(w){return w.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(w=!0,N=!0,V=!0){let H=0;if(w){let F=!1;if(P!==null){let ce=P.texture.format;F=ce===Ch||ce===Rh||ce===Eh}if(F){let ce=P.texture.type,Me=ce===ui||ce===fs||ce===$r||ce===Qs||ce===wh||ce===Th,Pe=Oe.getClearColor(),Le=Oe.getClearAlpha(),We=Pe.r,Ze=Pe.g,De=Pe.b;Me?(m[0]=We,m[1]=Ze,m[2]=De,m[3]=Le,I.clearBufferuiv(I.COLOR,0,m)):(x[0]=We,x[1]=Ze,x[2]=De,x[3]=Le,I.clearBufferiv(I.COLOR,0,x))}else H|=I.COLOR_BUFFER_BIT}N&&(H|=I.DEPTH_BUFFER_BIT),V&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),_e.dispose(),Ye.dispose(),ve.dispose(),b.dispose(),O.dispose(),Z.dispose(),gt.dispose(),U.dispose(),Te.dispose(),q.dispose(),q.removeEventListener("sessionstart",we),q.removeEventListener("sessionend",at),qe.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let w=Fe.autoReset,N=ye.enabled,V=ye.autoUpdate,H=ye.needsUpdate,F=ye.type;fe(),Fe.autoReset=w,ye.enabled=N,ye.autoUpdate=V,ye.needsUpdate=H,ye.type=F}function xe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ge(w){let N=w.target;N.removeEventListener("dispose",Ge),vt(N)}function vt(w){zt(w),ve.remove(w)}function zt(w){let N=ve.get(w).programs;N!==void 0&&(N.forEach(function(V){Te.releaseProgram(V)}),w.isShaderMaterial&&Te.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,V,H,F,ce){N===null&&(N=Qe);let Me=F.isMesh&&F.matrixWorld.determinant()<0,Pe=Ir(w,N,V,H,F);le.setMaterial(H,Me);let Le=V.index,We=1;if(H.wireframe===!0){if(Le=Q.getWireframeAttribute(V),Le===void 0)return;We=2}let Ze=V.drawRange,De=V.attributes.position,lt=Ze.start*We,St=(Ze.start+Ze.count)*We;ce!==null&&(lt=Math.max(lt,ce.start*We),St=Math.min(St,(ce.start+ce.count)*We)),Le!==null?(lt=Math.max(lt,0),St=Math.min(St,Le.count)):De!=null&&(lt=Math.max(lt,0),St=Math.min(St,De.count));let Et=St-lt;if(Et<0||Et===1/0)return;gt.setup(F,H,Pe,V,Le);let an,ft=Ae;if(Le!==null&&(an=K.get(Le),ft=it,ft.setIndex(an)),F.isMesh)H.wireframe===!0?(le.setLineWidth(H.wireframeLinewidth*oe()),ft.setMode(I.LINES)):ft.setMode(I.TRIANGLES);else if(F.isLine){let Ue=H.linewidth;Ue===void 0&&(Ue=1),le.setLineWidth(Ue*oe()),F.isLineSegments?ft.setMode(I.LINES):F.isLineLoop?ft.setMode(I.LINE_LOOP):ft.setMode(I.LINE_STRIP)}else F.isPoints?ft.setMode(I.POINTS):F.isSprite&&ft.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ft.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))ft.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Ue=F._multiDrawStarts,Qn=F._multiDrawCounts,pt=F._multiDrawCount,In=Le?K.get(Le).bytesPerElement:1,ws=ve.get(H).currentProgram.getUniforms();for(let un=0;un<pt;un++)ws.setValue(I,"_gl_DrawID",un),ft.render(Ue[un]/In,Qn[un])}else if(F.isInstancedMesh)ft.renderInstances(lt,Et,F.count);else if(V.isInstancedBufferGeometry){let Ue=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Qn=Math.min(V.instanceCount,Ue);ft.renderInstances(lt,Et,Qn)}else ft.render(lt,Et)};function X(w,N,V){w.transparent===!0&&w.side===Mt&&w.forceSinglePass===!1?(w.side=Kt,w.needsUpdate=!0,Wt(w,N,V),w.side=pn,w.needsUpdate=!0,Wt(w,N,V),w.side=Mt):Wt(w,N,V)}this.compile=function(w,N,V=null){V===null&&(V=w),p=Ye.get(V),p.init(N),v.push(p),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==V&&w.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let H=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ce=F.material;if(ce)if(Array.isArray(ce))for(let Me=0;Me<ce.length;Me++){let Pe=ce[Me];X(Pe,V,F),H.add(Pe)}else X(ce,V,F),H.add(ce)}),v.pop(),p=null,H},this.compileAsync=function(w,N,V=null){let H=this.compile(w,N,V);return new Promise(F=>{function ce(){if(H.forEach(function(Me){ve.get(Me).currentProgram.isReady()&&H.delete(Me)}),H.size===0){F(w);return}setTimeout(ce,10)}ie.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Se=null;function Re(w){Se&&Se(w)}function we(){qe.stop()}function at(){qe.start()}let qe=new Cf;qe.setAnimationLoop(Re),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(w){Se=w,q.setAnimationLoop(w),w===null?qe.stop():qe.start()},q.addEventListener("sessionstart",we),q.addEventListener("sessionend",at),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,N,P),p=Ye.get(w,v.length),p.init(N),v.push(p),Ie.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Y.setFromProjectionMatrix(Ie),de=this.localClippingEnabled,ne=ee.init(this.clippingPlanes,de),g=_e.get(w,y.length),g.init(),y.push(g),q.enabled===!0&&q.isPresenting===!0){let ce=_.xr.getDepthSensingMesh();ce!==null&&He(ce,N,-1/0,_.sortObjects)}He(w,N,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(ae,ue),$=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,$&&Oe.addToRenderList(g,w),this.info.render.frame++,ne===!0&&ee.beginShadows();let V=p.state.shadowsArray;ye.render(V,w,N),ne===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=g.opaque,F=g.transmissive;if(p.setupLights(),N.isArrayCamera){let ce=N.cameras;if(F.length>0)for(let Me=0,Pe=ce.length;Me<Pe;Me++){let Le=ce[Me];Ct(H,F,w,Le)}$&&Oe.render(w);for(let Me=0,Pe=ce.length;Me<Pe;Me++){let Le=ce[Me];on(g,w,Le,Le.viewport)}}else F.length>0&&Ct(H,F,w,N),$&&Oe.render(w),on(g,w,N);P!==null&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(_,w,N),gt.resetDefaultState(),M=-1,S=null,v.pop(),v.length>0?(p=v[v.length-1],ne===!0&&ee.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function He(w,N,V,H){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){H&&Ne.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ie);let Me=Z.update(w),Pe=w.material;Pe.visible&&g.push(w,Me,Pe,V,Ne.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){let Me=Z.update(w),Pe=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ne.copy(w.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ne.copy(Me.boundingSphere.center)),Ne.applyMatrix4(w.matrixWorld).applyMatrix4(Ie)),Array.isArray(Pe)){let Le=Me.groups;for(let We=0,Ze=Le.length;We<Ze;We++){let De=Le[We],lt=Pe[De.materialIndex];lt&&lt.visible&&g.push(w,Me,lt,V,Ne.z,De)}}else Pe.visible&&g.push(w,Me,Pe,V,Ne.z,null)}}let ce=w.children;for(let Me=0,Pe=ce.length;Me<Pe;Me++)He(ce[Me],N,V,H)}function on(w,N,V,H){let F=w.opaque,ce=w.transmissive,Me=w.transparent;p.setupLightsView(V),ne===!0&&ee.setGlobalState(_.clippingPlanes,V),H&&le.viewport(L.copy(H)),F.length>0&&Dt(F,N,V),ce.length>0&&Dt(ce,N,V),Me.length>0&&Dt(Me,N,V),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Ct(w,N,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new di(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?fo:ui,minFilter:Gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));let ce=p.state.transmissionRenderTarget[H.id],Me=H.viewport||L;ce.setSize(Me.z,Me.w);let Pe=_.getRenderTarget();_.setRenderTarget(ce),_.getClearColor(D),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),$&&Oe.render(V);let Le=_.toneMapping;_.toneMapping=Hi;let We=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),ne===!0&&ee.setGlobalState(_.clippingPlanes,H),Dt(w,V,H),R.updateMultisampleRenderTarget(ce),R.updateRenderTargetMipmap(ce),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let De=0,lt=N.length;De<lt;De++){let St=N[De],Et=St.object,an=St.geometry,ft=St.material,Ue=St.group;if(ft.side===Mt&&Et.layers.test(H.layers)){let Qn=ft.side;ft.side=Kt,ft.needsUpdate=!0,Jt(Et,V,H,an,ft,Ue),ft.side=Qn,ft.needsUpdate=!0,Ze=!0}}Ze===!0&&(R.updateMultisampleRenderTarget(ce),R.updateRenderTargetMipmap(ce))}_.setRenderTarget(Pe),_.setClearColor(D,G),We!==void 0&&(H.viewport=We),_.toneMapping=Le}function Dt(w,N,V){let H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ce=w.length;F<ce;F++){let Me=w[F],Pe=Me.object,Le=Me.geometry,We=H===null?Me.material:H,Ze=Me.group;Pe.layers.test(V.layers)&&Jt(Pe,N,V,Le,We,Ze)}}function Jt(w,N,V,H,F,ce){w.onBeforeRender(_,N,V,H,F,ce),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(_,N,V,H,w,ce),F.transparent===!0&&F.side===Mt&&F.forceSinglePass===!1?(F.side=Kt,F.needsUpdate=!0,_.renderBufferDirect(V,N,H,F,w,ce),F.side=pn,F.needsUpdate=!0,_.renderBufferDirect(V,N,H,F,w,ce),F.side=Mt):_.renderBufferDirect(V,N,H,F,w,ce),w.onAfterRender(_,N,V,H,F,ce)}function Wt(w,N,V){N.isScene!==!0&&(N=Qe);let H=ve.get(w),F=p.state.lights,ce=p.state.shadowsArray,Me=F.state.version,Pe=Te.getParameters(w,F.state,ce,N,V),Le=Te.getProgramCacheKey(Pe),We=H.programs;H.environment=w.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(w.isMeshStandardMaterial?O:b).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,We===void 0&&(w.addEventListener("dispose",Ge),We=new Map,H.programs=We);let Ze=We.get(Le);if(Ze!==void 0){if(H.currentProgram===Ze&&H.lightsStateVersion===Me)return $n(w,Pe),Ze}else Pe.uniforms=Te.getUniforms(w),w.onBeforeCompile(Pe,_),Ze=Te.acquireProgram(Pe,Le),We.set(Le,Ze),H.uniforms=Pe.uniforms;let De=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=ee.uniform),$n(w,Pe),H.needsLights=Pr(w),H.lightsStateVersion=Me,H.needsLights&&(De.ambientLightColor.value=F.state.ambient,De.lightProbe.value=F.state.probe,De.directionalLights.value=F.state.directional,De.directionalLightShadows.value=F.state.directionalShadow,De.spotLights.value=F.state.spot,De.spotLightShadows.value=F.state.spotShadow,De.rectAreaLights.value=F.state.rectArea,De.ltc_1.value=F.state.rectAreaLTC1,De.ltc_2.value=F.state.rectAreaLTC2,De.pointLights.value=F.state.point,De.pointLightShadows.value=F.state.pointShadow,De.hemisphereLights.value=F.state.hemi,De.directionalShadowMap.value=F.state.directionalShadowMap,De.directionalShadowMatrix.value=F.state.directionalShadowMatrix,De.spotShadowMap.value=F.state.spotShadowMap,De.spotLightMatrix.value=F.state.spotLightMatrix,De.spotLightMap.value=F.state.spotLightMap,De.pointShadowMap.value=F.state.pointShadowMap,De.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Ze,H.uniformsList=null,Ze}function tn(w){if(w.uniformsList===null){let N=w.currentProgram.getUniforms();w.uniformsList=Zs.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function $n(w,N){let V=ve.get(w);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Ir(w,N,V,H,F){N.isScene!==!0&&(N=Qe),R.resetTextureUnits();let ce=N.fog,Me=H.isMeshStandardMaterial?N.environment:null,Pe=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:en,Le=(H.isMeshStandardMaterial?O:b).get(H.envMap||Me),We=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ze=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),De=!!V.morphAttributes.position,lt=!!V.morphAttributes.normal,St=!!V.morphAttributes.color,Et=Hi;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Et=_.toneMapping);let an=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ft=an!==void 0?an.length:0,Ue=ve.get(H),Qn=p.state.lights;if(ne===!0&&(de===!0||w!==S)){let _n=w===S&&H.id===M;ee.setState(H,w,_n)}let pt=!1;H.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Qn.state.version||Ue.outputColorSpace!==Pe||F.isBatchedMesh&&Ue.batching===!1||!F.isBatchedMesh&&Ue.batching===!0||F.isBatchedMesh&&Ue.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ue.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ue.instancing===!1||!F.isInstancedMesh&&Ue.instancing===!0||F.isSkinnedMesh&&Ue.skinning===!1||!F.isSkinnedMesh&&Ue.skinning===!0||F.isInstancedMesh&&Ue.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ue.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ue.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ue.instancingMorph===!1&&F.morphTexture!==null||Ue.envMap!==Le||H.fog===!0&&Ue.fog!==ce||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ee.numPlanes||Ue.numIntersection!==ee.numIntersection)||Ue.vertexAlphas!==We||Ue.vertexTangents!==Ze||Ue.morphTargets!==De||Ue.morphNormals!==lt||Ue.morphColors!==St||Ue.toneMapping!==Et||Ue.morphTargetsCount!==ft)&&(pt=!0):(pt=!0,Ue.__version=H.version);let In=Ue.currentProgram;pt===!0&&(In=Wt(H,N,F));let ws=!1,un=!1,Lr=!1,Rt=In.getUniforms(),Vn=Ue.uniforms;if(le.useProgram(In.program)&&(ws=!0,un=!0,Lr=!0),H.id!==M&&(M=H.id,un=!0),ws||S!==w){le.buffers.depth.getReversed()?(te.copy(w.projectionMatrix),qm(te),Ym(te),Rt.setValue(I,"projectionMatrix",te)):Rt.setValue(I,"projectionMatrix",w.projectionMatrix),Rt.setValue(I,"viewMatrix",w.matrixWorldInverse);let Ii=Rt.map.cameraPosition;Ii!==void 0&&Ii.setValue(I,Ve.setFromMatrixPosition(w.matrixWorld)),be.logarithmicDepthBuffer&&Rt.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Rt.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,un=!0,Lr=!0)}if(F.isSkinnedMesh){Rt.setOptional(I,F,"bindMatrix"),Rt.setOptional(I,F,"bindMatrixInverse");let _n=F.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Rt.setValue(I,"boneTexture",_n.boneTexture,R))}F.isBatchedMesh&&(Rt.setOptional(I,F,"batchingTexture"),Rt.setValue(I,"batchingTexture",F._matricesTexture,R),Rt.setOptional(I,F,"batchingIdTexture"),Rt.setValue(I,"batchingIdTexture",F._indirectTexture,R),Rt.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&Rt.setValue(I,"batchingColorTexture",F._colorsTexture,R));let Dr=V.morphAttributes;if((Dr.position!==void 0||Dr.normal!==void 0||Dr.color!==void 0)&&ke.update(F,V,In),(un||Ue.receiveShadow!==F.receiveShadow)&&(Ue.receiveShadow=F.receiveShadow,Rt.setValue(I,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Vn.envMap.value=Le,Vn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(Vn.envMapIntensity.value=N.environmentIntensity),un&&(Rt.setValue(I,"toneMappingExposure",_.toneMappingExposure),Ue.needsLights&&jn(Vn,Lr),ce&&H.fog===!0&&he.refreshFogUniforms(Vn,ce),he.refreshMaterialUniforms(Vn,H,z,j,p.state.transmissionRenderTarget[w.id]),Zs.upload(I,tn(Ue),Vn,R)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Zs.upload(I,tn(Ue),Vn,R),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Rt.setValue(I,"center",F.center),Rt.setValue(I,"modelViewMatrix",F.modelViewMatrix),Rt.setValue(I,"normalMatrix",F.normalMatrix),Rt.setValue(I,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let _n=H.uniformsGroups;for(let Ii=0,Pi=_n.length;Ii<Pi;Ii++){let zu=_n[Ii];U.update(zu,In),U.bind(zu,In)}}return In}function jn(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Pr(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,N,V){ve.get(w.texture).__webglTexture=N,ve.get(w.depthTexture).__webglTexture=V;let H=ve.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=V===void 0,H.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){let V=ve.get(w);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,V=0){P=w,T=N,E=V;let H=!0,F=null,ce=!1,Me=!1;if(w){let Le=ve.get(w);if(Le.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(I.FRAMEBUFFER,null),H=!1;else if(Le.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Le.__hasExternalTextures)R.rebindTextures(w,ve.get(w.texture).__webglTexture,ve.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let De=w.depthTexture;if(Le.__boundDepthTexture!==De){if(De!==null&&ve.has(De)&&(w.width!==De.image.width||w.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}let We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Me=!0);let Ze=ve.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ze[N])?F=Ze[N][V]:F=Ze[N],ce=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?F=ve.get(w).__webglMultisampledFramebuffer:Array.isArray(Ze)?F=Ze[V]:F=Ze,L.copy(w.viewport),W.copy(w.scissor),B=w.scissorTest}else L.copy(ge).multiplyScalar(z).floor(),W.copy(Ce).multiplyScalar(z).floor(),B=je;if(le.bindFramebuffer(I.FRAMEBUFFER,F)&&H&&le.drawBuffers(w,F),le.viewport(L),le.scissor(W),le.setScissorTest(B),ce){let Le=ve.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,Le.__webglTexture,V)}else if(Me){let Le=ve.get(w.texture),We=N||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Le.__webglTexture,V||0,We)}M=-1},this.readRenderTargetPixels=function(w,N,V,H,F,ce,Me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ve.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Pe=Pe[Me]),Pe){le.bindFramebuffer(I.FRAMEBUFFER,Pe);try{let Le=w.texture,We=Le.format,Ze=Le.type;if(!be.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-H&&V>=0&&V<=w.height-F&&I.readPixels(N,V,H,F,Xe.convert(We),Xe.convert(Ze),ce)}finally{let Le=P!==null?ve.get(P).__webglFramebuffer:null;le.bindFramebuffer(I.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(w,N,V,H,F,ce,Me){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=ve.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Pe=Pe[Me]),Pe){let Le=w.texture,We=Le.format,Ze=Le.type;if(!be.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!be.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-H&&V>=0&&V<=w.height-F){le.bindFramebuffer(I.FRAMEBUFFER,Pe);let De=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,De),I.bufferData(I.PIXEL_PACK_BUFFER,ce.byteLength,I.STREAM_READ),I.readPixels(N,V,H,F,Xe.convert(We),Xe.convert(Ze),0);let lt=P!==null?ve.get(P).__webglFramebuffer:null;le.bindFramebuffer(I.FRAMEBUFFER,lt);let St=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Xm(I,St,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,De),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ce),I.deleteBuffer(De),I.deleteSync(St),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,V=0){w.isTexture!==!0&&(Hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);let H=Math.pow(2,-V),F=Math.floor(w.image.width*H),ce=Math.floor(w.image.height*H),Me=N!==null?N.x:0,Pe=N!==null?N.y:0;R.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,Me,Pe,F,ce),le.unbindTexture()},this.copyTextureToTexture=function(w,N,V=null,H=null,F=0){w.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],N=arguments[2],F=arguments[3]||0,V=null);let ce,Me,Pe,Le,We,Ze,De,lt,St,Et=w.isCompressedTexture?w.mipmaps[F]:w.image;V!==null?(ce=V.max.x-V.min.x,Me=V.max.y-V.min.y,Pe=V.isBox3?V.max.z-V.min.z:1,Le=V.min.x,We=V.min.y,Ze=V.isBox3?V.min.z:0):(ce=Et.width,Me=Et.height,Pe=Et.depth||1,Le=0,We=0,Ze=0),H!==null?(De=H.x,lt=H.y,St=H.z):(De=0,lt=0,St=0);let an=Xe.convert(N.format),ft=Xe.convert(N.type),Ue;N.isData3DTexture?(R.setTexture3D(N,0),Ue=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(R.setTexture2DArray(N,0),Ue=I.TEXTURE_2D_ARRAY):(R.setTexture2D(N,0),Ue=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);let Qn=I.getParameter(I.UNPACK_ROW_LENGTH),pt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),In=I.getParameter(I.UNPACK_SKIP_PIXELS),ws=I.getParameter(I.UNPACK_SKIP_ROWS),un=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Et.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Et.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Le),I.pixelStorei(I.UNPACK_SKIP_ROWS,We),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ze);let Lr=w.isDataArrayTexture||w.isData3DTexture,Rt=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Vn=ve.get(w),Dr=ve.get(N),_n=ve.get(Vn.__renderTarget),Ii=ve.get(Dr.__renderTarget);le.bindFramebuffer(I.READ_FRAMEBUFFER,_n.__webglFramebuffer),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let Pi=0;Pi<Pe;Pi++)Lr&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ve.get(w).__webglTexture,F,Ze+Pi),w.isDepthTexture?(Rt&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ve.get(N).__webglTexture,F,St+Pi),I.blitFramebuffer(Le,We,ce,Me,De,lt,ce,Me,I.DEPTH_BUFFER_BIT,I.NEAREST)):Rt?I.copyTexSubImage3D(Ue,F,De,lt,St+Pi,Le,We,ce,Me):I.copyTexSubImage2D(Ue,F,De,lt,St+Pi,Le,We,ce,Me);le.bindFramebuffer(I.READ_FRAMEBUFFER,null),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Rt?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Ue,F,De,lt,St,ce,Me,Pe,an,ft,Et.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Ue,F,De,lt,St,ce,Me,Pe,an,Et.data):I.texSubImage3D(Ue,F,De,lt,St,ce,Me,Pe,an,ft,Et):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,De,lt,ce,Me,an,ft,Et.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,De,lt,Et.width,Et.height,an,Et.data):I.texSubImage2D(I.TEXTURE_2D,F,De,lt,ce,Me,an,ft,Et);I.pixelStorei(I.UNPACK_ROW_LENGTH,Qn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,In),I.pixelStorei(I.UNPACK_SKIP_ROWS,ws),I.pixelStorei(I.UNPACK_SKIP_IMAGES,un),F===0&&N.generateMipmaps&&I.generateMipmap(Ue),le.unbindTexture()},this.copyTextureToTexture3D=function(w,N,V=null,H=null,F=0){return w.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,H=arguments[1]||null,w=arguments[2],N=arguments[3],F=arguments[4]||0),Hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,V,H,F)},this.initRenderTarget=function(w){ve.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),le.unbindTexture()},this.resetState=function(){T=0,E=0,P=null,le.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};var ps=class extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},eo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gl,this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},nn=new A,to=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Vd=new A,Hd=new ct,Gd=new ct,Vv=new A,Wd=new ze,Zo=new A,$c=new mn,Xd=new ze,jc=new sr,Ma=class extends Be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wu,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $e),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Zo),this.boundingBox.expandByPoint(Zo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Zo),this.boundingSphere.expandByPoint(Zo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$c.copy(this.boundingSphere),$c.applyMatrix4(s),e.ray.intersectsSphere($c)!==!1&&(Xd.copy(s).invert(),jc.copy(e.ray).applyMatrix4(Xd),!(this.boundingBox!==null&&jc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Hd.fromBufferAttribute(s.attributes.skinIndex,e),Gd.fromBufferAttribute(s.attributes.skinWeight,e),Vd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Gd.getComponent(r);if(o!==0){let a=Hd.getComponent(r);Wd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Vv.copy(Vd).applyMatrix4(Wd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},no=class extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ba=class extends qt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Qt,h=Qt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},qd=new ze,Hv=new ze,Sa=class i{constructor(e=[],t=[]){this.uuid=Mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Hv;qd.multiplyMatrices(a,t[r]),qd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ba(t,e,e,yn,Nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new no),this.bones.push(o),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},ms=class extends dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ks=new ze,Yd=new ze,Ko=[],Zd=new $e,Gv=new ze,Br=new Be,zr=new mn,Xn=class extends Be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ms(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Gv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $e),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ks),Zd.copy(e.boundingBox).applyMatrix4(ks),this.boundingBox.union(Zd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ks),zr.copy(e.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(zr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zr.copy(this.boundingSphere),zr.applyMatrix4(n),e.ray.intersectsSphere(zr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ks),Yd.multiplyMatrices(n,ks),Br.matrixWorld=Yd,Br.raycast(e,Ko);for(let o=0,a=Ko.length;o<a;o++){let c=Ko[o];c.instanceId=r,c.object=this,t.push(c)}Ko.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ms(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ba(new Float32Array(s*this.count),s,this.count,Ah,Nn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Xi=class extends ln{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},wa=new A,Ta=new A,Kd=new ze,kr=new sr,Jo=new mn,Qc=new A,Jd=new A,fi=class extends Tt{constructor(e=new bt,t=new Xi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)wa.fromBufferAttribute(t,s-1),Ta.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=wa.distanceTo(Ta);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(s),Jo.radius+=r,e.ray.intersectsSphere(Jo)===!1)return;Kd.copy(s).invert(),kr.copy(e.ray).applyMatrix4(Kd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=l){let p=h.getX(x),y=h.getX(x+1),v=$o(this,e,kr,c,p,y);v&&t.push(v)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=$o(this,e,kr,c,x,g);p&&t.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=l){let p=$o(this,e,kr,c,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=$o(this,e,kr,c,m-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function $o(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(wa.fromBufferAttribute(o,s),Ta.fromBufferAttribute(o,r),t.distanceSqToSegment(wa,Ta,Qc,Jd)>n)return;Qc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Qc);if(!(c<e.near||c>e.far))return{distance:c,point:Jd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var $d=new A,jd=new A,cr=class extends fi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)$d.fromBufferAttribute(t,s),jd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+$d.distanceTo(jd);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Aa=class extends fi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},io=class extends ln{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qd=new ze,oh=new sr,jo=new mn,Qo=new A,pi=class extends Tt{constructor(e=new bt,t=new io){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(s),jo.radius+=r,e.ray.intersectsSphere(jo)===!1)return;Qd.copy(s).invert(),oh.copy(e.ray).applyMatrix4(Qd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,x=f;m<x;m++){let g=l.getX(m);Qo.fromBufferAttribute(u,g),ef(Qo,g,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,x=f;m<x;m++)Qo.fromBufferAttribute(u,m),ef(Qo,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ef(i,e,t,n,s,r,o){let a=oh.distanceSqToPoint(i);if(a<t){let c=new A;oh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var qn=class extends qt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new re:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new A,s=[],r=[],o=[],a=new A,c=new ze;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(kt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(kt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},so=class extends bn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new re){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ah=class extends so{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Dh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var ea=new A,el=new Dh,tl=new Dh,nl=new Dh,qi=class extends bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new A){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ea.subVectors(s[0],s[1]).add(s[0]),l=ea);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ea.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ea),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),el.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,x,g),tl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,x,g),nl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(el.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),tl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),nl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(el.calc(c),tl.calc(c),nl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function tf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Wv(i,e){let t=1-i;return t*t*e}function Xv(i,e){return 2*(1-i)*i*e}function qv(i,e){return i*i*e}function Yr(i,e,t,n){return Wv(i,e)+Xv(i,t)+qv(i,n)}function Yv(i,e){let t=1-i;return t*t*t*e}function Zv(i,e){let t=1-i;return 3*t*t*i*e}function Kv(i,e){return 3*(1-i)*i*i*e}function Jv(i,e){return i*i*i*e}function Zr(i,e,t,n,s){return Yv(i,e)+Zv(i,t)+Kv(i,n)+Jv(i,s)}var Ea=class extends bn{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zr(e,s.x,r.x,o.x,a.x),Zr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ch=class extends bn{constructor(e=new A,t=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new A){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zr(e,s.x,r.x,o.x,a.x),Zr(e,s.y,r.y,o.y,a.y),Zr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ra=class extends bn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mi=class extends bn{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends bn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Yr(e,s.x,r.x,o.x),Yr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lr=class extends bn{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Yr(e,s.x,r.x,o.x),Yr(e,s.y,r.y,o.y),Yr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ia=class extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(tf(a,c.x,l.x,h.x,u.x),tf(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},Pa=Object.freeze({__proto__:null,ArcCurve:ah,CatmullRomCurve3:qi,CubicBezierCurve:Ea,CubicBezierCurve3:ch,EllipseCurve:so,LineCurve:Ra,LineCurve3:mi,QuadraticBezierCurve:Ca,QuadraticBezierCurve3:lr,SplineCurve:Ia}),Yi=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Pa[s.type]().fromJSON(s))}return this}},La=class extends Yi{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ra(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ca(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Ea(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ia(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new so(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},hr=class i extends bt{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=kt(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new A,d=new re,f=new A,m=new A,x=new A,g=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(m)}for(let y=0;y<=t;y++){let v=n+y*h*s,_=Math.sin(v),C=Math.cos(v);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*_,u.y=e[T].y,u.z=e[T].x*C,o.push(u.x,u.y,u.z),d.x=y/t,d.y=T/(e.length-1),a.push(d.x,d.y);let E=c[3*T+0]*_,P=c[3*T+1],M=c[3*T+0]*C;l.push(E,P,M)}}for(let y=0;y<t;y++)for(let v=0;v<e.length-1;v++){let _=v+y*e.length,C=_,T=_+e.length,E=_+e.length+1,P=_+1;r.push(C,T,P),r.push(E,P,T)}this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("uv",new et(a,2)),this.setAttribute("normal",new et(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Da=class i extends bt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new A,h=new re;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(a,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ft=class i extends bt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(f,2));function y(){let _=new A,C=new A,T=0,E=(t-e)/n;for(let P=0;P<=r;P++){let M=[],S=P/r,L=S*(t-e)+e;for(let W=0;W<=s;W++){let B=W/s,D=B*c+a,G=Math.sin(D),k=Math.cos(D);C.x=L*G,C.y=-S*n+g,C.z=L*k,u.push(C.x,C.y,C.z),_.set(G,E,k).normalize(),d.push(_.x,_.y,_.z),f.push(B,1-S),M.push(m++)}x.push(M)}for(let P=0;P<s;P++)for(let M=0;M<r;M++){let S=x[M][P],L=x[M+1][P],W=x[M+1][P+1],B=x[M][P+1];(e>0||M!==0)&&(h.push(S,L,B),T+=3),(t>0||M!==r-1)&&(h.push(L,W,B),T+=3)}l.addGroup(p,T,0),p+=T}function v(_){let C=m,T=new re,E=new A,P=0,M=_===!0?e:t,S=_===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),m++;let L=m;for(let W=0;W<=s;W++){let D=W/s*c+a,G=Math.cos(D),k=Math.sin(D);E.x=M*k,E.y=g*S,E.z=M*G,u.push(E.x,E.y,E.z),d.push(0,S,0),T.x=G*.5+.5,T.y=k*.5*S+.5,f.push(T.x,T.y),m++}for(let W=0;W<s;W++){let B=C+W,D=L+W;_===!0?h.push(D,D+1,B):h.push(D+1,D,B),P+=3}l.addGroup(p,P,_===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ua=class i extends Ft{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ta=new A,na=new A,il=new A,ia=new zi,Na=class extends bt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(qs*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let m=0;m<c;m+=3){o?(l[0]=o.getX(m),l[1]=o.getX(m+1),l[2]=o.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);let{a:x,b:g,c:p}=ia;if(x.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),ia.getNormal(il),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){let v=(y+1)%3,_=u[y],C=u[v],T=ia[h[y]],E=ia[h[v]],P=`${_}_${C}`,M=`${C}_${_}`;M in d&&d[M]?(il.dot(d[M].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(E.x,E.y,E.z)),d[M]=null):P in d||(d[P]={index0:l[y],index1:l[v],normal:il.clone()})}}for(let m in d)if(d[m]){let{index0:x,index1:g}=d[m];ta.fromBufferAttribute(a,x),na.fromBufferAttribute(a,g),f.push(ta.x,ta.y,ta.z),f.push(na.x,na.y,na.z)}this.setAttribute("position",new et(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ro=class extends La{constructor(e){super(e),this.uuid=Mn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new La().fromJSON(s))}return this}},$v={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Uf(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=ny(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let m=t;m<s;m+=t)u=i[m],d=i[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return oo(r,o,t,a,c,f,0),o}};function Uf(i,e,t,n,s){let r,o;if(s===fy(i,e,t,n)>0)for(r=e;r<t;r+=n)o=nf(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=nf(r,i[r],i[r+1],o);return o&&Za(o,o.next)&&(co(o),o=o.next),o}function gs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Za(t,t.next)||Lt(t.prev,t,t.next)===0)){if(co(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function oo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&ay(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Qv(i,n,s,r):jv(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),co(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=ey(gs(i),e,t),oo(i,e,t,n,s,r,2)):o===2&&ty(i,e,t,n,s,r):oo(gs(i),e,t,n,s,r,1);break}}}function jv(i){let e=i.prev,t=i,n=i.next;if(Lt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Gs(s,a,r,c,o,l,m.x,m.y)&&Lt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Qv(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Lt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=lh(f,m,e,t,n),y=lh(x,g,e,t,n),v=i.prevZ,_=i.nextZ;for(;v&&v.z>=p&&_&&_.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&Gs(a,h,c,u,l,d,v.x,v.y)&&Lt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Gs(a,h,c,u,l,d,_.x,_.y)&&Lt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&Gs(a,h,c,u,l,d,v.x,v.y)&&Lt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Gs(a,h,c,u,l,d,_.x,_.y)&&Lt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function ey(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Za(s,r)&&Nf(s,n,n.next,r)&&ao(s,r)&&ao(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),co(n),co(n.next),n=i=r),n=n.next}while(n!==i);return gs(n)}function ty(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hy(o,a)){let c=Ff(o,a);o=gs(o,o.next),c=gs(c,c.next),oo(o,e,t,n,s,r,0),oo(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ny(i,e,t,n){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Uf(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(ly(l));for(s.sort(iy),r=0;r<s.length;r++)t=sy(s[r],t);return t}function iy(i,e){return i.x-e.x}function sy(i,e){let t=ry(i,e);if(!t)return e;let n=Ff(t,i);return gs(n,n.next),gs(t,t.next)}function ry(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&Gs(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),ao(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&oy(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function oy(i,e){return Lt(i.prev,i,e.prev)<0&&Lt(e.next,i,i.next)<0}function ay(i,e,t,n){let s=i;do s.z===0&&(s.z=lh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,cy(s)}function cy(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function lh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ly(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Gs(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function hy(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!uy(i,e)&&(ao(i,e)&&ao(e,i)&&dy(i,e)&&(Lt(i.prev,i,e.prev)||Lt(i,e.prev,e))||Za(i,e)&&Lt(i.prev,i,i.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Za(i,e){return i.x===e.x&&i.y===e.y}function Nf(i,e,t,n){let s=ra(Lt(i,e,t)),r=ra(Lt(i,e,n)),o=ra(Lt(t,n,i)),a=ra(Lt(t,n,e));return!!(s!==r&&o!==a||s===0&&sa(i,t,e)||r===0&&sa(i,n,e)||o===0&&sa(t,i,n)||a===0&&sa(t,e,n))}function sa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ra(i){return i>0?1:i<0?-1:0}function uy(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Nf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ao(i,e){return Lt(i.prev,i,i.next)<0?Lt(i,e,i.next)>=0&&Lt(i,i.prev,e)>=0:Lt(i,e,i.prev)<0||Lt(i,i.next,e)<0}function dy(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ff(i,e){let t=new hh(i.i,i.x,i.y),n=new hh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function nf(i,e,t,n){let s=new hh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function co(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function hh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fy(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Kr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];sf(e),rf(n,e);let o=e.length;t.forEach(sf);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,rf(n,t[c]);let a=$v.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function sf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function rf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Fa=class i extends bt{constructor(e=new ro([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new et(s,3)),this.setAttribute("uv",new et(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:py,v,_=!1,C,T,E,P;p&&(v=p.getSpacedPoints(h),_=!0,d=!1,C=p.computeFrenetFrames(h,!1),T=new A,E=new A,P=new A),d||(g=0,f=0,m=0,x=0);let M=a.extractPoints(l),S=M.shape,L=M.holes;if(!Kr.isClockWise(S)){S=S.reverse();for(let $=0,oe=L.length;$<oe;$++){let I=L[$];Kr.isClockWise(I)&&(L[$]=I.reverse())}}let B=Kr.triangulateShape(S,L),D=S;for(let $=0,oe=L.length;$<oe;$++){let I=L[$];S=S.concat(I)}function G($,oe,I){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(oe,I)}let k=S.length,j=B.length;function z($,oe,I){let se,ie,be,le=$.x-oe.x,Fe=$.y-oe.y,ve=I.x-$.x,R=I.y-$.y,b=le*le+Fe*Fe,O=le*R-Fe*ve;if(Math.abs(O)>Number.EPSILON){let K=Math.sqrt(b),Q=Math.sqrt(ve*ve+R*R),Z=oe.x-Fe/K,Te=oe.y+le/K,he=I.x-R/Q,_e=I.y+ve/Q,Ye=((he-Z)*R-(_e-Te)*ve)/(le*R-Fe*ve);se=Z+le*Ye-$.x,ie=Te+Fe*Ye-$.y;let ee=se*se+ie*ie;if(ee<=2)return new re(se,ie);be=Math.sqrt(ee/2)}else{let K=!1;le>Number.EPSILON?ve>Number.EPSILON&&(K=!0):le<-Number.EPSILON?ve<-Number.EPSILON&&(K=!0):Math.sign(Fe)===Math.sign(R)&&(K=!0),K?(se=-Fe,ie=le,be=Math.sqrt(b)):(se=le,ie=Fe,be=Math.sqrt(b/2))}return new re(se/be,ie/be)}let ae=[];for(let $=0,oe=D.length,I=oe-1,se=$+1;$<oe;$++,I++,se++)I===oe&&(I=0),se===oe&&(se=0),ae[$]=z(D[$],D[I],D[se]);let ue=[],ge,Ce=ae.concat();for(let $=0,oe=L.length;$<oe;$++){let I=L[$];ge=[];for(let se=0,ie=I.length,be=ie-1,le=se+1;se<ie;se++,be++,le++)be===ie&&(be=0),le===ie&&(le=0),ge[se]=z(I[se],I[be],I[le]);ue.push(ge),Ce=Ce.concat(ge)}for(let $=0;$<g;$++){let oe=$/g,I=f*Math.cos(oe*Math.PI/2),se=m*Math.sin(oe*Math.PI/2)+x;for(let ie=0,be=D.length;ie<be;ie++){let le=G(D[ie],ae[ie],se);te(le.x,le.y,-I)}for(let ie=0,be=L.length;ie<be;ie++){let le=L[ie];ge=ue[ie];for(let Fe=0,ve=le.length;Fe<ve;Fe++){let R=G(le[Fe],ge[Fe],se);te(R.x,R.y,-I)}}}let je=m+x;for(let $=0;$<k;$++){let oe=d?G(S[$],Ce[$],je):S[$];_?(E.copy(C.normals[0]).multiplyScalar(oe.x),T.copy(C.binormals[0]).multiplyScalar(oe.y),P.copy(v[0]).add(E).add(T),te(P.x,P.y,P.z)):te(oe.x,oe.y,0)}for(let $=1;$<=h;$++)for(let oe=0;oe<k;oe++){let I=d?G(S[oe],Ce[oe],je):S[oe];_?(E.copy(C.normals[$]).multiplyScalar(I.x),T.copy(C.binormals[$]).multiplyScalar(I.y),P.copy(v[$]).add(E).add(T),te(P.x,P.y,P.z)):te(I.x,I.y,u/h*$)}for(let $=g-1;$>=0;$--){let oe=$/g,I=f*Math.cos(oe*Math.PI/2),se=m*Math.sin(oe*Math.PI/2)+x;for(let ie=0,be=D.length;ie<be;ie++){let le=G(D[ie],ae[ie],se);te(le.x,le.y,u+I)}for(let ie=0,be=L.length;ie<be;ie++){let le=L[ie];ge=ue[ie];for(let Fe=0,ve=le.length;Fe<ve;Fe++){let R=G(le[Fe],ge[Fe],se);_?te(R.x,R.y+v[h-1].y,v[h-1].x+I):te(R.x,R.y,u+I)}}}Y(),ne();function Y(){let $=s.length/3;if(d){let oe=0,I=k*oe;for(let se=0;se<j;se++){let ie=B[se];Ie(ie[2]+I,ie[1]+I,ie[0]+I)}oe=h+g*2,I=k*oe;for(let se=0;se<j;se++){let ie=B[se];Ie(ie[0]+I,ie[1]+I,ie[2]+I)}}else{for(let oe=0;oe<j;oe++){let I=B[oe];Ie(I[2],I[1],I[0])}for(let oe=0;oe<j;oe++){let I=B[oe];Ie(I[0]+k*h,I[1]+k*h,I[2]+k*h)}}n.addGroup($,s.length/3-$,0)}function ne(){let $=s.length/3,oe=0;de(D,oe),oe+=D.length;for(let I=0,se=L.length;I<se;I++){let ie=L[I];de(ie,oe),oe+=ie.length}n.addGroup($,s.length/3-$,1)}function de($,oe){let I=$.length;for(;--I>=0;){let se=I,ie=I-1;ie<0&&(ie=$.length-1);for(let be=0,le=h+g*2;be<le;be++){let Fe=k*be,ve=k*(be+1),R=oe+se+Fe,b=oe+ie+Fe,O=oe+ie+ve,K=oe+se+ve;Ve(R,b,O,K)}}}function te($,oe,I){c.push($),c.push(oe),c.push(I)}function Ie($,oe,I){Ne($),Ne(oe),Ne(I);let se=s.length/3,ie=y.generateTopUV(n,s,se-3,se-2,se-1);Qe(ie[0]),Qe(ie[1]),Qe(ie[2])}function Ve($,oe,I,se){Ne($),Ne(oe),Ne(se),Ne(oe),Ne(I),Ne(se);let ie=s.length/3,be=y.generateSideWallUV(n,s,ie-6,ie-3,ie-2,ie-1);Qe(be[0]),Qe(be[1]),Qe(be[3]),Qe(be[1]),Qe(be[2]),Qe(be[3])}function Ne($){s.push(c[$*3+0]),s.push(c[$*3+1]),s.push(c[$*3+2])}function Qe($){r.push($.x),r.push($.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return my(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Pa[s.type]().fromJSON(s)),new i(n,e.options)}},py={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new re(r,o),new re(a,c),new re(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new re(o,1-c),new re(l,1-u),new re(d,1-m),new re(x,1-p)]:[new re(a,1-c),new re(h,1-u),new re(f,1-m),new re(g,1-p)]}};function my(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Sn=class i extends bt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new A,d=new A,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let y=[],v=p/n,_=0;p===0&&o===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let C=0;C<=t;C++){let T=C/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+v*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(T+_,1-v),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let v=h[p][y+1],_=h[p][y],C=h[p+1][y],T=h[p+1][y+1];(p!==0||o>0)&&f.push(v,_,T),(p!==n-1||c<Math.PI)&&f.push(_,C,T)}this.setIndex(f),this.setAttribute("position",new et(m,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var gi=class i extends bt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new A,u=new A,d=new A;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let x=m/s*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,y=(s+1)*f+m;o.push(x,g,y),o.push(g,p,y)}this.setIndex(o),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var rn=class i extends bt{constructor(e=new lr(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new A,c=new A,l=new re,h=new A,u=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(f,2));function x(){for(let v=0;v<t;v++)g(v);g(r===!1?t:0),y(),p()}function g(v){h=e.getPointAt(v/t,h);let _=o.normals[v],C=o.binormals[v];for(let T=0;T<=s;T++){let E=T/s*Math.PI*2,P=Math.sin(E),M=-Math.cos(E);c.x=M*_.x+P*C.x,c.y=M*_.y+P*C.y,c.z=M*_.z+P*C.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=t;v++)for(let _=1;_<=s;_++){let C=(s+1)*(v-1)+(_-1),T=(s+1)*v+(_-1),E=(s+1)*v+_,P=(s+1)*(v-1)+_;m.push(C,T,P),m.push(T,E,P)}}function y(){for(let v=0;v<=t;v++)for(let _=0;_<=s;_++)l.x=v/t,l.y=_/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Pa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var ur=class extends ln{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new Ee(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var At=class extends ln{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sf,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},mt=class extends At{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Oa=class extends Xi{static get type(){return"LineDashedMaterial"}constructor(e){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function oa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xy(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function of(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Of(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Zi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uh=class extends Zi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xu,endingEnd:Xu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case qu:r=e,a=2*t-n;break;case Yu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case qu:o=e,c=2*n-t;break;case Yu:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,y=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,v=(-1-f)*g+(1.5+f)*x+.5*m,_=f*g-f*x;for(let C=0;C!==a;++C)r[C]=p*o[h+C]+y*o[l+C]+v*o[c+C]+_*o[u+C];return r}},dh=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},fh=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},wn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oa(t,this.TimeBufferType),this.values=oa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:oa(e.times,Array),values:oa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case tr:t=this.InterpolantFactoryMethodDiscrete;break;case nr:t=this.InterpolantFactoryMethodLinear;break;case wc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return nr;case this.InterpolantFactoryMethodSmooth:return wc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&gy(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=nr;var Ki=class extends wn{constructor(e,t,n){super(e,t,n)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=tr;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends wn{};Ba.prototype.ValueTypeName="color";var xi=class extends wn{};xi.prototype.ValueTypeName="number";var ph=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Yt.slerpFlat(r,0,o,l-a,o,l,c);return r}},_i=class extends wn{InterpolantFactoryMethodLinear(e){return new ph(this.times,this.values,this.getValueSize(),e)}};_i.prototype.ValueTypeName="quaternion";_i.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends wn{constructor(e,t,n){super(e,t,n)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=tr;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends wn{};vi.prototype.ValueTypeName="vector";var za=class{constructor(e="",t=-1,n=[],s=xm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Mn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(vy(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(wn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=xy(c);c=of(c,1,h),l=of(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new xi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,x){if(f.length!==0){let g=[],p=[];Of(f,g,p,m),g.length!==0&&x.push(new u(d,g,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(let x in f){let g=[],p=[];for(let y=0;y!==d[m].morphTargets.length;++y){let v=d[m];g.push(v.time),p.push(v.morphTarget===x?1:0)}s.push(new xi(".morphTargetInfluence["+x+"]",g,p))}c=f.length*o}else{let f=".bones["+t[u].name+"]";n(vi,f+".position",d,"pos",s),n(_i,f+".quaternion",d,"rot",s),n(vi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function _y(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xi;case"vector":case"vector2":case"vector3":case"vector4":return vi;case"color":return Ba;case"quaternion":return _i;case"bool":case"boolean":return Ki;case"string":return Ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function vy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=_y(i.type);if(i.times===void 0){let t=[],n=[];Of(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ki={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},mh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},yy=new mh,yi=class{constructor(e){this.manager=e!==void 0?e:yy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};yi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ri={},gh=class extends Error{constructor(e,t){super(e),this.response=t}},lo=class extends yi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ki.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ri[e]!==void 0){ri[e].push({onLoad:t,onProgress:n,onError:s});return}ri[e]=[],ri[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ri[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,x=0,g=new ReadableStream({start(p){y();function y(){u.read().then(({done:v,value:_})=>{if(v)p.close();else{x+=_.byteLength;let C=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let T=0,E=h.length;T<E;T++){let P=h[T];P.onProgress&&P.onProgress(C)}p.enqueue(_),y()}},v=>{p.error(v)})}}});return new Response(g)}else throw new gh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{ki.add(e,l);let h=ri[e];delete ri[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=ri[e];if(h===void 0)throw this.manager.itemError(e),l;delete ri[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var xh=class extends yi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ki.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=jr("img");function c(){h(),ki.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var ka=class extends yi{constructor(e){super(e)}load(e,t,n,s){let r=new qt,o=new xh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},dr=class extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},fr=class extends dr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},sl=new ze,af=new A,cf=new A,ho=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;af.setFromMatrixPosition(e.matrixWorld),t.position.copy(af),cf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cf),t.updateMatrixWorld(),sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_h=class extends ho{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ir*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Va=class extends dr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new _h}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},lf=new ze,Vr=new A,rl=new A,vh=class extends ho{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vr),rl.copy(n.position),rl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(rl),n.updateMatrixWorld(),s.makeTranslation(-Vr.x,-Vr.y,-Vr.z),lf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lf)}},Ha=class extends dr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},yh=class extends ho{constructor(){super(new Wi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mi=class extends dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new yh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var $i=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ga=class extends yi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ki.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ki.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),ki.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ki.add(e,c),r.manager.itemStart(e)}};var Uh="\\[\\]\\.:\\/",My=new RegExp("["+Uh+"]","g"),Nh="[^"+Uh+"]",by="[^"+Uh.replace("\\.","")+"]",Sy=/((?:WC+[\/:])*)/.source.replace("WC",Nh),wy=/(WCOD+)?/.source.replace("WCOD",by),Ty=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nh),Ay=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nh),Ey=new RegExp("^"+Sy+wy+Ty+Ay+"$"),Ry=["material","materials","bones","map"],Mh=class{constructor(e,t,n){let s=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},wt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(My,"")}static parseTrackName(e){let t=Ey.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ry.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=Mh;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kM=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function Fh({scene:i,root:e,side:t,branches:n,isFlowing:s,isFront:r}){let o,a=[];if(e.traverse(C=>{C.isMesh&&C.name.replaceAll("_"," ").startsWith("Battery tall case")&&(o=C),C.isMesh&&C.name.replaceAll("_"," ").startsWith("Visible plate edge")&&a.push(C)}),!o)return{update(){}};let c=o.material,l=new $e().setFromObject(o),h=l.getSize(new A),u=l.getCenter(new A),d=new mt({color:"#a5c6bf",transparent:!0,opacity:.12,roughness:.18,depthWrite:!1,side:Mt}),f=new ht;f.name=t+" integrated battery bubbles",i.add(f);function m(C,T,E,P,M,S,L){let W=new Be(new Nt(C,T,E),P);return W.position.set(M,S,L),f.add(W),W}let x=new mt({color:"#75afa5",transparent:!0,opacity:.25,roughness:.18,depthWrite:!1,side:Mt});m(h.x*.89,h.y*.84,h.z*.8,x,u.x,l.min.y+h.y*.45,u.z);let g=new At({color:"#718981",roughness:.4,metalness:.35});for(let C=0;C<6;C++)m(h.x*.014,h.y*.89,h.z*.28,g,l.min.x+h.x*(.1+C*.16),u.y,u.z-h.z*.18);for(let C of[-1,1])m(h.x*.025,h.y,h.z,g,u.x+C*h.x*.48,u.y,u.z);m(h.x,h.y*.025,h.z,g,u.x,l.min.y,u.z);let p=new Sn(1,12,8),y=new It({color:"#f0ffff",toneMapped:!1}),v=[];for(let C=0;C<72;C++){let T=new Be(p,y),E=h.x*(.0035+C*31%89/89*.006);T.scale.setScalar(E),f.add(T),v.push({m:T,lane:C%6,phase:C*73%113/113,speed:.13+C*17%29/29*.1,r:E,t:C*73%113/113,alive:!0})}let _=n[t].open;return{update(C){let T=r();if(f.visible=T,o.material=T?d:c,o.castShadow=!T,a.forEach(M=>M.visible=!T),!T)return;let E=s(),P=n[t].open;if(P&&!_)for(let M of v)M.alive=!0,M.t=M.phase;_=P;for(let M of v){E&&(M.t+=C*M.speed,M.t>=1&&(M.t%=1,M.alive=P));let S=M.t;M.m.visible=M.alive&&P&&E,M.m.scale.setScalar(M.r),M.m.position.set(l.min.x+h.x*(.1+M.lane*.16+Math.sin(S*12+M.phase*20)*.012),l.min.y+h.y*(.04+S*.81),u.z+h.z*(.1+Math.sin(M.phase*32)*.16))}}}}var Yn={pipeID:.0158,hoseID:.004,orificeD:1e-4,orifices:12,head:.204,electrolyte:1280,reliefD:.003,filterK:8},Ja=i=>Math.PI*i*i/4,ji=i=>(101325+i*98066.5)/(287.05*293.15),xs=1.4,Cy=Math.pow(2/(xs+1),xs/(xs-1)),Oh=(i,e,t)=>{if(e<=0)return 0;let n=101325+t*98066.5;return(n-e)/n<=Cy?.6*Ja(i)*n*Math.sqrt(xs/(287.05*293.15))*Math.pow(2/(xs+1),(xs+1)/(2*(xs-1))):.6*Ja(i)*Math.sqrt(2*ji(t)*e)};function Bf({supply:i=45,open:e,hand:t,handSet:n,auto:s=.45,safety:r=.2,ventAlways:o=!1,batteries:a=1}){let c={supply:i,afterShutoff:e?i:0,afterAuto:e?s:0,afterHand:0,afterFilter:0};if(!e)return{...c,mCells:0,mRelief:0,mBranch:0,v:{},filterDp:0};c.afterHand=t?n:s;let l=Yn.electrolyte*9.81*Yn.head,h=c.afterHand,u=0,d=0,f=0;for(let g=0;g<4;g++){u=a*Yn.orifices*Oh(Yn.orificeD,h*98066.5-l,h),d=o?Oh(Yn.reliefD,h*98066.5,h):h>r?Oh(Yn.reliefD,(h-r)*98066.5,h):0;let p=(u+d)/(ji(c.afterHand)*Ja(Yn.pipeID));f=Yn.filterK*.5*ji(c.afterHand)*p*p/98066.5,h=c.afterHand-f}c.afterFilter=h;let m=u+d,x=(g,p,y=Yn.pipeID)=>g/(ji(p)*Ja(y));return{...c,mCells:u,mRelief:d,mBranch:m,filterDp:f,v:{header:x(m,i),hp:x(m,i),auto:x(m,s),hand:x(m,c.afterHand),filter:x(m,h),manifold:x(u,h),hose:x(u/a,h,Yn.hoseID),safety:x(d,h)}}}var Iy=`
#battery-detail{width:min(960px,96vw);max-width:96vw;max-height:94dvh;padding:16px;border:1px solid #c4d7c8;border-radius:16px;background:#f4f5f7;color:#222;font-family:system-ui,Arial,sans-serif}
#battery-detail::backdrop{background:#193c3555}
#battery-detail .bd-head{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px}
#battery-detail h2{font-size:18px;margin:0}
#battery-detail .bd-views{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 8px}
#battery-detail button{padding:6px 12px;cursor:pointer;border:1px solid #c4d7c8;border-radius:8px;background:#fff;font:inherit;font-size:13px}
#battery-detail .bd-panel,#battery-detail .bd-sliders,#battery-detail .bd-note,#battery-detail .bd-views{display:none!important}
#bd-c{width:100%;height:min(760px,80dvh);touch-action:none;cursor:grab;background:#e9ecef;border-radius:8px}
#battery-detail .bd-panel{margin-top:10px;padding:10px 12px;border:1px solid #ccc;border-radius:8px;font-size:13px;background:#fff}
#bd-ro{display:grid;grid-template-columns:1fr auto;gap:2px 14px;color:#555}
#bd-ro span:nth-child(even){color:#111;text-align:right}
#battery-detail .bd-sliders{display:grid;grid-template-columns:auto 1fr auto;gap:6px 10px;align-items:center;margin-top:10px;font-size:13px;color:#444}
#battery-detail .bd-note{font-size:12px;color:#555;margin-top:6px}
.battery-info{position:absolute;transform:translate(-50%,-50%);width:22px;height:22px;padding:0;line-height:18px;border-radius:50%;border:1.5px solid #2f5d50;background:#fff;color:#2f5d50;font:italic 700 12px/18px Georgia,serif;cursor:pointer;pointer-events:auto;box-shadow:0 2px 8px #193c3530;z-index:2}
.battery-info:hover{background:#2f5d50;color:#fff}
.battery-card{position:absolute;transform:translate(-50%,-50%);padding:0;border:1.5px solid #9fb8a7;border-radius:10px;background:#fbfbf8;cursor:pointer;pointer-events:auto;box-shadow:0 2px 10px #193c3522;overflow:hidden;z-index:2}
.battery-card img{width:100%;height:100%;object-fit:contain;display:block}
.battery-card .bi{position:absolute;top:4px;right:4px;width:22px;height:22px;border-radius:50%;border:1.5px solid #2f5d50;background:#fff;color:#2f5d50;font:italic 700 13px/19px Georgia,serif;text-align:center}
.battery-card:hover{border-color:#2f5d50}`,zf=[["sp","Air pressure (kgf/cm\xB2)",.13,.45,.005,.145,3],["sd","Orifice dia. (mm)",.03,.3,.01,.1,2],["sg","Electrolyte sp. gravity",1,1.3,.01,1.28,2],["sh2","Real battery height (cm)",10,60,1,25,0],["sv","Bubble display scale",1,3,.1,1,1],["so","Case clarity",.05,.8,.01,.16,2],["sl","Length L (model)",1,3,.05,1.9,2],["sw","Width W (model)",.6,2,.05,1,2],["sh","Height (model)",1,4,.05,2.8,2]],Tn=null,mo=null,$a=null;function kf(){if($a)return $a;let i=(s,r,o)=>new At({color:s,roughness:r,metalness:o}),e=document.createElement("canvas");e.width=512,e.height=256;let t=e.getContext("2d");t.fillStyle="#f2c56e",t.fillRect(0,0,512,256),t.fillStyle="#2a2016";for(let s=0;s<4;s++)for(let r=0;r<12;r++)t.fillRect(r*42.6+s%2*21+8,28+s*52,20,22);let n=new qn(e);return n.colorSpace=yt,n.wrapS=Fn,$a={M:i,lidM:i(15260064,.7,0),steel:i(12369084,.3,.9),rubberM:i(1908513,.8,0),holeM:i(921360,.9,0),octM:i(4016700,.55,.45),bronzeM:i(9071178,.5,.6),redM:i(13121323,.5,0),clearM:new mt({color:15922422,transparent:!0,opacity:.45,roughness:.08,transmission:.4,side:Mt}),hoseM:new mt({color:15721656,transparent:!0,opacity:.6,roughness:.12,transmission:.5,side:Mt}),ventM:new At({map:n,roughness:.6}),ventTopM:i(15910254,.6,0)},$a}function ja({W:i=1,L:e=1.9,nippleHose:t=!0,hose:n=t,centre:s=[1.3,2.25,3.4,4.4]}={}){let r=kf(),o=new ht,a=i,c=0,l=(p,y,v,_,C)=>{let T=new Be(p,y);return T.position.set(v,_,C),T.castShadow=T.receiveShadow=!0,o.add(T),T},h=(p,y,v)=>new Ft(p,p,y,v||40),u=(p,y,v,_,C)=>l(new hr(p.map(([T,E])=>new re(T,E)),48),y,v,_,C),d=p=>(.1+.16*p-.5)*e;function f(p,y,v){v==="oct"?l(new Ft(.12*a,.12*a,.03*a,8),r.octM,p,.015*a,y).rotation.y=Math.PI/8:u([[0,0],[.118*a,0],[.12*a,.012*a],[.112*a,.03*a],[.09*a,.026*a],[.08*a,.012*a],[0,.012*a]],r.steel,p,0,y);let _=.012*a;for(let C=0;C<4;C++)l(h((.078-C*.003)*a,.011*a,32),r.rubberM,p,_+.0055*a,y),_+=.012*a;if(l(h(.022*a,.004*a,20),r.holeM,p,_+.001*a,y),v==="post"){l(h(.02*a,.3*a,16),r.steel,p,_+.15*a,y);for(let C=0;C<9;C++)l(new gi(.022*a,.004*a,6,20),r.steel,p,_+.05*a+C*.018*a,y).rotation.x=Math.PI/2}}for(let p=0;p<2;p++)for(let y=0;y<6;y++)f((p?.26:-.26)*i,d(y),y===0||y===5?"post":p===0&&y===2?"oct":"");let m=d(s[0]);if(t&&(l(new Ft(.085*a,.085*a,.015*a,8),r.bronzeM,0,c+.0075*a,m),l(h(.032*a,.045*a,24),r.rubberM,0,c+.037*a,m),l(new Ft(.014*a,.02*a,.06*a,20),r.rubberM,0,c+.09*a,m),n)){let p=new qi([[0,c+.08,m],[0,c+.3,m],[-.08,c+.48,m+.08],[-.32,c+.52,m+.2],[-.5,c+.42,m+.3]].map(y=>new A(...y)));l(new rn(p,60,.022*a,12,!1),r.hoseM,0,0,0)}m=d(s[1]),l(h(.095*a,.02*a),r.rubberM,0,c+.01*a,m),l(new Ft(.085*a,.085*a,.22*a,48,1,!0),r.ventM,0,c+.13*a,m),l(h(.086*a,.012*a),r.ventTopM,0,c+.246*a,m);let x={x:0,y:c+.02*a,z:m,r:.085*a,h:.22*a},g=new A(0,c+.12*a,d(s[0]));m=d(s[2]),u([[0,0],[.105*a,0],[.108*a,.01*a],[.07*a,.016*a],[0,.016*a]],r.steel,0,c,m),l(h(.06*a,.2*a,40),r.clearM,0,c+.116*a,m).castShadow=!1;for(let[p,y]of[[.06,r.redM],[.08,r.redM],[.12,r.rubberM]])l(new gi(.061*a,.004*a,6,40),y,0,c+p*a,m).rotation.x=Math.PI/2;m=d(s[3]),l(new gi(.07*a,.012*a,10,40),r.steel,0,c+.004*a,m).rotation.x=Math.PI/2,l(h(.05*a,.003*a,32),r.holeM,0,c+.002*a,m);for(let p of[-.45,.45])l(new Sn(.035*a,20,10,0,Math.PI*2,0,Math.PI/2),r.lidM,0,c,p*e);return{group:o,vent:x,nipple:g}}var Py=new A(Math.sin(1.02)*Math.cos(3.927),Math.cos(1.02),Math.sin(1.02)*Math.sin(3.927));function Vf({centre:i}={}){let s=kf(),r=new ht,o=(v,_,C,T)=>{let E=new Be(v,_);return E.position.y=C,T&&(E.renderOrder=T),r.add(E),E};o(new Nt(1*.96,2.8*.8,1.9*.96),new At({color:8376768,transparent:!0,opacity:.35,depthWrite:!1}),2.8*.42,2);let a=[];for(let v=0;v<2;v++)for(let _=0;_<6;_++){let C=v?.26:-.26,T=(.1+.16*_-.5)*1.9,E=new Be(new Nt(.2,2.8*.6,.035),new At({color:7040885,roughness:.6,metalness:.6}));E.position.set(C,.2+2.8*.3,T),r.add(E),a.push({x:C,z:T})}o(new Nt(1,2.8,1.9),new mt({color:14478580,transparent:!0,opacity:.22,roughness:.05,side:Mt,depthWrite:!1}),2.8/2,3);let c=new cr(new Na(new Nt(1,2.8,1.9)),new Xi({color:4016709}));c.position.y=2.8/2,r.add(c),o(new Nt(1*1.02,.06,1.9*1.02),s.lidM,2.8-.03);let l=ja({W:1,L:1.9,hose:!1,centre:i});l.group.position.y=2.8,r.add(l.group);let h=14,u=a.length*h,d=2.8*.82,f=new Xn(new Sn(.028,8,6),new It({color:16777215,transparent:!0,opacity:.85,depthWrite:!1}),u);f.renderOrder=4,f.frustumCulled=!1,r.add(f);let m=Array.from({length:u},()=>Math.random()),x=new Tt,g=Qa(420);l.group.add(g.points);function p(v,_,C){for(let T=0;T<u;T++){let E=a[Math.floor(T/h)];m[T]=(m[T]+v*.55*(.8+.4*(T*37%10)/10))%1;let P=_>0&&T%h/h<.35+.65*_,M=.12+m[T]*(d-.12);x.position.set(E.x+.06*Math.sin(T*1.7+m[T]*9),M,E.z+.03*Math.cos(T*2.3+m[T]*7)),x.scale.setScalar(P?.7+m[T]*.6:0),x.updateMatrix(),f.setMatrixAt(T,x.matrix)}f.instanceMatrix.needsUpdate=!0,g.update(v,_,l.vent,C,!1)}let y=l.nipple.clone().add(new A(0,2.8,0));return{group:r,update:p,nipple:y,size:{W:1,L:1.9,H:2.8}}}function Hf(i,e){let t=(r,o)=>{let a=new A().crossVectors(o,r).normalize(),c=new A().crossVectors(r,a);return new ze().makeBasis(a,c,r)},n=t(Py.clone(),new A(0,1,0)),s=t(e.clone().normalize(),i.clone().normalize());return new Yt().setFromRotationMatrix(s.multiply(n.transpose()))}function Qa(i=700){let e=new bt,t=new Float32Array(i*3),n=new Float32Array(i),s=new Float32Array(i);e.setAttribute("position",new dt(t,3)),e.setAttribute("aAlpha",new dt(n,1)),e.setAttribute("aSize",new dt(s,1));let r=new Zt({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:400},uPersp:{value:1}},vertexShader:"attribute float aAlpha;attribute float aSize;varying float vAl;uniform float uScale;uniform float uPersp;void main(){vAl=aAlpha;vec4 mv=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;gl_PointSize=aSize*uScale/mix(1.,-mv.z,uPersp);}",fragmentShader:"varying float vAl;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;float a=pow(1.-r,1.6)*vAl;if(a<.004)discard;gl_FragColor=vec4(mix(vec3(.62,.72,.8),vec3(.45,.56,.66),r*r),a);}"}),o=new pi(e,r);o.frustumCulled=!1,o.renderOrder=6;let a=Array.from({length:i},()=>({age:Math.random(),life:1.2+Math.random()*.8,live:!1}));function c(l,h,u,d,f){r.uniforms.uScale.value=d,r.uniforms.uPersp.value=f?1:0;for(let m=0;m<i;m++){let x=a[m];if(x.age+=l/x.life,x.age>=1&&(x.age%=1,x.live=Math.random()<h,x.a=Math.random()*6.283,x.h=.15+Math.random()*.75,x.sp=.6+Math.random()*.8),!x.live||!u){n[m]=0;continue}let g=x.age,p=u.r/.085,y=u.r+g*.22*x.sp*p,v=u.y+x.h*u.h+g*g*.55*x.sp*p;t[m*3]=(u.x||0)+Math.cos(x.a)*y,t[m*3+1]=v,t[m*3+2]=u.z+Math.sin(x.a)*y,s[m]=(.03+g*.16)*p,n[m]=h*.85*Math.min(1,g/.06)*Math.pow(1-g,1.2)}e.attributes.position.needsUpdate=e.attributes.aAlpha.needsUpdate=e.attributes.aSize.needsUpdate=!0}return{points:o,update:c}}{let i=document.createElement("style");i.textContent=Iy,document.head.append(i)}function Gf({side:i,pressure:e,title:t}){Tn||Ly(),Tn.querySelector("h2").textContent=t||"Battery cell \xB7 "+(i==="stbd"?"STBD":"PORT")+" \u2014 transparent with air bubbling";let n=Tn.querySelector("#bd-sp");n.value=String(Math.min(+n.max,Math.max(+n.min,e))),Tn.showModal(),mo.resize(),mo.physChange(),mo.start()}function Ly(){Tn=document.createElement("dialog"),Tn.id="battery-detail",Tn.innerHTML=`<div class="bd-head"><h2></h2><button id="bd-close">Close \xD7</button></div>
<div class="bd-views">
 <button data-view="drawing">Drawing view</button><button data-view="top">Top close-up</button>
 <button data-view="front">Front</button><button data-view="side">Side zoom</button>
 <button id="bd-rb">Auto-rotate: off</button><button id="bd-bb">Bubbles: on</button>
</div>
<div id="bd-c"></div>
<div class="bd-panel"><div style="font-weight:600;margin-bottom:6px">Air flow and bubble physics (live)</div><div id="bd-ro"></div></div>
<div class="bd-sliders">${zf.map(([i,e,t,n,s,r])=>`<span>${e}</span><input type="range" id="bd-${i}" min="${t}" max="${n}" step="${s}" value="${r}"><span id="bd-v${i}"></span>`).join("")}</div>
<div class="bd-note">Pressure starts at this branch's PG reading (hand reducer ON 0.13\u20130.16, OFF 0.45 kgf/cm\xB2). Assumptions: 12 air orifices (one under each plate), discharge coefficient 0.6, air at 20 \xB0C, supply pressure measured at the orifices, surface tension 0.073 N/m. Drag to rotate, scroll or pinch to zoom.</div>`,document.body.append(Tn),mo=Dy(Tn),Tn.querySelector("#bd-close").onclick=()=>Tn.close(),Tn.addEventListener("close",()=>mo.stop())}function Dy(i){let e=X=>i.querySelector("#bd-"+X),t=X=>+e(X).value,n=e("c"),s=new ps,r=new Vt(16,680/520,1,300),o=new ar({antialias:!0,alpha:!0});o.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),o.shadowMap.enabled=!0,o.shadowMap.type=uo,n.appendChild(o.domElement),s.add(new fr(16777215,9079434,.9*Math.PI));let a=new Mi(16777215,.8*Math.PI);a.position.set(-6,10,-4),a.castShadow=!0,a.shadow.mapSize.width=2048,a.shadow.mapSize.height=2048;let c=a.shadow.camera;c.left=-8,c.right=8,c.top=8,c.bottom=-8,c.near=1,c.far=40,s.add(a);let l=new Mi(16777215,.35*Math.PI);l.position.set(6,3,5),s.add(l);let h=new Be(new gn(60,60),new ur({opacity:.2}));h.rotation.x=-Math.PI/2,h.receiveShadow=!0,s.add(h);let u=(X,Se,Re)=>new At({color:X,roughness:Se,metalness:Re}),d=u(10659756,.45,.5),f=u(12369084,.3,.9),m=u(13148746,.35,.85),x=u(3026478,.6,.3),g=u(7040885,.6,.6),p=new mt({color:14478580,transparent:!0,opacity:.16,roughness:.05,metalness:0,side:Mt,depthWrite:!1}),y=new At({color:8376768,transparent:!0,opacity:.3,roughness:.1,metalness:0,depthWrite:!1}),v=new At({color:16777215,transparent:!0,opacity:.8,roughness:.05,metalness:.1,depthWrite:!1}),_=new ht;s.add(_);let C=new ht;s.add(C);let T=new Sn(1,12,9);function E(X,Se,Re,we,at,qe){let He=new Be(X,Se);return He.position.set(Re,we,at),qe||(He.castShadow=!0,He.receiveShadow=!0),_.add(He),He}let P=(X,Se,Re)=>new Ft(X,X,Se,Re||40),M=(X,Se)=>new Ft(X,X,Se,6);function S(X,Se,Re,we,at){let qe=E(new gi(we,.012*at,8,32),f,X,Se,Re);qe.rotation.x=Math.PI/2,E(P(we*.75,.006*at),m,X,Se+.003*at,Re),E(P(we*.22,.01*at,16),x,X,Se+.006*at,Re)}function L(X,Se,Re,we){let at=.12*we,qe=Se;E(P(at*1.04,.02*we),f,X,qe+.01*we,Re),qe+=.02*we,E(M(at,.11*we),f,X,qe+.055*we,Re).rotation.y=Math.PI/6,qe+=.11*we,E(P(.082*we,.17*we),m,X,qe+.085*we,Re),qe+=.17*we,S(X,qe,Re,.066*we,we)}function W(X,Se,Re,we){let at=Se;E(P(.17*we,.02*we),f,X,at+.01*we,Re),at+=.02*we,E(M(.16*we,.13*we),f,X,at+.065*we,Re).rotation.y=Math.PI/6,at+=.13*we,E(M(.14*we,.12*we),f,X,at+.06*we,Re),at+=.12*we,S(X,at,Re,.075*we,we)}function B(X,Se,Re,we){E(M(.1*we,.06*we),f,X,Se+.03*we,Re).rotation.y=Math.PI/6}let D=new A(0,1.4,0),G=1.4,k=20,j=2.8,z=1,ae=1.9,ue=[],ge=2,Ce=!0,je=.12,Y=2500,ne=new Xn(T,v,Y);ne.frustumCulled=!1,ne.renderOrder=4,C.add(ne);let de=[],te=new Tt,Ie=[];for(let X=0;X<Y;X++)de.push({a:!1});function Ve(){Ie=[];for(let X=Y-1;X>=0;X--)de[X].a=!1,Ie.push(X)}Ve();let Ne=9.81,Qe=101325,$=98066.5,oe=.6,I=.073,se={Q:0,db:0,f:0,u:0,dPe:0,s:.09,depth:0,Ph:0,Pg:0,rho:1280,dispScale:1,tRise:0,alive:0,hold:0,acc:[]},ie=(X,Se)=>Math.sqrt(2*I/(Se*X)+Ne*X/2)*Math.tanh(X/.0015);function be(){let X=t("sp")*$,Se=t("sg"),Re=1e3*Se,we=t("sd")*.001,qe=t("sh2")/100/j,He=(ge-je)*qe,on=Re*Ne*He,Ct=X-on,Dt=0,Jt=0,Wt=0,tn=0;if(Ct>0){let jn=1.204*(Qe+X)/Qe,Pr=Math.PI*we*we/4,w=oe*Math.sqrt(2*Ct/jn);Dt=Pr*w;let N=Math.PI*we*I/(Re*Ne),V=1.378*Math.pow(Dt,1.2)/Math.pow(Ne,.6),H=Math.max(N,V);Jt=Math.cbrt(6*H/Math.PI),Wt=Dt/H,tn=ie(Jt,Re)}Object.assign(se,{Q:Dt,db:Jt,f:Wt,u:tn,dPe:Ct,s:qe,depth:He,Ph:on,Pg:X,rho:Re}),se.dispScale=t("sv"),se.tRise=tn>0?He/tn:0,se.alive=12*Wt*se.tRise;let $n=z*qe*ae*qe;se.hold=tn>0&&$n>0?12*Dt/$n/tn:0,se.acc=ue.map(()=>Wt>0?Math.random()/Wt:0);let Ir=[["Supply pressure",(X/$).toFixed(3)+" kgf/cm\xB2  ("+(X/1e3).toFixed(1)+" kPa)"],["Electrolyte head at orifice ("+(He*100).toFixed(1)+" cm)",(on/$).toFixed(3)+" kgf/cm\xB2"],["Net driving pressure",Ct>0?(Ct/$).toFixed(3)+" kgf/cm\xB2":"no flow (head exceeds supply)"],["Air flow per orifice",Ct>0?(Dt*1e6).toFixed(2)+" mL/s":"0"],["Total air flow (12 orifices)",Ct>0?(12*Dt*6e4).toFixed(2)+" L/min":"0"],["Bubble diameter",Ct>0?(Jt*1e3).toFixed(2)+" mm":"-"],["Bubbles per second, per orifice",Ct>0?Wt.toFixed(0)+" Hz":"-"],["Bubble rise speed",Ct>0?(tn*100).toFixed(1)+" cm/s":"-"],["Time to reach surface",Ct>0?se.tRise.toFixed(2)+" s":"-"],["Bubbles in liquid at once",Ct>0?Math.round(se.alive)+(se.alive>Y?" (display capped at "+Y+")":""):"-"],["Gas hold-up (volume fraction)",Ct>0?(se.hold*100).toFixed(2)+" %":"-"]];e("ro").innerHTML=Ir.map(jn=>"<span>"+jn[0]+"</span><span>"+jn[1]+"</span>").join("");for(let[jn,,,,,,Pr]of zf)e("v"+jn).textContent=t(jn).toFixed(Pr)}function le(X,Se){if(!Ie.length)return;let Re=Ie.pop(),we=de[Re],at=ue[X],qe=se.db*(.88+.24*Math.random());we.a=!0,we.d=qe,we.u=ie(qe,se.rho),we.x0=at.x+(Math.random()-.5)*.003/se.s,we.z0=at.z+(Math.random()-.5)*.003/se.s,we.vx=(Math.random()-.5)*.012/se.s,we.vz=(Math.random()-.5)*.012/se.s,we.y=je+Se,we.t=0,we.ph=Math.random()*6.28}function Fe(X){te.position.set(0,-50,0),te.scale.set(0,0,0),te.updateMatrix(),ne.setMatrixAt(X,te.matrix)}function ve(X){if(se.f>0){let qe=1/se.f;for(let He=0;He<ue.length;He++)for(se.acc[He]+=X;se.acc[He]>=qe;)se.acc[He]-=qe,le(He,se.acc[He]*se.u/se.s)}let Se=se.s,Re=Qe+se.rho*Ne*se.depth,we=z*.47,at=ae*.47;for(let qe=0;qe<Y;qe++){let He=de[qe];if(!He.a){Fe(qe);continue}if(He.y+=He.u/Se*X,He.t+=X,He.y>=ge){He.a=!1,Ie.push(qe),Fe(qe);continue}let on=He.d/Se,Ct=.4*on,Dt=He.x0+He.vx*He.t+Ct*Math.sin(6.283*7*He.t+He.ph),Jt=He.z0+He.vz*He.t+Ct*Math.cos(6.283*6*He.t+He.ph);Dt=Math.max(-we,Math.min(we,Dt)),Jt=Math.max(-at,Math.min(at,Jt));let Wt=Qe+se.rho*Ne*(ge-He.y)*Se,tn=Math.cbrt(Re/Wt),$n=on/2*tn*se.dispScale,Ir=He.d>.002?.86:1;te.position.set(Dt,He.y,Jt),te.scale.set($n,$n*Ir,$n),te.updateMatrix(),ne.setMatrixAt(qe,te.matrix)}ne.instanceMatrix.needsUpdate=!0}function R(){if(Ve(),se.f<=0){ve(.001);return}let X=Math.min(150,Math.ceil((se.tRise+.3)/.02));for(let Se=0;Se<X;Se++)ve(.02)}function b(X,Se,Re){for(;_.children.length;)_.children.pop().geometry?.dispose();j=Re,z=Se,ae=X,ge=Re*.86;let we=E(new Nt(Se,Re,X),p,0,Re/2,0,!0);we.renderOrder=3;let at=E(new Nt(Se*.96,ge-.06,X*.96),y,0,.06+(ge-.06)/2,0,!0);at.renderOrder=2,E(new Nt(Se*1.02,.06,X*1.02),u(15260064,.7,0),0,Re-.03,0),E(new Nt(Se*1.02,.06,X*1.02),d,0,.03,0),ue=[];let qe=Re*.6,He=.2;for(let Ct=0;Ct<2;Ct++)for(let Dt=0;Dt<6;Dt++){let Jt=(.1+.16*Dt-.5)*X,Wt=(Ct?.26:-.26)*Se;E(new Nt(.2*Se,qe,.035),g,Wt,He+qe/2,Jt);let tn=Re-.06-(He+qe);E(P(.03*Se,tn,16),m,Wt,He+qe+tn/2,Jt),E(P(.04*Se,.05,20),x,Wt,.085,Jt),ue.push({x:Wt,z:Jt})}let on=ja({W:Se,L:X});on.group.position.y=Re,_.add(on.group),O={...on.vent,y:on.vent.y+Re},k=Math.max(X,Re,Se)*6.9}let O=null,K=Qa();s.add(K.points);function Q(X){let Se=12*se.Q*6e4,Re=O&&Ce&&se.f>0?Math.min(1,.35+Se/1.2):0;K.update(X,Re,O,o.domElement.height/(2*Math.tan(r.fov*Math.PI/360)),!0)}let Z=3.927,Te=1.08,he=20,_e=Z,Ye=Te,ee=he,ye=!1,Oe=!1,ke=1;function Ae(X,Se,Re,we){_e=X,Ye=Se,ye=!1,Oe=Re,ke=we,ee=k*we,G=Re?j:j/2,e("rb").textContent="Auto-rotate: off"}let it={drawing:[3.927,1.08,!1,1],top:[3.927,1.08,!0,.42],front:[Math.PI,Math.PI/2,!1,1],side:[Math.PI/2,Math.PI/2,!1,.6]};i.querySelectorAll("[data-view]").forEach(X=>X.onclick=()=>Ae(...it[X.dataset.view])),e("rb").onclick=()=>{ye=!ye,e("rb").textContent="Auto-rotate: "+(ye?"on":"off")},e("bb").onclick=()=>{Ce=!Ce,C.visible=Ce,e("bb").textContent="Bubbles: "+(Ce?"on":"off")};function Xe(){b(t("sl"),t("sw"),t("sh")),be(),R(),ee=k*ke,G=Oe?j:j/2}function gt(){be(),R()}["sl","sw","sh"].forEach(X=>e(X).addEventListener("input",Xe)),["sp","sd","sg","sh2"].forEach(X=>e(X).addEventListener("input",gt)),e("sv").addEventListener("input",()=>{se.dispScale=t("sv"),e("vsv").textContent=se.dispScale.toFixed(1)}),e("so").addEventListener("input",()=>{let X=t("so");p.opacity=X,y.opacity=.12+X*1,e("vso").textContent=X.toFixed(2)}),Xe(),he=ee,D.y=G;let U=!1,fe=0,q=0,J=0,pe={};n.addEventListener("pointerdown",X=>{U=!0,fe=X.clientX,q=X.clientY,pe[X.pointerId]=X,n.setPointerCapture(X.pointerId),n.style.cursor="grabbing"}),n.addEventListener("pointerup",X=>{U=!1,delete pe[X.pointerId],J=0,n.style.cursor="grab"}),n.addEventListener("pointermove",X=>{pe[X.pointerId]=X;let Se=Object.keys(pe);if(Se.length===2){let Re=pe[Se[0]],we=pe[Se[1]],at=Math.hypot(Re.clientX-we.clientX,Re.clientY-we.clientY);J&&(ee=Math.max(k*.15,Math.min(k*2,ee*J/at))),J=at;return}U&&(_e-=(X.clientX-fe)*.008,Ye=Math.max(.05,Math.min(Math.PI-.05,Ye-(X.clientY-q)*.008)),fe=X.clientX,q=X.clientY,ye=!1)}),n.addEventListener("wheel",X=>{X.preventDefault(),ee=Math.max(k*.15,Math.min(k*2,ee*(1+X.deltaY*.001)))},{passive:!1});function xe(){let X=n.clientWidth||680,Se=n.clientHeight||520;r.aspect=X/Se,r.updateProjectionMatrix(),o.setSize(X,Se)}window.addEventListener("resize",xe);let Ge=performance.now(),vt=0;function zt(){vt=requestAnimationFrame(zt);let X=performance.now(),Se=Math.min(.05,(X-Ge)/1e3);Ge=X,ye&&(_e+=.006),Ce&&ve(Se),Q(Se),Z+=(_e-Z)*.12,Te+=(Ye-Te)*.12,he+=(ee-he)*.12,D.y+=(G-D.y)*.12,r.position.set(D.x+he*Math.sin(Te)*Math.cos(Z),D.y+he*Math.cos(Te),D.z+he*Math.sin(Te)*Math.sin(Z)),r.lookAt(D),o.render(s,r)}return{resize:xe,physChange:gt,start(){vt||(Ge=performance.now(),zt())},stop(){cancelAnimationFrame(vt),vt=0}}}var go=new A(0,1,0),Uy=new A(1,0,0),xr=new A,_r=new A,qf=new A,Yf=new A,ec=new Yt,Bh=new A,Wf=new ze,mr=new Ee,tc=new ze().makeScale(0,0,0),Xf={flowing:null,pressurised:"#ffb020",empty:"#7d8890"},gr=null;function Ny(){if(gr)return gr;let i=document.createElement("canvas");i.width=64,i.height=4;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,64,0);return t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.55,"rgba(255,255,255,.25)"),t.addColorStop(.85,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,4),gr=new qn(i),gr.wrapS=Fn,gr.colorSpace=yt,gr}function Fy(i,e=.45){let t=new Yi,n=i[0].clone();for(let s=1;s<i.length;s++){let r=i[s];if(s===i.length-1){n.distanceTo(r)>1e-4&&t.add(new mi(n,r.clone()));break}let o=i[s+1],a=Math.min(e,n.distanceTo(r)/2,r.distanceTo(o)/2),c=r.clone().addScaledVector(n.clone().sub(r).normalize(),a),l=r.clone().addScaledVector(o.clone().sub(r).normalize(),a);n.distanceTo(c)>1e-4&&t.add(new mi(n,c)),t.add(new lr(c,r.clone(),l)),n=l}return t}function Oy(i,e){let t=Math.max(8,Math.ceil(e*24)),n=new Float32Array((t+1)*3),s=new Float32Array((t+1)*3),r=new Float32Array((t+1)*3),o=new Float32Array((t+1)*3);for(let a=0;a<=t;a++){let c=a/t,l=i.getPointAt(c),h=i.getTangentAt(c).normalize(),u=new A().crossVectors(h,Math.abs(h.y)>.9?Uy:go).normalize(),d=new A().crossVectors(h,u).normalize();l.toArray(n,a*3),h.toArray(s,a*3),u.toArray(r,a*3),d.toArray(o,a*3)}return{n:t,pos:n,tan:s,nor:r,bin:o}}function nc(i,e){let t=Math.min(.999999,Math.max(0,e))*i.n,n=Math.floor(t),s=t-n,r=n*3,o=r+3;xr.set(i.pos[r]+(i.pos[o]-i.pos[r])*s,i.pos[r+1]+(i.pos[o+1]-i.pos[r+1])*s,i.pos[r+2]+(i.pos[o+2]-i.pos[r+2])*s);let a=(s<.5?n:n+1)*3;_r.set(i.tan[a],i.tan[a+1],i.tan[a+2]),qf.set(i.nor[a],i.nor[a+1],i.nor[a+2]),Yf.set(i.bin[a],i.bin[a+1],i.bin[a+2])}var ic=class{constructor(e,{radius:t=.19,particleRadius:n=.042,shellOpacity:s=.16}={}){this.parent=e,this.radius=t,this.particleRadius=n,this.pipes=[],this.time=0,this.group=new ht,e.add(this.group),this.geometries=[],this.materials=[],this.shellMaterial=this.own(new mt({color:"#c4f4ea",metalness:0,roughness:.05,clearcoat:1,clearcoatRoughness:.06,transparent:!0,opacity:s,depthWrite:!1,side:Mt})),this.boreMaterial=this.own(new mt({color:"#c4f4ea",metalness:0,roughness:.1,transparent:!0,opacity:s*.55,depthWrite:!1,side:Kt})),this.gain=1,this.collarMaterial=this.own(new At({color:"#b7c8c2",metalness:.82,roughness:.24})),this.collarGeometry=this.ownGeo(new Ft(t*1.24,t*1.24,.11,20)),this.nozzleGeometry=this.ownGeo(new Ft(t*1.7,t*1.15,.3,20,1,!0))}own(e){return this.materials.push(e),e}ownGeo(e){return this.geometries.push(e),e}addPipe(e,{color:t="#a1ffcd",collars:n=!0,outlet:s=!1,inset:r=.75,radius:o=this.radius,innerRadius:a=null,bend:c=.45,curve:l=null,segmentsPerUnit:h=10,shell:u=!0,rim:d=0,dash:f=0}={}){let m=l||Fy(e,c),x=m.getLength();if(x<.001)return null;let g=Math.max(24,Math.ceil(x*h)),p=u?new Be(this.ownGeo(new rn(m,g,o,20,!1)),this.shellMaterial):null;if(p&&(p.renderOrder=3,this.group.add(p)),a&&u){let P=new Be(this.ownGeo(new rn(m,g,a,20,!1)),this.boreMaterial);P.renderOrder=2,this.group.add(P)}let y=null;d&&u&&(y=new Be(this.ownGeo(new rn(m,g,o+d,20,!1)),this.own(new It({color:"#5b6870",side:Kt,transparent:!0,opacity:.75,depthWrite:!1,toneMapped:!1}))),y.renderOrder=1,y.userData.rim=!0,this.group.add(y));let v=this.own(new It({color:t,transparent:!0,opacity:0,depthWrite:!1,blending:Ks,toneMapped:!1}));f&&(v.map=Ny().clone(),v.map.needsUpdate=!0,v.map.repeat.set(Math.max(1,Math.round(x/f)),1));let _=new Be(this.ownGeo(new rn(m,g,(a||o)*(f?.6:.45),8,!1)),v);_.renderOrder=2,_.visible=!1,this.group.add(_);let C=Oy(m,x),T=a||o,E={curve:m,length:x,samples:C,color:new Ee(t),flow:0,speed:1,intensity:0,phase:Math.random(),core:_,shell:p,rim:y,state:null,dashMap:v.map,radius:o,maxRadial:Math.max(0,T*.78-this.particleRadius*T/this.radius),particleScale:T/this.radius};if(n&&u){let P=[];x>r*2+.3&&P.push(r/x,1-r/x);let M=0;for(let S of m.curves){let L=S.getLength();S.isQuadraticBezierCurve3&&P.push(M/x,(M+L)/x),M+=L}for(let S of P){nc(C,S);let L=new Be(this.collarGeometry,this.collarMaterial);L.position.copy(xr),L.quaternion.setFromUnitVectors(go,_r),L.castShadow=!0,this.group.add(L)}}if(s){nc(C,1);let P=new Be(this.nozzleGeometry,this.collarMaterial);P.material=this.own(new At({color:"#b7c8c2",metalness:.82,roughness:.24,side:Mt})),P.position.copy(xr).addScaledVector(_r,-.1),P.quaternion.setFromUnitVectors(go,_r),this.group.add(P)}return E.count=Math.min(90,Math.max(14,Math.round(x/o*.9))),E.seeds=Array.from({length:E.count},(P,M)=>({angle:M*2.39996,radial:Math.sqrt(M*7%11/11),jitter:M*13%17/17,wobble:.6+M*5%7/7})),this.pipes.push(E),E}finalize(){let e=this.pipes.reduce((r,o)=>r+o.count,0),t=0;for(let r of this.pipes)r.offset=t,t+=r.count;let n=this.own(new It({color:"#ffffff",toneMapped:!1}));this.particles=new Xn(this.ownGeo(new Sn(1,8,6)),n,Math.max(1,e)),this.particles.instanceMatrix.setUsage(Ih),this.particles.frustumCulled=!1,this.particles.renderOrder=1;for(let r=0;r<Math.max(1,e);r++)this.particles.setMatrixAt(r,tc),this.particles.setColorAt(r,mr.set("#ffffff"));this.group.add(this.particles);let s=this.own(new It({color:"#ffffff",toneMapped:!1,transparent:!0,opacity:.85,depthWrite:!1}));this.arrows=new Xn(this.ownGeo(new Ua(this.radius*.5,this.radius*1.3,12)),s,Math.max(1,this.pipes.length*2)),this.arrows.instanceMatrix.setUsage(Ih),this.arrows.frustumCulled=!1,this.arrows.renderOrder=2;for(let r=0;r<Math.max(1,this.pipes.length*2);r++)this.arrows.setMatrixAt(r,tc),this.arrows.setColorAt(r,mr.set("#ffffff"));this.group.add(this.arrows)}update(e){this.particles||this.finalize(),this.time+=e,this.pipes.forEach((t,n)=>{let s=Math.abs(t.flow)>1e-5,r=Math.sign(t.flow)||1,o=Math.max(0,Math.min(1,t.intensity));s&&(t.phase=((t.phase+r*e*t.speed/t.length)%1+1)%1);let a=!s&&t.state==="pressurised",c=t.dashMap;if(t.core.visible=s||a&&!!c,c){let f=a?null:c;t.core.material.map!==f&&(t.core.material.map=f,t.core.material.needsUpdate=!0),s&&(c.offset.x=-t.phase*c.repeat.x),t.core.material.color.copy(a?mr.set(Xf.pressurised):t.color),t.core.material.opacity=s?(.35+o*.5)*this.gain:a?.22:0}else t.core.material.opacity=s?(.05+o*.16)*this.gain:0;if(t.rim){let f=t.state?Xf[t.state]||t.color:null;f?t.rim.material.color.set(f):t.rim.material.color.set(this.rimColor||"#5b6870")}let l=s?Math.max(1,Math.ceil(t.count*o)):0;mr.copy(t.color).multiplyScalar((.55+.45*o)*this.gain);let h=this.particleRadius*t.particleScale,u=t.maxRadial,d=h*(1.6+Math.min(3.2,t.speed/t.radius*.01));for(let f=0;f<t.count;f++){let m=t.offset+f;if(f>=l){this.particles.setMatrixAt(m,tc);continue}let x=t.seeds[f];nc(t.samples,((t.phase+(f+x.jitter*.6)/t.count)%1+1)%1);let g=x.angle+Math.sin(this.time*x.wobble*2.2+f)*.45*o,p=x.radial*u;xr.addScaledVector(qf,Math.cos(g)*p).addScaledVector(Yf,Math.sin(g)*p),ec.setFromUnitVectors(go,_r.multiplyScalar(r)),Bh.set(h,d,h),this.particles.setMatrixAt(m,Wf.compose(xr,ec,Bh)),this.particles.setColorAt(m,mr)}for(let f=0;f<2;f++){let m=n*2+f;if(!s||o<.05||t.length<t.radius*12){this.arrows.setMatrixAt(m,tc);continue}nc(t.samples,((t.phase*.5+f/2+.25)%1+1)%1),ec.setFromUnitVectors(go,_r.multiplyScalar(r));let x=t.particleScale;this.arrows.setMatrixAt(m,Wf.compose(xr,ec,Bh.set(x,x,x))),this.arrows.setColorAt(m,mr)}}),this.particles.instanceMatrix.needsUpdate=!0,this.particles.instanceColor.needsUpdate=!0,this.arrows.instanceMatrix.needsUpdate=!0,this.arrows.instanceColor.needsUpdate=!0}setAppearance({tint:e,opacity:t,air:n,gain:s=1,rim:r}){if(r&&(this.rimColor=r),e&&(this.shellMaterial.color.set(e),this.boreMaterial.color.set(e)),t!==void 0&&(this.shellMaterial.opacity=t,this.boreMaterial.opacity=t*.55),n)for(let o of this.pipes)o.color.set(n),o.core.material.color.set(n);this.gain=s}dispose(){this.parent.remove(this.group),this.geometries.forEach(e=>e.dispose()),this.materials.forEach(e=>e.dispose()),this.pipes.forEach(e=>e.dashMap?.dispose()),this.particles?.dispose(),this.arrows?.dispose()}};function zh(i,e){if(e===bf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===po||e===Xa){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===po)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var sc=class extends yi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new qh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new ou(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=$i.extractUrlBase(e);o=$i.resolveURL(l,this.path)}else o=$i.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new lo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===jf){try{o[tt.KHR_BINARY_GLTF]=new au(e)}catch(u){s&&s(u);return}r=JSON.parse(o[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new pu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:o[u]=new Wh;break;case tt.KHR_DRACO_MESH_COMPRESSION:o[u]=new cu(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:o[u]=new lu;break;case tt.KHR_MESH_QUANTIZATION:o[u]=new hu;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function By(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Gh=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ee(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],en);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Mi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ha(h),l.distance=u;break;case"spot":l=new Va(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,bi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Wh=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return It}extendParams(e,t,n){let s=[];e.color=new Ee(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],en),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,yt))}return Promise.all(s)}},Xh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},qh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(a,a)}return Promise.all(r)}},Yh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Zh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Kh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],en)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,yt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Jh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},$h=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(a[0],a[1],a[2],en),Promise.all(r)}},jh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Qh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(a[0],a[1],a[2],en),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,yt)),Promise.all(r)}},eu=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},tu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},nu=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},iu=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},su=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ru=class{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},ou=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==An.TRIANGLES&&l.mode!==An.TRIANGLE_STRIP&&l.mode!==An.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let m of u){let x=new ze,g=new A,p=new Yt,y=new A(1,1,1),v=new Xn(m.geometry,m.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&y.fromBufferAttribute(c.SCALE,_),v.setMatrixAt(_,x.compose(g,p,y));for(let _ in c)if(_==="_COLOR_0"){let C=c[_];v.instanceColor=new ms(C.array,C.itemSize,C.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,c[_]);Tt.prototype.copy.call(v,m),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},jf="glTF",xo=12,Zf={JSON:1313821514,BIN:5130562},au=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,xo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==jf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-xo,r=new DataView(e,xo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Zf.JSON){let l=new Uint8Array(e,xo+o,a);this.content=n.decode(l)}else if(c===Zf.BIN){let l=xo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},cu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=du[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=du[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=vr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let m in f.attributes){let x=f.attributes[m],g=c[m];g!==void 0&&(x.normalized=g)}u(f)},a,l,en,d)})})}},lu=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},hu=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},rc=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,m=e*l,x=m-l,g=-2*f+3*d,p=f-d,y=1-g,v=p-d+u;for(let _=0;_!==a;_++){let C=o[x+_+a],T=o[x+_+c]*h,E=o[m+_+a],P=o[m+_]*h;r[_]=y*C+v*T+g*E+p*P}return r}},zy=new Yt,uu=class extends rc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return zy.fromArray(r).normalize().toArray(r),r}},An={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},vr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Kf={9728:Qt,9729:cn,9984:bh,9985:Wr,9986:Vs,9987:Gn},Jf={33071:ci,33648:Jr,10497:Fn},kh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},du={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ky={CUBICSPLINE:void 0,LINEAR:nr,STEP:tr},Vh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Vy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new At({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pn})),i.DefaultMaterial}function _s(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function bi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Hy(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Gy(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Wy(i){let e,t=i.extensions&&i.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Hh(t.attributes):e=i.indices+":"+Hh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Hh(i.targets[n]);return e}function Hh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function fu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Xy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var qy=new ze,pu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new By,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new ka(this.options.manager):this.textureLoader=new Ga(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new lo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return _s(r,a,s),bi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load($i.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=kh[s.type],a=vr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new dt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=kh[s.type],l=vr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,x,g;if(f&&f!==u){let p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,v=t.cache.get(y);v||(x=new l(a,p*f,s.count*f/h),v=new eo(x,f/h),t.cache.add(y,v)),g=new to(v,c,d%f/h,m)}else a===null?x=new l(s.count*c):x=new l(a,d,s.count*c),g=new dt(x,c,m);if(s.sparse!==void 0){let p=kh.SCALAR,y=vr[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,C=new y(o[1],v,s.sparse.count*p),T=new l(o[2],_,s.sparse.count*c);a!==null&&(g=new dt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let E=0,P=C.length;E<P;E++){let M=C[E];if(g.setX(M,T[E*c]),c>=2&&g.setY(M,T[E*c+1]),c>=3&&g.setZ(M,T[E*c+2]),c>=4&&g.setW(M,T[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Kf[d.magFilter]||cn,h.minFilter=Kf[d.minFilter]||Gn,h.wrapS=Jf[d.wrapS]||Fn,h.wrapT=Jf[d.wrapT]||Fn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Qt&&h.minFilter!==cn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(x){let g=new qt(x);g.needsUpdate=!0,d(g)}),t.load($i.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),bi(u,o),u.userData.mimeType=o.mimeType||Xy(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new io,ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Xi,ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return At}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[tt.KHR_MATERIALS_UNLIT]){let u=s[tt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ee(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],en),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,yt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Mt);let h=r.alphaMode||Vh.OPAQUE;if(h===Vh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Vh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==It&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==It&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==It){let u=r.emissiveFactor;a.emissive=new Ee().setRGB(u[0],u[1],u[2],en)}return r.emissiveTexture!==void 0&&o!==It&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,yt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),bi(u,r),t.associations.set(u,{materials:e}),r.extensions&&_s(s,u,r),u})}createUniqueName(e){let t=wt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return $f(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=Wy(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=$f(new bt,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Vy(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let x=h[f],g=o[f],p,y=l[f];if(g.mode===An.TRIANGLES||g.mode===An.TRIANGLE_STRIP||g.mode===An.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Ma(x,y):new Be(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===An.TRIANGLE_STRIP?p.geometry=zh(p.geometry,Xa):g.mode===An.TRIANGLE_FAN&&(p.geometry=zh(p.geometry,po));else if(g.mode===An.LINES)p=new cr(x,y);else if(g.mode===An.LINE_STRIP)p=new fi(x,y);else if(g.mode===An.LINE_LOOP)p=new Aa(x,y);else if(g.mode===An.POINTS)p=new pi(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&Gy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),bi(p,r),g.extensions&&_s(s,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&_s(s,u[0],r),u[0];let d=new ht;r.extensions&&_s(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vt(Tf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Wi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),bi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new ze;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Sa(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],m=s.samplers[f.sampler],x=f.target,g=x.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,y=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(m),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],x=u[3],g=u[4],p=[];for(let y=0,v=d.length;y<v;y++){let _=d[y],C=f[y],T=m[y],E=x[y],P=g[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let M=n._createAnimationTracks(_,C,T,E,P);if(M)for(let S=0;S<M.length;S++)p.push(M[S])}return new za(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,qy)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new no:l.length>1?h=new ht:l.length===1?h=l[0]:h=new Tt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),bi(h,r),r.extensions&&_s(n,h,r),r.matrix!==void 0){let u=new ze;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ht;n.name&&(r.name=s.createUniqueName(n.name)),bi(r,n),n.extensions&&_s(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof ln||d instanceof qt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];Qi[r.path]===Qi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Qi[r.path]){case Qi.weights:l=xi;break;case Qi.rotation:l=_i;break;case Qi.position:case Qi.scale:l=vi;break;default:switch(n.itemSize){case 1:l=xi;break;case 2:case 3:default:l=vi;break}break}let h=s.interpolation!==void 0?ky[s.interpolation]:nr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let m=new l(c[d]+"."+Qi[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=fu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof _i?uu:rc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Yy(i,e,t){let n=e.attributes,s=new $e;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new A(c[0],c[1],c[2]),new A(l[0],l[1],l[2])),a.normalized){let h=fu(vr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new A,c=new A;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let x=fu(vr[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new mn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function $f(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=du[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return st.workingColorSpace!==en&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),bi(i,e),Yy(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Hy(i,e.targets,t):i})}var Jn=document.querySelector("#viewport"),Mc=document.querySelector("#labels"),Ti=document.querySelector("#circuit"),ut=new ps;ut.background=null;var ot=new Wi(-950,950,800,-800,1,1e4);ot.position.set(0,3e3,0);ot.up.set(0,0,-1);ot.lookAt(0,0,0);var Bt,ts=!0;try{if(new URLSearchParams(location.search).get("static")==="1")throw new Error("Static display requested");Bt=new ar({antialias:!0,preserveDrawingBuffer:!0})}catch{ts=!1;let i=document.createElement("img");i.src="assets/assembled-top-view.jpg",i.alt="Assembled 3D battery agitation circuit, fixed top view",i.className="static-render",Bt={domElement:i,shadowMap:{},setPixelRatio(){},setSize(){},render(){}},document.body.classList.add("static-mode"),document.querySelector("#flow-status").textContent="STATIC 3D VIEW",document.querySelector("#air").disabled=!0,document.querySelector("#labels-toggle").disabled=!0}Bt.setPixelRatio(xu());Bt.outputColorSpace=yt;Bt.shadowMap.enabled=!0;Bt.shadowMap.type=uo;Jn.append(Bt.domElement);ut.add(new fr(16777215,10139555,2.5));var Tr=new Mi(16777215,3);Tr.position.set(-500,1600,-700);Tr.castShadow=!0;Tr.shadow.mapSize.set(2048,2048);Object.assign(Tr.shadow.camera,{left:-1100,right:1100,top:900,bottom:-900,near:1,far:4e3});Tr.shadow.bias=-2e-4;ut.add(Tr);var Si=(i,e=.1,t=.4)=>new At({color:i,metalness:e,roughness:t}),Pt={ivory:Si("#f2eed8"),white:Si("#f8fbf5"),edge:Si("#849d94",.65),ink:Si("#335e50"),black:Si("#293e37"),metal:Si("#b7c7bf",.8,.27),yellow:Si("#dcbc55"),blue:Si("#3f9ed4"),green:Si("#4f9c77")},yo=(i,e,t=24)=>new A(i-900,t,e-750);function Ar(i,e,t,n=0,s=0,r=0){let o=new Be(e,t);return o.position.set(n,s,r),o.castShadow=!0,o.receiveShadow=!0,i.add(o),o}function Mr(i,e,t,n,s,r=0,o=0,a=0){let c=new ro,l=Math.min(6,e/10,t/10);c.moveTo(-e/2+l,-t/2),c.lineTo(e/2-l,-t/2),c.quadraticCurveTo(e/2,-t/2,e/2,-t/2+l),c.lineTo(e/2,t/2-l),c.quadraticCurveTo(e/2,t/2,e/2-l,t/2),c.lineTo(-e/2+l,t/2),c.quadraticCurveTo(-e/2,t/2,-e/2,t/2-l),c.lineTo(-e/2,-t/2+l),c.quadraticCurveTo(-e/2,-t/2,-e/2+l,-t/2);let h=new Fa(c,{depth:n,bevelEnabled:!0,bevelThickness:2,bevelSize:2,bevelSegments:3,steps:1});return h.rotateX(-Math.PI/2),Ar(i,h,s,r,o,a)}function Rn(i,e,t,n,s=0,r=0,o=0,a=48){return Ar(i,new Ft(e,e,t,a),n,s,r,o)}function Ai(i,e,t=Pt.ink,n=2.7){for(let s=1;s<e.length;s++){let r=new A(...e[s-1]),o=new A(...e[s]),a=Ar(i,new Ft(n,n,r.distanceTo(o),10),t);a.position.copy(r).add(o).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new A(0,1,0),o.sub(r).normalize())}}var Tu=Ar(ut,new gn(2100,1700),new ur({opacity:.11}),0,-14,0);Tu.rotation.x=-Math.PI/2;Tu.receiveShadow=!0;var Er=new ic(ut,{radius:13,particleRadius:3,shellOpacity:.23});Er.shellMaterial.color.set("#97c7bd");Er.boreMaterial.color.set("#b7dbd2");var Au=[];function On(i,e="common",t="main",n=13){let s=Er.addPipe(i.map(r=>yo(r[0],r[1],r[2]??23)),{radius:n,innerRadius:n*.78,bend:22,collars:!1,segmentsPerUnit:.3,color:"#258ed0",rim:1.2,dash:60});return s&&(s.branch=e,s.kind=t,s.speed=90,s.intensity=.9,s.flow=1,Au.push(s)),s}{let i=document.createElement("style");i.textContent="#circuit{background:radial-gradient(ellipse 75% 70% at 50% 42%,#ffffff 0%,#eef6fb 38%,#d3e6f2 75%,#bcd6e8 100%)}#circuit .drawing-label{color:#1f3a33}#circuit .drawing-label small{color:#4d6168}#circuit .drawing-label.muted{color:#6b7a80}#circuit .canvas-info{display:none}body.inspector-hidden aside{display:none!important}body.inspector-hidden main{grid-template-columns:minmax(0,1fr)!important}aside#inspector{display:none!important}main{grid-template-columns:minmax(0,1fr)!important}html body #controls-toggle{display:none!important}header{position:relative}.header-title{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);margin:0;font-size:clamp(17px,2.2vw,60px);font-weight:700;letter-spacing:.3px;color:#1f3a33;white-space:nowrap;pointer-events:none}@media(max-width:520px){.header-title{left:16px;transform:translateY(-50%);font-size:16px}}.part-button,.part-button:hover,.part-button.selected,.part-button:focus{box-shadow:none!important;background:transparent!important;outline:none!important}#view-top,#view-front,#fullscreen{display:none!important}body.front-only .top-actions>:not(#start){display:none!important}body.front-only aside{display:none!important}body.front-only main{grid-template-columns:minmax(0,1fr)!important}",document.head.append(i)}var nt={port:{open:!1,auto:!1,hand:!1,filter:!1,value:0,wheel:0},stbd:{open:!1,auto:!1,hand:!1,filter:!1,value:0,wheel:0}},Zy=i=>Object.assign(nt[i],{auto:!1,hand:!1,filter:!1}),Ei=i=>rt&&nt[i].open,Qf={};function Ky(i,e){let t=i+e,n=performance.now();if(n-(Qf[t]||0)<500)return;Qf[t]=n;let s=nt[i];bp(e==="shutoff"?s.open?"close":"open":e==="auto"?s.auto?"autooff":"autoon":e==="filter"?s.filter?"filteroff":"filteron":s.hand?"handoff":"handon")}var ep=0;function vs(i,e=!1,t=""){let n=i==="port"?"PORT":"STBD",s=t?"\u26A0 "+n+" "+t+" is locked ON while the shut-off valve is open \u2014 close the "+n+" shut-off valve first.":e?"\u26A0 Circuit is OFF \u2014 press Start to turn the circuit ON before opening the "+n+" shut-off valve.":"\u26A0 Circuit is OFF \u2014 "+(rt?"open the "+n+" shut-off valve first.":"press Start and open the "+n+" shut-off valve first."),r=document.querySelector("#circuit-warning");r||(r=document.createElement("div"),r.id="circuit-warning",r.setAttribute("role","alert"),r.style.cssText="position:absolute;left:50%;top:18px;transform:translateX(-50%);z-index:20;padding:10px 18px;border-radius:10px;border:1.5px solid #e74c3c;background:#1d2224ee;color:#ff5a4d;font:700 15px/1.3 system-ui;box-shadow:0 6px 24px #0008;pointer-events:none;transition:opacity .3s;max-width:90%;text-align:center",document.querySelector("#circuit").append(r)),r.textContent=s,r.style.opacity="1",clearTimeout(ep),ep=setTimeout(()=>{r.style.opacity="0"},4e3)}var Eu=45,wo=i=>nt[i].open,br=i=>nt[i].auto?dp:Eu,bc=i=>nt[i].auto,dp=.45,hc=.6,_o={},Ri=i=>{let e=nt[i];return rt&&wo(i)?bc(i)?e.value:br(i):0},fp=matchMedia("(pointer: coarse)").matches;function xu(){return Math.min(fp?2:4,(devicePixelRatio||1)*(window.visualViewport?.scale||1))}window.visualViewport?.addEventListener("resize",()=>{typeof ns=="function"&&ns()});function Ru(i,e,t=null){let n=e/256;i.clearRect(0,0,e,e),i.save(),i.scale(n,n),i.strokeStyle="#1f3a33",i.fillStyle="#1f3a33",i.lineWidth=2.4,i.textAlign="center",i.font="bold 19px Arial";for(let s=0;s<=12;s++){let r=(135+s*22.5)*Math.PI/180,o=s%2?88:82;i.beginPath(),i.moveTo(128+96*Math.cos(r),128+96*Math.sin(r)),i.lineTo(128+o*Math.cos(r),128+o*Math.sin(r)),i.stroke(),s%2===0&&i.fillText((s*.05).toFixed(1),128+66*Math.cos(r),134+66*Math.sin(r))}if(i.font="bold 13px Arial",i.fillText("kg/cm\xB2",128,190),t!==null){let s=t>hc;i.fillStyle="#f4f7f6",i.strokeStyle=s?"#c0392b":"#1f3a33",i.lineWidth=1.6,i.beginPath(),i.roundRect(98,148,60,24,5),i.fill(),i.stroke(),i.fillStyle=s?"#c0392b":"#14302a",i.font="bold 16px Arial",i.fillText(s?t.toFixed(1):t.toFixed(3),128,169)}i.restore()}var pp={},Rr="top",Zn=null,zn=0,xn=null,oc=8,tp={sea:[[.995,1,1],[.76,.86,.93],[.11,.37,.56],1],navy:[[.16,.24,.33],[.04,.08,.13],[.55,.75,.95],1.6],steel:[[.86,.88,.89],[.58,.62,.65],[.2,.24,.27],1.3],blueprint:[[.13,.33,.58],[.05,.17,.35],[.85,.93,1],2.2],sand:[[1,.99,.96],[.89,.86,.8],[.45,.38,.28],.9]};function Jy(){let i={uTime:{value:0},uCenter:{value:new re},uHalf:{value:new re(1,1)},uFlow:{value:0},uOk:{value:0},uVent:{value:0},uMouse:{value:new A(0,0,0)},uC0:{value:new A},uC1:{value:new A},uG:{value:new A},uGa:{value:1},uRip:{value:Array.from({length:oc},()=>new ct(0,0,-99,0))}},e=new Zt({uniforms:i,depthWrite:!1,depthTest:!1,vertexShader:"varying vec2 vP;void main(){vec4 w=modelMatrix*vec4(position,1.);vP=w.xz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`varying vec2 vP;uniform vec3 uC0,uC1,uG;uniform float uGa;uniform float uTime,uFlow,uOk,uVent;uniform vec2 uCenter,uHalf;uniform vec3 uMouse;uniform vec4 uRip[${oc}];
float gridLine(vec2 p,float s){vec2 g=abs(fract(p/s-.5)-.5)/fwidth(p/s);return 1.-min(min(g.x,g.y),1.);}
void main(){vec2 q=(vP-uCenter)/uHalf;float t=uTime;
 float r=length(q*vec2(.85,1.));
 vec3 col=mix(uC0,uC1,smoothstep(.05,1.35,r));
 // two slow drifting light pools
 vec2 a=vec2(.55*sin(t*.071),.35*cos(t*.053)),b=vec2(-.6*cos(t*.047),.4*sin(t*.061+1.3));
 col+=vec3(.05,.07,.08)*exp(-dot(q-a,q-a)*2.2)+vec3(.02,.05,.08)*exp(-dot(q-b,q-b)*2.6);
 // circuit state washes
 float wave=.55+.45*sin(t*.9-r*5.);
 col=mix(col,vec3(.70,.85,.98),.30*uFlow*wave);
 col=mix(col,vec3(.80,.96,.86),.22*uOk*(.6+.4*sin(t*2.)));
 col=mix(col,vec3(1.,.80,.78),.38*uVent*(.55+.45*sin(t*3.6)));
 // grid, brighter near the pointer and the ripples
 float lit=0.;
 float md=length(vP-uMouse.xy);lit+=uMouse.z*exp(-md*md/(260.*260.));
 col+=vec3(.06,.10,.13)*uMouse.z*exp(-md*md/(420.*420.));
 for(int i=0;i<${oc};i++){vec4 R=uRip[i];float age=t-R.z;if(age<0.||age>2.4)continue;float d=length(vP-R.xy),rad=age*520.,f=1.-age/2.4;
  float ring=exp(-pow((d-rad)/34.,2.))*f*f;col=mix(col,vec3(.38,.72,.97),ring*.45*R.w);lit+=ring*1.6+exp(-d*d/(rad*rad+1.))*f*.4;}
 float g=gridLine(vP,24.)*.035+gridLine(vP,120.)*.075;
 col=mix(col,uG,g*uGa*(1.+2.5*lit));
 col*=1.-.10*smoothstep(.7,1.5,r);
 gl_FragColor=vec4(col,1.);}`}),t=new Be(new gn(1,1),e);t.rotation.x=-Math.PI/2,t.renderOrder=-10,t.frustumCulled=!1,t.userData.noFit=!0,t.position.y=-400,ut.add(t);let n=tp[new URLSearchParams(location.search).get("bg")]||tp.sea;i.uC0.value.set(...n[0]),i.uC1.value.set(...n[1]),i.uG.value.set(...n[2]),i.uGa.value=n[3],xn={mesh:t,u:i,next:0};let s=r=>{let o=Jn.getBoundingClientRect();return new A((r.clientX-o.left)/o.width*2-1,-((r.clientY-o.top)/o.height*2-1),0).unproject(ot)};Ti.addEventListener("pointerdown",r=>{let o=s(r);i.uRip.value[xn.next].set(o.x,o.z,i.uTime.value,1),xn.next=(xn.next+1)%oc},{capture:!0,passive:!0}),Ti.addEventListener("pointermove",r=>{let o=s(r);i.uMouse.value.x=o.x,i.uMouse.value.y=o.z,xn.hover=r.pointerType==="mouse"?1:0},{passive:!0}),Ti.addEventListener("pointerleave",()=>{xn.hover=0},{passive:!0})}function $y(){if(!ts)return;xn||Jy();let i=xn.mesh,e=ot.right-ot.left,t=ot.top-ot.bottom;i.scale.set(e*1.02,t*1.02,1),i.position.x=ot.position.x,i.position.z=ot.position.z,xn.u.uCenter.value.set(ot.position.x,ot.position.z),xn.u.uHalf.value.set(e/2,t/2)}function jy(i){if(!xn)return;let e=xn.u,t=Math.min(1,i*2.5),n=(s,r)=>s.value+=(r-s.value)*t;e.uTime.value+=i,n(e.uFlow,rt?1:0),n(e.uOk,["port","stbd"].some(s=>Ei(s)&&bo(s))?1:0),n(e.uVent,Mo()||["port","stbd"].some(Cr)?1:0),e.uMouse.value.z+=((xn.hover||0)-e.uMouse.value.z)*t}var rt=!1,Ci=null,ys=!1;document.querySelector("#circuit").classList.add("hide-labels");var Ss=new Map,To=[],Cn=[],mp={},Cu={},dc={},Ao={};function Bn(i,e,t,n="left",s="",r=""){let o=document.createElement("div");o.className="drawing-label "+n+" "+r;let a=document.createElement("span");if(a.textContent=i,o.append(a),s){let c=document.createElement("small");c.textContent=s,o.append(c)}return Mc.append(o),To.push({el:o,x:e,z:t}),o}function es(i,e,t,n,s,r,o=108){let a=new ht;a.position.copy(yo(n,s)),ut.add(a);let c={id:i,type:e,side:t,x:n,z:s,title:r,group:a,size:o};Ss.set(i,c),Ao[i]=a;let l=document.createElement("button");return l.className="part-button",l.dataset.part=i,l.setAttribute("aria-label",r),l.setAttribute("aria-pressed","false"),l.addEventListener("click",h=>{Eo(i),["shutoff","auto","filter"].includes(e)&&Ky(t,e),e==="hand"&&h.detail===0&&Op(t)}),e==="hand"&&OM(l,t),e==="safety"&&l.addEventListener("click",()=>{Ei(t)||vs(t)}),["shutoff","auto","hand","filter","pg","safety"].includes(e)&&(l.style.minWidth=l.style.minHeight="44px"),Mc.append(l),Cn.push({el:l,x:n,z:s,size:o}),a}function np(i,e){Mr(i,112,112,25,Pt.edge,0,-3),Mr(i,101,101,27,Pt.white,0,0),e==="V"?Ai(i,[[-45,32,-44],[0,32,44],[45,32,-44]]):(Ai(i,[[-44,32,-44],[44,32,44]]),Ai(i,[[44,32,-44],[-44,32,44]]))}function Qy(i,e){Rn(i,56,19,Pt.metal,0,6),Rn(i,49,3,Pt.white,0,17);let t=document.createElement("canvas");t.width=256,t.height=256;let n=t.getContext("2d");n.clearRect(0,0,256,256),n.strokeStyle="#477262",n.fillStyle="#477262",Ru(n,256);let s=new qn(t);s.colorSpace=yt;let r=Ar(i,new gn(98,98),new It({map:s,transparent:!0,depthWrite:!1}),0,20);r.rotation.x=-Math.PI/2;let o=new ht;o.position.y=24,i.add(o),Ai(o,[[0,0,0],[0,0,-36]],Pt.ink,2.5),Rn(o,5,3,Pt.ink),dc[e]=o}function eM(i,e){let t=new ht;t.position.set(e==="port"?-87:87,23,0),i.add(t);let n=Ar(t,new gi(24,4,10,36),Pt.black);n.rotation.y=Math.PI/2,Ai(t,[[0,-21,0],[0,21,0]],Pt.black,3),Ai(t,[[0,0,-21],[0,0,21]],Pt.black,3);let s=e==="port"?1:-1;Ai(i,[[s*-55,22,0],[s*-87,22,0]],Pt.metal,5),Cu[e]=t}function tM(i){Mr(i,292,152,36,Pt.ivory,0,-16),Mr(i,302,160,8,Pt.ivory,0,22);for(let e of[-1,1])for(let t=0;t<6;t++){let n=(-.4+.16*t)*292,s=e*.26*152;Rn(i,14,4,Pt.metal,n,35,s),Rn(i,t===0||t===5?11.5:9.5,5,Pt.black,n,40,s,t===0||t===5?6:48),Rn(i,5.5,5,Pt.metal,n,45,s,6)}for(let e=1;e<5;e++)Rn(i,7,6,Pt.metal,(-.4+.16*e)*292,36,0,6);Rn(i,8,9,Pt.black,132,39,0),Rn(i,4.5,4,Pt.blue,132,46,0)}On([[960,170],[845,170],[845,300],[350,300]],"port","header");On([[845,300],[1420,300]],"stbd","header");Bn("MP Air 45 kg/cm\xB2",1050,110,"left");Bn("PORT",280,130,"center","","muted");Bn("STBD",1490,130,"center","","muted");for(let[i,e]of[["port",350],["stbd",1420]]){let t=i==="port",n=t?"Port":"STBD",s=t?-1:1,r=t?1:-1,o=t?165:1605,a=t?650:1120,c=es(i+"-shutoff","shutoff",i,e,300,"Shut-off valve \xB7 "+n,92);Rn(c,55,17,Pt.metal,0,4),Rn(c,48,7,Pt.white,0,17);let l=new ht;l.position.y=24,c.add(l),Ai(l,[[-43,0,0],[43,0,0]]),Ai(l,[[0,0,-43],[0,0,43]]),c.userData.shutoffWheel=l,l.rotation.y=Math.PI/4,Bn("Shut-off valve",e,225,"center"),On([[e,353],[e,401]],i),c=es(i+"-auto","auto",i,e,460,"Automatic reducer \xB7 "+n,92),np(c,"V"),Bn("Auto Reducer",e+r*90,455,t?"left":"right","0.45 kg/cm\xB2"),On([[e,517],[e,584]],i),c=es(i+"-hand","hand",i,e,642,"Hand reducer \xB7 "+n,96),np(c,"X"),eM(c,i),Bn("Hand Reducer",e+r*90,638,t?"left":"right","0.13\u20130.16 kg/cm\xB2");{let f=Cn[Cn.length-1];f.x=e+s*55,f.size=210,f.h=96}On([[e,699],[e,758]],i),c=es(i+"-filter","filter",i,e,820,"Filter \xB7 "+n,80);let h=Mr(c,88,88,27,Pt.edge);h.rotation.y=Math.PI/4;let u=Mr(c,80,80,29,Pt.white,0,2);u.rotation.y=Math.PI/4,Bn("Filter",e+r*100,820,t?"left":"right"),On([[e,883],[e,1080]],i),On([[e,950],[o,950],[o,842]],i,"gauge",10),c=es(i+"-pg","pg",i,o,790,"Pressure gauge \xB7 "+n,80),Qy(c,i),_o[i]=Bn("PG",o,705,"center","0.000 kg/cm\xB2").querySelector("small"),On([[e,1080],[e+r*345,1080]],i,"cells"),On([[e,1080],[e,1190]],i,"safety"),c=es(i+"-safety","safety",i,e,1240,"Safety valve \xB7 "+n,115),c.userData.pendingSafety=!0,Rn(c,50,22,Pt.yellow,0,8),Bn("Safety Valve",e+(t?-60:60),1333,"center","0.2 kg/cm\xB2"),c=es(i+"-battery","battery",i,a,1252,"Battery cell \xB7 "+n,310),tM(c),c.rotation.y=t?Math.PI:0,Bn("To the Cells",a,1140,"center");{let f=document.createElement("button");f.className="battery-info",f.textContent="i",f.setAttribute("aria-label","Battery details \xB7 "+n),f.onclick=()=>Mp(i),Mc.append(f),To.push(mp[i]={el:f,x:a+(t?120:-120),z:1310})}let d=a+(t?-132:132);On([[d,1080],[d,1222],[d,1252,68]],i,"battery",8);for(let f=0;f<6;f++){let m=e+r*(65+f*43);On([[m,1080],[m,1100]],i,"stub",5)}}var nM=new bt().setFromPoints([yo(100,1020,1),yo(1710,1020,1)]),Iu=new fi(nM,new Oa({color:"#adc1b1",dashSize:18,gapSize:14}));Iu.computeLineDistances();ut.add(Iu);Bn("BATTERY PIT",888,1050,"center","","muted");es("main-pipe","pipe","common",1120,185,"Transparent air pipe",150);Cn.pop().el.remove();Er.finalize();var iM={pipe:"Transparent pipe walls reveal the internal air passage and moving air particles. The pipe route stays fixed. Shared junctions have continuous hollow bores and the tube ends meet the component ports.",shutoff:"Isolates this branch. The top cross is the shut-off symbol from your drawing.",auto:"Square top with the V symbol only. The component body and symbol stay fixed.",hand:"Square top with an X symbol. Only the outboard side adjustment handle rotates when adjusted.",filter:"A solid, shallow diamond body reproduces the exact filter symbol in plan.",pg:"The dial faces straight up so the reading stays visible in the locked top view.",safety:"Uses the perforated circular part you supplied for the safety-valve position. The yellow cap belongs on the battery lid.",battery:"The lid follows your battery photo: two rows of six terminal positions, red and yellow caps, a clear cap, and the air connection in the existing lid opening."},sM={pipe:"Transparent air pipe",shutoff:"Shut-off valve",auto:"Automatic reducer",hand:"Hand reducer",filter:"Air filter",pg:"Pressure gauge",safety:"Safety valve",battery:"Battery cell"},rM={pipe:"08",shutoff:"01",auto:"02",hand:"03",filter:"04",pg:"05",safety:"06",battery:"07"};function En(){let i=document.querySelector("#detail");if(!Ci){i.innerHTML='<div class="welcome-number">02<span style="font-size:18px"> branches</span></div><span class="selected-badge">FIXED TOP VIEW</span><h2>One supply.<br>Two branches.</h2><p class="desc">Touch any component to see its purpose and controls. The drawing stays in place.</p><div class="feature-list"><div><span>Supply, per drawing</span><b>45 kg/cm\xB2</b></div><div><span>Automatic reducer</span><b>0.45 kg/cm\xB2</b></div><div><span>Hand reducer range</span><b>0.13\u20130.16 kg/cm\xB2</b></div><div><span>Safety setting</span><b>0.2 kg/cm\xB2</b></div></div><div class="eyebrow" style="margin-top:14px">CALCULATED AIRFLOW (LIVE)</div><div class="feature-list" id="airflow-readout"></div><p class="tiny">Air enters at the MP air inlet and moves only inside the pipes. Particle speed follows the calculated velocity (log scale); colour shows pressure: dark blue 45, blue 0.45, cyan-blue 0.13\u20130.16 kg/cm\xB2. Gauge lines and stubs are dead ends: pressurised, no flow. Pipe and orifice sizes are estimates.</p>',Mu=0;return}let e=Ss.get(Ci),t=nt[e.side],n=e.side==="port"?"PORT":e.side==="stbd"?"STBD":"COMMON",s="",r="";if(e.type==="pipe"&&(r="<div><span>Pipe walls</span><b>Transparent</b></div><div><span>Visible air</span><b>Calculated flow, see below</b></div><div><span>Main pipe display size</span><b>50 mm \xB7 estimated</b></div>",s='<div class="feature-list" id="airflow-readout"></div><img class="detail-image" src="assets/transparent-straight-pipe.png" alt="Transparent pipe with visible air"><div class="control-row"><button data-action="toggleair" class="primary">Pause / resume air</button></div>'),e.type==="shutoff"&&(r="<div><span>Demonstration state</span><b"+(rt?">"+(t.open?"Open":"Closed"):' style="color:#e74c3c">OFF \xB7 circuit is off \u2014 press Start first')+"</b></div>",s='<div class="control-row"><button data-action="open" class="'+(t.open?"primary":"")+'">ON \xB7 Open</button><button data-action="close" class="'+(t.open?"":"primary")+'">OFF \xB7 Close</button></div>'),e.type==="auto"&&(r="<div><span>State</span><b"+(Ei(e.side)?">"+(t.auto?"ON \xB7 green, reduces to 0.45 kg/cm\xB2":"OFF \xB7 red, bypassed: 45 kg/cm\xB2 passes"):' style="color:#e74c3c">OFF \xB7 circuit is off')+"</b></div><div><span>Drawing setpoint</span><b>0.45 kg/cm\xB2</b></div><div><span>Top geometry</span><b>Square + V</b></div>",s='<div class="control-row"><button data-action="autoon" class="'+(t.auto?"primary":"")+'">ON</button><button data-action="autooff" class="'+(t.auto?"":"primary")+'">OFF</button></div><p class="tiny">Tap the auto reducer to switch it ON or OFF.</p>'),e.type==="hand"&&(s='<div class="control-row"><button data-action="handon" class="'+(t.hand?"primary":"")+'">ON \xB7 In line</button><button data-action="handoff" class="'+(t.hand?"":"primary")+'">OFF \xB7 Bypassed</button></div><div class="value-readout"><span>Selected setting</span><strong>'+t.value.toFixed(3)+'</strong></div><div class="control-row"><button data-action="decrease" '+(!t.hand||t.value<=.13?"disabled":"")+'>\u2212 Decrease</button><button data-action="increase" '+(!t.hand||t.value>=.16?"disabled":"")+'>+ Increase</button></div><p class="tiny">Tap the hand reducer to switch it ON (green, handle straight) or OFF (red, handle across).</p>',r="<div><span>State</span><b>"+(t.auto?t.hand?"ON \xB7 PG reads 0.13\u20130.16":"OFF \xB7 PG reads 0.45":"Passing 45 kg/cm\xB2 (auto reducer OFF)")+"</b></div><div><span>Drawing range</span><b>0.13\u20130.16 kg/cm\xB2</b></div><div><span>Moving part</span><b>Side handle only</b></div>"),e.type==="pg"&&(r="<div><span>Reading</span><b>"+Ri(e.side).toFixed(3)+" kg/cm\xB2</b></div><div><span>Set by</span><b>"+(t.hand?"Hand reducer ON (0.13\u20130.16)":"Auto reducer, hand OFF (0.45)")+"</b></div><div><span>Dial scale</span><b>0\u20130.6 kg/cm\xB2</b></div><div><span>Dial orientation</span><b>Face up / top view</b></div>",s='<p class="tiny">Reading follows the demonstration controls. It is not a measured pressure or a validated plant calculation.</p>'),e.type==="filter"&&(r="<div><span>State</span><b"+(Ei(e.side)?">"+(t.filter?"ON \xB7 green":"OFF \xB7 red"):' style="color:#e74c3c">OFF \xB7 circuit is off')+"</b></div><div><span>Top geometry</span><b>Diamond symbol</b></div><div><span>Connection</span><b>Hand reducer \u2192 cells</b></div>",s='<div class="control-row"><button data-action="filteron" class="'+(t.filter?"primary":"")+'">ON</button><button data-action="filteroff" class="'+(t.filter?"":"primary")+'">OFF</button></div><p class="tiny">Tap the filter to switch it ON or OFF.</p>'),e.type==="safety"){let o=performance.now()<(fc[e.side]||0),a=Ri(e.side)>bs,c=Cr(e.side);r="<div><span>Drawing setpoint</span><b>0.2 kg/cm\xB2</b></div><div><span>Line pressure</span><b>"+Ri(e.side).toFixed(3)+" kg/cm\xB2</b></div><div><span>Valve state</span><b"+(c?">Open \xB7 venting through the holes":' style="color:#e74c3c">OFF \xB7 circuit is off')+"</b></div><div><span>Relief flow (calculated)</span><b>"+(Ot[e.side]?.mRelief?(Ot[e.side].mRelief*6e4).toFixed(1)+" g/min":"0")+"</b></div><div><span>Outlet</span><b>Bell-shaped perforated head \xB7 air leaves through the holes</b></div>",s='<p class="tiny">Both safety valves vent whenever their branch has air. Higher line pressure (hand reducer OFF, 0.45 kg/cm\xB2) gives a stronger release.</p><img class="detail-image" src="assets/safety-release-detail.jpg" alt="User-supplied perforated circular safety part"><p class="tiny">The yellow battery cap is kept on the battery. This position uses the separate perforated part you supplied; visible air exits through its actual perforations when the release effect is on and this branch is open. Hidden valve internals are not modeled.</p>'}e.type==="battery"&&(r="<div><span>Terminals</span><b>2 rows \xD7 6</b></div><div><span>Air connection</span><b>Separate lid inlet</b></div><div><span>Selected inlet setting</span><b>"+t.value.toFixed(3)+" kg/cm\xB2</b></div><div><span>Bubble calibration</span><b>Awaiting flow / diffuser data</b></div>",s='<div class="control-row"><button data-action="battery3d" class="primary">\u24D8 Open battery 3D view</button></div><img class="detail-image" src="assets/battery-photo-top.jpg" alt="Battery top matching photo 31844"><p class="tiny">The yellow cap stays on the battery lid. One representative battery per branch shows the air connection; actual bank quantity and physical routing remain unverified.</p>'),i.innerHTML='<div class="part-index">'+rM[e.type]+" / "+n+" BRANCH</div><h2>"+sM[e.type]+'</h2><p class="desc">'+iM[e.type]+'</p><div class="feature-list">'+r+"</div>"+s,i.querySelectorAll("[data-action]").forEach(o=>o.onclick=()=>bp(o.dataset.action))}function Eo(i){Ci=i;let e=Ss.get(i)?.side==="stbd",t=document.querySelector("#inspector");t.style.left=e?"12px":"",t.style.right=e?"auto":"",document.querySelector("#component-select").value=i,document.body.classList.remove("inspector-hidden"),document.body.classList.add("inspector-open"),document.querySelector("#controls-toggle").setAttribute("aria-expanded","true"),Cn.forEach(n=>{let s=n.el.dataset.part===i;n.el.classList.toggle("selected",s),n.el.setAttribute("aria-pressed",String(s))}),En()}var fc={port:0,stbd:0},bs=.2,nb=Math.PI/2,oM=2.6*Math.PI,_u={},Pu=Math.PI/4,gp=-4*Math.PI,aM=3*Math.PI,xp=i=>{let e=Ao[i+"-shutoff"]?.userData.shutoffWheel;e&&(e.userData.target=nt[i].open?gp:Pu)},_p={},ip=new Ee("#22b45a"),pc=new Ee("#d23b33"),vu=new Ee("#8e9ca3");function cM(){hn.traverse(i=>{let e=/^(port|stbd)[ _](?:square[ _]symbol[ _]cap[ _](v|x)|diamond[ _]filter[ _]top)/i.exec(i.name);!e||!i.isMesh||(i.material=i.material.clone(),i.material.color.copy(pc),i.material.emissive&&i.material.emissive.copy(pc),(e[2]?e[2].toLowerCase()==="v"?_p:yp:vp)[e[1].toLowerCase()]={mesh:i,col:vu.clone()})})}var vp={},yp={};function lM(i){let e=performance.now()/1e3,t=Math.min(1,i*5),n=(s,r)=>rt?s&&r?ip:pc:vu;for(let[s,r]of[[_p,"auto"],[yp,"hand"],[vp,"filter"]])for(let o in s){let a=s[o],c=r==="hand"?bo(o):nt[o][r],l=r==="hand"?!0:Ei(o);a.col.lerp(r==="hand"?nt[o].value<=0?vu:c?ip:pc:n(c,l),t),a.mesh.material.color.copy(a.col),a.mesh.material.emissive&&(a.mesh.material.emissive.copy(a.col),a.mesh.material.emissiveIntensity=r==="hand"?c?.3+.35*(.5+.5*Math.sin(e*4)):nt[o].value>0?.3:.05:rt?.25+(c&&l?.35*(.5+.5*Math.sin(e*4)):0):.05)}}function hM(i){lM(i);for(let e in _u){let t=_u[e],n=Fp(e)-t.rotation.y,s=oM*i;t.rotation.y+=Math.abs(n)<=s?n:Math.sign(n)*s}for(let e of["port","stbd"]){let t=Ao[e+"-shutoff"]?.userData.shutoffWheel;if(!t||t.userData.target==null)continue;let n=t.userData.target-t.rotation.y,s=aM*i;t.rotation.y+=Math.abs(n)<=s?n:Math.sign(n)*s}}var Mp=i=>Gf({side:i,pressure:Ri(i)||(nt[i].hand?nt[i].value:dp)}),Cr=i=>rt&&wo(i)&&Ri(i)>bs,Mo=()=>zn>bs;function bp(i){if(i==="toggleair"){document.querySelector("#air").click();return}if(!Ci)return;let e=Ss.get(Ci),t=nt[e.side];if(i==="battery3d"){Mp(e.side);return}if(i==="open"&&!rt){vs(e.side,!0),En();return}if((i==="open"||i==="close")&&(t.open=i==="open",t.auto=t.filter=t.open,xp(e.side),Sc()),i==="handon"||i==="handoff"){if(!Ei(e.side)){vs(e.side),En();return}t.hand=i==="handon"}if(i==="autoon"||i==="autooff"){if(!Ei(e.side)){vs(e.side),En();return}if(i==="autooff"&&t.open){vs(e.side,!1,"auto reducer"),En();return}t.auto=i==="autoon"}if(i==="filteron"||i==="filteroff"){if(!Ei(e.side)){vs(e.side),En();return}if(i==="filteroff"&&t.open){vs(e.side,!1,"filter"),En();return}t.filter=i==="filteron"}(i==="increase"||i==="decrease")&&So(e.side,t.value+(i==="increase"?_c:-_c)),i==="release"&&(fc[e.side]=performance.now()<(fc[e.side]||0)?0:1/0),En()}function uM(){for(let i of Au){let t=!nt[i.branch]||wo(i.branch),n=i.kind==="safety",s=rt&&(i.kind==="header"||t)&&(!n||Cr(i.branch));i.flow=s?1:0,i.intensity=s?.85:0,i.state=s?"flowing":"empty"}for(let i of["port","stbd"]){let e=Ri(i),t=e>hc,n=e.toFixed(3)+" kg/cm\xB2"+(t?" \xB7 OVER RANGE":"");{let a=pp[i],c=e.toFixed(3);a&&a.shown!==c&&(a.shown=c,Ru(a.cv.getContext("2d"),2048,e),a.tex.needsUpdate=!0)}_o[i]&&_o[i].textContent!==n&&(_o[i].textContent=n,_o[i].style.color=t?"#c0392b":""),dc[i].rotation.y=-(Math.min(e,hc*1.04)/hc)*Math.PI*1.5+Math.PI*.75-(dc[i].userData.nativeBaseline||0);let s=Cu[i],r=s.userData.nativeAxis||"x",o=(s.userData.restAngle||0)+nt[i].wheel;s.rotation[r]+=(o-s.rotation[r])*.16}}function Sc(){for(let i of["#air","#start"]){let e=document.querySelector(i);e.innerHTML=rt?"<span>\u2161</span> Pause":"<span>\u25B6</span> Start",e.setAttribute("aria-pressed",String(rt)),e.disabled=!ts}document.querySelector("#flow-status").textContent=ts?rt?"PORT "+(nt.port.open?"ON":"OFF")+" \xB7 STBD "+(nt.stbd.open?"ON":"OFF"):"READY \xB7 PRESS START":"STATIC 3D VIEW",document.querySelector(".live-dot").style.background=rt?"#1caf93":"#97a89c"}document.querySelector("#air").onclick=()=>{if(rt=!rt,!rt)for(let i of["port","stbd"])Zy(i),nt[i].open&&(nt[i].open=!1,xp(i));Sc(),rt?Eo("port-shutoff"):Ci&&En()};document.querySelector("#start").onclick=()=>document.querySelector("#air").click();Sc();document.querySelector("#labels-toggle").onclick=()=>{ys=!ys,Ti.classList.toggle("hide-labels",!ys),document.querySelector("#labels-toggle").textContent=ys?"\u2637  Hide drawing labels":"\u2637  Show drawing labels",document.querySelector("#labels-toggle").setAttribute("aria-pressed",String(ys))};document.querySelector("#controls-toggle").onclick=()=>{let i=document.body.classList.remove("inspector-hidden"),e=document.body.classList.toggle("inspector-open");document.querySelector("#controls-toggle").setAttribute("aria-expanded",String(e))};function Lu(){document.body.classList.remove("inspector-open"),document.querySelector("#controls-toggle").setAttribute("aria-expanded","false"),Ci=null,document.querySelector("#component-select").value="",Cn.forEach(i=>{i.el.classList.remove("selected"),i.el.setAttribute("aria-pressed","false")}),En()}document.querySelector("#clear").onclick=()=>{Lu(),document.body.classList.add("inspector-hidden")};document.querySelector("#reset").onclick=()=>{Dp("top");for(let i of["port","stbd"])Object.assign(nt[i],{open:!1,auto:!1,hand:!1,filter:!1,value:0,wheel:0}),Ao[i+"-shutoff"].userData.shutoffWheel.userData.target=Pu,fc[i]=0;rt=!1,vo(0),vc("port"),vc("stbd"),So("port",0),So("stbd",0),Sc(),ys&&document.querySelector("#labels-toggle").click(),Lu()};document.querySelector("#reference").onclick=()=>document.querySelector("#reference-dialog").showModal();document.querySelector("#close-reference").onclick=()=>document.querySelector("#reference-dialog").close();document.querySelector("#fullscreen").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{document.querySelector("#fullscreen").textContent="Use browser full screen"}};document.addEventListener("fullscreenchange",()=>document.querySelector("#fullscreen").textContent=document.fullscreenElement?"\u26F6 Exit full screen":"\u26F6 Full screen");function sp(i,e){let t=yo(i,e,45).project(ot),n=Jn.getBoundingClientRect(),s=Ti.getBoundingClientRect();return{x:n.left-s.left+(t.x+1)*n.width/2,y:n.top-s.top+(1-t.y)*n.height/2}}function ns(){Bt.getPixelRatio&&Bt.getPixelRatio()!==xu()&&Bt.setPixelRatio(xu());let i=Jn.clientWidth,e=Jn.clientHeight,t=i/e,n=Zn?Zn.w:1900,s=Zn?Zn.h:1490,r=Math.max(s,n/t);Zn&&Rr!=="front"&&(ot.position.set(Zn.cx,3e3,Zn.cz),ot.lookAt(Zn.cx,0,Zn.cz)),ot.left=-r*t/2,ot.right=r*t/2,ot.top=r/2,ot.bottom=-r/2,ot.updateProjectionMatrix(),ot.updateMatrixWorld(),Bt.setSize(i,e);for(let o of To){let a=sp(o.x,o.z);o.el.style.left=a.x+"px",o.el.style.top=a.y+"px"}Ti.style.setProperty("--k",String(i/(r*t))),$y();for(let o of Cn){let a=sp(o.x,o.z),c=i/(r*t),l=o.size*c;Object.assign(o.el.style,{left:a.x+"px",top:a.y+"px",width:l+"px",height:(o.h||o.size)*c+"px"})}}"ResizeObserver"in window?new ResizeObserver(ns).observe(Jn):window.addEventListener("resize",ns);Jn.addEventListener("wheel",i=>i.preventDefault(),{passive:!1});Jn.addEventListener("contextmenu",i=>i.preventDefault());var Du=!1,mc=null,yu=[];var Sp=[],Sr=document.createElement("div");Sr.id="assembly-loading";Sr.textContent="Loading assembled 3D parts\u2026";Ti.append(Sr);for(let i of Ss.values())i.group.visible=!1;Er.group.visible=!1;var Ot={port:null,stbd:null,mTotal:0},ac={hi:new Ee("#2a5cff"),mid:new Ee("#1fa0ff"),lo:new Ee("#2fd8ff"),relief:new Ee("#46c8ff")},wp=i=>i>0?.35+.7*Math.log10(1+i/.01):0;function dM(){let i=e=>{let t=nt[e];return Bf({open:rt&&wo(e),auto:br(e),hand:bc(e),handSet:t.value,safety:bs,batteries:2})};Ot={port:i("port"),stbd:i("stbd")},Ot.mTotal=Ot.port.mBranch+Ot.stbd.mBranch}function fM(i){for(let t of i){let n=t.frames,s=n.reduce((a,c)=>a+c[2],0)/n.length,r=n.map(a=>a[0]),o=Math.max(...r)-Math.min(...r)>20;t.stage=t.kind==="header"?t.branch==="common"?"common":"header":t.kind==="main"?o&&Math.abs(s-330)<15?"manifold":s<-290?"hp":s<-108?"auto":s<70?"hand":"filter":t.kind==="battery"?"hose":t.kind,t.ph=Math.random()*n.length}let e=i.filter(t=>t.kind!=="release");for(let t of e)for(let n of[1,2])i.push({...t,src:t,ph:(t.ph+n*t.frames.length/3)%t.frames.length})}var pM=1.7,mu={main:15.6,gauge:7.8,stub:4.4};function mM(){let i=new ps;i.background=new Ee("#0b0e10");let e=new or(Bt),t=new It({color:new Ee(6,6,6),side:Mt});for(let[s,r,o,a]of[[14,.5,0,-2],[.5,14,-2.5,0],[14,.25,0,3],[.25,14,3,0]]){let c=new Be(new gn(s,r),t);c.rotation.x=Math.PI/2,c.position.set(o,6,a),i.add(c)}let n=e.fromScene(i,.02).texture;return e.dispose(),n}var Uu=[],cc=22;function gM(){let i=new ht;i.name="AIR STREAMLINES",i.renderOrder=4,ut.add(i);for(let e of Uu){let[t]=e.key.split(":"),n=new Zt({transparent:!0,depthWrite:!1,uniforms:{uPhase:{value:0},uAlpha:{value:0},uReach:{value:0},uLen:{value:1},uColor:{value:new Ee("#1593e6")}},vertexShader:"attribute float aU;attribute float aSeed;varying float vU;varying float vS;void main(){vU=aU;vS=aSeed;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uPhase;uniform float uAlpha;uniform float uReach;uniform float uLen;uniform vec3 uColor;varying float vU;varying float vS;void main(){if(vU/uLen>uReach)discard;float x=fract(uPhase*(.8+.4*vS)-vU/90.+vS*7.);float head=pow(1.-x,4.);float a=uAlpha*(.14+.86*head);if(a<.01)discard;gl_FragColor=vec4(mix(uColor,uColor*.55,head*.6),a);}"}),s=e.pts,r=0;for(let c=1;c<s.length;c++)r+=s[c].distanceTo(s[c-1]);n.uniforms.uLen.value=r;for(let c=0;c<cc;c++){let l=c*37%cc/cc,h=c/cc*Math.PI*2,u=e.rad*(.25+.55*(c*53%97/97)),d=[],f=[],m=[],x=0;for(let p=1;p<s.length;p++){let y=s[p-1],v=s[p],_=v.clone().sub(y),C=_.length();_.normalize();let T=new A(0,1,0).cross(_);T.lengthSq()<1e-6&&T.set(1,0,0),T.normalize();let E=_.clone().cross(T).normalize(),P=Math.max(2,Math.ceil(C/5));for(let M=p===1?0:1;M<=P;M++){let S=M/P,L=x+C*S,W=h+L*.02,B=y.clone().addScaledVector(_,C*S).addScaledVector(T,Math.cos(W)*u).addScaledVector(E,Math.sin(W)*u);d.push(B.x,B.y,B.z),f.push(L),m.push(l)}x+=C}let g=new bt;g.setAttribute("position",new et(d,3)),g.setAttribute("aU",new et(f,1)),g.setAttribute("aSeed",new et(m,1)),i.add(new fi(g,n))}let o=new Zt({transparent:!0,depthWrite:!1,uniforms:n.uniforms,vertexShader:"varying float vU;uniform float uLen;void main(){vU=uv.x*uLen;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uPhase;uniform float uAlpha;uniform float uReach;uniform float uLen;varying float vU;void main(){if(vU/uLen>uReach)discard;float x=fract(vU/60.-uPhase*.35);float b=smoothstep(0.,.25,x)*(1.-smoothstep(.45,.75,x));vec3 deep=vec3(.03,.16,.55);float a=min(1.,uAlpha)*(.62+.3*b);if(a<.01)discard;gl_FragColor=vec4(mix(deep,deep*.45,b),a);}"}),a=new Yi;for(let c=1;c<s.length;c++)s[c].distanceTo(s[c-1])>.01&&a.add(new mi(s[c-1],s[c]));if(a.curves.length){let c=new Be(new rn(a,Math.max(8,a.curves.length*4),e.rad*.72,12,!1),o);c.renderOrder=3,c.frustumCulled=!1,i.add(c)}e.branch=t,e.mat=n}}function xM(i){let e=ji(45);for(let t of Uu){if(!t.mat)continue;let n=nt[t.branch],s=Ot[t.branch],r=t.stage,o=rt&&(r==="common"||r==="header"||!!n&&n.open)&&(r!=="safety"||Cr(t.branch)),a=o?r==="common"?Math.max(gc,Ot.mTotal/(e*196e-6)):r==="header"?Math.max(gc,n.open?s.v.header:0):["gauge","stub"].includes(r)?0:s.v[r]||0:0,c=Tp[r]??7,l=c<2?Kn.common-c:Math.min(Kn.common-c,Kn[t.branch]-(c-2)),h=Math.max(0,Math.min(1,l)),u=t.mat.uniforms;u.uPhase.value+=i*wp(a)*.9,u.uReach.value=o?h:0,u.uAlpha.value=o?a>0?1:.4:0;let d=["common","header","hp"].includes(r)?Eu:r==="auto"?br(t.branch):n&&bc(t.branch)?n.value:br(t.branch);u.uColor.value.set(r==="safety"?"#1a8fc4":d>=10?"#2457d6":d>=.3?"#1f86d1":"#1aa3c4")}}function _M(i,e){hn.traverse(h=>{h.isMesh&&h.material===e&&(h.visible=!1)});let t=mM(),n=new At({color:"#c4cbd0",metalness:.95,roughness:.28,envMap:t,envMapIntensity:1.2}),s=new At({color:"#8f979c",metalness:.9,roughness:.35,envMap:t}),r=new mt({color:"#7aa6c0",transparent:!0,opacity:.38,roughness:.02,metalness:0,side:pn,depthWrite:!0}),o=new mt({color:"#000000",roughness:.02,metalness:0,envMap:t,envMapIntensity:1.1,transparent:!0,blending:Ks,depthWrite:!1,side:pn}),a={};for(let h of i){if(["release","battery"].includes(h.kind))continue;let u=h.branch+":"+h.stage,d=[h.frames[0]],f=[d];for(let m=1;m<h.frames.length;m++){let x=h.frames[m-1],g=h.frames[m];Math.hypot(g[0]-x[0],g[1]-x[1],g[2]-x[2])<25?d.push(g):f.push(d=[g])}for(let m of f){let x=m.reduce((g,p,y)=>y?g+Math.hypot(p[0]-m[y-1][0],p[1]-m[y-1][1],p[2]-m[y-1][2]):0,0);(!a[u]||x>a[u].len)&&(a[u]={len:x,r:m,stage:h.stage})}}let c=new ht;c.name="CLEAR LARGE PIPES",c.renderOrder=5,ut.add(c);for(let{r:h,stage:u}of Object.values(a)){if(h.length<2)continue;let d=(u==="gauge"?mu.gauge:u==="stub"?mu.stub:mu.main)*pM,f=[new A(...h[0])];for(let p=1;p<h.length-1;p++){let y=new A(...h[p-1]),v=new A(...h[p]),_=new A(...h[p+1]);v.clone().sub(y).normalize().dot(_.clone().sub(v).normalize())<.995&&f.push(v)}f.push(new A(...h[h.length-1]));let m=new Yi;for(let p=1;p<f.length;p++)m.add(new mi(f[p-1],f[p]));Uu.push({key:Object.keys(a).find(p=>a[p].r===h),stage:u,pts:f,rad:d});let x=new rn(m,Math.max(8,f.length*6),d,32,!1),g=new Sn(d,32,16);c.add(new Be(x,r),new Be(x,o));for(let p of f)for(let y of[r,o]){let v=new Be(g,y);v.position.copy(p),c.add(v)}for(let[p,y]of[[f[0],f[1]],[f[f.length-1],f[f.length-2]]])l(p,y,d)}gM();function l(h,u,d){if(rp.some(g=>g.distanceTo(h)<d))return;rp.push(h.clone());let f=u.clone().sub(h).normalize(),m=new ht;m.position.copy(h).addScaledVector(f,d*.35),m.quaternion.setFromUnitVectors(new A(0,1,0),f),c.add(m);let x=new Be(new Ft(d*1.5,d*1.5,d*.32,40),n);m.add(x);for(let g=0;g<6;g++){let p=g/6*Math.PI*2,y=new Be(new Ft(d*.13,d*.13,d*.5,12),s);y.position.set(Math.cos(p)*d*1.24,0,Math.sin(p)*d*1.24),m.add(y)}}}var rp=[],gc=.05,op=2.2,Tp={common:0,header:1,hp:2,auto:3,hand:4,filter:5,gauge:6,manifold:6,safety:6.5,stub:7,hose:7},Kn={common:0,port:0,stbd:0};function vM(i){let e=new bt,t=new Float32Array(i*3),n=new Float32Array(i*3),s=new Float32Array(i),r=new Float32Array(i);e.setAttribute("position",new dt(t,3)),e.setAttribute("color",new dt(n,3)),e.setAttribute("aSize",new dt(s,1)),e.setAttribute("aAlpha",new dt(r,1));let o=new Zt({transparent:!0,depthWrite:!1,vertexColors:!0,uniforms:{uScale:{value:1}},vertexShader:"attribute float aSize;attribute float aAlpha;varying float vA;varying vec3 vC;uniform float uScale;void main(){vA=aAlpha;vC=color;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=aSize*uScale;}",fragmentShader:"varying float vA;varying vec3 vC;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;float a=pow(1.-r,1.7)*vA;if(a<.004)discard;gl_FragColor=vec4(mix(vC,vec3(.16,.42,.62),.45),a*.8);}"}),a=new pi(e,o);return a.frustumCulled=!1,a.renderOrder=4,{points:a,geo:e,mat:o,pos:t,col:n,size:s,alpha:r}}function Ap(i){if(!mc)return;dM();let e=new A,t=new A,n=new Ee,s=ji(45),r=mc,o=(a,c)=>{Kn[a]=c?Kn[a]+i*op:Math.max(0,Kn[a]-i*op*2)};o("common",rt);for(let a of["port","stbd"])o(a,rt&&nt[a].open&&Kn.common>=2);r.mat.uniforms.uScale.value=Bt.domElement.height/(ot.top-ot.bottom);for(let a=0;a<yu.length;a++){let c=yu[a],l=nt[c.branch],h=Ot[c.branch],u=rt&&c.kind!=="release"&&(c.kind==="header"||!!l&&l.open)&&(c.kind!=="safety"||Cr(c.branch)),d=u?c.stage==="common"?Math.max(gc,Ot.mTotal/(s*196e-6)):c.stage==="header"?Math.max(gc,l.open?h.v.header:0):["gauge","stub"].includes(c.stage)?0:h.v[c.stage]||0:0;c.ph+=i*10*wp(d);let f=(c.src||c).frames,m=f.length,x=Math.floor(c.ph)%m;e.fromArray(f[x]);let g=f[(x+1)%m];g&&e.distanceTo(t.fromArray(g))<25&&e.lerp(t,c.ph%1);let p=Tp[c.stage]??7,y=p<2?Kn.common-p:Math.min(Kn.common-p,Kn[c.branch]-(p-2)),v=Math.max(0,Math.min(1,y)),_=v>=1||x/m<=v;r.pos[a*3]=e.x,r.pos[a*3+1]=e.y,r.pos[a*3+2]=e.z,r.size[a]=(c.stage==="gauge"?2.2:c.stage==="stub"?2.6:1)*Math.max(c.radius,2.4)*(11+3*Math.sin(a*1.7+c.ph*.9)),r.alpha[a]=u&&_?(c.stage==="safety"?.5:.26)*Math.min(1,v*1.5+.2):0;let C=!l||["common","header","hp"].includes(c.stage)?Eu:c.stage==="auto"?br(c.branch):bc(c.branch)?l.value:br(c.branch);n.copy(c.stage==="safety"?ac.relief:C>=10?ac.hi:C>=.3?ac.mid:ac.lo),r.col[a*3]=n.r,r.col[a*3+1]=n.g,r.col[a*3+2]=n.b}for(let a of["position","color","aSize","aAlpha"])r.geo.attributes[a].needsUpdate=!0;xM(i),DM(i),CM(i),yM()}var Mu=0,bu=i=>(i*6e4).toFixed(i*6e4<10?3:1)+" g/min";function ap(i){let e=Ot[i];if(!e)return"";let t=i==="port"?"Port":"STBD";return e.mBranch?"<div><span>"+t+" line pressure (after filter)</span><b>"+e.afterFilter.toFixed(3)+" kg/cm\xB2</b></div><div><span>"+t+" into cells (2 batteries \xD7 12 orifices)</span><b>"+bu(e.mCells)+" \xB7 "+(e.mCells/ji(e.afterFilter)*6e4).toFixed(2)+" L/min</b></div><div><span>"+t+" safety valve relief</span><b>"+(e.mRelief?bu(e.mRelief):"0 \xB7 seated")+"</b></div><div><span>"+t+" velocity: header \xB7 main \xB7 hose</span><b>"+e.v.header.toFixed(3)+" \xB7 "+e.v.filter.toFixed(3)+" \xB7 "+e.v.hose.toFixed(2)+" m/s</b></div>":"<div><span>"+t+" branch</span><b>"+(rt?"Closed \xB7 no flow":"Paused")+"</b></div>"}function yM(){let i=performance.now();if(i-Mu<400)return;Mu=i;let e=document.querySelector("#airflow-readout");if(!e)return;let t=Ot.port&&Ot.stbd?Ot.port.mCells+Ot.port.mRelief+Ot.stbd.mCells+Ot.stbd.mRelief:0;e.innerHTML="<div><span>Supply (MP air)</span><b>45 kg/cm\xB2 \xB7 "+bu(Ot.mTotal)+"</b></div>"+ap("port")+ap("stbd")+"<div><span>Mass balance: in \u2212 (cells + relief)</span><b>"+(Math.abs(Ot.mTotal-t)<1e-12?0:(Ot.mTotal-t)*6e4).toFixed(6)+" g/min</b></div>"}ts||Sr.remove();ts&&Promise.all([new sc().loadAsync("assets/assembled-battery-agitation.glb"),fetch("assets/assembled-air-particles.json").then(i=>{if(!i.ok)throw new Error("Air asset unavailable");return i.json()})]).then(([i,e])=>{let t=i.scene;t.name="ACTUAL_ASSEMBLED_BLENDER_MODEL",t.scale.setScalar(625),ut.add(t),ut.updateMatrixWorld(!0),MM(t,e);let n=new mt({color:"#76b8b7",transparent:!0,opacity:.2,roughness:.17,metalness:.02,clearcoat:1,side:Mt,depthWrite:!1}),s=[],r=[],o=[];t.traverse(a=>{if(a.userData.release_branch&&(Sp.push(a),a.visible=!1),a.userData.touch_id&&s.push(a),a.userData.touch_handle&&r.push(a),a.userData.touch_needle&&o.push(a),a.isMesh){let c=a,l=!1;for(;c;)(c.userData.pipe_material||String(c.userData.asset_source||"").includes(": duct-"))&&(l=!0),c=c.parent;l&&(a.material=n),a.castShadow=!0,a.receiveShadow=!0}});for(let a of s)a.userData.touch_id.endsWith("-battery")&&Nu.push(Fh({scene:ut,root:a,side:a.userData.touch_id.split("-")[0],branches:nt,isFlowing:()=>rt,isFront:()=>Rr==="front"}));for(let a of s){let c=a.userData.touch_id;if(c.endsWith("-shutoff")){let l=new ht;l.position.set(0,.079,0),a.add(l),ut.updateMatrixWorld(!0);for(let h of[...a.children])h!==l&&h.name.toLowerCase().includes("handwheel")&&l.attach(h);Ao[c].userData.shutoffWheel=l,l.rotation.y=nt[c.split("-")[0]].open?gp:Pu,l.userData.target=l.rotation.y}}for(let a of r){let c=a.userData.touch_handle;a.userData.nativeAxis="y",a.userData.restAngle=a.rotation.y,Cu[c]=a;let l=new $e().setFromObject(a).getCenter(new A),h=[];a.traverse(m=>{if(!m.isMesh)return;let x=new $e().setFromObject(m),g=x.getCenter(new A);(x.max.z-x.min.z>.1*625||Math.abs(g.z-l.z)>.03*625)&&h.push(m)});let u=new $e;for(let m of h)u.expandByObject(m);let d=u.getCenter(new A),f=new ht;t.add(f),t.updateMatrixWorld(!0),f.position.copy(t.worldToLocal(d.clone()));for(let m of h)f.attach(m);f.rotation.y=Fp(c),_u[c]=f}for(let a of o){let c=a.userData.touch_needle,l=a.userData.touch_center,h=new ht;h.position.set(l[0],l[2],-l[1]),t.add(h),ut.updateMatrixWorld(!0),h.attach(a),h.userData.nativeBaseline=-(.145/.4)*Math.PI*1.5+Math.PI*.75,dc[c]=h;let u=document.createElement("canvas");u.width=u.height=2048,Ru(u.getContext("2d"),2048,0);let d=new qn(u);d.colorSpace=yt,d.anisotropy=Bt.capabilities?.getMaxAnisotropy?.()||8,pp[c]={cv:u,tex:d,shown:"0.000"};let f=new Be(new gn(.154,.154),new It({map:d,transparent:!0,depthWrite:!1,toneMapped:!1}));f.rotation.x=-Math.PI/2,f.position.set(l[0],l[2]+.0028,-l[1]),f.renderOrder=2,t.add(f)}t.traverse(a=>{/gauge.?number|dial.?tick/i.test(a.name)&&(a.visible=!1)}),ut.updateMatrixWorld(!0),hn=t,IM(),bM(e),cM(),fM(e),_M(e.filter(a=>!a.src),n),yu=e,mc=vM(e.length),ut.add(mc.points),Ap(0),Tu.visible=!1,Du=!0,zM(),Sr.remove(),Bt.render(ut,ot)}).catch(i=>{Sr.remove();let e=document.querySelector("#error");e.hidden=!1,e.textContent="The assembled 3D model could not load. Please reload.",console.error(i)});var Ep={L1:-.245,L0:-.13,R0:.1,R1:.265,D:0};function gu(i){let{L1:e,L0:t,R0:n,R1:s,D:r}=Ep;return r?i<=e?i-r:i<t?t+(i-t)*(t-(e-r))/(t-e):i<=n?i:i<s?n+(i-n)*(s+r-n)/(s-n):i+r:i}function MM(i,e){let t=Jn.clientWidth,n=Jn.clientHeight;if(!t||!n)return;let s=new $e().setFromObject(i),r=s.max.x-s.min.x,o=s.max.z-s.min.z+70,a=Math.max(.55,Math.max(0,(o*(t/n)*.97-r)/2)/625);Ep.D=a;for(let c of i.children){let l=/(?:^|[^a-z])(port|stbd)(?:[^a-z]|$)/i.exec(c.name);if(l){let h=l[1].toLowerCase()==="port"?-a:a;c.position.x+=h,c.traverse(u=>{let d=u.userData.touch_center;d&&(d[0]+=h)});continue}c.traverse(h=>{if(!h.isMesh)return;h.geometry=h.geometry.clone();let u=h.geometry,d=u.attributes.position,f=new A,m=new ze;h.updateMatrixWorld(!0);let x=new ze().copy(i.matrixWorld).invert().multiply(h.matrixWorld);m.copy(x).invert();for(let g=0;g<d.count;g++)f.fromBufferAttribute(d,g).applyMatrix4(x),f.x=gu(f.x),f.applyMatrix4(m),d.setXYZ(g,f.x,f.y,f.z);d.needsUpdate=!0,u.computeBoundingBox(),u.computeBoundingSphere()})}for(let c of e){let l=[];for(let h=0;h<c.frames.length;h++){let u=c.frames[h],d=[gu(u[0]/625)*625,u[1],u[2]];if(h){let f=c.frames[h-1],m=l[l.length-1],x=Math.hypot(u[0]-f[0],u[1]-f[1],u[2]-f[2]),g=Math.hypot(d[0]-m[0],d[1]-m[1],d[2]-m[2]);if(x<25&&g>=20){let p=Math.ceil(g/18);for(let y=1;y<p;y++)l.push([m[0]+(d[0]-m[0])*y/p,m[1]+(d[1]-m[1])*y/p,m[2]+(d[2]-m[2])*y/p])}}l.push(d)}c.frames=l}for(let c of[...Cn,...To])c.x=gu((c.x-900)/625)*625+900;ut.updateMatrixWorld(!0)}var Nu=[];function bM(i){let e=a=>{for(let c=a;c;c=c.parent){let l=/^(port|stbd)/i.exec(c.name);if(l)return l[1].toLowerCase()}return null},t={port:new $e,stbd:new $e},n={},s=new A;hn.traverse(a=>{let c=a.name.toLowerCase(),l=e(a);if(l){if(/^red[ _](cap|central)/.test(c)&&a.isMesh&&(t[l].expandByObject(a),a.visible=!1),/battery[ _]air[ _]hose/.test(c)&&a.isMesh){let h=a.geometry.attributes.position,u=null;for(let d=0;d<h.count;d++)s.fromBufferAttribute(h,d).applyMatrix4(a.matrixWorld),(!u||s.z<u.z)&&(u=s.clone());n[l]=u,a.visible=!1}/separate[ _]air[ _]hose[ _]lid[ _]socket/.test(c)&&(a.visible=!1)}});let r=new At({color:"#1d1f21",roughness:.75}),o=new mt({color:"#efe4b8",roughness:.12,transmission:fp?0:.55,thickness:3,transparent:!0,opacity:.6,side:Mt});for(let a of["port","stbd"]){let c=t[a],l=n[a];if(c.isEmpty()||!l)continue;let h=c.getCenter(new A),u=c.min.y,d=new ht;d.position.set(h.x,u,h.z),ut.add(d),(kn[a]??(kn[a]=[])).push(d),[[9,3,0],[6,9,3],[3.6,10,12]].forEach(([g,p,y])=>{let v=new Be(new Ft(g*.92,g,p,24),r);v.position.y=y+p/2,v.castShadow=!0,d.add(v)});let f=Cp(l,h,u);Su[a]={S:l.clone(),c:h.clone(),lid:u,hose:null};let m=new Be(new rn(f,96,3.4,14,!1),o);m.castShadow=!0,ut.add(m),kn[a].push(m),Fu=o,Su[a].hose=m;let x=i.filter(g=>g.kind==="battery"&&g.branch===a);is[a]=x,x.forEach((g,p)=>{let y=g.frames.length;g.frames=g.framesFront=Array.from({length:y},(v,_)=>f.getPointAt((_/y+p/x.length)%1).toArray())})}SM(t,n,i)}var Rp=[],Su={};function Cp(i,e,t){let n=e.x-i.x;return new qi([i.clone(),new A(i.x,i.y+28,i.z+40),new A(i.x+n*.25,i.y+62,i.z+(e.z-i.z)*.62),new A(i.x+n*.7,i.y+70,e.z-8),new A(e.x,t+60,e.z),new A(e.x,t+22,e.z)])}function SM(i,e,t){let n=l=>{for(let h=l;h;h=h.parent){let u=/^(port|stbd)/i.exec(h.name);if(u)return u[1].toLowerCase()}return null},s={},r={port:new $e,stbd:new $e},o={port:new $e,stbd:new $e},a={port:new $e,stbd:new $e},c=[];hn.traverse(l=>{let h=l.name.toLowerCase(),u=n(l);u&&(/^top[ _]lid/.test(h)&&l.isMesh&&(s[u]=new $e().setFromObject(l)),/yellow[ _]battery[ _]cap/.test(h)&&!l.isMesh&&(r[u].setFromObject(l),c.push(l)),/clear[ _]cylindrical[ _]cap/.test(h)&&o[u].expandByObject(l),/open[ _]lid[ _]hole[ _]seat/.test(h)&&a[u].expandByObject(l),/(photo[ _]battery[ _]terminals|red[ _]and[ _]clear[ _]battery[ _]fittings)/.test(h)&&!l.isMesh&&c.push(l))});for(let l of["port","stbd"]){let h=s[l];if(!h)continue;let u=h.getSize(new A),d=h.getCenter(new A),f=u.z,m=u.x/f,x=_=>((_.getCenter(new A).x-d.x)/f/m+.4)/.16,g=ja({W:1,L:m,nippleHose:!1,centre:[x(i[l]),x(r[l]),x(o[l]),x(a[l])]});g.group.scale.setScalar(f),g.group.rotation.y=Math.PI/2,g.group.position.set(d.x,h.max.y,d.z),ut.add(g.group);let p=Qa(420);g.group.add(p.points),Rp.push({side:l,vap:p,vent:g.vent,scale:f}),kn[l].push(g.group),hn.traverse(_=>{_.userData.touch_id===l+"-battery"&&kn[l].push(_)});let y=[x(i[l]),x(r[l]),x(o[l]),x(a[l])];Ou(l,h,y,e[l],is[l]||[]);let v=(is[l]||[]).slice();RM(l,l==="port"?-150:150,h,y,e[l],t),EM(l,h,y,e[l],t,v)}for(let l of c)l.visible=!1;Ip()}var kn={},is={},Ms=[],Fu=null,wM=-170,TM=[150,300],AM=330;function EM(i,e,t,n,s,r){let o=i==="port"?1:-1;for(let a of s){if(a.kind!=="main"||a.branch!==i)continue;let c=a.frames;if(!c.every(m=>Math.abs(m[2]-330)<2))continue;let l=c.map(m=>m[0]),h=o>0?Math.min(...l):Math.max(...l),u=o>0?Math.max(...l):Math.min(...l),d=Math.abs(u-h);if(d<50)continue;let f=(d+AM)/d;for(let m of c)m[0]=h+(m[0]-h)*f}for(let a of TM){let c=o*a,l=r.map(h=>({...h,frames:h.frames.map(u=>[u[0]+c,u[1],u[2]]),framesFront:null,framesTop:null}));for(let h of l)h.framesFront=h.frames;s.push(...l),Ou(i,e.clone().translate(new A(c,0,0)),t,n.clone().add(new A(c,0,0)),l),is[i].push(...l)}}function RM(i,e,t,n,s,r){let o=Su[i],a=new A(e,0,wM);for(let f of[...kn[i]]){if(f===o.hose)continue;let m=f.clone(!0),x=f.parent===hn?1/625:1;m.position.addScaledVector(a,x),f.parent.add(m),kn[i].push(m),f.userData.touch_id===i+"-battery"&&(m.userData={...m.userData,touch_id:i+"-battery-2"},m.updateMatrixWorld(!0),Nu.push(Fh({scene:ut,root:m,side:i,branches:nt,isFlowing:()=>rt,isFront:()=>Rr==="front"})))}let c=o.S.clone().add(new A(e,0,0)),l=Cp(c,o.c.clone().add(a),o.lid),h=new Be(new rn(l,96,3.4,14,!1),Fu);h.castShadow=!0,ut.add(h),kn[i].push(h);let u=is[i]||[],d=u.map((f,m)=>{let x=f.frames.length,g=Array.from({length:x},(p,y)=>l.getPointAt((y/x+m/u.length)%1).toArray());return{...f,frames:g,framesFront:g,framesTop:null}});r.push(...d),Ou(i,t.clone().translate(new A(e,0,0)),n,s.clone().add(new A(e,0,0)),d),is[i].push(...d)}function Ou(i,e,t,n,s){let r=Vf({centre:t}),o=60,a=Hf(new A(0,0,-1),new A(0,1,0)),c=e.getCenter(new A);r.group.scale.setScalar(o),r.group.quaternion.copy(a);let l=new A(0,r.size.H/2*o,0).applyQuaternion(a);r.group.position.set(c.x,190,c.z+20).sub(l),ut.add(r.group),r.group.updateMatrixWorld(!0);let h=r.group.localToWorld(r.nipple.clone()),u=new A(0,1,0).applyQuaternion(a),d=new qi([n.clone(),new A(n.x,n.y+25,n.z+25),n.clone().lerp(h,.5).add(new A(0,40,0)),h.clone().addScaledVector(u,42),h.clone().addScaledVector(u,6)]),f=new Be(new rn(d,96,3.4,14,!1),Fu);ut.add(f),s.forEach((C,T)=>{let E=C.frames.length;C.framesTop=Array.from({length:E},(P,M)=>d.getPointAt((M/E+T/s.length)%1).toArray())}),Ms.push({side:i,b:r,hose:f,sc:o});let m=Cn.findIndex(C=>C.el.dataset.part===i+"-battery"&&!C.cell);m>=0&&(Cn[m].el.remove(),Cn.splice(m,1));let x=new $e().setFromObject(r.group),g=x.getCenter(new A),p=document.createElement("button");p.className="part-button",p.style.minWidth=p.style.minHeight="44px",p.dataset.part=i+"-battery",p.setAttribute("aria-label","Battery cell \xB7 "+(i==="port"?"Port":"STBD")),p.setAttribute("aria-pressed","false"),p.addEventListener("click",()=>Eo(i+"-battery")),document.querySelector("#labels").append(p),Cn.push({el:p,x:g.x+900,z:g.z+750,size:(x.max.x-x.min.x)*.66,h:(x.max.z-x.min.z)*.8,cell:!0});let y=Ms.filter(C=>C.side===i).map(C=>new $e().setFromObject(C.b.group)),v=y.reduce((C,T)=>C.union(T),new $e),_=mp[i];_&&(_.x=(i==="port"?v.max.x+46:v.min.x-46)+900,_.z=v.min.z+20+750),ns()}function Ip(){let i=Rr!=="front";for(let e in kn)for(let t of kn[e])t.visible=!i;for(let e of Ms)e.b.group.visible=e.hose.visible=i;for(let e in is)for(let t of is[e])t.frames=i&&t.framesTop?t.framesTop:t.framesFront}function CM(i){let e=Bt.domElement.height/(ot.top-ot.bottom),t=n=>rt&&wo(n)?Math.min(1,.35+Ri(n)/.16*.4):0;for(let n of Rp)n.vap.update(i,t(n.side),n.vent,e*n.scale,!1);for(let n of Ms)n.b.update(i,t(n.side),e*n.sc)}var wi=null,hn=null,cp=64;function IM(){let i=[],e=new A;for(let u of Sp){u.visible=!1;let d=[];if(u.traverse(C=>{if(!C.geometry)return;let T=C.geometry.attributes.position;for(let E=0;E<T.count;E++)d.push(e.fromBufferAttribute(T,E).applyMatrix4(C.matrixWorld).clone())}),d.length<2)continue;let f=Math.min(...d.map(C=>C.y)),m=Math.max(...d.map(C=>C.y)),x=C=>{let T=d.filter(C);return T.reduce((E,P)=>E.add(P),new A).multiplyScalar(1/T.length)},g=x(C=>C.y<f+.5),p=x(C=>C.y>m-.5),y=p.clone().sub(g),v=y.length();y.normalize();let _=new A(0,1,0).cross(y);_.lengthSq()<1e-6&&_.set(1,0,0),_.normalize(),i.push({side:u.userData.release_branch,o0:g,d0:y,u0:_,w0:y.clone().cross(_).normalize(),o:g.clone(),d:y.clone(),u:_.clone(),w:y.clone().cross(_).normalize(),len:v})}let t=i.length*cp,n=new bt,s=new Float32Array(t*3),r=new Float32Array(t),o=new Float32Array(t);n.setAttribute("position",new dt(s,3)),n.setAttribute("aAlpha",new dt(r,1)),n.setAttribute("aSize",new dt(o,1));let a=new Zt({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:1}},vertexShader:"attribute float aAlpha;attribute float aSize;varying float vA;uniform float uScale;void main(){vA=aAlpha;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=aSize*uScale;}",fragmentShader:"varying float vA;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;float a=pow(1.-r,1.8)*vA;if(a<.004)discard;gl_FragColor=vec4(mix(vec3(.42,.58,.66),vec3(.80,.89,.93),pow(1.-r,2.)),a);}"}),c=new pi(n,a);c.frustumCulled=!1,c.renderOrder=5,ut.add(c);let l=[];for(let u=0;u<t;u++)l.push({h:i[Math.floor(u/cp)],age:Math.random(),life:.8+Math.random()*.6,a:Math.random()*6.283,r:Math.random(),live:!1});let h={};hn.traverse(u=>{let d=u.userData.touch_id;if(d==="port-safety"||d==="stbd-safety"){let f=d.split("-")[0],m=[u];hn.traverse(p=>{/safety[ _]mounting[ _]plenum/i.test(p.name)&&p.name.toLowerCase().startsWith(f)&&(p.visible=!1)});let x=u.getWorldPosition(new A);ut.add(LM(x));let g=PM(i.filter(p=>p.side===f),x);hn.add(g),m.push(g),h[f]={pivot:x,parts:m.map(p=>({m:p,q:p.quaternion.clone(),p:p.position.clone()}))}}}),wi={pts:c,geo:n,state:l,level:{port:0,stbd:0},holes:i,valves:h},Lp()}var xc=new A(0,0,1),lp={port:new Yt().setFromUnitVectors(new A(0,1,0),xc),stbd:new Yt().setFromUnitVectors(new A(0,1,0),xc)},Pp=new mt({color:"#f4f6f4",roughness:.35,metalness:0,transmission:.25,thickness:2,transparent:!0,opacity:.94,side:Mt});function PM(i,e){let n=document.createElement("canvas");n.width=n.height=512;let s=n.getContext("2d"),r=256/50;s.fillStyle="#f4f6f4",s.beginPath(),s.arc(256,256,256,0,7),s.fill(),s.fillStyle="#8cc0e2",s.beginPath(),s.arc(256,256,256-5*r,0,7),s.fill(),s.fillStyle="rgba(30,40,50,.08)";for(let c=0;c<1400;c++){let l=Math.random()*7,h=Math.sqrt(Math.random())*(256-5*r);s.fillRect(256+h*Math.cos(l),256+h*Math.sin(l),2,2)}for(let c of i){let l=256+(c.o0.x-e.x)*r,h=256+(c.o0.z-e.z)*r,u=s.createRadialGradient(l,h,0,l,h,3.6*r);u.addColorStop(0,"#1a2026"),u.addColorStop(.75,"#2c343a"),u.addColorStop(1,"#c9a87a"),s.fillStyle=u,s.beginPath(),s.arc(l,h,3.6*r,0,7),s.fill()}let o=new qn(n);o.colorSpace=yt,o.anisotropy=4;let a=new Be(new Da(50,72),new At({map:o,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2}));return a.rotation.x=-Math.PI/2,a.scale.setScalar(1/625),a.position.copy(e).divideScalar(625),a.position.y+=3/625,a}function LM(i){let s=[];for(let o=0;o<=28;o++){let a=o/28;s.push(new re(16+34*a**2.2,a*46))}let r=new Be(new hr(s,64),Pp);return r.castShadow=r.receiveShadow=!0,r.quaternion.setFromUnitVectors(new A(0,1,0),xc),r.position.copy(i).addScaledVector(xc,-49),r}function Lp(){if(!wi)return;let i=!0,e=new ze().copy(hn.matrixWorld).invert();for(let t in wi.valves){let n=wi.valves[t],s=lp[t];for(let r of n.parts){if(r.m.quaternion.copy(r.q),r.m.position.copy(r.p),!i)continue;let o=r.m.getWorldPosition(new A).sub(n.pivot).applyQuaternion(s).add(n.pivot);r.m.position.copy(o.applyMatrix4(e)),r.m.quaternion.premultiply(s)}}for(let t of wi.holes){let n=wi.valves[t.side];if(t.o.copy(t.o0),t.d.copy(t.d0),t.u.copy(t.u0),t.w.copy(t.w0),!i||!n)continue;let s=lp[t.side];t.o.sub(n.pivot).applyQuaternion(s).add(n.pivot),t.d.applyQuaternion(s),t.u.applyQuaternion(s),t.w.applyQuaternion(s)}hn.updateMatrixWorld(!0)}function DM(i){if(!wi)return;let{geo:e,state:t,level:n}=wi,s=e.attributes.position.array,r=e.attributes.aAlpha.array,o=e.attributes.aSize.array,a=performance.now()/1e3;for(let c of["port","stbd"]){let l=Math.max(Cr(c)?Math.min(1,.55+Math.max(0,Ri(c)-bs)/.25*.45):0,Mo()?Math.min(1,.55+(zn-bs)/.8*.45):0);n[c]+=(l-n[c])*Math.min(1,i*(l>n[c]?6:3))}wi.pts.material.uniforms.uScale.value=Bt.domElement.height/(ot.top-ot.bottom);for(let c=0;c<t.length;c++){let l=t[c],h=l.h,u=n[h.side];if(l.age+=i/l.life,l.age>=1&&(l.age%=1,l.live=u>.02&&Math.random()<u,l.a=Math.random()*6.283,l.r=Math.random(),l.life=.8+Math.random()*.6),!l.live||!(rt||Mo())){r[c]=0;continue}let d=l.age,f=2.4,m=h.len*2.3*(1-Math.exp(-f*d))/(1-Math.exp(-f)),x=m*(.03+.16*d)*Math.sqrt(l.r),g=Math.sin(a*7+c)*m*.035,p=Math.cos(l.a)*x+g,y=Math.sin(l.a)*x;s[c*3]=h.o.x+h.d.x*m+h.u.x*p+h.w.x*y,s[c*3+1]=h.o.y+h.d.y*m+h.u.y*p+h.w.y*y,s[c*3+2]=h.o.z+h.d.z*m+h.u.z*p+h.w.z*y,o[c]=5+d*44,r[c]=u*.55*Math.min(1,d/.05)*Math.pow(1-d,1.3)}e.attributes.position.needsUpdate=e.attributes.aAlpha.needsUpdate=e.attributes.aSize.needsUpdate=!0}function Dp(i){i="top",Rr=i;let e=i==="front";document.body.classList.toggle("front-only",e),ot.position.set(0,e?230:3e3,e?3e3:0),ot.up.set(0,e?1:0,e?0:-1),ot.lookAt(0,e?230:0,0),Ti.classList.toggle("front-view",e),document.querySelector("#view-top").setAttribute("aria-pressed",String(!e)),document.querySelector("#view-front").setAttribute("aria-pressed",String(e));let t=document.querySelector(".selected-badge");t&&(t.textContent=e?"FIXED FRONT VIEW":"FIXED TOP VIEW"),Ti.setAttribute("aria-label",e?"Locked front-view 3D circuit":"Locked top-view battery agitation circuit"),Lp(),Ip(),ns()}document.querySelector("#view-top").onclick=()=>Dp("top");var wr=.5,_c=.01,Up=.13,UM=.16,Np={port:null,stbd:null},Bu=i=>Math.round(i*100)/100;function bo(i){let e=Bu(nt[i].value);return e>=Up&&e<=UM}function Fp(i){return nt[i].value/wr*Math.PI*1.5}function So(i,e){let t=nt[i];t.value=Bu(Math.min(wr,Math.max(0,e))),t.hand=t.value>0,yc(i),Ci&&En()}var yr={},NM=[.05,.1,.13,.14,.15,.16];function FM(i){for(let e of NM)if(e>i+.001)return e;return Math.min(wr,Bu(i+_c))}function Op(i){let e=nt[i];if(yr[i]||e.value>=wr)return;let t=FM(e.value);yr[i]=setInterval(()=>{So(i,Math.min(t,e.value+_c)),e.value>=t-.001&&(vc(i),yc(i))},60),yc(i)}function OM(i,e){i.addEventListener("pointerdown",t=>{t.button>0||Op(e)})}function vc(i){yr[i]&&(clearInterval(yr[i]),yr[i]=null)}function yc(i){let e=Np[i];if(!e)return;let t=nt[i].value,n=bo(i);Bp(e.val,t.toFixed(2)),e.el.classList.toggle("ok",n),e.el.classList.toggle("off",t>0&&!n),e.state.textContent=yr[i]?"Rising\u2026":t<=0?"Tap reducer to start":n?"\u2713 In working range":t>=wr?"At 0.50 \u2013 press Reset":t<Up?"Tap again to increase":"Above 0.16 \u2013 press Reset",e.bar.style.width=t/wr*100+"%"}var wu=null;function vo(i){if(zn=Math.round(Math.min(1,Math.max(0,i))*100)/100,!wu)return;let{val:e,needle:t,slider:n,status:s,root:r}=wu,o=Mo();Bp(e,zn.toFixed(2)),n.value=String(zn),t.style.transform="rotate("+(-135+zn*270)+"deg)",r.classList.toggle("venting",o),s.textContent=o?"\u26A0 Above 0.2 \u2013 releasing through safety valves":"Safety valves closed (opens above 0.2)"}var BM=[];function Bp(i,e){i.textContent!==e&&(i.textContent=e,i.classList.remove("pop"),i.offsetWidth,i.classList.add("pop"))}function lc(i,e,t){Mc.append(i);let n={el:i,x:e+900,z:t+750};return To.push(n),BM.push(n),n}function hp(i,e){let t=new $e,n=new $e;return i.updateMatrixWorld(!0),i.traverse(s=>{if(!(!s.isMesh||s.userData.noFit)){for(let r=s;r;r=r.parent)if(!r.visible)return;s.geometry&&(s.geometry.computeBoundingBox?.(),s.geometry.boundingBox&&(n.copy(s.geometry.boundingBox).applyMatrix4(s.matrixWorld),!(e&&!e(n))&&t.union(n)))}}),t}function zM(){{let D=document.createElement("style");D.textContent=`
#circuit .pit-tag{position:absolute;transform:translate(0,-50%);font:700 clamp(10px,calc(var(--k,1)*24px),44px)/1 Arial,sans-serif;letter-spacing:.18em;color:#24506b;pointer-events:none;white-space:nowrap}
.pit-meter{position:absolute;transform:translate(-50%,-50%);font-size:clamp(4.6px,calc(var(--k,1)*17px),40px);width:12.5em;padding:.7em .8em .8em;border-radius:1em;background:linear-gradient(180deg,#ffffffee,#eef5faee);border:1.5px solid #9dbcd2;box-shadow:0 .5em 1.6em #12405e26;pointer-events:auto;text-align:center;color:#173f57;font-family:Arial,sans-serif;touch-action:manipulation}
.pit-meter h3{margin:0 0 .3em;font-size:.82em;letter-spacing:.12em;color:#3c6680}
.pit-meter svg{width:8.2em;height:8.2em;display:block;margin:0 auto -.6em}
.pit-meter .pv{font:700 1.7em/1 Arial,sans-serif}.pit-meter .pv small{font-size:.48em;font-weight:600;color:#56778c;margin-left:.2em}
.pit-meter .row{display:flex;align-items:center;gap:.4em;margin-top:.55em}
.pit-meter input{flex:1;min-width:0;accent-color:#1f7fbf;height:1.8em}
.pit-meter button{width:2.4em;height:2.4em;border-radius:.6em;border:1px solid #a9c4d6;background:#fff;font:700 1.15em/1 Arial;color:#1d4d6b;padding:0}
.pit-meter .ps{margin-top:.5em;font-size:.78em;line-height:1.3;color:#2c6b4f;font-weight:600;min-height:2.6em;display:flex;align-items:center;justify-content:center}
.pit-meter.venting{border-color:#e2574c;box-shadow:0 0 0 .25em #e2574c33,0 .5em 1.6em #12405e26}.pit-meter.venting .ps{color:#c0392b}.pit-meter.venting .pv{color:#c0392b}
.hr-read{position:absolute;transform:translate(-50%,-50%);font-size:clamp(4.6px,calc(var(--k,1)*16px),40px);width:10.5em;padding:.6em .7em .7em;border-radius:.9em;background:#ffffffee;border:1.5px solid #b4c7d3;box-shadow:0 .4em 1.2em #12405e1f;pointer-events:auto;text-align:center;color:#173f57;font-family:Arial,sans-serif;transition:border-color .25s,box-shadow .25s}
.hr-read h3{margin:0;font-size:.78em;letter-spacing:.1em;color:#3c6680}
.hr-read .hv{font:700 1.9em/1.15 Arial,sans-serif;color:#5d7281}.hr-read .hv small{font-size:.45em;font-weight:600;margin-left:.2em}
.hr-read .track{position:relative;height:.5em;border-radius:.3em;background:#dfe8ee;margin:.35em 0 .25em;overflow:hidden}
.hr-read .band{position:absolute;top:0;bottom:0;left:26%;width:6%;background:#22b45a55}
.hr-read .fill{position:absolute;left:0;top:0;bottom:0;width:0;background:#7c93a3;transition:width .25s}
.hr-read.rising .hv span{animation:hrpulse 1s ease-in-out infinite}@keyframes hrpulse{50%{opacity:.55}}
.hr-read .hs{font-size:.72em;min-height:1.3em;color:#5d7281;font-weight:600}
.hr-read button{margin-top:.45em;width:100%;height:2.5em;border-radius:.6em;border:1px solid #a9c4d6;background:#fff;font:700 .95em/1 Arial;color:#1d4d6b}
.hr-read.ok{border-color:#22b45a;box-shadow:0 0 0 .25em #22b45a30}.hr-read.ok .hv,.hr-read.ok .hs{color:#159447}.hr-read.ok .fill{background:#22b45a}
.hr-read.off{border-color:#e2574c}.hr-read.off .hv,.hr-read.off .hs{color:#c0392b}.hr-read.off .fill{background:#e2574c}
@keyframes fadeUp{from{opacity:0;translate:0 .8em}to{opacity:1;translate:0 0}}
@keyframes pop{0%{scale:1}35%{scale:1.14}100%{scale:1}}
@keyframes okGlow{0%,100%{box-shadow:0 0 0 .2em #22b45a30,0 .4em 1.2em #12405e1f}50%{box-shadow:0 0 0 .45em #22b45a22,0 0 1.4em #22b45a55}}
@keyframes ventPulse{0%,100%{box-shadow:0 0 0 .2em #e2574c33}50%{box-shadow:0 0 0 .55em #e2574c22,0 0 1.6em #e2574c55}}
@keyframes stepIn{from{opacity:0;translate:-.8em 0}to{opacity:1;translate:0 0}}
@keyframes startPulse{0%,100%{box-shadow:0 0 0 0 #245b4a66}50%{box-shadow:0 0 0 10px #245b4a00}}
.pit-meter,.hr-read,.cs-panel,#circuit .pit-tag{animation:fadeUp .7s cubic-bezier(.2,.8,.2,1) both}
.hr-read{animation-delay:.1s}.cs-panel{animation-delay:.2s}.pit-meter{animation-delay:.3s}
.hr-read .hv span,.pit-meter .pv span{display:inline-block}
.hr-read .hv span.pop,.pit-meter .pv span.pop{animation:pop .3s ease-out}
.hr-read.ok{animation:okGlow 2.2s ease-in-out infinite}
.pit-meter.venting{animation:ventPulse 1.2s ease-in-out infinite}
.pit-meter .ndl{transform-box:view-box;transform-origin:60px 60px;transition:transform .45s cubic-bezier(.3,1.4,.5,1)}
.cs-step.enter{animation:stepIn .45s cubic-bezier(.2,.8,.2,1)}
.hr-read button,.pit-meter button{transition:transform .12s,background .2s}.hr-read button:active,.pit-meter button:active{transform:scale(.94);background:#e6f0f6}
#start[aria-pressed="false"]{animation:startPulse 2.2s ease-out infinite}
@media(prefers-reduced-motion:reduce){.pit-meter,.hr-read,.cs-panel,.cs-step.enter,.hr-read.ok,.pit-meter.venting,#start{animation:none!important}.pit-meter .ndl{transition:none}}
#circuit .battery-info{width:clamp(22px,calc(var(--k,1)*38px),64px);height:clamp(22px,calc(var(--k,1)*38px),64px);font-size:clamp(12px,calc(var(--k,1)*22px),36px);line-height:1;display:grid;place-items:center;border-width:2px;border-color:#1f6f9a;color:#1f6f9a;box-shadow:0 .2em .8em #12405e30}
#circuit .battery-info:hover{background:#1f6f9a;color:#fff}
.cs-panel{position:absolute;transform:translate(-50%,-50%);font-size:clamp(5px,calc(var(--k,1)*21px),48px);width:34em;padding:1em 1.2em 1.1em;border-radius:1.1em;background:linear-gradient(180deg,#ffffffe8,#f1f7fbe8);border:1.5px solid #b3cddd;box-shadow:0 .6em 2em #12405e22;color:#173f57;font-family:Arial,sans-serif;pointer-events:none;backdrop-filter:blur(4px)}
.cs-panel h3{margin:0;font-size:.8em;letter-spacing:.16em;color:#4a7088;display:flex;justify-content:space-between;align-items:center}
.cs-panel h3 .run{font-size:.95em;letter-spacing:.08em;padding:.25em .7em;border-radius:1em;background:#e3ebf0;color:#56707f}
.cs-panel h3 .run.on{background:#d9f2e3;color:#14864a}
.cs-step{display:flex;gap:.7em;align-items:center;margin:.75em 0 .85em;padding:.7em .85em;border-radius:.8em;background:#e8f2f9;border:1px solid #c6dceb;font-size:1.05em;font-weight:700;line-height:1.3}
.cs-step b{flex:0 0 auto;width:1.9em;height:1.9em;border-radius:50%;display:grid;place-items:center;background:#1f6f9a;color:#fff;font-size:.9em}
.cs-step.done{background:#e3f6ea;border-color:#a9dcbc;color:#126b3c}.cs-step.done b{background:#22a35a}
.cs-step.warn{background:#fdecea;border-color:#f1b5ae;color:#a8322a}.cs-step.warn b{background:#d9443a}
.cs-grid{display:grid;grid-template-columns:1.25fr 1fr 1fr;gap:.1em .8em;font-size:.92em}
.cs-grid>div{padding:.42em 0;border-bottom:1px solid #dbe6ed}
.cs-grid .hd{font-size:.78em;letter-spacing:.14em;color:#6b8798;font-weight:700;border-bottom:1.5px solid #c3d5e0}
.cs-grid .lb{color:#5a7586}.cs-grid .v{font-weight:700;text-align:right}
.cs-grid .good{color:#14864a}.cs-grid .bad{color:#c0392b}.cs-grid .idle{color:#8aa0ad}
.cs-pit{display:flex;justify-content:space-between;margin-top:.7em;font-size:.92em;font-weight:700}.cs-pit span{color:#5a7586;font-weight:400}
@media(max-width:700px){.cs-panel{display:none}}
@media(max-width:520px){.hr-read .hs,.pit-meter .ps{display:none}}`,document.head.append(D)}let i=270,e=[hn,...Ms.map(D=>D.b.group),...ut.children.filter(D=>D.isMesh&&D.material===Pp)],t=new $e;for(let D of e)t.union(hp(D,G=>(G.min.z+G.max.z)/2>i+20));let n=hp(ut,D=>D.max.x-D.min.x<2600&&D.max.z-D.min.z<2600),s=55,r=t.min.x-s,o=t.max.x+s,a=Math.min(t.min.z-28,i+10),c=t.max.z+s*1.1,l=n.min.y-2,h=new ht;ut.add(h);let u=new Be(new gn(o-r,c-a),new It({color:"#1d5f8a",transparent:!0,opacity:.07,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.set((r+o)/2,l,(a+c)/2),h.add(u);let d=new At({color:"#2d4f66",roughness:.6,metalness:.2}),f=7,m=10;for(let[D,G,k,j]of[[(r+o)/2,a,o-r+f,f],[(r+o)/2,c,o-r+f,f],[r,(a+c)/2,f,c-a+f],[o,(a+c)/2,f,c-a+f]]){let z=new Be(new Nt(k,m,j),d);z.position.set(D,l+m/2,G),z.castShadow=z.receiveShadow=!0,h.add(z)}Iu.visible=!1;let x=document.createElement("div");x.className="pit-tag",x.textContent="BATTERY PIT",lc(x,r+24,c-30);let g=Ms.filter(D=>D.side==="port").map(D=>new $e().setFromObject(D.b.group)).reduce((D,G)=>D.union(G),new $e),p=Ms.filter(D=>D.side==="stbd").map(D=>new $e().setFromObject(D.b.group)).reduce((D,G)=>D.union(G),new $e),y=g.isEmpty()||p.isEmpty()?(r+o)/2:(g.max.x+p.min.x)/2,v=(a+c)/2+20,_=document.createElement("div");_.className="pit-meter",_.setAttribute("role","group"),_.setAttribute("aria-label","Battery pit pressure meter");let C=[];for(let D=0;D<=10;D++){let G=(-225+D*27)*Math.PI/180,k=D%5?44:40;C.push('<line x1="'+(60+48*Math.cos(G)).toFixed(1)+'" y1="'+(60+48*Math.sin(G)).toFixed(1)+'" x2="'+(60+k*Math.cos(G)).toFixed(1)+'" y2="'+(60+k*Math.sin(G)).toFixed(1)+'" stroke="#24506b" stroke-width="'+(D%5?1.2:2)+'"/>'),D%5===0&&C.push('<text x="'+(60+31*Math.cos(G)).toFixed(1)+'" y="'+(63+31*Math.sin(G)).toFixed(1)+'" font-size="9" font-weight="700" fill="#24506b" text-anchor="middle">'+(D/10).toFixed(1)+"</text>")}let T=(D,G,k)=>{let j=(-225+D*270)*Math.PI/180,z=(-225+G*270)*Math.PI/180;return'<path d="M'+(60+52*Math.cos(j)).toFixed(2)+" "+(60+52*Math.sin(j)).toFixed(2)+" A52 52 0 "+((G-D)*270>180?1:0)+" 1 "+(60+52*Math.cos(z)).toFixed(2)+" "+(60+52*Math.sin(z)).toFixed(2)+'" stroke="'+k+'" stroke-width="6" fill="none"/>'};_.innerHTML='<h3>PIT PRESSURE</h3><svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="57" fill="#f7fafc" stroke="#9db6c8" stroke-width="2"/>'+T(0,.2,"#22b45a")+T(.2,1,"#e2574c")+C.join("")+'<g class="ndl"><line x1="60" y1="60" x2="60" y2="18" stroke="#173f57" stroke-width="2.6" stroke-linecap="round"/></g><circle cx="60" cy="60" r="5" fill="#173f57"/></svg><div class="pv"><span>0.00</span><small>kg/cm\xB2</small></div><div class="row"><button type="button" aria-label="Lower pit pressure">\u2212</button><input type="range" min="0" max="1" step="0.01" value="0" aria-label="Pit pressure, kg/cm\xB2"><button type="button" aria-label="Raise pit pressure">+</button></div><div class="ps" role="status"></div>';let[E,P]=_.querySelectorAll("button"),M=_.querySelector("input");wu={root:_,val:_.querySelector(".pv span"),needle:_.querySelector(".ndl"),slider:M,status:_.querySelector(".ps")},M.addEventListener("input",()=>vo(+M.value)),E.onclick=()=>vo(zn-.01),P.onclick=()=>vo(zn+.01),lc(_,y,v),vo(zn);let S={};hn.traverse(D=>{let G=D.userData.touch_id;(G==="port-hand"||G==="stbd-hand")&&(S[G.split("-")[0]]=new $e().setFromObject(D))});for(let D of["port","stbd"]){let G=S[D];if(!G||G.isEmpty())continue;let k=G.getCenter(new A),j=D==="port",z=document.createElement("div");z.className="hr-read",z.setAttribute("role","group"),z.setAttribute("aria-label","Hand reducer \xB7 "+(j?"Port":"STBD")),z.innerHTML='<h3>HAND REDUCER</h3><div class="hv"><span>0.00</span><small>kg/cm\xB2</small></div><div class="track"><div class="fill"></div><div class="band"></div></div><div class="hs" role="status"></div><button type="button">\u21BA Reset</button>',z.querySelector("button").onclick=()=>{vc(D),So(D,0)},Np[D]={el:z,val:z.querySelector(".hv span"),bar:z.querySelector(".fill"),state:z.querySelector(".hs")},lc(z,j?k.x+215:k.x-215,k.z),yc(D)}{let D=document.createElement("div");D.className="cs-panel",D.setAttribute("role","status"),D.setAttribute("aria-live","polite"),lc(D,(r+o)/2,(n.min.z+a)/2+30);let G="",k="",j=(ae,ue)=>'<div class="lb">'+ae+"</div>"+["port","stbd"].map(ge=>{let[Ce,je]=ue(ge);return'<div class="v '+je+'">'+Ce+"</div>"}).join(""),z=()=>{let ae=["port","stbd"].filter(de=>Ei(de)),ue=ae.filter(bo),ge=Mo(),Ce,je="",Y;rt?ae.length?ue.length?(Ce="\u2713",je="done",Y="Agitating \u2013 air bubbling through "+ue.map(de=>de==="port"?"PORT":"STBD").join(" & ")+" cells"):(Ce="3",Y="Tap the hand reducer until it reads 0.13 \u2013 0.16 (green)"):(Ce="2",Y="Tap a red shut-off valve to open PORT or STBD"):(Ce="1",Y="Press \u25B6 Start to supply MP air"),ge&&(Ce="!",je="warn",Y="Pit pressure "+zn.toFixed(2)+" kg/cm\xB2 \u2013 safety valves releasing");let ne='<h3>CIRCUIT STATUS<span class="run'+(rt?" on":"")+'">'+(rt?"\u25CF RUNNING":"\u25CB STOPPED")+'</span></h3><div class="cs-step '+je+'"><b>'+Ce+"</b><span>"+Y+'</span></div><div class="cs-grid"><div class="hd"></div><div class="hd v">PORT</div><div class="hd v">STBD</div>'+j("Shut-off valve",de=>rt?nt[de].open?["OPEN","good"]:["CLOSED","bad"]:["\u2014","idle"])+j("Hand reducer",de=>{let te=nt[de].value;return[te.toFixed(2),te<=0?"idle":bo(de)?"good":"bad"]})+j("Pressure gauge",de=>{let te=Ri(de);return[te.toFixed(3),te<=0?"idle":te>bs?"bad":"good"]})+'</div><div class="cs-pit"><span>Battery pit</span>'+zn.toFixed(2)+" kg/cm\xB2 \xB7 "+(ge?'<b style="color:#c0392b">VENTING</b>':'<b style="color:#14864a">SAFE</b>')+"</div>";if(ne!==G){G=ne,D.innerHTML=ne;let de=D.querySelector(".cs-step");de&&Y!==k&&(de.classList.add("enter"),k=Y)}};z(),setInterval(z,200)}let L=n.clone().union(new $e(new A(r-f,l,a-f),new A(o+f,l+m,c+f))),W=L.max.x-L.min.x,B=L.max.z-L.min.z;Zn={cx:(L.min.x+L.max.x)/2,cz:(L.min.z+L.max.z)/2,w:W*1.04,h:B*1.04},document.querySelector("#viewport").style.inset="10px 8px 10px",ns()}var up=performance.now();function zp(i){let e=Math.min(.05,(i-up)/1e3);up=i,uM(),hM(e),jy(e);for(let t of Nu)t.update(e);ts&&(Du?Ap(rt?e:0):Er.update(rt?e:0)),Bt.render(ut,ot),requestAnimationFrame(zp)}var uc=document.querySelector("#component-select");for(let i of Ss.values()){let e=document.createElement("option");e.value=i.id,e.textContent=i.title,uc.append(e)}uc.onchange=()=>{uc.value?Eo(uc.value):Lu()};En();ns();requestAnimationFrame(zp);window.batteryAgitation={getState:()=>({selected:Ci,flowing:rt,viewMode:Rr,labels:ys,branches:JSON.parse(JSON.stringify(nt)),camera:{position:ot.position.toArray(),quaternion:ot.quaternion.toArray(),zoom:ot.zoom},parts:Ss.size,pipes:Au.length,actualBlenderModel:Du}),select:Eo,reset:()=>document.querySelector("#reset").click()};ts&&addEventListener("pagehide",()=>{Bt.dispose(),Bt.forceContextLoss()});addEventListener("pageshow",i=>{i.persisted&&location.reload()});})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
