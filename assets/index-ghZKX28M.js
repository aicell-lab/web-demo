var Eh=Object.defineProperty;var wh=(s,e,t)=>e in s?Eh(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Ee=(s,e,t)=>wh(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cc="170",Th=0,Nc=1,Ah=2,Mu=1,Rh=2,ei=3,Hn=0,nn=1,bn=2,bi=0,_s=1,Uc=2,Oc=3,Fc=4,Ch=5,Oi=100,Ih=101,Lh=102,Ph=103,Dh=104,Nh=200,Uh=201,Oh=202,Fh=203,pa=204,ma=205,kh=206,Bh=207,zh=208,Vh=209,Hh=210,Gh=211,Wh=212,jh=213,Xh=214,ga=0,_a=1,va=2,Ms=3,xa=4,ya=5,ba=6,Ma=7,mo=0,qh=1,Yh=2,Mi=0,Kh=1,Zh=2,$h=3,Jh=4,Qh=5,ed=6,td=7,kc="attached",nd="detached",Su=300,Ss=301,Es=302,Sa=303,Ea=304,go=306,Mn=1e3,Sn=1001,ao=1002,sn=1003,Eu=1004,$s=1005,Kt=1006,Qr=1007,Nn=1008,oi=1009,wu=1010,Tu=1011,nr=1012,lc=1013,Hi=1014,Un=1015,cr=1016,uc=1017,hc=1018,ws=1020,Au=35902,Ru=1021,Cu=1022,En=1023,Iu=1024,Lu=1025,vs=1026,Ts=1027,dc=1028,fc=1029,Pu=1030,pc=1031,mc=1033,eo=33776,to=33777,no=33778,io=33779,wa=35840,Ta=35841,Aa=35842,Ra=35843,Ca=36196,Ia=37492,La=37496,Pa=37808,Da=37809,Na=37810,Ua=37811,Oa=37812,Fa=37813,ka=37814,Ba=37815,za=37816,Va=37817,Ha=37818,Ga=37819,Wa=37820,ja=37821,so=36492,Xa=36494,qa=36495,Du=36283,Ya=36284,Ka=36285,Za=36286,id=2200,sd=2201,rd=2202,ir=2300,sr=2301,Co=2302,ds=2400,fs=2401,co=2402,gc=2500,od=2501,ad=0,Nu=1,$a=2,cd=3200,ld=3201,_o=0,ud=1,vi="",It="srgb",rn="srgb-linear",vo="linear",Ct="srgb",Zi=7680,Bc=519,hd=512,dd=513,fd=514,Uu=515,pd=516,md=517,gd=518,_d=519,Ja=35044,zc="300 es",si=2e3,lo=2001;class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vc=1234567;const er=Math.PI/180,As=180/Math.PI;function On(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[s&255]+Xt[s>>8&255]+Xt[s>>16&255]+Xt[s>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function Yt(s,e,t){return Math.max(e,Math.min(t,s))}function _c(s,e){return(s%e+e)%e}function vd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function xd(s,e,t){return s!==e?(t-s)/(e-s):0}function tr(s,e,t){return(1-t)*s+t*e}function yd(s,e,t,n){return tr(s,e,1-Math.exp(-t*n))}function bd(s,e=1){return e-Math.abs(_c(s,e*2)-e)}function Md(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Sd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ed(s,e){return s+Math.floor(Math.random()*(e-s+1))}function wd(s,e){return s+Math.random()*(e-s)}function Td(s){return s*(.5-Math.random())}function Ad(s){s!==void 0&&(Vc=s);let e=Vc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rd(s){return s*er}function Cd(s){return s*As}function Id(s){return(s&s-1)===0&&s!==0}function Ld(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Pd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Dd(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),p=o((e-n)/2),d=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*p,a*l);break;case"YZY":s.set(c*p,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*p,a*u,a*l);break;case"XZX":s.set(a*u,c*_,c*d,a*l);break;case"YXY":s.set(c*d,a*u,c*_,a*l);break;case"ZYZ":s.set(c*_,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function At(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const tn={DEG2RAD:er,RAD2DEG:As,generateUUID:On,clamp:Yt,euclideanModulo:_c,mapLinear:vd,inverseLerp:xd,lerp:tr,damp:yd,pingpong:bd,smoothstep:Md,smootherstep:Sd,randInt:Ed,randFloat:wd,randFloatSpread:Td,seededRandom:Ad,degToRad:Rd,radToDeg:Cd,isPowerOfTwo:Id,ceilPowerOfTwo:Ld,floorPowerOfTwo:Pd,setQuaternionFromProperEuler:Dd,normalize:At,denormalize:Pn};class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,n,i,r,o,a,c,l){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],p=n[2],d=n[5],_=n[8],g=i[0],m=i[3],f=i[6],x=i[1],S=i[4],y=i[7],C=i[2],I=i[5],L=i[8];return r[0]=o*g+a*x+c*C,r[3]=o*m+a*S+c*I,r[6]=o*f+a*y+c*L,r[1]=l*g+u*x+h*C,r[4]=l*m+u*S+h*I,r[7]=l*f+u*y+h*L,r[2]=p*g+d*x+_*C,r[5]=p*m+d*S+_*I,r[8]=p*f+d*y+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,p=a*c-u*r,d=l*r-o*c,_=t*h+n*p+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*l-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=p*g,e[4]=(u*t-i*c)*g,e[5]=(i*r-a*t)*g,e[6]=d*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Io.makeScale(e,t)),this}rotate(e){return this.premultiply(Io.makeRotation(-e)),this}translate(e,t){return this.premultiply(Io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Io=new ut;function Ou(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function rr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nd(){const s=rr("canvas");return s.style.display="block",s}const Hc={};function Js(s){s in Hc||(Hc[s]=!0,console.warn(s))}function Ud(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Od(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Fd(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const dt={enabled:!0,workingColorSpace:rn,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ct&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ct&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vi?vo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ri(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function xs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Gc=[.64,.33,.3,.6,.15,.06],Wc=[.2126,.7152,.0722],jc=[.3127,.329],Xc=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qc=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);dt.define({[rn]:{primaries:Gc,whitePoint:jc,transfer:vo,toXYZ:Xc,fromXYZ:qc,luminanceCoefficients:Wc,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:Gc,whitePoint:jc,transfer:Ct,toXYZ:Xc,fromXYZ:qc,luminanceCoefficients:Wc,outputColorSpaceConfig:{drawingBufferColorSpace:It}}});let $i;class kd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$i===void 0&&($i=rr("canvas")),$i.width=e.width,$i.height=e.height;const n=$i.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ri(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bd=0;class Fu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Lo(i[o].image)):r.push(Lo(i[o]))}else r=Lo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Lo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?kd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zd=0;class Ft extends Xi{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=Sn,i=Sn,r=Kt,o=Nn,a=En,c=oi,l=Ft.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=On(),this.name="",this.source=new Fu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mn:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mn:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Su;Ft.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,i=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],p=c[1],d=c[5],_=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(u-p)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,y=(d+1)/2,C=(f+1)/2,I=(u+p)/4,L=(h+g)/4,N=(_+m)/4;return S>y&&S>C?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=I/n,r=L/n):y>C?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=I/i,r=N/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=L/r,i=N/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(p-u)*(p-u));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(h-g)/x,this.z=(p-u)/x,this.w=Math.acos((l+d+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vd extends Xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ft(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends Vd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ku extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hd extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const p=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=p,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||c!==p||l!==d||u!==_){let m=1-a;const f=c*p+l*d+u*_+h*g,x=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const C=Math.sqrt(S),I=Math.atan2(C,f*x);m=Math.sin(m*I)/C,a=Math.sin(a*I)/C}const y=a*x;if(c=c*m+p*y,l=l*m+d*y,u=u*m+_*y,h=h*m+g*y,m===1-a){const C=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=C,l*=C,u*=C,h*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],p=r[o+1],d=r[o+2],_=r[o+3];return e[t]=a*_+u*h+c*d-l*p,e[t+1]=c*_+u*p+l*h-a*d,e[t+2]=l*_+u*d+a*p-c*h,e[t+3]=u*_-a*h-c*p-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),p=c(n/2),d=c(i/2),_=c(r/2);switch(o){case"XYZ":this._x=p*u*h+l*d*_,this._y=l*d*h-p*u*_,this._z=l*u*_+p*d*h,this._w=l*u*h-p*d*_;break;case"YXZ":this._x=p*u*h+l*d*_,this._y=l*d*h-p*u*_,this._z=l*u*_-p*d*h,this._w=l*u*h+p*d*_;break;case"ZXY":this._x=p*u*h-l*d*_,this._y=l*d*h+p*u*_,this._z=l*u*_+p*d*h,this._w=l*u*h-p*d*_;break;case"ZYX":this._x=p*u*h-l*d*_,this._y=l*d*h+p*u*_,this._z=l*u*_-p*d*h,this._w=l*u*h+p*d*_;break;case"YZX":this._x=p*u*h+l*d*_,this._y=l*d*h+p*u*_,this._z=l*u*_-p*d*h,this._w=l*u*h-p*d*_;break;case"XZY":this._x=p*u*h-l*d*_,this._y=l*d*h-p*u*_,this._z=l*u*_+p*d*h,this._w=l*u*h+p*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],p=n+a+h;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,p=Math.sin(t*u)/l;return this._w=o*h+this._w*p,this._x=n*h+this._x*p,this._y=i*h+this._y*p,this._z=r*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Po.copy(this).projectOnVector(e),this.sub(Po)}reflect(e){return this.sub(Po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Po=new X,Yc=new Zt;class gn{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xr.copy(n.boundingBox)),xr.applyMatrix4(e.matrixWorld),this.union(xr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),yr.subVectors(this.max,Bs),Ji.subVectors(e.a,Bs),Qi.subVectors(e.b,Bs),es.subVectors(e.c,Bs),ui.subVectors(Qi,Ji),hi.subVectors(es,Qi),Ti.subVectors(Ji,es);let t=[0,-ui.z,ui.y,0,-hi.z,hi.y,0,-Ti.z,Ti.y,ui.z,0,-ui.x,hi.z,0,-hi.x,Ti.z,0,-Ti.x,-ui.y,ui.x,0,-hi.y,hi.x,0,-Ti.y,Ti.x,0];return!Do(t,Ji,Qi,es,yr)||(t=[1,0,0,0,1,0,0,0,1],!Do(t,Ji,Qi,es,yr))?!1:(br.crossVectors(ui,hi),t=[br.x,br.y,br.z],Do(t,Ji,Qi,es,yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new X,new X,new X,new X,new X,new X,new X,new X],Cn=new X,xr=new gn,Ji=new X,Qi=new X,es=new X,ui=new X,hi=new X,Ti=new X,Bs=new X,yr=new X,br=new X,Ai=new X;function Do(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ai.fromArray(s,r);const a=i.x*Math.abs(Ai.x)+i.y*Math.abs(Ai.y)+i.z*Math.abs(Ai.z),c=e.dot(Ai),l=t.dot(Ai),u=n.dot(Ai);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Gd=new gn,zs=new X,No=new X;class Gn{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);const t=zs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(zs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(No.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(No)),this.expandByPoint(zs.copy(e.center).sub(No))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new X,Uo=new X,Mr=new X,di=new X,Oo=new X,Sr=new X,Fo=new X;class lr{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Uo.copy(e).add(t).multiplyScalar(.5),Mr.copy(t).sub(e).normalize(),di.copy(this.origin).sub(Uo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Mr),a=di.dot(this.direction),c=-di.dot(Mr),l=di.lengthSq(),u=Math.abs(1-o*o);let h,p,d,_;if(u>0)if(h=o*c-a,p=o*a-c,_=r*u,h>=0)if(p>=-_)if(p<=_){const g=1/u;h*=g,p*=g,d=h*(h+o*p+2*a)+p*(o*h+p+2*c)+l}else p=r,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*c)+l;else p=-r,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*c)+l;else p<=-_?(h=Math.max(0,-(-o*r+a)),p=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+p*(p+2*c)+l):p<=_?(h=0,p=Math.min(Math.max(-r,-c),r),d=p*(p+2*c)+l):(h=Math.max(0,-(o*r+a)),p=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+p*(p+2*c)+l);else p=o>0?-r:r,h=Math.max(0,-(o*p+a)),d=-h*h+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Uo).addScaledVector(Mr,p),d}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const n=Kn.dot(this.direction),i=Kn.dot(Kn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,i=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,i=(e.min.x-p.x)*l),u>=0?(r=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-p.z)*h,c=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,c=(e.min.z-p.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,i,r){Oo.subVectors(t,e),Sr.subVectors(n,e),Fo.crossVectors(Oo,Sr);let o=this.direction.dot(Fo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);const c=a*this.direction.dot(Sr.crossVectors(di,Sr));if(c<0)return null;const l=a*this.direction.dot(Oo.cross(di));if(l<0||c+l>o)return null;const u=-a*di.dot(Fo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,n,i,r,o,a,c,l,u,h,p,d,_,g,m){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,p,d,_,g,m)}set(e,t,n,i,r,o,a,c,l,u,h,p,d,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=p,f[3]=d,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ts.setFromMatrixColumn(e,0).length(),r=1/ts.setFromMatrixColumn(e,1).length(),o=1/ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const p=o*u,d=o*h,_=a*u,g=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+_*l,t[5]=p-g*l,t[9]=-a*c,t[2]=g-p*l,t[6]=_+d*l,t[10]=o*c}else if(e.order==="YXZ"){const p=c*u,d=c*h,_=l*u,g=l*h;t[0]=p+g*a,t[4]=_*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+p*a,t[10]=o*c}else if(e.order==="ZXY"){const p=c*u,d=c*h,_=l*u,g=l*h;t[0]=p-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const p=o*u,d=o*h,_=a*u,g=a*h;t[0]=c*u,t[4]=_*l-d,t[8]=p*l+g,t[1]=c*h,t[5]=g*l+p,t[9]=d*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,d=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=g-p*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+_,t[10]=p-g*h}else if(e.order==="XZY"){const p=o*c,d=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=p*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wd,e,jd)}lookAt(e,t,n){const i=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),fi.crossVectors(n,dn),fi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),fi.crossVectors(n,dn)),fi.normalize(),Er.crossVectors(dn,fi),i[0]=fi.x,i[4]=Er.x,i[8]=dn.x,i[1]=fi.y,i[5]=Er.y,i[9]=dn.y,i[2]=fi.z,i[6]=Er.z,i[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],p=n[9],d=n[13],_=n[2],g=n[6],m=n[10],f=n[14],x=n[3],S=n[7],y=n[11],C=n[15],I=i[0],L=i[4],N=i[8],E=i[12],w=i[1],B=i[5],R=i[9],z=i[13],b=i[2],W=i[6],H=i[10],Z=i[14],J=i[3],Q=i[7],fe=i[11],q=i[15];return r[0]=o*I+a*w+c*b+l*J,r[4]=o*L+a*B+c*W+l*Q,r[8]=o*N+a*R+c*H+l*fe,r[12]=o*E+a*z+c*Z+l*q,r[1]=u*I+h*w+p*b+d*J,r[5]=u*L+h*B+p*W+d*Q,r[9]=u*N+h*R+p*H+d*fe,r[13]=u*E+h*z+p*Z+d*q,r[2]=_*I+g*w+m*b+f*J,r[6]=_*L+g*B+m*W+f*Q,r[10]=_*N+g*R+m*H+f*fe,r[14]=_*E+g*z+m*Z+f*q,r[3]=x*I+S*w+y*b+C*J,r[7]=x*L+S*B+y*W+C*Q,r[11]=x*N+S*R+y*H+C*fe,r[15]=x*E+S*z+y*Z+C*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],p=e[10],d=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+r*c*h-i*l*h-r*a*p+n*l*p+i*a*d-n*c*d)+g*(+t*c*d-t*l*p+r*o*p-i*o*d+i*l*u-r*c*u)+m*(+t*l*h-t*a*d-r*o*h+n*o*d+r*a*u-n*l*u)+f*(-i*a*u-t*c*h+t*a*p+i*o*h-n*o*p+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],p=e[10],d=e[11],_=e[12],g=e[13],m=e[14],f=e[15],x=h*m*l-g*p*l+g*c*d-a*m*d-h*c*f+a*p*f,S=_*p*l-u*m*l-_*c*d+o*m*d+u*c*f-o*p*f,y=u*g*l-_*h*l+_*a*d-o*g*d-u*a*f+o*h*f,C=_*h*c-u*g*c-_*a*p+o*g*p+u*a*m-o*h*m,I=t*x+n*S+i*y+r*C;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/I;return e[0]=x*L,e[1]=(g*p*r-h*m*r-g*i*d+n*m*d+h*i*f-n*p*f)*L,e[2]=(a*m*r-g*c*r+g*i*l-n*m*l-a*i*f+n*c*f)*L,e[3]=(h*c*r-a*p*r-h*i*l+n*p*l+a*i*d-n*c*d)*L,e[4]=S*L,e[5]=(u*m*r-_*p*r+_*i*d-t*m*d-u*i*f+t*p*f)*L,e[6]=(_*c*r-o*m*r-_*i*l+t*m*l+o*i*f-t*c*f)*L,e[7]=(o*p*r-u*c*r+u*i*l-t*p*l-o*i*d+t*c*d)*L,e[8]=y*L,e[9]=(_*h*r-u*g*r-_*n*d+t*g*d+u*n*f-t*h*f)*L,e[10]=(o*g*r-_*a*r+_*n*l-t*g*l-o*n*f+t*a*f)*L,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*d-t*a*d)*L,e[12]=C*L,e[13]=(u*g*i-_*h*i+_*n*p-t*g*p-u*n*m+t*h*m)*L,e[14]=(_*a*i-o*g*i-_*n*c+t*g*c+o*n*m-t*a*m)*L,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*p+t*a*p)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,p=r*l,d=r*u,_=r*h,g=o*u,m=o*h,f=a*h,x=c*l,S=c*u,y=c*h,C=n.x,I=n.y,L=n.z;return i[0]=(1-(g+f))*C,i[1]=(d+y)*C,i[2]=(_-S)*C,i[3]=0,i[4]=(d-y)*I,i[5]=(1-(p+f))*I,i[6]=(m+x)*I,i[7]=0,i[8]=(_+S)*L,i[9]=(m-x)*L,i[10]=(1-(p+g))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ts.set(i[0],i[1],i[2]).length();const o=ts.set(i[4],i[5],i[6]).length(),a=ts.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],In.copy(this);const l=1/r,u=1/o,h=1/a;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=si){const c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),p=(n+i)/(n-i);let d,_;if(a===si)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===lo)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=si){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-r),p=(t+e)*l,d=(n+i)*u;let _,g;if(a===si)_=(o+r)*h,g=-2*h;else if(a===lo)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ts=new X,In=new Ye,Wd=new X(0,0,0),jd=new X(1,1,1),fi=new X,Er=new X,dn=new X,Kc=new Ye,Zc=new Zt;class un{constructor(e=0,t=0,n=0,i=un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],p=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zc.setFromEuler(this),this.setFromQuaternion(Zc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class vc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xd=0;const $c=new X,ns=new Zt,Zn=new Ye,wr=new X,Vs=new X,qd=new X,Yd=new Zt,Jc=new X(1,0,0),Qc=new X(0,1,0),el=new X(0,0,1),tl={type:"added"},Kd={type:"removed"},is={type:"childadded",child:null},ko={type:"childremoved",child:null};class Lt extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new X,t=new un,n=new Zt,i=new X(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new ut}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(Jc,e)}rotateY(e){return this.rotateOnAxis(Qc,e)}rotateZ(e){return this.rotateOnAxis(el,e)}translateOnAxis(e,t){return $c.copy(e).applyQuaternion(this.quaternion),this.position.add($c.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jc,e)}translateY(e){return this.translateOnAxis(Qc,e)}translateZ(e){return this.translateOnAxis(el,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wr.copy(e):wr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Vs,wr,this.up):Zn.lookAt(wr,Vs,this.up),this.quaternion.setFromRotationMatrix(Zn),i&&(Zn.extractRotation(i.matrixWorld),ns.setFromRotationMatrix(Zn),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tl),is.child=e,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kd),ko.child=e,this.dispatchEvent(ko),ko.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tl),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,qd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,Yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),p=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Lt.DEFAULT_UP=new X(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new X,$n=new X,Bo=new X,Jn=new X,ss=new X,rs=new X,nl=new X,zo=new X,Vo=new X,Ho=new X,Go=new Mt,Wo=new Mt,jo=new Mt;class Dn{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ln.subVectors(e,t),i.cross(Ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ln.subVectors(i,t),$n.subVectors(n,t),Bo.subVectors(e,t);const o=Ln.dot(Ln),a=Ln.dot($n),c=Ln.dot(Bo),l=$n.dot($n),u=$n.dot(Bo),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const p=1/h,d=(l*c-a*u)*p,_=(o*u-a*c)*p;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Jn.x),c.addScaledVector(o,Jn.y),c.addScaledVector(a,Jn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return Go.setScalar(0),Wo.setScalar(0),jo.setScalar(0),Go.fromBufferAttribute(e,t),Wo.fromBufferAttribute(e,n),jo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Go,r.x),o.addScaledVector(Wo,r.y),o.addScaledVector(jo,r.z),o}static isFrontFacing(e,t,n,i){return Ln.subVectors(n,t),$n.subVectors(e,t),Ln.cross($n).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Ln.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ss.subVectors(i,n),rs.subVectors(r,n),zo.subVectors(e,n);const c=ss.dot(zo),l=rs.dot(zo);if(c<=0&&l<=0)return t.copy(n);Vo.subVectors(e,i);const u=ss.dot(Vo),h=rs.dot(Vo);if(u>=0&&h<=u)return t.copy(i);const p=c*h-u*l;if(p<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(ss,o);Ho.subVectors(e,r);const d=ss.dot(Ho),_=rs.dot(Ho);if(_>=0&&d<=_)return t.copy(r);const g=d*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(rs,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return nl.subVectors(r,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(nl,a);const f=1/(m+g+p);return o=g*f,a=p*f,t.copy(n).addScaledVector(ss,o).addScaledVector(rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function Xo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=_c(e,1),t=Yt(t,0,1),n=Yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Xo(o,r,e+1/3),this.g=Xo(o,r,e),this.b=Xo(o,r,e-1/3)}return dt.toWorkingColorSpace(this,i),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=Bu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return dt.fromWorkingColorSpace(qt.copy(this),e),Math.round(Yt(qt.r*255,0,255))*65536+Math.round(Yt(qt.g*255,0,255))*256+Math.round(Yt(qt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(qt.copy(this),t);const n=qt.r,i=qt.g,r=qt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=It){dt.fromWorkingColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,i=qt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(Tr);const n=tr(pi.h,Tr.h,t),i=tr(pi.s,Tr.s,t),r=tr(pi.l,Tr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Ke;Ke.NAMES=Bu;let Zd=0;class ln extends Xi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=On(),this.name="",this.blending=_s,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pa,this.blendDst=ma,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pa&&(n.blendSrc=this.blendSrc),this.blendDst!==ma&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wt extends ln{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new X,Ar=new rt;class Ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ja,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix3(e),this.setXY(t,Ar.x,Ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ja&&(e.usage=this.usage),e}}class zu extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vu extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Et extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $d=0;const vn=new Ye,qo=new Lt,os=new X,fn=new gn,Hs=new gn,Vt=new X;class jt extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ou(e)?Vu:zu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ut().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return qo.lookAt(e),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Et(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(fn.min,Hs.min),fn.expandByPoint(Vt),Vt.addVectors(fn.max,Hs.max),fn.expandByPoint(Vt)):(fn.expandByPoint(Hs.min),fn.expandByPoint(Hs.max))}fn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Vt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Vt.fromBufferAttribute(a,l),c&&(os.fromBufferAttribute(e,l),Vt.add(os)),i=Math.max(i,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<n.count;N++)a[N]=new X,c[N]=new X;const l=new X,u=new X,h=new X,p=new rt,d=new rt,_=new rt,g=new X,m=new X;function f(N,E,w){l.fromBufferAttribute(n,N),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,w),p.fromBufferAttribute(r,N),d.fromBufferAttribute(r,E),_.fromBufferAttribute(r,w),u.sub(l),h.sub(l),d.sub(p),_.sub(p);const B=1/(d.x*_.y-_.x*d.y);isFinite(B)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(B),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(B),a[N].add(g),a[E].add(g),a[w].add(g),c[N].add(m),c[E].add(m),c[w].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let N=0,E=x.length;N<E;++N){const w=x[N],B=w.start,R=w.count;for(let z=B,b=B+R;z<b;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const S=new X,y=new X,C=new X,I=new X;function L(N){C.fromBufferAttribute(i,N),I.copy(C);const E=a[N];S.copy(E),S.sub(C.multiplyScalar(C.dot(E))).normalize(),y.crossVectors(I,E);const B=y.dot(c[N])<0?-1:1;o.setXYZW(N,S.x,S.y,S.z,B)}for(let N=0,E=x.length;N<E;++N){const w=x[N],B=w.start,R=w.count;for(let z=B,b=B+R;z<b;z+=3)L(e.getX(z+0)),L(e.getX(z+1)),L(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);const i=new X,r=new X,o=new X,a=new X,c=new X,l=new X,u=new X,h=new X;if(e)for(let p=0,d=e.count;p<d;p+=3){const _=e.getX(p+0),g=e.getX(p+1),m=e.getX(p+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,d=t.count;p<d;p+=3)i.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,p=new l.constructor(c.length*u);let d=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?d=c[g]*a.data.stride+a.offset:d=c[g]*u;for(let f=0;f<u;f++)p[_++]=l[d++]}return new Ht(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const p=l[u],d=e(p,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,p=l.length;h<p;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let p=0,d=h.length;p<d;p++)u.push(h[p].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const il=new Ye,Ri=new lr,Rr=new Gn,sl=new X,Cr=new X,Ir=new X,Lr=new X,Yo=new X,Pr=new X,rl=new X,Dr=new X;class gt extends Lt{constructor(e=new jt,t=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Pr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Yo.fromBufferAttribute(h,e),o?Pr.addScaledVector(Yo,u):Pr.addScaledVector(Yo.sub(t),u))}t.add(Pr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(r),Ri.copy(e.ray).recast(e.near),!(Rr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Rr,sl)===null||Ri.origin.distanceToSquared(sl)>(e.far-e.near)**2))&&(il.copy(r).invert(),Ri.copy(e.ray).applyMatrix4(il),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,p=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=p.length;_<g;_++){const m=p[_],f=o[m.materialIndex],x=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,C=S;y<C;y+=3){const I=a.getX(y),L=a.getX(y+1),N=a.getX(y+2);i=Nr(this,f,e,n,l,u,h,I,L,N),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,f=g;m<f;m+=3){const x=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);i=Nr(this,o,e,n,l,u,h,x,S,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=p.length;_<g;_++){const m=p[_],f=o[m.materialIndex],x=Math.max(m.start,d.start),S=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,C=S;y<C;y+=3){const I=y,L=y+1,N=y+2;i=Nr(this,f,e,n,l,u,h,I,L,N),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let m=_,f=g;m<f;m+=3){const x=m,S=m+1,y=m+2;i=Nr(this,o,e,n,l,u,h,x,S,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Jd(s,e,t,n,i,r,o,a){let c;if(e.side===nn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Hn,a),c===null)return null;Dr.copy(a),Dr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Dr);return l<t.near||l>t.far?null:{distance:l,point:Dr.clone(),object:s}}function Nr(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Cr),s.getVertexPosition(c,Ir),s.getVertexPosition(l,Lr);const u=Jd(s,e,t,n,Cr,Ir,Lr,rl);if(u){const h=new X;Dn.getBarycoord(rl,Cr,Ir,Lr,h),i&&(u.uv=Dn.getInterpolatedAttribute(i,a,c,l,h,new rt)),r&&(u.uv1=Dn.getInterpolatedAttribute(r,a,c,l,h,new rt)),o&&(u.normal=Dn.getInterpolatedAttribute(o,a,c,l,h,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new X,materialIndex:0};Dn.getNormal(Cr,Ir,Lr,p.normal),u.face=p,u.barycoord=h}return u}class wn extends jt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let p=0,d=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(u,3)),this.setAttribute("uv",new Et(h,2));function _(g,m,f,x,S,y,C,I,L,N,E){const w=y/L,B=C/N,R=y/2,z=C/2,b=I/2,W=L+1,H=N+1;let Z=0,J=0;const Q=new X;for(let fe=0;fe<H;fe++){const q=fe*B-z;for(let K=0;K<W;K++){const _e=K*w-R;Q[g]=_e*x,Q[m]=q*S,Q[f]=b,l.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[f]=I>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(K/L),h.push(1-fe/N),Z+=1}}for(let fe=0;fe<N;fe++)for(let q=0;q<L;q++){const K=p+q+W*fe,_e=p+q+W*(fe+1),j=p+(q+1)+W*(fe+1),Y=p+(q+1)+W*fe;c.push(K,_e,Y),c.push(_e,j,Y),J+=6}a.addGroup(d,J,E),d+=J,p+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function en(s){const e={};for(let t=0;t<s.length;t++){const n=Rs(s[t]);for(const i in n)e[i]=n[i]}return e}function Qd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Hu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const Gu={clone:Rs,merge:en};var ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends ln{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ef,this.fragmentShader=tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=Qd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wu extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new X,ol=new rt,al=new rt;class Gt extends Wu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,ol,al),t.subVectors(al,ol)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(er*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const as=-90,cs=1;class nf extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gt(as,cs,e,t);i.layers=this.layers,this.add(i);const r=new Gt(as,cs,e,t);r.layers=this.layers,this.add(r);const o=new Gt(as,cs,e,t);o.layers=this.layers,this.add(o);const a=new Gt(as,cs,e,t);a.layers=this.layers,this.add(a);const c=new Gt(as,cs,e,t);c.layers=this.layers,this.add(c);const l=new Gt(as,cs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,p,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ju extends Ft{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ss,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sf extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ju(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new wn(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:bi});r.uniforms.tEquirect.value=t;const o=new gt(i,r),a=t.minFilter;return t.minFilter===Nn&&(t.minFilter=Kt),new nf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Ko=new X,rf=new X,of=new ut;class Ni{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ko.subVectors(n,t).cross(rf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ko),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||of.getNormalMatrix(e),i=this.coplanarPoint(Ko).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Gn,Ur=new X;class xc{constructor(e=new Ni,t=new Ni,n=new Ni,i=new Ni,r=new Ni,o=new Ni){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],p=i[7],d=i[8],_=i[9],g=i[10],m=i[11],f=i[12],x=i[13],S=i[14],y=i[15];if(n[0].setComponents(c-r,p-l,m-d,y-f).normalize(),n[1].setComponents(c+r,p+l,m+d,y+f).normalize(),n[2].setComponents(c+o,p+u,m+_,y+x).normalize(),n[3].setComponents(c-o,p-u,m-_,y-x).normalize(),n[4].setComponents(c-a,p-h,m-g,y-S).normalize(),t===si)n[5].setComponents(c+a,p+h,m+g,y+S).normalize();else if(t===lo)n[5].setComponents(a,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ur.x=i.normal.x>0?e.max.x:e.min.x,Ur.y=i.normal.y>0?e.max.y:e.min.y,Ur.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function af(s){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,p=s.createBuffer();s.bindBuffer(c,p),s.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(s.bindBuffer(l,a),h.length===0)s.bufferSubData(l,0,u);else{h.sort((d,_)=>d.start-_.start);let p=0;for(let d=1;d<h.length;d++){const _=h[p],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++p,h[p]=g)}h.length=p+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];s.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class Ls extends jt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,p=t/c,d=[],_=[],g=[],m=[];for(let f=0;f<u;f++){const x=f*p-o;for(let S=0;S<l;S++){const y=S*h-r;_.push(y,-x,0),g.push(0,0,1),m.push(S/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<a;x++){const S=x+l*f,y=x+l*(f+1),C=x+1+l*(f+1),I=x+1+l*f;d.push(S,y,I),d.push(y,C,I)}this.setIndex(d),this.setAttribute("position",new Et(_,3)),this.setAttribute("normal",new Et(g,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.widthSegments,e.heightSegments)}}var cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lf=`#ifdef USE_ALPHAHASH
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
#endif`,uf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pf=`#ifdef USE_AOMAP
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
#endif`,mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gf=`#ifdef USE_BATCHING
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
#endif`,_f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bf=`#ifdef USE_IRIDESCENCE
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
#endif`,Mf=`#ifdef USE_BUMPMAP
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
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lf=`#define PI 3.141592653589793
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
} // validated`,Pf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Df=`vec3 transformedNormal = objectNormal;
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
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kf=`#ifdef USE_GRADIENTMAP
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
}`,Zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qf=`uniform bool receiveShadow;
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
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rp=`PhysicalMaterial material;
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
#endif`,op=`struct PhysicalMaterial {
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
}`,ap=`
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
#endif`,cp=`#if defined( RE_IndirectDiffuse )
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
#endif`,lp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,up=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_p=`#if defined( USE_POINTS_UV )
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
#endif`,vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ip=`#ifdef USE_NORMALMAP
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
#endif`,Lp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Op=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xp=`float getShadowMask() {
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
}`,qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yp=`#ifdef USE_SKINNING
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
#endif`,Kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zp=`#ifdef USE_SKINNING
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
#endif`,$p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,em=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tm=`#ifdef USE_TRANSMISSION
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
#endif`,nm=`#ifdef USE_TRANSMISSION
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cm=`uniform sampler2D t2D;
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,um=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`#include <common>
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
}`,pm=`#if DEPTH_PACKING == 3200
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
}`,mm=`#define DISTANCE
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
}`,gm=`#define DISTANCE
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`uniform float scale;
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
}`,ym=`uniform vec3 diffuse;
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
}`,bm=`#include <common>
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
}`,Mm=`uniform vec3 diffuse;
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
}`,Sm=`#define LAMBERT
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
}`,Em=`#define LAMBERT
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
}`,wm=`#define MATCAP
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
}`,Tm=`#define MATCAP
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
}`,Am=`#define NORMAL
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
}`,Rm=`#define NORMAL
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
}`,Cm=`#define PHONG
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
}`,Im=`#define PHONG
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
}`,Lm=`#define STANDARD
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
}`,Pm=`#define STANDARD
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
}`,Dm=`#define TOON
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
}`,Nm=`#define TOON
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
}`,Um=`uniform float size;
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
}`,Om=`uniform vec3 diffuse;
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
}`,Fm=`#include <common>
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
}`,km=`uniform vec3 color;
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
}`,Bm=`uniform float rotation;
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
}`,zm=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:cf,alphahash_pars_fragment:lf,alphamap_fragment:uf,alphamap_pars_fragment:hf,alphatest_fragment:df,alphatest_pars_fragment:ff,aomap_fragment:pf,aomap_pars_fragment:mf,batching_pars_vertex:gf,batching_vertex:_f,begin_vertex:vf,beginnormal_vertex:xf,bsdfs:yf,iridescence_fragment:bf,bumpmap_pars_fragment:Mf,clipping_planes_fragment:Sf,clipping_planes_pars_fragment:Ef,clipping_planes_pars_vertex:wf,clipping_planes_vertex:Tf,color_fragment:Af,color_pars_fragment:Rf,color_pars_vertex:Cf,color_vertex:If,common:Lf,cube_uv_reflection_fragment:Pf,defaultnormal_vertex:Df,displacementmap_pars_vertex:Nf,displacementmap_vertex:Uf,emissivemap_fragment:Of,emissivemap_pars_fragment:Ff,colorspace_fragment:kf,colorspace_pars_fragment:Bf,envmap_fragment:zf,envmap_common_pars_fragment:Vf,envmap_pars_fragment:Hf,envmap_pars_vertex:Gf,envmap_physical_pars_fragment:ep,envmap_vertex:Wf,fog_vertex:jf,fog_pars_vertex:Xf,fog_fragment:qf,fog_pars_fragment:Yf,gradientmap_pars_fragment:Kf,lightmap_pars_fragment:Zf,lights_lambert_fragment:$f,lights_lambert_pars_fragment:Jf,lights_pars_begin:Qf,lights_toon_fragment:tp,lights_toon_pars_fragment:np,lights_phong_fragment:ip,lights_phong_pars_fragment:sp,lights_physical_fragment:rp,lights_physical_pars_fragment:op,lights_fragment_begin:ap,lights_fragment_maps:cp,lights_fragment_end:lp,logdepthbuf_fragment:up,logdepthbuf_pars_fragment:hp,logdepthbuf_pars_vertex:dp,logdepthbuf_vertex:fp,map_fragment:pp,map_pars_fragment:mp,map_particle_fragment:gp,map_particle_pars_fragment:_p,metalnessmap_fragment:vp,metalnessmap_pars_fragment:xp,morphinstance_vertex:yp,morphcolor_vertex:bp,morphnormal_vertex:Mp,morphtarget_pars_vertex:Sp,morphtarget_vertex:Ep,normal_fragment_begin:wp,normal_fragment_maps:Tp,normal_pars_fragment:Ap,normal_pars_vertex:Rp,normal_vertex:Cp,normalmap_pars_fragment:Ip,clearcoat_normal_fragment_begin:Lp,clearcoat_normal_fragment_maps:Pp,clearcoat_pars_fragment:Dp,iridescence_pars_fragment:Np,opaque_fragment:Up,packing:Op,premultiplied_alpha_fragment:Fp,project_vertex:kp,dithering_fragment:Bp,dithering_pars_fragment:zp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Hp,shadowmap_pars_fragment:Gp,shadowmap_pars_vertex:Wp,shadowmap_vertex:jp,shadowmask_pars_fragment:Xp,skinbase_vertex:qp,skinning_pars_vertex:Yp,skinning_vertex:Kp,skinnormal_vertex:Zp,specularmap_fragment:$p,specularmap_pars_fragment:Jp,tonemapping_fragment:Qp,tonemapping_pars_fragment:em,transmission_fragment:tm,transmission_pars_fragment:nm,uv_pars_fragment:im,uv_pars_vertex:sm,uv_vertex:rm,worldpos_vertex:om,background_vert:am,background_frag:cm,backgroundCube_vert:lm,backgroundCube_frag:um,cube_vert:hm,cube_frag:dm,depth_vert:fm,depth_frag:pm,distanceRGBA_vert:mm,distanceRGBA_frag:gm,equirect_vert:_m,equirect_frag:vm,linedashed_vert:xm,linedashed_frag:ym,meshbasic_vert:bm,meshbasic_frag:Mm,meshlambert_vert:Sm,meshlambert_frag:Em,meshmatcap_vert:wm,meshmatcap_frag:Tm,meshnormal_vert:Am,meshnormal_frag:Rm,meshphong_vert:Cm,meshphong_frag:Im,meshphysical_vert:Lm,meshphysical_frag:Pm,meshtoon_vert:Dm,meshtoon_frag:Nm,points_vert:Um,points_frag:Om,shadow_vert:Fm,shadow_frag:km,sprite_vert:Bm,sprite_frag:zm},Le={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},zn={basic:{uniforms:en([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:en([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:en([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:en([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:en([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:en([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:en([Le.points,Le.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:en([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:en([Le.common,Le.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:en([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:en([Le.sprite,Le.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:en([Le.common,Le.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:en([Le.lights,Le.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};zn.physical={uniforms:en([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Or={r:0,b:0,g:0},Ii=new un,Vm=new Ye;function Hm(s,e,t,n,i,r,o){const a=new Ke(0);let c=r===!0?0:1,l,u,h=null,p=0,d=null;function _(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?t:e).get(S)),S}function g(x){let S=!1;const y=_(x);y===null?f(a,c):y&&y.isColor&&(f(y,1),S=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,S){const y=_(S);y&&(y.isCubeTexture||y.mapping===go)?(u===void 0&&(u=new gt(new wn(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Rs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ii.copy(S.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(Ii)),u.material.toneMapped=dt.getTransfer(y.colorSpace)!==Ct,(h!==y||p!==y.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=y,p=y.version,d=s.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new gt(new Ls(2,2),new ai({name:"BackgroundMaterial",uniforms:Rs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=dt.getTransfer(y.colorSpace)!==Ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||p!==y.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,p=y.version,d=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function f(x,S){x.getRGB(Or,Hu(s)),n.buffers.color.setClear(Or.r,Or.g,Or.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(x,S=1){a.set(x),c=S,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,f(a,c)},render:g,addToRenderList:m}}function Gm(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=p(null);let r=i,o=!1;function a(w,B,R,z,b){let W=!1;const H=h(z,R,B);r!==H&&(r=H,l(r.object)),W=d(w,z,R,b),W&&_(w,z,R,b),b!==null&&e.update(b,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(w,B,R,z),b!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(b).buffer))}function c(){return s.createVertexArray()}function l(w){return s.bindVertexArray(w)}function u(w){return s.deleteVertexArray(w)}function h(w,B,R){const z=R.wireframe===!0;let b=n[w.id];b===void 0&&(b={},n[w.id]=b);let W=b[B.id];W===void 0&&(W={},b[B.id]=W);let H=W[z];return H===void 0&&(H=p(c()),W[z]=H),H}function p(w){const B=[],R=[],z=[];for(let b=0;b<t;b++)B[b]=0,R[b]=0,z[b]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:R,attributeDivisors:z,object:w,attributes:{},index:null}}function d(w,B,R,z){const b=r.attributes,W=B.attributes;let H=0;const Z=R.getAttributes();for(const J in Z)if(Z[J].location>=0){const fe=b[J];let q=W[J];if(q===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(q=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(q=w.instanceColor)),fe===void 0||fe.attribute!==q||q&&fe.data!==q.data)return!0;H++}return r.attributesNum!==H||r.index!==z}function _(w,B,R,z){const b={},W=B.attributes;let H=0;const Z=R.getAttributes();for(const J in Z)if(Z[J].location>=0){let fe=W[J];fe===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(fe=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(fe=w.instanceColor));const q={};q.attribute=fe,fe&&fe.data&&(q.data=fe.data),b[J]=q,H++}r.attributes=b,r.attributesNum=H,r.index=z}function g(){const w=r.newAttributes;for(let B=0,R=w.length;B<R;B++)w[B]=0}function m(w){f(w,0)}function f(w,B){const R=r.newAttributes,z=r.enabledAttributes,b=r.attributeDivisors;R[w]=1,z[w]===0&&(s.enableVertexAttribArray(w),z[w]=1),b[w]!==B&&(s.vertexAttribDivisor(w,B),b[w]=B)}function x(){const w=r.newAttributes,B=r.enabledAttributes;for(let R=0,z=B.length;R<z;R++)B[R]!==w[R]&&(s.disableVertexAttribArray(R),B[R]=0)}function S(w,B,R,z,b,W,H){H===!0?s.vertexAttribIPointer(w,B,R,b,W):s.vertexAttribPointer(w,B,R,z,b,W)}function y(w,B,R,z){g();const b=z.attributes,W=R.getAttributes(),H=B.defaultAttributeValues;for(const Z in W){const J=W[Z];if(J.location>=0){let Q=b[Z];if(Q===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor)),Q!==void 0){const fe=Q.normalized,q=Q.itemSize,K=e.get(Q);if(K===void 0)continue;const _e=K.buffer,j=K.type,Y=K.bytesPerElement,ce=j===s.INT||j===s.UNSIGNED_INT||Q.gpuType===lc;if(Q.isInterleavedBufferAttribute){const de=Q.data,xe=de.stride,we=Q.offset;if(de.isInstancedInterleavedBuffer){for(let Be=0;Be<J.locationSize;Be++)f(J.location+Be,de.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Be=0;Be<J.locationSize;Be++)m(J.location+Be);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let Be=0;Be<J.locationSize;Be++)S(J.location+Be,q/J.locationSize,j,fe,xe*Y,(we+q/J.locationSize*Be)*Y,ce)}else{if(Q.isInstancedBufferAttribute){for(let de=0;de<J.locationSize;de++)f(J.location+de,Q.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let de=0;de<J.locationSize;de++)m(J.location+de);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let de=0;de<J.locationSize;de++)S(J.location+de,q/J.locationSize,j,fe,q*Y,q/J.locationSize*de*Y,ce)}}else if(H!==void 0){const fe=H[Z];if(fe!==void 0)switch(fe.length){case 2:s.vertexAttrib2fv(J.location,fe);break;case 3:s.vertexAttrib3fv(J.location,fe);break;case 4:s.vertexAttrib4fv(J.location,fe);break;default:s.vertexAttrib1fv(J.location,fe)}}}}x()}function C(){N();for(const w in n){const B=n[w];for(const R in B){const z=B[R];for(const b in z)u(z[b].object),delete z[b];delete B[R]}delete n[w]}}function I(w){if(n[w.id]===void 0)return;const B=n[w.id];for(const R in B){const z=B[R];for(const b in z)u(z[b].object),delete z[b];delete B[R]}delete n[w.id]}function L(w){for(const B in n){const R=n[B];if(R[w.id]===void 0)continue;const z=R[w.id];for(const b in z)u(z[b].object),delete z[b];delete R[w.id]}}function N(){E(),o=!0,r!==i&&(r=i,l(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:N,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:L,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function Wm(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,n,1)}function c(l,u,h,p){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)o(l[_],u[_],p[_]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,p,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*p[g];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function jm(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(L){return!(L!==En&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const N=L===cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==oi&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Un&&!N)}function c(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:C,maxSamples:I}}function Xm(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ni,a=new ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const d=h.length!==0||p||n!==0||i;return i=p,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,f=s.get(h);if(!i||_===null||_.length===0||r&&!m)r?u(null):l();else{const x=r?0:n,S=x*4;let y=f.clippingState||null;c.value=y,y=u(_,p,S,d);for(let C=0;C!==S;++C)y[C]=t[C];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,p,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const f=d+g*4,x=p.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,y=d;S!==g;++S,y+=4)o.copy(h[S]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function qm(s){let e=new WeakMap;function t(o,a){return a===Sa?o.mapping=Ss:a===Ea&&(o.mapping=Es),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Sa||a===Ea)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new sf(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class xo extends Wu{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ps=4,cl=[.125,.215,.35,.446,.526,.582],Fi=20,Zo=new xo,ll=new Ke;let $o=null,Jo=0,Qo=0,ea=!1;const Ui=(1+Math.sqrt(5))/2,ls=1/Ui,ul=[new X(-Ui,ls,0),new X(Ui,ls,0),new X(-ls,0,Ui),new X(ls,0,Ui),new X(0,Ui,-ls),new X(0,Ui,ls),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class hl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){$o=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($o,Jo,Qo),this._renderer.xr.enabled=ea,e.scissorTest=!1,Fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ss||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$o=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:cr,format:En,colorSpace:rn,depthBuffer:!1},i=dl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ym(r)),this._blurMaterial=Km(r,e,t)}return i}_compileMaterial(e){const t=new gt(this._lodPlanes[0],e);this._renderer.compile(t,Zo)}_sceneToCubeUV(e,t,n,i){const a=new Gt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(ll),u.toneMapping=Mi,u.autoClear=!1;const d=new Wt({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new gt(new wn,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(ll),g=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):x===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const S=this._cubeSize;Fr(i,x*S,f>2?S:0,S,S),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ss||e.mapping===Es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=pl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fl());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Fr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Zo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ul[(i-r-1)%ul.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new gt(this._lodPlanes[i],l),p=l.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Fi-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):Fi;m>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);const f=[];let x=0;for(let L=0;L<Fi;++L){const N=L/g,E=Math.exp(-N*N/2);f.push(E),L===0?x+=E:L<m&&(x+=2*E)}for(let L=0;L<f.length;L++)f[L]=f[L]/x;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:S}=this;p.dTheta.value=_,p.mipInt.value=S-n;const y=this._sizeLods[i],C=3*y*(i>S-ps?i-S+ps:0),I=4*(this._cubeSize-y);Fr(t,C,I,3*y,2*y),c.setRenderTarget(t),c.render(h,Zo)}}function Ym(s){const e=[],t=[],n=[];let i=s;const r=s-ps+1+cl.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-ps?c=cl[o-s+ps-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,p=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,f=1,x=new Float32Array(g*_*d),S=new Float32Array(m*_*d),y=new Float32Array(f*_*d);for(let I=0;I<d;I++){const L=I%3*2/3-1,N=I>2?0:-1,E=[L,N,0,L+2/3,N,0,L+2/3,N+1,0,L,N,0,L+2/3,N+1,0,L,N+1,0];x.set(E,g*_*I),S.set(p,m*_*I);const w=[I,I,I,I,I,I];y.set(w,f*_*I)}const C=new jt;C.setAttribute("position",new Ht(x,g)),C.setAttribute("uv",new Ht(S,m)),C.setAttribute("faceIndex",new Ht(y,f)),e.push(C),i>ps&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function dl(s,e,t){const n=new Gi(s,e,t);return n.texture.mapping=go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Km(s,e,t){const n=new Float32Array(Fi),i=new X(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:yc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function fl(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function pl(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function yc(){return`

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
	`}function Zm(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Sa||c===Ea,u=c===Ss||c===Es;if(l||u){let h=e.get(a);const p=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new hl(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new hl(s)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $m(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Js("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Jm(s,e,t,n){const i={},r=new WeakMap;function o(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const g=p.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}p.removeEventListener("dispose",o),delete i[p.id];const d=r.get(p);d&&(e.remove(d),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(h,p){return i[p.id]===!0||(p.addEventListener("dispose",o),i[p.id]=!0,t.memory.geometries++),p}function c(h){const p=h.attributes;for(const _ in p)e.update(p[_],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],s.ARRAY_BUFFER)}}function l(h){const p=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const x=d.array;g=d.version;for(let S=0,y=x.length;S<y;S+=3){const C=x[S+0],I=x[S+1],L=x[S+2];p.push(C,I,I,L,L,C)}}else if(_!==void 0){const x=_.array;g=_.version;for(let S=0,y=x.length/3-1;S<y;S+=3){const C=S+0,I=S+1,L=S+2;p.push(C,I,I,L,L,C)}}else return;const m=new(Ou(p)?Vu:zu)(p,1);m.version=g;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const p=r.get(h);if(p){const d=h.index;d!==null&&p.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Qm(s,e,t){let n;function i(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,d){s.drawElements(n,d,r,p*o),t.update(d,n,1)}function l(p,d,_){_!==0&&(s.drawElementsInstanced(n,d,r,p*o,_),t.update(d,n,_))}function u(p,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,_);let m=0;for(let f=0;f<_;f++)m+=d[f];t.update(m,n,1)}function h(p,d,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)l(p[f]/o,d[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,p,0,g,0,_);let f=0;for(let x=0;x<_;x++)f+=d[x]*g[x];t.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function eg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function tg(s,e,t){const n=new WeakMap,i=new Mt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let p=n.get(a);if(p===void 0||p.count!==h){let E=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",E)};p!==void 0&&p.texture.dispose();const d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;d===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let y=a.attributes.position.count*S,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const I=new Float32Array(y*C*4*h),L=new ku(I,y,C,h);L.type=Un,L.needsUpdate=!0;const N=S*4;for(let w=0;w<h;w++){const B=m[w],R=f[w],z=x[w],b=y*C*4*w;for(let W=0;W<B.count;W++){const H=W*N;d===!0&&(i.fromBufferAttribute(B,W),I[b+H+0]=i.x,I[b+H+1]=i.y,I[b+H+2]=i.z,I[b+H+3]=0),_===!0&&(i.fromBufferAttribute(R,W),I[b+H+4]=i.x,I[b+H+5]=i.y,I[b+H+6]=i.z,I[b+H+7]=0),g===!0&&(i.fromBufferAttribute(z,W),I[b+H+8]=i.x,I[b+H+9]=i.y,I[b+H+10]=i.z,I[b+H+11]=z.itemSize===4?i.w:1)}}p={count:h,texture:L,size:new rt(y,C)},n.set(a,p),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let g=0;g<l.length;g++)d+=l[g];const _=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}return{update:r}}function ng(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;i.get(p)!==l&&(p.update(),i.set(p,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class qu extends Ft{constructor(e,t,n,i,r,o,a,c,l,u=vs){if(u!==vs&&u!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===vs&&(n=Hi),n===void 0&&u===Ts&&(n=ws),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:sn,this.minFilter=c!==void 0?c:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Yu=new Ft,ml=new qu(1,1),Ku=new ku,Zu=new Hd,$u=new ju,gl=[],_l=[],vl=new Float32Array(16),xl=new Float32Array(9),yl=new Float32Array(4);function Ps(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=gl[i];if(r===void 0&&(r=new Float32Array(i),gl[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function kt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Bt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function yo(s,e){let t=_l[e];t===void 0&&(t=new Int32Array(e),_l[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ig(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function sg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2fv(this.addr,e),Bt(t,e)}}function rg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;s.uniform3fv(this.addr,e),Bt(t,e)}}function og(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4fv(this.addr,e),Bt(t,e)}}function ag(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;yl.set(n),s.uniformMatrix2fv(this.addr,!1,yl),Bt(t,n)}}function cg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;xl.set(n),s.uniformMatrix3fv(this.addr,!1,xl),Bt(t,n)}}function lg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;vl.set(n),s.uniformMatrix4fv(this.addr,!1,vl),Bt(t,n)}}function ug(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function hg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2iv(this.addr,e),Bt(t,e)}}function dg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;s.uniform3iv(this.addr,e),Bt(t,e)}}function fg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4iv(this.addr,e),Bt(t,e)}}function pg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function mg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2uiv(this.addr,e),Bt(t,e)}}function gg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;s.uniform3uiv(this.addr,e),Bt(t,e)}}function _g(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4uiv(this.addr,e),Bt(t,e)}}function vg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ml.compareFunction=Uu,r=ml):r=Yu,t.setTexture2D(e||r,i)}function xg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Zu,i)}function yg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||$u,i)}function bg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ku,i)}function Mg(s){switch(s){case 5126:return ig;case 35664:return sg;case 35665:return rg;case 35666:return og;case 35674:return ag;case 35675:return cg;case 35676:return lg;case 5124:case 35670:return ug;case 35667:case 35671:return hg;case 35668:case 35672:return dg;case 35669:case 35673:return fg;case 5125:return pg;case 36294:return mg;case 36295:return gg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return bg}}function Sg(s,e){s.uniform1fv(this.addr,e)}function Eg(s,e){const t=Ps(e,this.size,2);s.uniform2fv(this.addr,t)}function wg(s,e){const t=Ps(e,this.size,3);s.uniform3fv(this.addr,t)}function Tg(s,e){const t=Ps(e,this.size,4);s.uniform4fv(this.addr,t)}function Ag(s,e){const t=Ps(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Rg(s,e){const t=Ps(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Cg(s,e){const t=Ps(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ig(s,e){s.uniform1iv(this.addr,e)}function Lg(s,e){s.uniform2iv(this.addr,e)}function Pg(s,e){s.uniform3iv(this.addr,e)}function Dg(s,e){s.uniform4iv(this.addr,e)}function Ng(s,e){s.uniform1uiv(this.addr,e)}function Ug(s,e){s.uniform2uiv(this.addr,e)}function Og(s,e){s.uniform3uiv(this.addr,e)}function Fg(s,e){s.uniform4uiv(this.addr,e)}function kg(s,e,t){const n=this.cache,i=e.length,r=yo(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Yu,r[o])}function Bg(s,e,t){const n=this.cache,i=e.length,r=yo(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Zu,r[o])}function zg(s,e,t){const n=this.cache,i=e.length,r=yo(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||$u,r[o])}function Vg(s,e,t){const n=this.cache,i=e.length,r=yo(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ku,r[o])}function Hg(s){switch(s){case 5126:return Sg;case 35664:return Eg;case 35665:return wg;case 35666:return Tg;case 35674:return Ag;case 35675:return Rg;case 35676:return Cg;case 5124:case 35670:return Ig;case 35667:case 35671:return Lg;case 35668:case 35672:return Pg;case 35669:case 35673:return Dg;case 5125:return Ng;case 36294:return Ug;case 36295:return Og;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return Vg}}class Gg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mg(t.type)}}class Wg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hg(t.type)}}class jg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const ta=/(\w+)(\])?(\[|\.)?/g;function bl(s,e){s.seq.push(e),s.map[e.id]=e}function Xg(s,e,t){const n=s.name,i=n.length;for(ta.lastIndex=0;;){const r=ta.exec(n),o=ta.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){bl(t,l===void 0?new Gg(a,s,e):new Wg(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new jg(a),bl(t,h)),t=h}}}class ro{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Xg(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ml(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const qg=37297;let Yg=0;function Kg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Sl=new ut;function Zg(s){dt._getMatrix(Sl,dt.workingColorSpace,s);const e=`mat3( ${Sl.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(s)){case vo:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function El(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Kg(s.getShaderSource(e),o)}else return i}function $g(s,e){const t=Zg(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Jg(s,e){let t;switch(e){case Kh:t="Linear";break;case Zh:t="Reinhard";break;case $h:t="Cineon";break;case Jh:t="ACESFilmic";break;case ed:t="AgX";break;case td:t="Neutral";break;case Qh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const kr=new X;function Qg(){dt.getLuminanceCoefficients(kr);const s=kr.x.toFixed(4),e=kr.y.toFixed(4),t=kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function t_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function n_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Qs(s){return s!==""}function wl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const i_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qa(s){return s.replace(i_,r_)}const s_=new Map;function r_(s,e){let t=ht[e];if(t===void 0){const n=s_.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qa(t)}const o_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Al(s){return s.replace(o_,a_)}function a_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Rl(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function c_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Mu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Rh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function l_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ss:case Es:e="ENVMAP_TYPE_CUBE";break;case go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function u_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function h_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case mo:e="ENVMAP_BLENDING_MULTIPLY";break;case qh:e="ENVMAP_BLENDING_MIX";break;case Yh:e="ENVMAP_BLENDING_ADD";break}return e}function d_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function f_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=c_(t),l=l_(t),u=u_(t),h=h_(t),p=d_(t),d=e_(t),_=t_(r),g=i.createProgram();let m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Qs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Qs).join(`
`),f.length>0&&(f+=`
`)):(m=[Rl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),f=[Rl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?ht.tonemapping_pars_fragment:"",t.toneMapping!==Mi?Jg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,$g("linearToOutputTexel",t.outputColorSpace),Qg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),o=Qa(o),o=wl(o,t),o=Tl(o,t),a=Qa(a),a=wl(a,t),a=Tl(a,t),o=Al(o),a=Al(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=x+m+o,y=x+f+a,C=Ml(i,i.VERTEX_SHADER,S),I=Ml(i,i.FRAGMENT_SHADER,y);i.attachShader(g,C),i.attachShader(g,I),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function L(B){if(s.debug.checkShaderErrors){const R=i.getProgramInfoLog(g).trim(),z=i.getShaderInfoLog(C).trim(),b=i.getShaderInfoLog(I).trim();let W=!0,H=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,C,I);else{const Z=El(i,C,"vertex"),J=El(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+R+`
`+Z+`
`+J)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(z===""||b==="")&&(H=!1);H&&(B.diagnostics={runnable:W,programLog:R,vertexShader:{log:z,prefix:m},fragmentShader:{log:b,prefix:f}})}i.deleteShader(C),i.deleteShader(I),N=new ro(i,g),E=n_(i,g)}let N;this.getUniforms=function(){return N===void 0&&L(this),N};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(g,qg)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=I,this}let p_=0;class m_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new g_(e),t.set(e,n)),n}}class g_{constructor(e){this.id=p_++,this.code=e,this.usedTimes=0}}function __(s,e,t,n,i,r,o){const a=new vc,c=new m_,l=new Set,u=[],h=i.logarithmicDepthBuffer,p=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,w,B,R,z){const b=R.fog,W=z.geometry,H=E.isMeshStandardMaterial?R.environment:null,Z=(E.isMeshStandardMaterial?t:e).get(E.envMap||H),J=Z&&Z.mapping===go?Z.image.height:null,Q=_[E.type];E.precision!==null&&(d=i.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const fe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,q=fe!==void 0?fe.length:0;let K=0;W.morphAttributes.position!==void 0&&(K=1),W.morphAttributes.normal!==void 0&&(K=2),W.morphAttributes.color!==void 0&&(K=3);let _e,j,Y,ce;if(Q){const lt=zn[Q];_e=lt.vertexShader,j=lt.fragmentShader}else _e=E.vertexShader,j=E.fragmentShader,c.update(E),Y=c.getVertexShaderID(E),ce=c.getFragmentShaderID(E);const de=s.getRenderTarget(),xe=s.state.buffers.depth.getReversed(),we=z.isInstancedMesh===!0,Be=z.isBatchedMesh===!0,Qe=!!E.map,tt=!!E.matcap,pt=!!Z,v=!!E.aoMap,me=!!E.lightMap,re=!!E.bumpMap,V=!!E.normalMap,F=!!E.displacementMap,$=!!E.emissiveMap,ae=!!E.metalnessMap,P=!!E.roughnessMap,M=E.anisotropy>0,G=E.clearcoat>0,se=E.dispersion>0,ne=E.iridescence>0,oe=E.sheen>0,Te=E.transmission>0,ye=M&&!!E.anisotropyMap,Re=G&&!!E.clearcoatMap,ct=G&&!!E.clearcoatNormalMap,be=G&&!!E.clearcoatRoughnessMap,Oe=ne&&!!E.iridescenceMap,De=ne&&!!E.iridescenceThicknessMap,Ze=oe&&!!E.sheenColorMap,Fe=oe&&!!E.sheenRoughnessMap,nt=!!E.specularMap,it=!!E.specularColorMap,bt=!!E.specularIntensityMap,te=Te&&!!E.transmissionMap,Ce=Te&&!!E.thicknessMap,pe=!!E.gradientMap,ve=!!E.alphaMap,Ie=E.alphaTest>0,Ne=!!E.alphaHash,ot=!!E.extensions;let Pt=Mi;E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Pt=s.toneMapping);const zt={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:_e,fragmentShader:j,defines:E.defines,customVertexShaderID:Y,customFragmentShaderID:ce,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Be,batchingColor:Be&&z._colorsTexture!==null,instancing:we,instancingColor:we&&z.instanceColor!==null,instancingMorph:we&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:rn,alphaToCoverage:!!E.alphaToCoverage,map:Qe,matcap:tt,envMap:pt,envMapMode:pt&&Z.mapping,envMapCubeUVHeight:J,aoMap:v,lightMap:me,bumpMap:re,normalMap:V,displacementMap:p&&F,emissiveMap:$,normalMapObjectSpace:V&&E.normalMapType===ud,normalMapTangentSpace:V&&E.normalMapType===_o,metalnessMap:ae,roughnessMap:P,anisotropy:M,anisotropyMap:ye,clearcoat:G,clearcoatMap:Re,clearcoatNormalMap:ct,clearcoatRoughnessMap:be,dispersion:se,iridescence:ne,iridescenceMap:Oe,iridescenceThicknessMap:De,sheen:oe,sheenColorMap:Ze,sheenRoughnessMap:Fe,specularMap:nt,specularColorMap:it,specularIntensityMap:bt,transmission:Te,transmissionMap:te,thicknessMap:Ce,gradientMap:pe,opaque:E.transparent===!1&&E.blending===_s&&E.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ie,alphaHash:Ne,combine:E.combine,mapUv:Qe&&g(E.map.channel),aoMapUv:v&&g(E.aoMap.channel),lightMapUv:me&&g(E.lightMap.channel),bumpMapUv:re&&g(E.bumpMap.channel),normalMapUv:V&&g(E.normalMap.channel),displacementMapUv:F&&g(E.displacementMap.channel),emissiveMapUv:$&&g(E.emissiveMap.channel),metalnessMapUv:ae&&g(E.metalnessMap.channel),roughnessMapUv:P&&g(E.roughnessMap.channel),anisotropyMapUv:ye&&g(E.anisotropyMap.channel),clearcoatMapUv:Re&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:ct&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:De&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&g(E.sheenRoughnessMap.channel),specularMapUv:nt&&g(E.specularMap.channel),specularColorMapUv:it&&g(E.specularColorMap.channel),specularIntensityMapUv:bt&&g(E.specularIntensityMap.channel),transmissionMapUv:te&&g(E.transmissionMap.channel),thicknessMapUv:Ce&&g(E.thicknessMap.channel),alphaMapUv:ve&&g(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(V||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(Qe||ve),fog:!!b,useFog:E.fog===!0,fogExp2:!!b&&b.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:xe,skinning:z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:K,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Qe&&E.map.isVideoTexture===!0&&dt.getTransfer(E.map.colorSpace)===Ct,decodeVideoTextureEmissive:$&&E.emissiveMap.isVideoTexture===!0&&dt.getTransfer(E.emissiveMap.colorSpace)===Ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===bn,flipSided:E.side===nn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ot&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&E.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function f(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const B in E.defines)w.push(B),w.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(x(w,E),S(w,E),w.push(s.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function x(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function S(E,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){const w=_[E.type];let B;if(w){const R=zn[w];B=Gu.clone(R.uniforms)}else B=E.uniforms;return B}function C(E,w){let B;for(let R=0,z=u.length;R<z;R++){const b=u[R];if(b.cacheKey===w){B=b,++B.usedTimes;break}}return B===void 0&&(B=new f_(s,w,E,r),u.push(B)),B}function I(E){if(--E.usedTimes===0){const w=u.indexOf(E);u[w]=u[u.length-1],u.pop(),E.destroy()}}function L(E){c.remove(E)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:C,releaseProgram:I,releaseShaderCache:L,programs:u,dispose:N}}function v_(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function x_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Cl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Il(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,p,d,_,g,m){let f=s[e];return f===void 0?(f={id:h.id,object:h,geometry:p,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},s[e]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=d,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=g,f.group=m),e++,f}function a(h,p,d,_,g,m){const f=o(h,p,d,_,g,m);d.transmission>0?n.push(f):d.transparent===!0?i.push(f):t.push(f)}function c(h,p,d,_,g,m){const f=o(h,p,d,_,g,m);d.transmission>0?n.unshift(f):d.transparent===!0?i.unshift(f):t.unshift(f)}function l(h,p){t.length>1&&t.sort(h||x_),n.length>1&&n.sort(p||Cl),i.length>1&&i.sort(p||Cl)}function u(){for(let h=e,p=s.length;h<p;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function y_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Il,s.set(n,[o])):i>=r.length?(o=new Il,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function b_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Ke};break;case"SpotLight":t={position:new X,direction:new X,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new X,halfWidth:new X,halfHeight:new X};break}return s[e.id]=t,t}}}function M_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let S_=0;function E_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function w_(s){const e=new b_,t=M_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new X);const i=new X,r=new Ye,o=new Ye;function a(l){let u=0,h=0,p=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,_=0,g=0,m=0,f=0,x=0,S=0,y=0,C=0,I=0,L=0;l.sort(E_);for(let E=0,w=l.length;E<w;E++){const B=l[E],R=B.color,z=B.intensity,b=B.distance,W=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)u+=R.r*z,h+=R.g*z,p+=R.b*z;else if(B.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(B.sh.coefficients[H],z);L++}else if(B.isDirectionalLight){const H=e.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Z=B.shadow,J=t.get(B);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,n.directionalShadow[d]=J,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=B.shadow.matrix,x++}n.directional[d]=H,d++}else if(B.isSpotLight){const H=e.get(B);H.position.setFromMatrixPosition(B.matrixWorld),H.color.copy(R).multiplyScalar(z),H.distance=b,H.coneCos=Math.cos(B.angle),H.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),H.decay=B.decay,n.spot[g]=H;const Z=B.shadow;if(B.map&&(n.spotLightMap[C]=B.map,C++,Z.updateMatrices(B),B.castShadow&&I++),n.spotLightMatrix[g]=Z.matrix,B.castShadow){const J=t.get(B);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,n.spotShadow[g]=J,n.spotShadowMap[g]=W,y++}g++}else if(B.isRectAreaLight){const H=e.get(B);H.color.copy(R).multiplyScalar(z),H.halfWidth.set(B.width*.5,0,0),H.halfHeight.set(0,B.height*.5,0),n.rectArea[m]=H,m++}else if(B.isPointLight){const H=e.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity),H.distance=B.distance,H.decay=B.decay,B.castShadow){const Z=B.shadow,J=t.get(B);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,J.shadowCameraNear=Z.camera.near,J.shadowCameraFar=Z.camera.far,n.pointShadow[_]=J,n.pointShadowMap[_]=W,n.pointShadowMatrix[_]=B.shadow.matrix,S++}n.point[_]=H,_++}else if(B.isHemisphereLight){const H=e.get(B);H.skyColor.copy(B.color).multiplyScalar(z),H.groundColor.copy(B.groundColor).multiplyScalar(z),n.hemi[f]=H,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=p;const N=n.hash;(N.directionalLength!==d||N.pointLength!==_||N.spotLength!==g||N.rectAreaLength!==m||N.hemiLength!==f||N.numDirectionalShadows!==x||N.numPointShadows!==S||N.numSpotShadows!==y||N.numSpotMaps!==C||N.numLightProbes!==L)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+C-I,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=L,N.directionalLength=d,N.pointLength=_,N.spotLength=g,N.rectAreaLength=m,N.hemiLength=f,N.numDirectionalShadows=x,N.numPointShadows=S,N.numSpotShadows=y,N.numSpotMaps=C,N.numLightProbes=L,n.version=S_++)}function c(l,u){let h=0,p=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let f=0,x=l.length;f<x;f++){const S=l[f];if(S.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(S.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const y=n.point[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function Ll(s){const e=new w_(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function T_(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Ll(s),e.set(i,[a])):r>=o.length?(a=new Ll(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class A_ extends ln{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class R_ extends ln{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const C_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I_=`uniform sampler2D shadow_pass;
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
}`;function L_(s,e,t){let n=new xc;const i=new rt,r=new rt,o=new Mt,a=new A_({depthPacking:ld}),c=new R_,l={},u=t.maxTextureSize,h={[Hn]:nn,[nn]:Hn,[bn]:bn},p=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:C_,fragmentShader:I_}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const _=new jt;_.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new gt(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu;let f=this.type;this.render=function(I,L,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const E=s.getRenderTarget(),w=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),R=s.state;R.setBlending(bi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const z=f!==ei&&this.type===ei,b=f===ei&&this.type!==ei;for(let W=0,H=I.length;W<H;W++){const Z=I[W],J=Z.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;i.copy(J.mapSize);const Q=J.getFrameExtents();if(i.multiply(Q),r.copy(J.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Q.x),i.x=r.x*Q.x,J.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Q.y),i.y=r.y*Q.y,J.mapSize.y=r.y)),J.map===null||z===!0||b===!0){const q=this.type!==ei?{minFilter:sn,magFilter:sn}:{};J.map!==null&&J.map.dispose(),J.map=new Gi(i.x,i.y,q),J.map.texture.name=Z.name+".shadowMap",J.camera.updateProjectionMatrix()}s.setRenderTarget(J.map),s.clear();const fe=J.getViewportCount();for(let q=0;q<fe;q++){const K=J.getViewport(q);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),R.viewport(o),J.updateMatrices(Z,q),n=J.getFrustum(),y(L,N,J.camera,Z,this.type)}J.isPointLightShadow!==!0&&this.type===ei&&x(J,N),J.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(E,w,B)};function x(I,L){const N=e.update(g);p.defines.VSM_SAMPLES!==I.blurSamples&&(p.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Gi(i.x,i.y)),p.uniforms.shadow_pass.value=I.map.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(L,null,N,p,g,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(L,null,N,d,g,null)}function S(I,L,N,E){let w=null;const B=N.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)w=B;else if(w=N.isPointLight===!0?c:a,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const R=w.uuid,z=L.uuid;let b=l[R];b===void 0&&(b={},l[R]=b);let W=b[z];W===void 0&&(W=w.clone(),b[z]=W,L.addEventListener("dispose",C)),w=W}if(w.visible=L.visible,w.wireframe=L.wireframe,E===ei?w.side=L.shadowSide!==null?L.shadowSide:L.side:w.side=L.shadowSide!==null?L.shadowSide:h[L.side],w.alphaMap=L.alphaMap,w.alphaTest=L.alphaTest,w.map=L.map,w.clipShadows=L.clipShadows,w.clippingPlanes=L.clippingPlanes,w.clipIntersection=L.clipIntersection,w.displacementMap=L.displacementMap,w.displacementScale=L.displacementScale,w.displacementBias=L.displacementBias,w.wireframeLinewidth=L.wireframeLinewidth,w.linewidth=L.linewidth,N.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const R=s.properties.get(w);R.light=N}return w}function y(I,L,N,E,w){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===ei)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,I.matrixWorld);const z=e.update(I),b=I.material;if(Array.isArray(b)){const W=z.groups;for(let H=0,Z=W.length;H<Z;H++){const J=W[H],Q=b[J.materialIndex];if(Q&&Q.visible){const fe=S(I,Q,E,w);I.onBeforeShadow(s,I,L,N,z,fe,J),s.renderBufferDirect(N,null,z,fe,I,J),I.onAfterShadow(s,I,L,N,z,fe,J)}}}else if(b.visible){const W=S(I,b,E,w);I.onBeforeShadow(s,I,L,N,z,W,null),s.renderBufferDirect(N,null,z,W,I,null),I.onAfterShadow(s,I,L,N,z,W,null)}}const R=I.children;for(let z=0,b=R.length;z<b;z++)y(R[z],L,N,E,w)}function C(I){I.target.removeEventListener("dispose",C);for(const N in l){const E=l[N],w=I.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}const P_={[ga]:_a,[va]:ba,[xa]:Ma,[Ms]:ya,[_a]:ga,[ba]:va,[Ma]:xa,[ya]:Ms};function D_(s,e){function t(){let te=!1;const Ce=new Mt;let pe=null;const ve=new Mt(0,0,0,0);return{setMask:function(Ie){pe!==Ie&&!te&&(s.colorMask(Ie,Ie,Ie,Ie),pe=Ie)},setLocked:function(Ie){te=Ie},setClear:function(Ie,Ne,ot,Pt,zt){zt===!0&&(Ie*=Pt,Ne*=Pt,ot*=Pt),Ce.set(Ie,Ne,ot,Pt),ve.equals(Ce)===!1&&(s.clearColor(Ie,Ne,ot,Pt),ve.copy(Ce))},reset:function(){te=!1,pe=null,ve.set(-1,0,0,0)}}}function n(){let te=!1,Ce=!1,pe=null,ve=null,Ie=null;return{setReversed:function(Ne){if(Ce!==Ne){const ot=e.get("EXT_clip_control");Ce?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const Pt=Ie;Ie=null,this.setClear(Pt)}Ce=Ne},getReversed:function(){return Ce},setTest:function(Ne){Ne?de(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(Ne){pe!==Ne&&!te&&(s.depthMask(Ne),pe=Ne)},setFunc:function(Ne){if(Ce&&(Ne=P_[Ne]),ve!==Ne){switch(Ne){case ga:s.depthFunc(s.NEVER);break;case _a:s.depthFunc(s.ALWAYS);break;case va:s.depthFunc(s.LESS);break;case Ms:s.depthFunc(s.LEQUAL);break;case xa:s.depthFunc(s.EQUAL);break;case ya:s.depthFunc(s.GEQUAL);break;case ba:s.depthFunc(s.GREATER);break;case Ma:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ve=Ne}},setLocked:function(Ne){te=Ne},setClear:function(Ne){Ie!==Ne&&(Ce&&(Ne=1-Ne),s.clearDepth(Ne),Ie=Ne)},reset:function(){te=!1,pe=null,ve=null,Ie=null,Ce=!1}}}function i(){let te=!1,Ce=null,pe=null,ve=null,Ie=null,Ne=null,ot=null,Pt=null,zt=null;return{setTest:function(lt){te||(lt?de(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(lt){Ce!==lt&&!te&&(s.stencilMask(lt),Ce=lt)},setFunc:function(lt,on,Tn){(pe!==lt||ve!==on||Ie!==Tn)&&(s.stencilFunc(lt,on,Tn),pe=lt,ve=on,Ie=Tn)},setOp:function(lt,on,Tn){(Ne!==lt||ot!==on||Pt!==Tn)&&(s.stencilOp(lt,on,Tn),Ne=lt,ot=on,Pt=Tn)},setLocked:function(lt){te=lt},setClear:function(lt){zt!==lt&&(s.clearStencil(lt),zt=lt)},reset:function(){te=!1,Ce=null,pe=null,ve=null,Ie=null,Ne=null,ot=null,Pt=null,zt=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},h={},p=new WeakMap,d=[],_=null,g=!1,m=null,f=null,x=null,S=null,y=null,C=null,I=null,L=new Ke(0,0,0),N=0,E=!1,w=null,B=null,R=null,z=null,b=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(J)[1]),H=Z>=1):J.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),H=Z>=2);let Q=null,fe={};const q=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),_e=new Mt().fromArray(q),j=new Mt().fromArray(K);function Y(te,Ce,pe,ve){const Ie=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(te,Ne),s.texParameteri(te,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(te,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ot=0;ot<pe;ot++)te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,ve,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Ce+ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return Ne}const ce={};ce[s.TEXTURE_2D]=Y(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=Y(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[s.TEXTURE_2D_ARRAY]=Y(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=Y(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(s.DEPTH_TEST),o.setFunc(Ms),re(!1),V(Nc),de(s.CULL_FACE),v(bi);function de(te){u[te]!==!0&&(s.enable(te),u[te]=!0)}function xe(te){u[te]!==!1&&(s.disable(te),u[te]=!1)}function we(te,Ce){return h[te]!==Ce?(s.bindFramebuffer(te,Ce),h[te]=Ce,te===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Ce),te===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Be(te,Ce){let pe=d,ve=!1;if(te){pe=p.get(Ce),pe===void 0&&(pe=[],p.set(Ce,pe));const Ie=te.textures;if(pe.length!==Ie.length||pe[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,ot=Ie.length;Ne<ot;Ne++)pe[Ne]=s.COLOR_ATTACHMENT0+Ne;pe.length=Ie.length,ve=!0}}else pe[0]!==s.BACK&&(pe[0]=s.BACK,ve=!0);ve&&s.drawBuffers(pe)}function Qe(te){return _!==te?(s.useProgram(te),_=te,!0):!1}const tt={[Oi]:s.FUNC_ADD,[Ih]:s.FUNC_SUBTRACT,[Lh]:s.FUNC_REVERSE_SUBTRACT};tt[Ph]=s.MIN,tt[Dh]=s.MAX;const pt={[Nh]:s.ZERO,[Uh]:s.ONE,[Oh]:s.SRC_COLOR,[pa]:s.SRC_ALPHA,[Hh]:s.SRC_ALPHA_SATURATE,[zh]:s.DST_COLOR,[kh]:s.DST_ALPHA,[Fh]:s.ONE_MINUS_SRC_COLOR,[ma]:s.ONE_MINUS_SRC_ALPHA,[Vh]:s.ONE_MINUS_DST_COLOR,[Bh]:s.ONE_MINUS_DST_ALPHA,[Gh]:s.CONSTANT_COLOR,[Wh]:s.ONE_MINUS_CONSTANT_COLOR,[jh]:s.CONSTANT_ALPHA,[Xh]:s.ONE_MINUS_CONSTANT_ALPHA};function v(te,Ce,pe,ve,Ie,Ne,ot,Pt,zt,lt){if(te===bi){g===!0&&(xe(s.BLEND),g=!1);return}if(g===!1&&(de(s.BLEND),g=!0),te!==Ch){if(te!==m||lt!==E){if((f!==Oi||y!==Oi)&&(s.blendEquation(s.FUNC_ADD),f=Oi,y=Oi),lt)switch(te){case _s:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Uc:s.blendFunc(s.ONE,s.ONE);break;case Oc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",te);break}else switch(te){case _s:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Uc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Oc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",te);break}x=null,S=null,C=null,I=null,L.set(0,0,0),N=0,m=te,E=lt}return}Ie=Ie||Ce,Ne=Ne||pe,ot=ot||ve,(Ce!==f||Ie!==y)&&(s.blendEquationSeparate(tt[Ce],tt[Ie]),f=Ce,y=Ie),(pe!==x||ve!==S||Ne!==C||ot!==I)&&(s.blendFuncSeparate(pt[pe],pt[ve],pt[Ne],pt[ot]),x=pe,S=ve,C=Ne,I=ot),(Pt.equals(L)===!1||zt!==N)&&(s.blendColor(Pt.r,Pt.g,Pt.b,zt),L.copy(Pt),N=zt),m=te,E=!1}function me(te,Ce){te.side===bn?xe(s.CULL_FACE):de(s.CULL_FACE);let pe=te.side===nn;Ce&&(pe=!pe),re(pe),te.blending===_s&&te.transparent===!1?v(bi):v(te.blending,te.blendEquation,te.blendSrc,te.blendDst,te.blendEquationAlpha,te.blendSrcAlpha,te.blendDstAlpha,te.blendColor,te.blendAlpha,te.premultipliedAlpha),o.setFunc(te.depthFunc),o.setTest(te.depthTest),o.setMask(te.depthWrite),r.setMask(te.colorWrite);const ve=te.stencilWrite;a.setTest(ve),ve&&(a.setMask(te.stencilWriteMask),a.setFunc(te.stencilFunc,te.stencilRef,te.stencilFuncMask),a.setOp(te.stencilFail,te.stencilZFail,te.stencilZPass)),$(te.polygonOffset,te.polygonOffsetFactor,te.polygonOffsetUnits),te.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function re(te){w!==te&&(te?s.frontFace(s.CW):s.frontFace(s.CCW),w=te)}function V(te){te!==Th?(de(s.CULL_FACE),te!==B&&(te===Nc?s.cullFace(s.BACK):te===Ah?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),B=te}function F(te){te!==R&&(H&&s.lineWidth(te),R=te)}function $(te,Ce,pe){te?(de(s.POLYGON_OFFSET_FILL),(z!==Ce||b!==pe)&&(s.polygonOffset(Ce,pe),z=Ce,b=pe)):xe(s.POLYGON_OFFSET_FILL)}function ae(te){te?de(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function P(te){te===void 0&&(te=s.TEXTURE0+W-1),Q!==te&&(s.activeTexture(te),Q=te)}function M(te,Ce,pe){pe===void 0&&(Q===null?pe=s.TEXTURE0+W-1:pe=Q);let ve=fe[pe];ve===void 0&&(ve={type:void 0,texture:void 0},fe[pe]=ve),(ve.type!==te||ve.texture!==Ce)&&(Q!==pe&&(s.activeTexture(pe),Q=pe),s.bindTexture(te,Ce||ce[te]),ve.type=te,ve.texture=Ce)}function G(){const te=fe[Q];te!==void 0&&te.type!==void 0&&(s.bindTexture(te.type,null),te.type=void 0,te.texture=void 0)}function se(){try{s.compressedTexImage2D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function ne(){try{s.compressedTexImage3D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function oe(){try{s.texSubImage2D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Te(){try{s.texSubImage3D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function ye(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Re(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function ct(){try{s.texStorage2D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function be(){try{s.texStorage3D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function De(){try{s.texImage3D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Ze(te){_e.equals(te)===!1&&(s.scissor(te.x,te.y,te.z,te.w),_e.copy(te))}function Fe(te){j.equals(te)===!1&&(s.viewport(te.x,te.y,te.z,te.w),j.copy(te))}function nt(te,Ce){let pe=l.get(Ce);pe===void 0&&(pe=new WeakMap,l.set(Ce,pe));let ve=pe.get(te);ve===void 0&&(ve=s.getUniformBlockIndex(Ce,te.name),pe.set(te,ve))}function it(te,Ce){const ve=l.get(Ce).get(te);c.get(Ce)!==ve&&(s.uniformBlockBinding(Ce,ve,te.__bindingPointIndex),c.set(Ce,ve))}function bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},Q=null,fe={},h={},p=new WeakMap,d=[],_=null,g=!1,m=null,f=null,x=null,S=null,y=null,C=null,I=null,L=new Ke(0,0,0),N=0,E=!1,w=null,B=null,R=null,z=null,b=null,_e.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:xe,bindFramebuffer:we,drawBuffers:Be,useProgram:Qe,setBlending:v,setMaterial:me,setFlipSided:re,setCullFace:V,setLineWidth:F,setPolygonOffset:$,setScissorTest:ae,activeTexture:P,bindTexture:M,unbindTexture:G,compressedTexImage2D:se,compressedTexImage3D:ne,texImage2D:Oe,texImage3D:De,updateUBOMapping:nt,uniformBlockBinding:it,texStorage2D:ct,texStorage3D:be,texSubImage2D:oe,texSubImage3D:Te,compressedTexSubImage2D:ye,compressedTexSubImage3D:Re,scissor:Ze,viewport:Fe,reset:bt}}function Pl(s,e,t,n){const i=N_(n);switch(t){case Ru:return s*e;case Iu:return s*e;case Lu:return s*e*2;case dc:return s*e/i.components*i.byteLength;case fc:return s*e/i.components*i.byteLength;case Pu:return s*e*2/i.components*i.byteLength;case pc:return s*e*2/i.components*i.byteLength;case Cu:return s*e*3/i.components*i.byteLength;case En:return s*e*4/i.components*i.byteLength;case mc:return s*e*4/i.components*i.byteLength;case eo:case to:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case no:case io:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ta:case Ra:return Math.max(s,16)*Math.max(e,8)/4;case wa:case Aa:return Math.max(s,8)*Math.max(e,8)/2;case Ca:case Ia:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case La:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Da:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Na:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Fa:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ka:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case za:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Va:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ga:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Wa:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ja:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case so:case Xa:case qa:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Du:case Ya:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ka:case Za:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function N_(s){switch(s){case oi:case wu:return{byteLength:1,components:1};case nr:case Tu:case cr:return{byteLength:2,components:1};case uc:case hc:return{byteLength:2,components:4};case Hi:case lc:case Un:return{byteLength:4,components:1};case Au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function U_(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new rt,u=new WeakMap;let h;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,M){return d?new OffscreenCanvas(P,M):rr("canvas")}function g(P,M,G){let se=1;const ne=ae(P);if((ne.width>G||ne.height>G)&&(se=G/Math.max(ne.width,ne.height)),se<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const oe=Math.floor(se*ne.width),Te=Math.floor(se*ne.height);h===void 0&&(h=_(oe,Te));const ye=M?_(oe,Te):h;return ye.width=oe,ye.height=Te,ye.getContext("2d").drawImage(P,0,0,oe,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+oe+"x"+Te+")."),ye}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function m(P){return P.generateMipmaps}function f(P){s.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(P,M,G,se,ne=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let oe=M;if(M===s.RED&&(G===s.FLOAT&&(oe=s.R32F),G===s.HALF_FLOAT&&(oe=s.R16F),G===s.UNSIGNED_BYTE&&(oe=s.R8)),M===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(oe=s.R8UI),G===s.UNSIGNED_SHORT&&(oe=s.R16UI),G===s.UNSIGNED_INT&&(oe=s.R32UI),G===s.BYTE&&(oe=s.R8I),G===s.SHORT&&(oe=s.R16I),G===s.INT&&(oe=s.R32I)),M===s.RG&&(G===s.FLOAT&&(oe=s.RG32F),G===s.HALF_FLOAT&&(oe=s.RG16F),G===s.UNSIGNED_BYTE&&(oe=s.RG8)),M===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(oe=s.RG8UI),G===s.UNSIGNED_SHORT&&(oe=s.RG16UI),G===s.UNSIGNED_INT&&(oe=s.RG32UI),G===s.BYTE&&(oe=s.RG8I),G===s.SHORT&&(oe=s.RG16I),G===s.INT&&(oe=s.RG32I)),M===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(oe=s.RGB8UI),G===s.UNSIGNED_SHORT&&(oe=s.RGB16UI),G===s.UNSIGNED_INT&&(oe=s.RGB32UI),G===s.BYTE&&(oe=s.RGB8I),G===s.SHORT&&(oe=s.RGB16I),G===s.INT&&(oe=s.RGB32I)),M===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(oe=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(oe=s.RGBA16UI),G===s.UNSIGNED_INT&&(oe=s.RGBA32UI),G===s.BYTE&&(oe=s.RGBA8I),G===s.SHORT&&(oe=s.RGBA16I),G===s.INT&&(oe=s.RGBA32I)),M===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&(oe=s.RGB9_E5),M===s.RGBA){const Te=ne?vo:dt.getTransfer(se);G===s.FLOAT&&(oe=s.RGBA32F),G===s.HALF_FLOAT&&(oe=s.RGBA16F),G===s.UNSIGNED_BYTE&&(oe=Te===Ct?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function y(P,M){let G;return P?M===null||M===Hi||M===ws?G=s.DEPTH24_STENCIL8:M===Un?G=s.DEPTH32F_STENCIL8:M===nr&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Hi||M===ws?G=s.DEPTH_COMPONENT24:M===Un?G=s.DEPTH_COMPONENT32F:M===nr&&(G=s.DEPTH_COMPONENT16),G}function C(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==sn&&P.minFilter!==Kt?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function I(P){const M=P.target;M.removeEventListener("dispose",I),N(M),M.isVideoTexture&&u.delete(M)}function L(P){const M=P.target;M.removeEventListener("dispose",L),w(M)}function N(P){const M=n.get(P);if(M.__webglInit===void 0)return;const G=P.source,se=p.get(G);if(se){const ne=se[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&E(P),Object.keys(se).length===0&&p.delete(G)}n.remove(P)}function E(P){const M=n.get(P);s.deleteTexture(M.__webglTexture);const G=P.source,se=p.get(G);delete se[M.__cacheKey],o.memory.textures--}function w(P){const M=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(M.__webglFramebuffer[se]))for(let ne=0;ne<M.__webglFramebuffer[se].length;ne++)s.deleteFramebuffer(M.__webglFramebuffer[se][ne]);else s.deleteFramebuffer(M.__webglFramebuffer[se]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[se])}else{if(Array.isArray(M.__webglFramebuffer))for(let se=0;se<M.__webglFramebuffer.length;se++)s.deleteFramebuffer(M.__webglFramebuffer[se]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let se=0;se<M.__webglColorRenderbuffer.length;se++)M.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[se]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=P.textures;for(let se=0,ne=G.length;se<ne;se++){const oe=n.get(G[se]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(G[se])}n.remove(P)}let B=0;function R(){B=0}function z(){const P=B;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),B+=1,P}function b(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function W(P,M){const G=n.get(P);if(P.isVideoTexture&&F(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const se=P.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(G,P,M);return}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+M)}function H(P,M){const G=n.get(P);if(P.version>0&&G.__version!==P.version){j(G,P,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+M)}function Z(P,M){const G=n.get(P);if(P.version>0&&G.__version!==P.version){j(G,P,M);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+M)}function J(P,M){const G=n.get(P);if(P.version>0&&G.__version!==P.version){Y(G,P,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+M)}const Q={[Mn]:s.REPEAT,[Sn]:s.CLAMP_TO_EDGE,[ao]:s.MIRRORED_REPEAT},fe={[sn]:s.NEAREST,[Eu]:s.NEAREST_MIPMAP_NEAREST,[$s]:s.NEAREST_MIPMAP_LINEAR,[Kt]:s.LINEAR,[Qr]:s.LINEAR_MIPMAP_NEAREST,[Nn]:s.LINEAR_MIPMAP_LINEAR},q={[hd]:s.NEVER,[_d]:s.ALWAYS,[dd]:s.LESS,[Uu]:s.LEQUAL,[fd]:s.EQUAL,[gd]:s.GEQUAL,[pd]:s.GREATER,[md]:s.NOTEQUAL};function K(P,M){if(M.type===Un&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Kt||M.magFilter===Qr||M.magFilter===$s||M.magFilter===Nn||M.minFilter===Kt||M.minFilter===Qr||M.minFilter===$s||M.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Q[M.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Q[M.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Q[M.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,fe[M.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,fe[M.minFilter]),M.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===sn||M.minFilter!==$s&&M.minFilter!==Nn||M.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function _e(P,M){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",I));const se=M.source;let ne=p.get(se);ne===void 0&&(ne={},p.set(se,ne));const oe=b(M);if(oe!==P.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ne[oe].usedTimes++;const Te=ne[P.__cacheKey];Te!==void 0&&(ne[P.__cacheKey].usedTimes--,Te.usedTimes===0&&E(M)),P.__cacheKey=oe,P.__webglTexture=ne[oe].texture}return G}function j(P,M,G){let se=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=s.TEXTURE_3D);const ne=_e(P,M),oe=M.source;t.bindTexture(se,P.__webglTexture,s.TEXTURE0+G);const Te=n.get(oe);if(oe.version!==Te.__version||ne===!0){t.activeTexture(s.TEXTURE0+G);const ye=dt.getPrimaries(dt.workingColorSpace),Re=M.colorSpace===vi?null:dt.getPrimaries(M.colorSpace),ct=M.colorSpace===vi||ye===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let be=g(M.image,!1,i.maxTextureSize);be=$(M,be);const Oe=r.convert(M.format,M.colorSpace),De=r.convert(M.type);let Ze=S(M.internalFormat,Oe,De,M.colorSpace,M.isVideoTexture);K(se,M);let Fe;const nt=M.mipmaps,it=M.isVideoTexture!==!0,bt=Te.__version===void 0||ne===!0,te=oe.dataReady,Ce=C(M,be);if(M.isDepthTexture)Ze=y(M.format===Ts,M.type),bt&&(it?t.texStorage2D(s.TEXTURE_2D,1,Ze,be.width,be.height):t.texImage2D(s.TEXTURE_2D,0,Ze,be.width,be.height,0,Oe,De,null));else if(M.isDataTexture)if(nt.length>0){it&&bt&&t.texStorage2D(s.TEXTURE_2D,Ce,Ze,nt[0].width,nt[0].height);for(let pe=0,ve=nt.length;pe<ve;pe++)Fe=nt[pe],it?te&&t.texSubImage2D(s.TEXTURE_2D,pe,0,0,Fe.width,Fe.height,Oe,De,Fe.data):t.texImage2D(s.TEXTURE_2D,pe,Ze,Fe.width,Fe.height,0,Oe,De,Fe.data);M.generateMipmaps=!1}else it?(bt&&t.texStorage2D(s.TEXTURE_2D,Ce,Ze,be.width,be.height),te&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,be.width,be.height,Oe,De,be.data)):t.texImage2D(s.TEXTURE_2D,0,Ze,be.width,be.height,0,Oe,De,be.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){it&&bt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Ze,nt[0].width,nt[0].height,be.depth);for(let pe=0,ve=nt.length;pe<ve;pe++)if(Fe=nt[pe],M.format!==En)if(Oe!==null)if(it){if(te)if(M.layerUpdates.size>0){const Ie=Pl(Fe.width,Fe.height,M.format,M.type);for(const Ne of M.layerUpdates){const ot=Fe.data.subarray(Ne*Ie/Fe.data.BYTES_PER_ELEMENT,(Ne+1)*Ie/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,Ne,Fe.width,Fe.height,1,Oe,ot)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,Fe.width,Fe.height,be.depth,Oe,Fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pe,Ze,Fe.width,Fe.height,be.depth,0,Fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?te&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,Fe.width,Fe.height,be.depth,Oe,De,Fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,pe,Ze,Fe.width,Fe.height,be.depth,0,Oe,De,Fe.data)}else{it&&bt&&t.texStorage2D(s.TEXTURE_2D,Ce,Ze,nt[0].width,nt[0].height);for(let pe=0,ve=nt.length;pe<ve;pe++)Fe=nt[pe],M.format!==En?Oe!==null?it?te&&t.compressedTexSubImage2D(s.TEXTURE_2D,pe,0,0,Fe.width,Fe.height,Oe,Fe.data):t.compressedTexImage2D(s.TEXTURE_2D,pe,Ze,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?te&&t.texSubImage2D(s.TEXTURE_2D,pe,0,0,Fe.width,Fe.height,Oe,De,Fe.data):t.texImage2D(s.TEXTURE_2D,pe,Ze,Fe.width,Fe.height,0,Oe,De,Fe.data)}else if(M.isDataArrayTexture)if(it){if(bt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,Ze,be.width,be.height,be.depth),te)if(M.layerUpdates.size>0){const pe=Pl(be.width,be.height,M.format,M.type);for(const ve of M.layerUpdates){const Ie=be.data.subarray(ve*pe/be.data.BYTES_PER_ELEMENT,(ve+1)*pe/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ve,be.width,be.height,1,Oe,De,Ie)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Oe,De,be.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ze,be.width,be.height,be.depth,0,Oe,De,be.data);else if(M.isData3DTexture)it?(bt&&t.texStorage3D(s.TEXTURE_3D,Ce,Ze,be.width,be.height,be.depth),te&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Oe,De,be.data)):t.texImage3D(s.TEXTURE_3D,0,Ze,be.width,be.height,be.depth,0,Oe,De,be.data);else if(M.isFramebufferTexture){if(bt)if(it)t.texStorage2D(s.TEXTURE_2D,Ce,Ze,be.width,be.height);else{let pe=be.width,ve=be.height;for(let Ie=0;Ie<Ce;Ie++)t.texImage2D(s.TEXTURE_2D,Ie,Ze,pe,ve,0,Oe,De,null),pe>>=1,ve>>=1}}else if(nt.length>0){if(it&&bt){const pe=ae(nt[0]);t.texStorage2D(s.TEXTURE_2D,Ce,Ze,pe.width,pe.height)}for(let pe=0,ve=nt.length;pe<ve;pe++)Fe=nt[pe],it?te&&t.texSubImage2D(s.TEXTURE_2D,pe,0,0,Oe,De,Fe):t.texImage2D(s.TEXTURE_2D,pe,Ze,Oe,De,Fe);M.generateMipmaps=!1}else if(it){if(bt){const pe=ae(be);t.texStorage2D(s.TEXTURE_2D,Ce,Ze,pe.width,pe.height)}te&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,De,be)}else t.texImage2D(s.TEXTURE_2D,0,Ze,Oe,De,be);m(M)&&f(se),Te.__version=oe.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Y(P,M,G){if(M.image.length!==6)return;const se=_e(P,M),ne=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+G);const oe=n.get(ne);if(ne.version!==oe.__version||se===!0){t.activeTexture(s.TEXTURE0+G);const Te=dt.getPrimaries(dt.workingColorSpace),ye=M.colorSpace===vi?null:dt.getPrimaries(M.colorSpace),Re=M.colorSpace===vi||Te===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const ct=M.isCompressedTexture||M.image[0].isCompressedTexture,be=M.image[0]&&M.image[0].isDataTexture,Oe=[];for(let ve=0;ve<6;ve++)!ct&&!be?Oe[ve]=g(M.image[ve],!0,i.maxCubemapSize):Oe[ve]=be?M.image[ve].image:M.image[ve],Oe[ve]=$(M,Oe[ve]);const De=Oe[0],Ze=r.convert(M.format,M.colorSpace),Fe=r.convert(M.type),nt=S(M.internalFormat,Ze,Fe,M.colorSpace),it=M.isVideoTexture!==!0,bt=oe.__version===void 0||se===!0,te=ne.dataReady;let Ce=C(M,De);K(s.TEXTURE_CUBE_MAP,M);let pe;if(ct){it&&bt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,nt,De.width,De.height);for(let ve=0;ve<6;ve++){pe=Oe[ve].mipmaps;for(let Ie=0;Ie<pe.length;Ie++){const Ne=pe[Ie];M.format!==En?Ze!==null?it?te&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,0,0,Ne.width,Ne.height,Ze,Ne.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,nt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,0,0,Ne.width,Ne.height,Ze,Fe,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,nt,Ne.width,Ne.height,0,Ze,Fe,Ne.data)}}}else{if(pe=M.mipmaps,it&&bt){pe.length>0&&Ce++;const ve=ae(Oe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,nt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(be){it?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Oe[ve].width,Oe[ve].height,Ze,Fe,Oe[ve].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,nt,Oe[ve].width,Oe[ve].height,0,Ze,Fe,Oe[ve].data);for(let Ie=0;Ie<pe.length;Ie++){const ot=pe[Ie].image[ve].image;it?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,0,0,ot.width,ot.height,Ze,Fe,ot.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,nt,ot.width,ot.height,0,Ze,Fe,ot.data)}}else{it?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ze,Fe,Oe[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,nt,Ze,Fe,Oe[ve]);for(let Ie=0;Ie<pe.length;Ie++){const Ne=pe[Ie];it?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,0,0,Ze,Fe,Ne.image[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,nt,Ze,Fe,Ne.image[ve])}}}m(M)&&f(s.TEXTURE_CUBE_MAP),oe.__version=ne.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ce(P,M,G,se,ne,oe){const Te=r.convert(G.format,G.colorSpace),ye=r.convert(G.type),Re=S(G.internalFormat,Te,ye,G.colorSpace),ct=n.get(M),be=n.get(G);if(be.__renderTarget=M,!ct.__hasExternalTextures){const Oe=Math.max(1,M.width>>oe),De=Math.max(1,M.height>>oe);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,oe,Re,Oe,De,M.depth,0,Te,ye,null):t.texImage2D(ne,oe,Re,Oe,De,0,Te,ye,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),V(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,ne,be.__webglTexture,0,re(M)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,se,ne,be.__webglTexture,oe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function de(P,M,G){if(s.bindRenderbuffer(s.RENDERBUFFER,P),M.depthBuffer){const se=M.depthTexture,ne=se&&se.isDepthTexture?se.type:null,oe=y(M.stencilBuffer,ne),Te=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=re(M);V(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,oe,M.width,M.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,oe,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,oe,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,P)}else{const se=M.textures;for(let ne=0;ne<se.length;ne++){const oe=se[ne],Te=r.convert(oe.format,oe.colorSpace),ye=r.convert(oe.type),Re=S(oe.internalFormat,Te,ye,oe.colorSpace),ct=re(M);G&&V(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,Re,M.width,M.height):V(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,Re,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Re,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xe(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(M.depthTexture);se.__renderTarget=M,(!se.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const ne=se.__webglTexture,oe=re(M);if(M.depthTexture.format===vs)V(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0);else if(M.depthTexture.format===Ts)V(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function we(P){const M=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const se=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),se){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,se.removeEventListener("dispose",ne)};se.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=se}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");xe(M.__webglFramebuffer,P)}else if(G){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]===void 0)M.__webglDepthbuffer[se]=s.createRenderbuffer(),de(M.__webglDepthbuffer[se],P,!1);else{const ne=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer[se];s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,oe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),de(M.__webglDepthbuffer,P,!1);else{const se=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,ne)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(P,M,G){const se=n.get(P);M!==void 0&&ce(se.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&we(P)}function Qe(P){const M=P.texture,G=n.get(P),se=n.get(M);P.addEventListener("dispose",L);const ne=P.textures,oe=P.isWebGLCubeRenderTarget===!0,Te=ne.length>1;if(Te||(se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture()),se.__version=M.version,o.memory.textures++),oe){G.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[ye]=[];for(let Re=0;Re<M.mipmaps.length;Re++)G.__webglFramebuffer[ye][Re]=s.createFramebuffer()}else G.__webglFramebuffer[ye]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let ye=0;ye<M.mipmaps.length;ye++)G.__webglFramebuffer[ye]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Te)for(let ye=0,Re=ne.length;ye<Re;ye++){const ct=n.get(ne[ye]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&V(P)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ye=0;ye<ne.length;ye++){const Re=ne[ye];G.__webglColorRenderbuffer[ye]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[ye]);const ct=r.convert(Re.format,Re.colorSpace),be=r.convert(Re.type),Oe=S(Re.internalFormat,ct,be,Re.colorSpace,P.isXRRenderTarget===!0),De=re(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,Oe,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,G.__webglColorRenderbuffer[ye])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),de(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),K(s.TEXTURE_CUBE_MAP,M);for(let ye=0;ye<6;ye++)if(M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)ce(G.__webglFramebuffer[ye][Re],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Re);else ce(G.__webglFramebuffer[ye],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(M)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ye=0,Re=ne.length;ye<Re;ye++){const ct=ne[ye],be=n.get(ct);t.bindTexture(s.TEXTURE_2D,be.__webglTexture),K(s.TEXTURE_2D,ct),ce(G.__webglFramebuffer,P,ct,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,0),m(ct)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let ye=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ye=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ye,se.__webglTexture),K(ye,M),M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)ce(G.__webglFramebuffer[Re],P,M,s.COLOR_ATTACHMENT0,ye,Re);else ce(G.__webglFramebuffer,P,M,s.COLOR_ATTACHMENT0,ye,0);m(M)&&f(ye),t.unbindTexture()}P.depthBuffer&&we(P)}function tt(P){const M=P.textures;for(let G=0,se=M.length;G<se;G++){const ne=M[G];if(m(ne)){const oe=x(P),Te=n.get(ne).__webglTexture;t.bindTexture(oe,Te),f(oe),t.unbindTexture()}}}const pt=[],v=[];function me(P){if(P.samples>0){if(V(P)===!1){const M=P.textures,G=P.width,se=P.height;let ne=s.COLOR_BUFFER_BIT;const oe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=n.get(P),ye=M.length>1;if(ye)for(let Re=0;Re<M.length;Re++)t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Re=0;Re<M.length;Re++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),ye){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[Re]);const ct=n.get(M[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ct,0)}s.blitFramebuffer(0,0,G,se,0,0,G,se,ne,s.NEAREST),c===!0&&(pt.length=0,v.length=0,pt.push(s.COLOR_ATTACHMENT0+Re),P.depthBuffer&&P.resolveDepthBuffer===!1&&(pt.push(oe),v.push(oe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,v)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ye)for(let Re=0;Re<M.length;Re++){t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,Te.__webglColorRenderbuffer[Re]);const ct=n.get(M[Re]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,ct,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const M=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function re(P){return Math.min(i.maxSamples,P.samples)}function V(P){const M=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function F(P){const M=o.render.frame;u.get(P)!==M&&(u.set(P,M),P.update())}function $(P,M){const G=P.colorSpace,se=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==rn&&G!==vi&&(dt.getTransfer(G)===Ct?(se!==En||ne!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function ae(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=R,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=J,this.rebindTextures=Be,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=V}function O_(s,e){function t(n,i=vi){let r;const o=dt.getTransfer(i);if(n===oi)return s.UNSIGNED_BYTE;if(n===uc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===hc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Au)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===wu)return s.BYTE;if(n===Tu)return s.SHORT;if(n===nr)return s.UNSIGNED_SHORT;if(n===lc)return s.INT;if(n===Hi)return s.UNSIGNED_INT;if(n===Un)return s.FLOAT;if(n===cr)return s.HALF_FLOAT;if(n===Ru)return s.ALPHA;if(n===Cu)return s.RGB;if(n===En)return s.RGBA;if(n===Iu)return s.LUMINANCE;if(n===Lu)return s.LUMINANCE_ALPHA;if(n===vs)return s.DEPTH_COMPONENT;if(n===Ts)return s.DEPTH_STENCIL;if(n===dc)return s.RED;if(n===fc)return s.RED_INTEGER;if(n===Pu)return s.RG;if(n===pc)return s.RG_INTEGER;if(n===mc)return s.RGBA_INTEGER;if(n===eo||n===to||n===no||n===io)if(o===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wa||n===Ta||n===Aa||n===Ra)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ca||n===Ia||n===La)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ca||n===Ia)return o===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===La)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pa||n===Da||n===Na||n===Ua||n===Oa||n===Fa||n===ka||n===Ba||n===za||n===Va||n===Ha||n===Ga||n===Wa||n===ja)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pa)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Da)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Na)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ua)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oa)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fa)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ka)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ba)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Va)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ga)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wa)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ja)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===Xa||n===qa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===so)return o===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Du||n===Ya||n===Ka||n===Za)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===so)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class F_ extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vn extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const k_={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(l,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],p=u.position.distanceTo(h.position),d=.02,_=.005;l.inputState.pinching&&p>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(k_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const B_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z_=`
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

}`;class V_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ft,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ai({vertexShader:B_,fragmentShader:z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new Ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H_ extends Xi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,p=null,d=null,_=null;const g=new V_,m=t.getContextAttributes();let f=null,x=null;const S=[],y=[],C=new rt;let I=null;const L=new Gt;L.viewport=new Mt;const N=new Gt;N.viewport=new Mt;const E=[L,N],w=new F_;let B=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Y=S[j];return Y===void 0&&(Y=new na,S[j]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(j){let Y=S[j];return Y===void 0&&(Y=new na,S[j]=Y),Y.getGripSpace()},this.getHand=function(j){let Y=S[j];return Y===void 0&&(Y=new na,S[j]=Y),Y.getHandSpace()};function z(j){const Y=y.indexOf(j.inputSource);if(Y===-1)return;const ce=S[Y];ce!==void 0&&(ce.update(j.inputSource,j.frame,l||o),ce.dispatchEvent({type:j.type,data:j.inputSource}))}function b(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",b),i.removeEventListener("inputsourceschange",W);for(let j=0;j<S.length;j++){const Y=y[j];Y!==null&&(y[j]=null,S[j].disconnect(Y))}B=null,R=null,g.reset(),e.setRenderTarget(f),d=null,p=null,h=null,i=null,x=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",b),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Gi(d.framebufferWidth,d.framebufferHeight,{format:En,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,ce=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=m.stencil?Ts:vs,ce=m.stencil?ws:Hi);const xe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};h=new XRWebGLBinding(i,t),p=h.createProjectionLayer(xe),i.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),x=new Gi(p.textureWidth,p.textureHeight,{format:En,type:oi,depthTexture:new qu(p.textureWidth,p.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),_e.setContext(i),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(j){for(let Y=0;Y<j.removed.length;Y++){const ce=j.removed[Y],de=y.indexOf(ce);de>=0&&(y[de]=null,S[de].disconnect(ce))}for(let Y=0;Y<j.added.length;Y++){const ce=j.added[Y];let de=y.indexOf(ce);if(de===-1){for(let we=0;we<S.length;we++)if(we>=y.length){y.push(ce),de=we;break}else if(y[we]===null){y[we]=ce,de=we;break}if(de===-1)break}const xe=S[de];xe&&xe.connect(ce)}}const H=new X,Z=new X;function J(j,Y,ce){H.setFromMatrixPosition(Y.matrixWorld),Z.setFromMatrixPosition(ce.matrixWorld);const de=H.distanceTo(Z),xe=Y.projectionMatrix.elements,we=ce.projectionMatrix.elements,Be=xe[14]/(xe[10]-1),Qe=xe[14]/(xe[10]+1),tt=(xe[9]+1)/xe[5],pt=(xe[9]-1)/xe[5],v=(xe[8]-1)/xe[0],me=(we[8]+1)/we[0],re=Be*v,V=Be*me,F=de/(-v+me),$=F*-v;if(Y.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX($),j.translateZ(F),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),xe[10]===-1)j.projectionMatrix.copy(Y.projectionMatrix),j.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const ae=Be+F,P=Qe+F,M=re-$,G=V+(de-$),se=tt*Qe/P*ae,ne=pt*Qe/P*ae;j.projectionMatrix.makePerspective(M,G,se,ne,ae,P),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Q(j,Y){Y===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Y.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let Y=j.near,ce=j.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(ce=g.depthFar)),w.near=N.near=L.near=Y,w.far=N.far=L.far=ce,(B!==w.near||R!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),B=w.near,R=w.far),L.layers.mask=j.layers.mask|2,N.layers.mask=j.layers.mask|4,w.layers.mask=L.layers.mask|N.layers.mask;const de=j.parent,xe=w.cameras;Q(w,de);for(let we=0;we<xe.length;we++)Q(xe[we],de);xe.length===2?J(w,L,N):w.projectionMatrix.copy(L.projectionMatrix),fe(j,w,de)};function fe(j,Y,ce){ce===null?j.matrix.copy(Y.matrixWorld):(j.matrix.copy(ce.matrixWorld),j.matrix.invert(),j.matrix.multiply(Y.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Y.projectionMatrix),j.projectionMatrixInverse.copy(Y.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=As*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(p===null&&d===null))return c},this.setFoveation=function(j){c=j,p!==null&&(p.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(w)};let q=null;function K(j,Y){if(u=Y.getViewerPose(l||o),_=Y,u!==null){const ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let de=!1;ce.length!==w.cameras.length&&(w.cameras.length=0,de=!0);for(let we=0;we<ce.length;we++){const Be=ce[we];let Qe=null;if(d!==null)Qe=d.getViewport(Be);else{const pt=h.getViewSubImage(p,Be);Qe=pt.viewport,we===0&&(e.setRenderTargetTextures(x,pt.colorTexture,p.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(x))}let tt=E[we];tt===void 0&&(tt=new Gt,tt.layers.enable(we),tt.viewport=new Mt,E[we]=tt),tt.matrix.fromArray(Be.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Be.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),we===0&&(w.matrix.copy(tt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),de===!0&&w.cameras.push(tt)}const xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")){const we=h.getDepthInformation(ce[0]);we&&we.isValid&&we.texture&&g.init(e,we,i.renderState)}}for(let ce=0;ce<S.length;ce++){const de=y[ce],xe=S[ce];de!==null&&xe!==void 0&&xe.update(de,Y,l||o)}q&&q(j,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),_=null}const _e=new Xu;_e.setAnimationLoop(K),this.setAnimationLoop=function(j){q=j},this.dispose=function(){}}}const Li=new un,G_=new Ye;function W_(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Hu(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,x,S,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,x,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===nn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===nn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),S=x.envMap,y=x.envMapRotation;S&&(m.envMap.value=S,Li.copy(y),Li.x*=-1,Li.y*=-1,Li.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),m.envMapRotation.value.setFromMatrix4(G_.makeRotationFromEuler(Li)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,x,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===nn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function j_(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,S){const y=S.program;n.uniformBlockBinding(x,y)}function l(x,S){let y=i[x.id];y===void 0&&(_(x),y=u(x),i[x.id]=y,x.addEventListener("dispose",m));const C=S.program;n.updateUBOMapping(x,C);const I=e.render.frame;r[x.id]!==I&&(p(x),r[x.id]=I)}function u(x){const S=h();x.__bindingPointIndex=S;const y=s.createBuffer(),C=x.__size,I=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,C,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,y),y}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const S=i[x.id],y=x.uniforms,C=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let I=0,L=y.length;I<L;I++){const N=Array.isArray(y[I])?y[I]:[y[I]];for(let E=0,w=N.length;E<w;E++){const B=N[E];if(d(B,I,E,C)===!0){const R=B.__offset,z=Array.isArray(B.value)?B.value:[B.value];let b=0;for(let W=0;W<z.length;W++){const H=z[W],Z=g(H);typeof H=="number"||typeof H=="boolean"?(B.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,R+b,B.__data)):H.isMatrix3?(B.__data[0]=H.elements[0],B.__data[1]=H.elements[1],B.__data[2]=H.elements[2],B.__data[3]=0,B.__data[4]=H.elements[3],B.__data[5]=H.elements[4],B.__data[6]=H.elements[5],B.__data[7]=0,B.__data[8]=H.elements[6],B.__data[9]=H.elements[7],B.__data[10]=H.elements[8],B.__data[11]=0):(H.toArray(B.__data,b),b+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,R,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,S,y,C){const I=x.value,L=S+"_"+y;if(C[L]===void 0)return typeof I=="number"||typeof I=="boolean"?C[L]=I:C[L]=I.clone(),!0;{const N=C[L];if(typeof I=="number"||typeof I=="boolean"){if(N!==I)return C[L]=I,!0}else if(N.equals(I)===!1)return N.copy(I),!0}return!1}function _(x){const S=x.uniforms;let y=0;const C=16;for(let L=0,N=S.length;L<N;L++){const E=Array.isArray(S[L])?S[L]:[S[L]];for(let w=0,B=E.length;w<B;w++){const R=E[w],z=Array.isArray(R.value)?R.value:[R.value];for(let b=0,W=z.length;b<W;b++){const H=z[b],Z=g(H),J=y%C,Q=J%Z.boundary,fe=J+Q;y+=Q,fe!==0&&C-fe<Z.storage&&(y+=C-fe),R.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=y,y+=Z.storage}}}const I=y%C;return I>0&&(y+=C-I),x.__size=y,x.__cache={},this}function g(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function m(x){const S=x.target;S.removeEventListener("dispose",m);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function f(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:c,update:l,dispose:f}}class X_{constructor(e={}){const{canvas:t=Nd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const x=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this.toneMapping=Mi,this.toneMappingExposure=1;const y=this;let C=!1,I=0,L=0,N=null,E=-1,w=null;const B=new Mt,R=new Mt;let z=null;const b=new Ke(0);let W=0,H=t.width,Z=t.height,J=1,Q=null,fe=null;const q=new Mt(0,0,H,Z),K=new Mt(0,0,H,Z);let _e=!1;const j=new xc;let Y=!1,ce=!1;const de=new Ye,xe=new Ye,we=new X,Be=new Mt,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function pt(){return N===null?J:1}let v=n;function me(O,ie){return t.getContext(O,ie)}try{const O={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cc}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),v===null){const ie="webgl2";if(v=me(ie,O),v===null)throw me(ie)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let re,V,F,$,ae,P,M,G,se,ne,oe,Te,ye,Re,ct,be,Oe,De,Ze,Fe,nt,it,bt,te;function Ce(){re=new $m(v),re.init(),it=new O_(v,re),V=new jm(v,re,e,it),F=new D_(v,re),V.reverseDepthBuffer&&p&&F.buffers.depth.setReversed(!0),$=new eg(v),ae=new v_,P=new U_(v,re,F,ae,V,it,$),M=new qm(y),G=new Zm(y),se=new af(v),bt=new Gm(v,se),ne=new Jm(v,se,$,bt),oe=new ng(v,ne,se,$),Ze=new tg(v,V,P),be=new Xm(ae),Te=new __(y,M,G,re,V,bt,be),ye=new W_(y,ae),Re=new y_,ct=new T_(re),De=new Hm(y,M,G,F,oe,d,c),Oe=new L_(y,oe,V),te=new j_(v,$,V,F),Fe=new Wm(v,re,$),nt=new Qm(v,re,$),$.programs=Te.programs,y.capabilities=V,y.extensions=re,y.properties=ae,y.renderLists=Re,y.shadowMap=Oe,y.state=F,y.info=$}Ce();const pe=new H_(y,v);this.xr=pe,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const O=re.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=re.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(O){O!==void 0&&(J=O,this.setSize(H,Z,!1))},this.getSize=function(O){return O.set(H,Z)},this.setSize=function(O,ie,le=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=O,Z=ie,t.width=Math.floor(O*J),t.height=Math.floor(ie*J),le===!0&&(t.style.width=O+"px",t.style.height=ie+"px"),this.setViewport(0,0,O,ie)},this.getDrawingBufferSize=function(O){return O.set(H*J,Z*J).floor()},this.setDrawingBufferSize=function(O,ie,le){H=O,Z=ie,J=le,t.width=Math.floor(O*le),t.height=Math.floor(ie*le),this.setViewport(0,0,O,ie)},this.getCurrentViewport=function(O){return O.copy(B)},this.getViewport=function(O){return O.copy(q)},this.setViewport=function(O,ie,le,ue){O.isVector4?q.set(O.x,O.y,O.z,O.w):q.set(O,ie,le,ue),F.viewport(B.copy(q).multiplyScalar(J).round())},this.getScissor=function(O){return O.copy(K)},this.setScissor=function(O,ie,le,ue){O.isVector4?K.set(O.x,O.y,O.z,O.w):K.set(O,ie,le,ue),F.scissor(R.copy(K).multiplyScalar(J).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(O){F.setScissorTest(_e=O)},this.setOpaqueSort=function(O){Q=O},this.setTransparentSort=function(O){fe=O},this.getClearColor=function(O){return O.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(O=!0,ie=!0,le=!0){let ue=0;if(O){let ee=!1;if(N!==null){const Se=N.texture.format;ee=Se===mc||Se===pc||Se===fc}if(ee){const Se=N.texture.type,Pe=Se===oi||Se===Hi||Se===nr||Se===ws||Se===uc||Se===hc,Ve=De.getClearColor(),He=De.getClearAlpha(),et=Ve.r,at=Ve.g,Ge=Ve.b;Pe?(_[0]=et,_[1]=at,_[2]=Ge,_[3]=He,v.clearBufferuiv(v.COLOR,0,_)):(g[0]=et,g[1]=at,g[2]=Ge,g[3]=He,v.clearBufferiv(v.COLOR,0,g))}else ue|=v.COLOR_BUFFER_BIT}ie&&(ue|=v.DEPTH_BUFFER_BIT),le&&(ue|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Re.dispose(),ct.dispose(),ae.dispose(),M.dispose(),G.dispose(),oe.dispose(),bt.dispose(),te.dispose(),Te.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",dr),pe.removeEventListener("sessionend",fr),Xn.stop()};function ve(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const O=$.autoReset,ie=Oe.enabled,le=Oe.autoUpdate,ue=Oe.needsUpdate,ee=Oe.type;Ce(),$.autoReset=O,Oe.enabled=ie,Oe.autoUpdate=le,Oe.needsUpdate=ue,Oe.type=ee}function Ne(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function ot(O){const ie=O.target;ie.removeEventListener("dispose",ot),Pt(ie)}function Pt(O){zt(O),ae.remove(O)}function zt(O){const ie=ae.get(O).programs;ie!==void 0&&(ie.forEach(function(le){Te.releaseProgram(le)}),O.isShaderMaterial&&Te.releaseShaderCache(O))}this.renderBufferDirect=function(O,ie,le,ue,ee,Se){ie===null&&(ie=Qe);const Pe=ee.isMesh&&ee.matrixWorld.determinant()<0,Ve=To(O,ie,le,ue,ee);F.setMaterial(ue,Pe);let He=le.index,et=1;if(ue.wireframe===!0){if(He=ne.getWireframeAttribute(le),He===void 0)return;et=2}const at=le.drawRange,Ge=le.attributes.position;let mt=at.start*et,wt=(at.start+at.count)*et;Se!==null&&(mt=Math.max(mt,Se.start*et),wt=Math.min(wt,(Se.start+Se.count)*et)),He!==null?(mt=Math.max(mt,0),wt=Math.min(wt,He.count)):Ge!=null&&(mt=Math.max(mt,0),wt=Math.min(wt,Ge.count));const Rt=wt-mt;if(Rt<0||Rt===1/0)return;bt.setup(ee,ue,Ve,le,He);let Ut,vt=Fe;if(He!==null&&(Ut=se.get(He),vt=nt,vt.setIndex(Ut)),ee.isMesh)ue.wireframe===!0?(F.setLineWidth(ue.wireframeLinewidth*pt()),vt.setMode(v.LINES)):vt.setMode(v.TRIANGLES);else if(ee.isLine){let We=ue.linewidth;We===void 0&&(We=1),F.setLineWidth(We*pt()),ee.isLineSegments?vt.setMode(v.LINES):ee.isLineLoop?vt.setMode(v.LINE_LOOP):vt.setMode(v.LINE_STRIP)}else ee.isPoints?vt.setMode(v.POINTS):ee.isSprite&&vt.setMode(v.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)vt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))vt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const We=ee._multiDrawStarts,An=ee._multiDrawCounts,_t=ee._multiDrawCount,hn=He?se.get(He).bytesPerElement:1,ci=ae.get(ue).currentProgram.getUniforms();for(let $t=0;$t<_t;$t++)ci.setValue(v,"_gl_DrawID",$t),vt.render(We[$t]/hn,An[$t])}else if(ee.isInstancedMesh)vt.renderInstances(mt,Rt,ee.count);else if(le.isInstancedBufferGeometry){const We=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,An=Math.min(le.instanceCount,We);vt.renderInstances(mt,Rt,An)}else vt.render(mt,Rt)};function lt(O,ie,le){O.transparent===!0&&O.side===bn&&O.forceSinglePass===!1?(O.side=nn,O.needsUpdate=!0,Yi(O,ie,le),O.side=Hn,O.needsUpdate=!0,Yi(O,ie,le),O.side=bn):Yi(O,ie,le)}this.compile=function(O,ie,le=null){le===null&&(le=O),f=ct.get(le),f.init(ie),S.push(f),le.traverseVisible(function(ee){ee.isLight&&ee.layers.test(ie.layers)&&(f.pushLight(ee),ee.castShadow&&f.pushShadow(ee))}),O!==le&&O.traverseVisible(function(ee){ee.isLight&&ee.layers.test(ie.layers)&&(f.pushLight(ee),ee.castShadow&&f.pushShadow(ee))}),f.setupLights();const ue=new Set;return O.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Se=ee.material;if(Se)if(Array.isArray(Se))for(let Pe=0;Pe<Se.length;Pe++){const Ve=Se[Pe];lt(Ve,le,ee),ue.add(Ve)}else lt(Se,le,ee),ue.add(Se)}),S.pop(),f=null,ue},this.compileAsync=function(O,ie,le=null){const ue=this.compile(O,ie,le);return new Promise(ee=>{function Se(){if(ue.forEach(function(Pe){ae.get(Pe).currentProgram.isReady()&&ue.delete(Pe)}),ue.size===0){ee(O);return}setTimeout(Se,10)}re.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let on=null;function Tn(O){on&&on(O)}function dr(){Xn.stop()}function fr(){Xn.start()}const Xn=new Xu;Xn.setAnimationLoop(Tn),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(O){on=O,pe.setAnimationLoop(O),O===null?Xn.stop():Xn.start()},pe.addEventListener("sessionstart",dr),pe.addEventListener("sessionend",fr),this.render=function(O,ie){if(ie!==void 0&&ie.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ie.parent===null&&ie.matrixWorldAutoUpdate===!0&&ie.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(ie),ie=pe.getCamera()),O.isScene===!0&&O.onBeforeRender(y,O,ie,N),f=ct.get(O,S.length),f.init(ie),S.push(f),xe.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),j.setFromProjectionMatrix(xe),ce=this.localClippingEnabled,Y=be.init(this.clippingPlanes,ce),m=Re.get(O,x.length),m.init(),x.push(m),pe.enabled===!0&&pe.isPresenting===!0){const Se=y.xr.getDepthSensingMesh();Se!==null&&Os(Se,ie,-1/0,y.sortObjects)}Os(O,ie,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Q,fe),tt=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,tt&&De.addToRenderList(m,O),this.info.render.frame++,Y===!0&&be.beginShadows();const le=f.state.shadowsArray;Oe.render(le,O,ie),Y===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=m.opaque,ee=m.transmissive;if(f.setupLights(),ie.isArrayCamera){const Se=ie.cameras;if(ee.length>0)for(let Pe=0,Ve=Se.length;Pe<Ve;Pe++){const He=Se[Pe];Fs(ue,ee,O,He)}tt&&De.render(O);for(let Pe=0,Ve=Se.length;Pe<Ve;Pe++){const He=Se[Pe];pr(m,O,He,He.viewport)}}else ee.length>0&&Fs(ue,ee,O,ie),tt&&De.render(O),pr(m,O,ie);N!==null&&(P.updateMultisampleRenderTarget(N),P.updateRenderTargetMipmap(N)),O.isScene===!0&&O.onAfterRender(y,O,ie),bt.resetDefaultState(),E=-1,w=null,S.pop(),S.length>0?(f=S[S.length-1],Y===!0&&be.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Os(O,ie,le,ue){if(O.visible===!1)return;if(O.layers.test(ie.layers)){if(O.isGroup)le=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(ie);else if(O.isLight)f.pushLight(O),O.castShadow&&f.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||j.intersectsSprite(O)){ue&&Be.setFromMatrixPosition(O.matrixWorld).applyMatrix4(xe);const Pe=oe.update(O),Ve=O.material;Ve.visible&&m.push(O,Pe,Ve,le,Be.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||j.intersectsObject(O))){const Pe=oe.update(O),Ve=O.material;if(ue&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),Be.copy(O.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Be.copy(Pe.boundingSphere.center)),Be.applyMatrix4(O.matrixWorld).applyMatrix4(xe)),Array.isArray(Ve)){const He=Pe.groups;for(let et=0,at=He.length;et<at;et++){const Ge=He[et],mt=Ve[Ge.materialIndex];mt&&mt.visible&&m.push(O,Pe,mt,le,Be.z,Ge)}}else Ve.visible&&m.push(O,Pe,Ve,le,Be.z,null)}}const Se=O.children;for(let Pe=0,Ve=Se.length;Pe<Ve;Pe++)Os(Se[Pe],ie,le,ue)}function pr(O,ie,le,ue){const ee=O.opaque,Se=O.transmissive,Pe=O.transparent;f.setupLightsView(le),Y===!0&&be.setGlobalState(y.clippingPlanes,le),ue&&F.viewport(B.copy(ue)),ee.length>0&&qi(ee,ie,le),Se.length>0&&qi(Se,ie,le),Pe.length>0&&qi(Pe,ie,le),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Fs(O,ie,le,ue){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[ue.id]===void 0&&(f.state.transmissionRenderTarget[ue.id]=new Gi(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?cr:oi,minFilter:Nn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const Se=f.state.transmissionRenderTarget[ue.id],Pe=ue.viewport||B;Se.setSize(Pe.z,Pe.w);const Ve=y.getRenderTarget();y.setRenderTarget(Se),y.getClearColor(b),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),tt&&De.render(le);const He=y.toneMapping;y.toneMapping=Mi;const et=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),f.setupLightsView(ue),Y===!0&&be.setGlobalState(y.clippingPlanes,ue),qi(O,le,ue),P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se),re.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Ge=0,mt=ie.length;Ge<mt;Ge++){const wt=ie[Ge],Rt=wt.object,Ut=wt.geometry,vt=wt.material,We=wt.group;if(vt.side===bn&&Rt.layers.test(ue.layers)){const An=vt.side;vt.side=nn,vt.needsUpdate=!0,ks(Rt,le,ue,Ut,vt,We),vt.side=An,vt.needsUpdate=!0,at=!0}}at===!0&&(P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se))}y.setRenderTarget(Ve),y.setClearColor(b,W),et!==void 0&&(ue.viewport=et),y.toneMapping=He}function qi(O,ie,le){const ue=ie.isScene===!0?ie.overrideMaterial:null;for(let ee=0,Se=O.length;ee<Se;ee++){const Pe=O[ee],Ve=Pe.object,He=Pe.geometry,et=ue===null?Pe.material:ue,at=Pe.group;Ve.layers.test(le.layers)&&ks(Ve,ie,le,He,et,at)}}function ks(O,ie,le,ue,ee,Se){O.onBeforeRender(y,ie,le,ue,ee,Se),O.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),ee.onBeforeRender(y,ie,le,ue,O,Se),ee.transparent===!0&&ee.side===bn&&ee.forceSinglePass===!1?(ee.side=nn,ee.needsUpdate=!0,y.renderBufferDirect(le,ie,ue,ee,O,Se),ee.side=Hn,ee.needsUpdate=!0,y.renderBufferDirect(le,ie,ue,ee,O,Se),ee.side=bn):y.renderBufferDirect(le,ie,ue,ee,O,Se),O.onAfterRender(y,ie,le,ue,ee,Se)}function Yi(O,ie,le){ie.isScene!==!0&&(ie=Qe);const ue=ae.get(O),ee=f.state.lights,Se=f.state.shadowsArray,Pe=ee.state.version,Ve=Te.getParameters(O,ee.state,Se,ie,le),He=Te.getProgramCacheKey(Ve);let et=ue.programs;ue.environment=O.isMeshStandardMaterial?ie.environment:null,ue.fog=ie.fog,ue.envMap=(O.isMeshStandardMaterial?G:M).get(O.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&O.envMap===null?ie.environmentRotation:O.envMapRotation,et===void 0&&(O.addEventListener("dispose",ot),et=new Map,ue.programs=et);let at=et.get(He);if(at!==void 0){if(ue.currentProgram===at&&ue.lightsStateVersion===Pe)return gr(O,Ve),at}else Ve.uniforms=Te.getUniforms(O),O.onBeforeCompile(Ve,y),at=Te.acquireProgram(Ve,He),et.set(He,at),ue.uniforms=Ve.uniforms;const Ge=ue.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(Ge.clippingPlanes=be.uniform),gr(O,Ve),ue.needsLights=Ro(O),ue.lightsStateVersion=Pe,ue.needsLights&&(Ge.ambientLightColor.value=ee.state.ambient,Ge.lightProbe.value=ee.state.probe,Ge.directionalLights.value=ee.state.directional,Ge.directionalLightShadows.value=ee.state.directionalShadow,Ge.spotLights.value=ee.state.spot,Ge.spotLightShadows.value=ee.state.spotShadow,Ge.rectAreaLights.value=ee.state.rectArea,Ge.ltc_1.value=ee.state.rectAreaLTC1,Ge.ltc_2.value=ee.state.rectAreaLTC2,Ge.pointLights.value=ee.state.point,Ge.pointLightShadows.value=ee.state.pointShadow,Ge.hemisphereLights.value=ee.state.hemi,Ge.directionalShadowMap.value=ee.state.directionalShadowMap,Ge.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ge.spotShadowMap.value=ee.state.spotShadowMap,Ge.spotLightMatrix.value=ee.state.spotLightMatrix,Ge.spotLightMap.value=ee.state.spotLightMap,Ge.pointShadowMap.value=ee.state.pointShadowMap,Ge.pointShadowMatrix.value=ee.state.pointShadowMatrix),ue.currentProgram=at,ue.uniformsList=null,at}function mr(O){if(O.uniformsList===null){const ie=O.currentProgram.getUniforms();O.uniformsList=ro.seqWithValue(ie.seq,O.uniforms)}return O.uniformsList}function gr(O,ie){const le=ae.get(O);le.outputColorSpace=ie.outputColorSpace,le.batching=ie.batching,le.batchingColor=ie.batchingColor,le.instancing=ie.instancing,le.instancingColor=ie.instancingColor,le.instancingMorph=ie.instancingMorph,le.skinning=ie.skinning,le.morphTargets=ie.morphTargets,le.morphNormals=ie.morphNormals,le.morphColors=ie.morphColors,le.morphTargetsCount=ie.morphTargetsCount,le.numClippingPlanes=ie.numClippingPlanes,le.numIntersection=ie.numClipIntersection,le.vertexAlphas=ie.vertexAlphas,le.vertexTangents=ie.vertexTangents,le.toneMapping=ie.toneMapping}function To(O,ie,le,ue,ee){ie.isScene!==!0&&(ie=Qe),P.resetTextureUnits();const Se=ie.fog,Pe=ue.isMeshStandardMaterial?ie.environment:null,Ve=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:rn,He=(ue.isMeshStandardMaterial?G:M).get(ue.envMap||Pe),et=ue.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,at=!!le.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Ge=!!le.morphAttributes.position,mt=!!le.morphAttributes.normal,wt=!!le.morphAttributes.color;let Rt=Mi;ue.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Rt=y.toneMapping);const Ut=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,vt=Ut!==void 0?Ut.length:0,We=ae.get(ue),An=f.state.lights;if(Y===!0&&(ce===!0||O!==w)){const Jt=O===w&&ue.id===E;be.setState(ue,O,Jt)}let _t=!1;ue.version===We.__version?(We.needsLights&&We.lightsStateVersion!==An.state.version||We.outputColorSpace!==Ve||ee.isBatchedMesh&&We.batching===!1||!ee.isBatchedMesh&&We.batching===!0||ee.isBatchedMesh&&We.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&We.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&We.instancing===!1||!ee.isInstancedMesh&&We.instancing===!0||ee.isSkinnedMesh&&We.skinning===!1||!ee.isSkinnedMesh&&We.skinning===!0||ee.isInstancedMesh&&We.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&We.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&We.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&We.instancingMorph===!1&&ee.morphTexture!==null||We.envMap!==He||ue.fog===!0&&We.fog!==Se||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==be.numPlanes||We.numIntersection!==be.numIntersection)||We.vertexAlphas!==et||We.vertexTangents!==at||We.morphTargets!==Ge||We.morphNormals!==mt||We.morphColors!==wt||We.toneMapping!==Rt||We.morphTargetsCount!==vt)&&(_t=!0):(_t=!0,We.__version=ue.version);let hn=We.currentProgram;_t===!0&&(hn=Yi(ue,ie,ee));let ci=!1,$t=!1,li=!1;const st=hn.getUniforms(),an=We.uniforms;if(F.useProgram(hn.program)&&(ci=!0,$t=!0,li=!0),ue.id!==E&&(E=ue.id,$t=!0),ci||w!==O){F.buffers.depth.getReversed()?(de.copy(O.projectionMatrix),Od(de),Fd(de),st.setValue(v,"projectionMatrix",de)):st.setValue(v,"projectionMatrix",O.projectionMatrix),st.setValue(v,"viewMatrix",O.matrixWorldInverse);const Rn=st.map.cameraPosition;Rn!==void 0&&Rn.setValue(v,we.setFromMatrixPosition(O.matrixWorld)),V.logarithmicDepthBuffer&&st.setValue(v,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&st.setValue(v,"isOrthographic",O.isOrthographicCamera===!0),w!==O&&(w=O,$t=!0,li=!0)}if(ee.isSkinnedMesh){st.setOptional(v,ee,"bindMatrix"),st.setOptional(v,ee,"bindMatrixInverse");const Jt=ee.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),st.setValue(v,"boneTexture",Jt.boneTexture,P))}ee.isBatchedMesh&&(st.setOptional(v,ee,"batchingTexture"),st.setValue(v,"batchingTexture",ee._matricesTexture,P),st.setOptional(v,ee,"batchingIdTexture"),st.setValue(v,"batchingIdTexture",ee._indirectTexture,P),st.setOptional(v,ee,"batchingColorTexture"),ee._colorsTexture!==null&&st.setValue(v,"batchingColorTexture",ee._colorsTexture,P));const Ei=le.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&Ze.update(ee,le,hn),($t||We.receiveShadow!==ee.receiveShadow)&&(We.receiveShadow=ee.receiveShadow,st.setValue(v,"receiveShadow",ee.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(an.envMap.value=He,an.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&ie.environment!==null&&(an.envMapIntensity.value=ie.environmentIntensity),$t&&(st.setValue(v,"toneMappingExposure",y.toneMappingExposure),We.needsLights&&Ao(an,li),Se&&ue.fog===!0&&ye.refreshFogUniforms(an,Se),ye.refreshMaterialUniforms(an,ue,J,Z,f.state.transmissionRenderTarget[O.id]),ro.upload(v,mr(We),an,P)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(ro.upload(v,mr(We),an,P),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&st.setValue(v,"center",ee.center),st.setValue(v,"modelViewMatrix",ee.modelViewMatrix),st.setValue(v,"normalMatrix",ee.normalMatrix),st.setValue(v,"modelMatrix",ee.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const Jt=ue.uniformsGroups;for(let Rn=0,_n=Jt.length;Rn<_n;Rn++){const wi=Jt[Rn];te.update(wi,hn),te.bind(wi,hn)}}return hn}function Ao(O,ie){O.ambientLightColor.needsUpdate=ie,O.lightProbe.needsUpdate=ie,O.directionalLights.needsUpdate=ie,O.directionalLightShadows.needsUpdate=ie,O.pointLights.needsUpdate=ie,O.pointLightShadows.needsUpdate=ie,O.spotLights.needsUpdate=ie,O.spotLightShadows.needsUpdate=ie,O.rectAreaLights.needsUpdate=ie,O.hemisphereLights.needsUpdate=ie}function Ro(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(O,ie,le){ae.get(O.texture).__webglTexture=ie,ae.get(O.depthTexture).__webglTexture=le;const ue=ae.get(O);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=le===void 0,ue.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(O,ie){const le=ae.get(O);le.__webglFramebuffer=ie,le.__useDefaultFramebuffer=ie===void 0},this.setRenderTarget=function(O,ie=0,le=0){N=O,I=ie,L=le;let ue=!0,ee=null,Se=!1,Pe=!1;if(O){const He=ae.get(O);if(He.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(v.FRAMEBUFFER,null),ue=!1;else if(He.__webglFramebuffer===void 0)P.setupRenderTarget(O);else if(He.__hasExternalTextures)P.rebindTextures(O,ae.get(O.texture).__webglTexture,ae.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){const Ge=O.depthTexture;if(He.__boundDepthTexture!==Ge){if(Ge!==null&&ae.has(Ge)&&(O.width!==Ge.image.width||O.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(O)}}const et=O.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Pe=!0);const at=ae.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(at[ie])?ee=at[ie][le]:ee=at[ie],Se=!0):O.samples>0&&P.useMultisampledRTT(O)===!1?ee=ae.get(O).__webglMultisampledFramebuffer:Array.isArray(at)?ee=at[le]:ee=at,B.copy(O.viewport),R.copy(O.scissor),z=O.scissorTest}else B.copy(q).multiplyScalar(J).floor(),R.copy(K).multiplyScalar(J).floor(),z=_e;if(F.bindFramebuffer(v.FRAMEBUFFER,ee)&&ue&&F.drawBuffers(O,ee),F.viewport(B),F.scissor(R),F.setScissorTest(z),Se){const He=ae.get(O.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+ie,He.__webglTexture,le)}else if(Pe){const He=ae.get(O.texture),et=ie||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,He.__webglTexture,le||0,et)}E=-1},this.readRenderTargetPixels=function(O,ie,le,ue,ee,Se,Pe){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=ae.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ve=Ve[Pe]),Ve){F.bindFramebuffer(v.FRAMEBUFFER,Ve);try{const He=O.texture,et=He.format,at=He.type;if(!V.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ie>=0&&ie<=O.width-ue&&le>=0&&le<=O.height-ee&&v.readPixels(ie,le,ue,ee,it.convert(et),it.convert(at),Se)}finally{const He=N!==null?ae.get(N).__webglFramebuffer:null;F.bindFramebuffer(v.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(O,ie,le,ue,ee,Se,Pe){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=ae.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ve=Ve[Pe]),Ve){const He=O.texture,et=He.format,at=He.type;if(!V.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ie>=0&&ie<=O.width-ue&&le>=0&&le<=O.height-ee){F.bindFramebuffer(v.FRAMEBUFFER,Ve);const Ge=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,Ge),v.bufferData(v.PIXEL_PACK_BUFFER,Se.byteLength,v.STREAM_READ),v.readPixels(ie,le,ue,ee,it.convert(et),it.convert(at),0);const mt=N!==null?ae.get(N).__webglFramebuffer:null;F.bindFramebuffer(v.FRAMEBUFFER,mt);const wt=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await Ud(v,wt,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,Ge),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,Se),v.deleteBuffer(Ge),v.deleteSync(wt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(O,ie=null,le=0){O.isTexture!==!0&&(Js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ie=arguments[0]||null,O=arguments[1]);const ue=Math.pow(2,-le),ee=Math.floor(O.image.width*ue),Se=Math.floor(O.image.height*ue),Pe=ie!==null?ie.x:0,Ve=ie!==null?ie.y:0;P.setTexture2D(O,0),v.copyTexSubImage2D(v.TEXTURE_2D,le,0,0,Pe,Ve,ee,Se),F.unbindTexture()},this.copyTextureToTexture=function(O,ie,le=null,ue=null,ee=0){O.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,O=arguments[1],ie=arguments[2],ee=arguments[3]||0,le=null);let Se,Pe,Ve,He,et,at,Ge,mt,wt;const Rt=O.isCompressedTexture?O.mipmaps[ee]:O.image;le!==null?(Se=le.max.x-le.min.x,Pe=le.max.y-le.min.y,Ve=le.isBox3?le.max.z-le.min.z:1,He=le.min.x,et=le.min.y,at=le.isBox3?le.min.z:0):(Se=Rt.width,Pe=Rt.height,Ve=Rt.depth||1,He=0,et=0,at=0),ue!==null?(Ge=ue.x,mt=ue.y,wt=ue.z):(Ge=0,mt=0,wt=0);const Ut=it.convert(ie.format),vt=it.convert(ie.type);let We;ie.isData3DTexture?(P.setTexture3D(ie,0),We=v.TEXTURE_3D):ie.isDataArrayTexture||ie.isCompressedArrayTexture?(P.setTexture2DArray(ie,0),We=v.TEXTURE_2D_ARRAY):(P.setTexture2D(ie,0),We=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,ie.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,ie.unpackAlignment);const An=v.getParameter(v.UNPACK_ROW_LENGTH),_t=v.getParameter(v.UNPACK_IMAGE_HEIGHT),hn=v.getParameter(v.UNPACK_SKIP_PIXELS),ci=v.getParameter(v.UNPACK_SKIP_ROWS),$t=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,Rt.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Rt.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,He),v.pixelStorei(v.UNPACK_SKIP_ROWS,et),v.pixelStorei(v.UNPACK_SKIP_IMAGES,at);const li=O.isDataArrayTexture||O.isData3DTexture,st=ie.isDataArrayTexture||ie.isData3DTexture;if(O.isRenderTargetTexture||O.isDepthTexture){const an=ae.get(O),Ei=ae.get(ie),Jt=ae.get(an.__renderTarget),Rn=ae.get(Ei.__renderTarget);F.bindFramebuffer(v.READ_FRAMEBUFFER,Jt.__webglFramebuffer),F.bindFramebuffer(v.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let _n=0;_n<Ve;_n++)li&&v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,ae.get(O).__webglTexture,ee,at+_n),O.isDepthTexture?(st&&v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,ae.get(ie).__webglTexture,ee,wt+_n),v.blitFramebuffer(He,et,Se,Pe,Ge,mt,Se,Pe,v.DEPTH_BUFFER_BIT,v.NEAREST)):st?v.copyTexSubImage3D(We,ee,Ge,mt,wt+_n,He,et,Se,Pe):v.copyTexSubImage2D(We,ee,Ge,mt,wt+_n,He,et,Se,Pe);F.bindFramebuffer(v.READ_FRAMEBUFFER,null),F.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else st?O.isDataTexture||O.isData3DTexture?v.texSubImage3D(We,ee,Ge,mt,wt,Se,Pe,Ve,Ut,vt,Rt.data):ie.isCompressedArrayTexture?v.compressedTexSubImage3D(We,ee,Ge,mt,wt,Se,Pe,Ve,Ut,Rt.data):v.texSubImage3D(We,ee,Ge,mt,wt,Se,Pe,Ve,Ut,vt,Rt):O.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,ee,Ge,mt,Se,Pe,Ut,vt,Rt.data):O.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,ee,Ge,mt,Rt.width,Rt.height,Ut,Rt.data):v.texSubImage2D(v.TEXTURE_2D,ee,Ge,mt,Se,Pe,Ut,vt,Rt);v.pixelStorei(v.UNPACK_ROW_LENGTH,An),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,_t),v.pixelStorei(v.UNPACK_SKIP_PIXELS,hn),v.pixelStorei(v.UNPACK_SKIP_ROWS,ci),v.pixelStorei(v.UNPACK_SKIP_IMAGES,$t),ee===0&&ie.generateMipmaps&&v.generateMipmap(We),F.unbindTexture()},this.copyTextureToTexture3D=function(O,ie,le=null,ue=null,ee=0){return O.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,ue=arguments[1]||null,O=arguments[2],ie=arguments[3],ee=arguments[4]||0),Js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(O,ie,le,ue,ee)},this.initRenderTarget=function(O){ae.get(O).__webglFramebuffer===void 0&&P.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?P.setTextureCube(O,0):O.isData3DTexture?P.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?P.setTexture2DArray(O,0):P.setTexture2D(O,0),F.unbindTexture()},this.resetState=function(){I=0,L=0,N=null,F.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}class Ju extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class q_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ja,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new X;class bc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Dl=new X,Nl=new Mt,Ul=new Mt,Y_=new X,Ol=new Ye,Br=new X,ia=new Gn,Fl=new Ye,sa=new lr;class Qu extends gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=kc,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Br),this.boundingBox.expandByPoint(Br)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Br),this.boundingSphere.expandByPoint(Br)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ia.copy(this.boundingSphere),ia.applyMatrix4(i),e.ray.intersectsSphere(ia)!==!1&&(Fl.copy(i).invert(),sa.copy(e.ray).applyMatrix4(Fl),!(this.boundingBox!==null&&sa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,sa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===kc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===nd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Nl.fromBufferAttribute(i.attributes.skinIndex,e),Ul.fromBufferAttribute(i.attributes.skinWeight,e),Dl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Ul.getComponent(r);if(o!==0){const a=Nl.getComponent(r);Ol.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Y_.copy(Dl).applyMatrix4(Ol),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Mc extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Sc extends Ft{constructor(e=null,t=1,n=1,i,r,o,a,c,l=sn,u=sn,h,p){super(null,o,a,c,l,u,i,r,h,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kl=new Ye,K_=new Ye;class bo{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:K_;kl.multiplyMatrices(a,t[r]),kl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new bo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Sc(t,e,e,En,Un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Mc),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class ec extends Ht{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const us=new Ye,Bl=new Ye,zr=[],zl=new gn,Z_=new Ye,Gs=new gt,Ws=new Gn;class $_ extends gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ec(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Z_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),zl.copy(e.boundingBox).applyMatrix4(us),this.boundingBox.union(zl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),Ws.copy(e.boundingSphere).applyMatrix4(us),this.boundingSphere.union(Ws)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ws.copy(this.boundingSphere),Ws.applyMatrix4(n),e.ray.intersectsSphere(Ws)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,us),Bl.multiplyMatrices(n,us),Gs.matrixWorld=Bl,Gs.raycast(e,zr);for(let o=0,a=zr.length;o<a;o++){const c=zr[o];c.instanceId=r,c.object=this,t.push(c)}zr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ec(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sc(new Float32Array(i*this.count),i,this.count,dc,Un));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Bi extends ln{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uo=new X,ho=new X,Vl=new Ye,js=new lr,Vr=new Gn,ra=new X,Hl=new X;class Mo extends Lt{constructor(e=new jt,t=new Bi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)uo.fromBufferAttribute(t,i-1),ho.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=uo.distanceTo(ho);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(i),Vr.radius+=r,e.ray.intersectsSphere(Vr)===!1)return;Vl.copy(i).invert(),js.copy(e.ray).applyMatrix4(Vl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=l){const f=u.getX(g),x=u.getX(g+1),S=Hr(this,e,js,c,f,x);S&&t.push(S)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(d),f=Hr(this,e,js,c,g,m);f&&t.push(f)}}else{const d=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=l){const f=Hr(this,e,js,c,g,g+1);f&&t.push(f)}if(this.isLineLoop){const g=Hr(this,e,js,c,_-1,d);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Hr(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(uo.fromBufferAttribute(o,i),ho.fromBufferAttribute(o,r),t.distanceSqToSegment(uo,ho,ra,Hl)>n)return;ra.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ra);if(!(c<e.near||c>e.far))return{distance:c,point:Hl.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Gl=new X,Wl=new X;class fo extends Mo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Gl.fromBufferAttribute(t,i),Wl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Gl.distanceTo(Wl);e.setAttribute("lineDistance",new Et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class J_ extends Mo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ms extends ln{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jl=new Ye,tc=new lr,Gr=new Gn,Wr=new X;class oo extends Lt{constructor(e=new jt,t=new ms){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(i),Gr.radius+=r,e.ray.intersectsSphere(Gr)===!1)return;jl.copy(i).invert(),tc.copy(e.ray).applyMatrix4(jl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const p=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let _=p,g=d;_<g;_++){const m=l.getX(_);Wr.fromBufferAttribute(h,m),Xl(Wr,m,c,i,e,t,this)}}else{const p=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=p,g=d;_<g;_++)Wr.fromBufferAttribute(h,_),Xl(Wr,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xl(s,e,t,n,i,r,o){const a=tc.distanceSqToPoint(s);if(a<t){const c=new X;tc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class eh extends Ft{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ec extends jt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],p=[],d=[];let _=0;const g=[],m=n/2;let f=0;x(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Et(h,3)),this.setAttribute("normal",new Et(p,3)),this.setAttribute("uv",new Et(d,2));function x(){const y=new X,C=new X;let I=0;const L=(t-e)/n;for(let N=0;N<=r;N++){const E=[],w=N/r,B=w*(t-e)+e;for(let R=0;R<=i;R++){const z=R/i,b=z*c+a,W=Math.sin(b),H=Math.cos(b);C.x=B*W,C.y=-w*n+m,C.z=B*H,h.push(C.x,C.y,C.z),y.set(W,L,H).normalize(),p.push(y.x,y.y,y.z),d.push(z,1-w),E.push(_++)}g.push(E)}for(let N=0;N<i;N++)for(let E=0;E<r;E++){const w=g[E][N],B=g[E+1][N],R=g[E+1][N+1],z=g[E][N+1];(e>0||E!==0)&&(u.push(w,B,z),I+=3),(t>0||E!==r-1)&&(u.push(B,R,z),I+=3)}l.addGroup(f,I,0),f+=I}function S(y){const C=_,I=new rt,L=new X;let N=0;const E=y===!0?e:t,w=y===!0?1:-1;for(let R=1;R<=i;R++)h.push(0,m*w,0),p.push(0,w,0),d.push(.5,.5),_++;const B=_;for(let R=0;R<=i;R++){const b=R/i*c+a,W=Math.cos(b),H=Math.sin(b);L.x=E*H,L.y=m*w,L.z=E*W,h.push(L.x,L.y,L.z),p.push(0,w,0),I.x=W*.5+.5,I.y=H*.5*w+.5,d.push(I.x,I.y),_++}for(let R=0;R<i;R++){const z=C+R,b=B+R;y===!0?u.push(b,b+1,z):u.push(b+1,b,z),N+=3}l.addGroup(f,N,y===!0?1:2),f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wc extends jt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new X,p=new X,d=[],_=[],g=[],m=[];for(let f=0;f<=n;f++){const x=[],S=f/n;let y=0;f===0&&o===0?y=.5/t:f===n&&c===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const I=C/t;h.x=-e*Math.cos(i+I*r)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(i+I*r)*Math.sin(o+S*a),_.push(h.x,h.y,h.z),p.copy(h).normalize(),g.push(p.x,p.y,p.z),m.push(I+y,1-S),x.push(l++)}u.push(x)}for(let f=0;f<n;f++)for(let x=0;x<t;x++){const S=u[f][x+1],y=u[f][x],C=u[f+1][x],I=u[f+1][x+1];(f!==0||o>0)&&d.push(S,y,I),(f!==n-1||c<Math.PI)&&d.push(y,C,I)}this.setIndex(d),this.setAttribute("position",new Et(_,3)),this.setAttribute("normal",new Et(g,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fn extends ln{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_o,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wn extends Fn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ys extends ln{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Ke(16777215),this.specular=new Ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_o,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Q_ extends ln{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_o,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function jr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function e0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function t0(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ql(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function th(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class ur{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class n0 extends ur{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ds,endingEnd:ds}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case fs:r=e,a=2*t-n;break;case co:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case fs:o=e,c=2*n-t;break;case co:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,p=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,f=-p*m+2*p*g-p*_,x=(1+p)*m+(-1.5-2*p)*g+(-.5+p)*_+1,S=(-1-d)*m+(1.5+d)*g+.5*_,y=d*m-d*g;for(let C=0;C!==a;++C)r[C]=f*o[u+C]+x*o[l+C]+S*o[c+C]+y*o[h+C];return r}}class nh extends ur{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let p=0;p!==a;++p)r[p]=o[l+p]*h+o[c+p]*u;return r}}class i0 extends ur{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class jn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jr(t,this.TimeBufferType),this.values=jr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:jr(e.times,Array),values:jr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new i0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new n0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ir:t=this.InterpolantFactoryMethodDiscrete;break;case sr:t=this.InterpolantFactoryMethodLinear;break;case Co:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return sr;case this.InterpolantFactoryMethodSmooth:return Co}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&e0(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Co,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,p=h-n,d=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[p+_]||g!==t[d+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,p=o*n;for(let d=0;d!==n;++d)t[p+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=sr;class Ds extends jn{constructor(e,t,n){super(e,t,n)}}Ds.prototype.ValueTypeName="bool";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=ir;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class ih extends jn{}ih.prototype.ValueTypeName="color";class Cs extends jn{}Cs.prototype.ValueTypeName="number";class s0 extends ur{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Zt.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Wi extends jn{InterpolantFactoryMethodLinear(e){return new s0(this.times,this.values,this.getValueSize(),e)}}Wi.prototype.ValueTypeName="quaternion";Wi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ns extends jn{constructor(e,t,n){super(e,t,n)}}Ns.prototype.ValueTypeName="string";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=ir;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class Si extends jn{}Si.prototype.ValueTypeName="vector";class or{constructor(e="",t=-1,n=[],i=gc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=On(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(o0(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(jn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=t0(c);c=ql(c,1,u),l=ql(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Cs(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let p=i[h];p||(i[h]=p=[]),p.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,p,d,_,g){if(d.length!==0){const m=[],f=[];th(d,m,f,_),m.length!==0&&g.push(new h(p,m,f))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const p=l[h].keys;if(!(!p||p.length===0))if(p[0].morphTargets){const d={};let _;for(_=0;_<p.length;_++)if(p[_].morphTargets)for(let g=0;g<p[_].morphTargets.length;g++)d[p[_].morphTargets[g]]=-1;for(const g in d){const m=[],f=[];for(let x=0;x!==p[_].morphTargets.length;++x){const S=p[_];m.push(S.time),f.push(S.morphTarget===g?1:0)}i.push(new Cs(".morphTargetInfluence["+g+"]",m,f))}c=d.length*o}else{const d=".bones["+t[h].name+"]";n(Si,d+".position",p,"pos",i),n(Wi,d+".quaternion",p,"rot",i),n(Si,d+".scale",p,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function r0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Cs;case"vector":case"vector2":case"vector3":case"vector4":return Si;case"color":return ih;case"quaternion":return Wi;case"bool":case"boolean":return Ds;case"string":return Ns}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function o0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=r0(s.type);if(s.times===void 0){const t=[],n=[];th(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const xi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class sh{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=l.length;h<p;h+=2){const d=l[h],_=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const rh=new sh;class kn{constructor(e){this.manager=e!==void 0?e:rh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}kn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qn={};class a0 extends Error{constructor(e,t){super(e),this.response=t}}class Us extends kn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=xi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Qn[e]!==void 0){Qn[e].push({onLoad:t,onProgress:n,onError:i});return}Qn[e]=[],Qn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Qn[e],h=l.body.getReader(),p=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=p?parseInt(p):0,_=d!==0;let g=0;const m=new ReadableStream({start(f){x();function x(){h.read().then(({done:S,value:y})=>{if(S)f.close();else{g+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let I=0,L=u.length;I<L;I++){const N=u[I];N.onProgress&&N.onProgress(C)}f.enqueue(y),x()}},S=>{f.error(S)})}}});return new Response(m)}else throw new a0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),p=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(p);return l.arrayBuffer().then(_=>d.decode(_))}}}).then(l=>{xi.add(e,l);const u=Qn[e];delete Qn[e];for(let h=0,p=u.length;h<p;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=Qn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Qn[e];for(let h=0,p=u.length;h<p;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class c0 extends kn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=xi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=rr("img");function c(){u(),xi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class l0 extends kn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Sc,a=new Us(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:Sn,o.wrapT=l.wrapT!==void 0?l.wrapT:Sn,o.magFilter=l.magFilter!==void 0?l.magFilter:Kt,o.minFilter=l.minFilter!==void 0?l.minFilter:Kt,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=Nn),l.mipmapCount===1&&(o.minFilter=Kt),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,i),o}}class Tc extends kn{constructor(e){super(e)}load(e,t,n,i){const r=new Ft,o=new c0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class hr extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class u0 extends hr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const oa=new Ye,Yl=new X,Kl=new X;class Ac{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xc,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Yl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yl),Kl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kl),t.updateMatrixWorld(),oa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class h0 extends Ac{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=As*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class oh extends hr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new h0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Zl=new Ye,Xs=new X,aa=new X;class d0 extends Ac{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Xs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xs),aa.copy(n.position),aa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(aa),n.updateMatrixWorld(),i.makeTranslation(-Xs.x,-Xs.y,-Xs.z),Zl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zl)}}class ah extends hr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new d0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class f0 extends Ac{constructor(){super(new xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rc extends hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new f0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ch extends hr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class zi{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class p0 extends kn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=xi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return xi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),xi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});xi.add(e,c),r.manager.itemStart(e)}}class m0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$l(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=$l();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $l(){return performance.now()}class g0{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Zt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;Zt.multiplyQuaternionsFlat(e,o,e,t,e,n),Zt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Cc="\\[\\]\\.:\\/",_0=new RegExp("["+Cc+"]","g"),Ic="[^"+Cc+"]",v0="[^"+Cc.replace("\\.","")+"]",x0=/((?:WC+[\/:])*)/.source.replace("WC",Ic),y0=/(WCOD+)?/.source.replace("WCOD",v0),b0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ic),M0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ic),S0=new RegExp("^"+x0+y0+b0+M0+"$"),E0=["material","materials","bones","map"];class w0{constructor(e,t,n){const i=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class St{constructor(e,t,n){this.path=t,this.parsedPath=n||St.parseTrackName(t),this.node=St.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new St.Composite(e,t,n):new St(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_0,"")}static parseTrackName(e){const t=S0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);E0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=St.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}St.Composite=w0;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class T0{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:ds,endingEnd:ds};for(let l=0;l!==o;++l){const u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=sd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case od:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case gc:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===rd;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===id){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=fs,i.endingEnd=fs):(e?i.endingStart=this.zeroSlopeAtStart?fs:ds:i.endingStart=co,t?i.endingEnd=this.zeroSlopeAtEnd?fs:ds:i.endingEnd=co)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}const A0=new Float32Array(1);class R0 extends Xi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const p=i[h],d=p.name;let _=u[d];if(_!==void 0)++_.referenceCount,o[h]=_;else{if(_=o[h],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,c,d));continue}const g=t&&t._propertyBindings[h].binding.parsedPath;_=new g0(St.create(n,d,g),p.ValueTypeName,p.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,c,d),o[h]=_}a[h].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,p=(e._localRoot||this._root).uuid;delete h[p],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new nh(new Float32Array(2),new Float32Array(2),1,A0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?or.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=gc),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new T0(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?or.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Jl=new Ye;class C0{constructor(e,t,n=0,i=1/0){this.ray=new lr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new vc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Jl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jl),this}intersectObject(e,t=!0,n=[]){return nc(e,this,n,t),n.sort(Ql),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)nc(e[i],this,n,t);return n.sort(Ql),n}}function Ql(s,e){return s.distance-e.distance}function nc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)nc(r[o],e,t,!0)}}const eu=new rt;class I0{constructor(e=new rt(1/0,1/0),t=new rt(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=eu.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,eu).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cc);let qs=null;function L0(s){window.addEventListener("resize",()=>{const e=window.innerWidth,t=window.innerHeight;lh().setSize(e,t),s.aspect=e/t,s.updateProjectionMatrix()})}function lh(){return qs||(qs=new X_,qs.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(qs.domElement)),qs}function P0(){const s=document.body;s.requestPointerLock&&s.requestPointerLock()}function D0(){document.pointerLockElement&&document.exitPointerLock()}class N0{constructor(e,t,n=1){Ee(this,"targetObject");Ee(this,"currentPosition");Ee(this,"currentLookat");Ee(this,"camera");Ee(this,"zoomLevel");Ee(this,"ZOOM_SPEED",.1);this.targetObject=t,this.camera=e,this.currentPosition=new X,this.currentLookat=new X,this.zoomLevel=n}getIdealOffset(){const e=new X(-1.6,1.7,-2.5),t=new X(e.x*this.zoomLevel,e.y,e.z*this.zoomLevel);return t.applyQuaternion(this.targetObject.quaternion),t.add(this.targetObject.position),t}getIdealLookat(){const e=new X(0,1,30);return e.applyQuaternion(this.targetObject.quaternion),e.add(this.targetObject.position),e}update(e){const t=this.getIdealOffset(),n=this.getIdealLookat();this.currentPosition=t,this.currentLookat=n,this.camera.position.copy(this.currentPosition),this.camera.lookAt(this.currentLookat)}adjustZoom(e){e*=-1,this.zoomLevel=tn.clamp(this.zoomLevel-e*this.ZOOM_SPEED,.5,2)}}class U0{constructor(e,t){Ee(this,"camera");Ee(this,"thirdPersonCamera");this.camera=t,L0(this.camera),this.thirdPersonCamera=new N0(this.camera,e)}update(e,t){t.mouse.normalizedScrollDelta!==0&&this.thirdPersonCamera.adjustZoom(t.mouse.normalizedScrollDelta),this.thirdPersonCamera.update(e)}}const O0="modulepreload",F0=function(s){return"/"+s},tu={},k0=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(c=>{if(c=F0(c),c in tu)return;tu[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":O0,l||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),l)return new Promise((p,d)=>{h.addEventListener("load",p),h.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};class yi{static async init(){this.instance||(this.instance=await(await k0(async()=>{const{default:e}=await import("./ammo-DfCHOTpM.js").then(t=>t.a);return{default:e}},[])).default())}static get(){if(!this.instance)throw new Error("Ammo has not been initialized. Call AmmoSingleton.init() first.");return this.instance}}Ee(yi,"instance",null);function B0(){const s=yi.get();let e=new s.btDefaultCollisionConfiguration,t=new s.btCollisionDispatcher(e),n=new s.btDbvtBroadphase,i=new s.btSequentialImpulseConstraintSolver;return new s.btDiscreteDynamicsWorld(t,n,i,e)}class z0{constructor(){Ee(this,"world");Ee(this,"rigidBodies",[]);this.world=B0();const e=yi.get();this.world.setGravity(new e.btVector3(0,-10,0))}step(e){this.world.stepSimulation(e,10)}addRigidBodies(e){e.forEach(([t,n])=>{this.addRigidBody(n,t)})}addRigidBody(e,t){e.setUserPointer(t),this.rigidBodies.push(e),this.world.addRigidBody(e)}}var Vi;(s=>{function e(a){const c=yi.get(),l=new gn().setFromObject(a),u=new X;l.getSize(u);const h=new c.btVector3(u.x/2,u.y/2,u.z/2);return new c.btBoxShape(h)}s.createBoxShape=e;function t(a,c){const l=yi.get(),u=new l.btTransform;u.setIdentity(),u.setOrigin(new l.btVector3(a.position.x,a.position.y,a.position.z));const h=new l.btDefaultMotionState(u),p=e(a),d=new l.btVector3(0,0,0);c>0&&p.calculateLocalInertia(c,d);const _=new l.btRigidBodyConstructionInfo(c,h,p,d);return new l.btRigidBody(_)}s.createBody=t;function n(a){if(a instanceof gt)return a;const c=a.children.find(l=>l instanceof gt);if(!c)throw new Error("No Mesh found in object");return c}s.getMesh=n;function i(a,c){const l=yi.get(),u=new l.btVector3(a.x,a.y,a.z),h=new l.btVector3(0,0,0);c.forEach(p=>{p.applyImpulse(u,h)})}s.applyImpulse=i;function r(a){const c=o(a),l=c.getOrigin(),u=new X(l.x(),l.y(),l.z()),h=c.getRotation(),p=new Zt(h.x(),h.y(),h.z(),h.w());return[u,p]}s.getPositionRotation=r;function o(a){const c=yi.get(),l=new c.btTransform;return a.getMotionState().getWorldTransform(l),l}s.getWorldTransform=o})(Vi||(Vi={}));class V0{constructor(e){Ee(this,"entities");Ee(this,"world");Ee(this,"objects",new Map);Ee(this,"masses",new Map);this.entities=e,this.world=new z0,this.initializePhysics()}initializePhysics(){const e=this.entities.getRoom();this.addObject(e.cube.object,1),this.addObject(e.floor.object,0),Vi.applyImpulse(new X(4.5,0,0),[...this.objects.values()])}step(e){let t=e/10;this.world.step(t)}getRigidBodyMap(){return this.objects}addObject(e,t){const n=Vi.getMesh(e),i=Vi.createBody(n,t);this.objects.set(n,i),this.masses.set(n,t),this.world.addRigidBody(i,n)}}var Is=(s=>(s[s.OpticalTable=0]="OpticalTable",s[s.Arm=1]="Arm",s))(Is||{}),mn=(s=>(s[s.Error=0]="Error",s[s.PhotoCamera=1]="PhotoCamera",s[s.Timelapse=2]="Timelapse",s[s.Timer=3]="Timer",s))(mn||{}),So=(s=>(s[s.Human=0]="Human",s))(So||{}),Bn=(s=>(s[s.Idle=0]="Idle",s[s.Moving=1]="Moving",s))(Bn||{}),Nt=(s=>(s[s.GOTO_1=0]="GOTO_1",s[s.GOTO_2=1]="GOTO_2",s[s.GOTO_3=2]="GOTO_3",s[s.GOTO_4=3]="GOTO_4",s[s.GOTO_5=4]="GOTO_5",s[s.GOTO_6=5]="GOTO_6",s[s.STOP=6]="STOP",s))(Nt||{}),ar=(s=>(s[s.PLAYER_MOVE=0]="PLAYER_MOVE",s[s.PLAYER_ROTATE=1]="PLAYER_ROTATE",s))(ar||{}),ki=(s=>(s[s.ERROR=0]="ERROR",s[s.CAPTURING=1]="CAPTURING",s[s.STANDBY=2]="STANDBY",s[s.LOADING=3]="LOADING",s))(ki||{}),ii=(s=>(s[s.DEFAULT=0]="DEFAULT",s[s.SELECTED=1]="SELECTED",s[s.HOVER=2]="HOVER",s[s.DISABLED=3]="DISABLED",s))(ii||{}),uh=(s=>(s[s.LEFT=0]="LEFT",s[s.MIDDLE=1]="MIDDLE",s[s.RIGHT=2]="RIGHT",s))(uh||{});class nu{constructor(e){Ee(this,"action");this.action=e}execute(e,t){switch(this.action.type){case ar.PLAYER_MOVE:t.handleMove(this.action.payload);break;case ar.PLAYER_ROTATE:t.handleRotation(this.action.payload)}}}var ic;(s=>{function e(i){const r={forward:i.held.has("ArrowUp")||i.held.has("w"),backward:i.held.has("ArrowDown")||i.held.has("s"),left:i.held.has("ArrowLeft")||i.held.has("a"),right:i.held.has("ArrowRight")||i.held.has("d")},o={type:ar.PLAYER_MOVE,payload:r};return new nu(o)}s.getMoveAction=e;function t(i){const r=i.mouse.pointerLocked?i.mouse.dx:0,o={left:i.keys.held.has("q"),right:i.keys.held.has("e"),dx:r},a={type:ar.PLAYER_ROTATE,payload:o};return new nu(a)}s.getRotateAction=t;function n(i){return[e(i.keys),t(i)]}s.getPlayerActions=n})(ic||(ic={}));class H0{constructor(e,t,n){Ee(this,"actors");Ee(this,"playerController");Ee(this,"tableController");this.actors=e,this.playerController=t,this.tableController=n}processActions(e,t){ic.getPlayerActions(e).forEach(i=>{i.execute(this.actors.player,this.playerController)}),t.forEach(i=>{this.tableController.handleArmCommand(i)})}}class G0{constructor(e,t){Ee(this,"scene");Ee(this,"camera");this.scene=e,this.camera=t}render(){lh().render(this.scene,this.camera)}}function W0(){const s=new Gt(75,window.innerWidth/window.innerHeight,.1,1e3);return s.position.set(0,2,5),s}class j0{constructor(){Ee(this,"keyboardInput",{pressed:new Set,released:new Set,held:new Set});window.addEventListener("keydown",this.onKeyDown.bind(this)),window.addEventListener("keyup",this.onKeyUp.bind(this))}onKeyDown(e){this.keyboardInput.held.has(e.key)||this.keyboardInput.pressed.add(e.key),this.keyboardInput.held.add(e.key)}onKeyUp(e){this.keyboardInput.held.delete(e.key),this.keyboardInput.pressed.delete(e.key),this.keyboardInput.released.add(e.key)}getKeyboardInput(){const e={pressed:new Set(this.keyboardInput.pressed),released:new Set(this.keyboardInput.released),held:new Set(this.keyboardInput.held)};return this.clear(),e}clear(){this.keyboardInput.pressed.clear(),this.keyboardInput.released.clear()}}class X0{constructor(){Ee(this,"mouseInput",{x:0,y:0,dx:0,dy:0,scrollDelta:0,normalizedScrollDelta:0,pressed:new Set,released:new Set,held:new Set,pointerLocked:!1});Ee(this,"lastX",0);Ee(this,"lastY",0);Ee(this,"initialized",!1);document.addEventListener("mousemove",this.onMouseMove.bind(this)),document.addEventListener("mousedown",this.onMouseDown.bind(this)),document.addEventListener("mouseup",this.onMouseUp.bind(this)),document.addEventListener("wheel",this.onMouseScroll.bind(this)),document.addEventListener("pointerlockchange",this.onPointerLockChange.bind(this))}onPointerLockChange(){this.mouseInput.pointerLocked=document.pointerLockElement===document.body,document.pointerLockElement!==document.body?console.log("Pointer lock lost"):console.log("Pointer locked")}onMouseScroll(e){this.mouseInput.scrollDelta=e.deltaY,this.mouseInput.normalizedScrollDelta=tn.clamp(e.deltaY/300,-1,1)}onMouseMove(e){if(document.pointerLockElement)this.mouseInput.dx=e.movementX*.01,this.mouseInput.dy=e.movementY*.01;else{const t=e.clientX/window.innerWidth*2-1,n=-(e.clientY/window.innerHeight)*2+1;this.initialized||(this.lastX=t,this.lastY=n,this.initialized=!0),this.mouseInput.dx=t-this.lastX,this.mouseInput.dy=n-this.lastY,this.mouseInput.x=t,this.mouseInput.y=n,this.lastX=t,this.lastY=n}}onMouseDown(e){const t=e.button;this.mouseInput.held.has(t)||this.mouseInput.pressed.add(t),this.mouseInput.held.add(t)}onMouseUp(e){const t=e.button;this.mouseInput.held.delete(t),this.mouseInput.pressed.delete(t),this.mouseInput.released.add(t)}clear(){this.mouseInput.pressed.clear(),this.mouseInput.released.clear(),this.mouseInput.scrollDelta=0,this.mouseInput.normalizedScrollDelta=0}getMouseInput(){const e={x:this.mouseInput.x,y:this.mouseInput.y,dx:this.mouseInput.dx,dy:this.mouseInput.dy,scrollDelta:this.mouseInput.scrollDelta,normalizedScrollDelta:this.mouseInput.normalizedScrollDelta,pressed:new Set(this.mouseInput.pressed),released:new Set(this.mouseInput.released),held:new Set(this.mouseInput.held),pointerLocked:this.mouseInput.pointerLocked};return this.clear(),e}}class q0{constructor(){Ee(this,"keyboardListener");Ee(this,"mouseListener");this.keyboardListener=new j0,this.mouseListener=new X0}getKeyboardInput(){return this.keyboardListener.getKeyboardInput()}getMouseInput(){return this.mouseListener.getMouseInput()}getInput(){return{keys:this.getKeyboardInput(),mouse:this.getMouseInput()}}}class Y0{constructor(){Ee(this,"actionQueue",[]);this.initButtons()}initButtons(){[{id:"btn1",command:Nt.GOTO_1},{id:"btn2",command:Nt.GOTO_2},{id:"btn3",command:Nt.GOTO_3},{id:"btn4",command:Nt.GOTO_4},{id:"btn5",command:Nt.GOTO_5},{id:"btn6",command:Nt.GOTO_6}].forEach(({id:n,command:i})=>{const r=document.getElementById(n);r&&r.addEventListener("click",()=>this.queueCommand(i))});const t=document.getElementById("btn7");t&&t.addEventListener("click",()=>this.armStop())}queueCommand(e){console.log(`Command: ${e}`),this.actionQueue.push(e)}armStop(){console.log("armStop command"),this.actionQueue.push(Nt.STOP)}getAndClearQueue(){const e=[...this.actionQueue];return this.actionQueue=[],e}}class K0{constructor(){Ee(this,"dialog");Ee(this,"dialogTitle");Ee(this,"dialogMessage");Ee(this,"dialogClose");var e;this.dialog=document.getElementById("dialog"),this.dialogTitle=document.getElementById("dialog-title"),this.dialogMessage=document.getElementById("dialog-message"),this.dialogClose=document.getElementById("dialog-close"),(e=this.dialogClose)==null||e.addEventListener("click",()=>this.hideDialog())}isDialogVisible(){return this.dialog!==null&&!this.dialog.classList.contains("dialog-hidden")}showDialog(e,t){this.dialog&&this.dialogTitle&&this.dialogMessage&&(this.dialogTitle.textContent=e,this.dialogMessage.textContent=t,this.dialog.classList.remove("dialog-hidden"))}hideDialog(){this.dialog&&this.dialog.classList.add("dialog-hidden")}}class Z0{constructor(e,t,n){Ee(this,"camera");Ee(this,"armCommandUI");Ee(this,"player");Ee(this,"entities");Ee(this,"tableController");Ee(this,"raycaster",new C0);Ee(this,"dialogController");this.camera=e,this.tableController=n,this.entities=t,this.armCommandUI=new Y0,this.player=t.getActors().player,this.dialogController=new K0}update(e){this.dialogController.isDialogVisible()||this.updateSpatialUI(),this.handleMouse(e.mouse),this.dialogController.isDialogVisible()||this.updateToolTip(e.keys)}getArmCommands(){return this.armCommandUI.getAndClearQueue()}updateToolTip(e){const t=document.getElementById("ui");t&&e.pressed.has("h")&&t.classList.toggle("hidden")}toggleHUD(e){const t=document.getElementById("hud");t&&t.classList.toggle("hidden",!e)}getClosestOpticalControllerInRange(){let n=9999.9,i=null;for(const r of this.tableController.getOpticalControllers()){r.selectBox.setVisible(!1),r.selectBox.update();const o=r.getDistanceScalar(this.player);o<2&&o<n&&(i=r,n=o)}return i}updateSpatialUI(){const e=this.getClosestOpticalControllerInRange();this.toggleHUD(e!==null),e&&e.selectBox.setVisible(!0)}getVisibleMeshes(e){return e.selectBoxes.filter(t=>t.isVisible()).map(t=>t.getMesh())}getIntersectedMesh(e,t){const n=new rt(e.x,e.y);this.raycaster.setFromCamera(n,this.camera);const i=this.raycaster.intersectObjects(t);return i.length>0?i[0].object:null}updateMouseUIState(e,t){if(e.selectBoxes.forEach(n=>n.setState(ii.DEFAULT)),t){const n=e.selectBoxes.find(i=>i.getMesh()===t);n&&n.setState(ii.HOVER)}}getHoveredOpticsController(){const t=this.entities.getActors().table.selectBoxes.find(n=>n.getState()===ii.HOVER)||null;if(t){const n=this.tableController.getOpticsControllerBySelectBox(t);if(n)return n}return null}handleMouse(e){const t=this.entities.getActors().table,n=this.getVisibleMeshes(t),i=this.getIntersectedMesh(e,n);if(this.updateMouseUIState(t,i),e.pressed.has(uh.LEFT)&&i){let r=this.getHoveredOpticsController();this.dialogController.showDialog("Microscope Info",`Microscope #${r==null?void 0:r.getID()}`)}}}class $0{constructor(){Ee(this,"kinState");Ee(this,"rotationSpeed");this.kinState={velocity:new X,acceleration:new X},this.rotationSpeed=0}update(e,t){const{acceleration:n,velocity:i}=this.kinState,r=new X(0,0,1);e.getWorldDirection(r);const o=new X;o.crossVectors(new X(0,1,0),r).normalize();const a=.025;n.z!==0&&i.add(r.clone().multiplyScalar(n.z*a)),n.x!==0&&i.add(o.clone().multiplyScalar(n.x*a)),e.position.add(i.clone().multiplyScalar(t));const c=1-Math.min(1,5*t);i.multiplyScalar(c),i.lengthSq()<.01**2&&i.set(0,0,0);const u=new Zt;u.setFromAxisAngle(new X(0,1,0),this.rotationSpeed*t),e.quaternion.multiplyQuaternions(u,e.quaternion)}handleMove(e){let t=this.kinState.acceleration;const n=10;e.forward?t.z=n:e.backward?t.z=-n:t.z=0,e.left?t.x=n:e.right?t.x=-n:t.x=0}handleRotation(e){this.rotationSpeed=0;const t=2,n=50;e.left&&(this.rotationSpeed=t),e.right&&(this.rotationSpeed=-t),Math.abs(e.dx)>.01&&(this.rotationSpeed=-e.dx*n)}getVelocity(){return this.kinState.velocity.clone()}getRelativeVelocity(e){return e.worldToLocal(this.kinState.velocity.clone().add(e.position))}}class J0{constructor(e,t){Ee(this,"animationMixer");Ee(this,"object");Ee(this,"animations");Ee(this,"walkAction");Ee(this,"physicsCtrl");this.object=e.object,this.animations=e.object.animations,this.animationMixer=new R0(this.object),this.walkAction=this.animationMixer.clipAction(this.animations[0]),this.walkAction.play(),this.walkAction.paused=!0,this.physicsCtrl=t}update(e){const n=this.physicsCtrl.getVelocity().length(),i=this.physicsCtrl.getRelativeVelocity(this.object);if(n>.01){this.walkAction.paused=!1;let r=Math.min(2,n*.5);i.z<0&&(r=r*-1),this.walkAction.timeScale=r}else this.walkAction.paused=!0;this.animationMixer.update(e)}}class Q0{constructor(e){Ee(this,"phyicsCtrl");Ee(this,"animationCtrl");Ee(this,"bounds");Ee(this,"tableCollider");this.phyicsCtrl=new $0,this.animationCtrl=new J0(e,this.phyicsCtrl);const t=5;this.bounds=new I0(new rt(-t,-t),new rt(t,t)),this.tableCollider=new gn(new X(-2,-1,-1.1),new X(2,1,1.1))}update(e,t){this.phyicsCtrl.update(e,t),this.animationCtrl.update(t),this.setWithinBounds(e)}setWithinBounds(e){this.keepWithinRoom(e),this.moveOutOfTable(e)}keepWithinRoom(e){if(this.isOutOfBounds(e)){const t=new X(this.bounds.min.x,-9999,this.bounds.min.y),n=new X(this.bounds.max.x,9999,this.bounds.max.y);e.position.clamp(t,n)}}moveOutOfTable(e){const t=e.position;if(this.tableCollider.containsPoint(t)){const n=this.tableCollider.min,i=this.tableCollider.max,r=Math.abs(t.x-n.x),o=Math.abs(t.x-i.x),a=Math.abs(t.z-n.z),c=Math.abs(t.z-i.z),l=Math.min(r,o,a,c);l===r?t.x=n.x:l===o?t.x=i.x:l===a?t.z=n.z:l===c&&(t.z=i.z)}}isOutOfBounds(e){const t=e.position.clone();return this.bounds.containsPoint(new rt(t.x,t.z))==!1}handleMove(e){this.phyicsCtrl.handleMove(e)}handleRotation(e){this.phyicsCtrl.handleRotation(e)}setBounds(e){this.bounds=e}}function ev(s,e){switch(e){case Nt.GOTO_1:return{from:s,to:Bn.Moving,command:e};case Nt.GOTO_2:return{from:s,to:Bn.Moving,command:e};case Nt.GOTO_3:return{from:s,to:Bn.Moving,command:e};case Nt.GOTO_4:return{from:s,to:Bn.Moving,command:e};case Nt.GOTO_5:return{from:s,to:Bn.Moving,command:e};case Nt.GOTO_6:return{from:s,to:Bn.Moving,command:e};case Nt.STOP:return{from:s,to:Bn.Idle,command:e};default:throw new Error(`Unhandled case: ${e}`)}}class tv{constructor(){Ee(this,"state",Bn.Idle);Ee(this,"command",Nt.STOP);Ee(this,"targetAngleMap");this.targetAngleMap=new Map([[Nt.GOTO_1,.2],[Nt.GOTO_2,.8],[Nt.GOTO_3,1.4],[Nt.GOTO_4,2],[Nt.GOTO_5,2.5],[Nt.GOTO_6,3],[Nt.STOP,0]])}transition(e){const{from:t,to:n,command:i}=ev(this.state,e);return this.state=n,this.command=i,{from:t,to:n,command:i}}getState(){return this.state}getTargetAngle(){return this.targetAngleMap.get(this.command)||0}}function hh(s){let e=new X(-1.3+s*.57,1.5,-.5);return s>4&&(e.x-=5*.57,e.z=.5),e}function nv(s,e,t){const n=hh(s);e.setPosition(n),n.y-=.4,t.setPosition(n)}class iv{constructor(e,t,n){Ee(this,"bubble");Ee(this,"selectBox");Ee(this,"id");Ee(this,"state",ki.STANDBY);this.bubble=e,this.selectBox=t,this.id=n,nv(n,e,t),t.setVisible(!1)}update(e){}getDistance(e){const t=hh(this.id);return e.object.position.clone().sub(t)}getDistanceScalar(e){return this.getDistance(e).length()}getID(){return this.id}}function sv(s){return Array.from({length:10},(e,t)=>new iv(s.bubbles[t],s.selectBoxes[t],t))}function Lc(s){return s.object.joints["slide-j"]}function rv(s){return Lc(s).angle}function ov(s){const e=new X;return Lc(s).getWorldPosition(e),e}const po=class po{constructor(e,t){Ee(this,"armFSM");Ee(this,"opticsControllers");Ee(this,"arm");Ee(this,"table");this.table=e,this.arm=t,this.opticsControllers=sv(e),this.armFSM=new tv,this.setArmPosition()}getArmState(){return this.armFSM.getState()}handleArmCommand(e){this.armFSM.transition(e)}getOpticalControllers(){return this.opticsControllers}getOpticsControllerBySelectBox(e){return this.opticsControllers.find(t=>t.selectBox===e)}setArmPosition(){this.arm.object.position.copy(this.getArmPosition())}getArmPosition(){const e=new X(-.087,.0777,-.01345);return ov(this.table).clone().add(e)}getSlideTargetPosition(e){const t=rv(this.table),n=this.armFSM.getTargetAngle(),i=n-t;return Math.abs(i)<.01?n:t+Math.sign(i)*Math.min(Math.abs(i),po.SLIDE_SPEED*e)}setSlidePosition(e){Lc(this.table).setJointValue(this.getSlideTargetPosition(e))}update(e){this.armFSM.getState()!=Bn.Idle&&(this.setSlidePosition(e),this.setArmPosition())}};Ee(po,"SLIDE_SPEED",1);let sc=po;function av(s,e){const t=Vi.getMesh(s),n=e.get(t);if(!n)throw new Error("Body not found");return n}function cv(s,e){const[t,n]=Vi.getPositionRotation(av(s,e));s.position.set(t.x,t.y,t.z),s.quaternion.set(n.x,n.y,n.z,n.w)}function lv(s){return[s.getRoom().cube.object]}function uv(s,e){lv(s).forEach(t=>{cv(t,e)})}function hv(s,e){const t=s.getActors().player;e.keys.pressed.has("t")&&fv(t.object,dv(t))}function dv(s){let e=pv(s.object);return e<=.1?e=1:e<=.5?e=.1:e=.5,e}function fv(s,e){s.traverse(t=>{if(t instanceof gt){const n=t.material;Array.isArray(n)?n.forEach(i=>{(i instanceof Fn||i instanceof Wt)&&(i.transparent=!0,i.opacity=tn.clamp(e,0,1))}):(n instanceof Fn||n instanceof Wt)&&(n.transparent=!0,n.opacity=tn.clamp(e,0,1))}})}function pv(s){let e=0;return s.traverse(t=>{if(t instanceof gt){const n=t.material;if(Array.isArray(n)){for(const i of n)if(i instanceof Fn||i instanceof Wt){e=i.opacity;break}}else(n instanceof Fn||n instanceof Wt)&&(e=n.opacity)}}),e}function mv(s,e){let t=s.getActors(),n=W0(),i=new U0(t.player.object,n),r=new Q0(s.getActors().player),o=new sc(t.table,t.arm),a=new Z0(n,s,o),c=new G0(e,n),l=new H0(t,r,o);return{player:r,table:o,camera:i,ui:a,render:c,actor:l}}function gv(s,e,t,n){e.camera.update(s,n),e.actor.processActions(n,e.ui.getArmCommands()),e.player.update(t.getActors().player.object,s),e.table.update(s)}function _v(s,e){s.ui.update(e),s.render.render()}function vv(s){const e=s.mouse.pointerLocked,t="r";!e&&s.keys.pressed.has(t)?P0():e&&s.keys.pressed.has(t)&&D0()}class xv{constructor(e,t){Ee(this,"physicsSystem");Ee(this,"clock");Ee(this,"entities");Ee(this,"controllers");Ee(this,"inputListener");Ee(this,"runSimulationLoop",()=>{this.processNextFrame(),requestAnimationFrame(this.runSimulationLoop)});this.inputListener=new q0,this.entities=e,this.physicsSystem=new V0(e),this.clock=new m0,this.controllers=mv(e,t)}processNextFrame(){const e=this.clock.getDelta(),t=this.inputListener.getInput();vv(t),hv(this.entities,t),gv(e,this.controllers,this.entities,t),this.stepSimulation(e),_v(this.controllers,t)}stepSimulation(e){this.physicsSystem.step(e),uv(this.entities,this.physicsSystem.getRigidBodyMap())}}const yv=0,dh="./assets.zip",bv={},Mv={[So.Human]:"assets/gltfs/Character.glb"},Sv={[mn.Error]:"assets/imgs/error.png",[mn.PhotoCamera]:"assets/imgs/photo_camera.png",[mn.Timelapse]:"assets/imgs/timelapse.png",[mn.Timer]:"assets/imgs/timer.png"};var Xr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ev(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function my(s){if(s.__esModule)return s;var e=s.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(s).forEach(function(n){var i=Object.getOwnPropertyDescriptor(s,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return s[n]}})}),t}function qr(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ca={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var iu;function wv(){return iu||(iu=1,function(s,e){(function(t){s.exports=t()})(function(){return function t(n,i,r){function o(l,u){if(!i[l]){if(!n[l]){var h=typeof qr=="function"&&qr;if(!u&&h)return h(l,!0);if(a)return a(l,!0);var p=new Error("Cannot find module '"+l+"'");throw p.code="MODULE_NOT_FOUND",p}var d=i[l]={exports:{}};n[l][0].call(d.exports,function(_){var g=n[l][1][_];return o(g||_)},d,d.exports,t,n,i,r)}return i[l].exports}for(var a=typeof qr=="function"&&qr,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(t,n,i){var r=t("./utils"),o=t("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(c){for(var l,u,h,p,d,_,g,m=[],f=0,x=c.length,S=x,y=r.getTypeOf(c)!=="string";f<c.length;)S=x-f,h=y?(l=c[f++],u=f<x?c[f++]:0,f<x?c[f++]:0):(l=c.charCodeAt(f++),u=f<x?c.charCodeAt(f++):0,f<x?c.charCodeAt(f++):0),p=l>>2,d=(3&l)<<4|u>>4,_=1<S?(15&u)<<2|h>>6:64,g=2<S?63&h:64,m.push(a.charAt(p)+a.charAt(d)+a.charAt(_)+a.charAt(g));return m.join("")},i.decode=function(c){var l,u,h,p,d,_,g=0,m=0,f="data:";if(c.substr(0,f.length)===f)throw new Error("Invalid base64 input, it looks like a data url.");var x,S=3*(c=c.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(c.charAt(c.length-1)===a.charAt(64)&&S--,c.charAt(c.length-2)===a.charAt(64)&&S--,S%1!=0)throw new Error("Invalid base64 input, bad content length.");for(x=o.uint8array?new Uint8Array(0|S):new Array(0|S);g<c.length;)l=a.indexOf(c.charAt(g++))<<2|(p=a.indexOf(c.charAt(g++)))>>4,u=(15&p)<<4|(d=a.indexOf(c.charAt(g++)))>>2,h=(3&d)<<6|(_=a.indexOf(c.charAt(g++))),x[m++]=l,d!==64&&(x[m++]=u),_!==64&&(x[m++]=h);return x}},{"./support":30,"./utils":32}],2:[function(t,n,i){var r=t("./external"),o=t("./stream/DataWorker"),a=t("./stream/Crc32Probe"),c=t("./stream/DataLengthProbe");function l(u,h,p,d,_){this.compressedSize=u,this.uncompressedSize=h,this.crc32=p,this.compression=d,this.compressedContent=_}l.prototype={getContentWorker:function(){var u=new o(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")),h=this;return u.on("end",function(){if(this.streamInfo.data_length!==h.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),u},getCompressedWorker:function(){return new o(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},l.createWorkerFrom=function(u,h,p){return u.pipe(new a).pipe(new c("uncompressedSize")).pipe(h.compressWorker(p)).pipe(new c("compressedSize")).withStreamInfo("compression",h)},n.exports=l},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,n,i){var r=t("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},i.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,n,i){var r=t("./utils"),o=function(){for(var a,c=[],l=0;l<256;l++){a=l;for(var u=0;u<8;u++)a=1&a?3988292384^a>>>1:a>>>1;c[l]=a}return c}();n.exports=function(a,c){return a!==void 0&&a.length?r.getTypeOf(a)!=="string"?function(l,u,h,p){var d=o,_=p+h;l^=-1;for(var g=p;g<_;g++)l=l>>>8^d[255&(l^u[g])];return-1^l}(0|c,a,a.length,0):function(l,u,h,p){var d=o,_=p+h;l^=-1;for(var g=p;g<_;g++)l=l>>>8^d[255&(l^u.charCodeAt(g))];return-1^l}(0|c,a,a.length,0):0}},{"./utils":32}],5:[function(t,n,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(t,n,i){var r=null;r=typeof Promise<"u"?Promise:t("lie"),n.exports={Promise:r}},{lie:37}],7:[function(t,n,i){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=t("pako"),a=t("./utils"),c=t("./stream/GenericWorker"),l=r?"uint8array":"array";function u(h,p){c.call(this,"FlateWorker/"+h),this._pako=null,this._pakoAction=h,this._pakoOptions=p,this.meta={}}i.magic="\b\0",a.inherits(u,c),u.prototype.processChunk=function(h){this.meta=h.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(l,h.data),!1)},u.prototype.flush=function(){c.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},u.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this._pako=null},u.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var h=this;this._pako.onData=function(p){h.push({data:p,meta:h.meta})}},i.compressWorker=function(h){return new u("Deflate",h)},i.uncompressWorker=function(){return new u("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,n,i){function r(d,_){var g,m="";for(g=0;g<_;g++)m+=String.fromCharCode(255&d),d>>>=8;return m}function o(d,_,g,m,f,x){var S,y,C=d.file,I=d.compression,L=x!==l.utf8encode,N=a.transformTo("string",x(C.name)),E=a.transformTo("string",l.utf8encode(C.name)),w=C.comment,B=a.transformTo("string",x(w)),R=a.transformTo("string",l.utf8encode(w)),z=E.length!==C.name.length,b=R.length!==w.length,W="",H="",Z="",J=C.dir,Q=C.date,fe={crc32:0,compressedSize:0,uncompressedSize:0};_&&!g||(fe.crc32=d.crc32,fe.compressedSize=d.compressedSize,fe.uncompressedSize=d.uncompressedSize);var q=0;_&&(q|=8),L||!z&&!b||(q|=2048);var K=0,_e=0;J&&(K|=16),f==="UNIX"?(_e=798,K|=function(Y,ce){var de=Y;return Y||(de=ce?16893:33204),(65535&de)<<16}(C.unixPermissions,J)):(_e=20,K|=function(Y){return 63&(Y||0)}(C.dosPermissions)),S=Q.getUTCHours(),S<<=6,S|=Q.getUTCMinutes(),S<<=5,S|=Q.getUTCSeconds()/2,y=Q.getUTCFullYear()-1980,y<<=4,y|=Q.getUTCMonth()+1,y<<=5,y|=Q.getUTCDate(),z&&(H=r(1,1)+r(u(N),4)+E,W+="up"+r(H.length,2)+H),b&&(Z=r(1,1)+r(u(B),4)+R,W+="uc"+r(Z.length,2)+Z);var j="";return j+=`
\0`,j+=r(q,2),j+=I.magic,j+=r(S,2),j+=r(y,2),j+=r(fe.crc32,4),j+=r(fe.compressedSize,4),j+=r(fe.uncompressedSize,4),j+=r(N.length,2),j+=r(W.length,2),{fileRecord:h.LOCAL_FILE_HEADER+j+N+W,dirRecord:h.CENTRAL_FILE_HEADER+r(_e,2)+j+r(B.length,2)+"\0\0\0\0"+r(K,4)+r(m,4)+N+W+B}}var a=t("../utils"),c=t("../stream/GenericWorker"),l=t("../utf8"),u=t("../crc32"),h=t("../signature");function p(d,_,g,m){c.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=g,this.encodeFileName=m,this.streamFiles=d,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(p,c),p.prototype.push=function(d){var _=d.meta.percent||0,g=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(d):(this.bytesWritten+=d.data.length,c.prototype.push.call(this,{data:d.data,meta:{currentFile:this.currentFile,percent:g?(_+100*(g-m-1))/g:100}}))},p.prototype.openedSource=function(d){this.currentSourceOffset=this.bytesWritten,this.currentFile=d.file.name;var _=this.streamFiles&&!d.file.dir;if(_){var g=o(d,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},p.prototype.closedSource=function(d){this.accumulate=!1;var _=this.streamFiles&&!d.file.dir,g=o(d,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),_)this.push({data:function(m){return h.DATA_DESCRIPTOR+r(m.crc32,4)+r(m.compressedSize,4)+r(m.uncompressedSize,4)}(d),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},p.prototype.flush=function(){for(var d=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var g=this.bytesWritten-d,m=function(f,x,S,y,C){var I=a.transformTo("string",C(y));return h.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(f,2)+r(f,2)+r(x,4)+r(S,4)+r(I.length,2)+I}(this.dirRecords.length,g,d,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},p.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},p.prototype.registerPrevious=function(d){this._sources.push(d);var _=this;return d.on("data",function(g){_.processChunk(g)}),d.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),d.on("error",function(g){_.error(g)}),this},p.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},p.prototype.error=function(d){var _=this._sources;if(!c.prototype.error.call(this,d))return!1;for(var g=0;g<_.length;g++)try{_[g].error(d)}catch{}return!0},p.prototype.lock=function(){c.prototype.lock.call(this);for(var d=this._sources,_=0;_<d.length;_++)d[_].lock()},n.exports=p},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,n,i){var r=t("../compressions"),o=t("./ZipFileWorker");i.generateWorker=function(a,c,l){var u=new o(c.streamFiles,l,c.platform,c.encodeFileName),h=0;try{a.forEach(function(p,d){h++;var _=function(x,S){var y=x||S,C=r[y];if(!C)throw new Error(y+" is not a valid compression method !");return C}(d.options.compression,c.compression),g=d.options.compressionOptions||c.compressionOptions||{},m=d.dir,f=d.date;d._compressWorker(_,g).withStreamInfo("file",{name:p,dir:m,date:f,comment:d.comment||"",unixPermissions:d.unixPermissions,dosPermissions:d.dosPermissions}).pipe(u)}),u.entriesCount=h}catch(p){u.error(p)}return u}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,n,i){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new r;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(r.prototype=t("./object")).loadAsync=t("./load"),r.support=t("./support"),r.defaults=t("./defaults"),r.version="3.10.1",r.loadAsync=function(o,a){return new r().loadAsync(o,a)},r.external=t("./external"),n.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,n,i){var r=t("./utils"),o=t("./external"),a=t("./utf8"),c=t("./zipEntries"),l=t("./stream/Crc32Probe"),u=t("./nodejsUtils");function h(p){return new o.Promise(function(d,_){var g=p.decompressed.getContentWorker().pipe(new l);g.on("error",function(m){_(m)}).on("end",function(){g.streamInfo.crc32!==p.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):d()}).resume()})}n.exports=function(p,d){var _=this;return d=r.extend(d||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),u.isNode&&u.isStream(p)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",p,!0,d.optimizedBinaryString,d.base64).then(function(g){var m=new c(d);return m.load(g),m}).then(function(g){var m=[o.Promise.resolve(g)],f=g.files;if(d.checkCRC32)for(var x=0;x<f.length;x++)m.push(h(f[x]));return o.Promise.all(m)}).then(function(g){for(var m=g.shift(),f=m.files,x=0;x<f.length;x++){var S=f[x],y=S.fileNameStr,C=r.resolve(S.fileNameStr);_.file(C,S.decompressed,{binary:!0,optimizedBinaryString:!0,date:S.date,dir:S.dir,comment:S.fileCommentStr.length?S.fileCommentStr:null,unixPermissions:S.unixPermissions,dosPermissions:S.dosPermissions,createFolders:d.createFolders}),S.dir||(_.file(C).unsafeOriginalName=y)}return m.zipComment.length&&(_.comment=m.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,n,i){var r=t("../utils"),o=t("../stream/GenericWorker");function a(c,l){o.call(this,"Nodejs stream input adapter for "+c),this._upstreamEnded=!1,this._bindStream(l)}r.inherits(a,o),a.prototype._bindStream=function(c){var l=this;(this._stream=c).pause(),c.on("data",function(u){l.push({data:u,meta:{percent:0}})}).on("error",function(u){l.isPaused?this.generatedError=u:l.error(u)}).on("end",function(){l.isPaused?l._upstreamEnded=!0:l.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,n,i){var r=t("readable-stream").Readable;function o(a,c,l){r.call(this,c),this._helper=a;var u=this;a.on("data",function(h,p){u.push(h)||u._helper.pause(),l&&l(p)}).on("error",function(h){u.emit("error",h)}).on("end",function(){u.push(null)})}t("../utils").inherits(o,r),o.prototype._read=function(){this._helper.resume()},n.exports=o},{"../utils":32,"readable-stream":16}],14:[function(t,n,i){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(r,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(r,o);if(typeof r=="number")throw new Error('The "data" argument must not be a number');return new Buffer(r,o)},allocBuffer:function(r){if(Buffer.alloc)return Buffer.alloc(r);var o=new Buffer(r);return o.fill(0),o},isBuffer:function(r){return Buffer.isBuffer(r)},isStream:function(r){return r&&typeof r.on=="function"&&typeof r.pause=="function"&&typeof r.resume=="function"}}},{}],15:[function(t,n,i){function r(C,I,L){var N,E=a.getTypeOf(I),w=a.extend(L||{},u);w.date=w.date||new Date,w.compression!==null&&(w.compression=w.compression.toUpperCase()),typeof w.unixPermissions=="string"&&(w.unixPermissions=parseInt(w.unixPermissions,8)),w.unixPermissions&&16384&w.unixPermissions&&(w.dir=!0),w.dosPermissions&&16&w.dosPermissions&&(w.dir=!0),w.dir&&(C=f(C)),w.createFolders&&(N=m(C))&&x.call(this,N,!0);var B=E==="string"&&w.binary===!1&&w.base64===!1;L&&L.binary!==void 0||(w.binary=!B),(I instanceof h&&I.uncompressedSize===0||w.dir||!I||I.length===0)&&(w.base64=!1,w.binary=!0,I="",w.compression="STORE",E="string");var R=null;R=I instanceof h||I instanceof c?I:_.isNode&&_.isStream(I)?new g(C,I):a.prepareContent(C,I,w.binary,w.optimizedBinaryString,w.base64);var z=new p(C,R,w);this.files[C]=z}var o=t("./utf8"),a=t("./utils"),c=t("./stream/GenericWorker"),l=t("./stream/StreamHelper"),u=t("./defaults"),h=t("./compressedObject"),p=t("./zipObject"),d=t("./generate"),_=t("./nodejsUtils"),g=t("./nodejs/NodejsStreamInputAdapter"),m=function(C){C.slice(-1)==="/"&&(C=C.substring(0,C.length-1));var I=C.lastIndexOf("/");return 0<I?C.substring(0,I):""},f=function(C){return C.slice(-1)!=="/"&&(C+="/"),C},x=function(C,I){return I=I!==void 0?I:u.createFolders,C=f(C),this.files[C]||r.call(this,C,null,{dir:!0,createFolders:I}),this.files[C]};function S(C){return Object.prototype.toString.call(C)==="[object RegExp]"}var y={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(C){var I,L,N;for(I in this.files)N=this.files[I],(L=I.slice(this.root.length,I.length))&&I.slice(0,this.root.length)===this.root&&C(L,N)},filter:function(C){var I=[];return this.forEach(function(L,N){C(L,N)&&I.push(N)}),I},file:function(C,I,L){if(arguments.length!==1)return C=this.root+C,r.call(this,C,I,L),this;if(S(C)){var N=C;return this.filter(function(w,B){return!B.dir&&N.test(w)})}var E=this.files[this.root+C];return E&&!E.dir?E:null},folder:function(C){if(!C)return this;if(S(C))return this.filter(function(E,w){return w.dir&&C.test(E)});var I=this.root+C,L=x.call(this,I),N=this.clone();return N.root=L.name,N},remove:function(C){C=this.root+C;var I=this.files[C];if(I||(C.slice(-1)!=="/"&&(C+="/"),I=this.files[C]),I&&!I.dir)delete this.files[C];else for(var L=this.filter(function(E,w){return w.name.slice(0,C.length)===C}),N=0;N<L.length;N++)delete this.files[L[N].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(C){var I,L={};try{if((L=a.extend(C||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=L.type.toLowerCase(),L.compression=L.compression.toUpperCase(),L.type==="binarystring"&&(L.type="string"),!L.type)throw new Error("No output type specified.");a.checkSupport(L.type),L.platform!=="darwin"&&L.platform!=="freebsd"&&L.platform!=="linux"&&L.platform!=="sunos"||(L.platform="UNIX"),L.platform==="win32"&&(L.platform="DOS");var N=L.comment||this.comment||"";I=d.generateWorker(this,L,N)}catch(E){(I=new c("error")).error(E)}return new l(I,L.type||"string",L.mimeType)},generateAsync:function(C,I){return this.generateInternalStream(C).accumulate(I)},generateNodeStream:function(C,I){return(C=C||{}).type||(C.type="nodebuffer"),this.generateInternalStream(C).toNodejsStream(I)}};n.exports=y},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,n,i){n.exports=t("stream")},{stream:void 0}],17:[function(t,n,i){var r=t("./DataReader");function o(a){r.call(this,a);for(var c=0;c<this.data.length;c++)a[c]=255&a[c]}t("../utils").inherits(o,r),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var c=a.charCodeAt(0),l=a.charCodeAt(1),u=a.charCodeAt(2),h=a.charCodeAt(3),p=this.length-4;0<=p;--p)if(this.data[p]===c&&this.data[p+1]===l&&this.data[p+2]===u&&this.data[p+3]===h)return p-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var c=a.charCodeAt(0),l=a.charCodeAt(1),u=a.charCodeAt(2),h=a.charCodeAt(3),p=this.readData(4);return c===p[0]&&l===p[1]&&u===p[2]&&h===p[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var c=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},n.exports=o},{"../utils":32,"./DataReader":18}],18:[function(t,n,i){var r=t("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var c,l=0;for(this.checkOffset(a),c=this.index+a-1;c>=this.index;c--)l=(l<<8)+this.byteAt(c);return this.index+=a,l},readString:function(a){return r.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},n.exports=o},{"../utils":32}],19:[function(t,n,i){var r=t("./Uint8ArrayReader");function o(a){r.call(this,a)}t("../utils").inherits(o,r),o.prototype.readData=function(a){this.checkOffset(a);var c=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},n.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,n,i){var r=t("./DataReader");function o(a){r.call(this,a)}t("../utils").inherits(o,r),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var c=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},n.exports=o},{"../utils":32,"./DataReader":18}],21:[function(t,n,i){var r=t("./ArrayReader");function o(a){r.call(this,a)}t("../utils").inherits(o,r),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var c=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},n.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(t,n,i){var r=t("../utils"),o=t("../support"),a=t("./ArrayReader"),c=t("./StringReader"),l=t("./NodeBufferReader"),u=t("./Uint8ArrayReader");n.exports=function(h){var p=r.getTypeOf(h);return r.checkSupport(p),p!=="string"||o.uint8array?p==="nodebuffer"?new l(h):o.uint8array?new u(r.transformTo("uint8array",h)):new a(r.transformTo("array",h)):new c(h)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,n,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,n,i){var r=t("./GenericWorker"),o=t("../utils");function a(c){r.call(this,"ConvertWorker to "+c),this.destType=c}o.inherits(a,r),a.prototype.processChunk=function(c){this.push({data:o.transformTo(this.destType,c.data),meta:c.meta})},n.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(t,n,i){var r=t("./GenericWorker"),o=t("../crc32");function a(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(a,r),a.prototype.processChunk=function(c){this.streamInfo.crc32=o(c.data,this.streamInfo.crc32||0),this.push(c)},n.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,n,i){var r=t("../utils"),o=t("./GenericWorker");function a(c){o.call(this,"DataLengthProbe for "+c),this.propName=c,this.withStreamInfo(c,0)}r.inherits(a,o),a.prototype.processChunk=function(c){if(c){var l=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=l+c.data.length}o.prototype.processChunk.call(this,c)},n.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(t,n,i){var r=t("../utils"),o=t("./GenericWorker");function a(c){o.call(this,"DataWorker");var l=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,c.then(function(u){l.dataIsReady=!0,l.data=u,l.max=u&&u.length||0,l.type=r.getTypeOf(u),l.isPaused||l._tickAndRepeat()},function(u){l.error(u)})}r.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var c=null,l=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":c=this.data.substring(this.index,l);break;case"uint8array":c=this.data.subarray(this.index,l);break;case"array":case"nodebuffer":c=this.data.slice(this.index,l)}return this.index=l,this.push({data:c,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(t,n,i){function r(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var c=0;c<this._listeners[o].length;c++)this._listeners[o][c].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(c){a.processChunk(c)}),o.on("end",function(){a.end()}),o.on("error",function(c){a.error(c)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},n.exports=r},{}],29:[function(t,n,i){var r=t("../utils"),o=t("./ConvertWorker"),a=t("./GenericWorker"),c=t("../base64"),l=t("../support"),u=t("../external"),h=null;if(l.nodestream)try{h=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function p(_,g){return new u.Promise(function(m,f){var x=[],S=_._internalType,y=_._outputType,C=_._mimeType;_.on("data",function(I,L){x.push(I),g&&g(L)}).on("error",function(I){x=[],f(I)}).on("end",function(){try{var I=function(L,N,E){switch(L){case"blob":return r.newBlob(r.transformTo("arraybuffer",N),E);case"base64":return c.encode(N);default:return r.transformTo(L,N)}}(y,function(L,N){var E,w=0,B=null,R=0;for(E=0;E<N.length;E++)R+=N[E].length;switch(L){case"string":return N.join("");case"array":return Array.prototype.concat.apply([],N);case"uint8array":for(B=new Uint8Array(R),E=0;E<N.length;E++)B.set(N[E],w),w+=N[E].length;return B;case"nodebuffer":return Buffer.concat(N);default:throw new Error("concat : unsupported type '"+L+"'")}}(S,x),C);m(I)}catch(L){f(L)}x=[]}).resume()})}function d(_,g,m){var f=g;switch(g){case"blob":case"arraybuffer":f="uint8array";break;case"base64":f="string"}try{this._internalType=f,this._outputType=g,this._mimeType=m,r.checkSupport(f),this._worker=_.pipe(new o(f)),_.lock()}catch(x){this._worker=new a("error"),this._worker.error(x)}}d.prototype={accumulate:function(_){return p(this,_)},on:function(_,g){var m=this;return _==="data"?this._worker.on(_,function(f){g.call(m,f.data,f.meta)}):this._worker.on(_,function(){r.delay(g,arguments,m)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(r.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new h(this,{objectMode:this._outputType!=="nodebuffer"},_)}},n.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,n,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",i.nodebuffer=typeof Buffer<"u",i.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")i.blob=!1;else{var r=new ArrayBuffer(0);try{i.blob=new Blob([r],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(r),i.blob=o.getBlob("application/zip").size===0}catch{i.blob=!1}}}try{i.nodestream=!!t("readable-stream").Readable}catch{i.nodestream=!1}},{"readable-stream":16}],31:[function(t,n,i){for(var r=t("./utils"),o=t("./support"),a=t("./nodejsUtils"),c=t("./stream/GenericWorker"),l=new Array(256),u=0;u<256;u++)l[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;l[254]=l[254]=1;function h(){c.call(this,"utf-8 decode"),this.leftOver=null}function p(){c.call(this,"utf-8 encode")}i.utf8encode=function(d){return o.nodebuffer?a.newBufferFrom(d,"utf-8"):function(_){var g,m,f,x,S,y=_.length,C=0;for(x=0;x<y;x++)(64512&(m=_.charCodeAt(x)))==55296&&x+1<y&&(64512&(f=_.charCodeAt(x+1)))==56320&&(m=65536+(m-55296<<10)+(f-56320),x++),C+=m<128?1:m<2048?2:m<65536?3:4;for(g=o.uint8array?new Uint8Array(C):new Array(C),x=S=0;S<C;x++)(64512&(m=_.charCodeAt(x)))==55296&&x+1<y&&(64512&(f=_.charCodeAt(x+1)))==56320&&(m=65536+(m-55296<<10)+(f-56320),x++),m<128?g[S++]=m:(m<2048?g[S++]=192|m>>>6:(m<65536?g[S++]=224|m>>>12:(g[S++]=240|m>>>18,g[S++]=128|m>>>12&63),g[S++]=128|m>>>6&63),g[S++]=128|63&m);return g}(d)},i.utf8decode=function(d){return o.nodebuffer?r.transformTo("nodebuffer",d).toString("utf-8"):function(_){var g,m,f,x,S=_.length,y=new Array(2*S);for(g=m=0;g<S;)if((f=_[g++])<128)y[m++]=f;else if(4<(x=l[f]))y[m++]=65533,g+=x-1;else{for(f&=x===2?31:x===3?15:7;1<x&&g<S;)f=f<<6|63&_[g++],x--;1<x?y[m++]=65533:f<65536?y[m++]=f:(f-=65536,y[m++]=55296|f>>10&1023,y[m++]=56320|1023&f)}return y.length!==m&&(y.subarray?y=y.subarray(0,m):y.length=m),r.applyFromCharCode(y)}(d=r.transformTo(o.uint8array?"uint8array":"array",d))},r.inherits(h,c),h.prototype.processChunk=function(d){var _=r.transformTo(o.uint8array?"uint8array":"array",d.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var g=_;(_=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),_.set(g,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var m=function(x,S){var y;for((S=S||x.length)>x.length&&(S=x.length),y=S-1;0<=y&&(192&x[y])==128;)y--;return y<0||y===0?S:y+l[x[y]]>S?y:S}(_),f=_;m!==_.length&&(o.uint8array?(f=_.subarray(0,m),this.leftOver=_.subarray(m,_.length)):(f=_.slice(0,m),this.leftOver=_.slice(m,_.length))),this.push({data:i.utf8decode(f),meta:d.meta})},h.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=h,r.inherits(p,c),p.prototype.processChunk=function(d){this.push({data:i.utf8encode(d.data),meta:d.meta})},i.Utf8EncodeWorker=p},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,n,i){var r=t("./support"),o=t("./base64"),a=t("./nodejsUtils"),c=t("./external");function l(g){return g}function u(g,m){for(var f=0;f<g.length;++f)m[f]=255&g.charCodeAt(f);return m}t("setimmediate"),i.newBlob=function(g,m){i.checkSupport("blob");try{return new Blob([g],{type:m})}catch{try{var f=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return f.append(g),f.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var h={stringifyByChunk:function(g,m,f){var x=[],S=0,y=g.length;if(y<=f)return String.fromCharCode.apply(null,g);for(;S<y;)m==="array"||m==="nodebuffer"?x.push(String.fromCharCode.apply(null,g.slice(S,Math.min(S+f,y)))):x.push(String.fromCharCode.apply(null,g.subarray(S,Math.min(S+f,y)))),S+=f;return x.join("")},stringifyByChar:function(g){for(var m="",f=0;f<g.length;f++)m+=String.fromCharCode(g[f]);return m},applyCanBeUsed:{uint8array:function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function p(g){var m=65536,f=i.getTypeOf(g),x=!0;if(f==="uint8array"?x=h.applyCanBeUsed.uint8array:f==="nodebuffer"&&(x=h.applyCanBeUsed.nodebuffer),x)for(;1<m;)try{return h.stringifyByChunk(g,f,m)}catch{m=Math.floor(m/2)}return h.stringifyByChar(g)}function d(g,m){for(var f=0;f<g.length;f++)m[f]=g[f];return m}i.applyFromCharCode=p;var _={};_.string={string:l,array:function(g){return u(g,new Array(g.length))},arraybuffer:function(g){return _.string.uint8array(g).buffer},uint8array:function(g){return u(g,new Uint8Array(g.length))},nodebuffer:function(g){return u(g,a.allocBuffer(g.length))}},_.array={string:p,array:l,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(g)}},_.arraybuffer={string:function(g){return p(new Uint8Array(g))},array:function(g){return d(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:l,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(new Uint8Array(g))}},_.uint8array={string:p,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:l,nodebuffer:function(g){return a.newBufferFrom(g)}},_.nodebuffer={string:p,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return _.nodebuffer.uint8array(g).buffer},uint8array:function(g){return d(g,new Uint8Array(g.length))},nodebuffer:l},i.transformTo=function(g,m){if(m=m||"",!g)return m;i.checkSupport(g);var f=i.getTypeOf(m);return _[f][g](m)},i.resolve=function(g){for(var m=g.split("/"),f=[],x=0;x<m.length;x++){var S=m[x];S==="."||S===""&&x!==0&&x!==m.length-1||(S===".."?f.pop():f.push(S))}return f.join("/")},i.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":r.nodebuffer&&a.isBuffer(g)?"nodebuffer":r.uint8array&&g instanceof Uint8Array?"uint8array":r.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(g){if(!r[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(g){var m,f,x="";for(f=0;f<(g||"").length;f++)x+="\\x"+((m=g.charCodeAt(f))<16?"0":"")+m.toString(16).toUpperCase();return x},i.delay=function(g,m,f){setImmediate(function(){g.apply(f||null,m||[])})},i.inherits=function(g,m){function f(){}f.prototype=m.prototype,g.prototype=new f},i.extend=function(){var g,m,f={};for(g=0;g<arguments.length;g++)for(m in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],m)&&f[m]===void 0&&(f[m]=arguments[g][m]);return f},i.prepareContent=function(g,m,f,x,S){return c.Promise.resolve(m).then(function(y){return r.blob&&(y instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(y))!==-1)&&typeof FileReader<"u"?new c.Promise(function(C,I){var L=new FileReader;L.onload=function(N){C(N.target.result)},L.onerror=function(N){I(N.target.error)},L.readAsArrayBuffer(y)}):y}).then(function(y){var C=i.getTypeOf(y);return C?(C==="arraybuffer"?y=i.transformTo("uint8array",y):C==="string"&&(S?y=o.decode(y):f&&x!==!0&&(y=function(I){return u(I,r.uint8array?new Uint8Array(I.length):new Array(I.length))}(y))),y):c.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,n,i){var r=t("./reader/readerFor"),o=t("./utils"),a=t("./signature"),c=t("./zipEntry"),l=t("./support");function u(h){this.files=[],this.loadOptions=h}u.prototype={checkSignature:function(h){if(!this.reader.readAndCheckSignature(h)){this.reader.index-=4;var p=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(p)+", expected "+o.pretty(h)+")")}},isSignature:function(h,p){var d=this.reader.index;this.reader.setIndex(h);var _=this.reader.readString(4)===p;return this.reader.setIndex(d),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var h=this.reader.readData(this.zipCommentLength),p=l.uint8array?"uint8array":"array",d=o.transformTo(p,h);this.zipComment=this.loadOptions.decodeFileName(d)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var h,p,d,_=this.zip64EndOfCentralSize-44;0<_;)h=this.reader.readInt(2),p=this.reader.readInt(4),d=this.reader.readData(p),this.zip64ExtensibleData[h]={id:h,length:p,value:d}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var h,p;for(h=0;h<this.files.length;h++)p=this.files[h],this.reader.setIndex(p.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),p.readLocalPart(this.reader),p.handleUTF8(),p.processAttributes()},readCentralDir:function(){var h;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(h=new c({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(h);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var h=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(h<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(h);var p=h;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(h=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(h),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var _=p-d;if(0<_)this.isSignature(p,a.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(h){this.reader=r(h)},load:function(h){this.prepareReader(h),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=u},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,n,i){var r=t("./reader/readerFor"),o=t("./utils"),a=t("./compressedObject"),c=t("./crc32"),l=t("./utf8"),u=t("./compressions"),h=t("./support");function p(d,_){this.options=d,this.loadOptions=_}p.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(d){var _,g;if(d.skip(22),this.fileNameLength=d.readInt(2),g=d.readInt(2),this.fileName=d.readData(this.fileNameLength),d.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=function(m){for(var f in u)if(Object.prototype.hasOwnProperty.call(u,f)&&u[f].magic===m)return u[f];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,_,d.readData(this.compressedSize))},readCentralPart:function(d){this.versionMadeBy=d.readInt(2),d.skip(2),this.bitFlag=d.readInt(2),this.compressionMethod=d.readString(2),this.date=d.readDate(),this.crc32=d.readInt(4),this.compressedSize=d.readInt(4),this.uncompressedSize=d.readInt(4);var _=d.readInt(2);if(this.extraFieldsLength=d.readInt(2),this.fileCommentLength=d.readInt(2),this.diskNumberStart=d.readInt(2),this.internalFileAttributes=d.readInt(2),this.externalFileAttributes=d.readInt(4),this.localHeaderOffset=d.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");d.skip(_),this.readExtraFields(d),this.parseZIP64ExtraField(d),this.fileComment=d.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var d=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),d==0&&(this.dosPermissions=63&this.externalFileAttributes),d==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var d=r(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=d.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=d.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=d.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=d.readInt(4))}},readExtraFields:function(d){var _,g,m,f=d.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});d.index+4<f;)_=d.readInt(2),g=d.readInt(2),m=d.readData(g),this.extraFields[_]={id:_,length:g,value:m};d.setIndex(f)},handleUTF8:function(){var d=h.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=l.utf8decode(this.fileName),this.fileCommentStr=l.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var g=o.transformTo(d,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var f=o.transformTo(d,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(f)}}},findExtraFieldUnicodePath:function(){var d=this.extraFields[28789];if(d){var _=r(d.value);return _.readInt(1)!==1||c(this.fileName)!==_.readInt(4)?null:l.utf8decode(_.readData(d.length-5))}return null},findExtraFieldUnicodeComment:function(){var d=this.extraFields[25461];if(d){var _=r(d.value);return _.readInt(1)!==1||c(this.fileComment)!==_.readInt(4)?null:l.utf8decode(_.readData(d.length-5))}return null}},n.exports=p},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,n,i){function r(_,g,m){this.name=_,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=g,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var o=t("./stream/StreamHelper"),a=t("./stream/DataWorker"),c=t("./utf8"),l=t("./compressedObject"),u=t("./stream/GenericWorker");r.prototype={internalStream:function(_){var g=null,m="string";try{if(!_)throw new Error("No output type specified.");var f=(m=_.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),g=this._decompressWorker();var x=!this._dataBinary;x&&!f&&(g=g.pipe(new c.Utf8EncodeWorker)),!x&&f&&(g=g.pipe(new c.Utf8DecodeWorker))}catch(S){(g=new u("error")).error(S)}return new o(g,m,"")},async:function(_,g){return this.internalStream(_).accumulate(g)},nodeStream:function(_,g){return this.internalStream(_||"nodebuffer").toNodejsStream(g)},_compressWorker:function(_,g){if(this._data instanceof l&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new c.Utf8EncodeWorker)),l.createWorkerFrom(m,_,g)},_decompressWorker:function(){return this._data instanceof l?this._data.getContentWorker():this._data instanceof u?this._data:new a(this._data)}};for(var h=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],p=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},d=0;d<h.length;d++)r.prototype[h[d]]=p;n.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,n,i){(function(r){var o,a,c=r.MutationObserver||r.WebKitMutationObserver;if(c){var l=0,u=new c(_),h=r.document.createTextNode("");u.observe(h,{characterData:!0}),o=function(){h.data=l=++l%2}}else if(r.setImmediate||r.MessageChannel===void 0)o="document"in r&&"onreadystatechange"in r.document.createElement("script")?function(){var g=r.document.createElement("script");g.onreadystatechange=function(){_(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},r.document.documentElement.appendChild(g)}:function(){setTimeout(_,0)};else{var p=new r.MessageChannel;p.port1.onmessage=_,o=function(){p.port2.postMessage(0)}}var d=[];function _(){var g,m;a=!0;for(var f=d.length;f;){for(m=d,d=[],g=-1;++g<f;)m[g]();f=d.length}a=!1}n.exports=function(g){d.push(g)!==1||a||o()}}).call(this,typeof Xr<"u"?Xr:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,n,i){var r=t("immediate");function o(){}var a={},c=["REJECTED"],l=["FULFILLED"],u=["PENDING"];function h(f){if(typeof f!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,f!==o&&g(this,f)}function p(f,x,S){this.promise=f,typeof x=="function"&&(this.onFulfilled=x,this.callFulfilled=this.otherCallFulfilled),typeof S=="function"&&(this.onRejected=S,this.callRejected=this.otherCallRejected)}function d(f,x,S){r(function(){var y;try{y=x(S)}catch(C){return a.reject(f,C)}y===f?a.reject(f,new TypeError("Cannot resolve promise with itself")):a.resolve(f,y)})}function _(f){var x=f&&f.then;if(f&&(typeof f=="object"||typeof f=="function")&&typeof x=="function")return function(){x.apply(f,arguments)}}function g(f,x){var S=!1;function y(L){S||(S=!0,a.reject(f,L))}function C(L){S||(S=!0,a.resolve(f,L))}var I=m(function(){x(C,y)});I.status==="error"&&y(I.value)}function m(f,x){var S={};try{S.value=f(x),S.status="success"}catch(y){S.status="error",S.value=y}return S}(n.exports=h).prototype.finally=function(f){if(typeof f!="function")return this;var x=this.constructor;return this.then(function(S){return x.resolve(f()).then(function(){return S})},function(S){return x.resolve(f()).then(function(){throw S})})},h.prototype.catch=function(f){return this.then(null,f)},h.prototype.then=function(f,x){if(typeof f!="function"&&this.state===l||typeof x!="function"&&this.state===c)return this;var S=new this.constructor(o);return this.state!==u?d(S,this.state===l?f:x,this.outcome):this.queue.push(new p(S,f,x)),S},p.prototype.callFulfilled=function(f){a.resolve(this.promise,f)},p.prototype.otherCallFulfilled=function(f){d(this.promise,this.onFulfilled,f)},p.prototype.callRejected=function(f){a.reject(this.promise,f)},p.prototype.otherCallRejected=function(f){d(this.promise,this.onRejected,f)},a.resolve=function(f,x){var S=m(_,x);if(S.status==="error")return a.reject(f,S.value);var y=S.value;if(y)g(f,y);else{f.state=l,f.outcome=x;for(var C=-1,I=f.queue.length;++C<I;)f.queue[C].callFulfilled(x)}return f},a.reject=function(f,x){f.state=c,f.outcome=x;for(var S=-1,y=f.queue.length;++S<y;)f.queue[S].callRejected(x);return f},h.resolve=function(f){return f instanceof this?f:a.resolve(new this(o),f)},h.reject=function(f){var x=new this(o);return a.reject(x,f)},h.all=function(f){var x=this;if(Object.prototype.toString.call(f)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=f.length,y=!1;if(!S)return this.resolve([]);for(var C=new Array(S),I=0,L=-1,N=new this(o);++L<S;)E(f[L],L);return N;function E(w,B){x.resolve(w).then(function(R){C[B]=R,++I!==S||y||(y=!0,a.resolve(N,C))},function(R){y||(y=!0,a.reject(N,R))})}},h.race=function(f){var x=this;if(Object.prototype.toString.call(f)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=f.length,y=!1;if(!S)return this.resolve([]);for(var C=-1,I=new this(o);++C<S;)L=f[C],x.resolve(L).then(function(N){y||(y=!0,a.resolve(I,N))},function(N){y||(y=!0,a.reject(I,N))});var L;return I}},{immediate:36}],38:[function(t,n,i){var r={};(0,t("./lib/utils/common").assign)(r,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),n.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,n,i){var r=t("./zlib/deflate"),o=t("./utils/common"),a=t("./utils/strings"),c=t("./zlib/messages"),l=t("./zlib/zstream"),u=Object.prototype.toString,h=0,p=-1,d=0,_=8;function g(f){if(!(this instanceof g))return new g(f);this.options=o.assign({level:p,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},f||{});var x=this.options;x.raw&&0<x.windowBits?x.windowBits=-x.windowBits:x.gzip&&0<x.windowBits&&x.windowBits<16&&(x.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var S=r.deflateInit2(this.strm,x.level,x.method,x.windowBits,x.memLevel,x.strategy);if(S!==h)throw new Error(c[S]);if(x.header&&r.deflateSetHeader(this.strm,x.header),x.dictionary){var y;if(y=typeof x.dictionary=="string"?a.string2buf(x.dictionary):u.call(x.dictionary)==="[object ArrayBuffer]"?new Uint8Array(x.dictionary):x.dictionary,(S=r.deflateSetDictionary(this.strm,y))!==h)throw new Error(c[S]);this._dict_set=!0}}function m(f,x){var S=new g(x);if(S.push(f,!0),S.err)throw S.msg||c[S.err];return S.result}g.prototype.push=function(f,x){var S,y,C=this.strm,I=this.options.chunkSize;if(this.ended)return!1;y=x===~~x?x:x===!0?4:0,typeof f=="string"?C.input=a.string2buf(f):u.call(f)==="[object ArrayBuffer]"?C.input=new Uint8Array(f):C.input=f,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new o.Buf8(I),C.next_out=0,C.avail_out=I),(S=r.deflate(C,y))!==1&&S!==h)return this.onEnd(S),!(this.ended=!0);C.avail_out!==0&&(C.avail_in!==0||y!==4&&y!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(C.output,C.next_out))):this.onData(o.shrinkBuf(C.output,C.next_out)))}while((0<C.avail_in||C.avail_out===0)&&S!==1);return y===4?(S=r.deflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===h):y!==2||(this.onEnd(h),!(C.avail_out=0))},g.prototype.onData=function(f){this.chunks.push(f)},g.prototype.onEnd=function(f){f===h&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=f,this.msg=this.strm.msg},i.Deflate=g,i.deflate=m,i.deflateRaw=function(f,x){return(x=x||{}).raw=!0,m(f,x)},i.gzip=function(f,x){return(x=x||{}).gzip=!0,m(f,x)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,n,i){var r=t("./zlib/inflate"),o=t("./utils/common"),a=t("./utils/strings"),c=t("./zlib/constants"),l=t("./zlib/messages"),u=t("./zlib/zstream"),h=t("./zlib/gzheader"),p=Object.prototype.toString;function d(g){if(!(this instanceof d))return new d(g);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},g||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||g&&g.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&!(15&m.windowBits)&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var f=r.inflateInit2(this.strm,m.windowBits);if(f!==c.Z_OK)throw new Error(l[f]);this.header=new h,r.inflateGetHeader(this.strm,this.header)}function _(g,m){var f=new d(m);if(f.push(g,!0),f.err)throw f.msg||l[f.err];return f.result}d.prototype.push=function(g,m){var f,x,S,y,C,I,L=this.strm,N=this.options.chunkSize,E=this.options.dictionary,w=!1;if(this.ended)return!1;x=m===~~m?m:m===!0?c.Z_FINISH:c.Z_NO_FLUSH,typeof g=="string"?L.input=a.binstring2buf(g):p.call(g)==="[object ArrayBuffer]"?L.input=new Uint8Array(g):L.input=g,L.next_in=0,L.avail_in=L.input.length;do{if(L.avail_out===0&&(L.output=new o.Buf8(N),L.next_out=0,L.avail_out=N),(f=r.inflate(L,c.Z_NO_FLUSH))===c.Z_NEED_DICT&&E&&(I=typeof E=="string"?a.string2buf(E):p.call(E)==="[object ArrayBuffer]"?new Uint8Array(E):E,f=r.inflateSetDictionary(this.strm,I)),f===c.Z_BUF_ERROR&&w===!0&&(f=c.Z_OK,w=!1),f!==c.Z_STREAM_END&&f!==c.Z_OK)return this.onEnd(f),!(this.ended=!0);L.next_out&&(L.avail_out!==0&&f!==c.Z_STREAM_END&&(L.avail_in!==0||x!==c.Z_FINISH&&x!==c.Z_SYNC_FLUSH)||(this.options.to==="string"?(S=a.utf8border(L.output,L.next_out),y=L.next_out-S,C=a.buf2string(L.output,S),L.next_out=y,L.avail_out=N-y,y&&o.arraySet(L.output,L.output,S,y,0),this.onData(C)):this.onData(o.shrinkBuf(L.output,L.next_out)))),L.avail_in===0&&L.avail_out===0&&(w=!0)}while((0<L.avail_in||L.avail_out===0)&&f!==c.Z_STREAM_END);return f===c.Z_STREAM_END&&(x=c.Z_FINISH),x===c.Z_FINISH?(f=r.inflateEnd(this.strm),this.onEnd(f),this.ended=!0,f===c.Z_OK):x!==c.Z_SYNC_FLUSH||(this.onEnd(c.Z_OK),!(L.avail_out=0))},d.prototype.onData=function(g){this.chunks.push(g)},d.prototype.onEnd=function(g){g===c.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},i.Inflate=d,i.inflate=_,i.inflateRaw=function(g,m){return(m=m||{}).raw=!0,_(g,m)},i.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,n,i){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";i.assign=function(c){for(var l=Array.prototype.slice.call(arguments,1);l.length;){var u=l.shift();if(u){if(typeof u!="object")throw new TypeError(u+"must be non-object");for(var h in u)u.hasOwnProperty(h)&&(c[h]=u[h])}}return c},i.shrinkBuf=function(c,l){return c.length===l?c:c.subarray?c.subarray(0,l):(c.length=l,c)};var o={arraySet:function(c,l,u,h,p){if(l.subarray&&c.subarray)c.set(l.subarray(u,u+h),p);else for(var d=0;d<h;d++)c[p+d]=l[u+d]},flattenChunks:function(c){var l,u,h,p,d,_;for(l=h=0,u=c.length;l<u;l++)h+=c[l].length;for(_=new Uint8Array(h),l=p=0,u=c.length;l<u;l++)d=c[l],_.set(d,p),p+=d.length;return _}},a={arraySet:function(c,l,u,h,p){for(var d=0;d<h;d++)c[p+d]=l[u+d]},flattenChunks:function(c){return[].concat.apply([],c)}};i.setTyped=function(c){c?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,o)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,a))},i.setTyped(r)},{}],42:[function(t,n,i){var r=t("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var c=new r.Buf8(256),l=0;l<256;l++)c[l]=252<=l?6:248<=l?5:240<=l?4:224<=l?3:192<=l?2:1;function u(h,p){if(p<65537&&(h.subarray&&a||!h.subarray&&o))return String.fromCharCode.apply(null,r.shrinkBuf(h,p));for(var d="",_=0;_<p;_++)d+=String.fromCharCode(h[_]);return d}c[254]=c[254]=1,i.string2buf=function(h){var p,d,_,g,m,f=h.length,x=0;for(g=0;g<f;g++)(64512&(d=h.charCodeAt(g)))==55296&&g+1<f&&(64512&(_=h.charCodeAt(g+1)))==56320&&(d=65536+(d-55296<<10)+(_-56320),g++),x+=d<128?1:d<2048?2:d<65536?3:4;for(p=new r.Buf8(x),g=m=0;m<x;g++)(64512&(d=h.charCodeAt(g)))==55296&&g+1<f&&(64512&(_=h.charCodeAt(g+1)))==56320&&(d=65536+(d-55296<<10)+(_-56320),g++),d<128?p[m++]=d:(d<2048?p[m++]=192|d>>>6:(d<65536?p[m++]=224|d>>>12:(p[m++]=240|d>>>18,p[m++]=128|d>>>12&63),p[m++]=128|d>>>6&63),p[m++]=128|63&d);return p},i.buf2binstring=function(h){return u(h,h.length)},i.binstring2buf=function(h){for(var p=new r.Buf8(h.length),d=0,_=p.length;d<_;d++)p[d]=h.charCodeAt(d);return p},i.buf2string=function(h,p){var d,_,g,m,f=p||h.length,x=new Array(2*f);for(d=_=0;d<f;)if((g=h[d++])<128)x[_++]=g;else if(4<(m=c[g]))x[_++]=65533,d+=m-1;else{for(g&=m===2?31:m===3?15:7;1<m&&d<f;)g=g<<6|63&h[d++],m--;1<m?x[_++]=65533:g<65536?x[_++]=g:(g-=65536,x[_++]=55296|g>>10&1023,x[_++]=56320|1023&g)}return u(x,_)},i.utf8border=function(h,p){var d;for((p=p||h.length)>h.length&&(p=h.length),d=p-1;0<=d&&(192&h[d])==128;)d--;return d<0||d===0?p:d+c[h[d]]>p?d:p}},{"./common":41}],43:[function(t,n,i){n.exports=function(r,o,a,c){for(var l=65535&r|0,u=r>>>16&65535|0,h=0;a!==0;){for(a-=h=2e3<a?2e3:a;u=u+(l=l+o[c++]|0)|0,--h;);l%=65521,u%=65521}return l|u<<16|0}},{}],44:[function(t,n,i){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,n,i){var r=function(){for(var o,a=[],c=0;c<256;c++){o=c;for(var l=0;l<8;l++)o=1&o?3988292384^o>>>1:o>>>1;a[c]=o}return a}();n.exports=function(o,a,c,l){var u=r,h=l+c;o^=-1;for(var p=l;p<h;p++)o=o>>>8^u[255&(o^a[p])];return-1^o}},{}],46:[function(t,n,i){var r,o=t("../utils/common"),a=t("./trees"),c=t("./adler32"),l=t("./crc32"),u=t("./messages"),h=0,p=4,d=0,_=-2,g=-1,m=4,f=2,x=8,S=9,y=286,C=30,I=19,L=2*y+1,N=15,E=3,w=258,B=w+E+1,R=42,z=113,b=1,W=2,H=3,Z=4;function J(v,me){return v.msg=u[me],me}function Q(v){return(v<<1)-(4<v?9:0)}function fe(v){for(var me=v.length;0<=--me;)v[me]=0}function q(v){var me=v.state,re=me.pending;re>v.avail_out&&(re=v.avail_out),re!==0&&(o.arraySet(v.output,me.pending_buf,me.pending_out,re,v.next_out),v.next_out+=re,me.pending_out+=re,v.total_out+=re,v.avail_out-=re,me.pending-=re,me.pending===0&&(me.pending_out=0))}function K(v,me){a._tr_flush_block(v,0<=v.block_start?v.block_start:-1,v.strstart-v.block_start,me),v.block_start=v.strstart,q(v.strm)}function _e(v,me){v.pending_buf[v.pending++]=me}function j(v,me){v.pending_buf[v.pending++]=me>>>8&255,v.pending_buf[v.pending++]=255&me}function Y(v,me){var re,V,F=v.max_chain_length,$=v.strstart,ae=v.prev_length,P=v.nice_match,M=v.strstart>v.w_size-B?v.strstart-(v.w_size-B):0,G=v.window,se=v.w_mask,ne=v.prev,oe=v.strstart+w,Te=G[$+ae-1],ye=G[$+ae];v.prev_length>=v.good_match&&(F>>=2),P>v.lookahead&&(P=v.lookahead);do if(G[(re=me)+ae]===ye&&G[re+ae-1]===Te&&G[re]===G[$]&&G[++re]===G[$+1]){$+=2,re++;do;while(G[++$]===G[++re]&&G[++$]===G[++re]&&G[++$]===G[++re]&&G[++$]===G[++re]&&G[++$]===G[++re]&&G[++$]===G[++re]&&G[++$]===G[++re]&&G[++$]===G[++re]&&$<oe);if(V=w-(oe-$),$=oe-w,ae<V){if(v.match_start=me,P<=(ae=V))break;Te=G[$+ae-1],ye=G[$+ae]}}while((me=ne[me&se])>M&&--F!=0);return ae<=v.lookahead?ae:v.lookahead}function ce(v){var me,re,V,F,$,ae,P,M,G,se,ne=v.w_size;do{if(F=v.window_size-v.lookahead-v.strstart,v.strstart>=ne+(ne-B)){for(o.arraySet(v.window,v.window,ne,ne,0),v.match_start-=ne,v.strstart-=ne,v.block_start-=ne,me=re=v.hash_size;V=v.head[--me],v.head[me]=ne<=V?V-ne:0,--re;);for(me=re=ne;V=v.prev[--me],v.prev[me]=ne<=V?V-ne:0,--re;);F+=ne}if(v.strm.avail_in===0)break;if(ae=v.strm,P=v.window,M=v.strstart+v.lookahead,G=F,se=void 0,se=ae.avail_in,G<se&&(se=G),re=se===0?0:(ae.avail_in-=se,o.arraySet(P,ae.input,ae.next_in,se,M),ae.state.wrap===1?ae.adler=c(ae.adler,P,se,M):ae.state.wrap===2&&(ae.adler=l(ae.adler,P,se,M)),ae.next_in+=se,ae.total_in+=se,se),v.lookahead+=re,v.lookahead+v.insert>=E)for($=v.strstart-v.insert,v.ins_h=v.window[$],v.ins_h=(v.ins_h<<v.hash_shift^v.window[$+1])&v.hash_mask;v.insert&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[$+E-1])&v.hash_mask,v.prev[$&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=$,$++,v.insert--,!(v.lookahead+v.insert<E)););}while(v.lookahead<B&&v.strm.avail_in!==0)}function de(v,me){for(var re,V;;){if(v.lookahead<B){if(ce(v),v.lookahead<B&&me===h)return b;if(v.lookahead===0)break}if(re=0,v.lookahead>=E&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+E-1])&v.hash_mask,re=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),re!==0&&v.strstart-re<=v.w_size-B&&(v.match_length=Y(v,re)),v.match_length>=E)if(V=a._tr_tally(v,v.strstart-v.match_start,v.match_length-E),v.lookahead-=v.match_length,v.match_length<=v.max_lazy_match&&v.lookahead>=E){for(v.match_length--;v.strstart++,v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+E-1])&v.hash_mask,re=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart,--v.match_length!=0;);v.strstart++}else v.strstart+=v.match_length,v.match_length=0,v.ins_h=v.window[v.strstart],v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+1])&v.hash_mask;else V=a._tr_tally(v,0,v.window[v.strstart]),v.lookahead--,v.strstart++;if(V&&(K(v,!1),v.strm.avail_out===0))return b}return v.insert=v.strstart<E-1?v.strstart:E-1,me===p?(K(v,!0),v.strm.avail_out===0?H:Z):v.last_lit&&(K(v,!1),v.strm.avail_out===0)?b:W}function xe(v,me){for(var re,V,F;;){if(v.lookahead<B){if(ce(v),v.lookahead<B&&me===h)return b;if(v.lookahead===0)break}if(re=0,v.lookahead>=E&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+E-1])&v.hash_mask,re=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),v.prev_length=v.match_length,v.prev_match=v.match_start,v.match_length=E-1,re!==0&&v.prev_length<v.max_lazy_match&&v.strstart-re<=v.w_size-B&&(v.match_length=Y(v,re),v.match_length<=5&&(v.strategy===1||v.match_length===E&&4096<v.strstart-v.match_start)&&(v.match_length=E-1)),v.prev_length>=E&&v.match_length<=v.prev_length){for(F=v.strstart+v.lookahead-E,V=a._tr_tally(v,v.strstart-1-v.prev_match,v.prev_length-E),v.lookahead-=v.prev_length-1,v.prev_length-=2;++v.strstart<=F&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+E-1])&v.hash_mask,re=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),--v.prev_length!=0;);if(v.match_available=0,v.match_length=E-1,v.strstart++,V&&(K(v,!1),v.strm.avail_out===0))return b}else if(v.match_available){if((V=a._tr_tally(v,0,v.window[v.strstart-1]))&&K(v,!1),v.strstart++,v.lookahead--,v.strm.avail_out===0)return b}else v.match_available=1,v.strstart++,v.lookahead--}return v.match_available&&(V=a._tr_tally(v,0,v.window[v.strstart-1]),v.match_available=0),v.insert=v.strstart<E-1?v.strstart:E-1,me===p?(K(v,!0),v.strm.avail_out===0?H:Z):v.last_lit&&(K(v,!1),v.strm.avail_out===0)?b:W}function we(v,me,re,V,F){this.good_length=v,this.max_lazy=me,this.nice_length=re,this.max_chain=V,this.func=F}function Be(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=x,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*L),this.dyn_dtree=new o.Buf16(2*(2*C+1)),this.bl_tree=new o.Buf16(2*(2*I+1)),fe(this.dyn_ltree),fe(this.dyn_dtree),fe(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(N+1),this.heap=new o.Buf16(2*y+1),fe(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*y+1),fe(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Qe(v){var me;return v&&v.state?(v.total_in=v.total_out=0,v.data_type=f,(me=v.state).pending=0,me.pending_out=0,me.wrap<0&&(me.wrap=-me.wrap),me.status=me.wrap?R:z,v.adler=me.wrap===2?0:1,me.last_flush=h,a._tr_init(me),d):J(v,_)}function tt(v){var me=Qe(v);return me===d&&function(re){re.window_size=2*re.w_size,fe(re.head),re.max_lazy_match=r[re.level].max_lazy,re.good_match=r[re.level].good_length,re.nice_match=r[re.level].nice_length,re.max_chain_length=r[re.level].max_chain,re.strstart=0,re.block_start=0,re.lookahead=0,re.insert=0,re.match_length=re.prev_length=E-1,re.match_available=0,re.ins_h=0}(v.state),me}function pt(v,me,re,V,F,$){if(!v)return _;var ae=1;if(me===g&&(me=6),V<0?(ae=0,V=-V):15<V&&(ae=2,V-=16),F<1||S<F||re!==x||V<8||15<V||me<0||9<me||$<0||m<$)return J(v,_);V===8&&(V=9);var P=new Be;return(v.state=P).strm=v,P.wrap=ae,P.gzhead=null,P.w_bits=V,P.w_size=1<<P.w_bits,P.w_mask=P.w_size-1,P.hash_bits=F+7,P.hash_size=1<<P.hash_bits,P.hash_mask=P.hash_size-1,P.hash_shift=~~((P.hash_bits+E-1)/E),P.window=new o.Buf8(2*P.w_size),P.head=new o.Buf16(P.hash_size),P.prev=new o.Buf16(P.w_size),P.lit_bufsize=1<<F+6,P.pending_buf_size=4*P.lit_bufsize,P.pending_buf=new o.Buf8(P.pending_buf_size),P.d_buf=1*P.lit_bufsize,P.l_buf=3*P.lit_bufsize,P.level=me,P.strategy=$,P.method=re,tt(v)}r=[new we(0,0,0,0,function(v,me){var re=65535;for(re>v.pending_buf_size-5&&(re=v.pending_buf_size-5);;){if(v.lookahead<=1){if(ce(v),v.lookahead===0&&me===h)return b;if(v.lookahead===0)break}v.strstart+=v.lookahead,v.lookahead=0;var V=v.block_start+re;if((v.strstart===0||v.strstart>=V)&&(v.lookahead=v.strstart-V,v.strstart=V,K(v,!1),v.strm.avail_out===0)||v.strstart-v.block_start>=v.w_size-B&&(K(v,!1),v.strm.avail_out===0))return b}return v.insert=0,me===p?(K(v,!0),v.strm.avail_out===0?H:Z):(v.strstart>v.block_start&&(K(v,!1),v.strm.avail_out),b)}),new we(4,4,8,4,de),new we(4,5,16,8,de),new we(4,6,32,32,de),new we(4,4,16,16,xe),new we(8,16,32,32,xe),new we(8,16,128,128,xe),new we(8,32,128,256,xe),new we(32,128,258,1024,xe),new we(32,258,258,4096,xe)],i.deflateInit=function(v,me){return pt(v,me,x,15,8,0)},i.deflateInit2=pt,i.deflateReset=tt,i.deflateResetKeep=Qe,i.deflateSetHeader=function(v,me){return v&&v.state?v.state.wrap!==2?_:(v.state.gzhead=me,d):_},i.deflate=function(v,me){var re,V,F,$;if(!v||!v.state||5<me||me<0)return v?J(v,_):_;if(V=v.state,!v.output||!v.input&&v.avail_in!==0||V.status===666&&me!==p)return J(v,v.avail_out===0?-5:_);if(V.strm=v,re=V.last_flush,V.last_flush=me,V.status===R)if(V.wrap===2)v.adler=0,_e(V,31),_e(V,139),_e(V,8),V.gzhead?(_e(V,(V.gzhead.text?1:0)+(V.gzhead.hcrc?2:0)+(V.gzhead.extra?4:0)+(V.gzhead.name?8:0)+(V.gzhead.comment?16:0)),_e(V,255&V.gzhead.time),_e(V,V.gzhead.time>>8&255),_e(V,V.gzhead.time>>16&255),_e(V,V.gzhead.time>>24&255),_e(V,V.level===9?2:2<=V.strategy||V.level<2?4:0),_e(V,255&V.gzhead.os),V.gzhead.extra&&V.gzhead.extra.length&&(_e(V,255&V.gzhead.extra.length),_e(V,V.gzhead.extra.length>>8&255)),V.gzhead.hcrc&&(v.adler=l(v.adler,V.pending_buf,V.pending,0)),V.gzindex=0,V.status=69):(_e(V,0),_e(V,0),_e(V,0),_e(V,0),_e(V,0),_e(V,V.level===9?2:2<=V.strategy||V.level<2?4:0),_e(V,3),V.status=z);else{var ae=x+(V.w_bits-8<<4)<<8;ae|=(2<=V.strategy||V.level<2?0:V.level<6?1:V.level===6?2:3)<<6,V.strstart!==0&&(ae|=32),ae+=31-ae%31,V.status=z,j(V,ae),V.strstart!==0&&(j(V,v.adler>>>16),j(V,65535&v.adler)),v.adler=1}if(V.status===69)if(V.gzhead.extra){for(F=V.pending;V.gzindex<(65535&V.gzhead.extra.length)&&(V.pending!==V.pending_buf_size||(V.gzhead.hcrc&&V.pending>F&&(v.adler=l(v.adler,V.pending_buf,V.pending-F,F)),q(v),F=V.pending,V.pending!==V.pending_buf_size));)_e(V,255&V.gzhead.extra[V.gzindex]),V.gzindex++;V.gzhead.hcrc&&V.pending>F&&(v.adler=l(v.adler,V.pending_buf,V.pending-F,F)),V.gzindex===V.gzhead.extra.length&&(V.gzindex=0,V.status=73)}else V.status=73;if(V.status===73)if(V.gzhead.name){F=V.pending;do{if(V.pending===V.pending_buf_size&&(V.gzhead.hcrc&&V.pending>F&&(v.adler=l(v.adler,V.pending_buf,V.pending-F,F)),q(v),F=V.pending,V.pending===V.pending_buf_size)){$=1;break}$=V.gzindex<V.gzhead.name.length?255&V.gzhead.name.charCodeAt(V.gzindex++):0,_e(V,$)}while($!==0);V.gzhead.hcrc&&V.pending>F&&(v.adler=l(v.adler,V.pending_buf,V.pending-F,F)),$===0&&(V.gzindex=0,V.status=91)}else V.status=91;if(V.status===91)if(V.gzhead.comment){F=V.pending;do{if(V.pending===V.pending_buf_size&&(V.gzhead.hcrc&&V.pending>F&&(v.adler=l(v.adler,V.pending_buf,V.pending-F,F)),q(v),F=V.pending,V.pending===V.pending_buf_size)){$=1;break}$=V.gzindex<V.gzhead.comment.length?255&V.gzhead.comment.charCodeAt(V.gzindex++):0,_e(V,$)}while($!==0);V.gzhead.hcrc&&V.pending>F&&(v.adler=l(v.adler,V.pending_buf,V.pending-F,F)),$===0&&(V.status=103)}else V.status=103;if(V.status===103&&(V.gzhead.hcrc?(V.pending+2>V.pending_buf_size&&q(v),V.pending+2<=V.pending_buf_size&&(_e(V,255&v.adler),_e(V,v.adler>>8&255),v.adler=0,V.status=z)):V.status=z),V.pending!==0){if(q(v),v.avail_out===0)return V.last_flush=-1,d}else if(v.avail_in===0&&Q(me)<=Q(re)&&me!==p)return J(v,-5);if(V.status===666&&v.avail_in!==0)return J(v,-5);if(v.avail_in!==0||V.lookahead!==0||me!==h&&V.status!==666){var P=V.strategy===2?function(M,G){for(var se;;){if(M.lookahead===0&&(ce(M),M.lookahead===0)){if(G===h)return b;break}if(M.match_length=0,se=a._tr_tally(M,0,M.window[M.strstart]),M.lookahead--,M.strstart++,se&&(K(M,!1),M.strm.avail_out===0))return b}return M.insert=0,G===p?(K(M,!0),M.strm.avail_out===0?H:Z):M.last_lit&&(K(M,!1),M.strm.avail_out===0)?b:W}(V,me):V.strategy===3?function(M,G){for(var se,ne,oe,Te,ye=M.window;;){if(M.lookahead<=w){if(ce(M),M.lookahead<=w&&G===h)return b;if(M.lookahead===0)break}if(M.match_length=0,M.lookahead>=E&&0<M.strstart&&(ne=ye[oe=M.strstart-1])===ye[++oe]&&ne===ye[++oe]&&ne===ye[++oe]){Te=M.strstart+w;do;while(ne===ye[++oe]&&ne===ye[++oe]&&ne===ye[++oe]&&ne===ye[++oe]&&ne===ye[++oe]&&ne===ye[++oe]&&ne===ye[++oe]&&ne===ye[++oe]&&oe<Te);M.match_length=w-(Te-oe),M.match_length>M.lookahead&&(M.match_length=M.lookahead)}if(M.match_length>=E?(se=a._tr_tally(M,1,M.match_length-E),M.lookahead-=M.match_length,M.strstart+=M.match_length,M.match_length=0):(se=a._tr_tally(M,0,M.window[M.strstart]),M.lookahead--,M.strstart++),se&&(K(M,!1),M.strm.avail_out===0))return b}return M.insert=0,G===p?(K(M,!0),M.strm.avail_out===0?H:Z):M.last_lit&&(K(M,!1),M.strm.avail_out===0)?b:W}(V,me):r[V.level].func(V,me);if(P!==H&&P!==Z||(V.status=666),P===b||P===H)return v.avail_out===0&&(V.last_flush=-1),d;if(P===W&&(me===1?a._tr_align(V):me!==5&&(a._tr_stored_block(V,0,0,!1),me===3&&(fe(V.head),V.lookahead===0&&(V.strstart=0,V.block_start=0,V.insert=0))),q(v),v.avail_out===0))return V.last_flush=-1,d}return me!==p?d:V.wrap<=0?1:(V.wrap===2?(_e(V,255&v.adler),_e(V,v.adler>>8&255),_e(V,v.adler>>16&255),_e(V,v.adler>>24&255),_e(V,255&v.total_in),_e(V,v.total_in>>8&255),_e(V,v.total_in>>16&255),_e(V,v.total_in>>24&255)):(j(V,v.adler>>>16),j(V,65535&v.adler)),q(v),0<V.wrap&&(V.wrap=-V.wrap),V.pending!==0?d:1)},i.deflateEnd=function(v){var me;return v&&v.state?(me=v.state.status)!==R&&me!==69&&me!==73&&me!==91&&me!==103&&me!==z&&me!==666?J(v,_):(v.state=null,me===z?J(v,-3):d):_},i.deflateSetDictionary=function(v,me){var re,V,F,$,ae,P,M,G,se=me.length;if(!v||!v.state||($=(re=v.state).wrap)===2||$===1&&re.status!==R||re.lookahead)return _;for($===1&&(v.adler=c(v.adler,me,se,0)),re.wrap=0,se>=re.w_size&&($===0&&(fe(re.head),re.strstart=0,re.block_start=0,re.insert=0),G=new o.Buf8(re.w_size),o.arraySet(G,me,se-re.w_size,re.w_size,0),me=G,se=re.w_size),ae=v.avail_in,P=v.next_in,M=v.input,v.avail_in=se,v.next_in=0,v.input=me,ce(re);re.lookahead>=E;){for(V=re.strstart,F=re.lookahead-(E-1);re.ins_h=(re.ins_h<<re.hash_shift^re.window[V+E-1])&re.hash_mask,re.prev[V&re.w_mask]=re.head[re.ins_h],re.head[re.ins_h]=V,V++,--F;);re.strstart=V,re.lookahead=E-1,ce(re)}return re.strstart+=re.lookahead,re.block_start=re.strstart,re.insert=re.lookahead,re.lookahead=0,re.match_length=re.prev_length=E-1,re.match_available=0,v.next_in=P,v.input=M,v.avail_in=ae,re.wrap=$,d},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,n,i){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,n,i){n.exports=function(r,o){var a,c,l,u,h,p,d,_,g,m,f,x,S,y,C,I,L,N,E,w,B,R,z,b,W;a=r.state,c=r.next_in,b=r.input,l=c+(r.avail_in-5),u=r.next_out,W=r.output,h=u-(o-r.avail_out),p=u+(r.avail_out-257),d=a.dmax,_=a.wsize,g=a.whave,m=a.wnext,f=a.window,x=a.hold,S=a.bits,y=a.lencode,C=a.distcode,I=(1<<a.lenbits)-1,L=(1<<a.distbits)-1;e:do{S<15&&(x+=b[c++]<<S,S+=8,x+=b[c++]<<S,S+=8),N=y[x&I];t:for(;;){if(x>>>=E=N>>>24,S-=E,(E=N>>>16&255)===0)W[u++]=65535&N;else{if(!(16&E)){if(!(64&E)){N=y[(65535&N)+(x&(1<<E)-1)];continue t}if(32&E){a.mode=12;break e}r.msg="invalid literal/length code",a.mode=30;break e}w=65535&N,(E&=15)&&(S<E&&(x+=b[c++]<<S,S+=8),w+=x&(1<<E)-1,x>>>=E,S-=E),S<15&&(x+=b[c++]<<S,S+=8,x+=b[c++]<<S,S+=8),N=C[x&L];n:for(;;){if(x>>>=E=N>>>24,S-=E,!(16&(E=N>>>16&255))){if(!(64&E)){N=C[(65535&N)+(x&(1<<E)-1)];continue n}r.msg="invalid distance code",a.mode=30;break e}if(B=65535&N,S<(E&=15)&&(x+=b[c++]<<S,(S+=8)<E&&(x+=b[c++]<<S,S+=8)),d<(B+=x&(1<<E)-1)){r.msg="invalid distance too far back",a.mode=30;break e}if(x>>>=E,S-=E,(E=u-h)<B){if(g<(E=B-E)&&a.sane){r.msg="invalid distance too far back",a.mode=30;break e}if(z=f,(R=0)===m){if(R+=_-E,E<w){for(w-=E;W[u++]=f[R++],--E;);R=u-B,z=W}}else if(m<E){if(R+=_+m-E,(E-=m)<w){for(w-=E;W[u++]=f[R++],--E;);if(R=0,m<w){for(w-=E=m;W[u++]=f[R++],--E;);R=u-B,z=W}}}else if(R+=m-E,E<w){for(w-=E;W[u++]=f[R++],--E;);R=u-B,z=W}for(;2<w;)W[u++]=z[R++],W[u++]=z[R++],W[u++]=z[R++],w-=3;w&&(W[u++]=z[R++],1<w&&(W[u++]=z[R++]))}else{for(R=u-B;W[u++]=W[R++],W[u++]=W[R++],W[u++]=W[R++],2<(w-=3););w&&(W[u++]=W[R++],1<w&&(W[u++]=W[R++]))}break}}break}}while(c<l&&u<p);c-=w=S>>3,x&=(1<<(S-=w<<3))-1,r.next_in=c,r.next_out=u,r.avail_in=c<l?l-c+5:5-(c-l),r.avail_out=u<p?p-u+257:257-(u-p),a.hold=x,a.bits=S}},{}],49:[function(t,n,i){var r=t("../utils/common"),o=t("./adler32"),a=t("./crc32"),c=t("./inffast"),l=t("./inftrees"),u=1,h=2,p=0,d=-2,_=1,g=852,m=592;function f(R){return(R>>>24&255)+(R>>>8&65280)+((65280&R)<<8)+((255&R)<<24)}function x(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function S(R){var z;return R&&R.state?(z=R.state,R.total_in=R.total_out=z.total=0,R.msg="",z.wrap&&(R.adler=1&z.wrap),z.mode=_,z.last=0,z.havedict=0,z.dmax=32768,z.head=null,z.hold=0,z.bits=0,z.lencode=z.lendyn=new r.Buf32(g),z.distcode=z.distdyn=new r.Buf32(m),z.sane=1,z.back=-1,p):d}function y(R){var z;return R&&R.state?((z=R.state).wsize=0,z.whave=0,z.wnext=0,S(R)):d}function C(R,z){var b,W;return R&&R.state?(W=R.state,z<0?(b=0,z=-z):(b=1+(z>>4),z<48&&(z&=15)),z&&(z<8||15<z)?d:(W.window!==null&&W.wbits!==z&&(W.window=null),W.wrap=b,W.wbits=z,y(R))):d}function I(R,z){var b,W;return R?(W=new x,(R.state=W).window=null,(b=C(R,z))!==p&&(R.state=null),b):d}var L,N,E=!0;function w(R){if(E){var z;for(L=new r.Buf32(512),N=new r.Buf32(32),z=0;z<144;)R.lens[z++]=8;for(;z<256;)R.lens[z++]=9;for(;z<280;)R.lens[z++]=7;for(;z<288;)R.lens[z++]=8;for(l(u,R.lens,0,288,L,0,R.work,{bits:9}),z=0;z<32;)R.lens[z++]=5;l(h,R.lens,0,32,N,0,R.work,{bits:5}),E=!1}R.lencode=L,R.lenbits=9,R.distcode=N,R.distbits=5}function B(R,z,b,W){var H,Z=R.state;return Z.window===null&&(Z.wsize=1<<Z.wbits,Z.wnext=0,Z.whave=0,Z.window=new r.Buf8(Z.wsize)),W>=Z.wsize?(r.arraySet(Z.window,z,b-Z.wsize,Z.wsize,0),Z.wnext=0,Z.whave=Z.wsize):(W<(H=Z.wsize-Z.wnext)&&(H=W),r.arraySet(Z.window,z,b-W,H,Z.wnext),(W-=H)?(r.arraySet(Z.window,z,b-W,W,0),Z.wnext=W,Z.whave=Z.wsize):(Z.wnext+=H,Z.wnext===Z.wsize&&(Z.wnext=0),Z.whave<Z.wsize&&(Z.whave+=H))),0}i.inflateReset=y,i.inflateReset2=C,i.inflateResetKeep=S,i.inflateInit=function(R){return I(R,15)},i.inflateInit2=I,i.inflate=function(R,z){var b,W,H,Z,J,Q,fe,q,K,_e,j,Y,ce,de,xe,we,Be,Qe,tt,pt,v,me,re,V,F=0,$=new r.Buf8(4),ae=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!R||!R.state||!R.output||!R.input&&R.avail_in!==0)return d;(b=R.state).mode===12&&(b.mode=13),J=R.next_out,H=R.output,fe=R.avail_out,Z=R.next_in,W=R.input,Q=R.avail_in,q=b.hold,K=b.bits,_e=Q,j=fe,me=p;e:for(;;)switch(b.mode){case _:if(b.wrap===0){b.mode=13;break}for(;K<16;){if(Q===0)break e;Q--,q+=W[Z++]<<K,K+=8}if(2&b.wrap&&q===35615){$[b.check=0]=255&q,$[1]=q>>>8&255,b.check=a(b.check,$,2,0),K=q=0,b.mode=2;break}if(b.flags=0,b.head&&(b.head.done=!1),!(1&b.wrap)||(((255&q)<<8)+(q>>8))%31){R.msg="incorrect header check",b.mode=30;break}if((15&q)!=8){R.msg="unknown compression method",b.mode=30;break}if(K-=4,v=8+(15&(q>>>=4)),b.wbits===0)b.wbits=v;else if(v>b.wbits){R.msg="invalid window size",b.mode=30;break}b.dmax=1<<v,R.adler=b.check=1,b.mode=512&q?10:12,K=q=0;break;case 2:for(;K<16;){if(Q===0)break e;Q--,q+=W[Z++]<<K,K+=8}if(b.flags=q,(255&b.flags)!=8){R.msg="unknown compression method",b.mode=30;break}if(57344&b.flags){R.msg="unknown header flags set",b.mode=30;break}b.head&&(b.head.text=q>>8&1),512&b.flags&&($[0]=255&q,$[1]=q>>>8&255,b.check=a(b.check,$,2,0)),K=q=0,b.mode=3;case 3:for(;K<32;){if(Q===0)break e;Q--,q+=W[Z++]<<K,K+=8}b.head&&(b.head.time=q),512&b.flags&&($[0]=255&q,$[1]=q>>>8&255,$[2]=q>>>16&255,$[3]=q>>>24&255,b.check=a(b.check,$,4,0)),K=q=0,b.mode=4;case 4:for(;K<16;){if(Q===0)break e;Q--,q+=W[Z++]<<K,K+=8}b.head&&(b.head.xflags=255&q,b.head.os=q>>8),512&b.flags&&($[0]=255&q,$[1]=q>>>8&255,b.check=a(b.check,$,2,0)),K=q=0,b.mode=5;case 5:if(1024&b.flags){for(;K<16;){if(Q===0)break e;Q--,q+=W[Z++]<<K,K+=8}b.length=q,b.head&&(b.head.extra_len=q),512&b.flags&&($[0]=255&q,$[1]=q>>>8&255,b.check=a(b.check,$,2,0)),K=q=0}else b.head&&(b.head.extra=null);b.mode=6;case 6:if(1024&b.flags&&(Q<(Y=b.length)&&(Y=Q),Y&&(b.head&&(v=b.head.extra_len-b.length,b.head.extra||(b.head.extra=new Array(b.head.extra_len)),r.arraySet(b.head.extra,W,Z,Y,v)),512&b.flags&&(b.check=a(b.check,W,Y,Z)),Q-=Y,Z+=Y,b.length-=Y),b.length))break e;b.length=0,b.mode=7;case 7:if(2048&b.flags){if(Q===0)break e;for(Y=0;v=W[Z+Y++],b.head&&v&&b.length<65536&&(b.head.name+=String.fromCharCode(v)),v&&Y<Q;);if(512&b.flags&&(b.check=a(b.check,W,Y,Z)),Q-=Y,Z+=Y,v)break e}else b.head&&(b.head.name=null);b.length=0,b.mode=8;case 8:if(4096&b.flags){if(Q===0)break e;for(Y=0;v=W[Z+Y++],b.head&&v&&b.length<65536&&(b.head.comment+=String.fromCharCode(v)),v&&Y<Q;);if(512&b.flags&&(b.check=a(b.check,W,Y,Z)),Q-=Y,Z+=Y,v)break e}else b.head&&(b.head.comment=null);b.mode=9;case 9:if(512&b.flags){for(;K<16;){if(Q===0)break e;Q--,q+=W[Z++]<<K,K+=8}if(q!==(65535&b.check)){R.msg="header crc mismatch",b.mode=30;break}K=q=0}b.head&&(b.head.hcrc=b.flags>>9&1,b.head.done=!0),R.adler=b.check=0,b.mode=12;break;case 10:for(;K<32;){if(Q===0)break e;Q--,q+=W[Z++]<<K,K+=8}R.adler=b.check=f(q),K=q=0,b.mode=11;case 11:if(b.havedict===0)return R.next_out=J,R.avail_out=fe,R.next_in=Z,R.avail_in=Q,b.hold=q,b.bits=K,2;R.adler=b.check=1,b.mode=12;case 12:if(z===5||z===6)break e;case 13:if(b.last){q>>>=7&K,K-=7&K,b.mode=27;break}for(;K<3;){if(Q===0)break e;Q--,q+=W[Z++]<<K,K+=8}switch(b.last=1&q,K-=1,3&(q>>>=1)){case 0:b.mode=14;break;case 1:if(w(b),b.mode=20,z!==6)break;q>>>=2,K-=2;break e;case 2:b.mode=17;break;case 3:R.msg="invalid block type",b.mode=30}q>>>=2,K-=2;break;case 14:for(q>>>=7&K,K-=7&K;K<32;){if(Q===0)break e;Q--,q+=W[Z++]<<K,K+=8}if((65535&q)!=(q>>>16^65535)){R.msg="invalid stored block lengths",b.mode=30;break}if(b.length=65535&q,K=q=0,b.mode=15,z===6)break e;case 15:b.mode=16;case 16:if(Y=b.length){if(Q<Y&&(Y=Q),fe<Y&&(Y=fe),Y===0)break e;r.arraySet(H,W,Z,Y,J),Q-=Y,Z+=Y,fe-=Y,J+=Y,b.length-=Y;break}b.mode=12;break;case 17:for(;K<14;){if(Q===0)break e;Q--,q+=W[Z++]<<K,K+=8}if(b.nlen=257+(31&q),q>>>=5,K-=5,b.ndist=1+(31&q),q>>>=5,K-=5,b.ncode=4+(15&q),q>>>=4,K-=4,286<b.nlen||30<b.ndist){R.msg="too many length or distance symbols",b.mode=30;break}b.have=0,b.mode=18;case 18:for(;b.have<b.ncode;){for(;K<3;){if(Q===0)break e;Q--,q+=W[Z++]<<K,K+=8}b.lens[ae[b.have++]]=7&q,q>>>=3,K-=3}for(;b.have<19;)b.lens[ae[b.have++]]=0;if(b.lencode=b.lendyn,b.lenbits=7,re={bits:b.lenbits},me=l(0,b.lens,0,19,b.lencode,0,b.work,re),b.lenbits=re.bits,me){R.msg="invalid code lengths set",b.mode=30;break}b.have=0,b.mode=19;case 19:for(;b.have<b.nlen+b.ndist;){for(;we=(F=b.lencode[q&(1<<b.lenbits)-1])>>>16&255,Be=65535&F,!((xe=F>>>24)<=K);){if(Q===0)break e;Q--,q+=W[Z++]<<K,K+=8}if(Be<16)q>>>=xe,K-=xe,b.lens[b.have++]=Be;else{if(Be===16){for(V=xe+2;K<V;){if(Q===0)break e;Q--,q+=W[Z++]<<K,K+=8}if(q>>>=xe,K-=xe,b.have===0){R.msg="invalid bit length repeat",b.mode=30;break}v=b.lens[b.have-1],Y=3+(3&q),q>>>=2,K-=2}else if(Be===17){for(V=xe+3;K<V;){if(Q===0)break e;Q--,q+=W[Z++]<<K,K+=8}K-=xe,v=0,Y=3+(7&(q>>>=xe)),q>>>=3,K-=3}else{for(V=xe+7;K<V;){if(Q===0)break e;Q--,q+=W[Z++]<<K,K+=8}K-=xe,v=0,Y=11+(127&(q>>>=xe)),q>>>=7,K-=7}if(b.have+Y>b.nlen+b.ndist){R.msg="invalid bit length repeat",b.mode=30;break}for(;Y--;)b.lens[b.have++]=v}}if(b.mode===30)break;if(b.lens[256]===0){R.msg="invalid code -- missing end-of-block",b.mode=30;break}if(b.lenbits=9,re={bits:b.lenbits},me=l(u,b.lens,0,b.nlen,b.lencode,0,b.work,re),b.lenbits=re.bits,me){R.msg="invalid literal/lengths set",b.mode=30;break}if(b.distbits=6,b.distcode=b.distdyn,re={bits:b.distbits},me=l(h,b.lens,b.nlen,b.ndist,b.distcode,0,b.work,re),b.distbits=re.bits,me){R.msg="invalid distances set",b.mode=30;break}if(b.mode=20,z===6)break e;case 20:b.mode=21;case 21:if(6<=Q&&258<=fe){R.next_out=J,R.avail_out=fe,R.next_in=Z,R.avail_in=Q,b.hold=q,b.bits=K,c(R,j),J=R.next_out,H=R.output,fe=R.avail_out,Z=R.next_in,W=R.input,Q=R.avail_in,q=b.hold,K=b.bits,b.mode===12&&(b.back=-1);break}for(b.back=0;we=(F=b.lencode[q&(1<<b.lenbits)-1])>>>16&255,Be=65535&F,!((xe=F>>>24)<=K);){if(Q===0)break e;Q--,q+=W[Z++]<<K,K+=8}if(we&&!(240&we)){for(Qe=xe,tt=we,pt=Be;we=(F=b.lencode[pt+((q&(1<<Qe+tt)-1)>>Qe)])>>>16&255,Be=65535&F,!(Qe+(xe=F>>>24)<=K);){if(Q===0)break e;Q--,q+=W[Z++]<<K,K+=8}q>>>=Qe,K-=Qe,b.back+=Qe}if(q>>>=xe,K-=xe,b.back+=xe,b.length=Be,we===0){b.mode=26;break}if(32&we){b.back=-1,b.mode=12;break}if(64&we){R.msg="invalid literal/length code",b.mode=30;break}b.extra=15&we,b.mode=22;case 22:if(b.extra){for(V=b.extra;K<V;){if(Q===0)break e;Q--,q+=W[Z++]<<K,K+=8}b.length+=q&(1<<b.extra)-1,q>>>=b.extra,K-=b.extra,b.back+=b.extra}b.was=b.length,b.mode=23;case 23:for(;we=(F=b.distcode[q&(1<<b.distbits)-1])>>>16&255,Be=65535&F,!((xe=F>>>24)<=K);){if(Q===0)break e;Q--,q+=W[Z++]<<K,K+=8}if(!(240&we)){for(Qe=xe,tt=we,pt=Be;we=(F=b.distcode[pt+((q&(1<<Qe+tt)-1)>>Qe)])>>>16&255,Be=65535&F,!(Qe+(xe=F>>>24)<=K);){if(Q===0)break e;Q--,q+=W[Z++]<<K,K+=8}q>>>=Qe,K-=Qe,b.back+=Qe}if(q>>>=xe,K-=xe,b.back+=xe,64&we){R.msg="invalid distance code",b.mode=30;break}b.offset=Be,b.extra=15&we,b.mode=24;case 24:if(b.extra){for(V=b.extra;K<V;){if(Q===0)break e;Q--,q+=W[Z++]<<K,K+=8}b.offset+=q&(1<<b.extra)-1,q>>>=b.extra,K-=b.extra,b.back+=b.extra}if(b.offset>b.dmax){R.msg="invalid distance too far back",b.mode=30;break}b.mode=25;case 25:if(fe===0)break e;if(Y=j-fe,b.offset>Y){if((Y=b.offset-Y)>b.whave&&b.sane){R.msg="invalid distance too far back",b.mode=30;break}ce=Y>b.wnext?(Y-=b.wnext,b.wsize-Y):b.wnext-Y,Y>b.length&&(Y=b.length),de=b.window}else de=H,ce=J-b.offset,Y=b.length;for(fe<Y&&(Y=fe),fe-=Y,b.length-=Y;H[J++]=de[ce++],--Y;);b.length===0&&(b.mode=21);break;case 26:if(fe===0)break e;H[J++]=b.length,fe--,b.mode=21;break;case 27:if(b.wrap){for(;K<32;){if(Q===0)break e;Q--,q|=W[Z++]<<K,K+=8}if(j-=fe,R.total_out+=j,b.total+=j,j&&(R.adler=b.check=b.flags?a(b.check,H,j,J-j):o(b.check,H,j,J-j)),j=fe,(b.flags?q:f(q))!==b.check){R.msg="incorrect data check",b.mode=30;break}K=q=0}b.mode=28;case 28:if(b.wrap&&b.flags){for(;K<32;){if(Q===0)break e;Q--,q+=W[Z++]<<K,K+=8}if(q!==(4294967295&b.total)){R.msg="incorrect length check",b.mode=30;break}K=q=0}b.mode=29;case 29:me=1;break e;case 30:me=-3;break e;case 31:return-4;case 32:default:return d}return R.next_out=J,R.avail_out=fe,R.next_in=Z,R.avail_in=Q,b.hold=q,b.bits=K,(b.wsize||j!==R.avail_out&&b.mode<30&&(b.mode<27||z!==4))&&B(R,R.output,R.next_out,j-R.avail_out)?(b.mode=31,-4):(_e-=R.avail_in,j-=R.avail_out,R.total_in+=_e,R.total_out+=j,b.total+=j,b.wrap&&j&&(R.adler=b.check=b.flags?a(b.check,H,j,R.next_out-j):o(b.check,H,j,R.next_out-j)),R.data_type=b.bits+(b.last?64:0)+(b.mode===12?128:0)+(b.mode===20||b.mode===15?256:0),(_e==0&&j===0||z===4)&&me===p&&(me=-5),me)},i.inflateEnd=function(R){if(!R||!R.state)return d;var z=R.state;return z.window&&(z.window=null),R.state=null,p},i.inflateGetHeader=function(R,z){var b;return R&&R.state&&2&(b=R.state).wrap?((b.head=z).done=!1,p):d},i.inflateSetDictionary=function(R,z){var b,W=z.length;return R&&R.state?(b=R.state).wrap!==0&&b.mode!==11?d:b.mode===11&&o(1,z,W,0)!==b.check?-3:B(R,z,W,W)?(b.mode=31,-4):(b.havedict=1,p):d},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,n,i){var r=t("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],l=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(u,h,p,d,_,g,m,f){var x,S,y,C,I,L,N,E,w,B=f.bits,R=0,z=0,b=0,W=0,H=0,Z=0,J=0,Q=0,fe=0,q=0,K=null,_e=0,j=new r.Buf16(16),Y=new r.Buf16(16),ce=null,de=0;for(R=0;R<=15;R++)j[R]=0;for(z=0;z<d;z++)j[h[p+z]]++;for(H=B,W=15;1<=W&&j[W]===0;W--);if(W<H&&(H=W),W===0)return _[g++]=20971520,_[g++]=20971520,f.bits=1,0;for(b=1;b<W&&j[b]===0;b++);for(H<b&&(H=b),R=Q=1;R<=15;R++)if(Q<<=1,(Q-=j[R])<0)return-1;if(0<Q&&(u===0||W!==1))return-1;for(Y[1]=0,R=1;R<15;R++)Y[R+1]=Y[R]+j[R];for(z=0;z<d;z++)h[p+z]!==0&&(m[Y[h[p+z]]++]=z);if(L=u===0?(K=ce=m,19):u===1?(K=o,_e-=257,ce=a,de-=257,256):(K=c,ce=l,-1),R=b,I=g,J=z=q=0,y=-1,C=(fe=1<<(Z=H))-1,u===1&&852<fe||u===2&&592<fe)return 1;for(;;){for(N=R-J,w=m[z]<L?(E=0,m[z]):m[z]>L?(E=ce[de+m[z]],K[_e+m[z]]):(E=96,0),x=1<<R-J,b=S=1<<Z;_[I+(q>>J)+(S-=x)]=N<<24|E<<16|w|0,S!==0;);for(x=1<<R-1;q&x;)x>>=1;if(x!==0?(q&=x-1,q+=x):q=0,z++,--j[R]==0){if(R===W)break;R=h[p+m[z]]}if(H<R&&(q&C)!==y){for(J===0&&(J=H),I+=b,Q=1<<(Z=R-J);Z+J<W&&!((Q-=j[Z+J])<=0);)Z++,Q<<=1;if(fe+=1<<Z,u===1&&852<fe||u===2&&592<fe)return 1;_[y=q&C]=H<<24|Z<<16|I-g|0}}return q!==0&&(_[I+q]=R-J<<24|64<<16|0),f.bits=H,0}},{"../utils/common":41}],51:[function(t,n,i){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,n,i){var r=t("../utils/common"),o=0,a=1;function c(F){for(var $=F.length;0<=--$;)F[$]=0}var l=0,u=29,h=256,p=h+1+u,d=30,_=19,g=2*p+1,m=15,f=16,x=7,S=256,y=16,C=17,I=18,L=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],N=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],E=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],B=new Array(2*(p+2));c(B);var R=new Array(2*d);c(R);var z=new Array(512);c(z);var b=new Array(256);c(b);var W=new Array(u);c(W);var H,Z,J,Q=new Array(d);function fe(F,$,ae,P,M){this.static_tree=F,this.extra_bits=$,this.extra_base=ae,this.elems=P,this.max_length=M,this.has_stree=F&&F.length}function q(F,$){this.dyn_tree=F,this.max_code=0,this.stat_desc=$}function K(F){return F<256?z[F]:z[256+(F>>>7)]}function _e(F,$){F.pending_buf[F.pending++]=255&$,F.pending_buf[F.pending++]=$>>>8&255}function j(F,$,ae){F.bi_valid>f-ae?(F.bi_buf|=$<<F.bi_valid&65535,_e(F,F.bi_buf),F.bi_buf=$>>f-F.bi_valid,F.bi_valid+=ae-f):(F.bi_buf|=$<<F.bi_valid&65535,F.bi_valid+=ae)}function Y(F,$,ae){j(F,ae[2*$],ae[2*$+1])}function ce(F,$){for(var ae=0;ae|=1&F,F>>>=1,ae<<=1,0<--$;);return ae>>>1}function de(F,$,ae){var P,M,G=new Array(m+1),se=0;for(P=1;P<=m;P++)G[P]=se=se+ae[P-1]<<1;for(M=0;M<=$;M++){var ne=F[2*M+1];ne!==0&&(F[2*M]=ce(G[ne]++,ne))}}function xe(F){var $;for($=0;$<p;$++)F.dyn_ltree[2*$]=0;for($=0;$<d;$++)F.dyn_dtree[2*$]=0;for($=0;$<_;$++)F.bl_tree[2*$]=0;F.dyn_ltree[2*S]=1,F.opt_len=F.static_len=0,F.last_lit=F.matches=0}function we(F){8<F.bi_valid?_e(F,F.bi_buf):0<F.bi_valid&&(F.pending_buf[F.pending++]=F.bi_buf),F.bi_buf=0,F.bi_valid=0}function Be(F,$,ae,P){var M=2*$,G=2*ae;return F[M]<F[G]||F[M]===F[G]&&P[$]<=P[ae]}function Qe(F,$,ae){for(var P=F.heap[ae],M=ae<<1;M<=F.heap_len&&(M<F.heap_len&&Be($,F.heap[M+1],F.heap[M],F.depth)&&M++,!Be($,P,F.heap[M],F.depth));)F.heap[ae]=F.heap[M],ae=M,M<<=1;F.heap[ae]=P}function tt(F,$,ae){var P,M,G,se,ne=0;if(F.last_lit!==0)for(;P=F.pending_buf[F.d_buf+2*ne]<<8|F.pending_buf[F.d_buf+2*ne+1],M=F.pending_buf[F.l_buf+ne],ne++,P===0?Y(F,M,$):(Y(F,(G=b[M])+h+1,$),(se=L[G])!==0&&j(F,M-=W[G],se),Y(F,G=K(--P),ae),(se=N[G])!==0&&j(F,P-=Q[G],se)),ne<F.last_lit;);Y(F,S,$)}function pt(F,$){var ae,P,M,G=$.dyn_tree,se=$.stat_desc.static_tree,ne=$.stat_desc.has_stree,oe=$.stat_desc.elems,Te=-1;for(F.heap_len=0,F.heap_max=g,ae=0;ae<oe;ae++)G[2*ae]!==0?(F.heap[++F.heap_len]=Te=ae,F.depth[ae]=0):G[2*ae+1]=0;for(;F.heap_len<2;)G[2*(M=F.heap[++F.heap_len]=Te<2?++Te:0)]=1,F.depth[M]=0,F.opt_len--,ne&&(F.static_len-=se[2*M+1]);for($.max_code=Te,ae=F.heap_len>>1;1<=ae;ae--)Qe(F,G,ae);for(M=oe;ae=F.heap[1],F.heap[1]=F.heap[F.heap_len--],Qe(F,G,1),P=F.heap[1],F.heap[--F.heap_max]=ae,F.heap[--F.heap_max]=P,G[2*M]=G[2*ae]+G[2*P],F.depth[M]=(F.depth[ae]>=F.depth[P]?F.depth[ae]:F.depth[P])+1,G[2*ae+1]=G[2*P+1]=M,F.heap[1]=M++,Qe(F,G,1),2<=F.heap_len;);F.heap[--F.heap_max]=F.heap[1],function(ye,Re){var ct,be,Oe,De,Ze,Fe,nt=Re.dyn_tree,it=Re.max_code,bt=Re.stat_desc.static_tree,te=Re.stat_desc.has_stree,Ce=Re.stat_desc.extra_bits,pe=Re.stat_desc.extra_base,ve=Re.stat_desc.max_length,Ie=0;for(De=0;De<=m;De++)ye.bl_count[De]=0;for(nt[2*ye.heap[ye.heap_max]+1]=0,ct=ye.heap_max+1;ct<g;ct++)ve<(De=nt[2*nt[2*(be=ye.heap[ct])+1]+1]+1)&&(De=ve,Ie++),nt[2*be+1]=De,it<be||(ye.bl_count[De]++,Ze=0,pe<=be&&(Ze=Ce[be-pe]),Fe=nt[2*be],ye.opt_len+=Fe*(De+Ze),te&&(ye.static_len+=Fe*(bt[2*be+1]+Ze)));if(Ie!==0){do{for(De=ve-1;ye.bl_count[De]===0;)De--;ye.bl_count[De]--,ye.bl_count[De+1]+=2,ye.bl_count[ve]--,Ie-=2}while(0<Ie);for(De=ve;De!==0;De--)for(be=ye.bl_count[De];be!==0;)it<(Oe=ye.heap[--ct])||(nt[2*Oe+1]!==De&&(ye.opt_len+=(De-nt[2*Oe+1])*nt[2*Oe],nt[2*Oe+1]=De),be--)}}(F,$),de(G,Te,F.bl_count)}function v(F,$,ae){var P,M,G=-1,se=$[1],ne=0,oe=7,Te=4;for(se===0&&(oe=138,Te=3),$[2*(ae+1)+1]=65535,P=0;P<=ae;P++)M=se,se=$[2*(P+1)+1],++ne<oe&&M===se||(ne<Te?F.bl_tree[2*M]+=ne:M!==0?(M!==G&&F.bl_tree[2*M]++,F.bl_tree[2*y]++):ne<=10?F.bl_tree[2*C]++:F.bl_tree[2*I]++,G=M,Te=(ne=0)===se?(oe=138,3):M===se?(oe=6,3):(oe=7,4))}function me(F,$,ae){var P,M,G=-1,se=$[1],ne=0,oe=7,Te=4;for(se===0&&(oe=138,Te=3),P=0;P<=ae;P++)if(M=se,se=$[2*(P+1)+1],!(++ne<oe&&M===se)){if(ne<Te)for(;Y(F,M,F.bl_tree),--ne!=0;);else M!==0?(M!==G&&(Y(F,M,F.bl_tree),ne--),Y(F,y,F.bl_tree),j(F,ne-3,2)):ne<=10?(Y(F,C,F.bl_tree),j(F,ne-3,3)):(Y(F,I,F.bl_tree),j(F,ne-11,7));G=M,Te=(ne=0)===se?(oe=138,3):M===se?(oe=6,3):(oe=7,4)}}c(Q);var re=!1;function V(F,$,ae,P){j(F,(l<<1)+(P?1:0),3),function(M,G,se,ne){we(M),_e(M,se),_e(M,~se),r.arraySet(M.pending_buf,M.window,G,se,M.pending),M.pending+=se}(F,$,ae)}i._tr_init=function(F){re||(function(){var $,ae,P,M,G,se=new Array(m+1);for(M=P=0;M<u-1;M++)for(W[M]=P,$=0;$<1<<L[M];$++)b[P++]=M;for(b[P-1]=M,M=G=0;M<16;M++)for(Q[M]=G,$=0;$<1<<N[M];$++)z[G++]=M;for(G>>=7;M<d;M++)for(Q[M]=G<<7,$=0;$<1<<N[M]-7;$++)z[256+G++]=M;for(ae=0;ae<=m;ae++)se[ae]=0;for($=0;$<=143;)B[2*$+1]=8,$++,se[8]++;for(;$<=255;)B[2*$+1]=9,$++,se[9]++;for(;$<=279;)B[2*$+1]=7,$++,se[7]++;for(;$<=287;)B[2*$+1]=8,$++,se[8]++;for(de(B,p+1,se),$=0;$<d;$++)R[2*$+1]=5,R[2*$]=ce($,5);H=new fe(B,L,h+1,p,m),Z=new fe(R,N,0,d,m),J=new fe(new Array(0),E,0,_,x)}(),re=!0),F.l_desc=new q(F.dyn_ltree,H),F.d_desc=new q(F.dyn_dtree,Z),F.bl_desc=new q(F.bl_tree,J),F.bi_buf=0,F.bi_valid=0,xe(F)},i._tr_stored_block=V,i._tr_flush_block=function(F,$,ae,P){var M,G,se=0;0<F.level?(F.strm.data_type===2&&(F.strm.data_type=function(ne){var oe,Te=4093624447;for(oe=0;oe<=31;oe++,Te>>>=1)if(1&Te&&ne.dyn_ltree[2*oe]!==0)return o;if(ne.dyn_ltree[18]!==0||ne.dyn_ltree[20]!==0||ne.dyn_ltree[26]!==0)return a;for(oe=32;oe<h;oe++)if(ne.dyn_ltree[2*oe]!==0)return a;return o}(F)),pt(F,F.l_desc),pt(F,F.d_desc),se=function(ne){var oe;for(v(ne,ne.dyn_ltree,ne.l_desc.max_code),v(ne,ne.dyn_dtree,ne.d_desc.max_code),pt(ne,ne.bl_desc),oe=_-1;3<=oe&&ne.bl_tree[2*w[oe]+1]===0;oe--);return ne.opt_len+=3*(oe+1)+5+5+4,oe}(F),M=F.opt_len+3+7>>>3,(G=F.static_len+3+7>>>3)<=M&&(M=G)):M=G=ae+5,ae+4<=M&&$!==-1?V(F,$,ae,P):F.strategy===4||G===M?(j(F,2+(P?1:0),3),tt(F,B,R)):(j(F,4+(P?1:0),3),function(ne,oe,Te,ye){var Re;for(j(ne,oe-257,5),j(ne,Te-1,5),j(ne,ye-4,4),Re=0;Re<ye;Re++)j(ne,ne.bl_tree[2*w[Re]+1],3);me(ne,ne.dyn_ltree,oe-1),me(ne,ne.dyn_dtree,Te-1)}(F,F.l_desc.max_code+1,F.d_desc.max_code+1,se+1),tt(F,F.dyn_ltree,F.dyn_dtree)),xe(F),P&&we(F)},i._tr_tally=function(F,$,ae){return F.pending_buf[F.d_buf+2*F.last_lit]=$>>>8&255,F.pending_buf[F.d_buf+2*F.last_lit+1]=255&$,F.pending_buf[F.l_buf+F.last_lit]=255&ae,F.last_lit++,$===0?F.dyn_ltree[2*ae]++:(F.matches++,$--,F.dyn_ltree[2*(b[ae]+h+1)]++,F.dyn_dtree[2*K($)]++),F.last_lit===F.lit_bufsize-1},i._tr_align=function(F){j(F,2,3),Y(F,S,B),function($){$.bi_valid===16?(_e($,$.bi_buf),$.bi_buf=0,$.bi_valid=0):8<=$.bi_valid&&($.pending_buf[$.pending++]=255&$.bi_buf,$.bi_buf>>=8,$.bi_valid-=8)}(F)}},{"../utils/common":41}],53:[function(t,n,i){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,n,i){(function(r){(function(o,a){if(!o.setImmediate){var c,l,u,h,p=1,d={},_=!1,g=o.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(o);m=m&&m.setTimeout?m:o,c={}.toString.call(o.process)==="[object process]"?function(y){process.nextTick(function(){x(y)})}:function(){if(o.postMessage&&!o.importScripts){var y=!0,C=o.onmessage;return o.onmessage=function(){y=!1},o.postMessage("","*"),o.onmessage=C,y}}()?(h="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",S,!1):o.attachEvent("onmessage",S),function(y){o.postMessage(h+y,"*")}):o.MessageChannel?((u=new MessageChannel).port1.onmessage=function(y){x(y.data)},function(y){u.port2.postMessage(y)}):g&&"onreadystatechange"in g.createElement("script")?(l=g.documentElement,function(y){var C=g.createElement("script");C.onreadystatechange=function(){x(y),C.onreadystatechange=null,l.removeChild(C),C=null},l.appendChild(C)}):function(y){setTimeout(x,0,y)},m.setImmediate=function(y){typeof y!="function"&&(y=new Function(""+y));for(var C=new Array(arguments.length-1),I=0;I<C.length;I++)C[I]=arguments[I+1];var L={callback:y,args:C};return d[p]=L,c(p),p++},m.clearImmediate=f}function f(y){delete d[y]}function x(y){if(_)setTimeout(x,0,y);else{var C=d[y];if(C){_=!0;try{(function(I){var L=I.callback,N=I.args;switch(N.length){case 0:L();break;case 1:L(N[0]);break;case 2:L(N[0],N[1]);break;case 3:L(N[0],N[1],N[2]);break;default:L.apply(a,N)}})(C)}finally{f(y),_=!1}}}}function S(y){y.source===o&&typeof y.data=="string"&&y.data.indexOf(h)===0&&x(+y.data.slice(h.length))}})(typeof self>"u"?r===void 0?this:r:self)}).call(this,typeof Xr<"u"?Xr:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})}(ca)),ca.exports}var Tv=wv();const Av=Ev(Tv);async function fh(s,e,t){try{const n=await Rv(s);return Cv(n,e,t)}catch(n){return Iv(n,`Error processing ZIP file at ${s}`),new Map}}async function Rv(s){const e=await fetch(s);if(!e.ok)throw new Error(`Failed to load ZIP file: ${e.statusText}`);const t=await e.arrayBuffer();return Av.loadAsync(t)}async function Cv(s,e,t){const n=new Map,i=Object.entries(s.files).filter(([r,o])=>o&&!o.dir&&r.endsWith(e));for(const[r,o]of i){const a=await o.async(t);n.set(r,a)}return n}function Iv(s,e){s instanceof Error?console.error(`${e}: ${s.message}`):console.error(`${e}: ${JSON.stringify(s)}`)}async function Lv(s,e){return fh(s,e,"text")}async function Pv(s,e){return fh(s,e,"arraybuffer")}function Dv(...s){const e=new Map;return s.forEach(t=>{t.forEach((n,i)=>{e.set(i,n)})}),e}async function ph(s,e,t){const n=await Promise.all(e.map(i=>t(s,i)));return Dv(...n)}async function Nv(){return await ph(dh,[".obj",".urdf"],Lv)}async function Uv(){return await ph(dh,[".png",".STL",".glb"],Pv)}async function Ov(){return{textFiles:await Nv(),binaryFiles:await Uv()}}async function Fv(){let s=null;try{s=await Ov(),console.log("ZIP file loaded and extracted successfully.",s)}catch(e){console.error("Error during ZIP loading:",e)}return s||{textFiles:new Map,binaryFiles:new Map}}const kv=/^[og]\s*(.+)?/,Bv=/^mtllib /,zv=/^usemtl /,Vv=/^usemap /,su=/\s+/,ru=new X,la=new X,ou=new X,au=new X,xn=new X,Yr=new Ke;function Hv(){const s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,r=this.object.geometry.vertices;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,r=this.object.geometry.normals;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,r=this.object.geometry.normals;ru.fromArray(i,e),la.fromArray(i,t),ou.fromArray(i,n),xn.subVectors(ou,la),au.subVectors(ru,la),xn.cross(au),xn.normalize(),r.push(xn.x,xn.y,xn.z),r.push(xn.x,xn.y,xn.z),r.push(xn.x,xn.y,xn.z)},addColor:function(e,t,n){const i=this.colors,r=this.object.geometry.colors;i[e]!==void 0&&r.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&r.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&r.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,r=this.object.geometry.uvs;r.push(i[e+0],i[e+1]),r.push(i[t+0],i[t+1]),r.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,r,o,a,c,l){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),p=this.parseVertexIndex(t,u),d=this.parseVertexIndex(n,u);if(this.addVertex(h,p,d),this.addColor(h,p,d),a!==void 0&&a!==""){const _=this.normals.length;h=this.parseNormalIndex(a,_),p=this.parseNormalIndex(c,_),d=this.parseNormalIndex(l,_),this.addNormal(h,p,d)}else this.addFaceNormal(h,p,d);if(i!==void 0&&i!==""){const _=this.uvs.length;h=this.parseUVIndex(i,_),p=this.parseUVIndex(r,_),d=this.parseUVIndex(o,_),this.addUV(h,p,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],i))}};return s.startObject("",!1),s}class Gv extends kn{constructor(e){super(e),this.materials=null}load(e,t,n,i){const r=this,o=new Us(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new Hv;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let a=0,c=n.length;a<c;a++){const l=n[a].trimStart();if(l.length===0)continue;const u=l.charAt(0);if(u!=="#")if(u==="v"){const h=l.split(su);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(Yr.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6]),It),t.colors.push(Yr.r,Yr.g,Yr.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const p=l.slice(1).trim().split(su),d=[];for(let g=0,m=p.length;g<m;g++){const f=p[g];if(f.length>0){const x=f.split("/");d.push(x)}}const _=d[0];for(let g=1,m=d.length-1;g<m;g++){const f=d[g],x=d[g+1];t.addFace(_[0],f[0],x[0],_[1],f[1],x[1],_[2],f[2],x[2])}}else if(u==="l"){const h=l.substring(1).trim().split(" ");let p=[];const d=[];if(l.indexOf("/")===-1)p=h;else for(let _=0,g=h.length;_<g;_++){const m=h[_].split("/");m[0]!==""&&p.push(m[0]),m[1]!==""&&d.push(m[1])}t.addLineGeometry(p,d)}else if(u==="p"){const p=l.slice(1).trim().split(" ");t.addPointGeometry(p)}else if((i=kv.exec(l))!==null){const h=(" "+i[0].slice(1).trim()).slice(1);t.startObject(h)}else if(zv.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(Bv.test(l))t.materialLibraries.push(l.substring(7).trim());else if(Vv.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(i=l.split(" "),i.length>1){const p=i[1].trim().toLowerCase();t.object.smooth=p!=="0"&&p!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const r=new Vn;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,c=t.objects.length;a<c;a++){const l=t.objects[a],u=l.geometry,h=l.materials,p=u.type==="Line",d=u.type==="Points";let _=!1;if(u.vertices.length===0)continue;const g=new jt;g.setAttribute("position",new Et(u.vertices,3)),u.normals.length>0&&g.setAttribute("normal",new Et(u.normals,3)),u.colors.length>0&&(_=!0,g.setAttribute("color",new Et(u.colors,3))),u.hasUVIndices===!0&&g.setAttribute("uv",new Et(u.uvs,2));const m=[];for(let x=0,S=h.length;x<S;x++){const y=h[x],C=y.name+"_"+y.smooth+"_"+_;let I=t.materials[C];if(this.materials!==null){if(I=this.materials.create(y.name),p&&I&&!(I instanceof Bi)){const L=new Bi;ln.prototype.copy.call(L,I),L.color.copy(I.color),I=L}else if(d&&I&&!(I instanceof ms)){const L=new ms({size:10,sizeAttenuation:!1});ln.prototype.copy.call(L,I),L.color.copy(I.color),L.map=I.map,I=L}}I===void 0&&(p?I=new Bi:d?I=new ms({size:1,sizeAttenuation:!1}):I=new ys,I.name=y.name,I.flatShading=!y.smooth,I.vertexColors=_,t.materials[C]=I),m.push(I)}let f;if(m.length>1){for(let x=0,S=h.length;x<S;x++){const y=h[x];g.addGroup(y.groupStart,y.groupCount,x)}p?f=new fo(g,m):d?f=new oo(g,m):f=new gt(g,m)}else p?f=new fo(g,m[0]):d?f=new oo(g,m[0]):f=new gt(g,m[0]);f.name=l.name,r.add(f)}else if(t.vertices.length>0){const a=new ms({size:1,sizeAttenuation:!1}),c=new jt;c.setAttribute("position",new Et(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new Et(t.colors,3)),a.vertexColors=!0);const l=new oo(c,a);r.add(l)}return r}}function Wv(s){s.traverse(e=>{if(e.isMesh){const t=e;t.material||(t.material=new Fn({color:8947848}))}})}function jv(s,e){const t=s.textFiles.get(e);let n=null;return t&&(n=new Gv().parse(t),Wv(n)),n}function Xv(s){let e=new Map;const t=[];for(const i of t){var n=jv(s,bv[i]);n&&e.set(i,n)}return e}class qv extends kn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Us(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){function t(l){const u=new DataView(l),h=32/8*3+32/8*3*3+16/8,p=u.getUint32(80,!0);if(80+32/8+p*h===u.byteLength)return!0;const _=[115,111,108,105,100];for(let g=0;g<5;g++)if(n(_,u,g))return!1;return!0}function n(l,u,h){for(let p=0,d=l.length;p<d;p++)if(l[p]!==u.getUint8(h+p))return!1;return!0}function i(l){const u=new DataView(l),h=u.getUint32(80,!0);let p,d,_,g=!1,m,f,x,S,y;for(let B=0;B<70;B++)u.getUint32(B,!1)==1129270351&&u.getUint8(B+4)==82&&u.getUint8(B+5)==61&&(g=!0,m=new Float32Array(h*3*3),f=u.getUint8(B+6)/255,x=u.getUint8(B+7)/255,S=u.getUint8(B+8)/255,y=u.getUint8(B+9)/255);const C=84,I=12*4+2,L=new jt,N=new Float32Array(h*3*3),E=new Float32Array(h*3*3),w=new Ke;for(let B=0;B<h;B++){const R=C+B*I,z=u.getFloat32(R,!0),b=u.getFloat32(R+4,!0),W=u.getFloat32(R+8,!0);if(g){const H=u.getUint16(R+48,!0);H&32768?(p=f,d=x,_=S):(p=(H&31)/31,d=(H>>5&31)/31,_=(H>>10&31)/31)}for(let H=1;H<=3;H++){const Z=R+H*12,J=B*3*3+(H-1)*3;N[J]=u.getFloat32(Z,!0),N[J+1]=u.getFloat32(Z+4,!0),N[J+2]=u.getFloat32(Z+8,!0),E[J]=z,E[J+1]=b,E[J+2]=W,g&&(w.setRGB(p,d,_,It),m[J]=w.r,m[J+1]=w.g,m[J+2]=w.b)}}return L.setAttribute("position",new Ht(N,3)),L.setAttribute("normal",new Ht(E,3)),g&&(L.setAttribute("color",new Ht(m,3)),L.hasColors=!0,L.alpha=y),L}function r(l){const u=new jt,h=/solid([\s\S]*?)endsolid/g,p=/facet([\s\S]*?)endfacet/g,d=/solid\s(.+)/;let _=0;const g=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+g+g+g,"g"),f=new RegExp("normal"+g+g+g,"g"),x=[],S=[],y=[],C=new X;let I,L=0,N=0,E=0;for(;(I=h.exec(l))!==null;){N=E;const w=I[0],B=(I=d.exec(w))!==null?I[1]:"";for(y.push(B);(I=p.exec(w))!==null;){let b=0,W=0;const H=I[0];for(;(I=f.exec(H))!==null;)C.x=parseFloat(I[1]),C.y=parseFloat(I[2]),C.z=parseFloat(I[3]),W++;for(;(I=m.exec(H))!==null;)x.push(parseFloat(I[1]),parseFloat(I[2]),parseFloat(I[3])),S.push(C.x,C.y,C.z),b++,E++;W!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+_),b!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+_),_++}const R=N,z=E-N;u.userData.groupNames=y,u.addGroup(R,z,L),L++}return u.setAttribute("position",new Et(x,3)),u.setAttribute("normal",new Et(S,3)),u}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){const u=new Uint8Array(l.length);for(let h=0;h<l.length;h++)u[h]=l.charCodeAt(h)&255;return u.buffer||u}else return l}const c=a(e);return t(c)?i(c):r(o(e))}}class cu extends l0{constructor(e){super(e)}parse(e){function t(H){switch(H.image_type){case p:case g:if(H.colormap_length>256||H.colormap_size!==24||H.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case d:case _:case m:case f:if(H.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case h:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+H.image_type)}if(H.width<=0||H.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(H.pixel_size!==8&&H.pixel_size!==16&&H.pixel_size!==24&&H.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+H.pixel_size)}function n(H,Z,J,Q,fe){let q,K;const _e=J.pixel_size>>3,j=J.width*J.height*_e;if(Z&&(K=fe.subarray(Q,Q+=J.colormap_length*(J.colormap_size>>3))),H){q=new Uint8Array(j);let Y,ce,de,xe=0;const we=new Uint8Array(_e);for(;xe<j;)if(Y=fe[Q++],ce=(Y&127)+1,Y&128){for(de=0;de<_e;++de)we[de]=fe[Q++];for(de=0;de<ce;++de)q.set(we,xe+de*_e);xe+=_e*ce}else{for(ce*=_e,de=0;de<ce;++de)q[xe+de]=fe[Q++];xe+=ce}}else q=fe.subarray(Q,Q+=Z?J.width*J.height:j);return{pixel_data:q,palettes:K}}function i(H,Z,J,Q,fe,q,K,_e,j){const Y=j;let ce,de=0,xe,we;const Be=w.width;for(we=Z;we!==Q;we+=J)for(xe=fe;xe!==K;xe+=q,de++)ce=_e[de],H[(xe+Be*we)*4+3]=255,H[(xe+Be*we)*4+2]=Y[ce*3+0],H[(xe+Be*we)*4+1]=Y[ce*3+1],H[(xe+Be*we)*4+0]=Y[ce*3+2];return H}function r(H,Z,J,Q,fe,q,K,_e){let j,Y=0,ce,de;const xe=w.width;for(de=Z;de!==Q;de+=J)for(ce=fe;ce!==K;ce+=q,Y+=2)j=_e[Y+0]+(_e[Y+1]<<8),H[(ce+xe*de)*4+0]=(j&31744)>>7,H[(ce+xe*de)*4+1]=(j&992)>>2,H[(ce+xe*de)*4+2]=(j&31)<<3,H[(ce+xe*de)*4+3]=j&32768?0:255;return H}function o(H,Z,J,Q,fe,q,K,_e){let j=0,Y,ce;const de=w.width;for(ce=Z;ce!==Q;ce+=J)for(Y=fe;Y!==K;Y+=q,j+=3)H[(Y+de*ce)*4+3]=255,H[(Y+de*ce)*4+2]=_e[j+0],H[(Y+de*ce)*4+1]=_e[j+1],H[(Y+de*ce)*4+0]=_e[j+2];return H}function a(H,Z,J,Q,fe,q,K,_e){let j=0,Y,ce;const de=w.width;for(ce=Z;ce!==Q;ce+=J)for(Y=fe;Y!==K;Y+=q,j+=4)H[(Y+de*ce)*4+2]=_e[j+0],H[(Y+de*ce)*4+1]=_e[j+1],H[(Y+de*ce)*4+0]=_e[j+2],H[(Y+de*ce)*4+3]=_e[j+3];return H}function c(H,Z,J,Q,fe,q,K,_e){let j,Y=0,ce,de;const xe=w.width;for(de=Z;de!==Q;de+=J)for(ce=fe;ce!==K;ce+=q,Y++)j=_e[Y],H[(ce+xe*de)*4+0]=j,H[(ce+xe*de)*4+1]=j,H[(ce+xe*de)*4+2]=j,H[(ce+xe*de)*4+3]=255;return H}function l(H,Z,J,Q,fe,q,K,_e){let j=0,Y,ce;const de=w.width;for(ce=Z;ce!==Q;ce+=J)for(Y=fe;Y!==K;Y+=q,j+=2)H[(Y+de*ce)*4+0]=_e[j+0],H[(Y+de*ce)*4+1]=_e[j+0],H[(Y+de*ce)*4+2]=_e[j+0],H[(Y+de*ce)*4+3]=_e[j+1];return H}function u(H,Z,J,Q,fe){let q,K,_e,j,Y,ce;switch((w.flags&x)>>S){default:case I:q=0,_e=1,Y=Z,K=0,j=1,ce=J;break;case y:q=0,_e=1,Y=Z,K=J-1,j=-1,ce=-1;break;case L:q=Z-1,_e=-1,Y=-1,K=0,j=1,ce=J;break;case C:q=Z-1,_e=-1,Y=-1,K=J-1,j=-1,ce=-1;break}if(z)switch(w.pixel_size){case 8:c(H,K,j,ce,q,_e,Y,Q);break;case 16:l(H,K,j,ce,q,_e,Y,Q);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(w.pixel_size){case 8:i(H,K,j,ce,q,_e,Y,Q,fe);break;case 16:r(H,K,j,ce,q,_e,Y,Q);break;case 24:o(H,K,j,ce,q,_e,Y,Q);break;case 32:a(H,K,j,ce,q,_e,Y,Q);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return H}const h=0,p=1,d=2,_=3,g=9,m=10,f=11,x=48,S=4,y=0,C=1,I=2,L=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let N=0;const E=new Uint8Array(e),w={id_length:E[N++],colormap_type:E[N++],image_type:E[N++],colormap_index:E[N++]|E[N++]<<8,colormap_length:E[N++]|E[N++]<<8,colormap_size:E[N++],origin:[E[N++]|E[N++]<<8,E[N++]|E[N++]<<8],width:E[N++]|E[N++]<<8,height:E[N++]|E[N++]<<8,pixel_size:E[N++],flags:E[N++]};if(t(w),w.id_length+N>e.length)throw new Error("THREE.TGALoader: No data.");N+=w.id_length;let B=!1,R=!1,z=!1;switch(w.image_type){case g:B=!0,R=!0;break;case p:R=!0;break;case m:B=!0;break;case d:break;case f:B=!0,z=!0;break;case _:z=!0;break}const b=new Uint8Array(w.width*w.height*4),W=n(B,R,w,N,E);return u(b,w.width,w.height,W.pixel_data,W.palettes),{data:b,width:w.width,height:w.height,flipY:!0,generateMipmaps:!0,minFilter:Nn}}}class Yv extends kn{load(e,t,n,i){const r=this,o=r.path===""?zi.extractUrlBase(e):r.path,a=new Us(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(c){try{t(r.parse(c,o))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e,t){function n(A,T){const U=[],D=A.childNodes;for(let k=0,he=D.length;k<he;k++){const ge=D[k];ge.nodeName===T&&U.push(ge)}return U}function i(A){if(A.length===0)return[];const T=A.trim().split(/\s+/),U=new Array(T.length);for(let D=0,k=T.length;D<k;D++)U[D]=T[D];return U}function r(A){if(A.length===0)return[];const T=A.trim().split(/\s+/),U=new Array(T.length);for(let D=0,k=T.length;D<k;D++)U[D]=parseFloat(T[D]);return U}function o(A){if(A.length===0)return[];const T=A.trim().split(/\s+/),U=new Array(T.length);for(let D=0,k=T.length;D<k;D++)U[D]=parseInt(T[D]);return U}function a(A){return A.substring(1)}function c(){return"three_default_"+Mh++}function l(A){return Object.keys(A).length===0}function u(A){return{unit:h(n(A,"unit")[0]),upAxis:p(n(A,"up_axis")[0])}}function h(A){return A!==void 0&&A.hasAttribute("meter")===!0?parseFloat(A.getAttribute("meter")):1}function p(A){return A!==void 0?A.textContent:"Y_UP"}function d(A,T,U,D){const k=n(A,T)[0];if(k!==void 0){const he=n(k,U);for(let ge=0;ge<he.length;ge++)D(he[ge])}}function _(A,T){for(const U in A){const D=A[U];D.build=T(A[U])}}function g(A,T){return A.build!==void 0||(A.build=T(A)),A.build}function m(A){const T={sources:{},samplers:{},channels:{}};let U=!1;for(let D=0,k=A.childNodes.length;D<k;D++){const he=A.childNodes[D];if(he.nodeType!==1)continue;let ge;switch(he.nodeName){case"source":ge=he.getAttribute("id"),T.sources[ge]=pe(he);break;case"sampler":ge=he.getAttribute("id"),T.samplers[ge]=f(he);break;case"channel":ge=he.getAttribute("target"),T.channels[ge]=x(he);break;case"animation":m(he),U=!0;break;default:console.log(he)}}U===!1&&(Je.animations[A.getAttribute("id")||tn.generateUUID()]=T)}function f(A){const T={inputs:{}};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const he=a(k.getAttribute("source")),ge=k.getAttribute("semantic");T.inputs[ge]=he;break}}return T}function x(A){const T={};let D=A.getAttribute("target").split("/");const k=D.shift();let he=D.shift();const ge=he.indexOf("(")!==-1,ke=he.indexOf(".")!==-1;if(ke)D=he.split("."),he=D.shift(),T.member=D.shift();else if(ge){const Ae=he.split("(");he=Ae.shift();for(let Ue=0;Ue<Ae.length;Ue++)Ae[Ue]=parseInt(Ae[Ue].replace(/\)/,""));T.indices=Ae}return T.id=k,T.sid=he,T.arraySyntax=ge,T.memberSyntax=ke,T.sampler=a(A.getAttribute("source")),T}function S(A){const T=[],U=A.channels,D=A.samplers,k=A.sources;for(const he in U)if(U.hasOwnProperty(he)){const ge=U[he],ke=D[ge.sampler],Ae=ke.inputs.INPUT,Ue=ke.inputs.OUTPUT,Xe=k[Ae],Me=k[Ue],je=C(ge,Xe,Me);w(je,T)}return T}function y(A){return g(Je.animations[A],S)}function C(A,T,U){const D=Je.nodes[A.id],k=Ut(D.id),he=D.transforms[A.sid],ge=D.matrix.clone().transpose();let ke,Ae,Ue,Xe,Me,je;const ze={};switch(he){case"matrix":for(Ue=0,Xe=T.array.length;Ue<Xe;Ue++)if(ke=T.array[Ue],Ae=Ue*U.stride,ze[ke]===void 0&&(ze[ke]={}),A.arraySyntax===!0){const Dt=U.array[Ae],Tt=A.indices[0]+4*A.indices[1];ze[ke][Tt]=Dt}else for(Me=0,je=U.stride;Me<je;Me++)ze[ke][Me]=U.array[Ae+Me];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',he);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',he);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',he);break}const $e=I(ze,ge);return{name:k.uuid,keyframes:$e}}function I(A,T){const U=[];for(const k in A)U.push({time:parseFloat(k),value:A[k]});U.sort(D);for(let k=0;k<16;k++)B(U,k,T.elements[k]);return U;function D(k,he){return k.time-he.time}}const L=new X,N=new X,E=new Zt;function w(A,T){const U=A.keyframes,D=A.name,k=[],he=[],ge=[],ke=[];for(let Ae=0,Ue=U.length;Ae<Ue;Ae++){const Xe=U[Ae],Me=Xe.time,je=Xe.value;ee.fromArray(je).transpose(),ee.decompose(L,E,N),k.push(Me),he.push(L.x,L.y,L.z),ge.push(E.x,E.y,E.z,E.w),ke.push(N.x,N.y,N.z)}return he.length>0&&T.push(new Si(D+".position",k,he)),ge.length>0&&T.push(new Wi(D+".quaternion",k,ge)),ke.length>0&&T.push(new Si(D+".scale",k,ke)),T}function B(A,T,U){let D,k=!0,he,ge;for(he=0,ge=A.length;he<ge;he++)D=A[he],D.value[T]===void 0?D.value[T]=null:k=!1;if(k===!0)for(he=0,ge=A.length;he<ge;he++)D=A[he],D.value[T]=U;else R(A,T)}function R(A,T){let U,D;for(let k=0,he=A.length;k<he;k++){const ge=A[k];if(ge.value[T]===null){if(U=z(A,k,T),D=b(A,k,T),U===null){ge.value[T]=D.value[T];continue}if(D===null){ge.value[T]=U.value[T];continue}W(ge,U,D,T)}}}function z(A,T,U){for(;T>=0;){const D=A[T];if(D.value[U]!==null)return D;T--}return null}function b(A,T,U){for(;T<A.length;){const D=A[T];if(D.value[U]!==null)return D;T++}return null}function W(A,T,U,D){if(U.time-T.time===0){A.value[D]=T.value[D];return}A.value[D]=(A.time-T.time)*(U.value[D]-T.value[D])/(U.time-T.time)+T.value[D]}function H(A){const T={name:A.getAttribute("id")||"default",start:parseFloat(A.getAttribute("start")||0),end:parseFloat(A.getAttribute("end")||0),animations:[]};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"instance_animation":T.animations.push(a(k.getAttribute("url")));break}}Je.clips[A.getAttribute("id")]=T}function Z(A){const T=[],U=A.name,D=A.end-A.start||-1,k=A.animations;for(let he=0,ge=k.length;he<ge;he++){const ke=y(k[he]);for(let Ae=0,Ue=ke.length;Ae<Ue;Ae++)T.push(ke[Ae])}return new or(U,D,T)}function J(A){return g(Je.clips[A],Z)}function Q(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"skin":T.id=a(k.getAttribute("source")),T.skin=fe(k);break;case"morph":T.id=a(k.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}Je.controllers[A.getAttribute("id")]=T}function fe(A){const T={sources:{}};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"bind_shape_matrix":T.bindShapeMatrix=r(k.textContent);break;case"source":const he=k.getAttribute("id");T.sources[he]=pe(k);break;case"joints":T.joints=q(k);break;case"vertex_weights":T.vertexWeights=K(k);break}}return T}function q(A){const T={inputs:{}};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const he=k.getAttribute("semantic"),ge=a(k.getAttribute("source"));T.inputs[he]=ge;break}}return T}function K(A){const T={inputs:{}};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const he=k.getAttribute("semantic"),ge=a(k.getAttribute("source")),ke=parseInt(k.getAttribute("offset"));T.inputs[he]={id:ge,offset:ke};break;case"vcount":T.vcount=o(k.textContent);break;case"v":T.v=o(k.textContent);break}}return T}function _e(A){const T={id:A.id},U=Je.geometries[T.id];return A.skin!==void 0&&(T.skin=j(A.skin),U.sources.skinIndices=T.skin.indices,U.sources.skinWeights=T.skin.weights),T}function j(A){const U={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},D=A.sources,k=A.vertexWeights,he=k.vcount,ge=k.v,ke=k.inputs.JOINT.offset,Ae=k.inputs.WEIGHT.offset,Ue=A.sources[A.joints.inputs.JOINT],Xe=A.sources[A.joints.inputs.INV_BIND_MATRIX],Me=D[k.inputs.WEIGHT.id].array;let je=0,ze,$e,qe;for(ze=0,qe=he.length;ze<qe;ze++){const Tt=he[ze],xt=[];for($e=0;$e<Tt;$e++){const yt=ge[je+ke],qn=ge[je+Ae],cn=Me[qn];xt.push({index:yt,weight:cn}),je+=2}for(xt.sort(Dt),$e=0;$e<4;$e++){const yt=xt[$e];yt!==void 0?(U.indices.array.push(yt.index),U.weights.array.push(yt.weight)):(U.indices.array.push(0),U.weights.array.push(0))}}for(A.bindShapeMatrix?U.bindMatrix=new Ye().fromArray(A.bindShapeMatrix).transpose():U.bindMatrix=new Ye().identity(),ze=0,qe=Ue.array.length;ze<qe;ze++){const Tt=Ue.array[ze],xt=new Ye().fromArray(Xe.array,ze*Xe.stride).transpose();U.joints.push({name:Tt,boneInverse:xt})}return U;function Dt(Tt,xt){return xt.weight-Tt.weight}}function Y(A){return g(Je.controllers[A],_e)}function ce(A){const T={init_from:n(A,"init_from")[0].textContent};Je.images[A.getAttribute("id")]=T}function de(A){return A.build!==void 0?A.build:A.init_from}function xe(A){const T=Je.images[A];return T!==void 0?g(T,de):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",A),null)}function we(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"profile_COMMON":T.profile=Be(k);break}}Je.effects[A.getAttribute("id")]=T}function Be(A){const T={surfaces:{},samplers:{}};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"newparam":Qe(k,T);break;case"technique":T.technique=v(k);break;case"extra":T.extra=ae(k);break}}return T}function Qe(A,T){const U=A.getAttribute("sid");for(let D=0,k=A.childNodes.length;D<k;D++){const he=A.childNodes[D];if(he.nodeType===1)switch(he.nodeName){case"surface":T.surfaces[U]=tt(he);break;case"sampler2D":T.samplers[U]=pt(he);break}}}function tt(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"init_from":T.init_from=k.textContent;break}}return T}function pt(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"source":T.source=k.textContent;break}}return T}function v(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"constant":case"lambert":case"blinn":case"phong":T.type=k.nodeName,T.parameters=me(k);break;case"extra":T.extra=ae(k);break}}return T}function me(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":T[k.nodeName]=re(k);break;case"transparent":T[k.nodeName]={opaque:k.hasAttribute("opaque")?k.getAttribute("opaque"):"A_ONE",data:re(k)};break}}return T}function re(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"color":T[k.nodeName]=r(k.textContent);break;case"float":T[k.nodeName]=parseFloat(k.textContent);break;case"texture":T[k.nodeName]={id:k.getAttribute("texture"),extra:V(k)};break}}return T}function V(A){const T={technique:{}};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"extra":F(k,T);break}}return T}function F(A,T){for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"technique":$(k,T);break}}}function $(A,T){for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":T.technique[k.nodeName]=parseFloat(k.textContent);break;case"wrapU":case"wrapV":k.textContent.toUpperCase()==="TRUE"?T.technique[k.nodeName]=1:k.textContent.toUpperCase()==="FALSE"?T.technique[k.nodeName]=0:T.technique[k.nodeName]=parseInt(k.textContent);break;case"bump":T[k.nodeName]=M(k);break}}}function ae(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"technique":T.technique=P(k);break}}return T}function P(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"double_sided":T[k.nodeName]=parseInt(k.textContent);break;case"bump":T[k.nodeName]=M(k);break}}return T}function M(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"texture":T[k.nodeName]={id:k.getAttribute("texture"),texcoord:k.getAttribute("texcoord"),extra:V(k)};break}}return T}function G(A){return A}function se(A){return g(Je.effects[A],G)}function ne(A){const T={name:A.getAttribute("name")};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"instance_effect":T.url=a(k.getAttribute("url"));break}}Je.materials[A.getAttribute("id")]=T}function oe(A){let T,U=A.slice((A.lastIndexOf(".")-1>>>0)+2);switch(U=U.toLowerCase(),U){case"tga":T=_n;break;default:T=Rn}return T}function Te(A){const T=se(A.url),U=T.profile.technique;let D;switch(U.type){case"phong":case"blinn":D=new ys;break;case"lambert":D=new Q_;break;default:D=new Wt;break}D.name=A.name||"";function k(Ae,Ue=null){const Xe=T.profile.samplers[Ae.id];let Me=null;if(Xe!==void 0){const je=T.profile.surfaces[Xe.source];Me=xe(je.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),Me=xe(Ae.id);if(Me!==null){const je=oe(Me);if(je!==void 0){const ze=je.load(Me),$e=Ae.extra;if($e!==void 0&&$e.technique!==void 0&&l($e.technique)===!1){const qe=$e.technique;ze.wrapS=qe.wrapU?Mn:Sn,ze.wrapT=qe.wrapV?Mn:Sn,ze.offset.set(qe.offsetU||0,qe.offsetV||0),ze.repeat.set(qe.repeatU||1,qe.repeatV||1)}else ze.wrapS=Mn,ze.wrapT=Mn;return Ue!==null&&(ze.colorSpace=Ue),ze}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",Me),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",Ae.id),null}const he=U.parameters;for(const Ae in he){const Ue=he[Ae];switch(Ae){case"diffuse":Ue.color&&D.color.fromArray(Ue.color),Ue.texture&&(D.map=k(Ue.texture,It));break;case"specular":Ue.color&&D.specular&&D.specular.fromArray(Ue.color),Ue.texture&&(D.specularMap=k(Ue.texture));break;case"bump":Ue.texture&&(D.normalMap=k(Ue.texture));break;case"ambient":Ue.texture&&(D.lightMap=k(Ue.texture,It));break;case"shininess":Ue.float&&D.shininess&&(D.shininess=Ue.float);break;case"emission":Ue.color&&D.emissive&&D.emissive.fromArray(Ue.color),Ue.texture&&(D.emissiveMap=k(Ue.texture,It));break}}dt.toWorkingColorSpace(D.color,It),D.specular&&dt.toWorkingColorSpace(D.specular,It),D.emissive&&dt.toWorkingColorSpace(D.emissive,It);let ge=he.transparent,ke=he.transparency;if(ke===void 0&&ge&&(ke={float:1}),ge===void 0&&ke&&(ge={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ge&&ke)if(ge.data.texture)D.transparent=!0;else{const Ae=ge.data.color;switch(ge.opaque){case"A_ONE":D.opacity=Ae[3]*ke.float;break;case"RGB_ZERO":D.opacity=1-Ae[0]*ke.float;break;case"A_ZERO":D.opacity=1-Ae[3]*ke.float;break;case"RGB_ONE":D.opacity=Ae[0]*ke.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ge.opaque)}D.opacity<1&&(D.transparent=!0)}if(U.extra!==void 0&&U.extra.technique!==void 0){const Ae=U.extra.technique;for(const Ue in Ae){const Xe=Ae[Ue];switch(Ue){case"double_sided":D.side=Xe===1?bn:Hn;break;case"bump":D.normalMap=k(Xe.texture),D.normalScale=new rt(1,1);break}}}return D}function ye(A){return g(Je.materials[A],Te)}function Re(A){const T={name:A.getAttribute("name")};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"optics":T.optics=ct(k);break}}Je.cameras[A.getAttribute("id")]=T}function ct(A){for(let T=0;T<A.childNodes.length;T++){const U=A.childNodes[T];switch(U.nodeName){case"technique_common":return be(U)}}return{}}function be(A){const T={};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];switch(D.nodeName){case"perspective":case"orthographic":T.technique=D.nodeName,T.parameters=Oe(D);break}}return T}function Oe(A){const T={};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];switch(D.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":T[D.nodeName]=parseFloat(D.textContent);break}}return T}function De(A){let T;switch(A.optics.technique){case"perspective":T=new Gt(A.optics.parameters.yfov,A.optics.parameters.aspect_ratio,A.optics.parameters.znear,A.optics.parameters.zfar);break;case"orthographic":let U=A.optics.parameters.ymag,D=A.optics.parameters.xmag;const k=A.optics.parameters.aspect_ratio;D=D===void 0?U*k:D,U=U===void 0?D/k:U,D*=.5,U*=.5,T=new xo(-D,D,U,-U,A.optics.parameters.znear,A.optics.parameters.zfar);break;default:T=new Gt;break}return T.name=A.name||"",T}function Ze(A){const T=Je.cameras[A];return T!==void 0?g(T,De):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",A),null)}function Fe(A){let T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"technique_common":T=nt(k);break}}Je.lights[A.getAttribute("id")]=T}function nt(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"directional":case"point":case"spot":case"ambient":T.technique=k.nodeName,T.parameters=it(k)}}return T}function it(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"color":const he=r(k.textContent);T.color=new Ke().fromArray(he),dt.toWorkingColorSpace(T.color,It);break;case"falloff_angle":T.falloffAngle=parseFloat(k.textContent);break;case"quadratic_attenuation":const ge=parseFloat(k.textContent);T.distance=ge?Math.sqrt(1/ge):0;break}}return T}function bt(A){let T;switch(A.technique){case"directional":T=new Rc;break;case"point":T=new ah;break;case"spot":T=new oh;break;case"ambient":T=new ch;break}return A.parameters.color&&T.color.copy(A.parameters.color),A.parameters.distance&&(T.distance=A.parameters.distance),T}function te(A){const T=Je.lights[A];return T!==void 0?g(T,bt):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",A),null)}function Ce(A){const T={name:A.getAttribute("name"),sources:{},vertices:{},primitives:[]},U=n(A,"mesh")[0];if(U!==void 0){for(let D=0;D<U.childNodes.length;D++){const k=U.childNodes[D];if(k.nodeType!==1)continue;const he=k.getAttribute("id");switch(k.nodeName){case"source":T.sources[he]=pe(k);break;case"vertices":T.vertices=ve(k);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",k.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":T.primitives.push(Ie(k));break;default:console.log(k)}}Je.geometries[A.getAttribute("id")]=T}}function pe(A){const T={array:[],stride:3};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"float_array":T.array=r(D.textContent);break;case"Name_array":T.array=i(D.textContent);break;case"technique_common":const k=n(D,"accessor")[0];k!==void 0&&(T.stride=parseInt(k.getAttribute("stride")));break}}return T}function ve(A){const T={};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];D.nodeType===1&&(T[D.getAttribute("semantic")]=a(D.getAttribute("source")))}return T}function Ie(A){const T={type:A.nodeName,material:A.getAttribute("material"),count:parseInt(A.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const he=a(k.getAttribute("source")),ge=k.getAttribute("semantic"),ke=parseInt(k.getAttribute("offset")),Ae=parseInt(k.getAttribute("set")),Ue=Ae>0?ge+Ae:ge;T.inputs[Ue]={id:he,offset:ke},T.stride=Math.max(T.stride,ke+1),ge==="TEXCOORD"&&(T.hasUV=!0);break;case"vcount":T.vcount=o(k.textContent);break;case"p":T.p=o(k.textContent);break}}return T}function Ne(A){const T={};for(let U=0;U<A.length;U++){const D=A[U];T[D.type]===void 0&&(T[D.type]=[]),T[D.type].push(D)}return T}function ot(A){let T=0;for(let U=0,D=A.length;U<D;U++)A[U].hasUV===!0&&T++;T>0&&T<A.length&&(A.uvsNeedsFix=!0)}function Pt(A){const T={},U=A.sources,D=A.vertices,k=A.primitives;if(k.length===0)return{};const he=Ne(k);for(const ge in he){const ke=he[ge];ot(ke),T[ge]=zt(ke,U,D)}return T}function zt(A,T,U){const D={},k={array:[],stride:0},he={array:[],stride:0},ge={array:[],stride:0},ke={array:[],stride:0},Ae={array:[],stride:0},Ue={array:[],stride:4},Xe={array:[],stride:4},Me=new jt,je=[];let ze=0;for(let $e=0;$e<A.length;$e++){const qe=A[$e],Dt=qe.inputs;let Tt=0;switch(qe.type){case"lines":case"linestrips":Tt=qe.count*2;break;case"triangles":Tt=qe.count*3;break;case"polylist":for(let xt=0;xt<qe.count;xt++){const yt=qe.vcount[xt];switch(yt){case 3:Tt+=3;break;case 4:Tt+=6;break;default:Tt+=(yt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",qe.type)}Me.addGroup(ze,Tt,$e),ze+=Tt,qe.material&&je.push(qe.material);for(const xt in Dt){const yt=Dt[xt];switch(xt){case"VERTEX":for(const qn in U){const cn=U[qn];switch(qn){case"POSITION":const Ki=k.array.length;if(lt(qe,T[cn],yt.offset,k.array),k.stride=T[cn].stride,T.skinWeights&&T.skinIndices&&(lt(qe,T.skinIndices,yt.offset,Ue.array),lt(qe,T.skinWeights,yt.offset,Xe.array)),qe.hasUV===!1&&A.uvsNeedsFix===!0){const Sh=(k.array.length-Ki)/k.stride;for(let Dc=0;Dc<Sh;Dc++)ge.array.push(0,0)}break;case"NORMAL":lt(qe,T[cn],yt.offset,he.array),he.stride=T[cn].stride;break;case"COLOR":lt(qe,T[cn],yt.offset,Ae.array),Ae.stride=T[cn].stride;break;case"TEXCOORD":lt(qe,T[cn],yt.offset,ge.array),ge.stride=T[cn].stride;break;case"TEXCOORD1":lt(qe,T[cn],yt.offset,ke.array),ge.stride=T[cn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',qn)}}break;case"NORMAL":lt(qe,T[yt.id],yt.offset,he.array),he.stride=T[yt.id].stride;break;case"COLOR":lt(qe,T[yt.id],yt.offset,Ae.array,!0),Ae.stride=T[yt.id].stride;break;case"TEXCOORD":lt(qe,T[yt.id],yt.offset,ge.array),ge.stride=T[yt.id].stride;break;case"TEXCOORD1":lt(qe,T[yt.id],yt.offset,ke.array),ke.stride=T[yt.id].stride;break}}}return k.array.length>0&&Me.setAttribute("position",new Et(k.array,k.stride)),he.array.length>0&&Me.setAttribute("normal",new Et(he.array,he.stride)),Ae.array.length>0&&Me.setAttribute("color",new Et(Ae.array,Ae.stride)),ge.array.length>0&&Me.setAttribute("uv",new Et(ge.array,ge.stride)),ke.array.length>0&&Me.setAttribute("uv1",new Et(ke.array,ke.stride)),Ue.array.length>0&&Me.setAttribute("skinIndex",new Et(Ue.array,Ue.stride)),Xe.array.length>0&&Me.setAttribute("skinWeight",new Et(Xe.array,Xe.stride)),D.data=Me,D.type=A[0].type,D.materialKeys=je,D}function lt(A,T,U,D,k=!1){const he=A.p,ge=A.stride,ke=A.vcount;function Ae(Me){let je=he[Me+U]*Xe;const ze=je+Xe;for(;je<ze;je++)D.push(Ue[je]);if(k){const $e=D.length-Xe-1;wi.setRGB(D[$e+0],D[$e+1],D[$e+2],It),D[$e+0]=wi.r,D[$e+1]=wi.g,D[$e+2]=wi.b}}const Ue=T.array,Xe=T.stride;if(A.vcount!==void 0){let Me=0;for(let je=0,ze=ke.length;je<ze;je++){const $e=ke[je];if($e===4){const qe=Me+ge*0,Dt=Me+ge*1,Tt=Me+ge*2,xt=Me+ge*3;Ae(qe),Ae(Dt),Ae(xt),Ae(Dt),Ae(Tt),Ae(xt)}else if($e===3){const qe=Me+ge*0,Dt=Me+ge*1,Tt=Me+ge*2;Ae(qe),Ae(Dt),Ae(Tt)}else if($e>4)for(let qe=1,Dt=$e-2;qe<=Dt;qe++){const Tt=Me+ge*0,xt=Me+ge*qe,yt=Me+ge*(qe+1);Ae(Tt),Ae(xt),Ae(yt)}Me+=ge*$e}}else for(let Me=0,je=he.length;Me<je;Me+=ge)Ae(Me)}function on(A){return g(Je.geometries[A],Pt)}function Tn(A){const T={name:A.getAttribute("name")||"",joints:{},links:[]};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"technique_common":Xn(D,T);break}}Je.kinematicsModels[A.getAttribute("id")]=T}function dr(A){return A.build!==void 0?A.build:A}function fr(A){return g(Je.kinematicsModels[A],dr)}function Xn(A,T){for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"joint":T.joints[D.getAttribute("sid")]=Os(D);break;case"link":T.links.push(Fs(D));break}}}function Os(A){let T;for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"prismatic":case"revolute":T=pr(D);break}}return T}function pr(A){const T={sid:A.getAttribute("sid"),name:A.getAttribute("name")||"",axis:new X,limits:{min:0,max:0},type:A.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"axis":const k=r(D.textContent);T.axis.fromArray(k);break;case"limits":const he=D.getElementsByTagName("max")[0],ge=D.getElementsByTagName("min")[0];T.limits.max=parseFloat(he.textContent),T.limits.min=parseFloat(ge.textContent);break}}return T.limits.min>=T.limits.max&&(T.static=!0),T.middlePosition=(T.limits.min+T.limits.max)/2,T}function Fs(A){const T={sid:A.getAttribute("sid"),name:A.getAttribute("name")||"",attachments:[],transforms:[]};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"attachment_full":T.attachments.push(qi(D));break;case"matrix":case"translate":case"rotate":T.transforms.push(ks(D));break}}return T}function qi(A){const T={joint:A.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"link":T.links.push(Fs(D));break;case"matrix":case"translate":case"rotate":T.transforms.push(ks(D));break}}return T}function ks(A){const T={type:A.nodeName},U=r(A.textContent);switch(T.type){case"matrix":T.obj=new Ye,T.obj.fromArray(U).transpose();break;case"translate":T.obj=new X,T.obj.fromArray(U);break;case"rotate":T.obj=new X,T.obj.fromArray(U),T.angle=tn.degToRad(U[3]);break}return T}function Yi(A){const T={name:A.getAttribute("name")||"",rigidBodies:{}};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"rigid_body":T.rigidBodies[D.getAttribute("name")]={},mr(D,T.rigidBodies[D.getAttribute("name")]);break}}Je.physicsModels[A.getAttribute("id")]=T}function mr(A,T){for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"technique_common":gr(D,T);break}}}function gr(A,T){for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"inertia":T.inertia=r(D.textContent);break;case"mass":T.mass=r(D.textContent)[0];break}}}function To(A){const T={bindJointAxis:[]};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"bind_joint_axis":T.bindJointAxis.push(Ao(D));break}}Je.kinematicsScenes[a(A.getAttribute("url"))]=T}function Ao(A){const T={target:A.getAttribute("target").split("/").pop()};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"axis":const k=D.getElementsByTagName("param")[0];T.axis=k.textContent;const he=T.axis.split("inst_").pop().split("axis")[0];T.jointIndex=he.substring(0,he.length-1);break}}return T}function Ro(A){return A.build!==void 0?A.build:A}function O(A){return g(Je.kinematicsScenes[A],Ro)}function ie(){const A=Object.keys(Je.kinematicsModels)[0],T=Object.keys(Je.kinematicsScenes)[0],U=Object.keys(Je.visualScenes)[0];if(A===void 0||T===void 0)return;const D=fr(A),k=O(T),he=_t(U),ge=k.bindJointAxis,ke={};for(let Xe=0,Me=ge.length;Xe<Me;Xe++){const je=ge[Xe],ze=st.querySelector('[sid="'+je.target+'"]');if(ze){const $e=ze.parentElement;Ae(je.jointIndex,$e)}}function Ae(Xe,Me){const je=Me.getAttribute("name"),ze=D.joints[Xe];he.traverse(function($e){$e.name===je&&(ke[Xe]={object:$e,transforms:le(Me),joint:ze,position:ze.zeroPosition})})}const Ue=new Ye;Pc={joints:D&&D.joints,getJointValue:function(Xe){const Me=ke[Xe];if(Me)return Me.position;console.warn("THREE.ColladaLoader: Joint "+Xe+" doesn't exist.")},setJointValue:function(Xe,Me){const je=ke[Xe];if(je){const ze=je.joint;if(Me>ze.limits.max||Me<ze.limits.min)console.warn("THREE.ColladaLoader: Joint "+Xe+" value "+Me+" outside of limits (min: "+ze.limits.min+", max: "+ze.limits.max+").");else if(ze.static)console.warn("THREE.ColladaLoader: Joint "+Xe+" is static.");else{const $e=je.object,qe=ze.axis,Dt=je.transforms;ee.identity();for(let Tt=0;Tt<Dt.length;Tt++){const xt=Dt[Tt];if(xt.sid&&xt.sid.indexOf(Xe)!==-1)switch(ze.type){case"revolute":ee.multiply(Ue.makeRotationAxis(qe,tn.degToRad(Me)));break;case"prismatic":ee.multiply(Ue.makeTranslation(qe.x*Me,qe.y*Me,qe.z*Me));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+ze.type);break}else switch(xt.type){case"matrix":ee.multiply(xt.obj);break;case"translate":ee.multiply(Ue.makeTranslation(xt.obj.x,xt.obj.y,xt.obj.z));break;case"scale":ee.scale(xt.obj);break;case"rotate":ee.multiply(Ue.makeRotationAxis(xt.obj,xt.angle));break}}$e.matrix.copy(ee),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),ke[Xe].position=Me}}else console.log("THREE.ColladaLoader: "+Xe+" does not exist.")}}}function le(A){const T=[],U=st.querySelector('[id="'+A.id+'"]');for(let D=0;D<U.childNodes.length;D++){const k=U.childNodes[D];if(k.nodeType!==1)continue;let he,ge;switch(k.nodeName){case"matrix":he=r(k.textContent);const ke=new Ye().fromArray(he).transpose();T.push({sid:k.getAttribute("sid"),type:k.nodeName,obj:ke});break;case"translate":case"scale":he=r(k.textContent),ge=new X().fromArray(he),T.push({sid:k.getAttribute("sid"),type:k.nodeName,obj:ge});break;case"rotate":he=r(k.textContent),ge=new X().fromArray(he);const Ae=tn.degToRad(he[3]);T.push({sid:k.getAttribute("sid"),type:k.nodeName,obj:ge,angle:Ae});break}}return T}function ue(A){const T=A.getElementsByTagName("node");for(let U=0;U<T.length;U++){const D=T[U];D.hasAttribute("id")===!1&&D.setAttribute("id",c())}}const ee=new Ye,Se=new X;function Pe(A){const T={name:A.getAttribute("name")||"",type:A.getAttribute("type"),id:A.getAttribute("id"),sid:A.getAttribute("sid"),matrix:new Ye,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType!==1)continue;let k;switch(D.nodeName){case"node":T.nodes.push(D.getAttribute("id")),Pe(D);break;case"instance_camera":T.instanceCameras.push(a(D.getAttribute("url")));break;case"instance_controller":T.instanceControllers.push(Ve(D));break;case"instance_light":T.instanceLights.push(a(D.getAttribute("url")));break;case"instance_geometry":T.instanceGeometries.push(Ve(D));break;case"instance_node":T.instanceNodes.push(a(D.getAttribute("url")));break;case"matrix":k=r(D.textContent),T.matrix.multiply(ee.fromArray(k).transpose()),T.transforms[D.getAttribute("sid")]=D.nodeName;break;case"translate":k=r(D.textContent),Se.fromArray(k),T.matrix.multiply(ee.makeTranslation(Se.x,Se.y,Se.z)),T.transforms[D.getAttribute("sid")]=D.nodeName;break;case"rotate":k=r(D.textContent);const he=tn.degToRad(k[3]);T.matrix.multiply(ee.makeRotationAxis(Se.fromArray(k),he)),T.transforms[D.getAttribute("sid")]=D.nodeName;break;case"scale":k=r(D.textContent),T.matrix.scale(Se.fromArray(k)),T.transforms[D.getAttribute("sid")]=D.nodeName;break;case"extra":break;default:console.log(D)}}return Rt(T.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",T.id):Je.nodes[T.id]=T,T}function Ve(A){const T={id:a(A.getAttribute("url")),materials:{},skeletons:[]};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];switch(D.nodeName){case"bind_material":const k=D.getElementsByTagName("instance_material");for(let he=0;he<k.length;he++){const ge=k[he],ke=ge.getAttribute("symbol"),Ae=ge.getAttribute("target");T.materials[ke]=a(Ae)}break;case"skeleton":T.skeletons.push(a(D.textContent));break}}return T}function He(A,T){const U=[],D=[];let k,he,ge;for(k=0;k<A.length;k++){const Ue=A[k];let Xe;if(Rt(Ue))Xe=Ut(Ue),et(Xe,T,U);else if(An(Ue)){const je=Je.visualScenes[Ue].children;for(let ze=0;ze<je.length;ze++){const $e=je[ze];if($e.type==="JOINT"){const qe=Ut($e.id);et(qe,T,U)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Ue)}for(k=0;k<T.length;k++)for(he=0;he<U.length;he++)if(ge=U[he],ge.bone.name===T[k].name){D[k]=ge,ge.processed=!0;break}for(k=0;k<U.length;k++)ge=U[k],ge.processed===!1&&(D.push(ge),ge.processed=!0);const ke=[],Ae=[];for(k=0;k<D.length;k++)ge=D[k],ke.push(ge.bone),Ae.push(ge.boneInverse);return new bo(ke,Ae)}function et(A,T,U){A.traverse(function(D){if(D.isBone===!0){let k;for(let he=0;he<T.length;he++){const ge=T[he];if(ge.name===D.name){k=ge.boneInverse;break}}k===void 0&&(k=new Ye),U.push({bone:D,boneInverse:k,processed:!1})}})}function at(A){const T=[],U=A.matrix,D=A.nodes,k=A.type,he=A.instanceCameras,ge=A.instanceControllers,ke=A.instanceLights,Ae=A.instanceGeometries,Ue=A.instanceNodes;for(let Me=0,je=D.length;Me<je;Me++)T.push(Ut(D[Me]));for(let Me=0,je=he.length;Me<je;Me++){const ze=Ze(he[Me]);ze!==null&&T.push(ze.clone())}for(let Me=0,je=ge.length;Me<je;Me++){const ze=ge[Me],$e=Y(ze.id),qe=on($e.id),Dt=wt(qe,ze.materials),Tt=ze.skeletons,xt=$e.skin.joints,yt=He(Tt,xt);for(let qn=0,cn=Dt.length;qn<cn;qn++){const Ki=Dt[qn];Ki.isSkinnedMesh&&(Ki.bind(yt,$e.skin.bindMatrix),Ki.normalizeSkinWeights()),T.push(Ki)}}for(let Me=0,je=ke.length;Me<je;Me++){const ze=te(ke[Me]);ze!==null&&T.push(ze.clone())}for(let Me=0,je=Ae.length;Me<je;Me++){const ze=Ae[Me],$e=on(ze.id),qe=wt($e,ze.materials);for(let Dt=0,Tt=qe.length;Dt<Tt;Dt++)T.push(qe[Dt])}for(let Me=0,je=Ue.length;Me<je;Me++)T.push(Ut(Ue[Me]).clone());let Xe;if(D.length===0&&T.length===1)Xe=T[0];else{Xe=k==="JOINT"?new Mc:new Vn;for(let Me=0;Me<T.length;Me++)Xe.add(T[Me])}return Xe.name=k==="JOINT"?A.sid:A.name,Xe.matrix.copy(U),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe}const Ge=new Wt({name:kn.DEFAULT_MATERIAL_NAME,color:16711935});function mt(A,T){const U=[];for(let D=0,k=A.length;D<k;D++){const he=T[A[D]];he===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",A[D]),U.push(Ge)):U.push(ye(he))}return U}function wt(A,T){const U=[];for(const D in A){const k=A[D],he=mt(k.materialKeys,T);if(he.length===0&&(D==="lines"||D==="linestrips"?he.push(new Bi):he.push(new ys)),D==="lines"||D==="linestrips")for(let Ue=0,Xe=he.length;Ue<Xe;Ue++){const Me=he[Ue];if(Me.isMeshPhongMaterial===!0||Me.isMeshLambertMaterial===!0){const je=new Bi;je.color.copy(Me.color),je.opacity=Me.opacity,je.transparent=Me.transparent,he[Ue]=je}}const ge=k.data.attributes.skinIndex!==void 0,ke=he.length===1?he[0]:he;let Ae;switch(D){case"lines":Ae=new fo(k.data,ke);break;case"linestrips":Ae=new Mo(k.data,ke);break;case"triangles":case"polylist":ge?Ae=new Qu(k.data,ke):Ae=new gt(k.data,ke);break}U.push(Ae)}return U}function Rt(A){return Je.nodes[A]!==void 0}function Ut(A){return g(Je.nodes[A],at)}function vt(A){const T={name:A.getAttribute("name"),children:[]};ue(A);const U=n(A,"node");for(let D=0;D<U.length;D++)T.children.push(Pe(U[D]));Je.visualScenes[A.getAttribute("id")]=T}function We(A){const T=new Vn;T.name=A.name;const U=A.children;for(let D=0;D<U.length;D++){const k=U[D];T.add(Ut(k.id))}return T}function An(A){return Je.visualScenes[A]!==void 0}function _t(A){return g(Je.visualScenes[A],We)}function hn(A){const T=n(A,"instance_visual_scene")[0];return _t(a(T.getAttribute("url")))}function ci(){const A=Je.clips;if(l(A)===!0){if(l(Je.animations)===!1){const T=[];for(const U in Je.animations){const D=y(U);for(let k=0,he=D.length;k<he;k++)T.push(D[k])}_r.push(new or("default",-1,T))}}else for(const T in A)_r.push(J(T))}function $t(A){let T="";const U=[A];for(;U.length;){const D=U.shift();D.nodeType===Node.TEXT_NODE?T+=D.textContent:(T+=`
`,U.push.apply(U,D.childNodes))}return T.trim()}if(e.length===0)return{scene:new Ju};const li=new DOMParser().parseFromString(e,"application/xml"),st=n(li,"COLLADA")[0],an=li.getElementsByTagName("parsererror")[0];if(an!==void 0){const A=n(an,"div")[0];let T;return A?T=A.textContent:T=$t(an),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,T),null}const Ei=st.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Ei);const Jt=u(n(st,"asset")[0]),Rn=new Tc(this.manager);Rn.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let _n;cu&&(_n=new cu(this.manager),_n.setPath(this.resourcePath||t));const wi=new Ke,_r=[];let Pc={},Mh=0;const Je={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};d(st,"library_animations","animation",m),d(st,"library_animation_clips","animation_clip",H),d(st,"library_controllers","controller",Q),d(st,"library_images","image",ce),d(st,"library_effects","effect",we),d(st,"library_materials","material",ne),d(st,"library_cameras","camera",Re),d(st,"library_lights","light",Fe),d(st,"library_geometries","geometry",Ce),d(st,"library_nodes","node",Pe),d(st,"library_visual_scenes","visual_scene",vt),d(st,"library_kinematics_models","kinematics_model",Tn),d(st,"library_physics_models","physics_model",Yi),d(st,"scene","instance_kinematics_scene",To),_(Je.animations,S),_(Je.clips,Z),_(Je.controllers,_e),_(Je.images,de),_(Je.effects,G),_(Je.materials,Te),_(Je.cameras,De),_(Je.lights,bt),_(Je.geometries,Pt),_(Je.visualScenes,We),ci(),ie();const vr=hn(n(st,"scene")[0]);return vr.animations=_r,Jt.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),vr.rotation.set(-Math.PI/2,0,0)),vr.scale.multiplyScalar(Jt.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),_r},kinematics:Pc,library:Je,scene:vr}}}const lu=new X,Kv=new un,Kr=new Ye,gi=new Ye,Zr=new Zt,$r=new X(1,1,1),Jr=new X;class Eo extends Lt{constructor(...e){super(...e),this.urdfNode=null,this.urdfName=""}copy(e,t){return super.copy(e,t),this.urdfNode=e.urdfNode,this.urdfName=e.urdfName,this}}class Zv extends Eo{constructor(...e){super(...e),this.isURDFCollider=!0,this.type="URDFCollider"}}class $v extends Eo{constructor(...e){super(...e),this.isURDFVisual=!0,this.type="URDFVisual"}}class mh extends Eo{constructor(...e){super(...e),this.isURDFLink=!0,this.type="URDFLink"}}class gh extends Eo{get jointType(){return this._jointType}set jointType(e){if(this.jointType!==e)switch(this._jointType=e,this.matrixWorldNeedsUpdate=!0,e){case"fixed":this.jointValue=[];break;case"continuous":case"revolute":case"prismatic":this.jointValue=new Array(1).fill(0);break;case"planar":this.jointValue=new Array(3).fill(0),this.axis=new X(0,0,1);break;case"floating":this.jointValue=new Array(6).fill(0);break}}get angle(){return this.jointValue[0]}constructor(...e){super(...e),this.isURDFJoint=!0,this.type="URDFJoint",this.jointValue=null,this.jointType="fixed",this.axis=new X(1,0,0),this.limit={lower:0,upper:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(e,t){return super.copy(e,t),this.jointType=e.jointType,this.axis=e.axis.clone(),this.limit.lower=e.limit.lower,this.limit.upper=e.limit.upper,this.ignoreLimits=!1,this.jointValue=[...e.jointValue],this.origPosition=e.origPosition?e.origPosition.clone():null,this.origQuaternion=e.origQuaternion?e.origQuaternion.clone():null,this.mimicJoints=[...e.mimicJoints],this}setJointValue(...e){e=e.map(n=>n===null?null:parseFloat(n)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let t=!1;switch(this.mimicJoints.forEach(n=>{t=n.updateFromMimickedJoint(...e)||t}),this.jointType){case"fixed":return t;case"continuous":case"revolute":{let n=e[0];return n==null||n===this.jointValue[0]?t:(!this.ignoreLimits&&this.jointType==="revolute"&&(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.quaternion.setFromAxisAngle(this.axis,n).premultiply(this.origQuaternion),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):t)}case"prismatic":{let n=e[0];return n==null||n===this.jointValue[0]?t:(this.ignoreLimits||(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.position.copy(this.origPosition),lu.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(lu,n),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):t)}case"floating":return this.jointValue.every((n,i)=>e[i]===n||e[i]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],this.jointValue[3]=e[3]!==null?e[3]:this.jointValue[3],this.jointValue[4]=e[4]!==null?e[4]:this.jointValue[4],this.jointValue[5]=e[5]!==null?e[5]:this.jointValue[5],gi.compose(this.origPosition,this.origQuaternion,$r),Zr.setFromEuler(Kv.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],"XYZ")),Jr.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),Kr.compose(Jr,Zr,$r),gi.premultiply(Kr),this.position.setFromMatrixPosition(gi),this.rotation.setFromRotationMatrix(gi),this.matrixWorldNeedsUpdate=!0,!0);case"planar":return this.jointValue.every((n,i)=>e[i]===n||e[i]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],gi.compose(this.origPosition,this.origQuaternion,$r),Zr.setFromAxisAngle(this.axis,this.jointValue[2]),Jr.set(this.jointValue[0],this.jointValue[1],0),Kr.compose(Jr,Zr,$r),gi.premultiply(Kr),this.position.setFromMatrixPosition(gi),this.rotation.setFromRotationMatrix(gi),this.matrixWorldNeedsUpdate=!0,!0)}return t}}class uu extends gh{constructor(...e){super(...e),this.type="URDFMimicJoint",this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...e){const t=e.map(n=>n*this.multiplier+this.offset);return super.setJointValue(...t)}copy(e,t){return super.copy(e,t),this.mimicJoint=e.mimicJoint,this.offset=e.offset,this.multiplier=e.multiplier,this}}class Jv extends mh{constructor(...e){super(...e),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(e,t){super.copy(e,t),this.urdfRobotNode=e.urdfRobotNode,this.robotName=e.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(n=>{n.isURDFJoint&&n.urdfName in e.joints&&(this.joints[n.urdfName]=n),n.isURDFLink&&n.urdfName in e.links&&(this.links[n.urdfName]=n),n.isURDFCollider&&n.urdfName in e.colliders&&(this.colliders[n.urdfName]=n),n.isURDFVisual&&n.urdfName in e.visual&&(this.visual[n.urdfName]=n)});for(const n in this.joints)this.joints[n].mimicJoints=this.joints[n].mimicJoints.map(i=>this.joints[i.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(e){return this.frames[e]}setJointValue(e,...t){const n=this.joints[e];return n?n.setJointValue(...t):!1}setJointValues(e){let t=!1;for(const n in e){const i=e[n];Array.isArray(i)?t=this.setJointValue(n,...i)||t:t=this.setJointValue(n,i)||t}return t}}const ua=new Zt,hu=new un;function hs(s){return s?s.trim().split(/\s+/g).map(e=>parseFloat(e)):[0,0,0]}function du(s,e,t=!1){t||s.rotation.set(0,0,0),hu.set(e[0],e[1],e[2],"ZYX"),ua.setFromEuler(hu),ua.multiply(s.quaternion),s.quaternion.copy(ua)}class Qv{constructor(e){this.manager=e||rh,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions={}}loadAsync(e){return new Promise((t,n)=>{this.load(e,t,null,n)})}load(e,t,n,i){const r=this.manager,o=zi.extractUrlBase(e),a=this.manager.resolveURL(e);r.itemStart(a),fetch(a,this.fetchOptions).then(c=>{if(c.ok)return n&&n(null),c.text();throw new Error(`URDFLoader: Failed to load url '${a}' with error code ${c.status} : ${c.statusText}.`)}).then(c=>{const l=this.parse(c,this.workingPath||o);t(l),r.itemEnd(a)}).catch(c=>{i?i(c):console.error("URDFLoader: Error loading file.",c),r.itemError(a),r.itemEnd(a)})}parse(e,t=this.workingPath){const n=this.packages,i=this.loadMeshCb,r=this.parseVisual,o=this.parseCollision,a=this.manager,c={},l={},u={};function h(x){if(!/^package:\/\//.test(x))return t?t+x:x;const[S,y]=x.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof n=="string")return n.endsWith(S)?n+"/"+y:n+"/"+S+"/"+y;if(n instanceof Function)return n(S)+"/"+y;if(typeof n=="object")return S in n?n[S]+"/"+y:(console.error(`URDFLoader : ${S} not found in provided package list.`),null)}function p(x){let S;x instanceof Document?S=[...x.children]:x instanceof Element?S=[x]:S=[...new DOMParser().parseFromString(x,"text/xml").children];const y=S.filter(C=>C.nodeName==="robot").pop();return d(y)}function d(x){const S=[...x.children],y=S.filter(B=>B.nodeName.toLowerCase()==="link"),C=S.filter(B=>B.nodeName.toLowerCase()==="joint"),I=S.filter(B=>B.nodeName.toLowerCase()==="material"),L=new Jv;L.robotName=x.getAttribute("name"),L.urdfRobotNode=x,I.forEach(B=>{const R=B.getAttribute("name");u[R]=m(B)});const N={},E={};y.forEach(B=>{const R=B.getAttribute("name"),z=x.querySelector(`child[link="${R}"]`)===null;c[R]=g(B,N,E,z?L:null)}),C.forEach(B=>{const R=B.getAttribute("name");l[R]=_(B)}),L.joints=l,L.links=c,L.colliders=E,L.visual=N;const w=Object.values(l);return w.forEach(B=>{B instanceof uu&&l[B.mimicJoint].mimicJoints.push(B)}),w.forEach(B=>{const R=new Set,z=b=>{if(R.has(b))throw new Error("URDFLoader: Detected an infinite loop of mimic joints.");R.add(b),b.mimicJoints.forEach(W=>{z(W)})};z(B)}),L.frames={...E,...N,...c,...l},L}function _(x){const S=[...x.children],y=x.getAttribute("type");let C;const I=S.find(R=>R.nodeName.toLowerCase()==="mimic");I?(C=new uu,C.mimicJoint=I.getAttribute("joint"),C.multiplier=parseFloat(I.getAttribute("multiplier")||1),C.offset=parseFloat(I.getAttribute("offset")||0)):C=new gh,C.urdfNode=x,C.name=x.getAttribute("name"),C.urdfName=C.name,C.jointType=y;let L=null,N=null,E=[0,0,0],w=[0,0,0];S.forEach(R=>{const z=R.nodeName.toLowerCase();z==="origin"?(E=hs(R.getAttribute("xyz")),w=hs(R.getAttribute("rpy"))):z==="child"?N=c[R.getAttribute("link")]:z==="parent"?L=c[R.getAttribute("link")]:z==="limit"&&(C.limit.lower=parseFloat(R.getAttribute("lower")||C.limit.lower),C.limit.upper=parseFloat(R.getAttribute("upper")||C.limit.upper))}),L.add(C),C.add(N),du(C,w),C.position.set(E[0],E[1],E[2]);const B=S.filter(R=>R.nodeName.toLowerCase()==="axis")[0];if(B){const R=B.getAttribute("xyz").split(/\s+/g).map(z=>parseFloat(z));C.axis=new X(R[0],R[1],R[2]),C.axis.normalize()}return C}function g(x,S,y,C=null){C===null&&(C=new mh);const I=[...x.children];return C.name=x.getAttribute("name"),C.urdfName=C.name,C.urdfNode=x,r&&I.filter(N=>N.nodeName.toLowerCase()==="visual").forEach(N=>{const E=f(N,u);if(C.add(E),N.hasAttribute("name")){const w=N.getAttribute("name");E.name=w,E.urdfName=w,S[w]=E}}),o&&I.filter(N=>N.nodeName.toLowerCase()==="collision").forEach(N=>{const E=f(N);if(C.add(E),N.hasAttribute("name")){const w=N.getAttribute("name");E.name=w,E.urdfName=w,y[w]=E}}),C}function m(x){const S=[...x.children],y=new ys;return y.name=x.getAttribute("name")||"",S.forEach(C=>{const I=C.nodeName.toLowerCase();if(I==="color"){const L=C.getAttribute("rgba").split(/\s/g).map(N=>parseFloat(N));y.color.setRGB(L[0],L[1],L[2]),y.opacity=L[3],y.transparent=L[3]<1,y.depthWrite=!y.transparent}else if(I==="texture"){const L=C.getAttribute("filename");if(L){const N=new Tc(a),E=h(L);y.map=N.load(E),y.map.colorSpace=It}}}),y}function f(x,S={}){const y=x.nodeName.toLowerCase()==="collision",C=[...x.children];let I=null;const L=C.filter(E=>E.nodeName.toLowerCase()==="material")[0];if(L){const E=L.getAttribute("name");E&&E in S?I=S[E]:I=m(L)}else I=new ys;const N=y?new Zv:new $v;return N.urdfNode=x,C.forEach(E=>{const w=E.nodeName.toLowerCase();if(w==="geometry"){const B=E.children[0].nodeName.toLowerCase();if(B==="mesh"){const R=E.children[0].getAttribute("filename"),z=h(R);if(z!==null){const b=E.children[0].getAttribute("scale");if(b){const W=hs(b);N.scale.set(W[0],W[1],W[2])}i(z,a,(W,H)=>{H?console.error("URDFLoader: Error loading mesh.",H):W&&(W instanceof gt&&(W.material=I),W.position.set(0,0,0),W.quaternion.identity(),N.add(W))})}}else if(B==="box"){const R=new gt;R.geometry=new wn(1,1,1),R.material=I;const z=hs(E.children[0].getAttribute("size"));R.scale.set(z[0],z[1],z[2]),N.add(R)}else if(B==="sphere"){const R=new gt;R.geometry=new wc(1,30,30),R.material=I;const z=parseFloat(E.children[0].getAttribute("radius"))||0;R.scale.set(z,z,z),N.add(R)}else if(B==="cylinder"){const R=new gt;R.geometry=new Ec(1,1,1,30),R.material=I;const z=parseFloat(E.children[0].getAttribute("radius"))||0,b=parseFloat(E.children[0].getAttribute("length"))||0;R.scale.set(z,b,z),R.rotation.set(Math.PI/2,0,0),N.add(R)}}else if(w==="origin"){const B=hs(E.getAttribute("xyz")),R=hs(E.getAttribute("rpy"));N.position.set(B[0],B[1],B[2]),N.rotation.set(0,0,0),du(N,R)}}),N}return p(e)}defaultMeshLoader(e,t,n){/\.stl$/i.test(e)?new qv(t).load(e,r=>{const o=new gt(r,new ys);n(o)}):/\.dae$/i.test(e)?new Yv(t).load(e,r=>n(r.scene)):console.warn(`URDFLoader: Could not load model at ${e}.
No loader available`)}}function ex(s){return{packageName:s,packagePath:`./packages/${s}`,urdfPath:`./packages/${s}/urdf/${s}.urdf`}}const tx=new Map([[Is.OpticalTable,"digital-twin-lab-v4-no-arm"],[Is.Arm,"dorna2-rebuild"]]),nx=new Map(Array.from(tx.entries()).map(([s,e])=>[s,ex(e)]));async function ix(s,e){return s.packages={[e.packageName]:e.packagePath},await s.loadAsync(e.urdfPath)}async function sx(s){const e=new sh,t=new Qv(e),n=nx.get(s);if(!n)throw new Error(`URDF package not found for robot type: ${s}`);return await ix(t,n)}function fu(s,e){if(e===ad)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===$a||e===Nu){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===$a)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class rx extends kn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ux(t)}),this.register(function(t){return new hx(t)}),this.register(function(t){return new yx(t)}),this.register(function(t){return new bx(t)}),this.register(function(t){return new Mx(t)}),this.register(function(t){return new fx(t)}),this.register(function(t){return new px(t)}),this.register(function(t){return new mx(t)}),this.register(function(t){return new gx(t)}),this.register(function(t){return new lx(t)}),this.register(function(t){return new _x(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new xx(t)}),this.register(function(t){return new vx(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new Sx(t)}),this.register(function(t){return new Ex(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=zi.extractUrlBase(e);o=zi.resolveURL(l,this.path)}else o=zi.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Us(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===_h){try{o[ft.KHR_BINARY_GLTF]=new wx(e)}catch(h){i&&i(h);return}r=JSON.parse(o[ft.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new kx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],p=r.extensionsRequired||[];switch(h){case ft.KHR_MATERIALS_UNLIT:o[h]=new cx;break;case ft.KHR_DRACO_MESH_COMPRESSION:o[h]=new Tx(r,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:o[h]=new Ax;break;case ft.KHR_MESH_QUANTIZATION:o[h]=new Rx;break;default:p.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function ox(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ax{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Ke(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],rn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Rc(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ah(u),l.distance=h;break;case"spot":l=new oh(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ti(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class cx{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return Wt}extendParams(e,t,n){const i=[];e.color=new Ke(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],rn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,It))}return Promise.all(i)}}class lx{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class ux{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new rt(a,a)}return Promise.all(r)}}class hx{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class dx{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class fx{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ke(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],rn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,It)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class px{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class mx{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ke().setRGB(a[0],a[1],a[2],rn),Promise.all(r)}}class gx{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class _x{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ke().setRGB(a[0],a[1],a[2],rn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,It)),Promise.all(r)}}class vx{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class xx{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class yx{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class bx{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Mx{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Sx{constructor(e){this.name=ft.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,p=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,p,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,p,i.mode,i.filter),d})})}else return null}}class Ex{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==yn.TRIANGLES&&l.mode!==yn.TRIANGLE_STRIP&&l.mode!==yn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],p=l[0].count,d=[];for(const _ of h){const g=new Ye,m=new X,f=new Zt,x=new X(1,1,1),S=new $_(_.geometry,_.material,p);for(let y=0;y<p;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,y),c.SCALE&&x.fromBufferAttribute(c.SCALE,y),S.setMatrixAt(y,g.compose(m,f,x));for(const y in c)if(y==="_COLOR_0"){const C=c[y];S.instanceColor=new ec(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&_.geometry.setAttribute(y,c[y]);Lt.prototype.copy.call(S,_),this.parser.assignFinalMaterial(S),d.push(S)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const _h="glTF",Ys=12,pu={JSON:1313821514,BIN:5130562};class wx{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ys),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_h)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ys,r=new DataView(e,Ys);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===pu.JSON){const l=new Uint8Array(e,Ys+o,a);this.content=n.decode(l)}else if(c===pu.BIN){const l=Ys+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Tx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=rc[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=rc[u]||u.toLowerCase();if(o[u]!==void 0){const p=n.accessors[e.attributes[u]],d=bs[p.componentType];l[h]=d.name,c[h]=p.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,p){i.decodeDracoFile(u,function(d){for(const _ in d.attributes){const g=d.attributes[_],m=c[_];m!==void 0&&(g.normalized=m)}h(d)},a,l,rn,p)})})}}class Ax{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Rx{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}}class vh extends ur{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,p=h*h,d=p*h,_=e*l,g=_-l,m=-2*d+3*p,f=d-p,x=1-m,S=f-p+h;for(let y=0;y!==a;y++){const C=o[g+y+a],I=o[g+y+c]*u,L=o[_+y+a],N=o[_+y]*u;r[y]=x*C+S*I+m*L+f*N}return r}}const Cx=new Zt;class Ix extends vh{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Cx.fromArray(r).normalize().toArray(r),r}}const yn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},bs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},mu={9728:sn,9729:Kt,9984:Eu,9985:Qr,9986:$s,9987:Nn},gu={33071:Sn,33648:ao,10497:Mn},ha={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_i={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Lx={CUBICSPLINE:void 0,LINEAR:sr,STEP:ir},da={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Px(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Fn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hn})),s.DefaultMaterial}function Pi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ti(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Dx(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const p=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(p)}if(i){const p=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(p)}if(r){const p=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(p)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],p=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=p),s.morphTargetsRelative=!0,s})}function Nx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ux(s){let e;const t=s.extensions&&s.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+fa(t.attributes):e=s.indices+":"+fa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+fa(s.targets[n]);return e}function fa(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function oc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ox(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Fx=new Ye;class kx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ox,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Tc(this.options.manager):this.textureLoader=new p0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Us(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Pi(r,a,i),ti(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(zi.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=ha[i.type],a=bs[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Ht(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=ha[i.type],l=bs[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,p=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(d&&d!==h){const f=Math.floor(p/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let S=t.cache.get(x);S||(g=new l(a,f*d,i.count*d/u),S=new q_(g,d/u),t.cache.add(x,S)),m=new bc(S,c,p%d/u,_)}else a===null?g=new l(i.count*c):g=new l(a,p,i.count*c),m=new Ht(g,c,_);if(i.sparse!==void 0){const f=ha.SCALAR,x=bs[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,C=new x(o[1],S,i.sparse.count*f),I=new l(o[2],y,i.sparse.count*c);a!==null&&(m=new Ht(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let L=0,N=C.length;L<N;L++){const E=C[L];if(m.setX(E,I[L*c]),c>=2&&m.setY(E,I[L*c+1]),c>=3&&m.setZ(E,I[L*c+2]),c>=4&&m.setW(E,I[L*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const p=(r.samplers||{})[o.sampler]||{};return u.magFilter=mu[p.magFilter]||Kt,u.minFilter=mu[p.minFilter]||Nn,u.wrapS=gu[p.wrapS]||Mn,u.wrapT=gu[p.wrapT]||Mn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==sn&&u.minFilter!==Kt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const p=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(p),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(p,d){let _=p;t.isImageBitmapLoader===!0&&(_=function(g){const m=new Ft(g);m.needsUpdate=!0,p(m)}),t.load(zi.resolveURL(h,r.path),_,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),ti(h,o),h.userData.mimeType=o.mimeType||Ox(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ft.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new ms,ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Bi,ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Fn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[ft.KHR_MATERIALS_UNLIT]){const h=i[ft.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ke(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const p=h.baseColorFactor;a.color.setRGB(p[0],p[1],p[2],rn),a.opacity=p[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,It)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=bn);const u=r.alphaMode||da.OPAQUE;if(u===da.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===da.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Wt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new rt(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Wt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Wt){const h=r.emissiveFactor;a.emissive=new Ke().setRGB(h[0],h[1],h[2],rn)}return r.emissiveTexture!==void 0&&o!==Wt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,It)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),ti(h,r),t.associations.set(h,{materials:e}),r.extensions&&Pi(i,h,r),h})}createUniqueName(e){const t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return _u(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=Ux(l),h=i[u];if(h)o.push(h.promise);else{let p;l.extensions&&l.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?p=r(l):p=_u(new jt,l,t),i[u]={primitive:l,promise:p},o.push(p)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?Px(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],m=o[d];let f;const x=l[d];if(m.mode===yn.TRIANGLES||m.mode===yn.TRIANGLE_STRIP||m.mode===yn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new Qu(g,x):new gt(g,x),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===yn.TRIANGLE_STRIP?f.geometry=fu(f.geometry,Nu):m.mode===yn.TRIANGLE_FAN&&(f.geometry=fu(f.geometry,$a));else if(m.mode===yn.LINES)f=new fo(g,x);else if(m.mode===yn.LINE_STRIP)f=new Mo(g,x);else if(m.mode===yn.LINE_LOOP)f=new J_(g,x);else if(m.mode===yn.POINTS)f=new oo(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&Nx(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),ti(f,r),m.extensions&&Pi(i,f,m),t.assignFinalMaterial(f),h.push(f)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Pi(i,h[0],r),h[0];const p=new Vn;r.extensions&&Pi(i,p,r),t.associations.set(p,{meshes:e});for(let d=0,_=h.length;d<_;d++)p.add(h[d]);return p})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(tn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new xo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ti(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const p=new Ye;r!==null&&p.fromArray(r.array,l*16),c.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new bo(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,p=i.channels.length;h<p;h++){const d=i.channels[h],_=i.samplers[d.sampler],g=d.target,m=g.node,f=i.parameters!==void 0?i.parameters[_.input]:_.input,x=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",x)),l.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const p=h[0],d=h[1],_=h[2],g=h[3],m=h[4],f=[];for(let x=0,S=p.length;x<S;x++){const y=p[x],C=d[x],I=_[x],L=g[x],N=m[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const E=n._createAnimationTracks(y,C,I,L,N);if(E)for(let w=0;w<E.length;w++)f.push(E[w])}return new or(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],p=l[2];p!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(p,Fx)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Mc:l.length>1?u=new Vn:l.length===1?u=l[0]:u=new Lt,u!==l[0])for(let h=0,p=l.length;h<p;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ti(u,r),r.extensions&&Pi(n,u,r),r.matrix!==void 0){const h=new Ye;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Vn;n.name&&(r.name=i.createUniqueName(n.name)),ti(r,n),n.extensions&&Pi(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[p,d]of i.associations)(p instanceof ln||p instanceof Ft)&&h.set(p,d);return u.traverse(p=>{const d=i.associations.get(p);d!=null&&h.set(p,d)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];_i[r.path]===_i.weights?e.traverse(function(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}):c.push(a);let l;switch(_i[r.path]){case _i.weights:l=Cs;break;case _i.rotation:l=Wi;break;case _i.position:case _i.scale:l=Si;break;default:switch(n.itemSize){case 1:l=Cs;break;case 2:case 3:default:l=Si;break}break}const u=i.interpolation!==void 0?Lx[i.interpolation]:sr,h=this._getArrayFromAccessor(n);for(let p=0,d=c.length;p<d;p++){const _=new l(c[p]+"."+_i[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=oc(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Wi?Ix:vh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Bx(s,e,t){const n=e.attributes,i=new gn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new X(c[0],c[1],c[2]),new X(l[0],l[1],l[2])),a.normalized){const u=oc(bs[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new X,c=new X;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const p=t.json.accessors[h.POSITION],d=p.min,_=p.max;if(d!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),p.normalized){const g=oc(bs[p.componentType]);c.multiplyScalar(g)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Gn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function _u(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=rc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return dt.workingColorSpace!==rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),ti(s,e),Bx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Dx(s,e.targets,t):s})}async function zx(s,e){const t=Mv[s],n=e.binaryFiles.get(t);if(!n)return console.error("GLB file not found!",t),null;const i=new rx,r=new Uint8Array(n);return new Promise((o,a)=>{i.parse(r.buffer,"",c=>{const l=c.scene.children[0];l.position.set(0,0,0),o({model:l,animations:c.animations})},c=>{console.error("Error loading GLB:",c),a(c)})})}async function Vx(s){let e=new Map;const t=[So.Human];for(const n of t){let i=await zx(n,s);i&&e.set(n,i)}return e}async function Hx(s){const e=new Map,t=[mn.Error,mn.PhotoCamera,mn.Timelapse,mn.Timer];for(const n of t){const i=s.binaryFiles.get(Sv[n]);if(!i)throw new Error(`Failed to load png data: ${n}`);const r=new Blob([i],{type:"image/png"}),o=URL.createObjectURL(r),a=new Image;await new Promise((c,l)=>{a.onload=()=>{const u=new Ft(a);u.needsUpdate=!0,e.set(n,u),c()},a.onerror=l,a.src=o}),URL.revokeObjectURL(o)}return e}async function Gx(){const s=await Promise.all(Object.values(Is).filter(e=>typeof e=="number").map(async e=>[e,await sx(e)]));return new Map(s)}function Wx(s){let e=0;function t(n){n.type==="URDFVisual"&&n.traverse(r=>{r instanceof gt&&e++});for(const i of n.children)t(i)}return s.forEach(n=>{t(n)}),e}async function jx(s,e,t=20){let n=0;for(;n!==e;)await new Promise(i=>setTimeout(i,t)),n=Wx(s.getRobots())}const ni=class ni{constructor(){Ee(this,"files");Ee(this,"modelMap");Ee(this,"robotMap");Ee(this,"animationMap");Ee(this,"textureMap");this.files={textFiles:new Map,binaryFiles:new Map},this.modelMap=new Map,this.robotMap=new Map,this.animationMap=new Map,this.textureMap=new Map}static async init(){if(!ni.instance){const e=new ni;e.files=await Fv();const[t,n,i,r]=await Promise.all([Xv(e.files),Vx(e.files),Hx(e.files),Gx()]);e.modelMap=t,e.animationMap=n,e.textureMap=i,e.robotMap=r,ni.instance=e,await jx(e,11)}return ni.instance}static getInstance(){if(!ni.instance)throw new Error("Assets has not been initialized. Call init) first.");return ni.instance}getModels(){return this.modelMap}getRobots(){return this.robotMap}getAnimations(){return this.animationMap}getTextures(){return this.textureMap}getFiles(){return this.files}};Ee(ni,"instance");let ji=ni;class gs{constructor({object:e}){Ee(this,"object");Ee(this,"bubbles");Ee(this,"selectBoxes");this.bubbles=[],this.selectBoxes=[],this.object=e}}const vu={[ki.STANDBY]:{text:"Idle",font:"bold 50px Arial",color:"black",texture:mn.Timer,textureColor:"black"},[ki.CAPTURING]:{text:"Capturing",font:"bold 50px Arial",color:"black",texture:mn.PhotoCamera,textureColor:"black"},[ki.ERROR]:{text:"Error",font:"bold 50px Arial",color:"black",texture:mn.Error,textureColor:"red"},[ki.LOADING]:{text:"Loading",font:"bold 50px Arial",color:"black",texture:mn.Timelapse,textureColor:"black"}};class Xx{constructor(){Ee(this,"mesh");this.mesh=qx(vu[ki.STANDBY])}setState(e){const t=xh(vu[e]),n=this.mesh.material;n.map=t,n.needsUpdate=!0}getMesh(){return this.mesh}setPosition(e){this.mesh.position.copy(e)}update(e){const t=this.mesh.position,n=e.position.clone();n.y=t.y,this.mesh.lookAt(n)}}function qx(s){const e=new Ls(1,1),t=new Wt({map:xh(s),transparent:!0,side:bn}),n=new gt(e,t);return n.scale.set(.35,.35,1),n}function xh(s){const{text:e,font:t,color:n,texture:i,textureColor:r}=s,o=15,a=400,c=200,l=40,u=document.createElement("canvas");u.width=a+o*2,u.height=c+o*2+l;const h=u.getContext("2d");return h.clearRect(0,0,u.width,u.height),Yx(h,u,{padding:o,bubbleWidth:a,bubbleHeight:c,tailSize:l}),Kx(h,u,i,r,o,c),Zx(h,u,e,t,n,o,c),new eh(u)}function Yx(s,e,{padding:t,bubbleWidth:n,bubbleHeight:i,tailSize:r}){const o=s.createRadialGradient(e.width/2,e.height/2,10,e.width/2,e.height/2,e.width/2);o.addColorStop(0,"white"),o.addColorStop(1,"gray"),s.fillStyle=o,s.strokeStyle="black",s.lineWidth=4,s.beginPath(),s.moveTo(t+20,t),s.lineTo(n-20+t,t),s.quadraticCurveTo(n+t,t,n+t,t+20),s.lineTo(n+t,i-20+t),s.quadraticCurveTo(n+t,i+t,n-20+t,i+t),s.lineTo(t+40,i+t),s.lineTo(t+20,i+t+r),s.lineTo(t,i+t),s.quadraticCurveTo(t,i+t,t,i-20+t),s.lineTo(t,t+20),s.quadraticCurveTo(t,t,t+20,t),s.closePath(),s.fill(),s.stroke()}function Kx(s,e,t,n,i,r){const o=ji.getInstance().getTextures().get(t),a=document.createElement("canvas"),c=a.getContext("2d");a.width=o.image.width,a.height=o.image.height,c.drawImage(o.image,0,0),c.globalCompositeOperation="source-atop",c.fillStyle=n,c.fillRect(0,0,a.width,a.height),c.globalCompositeOperation="source-over";const l=140,u=140,h=(e.width-l)/2,p=i/2+(r-u)/2;s.drawImage(a,h,p,l,u)}function Zx(s,e,t,n,i,r,o){s.font=n;const a=s.measureText(t),c=a.actualBoundingBoxAscent+a.actualBoundingBoxDescent,l=140,u=r/2+(o-l)/2,h=e.width/2,p=u+l+c/2;s.fillStyle=i,s.textAlign="center",s.textBaseline="middle",s.shadowColor="rgba(0, 0, 0, 0.5)",s.shadowBlur=3,s.shadowOffsetX=2,s.shadowOffsetY=2,s.fillText(t,h,p)}const pn=class pn{constructor(e=pn.getDefaultBounds()){Ee(this,"box");Ee(this,"state",ii.DEFAULT);const t=new wn(e.max.x-e.min.x,e.max.y-e.min.y,e.max.z-e.min.z),n=new Wt({color:11202048,transparent:!0,opacity:.2,depthWrite:!1});this.box=new gt(t,n),this.setPosition(new X(.95,1,.41))}static getDefaultBounds(){const e=pn.DEFAULT_SIZE;return new gn(new X(-e,-e,-e),new X(e,e,e))}setSize(e,t,n){this.box.geometry.dispose(),this.box.geometry=new wn(e,t,n)}setPosition(e){this.box.position.copy(e)}getMesh(){return this.box}setVisible(e){this.box.visible=e}setColor(e){this.box.material.color.set(e)}setState(e){this.state=e}getState(){return this.state}getStateColor(e){switch(e){case ii.DEFAULT:return pn.COLOR_DEFAULT;case ii.SELECTED:return pn.COLOR_SELECTED;case ii.HOVER:return pn.COLOR_HOVER;case ii.DISABLED:return pn.COLOR_DISABLED;default:return 0}}update(){this.setColor(this.getStateColor(this.state))}isVisible(){return this.getMesh().visible}};Ee(pn,"DEFAULT_SIZE",.25),Ee(pn,"COLOR_DEFAULT",11202048),Ee(pn,"COLOR_HOVER",16755200),Ee(pn,"COLOR_SELECTED",43775),Ee(pn,"COLOR_DISABLED",5592405);let ac=pn;function xu(s,e,t){const n=[s];for(;n.length>0;){const i=n.pop();if(i.type==="URDFVisual"){const r=yh(i);r&&(r.material=e(t))}n.push(...i.children)}}function Ks(s,e){const t=[e];for(;t.length>0;){const n=t.pop();if(n.type==="URDFVisual"){const i=yh(n);if(i&&n.parent&&n.parent.name===s)return i}t.push(...n.children)}return null}function yh(s){let e=null;return s.traverse(t=>{!e&&t instanceof gt&&(e=t)}),e}function Di(s){return new Fn({color:s})}function $x(s){const t=new gn().setFromObject(s.object).min.y;t<yv&&(s.object.position.y-=t)}function Jx(s){return ji.getInstance().getAnimations().get(s)}function Qx(s){if(s.bubbles.length!==10)throw new Error("Expected exactly 10 speech buubles.");if(s.selectBoxes.length!==10)throw new Error("Expected exactly 10 selection boxes.")}class ey{constructor(){}createArmTest(){let e=new Lt,t=new gs({object:e}),n=new wn(2,.1,.1),i=new Wt({color:43520}),r=new gt(n,i),o=new wn(.3,.3,.3),a=new Wt({color:10035200,transparent:!0,opacity:.9}),c=new gt(o,a);return c.position.set(1,.75,2),r.position.set(2,.75,2),e.add(r),e.add(c),t}createArm(){const t={object:ji.getInstance().getRobots().get(Is.Arm)};let n=new gs(t);return n.object.position.y+=2,n.object.rotation.x=tn.degToRad(270),xu(n.object,Di,16711680),Ks("gripper",n.object).material=Di(65520),Ks("arm-base",n.object).material=Di(65520),n.object.updateMatrixWorld(!0),n}createHuman(){let e=Jx(So.Human);const t={object:e.model};t.object.animations=e.animations;let n=new gs(t);const i=tn.degToRad(180);return n.object.rotateY(i),n.object.scale.set(.2,.2,.2),$x(n),n.object.position.z=3,n.object.position.x=-.5,n}createOpticalTable(){let e=ji.getInstance().getRobots().get(Is.OpticalTable);const t=Array.from({length:10},()=>new Xx),n=Array.from({length:10},()=>new ac),i={object:e};let r=new gs(i);return r.bubbles=t,r.selectBoxes=n,r.object.position.y+=.855,r.object.rotation.x=tn.degToRad(270),xu(r.object,Di,16777200),Ks("plate-microscope",r.object).material=Di(15623680),Ks("plate-incubator",r.object).material=Di(15623680),Ks("slide",r.object).material=Di(15623680),r.object.updateMatrixWorld(!0),r}createActors(){const e=this.createOpticalTable();return Qx(e),{player:this.createHuman(),table:e,arm:this.createArm(),armTest:this.createArmTest()}}}class wo extends gt{constructor(){const e=wo.SkyShader,t=new ai({name:e.name,uniforms:Gu.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:nn,depthWrite:!1});super(new wn(1,1,1),t),this.isSky=!0}}wo.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new X},up:{value:new X(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class ty{constructor(e){Ee(this,"entities");this.entities=e}createSky(){const e=new wo;e.scale.setScalar(1e4);const t=new X,n=tn.degToRad(90),i=tn.degToRad(0);return t.setFromSphericalCoords(1,n,i),e.material.uniforms.rayleigh.value=.95,e.material.uniforms.mieCoefficient.value=0,e.material.uniforms.mieDirectionalG.value=0,e.material.uniforms.sunPosition.value.copy(t),e}createScene(){const e=new Ju;return ny().forEach(t=>e.add(t)),this.populateScene(e),e.add(this.createSky()),e}populateScene(e){for(const t of this.entities.getEntities())e.add(t.object);for(const t of this.entities.getBubbles())e.add(t.getMesh());for(const t of this.entities.getSelectBoxes())e.add(t.getMesh())}}function ny(){const s=new Rc(16777215,1);s.position.set(5,5,5).normalize();const e=new ch(4210752,.5),t=new u0(16777215,2236962,.2);return[s,e,t]}const bh=Math.sqrt(3),iy=.5*(bh-1),Zs=(3-bh)/6,yu=s=>Math.floor(s)|0,bu=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function sy(s=Math.random){const e=ry(s),t=new Float64Array(e).map(i=>bu[i%12*2]),n=new Float64Array(e).map(i=>bu[i%12*2+1]);return function(r,o){let a=0,c=0,l=0;const u=(r+o)*iy,h=yu(r+u),p=yu(o+u),d=(h+p)*Zs,_=h-d,g=p-d,m=r-_,f=o-g;let x,S;m>f?(x=1,S=0):(x=0,S=1);const y=m-x+Zs,C=f-S+Zs,I=m-1+2*Zs,L=f-1+2*Zs,N=h&255,E=p&255;let w=.5-m*m-f*f;if(w>=0){const z=N+e[E],b=t[z],W=n[z];w*=w,a=w*w*(b*m+W*f)}let B=.5-y*y-C*C;if(B>=0){const z=N+x+e[E+S],b=t[z],W=n[z];B*=B,c=B*B*(b*y+W*C)}let R=.5-I*I-L*L;if(R>=0){const z=N+1+e[E+1],b=t[z],W=n[z];R*=R,l=R*R*(b*I+W*L)}return 70*(a+c+l)}}function ry(s){const t=new Uint8Array(512);for(let n=0;n<512/2;n++)t[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(s()*(256-n)),r=t[n];t[n]=t[i],t[i]=r}for(let n=256;n<512;n++)t[n]=t[n-256];return t}function oy(){const s=new Ls(10,10),e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");if(t){const o=sy(),a=.01;for(let c=0;c<e.height;c++)for(let l=0;l<e.width;l++){const u=l/e.width-.5,h=c/e.height-.5,p=o(u/a,h/a),d=Math.floor((p+1)*127.5);t.fillStyle=`rgb(${d}, ${d}, ${d})`,t.fillRect(l,c,1,1)}}const n=new eh(e);n.wrapS=Mn,n.wrapT=Mn,n.repeat.set(4,4);const i=new Fn({map:n}),r=new gt(s,i);return r.rotation.x=-Math.PI/2,r.position.y=0,r}function ay(){return new Fn({color:3447003,metalness:.3,roughness:.7})}class cy{constructor(){}createFloor(){const t={object:oy()};return new gs(t)}createCube(){const e=new wn(1,1,1),t=ay(),n=new gt(e,t);n.position.y=.5,n.position.x=1,n.position.z=-4.5;const i={object:n};return new gs(i)}createRoom(){return{floor:this.createFloor(),cube:this.createCube()}}}class ly{constructor(e,t){Ee(this,"room");Ee(this,"actors");this.room=e,this.actors=t}getEntities(){return[...Object.values(this.room),...Object.values(this.actors)]}getBubbles(){const e=this.getEntities(),t=[];for(const n of e)t.push(...n.bubbles);return t}getSelectBoxes(){const e=this.getEntities(),t=[];for(const n of e)t.push(...n.selectBoxes);return t}getRoom(){return this.room}getActors(){return this.actors}}function uy(){const s=document.getElementById("overlay");s&&(s.classList.add("hidden"),setTimeout(()=>{s.style.display="none"},500))}async function hy(){await yi.init(),await ji.init(),document.getElementById("dialog").classList.add("dialog-hidden")}function dy(){let s=new cy().createRoom(),e=new ey().createActors();const t=new ly(s,e);let n=new ty(t).createScene();return new xv(t,n)}async function fy(){await hy();const s=dy();uy(),s.runSimulationLoop()}fy();export{Ev as a,my as g};
//# sourceMappingURL=index-ghZKX28M.js.map
