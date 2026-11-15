(()=>{var gu=document.querySelector("#offline-status"),bs=i=>{gu&&(gu.textContent=i)},fp=location.protocol==="file:"||window.BATTERY_PORTABLE===!0;if(fp)document.body.classList.add("offline-file"),bs("Offline copy \xB7 all 3D assets included");else{let i=()=>{navigator.onLine||bs("Offline \xB7 using saved 3D assets")};if(window.addEventListener("offline",i),window.addEventListener("online",()=>bs("Online \xB7 offline assets remain saved")),"serviceWorker"in navigator&&window.isSecureContext){let e=!1,t=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{t&&!e&&(e=!0,location.reload())}),navigator.serviceWorker.addEventListener("message",n=>{n.data?.type==="OFFLINE_READY"&&bs(navigator.onLine?"Ready for offline use on this device":"Offline \xB7 using saved 3D assets")}),navigator.serviceWorker.register("./sw.js").then(async n=>{(await navigator.serviceWorker.ready).active?.postMessage({type:"CHECK_OFFLINE"}),n.addEventListener("updatefound",()=>{let r=n.installing;r?.addEventListener("statechange",()=>{r.state==="activated"&&r.postMessage({type:"CHECK_OFFLINE"})})})}).catch(()=>bs("Use the downloadable copy for offline access"))}else bs("Download the offline copy to use without internet")}var pp=0,xu=1,mp=2;var Hd=1,no=2,ai=3,Wn=0,fn=1,Bt=2,Di=0,Ui=1,Hr=2,_u=3,vu=4,gp=5,ls=100,xp=101,_p=102,vp=103,yp=104,Mp=200,bp=201,Sp=202,wp=203,Vl=204,Gl=205,Tp=206,Ep=207,Ap=208,Rp=209,Cp=210,Ip=211,Pp=212,Lp=213,Dp=214,Wl=0,Xl=1,ql=2,Ks=3,Yl=4,Zl=5,Kl=6,Jl=7,Vd=0,Up=1,Np=2,Ni=0,Op=1,Fp=2,Bp=3,io=4,zp=5,kp=6,Hp=7,yu="attached",Vp="detached",Gd=300,Js=301,$s=302,$l=303,jl=304,Na=306,fi=1e3,hi=1001,Vr=1002,Qt=1003,sh=1004;var Vs=1005;var dn=1006,Or=1007;var Gn=1008;var pi=1009,Wd=1010,Xd=1011,Gr=1012,rh=1013,hs=1014,Fn=1015,so=1016,oh=1017,ah=1018,js=1020,qd=35902,Yd=1021,Zd=1022,bn=1023,Kd=1024,Jd=1025,Xs=1026,Qs=1027,lh=1028,ch=1029,$d=1030,hh=1031;var uh=1033,$o=33776,jo=33777,Qo=33778,ea=33779,Ql=35840,ec=35841,tc=35842,nc=35843,ic=36196,sc=37492,rc=37496,oc=37808,ac=37809,lc=37810,cc=37811,hc=37812,uc=37813,dc=37814,fc=37815,pc=37816,mc=37817,gc=37818,xc=37819,_c=37820,vc=37821,ta=36492,yc=36494,Mc=36495,jd=36283,bc=36284,Sc=36285,wc=36286;var er=2300,tr=2301,rl=2302,Mu=2400,bu=2401,Su=2402,Gp=2500;var Qd=0,Oa=1,ro=2,Wp=3200,Xp=3201;var ef=0,qp=1,Pi="",wt="srgb",nn="srgb-linear",Fa="linear",bt="srgb";var Ss=7680;var wu=519,Yp=512,Zp=513,Kp=514,tf=515,Jp=516,$p=517,jp=518,Qp=519,Tc=35044,Rn=35048;var Tu="300 es",ui=2e3,na=2001,Fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eu=1234567,qs=Math.PI/180,nr=180/Math.PI;function Sn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function Gt(i,e,t){return Math.max(e,Math.min(t,i))}function dh(i,e){return(i%e+e)%e}function em(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function tm(i,e,t){return i!==e?(t-i)/(e-i):0}function Fr(i,e,t){return(1-t)*i+t*e}function nm(i,e,t,n){return Fr(i,e,1-Math.exp(-t*n))}function im(i,e=1){return e-Math.abs(dh(i,e*2)-e)}function sm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function rm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function om(i,e){return i+Math.floor(Math.random()*(e-i+1))}function am(i,e){return i+Math.random()*(e-i)}function lm(i){return i*(.5-Math.random())}function cm(i){i!==void 0&&(Eu=i);let e=Eu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hm(i){return i*qs}function um(i){return i*nr}function dm(i){return(i&i-1)===0&&i!==0}function fm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mm(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function On(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ba={DEG2RAD:qs,RAD2DEG:nr,generateUUID:Sn,clamp:Gt,euclideanModulo:dh,mapLinear:em,inverseLerp:tm,lerp:Fr,damp:nm,pingpong:im,smoothstep:sm,smootherstep:rm,randInt:om,randFloat:am,randFloatSpread:lm,seededRandom:cm,degToRad:hm,radToDeg:um,isPowerOfTwo:dm,ceilPowerOfTwo:fm,floorPowerOfTwo:pm,setQuaternionFromProperEuler:mm,normalize:yt,denormalize:On},Q=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},et=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],y=s[1],v=s[4],_=s[7],I=s[2],T=s[5],A=s[8];return r[0]=o*x+a*y+l*I,r[3]=o*g+a*v+l*T,r[6]=o*p+a*_+l*A,r[1]=c*x+h*y+u*I,r[4]=c*g+h*v+u*T,r[7]=c*p+h*_+u*A,r[2]=d*x+f*y+m*I,r[5]=d*g+f*v+m*T,r[8]=d*p+f*_+m*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ol.makeScale(e,t)),this}rotate(e){return this.premultiply(ol.makeRotation(-e)),this}translate(e,t){return this.premultiply(ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ol=new et;function nf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gm(){let i=Wr("canvas");return i.style.display="block",i}var Au={};function Ur(i){i in Au||(Au[i]=!0,console.warn(i))}function xm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function _m(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vm(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var at={enabled:!0,workingColorSpace:nn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===bt&&(i.r=di(i.r),i.g=di(i.g),i.b=di(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===bt&&(i.r=Ys(i.r),i.g=Ys(i.g),i.b=Ys(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Pi?Fa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ru=[.64,.33,.3,.6,.15,.06],Cu=[.2126,.7152,.0722],Iu=[.3127,.329],Pu=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lu=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);at.define({[nn]:{primaries:Ru,whitePoint:Iu,transfer:Fa,toXYZ:Pu,fromXYZ:Lu,luminanceCoefficients:Cu,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:Ru,whitePoint:Iu,transfer:bt,toXYZ:Pu,fromXYZ:Lu,luminanceCoefficients:Cu,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}});var ws,Ec=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ws===void 0&&(ws=Wr("canvas")),ws.width=e.width,ws.height=e.height;let n=ws.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ws}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(di(t[n]/255)*255):t[n]=di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ym=0,ia=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=Sn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(al(s[o].image)):r.push(al(s[o]))}else r=al(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function al(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ec.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Mm=0,Zt=class i extends Fi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=hi,s=hi,r=dn,o=Gn,a=bn,l=pi,c=i.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Sn(),this.name="",this.source=new ia(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fi:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case Vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fi:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case Vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Gd;Zt.DEFAULT_ANISOTROPY=1;var ft=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,_=(f+1)/2,I=(p+1)/2,T=(h+d)/4,A=(u+x)/4,P=(m+g)/4;return v>_&&v>I?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=A/n):_>I?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=P/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=A/r,s=P/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ac=class extends Fi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Zt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ia(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mi=class extends Ac{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},sa=class extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Rc=class extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var en=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==m){let g=1-a,p=l*d+c*f+h*m+u*x,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let I=Math.sqrt(v),T=Math.atan2(I,p*y);g=Math.sin(g*T)/I,a=Math.sin(a*T)/I}let _=a*y;if(l=l*g+d*_,c=c*g+f*_,h=h*g+m*_,u=u*g+x*_,g===1-a){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Du.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ll.copy(this).projectOnVector(e),this.sub(ll)}reflect(e){return this.sub(ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ll=new C,Du=new en,an=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mo.copy(n.boundingBox)),mo.applyMatrix4(e.matrixWorld),this.union(mo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),go.subVectors(this.max,Sr),Ts.subVectors(e.a,Sr),Es.subVectors(e.b,Sr),As.subVectors(e.c,Sr),Ti.subVectors(Es,Ts),Ei.subVectors(As,Es),ts.subVectors(Ts,As);let t=[0,-Ti.z,Ti.y,0,-Ei.z,Ei.y,0,-ts.z,ts.y,Ti.z,0,-Ti.x,Ei.z,0,-Ei.x,ts.z,0,-ts.x,-Ti.y,Ti.x,0,-Ei.y,Ei.x,0,-ts.y,ts.x,0];return!cl(t,Ts,Es,As,go)||(t=[1,0,0,0,1,0,0,0,1],!cl(t,Ts,Es,As,go))?!1:(xo.crossVectors(Ti,Ei),t=[xo.x,xo.y,xo.z],cl(t,Ts,Es,As,go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ti=[new C,new C,new C,new C,new C,new C,new C,new C],Dn=new C,mo=new an,Ts=new C,Es=new C,As=new C,Ti=new C,Ei=new C,ts=new C,Sr=new C,go=new C,xo=new C,ns=new C;function cl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ns.fromArray(i,r);let a=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),l=e.dot(ns),c=t.dot(ns),h=n.dot(ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var bm=new an,wr=new C,hl=new C,xn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):bm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);let t=wr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(wr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(hl)),this.expandByPoint(wr.copy(e.center).sub(hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ni=new C,ul=new C,_o=new C,Ai=new C,dl=new C,vo=new C,fl=new C,ir=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ul.copy(e).add(t).multiplyScalar(.5),_o.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(ul);let r=e.distanceTo(t)*.5,o=-this.direction.dot(_o),a=Ai.dot(this.direction),l=-Ai.dot(_o),c=Ai.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ul).addScaledVector(_o,d),f}intersectSphere(e,t){ni.subVectors(e.center,this.origin);let n=ni.dot(this.direction),s=ni.dot(ni)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,n,s,r){dl.subVectors(t,e),vo.subVectors(n,e),fl.crossVectors(dl,vo);let o=this.direction.dot(fl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,e);let l=a*this.direction.dot(vo.crossVectors(Ai,vo));if(l<0)return null;let c=a*this.direction.dot(dl.cross(Ai));if(c<0||l+c>o)return null;let h=-a*Ai.dot(fl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,m,x,g)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Rs.setFromMatrixColumn(e,0).length(),r=1/Rs.setFromMatrixColumn(e,1).length(),o=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d+x*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sm,e,wm)}lookAt(e,t,n){let s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ri.crossVectors(n,mn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ri.crossVectors(n,mn)),Ri.normalize(),yo.crossVectors(mn,Ri),s[0]=Ri.x,s[4]=yo.x,s[8]=mn.x,s[1]=Ri.y,s[5]=yo.y,s[9]=mn.y,s[2]=Ri.z,s[6]=yo.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],y=n[3],v=n[7],_=n[11],I=n[15],T=s[0],A=s[4],P=s[8],S=s[12],b=s[1],L=s[5],H=s[9],z=s[13],k=s[2],ee=s[6],V=s[10],le=s[14],Y=s[3],fe=s[7],de=s[11],Se=s[15];return r[0]=o*T+a*b+l*k+c*Y,r[4]=o*A+a*L+l*ee+c*fe,r[8]=o*P+a*H+l*V+c*de,r[12]=o*S+a*z+l*le+c*Se,r[1]=h*T+u*b+d*k+f*Y,r[5]=h*A+u*L+d*ee+f*fe,r[9]=h*P+u*H+d*V+f*de,r[13]=h*S+u*z+d*le+f*Se,r[2]=m*T+x*b+g*k+p*Y,r[6]=m*A+x*L+g*ee+p*fe,r[10]=m*P+x*H+g*V+p*de,r[14]=m*S+x*z+g*le+p*Se,r[3]=y*T+v*b+_*k+I*Y,r[7]=y*A+v*L+_*ee+I*fe,r[11]=y*P+v*H+_*V+I*de,r[15]=y*S+v*z+_*le+I*Se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],y=u*g*c-x*d*c+x*l*f-a*g*f-u*l*p+a*d*p,v=m*d*c-h*g*c-m*l*f+o*g*f+h*l*p-o*d*p,_=h*x*c-m*u*c+m*a*f-o*x*f-h*a*p+o*u*p,I=m*u*l-h*x*l-m*a*d+o*x*d+h*a*g-o*u*g,T=t*y+n*v+s*_+r*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=y*A,e[1]=(x*d*r-u*g*r-x*s*f+n*g*f+u*s*p-n*d*p)*A,e[2]=(a*g*r-x*l*r+x*s*c-n*g*c-a*s*p+n*l*p)*A,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*A,e[4]=v*A,e[5]=(h*g*r-m*d*r+m*s*f-t*g*f-h*s*p+t*d*p)*A,e[6]=(m*l*r-o*g*r-m*s*c+t*g*c+o*s*p-t*l*p)*A,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*A,e[8]=_*A,e[9]=(m*u*r-h*x*r-m*n*f+t*x*f+h*n*p-t*u*p)*A,e[10]=(o*x*r-m*a*r+m*n*c-t*x*c-o*n*p+t*a*p)*A,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*A,e[12]=I*A,e[13]=(h*x*s-m*u*s+m*n*d-t*x*d-h*n*g+t*u*g)*A,e[14]=(m*a*s-o*x*s-m*n*l+t*x*l+o*n*g-t*a*g)*A,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,x=o*h,g=o*u,p=a*u,y=l*c,v=l*h,_=l*u,I=n.x,T=n.y,A=n.z;return s[0]=(1-(x+p))*I,s[1]=(f+_)*I,s[2]=(m-v)*I,s[3]=0,s[4]=(f-_)*T,s[5]=(1-(d+p))*T,s[6]=(g+y)*T,s[7]=0,s[8]=(m+v)*A,s[9]=(g-y)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Rs.set(s[0],s[1],s[2]).length(),o=Rs.set(s[4],s[5],s[6]).length(),a=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Un.copy(this);let c=1/r,h=1/o,u=1/a;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,t.setFromRotationMatrix(Un),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ui){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,m;if(a===ui)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===na)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ui){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*c,f=(n+s)*h,m,x;if(a===ui)m=(o+r)*u,x=-2*u;else if(a===na)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Rs=new C,Un=new Ve,Sm=new C(0,0,0),wm=new C(1,1,1),Ri=new C,yo=new C,mn=new C,Uu=new Ve,Nu=new en,Xn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nu.setFromEuler(this),this.setFromQuaternion(Nu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER="XYZ";var ra=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tm=0,Ou=new C,Cs=new en,ii=new Ve,Mo=new C,Tr=new C,Em=new C,Am=new en,Fu=new C(1,0,0),Bu=new C(0,1,0),zu=new C(0,0,1),ku={type:"added"},Rm={type:"removed"},Is={type:"childadded",child:null},pl={type:"childremoved",child:null},Tt=class i extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new Xn,n=new en,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new et}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Fu,e)}rotateY(e){return this.rotateOnAxis(Bu,e)}rotateZ(e){return this.rotateOnAxis(zu,e)}translateOnAxis(e,t){return Ou.copy(e).applyQuaternion(this.quaternion),this.position.add(Ou.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fu,e)}translateY(e){return this.translateOnAxis(Bu,e)}translateZ(e){return this.translateOnAxis(zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mo.copy(e):Mo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Tr,Mo,this.up):ii.lookAt(Mo,Tr,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(ii),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ku),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rm),pl.child=e,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ku),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,Em),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,Am,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Tt.DEFAULT_UP=new C(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new C,si=new C,ml=new C,ri=new C,Ps=new C,Ls=new C,Hu=new C,gl=new C,xl=new C,_l=new C,vl=new ft,yl=new ft,Ml=new ft,ci=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Nn.subVectors(e,t),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Nn.subVectors(s,t),si.subVectors(n,t),ml.subVectors(e,t);let o=Nn.dot(Nn),a=Nn.dot(si),l=Nn.dot(ml),c=si.dot(si),h=si.dot(ml),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return vl.setScalar(0),yl.setScalar(0),Ml.setScalar(0),vl.fromBufferAttribute(e,t),yl.fromBufferAttribute(e,n),Ml.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(vl,r.x),o.addScaledVector(yl,r.y),o.addScaledVector(Ml,r.z),o}static isFrontFacing(e,t,n,s){return Nn.subVectors(n,t),si.subVectors(e,t),Nn.cross(si).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Nn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ps.subVectors(s,n),Ls.subVectors(r,n),gl.subVectors(e,n);let l=Ps.dot(gl),c=Ls.dot(gl);if(l<=0&&c<=0)return t.copy(n);xl.subVectors(e,s);let h=Ps.dot(xl),u=Ls.dot(xl);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ps,o);_l.subVectors(e,r);let f=Ps.dot(_l),m=Ls.dot(_l);if(m>=0&&f<=m)return t.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Ls,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Hu.subVectors(r,s),a=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(Hu,a);let p=1/(g+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(Ps,o).addScaledVector(Ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},bo={h:0,s:0,l:0};function bl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=at.workingColorSpace){if(e=dh(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=bl(o,r,e+1/3),this.g=bl(o,r,e),this.b=bl(o,r,e-1/3)}return at.toWorkingColorSpace(this,s),this}setStyle(e,t=wt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){let n=sf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return at.fromWorkingColorSpace(jt.copy(this),e),Math.round(Gt(jt.r*255,0,255))*65536+Math.round(Gt(jt.g*255,0,255))*256+Math.round(Gt(jt.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(jt.copy(this),t);let n=jt.r,s=jt.g,r=jt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=wt){at.fromWorkingColorSpace(jt.copy(this),e);let t=jt.r,n=jt.g,s=jt.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(bo);let n=Fr(Ci.h,bo.h,t),s=Fr(Ci.s,bo.s,t),r=Fr(Ci.l,bo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jt=new Te;Te.NAMES=sf;var Cm=0,ln=class extends Fi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Sn(),this.name="",this.blending=Ui,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vl,this.blendDst=Gl,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vl&&(n.blendSrc=this.blendSrc),this.blendDst!==Gl&&(n.blendDst=this.blendDst),this.blendEquation!==ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},pt=class extends ln{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var kt=new C,So=new Q,st=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)So.fromBufferAttribute(this,t),So.applyMatrix3(e),this.setXY(t,So.x,So.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tc&&(e.usage=this.usage),e}};var oa=class extends st{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var aa=class extends st{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ye=class extends st{constructor(e,t,n){super(new Float32Array(e),t,n)}},Im=0,Mn=new Ve,Sl=new Tt,Ds=new C,gn=new an,Er=new an,Yt=new C,ct=class i extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nf(e)?aa:oa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return Sl.lookAt(e),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ye(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Er.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(gn.min,Er.min),gn.expandByPoint(Yt),Yt.addVectors(gn.max,Er.max),gn.expandByPoint(Yt)):(gn.expandByPoint(Er.min),gn.expandByPoint(Er.max))}gn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Yt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Yt.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(e,c),Yt.add(Ds)),s=Math.max(s,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new st(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new C,l[P]=new C;let c=new C,h=new C,u=new C,d=new Q,f=new Q,m=new Q,x=new C,g=new C;function p(P,S,b){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),a[P].add(x),a[S].add(x),a[b].add(x),l[P].add(g),l[S].add(g),l[b].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,S=y.length;P<S;++P){let b=y[P],L=b.start,H=b.count;for(let z=L,k=L+H;z<k;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let v=new C,_=new C,I=new C,T=new C;function A(P){I.fromBufferAttribute(s,P),T.copy(I);let S=a[P];v.copy(S),v.sub(I.multiplyScalar(I.dot(S))).normalize(),_.crossVectors(T,S);let L=_.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,L)}for(let P=0,S=y.length;P<S;++P){let b=y[P],L=b.start,H=b.count;for(let z=L,k=L+H;z<k;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new st(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new st(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vu=new Ve,is=new ir,wo=new xn,Gu=new C,To=new C,Eo=new C,Ao=new C,wl=new C,Ro=new C,Wu=new C,Co=new C,ve=class extends Tt{constructor(e=new ct,t=new pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(wl.fromBufferAttribute(u,e),o?Ro.addScaledVector(wl,h):Ro.addScaledVector(wl.sub(t),h))}t.add(Ro)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(r),is.copy(e.ray).recast(e.near),!(wo.containsPoint(is.origin)===!1&&(is.intersectSphere(wo,Gu)===null||is.origin.distanceToSquared(Gu)>(e.far-e.near)**2))&&(Vu.copy(r).invert(),is.copy(e.ray).applyMatrix4(Vu),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,I=v;_<I;_+=3){let T=a.getX(_),A=a.getX(_+1),P=a.getX(_+2);s=Io(this,p,e,n,c,h,u,T,A,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=a.getX(g),v=a.getX(g+1),_=a.getX(g+2);s=Io(this,o,e,n,c,h,u,y,v,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,I=v;_<I;_+=3){let T=_,A=_+1,P=_+2;s=Io(this,p,e,n,c,h,u,T,A,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let y=g,v=g+1,_=g+2;s=Io(this,o,e,n,c,h,u,y,v,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Pm(i,e,t,n,s,r,o,a){let l;if(e.side===fn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Wn,a),l===null)return null;Co.copy(a),Co.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Co);return c<t.near||c>t.far?null:{distance:c,point:Co.clone(),object:i}}function Io(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,To),i.getVertexPosition(l,Eo),i.getVertexPosition(c,Ao);let h=Pm(i,e,t,n,To,Eo,Ao,Wu);if(h){let u=new C;ci.getBarycoord(Wu,To,Eo,Ao,u),s&&(h.uv=ci.getInterpolatedAttribute(s,a,l,c,u,new Q)),r&&(h.uv1=ci.getInterpolatedAttribute(r,a,l,c,u,new Q)),o&&(h.normal=ci.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new C,materialIndex:0};ci.getNormal(To,Eo,Ao,d.normal),h.face=d,h.barycoord=u}return h}var lt=class i extends ct{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2));function m(x,g,p,y,v,_,I,T,A,P,S){let b=_/A,L=I/P,H=_/2,z=I/2,k=T/2,ee=A+1,V=P+1,le=0,Y=0,fe=new C;for(let de=0;de<V;de++){let Se=de*L-z;for(let ke=0;ke<ee;ke++){let $e=ke*b-H;fe[x]=$e*y,fe[g]=Se*v,fe[p]=k,c.push(fe.x,fe.y,fe.z),fe[x]=0,fe[g]=0,fe[p]=T>0?1:-1,h.push(fe.x,fe.y,fe.z),u.push(ke/A),u.push(1-de/P),le+=1}}for(let de=0;de<P;de++)for(let Se=0;Se<A;Se++){let ke=d+Se+ee*de,$e=d+Se+ee*(de+1),q=d+(Se+1)+ee*(de+1),ie=d+(Se+1)+ee*de;l.push(ke,$e,ie),l.push($e,q,ie),Y+=6}a.addGroup(f,Y,S),f+=Y,d+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function sr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function on(i){let e={};for(let t=0;t<i.length;t++){let n=sr(i[t]);for(let s in n)e[s]=n[s]}return e}function Lm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function rf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var Dm={clone:sr,merge:on},Um=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ht=class extends ln{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Um,this.fragmentShader=Nm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=Lm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},la=class extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ii=new C,Xu=new Q,qu=new Q,Ft=class extends la{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,Xu,qu),t.subVectors(qu,Xu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Us=-90,Ns=1,Cc=class extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ft(Us,Ns,e,t);s.layers=this.layers,this.add(s);let r=new Ft(Us,Ns,e,t);r.layers=this.layers,this.add(r);let o=new Ft(Us,Ns,e,t);o.layers=this.layers,this.add(o);let a=new Ft(Us,Ns,e,t);a.layers=this.layers,this.add(a);let l=new Ft(Us,Ns,e,t);l.layers=this.layers,this.add(l);let c=new Ft(Us,Ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===na)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ca=class extends Zt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Js,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ic=class extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ca(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new lt(5,5,5),r=new Ht({name:"CubemapFromEquirect",uniforms:sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:Di});r.uniforms.tEquirect.value=t;let o=new ve(s,r),a=t.minFilter;return t.minFilter===Gn&&(t.minFilter=dn),new Cc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Tl=new C,Om=new C,Fm=new et,li=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Tl.subVectors(n,t).cross(Om.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Tl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Fm.getNormalMatrix(e),s=this.coplanarPoint(Tl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ss=new xn,Po=new C,Xr=class{constructor(e=new li,t=new li,n=new li,s=new li,r=new li,o=new li){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ui){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],x=s[10],g=s[11],p=s[12],y=s[13],v=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,g-f,_-p).normalize(),n[1].setComponents(l+r,d+c,g+f,_+p).normalize(),n[2].setComponents(l+o,d+h,g+m,_+y).normalize(),n[3].setComponents(l-o,d-h,g-m,_-y).normalize(),n[4].setComponents(l-a,d-u,g-x,_-v).normalize(),t===ui)n[5].setComponents(l+a,d+u,g+x,_+v).normalize();else if(t===na)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Po.x=s.normal.x>0?e.max.x:e.min.x,Po.y=s.normal.y>0?e.max.y:e.min.y,Po.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function of(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Bm(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var tn=class i extends ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let y=p*d-o;for(let v=0;v<c;v++){let _=v*u-r;m.push(_,-y,0),x.push(0,0,1),g.push(v/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let v=y+c*p,_=y+c*(p+1),I=y+1+c*(p+1),T=y+1+c*p;f.push(v,_,T),f.push(_,I,T)}this.setIndex(f),this.setAttribute("position",new Ye(m,3)),this.setAttribute("normal",new Ye(x,3)),this.setAttribute("uv",new Ye(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},zm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,km=`#ifdef USE_ALPHAHASH
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
#endif`,Hm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xm=`#ifdef USE_AOMAP
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
#endif`,qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ym=`#ifdef USE_BATCHING
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
#endif`,Zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Km=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$m=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jm=`#ifdef USE_IRIDESCENCE
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
#endif`,Qm=`#ifdef USE_BUMPMAP
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
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lg=`#define PI 3.141592653589793
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
} // validated`,cg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hg=`vec3 transformedNormal = objectNormal;
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
#endif`,ug=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mg="gl_FragColor = linearToOutputTexel( gl_FragColor );",gg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xg=`#ifdef USE_ENVMAP
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
#endif`,_g=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vg=`#ifdef USE_ENVMAP
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
#endif`,yg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
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
#endif`,bg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eg=`#ifdef USE_GRADIENTMAP
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
}`,Ag=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ig=`uniform bool receiveShadow;
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
#endif`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Lg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ug=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Og=`PhysicalMaterial material;
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
#endif`,Fg=`struct PhysicalMaterial {
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
}`,Bg=`
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
#endif`,zg=`#if defined( RE_IndirectDiffuse )
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
#endif`,kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zg=`#if defined( USE_POINTS_UV )
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
#endif`,Kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$g=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e0=`#ifdef USE_MORPHTARGETS
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
#endif`,t0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,i0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a0=`#ifdef USE_NORMALMAP
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
#endif`,l0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,p0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S0=`float getShadowMask() {
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
}`,w0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T0=`#ifdef USE_SKINNING
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
#endif`,E0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A0=`#ifdef USE_SKINNING
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
#endif`,R0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,L0=`#ifdef USE_TRANSMISSION
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
#endif`,D0=`#ifdef USE_TRANSMISSION
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,B0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z0=`uniform sampler2D t2D;
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
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`#include <common>
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
}`,X0=`#if DEPTH_PACKING == 3200
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
}`,q0=`#define DISTANCE
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
}`,Y0=`#define DISTANCE
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
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`uniform float scale;
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
}`,$0=`uniform vec3 diffuse;
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
}`,j0=`#include <common>
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
}`,Q0=`uniform vec3 diffuse;
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
}`,ex=`#define LAMBERT
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
}`,tx=`#define LAMBERT
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
}`,nx=`#define MATCAP
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
}`,ix=`#define MATCAP
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
}`,sx=`#define NORMAL
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
}`,rx=`#define NORMAL
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
}`,ox=`#define PHONG
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
}`,ax=`#define PHONG
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
}`,lx=`#define STANDARD
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
}`,cx=`#define STANDARD
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
}`,hx=`#define TOON
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
}`,ux=`#define TOON
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
}`,dx=`uniform float size;
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
}`,fx=`uniform vec3 diffuse;
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
}`,px=`#include <common>
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
}`,mx=`uniform vec3 color;
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
}`,gx=`uniform float rotation;
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
}`,xx=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:zm,alphahash_pars_fragment:km,alphamap_fragment:Hm,alphamap_pars_fragment:Vm,alphatest_fragment:Gm,alphatest_pars_fragment:Wm,aomap_fragment:Xm,aomap_pars_fragment:qm,batching_pars_vertex:Ym,batching_vertex:Zm,begin_vertex:Km,beginnormal_vertex:Jm,bsdfs:$m,iridescence_fragment:jm,bumpmap_pars_fragment:Qm,clipping_planes_fragment:eg,clipping_planes_pars_fragment:tg,clipping_planes_pars_vertex:ng,clipping_planes_vertex:ig,color_fragment:sg,color_pars_fragment:rg,color_pars_vertex:og,color_vertex:ag,common:lg,cube_uv_reflection_fragment:cg,defaultnormal_vertex:hg,displacementmap_pars_vertex:ug,displacementmap_vertex:dg,emissivemap_fragment:fg,emissivemap_pars_fragment:pg,colorspace_fragment:mg,colorspace_pars_fragment:gg,envmap_fragment:xg,envmap_common_pars_fragment:_g,envmap_pars_fragment:vg,envmap_pars_vertex:yg,envmap_physical_pars_fragment:Pg,envmap_vertex:Mg,fog_vertex:bg,fog_pars_vertex:Sg,fog_fragment:wg,fog_pars_fragment:Tg,gradientmap_pars_fragment:Eg,lightmap_pars_fragment:Ag,lights_lambert_fragment:Rg,lights_lambert_pars_fragment:Cg,lights_pars_begin:Ig,lights_toon_fragment:Lg,lights_toon_pars_fragment:Dg,lights_phong_fragment:Ug,lights_phong_pars_fragment:Ng,lights_physical_fragment:Og,lights_physical_pars_fragment:Fg,lights_fragment_begin:Bg,lights_fragment_maps:zg,lights_fragment_end:kg,logdepthbuf_fragment:Hg,logdepthbuf_pars_fragment:Vg,logdepthbuf_pars_vertex:Gg,logdepthbuf_vertex:Wg,map_fragment:Xg,map_pars_fragment:qg,map_particle_fragment:Yg,map_particle_pars_fragment:Zg,metalnessmap_fragment:Kg,metalnessmap_pars_fragment:Jg,morphinstance_vertex:$g,morphcolor_vertex:jg,morphnormal_vertex:Qg,morphtarget_pars_vertex:e0,morphtarget_vertex:t0,normal_fragment_begin:n0,normal_fragment_maps:i0,normal_pars_fragment:s0,normal_pars_vertex:r0,normal_vertex:o0,normalmap_pars_fragment:a0,clearcoat_normal_fragment_begin:l0,clearcoat_normal_fragment_maps:c0,clearcoat_pars_fragment:h0,iridescence_pars_fragment:u0,opaque_fragment:d0,packing:f0,premultiplied_alpha_fragment:p0,project_vertex:m0,dithering_fragment:g0,dithering_pars_fragment:x0,roughnessmap_fragment:_0,roughnessmap_pars_fragment:v0,shadowmap_pars_fragment:y0,shadowmap_pars_vertex:M0,shadowmap_vertex:b0,shadowmask_pars_fragment:S0,skinbase_vertex:w0,skinning_pars_vertex:T0,skinning_vertex:E0,skinnormal_vertex:A0,specularmap_fragment:R0,specularmap_pars_fragment:C0,tonemapping_fragment:I0,tonemapping_pars_fragment:P0,transmission_fragment:L0,transmission_pars_fragment:D0,uv_pars_fragment:U0,uv_pars_vertex:N0,uv_vertex:O0,worldpos_vertex:F0,background_vert:B0,background_frag:z0,backgroundCube_vert:k0,backgroundCube_frag:H0,cube_vert:V0,cube_frag:G0,depth_vert:W0,depth_frag:X0,distanceRGBA_vert:q0,distanceRGBA_frag:Y0,equirect_vert:Z0,equirect_frag:K0,linedashed_vert:J0,linedashed_frag:$0,meshbasic_vert:j0,meshbasic_frag:Q0,meshlambert_vert:ex,meshlambert_frag:tx,meshmatcap_vert:nx,meshmatcap_frag:ix,meshnormal_vert:sx,meshnormal_frag:rx,meshphong_vert:ox,meshphong_frag:ax,meshphysical_vert:lx,meshphysical_frag:cx,meshtoon_vert:hx,meshtoon_frag:ux,points_vert:dx,points_frag:fx,shadow_vert:px,shadow_frag:mx,sprite_vert:gx,sprite_frag:xx},be={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Vn={basic:{uniforms:on([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:on([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Te(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:on([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:on([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:on([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Te(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:on([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:on([be.points,be.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:on([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:on([be.common,be.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:on([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:on([be.sprite,be.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:on([be.common,be.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:on([be.lights,be.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Vn.physical={uniforms:on([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Lo={r:0,b:0,g:0},rs=new Xn,_x=new Ve;function vx(i,e,t,n,s,r,o){let a=new Te(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function x(y){let v=!1,_=m(y);_===null?p(a,l):_&&_.isColor&&(p(_,1),v=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,v){let _=m(v);_&&(_.isCubeTexture||_.mapping===Na)?(h===void 0&&(h=new ve(new lt(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:sr(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),rs.copy(v.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_x.makeRotationFromEuler(rs)),h.material.toneMapped=at.getTransfer(_.colorSpace)!==bt,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ve(new tn(2,2),new Ht({name:"BackgroundMaterial",uniforms:sr(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=at.getTransfer(_.colorSpace)!==bt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(Lo,rf(i)),n.buffers.color.setClear(Lo.r,Lo.g,Lo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:x,addToRenderList:g}}function yx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(b,L,H,z,k){let ee=!1,V=u(z,H,L);r!==V&&(r=V,c(r.object)),ee=f(b,z,H,k),ee&&m(b,z,H,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,_(b,L,H,z),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,L,H){let z=H.wireframe===!0,k=n[b.id];k===void 0&&(k={},n[b.id]=k);let ee=k[L.id];ee===void 0&&(ee={},k[L.id]=ee);let V=ee[z];return V===void 0&&(V=d(l()),ee[z]=V),V}function d(b){let L=[],H=[],z=[];for(let k=0;k<t;k++)L[k]=0,H[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:z,object:b,attributes:{},index:null}}function f(b,L,H,z){let k=r.attributes,ee=L.attributes,V=0,le=H.getAttributes();for(let Y in le)if(le[Y].location>=0){let de=k[Y],Se=ee[Y];if(Se===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(Se=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(Se=b.instanceColor)),de===void 0||de.attribute!==Se||Se&&de.data!==Se.data)return!0;V++}return r.attributesNum!==V||r.index!==z}function m(b,L,H,z){let k={},ee=L.attributes,V=0,le=H.getAttributes();for(let Y in le)if(le[Y].location>=0){let de=ee[Y];de===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(de=b.instanceColor));let Se={};Se.attribute=de,de&&de.data&&(Se.data=de.data),k[Y]=Se,V++}r.attributes=k,r.attributesNum=V,r.index=z}function x(){let b=r.newAttributes;for(let L=0,H=b.length;L<H;L++)b[L]=0}function g(b){p(b,0)}function p(b,L){let H=r.newAttributes,z=r.enabledAttributes,k=r.attributeDivisors;H[b]=1,z[b]===0&&(i.enableVertexAttribArray(b),z[b]=1),k[b]!==L&&(i.vertexAttribDivisor(b,L),k[b]=L)}function y(){let b=r.newAttributes,L=r.enabledAttributes;for(let H=0,z=L.length;H<z;H++)L[H]!==b[H]&&(i.disableVertexAttribArray(H),L[H]=0)}function v(b,L,H,z,k,ee,V){V===!0?i.vertexAttribIPointer(b,L,H,k,ee):i.vertexAttribPointer(b,L,H,z,k,ee)}function _(b,L,H,z){x();let k=z.attributes,ee=H.getAttributes(),V=L.defaultAttributeValues;for(let le in ee){let Y=ee[le];if(Y.location>=0){let fe=k[le];if(fe===void 0&&(le==="instanceMatrix"&&b.instanceMatrix&&(fe=b.instanceMatrix),le==="instanceColor"&&b.instanceColor&&(fe=b.instanceColor)),fe!==void 0){let de=fe.normalized,Se=fe.itemSize,ke=e.get(fe);if(ke===void 0)continue;let $e=ke.buffer,q=ke.type,ie=ke.bytesPerElement,ge=q===i.INT||q===i.UNSIGNED_INT||fe.gpuType===rh;if(fe.isInterleavedBufferAttribute){let ce=fe.data,Ce=ce.stride,Ue=fe.offset;if(ce.isInstancedInterleavedBuffer){for(let F=0;F<Y.locationSize;F++)p(Y.location+F,ce.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let F=0;F<Y.locationSize;F++)g(Y.location+F);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let F=0;F<Y.locationSize;F++)v(Y.location+F,Se/Y.locationSize,q,de,Ce*ie,(Ue+Se/Y.locationSize*F)*ie,ge)}else{if(fe.isInstancedBufferAttribute){for(let ce=0;ce<Y.locationSize;ce++)p(Y.location+ce,fe.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ce=0;ce<Y.locationSize;ce++)g(Y.location+ce);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let ce=0;ce<Y.locationSize;ce++)v(Y.location+ce,Se/Y.locationSize,q,de,Se*ie,Se/Y.locationSize*ce*ie,ge)}}else if(V!==void 0){let de=V[le];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(Y.location,de);break;case 3:i.vertexAttrib3fv(Y.location,de);break;case 4:i.vertexAttrib4fv(Y.location,de);break;default:i.vertexAttrib1fv(Y.location,de)}}}}y()}function I(){P();for(let b in n){let L=n[b];for(let H in L){let z=L[H];for(let k in z)h(z[k].object),delete z[k];delete L[H]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;let L=n[b.id];for(let H in L){let z=L[H];for(let k in z)h(z[k].object),delete z[k];delete L[H]}delete n[b.id]}function A(b){for(let L in n){let H=n[L];if(H[b.id]===void 0)continue;let z=H[b.id];for(let k in z)h(z[k].object),delete z[k];delete H[b.id]}}function P(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function Mx(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function bx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==bn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let P=A===so&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==pi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Fn&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:I,maxSamples:T}}function Sx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new li,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let y=r?0:n,v=y*4,_=p.clippingState||null;l.value=_,_=h(m,d,v,f);for(let I=0;I!==v;++I)_[I]=t[I];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,_=f;v!==x;++v,_+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function wx(i){let e=new WeakMap;function t(o,a){return a===$l?o.mapping=Js:a===jl&&(o.mapping=$s),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===$l||a===jl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ic(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Bi=class extends la{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gs=4,Yu=[.125,.215,.35,.446,.526,.582],cs=20,El=new Bi,Zu=new Te,Al=null,Rl=0,Cl=0,Il=!1,as=(1+Math.sqrt(5))/2,Os=1/as,Ku=[new C(-as,Os,0),new C(as,Os,0),new C(-Os,0,as),new C(Os,0,as),new C(0,as,-Os),new C(0,as,Os),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],zi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Al=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Al,Rl,Cl),this._renderer.xr.enabled=Il,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Js||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Al=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:so,format:bn,colorSpace:nn,depthBuffer:!1},s=Ju(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ju(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tx(r)),this._blurMaterial=Ex(r,e,t)}return s}_compileMaterial(e){let t=new ve(this._lodPlanes[0],e);this._renderer.compile(t,El)}_sceneToCubeUV(e,t,n,s){let a=new Ft(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Zu),h.toneMapping=Ni,h.autoClear=!1;let f=new pt({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),m=new ve(new lt,f),x=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,x=!0):(f.color.copy(Zu),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;Do(s,y*v,p>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Js||e.mapping===$s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$u());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ve(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Do(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,El)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ku[(s-r-1)%Ku.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ve(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*cs-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):cs;g>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${cs}`);let p=[],y=0;for(let A=0;A<cs;++A){let P=A/x,S=Math.exp(-P*P/2);p.push(S),A===0?y+=S:A<g&&(y+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;let _=this._sizeLods[s],I=3*_*(s>v-Gs?s-v+Gs:0),T=4*(this._cubeSize-_);Do(t,I,T,3*_,2*_),l.setRenderTarget(t),l.render(u,El)}};function Tx(i){let e=[],t=[],n=[],s=i,r=i-Gs+1+Yu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Gs?l=Yu[o-i+Gs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,y=new Float32Array(x*m*f),v=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,P=T>2?0:-1,S=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];y.set(S,x*m*T),v.set(d,g*m*T);let b=[T,T,T,T,T,T];_.set(b,p*m*T)}let I=new ct;I.setAttribute("position",new st(y,x)),I.setAttribute("uv",new st(v,g)),I.setAttribute("faceIndex",new st(_,p)),e.push(I),s>Gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ju(i,e,t){let n=new mi(i,e,t);return n.texture.mapping=Na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Do(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ex(i,e,t){let n=new Float32Array(cs),s=new C(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fh(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function $u(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function ju(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function fh(){return`

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
	`}function Ax(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===$l||l===jl,h=l===Js||l===$s;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new zi(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new zi(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Rx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ur("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Cx(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);for(let m in d.morphAttributes){let x=d.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)e.remove(x[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)e.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let x=f[m];for(let g=0,p=x.length;g<p;g++)e.update(x[g],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let v=0,_=y.length;v<_;v+=3){let I=y[v+0],T=y[v+1],A=y[v+2];d.push(I,T,T,A,A,I)}}else if(m!==void 0){let y=m.array;x=m.version;for(let v=0,_=y.length/3-1;v<_;v+=3){let I=v+0,T=v+1,A=v+2;d.push(I,T,T,A,A,I)}}else return;let g=new(nf(d)?aa:oa)(d,1);g.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ix(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,x){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*x[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Px(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Lx(i,e,t){let n=new WeakMap,s=new ft;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;f===!0&&(v=1),m===!0&&(v=2),x===!0&&(v=3);let _=a.attributes.position.count*v,I=1;_>e.maxTextureSize&&(I=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*I*4*u),A=new sa(T,_,I,u);A.type=Fn,A.needsUpdate=!0;let P=v*4;for(let b=0;b<u;b++){let L=g[b],H=p[b],z=y[b],k=_*I*4*b;for(let ee=0;ee<L.count;ee++){let V=ee*P;f===!0&&(s.fromBufferAttribute(L,ee),T[k+V+0]=s.x,T[k+V+1]=s.y,T[k+V+2]=s.z,T[k+V+3]=0),m===!0&&(s.fromBufferAttribute(H,ee),T[k+V+4]=s.x,T[k+V+5]=s.y,T[k+V+6]=s.z,T[k+V+7]=0),x===!0&&(s.fromBufferAttribute(z,ee),T[k+V+8]=s.x,T[k+V+9]=s.y,T[k+V+10]=s.z,T[k+V+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new Q(_,I)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Dx(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var ha=class extends Zt{constructor(e,t,n,s,r,o,a,l,c,h=Xs){if(h!==Xs&&h!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xs&&(n=hs),n===void 0&&h===Qs&&(n=js),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},af=new Zt,Qu=new ha(1,1),lf=new sa,cf=new Rc,hf=new ca,ed=[],td=[],nd=new Float32Array(16),id=new Float32Array(9),sd=new Float32Array(4);function hr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ed[s];if(r===void 0&&(r=new Float32Array(s),ed[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function za(i,e){let t=td[e];t===void 0&&(t=new Int32Array(e),td[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ux(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function Ox(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function Fx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function Bx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;sd.set(n),i.uniformMatrix2fv(this.addr,!1,sd),Xt(t,n)}}function zx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;id.set(n),i.uniformMatrix3fv(this.addr,!1,id),Xt(t,n)}}function kx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;nd.set(n),i.uniformMatrix4fv(this.addr,!1,nd),Xt(t,n)}}function Hx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function Gx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function Wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function Xx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function Yx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function Zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function Kx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qu.compareFunction=tf,r=Qu):r=af,t.setTexture2D(e||r,s)}function Jx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||cf,s)}function $x(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||hf,s)}function jx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||lf,s)}function Qx(i){switch(i){case 5126:return Ux;case 35664:return Nx;case 35665:return Ox;case 35666:return Fx;case 35674:return Bx;case 35675:return zx;case 35676:return kx;case 5124:case 35670:return Hx;case 35667:case 35671:return Vx;case 35668:case 35672:return Gx;case 35669:case 35673:return Wx;case 5125:return Xx;case 36294:return qx;case 36295:return Yx;case 36296:return Zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Kx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return jx}}function e_(i,e){i.uniform1fv(this.addr,e)}function t_(i,e){let t=hr(e,this.size,2);i.uniform2fv(this.addr,t)}function n_(i,e){let t=hr(e,this.size,3);i.uniform3fv(this.addr,t)}function i_(i,e){let t=hr(e,this.size,4);i.uniform4fv(this.addr,t)}function s_(i,e){let t=hr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function r_(i,e){let t=hr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function o_(i,e){let t=hr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function a_(i,e){i.uniform1iv(this.addr,e)}function l_(i,e){i.uniform2iv(this.addr,e)}function c_(i,e){i.uniform3iv(this.addr,e)}function h_(i,e){i.uniform4iv(this.addr,e)}function u_(i,e){i.uniform1uiv(this.addr,e)}function d_(i,e){i.uniform2uiv(this.addr,e)}function f_(i,e){i.uniform3uiv(this.addr,e)}function p_(i,e){i.uniform4uiv(this.addr,e)}function m_(i,e,t){let n=this.cache,s=e.length,r=za(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||af,r[o])}function g_(i,e,t){let n=this.cache,s=e.length,r=za(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||cf,r[o])}function x_(i,e,t){let n=this.cache,s=e.length,r=za(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||hf,r[o])}function __(i,e,t){let n=this.cache,s=e.length,r=za(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||lf,r[o])}function v_(i){switch(i){case 5126:return e_;case 35664:return t_;case 35665:return n_;case 35666:return i_;case 35674:return s_;case 35675:return r_;case 35676:return o_;case 5124:case 35670:return a_;case 35667:case 35671:return l_;case 35668:case 35672:return c_;case 35669:case 35673:return h_;case 5125:return u_;case 36294:return d_;case 36295:return f_;case 36296:return p_;case 35678:case 36198:case 36298:case 36306:case 35682:return m_;case 35679:case 36299:case 36307:return g_;case 35680:case 36300:case 36308:case 36293:return x_;case 36289:case 36303:case 36311:case 36292:return __}}var Pc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qx(t.type)}},Lc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=v_(t.type)}},Dc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Pl=/(\w+)(\])?(\[|\.)?/g;function rd(i,e){i.seq.push(e),i.map[e.id]=e}function y_(i,e,t){let n=i.name,s=n.length;for(Pl.lastIndex=0;;){let r=Pl.exec(n),o=Pl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){rd(t,c===void 0?new Pc(a,i,e):new Lc(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Dc(a),rd(t,u)),t=u}}}var Zs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);y_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function od(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var M_=37297,b_=0;function S_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var ad=new et;function w_(i){at._getMatrix(ad,at.workingColorSpace,i);let e=`mat3( ${ad.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case Fa:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ld(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+S_(i.getShaderSource(e),o)}else return s}function T_(i,e){let t=w_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function E_(i,e){let t;switch(e){case Op:t="Linear";break;case Fp:t="Reinhard";break;case Bp:t="Cineon";break;case io:t="ACESFilmic";break;case kp:t="AgX";break;case Hp:t="Neutral";break;case zp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Uo=new C;function A_(){at.getLuminanceCoefficients(Uo);let i=Uo.x.toFixed(4),e=Uo.y.toFixed(4),t=Uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function C_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function I_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Nr(i){return i!==""}function cd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var P_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(i){return i.replace(P_,D_)}var L_=new Map;function D_(i,e){let t=tt[e];if(t===void 0){let n=L_.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Uc(t)}var U_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ud(i){return i.replace(U_,N_)}function N_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function O_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===no?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function F_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Js:case $s:e="ENVMAP_TYPE_CUBE";break;case Na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function B_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function z_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vd:e="ENVMAP_BLENDING_MULTIPLY";break;case Up:e="ENVMAP_BLENDING_MIX";break;case Np:e="ENVMAP_BLENDING_ADD";break}return e}function k_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function H_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=O_(t),c=F_(t),h=B_(t),u=z_(t),d=k_(t),f=R_(t),m=C_(r),x=s.createProgram(),g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Nr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Nr).join(`
`),p.length>0&&(p+=`
`)):(g=[dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),p=[dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?tt.tonemapping_pars_fragment:"",t.toneMapping!==Ni?E_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,T_("linearToOutputTexel",t.outputColorSpace),A_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nr).join(`
`)),o=Uc(o),o=cd(o,t),o=hd(o,t),a=Uc(a),a=cd(a,t),a=hd(a,t),o=ud(o),a=ud(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=y+g+o,_=y+p+a,I=od(s,s.VERTEX_SHADER,v),T=od(s,s.FRAGMENT_SHADER,_);s.attachShader(x,I),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(L){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(x).trim(),z=s.getShaderInfoLog(I).trim(),k=s.getShaderInfoLog(T).trim(),ee=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,T);else{let le=ld(s,I,"vertex"),Y=ld(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+le+`
`+Y)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||k==="")&&(V=!1);V&&(L.diagnostics={runnable:ee,programLog:H,vertexShader:{log:z,prefix:g},fragmentShader:{log:k,prefix:p}})}s.deleteShader(I),s.deleteShader(T),P=new Zs(s,x),S=I_(s,x)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,M_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=b_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=T,this}var V_=0,Nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Oc(e),t.set(e,n)),n}},Oc=class{constructor(e){this.id=V_++,this.code=e,this.usedTimes=0}};function G_(i,e,t,n,s,r,o){let a=new ra,l=new Nc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,b,L,H,z){let k=H.fog,ee=z.geometry,V=S.isMeshStandardMaterial?H.environment:null,le=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),Y=le&&le.mapping===Na?le.image.height:null,fe=m[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let de=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Se=de!==void 0?de.length:0,ke=0;ee.morphAttributes.position!==void 0&&(ke=1),ee.morphAttributes.normal!==void 0&&(ke=2),ee.morphAttributes.color!==void 0&&(ke=3);let $e,q,ie,ge;if(fe){let Z=Vn[fe];$e=Z.vertexShader,q=Z.fragmentShader}else $e=S.vertexShader,q=S.fragmentShader,l.update(S),ie=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);let ce=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),Ue=z.isInstancedMesh===!0,F=z.isBatchedMesh===!0,se=!!S.map,O=!!S.matcap,X=!!le,R=!!S.aoMap,J=!!S.lightMap,ne=!!S.bumpMap,pe=!!S.normalMap,ue=!!S.displacementMap,_e=!!S.emissiveMap,ae=!!S.metalnessMap,E=!!S.roughnessMap,M=S.anisotropy>0,B=S.clearcoat>0,$=S.dispersion>0,oe=S.iridescence>0,j=S.sheen>0,Le=S.transmission>0,xe=M&&!!S.anisotropyMap,Ee=B&&!!S.clearcoatMap,je=B&&!!S.clearcoatNormalMap,he=B&&!!S.clearcoatRoughnessMap,Ae=oe&&!!S.iridescenceMap,He=oe&&!!S.iridescenceThicknessMap,We=j&&!!S.sheenColorMap,De=j&&!!S.sheenRoughnessMap,ot=!!S.specularMap,Ke=!!S.specularColorMap,vt=!!S.specularIntensityMap,D=Le&&!!S.transmissionMap,ye=Le&&!!S.thicknessMap,K=!!S.gradientMap,re=!!S.alphaMap,Me=S.alphaTest>0,we=!!S.alphaHash,qe=!!S.extensions,St=Ni;S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(St=i.toneMapping);let Vt={shaderID:fe,shaderType:S.type,shaderName:S.name,vertexShader:$e,fragmentShader:q,defines:S.defines,customVertexShaderID:ie,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:F,batchingColor:F&&z._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&z.instanceColor!==null,instancingMorph:Ue&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:nn,alphaToCoverage:!!S.alphaToCoverage,map:se,matcap:O,envMap:X,envMapMode:X&&le.mapping,envMapCubeUVHeight:Y,aoMap:R,lightMap:J,bumpMap:ne,normalMap:pe,displacementMap:d&&ue,emissiveMap:_e,normalMapObjectSpace:pe&&S.normalMapType===qp,normalMapTangentSpace:pe&&S.normalMapType===ef,metalnessMap:ae,roughnessMap:E,anisotropy:M,anisotropyMap:xe,clearcoat:B,clearcoatMap:Ee,clearcoatNormalMap:je,clearcoatRoughnessMap:he,dispersion:$,iridescence:oe,iridescenceMap:Ae,iridescenceThicknessMap:He,sheen:j,sheenColorMap:We,sheenRoughnessMap:De,specularMap:ot,specularColorMap:Ke,specularIntensityMap:vt,transmission:Le,transmissionMap:D,thicknessMap:ye,gradientMap:K,opaque:S.transparent===!1&&S.blending===Ui&&S.alphaToCoverage===!1,alphaMap:re,alphaTest:Me,alphaHash:we,combine:S.combine,mapUv:se&&x(S.map.channel),aoMapUv:R&&x(S.aoMap.channel),lightMapUv:J&&x(S.lightMap.channel),bumpMapUv:ne&&x(S.bumpMap.channel),normalMapUv:pe&&x(S.normalMap.channel),displacementMapUv:ue&&x(S.displacementMap.channel),emissiveMapUv:_e&&x(S.emissiveMap.channel),metalnessMapUv:ae&&x(S.metalnessMap.channel),roughnessMapUv:E&&x(S.roughnessMap.channel),anisotropyMapUv:xe&&x(S.anisotropyMap.channel),clearcoatMapUv:Ee&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:je&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:He&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:We&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(S.sheenRoughnessMap.channel),specularMapUv:ot&&x(S.specularMap.channel),specularColorMapUv:Ke&&x(S.specularColorMap.channel),specularIntensityMapUv:vt&&x(S.specularIntensityMap.channel),transmissionMapUv:D&&x(S.transmissionMap.channel),thicknessMapUv:ye&&x(S.thicknessMap.channel),alphaMapUv:re&&x(S.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(pe||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!ee.attributes.uv&&(se||re),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ce,skinning:z.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:ke,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,decodeVideoTexture:se&&S.map.isVideoTexture===!0&&at.getTransfer(S.map.colorSpace)===bt,decodeVideoTextureEmissive:_e&&S.emissiveMap.isVideoTexture===!0&&at.getTransfer(S.emissiveMap.colorSpace)===bt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Bt,flipSided:S.side===fn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:qe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&S.extensions.multiDraw===!0||F)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function p(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)b.push(L),b.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(y(b,S),v(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function y(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function v(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){let b=m[S.type],L;if(b){let H=Vn[b];L=Dm.clone(H.uniforms)}else L=S.uniforms;return L}function I(S,b){let L;for(let H=0,z=h.length;H<z;H++){let k=h[H];if(k.cacheKey===b){L=k,++L.usedTimes;break}}return L===void 0&&(L=new H_(i,b,S,r),h.push(L)),L}function T(S){if(--S.usedTimes===0){let b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function A(S){l.remove(S)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:I,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:P}}function W_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function X_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function fd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,m,x,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),e++,p}function a(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||X_),n.length>1&&n.sort(d||fd),s.length>1&&s.sort(d||fd)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function q_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new pd,i.set(n,[o])):s>=r.length?(o=new pd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Y_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Te};break;case"SpotLight":t={position:new C,direction:new C,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function Z_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var K_=0;function J_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $_(i){let e=new Y_,t=Z_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new Ve,o=new Ve;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,y=0,v=0,_=0,I=0,T=0,A=0;c.sort(J_);for(let S=0,b=c.length;S<b;S++){let L=c[S],H=L.color,z=L.intensity,k=L.distance,ee=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=H.r*z,u+=H.g*z,d+=H.b*z;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],z);A++}else if(L.isDirectionalLight){let V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let le=L.shadow,Y=t.get(L);Y.shadowIntensity=le.intensity,Y.shadowBias=le.bias,Y.shadowNormalBias=le.normalBias,Y.shadowRadius=le.radius,Y.shadowMapSize=le.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=ee,n.directionalShadowMatrix[f]=L.shadow.matrix,y++}n.directional[f]=V,f++}else if(L.isSpotLight){let V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(H).multiplyScalar(z),V.distance=k,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[x]=V;let le=L.shadow;if(L.map&&(n.spotLightMap[I]=L.map,I++,le.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[x]=le.matrix,L.castShadow){let Y=t.get(L);Y.shadowIntensity=le.intensity,Y.shadowBias=le.bias,Y.shadowNormalBias=le.normalBias,Y.shadowRadius=le.radius,Y.shadowMapSize=le.mapSize,n.spotShadow[x]=Y,n.spotShadowMap[x]=ee,_++}x++}else if(L.isRectAreaLight){let V=e.get(L);V.color.copy(H).multiplyScalar(z),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=V,g++}else if(L.isPointLight){let V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){let le=L.shadow,Y=t.get(L);Y.shadowIntensity=le.intensity,Y.shadowBias=le.bias,Y.shadowNormalBias=le.normalBias,Y.shadowRadius=le.radius,Y.shadowMapSize=le.mapSize,Y.shadowCameraNear=le.camera.near,Y.shadowCameraFar=le.camera.far,n.pointShadow[m]=Y,n.pointShadowMap[m]=ee,n.pointShadowMatrix[m]=L.shadow.matrix,v++}n.point[m]=V,m++}else if(L.isHemisphereLight){let V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(z),V.groundColor.copy(L.groundColor).multiplyScalar(z),n.hemi[p]=V,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==v||P.numSpotShadows!==_||P.numSpotMaps!==I||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+I-T,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,P.directionalLength=f,P.pointLength=m,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=v,P.numSpotShadows=_,P.numSpotMaps=I,P.numLightProbes=A,n.version=K_++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let v=c[p];if(v.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(v.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(v.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function md(i){let e=new $_(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function j_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new md(i),e.set(s,[a])):r>=o.length?(a=new md(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Fc=class extends ln{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bc=class extends ln{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ev=`uniform sampler2D shadow_pass;
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
}`;function tv(i,e,t){let n=new Xr,s=new Q,r=new Q,o=new ft,a=new Fc({depthPacking:Xp}),l=new Bc,c={},h=t.maxTextureSize,u={[Wn]:fn,[fn]:Wn,[Bt]:Bt},d=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:Q_,fragmentShader:ev}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new ct;m.setAttribute("position",new st(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ve(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hd;let p=this.type;this.render=function(T,A,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let S=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Di),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let z=p!==ai&&this.type===ai,k=p===ai&&this.type!==ai;for(let ee=0,V=T.length;ee<V;ee++){let le=T[ee],Y=le.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let fe=Y.getFrameExtents();if(s.multiply(fe),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/fe.x),s.x=r.x*fe.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/fe.y),s.y=r.y*fe.y,Y.mapSize.y=r.y)),Y.map===null||z===!0||k===!0){let Se=this.type!==ai?{minFilter:Qt,magFilter:Qt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new mi(s.x,s.y,Se),Y.map.texture.name=le.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let de=Y.getViewportCount();for(let Se=0;Se<de;Se++){let ke=Y.getViewport(Se);o.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),H.viewport(o),Y.updateMatrices(le,Se),n=Y.getFrustum(),_(A,P,Y.camera,le,this.type)}Y.isPointLightShadow!==!0&&this.type===ai&&y(Y,P),Y.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,b,L)};function y(T,A){let P=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new mi(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,P,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,P,f,x,null)}function v(T,A,P,S){let b=null,L=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)b=L;else if(b=P.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let H=b.uuid,z=A.uuid,k=c[H];k===void 0&&(k={},c[H]=k);let ee=k[z];ee===void 0&&(ee=b.clone(),k[z]=ee,A.addEventListener("dispose",I)),b=ee}if(b.visible=A.visible,b.wireframe=A.wireframe,S===ai?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let H=i.properties.get(b);H.light=P}return b}function _(T,A,P,S,b){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===ai)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let z=e.update(T),k=T.material;if(Array.isArray(k)){let ee=z.groups;for(let V=0,le=ee.length;V<le;V++){let Y=ee[V],fe=k[Y.materialIndex];if(fe&&fe.visible){let de=v(T,fe,S,b);T.onBeforeShadow(i,T,A,P,z,de,Y),i.renderBufferDirect(P,null,z,de,T,Y),T.onAfterShadow(i,T,A,P,z,de,Y)}}}else if(k.visible){let ee=v(T,k,S,b);T.onBeforeShadow(i,T,A,P,z,ee,null),i.renderBufferDirect(P,null,z,ee,T,null),T.onAfterShadow(i,T,A,P,z,ee,null)}}let H=T.children;for(let z=0,k=H.length;z<k;z++)_(H[z],A,P,S,b)}function I(T){T.target.removeEventListener("dispose",I);for(let P in c){let S=c[P],b=T.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var nv={[Wl]:Xl,[ql]:Kl,[Yl]:Jl,[Ks]:Zl,[Xl]:Wl,[Kl]:ql,[Jl]:Yl,[Zl]:Ks};function iv(i,e){function t(){let D=!1,ye=new ft,K=null,re=new ft(0,0,0,0);return{setMask:function(Me){K!==Me&&!D&&(i.colorMask(Me,Me,Me,Me),K=Me)},setLocked:function(Me){D=Me},setClear:function(Me,we,qe,St,Vt){Vt===!0&&(Me*=St,we*=St,qe*=St),ye.set(Me,we,qe,St),re.equals(ye)===!1&&(i.clearColor(Me,we,qe,St),re.copy(ye))},reset:function(){D=!1,K=null,re.set(-1,0,0,0)}}}function n(){let D=!1,ye=!1,K=null,re=null,Me=null;return{setReversed:function(we){if(ye!==we){let qe=e.get("EXT_clip_control");ye?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);let St=Me;Me=null,this.setClear(St)}ye=we},getReversed:function(){return ye},setTest:function(we){we?ce(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(we){K!==we&&!D&&(i.depthMask(we),K=we)},setFunc:function(we){if(ye&&(we=nv[we]),re!==we){switch(we){case Wl:i.depthFunc(i.NEVER);break;case Xl:i.depthFunc(i.ALWAYS);break;case ql:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case Yl:i.depthFunc(i.EQUAL);break;case Zl:i.depthFunc(i.GEQUAL);break;case Kl:i.depthFunc(i.GREATER);break;case Jl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=we}},setLocked:function(we){D=we},setClear:function(we){Me!==we&&(ye&&(we=1-we),i.clearDepth(we),Me=we)},reset:function(){D=!1,K=null,re=null,Me=null,ye=!1}}}function s(){let D=!1,ye=null,K=null,re=null,Me=null,we=null,qe=null,St=null,Vt=null;return{setTest:function(Z){D||(Z?ce(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(Z){ye!==Z&&!D&&(i.stencilMask(Z),ye=Z)},setFunc:function(Z,Ie,Ne){(K!==Z||re!==Ie||Me!==Ne)&&(i.stencilFunc(Z,Ie,Ne),K=Z,re=Ie,Me=Ne)},setOp:function(Z,Ie,Ne){(we!==Z||qe!==Ie||St!==Ne)&&(i.stencilOp(Z,Ie,Ne),we=Z,qe=Ie,St=Ne)},setLocked:function(Z){D=Z},setClear:function(Z){Vt!==Z&&(i.clearStencil(Z),Vt=Z)},reset:function(){D=!1,ye=null,K=null,re=null,Me=null,we=null,qe=null,St=null,Vt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,y=null,v=null,_=null,I=null,T=null,A=new Te(0,0,0),P=0,S=!1,b=null,L=null,H=null,z=null,k=null,ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,le=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=le>=1):Y.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=le>=2);let fe=null,de={},Se=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),$e=new ft().fromArray(Se),q=new ft().fromArray(ke);function ie(D,ye,K,re){let Me=new Uint8Array(4),we=i.createTexture();i.bindTexture(D,we),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<K;qe++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(ye+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return we}let ge={};ge[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(i.DEPTH_TEST),o.setFunc(Ks),ne(!1),pe(xu),ce(i.CULL_FACE),R(Di);function ce(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Ce(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Ue(D,ye){return u[D]!==ye?(i.bindFramebuffer(D,ye),u[D]=ye,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ye),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function F(D,ye){let K=f,re=!1;if(D){K=d.get(ye),K===void 0&&(K=[],d.set(ye,K));let Me=D.textures;if(K.length!==Me.length||K[0]!==i.COLOR_ATTACHMENT0){for(let we=0,qe=Me.length;we<qe;we++)K[we]=i.COLOR_ATTACHMENT0+we;K.length=Me.length,re=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,re=!0);re&&i.drawBuffers(K)}function se(D){return m!==D?(i.useProgram(D),m=D,!0):!1}let O={[ls]:i.FUNC_ADD,[xp]:i.FUNC_SUBTRACT,[_p]:i.FUNC_REVERSE_SUBTRACT};O[vp]=i.MIN,O[yp]=i.MAX;let X={[Mp]:i.ZERO,[bp]:i.ONE,[Sp]:i.SRC_COLOR,[Vl]:i.SRC_ALPHA,[Cp]:i.SRC_ALPHA_SATURATE,[Ap]:i.DST_COLOR,[Tp]:i.DST_ALPHA,[wp]:i.ONE_MINUS_SRC_COLOR,[Gl]:i.ONE_MINUS_SRC_ALPHA,[Rp]:i.ONE_MINUS_DST_COLOR,[Ep]:i.ONE_MINUS_DST_ALPHA,[Ip]:i.CONSTANT_COLOR,[Pp]:i.ONE_MINUS_CONSTANT_COLOR,[Lp]:i.CONSTANT_ALPHA,[Dp]:i.ONE_MINUS_CONSTANT_ALPHA};function R(D,ye,K,re,Me,we,qe,St,Vt,Z){if(D===Di){x===!0&&(Ce(i.BLEND),x=!1);return}if(x===!1&&(ce(i.BLEND),x=!0),D!==gp){if(D!==g||Z!==S){if((p!==ls||_!==ls)&&(i.blendEquation(i.FUNC_ADD),p=ls,_=ls),Z)switch(D){case Ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hr:i.blendFunc(i.ONE,i.ONE);break;case _u:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _u:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,v=null,I=null,T=null,A.set(0,0,0),P=0,g=D,S=Z}return}Me=Me||ye,we=we||K,qe=qe||re,(ye!==p||Me!==_)&&(i.blendEquationSeparate(O[ye],O[Me]),p=ye,_=Me),(K!==y||re!==v||we!==I||qe!==T)&&(i.blendFuncSeparate(X[K],X[re],X[we],X[qe]),y=K,v=re,I=we,T=qe),(St.equals(A)===!1||Vt!==P)&&(i.blendColor(St.r,St.g,St.b,Vt),A.copy(St),P=Vt),g=D,S=!1}function J(D,ye){D.side===Bt?Ce(i.CULL_FACE):ce(i.CULL_FACE);let K=D.side===fn;ye&&(K=!K),ne(K),D.blending===Ui&&D.transparent===!1?R(Di):R(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let re=D.stencilWrite;a.setTest(re),re&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),_e(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(D){b!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),b=D)}function pe(D){D!==pp?(ce(i.CULL_FACE),D!==L&&(D===xu?i.cullFace(i.BACK):D===mp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),L=D}function ue(D){D!==H&&(V&&i.lineWidth(D),H=D)}function _e(D,ye,K){D?(ce(i.POLYGON_OFFSET_FILL),(z!==ye||k!==K)&&(i.polygonOffset(ye,K),z=ye,k=K)):Ce(i.POLYGON_OFFSET_FILL)}function ae(D){D?ce(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function E(D){D===void 0&&(D=i.TEXTURE0+ee-1),fe!==D&&(i.activeTexture(D),fe=D)}function M(D,ye,K){K===void 0&&(fe===null?K=i.TEXTURE0+ee-1:K=fe);let re=de[K];re===void 0&&(re={type:void 0,texture:void 0},de[K]=re),(re.type!==D||re.texture!==ye)&&(fe!==K&&(i.activeTexture(K),fe=K),i.bindTexture(D,ye||ge[D]),re.type=D,re.texture=ye)}function B(){let D=de[fe];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function je(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(D){$e.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),$e.copy(D))}function De(D){q.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function ot(D,ye){let K=c.get(ye);K===void 0&&(K=new WeakMap,c.set(ye,K));let re=K.get(D);re===void 0&&(re=i.getUniformBlockIndex(ye,D.name),K.set(D,re))}function Ke(D,ye){let re=c.get(ye).get(D);l.get(ye)!==re&&(i.uniformBlockBinding(ye,re,D.__bindingPointIndex),l.set(ye,re))}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},fe=null,de={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,y=null,v=null,_=null,I=null,T=null,A=new Te(0,0,0),P=0,S=!1,b=null,L=null,H=null,z=null,k=null,$e.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ce,disable:Ce,bindFramebuffer:Ue,drawBuffers:F,useProgram:se,setBlending:R,setMaterial:J,setFlipSided:ne,setCullFace:pe,setLineWidth:ue,setPolygonOffset:_e,setScissorTest:ae,activeTexture:E,bindTexture:M,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:oe,texImage2D:Ae,texImage3D:He,updateUBOMapping:ot,uniformBlockBinding:Ke,texStorage2D:je,texStorage3D:he,texSubImage2D:j,texSubImage3D:Le,compressedTexSubImage2D:xe,compressedTexSubImage3D:Ee,scissor:We,viewport:De,reset:vt}}function gd(i,e,t,n){let s=sv(n);switch(t){case Yd:return i*e;case Kd:return i*e;case Jd:return i*e*2;case lh:return i*e/s.components*s.byteLength;case ch:return i*e/s.components*s.byteLength;case $d:return i*e*2/s.components*s.byteLength;case hh:return i*e*2/s.components*s.byteLength;case Zd:return i*e*3/s.components*s.byteLength;case bn:return i*e*4/s.components*s.byteLength;case uh:return i*e*4/s.components*s.byteLength;case $o:case jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qo:case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ec:case nc:return Math.max(i,16)*Math.max(e,8)/4;case Ql:case tc:return Math.max(i,8)*Math.max(e,8)/2;case ic:case sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case lc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case cc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case uc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case dc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case fc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case pc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case mc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case gc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case _c:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case vc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ta:case yc:case Mc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case jd:case bc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Sc:case wc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sv(i){switch(i){case pi:case Wd:return{byteLength:1,components:1};case Gr:case Xd:case so:return{byteLength:2,components:1};case oh:case ah:return{byteLength:2,components:4};case hs:case rh:case Fn:return{byteLength:4,components:1};case qd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function rv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,M){return f?new OffscreenCanvas(E,M):Wr("canvas")}function x(E,M,B){let $=1,oe=ae(E);if((oe.width>B||oe.height>B)&&($=B/Math.max(oe.width,oe.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let j=Math.floor($*oe.width),Le=Math.floor($*oe.height);u===void 0&&(u=m(j,Le));let xe=M?m(j,Le):u;return xe.width=j,xe.height=Le,xe.getContext("2d").drawImage(E,0,0,j,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+j+"x"+Le+")."),xe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),E;return E}function g(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(E,M,B,$,oe=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let j=M;if(M===i.RED&&(B===i.FLOAT&&(j=i.R32F),B===i.HALF_FLOAT&&(j=i.R16F),B===i.UNSIGNED_BYTE&&(j=i.R8)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.R8UI),B===i.UNSIGNED_SHORT&&(j=i.R16UI),B===i.UNSIGNED_INT&&(j=i.R32UI),B===i.BYTE&&(j=i.R8I),B===i.SHORT&&(j=i.R16I),B===i.INT&&(j=i.R32I)),M===i.RG&&(B===i.FLOAT&&(j=i.RG32F),B===i.HALF_FLOAT&&(j=i.RG16F),B===i.UNSIGNED_BYTE&&(j=i.RG8)),M===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RG8UI),B===i.UNSIGNED_SHORT&&(j=i.RG16UI),B===i.UNSIGNED_INT&&(j=i.RG32UI),B===i.BYTE&&(j=i.RG8I),B===i.SHORT&&(j=i.RG16I),B===i.INT&&(j=i.RG32I)),M===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGB8UI),B===i.UNSIGNED_SHORT&&(j=i.RGB16UI),B===i.UNSIGNED_INT&&(j=i.RGB32UI),B===i.BYTE&&(j=i.RGB8I),B===i.SHORT&&(j=i.RGB16I),B===i.INT&&(j=i.RGB32I)),M===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),B===i.UNSIGNED_INT&&(j=i.RGBA32UI),B===i.BYTE&&(j=i.RGBA8I),B===i.SHORT&&(j=i.RGBA16I),B===i.INT&&(j=i.RGBA32I)),M===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),M===i.RGBA){let Le=oe?Fa:at.getTransfer($);B===i.FLOAT&&(j=i.RGBA32F),B===i.HALF_FLOAT&&(j=i.RGBA16F),B===i.UNSIGNED_BYTE&&(j=Le===bt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function _(E,M){let B;return E?M===null||M===hs||M===js?B=i.DEPTH24_STENCIL8:M===Fn?B=i.DEPTH32F_STENCIL8:M===Gr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===hs||M===js?B=i.DEPTH_COMPONENT24:M===Fn?B=i.DEPTH_COMPONENT32F:M===Gr&&(B=i.DEPTH_COMPONENT16),B}function I(E,M){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Qt&&E.minFilter!==dn?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function T(E){let M=E.target;M.removeEventListener("dispose",T),P(M),M.isVideoTexture&&h.delete(M)}function A(E){let M=E.target;M.removeEventListener("dispose",A),b(M)}function P(E){let M=n.get(E);if(M.__webglInit===void 0)return;let B=E.source,$=d.get(B);if($){let oe=$[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&S(E),Object.keys($).length===0&&d.delete(B)}n.remove(E)}function S(E){let M=n.get(E);i.deleteTexture(M.__webglTexture);let B=E.source,$=d.get(B);delete $[M.__cacheKey],o.memory.textures--}function b(E){let M=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let oe=0;oe<M.__webglFramebuffer[$].length;oe++)i.deleteFramebuffer(M.__webglFramebuffer[$][oe]);else i.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)i.deleteFramebuffer(M.__webglFramebuffer[$]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let B=E.textures;for(let $=0,oe=B.length;$<oe;$++){let j=n.get(B[$]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(B[$])}n.remove(E)}let L=0;function H(){L=0}function z(){let E=L;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),L+=1,E}function k(E){let M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function ee(E,M){let B=n.get(E);if(E.isVideoTexture&&ue(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){let $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,E,M);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function V(E,M){let B=n.get(E);if(E.version>0&&B.__version!==E.version){q(B,E,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function le(E,M){let B=n.get(E);if(E.version>0&&B.__version!==E.version){q(B,E,M);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function Y(E,M){let B=n.get(E);if(E.version>0&&B.__version!==E.version){ie(B,E,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}let fe={[fi]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[Vr]:i.MIRRORED_REPEAT},de={[Qt]:i.NEAREST,[sh]:i.NEAREST_MIPMAP_NEAREST,[Vs]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Or]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},Se={[Yp]:i.NEVER,[Qp]:i.ALWAYS,[Zp]:i.LESS,[tf]:i.LEQUAL,[Kp]:i.EQUAL,[jp]:i.GEQUAL,[Jp]:i.GREATER,[$p]:i.NOTEQUAL};function ke(E,M){if(M.type===Fn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===dn||M.magFilter===Or||M.magFilter===Vs||M.magFilter===Gn||M.minFilter===dn||M.minFilter===Or||M.minFilter===Vs||M.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,fe[M.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,fe[M.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,fe[M.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,de[M.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,de[M.minFilter]),M.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Se[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Qt||M.minFilter!==Vs&&M.minFilter!==Gn||M.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function $e(E,M){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",T));let $=M.source,oe=d.get($);oe===void 0&&(oe={},d.set($,oe));let j=k(M);if(j!==E.__cacheKey){oe[j]===void 0&&(oe[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),oe[j].usedTimes++;let Le=oe[E.__cacheKey];Le!==void 0&&(oe[E.__cacheKey].usedTimes--,Le.usedTimes===0&&S(M)),E.__cacheKey=j,E.__webglTexture=oe[j].texture}return B}function q(E,M,B){let $=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=i.TEXTURE_3D);let oe=$e(E,M),j=M.source;t.bindTexture($,E.__webglTexture,i.TEXTURE0+B);let Le=n.get(j);if(j.version!==Le.__version||oe===!0){t.activeTexture(i.TEXTURE0+B);let xe=at.getPrimaries(at.workingColorSpace),Ee=M.colorSpace===Pi?null:at.getPrimaries(M.colorSpace),je=M.colorSpace===Pi||xe===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let he=x(M.image,!1,s.maxTextureSize);he=_e(M,he);let Ae=r.convert(M.format,M.colorSpace),He=r.convert(M.type),We=v(M.internalFormat,Ae,He,M.colorSpace,M.isVideoTexture);ke($,M);let De,ot=M.mipmaps,Ke=M.isVideoTexture!==!0,vt=Le.__version===void 0||oe===!0,D=j.dataReady,ye=I(M,he);if(M.isDepthTexture)We=_(M.format===Qs,M.type),vt&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,We,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,We,he.width,he.height,0,Ae,He,null));else if(M.isDataTexture)if(ot.length>0){Ke&&vt&&t.texStorage2D(i.TEXTURE_2D,ye,We,ot[0].width,ot[0].height);for(let K=0,re=ot.length;K<re;K++)De=ot[K],Ke?D&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,De.width,De.height,Ae,He,De.data):t.texImage2D(i.TEXTURE_2D,K,We,De.width,De.height,0,Ae,He,De.data);M.generateMipmaps=!1}else Ke?(vt&&t.texStorage2D(i.TEXTURE_2D,ye,We,he.width,he.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he.width,he.height,Ae,He,he.data)):t.texImage2D(i.TEXTURE_2D,0,We,he.width,he.height,0,Ae,He,he.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ke&&vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,We,ot[0].width,ot[0].height,he.depth);for(let K=0,re=ot.length;K<re;K++)if(De=ot[K],M.format!==bn)if(Ae!==null)if(Ke){if(D)if(M.layerUpdates.size>0){let Me=gd(De.width,De.height,M.format,M.type);for(let we of M.layerUpdates){let qe=De.data.subarray(we*Me/De.data.BYTES_PER_ELEMENT,(we+1)*Me/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,we,De.width,De.height,1,Ae,qe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,De.width,De.height,he.depth,Ae,De.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,We,De.width,De.height,he.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,De.width,De.height,he.depth,Ae,He,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,We,De.width,De.height,he.depth,0,Ae,He,De.data)}else{Ke&&vt&&t.texStorage2D(i.TEXTURE_2D,ye,We,ot[0].width,ot[0].height);for(let K=0,re=ot.length;K<re;K++)De=ot[K],M.format!==bn?Ae!==null?Ke?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,De.width,De.height,Ae,De.data):t.compressedTexImage2D(i.TEXTURE_2D,K,We,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?D&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,De.width,De.height,Ae,He,De.data):t.texImage2D(i.TEXTURE_2D,K,We,De.width,De.height,0,Ae,He,De.data)}else if(M.isDataArrayTexture)if(Ke){if(vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,We,he.width,he.height,he.depth),D)if(M.layerUpdates.size>0){let K=gd(he.width,he.height,M.format,M.type);for(let re of M.layerUpdates){let Me=he.data.subarray(re*K/he.data.BYTES_PER_ELEMENT,(re+1)*K/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,he.width,he.height,1,Ae,He,Me)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ae,He,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,he.width,he.height,he.depth,0,Ae,He,he.data);else if(M.isData3DTexture)Ke?(vt&&t.texStorage3D(i.TEXTURE_3D,ye,We,he.width,he.height,he.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ae,He,he.data)):t.texImage3D(i.TEXTURE_3D,0,We,he.width,he.height,he.depth,0,Ae,He,he.data);else if(M.isFramebufferTexture){if(vt)if(Ke)t.texStorage2D(i.TEXTURE_2D,ye,We,he.width,he.height);else{let K=he.width,re=he.height;for(let Me=0;Me<ye;Me++)t.texImage2D(i.TEXTURE_2D,Me,We,K,re,0,Ae,He,null),K>>=1,re>>=1}}else if(ot.length>0){if(Ke&&vt){let K=ae(ot[0]);t.texStorage2D(i.TEXTURE_2D,ye,We,K.width,K.height)}for(let K=0,re=ot.length;K<re;K++)De=ot[K],Ke?D&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Ae,He,De):t.texImage2D(i.TEXTURE_2D,K,We,Ae,He,De);M.generateMipmaps=!1}else if(Ke){if(vt){let K=ae(he);t.texStorage2D(i.TEXTURE_2D,ye,We,K.width,K.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,He,he)}else t.texImage2D(i.TEXTURE_2D,0,We,Ae,He,he);g(M)&&p($),Le.__version=j.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function ie(E,M,B){if(M.image.length!==6)return;let $=$e(E,M),oe=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);let j=n.get(oe);if(oe.version!==j.__version||$===!0){t.activeTexture(i.TEXTURE0+B);let Le=at.getPrimaries(at.workingColorSpace),xe=M.colorSpace===Pi?null:at.getPrimaries(M.colorSpace),Ee=M.colorSpace===Pi||Le===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let je=M.isCompressedTexture||M.image[0].isCompressedTexture,he=M.image[0]&&M.image[0].isDataTexture,Ae=[];for(let re=0;re<6;re++)!je&&!he?Ae[re]=x(M.image[re],!0,s.maxCubemapSize):Ae[re]=he?M.image[re].image:M.image[re],Ae[re]=_e(M,Ae[re]);let He=Ae[0],We=r.convert(M.format,M.colorSpace),De=r.convert(M.type),ot=v(M.internalFormat,We,De,M.colorSpace),Ke=M.isVideoTexture!==!0,vt=j.__version===void 0||$===!0,D=oe.dataReady,ye=I(M,He);ke(i.TEXTURE_CUBE_MAP,M);let K;if(je){Ke&&vt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,ot,He.width,He.height);for(let re=0;re<6;re++){K=Ae[re].mipmaps;for(let Me=0;Me<K.length;Me++){let we=K[Me];M.format!==bn?We!==null?Ke?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me,0,0,we.width,we.height,We,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me,ot,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me,0,0,we.width,we.height,We,De,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me,ot,we.width,we.height,0,We,De,we.data)}}}else{if(K=M.mipmaps,Ke&&vt){K.length>0&&ye++;let re=ae(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,ot,re.width,re.height)}for(let re=0;re<6;re++)if(he){Ke?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ae[re].width,Ae[re].height,We,De,Ae[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ot,Ae[re].width,Ae[re].height,0,We,De,Ae[re].data);for(let Me=0;Me<K.length;Me++){let qe=K[Me].image[re].image;Ke?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me+1,0,0,qe.width,qe.height,We,De,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me+1,ot,qe.width,qe.height,0,We,De,qe.data)}}else{Ke?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,We,De,Ae[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ot,We,De,Ae[re]);for(let Me=0;Me<K.length;Me++){let we=K[Me];Ke?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me+1,0,0,We,De,we.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me+1,ot,We,De,we.image[re])}}}g(M)&&p(i.TEXTURE_CUBE_MAP),j.__version=oe.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function ge(E,M,B,$,oe,j){let Le=r.convert(B.format,B.colorSpace),xe=r.convert(B.type),Ee=v(B.internalFormat,Le,xe,B.colorSpace),je=n.get(M),he=n.get(B);if(he.__renderTarget=M,!je.__hasExternalTextures){let Ae=Math.max(1,M.width>>j),He=Math.max(1,M.height>>j);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,j,Ee,Ae,He,M.depth,0,Le,xe,null):t.texImage2D(oe,j,Ee,Ae,He,0,Le,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),pe(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,oe,he.__webglTexture,0,ne(M)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,oe,he.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(E,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),M.depthBuffer){let $=M.depthTexture,oe=$&&$.isDepthTexture?$.type:null,j=_(M.stencilBuffer,oe),Le=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=ne(M);pe(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,j,M.width,M.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,j,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,j,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,E)}else{let $=M.textures;for(let oe=0;oe<$.length;oe++){let j=$[oe],Le=r.convert(j.format,j.colorSpace),xe=r.convert(j.type),Ee=v(j.internalFormat,Le,xe,j.colorSpace),je=ne(M);B&&pe(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,je,Ee,M.width,M.height):pe(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je,Ee,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee(M.depthTexture,0);let oe=$.__webglTexture,j=ne(M);if(M.depthTexture.format===Xs)pe(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(M.depthTexture.format===Qs)pe(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Ue(E){let M=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){let $=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){let oe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",oe)};$.addEventListener("dispose",oe),M.__depthDisposeCallback=oe}M.__boundDepthTexture=$}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ce(M.__webglFramebuffer,E)}else if(B){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=i.createRenderbuffer(),ce(M.__webglDepthbuffer[$],E,!1);else{let oe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,j)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ce(M.__webglDepthbuffer,E,!1);else{let $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,oe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function F(E,M,B){let $=n.get(E);M!==void 0&&ge($.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ue(E)}function se(E){let M=E.texture,B=n.get(E),$=n.get(M);E.addEventListener("dispose",A);let oe=E.textures,j=E.isWebGLCubeRenderTarget===!0,Le=oe.length>1;if(Le||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=M.version,o.memory.textures++),j){B.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[xe]=[];for(let Ee=0;Ee<M.mipmaps.length;Ee++)B.__webglFramebuffer[xe][Ee]=i.createFramebuffer()}else B.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let xe=0;xe<M.mipmaps.length;xe++)B.__webglFramebuffer[xe]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Le)for(let xe=0,Ee=oe.length;xe<Ee;xe++){let je=n.get(oe[xe]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&pe(E)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let xe=0;xe<oe.length;xe++){let Ee=oe[xe];B.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[xe]);let je=r.convert(Ee.format,Ee.colorSpace),he=r.convert(Ee.type),Ae=v(Ee.internalFormat,je,he,Ee.colorSpace,E.isXRRenderTarget===!0),He=ne(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Ae,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,B.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ke(i.TEXTURE_CUBE_MAP,M);for(let xe=0;xe<6;xe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)ge(B.__webglFramebuffer[xe][Ee],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ee);else ge(B.__webglFramebuffer[xe],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);g(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let xe=0,Ee=oe.length;xe<Ee;xe++){let je=oe[xe],he=n.get(je);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),ke(i.TEXTURE_2D,je),ge(B.__webglFramebuffer,E,je,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),g(je)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(xe=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,$.__webglTexture),ke(xe,M),M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)ge(B.__webglFramebuffer[Ee],E,M,i.COLOR_ATTACHMENT0,xe,Ee);else ge(B.__webglFramebuffer,E,M,i.COLOR_ATTACHMENT0,xe,0);g(M)&&p(xe),t.unbindTexture()}E.depthBuffer&&Ue(E)}function O(E){let M=E.textures;for(let B=0,$=M.length;B<$;B++){let oe=M[B];if(g(oe)){let j=y(E),Le=n.get(oe).__webglTexture;t.bindTexture(j,Le),p(j),t.unbindTexture()}}}let X=[],R=[];function J(E){if(E.samples>0){if(pe(E)===!1){let M=E.textures,B=E.width,$=E.height,oe=i.COLOR_BUFFER_BIT,j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(E),xe=M.length>1;if(xe)for(let Ee=0;Ee<M.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ee=0;Ee<M.length;Ee++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ee]);let je=n.get(M[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,je,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,oe,i.NEAREST),l===!0&&(X.length=0,R.length=0,X.push(i.COLOR_ATTACHMENT0+Ee),E.depthBuffer&&E.resolveDepthBuffer===!1&&(X.push(j),R.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,X))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let Ee=0;Ee<M.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ee]);let je=n.get(M[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let M=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ne(E){return Math.min(s.maxSamples,E.samples)}function pe(E){let M=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ue(E){let M=o.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function _e(E,M){let B=E.colorSpace,$=E.format,oe=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==nn&&B!==Pi&&(at.getTransfer(B)===bt?($!==bn||oe!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function ae(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=ee,this.setTexture2DArray=V,this.setTexture3D=le,this.setTextureCube=Y,this.rebindTextures=F,this.setupRenderTarget=se,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=pe}function ov(i,e){function t(n,s=Pi){let r,o=at.getTransfer(s);if(n===pi)return i.UNSIGNED_BYTE;if(n===oh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ah)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wd)return i.BYTE;if(n===Xd)return i.SHORT;if(n===Gr)return i.UNSIGNED_SHORT;if(n===rh)return i.INT;if(n===hs)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===so)return i.HALF_FLOAT;if(n===Yd)return i.ALPHA;if(n===Zd)return i.RGB;if(n===bn)return i.RGBA;if(n===Kd)return i.LUMINANCE;if(n===Jd)return i.LUMINANCE_ALPHA;if(n===Xs)return i.DEPTH_COMPONENT;if(n===Qs)return i.DEPTH_STENCIL;if(n===lh)return i.RED;if(n===ch)return i.RED_INTEGER;if(n===$d)return i.RG;if(n===hh)return i.RG_INTEGER;if(n===uh)return i.RGBA_INTEGER;if(n===$o||n===jo||n===Qo||n===ea)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ql||n===ec||n===tc||n===nc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ic||n===sc||n===rc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ic||n===sc)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc||n===_c||n===vc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ac)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_c)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ta||n===yc||n===Mc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ta)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jd||n===bc||n===Sc||n===wc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ta)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var zc=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ut=class extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}},av={type:"move"},Br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(av)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},lv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cv=`
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

}`,kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Zt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ht({vertexShader:lv,fragmentShader:cv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ve(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hc=class extends Fi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,x=new kc,g=t.getContextAttributes(),p=null,y=null,v=[],_=[],I=new Q,T=null,A=new Ft;A.viewport=new ft;let P=new Ft;P.viewport=new ft;let S=[A,P],b=new zc,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=v[q];return ie===void 0&&(ie=new Br,v[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=v[q];return ie===void 0&&(ie=new Br,v[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=v[q];return ie===void 0&&(ie=new Br,v[q]=ie),ie.getHandSpace()};function z(q){let ie=_.indexOf(q.inputSource);if(ie===-1)return;let ge=v[ie];ge!==void 0&&(ge.update(q.inputSource,q.frame,c||o),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",ee);for(let q=0;q<v.length;q++){let ie=_[q];ie!==null&&(_[q]=null,v[q].disconnect(ie))}L=null,H=null,x.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",k),s.addEventListener("inputsourceschange",ee),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){let ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new mi(f.framebufferWidth,f.framebufferHeight,{format:bn,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ie=null,ge=null,ce=null;g.depth&&(ce=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=g.stencil?Qs:Xs,ge=g.stencil?js:hs);let Ce={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ce),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new mi(d.textureWidth,d.textureHeight,{format:bn,type:pi,depthTexture:new ha(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$e.setContext(s),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ee(q){for(let ie=0;ie<q.removed.length;ie++){let ge=q.removed[ie],ce=_.indexOf(ge);ce>=0&&(_[ce]=null,v[ce].disconnect(ge))}for(let ie=0;ie<q.added.length;ie++){let ge=q.added[ie],ce=_.indexOf(ge);if(ce===-1){for(let Ue=0;Ue<v.length;Ue++)if(Ue>=_.length){_.push(ge),ce=Ue;break}else if(_[Ue]===null){_[Ue]=ge,ce=Ue;break}if(ce===-1)break}let Ce=v[ce];Ce&&Ce.connect(ge)}}let V=new C,le=new C;function Y(q,ie,ge){V.setFromMatrixPosition(ie.matrixWorld),le.setFromMatrixPosition(ge.matrixWorld);let ce=V.distanceTo(le),Ce=ie.projectionMatrix.elements,Ue=ge.projectionMatrix.elements,F=Ce[14]/(Ce[10]-1),se=Ce[14]/(Ce[10]+1),O=(Ce[9]+1)/Ce[5],X=(Ce[9]-1)/Ce[5],R=(Ce[8]-1)/Ce[0],J=(Ue[8]+1)/Ue[0],ne=F*R,pe=F*J,ue=ce/(-R+J),_e=ue*-R;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(_e),q.translateZ(ue),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ce[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let ae=F+ue,E=se+ue,M=ne-_e,B=pe+(ce-_e),$=O*se/E*ae,oe=X*se/E*ae;q.projectionMatrix.makePerspective(M,B,$,oe,ae,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function fe(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ie=q.near,ge=q.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(ge=x.depthFar)),b.near=P.near=A.near=ie,b.far=P.far=A.far=ge,(L!==b.near||H!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,H=b.far),A.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,b.layers.mask=A.layers.mask|P.layers.mask;let ce=q.parent,Ce=b.cameras;fe(b,ce);for(let Ue=0;Ue<Ce.length;Ue++)fe(Ce[Ue],ce);Ce.length===2?Y(b,A,P):b.projectionMatrix.copy(A.projectionMatrix),de(q,b,ce)};function de(q,ie,ge){ge===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=nr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let Se=null;function ke(q,ie){if(h=ie.getViewerPose(c||o),m=ie,h!==null){let ge=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ce=!1;ge.length!==b.cameras.length&&(b.cameras.length=0,ce=!0);for(let Ue=0;Ue<ge.length;Ue++){let F=ge[Ue],se=null;if(f!==null)se=f.getViewport(F);else{let X=u.getViewSubImage(d,F);se=X.viewport,Ue===0&&(e.setRenderTargetTextures(y,X.colorTexture,d.ignoreDepthValues?void 0:X.depthStencilTexture),e.setRenderTarget(y))}let O=S[Ue];O===void 0&&(O=new Ft,O.layers.enable(Ue),O.viewport=new ft,S[Ue]=O),O.matrix.fromArray(F.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(F.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(se.x,se.y,se.width,se.height),Ue===0&&(b.matrix.copy(O.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ce===!0&&b.cameras.push(O)}let Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){let Ue=u.getDepthInformation(ge[0]);Ue&&Ue.isValid&&Ue.texture&&x.init(e,Ue,s.renderState)}}for(let ge=0;ge<v.length;ge++){let ce=_[ge],Ce=v[ge];ce!==null&&Ce!==void 0&&Ce.update(ce,ie,c||o)}Se&&Se(q,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),m=null}let $e=new of;$e.setAnimationLoop(ke),this.setAnimationLoop=function(q){Se=q},this.dispose=function(){}}},os=new Xn,hv=new Ve;function uv(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,rf(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===fn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===fn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=e.get(p),v=y.envMap,_=y.envMapRotation;v&&(g.envMap.value=v,os.copy(_),os.x*=-1,os.y*=-1,os.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),g.envMapRotation.value.setFromMatrix4(hv.makeRotationFromEuler(os)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dv(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let _=v.program;n.uniformBlockBinding(y,_)}function c(y,v){let _=s[y.id];_===void 0&&(m(y),_=h(y),s[y.id]=_,y.addEventListener("dispose",g));let I=v.program;n.updateUBOMapping(y,I);let T=e.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){let v=u();y.__bindingPointIndex=v;let _=i.createBuffer(),I=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,I,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=s[y.id],_=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,A=_.length;T<A;T++){let P=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,b=P.length;S<b;S++){let L=P[S];if(f(L,T,S,I)===!0){let H=L.__offset,z=Array.isArray(L.value)?L.value:[L.value],k=0;for(let ee=0;ee<z.length;ee++){let V=z[ee],le=x(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,H+k,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,k),k+=le.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,v,_,I){let T=y.value,A=v+"_"+_;if(I[A]===void 0)return typeof T=="number"||typeof T=="boolean"?I[A]=T:I[A]=T.clone(),!0;{let P=I[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return I[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function m(y){let v=y.uniforms,_=0,I=16;for(let A=0,P=v.length;A<P;A++){let S=Array.isArray(v[A])?v[A]:[v[A]];for(let b=0,L=S.length;b<L;b++){let H=S[b],z=Array.isArray(H.value)?H.value:[H.value];for(let k=0,ee=z.length;k<ee;k++){let V=z[k],le=x(V),Y=_%I,fe=Y%le.boundary,de=Y+fe;_+=fe,de!==0&&I-de<le.storage&&(_+=I-de),H.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=_,_+=le.storage}}}let T=_%I;return T>0&&(_+=I-T),y.__size=_,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function g(y){let v=y.target;v.removeEventListener("dispose",g);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var ki=class{constructor(e={}){let{canvas:t=gm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wt,this.toneMapping=Ni,this.toneMappingExposure=1;let _=this,I=!1,T=0,A=0,P=null,S=-1,b=null,L=new ft,H=new ft,z=null,k=new Te(0),ee=0,V=t.width,le=t.height,Y=1,fe=null,de=null,Se=new ft(0,0,V,le),ke=new ft(0,0,V,le),$e=!1,q=new Xr,ie=!1,ge=!1,ce=new Ve,Ce=new Ve,Ue=new C,F=new ft,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},O=!1;function X(){return P===null?Y:1}let R=n;function J(w,U){return t.getContext(w,U)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",we,!1),R===null){let U="webgl2";if(R=J(U,w),R===null)throw J(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ne,pe,ue,_e,ae,E,M,B,$,oe,j,Le,xe,Ee,je,he,Ae,He,We,De,ot,Ke,vt,D;function ye(){ne=new Rx(R),ne.init(),Ke=new ov(R,ne),pe=new bx(R,ne,e,Ke),ue=new iv(R,ne),pe.reverseDepthBuffer&&d&&ue.buffers.depth.setReversed(!0),_e=new Px(R),ae=new W_,E=new rv(R,ne,ue,ae,pe,Ke,_e),M=new wx(_),B=new Ax(_),$=new Bm(R),vt=new yx(R,$),oe=new Cx(R,$,_e,vt),j=new Dx(R,oe,$,_e),We=new Lx(R,pe,E),he=new Sx(ae),Le=new G_(_,M,B,ne,pe,vt,he),xe=new uv(_,ae),Ee=new q_,je=new j_(ne),He=new vx(_,M,B,ue,j,f,l),Ae=new tv(_,j,pe),D=new dv(R,_e,pe,ue),De=new Mx(R,ne,_e),ot=new Ix(R,ne,_e),_e.programs=Le.programs,_.capabilities=pe,_.extensions=ne,_.properties=ae,_.renderLists=Ee,_.shadowMap=Ae,_.state=ue,_.info=_e}ye();let K=new Hc(_,R);this.xr=K,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let w=ne.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ne.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(V,le,!1))},this.getSize=function(w){return w.set(V,le)},this.setSize=function(w,U,G=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,le=U,t.width=Math.floor(w*Y),t.height=Math.floor(U*Y),G===!0&&(t.style.width=w+"px",t.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(V*Y,le*Y).floor()},this.setDrawingBufferSize=function(w,U,G){V=w,le=U,Y=G,t.width=Math.floor(w*G),t.height=Math.floor(U*G),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(Se)},this.setViewport=function(w,U,G,W){w.isVector4?Se.set(w.x,w.y,w.z,w.w):Se.set(w,U,G,W),ue.viewport(L.copy(Se).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(ke)},this.setScissor=function(w,U,G,W){w.isVector4?ke.set(w.x,w.y,w.z,w.w):ke.set(w,U,G,W),ue.scissor(H.copy(ke).multiplyScalar(Y).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(w){ue.setScissorTest($e=w)},this.setOpaqueSort=function(w){fe=w},this.setTransparentSort=function(w){de=w},this.getClearColor=function(w){return w.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(w=!0,U=!0,G=!0){let W=0;if(w){let N=!1;if(P!==null){let me=P.texture.format;N=me===uh||me===hh||me===ch}if(N){let me=P.texture.type,Re=me===pi||me===hs||me===Gr||me===js||me===oh||me===ah,Oe=He.getClearColor(),Fe=He.getClearAlpha(),Ze=Oe.r,Qe=Oe.g,Be=Oe.b;Re?(m[0]=Ze,m[1]=Qe,m[2]=Be,m[3]=Fe,R.clearBufferuiv(R.COLOR,0,m)):(x[0]=Ze,x[1]=Qe,x[2]=Be,x[3]=Fe,R.clearBufferiv(R.COLOR,0,x))}else W|=R.COLOR_BUFFER_BIT}U&&(W|=R.DEPTH_BUFFER_BIT),G&&(W|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Ee.dispose(),je.dispose(),ae.dispose(),M.dispose(),B.dispose(),j.dispose(),vt.dispose(),D.dispose(),Le.dispose(),K.dispose(),K.removeEventListener("sessionstart",Pe),K.removeEventListener("sessionend",ht),Je.stop()};function re(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let w=_e.autoReset,U=Ae.enabled,G=Ae.autoUpdate,W=Ae.needsUpdate,N=Ae.type;ye(),_e.autoReset=w,Ae.enabled=U,Ae.autoUpdate=G,Ae.needsUpdate=W,Ae.type=N}function we(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function qe(w){let U=w.target;U.removeEventListener("dispose",qe),St(U)}function St(w){Vt(w),ae.remove(w)}function Vt(w){let U=ae.get(w).programs;U!==void 0&&(U.forEach(function(G){Le.releaseProgram(G)}),w.isShaderMaterial&&Le.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,G,W,N,me){U===null&&(U=se);let Re=N.isMesh&&N.matrixWorld.determinant()<0,Oe=vr(w,U,G,W,N);ue.setMaterial(W,Re);let Fe=G.index,Ze=1;if(W.wireframe===!0){if(Fe=oe.getWireframeAttribute(G),Fe===void 0)return;Ze=2}let Qe=G.drawRange,Be=G.attributes.position,dt=Qe.start*Ze,Et=(Qe.start+Qe.count)*Ze;me!==null&&(dt=Math.max(dt,me.start*Ze),Et=Math.min(Et,(me.start+me.count)*Ze)),Fe!==null?(dt=Math.max(dt,0),Et=Math.min(Et,Fe.count)):Be!=null&&(dt=Math.max(dt,0),Et=Math.min(Et,Be.count));let Rt=Et-dt;if(Rt<0||Rt===1/0)return;vt.setup(N,W,Oe,G,Fe);let un,gt=De;if(Fe!==null&&(un=$.get(Fe),gt=ot,gt.setIndex(un)),N.isMesh)W.wireframe===!0?(ue.setLineWidth(W.wireframeLinewidth*X()),gt.setMode(R.LINES)):gt.setMode(R.TRIANGLES);else if(N.isLine){let ze=W.linewidth;ze===void 0&&(ze=1),ue.setLineWidth(ze*X()),N.isLineSegments?gt.setMode(R.LINES):N.isLineLoop?gt.setMode(R.LINE_LOOP):gt.setMode(R.LINE_STRIP)}else N.isPoints?gt.setMode(R.POINTS):N.isSprite&&gt.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)gt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))gt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let ze=N._multiDrawStarts,ei=N._multiDrawCounts,xt=N._multiDrawCount,Ln=Fe?$.get(Fe).bytesPerElement:1,Ms=ae.get(W).currentProgram.getUniforms();for(let pn=0;pn<xt;pn++)Ms.setValue(R,"_gl_DrawID",pn),gt.render(ze[pn]/Ln,ei[pn])}else if(N.isInstancedMesh)gt.renderInstances(dt,Rt,N.count);else if(G.isInstancedBufferGeometry){let ze=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ei=Math.min(G.instanceCount,ze);gt.renderInstances(dt,Rt,ei)}else gt.render(dt,Rt)};function Z(w,U,G){w.transparent===!0&&w.side===Bt&&w.forceSinglePass===!1?(w.side=fn,w.needsUpdate=!0,qt(w,U,G),w.side=Wn,w.needsUpdate=!0,qt(w,U,G),w.side=Bt):qt(w,U,G)}this.compile=function(w,U,G=null){G===null&&(G=w),p=je.get(G),p.init(U),v.push(p),G.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),w!==G&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let W=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let me=N.material;if(me)if(Array.isArray(me))for(let Re=0;Re<me.length;Re++){let Oe=me[Re];Z(Oe,G,N),W.add(Oe)}else Z(me,G,N),W.add(me)}),v.pop(),p=null,W},this.compileAsync=function(w,U,G=null){let W=this.compile(w,U,G);return new Promise(N=>{function me(){if(W.forEach(function(Re){ae.get(Re).currentProgram.isReady()&&W.delete(Re)}),W.size===0){N(w);return}setTimeout(me,10)}ne.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Ie=null;function Ne(w){Ie&&Ie(w)}function Pe(){Je.stop()}function ht(){Je.start()}let Je=new of;Je.setAnimationLoop(Ne),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(w){Ie=w,K.setAnimationLoop(w),w===null?Je.stop():Je.start()},K.addEventListener("sessionstart",Pe),K.addEventListener("sessionend",ht),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(U),U=K.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,U,P),p=je.get(w,v.length),p.init(U),v.push(p),Ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Ce),ge=this.localClippingEnabled,ie=he.init(this.clippingPlanes,ge),g=Ee.get(w,y.length),g.init(),y.push(g),K.enabled===!0&&K.isPresenting===!0){let me=_.xr.getDepthSensingMesh();me!==null&&Xe(me,U,-1/0,_.sortObjects)}Xe(w,U,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(fe,de),O=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,O&&He.addToRenderList(g,w),this.info.render.frame++,ie===!0&&he.beginShadows();let G=p.state.shadowsArray;Ae.render(G,w,U),ie===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=g.opaque,N=g.transmissive;if(p.setupLights(),U.isArrayCamera){let me=U.cameras;if(N.length>0)for(let Re=0,Oe=me.length;Re<Oe;Re++){let Fe=me[Re];It(W,N,w,Fe)}O&&He.render(w);for(let Re=0,Oe=me.length;Re<Oe;Re++){let Fe=me[Re];hn(g,w,Fe,Fe.viewport)}}else N.length>0&&It(W,N,w,U),O&&He.render(w),hn(g,w,U);P!==null&&(E.updateMultisampleRenderTarget(P),E.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(_,w,U),vt.resetDefaultState(),S=-1,b=null,v.pop(),v.length>0?(p=v[v.length-1],ie===!0&&he.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Xe(w,U,G,W){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){W&&F.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ce);let Re=j.update(w),Oe=w.material;Oe.visible&&g.push(w,Re,Oe,G,F.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){let Re=j.update(w),Oe=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),F.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),F.copy(Re.boundingSphere.center)),F.applyMatrix4(w.matrixWorld).applyMatrix4(Ce)),Array.isArray(Oe)){let Fe=Re.groups;for(let Ze=0,Qe=Fe.length;Ze<Qe;Ze++){let Be=Fe[Ze],dt=Oe[Be.materialIndex];dt&&dt.visible&&g.push(w,Re,dt,G,F.z,Be)}}else Oe.visible&&g.push(w,Re,Oe,G,F.z,null)}}let me=w.children;for(let Re=0,Oe=me.length;Re<Oe;Re++)Xe(me[Re],U,G,W)}function hn(w,U,G,W){let N=w.opaque,me=w.transmissive,Re=w.transparent;p.setupLightsView(G),ie===!0&&he.setGlobalState(_.clippingPlanes,G),W&&ue.viewport(L.copy(W)),N.length>0&&zt(N,U,G),me.length>0&&zt(me,U,G),Re.length>0&&zt(Re,U,G),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function It(w,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new mi(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?so:pi,minFilter:Gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));let me=p.state.transmissionRenderTarget[W.id],Re=W.viewport||L;me.setSize(Re.z,Re.w);let Oe=_.getRenderTarget();_.setRenderTarget(me),_.getClearColor(k),ee=_.getClearAlpha(),ee<1&&_.setClearColor(16777215,.5),_.clear(),O&&He.render(G);let Fe=_.toneMapping;_.toneMapping=Ni;let Ze=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),ie===!0&&he.setGlobalState(_.clippingPlanes,W),zt(w,G,W),E.updateMultisampleRenderTarget(me),E.updateRenderTargetMipmap(me),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Be=0,dt=U.length;Be<dt;Be++){let Et=U[Be],Rt=Et.object,un=Et.geometry,gt=Et.material,ze=Et.group;if(gt.side===Bt&&Rt.layers.test(W.layers)){let ei=gt.side;gt.side=fn,gt.needsUpdate=!0,Jt(Rt,G,W,un,gt,ze),gt.side=ei,gt.needsUpdate=!0,Qe=!0}}Qe===!0&&(E.updateMultisampleRenderTarget(me),E.updateRenderTargetMipmap(me))}_.setRenderTarget(Oe),_.setClearColor(k,ee),Ze!==void 0&&(W.viewport=Ze),_.toneMapping=Fe}function zt(w,U,G){let W=U.isScene===!0?U.overrideMaterial:null;for(let N=0,me=w.length;N<me;N++){let Re=w[N],Oe=Re.object,Fe=Re.geometry,Ze=W===null?Re.material:W,Qe=Re.group;Oe.layers.test(G.layers)&&Jt(Oe,U,G,Fe,Ze,Qe)}}function Jt(w,U,G,W,N,me){w.onBeforeRender(_,U,G,W,N,me),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(_,U,G,W,w,me),N.transparent===!0&&N.side===Bt&&N.forceSinglePass===!1?(N.side=fn,N.needsUpdate=!0,_.renderBufferDirect(G,U,W,N,w,me),N.side=Wn,N.needsUpdate=!0,_.renderBufferDirect(G,U,W,N,w,me),N.side=Bt):_.renderBufferDirect(G,U,W,N,w,me),w.onAfterRender(_,U,G,W,N,me)}function qt(w,U,G){U.isScene!==!0&&(U=se);let W=ae.get(w),N=p.state.lights,me=p.state.shadowsArray,Re=N.state.version,Oe=Le.getParameters(w,N.state,me,U,G),Fe=Le.getProgramCacheKey(Oe),Ze=W.programs;W.environment=w.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(w.isMeshStandardMaterial?B:M).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ze===void 0&&(w.addEventListener("dispose",qe),Ze=new Map,W.programs=Ze);let Qe=Ze.get(Fe);if(Qe!==void 0){if(W.currentProgram===Qe&&W.lightsStateVersion===Re)return jn(w,Oe),Qe}else Oe.uniforms=Le.getUniforms(w),w.onBeforeCompile(Oe,_),Qe=Le.acquireProgram(Oe,Fe),Ze.set(Fe,Qe),W.uniforms=Oe.uniforms;let Be=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Be.clippingPlanes=he.uniform),jn(w,Oe),W.needsLights=yr(w),W.lightsStateVersion=Re,W.needsLights&&(Be.ambientLightColor.value=N.state.ambient,Be.lightProbe.value=N.state.probe,Be.directionalLights.value=N.state.directional,Be.directionalLightShadows.value=N.state.directionalShadow,Be.spotLights.value=N.state.spot,Be.spotLightShadows.value=N.state.spotShadow,Be.rectAreaLights.value=N.state.rectArea,Be.ltc_1.value=N.state.rectAreaLTC1,Be.ltc_2.value=N.state.rectAreaLTC2,Be.pointLights.value=N.state.point,Be.pointLightShadows.value=N.state.pointShadow,Be.hemisphereLights.value=N.state.hemi,Be.directionalShadowMap.value=N.state.directionalShadowMap,Be.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Be.spotShadowMap.value=N.state.spotShadowMap,Be.spotLightMatrix.value=N.state.spotLightMatrix,Be.spotLightMap.value=N.state.spotLightMap,Be.pointShadowMap.value=N.state.pointShadowMap,Be.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=Qe,W.uniformsList=null,Qe}function sn(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=Zs.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function jn(w,U){let G=ae.get(w);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function vr(w,U,G,W,N){U.isScene!==!0&&(U=se),E.resetTextureUnits();let me=U.fog,Re=W.isMeshStandardMaterial?U.environment:null,Oe=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:nn,Fe=(W.isMeshStandardMaterial?B:M).get(W.envMap||Re),Ze=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Qe=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Be=!!G.morphAttributes.position,dt=!!G.morphAttributes.normal,Et=!!G.morphAttributes.color,Rt=Ni;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Rt=_.toneMapping);let un=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,gt=un!==void 0?un.length:0,ze=ae.get(W),ei=p.state.lights;if(ie===!0&&(ge===!0||w!==b)){let yn=w===b&&W.id===S;he.setState(W,w,yn)}let xt=!1;W.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==ei.state.version||ze.outputColorSpace!==Oe||N.isBatchedMesh&&ze.batching===!1||!N.isBatchedMesh&&ze.batching===!0||N.isBatchedMesh&&ze.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&ze.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&ze.instancing===!1||!N.isInstancedMesh&&ze.instancing===!0||N.isSkinnedMesh&&ze.skinning===!1||!N.isSkinnedMesh&&ze.skinning===!0||N.isInstancedMesh&&ze.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ze.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&ze.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&ze.instancingMorph===!1&&N.morphTexture!==null||ze.envMap!==Fe||W.fog===!0&&ze.fog!==me||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==he.numPlanes||ze.numIntersection!==he.numIntersection)||ze.vertexAlphas!==Ze||ze.vertexTangents!==Qe||ze.morphTargets!==Be||ze.morphNormals!==dt||ze.morphColors!==Et||ze.toneMapping!==Rt||ze.morphTargetsCount!==gt)&&(xt=!0):(xt=!0,ze.__version=W.version);let Ln=ze.currentProgram;xt===!0&&(Ln=qt(W,U,N));let Ms=!1,pn=!1,Mr=!1,Ct=Ln.getUniforms(),Hn=ze.uniforms;if(ue.useProgram(Ln.program)&&(Ms=!0,pn=!0,Mr=!0),W.id!==S&&(S=W.id,pn=!0),Ms||b!==w){ue.buffers.depth.getReversed()?(ce.copy(w.projectionMatrix),_m(ce),vm(ce),Ct.setValue(R,"projectionMatrix",ce)):Ct.setValue(R,"projectionMatrix",w.projectionMatrix),Ct.setValue(R,"viewMatrix",w.matrixWorldInverse);let Si=Ct.map.cameraPosition;Si!==void 0&&Si.setValue(R,Ue.setFromMatrixPosition(w.matrixWorld)),pe.logarithmicDepthBuffer&&Ct.setValue(R,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ct.setValue(R,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,pn=!0,Mr=!0)}if(N.isSkinnedMesh){Ct.setOptional(R,N,"bindMatrix"),Ct.setOptional(R,N,"bindMatrixInverse");let yn=N.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Ct.setValue(R,"boneTexture",yn.boneTexture,E))}N.isBatchedMesh&&(Ct.setOptional(R,N,"batchingTexture"),Ct.setValue(R,"batchingTexture",N._matricesTexture,E),Ct.setOptional(R,N,"batchingIdTexture"),Ct.setValue(R,"batchingIdTexture",N._indirectTexture,E),Ct.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&Ct.setValue(R,"batchingColorTexture",N._colorsTexture,E));let br=G.morphAttributes;if((br.position!==void 0||br.normal!==void 0||br.color!==void 0)&&We.update(N,G,Ln),(pn||ze.receiveShadow!==N.receiveShadow)&&(ze.receiveShadow=N.receiveShadow,Ct.setValue(R,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Hn.envMap.value=Fe,Hn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(Hn.envMapIntensity.value=U.environmentIntensity),pn&&(Ct.setValue(R,"toneMappingExposure",_.toneMappingExposure),ze.needsLights&&Qn(Hn,Mr),me&&W.fog===!0&&xe.refreshFogUniforms(Hn,me),xe.refreshMaterialUniforms(Hn,W,Y,le,p.state.transmissionRenderTarget[w.id]),Zs.upload(R,sn(ze),Hn,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Zs.upload(R,sn(ze),Hn,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ct.setValue(R,"center",N.center),Ct.setValue(R,"modelViewMatrix",N.modelViewMatrix),Ct.setValue(R,"normalMatrix",N.normalMatrix),Ct.setValue(R,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let yn=W.uniformsGroups;for(let Si=0,wi=yn.length;Si<wi;Si++){let mu=yn[Si];D.update(mu,Ln),D.bind(mu,Ln)}}return Ln}function Qn(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function yr(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,U,G){ae.get(w.texture).__webglTexture=U,ae.get(w.depthTexture).__webglTexture=G;let W=ae.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){let G=ae.get(w);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,G=0){P=w,T=U,A=G;let W=!0,N=null,me=!1,Re=!1;if(w){let Fe=ae.get(w);if(Fe.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(R.FRAMEBUFFER,null),W=!1;else if(Fe.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(Fe.__hasExternalTextures)E.rebindTextures(w,ae.get(w.texture).__webglTexture,ae.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Be=w.depthTexture;if(Fe.__boundDepthTexture!==Be){if(Be!==null&&ae.has(Be)&&(w.width!==Be.image.width||w.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}let Ze=w.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Re=!0);let Qe=ae.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Qe[U])?N=Qe[U][G]:N=Qe[U],me=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?N=ae.get(w).__webglMultisampledFramebuffer:Array.isArray(Qe)?N=Qe[G]:N=Qe,L.copy(w.viewport),H.copy(w.scissor),z=w.scissorTest}else L.copy(Se).multiplyScalar(Y).floor(),H.copy(ke).multiplyScalar(Y).floor(),z=$e;if(ue.bindFramebuffer(R.FRAMEBUFFER,N)&&W&&ue.drawBuffers(w,N),ue.viewport(L),ue.scissor(H),ue.setScissorTest(z),me){let Fe=ae.get(w.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,Fe.__webglTexture,G)}else if(Re){let Fe=ae.get(w.texture),Ze=U||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Fe.__webglTexture,G||0,Ze)}S=-1},this.readRenderTargetPixels=function(w,U,G,W,N,me,Re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Oe=Oe[Re]),Oe){ue.bindFramebuffer(R.FRAMEBUFFER,Oe);try{let Fe=w.texture,Ze=Fe.format,Qe=Fe.type;if(!pe.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-W&&G>=0&&G<=w.height-N&&R.readPixels(U,G,W,N,Ke.convert(Ze),Ke.convert(Qe),me)}finally{let Fe=P!==null?ae.get(P).__webglFramebuffer:null;ue.bindFramebuffer(R.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(w,U,G,W,N,me,Re){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Oe=Oe[Re]),Oe){let Fe=w.texture,Ze=Fe.format,Qe=Fe.type;if(!pe.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-W&&G>=0&&G<=w.height-N){ue.bindFramebuffer(R.FRAMEBUFFER,Oe);let Be=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Be),R.bufferData(R.PIXEL_PACK_BUFFER,me.byteLength,R.STREAM_READ),R.readPixels(U,G,W,N,Ke.convert(Ze),Ke.convert(Qe),0);let dt=P!==null?ae.get(P).__webglFramebuffer:null;ue.bindFramebuffer(R.FRAMEBUFFER,dt);let Et=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await xm(R,Et,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Be),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,me),R.deleteBuffer(Be),R.deleteSync(Et),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,G=0){w.isTexture!==!0&&(Ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);let W=Math.pow(2,-G),N=Math.floor(w.image.width*W),me=Math.floor(w.image.height*W),Re=U!==null?U.x:0,Oe=U!==null?U.y:0;E.setTexture2D(w,0),R.copyTexSubImage2D(R.TEXTURE_2D,G,0,0,Re,Oe,N,me),ue.unbindTexture()},this.copyTextureToTexture=function(w,U,G=null,W=null,N=0){w.isTexture!==!0&&(Ur("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,G=null);let me,Re,Oe,Fe,Ze,Qe,Be,dt,Et,Rt=w.isCompressedTexture?w.mipmaps[N]:w.image;G!==null?(me=G.max.x-G.min.x,Re=G.max.y-G.min.y,Oe=G.isBox3?G.max.z-G.min.z:1,Fe=G.min.x,Ze=G.min.y,Qe=G.isBox3?G.min.z:0):(me=Rt.width,Re=Rt.height,Oe=Rt.depth||1,Fe=0,Ze=0,Qe=0),W!==null?(Be=W.x,dt=W.y,Et=W.z):(Be=0,dt=0,Et=0);let un=Ke.convert(U.format),gt=Ke.convert(U.type),ze;U.isData3DTexture?(E.setTexture3D(U,0),ze=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),ze=R.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),ze=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);let ei=R.getParameter(R.UNPACK_ROW_LENGTH),xt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ln=R.getParameter(R.UNPACK_SKIP_PIXELS),Ms=R.getParameter(R.UNPACK_SKIP_ROWS),pn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Rt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Rt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Fe),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ze),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Qe);let Mr=w.isDataArrayTexture||w.isData3DTexture,Ct=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Hn=ae.get(w),br=ae.get(U),yn=ae.get(Hn.__renderTarget),Si=ae.get(br.__renderTarget);ue.bindFramebuffer(R.READ_FRAMEBUFFER,yn.__webglFramebuffer),ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let wi=0;wi<Oe;wi++)Mr&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ae.get(w).__webglTexture,N,Qe+wi),w.isDepthTexture?(Ct&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ae.get(U).__webglTexture,N,Et+wi),R.blitFramebuffer(Fe,Ze,me,Re,Be,dt,me,Re,R.DEPTH_BUFFER_BIT,R.NEAREST)):Ct?R.copyTexSubImage3D(ze,N,Be,dt,Et+wi,Fe,Ze,me,Re):R.copyTexSubImage2D(ze,N,Be,dt,Et+wi,Fe,Ze,me,Re);ue.bindFramebuffer(R.READ_FRAMEBUFFER,null),ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Ct?w.isDataTexture||w.isData3DTexture?R.texSubImage3D(ze,N,Be,dt,Et,me,Re,Oe,un,gt,Rt.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(ze,N,Be,dt,Et,me,Re,Oe,un,Rt.data):R.texSubImage3D(ze,N,Be,dt,Et,me,Re,Oe,un,gt,Rt):w.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,N,Be,dt,me,Re,un,gt,Rt.data):w.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,N,Be,dt,Rt.width,Rt.height,un,Rt.data):R.texSubImage2D(R.TEXTURE_2D,N,Be,dt,me,Re,un,gt,Rt);R.pixelStorei(R.UNPACK_ROW_LENGTH,ei),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,xt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ln),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ms),R.pixelStorei(R.UNPACK_SKIP_IMAGES,pn),N===0&&U.generateMipmaps&&R.generateMipmap(ze),ue.unbindTexture()},this.copyTextureToTexture3D=function(w,U,G=null,W=null,N=0){return w.isTexture!==!0&&(Ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),Ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,G,W,N)},this.initRenderTarget=function(w){ae.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),ue.unbindTexture()},this.resetState=function(){T=0,A=0,P=null,ue.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var qn=class extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},rr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tc,this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},rn=new C,us=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new st(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},qr=class extends ln{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fs,Ar=new C,Bs=new C,zs=new C,ks=new Q,Rr=new Q,uf=new Ve,No=new C,Cr=new C,Oo=new C,xd=new Q,Ll=new Q,_d=new Q,ua=class extends Tt{constructor(e=new qr){if(super(),this.isSprite=!0,this.type="Sprite",Fs===void 0){Fs=new ct;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new rr(t,5);Fs.setIndex([0,1,2,0,2,3]),Fs.setAttribute("position",new us(n,3,0,!1)),Fs.setAttribute("uv",new us(n,2,3,!1))}this.geometry=Fs,this.material=e,this.center=new Q(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bs.setFromMatrixScale(this.matrixWorld),uf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bs.multiplyScalar(-zs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Fo(No.set(-.5,-.5,0),zs,o,Bs,s,r),Fo(Cr.set(.5,-.5,0),zs,o,Bs,s,r),Fo(Oo.set(.5,.5,0),zs,o,Bs,s,r),xd.set(0,0),Ll.set(1,0),_d.set(1,1);let a=e.ray.intersectTriangle(No,Cr,Oo,!1,Ar);if(a===null&&(Fo(Cr.set(-.5,.5,0),zs,o,Bs,s,r),Ll.set(0,1),a=e.ray.intersectTriangle(No,Oo,Cr,!1,Ar),a===null))return;let l=e.ray.origin.distanceTo(Ar);l<e.near||l>e.far||t.push({distance:l,point:Ar.clone(),uv:ci.getInterpolation(Ar,No,Cr,Oo,xd,Ll,_d,new Q),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Fo(i,e,t,n,s,r){ks.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Rr.x=r*ks.x-s*ks.y,Rr.y=s*ks.x+r*ks.y):Rr.copy(ks),i.copy(e),i.x+=Rr.x,i.y+=Rr.y,i.applyMatrix4(uf)}var vd=new C,yd=new ft,Md=new ft,fv=new C,bd=new Ve,Bo=new C,Dl=new xn,Sd=new Ve,Ul=new ir,da=class extends ve{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yu,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new an),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bo),this.boundingBox.expandByPoint(Bo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bo),this.boundingSphere.expandByPoint(Bo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dl.copy(this.boundingSphere),Dl.applyMatrix4(s),e.ray.intersectsSphere(Dl)!==!1&&(Sd.copy(s).invert(),Ul.copy(e.ray).applyMatrix4(Sd),!(this.boundingBox!==null&&Ul.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ul)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ft,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===yu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;yd.fromBufferAttribute(s.attributes.skinIndex,e),Md.fromBufferAttribute(s.attributes.skinWeight,e),vd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Md.getComponent(r);if(o!==0){let a=yd.getComponent(r);bd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(fv.copy(vd).applyMatrix4(bd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Yr=class extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}},fa=class extends Zt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Qt,h=Qt,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wd=new Ve,pv=new Ve,pa=class i{constructor(e=[],t=[]){this.uuid=Sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:pv;wd.multiplyMatrices(a,t[r]),wd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new fa(t,e,e,bn,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Yr),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},ds=class extends st{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Hs=new Ve,Td=new Ve,zo=[],Ed=new an,mv=new Ve,Ir=new ve,Pr=new xn,gi=class extends ve{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ds(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new an),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),Ed.copy(e.boundingBox).applyMatrix4(Hs),this.boundingBox.union(Ed)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),Pr.copy(e.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pr.copy(this.boundingSphere),Pr.applyMatrix4(n),e.ray.intersectsSphere(Pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hs),Td.multiplyMatrices(n,Hs),Ir.matrixWorld=Td,Ir.raycast(e,zo);for(let o=0,a=zo.length;o<a;o++){let l=zo[o];l.instanceId=r,l.object=this,t.push(l)}zo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ds(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fa(new Float32Array(s*this.count),s,this.count,lh,Fn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var wn=class extends ln{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ma=new C,ga=new C,Ad=new Ve,Lr=new ir,ko=new xn,Nl=new C,Rd=new C,Hi=class extends Tt{constructor(e=new ct,t=new wn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ma.fromBufferAttribute(t,s-1),ga.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ma.distanceTo(ga);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(s),ko.radius+=r,e.ray.intersectsSphere(ko)===!1)return;Ad.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(Ad);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=h.getX(x),y=h.getX(x+1),v=Ho(this,e,Lr,l,p,y);v&&t.push(v)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=Ho(this,e,Lr,l,x,g);p&&t.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){let p=Ho(this,e,Lr,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=Ho(this,e,Lr,l,m-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ho(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(ma.fromBufferAttribute(o,s),ga.fromBufferAttribute(o,r),t.distanceSqToSegment(ma,ga,Nl,Rd)>n)return;Nl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Nl);if(!(l<e.near||l>e.far))return{distance:l,point:Rd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Cd=new C,Id=new C,Bn=class extends Hi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Cd.fromBufferAttribute(t,s),Id.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Cd.distanceTo(Id);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},xa=class extends Hi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Zr=class extends ln{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Pd=new Ve,Vc=new ir,Vo=new xn,Go=new C,Tn=class extends Tt{constructor(e=new ct,t=new Zr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(s),Vo.radius+=r,e.ray.intersectsSphere(Vo)===!1)return;Pd.copy(s).invert(),Vc.copy(e.ray).applyMatrix4(Pd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,x=f;m<x;m++){let g=c.getX(m);Go.fromBufferAttribute(u,g),Ld(Go,g,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,x=f;m<x;m++)Go.fromBufferAttribute(u,m),Ld(Go,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ld(i,e,t,n,s,r,o){let a=Vc.distanceSqToPoint(i);if(a<t){let l=new C;Vc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Yn=class extends Zt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Q:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new C,s=[],r=[],o=[],a=new C,l=new Ve;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Gt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Gt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Kr=class extends En{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Q){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Gc=class extends Kr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ph(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Wo=new C,Ol=new ph,Fl=new ph,Bl=new ph,Jr=class extends En{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Wo.subVectors(s[0],s[1]).add(s[0]),c=Wo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Wo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Wo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Ol.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,x,g),Fl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,x,g),Bl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Ol.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Fl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Bl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ol.calc(l),Fl.calc(l),Bl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Dd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function gv(i,e){let t=1-i;return t*t*e}function xv(i,e){return 2*(1-i)*i*e}function _v(i,e){return i*i*e}function zr(i,e,t,n){return gv(i,e)+xv(i,t)+_v(i,n)}function vv(i,e){let t=1-i;return t*t*t*e}function yv(i,e){let t=1-i;return 3*t*t*i*e}function Mv(i,e){return 3*(1-i)*i*i*e}function bv(i,e){return i*i*i*e}function kr(i,e,t,n,s){return vv(i,e)+yv(i,t)+Mv(i,n)+bv(i,s)}var _a=class extends En{constructor(e=new Q,t=new Q,n=new Q,s=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Q){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(e,s.x,r.x,o.x,a.x),kr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wc=class extends En{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(e,s.x,r.x,o.x,a.x),kr(e,s.y,r.y,o.y,a.y),kr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},va=class extends En{constructor(e=new Q,t=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fs=class extends En{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ya=class extends En{constructor(e=new Q,t=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(zr(e,s.x,r.x,o.x),zr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},or=class extends En{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(zr(e,s.x,r.x,o.x),zr(e,s.y,r.y,o.y),zr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ma=class extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Dd(a,l.x,c.x,h.x,u.x),Dd(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Q().fromArray(s))}return this}},ba=Object.freeze({__proto__:null,ArcCurve:Gc,CatmullRomCurve3:Jr,CubicBezierCurve:_a,CubicBezierCurve3:Wc,EllipseCurve:Kr,LineCurve:va,LineCurve3:fs,QuadraticBezierCurve:ya,QuadraticBezierCurve3:or,SplineCurve:Ma}),ar=class extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ba[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ba[s.type]().fromJSON(s))}return this}},Sa=class extends ar{constructor(e){super(),this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new va(this.currentPoint.clone(),new Q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ya(this.currentPoint.clone(),new Q(e,t),new Q(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new _a(this.currentPoint.clone(),new Q(e,t),new Q(n,s),new Q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ma(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Kr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},wa=class i extends ct{constructor(e=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Gt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new C,d=new Q,f=new C,m=new C,x=new C,g=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(m)}for(let y=0;y<=t;y++){let v=n+y*h*s,_=Math.sin(v),I=Math.cos(v);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*_,u.y=e[T].y,u.z=e[T].x*I,o.push(u.x,u.y,u.z),d.x=y/t,d.y=T/(e.length-1),a.push(d.x,d.y);let A=l[3*T+0]*_,P=l[3*T+1],S=l[3*T+0]*I;c.push(A,P,S)}}for(let y=0;y<t;y++)for(let v=0;v<e.length-1;v++){let _=v+y*e.length,I=_,T=_+e.length,A=_+e.length+1,P=_+1;r.push(I,T,P),r.push(A,P,T)}this.setIndex(r),this.setAttribute("position",new Ye(o,3)),this.setAttribute("uv",new Ye(a,2)),this.setAttribute("normal",new Ye(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var ps=class i extends ct{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new C,h=new Q;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(a,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Nt=class i extends ct{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(f,2));function y(){let _=new C,I=new C,T=0,A=(t-e)/n;for(let P=0;P<=r;P++){let S=[],b=P/r,L=b*(t-e)+e;for(let H=0;H<=s;H++){let z=H/s,k=z*l+a,ee=Math.sin(k),V=Math.cos(k);I.x=L*ee,I.y=-b*n+g,I.z=L*V,u.push(I.x,I.y,I.z),_.set(ee,A,V).normalize(),d.push(_.x,_.y,_.z),f.push(z,1-b),S.push(m++)}x.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){let b=x[S][P],L=x[S+1][P],H=x[S+1][P+1],z=x[S][P+1];(e>0||S!==0)&&(h.push(b,L,z),T+=3),(t>0||S!==r-1)&&(h.push(L,H,z),T+=3)}c.addGroup(p,T,0),p+=T}function v(_){let I=m,T=new Q,A=new C,P=0,S=_===!0?e:t,b=_===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),m++;let L=m;for(let H=0;H<=s;H++){let k=H/s*l+a,ee=Math.cos(k),V=Math.sin(k);A.x=S*V,A.y=g*b,A.z=S*ee,u.push(A.x,A.y,A.z),d.push(0,b,0),T.x=ee*.5+.5,T.y=V*.5*b+.5,f.push(T.x,T.y),m++}for(let H=0;H<s;H++){let z=I+H,k=L+H;_===!0?h.push(k,k+1,z):h.push(k+1,k,z),P+=3}c.addGroup(p,P,_===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Xo=new C,qo=new C,zl=new C,Yo=new ci,ms=class extends ct{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(qs*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:x,b:g,c:p}=Yo;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Yo.getNormal(zl),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){let v=(y+1)%3,_=u[y],I=u[v],T=Yo[h[y]],A=Yo[h[v]],P=`${_}_${I}`,S=`${I}_${_}`;S in d&&d[S]?(zl.dot(d[S].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(A.x,A.y,A.z)),d[S]=null):P in d||(d[P]={index0:c[y],index1:c[v],normal:zl.clone()})}}for(let m in d)if(d[m]){let{index0:x,index1:g}=d[m];Xo.fromBufferAttribute(a,x),qo.fromBufferAttribute(a,g),f.push(Xo.x,Xo.y,Xo.z),f.push(qo.x,qo.y,qo.z)}this.setAttribute("position",new Ye(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},zn=class extends Sa{constructor(e){super(e),this.uuid=Sn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Sa().fromJSON(s))}return this}},Sv={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=df(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=Rv(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let m=t;m<s;m+=t)u=i[m],d=i[m+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return $r(r,o,t,a,l,f,0),o}};function df(i,e,t,n,s){let r,o;if(s===zv(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Ud(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Ud(r,i[r],i[r+1],o);return o&&ka(o,o.next)&&(Qr(o),o=o.next),o}function gs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ka(t,t.next)||Pt(t.prev,t,t.next)===0)){if(Qr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function $r(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Dv(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Tv(i,n,s,r):wv(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Qr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Ev(gs(i),e,t),$r(i,e,t,n,s,r,2)):o===2&&Av(i,e,t,n,s,r):$r(gs(i),e,t,n,s,r,1);break}}}function wv(i){let e=i.prev,t=i,n=i.next;if(Pt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Ws(s,a,r,l,o,c,m.x,m.y)&&Pt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Tv(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Pt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,p=Xc(f,m,e,t,n),y=Xc(x,g,e,t,n),v=i.prevZ,_=i.nextZ;for(;v&&v.z>=p&&_&&_.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&Ws(a,h,l,u,c,d,v.x,v.y)&&Pt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Ws(a,h,l,u,c,d,_.x,_.y)&&Pt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&Ws(a,h,l,u,c,d,v.x,v.y)&&Pt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Ws(a,h,l,u,c,d,_.x,_.y)&&Pt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Ev(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!ka(s,r)&&ff(s,n,n.next,r)&&jr(s,r)&&jr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Qr(n),Qr(n.next),n=i=r),n=n.next}while(n!==i);return gs(n)}function Av(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ov(o,a)){let l=pf(o,a);o=gs(o,o.next),l=gs(l,l.next),$r(o,e,t,n,s,r,0),$r(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Rv(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=df(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Nv(c));for(s.sort(Cv),r=0;r<s.length;r++)t=Iv(s[r],t);return t}function Cv(i,e){return i.x-e.x}function Iv(i,e){let t=Pv(i,e);if(!t)return e;let n=pf(t,i);return gs(n,n.next),gs(t,t.next)}function Pv(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ws(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),jr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Lv(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function Lv(i,e){return Pt(i.prev,i,e.prev)<0&&Pt(e.next,i,i.next)<0}function Dv(i,e,t,n){let s=i;do s.z===0&&(s.z=Xc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Uv(s)}function Uv(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Xc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Nv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ws(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Ov(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Fv(i,e)&&(jr(i,e)&&jr(e,i)&&Bv(i,e)&&(Pt(i.prev,i,e.prev)||Pt(i,e.prev,e))||ka(i,e)&&Pt(i.prev,i,i.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ka(i,e){return i.x===e.x&&i.y===e.y}function ff(i,e,t,n){let s=Ko(Pt(i,e,t)),r=Ko(Pt(i,e,n)),o=Ko(Pt(t,n,i)),a=Ko(Pt(t,n,e));return!!(s!==r&&o!==a||s===0&&Zo(i,t,e)||r===0&&Zo(i,n,e)||o===0&&Zo(t,i,n)||a===0&&Zo(t,e,n))}function Zo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ko(i){return i>0?1:i<0?-1:0}function Fv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ff(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function jr(i,e){return Pt(i.prev,i,i.next)<0?Pt(i,e,i.next)>=0&&Pt(i,i.prev,e)>=0:Pt(i,e,i.prev)<0||Pt(i,i.next,e)<0}function Bv(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function pf(i,e){let t=new qc(i.i,i.x,i.y),n=new qc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ud(i,e,t,n){let s=new qc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Qr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function qc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function zv(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Oi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Nd(e),Od(n,e);let o=e.length;t.forEach(Nd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Od(n,t[l]);let a=Sv.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Nd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Od(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ta=class i extends ct{constructor(e=new zn([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ye(s,3)),this.setAttribute("uv",new Ye(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:kv,v,_=!1,I,T,A,P;p&&(v=p.getSpacedPoints(h),_=!0,d=!1,I=p.computeFrenetFrames(h,!1),T=new C,A=new C,P=new C),d||(g=0,f=0,m=0,x=0);let S=a.extractPoints(c),b=S.shape,L=S.holes;if(!Oi.isClockWise(b)){b=b.reverse();for(let O=0,X=L.length;O<X;O++){let R=L[O];Oi.isClockWise(R)&&(L[O]=R.reverse())}}let z=Oi.triangulateShape(b,L),k=b;for(let O=0,X=L.length;O<X;O++){let R=L[O];b=b.concat(R)}function ee(O,X,R){return X||console.error("THREE.ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(X,R)}let V=b.length,le=z.length;function Y(O,X,R){let J,ne,pe,ue=O.x-X.x,_e=O.y-X.y,ae=R.x-O.x,E=R.y-O.y,M=ue*ue+_e*_e,B=ue*E-_e*ae;if(Math.abs(B)>Number.EPSILON){let $=Math.sqrt(M),oe=Math.sqrt(ae*ae+E*E),j=X.x-_e/$,Le=X.y+ue/$,xe=R.x-E/oe,Ee=R.y+ae/oe,je=((xe-j)*E-(Ee-Le)*ae)/(ue*E-_e*ae);J=j+ue*je-O.x,ne=Le+_e*je-O.y;let he=J*J+ne*ne;if(he<=2)return new Q(J,ne);pe=Math.sqrt(he/2)}else{let $=!1;ue>Number.EPSILON?ae>Number.EPSILON&&($=!0):ue<-Number.EPSILON?ae<-Number.EPSILON&&($=!0):Math.sign(_e)===Math.sign(E)&&($=!0),$?(J=-_e,ne=ue,pe=Math.sqrt(M)):(J=ue,ne=_e,pe=Math.sqrt(M/2))}return new Q(J/pe,ne/pe)}let fe=[];for(let O=0,X=k.length,R=X-1,J=O+1;O<X;O++,R++,J++)R===X&&(R=0),J===X&&(J=0),fe[O]=Y(k[O],k[R],k[J]);let de=[],Se,ke=fe.concat();for(let O=0,X=L.length;O<X;O++){let R=L[O];Se=[];for(let J=0,ne=R.length,pe=ne-1,ue=J+1;J<ne;J++,pe++,ue++)pe===ne&&(pe=0),ue===ne&&(ue=0),Se[J]=Y(R[J],R[pe],R[ue]);de.push(Se),ke=ke.concat(Se)}for(let O=0;O<g;O++){let X=O/g,R=f*Math.cos(X*Math.PI/2),J=m*Math.sin(X*Math.PI/2)+x;for(let ne=0,pe=k.length;ne<pe;ne++){let ue=ee(k[ne],fe[ne],J);ce(ue.x,ue.y,-R)}for(let ne=0,pe=L.length;ne<pe;ne++){let ue=L[ne];Se=de[ne];for(let _e=0,ae=ue.length;_e<ae;_e++){let E=ee(ue[_e],Se[_e],J);ce(E.x,E.y,-R)}}}let $e=m+x;for(let O=0;O<V;O++){let X=d?ee(b[O],ke[O],$e):b[O];_?(A.copy(I.normals[0]).multiplyScalar(X.x),T.copy(I.binormals[0]).multiplyScalar(X.y),P.copy(v[0]).add(A).add(T),ce(P.x,P.y,P.z)):ce(X.x,X.y,0)}for(let O=1;O<=h;O++)for(let X=0;X<V;X++){let R=d?ee(b[X],ke[X],$e):b[X];_?(A.copy(I.normals[O]).multiplyScalar(R.x),T.copy(I.binormals[O]).multiplyScalar(R.y),P.copy(v[O]).add(A).add(T),ce(P.x,P.y,P.z)):ce(R.x,R.y,u/h*O)}for(let O=g-1;O>=0;O--){let X=O/g,R=f*Math.cos(X*Math.PI/2),J=m*Math.sin(X*Math.PI/2)+x;for(let ne=0,pe=k.length;ne<pe;ne++){let ue=ee(k[ne],fe[ne],J);ce(ue.x,ue.y,u+R)}for(let ne=0,pe=L.length;ne<pe;ne++){let ue=L[ne];Se=de[ne];for(let _e=0,ae=ue.length;_e<ae;_e++){let E=ee(ue[_e],Se[_e],J);_?ce(E.x,E.y+v[h-1].y,v[h-1].x+R):ce(E.x,E.y,u+R)}}}q(),ie();function q(){let O=s.length/3;if(d){let X=0,R=V*X;for(let J=0;J<le;J++){let ne=z[J];Ce(ne[2]+R,ne[1]+R,ne[0]+R)}X=h+g*2,R=V*X;for(let J=0;J<le;J++){let ne=z[J];Ce(ne[0]+R,ne[1]+R,ne[2]+R)}}else{for(let X=0;X<le;X++){let R=z[X];Ce(R[2],R[1],R[0])}for(let X=0;X<le;X++){let R=z[X];Ce(R[0]+V*h,R[1]+V*h,R[2]+V*h)}}n.addGroup(O,s.length/3-O,0)}function ie(){let O=s.length/3,X=0;ge(k,X),X+=k.length;for(let R=0,J=L.length;R<J;R++){let ne=L[R];ge(ne,X),X+=ne.length}n.addGroup(O,s.length/3-O,1)}function ge(O,X){let R=O.length;for(;--R>=0;){let J=R,ne=R-1;ne<0&&(ne=O.length-1);for(let pe=0,ue=h+g*2;pe<ue;pe++){let _e=V*pe,ae=V*(pe+1),E=X+J+_e,M=X+ne+_e,B=X+ne+ae,$=X+J+ae;Ue(E,M,B,$)}}}function ce(O,X,R){l.push(O),l.push(X),l.push(R)}function Ce(O,X,R){F(O),F(X),F(R);let J=s.length/3,ne=y.generateTopUV(n,s,J-3,J-2,J-1);se(ne[0]),se(ne[1]),se(ne[2])}function Ue(O,X,R,J){F(O),F(X),F(J),F(X),F(R),F(J);let ne=s.length/3,pe=y.generateSideWallUV(n,s,ne-6,ne-3,ne-2,ne-1);se(pe[0]),se(pe[1]),se(pe[3]),se(pe[1]),se(pe[2]),se(pe[3])}function F(O){s.push(l[O*3+0]),s.push(l[O*3+1]),s.push(l[O*3+2])}function se(O){r.push(O.x),r.push(O.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Hv(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ba[s.type]().fromJSON(s)),new i(n,e.options)}},kv={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Q(r,o),new Q(a,l),new Q(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Q(o,1-l),new Q(c,1-u),new Q(d,1-m),new Q(x,1-p)]:[new Q(a,1-l),new Q(h,1-u),new Q(f,1-m),new Q(g,1-p)]}};function Hv(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ea=class i extends ct{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new C,m=new Q;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let y=p+g,v=y,_=y+n+1,I=y+n+2,T=y+1;a.push(v,_,T),a.push(_,I,T)}}this.setIndex(a),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Vi=class i extends ct{constructor(e=new zn([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ye(s,3)),this.setAttribute("normal",new Ye(r,3)),this.setAttribute("uv",new Ye(o,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,m=d.holes;Oi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let y=m[g];Oi.isClockWise(y)===!0&&(m[g]=y.reverse())}let x=Oi.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let y=m[g];f=f.concat(y)}for(let g=0,p=f.length;g<p;g++){let y=f[g];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let g=0,p=x.length;g<p;g++){let y=x[g],v=y[0]+u,_=y[1]+u,I=y[2]+u;n.push(v,_,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Vv(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Vv(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Zn=class i extends ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,d=new C,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let y=[],v=p/n,_=0;p===0&&o===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let I=0;I<=t;I++){let T=I/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+v*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(T+_,1-v),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let v=h[p][y+1],_=h[p][y],I=h[p+1][y],T=h[p+1][y+1];(p!==0||o>0)&&f.push(v,_,T),(p!==n-1||l<Math.PI)&&f.push(_,I,T)}this.setIndex(f),this.setAttribute("position",new Ye(m,3)),this.setAttribute("normal",new Ye(x,3)),this.setAttribute("uv",new Ye(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Kn=class i extends ct{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let x=m/s*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,y=(s+1)*f+m;o.push(x,g,y),o.push(g,p,y)}this.setIndex(o),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Gi=class i extends ct{constructor(e=new or(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new Q,h=new C,u=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(f,2));function x(){for(let v=0;v<t;v++)g(v);g(r===!1?t:0),y(),p()}function g(v){h=e.getPointAt(v/t,h);let _=o.normals[v],I=o.binormals[v];for(let T=0;T<=s;T++){let A=T/s*Math.PI*2,P=Math.sin(A),S=-Math.cos(A);l.x=S*_.x+P*I.x,l.y=S*_.y+P*I.y,l.z=S*_.z+P*I.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=t;v++)for(let _=1;_<=s;_++){let I=(s+1)*(v-1)+(_-1),T=(s+1)*v+(_-1),A=(s+1)*v+_,P=(s+1)*(v-1)+_;m.push(I,T,P),m.push(T,A,P)}}function y(){for(let v=0;v<=t;v++)for(let _=0;_<=s;_++)c.x=v/t,c.y=_/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new ba[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var lr=class extends ln{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new Te(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var Mt=class extends ln{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ef,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Lt=class extends Mt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Aa=class extends wn{static get type(){return"LineDashedMaterial"}constructor(e){super(),this.isLineDashedMaterial=!0,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Jo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Gv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Wv(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Fd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function mf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Wi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Yc=class extends Wi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mu,endingEnd:Mu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bu:r=e,a=2*t-n;break;case Su:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bu:o=e,l=2*n-t;break;case Su:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,y=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,v=(-1-f)*g+(1.5+f)*x+.5*m,_=f*g-f*x;for(let I=0;I!==a;++I)r[I]=p*o[h+I]+y*o[c+I]+v*o[l+I]+_*o[u+I];return r}},Zc=class extends Wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Kc=class extends Wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},An=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jo(t,this.TimeBufferType),this.values=Jo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Jo(e.times,Array),values:Jo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case er:t=this.InterpolantFactoryMethodDiscrete;break;case tr:t=this.InterpolantFactoryMethodLinear;break;case rl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return er;case this.InterpolantFactoryMethodLinear:return tr;case this.InterpolantFactoryMethodSmooth:return rl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Gv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===rl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=tr;var Xi=class extends An{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=er;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends An{};Ra.prototype.ValueTypeName="color";var xi=class extends An{};xi.prototype.ValueTypeName="number";var Jc=class extends Wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)en.slerpFlat(r,0,o,c-a,o,c,l);return r}},_i=class extends An{InterpolantFactoryMethodLinear(e){return new Jc(this.times,this.values,this.getValueSize(),e)}};_i.prototype.ValueTypeName="quaternion";_i.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends An{constructor(e,t,n){super(e,t,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=er;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends An{};vi.prototype.ValueTypeName="vector";var Ca=class{constructor(e="",t=-1,n=[],s=Gp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Sn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(qv(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(An.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=Wv(l);l=Fd(l,1,h),c=Fd(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new xi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,x){if(f.length!==0){let g=[],p=[];mf(f,g,p,m),g.length!==0&&x.push(new u(d,g,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(let x in f){let g=[],p=[];for(let y=0;y!==d[m].morphTargets.length;++y){let v=d[m];g.push(v.time),p.push(v.morphTarget===x?1:0)}s.push(new xi(".morphTargetInfluence["+x+"]",g,p))}l=f.length*o}else{let f=".bones["+t[u].name+"]";n(vi,f+".position",d,"pos",s),n(_i,f+".quaternion",d,"rot",s),n(vi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Xv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xi;case"vector":case"vector2":case"vector3":case"vector4":return vi;case"color":return Ra;case"quaternion":return _i;case"bool":case"boolean":return Xi;case"string":return qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function qv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Xv(i.type);if(i.times===void 0){let t=[],n=[];mf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Li={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},$c=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},Yv=new $c,yi=class{constructor(e){this.manager=e!==void 0?e:Yv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};yi.DEFAULT_MATERIAL_NAME="__DEFAULT";var oi={},jc=class extends Error{constructor(e,t){super(e),this.response=t}},eo=class extends yi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Li.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(oi[e]!==void 0){oi[e].push({onLoad:t,onProgress:n,onError:s});return}oi[e]=[],oi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=oi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,x=0,g=new ReadableStream({start(p){y();function y(){u.read().then(({done:v,value:_})=>{if(v)p.close();else{x+=_.byteLength;let I=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let T=0,A=h.length;T<A;T++){let P=h[T];P.onProgress&&P.onProgress(I)}p.enqueue(_),y()}},v=>{p.error(v)})}}});return new Response(g)}else throw new jc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Li.add(e,c);let h=oi[e];delete oi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=oi[e];if(h===void 0)throw this.manager.itemError(e),c;delete oi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Qc=class extends yi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Li.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Wr("img");function l(){h(),Li.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Ia=class extends yi{constructor(e){super(e)}load(e,t,n,s){let r=new Zt,o=new Qc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},cr=class extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Yi=class extends cr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},kl=new Ve,Bd=new C,zd=new C,to=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Bd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bd),zd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zd),t.updateMatrixWorld(),kl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},eh=class extends to{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=nr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Pa=class extends cr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new eh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},kd=new Ve,Dr=new C,Hl=new C,th=class extends to{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Dr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Dr),Hl.copy(n.position),Hl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Hl),n.updateMatrixWorld(),s.makeTranslation(-Dr.x,-Dr.y,-Dr.z),kd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kd)}},La=class extends cr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new th}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},nh=class extends to{constructor(){super(new Bi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},kn=class extends cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new nh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Zi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Da=class extends yi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Li.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Li.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Li.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Li.add(e,l),r.manager.itemStart(e)}};var mh="\\[\\]\\.:\\/",Zv=new RegExp("["+mh+"]","g"),gh="[^"+mh+"]",Kv="[^"+mh.replace("\\.","")+"]",Jv=/((?:WC+[\/:])*)/.source.replace("WC",gh),$v=/(WCOD+)?/.source.replace("WCOD",Kv),jv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gh),Qv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gh),ey=new RegExp("^"+Jv+$v+jv+Qv+"$"),ty=["material","materials","bones","map"],ih=class{constructor(e,t,n){let s=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zv,"")}static parseTrackName(e){let t=ey.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ty.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=ih;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hM=new Float32Array(1);var Ua=class extends Bn{constructor(e=10,t=10,n=4473924,s=8947848){n=new Te(n),s=new Te(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,m=-a;d<=t;d++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);let x=d===r?n:s;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let h=new ct;h.setAttribute("position",new Ye(l,3)),h.setAttribute("color",new Ye(c,3));let u=new wn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var ny=`
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
.battery-card:hover{border-color:#2f5d50}`,gf=[["sp","Air pressure (kgf/cm\xB2)",.13,.45,.005,.145,3],["sd","Orifice dia. (mm)",.03,.3,.01,.1,2],["sg","Electrolyte sp. gravity",1,1.3,.01,1.28,2],["sh2","Real battery height (cm)",10,60,1,25,0],["sv","Bubble display scale",1,3,.1,1,1],["so","Case clarity",.05,.8,.01,.16,2],["sl","Length L (model)",1,3,.05,1.9,2],["sw","Width W (model)",.6,2,.05,1,2],["sh","Height (model)",1,4,.05,2.8,2]],Cn=null,oo=null,Ha=null;function xf(){if(Ha)return Ha;let i=(s,r,o)=>new Mt({color:s,roughness:r,metalness:o}),e=document.createElement("canvas");e.width=512,e.height=256;let t=e.getContext("2d");t.fillStyle="#f2c56e",t.fillRect(0,0,512,256),t.fillStyle="#2a2016";for(let s=0;s<4;s++)for(let r=0;r<12;r++)t.fillRect(r*42.6+s%2*21+8,28+s*52,20,22);let n=new Yn(e);return n.colorSpace=wt,n.wrapS=fi,Ha={M:i,lidM:i(15260064,.7,0),steel:i(12369084,.3,.9),rubberM:i(1908513,.8,0),holeM:i(921360,.9,0),octM:i(4016700,.55,.45),bronzeM:i(9071178,.5,.6),redM:i(13121323,.5,0),clearM:new Lt({color:15922422,transparent:!0,opacity:.45,roughness:.08,transmission:.4,side:Bt}),hoseM:new Lt({color:15721656,transparent:!0,opacity:.6,roughness:.12,transmission:.5,side:Bt}),ventM:new Mt({map:n,roughness:.6}),ventTopM:i(15910254,.6,0)},Ha}function _f({W:i=1,L:e=1.9,nippleHose:t=!0,hose:n=t,centre:s=[1.3,2.25,3.4,4.4]}={}){let r=xf(),o=new ut,a=i,l=0,c=(p,y,v,_,I)=>{let T=new ve(p,y);return T.position.set(v,_,I),T.castShadow=T.receiveShadow=!0,o.add(T),T},h=(p,y,v)=>new Nt(p,p,y,v||40),u=(p,y,v,_,I)=>c(new wa(p.map(([T,A])=>new Q(T,A)),48),y,v,_,I),d=p=>(.1+.16*p-.5)*e;function f(p,y,v){v==="oct"?c(new Nt(.12*a,.12*a,.03*a,8),r.octM,p,.015*a,y).rotation.y=Math.PI/8:u([[0,0],[.118*a,0],[.12*a,.012*a],[.112*a,.03*a],[.09*a,.026*a],[.08*a,.012*a],[0,.012*a]],r.steel,p,0,y);let _=.012*a;for(let I=0;I<4;I++)c(h((.078-I*.003)*a,.011*a,32),r.rubberM,p,_+.0055*a,y),_+=.012*a;if(c(h(.022*a,.004*a,20),r.holeM,p,_+.001*a,y),v==="post"){c(h(.02*a,.3*a,16),r.steel,p,_+.15*a,y);for(let I=0;I<9;I++)c(new Kn(.022*a,.004*a,6,20),r.steel,p,_+.05*a+I*.018*a,y).rotation.x=Math.PI/2}}for(let p=0;p<2;p++)for(let y=0;y<6;y++)f((p?.26:-.26)*i,d(y),y===0||y===5?"post":p===0&&y===2?"oct":"");let m=d(s[0]);if(t&&(c(new Nt(.085*a,.085*a,.015*a,8),r.bronzeM,0,l+.0075*a,m),c(h(.032*a,.045*a,24),r.rubberM,0,l+.037*a,m),c(new Nt(.014*a,.02*a,.06*a,20),r.rubberM,0,l+.09*a,m),n)){let p=new Jr([[0,l+.08,m],[0,l+.3,m],[-.08,l+.48,m+.08],[-.32,l+.52,m+.2],[-.5,l+.42,m+.3]].map(y=>new C(...y)));c(new Gi(p,60,.022*a,12,!1),r.hoseM,0,0,0)}m=d(s[1]),c(h(.095*a,.02*a),r.rubberM,0,l+.01*a,m),c(new Nt(.085*a,.085*a,.22*a,48,1,!0),r.ventM,0,l+.13*a,m),c(h(.086*a,.012*a),r.ventTopM,0,l+.246*a,m);let x={x:0,y:l+.02*a,z:m,r:.085*a,h:.22*a},g=new C(0,l+.12*a,d(s[0]));m=d(s[2]),u([[0,0],[.105*a,0],[.108*a,.01*a],[.07*a,.016*a],[0,.016*a]],r.steel,0,l,m),c(h(.06*a,.2*a,40),r.clearM,0,l+.116*a,m).castShadow=!1;for(let[p,y]of[[.06,r.redM],[.08,r.redM],[.12,r.rubberM]])c(new Kn(.061*a,.004*a,6,40),y,0,l+p*a,m).rotation.x=Math.PI/2;m=d(s[3]),c(new Kn(.07*a,.012*a,10,40),r.steel,0,l+.004*a,m).rotation.x=Math.PI/2,c(h(.05*a,.003*a,32),r.holeM,0,l+.002*a,m);for(let p of[-.45,.45])c(new Zn(.035*a,20,10,0,Math.PI*2,0,Math.PI/2),r.lidM,0,l,p*e);return{group:o,vent:x,nipple:g}}var iy=new C(Math.sin(1.02)*Math.cos(3.927),Math.cos(1.02),Math.sin(1.02)*Math.sin(3.927));function vf({centre:i}={}){let s=xf(),r=new ut,o=(v,_,I,T)=>{let A=new ve(v,_);return A.position.y=I,T&&(A.renderOrder=T),r.add(A),A};o(new lt(1*.96,2.8*.8,1.9*.96),new Mt({color:8376768,transparent:!0,opacity:.35,depthWrite:!1}),2.8*.42,2);let a=[];for(let v=0;v<2;v++)for(let _=0;_<6;_++){let I=v?.26:-.26,T=(.1+.16*_-.5)*1.9,A=new ve(new lt(.2,2.8*.6,.035),new Mt({color:7040885,roughness:.6,metalness:.6}));A.position.set(I,.2+2.8*.3,T),r.add(A),a.push({x:I,z:T})}o(new lt(1,2.8,1.9),new Lt({color:14478580,transparent:!0,opacity:.22,roughness:.05,side:Bt,depthWrite:!1}),2.8/2,3);let l=new Bn(new ms(new lt(1,2.8,1.9)),new wn({color:4016709}));l.position.y=2.8/2,r.add(l),o(new lt(1*1.02,.06,1.9*1.02),s.lidM,2.8-.03);let c=_f({W:1,L:1.9,hose:!1,centre:i});c.group.position.y=2.8,r.add(c.group);let h=14,u=a.length*h,d=2.8*.82,f=new gi(new Zn(.028,8,6),new pt({color:16777215,transparent:!0,opacity:.85,depthWrite:!1}),u);f.renderOrder=4,f.frustumCulled=!1,r.add(f);let m=Array.from({length:u},()=>Math.random()),x=new Tt,g=Mf(420);c.group.add(g.points);function p(v,_,I){for(let T=0;T<u;T++){let A=a[Math.floor(T/h)];m[T]=(m[T]+v*.55*(.8+.4*(T*37%10)/10))%1;let P=_>0&&T%h/h<.35+.65*_,S=.12+m[T]*(d-.12);x.position.set(A.x+.06*Math.sin(T*1.7+m[T]*9),S,A.z+.03*Math.cos(T*2.3+m[T]*7)),x.scale.setScalar(P?.7+m[T]*.6:0),x.updateMatrix(),f.setMatrixAt(T,x.matrix)}f.instanceMatrix.needsUpdate=!0,g.update(v,_,c.vent,I,!1)}let y=c.nipple.clone().add(new C(0,2.8,0));return{group:r,update:p,nipple:y,size:{W:1,L:1.9,H:2.8}}}function yf(i,e){let t=(r,o)=>{let a=new C().crossVectors(o,r).normalize(),l=new C().crossVectors(r,a);return new Ve().makeBasis(a,l,r)},n=t(iy.clone(),new C(0,1,0)),s=t(e.clone().normalize(),i.clone().normalize());return new en().setFromRotationMatrix(s.multiply(n.transpose()))}function Mf(i=700){let e=new ct,t=new Float32Array(i*3),n=new Float32Array(i),s=new Float32Array(i);e.setAttribute("position",new st(t,3)),e.setAttribute("aAlpha",new st(n,1)),e.setAttribute("aSize",new st(s,1));let r=new Ht({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:400},uPersp:{value:1}},vertexShader:"attribute float aAlpha;attribute float aSize;varying float vAl;uniform float uScale;uniform float uPersp;void main(){vAl=aAlpha;vec4 mv=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;gl_PointSize=aSize*uScale/mix(1.,-mv.z,uPersp);}",fragmentShader:"varying float vAl;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;float a=pow(1.-r,1.6)*vAl;if(a<.004)discard;gl_FragColor=vec4(mix(vec3(.62,.72,.8),vec3(.45,.56,.66),r*r),a);}"}),o=new Tn(e,r);o.frustumCulled=!1,o.renderOrder=6;let a=Array.from({length:i},()=>({age:Math.random(),life:1.2+Math.random()*.8,live:!1}));function l(c,h,u,d,f){r.uniforms.uScale.value=d,r.uniforms.uPersp.value=f?1:0;for(let m=0;m<i;m++){let x=a[m];if(x.age+=c/x.life,x.age>=1&&(x.age%=1,x.live=Math.random()<h,x.a=Math.random()*6.283,x.h=.15+Math.random()*.75,x.sp=.6+Math.random()*.8),!x.live||!u){n[m]=0;continue}let g=x.age,p=u.r/.085,y=u.r+g*.22*x.sp*p,v=u.y+x.h*u.h+g*g*.55*x.sp*p;t[m*3]=(u.x||0)+Math.cos(x.a)*y,t[m*3+1]=v,t[m*3+2]=u.z+Math.sin(x.a)*y,s[m]=(.03+g*.16)*p,n[m]=h*.85*Math.min(1,g/.06)*Math.pow(1-g,1.2)}e.attributes.position.needsUpdate=e.attributes.aAlpha.needsUpdate=e.attributes.aSize.needsUpdate=!0}return{points:o,update:l}}{let i=document.createElement("style");i.textContent=ny,document.head.append(i)}function _h({side:i,pressure:e,title:t}){Cn||sy(),Cn.querySelector("h2").textContent=t||"Battery cell \xB7 "+(i==="stbd"?"STBD":"PORT")+" \u2014 transparent with air bubbling";let n=Cn.querySelector("#bd-sp");n.value=String(Math.min(+n.max,Math.max(+n.min,e))),Cn.showModal(),oo.resize(),oo.physChange(),oo.start()}function sy(){Cn=document.createElement("dialog"),Cn.id="battery-detail",Cn.innerHTML=`<div class="bd-head"><h2></h2><button id="bd-close">Close \xD7</button></div>
<div class="bd-views">
 <button data-view="drawing">Drawing view</button><button data-view="top">Top close-up</button>
 <button data-view="front">Front</button><button data-view="side">Side zoom</button>
 <button id="bd-rb">Auto-rotate: off</button><button id="bd-bb">Bubbles: on</button>
</div>
<div id="bd-c"></div>
<div class="bd-panel"><div style="font-weight:600;margin-bottom:6px">Air flow and bubble physics (live)</div><div id="bd-ro"></div></div>
<div class="bd-sliders">${gf.map(([i,e,t,n,s,r])=>`<span>${e}</span><input type="range" id="bd-${i}" min="${t}" max="${n}" step="${s}" value="${r}"><span id="bd-v${i}"></span>`).join("")}</div>
<div class="bd-note">Pressure starts at this branch's PG reading (hand reducer ON 0.13\u20130.16, OFF 0.45 kgf/cm\xB2). Assumptions: 12 air orifices (one under each plate), discharge coefficient 0.6, air at 20 \xB0C, supply pressure measured at the orifices, surface tension 0.073 N/m. Drag to rotate, scroll or pinch to zoom.</div>`,document.body.append(Cn),oo=ry(Cn),Cn.querySelector("#bd-close").onclick=()=>Cn.close(),Cn.addEventListener("close",()=>oo.stop())}function ry(i){let e=Z=>i.querySelector("#bd-"+Z),t=Z=>+e(Z).value,n=e("c"),s=new qn,r=new Ft(16,680/520,1,300),o=new ki({antialias:!0,alpha:!0});o.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),o.shadowMap.enabled=!0,o.shadowMap.type=no,n.appendChild(o.domElement),s.add(new Yi(16777215,9079434,.9*Math.PI));let a=new kn(16777215,.8*Math.PI);a.position.set(-6,10,-4),a.castShadow=!0,a.shadow.mapSize.width=2048,a.shadow.mapSize.height=2048;let l=a.shadow.camera;l.left=-8,l.right=8,l.top=8,l.bottom=-8,l.near=1,l.far=40,s.add(a);let c=new kn(16777215,.35*Math.PI);c.position.set(6,3,5),s.add(c);let h=new ve(new tn(60,60),new lr({opacity:.2}));h.rotation.x=-Math.PI/2,h.receiveShadow=!0,s.add(h);let u=(Z,Ie,Ne)=>new Mt({color:Z,roughness:Ie,metalness:Ne}),d=u(10659756,.45,.5),f=u(12369084,.3,.9),m=u(13148746,.35,.85),x=u(3026478,.6,.3),g=u(7040885,.6,.6),p=new Lt({color:14478580,transparent:!0,opacity:.16,roughness:.05,metalness:0,side:Bt,depthWrite:!1}),y=new Mt({color:8376768,transparent:!0,opacity:.3,roughness:.1,metalness:0,depthWrite:!1}),v=new Mt({color:16777215,transparent:!0,opacity:.8,roughness:.05,metalness:.1,depthWrite:!1}),_=new ut;s.add(_);let I=new ut;s.add(I);let T=new Zn(1,12,9);function A(Z,Ie,Ne,Pe,ht,Je){let Xe=new ve(Z,Ie);return Xe.position.set(Ne,Pe,ht),Je||(Xe.castShadow=!0,Xe.receiveShadow=!0),_.add(Xe),Xe}let P=(Z,Ie,Ne)=>new Nt(Z,Z,Ie,Ne||40),S=(Z,Ie)=>new Nt(Z,Z,Ie,6);function b(Z,Ie,Ne,Pe,ht){let Je=A(new Kn(Pe,.012*ht,8,32),f,Z,Ie,Ne);Je.rotation.x=Math.PI/2,A(P(Pe*.75,.006*ht),m,Z,Ie+.003*ht,Ne),A(P(Pe*.22,.01*ht,16),x,Z,Ie+.006*ht,Ne)}function L(Z,Ie,Ne,Pe){let ht=.12*Pe,Je=Ie;A(P(ht*1.04,.02*Pe),f,Z,Je+.01*Pe,Ne),Je+=.02*Pe,A(S(ht,.11*Pe),f,Z,Je+.055*Pe,Ne).rotation.y=Math.PI/6,Je+=.11*Pe,A(P(.082*Pe,.17*Pe),m,Z,Je+.085*Pe,Ne),Je+=.17*Pe,b(Z,Je,Ne,.066*Pe,Pe)}function H(Z,Ie,Ne,Pe){let ht=Ie;A(P(.17*Pe,.02*Pe),f,Z,ht+.01*Pe,Ne),ht+=.02*Pe,A(S(.16*Pe,.13*Pe),f,Z,ht+.065*Pe,Ne).rotation.y=Math.PI/6,ht+=.13*Pe,A(S(.14*Pe,.12*Pe),f,Z,ht+.06*Pe,Ne),ht+=.12*Pe,b(Z,ht,Ne,.075*Pe,Pe)}function z(Z,Ie,Ne,Pe){A(S(.1*Pe,.06*Pe),f,Z,Ie+.03*Pe,Ne).rotation.y=Math.PI/6}let k=new C(0,1.4,0),ee=1.4,V=20,le=2.8,Y=1,fe=1.9,de=[],Se=2,ke=!0,$e=.12,q=2500,ie=new gi(T,v,q);ie.frustumCulled=!1,ie.renderOrder=4,I.add(ie);let ge=[],ce=new Tt,Ce=[];for(let Z=0;Z<q;Z++)ge.push({a:!1});function Ue(){Ce=[];for(let Z=q-1;Z>=0;Z--)ge[Z].a=!1,Ce.push(Z)}Ue();let F=9.81,se=101325,O=98066.5,X=.6,R=.073,J={Q:0,db:0,f:0,u:0,dPe:0,s:.09,depth:0,Ph:0,Pg:0,rho:1280,dispScale:1,tRise:0,alive:0,hold:0,acc:[]},ne=(Z,Ie)=>Math.sqrt(2*R/(Ie*Z)+F*Z/2)*Math.tanh(Z/.0015);function pe(){let Z=t("sp")*O,Ie=t("sg"),Ne=1e3*Ie,Pe=t("sd")*.001,Je=t("sh2")/100/le,Xe=(Se-$e)*Je,hn=Ne*F*Xe,It=Z-hn,zt=0,Jt=0,qt=0,sn=0;if(It>0){let Qn=1.204*(se+Z)/se,yr=Math.PI*Pe*Pe/4,w=X*Math.sqrt(2*It/Qn);zt=yr*w;let U=Math.PI*Pe*R/(Ne*F),G=1.378*Math.pow(zt,1.2)/Math.pow(F,.6),W=Math.max(U,G);Jt=Math.cbrt(6*W/Math.PI),qt=zt/W,sn=ne(Jt,Ne)}Object.assign(J,{Q:zt,db:Jt,f:qt,u:sn,dPe:It,s:Je,depth:Xe,Ph:hn,Pg:Z,rho:Ne}),J.dispScale=t("sv"),J.tRise=sn>0?Xe/sn:0,J.alive=12*qt*J.tRise;let jn=Y*Je*fe*Je;J.hold=sn>0&&jn>0?12*zt/jn/sn:0,J.acc=de.map(()=>qt>0?Math.random()/qt:0);let vr=[["Supply pressure",(Z/O).toFixed(3)+" kgf/cm\xB2  ("+(Z/1e3).toFixed(1)+" kPa)"],["Electrolyte head at orifice ("+(Xe*100).toFixed(1)+" cm)",(hn/O).toFixed(3)+" kgf/cm\xB2"],["Net driving pressure",It>0?(It/O).toFixed(3)+" kgf/cm\xB2":"no flow (head exceeds supply)"],["Air flow per orifice",It>0?(zt*1e6).toFixed(2)+" mL/s":"0"],["Total air flow (12 orifices)",It>0?(12*zt*6e4).toFixed(2)+" L/min":"0"],["Bubble diameter",It>0?(Jt*1e3).toFixed(2)+" mm":"-"],["Bubbles per second, per orifice",It>0?qt.toFixed(0)+" Hz":"-"],["Bubble rise speed",It>0?(sn*100).toFixed(1)+" cm/s":"-"],["Time to reach surface",It>0?J.tRise.toFixed(2)+" s":"-"],["Bubbles in liquid at once",It>0?Math.round(J.alive)+(J.alive>q?" (display capped at "+q+")":""):"-"],["Gas hold-up (volume fraction)",It>0?(J.hold*100).toFixed(2)+" %":"-"]];e("ro").innerHTML=vr.map(Qn=>"<span>"+Qn[0]+"</span><span>"+Qn[1]+"</span>").join("");for(let[Qn,,,,,,yr]of gf)e("v"+Qn).textContent=t(Qn).toFixed(yr)}function ue(Z,Ie){if(!Ce.length)return;let Ne=Ce.pop(),Pe=ge[Ne],ht=de[Z],Je=J.db*(.88+.24*Math.random());Pe.a=!0,Pe.d=Je,Pe.u=ne(Je,J.rho),Pe.x0=ht.x+(Math.random()-.5)*.003/J.s,Pe.z0=ht.z+(Math.random()-.5)*.003/J.s,Pe.vx=(Math.random()-.5)*.012/J.s,Pe.vz=(Math.random()-.5)*.012/J.s,Pe.y=$e+Ie,Pe.t=0,Pe.ph=Math.random()*6.28}function _e(Z){ce.position.set(0,-50,0),ce.scale.set(0,0,0),ce.updateMatrix(),ie.setMatrixAt(Z,ce.matrix)}function ae(Z){if(J.f>0){let Je=1/J.f;for(let Xe=0;Xe<de.length;Xe++)for(J.acc[Xe]+=Z;J.acc[Xe]>=Je;)J.acc[Xe]-=Je,ue(Xe,J.acc[Xe]*J.u/J.s)}let Ie=J.s,Ne=se+J.rho*F*J.depth,Pe=Y*.47,ht=fe*.47;for(let Je=0;Je<q;Je++){let Xe=ge[Je];if(!Xe.a){_e(Je);continue}if(Xe.y+=Xe.u/Ie*Z,Xe.t+=Z,Xe.y>=Se){Xe.a=!1,Ce.push(Je),_e(Je);continue}let hn=Xe.d/Ie,It=.4*hn,zt=Xe.x0+Xe.vx*Xe.t+It*Math.sin(6.283*7*Xe.t+Xe.ph),Jt=Xe.z0+Xe.vz*Xe.t+It*Math.cos(6.283*6*Xe.t+Xe.ph);zt=Math.max(-Pe,Math.min(Pe,zt)),Jt=Math.max(-ht,Math.min(ht,Jt));let qt=se+J.rho*F*(Se-Xe.y)*Ie,sn=Math.cbrt(Ne/qt),jn=hn/2*sn*J.dispScale,vr=Xe.d>.002?.86:1;ce.position.set(zt,Xe.y,Jt),ce.scale.set(jn,jn*vr,jn),ce.updateMatrix(),ie.setMatrixAt(Je,ce.matrix)}ie.instanceMatrix.needsUpdate=!0}function E(){if(Ue(),J.f<=0){ae(.001);return}let Z=Math.min(150,Math.ceil((J.tRise+.3)/.02));for(let Ie=0;Ie<Z;Ie++)ae(.02)}function M(Z,Ie,Ne){for(;_.children.length;)_.children.pop().geometry?.dispose();le=Ne,Y=Ie,fe=Z,Se=Ne*.86;let Pe=A(new lt(Ie,Ne,Z),p,0,Ne/2,0,!0);Pe.renderOrder=3;let ht=A(new lt(Ie*.96,Se-.06,Z*.96),y,0,.06+(Se-.06)/2,0,!0);ht.renderOrder=2,A(new lt(Ie*1.02,.06,Z*1.02),u(15260064,.7,0),0,Ne-.03,0),A(new lt(Ie*1.02,.06,Z*1.02),d,0,.03,0),de=[];let Je=Ne*.6,Xe=.2;for(let It=0;It<2;It++)for(let zt=0;zt<6;zt++){let Jt=(.1+.16*zt-.5)*Z,qt=(It?.26:-.26)*Ie;A(new lt(.2*Ie,Je,.035),g,qt,Xe+Je/2,Jt);let sn=Ne-.06-(Xe+Je);A(P(.03*Ie,sn,16),m,qt,Xe+Je+sn/2,Jt),A(P(.04*Ie,.05,20),x,qt,.085,Jt),de.push({x:qt,z:Jt})}let hn=_f({W:Ie,L:Z});hn.group.position.y=Ne,_.add(hn.group),B={...hn.vent,y:hn.vent.y+Ne},V=Math.max(Z,Ne,Ie)*6.9}let B=null,$=Mf();s.add($.points);function oe(Z){let Ie=12*J.Q*6e4,Ne=B&&ke&&J.f>0?Math.min(1,.35+Ie/1.2):0;$.update(Z,Ne,B,o.domElement.height/(2*Math.tan(r.fov*Math.PI/360)),!0)}let j=3.927,Le=1.08,xe=20,Ee=j,je=Le,he=xe,Ae=!1,He=!1,We=1;function De(Z,Ie,Ne,Pe){Ee=Z,je=Ie,Ae=!1,He=Ne,We=Pe,he=V*Pe,ee=Ne?le:le/2,e("rb").textContent="Auto-rotate: off"}let ot={drawing:[3.927,1.08,!1,1],top:[3.927,1.08,!0,.42],front:[Math.PI,Math.PI/2,!1,1],side:[Math.PI/2,Math.PI/2,!1,.6]};i.querySelectorAll("[data-view]").forEach(Z=>Z.onclick=()=>De(...ot[Z.dataset.view])),e("rb").onclick=()=>{Ae=!Ae,e("rb").textContent="Auto-rotate: "+(Ae?"on":"off")},e("bb").onclick=()=>{ke=!ke,I.visible=ke,e("bb").textContent="Bubbles: "+(ke?"on":"off")};function Ke(){M(t("sl"),t("sw"),t("sh")),pe(),E(),he=V*We,ee=He?le:le/2}function vt(){pe(),E()}["sl","sw","sh"].forEach(Z=>e(Z).addEventListener("input",Ke)),["sp","sd","sg","sh2"].forEach(Z=>e(Z).addEventListener("input",vt)),e("sv").addEventListener("input",()=>{J.dispScale=t("sv"),e("vsv").textContent=J.dispScale.toFixed(1)}),e("so").addEventListener("input",()=>{let Z=t("so");p.opacity=Z,y.opacity=.12+Z*1,e("vso").textContent=Z.toFixed(2)}),Ke(),xe=he,k.y=ee;let D=!1,ye=0,K=0,re=0,Me={};n.addEventListener("pointerdown",Z=>{D=!0,ye=Z.clientX,K=Z.clientY,Me[Z.pointerId]=Z,n.setPointerCapture(Z.pointerId),n.style.cursor="grabbing"}),n.addEventListener("pointerup",Z=>{D=!1,delete Me[Z.pointerId],re=0,n.style.cursor="grab"}),n.addEventListener("pointermove",Z=>{Me[Z.pointerId]=Z;let Ie=Object.keys(Me);if(Ie.length===2){let Ne=Me[Ie[0]],Pe=Me[Ie[1]],ht=Math.hypot(Ne.clientX-Pe.clientX,Ne.clientY-Pe.clientY);re&&(he=Math.max(V*.15,Math.min(V*2,he*re/ht))),re=ht;return}D&&(Ee-=(Z.clientX-ye)*.008,je=Math.max(.05,Math.min(Math.PI-.05,je-(Z.clientY-K)*.008)),ye=Z.clientX,K=Z.clientY,Ae=!1)}),n.addEventListener("wheel",Z=>{Z.preventDefault(),he=Math.max(V*.15,Math.min(V*2,he*(1+Z.deltaY*.001)))},{passive:!1});function we(){let Z=n.clientWidth||680,Ie=n.clientHeight||520;r.aspect=Z/Ie,r.updateProjectionMatrix(),o.setSize(Z,Ie)}window.addEventListener("resize",we);let qe=performance.now(),St=0;function Vt(){St=requestAnimationFrame(Vt);let Z=performance.now(),Ie=Math.min(.05,(Z-qe)/1e3);qe=Z,Ae&&(Ee+=.006),ke&&ae(Ie),oe(Ie),j+=(Ee-j)*.12,Le+=(je-Le)*.12,xe+=(he-xe)*.12,k.y+=(ee-k.y)*.12,r.position.set(k.x+xe*Math.sin(Le)*Math.cos(j),k.y+xe*Math.cos(Le),k.z+xe*Math.sin(Le)*Math.sin(j)),r.lookAt(k),o.render(s,r)}return{resize:we,physChange:vt,start(){St||(qe=performance.now(),Vt())},stop(){cancelAnimationFrame(St),St=0}}}function vh(i,e){if(e===Qd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ro||e===Oa){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ro)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var dr=class extends yi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Eh(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new kh(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Zi.extractUrlBase(e);o=Zi.resolveURL(c,this.path)}else o=Zi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new eo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ef){try{o[rt.KHR_BINARY_GLTF]=new Hh(e)}catch(u){s&&s(u);return}r=JSON.parse(o[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Zh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case rt.KHR_MATERIALS_UNLIT:o[u]=new wh;break;case rt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Vh(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:o[u]=new Gh;break;case rt.KHR_MESH_QUANTIZATION:o[u]=new Wh;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function oy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Sh=class{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Te(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],nn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new kn(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new La(h),c.distance=u;break;case"spot":c=new Pa(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Mi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},wh=class{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return pt}extendParams(e,t,n){let s=[];e.color=new Te(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],nn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,wt))}return Promise.all(s)}},Th=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Eh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Lt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Q(a,a)}return Promise.all(r)}},Ah=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Lt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Rh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Lt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Ch=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Lt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],nn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,wt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Ih=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Lt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Ph=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Lt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(a[0],a[1],a[2],nn),Promise.all(r)}},Lh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Lt}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Dh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Lt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(a[0],a[1],a[2],nn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,wt)),Promise.all(r)}},Uh=class{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Lt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Nh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Lt}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Oh=class{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Fh=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Bh=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},zh=class{constructor(e){this.name=rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},kh=class{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==In.TRIANGLES&&c.mode!==In.TRIANGLE_STRIP&&c.mode!==In.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let m of u){let x=new Ve,g=new C,p=new en,y=new C(1,1,1),v=new gi(m.geometry,m.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),v.setMatrixAt(_,x.compose(g,p,y));for(let _ in l)if(_==="_COLOR_0"){let I=l[_];v.instanceColor=new ds(I.array,I.itemSize,I.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,l[_]);Tt.prototype.copy.call(v,m),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Ef="glTF",ao=12,bf={JSON:1313821514,BIN:5130562},Hh=class{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ao),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ef)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ao,r=new DataView(e,ao),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===bf.JSON){let c=new Uint8Array(e,ao+o,a);this.content=n.decode(c)}else if(l===bf.BIN){let c=ao+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Vh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=qh[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=qh[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=ur[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let m in f.attributes){let x=f.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}u(f)},a,c,nn,d)})})}},Gh=class{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Wh=class{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}},Va=class extends Wi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,x=m-c,g=-2*f+3*d,p=f-d,y=1-g,v=p-d+u;for(let _=0;_!==a;_++){let I=o[x+_+a],T=o[x+_+l]*h,A=o[m+_+a],P=o[m+_]*h;r[_]=y*I+v*T+g*A+p*P}return r}},ay=new en,Xh=class extends Va{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return ay.fromArray(r).normalize().toArray(r),r}},In={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ur={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sf={9728:Qt,9729:dn,9984:sh,9985:Or,9986:Vs,9987:Gn},wf={33071:hi,33648:Vr,10497:fi},yh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ly={CUBICSPLINE:void 0,LINEAR:tr,STEP:er},Mh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function cy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Mt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Wn})),i.DefaultMaterial}function xs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Mi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function hy(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function uy(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function dy(i){let e,t=i.extensions&&i.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+bh(t.attributes):e=i.indices+":"+bh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+bh(i.targets[n]);return e}function bh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Yh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var py=new Ve,Zh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new oy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Ia(this.options.manager):this.textureLoader=new Da(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new eo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return xs(r,a,s),Mi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Zi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=yh[s.type],a=ur[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new st(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=yh[s.type],c=ur[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,x,g;if(f&&f!==u){let p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,v=t.cache.get(y);v||(x=new c(a,p*f,s.count*f/h),v=new rr(x,f/h),t.cache.add(y,v)),g=new us(v,l,d%f/h,m)}else a===null?x=new c(s.count*l):x=new c(a,d,s.count*l),g=new st(x,l,m);if(s.sparse!==void 0){let p=yh.SCALAR,y=ur[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,I=new y(o[1],v,s.sparse.count*p),T=new c(o[2],_,s.sparse.count*l);a!==null&&(g=new st(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,P=I.length;A<P;A++){let S=I[A];if(g.setX(S,T[A*l]),l>=2&&g.setY(S,T[A*l+1]),l>=3&&g.setZ(S,T[A*l+2]),l>=4&&g.setW(S,T[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Sf[d.magFilter]||dn,h.minFilter=Sf[d.minFilter]||Gn,h.wrapS=wf[d.wrapS]||fi,h.wrapT=wf[d.wrapT]||fi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Qt&&h.minFilter!==dn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(x){let g=new Zt(x);g.needsUpdate=!0,d(g)}),t.load(Zi.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Mi(u,o),u.userData.mimeType=o.mimeType||fy(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Zr,ln.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new wn,ln.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Mt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[rt.KHR_MATERIALS_UNLIT]){let u=s[rt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],nn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,wt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Bt);let h=r.alphaMode||Mh.OPAQUE;if(h===Mh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Mh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==pt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Q(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==pt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==pt){let u=r.emissiveFactor;a.emissive=new Te().setRGB(u[0],u[1],u[2],nn)}return r.emissiveTexture!==void 0&&o!==pt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,wt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Mi(u,r),t.associations.set(u,{materials:e}),r.extensions&&xs(s,u,r),u})}createUniqueName(e){let t=At.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Tf(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=dy(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Tf(new ct,c,t),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?cy(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let x=h[f],g=o[f],p,y=c[f];if(g.mode===In.TRIANGLES||g.mode===In.TRIANGLE_STRIP||g.mode===In.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new da(x,y):new ve(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===In.TRIANGLE_STRIP?p.geometry=vh(p.geometry,Oa):g.mode===In.TRIANGLE_FAN&&(p.geometry=vh(p.geometry,ro));else if(g.mode===In.LINES)p=new Bn(x,y);else if(g.mode===In.LINE_STRIP)p=new Hi(x,y);else if(g.mode===In.LINE_LOOP)p=new xa(x,y);else if(g.mode===In.POINTS)p=new Tn(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&uy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Mi(p,r),g.extensions&&xs(s,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&xs(s,u[0],r),u[0];let d=new ut;r.extensions&&xs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ft(Ba.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Bi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Mi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new Ve;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new pa(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],m=s.samplers[f.sampler],x=f.target,g=x.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,y=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(m),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],x=u[3],g=u[4],p=[];for(let y=0,v=d.length;y<v;y++){let _=d[y],I=f[y],T=m[y],A=x[y],P=g[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let S=n._createAnimationTracks(_,I,T,A,P);if(S)for(let b=0;b<S.length;b++)p.push(S[b])}return new Ca(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,py)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Yr:c.length>1?h=new ut:c.length===1?h=c[0]:h=new Tt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Mi(h,r),r.extensions&&xs(n,h,r),r.matrix!==void 0){let u=new Ve;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ut;n.name&&(r.name=s.createUniqueName(n.name)),Mi(r,n),n.extensions&&xs(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof ln||d instanceof Zt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Ki[r.path]===Ki.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Ki[r.path]){case Ki.weights:c=xi;break;case Ki.rotation:c=_i;break;case Ki.position:case Ki.scale:c=vi;break;default:switch(n.itemSize){case 1:c=xi;break;case 2:case 3:default:c=vi;break}break}let h=s.interpolation!==void 0?ly[s.interpolation]:tr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let m=new c(l[d]+"."+Ki[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Yh(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof _i?Xh:Va;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function my(i,e,t){let n=e.attributes,s=new an;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){let h=Yh(ur[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new C,l=new C;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let x=Yh(ur[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new xn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Tf(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=qh[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return at.workingColorSpace!==nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),Mi(i,e),my(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?hy(i,e.targets,t):i})}var gy=null,Ga=()=>gy||(gy=new Promise((i,e)=>new dr().load("assets/blower_assembly.glb",t=>i(t.scene),void 0,e))),lo=4,Af=1.4,Rf=3;var xy=null,Cf=()=>xy||(xy=new Promise((i,e)=>new dr().load("assets/pump_set.glb",t=>i(t.scene),void 0,e))),If=6;var _y=`
#blower-detail{width:min(1000px,96vw);max-width:96vw;max-height:94dvh;padding:16px;border:1px solid #c4d7c8;border-radius:16px;background:#f4f5f7;color:#222;font-family:system-ui,Arial,sans-serif}
#blower-detail::backdrop{background:#193c3555}
#blower-detail .bl-head{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px}
#blower-detail h2{font-size:18px;margin:0}
#blower-detail button{min-height:44px;padding:0 16px;cursor:pointer;border:1px solid #c4d7c8;border-radius:8px;background:#fff;color:#222;font:inherit;font-size:14px}
#blower-detail .bl-stage{position:relative;height:min(620px,72dvh);border-radius:12px;overflow:hidden;touch-action:none;background:#e8edf0}
#blower-detail canvas{display:block;width:100%;height:100%}
#blower-detail .bl-panel{position:absolute;left:12px;bottom:12px;width:min(290px,calc(100% - 24px));padding:14px;border-radius:12px;background:#ffffffe6;border:1px solid #d5dfe3;box-shadow:0 4px 16px #0001}
#blower-detail .bl-panel h3{margin:0 0 2px;font-size:15px}#blower-detail .bl-sub{color:#6b7a80;font-size:12px;margin-bottom:12px}
#blower-detail #bl-power{width:100%;display:flex;align-items:center;justify-content:center;gap:10px;font-weight:600}
#blower-detail .bl-led{width:11px;height:11px;border-radius:50%;background:#e0483a;box-shadow:0 0 8px #e0483a}
#blower-detail #bl-power.on{background:#e3f5ea;border-color:#9fd6b3}#blower-detail #bl-power.on .bl-led{background:#22b45a;box-shadow:0 0 10px #22b45a}
#blower-detail .bl-row{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:12px}
#blower-detail .bl-row label{color:#6b7a80}#blower-detail input[type=range]{flex:1;accent-color:#22b45a}
#blower-detail .bl-status{display:flex;justify-content:space-between;margin-top:10px;font-variant-numeric:tabular-nums}
#blower-detail .bl-meter{height:6px;border-radius:3px;background:#dde5e9;overflow:hidden;margin-top:6px}#blower-detail .bl-meter>div{height:100%;width:0;background:linear-gradient(90deg,#4f8fc4,#9fd0f0)}
#blower-detail .bl-check{display:flex;gap:6px;align-items:center;margin-top:10px;color:#6b7a80;cursor:pointer}
#blower-detail .bl-warn{margin-top:8px;color:#c0392b;font-size:13px;min-height:1em}
#blower-detail .bl-hint{position:absolute;right:12px;bottom:12px;color:#6b7a80;font-size:12px}
#blower-detail .bl-views{display:flex;gap:6px;align-items:center}#blower-detail .bl-views button[aria-pressed="true"]{background:#1d4f6e;border-color:#1d4f6e;color:#fff}
@media(max-width:560px){#blower-detail .bl-hint{display:none}}`;{let i=document.createElement("style");i.textContent=_y,document.head.append(i)}var _t,Jn;function Pf(i){_t||vy(),_t.querySelector("h2").textContent=i.title+(i.kind==="pump"?" \u2014 3D view":" \u2014 cut-section view"),_t.querySelector("h3").textContent=i.title,Jn.source=i,Jn.show(i.kind||"blower"),Jn.sync(),_t.showModal(),Jn.resize(),Jn.start()}function vy(){_t=document.createElement("dialog"),_t.id="blower-detail",_t.innerHTML=`<div class="bl-head"><h2></h2><div class="bl-views" role="group" aria-label="View"><button type="button" data-v="top" aria-pressed="true">Top</button><button type="button" data-v="iso" aria-pressed="false">3D</button><button type="button" data-v="side" aria-pressed="false">Side</button><button id="bl-close">Close \xD7</button></div></div>
<div class="bl-stage"><div class="bl-panel"><h3></h3><div class="bl-sub"></div>
<button id="bl-power" type="button" aria-pressed="false"><span class="bl-led"></span><span id="bl-power-label">Power OFF</span></button>
<div class="bl-row"><label for="bl-speed">Speed</label><input id="bl-speed" type="range" min="20" max="100" value="100"><span id="bl-speed-val">100%</span></div>
<div class="bl-status"><span id="bl-what">Fan</span><b id="bl-state">Stopped</b></div><div class="bl-status"><span id="bl-qname">Airflow</span><b id="bl-flow">0 m\xB3/h</b></div><div class="bl-meter"><div id="bl-bar"></div></div>
<label class="bl-check"><input id="bl-air" type="checkbox" checked> Show air</label><div class="bl-warn" id="bl-warn" role="alert"></div></div>
<div class="bl-hint"></div></div>`,document.body.append(_t);let i=_t.querySelector(".bl-stage"),e=new ki({antialias:!0});e.setPixelRatio(Math.min(devicePixelRatio,2)),e.toneMapping=io,e.shadowMap.enabled=!0,e.shadowMap.type=no,i.prepend(e.domElement);let t=new qn;t.background=new Te(15265264);{let F=new qn,se=new zi(e),O=new pt({color:new Te(5,5,5),side:Bt});F.background=new Te(10134699);for(let[X,R,J,ne]of[[6,1,0,-2],[1,6,-2.5,0],[6,.6,0,3],[.6,6,3,0]]){let pe=new ve(new tn(X,R),O);pe.rotation.x=Math.PI/2,pe.position.set(J,4,ne),F.add(pe)}t.environment=se.fromScene(F,.04).texture,se.dispose()}let n=new Ft(35,1,.01,50),s=new C(-.15,.38,-.05),r={r:2.2,th:.6,ph:1.05},o=()=>{n.position.set(s.x+r.r*Math.sin(r.ph)*Math.cos(r.th),s.y+r.r*Math.cos(r.ph),s.z+r.r*Math.sin(r.ph)*Math.sin(r.th)),n.lookAt(s)};o();let a={top:{th:Math.PI/2,ph:.02},iso:{th:.6,ph:1.05},side:{th:Math.PI/2,ph:Math.PI*.49}},l=null,c=F=>_t.querySelectorAll(".bl-views [data-v]").forEach(se=>se.setAttribute("aria-pressed",String(se.dataset.v===F))),h=(F,se)=>{l=a[F],c(F),se?(r.th=l.th,r.ph=l.ph,l=null,o()):u()},u=()=>{if(!l)return;let F=.16;r.th+=(l.th-r.th)*F,r.ph+=(l.ph-r.ph)*F,o(),Math.abs(l.th-r.th)+Math.abs(l.ph-r.ph)<.002?(r.th=l.th,r.ph=l.ph,o(),l=null):requestAnimationFrame(u)};_t.querySelectorAll(".bl-views [data-v]").forEach(F=>F.onclick=()=>h(F.dataset.v)),t.add(new Yi(16777215,12108488,.6));let d=new kn(16777215,1.6);d.position.set(1.5,3,2),d.castShadow=!0,d.shadow.mapSize.set(2048,2048),Object.assign(d.shadow.camera,{left:-1.2,right:1.2,top:1.2,bottom:-1.2,near:.5,far:8}),d.shadow.bias=-4e-4,t.add(d);let f=new ve(new ps(4,64),new lr({opacity:.18}));f.rotation.x=-Math.PI/2,f.receiveShadow=!0,t.add(f);let m=new Ua(4,40,12831954,14081505);m.position.y=5e-4,t.add(m);let x=new Map,g=0,p=e.domElement;p.addEventListener("pointerdown",F=>{p.setPointerCapture(F.pointerId),x.set(F.pointerId,[F.clientX,F.clientY])}),p.addEventListener("pointermove",F=>{if(!x.has(F.pointerId))return;let[se,O]=x.get(F.pointerId);if(x.set(F.pointerId,[F.clientX,F.clientY]),x.size===1)r.th+=(F.clientX-se)*.008,r.ph=Math.min(Math.PI*.495,Math.max(.02,r.ph-(F.clientY-O)*.006)),l=null,c("");else{let[X,R]=[...x.values()],J=Math.hypot(X[0]-R[0],X[1]-R[1]);g&&(r.r=Math.min(6,Math.max(.6,r.r*g/J))),g=J}o()});let y=F=>{x.delete(F.pointerId),g=0};p.addEventListener("pointerup",y),p.addEventListener("pointercancel",y),p.addEventListener("wheel",F=>{F.preventDefault(),r.r=Math.min(6,Math.max(.6,r.r*Math.exp(F.deltaY*.001))),o()},{passive:!1});let v={x0:.025,x1:.155,z0:-.39,z1:-.14,y:.722},_=new C(.2,.345,0),I=null,T="blower",A=lo,P={},S={blower:{load:Ga,rotor:"Rotor",rate:lo,target:[-.15,.38,-.05],r:2.2,sub:"P-31 blower \xB7 cut-section model \xB7 drag to turn, pinch or scroll to zoom",what:"Fan",q:"Airflow",hint:"Power and Speed run this blower on the circuit"},pump:{load:Cf,rotor:"Shaft",rate:If,target:[-.1,.25,0],r:2.4,sub:"Cooling-water pump set \xB7 Blender model \xB7 drag to turn, pinch or scroll to zoom",what:"Pump",q:"Water flow",hint:"Power and Speed run this pump on the circuit"}};function b(F){T=F;let se=S[F];A=se.rate,_t.querySelector(".bl-sub").textContent=se.sub,_t.querySelector("#bl-what").textContent=se.what,_t.querySelector("#bl-qname").textContent=se.q,_t.querySelector(".bl-hint").textContent=se.hint,_t.querySelector(".bl-check").style.display=F==="blower"?"":"none",H.points.visible=z.points.visible=F==="blower"&&_t.querySelector("#bl-air").checked,s.set(...se.target),r.r=se.r,h("top",!0);for(let X of Object.values(P))X.visible=!1;I=null;let O=X=>{X.visible=!0,I=X.getObjectByName(se.rotor)};P[F]?O(P[F]):se.load().then(X=>{let R=X.clone(!0);if(R.traverse(J=>{J.isMesh&&(J.castShadow=!0,J.receiveShadow=!0)}),F==="blower"){let J=R.getObjectByName("Air_Outlet");J&&(v.y=J.position.y);let ne=R.getObjectByName("Air_Inlet");ne&&_.copy(ne.position)}else R.position.y=.075;t.add(R),P[F]=R,R.visible=!1,T===F&&O(R)})}function L(F,se){let O=new ct,X=new Float32Array(F*3),R=new Float32Array(F),J=new Float32Array(F);O.setAttribute("position",new st(X,3).setUsage(Rn)),O.setAttribute("aAlpha",new st(R,1).setUsage(Rn)),O.setAttribute("aSize",new st(J,1).setUsage(Rn));let ne=new Ht({uniforms:{uColor:{value:new Te(se)},uScale:{value:1}},vertexShader:"attribute float aAlpha;attribute float aSize;uniform float uScale;varying float vAlpha;void main(){vec4 mv=modelViewMatrix*vec4(position,1.0);gl_PointSize=aSize*uScale/-mv.z;gl_Position=projectionMatrix*mv;vAlpha=aAlpha;}",fragmentShader:"uniform vec3 uColor;varying float vAlpha;void main(){float d=length(gl_PointCoord-0.5);if(d>0.5)discard;gl_FragColor=vec4(uColor,smoothstep(0.5,0.0,d)*vAlpha);}",transparent:!0,depthWrite:!1}),pe=new Tn(O,ne);return pe.frustumCulled=!1,t.add(pe),{count:F,points:pe,mat:ne,pos:X,alpha:R,size:J,vel:new Float32Array(F*3),age:new Float32Array(F).fill(1e9),life:new Float32Array(F).fill(1),next:0,carry:0}}let H=Object.assign(L(2600,6132674),{alpha0:.24,size0:.05}),z=Object.assign(L(1200,8038092),{alpha0:0,size0:.02}),k=(F,se)=>F+Math.random()*(se-F);function ee(F,se){let O=F.next;F.next=(F.next+1)%F.count,F.age[O]=0,se(O,F.pos,F.vel,F.life),F.alpha[O]=F.alpha0,F.size[O]=F.size0}function V(F,se,O,X){for(F.carry+=se*O;F.carry>=1;)ee(F,X),F.carry-=1}let le=F=>(se,O,X,R)=>{O[se*3]=k(v.x0,v.x1),O[se*3+1]=v.y+.005,O[se*3+2]=k(v.z0,v.z1);let J=(v.z0+v.z1)/2,ne=(v.x0+v.x1)/2;X[se*3]=(O[se*3]-ne)*1.6*F+k(-.05,.05),X[se*3+1]=k(1.5,2.3)*F,X[se*3+2]=(O[se*3+2]-J)*1.2*F-.18*F+k(-.05,.05),R[se]=k(.9,1.5)},Y=()=>(F,se,O,X)=>{let R=Math.sqrt(Math.random())*.2,J=Math.random()*Math.PI*2;se[F*3]=_.x+k(.2,.45),se[F*3+1]=_.y+R*Math.sin(J),se[F*3+2]=_.z+R*Math.cos(J),O[F*3]=O[F*3+1]=O[F*3+2]=0,X[F]=3};function fe(F,se,O){let{pos:X,vel:R,age:J,life:ne,alpha:pe,size:ue}=F;for(let _e=0;_e<F.count;_e++){J[_e]+=se;let ae=J[_e]/ne[_e];if(ae>=1){pe[_e]=0;continue}let E=_e*3,M=.6*ae;R[E]+=(Math.sin(X[E+1]*9+O*3+_e)*M-R[E]*.6)*se,R[E+2]+=(Math.cos(X[E+1]*7-O*2.5+_e*.7)*M-R[E+2]*.4)*se,R[E+1]-=R[E+1]*.9*se,X[E]+=R[E]*se,X[E+1]+=R[E+1]*se,X[E+2]+=R[E+2]*se,pe[_e]=.24*Math.pow(1-ae,1.5),ue[_e]=.05+.08*ae}}let de=new C;function Se(F,se,O){let{pos:X,vel:R,age:J,life:ne,alpha:pe,size:ue}=F;for(let _e=0;_e<F.count;_e++){if(J[_e]>=ne[_e]){pe[_e]=0;continue}J[_e]+=se;let ae=_e*3;de.set(_.x-X[ae],_.y-X[ae+1],_.z-X[ae+2]);let E=de.length(),M=Math.hypot(X[ae+1]-_.y,X[ae+2]-_.z);if(X[ae]<_.x+.01||E<.02){J[_e]=ne[_e],pe[_e]=0;continue}de.multiplyScalar((.35+.25/(E+.08))*O/E);let B=-(X[ae+2]-_.z),$=X[ae+1]-_.y,oe=.6*O*Math.max(0,1-M/.35);R[ae]+=(de.x-R[ae])*3*se,R[ae+1]+=(de.y+B*oe-R[ae+1])*3*se,R[ae+2]+=(de.z+$*oe-R[ae+2])*3*se,X[ae]+=R[ae]*se,X[ae+1]+=R[ae+1]*se,X[ae+2]+=R[ae+2]*se,pe[_e]=.18*Math.min(1,J[_e]*2)*Math.min(1,(X[ae]-_.x)/.06),ue[_e]=.018+.01*Math.min(1,E)}}let ke=F=>{let se=F.points.geometry;se.attributes.position.needsUpdate=se.attributes.aAlpha.needsUpdate=se.attributes.aSize.needsUpdate=!0};function $e(){let F=i.clientWidth,se=i.clientHeight;!F||!se||(n.aspect=F/se,n.updateProjectionMatrix(),e.setSize(F,se,!1),H.mat.uniforms.uScale.value=z.mat.uniforms.uScale.value=se*e.getPixelRatio()/(2*Math.tan(Ba.degToRad(n.fov/2))))}addEventListener("resize",()=>_t.open&&$e());let q={power:_t.querySelector("#bl-power"),label:_t.querySelector("#bl-power-label"),speed:_t.querySelector("#bl-speed"),speedVal:_t.querySelector("#bl-speed-val"),state:_t.querySelector("#bl-state"),flow:_t.querySelector("#bl-flow"),bar:_t.querySelector("#bl-bar"),air:_t.querySelector("#bl-air"),warn:_t.querySelector("#bl-warn")};q.power.addEventListener("click",()=>{q.warn.textContent=Jn.source.toggle()||""}),q.speed.addEventListener("input",()=>{q.speedVal.textContent=q.speed.value+"%",Jn.source.setSpeed(q.speed.value/100)}),q.air.addEventListener("change",()=>{H.points.visible=z.points.visible=q.air.checked&&T==="blower"});let ie=0,ge=0,ce=0,Ce=!1;function Ue(F){if(!_t.open){Ce=!1;return}let se=Math.min(.05,Math.max(0,ce?(F-ce)/1e3:.016));ce=F,ge+=se;let O=Jn.source,X=O.speed(),R=O.running();ie+=X*A*Math.PI*2*se,I&&(I.rotation.x=ie),fe(H,se,ge),Se(z,se,Math.max(X,.05)),X>.03&&T==="blower"&&(V(H,1600*X,se,le(X)),V(z,650*X,se,Y(X))),ke(H),ke(z),q.power.classList.toggle("on",R),q.power.setAttribute("aria-pressed",String(R)),q.label.textContent=R?"Power ON":"Power OFF",q.state.textContent=X<.002?"Stopped":R&&Math.abs(O.setPoint()-X)<.02?"Running":R?"Spinning up":"Coasting down";let J=O.flow();q.flow.textContent=Math.round(J)+" m\xB3/h",q.bar.style.width=Math.min(100,J/6).toFixed(1)+"%",e.render(t,n),requestAnimationFrame(Ue)}_t.querySelector("#bl-close").addEventListener("click",()=>_t.close()),Jn={source:null,resize:$e,show:b,sync(){let F=Math.round(Jn.source.setPoint()*100);q.speed.value=String(F),q.speedVal.textContent=F+"%",q.warn.textContent=""},start(){Ce||(Ce=!0,ce=0,requestAnimationFrame(Ue))}}}var Ot={blowerQ:600,galleyQ:300,draughtQ:120,recirc:.3,leak:.1,pitVolume:60,h2Gen:2.4,ductArea:.03,ambient:25,heater:60,perPercent:85,lightOff:70,coolerEff:.88,burnerTau:4,coolerTau:3},Lf=2,Kh=4;function Jh(i){let e=i.open,t=i.flap,n=e.v122&&(t.a||t.b),s={},r=(p,y)=>{let v=n&&y&&(e.v114||e.v117);return i.speed[p]>.02&&!v&&(s[p]=!0),v?Ot.blowerQ*i.speed[p]:0},o=r("b1",e.v109),a=r("b2",e.v110),l=e.v134||t.g,c=l?Ot.galleyQ*i.speed.bg:0;i.speed.bg>.02&&!l&&(s.bg=!0);let h=c*(e.v134?t.g?.5:1:0),u=e.v123&&e.v58?Ot.draughtQ*(e.vin?1:.4):0,d=e.v117?(e.v114?Ot.recirc:1)*(o+a):0,f=o+a+h+u,m=!1;if(!e.vin&&f>0){let p=Math.min(1,(d+Ot.leak*f)/f);p<1&&(o*=p,a*=p,h*=p,d*=p,m=!0),f=o+a+h}let x=o+a,g=(t.a?1:0)+(t.b?1:0);return{q1:o,q2:a,qm:x,qg:c,qgPit:h,qgRoom:c-h,recirc:d,draught:u,out:f,starved:m,blocked:s,qa:t.a&&g?x/g:0,qb:t.b&&g?x/g:0,header:x+h,toCompt:x-d,inlet:e.vin?Math.max(0,f-d):0,velocity:x/3600/Ot.ductArea}}function Df(i,e,t,n,s,r={a:!0,b:!0}){let o=x=>.95*Math.min(1,Math.max(0,(x-Ot.lightOff)/40)),a=e.qa+e.qb,l=a>0?(e.qa*o(i.Ta)+e.qb*o(i.Tb))/a:0,c=i.h2*(1-l),h=(s?Ot.h2Gen/Ot.pitVolume*100:0)-(e.out*i.h2-e.recirc*c)/Ot.pitVolume;i.h2=Math.max(0,i.h2+h*t);let u=Ot.ambient,d=x=>1-Math.exp(-n/x),f=(x,g)=>x>0&&g?u+Ot.heater+Ot.perPercent*i.h2:u;i.Ta+=(f(e.qa,r.a)-i.Ta)*d(Ot.burnerTau),i.Tb+=(f(e.qb,r.b)-i.Tb)*d(Ot.burnerTau);let m=a>0?(e.qa*i.Ta+e.qb*i.Tb)/a:u;return i.Tcool+=((a>0?u+(1-Ot.coolerEff)*(m-u):u)-i.Tcool)*d(Ot.coolerTau),i.after=c,i.burnt=l,i}var mr=document.querySelector("#viewport"),fo=document.querySelector("#labels"),Ja=document.querySelector("#circuit"),nt=(i,e,t=0)=>new C(i-1e3,t,e-786),mt=24,yy=60,My=520,pr=new Te("#8e9ca3"),Uf=new Te("#d23b33"),Nf=new Te("#22b45a"),qf=matchMedia("(pointer: coarse)").matches;function nu(){return Math.min(qf?2:4,(devicePixelRatio||1)*(window.visualViewport?.scale||1))}var cn=new ki({antialias:!0});cn.setPixelRatio(nu());cn.outputColorSpace=wt;cn.toneMapping=io;cn.toneMappingExposure=1.05;mr.append(cn.domElement);var Ge=new qn;Ge.background=new Te("#e9eef0");var ys=new Bi(-1e3,1e3,600,-600,1,8e3);ys.position.set(0,3e3,0);ys.up.set(0,0,-1);ys.lookAt(0,0,0);{let i=new qn,e=new zi(cn),t=new pt({color:new Te(6,6,6),side:Bt});i.background=new Te("#2a2f36");for(let[n,s,r,o]of[[14,.5,0,-2],[.5,14,-2.5,0],[14,.25,0,3],[.25,14,3,0]]){let a=new ve(new tn(n,s),t);a.rotation.x=Math.PI/2,a.position.set(r,6,o),i.add(a)}Ge.environment=e.fromScene(i,.02).texture,e.dispose()}Ge.add(new Yi("#dfefff","#20282c",1.1));var Yf=new kn("#ffffff",1.6);Yf.position.set(-600,2e3,-900);Ge.add(Yf);function $a(i,e){let t=document.createElement("canvas");t.width=t.height=i,e(t.getContext("2d"),i);let n=new Yn(t);return n.colorSpace=wt,n}var Ya=$a(128,(i,e)=>{let t=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,e,e)}),by=$a(128,(i,e)=>{let t=i.createRadialGradient(e/2,e*.62,2,e/2,e*.55,e*.45);t.addColorStop(0,"rgba(255,250,215,1)"),t.addColorStop(.4,"rgba(255,190,80,.9)"),t.addColorStop(1,"rgba(255,90,20,0)"),i.fillStyle=t,i.beginPath(),i.moveTo(e/2,e*.08),i.bezierCurveTo(e*.9,e*.5,e*.78,e*.95,e/2,e*.95),i.bezierCurveTo(e*.22,e*.95,e*.1,e*.5,e/2,e*.08),i.fill()}),Sy=$a(512,(i,e)=>{let t=i.createRadialGradient(e/2,e*.42,10,e/2,e/2,e*.72);t.addColorStop(0,"#f6f8f9"),t.addColorStop(1,"#d9e1e5"),i.fillStyle=t,i.fillRect(0,0,e,e)}),ho=(i,e,t,n=1)=>{let s=new ua(new qr({map:i,color:e,transparent:!0,opacity:n,depthWrite:!1,blending:Hr}));return s.scale.setScalar(t),s},Ut={metal:new Mt({color:"#b9c2c8",metalness:.85,roughness:.32}),dark:new Mt({color:"#2a3237",metalness:.5,roughness:.5}),red:new Mt({color:"#c8322b",metalness:.3,roughness:.4}),glass:new Lt({color:"#8fb3c6",metalness:0,roughness:.06,transparent:!0,opacity:.34,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.6}),flange:new Mt({color:"#9aa6ad",metalness:.8,roughness:.35}),pit:new Mt({color:"#cfdbe0",metalness:.1,roughness:.9})};{let i=new ve(new tn(2800,2e3),new pt({map:Sy}));i.rotation.x=-Math.PI/2,i.position.y=-700,Ge.add(i)}{let i=new ve(new tn(1780,370),Ut.pit);i.rotation.x=-Math.PI/2,i.position.copy(nt(1e3,1340,-20)),Ge.add(i);let e=new Bn(new ms(new tn(1780,370)),new wn({color:"#9fb0b8"}));e.rotation.x=-Math.PI/2,e.position.copy(nt(1e3,1340,-19)),Ge.add(e);let t=new Hi(new ct().setFromPoints([nt(90,1150,-18),nt(1890,1150,-18)]),new Aa({color:"#7d94a0",dashSize:16,gapSize:12}));t.computeLineDistances(),Ge.add(t)}var ja=[];for(let i of[460,545,630,715,1265,1350,1435,1520]){let e=vf({}),t=34,n=yf(new C(0,0,-1),new C(0,1,0));e.group.scale.setScalar(t),e.group.quaternion.copy(n);let s=new C(0,e.size.H/2*t,0).applyQuaternion(n);e.group.position.copy(nt(i,1400,30)).sub(s),Ge.add(e.group),e.group.updateMatrixWorld(!0);let r=e.group.localToWorld(e.nipple.clone());ja.push({b:e,sc:t,x:i,nip:r,up:new C(0,1,0).applyQuaternion(n)})}var wy=[588,1392].map(i=>{let e=ho(Ya,"#e0a21c",1,0);return e.material.blending=Ui,e.scale.set(520,150,1),e.position.copy(nt(i,1330,80)),Ge.add(e),e}),_s={dirty:new Te("#2a4fc0"),clean:new Te("#2457d6"),room:new Te("#1f86d1")},Za=[];function Ty(i,e=26){let t=i.map(([r,o,a])=>nt(r,o,a??mt)),n=new ar,s=t[0];for(let r=1;r<t.length;r++){let o=t[r-1],a=t[r],l=t[r+1];if(!l){n.add(new fs(s,a));break}let c=a.clone().sub(o),h=l.clone().sub(a),u=Math.min(e,c.length()/2,h.length()/2),d=a.clone().addScaledVector(c.normalize(),-u),f=a.clone().addScaledVector(h.normalize(),u);n.add(new fs(s,d)),n.add(new or(d,a,f)),s=f,(n.bends||(n.bends=[])).push([d,c.clone()],[f,h.clone()])}return n}var Of={v123:24,v122:24,v134:24,v109:24,v110:24,v114:24,v117:24,vin:24,fg:24,v58:27,fa:14,fb:14,flt:50,clr:50,chk:15},Ff=new Set(["J","H","S1","J2","S2","J3","T117","J4","TV","R0","MR0"]),Ey=new Set(["b1","b2","bg"]),ou=new Mt({color:"#c4cbd0",metalness:.95,roughness:.28}),Ay=new Mt({color:"#4a5156",metalness:.9,roughness:.35}),Ry=new C(0,1,0),Cy=new Nt(1.5,1.5,.34,32),Iy=new Nt(.13,.13,.62,10),Zf=[],Kf=[],au=null;function Qa(i,e,t){let n=new en().setFromUnitVectors(Ry,e.clone().normalize()),s=new C(t,t,t);Zf.push(new Ve().compose(i,n,s));for(let r=0;r<6;r++){let o=r/6*Math.PI*2;Kf.push(new Ve().compose(i.clone().add(new C(Math.cos(o)*t*1.26,0,Math.sin(o)*t*1.26).applyQuaternion(n)),n,s))}au=null}function fr(){for(let[i,e,t,n]of[[Cy,ou,Zf,0],[Iy,Ay,Kf,1]]){let s=fr.meshes?.[n];s&&(Ge.remove(s),s.dispose());let r=new gi(i,e,t.length);t.forEach((o,a)=>r.setMatrixAt(a,o)),r.frustumCulled=!1,Ge.add(r),(fr.meshes||(fr.meshes=[]))[n]=r}au=fr.meshes}var Py=new Lt({color:"#000000",roughness:.02,metalness:0,envMapIntensity:1.1,transparent:!0,blending:Hr,depthWrite:!1});function Ly(i){let e=new ve(i,Ut.glass);e.renderOrder=6,Ge.add(e);let t=new ve(i,Py);return t.renderOrder=7,Ge.add(t),e}var Bf=new Set;function Jf(i,e,t){if(Bf.has(i))return;Bf.add(i);let n=new ve(new Zn(t*.995,24,16),Ut.glass);n.position.copy(e),n.renderOrder=6,Ge.add(n)}function Dy(i,e,t){let n=i.map(r=>r.slice()),s=(r,o,a)=>{let[l,c]=n[r],[h,u]=n[o],d=Math.hypot(h-l,u-c);if(!a||!d)return;let f=Math.min(a,d-1)/d;n[r][0]=l+(h-l)*f,n[r][1]=c+(u-c)*f};return s(0,1,e),s(n.length-1,n.length-2,t),n}var Uy=new zn([new Q(-9,-11),new Q(3,0),new Q(-9,11),new Q(-3,0)]),Ny=new Lt({color:"#efe4b8",roughness:.12,transmission:qf?0:.35,thickness:3,transparent:!0,opacity:.85,side:Bt});function it(i,e,t,n,s,{r=13,curve:o=null}={}){o||(n=Dy(n,Of[i]||0,Of[e]||0));let a=o||Ty(n),l=a.getLength(),c=new Gi(a,Math.max(16,Math.round(l/6)),r,16,!1);if(o){let ie=new ve(c,Ny);ie.renderOrder=6,Ge.add(ie)}else Ly(c);if(!o&&r>9)for(let[ie,ge,ce]of[[i,0,1],[e,1,-1]]){let Ce=a.getPointAt(ge),Ue=a.getTangentAt(ge).multiplyScalar(ce);if(!(Ey.has(ie)||/^M[LR]\d/.test(ie)&&!Ff.has(ie)))if(Ff.has(ie)){Jf(ie,Ce,r);continue}else Qa(Ce,Ue,r)}let h=new Ht({transparent:!0,depthWrite:!1,uniforms:{uPhase:{value:Math.random()*10},uAlpha:{value:0},uReach:{value:0},uLen:{value:l},uColor:{value:_s[s].clone()}},vertexShader:"attribute float aU;attribute float aSeed;varying float vU;varying float vS;void main(){vU=aU;vS=aSeed;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float uPhase;uniform float uAlpha;uniform float uReach;uniform float uLen;uniform vec3 uColor;varying float vU;varying float vS;void main(){if(vU/uLen>uReach)discard;float x=fract(uPhase*(.8+.4*vS)-vU/90.+vS*7.);float head=pow(1.-x,4.);float a=uAlpha*(.3+.7*head);if(a<.01)discard;gl_FragColor=vec4(mix(uColor,uColor*.5,head*.6),a);}"}),u=new ut;Ge.add(u);let d=[],f=[],m=[],x=a.getSpacedPoints(Math.max(4,Math.ceil(l/5))),g=r>9?22:8;for(let ie=0;ie<g;ie++){let ge=ie*37%g/g,ce=ie/g*Math.PI*2,Ce=r*(.25+.55*(ie*53%97/97)),Ue=[],F=[],se=[];for(let O=0;O<x.length;O++){let X=x[Math.max(0,O-1)],R=x[Math.min(x.length-1,O+1)],J=R.clone().sub(X).normalize(),ne=new C(0,1,0).cross(J);ne.lengthSq()<1e-6&&ne.set(1,0,0),ne.normalize();let pe=J.clone().cross(ne).normalize(),ue=l*O/(x.length-1),_e=ce+ue*.02,ae=x[O].clone().addScaledVector(ne,Math.cos(_e)*Ce).addScaledVector(pe,Math.sin(_e)*Ce);Ue.push(ae.x,ae.y,ae.z),F.push(ue),se.push(ge)}for(let O=1;O<F.length;O++)d.push(Ue[O*3-3],Ue[O*3-2],Ue[O*3-1],Ue[O*3],Ue[O*3+1],Ue[O*3+2]),f.push(F[O-1],F[O]),m.push(ge,ge)}let p=new ct;p.setAttribute("position",new Ye(d,3)),p.setAttribute("aU",new Ye(f,1)),p.setAttribute("aSeed",new Ye(m,1));let y=new Bn(p,h);y.renderOrder=4,y.frustumCulled=!1,u.add(y);let v=null;if(l>70){v=new ve(new Vi(Uy),new pt({color:_s[s],transparent:!0,opacity:0,depthWrite:!1}));let ie=a.getPointAt(.5),ge=a.getTangentAt(.5);v.rotation.order="YXZ",v.rotation.set(-Math.PI/2,Math.atan2(-ge.z,ge.x),0),v.position.copy(ie).add(new C(0,r+4,0)),v.renderOrder=7,Ge.add(v)}let _=new Ht({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:_s[s].clone()},uAlpha:{value:0},uReach:{value:0},uPhase:{value:Math.random()},uLen:{value:l}},vertexShader:"varying float vU;void main(){vU=uv.x;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform vec3 uColor;uniform float uAlpha;uniform float uReach;uniform float uPhase;uniform float uLen;varying float vU;void main(){if(vU>uReach)discard;float x=fract(vU*uLen/60.-uPhase);float band=smoothstep(0.,.25,x)*(1.-smoothstep(.45,.75,x));vec3 deep=vec3(.03,.16,.55);gl_FragColor=vec4(mix(deep,deep*.45,band),uAlpha*(.62+.3*band));}"}),I=new ve(new Gi(a,Math.max(16,Math.round(l/6)),r*.72,12,!1),_);I.renderOrder=3,Ge.add(I),I.visible=!1;let T=Math.max(8,Math.round(l/4)),A=a.getSpacedPoints(T-1),P=Math.max(3,Math.round(l/(r>9?16:22))),S=new Float32Array(P*3),b=new Float32Array(P),L=new Float32Array(P),H=new ct;H.setAttribute("position",new st(S,3).setUsage(Rn)),H.setAttribute("aAlpha",new st(b,1).setUsage(Rn)),H.setAttribute("aSize",new st(L,1));let z=Array.from({length:P},(ie,ge)=>(L[ge]=r*(.45+Math.random()*.45),{u:Math.random(),off:(Math.random()*2-1)*r*.45,h:(Math.random()*2-1)*r*.3,sp:.8+Math.random()*.4,wob:Math.random()*6.28})),k=new Ht({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:_s[s].clone()},uScale:{value:1},uAlpha:{value:0}},vertexShader:"attribute float aAlpha;attribute float aSize;uniform float uScale;varying float vA;void main(){vA=aAlpha;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=aSize*uScale;}",fragmentShader:"uniform vec3 uColor;uniform float uAlpha;varying float vA;void main(){vec2 c=gl_PointCoord-.5;float d=length(c)*2.;if(d>1.)discard;float rim=smoothstep(.62,.82,d)*(1.-smoothstep(.9,1.,d));float glint=smoothstep(.28,.0,length(c-vec2(-.17,-.17))*2.);vec3 col=mix(uColor,vec3(1.),glint*.8);float a=(rim*.95+.22*(1.-d)+glint*.6)*vA*uAlpha;if(a<.01)discard;gl_FragColor=vec4(col,a);}"}),ee=new Tn(H,k);ee.frustumCulled=!1,ee.renderOrder=5,Ge.add(ee);let V=Math.max(4,Math.round(l/(r>9?6:9))),le=new Float32Array(V*3),Y=new Float32Array(V),fe=new Float32Array(V),de=new ct;de.setAttribute("position",new st(le,3).setUsage(Rn)),de.setAttribute("aAlpha",new st(Y,1).setUsage(Rn)),de.setAttribute("aSize",new st(fe,1));let Se=Array.from({length:V},(ie,ge)=>(fe[ge]=r*(.18+Math.random()*.22),{u:Math.random(),off:(Math.random()*2-1)*r*.7,h:(Math.random()*2-1)*r*.5,sp:.6+Math.random()*.8,ph:Math.random()*6.28,a:.6+Math.random()*.4})),ke=new Ht({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:1},uAlpha:{value:0}},vertexShader:"attribute float aAlpha;attribute float aSize;uniform float uScale;varying float vA;void main(){vA=aAlpha;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=aSize*uScale;}",fragmentShader:"uniform float uAlpha;varying float vA;void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.)discard;vec3 col=mix(vec3(1.),vec3(.55,.62,.68),smoothstep(.55,1.,d));float a=(1.-smoothstep(.75,1.,d))*vA*uAlpha;if(a<.01)discard;gl_FragColor=vec4(col,a);}"}),$e=new Tn(de,ke);$e.frustumCulled=!1,$e.renderOrder=5,Ge.add($e);let q={from:i,to:e,key:t,air:s,path:a,len:l,mat:h,streams:u,chevron:v,fill:0,show:0,reached:!1,lut:A,N:T,bubbles:z,bpos:S,bal:b,bgeo:H,bmat:k,bpts:ee,snow:Se,spos:le,sal:Y,sgeo:de,smat:ke,spts:$e,core:I,coreMat:_};return Za.push(q),q}function Oy(i,e,t,n,s,r){i.fill=Math.min(1,Math.max(0,i.fill+(i.reached?1:-1.6)*My*e/i.len));let o=t>1,a=i.fill>0?o?1:.4:0;i.show+=(a-i.show)*Math.min(1,e*4);let l=i.mat.uniforms;l.uAlpha.value=i.show,l.uReach.value=i.fill,l.uColor.value.copy(n),l.uPhase.value+=e*(o?.2+1*Math.min(1.5,t/600):0),i.streams.visible=i.show>.01;let c=i.coreMat.uniforms;c.uAlpha.value=i.show,c.uReach.value=i.fill,c.uColor.value.copy(n),i.core.visible=i.streams.visible,c.uPhase.value+=e*(o?.5+.9*Math.min(1.5,t/600):0);let h=i.bmat.uniforms;h.uAlpha.value=i.show,h.uScale.value=s,h.uColor.value.copy(n),i.bpts.visible=!1,i.spts.visible=!1,i.chevron&&(i.chevron.visible=!1,i.chevron.material.color.copy(n),i.chevron.material.opacity=i.fill>.5?o?.55+.4*Math.sin(r/200+i.len):.3:0)}var $f=[];function lu(i,e,t,n,s){let o=new Float32Array(1680),a=new Float32Array(560),l=new Float32Array(560),c=new ct;c.setAttribute("position",new st(o,3).setUsage(Rn)),c.setAttribute("aAlpha",new st(a,1).setUsage(Rn)),c.setAttribute("aSize",new st(l,1).setUsage(Rn));let h=new Ht({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:1}},vertexShader:"attribute float aAlpha;attribute float aSize;uniform float uScale;varying float vA;void main(){vA=aAlpha;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_PointSize=aSize*uScale;}",fragmentShader:"varying float vA;void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.)discard;float a=pow(1.-d,1.8)*vA;if(a<.004)discard;gl_FragColor=vec4(mix(vec3(.42,.58,.66),vec3(.80,.89,.93),pow(1.-d,2.)),a);}"}),u=new Tn(c,h);u.frustumCulled=!1,u.renderOrder=8,Ge.add(u);let d=Array.from({length:560},()=>({age:Math.random(),life:1.6+Math.random()*1.2,live:!1}));$f.push({o:nt(i,e,mt+6),d:new C(t,0,n).normalize(),key:s,pos:o,al:a,sz:l,geo:c,mat:h,pts:u,parts:d,level:0})}function Fy(i,e,t){if(i.level+=((t>1?Math.min(1,.75+t/700):0)-i.level)*Math.min(1,e*2),i.mat.uniforms.uScale.value=uo*cn.getPixelRatio(),i.pts.visible=i.level>.01,!i.pts.visible)return;let n=new C(-i.d.z,0,i.d.x);for(let s=0;s<i.parts.length;s++){let r=i.parts[s];if(r.age+=e/r.life,r.age>=1&&(r.age%=1,r.live=Math.random()<i.level,r.sp=.75+Math.random()*.5,r.sw=(Math.floor(Math.random()*5)-2)/2+(Math.random()-.5)*.12,r.up=Math.random(),r.ph=Math.random()*6.28),!r.live){i.al[s]=0;continue}let o=r.age,a=(1-Math.pow(1-o,1.6))*230*r.sp,l=10+o*60,c=i.o.clone().addScaledVector(i.d,a).addScaledVector(n,r.sw*l+Math.sin(o*5+r.ph)*2);i.pos[s*3]=c.x,i.pos[s*3+1]=c.y+r.up*10,i.pos[s*3+2]=c.z,i.sz[s]=12+o*30,i.al[s]=i.level*.95*Math.min(1,o/.06)*Math.pow(1-o,1.2)}i.geo.attributes.position.needsUpdate=i.geo.attributes.aAlpha.needsUpdate=i.geo.attributes.aSize.needsUpdate=!0}var jf=[];function es(i,e,t,n,s,r=3,o=30){let a=new zn([new Q(-26,-3),new Q(6,-3),new Q(6,-10),new Q(20,0),new Q(6,10),new Q(6,3),new Q(-26,3)]),l=new ut;l.position.copy(nt(i,e,4)),l.rotation.y=-{r:0,d:-Math.PI/2,l:Math.PI,u:Math.PI/2}[t],Ge.add(l);let c=new pt({color:_s[n],transparent:!0,opacity:.3});for(let h=0;h<r;h++){let u=new ve(new Vi(a),c);u.rotation.x=-Math.PI/2,u.position.z=(h-(r-1)/2)*o,l.add(u)}jf.push({m:c,key:s})}var _n=new Map;function el(i,e,t=2){let n=new ve(new Ea(e-3,e+3,48),new pt({color:pr.clone(),transparent:!0,opacity:.95,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.y=t,i.add(n);let s=ho(Ya,pr.clone(),e*3,.35);return s.position.y=t-1,i.add(s),{ring:n,glow:s,color:pr.clone()}}function po(i,e,t,n,s,r,o){let a={id:i,type:e,x:t,y:n,title:s,size:r,...o};return _n.set(i,a),a}function bi(i,e,t,n,s,r="top"){let o=new ut;o.position.copy(nt(e,t,mt)),Ge.add(o);let a=44,l=30,c=n?new C(0,0,1):new C(1,0,0);o.add(new ve(new lt(n?l:a,30,n?a:l),Ut.metal));let h=new pt({color:"#1d2327"}),u=Math.hypot(a,l)-4,d=Math.atan2(l,a);for(let _ of[1,-1]){let I=new ve(new lt(u,1,2.6),h);I.position.y=15.5,I.rotation.y=(n?Math.PI/2:0)+_*d,o.add(I)}let f={top:new C(0,0,-1),bottom:new C(0,0,1),left:new C(-1,0,0),right:new C(1,0,0)}[r],m=new ut;m.position.copy(f.clone().multiplyScalar(l/2+2)).setY(20),o.add(m);let x=new ve(new lt(30,4,5),Ut.red);x.position.x=15,m.add(x);let g=new ve(new Zn(6,14,10),Ut.red);g.position.x=31,m.add(g);let p=new ve(new lt(3,4,14),Ut.red);p.position.x=22,m.add(p);let y=Math.atan2(-f.z,f.x),v=Math.atan2(-c.z,c.x);return m.rotation.y=y,po(i,"valve",e,t,s,64,{key:i,lamp:el(o,32,-10),wheel:m,wheelTarget:y,closedAngle:y,openAngle:y+Math.sign(Math.sin(v-y)||1)*Math.PI/2})}var By=new pt({color:"#111518"}),cu=mt+18;function Pn(i,e,t,n,s,r=4){let o=Math.hypot(n-e,s-t),a=new ve(new tn(o+r,r),By);return a.rotation.x=-Math.PI/2,a.rotation.z=-Math.atan2(s-t,n-e),a.position.set((e+n)/2,0,(t+s)/2),a.renderOrder=12,i.add(a),a}function zy(i,e,t){let n=new zn(e.map(([r,o])=>new Q(r,-o))),s=new ve(new Vi(n),t);return s.rotation.x=-Math.PI/2,s.position.y=-.5,s.renderOrder=11,i.add(s),s}function zf(i,e,t,n=15){let s=document.createElement("canvas"),r=8;s.width=i.length*n*r*.7+20,s.height=n*r*1.3;let o=s.getContext("2d");o.font="bold "+n*r+'px "Times New Roman", serif',o.fillStyle="#111518",o.textAlign="center",o.textBaseline="middle",o.fillText(i,s.width/2,s.height/2);let a=new Yn(s);a.colorSpace=wt,a.anisotropy=8;let l=new ve(new tn(s.width/r,s.height/r),new pt({map:a,transparent:!0,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.copy(nt(e,t,cu)),l.renderOrder=12,Ge.add(l)}var ky=new Te("#1f9e7a"),IM=new Te("#111518");function Hy(i,e,t,n){let s=new ut;s.position.copy(nt(e,t,cu)),Ge.add(s);let r=new Te("#8fb3c6"),o=new pt({color:r.clone(),transparent:!0,opacity:.42,depthWrite:!1}),a={color:pr.clone()},l=[[[-26,-17],[-26,17],[0,0]],[[26,-17],[26,17],[0,0]]];for(let c of l){let h=zy(s,c,o);h.onBeforeRender=()=>{o.color.copy(te.running?a.color:r),o.opacity=te.running?.5:.42}}for(let c of l)for(let h=0;h<3;h++)Pn(s,...c[h],...c[(h+1)%3],2.6);return Pn(s,0,0,0,-36,4),Pn(s,0,-36,32,-36,4),Pn(s,32,-36,32,-62,4),zf("EXHAUST",e+8,t-108,15),zf("KLINKET",e+8,t-86,15),po(i,"valve",e,t,n,64,{key:i,lamp:{ring:{material:a},glow:{material:{color:new Te}},color:pr.clone(),on:ky}})}function Qf(i,e,t,n,s){let r=new ut;r.position.copy(nt(t,n,mt)),Ge.add(r),r.add(new ve(new lt(24,30,32),Ut.metal));let o=new ve(new lt(30,3,4),new pt({color:"#14191c"}));o.position.y=16,r.add(o),r.add(new ve(new Nt(3.5,3.5,3,12),new pt({color:"#ffcf5a"}))).position.y=18;let a=new ve(new lt(3,3,18),Ut.dark);a.position.set(0,16,-24),r.add(a);let l=new ve(new lt(16,3,3),Ut.dark);return l.position.set(0,16,-33),r.add(l),o.rotation.y=Math.PI/2,po(i,"flap",t,n,s,60,{key:e,lamp:el(r,26,-10),blade:o,bladeTarget:Math.PI/2})}var kf=(()=>{let e=((n,s)=>{let r=new C().crossVectors(s,n).normalize(),o=new C().crossVectors(n,r);return new Ve().makeBasis(r,o,n)})(new C(.1943,.2092,-.9584).normalize(),new C(0,1,0)),t=new Ve().makeBasis(new C(1,0,0),new C(0,0,-1),new C(0,1,0));return new en().setFromRotationMatrix(t.multiply(e.transpose()))})();function hu(i,e,t,n,s,r){let o=new ut;o.position.copy(nt(e,t,mt)),Ge.add(o);let a=new ut;a.position.set(-n*.8,40,-n*.42),o.add(a);let l=po(i,"blower",e,t,s,n,{key:i,rotor:null,speed:0,angle:0,group:o,lamp:el(a,10,0)});return Ga().then(c=>{let h=c.clone(!0),u=new ut;u.add(h),u.quaternion.copy(kf),o.add(u);let d=h.getObjectByName("Air_Inlet"),f=h.getObjectByName("Air_Outlet"),m=d?d.position.clone():new C(.2,.345,0),x=new C(.09,f?f.position.y:.722,-.265);u.updateMatrixWorld(!0);let g=new an().setFromObject(u);u.scale.setScalar(n/(g.max.x-g.min.x)),u.updateMatrixWorld(!0);let p=u.localToWorld(m.clone()).sub(o.position);u.position.sub(p),u.updateMatrixWorld(!0);let y=u.localToWorld(x.clone()),v=new C(0,1,0).applyQuaternion(kf);l.rotor=h.getObjectByName("Rotor");let _=T=>[T.x+1e3,T.z+786,T.y],I=new an().setFromObject(u).max.y+14;r(_(y),_(y.clone().addScaledVector(v,28)),I),sl()}).catch(c=>{console.error("Blower model failed",c);let h=document.querySelector("#vent-warning");h&&(h.textContent="\u26A0 Blower model did not load: "+(c?.message||c),h.className="",h.style.opacity="1")}),l}function ep(i,e,t,n,s){let r=new ut;r.position.copy(nt(t,n,mt)),Ge.add(r);let o=new Mt({color:"#3b4448",metalness:.5,roughness:.45,emissive:"#ff5a10",emissiveIntensity:0}),a=110,l=44,c=80,h=new ve(new lt(a-8,4,c-8),o);h.position.y=-l/2+4,r.add(h);for(let[v,_,I,T]of[[a,4,0,-c/2+2],[a,4,0,c/2-2],[4,c,-a/2+2,0],[4,c,a/2-2,0]]){let A=new ve(new lt(v,l,_),o);A.position.set(I,0,T),r.add(A)}r.add(new Bn(new ms(new lt(a,l,c)),new wn({color:"#1d2327"})));let u=[];for(let v=0;v<2;v++)for(let _=0;_<6;_++){let I=-a/2+14+_*(a-28)/5,T=v?13:-13,A=new ve(new Nt(2.6,3.2,4,10),new Mt({color:"#20262a",metalness:.6,roughness:.4}));A.position.set(I,-l/2+8,T),r.add(A);let P=ho(by,"#ffffff",1,0);P.position.set(I,-2,T-7),P.renderOrder=8,r.add(P),u.push({f:P,x0:I,ph:Math.random()*6.28,sp:9+Math.random()*6})}let d=ho(Ya,"#ff6a1a",1,0);d.scale.set(a*1.1,c*1.1,1),d.position.y=-6,d.renderOrder=7,r.add(d);let f=new ve(new lt(a-6,2,c-6),new Lt({color:"#3a2a22",roughness:.05,transparent:!0,opacity:.32,clearcoat:1,depthWrite:!1}));f.position.y=l/2-1,f.renderOrder=9,r.add(f);let m=ho(Ya,"#ff8a2a",230,0);m.position.y=10,m.renderOrder=9,r.add(m);let x=document.createElement("canvas");x.width=640,x.height=460;let g=new Yn(x);g.colorSpace=wt,g.anisotropy=8;let p=new ve(new tn(a-4,c-4),new pt({map:g,transparent:!0,toneMapped:!1}));p.rotation.x=-Math.PI/2,p.position.y=l/2+1.5,p.renderOrder=10,r.add(p);let y=new ut;return y.position.set(66,0,-46),r.add(y),po(i,"burner",t,n,s,110,{key:e,lamp:el(y,9,24),mat:o,glow:m,nozzles:u,ember:d,face:{c:x,tex:g,shown:""},label:s.replace("H\u2082 burner","H\u2082 BURNER")})}function tp(i,e,t){let n=$a(128,(a,l)=>{if(a.fillStyle=t==="cool"?"#4e94c4":"#ffffff",a.fillRect(0,0,l,l),t==="cool"){a.strokeStyle="rgba(255,255,255,.6)",a.lineWidth=4;for(let c=1;c<7;c++)a.beginPath(),a.moveTo(c*l/7,8),a.lineTo(c*l/7,l-8),a.stroke()}else{a.fillStyle="#1d2327";for(let c=0;c<9;c++)a.beginPath(),a.arc(l*(.15+c*.0875),l*(.15+c*.0875),4,0,7),a.fill()}}),s=new Mt({color:t==="cool"?"#2f6f9e":"#46525a",metalness:.5,roughness:.4}),r=new Mt({map:n,metalness:.3,roughness:.5}),o=new ve(new lt(68,40,68),[s,s,r,s,s,s]);return o.rotation.y=Math.PI/4,o.position.copy(nt(i,e,mt)),Ge.add(o),{side:s,face:r}}function np(i,e,t){let n=new ut;n.position.copy(nt(i,e,mt)),n.rotation.y=-{r:0,l:Math.PI}[t],Ge.add(n);let s=new zn([new Q(-14,-30),new Q(16,-46),new Q(16,46),new Q(-14,30)]),r=new ve(new Ta(s,{depth:30,bevelEnabled:!1}),Ut.metal);r.rotation.x=-Math.PI/2,r.position.y=-15,n.add(r);for(let o=-3;o<=3;o++){let a=new ve(new lt(16,3,3),Ut.dark);a.position.set(8,16,o*11),n.add(a)}}var Vy=new Mt({color:"#8d989f",metalness:.7,roughness:.4});function _r(i,e=2.5){let t=new ar;for(let n=1;n<i.length;n++)t.add(new fs(nt(i[n-1][0],i[n-1][1],mt-4),nt(i[n][0],i[n][1],mt-4)));Ge.add(new ve(new Gi(t,i.length*4,e,8,!1),Vy))}function ip(i,e){let t=new ve(new Nt(5,5,8,14),ou);t.position.copy(nt(i,e,mt+14)),Ge.add(t)}function uu(i,e){ip(i,e);let t=new ve(new Nt(6,6,10,14),Ut.metal);t.position.copy(nt(i,e,mt+14)),Ge.add(t);let n=new ve(new Zn(7,14,10),Ut.dark);n.position.copy(nt(i,e-14,mt+18)),Ge.add(n),_r([[i,e],[i,e-14]],2)}function sp(i,e,t){let n=new ut;n.position.copy(nt(i,e+18,mt)),Ge.add(n);let s=new ve(new Nt(16,30,26,32,1,!0),Ut.glass);s.rotation.x=Math.PI/2,s.renderOrder=6,n.add(s);let r=new ve(new Kn(30,2.4,8,32),ou);r.position.z=13,n.add(r);let o=new ve(new ps(28,32),new pt({color:"#5d6b72",transparent:!0,opacity:.35}));o.position.z=12,n.add(o)}function Gy(i,e){let t=new zn([new Q(-14,-14),new Q(14,-14),new Q(0,12)]),n=new ve(new Vi(t),Ut.dark);n.rotation.x=-Math.PI/2,n.position.copy(nt(i,e,mt+16)),Ge.add(n);let s=new ve(new Nt(16,16,26,20),Ut.metal);s.rotation.z=Math.PI/2,s.position.copy(nt(i,e,mt)),Ge.add(s)}function Wy(i,e,t="arrow"){let n=document.createElement("canvas");n.width=n.height=256;let s=new Yn(n);s.colorSpace=wt,s.anisotropy=cn.capabilities.getMaxAnisotropy();let r=new pt({map:s}),o=new Mt({color:"#c9d2d7",metalness:.7,roughness:.3}),a=new ve(new Nt(20,20,8,32),[o,r,o]);a.position.copy(nt(i,e,mt)),Ge.add(a);let l=null;return c=>{let h=Math.round(c);if(h===l)return;l=h;let u=n.getContext("2d");if(u.fillStyle="#ffffff",u.beginPath(),u.arc(128,128,120,0,7),u.fill(),u.strokeStyle="#1d2327",u.lineWidth=16,u.stroke(),u.fillStyle=u.strokeStyle="#1d2327",t==="V")u.save(),u.translate(128,128),u.rotate(-Math.PI/2),u.font="bold 150px Georgia, serif",u.textAlign="center",u.textBaseline="middle",u.fillText("V",0,12),u.restore();else{let d=-Math.PI*(.85-.7*Math.min(1,Math.max(0,(c-20)/200))),f=Math.cos(d),m=Math.sin(d),x=128-f*72,g=128-m*72,p=128+f*78,y=128+m*78;u.lineWidth=12,u.beginPath(),u.moveTo(x,g),u.lineTo(p-f*20,y-m*20),u.stroke(),u.beginPath(),u.moveTo(p,y),u.lineTo(p-f*40-m*22,y-m*40+f*22),u.lineTo(p-f*40+m*22,y-m*40-f*22),u.closePath(),u.fill()}s.needsUpdate=!0}}var PM=ja.filter(i=>i.x<1e3).sort((i,e)=>e.x-i.x),LM=ja.filter(i=>i.x>1e3).sort((i,e)=>e.x-i.x);it("pitOut","J","out",[[270,1300],[270,1095]],"dirty");sp(270,1300,"in");it("J","v123","draught",[[270,1095],[270,1e3]],"dirty");it("v123","TV","draught",[[270,1e3],[270,360]],"dirty");it("TV","v58","draught",[[270,360],[140,360]],"dirty");it("v58","overboard","draught",[[140,360],[60,360]],"dirty");it("vent","TV","draught",[[300,320],[300,360],[270,360]],"room");{let i=new ut;i.position.copy(nt(300,312,mt+18)),Ge.add(i),Pn(i,-22,0,22,0,6)}it("J","H","header",[[270,1095],[385,1095]],"dirty");it("H","v122","qm",[[385,1095],[385,1e3]],"dirty");it("H","v134","qgPit",[[385,1095],[520,1095],[520,990]],"dirty");it("v122","flt","qm",[[385,1e3],[385,760]],"dirty");it("flt","S1","qm",[[385,760],[385,585]],"dirty");it("S1","fa","qa",[[385,585],[385,440],[490,440]],"dirty");it("S1","fb","qb",[[385,585],[490,585]],"dirty");it("fa","h1","qa",[[490,440],[585,440]],"dirty");it("fb","h2","qb",[[490,585],[595,585]],"dirty");it("h1","J2","qa",[[695,440],[790,440],[790,512]],"clean");it("h2","J2","qb",[[705,585],[790,585],[790,512]],"clean");it("J2","clr","qm",[[790,512],[910,512]],"clean");it("clr","S2","qm",[[910,512],[1035,512]],"clean");it("S2","v109","q1",[[1035,512],[1035,420],[1140,420]],"clean");it("S2","v110","q2",[[1035,512],[1035,555],[1150,555]],"clean");it("J3","T117","qm",[[1445,450],[1545,450]],"clean");it("T117","v114","toCompt",[[1545,450],[1580,450]],"clean");it("v114","compartment","toCompt",[[1580,450],[1625,450]],"clean");it("T117","v117","recirc",[[1545,450],[1545,960]],"clean");it("v117","chk","recirc",[[1545,960],[1545,1020],[1595,1020]],"clean");it("chk","J4","recirc",[[1595,1020],[1640,1020]],"clean");it("compt","vin","inlet",[[1675,790],[1640,790],[1640,950]],"room");it("vin","J4","inlet",[[1640,950],[1640,1020]],"room");it("J4","pitIn","pitIn",[[1640,1020],[1640,1300]],"room");sp(1640,1300,"out");it("compt","fg","qgRoom",[[625,750],[560,750],[560,825]],"room");bi("v123",270,1e3,!0,"Valve 123","left");Hy("v58",140,360,"Exhaust Klinket 58");bi("v122",385,1e3,!0,"Valve 122","right");bi("v109",1140,420,!1,"Valve 109");bi("v110",1150,555,!1,"Valve 110");bi("v114",1580,450,!1,"Valve 114");bi("v117",1545,960,!0,"Valve 117","left");bi("vin",1640,950,!0,"Valve 118 (inlet from outside)","right");bi("v134",520,990,!0,"Valve 134","right");Qf("fa","a",490,440,"Flap 103 (burner 1)");Qf("fb","b",490,585,"Flap 103 (burner 2)");Object.assign(bi("fg",560,825,!0,"Galley flap","right"),{type:"flap",key:"g"});ep("h1","a",640,440,"H\u2082 burner 1");ep("h2","b",650,585,"H\u2082 burner 2");hu("b1",1300,420,140,"Blower 1",([i,e,t],[n,s,r],o)=>{it("v109","b1","q1",[[1140,420],[1300,420]],"clean"),Qa(nt(1298,420,mt),new C(1,0,0),13),it("b1","J3","q1",[[i,e,t],[n,s,r],[1445,s,r],[1445,450]],"clean")});hu("b2",1300,555,140,"Blower 2",([i,e,t],[n,s,r],o)=>{it("v110","b2","q2",[[1150,555],[1300,555]],"clean"),Qa(nt(1298,555,mt),new C(1,0,0),13),it("b2","J3","q2",[[i,e,t],[n,s,r],[1445,s,r],[1445,450]],"clean")});hu("bg",650,880,122,"Galley blower",([i,e,t],[n,s,r],o)=>{it("v134","bg","qgPit",[[520,990],[520,880],[650,880]],"dirty"),Qa(nt(648,880,mt),new C(1,0,0),13),it("fg","bg","qgRoom",[[560,825],[560,880]],"room"),Jf("GJ",nt(560,880,mt),13),it("bg","galley","qg",[[i,e,t],[n,s,r],[780,s,r]],"dirty"),lu(782,s,1,0,"qg"),es(830,s,"r","dirty","qg",2,26)});var Hf=tp(385,760,"filter");tp(910,512,"cool");var rp=new Te("#8e9ca3"),$h=rp.clone();{let i=new ut;i.position.copy(nt(0,890,cu)),Ge.add(i),Pn(i,318,0,328,0,3.5),Pn(i,330,-11,330,11,3.5),Pn(i,330,-11,342,-11,3.5),Pn(i,330,11,342,11,3.5),Pn(i,347,-13,347,13,3.5),Pn(i,352,-13,352,13,3.5),Pn(i,352,0,372,0,3.5)}function Vf(i,e,t){let n=document.createElement("canvas");n.width=n.height=512;let s=new Yn(n);s.colorSpace=wt,s.anisotropy=8;let r=29,o=new ve(new Nt(r+3,r+3,8,40),new Mt({color:"#c9d2d7",metalness:.75,roughness:.3}));o.position.copy(nt(i,e,mt)),Ge.add(o);let a=new ve(new ps(r,48),new pt({map:s,toneMapped:!1}));a.rotation.x=-Math.PI/2,a.position.copy(nt(i,e,mt+4.2)),a.renderOrder=3,Ge.add(a);let l=-1,c=Ot.ambient,h=u=>(-225+Math.min(150,Math.max(0,u))/150*270)*Math.PI/180;return(u,d)=>{c+=(u-c)*Math.min(1,d*3);let f=Math.round(c*2)/2;if(f===l)return;l=f;let m=n.getContext("2d"),x=256;m.clearRect(0,0,512,512),m.fillStyle="#fbfcfd",m.beginPath(),m.arc(x,x,250,0,7),m.fill(),m.lineWidth=12,m.strokeStyle="#26323a",m.stroke();for(let[y,v,_]of[[0,40,"#2f7fd0"],[40,70,"#f08a24"],[70,150,"#d8322b"]])m.beginPath(),m.arc(x,x,205,h(y),h(v)),m.lineWidth=26,m.strokeStyle=_,m.stroke();m.strokeStyle="#26323a",m.fillStyle="#26323a",m.textAlign="center",m.textBaseline="middle";for(let y=0;y<=150;y+=10){let v=h(y),_=y%50===0,I=_?165:180;m.lineWidth=_?7:4,m.beginPath(),m.moveTo(x+218*Math.cos(v),x+218*Math.sin(v)),m.lineTo(x+I*Math.cos(v),x+I*Math.sin(v)),m.stroke(),_&&(m.font="bold 38px Arial",m.fillText(y,x+132*Math.cos(v),x+132*Math.sin(v)))}let g=c<40?"#2f7fd0":c<=70?"#e07b14":"#d8322b";m.font="bold 40px Arial",m.fillStyle="#4a5a64",m.fillText(t,x,x-70),m.font="bold 66px Arial",m.fillStyle=g,m.fillText(Math.round(c)+"\xB0C",x,x+118);let p=h(c);m.strokeStyle="#c8261c",m.lineWidth=12,m.lineCap="round",m.beginPath(),m.moveTo(x-40*Math.cos(p),x-40*Math.sin(p)),m.lineTo(x+190*Math.cos(p),x+190*Math.sin(p)),m.stroke(),m.fillStyle="#26323a",m.beginPath(),m.arc(x,x,22,0,7),m.fill(),s.needsUpdate=!0}}var Gf=[Vf(632,690,"B1"),Vf(694,690,"B2")];_r([[580,585],[580,690],[612,690]]);_r([[652,690],[674,690]]);_r([[714,690],[745,690],[745,585]]);_r([[845,512],[845,345],[877,345]]);_r([[917,345],[950,345],[950,512]]);var Xy=Wy(897,345,"V");[[580,585],[745,585],[845,512],[950,512]].forEach(([i,e])=>ip(i,e));uu(755,440);uu(770,585);uu(990,512);Gy(1595,1020);function qy(i,e){let t=new ut;t.position.copy(nt(i,e-22,mt+10)),Ge.add(t),t.add(new ve(new lt(2.5,3,12),Ut.dark));for(let n of[-6,-11]){let s=new ve(new lt(14,3,2.5),Ut.dark);s.position.z=n,t.add(s)}}[[445,440],[455,585],[728,440],[740,585],[1468,450],[1498,450],[1563,450]].forEach(([i,e])=>qy(i,e));for(let i of[-5,5]){let e=new ve(new Nt(17,17,3,20),Ut.dark);e.rotation.x=Math.PI/2,e.position.copy(nt(385,1060+i,mt)),Ge.add(e)}{let i=new ut;i.position.copy(nt(385,950,mt)),Ge.add(i);let e=new ve(new lt(18,3,2.5),Ut.dark);e.position.x=-22,i.add(e);let t=new ve(new lt(2.5,3,10),Ut.dark);t.position.x=-31,i.add(t)}for(let i of[-6,0,6]){let e=new ve(new Kn(15,2,8,24),Ut.dark);e.position.copy(nt(385,842+i,mt)),Ge.add(e)}{let i=new ve(new Vi(new zn([new Q(-13,-10),new Q(13,-10),new Q(0,14)])),new pt({color:"#5d6b72"}));i.rotation.x=-Math.PI/2,i.position.copy(nt(270,630,mt+18)),Ge.add(i)}np(1645,450,"r");np(1690,790,"l");lu(60,360,-1,0,"draught");lu(1665,450,1,0,"toCompt");es(1720,450,"r","clean","toCompt");es(1765,790,"l","room","inlet");es(30,360,"l","dirty","draught",1);es(680,750,"l","room","qgRoom",1);es(365,345,"l","room","draught",1);es(360,1345,"l","dirty","out",2,40);es(1600,1285,"l","room","pitIn",2,40);var op=()=>({running:!1,open:{v58:!1,v123:!1,v122:!1,v134:!1,v109:!1,v110:!1,v114:!1,v117:!1,vin:!1},flap:{a:!1,b:!1,g:!1},on:{b1:!1,b2:!1,bg:!1},set:{b1:1,b2:1,bg:1},burn:{a:!1,b:!1},pit:{h2:0,Ta:Ot.ambient,Tb:Ot.ambient,Tcool:Ot.ambient,after:0,burnt:0}}),te=op(),Dt=Jh({open:te.open,flap:te.flap,speed:{b1:0,b2:0,bg:0}}),tl=i=>i.type==="valve"?te.open[i.key]:i.type==="flap"?te.flap[i.key]:i.type==="blower"?te.on[i.key]:te.burn[i.key],Yy=i=>i.type==="blower"?te.on[i.key]?"RUNNING":"STOPPED":i.type==="burner"?te.burn[i.key]?"ON":"OFF":tl(i)?"OPEN":"CLOSED",Zy=i=>i in te.open?te.open[i]:i==="fa"?te.flap.a:i==="fb"?te.flap.b:i==="fg"?te.flap.g:i in te.on?te.on[i]:!0;function Ky(){let i=new Set(te.running?["pitOut","compt","vent"]:[]);for(let e of Za)e.reached=!1;for(let e=!0;e;){e=!1;for(let t of Za)!t.reached&&i.has(t.from)&&Zy(t.from)&&(t.reached=!0,e=!0,i.add(t.to))}}{let i=document.createElement("style");i.textContent=`#vent-warning,#h2-alarm{position:absolute;left:50%;transform:translateX(-50%);z-index:20;padding:10px 18px;border-radius:10px;font:700 15px/1.3 system-ui;box-shadow:0 6px 24px #0008;pointer-events:none;transition:opacity .3s;max-width:90%;text-align:center;background:#1d2224ee}
#vent-warning{top:18px;border:1.5px solid #e74c3c;color:#ff5a4d;opacity:0}#vent-warning.info{border-color:#22b45a;color:#bff5cf}
#h2-alarm{bottom:14px;border:1.5px solid #ffb020;color:#ffd27a;display:none}#h2-alarm.red{border-color:#ff4a3d;color:#ff8c84}`,document.head.append(i)}for(let i of _n.values()){let e=document.createElement("button");e.className="part-button",e.setAttribute("aria-label",i.title),e.dataset.part=i.id,e.addEventListener("click",()=>ap(i.id)),fo.append(e),i.button=e}var $i=document.createElement("div");$i.id="vent-warning";$i.setAttribute("role","alert");Ja.append($i);var vs=document.createElement("div");vs.id="h2-alarm";vs.setAttribute("role","status");Ja.append(vs);var Wf=0;function gr(i,e=!1){$i.textContent=i,$i.className=e?"info":"",$i.style.opacity="1",clearTimeout(Wf),Wf=setTimeout(()=>{$i.style.opacity="0"},e?2200:4e3)}var Ji=i=>gr(i),Jy={v58:"58",v123:"123",v122:"122",v134:"134",v109:"109",v110:"110",v114:"114",v117:"117",vin:"118"};function $y(i){let e=te.open,t=te.flap,n=[];return i==="bg"?(!e.v134&&!t.g&&n.push("134 or the galley flap"),n):(e.v122||n.push("122"),!t.a&&!t.b&&n.push("a FLAP 103"),i==="b1"&&!e.v109&&n.push("109"),i==="b2"&&!e.v110&&n.push("110"),!e.v114&&!e.v117&&n.push("114 or 117"),n)}function jy(i){let e=te.open,t=te.flap,n=te.on,s=n.b1||n.b2,r=i.key;if(i.type==="valve"){if(r==="v109"&&n.b1)return"Stop Blower 1 before closing 109.";if(r==="v110"&&n.b2)return"Stop Blower 2 before closing 110.";if(r==="v122"&&s)return"Stop the running blower before closing 122.";if((r==="v114"&&!e.v117||r==="v117"&&!e.v114)&&s)return"Stop the running blower before closing "+Jy[r]+" \u2014 it is the only outlet.";if(r==="v134"&&n.bg&&!t.g)return"Stop the galley blower before closing 134."}else if(i.type==="flap"){if((r==="a"||r==="b")&&s&&!(r==="a"?t.b:t.a))return"Stop the blowers before closing the last FLAP 103.";if(r==="g"&&n.bg&&!e.v134)return"Stop the galley blower before closing its flap."}return""}var iu={};function ap(i){let e=performance.now();if(e-(iu[i]??-1e9)<450)return;iu[i]=e;let t=_n.get(i);if(!te.running){Ji("\u26A0 Circuit is OFF \u2014 choose a mode or press Start first.");return}if(vn&&i==="v114"&&te.open.v114&&te.open.v122&&!$n){$n=!0,t.wheelTarget=(t.openAngle+t.closedAngle)/2,gr("Valve 114 \xB7 CRACKED OPEN",!0);return}i==="v114"&&$n&&($n=!1);let n=tl(t);if(t.type==="valve"||t.type==="flap"){let s=t.type==="valve"?te.open:te.flap;if(s[t.key]){let r=jy(t);if(r){Ji("\u26A0 "+r);return}}s[t.key]=!s[t.key],t.wheel&&(t.wheelTarget=s[t.key]?t.openAngle:t.closedAngle),t.blade&&(t.bladeTarget=s[t.key]?0:Math.PI/2)}else if(t.type==="blower"){if(!te.on[t.key]&&!vn){let s=$y(t.key);if(s.length){Ji("\u26A0 "+t.title+" cannot start \u2014 open "+s.join(", ")+" first.");return}}te.on[t.key]=!te.on[t.key],te.on[t.key]&&t.key!=="bg"&&!te.open.vin&&!te.open.v117&&setTimeout(()=>te.on[t.key]&&!te.open.vin&&!te.open.v117&&Ji("\u26A0 118 is closed \u2014 the pit cannot draw fresh air."),1500)}else if(t.type==="burner"){te.burn[t.key]=!te.burn[t.key];let s=t.key==="a"?Dt.qa:Dt.qb;if(te.burn[t.key]&&s<=0){Ji("\u26A0 "+t.title+" is ON but has no air \u2014 open 122 and its FLAP 103, and run a blower.");return}}gr(t.title+" \xB7 "+Yy(t),!0),setTimeout(()=>aM(i,n),0)}var jh=(i,e,t)=>Pf({title:e,flow:t,speed:()=>_n.get(i).speed,running:()=>te.on[i],setPoint:()=>te.set[i],setSpeed:n=>{te.set[i]=n},toggle:()=>{let n=te.on[i];return iu[i]=-1e9,ap(i),te.on[i]===n?$i.textContent:""}}),lp=[["b1",1355,468,()=>jh("b1","Blower 1",()=>Dt.q1)],["b2",1355,603,()=>jh("b2","Blower 2",()=>Dt.q2)],["bg",705,925,()=>jh("bg","Galley blower",()=>Dt.qg)],["cellsL",760,1350,()=>_h({side:"port",pressure:.145,title:"Battery cell \xB7 left bank (pit air out)"})],["cellsR",1550,1350,()=>_h({side:"stbd",pressure:.145,title:"Battery cell \xB7 right bank (fresh air in)"})]].map(([i,e,t,n])=>{let s=document.createElement("button");return s.className="vinfo",s.setAttribute("aria-label",i+" details"),s.innerHTML="<span>i</span>",s.addEventListener("click",n),fo.append(s),{id:i,x:e,y:t,button:s}});{let i=document.createElement("style");i.textContent=`.vinfo{position:absolute;transform:translate(-50%,-50%);width:44px;height:44px;border:0;background:transparent;pointer-events:auto;padding:0;cursor:pointer}
.vinfo span{display:block;margin:auto;width:24px;height:24px;border-radius:50%;border:2px solid #1f3a33;color:#1f3a33;font:700 15px/20px Georgia,serif;text-align:center;background:#ffffffd9}`,document.head.append(i)}var su=document.querySelector("#start"),Qy=document.querySelector("#reset");function du(){for(let i in te.open)te.open[i]=!1;for(let i in te.flap)te.flap[i]=!1;for(let i in te.on)te.on[i]=!1;for(let i in te.burn)te.burn[i]=!1;for(let i of _n.values())i.wheel&&(i.wheelTarget=i.closedAngle),i.blade&&(i.bladeTarget=Math.PI/2)}function nl(){su.innerHTML=te.running?"<span>\u2161</span> Pause":"<span>\u25B6</span> Start",su.setAttribute("aria-pressed",String(te.running))}su.addEventListener("click",()=>{te.running=!te.running,te.running||(du(),vn=0,$n=!1),nl()});Qy?.addEventListener("click",()=>{te.running=!1,vn=0,$n=!1,du(),Object.assign(te.pit,op().pit),nl(),gr("Circuit reset \u2014 all valves closed, H\u2082 cleared.",!0)});nl();{let i=document.createElement("style");i.textContent=`
.port-no{position:absolute;transform:translate(-50%,-50%);pointer-events:none;font:700 clamp(10px,calc(var(--k,1)*22px),30px)/1 Arial,sans-serif;color:#fff;background:#1d4f6e;border:2px solid #fff;border-radius:.5em;padding:.18em .42em;box-shadow:0 .15em .5em #0b2a3d55;white-space:nowrap;z-index:3}
.port-no.dim{background:#6b8494}
.vcard{position:absolute;font-family:Arial,sans-serif;color:#173f57;background:linear-gradient(180deg,#ffffffee,#eef5faee);border:1.5px solid #9dbcd2;border-radius:1em;box-shadow:0 .5em 1.6em #12405e26;pointer-events:auto;z-index:4}
.btemp{transform:translate(-50%,-50%);font-size:clamp(7px,calc(var(--k,1)*14px),26px);width:15em;padding:.7em .9em .8em;text-align:center}
.btemp h3,.modes h3{margin:0 0 .35em;font-size:.8em;letter-spacing:.14em;color:#3c6680}
.btemp .tv{font:700 2em/1.1 Arial;color:#2f7fd0;transition:color .3s}.btemp .tv small{font-size:.45em;margin-left:.15em}
.btemp .row{display:flex;gap:.4em;align-items:center;margin-top:.45em}.btemp input{flex:1;min-width:0;accent-color:#d8622b;height:1.8em}
.btemp button{width:2.3em;height:2.3em;border-radius:.6em;border:1px solid #a9c4d6;background:#fff;font:700 1.1em/1 Arial;color:#1d4d6b;padding:0}
.btemp .scale{display:flex;height:.45em;border-radius:.3em;overflow:hidden;margin-top:.5em}.btemp .scale i{flex:40}.btemp .scale i:nth-child(2){flex:30}.btemp .scale i:nth-child(3){flex:50}
.btemp .lg{display:flex;justify-content:space-between;font-size:.68em;color:#56778c;margin-top:.2em}
.modes{transform:translate(-50%,-50%);font-size:clamp(7px,calc(var(--k,1)*14px),26px);width:27em;padding:.8em 1em 1em}
.modes .tabs{display:grid;grid-template-columns:repeat(5,1fr);gap:.35em;margin-bottom:.6em}
.modes .tabs button{min-height:3.2em;border-radius:.6em;border:1px solid #a9c4d6;background:#fff;color:#1d4d6b;font:700 .82em/1.15 Arial;padding:.2em}
.modes .tabs button small{display:block;font-weight:400;font-size:.82em;color:#5a7586}
.modes .tabs button.on{background:#1d4f6e;border-color:#1d4f6e;color:#fff}.modes .tabs button.on small{color:#cfe3f0}
.modes .tabs button:disabled{opacity:.45}
.modes ol{list-style:none;margin:0;padding:0;display:grid;gap:.3em}
.modes li{display:flex;gap:.6em;align-items:center;padding:.42em .6em;border-radius:.55em;background:#f3f7fa;color:#5a7586;font-size:.95em}
.modes li b{flex:0 0 auto;width:1.7em;height:1.7em;border-radius:50%;display:grid;place-items:center;background:#d5e2ea;color:#4a6577;font-size:.85em}
.modes li.done{color:#126b3c;background:#e6f6ec}.modes li.done b{background:#22a35a;color:#fff}
.modes li.now{color:#0f4566;background:#e1effa;outline:2px solid #1f7fbf;font-weight:700}.modes li.now b{background:#1f7fbf;color:#fff}
.modes .msg{margin-top:.55em;padding:.5em .7em;border-radius:.55em;font-weight:700;font-size:.92em;display:none}
.modes .msg.ok{display:block;background:#e3f6ea;color:#126b3c}.modes .msg.bad{display:block;background:#fdecea;color:#a8322a}
.modes .hint{font-size:.8em;color:#5a7586;margin:.1em 0 .5em}
.modes .cur{font-size:1em;color:#0f4566;line-height:1.35}.modes .cur b{color:#1f7fbf;margin-right:.3em}
.modes .dots{display:flex;gap:.35em;margin-top:.5em}.modes .dots i{width:.75em;height:.75em;border-radius:50%;background:#d5e2ea}.modes .dots i.d{background:#22a35a}.modes .dots i.n{background:#1f7fbf;box-shadow:0 0 0 .2em #1f7fbf44}
.tap-tip{position:absolute;transform:translate(-50%,-100%);pointer-events:none;z-index:6;font:700 clamp(10px,calc(var(--k,1)*15px),28px)/1.25 Arial,sans-serif;background:#1f7fbf;color:#fff;padding:.45em .75em;border-radius:.7em;box-shadow:0 .4em 1.2em #0b2a3d55;max-width:16em;text-align:center;animation:tipBob 1.2s ease-in-out infinite}
.tap-tip b{display:block;letter-spacing:.06em}.tap-tip span{display:block;font-weight:400;font-size:.82em;opacity:.95}
.tap-tip::after{content:"";position:absolute;left:50%;bottom:-.5em;transform:translateX(-50%);border:.55em solid transparent;border-bottom:0;border-top-color:#1f7fbf}
@keyframes tipBob{50%{translate:0 -.35em}}
.mode-bar{position:absolute;left:14px;top:50%;transform:translate(-10px,-50%);display:flex;flex-direction:column;gap:10px;z-index:15;opacity:0;pointer-events:none;transition:opacity .35s,transform .35s;font-family:Arial,sans-serif}
.mode-bar.show{opacity:1;transform:translate(0,-50%);pointer-events:auto}
.mode-bar button{width:clamp(96px,8.6vw,200px);min-height:clamp(52px,4.6vw,96px);text-align:left;padding:6px 14px;border-radius:12px;border:2px solid #1d4f6e;background:#fff;color:#1d4f6e;font:700 clamp(14px,1.05vw,24px)/1.15 Arial;box-shadow:0 4px 14px #12405e22;cursor:pointer;transition:background .2s,color .2s,transform .12s}
.mode-bar button small{display:block;font-weight:400;font-size:.72em;opacity:.8}
.mode-bar button:active{transform:scale(.96)}.mode-bar button.on{background:#1d4f6e;color:#fff;box-shadow:0 0 0 4px #1d4f6e33,0 4px 14px #12405e33}
.mode-bar button.soon{border-style:dashed;opacity:.55}
.port-no{transition:background .3s,opacity .3s,transform .3s}
.port-no em{font-style:normal;font-size:.62em;margin-left:.35em;letter-spacing:.06em;vertical-align:.12em}
.port-no.is-open{background:#1e9e5a!important;opacity:1!important}.port-no.is-crack{background:#d98a14!important;opacity:1!important}
.port-no.flash{animation:portFlash .5s ease-in-out 4}@keyframes portFlash{50%{box-shadow:0 0 0 .5em #1e9e5a66;scale:1.25}}.port-no.use{background:#1f7fbf;transform:translate(-50%,-50%) scale(1.12)}.port-no.dim{opacity:.35}
.part-button.next{animation:nextRing 1.1s ease-in-out infinite;border-radius:50%}
@keyframes nextRing{0%,100%{box-shadow:0 0 0 3px #1f7fbf,0 0 0 0 #1f7fbf66}50%{box-shadow:0 0 0 3px #1f7fbf,0 0 0 14px #1f7fbf00}}
.vinfo-card{position:fixed;inset:0;background:#0b2a3d55;display:grid;place-items:center;z-index:50}
.vinfo-card>div{width:min(460px,92vw);background:#fff;border-radius:16px;padding:20px 22px;font:15px/1.5 Arial,sans-serif;color:#173f57;box-shadow:0 20px 60px #0008}
.vinfo-card h2{margin:0 0 6px;font-size:20px}.vinfo-card p{margin:6px 0;color:#3f5f72}.vinfo-card dl{display:grid;grid-template-columns:auto 1fr;gap:6px 14px;margin:12px 0}.vinfo-card dt{color:#5a7586}.vinfo-card dd{margin:0;font-weight:700;text-align:right}
.vinfo-card button{margin-top:8px;width:100%;height:46px;border-radius:10px;border:0;background:#1d4f6e;color:#fff;font:700 15px Arial}
@media(max-width:700px){.modes,.btemp{display:none}}`,document.head.append(i)}var cp=[];function il(i,e,t){fo.append(i);let n={el:i,x:e,y:t};return cp.push(n),n}var Ka=[["v58","58",140,398],["fa","103",490,398],["fb","103",490,628],["v109","109",1140,378],["v110","110",1150,598],["v114","114",1580,408],["v117","117",1500,960],["vin","118",1688,950],["v122","122",432,1e3],["v123","123",222,1e3],["v134","134",568,990],["fg","Galley flap",610,825],[null,"101",340,936]];for(let[i,e,t,n]of Ka){let s=document.createElement("div");s.className="port-no",s.textContent=e,il(s,t,n)}var Kt=30;var eM=i=>i<40?"#2f7fd0":i<=70?"#e07b14":"#d8322b";{let i=document.createElement("div");i.className="vcard btemp",i.setAttribute("role","group"),i.setAttribute("aria-label","Burner temperature"),i.innerHTML='<h3>BURNER TEMPERATURE</h3><div class="tv"><span>30</span><small>\xB0C</small></div><div class="row"><button type="button" aria-label="Lower temperature">\u2212</button><input type="range" min="0" max="150" step="1" value="30" aria-label="Burner temperature, \xB0C"><button type="button" aria-label="Raise temperature">+</button></div><div class="scale"><i style="background:#2f7fd0"></i><i style="background:#f08a24"></i><i style="background:#d8322b"></i></div><div class="lg"><span>&lt;40 blue</span><span>40\u201370 orange</span><span>&gt;70 red</span></div>';let[e,t]=i.querySelectorAll("button"),n=i.querySelector("input"),s=i.querySelector(".tv"),r=o=>{Kt=Math.max(0,Math.min(150,Math.round(o))),n.value=Kt,s.firstChild.textContent=Kt,s.style.color=eM(Kt)};n.addEventListener("input",()=>r(+n.value)),e.onclick=()=>r(Kt-5),t.onclick=()=>r(Kt+5),il(i,905,700),r(30)}var tM=[{h:46,core:"#eaf7ff",mid:"#3c9bff",bed:["#0b1626","#12304e"],led:"#46a8ff",word:"COOL"},{h:112,core:"#fff3c4",mid:"#ff9418",bed:["#1d0f05","#5a2a08"],led:"#ffa12a",word:"WARM"},{h:168,core:"#fff7d6",mid:"#ff3216",bed:["#260704","#7a1608"],led:"#ff4a32",word:"HOT"}],nM=(()=>{let i=document.createElement("canvas");i.width=640,i.height=460;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,640,460);t.addColorStop(0,"#c9d0d4"),t.addColorStop(.5,"#9ea8ae"),t.addColorStop(1,"#7d878d"),e.fillStyle=t,e.fillRect(0,0,640,460);for(let n=0;n<900;n++){let s=Math.random()*460;e.strokeStyle=`rgba(${Math.random()<.5?"255,255,255":"40,48,52"},${.03+Math.random()*.05})`,e.lineWidth=1,e.beginPath(),e.moveTo(Math.random()*120,s),e.lineTo(520+Math.random()*120,s+(Math.random()-.5)*2),e.stroke()}return i})();function iM(i,e){let t=Kt<40?0:Kt<=70?1:2,n=tM[t],s=performance.now();i.mat.color.set("#59646a"),i.mat.emissive.set(n.mid),i.mat.emissiveIntensity=[0,.12,.28][t],i.glow.material.color.set(n.mid),i.glow.material.opacity=[.05,.22,.42][t]*(.85+.15*Math.sin(s/160));let r=i.face;if(!r||s-(r.at||0)<70)return;r.at=s;let o=r.c.getContext("2d"),a=r.c.width,l=r.c.height,c=s/1e3,h=(I,T,A,P,S)=>{o.beginPath(),o.moveTo(I+S,T),o.arcTo(I+A,T,I+A,T+P,S),o.arcTo(I+A,T+P,I,T+P,S),o.arcTo(I,T+P,I,T,S),o.arcTo(I,T,I+A,T,S),o.closePath()};o.clearRect(0,0,a,l),o.save(),h(4,4,a-8,l-8,26),o.clip(),o.drawImage(nM,0,0,a,l),o.restore(),h(4,4,a-8,l-8,26),o.lineWidth=8,o.strokeStyle="#3e474c",o.stroke();for(let[I,T]of[[34,34],[a-34,34],[34,l-34],[a-34,l-34]]){let A=o.createRadialGradient(I-4,T-4,2,I,T,15);A.addColorStop(0,"#eef2f4"),A.addColorStop(1,"#5d676d"),o.fillStyle=A,o.beginPath();for(let P=0;P<6;P++){let S=P*Math.PI/3;o.lineTo(I+14*Math.cos(S),T+14*Math.sin(S))}o.closePath(),o.fill(),o.strokeStyle="#3e474c",o.lineWidth=2,o.stroke()}o.fillStyle="#2f383d",o.font="bold 26px Arial",o.textAlign="left",o.textBaseline="middle",o.fillText(i.label,66,36);let u=62,d=60,f=a-124,m=250;o.save(),h(u,d,f,m,18),o.clip();let x=o.createLinearGradient(0,d,0,d+m);x.addColorStop(0,n.bed[0]),x.addColorStop(1,n.bed[1]),o.fillStyle=x,o.fillRect(u,d,f,m),o.strokeStyle=t?"rgba(255,170,90,.18)":"rgba(120,170,230,.16)",o.lineWidth=2;for(let I=0,T=d+10;T<d+m;I++,T+=22)for(let A=u+(I%2?13:0);A<u+f;A+=26){o.beginPath();for(let P=0;P<6;P++){let S=Math.PI/6+P*Math.PI/3;o.lineTo(A+13*Math.cos(S),T+13*Math.sin(S))}o.closePath(),o.stroke()}if(t){let I=o.createRadialGradient(a/2,d+m,10,a/2,d+m,f*.7);I.addColorStop(0,t===2?"rgba(255,90,30,.55)":"rgba(255,150,40,.35)"),I.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=I,o.fillRect(u,d,f,m)}o.globalCompositeOperation="lighter";for(let I=0;I<7;I++){let T=u+42+I*(f-84)/6,A=d+m-22,P=.8+.14*Math.sin(c*9+I*1.7)+.08*Math.sin(c*23+I),S=n.h*P,b=16+n.h*.1,L=Math.sin(c*5+I*2.1)*b*.25,H=o.createLinearGradient(0,A,0,A-S);H.addColorStop(0,n.core),H.addColorStop(.35,n.mid),H.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=H,o.globalAlpha=.9,o.beginPath(),o.moveTo(T-b,A),o.bezierCurveTo(T-b,A-S*.45,T-b*.2+L,A-S*.7,T+L*1.6,A-S),o.bezierCurveTo(T+b*.2+L,A-S*.7,T+b,A-S*.45,T+b,A),o.closePath(),o.fill(),o.globalAlpha=1,o.fillStyle="#3a3f42",o.fillRect(T-9,A-2,18,10)}o.globalCompositeOperation="source-over",o.restore();let g=o.createLinearGradient(u,d,u+f,d+m);g.addColorStop(0,"rgba(255,255,255,.22)"),g.addColorStop(.35,"rgba(255,255,255,0)"),g.addColorStop(.6,"rgba(255,255,255,.07)"),g.addColorStop(1,"rgba(255,255,255,0)"),h(u,d,f,m,18),o.fillStyle=g,o.fill(),o.lineWidth=10,o.strokeStyle="#2a3236",o.stroke();let p=a/2-150,y=328,v=300,_=104;h(p,y,v,_,12),o.fillStyle="#0b0f11",o.fill(),o.lineWidth=5,o.strokeStyle="#2a3236",o.stroke(),o.textAlign="center",o.fillStyle=n.led,o.shadowColor=n.led,o.shadowBlur=18,o.font='bold 74px "Courier New", monospace',o.fillText(Kt+"\xB0C",a/2-18,y+_/2+4),o.shadowBlur=0,o.font="bold 22px Arial",o.fillText(n.word,p+v-40,y+24),r.tex.needsUpdate=!0}function Wa(i,e,t){let n=document.createElement("div");n.className="vinfo-card",n.setAttribute("role","dialog"),n.setAttribute("aria-label",i);let s=()=>"<div><h2>"+i+"</h2><p>"+e+"</p><dl>"+t().map(([a,l])=>"<dt>"+a+"</dt><dd>"+l+"</dd>").join("")+'</dl><button type="button">Close</button></div>';n.innerHTML=s(),document.body.append(n);let r=setInterval(()=>{let a=n.querySelector("dl");a&&(a.outerHTML="<dl>"+t().map(([l,c])=>"<dt>"+l+"</dt><dd>"+c+"</dd>").join("")+"</dl>")},400),o=()=>{clearInterval(r),n.remove()};n.addEventListener("click",a=>{(a.target===n||a.target.tagName==="BUTTON")&&o()})}var Xf=i=>i<40?"Blue \xB7 below 40 \xB0C":i<=70?"Orange \xB7 40\u201370 \xB0C":"Red \xB7 above 70 \xB0C",sM=[["h1",572,400,()=>Wa("H\u2082 burner 1","Catalytic hydrogen burner. Pit air passes through it after FLAP 103 and the hydrogen given off by the batteries is recombined with oxygen, which heats the air.",()=>[["Set temperature",Kt+" \xB0C"],["Colour",Xf(Kt)],["Air through it",Math.round(Dt.qa)+" m\xB3/h"],["Flap 103",te.flap.a?"OPEN":"CLOSED"]])],["h2",582,545,()=>Wa("H\u2082 burner 2","Second catalytic hydrogen burner, in parallel with burner 1 behind its own FLAP 103.",()=>[["Set temperature",Kt+" \xB0C"],["Colour",Xf(Kt)],["Air through it",Math.round(Dt.qb)+" m\xB3/h"],["Flap 103",te.flap.b?"OPEN":"CLOSED"]])],["clr",960,470,()=>Wa("Cooler","Air cooler after the burners. It takes the heat added by the burners back out before the air reaches blowers 1 and 2 (valves 109 / 110).",()=>[["Air through it",Math.round(Dt.qm)+" m\xB3/h"],["Outlet temperature",Math.round(te.pit.Tcool)+" \xB0C"],["Air velocity (V)",Dt.velocity.toFixed(1)+" m/s"]])],["flt",440,720,()=>Wa("Filter","Filter on the suction line after valve 122. It cleans the pit air before the H\u2082 burners.",()=>[["Valve 122",te.open.v122?"OPEN":"CLOSED"],["Air through it",Math.round(Dt.qm)+" m\xB3/h"]])]].map(([i,e,t,n])=>{let s=document.createElement("button");return s.className="vinfo",s.setAttribute("aria-label",i+" details"),s.innerHTML="<span>i</span>",s.addEventListener("click",n),fo.append(s),{id:i,x:e,y:t,button:s}});lp.push(...sM);var vn=0,$n=!1,rM="",oM=()=>te.open.v109&&te.on.b1||te.open.v110&&te.on.b2,Qh=[["Open 103 (done when the mode is chosen)",()=>te.flap.a||te.flap.b,["fa","fb"]],["Open 109 (for Blower 1) or 110 (for Blower 2)",()=>te.open.v109||te.open.v110,["v109","v110"]],["Run the matching blower \u2014 109 \u2192 Blower 1, 110 \u2192 Blower 2",oM,()=>te.open.v109?["b1"]:te.open.v110?["b2"]:["b1","b2"]],["Open 114",()=>te.open.v114,["v114"]],["Open 117",()=>te.open.v117,["v117"]],["Open 122",()=>te.open.v122,["v122"]],["Crack 114 open \u2014 tap 114 again",()=>$n,["v114"]]],xr={1:{name:"Closed",title:"Mode 1 \xB7 Ventilation of battery in closed",steps:Qh},2:{name:"Into compt",title:"Mode 2 \xB7 Ventilation of battery into compartment",steps:[...Qh,["Open 118 \u2014 air from outside",()=>te.open.vin,["vin"]]]},5:{name:"Urgent dive",title:"Mode 5 \xB7 Ventilation of battery during urgent dive",steps:[...Qh,["Open 134",()=>te.open.v134,["v134"]],["Start the galley blower",()=>te.on.bg,["bg"]]]}};function hp(){let i=xr[vn]?.steps||[],e=0;for(;e<i.length&&i[e][1]();)e++;return{st:i,i:e}}function up(i){vn=i,$n=!1,rM="",du(),te.running=!0,nl(),te.flap.a=te.flap.b=!0;for(let e of["fa","fb"])_n.get(e).bladeTarget=0;gr(xr[i].title+" \u2014 103 opened, all other ports closed",!0),fu(),pu(),document.querySelectorAll(".port-no").forEach((e,t)=>{(Ka[t][0]==="fa"||Ka[t][0]==="fb")&&(e.classList.remove("flash"),e.offsetWidth,e.classList.add("flash"))})}var ji=document.createElement("div");ji.className="vcard modes";ji.setAttribute("role","region");ji.setAttribute("aria-label","Ventilation modes");il(ji,1180,905);var co=[];function fu(){let{st:i,i:e}=hp(),t=xr[vn],n=(a,l,c)=>'<button type="button" data-m="'+a+'"'+(vn==a?' class="on"':"")+(c?' disabled title="Comes with the engine-room section"':"")+">Mode "+a+"<small>"+l+"</small></button>",s="<h3>BATTERY PIT VENTILATION"+(t?" \xB7 MODE "+vn:"")+"</h3>";if(!te.running)s+='<div class="hint">Press \u25B6 Start, then choose a mode (1\u20135) at the top of the screen.</div>';else if(!t)s+='<div class="hint">Choose a mode at the top of the screen: Mode 1, 2, 3, 4 or 5.</div>';else{s+='<div class="hint">'+t.title+'</div><div class="cur">'+(e<i.length?"<b>Step "+(e+1)+" / "+i.length+"</b> "+i[e][0]:"")+'</div><div class="dots">'+i.map((l,c)=>'<i class="'+(c<e?"d":c===e?"n":"")+'"></i>').join("")+"</div>";let a=ru();s+=a?'<div class="msg bad">\u26A0 '+a+"</div>":e>=i.length?'<div class="msg ok">\u2713 '+t.title.split(" \xB7 ")[1]+" \u2014 complete</div>":""}s!==ji._html&&(ji._html=s,ji.innerHTML=s,ji.querySelectorAll("[data-m]").forEach(a=>a.onclick=()=>up(+a.dataset.m)));let r=t&&e<i.length?typeof i[e][2]=="function"?i[e][2]():i[e][2]:[];for(let a of _n.values())a.button.classList.toggle("next",r.includes(a.id));let o=t&&e<i.length?i[e][0].replace(/ \(done.*\)/,""):"";r.forEach((a,l)=>{let c=co[l];c||(c=co[l]=document.createElement("div"),c.className="tap-tip",fo.append(c),c._a=il(c,0,0));let h=_n.get(a);c._a.x=h.x,c._a.y=h.y-h.size*.55-30;let u="<b>\u{1F446} TAP HERE</b><span>"+o+"</span>";c.innerHTML!==u&&(c.innerHTML=u),c.style.display=""});for(let a=r.length;a<co.length;a++)co[a].style.display="none";for(let a of co)if(a.style.display!=="none"){let[l,c]=qa(a._a.x,a._a.y,80);a.style.left=l+"px",a.style.top=c+"px"}}function ru(){return vn?te.on.b1&&te.on.b2?"Both blowers running \u2014 operate a single blower (1 or 2).":te.open.v109&&te.on.b2&&!te.open.v110?"Wrong process: 109 is open but Blower 2 is running \u2014 109 goes with Blower 1.":te.open.v110&&te.on.b1&&!te.open.v109?"Wrong process: 110 is open but Blower 1 is running \u2014 110 goes with Blower 2.":te.open.v109&&te.open.v110?"Open only one of 109 / 110 for the single running blower.":"":""}function aM(i,e){if(!vn)return;let{st:t,i:n}=hp();if(n>=t.length){let o=ru();o&&Ji("\u26A0 "+o);return}let s=typeof t[n][2]=="function"?t[n][2]():t[n][2],r=ru();r?Ji("\u26A0 "+r):!e&&!s.includes(i)&&!t.slice(0,n).some(o=>(typeof o[2]=="function"?o[2]():o[2]).includes(i))&&Ji("\u26A0 Wrong step \u2014 next: "+t[n][0])}var lM={1:["fa","fb","v109","v110","v114","v117","v122"],2:["fa","fb","v109","v110","v114","v117","v122","vin"],5:["fa","fb","v109","v110","v114","v117","v122","v134"]},Qi=document.createElement("div");Qi.className="mode-bar";Qi.setAttribute("role","toolbar");Qi.setAttribute("aria-label","Ventilation mode");Qi.innerHTML=[[1,"Closed"],[2,"Into compartment"],[3,"Supply & exhaust"],[4,"Standard blower"],[5,"Urgent dive"]].map(([i,e])=>'<button type="button" data-m="'+i+'"'+(xr[i]?"":' class="soon"')+">Mode "+i+"<small>"+(xr[i]?e:e+" \xB7 soon")+"</small></button>").join("");Ja.append(Qi);Qi.querySelectorAll("button").forEach(i=>i.onclick=()=>{let e=+i.dataset.m;if(!xr[e]){gr("Mode "+e+" will be added with the engine-room section.",!0);return}up(e)});function pu(){Qi.classList.toggle("show",te.running),Qi.querySelectorAll("button").forEach(e=>e.classList.toggle("on",+e.dataset.m===vn));let i=lM[vn]||null;document.querySelectorAll(".port-no").forEach((e,t)=>{let[n,s]=Ka[t],r=n&&_n.get(n),o=!!(r&&te.running&&tl(r)),a=n==="v114"&&o&&$n;e.classList.toggle("use",!!i&&i.includes(n)),e.classList.toggle("dim",!!i&&!i.includes(n)),e.classList.toggle("is-open",o&&!a),e.classList.toggle("is-crack",a);let l=s+(a?"<em>CRACKED</em>":o?"<em>OPEN</em>":"");e.innerHTML!==l&&(e.innerHTML=l)})}setInterval(()=>{fu(),pu()},250);fu();pu();var eu=new C;function qa(i,e,t=mt){return eu.copy(nt(i,e,t)).project(ys),[(eu.x+1)/2*mr.clientWidth,(1-eu.y)/2*mr.clientHeight]}var uo=1;function sl(){let i=mr.clientWidth,e=mr.clientHeight;if(!i||!e)return;cn.getPixelRatio()!==nu()&&cn.setPixelRatio(nu()),cn.setSize(i,e);let t=1940,n=1340,s=-10,r=109,o=i/e,a,l;o>t/n?(l=n/2,a=l*o):(a=t/2,l=a/o),Object.assign(ys,{left:s-a,right:s+a,top:-r+l,bottom:-r-l}),ys.updateProjectionMatrix(),uo=e/(2*l);for(let c of _n.values()){let[h,u]=qa(c.x,c.y),d=Math.max(44,c.size*uo);Object.assign(c.button.style,{left:h+"px",top:u+"px",width:d+"px",height:d+"px",minWidth:"44px",minHeight:"44px"})}for(let c of lp){let[h,u]=qa(c.x,c.y,80);Object.assign(c.button.style,{left:h+"px",top:u+"px"})}for(let c of cp){let[h,u]=qa(c.x,c.y,80);Object.assign(c.el.style,{left:h+"px",top:u+"px"})}Ja.style.setProperty("--k",String(uo))}new ResizeObserver(sl).observe(mr);window.visualViewport?.addEventListener("resize",sl);sl();var cM=new Te,tu=i=>typeof i=="function"?i(Dt):i==="pitIn"?Dt.inlet+Dt.recirc:i==="out"?Dt.out:Dt[i]||0,Xa=0;function dp(i){au||fr();let e=Math.min(.05,Math.max(0,Xa?(i-Xa)/1e3:.016));Xa=Math.max(Xa,i);for(let l of _n.values())if(l.type==="blower"){let c=te.on[l.key]?te.set[l.key]:0,h=c>l.speed?Af:Rf;l.speed+=(c-l.speed)*(1-Math.exp(-e/h)),!c&&l.speed<.002&&(l.speed=0),l.angle+=l.speed*lo*Math.PI*2*e,l.rotor&&(l.rotor.rotation.x=l.angle)}let t=l=>te.on[l]?_n.get(l).speed:0;Dt=Jh({open:te.open,flap:te.flap,speed:{b1:t("b1"),b2:t("b2"),bg:t("bg")}}),$n&&te.open.v114&&te.open.v117&&(Dt.toCompt=Dt.qm*.2,Dt.recirc=Dt.qm-Dt.toCompt),Df(te.pit,Dt,te.running?e*yy/3600:0,e,te.running,te.burn),te.pit.Ta=te.pit.Tb=Kt,Ky();let n=cM.copy(_s.dirty),s=uo*cn.getPixelRatio();for(let l of Za)Oy(l,e,l.reached?tu(l.key):0,l.air==="dirty"?n:_s[l.air],s,i);let r=.55+.35*Math.sin(i/260);for(let l of jf)l.m.opacity=tu(l.key)>1?r:.3;for(let l of _n.values()){if(l.wheel&&(l.wheel.rotation.y+=(l.wheelTarget-l.wheel.rotation.y)*Math.min(1,e*6)),l.blade&&(l.blade.rotation.y+=(l.bladeTarget-l.blade.rotation.y)*Math.min(1,e*6)),l.type==="burner"){let h=Kt,u=Math.min(1,Math.max(0,(h-40)/80));iM(l,e),l.ember.material.opacity=0;let d=Math.min(1,Math.max(0,(u-.08)/.6)),f=i/1e3;for(let m of l.nozzles){let x=.72+.18*Math.sin(f*m.sp+m.ph)+.1*Math.sin(f*m.sp*2.3+m.ph*1.7);m.f.material.opacity=Math.min(1,d*1.4)*(.8+.2*x),m.f.scale.set(12+7*d*x,(12+34*d)*x,1),m.f.position.x=m.x0+Math.sin(f*7+m.ph)*.8}}let c=te.running?tl(l)?l.lamp.on||Nf:Uf:pr;l.lamp.color.lerp(c,Math.min(1,e*8)),l.lamp.ring.material.color.copy(l.lamp.color),l.lamp.glow.material.color.copy(l.lamp.color)}Gf[0](Kt,e),Gf[1](Kt,e),Xy(Dt.velocity*30),$h.lerp(te.running?te.open.v122?Nf:Uf:rp,Math.min(1,e*6)),Hf.face.color.copy($h),Hf.side.color.copy($h).multiplyScalar(.7);for(let l of $f)Fy(l,e,tu(l.key));for(let l of wy)l.material.opacity=te.running?Math.min(.75,.08+te.pit.h2/4*.67):0;let o=te.running?.7:0;for(let{b:l,sc:c}of ja)l.update(e,o,s*c);let a=te.pit.h2;te.running&&a>=Lf?(vs.style.display="block",vs.className=a>=Kh?"red":"",vs.textContent=a>=Kh?"\u26A0 H\u2082 DANGER "+a.toFixed(1)+" % \u2014 explosive limit reached, ventilate now":"\u26A0 H\u2082 HIGH "+a.toFixed(1)+" % \u2014 start the battery pit ventilation"):vs.style.display="none",cn.render(Ge,ys),requestAnimationFrame(dp)}requestAnimationFrame(dp);addEventListener("pagehide",()=>{cn.dispose(),cn.forceContextLoss()});addEventListener("pageshow",i=>{i.persisted&&location.reload()});})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
