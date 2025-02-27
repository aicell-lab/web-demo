var xh=Object.defineProperty;var yh=(r,e,t)=>e in r?xh(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ee=(r,e,t)=>yh(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rc="170",bh=0,Ic=1,Mh=2,vu=1,Sh=2,Qn=3,zn=0,Qt=1,xn=2,xi=0,ms=1,Lc=2,Pc=3,Nc=4,Eh=5,Di=100,wh=101,Th=102,Ah=103,Rh=104,Ch=200,Ih=201,Lh=202,Ph=203,ho=204,fo=205,Nh=206,Dh=207,Uh=208,Fh=209,Oh=210,kh=211,Bh=212,zh=213,Vh=214,po=0,mo=1,go=2,ys=3,_o=4,vo=5,xo=6,yo=7,da=0,Hh=1,Gh=2,yi=0,Wh=1,jh=2,Xh=3,qh=4,Yh=5,Kh=6,Zh=7,Dc="attached",$h="detached",xu=300,bs=301,Ms=302,bo=303,Mo=304,fa=306,yn=1e3,bn=1001,aa=1002,en=1003,yu=1004,Ks=1005,Yt=1006,Jr=1007,Pn=1008,ri=1009,bu=1010,Mu=1011,tr=1012,ac=1013,Bi=1014,Nn=1015,or=1016,oc=1017,cc=1018,Ss=1020,Su=35902,Eu=1021,wu=1022,Mn=1023,Tu=1024,Au=1025,gs=1026,Es=1027,lc=1028,uc=1029,Ru=1030,hc=1031,dc=1033,Qr=33776,ea=33777,ta=33778,na=33779,So=35840,Eo=35841,wo=35842,To=35843,Ao=36196,Ro=37492,Co=37496,Io=37808,Lo=37809,Po=37810,No=37811,Do=37812,Uo=37813,Fo=37814,Oo=37815,ko=37816,Bo=37817,zo=37818,Vo=37819,Ho=37820,Go=37821,ia=36492,Wo=36494,jo=36495,Cu=36283,Xo=36284,qo=36285,Yo=36286,Jh=2200,Qh=2201,ed=2202,nr=2300,ir=2301,Ta=2302,hs=2400,ds=2401,oa=2402,fc=2500,td=2501,nd=0,Iu=1,Ko=2,id=3200,sd=3201,pa=0,rd=1,_i="",Ct="srgb",nn="srgb-linear",ma="linear",Rt="srgb",Ki=7680,Uc=519,ad=512,od=513,cd=514,Lu=515,ld=516,ud=517,hd=518,dd=519,Zo=35044,Fc="300 es",ii=2e3,ca=2001;class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oc=1234567;const Js=Math.PI/180,ws=180/Math.PI;function Un(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[r&255]+jt[r>>8&255]+jt[r>>16&255]+jt[r>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function qt(r,e,t){return Math.max(e,Math.min(t,r))}function pc(r,e){return(r%e+e)%e}function fd(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function pd(r,e,t){return r!==e?(t-r)/(e-r):0}function Qs(r,e,t){return(1-t)*r+t*e}function md(r,e,t,n){return Qs(r,e,1-Math.exp(-t*n))}function gd(r,e=1){return e-Math.abs(pc(r,e*2)-e)}function _d(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function vd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function xd(r,e){return r+Math.floor(Math.random()*(e-r+1))}function yd(r,e){return r+Math.random()*(e-r)}function bd(r){return r*(.5-Math.random())}function Md(r){r!==void 0&&(Oc=r);let e=Oc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sd(r){return r*Js}function Ed(r){return r*ws}function wd(r){return(r&r-1)===0&&r!==0}function Td(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ad(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Rd(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),p=a((e-n)/2),d=s((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":r.set(o*u,c*h,c*p,o*l);break;case"YZY":r.set(c*p,o*u,c*h,o*l);break;case"ZXZ":r.set(c*h,c*p,o*u,o*l);break;case"XZX":r.set(o*u,c*_,c*d,o*l);break;case"YXY":r.set(c*d,o*u,c*_,o*l);break;case"ZYZ":r.set(c*_,c*d,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Cn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const In={DEG2RAD:Js,RAD2DEG:ws,generateUUID:Un,clamp:qt,euclideanModulo:pc,mapLinear:fd,inverseLerp:pd,lerp:Qs,damp:md,pingpong:gd,smoothstep:_d,smootherstep:vd,randInt:xd,randFloat:yd,randFloatSpread:bd,seededRandom:Md,degToRad:Sd,radToDeg:Ed,isPowerOfTwo:wd,ceilPowerOfTwo:Td,floorPowerOfTwo:Ad,setQuaternionFromProperEuler:Rd,normalize:Tt,denormalize:Cn};class rt{constructor(e=0,t=0){rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,n,i,s,a,o,c,l){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],p=n[2],d=n[5],_=n[8],g=i[0],m=i[3],f=i[6],x=i[1],S=i[4],y=i[7],C=i[2],I=i[5],L=i[8];return s[0]=a*g+o*x+c*C,s[3]=a*m+o*S+c*I,s[6]=a*f+o*y+c*L,s[1]=l*g+u*x+h*C,s[4]=l*m+u*S+h*I,s[7]=l*f+u*y+h*L,s[2]=p*g+d*x+_*C,s[5]=p*m+d*S+_*I,s[8]=p*f+d*y+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,p=o*c-u*s,d=l*s-a*c,_=t*h+n*p+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*l-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=p*g,e[4]=(u*t-i*c)*g,e[5]=(i*s-o*t)*g,e[6]=d*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Aa.makeScale(e,t)),this}rotate(e){return this.premultiply(Aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new ut;function Pu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function sr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Cd(){const r=sr("canvas");return r.style.display="block",r}const kc={};function Zs(r){r in kc||(kc[r]=!0,console.warn(r))}function Id(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Ld(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Pd(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const dt={enabled:!0,workingColorSpace:nn,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Rt&&(r.r=si(r.r),r.g=si(r.g),r.b=si(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Rt&&(r.r=_s(r.r),r.g=_s(r.g),r.b=_s(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===_i?ma:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function si(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function _s(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Bc=[.64,.33,.3,.6,.15,.06],zc=[.2126,.7152,.0722],Vc=[.3127,.329],Hc=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gc=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);dt.define({[nn]:{primaries:Bc,whitePoint:Vc,transfer:ma,toXYZ:Hc,fromXYZ:Gc,luminanceCoefficients:zc,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:Bc,whitePoint:Vc,transfer:Rt,toXYZ:Hc,fromXYZ:Gc,luminanceCoefficients:zc,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}});let Zi;class Nd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zi===void 0&&(Zi=sr("canvas")),Zi.width=e.width,Zi.height=e.height;const n=Zi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=si(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dd=0;class Nu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Un(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ra(i[a].image)):s.push(Ra(i[a]))}else s=Ra(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ra(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Nd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ud=0;class Ot extends Wi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=bn,i=bn,s=Yt,a=Pn,o=Mn,c=ri,l=Ot.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Un(),this.name="",this.source=new Nu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yn:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yn:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=xu;Ot.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,i=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],p=c[1],d=c[5],_=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(u-p)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,y=(d+1)/2,C=(f+1)/2,I=(u+p)/4,L=(h+g)/4,D=(_+m)/4;return S>y&&S>C?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=I/n,s=L/n):y>C?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=I/i,s=D/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=L/s,i=D/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(p-u)*(p-u));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(h-g)/x,this.z=(p-u)/x,this.w=Math.acos((l+d+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fd extends Wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ot(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends Fd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Du extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Od extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const p=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=p,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||c!==p||l!==d||u!==_){let m=1-o;const f=c*p+l*d+u*_+h*g,x=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const C=Math.sqrt(S),I=Math.atan2(C,f*x);m=Math.sin(m*I)/C,o=Math.sin(o*I)/C}const y=o*x;if(c=c*m+p*y,l=l*m+d*y,u=u*m+_*y,h=h*m+g*y,m===1-o){const C=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=C,l*=C,u*=C,h*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[a],p=s[a+1],d=s[a+2],_=s[a+3];return e[t]=o*_+u*h+c*d-l*p,e[t+1]=c*_+u*p+l*h-o*d,e[t+2]=l*_+u*d+o*p-c*h,e[t+3]=u*_-o*h-c*p-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(s/2),p=c(n/2),d=c(i/2),_=c(s/2);switch(a){case"XYZ":this._x=p*u*h+l*d*_,this._y=l*d*h-p*u*_,this._z=l*u*_+p*d*h,this._w=l*u*h-p*d*_;break;case"YXZ":this._x=p*u*h+l*d*_,this._y=l*d*h-p*u*_,this._z=l*u*_-p*d*h,this._w=l*u*h+p*d*_;break;case"ZXY":this._x=p*u*h-l*d*_,this._y=l*d*h+p*u*_,this._z=l*u*_+p*d*h,this._w=l*u*h-p*d*_;break;case"ZYX":this._x=p*u*h-l*d*_,this._y=l*d*h+p*u*_,this._z=l*u*_-p*d*h,this._w=l*u*h+p*d*_;break;case"YZX":this._x=p*u*h+l*d*_,this._y=l*d*h+p*u*_,this._z=l*u*_-p*d*h,this._w=l*u*h-p*d*_;break;case"XZY":this._x=p*u*h-l*d*_,this._y=l*d*h-p*u*_,this._z=l*u*_+p*d*h,this._w=l*u*h+p*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],p=n+o+h;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-s*c,this._y=i*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,p=Math.sin(t*u)/l;return this._w=a*h+this._w*p,this._x=n*h+this._x*p,this._y=i*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=i+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ca.copy(this).projectOnVector(e),this.sub(Ca)}reflect(e){return this.sub(Ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ca=new q,Wc=new tn;class pn{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(s,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vr.copy(n.boundingBox)),vr.applyMatrix4(e.matrixWorld),this.union(vr)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),xr.subVectors(this.max,Os),$i.subVectors(e.a,Os),Ji.subVectors(e.b,Os),Qi.subVectors(e.c,Os),li.subVectors(Ji,$i),ui.subVectors(Qi,Ji),Ei.subVectors($i,Qi);let t=[0,-li.z,li.y,0,-ui.z,ui.y,0,-Ei.z,Ei.y,li.z,0,-li.x,ui.z,0,-ui.x,Ei.z,0,-Ei.x,-li.y,li.x,0,-ui.y,ui.x,0,-Ei.y,Ei.x,0];return!Ia(t,$i,Ji,Qi,xr)||(t=[1,0,0,0,1,0,0,0,1],!Ia(t,$i,Ji,Qi,xr))?!1:(yr.crossVectors(li,ui),t=[yr.x,yr.y,yr.z],Ia(t,$i,Ji,Qi,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new q,new q,new q,new q,new q,new q,new q,new q],Tn=new q,vr=new pn,$i=new q,Ji=new q,Qi=new q,li=new q,ui=new q,Ei=new q,Os=new q,xr=new q,yr=new q,wi=new q;function Ia(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){wi.fromArray(r,s);const o=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),c=e.dot(wi),l=t.dot(wi),u=n.dot(wi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const kd=new pn,ks=new q,La=new q;class Hn{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ks,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(La.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(La)),this.expandByPoint(ks.copy(e.center).sub(La))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new q,Pa=new q,br=new q,hi=new q,Na=new q,Mr=new q,Da=new q;class cr{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Pa.copy(e).add(t).multiplyScalar(.5),br.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(Pa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(br),o=hi.dot(this.direction),c=-hi.dot(br),l=hi.lengthSq(),u=Math.abs(1-a*a);let h,p,d,_;if(u>0)if(h=a*c-o,p=a*o-c,_=s*u,h>=0)if(p>=-_)if(p<=_){const g=1/u;h*=g,p*=g,d=h*(h+a*p+2*o)+p*(a*h+p+2*c)+l}else p=s,h=Math.max(0,-(a*p+o)),d=-h*h+p*(p+2*c)+l;else p=-s,h=Math.max(0,-(a*p+o)),d=-h*h+p*(p+2*c)+l;else p<=-_?(h=Math.max(0,-(-a*s+o)),p=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+p*(p+2*c)+l):p<=_?(h=0,p=Math.min(Math.max(-s,-c),s),d=p*(p+2*c)+l):(h=Math.max(0,-(a*s+o)),p=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+p*(p+2*c)+l);else p=a>0?-s:s,h=Math.max(0,-(a*p+o)),d=-h*h+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Pa).addScaledVector(br,p),d}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,i=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,i=(e.min.x-p.x)*l),u>=0?(s=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-p.z)*h,c=(e.max.z-p.z)*h):(o=(e.max.z-p.z)*h,c=(e.min.z-p.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,i,s){Na.subVectors(t,e),Mr.subVectors(n,e),Da.crossVectors(Na,Mr);let a=this.direction.dot(Da),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hi.subVectors(this.origin,e);const c=o*this.direction.dot(Mr.crossVectors(hi,Mr));if(c<0)return null;const l=o*this.direction.dot(Na.cross(hi));if(l<0||c+l>a)return null;const u=-o*hi.dot(Da);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,n,i,s,a,o,c,l,u,h,p,d,_,g,m){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,u,h,p,d,_,g,m)}set(e,t,n,i,s,a,o,c,l,u,h,p,d,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=p,f[3]=d,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/es.setFromMatrixColumn(e,0).length(),s=1/es.setFromMatrixColumn(e,1).length(),a=1/es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=a*u,d=a*h,_=o*u,g=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+_*l,t[5]=p-g*l,t[9]=-o*c,t[2]=g-p*l,t[6]=_+d*l,t[10]=a*c}else if(e.order==="YXZ"){const p=c*u,d=c*h,_=l*u,g=l*h;t[0]=p+g*o,t[4]=_*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=g+p*o,t[10]=a*c}else if(e.order==="ZXY"){const p=c*u,d=c*h,_=l*u,g=l*h;t[0]=p-g*o,t[4]=-a*h,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=g-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const p=a*u,d=a*h,_=o*u,g=o*h;t[0]=c*u,t[4]=_*l-d,t[8]=p*l+g,t[1]=c*h,t[5]=g*l+p,t[9]=d*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const p=a*c,d=a*l,_=o*c,g=o*l;t[0]=c*u,t[4]=g-p*h,t[8]=_*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+_,t[10]=p-g*h}else if(e.order==="XZY"){const p=a*c,d=a*l,_=o*c,g=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=p*h+g,t[5]=a*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=o*u,t[10]=g*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bd,e,zd)}lookAt(e,t,n){const i=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),di.crossVectors(n,un),di.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),di.crossVectors(n,un)),di.normalize(),Sr.crossVectors(un,di),i[0]=di.x,i[4]=Sr.x,i[8]=un.x,i[1]=di.y,i[5]=Sr.y,i[9]=un.y,i[2]=di.z,i[6]=Sr.z,i[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],p=n[9],d=n[13],_=n[2],g=n[6],m=n[10],f=n[14],x=n[3],S=n[7],y=n[11],C=n[15],I=i[0],L=i[4],D=i[8],E=i[12],w=i[1],B=i[5],R=i[9],z=i[13],b=i[2],W=i[6],H=i[10],Z=i[14],J=i[3],Q=i[7],fe=i[11],X=i[15];return s[0]=a*I+o*w+c*b+l*J,s[4]=a*L+o*B+c*W+l*Q,s[8]=a*D+o*R+c*H+l*fe,s[12]=a*E+o*z+c*Z+l*X,s[1]=u*I+h*w+p*b+d*J,s[5]=u*L+h*B+p*W+d*Q,s[9]=u*D+h*R+p*H+d*fe,s[13]=u*E+h*z+p*Z+d*X,s[2]=_*I+g*w+m*b+f*J,s[6]=_*L+g*B+m*W+f*Q,s[10]=_*D+g*R+m*H+f*fe,s[14]=_*E+g*z+m*Z+f*X,s[3]=x*I+S*w+y*b+C*J,s[7]=x*L+S*B+y*W+C*Q,s[11]=x*D+S*R+y*H+C*fe,s[15]=x*E+S*z+y*Z+C*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],p=e[10],d=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+s*c*h-i*l*h-s*o*p+n*l*p+i*o*d-n*c*d)+g*(+t*c*d-t*l*p+s*a*p-i*a*d+i*l*u-s*c*u)+m*(+t*l*h-t*o*d-s*a*h+n*a*d+s*o*u-n*l*u)+f*(-i*o*u-t*c*h+t*o*p+i*a*h-n*a*p+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],p=e[10],d=e[11],_=e[12],g=e[13],m=e[14],f=e[15],x=h*m*l-g*p*l+g*c*d-o*m*d-h*c*f+o*p*f,S=_*p*l-u*m*l-_*c*d+a*m*d+u*c*f-a*p*f,y=u*g*l-_*h*l+_*o*d-a*g*d-u*o*f+a*h*f,C=_*h*c-u*g*c-_*o*p+a*g*p+u*o*m-a*h*m,I=t*x+n*S+i*y+s*C;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/I;return e[0]=x*L,e[1]=(g*p*s-h*m*s-g*i*d+n*m*d+h*i*f-n*p*f)*L,e[2]=(o*m*s-g*c*s+g*i*l-n*m*l-o*i*f+n*c*f)*L,e[3]=(h*c*s-o*p*s-h*i*l+n*p*l+o*i*d-n*c*d)*L,e[4]=S*L,e[5]=(u*m*s-_*p*s+_*i*d-t*m*d-u*i*f+t*p*f)*L,e[6]=(_*c*s-a*m*s-_*i*l+t*m*l+a*i*f-t*c*f)*L,e[7]=(a*p*s-u*c*s+u*i*l-t*p*l-a*i*d+t*c*d)*L,e[8]=y*L,e[9]=(_*h*s-u*g*s-_*n*d+t*g*d+u*n*f-t*h*f)*L,e[10]=(a*g*s-_*o*s+_*n*l-t*g*l-a*n*f+t*o*f)*L,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*d-t*o*d)*L,e[12]=C*L,e[13]=(u*g*i-_*h*i+_*n*p-t*g*p-u*n*m+t*h*m)*L,e[14]=(_*o*i-a*g*i-_*n*c+t*g*c+a*n*m-t*o*m)*L,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*p+t*o*p)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,p=s*l,d=s*u,_=s*h,g=a*u,m=a*h,f=o*h,x=c*l,S=c*u,y=c*h,C=n.x,I=n.y,L=n.z;return i[0]=(1-(g+f))*C,i[1]=(d+y)*C,i[2]=(_-S)*C,i[3]=0,i[4]=(d-y)*I,i[5]=(1-(p+f))*I,i[6]=(m+x)*I,i[7]=0,i[8]=(_+S)*L,i[9]=(m-x)*L,i[10]=(1-(p+g))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=es.set(i[0],i[1],i[2]).length();const a=es.set(i[4],i[5],i[6]).length(),o=es.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],An.copy(this);const l=1/s,u=1/a,h=1/o;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=h,An.elements[9]*=h,An.elements[10]*=h,t.setFromRotationMatrix(An),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=ii){const c=this.elements,l=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),p=(n+i)/(n-i);let d,_;if(o===ii)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ca)d=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=ii){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(a-s),p=(t+e)*l,d=(n+i)*u;let _,g;if(o===ii)_=(a+s)*h,g=-2*h;else if(o===ca)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const es=new q,An=new Ye,Bd=new q(0,0,0),zd=new q(1,1,1),di=new q,Sr=new q,un=new q,jc=new Ye,Xc=new tn;class cn{constructor(e=0,t=0,n=0,i=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],p=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class mc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vd=0;const qc=new q,ts=new tn,Kn=new Ye,Er=new q,Bs=new q,Hd=new q,Gd=new tn,Yc=new q(1,0,0),Kc=new q(0,1,0),Zc=new q(0,0,1),$c={type:"added"},Wd={type:"removed"},ns={type:"childadded",child:null},Ua={type:"childremoved",child:null};class Pt extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new q,t=new cn,n=new tn,i=new q(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ye},normalMatrix:{value:new ut}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(Yc,e)}rotateY(e){return this.rotateOnAxis(Kc,e)}rotateZ(e){return this.rotateOnAxis(Zc,e)}translateOnAxis(e,t){return qc.copy(e).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yc,e)}translateY(e){return this.translateOnAxis(Kc,e)}translateZ(e){return this.translateOnAxis(Zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Er.copy(e):Er.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Bs,Er,this.up):Kn.lookAt(Er,Bs,this.up),this.quaternion.setFromRotationMatrix(Kn),i&&(Kn.extractRotation(i.matrixWorld),ts.setFromRotationMatrix(Kn),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($c),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wd),Ua.child=e,this.dispatchEvent(Ua),Ua.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($c),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,Hd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Gd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),p=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Pt.DEFAULT_UP=new q(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new q,Zn=new q,Fa=new q,$n=new q,is=new q,ss=new q,Jc=new q,Oa=new q,ka=new q,Ba=new q,za=new bt,Va=new bt,Ha=new bt;class Ln{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Rn.subVectors(e,t),i.cross(Rn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Rn.subVectors(i,t),Zn.subVectors(n,t),Fa.subVectors(e,t);const a=Rn.dot(Rn),o=Rn.dot(Zn),c=Rn.dot(Fa),l=Zn.dot(Zn),u=Zn.dot(Fa),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const p=1/h,d=(l*c-o*u)*p,_=(a*u-o*c)*p;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,$n.x),c.addScaledVector(a,$n.y),c.addScaledVector(o,$n.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return za.setScalar(0),Va.setScalar(0),Ha.setScalar(0),za.fromBufferAttribute(e,t),Va.fromBufferAttribute(e,n),Ha.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(za,s.x),a.addScaledVector(Va,s.y),a.addScaledVector(Ha,s.z),a}static isFrontFacing(e,t,n,i){return Rn.subVectors(n,t),Zn.subVectors(e,t),Rn.cross(Zn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Rn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ln.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;is.subVectors(i,n),ss.subVectors(s,n),Oa.subVectors(e,n);const c=is.dot(Oa),l=ss.dot(Oa);if(c<=0&&l<=0)return t.copy(n);ka.subVectors(e,i);const u=is.dot(ka),h=ss.dot(ka);if(u>=0&&h<=u)return t.copy(i);const p=c*h-u*l;if(p<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(is,a);Ba.subVectors(e,s);const d=is.dot(Ba),_=ss.dot(Ba);if(_>=0&&d<=_)return t.copy(s);const g=d*l-c*_;if(g<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(ss,o);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return Jc.subVectors(s,i),o=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(Jc,o);const f=1/(m+g+p);return a=g*f,o=p*f,t.copy(n).addScaledVector(is,a).addScaledVector(ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},wr={h:0,s:0,l:0};function Ga(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=pc(e,1),t=qt(t,0,1),n=qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ga(a,s,e+1/3),this.g=Ga(a,s,e),this.b=Ga(a,s,e-1/3)}return dt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ct){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=Uu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return dt.fromWorkingColorSpace(Xt.copy(this),e),Math.round(qt(Xt.r*255,0,255))*65536+Math.round(qt(Xt.g*255,0,255))*256+Math.round(qt(Xt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(Xt.copy(this),t);const n=Xt.r,i=Xt.g,s=Xt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Ct){dt.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,i=Xt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(wr);const n=Qs(fi.h,wr.h,t),i=Qs(fi.s,wr.s,t),s=Qs(fi.l,wr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Ke;Ke.NAMES=Uu;let jd=0;class on extends Wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Un(),this.name="",this.blending=ms,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ho,this.blendDst=fo,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ho&&(n.blendSrc=this.blendSrc),this.blendDst!==fo&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Dn extends on{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new q,Tr=new rt;class Ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zo,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.applyMatrix3(e),this.setXY(t,Tr.x,Tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zo&&(e.usage=this.usage),e}}class Fu extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ou extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class St extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xd=0;const gn=new Ye,Wa=new Pt,rs=new q,hn=new pn,zs=new pn,Vt=new q;class Wt extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pu(e)?Ou:Fu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ut().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return Wa.lookAt(e),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new St(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(hn.min,zs.min),hn.expandByPoint(Vt),Vt.addVectors(hn.max,zs.max),hn.expandByPoint(Vt)):(hn.expandByPoint(zs.min),hn.expandByPoint(zs.max))}hn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Vt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Vt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Vt.fromBufferAttribute(o,l),c&&(rs.fromBufferAttribute(e,l),Vt.add(rs)),i=Math.max(i,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new q,c[D]=new q;const l=new q,u=new q,h=new q,p=new rt,d=new rt,_=new rt,g=new q,m=new q;function f(D,E,w){l.fromBufferAttribute(n,D),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,w),p.fromBufferAttribute(s,D),d.fromBufferAttribute(s,E),_.fromBufferAttribute(s,w),u.sub(l),h.sub(l),d.sub(p),_.sub(p);const B=1/(d.x*_.y-_.x*d.y);isFinite(B)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(B),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(B),o[D].add(g),o[E].add(g),o[w].add(g),c[D].add(m),c[E].add(m),c[w].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let D=0,E=x.length;D<E;++D){const w=x[D],B=w.start,R=w.count;for(let z=B,b=B+R;z<b;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const S=new q,y=new q,C=new q,I=new q;function L(D){C.fromBufferAttribute(i,D),I.copy(C);const E=o[D];S.copy(E),S.sub(C.multiplyScalar(C.dot(E))).normalize(),y.crossVectors(I,E);const B=y.dot(c[D])<0?-1:1;a.setXYZW(D,S.x,S.y,S.z,B)}for(let D=0,E=x.length;D<E;++D){const w=x[D],B=w.start,R=w.count;for(let z=B,b=B+R;z<b;z+=3)L(e.getX(z+0)),L(e.getX(z+1)),L(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);const i=new q,s=new q,a=new q,o=new q,c=new q,l=new q,u=new q,h=new q;if(e)for(let p=0,d=e.count;p<d;p+=3){const _=e.getX(p+0),g=e.getX(p+1),m=e.getX(p+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,d=t.count;p<d;p+=3)i.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,p=new l.constructor(c.length*u);let d=0,_=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?d=c[g]*o.data.stride+o.offset:d=c[g]*u;for(let f=0;f<u;f++)p[_++]=l[d++]}return new Ht(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const p=l[u],d=e(p,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,p=l.length;h<p;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let p=0,d=h.length;p<d;p++)u.push(h[p].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qc=new Ye,Ti=new cr,Ar=new Hn,el=new q,Rr=new q,Cr=new q,Ir=new q,ja=new q,Lr=new q,tl=new q,Pr=new q;class It extends Pt{constructor(e=new Wt,t=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Lr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(ja.fromBufferAttribute(h,e),a?Lr.addScaledVector(ja,u):Lr.addScaledVector(ja.sub(t),u))}t.add(Lr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(s),Ti.copy(e.ray).recast(e.near),!(Ar.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Ar,el)===null||Ti.origin.distanceToSquared(el)>(e.far-e.near)**2))&&(Qc.copy(s).invert(),Ti.copy(e.ray).applyMatrix4(Qc),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,p=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=p.length;_<g;_++){const m=p[_],f=a[m.materialIndex],x=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,C=S;y<C;y+=3){const I=o.getX(y),L=o.getX(y+1),D=o.getX(y+2);i=Nr(this,f,e,n,l,u,h,I,L,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=_,f=g;m<f;m+=3){const x=o.getX(m),S=o.getX(m+1),y=o.getX(m+2);i=Nr(this,a,e,n,l,u,h,x,S,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,g=p.length;_<g;_++){const m=p[_],f=a[m.materialIndex],x=Math.max(m.start,d.start),S=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,C=S;y<C;y+=3){const I=y,L=y+1,D=y+2;i=Nr(this,f,e,n,l,u,h,I,L,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let m=_,f=g;m<f;m+=3){const x=m,S=m+1,y=m+2;i=Nr(this,a,e,n,l,u,h,x,S,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function qd(r,e,t,n,i,s,a,o){let c;if(e.side===Qt?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===zn,o),c===null)return null;Pr.copy(o),Pr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Pr);return l<t.near||l>t.far?null:{distance:l,point:Pr.clone(),object:r}}function Nr(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,Rr),r.getVertexPosition(c,Cr),r.getVertexPosition(l,Ir);const u=qd(r,e,t,n,Rr,Cr,Ir,tl);if(u){const h=new q;Ln.getBarycoord(tl,Rr,Cr,Ir,h),i&&(u.uv=Ln.getInterpolatedAttribute(i,o,c,l,h,new rt)),s&&(u.uv1=Ln.getInterpolatedAttribute(s,o,c,l,h,new rt)),a&&(u.normal=Ln.getInterpolatedAttribute(a,o,c,l,h,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new q,materialIndex:0};Ln.getNormal(Rr,Cr,Ir,p.normal),u.face=p,u.barycoord=h}return u}class Vn extends Wt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let p=0,d=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(h,2));function _(g,m,f,x,S,y,C,I,L,D,E){const w=y/L,B=C/D,R=y/2,z=C/2,b=I/2,W=L+1,H=D+1;let Z=0,J=0;const Q=new q;for(let fe=0;fe<H;fe++){const X=fe*B-z;for(let K=0;K<W;K++){const _e=K*w-R;Q[g]=_e*x,Q[m]=X*S,Q[f]=b,l.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[f]=I>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(K/L),h.push(1-fe/D),Z+=1}}for(let fe=0;fe<D;fe++)for(let X=0;X<L;X++){const K=p+X+W*fe,_e=p+X+W*(fe+1),j=p+(X+1)+W*(fe+1),Y=p+(X+1)+W*fe;c.push(K,_e,Y),c.push(_e,j,Y),J+=6}o.addGroup(d,J,E),d+=J,p+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Jt(r){const e={};for(let t=0;t<r.length;t++){const n=Ts(r[t]);for(const i in n)e[i]=n[i]}return e}function Yd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ku(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const Bu={clone:Ts,merge:Jt};var Kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends on{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kd,this.fragmentShader=Zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=Yd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class zu extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new q,nl=new rt,il=new rt;class Gt extends zu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,nl,il),t.subVectors(il,nl)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Js*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const as=-90,os=1;class $d extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gt(as,os,e,t);i.layers=this.layers,this.add(i);const s=new Gt(as,os,e,t);s.layers=this.layers,this.add(s);const a=new Gt(as,os,e,t);a.layers=this.layers,this.add(a);const o=new Gt(as,os,e,t);o.layers=this.layers,this.add(o);const c=new Gt(as,os,e,t);c.layers=this.layers,this.add(c);const l=new Gt(as,os,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,p,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Vu extends Ot{constructor(e,t,n,i,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:bs,super(e,t,n,i,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jd extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Vu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Vn(5,5,5),s=new ai({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:xi});s.uniforms.tEquirect.value=t;const a=new It(i,s),o=t.minFilter;return t.minFilter===Pn&&(t.minFilter=Yt),new $d(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Xa=new q,Qd=new q,ef=new ut;class Pi{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Xa.subVectors(n,t).cross(Qd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Xa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ef.getNormalMatrix(e),i=this.coplanarPoint(Xa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Hn,Dr=new q;class gc{constructor(e=new Pi,t=new Pi,n=new Pi,i=new Pi,s=new Pi,a=new Pi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],u=i[5],h=i[6],p=i[7],d=i[8],_=i[9],g=i[10],m=i[11],f=i[12],x=i[13],S=i[14],y=i[15];if(n[0].setComponents(c-s,p-l,m-d,y-f).normalize(),n[1].setComponents(c+s,p+l,m+d,y+f).normalize(),n[2].setComponents(c+a,p+u,m+_,y+x).normalize(),n[3].setComponents(c-a,p-u,m-_,y-x).normalize(),n[4].setComponents(c-o,p-h,m-g,y-S).normalize(),t===ii)n[5].setComponents(c+o,p+h,m+g,y+S).normalize();else if(t===ca)n[5].setComponents(o,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Dr.x=i.normal.x>0?e.max.x:e.min.x,Dr.y=i.normal.y>0?e.max.y:e.min.y,Dr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hu(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function tf(r){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,p=r.createBuffer();r.bindBuffer(c,p),r.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=r.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=r.SHORT;else if(l instanceof Uint32Array)d=r.UNSIGNED_INT;else if(l instanceof Int32Array)d=r.INT;else if(l instanceof Int8Array)d=r.BYTE;else if(l instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(r.bindBuffer(l,o),h.length===0)r.bufferSubData(l,0,u);else{h.sort((d,_)=>d.start-_.start);let p=0;for(let d=1;d<h.length;d++){const _=h[p],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++p,h[p]=g)}h.length=p+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];r.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}class Cs extends Wt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,p=t/c,d=[],_=[],g=[],m=[];for(let f=0;f<u;f++){const x=f*p-a;for(let S=0;S<l;S++){const y=S*h-s;_.push(y,-x,0),g.push(0,0,1),m.push(S/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<o;x++){const S=x+l*f,y=x+l*(f+1),C=x+1+l*(f+1),I=x+1+l*f;d.push(S,y,I),d.push(y,C,I)}this.setIndex(d),this.setAttribute("position",new St(_,3)),this.setAttribute("normal",new St(g,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.widthSegments,e.heightSegments)}}var nf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sf=`#ifdef USE_ALPHAHASH
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
#endif`,rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,af=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,of=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lf=`#ifdef USE_AOMAP
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
#endif`,uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hf=`#ifdef USE_BATCHING
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
#endif`,df=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gf=`#ifdef USE_IRIDESCENCE
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
#endif`,_f=`#ifdef USE_BUMPMAP
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
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tf=`#define PI 3.141592653589793
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
} // validated`,Af=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rf=`vec3 transformedNormal = objectNormal;
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
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Of=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
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
#endif`,zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wf=`#ifdef USE_GRADIENTMAP
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
}`,jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yf=`uniform bool receiveShadow;
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
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ep=`PhysicalMaterial material;
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
#endif`,tp=`struct PhysicalMaterial {
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
}`,np=`
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
#endif`,ip=`#if defined( RE_IndirectDiffuse )
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
#endif`,sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ap=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dp=`#if defined( USE_POINTS_UV )
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
#endif`,fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vp=`#ifdef USE_MORPHTARGETS
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
#endif`,xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wp=`#ifdef USE_NORMALMAP
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
#endif`,Tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vp=`float getShadowMask() {
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
}`,Hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gp=`#ifdef USE_SKINNING
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
#endif`,Wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jp=`#ifdef USE_SKINNING
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
#endif`,Xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zp=`#ifdef USE_TRANSMISSION
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
#endif`,$p=`#ifdef USE_TRANSMISSION
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,im=`uniform sampler2D t2D;
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
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`#include <common>
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
}`,lm=`#if DEPTH_PACKING == 3200
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
}`,um=`#define DISTANCE
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
}`,hm=`#define DISTANCE
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
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`uniform float scale;
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
}`,mm=`uniform vec3 diffuse;
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
}`,gm=`#include <common>
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
}`,_m=`uniform vec3 diffuse;
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
}`,vm=`#define LAMBERT
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
}`,xm=`#define LAMBERT
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
}`,ym=`#define MATCAP
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
}`,bm=`#define MATCAP
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
}`,Mm=`#define NORMAL
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
}`,Sm=`#define NORMAL
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
}`,Em=`#define PHONG
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
}`,wm=`#define PHONG
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
}`,Tm=`#define STANDARD
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
}`,Am=`#define STANDARD
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
}`,Rm=`#define TOON
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
}`,Cm=`#define TOON
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
}`,Im=`uniform float size;
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Pm=`#include <common>
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
}`,Nm=`uniform vec3 color;
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
}`,Dm=`uniform float rotation;
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
}`,Um=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:nf,alphahash_pars_fragment:sf,alphamap_fragment:rf,alphamap_pars_fragment:af,alphatest_fragment:of,alphatest_pars_fragment:cf,aomap_fragment:lf,aomap_pars_fragment:uf,batching_pars_vertex:hf,batching_vertex:df,begin_vertex:ff,beginnormal_vertex:pf,bsdfs:mf,iridescence_fragment:gf,bumpmap_pars_fragment:_f,clipping_planes_fragment:vf,clipping_planes_pars_fragment:xf,clipping_planes_pars_vertex:yf,clipping_planes_vertex:bf,color_fragment:Mf,color_pars_fragment:Sf,color_pars_vertex:Ef,color_vertex:wf,common:Tf,cube_uv_reflection_fragment:Af,defaultnormal_vertex:Rf,displacementmap_pars_vertex:Cf,displacementmap_vertex:If,emissivemap_fragment:Lf,emissivemap_pars_fragment:Pf,colorspace_fragment:Nf,colorspace_pars_fragment:Df,envmap_fragment:Uf,envmap_common_pars_fragment:Ff,envmap_pars_fragment:Of,envmap_pars_vertex:kf,envmap_physical_pars_fragment:Kf,envmap_vertex:Bf,fog_vertex:zf,fog_pars_vertex:Vf,fog_fragment:Hf,fog_pars_fragment:Gf,gradientmap_pars_fragment:Wf,lightmap_pars_fragment:jf,lights_lambert_fragment:Xf,lights_lambert_pars_fragment:qf,lights_pars_begin:Yf,lights_toon_fragment:Zf,lights_toon_pars_fragment:$f,lights_phong_fragment:Jf,lights_phong_pars_fragment:Qf,lights_physical_fragment:ep,lights_physical_pars_fragment:tp,lights_fragment_begin:np,lights_fragment_maps:ip,lights_fragment_end:sp,logdepthbuf_fragment:rp,logdepthbuf_pars_fragment:ap,logdepthbuf_pars_vertex:op,logdepthbuf_vertex:cp,map_fragment:lp,map_pars_fragment:up,map_particle_fragment:hp,map_particle_pars_fragment:dp,metalnessmap_fragment:fp,metalnessmap_pars_fragment:pp,morphinstance_vertex:mp,morphcolor_vertex:gp,morphnormal_vertex:_p,morphtarget_pars_vertex:vp,morphtarget_vertex:xp,normal_fragment_begin:yp,normal_fragment_maps:bp,normal_pars_fragment:Mp,normal_pars_vertex:Sp,normal_vertex:Ep,normalmap_pars_fragment:wp,clearcoat_normal_fragment_begin:Tp,clearcoat_normal_fragment_maps:Ap,clearcoat_pars_fragment:Rp,iridescence_pars_fragment:Cp,opaque_fragment:Ip,packing:Lp,premultiplied_alpha_fragment:Pp,project_vertex:Np,dithering_fragment:Dp,dithering_pars_fragment:Up,roughnessmap_fragment:Fp,roughnessmap_pars_fragment:Op,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:Bp,shadowmap_vertex:zp,shadowmask_pars_fragment:Vp,skinbase_vertex:Hp,skinning_pars_vertex:Gp,skinning_vertex:Wp,skinnormal_vertex:jp,specularmap_fragment:Xp,specularmap_pars_fragment:qp,tonemapping_fragment:Yp,tonemapping_pars_fragment:Kp,transmission_fragment:Zp,transmission_pars_fragment:$p,uv_pars_fragment:Jp,uv_pars_vertex:Qp,uv_vertex:em,worldpos_vertex:tm,background_vert:nm,background_frag:im,backgroundCube_vert:sm,backgroundCube_frag:rm,cube_vert:am,cube_frag:om,depth_vert:cm,depth_frag:lm,distanceRGBA_vert:um,distanceRGBA_frag:hm,equirect_vert:dm,equirect_frag:fm,linedashed_vert:pm,linedashed_frag:mm,meshbasic_vert:gm,meshbasic_frag:_m,meshlambert_vert:vm,meshlambert_frag:xm,meshmatcap_vert:ym,meshmatcap_frag:bm,meshnormal_vert:Mm,meshnormal_frag:Sm,meshphong_vert:Em,meshphong_frag:wm,meshphysical_vert:Tm,meshphysical_frag:Am,meshtoon_vert:Rm,meshtoon_frag:Cm,points_vert:Im,points_frag:Lm,shadow_vert:Pm,shadow_frag:Nm,sprite_vert:Dm,sprite_frag:Um},Le={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},kn={basic:{uniforms:Jt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Jt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Jt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Jt([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Jt([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Jt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Jt([Le.points,Le.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Jt([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Jt([Le.common,Le.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Jt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Jt([Le.sprite,Le.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Jt([Le.common,Le.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Jt([Le.lights,Le.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};kn.physical={uniforms:Jt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Ur={r:0,b:0,g:0},Ri=new cn,Fm=new Ye;function Om(r,e,t,n,i,s,a){const o=new Ke(0);let c=s===!0?0:1,l,u,h=null,p=0,d=null;function _(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?t:e).get(S)),S}function g(x){let S=!1;const y=_(x);y===null?f(o,c):y&&y.isColor&&(f(y,1),S=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(x,S){const y=_(S);y&&(y.isCubeTexture||y.mapping===fa)?(u===void 0&&(u=new It(new Vn(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Ts(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ri.copy(S.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Fm.makeRotationFromEuler(Ri)),u.material.toneMapped=dt.getTransfer(y.colorSpace)!==Rt,(h!==y||p!==y.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=y,p=y.version,d=r.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new It(new Cs(2,2),new ai({name:"BackgroundMaterial",uniforms:Ts(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=dt.getTransfer(y.colorSpace)!==Rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||p!==y.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,p=y.version,d=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function f(x,S){x.getRGB(Ur,ku(r)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(x,S=1){o.set(x),c=S,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,f(o,c)},render:g,addToRenderList:m}}function km(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=p(null);let s=i,a=!1;function o(w,B,R,z,b){let W=!1;const H=h(z,R,B);s!==H&&(s=H,l(s.object)),W=d(w,z,R,b),W&&_(w,z,R,b),b!==null&&e.update(b,r.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,y(w,B,R,z),b!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(b).buffer))}function c(){return r.createVertexArray()}function l(w){return r.bindVertexArray(w)}function u(w){return r.deleteVertexArray(w)}function h(w,B,R){const z=R.wireframe===!0;let b=n[w.id];b===void 0&&(b={},n[w.id]=b);let W=b[B.id];W===void 0&&(W={},b[B.id]=W);let H=W[z];return H===void 0&&(H=p(c()),W[z]=H),H}function p(w){const B=[],R=[],z=[];for(let b=0;b<t;b++)B[b]=0,R[b]=0,z[b]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:R,attributeDivisors:z,object:w,attributes:{},index:null}}function d(w,B,R,z){const b=s.attributes,W=B.attributes;let H=0;const Z=R.getAttributes();for(const J in Z)if(Z[J].location>=0){const fe=b[J];let X=W[J];if(X===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(X=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(X=w.instanceColor)),fe===void 0||fe.attribute!==X||X&&fe.data!==X.data)return!0;H++}return s.attributesNum!==H||s.index!==z}function _(w,B,R,z){const b={},W=B.attributes;let H=0;const Z=R.getAttributes();for(const J in Z)if(Z[J].location>=0){let fe=W[J];fe===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(fe=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(fe=w.instanceColor));const X={};X.attribute=fe,fe&&fe.data&&(X.data=fe.data),b[J]=X,H++}s.attributes=b,s.attributesNum=H,s.index=z}function g(){const w=s.newAttributes;for(let B=0,R=w.length;B<R;B++)w[B]=0}function m(w){f(w,0)}function f(w,B){const R=s.newAttributes,z=s.enabledAttributes,b=s.attributeDivisors;R[w]=1,z[w]===0&&(r.enableVertexAttribArray(w),z[w]=1),b[w]!==B&&(r.vertexAttribDivisor(w,B),b[w]=B)}function x(){const w=s.newAttributes,B=s.enabledAttributes;for(let R=0,z=B.length;R<z;R++)B[R]!==w[R]&&(r.disableVertexAttribArray(R),B[R]=0)}function S(w,B,R,z,b,W,H){H===!0?r.vertexAttribIPointer(w,B,R,b,W):r.vertexAttribPointer(w,B,R,z,b,W)}function y(w,B,R,z){g();const b=z.attributes,W=R.getAttributes(),H=B.defaultAttributeValues;for(const Z in W){const J=W[Z];if(J.location>=0){let Q=b[Z];if(Q===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor)),Q!==void 0){const fe=Q.normalized,X=Q.itemSize,K=e.get(Q);if(K===void 0)continue;const _e=K.buffer,j=K.type,Y=K.bytesPerElement,ce=j===r.INT||j===r.UNSIGNED_INT||Q.gpuType===ac;if(Q.isInterleavedBufferAttribute){const de=Q.data,xe=de.stride,we=Q.offset;if(de.isInstancedInterleavedBuffer){for(let Be=0;Be<J.locationSize;Be++)f(J.location+Be,de.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Be=0;Be<J.locationSize;Be++)m(J.location+Be);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let Be=0;Be<J.locationSize;Be++)S(J.location+Be,X/J.locationSize,j,fe,xe*Y,(we+X/J.locationSize*Be)*Y,ce)}else{if(Q.isInstancedBufferAttribute){for(let de=0;de<J.locationSize;de++)f(J.location+de,Q.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let de=0;de<J.locationSize;de++)m(J.location+de);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let de=0;de<J.locationSize;de++)S(J.location+de,X/J.locationSize,j,fe,X*Y,X/J.locationSize*de*Y,ce)}}else if(H!==void 0){const fe=H[Z];if(fe!==void 0)switch(fe.length){case 2:r.vertexAttrib2fv(J.location,fe);break;case 3:r.vertexAttrib3fv(J.location,fe);break;case 4:r.vertexAttrib4fv(J.location,fe);break;default:r.vertexAttrib1fv(J.location,fe)}}}}x()}function C(){D();for(const w in n){const B=n[w];for(const R in B){const z=B[R];for(const b in z)u(z[b].object),delete z[b];delete B[R]}delete n[w]}}function I(w){if(n[w.id]===void 0)return;const B=n[w.id];for(const R in B){const z=B[R];for(const b in z)u(z[b].object),delete z[b];delete B[R]}delete n[w.id]}function L(w){for(const B in n){const R=n[B];if(R[w.id]===void 0)continue;const z=R[w.id];for(const b in z)u(z[b].object),delete z[b];delete R[w.id]}}function D(){E(),a=!0,s!==i&&(s=i,l(s.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:L,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function Bm(r,e,t){let n;function i(l){n=l}function s(l,u){r.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(r.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,n,1)}function c(l,u,h,p){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)a(l[_],u[_],p[_]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,p,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*p[g];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function zm(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(L){return!(L!==Mn&&n.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const D=L===or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==ri&&n.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Nn&&!D)}function c(L){if(L==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,I=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:C,maxSamples:I}}function Vm(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Pi,o=new ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const d=h.length!==0||p||n!==0||i;return i=p,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,f=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):l();else{const x=s?0:n,S=x*4;let y=f.clippingState||null;c.value=y,y=u(_,p,S,d);for(let C=0;C!==S;++C)y[C]=t[C];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,p,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const f=d+g*4,x=p.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,y=d;S!==g;++S,y+=4)a.copy(h[S]).applyMatrix4(x,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Hm(r){let e=new WeakMap;function t(a,o){return o===bo?a.mapping=bs:o===Mo&&(a.mapping=Ms),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===bo||o===Mo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Jd(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ga extends zu{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fs=4,sl=[.125,.215,.35,.446,.526,.582],Ui=20,qa=new ga,rl=new Ke;let Ya=null,Ka=0,Za=0,$a=!1;const Ni=(1+Math.sqrt(5))/2,cs=1/Ni,al=[new q(-Ni,cs,0),new q(Ni,cs,0),new q(-cs,0,Ni),new q(cs,0,Ni),new q(0,Ni,-cs),new q(0,Ni,cs),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class ol{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ya=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ya,Ka,Za),this._renderer.xr.enabled=$a,e.scissorTest=!1,Fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ya=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:or,format:Mn,colorSpace:nn,depthBuffer:!1},i=cl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gm(s)),this._blurMaterial=Wm(s,e,t)}return i}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,qa)}_sceneToCubeUV(e,t,n,i){const o=new Gt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(rl),u.toneMapping=yi,u.autoClear=!1;const d=new Dn({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),_=new It(new Vn,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(rl),g=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):x===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const S=this._cubeSize;Fr(i,x*S,f>2?S:0,S,S),u.setRenderTarget(i),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===bs||e.mapping===Ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ll());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new It(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Fr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,qa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=al[(i-s-1)%al.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new It(this._lodPlanes[i],l),p=l.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ui-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Ui;m>Ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ui}`);const f=[];let x=0;for(let L=0;L<Ui;++L){const D=L/g,E=Math.exp(-D*D/2);f.push(E),L===0?x+=E:L<m&&(x+=2*E)}for(let L=0;L<f.length;L++)f[L]=f[L]/x;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:S}=this;p.dTheta.value=_,p.mipInt.value=S-n;const y=this._sizeLods[i],C=3*y*(i>S-fs?i-S+fs:0),I=4*(this._cubeSize-y);Fr(t,C,I,3*y,2*y),c.setRenderTarget(t),c.render(h,qa)}}function Gm(r){const e=[],t=[],n=[];let i=r;const s=r-fs+1+sl.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-fs?c=sl[a-r+fs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,p=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,f=1,x=new Float32Array(g*_*d),S=new Float32Array(m*_*d),y=new Float32Array(f*_*d);for(let I=0;I<d;I++){const L=I%3*2/3-1,D=I>2?0:-1,E=[L,D,0,L+2/3,D,0,L+2/3,D+1,0,L,D,0,L+2/3,D+1,0,L,D+1,0];x.set(E,g*_*I),S.set(p,m*_*I);const w=[I,I,I,I,I,I];y.set(w,f*_*I)}const C=new Wt;C.setAttribute("position",new Ht(x,g)),C.setAttribute("uv",new Ht(S,m)),C.setAttribute("faceIndex",new Ht(y,f)),e.push(C),i>fs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function cl(r,e,t){const n=new zi(r,e,t);return n.texture.mapping=fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Wm(r,e,t){const n=new Float32Array(Ui),i=new q(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_c(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function ll(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function ul(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function _c(){return`

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
	`}function jm(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===bo||c===Mo,u=c===bs||c===Ms;if(l||u){let h=e.get(o);const p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new ol(r)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return l&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new ol(r)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Xm(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Zs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qm(r,e,t,n){const i={},s=new WeakMap;function a(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const g=p.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}p.removeEventListener("dispose",a),delete i[p.id];const d=s.get(p);d&&(e.remove(d),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(h,p){return i[p.id]===!0||(p.addEventListener("dispose",a),i[p.id]=!0,t.memory.geometries++),p}function c(h){const p=h.attributes;for(const _ in p)e.update(p[_],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],r.ARRAY_BUFFER)}}function l(h){const p=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const x=d.array;g=d.version;for(let S=0,y=x.length;S<y;S+=3){const C=x[S+0],I=x[S+1],L=x[S+2];p.push(C,I,I,L,L,C)}}else if(_!==void 0){const x=_.array;g=_.version;for(let S=0,y=x.length/3-1;S<y;S+=3){const C=S+0,I=S+1,L=S+2;p.push(C,I,I,L,L,C)}}else return;const m=new(Pu(p)?Ou:Fu)(p,1);m.version=g;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const p=s.get(h);if(p){const d=h.index;d!==null&&p.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Ym(r,e,t){let n;function i(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,d){r.drawElements(n,d,s,p*a),t.update(d,n,1)}function l(p,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,p*a,_),t.update(d,n,_))}function u(p,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,p,0,_);let m=0;for(let f=0;f<_;f++)m+=d[f];t.update(m,n,1)}function h(p,d,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)l(p[f]/a,d[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,p,0,g,0,_);let f=0;for(let x=0;x<_;x++)f+=d[x]*g[x];t.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Km(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Zm(r,e,t){const n=new WeakMap,i=new bt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let p=n.get(o);if(p===void 0||p.count!==h){let E=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",E)};p!==void 0&&p.texture.dispose();const d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;d===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let y=o.attributes.position.count*S,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const I=new Float32Array(y*C*4*h),L=new Du(I,y,C,h);L.type=Nn,L.needsUpdate=!0;const D=S*4;for(let w=0;w<h;w++){const B=m[w],R=f[w],z=x[w],b=y*C*4*w;for(let W=0;W<B.count;W++){const H=W*D;d===!0&&(i.fromBufferAttribute(B,W),I[b+H+0]=i.x,I[b+H+1]=i.y,I[b+H+2]=i.z,I[b+H+3]=0),_===!0&&(i.fromBufferAttribute(R,W),I[b+H+4]=i.x,I[b+H+5]=i.y,I[b+H+6]=i.z,I[b+H+7]=0),g===!0&&(i.fromBufferAttribute(z,W),I[b+H+8]=i.x,I[b+H+9]=i.y,I[b+H+10]=i.z,I[b+H+11]=z.itemSize===4?i.w:1)}}p={count:h,texture:L,size:new rt(y,C)},n.set(o,p),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let d=0;for(let g=0;g<l.length;g++)d+=l[g];const _=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}return{update:s}}function $m(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;i.get(p)!==l&&(p.update(),i.set(p,l))}return h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class Gu extends Ot{constructor(e,t,n,i,s,a,o,c,l,u=gs){if(u!==gs&&u!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===gs&&(n=Bi),n===void 0&&u===Es&&(n=Ss),super(null,i,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:en,this.minFilter=c!==void 0?c:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Wu=new Ot,hl=new Gu(1,1),ju=new Du,Xu=new Od,qu=new Vu,dl=[],fl=[],pl=new Float32Array(16),ml=new Float32Array(9),gl=new Float32Array(4);function Is(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=dl[i];if(s===void 0&&(s=new Float32Array(i),dl[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function kt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Bt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function _a(r,e){let t=fl[e];t===void 0&&(t=new Int32Array(e),fl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Jm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Qm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2fv(this.addr,e),Bt(t,e)}}function eg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;r.uniform3fv(this.addr,e),Bt(t,e)}}function tg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4fv(this.addr,e),Bt(t,e)}}function ng(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;gl.set(n),r.uniformMatrix2fv(this.addr,!1,gl),Bt(t,n)}}function ig(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;ml.set(n),r.uniformMatrix3fv(this.addr,!1,ml),Bt(t,n)}}function sg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;pl.set(n),r.uniformMatrix4fv(this.addr,!1,pl),Bt(t,n)}}function rg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ag(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2iv(this.addr,e),Bt(t,e)}}function og(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;r.uniform3iv(this.addr,e),Bt(t,e)}}function cg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4iv(this.addr,e),Bt(t,e)}}function lg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ug(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2uiv(this.addr,e),Bt(t,e)}}function hg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;r.uniform3uiv(this.addr,e),Bt(t,e)}}function dg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4uiv(this.addr,e),Bt(t,e)}}function fg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(hl.compareFunction=Lu,s=hl):s=Wu,t.setTexture2D(e||s,i)}function pg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Xu,i)}function mg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||qu,i)}function gg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ju,i)}function _g(r){switch(r){case 5126:return Jm;case 35664:return Qm;case 35665:return eg;case 35666:return tg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return ag;case 35668:case 35672:return og;case 35669:case 35673:return cg;case 5125:return lg;case 36294:return ug;case 36295:return hg;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}function vg(r,e){r.uniform1fv(this.addr,e)}function xg(r,e){const t=Is(e,this.size,2);r.uniform2fv(this.addr,t)}function yg(r,e){const t=Is(e,this.size,3);r.uniform3fv(this.addr,t)}function bg(r,e){const t=Is(e,this.size,4);r.uniform4fv(this.addr,t)}function Mg(r,e){const t=Is(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Sg(r,e){const t=Is(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Eg(r,e){const t=Is(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function wg(r,e){r.uniform1iv(this.addr,e)}function Tg(r,e){r.uniform2iv(this.addr,e)}function Ag(r,e){r.uniform3iv(this.addr,e)}function Rg(r,e){r.uniform4iv(this.addr,e)}function Cg(r,e){r.uniform1uiv(this.addr,e)}function Ig(r,e){r.uniform2uiv(this.addr,e)}function Lg(r,e){r.uniform3uiv(this.addr,e)}function Pg(r,e){r.uniform4uiv(this.addr,e)}function Ng(r,e,t){const n=this.cache,i=e.length,s=_a(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Bt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Wu,s[a])}function Dg(r,e,t){const n=this.cache,i=e.length,s=_a(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Bt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Xu,s[a])}function Ug(r,e,t){const n=this.cache,i=e.length,s=_a(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Bt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||qu,s[a])}function Fg(r,e,t){const n=this.cache,i=e.length,s=_a(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Bt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||ju,s[a])}function Og(r){switch(r){case 5126:return vg;case 35664:return xg;case 35665:return yg;case 35666:return bg;case 35674:return Mg;case 35675:return Sg;case 35676:return Eg;case 5124:case 35670:return wg;case 35667:case 35671:return Tg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Ig;case 36295:return Lg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Fg}}class kg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_g(t.type)}}class Bg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Og(t.type)}}class zg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Ja=/(\w+)(\])?(\[|\.)?/g;function _l(r,e){r.seq.push(e),r.map[e.id]=e}function Vg(r,e,t){const n=r.name,i=n.length;for(Ja.lastIndex=0;;){const s=Ja.exec(n),a=Ja.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){_l(t,l===void 0?new kg(o,r,e):new Bg(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new zg(o),_l(t,h)),t=h}}}class sa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Vg(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function vl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Hg=37297;let Gg=0;function Wg(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const xl=new ut;function jg(r){dt._getMatrix(xl,dt.workingColorSpace,r);const e=`mat3( ${xl.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(r)){case ma:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function yl(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Wg(r.getShaderSource(e),a)}else return i}function Xg(r,e){const t=jg(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function qg(r,e){let t;switch(e){case Wh:t="Linear";break;case jh:t="Reinhard";break;case Xh:t="Cineon";break;case qh:t="ACESFilmic";break;case Kh:t="AgX";break;case Zh:t="Neutral";break;case Yh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Or=new q;function Yg(){dt.getLuminanceCoefficients(Or);const r=Or.x.toFixed(4),e=Or.y.toFixed(4),t=Or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function Zg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $g(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function $s(r){return r!==""}function bl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ml(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function $o(r){return r.replace(Jg,e_)}const Qg=new Map;function e_(r,e){let t=ht[e];if(t===void 0){const n=Qg.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $o(t)}const t_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sl(r){return r.replace(t_,n_)}function n_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function El(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function i_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===vu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Sh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function s_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case bs:case Ms:e="ENVMAP_TYPE_CUBE";break;case fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function r_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function a_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case da:e="ENVMAP_BLENDING_MULTIPLY";break;case Hh:e="ENVMAP_BLENDING_MIX";break;case Gh:e="ENVMAP_BLENDING_ADD";break}return e}function o_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function c_(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=i_(t),l=s_(t),u=r_(t),h=a_(t),p=o_(t),d=Kg(t),_=Zg(s),g=i.createProgram();let m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter($s).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter($s).join(`
`),f.length>0&&(f+=`
`)):(m=[El(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),f=[El(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?ht.tonemapping_pars_fragment:"",t.toneMapping!==yi?qg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Xg("linearToOutputTexel",t.outputColorSpace),Yg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),a=$o(a),a=bl(a,t),a=Ml(a,t),o=$o(o),o=bl(o,t),o=Ml(o,t),a=Sl(a),o=Sl(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=x+m+a,y=x+f+o,C=vl(i,i.VERTEX_SHADER,S),I=vl(i,i.FRAGMENT_SHADER,y);i.attachShader(g,C),i.attachShader(g,I),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function L(B){if(r.debug.checkShaderErrors){const R=i.getProgramInfoLog(g).trim(),z=i.getShaderInfoLog(C).trim(),b=i.getShaderInfoLog(I).trim();let W=!0,H=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,C,I);else{const Z=yl(i,C,"vertex"),J=yl(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+R+`
`+Z+`
`+J)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(z===""||b==="")&&(H=!1);H&&(B.diagnostics={runnable:W,programLog:R,vertexShader:{log:z,prefix:m},fragmentShader:{log:b,prefix:f}})}i.deleteShader(C),i.deleteShader(I),D=new sa(i,g),E=$g(i,g)}let D;this.getUniforms=function(){return D===void 0&&L(this),D};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(g,Hg)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=I,this}let l_=0;class u_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new h_(e),t.set(e,n)),n}}class h_{constructor(e){this.id=l_++,this.code=e,this.usedTimes=0}}function d_(r,e,t,n,i,s,a){const o=new mc,c=new u_,l=new Set,u=[],h=i.logarithmicDepthBuffer,p=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,w,B,R,z){const b=R.fog,W=z.geometry,H=E.isMeshStandardMaterial?R.environment:null,Z=(E.isMeshStandardMaterial?t:e).get(E.envMap||H),J=Z&&Z.mapping===fa?Z.image.height:null,Q=_[E.type];E.precision!==null&&(d=i.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const fe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,X=fe!==void 0?fe.length:0;let K=0;W.morphAttributes.position!==void 0&&(K=1),W.morphAttributes.normal!==void 0&&(K=2),W.morphAttributes.color!==void 0&&(K=3);let _e,j,Y,ce;if(Q){const lt=kn[Q];_e=lt.vertexShader,j=lt.fragmentShader}else _e=E.vertexShader,j=E.fragmentShader,c.update(E),Y=c.getVertexShaderID(E),ce=c.getFragmentShaderID(E);const de=r.getRenderTarget(),xe=r.state.buffers.depth.getReversed(),we=z.isInstancedMesh===!0,Be=z.isBatchedMesh===!0,Qe=!!E.map,tt=!!E.matcap,pt=!!Z,v=!!E.aoMap,me=!!E.lightMap,re=!!E.bumpMap,V=!!E.normalMap,O=!!E.displacementMap,$=!!E.emissiveMap,oe=!!E.metalnessMap,P=!!E.roughnessMap,M=E.anisotropy>0,G=E.clearcoat>0,se=E.dispersion>0,ne=E.iridescence>0,ae=E.sheen>0,Te=E.transmission>0,ye=M&&!!E.anisotropyMap,Re=G&&!!E.clearcoatMap,ct=G&&!!E.clearcoatNormalMap,be=G&&!!E.clearcoatRoughnessMap,Fe=ne&&!!E.iridescenceMap,Ne=ne&&!!E.iridescenceThicknessMap,Ze=ae&&!!E.sheenColorMap,Oe=ae&&!!E.sheenRoughnessMap,nt=!!E.specularMap,it=!!E.specularColorMap,yt=!!E.specularIntensityMap,te=Te&&!!E.transmissionMap,Ce=Te&&!!E.thicknessMap,pe=!!E.gradientMap,ve=!!E.alphaMap,Ie=E.alphaTest>0,De=!!E.alphaHash,at=!!E.extensions;let Lt=yi;E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Lt=r.toneMapping);const zt={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:_e,fragmentShader:j,defines:E.defines,customVertexShaderID:Y,customFragmentShaderID:ce,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Be,batchingColor:Be&&z._colorsTexture!==null,instancing:we,instancingColor:we&&z.instanceColor!==null,instancingMorph:we&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:nn,alphaToCoverage:!!E.alphaToCoverage,map:Qe,matcap:tt,envMap:pt,envMapMode:pt&&Z.mapping,envMapCubeUVHeight:J,aoMap:v,lightMap:me,bumpMap:re,normalMap:V,displacementMap:p&&O,emissiveMap:$,normalMapObjectSpace:V&&E.normalMapType===rd,normalMapTangentSpace:V&&E.normalMapType===pa,metalnessMap:oe,roughnessMap:P,anisotropy:M,anisotropyMap:ye,clearcoat:G,clearcoatMap:Re,clearcoatNormalMap:ct,clearcoatRoughnessMap:be,dispersion:se,iridescence:ne,iridescenceMap:Fe,iridescenceThicknessMap:Ne,sheen:ae,sheenColorMap:Ze,sheenRoughnessMap:Oe,specularMap:nt,specularColorMap:it,specularIntensityMap:yt,transmission:Te,transmissionMap:te,thicknessMap:Ce,gradientMap:pe,opaque:E.transparent===!1&&E.blending===ms&&E.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ie,alphaHash:De,combine:E.combine,mapUv:Qe&&g(E.map.channel),aoMapUv:v&&g(E.aoMap.channel),lightMapUv:me&&g(E.lightMap.channel),bumpMapUv:re&&g(E.bumpMap.channel),normalMapUv:V&&g(E.normalMap.channel),displacementMapUv:O&&g(E.displacementMap.channel),emissiveMapUv:$&&g(E.emissiveMap.channel),metalnessMapUv:oe&&g(E.metalnessMap.channel),roughnessMapUv:P&&g(E.roughnessMap.channel),anisotropyMapUv:ye&&g(E.anisotropyMap.channel),clearcoatMapUv:Re&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:ct&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&g(E.sheenRoughnessMap.channel),specularMapUv:nt&&g(E.specularMap.channel),specularColorMapUv:it&&g(E.specularColorMap.channel),specularIntensityMapUv:yt&&g(E.specularIntensityMap.channel),transmissionMapUv:te&&g(E.transmissionMap.channel),thicknessMapUv:Ce&&g(E.thicknessMap.channel),alphaMapUv:ve&&g(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(V||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(Qe||ve),fog:!!b,useFog:E.fog===!0,fogExp2:!!b&&b.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:xe,skinning:z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:K,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Qe&&E.map.isVideoTexture===!0&&dt.getTransfer(E.map.colorSpace)===Rt,decodeVideoTextureEmissive:$&&E.emissiveMap.isVideoTexture===!0&&dt.getTransfer(E.emissiveMap.colorSpace)===Rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===xn,flipSided:E.side===Qt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:at&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&E.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function f(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const B in E.defines)w.push(B),w.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(x(w,E),S(w,E),w.push(r.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function x(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function S(E,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){const w=_[E.type];let B;if(w){const R=kn[w];B=Bu.clone(R.uniforms)}else B=E.uniforms;return B}function C(E,w){let B;for(let R=0,z=u.length;R<z;R++){const b=u[R];if(b.cacheKey===w){B=b,++B.usedTimes;break}}return B===void 0&&(B=new c_(r,w,E,s),u.push(B)),B}function I(E){if(--E.usedTimes===0){const w=u.indexOf(E);u[w]=u[u.length-1],u.pop(),E.destroy()}}function L(E){c.remove(E)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:C,releaseProgram:I,releaseShaderCache:L,programs:u,dispose:D}}function f_(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function p_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function wl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Tl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,p,d,_,g,m){let f=r[e];return f===void 0?(f={id:h.id,object:h,geometry:p,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[e]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=d,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=g,f.group=m),e++,f}function o(h,p,d,_,g,m){const f=a(h,p,d,_,g,m);d.transmission>0?n.push(f):d.transparent===!0?i.push(f):t.push(f)}function c(h,p,d,_,g,m){const f=a(h,p,d,_,g,m);d.transmission>0?n.unshift(f):d.transparent===!0?i.unshift(f):t.unshift(f)}function l(h,p){t.length>1&&t.sort(h||p_),n.length>1&&n.sort(p||wl),i.length>1&&i.sort(p||wl)}function u(){for(let h=e,p=r.length;h<p;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:u,sort:l}}function m_(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Tl,r.set(n,[a])):i>=s.length?(a=new Tl,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function g_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new Ke};break;case"SpotLight":t={position:new q,direction:new q,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new q,halfWidth:new q,halfHeight:new q};break}return r[e.id]=t,t}}}function __(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let v_=0;function x_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function y_(r){const e=new g_,t=__(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new q);const i=new q,s=new Ye,a=new Ye;function o(l){let u=0,h=0,p=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,_=0,g=0,m=0,f=0,x=0,S=0,y=0,C=0,I=0,L=0;l.sort(x_);for(let E=0,w=l.length;E<w;E++){const B=l[E],R=B.color,z=B.intensity,b=B.distance,W=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)u+=R.r*z,h+=R.g*z,p+=R.b*z;else if(B.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(B.sh.coefficients[H],z);L++}else if(B.isDirectionalLight){const H=e.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Z=B.shadow,J=t.get(B);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,n.directionalShadow[d]=J,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=B.shadow.matrix,x++}n.directional[d]=H,d++}else if(B.isSpotLight){const H=e.get(B);H.position.setFromMatrixPosition(B.matrixWorld),H.color.copy(R).multiplyScalar(z),H.distance=b,H.coneCos=Math.cos(B.angle),H.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),H.decay=B.decay,n.spot[g]=H;const Z=B.shadow;if(B.map&&(n.spotLightMap[C]=B.map,C++,Z.updateMatrices(B),B.castShadow&&I++),n.spotLightMatrix[g]=Z.matrix,B.castShadow){const J=t.get(B);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,n.spotShadow[g]=J,n.spotShadowMap[g]=W,y++}g++}else if(B.isRectAreaLight){const H=e.get(B);H.color.copy(R).multiplyScalar(z),H.halfWidth.set(B.width*.5,0,0),H.halfHeight.set(0,B.height*.5,0),n.rectArea[m]=H,m++}else if(B.isPointLight){const H=e.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity),H.distance=B.distance,H.decay=B.decay,B.castShadow){const Z=B.shadow,J=t.get(B);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,J.shadowCameraNear=Z.camera.near,J.shadowCameraFar=Z.camera.far,n.pointShadow[_]=J,n.pointShadowMap[_]=W,n.pointShadowMatrix[_]=B.shadow.matrix,S++}n.point[_]=H,_++}else if(B.isHemisphereLight){const H=e.get(B);H.skyColor.copy(B.color).multiplyScalar(z),H.groundColor.copy(B.groundColor).multiplyScalar(z),n.hemi[f]=H,f++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=p;const D=n.hash;(D.directionalLength!==d||D.pointLength!==_||D.spotLength!==g||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==x||D.numPointShadows!==S||D.numSpotShadows!==y||D.numSpotMaps!==C||D.numLightProbes!==L)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+C-I,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=L,D.directionalLength=d,D.pointLength=_,D.spotLength=g,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=x,D.numPointShadows=S,D.numSpotShadows=y,D.numSpotMaps=C,D.numLightProbes=L,n.version=v_++)}function c(l,u){let h=0,p=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let f=0,x=l.length;f<x;f++){const S=l[f];if(S.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(S.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const y=n.point[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function Al(r){const e=new y_(r),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function b_(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Al(r),e.set(i,[o])):s>=a.length?(o=new Al(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class M_ extends on{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class S_ extends on{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const E_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w_=`uniform sampler2D shadow_pass;
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
}`;function T_(r,e,t){let n=new gc;const i=new rt,s=new rt,a=new bt,o=new M_({depthPacking:sd}),c=new S_,l={},u=t.maxTextureSize,h={[zn]:Qt,[Qt]:zn,[xn]:xn},p=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:E_,fragmentShader:w_}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const _=new Wt;_.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new It(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vu;let f=this.type;this.render=function(I,L,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const E=r.getRenderTarget(),w=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),R=r.state;R.setBlending(xi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const z=f!==Qn&&this.type===Qn,b=f===Qn&&this.type!==Qn;for(let W=0,H=I.length;W<H;W++){const Z=I[W],J=Z.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;i.copy(J.mapSize);const Q=J.getFrameExtents();if(i.multiply(Q),s.copy(J.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Q.x),i.x=s.x*Q.x,J.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Q.y),i.y=s.y*Q.y,J.mapSize.y=s.y)),J.map===null||z===!0||b===!0){const X=this.type!==Qn?{minFilter:en,magFilter:en}:{};J.map!==null&&J.map.dispose(),J.map=new zi(i.x,i.y,X),J.map.texture.name=Z.name+".shadowMap",J.camera.updateProjectionMatrix()}r.setRenderTarget(J.map),r.clear();const fe=J.getViewportCount();for(let X=0;X<fe;X++){const K=J.getViewport(X);a.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),R.viewport(a),J.updateMatrices(Z,X),n=J.getFrustum(),y(L,D,J.camera,Z,this.type)}J.isPointLightShadow!==!0&&this.type===Qn&&x(J,D),J.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(E,w,B)};function x(I,L){const D=e.update(g);p.defines.VSM_SAMPLES!==I.blurSamples&&(p.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new zi(i.x,i.y)),p.uniforms.shadow_pass.value=I.map.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(L,null,D,p,g,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(L,null,D,d,g,null)}function S(I,L,D,E){let w=null;const B=D.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)w=B;else if(w=D.isPointLight===!0?c:o,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const R=w.uuid,z=L.uuid;let b=l[R];b===void 0&&(b={},l[R]=b);let W=b[z];W===void 0&&(W=w.clone(),b[z]=W,L.addEventListener("dispose",C)),w=W}if(w.visible=L.visible,w.wireframe=L.wireframe,E===Qn?w.side=L.shadowSide!==null?L.shadowSide:L.side:w.side=L.shadowSide!==null?L.shadowSide:h[L.side],w.alphaMap=L.alphaMap,w.alphaTest=L.alphaTest,w.map=L.map,w.clipShadows=L.clipShadows,w.clippingPlanes=L.clippingPlanes,w.clipIntersection=L.clipIntersection,w.displacementMap=L.displacementMap,w.displacementScale=L.displacementScale,w.displacementBias=L.displacementBias,w.wireframeLinewidth=L.wireframeLinewidth,w.linewidth=L.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const R=r.properties.get(w);R.light=D}return w}function y(I,L,D,E,w){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===Qn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,I.matrixWorld);const z=e.update(I),b=I.material;if(Array.isArray(b)){const W=z.groups;for(let H=0,Z=W.length;H<Z;H++){const J=W[H],Q=b[J.materialIndex];if(Q&&Q.visible){const fe=S(I,Q,E,w);I.onBeforeShadow(r,I,L,D,z,fe,J),r.renderBufferDirect(D,null,z,fe,I,J),I.onAfterShadow(r,I,L,D,z,fe,J)}}}else if(b.visible){const W=S(I,b,E,w);I.onBeforeShadow(r,I,L,D,z,W,null),r.renderBufferDirect(D,null,z,W,I,null),I.onAfterShadow(r,I,L,D,z,W,null)}}const R=I.children;for(let z=0,b=R.length;z<b;z++)y(R[z],L,D,E,w)}function C(I){I.target.removeEventListener("dispose",C);for(const D in l){const E=l[D],w=I.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}const A_={[po]:mo,[go]:xo,[_o]:yo,[ys]:vo,[mo]:po,[xo]:go,[yo]:_o,[vo]:ys};function R_(r,e){function t(){let te=!1;const Ce=new bt;let pe=null;const ve=new bt(0,0,0,0);return{setMask:function(Ie){pe!==Ie&&!te&&(r.colorMask(Ie,Ie,Ie,Ie),pe=Ie)},setLocked:function(Ie){te=Ie},setClear:function(Ie,De,at,Lt,zt){zt===!0&&(Ie*=Lt,De*=Lt,at*=Lt),Ce.set(Ie,De,at,Lt),ve.equals(Ce)===!1&&(r.clearColor(Ie,De,at,Lt),ve.copy(Ce))},reset:function(){te=!1,pe=null,ve.set(-1,0,0,0)}}}function n(){let te=!1,Ce=!1,pe=null,ve=null,Ie=null;return{setReversed:function(De){if(Ce!==De){const at=e.get("EXT_clip_control");Ce?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);const Lt=Ie;Ie=null,this.setClear(Lt)}Ce=De},getReversed:function(){return Ce},setTest:function(De){De?de(r.DEPTH_TEST):xe(r.DEPTH_TEST)},setMask:function(De){pe!==De&&!te&&(r.depthMask(De),pe=De)},setFunc:function(De){if(Ce&&(De=A_[De]),ve!==De){switch(De){case po:r.depthFunc(r.NEVER);break;case mo:r.depthFunc(r.ALWAYS);break;case go:r.depthFunc(r.LESS);break;case ys:r.depthFunc(r.LEQUAL);break;case _o:r.depthFunc(r.EQUAL);break;case vo:r.depthFunc(r.GEQUAL);break;case xo:r.depthFunc(r.GREATER);break;case yo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ve=De}},setLocked:function(De){te=De},setClear:function(De){Ie!==De&&(Ce&&(De=1-De),r.clearDepth(De),Ie=De)},reset:function(){te=!1,pe=null,ve=null,Ie=null,Ce=!1}}}function i(){let te=!1,Ce=null,pe=null,ve=null,Ie=null,De=null,at=null,Lt=null,zt=null;return{setTest:function(lt){te||(lt?de(r.STENCIL_TEST):xe(r.STENCIL_TEST))},setMask:function(lt){Ce!==lt&&!te&&(r.stencilMask(lt),Ce=lt)},setFunc:function(lt,sn,Sn){(pe!==lt||ve!==sn||Ie!==Sn)&&(r.stencilFunc(lt,sn,Sn),pe=lt,ve=sn,Ie=Sn)},setOp:function(lt,sn,Sn){(De!==lt||at!==sn||Lt!==Sn)&&(r.stencilOp(lt,sn,Sn),De=lt,at=sn,Lt=Sn)},setLocked:function(lt){te=lt},setClear:function(lt){zt!==lt&&(r.clearStencil(lt),zt=lt)},reset:function(){te=!1,Ce=null,pe=null,ve=null,Ie=null,De=null,at=null,Lt=null,zt=null}}}const s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let u={},h={},p=new WeakMap,d=[],_=null,g=!1,m=null,f=null,x=null,S=null,y=null,C=null,I=null,L=new Ke(0,0,0),D=0,E=!1,w=null,B=null,R=null,z=null,b=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(J)[1]),H=Z>=1):J.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),H=Z>=2);let Q=null,fe={};const X=r.getParameter(r.SCISSOR_BOX),K=r.getParameter(r.VIEWPORT),_e=new bt().fromArray(X),j=new bt().fromArray(K);function Y(te,Ce,pe,ve){const Ie=new Uint8Array(4),De=r.createTexture();r.bindTexture(te,De),r.texParameteri(te,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(te,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let at=0;at<pe;at++)te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?r.texImage3D(Ce,0,r.RGBA,1,1,ve,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(Ce+at,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return De}const ce={};ce[r.TEXTURE_2D]=Y(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=Y(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[r.TEXTURE_2D_ARRAY]=Y(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=Y(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),de(r.DEPTH_TEST),a.setFunc(ys),re(!1),V(Ic),de(r.CULL_FACE),v(xi);function de(te){u[te]!==!0&&(r.enable(te),u[te]=!0)}function xe(te){u[te]!==!1&&(r.disable(te),u[te]=!1)}function we(te,Ce){return h[te]!==Ce?(r.bindFramebuffer(te,Ce),h[te]=Ce,te===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=Ce),te===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Be(te,Ce){let pe=d,ve=!1;if(te){pe=p.get(Ce),pe===void 0&&(pe=[],p.set(Ce,pe));const Ie=te.textures;if(pe.length!==Ie.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let De=0,at=Ie.length;De<at;De++)pe[De]=r.COLOR_ATTACHMENT0+De;pe.length=Ie.length,ve=!0}}else pe[0]!==r.BACK&&(pe[0]=r.BACK,ve=!0);ve&&r.drawBuffers(pe)}function Qe(te){return _!==te?(r.useProgram(te),_=te,!0):!1}const tt={[Di]:r.FUNC_ADD,[wh]:r.FUNC_SUBTRACT,[Th]:r.FUNC_REVERSE_SUBTRACT};tt[Ah]=r.MIN,tt[Rh]=r.MAX;const pt={[Ch]:r.ZERO,[Ih]:r.ONE,[Lh]:r.SRC_COLOR,[ho]:r.SRC_ALPHA,[Oh]:r.SRC_ALPHA_SATURATE,[Uh]:r.DST_COLOR,[Nh]:r.DST_ALPHA,[Ph]:r.ONE_MINUS_SRC_COLOR,[fo]:r.ONE_MINUS_SRC_ALPHA,[Fh]:r.ONE_MINUS_DST_COLOR,[Dh]:r.ONE_MINUS_DST_ALPHA,[kh]:r.CONSTANT_COLOR,[Bh]:r.ONE_MINUS_CONSTANT_COLOR,[zh]:r.CONSTANT_ALPHA,[Vh]:r.ONE_MINUS_CONSTANT_ALPHA};function v(te,Ce,pe,ve,Ie,De,at,Lt,zt,lt){if(te===xi){g===!0&&(xe(r.BLEND),g=!1);return}if(g===!1&&(de(r.BLEND),g=!0),te!==Eh){if(te!==m||lt!==E){if((f!==Di||y!==Di)&&(r.blendEquation(r.FUNC_ADD),f=Di,y=Di),lt)switch(te){case ms:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Lc:r.blendFunc(r.ONE,r.ONE);break;case Pc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",te);break}else switch(te){case ms:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Lc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Pc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",te);break}x=null,S=null,C=null,I=null,L.set(0,0,0),D=0,m=te,E=lt}return}Ie=Ie||Ce,De=De||pe,at=at||ve,(Ce!==f||Ie!==y)&&(r.blendEquationSeparate(tt[Ce],tt[Ie]),f=Ce,y=Ie),(pe!==x||ve!==S||De!==C||at!==I)&&(r.blendFuncSeparate(pt[pe],pt[ve],pt[De],pt[at]),x=pe,S=ve,C=De,I=at),(Lt.equals(L)===!1||zt!==D)&&(r.blendColor(Lt.r,Lt.g,Lt.b,zt),L.copy(Lt),D=zt),m=te,E=!1}function me(te,Ce){te.side===xn?xe(r.CULL_FACE):de(r.CULL_FACE);let pe=te.side===Qt;Ce&&(pe=!pe),re(pe),te.blending===ms&&te.transparent===!1?v(xi):v(te.blending,te.blendEquation,te.blendSrc,te.blendDst,te.blendEquationAlpha,te.blendSrcAlpha,te.blendDstAlpha,te.blendColor,te.blendAlpha,te.premultipliedAlpha),a.setFunc(te.depthFunc),a.setTest(te.depthTest),a.setMask(te.depthWrite),s.setMask(te.colorWrite);const ve=te.stencilWrite;o.setTest(ve),ve&&(o.setMask(te.stencilWriteMask),o.setFunc(te.stencilFunc,te.stencilRef,te.stencilFuncMask),o.setOp(te.stencilFail,te.stencilZFail,te.stencilZPass)),$(te.polygonOffset,te.polygonOffsetFactor,te.polygonOffsetUnits),te.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):xe(r.SAMPLE_ALPHA_TO_COVERAGE)}function re(te){w!==te&&(te?r.frontFace(r.CW):r.frontFace(r.CCW),w=te)}function V(te){te!==bh?(de(r.CULL_FACE),te!==B&&(te===Ic?r.cullFace(r.BACK):te===Mh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xe(r.CULL_FACE),B=te}function O(te){te!==R&&(H&&r.lineWidth(te),R=te)}function $(te,Ce,pe){te?(de(r.POLYGON_OFFSET_FILL),(z!==Ce||b!==pe)&&(r.polygonOffset(Ce,pe),z=Ce,b=pe)):xe(r.POLYGON_OFFSET_FILL)}function oe(te){te?de(r.SCISSOR_TEST):xe(r.SCISSOR_TEST)}function P(te){te===void 0&&(te=r.TEXTURE0+W-1),Q!==te&&(r.activeTexture(te),Q=te)}function M(te,Ce,pe){pe===void 0&&(Q===null?pe=r.TEXTURE0+W-1:pe=Q);let ve=fe[pe];ve===void 0&&(ve={type:void 0,texture:void 0},fe[pe]=ve),(ve.type!==te||ve.texture!==Ce)&&(Q!==pe&&(r.activeTexture(pe),Q=pe),r.bindTexture(te,Ce||ce[te]),ve.type=te,ve.texture=Ce)}function G(){const te=fe[Q];te!==void 0&&te.type!==void 0&&(r.bindTexture(te.type,null),te.type=void 0,te.texture=void 0)}function se(){try{r.compressedTexImage2D.apply(r,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function ae(){try{r.texSubImage2D.apply(r,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Te(){try{r.texSubImage3D.apply(r,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function ye(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Re(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function ct(){try{r.texStorage2D.apply(r,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function be(){try{r.texStorage3D.apply(r,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Fe(){try{r.texImage2D.apply(r,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Ne(){try{r.texImage3D.apply(r,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Ze(te){_e.equals(te)===!1&&(r.scissor(te.x,te.y,te.z,te.w),_e.copy(te))}function Oe(te){j.equals(te)===!1&&(r.viewport(te.x,te.y,te.z,te.w),j.copy(te))}function nt(te,Ce){let pe=l.get(Ce);pe===void 0&&(pe=new WeakMap,l.set(Ce,pe));let ve=pe.get(te);ve===void 0&&(ve=r.getUniformBlockIndex(Ce,te.name),pe.set(te,ve))}function it(te,Ce){const ve=l.get(Ce).get(te);c.get(Ce)!==ve&&(r.uniformBlockBinding(Ce,ve,te.__bindingPointIndex),c.set(Ce,ve))}function yt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Q=null,fe={},h={},p=new WeakMap,d=[],_=null,g=!1,m=null,f=null,x=null,S=null,y=null,C=null,I=null,L=new Ke(0,0,0),D=0,E=!1,w=null,B=null,R=null,z=null,b=null,_e.set(0,0,r.canvas.width,r.canvas.height),j.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:de,disable:xe,bindFramebuffer:we,drawBuffers:Be,useProgram:Qe,setBlending:v,setMaterial:me,setFlipSided:re,setCullFace:V,setLineWidth:O,setPolygonOffset:$,setScissorTest:oe,activeTexture:P,bindTexture:M,unbindTexture:G,compressedTexImage2D:se,compressedTexImage3D:ne,texImage2D:Fe,texImage3D:Ne,updateUBOMapping:nt,uniformBlockBinding:it,texStorage2D:ct,texStorage3D:be,texSubImage2D:ae,texSubImage3D:Te,compressedTexSubImage2D:ye,compressedTexSubImage3D:Re,scissor:Ze,viewport:Oe,reset:yt}}function Rl(r,e,t,n){const i=C_(n);switch(t){case Eu:return r*e;case Tu:return r*e;case Au:return r*e*2;case lc:return r*e/i.components*i.byteLength;case uc:return r*e/i.components*i.byteLength;case Ru:return r*e*2/i.components*i.byteLength;case hc:return r*e*2/i.components*i.byteLength;case wu:return r*e*3/i.components*i.byteLength;case Mn:return r*e*4/i.components*i.byteLength;case dc:return r*e*4/i.components*i.byteLength;case Qr:case ea:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ta:case na:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Eo:case To:return Math.max(r,16)*Math.max(e,8)/4;case So:case wo:return Math.max(r,8)*Math.max(e,8)/2;case Ao:case Ro:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Co:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Io:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Po:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case No:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Do:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ko:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case zo:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Vo:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ho:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Go:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ia:case Wo:case jo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Cu:case Xo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case qo:case Yo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function C_(r){switch(r){case ri:case bu:return{byteLength:1,components:1};case tr:case Mu:case or:return{byteLength:2,components:1};case oc:case cc:return{byteLength:2,components:4};case Bi:case ac:case Nn:return{byteLength:4,components:1};case Su:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function I_(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new rt,u=new WeakMap;let h;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,M){return d?new OffscreenCanvas(P,M):sr("canvas")}function g(P,M,G){let se=1;const ne=oe(P);if((ne.width>G||ne.height>G)&&(se=G/Math.max(ne.width,ne.height)),se<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ae=Math.floor(se*ne.width),Te=Math.floor(se*ne.height);h===void 0&&(h=_(ae,Te));const ye=M?_(ae,Te):h;return ye.width=ae,ye.height=Te,ye.getContext("2d").drawImage(P,0,0,ae,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ae+"x"+Te+")."),ye}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function m(P){return P.generateMipmaps}function f(P){r.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(P,M,G,se,ne=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ae=M;if(M===r.RED&&(G===r.FLOAT&&(ae=r.R32F),G===r.HALF_FLOAT&&(ae=r.R16F),G===r.UNSIGNED_BYTE&&(ae=r.R8)),M===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(ae=r.R8UI),G===r.UNSIGNED_SHORT&&(ae=r.R16UI),G===r.UNSIGNED_INT&&(ae=r.R32UI),G===r.BYTE&&(ae=r.R8I),G===r.SHORT&&(ae=r.R16I),G===r.INT&&(ae=r.R32I)),M===r.RG&&(G===r.FLOAT&&(ae=r.RG32F),G===r.HALF_FLOAT&&(ae=r.RG16F),G===r.UNSIGNED_BYTE&&(ae=r.RG8)),M===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(ae=r.RG8UI),G===r.UNSIGNED_SHORT&&(ae=r.RG16UI),G===r.UNSIGNED_INT&&(ae=r.RG32UI),G===r.BYTE&&(ae=r.RG8I),G===r.SHORT&&(ae=r.RG16I),G===r.INT&&(ae=r.RG32I)),M===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(ae=r.RGB8UI),G===r.UNSIGNED_SHORT&&(ae=r.RGB16UI),G===r.UNSIGNED_INT&&(ae=r.RGB32UI),G===r.BYTE&&(ae=r.RGB8I),G===r.SHORT&&(ae=r.RGB16I),G===r.INT&&(ae=r.RGB32I)),M===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(ae=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(ae=r.RGBA16UI),G===r.UNSIGNED_INT&&(ae=r.RGBA32UI),G===r.BYTE&&(ae=r.RGBA8I),G===r.SHORT&&(ae=r.RGBA16I),G===r.INT&&(ae=r.RGBA32I)),M===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(ae=r.RGB9_E5),M===r.RGBA){const Te=ne?ma:dt.getTransfer(se);G===r.FLOAT&&(ae=r.RGBA32F),G===r.HALF_FLOAT&&(ae=r.RGBA16F),G===r.UNSIGNED_BYTE&&(ae=Te===Rt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(ae=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(ae=r.RGB5_A1)}return(ae===r.R16F||ae===r.R32F||ae===r.RG16F||ae===r.RG32F||ae===r.RGBA16F||ae===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function y(P,M){let G;return P?M===null||M===Bi||M===Ss?G=r.DEPTH24_STENCIL8:M===Nn?G=r.DEPTH32F_STENCIL8:M===tr&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Bi||M===Ss?G=r.DEPTH_COMPONENT24:M===Nn?G=r.DEPTH_COMPONENT32F:M===tr&&(G=r.DEPTH_COMPONENT16),G}function C(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==en&&P.minFilter!==Yt?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function I(P){const M=P.target;M.removeEventListener("dispose",I),D(M),M.isVideoTexture&&u.delete(M)}function L(P){const M=P.target;M.removeEventListener("dispose",L),w(M)}function D(P){const M=n.get(P);if(M.__webglInit===void 0)return;const G=P.source,se=p.get(G);if(se){const ne=se[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&E(P),Object.keys(se).length===0&&p.delete(G)}n.remove(P)}function E(P){const M=n.get(P);r.deleteTexture(M.__webglTexture);const G=P.source,se=p.get(G);delete se[M.__cacheKey],a.memory.textures--}function w(P){const M=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(M.__webglFramebuffer[se]))for(let ne=0;ne<M.__webglFramebuffer[se].length;ne++)r.deleteFramebuffer(M.__webglFramebuffer[se][ne]);else r.deleteFramebuffer(M.__webglFramebuffer[se]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[se])}else{if(Array.isArray(M.__webglFramebuffer))for(let se=0;se<M.__webglFramebuffer.length;se++)r.deleteFramebuffer(M.__webglFramebuffer[se]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let se=0;se<M.__webglColorRenderbuffer.length;se++)M.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[se]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=P.textures;for(let se=0,ne=G.length;se<ne;se++){const ae=n.get(G[se]);ae.__webglTexture&&(r.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(G[se])}n.remove(P)}let B=0;function R(){B=0}function z(){const P=B;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),B+=1,P}function b(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function W(P,M){const G=n.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const se=P.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(G,P,M);return}}t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+M)}function H(P,M){const G=n.get(P);if(P.version>0&&G.__version!==P.version){j(G,P,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+M)}function Z(P,M){const G=n.get(P);if(P.version>0&&G.__version!==P.version){j(G,P,M);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+M)}function J(P,M){const G=n.get(P);if(P.version>0&&G.__version!==P.version){Y(G,P,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+M)}const Q={[yn]:r.REPEAT,[bn]:r.CLAMP_TO_EDGE,[aa]:r.MIRRORED_REPEAT},fe={[en]:r.NEAREST,[yu]:r.NEAREST_MIPMAP_NEAREST,[Ks]:r.NEAREST_MIPMAP_LINEAR,[Yt]:r.LINEAR,[Jr]:r.LINEAR_MIPMAP_NEAREST,[Pn]:r.LINEAR_MIPMAP_LINEAR},X={[ad]:r.NEVER,[dd]:r.ALWAYS,[od]:r.LESS,[Lu]:r.LEQUAL,[cd]:r.EQUAL,[hd]:r.GEQUAL,[ld]:r.GREATER,[ud]:r.NOTEQUAL};function K(P,M){if(M.type===Nn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Yt||M.magFilter===Jr||M.magFilter===Ks||M.magFilter===Pn||M.minFilter===Yt||M.minFilter===Jr||M.minFilter===Ks||M.minFilter===Pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Q[M.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Q[M.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Q[M.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,fe[M.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,fe[M.minFilter]),M.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,X[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===en||M.minFilter!==Ks&&M.minFilter!==Pn||M.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function _e(P,M){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",I));const se=M.source;let ne=p.get(se);ne===void 0&&(ne={},p.set(se,ne));const ae=b(M);if(ae!==P.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ne[ae].usedTimes++;const Te=ne[P.__cacheKey];Te!==void 0&&(ne[P.__cacheKey].usedTimes--,Te.usedTimes===0&&E(M)),P.__cacheKey=ae,P.__webglTexture=ne[ae].texture}return G}function j(P,M,G){let se=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=r.TEXTURE_3D);const ne=_e(P,M),ae=M.source;t.bindTexture(se,P.__webglTexture,r.TEXTURE0+G);const Te=n.get(ae);if(ae.version!==Te.__version||ne===!0){t.activeTexture(r.TEXTURE0+G);const ye=dt.getPrimaries(dt.workingColorSpace),Re=M.colorSpace===_i?null:dt.getPrimaries(M.colorSpace),ct=M.colorSpace===_i||ye===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let be=g(M.image,!1,i.maxTextureSize);be=$(M,be);const Fe=s.convert(M.format,M.colorSpace),Ne=s.convert(M.type);let Ze=S(M.internalFormat,Fe,Ne,M.colorSpace,M.isVideoTexture);K(se,M);let Oe;const nt=M.mipmaps,it=M.isVideoTexture!==!0,yt=Te.__version===void 0||ne===!0,te=ae.dataReady,Ce=C(M,be);if(M.isDepthTexture)Ze=y(M.format===Es,M.type),yt&&(it?t.texStorage2D(r.TEXTURE_2D,1,Ze,be.width,be.height):t.texImage2D(r.TEXTURE_2D,0,Ze,be.width,be.height,0,Fe,Ne,null));else if(M.isDataTexture)if(nt.length>0){it&&yt&&t.texStorage2D(r.TEXTURE_2D,Ce,Ze,nt[0].width,nt[0].height);for(let pe=0,ve=nt.length;pe<ve;pe++)Oe=nt[pe],it?te&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,Oe.width,Oe.height,Fe,Ne,Oe.data):t.texImage2D(r.TEXTURE_2D,pe,Ze,Oe.width,Oe.height,0,Fe,Ne,Oe.data);M.generateMipmaps=!1}else it?(yt&&t.texStorage2D(r.TEXTURE_2D,Ce,Ze,be.width,be.height),te&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,be.width,be.height,Fe,Ne,be.data)):t.texImage2D(r.TEXTURE_2D,0,Ze,be.width,be.height,0,Fe,Ne,be.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){it&&yt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Ze,nt[0].width,nt[0].height,be.depth);for(let pe=0,ve=nt.length;pe<ve;pe++)if(Oe=nt[pe],M.format!==Mn)if(Fe!==null)if(it){if(te)if(M.layerUpdates.size>0){const Ie=Rl(Oe.width,Oe.height,M.format,M.type);for(const De of M.layerUpdates){const at=Oe.data.subarray(De*Ie/Oe.data.BYTES_PER_ELEMENT,(De+1)*Ie/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,De,Oe.width,Oe.height,1,Fe,at)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,Oe.width,Oe.height,be.depth,Fe,Oe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pe,Ze,Oe.width,Oe.height,be.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?te&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,Oe.width,Oe.height,be.depth,Fe,Ne,Oe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,pe,Ze,Oe.width,Oe.height,be.depth,0,Fe,Ne,Oe.data)}else{it&&yt&&t.texStorage2D(r.TEXTURE_2D,Ce,Ze,nt[0].width,nt[0].height);for(let pe=0,ve=nt.length;pe<ve;pe++)Oe=nt[pe],M.format!==Mn?Fe!==null?it?te&&t.compressedTexSubImage2D(r.TEXTURE_2D,pe,0,0,Oe.width,Oe.height,Fe,Oe.data):t.compressedTexImage2D(r.TEXTURE_2D,pe,Ze,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?te&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,Oe.width,Oe.height,Fe,Ne,Oe.data):t.texImage2D(r.TEXTURE_2D,pe,Ze,Oe.width,Oe.height,0,Fe,Ne,Oe.data)}else if(M.isDataArrayTexture)if(it){if(yt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Ze,be.width,be.height,be.depth),te)if(M.layerUpdates.size>0){const pe=Rl(be.width,be.height,M.format,M.type);for(const ve of M.layerUpdates){const Ie=be.data.subarray(ve*pe/be.data.BYTES_PER_ELEMENT,(ve+1)*pe/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ve,be.width,be.height,1,Fe,Ne,Ie)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Fe,Ne,be.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ze,be.width,be.height,be.depth,0,Fe,Ne,be.data);else if(M.isData3DTexture)it?(yt&&t.texStorage3D(r.TEXTURE_3D,Ce,Ze,be.width,be.height,be.depth),te&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Fe,Ne,be.data)):t.texImage3D(r.TEXTURE_3D,0,Ze,be.width,be.height,be.depth,0,Fe,Ne,be.data);else if(M.isFramebufferTexture){if(yt)if(it)t.texStorage2D(r.TEXTURE_2D,Ce,Ze,be.width,be.height);else{let pe=be.width,ve=be.height;for(let Ie=0;Ie<Ce;Ie++)t.texImage2D(r.TEXTURE_2D,Ie,Ze,pe,ve,0,Fe,Ne,null),pe>>=1,ve>>=1}}else if(nt.length>0){if(it&&yt){const pe=oe(nt[0]);t.texStorage2D(r.TEXTURE_2D,Ce,Ze,pe.width,pe.height)}for(let pe=0,ve=nt.length;pe<ve;pe++)Oe=nt[pe],it?te&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,Fe,Ne,Oe):t.texImage2D(r.TEXTURE_2D,pe,Ze,Fe,Ne,Oe);M.generateMipmaps=!1}else if(it){if(yt){const pe=oe(be);t.texStorage2D(r.TEXTURE_2D,Ce,Ze,pe.width,pe.height)}te&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Fe,Ne,be)}else t.texImage2D(r.TEXTURE_2D,0,Ze,Fe,Ne,be);m(M)&&f(se),Te.__version=ae.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Y(P,M,G){if(M.image.length!==6)return;const se=_e(P,M),ne=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+G);const ae=n.get(ne);if(ne.version!==ae.__version||se===!0){t.activeTexture(r.TEXTURE0+G);const Te=dt.getPrimaries(dt.workingColorSpace),ye=M.colorSpace===_i?null:dt.getPrimaries(M.colorSpace),Re=M.colorSpace===_i||Te===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const ct=M.isCompressedTexture||M.image[0].isCompressedTexture,be=M.image[0]&&M.image[0].isDataTexture,Fe=[];for(let ve=0;ve<6;ve++)!ct&&!be?Fe[ve]=g(M.image[ve],!0,i.maxCubemapSize):Fe[ve]=be?M.image[ve].image:M.image[ve],Fe[ve]=$(M,Fe[ve]);const Ne=Fe[0],Ze=s.convert(M.format,M.colorSpace),Oe=s.convert(M.type),nt=S(M.internalFormat,Ze,Oe,M.colorSpace),it=M.isVideoTexture!==!0,yt=ae.__version===void 0||se===!0,te=ne.dataReady;let Ce=C(M,Ne);K(r.TEXTURE_CUBE_MAP,M);let pe;if(ct){it&&yt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,nt,Ne.width,Ne.height);for(let ve=0;ve<6;ve++){pe=Fe[ve].mipmaps;for(let Ie=0;Ie<pe.length;Ie++){const De=pe[Ie];M.format!==Mn?Ze!==null?it?te&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,0,0,De.width,De.height,Ze,De.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,nt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,0,0,De.width,De.height,Ze,Oe,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,nt,De.width,De.height,0,Ze,Oe,De.data)}}}else{if(pe=M.mipmaps,it&&yt){pe.length>0&&Ce++;const ve=oe(Fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,nt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(be){it?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Fe[ve].width,Fe[ve].height,Ze,Oe,Fe[ve].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,nt,Fe[ve].width,Fe[ve].height,0,Ze,Oe,Fe[ve].data);for(let Ie=0;Ie<pe.length;Ie++){const at=pe[Ie].image[ve].image;it?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,0,0,at.width,at.height,Ze,Oe,at.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,nt,at.width,at.height,0,Ze,Oe,at.data)}}else{it?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ze,Oe,Fe[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,nt,Ze,Oe,Fe[ve]);for(let Ie=0;Ie<pe.length;Ie++){const De=pe[Ie];it?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,0,0,Ze,Oe,De.image[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,nt,Ze,Oe,De.image[ve])}}}m(M)&&f(r.TEXTURE_CUBE_MAP),ae.__version=ne.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ce(P,M,G,se,ne,ae){const Te=s.convert(G.format,G.colorSpace),ye=s.convert(G.type),Re=S(G.internalFormat,Te,ye,G.colorSpace),ct=n.get(M),be=n.get(G);if(be.__renderTarget=M,!ct.__hasExternalTextures){const Fe=Math.max(1,M.width>>ae),Ne=Math.max(1,M.height>>ae);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,ae,Re,Fe,Ne,M.depth,0,Te,ye,null):t.texImage2D(ne,ae,Re,Fe,Ne,0,Te,ye,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),V(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,ne,be.__webglTexture,0,re(M)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,se,ne,be.__webglTexture,ae),t.bindFramebuffer(r.FRAMEBUFFER,null)}function de(P,M,G){if(r.bindRenderbuffer(r.RENDERBUFFER,P),M.depthBuffer){const se=M.depthTexture,ne=se&&se.isDepthTexture?se.type:null,ae=y(M.stencilBuffer,ne),Te=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=re(M);V(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ye,ae,M.width,M.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,ae,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ae,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,P)}else{const se=M.textures;for(let ne=0;ne<se.length;ne++){const ae=se[ne],Te=s.convert(ae.format,ae.colorSpace),ye=s.convert(ae.type),Re=S(ae.internalFormat,Te,ye,ae.colorSpace),ct=re(M);G&&V(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ct,Re,M.width,M.height):V(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ct,Re,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Re,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xe(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(M.depthTexture);se.__renderTarget=M,(!se.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const ne=se.__webglTexture,ae=re(M);if(M.depthTexture.format===gs)V(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ne,0);else if(M.depthTexture.format===Es)V(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function we(P){const M=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const se=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),se){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,se.removeEventListener("dispose",ne)};se.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=se}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");xe(M.__webglFramebuffer,P)}else if(G){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]===void 0)M.__webglDepthbuffer[se]=r.createRenderbuffer(),de(M.__webglDepthbuffer[se],P,!1);else{const ne=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer[se];r.bindRenderbuffer(r.RENDERBUFFER,ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,ae)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),de(M.__webglDepthbuffer,P,!1);else{const se=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ne),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,ne)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Be(P,M,G){const se=n.get(P);M!==void 0&&ce(se.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&we(P)}function Qe(P){const M=P.texture,G=n.get(P),se=n.get(M);P.addEventListener("dispose",L);const ne=P.textures,ae=P.isWebGLCubeRenderTarget===!0,Te=ne.length>1;if(Te||(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=M.version,a.memory.textures++),ae){G.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[ye]=[];for(let Re=0;Re<M.mipmaps.length;Re++)G.__webglFramebuffer[ye][Re]=r.createFramebuffer()}else G.__webglFramebuffer[ye]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let ye=0;ye<M.mipmaps.length;ye++)G.__webglFramebuffer[ye]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Te)for(let ye=0,Re=ne.length;ye<Re;ye++){const ct=n.get(ne[ye]);ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&V(P)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ye=0;ye<ne.length;ye++){const Re=ne[ye];G.__webglColorRenderbuffer[ye]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ye]);const ct=s.convert(Re.format,Re.colorSpace),be=s.convert(Re.type),Fe=S(Re.internalFormat,ct,be,Re.colorSpace,P.isXRRenderTarget===!0),Ne=re(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,Fe,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,G.__webglColorRenderbuffer[ye])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),de(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ae){t.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),K(r.TEXTURE_CUBE_MAP,M);for(let ye=0;ye<6;ye++)if(M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)ce(G.__webglFramebuffer[ye][Re],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Re);else ce(G.__webglFramebuffer[ye],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(M)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ye=0,Re=ne.length;ye<Re;ye++){const ct=ne[ye],be=n.get(ct);t.bindTexture(r.TEXTURE_2D,be.__webglTexture),K(r.TEXTURE_2D,ct),ce(G.__webglFramebuffer,P,ct,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,0),m(ct)&&f(r.TEXTURE_2D)}t.unbindTexture()}else{let ye=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ye=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ye,se.__webglTexture),K(ye,M),M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)ce(G.__webglFramebuffer[Re],P,M,r.COLOR_ATTACHMENT0,ye,Re);else ce(G.__webglFramebuffer,P,M,r.COLOR_ATTACHMENT0,ye,0);m(M)&&f(ye),t.unbindTexture()}P.depthBuffer&&we(P)}function tt(P){const M=P.textures;for(let G=0,se=M.length;G<se;G++){const ne=M[G];if(m(ne)){const ae=x(P),Te=n.get(ne).__webglTexture;t.bindTexture(ae,Te),f(ae),t.unbindTexture()}}}const pt=[],v=[];function me(P){if(P.samples>0){if(V(P)===!1){const M=P.textures,G=P.width,se=P.height;let ne=r.COLOR_BUFFER_BIT;const ae=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=n.get(P),ye=M.length>1;if(ye)for(let Re=0;Re<M.length;Re++)t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Re=0;Re<M.length;Re++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),ye){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Re]);const ct=n.get(M[Re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ct,0)}r.blitFramebuffer(0,0,G,se,0,0,G,se,ne,r.NEAREST),c===!0&&(pt.length=0,v.length=0,pt.push(r.COLOR_ATTACHMENT0+Re),P.depthBuffer&&P.resolveDepthBuffer===!1&&(pt.push(ae),v.push(ae),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,v)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ye)for(let Re=0;Re<M.length;Re++){t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Re]);const ct=n.get(M[Re]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,ct,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const M=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function re(P){return Math.min(i.maxSamples,P.samples)}function V(P){const M=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function O(P){const M=a.render.frame;u.get(P)!==M&&(u.set(P,M),P.update())}function $(P,M){const G=P.colorSpace,se=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==nn&&G!==_i&&(dt.getTransfer(G)===Rt?(se!==Mn||ne!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function oe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=R,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=J,this.rebindTextures=Be,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=V}function L_(r,e){function t(n,i=_i){let s;const a=dt.getTransfer(i);if(n===ri)return r.UNSIGNED_BYTE;if(n===oc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===cc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Su)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===bu)return r.BYTE;if(n===Mu)return r.SHORT;if(n===tr)return r.UNSIGNED_SHORT;if(n===ac)return r.INT;if(n===Bi)return r.UNSIGNED_INT;if(n===Nn)return r.FLOAT;if(n===or)return r.HALF_FLOAT;if(n===Eu)return r.ALPHA;if(n===wu)return r.RGB;if(n===Mn)return r.RGBA;if(n===Tu)return r.LUMINANCE;if(n===Au)return r.LUMINANCE_ALPHA;if(n===gs)return r.DEPTH_COMPONENT;if(n===Es)return r.DEPTH_STENCIL;if(n===lc)return r.RED;if(n===uc)return r.RED_INTEGER;if(n===Ru)return r.RG;if(n===hc)return r.RG_INTEGER;if(n===dc)return r.RGBA_INTEGER;if(n===Qr||n===ea||n===ta||n===na)if(a===Rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Qr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Qr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ea)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ta)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===So||n===Eo||n===wo||n===To)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===So)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Eo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===To)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ao||n===Ro||n===Co)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ao||n===Ro)return a===Rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Co)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Io||n===Lo||n===Po||n===No||n===Do||n===Uo||n===Fo||n===Oo||n===ko||n===Bo||n===zo||n===Vo||n===Ho||n===Go)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Io)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lo)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Po)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===No)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Do)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fo)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oo)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ko)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bo)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zo)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vo)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ho)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Go)return a===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ia||n===Wo||n===jo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ia)return a===Rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cu||n===Xo||n===qo||n===Yo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ia)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Xo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class P_ extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bn extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N_={type:"move"};class Qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(l,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],p=u.position.distanceTo(h.position),d=.02,_=.005;l.inputState.pinching&&p>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(N_)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const D_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U_=`
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

}`;class F_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ot,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ai({vertexShader:D_,fragmentShader:U_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new Cs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O_ extends Wi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,p=null,d=null,_=null;const g=new F_,m=t.getContextAttributes();let f=null,x=null;const S=[],y=[],C=new rt;let I=null;const L=new Gt;L.viewport=new bt;const D=new Gt;D.viewport=new bt;const E=[L,D],w=new P_;let B=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Y=S[j];return Y===void 0&&(Y=new Qa,S[j]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(j){let Y=S[j];return Y===void 0&&(Y=new Qa,S[j]=Y),Y.getGripSpace()},this.getHand=function(j){let Y=S[j];return Y===void 0&&(Y=new Qa,S[j]=Y),Y.getHandSpace()};function z(j){const Y=y.indexOf(j.inputSource);if(Y===-1)return;const ce=S[Y];ce!==void 0&&(ce.update(j.inputSource,j.frame,l||a),ce.dispatchEvent({type:j.type,data:j.inputSource}))}function b(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",b),i.removeEventListener("inputsourceschange",W);for(let j=0;j<S.length;j++){const Y=y[j];Y!==null&&(y[j]=null,S[j].disconnect(Y))}B=null,R=null,g.reset(),e.setRenderTarget(f),d=null,p=null,h=null,i=null,x=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",b),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new zi(d.framebufferWidth,d.framebufferHeight,{format:Mn,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,ce=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=m.stencil?Es:gs,ce=m.stencil?Ss:Bi);const xe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};h=new XRWebGLBinding(i,t),p=h.createProjectionLayer(xe),i.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),x=new zi(p.textureWidth,p.textureHeight,{format:Mn,type:ri,depthTexture:new Gu(p.textureWidth,p.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),_e.setContext(i),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(j){for(let Y=0;Y<j.removed.length;Y++){const ce=j.removed[Y],de=y.indexOf(ce);de>=0&&(y[de]=null,S[de].disconnect(ce))}for(let Y=0;Y<j.added.length;Y++){const ce=j.added[Y];let de=y.indexOf(ce);if(de===-1){for(let we=0;we<S.length;we++)if(we>=y.length){y.push(ce),de=we;break}else if(y[we]===null){y[we]=ce,de=we;break}if(de===-1)break}const xe=S[de];xe&&xe.connect(ce)}}const H=new q,Z=new q;function J(j,Y,ce){H.setFromMatrixPosition(Y.matrixWorld),Z.setFromMatrixPosition(ce.matrixWorld);const de=H.distanceTo(Z),xe=Y.projectionMatrix.elements,we=ce.projectionMatrix.elements,Be=xe[14]/(xe[10]-1),Qe=xe[14]/(xe[10]+1),tt=(xe[9]+1)/xe[5],pt=(xe[9]-1)/xe[5],v=(xe[8]-1)/xe[0],me=(we[8]+1)/we[0],re=Be*v,V=Be*me,O=de/(-v+me),$=O*-v;if(Y.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX($),j.translateZ(O),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),xe[10]===-1)j.projectionMatrix.copy(Y.projectionMatrix),j.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const oe=Be+O,P=Qe+O,M=re-$,G=V+(de-$),se=tt*Qe/P*oe,ne=pt*Qe/P*oe;j.projectionMatrix.makePerspective(M,G,se,ne,oe,P),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Q(j,Y){Y===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Y.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let Y=j.near,ce=j.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(ce=g.depthFar)),w.near=D.near=L.near=Y,w.far=D.far=L.far=ce,(B!==w.near||R!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),B=w.near,R=w.far),L.layers.mask=j.layers.mask|2,D.layers.mask=j.layers.mask|4,w.layers.mask=L.layers.mask|D.layers.mask;const de=j.parent,xe=w.cameras;Q(w,de);for(let we=0;we<xe.length;we++)Q(xe[we],de);xe.length===2?J(w,L,D):w.projectionMatrix.copy(L.projectionMatrix),fe(j,w,de)};function fe(j,Y,ce){ce===null?j.matrix.copy(Y.matrixWorld):(j.matrix.copy(ce.matrixWorld),j.matrix.invert(),j.matrix.multiply(Y.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Y.projectionMatrix),j.projectionMatrixInverse.copy(Y.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ws*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(p===null&&d===null))return c},this.setFoveation=function(j){c=j,p!==null&&(p.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(w)};let X=null;function K(j,Y){if(u=Y.getViewerPose(l||a),_=Y,u!==null){const ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let de=!1;ce.length!==w.cameras.length&&(w.cameras.length=0,de=!0);for(let we=0;we<ce.length;we++){const Be=ce[we];let Qe=null;if(d!==null)Qe=d.getViewport(Be);else{const pt=h.getViewSubImage(p,Be);Qe=pt.viewport,we===0&&(e.setRenderTargetTextures(x,pt.colorTexture,p.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(x))}let tt=E[we];tt===void 0&&(tt=new Gt,tt.layers.enable(we),tt.viewport=new bt,E[we]=tt),tt.matrix.fromArray(Be.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Be.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),we===0&&(w.matrix.copy(tt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),de===!0&&w.cameras.push(tt)}const xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")){const we=h.getDepthInformation(ce[0]);we&&we.isValid&&we.texture&&g.init(e,we,i.renderState)}}for(let ce=0;ce<S.length;ce++){const de=y[ce],xe=S[ce];de!==null&&xe!==void 0&&xe.update(de,Y,l||a)}X&&X(j,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),_=null}const _e=new Hu;_e.setAnimationLoop(K),this.setAnimationLoop=function(j){X=j},this.dispose=function(){}}}const Ci=new cn,k_=new Ye;function B_(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ku(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,x,S,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,x,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Qt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Qt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),S=x.envMap,y=x.envMapRotation;S&&(m.envMap.value=S,Ci.copy(y),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),m.envMapRotation.value.setFromMatrix4(k_.makeRotationFromEuler(Ci)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,x,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Qt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function z_(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,S){const y=S.program;n.uniformBlockBinding(x,y)}function l(x,S){let y=i[x.id];y===void 0&&(_(x),y=u(x),i[x.id]=y,x.addEventListener("dispose",m));const C=S.program;n.updateUBOMapping(x,C);const I=e.render.frame;s[x.id]!==I&&(p(x),s[x.id]=I)}function u(x){const S=h();x.__bindingPointIndex=S;const y=r.createBuffer(),C=x.__size,I=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,C,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,y),y}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const S=i[x.id],y=x.uniforms,C=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let I=0,L=y.length;I<L;I++){const D=Array.isArray(y[I])?y[I]:[y[I]];for(let E=0,w=D.length;E<w;E++){const B=D[E];if(d(B,I,E,C)===!0){const R=B.__offset,z=Array.isArray(B.value)?B.value:[B.value];let b=0;for(let W=0;W<z.length;W++){const H=z[W],Z=g(H);typeof H=="number"||typeof H=="boolean"?(B.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,R+b,B.__data)):H.isMatrix3?(B.__data[0]=H.elements[0],B.__data[1]=H.elements[1],B.__data[2]=H.elements[2],B.__data[3]=0,B.__data[4]=H.elements[3],B.__data[5]=H.elements[4],B.__data[6]=H.elements[5],B.__data[7]=0,B.__data[8]=H.elements[6],B.__data[9]=H.elements[7],B.__data[10]=H.elements[8],B.__data[11]=0):(H.toArray(B.__data,b),b+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,R,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,S,y,C){const I=x.value,L=S+"_"+y;if(C[L]===void 0)return typeof I=="number"||typeof I=="boolean"?C[L]=I:C[L]=I.clone(),!0;{const D=C[L];if(typeof I=="number"||typeof I=="boolean"){if(D!==I)return C[L]=I,!0}else if(D.equals(I)===!1)return D.copy(I),!0}return!1}function _(x){const S=x.uniforms;let y=0;const C=16;for(let L=0,D=S.length;L<D;L++){const E=Array.isArray(S[L])?S[L]:[S[L]];for(let w=0,B=E.length;w<B;w++){const R=E[w],z=Array.isArray(R.value)?R.value:[R.value];for(let b=0,W=z.length;b<W;b++){const H=z[b],Z=g(H),J=y%C,Q=J%Z.boundary,fe=J+Q;y+=Q,fe!==0&&C-fe<Z.storage&&(y+=C-fe),R.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=y,y+=Z.storage}}}const I=y%C;return I>0&&(y+=C-I),x.__size=y,x.__cache={},this}function g(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function m(x){const S=x.target;S.removeEventListener("dispose",m);const y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function f(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:c,update:l,dispose:f}}class V_{constructor(e={}){const{canvas:t=Cd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const x=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this.toneMapping=yi,this.toneMappingExposure=1;const y=this;let C=!1,I=0,L=0,D=null,E=-1,w=null;const B=new bt,R=new bt;let z=null;const b=new Ke(0);let W=0,H=t.width,Z=t.height,J=1,Q=null,fe=null;const X=new bt(0,0,H,Z),K=new bt(0,0,H,Z);let _e=!1;const j=new gc;let Y=!1,ce=!1;const de=new Ye,xe=new Ye,we=new q,Be=new bt,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function pt(){return D===null?J:1}let v=n;function me(F,ie){return t.getContext(F,ie)}try{const F={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rc}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",De,!1),v===null){const ie="webgl2";if(v=me(ie,F),v===null)throw me(ie)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let re,V,O,$,oe,P,M,G,se,ne,ae,Te,ye,Re,ct,be,Fe,Ne,Ze,Oe,nt,it,yt,te;function Ce(){re=new Xm(v),re.init(),it=new L_(v,re),V=new zm(v,re,e,it),O=new R_(v,re),V.reverseDepthBuffer&&p&&O.buffers.depth.setReversed(!0),$=new Km(v),oe=new f_,P=new I_(v,re,O,oe,V,it,$),M=new Hm(y),G=new jm(y),se=new tf(v),yt=new km(v,se),ne=new qm(v,se,$,yt),ae=new $m(v,ne,se,$),Ze=new Zm(v,V,P),be=new Vm(oe),Te=new d_(y,M,G,re,V,yt,be),ye=new B_(y,oe),Re=new m_,ct=new b_(re),Ne=new Om(y,M,G,O,ae,d,c),Fe=new T_(y,ae,V),te=new z_(v,$,V,O),Oe=new Bm(v,re,$),nt=new Ym(v,re,$),$.programs=Te.programs,y.capabilities=V,y.extensions=re,y.properties=oe,y.renderLists=Re,y.shadowMap=Fe,y.state=O,y.info=$}Ce();const pe=new O_(y,v);this.xr=pe,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const F=re.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=re.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(F){F!==void 0&&(J=F,this.setSize(H,Z,!1))},this.getSize=function(F){return F.set(H,Z)},this.setSize=function(F,ie,le=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=F,Z=ie,t.width=Math.floor(F*J),t.height=Math.floor(ie*J),le===!0&&(t.style.width=F+"px",t.style.height=ie+"px"),this.setViewport(0,0,F,ie)},this.getDrawingBufferSize=function(F){return F.set(H*J,Z*J).floor()},this.setDrawingBufferSize=function(F,ie,le){H=F,Z=ie,J=le,t.width=Math.floor(F*le),t.height=Math.floor(ie*le),this.setViewport(0,0,F,ie)},this.getCurrentViewport=function(F){return F.copy(B)},this.getViewport=function(F){return F.copy(X)},this.setViewport=function(F,ie,le,ue){F.isVector4?X.set(F.x,F.y,F.z,F.w):X.set(F,ie,le,ue),O.viewport(B.copy(X).multiplyScalar(J).round())},this.getScissor=function(F){return F.copy(K)},this.setScissor=function(F,ie,le,ue){F.isVector4?K.set(F.x,F.y,F.z,F.w):K.set(F,ie,le,ue),O.scissor(R.copy(K).multiplyScalar(J).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(F){O.setScissorTest(_e=F)},this.setOpaqueSort=function(F){Q=F},this.setTransparentSort=function(F){fe=F},this.getClearColor=function(F){return F.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(F=!0,ie=!0,le=!0){let ue=0;if(F){let ee=!1;if(D!==null){const Se=D.texture.format;ee=Se===dc||Se===hc||Se===uc}if(ee){const Se=D.texture.type,Pe=Se===ri||Se===Bi||Se===tr||Se===Ss||Se===oc||Se===cc,Ve=Ne.getClearColor(),He=Ne.getClearAlpha(),et=Ve.r,ot=Ve.g,Ge=Ve.b;Pe?(_[0]=et,_[1]=ot,_[2]=Ge,_[3]=He,v.clearBufferuiv(v.COLOR,0,_)):(g[0]=et,g[1]=ot,g[2]=Ge,g[3]=He,v.clearBufferiv(v.COLOR,0,g))}else ue|=v.COLOR_BUFFER_BIT}ie&&(ue|=v.DEPTH_BUFFER_BIT),le&&(ue|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Re.dispose(),ct.dispose(),oe.dispose(),M.dispose(),G.dispose(),ae.dispose(),yt.dispose(),te.dispose(),Te.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",hr),pe.removeEventListener("sessionend",dr),jn.stop()};function ve(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const F=$.autoReset,ie=Fe.enabled,le=Fe.autoUpdate,ue=Fe.needsUpdate,ee=Fe.type;Ce(),$.autoReset=F,Fe.enabled=ie,Fe.autoUpdate=le,Fe.needsUpdate=ue,Fe.type=ee}function De(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function at(F){const ie=F.target;ie.removeEventListener("dispose",at),Lt(ie)}function Lt(F){zt(F),oe.remove(F)}function zt(F){const ie=oe.get(F).programs;ie!==void 0&&(ie.forEach(function(le){Te.releaseProgram(le)}),F.isShaderMaterial&&Te.releaseShaderCache(F))}this.renderBufferDirect=function(F,ie,le,ue,ee,Se){ie===null&&(ie=Qe);const Pe=ee.isMesh&&ee.matrixWorld.determinant()<0,Ve=Sa(F,ie,le,ue,ee);O.setMaterial(ue,Pe);let He=le.index,et=1;if(ue.wireframe===!0){if(He=ne.getWireframeAttribute(le),He===void 0)return;et=2}const ot=le.drawRange,Ge=le.attributes.position;let mt=ot.start*et,Et=(ot.start+ot.count)*et;Se!==null&&(mt=Math.max(mt,Se.start*et),Et=Math.min(Et,(Se.start+Se.count)*et)),He!==null?(mt=Math.max(mt,0),Et=Math.min(Et,He.count)):Ge!=null&&(mt=Math.max(mt,0),Et=Math.min(Et,Ge.count));const At=Et-mt;if(At<0||At===1/0)return;yt.setup(ee,ue,Ve,le,He);let Ut,_t=Oe;if(He!==null&&(Ut=se.get(He),_t=nt,_t.setIndex(Ut)),ee.isMesh)ue.wireframe===!0?(O.setLineWidth(ue.wireframeLinewidth*pt()),_t.setMode(v.LINES)):_t.setMode(v.TRIANGLES);else if(ee.isLine){let We=ue.linewidth;We===void 0&&(We=1),O.setLineWidth(We*pt()),ee.isLineSegments?_t.setMode(v.LINES):ee.isLineLoop?_t.setMode(v.LINE_LOOP):_t.setMode(v.LINE_STRIP)}else ee.isPoints?_t.setMode(v.POINTS):ee.isSprite&&_t.setMode(v.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)_t.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))_t.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const We=ee._multiDrawStarts,En=ee._multiDrawCounts,gt=ee._multiDrawCount,ln=He?se.get(He).bytesPerElement:1,oi=oe.get(ue).currentProgram.getUniforms();for(let Kt=0;Kt<gt;Kt++)oi.setValue(v,"_gl_DrawID",Kt),_t.render(We[Kt]/ln,En[Kt])}else if(ee.isInstancedMesh)_t.renderInstances(mt,At,ee.count);else if(le.isInstancedBufferGeometry){const We=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,En=Math.min(le.instanceCount,We);_t.renderInstances(mt,At,En)}else _t.render(mt,At)};function lt(F,ie,le){F.transparent===!0&&F.side===xn&&F.forceSinglePass===!1?(F.side=Qt,F.needsUpdate=!0,qi(F,ie,le),F.side=zn,F.needsUpdate=!0,qi(F,ie,le),F.side=xn):qi(F,ie,le)}this.compile=function(F,ie,le=null){le===null&&(le=F),f=ct.get(le),f.init(ie),S.push(f),le.traverseVisible(function(ee){ee.isLight&&ee.layers.test(ie.layers)&&(f.pushLight(ee),ee.castShadow&&f.pushShadow(ee))}),F!==le&&F.traverseVisible(function(ee){ee.isLight&&ee.layers.test(ie.layers)&&(f.pushLight(ee),ee.castShadow&&f.pushShadow(ee))}),f.setupLights();const ue=new Set;return F.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Se=ee.material;if(Se)if(Array.isArray(Se))for(let Pe=0;Pe<Se.length;Pe++){const Ve=Se[Pe];lt(Ve,le,ee),ue.add(Ve)}else lt(Se,le,ee),ue.add(Se)}),S.pop(),f=null,ue},this.compileAsync=function(F,ie,le=null){const ue=this.compile(F,ie,le);return new Promise(ee=>{function Se(){if(ue.forEach(function(Pe){oe.get(Pe).currentProgram.isReady()&&ue.delete(Pe)}),ue.size===0){ee(F);return}setTimeout(Se,10)}re.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let sn=null;function Sn(F){sn&&sn(F)}function hr(){jn.stop()}function dr(){jn.start()}const jn=new Hu;jn.setAnimationLoop(Sn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(F){sn=F,pe.setAnimationLoop(F),F===null?jn.stop():jn.start()},pe.addEventListener("sessionstart",hr),pe.addEventListener("sessionend",dr),this.render=function(F,ie){if(ie!==void 0&&ie.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ie.parent===null&&ie.matrixWorldAutoUpdate===!0&&ie.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(ie),ie=pe.getCamera()),F.isScene===!0&&F.onBeforeRender(y,F,ie,D),f=ct.get(F,S.length),f.init(ie),S.push(f),xe.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),j.setFromProjectionMatrix(xe),ce=this.localClippingEnabled,Y=be.init(this.clippingPlanes,ce),m=Re.get(F,x.length),m.init(),x.push(m),pe.enabled===!0&&pe.isPresenting===!0){const Se=y.xr.getDepthSensingMesh();Se!==null&&Ds(Se,ie,-1/0,y.sortObjects)}Ds(F,ie,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Q,fe),tt=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,tt&&Ne.addToRenderList(m,F),this.info.render.frame++,Y===!0&&be.beginShadows();const le=f.state.shadowsArray;Fe.render(le,F,ie),Y===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=m.opaque,ee=m.transmissive;if(f.setupLights(),ie.isArrayCamera){const Se=ie.cameras;if(ee.length>0)for(let Pe=0,Ve=Se.length;Pe<Ve;Pe++){const He=Se[Pe];Us(ue,ee,F,He)}tt&&Ne.render(F);for(let Pe=0,Ve=Se.length;Pe<Ve;Pe++){const He=Se[Pe];fr(m,F,He,He.viewport)}}else ee.length>0&&Us(ue,ee,F,ie),tt&&Ne.render(F),fr(m,F,ie);D!==null&&(P.updateMultisampleRenderTarget(D),P.updateRenderTargetMipmap(D)),F.isScene===!0&&F.onAfterRender(y,F,ie),yt.resetDefaultState(),E=-1,w=null,S.pop(),S.length>0?(f=S[S.length-1],Y===!0&&be.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Ds(F,ie,le,ue){if(F.visible===!1)return;if(F.layers.test(ie.layers)){if(F.isGroup)le=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(ie);else if(F.isLight)f.pushLight(F),F.castShadow&&f.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||j.intersectsSprite(F)){ue&&Be.setFromMatrixPosition(F.matrixWorld).applyMatrix4(xe);const Pe=ae.update(F),Ve=F.material;Ve.visible&&m.push(F,Pe,Ve,le,Be.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||j.intersectsObject(F))){const Pe=ae.update(F),Ve=F.material;if(ue&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),Be.copy(F.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Be.copy(Pe.boundingSphere.center)),Be.applyMatrix4(F.matrixWorld).applyMatrix4(xe)),Array.isArray(Ve)){const He=Pe.groups;for(let et=0,ot=He.length;et<ot;et++){const Ge=He[et],mt=Ve[Ge.materialIndex];mt&&mt.visible&&m.push(F,Pe,mt,le,Be.z,Ge)}}else Ve.visible&&m.push(F,Pe,Ve,le,Be.z,null)}}const Se=F.children;for(let Pe=0,Ve=Se.length;Pe<Ve;Pe++)Ds(Se[Pe],ie,le,ue)}function fr(F,ie,le,ue){const ee=F.opaque,Se=F.transmissive,Pe=F.transparent;f.setupLightsView(le),Y===!0&&be.setGlobalState(y.clippingPlanes,le),ue&&O.viewport(B.copy(ue)),ee.length>0&&Xi(ee,ie,le),Se.length>0&&Xi(Se,ie,le),Pe.length>0&&Xi(Pe,ie,le),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Us(F,ie,le,ue){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[ue.id]===void 0&&(f.state.transmissionRenderTarget[ue.id]=new zi(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?or:ri,minFilter:Pn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const Se=f.state.transmissionRenderTarget[ue.id],Pe=ue.viewport||B;Se.setSize(Pe.z,Pe.w);const Ve=y.getRenderTarget();y.setRenderTarget(Se),y.getClearColor(b),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),tt&&Ne.render(le);const He=y.toneMapping;y.toneMapping=yi;const et=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),f.setupLightsView(ue),Y===!0&&be.setGlobalState(y.clippingPlanes,ue),Xi(F,le,ue),P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se),re.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Ge=0,mt=ie.length;Ge<mt;Ge++){const Et=ie[Ge],At=Et.object,Ut=Et.geometry,_t=Et.material,We=Et.group;if(_t.side===xn&&At.layers.test(ue.layers)){const En=_t.side;_t.side=Qt,_t.needsUpdate=!0,Fs(At,le,ue,Ut,_t,We),_t.side=En,_t.needsUpdate=!0,ot=!0}}ot===!0&&(P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se))}y.setRenderTarget(Ve),y.setClearColor(b,W),et!==void 0&&(ue.viewport=et),y.toneMapping=He}function Xi(F,ie,le){const ue=ie.isScene===!0?ie.overrideMaterial:null;for(let ee=0,Se=F.length;ee<Se;ee++){const Pe=F[ee],Ve=Pe.object,He=Pe.geometry,et=ue===null?Pe.material:ue,ot=Pe.group;Ve.layers.test(le.layers)&&Fs(Ve,ie,le,He,et,ot)}}function Fs(F,ie,le,ue,ee,Se){F.onBeforeRender(y,ie,le,ue,ee,Se),F.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),ee.onBeforeRender(y,ie,le,ue,F,Se),ee.transparent===!0&&ee.side===xn&&ee.forceSinglePass===!1?(ee.side=Qt,ee.needsUpdate=!0,y.renderBufferDirect(le,ie,ue,ee,F,Se),ee.side=zn,ee.needsUpdate=!0,y.renderBufferDirect(le,ie,ue,ee,F,Se),ee.side=xn):y.renderBufferDirect(le,ie,ue,ee,F,Se),F.onAfterRender(y,ie,le,ue,ee,Se)}function qi(F,ie,le){ie.isScene!==!0&&(ie=Qe);const ue=oe.get(F),ee=f.state.lights,Se=f.state.shadowsArray,Pe=ee.state.version,Ve=Te.getParameters(F,ee.state,Se,ie,le),He=Te.getProgramCacheKey(Ve);let et=ue.programs;ue.environment=F.isMeshStandardMaterial?ie.environment:null,ue.fog=ie.fog,ue.envMap=(F.isMeshStandardMaterial?G:M).get(F.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&F.envMap===null?ie.environmentRotation:F.envMapRotation,et===void 0&&(F.addEventListener("dispose",at),et=new Map,ue.programs=et);let ot=et.get(He);if(ot!==void 0){if(ue.currentProgram===ot&&ue.lightsStateVersion===Pe)return mr(F,Ve),ot}else Ve.uniforms=Te.getUniforms(F),F.onBeforeCompile(Ve,y),ot=Te.acquireProgram(Ve,He),et.set(He,ot),ue.uniforms=Ve.uniforms;const Ge=ue.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Ge.clippingPlanes=be.uniform),mr(F,Ve),ue.needsLights=wa(F),ue.lightsStateVersion=Pe,ue.needsLights&&(Ge.ambientLightColor.value=ee.state.ambient,Ge.lightProbe.value=ee.state.probe,Ge.directionalLights.value=ee.state.directional,Ge.directionalLightShadows.value=ee.state.directionalShadow,Ge.spotLights.value=ee.state.spot,Ge.spotLightShadows.value=ee.state.spotShadow,Ge.rectAreaLights.value=ee.state.rectArea,Ge.ltc_1.value=ee.state.rectAreaLTC1,Ge.ltc_2.value=ee.state.rectAreaLTC2,Ge.pointLights.value=ee.state.point,Ge.pointLightShadows.value=ee.state.pointShadow,Ge.hemisphereLights.value=ee.state.hemi,Ge.directionalShadowMap.value=ee.state.directionalShadowMap,Ge.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ge.spotShadowMap.value=ee.state.spotShadowMap,Ge.spotLightMatrix.value=ee.state.spotLightMatrix,Ge.spotLightMap.value=ee.state.spotLightMap,Ge.pointShadowMap.value=ee.state.pointShadowMap,Ge.pointShadowMatrix.value=ee.state.pointShadowMatrix),ue.currentProgram=ot,ue.uniformsList=null,ot}function pr(F){if(F.uniformsList===null){const ie=F.currentProgram.getUniforms();F.uniformsList=sa.seqWithValue(ie.seq,F.uniforms)}return F.uniformsList}function mr(F,ie){const le=oe.get(F);le.outputColorSpace=ie.outputColorSpace,le.batching=ie.batching,le.batchingColor=ie.batchingColor,le.instancing=ie.instancing,le.instancingColor=ie.instancingColor,le.instancingMorph=ie.instancingMorph,le.skinning=ie.skinning,le.morphTargets=ie.morphTargets,le.morphNormals=ie.morphNormals,le.morphColors=ie.morphColors,le.morphTargetsCount=ie.morphTargetsCount,le.numClippingPlanes=ie.numClippingPlanes,le.numIntersection=ie.numClipIntersection,le.vertexAlphas=ie.vertexAlphas,le.vertexTangents=ie.vertexTangents,le.toneMapping=ie.toneMapping}function Sa(F,ie,le,ue,ee){ie.isScene!==!0&&(ie=Qe),P.resetTextureUnits();const Se=ie.fog,Pe=ue.isMeshStandardMaterial?ie.environment:null,Ve=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:nn,He=(ue.isMeshStandardMaterial?G:M).get(ue.envMap||Pe),et=ue.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,ot=!!le.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Ge=!!le.morphAttributes.position,mt=!!le.morphAttributes.normal,Et=!!le.morphAttributes.color;let At=yi;ue.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(At=y.toneMapping);const Ut=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,_t=Ut!==void 0?Ut.length:0,We=oe.get(ue),En=f.state.lights;if(Y===!0&&(ce===!0||F!==w)){const Zt=F===w&&ue.id===E;be.setState(ue,F,Zt)}let gt=!1;ue.version===We.__version?(We.needsLights&&We.lightsStateVersion!==En.state.version||We.outputColorSpace!==Ve||ee.isBatchedMesh&&We.batching===!1||!ee.isBatchedMesh&&We.batching===!0||ee.isBatchedMesh&&We.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&We.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&We.instancing===!1||!ee.isInstancedMesh&&We.instancing===!0||ee.isSkinnedMesh&&We.skinning===!1||!ee.isSkinnedMesh&&We.skinning===!0||ee.isInstancedMesh&&We.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&We.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&We.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&We.instancingMorph===!1&&ee.morphTexture!==null||We.envMap!==He||ue.fog===!0&&We.fog!==Se||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==be.numPlanes||We.numIntersection!==be.numIntersection)||We.vertexAlphas!==et||We.vertexTangents!==ot||We.morphTargets!==Ge||We.morphNormals!==mt||We.morphColors!==Et||We.toneMapping!==At||We.morphTargetsCount!==_t)&&(gt=!0):(gt=!0,We.__version=ue.version);let ln=We.currentProgram;gt===!0&&(ln=qi(ue,ie,ee));let oi=!1,Kt=!1,ci=!1;const st=ln.getUniforms(),rn=We.uniforms;if(O.useProgram(ln.program)&&(oi=!0,Kt=!0,ci=!0),ue.id!==E&&(E=ue.id,Kt=!0),oi||w!==F){O.buffers.depth.getReversed()?(de.copy(F.projectionMatrix),Ld(de),Pd(de),st.setValue(v,"projectionMatrix",de)):st.setValue(v,"projectionMatrix",F.projectionMatrix),st.setValue(v,"viewMatrix",F.matrixWorldInverse);const wn=st.map.cameraPosition;wn!==void 0&&wn.setValue(v,we.setFromMatrixPosition(F.matrixWorld)),V.logarithmicDepthBuffer&&st.setValue(v,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&st.setValue(v,"isOrthographic",F.isOrthographicCamera===!0),w!==F&&(w=F,Kt=!0,ci=!0)}if(ee.isSkinnedMesh){st.setOptional(v,ee,"bindMatrix"),st.setOptional(v,ee,"bindMatrixInverse");const Zt=ee.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),st.setValue(v,"boneTexture",Zt.boneTexture,P))}ee.isBatchedMesh&&(st.setOptional(v,ee,"batchingTexture"),st.setValue(v,"batchingTexture",ee._matricesTexture,P),st.setOptional(v,ee,"batchingIdTexture"),st.setValue(v,"batchingIdTexture",ee._indirectTexture,P),st.setOptional(v,ee,"batchingColorTexture"),ee._colorsTexture!==null&&st.setValue(v,"batchingColorTexture",ee._colorsTexture,P));const Mi=le.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&Ze.update(ee,le,ln),(Kt||We.receiveShadow!==ee.receiveShadow)&&(We.receiveShadow=ee.receiveShadow,st.setValue(v,"receiveShadow",ee.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(rn.envMap.value=He,rn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&ie.environment!==null&&(rn.envMapIntensity.value=ie.environmentIntensity),Kt&&(st.setValue(v,"toneMappingExposure",y.toneMappingExposure),We.needsLights&&Ea(rn,ci),Se&&ue.fog===!0&&ye.refreshFogUniforms(rn,Se),ye.refreshMaterialUniforms(rn,ue,J,Z,f.state.transmissionRenderTarget[F.id]),sa.upload(v,pr(We),rn,P)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(sa.upload(v,pr(We),rn,P),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&st.setValue(v,"center",ee.center),st.setValue(v,"modelViewMatrix",ee.modelViewMatrix),st.setValue(v,"normalMatrix",ee.normalMatrix),st.setValue(v,"modelMatrix",ee.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const Zt=ue.uniformsGroups;for(let wn=0,mn=Zt.length;wn<mn;wn++){const Si=Zt[wn];te.update(Si,ln),te.bind(Si,ln)}}return ln}function Ea(F,ie){F.ambientLightColor.needsUpdate=ie,F.lightProbe.needsUpdate=ie,F.directionalLights.needsUpdate=ie,F.directionalLightShadows.needsUpdate=ie,F.pointLights.needsUpdate=ie,F.pointLightShadows.needsUpdate=ie,F.spotLights.needsUpdate=ie,F.spotLightShadows.needsUpdate=ie,F.rectAreaLights.needsUpdate=ie,F.hemisphereLights.needsUpdate=ie}function wa(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(F,ie,le){oe.get(F.texture).__webglTexture=ie,oe.get(F.depthTexture).__webglTexture=le;const ue=oe.get(F);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=le===void 0,ue.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(F,ie){const le=oe.get(F);le.__webglFramebuffer=ie,le.__useDefaultFramebuffer=ie===void 0},this.setRenderTarget=function(F,ie=0,le=0){D=F,I=ie,L=le;let ue=!0,ee=null,Se=!1,Pe=!1;if(F){const He=oe.get(F);if(He.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(v.FRAMEBUFFER,null),ue=!1;else if(He.__webglFramebuffer===void 0)P.setupRenderTarget(F);else if(He.__hasExternalTextures)P.rebindTextures(F,oe.get(F.texture).__webglTexture,oe.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){const Ge=F.depthTexture;if(He.__boundDepthTexture!==Ge){if(Ge!==null&&oe.has(Ge)&&(F.width!==Ge.image.width||F.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(F)}}const et=F.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Pe=!0);const ot=oe.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(ot[ie])?ee=ot[ie][le]:ee=ot[ie],Se=!0):F.samples>0&&P.useMultisampledRTT(F)===!1?ee=oe.get(F).__webglMultisampledFramebuffer:Array.isArray(ot)?ee=ot[le]:ee=ot,B.copy(F.viewport),R.copy(F.scissor),z=F.scissorTest}else B.copy(X).multiplyScalar(J).floor(),R.copy(K).multiplyScalar(J).floor(),z=_e;if(O.bindFramebuffer(v.FRAMEBUFFER,ee)&&ue&&O.drawBuffers(F,ee),O.viewport(B),O.scissor(R),O.setScissorTest(z),Se){const He=oe.get(F.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+ie,He.__webglTexture,le)}else if(Pe){const He=oe.get(F.texture),et=ie||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,He.__webglTexture,le||0,et)}E=-1},this.readRenderTargetPixels=function(F,ie,le,ue,ee,Se,Pe){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=oe.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ve=Ve[Pe]),Ve){O.bindFramebuffer(v.FRAMEBUFFER,Ve);try{const He=F.texture,et=He.format,ot=He.type;if(!V.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ie>=0&&ie<=F.width-ue&&le>=0&&le<=F.height-ee&&v.readPixels(ie,le,ue,ee,it.convert(et),it.convert(ot),Se)}finally{const He=D!==null?oe.get(D).__webglFramebuffer:null;O.bindFramebuffer(v.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(F,ie,le,ue,ee,Se,Pe){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=oe.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ve=Ve[Pe]),Ve){const He=F.texture,et=He.format,ot=He.type;if(!V.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ie>=0&&ie<=F.width-ue&&le>=0&&le<=F.height-ee){O.bindFramebuffer(v.FRAMEBUFFER,Ve);const Ge=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,Ge),v.bufferData(v.PIXEL_PACK_BUFFER,Se.byteLength,v.STREAM_READ),v.readPixels(ie,le,ue,ee,it.convert(et),it.convert(ot),0);const mt=D!==null?oe.get(D).__webglFramebuffer:null;O.bindFramebuffer(v.FRAMEBUFFER,mt);const Et=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await Id(v,Et,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,Ge),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,Se),v.deleteBuffer(Ge),v.deleteSync(Et),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(F,ie=null,le=0){F.isTexture!==!0&&(Zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ie=arguments[0]||null,F=arguments[1]);const ue=Math.pow(2,-le),ee=Math.floor(F.image.width*ue),Se=Math.floor(F.image.height*ue),Pe=ie!==null?ie.x:0,Ve=ie!==null?ie.y:0;P.setTexture2D(F,0),v.copyTexSubImage2D(v.TEXTURE_2D,le,0,0,Pe,Ve,ee,Se),O.unbindTexture()},this.copyTextureToTexture=function(F,ie,le=null,ue=null,ee=0){F.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,F=arguments[1],ie=arguments[2],ee=arguments[3]||0,le=null);let Se,Pe,Ve,He,et,ot,Ge,mt,Et;const At=F.isCompressedTexture?F.mipmaps[ee]:F.image;le!==null?(Se=le.max.x-le.min.x,Pe=le.max.y-le.min.y,Ve=le.isBox3?le.max.z-le.min.z:1,He=le.min.x,et=le.min.y,ot=le.isBox3?le.min.z:0):(Se=At.width,Pe=At.height,Ve=At.depth||1,He=0,et=0,ot=0),ue!==null?(Ge=ue.x,mt=ue.y,Et=ue.z):(Ge=0,mt=0,Et=0);const Ut=it.convert(ie.format),_t=it.convert(ie.type);let We;ie.isData3DTexture?(P.setTexture3D(ie,0),We=v.TEXTURE_3D):ie.isDataArrayTexture||ie.isCompressedArrayTexture?(P.setTexture2DArray(ie,0),We=v.TEXTURE_2D_ARRAY):(P.setTexture2D(ie,0),We=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,ie.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,ie.unpackAlignment);const En=v.getParameter(v.UNPACK_ROW_LENGTH),gt=v.getParameter(v.UNPACK_IMAGE_HEIGHT),ln=v.getParameter(v.UNPACK_SKIP_PIXELS),oi=v.getParameter(v.UNPACK_SKIP_ROWS),Kt=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,At.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,At.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,He),v.pixelStorei(v.UNPACK_SKIP_ROWS,et),v.pixelStorei(v.UNPACK_SKIP_IMAGES,ot);const ci=F.isDataArrayTexture||F.isData3DTexture,st=ie.isDataArrayTexture||ie.isData3DTexture;if(F.isRenderTargetTexture||F.isDepthTexture){const rn=oe.get(F),Mi=oe.get(ie),Zt=oe.get(rn.__renderTarget),wn=oe.get(Mi.__renderTarget);O.bindFramebuffer(v.READ_FRAMEBUFFER,Zt.__webglFramebuffer),O.bindFramebuffer(v.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let mn=0;mn<Ve;mn++)ci&&v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,oe.get(F).__webglTexture,ee,ot+mn),F.isDepthTexture?(st&&v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,oe.get(ie).__webglTexture,ee,Et+mn),v.blitFramebuffer(He,et,Se,Pe,Ge,mt,Se,Pe,v.DEPTH_BUFFER_BIT,v.NEAREST)):st?v.copyTexSubImage3D(We,ee,Ge,mt,Et+mn,He,et,Se,Pe):v.copyTexSubImage2D(We,ee,Ge,mt,Et+mn,He,et,Se,Pe);O.bindFramebuffer(v.READ_FRAMEBUFFER,null),O.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else st?F.isDataTexture||F.isData3DTexture?v.texSubImage3D(We,ee,Ge,mt,Et,Se,Pe,Ve,Ut,_t,At.data):ie.isCompressedArrayTexture?v.compressedTexSubImage3D(We,ee,Ge,mt,Et,Se,Pe,Ve,Ut,At.data):v.texSubImage3D(We,ee,Ge,mt,Et,Se,Pe,Ve,Ut,_t,At):F.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,ee,Ge,mt,Se,Pe,Ut,_t,At.data):F.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,ee,Ge,mt,At.width,At.height,Ut,At.data):v.texSubImage2D(v.TEXTURE_2D,ee,Ge,mt,Se,Pe,Ut,_t,At);v.pixelStorei(v.UNPACK_ROW_LENGTH,En),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,gt),v.pixelStorei(v.UNPACK_SKIP_PIXELS,ln),v.pixelStorei(v.UNPACK_SKIP_ROWS,oi),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Kt),ee===0&&ie.generateMipmaps&&v.generateMipmap(We),O.unbindTexture()},this.copyTextureToTexture3D=function(F,ie,le=null,ue=null,ee=0){return F.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,ue=arguments[1]||null,F=arguments[2],ie=arguments[3],ee=arguments[4]||0),Zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(F,ie,le,ue,ee)},this.initRenderTarget=function(F){oe.get(F).__webglFramebuffer===void 0&&P.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?P.setTextureCube(F,0):F.isData3DTexture?P.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?P.setTexture2DArray(F,0):P.setTexture2D(F,0),O.unbindTexture()},this.resetState=function(){I=0,L=0,D=null,O.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}class Yu extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class H_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zo,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new q;class vc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Cl=new q,Il=new bt,Ll=new bt,G_=new q,Pl=new Ye,kr=new q,eo=new Hn,Nl=new Ye,to=new cr;class Ku extends It{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dc,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,kr),this.boundingBox.expandByPoint(kr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,kr),this.boundingSphere.expandByPoint(kr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),eo.copy(this.boundingSphere),eo.applyMatrix4(i),e.ray.intersectsSphere(eo)!==!1&&(Nl.copy(i).invert(),to.copy(e.ray).applyMatrix4(Nl),!(this.boundingBox!==null&&to.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,to)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new bt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Dc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$h?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Il.fromBufferAttribute(i.attributes.skinIndex,e),Ll.fromBufferAttribute(i.attributes.skinWeight,e),Cl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Ll.getComponent(s);if(a!==0){const o=Il.getComponent(s);Pl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(G_.copy(Cl).applyMatrix4(Pl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class xc extends Pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class yc extends Ot{constructor(e=null,t=1,n=1,i,s,a,o,c,l=en,u=en,h,p){super(null,a,o,c,l,u,i,s,h,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dl=new Ye,W_=new Ye;class va{constructor(e=[],t=[]){this.uuid=Un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:W_;Dl.multiplyMatrices(o,t[s]),Dl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new va(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new yc(t,e,e,Mn,Nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new xc),this.bones.push(a),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Jo extends Ht{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ls=new Ye,Ul=new Ye,Br=[],Fl=new pn,j_=new Ye,Vs=new It,Hs=new Hn;class X_ extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,j_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),Fl.copy(e.boundingBox).applyMatrix4(ls),this.boundingBox.union(Fl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),Hs.copy(e.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(Hs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(n),e.ray.intersectsSphere(Hs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ls),Ul.multiplyMatrices(n,ls),Vs.matrixWorld=Ul,Vs.raycast(e,Br);for(let a=0,o=Br.length;a<o;a++){const c=Br[a];c.instanceId=s,c.object=this,t.push(c)}Br.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new yc(new Float32Array(i*this.count),i,this.count,lc,Nn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Oi extends on{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const la=new q,ua=new q,Ol=new Ye,Gs=new cr,zr=new Hn,no=new q,kl=new q;class xa extends Pt{constructor(e=new Wt,t=new Oi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)la.fromBufferAttribute(t,i-1),ua.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=la.distanceTo(ua);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(i),zr.radius+=s,e.ray.intersectsSphere(zr)===!1)return;Ol.copy(i).invert(),Gs.copy(e.ray).applyMatrix4(Ol);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=d,m=_-1;g<m;g+=l){const f=u.getX(g),x=u.getX(g+1),S=Vr(this,e,Gs,c,f,x);S&&t.push(S)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(d),f=Vr(this,e,Gs,c,g,m);f&&t.push(f)}}else{const d=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let g=d,m=_-1;g<m;g+=l){const f=Vr(this,e,Gs,c,g,g+1);f&&t.push(f)}if(this.isLineLoop){const g=Vr(this,e,Gs,c,_-1,d);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Vr(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(la.fromBufferAttribute(a,i),ua.fromBufferAttribute(a,s),t.distanceSqToSegment(la,ua,no,kl)>n)return;no.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(no);if(!(c<e.near||c>e.far))return{distance:c,point:kl.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Bl=new q,zl=new q;class ha extends xa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Bl.fromBufferAttribute(t,i),zl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Bl.distanceTo(zl);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class q_ extends xa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ps extends on{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vl=new Ye,Qo=new cr,Hr=new Hn,Gr=new q;class ra extends Pt{constructor(e=new Wt,t=new ps){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(i),Hr.radius+=s,e.ray.intersectsSphere(Hr)===!1)return;Vl.copy(i).invert(),Qo.copy(e.ray).applyMatrix4(Vl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const p=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let _=p,g=d;_<g;_++){const m=l.getX(_);Gr.fromBufferAttribute(h,m),Hl(Gr,m,c,i,e,t,this)}}else{const p=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let _=p,g=d;_<g;_++)Gr.fromBufferAttribute(h,_),Hl(Gr,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Hl(r,e,t,n,i,s,a){const o=Qo.distanceSqToPoint(r);if(o<t){const c=new q;Qo.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Zu extends Ot{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bc extends Wt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],p=[],d=[];let _=0;const g=[],m=n/2;let f=0;x(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new St(h,3)),this.setAttribute("normal",new St(p,3)),this.setAttribute("uv",new St(d,2));function x(){const y=new q,C=new q;let I=0;const L=(t-e)/n;for(let D=0;D<=s;D++){const E=[],w=D/s,B=w*(t-e)+e;for(let R=0;R<=i;R++){const z=R/i,b=z*c+o,W=Math.sin(b),H=Math.cos(b);C.x=B*W,C.y=-w*n+m,C.z=B*H,h.push(C.x,C.y,C.z),y.set(W,L,H).normalize(),p.push(y.x,y.y,y.z),d.push(z,1-w),E.push(_++)}g.push(E)}for(let D=0;D<i;D++)for(let E=0;E<s;E++){const w=g[E][D],B=g[E+1][D],R=g[E+1][D+1],z=g[E][D+1];(e>0||E!==0)&&(u.push(w,B,z),I+=3),(t>0||E!==s-1)&&(u.push(B,R,z),I+=3)}l.addGroup(f,I,0),f+=I}function S(y){const C=_,I=new rt,L=new q;let D=0;const E=y===!0?e:t,w=y===!0?1:-1;for(let R=1;R<=i;R++)h.push(0,m*w,0),p.push(0,w,0),d.push(.5,.5),_++;const B=_;for(let R=0;R<=i;R++){const b=R/i*c+o,W=Math.cos(b),H=Math.sin(b);L.x=E*H,L.y=m*w,L.z=E*W,h.push(L.x,L.y,L.z),p.push(0,w,0),I.x=W*.5+.5,I.y=H*.5*w+.5,d.push(I.x,I.y),_++}for(let R=0;R<i;R++){const z=C+R,b=B+R;y===!0?u.push(b,b+1,z):u.push(b+1,b,z),D+=3}l.addGroup(f,D,y===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mc extends Wt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new q,p=new q,d=[],_=[],g=[],m=[];for(let f=0;f<=n;f++){const x=[],S=f/n;let y=0;f===0&&a===0?y=.5/t:f===n&&c===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const I=C/t;h.x=-e*Math.cos(i+I*s)*Math.sin(a+S*o),h.y=e*Math.cos(a+S*o),h.z=e*Math.sin(i+I*s)*Math.sin(a+S*o),_.push(h.x,h.y,h.z),p.copy(h).normalize(),g.push(p.x,p.y,p.z),m.push(I+y,1-S),x.push(l++)}u.push(x)}for(let f=0;f<n;f++)for(let x=0;x<t;x++){const S=u[f][x+1],y=u[f][x],C=u[f+1][x],I=u[f+1][x+1];(f!==0||a>0)&&d.push(S,y,I),(f!==n-1||c<Math.PI)&&d.push(y,C,I)}this.setIndex(d),this.setAttribute("position",new St(_,3)),this.setAttribute("normal",new St(g,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ji extends on{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pa,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gn extends ji{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class vs extends on{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Ke(16777215),this.specular=new Ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pa,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Y_ extends on{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pa,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Wr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function K_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Z_(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Gl(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function $u(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class lr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class $_ extends lr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hs,endingEnd:hs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ds:s=e,o=2*t-n;break;case oa:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ds:a=e,c=2*n-t;break;case oa:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,p=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,f=-p*m+2*p*g-p*_,x=(1+p)*m+(-1.5-2*p)*g+(-.5+p)*_+1,S=(-1-d)*m+(1.5+d)*g+.5*_,y=d*m-d*g;for(let C=0;C!==o;++C)s[C]=f*a[u+C]+x*a[l+C]+S*a[c+C]+y*a[h+C];return s}}class Ju extends lr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),h=1-u;for(let p=0;p!==o;++p)s[p]=a[l+p]*h+a[c+p]*u;return s}}class J_ extends lr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Wn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wr(t,this.TimeBufferType),this.values=Wr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wr(e.times,Array),values:Wr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new J_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ju(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case nr:t=this.InterpolantFactoryMethodDiscrete;break;case ir:t=this.InterpolantFactoryMethodLinear;break;case Ta:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return ir;case this.InterpolantFactoryMethodSmooth:return Ta}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&K_(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ta,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{const h=o*n,p=h-n,d=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[p+_]||g!==t[d+_]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,p=a*n;for(let d=0;d!==n;++d)t[p+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=ir;class Ls extends Wn{constructor(e,t,n){super(e,t,n)}}Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=nr;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Qu extends Wn{}Qu.prototype.ValueTypeName="color";class As extends Wn{}As.prototype.ValueTypeName="number";class Q_ extends lr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let u=l+o;l!==u;l+=4)tn.slerpFlat(s,0,a,l-o,a,l,c);return s}}class Vi extends Wn{InterpolantFactoryMethodLinear(e){return new Q_(this.times,this.values,this.getValueSize(),e)}}Vi.prototype.ValueTypeName="quaternion";Vi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ps extends Wn{constructor(e,t,n){super(e,t,n)}}Ps.prototype.ValueTypeName="string";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=nr;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;class bi extends Wn{}bi.prototype.ValueTypeName="vector";class rr{constructor(e="",t=-1,n=[],i=fc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Un(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(t0(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Wn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const u=Z_(c);c=Gl(c,1,u),l=Gl(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new As(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let p=i[h];p||(i[h]=p=[]),p.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,p,d,_,g){if(d.length!==0){const m=[],f=[];$u(d,m,f,_),m.length!==0&&g.push(new h(p,m,f))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const p=l[h].keys;if(!(!p||p.length===0))if(p[0].morphTargets){const d={};let _;for(_=0;_<p.length;_++)if(p[_].morphTargets)for(let g=0;g<p[_].morphTargets.length;g++)d[p[_].morphTargets[g]]=-1;for(const g in d){const m=[],f=[];for(let x=0;x!==p[_].morphTargets.length;++x){const S=p[_];m.push(S.time),f.push(S.morphTarget===g?1:0)}i.push(new As(".morphTargetInfluence["+g+"]",m,f))}c=d.length*a}else{const d=".bones["+t[h].name+"]";n(bi,d+".position",p,"pos",i),n(Vi,d+".quaternion",p,"rot",i),n(bi,d+".scale",p,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function e0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return As;case"vector":case"vector2":case"vector3":case"vector4":return bi;case"color":return Qu;case"quaternion":return Vi;case"bool":case"boolean":return Ls;case"string":return Ps}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function t0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=e0(r.type);if(r.times===void 0){const t=[],n=[];$u(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const vi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class eh{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=l.length;h<p;h+=2){const d=l[h],_=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const th=new eh;class Fn{constructor(e){this.manager=e!==void 0?e:th,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Fn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Jn={};class n0 extends Error{constructor(e,t){super(e),this.response=t}}class Ns extends Fn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=vi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Jn[e]!==void 0){Jn[e].push({onLoad:t,onProgress:n,onError:i});return}Jn[e]=[],Jn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Jn[e],h=l.body.getReader(),p=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=p?parseInt(p):0,_=d!==0;let g=0;const m=new ReadableStream({start(f){x();function x(){h.read().then(({done:S,value:y})=>{if(S)f.close();else{g+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let I=0,L=u.length;I<L;I++){const D=u[I];D.onProgress&&D.onProgress(C)}f.enqueue(y),x()}},S=>{f.error(S)})}}});return new Response(m)}else throw new n0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),p=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(p);return l.arrayBuffer().then(_=>d.decode(_))}}}).then(l=>{vi.add(e,l);const u=Jn[e];delete Jn[e];for(let h=0,p=u.length;h<p;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=Jn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Jn[e];for(let h=0,p=u.length;h<p;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class i0 extends Fn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=vi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=sr("img");function c(){u(),vi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class s0 extends Fn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new yc,o=new Ns(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(c){let l;try{l=s.parse(c)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:bn,a.wrapT=l.wrapT!==void 0?l.wrapT:bn,a.magFilter=l.magFilter!==void 0?l.magFilter:Yt,a.minFilter=l.minFilter!==void 0?l.minFilter:Yt,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=Pn),l.mipmapCount===1&&(a.minFilter=Yt),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,i),a}}class Sc extends Fn{constructor(e){super(e)}load(e,t,n,i){const s=new Ot,a=new i0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ur extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class r0 extends ur{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const io=new Ye,Wl=new q,jl=new q;class Ec{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gc,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wl),jl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jl),t.updateMatrixWorld(),io.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(io),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(io)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class a0 extends Ec{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ws*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class nh extends ur{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new a0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Xl=new Ye,Ws=new q,so=new q;class o0 extends Ec{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ws.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ws),so.copy(n.position),so.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(so),n.updateMatrixWorld(),i.makeTranslation(-Ws.x,-Ws.y,-Ws.z),Xl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xl)}}class ih extends ur{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new o0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class c0 extends Ec{constructor(){super(new ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wc extends ur{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new c0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sh extends ur{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ki{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class l0 extends Fn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=vi.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return vi.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),vi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});vi.add(e,c),s.manager.itemStart(e)}}class u0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ql(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ql();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ql(){return performance.now()}class h0{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){tn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;tn.multiplyQuaternionsFlat(e,a,e,t,e,n),tn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Tc="\\[\\]\\.:\\/",d0=new RegExp("["+Tc+"]","g"),Ac="[^"+Tc+"]",f0="[^"+Tc.replace("\\.","")+"]",p0=/((?:WC+[\/:])*)/.source.replace("WC",Ac),m0=/(WCOD+)?/.source.replace("WCOD",f0),g0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ac),_0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ac),v0=new RegExp("^"+p0+m0+g0+_0+"$"),x0=["material","materials","bones","map"];class y0{constructor(e,t,n){const i=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Mt{constructor(e,t,n){this.path=t,this.parsedPath=n||Mt.parseTrackName(t),this.node=Mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Mt.Composite(e,t,n):new Mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(d0,"")}static parseTrackName(e){const t=v0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);x0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Mt.Composite=y0;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class b0{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),c={endingStart:hs,endingEnd:hs};for(let l=0;l!==a;++l){const u=s[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Qh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case td:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case fc:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===ed;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===Jh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ds,i.endingEnd=ds):(e?i.endingStart=this.zeroSlopeAtStart?ds:hs:i.endingStart=oa,t?i.endingEnd=this.zeroSlopeAtEnd?ds:hs:i.endingEnd=oa)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}}const M0=new Float32Array(1);class S0 extends Wi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==s;++h){const p=i[h],d=p.name;let _=u[d];if(_!==void 0)++_.referenceCount,a[h]=_;else{if(_=a[h],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,c,d));continue}const g=t&&t._propertyBindings[h].binding.parsedPath;_=new h0(Mt.create(n,d,g),p.ValueTypeName,p.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,c,d),a[h]=_}o[h].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,p=(e._localRoot||this._root).uuid;delete h[p],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Ju(new Float32Array(2),new Float32Array(2),1,M0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?rr.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=fc),c!==void 0){const h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const u=new b0(this,a,t,n);return this._bindAction(u,l),this._addInactiveAction(u,o,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?rr.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Yl=new Ye;class E0{constructor(e,t,n=0,i=1/0){this.ray=new cr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yl),this}intersectObject(e,t=!0,n=[]){return ec(e,this,n,t),n.sort(Kl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ec(e[i],this,n,t);return n.sort(Kl),n}}function Kl(r,e){return r.distance-e.distance}function ec(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)ec(s[a],e,t,!0)}}const Zl=new rt;class w0{constructor(e=new rt(1/0,1/0),t=new rt(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zl.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zl).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);let js=null;function T0(r){window.addEventListener("resize",()=>{const e=window.innerWidth,t=window.innerHeight;rh().setSize(e,t),r.aspect=e/t,r.updateProjectionMatrix()})}function rh(){return js||(js=new V_,js.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(js.domElement)),js}class A0{constructor(e,t){Ee(this,"targetObject");Ee(this,"currentPosition");Ee(this,"currentLookat");Ee(this,"camera");this.targetObject=t,this.camera=e,this.currentPosition=new q,this.currentLookat=new q}getIdealOffset(){const e=new q(-1.6,1.7,-2.5);return e.applyQuaternion(this.targetObject.quaternion),e.add(this.targetObject.position),e}getIdealLookat(){const e=new q(0,1,30);return e.applyQuaternion(this.targetObject.quaternion),e.add(this.targetObject.position),e}update(e){const t=this.getIdealOffset(),n=this.getIdealLookat();this.currentPosition=t,this.currentLookat=n,this.camera.position.copy(this.currentPosition),this.camera.lookAt(this.currentLookat)}}class R0{constructor(e,t){Ee(this,"camera");Ee(this,"thirdPersonCamera");this.camera=t,T0(this.camera),this.thirdPersonCamera=new A0(this.camera,e)}update(e){this.thirdPersonCamera.update(e)}}const C0="modulepreload",I0=function(r){return"/"+r},$l={},L0=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(t.map(c=>{if(c=I0(c),c in $l)return;$l[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":C0,l||(h.as="script"),h.crossOrigin="",h.href=c,o&&h.setAttribute("nonce",o),document.head.appendChild(h),l)return new Promise((p,d)=>{h.addEventListener("load",p),h.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};class Hi{static async init(){this.instance||(this.instance=await(await L0(async()=>{const{default:e}=await import("./ammo-leWaGrwI.js").then(t=>t.a);return{default:e}},[])).default())}static get(){if(!this.instance)throw new Error("Ammo has not been initialized. Call AmmoSingleton.init() first.");return this.instance}}Ee(Hi,"instance",null);function P0(r){const e=Hi.get(),t=new pn().setFromObject(r),n=new q;t.getSize(n);const i=new e.btVector3(n.x/2,n.y/2,n.z/2);return new e.btBoxShape(i)}function N0(r,e){const t=Hi.get(),n=new t.btTransform;n.setIdentity(),n.setOrigin(new t.btVector3(r.position.x,r.position.y,r.position.z));const i=new t.btDefaultMotionState(n),s=P0(r),a=new t.btVector3(0,0,0);e>0&&s.calculateLocalInertia(e,a);const o=new t.btRigidBodyConstructionInfo(e,i,s,a);return new t.btRigidBody(o)}class D0{constructor(){Ee(this,"objects",new Map)}addObject(e,t){const n=N0(e,t);this.objects.set(e,{body:n,mass:t})}getPhysicsData(){return Array.from(this.objects.entries())}update(){Array.from(this.objects.entries()).filter(([e,t])=>t.mass!==0).forEach(([e,t])=>this.applyPhysics(t,e))}getWorldTransform(e){const t=Hi.get(),n=new t.btTransform;return e.getMotionState().getWorldTransform(n),n}applyPhysics(e,t){const n=this.getWorldTransform(e.body),i=n.getOrigin();t.position.set(i.x(),i.y(),i.z());const s=n.getRotation();t.quaternion.set(s.x(),s.y(),s.z(),s.w())}applyImpulse(e,t){const n=Hi.get(),i=new n.btVector3(e.x,e.y,e.z),s=t?new n.btVector3(t.x,t.y,t.z):new n.btVector3(0,0,0);Array.from(this.objects.entries()).filter(([a,o])=>o.mass!==0).forEach(([a,o])=>o.body.applyImpulse(i,s))}}function U0(r){let e=r.getRoom(),t=new D0;return t.addObject(e.cube.object,1),t.addObject(e.floor.object,0),t.applyImpulse(new q(4.5,0,0)),t}class F0{constructor(e,t){Ee(this,"entities");Ee(this,"world");Ee(this,"physicsCtrl");this.entities=e,this.world=t,this.physicsCtrl=U0(this.entities),this.addRigidBodiesToWorld()}addRigidBodiesToWorld(){this.physicsCtrl.getPhysicsData().forEach(([e,t])=>{this.world.addRigidBody(t.body,e)})}step(e){let t=e/10;this.world.step(t),this.physicsCtrl.update()}}var Rs=(r=>(r[r.OpticalTable=0]="OpticalTable",r[r.Arm=1]="Arm",r))(Rs||{}),fn=(r=>(r[r.Error=0]="Error",r[r.PhotoCamera=1]="PhotoCamera",r[r.Timelapse=2]="Timelapse",r[r.Timer=3]="Timer",r))(fn||{}),ya=(r=>(r[r.Human=0]="Human",r))(ya||{}),On=(r=>(r[r.Idle=0]="Idle",r[r.Moving=1]="Moving",r))(On||{}),Dt=(r=>(r[r.GOTO_1=0]="GOTO_1",r[r.GOTO_2=1]="GOTO_2",r[r.GOTO_3=2]="GOTO_3",r[r.GOTO_4=3]="GOTO_4",r[r.GOTO_5=4]="GOTO_5",r[r.GOTO_6=5]="GOTO_6",r[r.STOP=6]="STOP",r))(Dt||{}),ar=(r=>(r[r.PLAYER_MOVE=0]="PLAYER_MOVE",r[r.PLAYER_ROTATE=1]="PLAYER_ROTATE",r))(ar||{}),Fi=(r=>(r[r.ERROR=0]="ERROR",r[r.CAPTURING=1]="CAPTURING",r[r.STANDBY=2]="STANDBY",r[r.LOADING=3]="LOADING",r))(Fi||{}),ni=(r=>(r[r.DEFAULT=0]="DEFAULT",r[r.SELECTED=1]="SELECTED",r[r.HOVER=2]="HOVER",r[r.DISABLED=3]="DISABLED",r))(ni||{}),ah=(r=>(r[r.LEFT=0]="LEFT",r[r.MIDDLE=1]="MIDDLE",r[r.RIGHT=2]="RIGHT",r))(ah||{});class Jl{constructor(e){Ee(this,"action");this.action=e}execute(e,t){switch(this.action.type){case ar.PLAYER_MOVE:t.handleMove(this.action.payload);break;case ar.PLAYER_ROTATE:t.handleRotation(this.action.payload)}}}var tc;(r=>{function e(i){const s={forward:i.held.has("ArrowUp")||i.held.has("w"),backward:i.held.has("ArrowDown")||i.held.has("s"),left:i.held.has("ArrowLeft")||i.held.has("a"),right:i.held.has("ArrowRight")||i.held.has("d")},a={type:ar.PLAYER_MOVE,payload:s};return new Jl(a)}r.getMoveAction=e;function t(i){const s={left:i.held.has("q"),right:i.held.has("e")},a={type:ar.PLAYER_ROTATE,payload:s};return new Jl(a)}r.getRotateAction=t;function n(i){return[e(i),t(i)]}r.getPlayerActions=n})(tc||(tc={}));class O0{constructor(e,t,n){Ee(this,"actors");Ee(this,"playerController");Ee(this,"tableController");this.actors=e,this.playerController=t,this.tableController=n}processActions(e,t){tc.getPlayerActions(e).forEach(i=>{i.execute(this.actors.player,this.playerController)}),t.forEach(i=>{this.tableController.handleArmCommand(i)})}}class k0{constructor(e,t){Ee(this,"scene");Ee(this,"camera");this.scene=e,this.camera=t}render(){rh().render(this.scene,this.camera)}}function B0(){const r=new Gt(75,window.innerWidth/window.innerHeight,.1,1e3);return r.position.set(0,2,5),r}class z0{constructor(){Ee(this,"keyboardInput",{pressed:new Set,released:new Set,held:new Set});window.addEventListener("keydown",this.onKeyDown.bind(this)),window.addEventListener("keyup",this.onKeyUp.bind(this))}onKeyDown(e){this.keyboardInput.held.has(e.key)||this.keyboardInput.pressed.add(e.key),this.keyboardInput.held.add(e.key)}onKeyUp(e){this.keyboardInput.held.delete(e.key),this.keyboardInput.pressed.delete(e.key),this.keyboardInput.released.add(e.key)}getKeyboardInput(){const e={pressed:new Set(this.keyboardInput.pressed),released:new Set(this.keyboardInput.released),held:new Set(this.keyboardInput.held)};return this.clear(),e}clear(){this.keyboardInput.pressed.clear(),this.keyboardInput.released.clear()}}class V0{constructor(){Ee(this,"mouseInput",{x:0,y:0,pressed:new Set,released:new Set,held:new Set});document.addEventListener("mousemove",this.onMouseMove.bind(this)),document.addEventListener("mousedown",this.onMouseDown.bind(this)),document.addEventListener("mouseup",this.onMouseUp.bind(this))}onMouseMove(e){this.mouseInput.x=e.clientX/window.innerWidth*2-1,this.mouseInput.y=-(e.clientY/window.innerHeight)*2+1}onMouseDown(e){const t=e.button;this.mouseInput.held.has(t)||this.mouseInput.pressed.add(t),this.mouseInput.held.add(t)}onMouseUp(e){const t=e.button;this.mouseInput.held.delete(t),this.mouseInput.pressed.delete(t),this.mouseInput.released.add(t)}clear(){this.mouseInput.pressed.clear(),this.mouseInput.released.clear()}getMouseInput(){const e={x:this.mouseInput.x,y:this.mouseInput.y,pressed:new Set(this.mouseInput.pressed),released:new Set(this.mouseInput.released),held:new Set(this.mouseInput.held)};return this.clear(),e}}class H0{constructor(){Ee(this,"keyboardListener");Ee(this,"mouseListener");this.keyboardListener=new z0,this.mouseListener=new V0}getKeyboardInput(){return this.keyboardListener.getKeyboardInput()}getMouseInput(){return this.mouseListener.getMouseInput()}getInput(){return{keys:this.getKeyboardInput(),mouse:this.getMouseInput()}}}class G0{constructor(){Ee(this,"actionQueue",[]);this.initButtons()}initButtons(){[{id:"btn1",command:Dt.GOTO_1},{id:"btn2",command:Dt.GOTO_2},{id:"btn3",command:Dt.GOTO_3},{id:"btn4",command:Dt.GOTO_4},{id:"btn5",command:Dt.GOTO_5},{id:"btn6",command:Dt.GOTO_6}].forEach(({id:n,command:i})=>{const s=document.getElementById(n);s&&s.addEventListener("click",()=>this.queueCommand(i))});const t=document.getElementById("btn7");t&&t.addEventListener("click",()=>this.armStop())}queueCommand(e){console.log(`Command: ${e}`),this.actionQueue.push(e)}armStop(){console.log("armStop command"),this.actionQueue.push(Dt.STOP)}getAndClearQueue(){const e=[...this.actionQueue];return this.actionQueue=[],e}}class W0{constructor(){Ee(this,"dialog");Ee(this,"dialogTitle");Ee(this,"dialogMessage");Ee(this,"dialogClose");var e;this.dialog=document.getElementById("dialog"),this.dialogTitle=document.getElementById("dialog-title"),this.dialogMessage=document.getElementById("dialog-message"),this.dialogClose=document.getElementById("dialog-close"),(e=this.dialogClose)==null||e.addEventListener("click",()=>this.hideDialog())}showDialog(e,t){this.dialog&&this.dialogTitle&&this.dialogMessage&&(this.dialogTitle.textContent=e,this.dialogMessage.textContent=t,this.dialog.classList.remove("dialog-hidden"))}hideDialog(){this.dialog&&this.dialog.classList.add("dialog-hidden")}}class j0{constructor(e,t,n){Ee(this,"camera");Ee(this,"armCommandUI");Ee(this,"player");Ee(this,"entities");Ee(this,"tableController");Ee(this,"raycaster",new E0);Ee(this,"dialogController");this.camera=e,this.tableController=n,this.entities=t,this.armCommandUI=new G0,this.player=t.getActors().player,this.dialogController=new W0}update(e){this.updateSpatialUI(),this.handleMouse(e.mouse),this.updateToolTip(e.keys)}getArmCommands(){return this.armCommandUI.getAndClearQueue()}updateToolTip(e){const t=document.getElementById("ui");t&&e.pressed.has("h")&&t.classList.toggle("hidden")}toggleHUD(e){const t=document.getElementById("hud");t&&t.classList.toggle("hidden",!e)}getClosestOpticalControllerInRange(){let n=9999.9,i=null;for(const s of this.tableController.getOpticalControllers()){s.selectBox.setVisible(!1),s.selectBox.update();const a=s.getDistanceScalar(this.player);a<2&&a<n&&(i=s,n=a)}return i}updateSpatialUI(){const e=this.getClosestOpticalControllerInRange();this.toggleHUD(e!==null),e&&e.selectBox.setVisible(!0)}getVisibleMeshes(e){return e.selectBoxes.filter(t=>t.isVisible()).map(t=>t.getMesh())}getIntersectedMesh(e,t){const n=new rt(e.x,e.y);this.raycaster.setFromCamera(n,this.camera);const i=this.raycaster.intersectObjects(t);return i.length>0?i[0].object:null}updateMouseUIState(e,t){if(e.selectBoxes.forEach(n=>n.setState(ni.DEFAULT)),t){const n=e.selectBoxes.find(i=>i.getMesh()===t);n&&n.setState(ni.HOVER)}}getHoveredOpticsController(){const t=this.entities.getActors().table.selectBoxes.find(n=>n.getState()===ni.HOVER)||null;if(t){const n=this.tableController.getOpticsControllerBySelectBox(t);if(n)return n}return null}handleMouse(e){const t=this.entities.getActors().table,n=this.getVisibleMeshes(t),i=this.getIntersectedMesh(e,n);if(this.updateMouseUIState(t,i),e.pressed.has(ah.LEFT)&&i){let s=this.getHoveredOpticsController();this.dialogController.showDialog("Microscope Info",`Microscope #${s==null?void 0:s.getID()}`)}}}class X0{constructor(){Ee(this,"kinState");Ee(this,"rotationSpeed");this.kinState={velocity:new q,acceleration:new q},this.rotationSpeed=0}update(e,t){if(this.kinState){const{acceleration:i,velocity:s}=this.kinState,a=new q(0,0,1);e.getWorldDirection(a);const o=new q;o.crossVectors(new q(0,1,0),a).normalize();const c=.025;i.z!==0&&s.add(a.clone().multiplyScalar(i.z*c)),i.x!==0&&s.add(o.clone().multiplyScalar(i.x*c)),e.position.add(s.clone().multiplyScalar(t));const l=1-Math.min(1,5*t);s.multiplyScalar(l),s.lengthSq()<.01**2&&s.set(0,0,0)}const n=new tn;n.setFromAxisAngle(new q(0,1,0),this.rotationSpeed*t),e.quaternion.multiplyQuaternions(n,e.quaternion)}handleMove(e){let t=this.kinState.acceleration;const n=10;e.forward?t.z=n:e.backward?t.z=-n:t.z=0,e.left?t.x=n:e.right?t.x=-n:t.x=0}handleRotation(e){this.rotationSpeed=0;const t=2;e.left&&(this.rotationSpeed=t),e.right&&(this.rotationSpeed=-t)}getVelocity(){return this.kinState.velocity.clone()}getRelativeVelocity(e){return e.worldToLocal(this.kinState.velocity.clone().add(e.position))}}class q0{constructor(e,t){Ee(this,"animationMixer");Ee(this,"object");Ee(this,"animations");Ee(this,"walkAction");Ee(this,"physicsCtrl");this.object=e.object,this.animations=e.animations,this.animationMixer=new S0(this.object),this.walkAction=this.animationMixer.clipAction(this.animations[0]),this.walkAction.play(),this.walkAction.paused=!0,this.physicsCtrl=t}update(e){const n=this.physicsCtrl.getVelocity().length(),i=this.physicsCtrl.getRelativeVelocity(this.object);if(n>.01){this.walkAction.paused=!1;let s=Math.min(2,n*.5);i.z<0&&(s=s*-1),this.walkAction.timeScale=s}else this.walkAction.paused=!0;this.animationMixer.update(e)}}class Y0{constructor(e){Ee(this,"phyicsCtrl");Ee(this,"animationCtrl");Ee(this,"bounds");Ee(this,"tableCollider");this.phyicsCtrl=new X0,this.animationCtrl=new q0(e,this.phyicsCtrl);const t=5;this.bounds=new w0(new rt(-t,-t),new rt(t,t)),this.tableCollider=new pn(new q(-2,-1,-1.1),new q(2,1,1.1))}update(e,t){this.phyicsCtrl.update(e,t),this.animationCtrl.update(t),this.setWithinBounds(e)}setWithinBounds(e){this.keepWithinRoom(e),this.moveOutOfTable(e)}keepWithinRoom(e){if(this.isOutOfBounds(e)){const t=new q(this.bounds.min.x,-9999,this.bounds.min.y),n=new q(this.bounds.max.x,9999,this.bounds.max.y);e.position.clamp(t,n)}}moveOutOfTable(e){const t=e.position;if(this.tableCollider.containsPoint(t)){const n=this.tableCollider.min,i=this.tableCollider.max,s=Math.abs(t.x-n.x),a=Math.abs(t.x-i.x),o=Math.abs(t.z-n.z),c=Math.abs(t.z-i.z),l=Math.min(s,a,o,c);l===s?t.x=n.x:l===a?t.x=i.x:l===o?t.z=n.z:l===c&&(t.z=i.z)}}isOutOfBounds(e){const t=e.position.clone();return this.bounds.containsPoint(new rt(t.x,t.z))==!1}handleMove(e){this.phyicsCtrl.handleMove(e)}handleRotation(e){this.phyicsCtrl.handleRotation(e)}setBounds(e){this.bounds=e}}function K0(r,e){switch(e){case Dt.GOTO_1:return{from:r,to:On.Moving,command:e};case Dt.GOTO_2:return{from:r,to:On.Moving,command:e};case Dt.GOTO_3:return{from:r,to:On.Moving,command:e};case Dt.GOTO_4:return{from:r,to:On.Moving,command:e};case Dt.GOTO_5:return{from:r,to:On.Moving,command:e};case Dt.GOTO_6:return{from:r,to:On.Moving,command:e};case Dt.STOP:return{from:r,to:On.Idle,command:e};default:throw new Error(`Unhandled case: ${e}`)}}class Z0{constructor(){Ee(this,"state",On.Idle);Ee(this,"command",Dt.STOP);Ee(this,"targetAngleMap");this.targetAngleMap=new Map([[Dt.GOTO_1,.2],[Dt.GOTO_2,.8],[Dt.GOTO_3,1.4],[Dt.GOTO_4,2],[Dt.GOTO_5,2.5],[Dt.GOTO_6,3],[Dt.STOP,0]])}transition(e){const{from:t,to:n,command:i}=K0(this.state,e);return this.state=n,this.command=i,{from:t,to:n,command:i}}getState(){return this.state}getTargetAngle(){return this.targetAngleMap.get(this.command)||0}}class $0{constructor(e,t,n,i){Ee(this,"bubble");Ee(this,"state",Fi.STANDBY);Ee(this,"pos");Ee(this,"selectBox");Ee(this,"id");this.bubble=e,this.pos=t,this.selectBox=n,e.setPosition(t),t.y-=.4,n.setPosition(t),n.setVisible(!1),this.id=i}update(e){}getDistance(e){return e.object.position.clone().sub(this.pos)}getDistanceScalar(e){return this.getDistance(e).length()}getID(){return this.id}}class J0{constructor(e,t,n){Ee(this,"table");Ee(this,"slideJoint");Ee(this,"armFSM");Ee(this,"opticsControllers");if(t.length!==10)throw new Error("Expected exactly 10 speech buubles.");if(n.length!==10)throw new Error("Expected exactly 10 selection boxes.");this.table=e,e.updateMatrixWorld(!0),this.slideJoint=e.joints["slide-j"],this.armFSM=new Z0,this.opticsControllers=[];for(let s=0;s<10;s++){const a=new q(-1.3+s*.57,1.5,-.5);s>4&&(a.x-=5*.57,a.z=.5);let o=new $0(t[s],a,n[s],s);this.opticsControllers.push(o)}}getCurrentAngle(){return this.slideJoint.angle}getArmState(){return this.armFSM.getState()}handleArmCommand(e){this.armFSM.transition(e)}getTargetAngle(){return this.armFSM.getTargetAngle()}getOpticalControllers(){return this.opticsControllers}getOpticsControllerBySelectBox(e){return this.opticsControllers.find(t=>t.selectBox===e)}update(e){if(this.armFSM.getState()==On.Idle)return;const t=1,n=this.getCurrentAngle(),i=this.getTargetAngle()-n,s=Math.sign(i)*Math.min(Math.abs(i),t*e);this.slideJoint.setJointValue(n+s),Math.abs(i)<.01&&this.slideJoint.setJointValue(this.getTargetAngle())}}function Q0(r,e){let t=r.getActors(),n=B0(),i=new R0(t.player.object,n),s=new Y0(r.getActors().player),a=new J0(t.table.object,t.table.bubbles,t.table.selectBoxes),o=new j0(n,r,a),c=new k0(e,n),l=new O0(t,s,a);return{player:s,table:a,camera:i,ui:o,render:c,actor:l}}function ev(r,e,t,n){e.camera.update(r),e.actor.processActions(n.keys,e.ui.getArmCommands()),e.player.update(t.getActors().player.object,r),e.table.update(r)}function tv(r,e){r.ui.update(e),r.render.render()}class nv{constructor(e,t,n){Ee(this,"simulationLoop");Ee(this,"clock");Ee(this,"entities");Ee(this,"controllers");Ee(this,"inputListener");Ee(this,"runSimulationLoop",()=>{this.processNextFrame(),requestAnimationFrame(this.runSimulationLoop)});this.inputListener=new H0,this.entities=e,this.simulationLoop=new F0(e,n),this.clock=new u0,this.controllers=Q0(e,t)}processNextFrame(){const e=this.clock.getDelta(),t=this.inputListener.getInput();ev(e,this.controllers,this.entities,t),this.simulationLoop.step(e),tv(this.controllers,t)}}const iv=0,oh="./assets.zip",sv={},rv={[ya.Human]:"assets/gltfs/Character.glb"},av={[fn.Error]:"assets/imgs/error.png",[fn.PhotoCamera]:"assets/imgs/photo_camera.png",[fn.Timelapse]:"assets/imgs/timelapse.png",[fn.Timer]:"assets/imgs/timer.png"};var jr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ov(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function Jx(r){if(r.__esModule)return r;var e=r.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(n){var i=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return r[n]}})}),t}function Xr(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ro={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var Ql;function cv(){return Ql||(Ql=1,function(r,e){(function(t){r.exports=t()})(function(){return function t(n,i,s){function a(l,u){if(!i[l]){if(!n[l]){var h=typeof Xr=="function"&&Xr;if(!u&&h)return h(l,!0);if(o)return o(l,!0);var p=new Error("Cannot find module '"+l+"'");throw p.code="MODULE_NOT_FOUND",p}var d=i[l]={exports:{}};n[l][0].call(d.exports,function(_){var g=n[l][1][_];return a(g||_)},d,d.exports,t,n,i,s)}return i[l].exports}for(var o=typeof Xr=="function"&&Xr,c=0;c<s.length;c++)a(s[c]);return a}({1:[function(t,n,i){var s=t("./utils"),a=t("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(c){for(var l,u,h,p,d,_,g,m=[],f=0,x=c.length,S=x,y=s.getTypeOf(c)!=="string";f<c.length;)S=x-f,h=y?(l=c[f++],u=f<x?c[f++]:0,f<x?c[f++]:0):(l=c.charCodeAt(f++),u=f<x?c.charCodeAt(f++):0,f<x?c.charCodeAt(f++):0),p=l>>2,d=(3&l)<<4|u>>4,_=1<S?(15&u)<<2|h>>6:64,g=2<S?63&h:64,m.push(o.charAt(p)+o.charAt(d)+o.charAt(_)+o.charAt(g));return m.join("")},i.decode=function(c){var l,u,h,p,d,_,g=0,m=0,f="data:";if(c.substr(0,f.length)===f)throw new Error("Invalid base64 input, it looks like a data url.");var x,S=3*(c=c.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(c.charAt(c.length-1)===o.charAt(64)&&S--,c.charAt(c.length-2)===o.charAt(64)&&S--,S%1!=0)throw new Error("Invalid base64 input, bad content length.");for(x=a.uint8array?new Uint8Array(0|S):new Array(0|S);g<c.length;)l=o.indexOf(c.charAt(g++))<<2|(p=o.indexOf(c.charAt(g++)))>>4,u=(15&p)<<4|(d=o.indexOf(c.charAt(g++)))>>2,h=(3&d)<<6|(_=o.indexOf(c.charAt(g++))),x[m++]=l,d!==64&&(x[m++]=u),_!==64&&(x[m++]=h);return x}},{"./support":30,"./utils":32}],2:[function(t,n,i){var s=t("./external"),a=t("./stream/DataWorker"),o=t("./stream/Crc32Probe"),c=t("./stream/DataLengthProbe");function l(u,h,p,d,_){this.compressedSize=u,this.uncompressedSize=h,this.crc32=p,this.compression=d,this.compressedContent=_}l.prototype={getContentWorker:function(){var u=new a(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")),h=this;return u.on("end",function(){if(this.streamInfo.data_length!==h.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),u},getCompressedWorker:function(){return new a(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},l.createWorkerFrom=function(u,h,p){return u.pipe(new o).pipe(new c("uncompressedSize")).pipe(h.compressWorker(p)).pipe(new c("compressedSize")).withStreamInfo("compression",h)},n.exports=l},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,n,i){var s=t("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},i.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,n,i){var s=t("./utils"),a=function(){for(var o,c=[],l=0;l<256;l++){o=l;for(var u=0;u<8;u++)o=1&o?3988292384^o>>>1:o>>>1;c[l]=o}return c}();n.exports=function(o,c){return o!==void 0&&o.length?s.getTypeOf(o)!=="string"?function(l,u,h,p){var d=a,_=p+h;l^=-1;for(var g=p;g<_;g++)l=l>>>8^d[255&(l^u[g])];return-1^l}(0|c,o,o.length,0):function(l,u,h,p){var d=a,_=p+h;l^=-1;for(var g=p;g<_;g++)l=l>>>8^d[255&(l^u.charCodeAt(g))];return-1^l}(0|c,o,o.length,0):0}},{"./utils":32}],5:[function(t,n,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(t,n,i){var s=null;s=typeof Promise<"u"?Promise:t("lie"),n.exports={Promise:s}},{lie:37}],7:[function(t,n,i){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=t("pako"),o=t("./utils"),c=t("./stream/GenericWorker"),l=s?"uint8array":"array";function u(h,p){c.call(this,"FlateWorker/"+h),this._pako=null,this._pakoAction=h,this._pakoOptions=p,this.meta={}}i.magic="\b\0",o.inherits(u,c),u.prototype.processChunk=function(h){this.meta=h.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(l,h.data),!1)},u.prototype.flush=function(){c.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},u.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this._pako=null},u.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var h=this;this._pako.onData=function(p){h.push({data:p,meta:h.meta})}},i.compressWorker=function(h){return new u("Deflate",h)},i.uncompressWorker=function(){return new u("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,n,i){function s(d,_){var g,m="";for(g=0;g<_;g++)m+=String.fromCharCode(255&d),d>>>=8;return m}function a(d,_,g,m,f,x){var S,y,C=d.file,I=d.compression,L=x!==l.utf8encode,D=o.transformTo("string",x(C.name)),E=o.transformTo("string",l.utf8encode(C.name)),w=C.comment,B=o.transformTo("string",x(w)),R=o.transformTo("string",l.utf8encode(w)),z=E.length!==C.name.length,b=R.length!==w.length,W="",H="",Z="",J=C.dir,Q=C.date,fe={crc32:0,compressedSize:0,uncompressedSize:0};_&&!g||(fe.crc32=d.crc32,fe.compressedSize=d.compressedSize,fe.uncompressedSize=d.uncompressedSize);var X=0;_&&(X|=8),L||!z&&!b||(X|=2048);var K=0,_e=0;J&&(K|=16),f==="UNIX"?(_e=798,K|=function(Y,ce){var de=Y;return Y||(de=ce?16893:33204),(65535&de)<<16}(C.unixPermissions,J)):(_e=20,K|=function(Y){return 63&(Y||0)}(C.dosPermissions)),S=Q.getUTCHours(),S<<=6,S|=Q.getUTCMinutes(),S<<=5,S|=Q.getUTCSeconds()/2,y=Q.getUTCFullYear()-1980,y<<=4,y|=Q.getUTCMonth()+1,y<<=5,y|=Q.getUTCDate(),z&&(H=s(1,1)+s(u(D),4)+E,W+="up"+s(H.length,2)+H),b&&(Z=s(1,1)+s(u(B),4)+R,W+="uc"+s(Z.length,2)+Z);var j="";return j+=`
\0`,j+=s(X,2),j+=I.magic,j+=s(S,2),j+=s(y,2),j+=s(fe.crc32,4),j+=s(fe.compressedSize,4),j+=s(fe.uncompressedSize,4),j+=s(D.length,2),j+=s(W.length,2),{fileRecord:h.LOCAL_FILE_HEADER+j+D+W,dirRecord:h.CENTRAL_FILE_HEADER+s(_e,2)+j+s(B.length,2)+"\0\0\0\0"+s(K,4)+s(m,4)+D+W+B}}var o=t("../utils"),c=t("../stream/GenericWorker"),l=t("../utf8"),u=t("../crc32"),h=t("../signature");function p(d,_,g,m){c.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=g,this.encodeFileName=m,this.streamFiles=d,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(p,c),p.prototype.push=function(d){var _=d.meta.percent||0,g=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(d):(this.bytesWritten+=d.data.length,c.prototype.push.call(this,{data:d.data,meta:{currentFile:this.currentFile,percent:g?(_+100*(g-m-1))/g:100}}))},p.prototype.openedSource=function(d){this.currentSourceOffset=this.bytesWritten,this.currentFile=d.file.name;var _=this.streamFiles&&!d.file.dir;if(_){var g=a(d,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},p.prototype.closedSource=function(d){this.accumulate=!1;var _=this.streamFiles&&!d.file.dir,g=a(d,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),_)this.push({data:function(m){return h.DATA_DESCRIPTOR+s(m.crc32,4)+s(m.compressedSize,4)+s(m.uncompressedSize,4)}(d),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},p.prototype.flush=function(){for(var d=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var g=this.bytesWritten-d,m=function(f,x,S,y,C){var I=o.transformTo("string",C(y));return h.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(f,2)+s(f,2)+s(x,4)+s(S,4)+s(I.length,2)+I}(this.dirRecords.length,g,d,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},p.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},p.prototype.registerPrevious=function(d){this._sources.push(d);var _=this;return d.on("data",function(g){_.processChunk(g)}),d.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),d.on("error",function(g){_.error(g)}),this},p.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},p.prototype.error=function(d){var _=this._sources;if(!c.prototype.error.call(this,d))return!1;for(var g=0;g<_.length;g++)try{_[g].error(d)}catch{}return!0},p.prototype.lock=function(){c.prototype.lock.call(this);for(var d=this._sources,_=0;_<d.length;_++)d[_].lock()},n.exports=p},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,n,i){var s=t("../compressions"),a=t("./ZipFileWorker");i.generateWorker=function(o,c,l){var u=new a(c.streamFiles,l,c.platform,c.encodeFileName),h=0;try{o.forEach(function(p,d){h++;var _=function(x,S){var y=x||S,C=s[y];if(!C)throw new Error(y+" is not a valid compression method !");return C}(d.options.compression,c.compression),g=d.options.compressionOptions||c.compressionOptions||{},m=d.dir,f=d.date;d._compressWorker(_,g).withStreamInfo("file",{name:p,dir:m,date:f,comment:d.comment||"",unixPermissions:d.unixPermissions,dosPermissions:d.dosPermissions}).pipe(u)}),u.entriesCount=h}catch(p){u.error(p)}return u}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,n,i){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new s;for(var o in this)typeof this[o]!="function"&&(a[o]=this[o]);return a}}(s.prototype=t("./object")).loadAsync=t("./load"),s.support=t("./support"),s.defaults=t("./defaults"),s.version="3.10.1",s.loadAsync=function(a,o){return new s().loadAsync(a,o)},s.external=t("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,n,i){var s=t("./utils"),a=t("./external"),o=t("./utf8"),c=t("./zipEntries"),l=t("./stream/Crc32Probe"),u=t("./nodejsUtils");function h(p){return new a.Promise(function(d,_){var g=p.decompressed.getContentWorker().pipe(new l);g.on("error",function(m){_(m)}).on("end",function(){g.streamInfo.crc32!==p.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):d()}).resume()})}n.exports=function(p,d){var _=this;return d=s.extend(d||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),u.isNode&&u.isStream(p)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",p,!0,d.optimizedBinaryString,d.base64).then(function(g){var m=new c(d);return m.load(g),m}).then(function(g){var m=[a.Promise.resolve(g)],f=g.files;if(d.checkCRC32)for(var x=0;x<f.length;x++)m.push(h(f[x]));return a.Promise.all(m)}).then(function(g){for(var m=g.shift(),f=m.files,x=0;x<f.length;x++){var S=f[x],y=S.fileNameStr,C=s.resolve(S.fileNameStr);_.file(C,S.decompressed,{binary:!0,optimizedBinaryString:!0,date:S.date,dir:S.dir,comment:S.fileCommentStr.length?S.fileCommentStr:null,unixPermissions:S.unixPermissions,dosPermissions:S.dosPermissions,createFolders:d.createFolders}),S.dir||(_.file(C).unsafeOriginalName=y)}return m.zipComment.length&&(_.comment=m.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,n,i){var s=t("../utils"),a=t("../stream/GenericWorker");function o(c,l){a.call(this,"Nodejs stream input adapter for "+c),this._upstreamEnded=!1,this._bindStream(l)}s.inherits(o,a),o.prototype._bindStream=function(c){var l=this;(this._stream=c).pause(),c.on("data",function(u){l.push({data:u,meta:{percent:0}})}).on("error",function(u){l.isPaused?this.generatedError=u:l.error(u)}).on("end",function(){l.isPaused?l._upstreamEnded=!0:l.end()})},o.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,n,i){var s=t("readable-stream").Readable;function a(o,c,l){s.call(this,c),this._helper=o;var u=this;o.on("data",function(h,p){u.push(h)||u._helper.pause(),l&&l(p)}).on("error",function(h){u.emit("error",h)}).on("end",function(){u.push(null)})}t("../utils").inherits(a,s),a.prototype._read=function(){this._helper.resume()},n.exports=a},{"../utils":32,"readable-stream":16}],14:[function(t,n,i){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,a);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,a)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var a=new Buffer(s);return a.fill(0),a},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(t,n,i){function s(C,I,L){var D,E=o.getTypeOf(I),w=o.extend(L||{},u);w.date=w.date||new Date,w.compression!==null&&(w.compression=w.compression.toUpperCase()),typeof w.unixPermissions=="string"&&(w.unixPermissions=parseInt(w.unixPermissions,8)),w.unixPermissions&&16384&w.unixPermissions&&(w.dir=!0),w.dosPermissions&&16&w.dosPermissions&&(w.dir=!0),w.dir&&(C=f(C)),w.createFolders&&(D=m(C))&&x.call(this,D,!0);var B=E==="string"&&w.binary===!1&&w.base64===!1;L&&L.binary!==void 0||(w.binary=!B),(I instanceof h&&I.uncompressedSize===0||w.dir||!I||I.length===0)&&(w.base64=!1,w.binary=!0,I="",w.compression="STORE",E="string");var R=null;R=I instanceof h||I instanceof c?I:_.isNode&&_.isStream(I)?new g(C,I):o.prepareContent(C,I,w.binary,w.optimizedBinaryString,w.base64);var z=new p(C,R,w);this.files[C]=z}var a=t("./utf8"),o=t("./utils"),c=t("./stream/GenericWorker"),l=t("./stream/StreamHelper"),u=t("./defaults"),h=t("./compressedObject"),p=t("./zipObject"),d=t("./generate"),_=t("./nodejsUtils"),g=t("./nodejs/NodejsStreamInputAdapter"),m=function(C){C.slice(-1)==="/"&&(C=C.substring(0,C.length-1));var I=C.lastIndexOf("/");return 0<I?C.substring(0,I):""},f=function(C){return C.slice(-1)!=="/"&&(C+="/"),C},x=function(C,I){return I=I!==void 0?I:u.createFolders,C=f(C),this.files[C]||s.call(this,C,null,{dir:!0,createFolders:I}),this.files[C]};function S(C){return Object.prototype.toString.call(C)==="[object RegExp]"}var y={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(C){var I,L,D;for(I in this.files)D=this.files[I],(L=I.slice(this.root.length,I.length))&&I.slice(0,this.root.length)===this.root&&C(L,D)},filter:function(C){var I=[];return this.forEach(function(L,D){C(L,D)&&I.push(D)}),I},file:function(C,I,L){if(arguments.length!==1)return C=this.root+C,s.call(this,C,I,L),this;if(S(C)){var D=C;return this.filter(function(w,B){return!B.dir&&D.test(w)})}var E=this.files[this.root+C];return E&&!E.dir?E:null},folder:function(C){if(!C)return this;if(S(C))return this.filter(function(E,w){return w.dir&&C.test(E)});var I=this.root+C,L=x.call(this,I),D=this.clone();return D.root=L.name,D},remove:function(C){C=this.root+C;var I=this.files[C];if(I||(C.slice(-1)!=="/"&&(C+="/"),I=this.files[C]),I&&!I.dir)delete this.files[C];else for(var L=this.filter(function(E,w){return w.name.slice(0,C.length)===C}),D=0;D<L.length;D++)delete this.files[L[D].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(C){var I,L={};try{if((L=o.extend(C||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=L.type.toLowerCase(),L.compression=L.compression.toUpperCase(),L.type==="binarystring"&&(L.type="string"),!L.type)throw new Error("No output type specified.");o.checkSupport(L.type),L.platform!=="darwin"&&L.platform!=="freebsd"&&L.platform!=="linux"&&L.platform!=="sunos"||(L.platform="UNIX"),L.platform==="win32"&&(L.platform="DOS");var D=L.comment||this.comment||"";I=d.generateWorker(this,L,D)}catch(E){(I=new c("error")).error(E)}return new l(I,L.type||"string",L.mimeType)},generateAsync:function(C,I){return this.generateInternalStream(C).accumulate(I)},generateNodeStream:function(C,I){return(C=C||{}).type||(C.type="nodebuffer"),this.generateInternalStream(C).toNodejsStream(I)}};n.exports=y},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,n,i){n.exports=t("stream")},{stream:void 0}],17:[function(t,n,i){var s=t("./DataReader");function a(o){s.call(this,o);for(var c=0;c<this.data.length;c++)o[c]=255&o[c]}t("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data[this.zero+o]},a.prototype.lastIndexOfSignature=function(o){for(var c=o.charCodeAt(0),l=o.charCodeAt(1),u=o.charCodeAt(2),h=o.charCodeAt(3),p=this.length-4;0<=p;--p)if(this.data[p]===c&&this.data[p+1]===l&&this.data[p+2]===u&&this.data[p+3]===h)return p-this.zero;return-1},a.prototype.readAndCheckSignature=function(o){var c=o.charCodeAt(0),l=o.charCodeAt(1),u=o.charCodeAt(2),h=o.charCodeAt(3),p=this.readData(4);return c===p[0]&&l===p[1]&&u===p[2]&&h===p[3]},a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var c=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},n.exports=a},{"../utils":32,"./DataReader":18}],18:[function(t,n,i){var s=t("../utils");function a(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var c,l=0;for(this.checkOffset(o),c=this.index+o-1;c>=this.index;c--)l=(l<<8)+this.byteAt(c);return this.index+=o,l},readString:function(o){return s.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},n.exports=a},{"../utils":32}],19:[function(t,n,i){var s=t("./Uint8ArrayReader");function a(o){s.call(this,o)}t("../utils").inherits(a,s),a.prototype.readData=function(o){this.checkOffset(o);var c=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},n.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,n,i){var s=t("./DataReader");function a(o){s.call(this,o)}t("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},a.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},a.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},a.prototype.readData=function(o){this.checkOffset(o);var c=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},n.exports=a},{"../utils":32,"./DataReader":18}],21:[function(t,n,i){var s=t("./ArrayReader");function a(o){s.call(this,o)}t("../utils").inherits(a,s),a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var c=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},n.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(t,n,i){var s=t("../utils"),a=t("../support"),o=t("./ArrayReader"),c=t("./StringReader"),l=t("./NodeBufferReader"),u=t("./Uint8ArrayReader");n.exports=function(h){var p=s.getTypeOf(h);return s.checkSupport(p),p!=="string"||a.uint8array?p==="nodebuffer"?new l(h):a.uint8array?new u(s.transformTo("uint8array",h)):new o(s.transformTo("array",h)):new c(h)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,n,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,n,i){var s=t("./GenericWorker"),a=t("../utils");function o(c){s.call(this,"ConvertWorker to "+c),this.destType=c}a.inherits(o,s),o.prototype.processChunk=function(c){this.push({data:a.transformTo(this.destType,c.data),meta:c.meta})},n.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(t,n,i){var s=t("./GenericWorker"),a=t("../crc32");function o(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(o,s),o.prototype.processChunk=function(c){this.streamInfo.crc32=a(c.data,this.streamInfo.crc32||0),this.push(c)},n.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,n,i){var s=t("../utils"),a=t("./GenericWorker");function o(c){a.call(this,"DataLengthProbe for "+c),this.propName=c,this.withStreamInfo(c,0)}s.inherits(o,a),o.prototype.processChunk=function(c){if(c){var l=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=l+c.data.length}a.prototype.processChunk.call(this,c)},n.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(t,n,i){var s=t("../utils"),a=t("./GenericWorker");function o(c){a.call(this,"DataWorker");var l=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,c.then(function(u){l.dataIsReady=!0,l.data=u,l.max=u&&u.length||0,l.type=s.getTypeOf(u),l.isPaused||l._tickAndRepeat()},function(u){l.error(u)})}s.inherits(o,a),o.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var c=null,l=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":c=this.data.substring(this.index,l);break;case"uint8array":c=this.data.subarray(this.index,l);break;case"array":case"nodebuffer":c=this.data.slice(this.index,l)}return this.index=l,this.push({data:c,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(t,n,i){function s(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,o){return this._listeners[a].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,o){if(this._listeners[a])for(var c=0;c<this._listeners[a].length;c++)this._listeners[a][c].call(this,o)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var o=this;return a.on("data",function(c){o.processChunk(c)}),a.on("end",function(){o.end()}),a.on("error",function(c){o.error(c)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,o){return this.extraStreamInfo[a]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},n.exports=s},{}],29:[function(t,n,i){var s=t("../utils"),a=t("./ConvertWorker"),o=t("./GenericWorker"),c=t("../base64"),l=t("../support"),u=t("../external"),h=null;if(l.nodestream)try{h=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function p(_,g){return new u.Promise(function(m,f){var x=[],S=_._internalType,y=_._outputType,C=_._mimeType;_.on("data",function(I,L){x.push(I),g&&g(L)}).on("error",function(I){x=[],f(I)}).on("end",function(){try{var I=function(L,D,E){switch(L){case"blob":return s.newBlob(s.transformTo("arraybuffer",D),E);case"base64":return c.encode(D);default:return s.transformTo(L,D)}}(y,function(L,D){var E,w=0,B=null,R=0;for(E=0;E<D.length;E++)R+=D[E].length;switch(L){case"string":return D.join("");case"array":return Array.prototype.concat.apply([],D);case"uint8array":for(B=new Uint8Array(R),E=0;E<D.length;E++)B.set(D[E],w),w+=D[E].length;return B;case"nodebuffer":return Buffer.concat(D);default:throw new Error("concat : unsupported type '"+L+"'")}}(S,x),C);m(I)}catch(L){f(L)}x=[]}).resume()})}function d(_,g,m){var f=g;switch(g){case"blob":case"arraybuffer":f="uint8array";break;case"base64":f="string"}try{this._internalType=f,this._outputType=g,this._mimeType=m,s.checkSupport(f),this._worker=_.pipe(new a(f)),_.lock()}catch(x){this._worker=new o("error"),this._worker.error(x)}}d.prototype={accumulate:function(_){return p(this,_)},on:function(_,g){var m=this;return _==="data"?this._worker.on(_,function(f){g.call(m,f.data,f.meta)}):this._worker.on(_,function(){s.delay(g,arguments,m)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new h(this,{objectMode:this._outputType!=="nodebuffer"},_)}},n.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,n,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",i.nodebuffer=typeof Buffer<"u",i.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")i.blob=!1;else{var s=new ArrayBuffer(0);try{i.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(s),i.blob=a.getBlob("application/zip").size===0}catch{i.blob=!1}}}try{i.nodestream=!!t("readable-stream").Readable}catch{i.nodestream=!1}},{"readable-stream":16}],31:[function(t,n,i){for(var s=t("./utils"),a=t("./support"),o=t("./nodejsUtils"),c=t("./stream/GenericWorker"),l=new Array(256),u=0;u<256;u++)l[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;l[254]=l[254]=1;function h(){c.call(this,"utf-8 decode"),this.leftOver=null}function p(){c.call(this,"utf-8 encode")}i.utf8encode=function(d){return a.nodebuffer?o.newBufferFrom(d,"utf-8"):function(_){var g,m,f,x,S,y=_.length,C=0;for(x=0;x<y;x++)(64512&(m=_.charCodeAt(x)))==55296&&x+1<y&&(64512&(f=_.charCodeAt(x+1)))==56320&&(m=65536+(m-55296<<10)+(f-56320),x++),C+=m<128?1:m<2048?2:m<65536?3:4;for(g=a.uint8array?new Uint8Array(C):new Array(C),x=S=0;S<C;x++)(64512&(m=_.charCodeAt(x)))==55296&&x+1<y&&(64512&(f=_.charCodeAt(x+1)))==56320&&(m=65536+(m-55296<<10)+(f-56320),x++),m<128?g[S++]=m:(m<2048?g[S++]=192|m>>>6:(m<65536?g[S++]=224|m>>>12:(g[S++]=240|m>>>18,g[S++]=128|m>>>12&63),g[S++]=128|m>>>6&63),g[S++]=128|63&m);return g}(d)},i.utf8decode=function(d){return a.nodebuffer?s.transformTo("nodebuffer",d).toString("utf-8"):function(_){var g,m,f,x,S=_.length,y=new Array(2*S);for(g=m=0;g<S;)if((f=_[g++])<128)y[m++]=f;else if(4<(x=l[f]))y[m++]=65533,g+=x-1;else{for(f&=x===2?31:x===3?15:7;1<x&&g<S;)f=f<<6|63&_[g++],x--;1<x?y[m++]=65533:f<65536?y[m++]=f:(f-=65536,y[m++]=55296|f>>10&1023,y[m++]=56320|1023&f)}return y.length!==m&&(y.subarray?y=y.subarray(0,m):y.length=m),s.applyFromCharCode(y)}(d=s.transformTo(a.uint8array?"uint8array":"array",d))},s.inherits(h,c),h.prototype.processChunk=function(d){var _=s.transformTo(a.uint8array?"uint8array":"array",d.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var g=_;(_=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),_.set(g,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var m=function(x,S){var y;for((S=S||x.length)>x.length&&(S=x.length),y=S-1;0<=y&&(192&x[y])==128;)y--;return y<0||y===0?S:y+l[x[y]]>S?y:S}(_),f=_;m!==_.length&&(a.uint8array?(f=_.subarray(0,m),this.leftOver=_.subarray(m,_.length)):(f=_.slice(0,m),this.leftOver=_.slice(m,_.length))),this.push({data:i.utf8decode(f),meta:d.meta})},h.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=h,s.inherits(p,c),p.prototype.processChunk=function(d){this.push({data:i.utf8encode(d.data),meta:d.meta})},i.Utf8EncodeWorker=p},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,n,i){var s=t("./support"),a=t("./base64"),o=t("./nodejsUtils"),c=t("./external");function l(g){return g}function u(g,m){for(var f=0;f<g.length;++f)m[f]=255&g.charCodeAt(f);return m}t("setimmediate"),i.newBlob=function(g,m){i.checkSupport("blob");try{return new Blob([g],{type:m})}catch{try{var f=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return f.append(g),f.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var h={stringifyByChunk:function(g,m,f){var x=[],S=0,y=g.length;if(y<=f)return String.fromCharCode.apply(null,g);for(;S<y;)m==="array"||m==="nodebuffer"?x.push(String.fromCharCode.apply(null,g.slice(S,Math.min(S+f,y)))):x.push(String.fromCharCode.apply(null,g.subarray(S,Math.min(S+f,y)))),S+=f;return x.join("")},stringifyByChar:function(g){for(var m="",f=0;f<g.length;f++)m+=String.fromCharCode(g[f]);return m},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}}()}};function p(g){var m=65536,f=i.getTypeOf(g),x=!0;if(f==="uint8array"?x=h.applyCanBeUsed.uint8array:f==="nodebuffer"&&(x=h.applyCanBeUsed.nodebuffer),x)for(;1<m;)try{return h.stringifyByChunk(g,f,m)}catch{m=Math.floor(m/2)}return h.stringifyByChar(g)}function d(g,m){for(var f=0;f<g.length;f++)m[f]=g[f];return m}i.applyFromCharCode=p;var _={};_.string={string:l,array:function(g){return u(g,new Array(g.length))},arraybuffer:function(g){return _.string.uint8array(g).buffer},uint8array:function(g){return u(g,new Uint8Array(g.length))},nodebuffer:function(g){return u(g,o.allocBuffer(g.length))}},_.array={string:p,array:l,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return o.newBufferFrom(g)}},_.arraybuffer={string:function(g){return p(new Uint8Array(g))},array:function(g){return d(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:l,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return o.newBufferFrom(new Uint8Array(g))}},_.uint8array={string:p,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:l,nodebuffer:function(g){return o.newBufferFrom(g)}},_.nodebuffer={string:p,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return _.nodebuffer.uint8array(g).buffer},uint8array:function(g){return d(g,new Uint8Array(g.length))},nodebuffer:l},i.transformTo=function(g,m){if(m=m||"",!g)return m;i.checkSupport(g);var f=i.getTypeOf(m);return _[f][g](m)},i.resolve=function(g){for(var m=g.split("/"),f=[],x=0;x<m.length;x++){var S=m[x];S==="."||S===""&&x!==0&&x!==m.length-1||(S===".."?f.pop():f.push(S))}return f.join("/")},i.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":s.nodebuffer&&o.isBuffer(g)?"nodebuffer":s.uint8array&&g instanceof Uint8Array?"uint8array":s.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(g){if(!s[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(g){var m,f,x="";for(f=0;f<(g||"").length;f++)x+="\\x"+((m=g.charCodeAt(f))<16?"0":"")+m.toString(16).toUpperCase();return x},i.delay=function(g,m,f){setImmediate(function(){g.apply(f||null,m||[])})},i.inherits=function(g,m){function f(){}f.prototype=m.prototype,g.prototype=new f},i.extend=function(){var g,m,f={};for(g=0;g<arguments.length;g++)for(m in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],m)&&f[m]===void 0&&(f[m]=arguments[g][m]);return f},i.prepareContent=function(g,m,f,x,S){return c.Promise.resolve(m).then(function(y){return s.blob&&(y instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(y))!==-1)&&typeof FileReader<"u"?new c.Promise(function(C,I){var L=new FileReader;L.onload=function(D){C(D.target.result)},L.onerror=function(D){I(D.target.error)},L.readAsArrayBuffer(y)}):y}).then(function(y){var C=i.getTypeOf(y);return C?(C==="arraybuffer"?y=i.transformTo("uint8array",y):C==="string"&&(S?y=a.decode(y):f&&x!==!0&&(y=function(I){return u(I,s.uint8array?new Uint8Array(I.length):new Array(I.length))}(y))),y):c.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,n,i){var s=t("./reader/readerFor"),a=t("./utils"),o=t("./signature"),c=t("./zipEntry"),l=t("./support");function u(h){this.files=[],this.loadOptions=h}u.prototype={checkSignature:function(h){if(!this.reader.readAndCheckSignature(h)){this.reader.index-=4;var p=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(p)+", expected "+a.pretty(h)+")")}},isSignature:function(h,p){var d=this.reader.index;this.reader.setIndex(h);var _=this.reader.readString(4)===p;return this.reader.setIndex(d),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var h=this.reader.readData(this.zipCommentLength),p=l.uint8array?"uint8array":"array",d=a.transformTo(p,h);this.zipComment=this.loadOptions.decodeFileName(d)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var h,p,d,_=this.zip64EndOfCentralSize-44;0<_;)h=this.reader.readInt(2),p=this.reader.readInt(4),d=this.reader.readData(p),this.zip64ExtensibleData[h]={id:h,length:p,value:d}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var h,p;for(h=0;h<this.files.length;h++)p=this.files[h],this.reader.setIndex(p.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),p.readLocalPart(this.reader),p.handleUTF8(),p.processAttributes()},readCentralDir:function(){var h;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(h=new c({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(h);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var h=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(h<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(h);var p=h;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(h=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(h),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var _=p-d;if(0<_)this.isSignature(p,o.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(h){this.reader=s(h)},load:function(h){this.prepareReader(h),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=u},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,n,i){var s=t("./reader/readerFor"),a=t("./utils"),o=t("./compressedObject"),c=t("./crc32"),l=t("./utf8"),u=t("./compressions"),h=t("./support");function p(d,_){this.options=d,this.loadOptions=_}p.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(d){var _,g;if(d.skip(22),this.fileNameLength=d.readInt(2),g=d.readInt(2),this.fileName=d.readData(this.fileNameLength),d.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=function(m){for(var f in u)if(Object.prototype.hasOwnProperty.call(u,f)&&u[f].magic===m)return u[f];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,_,d.readData(this.compressedSize))},readCentralPart:function(d){this.versionMadeBy=d.readInt(2),d.skip(2),this.bitFlag=d.readInt(2),this.compressionMethod=d.readString(2),this.date=d.readDate(),this.crc32=d.readInt(4),this.compressedSize=d.readInt(4),this.uncompressedSize=d.readInt(4);var _=d.readInt(2);if(this.extraFieldsLength=d.readInt(2),this.fileCommentLength=d.readInt(2),this.diskNumberStart=d.readInt(2),this.internalFileAttributes=d.readInt(2),this.externalFileAttributes=d.readInt(4),this.localHeaderOffset=d.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");d.skip(_),this.readExtraFields(d),this.parseZIP64ExtraField(d),this.fileComment=d.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var d=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),d==0&&(this.dosPermissions=63&this.externalFileAttributes),d==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var d=s(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=d.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=d.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=d.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=d.readInt(4))}},readExtraFields:function(d){var _,g,m,f=d.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});d.index+4<f;)_=d.readInt(2),g=d.readInt(2),m=d.readData(g),this.extraFields[_]={id:_,length:g,value:m};d.setIndex(f)},handleUTF8:function(){var d=h.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=l.utf8decode(this.fileName),this.fileCommentStr=l.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var g=a.transformTo(d,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var f=a.transformTo(d,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(f)}}},findExtraFieldUnicodePath:function(){var d=this.extraFields[28789];if(d){var _=s(d.value);return _.readInt(1)!==1||c(this.fileName)!==_.readInt(4)?null:l.utf8decode(_.readData(d.length-5))}return null},findExtraFieldUnicodeComment:function(){var d=this.extraFields[25461];if(d){var _=s(d.value);return _.readInt(1)!==1||c(this.fileComment)!==_.readInt(4)?null:l.utf8decode(_.readData(d.length-5))}return null}},n.exports=p},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,n,i){function s(_,g,m){this.name=_,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=g,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var a=t("./stream/StreamHelper"),o=t("./stream/DataWorker"),c=t("./utf8"),l=t("./compressedObject"),u=t("./stream/GenericWorker");s.prototype={internalStream:function(_){var g=null,m="string";try{if(!_)throw new Error("No output type specified.");var f=(m=_.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),g=this._decompressWorker();var x=!this._dataBinary;x&&!f&&(g=g.pipe(new c.Utf8EncodeWorker)),!x&&f&&(g=g.pipe(new c.Utf8DecodeWorker))}catch(S){(g=new u("error")).error(S)}return new a(g,m,"")},async:function(_,g){return this.internalStream(_).accumulate(g)},nodeStream:function(_,g){return this.internalStream(_||"nodebuffer").toNodejsStream(g)},_compressWorker:function(_,g){if(this._data instanceof l&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new c.Utf8EncodeWorker)),l.createWorkerFrom(m,_,g)},_decompressWorker:function(){return this._data instanceof l?this._data.getContentWorker():this._data instanceof u?this._data:new o(this._data)}};for(var h=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],p=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},d=0;d<h.length;d++)s.prototype[h[d]]=p;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,n,i){(function(s){var a,o,c=s.MutationObserver||s.WebKitMutationObserver;if(c){var l=0,u=new c(_),h=s.document.createTextNode("");u.observe(h,{characterData:!0}),a=function(){h.data=l=++l%2}}else if(s.setImmediate||s.MessageChannel===void 0)a="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var g=s.document.createElement("script");g.onreadystatechange=function(){_(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},s.document.documentElement.appendChild(g)}:function(){setTimeout(_,0)};else{var p=new s.MessageChannel;p.port1.onmessage=_,a=function(){p.port2.postMessage(0)}}var d=[];function _(){var g,m;o=!0;for(var f=d.length;f;){for(m=d,d=[],g=-1;++g<f;)m[g]();f=d.length}o=!1}n.exports=function(g){d.push(g)!==1||o||a()}}).call(this,typeof jr<"u"?jr:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,n,i){var s=t("immediate");function a(){}var o={},c=["REJECTED"],l=["FULFILLED"],u=["PENDING"];function h(f){if(typeof f!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,f!==a&&g(this,f)}function p(f,x,S){this.promise=f,typeof x=="function"&&(this.onFulfilled=x,this.callFulfilled=this.otherCallFulfilled),typeof S=="function"&&(this.onRejected=S,this.callRejected=this.otherCallRejected)}function d(f,x,S){s(function(){var y;try{y=x(S)}catch(C){return o.reject(f,C)}y===f?o.reject(f,new TypeError("Cannot resolve promise with itself")):o.resolve(f,y)})}function _(f){var x=f&&f.then;if(f&&(typeof f=="object"||typeof f=="function")&&typeof x=="function")return function(){x.apply(f,arguments)}}function g(f,x){var S=!1;function y(L){S||(S=!0,o.reject(f,L))}function C(L){S||(S=!0,o.resolve(f,L))}var I=m(function(){x(C,y)});I.status==="error"&&y(I.value)}function m(f,x){var S={};try{S.value=f(x),S.status="success"}catch(y){S.status="error",S.value=y}return S}(n.exports=h).prototype.finally=function(f){if(typeof f!="function")return this;var x=this.constructor;return this.then(function(S){return x.resolve(f()).then(function(){return S})},function(S){return x.resolve(f()).then(function(){throw S})})},h.prototype.catch=function(f){return this.then(null,f)},h.prototype.then=function(f,x){if(typeof f!="function"&&this.state===l||typeof x!="function"&&this.state===c)return this;var S=new this.constructor(a);return this.state!==u?d(S,this.state===l?f:x,this.outcome):this.queue.push(new p(S,f,x)),S},p.prototype.callFulfilled=function(f){o.resolve(this.promise,f)},p.prototype.otherCallFulfilled=function(f){d(this.promise,this.onFulfilled,f)},p.prototype.callRejected=function(f){o.reject(this.promise,f)},p.prototype.otherCallRejected=function(f){d(this.promise,this.onRejected,f)},o.resolve=function(f,x){var S=m(_,x);if(S.status==="error")return o.reject(f,S.value);var y=S.value;if(y)g(f,y);else{f.state=l,f.outcome=x;for(var C=-1,I=f.queue.length;++C<I;)f.queue[C].callFulfilled(x)}return f},o.reject=function(f,x){f.state=c,f.outcome=x;for(var S=-1,y=f.queue.length;++S<y;)f.queue[S].callRejected(x);return f},h.resolve=function(f){return f instanceof this?f:o.resolve(new this(a),f)},h.reject=function(f){var x=new this(a);return o.reject(x,f)},h.all=function(f){var x=this;if(Object.prototype.toString.call(f)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=f.length,y=!1;if(!S)return this.resolve([]);for(var C=new Array(S),I=0,L=-1,D=new this(a);++L<S;)E(f[L],L);return D;function E(w,B){x.resolve(w).then(function(R){C[B]=R,++I!==S||y||(y=!0,o.resolve(D,C))},function(R){y||(y=!0,o.reject(D,R))})}},h.race=function(f){var x=this;if(Object.prototype.toString.call(f)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=f.length,y=!1;if(!S)return this.resolve([]);for(var C=-1,I=new this(a);++C<S;)L=f[C],x.resolve(L).then(function(D){y||(y=!0,o.resolve(I,D))},function(D){y||(y=!0,o.reject(I,D))});var L;return I}},{immediate:36}],38:[function(t,n,i){var s={};(0,t("./lib/utils/common").assign)(s,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,n,i){var s=t("./zlib/deflate"),a=t("./utils/common"),o=t("./utils/strings"),c=t("./zlib/messages"),l=t("./zlib/zstream"),u=Object.prototype.toString,h=0,p=-1,d=0,_=8;function g(f){if(!(this instanceof g))return new g(f);this.options=a.assign({level:p,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},f||{});var x=this.options;x.raw&&0<x.windowBits?x.windowBits=-x.windowBits:x.gzip&&0<x.windowBits&&x.windowBits<16&&(x.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var S=s.deflateInit2(this.strm,x.level,x.method,x.windowBits,x.memLevel,x.strategy);if(S!==h)throw new Error(c[S]);if(x.header&&s.deflateSetHeader(this.strm,x.header),x.dictionary){var y;if(y=typeof x.dictionary=="string"?o.string2buf(x.dictionary):u.call(x.dictionary)==="[object ArrayBuffer]"?new Uint8Array(x.dictionary):x.dictionary,(S=s.deflateSetDictionary(this.strm,y))!==h)throw new Error(c[S]);this._dict_set=!0}}function m(f,x){var S=new g(x);if(S.push(f,!0),S.err)throw S.msg||c[S.err];return S.result}g.prototype.push=function(f,x){var S,y,C=this.strm,I=this.options.chunkSize;if(this.ended)return!1;y=x===~~x?x:x===!0?4:0,typeof f=="string"?C.input=o.string2buf(f):u.call(f)==="[object ArrayBuffer]"?C.input=new Uint8Array(f):C.input=f,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new a.Buf8(I),C.next_out=0,C.avail_out=I),(S=s.deflate(C,y))!==1&&S!==h)return this.onEnd(S),!(this.ended=!0);C.avail_out!==0&&(C.avail_in!==0||y!==4&&y!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(a.shrinkBuf(C.output,C.next_out))):this.onData(a.shrinkBuf(C.output,C.next_out)))}while((0<C.avail_in||C.avail_out===0)&&S!==1);return y===4?(S=s.deflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===h):y!==2||(this.onEnd(h),!(C.avail_out=0))},g.prototype.onData=function(f){this.chunks.push(f)},g.prototype.onEnd=function(f){f===h&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=f,this.msg=this.strm.msg},i.Deflate=g,i.deflate=m,i.deflateRaw=function(f,x){return(x=x||{}).raw=!0,m(f,x)},i.gzip=function(f,x){return(x=x||{}).gzip=!0,m(f,x)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,n,i){var s=t("./zlib/inflate"),a=t("./utils/common"),o=t("./utils/strings"),c=t("./zlib/constants"),l=t("./zlib/messages"),u=t("./zlib/zstream"),h=t("./zlib/gzheader"),p=Object.prototype.toString;function d(g){if(!(this instanceof d))return new d(g);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},g||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||g&&g.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&!(15&m.windowBits)&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var f=s.inflateInit2(this.strm,m.windowBits);if(f!==c.Z_OK)throw new Error(l[f]);this.header=new h,s.inflateGetHeader(this.strm,this.header)}function _(g,m){var f=new d(m);if(f.push(g,!0),f.err)throw f.msg||l[f.err];return f.result}d.prototype.push=function(g,m){var f,x,S,y,C,I,L=this.strm,D=this.options.chunkSize,E=this.options.dictionary,w=!1;if(this.ended)return!1;x=m===~~m?m:m===!0?c.Z_FINISH:c.Z_NO_FLUSH,typeof g=="string"?L.input=o.binstring2buf(g):p.call(g)==="[object ArrayBuffer]"?L.input=new Uint8Array(g):L.input=g,L.next_in=0,L.avail_in=L.input.length;do{if(L.avail_out===0&&(L.output=new a.Buf8(D),L.next_out=0,L.avail_out=D),(f=s.inflate(L,c.Z_NO_FLUSH))===c.Z_NEED_DICT&&E&&(I=typeof E=="string"?o.string2buf(E):p.call(E)==="[object ArrayBuffer]"?new Uint8Array(E):E,f=s.inflateSetDictionary(this.strm,I)),f===c.Z_BUF_ERROR&&w===!0&&(f=c.Z_OK,w=!1),f!==c.Z_STREAM_END&&f!==c.Z_OK)return this.onEnd(f),!(this.ended=!0);L.next_out&&(L.avail_out!==0&&f!==c.Z_STREAM_END&&(L.avail_in!==0||x!==c.Z_FINISH&&x!==c.Z_SYNC_FLUSH)||(this.options.to==="string"?(S=o.utf8border(L.output,L.next_out),y=L.next_out-S,C=o.buf2string(L.output,S),L.next_out=y,L.avail_out=D-y,y&&a.arraySet(L.output,L.output,S,y,0),this.onData(C)):this.onData(a.shrinkBuf(L.output,L.next_out)))),L.avail_in===0&&L.avail_out===0&&(w=!0)}while((0<L.avail_in||L.avail_out===0)&&f!==c.Z_STREAM_END);return f===c.Z_STREAM_END&&(x=c.Z_FINISH),x===c.Z_FINISH?(f=s.inflateEnd(this.strm),this.onEnd(f),this.ended=!0,f===c.Z_OK):x!==c.Z_SYNC_FLUSH||(this.onEnd(c.Z_OK),!(L.avail_out=0))},d.prototype.onData=function(g){this.chunks.push(g)},d.prototype.onEnd=function(g){g===c.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},i.Inflate=d,i.inflate=_,i.inflateRaw=function(g,m){return(m=m||{}).raw=!0,_(g,m)},i.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,n,i){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";i.assign=function(c){for(var l=Array.prototype.slice.call(arguments,1);l.length;){var u=l.shift();if(u){if(typeof u!="object")throw new TypeError(u+"must be non-object");for(var h in u)u.hasOwnProperty(h)&&(c[h]=u[h])}}return c},i.shrinkBuf=function(c,l){return c.length===l?c:c.subarray?c.subarray(0,l):(c.length=l,c)};var a={arraySet:function(c,l,u,h,p){if(l.subarray&&c.subarray)c.set(l.subarray(u,u+h),p);else for(var d=0;d<h;d++)c[p+d]=l[u+d]},flattenChunks:function(c){var l,u,h,p,d,_;for(l=h=0,u=c.length;l<u;l++)h+=c[l].length;for(_=new Uint8Array(h),l=p=0,u=c.length;l<u;l++)d=c[l],_.set(d,p),p+=d.length;return _}},o={arraySet:function(c,l,u,h,p){for(var d=0;d<h;d++)c[p+d]=l[u+d]},flattenChunks:function(c){return[].concat.apply([],c)}};i.setTyped=function(c){c?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,a)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,o))},i.setTyped(s)},{}],42:[function(t,n,i){var s=t("./common"),a=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var c=new s.Buf8(256),l=0;l<256;l++)c[l]=252<=l?6:248<=l?5:240<=l?4:224<=l?3:192<=l?2:1;function u(h,p){if(p<65537&&(h.subarray&&o||!h.subarray&&a))return String.fromCharCode.apply(null,s.shrinkBuf(h,p));for(var d="",_=0;_<p;_++)d+=String.fromCharCode(h[_]);return d}c[254]=c[254]=1,i.string2buf=function(h){var p,d,_,g,m,f=h.length,x=0;for(g=0;g<f;g++)(64512&(d=h.charCodeAt(g)))==55296&&g+1<f&&(64512&(_=h.charCodeAt(g+1)))==56320&&(d=65536+(d-55296<<10)+(_-56320),g++),x+=d<128?1:d<2048?2:d<65536?3:4;for(p=new s.Buf8(x),g=m=0;m<x;g++)(64512&(d=h.charCodeAt(g)))==55296&&g+1<f&&(64512&(_=h.charCodeAt(g+1)))==56320&&(d=65536+(d-55296<<10)+(_-56320),g++),d<128?p[m++]=d:(d<2048?p[m++]=192|d>>>6:(d<65536?p[m++]=224|d>>>12:(p[m++]=240|d>>>18,p[m++]=128|d>>>12&63),p[m++]=128|d>>>6&63),p[m++]=128|63&d);return p},i.buf2binstring=function(h){return u(h,h.length)},i.binstring2buf=function(h){for(var p=new s.Buf8(h.length),d=0,_=p.length;d<_;d++)p[d]=h.charCodeAt(d);return p},i.buf2string=function(h,p){var d,_,g,m,f=p||h.length,x=new Array(2*f);for(d=_=0;d<f;)if((g=h[d++])<128)x[_++]=g;else if(4<(m=c[g]))x[_++]=65533,d+=m-1;else{for(g&=m===2?31:m===3?15:7;1<m&&d<f;)g=g<<6|63&h[d++],m--;1<m?x[_++]=65533:g<65536?x[_++]=g:(g-=65536,x[_++]=55296|g>>10&1023,x[_++]=56320|1023&g)}return u(x,_)},i.utf8border=function(h,p){var d;for((p=p||h.length)>h.length&&(p=h.length),d=p-1;0<=d&&(192&h[d])==128;)d--;return d<0||d===0?p:d+c[h[d]]>p?d:p}},{"./common":41}],43:[function(t,n,i){n.exports=function(s,a,o,c){for(var l=65535&s|0,u=s>>>16&65535|0,h=0;o!==0;){for(o-=h=2e3<o?2e3:o;u=u+(l=l+a[c++]|0)|0,--h;);l%=65521,u%=65521}return l|u<<16|0}},{}],44:[function(t,n,i){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,n,i){var s=function(){for(var a,o=[],c=0;c<256;c++){a=c;for(var l=0;l<8;l++)a=1&a?3988292384^a>>>1:a>>>1;o[c]=a}return o}();n.exports=function(a,o,c,l){var u=s,h=l+c;a^=-1;for(var p=l;p<h;p++)a=a>>>8^u[255&(a^o[p])];return-1^a}},{}],46:[function(t,n,i){var s,a=t("../utils/common"),o=t("./trees"),c=t("./adler32"),l=t("./crc32"),u=t("./messages"),h=0,p=4,d=0,_=-2,g=-1,m=4,f=2,x=8,S=9,y=286,C=30,I=19,L=2*y+1,D=15,E=3,w=258,B=w+E+1,R=42,z=113,b=1,W=2,H=3,Z=4;function J(v,me){return v.msg=u[me],me}function Q(v){return(v<<1)-(4<v?9:0)}function fe(v){for(var me=v.length;0<=--me;)v[me]=0}function X(v){var me=v.state,re=me.pending;re>v.avail_out&&(re=v.avail_out),re!==0&&(a.arraySet(v.output,me.pending_buf,me.pending_out,re,v.next_out),v.next_out+=re,me.pending_out+=re,v.total_out+=re,v.avail_out-=re,me.pending-=re,me.pending===0&&(me.pending_out=0))}function K(v,me){o._tr_flush_block(v,0<=v.block_start?v.block_start:-1,v.strstart-v.block_start,me),v.block_start=v.strstart,X(v.strm)}function _e(v,me){v.pending_buf[v.pending++]=me}function j(v,me){v.pending_buf[v.pending++]=me>>>8&255,v.pending_buf[v.pending++]=255&me}function Y(v,me){var re,V,O=v.max_chain_length,$=v.strstart,oe=v.prev_length,P=v.nice_match,M=v.strstart>v.w_size-B?v.strstart-(v.w_size-B):0,G=v.window,se=v.w_mask,ne=v.prev,ae=v.strstart+w,Te=G[$+oe-1],ye=G[$+oe];v.prev_length>=v.good_match&&(O>>=2),P>v.lookahead&&(P=v.lookahead);do if(G[(re=me)+oe]===ye&&G[re+oe-1]===Te&&G[re]===G[$]&&G[++re]===G[$+1]){$+=2,re++;do;while(G[++$]===G[++re]&&G[++$]===G[++re]&&G[++$]===G[++re]&&G[++$]===G[++re]&&G[++$]===G[++re]&&G[++$]===G[++re]&&G[++$]===G[++re]&&G[++$]===G[++re]&&$<ae);if(V=w-(ae-$),$=ae-w,oe<V){if(v.match_start=me,P<=(oe=V))break;Te=G[$+oe-1],ye=G[$+oe]}}while((me=ne[me&se])>M&&--O!=0);return oe<=v.lookahead?oe:v.lookahead}function ce(v){var me,re,V,O,$,oe,P,M,G,se,ne=v.w_size;do{if(O=v.window_size-v.lookahead-v.strstart,v.strstart>=ne+(ne-B)){for(a.arraySet(v.window,v.window,ne,ne,0),v.match_start-=ne,v.strstart-=ne,v.block_start-=ne,me=re=v.hash_size;V=v.head[--me],v.head[me]=ne<=V?V-ne:0,--re;);for(me=re=ne;V=v.prev[--me],v.prev[me]=ne<=V?V-ne:0,--re;);O+=ne}if(v.strm.avail_in===0)break;if(oe=v.strm,P=v.window,M=v.strstart+v.lookahead,G=O,se=void 0,se=oe.avail_in,G<se&&(se=G),re=se===0?0:(oe.avail_in-=se,a.arraySet(P,oe.input,oe.next_in,se,M),oe.state.wrap===1?oe.adler=c(oe.adler,P,se,M):oe.state.wrap===2&&(oe.adler=l(oe.adler,P,se,M)),oe.next_in+=se,oe.total_in+=se,se),v.lookahead+=re,v.lookahead+v.insert>=E)for($=v.strstart-v.insert,v.ins_h=v.window[$],v.ins_h=(v.ins_h<<v.hash_shift^v.window[$+1])&v.hash_mask;v.insert&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[$+E-1])&v.hash_mask,v.prev[$&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=$,$++,v.insert--,!(v.lookahead+v.insert<E)););}while(v.lookahead<B&&v.strm.avail_in!==0)}function de(v,me){for(var re,V;;){if(v.lookahead<B){if(ce(v),v.lookahead<B&&me===h)return b;if(v.lookahead===0)break}if(re=0,v.lookahead>=E&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+E-1])&v.hash_mask,re=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),re!==0&&v.strstart-re<=v.w_size-B&&(v.match_length=Y(v,re)),v.match_length>=E)if(V=o._tr_tally(v,v.strstart-v.match_start,v.match_length-E),v.lookahead-=v.match_length,v.match_length<=v.max_lazy_match&&v.lookahead>=E){for(v.match_length--;v.strstart++,v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+E-1])&v.hash_mask,re=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart,--v.match_length!=0;);v.strstart++}else v.strstart+=v.match_length,v.match_length=0,v.ins_h=v.window[v.strstart],v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+1])&v.hash_mask;else V=o._tr_tally(v,0,v.window[v.strstart]),v.lookahead--,v.strstart++;if(V&&(K(v,!1),v.strm.avail_out===0))return b}return v.insert=v.strstart<E-1?v.strstart:E-1,me===p?(K(v,!0),v.strm.avail_out===0?H:Z):v.last_lit&&(K(v,!1),v.strm.avail_out===0)?b:W}function xe(v,me){for(var re,V,O;;){if(v.lookahead<B){if(ce(v),v.lookahead<B&&me===h)return b;if(v.lookahead===0)break}if(re=0,v.lookahead>=E&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+E-1])&v.hash_mask,re=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),v.prev_length=v.match_length,v.prev_match=v.match_start,v.match_length=E-1,re!==0&&v.prev_length<v.max_lazy_match&&v.strstart-re<=v.w_size-B&&(v.match_length=Y(v,re),v.match_length<=5&&(v.strategy===1||v.match_length===E&&4096<v.strstart-v.match_start)&&(v.match_length=E-1)),v.prev_length>=E&&v.match_length<=v.prev_length){for(O=v.strstart+v.lookahead-E,V=o._tr_tally(v,v.strstart-1-v.prev_match,v.prev_length-E),v.lookahead-=v.prev_length-1,v.prev_length-=2;++v.strstart<=O&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+E-1])&v.hash_mask,re=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),--v.prev_length!=0;);if(v.match_available=0,v.match_length=E-1,v.strstart++,V&&(K(v,!1),v.strm.avail_out===0))return b}else if(v.match_available){if((V=o._tr_tally(v,0,v.window[v.strstart-1]))&&K(v,!1),v.strstart++,v.lookahead--,v.strm.avail_out===0)return b}else v.match_available=1,v.strstart++,v.lookahead--}return v.match_available&&(V=o._tr_tally(v,0,v.window[v.strstart-1]),v.match_available=0),v.insert=v.strstart<E-1?v.strstart:E-1,me===p?(K(v,!0),v.strm.avail_out===0?H:Z):v.last_lit&&(K(v,!1),v.strm.avail_out===0)?b:W}function we(v,me,re,V,O){this.good_length=v,this.max_lazy=me,this.nice_length=re,this.max_chain=V,this.func=O}function Be(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=x,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*L),this.dyn_dtree=new a.Buf16(2*(2*C+1)),this.bl_tree=new a.Buf16(2*(2*I+1)),fe(this.dyn_ltree),fe(this.dyn_dtree),fe(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(D+1),this.heap=new a.Buf16(2*y+1),fe(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*y+1),fe(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Qe(v){var me;return v&&v.state?(v.total_in=v.total_out=0,v.data_type=f,(me=v.state).pending=0,me.pending_out=0,me.wrap<0&&(me.wrap=-me.wrap),me.status=me.wrap?R:z,v.adler=me.wrap===2?0:1,me.last_flush=h,o._tr_init(me),d):J(v,_)}function tt(v){var me=Qe(v);return me===d&&function(re){re.window_size=2*re.w_size,fe(re.head),re.max_lazy_match=s[re.level].max_lazy,re.good_match=s[re.level].good_length,re.nice_match=s[re.level].nice_length,re.max_chain_length=s[re.level].max_chain,re.strstart=0,re.block_start=0,re.lookahead=0,re.insert=0,re.match_length=re.prev_length=E-1,re.match_available=0,re.ins_h=0}(v.state),me}function pt(v,me,re,V,O,$){if(!v)return _;var oe=1;if(me===g&&(me=6),V<0?(oe=0,V=-V):15<V&&(oe=2,V-=16),O<1||S<O||re!==x||V<8||15<V||me<0||9<me||$<0||m<$)return J(v,_);V===8&&(V=9);var P=new Be;return(v.state=P).strm=v,P.wrap=oe,P.gzhead=null,P.w_bits=V,P.w_size=1<<P.w_bits,P.w_mask=P.w_size-1,P.hash_bits=O+7,P.hash_size=1<<P.hash_bits,P.hash_mask=P.hash_size-1,P.hash_shift=~~((P.hash_bits+E-1)/E),P.window=new a.Buf8(2*P.w_size),P.head=new a.Buf16(P.hash_size),P.prev=new a.Buf16(P.w_size),P.lit_bufsize=1<<O+6,P.pending_buf_size=4*P.lit_bufsize,P.pending_buf=new a.Buf8(P.pending_buf_size),P.d_buf=1*P.lit_bufsize,P.l_buf=3*P.lit_bufsize,P.level=me,P.strategy=$,P.method=re,tt(v)}s=[new we(0,0,0,0,function(v,me){var re=65535;for(re>v.pending_buf_size-5&&(re=v.pending_buf_size-5);;){if(v.lookahead<=1){if(ce(v),v.lookahead===0&&me===h)return b;if(v.lookahead===0)break}v.strstart+=v.lookahead,v.lookahead=0;var V=v.block_start+re;if((v.strstart===0||v.strstart>=V)&&(v.lookahead=v.strstart-V,v.strstart=V,K(v,!1),v.strm.avail_out===0)||v.strstart-v.block_start>=v.w_size-B&&(K(v,!1),v.strm.avail_out===0))return b}return v.insert=0,me===p?(K(v,!0),v.strm.avail_out===0?H:Z):(v.strstart>v.block_start&&(K(v,!1),v.strm.avail_out),b)}),new we(4,4,8,4,de),new we(4,5,16,8,de),new we(4,6,32,32,de),new we(4,4,16,16,xe),new we(8,16,32,32,xe),new we(8,16,128,128,xe),new we(8,32,128,256,xe),new we(32,128,258,1024,xe),new we(32,258,258,4096,xe)],i.deflateInit=function(v,me){return pt(v,me,x,15,8,0)},i.deflateInit2=pt,i.deflateReset=tt,i.deflateResetKeep=Qe,i.deflateSetHeader=function(v,me){return v&&v.state?v.state.wrap!==2?_:(v.state.gzhead=me,d):_},i.deflate=function(v,me){var re,V,O,$;if(!v||!v.state||5<me||me<0)return v?J(v,_):_;if(V=v.state,!v.output||!v.input&&v.avail_in!==0||V.status===666&&me!==p)return J(v,v.avail_out===0?-5:_);if(V.strm=v,re=V.last_flush,V.last_flush=me,V.status===R)if(V.wrap===2)v.adler=0,_e(V,31),_e(V,139),_e(V,8),V.gzhead?(_e(V,(V.gzhead.text?1:0)+(V.gzhead.hcrc?2:0)+(V.gzhead.extra?4:0)+(V.gzhead.name?8:0)+(V.gzhead.comment?16:0)),_e(V,255&V.gzhead.time),_e(V,V.gzhead.time>>8&255),_e(V,V.gzhead.time>>16&255),_e(V,V.gzhead.time>>24&255),_e(V,V.level===9?2:2<=V.strategy||V.level<2?4:0),_e(V,255&V.gzhead.os),V.gzhead.extra&&V.gzhead.extra.length&&(_e(V,255&V.gzhead.extra.length),_e(V,V.gzhead.extra.length>>8&255)),V.gzhead.hcrc&&(v.adler=l(v.adler,V.pending_buf,V.pending,0)),V.gzindex=0,V.status=69):(_e(V,0),_e(V,0),_e(V,0),_e(V,0),_e(V,0),_e(V,V.level===9?2:2<=V.strategy||V.level<2?4:0),_e(V,3),V.status=z);else{var oe=x+(V.w_bits-8<<4)<<8;oe|=(2<=V.strategy||V.level<2?0:V.level<6?1:V.level===6?2:3)<<6,V.strstart!==0&&(oe|=32),oe+=31-oe%31,V.status=z,j(V,oe),V.strstart!==0&&(j(V,v.adler>>>16),j(V,65535&v.adler)),v.adler=1}if(V.status===69)if(V.gzhead.extra){for(O=V.pending;V.gzindex<(65535&V.gzhead.extra.length)&&(V.pending!==V.pending_buf_size||(V.gzhead.hcrc&&V.pending>O&&(v.adler=l(v.adler,V.pending_buf,V.pending-O,O)),X(v),O=V.pending,V.pending!==V.pending_buf_size));)_e(V,255&V.gzhead.extra[V.gzindex]),V.gzindex++;V.gzhead.hcrc&&V.pending>O&&(v.adler=l(v.adler,V.pending_buf,V.pending-O,O)),V.gzindex===V.gzhead.extra.length&&(V.gzindex=0,V.status=73)}else V.status=73;if(V.status===73)if(V.gzhead.name){O=V.pending;do{if(V.pending===V.pending_buf_size&&(V.gzhead.hcrc&&V.pending>O&&(v.adler=l(v.adler,V.pending_buf,V.pending-O,O)),X(v),O=V.pending,V.pending===V.pending_buf_size)){$=1;break}$=V.gzindex<V.gzhead.name.length?255&V.gzhead.name.charCodeAt(V.gzindex++):0,_e(V,$)}while($!==0);V.gzhead.hcrc&&V.pending>O&&(v.adler=l(v.adler,V.pending_buf,V.pending-O,O)),$===0&&(V.gzindex=0,V.status=91)}else V.status=91;if(V.status===91)if(V.gzhead.comment){O=V.pending;do{if(V.pending===V.pending_buf_size&&(V.gzhead.hcrc&&V.pending>O&&(v.adler=l(v.adler,V.pending_buf,V.pending-O,O)),X(v),O=V.pending,V.pending===V.pending_buf_size)){$=1;break}$=V.gzindex<V.gzhead.comment.length?255&V.gzhead.comment.charCodeAt(V.gzindex++):0,_e(V,$)}while($!==0);V.gzhead.hcrc&&V.pending>O&&(v.adler=l(v.adler,V.pending_buf,V.pending-O,O)),$===0&&(V.status=103)}else V.status=103;if(V.status===103&&(V.gzhead.hcrc?(V.pending+2>V.pending_buf_size&&X(v),V.pending+2<=V.pending_buf_size&&(_e(V,255&v.adler),_e(V,v.adler>>8&255),v.adler=0,V.status=z)):V.status=z),V.pending!==0){if(X(v),v.avail_out===0)return V.last_flush=-1,d}else if(v.avail_in===0&&Q(me)<=Q(re)&&me!==p)return J(v,-5);if(V.status===666&&v.avail_in!==0)return J(v,-5);if(v.avail_in!==0||V.lookahead!==0||me!==h&&V.status!==666){var P=V.strategy===2?function(M,G){for(var se;;){if(M.lookahead===0&&(ce(M),M.lookahead===0)){if(G===h)return b;break}if(M.match_length=0,se=o._tr_tally(M,0,M.window[M.strstart]),M.lookahead--,M.strstart++,se&&(K(M,!1),M.strm.avail_out===0))return b}return M.insert=0,G===p?(K(M,!0),M.strm.avail_out===0?H:Z):M.last_lit&&(K(M,!1),M.strm.avail_out===0)?b:W}(V,me):V.strategy===3?function(M,G){for(var se,ne,ae,Te,ye=M.window;;){if(M.lookahead<=w){if(ce(M),M.lookahead<=w&&G===h)return b;if(M.lookahead===0)break}if(M.match_length=0,M.lookahead>=E&&0<M.strstart&&(ne=ye[ae=M.strstart-1])===ye[++ae]&&ne===ye[++ae]&&ne===ye[++ae]){Te=M.strstart+w;do;while(ne===ye[++ae]&&ne===ye[++ae]&&ne===ye[++ae]&&ne===ye[++ae]&&ne===ye[++ae]&&ne===ye[++ae]&&ne===ye[++ae]&&ne===ye[++ae]&&ae<Te);M.match_length=w-(Te-ae),M.match_length>M.lookahead&&(M.match_length=M.lookahead)}if(M.match_length>=E?(se=o._tr_tally(M,1,M.match_length-E),M.lookahead-=M.match_length,M.strstart+=M.match_length,M.match_length=0):(se=o._tr_tally(M,0,M.window[M.strstart]),M.lookahead--,M.strstart++),se&&(K(M,!1),M.strm.avail_out===0))return b}return M.insert=0,G===p?(K(M,!0),M.strm.avail_out===0?H:Z):M.last_lit&&(K(M,!1),M.strm.avail_out===0)?b:W}(V,me):s[V.level].func(V,me);if(P!==H&&P!==Z||(V.status=666),P===b||P===H)return v.avail_out===0&&(V.last_flush=-1),d;if(P===W&&(me===1?o._tr_align(V):me!==5&&(o._tr_stored_block(V,0,0,!1),me===3&&(fe(V.head),V.lookahead===0&&(V.strstart=0,V.block_start=0,V.insert=0))),X(v),v.avail_out===0))return V.last_flush=-1,d}return me!==p?d:V.wrap<=0?1:(V.wrap===2?(_e(V,255&v.adler),_e(V,v.adler>>8&255),_e(V,v.adler>>16&255),_e(V,v.adler>>24&255),_e(V,255&v.total_in),_e(V,v.total_in>>8&255),_e(V,v.total_in>>16&255),_e(V,v.total_in>>24&255)):(j(V,v.adler>>>16),j(V,65535&v.adler)),X(v),0<V.wrap&&(V.wrap=-V.wrap),V.pending!==0?d:1)},i.deflateEnd=function(v){var me;return v&&v.state?(me=v.state.status)!==R&&me!==69&&me!==73&&me!==91&&me!==103&&me!==z&&me!==666?J(v,_):(v.state=null,me===z?J(v,-3):d):_},i.deflateSetDictionary=function(v,me){var re,V,O,$,oe,P,M,G,se=me.length;if(!v||!v.state||($=(re=v.state).wrap)===2||$===1&&re.status!==R||re.lookahead)return _;for($===1&&(v.adler=c(v.adler,me,se,0)),re.wrap=0,se>=re.w_size&&($===0&&(fe(re.head),re.strstart=0,re.block_start=0,re.insert=0),G=new a.Buf8(re.w_size),a.arraySet(G,me,se-re.w_size,re.w_size,0),me=G,se=re.w_size),oe=v.avail_in,P=v.next_in,M=v.input,v.avail_in=se,v.next_in=0,v.input=me,ce(re);re.lookahead>=E;){for(V=re.strstart,O=re.lookahead-(E-1);re.ins_h=(re.ins_h<<re.hash_shift^re.window[V+E-1])&re.hash_mask,re.prev[V&re.w_mask]=re.head[re.ins_h],re.head[re.ins_h]=V,V++,--O;);re.strstart=V,re.lookahead=E-1,ce(re)}return re.strstart+=re.lookahead,re.block_start=re.strstart,re.insert=re.lookahead,re.lookahead=0,re.match_length=re.prev_length=E-1,re.match_available=0,v.next_in=P,v.input=M,v.avail_in=oe,re.wrap=$,d},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,n,i){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,n,i){n.exports=function(s,a){var o,c,l,u,h,p,d,_,g,m,f,x,S,y,C,I,L,D,E,w,B,R,z,b,W;o=s.state,c=s.next_in,b=s.input,l=c+(s.avail_in-5),u=s.next_out,W=s.output,h=u-(a-s.avail_out),p=u+(s.avail_out-257),d=o.dmax,_=o.wsize,g=o.whave,m=o.wnext,f=o.window,x=o.hold,S=o.bits,y=o.lencode,C=o.distcode,I=(1<<o.lenbits)-1,L=(1<<o.distbits)-1;e:do{S<15&&(x+=b[c++]<<S,S+=8,x+=b[c++]<<S,S+=8),D=y[x&I];t:for(;;){if(x>>>=E=D>>>24,S-=E,(E=D>>>16&255)===0)W[u++]=65535&D;else{if(!(16&E)){if(!(64&E)){D=y[(65535&D)+(x&(1<<E)-1)];continue t}if(32&E){o.mode=12;break e}s.msg="invalid literal/length code",o.mode=30;break e}w=65535&D,(E&=15)&&(S<E&&(x+=b[c++]<<S,S+=8),w+=x&(1<<E)-1,x>>>=E,S-=E),S<15&&(x+=b[c++]<<S,S+=8,x+=b[c++]<<S,S+=8),D=C[x&L];n:for(;;){if(x>>>=E=D>>>24,S-=E,!(16&(E=D>>>16&255))){if(!(64&E)){D=C[(65535&D)+(x&(1<<E)-1)];continue n}s.msg="invalid distance code",o.mode=30;break e}if(B=65535&D,S<(E&=15)&&(x+=b[c++]<<S,(S+=8)<E&&(x+=b[c++]<<S,S+=8)),d<(B+=x&(1<<E)-1)){s.msg="invalid distance too far back",o.mode=30;break e}if(x>>>=E,S-=E,(E=u-h)<B){if(g<(E=B-E)&&o.sane){s.msg="invalid distance too far back",o.mode=30;break e}if(z=f,(R=0)===m){if(R+=_-E,E<w){for(w-=E;W[u++]=f[R++],--E;);R=u-B,z=W}}else if(m<E){if(R+=_+m-E,(E-=m)<w){for(w-=E;W[u++]=f[R++],--E;);if(R=0,m<w){for(w-=E=m;W[u++]=f[R++],--E;);R=u-B,z=W}}}else if(R+=m-E,E<w){for(w-=E;W[u++]=f[R++],--E;);R=u-B,z=W}for(;2<w;)W[u++]=z[R++],W[u++]=z[R++],W[u++]=z[R++],w-=3;w&&(W[u++]=z[R++],1<w&&(W[u++]=z[R++]))}else{for(R=u-B;W[u++]=W[R++],W[u++]=W[R++],W[u++]=W[R++],2<(w-=3););w&&(W[u++]=W[R++],1<w&&(W[u++]=W[R++]))}break}}break}}while(c<l&&u<p);c-=w=S>>3,x&=(1<<(S-=w<<3))-1,s.next_in=c,s.next_out=u,s.avail_in=c<l?l-c+5:5-(c-l),s.avail_out=u<p?p-u+257:257-(u-p),o.hold=x,o.bits=S}},{}],49:[function(t,n,i){var s=t("../utils/common"),a=t("./adler32"),o=t("./crc32"),c=t("./inffast"),l=t("./inftrees"),u=1,h=2,p=0,d=-2,_=1,g=852,m=592;function f(R){return(R>>>24&255)+(R>>>8&65280)+((65280&R)<<8)+((255&R)<<24)}function x(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function S(R){var z;return R&&R.state?(z=R.state,R.total_in=R.total_out=z.total=0,R.msg="",z.wrap&&(R.adler=1&z.wrap),z.mode=_,z.last=0,z.havedict=0,z.dmax=32768,z.head=null,z.hold=0,z.bits=0,z.lencode=z.lendyn=new s.Buf32(g),z.distcode=z.distdyn=new s.Buf32(m),z.sane=1,z.back=-1,p):d}function y(R){var z;return R&&R.state?((z=R.state).wsize=0,z.whave=0,z.wnext=0,S(R)):d}function C(R,z){var b,W;return R&&R.state?(W=R.state,z<0?(b=0,z=-z):(b=1+(z>>4),z<48&&(z&=15)),z&&(z<8||15<z)?d:(W.window!==null&&W.wbits!==z&&(W.window=null),W.wrap=b,W.wbits=z,y(R))):d}function I(R,z){var b,W;return R?(W=new x,(R.state=W).window=null,(b=C(R,z))!==p&&(R.state=null),b):d}var L,D,E=!0;function w(R){if(E){var z;for(L=new s.Buf32(512),D=new s.Buf32(32),z=0;z<144;)R.lens[z++]=8;for(;z<256;)R.lens[z++]=9;for(;z<280;)R.lens[z++]=7;for(;z<288;)R.lens[z++]=8;for(l(u,R.lens,0,288,L,0,R.work,{bits:9}),z=0;z<32;)R.lens[z++]=5;l(h,R.lens,0,32,D,0,R.work,{bits:5}),E=!1}R.lencode=L,R.lenbits=9,R.distcode=D,R.distbits=5}function B(R,z,b,W){var H,Z=R.state;return Z.window===null&&(Z.wsize=1<<Z.wbits,Z.wnext=0,Z.whave=0,Z.window=new s.Buf8(Z.wsize)),W>=Z.wsize?(s.arraySet(Z.window,z,b-Z.wsize,Z.wsize,0),Z.wnext=0,Z.whave=Z.wsize):(W<(H=Z.wsize-Z.wnext)&&(H=W),s.arraySet(Z.window,z,b-W,H,Z.wnext),(W-=H)?(s.arraySet(Z.window,z,b-W,W,0),Z.wnext=W,Z.whave=Z.wsize):(Z.wnext+=H,Z.wnext===Z.wsize&&(Z.wnext=0),Z.whave<Z.wsize&&(Z.whave+=H))),0}i.inflateReset=y,i.inflateReset2=C,i.inflateResetKeep=S,i.inflateInit=function(R){return I(R,15)},i.inflateInit2=I,i.inflate=function(R,z){var b,W,H,Z,J,Q,fe,X,K,_e,j,Y,ce,de,xe,we,Be,Qe,tt,pt,v,me,re,V,O=0,$=new s.Buf8(4),oe=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!R||!R.state||!R.output||!R.input&&R.avail_in!==0)return d;(b=R.state).mode===12&&(b.mode=13),J=R.next_out,H=R.output,fe=R.avail_out,Z=R.next_in,W=R.input,Q=R.avail_in,X=b.hold,K=b.bits,_e=Q,j=fe,me=p;e:for(;;)switch(b.mode){case _:if(b.wrap===0){b.mode=13;break}for(;K<16;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}if(2&b.wrap&&X===35615){$[b.check=0]=255&X,$[1]=X>>>8&255,b.check=o(b.check,$,2,0),K=X=0,b.mode=2;break}if(b.flags=0,b.head&&(b.head.done=!1),!(1&b.wrap)||(((255&X)<<8)+(X>>8))%31){R.msg="incorrect header check",b.mode=30;break}if((15&X)!=8){R.msg="unknown compression method",b.mode=30;break}if(K-=4,v=8+(15&(X>>>=4)),b.wbits===0)b.wbits=v;else if(v>b.wbits){R.msg="invalid window size",b.mode=30;break}b.dmax=1<<v,R.adler=b.check=1,b.mode=512&X?10:12,K=X=0;break;case 2:for(;K<16;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}if(b.flags=X,(255&b.flags)!=8){R.msg="unknown compression method",b.mode=30;break}if(57344&b.flags){R.msg="unknown header flags set",b.mode=30;break}b.head&&(b.head.text=X>>8&1),512&b.flags&&($[0]=255&X,$[1]=X>>>8&255,b.check=o(b.check,$,2,0)),K=X=0,b.mode=3;case 3:for(;K<32;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}b.head&&(b.head.time=X),512&b.flags&&($[0]=255&X,$[1]=X>>>8&255,$[2]=X>>>16&255,$[3]=X>>>24&255,b.check=o(b.check,$,4,0)),K=X=0,b.mode=4;case 4:for(;K<16;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}b.head&&(b.head.xflags=255&X,b.head.os=X>>8),512&b.flags&&($[0]=255&X,$[1]=X>>>8&255,b.check=o(b.check,$,2,0)),K=X=0,b.mode=5;case 5:if(1024&b.flags){for(;K<16;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}b.length=X,b.head&&(b.head.extra_len=X),512&b.flags&&($[0]=255&X,$[1]=X>>>8&255,b.check=o(b.check,$,2,0)),K=X=0}else b.head&&(b.head.extra=null);b.mode=6;case 6:if(1024&b.flags&&(Q<(Y=b.length)&&(Y=Q),Y&&(b.head&&(v=b.head.extra_len-b.length,b.head.extra||(b.head.extra=new Array(b.head.extra_len)),s.arraySet(b.head.extra,W,Z,Y,v)),512&b.flags&&(b.check=o(b.check,W,Y,Z)),Q-=Y,Z+=Y,b.length-=Y),b.length))break e;b.length=0,b.mode=7;case 7:if(2048&b.flags){if(Q===0)break e;for(Y=0;v=W[Z+Y++],b.head&&v&&b.length<65536&&(b.head.name+=String.fromCharCode(v)),v&&Y<Q;);if(512&b.flags&&(b.check=o(b.check,W,Y,Z)),Q-=Y,Z+=Y,v)break e}else b.head&&(b.head.name=null);b.length=0,b.mode=8;case 8:if(4096&b.flags){if(Q===0)break e;for(Y=0;v=W[Z+Y++],b.head&&v&&b.length<65536&&(b.head.comment+=String.fromCharCode(v)),v&&Y<Q;);if(512&b.flags&&(b.check=o(b.check,W,Y,Z)),Q-=Y,Z+=Y,v)break e}else b.head&&(b.head.comment=null);b.mode=9;case 9:if(512&b.flags){for(;K<16;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}if(X!==(65535&b.check)){R.msg="header crc mismatch",b.mode=30;break}K=X=0}b.head&&(b.head.hcrc=b.flags>>9&1,b.head.done=!0),R.adler=b.check=0,b.mode=12;break;case 10:for(;K<32;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}R.adler=b.check=f(X),K=X=0,b.mode=11;case 11:if(b.havedict===0)return R.next_out=J,R.avail_out=fe,R.next_in=Z,R.avail_in=Q,b.hold=X,b.bits=K,2;R.adler=b.check=1,b.mode=12;case 12:if(z===5||z===6)break e;case 13:if(b.last){X>>>=7&K,K-=7&K,b.mode=27;break}for(;K<3;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}switch(b.last=1&X,K-=1,3&(X>>>=1)){case 0:b.mode=14;break;case 1:if(w(b),b.mode=20,z!==6)break;X>>>=2,K-=2;break e;case 2:b.mode=17;break;case 3:R.msg="invalid block type",b.mode=30}X>>>=2,K-=2;break;case 14:for(X>>>=7&K,K-=7&K;K<32;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}if((65535&X)!=(X>>>16^65535)){R.msg="invalid stored block lengths",b.mode=30;break}if(b.length=65535&X,K=X=0,b.mode=15,z===6)break e;case 15:b.mode=16;case 16:if(Y=b.length){if(Q<Y&&(Y=Q),fe<Y&&(Y=fe),Y===0)break e;s.arraySet(H,W,Z,Y,J),Q-=Y,Z+=Y,fe-=Y,J+=Y,b.length-=Y;break}b.mode=12;break;case 17:for(;K<14;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}if(b.nlen=257+(31&X),X>>>=5,K-=5,b.ndist=1+(31&X),X>>>=5,K-=5,b.ncode=4+(15&X),X>>>=4,K-=4,286<b.nlen||30<b.ndist){R.msg="too many length or distance symbols",b.mode=30;break}b.have=0,b.mode=18;case 18:for(;b.have<b.ncode;){for(;K<3;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}b.lens[oe[b.have++]]=7&X,X>>>=3,K-=3}for(;b.have<19;)b.lens[oe[b.have++]]=0;if(b.lencode=b.lendyn,b.lenbits=7,re={bits:b.lenbits},me=l(0,b.lens,0,19,b.lencode,0,b.work,re),b.lenbits=re.bits,me){R.msg="invalid code lengths set",b.mode=30;break}b.have=0,b.mode=19;case 19:for(;b.have<b.nlen+b.ndist;){for(;we=(O=b.lencode[X&(1<<b.lenbits)-1])>>>16&255,Be=65535&O,!((xe=O>>>24)<=K);){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}if(Be<16)X>>>=xe,K-=xe,b.lens[b.have++]=Be;else{if(Be===16){for(V=xe+2;K<V;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}if(X>>>=xe,K-=xe,b.have===0){R.msg="invalid bit length repeat",b.mode=30;break}v=b.lens[b.have-1],Y=3+(3&X),X>>>=2,K-=2}else if(Be===17){for(V=xe+3;K<V;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}K-=xe,v=0,Y=3+(7&(X>>>=xe)),X>>>=3,K-=3}else{for(V=xe+7;K<V;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}K-=xe,v=0,Y=11+(127&(X>>>=xe)),X>>>=7,K-=7}if(b.have+Y>b.nlen+b.ndist){R.msg="invalid bit length repeat",b.mode=30;break}for(;Y--;)b.lens[b.have++]=v}}if(b.mode===30)break;if(b.lens[256]===0){R.msg="invalid code -- missing end-of-block",b.mode=30;break}if(b.lenbits=9,re={bits:b.lenbits},me=l(u,b.lens,0,b.nlen,b.lencode,0,b.work,re),b.lenbits=re.bits,me){R.msg="invalid literal/lengths set",b.mode=30;break}if(b.distbits=6,b.distcode=b.distdyn,re={bits:b.distbits},me=l(h,b.lens,b.nlen,b.ndist,b.distcode,0,b.work,re),b.distbits=re.bits,me){R.msg="invalid distances set",b.mode=30;break}if(b.mode=20,z===6)break e;case 20:b.mode=21;case 21:if(6<=Q&&258<=fe){R.next_out=J,R.avail_out=fe,R.next_in=Z,R.avail_in=Q,b.hold=X,b.bits=K,c(R,j),J=R.next_out,H=R.output,fe=R.avail_out,Z=R.next_in,W=R.input,Q=R.avail_in,X=b.hold,K=b.bits,b.mode===12&&(b.back=-1);break}for(b.back=0;we=(O=b.lencode[X&(1<<b.lenbits)-1])>>>16&255,Be=65535&O,!((xe=O>>>24)<=K);){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}if(we&&!(240&we)){for(Qe=xe,tt=we,pt=Be;we=(O=b.lencode[pt+((X&(1<<Qe+tt)-1)>>Qe)])>>>16&255,Be=65535&O,!(Qe+(xe=O>>>24)<=K);){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}X>>>=Qe,K-=Qe,b.back+=Qe}if(X>>>=xe,K-=xe,b.back+=xe,b.length=Be,we===0){b.mode=26;break}if(32&we){b.back=-1,b.mode=12;break}if(64&we){R.msg="invalid literal/length code",b.mode=30;break}b.extra=15&we,b.mode=22;case 22:if(b.extra){for(V=b.extra;K<V;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}b.length+=X&(1<<b.extra)-1,X>>>=b.extra,K-=b.extra,b.back+=b.extra}b.was=b.length,b.mode=23;case 23:for(;we=(O=b.distcode[X&(1<<b.distbits)-1])>>>16&255,Be=65535&O,!((xe=O>>>24)<=K);){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}if(!(240&we)){for(Qe=xe,tt=we,pt=Be;we=(O=b.distcode[pt+((X&(1<<Qe+tt)-1)>>Qe)])>>>16&255,Be=65535&O,!(Qe+(xe=O>>>24)<=K);){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}X>>>=Qe,K-=Qe,b.back+=Qe}if(X>>>=xe,K-=xe,b.back+=xe,64&we){R.msg="invalid distance code",b.mode=30;break}b.offset=Be,b.extra=15&we,b.mode=24;case 24:if(b.extra){for(V=b.extra;K<V;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}b.offset+=X&(1<<b.extra)-1,X>>>=b.extra,K-=b.extra,b.back+=b.extra}if(b.offset>b.dmax){R.msg="invalid distance too far back",b.mode=30;break}b.mode=25;case 25:if(fe===0)break e;if(Y=j-fe,b.offset>Y){if((Y=b.offset-Y)>b.whave&&b.sane){R.msg="invalid distance too far back",b.mode=30;break}ce=Y>b.wnext?(Y-=b.wnext,b.wsize-Y):b.wnext-Y,Y>b.length&&(Y=b.length),de=b.window}else de=H,ce=J-b.offset,Y=b.length;for(fe<Y&&(Y=fe),fe-=Y,b.length-=Y;H[J++]=de[ce++],--Y;);b.length===0&&(b.mode=21);break;case 26:if(fe===0)break e;H[J++]=b.length,fe--,b.mode=21;break;case 27:if(b.wrap){for(;K<32;){if(Q===0)break e;Q--,X|=W[Z++]<<K,K+=8}if(j-=fe,R.total_out+=j,b.total+=j,j&&(R.adler=b.check=b.flags?o(b.check,H,j,J-j):a(b.check,H,j,J-j)),j=fe,(b.flags?X:f(X))!==b.check){R.msg="incorrect data check",b.mode=30;break}K=X=0}b.mode=28;case 28:if(b.wrap&&b.flags){for(;K<32;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}if(X!==(4294967295&b.total)){R.msg="incorrect length check",b.mode=30;break}K=X=0}b.mode=29;case 29:me=1;break e;case 30:me=-3;break e;case 31:return-4;case 32:default:return d}return R.next_out=J,R.avail_out=fe,R.next_in=Z,R.avail_in=Q,b.hold=X,b.bits=K,(b.wsize||j!==R.avail_out&&b.mode<30&&(b.mode<27||z!==4))&&B(R,R.output,R.next_out,j-R.avail_out)?(b.mode=31,-4):(_e-=R.avail_in,j-=R.avail_out,R.total_in+=_e,R.total_out+=j,b.total+=j,b.wrap&&j&&(R.adler=b.check=b.flags?o(b.check,H,j,R.next_out-j):a(b.check,H,j,R.next_out-j)),R.data_type=b.bits+(b.last?64:0)+(b.mode===12?128:0)+(b.mode===20||b.mode===15?256:0),(_e==0&&j===0||z===4)&&me===p&&(me=-5),me)},i.inflateEnd=function(R){if(!R||!R.state)return d;var z=R.state;return z.window&&(z.window=null),R.state=null,p},i.inflateGetHeader=function(R,z){var b;return R&&R.state&&2&(b=R.state).wrap?((b.head=z).done=!1,p):d},i.inflateSetDictionary=function(R,z){var b,W=z.length;return R&&R.state?(b=R.state).wrap!==0&&b.mode!==11?d:b.mode===11&&a(1,z,W,0)!==b.check?-3:B(R,z,W,W)?(b.mode=31,-4):(b.havedict=1,p):d},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,n,i){var s=t("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],l=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(u,h,p,d,_,g,m,f){var x,S,y,C,I,L,D,E,w,B=f.bits,R=0,z=0,b=0,W=0,H=0,Z=0,J=0,Q=0,fe=0,X=0,K=null,_e=0,j=new s.Buf16(16),Y=new s.Buf16(16),ce=null,de=0;for(R=0;R<=15;R++)j[R]=0;for(z=0;z<d;z++)j[h[p+z]]++;for(H=B,W=15;1<=W&&j[W]===0;W--);if(W<H&&(H=W),W===0)return _[g++]=20971520,_[g++]=20971520,f.bits=1,0;for(b=1;b<W&&j[b]===0;b++);for(H<b&&(H=b),R=Q=1;R<=15;R++)if(Q<<=1,(Q-=j[R])<0)return-1;if(0<Q&&(u===0||W!==1))return-1;for(Y[1]=0,R=1;R<15;R++)Y[R+1]=Y[R]+j[R];for(z=0;z<d;z++)h[p+z]!==0&&(m[Y[h[p+z]]++]=z);if(L=u===0?(K=ce=m,19):u===1?(K=a,_e-=257,ce=o,de-=257,256):(K=c,ce=l,-1),R=b,I=g,J=z=X=0,y=-1,C=(fe=1<<(Z=H))-1,u===1&&852<fe||u===2&&592<fe)return 1;for(;;){for(D=R-J,w=m[z]<L?(E=0,m[z]):m[z]>L?(E=ce[de+m[z]],K[_e+m[z]]):(E=96,0),x=1<<R-J,b=S=1<<Z;_[I+(X>>J)+(S-=x)]=D<<24|E<<16|w|0,S!==0;);for(x=1<<R-1;X&x;)x>>=1;if(x!==0?(X&=x-1,X+=x):X=0,z++,--j[R]==0){if(R===W)break;R=h[p+m[z]]}if(H<R&&(X&C)!==y){for(J===0&&(J=H),I+=b,Q=1<<(Z=R-J);Z+J<W&&!((Q-=j[Z+J])<=0);)Z++,Q<<=1;if(fe+=1<<Z,u===1&&852<fe||u===2&&592<fe)return 1;_[y=X&C]=H<<24|Z<<16|I-g|0}}return X!==0&&(_[I+X]=R-J<<24|64<<16|0),f.bits=H,0}},{"../utils/common":41}],51:[function(t,n,i){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,n,i){var s=t("../utils/common"),a=0,o=1;function c(O){for(var $=O.length;0<=--$;)O[$]=0}var l=0,u=29,h=256,p=h+1+u,d=30,_=19,g=2*p+1,m=15,f=16,x=7,S=256,y=16,C=17,I=18,L=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],D=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],E=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],B=new Array(2*(p+2));c(B);var R=new Array(2*d);c(R);var z=new Array(512);c(z);var b=new Array(256);c(b);var W=new Array(u);c(W);var H,Z,J,Q=new Array(d);function fe(O,$,oe,P,M){this.static_tree=O,this.extra_bits=$,this.extra_base=oe,this.elems=P,this.max_length=M,this.has_stree=O&&O.length}function X(O,$){this.dyn_tree=O,this.max_code=0,this.stat_desc=$}function K(O){return O<256?z[O]:z[256+(O>>>7)]}function _e(O,$){O.pending_buf[O.pending++]=255&$,O.pending_buf[O.pending++]=$>>>8&255}function j(O,$,oe){O.bi_valid>f-oe?(O.bi_buf|=$<<O.bi_valid&65535,_e(O,O.bi_buf),O.bi_buf=$>>f-O.bi_valid,O.bi_valid+=oe-f):(O.bi_buf|=$<<O.bi_valid&65535,O.bi_valid+=oe)}function Y(O,$,oe){j(O,oe[2*$],oe[2*$+1])}function ce(O,$){for(var oe=0;oe|=1&O,O>>>=1,oe<<=1,0<--$;);return oe>>>1}function de(O,$,oe){var P,M,G=new Array(m+1),se=0;for(P=1;P<=m;P++)G[P]=se=se+oe[P-1]<<1;for(M=0;M<=$;M++){var ne=O[2*M+1];ne!==0&&(O[2*M]=ce(G[ne]++,ne))}}function xe(O){var $;for($=0;$<p;$++)O.dyn_ltree[2*$]=0;for($=0;$<d;$++)O.dyn_dtree[2*$]=0;for($=0;$<_;$++)O.bl_tree[2*$]=0;O.dyn_ltree[2*S]=1,O.opt_len=O.static_len=0,O.last_lit=O.matches=0}function we(O){8<O.bi_valid?_e(O,O.bi_buf):0<O.bi_valid&&(O.pending_buf[O.pending++]=O.bi_buf),O.bi_buf=0,O.bi_valid=0}function Be(O,$,oe,P){var M=2*$,G=2*oe;return O[M]<O[G]||O[M]===O[G]&&P[$]<=P[oe]}function Qe(O,$,oe){for(var P=O.heap[oe],M=oe<<1;M<=O.heap_len&&(M<O.heap_len&&Be($,O.heap[M+1],O.heap[M],O.depth)&&M++,!Be($,P,O.heap[M],O.depth));)O.heap[oe]=O.heap[M],oe=M,M<<=1;O.heap[oe]=P}function tt(O,$,oe){var P,M,G,se,ne=0;if(O.last_lit!==0)for(;P=O.pending_buf[O.d_buf+2*ne]<<8|O.pending_buf[O.d_buf+2*ne+1],M=O.pending_buf[O.l_buf+ne],ne++,P===0?Y(O,M,$):(Y(O,(G=b[M])+h+1,$),(se=L[G])!==0&&j(O,M-=W[G],se),Y(O,G=K(--P),oe),(se=D[G])!==0&&j(O,P-=Q[G],se)),ne<O.last_lit;);Y(O,S,$)}function pt(O,$){var oe,P,M,G=$.dyn_tree,se=$.stat_desc.static_tree,ne=$.stat_desc.has_stree,ae=$.stat_desc.elems,Te=-1;for(O.heap_len=0,O.heap_max=g,oe=0;oe<ae;oe++)G[2*oe]!==0?(O.heap[++O.heap_len]=Te=oe,O.depth[oe]=0):G[2*oe+1]=0;for(;O.heap_len<2;)G[2*(M=O.heap[++O.heap_len]=Te<2?++Te:0)]=1,O.depth[M]=0,O.opt_len--,ne&&(O.static_len-=se[2*M+1]);for($.max_code=Te,oe=O.heap_len>>1;1<=oe;oe--)Qe(O,G,oe);for(M=ae;oe=O.heap[1],O.heap[1]=O.heap[O.heap_len--],Qe(O,G,1),P=O.heap[1],O.heap[--O.heap_max]=oe,O.heap[--O.heap_max]=P,G[2*M]=G[2*oe]+G[2*P],O.depth[M]=(O.depth[oe]>=O.depth[P]?O.depth[oe]:O.depth[P])+1,G[2*oe+1]=G[2*P+1]=M,O.heap[1]=M++,Qe(O,G,1),2<=O.heap_len;);O.heap[--O.heap_max]=O.heap[1],function(ye,Re){var ct,be,Fe,Ne,Ze,Oe,nt=Re.dyn_tree,it=Re.max_code,yt=Re.stat_desc.static_tree,te=Re.stat_desc.has_stree,Ce=Re.stat_desc.extra_bits,pe=Re.stat_desc.extra_base,ve=Re.stat_desc.max_length,Ie=0;for(Ne=0;Ne<=m;Ne++)ye.bl_count[Ne]=0;for(nt[2*ye.heap[ye.heap_max]+1]=0,ct=ye.heap_max+1;ct<g;ct++)ve<(Ne=nt[2*nt[2*(be=ye.heap[ct])+1]+1]+1)&&(Ne=ve,Ie++),nt[2*be+1]=Ne,it<be||(ye.bl_count[Ne]++,Ze=0,pe<=be&&(Ze=Ce[be-pe]),Oe=nt[2*be],ye.opt_len+=Oe*(Ne+Ze),te&&(ye.static_len+=Oe*(yt[2*be+1]+Ze)));if(Ie!==0){do{for(Ne=ve-1;ye.bl_count[Ne]===0;)Ne--;ye.bl_count[Ne]--,ye.bl_count[Ne+1]+=2,ye.bl_count[ve]--,Ie-=2}while(0<Ie);for(Ne=ve;Ne!==0;Ne--)for(be=ye.bl_count[Ne];be!==0;)it<(Fe=ye.heap[--ct])||(nt[2*Fe+1]!==Ne&&(ye.opt_len+=(Ne-nt[2*Fe+1])*nt[2*Fe],nt[2*Fe+1]=Ne),be--)}}(O,$),de(G,Te,O.bl_count)}function v(O,$,oe){var P,M,G=-1,se=$[1],ne=0,ae=7,Te=4;for(se===0&&(ae=138,Te=3),$[2*(oe+1)+1]=65535,P=0;P<=oe;P++)M=se,se=$[2*(P+1)+1],++ne<ae&&M===se||(ne<Te?O.bl_tree[2*M]+=ne:M!==0?(M!==G&&O.bl_tree[2*M]++,O.bl_tree[2*y]++):ne<=10?O.bl_tree[2*C]++:O.bl_tree[2*I]++,G=M,Te=(ne=0)===se?(ae=138,3):M===se?(ae=6,3):(ae=7,4))}function me(O,$,oe){var P,M,G=-1,se=$[1],ne=0,ae=7,Te=4;for(se===0&&(ae=138,Te=3),P=0;P<=oe;P++)if(M=se,se=$[2*(P+1)+1],!(++ne<ae&&M===se)){if(ne<Te)for(;Y(O,M,O.bl_tree),--ne!=0;);else M!==0?(M!==G&&(Y(O,M,O.bl_tree),ne--),Y(O,y,O.bl_tree),j(O,ne-3,2)):ne<=10?(Y(O,C,O.bl_tree),j(O,ne-3,3)):(Y(O,I,O.bl_tree),j(O,ne-11,7));G=M,Te=(ne=0)===se?(ae=138,3):M===se?(ae=6,3):(ae=7,4)}}c(Q);var re=!1;function V(O,$,oe,P){j(O,(l<<1)+(P?1:0),3),function(M,G,se,ne){we(M),_e(M,se),_e(M,~se),s.arraySet(M.pending_buf,M.window,G,se,M.pending),M.pending+=se}(O,$,oe)}i._tr_init=function(O){re||(function(){var $,oe,P,M,G,se=new Array(m+1);for(M=P=0;M<u-1;M++)for(W[M]=P,$=0;$<1<<L[M];$++)b[P++]=M;for(b[P-1]=M,M=G=0;M<16;M++)for(Q[M]=G,$=0;$<1<<D[M];$++)z[G++]=M;for(G>>=7;M<d;M++)for(Q[M]=G<<7,$=0;$<1<<D[M]-7;$++)z[256+G++]=M;for(oe=0;oe<=m;oe++)se[oe]=0;for($=0;$<=143;)B[2*$+1]=8,$++,se[8]++;for(;$<=255;)B[2*$+1]=9,$++,se[9]++;for(;$<=279;)B[2*$+1]=7,$++,se[7]++;for(;$<=287;)B[2*$+1]=8,$++,se[8]++;for(de(B,p+1,se),$=0;$<d;$++)R[2*$+1]=5,R[2*$]=ce($,5);H=new fe(B,L,h+1,p,m),Z=new fe(R,D,0,d,m),J=new fe(new Array(0),E,0,_,x)}(),re=!0),O.l_desc=new X(O.dyn_ltree,H),O.d_desc=new X(O.dyn_dtree,Z),O.bl_desc=new X(O.bl_tree,J),O.bi_buf=0,O.bi_valid=0,xe(O)},i._tr_stored_block=V,i._tr_flush_block=function(O,$,oe,P){var M,G,se=0;0<O.level?(O.strm.data_type===2&&(O.strm.data_type=function(ne){var ae,Te=4093624447;for(ae=0;ae<=31;ae++,Te>>>=1)if(1&Te&&ne.dyn_ltree[2*ae]!==0)return a;if(ne.dyn_ltree[18]!==0||ne.dyn_ltree[20]!==0||ne.dyn_ltree[26]!==0)return o;for(ae=32;ae<h;ae++)if(ne.dyn_ltree[2*ae]!==0)return o;return a}(O)),pt(O,O.l_desc),pt(O,O.d_desc),se=function(ne){var ae;for(v(ne,ne.dyn_ltree,ne.l_desc.max_code),v(ne,ne.dyn_dtree,ne.d_desc.max_code),pt(ne,ne.bl_desc),ae=_-1;3<=ae&&ne.bl_tree[2*w[ae]+1]===0;ae--);return ne.opt_len+=3*(ae+1)+5+5+4,ae}(O),M=O.opt_len+3+7>>>3,(G=O.static_len+3+7>>>3)<=M&&(M=G)):M=G=oe+5,oe+4<=M&&$!==-1?V(O,$,oe,P):O.strategy===4||G===M?(j(O,2+(P?1:0),3),tt(O,B,R)):(j(O,4+(P?1:0),3),function(ne,ae,Te,ye){var Re;for(j(ne,ae-257,5),j(ne,Te-1,5),j(ne,ye-4,4),Re=0;Re<ye;Re++)j(ne,ne.bl_tree[2*w[Re]+1],3);me(ne,ne.dyn_ltree,ae-1),me(ne,ne.dyn_dtree,Te-1)}(O,O.l_desc.max_code+1,O.d_desc.max_code+1,se+1),tt(O,O.dyn_ltree,O.dyn_dtree)),xe(O),P&&we(O)},i._tr_tally=function(O,$,oe){return O.pending_buf[O.d_buf+2*O.last_lit]=$>>>8&255,O.pending_buf[O.d_buf+2*O.last_lit+1]=255&$,O.pending_buf[O.l_buf+O.last_lit]=255&oe,O.last_lit++,$===0?O.dyn_ltree[2*oe]++:(O.matches++,$--,O.dyn_ltree[2*(b[oe]+h+1)]++,O.dyn_dtree[2*K($)]++),O.last_lit===O.lit_bufsize-1},i._tr_align=function(O){j(O,2,3),Y(O,S,B),function($){$.bi_valid===16?(_e($,$.bi_buf),$.bi_buf=0,$.bi_valid=0):8<=$.bi_valid&&($.pending_buf[$.pending++]=255&$.bi_buf,$.bi_buf>>=8,$.bi_valid-=8)}(O)}},{"../utils/common":41}],53:[function(t,n,i){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,n,i){(function(s){(function(a,o){if(!a.setImmediate){var c,l,u,h,p=1,d={},_=!1,g=a.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(a);m=m&&m.setTimeout?m:a,c={}.toString.call(a.process)==="[object process]"?function(y){process.nextTick(function(){x(y)})}:function(){if(a.postMessage&&!a.importScripts){var y=!0,C=a.onmessage;return a.onmessage=function(){y=!1},a.postMessage("","*"),a.onmessage=C,y}}()?(h="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",S,!1):a.attachEvent("onmessage",S),function(y){a.postMessage(h+y,"*")}):a.MessageChannel?((u=new MessageChannel).port1.onmessage=function(y){x(y.data)},function(y){u.port2.postMessage(y)}):g&&"onreadystatechange"in g.createElement("script")?(l=g.documentElement,function(y){var C=g.createElement("script");C.onreadystatechange=function(){x(y),C.onreadystatechange=null,l.removeChild(C),C=null},l.appendChild(C)}):function(y){setTimeout(x,0,y)},m.setImmediate=function(y){typeof y!="function"&&(y=new Function(""+y));for(var C=new Array(arguments.length-1),I=0;I<C.length;I++)C[I]=arguments[I+1];var L={callback:y,args:C};return d[p]=L,c(p),p++},m.clearImmediate=f}function f(y){delete d[y]}function x(y){if(_)setTimeout(x,0,y);else{var C=d[y];if(C){_=!0;try{(function(I){var L=I.callback,D=I.args;switch(D.length){case 0:L();break;case 1:L(D[0]);break;case 2:L(D[0],D[1]);break;case 3:L(D[0],D[1],D[2]);break;default:L.apply(o,D)}})(C)}finally{f(y),_=!1}}}}function S(y){y.source===a&&typeof y.data=="string"&&y.data.indexOf(h)===0&&x(+y.data.slice(h.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof jr<"u"?jr:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})}(ro)),ro.exports}var lv=cv();const uv=ov(lv);async function ch(r,e,t){try{const n=await hv(r);return dv(n,e,t)}catch(n){return fv(n,`Error processing ZIP file at ${r}`),new Map}}async function hv(r){const e=await fetch(r);if(!e.ok)throw new Error(`Failed to load ZIP file: ${e.statusText}`);const t=await e.arrayBuffer();return uv.loadAsync(t)}async function dv(r,e,t){const n=new Map,i=Object.entries(r.files).filter(([s,a])=>a&&!a.dir&&s.endsWith(e));for(const[s,a]of i){const o=await a.async(t);n.set(s,o)}return n}function fv(r,e){r instanceof Error?console.error(`${e}: ${r.message}`):console.error(`${e}: ${JSON.stringify(r)}`)}async function pv(r,e){return ch(r,e,"text")}async function mv(r,e){return ch(r,e,"arraybuffer")}function gv(...r){const e=new Map;return r.forEach(t=>{t.forEach((n,i)=>{e.set(i,n)})}),e}async function lh(r,e,t){const n=await Promise.all(e.map(i=>t(r,i)));return gv(...n)}async function _v(){return await lh(oh,[".obj",".urdf"],pv)}async function vv(){return await lh(oh,[".png",".STL",".glb"],mv)}async function xv(){return{textFiles:await _v(),binaryFiles:await vv()}}async function yv(){let r=null;try{r=await xv(),console.log("ZIP file loaded and extracted successfully.",r)}catch(e){console.error("Error during ZIP loading:",e)}return r||{textFiles:new Map,binaryFiles:new Map}}const bv=/^[og]\s*(.+)?/,Mv=/^mtllib /,Sv=/^usemtl /,Ev=/^usemap /,eu=/\s+/,tu=new q,ao=new q,nu=new q,iu=new q,_n=new q,qr=new Ke;function wv(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,s=this.object.geometry.normals;tu.fromArray(i,e),ao.fromArray(i,t),nu.fromArray(i,n),_n.subVectors(nu,ao),iu.subVectors(tu,ao),_n.cross(iu),_n.normalize(),s.push(_n.x,_n.y,_n.z),s.push(_n.x,_n.y,_n.z),s.push(_n.x,_n.y,_n.z)},addColor:function(e,t,n){const i=this.colors,s=this.object.geometry.colors;i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[e+0],i[e+1]),s.push(i[t+0],i[t+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,s,a,o,c,l){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),p=this.parseVertexIndex(t,u),d=this.parseVertexIndex(n,u);if(this.addVertex(h,p,d),this.addColor(h,p,d),o!==void 0&&o!==""){const _=this.normals.length;h=this.parseNormalIndex(o,_),p=this.parseNormalIndex(c,_),d=this.parseNormalIndex(l,_),this.addNormal(h,p,d)}else this.addFaceNormal(h,p,d);if(i!==void 0&&i!==""){const _=this.uvs.length;h=this.parseUVIndex(i,_),p=this.parseUVIndex(s,_),d=this.parseUVIndex(a,_),this.addUV(h,p,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,a=e.length;s<a;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,a=t.length;s<a;s++)this.addUVLine(this.parseUVIndex(t[s],i))}};return r.startObject("",!1),r}class Tv extends Fn{constructor(e){super(e),this.materials=null}load(e,t,n,i){const s=this,a=new Ns(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new wv;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let o=0,c=n.length;o<c;o++){const l=n[o].trimStart();if(l.length===0)continue;const u=l.charAt(0);if(u!=="#")if(u==="v"){const h=l.split(eu);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(qr.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6]),Ct),t.colors.push(qr.r,qr.g,qr.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const p=l.slice(1).trim().split(eu),d=[];for(let g=0,m=p.length;g<m;g++){const f=p[g];if(f.length>0){const x=f.split("/");d.push(x)}}const _=d[0];for(let g=1,m=d.length-1;g<m;g++){const f=d[g],x=d[g+1];t.addFace(_[0],f[0],x[0],_[1],f[1],x[1],_[2],f[2],x[2])}}else if(u==="l"){const h=l.substring(1).trim().split(" ");let p=[];const d=[];if(l.indexOf("/")===-1)p=h;else for(let _=0,g=h.length;_<g;_++){const m=h[_].split("/");m[0]!==""&&p.push(m[0]),m[1]!==""&&d.push(m[1])}t.addLineGeometry(p,d)}else if(u==="p"){const p=l.slice(1).trim().split(" ");t.addPointGeometry(p)}else if((i=bv.exec(l))!==null){const h=(" "+i[0].slice(1).trim()).slice(1);t.startObject(h)}else if(Sv.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(Mv.test(l))t.materialLibraries.push(l.substring(7).trim());else if(Ev.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(i=l.split(" "),i.length>1){const p=i[1].trim().toLowerCase();t.object.smooth=p!=="0"&&p!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const s=new Bn;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,c=t.objects.length;o<c;o++){const l=t.objects[o],u=l.geometry,h=l.materials,p=u.type==="Line",d=u.type==="Points";let _=!1;if(u.vertices.length===0)continue;const g=new Wt;g.setAttribute("position",new St(u.vertices,3)),u.normals.length>0&&g.setAttribute("normal",new St(u.normals,3)),u.colors.length>0&&(_=!0,g.setAttribute("color",new St(u.colors,3))),u.hasUVIndices===!0&&g.setAttribute("uv",new St(u.uvs,2));const m=[];for(let x=0,S=h.length;x<S;x++){const y=h[x],C=y.name+"_"+y.smooth+"_"+_;let I=t.materials[C];if(this.materials!==null){if(I=this.materials.create(y.name),p&&I&&!(I instanceof Oi)){const L=new Oi;on.prototype.copy.call(L,I),L.color.copy(I.color),I=L}else if(d&&I&&!(I instanceof ps)){const L=new ps({size:10,sizeAttenuation:!1});on.prototype.copy.call(L,I),L.color.copy(I.color),L.map=I.map,I=L}}I===void 0&&(p?I=new Oi:d?I=new ps({size:1,sizeAttenuation:!1}):I=new vs,I.name=y.name,I.flatShading=!y.smooth,I.vertexColors=_,t.materials[C]=I),m.push(I)}let f;if(m.length>1){for(let x=0,S=h.length;x<S;x++){const y=h[x];g.addGroup(y.groupStart,y.groupCount,x)}p?f=new ha(g,m):d?f=new ra(g,m):f=new It(g,m)}else p?f=new ha(g,m[0]):d?f=new ra(g,m[0]):f=new It(g,m[0]);f.name=l.name,s.add(f)}else if(t.vertices.length>0){const o=new ps({size:1,sizeAttenuation:!1}),c=new Wt;c.setAttribute("position",new St(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new St(t.colors,3)),o.vertexColors=!0);const l=new ra(c,o);s.add(l)}return s}}function Av(r){r.traverse(e=>{if(e.isMesh){const t=e;t.material||(t.material=new ji({color:8947848}))}})}function Rv(r,e){const t=r.textFiles.get(e);let n=null;return t&&(n=new Tv().parse(t),Av(n)),n}function Cv(r){let e=new Map;const t=[];for(const i of t){var n=Rv(r,sv[i]);n&&e.set(i,n)}return e}class Iv extends Fn{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Ns(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e){function t(l){const u=new DataView(l),h=32/8*3+32/8*3*3+16/8,p=u.getUint32(80,!0);if(80+32/8+p*h===u.byteLength)return!0;const _=[115,111,108,105,100];for(let g=0;g<5;g++)if(n(_,u,g))return!1;return!0}function n(l,u,h){for(let p=0,d=l.length;p<d;p++)if(l[p]!==u.getUint8(h+p))return!1;return!0}function i(l){const u=new DataView(l),h=u.getUint32(80,!0);let p,d,_,g=!1,m,f,x,S,y;for(let B=0;B<70;B++)u.getUint32(B,!1)==1129270351&&u.getUint8(B+4)==82&&u.getUint8(B+5)==61&&(g=!0,m=new Float32Array(h*3*3),f=u.getUint8(B+6)/255,x=u.getUint8(B+7)/255,S=u.getUint8(B+8)/255,y=u.getUint8(B+9)/255);const C=84,I=12*4+2,L=new Wt,D=new Float32Array(h*3*3),E=new Float32Array(h*3*3),w=new Ke;for(let B=0;B<h;B++){const R=C+B*I,z=u.getFloat32(R,!0),b=u.getFloat32(R+4,!0),W=u.getFloat32(R+8,!0);if(g){const H=u.getUint16(R+48,!0);H&32768?(p=f,d=x,_=S):(p=(H&31)/31,d=(H>>5&31)/31,_=(H>>10&31)/31)}for(let H=1;H<=3;H++){const Z=R+H*12,J=B*3*3+(H-1)*3;D[J]=u.getFloat32(Z,!0),D[J+1]=u.getFloat32(Z+4,!0),D[J+2]=u.getFloat32(Z+8,!0),E[J]=z,E[J+1]=b,E[J+2]=W,g&&(w.setRGB(p,d,_,Ct),m[J]=w.r,m[J+1]=w.g,m[J+2]=w.b)}}return L.setAttribute("position",new Ht(D,3)),L.setAttribute("normal",new Ht(E,3)),g&&(L.setAttribute("color",new Ht(m,3)),L.hasColors=!0,L.alpha=y),L}function s(l){const u=new Wt,h=/solid([\s\S]*?)endsolid/g,p=/facet([\s\S]*?)endfacet/g,d=/solid\s(.+)/;let _=0;const g=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+g+g+g,"g"),f=new RegExp("normal"+g+g+g,"g"),x=[],S=[],y=[],C=new q;let I,L=0,D=0,E=0;for(;(I=h.exec(l))!==null;){D=E;const w=I[0],B=(I=d.exec(w))!==null?I[1]:"";for(y.push(B);(I=p.exec(w))!==null;){let b=0,W=0;const H=I[0];for(;(I=f.exec(H))!==null;)C.x=parseFloat(I[1]),C.y=parseFloat(I[2]),C.z=parseFloat(I[3]),W++;for(;(I=m.exec(H))!==null;)x.push(parseFloat(I[1]),parseFloat(I[2]),parseFloat(I[3])),S.push(C.x,C.y,C.z),b++,E++;W!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+_),b!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+_),_++}const R=D,z=E-D;u.userData.groupNames=y,u.addGroup(R,z,L),L++}return u.setAttribute("position",new St(x,3)),u.setAttribute("normal",new St(S,3)),u}function a(l){return typeof l!="string"?new TextDecoder().decode(l):l}function o(l){if(typeof l=="string"){const u=new Uint8Array(l.length);for(let h=0;h<l.length;h++)u[h]=l.charCodeAt(h)&255;return u.buffer||u}else return l}const c=o(e);return t(c)?i(c):s(a(e))}}class su extends s0{constructor(e){super(e)}parse(e){function t(H){switch(H.image_type){case p:case g:if(H.colormap_length>256||H.colormap_size!==24||H.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case d:case _:case m:case f:if(H.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case h:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+H.image_type)}if(H.width<=0||H.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(H.pixel_size!==8&&H.pixel_size!==16&&H.pixel_size!==24&&H.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+H.pixel_size)}function n(H,Z,J,Q,fe){let X,K;const _e=J.pixel_size>>3,j=J.width*J.height*_e;if(Z&&(K=fe.subarray(Q,Q+=J.colormap_length*(J.colormap_size>>3))),H){X=new Uint8Array(j);let Y,ce,de,xe=0;const we=new Uint8Array(_e);for(;xe<j;)if(Y=fe[Q++],ce=(Y&127)+1,Y&128){for(de=0;de<_e;++de)we[de]=fe[Q++];for(de=0;de<ce;++de)X.set(we,xe+de*_e);xe+=_e*ce}else{for(ce*=_e,de=0;de<ce;++de)X[xe+de]=fe[Q++];xe+=ce}}else X=fe.subarray(Q,Q+=Z?J.width*J.height:j);return{pixel_data:X,palettes:K}}function i(H,Z,J,Q,fe,X,K,_e,j){const Y=j;let ce,de=0,xe,we;const Be=w.width;for(we=Z;we!==Q;we+=J)for(xe=fe;xe!==K;xe+=X,de++)ce=_e[de],H[(xe+Be*we)*4+3]=255,H[(xe+Be*we)*4+2]=Y[ce*3+0],H[(xe+Be*we)*4+1]=Y[ce*3+1],H[(xe+Be*we)*4+0]=Y[ce*3+2];return H}function s(H,Z,J,Q,fe,X,K,_e){let j,Y=0,ce,de;const xe=w.width;for(de=Z;de!==Q;de+=J)for(ce=fe;ce!==K;ce+=X,Y+=2)j=_e[Y+0]+(_e[Y+1]<<8),H[(ce+xe*de)*4+0]=(j&31744)>>7,H[(ce+xe*de)*4+1]=(j&992)>>2,H[(ce+xe*de)*4+2]=(j&31)<<3,H[(ce+xe*de)*4+3]=j&32768?0:255;return H}function a(H,Z,J,Q,fe,X,K,_e){let j=0,Y,ce;const de=w.width;for(ce=Z;ce!==Q;ce+=J)for(Y=fe;Y!==K;Y+=X,j+=3)H[(Y+de*ce)*4+3]=255,H[(Y+de*ce)*4+2]=_e[j+0],H[(Y+de*ce)*4+1]=_e[j+1],H[(Y+de*ce)*4+0]=_e[j+2];return H}function o(H,Z,J,Q,fe,X,K,_e){let j=0,Y,ce;const de=w.width;for(ce=Z;ce!==Q;ce+=J)for(Y=fe;Y!==K;Y+=X,j+=4)H[(Y+de*ce)*4+2]=_e[j+0],H[(Y+de*ce)*4+1]=_e[j+1],H[(Y+de*ce)*4+0]=_e[j+2],H[(Y+de*ce)*4+3]=_e[j+3];return H}function c(H,Z,J,Q,fe,X,K,_e){let j,Y=0,ce,de;const xe=w.width;for(de=Z;de!==Q;de+=J)for(ce=fe;ce!==K;ce+=X,Y++)j=_e[Y],H[(ce+xe*de)*4+0]=j,H[(ce+xe*de)*4+1]=j,H[(ce+xe*de)*4+2]=j,H[(ce+xe*de)*4+3]=255;return H}function l(H,Z,J,Q,fe,X,K,_e){let j=0,Y,ce;const de=w.width;for(ce=Z;ce!==Q;ce+=J)for(Y=fe;Y!==K;Y+=X,j+=2)H[(Y+de*ce)*4+0]=_e[j+0],H[(Y+de*ce)*4+1]=_e[j+0],H[(Y+de*ce)*4+2]=_e[j+0],H[(Y+de*ce)*4+3]=_e[j+1];return H}function u(H,Z,J,Q,fe){let X,K,_e,j,Y,ce;switch((w.flags&x)>>S){default:case I:X=0,_e=1,Y=Z,K=0,j=1,ce=J;break;case y:X=0,_e=1,Y=Z,K=J-1,j=-1,ce=-1;break;case L:X=Z-1,_e=-1,Y=-1,K=0,j=1,ce=J;break;case C:X=Z-1,_e=-1,Y=-1,K=J-1,j=-1,ce=-1;break}if(z)switch(w.pixel_size){case 8:c(H,K,j,ce,X,_e,Y,Q);break;case 16:l(H,K,j,ce,X,_e,Y,Q);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(w.pixel_size){case 8:i(H,K,j,ce,X,_e,Y,Q,fe);break;case 16:s(H,K,j,ce,X,_e,Y,Q);break;case 24:a(H,K,j,ce,X,_e,Y,Q);break;case 32:o(H,K,j,ce,X,_e,Y,Q);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return H}const h=0,p=1,d=2,_=3,g=9,m=10,f=11,x=48,S=4,y=0,C=1,I=2,L=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let D=0;const E=new Uint8Array(e),w={id_length:E[D++],colormap_type:E[D++],image_type:E[D++],colormap_index:E[D++]|E[D++]<<8,colormap_length:E[D++]|E[D++]<<8,colormap_size:E[D++],origin:[E[D++]|E[D++]<<8,E[D++]|E[D++]<<8],width:E[D++]|E[D++]<<8,height:E[D++]|E[D++]<<8,pixel_size:E[D++],flags:E[D++]};if(t(w),w.id_length+D>e.length)throw new Error("THREE.TGALoader: No data.");D+=w.id_length;let B=!1,R=!1,z=!1;switch(w.image_type){case g:B=!0,R=!0;break;case p:R=!0;break;case m:B=!0;break;case d:break;case f:B=!0,z=!0;break;case _:z=!0;break}const b=new Uint8Array(w.width*w.height*4),W=n(B,R,w,D,E);return u(b,w.width,w.height,W.pixel_data,W.palettes),{data:b,width:w.width,height:w.height,flipY:!0,generateMipmaps:!0,minFilter:Pn}}}class Lv extends Fn{load(e,t,n,i){const s=this,a=s.path===""?ki.extractUrlBase(e):s.path,o=new Ns(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(c){try{t(s.parse(c,a))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e,t){function n(A,T){const U=[],N=A.childNodes;for(let k=0,he=N.length;k<he;k++){const ge=N[k];ge.nodeName===T&&U.push(ge)}return U}function i(A){if(A.length===0)return[];const T=A.trim().split(/\s+/),U=new Array(T.length);for(let N=0,k=T.length;N<k;N++)U[N]=T[N];return U}function s(A){if(A.length===0)return[];const T=A.trim().split(/\s+/),U=new Array(T.length);for(let N=0,k=T.length;N<k;N++)U[N]=parseFloat(T[N]);return U}function a(A){if(A.length===0)return[];const T=A.trim().split(/\s+/),U=new Array(T.length);for(let N=0,k=T.length;N<k;N++)U[N]=parseInt(T[N]);return U}function o(A){return A.substring(1)}function c(){return"three_default_"+_h++}function l(A){return Object.keys(A).length===0}function u(A){return{unit:h(n(A,"unit")[0]),upAxis:p(n(A,"up_axis")[0])}}function h(A){return A!==void 0&&A.hasAttribute("meter")===!0?parseFloat(A.getAttribute("meter")):1}function p(A){return A!==void 0?A.textContent:"Y_UP"}function d(A,T,U,N){const k=n(A,T)[0];if(k!==void 0){const he=n(k,U);for(let ge=0;ge<he.length;ge++)N(he[ge])}}function _(A,T){for(const U in A){const N=A[U];N.build=T(A[U])}}function g(A,T){return A.build!==void 0||(A.build=T(A)),A.build}function m(A){const T={sources:{},samplers:{},channels:{}};let U=!1;for(let N=0,k=A.childNodes.length;N<k;N++){const he=A.childNodes[N];if(he.nodeType!==1)continue;let ge;switch(he.nodeName){case"source":ge=he.getAttribute("id"),T.sources[ge]=pe(he);break;case"sampler":ge=he.getAttribute("id"),T.samplers[ge]=f(he);break;case"channel":ge=he.getAttribute("target"),T.channels[ge]=x(he);break;case"animation":m(he),U=!0;break;default:console.log(he)}}U===!1&&(Je.animations[A.getAttribute("id")||In.generateUUID()]=T)}function f(A){const T={inputs:{}};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const he=o(k.getAttribute("source")),ge=k.getAttribute("semantic");T.inputs[ge]=he;break}}return T}function x(A){const T={};let N=A.getAttribute("target").split("/");const k=N.shift();let he=N.shift();const ge=he.indexOf("(")!==-1,ke=he.indexOf(".")!==-1;if(ke)N=he.split("."),he=N.shift(),T.member=N.shift();else if(ge){const Ae=he.split("(");he=Ae.shift();for(let Ue=0;Ue<Ae.length;Ue++)Ae[Ue]=parseInt(Ae[Ue].replace(/\)/,""));T.indices=Ae}return T.id=k,T.sid=he,T.arraySyntax=ge,T.memberSyntax=ke,T.sampler=o(A.getAttribute("source")),T}function S(A){const T=[],U=A.channels,N=A.samplers,k=A.sources;for(const he in U)if(U.hasOwnProperty(he)){const ge=U[he],ke=N[ge.sampler],Ae=ke.inputs.INPUT,Ue=ke.inputs.OUTPUT,Xe=k[Ae],Me=k[Ue],je=C(ge,Xe,Me);w(je,T)}return T}function y(A){return g(Je.animations[A],S)}function C(A,T,U){const N=Je.nodes[A.id],k=Ut(N.id),he=N.transforms[A.sid],ge=N.matrix.clone().transpose();let ke,Ae,Ue,Xe,Me,je;const ze={};switch(he){case"matrix":for(Ue=0,Xe=T.array.length;Ue<Xe;Ue++)if(ke=T.array[Ue],Ae=Ue*U.stride,ze[ke]===void 0&&(ze[ke]={}),A.arraySyntax===!0){const Nt=U.array[Ae],wt=A.indices[0]+4*A.indices[1];ze[ke][wt]=Nt}else for(Me=0,je=U.stride;Me<je;Me++)ze[ke][Me]=U.array[Ae+Me];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',he);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',he);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',he);break}const $e=I(ze,ge);return{name:k.uuid,keyframes:$e}}function I(A,T){const U=[];for(const k in A)U.push({time:parseFloat(k),value:A[k]});U.sort(N);for(let k=0;k<16;k++)B(U,k,T.elements[k]);return U;function N(k,he){return k.time-he.time}}const L=new q,D=new q,E=new tn;function w(A,T){const U=A.keyframes,N=A.name,k=[],he=[],ge=[],ke=[];for(let Ae=0,Ue=U.length;Ae<Ue;Ae++){const Xe=U[Ae],Me=Xe.time,je=Xe.value;ee.fromArray(je).transpose(),ee.decompose(L,E,D),k.push(Me),he.push(L.x,L.y,L.z),ge.push(E.x,E.y,E.z,E.w),ke.push(D.x,D.y,D.z)}return he.length>0&&T.push(new bi(N+".position",k,he)),ge.length>0&&T.push(new Vi(N+".quaternion",k,ge)),ke.length>0&&T.push(new bi(N+".scale",k,ke)),T}function B(A,T,U){let N,k=!0,he,ge;for(he=0,ge=A.length;he<ge;he++)N=A[he],N.value[T]===void 0?N.value[T]=null:k=!1;if(k===!0)for(he=0,ge=A.length;he<ge;he++)N=A[he],N.value[T]=U;else R(A,T)}function R(A,T){let U,N;for(let k=0,he=A.length;k<he;k++){const ge=A[k];if(ge.value[T]===null){if(U=z(A,k,T),N=b(A,k,T),U===null){ge.value[T]=N.value[T];continue}if(N===null){ge.value[T]=U.value[T];continue}W(ge,U,N,T)}}}function z(A,T,U){for(;T>=0;){const N=A[T];if(N.value[U]!==null)return N;T--}return null}function b(A,T,U){for(;T<A.length;){const N=A[T];if(N.value[U]!==null)return N;T++}return null}function W(A,T,U,N){if(U.time-T.time===0){A.value[N]=T.value[N];return}A.value[N]=(A.time-T.time)*(U.value[N]-T.value[N])/(U.time-T.time)+T.value[N]}function H(A){const T={name:A.getAttribute("id")||"default",start:parseFloat(A.getAttribute("start")||0),end:parseFloat(A.getAttribute("end")||0),animations:[]};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"instance_animation":T.animations.push(o(k.getAttribute("url")));break}}Je.clips[A.getAttribute("id")]=T}function Z(A){const T=[],U=A.name,N=A.end-A.start||-1,k=A.animations;for(let he=0,ge=k.length;he<ge;he++){const ke=y(k[he]);for(let Ae=0,Ue=ke.length;Ae<Ue;Ae++)T.push(ke[Ae])}return new rr(U,N,T)}function J(A){return g(Je.clips[A],Z)}function Q(A){const T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"skin":T.id=o(k.getAttribute("source")),T.skin=fe(k);break;case"morph":T.id=o(k.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}Je.controllers[A.getAttribute("id")]=T}function fe(A){const T={sources:{}};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"bind_shape_matrix":T.bindShapeMatrix=s(k.textContent);break;case"source":const he=k.getAttribute("id");T.sources[he]=pe(k);break;case"joints":T.joints=X(k);break;case"vertex_weights":T.vertexWeights=K(k);break}}return T}function X(A){const T={inputs:{}};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const he=k.getAttribute("semantic"),ge=o(k.getAttribute("source"));T.inputs[he]=ge;break}}return T}function K(A){const T={inputs:{}};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const he=k.getAttribute("semantic"),ge=o(k.getAttribute("source")),ke=parseInt(k.getAttribute("offset"));T.inputs[he]={id:ge,offset:ke};break;case"vcount":T.vcount=a(k.textContent);break;case"v":T.v=a(k.textContent);break}}return T}function _e(A){const T={id:A.id},U=Je.geometries[T.id];return A.skin!==void 0&&(T.skin=j(A.skin),U.sources.skinIndices=T.skin.indices,U.sources.skinWeights=T.skin.weights),T}function j(A){const U={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},N=A.sources,k=A.vertexWeights,he=k.vcount,ge=k.v,ke=k.inputs.JOINT.offset,Ae=k.inputs.WEIGHT.offset,Ue=A.sources[A.joints.inputs.JOINT],Xe=A.sources[A.joints.inputs.INV_BIND_MATRIX],Me=N[k.inputs.WEIGHT.id].array;let je=0,ze,$e,qe;for(ze=0,qe=he.length;ze<qe;ze++){const wt=he[ze],vt=[];for($e=0;$e<wt;$e++){const xt=ge[je+ke],Xn=ge[je+Ae],an=Me[Xn];vt.push({index:xt,weight:an}),je+=2}for(vt.sort(Nt),$e=0;$e<4;$e++){const xt=vt[$e];xt!==void 0?(U.indices.array.push(xt.index),U.weights.array.push(xt.weight)):(U.indices.array.push(0),U.weights.array.push(0))}}for(A.bindShapeMatrix?U.bindMatrix=new Ye().fromArray(A.bindShapeMatrix).transpose():U.bindMatrix=new Ye().identity(),ze=0,qe=Ue.array.length;ze<qe;ze++){const wt=Ue.array[ze],vt=new Ye().fromArray(Xe.array,ze*Xe.stride).transpose();U.joints.push({name:wt,boneInverse:vt})}return U;function Nt(wt,vt){return vt.weight-wt.weight}}function Y(A){return g(Je.controllers[A],_e)}function ce(A){const T={init_from:n(A,"init_from")[0].textContent};Je.images[A.getAttribute("id")]=T}function de(A){return A.build!==void 0?A.build:A.init_from}function xe(A){const T=Je.images[A];return T!==void 0?g(T,de):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",A),null)}function we(A){const T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"profile_COMMON":T.profile=Be(k);break}}Je.effects[A.getAttribute("id")]=T}function Be(A){const T={surfaces:{},samplers:{}};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"newparam":Qe(k,T);break;case"technique":T.technique=v(k);break;case"extra":T.extra=oe(k);break}}return T}function Qe(A,T){const U=A.getAttribute("sid");for(let N=0,k=A.childNodes.length;N<k;N++){const he=A.childNodes[N];if(he.nodeType===1)switch(he.nodeName){case"surface":T.surfaces[U]=tt(he);break;case"sampler2D":T.samplers[U]=pt(he);break}}}function tt(A){const T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"init_from":T.init_from=k.textContent;break}}return T}function pt(A){const T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"source":T.source=k.textContent;break}}return T}function v(A){const T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"constant":case"lambert":case"blinn":case"phong":T.type=k.nodeName,T.parameters=me(k);break;case"extra":T.extra=oe(k);break}}return T}function me(A){const T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":T[k.nodeName]=re(k);break;case"transparent":T[k.nodeName]={opaque:k.hasAttribute("opaque")?k.getAttribute("opaque"):"A_ONE",data:re(k)};break}}return T}function re(A){const T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"color":T[k.nodeName]=s(k.textContent);break;case"float":T[k.nodeName]=parseFloat(k.textContent);break;case"texture":T[k.nodeName]={id:k.getAttribute("texture"),extra:V(k)};break}}return T}function V(A){const T={technique:{}};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"extra":O(k,T);break}}return T}function O(A,T){for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"technique":$(k,T);break}}}function $(A,T){for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":T.technique[k.nodeName]=parseFloat(k.textContent);break;case"wrapU":case"wrapV":k.textContent.toUpperCase()==="TRUE"?T.technique[k.nodeName]=1:k.textContent.toUpperCase()==="FALSE"?T.technique[k.nodeName]=0:T.technique[k.nodeName]=parseInt(k.textContent);break;case"bump":T[k.nodeName]=M(k);break}}}function oe(A){const T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"technique":T.technique=P(k);break}}return T}function P(A){const T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"double_sided":T[k.nodeName]=parseInt(k.textContent);break;case"bump":T[k.nodeName]=M(k);break}}return T}function M(A){const T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"texture":T[k.nodeName]={id:k.getAttribute("texture"),texcoord:k.getAttribute("texcoord"),extra:V(k)};break}}return T}function G(A){return A}function se(A){return g(Je.effects[A],G)}function ne(A){const T={name:A.getAttribute("name")};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"instance_effect":T.url=o(k.getAttribute("url"));break}}Je.materials[A.getAttribute("id")]=T}function ae(A){let T,U=A.slice((A.lastIndexOf(".")-1>>>0)+2);switch(U=U.toLowerCase(),U){case"tga":T=mn;break;default:T=wn}return T}function Te(A){const T=se(A.url),U=T.profile.technique;let N;switch(U.type){case"phong":case"blinn":N=new vs;break;case"lambert":N=new Y_;break;default:N=new Dn;break}N.name=A.name||"";function k(Ae,Ue=null){const Xe=T.profile.samplers[Ae.id];let Me=null;if(Xe!==void 0){const je=T.profile.surfaces[Xe.source];Me=xe(je.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),Me=xe(Ae.id);if(Me!==null){const je=ae(Me);if(je!==void 0){const ze=je.load(Me),$e=Ae.extra;if($e!==void 0&&$e.technique!==void 0&&l($e.technique)===!1){const qe=$e.technique;ze.wrapS=qe.wrapU?yn:bn,ze.wrapT=qe.wrapV?yn:bn,ze.offset.set(qe.offsetU||0,qe.offsetV||0),ze.repeat.set(qe.repeatU||1,qe.repeatV||1)}else ze.wrapS=yn,ze.wrapT=yn;return Ue!==null&&(ze.colorSpace=Ue),ze}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",Me),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",Ae.id),null}const he=U.parameters;for(const Ae in he){const Ue=he[Ae];switch(Ae){case"diffuse":Ue.color&&N.color.fromArray(Ue.color),Ue.texture&&(N.map=k(Ue.texture,Ct));break;case"specular":Ue.color&&N.specular&&N.specular.fromArray(Ue.color),Ue.texture&&(N.specularMap=k(Ue.texture));break;case"bump":Ue.texture&&(N.normalMap=k(Ue.texture));break;case"ambient":Ue.texture&&(N.lightMap=k(Ue.texture,Ct));break;case"shininess":Ue.float&&N.shininess&&(N.shininess=Ue.float);break;case"emission":Ue.color&&N.emissive&&N.emissive.fromArray(Ue.color),Ue.texture&&(N.emissiveMap=k(Ue.texture,Ct));break}}dt.toWorkingColorSpace(N.color,Ct),N.specular&&dt.toWorkingColorSpace(N.specular,Ct),N.emissive&&dt.toWorkingColorSpace(N.emissive,Ct);let ge=he.transparent,ke=he.transparency;if(ke===void 0&&ge&&(ke={float:1}),ge===void 0&&ke&&(ge={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ge&&ke)if(ge.data.texture)N.transparent=!0;else{const Ae=ge.data.color;switch(ge.opaque){case"A_ONE":N.opacity=Ae[3]*ke.float;break;case"RGB_ZERO":N.opacity=1-Ae[0]*ke.float;break;case"A_ZERO":N.opacity=1-Ae[3]*ke.float;break;case"RGB_ONE":N.opacity=Ae[0]*ke.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ge.opaque)}N.opacity<1&&(N.transparent=!0)}if(U.extra!==void 0&&U.extra.technique!==void 0){const Ae=U.extra.technique;for(const Ue in Ae){const Xe=Ae[Ue];switch(Ue){case"double_sided":N.side=Xe===1?xn:zn;break;case"bump":N.normalMap=k(Xe.texture),N.normalScale=new rt(1,1);break}}}return N}function ye(A){return g(Je.materials[A],Te)}function Re(A){const T={name:A.getAttribute("name")};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"optics":T.optics=ct(k);break}}Je.cameras[A.getAttribute("id")]=T}function ct(A){for(let T=0;T<A.childNodes.length;T++){const U=A.childNodes[T];switch(U.nodeName){case"technique_common":return be(U)}}return{}}function be(A){const T={};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];switch(N.nodeName){case"perspective":case"orthographic":T.technique=N.nodeName,T.parameters=Fe(N);break}}return T}function Fe(A){const T={};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];switch(N.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":T[N.nodeName]=parseFloat(N.textContent);break}}return T}function Ne(A){let T;switch(A.optics.technique){case"perspective":T=new Gt(A.optics.parameters.yfov,A.optics.parameters.aspect_ratio,A.optics.parameters.znear,A.optics.parameters.zfar);break;case"orthographic":let U=A.optics.parameters.ymag,N=A.optics.parameters.xmag;const k=A.optics.parameters.aspect_ratio;N=N===void 0?U*k:N,U=U===void 0?N/k:U,N*=.5,U*=.5,T=new ga(-N,N,U,-U,A.optics.parameters.znear,A.optics.parameters.zfar);break;default:T=new Gt;break}return T.name=A.name||"",T}function Ze(A){const T=Je.cameras[A];return T!==void 0?g(T,Ne):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",A),null)}function Oe(A){let T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"technique_common":T=nt(k);break}}Je.lights[A.getAttribute("id")]=T}function nt(A){const T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"directional":case"point":case"spot":case"ambient":T.technique=k.nodeName,T.parameters=it(k)}}return T}function it(A){const T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"color":const he=s(k.textContent);T.color=new Ke().fromArray(he),dt.toWorkingColorSpace(T.color,Ct);break;case"falloff_angle":T.falloffAngle=parseFloat(k.textContent);break;case"quadratic_attenuation":const ge=parseFloat(k.textContent);T.distance=ge?Math.sqrt(1/ge):0;break}}return T}function yt(A){let T;switch(A.technique){case"directional":T=new wc;break;case"point":T=new ih;break;case"spot":T=new nh;break;case"ambient":T=new sh;break}return A.parameters.color&&T.color.copy(A.parameters.color),A.parameters.distance&&(T.distance=A.parameters.distance),T}function te(A){const T=Je.lights[A];return T!==void 0?g(T,yt):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",A),null)}function Ce(A){const T={name:A.getAttribute("name"),sources:{},vertices:{},primitives:[]},U=n(A,"mesh")[0];if(U!==void 0){for(let N=0;N<U.childNodes.length;N++){const k=U.childNodes[N];if(k.nodeType!==1)continue;const he=k.getAttribute("id");switch(k.nodeName){case"source":T.sources[he]=pe(k);break;case"vertices":T.vertices=ve(k);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",k.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":T.primitives.push(Ie(k));break;default:console.log(k)}}Je.geometries[A.getAttribute("id")]=T}}function pe(A){const T={array:[],stride:3};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType===1)switch(N.nodeName){case"float_array":T.array=s(N.textContent);break;case"Name_array":T.array=i(N.textContent);break;case"technique_common":const k=n(N,"accessor")[0];k!==void 0&&(T.stride=parseInt(k.getAttribute("stride")));break}}return T}function ve(A){const T={};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];N.nodeType===1&&(T[N.getAttribute("semantic")]=o(N.getAttribute("source")))}return T}function Ie(A){const T={type:A.nodeName,material:A.getAttribute("material"),count:parseInt(A.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const he=o(k.getAttribute("source")),ge=k.getAttribute("semantic"),ke=parseInt(k.getAttribute("offset")),Ae=parseInt(k.getAttribute("set")),Ue=Ae>0?ge+Ae:ge;T.inputs[Ue]={id:he,offset:ke},T.stride=Math.max(T.stride,ke+1),ge==="TEXCOORD"&&(T.hasUV=!0);break;case"vcount":T.vcount=a(k.textContent);break;case"p":T.p=a(k.textContent);break}}return T}function De(A){const T={};for(let U=0;U<A.length;U++){const N=A[U];T[N.type]===void 0&&(T[N.type]=[]),T[N.type].push(N)}return T}function at(A){let T=0;for(let U=0,N=A.length;U<N;U++)A[U].hasUV===!0&&T++;T>0&&T<A.length&&(A.uvsNeedsFix=!0)}function Lt(A){const T={},U=A.sources,N=A.vertices,k=A.primitives;if(k.length===0)return{};const he=De(k);for(const ge in he){const ke=he[ge];at(ke),T[ge]=zt(ke,U,N)}return T}function zt(A,T,U){const N={},k={array:[],stride:0},he={array:[],stride:0},ge={array:[],stride:0},ke={array:[],stride:0},Ae={array:[],stride:0},Ue={array:[],stride:4},Xe={array:[],stride:4},Me=new Wt,je=[];let ze=0;for(let $e=0;$e<A.length;$e++){const qe=A[$e],Nt=qe.inputs;let wt=0;switch(qe.type){case"lines":case"linestrips":wt=qe.count*2;break;case"triangles":wt=qe.count*3;break;case"polylist":for(let vt=0;vt<qe.count;vt++){const xt=qe.vcount[vt];switch(xt){case 3:wt+=3;break;case 4:wt+=6;break;default:wt+=(xt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",qe.type)}Me.addGroup(ze,wt,$e),ze+=wt,qe.material&&je.push(qe.material);for(const vt in Nt){const xt=Nt[vt];switch(vt){case"VERTEX":for(const Xn in U){const an=U[Xn];switch(Xn){case"POSITION":const Yi=k.array.length;if(lt(qe,T[an],xt.offset,k.array),k.stride=T[an].stride,T.skinWeights&&T.skinIndices&&(lt(qe,T.skinIndices,xt.offset,Ue.array),lt(qe,T.skinWeights,xt.offset,Xe.array)),qe.hasUV===!1&&A.uvsNeedsFix===!0){const vh=(k.array.length-Yi)/k.stride;for(let Cc=0;Cc<vh;Cc++)ge.array.push(0,0)}break;case"NORMAL":lt(qe,T[an],xt.offset,he.array),he.stride=T[an].stride;break;case"COLOR":lt(qe,T[an],xt.offset,Ae.array),Ae.stride=T[an].stride;break;case"TEXCOORD":lt(qe,T[an],xt.offset,ge.array),ge.stride=T[an].stride;break;case"TEXCOORD1":lt(qe,T[an],xt.offset,ke.array),ge.stride=T[an].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Xn)}}break;case"NORMAL":lt(qe,T[xt.id],xt.offset,he.array),he.stride=T[xt.id].stride;break;case"COLOR":lt(qe,T[xt.id],xt.offset,Ae.array,!0),Ae.stride=T[xt.id].stride;break;case"TEXCOORD":lt(qe,T[xt.id],xt.offset,ge.array),ge.stride=T[xt.id].stride;break;case"TEXCOORD1":lt(qe,T[xt.id],xt.offset,ke.array),ke.stride=T[xt.id].stride;break}}}return k.array.length>0&&Me.setAttribute("position",new St(k.array,k.stride)),he.array.length>0&&Me.setAttribute("normal",new St(he.array,he.stride)),Ae.array.length>0&&Me.setAttribute("color",new St(Ae.array,Ae.stride)),ge.array.length>0&&Me.setAttribute("uv",new St(ge.array,ge.stride)),ke.array.length>0&&Me.setAttribute("uv1",new St(ke.array,ke.stride)),Ue.array.length>0&&Me.setAttribute("skinIndex",new St(Ue.array,Ue.stride)),Xe.array.length>0&&Me.setAttribute("skinWeight",new St(Xe.array,Xe.stride)),N.data=Me,N.type=A[0].type,N.materialKeys=je,N}function lt(A,T,U,N,k=!1){const he=A.p,ge=A.stride,ke=A.vcount;function Ae(Me){let je=he[Me+U]*Xe;const ze=je+Xe;for(;je<ze;je++)N.push(Ue[je]);if(k){const $e=N.length-Xe-1;Si.setRGB(N[$e+0],N[$e+1],N[$e+2],Ct),N[$e+0]=Si.r,N[$e+1]=Si.g,N[$e+2]=Si.b}}const Ue=T.array,Xe=T.stride;if(A.vcount!==void 0){let Me=0;for(let je=0,ze=ke.length;je<ze;je++){const $e=ke[je];if($e===4){const qe=Me+ge*0,Nt=Me+ge*1,wt=Me+ge*2,vt=Me+ge*3;Ae(qe),Ae(Nt),Ae(vt),Ae(Nt),Ae(wt),Ae(vt)}else if($e===3){const qe=Me+ge*0,Nt=Me+ge*1,wt=Me+ge*2;Ae(qe),Ae(Nt),Ae(wt)}else if($e>4)for(let qe=1,Nt=$e-2;qe<=Nt;qe++){const wt=Me+ge*0,vt=Me+ge*qe,xt=Me+ge*(qe+1);Ae(wt),Ae(vt),Ae(xt)}Me+=ge*$e}}else for(let Me=0,je=he.length;Me<je;Me+=ge)Ae(Me)}function sn(A){return g(Je.geometries[A],Lt)}function Sn(A){const T={name:A.getAttribute("name")||"",joints:{},links:[]};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType===1)switch(N.nodeName){case"technique_common":jn(N,T);break}}Je.kinematicsModels[A.getAttribute("id")]=T}function hr(A){return A.build!==void 0?A.build:A}function dr(A){return g(Je.kinematicsModels[A],hr)}function jn(A,T){for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType===1)switch(N.nodeName){case"joint":T.joints[N.getAttribute("sid")]=Ds(N);break;case"link":T.links.push(Us(N));break}}}function Ds(A){let T;for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType===1)switch(N.nodeName){case"prismatic":case"revolute":T=fr(N);break}}return T}function fr(A){const T={sid:A.getAttribute("sid"),name:A.getAttribute("name")||"",axis:new q,limits:{min:0,max:0},type:A.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType===1)switch(N.nodeName){case"axis":const k=s(N.textContent);T.axis.fromArray(k);break;case"limits":const he=N.getElementsByTagName("max")[0],ge=N.getElementsByTagName("min")[0];T.limits.max=parseFloat(he.textContent),T.limits.min=parseFloat(ge.textContent);break}}return T.limits.min>=T.limits.max&&(T.static=!0),T.middlePosition=(T.limits.min+T.limits.max)/2,T}function Us(A){const T={sid:A.getAttribute("sid"),name:A.getAttribute("name")||"",attachments:[],transforms:[]};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType===1)switch(N.nodeName){case"attachment_full":T.attachments.push(Xi(N));break;case"matrix":case"translate":case"rotate":T.transforms.push(Fs(N));break}}return T}function Xi(A){const T={joint:A.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType===1)switch(N.nodeName){case"link":T.links.push(Us(N));break;case"matrix":case"translate":case"rotate":T.transforms.push(Fs(N));break}}return T}function Fs(A){const T={type:A.nodeName},U=s(A.textContent);switch(T.type){case"matrix":T.obj=new Ye,T.obj.fromArray(U).transpose();break;case"translate":T.obj=new q,T.obj.fromArray(U);break;case"rotate":T.obj=new q,T.obj.fromArray(U),T.angle=In.degToRad(U[3]);break}return T}function qi(A){const T={name:A.getAttribute("name")||"",rigidBodies:{}};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType===1)switch(N.nodeName){case"rigid_body":T.rigidBodies[N.getAttribute("name")]={},pr(N,T.rigidBodies[N.getAttribute("name")]);break}}Je.physicsModels[A.getAttribute("id")]=T}function pr(A,T){for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType===1)switch(N.nodeName){case"technique_common":mr(N,T);break}}}function mr(A,T){for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType===1)switch(N.nodeName){case"inertia":T.inertia=s(N.textContent);break;case"mass":T.mass=s(N.textContent)[0];break}}}function Sa(A){const T={bindJointAxis:[]};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType===1)switch(N.nodeName){case"bind_joint_axis":T.bindJointAxis.push(Ea(N));break}}Je.kinematicsScenes[o(A.getAttribute("url"))]=T}function Ea(A){const T={target:A.getAttribute("target").split("/").pop()};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType===1)switch(N.nodeName){case"axis":const k=N.getElementsByTagName("param")[0];T.axis=k.textContent;const he=T.axis.split("inst_").pop().split("axis")[0];T.jointIndex=he.substring(0,he.length-1);break}}return T}function wa(A){return A.build!==void 0?A.build:A}function F(A){return g(Je.kinematicsScenes[A],wa)}function ie(){const A=Object.keys(Je.kinematicsModels)[0],T=Object.keys(Je.kinematicsScenes)[0],U=Object.keys(Je.visualScenes)[0];if(A===void 0||T===void 0)return;const N=dr(A),k=F(T),he=gt(U),ge=k.bindJointAxis,ke={};for(let Xe=0,Me=ge.length;Xe<Me;Xe++){const je=ge[Xe],ze=st.querySelector('[sid="'+je.target+'"]');if(ze){const $e=ze.parentElement;Ae(je.jointIndex,$e)}}function Ae(Xe,Me){const je=Me.getAttribute("name"),ze=N.joints[Xe];he.traverse(function($e){$e.name===je&&(ke[Xe]={object:$e,transforms:le(Me),joint:ze,position:ze.zeroPosition})})}const Ue=new Ye;Rc={joints:N&&N.joints,getJointValue:function(Xe){const Me=ke[Xe];if(Me)return Me.position;console.warn("THREE.ColladaLoader: Joint "+Xe+" doesn't exist.")},setJointValue:function(Xe,Me){const je=ke[Xe];if(je){const ze=je.joint;if(Me>ze.limits.max||Me<ze.limits.min)console.warn("THREE.ColladaLoader: Joint "+Xe+" value "+Me+" outside of limits (min: "+ze.limits.min+", max: "+ze.limits.max+").");else if(ze.static)console.warn("THREE.ColladaLoader: Joint "+Xe+" is static.");else{const $e=je.object,qe=ze.axis,Nt=je.transforms;ee.identity();for(let wt=0;wt<Nt.length;wt++){const vt=Nt[wt];if(vt.sid&&vt.sid.indexOf(Xe)!==-1)switch(ze.type){case"revolute":ee.multiply(Ue.makeRotationAxis(qe,In.degToRad(Me)));break;case"prismatic":ee.multiply(Ue.makeTranslation(qe.x*Me,qe.y*Me,qe.z*Me));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+ze.type);break}else switch(vt.type){case"matrix":ee.multiply(vt.obj);break;case"translate":ee.multiply(Ue.makeTranslation(vt.obj.x,vt.obj.y,vt.obj.z));break;case"scale":ee.scale(vt.obj);break;case"rotate":ee.multiply(Ue.makeRotationAxis(vt.obj,vt.angle));break}}$e.matrix.copy(ee),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),ke[Xe].position=Me}}else console.log("THREE.ColladaLoader: "+Xe+" does not exist.")}}}function le(A){const T=[],U=st.querySelector('[id="'+A.id+'"]');for(let N=0;N<U.childNodes.length;N++){const k=U.childNodes[N];if(k.nodeType!==1)continue;let he,ge;switch(k.nodeName){case"matrix":he=s(k.textContent);const ke=new Ye().fromArray(he).transpose();T.push({sid:k.getAttribute("sid"),type:k.nodeName,obj:ke});break;case"translate":case"scale":he=s(k.textContent),ge=new q().fromArray(he),T.push({sid:k.getAttribute("sid"),type:k.nodeName,obj:ge});break;case"rotate":he=s(k.textContent),ge=new q().fromArray(he);const Ae=In.degToRad(he[3]);T.push({sid:k.getAttribute("sid"),type:k.nodeName,obj:ge,angle:Ae});break}}return T}function ue(A){const T=A.getElementsByTagName("node");for(let U=0;U<T.length;U++){const N=T[U];N.hasAttribute("id")===!1&&N.setAttribute("id",c())}}const ee=new Ye,Se=new q;function Pe(A){const T={name:A.getAttribute("name")||"",type:A.getAttribute("type"),id:A.getAttribute("id"),sid:A.getAttribute("sid"),matrix:new Ye,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType!==1)continue;let k;switch(N.nodeName){case"node":T.nodes.push(N.getAttribute("id")),Pe(N);break;case"instance_camera":T.instanceCameras.push(o(N.getAttribute("url")));break;case"instance_controller":T.instanceControllers.push(Ve(N));break;case"instance_light":T.instanceLights.push(o(N.getAttribute("url")));break;case"instance_geometry":T.instanceGeometries.push(Ve(N));break;case"instance_node":T.instanceNodes.push(o(N.getAttribute("url")));break;case"matrix":k=s(N.textContent),T.matrix.multiply(ee.fromArray(k).transpose()),T.transforms[N.getAttribute("sid")]=N.nodeName;break;case"translate":k=s(N.textContent),Se.fromArray(k),T.matrix.multiply(ee.makeTranslation(Se.x,Se.y,Se.z)),T.transforms[N.getAttribute("sid")]=N.nodeName;break;case"rotate":k=s(N.textContent);const he=In.degToRad(k[3]);T.matrix.multiply(ee.makeRotationAxis(Se.fromArray(k),he)),T.transforms[N.getAttribute("sid")]=N.nodeName;break;case"scale":k=s(N.textContent),T.matrix.scale(Se.fromArray(k)),T.transforms[N.getAttribute("sid")]=N.nodeName;break;case"extra":break;default:console.log(N)}}return At(T.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",T.id):Je.nodes[T.id]=T,T}function Ve(A){const T={id:o(A.getAttribute("url")),materials:{},skeletons:[]};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];switch(N.nodeName){case"bind_material":const k=N.getElementsByTagName("instance_material");for(let he=0;he<k.length;he++){const ge=k[he],ke=ge.getAttribute("symbol"),Ae=ge.getAttribute("target");T.materials[ke]=o(Ae)}break;case"skeleton":T.skeletons.push(o(N.textContent));break}}return T}function He(A,T){const U=[],N=[];let k,he,ge;for(k=0;k<A.length;k++){const Ue=A[k];let Xe;if(At(Ue))Xe=Ut(Ue),et(Xe,T,U);else if(En(Ue)){const je=Je.visualScenes[Ue].children;for(let ze=0;ze<je.length;ze++){const $e=je[ze];if($e.type==="JOINT"){const qe=Ut($e.id);et(qe,T,U)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Ue)}for(k=0;k<T.length;k++)for(he=0;he<U.length;he++)if(ge=U[he],ge.bone.name===T[k].name){N[k]=ge,ge.processed=!0;break}for(k=0;k<U.length;k++)ge=U[k],ge.processed===!1&&(N.push(ge),ge.processed=!0);const ke=[],Ae=[];for(k=0;k<N.length;k++)ge=N[k],ke.push(ge.bone),Ae.push(ge.boneInverse);return new va(ke,Ae)}function et(A,T,U){A.traverse(function(N){if(N.isBone===!0){let k;for(let he=0;he<T.length;he++){const ge=T[he];if(ge.name===N.name){k=ge.boneInverse;break}}k===void 0&&(k=new Ye),U.push({bone:N,boneInverse:k,processed:!1})}})}function ot(A){const T=[],U=A.matrix,N=A.nodes,k=A.type,he=A.instanceCameras,ge=A.instanceControllers,ke=A.instanceLights,Ae=A.instanceGeometries,Ue=A.instanceNodes;for(let Me=0,je=N.length;Me<je;Me++)T.push(Ut(N[Me]));for(let Me=0,je=he.length;Me<je;Me++){const ze=Ze(he[Me]);ze!==null&&T.push(ze.clone())}for(let Me=0,je=ge.length;Me<je;Me++){const ze=ge[Me],$e=Y(ze.id),qe=sn($e.id),Nt=Et(qe,ze.materials),wt=ze.skeletons,vt=$e.skin.joints,xt=He(wt,vt);for(let Xn=0,an=Nt.length;Xn<an;Xn++){const Yi=Nt[Xn];Yi.isSkinnedMesh&&(Yi.bind(xt,$e.skin.bindMatrix),Yi.normalizeSkinWeights()),T.push(Yi)}}for(let Me=0,je=ke.length;Me<je;Me++){const ze=te(ke[Me]);ze!==null&&T.push(ze.clone())}for(let Me=0,je=Ae.length;Me<je;Me++){const ze=Ae[Me],$e=sn(ze.id),qe=Et($e,ze.materials);for(let Nt=0,wt=qe.length;Nt<wt;Nt++)T.push(qe[Nt])}for(let Me=0,je=Ue.length;Me<je;Me++)T.push(Ut(Ue[Me]).clone());let Xe;if(N.length===0&&T.length===1)Xe=T[0];else{Xe=k==="JOINT"?new xc:new Bn;for(let Me=0;Me<T.length;Me++)Xe.add(T[Me])}return Xe.name=k==="JOINT"?A.sid:A.name,Xe.matrix.copy(U),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe}const Ge=new Dn({name:Fn.DEFAULT_MATERIAL_NAME,color:16711935});function mt(A,T){const U=[];for(let N=0,k=A.length;N<k;N++){const he=T[A[N]];he===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",A[N]),U.push(Ge)):U.push(ye(he))}return U}function Et(A,T){const U=[];for(const N in A){const k=A[N],he=mt(k.materialKeys,T);if(he.length===0&&(N==="lines"||N==="linestrips"?he.push(new Oi):he.push(new vs)),N==="lines"||N==="linestrips")for(let Ue=0,Xe=he.length;Ue<Xe;Ue++){const Me=he[Ue];if(Me.isMeshPhongMaterial===!0||Me.isMeshLambertMaterial===!0){const je=new Oi;je.color.copy(Me.color),je.opacity=Me.opacity,je.transparent=Me.transparent,he[Ue]=je}}const ge=k.data.attributes.skinIndex!==void 0,ke=he.length===1?he[0]:he;let Ae;switch(N){case"lines":Ae=new ha(k.data,ke);break;case"linestrips":Ae=new xa(k.data,ke);break;case"triangles":case"polylist":ge?Ae=new Ku(k.data,ke):Ae=new It(k.data,ke);break}U.push(Ae)}return U}function At(A){return Je.nodes[A]!==void 0}function Ut(A){return g(Je.nodes[A],ot)}function _t(A){const T={name:A.getAttribute("name"),children:[]};ue(A);const U=n(A,"node");for(let N=0;N<U.length;N++)T.children.push(Pe(U[N]));Je.visualScenes[A.getAttribute("id")]=T}function We(A){const T=new Bn;T.name=A.name;const U=A.children;for(let N=0;N<U.length;N++){const k=U[N];T.add(Ut(k.id))}return T}function En(A){return Je.visualScenes[A]!==void 0}function gt(A){return g(Je.visualScenes[A],We)}function ln(A){const T=n(A,"instance_visual_scene")[0];return gt(o(T.getAttribute("url")))}function oi(){const A=Je.clips;if(l(A)===!0){if(l(Je.animations)===!1){const T=[];for(const U in Je.animations){const N=y(U);for(let k=0,he=N.length;k<he;k++)T.push(N[k])}gr.push(new rr("default",-1,T))}}else for(const T in A)gr.push(J(T))}function Kt(A){let T="";const U=[A];for(;U.length;){const N=U.shift();N.nodeType===Node.TEXT_NODE?T+=N.textContent:(T+=`
`,U.push.apply(U,N.childNodes))}return T.trim()}if(e.length===0)return{scene:new Yu};const ci=new DOMParser().parseFromString(e,"application/xml"),st=n(ci,"COLLADA")[0],rn=ci.getElementsByTagName("parsererror")[0];if(rn!==void 0){const A=n(rn,"div")[0];let T;return A?T=A.textContent:T=Kt(rn),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,T),null}const Mi=st.getAttribute("version");console.debug("THREE.ColladaLoader: File version",Mi);const Zt=u(n(st,"asset")[0]),wn=new Sc(this.manager);wn.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let mn;su&&(mn=new su(this.manager),mn.setPath(this.resourcePath||t));const Si=new Ke,gr=[];let Rc={},_h=0;const Je={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};d(st,"library_animations","animation",m),d(st,"library_animation_clips","animation_clip",H),d(st,"library_controllers","controller",Q),d(st,"library_images","image",ce),d(st,"library_effects","effect",we),d(st,"library_materials","material",ne),d(st,"library_cameras","camera",Re),d(st,"library_lights","light",Oe),d(st,"library_geometries","geometry",Ce),d(st,"library_nodes","node",Pe),d(st,"library_visual_scenes","visual_scene",_t),d(st,"library_kinematics_models","kinematics_model",Sn),d(st,"library_physics_models","physics_model",qi),d(st,"scene","instance_kinematics_scene",Sa),_(Je.animations,S),_(Je.clips,Z),_(Je.controllers,_e),_(Je.images,de),_(Je.effects,G),_(Je.materials,Te),_(Je.cameras,Ne),_(Je.lights,yt),_(Je.geometries,Lt),_(Je.visualScenes,We),oi(),ie();const _r=ln(n(st,"scene")[0]);return _r.animations=gr,Zt.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),_r.rotation.set(-Math.PI/2,0,0)),_r.scale.multiplyScalar(Zt.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),gr},kinematics:Rc,library:Je,scene:_r}}}const ru=new q,Pv=new cn,Yr=new Ye,mi=new Ye,Kr=new tn,Zr=new q(1,1,1),$r=new q;class ba extends Pt{constructor(...e){super(...e),this.urdfNode=null,this.urdfName=""}copy(e,t){return super.copy(e,t),this.urdfNode=e.urdfNode,this.urdfName=e.urdfName,this}}class Nv extends ba{constructor(...e){super(...e),this.isURDFCollider=!0,this.type="URDFCollider"}}class Dv extends ba{constructor(...e){super(...e),this.isURDFVisual=!0,this.type="URDFVisual"}}class uh extends ba{constructor(...e){super(...e),this.isURDFLink=!0,this.type="URDFLink"}}class hh extends ba{get jointType(){return this._jointType}set jointType(e){if(this.jointType!==e)switch(this._jointType=e,this.matrixWorldNeedsUpdate=!0,e){case"fixed":this.jointValue=[];break;case"continuous":case"revolute":case"prismatic":this.jointValue=new Array(1).fill(0);break;case"planar":this.jointValue=new Array(3).fill(0),this.axis=new q(0,0,1);break;case"floating":this.jointValue=new Array(6).fill(0);break}}get angle(){return this.jointValue[0]}constructor(...e){super(...e),this.isURDFJoint=!0,this.type="URDFJoint",this.jointValue=null,this.jointType="fixed",this.axis=new q(1,0,0),this.limit={lower:0,upper:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(e,t){return super.copy(e,t),this.jointType=e.jointType,this.axis=e.axis.clone(),this.limit.lower=e.limit.lower,this.limit.upper=e.limit.upper,this.ignoreLimits=!1,this.jointValue=[...e.jointValue],this.origPosition=e.origPosition?e.origPosition.clone():null,this.origQuaternion=e.origQuaternion?e.origQuaternion.clone():null,this.mimicJoints=[...e.mimicJoints],this}setJointValue(...e){e=e.map(n=>n===null?null:parseFloat(n)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let t=!1;switch(this.mimicJoints.forEach(n=>{t=n.updateFromMimickedJoint(...e)||t}),this.jointType){case"fixed":return t;case"continuous":case"revolute":{let n=e[0];return n==null||n===this.jointValue[0]?t:(!this.ignoreLimits&&this.jointType==="revolute"&&(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.quaternion.setFromAxisAngle(this.axis,n).premultiply(this.origQuaternion),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):t)}case"prismatic":{let n=e[0];return n==null||n===this.jointValue[0]?t:(this.ignoreLimits||(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.position.copy(this.origPosition),ru.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(ru,n),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):t)}case"floating":return this.jointValue.every((n,i)=>e[i]===n||e[i]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],this.jointValue[3]=e[3]!==null?e[3]:this.jointValue[3],this.jointValue[4]=e[4]!==null?e[4]:this.jointValue[4],this.jointValue[5]=e[5]!==null?e[5]:this.jointValue[5],mi.compose(this.origPosition,this.origQuaternion,Zr),Kr.setFromEuler(Pv.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],"XYZ")),$r.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),Yr.compose($r,Kr,Zr),mi.premultiply(Yr),this.position.setFromMatrixPosition(mi),this.rotation.setFromRotationMatrix(mi),this.matrixWorldNeedsUpdate=!0,!0);case"planar":return this.jointValue.every((n,i)=>e[i]===n||e[i]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],mi.compose(this.origPosition,this.origQuaternion,Zr),Kr.setFromAxisAngle(this.axis,this.jointValue[2]),$r.set(this.jointValue[0],this.jointValue[1],0),Yr.compose($r,Kr,Zr),mi.premultiply(Yr),this.position.setFromMatrixPosition(mi),this.rotation.setFromRotationMatrix(mi),this.matrixWorldNeedsUpdate=!0,!0)}return t}}class au extends hh{constructor(...e){super(...e),this.type="URDFMimicJoint",this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...e){const t=e.map(n=>n*this.multiplier+this.offset);return super.setJointValue(...t)}copy(e,t){return super.copy(e,t),this.mimicJoint=e.mimicJoint,this.offset=e.offset,this.multiplier=e.multiplier,this}}class Uv extends uh{constructor(...e){super(...e),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(e,t){super.copy(e,t),this.urdfRobotNode=e.urdfRobotNode,this.robotName=e.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(n=>{n.isURDFJoint&&n.urdfName in e.joints&&(this.joints[n.urdfName]=n),n.isURDFLink&&n.urdfName in e.links&&(this.links[n.urdfName]=n),n.isURDFCollider&&n.urdfName in e.colliders&&(this.colliders[n.urdfName]=n),n.isURDFVisual&&n.urdfName in e.visual&&(this.visual[n.urdfName]=n)});for(const n in this.joints)this.joints[n].mimicJoints=this.joints[n].mimicJoints.map(i=>this.joints[i.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(e){return this.frames[e]}setJointValue(e,...t){const n=this.joints[e];return n?n.setJointValue(...t):!1}setJointValues(e){let t=!1;for(const n in e){const i=e[n];Array.isArray(i)?t=this.setJointValue(n,...i)||t:t=this.setJointValue(n,i)||t}return t}}const oo=new tn,ou=new cn;function us(r){return r?r.trim().split(/\s+/g).map(e=>parseFloat(e)):[0,0,0]}function cu(r,e,t=!1){t||r.rotation.set(0,0,0),ou.set(e[0],e[1],e[2],"ZYX"),oo.setFromEuler(ou),oo.multiply(r.quaternion),r.quaternion.copy(oo)}class Fv{constructor(e){this.manager=e||th,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions={}}loadAsync(e){return new Promise((t,n)=>{this.load(e,t,null,n)})}load(e,t,n,i){const s=this.manager,a=ki.extractUrlBase(e),o=this.manager.resolveURL(e);s.itemStart(o),fetch(o,this.fetchOptions).then(c=>{if(c.ok)return n&&n(null),c.text();throw new Error(`URDFLoader: Failed to load url '${o}' with error code ${c.status} : ${c.statusText}.`)}).then(c=>{const l=this.parse(c,this.workingPath||a);t(l),s.itemEnd(o)}).catch(c=>{i?i(c):console.error("URDFLoader: Error loading file.",c),s.itemError(o),s.itemEnd(o)})}parse(e,t=this.workingPath){const n=this.packages,i=this.loadMeshCb,s=this.parseVisual,a=this.parseCollision,o=this.manager,c={},l={},u={};function h(x){if(!/^package:\/\//.test(x))return t?t+x:x;const[S,y]=x.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof n=="string")return n.endsWith(S)?n+"/"+y:n+"/"+S+"/"+y;if(n instanceof Function)return n(S)+"/"+y;if(typeof n=="object")return S in n?n[S]+"/"+y:(console.error(`URDFLoader : ${S} not found in provided package list.`),null)}function p(x){let S;x instanceof Document?S=[...x.children]:x instanceof Element?S=[x]:S=[...new DOMParser().parseFromString(x,"text/xml").children];const y=S.filter(C=>C.nodeName==="robot").pop();return d(y)}function d(x){const S=[...x.children],y=S.filter(B=>B.nodeName.toLowerCase()==="link"),C=S.filter(B=>B.nodeName.toLowerCase()==="joint"),I=S.filter(B=>B.nodeName.toLowerCase()==="material"),L=new Uv;L.robotName=x.getAttribute("name"),L.urdfRobotNode=x,I.forEach(B=>{const R=B.getAttribute("name");u[R]=m(B)});const D={},E={};y.forEach(B=>{const R=B.getAttribute("name"),z=x.querySelector(`child[link="${R}"]`)===null;c[R]=g(B,D,E,z?L:null)}),C.forEach(B=>{const R=B.getAttribute("name");l[R]=_(B)}),L.joints=l,L.links=c,L.colliders=E,L.visual=D;const w=Object.values(l);return w.forEach(B=>{B instanceof au&&l[B.mimicJoint].mimicJoints.push(B)}),w.forEach(B=>{const R=new Set,z=b=>{if(R.has(b))throw new Error("URDFLoader: Detected an infinite loop of mimic joints.");R.add(b),b.mimicJoints.forEach(W=>{z(W)})};z(B)}),L.frames={...E,...D,...c,...l},L}function _(x){const S=[...x.children],y=x.getAttribute("type");let C;const I=S.find(R=>R.nodeName.toLowerCase()==="mimic");I?(C=new au,C.mimicJoint=I.getAttribute("joint"),C.multiplier=parseFloat(I.getAttribute("multiplier")||1),C.offset=parseFloat(I.getAttribute("offset")||0)):C=new hh,C.urdfNode=x,C.name=x.getAttribute("name"),C.urdfName=C.name,C.jointType=y;let L=null,D=null,E=[0,0,0],w=[0,0,0];S.forEach(R=>{const z=R.nodeName.toLowerCase();z==="origin"?(E=us(R.getAttribute("xyz")),w=us(R.getAttribute("rpy"))):z==="child"?D=c[R.getAttribute("link")]:z==="parent"?L=c[R.getAttribute("link")]:z==="limit"&&(C.limit.lower=parseFloat(R.getAttribute("lower")||C.limit.lower),C.limit.upper=parseFloat(R.getAttribute("upper")||C.limit.upper))}),L.add(C),C.add(D),cu(C,w),C.position.set(E[0],E[1],E[2]);const B=S.filter(R=>R.nodeName.toLowerCase()==="axis")[0];if(B){const R=B.getAttribute("xyz").split(/\s+/g).map(z=>parseFloat(z));C.axis=new q(R[0],R[1],R[2]),C.axis.normalize()}return C}function g(x,S,y,C=null){C===null&&(C=new uh);const I=[...x.children];return C.name=x.getAttribute("name"),C.urdfName=C.name,C.urdfNode=x,s&&I.filter(D=>D.nodeName.toLowerCase()==="visual").forEach(D=>{const E=f(D,u);if(C.add(E),D.hasAttribute("name")){const w=D.getAttribute("name");E.name=w,E.urdfName=w,S[w]=E}}),a&&I.filter(D=>D.nodeName.toLowerCase()==="collision").forEach(D=>{const E=f(D);if(C.add(E),D.hasAttribute("name")){const w=D.getAttribute("name");E.name=w,E.urdfName=w,y[w]=E}}),C}function m(x){const S=[...x.children],y=new vs;return y.name=x.getAttribute("name")||"",S.forEach(C=>{const I=C.nodeName.toLowerCase();if(I==="color"){const L=C.getAttribute("rgba").split(/\s/g).map(D=>parseFloat(D));y.color.setRGB(L[0],L[1],L[2]),y.opacity=L[3],y.transparent=L[3]<1,y.depthWrite=!y.transparent}else if(I==="texture"){const L=C.getAttribute("filename");if(L){const D=new Sc(o),E=h(L);y.map=D.load(E),y.map.colorSpace=Ct}}}),y}function f(x,S={}){const y=x.nodeName.toLowerCase()==="collision",C=[...x.children];let I=null;const L=C.filter(E=>E.nodeName.toLowerCase()==="material")[0];if(L){const E=L.getAttribute("name");E&&E in S?I=S[E]:I=m(L)}else I=new vs;const D=y?new Nv:new Dv;return D.urdfNode=x,C.forEach(E=>{const w=E.nodeName.toLowerCase();if(w==="geometry"){const B=E.children[0].nodeName.toLowerCase();if(B==="mesh"){const R=E.children[0].getAttribute("filename"),z=h(R);if(z!==null){const b=E.children[0].getAttribute("scale");if(b){const W=us(b);D.scale.set(W[0],W[1],W[2])}i(z,o,(W,H)=>{H?console.error("URDFLoader: Error loading mesh.",H):W&&(W instanceof It&&(W.material=I),W.position.set(0,0,0),W.quaternion.identity(),D.add(W))})}}else if(B==="box"){const R=new It;R.geometry=new Vn(1,1,1),R.material=I;const z=us(E.children[0].getAttribute("size"));R.scale.set(z[0],z[1],z[2]),D.add(R)}else if(B==="sphere"){const R=new It;R.geometry=new Mc(1,30,30),R.material=I;const z=parseFloat(E.children[0].getAttribute("radius"))||0;R.scale.set(z,z,z),D.add(R)}else if(B==="cylinder"){const R=new It;R.geometry=new bc(1,1,1,30),R.material=I;const z=parseFloat(E.children[0].getAttribute("radius"))||0,b=parseFloat(E.children[0].getAttribute("length"))||0;R.scale.set(z,b,z),R.rotation.set(Math.PI/2,0,0),D.add(R)}}else if(w==="origin"){const B=us(E.getAttribute("xyz")),R=us(E.getAttribute("rpy"));D.position.set(B[0],B[1],B[2]),D.rotation.set(0,0,0),cu(D,R)}}),D}return p(e)}defaultMeshLoader(e,t,n){/\.stl$/i.test(e)?new Iv(t).load(e,s=>{const a=new It(s,new vs);n(a)}):/\.dae$/i.test(e)?new Lv(t).load(e,s=>n(s.scene)):console.warn(`URDFLoader: Could not load model at ${e}.
No loader available`)}}function Ov(r){return{packageName:r,packagePath:`./packages/${r}`,urdfPath:`./packages/${r}/urdf/${r}.urdf`}}const kv=new Map([[Rs.OpticalTable,"digital-twin-lab-v4-no-arm"],[Rs.Arm,"dorna2-rebuild"]]),Bv=new Map(Array.from(kv.entries()).map(([r,e])=>[r,Ov(e)]));async function zv(r,e){return r.packages={[e.packageName]:e.packagePath},await r.loadAsync(e.urdfPath)}async function Vv(r){const e=new eh,t=new Fv(e),n=Bv.get(r);if(!n)throw new Error(`URDF package not found for robot type: ${r}`);return await zv(t,n)}function lu(r,e){if(e===nd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ko||e===Iu){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Ko)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Hv extends Fn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new qv(t)}),this.register(function(t){return new Yv(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new Zv(t)}),this.register(function(t){return new $v(t)}),this.register(function(t){return new Jv(t)}),this.register(function(t){return new Qv(t)}),this.register(function(t){return new Xv(t)}),this.register(function(t){return new ex(t)}),this.register(function(t){return new Kv(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new Wv(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new ox(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=ki.extractUrlBase(e);a=ki.resolveURL(l,this.path)}else a=ki.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Ns(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===dh){try{a[ft.KHR_BINARY_GLTF]=new cx(e)}catch(h){i&&i(h);return}s=JSON.parse(a[ft.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new bx(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],p=s.extensionsRequired||[];switch(h){case ft.KHR_MATERIALS_UNLIT:a[h]=new jv;break;case ft.KHR_DRACO_MESH_COMPRESSION:a[h]=new lx(s,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:a[h]=new ux;break;case ft.KHR_MESH_QUANTIZATION:a[h]=new hx;break;default:p.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Gv(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Wv{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Ke(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],nn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new wc(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ih(u),l.distance=h;break;case"spot":l=new nh(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ei(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class jv{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return Dn}extendParams(e,t,n){const i=[];e.color=new Ke(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],nn),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ct))}return Promise.all(i)}}class Xv{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class qv{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new rt(o,o)}return Promise.all(s)}}class Yv{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Kv{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class Zv{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ke(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],nn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ct)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class $v{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class Jv{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ke().setRGB(o[0],o[1],o[2],nn),Promise.all(s)}}class Qv{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class ex{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ke().setRGB(o[0],o[1],o[2],nn),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ct)),Promise.all(s)}}class tx{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class nx{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class ix{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class sx{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class rx{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ax{constructor(e){this.name=ft.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,p=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,p,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,p,i.mode,i.filter),d})})}else return null}}class ox{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==vn.TRIANGLES&&l.mode!==vn.TRIANGLE_STRIP&&l.mode!==vn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],p=l[0].count,d=[];for(const _ of h){const g=new Ye,m=new q,f=new tn,x=new q(1,1,1),S=new X_(_.geometry,_.material,p);for(let y=0;y<p;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,y),c.SCALE&&x.fromBufferAttribute(c.SCALE,y),S.setMatrixAt(y,g.compose(m,f,x));for(const y in c)if(y==="_COLOR_0"){const C=c[y];S.instanceColor=new Jo(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&_.geometry.setAttribute(y,c[y]);Pt.prototype.copy.call(S,_),this.parser.assignFinalMaterial(S),d.push(S)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const dh="glTF",Xs=12,uu={JSON:1313821514,BIN:5130562};class cx{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Xs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==dh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Xs,s=new DataView(e,Xs);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===uu.JSON){const l=new Uint8Array(e,Xs+a,o);this.content=n.decode(l)}else if(c===uu.BIN){const l=Xs+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class lx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=nc[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=nc[u]||u.toLowerCase();if(a[u]!==void 0){const p=n.accessors[e.attributes[u]],d=xs[p.componentType];l[h]=d.name,c[h]=p.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,p){i.decodeDracoFile(u,function(d){for(const _ in d.attributes){const g=d.attributes[_],m=c[_];m!==void 0&&(g.normalized=m)}h(d)},o,l,nn,p)})})}}class ux{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class hx{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}}class fh extends lr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,h=(n-t)/u,p=h*h,d=p*h,_=e*l,g=_-l,m=-2*d+3*p,f=d-p,x=1-m,S=f-p+h;for(let y=0;y!==o;y++){const C=a[g+y+o],I=a[g+y+c]*u,L=a[_+y+o],D=a[_+y]*u;s[y]=x*C+S*I+m*L+f*D}return s}}const dx=new tn;class fx extends fh{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return dx.fromArray(s).normalize().toArray(s),s}}const vn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},xs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hu={9728:en,9729:Yt,9984:yu,9985:Jr,9986:Ks,9987:Pn},du={33071:bn,33648:aa,10497:yn},co={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},nc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},px={CUBICSPLINE:void 0,LINEAR:ir,STEP:nr},lo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function mx(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ji({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zn})),r.DefaultMaterial}function Ii(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ei(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function gx(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const p=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;a.push(p)}if(i){const p=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;o.push(p)}if(s){const p=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;c.push(p)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],p=l[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=p),r.morphTargetsRelative=!0,r})}function _x(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function vx(r){let e;const t=r.extensions&&r.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+uo(t.attributes):e=r.indices+":"+uo(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+uo(r.targets[n]);return e}function uo(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function ic(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function xx(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const yx=new Ye;class bx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Gv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Sc(this.options.manager):this.textureLoader=new l0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ns(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ii(s,o,i),ei(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())s(u,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(ki.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=co[i.type],o=xs[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Ht(l,a,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=co[i.type],l=xs[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,p=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(d&&d!==h){const f=Math.floor(p/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let S=t.cache.get(x);S||(g=new l(o,f*d,i.count*d/u),S=new H_(g,d/u),t.cache.add(x,S)),m=new vc(S,c,p%d/u,_)}else o===null?g=new l(i.count*c):g=new l(o,p,i.count*c),m=new Ht(g,c,_);if(i.sparse!==void 0){const f=co.SCALAR,x=xs[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,C=new x(a[1],S,i.sparse.count*f),I=new l(a[2],y,i.sparse.count*c);o!==null&&(m=new Ht(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let L=0,D=C.length;L<D;L++){const E=C[L];if(m.setX(E,I[L*c]),c>=2&&m.setY(E,I[L*c+1]),c>=3&&m.setZ(E,I[L*c+2]),c>=4&&m.setW(E,I[L*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const p=(s.samplers||{})[a.sampler]||{};return u.magFilter=hu[p.magFilter]||Yt,u.minFilter=hu[p.minFilter]||Pn,u.wrapS=du[p.wrapS]||yn,u.wrapT=du[p.wrapT]||yn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==en&&u.minFilter!==Yt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const p=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(p),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(p,d){let _=p;t.isImageBitmapLoader===!0&&(_=function(g){const m=new Ot(g);m.needsUpdate=!0,p(m)}),t.load(ki.resolveURL(h,s.path),_,void 0,d)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),ei(h,a),h.userData.mimeType=a.mimeType||xx(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[ft.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new ps,on.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Oi,on.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ji}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[ft.KHR_MATERIALS_UNLIT]){const h=i[ft.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new Ke(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const p=h.baseColorFactor;o.color.setRGB(p[0],p[1],p[2],nn),o.opacity=p[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Ct)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=xn);const u=s.alphaMode||lo.OPAQUE;if(u===lo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===lo.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Dn&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new rt(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==Dn&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Dn){const h=s.emissiveFactor;o.emissive=new Ke().setRGB(h[0],h[1],h[2],nn)}return s.emissiveTexture!==void 0&&a!==Dn&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Ct)),Promise.all(l).then(function(){const h=new a(o);return s.name&&(h.name=s.name),ei(h,s),t.associations.set(h,{materials:e}),s.extensions&&Ii(i,h,s),h})}createUniqueName(e){const t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return fu(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=vx(l),h=i[u];if(h)a.push(h.promise);else{let p;l.extensions&&l.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?p=s(l):p=fu(new Wt,l,t),i[u]={primitive:l,promise:p},a.push(p)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?mx(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],m=a[d];let f;const x=l[d];if(m.mode===vn.TRIANGLES||m.mode===vn.TRIANGLE_STRIP||m.mode===vn.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new Ku(g,x):new It(g,x),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===vn.TRIANGLE_STRIP?f.geometry=lu(f.geometry,Iu):m.mode===vn.TRIANGLE_FAN&&(f.geometry=lu(f.geometry,Ko));else if(m.mode===vn.LINES)f=new ha(g,x);else if(m.mode===vn.LINE_STRIP)f=new xa(g,x);else if(m.mode===vn.LINE_LOOP)f=new q_(g,x);else if(m.mode===vn.POINTS)f=new ra(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&_x(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),ei(f,s),m.extensions&&Ii(i,f,m),t.assignFinalMaterial(f),h.push(f)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Ii(i,h[0],s),h[0];const p=new Bn;s.extensions&&Ii(i,p,s),t.associations.set(p,{meshes:e});for(let d=0,_=h.length;d<_;d++)p.add(h[d]);return p})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(In.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ga(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ei(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const p=new Ye;s!==null&&p.fromArray(s.array,l*16),c.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new va(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,p=i.channels.length;h<p;h++){const d=i.channels[h],_=i.samplers[d.sampler],g=d.target,m=g.node,f=i.parameters!==void 0?i.parameters[_.input]:_.input,x=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",x)),l.push(_),u.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const p=h[0],d=h[1],_=h[2],g=h[3],m=h[4],f=[];for(let x=0,S=p.length;x<S;x++){const y=p[x],C=d[x],I=_[x],L=g[x],D=m[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const E=n._createAnimationTracks(y,C,I,L,D);if(E)for(let w=0;w<E.length;w++)f.push(E[w])}return new rr(s,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],p=l[2];p!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(p,yx)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(s.isBone===!0?u=new xc:l.length>1?u=new Bn:l.length===1?u=l[0]:u=new Pt,u!==l[0])for(let h=0,p=l.length;h<p;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=a),ei(u,s),s.extensions&&Ii(n,u,s),s.matrix!==void 0){const h=new Ye;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Bn;n.name&&(s.name=i.createUniqueName(n.name)),ei(s,n),n.extensions&&Ii(t,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);const l=u=>{const h=new Map;for(const[p,d]of i.associations)(p instanceof on||p instanceof Ot)&&h.set(p,d);return u.traverse(p=>{const d=i.associations.get(p);d!=null&&h.set(p,d)}),h};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,c=[];gi[s.path]===gi.weights?e.traverse(function(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}):c.push(o);let l;switch(gi[s.path]){case gi.weights:l=As;break;case gi.rotation:l=Vi;break;case gi.position:case gi.scale:l=bi;break;default:switch(n.itemSize){case 1:l=As;break;case 2:case 3:default:l=bi;break}break}const u=i.interpolation!==void 0?px[i.interpolation]:ir,h=this._getArrayFromAccessor(n);for(let p=0,d=c.length;p<d;p++){const _=new l(c[p]+"."+gi[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ic(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Vi?fx:fh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Mx(r,e,t){const n=e.attributes,i=new pn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new q(c[0],c[1],c[2]),new q(l[0],l[1],l[2])),o.normalized){const u=ic(xs[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new q,c=new q;for(let l=0,u=s.length;l<u;l++){const h=s[l];if(h.POSITION!==void 0){const p=t.json.accessors[h.POSITION],d=p.min,_=p.max;if(d!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),p.normalized){const g=ic(xs[p.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new Hn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function fu(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(const a in n){const o=nc[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return dt.workingColorSpace!==nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),ei(r,e),Mx(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?gx(r,e.targets,t):r})}async function Sx(r,e){const t=rv[r],n=e.binaryFiles.get(t);if(!n)return console.error("GLB file not found!",t),null;const i=new Hv,s=new Uint8Array(n);return new Promise((a,o)=>{i.parse(s.buffer,"",c=>{const l=c.scene.children[0];l.position.set(0,0,0),a({model:l,animations:c.animations})},c=>{console.error("Error loading GLB:",c),o(c)})})}async function Ex(r){let e=new Map;const t=[ya.Human];for(const n of t){let i=await Sx(n,r);i&&e.set(n,i)}return e}async function wx(r){const e=new Map,t=[fn.Error,fn.PhotoCamera,fn.Timelapse,fn.Timer];for(const n of t){const i=r.binaryFiles.get(av[n]);if(!i)throw new Error(`Failed to load png data: ${n}`);const s=new Blob([i],{type:"image/png"}),a=URL.createObjectURL(s),o=new Image;await new Promise((c,l)=>{o.onload=()=>{const u=new Ot(o);u.needsUpdate=!0,e.set(n,u),c()},o.onerror=l,o.src=a}),URL.revokeObjectURL(a)}return e}async function Tx(){const r=await Promise.all(Object.values(Rs).filter(e=>typeof e=="number").map(async e=>[e,await Vv(e)]));return new Map(r)}function Ax(r){let e=0;function t(n){n.type==="URDFVisual"&&n.traverse(s=>{s instanceof It&&e++});for(const i of n.children)t(i)}return r.forEach(n=>{t(n)}),e}async function Rx(r,e,t=20){let n=0;for(;n!==e;)await new Promise(i=>setTimeout(i,t)),n=Ax(r.getRobots())}const ti=class ti{constructor(){Ee(this,"files");Ee(this,"modelMap");Ee(this,"robotMap");Ee(this,"animationMap");Ee(this,"textureMap");this.files={textFiles:new Map,binaryFiles:new Map},this.modelMap=new Map,this.robotMap=new Map,this.animationMap=new Map,this.textureMap=new Map}static async init(){if(!ti.instance){const e=new ti;e.files=await yv();const[t,n,i,s]=await Promise.all([Cv(e.files),Ex(e.files),wx(e.files),Tx()]);e.modelMap=t,e.animationMap=n,e.textureMap=i,e.robotMap=s,ti.instance=e,await Rx(e,11)}return ti.instance}static getInstance(){if(!ti.instance)throw new Error("Assets has not been initialized. Call init) first.");return ti.instance}getModels(){return this.modelMap}getRobots(){return this.robotMap}getAnimations(){return this.animationMap}getTextures(){return this.textureMap}getFiles(){return this.files}};Ee(ti,"instance");let Gi=ti;class er{constructor({object:e,animations:t}){Ee(this,"object");Ee(this,"animations");Ee(this,"bubbles");Ee(this,"selectBoxes");this.bubbles=[],this.selectBoxes=[],this.object=e,this.animations=t}}const pu={[Fi.STANDBY]:{text:"Idle",font:"bold 50px Arial",color:"black",texture:fn.Timer,textureColor:"black"},[Fi.CAPTURING]:{text:"Capturing",font:"bold 50px Arial",color:"black",texture:fn.PhotoCamera,textureColor:"black"},[Fi.ERROR]:{text:"Error",font:"bold 50px Arial",color:"black",texture:fn.Error,textureColor:"red"},[Fi.LOADING]:{text:"Loading",font:"bold 50px Arial",color:"black",texture:fn.Timelapse,textureColor:"black"}};class Cx{constructor(){Ee(this,"mesh");this.mesh=Ix(pu[Fi.STANDBY])}setState(e){const t=ph(pu[e]),n=this.mesh.material;n.map=t,n.needsUpdate=!0}getMesh(){return this.mesh}setPosition(e){this.mesh.position.copy(e)}update(e){const t=this.mesh.position,n=e.position.clone();n.y=t.y,this.mesh.lookAt(n)}}function Ix(r){const e=new Cs(1,1),t=new Dn({map:ph(r),transparent:!0,side:xn}),n=new It(e,t);return n.scale.set(.35,.35,1),n}function ph(r){const{text:e,font:t,color:n,texture:i,textureColor:s}=r,a=15,o=400,c=200,l=40,u=document.createElement("canvas");u.width=o+a*2,u.height=c+a*2+l;const h=u.getContext("2d");return h.clearRect(0,0,u.width,u.height),Lx(h,u,{padding:a,bubbleWidth:o,bubbleHeight:c,tailSize:l}),Px(h,u,i,s,a,c),Nx(h,u,e,t,n,a,c),new Zu(u)}function Lx(r,e,{padding:t,bubbleWidth:n,bubbleHeight:i,tailSize:s}){const a=r.createRadialGradient(e.width/2,e.height/2,10,e.width/2,e.height/2,e.width/2);a.addColorStop(0,"white"),a.addColorStop(1,"gray"),r.fillStyle=a,r.strokeStyle="black",r.lineWidth=4,r.beginPath(),r.moveTo(t+20,t),r.lineTo(n-20+t,t),r.quadraticCurveTo(n+t,t,n+t,t+20),r.lineTo(n+t,i-20+t),r.quadraticCurveTo(n+t,i+t,n-20+t,i+t),r.lineTo(t+40,i+t),r.lineTo(t+20,i+t+s),r.lineTo(t,i+t),r.quadraticCurveTo(t,i+t,t,i-20+t),r.lineTo(t,t+20),r.quadraticCurveTo(t,t,t+20,t),r.closePath(),r.fill(),r.stroke()}function Px(r,e,t,n,i,s){const a=Gi.getInstance().getTextures().get(t),o=document.createElement("canvas"),c=o.getContext("2d");o.width=a.image.width,o.height=a.image.height,c.drawImage(a.image,0,0),c.globalCompositeOperation="source-atop",c.fillStyle=n,c.fillRect(0,0,o.width,o.height),c.globalCompositeOperation="source-over";const l=140,u=140,h=(e.width-l)/2,p=i/2+(s-u)/2;r.drawImage(o,h,p,l,u)}function Nx(r,e,t,n,i,s,a){r.font=n;const o=r.measureText(t),c=o.actualBoundingBoxAscent+o.actualBoundingBoxDescent,l=140,u=s/2+(a-l)/2,h=e.width/2,p=u+l+c/2;r.fillStyle=i,r.textAlign="center",r.textBaseline="middle",r.shadowColor="rgba(0, 0, 0, 0.5)",r.shadowBlur=3,r.shadowOffsetX=2,r.shadowOffsetY=2,r.fillText(t,h,p)}const dn=class dn{constructor(e=dn.getDefaultBounds()){Ee(this,"box");Ee(this,"state",ni.DEFAULT);const t=new Vn(e.max.x-e.min.x,e.max.y-e.min.y,e.max.z-e.min.z),n=new Dn({color:11202048,transparent:!0,opacity:.2,depthWrite:!1});this.box=new It(t,n),this.setPosition(new q(.95,1,.41))}static getDefaultBounds(){const e=dn.DEFAULT_SIZE;return new pn(new q(-e,-e,-e),new q(e,e,e))}setSize(e,t,n){this.box.geometry.dispose(),this.box.geometry=new Vn(e,t,n)}setPosition(e){this.box.position.copy(e)}getMesh(){return this.box}setVisible(e){this.box.visible=e}setColor(e){this.box.material.color.set(e)}setState(e){this.state=e}getState(){return this.state}getStateColor(e){switch(e){case ni.DEFAULT:return dn.COLOR_DEFAULT;case ni.SELECTED:return dn.COLOR_SELECTED;case ni.HOVER:return dn.COLOR_HOVER;case ni.DISABLED:return dn.COLOR_DISABLED;default:return 0}}update(){this.setColor(this.getStateColor(this.state))}isVisible(){return this.getMesh().visible}};Ee(dn,"DEFAULT_SIZE",.25),Ee(dn,"COLOR_DEFAULT",11202048),Ee(dn,"COLOR_HOVER",16755200),Ee(dn,"COLOR_SELECTED",43775),Ee(dn,"COLOR_DISABLED",5592405);let sc=dn;function mu(r,e,t){const n=[r];for(;n.length>0;){const i=n.pop();if(i.type==="URDFVisual"){const s=mh(i);s&&(s.material=e(t))}console.log(i.name),n.push(...i.children)}}function qs(r,e){const t=[e];for(;t.length>0;){const n=t.pop();if(n.type==="URDFVisual"){const i=mh(n);if(i&&n.parent&&n.parent.name===r)return i}t.push(...n.children)}return null}function mh(r){let e=null;return r.traverse(t=>{!e&&t instanceof It&&(e=t)}),e}function Li(r){return new ji({color:r})}function Dx(r){const t=new pn().setFromObject(r.object).min.y;t<iv&&(r.object.position.y-=t)}function Ux(r){return Gi.getInstance().getAnimations().get(r)}class Fx{constructor(){}createArm(){const t={object:Gi.getInstance().getRobots().get(Rs.Arm)};let n=new er(t);return n.object.position.y+=2,n.object.rotation.x=In.degToRad(270),mu(n.object,Li,16711680),qs("gripper",n.object).material=Li(65520),qs("arm-base",n.object).material=Li(65520),n}createHuman(){let e=Ux(ya.Human);const t={object:e.model,animations:e.animations};let n=new er(t);const i=In.degToRad(180);return n.object.rotateY(i),n.object.scale.set(.2,.2,.2),Dx(n),n.object.position.z=3,n.object.position.x=-.5,n}createOpticalTable(){let e=Gi.getInstance().getRobots().get(Rs.OpticalTable);const t=Array.from({length:10},()=>new Cx),n=Array.from({length:10},()=>new sc),i={object:e};let s=new er(i);return s.bubbles=t,s.selectBoxes=n,s.object.position.y+=.855,s.object.rotation.x=In.degToRad(270),mu(s.object,Li,16777200),qs("plate-microscope",s.object).material=Li(15623680),qs("plate-incubator",s.object).material=Li(15623680),qs("slide",s.object).material=Li(15623680),s}createActors(){return{player:this.createHuman(),table:this.createOpticalTable(),arm:this.createArm()}}}class Ma extends It{constructor(){const e=Ma.SkyShader,t=new ai({name:e.name,uniforms:Bu.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Qt,depthWrite:!1});super(new Vn(1,1,1),t),this.isSky=!0}}Ma.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new q},up:{value:new q(0,1,0)}},vertexShader:`
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

		}`};class Ox{constructor(e){Ee(this,"entities");this.entities=e}createSky(){const e=new Ma;e.scale.setScalar(1e4);const t=new q,n=In.degToRad(90),i=In.degToRad(0);return t.setFromSphericalCoords(1,n,i),e.material.uniforms.rayleigh.value=.95,e.material.uniforms.mieCoefficient.value=0,e.material.uniforms.mieDirectionalG.value=0,e.material.uniforms.sunPosition.value.copy(t),e}createScene(){const e=new Yu;return kx().forEach(t=>e.add(t)),this.populateScene(e),e.add(this.createSky()),e}populateScene(e){for(const t of this.entities.getEntities())e.add(t.object);for(const t of this.entities.getBubbles())e.add(t.getMesh());for(const t of this.entities.getSelectBoxes())e.add(t.getMesh())}}function kx(){const r=new wc(16777215,1);r.position.set(5,5,5).normalize();const e=new sh(4210752,.5),t=new r0(16777215,2236962,.2);return[r,e,t]}const gh=Math.sqrt(3),Bx=.5*(gh-1),Ys=(3-gh)/6,gu=r=>Math.floor(r)|0,_u=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function zx(r=Math.random){const e=Vx(r),t=new Float64Array(e).map(i=>_u[i%12*2]),n=new Float64Array(e).map(i=>_u[i%12*2+1]);return function(s,a){let o=0,c=0,l=0;const u=(s+a)*Bx,h=gu(s+u),p=gu(a+u),d=(h+p)*Ys,_=h-d,g=p-d,m=s-_,f=a-g;let x,S;m>f?(x=1,S=0):(x=0,S=1);const y=m-x+Ys,C=f-S+Ys,I=m-1+2*Ys,L=f-1+2*Ys,D=h&255,E=p&255;let w=.5-m*m-f*f;if(w>=0){const z=D+e[E],b=t[z],W=n[z];w*=w,o=w*w*(b*m+W*f)}let B=.5-y*y-C*C;if(B>=0){const z=D+x+e[E+S],b=t[z],W=n[z];B*=B,c=B*B*(b*y+W*C)}let R=.5-I*I-L*L;if(R>=0){const z=D+1+e[E+1],b=t[z],W=n[z];R*=R,l=R*R*(b*I+W*L)}return 70*(o+c+l)}}function Vx(r){const t=new Uint8Array(512);for(let n=0;n<512/2;n++)t[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(r()*(256-n)),s=t[n];t[n]=t[i],t[i]=s}for(let n=256;n<512;n++)t[n]=t[n-256];return t}function Hx(){const r=new Cs(10,10),e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");if(t){const a=zx(),o=.01;for(let c=0;c<e.height;c++)for(let l=0;l<e.width;l++){const u=l/e.width-.5,h=c/e.height-.5,p=a(u/o,h/o),d=Math.floor((p+1)*127.5);t.fillStyle=`rgb(${d}, ${d}, ${d})`,t.fillRect(l,c,1,1)}}const n=new Zu(e);n.wrapS=yn,n.wrapT=yn,n.repeat.set(4,4);const i=new ji({map:n}),s=new It(r,i);return s.rotation.x=-Math.PI/2,s.position.y=0,s}function Gx(){return new ji({color:3447003,metalness:.3,roughness:.7})}class Wx{constructor(e){Ee(this,"world");this.world=e}createFloor(){const t={object:Hx()};return new er(t)}createCube(){const e=new Vn(1,1,1),t=Gx(),n=new It(e,t);n.position.y=.5,n.position.x=1,n.position.z=-4.5;const i={object:n};return new er(i)}createRoom(){return{floor:this.createFloor(),cube:this.createCube()}}}class jx{constructor(){Ee(this,"world");Ee(this,"rigidBodies",[]);Ee(this,"objectMap",new Map);Ee(this,"nextUserIndex",0);const e=Hi.get();let t=new e.btDefaultCollisionConfiguration,n=new e.btCollisionDispatcher(t),i=new e.btDbvtBroadphase,s=new e.btSequentialImpulseConstraintSolver;this.world=new e.btDiscreteDynamicsWorld(n,i,s,t),this.world.setGravity(new e.btVector3(0,-10,0))}step(e){this.world.stepSimulation(e,10)}addRigidBody(e,t){const n=this.nextUserIndex++;e.setUserIndex(n),this.objectMap.set(n,t),this.rigidBodies.push(e),this.world.addRigidBody(e)}}class Xx{constructor(e,t){Ee(this,"room");Ee(this,"actors");this.room=e,this.actors=t}getEntities(){return[...Object.values(this.room),...Object.values(this.actors)]}getBubbles(){const e=this.getEntities(),t=[];for(const n of e)t.push(...n.bubbles);return t}getSelectBoxes(){const e=this.getEntities(),t=[];for(const n of e)t.push(...n.selectBoxes);return t}getRoom(){return this.room}getActors(){return this.actors}}function qx(){const r=document.getElementById("overlay");r&&(r.classList.add("hidden"),setTimeout(()=>{r.style.display="none"},500))}async function Yx(){await Hi.init(),await Gi.init()}function Kx(){let r=new jx,e=new Wx(r).createRoom(),t=new Fx().createActors();const n=new Xx(e,t);let i=new Ox(n).createScene();return new nv(n,i,r)}async function Zx(){await Yx();const r=Kx();qx(),r.runSimulationLoop()}Zx();export{ov as a,Jx as g};
//# sourceMappingURL=index-DGNFP-wQ.js.map
