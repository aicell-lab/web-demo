var wu=Object.defineProperty;var Tu=(i,t,e)=>t in i?wu(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var fe=(i,t,e)=>Tu(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nl="170",ar={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Au=0,wl=1,Cu=2,vh=1,Ru=2,Hn=3,qn=0,rn=1,Pn=2,oi=0,or=1,Tl=2,Al=3,Cl=4,Pu=5,Mi=100,Lu=101,Du=102,Iu=103,Nu=104,Uu=200,Ou=201,Fu=202,ku=203,lo=204,co=205,Bu=206,zu=207,Hu=208,Vu=209,Gu=210,Wu=211,Xu=212,ju=213,qu=214,ho=0,uo=1,fo=2,dr=3,po=4,mo=5,_o=6,go=7,ca=0,Yu=1,Zu=2,li=0,Ku=1,$u=2,Ju=3,Qu=4,td=5,ed=6,nd=7,Rl="attached",id="detached",xh=300,fr=301,pr=302,vo=303,xo=304,ha=306,Gn=1e3,Mn=1001,yo=1002,hn=1003,rd=1004,as=1005,cn=1006,ba=1007,Wn=1008,Yn=1009,yh=1010,bh=1011,Wr=1012,il=1013,Ri=1014,Ln=1015,Zr=1016,rl=1017,sl=1018,mr=1020,Sh=35902,Mh=1021,Eh=1022,_n=1023,wh=1024,Th=1025,lr=1026,_r=1027,Ah=1028,al=1029,Ch=1030,ol=1031,ll=1033,js=33776,qs=33777,Ys=33778,Zs=33779,bo=35840,So=35841,Mo=35842,Eo=35843,wo=36196,To=37492,Ao=37496,Co=37808,Ro=37809,Po=37810,Lo=37811,Do=37812,Io=37813,No=37814,Uo=37815,Oo=37816,Fo=37817,ko=37818,Bo=37819,zo=37820,Ho=37821,Ks=36492,Vo=36494,Go=36495,Rh=36283,Wo=36284,Xo=36285,jo=36286,Qs=2300,qo=2301,Sa=2302,Pl=2400,Ll=2401,Dl=2402,sd=2500,ad=3200,od=3201,ua=0,ld=1,ai="",De="srgb",yr="srgb-linear",da="linear",Ae="srgb",Bi=7680,Il=519,cd=512,hd=513,ud=514,Ph=515,dd=516,fd=517,pd=518,md=519,Nl=35044,Ul="300 es",Xn=2e3,ta=2001;class Li{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ol=1234567;const cr=Math.PI/180,gr=180/Math.PI;function ui(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function qe(i,t,e){return Math.max(t,Math.min(e,i))}function cl(i,t){return(i%t+t)%t}function _d(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function gd(i,t,e){return i!==t?(e-i)/(t-i):0}function Hr(i,t,e){return(1-e)*i+e*t}function vd(i,t,e,n){return Hr(i,t,1-Math.exp(-e*n))}function xd(i,t=1){return t-Math.abs(cl(i,t*2)-t)}function yd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function bd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Sd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Md(i,t){return i+Math.random()*(t-i)}function Ed(i){return i*(.5-Math.random())}function wd(i){i!==void 0&&(Ol=i);let t=Ol+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Td(i){return i*cr}function Ad(i){return i*gr}function Cd(i){return(i&i-1)===0&&i!==0}function Rd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Pd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ld(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),d=a((t+n)/2),u=s((t-n)/2),p=a((t-n)/2),f=s((n-t)/2),g=a((n-t)/2);switch(r){case"XYX":i.set(o*d,l*u,l*p,o*c);break;case"YZY":i.set(l*p,o*d,l*u,o*c);break;case"ZXZ":i.set(l*u,l*p,o*d,o*c);break;case"XZX":i.set(o*d,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*d,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function tr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ei={DEG2RAD:cr,RAD2DEG:gr,generateUUID:ui,clamp:qe,euclideanModulo:cl,mapLinear:_d,inverseLerp:gd,lerp:Hr,damp:vd,pingpong:xd,smoothstep:yd,smootherstep:bd,randInt:Sd,randFloat:Md,randFloatSpread:Ed,seededRandom:wd,degToRad:Td,radToDeg:Ad,isPowerOfTwo:Cd,ceilPowerOfTwo:Rd,floorPowerOfTwo:Pd,setQuaternionFromProperEuler:Ld,normalize:$e,denormalize:tr};class ne{constructor(t=0,e=0){ne.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,e,n,r,s,a,o,l,c){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=r,d[2]=o,d[3]=e,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],p=n[2],f=n[5],g=n[8],_=r[0],m=r[3],h=r[6],x=r[1],M=r[4],S=r[7],R=r[2],L=r[5],P=r[8];return s[0]=a*_+o*x+l*R,s[3]=a*m+o*M+l*L,s[6]=a*h+o*S+l*P,s[1]=c*_+d*x+u*R,s[4]=c*m+d*M+u*L,s[7]=c*h+d*S+u*P,s[2]=p*_+f*x+g*R,s[5]=p*m+f*M+g*L,s[8]=p*h+f*S+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-n*s*d+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],u=d*a-o*c,p=o*l-d*s,f=c*s-a*l,g=e*u+n*p+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(r*c-d*n)*_,t[2]=(o*n-r*a)*_,t[3]=p*_,t[4]=(d*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ma.makeScale(t,e)),this}rotate(t){return this.premultiply(Ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ma=new ue;function Lh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dd(){const i=Xr("canvas");return i.style.display="block",i}const Fl={};function Fr(i){i in Fl||(Fl[i]=!0,console.warn(i))}function Id(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Nd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ud(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const pe={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ae&&(i.r=jn(i.r),i.g=jn(i.g),i.b=jn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ae&&(i.r=hr(i.r),i.g=hr(i.g),i.b=hr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ai?da:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const kl=[.64,.33,.3,.6,.15,.06],Bl=[.2126,.7152,.0722],zl=[.3127,.329],Hl=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vl=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);pe.define({[yr]:{primaries:kl,whitePoint:zl,transfer:da,toXYZ:Hl,fromXYZ:Vl,luminanceCoefficients:Bl,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:kl,whitePoint:zl,transfer:Ae,toXYZ:Hl,fromXYZ:Vl,luminanceCoefficients:Bl,outputColorSpaceConfig:{drawingBufferColorSpace:De}}});let zi;class Od{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zi===void 0&&(zi=Xr("canvas")),zi.width=t.width,zi.height=t.height;const n=zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=jn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fd=0;class Dh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=ui(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ea(r[a].image)):s.push(Ea(r[a]))}else s=Ea(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Od.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kd=0;class Ge extends Li{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=Mn,r=Mn,s=cn,a=Wn,o=_n,l=Yn,c=Ge.DEFAULT_ANISOTROPY,d=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=ui(),this.name="",this.source=new Dh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gn:t.x=t.x-Math.floor(t.x);break;case Mn:t.x=t.x<0?0:1;break;case yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gn:t.y=t.y-Math.floor(t.y);break;case Mn:t.y=t.y<0?0:1;break;case yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=xh;Ge.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,r=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],d=l[4],u=l[8],p=l[1],f=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(d-p)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,S=(f+1)/2,R=(h+1)/2,L=(d+p)/4,P=(u+_)/4,N=(g+m)/4;return M>S&&M>R?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=L/n,s=P/n):S>R?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=L/r,s=N/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=P/s,r=N/s),this.set(n,r,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(p-d)*(p-d));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(p-d)/x,this.w=Math.acos((c+f+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bd extends Li{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ge(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Dh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends Bd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ih extends Ge{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zd extends Ge{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class En{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],d=n[r+2],u=n[r+3];const p=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u;return}if(o===1){t[e+0]=p,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==p||c!==f||d!==g){let m=1-o;const h=l*p+c*f+d*g+u*_,x=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const R=Math.sqrt(M),L=Math.atan2(R,h*x);m=Math.sin(m*L)/R,o=Math.sin(o*L)/R}const S=o*x;if(l=l*m+p*S,c=c*m+f*S,d=d*m+g*S,u=u*m+_*S,m===1-o){const R=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=R,c*=R,d*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],d=n[r+3],u=s[a],p=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+d*u+l*f-c*p,t[e+1]=l*g+d*p+c*u-o*f,t[e+2]=c*g+d*f+o*p-l*u,t[e+3]=d*g-o*u-l*p-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(r/2),u=o(s/2),p=l(n/2),f=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=p*d*u+c*f*g,this._y=c*f*u-p*d*g,this._z=c*d*g+p*f*u,this._w=c*d*u-p*f*g;break;case"YXZ":this._x=p*d*u+c*f*g,this._y=c*f*u-p*d*g,this._z=c*d*g-p*f*u,this._w=c*d*u+p*f*g;break;case"ZXY":this._x=p*d*u-c*f*g,this._y=c*f*u+p*d*g,this._z=c*d*g+p*f*u,this._w=c*d*u-p*f*g;break;case"ZYX":this._x=p*d*u-c*f*g,this._y=c*f*u+p*d*g,this._z=c*d*g-p*f*u,this._w=c*d*u+p*f*g;break;case"YZX":this._x=p*d*u+c*f*g,this._y=c*f*u+p*d*g,this._z=c*d*g-p*f*u,this._w=c*d*u-p*f*g;break;case"XZY":this._x=p*d*u-c*f*g,this._y=c*f*u-p*d*g,this._z=c*d*g+p*f*u,this._w=c*d*u+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],u=e[10],p=n+o+u;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(d-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-n*c,this._z=s*d+a*c+n*l-r*o,this._w=a*d-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*r+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),u=Math.sin((1-e)*d)/c,p=Math.sin(e*d)/c;return this._w=a*u+this._w*p,this._x=n*u+this._x*p,this._y=r*u+this._y*p,this._z=s*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,e=0,n=0){K.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),d=2*(o*e-s*r),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*d,this.y=n+l*d+o*c-s*u,this.z=r+l*u+s*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wa.copy(this).projectOnVector(t),this.sub(wa)}reflect(t){return this.sub(wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wa=new K,Gl=new En;class Di{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(s,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),os.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),os.copy(n.boundingBox)),os.applyMatrix4(t.matrixWorld),this.union(os)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ar),ls.subVectors(this.max,Ar),Hi.subVectors(t.a,Ar),Vi.subVectors(t.b,Ar),Gi.subVectors(t.c,Ar),Jn.subVectors(Vi,Hi),Qn.subVectors(Gi,Vi),_i.subVectors(Hi,Gi);let e=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-_i.z,_i.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,_i.z,0,-_i.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-_i.y,_i.x,0];return!Ta(e,Hi,Vi,Gi,ls)||(e=[1,0,0,0,1,0,0,0,1],!Ta(e,Hi,Vi,Gi,ls))?!1:(cs.crossVectors(Jn,Qn),e=[cs.x,cs.y,cs.z],Ta(e,Hi,Vi,Gi,ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Un=[new K,new K,new K,new K,new K,new K,new K,new K],yn=new K,os=new Di,Hi=new K,Vi=new K,Gi=new K,Jn=new K,Qn=new K,_i=new K,Ar=new K,ls=new K,cs=new K,gi=new K;function Ta(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){gi.fromArray(i,s);const o=r.x*Math.abs(gi.x)+r.y*Math.abs(gi.y)+r.z*Math.abs(gi.z),l=t.dot(gi),c=e.dot(gi),d=n.dot(gi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Hd=new Di,Cr=new K,Aa=new K;class Ii{constructor(t=new K,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Hd.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cr.subVectors(t,this.center);const e=Cr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Cr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Aa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cr.copy(t.center).add(Aa)),this.expandByPoint(Cr.copy(t.center).sub(Aa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new K,Ca=new K,hs=new K,ti=new K,Ra=new K,us=new K,Pa=new K;class Kr{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ca.copy(t).add(e).multiplyScalar(.5),hs.copy(e).sub(t).normalize(),ti.copy(this.origin).sub(Ca);const s=t.distanceTo(e)*.5,a=-this.direction.dot(hs),o=ti.dot(this.direction),l=-ti.dot(hs),c=ti.lengthSq(),d=Math.abs(1-a*a);let u,p,f,g;if(d>0)if(u=a*l-o,p=a*o-l,g=s*d,u>=0)if(p>=-g)if(p<=g){const _=1/d;u*=_,p*=_,f=u*(u+a*p+2*o)+p*(a*u+p+2*l)+c}else p=s,u=Math.max(0,-(a*p+o)),f=-u*u+p*(p+2*l)+c;else p=-s,u=Math.max(0,-(a*p+o)),f=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-a*s+o)),p=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-s,-l),s),f=p*(p+2*l)+c):(u=Math.max(0,-(a*s+o)),p=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+p*(p+2*l)+c);else p=a>0?-s:s,u=Math.max(0,-(a*p+o)),f=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ca).addScaledVector(hs,p),f}intersectSphere(t,e){On.subVectors(t.center,this.origin);const n=On.dot(this.direction),r=On.dot(On)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,r=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,r=(t.min.x-p.x)*c),d>=0?(s=(t.min.y-p.y)*d,a=(t.max.y-p.y)*d):(s=(t.max.y-p.y)*d,a=(t.min.y-p.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(t.min.z-p.z)*u,l=(t.max.z-p.z)*u):(o=(t.max.z-p.z)*u,l=(t.min.z-p.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,r,s){Ra.subVectors(e,t),us.subVectors(n,t),Pa.crossVectors(Ra,us);let a=this.direction.dot(Pa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ti.subVectors(this.origin,t);const l=o*this.direction.dot(us.crossVectors(ti,us));if(l<0)return null;const c=o*this.direction.dot(Ra.cross(ti));if(c<0||l+c>a)return null;const d=-o*ti.dot(Pa);return d<0?null:this.at(d/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,r,s,a,o,l,c,d,u,p,f,g,_,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,d,u,p,f,g,_,m)}set(t,e,n,r,s,a,o,l,c,d,u,p,f,g,_,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=u,h[14]=p,h[3]=f,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Wi.setFromMatrixColumn(t,0).length(),s=1/Wi.setFromMatrixColumn(t,1).length(),a=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const p=a*d,f=a*u,g=o*d,_=o*u;e[0]=l*d,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=p-_*c,e[9]=-o*l,e[2]=_-p*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const p=l*d,f=l*u,g=c*d,_=c*u;e[0]=p+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*d,e[9]=-o,e[2]=f*o-g,e[6]=_+p*o,e[10]=a*l}else if(t.order==="ZXY"){const p=l*d,f=l*u,g=c*d,_=c*u;e[0]=p-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*d,e[9]=_-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const p=a*d,f=a*u,g=o*d,_=o*u;e[0]=l*d,e[4]=g*c-f,e[8]=p*c+_,e[1]=l*u,e[5]=_*c+p,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const p=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*d,e[4]=_-p*u,e[8]=g*u+f,e[1]=u,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=f*u+g,e[10]=p-_*u}else if(t.order==="XZY"){const p=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*d,e[4]=-u,e[8]=c*d,e[1]=p*u+_,e[5]=a*d,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*d,e[10]=_*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vd,t,Gd)}lookAt(t,e,n){const r=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),ei.crossVectors(n,on),ei.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ei.crossVectors(n,on)),ei.normalize(),ds.crossVectors(on,ei),r[0]=ei.x,r[4]=ds.x,r[8]=on.x,r[1]=ei.y,r[5]=ds.y,r[9]=on.y,r[2]=ei.z,r[6]=ds.z,r[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],p=n[9],f=n[13],g=n[2],_=n[6],m=n[10],h=n[14],x=n[3],M=n[7],S=n[11],R=n[15],L=r[0],P=r[4],N=r[8],E=r[12],w=r[1],B=r[5],C=r[9],z=r[13],y=r[2],V=r[6],W=r[10],q=r[14],J=r[3],Q=r[7],pt=r[11],j=r[15];return s[0]=a*L+o*w+l*y+c*J,s[4]=a*P+o*B+l*V+c*Q,s[8]=a*N+o*C+l*W+c*pt,s[12]=a*E+o*z+l*q+c*j,s[1]=d*L+u*w+p*y+f*J,s[5]=d*P+u*B+p*V+f*Q,s[9]=d*N+u*C+p*W+f*pt,s[13]=d*E+u*z+p*q+f*j,s[2]=g*L+_*w+m*y+h*J,s[6]=g*P+_*B+m*V+h*Q,s[10]=g*N+_*C+m*W+h*pt,s[14]=g*E+_*z+m*q+h*j,s[3]=x*L+M*w+S*y+R*J,s[7]=x*P+M*B+S*V+R*Q,s[11]=x*N+M*C+S*W+R*pt,s[15]=x*E+M*z+S*q+R*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],u=t[6],p=t[10],f=t[14],g=t[3],_=t[7],m=t[11],h=t[15];return g*(+s*l*u-r*c*u-s*o*p+n*c*p+r*o*f-n*l*f)+_*(+e*l*f-e*c*p+s*a*p-r*a*f+r*c*d-s*l*d)+m*(+e*c*u-e*o*f-s*a*u+n*a*f+s*o*d-n*c*d)+h*(-r*o*d-e*l*u+e*o*p+r*a*u-n*a*p+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],u=t[9],p=t[10],f=t[11],g=t[12],_=t[13],m=t[14],h=t[15],x=u*m*c-_*p*c+_*l*f-o*m*f-u*l*h+o*p*h,M=g*p*c-d*m*c-g*l*f+a*m*f+d*l*h-a*p*h,S=d*_*c-g*u*c+g*o*f-a*_*f-d*o*h+a*u*h,R=g*u*l-d*_*l-g*o*p+a*_*p+d*o*m-a*u*m,L=e*x+n*M+r*S+s*R;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return t[0]=x*P,t[1]=(_*p*s-u*m*s-_*r*f+n*m*f+u*r*h-n*p*h)*P,t[2]=(o*m*s-_*l*s+_*r*c-n*m*c-o*r*h+n*l*h)*P,t[3]=(u*l*s-o*p*s-u*r*c+n*p*c+o*r*f-n*l*f)*P,t[4]=M*P,t[5]=(d*m*s-g*p*s+g*r*f-e*m*f-d*r*h+e*p*h)*P,t[6]=(g*l*s-a*m*s-g*r*c+e*m*c+a*r*h-e*l*h)*P,t[7]=(a*p*s-d*l*s+d*r*c-e*p*c-a*r*f+e*l*f)*P,t[8]=S*P,t[9]=(g*u*s-d*_*s-g*n*f+e*_*f+d*n*h-e*u*h)*P,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*h+e*o*h)*P,t[11]=(d*o*s-a*u*s-d*n*c+e*u*c+a*n*f-e*o*f)*P,t[12]=R*P,t[13]=(d*_*r-g*u*r+g*n*p-e*_*p-d*n*m+e*u*m)*P,t[14]=(g*o*r-a*_*r-g*n*l+e*_*l+a*n*m-e*o*m)*P,t[15]=(a*u*r-d*o*r+d*n*l-e*u*l-a*n*p+e*o*p)*P,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,d=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+n,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,d=a+a,u=o+o,p=s*c,f=s*d,g=s*u,_=a*d,m=a*u,h=o*u,x=l*c,M=l*d,S=l*u,R=n.x,L=n.y,P=n.z;return r[0]=(1-(_+h))*R,r[1]=(f+S)*R,r[2]=(g-M)*R,r[3]=0,r[4]=(f-S)*L,r[5]=(1-(p+h))*L,r[6]=(m+x)*L,r[7]=0,r[8]=(g+M)*P,r[9]=(m-x)*P,r[10]=(1-(p+_))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Wi.set(r[0],r[1],r[2]).length();const a=Wi.set(r[4],r[5],r[6]).length(),o=Wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],bn.copy(this);const c=1/s,d=1/a,u=1/o;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=d,bn.elements[5]*=d,bn.elements[6]*=d,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,e.setFromRotationMatrix(bn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Xn){const l=this.elements,c=2*s/(e-t),d=2*s/(n-r),u=(e+t)/(e-t),p=(n+r)/(n-r);let f,g;if(o===Xn)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ta)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Xn){const l=this.elements,c=1/(e-t),d=1/(n-r),u=1/(a-s),p=(e+t)*c,f=(n+r)*d;let g,_;if(o===Xn)g=(a+s)*u,_=-2*u;else if(o===ta)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Wi=new K,bn=new se,Vd=new K(0,0,0),Gd=new K(1,1,1),ei=new K,ds=new K,on=new K,Wl=new se,Xl=new En;class sn{constructor(t=0,e=0,n=0,r=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],u=r[2],p=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class Nh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wd=0;const jl=new K,Xi=new En,Fn=new se,fs=new K,Rr=new K,Xd=new K,jd=new En,ql=new K(1,0,0),Yl=new K(0,1,0),Zl=new K(0,0,1),Kl={type:"added"},qd={type:"removed"},ji={type:"childadded",child:null},La={type:"childremoved",child:null};class Ie extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new K,e=new sn,n=new En,r=new K(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new se},normalMatrix:{value:new ue}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.premultiply(Xi),this}rotateX(t){return this.rotateOnAxis(ql,t)}rotateY(t){return this.rotateOnAxis(Yl,t)}rotateZ(t){return this.rotateOnAxis(Zl,t)}translateOnAxis(t,e){return jl.copy(t).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ql,t)}translateY(t){return this.translateOnAxis(Yl,t)}translateZ(t){return this.translateOnAxis(Zl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fs.copy(t):fs.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Rr,fs,this.up):Fn.lookAt(fs,Rr,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),Xi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kl),ji.child=t,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qd),La.child=t,this.dispatchEvent(La),La.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kl),ji.child=t,this.dispatchEvent(ji),ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,t,Xd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,jd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),u=a(t.shapes),p=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ie.DEFAULT_UP=new K(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new K,kn=new K,Da=new K,Bn=new K,qi=new K,Yi=new K,$l=new K,Ia=new K,Na=new K,Ua=new K,Oa=new Me,Fa=new Me,ka=new Me;class mn{constructor(t=new K,e=new K,n=new K){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Sn.subVectors(t,e),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Sn.subVectors(r,e),kn.subVectors(n,e),Da.subVectors(t,e);const a=Sn.dot(Sn),o=Sn.dot(kn),l=Sn.dot(Da),c=kn.dot(kn),d=kn.dot(Da),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const p=1/u,f=(c*l-o*d)*p,g=(a*d-o*l)*p;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return Oa.setScalar(0),Fa.setScalar(0),ka.setScalar(0),Oa.fromBufferAttribute(t,e),Fa.fromBufferAttribute(t,n),ka.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Oa,s.x),a.addScaledVector(Fa,s.y),a.addScaledVector(ka,s.z),a}static isFrontFacing(t,e,n,r){return Sn.subVectors(n,e),kn.subVectors(t,e),Sn.cross(kn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),Sn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;qi.subVectors(r,n),Yi.subVectors(s,n),Ia.subVectors(t,n);const l=qi.dot(Ia),c=Yi.dot(Ia);if(l<=0&&c<=0)return e.copy(n);Na.subVectors(t,r);const d=qi.dot(Na),u=Yi.dot(Na);if(d>=0&&u<=d)return e.copy(r);const p=l*u-d*c;if(p<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(qi,a);Ua.subVectors(t,s);const f=qi.dot(Ua),g=Yi.dot(Ua);if(g>=0&&f<=g)return e.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Yi,o);const m=d*g-f*u;if(m<=0&&u-d>=0&&f-g>=0)return $l.subVectors(s,r),o=(u-d)/(u-d+(f-g)),e.copy(r).addScaledVector($l,o);const h=1/(m+_+p);return a=_*h,o=p*h,e.copy(n).addScaledVector(qi,a).addScaledVector(Yi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},ps={h:0,s:0,l:0};function Ba(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}let le=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=pe.workingColorSpace){if(t=cl(t,1),e=qe(e,0,1),n=qe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Ba(a,s,t+1/3),this.g=Ba(a,s,t),this.b=Ba(a,s,t-1/3)}return pe.toWorkingColorSpace(this,r),this}setStyle(t,e=De){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=Uh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=hr(t.r),this.g=hr(t.g),this.b=hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return pe.fromWorkingColorSpace(je.copy(this),t),Math.round(qe(je.r*255,0,255))*65536+Math.round(qe(je.g*255,0,255))*256+Math.round(qe(je.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(je.copy(this),e);const n=je.r,r=je.g,s=je.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=De){pe.fromWorkingColorSpace(je.copy(this),t);const e=je.r,n=je.g,r=je.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(ps);const n=Hr(ni.h,ps.h,e),r=Hr(ni.s,ps.s,e),s=Hr(ni.l,ps.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const je=new le;le.NAMES=Uh;let Yd=0;class wn extends Li{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=ui(),this.name="",this.blending=or,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lo,this.blendDst=co,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==or&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lo&&(n.blendSrc=this.blendSrc),this.blendDst!==co&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==dr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jr extends wn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new K,ms=new ne;class un{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Nl,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ms.fromBufferAttribute(this,e),ms.applyMatrix3(t),this.setXY(e,ms.x,ms.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=tr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=tr(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=tr(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=tr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=tr(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),r=$e(r,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nl&&(t.usage=this.usage),t}}class Oh extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Fh extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Se extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Zd=0;const fn=new se,za=new Ie,Zi=new K,ln=new Di,Pr=new Di,He=new K;class We extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lh(t)?Fh:Oh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ue().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return za.lookAt(t),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Se(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Pr.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(ln.min,Pr.min),ln.expandByPoint(He),He.addVectors(ln.max,Pr.max),ln.expandByPoint(He)):(ln.expandByPoint(Pr.min),ln.expandByPoint(Pr.max))}ln.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)He.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(He));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)He.fromBufferAttribute(o,c),l&&(Zi.fromBufferAttribute(t,c),He.add(Zi)),r=Math.max(r,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new K,l[N]=new K;const c=new K,d=new K,u=new K,p=new ne,f=new ne,g=new ne,_=new K,m=new K;function h(N,E,w){c.fromBufferAttribute(n,N),d.fromBufferAttribute(n,E),u.fromBufferAttribute(n,w),p.fromBufferAttribute(s,N),f.fromBufferAttribute(s,E),g.fromBufferAttribute(s,w),d.sub(c),u.sub(c),f.sub(p),g.sub(p);const B=1/(f.x*g.y-g.x*f.y);isFinite(B)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(B),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(B),o[N].add(_),o[E].add(_),o[w].add(_),l[N].add(m),l[E].add(m),l[w].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let N=0,E=x.length;N<E;++N){const w=x[N],B=w.start,C=w.count;for(let z=B,y=B+C;z<y;z+=3)h(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const M=new K,S=new K,R=new K,L=new K;function P(N){R.fromBufferAttribute(r,N),L.copy(R);const E=o[N];M.copy(E),M.sub(R.multiplyScalar(R.dot(E))).normalize(),S.crossVectors(L,E);const B=S.dot(l[N])<0?-1:1;a.setXYZW(N,M.x,M.y,M.z,B)}for(let N=0,E=x.length;N<E;++N){const w=x[N],B=w.start,C=w.count;for(let z=B,y=B+C;z<y;z+=3)P(t.getX(z+0)),P(t.getX(z+1)),P(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const r=new K,s=new K,a=new K,o=new K,l=new K,c=new K,d=new K,u=new K;if(t)for(let p=0,f=t.count;p<f;p+=3){const g=t.getX(p+0),_=t.getX(p+1),m=t.getX(p+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),d.subVectors(a,s),u.subVectors(r,s),d.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=e.count;p<f;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),d.subVectors(a,s),u.subVectors(r,s),d.cross(u),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,u=o.normalized,p=new c.constructor(l.length*d);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*d;for(let h=0;h<d;h++)p[g++]=c[f++]}return new un(p,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new We,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,u=c.length;d<u;d++){const p=c[d],f=t(p,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,p=c.length;u<p;u++){const f=c[u];d.push(f.toJSON(t.data))}d.length>0&&(r[l]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(e))}const s=t.morphAttributes;for(const c in s){const d=[],u=s[c];for(let p=0,f=u.length;p<f;p++)d.push(u[p].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jl=new se,vi=new Kr,_s=new Ii,Ql=new K,gs=new K,vs=new K,xs=new K,Ha=new K,ys=new K,tc=new K,bs=new K;class Oe extends Ie{constructor(t=new We,e=new jr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){ys.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],u=s[l];d!==0&&(Ha.fromBufferAttribute(u,t),a?ys.addScaledVector(Ha,d):ys.addScaledVector(Ha.sub(e),d))}e.add(ys)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(s),vi.copy(t.ray).recast(t.near),!(_s.containsPoint(vi.origin)===!1&&(vi.intersectSphere(_s,Ql)===null||vi.origin.distanceToSquared(Ql)>(t.far-t.near)**2))&&(Jl.copy(s).invert(),vi.copy(t.ray).applyMatrix4(Jl),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,p=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){const m=p[g],h=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=x,R=M;S<R;S+=3){const L=o.getX(S),P=o.getX(S+1),N=o.getX(S+2);r=Ss(this,h,t,n,c,d,u,L,P,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,h=_;m<h;m+=3){const x=o.getX(m),M=o.getX(m+1),S=o.getX(m+2);r=Ss(this,a,t,n,c,d,u,x,M,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){const m=p[g],h=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=x,R=M;S<R;S+=3){const L=S,P=S+1,N=S+2;r=Ss(this,h,t,n,c,d,u,L,P,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,h=_;m<h;m+=3){const x=m,M=m+1,S=m+2;r=Ss(this,a,t,n,c,d,u,x,M,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Kd(i,t,e,n,r,s,a,o){let l;if(t.side===rn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===qn,o),l===null)return null;bs.copy(o),bs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(bs);return c<e.near||c>e.far?null:{distance:c,point:bs.clone(),object:i}}function Ss(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,gs),i.getVertexPosition(l,vs),i.getVertexPosition(c,xs);const d=Kd(i,t,e,n,gs,vs,xs,tc);if(d){const u=new K;mn.getBarycoord(tc,gs,vs,xs,u),r&&(d.uv=mn.getInterpolatedAttribute(r,o,l,c,u,new ne)),s&&(d.uv1=mn.getInterpolatedAttribute(s,o,l,c,u,new ne)),a&&(d.normal=mn.getInterpolatedAttribute(a,o,l,c,u,new K),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new K,materialIndex:0};mn.getNormal(gs,vs,xs,p.normal),d.face=p,d.barycoord=u}return d}class Ni extends We{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],u=[];let p=0,f=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(d,3)),this.setAttribute("uv",new Se(u,2));function g(_,m,h,x,M,S,R,L,P,N,E){const w=S/P,B=R/N,C=S/2,z=R/2,y=L/2,V=P+1,W=N+1;let q=0,J=0;const Q=new K;for(let pt=0;pt<W;pt++){const j=pt*B-z;for(let Z=0;Z<V;Z++){const vt=Z*w-C;Q[_]=vt*x,Q[m]=j*M,Q[h]=y,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[h]=L>0?1:-1,d.push(Q.x,Q.y,Q.z),u.push(Z/P),u.push(1-pt/N),q+=1}}for(let pt=0;pt<N;pt++)for(let j=0;j<P;j++){const Z=p+j+V*pt,vt=p+j+V*(pt+1),X=p+(j+1)+V*(pt+1),Y=p+(j+1)+V*pt;l.push(Z,vt,Y),l.push(vt,X,Y),J+=6}o.addGroup(f,J,E),f+=J,p+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ni(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Je(i){const t={};for(let e=0;e<i.length;e++){const n=vr(i[e]);for(const r in n)t[r]=n[r]}return t}function $d(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function kh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const Jd={clone:vr,merge:Je};var Qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends wn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qd,this.fragmentShader=tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vr(t.uniforms),this.uniformsGroups=$d(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Bh extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new K,ec=new ne,nc=new ne;class Ye extends Bh{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,ec,nc),e.subVectors(nc,ec)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(cr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ki=-90,$i=1;class ef extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ye(Ki,$i,t,e);r.layers=this.layers,this.add(r);const s=new Ye(Ki,$i,t,e);s.layers=this.layers,this.add(s);const a=new Ye(Ki,$i,t,e);a.layers=this.layers,this.add(a);const o=new Ye(Ki,$i,t,e);o.layers=this.layers,this.add(o);const l=new Ye(Ki,$i,t,e);l.layers=this.layers,this.add(l);const c=new Ye(Ki,$i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,d),t.setRenderTarget(u,p,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zh extends Ge{constructor(t,e,n,r,s,a,o,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:fr,super(t,e,n,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nf extends Pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new zh(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ni(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:oi});s.uniforms.tEquirect.value=e;const a=new Oe(r,s),o=e.minFilter;return e.minFilter===Wn&&(e.minFilter=cn),new ef(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Va=new K,rf=new K,sf=new ue;class si{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Va.subVectors(n,e).cross(rf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Va),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sf.getNormalMatrix(t),r=this.coplanarPoint(Va).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Ii,Ms=new K;class hl{constructor(t=new si,e=new si,n=new si,r=new si,s=new si,a=new si){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],u=r[6],p=r[7],f=r[8],g=r[9],_=r[10],m=r[11],h=r[12],x=r[13],M=r[14],S=r[15];if(n[0].setComponents(l-s,p-c,m-f,S-h).normalize(),n[1].setComponents(l+s,p+c,m+f,S+h).normalize(),n[2].setComponents(l+a,p+d,m+g,S+x).normalize(),n[3].setComponents(l-a,p-d,m-g,S-x).normalize(),n[4].setComponents(l-o,p-u,m-_,S-M).normalize(),e===Xn)n[5].setComponents(l+o,p+u,m+_,S+M).normalize();else if(e===ta)n[5].setComponents(o,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Ms.x=r.normal.x>0?t.max.x:t.min.x,Ms.y=r.normal.y>0?t.max.y:t.min.y,Ms.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ms)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hh(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function af(i){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,u=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const d=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,d);else{u.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<u.length;f++){const g=u[p],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,u[p]=_)}u.length=p+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class $r extends We{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,d=l+1,u=t/o,p=e/l,f=[],g=[],_=[],m=[];for(let h=0;h<d;h++){const x=h*p-a;for(let M=0;M<c;M++){const S=M*u-s;g.push(S,-x,0),_.push(0,0,1),m.push(M/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<o;x++){const M=x+c*h,S=x+c*(h+1),R=x+1+c*(h+1),L=x+1+c*h;f.push(M,S,L),f.push(S,R,L)}this.setIndex(f),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $r(t.width,t.height,t.widthSegments,t.heightSegments)}}var of=`#ifdef USE_ALPHAHASH
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
#endif`,cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,df=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ff=`#ifdef USE_AOMAP
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
#endif`,pf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mf=`#ifdef USE_BATCHING
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
#endif`,gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yf=`#ifdef USE_IRIDESCENCE
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
#endif`,bf=`#ifdef USE_BUMPMAP
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
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pf=`#define PI 3.141592653589793
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
} // validated`,Lf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ff="gl_FragColor = linearToOutputTexel( gl_FragColor );",kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bf=`#ifdef USE_ENVMAP
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
#endif`,zf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yf=`#ifdef USE_GRADIENTMAP
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
#endif`,Kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jf=`uniform bool receiveShadow;
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
#endif`,Qf=`#ifdef USE_ENVMAP
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
material.diffuseColor = diffuseColor.rgb;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
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
#endif`,sp=`struct PhysicalMaterial {
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
#endif`,op=`#if defined( RE_IndirectDiffuse )
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
#endif`,cp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bp=`#ifdef USE_MORPHNORMALS
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
#endif`,Mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ep=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
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
#endif`,Rp=`#ifdef USE_NORMALMAP
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
#endif`,Pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lp=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,Ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Up=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
}`,jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qp=`#ifdef USE_SKINNING
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
#endif`,Yp=`#ifdef USE_SKINNING
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
#endif`,Kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qp=`#ifndef saturate
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
#endif`,em=`#ifdef USE_TRANSMISSION
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
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
}`,om=`uniform sampler2D t2D;
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
}`,cm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,um=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`#include <common>
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
}`,fm=`#if DEPTH_PACKING == 3200
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
}`,pm=`#define DISTANCE
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
}`,mm=`#define DISTANCE
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
}`,gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`uniform float scale;
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
}`,xm=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,bm=`uniform vec3 diffuse;
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
}`,Mm=`#define LAMBERT
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
}`,Em=`#define MATCAP
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
}`,wm=`#define MATCAP
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
}`,Tm=`#define NORMAL
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
}`,Am=`#define NORMAL
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
}`,Rm=`#define PHONG
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
}`,Pm=`#define STANDARD
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
}`,Lm=`#define STANDARD
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
}`,Im=`#define TOON
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
}`,Nm=`uniform float size;
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
}`,Um=`uniform vec3 diffuse;
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
}`,Om=`#include <common>
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
}`,Fm=`uniform vec3 color;
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
}`,km=`uniform float rotation;
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
}`,Bm=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:of,alphahash_pars_fragment:lf,alphamap_fragment:cf,alphamap_pars_fragment:hf,alphatest_fragment:uf,alphatest_pars_fragment:df,aomap_fragment:ff,aomap_pars_fragment:pf,batching_pars_vertex:mf,batching_vertex:_f,begin_vertex:gf,beginnormal_vertex:vf,bsdfs:xf,iridescence_fragment:yf,bumpmap_pars_fragment:bf,clipping_planes_fragment:Sf,clipping_planes_pars_fragment:Mf,clipping_planes_pars_vertex:Ef,clipping_planes_vertex:wf,color_fragment:Tf,color_pars_fragment:Af,color_pars_vertex:Cf,color_vertex:Rf,common:Pf,cube_uv_reflection_fragment:Lf,defaultnormal_vertex:Df,displacementmap_pars_vertex:If,displacementmap_vertex:Nf,emissivemap_fragment:Uf,emissivemap_pars_fragment:Of,colorspace_fragment:Ff,colorspace_pars_fragment:kf,envmap_fragment:Bf,envmap_common_pars_fragment:zf,envmap_pars_fragment:Hf,envmap_pars_vertex:Vf,envmap_physical_pars_fragment:Qf,envmap_vertex:Gf,fog_vertex:Wf,fog_pars_vertex:Xf,fog_fragment:jf,fog_pars_fragment:qf,gradientmap_pars_fragment:Yf,lightmap_pars_fragment:Zf,lights_lambert_fragment:Kf,lights_lambert_pars_fragment:$f,lights_pars_begin:Jf,lights_toon_fragment:tp,lights_toon_pars_fragment:ep,lights_phong_fragment:np,lights_phong_pars_fragment:ip,lights_physical_fragment:rp,lights_physical_pars_fragment:sp,lights_fragment_begin:ap,lights_fragment_maps:op,lights_fragment_end:lp,logdepthbuf_fragment:cp,logdepthbuf_pars_fragment:hp,logdepthbuf_pars_vertex:up,logdepthbuf_vertex:dp,map_fragment:fp,map_pars_fragment:pp,map_particle_fragment:mp,map_particle_pars_fragment:_p,metalnessmap_fragment:gp,metalnessmap_pars_fragment:vp,morphinstance_vertex:xp,morphcolor_vertex:yp,morphnormal_vertex:bp,morphtarget_pars_vertex:Sp,morphtarget_vertex:Mp,normal_fragment_begin:Ep,normal_fragment_maps:wp,normal_pars_fragment:Tp,normal_pars_vertex:Ap,normal_vertex:Cp,normalmap_pars_fragment:Rp,clearcoat_normal_fragment_begin:Pp,clearcoat_normal_fragment_maps:Lp,clearcoat_pars_fragment:Dp,iridescence_pars_fragment:Ip,opaque_fragment:Np,packing:Up,premultiplied_alpha_fragment:Op,project_vertex:Fp,dithering_fragment:kp,dithering_pars_fragment:Bp,roughnessmap_fragment:zp,roughnessmap_pars_fragment:Hp,shadowmap_pars_fragment:Vp,shadowmap_pars_vertex:Gp,shadowmap_vertex:Wp,shadowmask_pars_fragment:Xp,skinbase_vertex:jp,skinning_pars_vertex:qp,skinning_vertex:Yp,skinnormal_vertex:Zp,specularmap_fragment:Kp,specularmap_pars_fragment:$p,tonemapping_fragment:Jp,tonemapping_pars_fragment:Qp,transmission_fragment:tm,transmission_pars_fragment:em,uv_pars_fragment:nm,uv_pars_vertex:im,uv_vertex:rm,worldpos_vertex:sm,background_vert:am,background_frag:om,backgroundCube_vert:lm,backgroundCube_frag:cm,cube_vert:hm,cube_frag:um,depth_vert:dm,depth_frag:fm,distanceRGBA_vert:pm,distanceRGBA_frag:mm,equirect_vert:_m,equirect_frag:gm,linedashed_vert:vm,linedashed_frag:xm,meshbasic_vert:ym,meshbasic_frag:bm,meshlambert_vert:Sm,meshlambert_frag:Mm,meshmatcap_vert:Em,meshmatcap_frag:wm,meshnormal_vert:Tm,meshnormal_frag:Am,meshphong_vert:Cm,meshphong_frag:Rm,meshphysical_vert:Pm,meshphysical_frag:Lm,meshtoon_vert:Dm,meshtoon_frag:Im,points_vert:Nm,points_frag:Um,shadow_vert:Om,shadow_frag:Fm,sprite_vert:km,sprite_frag:Bm},Dt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Rn={basic:{uniforms:Je([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Je([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new le(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Je([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Je([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Je([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new le(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Je([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Je([Dt.points,Dt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Je([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Je([Dt.common,Dt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Je([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Je([Dt.sprite,Dt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:Je([Dt.common,Dt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:Je([Dt.lights,Dt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Rn.physical={uniforms:Je([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Es={r:0,b:0,g:0},yi=new sn,zm=new se;function Hm(i,t,e,n,r,s,a){const o=new le(0);let l=s===!0?0:1,c,d,u=null,p=0,f=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function _(x){let M=!1;const S=g(x);S===null?h(o,l):S&&S.isColor&&(h(S,1),M=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,M){const S=g(M);S&&(S.isCubeTexture||S.mapping===ha)?(d===void 0&&(d=new Oe(new Ni(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:vr(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),yi.copy(M.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(zm.makeRotationFromEuler(yi)),d.material.toneMapped=pe.getTransfer(S.colorSpace)!==Ae,(u!==S||p!==S.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,u=S,p=S.version,f=i.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Oe(new $r(2,2),new ci({name:"BackgroundMaterial",uniforms:vr(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=pe.getTransfer(S.colorSpace)!==Ae,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||p!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,p=S.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function h(x,M){x.getRGB(Es,kh(i)),n.buffers.color.setClear(Es.r,Es.g,Es.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),l=M,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,h(o,l)},render:_,addToRenderList:m}}function Vm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,a=!1;function o(w,B,C,z,y){let V=!1;const W=u(z,C,B);s!==W&&(s=W,c(s.object)),V=f(w,z,C,y),V&&g(w,z,C,y),y!==null&&t.update(y,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,S(w,B,C,z),y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(y).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function d(w){return i.deleteVertexArray(w)}function u(w,B,C){const z=C.wireframe===!0;let y=n[w.id];y===void 0&&(y={},n[w.id]=y);let V=y[B.id];V===void 0&&(V={},y[B.id]=V);let W=V[z];return W===void 0&&(W=p(l()),V[z]=W),W}function p(w){const B=[],C=[],z=[];for(let y=0;y<e;y++)B[y]=0,C[y]=0,z[y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:C,attributeDivisors:z,object:w,attributes:{},index:null}}function f(w,B,C,z){const y=s.attributes,V=B.attributes;let W=0;const q=C.getAttributes();for(const J in q)if(q[J].location>=0){const pt=y[J];let j=V[J];if(j===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(j=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(j=w.instanceColor)),pt===void 0||pt.attribute!==j||j&&pt.data!==j.data)return!0;W++}return s.attributesNum!==W||s.index!==z}function g(w,B,C,z){const y={},V=B.attributes;let W=0;const q=C.getAttributes();for(const J in q)if(q[J].location>=0){let pt=V[J];pt===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(pt=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(pt=w.instanceColor));const j={};j.attribute=pt,pt&&pt.data&&(j.data=pt.data),y[J]=j,W++}s.attributes=y,s.attributesNum=W,s.index=z}function _(){const w=s.newAttributes;for(let B=0,C=w.length;B<C;B++)w[B]=0}function m(w){h(w,0)}function h(w,B){const C=s.newAttributes,z=s.enabledAttributes,y=s.attributeDivisors;C[w]=1,z[w]===0&&(i.enableVertexAttribArray(w),z[w]=1),y[w]!==B&&(i.vertexAttribDivisor(w,B),y[w]=B)}function x(){const w=s.newAttributes,B=s.enabledAttributes;for(let C=0,z=B.length;C<z;C++)B[C]!==w[C]&&(i.disableVertexAttribArray(C),B[C]=0)}function M(w,B,C,z,y,V,W){W===!0?i.vertexAttribIPointer(w,B,C,y,V):i.vertexAttribPointer(w,B,C,z,y,V)}function S(w,B,C,z){_();const y=z.attributes,V=C.getAttributes(),W=B.defaultAttributeValues;for(const q in V){const J=V[q];if(J.location>=0){let Q=y[q];if(Q===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor)),Q!==void 0){const pt=Q.normalized,j=Q.itemSize,Z=t.get(Q);if(Z===void 0)continue;const vt=Z.buffer,X=Z.type,Y=Z.bytesPerElement,ct=X===i.INT||X===i.UNSIGNED_INT||Q.gpuType===il;if(Q.isInterleavedBufferAttribute){const ft=Q.data,yt=ft.stride,Tt=Q.offset;if(ft.isInstancedInterleavedBuffer){for(let zt=0;zt<J.locationSize;zt++)h(J.location+zt,ft.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let zt=0;zt<J.locationSize;zt++)m(J.location+zt);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let zt=0;zt<J.locationSize;zt++)M(J.location+zt,j/J.locationSize,X,pt,yt*Y,(Tt+j/J.locationSize*zt)*Y,ct)}else{if(Q.isInstancedBufferAttribute){for(let ft=0;ft<J.locationSize;ft++)h(J.location+ft,Q.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ft=0;ft<J.locationSize;ft++)m(J.location+ft);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let ft=0;ft<J.locationSize;ft++)M(J.location+ft,j/J.locationSize,X,pt,j*Y,j/J.locationSize*ft*Y,ct)}}else if(W!==void 0){const pt=W[q];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(J.location,pt);break;case 3:i.vertexAttrib3fv(J.location,pt);break;case 4:i.vertexAttrib4fv(J.location,pt);break;default:i.vertexAttrib1fv(J.location,pt)}}}}x()}function R(){N();for(const w in n){const B=n[w];for(const C in B){const z=B[C];for(const y in z)d(z[y].object),delete z[y];delete B[C]}delete n[w]}}function L(w){if(n[w.id]===void 0)return;const B=n[w.id];for(const C in B){const z=B[C];for(const y in z)d(z[y].object),delete z[y];delete B[C]}delete n[w.id]}function P(w){for(const B in n){const C=n[B];if(C[w.id]===void 0)continue;const z=C[w.id];for(const y in z)d(z[y].object),delete z[y];delete C[w.id]}}function N(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function Gm(i,t,e){let n;function r(c){n=c}function s(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function a(c,d,u){u!==0&&(i.drawArraysInstanced(n,c,d,u),e.update(d,n,u))}function o(c,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let f=0;for(let g=0;g<u;g++)f+=d[g];e.update(f,n,1)}function l(c,d,u,p){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],d[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,p,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_]*p[_];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Wm(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==_n&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const N=P===Zr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Yn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ln&&!N)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:R,maxSamples:L}}function Xm(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new si,o=new ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const f=u.length!==0||p||n!==0||r;return r=p,n=u.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,p){e=d(u,p,0)},this.setState=function(u,p,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,h=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?d(null):c();else{const x=s?0:n,M=x*4;let S=h.clippingState||null;l.value=S,S=d(g,p,M,f);for(let R=0;R!==M;++R)S[R]=e[R];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(u,p,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=f+_*4,x=p.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let M=0,S=f;M!==_;++M,S+=4)a.copy(u[M]).applyMatrix4(x,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function jm(i){let t=new WeakMap;function e(a,o){return o===vo?a.mapping=fr:o===xo&&(a.mapping=pr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===vo||o===xo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new nf(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class ul extends Bh{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const rr=4,ic=[.125,.215,.35,.446,.526,.582],wi=20,Ga=new ul,rc=new le;let Wa=null,Xa=0,ja=0,qa=!1;const Si=(1+Math.sqrt(5))/2,Ji=1/Si,sc=[new K(-Si,Ji,0),new K(Si,Ji,0),new K(-Ji,0,Si),new K(Ji,0,Si),new K(0,Si,-Ji),new K(0,Si,Ji),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class ac{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wa,Xa,ja),this._renderer.xr.enabled=qa,t.scissorTest=!1,ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fr||t.mapping===pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Zr,format:_n,colorSpace:yr,depthBuffer:!1},r=oc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qm(s)),this._blurMaterial=Ym(s,t,e)}return r}_compileMaterial(t){const e=new Oe(this._lodPlanes[0],t);this._renderer.compile(e,Ga)}_sceneToCubeUV(t,e,n,r){const o=new Ye(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(rc),d.toneMapping=li,d.autoClear=!1;const f=new jr({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new Oe(new Ni,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(rc),_=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):x===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const M=this._cubeSize;ws(r,x*M,h>2?M:0,M,M),d.setRenderTarget(r),_&&d.render(g,o),d.render(t,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=p,d.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===fr||t.mapping===pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Oe(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;ws(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ga)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=sc[(r-s-1)%sc.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Oe(this._lodPlanes[r],c),p=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*wi-1),_=s/g,m=isFinite(s)?1+Math.floor(d*_):wi;m>wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);const h=[];let x=0;for(let P=0;P<wi;++P){const N=P/_,E=Math.exp(-N*N/2);h.push(E),P===0?x+=E:P<m&&(x+=2*E)}for(let P=0;P<h.length;P++)h[P]=h[P]/x;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:M}=this;p.dTheta.value=g,p.mipInt.value=M-n;const S=this._sizeLods[r],R=3*S*(r>M-rr?r-M+rr:0),L=4*(this._cubeSize-S);ws(e,R,L,3*S,2*S),l.setRenderTarget(e),l.render(u,Ga)}}function qm(i){const t=[],e=[],n=[];let r=i;const s=i-rr+1+ic.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-rr?l=ic[a-i+rr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,u=1+c,p=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,g=6,_=3,m=2,h=1,x=new Float32Array(_*g*f),M=new Float32Array(m*g*f),S=new Float32Array(h*g*f);for(let L=0;L<f;L++){const P=L%3*2/3-1,N=L>2?0:-1,E=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];x.set(E,_*g*L),M.set(p,m*g*L);const w=[L,L,L,L,L,L];S.set(w,h*g*L)}const R=new We;R.setAttribute("position",new un(x,_)),R.setAttribute("uv",new un(M,m)),R.setAttribute("faceIndex",new un(S,h)),t.push(R),r>rr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function oc(i,t,e){const n=new Pi(i,t,e);return n.texture.mapping=ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ws(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Ym(i,t,e){const n=new Float32Array(wi),r=new K(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dl(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function lc(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dl(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function cc(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function dl(){return`

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
	`}function Zm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===vo||l===xo,d=l===fr||l===pr;if(c||d){let u=t.get(o);const p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new ac(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||d&&f&&r(f)?(e===null&&(e=new ac(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Km(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Fr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function $m(i,t,e,n){const r={},s=new WeakMap;function a(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let m=0,h=_.length;m<h;m++)t.remove(_[m])}p.removeEventListener("dispose",a),delete r[p.id];const f=s.get(p);f&&(t.remove(f),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(u,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,e.memory.geometries++),p}function l(u){const p=u.attributes;for(const g in p)t.update(p[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,h=_.length;m<h;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const p=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let M=0,S=x.length;M<S;M+=3){const R=x[M+0],L=x[M+1],P=x[M+2];p.push(R,L,L,P,P,R)}}else if(g!==void 0){const x=g.array;_=g.version;for(let M=0,S=x.length/3-1;M<S;M+=3){const R=M+0,L=M+1,P=M+2;p.push(R,L,L,P,P,R)}}else return;const m=new(Lh(p)?Fh:Oh)(p,1);m.version=_;const h=s.get(u);h&&t.remove(h),s.set(u,m)}function d(u){const p=s.get(u);if(p){const f=u.index;f!==null&&p.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function Jm(i,t,e){let n;function r(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,f){i.drawElements(n,f,s,p*a),e.update(f,n,1)}function c(p,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,p*a,g),e.update(f,n,g))}function d(p,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,p,0,g);let m=0;for(let h=0;h<g;h++)m+=f[h];e.update(m,n,1)}function u(p,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<p.length;h++)c(p[h]/a,f[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,p,0,_,0,g);let h=0;for(let x=0;x<g;x++)h+=f[x]*_[x];e.update(h,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Qm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function t_(i,t,e){const n=new WeakMap,r=new Me;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let p=n.get(o);if(p===void 0||p.count!==u){let w=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",w)};var f=w;p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let R=o.attributes.position.count*S,L=1;R>t.maxTextureSize&&(L=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const P=new Float32Array(R*L*4*u),N=new Ih(P,R,L,u);N.type=Ln,N.needsUpdate=!0;const E=S*4;for(let B=0;B<u;B++){const C=h[B],z=x[B],y=M[B],V=R*L*4*B;for(let W=0;W<C.count;W++){const q=W*E;g===!0&&(r.fromBufferAttribute(C,W),P[V+q+0]=r.x,P[V+q+1]=r.y,P[V+q+2]=r.z,P[V+q+3]=0),_===!0&&(r.fromBufferAttribute(z,W),P[V+q+4]=r.x,P[V+q+5]=r.y,P[V+q+6]=r.z,P[V+q+7]=0),m===!0&&(r.fromBufferAttribute(y,W),P[V+q+8]=r.x,P[V+q+9]=r.y,P[V+q+10]=r.z,P[V+q+11]=y.itemSize===4?r.w:1)}}p={count:u,texture:N,size:new ne(R,L)},n.set(o,p),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function e_(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Vh extends Ge{constructor(t,e,n,r,s,a,o,l,c,d=lr){if(d!==lr&&d!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===lr&&(n=Ri),n===void 0&&d===_r&&(n=mr),super(null,r,s,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Gh=new Ge,hc=new Vh(1,1),Wh=new Ih,Xh=new zd,jh=new zh,uc=[],dc=[],fc=new Float32Array(16),pc=new Float32Array(9),mc=new Float32Array(4);function br(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=uc[r];if(s===void 0&&(s=new Float32Array(r),uc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fa(i,t){let e=dc[t];e===void 0&&(e=new Int32Array(t),dc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function n_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function i_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function r_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function s_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function a_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;mc.set(n),i.uniformMatrix2fv(this.addr,!1,mc),Be(e,n)}}function o_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;pc.set(n),i.uniformMatrix3fv(this.addr,!1,pc),Be(e,n)}}function l_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;fc.set(n),i.uniformMatrix4fv(this.addr,!1,fc),Be(e,n)}}function c_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function h_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function u_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function d_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function f_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function p_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function m_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function __(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function g_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(hc.compareFunction=Ph,s=hc):s=Gh,e.setTexture2D(t||s,r)}function v_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Xh,r)}function x_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||jh,r)}function y_(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Wh,r)}function b_(i){switch(i){case 5126:return n_;case 35664:return i_;case 35665:return r_;case 35666:return s_;case 35674:return a_;case 35675:return o_;case 35676:return l_;case 5124:case 35670:return c_;case 35667:case 35671:return h_;case 35668:case 35672:return u_;case 35669:case 35673:return d_;case 5125:return f_;case 36294:return p_;case 36295:return m_;case 36296:return __;case 35678:case 36198:case 36298:case 36306:case 35682:return g_;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return x_;case 36289:case 36303:case 36311:case 36292:return y_}}function S_(i,t){i.uniform1fv(this.addr,t)}function M_(i,t){const e=br(t,this.size,2);i.uniform2fv(this.addr,e)}function E_(i,t){const e=br(t,this.size,3);i.uniform3fv(this.addr,e)}function w_(i,t){const e=br(t,this.size,4);i.uniform4fv(this.addr,e)}function T_(i,t){const e=br(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function A_(i,t){const e=br(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function C_(i,t){const e=br(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function R_(i,t){i.uniform1iv(this.addr,t)}function P_(i,t){i.uniform2iv(this.addr,t)}function L_(i,t){i.uniform3iv(this.addr,t)}function D_(i,t){i.uniform4iv(this.addr,t)}function I_(i,t){i.uniform1uiv(this.addr,t)}function N_(i,t){i.uniform2uiv(this.addr,t)}function U_(i,t){i.uniform3uiv(this.addr,t)}function O_(i,t){i.uniform4uiv(this.addr,t)}function F_(i,t,e){const n=this.cache,r=t.length,s=fa(e,r);ke(n,s)||(i.uniform1iv(this.addr,s),Be(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Gh,s[a])}function k_(i,t,e){const n=this.cache,r=t.length,s=fa(e,r);ke(n,s)||(i.uniform1iv(this.addr,s),Be(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Xh,s[a])}function B_(i,t,e){const n=this.cache,r=t.length,s=fa(e,r);ke(n,s)||(i.uniform1iv(this.addr,s),Be(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||jh,s[a])}function z_(i,t,e){const n=this.cache,r=t.length,s=fa(e,r);ke(n,s)||(i.uniform1iv(this.addr,s),Be(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Wh,s[a])}function H_(i){switch(i){case 5126:return S_;case 35664:return M_;case 35665:return E_;case 35666:return w_;case 35674:return T_;case 35675:return A_;case 35676:return C_;case 5124:case 35670:return R_;case 35667:case 35671:return P_;case 35668:case 35672:return L_;case 35669:case 35673:return D_;case 5125:return I_;case 36294:return N_;case 36295:return U_;case 36296:return O_;case 35678:case 36198:case 36298:case 36306:case 35682:return F_;case 35679:case 36299:case 36307:return k_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return z_}}class V_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=b_(e.type)}}class G_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=H_(e.type)}}class W_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Ya=/(\w+)(\])?(\[|\.)?/g;function _c(i,t){i.seq.push(t),i.map[t.id]=t}function X_(i,t,e){const n=i.name,r=n.length;for(Ya.lastIndex=0;;){const s=Ya.exec(n),a=Ya.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){_c(e,c===void 0?new V_(o,i,t):new G_(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new W_(o),_c(e,u)),e=u}}}class $s{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);X_(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function gc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const j_=37297;let q_=0;function Y_(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const vc=new ue;function Z_(i){pe._getMatrix(vc,pe.workingColorSpace,i);const t=`mat3( ${vc.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case da:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function xc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Y_(i.getShaderSource(t),a)}else return r}function K_(i,t){const e=Z_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function $_(i,t){let e;switch(t){case Ku:e="Linear";break;case $u:e="Reinhard";break;case Ju:e="Cineon";break;case Qu:e="ACESFilmic";break;case ed:e="AgX";break;case nd:e="Neutral";break;case td:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ts=new K;function J_(){pe.getLuminanceCoefficients(Ts);const i=Ts.x.toFixed(4),t=Ts.y.toFixed(4),e=Ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function tg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function eg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function kr(i){return i!==""}function yc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(i){return i.replace(ng,rg)}const ig=new Map;function rg(i,t){let e=de[t];if(e===void 0){const n=ig.get(t);if(n!==void 0)e=de[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Yo(e)}const sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sc(i){return i.replace(sg,ag)}function ag(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mc(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function og(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ru?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function lg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fr:case pr:t="ENVMAP_TYPE_CUBE";break;case ha:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pr:t="ENVMAP_MODE_REFRACTION";break}return t}function hg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ca:t="ENVMAP_BLENDING_MULTIPLY";break;case Yu:t="ENVMAP_BLENDING_MIX";break;case Zu:t="ENVMAP_BLENDING_ADD";break}return t}function ug(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function dg(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=og(e),c=lg(e),d=cg(e),u=hg(e),p=ug(e),f=Q_(e),g=tg(s),_=r.createProgram();let m,h,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(kr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(kr).join(`
`),h.length>0&&(h+=`
`)):(m=[Mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),h=[Mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?de.tonemapping_pars_fragment:"",e.toneMapping!==li?$_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,K_("linearToOutputTexel",e.outputColorSpace),J_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(kr).join(`
`)),a=Yo(a),a=yc(a,e),a=bc(a,e),o=Yo(o),o=yc(o,e),o=bc(o,e),a=Sc(a),o=Sc(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=x+m+a,S=x+h+o,R=gc(r,r.VERTEX_SHADER,M),L=gc(r,r.FRAGMENT_SHADER,S);r.attachShader(_,R),r.attachShader(_,L),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(B){if(i.debug.checkShaderErrors){const C=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(R).trim(),y=r.getShaderInfoLog(L).trim();let V=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,R,L);else{const q=xc(r,R,"vertex"),J=xc(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+C+`
`+q+`
`+J)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(z===""||y==="")&&(W=!1);W&&(B.diagnostics={runnable:V,programLog:C,vertexShader:{log:z,prefix:m},fragmentShader:{log:y,prefix:h}})}r.deleteShader(R),r.deleteShader(L),N=new $s(r,_),E=eg(r,_)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(_,j_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=q_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=L,this}let fg=0;class pg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new mg(t),e.set(t,n)),n}}class mg{constructor(t){this.id=fg++,this.code=t,this.usedTimes=0}}function _g(i,t,e,n,r,s,a){const o=new Nh,l=new pg,c=new Set,d=[],u=r.logarithmicDepthBuffer,p=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,w,B,C,z){const y=C.fog,V=z.geometry,W=E.isMeshStandardMaterial?C.environment:null,q=(E.isMeshStandardMaterial?e:t).get(E.envMap||W),J=q&&q.mapping===ha?q.image.height:null,Q=g[E.type];E.precision!==null&&(f=r.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const pt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,j=pt!==void 0?pt.length:0;let Z=0;V.morphAttributes.position!==void 0&&(Z=1),V.morphAttributes.normal!==void 0&&(Z=2),V.morphAttributes.color!==void 0&&(Z=3);let vt,X,Y,ct;if(Q){const he=Rn[Q];vt=he.vertexShader,X=he.fragmentShader}else vt=E.vertexShader,X=E.fragmentShader,l.update(E),Y=l.getVertexShaderID(E),ct=l.getFragmentShaderID(E);const ft=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),Tt=z.isInstancedMesh===!0,zt=z.isBatchedMesh===!0,Jt=!!E.map,te=!!E.matcap,me=!!q,v=!!E.aoMap,_t=!!E.lightMap,st=!!E.bumpMap,H=!!E.normalMap,F=!!E.displacementMap,$=!!E.emissiveMap,ot=!!E.metalnessMap,D=!!E.roughnessMap,b=E.anisotropy>0,G=E.clearcoat>0,rt=E.dispersion>0,nt=E.iridescence>0,at=E.sheen>0,At=E.transmission>0,St=b&&!!E.anisotropyMap,Rt=G&&!!E.clearcoatMap,ce=G&&!!E.clearcoatNormalMap,Mt=G&&!!E.clearcoatRoughnessMap,Ft=nt&&!!E.iridescenceMap,Nt=nt&&!!E.iridescenceThicknessMap,Zt=at&&!!E.sheenColorMap,kt=at&&!!E.sheenRoughnessMap,ee=!!E.specularMap,ie=!!E.specularColorMap,be=!!E.specularIntensityMap,et=At&&!!E.transmissionMap,Pt=At&&!!E.thicknessMap,mt=!!E.gradientMap,xt=!!E.alphaMap,Lt=E.alphaTest>0,Ut=!!E.alphaHash,ae=!!E.extensions;let Pe=li;E.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Pe=i.toneMapping);const ze={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:vt,fragmentShader:X,defines:E.defines,customVertexShaderID:Y,customFragmentShaderID:ct,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:zt,batchingColor:zt&&z._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&z.instanceColor!==null,instancingMorph:Tt&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:yr,alphaToCoverage:!!E.alphaToCoverage,map:Jt,matcap:te,envMap:me,envMapMode:me&&q.mapping,envMapCubeUVHeight:J,aoMap:v,lightMap:_t,bumpMap:st,normalMap:H,displacementMap:p&&F,emissiveMap:$,normalMapObjectSpace:H&&E.normalMapType===ld,normalMapTangentSpace:H&&E.normalMapType===ua,metalnessMap:ot,roughnessMap:D,anisotropy:b,anisotropyMap:St,clearcoat:G,clearcoatMap:Rt,clearcoatNormalMap:ce,clearcoatRoughnessMap:Mt,dispersion:rt,iridescence:nt,iridescenceMap:Ft,iridescenceThicknessMap:Nt,sheen:at,sheenColorMap:Zt,sheenRoughnessMap:kt,specularMap:ee,specularColorMap:ie,specularIntensityMap:be,transmission:At,transmissionMap:et,thicknessMap:Pt,gradientMap:mt,opaque:E.transparent===!1&&E.blending===or&&E.alphaToCoverage===!1,alphaMap:xt,alphaTest:Lt,alphaHash:Ut,combine:E.combine,mapUv:Jt&&_(E.map.channel),aoMapUv:v&&_(E.aoMap.channel),lightMapUv:_t&&_(E.lightMap.channel),bumpMapUv:st&&_(E.bumpMap.channel),normalMapUv:H&&_(E.normalMap.channel),displacementMapUv:F&&_(E.displacementMap.channel),emissiveMapUv:$&&_(E.emissiveMap.channel),metalnessMapUv:ot&&_(E.metalnessMap.channel),roughnessMapUv:D&&_(E.roughnessMap.channel),anisotropyMapUv:St&&_(E.anisotropyMap.channel),clearcoatMapUv:Rt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:kt&&_(E.sheenRoughnessMap.channel),specularMapUv:ee&&_(E.specularMap.channel),specularColorMapUv:ie&&_(E.specularColorMap.channel),specularIntensityMapUv:be&&_(E.specularIntensityMap.channel),transmissionMapUv:et&&_(E.transmissionMap.channel),thicknessMapUv:Pt&&_(E.thicknessMap.channel),alphaMapUv:xt&&_(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(H||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!V.attributes.uv&&(Jt||xt),fog:!!y,useFog:E.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:yt,skinning:z.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Z,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Jt&&E.map.isVideoTexture===!0&&pe.getTransfer(E.map.colorSpace)===Ae,decodeVideoTextureEmissive:$&&E.emissiveMap.isVideoTexture===!0&&pe.getTransfer(E.emissiveMap.colorSpace)===Ae,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Pn,flipSided:E.side===rn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ae&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&E.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function h(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const B in E.defines)w.push(B),w.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(x(w,E),M(w,E),w.push(i.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function x(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function M(E,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),E.push(o.mask)}function S(E){const w=g[E.type];let B;if(w){const C=Rn[w];B=Jd.clone(C.uniforms)}else B=E.uniforms;return B}function R(E,w){let B;for(let C=0,z=d.length;C<z;C++){const y=d[C];if(y.cacheKey===w){B=y,++B.usedTimes;break}}return B===void 0&&(B=new dg(i,w,E,s),d.push(B)),B}function L(E){if(--E.usedTimes===0){const w=d.indexOf(E);d[w]=d[d.length-1],d.pop(),E.destroy()}}function P(E){l.remove(E)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:R,releaseProgram:L,releaseShaderCache:P,programs:d,dispose:N}}function gg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function vg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ec(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(u,p,f,g,_,m){let h=i[t];return h===void 0?(h={id:u.id,object:u,geometry:p,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=h):(h.id=u.id,h.object=u,h.geometry=p,h.material=f,h.groupOrder=g,h.renderOrder=u.renderOrder,h.z=_,h.group=m),t++,h}function o(u,p,f,g,_,m){const h=a(u,p,f,g,_,m);f.transmission>0?n.push(h):f.transparent===!0?r.push(h):e.push(h)}function l(u,p,f,g,_,m){const h=a(u,p,f,g,_,m);f.transmission>0?n.unshift(h):f.transparent===!0?r.unshift(h):e.unshift(h)}function c(u,p){e.length>1&&e.sort(u||vg),n.length>1&&n.sort(p||Ec),r.length>1&&r.sort(p||Ec)}function d(){for(let u=t,p=i.length;u<p;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function xg(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new wc,i.set(n,[a])):r>=s.length?(a=new wc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function yg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new K,color:new le};break;case"SpotLight":e={position:new K,direction:new K,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new K,halfWidth:new K,halfHeight:new K};break}return i[t.id]=e,e}}}function bg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Sg=0;function Mg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Eg(i){const t=new yg,e=bg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new K);const r=new K,s=new se,a=new se;function o(c){let d=0,u=0,p=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,h=0,x=0,M=0,S=0,R=0,L=0,P=0;c.sort(Mg);for(let E=0,w=c.length;E<w;E++){const B=c[E],C=B.color,z=B.intensity,y=B.distance,V=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=C.r*z,u+=C.g*z,p+=C.b*z;else if(B.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(B.sh.coefficients[W],z);P++}else if(B.isDirectionalLight){const W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const q=B.shadow,J=e.get(B);J.shadowIntensity=q.intensity,J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,n.directionalShadow[f]=J,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=B.shadow.matrix,x++}n.directional[f]=W,f++}else if(B.isSpotLight){const W=t.get(B);W.position.setFromMatrixPosition(B.matrixWorld),W.color.copy(C).multiplyScalar(z),W.distance=y,W.coneCos=Math.cos(B.angle),W.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),W.decay=B.decay,n.spot[_]=W;const q=B.shadow;if(B.map&&(n.spotLightMap[R]=B.map,R++,q.updateMatrices(B),B.castShadow&&L++),n.spotLightMatrix[_]=q.matrix,B.castShadow){const J=e.get(B);J.shadowIntensity=q.intensity,J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=V,S++}_++}else if(B.isRectAreaLight){const W=t.get(B);W.color.copy(C).multiplyScalar(z),W.halfWidth.set(B.width*.5,0,0),W.halfHeight.set(0,B.height*.5,0),n.rectArea[m]=W,m++}else if(B.isPointLight){const W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity),W.distance=B.distance,W.decay=B.decay,B.castShadow){const q=B.shadow,J=e.get(B);J.shadowIntensity=q.intensity,J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,J.shadowCameraNear=q.camera.near,J.shadowCameraFar=q.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=B.shadow.matrix,M++}n.point[g]=W,g++}else if(B.isHemisphereLight){const W=t.get(B);W.skyColor.copy(B.color).multiplyScalar(z),W.groundColor.copy(B.groundColor).multiplyScalar(z),n.hemi[h]=W,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=p;const N=n.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==h||N.numDirectionalShadows!==x||N.numPointShadows!==M||N.numSpotShadows!==S||N.numSpotMaps!==R||N.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=S+R-L,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=P,N.directionalLength=f,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=h,N.numDirectionalShadows=x,N.numPointShadows=M,N.numSpotShadows=S,N.numSpotMaps=R,N.numLightProbes=P,n.version=Sg++)}function l(c,d){let u=0,p=0,f=0,g=0,_=0;const m=d.matrixWorldInverse;for(let h=0,x=c.length;h<x;h++){const M=c[h];if(M.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),u++}else if(M.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const S=n.point[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Tc(i){const t=new Eg(i),e=[],n=[];function r(d){c.camera=d,e.length=0,n.length=0}function s(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function wg(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Tc(i),t.set(r,[o])):s>=a.length?(o=new Tc(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Tg extends wn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ag extends wn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rg=`uniform sampler2D shadow_pass;
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
}`;function Pg(i,t,e){let n=new hl;const r=new ne,s=new ne,a=new Me,o=new Tg({depthPacking:od}),l=new Ag,c={},d=e.maxTextureSize,u={[qn]:rn,[rn]:qn,[Pn]:Pn},p=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:Cg,fragmentShader:Rg}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new We;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Oe(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vh;let h=this.type;this.render=function(L,P,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const E=i.getRenderTarget(),w=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),C=i.state;C.setBlending(oi),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const z=h!==Hn&&this.type===Hn,y=h===Hn&&this.type!==Hn;for(let V=0,W=L.length;V<W;V++){const q=L[V],J=q.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const Q=J.getFrameExtents();if(r.multiply(Q),s.copy(J.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Q.x),r.x=s.x*Q.x,J.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Q.y),r.y=s.y*Q.y,J.mapSize.y=s.y)),J.map===null||z===!0||y===!0){const j=this.type!==Hn?{minFilter:hn,magFilter:hn}:{};J.map!==null&&J.map.dispose(),J.map=new Pi(r.x,r.y,j),J.map.texture.name=q.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const pt=J.getViewportCount();for(let j=0;j<pt;j++){const Z=J.getViewport(j);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),C.viewport(a),J.updateMatrices(q,j),n=J.getFrustum(),S(P,N,J.camera,q,this.type)}J.isPointLightShadow!==!0&&this.type===Hn&&x(J,N),J.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(E,w,B)};function x(L,P){const N=t.update(_);p.defines.VSM_SAMPLES!==L.blurSamples&&(p.defines.VSM_SAMPLES=L.blurSamples,f.defines.VSM_SAMPLES=L.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Pi(r.x,r.y)),p.uniforms.shadow_pass.value=L.map.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(P,null,N,p,_,null),f.uniforms.shadow_pass.value=L.mapPass.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(P,null,N,f,_,null)}function M(L,P,N,E){let w=null;const B=N.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(B!==void 0)w=B;else if(w=N.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const C=w.uuid,z=P.uuid;let y=c[C];y===void 0&&(y={},c[C]=y);let V=y[z];V===void 0&&(V=w.clone(),y[z]=V,P.addEventListener("dispose",R)),w=V}if(w.visible=P.visible,w.wireframe=P.wireframe,E===Hn?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:u[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,N.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const C=i.properties.get(w);C.light=N}return w}function S(L,P,N,E,w){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&w===Hn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,L.matrixWorld);const z=t.update(L),y=L.material;if(Array.isArray(y)){const V=z.groups;for(let W=0,q=V.length;W<q;W++){const J=V[W],Q=y[J.materialIndex];if(Q&&Q.visible){const pt=M(L,Q,E,w);L.onBeforeShadow(i,L,P,N,z,pt,J),i.renderBufferDirect(N,null,z,pt,L,J),L.onAfterShadow(i,L,P,N,z,pt,J)}}}else if(y.visible){const V=M(L,y,E,w);L.onBeforeShadow(i,L,P,N,z,V,null),i.renderBufferDirect(N,null,z,V,L,null),L.onAfterShadow(i,L,P,N,z,V,null)}}const C=L.children;for(let z=0,y=C.length;z<y;z++)S(C[z],P,N,E,w)}function R(L){L.target.removeEventListener("dispose",R);for(const N in c){const E=c[N],w=L.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}const Lg={[ho]:uo,[fo]:_o,[po]:go,[dr]:mo,[uo]:ho,[_o]:fo,[go]:po,[mo]:dr};function Dg(i,t){function e(){let et=!1;const Pt=new Me;let mt=null;const xt=new Me(0,0,0,0);return{setMask:function(Lt){mt!==Lt&&!et&&(i.colorMask(Lt,Lt,Lt,Lt),mt=Lt)},setLocked:function(Lt){et=Lt},setClear:function(Lt,Ut,ae,Pe,ze){ze===!0&&(Lt*=Pe,Ut*=Pe,ae*=Pe),Pt.set(Lt,Ut,ae,Pe),xt.equals(Pt)===!1&&(i.clearColor(Lt,Ut,ae,Pe),xt.copy(Pt))},reset:function(){et=!1,mt=null,xt.set(-1,0,0,0)}}}function n(){let et=!1,Pt=!1,mt=null,xt=null,Lt=null;return{setReversed:function(Ut){if(Pt!==Ut){const ae=t.get("EXT_clip_control");Pt?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT);const Pe=Lt;Lt=null,this.setClear(Pe)}Pt=Ut},getReversed:function(){return Pt},setTest:function(Ut){Ut?ft(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(Ut){mt!==Ut&&!et&&(i.depthMask(Ut),mt=Ut)},setFunc:function(Ut){if(Pt&&(Ut=Lg[Ut]),xt!==Ut){switch(Ut){case ho:i.depthFunc(i.NEVER);break;case uo:i.depthFunc(i.ALWAYS);break;case fo:i.depthFunc(i.LESS);break;case dr:i.depthFunc(i.LEQUAL);break;case po:i.depthFunc(i.EQUAL);break;case mo:i.depthFunc(i.GEQUAL);break;case _o:i.depthFunc(i.GREATER);break;case go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=Ut}},setLocked:function(Ut){et=Ut},setClear:function(Ut){Lt!==Ut&&(Pt&&(Ut=1-Ut),i.clearDepth(Ut),Lt=Ut)},reset:function(){et=!1,mt=null,xt=null,Lt=null,Pt=!1}}}function r(){let et=!1,Pt=null,mt=null,xt=null,Lt=null,Ut=null,ae=null,Pe=null,ze=null;return{setTest:function(he){et||(he?ft(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(he){Pt!==he&&!et&&(i.stencilMask(he),Pt=he)},setFunc:function(he,Qe,gn){(mt!==he||xt!==Qe||Lt!==gn)&&(i.stencilFunc(he,Qe,gn),mt=he,xt=Qe,Lt=gn)},setOp:function(he,Qe,gn){(Ut!==he||ae!==Qe||Pe!==gn)&&(i.stencilOp(he,Qe,gn),Ut=he,ae=Qe,Pe=gn)},setLocked:function(he){et=he},setClear:function(he){ze!==he&&(i.clearStencil(he),ze=he)},reset:function(){et=!1,Pt=null,mt=null,xt=null,Lt=null,Ut=null,ae=null,Pe=null,ze=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let d={},u={},p=new WeakMap,f=[],g=null,_=!1,m=null,h=null,x=null,M=null,S=null,R=null,L=null,P=new le(0,0,0),N=0,E=!1,w=null,B=null,C=null,z=null,y=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,q=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(J)[1]),W=q>=1):J.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),W=q>=2);let Q=null,pt={};const j=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),vt=new Me().fromArray(j),X=new Me().fromArray(Z);function Y(et,Pt,mt,xt){const Lt=new Uint8Array(4),Ut=i.createTexture();i.bindTexture(et,Ut),i.texParameteri(et,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(et,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ae=0;ae<mt;ae++)et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?i.texImage3D(Pt,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,Lt):i.texImage2D(Pt+ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Lt);return Ut}const ct={};ct[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ft(i.DEPTH_TEST),a.setFunc(dr),st(!1),H(wl),ft(i.CULL_FACE),v(oi);function ft(et){d[et]!==!0&&(i.enable(et),d[et]=!0)}function yt(et){d[et]!==!1&&(i.disable(et),d[et]=!1)}function Tt(et,Pt){return u[et]!==Pt?(i.bindFramebuffer(et,Pt),u[et]=Pt,et===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Pt),et===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Pt),!0):!1}function zt(et,Pt){let mt=f,xt=!1;if(et){mt=p.get(Pt),mt===void 0&&(mt=[],p.set(Pt,mt));const Lt=et.textures;if(mt.length!==Lt.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let Ut=0,ae=Lt.length;Ut<ae;Ut++)mt[Ut]=i.COLOR_ATTACHMENT0+Ut;mt.length=Lt.length,xt=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,xt=!0);xt&&i.drawBuffers(mt)}function Jt(et){return g!==et?(i.useProgram(et),g=et,!0):!1}const te={[Mi]:i.FUNC_ADD,[Lu]:i.FUNC_SUBTRACT,[Du]:i.FUNC_REVERSE_SUBTRACT};te[Iu]=i.MIN,te[Nu]=i.MAX;const me={[Uu]:i.ZERO,[Ou]:i.ONE,[Fu]:i.SRC_COLOR,[lo]:i.SRC_ALPHA,[Gu]:i.SRC_ALPHA_SATURATE,[Hu]:i.DST_COLOR,[Bu]:i.DST_ALPHA,[ku]:i.ONE_MINUS_SRC_COLOR,[co]:i.ONE_MINUS_SRC_ALPHA,[Vu]:i.ONE_MINUS_DST_COLOR,[zu]:i.ONE_MINUS_DST_ALPHA,[Wu]:i.CONSTANT_COLOR,[Xu]:i.ONE_MINUS_CONSTANT_COLOR,[ju]:i.CONSTANT_ALPHA,[qu]:i.ONE_MINUS_CONSTANT_ALPHA};function v(et,Pt,mt,xt,Lt,Ut,ae,Pe,ze,he){if(et===oi){_===!0&&(yt(i.BLEND),_=!1);return}if(_===!1&&(ft(i.BLEND),_=!0),et!==Pu){if(et!==m||he!==E){if((h!==Mi||S!==Mi)&&(i.blendEquation(i.FUNC_ADD),h=Mi,S=Mi),he)switch(et){case or:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tl:i.blendFunc(i.ONE,i.ONE);break;case Al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",et);break}else switch(et){case or:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",et);break}x=null,M=null,R=null,L=null,P.set(0,0,0),N=0,m=et,E=he}return}Lt=Lt||Pt,Ut=Ut||mt,ae=ae||xt,(Pt!==h||Lt!==S)&&(i.blendEquationSeparate(te[Pt],te[Lt]),h=Pt,S=Lt),(mt!==x||xt!==M||Ut!==R||ae!==L)&&(i.blendFuncSeparate(me[mt],me[xt],me[Ut],me[ae]),x=mt,M=xt,R=Ut,L=ae),(Pe.equals(P)===!1||ze!==N)&&(i.blendColor(Pe.r,Pe.g,Pe.b,ze),P.copy(Pe),N=ze),m=et,E=!1}function _t(et,Pt){et.side===Pn?yt(i.CULL_FACE):ft(i.CULL_FACE);let mt=et.side===rn;Pt&&(mt=!mt),st(mt),et.blending===or&&et.transparent===!1?v(oi):v(et.blending,et.blendEquation,et.blendSrc,et.blendDst,et.blendEquationAlpha,et.blendSrcAlpha,et.blendDstAlpha,et.blendColor,et.blendAlpha,et.premultipliedAlpha),a.setFunc(et.depthFunc),a.setTest(et.depthTest),a.setMask(et.depthWrite),s.setMask(et.colorWrite);const xt=et.stencilWrite;o.setTest(xt),xt&&(o.setMask(et.stencilWriteMask),o.setFunc(et.stencilFunc,et.stencilRef,et.stencilFuncMask),o.setOp(et.stencilFail,et.stencilZFail,et.stencilZPass)),$(et.polygonOffset,et.polygonOffsetFactor,et.polygonOffsetUnits),et.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(et){w!==et&&(et?i.frontFace(i.CW):i.frontFace(i.CCW),w=et)}function H(et){et!==Au?(ft(i.CULL_FACE),et!==B&&(et===wl?i.cullFace(i.BACK):et===Cu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),B=et}function F(et){et!==C&&(W&&i.lineWidth(et),C=et)}function $(et,Pt,mt){et?(ft(i.POLYGON_OFFSET_FILL),(z!==Pt||y!==mt)&&(i.polygonOffset(Pt,mt),z=Pt,y=mt)):yt(i.POLYGON_OFFSET_FILL)}function ot(et){et?ft(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function D(et){et===void 0&&(et=i.TEXTURE0+V-1),Q!==et&&(i.activeTexture(et),Q=et)}function b(et,Pt,mt){mt===void 0&&(Q===null?mt=i.TEXTURE0+V-1:mt=Q);let xt=pt[mt];xt===void 0&&(xt={type:void 0,texture:void 0},pt[mt]=xt),(xt.type!==et||xt.texture!==Pt)&&(Q!==mt&&(i.activeTexture(mt),Q=mt),i.bindTexture(et,Pt||ct[et]),xt.type=et,xt.texture=Pt)}function G(){const et=pt[Q];et!==void 0&&et.type!==void 0&&(i.bindTexture(et.type,null),et.type=void 0,et.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function at(){try{i.texSubImage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function St(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Rt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function ce(){try{i.texStorage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Mt(){try{i.texStorage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Ft(){try{i.texImage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Zt(et){vt.equals(et)===!1&&(i.scissor(et.x,et.y,et.z,et.w),vt.copy(et))}function kt(et){X.equals(et)===!1&&(i.viewport(et.x,et.y,et.z,et.w),X.copy(et))}function ee(et,Pt){let mt=c.get(Pt);mt===void 0&&(mt=new WeakMap,c.set(Pt,mt));let xt=mt.get(et);xt===void 0&&(xt=i.getUniformBlockIndex(Pt,et.name),mt.set(et,xt))}function ie(et,Pt){const xt=c.get(Pt).get(et);l.get(Pt)!==xt&&(i.uniformBlockBinding(Pt,xt,et.__bindingPointIndex),l.set(Pt,xt))}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Q=null,pt={},u={},p=new WeakMap,f=[],g=null,_=!1,m=null,h=null,x=null,M=null,S=null,R=null,L=null,P=new le(0,0,0),N=0,E=!1,w=null,B=null,C=null,z=null,y=null,vt.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ft,disable:yt,bindFramebuffer:Tt,drawBuffers:zt,useProgram:Jt,setBlending:v,setMaterial:_t,setFlipSided:st,setCullFace:H,setLineWidth:F,setPolygonOffset:$,setScissorTest:ot,activeTexture:D,bindTexture:b,unbindTexture:G,compressedTexImage2D:rt,compressedTexImage3D:nt,texImage2D:Ft,texImage3D:Nt,updateUBOMapping:ee,uniformBlockBinding:ie,texStorage2D:ce,texStorage3D:Mt,texSubImage2D:at,texSubImage3D:At,compressedTexSubImage2D:St,compressedTexSubImage3D:Rt,scissor:Zt,viewport:kt,reset:be}}function Ac(i,t,e,n){const r=Ig(n);switch(e){case Mh:return i*t;case wh:return i*t;case Th:return i*t*2;case Ah:return i*t/r.components*r.byteLength;case al:return i*t/r.components*r.byteLength;case Ch:return i*t*2/r.components*r.byteLength;case ol:return i*t*2/r.components*r.byteLength;case Eh:return i*t*3/r.components*r.byteLength;case _n:return i*t*4/r.components*r.byteLength;case ll:return i*t*4/r.components*r.byteLength;case js:case qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ys:case Zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:case Eo:return Math.max(i,16)*Math.max(t,8)/4;case bo:case Mo:return Math.max(i,8)*Math.max(t,8)/2;case wo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ko:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ks:case Vo:case Go:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Rh:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xo:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ig(i){switch(i){case Yn:case yh:return{byteLength:1,components:1};case Wr:case bh:case Zr:return{byteLength:2,components:1};case rl:case sl:return{byteLength:2,components:4};case Ri:case il:case Ln:return{byteLength:4,components:1};case Sh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ng(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,d=new WeakMap;let u;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,b){return f?new OffscreenCanvas(D,b):Xr("canvas")}function _(D,b,G){let rt=1;const nt=ot(D);if((nt.width>G||nt.height>G)&&(rt=G/Math.max(nt.width,nt.height)),rt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const at=Math.floor(rt*nt.width),At=Math.floor(rt*nt.height);u===void 0&&(u=g(at,At));const St=b?g(at,At):u;return St.width=at,St.height=At,St.getContext("2d").drawImage(D,0,0,at,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+at+"x"+At+")."),St}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),D;return D}function m(D){return D.generateMipmaps}function h(D){i.generateMipmap(D)}function x(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(D,b,G,rt,nt=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let at=b;if(b===i.RED&&(G===i.FLOAT&&(at=i.R32F),G===i.HALF_FLOAT&&(at=i.R16F),G===i.UNSIGNED_BYTE&&(at=i.R8)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(at=i.R8UI),G===i.UNSIGNED_SHORT&&(at=i.R16UI),G===i.UNSIGNED_INT&&(at=i.R32UI),G===i.BYTE&&(at=i.R8I),G===i.SHORT&&(at=i.R16I),G===i.INT&&(at=i.R32I)),b===i.RG&&(G===i.FLOAT&&(at=i.RG32F),G===i.HALF_FLOAT&&(at=i.RG16F),G===i.UNSIGNED_BYTE&&(at=i.RG8)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(at=i.RG8UI),G===i.UNSIGNED_SHORT&&(at=i.RG16UI),G===i.UNSIGNED_INT&&(at=i.RG32UI),G===i.BYTE&&(at=i.RG8I),G===i.SHORT&&(at=i.RG16I),G===i.INT&&(at=i.RG32I)),b===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(at=i.RGB8UI),G===i.UNSIGNED_SHORT&&(at=i.RGB16UI),G===i.UNSIGNED_INT&&(at=i.RGB32UI),G===i.BYTE&&(at=i.RGB8I),G===i.SHORT&&(at=i.RGB16I),G===i.INT&&(at=i.RGB32I)),b===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),G===i.UNSIGNED_INT&&(at=i.RGBA32UI),G===i.BYTE&&(at=i.RGBA8I),G===i.SHORT&&(at=i.RGBA16I),G===i.INT&&(at=i.RGBA32I)),b===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),b===i.RGBA){const At=nt?da:pe.getTransfer(rt);G===i.FLOAT&&(at=i.RGBA32F),G===i.HALF_FLOAT&&(at=i.RGBA16F),G===i.UNSIGNED_BYTE&&(at=At===Ae?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function S(D,b){let G;return D?b===null||b===Ri||b===mr?G=i.DEPTH24_STENCIL8:b===Ln?G=i.DEPTH32F_STENCIL8:b===Wr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ri||b===mr?G=i.DEPTH_COMPONENT24:b===Ln?G=i.DEPTH_COMPONENT32F:b===Wr&&(G=i.DEPTH_COMPONENT16),G}function R(D,b){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==hn&&D.minFilter!==cn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function L(D){const b=D.target;b.removeEventListener("dispose",L),N(b),b.isVideoTexture&&d.delete(b)}function P(D){const b=D.target;b.removeEventListener("dispose",P),w(b)}function N(D){const b=n.get(D);if(b.__webglInit===void 0)return;const G=D.source,rt=p.get(G);if(rt){const nt=rt[b.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&E(D),Object.keys(rt).length===0&&p.delete(G)}n.remove(D)}function E(D){const b=n.get(D);i.deleteTexture(b.__webglTexture);const G=D.source,rt=p.get(G);delete rt[b.__cacheKey],a.memory.textures--}function w(D){const b=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(b.__webglFramebuffer[rt]))for(let nt=0;nt<b.__webglFramebuffer[rt].length;nt++)i.deleteFramebuffer(b.__webglFramebuffer[rt][nt]);else i.deleteFramebuffer(b.__webglFramebuffer[rt]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[rt])}else{if(Array.isArray(b.__webglFramebuffer))for(let rt=0;rt<b.__webglFramebuffer.length;rt++)i.deleteFramebuffer(b.__webglFramebuffer[rt]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let rt=0;rt<b.__webglColorRenderbuffer.length;rt++)b.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[rt]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=D.textures;for(let rt=0,nt=G.length;rt<nt;rt++){const at=n.get(G[rt]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),a.memory.textures--),n.remove(G[rt])}n.remove(D)}let B=0;function C(){B=0}function z(){const D=B;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),B+=1,D}function y(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function V(D,b){const G=n.get(D);if(D.isVideoTexture&&F(D),D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){const rt=D.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(G,D,b);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function W(D,b){const G=n.get(D);if(D.version>0&&G.__version!==D.version){X(G,D,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function q(D,b){const G=n.get(D);if(D.version>0&&G.__version!==D.version){X(G,D,b);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function J(D,b){const G=n.get(D);if(D.version>0&&G.__version!==D.version){Y(G,D,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}const Q={[Gn]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[yo]:i.MIRRORED_REPEAT},pt={[hn]:i.NEAREST,[rd]:i.NEAREST_MIPMAP_NEAREST,[as]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[ba]:i.LINEAR_MIPMAP_NEAREST,[Wn]:i.LINEAR_MIPMAP_LINEAR},j={[cd]:i.NEVER,[md]:i.ALWAYS,[hd]:i.LESS,[Ph]:i.LEQUAL,[ud]:i.EQUAL,[pd]:i.GEQUAL,[dd]:i.GREATER,[fd]:i.NOTEQUAL};function Z(D,b){if(b.type===Ln&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===cn||b.magFilter===ba||b.magFilter===as||b.magFilter===Wn||b.minFilter===cn||b.minFilter===ba||b.minFilter===as||b.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,Q[b.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,Q[b.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,Q[b.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,pt[b.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,pt[b.minFilter]),b.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,j[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===hn||b.minFilter!==as&&b.minFilter!==Wn||b.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function vt(D,b){let G=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",L));const rt=b.source;let nt=p.get(rt);nt===void 0&&(nt={},p.set(rt,nt));const at=y(b);if(at!==D.__cacheKey){nt[at]===void 0&&(nt[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),nt[at].usedTimes++;const At=nt[D.__cacheKey];At!==void 0&&(nt[D.__cacheKey].usedTimes--,At.usedTimes===0&&E(b)),D.__cacheKey=at,D.__webglTexture=nt[at].texture}return G}function X(D,b,G){let rt=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(rt=i.TEXTURE_3D);const nt=vt(D,b),at=b.source;e.bindTexture(rt,D.__webglTexture,i.TEXTURE0+G);const At=n.get(at);if(at.version!==At.__version||nt===!0){e.activeTexture(i.TEXTURE0+G);const St=pe.getPrimaries(pe.workingColorSpace),Rt=b.colorSpace===ai?null:pe.getPrimaries(b.colorSpace),ce=b.colorSpace===ai||St===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let Mt=_(b.image,!1,r.maxTextureSize);Mt=$(b,Mt);const Ft=s.convert(b.format,b.colorSpace),Nt=s.convert(b.type);let Zt=M(b.internalFormat,Ft,Nt,b.colorSpace,b.isVideoTexture);Z(rt,b);let kt;const ee=b.mipmaps,ie=b.isVideoTexture!==!0,be=At.__version===void 0||nt===!0,et=at.dataReady,Pt=R(b,Mt);if(b.isDepthTexture)Zt=S(b.format===_r,b.type),be&&(ie?e.texStorage2D(i.TEXTURE_2D,1,Zt,Mt.width,Mt.height):e.texImage2D(i.TEXTURE_2D,0,Zt,Mt.width,Mt.height,0,Ft,Nt,null));else if(b.isDataTexture)if(ee.length>0){ie&&be&&e.texStorage2D(i.TEXTURE_2D,Pt,Zt,ee[0].width,ee[0].height);for(let mt=0,xt=ee.length;mt<xt;mt++)kt=ee[mt],ie?et&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,kt.width,kt.height,Ft,Nt,kt.data):e.texImage2D(i.TEXTURE_2D,mt,Zt,kt.width,kt.height,0,Ft,Nt,kt.data);b.generateMipmaps=!1}else ie?(be&&e.texStorage2D(i.TEXTURE_2D,Pt,Zt,Mt.width,Mt.height),et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt.width,Mt.height,Ft,Nt,Mt.data)):e.texImage2D(i.TEXTURE_2D,0,Zt,Mt.width,Mt.height,0,Ft,Nt,Mt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ie&&be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Zt,ee[0].width,ee[0].height,Mt.depth);for(let mt=0,xt=ee.length;mt<xt;mt++)if(kt=ee[mt],b.format!==_n)if(Ft!==null)if(ie){if(et)if(b.layerUpdates.size>0){const Lt=Ac(kt.width,kt.height,b.format,b.type);for(const Ut of b.layerUpdates){const ae=kt.data.subarray(Ut*Lt/kt.data.BYTES_PER_ELEMENT,(Ut+1)*Lt/kt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,Ut,kt.width,kt.height,1,Ft,ae)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,kt.width,kt.height,Mt.depth,Ft,kt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,Zt,kt.width,kt.height,Mt.depth,0,kt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?et&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,kt.width,kt.height,Mt.depth,Ft,Nt,kt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,Zt,kt.width,kt.height,Mt.depth,0,Ft,Nt,kt.data)}else{ie&&be&&e.texStorage2D(i.TEXTURE_2D,Pt,Zt,ee[0].width,ee[0].height);for(let mt=0,xt=ee.length;mt<xt;mt++)kt=ee[mt],b.format!==_n?Ft!==null?ie?et&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,kt.width,kt.height,Ft,kt.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,Zt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?et&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,kt.width,kt.height,Ft,Nt,kt.data):e.texImage2D(i.TEXTURE_2D,mt,Zt,kt.width,kt.height,0,Ft,Nt,kt.data)}else if(b.isDataArrayTexture)if(ie){if(be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Zt,Mt.width,Mt.height,Mt.depth),et)if(b.layerUpdates.size>0){const mt=Ac(Mt.width,Mt.height,b.format,b.type);for(const xt of b.layerUpdates){const Lt=Mt.data.subarray(xt*mt/Mt.data.BYTES_PER_ELEMENT,(xt+1)*mt/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xt,Mt.width,Mt.height,1,Ft,Nt,Lt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ft,Nt,Mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Zt,Mt.width,Mt.height,Mt.depth,0,Ft,Nt,Mt.data);else if(b.isData3DTexture)ie?(be&&e.texStorage3D(i.TEXTURE_3D,Pt,Zt,Mt.width,Mt.height,Mt.depth),et&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ft,Nt,Mt.data)):e.texImage3D(i.TEXTURE_3D,0,Zt,Mt.width,Mt.height,Mt.depth,0,Ft,Nt,Mt.data);else if(b.isFramebufferTexture){if(be)if(ie)e.texStorage2D(i.TEXTURE_2D,Pt,Zt,Mt.width,Mt.height);else{let mt=Mt.width,xt=Mt.height;for(let Lt=0;Lt<Pt;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,Zt,mt,xt,0,Ft,Nt,null),mt>>=1,xt>>=1}}else if(ee.length>0){if(ie&&be){const mt=ot(ee[0]);e.texStorage2D(i.TEXTURE_2D,Pt,Zt,mt.width,mt.height)}for(let mt=0,xt=ee.length;mt<xt;mt++)kt=ee[mt],ie?et&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Ft,Nt,kt):e.texImage2D(i.TEXTURE_2D,mt,Zt,Ft,Nt,kt);b.generateMipmaps=!1}else if(ie){if(be){const mt=ot(Mt);e.texStorage2D(i.TEXTURE_2D,Pt,Zt,mt.width,mt.height)}et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ft,Nt,Mt)}else e.texImage2D(i.TEXTURE_2D,0,Zt,Ft,Nt,Mt);m(b)&&h(rt),At.__version=at.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Y(D,b,G){if(b.image.length!==6)return;const rt=vt(D,b),nt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+G);const at=n.get(nt);if(nt.version!==at.__version||rt===!0){e.activeTexture(i.TEXTURE0+G);const At=pe.getPrimaries(pe.workingColorSpace),St=b.colorSpace===ai?null:pe.getPrimaries(b.colorSpace),Rt=b.colorSpace===ai||At===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const ce=b.isCompressedTexture||b.image[0].isCompressedTexture,Mt=b.image[0]&&b.image[0].isDataTexture,Ft=[];for(let xt=0;xt<6;xt++)!ce&&!Mt?Ft[xt]=_(b.image[xt],!0,r.maxCubemapSize):Ft[xt]=Mt?b.image[xt].image:b.image[xt],Ft[xt]=$(b,Ft[xt]);const Nt=Ft[0],Zt=s.convert(b.format,b.colorSpace),kt=s.convert(b.type),ee=M(b.internalFormat,Zt,kt,b.colorSpace),ie=b.isVideoTexture!==!0,be=at.__version===void 0||rt===!0,et=nt.dataReady;let Pt=R(b,Nt);Z(i.TEXTURE_CUBE_MAP,b);let mt;if(ce){ie&&be&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,ee,Nt.width,Nt.height);for(let xt=0;xt<6;xt++){mt=Ft[xt].mipmaps;for(let Lt=0;Lt<mt.length;Lt++){const Ut=mt[Lt];b.format!==_n?Zt!==null?ie?et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt,0,0,Ut.width,Ut.height,Zt,Ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt,ee,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt,0,0,Ut.width,Ut.height,Zt,kt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt,ee,Ut.width,Ut.height,0,Zt,kt,Ut.data)}}}else{if(mt=b.mipmaps,ie&&be){mt.length>0&&Pt++;const xt=ot(Ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,ee,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Mt){ie?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ft[xt].width,Ft[xt].height,Zt,kt,Ft[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ee,Ft[xt].width,Ft[xt].height,0,Zt,kt,Ft[xt].data);for(let Lt=0;Lt<mt.length;Lt++){const ae=mt[Lt].image[xt].image;ie?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt+1,0,0,ae.width,ae.height,Zt,kt,ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt+1,ee,ae.width,ae.height,0,Zt,kt,ae.data)}}else{ie?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Zt,kt,Ft[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ee,Zt,kt,Ft[xt]);for(let Lt=0;Lt<mt.length;Lt++){const Ut=mt[Lt];ie?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt+1,0,0,Zt,kt,Ut.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt+1,ee,Zt,kt,Ut.image[xt])}}}m(b)&&h(i.TEXTURE_CUBE_MAP),at.__version=nt.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function ct(D,b,G,rt,nt,at){const At=s.convert(G.format,G.colorSpace),St=s.convert(G.type),Rt=M(G.internalFormat,At,St,G.colorSpace),ce=n.get(b),Mt=n.get(G);if(Mt.__renderTarget=b,!ce.__hasExternalTextures){const Ft=Math.max(1,b.width>>at),Nt=Math.max(1,b.height>>at);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,at,Rt,Ft,Nt,b.depth,0,At,St,null):e.texImage2D(nt,at,Rt,Ft,Nt,0,At,St,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),H(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,nt,Mt.__webglTexture,0,st(b)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,nt,Mt.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(D,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,D),b.depthBuffer){const rt=b.depthTexture,nt=rt&&rt.isDepthTexture?rt.type:null,at=S(b.stencilBuffer,nt),At=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=st(b);H(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St,at,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,St,at,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,at,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,D)}else{const rt=b.textures;for(let nt=0;nt<rt.length;nt++){const at=rt[nt],At=s.convert(at.format,at.colorSpace),St=s.convert(at.type),Rt=M(at.internalFormat,At,St,at.colorSpace),ce=st(b);G&&H(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,Rt,b.width,b.height):H(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,Rt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(D,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=n.get(b.depthTexture);rt.__renderTarget=b,(!rt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);const nt=rt.__webglTexture,at=st(b);if(b.depthTexture.format===lr)H(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(b.depthTexture.format===_r)H(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Tt(D){const b=n.get(D),G=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const rt=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),rt){const nt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,rt.removeEventListener("dispose",nt)};rt.addEventListener("dispose",nt),b.__depthDisposeCallback=nt}b.__boundDepthTexture=rt}if(D.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");yt(b.__webglFramebuffer,D)}else if(G){b.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[rt]),b.__webglDepthbuffer[rt]===void 0)b.__webglDepthbuffer[rt]=i.createRenderbuffer(),ft(b.__webglDepthbuffer[rt],D,!1);else{const nt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=b.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,at)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ft(b.__webglDepthbuffer,D,!1);else{const rt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(D,b,G){const rt=n.get(D);b!==void 0&&ct(rt.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Tt(D)}function Jt(D){const b=D.texture,G=n.get(D),rt=n.get(b);D.addEventListener("dispose",P);const nt=D.textures,at=D.isWebGLCubeRenderTarget===!0,At=nt.length>1;if(At||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=b.version,a.memory.textures++),at){G.__webglFramebuffer=[];for(let St=0;St<6;St++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[St]=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)G.__webglFramebuffer[St][Rt]=i.createFramebuffer()}else G.__webglFramebuffer[St]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let St=0;St<b.mipmaps.length;St++)G.__webglFramebuffer[St]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(At)for(let St=0,Rt=nt.length;St<Rt;St++){const ce=n.get(nt[St]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&H(D)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let St=0;St<nt.length;St++){const Rt=nt[St];G.__webglColorRenderbuffer[St]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[St]);const ce=s.convert(Rt.format,Rt.colorSpace),Mt=s.convert(Rt.type),Ft=M(Rt.internalFormat,ce,Mt,Rt.colorSpace,D.isXRRenderTarget===!0),Nt=st(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,Ft,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,G.__webglColorRenderbuffer[St])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(G.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),Z(i.TEXTURE_CUBE_MAP,b);for(let St=0;St<6;St++)if(b.mipmaps&&b.mipmaps.length>0)for(let Rt=0;Rt<b.mipmaps.length;Rt++)ct(G.__webglFramebuffer[St][Rt],D,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt);else ct(G.__webglFramebuffer[St],D,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);m(b)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let St=0,Rt=nt.length;St<Rt;St++){const ce=nt[St],Mt=n.get(ce);e.bindTexture(i.TEXTURE_2D,Mt.__webglTexture),Z(i.TEXTURE_2D,ce),ct(G.__webglFramebuffer,D,ce,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,0),m(ce)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let St=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(St=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,rt.__webglTexture),Z(St,b),b.mipmaps&&b.mipmaps.length>0)for(let Rt=0;Rt<b.mipmaps.length;Rt++)ct(G.__webglFramebuffer[Rt],D,b,i.COLOR_ATTACHMENT0,St,Rt);else ct(G.__webglFramebuffer,D,b,i.COLOR_ATTACHMENT0,St,0);m(b)&&h(St),e.unbindTexture()}D.depthBuffer&&Tt(D)}function te(D){const b=D.textures;for(let G=0,rt=b.length;G<rt;G++){const nt=b[G];if(m(nt)){const at=x(D),At=n.get(nt).__webglTexture;e.bindTexture(at,At),h(at),e.unbindTexture()}}}const me=[],v=[];function _t(D){if(D.samples>0){if(H(D)===!1){const b=D.textures,G=D.width,rt=D.height;let nt=i.COLOR_BUFFER_BIT;const at=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(D),St=b.length>1;if(St)for(let Rt=0;Rt<b.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Rt=0;Rt<b.length;Rt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),St){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Rt]);const ce=n.get(b[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,G,rt,0,0,G,rt,nt,i.NEAREST),l===!0&&(me.length=0,v.length=0,me.push(i.COLOR_ATTACHMENT0+Rt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(me.push(at),v.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,v)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),St)for(let Rt=0;Rt<b.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,At.__webglColorRenderbuffer[Rt]);const ce=n.get(b[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,ce,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const b=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function st(D){return Math.min(r.maxSamples,D.samples)}function H(D){const b=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function F(D){const b=a.render.frame;d.get(D)!==b&&(d.set(D,b),D.update())}function $(D,b){const G=D.colorSpace,rt=D.format,nt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||G!==yr&&G!==ai&&(pe.getTransfer(G)===Ae?(rt!==_n||nt!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function ot(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=C,this.setTexture2D=V,this.setTexture2DArray=W,this.setTexture3D=q,this.setTextureCube=J,this.rebindTextures=zt,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=H}function Ug(i,t){function e(n,r=ai){let s;const a=pe.getTransfer(r);if(n===Yn)return i.UNSIGNED_BYTE;if(n===rl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yh)return i.BYTE;if(n===bh)return i.SHORT;if(n===Wr)return i.UNSIGNED_SHORT;if(n===il)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===Zr)return i.HALF_FLOAT;if(n===Mh)return i.ALPHA;if(n===Eh)return i.RGB;if(n===_n)return i.RGBA;if(n===wh)return i.LUMINANCE;if(n===Th)return i.LUMINANCE_ALPHA;if(n===lr)return i.DEPTH_COMPONENT;if(n===_r)return i.DEPTH_STENCIL;if(n===Ah)return i.RED;if(n===al)return i.RED_INTEGER;if(n===Ch)return i.RG;if(n===ol)return i.RG_INTEGER;if(n===ll)return i.RGBA_INTEGER;if(n===js||n===qs||n===Ys||n===Zs)if(a===Ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===js)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===js)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ys)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bo||n===So||n===Mo||n===Eo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===bo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===So)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wo||n===To||n===Ao)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===wo||n===To)return a===Ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ao)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Co||n===Ro||n===Po||n===Lo||n===Do||n===Io||n===No||n===Uo||n===Oo||n===Fo||n===ko||n===Bo||n===zo||n===Ho)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Co)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ro)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Po)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lo)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Do)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Io)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===No)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uo)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oo)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fo)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ko)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bo)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zo)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ho)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ks||n===Vo||n===Go)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ks)return a===Ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Go)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rh||n===Wo||n===Xo||n===jo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ks)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Wo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Og extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ti extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fg={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=d.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&p>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ti;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bg=`
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

}`;class zg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Ge,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ci({vertexShader:kg,fragmentShader:Bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Oe(new $r(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hg extends Li{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,p=null,f=null,g=null;const _=new zg,m=e.getContextAttributes();let h=null,x=null;const M=[],S=[],R=new ne;let L=null;const P=new Ye;P.viewport=new Me;const N=new Ye;N.viewport=new Me;const E=[P,N],w=new Og;let B=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Y=M[X];return Y===void 0&&(Y=new Za,M[X]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(X){let Y=M[X];return Y===void 0&&(Y=new Za,M[X]=Y),Y.getGripSpace()},this.getHand=function(X){let Y=M[X];return Y===void 0&&(Y=new Za,M[X]=Y),Y.getHandSpace()};function z(X){const Y=S.indexOf(X.inputSource);if(Y===-1)return;const ct=M[Y];ct!==void 0&&(ct.update(X.inputSource,X.frame,c||a),ct.dispatchEvent({type:X.type,data:X.inputSource}))}function y(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",y),r.removeEventListener("inputsourceschange",V);for(let X=0;X<M.length;X++){const Y=S[X];Y!==null&&(S[X]=null,M[X].disconnect(Y))}B=null,C=null,_.reset(),t.setRenderTarget(h),f=null,p=null,u=null,r=null,x=null,vt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",y),r.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(R),r.renderState.layers===void 0){const Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,Y),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Pi(f.framebufferWidth,f.framebufferHeight,{format:_n,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,ct=null,ft=null;m.depth&&(ft=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=m.stencil?_r:lr,ct=m.stencil?mr:Ri);const yt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};u=new XRWebGLBinding(r,e),p=u.createProjectionLayer(yt),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),x=new Pi(p.textureWidth,p.textureHeight,{format:_n,type:Yn,depthTexture:new Vh(p.textureWidth,p.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),vt.setContext(r),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(X){for(let Y=0;Y<X.removed.length;Y++){const ct=X.removed[Y],ft=S.indexOf(ct);ft>=0&&(S[ft]=null,M[ft].disconnect(ct))}for(let Y=0;Y<X.added.length;Y++){const ct=X.added[Y];let ft=S.indexOf(ct);if(ft===-1){for(let Tt=0;Tt<M.length;Tt++)if(Tt>=S.length){S.push(ct),ft=Tt;break}else if(S[Tt]===null){S[Tt]=ct,ft=Tt;break}if(ft===-1)break}const yt=M[ft];yt&&yt.connect(ct)}}const W=new K,q=new K;function J(X,Y,ct){W.setFromMatrixPosition(Y.matrixWorld),q.setFromMatrixPosition(ct.matrixWorld);const ft=W.distanceTo(q),yt=Y.projectionMatrix.elements,Tt=ct.projectionMatrix.elements,zt=yt[14]/(yt[10]-1),Jt=yt[14]/(yt[10]+1),te=(yt[9]+1)/yt[5],me=(yt[9]-1)/yt[5],v=(yt[8]-1)/yt[0],_t=(Tt[8]+1)/Tt[0],st=zt*v,H=zt*_t,F=ft/(-v+_t),$=F*-v;if(Y.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX($),X.translateZ(F),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),yt[10]===-1)X.projectionMatrix.copy(Y.projectionMatrix),X.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const ot=zt+F,D=Jt+F,b=st-$,G=H+(ft-$),rt=te*Jt/D*ot,nt=me*Jt/D*ot;X.projectionMatrix.makePerspective(b,G,rt,nt,ot,D),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Q(X,Y){Y===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Y.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let Y=X.near,ct=X.far;_.texture!==null&&(_.depthNear>0&&(Y=_.depthNear),_.depthFar>0&&(ct=_.depthFar)),w.near=N.near=P.near=Y,w.far=N.far=P.far=ct,(B!==w.near||C!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),B=w.near,C=w.far),P.layers.mask=X.layers.mask|2,N.layers.mask=X.layers.mask|4,w.layers.mask=P.layers.mask|N.layers.mask;const ft=X.parent,yt=w.cameras;Q(w,ft);for(let Tt=0;Tt<yt.length;Tt++)Q(yt[Tt],ft);yt.length===2?J(w,P,N):w.projectionMatrix.copy(P.projectionMatrix),pt(X,w,ft)};function pt(X,Y,ct){ct===null?X.matrix.copy(Y.matrixWorld):(X.matrix.copy(ct.matrixWorld),X.matrix.invert(),X.matrix.multiply(Y.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Y.projectionMatrix),X.projectionMatrixInverse.copy(Y.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=gr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(X){l=X,p!==null&&(p.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(w)};let j=null;function Z(X,Y){if(d=Y.getViewerPose(c||a),g=Y,d!==null){const ct=d.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let ft=!1;ct.length!==w.cameras.length&&(w.cameras.length=0,ft=!0);for(let Tt=0;Tt<ct.length;Tt++){const zt=ct[Tt];let Jt=null;if(f!==null)Jt=f.getViewport(zt);else{const me=u.getViewSubImage(p,zt);Jt=me.viewport,Tt===0&&(t.setRenderTargetTextures(x,me.colorTexture,p.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(x))}let te=E[Tt];te===void 0&&(te=new Ye,te.layers.enable(Tt),te.viewport=new Me,E[Tt]=te),te.matrix.fromArray(zt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(zt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Tt===0&&(w.matrix.copy(te.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ft===!0&&w.cameras.push(te)}const yt=r.enabledFeatures;if(yt&&yt.includes("depth-sensing")){const Tt=u.getDepthInformation(ct[0]);Tt&&Tt.isValid&&Tt.texture&&_.init(t,Tt,r.renderState)}}for(let ct=0;ct<M.length;ct++){const ft=S[ct],yt=M[ct];ft!==null&&yt!==void 0&&yt.update(ft,Y,c||a)}j&&j(X,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const vt=new Hh;vt.setAnimationLoop(Z),this.setAnimationLoop=function(X){j=X},this.dispose=function(){}}}const bi=new sn,Vg=new se;function Gg(i,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,kh(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,x,M,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),u(m,h)):h.isMeshPhongMaterial?(s(m,h),d(m,h)):h.isMeshStandardMaterial?(s(m,h),p(m,h),h.isMeshPhysicalMaterial&&f(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,x,M):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===rn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===rn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const x=t.get(h),M=x.envMap,S=x.envMapRotation;M&&(m.envMap.value=M,bi.copy(S),bi.x*=-1,bi.y*=-1,bi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),m.envMapRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(bi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,x,M){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=M*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function u(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function f(m,h,x){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===rn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const x=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Wg(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const S=M.program;n.uniformBlockBinding(x,S)}function c(x,M){let S=r[x.id];S===void 0&&(g(x),S=d(x),r[x.id]=S,x.addEventListener("dispose",m));const R=M.program;n.updateUBOMapping(x,R);const L=t.render.frame;s[x.id]!==L&&(p(x),s[x.id]=L)}function d(x){const M=u();x.__bindingPointIndex=M;const S=i.createBuffer(),R=x.__size,L=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const M=r[x.id],S=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let L=0,P=S.length;L<P;L++){const N=Array.isArray(S[L])?S[L]:[S[L]];for(let E=0,w=N.length;E<w;E++){const B=N[E];if(f(B,L,E,R)===!0){const C=B.__offset,z=Array.isArray(B.value)?B.value:[B.value];let y=0;for(let V=0;V<z.length;V++){const W=z[V],q=_(W);typeof W=="number"||typeof W=="boolean"?(B.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,C+y,B.__data)):W.isMatrix3?(B.__data[0]=W.elements[0],B.__data[1]=W.elements[1],B.__data[2]=W.elements[2],B.__data[3]=0,B.__data[4]=W.elements[3],B.__data[5]=W.elements[4],B.__data[6]=W.elements[5],B.__data[7]=0,B.__data[8]=W.elements[6],B.__data[9]=W.elements[7],B.__data[10]=W.elements[8],B.__data[11]=0):(W.toArray(B.__data,y),y+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,M,S,R){const L=x.value,P=M+"_"+S;if(R[P]===void 0)return typeof L=="number"||typeof L=="boolean"?R[P]=L:R[P]=L.clone(),!0;{const N=R[P];if(typeof L=="number"||typeof L=="boolean"){if(N!==L)return R[P]=L,!0}else if(N.equals(L)===!1)return N.copy(L),!0}return!1}function g(x){const M=x.uniforms;let S=0;const R=16;for(let P=0,N=M.length;P<N;P++){const E=Array.isArray(M[P])?M[P]:[M[P]];for(let w=0,B=E.length;w<B;w++){const C=E[w],z=Array.isArray(C.value)?C.value:[C.value];for(let y=0,V=z.length;y<V;y++){const W=z[y],q=_(W),J=S%R,Q=J%q.boundary,pt=J+Q;S+=Q,pt!==0&&R-pt<q.storage&&(S+=R-pt),C.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=q.storage}}}const L=S%R;return L>0&&(S+=R-L),x.__size=S,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function h(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Xg{constructor(t={}){const{canvas:e=Dd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,h=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this.toneMapping=li,this.toneMappingExposure=1;const S=this;let R=!1,L=0,P=0,N=null,E=-1,w=null;const B=new Me,C=new Me;let z=null;const y=new le(0);let V=0,W=e.width,q=e.height,J=1,Q=null,pt=null;const j=new Me(0,0,W,q),Z=new Me(0,0,W,q);let vt=!1;const X=new hl;let Y=!1,ct=!1;const ft=new se,yt=new se,Tt=new K,zt=new Me,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function me(){return N===null?J:1}let v=n;function _t(O,it){return e.getContext(O,it)}try{const O={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nl}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",Ut,!1),v===null){const it="webgl2";if(v=_t(it,O),v===null)throw _t(it)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let st,H,F,$,ot,D,b,G,rt,nt,at,At,St,Rt,ce,Mt,Ft,Nt,Zt,kt,ee,ie,be,et;function Pt(){st=new Km(v),st.init(),ie=new Ug(v,st),H=new Wm(v,st,t,ie),F=new Dg(v,st),H.reverseDepthBuffer&&p&&F.buffers.depth.setReversed(!0),$=new Qm(v),ot=new gg,D=new Ng(v,st,F,ot,H,ie,$),b=new jm(S),G=new Zm(S),rt=new af(v),be=new Vm(v,rt),nt=new $m(v,rt,$,be),at=new e_(v,nt,rt,$),Zt=new t_(v,H,D),Mt=new Xm(ot),At=new _g(S,b,G,st,H,be,Mt),St=new Gg(S,ot),Rt=new xg,ce=new wg(st),Nt=new Hm(S,b,G,F,at,f,l),Ft=new Pg(S,at,H),et=new Wg(v,$,H,F),kt=new Gm(v,st,$),ee=new Jm(v,st,$),$.programs=At.programs,S.capabilities=H,S.extensions=st,S.properties=ot,S.renderLists=Rt,S.shadowMap=Ft,S.state=F,S.info=$}Pt();const mt=new Hg(S,v);this.xr=mt,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const O=st.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=st.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(O){O!==void 0&&(J=O,this.setSize(W,q,!1))},this.getSize=function(O){return O.set(W,q)},this.setSize=function(O,it,ht=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=O,q=it,e.width=Math.floor(O*J),e.height=Math.floor(it*J),ht===!0&&(e.style.width=O+"px",e.style.height=it+"px"),this.setViewport(0,0,O,it)},this.getDrawingBufferSize=function(O){return O.set(W*J,q*J).floor()},this.setDrawingBufferSize=function(O,it,ht){W=O,q=it,J=ht,e.width=Math.floor(O*ht),e.height=Math.floor(it*ht),this.setViewport(0,0,O,it)},this.getCurrentViewport=function(O){return O.copy(B)},this.getViewport=function(O){return O.copy(j)},this.setViewport=function(O,it,ht,ut){O.isVector4?j.set(O.x,O.y,O.z,O.w):j.set(O,it,ht,ut),F.viewport(B.copy(j).multiplyScalar(J).round())},this.getScissor=function(O){return O.copy(Z)},this.setScissor=function(O,it,ht,ut){O.isVector4?Z.set(O.x,O.y,O.z,O.w):Z.set(O,it,ht,ut),F.scissor(C.copy(Z).multiplyScalar(J).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(O){F.setScissorTest(vt=O)},this.setOpaqueSort=function(O){Q=O},this.setTransparentSort=function(O){pt=O},this.getClearColor=function(O){return O.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(O=!0,it=!0,ht=!0){let ut=0;if(O){let tt=!1;if(N!==null){const wt=N.texture.format;tt=wt===ll||wt===ol||wt===al}if(tt){const wt=N.texture.type,It=wt===Yn||wt===Ri||wt===Wr||wt===mr||wt===rl||wt===sl,Vt=Nt.getClearColor(),Gt=Nt.getClearAlpha(),Qt=Vt.r,oe=Vt.g,Wt=Vt.b;It?(g[0]=Qt,g[1]=oe,g[2]=Wt,g[3]=Gt,v.clearBufferuiv(v.COLOR,0,g)):(_[0]=Qt,_[1]=oe,_[2]=Wt,_[3]=Gt,v.clearBufferiv(v.COLOR,0,_))}else ut|=v.COLOR_BUFFER_BIT}it&&(ut|=v.DEPTH_BUFFER_BIT),ht&&(ut|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",Ut,!1),Rt.dispose(),ce.dispose(),ot.dispose(),b.dispose(),G.dispose(),at.dispose(),be.dispose(),et.dispose(),At.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",Qr),mt.removeEventListener("sessionend",ts),In.stop()};function xt(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const O=$.autoReset,it=Ft.enabled,ht=Ft.autoUpdate,ut=Ft.needsUpdate,tt=Ft.type;Pt(),$.autoReset=O,Ft.enabled=it,Ft.autoUpdate=ht,Ft.needsUpdate=ut,Ft.type=tt}function Ut(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function ae(O){const it=O.target;it.removeEventListener("dispose",ae),Pe(it)}function Pe(O){ze(O),ot.remove(O)}function ze(O){const it=ot.get(O).programs;it!==void 0&&(it.forEach(function(ht){At.releaseProgram(ht)}),O.isShaderMaterial&&At.releaseShaderCache(O))}this.renderBufferDirect=function(O,it,ht,ut,tt,wt){it===null&&(it=Jt);const It=tt.isMesh&&tt.matrixWorld.determinant()<0,Vt=va(O,it,ht,ut,tt);F.setMaterial(ut,It);let Gt=ht.index,Qt=1;if(ut.wireframe===!0){if(Gt=nt.getWireframeAttribute(ht),Gt===void 0)return;Qt=2}const oe=ht.drawRange,Wt=ht.attributes.position;let _e=oe.start*Qt,Ee=(oe.start+oe.count)*Qt;wt!==null&&(_e=Math.max(_e,wt.start*Qt),Ee=Math.min(Ee,(wt.start+wt.count)*Qt)),Gt!==null?(_e=Math.max(_e,0),Ee=Math.min(Ee,Gt.count)):Wt!=null&&(_e=Math.max(_e,0),Ee=Math.min(Ee,Wt.count));const Te=Ee-_e;if(Te<0||Te===1/0)return;be.setup(tt,ut,Vt,ht,Gt);let Ne,ve=kt;if(Gt!==null&&(Ne=rt.get(Gt),ve=ee,ve.setIndex(Ne)),tt.isMesh)ut.wireframe===!0?(F.setLineWidth(ut.wireframeLinewidth*me()),ve.setMode(v.LINES)):ve.setMode(v.TRIANGLES);else if(tt.isLine){let Xt=ut.linewidth;Xt===void 0&&(Xt=1),F.setLineWidth(Xt*me()),tt.isLineSegments?ve.setMode(v.LINES):tt.isLineLoop?ve.setMode(v.LINE_LOOP):ve.setMode(v.LINE_STRIP)}else tt.isPoints?ve.setMode(v.POINTS):tt.isSprite&&ve.setMode(v.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)ve.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))ve.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const Xt=tt._multiDrawStarts,vn=tt._multiDrawCounts,ge=tt._multiDrawCount,an=Gt?rt.get(Gt).bytesPerElement:1,Kn=ot.get(ut).currentProgram.getUniforms();for(let Ze=0;Ze<ge;Ze++)Kn.setValue(v,"_gl_DrawID",Ze),ve.render(Xt[Ze]/an,vn[Ze])}else if(tt.isInstancedMesh)ve.renderInstances(_e,Te,tt.count);else if(ht.isInstancedBufferGeometry){const Xt=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,vn=Math.min(ht.instanceCount,Xt);ve.renderInstances(_e,Te,vn)}else ve.render(_e,Te)};function he(O,it,ht){O.transparent===!0&&O.side===Pn&&O.forceSinglePass===!1?(O.side=rn,O.needsUpdate=!0,Fi(O,it,ht),O.side=qn,O.needsUpdate=!0,Fi(O,it,ht),O.side=Pn):Fi(O,it,ht)}this.compile=function(O,it,ht=null){ht===null&&(ht=O),h=ce.get(ht),h.init(it),M.push(h),ht.traverseVisible(function(tt){tt.isLight&&tt.layers.test(it.layers)&&(h.pushLight(tt),tt.castShadow&&h.pushShadow(tt))}),O!==ht&&O.traverseVisible(function(tt){tt.isLight&&tt.layers.test(it.layers)&&(h.pushLight(tt),tt.castShadow&&h.pushShadow(tt))}),h.setupLights();const ut=new Set;return O.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const wt=tt.material;if(wt)if(Array.isArray(wt))for(let It=0;It<wt.length;It++){const Vt=wt[It];he(Vt,ht,tt),ut.add(Vt)}else he(wt,ht,tt),ut.add(wt)}),M.pop(),h=null,ut},this.compileAsync=function(O,it,ht=null){const ut=this.compile(O,it,ht);return new Promise(tt=>{function wt(){if(ut.forEach(function(It){ot.get(It).currentProgram.isReady()&&ut.delete(It)}),ut.size===0){tt(O);return}setTimeout(wt,10)}st.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Qe=null;function gn(O){Qe&&Qe(O)}function Qr(){In.stop()}function ts(){In.start()}const In=new Hh;In.setAnimationLoop(gn),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(O){Qe=O,mt.setAnimationLoop(O),O===null?In.stop():In.start()},mt.addEventListener("sessionstart",Qr),mt.addEventListener("sessionend",ts),this.render=function(O,it){if(it!==void 0&&it.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),it.parent===null&&it.matrixWorldAutoUpdate===!0&&it.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(it),it=mt.getCamera()),O.isScene===!0&&O.onBeforeRender(S,O,it,N),h=ce.get(O,M.length),h.init(it),M.push(h),yt.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),X.setFromProjectionMatrix(yt),ct=this.localClippingEnabled,Y=Mt.init(this.clippingPlanes,ct),m=Rt.get(O,x.length),m.init(),x.push(m),mt.enabled===!0&&mt.isPresenting===!0){const wt=S.xr.getDepthSensingMesh();wt!==null&&Er(wt,it,-1/0,S.sortObjects)}Er(O,it,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(Q,pt),te=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,te&&Nt.addToRenderList(m,O),this.info.render.frame++,Y===!0&&Mt.beginShadows();const ht=h.state.shadowsArray;Ft.render(ht,O,it),Y===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=m.opaque,tt=m.transmissive;if(h.setupLights(),it.isArrayCamera){const wt=it.cameras;if(tt.length>0)for(let It=0,Vt=wt.length;It<Vt;It++){const Gt=wt[It];wr(ut,tt,O,Gt)}te&&Nt.render(O);for(let It=0,Vt=wt.length;It<Vt;It++){const Gt=wt[It];es(m,O,Gt,Gt.viewport)}}else tt.length>0&&wr(ut,tt,O,it),te&&Nt.render(O),es(m,O,it);N!==null&&(D.updateMultisampleRenderTarget(N),D.updateRenderTargetMipmap(N)),O.isScene===!0&&O.onAfterRender(S,O,it),be.resetDefaultState(),E=-1,w=null,M.pop(),M.length>0?(h=M[M.length-1],Y===!0&&Mt.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Er(O,it,ht,ut){if(O.visible===!1)return;if(O.layers.test(it.layers)){if(O.isGroup)ht=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(it);else if(O.isLight)h.pushLight(O),O.castShadow&&h.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||X.intersectsSprite(O)){ut&&zt.setFromMatrixPosition(O.matrixWorld).applyMatrix4(yt);const It=at.update(O),Vt=O.material;Vt.visible&&m.push(O,It,Vt,ht,zt.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||X.intersectsObject(O))){const It=at.update(O),Vt=O.material;if(ut&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),zt.copy(O.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),zt.copy(It.boundingSphere.center)),zt.applyMatrix4(O.matrixWorld).applyMatrix4(yt)),Array.isArray(Vt)){const Gt=It.groups;for(let Qt=0,oe=Gt.length;Qt<oe;Qt++){const Wt=Gt[Qt],_e=Vt[Wt.materialIndex];_e&&_e.visible&&m.push(O,It,_e,ht,zt.z,Wt)}}else Vt.visible&&m.push(O,It,Vt,ht,zt.z,null)}}const wt=O.children;for(let It=0,Vt=wt.length;It<Vt;It++)Er(wt[It],it,ht,ut)}function es(O,it,ht,ut){const tt=O.opaque,wt=O.transmissive,It=O.transparent;h.setupLightsView(ht),Y===!0&&Mt.setGlobalState(S.clippingPlanes,ht),ut&&F.viewport(B.copy(ut)),tt.length>0&&Oi(tt,it,ht),wt.length>0&&Oi(wt,it,ht),It.length>0&&Oi(It,it,ht),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function wr(O,it,ht,ut){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[ut.id]===void 0&&(h.state.transmissionRenderTarget[ut.id]=new Pi(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Zr:Yn,minFilter:Wn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));const wt=h.state.transmissionRenderTarget[ut.id],It=ut.viewport||B;wt.setSize(It.z,It.w);const Vt=S.getRenderTarget();S.setRenderTarget(wt),S.getClearColor(y),V=S.getClearAlpha(),V<1&&S.setClearColor(16777215,.5),S.clear(),te&&Nt.render(ht);const Gt=S.toneMapping;S.toneMapping=li;const Qt=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),h.setupLightsView(ut),Y===!0&&Mt.setGlobalState(S.clippingPlanes,ut),Oi(O,ht,ut),D.updateMultisampleRenderTarget(wt),D.updateRenderTargetMipmap(wt),st.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let Wt=0,_e=it.length;Wt<_e;Wt++){const Ee=it[Wt],Te=Ee.object,Ne=Ee.geometry,ve=Ee.material,Xt=Ee.group;if(ve.side===Pn&&Te.layers.test(ut.layers)){const vn=ve.side;ve.side=rn,ve.needsUpdate=!0,Tr(Te,ht,ut,Ne,ve,Xt),ve.side=vn,ve.needsUpdate=!0,oe=!0}}oe===!0&&(D.updateMultisampleRenderTarget(wt),D.updateRenderTargetMipmap(wt))}S.setRenderTarget(Vt),S.setClearColor(y,V),Qt!==void 0&&(ut.viewport=Qt),S.toneMapping=Gt}function Oi(O,it,ht){const ut=it.isScene===!0?it.overrideMaterial:null;for(let tt=0,wt=O.length;tt<wt;tt++){const It=O[tt],Vt=It.object,Gt=It.geometry,Qt=ut===null?It.material:ut,oe=It.group;Vt.layers.test(ht.layers)&&Tr(Vt,it,ht,Gt,Qt,oe)}}function Tr(O,it,ht,ut,tt,wt){O.onBeforeRender(S,it,ht,ut,tt,wt),O.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),tt.onBeforeRender(S,it,ht,ut,O,wt),tt.transparent===!0&&tt.side===Pn&&tt.forceSinglePass===!1?(tt.side=rn,tt.needsUpdate=!0,S.renderBufferDirect(ht,it,ut,tt,O,wt),tt.side=qn,tt.needsUpdate=!0,S.renderBufferDirect(ht,it,ut,tt,O,wt),tt.side=Pn):S.renderBufferDirect(ht,it,ut,tt,O,wt),O.onAfterRender(S,it,ht,ut,tt,wt)}function Fi(O,it,ht){it.isScene!==!0&&(it=Jt);const ut=ot.get(O),tt=h.state.lights,wt=h.state.shadowsArray,It=tt.state.version,Vt=At.getParameters(O,tt.state,wt,it,ht),Gt=At.getProgramCacheKey(Vt);let Qt=ut.programs;ut.environment=O.isMeshStandardMaterial?it.environment:null,ut.fog=it.fog,ut.envMap=(O.isMeshStandardMaterial?G:b).get(O.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&O.envMap===null?it.environmentRotation:O.envMapRotation,Qt===void 0&&(O.addEventListener("dispose",ae),Qt=new Map,ut.programs=Qt);let oe=Qt.get(Gt);if(oe!==void 0){if(ut.currentProgram===oe&&ut.lightsStateVersion===It)return is(O,Vt),oe}else Vt.uniforms=At.getUniforms(O),O.onBeforeCompile(Vt,S),oe=At.acquireProgram(Vt,Gt),Qt.set(Gt,oe),ut.uniforms=Vt.uniforms;const Wt=ut.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(Wt.clippingPlanes=Mt.uniform),is(O,Vt),ut.needsLights=ya(O),ut.lightsStateVersion=It,ut.needsLights&&(Wt.ambientLightColor.value=tt.state.ambient,Wt.lightProbe.value=tt.state.probe,Wt.directionalLights.value=tt.state.directional,Wt.directionalLightShadows.value=tt.state.directionalShadow,Wt.spotLights.value=tt.state.spot,Wt.spotLightShadows.value=tt.state.spotShadow,Wt.rectAreaLights.value=tt.state.rectArea,Wt.ltc_1.value=tt.state.rectAreaLTC1,Wt.ltc_2.value=tt.state.rectAreaLTC2,Wt.pointLights.value=tt.state.point,Wt.pointLightShadows.value=tt.state.pointShadow,Wt.hemisphereLights.value=tt.state.hemi,Wt.directionalShadowMap.value=tt.state.directionalShadowMap,Wt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Wt.spotShadowMap.value=tt.state.spotShadowMap,Wt.spotLightMatrix.value=tt.state.spotLightMatrix,Wt.spotLightMap.value=tt.state.spotLightMap,Wt.pointShadowMap.value=tt.state.pointShadowMap,Wt.pointShadowMatrix.value=tt.state.pointShadowMatrix),ut.currentProgram=oe,ut.uniformsList=null,oe}function ns(O){if(O.uniformsList===null){const it=O.currentProgram.getUniforms();O.uniformsList=$s.seqWithValue(it.seq,O.uniforms)}return O.uniformsList}function is(O,it){const ht=ot.get(O);ht.outputColorSpace=it.outputColorSpace,ht.batching=it.batching,ht.batchingColor=it.batchingColor,ht.instancing=it.instancing,ht.instancingColor=it.instancingColor,ht.instancingMorph=it.instancingMorph,ht.skinning=it.skinning,ht.morphTargets=it.morphTargets,ht.morphNormals=it.morphNormals,ht.morphColors=it.morphColors,ht.morphTargetsCount=it.morphTargetsCount,ht.numClippingPlanes=it.numClippingPlanes,ht.numIntersection=it.numClipIntersection,ht.vertexAlphas=it.vertexAlphas,ht.vertexTangents=it.vertexTangents,ht.toneMapping=it.toneMapping}function va(O,it,ht,ut,tt){it.isScene!==!0&&(it=Jt),D.resetTextureUnits();const wt=it.fog,It=ut.isMeshStandardMaterial?it.environment:null,Vt=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:yr,Gt=(ut.isMeshStandardMaterial?G:b).get(ut.envMap||It),Qt=ut.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,oe=!!ht.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),Wt=!!ht.morphAttributes.position,_e=!!ht.morphAttributes.normal,Ee=!!ht.morphAttributes.color;let Te=li;ut.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Te=S.toneMapping);const Ne=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,ve=Ne!==void 0?Ne.length:0,Xt=ot.get(ut),vn=h.state.lights;if(Y===!0&&(ct===!0||O!==w)){const Ke=O===w&&ut.id===E;Mt.setState(ut,O,Ke)}let ge=!1;ut.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==vn.state.version||Xt.outputColorSpace!==Vt||tt.isBatchedMesh&&Xt.batching===!1||!tt.isBatchedMesh&&Xt.batching===!0||tt.isBatchedMesh&&Xt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&Xt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&Xt.instancing===!1||!tt.isInstancedMesh&&Xt.instancing===!0||tt.isSkinnedMesh&&Xt.skinning===!1||!tt.isSkinnedMesh&&Xt.skinning===!0||tt.isInstancedMesh&&Xt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Xt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Xt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Xt.instancingMorph===!1&&tt.morphTexture!==null||Xt.envMap!==Gt||ut.fog===!0&&Xt.fog!==wt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Mt.numPlanes||Xt.numIntersection!==Mt.numIntersection)||Xt.vertexAlphas!==Qt||Xt.vertexTangents!==oe||Xt.morphTargets!==Wt||Xt.morphNormals!==_e||Xt.morphColors!==Ee||Xt.toneMapping!==Te||Xt.morphTargetsCount!==ve)&&(ge=!0):(ge=!0,Xt.__version=ut.version);let an=Xt.currentProgram;ge===!0&&(an=Fi(ut,it,tt));let Kn=!1,Ze=!1,$n=!1;const re=an.getUniforms(),tn=Xt.uniforms;if(F.useProgram(an.program)&&(Kn=!0,Ze=!0,$n=!0),ut.id!==E&&(E=ut.id,Ze=!0),Kn||w!==O){F.buffers.depth.getReversed()?(ft.copy(O.projectionMatrix),Nd(ft),Ud(ft),re.setValue(v,"projectionMatrix",ft)):re.setValue(v,"projectionMatrix",O.projectionMatrix),re.setValue(v,"viewMatrix",O.matrixWorldInverse);const xn=re.map.cameraPosition;xn!==void 0&&xn.setValue(v,Tt.setFromMatrixPosition(O.matrixWorld)),H.logarithmicDepthBuffer&&re.setValue(v,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&re.setValue(v,"isOrthographic",O.isOrthographicCamera===!0),w!==O&&(w=O,Ze=!0,$n=!0)}if(tt.isSkinnedMesh){re.setOptional(v,tt,"bindMatrix"),re.setOptional(v,tt,"bindMatrixInverse");const Ke=tt.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),re.setValue(v,"boneTexture",Ke.boneTexture,D))}tt.isBatchedMesh&&(re.setOptional(v,tt,"batchingTexture"),re.setValue(v,"batchingTexture",tt._matricesTexture,D),re.setOptional(v,tt,"batchingIdTexture"),re.setValue(v,"batchingIdTexture",tt._indirectTexture,D),re.setOptional(v,tt,"batchingColorTexture"),tt._colorsTexture!==null&&re.setValue(v,"batchingColorTexture",tt._colorsTexture,D));const pi=ht.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&Zt.update(tt,ht,an),(Ze||Xt.receiveShadow!==tt.receiveShadow)&&(Xt.receiveShadow=tt.receiveShadow,re.setValue(v,"receiveShadow",tt.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(tn.envMap.value=Gt,tn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&it.environment!==null&&(tn.envMapIntensity.value=it.environmentIntensity),Ze&&(re.setValue(v,"toneMappingExposure",S.toneMappingExposure),Xt.needsLights&&xa(tn,$n),wt&&ut.fog===!0&&St.refreshFogUniforms(tn,wt),St.refreshMaterialUniforms(tn,ut,J,q,h.state.transmissionRenderTarget[O.id]),$s.upload(v,ns(Xt),tn,D)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&($s.upload(v,ns(Xt),tn,D),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&re.setValue(v,"center",tt.center),re.setValue(v,"modelViewMatrix",tt.modelViewMatrix),re.setValue(v,"normalMatrix",tt.normalMatrix),re.setValue(v,"modelMatrix",tt.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const Ke=ut.uniformsGroups;for(let xn=0,dn=Ke.length;xn<dn;xn++){const mi=Ke[xn];et.update(mi,an),et.bind(mi,an)}}return an}function xa(O,it){O.ambientLightColor.needsUpdate=it,O.lightProbe.needsUpdate=it,O.directionalLights.needsUpdate=it,O.directionalLightShadows.needsUpdate=it,O.pointLights.needsUpdate=it,O.pointLightShadows.needsUpdate=it,O.spotLights.needsUpdate=it,O.spotLightShadows.needsUpdate=it,O.rectAreaLights.needsUpdate=it,O.hemisphereLights.needsUpdate=it}function ya(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(O,it,ht){ot.get(O.texture).__webglTexture=it,ot.get(O.depthTexture).__webglTexture=ht;const ut=ot.get(O);ut.__hasExternalTextures=!0,ut.__autoAllocateDepthBuffer=ht===void 0,ut.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ut.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(O,it){const ht=ot.get(O);ht.__webglFramebuffer=it,ht.__useDefaultFramebuffer=it===void 0},this.setRenderTarget=function(O,it=0,ht=0){N=O,L=it,P=ht;let ut=!0,tt=null,wt=!1,It=!1;if(O){const Gt=ot.get(O);if(Gt.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(v.FRAMEBUFFER,null),ut=!1;else if(Gt.__webglFramebuffer===void 0)D.setupRenderTarget(O);else if(Gt.__hasExternalTextures)D.rebindTextures(O,ot.get(O.texture).__webglTexture,ot.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){const Wt=O.depthTexture;if(Gt.__boundDepthTexture!==Wt){if(Wt!==null&&ot.has(Wt)&&(O.width!==Wt.image.width||O.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(O)}}const Qt=O.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(It=!0);const oe=ot.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(oe[it])?tt=oe[it][ht]:tt=oe[it],wt=!0):O.samples>0&&D.useMultisampledRTT(O)===!1?tt=ot.get(O).__webglMultisampledFramebuffer:Array.isArray(oe)?tt=oe[ht]:tt=oe,B.copy(O.viewport),C.copy(O.scissor),z=O.scissorTest}else B.copy(j).multiplyScalar(J).floor(),C.copy(Z).multiplyScalar(J).floor(),z=vt;if(F.bindFramebuffer(v.FRAMEBUFFER,tt)&&ut&&F.drawBuffers(O,tt),F.viewport(B),F.scissor(C),F.setScissorTest(z),wt){const Gt=ot.get(O.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+it,Gt.__webglTexture,ht)}else if(It){const Gt=ot.get(O.texture),Qt=it||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,Gt.__webglTexture,ht||0,Qt)}E=-1},this.readRenderTargetPixels=function(O,it,ht,ut,tt,wt,It){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=ot.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&It!==void 0&&(Vt=Vt[It]),Vt){F.bindFramebuffer(v.FRAMEBUFFER,Vt);try{const Gt=O.texture,Qt=Gt.format,oe=Gt.type;if(!H.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!H.textureTypeReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}it>=0&&it<=O.width-ut&&ht>=0&&ht<=O.height-tt&&v.readPixels(it,ht,ut,tt,ie.convert(Qt),ie.convert(oe),wt)}finally{const Gt=N!==null?ot.get(N).__webglFramebuffer:null;F.bindFramebuffer(v.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(O,it,ht,ut,tt,wt,It){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=ot.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&It!==void 0&&(Vt=Vt[It]),Vt){const Gt=O.texture,Qt=Gt.format,oe=Gt.type;if(!H.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!H.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(it>=0&&it<=O.width-ut&&ht>=0&&ht<=O.height-tt){F.bindFramebuffer(v.FRAMEBUFFER,Vt);const Wt=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,Wt),v.bufferData(v.PIXEL_PACK_BUFFER,wt.byteLength,v.STREAM_READ),v.readPixels(it,ht,ut,tt,ie.convert(Qt),ie.convert(oe),0);const _e=N!==null?ot.get(N).__webglFramebuffer:null;F.bindFramebuffer(v.FRAMEBUFFER,_e);const Ee=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await Id(v,Ee,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,Wt),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,wt),v.deleteBuffer(Wt),v.deleteSync(Ee),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(O,it=null,ht=0){O.isTexture!==!0&&(Fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),it=arguments[0]||null,O=arguments[1]);const ut=Math.pow(2,-ht),tt=Math.floor(O.image.width*ut),wt=Math.floor(O.image.height*ut),It=it!==null?it.x:0,Vt=it!==null?it.y:0;D.setTexture2D(O,0),v.copyTexSubImage2D(v.TEXTURE_2D,ht,0,0,It,Vt,tt,wt),F.unbindTexture()},this.copyTextureToTexture=function(O,it,ht=null,ut=null,tt=0){O.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture function signature has changed."),ut=arguments[0]||null,O=arguments[1],it=arguments[2],tt=arguments[3]||0,ht=null);let wt,It,Vt,Gt,Qt,oe,Wt,_e,Ee;const Te=O.isCompressedTexture?O.mipmaps[tt]:O.image;ht!==null?(wt=ht.max.x-ht.min.x,It=ht.max.y-ht.min.y,Vt=ht.isBox3?ht.max.z-ht.min.z:1,Gt=ht.min.x,Qt=ht.min.y,oe=ht.isBox3?ht.min.z:0):(wt=Te.width,It=Te.height,Vt=Te.depth||1,Gt=0,Qt=0,oe=0),ut!==null?(Wt=ut.x,_e=ut.y,Ee=ut.z):(Wt=0,_e=0,Ee=0);const Ne=ie.convert(it.format),ve=ie.convert(it.type);let Xt;it.isData3DTexture?(D.setTexture3D(it,0),Xt=v.TEXTURE_3D):it.isDataArrayTexture||it.isCompressedArrayTexture?(D.setTexture2DArray(it,0),Xt=v.TEXTURE_2D_ARRAY):(D.setTexture2D(it,0),Xt=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,it.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,it.unpackAlignment);const vn=v.getParameter(v.UNPACK_ROW_LENGTH),ge=v.getParameter(v.UNPACK_IMAGE_HEIGHT),an=v.getParameter(v.UNPACK_SKIP_PIXELS),Kn=v.getParameter(v.UNPACK_SKIP_ROWS),Ze=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,Te.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Te.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Gt),v.pixelStorei(v.UNPACK_SKIP_ROWS,Qt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,oe);const $n=O.isDataArrayTexture||O.isData3DTexture,re=it.isDataArrayTexture||it.isData3DTexture;if(O.isRenderTargetTexture||O.isDepthTexture){const tn=ot.get(O),pi=ot.get(it),Ke=ot.get(tn.__renderTarget),xn=ot.get(pi.__renderTarget);F.bindFramebuffer(v.READ_FRAMEBUFFER,Ke.__webglFramebuffer),F.bindFramebuffer(v.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let dn=0;dn<Vt;dn++)$n&&v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,ot.get(O).__webglTexture,tt,oe+dn),O.isDepthTexture?(re&&v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,ot.get(it).__webglTexture,tt,Ee+dn),v.blitFramebuffer(Gt,Qt,wt,It,Wt,_e,wt,It,v.DEPTH_BUFFER_BIT,v.NEAREST)):re?v.copyTexSubImage3D(Xt,tt,Wt,_e,Ee+dn,Gt,Qt,wt,It):v.copyTexSubImage2D(Xt,tt,Wt,_e,Ee+dn,Gt,Qt,wt,It);F.bindFramebuffer(v.READ_FRAMEBUFFER,null),F.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else re?O.isDataTexture||O.isData3DTexture?v.texSubImage3D(Xt,tt,Wt,_e,Ee,wt,It,Vt,Ne,ve,Te.data):it.isCompressedArrayTexture?v.compressedTexSubImage3D(Xt,tt,Wt,_e,Ee,wt,It,Vt,Ne,Te.data):v.texSubImage3D(Xt,tt,Wt,_e,Ee,wt,It,Vt,Ne,ve,Te):O.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,tt,Wt,_e,wt,It,Ne,ve,Te.data):O.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,tt,Wt,_e,Te.width,Te.height,Ne,Te.data):v.texSubImage2D(v.TEXTURE_2D,tt,Wt,_e,wt,It,Ne,ve,Te);v.pixelStorei(v.UNPACK_ROW_LENGTH,vn),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ge),v.pixelStorei(v.UNPACK_SKIP_PIXELS,an),v.pixelStorei(v.UNPACK_SKIP_ROWS,Kn),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Ze),tt===0&&it.generateMipmaps&&v.generateMipmap(Xt),F.unbindTexture()},this.copyTextureToTexture3D=function(O,it,ht=null,ut=null,tt=0){return O.isTexture!==!0&&(Fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ht=arguments[0]||null,ut=arguments[1]||null,O=arguments[2],it=arguments[3],tt=arguments[4]||0),Fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(O,it,ht,ut,tt)},this.initRenderTarget=function(O){ot.get(O).__webglFramebuffer===void 0&&D.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?D.setTextureCube(O,0):O.isData3DTexture?D.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?D.setTexture2DArray(O,0):D.setTexture2D(O,0),F.unbindTexture()},this.resetState=function(){L=0,P=0,N=null,F.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}}class qh extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Cc=new K,Rc=new Me,Pc=new Me,jg=new K,Lc=new se,As=new K,Ka=new Ii,Dc=new se,$a=new Kr;class qg extends Oe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Rl,this.bindMatrix=new se,this.bindMatrixInverse=new se,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Di),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,As),this.boundingBox.expandByPoint(As)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ii),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,As),this.boundingSphere.expandByPoint(As)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ka.copy(this.boundingSphere),Ka.applyMatrix4(r),t.ray.intersectsSphere(Ka)!==!1&&(Dc.copy(r).invert(),$a.copy(t.ray).applyMatrix4(Dc),!(this.boundingBox!==null&&$a.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,$a)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Me,e=this.geometry.attributes.skinWeight;for(let n=0,r=e.count;n<r;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Rl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===id?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,r=this.geometry;Rc.fromBufferAttribute(r.attributes.skinIndex,t),Pc.fromBufferAttribute(r.attributes.skinWeight,t),Cc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const a=Pc.getComponent(s);if(a!==0){const o=Rc.getComponent(s);Lc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(jg.copy(Cc).applyMatrix4(Lc),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Yh extends Ie{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Zh extends Ge{constructor(t=null,e=1,n=1,r,s,a,o,l,c=hn,d=hn,u,p){super(null,a,o,l,c,d,r,s,u,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ic=new se,Yg=new se;class fl{constructor(t=[],e=[]){this.uuid=ui(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new se)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new se;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=t.length;s<a;s++){const o=t[s]?t[s].matrixWorld:Yg;Ic.multiplyMatrices(o,e[s]),Ic.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new fl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Zh(e,t,t,_n,Ln);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const r=this.bones[e];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,r=t.bones.length;n<r;n++){const s=t.bones[n];let a=e[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Yh),this.bones.push(a),this.boneInverses.push(new se().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let r=0,s=e.length;r<s;r++){const a=e[r];t.bones.push(a.uuid);const o=n[r];t.boneInverses.push(o.toArray())}return t}}class Ci extends wn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ea=new K,na=new K,Nc=new se,Lr=new Kr,Cs=new Ii,Ja=new K,Uc=new K;class Kh extends Ie{constructor(t=new We,e=new Ci){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)ea.fromBufferAttribute(e,r-1),na.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=ea.distanceTo(na);t.setAttribute("lineDistance",new Se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(r),Cs.radius+=s,t.ray.intersectsSphere(Cs)===!1)return;Nc.copy(r).invert(),Lr.copy(t.ray).applyMatrix4(Nc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,p=n.attributes.position;if(d!==null){const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const h=d.getX(_),x=d.getX(_+1),M=Rs(this,t,Lr,l,h,x);M&&e.push(M)}if(this.isLineLoop){const _=d.getX(g-1),m=d.getX(f),h=Rs(this,t,Lr,l,_,m);h&&e.push(h)}}else{const f=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const h=Rs(this,t,Lr,l,_,_+1);h&&e.push(h)}if(this.isLineLoop){const _=Rs(this,t,Lr,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Rs(i,t,e,n,r,s){const a=i.geometry.attributes.position;if(ea.fromBufferAttribute(a,r),na.fromBufferAttribute(a,s),e.distanceSqToSegment(ea,na,Ja,Uc)>n)return;Ja.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ja);if(!(l<t.near||l>t.far))return{distance:l,point:Uc.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Oc=new K,Fc=new K;class ia extends Kh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Oc.fromBufferAttribute(e,r),Fc.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Oc.distanceTo(Fc);t.setAttribute("lineDistance",new Se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Br extends wn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const kc=new se,Zo=new Kr,Ps=new Ii,Ls=new K;class Qa extends Ie{constructor(t=new We,e=new Br){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(r),Ps.radius+=s,t.ray.intersectsSphere(Ps)===!1)return;kc.copy(r).invert(),Zo.copy(t.ray).applyMatrix4(kc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const p=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=p,_=f;g<_;g++){const m=c.getX(g);Ls.fromBufferAttribute(u,m),Bc(Ls,m,l,r,t,e,this)}}else{const p=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=p,_=f;g<_;g++)Ls.fromBufferAttribute(u,g),Bc(Ls,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Bc(i,t,e,n,r,s,a){const o=Zo.distanceSqToPoint(i);if(o<e){const l=new K;Zo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Zg extends Ge{constructor(t,e,n,r,s,a,o,l,c){super(t,e,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pl extends We{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],u=[],p=[],f=[];let g=0;const _=[],m=n/2;let h=0;x(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new Se(u,3)),this.setAttribute("normal",new Se(p,3)),this.setAttribute("uv",new Se(f,2));function x(){const S=new K,R=new K;let L=0;const P=(e-t)/n;for(let N=0;N<=s;N++){const E=[],w=N/s,B=w*(e-t)+t;for(let C=0;C<=r;C++){const z=C/r,y=z*l+o,V=Math.sin(y),W=Math.cos(y);R.x=B*V,R.y=-w*n+m,R.z=B*W,u.push(R.x,R.y,R.z),S.set(V,P,W).normalize(),p.push(S.x,S.y,S.z),f.push(z,1-w),E.push(g++)}_.push(E)}for(let N=0;N<r;N++)for(let E=0;E<s;E++){const w=_[E][N],B=_[E+1][N],C=_[E+1][N+1],z=_[E][N+1];(t>0||E!==0)&&(d.push(w,B,z),L+=3),(e>0||E!==s-1)&&(d.push(B,C,z),L+=3)}c.addGroup(h,L,0),h+=L}function M(S){const R=g,L=new ne,P=new K;let N=0;const E=S===!0?t:e,w=S===!0?1:-1;for(let C=1;C<=r;C++)u.push(0,m*w,0),p.push(0,w,0),f.push(.5,.5),g++;const B=g;for(let C=0;C<=r;C++){const y=C/r*l+o,V=Math.cos(y),W=Math.sin(y);P.x=E*W,P.y=m*w,P.z=E*V,u.push(P.x,P.y,P.z),p.push(0,w,0),L.x=V*.5+.5,L.y=W*.5*w+.5,f.push(L.x,L.y),g++}for(let C=0;C<r;C++){const z=R+C,y=B+C;S===!0?d.push(y,y+1,z):d.push(y+1,y,z),N+=3}c.addGroup(h,N,S===!0?1:2),h+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Ds=new K,Is=new K,to=new K,Ns=new mn;class Kg extends We{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(cr*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],d=["a","b","c"],u=new Array(3),p={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:h}=Ns;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),h.fromBufferAttribute(o,c[2]),Ns.getNormal(to),u[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(h.x*r)},${Math.round(h.y*r)},${Math.round(h.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){const M=(x+1)%3,S=u[x],R=u[M],L=Ns[d[x]],P=Ns[d[M]],N=`${S}_${R}`,E=`${R}_${S}`;E in p&&p[E]?(to.dot(p[E].normal)<=s&&(f.push(L.x,L.y,L.z),f.push(P.x,P.y,P.z)),p[E]=null):N in p||(p[N]={index0:c[x],index1:c[M],normal:to.clone()})}}for(const g in p)if(p[g]){const{index0:_,index1:m}=p[g];Ds.fromBufferAttribute(o,_),Is.fromBufferAttribute(o,m),f.push(Ds.x,Ds.y,Ds.z),f.push(Is.x,Is.y,Is.z)}this.setAttribute("position",new Se(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ml extends We{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],u=new K,p=new K,f=[],g=[],_=[],m=[];for(let h=0;h<=n;h++){const x=[],M=h/n;let S=0;h===0&&a===0?S=.5/e:h===n&&l===Math.PI&&(S=-.5/e);for(let R=0;R<=e;R++){const L=R/e;u.x=-t*Math.cos(r+L*s)*Math.sin(a+M*o),u.y=t*Math.cos(a+M*o),u.z=t*Math.sin(r+L*s)*Math.sin(a+M*o),g.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),m.push(L+S,1-M),x.push(c++)}d.push(x)}for(let h=0;h<n;h++)for(let x=0;x<e;x++){const M=d[h][x+1],S=d[h][x],R=d[h+1][x],L=d[h+1][x+1];(h!==0||a>0)&&f.push(M,S,L),(h!==n-1||l<Math.PI)&&f.push(S,R,L)}this.setIndex(f),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ml(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $h extends wn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ur extends wn{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new le(16777215),this.specular=new le(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $g extends wn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Us(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Jg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Qg(i){function t(r,s){return i[r]-i[s]}const e=i.length,n=new Array(e);for(let r=0;r!==e;++r)n[r]=r;return n.sort(t),n}function zc(i,t,e){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=e[s]*t;for(let l=0;l!==t;++l)r[a++]=i[o+l]}return r}function Jh(i,t,e,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(t.push(s.time),e.push.apply(e,a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(t.push(s.time),e.push(a)),s=i[r++];while(s!==void 0)}class pa{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,r=e[n],s=e[n-1];t:{e:{let a;n:{i:if(!(t<r)){for(let o=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=e[++n],t<r)break e}a=e.length;break n}if(!(t>=s)){const o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let a=0;a!==r;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class t0 extends pa{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pl,endingEnd:Pl}}intervalChanged_(t,e,n){const r=this.parameterPositions;let s=t-2,a=t+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ll:s=t,o=2*e-n;break;case Dl:s=r.length-2,o=e+r[s]-r[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ll:a=t,l=2*n-e;break;case Dl:a=1,l=n+r[1]-r[0];break;default:a=t-1,l=e}const c=(n-e)*.5,d=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*d,this._offsetNext=a*d}interpolate_(t,e,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,f=this._weightNext,g=(n-e)/(r-e),_=g*g,m=_*g,h=-p*m+2*p*_-p*g,x=(1+p)*m+(-1.5-2*p)*_+(-.5+p)*g+1,M=(-1-f)*m+(1.5+f)*_+.5*g,S=f*m-f*_;for(let R=0;R!==o;++R)s[R]=h*a[d+R]+x*a[c+R]+M*a[l+R]+S*a[u+R];return s}}class e0 extends pa{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=(n-e)/(r-e),u=1-d;for(let p=0;p!==o;++p)s[p]=a[c+p]*u+a[l+p]*d;return s}}class n0 extends pa{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}}class Dn{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Us(e,this.TimeBufferType),this.values=Us(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Us(t.times,Array),values:Us(t.values,Array)};const r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new n0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new e0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new t0(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Qs:e=this.InterpolantFactoryMethodDiscrete;break;case qo:e=this.InterpolantFactoryMethodLinear;break;case Sa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return qo;case this.InterpolantFactoryMethodSmooth:return Sa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(r!==void 0&&Jg(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Sa,s=t.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=t[o],d=t[o+1];if(c!==d&&(o!==1||c!==t[0]))if(r)l=!0;else{const u=o*n,p=u-n,f=u+n;for(let g=0;g!==n;++g){const _=e[u+g];if(_!==e[p+g]||_!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const u=o*n,p=a*n;for(let f=0;f!==n;++f)e[p+f]=e[u+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}}Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=qo;class Sr extends Dn{constructor(t,e,n){super(t,e,n)}}Sr.prototype.ValueTypeName="bool";Sr.prototype.ValueBufferType=Array;Sr.prototype.DefaultInterpolation=Qs;Sr.prototype.InterpolantFactoryMethodLinear=void 0;Sr.prototype.InterpolantFactoryMethodSmooth=void 0;class Qh extends Dn{}Qh.prototype.ValueTypeName="color";class ra extends Dn{}ra.prototype.ValueTypeName="number";class i0 extends pa{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(r-e);let c=t*o;for(let d=c+o;c!==d;c+=4)En.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Jr extends Dn{InterpolantFactoryMethodLinear(t){return new i0(this.times,this.values,this.getValueSize(),t)}}Jr.prototype.ValueTypeName="quaternion";Jr.prototype.InterpolantFactoryMethodSmooth=void 0;class Mr extends Dn{constructor(t,e,n){super(t,e,n)}}Mr.prototype.ValueTypeName="string";Mr.prototype.ValueBufferType=Array;Mr.prototype.DefaultInterpolation=Qs;Mr.prototype.InterpolantFactoryMethodLinear=void 0;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;class xr extends Dn{}xr.prototype.ValueTypeName="vector";class Hc{constructor(t="",e=-1,n=[],r=sd){this.name=t,this.tracks=n,this.duration=e,this.blendMode=r,this.uuid=ui(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,r=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(s0(n[a]).scale(r));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,r={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,a=n.length;s!==a;++s)e.push(Dn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(t,e,n,r){const s=e.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const d=Qg(l);l=zc(l,1,d),c=zc(c,1,d),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new ra(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const r=t;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===e)return n[r];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],d=c.name.match(s);if(d&&d.length>1){const u=d[1];let p=r[u];p||(r[u]=p=[]),p.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,p,f,g,_){if(f.length!==0){const m=[],h=[];Jh(f,m,h,g),m.length!==0&&_.push(new u(p,m,h))}},r=[],s=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const p=c[u].keys;if(!(!p||p.length===0))if(p[0].morphTargets){const f={};let g;for(g=0;g<p.length;g++)if(p[g].morphTargets)for(let _=0;_<p[g].morphTargets.length;_++)f[p[g].morphTargets[_]]=-1;for(const _ in f){const m=[],h=[];for(let x=0;x!==p[g].morphTargets.length;++x){const M=p[g];m.push(M.time),h.push(M.morphTarget===_?1:0)}r.push(new ra(".morphTargetInfluence["+_+"]",m,h))}l=f.length*a}else{const f=".bones["+e[u].name+"]";n(xr,f+".position",p,"pos",r),n(Jr,f+".quaternion",p,"rot",r),n(xr,f+".scale",p,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,r=t.length;n!==r;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function r0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ra;case"vector":case"vector2":case"vector3":case"vector4":return xr;case"color":return Qh;case"quaternion":return Jr;case"bool":case"boolean":return Sr;case"string":return Mr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function s0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=r0(i.type);if(i.times===void 0){const e=[],n=[];Jh(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const sa={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class tu{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){const u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,p=c.length;u<p;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null}}}const eu=new tu;class Zn{constructor(t){this.manager=t!==void 0?t:eu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Zn.DEFAULT_MATERIAL_NAME="__DEFAULT";const zn={};class a0 extends Error{constructor(t,e){super(t),this.response=e}}class ma extends Zn{constructor(t){super(t)}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=sa.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(zn[t]!==void 0){zn[t].push({onLoad:e,onProgress:n,onError:r});return}zn[t]=[],zn[t].push({onLoad:e,onProgress:n,onError:r});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=zn[t],u=c.body.getReader(),p=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=p?parseInt(p):0,g=f!==0;let _=0;const m=new ReadableStream({start(h){x();function x(){u.read().then(({done:M,value:S})=>{if(M)h.close();else{_+=S.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let L=0,P=d.length;L<P;L++){const N=d[L];N.onProgress&&N.onProgress(R)}h.enqueue(S),x()}},M=>{h.error(M)})}}});return new Response(m)}else throw new a0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),p=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(p);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{sa.add(t,c);const d=zn[t];delete zn[t];for(let u=0,p=d.length;u<p;u++){const f=d[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const d=zn[t];if(d===void 0)throw this.manager.itemError(t),c;delete zn[t];for(let u=0,p=d.length;u<p;u++){const f=d[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class o0 extends Zn{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=sa.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=Xr("img");function l(){d(),sa.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){d(),r&&r(u),s.manager.itemError(t),s.manager.itemEnd(t)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class l0 extends Zn{constructor(t){super(t)}load(t,e,n,r){const s=this,a=new Zh,o=new ma(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(t,function(l){let c;try{c=s.parse(l)}catch(d){if(r!==void 0)r(d);else{console.error(d);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Mn,a.wrapT=c.wrapT!==void 0?c.wrapT:Mn,a.magFilter=c.magFilter!==void 0?c.magFilter:cn,a.minFilter=c.minFilter!==void 0?c.minFilter:cn,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Wn),c.mipmapCount===1&&(a.minFilter=cn),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,e&&e(a,c)},n,r),a}}class nu extends Zn{constructor(t){super(t)}load(t,e,n,r){const s=new Ge,a=new o0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class _a extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const eo=new se,Vc=new K,Gc=new K;class _l{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hl,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Vc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vc),Gc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gc),e.updateMatrixWorld(),eo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(eo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class c0 extends _l{constructor(){super(new Ye(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=gr*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class h0 extends _a{constructor(t,e,n=0,r=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new c0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Wc=new se,Dr=new K,no=new K;class u0 extends _l{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Dr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Dr),no.copy(n.position),no.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(no),n.updateMatrixWorld(),r.makeTranslation(-Dr.x,-Dr.y,-Dr.z),Wc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wc)}}class d0 extends _a{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new u0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class f0 extends _l{constructor(){super(new ul(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class iu extends _a{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new f0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ru extends _a{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class su{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,r=t.length;n<r;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Xc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(qe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class p0 extends Li{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);const jc={type:"change"},gl={type:"start"},au={type:"end"},Os=new Kr,qc=new si,m0=Math.cos(70*Ei.DEG2RAD),Fe=new K,nn=2*Math.PI,Ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},io=1e-6;class _0 extends p0{constructor(t,e=null){super(t,e),this.state=Ce.NONE,this.enabled=!0,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ar.ROTATE,MIDDLE:ar.DOLLY,RIGHT:ar.PAN},this.touches={ONE:ir.ROTATE,TWO:ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new En,this._lastTargetPosition=new K,this._quat=new En().setFromUnitVectors(t.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xc,this._sphericalDelta=new Xc,this._scale=1,this._panOffset=new K,this._rotateStart=new ne,this._rotateEnd=new ne,this._rotateDelta=new ne,this._panStart=new ne,this._panEnd=new ne,this._panDelta=new ne,this._dollyStart=new ne,this._dollyEnd=new ne,this._dollyDelta=new ne,this._dollyDirection=new K,this._mouse=new ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=v0.bind(this),this._onPointerDown=g0.bind(this),this._onPointerUp=x0.bind(this),this._onContextMenu=T0.bind(this),this._onMouseWheel=S0.bind(this),this._onKeyDown=M0.bind(this),this._onTouchStart=E0.bind(this),this._onTouchMove=w0.bind(this),this._onMouseDown=y0.bind(this),this._onMouseMove=b0.bind(this),this._interceptControlDown=A0.bind(this),this._interceptControlUp=C0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jc),this.update(),this.state=Ce.NONE}update(t=null){const e=this.object.position;Fe.copy(e).sub(this.target),Fe.applyQuaternion(this._quat),this._spherical.setFromVector3(Fe),this.autoRotate&&this.state===Ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=nn:n>Math.PI&&(n-=nn),r<-Math.PI?r+=nn:r>Math.PI&&(r-=nn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Fe.setFromSpherical(this._spherical),Fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Fe.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new K(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new K(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Os.origin.copy(this.object.position),Os.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Os.direction))<m0?this.object.lookAt(this.target):(qc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Os.intersectPlane(qc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>io||8*(1-this._lastQuaternion.dot(this.object.quaternion))>io||this._lastTargetPosition.distanceToSquared(this.target)>io?(this.dispatchEvent(jc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?nn/60*this.autoRotateSpeed*t:nn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Fe.setFromMatrixColumn(e,0),Fe.multiplyScalar(-t),this._panOffset.add(Fe)}_panUp(t,e){this.screenSpacePanning===!0?Fe.setFromMatrixColumn(e,1):(Fe.setFromMatrixColumn(e,0),Fe.crossVectors(this.object.up,Fe)),Fe.multiplyScalar(t),this._panOffset.add(Fe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Fe.copy(r).sub(this.target);let s=Fe.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ne,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function g0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function v0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function x0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(au),this.state=Ce.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function y0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ar.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ce.DOLLY;break;case ar.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ce.ROTATE}break;case ar.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ce.PAN}break;default:this.state=Ce.NONE}this.state!==Ce.NONE&&this.dispatchEvent(gl)}function b0(i){switch(this.state){case Ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function S0(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ce.NONE||(i.preventDefault(),this.dispatchEvent(gl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(au))}function M0(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function E0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ir.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ce.TOUCH_ROTATE;break;case ir.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ce.TOUCH_PAN;break;default:this.state=Ce.NONE}break;case 2:switch(this.touches.TWO){case ir.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ce.TOUCH_DOLLY_PAN;break;case ir.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ce.TOUCH_DOLLY_ROTATE;break;default:this.state=Ce.NONE}break;default:this.state=Ce.NONE}this.state!==Ce.NONE&&this.dispatchEvent(gl)}function w0(i){switch(this._trackPointer(i),this.state){case Ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ce.NONE}}function T0(i){this.enabled!==!1&&i.preventDefault()}function A0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function C0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}let Ir=null;function R0(i){window.addEventListener("resize",()=>{const t=window.innerWidth,e=window.innerHeight;vl().setSize(t,e),i.camera.aspect=t/e,i.camera.updateProjectionMatrix(),i.cameraCtrl.update()})}function vl(){return Ir||(Ir=new Xg,Ir.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(Ir.domElement)),Ir}class P0{constructor(t){fe(this,"prevCameraOffset");fe(this,"target");fe(this,"cameraSetup");this.cameraSetup=L0(),this.target=t,this.prevCameraOffset=this.getCameraOffset(),R0(this.cameraSetup)}getCameraOffset(){const e=this.cameraSetup.camera.position.clone(),n=this.target.position;return e.sub(n)}setPrevOffset(){this.prevCameraOffset=this.getCameraOffset()}updateCamera(){let t=this.cameraSetup.camera.position;const e=this.target.position;t.copy(e.clone().add(this.prevCameraOffset)),this.updateCameraCtrl()}updateCameraCtrl(){const t=this.target.position;this.cameraSetup.cameraCtrl.target.copy(t),this.cameraSetup.cameraCtrl.update()}getCamera(){return this.cameraSetup.camera}getCameraSetup(){return this.cameraSetup}executeWithOffsetHandling(t){this.setPrevOffset(),t(),this.updateCamera()}}function L0(){let i=D0();return{camera:i,cameraCtrl:new _0(i,vl().domElement)}}function D0(){const i=new Ye(75,window.innerWidth/window.innerHeight,.1,1e3);return i.position.set(0,2,5),i}function I0(i,t){i.actors.player.update(t),i.actors.table.update(t)}class N0{constructor(t,e){fe(this,"room");fe(this,"actors");this.room=t,this.actors=e}getSimState(){return{actors:this.actors,room:this.room}}step(t){I0(this.getSimState(),t)}}class U0{constructor(t,e){fe(this,"actors");fe(this,"inputListener");this.actors=t,this.inputListener=e}handleUserInput(){this.inputListener.getPlayerActions().forEach(t=>{t.execute(this.actors.player)}),this.inputListener.getArmCommands().forEach(t=>{this.actors.table.handleArmCommand(t),this.inputListener.dashboardController.updateDisplay()})}}class O0{constructor(t,e){fe(this,"scene");fe(this,"camera");this.scene=t,this.camera=e}render(){vl().render(this.scene,this.camera)}}function F0(i){if(!(typeof window>"u")){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=i,document.head.appendChild(t),i}}function sr(i,t){var e=i.__state.conversionName.toString(),n=Math.round(i.r),r=Math.round(i.g),s=Math.round(i.b),a=i.a,o=Math.round(i.h),l=i.s.toFixed(1),c=i.v.toFixed(1);if(t||e==="THREE_CHAR_HEX"||e==="SIX_CHAR_HEX"){for(var d=i.hex.toString(16);d.length<6;)d="0"+d;return"#"+d}else{if(e==="CSS_RGB")return"rgb("+n+","+r+","+s+")";if(e==="CSS_RGBA")return"rgba("+n+","+r+","+s+","+a+")";if(e==="HEX")return"0x"+i.hex.toString(16);if(e==="RGB_ARRAY")return"["+n+","+r+","+s+"]";if(e==="RGBA_ARRAY")return"["+n+","+r+","+s+","+a+"]";if(e==="RGB_OBJ")return"{r:"+n+",g:"+r+",b:"+s+"}";if(e==="RGBA_OBJ")return"{r:"+n+",g:"+r+",b:"+s+",a:"+a+"}";if(e==="HSV_OBJ")return"{h:"+o+",s:"+l+",v:"+c+"}";if(e==="HSVA_OBJ")return"{h:"+o+",s:"+l+",v:"+c+",a:"+a+"}"}return"unknown format"}var Yc=Array.prototype.forEach,Nr=Array.prototype.slice,bt={BREAK:{},extend:function(t){return this.each(Nr.call(arguments,1),function(e){var n=this.isObject(e)?Object.keys(e):[];n.forEach((function(r){this.isUndefined(e[r])||(t[r]=e[r])}).bind(this))},this),t},defaults:function(t){return this.each(Nr.call(arguments,1),function(e){var n=this.isObject(e)?Object.keys(e):[];n.forEach((function(r){this.isUndefined(t[r])&&(t[r]=e[r])}).bind(this))},this),t},compose:function(){var t=Nr.call(arguments);return function(){for(var e=Nr.call(arguments),n=t.length-1;n>=0;n--)e=[t[n].apply(this,e)];return e[0]}},each:function(t,e,n){if(t){if(Yc&&t.forEach&&t.forEach===Yc)t.forEach(e,n);else if(t.length===t.length+0){var r=void 0,s=void 0;for(r=0,s=t.length;r<s;r++)if(r in t&&e.call(n,t[r],r)===this.BREAK)return}else for(var a in t)if(e.call(n,t[a],a)===this.BREAK)return}},defer:function(t){setTimeout(t,0)},debounce:function(t,e,n){var r=void 0;return function(){var s=this,a=arguments;function o(){r=null,n||t.apply(s,a)}var l=n||!r;clearTimeout(r),r=setTimeout(o,e),l&&t.apply(s,a)}},toArray:function(t){return t.toArray?t.toArray():Nr.call(t)},isUndefined:function(t){return t===void 0},isNull:function(t){return t===null},isNaN:function(i){function t(e){return i.apply(this,arguments)}return t.toString=function(){return i.toString()},t}(function(i){return isNaN(i)}),isArray:Array.isArray||function(i){return i.constructor===Array},isObject:function(t){return t===Object(t)},isNumber:function(t){return t===t+0},isString:function(t){return t===t+""},isBoolean:function(t){return t===!1||t===!0},isFunction:function(t){return t instanceof Function}},k0=[{litmus:bt.isString,conversions:{THREE_CHAR_HEX:{read:function(t){var e=t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return e===null?!1:{space:"HEX",hex:parseInt("0x"+e[1].toString()+e[1].toString()+e[2].toString()+e[2].toString()+e[3].toString()+e[3].toString(),0)}},write:sr},SIX_CHAR_HEX:{read:function(t){var e=t.match(/^#([A-F0-9]{6})$/i);return e===null?!1:{space:"HEX",hex:parseInt("0x"+e[1].toString(),0)}},write:sr},CSS_RGB:{read:function(t){var e=t.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return e===null?!1:{space:"RGB",r:parseFloat(e[1]),g:parseFloat(e[2]),b:parseFloat(e[3])}},write:sr},CSS_RGBA:{read:function(t){var e=t.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return e===null?!1:{space:"RGB",r:parseFloat(e[1]),g:parseFloat(e[2]),b:parseFloat(e[3]),a:parseFloat(e[4])}},write:sr}}},{litmus:bt.isNumber,conversions:{HEX:{read:function(t){return{space:"HEX",hex:t,conversionName:"HEX"}},write:function(t){return t.hex}}}},{litmus:bt.isArray,conversions:{RGB_ARRAY:{read:function(t){return t.length!==3?!1:{space:"RGB",r:t[0],g:t[1],b:t[2]}},write:function(t){return[t.r,t.g,t.b]}},RGBA_ARRAY:{read:function(t){return t.length!==4?!1:{space:"RGB",r:t[0],g:t[1],b:t[2],a:t[3]}},write:function(t){return[t.r,t.g,t.b,t.a]}}}},{litmus:bt.isObject,conversions:{RGBA_OBJ:{read:function(t){return bt.isNumber(t.r)&&bt.isNumber(t.g)&&bt.isNumber(t.b)&&bt.isNumber(t.a)?{space:"RGB",r:t.r,g:t.g,b:t.b,a:t.a}:!1},write:function(t){return{r:t.r,g:t.g,b:t.b,a:t.a}}},RGB_OBJ:{read:function(t){return bt.isNumber(t.r)&&bt.isNumber(t.g)&&bt.isNumber(t.b)?{space:"RGB",r:t.r,g:t.g,b:t.b}:!1},write:function(t){return{r:t.r,g:t.g,b:t.b}}},HSVA_OBJ:{read:function(t){return bt.isNumber(t.h)&&bt.isNumber(t.s)&&bt.isNumber(t.v)&&bt.isNumber(t.a)?{space:"HSV",h:t.h,s:t.s,v:t.v,a:t.a}:!1},write:function(t){return{h:t.h,s:t.s,v:t.v,a:t.a}}},HSV_OBJ:{read:function(t){return bt.isNumber(t.h)&&bt.isNumber(t.s)&&bt.isNumber(t.v)?{space:"HSV",h:t.h,s:t.s,v:t.v}:!1},write:function(t){return{h:t.h,s:t.s,v:t.v}}}}}],Ur=void 0,Fs=void 0,Ko=function(){Fs=!1;var t=arguments.length>1?bt.toArray(arguments):arguments[0];return bt.each(k0,function(e){if(e.litmus(t))return bt.each(e.conversions,function(n,r){if(Ur=n.read(t),Fs===!1&&Ur!==!1)return Fs=Ur,Ur.conversionName=r,Ur.conversion=n,bt.BREAK}),bt.BREAK}),Fs},Zc=void 0,aa={hsv_to_rgb:function(t,e,n){var r=Math.floor(t/60)%6,s=t/60-Math.floor(t/60),a=n*(1-e),o=n*(1-s*e),l=n*(1-(1-s)*e),c=[[n,l,a],[o,n,a],[a,n,l],[a,o,n],[l,a,n],[n,a,o]][r];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(t,e,n){var r=Math.min(t,e,n),s=Math.max(t,e,n),a=s-r,o=void 0,l=void 0;if(s!==0)l=a/s;else return{h:NaN,s:0,v:0};return t===s?o=(e-n)/a:e===s?o=2+(n-t)/a:o=4+(t-e)/a,o/=6,o<0&&(o+=1),{h:o*360,s:l,v:s/255}},rgb_to_hex:function(t,e,n){var r=this.hex_with_component(0,2,t);return r=this.hex_with_component(r,1,e),r=this.hex_with_component(r,0,n),r},component_from_hex:function(t,e){return t>>e*8&255},hex_with_component:function(t,e,n){return n<<(Zc=e*8)|t&~(255<<Zc)}},B0=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Tn=function(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")},An=function(){function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),hi=function i(t,e,n){t===null&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(r===void 0){var s=Object.getPrototypeOf(t);return s===null?void 0:i(s,e,n)}else{if("value"in r)return r.value;var a=r.get;return a===void 0?void 0:a.call(n)}},di=function(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(i,t):i.__proto__=t)},fi=function(i,t){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:i},Ve=function(){function i(){if(Tn(this,i),this.__state=Ko.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return An(i,[{key:"toString",value:function(){return sr(this)}},{key:"toHexString",value:function(){return sr(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),i}();function xl(i,t,e){Object.defineProperty(i,t,{get:function(){return this.__state.space==="RGB"?this.__state[t]:(Ve.recalculateRGB(this,t,e),this.__state[t])},set:function(r){this.__state.space!=="RGB"&&(Ve.recalculateRGB(this,t,e),this.__state.space="RGB"),this.__state[t]=r}})}function yl(i,t){Object.defineProperty(i,t,{get:function(){return this.__state.space==="HSV"?this.__state[t]:(Ve.recalculateHSV(this),this.__state[t])},set:function(n){this.__state.space!=="HSV"&&(Ve.recalculateHSV(this),this.__state.space="HSV"),this.__state[t]=n}})}Ve.recalculateRGB=function(i,t,e){if(i.__state.space==="HEX")i.__state[t]=aa.component_from_hex(i.__state.hex,e);else if(i.__state.space==="HSV")bt.extend(i.__state,aa.hsv_to_rgb(i.__state.h,i.__state.s,i.__state.v));else throw new Error("Corrupted color state")};Ve.recalculateHSV=function(i){var t=aa.rgb_to_hsv(i.r,i.g,i.b);bt.extend(i.__state,{s:t.s,v:t.v}),bt.isNaN(t.h)?bt.isUndefined(i.__state.h)&&(i.__state.h=0):i.__state.h=t.h};Ve.COMPONENTS=["r","g","b","h","s","v","hex","a"];xl(Ve.prototype,"r",2);xl(Ve.prototype,"g",1);xl(Ve.prototype,"b",0);yl(Ve.prototype,"h");yl(Ve.prototype,"s");yl(Ve.prototype,"v");Object.defineProperty(Ve.prototype,"a",{get:function(){return this.__state.a},set:function(t){this.__state.a=t}});Object.defineProperty(Ve.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=aa.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(t){this.__state.space="HEX",this.__state.hex=t}});var Ui=function(){function i(t,e){Tn(this,i),this.initialValue=t[e],this.domElement=document.createElement("div"),this.object=t,this.property=e,this.__onChange=void 0,this.__onFinishChange=void 0}return An(i,[{key:"onChange",value:function(e){return this.__onChange=e,this}},{key:"onFinishChange",value:function(e){return this.__onFinishChange=e,this}},{key:"setValue",value:function(e){return this.object[this.property]=e,this.__onChange&&this.__onChange.call(this,e),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),i}(),z0={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},ou={};bt.each(z0,function(i,t){bt.each(i,function(e){ou[e]=t})});var H0=/(\d+(\.\d+)?)px/;function Cn(i){if(i==="0"||bt.isUndefined(i))return 0;var t=i.match(H0);return bt.isNull(t)?0:parseFloat(t[1])}var lt={makeSelectable:function(t,e){t===void 0||t.style===void 0||(t.onselectstart=e?function(){return!1}:function(){},t.style.MozUserSelect=e?"auto":"none",t.style.KhtmlUserSelect=e?"auto":"none",t.unselectable=e?"on":"off")},makeFullscreen:function(t,e,n){var r=n,s=e;bt.isUndefined(s)&&(s=!0),bt.isUndefined(r)&&(r=!0),t.style.position="absolute",s&&(t.style.left=0,t.style.right=0),r&&(t.style.top=0,t.style.bottom=0)},fakeEvent:function(t,e,n,r){var s=n||{},a=ou[e];if(!a)throw new Error("Event type "+e+" not supported.");var o=document.createEvent(a);switch(a){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;o.initMouseEvent(e,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var d=o.initKeyboardEvent||o.initKeyEvent;bt.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),d(e,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{o.initEvent(e,s.bubbles||!1,s.cancelable||!0);break}}bt.defaults(o,r),t.dispatchEvent(o)},bind:function(t,e,n,r){var s=r||!1;return t.addEventListener?t.addEventListener(e,n,s):t.attachEvent&&t.attachEvent("on"+e,n),lt},unbind:function(t,e,n,r){var s=r||!1;return t.removeEventListener?t.removeEventListener(e,n,s):t.detachEvent&&t.detachEvent("on"+e,n),lt},addClass:function(t,e){if(t.className===void 0)t.className=e;else if(t.className!==e){var n=t.className.split(/ +/);n.indexOf(e)===-1&&(n.push(e),t.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return lt},removeClass:function(t,e){if(e)if(t.className===e)t.removeAttribute("class");else{var n=t.className.split(/ +/),r=n.indexOf(e);r!==-1&&(n.splice(r,1),t.className=n.join(" "))}else t.className=void 0;return lt},hasClass:function(t,e){return new RegExp("(?:^|\\s+)"+e+"(?:\\s+|$)").test(t.className)||!1},getWidth:function(t){var e=getComputedStyle(t);return Cn(e["border-left-width"])+Cn(e["border-right-width"])+Cn(e["padding-left"])+Cn(e["padding-right"])+Cn(e.width)},getHeight:function(t){var e=getComputedStyle(t);return Cn(e["border-top-width"])+Cn(e["border-bottom-width"])+Cn(e["padding-top"])+Cn(e["padding-bottom"])+Cn(e.height)},getOffset:function(t){var e=t,n={left:0,top:0};if(e.offsetParent)do n.left+=e.offsetLeft,n.top+=e.offsetTop,e=e.offsetParent;while(e);return n},isActive:function(t){return t===document.activeElement&&(t.type||t.href)}},lu=function(i){di(t,i);function t(e,n){Tn(this,t);var r=fi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),s=r;r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox");function a(){s.setValue(!s.__prev)}return lt.bind(r.__checkbox,"change",a,!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return An(t,[{key:"setValue",value:function(n){var r=hi(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),hi(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(Ui),V0=function(i){di(t,i);function t(e,n,r){Tn(this,t);var s=fi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),a=r,o=s;if(s.__select=document.createElement("select"),bt.isArray(a)){var l={};bt.each(a,function(c){l[c]=c}),a=l}return bt.each(a,function(c,d){var u=document.createElement("option");u.innerHTML=d,u.setAttribute("value",c),o.__select.appendChild(u)}),s.updateDisplay(),lt.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;o.setValue(c)}),s.domElement.appendChild(s.__select),s}return An(t,[{key:"setValue",value:function(n){var r=hi(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r}},{key:"updateDisplay",value:function(){return lt.isActive(this.__select)?this:(this.__select.value=this.getValue(),hi(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this))}}]),t}(Ui),G0=function(i){di(t,i);function t(e,n){Tn(this,t);var r=fi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),s=r;function a(){s.setValue(s.__input.value)}function o(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),lt.bind(r.__input,"keyup",a),lt.bind(r.__input,"change",a),lt.bind(r.__input,"blur",o),lt.bind(r.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return An(t,[{key:"updateDisplay",value:function(){return lt.isActive(this.__input)||(this.__input.value=this.getValue()),hi(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(Ui);function Kc(i){var t=i.toString();return t.indexOf(".")>-1?t.length-t.indexOf(".")-1:0}var cu=function(i){di(t,i);function t(e,n,r){Tn(this,t);var s=fi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),a=r||{};return s.__min=a.min,s.__max=a.max,s.__step=a.step,bt.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=Kc(s.__impliedStep),s}return An(t,[{key:"setValue",value:function(n){var r=n;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),hi(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,r)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Kc(n),this}}]),t}(Ui);function W0(i,t){var e=Math.pow(10,t);return Math.round(i*e)/e}var oa=function(i){di(t,i);function t(e,n,r){Tn(this,t);var s=fi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,r));s.__truncationSuspended=!1;var a=s,o=void 0;function l(){var g=parseFloat(a.__input.value);bt.isNaN(g)||a.setValue(g)}function c(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}function d(){c()}function u(g){var _=o-g.clientY;a.setValue(a.getValue()+_*a.__impliedStep),o=g.clientY}function p(){lt.unbind(window,"mousemove",u),lt.unbind(window,"mouseup",p),c()}function f(g){lt.bind(window,"mousemove",u),lt.bind(window,"mouseup",p),o=g.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),lt.bind(s.__input,"change",l),lt.bind(s.__input,"blur",d),lt.bind(s.__input,"mousedown",f),lt.bind(s.__input,"keydown",function(g){g.keyCode===13&&(a.__truncationSuspended=!0,this.blur(),a.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return An(t,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():W0(this.getValue(),this.__precision),hi(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(cu);function $c(i,t,e,n,r){return n+(r-n)*((i-t)/(e-t))}var $o=function(i){di(t,i);function t(e,n,r,s,a){Tn(this,t);var o=fi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,{min:r,max:s,step:a})),l=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),lt.bind(o.__background,"mousedown",c),lt.bind(o.__background,"touchstart",p),lt.addClass(o.__background,"slider"),lt.addClass(o.__foreground,"slider-fg");function c(_){document.activeElement.blur(),lt.bind(window,"mousemove",d),lt.bind(window,"mouseup",u),d(_)}function d(_){_.preventDefault();var m=l.__background.getBoundingClientRect();return l.setValue($c(_.clientX,m.left,m.right,l.__min,l.__max)),!1}function u(){lt.unbind(window,"mousemove",d),lt.unbind(window,"mouseup",u),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function p(_){_.touches.length===1&&(lt.bind(window,"touchmove",f),lt.bind(window,"touchend",g),f(_))}function f(_){var m=_.touches[0].clientX,h=l.__background.getBoundingClientRect();l.setValue($c(m,h.left,h.right,l.__min,l.__max))}function g(){lt.unbind(window,"touchmove",f),lt.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return An(t,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",hi(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(cu),hu=function(i){di(t,i);function t(e,n,r){Tn(this,t);var s=fi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),a=s;return s.__button=document.createElement("div"),s.__button.innerHTML=r===void 0?"Fire":r,lt.bind(s.__button,"click",function(o){return o.preventDefault(),a.fire(),!1}),lt.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return An(t,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),t}(Ui),Jo=function(i){di(t,i);function t(e,n){Tn(this,t);var r=fi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));r.__color=new Ve(r.getValue()),r.__temp=new Ve(0);var s=r;r.domElement=document.createElement("div"),lt.makeSelectable(r.domElement,!1),r.__selector=document.createElement("div"),r.__selector.className="selector",r.__saturation_field=document.createElement("div"),r.__saturation_field.className="saturation-field",r.__field_knob=document.createElement("div"),r.__field_knob.className="field-knob",r.__field_knob_border="2px solid ",r.__hue_knob=document.createElement("div"),r.__hue_knob.className="hue-knob",r.__hue_field=document.createElement("div"),r.__hue_field.className="hue-field",r.__input=document.createElement("input"),r.__input.type="text",r.__input_textShadow="0 1px 1px ",lt.bind(r.__input,"keydown",function(_){_.keyCode===13&&u.call(this)}),lt.bind(r.__input,"blur",u),lt.bind(r.__selector,"mousedown",function(){lt.addClass(this,"drag").bind(window,"mouseup",function(){lt.removeClass(s.__selector,"drag")})}),lt.bind(r.__selector,"touchstart",function(){lt.addClass(this,"drag").bind(window,"touchend",function(){lt.removeClass(s.__selector,"drag")})});var a=document.createElement("div");bt.extend(r.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),bt.extend(r.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:r.__field_knob_border+(r.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),bt.extend(r.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),bt.extend(r.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),bt.extend(a.style,{width:"100%",height:"100%",background:"none"}),Jc(a,"top","rgba(0,0,0,0)","#000"),bt.extend(r.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),j0(r.__hue_field),bt.extend(r.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:r.__input_textShadow+"rgba(0,0,0,0.7)"}),lt.bind(r.__saturation_field,"mousedown",o),lt.bind(r.__saturation_field,"touchstart",o),lt.bind(r.__field_knob,"mousedown",o),lt.bind(r.__field_knob,"touchstart",o),lt.bind(r.__hue_field,"mousedown",l),lt.bind(r.__hue_field,"touchstart",l);function o(_){f(_),lt.bind(window,"mousemove",f),lt.bind(window,"touchmove",f),lt.bind(window,"mouseup",c),lt.bind(window,"touchend",c)}function l(_){g(_),lt.bind(window,"mousemove",g),lt.bind(window,"touchmove",g),lt.bind(window,"mouseup",d),lt.bind(window,"touchend",d)}function c(){lt.unbind(window,"mousemove",f),lt.unbind(window,"touchmove",f),lt.unbind(window,"mouseup",c),lt.unbind(window,"touchend",c),p()}function d(){lt.unbind(window,"mousemove",g),lt.unbind(window,"touchmove",g),lt.unbind(window,"mouseup",d),lt.unbind(window,"touchend",d),p()}function u(){var _=Ko(this.value);_!==!1?(s.__color.__state=_,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function p(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}r.__saturation_field.appendChild(a),r.__selector.appendChild(r.__field_knob),r.__selector.appendChild(r.__saturation_field),r.__selector.appendChild(r.__hue_field),r.__hue_field.appendChild(r.__hue_knob),r.domElement.appendChild(r.__input),r.domElement.appendChild(r.__selector),r.updateDisplay();function f(_){_.type.indexOf("touch")===-1&&_.preventDefault();var m=s.__saturation_field.getBoundingClientRect(),h=_.touches&&_.touches[0]||_,x=h.clientX,M=h.clientY,S=(x-m.left)/(m.right-m.left),R=1-(M-m.top)/(m.bottom-m.top);return R>1?R=1:R<0&&(R=0),S>1?S=1:S<0&&(S=0),s.__color.v=R,s.__color.s=S,s.setValue(s.__color.toOriginal()),!1}function g(_){_.type.indexOf("touch")===-1&&_.preventDefault();var m=s.__hue_field.getBoundingClientRect(),h=_.touches&&_.touches[0]||_,x=h.clientY,M=1-(x-m.top)/(m.bottom-m.top);return M>1?M=1:M<0&&(M=0),s.__color.h=M*360,s.setValue(s.__color.toOriginal()),!1}return r}return An(t,[{key:"updateDisplay",value:function(){var n=Ko(this.getValue());if(n!==!1){var r=!1;bt.each(Ve.COMPONENTS,function(o){if(!bt.isUndefined(n[o])&&!bt.isUndefined(this.__color.__state[o])&&n[o]!==this.__color.__state[o])return r=!0,{}},this),r&&bt.extend(this.__color.__state,n)}bt.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,a=255-s;bt.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Jc(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),bt.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+a+","+a+","+a+",.7)"})}}]),t}(Ui),X0=["-moz-","-o-","-webkit-","-ms-",""];function Jc(i,t,e,n){i.style.background="",bt.each(X0,function(r){i.style.cssText+="background: "+r+"linear-gradient("+t+", "+e+" 0%, "+n+" 100%); "})}function j0(i){i.style.background="",i.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",i.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var q0={load:function(t,e){var n=e||document,r=n.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=t,n.getElementsByTagName("head")[0].appendChild(r)},inject:function(t,e){var n=e||document,r=document.createElement("style");r.type="text/css",r.innerHTML=t;var s=n.getElementsByTagName("head")[0];try{s.appendChild(r)}catch{}}},Y0=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,Z0=function(t,e){var n=t[e];return bt.isArray(arguments[2])||bt.isObject(arguments[2])?new V0(t,e,arguments[2]):bt.isNumber(n)?bt.isNumber(arguments[2])&&bt.isNumber(arguments[3])?bt.isNumber(arguments[4])?new $o(t,e,arguments[2],arguments[3],arguments[4]):new $o(t,e,arguments[2],arguments[3]):bt.isNumber(arguments[4])?new oa(t,e,{min:arguments[2],max:arguments[3],step:arguments[4]}):new oa(t,e,{min:arguments[2],max:arguments[3]}):bt.isString(n)?new G0(t,e):bt.isFunction(n)?new hu(t,e,""):bt.isBoolean(n)?new lu(t,e):null};function K0(i){setTimeout(i,1e3/60)}var $0=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||K0,J0=function(){function i(){Tn(this,i),this.backgroundElement=document.createElement("div"),bt.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),lt.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),bt.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var t=this;lt.bind(this.backgroundElement,"click",function(){t.hide()})}return An(i,[{key:"show",value:function(){var e=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),bt.defer(function(){e.backgroundElement.style.opacity=1,e.domElement.style.opacity=1,e.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var e=this,n=function r(){e.domElement.style.display="none",e.backgroundElement.style.display="none",lt.unbind(e.domElement,"webkitTransitionEnd",r),lt.unbind(e.domElement,"transitionend",r),lt.unbind(e.domElement,"oTransitionEnd",r)};lt.bind(this.domElement,"webkitTransitionEnd",n),lt.bind(this.domElement,"transitionend",n),lt.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-lt.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-lt.getHeight(this.domElement)/2+"px"}}]),i}(),Q0=F0(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);q0.inject(Q0);var Qc="dg",th=72,eh=20,qr="Default",zr=function(){try{return!!window.localStorage}catch{return!1}}(),Vr=void 0,nh=!0,er=void 0,ro=!1,uu=[],Re=function i(t){var e=this,n=t||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),lt.addClass(this.domElement,Qc),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=bt.defaults(n,{closeOnTop:!1,autoPlace:!0,width:i.DEFAULT_WIDTH}),n=bt.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),bt.isUndefined(n.load)?n.load={preset:qr}:n.preset&&(n.load.preset=n.preset),bt.isUndefined(n.parent)&&n.hideable&&uu.push(this),n.resizable=bt.isUndefined(n.parent)&&n.resizable,n.autoPlace&&bt.isUndefined(n.scrollable)&&(n.scrollable=!0);var r=zr&&localStorage.getItem(nr(this,"isLocal"))==="true",s=void 0,a=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return e.parent?e.getRoot().preset:n.load.preset},set:function(p){e.parent?e.getRoot().preset=p:n.load.preset=p,iv(this),e.revert()}},width:{get:function(){return n.width},set:function(p){n.width=p,el(e,p)}},name:{get:function(){return n.name},set:function(p){n.name=p,a&&(a.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(p){n.closed=p,n.closed?lt.addClass(e.__ul,i.CLASS_CLOSED):lt.removeClass(e.__ul,i.CLASS_CLOSED),this.onResize(),e.__closeButton&&(e.__closeButton.innerHTML=p?i.TEXT_OPEN:i.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return r},set:function(p){zr&&(r=p,p?lt.bind(window,"unload",s):lt.unbind(window,"unload",s),localStorage.setItem(nr(e,"isLocal"),p))}}}),bt.isUndefined(n.parent)){if(this.closed=n.closed||!1,lt.addClass(this.domElement,i.CLASS_MAIN),lt.makeSelectable(this.domElement,!1),zr&&r){e.useLocalStorage=!0;var o=localStorage.getItem(nr(this,"gui"));o&&(n.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=i.TEXT_CLOSED,lt.addClass(this.__closeButton,i.CLASS_CLOSE_BUTTON),n.closeOnTop?(lt.addClass(this.__closeButton,i.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(lt.addClass(this.__closeButton,i.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),lt.bind(this.__closeButton,"click",function(){e.closed=!e.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);lt.addClass(l,"controller-name"),a=bl(e,l);var c=function(p){return p.preventDefault(),e.closed=!e.closed,!1};lt.addClass(this.__ul,i.CLASS_CLOSED),lt.addClass(a,"title"),lt.bind(a,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(bt.isUndefined(n.parent)&&(nh&&(er=document.createElement("div"),lt.addClass(er,Qc),lt.addClass(er,i.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(er),nh=!1),er.appendChild(this.domElement),lt.addClass(this.domElement,i.CLASS_AUTO_PLACE)),this.parent||el(e,n.width)),this.__resizeHandler=function(){e.onResizeDebounced()},lt.bind(window,"resize",this.__resizeHandler),lt.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),lt.bind(this.__ul,"transitionend",this.__resizeHandler),lt.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&nv(this),s=function(){zr&&localStorage.getItem(nr(e,"isLocal"))==="true"&&localStorage.setItem(nr(e,"gui"),JSON.stringify(e.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function d(){var u=e.getRoot();u.width+=1,bt.defer(function(){u.width-=1})}n.parent||d()};Re.toggleHide=function(){ro=!ro,bt.each(uu,function(i){i.domElement.style.display=ro?"none":""})};Re.CLASS_AUTO_PLACE="a";Re.CLASS_AUTO_PLACE_CONTAINER="ac";Re.CLASS_MAIN="main";Re.CLASS_CONTROLLER_ROW="cr";Re.CLASS_TOO_TALL="taller-than-window";Re.CLASS_CLOSED="closed";Re.CLASS_CLOSE_BUTTON="close-button";Re.CLASS_CLOSE_TOP="close-top";Re.CLASS_CLOSE_BOTTOM="close-bottom";Re.CLASS_DRAG="drag";Re.DEFAULT_WIDTH=245;Re.TEXT_CLOSED="Close Controls";Re.TEXT_OPEN="Open Controls";Re._keydownHandler=function(i){document.activeElement.type!=="text"&&(i.which===th||i.keyCode===th)&&Re.toggleHide()};lt.bind(window,"keydown",Re._keydownHandler,!1);bt.extend(Re.prototype,{add:function(t,e){return Gr(this,t,e,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(t,e){return Gr(this,t,e,{color:!0})},remove:function(t){this.__ul.removeChild(t.__li),this.__controllers.splice(this.__controllers.indexOf(t),1);var e=this;bt.defer(function(){e.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&er.removeChild(this.domElement);var t=this;bt.each(this.__folders,function(e){t.removeFolder(e)}),lt.unbind(window,"keydown",Re._keydownHandler,!1),ih(this)},addFolder:function(t){if(this.__folders[t]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+t+'"');var e={name:t,parent:this};e.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[t]&&(e.closed=this.load.folders[t].closed,e.load=this.load.folders[t]);var n=new Re(e);this.__folders[t]=n;var r=bl(this,n.domElement);return lt.addClass(r,"folder"),n},removeFolder:function(t){this.__ul.removeChild(t.domElement.parentElement),delete this.__folders[t.name],this.load&&this.load.folders&&this.load.folders[t.name]&&delete this.load.folders[t.name],ih(t);var e=this;bt.each(t.__folders,function(n){t.removeFolder(n)}),bt.defer(function(){e.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var t=this.getRoot();if(t.scrollable){var e=lt.getOffset(t.__ul).top,n=0;bt.each(t.__ul.childNodes,function(r){t.autoPlace&&r===t.__save_row||(n+=lt.getHeight(r))}),window.innerHeight-e-eh<n?(lt.addClass(t.domElement,Re.CLASS_TOO_TALL),t.__ul.style.height=window.innerHeight-e-eh+"px"):(lt.removeClass(t.domElement,Re.CLASS_TOO_TALL),t.__ul.style.height="auto")}t.__resize_handle&&bt.defer(function(){t.__resize_handle.style.height=t.__ul.offsetHeight+"px"}),t.__closeButton&&(t.__closeButton.style.width=t.width+"px")},onResizeDebounced:bt.debounce(function(){this.onResize()},50),remember:function(){if(bt.isUndefined(Vr)&&(Vr=new J0,Vr.domElement.innerHTML=Y0),this.parent)throw new Error("You can only call remember on a top level GUI.");var t=this;bt.each(Array.prototype.slice.call(arguments),function(e){t.__rememberedObjects.length===0&&ev(t),t.__rememberedObjects.indexOf(e)===-1&&t.__rememberedObjects.push(e)}),this.autoPlace&&el(this,this.width)},getRoot:function(){for(var t=this;t.parent;)t=t.parent;return t},getSaveObject:function(){var t=this.load;return t.closed=this.closed,this.__rememberedObjects.length>0&&(t.preset=this.preset,t.remembered||(t.remembered={}),t.remembered[this.preset]=ks(this)),t.folders={},bt.each(this.__folders,function(e,n){t.folders[n]=e.getSaveObject()}),t},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=ks(this),Qo(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(t){this.load.remembered||(this.load.remembered={},this.load.remembered[qr]=ks(this,!0)),this.load.remembered[t]=ks(this),this.preset=t,tl(this,t,!0),this.saveToLocalStorageIfPossible()},revert:function(t){bt.each(this.__controllers,function(e){this.getRoot().load.remembered?du(t||this.getRoot(),e):e.setValue(e.initialValue),e.__onFinishChange&&e.__onFinishChange.call(e,e.getValue())},this),bt.each(this.__folders,function(e){e.revert(e)}),t||Qo(this.getRoot(),!1)},listen:function(t){var e=this.__listening.length===0;this.__listening.push(t),e&&fu(this.__listening)},updateDisplay:function(){bt.each(this.__controllers,function(t){t.updateDisplay()}),bt.each(this.__folders,function(t){t.updateDisplay()})}});function bl(i,t,e){var n=document.createElement("li");return t&&n.appendChild(t),e?i.__ul.insertBefore(n,e):i.__ul.appendChild(n),i.onResize(),n}function ih(i){lt.unbind(window,"resize",i.__resizeHandler),i.saveToLocalStorageIfPossible&&lt.unbind(window,"unload",i.saveToLocalStorageIfPossible)}function Qo(i,t){var e=i.__preset_select[i.__preset_select.selectedIndex];t?e.innerHTML=e.value+"*":e.innerHTML=e.value}function tv(i,t,e){if(e.__li=t,e.__gui=i,bt.extend(e,{options:function(a){if(arguments.length>1){var o=e.__li.nextElementSibling;return e.remove(),Gr(i,e.object,e.property,{before:o,factoryArgs:[bt.toArray(arguments)]})}if(bt.isArray(a)||bt.isObject(a)){var l=e.__li.nextElementSibling;return e.remove(),Gr(i,e.object,e.property,{before:l,factoryArgs:[a]})}},name:function(a){return e.__li.firstElementChild.firstElementChild.innerHTML=a,e},listen:function(){return e.__gui.listen(e),e},remove:function(){return e.__gui.remove(e),e}}),e instanceof $o){var n=new oa(e.object,e.property,{min:e.__min,max:e.__max,step:e.__step});bt.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var a=e[s],o=n[s];e[s]=n[s]=function(){var l=Array.prototype.slice.call(arguments);return o.apply(n,l),a.apply(e,l)}}),lt.addClass(t,"has-slider"),e.domElement.insertBefore(n.domElement,e.domElement.firstElementChild)}else if(e instanceof oa){var r=function(a){if(bt.isNumber(e.__min)&&bt.isNumber(e.__max)){var o=e.__li.firstElementChild.firstElementChild.innerHTML,l=e.__gui.__listening.indexOf(e)>-1;e.remove();var c=Gr(i,e.object,e.property,{before:e.__li.nextElementSibling,factoryArgs:[e.__min,e.__max,e.__step]});return c.name(o),l&&c.listen(),c}return a};e.min=bt.compose(r,e.min),e.max=bt.compose(r,e.max)}else e instanceof lu?(lt.bind(t,"click",function(){lt.fakeEvent(e.__checkbox,"click")}),lt.bind(e.__checkbox,"click",function(s){s.stopPropagation()})):e instanceof hu?(lt.bind(t,"click",function(){lt.fakeEvent(e.__button,"click")}),lt.bind(t,"mouseover",function(){lt.addClass(e.__button,"hover")}),lt.bind(t,"mouseout",function(){lt.removeClass(e.__button,"hover")})):e instanceof Jo&&(lt.addClass(t,"color"),e.updateDisplay=bt.compose(function(s){return t.style.borderLeftColor=e.__color.toString(),s},e.updateDisplay),e.updateDisplay());e.setValue=bt.compose(function(s){return i.getRoot().__preset_select&&e.isModified()&&Qo(i.getRoot(),!0),s},e.setValue)}function du(i,t){var e=i.getRoot(),n=e.__rememberedObjects.indexOf(t.object);if(n!==-1){var r=e.__rememberedObjectIndecesToControllers[n];if(r===void 0&&(r={},e.__rememberedObjectIndecesToControllers[n]=r),r[t.property]=t,e.load&&e.load.remembered){var s=e.load.remembered,a=void 0;if(s[i.preset])a=s[i.preset];else if(s[qr])a=s[qr];else return;if(a[n]&&a[n][t.property]!==void 0){var o=a[n][t.property];t.initialValue=o,t.setValue(o)}}}}function Gr(i,t,e,n){if(t[e]===void 0)throw new Error('Object "'+t+'" has no property "'+e+'"');var r=void 0;if(n.color)r=new Jo(t,e);else{var s=[t,e].concat(n.factoryArgs);r=Z0.apply(i,s)}n.before instanceof Ui&&(n.before=n.before.__li),du(i,r),lt.addClass(r.domElement,"c");var a=document.createElement("span");lt.addClass(a,"property-name"),a.innerHTML=r.property;var o=document.createElement("div");o.appendChild(a),o.appendChild(r.domElement);var l=bl(i,o,n.before);return lt.addClass(l,Re.CLASS_CONTROLLER_ROW),r instanceof Jo?lt.addClass(l,"color"):lt.addClass(l,B0(r.getValue())),tv(i,l,r),i.__controllers.push(r),r}function nr(i,t){return document.location.href+"."+t}function tl(i,t,e){var n=document.createElement("option");n.innerHTML=t,n.value=t,i.__preset_select.appendChild(n),e&&(i.__preset_select.selectedIndex=i.__preset_select.length-1)}function rh(i,t){t.style.display=i.useLocalStorage?"block":"none"}function ev(i){var t=i.__save_row=document.createElement("li");lt.addClass(i.domElement,"has-save"),i.__ul.insertBefore(t,i.__ul.firstChild),lt.addClass(t,"save-row");var e=document.createElement("span");e.innerHTML="&nbsp;",lt.addClass(e,"button gears");var n=document.createElement("span");n.innerHTML="Save",lt.addClass(n,"button"),lt.addClass(n,"save");var r=document.createElement("span");r.innerHTML="New",lt.addClass(r,"button"),lt.addClass(r,"save-as");var s=document.createElement("span");s.innerHTML="Revert",lt.addClass(s,"button"),lt.addClass(s,"revert");var a=i.__preset_select=document.createElement("select");if(i.load&&i.load.remembered?bt.each(i.load.remembered,function(u,p){tl(i,p,p===i.preset)}):tl(i,qr,!1),lt.bind(a,"change",function(){for(var u=0;u<i.__preset_select.length;u++)i.__preset_select[u].innerHTML=i.__preset_select[u].value;i.preset=this.value}),t.appendChild(a),t.appendChild(e),t.appendChild(n),t.appendChild(r),t.appendChild(s),zr){var o=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(nr(i,"isLocal"))==="true"&&l.setAttribute("checked","checked"),rh(i,o),lt.bind(l,"change",function(){i.useLocalStorage=!i.useLocalStorage,rh(i,o)})}var d=document.getElementById("dg-new-constructor");lt.bind(d,"keydown",function(u){u.metaKey&&(u.which===67||u.keyCode===67)&&Vr.hide()}),lt.bind(e,"click",function(){d.innerHTML=JSON.stringify(i.getSaveObject(),void 0,2),Vr.show(),d.focus(),d.select()}),lt.bind(n,"click",function(){i.save()}),lt.bind(r,"click",function(){var u=prompt("Enter a new preset name.");u&&i.saveAs(u)}),lt.bind(s,"click",function(){i.revert()})}function nv(i){var t=void 0;i.__resize_handle=document.createElement("div"),bt.extend(i.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function e(s){return s.preventDefault(),i.width+=t-s.clientX,i.onResize(),t=s.clientX,!1}function n(){lt.removeClass(i.__closeButton,Re.CLASS_DRAG),lt.unbind(window,"mousemove",e),lt.unbind(window,"mouseup",n)}function r(s){return s.preventDefault(),t=s.clientX,lt.addClass(i.__closeButton,Re.CLASS_DRAG),lt.bind(window,"mousemove",e),lt.bind(window,"mouseup",n),!1}lt.bind(i.__resize_handle,"mousedown",r),lt.bind(i.__closeButton,"mousedown",r),i.domElement.insertBefore(i.__resize_handle,i.domElement.firstElementChild)}function el(i,t){i.domElement.style.width=t+"px",i.__save_row&&i.autoPlace&&(i.__save_row.style.width=t+"px"),i.__closeButton&&(i.__closeButton.style.width=t+"px")}function ks(i,t){var e={};return bt.each(i.__rememberedObjects,function(n,r){var s={},a=i.__rememberedObjectIndecesToControllers[r];bt.each(a,function(o,l){s[l]=t?o.initialValue:o.getValue()}),e[r]=s}),e}function iv(i){for(var t=0;t<i.__preset_select.length;t++)i.__preset_select[t].value===i.preset&&(i.__preset_select.selectedIndex=t)}function fu(i){i.length!==0&&$0.call(window,function(){fu(i)}),bt.each(i,function(t){t.updateDisplay()})}var rv=Re,pu=(i=>(i[i.Idle=0]="Idle",i[i.Moving=1]="Moving",i))(pu||{}),Js=(i=>(i[i.GOTO_A=0]="GOTO_A",i[i.GOTO_B=1]="GOTO_B",i[i.STOP=2]="STOP",i))(Js||{});function sv(i,t){switch(t){case 0:return{from:i,to:1,command:t};case 1:return{from:i,to:1,command:t};case 2:return{from:i,to:0,command:t};default:throw new Error(`Unhandled case: ${t}`)}}class av{constructor(){fe(this,"state",0);fe(this,"command",2)}transition(t){const{from:e,to:n,command:r}=sv(this.state,t);return this.state=n,this.command=r,{from:e,to:n,command:r}}getState(){return this.state}getTargetAngle(){return this.command==0?-3:this.command==1?-1:0}}class ov{constructor(){fe(this,"gui");fe(this,"actionQueue",[]);this.gui=new rv;const t=this.gui.addFolder("Table");t.add({armGotoA:()=>this.armGotoA()},"armGotoA").name("Position A"),t.add({armGotoB:()=>this.armGotoB()},"armGotoB").name("Position B"),t.add({armStop:()=>this.armStop()},"armStop").name("STOP"),t.open()}armGotoA(){console.log("armGotoA command"),this.actionQueue.push(Js.GOTO_A)}armGotoB(){console.log("armGotoB command"),this.actionQueue.push(Js.GOTO_B)}armStop(){console.log("armStop command"),this.actionQueue.push(Js.STOP)}getAndClearQueue(){const t=[...this.actionQueue];return this.actionQueue=[],t}updateDisplay(){}}var Ai=(i=>(i.ArrowUp="ArrowUp",i.ArrowDown="ArrowDown",i.ArrowLeft="ArrowLeft",i.ArrowRight="ArrowRight",i.Space="Space",i))(Ai||{});class lv{constructor(t){fe(this,"keys");this.keys={...t}}isPressed(t){return Array.isArray(t)?this.isAnyPressed(t):!!this.keys[t]}isAnyPressed(t){return t.some(e=>!!this.keys[e])}}class cv{constructor(){fe(this,"keys",{});window.addEventListener("keydown",t=>this.onKeyDown(t)),window.addEventListener("keyup",t=>this.onKeyUp(t))}onKeyDown(t){t.key in Ai&&(this.keys[t.key]=!0)}onKeyUp(t){t.key in Ai&&(this.keys[t.key]=!1)}getKeyboardState(){return new lv(this.keys)}}var Sl=(i=>(i[i.PLAYER_MOVE=0]="PLAYER_MOVE",i))(Sl||{});class hv{constructor(t){fe(this,"action");this.action=t}execute(t){switch(this.action.type){case Sl.PLAYER_MOVE:t.handleMove(this.action.payload);break}}}class uv{constructor(t){fe(this,"keyboardListener");fe(this,"dashboardController");this.dashboardController=t,this.keyboardListener=new cv}getMoveAction(){const t={forward:!1,backward:!1,left:!1,right:!1},e=this.keyboardListener.getKeyboardState();e.isPressed(Ai.ArrowUp)&&(t.forward=!0),e.isPressed(Ai.ArrowDown)&&(t.backward=!0),e.isPressed(Ai.ArrowLeft)&&(t.left=!0),e.isPressed(Ai.ArrowRight)&&(t.right=!0);const n={type:Sl.PLAYER_MOVE,payload:t};return new hv(n)}getPlayerActions(){const t=[];return t.push(this.getMoveAction()),t}getArmCommands(){return this.dashboardController.getAndClearQueue()}}function sh(i){const t=performance.now();return{delta:i?(t-i.timestamp)/1e3:0,timestamp:t}}class dv{constructor(t,e,n){fe(this,"dashboardController");fe(this,"actorController");fe(this,"cameraController");fe(this,"renderController");fe(this,"simulationLoop");fe(this,"frameTime");fe(this,"runSimulationLoop",()=>{const t=sh(this.frameTime);this.cameraController.executeWithOffsetHandling(()=>{this.processNextFrame()}),this.frameTime=t,requestAnimationFrame(this.runSimulationLoop)});this.cameraController=new P0(e.player.object),this.dashboardController=new ov,this.renderController=new O0(n,this.cameraController.getCamera()),this.actorController=new U0(e,new uv(this.dashboardController)),this.simulationLoop=new N0(t,e),this.frameTime=sh()}processNextFrame(){this.actorController.handleUserInput(),this.simulationLoop.step(this.frameTime.delta),this.renderController.render()}}const fv=0,mu="./assets.zip",pv="digital_twin_lab-4",mv="./packages/digital_twin_lab-4",_v="./packages/digital_twin_lab-4/urdf/robot_arm.urdf";var Yr=(i=>(i[i.OpticalTable=0]="OpticalTable",i))(Yr||{}),Bs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gv(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function zs(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var so={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var ah;function vv(){return ah||(ah=1,function(i,t){(function(e){i.exports=e()})(function(){return function e(n,r,s){function a(c,d){if(!r[c]){if(!n[c]){var u=typeof zs=="function"&&zs;if(!d&&u)return u(c,!0);if(o)return o(c,!0);var p=new Error("Cannot find module '"+c+"'");throw p.code="MODULE_NOT_FOUND",p}var f=r[c]={exports:{}};n[c][0].call(f.exports,function(g){var _=n[c][1][g];return a(_||g)},f,f.exports,e,n,r,s)}return r[c].exports}for(var o=typeof zs=="function"&&zs,l=0;l<s.length;l++)a(s[l]);return a}({1:[function(e,n,r){var s=e("./utils"),a=e("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var c,d,u,p,f,g,_,m=[],h=0,x=l.length,M=x,S=s.getTypeOf(l)!=="string";h<l.length;)M=x-h,u=S?(c=l[h++],d=h<x?l[h++]:0,h<x?l[h++]:0):(c=l.charCodeAt(h++),d=h<x?l.charCodeAt(h++):0,h<x?l.charCodeAt(h++):0),p=c>>2,f=(3&c)<<4|d>>4,g=1<M?(15&d)<<2|u>>6:64,_=2<M?63&u:64,m.push(o.charAt(p)+o.charAt(f)+o.charAt(g)+o.charAt(_));return m.join("")},r.decode=function(l){var c,d,u,p,f,g,_=0,m=0,h="data:";if(l.substr(0,h.length)===h)throw new Error("Invalid base64 input, it looks like a data url.");var x,M=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===o.charAt(64)&&M--,l.charAt(l.length-2)===o.charAt(64)&&M--,M%1!=0)throw new Error("Invalid base64 input, bad content length.");for(x=a.uint8array?new Uint8Array(0|M):new Array(0|M);_<l.length;)c=o.indexOf(l.charAt(_++))<<2|(p=o.indexOf(l.charAt(_++)))>>4,d=(15&p)<<4|(f=o.indexOf(l.charAt(_++)))>>2,u=(3&f)<<6|(g=o.indexOf(l.charAt(_++))),x[m++]=c,f!==64&&(x[m++]=d),g!==64&&(x[m++]=u);return x}},{"./support":30,"./utils":32}],2:[function(e,n,r){var s=e("./external"),a=e("./stream/DataWorker"),o=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function c(d,u,p,f,g){this.compressedSize=d,this.uncompressedSize=u,this.crc32=p,this.compression=f,this.compressedContent=g}c.prototype={getContentWorker:function(){var d=new a(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),u=this;return d.on("end",function(){if(this.streamInfo.data_length!==u.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),d},getCompressedWorker:function(){return new a(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(d,u,p){return d.pipe(new o).pipe(new l("uncompressedSize")).pipe(u.compressWorker(p)).pipe(new l("compressedSize")).withStreamInfo("compression",u)},n.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,n,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,n,r){var s=e("./utils"),a=function(){for(var o,l=[],c=0;c<256;c++){o=c;for(var d=0;d<8;d++)o=1&o?3988292384^o>>>1:o>>>1;l[c]=o}return l}();n.exports=function(o,l){return o!==void 0&&o.length?s.getTypeOf(o)!=="string"?function(c,d,u,p){var f=a,g=p+u;c^=-1;for(var _=p;_<g;_++)c=c>>>8^f[255&(c^d[_])];return-1^c}(0|l,o,o.length,0):function(c,d,u,p){var f=a,g=p+u;c^=-1;for(var _=p;_<g;_++)c=c>>>8^f[255&(c^d.charCodeAt(_))];return-1^c}(0|l,o,o.length,0):0}},{"./utils":32}],5:[function(e,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,n,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),n.exports={Promise:s}},{lie:37}],7:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=e("pako"),o=e("./utils"),l=e("./stream/GenericWorker"),c=s?"uint8array":"array";function d(u,p){l.call(this,"FlateWorker/"+u),this._pako=null,this._pakoAction=u,this._pakoOptions=p,this.meta={}}r.magic="\b\0",o.inherits(d,l),d.prototype.processChunk=function(u){this.meta=u.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(c,u.data),!1)},d.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},d.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},d.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var u=this;this._pako.onData=function(p){u.push({data:p,meta:u.meta})}},r.compressWorker=function(u){return new d("Deflate",u)},r.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,n,r){function s(f,g){var _,m="";for(_=0;_<g;_++)m+=String.fromCharCode(255&f),f>>>=8;return m}function a(f,g,_,m,h,x){var M,S,R=f.file,L=f.compression,P=x!==c.utf8encode,N=o.transformTo("string",x(R.name)),E=o.transformTo("string",c.utf8encode(R.name)),w=R.comment,B=o.transformTo("string",x(w)),C=o.transformTo("string",c.utf8encode(w)),z=E.length!==R.name.length,y=C.length!==w.length,V="",W="",q="",J=R.dir,Q=R.date,pt={crc32:0,compressedSize:0,uncompressedSize:0};g&&!_||(pt.crc32=f.crc32,pt.compressedSize=f.compressedSize,pt.uncompressedSize=f.uncompressedSize);var j=0;g&&(j|=8),P||!z&&!y||(j|=2048);var Z=0,vt=0;J&&(Z|=16),h==="UNIX"?(vt=798,Z|=function(Y,ct){var ft=Y;return Y||(ft=ct?16893:33204),(65535&ft)<<16}(R.unixPermissions,J)):(vt=20,Z|=function(Y){return 63&(Y||0)}(R.dosPermissions)),M=Q.getUTCHours(),M<<=6,M|=Q.getUTCMinutes(),M<<=5,M|=Q.getUTCSeconds()/2,S=Q.getUTCFullYear()-1980,S<<=4,S|=Q.getUTCMonth()+1,S<<=5,S|=Q.getUTCDate(),z&&(W=s(1,1)+s(d(N),4)+E,V+="up"+s(W.length,2)+W),y&&(q=s(1,1)+s(d(B),4)+C,V+="uc"+s(q.length,2)+q);var X="";return X+=`
\0`,X+=s(j,2),X+=L.magic,X+=s(M,2),X+=s(S,2),X+=s(pt.crc32,4),X+=s(pt.compressedSize,4),X+=s(pt.uncompressedSize,4),X+=s(N.length,2),X+=s(V.length,2),{fileRecord:u.LOCAL_FILE_HEADER+X+N+V,dirRecord:u.CENTRAL_FILE_HEADER+s(vt,2)+X+s(B.length,2)+"\0\0\0\0"+s(Z,4)+s(m,4)+N+V+B}}var o=e("../utils"),l=e("../stream/GenericWorker"),c=e("../utf8"),d=e("../crc32"),u=e("../signature");function p(f,g,_,m){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=_,this.encodeFileName=m,this.streamFiles=f,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(p,l),p.prototype.push=function(f){var g=f.meta.percent||0,_=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(f):(this.bytesWritten+=f.data.length,l.prototype.push.call(this,{data:f.data,meta:{currentFile:this.currentFile,percent:_?(g+100*(_-m-1))/_:100}}))},p.prototype.openedSource=function(f){this.currentSourceOffset=this.bytesWritten,this.currentFile=f.file.name;var g=this.streamFiles&&!f.file.dir;if(g){var _=a(f,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:_.fileRecord,meta:{percent:0}})}else this.accumulate=!0},p.prototype.closedSource=function(f){this.accumulate=!1;var g=this.streamFiles&&!f.file.dir,_=a(f,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(_.dirRecord),g)this.push({data:function(m){return u.DATA_DESCRIPTOR+s(m.crc32,4)+s(m.compressedSize,4)+s(m.uncompressedSize,4)}(f),meta:{percent:100}});else for(this.push({data:_.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},p.prototype.flush=function(){for(var f=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var _=this.bytesWritten-f,m=function(h,x,M,S,R){var L=o.transformTo("string",R(S));return u.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(h,2)+s(h,2)+s(x,4)+s(M,4)+s(L.length,2)+L}(this.dirRecords.length,_,f,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},p.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},p.prototype.registerPrevious=function(f){this._sources.push(f);var g=this;return f.on("data",function(_){g.processChunk(_)}),f.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),f.on("error",function(_){g.error(_)}),this},p.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},p.prototype.error=function(f){var g=this._sources;if(!l.prototype.error.call(this,f))return!1;for(var _=0;_<g.length;_++)try{g[_].error(f)}catch{}return!0},p.prototype.lock=function(){l.prototype.lock.call(this);for(var f=this._sources,g=0;g<f.length;g++)f[g].lock()},n.exports=p},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,n,r){var s=e("../compressions"),a=e("./ZipFileWorker");r.generateWorker=function(o,l,c){var d=new a(l.streamFiles,c,l.platform,l.encodeFileName),u=0;try{o.forEach(function(p,f){u++;var g=function(x,M){var S=x||M,R=s[S];if(!R)throw new Error(S+" is not a valid compression method !");return R}(f.options.compression,l.compression),_=f.options.compressionOptions||l.compressionOptions||{},m=f.dir,h=f.date;f._compressWorker(g,_).withStreamInfo("file",{name:p,dir:m,date:h,comment:f.comment||"",unixPermissions:f.unixPermissions,dosPermissions:f.dosPermissions}).pipe(d)}),d.entriesCount=u}catch(p){d.error(p)}return d}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,n,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new s;for(var o in this)typeof this[o]!="function"&&(a[o]=this[o]);return a}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(a,o){return new s().loadAsync(a,o)},s.external=e("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,n,r){var s=e("./utils"),a=e("./external"),o=e("./utf8"),l=e("./zipEntries"),c=e("./stream/Crc32Probe"),d=e("./nodejsUtils");function u(p){return new a.Promise(function(f,g){var _=p.decompressed.getContentWorker().pipe(new c);_.on("error",function(m){g(m)}).on("end",function(){_.streamInfo.crc32!==p.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):f()}).resume()})}n.exports=function(p,f){var g=this;return f=s.extend(f||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),d.isNode&&d.isStream(p)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",p,!0,f.optimizedBinaryString,f.base64).then(function(_){var m=new l(f);return m.load(_),m}).then(function(_){var m=[a.Promise.resolve(_)],h=_.files;if(f.checkCRC32)for(var x=0;x<h.length;x++)m.push(u(h[x]));return a.Promise.all(m)}).then(function(_){for(var m=_.shift(),h=m.files,x=0;x<h.length;x++){var M=h[x],S=M.fileNameStr,R=s.resolve(M.fileNameStr);g.file(R,M.decompressed,{binary:!0,optimizedBinaryString:!0,date:M.date,dir:M.dir,comment:M.fileCommentStr.length?M.fileCommentStr:null,unixPermissions:M.unixPermissions,dosPermissions:M.dosPermissions,createFolders:f.createFolders}),M.dir||(g.file(R).unsafeOriginalName=S)}return m.zipComment.length&&(g.comment=m.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,n,r){var s=e("../utils"),a=e("../stream/GenericWorker");function o(l,c){a.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(o,a),o.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(d){c.push({data:d,meta:{percent:0}})}).on("error",function(d){c.isPaused?this.generatedError=d:c.error(d)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},o.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,n,r){var s=e("readable-stream").Readable;function a(o,l,c){s.call(this,l),this._helper=o;var d=this;o.on("data",function(u,p){d.push(u)||d._helper.pause(),c&&c(p)}).on("error",function(u){d.emit("error",u)}).on("end",function(){d.push(null)})}e("../utils").inherits(a,s),a.prototype._read=function(){this._helper.resume()},n.exports=a},{"../utils":32,"readable-stream":16}],14:[function(e,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,a);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,a)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var a=new Buffer(s);return a.fill(0),a},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,n,r){function s(R,L,P){var N,E=o.getTypeOf(L),w=o.extend(P||{},d);w.date=w.date||new Date,w.compression!==null&&(w.compression=w.compression.toUpperCase()),typeof w.unixPermissions=="string"&&(w.unixPermissions=parseInt(w.unixPermissions,8)),w.unixPermissions&&16384&w.unixPermissions&&(w.dir=!0),w.dosPermissions&&16&w.dosPermissions&&(w.dir=!0),w.dir&&(R=h(R)),w.createFolders&&(N=m(R))&&x.call(this,N,!0);var B=E==="string"&&w.binary===!1&&w.base64===!1;P&&P.binary!==void 0||(w.binary=!B),(L instanceof u&&L.uncompressedSize===0||w.dir||!L||L.length===0)&&(w.base64=!1,w.binary=!0,L="",w.compression="STORE",E="string");var C=null;C=L instanceof u||L instanceof l?L:g.isNode&&g.isStream(L)?new _(R,L):o.prepareContent(R,L,w.binary,w.optimizedBinaryString,w.base64);var z=new p(R,C,w);this.files[R]=z}var a=e("./utf8"),o=e("./utils"),l=e("./stream/GenericWorker"),c=e("./stream/StreamHelper"),d=e("./defaults"),u=e("./compressedObject"),p=e("./zipObject"),f=e("./generate"),g=e("./nodejsUtils"),_=e("./nodejs/NodejsStreamInputAdapter"),m=function(R){R.slice(-1)==="/"&&(R=R.substring(0,R.length-1));var L=R.lastIndexOf("/");return 0<L?R.substring(0,L):""},h=function(R){return R.slice(-1)!=="/"&&(R+="/"),R},x=function(R,L){return L=L!==void 0?L:d.createFolders,R=h(R),this.files[R]||s.call(this,R,null,{dir:!0,createFolders:L}),this.files[R]};function M(R){return Object.prototype.toString.call(R)==="[object RegExp]"}var S={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(R){var L,P,N;for(L in this.files)N=this.files[L],(P=L.slice(this.root.length,L.length))&&L.slice(0,this.root.length)===this.root&&R(P,N)},filter:function(R){var L=[];return this.forEach(function(P,N){R(P,N)&&L.push(N)}),L},file:function(R,L,P){if(arguments.length!==1)return R=this.root+R,s.call(this,R,L,P),this;if(M(R)){var N=R;return this.filter(function(w,B){return!B.dir&&N.test(w)})}var E=this.files[this.root+R];return E&&!E.dir?E:null},folder:function(R){if(!R)return this;if(M(R))return this.filter(function(E,w){return w.dir&&R.test(E)});var L=this.root+R,P=x.call(this,L),N=this.clone();return N.root=P.name,N},remove:function(R){R=this.root+R;var L=this.files[R];if(L||(R.slice(-1)!=="/"&&(R+="/"),L=this.files[R]),L&&!L.dir)delete this.files[R];else for(var P=this.filter(function(E,w){return w.name.slice(0,R.length)===R}),N=0;N<P.length;N++)delete this.files[P[N].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(R){var L,P={};try{if((P=o.extend(R||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=P.type.toLowerCase(),P.compression=P.compression.toUpperCase(),P.type==="binarystring"&&(P.type="string"),!P.type)throw new Error("No output type specified.");o.checkSupport(P.type),P.platform!=="darwin"&&P.platform!=="freebsd"&&P.platform!=="linux"&&P.platform!=="sunos"||(P.platform="UNIX"),P.platform==="win32"&&(P.platform="DOS");var N=P.comment||this.comment||"";L=f.generateWorker(this,P,N)}catch(E){(L=new l("error")).error(E)}return new c(L,P.type||"string",P.mimeType)},generateAsync:function(R,L){return this.generateInternalStream(R).accumulate(L)},generateNodeStream:function(R,L){return(R=R||{}).type||(R.type="nodebuffer"),this.generateInternalStream(R).toNodejsStream(L)}};n.exports=S},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,n,r){n.exports=e("stream")},{stream:void 0}],17:[function(e,n,r){var s=e("./DataReader");function a(o){s.call(this,o);for(var l=0;l<this.data.length;l++)o[l]=255&o[l]}e("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data[this.zero+o]},a.prototype.lastIndexOfSignature=function(o){for(var l=o.charCodeAt(0),c=o.charCodeAt(1),d=o.charCodeAt(2),u=o.charCodeAt(3),p=this.length-4;0<=p;--p)if(this.data[p]===l&&this.data[p+1]===c&&this.data[p+2]===d&&this.data[p+3]===u)return p-this.zero;return-1},a.prototype.readAndCheckSignature=function(o){var l=o.charCodeAt(0),c=o.charCodeAt(1),d=o.charCodeAt(2),u=o.charCodeAt(3),p=this.readData(4);return l===p[0]&&c===p[1]&&d===p[2]&&u===p[3]},a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},n.exports=a},{"../utils":32,"./DataReader":18}],18:[function(e,n,r){var s=e("../utils");function a(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var l,c=0;for(this.checkOffset(o),l=this.index+o-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=o,c},readString:function(o){return s.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},n.exports=a},{"../utils":32}],19:[function(e,n,r){var s=e("./Uint8ArrayReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},n.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,n,r){var s=e("./DataReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},a.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},a.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},n.exports=a},{"../utils":32,"./DataReader":18}],21:[function(e,n,r){var s=e("./ArrayReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},n.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(e,n,r){var s=e("../utils"),a=e("../support"),o=e("./ArrayReader"),l=e("./StringReader"),c=e("./NodeBufferReader"),d=e("./Uint8ArrayReader");n.exports=function(u){var p=s.getTypeOf(u);return s.checkSupport(p),p!=="string"||a.uint8array?p==="nodebuffer"?new c(u):a.uint8array?new d(s.transformTo("uint8array",u)):new o(s.transformTo("array",u)):new l(u)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,n,r){var s=e("./GenericWorker"),a=e("../utils");function o(l){s.call(this,"ConvertWorker to "+l),this.destType=l}a.inherits(o,s),o.prototype.processChunk=function(l){this.push({data:a.transformTo(this.destType,l.data),meta:l.meta})},n.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(e,n,r){var s=e("./GenericWorker"),a=e("../crc32");function o(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(o,s),o.prototype.processChunk=function(l){this.streamInfo.crc32=a(l.data,this.streamInfo.crc32||0),this.push(l)},n.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,n,r){var s=e("../utils"),a=e("./GenericWorker");function o(l){a.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(o,a),o.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}a.prototype.processChunk.call(this,l)},n.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(e,n,r){var s=e("../utils"),a=e("./GenericWorker");function o(l){a.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(d){c.dataIsReady=!0,c.data=d,c.max=d&&d.length||0,c.type=s.getTypeOf(d),c.isPaused||c._tickAndRepeat()},function(d){c.error(d)})}s.inherits(o,a),o.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(e,n,r){function s(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,o){return this._listeners[a].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,o){if(this._listeners[a])for(var l=0;l<this._listeners[a].length;l++)this._listeners[a][l].call(this,o)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var o=this;return a.on("data",function(l){o.processChunk(l)}),a.on("end",function(){o.end()}),a.on("error",function(l){o.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,o){return this.extraStreamInfo[a]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},n.exports=s},{}],29:[function(e,n,r){var s=e("../utils"),a=e("./ConvertWorker"),o=e("./GenericWorker"),l=e("../base64"),c=e("../support"),d=e("../external"),u=null;if(c.nodestream)try{u=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function p(g,_){return new d.Promise(function(m,h){var x=[],M=g._internalType,S=g._outputType,R=g._mimeType;g.on("data",function(L,P){x.push(L),_&&_(P)}).on("error",function(L){x=[],h(L)}).on("end",function(){try{var L=function(P,N,E){switch(P){case"blob":return s.newBlob(s.transformTo("arraybuffer",N),E);case"base64":return l.encode(N);default:return s.transformTo(P,N)}}(S,function(P,N){var E,w=0,B=null,C=0;for(E=0;E<N.length;E++)C+=N[E].length;switch(P){case"string":return N.join("");case"array":return Array.prototype.concat.apply([],N);case"uint8array":for(B=new Uint8Array(C),E=0;E<N.length;E++)B.set(N[E],w),w+=N[E].length;return B;case"nodebuffer":return Buffer.concat(N);default:throw new Error("concat : unsupported type '"+P+"'")}}(M,x),R);m(L)}catch(P){h(P)}x=[]}).resume()})}function f(g,_,m){var h=_;switch(_){case"blob":case"arraybuffer":h="uint8array";break;case"base64":h="string"}try{this._internalType=h,this._outputType=_,this._mimeType=m,s.checkSupport(h),this._worker=g.pipe(new a(h)),g.lock()}catch(x){this._worker=new o("error"),this._worker.error(x)}}f.prototype={accumulate:function(g){return p(this,g)},on:function(g,_){var m=this;return g==="data"?this._worker.on(g,function(h){_.call(m,h.data,h.meta)}):this._worker.on(g,function(){s.delay(_,arguments,m)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new u(this,{objectMode:this._outputType!=="nodebuffer"},g)}},n.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(s),r.blob=a.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,n,r){for(var s=e("./utils"),a=e("./support"),o=e("./nodejsUtils"),l=e("./stream/GenericWorker"),c=new Array(256),d=0;d<256;d++)c[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;c[254]=c[254]=1;function u(){l.call(this,"utf-8 decode"),this.leftOver=null}function p(){l.call(this,"utf-8 encode")}r.utf8encode=function(f){return a.nodebuffer?o.newBufferFrom(f,"utf-8"):function(g){var _,m,h,x,M,S=g.length,R=0;for(x=0;x<S;x++)(64512&(m=g.charCodeAt(x)))==55296&&x+1<S&&(64512&(h=g.charCodeAt(x+1)))==56320&&(m=65536+(m-55296<<10)+(h-56320),x++),R+=m<128?1:m<2048?2:m<65536?3:4;for(_=a.uint8array?new Uint8Array(R):new Array(R),x=M=0;M<R;x++)(64512&(m=g.charCodeAt(x)))==55296&&x+1<S&&(64512&(h=g.charCodeAt(x+1)))==56320&&(m=65536+(m-55296<<10)+(h-56320),x++),m<128?_[M++]=m:(m<2048?_[M++]=192|m>>>6:(m<65536?_[M++]=224|m>>>12:(_[M++]=240|m>>>18,_[M++]=128|m>>>12&63),_[M++]=128|m>>>6&63),_[M++]=128|63&m);return _}(f)},r.utf8decode=function(f){return a.nodebuffer?s.transformTo("nodebuffer",f).toString("utf-8"):function(g){var _,m,h,x,M=g.length,S=new Array(2*M);for(_=m=0;_<M;)if((h=g[_++])<128)S[m++]=h;else if(4<(x=c[h]))S[m++]=65533,_+=x-1;else{for(h&=x===2?31:x===3?15:7;1<x&&_<M;)h=h<<6|63&g[_++],x--;1<x?S[m++]=65533:h<65536?S[m++]=h:(h-=65536,S[m++]=55296|h>>10&1023,S[m++]=56320|1023&h)}return S.length!==m&&(S.subarray?S=S.subarray(0,m):S.length=m),s.applyFromCharCode(S)}(f=s.transformTo(a.uint8array?"uint8array":"array",f))},s.inherits(u,l),u.prototype.processChunk=function(f){var g=s.transformTo(a.uint8array?"uint8array":"array",f.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var _=g;(g=new Uint8Array(_.length+this.leftOver.length)).set(this.leftOver,0),g.set(_,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var m=function(x,M){var S;for((M=M||x.length)>x.length&&(M=x.length),S=M-1;0<=S&&(192&x[S])==128;)S--;return S<0||S===0?M:S+c[x[S]]>M?S:M}(g),h=g;m!==g.length&&(a.uint8array?(h=g.subarray(0,m),this.leftOver=g.subarray(m,g.length)):(h=g.slice(0,m),this.leftOver=g.slice(m,g.length))),this.push({data:r.utf8decode(h),meta:f.meta})},u.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=u,s.inherits(p,l),p.prototype.processChunk=function(f){this.push({data:r.utf8encode(f.data),meta:f.meta})},r.Utf8EncodeWorker=p},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,n,r){var s=e("./support"),a=e("./base64"),o=e("./nodejsUtils"),l=e("./external");function c(_){return _}function d(_,m){for(var h=0;h<_.length;++h)m[h]=255&_.charCodeAt(h);return m}e("setimmediate"),r.newBlob=function(_,m){r.checkSupport("blob");try{return new Blob([_],{type:m})}catch{try{var h=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return h.append(_),h.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var u={stringifyByChunk:function(_,m,h){var x=[],M=0,S=_.length;if(S<=h)return String.fromCharCode.apply(null,_);for(;M<S;)m==="array"||m==="nodebuffer"?x.push(String.fromCharCode.apply(null,_.slice(M,Math.min(M+h,S)))):x.push(String.fromCharCode.apply(null,_.subarray(M,Math.min(M+h,S)))),M+=h;return x.join("")},stringifyByChar:function(_){for(var m="",h=0;h<_.length;h++)m+=String.fromCharCode(_[h]);return m},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}}()}};function p(_){var m=65536,h=r.getTypeOf(_),x=!0;if(h==="uint8array"?x=u.applyCanBeUsed.uint8array:h==="nodebuffer"&&(x=u.applyCanBeUsed.nodebuffer),x)for(;1<m;)try{return u.stringifyByChunk(_,h,m)}catch{m=Math.floor(m/2)}return u.stringifyByChar(_)}function f(_,m){for(var h=0;h<_.length;h++)m[h]=_[h];return m}r.applyFromCharCode=p;var g={};g.string={string:c,array:function(_){return d(_,new Array(_.length))},arraybuffer:function(_){return g.string.uint8array(_).buffer},uint8array:function(_){return d(_,new Uint8Array(_.length))},nodebuffer:function(_){return d(_,o.allocBuffer(_.length))}},g.array={string:p,array:c,arraybuffer:function(_){return new Uint8Array(_).buffer},uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return o.newBufferFrom(_)}},g.arraybuffer={string:function(_){return p(new Uint8Array(_))},array:function(_){return f(new Uint8Array(_),new Array(_.byteLength))},arraybuffer:c,uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return o.newBufferFrom(new Uint8Array(_))}},g.uint8array={string:p,array:function(_){return f(_,new Array(_.length))},arraybuffer:function(_){return _.buffer},uint8array:c,nodebuffer:function(_){return o.newBufferFrom(_)}},g.nodebuffer={string:p,array:function(_){return f(_,new Array(_.length))},arraybuffer:function(_){return g.nodebuffer.uint8array(_).buffer},uint8array:function(_){return f(_,new Uint8Array(_.length))},nodebuffer:c},r.transformTo=function(_,m){if(m=m||"",!_)return m;r.checkSupport(_);var h=r.getTypeOf(m);return g[h][_](m)},r.resolve=function(_){for(var m=_.split("/"),h=[],x=0;x<m.length;x++){var M=m[x];M==="."||M===""&&x!==0&&x!==m.length-1||(M===".."?h.pop():h.push(M))}return h.join("/")},r.getTypeOf=function(_){return typeof _=="string"?"string":Object.prototype.toString.call(_)==="[object Array]"?"array":s.nodebuffer&&o.isBuffer(_)?"nodebuffer":s.uint8array&&_ instanceof Uint8Array?"uint8array":s.arraybuffer&&_ instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(_){if(!s[_.toLowerCase()])throw new Error(_+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(_){var m,h,x="";for(h=0;h<(_||"").length;h++)x+="\\x"+((m=_.charCodeAt(h))<16?"0":"")+m.toString(16).toUpperCase();return x},r.delay=function(_,m,h){setImmediate(function(){_.apply(h||null,m||[])})},r.inherits=function(_,m){function h(){}h.prototype=m.prototype,_.prototype=new h},r.extend=function(){var _,m,h={};for(_=0;_<arguments.length;_++)for(m in arguments[_])Object.prototype.hasOwnProperty.call(arguments[_],m)&&h[m]===void 0&&(h[m]=arguments[_][m]);return h},r.prepareContent=function(_,m,h,x,M){return l.Promise.resolve(m).then(function(S){return s.blob&&(S instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(S))!==-1)&&typeof FileReader<"u"?new l.Promise(function(R,L){var P=new FileReader;P.onload=function(N){R(N.target.result)},P.onerror=function(N){L(N.target.error)},P.readAsArrayBuffer(S)}):S}).then(function(S){var R=r.getTypeOf(S);return R?(R==="arraybuffer"?S=r.transformTo("uint8array",S):R==="string"&&(M?S=a.decode(S):h&&x!==!0&&(S=function(L){return d(L,s.uint8array?new Uint8Array(L.length):new Array(L.length))}(S))),S):l.Promise.reject(new Error("Can't read the data of '"+_+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,n,r){var s=e("./reader/readerFor"),a=e("./utils"),o=e("./signature"),l=e("./zipEntry"),c=e("./support");function d(u){this.files=[],this.loadOptions=u}d.prototype={checkSignature:function(u){if(!this.reader.readAndCheckSignature(u)){this.reader.index-=4;var p=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(p)+", expected "+a.pretty(u)+")")}},isSignature:function(u,p){var f=this.reader.index;this.reader.setIndex(u);var g=this.reader.readString(4)===p;return this.reader.setIndex(f),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var u=this.reader.readData(this.zipCommentLength),p=c.uint8array?"uint8array":"array",f=a.transformTo(p,u);this.zipComment=this.loadOptions.decodeFileName(f)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var u,p,f,g=this.zip64EndOfCentralSize-44;0<g;)u=this.reader.readInt(2),p=this.reader.readInt(4),f=this.reader.readData(p),this.zip64ExtensibleData[u]={id:u,length:p,value:f}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var u,p;for(u=0;u<this.files.length;u++)p=this.files[u],this.reader.setIndex(p.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),p.readLocalPart(this.reader),p.handleUTF8(),p.processAttributes()},readCentralDir:function(){var u;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(u=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(u);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var u=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(u<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(u);var p=u;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(u=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(u),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var f=this.centralDirOffset+this.centralDirSize;this.zip64&&(f+=20,f+=12+this.zip64EndOfCentralSize);var g=p-f;if(0<g)this.isSignature(p,o.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(u){this.reader=s(u)},load:function(u){this.prepareReader(u),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=d},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,n,r){var s=e("./reader/readerFor"),a=e("./utils"),o=e("./compressedObject"),l=e("./crc32"),c=e("./utf8"),d=e("./compressions"),u=e("./support");function p(f,g){this.options=f,this.loadOptions=g}p.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(f){var g,_;if(f.skip(22),this.fileNameLength=f.readInt(2),_=f.readInt(2),this.fileName=f.readData(this.fileNameLength),f.skip(_),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=function(m){for(var h in d)if(Object.prototype.hasOwnProperty.call(d,h)&&d[h].magic===m)return d[h];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,g,f.readData(this.compressedSize))},readCentralPart:function(f){this.versionMadeBy=f.readInt(2),f.skip(2),this.bitFlag=f.readInt(2),this.compressionMethod=f.readString(2),this.date=f.readDate(),this.crc32=f.readInt(4),this.compressedSize=f.readInt(4),this.uncompressedSize=f.readInt(4);var g=f.readInt(2);if(this.extraFieldsLength=f.readInt(2),this.fileCommentLength=f.readInt(2),this.diskNumberStart=f.readInt(2),this.internalFileAttributes=f.readInt(2),this.externalFileAttributes=f.readInt(4),this.localHeaderOffset=f.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");f.skip(g),this.readExtraFields(f),this.parseZIP64ExtraField(f),this.fileComment=f.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var f=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),f==0&&(this.dosPermissions=63&this.externalFileAttributes),f==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var f=s(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=f.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=f.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=f.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=f.readInt(4))}},readExtraFields:function(f){var g,_,m,h=f.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});f.index+4<h;)g=f.readInt(2),_=f.readInt(2),m=f.readData(_),this.extraFields[g]={id:g,length:_,value:m};f.setIndex(h)},handleUTF8:function(){var f=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var _=a.transformTo(f,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(_)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var h=a.transformTo(f,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(h)}}},findExtraFieldUnicodePath:function(){var f=this.extraFields[28789];if(f){var g=s(f.value);return g.readInt(1)!==1||l(this.fileName)!==g.readInt(4)?null:c.utf8decode(g.readData(f.length-5))}return null},findExtraFieldUnicodeComment:function(){var f=this.extraFields[25461];if(f){var g=s(f.value);return g.readInt(1)!==1||l(this.fileComment)!==g.readInt(4)?null:c.utf8decode(g.readData(f.length-5))}return null}},n.exports=p},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,n,r){function s(g,_,m){this.name=g,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=_,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var a=e("./stream/StreamHelper"),o=e("./stream/DataWorker"),l=e("./utf8"),c=e("./compressedObject"),d=e("./stream/GenericWorker");s.prototype={internalStream:function(g){var _=null,m="string";try{if(!g)throw new Error("No output type specified.");var h=(m=g.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),_=this._decompressWorker();var x=!this._dataBinary;x&&!h&&(_=_.pipe(new l.Utf8EncodeWorker)),!x&&h&&(_=_.pipe(new l.Utf8DecodeWorker))}catch(M){(_=new d("error")).error(M)}return new a(_,m,"")},async:function(g,_){return this.internalStream(g).accumulate(_)},nodeStream:function(g,_){return this.internalStream(g||"nodebuffer").toNodejsStream(_)},_compressWorker:function(g,_){if(this._data instanceof c&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(m,g,_)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof d?this._data:new o(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],p=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<u.length;f++)s.prototype[u[f]]=p;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,n,r){(function(s){var a,o,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,d=new l(g),u=s.document.createTextNode("");d.observe(u,{characterData:!0}),a=function(){u.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)a="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var _=s.document.createElement("script");_.onreadystatechange=function(){g(),_.onreadystatechange=null,_.parentNode.removeChild(_),_=null},s.document.documentElement.appendChild(_)}:function(){setTimeout(g,0)};else{var p=new s.MessageChannel;p.port1.onmessage=g,a=function(){p.port2.postMessage(0)}}var f=[];function g(){var _,m;o=!0;for(var h=f.length;h;){for(m=f,f=[],_=-1;++_<h;)m[_]();h=f.length}o=!1}n.exports=function(_){f.push(_)!==1||o||a()}}).call(this,typeof Bs<"u"?Bs:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,n,r){var s=e("immediate");function a(){}var o={},l=["REJECTED"],c=["FULFILLED"],d=["PENDING"];function u(h){if(typeof h!="function")throw new TypeError("resolver must be a function");this.state=d,this.queue=[],this.outcome=void 0,h!==a&&_(this,h)}function p(h,x,M){this.promise=h,typeof x=="function"&&(this.onFulfilled=x,this.callFulfilled=this.otherCallFulfilled),typeof M=="function"&&(this.onRejected=M,this.callRejected=this.otherCallRejected)}function f(h,x,M){s(function(){var S;try{S=x(M)}catch(R){return o.reject(h,R)}S===h?o.reject(h,new TypeError("Cannot resolve promise with itself")):o.resolve(h,S)})}function g(h){var x=h&&h.then;if(h&&(typeof h=="object"||typeof h=="function")&&typeof x=="function")return function(){x.apply(h,arguments)}}function _(h,x){var M=!1;function S(P){M||(M=!0,o.reject(h,P))}function R(P){M||(M=!0,o.resolve(h,P))}var L=m(function(){x(R,S)});L.status==="error"&&S(L.value)}function m(h,x){var M={};try{M.value=h(x),M.status="success"}catch(S){M.status="error",M.value=S}return M}(n.exports=u).prototype.finally=function(h){if(typeof h!="function")return this;var x=this.constructor;return this.then(function(M){return x.resolve(h()).then(function(){return M})},function(M){return x.resolve(h()).then(function(){throw M})})},u.prototype.catch=function(h){return this.then(null,h)},u.prototype.then=function(h,x){if(typeof h!="function"&&this.state===c||typeof x!="function"&&this.state===l)return this;var M=new this.constructor(a);return this.state!==d?f(M,this.state===c?h:x,this.outcome):this.queue.push(new p(M,h,x)),M},p.prototype.callFulfilled=function(h){o.resolve(this.promise,h)},p.prototype.otherCallFulfilled=function(h){f(this.promise,this.onFulfilled,h)},p.prototype.callRejected=function(h){o.reject(this.promise,h)},p.prototype.otherCallRejected=function(h){f(this.promise,this.onRejected,h)},o.resolve=function(h,x){var M=m(g,x);if(M.status==="error")return o.reject(h,M.value);var S=M.value;if(S)_(h,S);else{h.state=c,h.outcome=x;for(var R=-1,L=h.queue.length;++R<L;)h.queue[R].callFulfilled(x)}return h},o.reject=function(h,x){h.state=l,h.outcome=x;for(var M=-1,S=h.queue.length;++M<S;)h.queue[M].callRejected(x);return h},u.resolve=function(h){return h instanceof this?h:o.resolve(new this(a),h)},u.reject=function(h){var x=new this(a);return o.reject(x,h)},u.all=function(h){var x=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var M=h.length,S=!1;if(!M)return this.resolve([]);for(var R=new Array(M),L=0,P=-1,N=new this(a);++P<M;)E(h[P],P);return N;function E(w,B){x.resolve(w).then(function(C){R[B]=C,++L!==M||S||(S=!0,o.resolve(N,R))},function(C){S||(S=!0,o.reject(N,C))})}},u.race=function(h){var x=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var M=h.length,S=!1;if(!M)return this.resolve([]);for(var R=-1,L=new this(a);++R<M;)P=h[R],x.resolve(P).then(function(N){S||(S=!0,o.resolve(L,N))},function(N){S||(S=!0,o.reject(L,N))});var P;return L}},{immediate:36}],38:[function(e,n,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,n,r){var s=e("./zlib/deflate"),a=e("./utils/common"),o=e("./utils/strings"),l=e("./zlib/messages"),c=e("./zlib/zstream"),d=Object.prototype.toString,u=0,p=-1,f=0,g=8;function _(h){if(!(this instanceof _))return new _(h);this.options=a.assign({level:p,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:f,to:""},h||{});var x=this.options;x.raw&&0<x.windowBits?x.windowBits=-x.windowBits:x.gzip&&0<x.windowBits&&x.windowBits<16&&(x.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var M=s.deflateInit2(this.strm,x.level,x.method,x.windowBits,x.memLevel,x.strategy);if(M!==u)throw new Error(l[M]);if(x.header&&s.deflateSetHeader(this.strm,x.header),x.dictionary){var S;if(S=typeof x.dictionary=="string"?o.string2buf(x.dictionary):d.call(x.dictionary)==="[object ArrayBuffer]"?new Uint8Array(x.dictionary):x.dictionary,(M=s.deflateSetDictionary(this.strm,S))!==u)throw new Error(l[M]);this._dict_set=!0}}function m(h,x){var M=new _(x);if(M.push(h,!0),M.err)throw M.msg||l[M.err];return M.result}_.prototype.push=function(h,x){var M,S,R=this.strm,L=this.options.chunkSize;if(this.ended)return!1;S=x===~~x?x:x===!0?4:0,typeof h=="string"?R.input=o.string2buf(h):d.call(h)==="[object ArrayBuffer]"?R.input=new Uint8Array(h):R.input=h,R.next_in=0,R.avail_in=R.input.length;do{if(R.avail_out===0&&(R.output=new a.Buf8(L),R.next_out=0,R.avail_out=L),(M=s.deflate(R,S))!==1&&M!==u)return this.onEnd(M),!(this.ended=!0);R.avail_out!==0&&(R.avail_in!==0||S!==4&&S!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(a.shrinkBuf(R.output,R.next_out))):this.onData(a.shrinkBuf(R.output,R.next_out)))}while((0<R.avail_in||R.avail_out===0)&&M!==1);return S===4?(M=s.deflateEnd(this.strm),this.onEnd(M),this.ended=!0,M===u):S!==2||(this.onEnd(u),!(R.avail_out=0))},_.prototype.onData=function(h){this.chunks.push(h)},_.prototype.onEnd=function(h){h===u&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},r.Deflate=_,r.deflate=m,r.deflateRaw=function(h,x){return(x=x||{}).raw=!0,m(h,x)},r.gzip=function(h,x){return(x=x||{}).gzip=!0,m(h,x)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,n,r){var s=e("./zlib/inflate"),a=e("./utils/common"),o=e("./utils/strings"),l=e("./zlib/constants"),c=e("./zlib/messages"),d=e("./zlib/zstream"),u=e("./zlib/gzheader"),p=Object.prototype.toString;function f(_){if(!(this instanceof f))return new f(_);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},_||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||_&&_.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&!(15&m.windowBits)&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var h=s.inflateInit2(this.strm,m.windowBits);if(h!==l.Z_OK)throw new Error(c[h]);this.header=new u,s.inflateGetHeader(this.strm,this.header)}function g(_,m){var h=new f(m);if(h.push(_,!0),h.err)throw h.msg||c[h.err];return h.result}f.prototype.push=function(_,m){var h,x,M,S,R,L,P=this.strm,N=this.options.chunkSize,E=this.options.dictionary,w=!1;if(this.ended)return!1;x=m===~~m?m:m===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof _=="string"?P.input=o.binstring2buf(_):p.call(_)==="[object ArrayBuffer]"?P.input=new Uint8Array(_):P.input=_,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new a.Buf8(N),P.next_out=0,P.avail_out=N),(h=s.inflate(P,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&E&&(L=typeof E=="string"?o.string2buf(E):p.call(E)==="[object ArrayBuffer]"?new Uint8Array(E):E,h=s.inflateSetDictionary(this.strm,L)),h===l.Z_BUF_ERROR&&w===!0&&(h=l.Z_OK,w=!1),h!==l.Z_STREAM_END&&h!==l.Z_OK)return this.onEnd(h),!(this.ended=!0);P.next_out&&(P.avail_out!==0&&h!==l.Z_STREAM_END&&(P.avail_in!==0||x!==l.Z_FINISH&&x!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(M=o.utf8border(P.output,P.next_out),S=P.next_out-M,R=o.buf2string(P.output,M),P.next_out=S,P.avail_out=N-S,S&&a.arraySet(P.output,P.output,M,S,0),this.onData(R)):this.onData(a.shrinkBuf(P.output,P.next_out)))),P.avail_in===0&&P.avail_out===0&&(w=!0)}while((0<P.avail_in||P.avail_out===0)&&h!==l.Z_STREAM_END);return h===l.Z_STREAM_END&&(x=l.Z_FINISH),x===l.Z_FINISH?(h=s.inflateEnd(this.strm),this.onEnd(h),this.ended=!0,h===l.Z_OK):x!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(P.avail_out=0))},f.prototype.onData=function(_){this.chunks.push(_)},f.prototype.onEnd=function(_){_===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=_,this.msg=this.strm.msg},r.Inflate=f,r.inflate=g,r.inflateRaw=function(_,m){return(m=m||{}).raw=!0,g(_,m)},r.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var d=c.shift();if(d){if(typeof d!="object")throw new TypeError(d+"must be non-object");for(var u in d)d.hasOwnProperty(u)&&(l[u]=d[u])}}return l},r.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var a={arraySet:function(l,c,d,u,p){if(c.subarray&&l.subarray)l.set(c.subarray(d,d+u),p);else for(var f=0;f<u;f++)l[p+f]=c[d+f]},flattenChunks:function(l){var c,d,u,p,f,g;for(c=u=0,d=l.length;c<d;c++)u+=l[c].length;for(g=new Uint8Array(u),c=p=0,d=l.length;c<d;c++)f=l[c],g.set(f,p),p+=f.length;return g}},o={arraySet:function(l,c,d,u,p){for(var f=0;f<u;f++)l[p+f]=c[d+f]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,a)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,o))},r.setTyped(s)},{}],42:[function(e,n,r){var s=e("./common"),a=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function d(u,p){if(p<65537&&(u.subarray&&o||!u.subarray&&a))return String.fromCharCode.apply(null,s.shrinkBuf(u,p));for(var f="",g=0;g<p;g++)f+=String.fromCharCode(u[g]);return f}l[254]=l[254]=1,r.string2buf=function(u){var p,f,g,_,m,h=u.length,x=0;for(_=0;_<h;_++)(64512&(f=u.charCodeAt(_)))==55296&&_+1<h&&(64512&(g=u.charCodeAt(_+1)))==56320&&(f=65536+(f-55296<<10)+(g-56320),_++),x+=f<128?1:f<2048?2:f<65536?3:4;for(p=new s.Buf8(x),_=m=0;m<x;_++)(64512&(f=u.charCodeAt(_)))==55296&&_+1<h&&(64512&(g=u.charCodeAt(_+1)))==56320&&(f=65536+(f-55296<<10)+(g-56320),_++),f<128?p[m++]=f:(f<2048?p[m++]=192|f>>>6:(f<65536?p[m++]=224|f>>>12:(p[m++]=240|f>>>18,p[m++]=128|f>>>12&63),p[m++]=128|f>>>6&63),p[m++]=128|63&f);return p},r.buf2binstring=function(u){return d(u,u.length)},r.binstring2buf=function(u){for(var p=new s.Buf8(u.length),f=0,g=p.length;f<g;f++)p[f]=u.charCodeAt(f);return p},r.buf2string=function(u,p){var f,g,_,m,h=p||u.length,x=new Array(2*h);for(f=g=0;f<h;)if((_=u[f++])<128)x[g++]=_;else if(4<(m=l[_]))x[g++]=65533,f+=m-1;else{for(_&=m===2?31:m===3?15:7;1<m&&f<h;)_=_<<6|63&u[f++],m--;1<m?x[g++]=65533:_<65536?x[g++]=_:(_-=65536,x[g++]=55296|_>>10&1023,x[g++]=56320|1023&_)}return d(x,g)},r.utf8border=function(u,p){var f;for((p=p||u.length)>u.length&&(p=u.length),f=p-1;0<=f&&(192&u[f])==128;)f--;return f<0||f===0?p:f+l[u[f]]>p?f:p}},{"./common":41}],43:[function(e,n,r){n.exports=function(s,a,o,l){for(var c=65535&s|0,d=s>>>16&65535|0,u=0;o!==0;){for(o-=u=2e3<o?2e3:o;d=d+(c=c+a[l++]|0)|0,--u;);c%=65521,d%=65521}return c|d<<16|0}},{}],44:[function(e,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,n,r){var s=function(){for(var a,o=[],l=0;l<256;l++){a=l;for(var c=0;c<8;c++)a=1&a?3988292384^a>>>1:a>>>1;o[l]=a}return o}();n.exports=function(a,o,l,c){var d=s,u=c+l;a^=-1;for(var p=c;p<u;p++)a=a>>>8^d[255&(a^o[p])];return-1^a}},{}],46:[function(e,n,r){var s,a=e("../utils/common"),o=e("./trees"),l=e("./adler32"),c=e("./crc32"),d=e("./messages"),u=0,p=4,f=0,g=-2,_=-1,m=4,h=2,x=8,M=9,S=286,R=30,L=19,P=2*S+1,N=15,E=3,w=258,B=w+E+1,C=42,z=113,y=1,V=2,W=3,q=4;function J(v,_t){return v.msg=d[_t],_t}function Q(v){return(v<<1)-(4<v?9:0)}function pt(v){for(var _t=v.length;0<=--_t;)v[_t]=0}function j(v){var _t=v.state,st=_t.pending;st>v.avail_out&&(st=v.avail_out),st!==0&&(a.arraySet(v.output,_t.pending_buf,_t.pending_out,st,v.next_out),v.next_out+=st,_t.pending_out+=st,v.total_out+=st,v.avail_out-=st,_t.pending-=st,_t.pending===0&&(_t.pending_out=0))}function Z(v,_t){o._tr_flush_block(v,0<=v.block_start?v.block_start:-1,v.strstart-v.block_start,_t),v.block_start=v.strstart,j(v.strm)}function vt(v,_t){v.pending_buf[v.pending++]=_t}function X(v,_t){v.pending_buf[v.pending++]=_t>>>8&255,v.pending_buf[v.pending++]=255&_t}function Y(v,_t){var st,H,F=v.max_chain_length,$=v.strstart,ot=v.prev_length,D=v.nice_match,b=v.strstart>v.w_size-B?v.strstart-(v.w_size-B):0,G=v.window,rt=v.w_mask,nt=v.prev,at=v.strstart+w,At=G[$+ot-1],St=G[$+ot];v.prev_length>=v.good_match&&(F>>=2),D>v.lookahead&&(D=v.lookahead);do if(G[(st=_t)+ot]===St&&G[st+ot-1]===At&&G[st]===G[$]&&G[++st]===G[$+1]){$+=2,st++;do;while(G[++$]===G[++st]&&G[++$]===G[++st]&&G[++$]===G[++st]&&G[++$]===G[++st]&&G[++$]===G[++st]&&G[++$]===G[++st]&&G[++$]===G[++st]&&G[++$]===G[++st]&&$<at);if(H=w-(at-$),$=at-w,ot<H){if(v.match_start=_t,D<=(ot=H))break;At=G[$+ot-1],St=G[$+ot]}}while((_t=nt[_t&rt])>b&&--F!=0);return ot<=v.lookahead?ot:v.lookahead}function ct(v){var _t,st,H,F,$,ot,D,b,G,rt,nt=v.w_size;do{if(F=v.window_size-v.lookahead-v.strstart,v.strstart>=nt+(nt-B)){for(a.arraySet(v.window,v.window,nt,nt,0),v.match_start-=nt,v.strstart-=nt,v.block_start-=nt,_t=st=v.hash_size;H=v.head[--_t],v.head[_t]=nt<=H?H-nt:0,--st;);for(_t=st=nt;H=v.prev[--_t],v.prev[_t]=nt<=H?H-nt:0,--st;);F+=nt}if(v.strm.avail_in===0)break;if(ot=v.strm,D=v.window,b=v.strstart+v.lookahead,G=F,rt=void 0,rt=ot.avail_in,G<rt&&(rt=G),st=rt===0?0:(ot.avail_in-=rt,a.arraySet(D,ot.input,ot.next_in,rt,b),ot.state.wrap===1?ot.adler=l(ot.adler,D,rt,b):ot.state.wrap===2&&(ot.adler=c(ot.adler,D,rt,b)),ot.next_in+=rt,ot.total_in+=rt,rt),v.lookahead+=st,v.lookahead+v.insert>=E)for($=v.strstart-v.insert,v.ins_h=v.window[$],v.ins_h=(v.ins_h<<v.hash_shift^v.window[$+1])&v.hash_mask;v.insert&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[$+E-1])&v.hash_mask,v.prev[$&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=$,$++,v.insert--,!(v.lookahead+v.insert<E)););}while(v.lookahead<B&&v.strm.avail_in!==0)}function ft(v,_t){for(var st,H;;){if(v.lookahead<B){if(ct(v),v.lookahead<B&&_t===u)return y;if(v.lookahead===0)break}if(st=0,v.lookahead>=E&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+E-1])&v.hash_mask,st=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),st!==0&&v.strstart-st<=v.w_size-B&&(v.match_length=Y(v,st)),v.match_length>=E)if(H=o._tr_tally(v,v.strstart-v.match_start,v.match_length-E),v.lookahead-=v.match_length,v.match_length<=v.max_lazy_match&&v.lookahead>=E){for(v.match_length--;v.strstart++,v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+E-1])&v.hash_mask,st=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart,--v.match_length!=0;);v.strstart++}else v.strstart+=v.match_length,v.match_length=0,v.ins_h=v.window[v.strstart],v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+1])&v.hash_mask;else H=o._tr_tally(v,0,v.window[v.strstart]),v.lookahead--,v.strstart++;if(H&&(Z(v,!1),v.strm.avail_out===0))return y}return v.insert=v.strstart<E-1?v.strstart:E-1,_t===p?(Z(v,!0),v.strm.avail_out===0?W:q):v.last_lit&&(Z(v,!1),v.strm.avail_out===0)?y:V}function yt(v,_t){for(var st,H,F;;){if(v.lookahead<B){if(ct(v),v.lookahead<B&&_t===u)return y;if(v.lookahead===0)break}if(st=0,v.lookahead>=E&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+E-1])&v.hash_mask,st=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),v.prev_length=v.match_length,v.prev_match=v.match_start,v.match_length=E-1,st!==0&&v.prev_length<v.max_lazy_match&&v.strstart-st<=v.w_size-B&&(v.match_length=Y(v,st),v.match_length<=5&&(v.strategy===1||v.match_length===E&&4096<v.strstart-v.match_start)&&(v.match_length=E-1)),v.prev_length>=E&&v.match_length<=v.prev_length){for(F=v.strstart+v.lookahead-E,H=o._tr_tally(v,v.strstart-1-v.prev_match,v.prev_length-E),v.lookahead-=v.prev_length-1,v.prev_length-=2;++v.strstart<=F&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+E-1])&v.hash_mask,st=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),--v.prev_length!=0;);if(v.match_available=0,v.match_length=E-1,v.strstart++,H&&(Z(v,!1),v.strm.avail_out===0))return y}else if(v.match_available){if((H=o._tr_tally(v,0,v.window[v.strstart-1]))&&Z(v,!1),v.strstart++,v.lookahead--,v.strm.avail_out===0)return y}else v.match_available=1,v.strstart++,v.lookahead--}return v.match_available&&(H=o._tr_tally(v,0,v.window[v.strstart-1]),v.match_available=0),v.insert=v.strstart<E-1?v.strstart:E-1,_t===p?(Z(v,!0),v.strm.avail_out===0?W:q):v.last_lit&&(Z(v,!1),v.strm.avail_out===0)?y:V}function Tt(v,_t,st,H,F){this.good_length=v,this.max_lazy=_t,this.nice_length=st,this.max_chain=H,this.func=F}function zt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=x,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*P),this.dyn_dtree=new a.Buf16(2*(2*R+1)),this.bl_tree=new a.Buf16(2*(2*L+1)),pt(this.dyn_ltree),pt(this.dyn_dtree),pt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(N+1),this.heap=new a.Buf16(2*S+1),pt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*S+1),pt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Jt(v){var _t;return v&&v.state?(v.total_in=v.total_out=0,v.data_type=h,(_t=v.state).pending=0,_t.pending_out=0,_t.wrap<0&&(_t.wrap=-_t.wrap),_t.status=_t.wrap?C:z,v.adler=_t.wrap===2?0:1,_t.last_flush=u,o._tr_init(_t),f):J(v,g)}function te(v){var _t=Jt(v);return _t===f&&function(st){st.window_size=2*st.w_size,pt(st.head),st.max_lazy_match=s[st.level].max_lazy,st.good_match=s[st.level].good_length,st.nice_match=s[st.level].nice_length,st.max_chain_length=s[st.level].max_chain,st.strstart=0,st.block_start=0,st.lookahead=0,st.insert=0,st.match_length=st.prev_length=E-1,st.match_available=0,st.ins_h=0}(v.state),_t}function me(v,_t,st,H,F,$){if(!v)return g;var ot=1;if(_t===_&&(_t=6),H<0?(ot=0,H=-H):15<H&&(ot=2,H-=16),F<1||M<F||st!==x||H<8||15<H||_t<0||9<_t||$<0||m<$)return J(v,g);H===8&&(H=9);var D=new zt;return(v.state=D).strm=v,D.wrap=ot,D.gzhead=null,D.w_bits=H,D.w_size=1<<D.w_bits,D.w_mask=D.w_size-1,D.hash_bits=F+7,D.hash_size=1<<D.hash_bits,D.hash_mask=D.hash_size-1,D.hash_shift=~~((D.hash_bits+E-1)/E),D.window=new a.Buf8(2*D.w_size),D.head=new a.Buf16(D.hash_size),D.prev=new a.Buf16(D.w_size),D.lit_bufsize=1<<F+6,D.pending_buf_size=4*D.lit_bufsize,D.pending_buf=new a.Buf8(D.pending_buf_size),D.d_buf=1*D.lit_bufsize,D.l_buf=3*D.lit_bufsize,D.level=_t,D.strategy=$,D.method=st,te(v)}s=[new Tt(0,0,0,0,function(v,_t){var st=65535;for(st>v.pending_buf_size-5&&(st=v.pending_buf_size-5);;){if(v.lookahead<=1){if(ct(v),v.lookahead===0&&_t===u)return y;if(v.lookahead===0)break}v.strstart+=v.lookahead,v.lookahead=0;var H=v.block_start+st;if((v.strstart===0||v.strstart>=H)&&(v.lookahead=v.strstart-H,v.strstart=H,Z(v,!1),v.strm.avail_out===0)||v.strstart-v.block_start>=v.w_size-B&&(Z(v,!1),v.strm.avail_out===0))return y}return v.insert=0,_t===p?(Z(v,!0),v.strm.avail_out===0?W:q):(v.strstart>v.block_start&&(Z(v,!1),v.strm.avail_out),y)}),new Tt(4,4,8,4,ft),new Tt(4,5,16,8,ft),new Tt(4,6,32,32,ft),new Tt(4,4,16,16,yt),new Tt(8,16,32,32,yt),new Tt(8,16,128,128,yt),new Tt(8,32,128,256,yt),new Tt(32,128,258,1024,yt),new Tt(32,258,258,4096,yt)],r.deflateInit=function(v,_t){return me(v,_t,x,15,8,0)},r.deflateInit2=me,r.deflateReset=te,r.deflateResetKeep=Jt,r.deflateSetHeader=function(v,_t){return v&&v.state?v.state.wrap!==2?g:(v.state.gzhead=_t,f):g},r.deflate=function(v,_t){var st,H,F,$;if(!v||!v.state||5<_t||_t<0)return v?J(v,g):g;if(H=v.state,!v.output||!v.input&&v.avail_in!==0||H.status===666&&_t!==p)return J(v,v.avail_out===0?-5:g);if(H.strm=v,st=H.last_flush,H.last_flush=_t,H.status===C)if(H.wrap===2)v.adler=0,vt(H,31),vt(H,139),vt(H,8),H.gzhead?(vt(H,(H.gzhead.text?1:0)+(H.gzhead.hcrc?2:0)+(H.gzhead.extra?4:0)+(H.gzhead.name?8:0)+(H.gzhead.comment?16:0)),vt(H,255&H.gzhead.time),vt(H,H.gzhead.time>>8&255),vt(H,H.gzhead.time>>16&255),vt(H,H.gzhead.time>>24&255),vt(H,H.level===9?2:2<=H.strategy||H.level<2?4:0),vt(H,255&H.gzhead.os),H.gzhead.extra&&H.gzhead.extra.length&&(vt(H,255&H.gzhead.extra.length),vt(H,H.gzhead.extra.length>>8&255)),H.gzhead.hcrc&&(v.adler=c(v.adler,H.pending_buf,H.pending,0)),H.gzindex=0,H.status=69):(vt(H,0),vt(H,0),vt(H,0),vt(H,0),vt(H,0),vt(H,H.level===9?2:2<=H.strategy||H.level<2?4:0),vt(H,3),H.status=z);else{var ot=x+(H.w_bits-8<<4)<<8;ot|=(2<=H.strategy||H.level<2?0:H.level<6?1:H.level===6?2:3)<<6,H.strstart!==0&&(ot|=32),ot+=31-ot%31,H.status=z,X(H,ot),H.strstart!==0&&(X(H,v.adler>>>16),X(H,65535&v.adler)),v.adler=1}if(H.status===69)if(H.gzhead.extra){for(F=H.pending;H.gzindex<(65535&H.gzhead.extra.length)&&(H.pending!==H.pending_buf_size||(H.gzhead.hcrc&&H.pending>F&&(v.adler=c(v.adler,H.pending_buf,H.pending-F,F)),j(v),F=H.pending,H.pending!==H.pending_buf_size));)vt(H,255&H.gzhead.extra[H.gzindex]),H.gzindex++;H.gzhead.hcrc&&H.pending>F&&(v.adler=c(v.adler,H.pending_buf,H.pending-F,F)),H.gzindex===H.gzhead.extra.length&&(H.gzindex=0,H.status=73)}else H.status=73;if(H.status===73)if(H.gzhead.name){F=H.pending;do{if(H.pending===H.pending_buf_size&&(H.gzhead.hcrc&&H.pending>F&&(v.adler=c(v.adler,H.pending_buf,H.pending-F,F)),j(v),F=H.pending,H.pending===H.pending_buf_size)){$=1;break}$=H.gzindex<H.gzhead.name.length?255&H.gzhead.name.charCodeAt(H.gzindex++):0,vt(H,$)}while($!==0);H.gzhead.hcrc&&H.pending>F&&(v.adler=c(v.adler,H.pending_buf,H.pending-F,F)),$===0&&(H.gzindex=0,H.status=91)}else H.status=91;if(H.status===91)if(H.gzhead.comment){F=H.pending;do{if(H.pending===H.pending_buf_size&&(H.gzhead.hcrc&&H.pending>F&&(v.adler=c(v.adler,H.pending_buf,H.pending-F,F)),j(v),F=H.pending,H.pending===H.pending_buf_size)){$=1;break}$=H.gzindex<H.gzhead.comment.length?255&H.gzhead.comment.charCodeAt(H.gzindex++):0,vt(H,$)}while($!==0);H.gzhead.hcrc&&H.pending>F&&(v.adler=c(v.adler,H.pending_buf,H.pending-F,F)),$===0&&(H.status=103)}else H.status=103;if(H.status===103&&(H.gzhead.hcrc?(H.pending+2>H.pending_buf_size&&j(v),H.pending+2<=H.pending_buf_size&&(vt(H,255&v.adler),vt(H,v.adler>>8&255),v.adler=0,H.status=z)):H.status=z),H.pending!==0){if(j(v),v.avail_out===0)return H.last_flush=-1,f}else if(v.avail_in===0&&Q(_t)<=Q(st)&&_t!==p)return J(v,-5);if(H.status===666&&v.avail_in!==0)return J(v,-5);if(v.avail_in!==0||H.lookahead!==0||_t!==u&&H.status!==666){var D=H.strategy===2?function(b,G){for(var rt;;){if(b.lookahead===0&&(ct(b),b.lookahead===0)){if(G===u)return y;break}if(b.match_length=0,rt=o._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++,rt&&(Z(b,!1),b.strm.avail_out===0))return y}return b.insert=0,G===p?(Z(b,!0),b.strm.avail_out===0?W:q):b.last_lit&&(Z(b,!1),b.strm.avail_out===0)?y:V}(H,_t):H.strategy===3?function(b,G){for(var rt,nt,at,At,St=b.window;;){if(b.lookahead<=w){if(ct(b),b.lookahead<=w&&G===u)return y;if(b.lookahead===0)break}if(b.match_length=0,b.lookahead>=E&&0<b.strstart&&(nt=St[at=b.strstart-1])===St[++at]&&nt===St[++at]&&nt===St[++at]){At=b.strstart+w;do;while(nt===St[++at]&&nt===St[++at]&&nt===St[++at]&&nt===St[++at]&&nt===St[++at]&&nt===St[++at]&&nt===St[++at]&&nt===St[++at]&&at<At);b.match_length=w-(At-at),b.match_length>b.lookahead&&(b.match_length=b.lookahead)}if(b.match_length>=E?(rt=o._tr_tally(b,1,b.match_length-E),b.lookahead-=b.match_length,b.strstart+=b.match_length,b.match_length=0):(rt=o._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++),rt&&(Z(b,!1),b.strm.avail_out===0))return y}return b.insert=0,G===p?(Z(b,!0),b.strm.avail_out===0?W:q):b.last_lit&&(Z(b,!1),b.strm.avail_out===0)?y:V}(H,_t):s[H.level].func(H,_t);if(D!==W&&D!==q||(H.status=666),D===y||D===W)return v.avail_out===0&&(H.last_flush=-1),f;if(D===V&&(_t===1?o._tr_align(H):_t!==5&&(o._tr_stored_block(H,0,0,!1),_t===3&&(pt(H.head),H.lookahead===0&&(H.strstart=0,H.block_start=0,H.insert=0))),j(v),v.avail_out===0))return H.last_flush=-1,f}return _t!==p?f:H.wrap<=0?1:(H.wrap===2?(vt(H,255&v.adler),vt(H,v.adler>>8&255),vt(H,v.adler>>16&255),vt(H,v.adler>>24&255),vt(H,255&v.total_in),vt(H,v.total_in>>8&255),vt(H,v.total_in>>16&255),vt(H,v.total_in>>24&255)):(X(H,v.adler>>>16),X(H,65535&v.adler)),j(v),0<H.wrap&&(H.wrap=-H.wrap),H.pending!==0?f:1)},r.deflateEnd=function(v){var _t;return v&&v.state?(_t=v.state.status)!==C&&_t!==69&&_t!==73&&_t!==91&&_t!==103&&_t!==z&&_t!==666?J(v,g):(v.state=null,_t===z?J(v,-3):f):g},r.deflateSetDictionary=function(v,_t){var st,H,F,$,ot,D,b,G,rt=_t.length;if(!v||!v.state||($=(st=v.state).wrap)===2||$===1&&st.status!==C||st.lookahead)return g;for($===1&&(v.adler=l(v.adler,_t,rt,0)),st.wrap=0,rt>=st.w_size&&($===0&&(pt(st.head),st.strstart=0,st.block_start=0,st.insert=0),G=new a.Buf8(st.w_size),a.arraySet(G,_t,rt-st.w_size,st.w_size,0),_t=G,rt=st.w_size),ot=v.avail_in,D=v.next_in,b=v.input,v.avail_in=rt,v.next_in=0,v.input=_t,ct(st);st.lookahead>=E;){for(H=st.strstart,F=st.lookahead-(E-1);st.ins_h=(st.ins_h<<st.hash_shift^st.window[H+E-1])&st.hash_mask,st.prev[H&st.w_mask]=st.head[st.ins_h],st.head[st.ins_h]=H,H++,--F;);st.strstart=H,st.lookahead=E-1,ct(st)}return st.strstart+=st.lookahead,st.block_start=st.strstart,st.insert=st.lookahead,st.lookahead=0,st.match_length=st.prev_length=E-1,st.match_available=0,v.next_in=D,v.input=b,v.avail_in=ot,st.wrap=$,f},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,n,r){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,n,r){n.exports=function(s,a){var o,l,c,d,u,p,f,g,_,m,h,x,M,S,R,L,P,N,E,w,B,C,z,y,V;o=s.state,l=s.next_in,y=s.input,c=l+(s.avail_in-5),d=s.next_out,V=s.output,u=d-(a-s.avail_out),p=d+(s.avail_out-257),f=o.dmax,g=o.wsize,_=o.whave,m=o.wnext,h=o.window,x=o.hold,M=o.bits,S=o.lencode,R=o.distcode,L=(1<<o.lenbits)-1,P=(1<<o.distbits)-1;t:do{M<15&&(x+=y[l++]<<M,M+=8,x+=y[l++]<<M,M+=8),N=S[x&L];e:for(;;){if(x>>>=E=N>>>24,M-=E,(E=N>>>16&255)===0)V[d++]=65535&N;else{if(!(16&E)){if(!(64&E)){N=S[(65535&N)+(x&(1<<E)-1)];continue e}if(32&E){o.mode=12;break t}s.msg="invalid literal/length code",o.mode=30;break t}w=65535&N,(E&=15)&&(M<E&&(x+=y[l++]<<M,M+=8),w+=x&(1<<E)-1,x>>>=E,M-=E),M<15&&(x+=y[l++]<<M,M+=8,x+=y[l++]<<M,M+=8),N=R[x&P];n:for(;;){if(x>>>=E=N>>>24,M-=E,!(16&(E=N>>>16&255))){if(!(64&E)){N=R[(65535&N)+(x&(1<<E)-1)];continue n}s.msg="invalid distance code",o.mode=30;break t}if(B=65535&N,M<(E&=15)&&(x+=y[l++]<<M,(M+=8)<E&&(x+=y[l++]<<M,M+=8)),f<(B+=x&(1<<E)-1)){s.msg="invalid distance too far back",o.mode=30;break t}if(x>>>=E,M-=E,(E=d-u)<B){if(_<(E=B-E)&&o.sane){s.msg="invalid distance too far back",o.mode=30;break t}if(z=h,(C=0)===m){if(C+=g-E,E<w){for(w-=E;V[d++]=h[C++],--E;);C=d-B,z=V}}else if(m<E){if(C+=g+m-E,(E-=m)<w){for(w-=E;V[d++]=h[C++],--E;);if(C=0,m<w){for(w-=E=m;V[d++]=h[C++],--E;);C=d-B,z=V}}}else if(C+=m-E,E<w){for(w-=E;V[d++]=h[C++],--E;);C=d-B,z=V}for(;2<w;)V[d++]=z[C++],V[d++]=z[C++],V[d++]=z[C++],w-=3;w&&(V[d++]=z[C++],1<w&&(V[d++]=z[C++]))}else{for(C=d-B;V[d++]=V[C++],V[d++]=V[C++],V[d++]=V[C++],2<(w-=3););w&&(V[d++]=V[C++],1<w&&(V[d++]=V[C++]))}break}}break}}while(l<c&&d<p);l-=w=M>>3,x&=(1<<(M-=w<<3))-1,s.next_in=l,s.next_out=d,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=d<p?p-d+257:257-(d-p),o.hold=x,o.bits=M}},{}],49:[function(e,n,r){var s=e("../utils/common"),a=e("./adler32"),o=e("./crc32"),l=e("./inffast"),c=e("./inftrees"),d=1,u=2,p=0,f=-2,g=1,_=852,m=592;function h(C){return(C>>>24&255)+(C>>>8&65280)+((65280&C)<<8)+((255&C)<<24)}function x(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function M(C){var z;return C&&C.state?(z=C.state,C.total_in=C.total_out=z.total=0,C.msg="",z.wrap&&(C.adler=1&z.wrap),z.mode=g,z.last=0,z.havedict=0,z.dmax=32768,z.head=null,z.hold=0,z.bits=0,z.lencode=z.lendyn=new s.Buf32(_),z.distcode=z.distdyn=new s.Buf32(m),z.sane=1,z.back=-1,p):f}function S(C){var z;return C&&C.state?((z=C.state).wsize=0,z.whave=0,z.wnext=0,M(C)):f}function R(C,z){var y,V;return C&&C.state?(V=C.state,z<0?(y=0,z=-z):(y=1+(z>>4),z<48&&(z&=15)),z&&(z<8||15<z)?f:(V.window!==null&&V.wbits!==z&&(V.window=null),V.wrap=y,V.wbits=z,S(C))):f}function L(C,z){var y,V;return C?(V=new x,(C.state=V).window=null,(y=R(C,z))!==p&&(C.state=null),y):f}var P,N,E=!0;function w(C){if(E){var z;for(P=new s.Buf32(512),N=new s.Buf32(32),z=0;z<144;)C.lens[z++]=8;for(;z<256;)C.lens[z++]=9;for(;z<280;)C.lens[z++]=7;for(;z<288;)C.lens[z++]=8;for(c(d,C.lens,0,288,P,0,C.work,{bits:9}),z=0;z<32;)C.lens[z++]=5;c(u,C.lens,0,32,N,0,C.work,{bits:5}),E=!1}C.lencode=P,C.lenbits=9,C.distcode=N,C.distbits=5}function B(C,z,y,V){var W,q=C.state;return q.window===null&&(q.wsize=1<<q.wbits,q.wnext=0,q.whave=0,q.window=new s.Buf8(q.wsize)),V>=q.wsize?(s.arraySet(q.window,z,y-q.wsize,q.wsize,0),q.wnext=0,q.whave=q.wsize):(V<(W=q.wsize-q.wnext)&&(W=V),s.arraySet(q.window,z,y-V,W,q.wnext),(V-=W)?(s.arraySet(q.window,z,y-V,V,0),q.wnext=V,q.whave=q.wsize):(q.wnext+=W,q.wnext===q.wsize&&(q.wnext=0),q.whave<q.wsize&&(q.whave+=W))),0}r.inflateReset=S,r.inflateReset2=R,r.inflateResetKeep=M,r.inflateInit=function(C){return L(C,15)},r.inflateInit2=L,r.inflate=function(C,z){var y,V,W,q,J,Q,pt,j,Z,vt,X,Y,ct,ft,yt,Tt,zt,Jt,te,me,v,_t,st,H,F=0,$=new s.Buf8(4),ot=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!C||!C.state||!C.output||!C.input&&C.avail_in!==0)return f;(y=C.state).mode===12&&(y.mode=13),J=C.next_out,W=C.output,pt=C.avail_out,q=C.next_in,V=C.input,Q=C.avail_in,j=y.hold,Z=y.bits,vt=Q,X=pt,_t=p;t:for(;;)switch(y.mode){case g:if(y.wrap===0){y.mode=13;break}for(;Z<16;){if(Q===0)break t;Q--,j+=V[q++]<<Z,Z+=8}if(2&y.wrap&&j===35615){$[y.check=0]=255&j,$[1]=j>>>8&255,y.check=o(y.check,$,2,0),Z=j=0,y.mode=2;break}if(y.flags=0,y.head&&(y.head.done=!1),!(1&y.wrap)||(((255&j)<<8)+(j>>8))%31){C.msg="incorrect header check",y.mode=30;break}if((15&j)!=8){C.msg="unknown compression method",y.mode=30;break}if(Z-=4,v=8+(15&(j>>>=4)),y.wbits===0)y.wbits=v;else if(v>y.wbits){C.msg="invalid window size",y.mode=30;break}y.dmax=1<<v,C.adler=y.check=1,y.mode=512&j?10:12,Z=j=0;break;case 2:for(;Z<16;){if(Q===0)break t;Q--,j+=V[q++]<<Z,Z+=8}if(y.flags=j,(255&y.flags)!=8){C.msg="unknown compression method",y.mode=30;break}if(57344&y.flags){C.msg="unknown header flags set",y.mode=30;break}y.head&&(y.head.text=j>>8&1),512&y.flags&&($[0]=255&j,$[1]=j>>>8&255,y.check=o(y.check,$,2,0)),Z=j=0,y.mode=3;case 3:for(;Z<32;){if(Q===0)break t;Q--,j+=V[q++]<<Z,Z+=8}y.head&&(y.head.time=j),512&y.flags&&($[0]=255&j,$[1]=j>>>8&255,$[2]=j>>>16&255,$[3]=j>>>24&255,y.check=o(y.check,$,4,0)),Z=j=0,y.mode=4;case 4:for(;Z<16;){if(Q===0)break t;Q--,j+=V[q++]<<Z,Z+=8}y.head&&(y.head.xflags=255&j,y.head.os=j>>8),512&y.flags&&($[0]=255&j,$[1]=j>>>8&255,y.check=o(y.check,$,2,0)),Z=j=0,y.mode=5;case 5:if(1024&y.flags){for(;Z<16;){if(Q===0)break t;Q--,j+=V[q++]<<Z,Z+=8}y.length=j,y.head&&(y.head.extra_len=j),512&y.flags&&($[0]=255&j,$[1]=j>>>8&255,y.check=o(y.check,$,2,0)),Z=j=0}else y.head&&(y.head.extra=null);y.mode=6;case 6:if(1024&y.flags&&(Q<(Y=y.length)&&(Y=Q),Y&&(y.head&&(v=y.head.extra_len-y.length,y.head.extra||(y.head.extra=new Array(y.head.extra_len)),s.arraySet(y.head.extra,V,q,Y,v)),512&y.flags&&(y.check=o(y.check,V,Y,q)),Q-=Y,q+=Y,y.length-=Y),y.length))break t;y.length=0,y.mode=7;case 7:if(2048&y.flags){if(Q===0)break t;for(Y=0;v=V[q+Y++],y.head&&v&&y.length<65536&&(y.head.name+=String.fromCharCode(v)),v&&Y<Q;);if(512&y.flags&&(y.check=o(y.check,V,Y,q)),Q-=Y,q+=Y,v)break t}else y.head&&(y.head.name=null);y.length=0,y.mode=8;case 8:if(4096&y.flags){if(Q===0)break t;for(Y=0;v=V[q+Y++],y.head&&v&&y.length<65536&&(y.head.comment+=String.fromCharCode(v)),v&&Y<Q;);if(512&y.flags&&(y.check=o(y.check,V,Y,q)),Q-=Y,q+=Y,v)break t}else y.head&&(y.head.comment=null);y.mode=9;case 9:if(512&y.flags){for(;Z<16;){if(Q===0)break t;Q--,j+=V[q++]<<Z,Z+=8}if(j!==(65535&y.check)){C.msg="header crc mismatch",y.mode=30;break}Z=j=0}y.head&&(y.head.hcrc=y.flags>>9&1,y.head.done=!0),C.adler=y.check=0,y.mode=12;break;case 10:for(;Z<32;){if(Q===0)break t;Q--,j+=V[q++]<<Z,Z+=8}C.adler=y.check=h(j),Z=j=0,y.mode=11;case 11:if(y.havedict===0)return C.next_out=J,C.avail_out=pt,C.next_in=q,C.avail_in=Q,y.hold=j,y.bits=Z,2;C.adler=y.check=1,y.mode=12;case 12:if(z===5||z===6)break t;case 13:if(y.last){j>>>=7&Z,Z-=7&Z,y.mode=27;break}for(;Z<3;){if(Q===0)break t;Q--,j+=V[q++]<<Z,Z+=8}switch(y.last=1&j,Z-=1,3&(j>>>=1)){case 0:y.mode=14;break;case 1:if(w(y),y.mode=20,z!==6)break;j>>>=2,Z-=2;break t;case 2:y.mode=17;break;case 3:C.msg="invalid block type",y.mode=30}j>>>=2,Z-=2;break;case 14:for(j>>>=7&Z,Z-=7&Z;Z<32;){if(Q===0)break t;Q--,j+=V[q++]<<Z,Z+=8}if((65535&j)!=(j>>>16^65535)){C.msg="invalid stored block lengths",y.mode=30;break}if(y.length=65535&j,Z=j=0,y.mode=15,z===6)break t;case 15:y.mode=16;case 16:if(Y=y.length){if(Q<Y&&(Y=Q),pt<Y&&(Y=pt),Y===0)break t;s.arraySet(W,V,q,Y,J),Q-=Y,q+=Y,pt-=Y,J+=Y,y.length-=Y;break}y.mode=12;break;case 17:for(;Z<14;){if(Q===0)break t;Q--,j+=V[q++]<<Z,Z+=8}if(y.nlen=257+(31&j),j>>>=5,Z-=5,y.ndist=1+(31&j),j>>>=5,Z-=5,y.ncode=4+(15&j),j>>>=4,Z-=4,286<y.nlen||30<y.ndist){C.msg="too many length or distance symbols",y.mode=30;break}y.have=0,y.mode=18;case 18:for(;y.have<y.ncode;){for(;Z<3;){if(Q===0)break t;Q--,j+=V[q++]<<Z,Z+=8}y.lens[ot[y.have++]]=7&j,j>>>=3,Z-=3}for(;y.have<19;)y.lens[ot[y.have++]]=0;if(y.lencode=y.lendyn,y.lenbits=7,st={bits:y.lenbits},_t=c(0,y.lens,0,19,y.lencode,0,y.work,st),y.lenbits=st.bits,_t){C.msg="invalid code lengths set",y.mode=30;break}y.have=0,y.mode=19;case 19:for(;y.have<y.nlen+y.ndist;){for(;Tt=(F=y.lencode[j&(1<<y.lenbits)-1])>>>16&255,zt=65535&F,!((yt=F>>>24)<=Z);){if(Q===0)break t;Q--,j+=V[q++]<<Z,Z+=8}if(zt<16)j>>>=yt,Z-=yt,y.lens[y.have++]=zt;else{if(zt===16){for(H=yt+2;Z<H;){if(Q===0)break t;Q--,j+=V[q++]<<Z,Z+=8}if(j>>>=yt,Z-=yt,y.have===0){C.msg="invalid bit length repeat",y.mode=30;break}v=y.lens[y.have-1],Y=3+(3&j),j>>>=2,Z-=2}else if(zt===17){for(H=yt+3;Z<H;){if(Q===0)break t;Q--,j+=V[q++]<<Z,Z+=8}Z-=yt,v=0,Y=3+(7&(j>>>=yt)),j>>>=3,Z-=3}else{for(H=yt+7;Z<H;){if(Q===0)break t;Q--,j+=V[q++]<<Z,Z+=8}Z-=yt,v=0,Y=11+(127&(j>>>=yt)),j>>>=7,Z-=7}if(y.have+Y>y.nlen+y.ndist){C.msg="invalid bit length repeat",y.mode=30;break}for(;Y--;)y.lens[y.have++]=v}}if(y.mode===30)break;if(y.lens[256]===0){C.msg="invalid code -- missing end-of-block",y.mode=30;break}if(y.lenbits=9,st={bits:y.lenbits},_t=c(d,y.lens,0,y.nlen,y.lencode,0,y.work,st),y.lenbits=st.bits,_t){C.msg="invalid literal/lengths set",y.mode=30;break}if(y.distbits=6,y.distcode=y.distdyn,st={bits:y.distbits},_t=c(u,y.lens,y.nlen,y.ndist,y.distcode,0,y.work,st),y.distbits=st.bits,_t){C.msg="invalid distances set",y.mode=30;break}if(y.mode=20,z===6)break t;case 20:y.mode=21;case 21:if(6<=Q&&258<=pt){C.next_out=J,C.avail_out=pt,C.next_in=q,C.avail_in=Q,y.hold=j,y.bits=Z,l(C,X),J=C.next_out,W=C.output,pt=C.avail_out,q=C.next_in,V=C.input,Q=C.avail_in,j=y.hold,Z=y.bits,y.mode===12&&(y.back=-1);break}for(y.back=0;Tt=(F=y.lencode[j&(1<<y.lenbits)-1])>>>16&255,zt=65535&F,!((yt=F>>>24)<=Z);){if(Q===0)break t;Q--,j+=V[q++]<<Z,Z+=8}if(Tt&&!(240&Tt)){for(Jt=yt,te=Tt,me=zt;Tt=(F=y.lencode[me+((j&(1<<Jt+te)-1)>>Jt)])>>>16&255,zt=65535&F,!(Jt+(yt=F>>>24)<=Z);){if(Q===0)break t;Q--,j+=V[q++]<<Z,Z+=8}j>>>=Jt,Z-=Jt,y.back+=Jt}if(j>>>=yt,Z-=yt,y.back+=yt,y.length=zt,Tt===0){y.mode=26;break}if(32&Tt){y.back=-1,y.mode=12;break}if(64&Tt){C.msg="invalid literal/length code",y.mode=30;break}y.extra=15&Tt,y.mode=22;case 22:if(y.extra){for(H=y.extra;Z<H;){if(Q===0)break t;Q--,j+=V[q++]<<Z,Z+=8}y.length+=j&(1<<y.extra)-1,j>>>=y.extra,Z-=y.extra,y.back+=y.extra}y.was=y.length,y.mode=23;case 23:for(;Tt=(F=y.distcode[j&(1<<y.distbits)-1])>>>16&255,zt=65535&F,!((yt=F>>>24)<=Z);){if(Q===0)break t;Q--,j+=V[q++]<<Z,Z+=8}if(!(240&Tt)){for(Jt=yt,te=Tt,me=zt;Tt=(F=y.distcode[me+((j&(1<<Jt+te)-1)>>Jt)])>>>16&255,zt=65535&F,!(Jt+(yt=F>>>24)<=Z);){if(Q===0)break t;Q--,j+=V[q++]<<Z,Z+=8}j>>>=Jt,Z-=Jt,y.back+=Jt}if(j>>>=yt,Z-=yt,y.back+=yt,64&Tt){C.msg="invalid distance code",y.mode=30;break}y.offset=zt,y.extra=15&Tt,y.mode=24;case 24:if(y.extra){for(H=y.extra;Z<H;){if(Q===0)break t;Q--,j+=V[q++]<<Z,Z+=8}y.offset+=j&(1<<y.extra)-1,j>>>=y.extra,Z-=y.extra,y.back+=y.extra}if(y.offset>y.dmax){C.msg="invalid distance too far back",y.mode=30;break}y.mode=25;case 25:if(pt===0)break t;if(Y=X-pt,y.offset>Y){if((Y=y.offset-Y)>y.whave&&y.sane){C.msg="invalid distance too far back",y.mode=30;break}ct=Y>y.wnext?(Y-=y.wnext,y.wsize-Y):y.wnext-Y,Y>y.length&&(Y=y.length),ft=y.window}else ft=W,ct=J-y.offset,Y=y.length;for(pt<Y&&(Y=pt),pt-=Y,y.length-=Y;W[J++]=ft[ct++],--Y;);y.length===0&&(y.mode=21);break;case 26:if(pt===0)break t;W[J++]=y.length,pt--,y.mode=21;break;case 27:if(y.wrap){for(;Z<32;){if(Q===0)break t;Q--,j|=V[q++]<<Z,Z+=8}if(X-=pt,C.total_out+=X,y.total+=X,X&&(C.adler=y.check=y.flags?o(y.check,W,X,J-X):a(y.check,W,X,J-X)),X=pt,(y.flags?j:h(j))!==y.check){C.msg="incorrect data check",y.mode=30;break}Z=j=0}y.mode=28;case 28:if(y.wrap&&y.flags){for(;Z<32;){if(Q===0)break t;Q--,j+=V[q++]<<Z,Z+=8}if(j!==(4294967295&y.total)){C.msg="incorrect length check",y.mode=30;break}Z=j=0}y.mode=29;case 29:_t=1;break t;case 30:_t=-3;break t;case 31:return-4;case 32:default:return f}return C.next_out=J,C.avail_out=pt,C.next_in=q,C.avail_in=Q,y.hold=j,y.bits=Z,(y.wsize||X!==C.avail_out&&y.mode<30&&(y.mode<27||z!==4))&&B(C,C.output,C.next_out,X-C.avail_out)?(y.mode=31,-4):(vt-=C.avail_in,X-=C.avail_out,C.total_in+=vt,C.total_out+=X,y.total+=X,y.wrap&&X&&(C.adler=y.check=y.flags?o(y.check,W,X,C.next_out-X):a(y.check,W,X,C.next_out-X)),C.data_type=y.bits+(y.last?64:0)+(y.mode===12?128:0)+(y.mode===20||y.mode===15?256:0),(vt==0&&X===0||z===4)&&_t===p&&(_t=-5),_t)},r.inflateEnd=function(C){if(!C||!C.state)return f;var z=C.state;return z.window&&(z.window=null),C.state=null,p},r.inflateGetHeader=function(C,z){var y;return C&&C.state&&2&(y=C.state).wrap?((y.head=z).done=!1,p):f},r.inflateSetDictionary=function(C,z){var y,V=z.length;return C&&C.state?(y=C.state).wrap!==0&&y.mode!==11?f:y.mode===11&&a(1,z,V,0)!==y.check?-3:B(C,z,V,V)?(y.mode=31,-4):(y.havedict=1,p):f},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,n,r){var s=e("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(d,u,p,f,g,_,m,h){var x,M,S,R,L,P,N,E,w,B=h.bits,C=0,z=0,y=0,V=0,W=0,q=0,J=0,Q=0,pt=0,j=0,Z=null,vt=0,X=new s.Buf16(16),Y=new s.Buf16(16),ct=null,ft=0;for(C=0;C<=15;C++)X[C]=0;for(z=0;z<f;z++)X[u[p+z]]++;for(W=B,V=15;1<=V&&X[V]===0;V--);if(V<W&&(W=V),V===0)return g[_++]=20971520,g[_++]=20971520,h.bits=1,0;for(y=1;y<V&&X[y]===0;y++);for(W<y&&(W=y),C=Q=1;C<=15;C++)if(Q<<=1,(Q-=X[C])<0)return-1;if(0<Q&&(d===0||V!==1))return-1;for(Y[1]=0,C=1;C<15;C++)Y[C+1]=Y[C]+X[C];for(z=0;z<f;z++)u[p+z]!==0&&(m[Y[u[p+z]]++]=z);if(P=d===0?(Z=ct=m,19):d===1?(Z=a,vt-=257,ct=o,ft-=257,256):(Z=l,ct=c,-1),C=y,L=_,J=z=j=0,S=-1,R=(pt=1<<(q=W))-1,d===1&&852<pt||d===2&&592<pt)return 1;for(;;){for(N=C-J,w=m[z]<P?(E=0,m[z]):m[z]>P?(E=ct[ft+m[z]],Z[vt+m[z]]):(E=96,0),x=1<<C-J,y=M=1<<q;g[L+(j>>J)+(M-=x)]=N<<24|E<<16|w|0,M!==0;);for(x=1<<C-1;j&x;)x>>=1;if(x!==0?(j&=x-1,j+=x):j=0,z++,--X[C]==0){if(C===V)break;C=u[p+m[z]]}if(W<C&&(j&R)!==S){for(J===0&&(J=W),L+=y,Q=1<<(q=C-J);q+J<V&&!((Q-=X[q+J])<=0);)q++,Q<<=1;if(pt+=1<<q,d===1&&852<pt||d===2&&592<pt)return 1;g[S=j&R]=W<<24|q<<16|L-_|0}}return j!==0&&(g[L+j]=C-J<<24|64<<16|0),h.bits=W,0}},{"../utils/common":41}],51:[function(e,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,n,r){var s=e("../utils/common"),a=0,o=1;function l(F){for(var $=F.length;0<=--$;)F[$]=0}var c=0,d=29,u=256,p=u+1+d,f=30,g=19,_=2*p+1,m=15,h=16,x=7,M=256,S=16,R=17,L=18,P=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],N=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],E=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],B=new Array(2*(p+2));l(B);var C=new Array(2*f);l(C);var z=new Array(512);l(z);var y=new Array(256);l(y);var V=new Array(d);l(V);var W,q,J,Q=new Array(f);function pt(F,$,ot,D,b){this.static_tree=F,this.extra_bits=$,this.extra_base=ot,this.elems=D,this.max_length=b,this.has_stree=F&&F.length}function j(F,$){this.dyn_tree=F,this.max_code=0,this.stat_desc=$}function Z(F){return F<256?z[F]:z[256+(F>>>7)]}function vt(F,$){F.pending_buf[F.pending++]=255&$,F.pending_buf[F.pending++]=$>>>8&255}function X(F,$,ot){F.bi_valid>h-ot?(F.bi_buf|=$<<F.bi_valid&65535,vt(F,F.bi_buf),F.bi_buf=$>>h-F.bi_valid,F.bi_valid+=ot-h):(F.bi_buf|=$<<F.bi_valid&65535,F.bi_valid+=ot)}function Y(F,$,ot){X(F,ot[2*$],ot[2*$+1])}function ct(F,$){for(var ot=0;ot|=1&F,F>>>=1,ot<<=1,0<--$;);return ot>>>1}function ft(F,$,ot){var D,b,G=new Array(m+1),rt=0;for(D=1;D<=m;D++)G[D]=rt=rt+ot[D-1]<<1;for(b=0;b<=$;b++){var nt=F[2*b+1];nt!==0&&(F[2*b]=ct(G[nt]++,nt))}}function yt(F){var $;for($=0;$<p;$++)F.dyn_ltree[2*$]=0;for($=0;$<f;$++)F.dyn_dtree[2*$]=0;for($=0;$<g;$++)F.bl_tree[2*$]=0;F.dyn_ltree[2*M]=1,F.opt_len=F.static_len=0,F.last_lit=F.matches=0}function Tt(F){8<F.bi_valid?vt(F,F.bi_buf):0<F.bi_valid&&(F.pending_buf[F.pending++]=F.bi_buf),F.bi_buf=0,F.bi_valid=0}function zt(F,$,ot,D){var b=2*$,G=2*ot;return F[b]<F[G]||F[b]===F[G]&&D[$]<=D[ot]}function Jt(F,$,ot){for(var D=F.heap[ot],b=ot<<1;b<=F.heap_len&&(b<F.heap_len&&zt($,F.heap[b+1],F.heap[b],F.depth)&&b++,!zt($,D,F.heap[b],F.depth));)F.heap[ot]=F.heap[b],ot=b,b<<=1;F.heap[ot]=D}function te(F,$,ot){var D,b,G,rt,nt=0;if(F.last_lit!==0)for(;D=F.pending_buf[F.d_buf+2*nt]<<8|F.pending_buf[F.d_buf+2*nt+1],b=F.pending_buf[F.l_buf+nt],nt++,D===0?Y(F,b,$):(Y(F,(G=y[b])+u+1,$),(rt=P[G])!==0&&X(F,b-=V[G],rt),Y(F,G=Z(--D),ot),(rt=N[G])!==0&&X(F,D-=Q[G],rt)),nt<F.last_lit;);Y(F,M,$)}function me(F,$){var ot,D,b,G=$.dyn_tree,rt=$.stat_desc.static_tree,nt=$.stat_desc.has_stree,at=$.stat_desc.elems,At=-1;for(F.heap_len=0,F.heap_max=_,ot=0;ot<at;ot++)G[2*ot]!==0?(F.heap[++F.heap_len]=At=ot,F.depth[ot]=0):G[2*ot+1]=0;for(;F.heap_len<2;)G[2*(b=F.heap[++F.heap_len]=At<2?++At:0)]=1,F.depth[b]=0,F.opt_len--,nt&&(F.static_len-=rt[2*b+1]);for($.max_code=At,ot=F.heap_len>>1;1<=ot;ot--)Jt(F,G,ot);for(b=at;ot=F.heap[1],F.heap[1]=F.heap[F.heap_len--],Jt(F,G,1),D=F.heap[1],F.heap[--F.heap_max]=ot,F.heap[--F.heap_max]=D,G[2*b]=G[2*ot]+G[2*D],F.depth[b]=(F.depth[ot]>=F.depth[D]?F.depth[ot]:F.depth[D])+1,G[2*ot+1]=G[2*D+1]=b,F.heap[1]=b++,Jt(F,G,1),2<=F.heap_len;);F.heap[--F.heap_max]=F.heap[1],function(St,Rt){var ce,Mt,Ft,Nt,Zt,kt,ee=Rt.dyn_tree,ie=Rt.max_code,be=Rt.stat_desc.static_tree,et=Rt.stat_desc.has_stree,Pt=Rt.stat_desc.extra_bits,mt=Rt.stat_desc.extra_base,xt=Rt.stat_desc.max_length,Lt=0;for(Nt=0;Nt<=m;Nt++)St.bl_count[Nt]=0;for(ee[2*St.heap[St.heap_max]+1]=0,ce=St.heap_max+1;ce<_;ce++)xt<(Nt=ee[2*ee[2*(Mt=St.heap[ce])+1]+1]+1)&&(Nt=xt,Lt++),ee[2*Mt+1]=Nt,ie<Mt||(St.bl_count[Nt]++,Zt=0,mt<=Mt&&(Zt=Pt[Mt-mt]),kt=ee[2*Mt],St.opt_len+=kt*(Nt+Zt),et&&(St.static_len+=kt*(be[2*Mt+1]+Zt)));if(Lt!==0){do{for(Nt=xt-1;St.bl_count[Nt]===0;)Nt--;St.bl_count[Nt]--,St.bl_count[Nt+1]+=2,St.bl_count[xt]--,Lt-=2}while(0<Lt);for(Nt=xt;Nt!==0;Nt--)for(Mt=St.bl_count[Nt];Mt!==0;)ie<(Ft=St.heap[--ce])||(ee[2*Ft+1]!==Nt&&(St.opt_len+=(Nt-ee[2*Ft+1])*ee[2*Ft],ee[2*Ft+1]=Nt),Mt--)}}(F,$),ft(G,At,F.bl_count)}function v(F,$,ot){var D,b,G=-1,rt=$[1],nt=0,at=7,At=4;for(rt===0&&(at=138,At=3),$[2*(ot+1)+1]=65535,D=0;D<=ot;D++)b=rt,rt=$[2*(D+1)+1],++nt<at&&b===rt||(nt<At?F.bl_tree[2*b]+=nt:b!==0?(b!==G&&F.bl_tree[2*b]++,F.bl_tree[2*S]++):nt<=10?F.bl_tree[2*R]++:F.bl_tree[2*L]++,G=b,At=(nt=0)===rt?(at=138,3):b===rt?(at=6,3):(at=7,4))}function _t(F,$,ot){var D,b,G=-1,rt=$[1],nt=0,at=7,At=4;for(rt===0&&(at=138,At=3),D=0;D<=ot;D++)if(b=rt,rt=$[2*(D+1)+1],!(++nt<at&&b===rt)){if(nt<At)for(;Y(F,b,F.bl_tree),--nt!=0;);else b!==0?(b!==G&&(Y(F,b,F.bl_tree),nt--),Y(F,S,F.bl_tree),X(F,nt-3,2)):nt<=10?(Y(F,R,F.bl_tree),X(F,nt-3,3)):(Y(F,L,F.bl_tree),X(F,nt-11,7));G=b,At=(nt=0)===rt?(at=138,3):b===rt?(at=6,3):(at=7,4)}}l(Q);var st=!1;function H(F,$,ot,D){X(F,(c<<1)+(D?1:0),3),function(b,G,rt,nt){Tt(b),vt(b,rt),vt(b,~rt),s.arraySet(b.pending_buf,b.window,G,rt,b.pending),b.pending+=rt}(F,$,ot)}r._tr_init=function(F){st||(function(){var $,ot,D,b,G,rt=new Array(m+1);for(b=D=0;b<d-1;b++)for(V[b]=D,$=0;$<1<<P[b];$++)y[D++]=b;for(y[D-1]=b,b=G=0;b<16;b++)for(Q[b]=G,$=0;$<1<<N[b];$++)z[G++]=b;for(G>>=7;b<f;b++)for(Q[b]=G<<7,$=0;$<1<<N[b]-7;$++)z[256+G++]=b;for(ot=0;ot<=m;ot++)rt[ot]=0;for($=0;$<=143;)B[2*$+1]=8,$++,rt[8]++;for(;$<=255;)B[2*$+1]=9,$++,rt[9]++;for(;$<=279;)B[2*$+1]=7,$++,rt[7]++;for(;$<=287;)B[2*$+1]=8,$++,rt[8]++;for(ft(B,p+1,rt),$=0;$<f;$++)C[2*$+1]=5,C[2*$]=ct($,5);W=new pt(B,P,u+1,p,m),q=new pt(C,N,0,f,m),J=new pt(new Array(0),E,0,g,x)}(),st=!0),F.l_desc=new j(F.dyn_ltree,W),F.d_desc=new j(F.dyn_dtree,q),F.bl_desc=new j(F.bl_tree,J),F.bi_buf=0,F.bi_valid=0,yt(F)},r._tr_stored_block=H,r._tr_flush_block=function(F,$,ot,D){var b,G,rt=0;0<F.level?(F.strm.data_type===2&&(F.strm.data_type=function(nt){var at,At=4093624447;for(at=0;at<=31;at++,At>>>=1)if(1&At&&nt.dyn_ltree[2*at]!==0)return a;if(nt.dyn_ltree[18]!==0||nt.dyn_ltree[20]!==0||nt.dyn_ltree[26]!==0)return o;for(at=32;at<u;at++)if(nt.dyn_ltree[2*at]!==0)return o;return a}(F)),me(F,F.l_desc),me(F,F.d_desc),rt=function(nt){var at;for(v(nt,nt.dyn_ltree,nt.l_desc.max_code),v(nt,nt.dyn_dtree,nt.d_desc.max_code),me(nt,nt.bl_desc),at=g-1;3<=at&&nt.bl_tree[2*w[at]+1]===0;at--);return nt.opt_len+=3*(at+1)+5+5+4,at}(F),b=F.opt_len+3+7>>>3,(G=F.static_len+3+7>>>3)<=b&&(b=G)):b=G=ot+5,ot+4<=b&&$!==-1?H(F,$,ot,D):F.strategy===4||G===b?(X(F,2+(D?1:0),3),te(F,B,C)):(X(F,4+(D?1:0),3),function(nt,at,At,St){var Rt;for(X(nt,at-257,5),X(nt,At-1,5),X(nt,St-4,4),Rt=0;Rt<St;Rt++)X(nt,nt.bl_tree[2*w[Rt]+1],3);_t(nt,nt.dyn_ltree,at-1),_t(nt,nt.dyn_dtree,At-1)}(F,F.l_desc.max_code+1,F.d_desc.max_code+1,rt+1),te(F,F.dyn_ltree,F.dyn_dtree)),yt(F),D&&Tt(F)},r._tr_tally=function(F,$,ot){return F.pending_buf[F.d_buf+2*F.last_lit]=$>>>8&255,F.pending_buf[F.d_buf+2*F.last_lit+1]=255&$,F.pending_buf[F.l_buf+F.last_lit]=255&ot,F.last_lit++,$===0?F.dyn_ltree[2*ot]++:(F.matches++,$--,F.dyn_ltree[2*(y[ot]+u+1)]++,F.dyn_dtree[2*Z($)]++),F.last_lit===F.lit_bufsize-1},r._tr_align=function(F){X(F,2,3),Y(F,M,B),function($){$.bi_valid===16?(vt($,$.bi_buf),$.bi_buf=0,$.bi_valid=0):8<=$.bi_valid&&($.pending_buf[$.pending++]=255&$.bi_buf,$.bi_buf>>=8,$.bi_valid-=8)}(F)}},{"../utils/common":41}],53:[function(e,n,r){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,n,r){(function(s){(function(a,o){if(!a.setImmediate){var l,c,d,u,p=1,f={},g=!1,_=a.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(a);m=m&&m.setTimeout?m:a,l={}.toString.call(a.process)==="[object process]"?function(S){process.nextTick(function(){x(S)})}:function(){if(a.postMessage&&!a.importScripts){var S=!0,R=a.onmessage;return a.onmessage=function(){S=!1},a.postMessage("","*"),a.onmessage=R,S}}()?(u="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",M,!1):a.attachEvent("onmessage",M),function(S){a.postMessage(u+S,"*")}):a.MessageChannel?((d=new MessageChannel).port1.onmessage=function(S){x(S.data)},function(S){d.port2.postMessage(S)}):_&&"onreadystatechange"in _.createElement("script")?(c=_.documentElement,function(S){var R=_.createElement("script");R.onreadystatechange=function(){x(S),R.onreadystatechange=null,c.removeChild(R),R=null},c.appendChild(R)}):function(S){setTimeout(x,0,S)},m.setImmediate=function(S){typeof S!="function"&&(S=new Function(""+S));for(var R=new Array(arguments.length-1),L=0;L<R.length;L++)R[L]=arguments[L+1];var P={callback:S,args:R};return f[p]=P,l(p),p++},m.clearImmediate=h}function h(S){delete f[S]}function x(S){if(g)setTimeout(x,0,S);else{var R=f[S];if(R){g=!0;try{(function(L){var P=L.callback,N=L.args;switch(N.length){case 0:P();break;case 1:P(N[0]);break;case 2:P(N[0],N[1]);break;case 3:P(N[0],N[1],N[2]);break;default:P.apply(o,N)}})(R)}finally{h(S),g=!1}}}}function M(S){S.source===a&&typeof S.data=="string"&&S.data.indexOf(u)===0&&x(+S.data.slice(u.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof Bs<"u"?Bs:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})}(so)),so.exports}var xv=vv();const yv=gv(xv);async function _u(i,t,e){try{const n=await bv(i);return Sv(n,t,e)}catch(n){return Mv(n,`Error processing ZIP file at ${i}`),new Map}}async function bv(i){const t=await fetch(i);if(!t.ok)throw new Error(`Failed to load ZIP file: ${t.statusText}`);const e=await t.arrayBuffer();return yv.loadAsync(e)}async function Sv(i,t,e){const n=new Map,r=Object.entries(i.files).filter(([s,a])=>a&&!a.dir&&s.endsWith(t));for(const[s,a]of r){const o=await a.async(e);n.set(s,o)}return n}function Mv(i,t){i instanceof Error?console.error(`${t}: ${i.message}`):console.error(`${t}: ${JSON.stringify(i)}`)}async function Ev(i,t){return _u(i,t,"text")}async function wv(i,t){return _u(i,t,"arraybuffer")}function Tv(...i){const t=new Map;return i.forEach(e=>{e.forEach((n,r)=>{t.set(r,n)})}),t}async function gu(i,t,e){const n=await Promise.all(t.map(r=>e(i,r)));return Tv(...n)}async function Av(){return await gu(mu,[".obj",".urdf"],Ev)}async function Cv(){return await gu(mu,[".png",".STL"],wv)}async function Rv(){return{textFiles:await Av(),binaryFiles:await Cv()}}async function Pv(){let i=null;try{i=await Rv(),console.log("ZIP file loaded and extracted successfully.",i)}catch(t){console.error("Error during ZIP loading:",t)}return i||{textFiles:new Map,binaryFiles:new Map}}const Lv=/^[og]\s*(.+)?/,Dv=/^mtllib /,Iv=/^usemtl /,Nv=/^usemap /,oh=/\s+/,lh=new K,ao=new K,ch=new K,hh=new K,pn=new K,Hs=new le;function Uv(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const r=this.normals,s=this.object.geometry.normals;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(t,e,n){const r=this.vertices,s=this.object.geometry.normals;lh.fromArray(r,t),ao.fromArray(r,e),ch.fromArray(r,n),pn.subVectors(ch,ao),hh.subVectors(lh,ao),pn.cross(hh),pn.normalize(),s.push(pn.x,pn.y,pn.z),s.push(pn.x,pn.y,pn.z),s.push(pn.x,pn.y,pn.z)},addColor:function(t,e,n){const r=this.colors,s=this.object.geometry.colors;r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[n]!==void 0&&s.push(r[n+0],r[n+1],r[n+2])},addUV:function(t,e,n){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[t+0],r[t+1]),s.push(r[e+0],r[e+1]),s.push(r[n+0],r[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,r,s,a,o,l,c){const d=this.vertices.length;let u=this.parseVertexIndex(t,d),p=this.parseVertexIndex(e,d),f=this.parseVertexIndex(n,d);if(this.addVertex(u,p,f),this.addColor(u,p,f),o!==void 0&&o!==""){const g=this.normals.length;u=this.parseNormalIndex(o,g),p=this.parseNormalIndex(l,g),f=this.parseNormalIndex(c,g),this.addNormal(u,p,f)}else this.addFaceNormal(u,p,f);if(r!==void 0&&r!==""){const g=this.uvs.length;u=this.parseUVIndex(r,g),p=this.parseUVIndex(s,g),f=this.parseUVIndex(a,g),this.addUV(u,p,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,r=t.length;n<r;n++){const s=this.parseVertexIndex(t[n],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,r=this.uvs.length;for(let s=0,a=t.length;s<a;s++)this.addVertexLine(this.parseVertexIndex(t[s],n));for(let s=0,a=e.length;s<a;s++)this.addUVLine(this.parseUVIndex(e[s],r))}};return i.startObject("",!1),i}class Ov extends Zn{constructor(t){super(t),this.materials=null}load(t,e,n,r){const s=this,a=new ma(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(s.parse(o))}catch(l){r?r(l):console.error(l),s.manager.itemError(t)}},n,r)}setMaterials(t){return this.materials=t,this}parse(t){const e=new Uv;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let r=[];for(let o=0,l=n.length;o<l;o++){const c=n[o].trimStart();if(c.length===0)continue;const d=c.charAt(0);if(d!=="#")if(d==="v"){const u=c.split(oh);switch(u[0]){case"v":e.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(Hs.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),De),e.colors.push(Hs.r,Hs.g,Hs.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":e.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(d==="f"){const p=c.slice(1).trim().split(oh),f=[];for(let _=0,m=p.length;_<m;_++){const h=p[_];if(h.length>0){const x=h.split("/");f.push(x)}}const g=f[0];for(let _=1,m=f.length-1;_<m;_++){const h=f[_],x=f[_+1];e.addFace(g[0],h[0],x[0],g[1],h[1],x[1],g[2],h[2],x[2])}}else if(d==="l"){const u=c.substring(1).trim().split(" ");let p=[];const f=[];if(c.indexOf("/")===-1)p=u;else for(let g=0,_=u.length;g<_;g++){const m=u[g].split("/");m[0]!==""&&p.push(m[0]),m[1]!==""&&f.push(m[1])}e.addLineGeometry(p,f)}else if(d==="p"){const p=c.slice(1).trim().split(" ");e.addPointGeometry(p)}else if((r=Lv.exec(c))!==null){const u=(" "+r[0].slice(1).trim()).slice(1);e.startObject(u)}else if(Iv.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(Dv.test(c))e.materialLibraries.push(c.substring(7).trim());else if(Nv.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(d==="s"){if(r=c.split(" "),r.length>1){const p=r[1].trim().toLowerCase();e.object.smooth=p!=="0"&&p!=="off"}else e.object.smooth=!0;const u=e.object.currentMaterial();u&&(u.smooth=e.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}e.finalize();const s=new Ti;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=e.objects.length;o<l;o++){const c=e.objects[o],d=c.geometry,u=c.materials,p=d.type==="Line",f=d.type==="Points";let g=!1;if(d.vertices.length===0)continue;const _=new We;_.setAttribute("position",new Se(d.vertices,3)),d.normals.length>0&&_.setAttribute("normal",new Se(d.normals,3)),d.colors.length>0&&(g=!0,_.setAttribute("color",new Se(d.colors,3))),d.hasUVIndices===!0&&_.setAttribute("uv",new Se(d.uvs,2));const m=[];for(let x=0,M=u.length;x<M;x++){const S=u[x],R=S.name+"_"+S.smooth+"_"+g;let L=e.materials[R];if(this.materials!==null){if(L=this.materials.create(S.name),p&&L&&!(L instanceof Ci)){const P=new Ci;wn.prototype.copy.call(P,L),P.color.copy(L.color),L=P}else if(f&&L&&!(L instanceof Br)){const P=new Br({size:10,sizeAttenuation:!1});wn.prototype.copy.call(P,L),P.color.copy(L.color),P.map=L.map,L=P}}L===void 0&&(p?L=new Ci:f?L=new Br({size:1,sizeAttenuation:!1}):L=new ur,L.name=S.name,L.flatShading=!S.smooth,L.vertexColors=g,e.materials[R]=L),m.push(L)}let h;if(m.length>1){for(let x=0,M=u.length;x<M;x++){const S=u[x];_.addGroup(S.groupStart,S.groupCount,x)}p?h=new ia(_,m):f?h=new Qa(_,m):h=new Oe(_,m)}else p?h=new ia(_,m[0]):f?h=new Qa(_,m[0]):h=new Oe(_,m[0]);h.name=c.name,s.add(h)}else if(e.vertices.length>0){const o=new Br({size:1,sizeAttenuation:!1}),l=new We;l.setAttribute("position",new Se(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new Se(e.colors,3)),o.vertexColors=!0);const c=new Qa(l,o);s.add(c)}return s}}var vu=(i=>(i[i.OpticalTable=0]="OpticalTable",i))(vu||{});const Fv={0:"assets/objs/optical_table.obj"};function kv(i){i.traverse(t=>{if(t.isMesh){const e=t;e.material||(e.material=new $h({color:8947848}))}})}function Bv(i,t){const e=i.textFiles.get(t);let n=null;return e&&(n=new Ov().parse(e),kv(n)),n}function zv(i){let t=new Map;const e=[vu.OpticalTable];for(const r of e){var n=Bv(i,Fv[r]);n&&t.set(r,n)}return t}class Hv extends Zn{constructor(t){super(t)}load(t,e,n,r){const s=this,a=new ma(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(s.parse(o))}catch(l){r?r(l):console.error(l),s.manager.itemError(t)}},n,r)}parse(t){function e(c){const d=new DataView(c),u=32/8*3+32/8*3*3+16/8,p=d.getUint32(80,!0);if(80+32/8+p*u===d.byteLength)return!0;const g=[115,111,108,105,100];for(let _=0;_<5;_++)if(n(g,d,_))return!1;return!0}function n(c,d,u){for(let p=0,f=c.length;p<f;p++)if(c[p]!==d.getUint8(u+p))return!1;return!0}function r(c){const d=new DataView(c),u=d.getUint32(80,!0);let p,f,g,_=!1,m,h,x,M,S;for(let B=0;B<70;B++)d.getUint32(B,!1)==1129270351&&d.getUint8(B+4)==82&&d.getUint8(B+5)==61&&(_=!0,m=new Float32Array(u*3*3),h=d.getUint8(B+6)/255,x=d.getUint8(B+7)/255,M=d.getUint8(B+8)/255,S=d.getUint8(B+9)/255);const R=84,L=12*4+2,P=new We,N=new Float32Array(u*3*3),E=new Float32Array(u*3*3),w=new le;for(let B=0;B<u;B++){const C=R+B*L,z=d.getFloat32(C,!0),y=d.getFloat32(C+4,!0),V=d.getFloat32(C+8,!0);if(_){const W=d.getUint16(C+48,!0);W&32768?(p=h,f=x,g=M):(p=(W&31)/31,f=(W>>5&31)/31,g=(W>>10&31)/31)}for(let W=1;W<=3;W++){const q=C+W*12,J=B*3*3+(W-1)*3;N[J]=d.getFloat32(q,!0),N[J+1]=d.getFloat32(q+4,!0),N[J+2]=d.getFloat32(q+8,!0),E[J]=z,E[J+1]=y,E[J+2]=V,_&&(w.setRGB(p,f,g,De),m[J]=w.r,m[J+1]=w.g,m[J+2]=w.b)}}return P.setAttribute("position",new un(N,3)),P.setAttribute("normal",new un(E,3)),_&&(P.setAttribute("color",new un(m,3)),P.hasColors=!0,P.alpha=S),P}function s(c){const d=new We,u=/solid([\s\S]*?)endsolid/g,p=/facet([\s\S]*?)endfacet/g,f=/solid\s(.+)/;let g=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+_+_+_,"g"),h=new RegExp("normal"+_+_+_,"g"),x=[],M=[],S=[],R=new K;let L,P=0,N=0,E=0;for(;(L=u.exec(c))!==null;){N=E;const w=L[0],B=(L=f.exec(w))!==null?L[1]:"";for(S.push(B);(L=p.exec(w))!==null;){let y=0,V=0;const W=L[0];for(;(L=h.exec(W))!==null;)R.x=parseFloat(L[1]),R.y=parseFloat(L[2]),R.z=parseFloat(L[3]),V++;for(;(L=m.exec(W))!==null;)x.push(parseFloat(L[1]),parseFloat(L[2]),parseFloat(L[3])),M.push(R.x,R.y,R.z),y++,E++;V!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),y!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const C=N,z=E-N;d.userData.groupNames=S,d.addGroup(C,z,P),P++}return d.setAttribute("position",new Se(x,3)),d.setAttribute("normal",new Se(M,3)),d}function a(c){return typeof c!="string"?new TextDecoder().decode(c):c}function o(c){if(typeof c=="string"){const d=new Uint8Array(c.length);for(let u=0;u<c.length;u++)d[u]=c.charCodeAt(u)&255;return d.buffer||d}else return c}const l=o(t);return e(l)?r(l):s(a(t))}}class uh extends l0{constructor(t){super(t)}parse(t){function e(W){switch(W.image_type){case p:case _:if(W.colormap_length>256||W.colormap_size!==24||W.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case f:case g:case m:case h:if(W.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+W.image_type)}if(W.width<=0||W.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(W.pixel_size!==8&&W.pixel_size!==16&&W.pixel_size!==24&&W.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+W.pixel_size)}function n(W,q,J,Q,pt){let j,Z;const vt=J.pixel_size>>3,X=J.width*J.height*vt;if(q&&(Z=pt.subarray(Q,Q+=J.colormap_length*(J.colormap_size>>3))),W){j=new Uint8Array(X);let Y,ct,ft,yt=0;const Tt=new Uint8Array(vt);for(;yt<X;)if(Y=pt[Q++],ct=(Y&127)+1,Y&128){for(ft=0;ft<vt;++ft)Tt[ft]=pt[Q++];for(ft=0;ft<ct;++ft)j.set(Tt,yt+ft*vt);yt+=vt*ct}else{for(ct*=vt,ft=0;ft<ct;++ft)j[yt+ft]=pt[Q++];yt+=ct}}else j=pt.subarray(Q,Q+=q?J.width*J.height:X);return{pixel_data:j,palettes:Z}}function r(W,q,J,Q,pt,j,Z,vt,X){const Y=X;let ct,ft=0,yt,Tt;const zt=w.width;for(Tt=q;Tt!==Q;Tt+=J)for(yt=pt;yt!==Z;yt+=j,ft++)ct=vt[ft],W[(yt+zt*Tt)*4+3]=255,W[(yt+zt*Tt)*4+2]=Y[ct*3+0],W[(yt+zt*Tt)*4+1]=Y[ct*3+1],W[(yt+zt*Tt)*4+0]=Y[ct*3+2];return W}function s(W,q,J,Q,pt,j,Z,vt){let X,Y=0,ct,ft;const yt=w.width;for(ft=q;ft!==Q;ft+=J)for(ct=pt;ct!==Z;ct+=j,Y+=2)X=vt[Y+0]+(vt[Y+1]<<8),W[(ct+yt*ft)*4+0]=(X&31744)>>7,W[(ct+yt*ft)*4+1]=(X&992)>>2,W[(ct+yt*ft)*4+2]=(X&31)<<3,W[(ct+yt*ft)*4+3]=X&32768?0:255;return W}function a(W,q,J,Q,pt,j,Z,vt){let X=0,Y,ct;const ft=w.width;for(ct=q;ct!==Q;ct+=J)for(Y=pt;Y!==Z;Y+=j,X+=3)W[(Y+ft*ct)*4+3]=255,W[(Y+ft*ct)*4+2]=vt[X+0],W[(Y+ft*ct)*4+1]=vt[X+1],W[(Y+ft*ct)*4+0]=vt[X+2];return W}function o(W,q,J,Q,pt,j,Z,vt){let X=0,Y,ct;const ft=w.width;for(ct=q;ct!==Q;ct+=J)for(Y=pt;Y!==Z;Y+=j,X+=4)W[(Y+ft*ct)*4+2]=vt[X+0],W[(Y+ft*ct)*4+1]=vt[X+1],W[(Y+ft*ct)*4+0]=vt[X+2],W[(Y+ft*ct)*4+3]=vt[X+3];return W}function l(W,q,J,Q,pt,j,Z,vt){let X,Y=0,ct,ft;const yt=w.width;for(ft=q;ft!==Q;ft+=J)for(ct=pt;ct!==Z;ct+=j,Y++)X=vt[Y],W[(ct+yt*ft)*4+0]=X,W[(ct+yt*ft)*4+1]=X,W[(ct+yt*ft)*4+2]=X,W[(ct+yt*ft)*4+3]=255;return W}function c(W,q,J,Q,pt,j,Z,vt){let X=0,Y,ct;const ft=w.width;for(ct=q;ct!==Q;ct+=J)for(Y=pt;Y!==Z;Y+=j,X+=2)W[(Y+ft*ct)*4+0]=vt[X+0],W[(Y+ft*ct)*4+1]=vt[X+0],W[(Y+ft*ct)*4+2]=vt[X+0],W[(Y+ft*ct)*4+3]=vt[X+1];return W}function d(W,q,J,Q,pt){let j,Z,vt,X,Y,ct;switch((w.flags&x)>>M){default:case L:j=0,vt=1,Y=q,Z=0,X=1,ct=J;break;case S:j=0,vt=1,Y=q,Z=J-1,X=-1,ct=-1;break;case P:j=q-1,vt=-1,Y=-1,Z=0,X=1,ct=J;break;case R:j=q-1,vt=-1,Y=-1,Z=J-1,X=-1,ct=-1;break}if(z)switch(w.pixel_size){case 8:l(W,Z,X,ct,j,vt,Y,Q);break;case 16:c(W,Z,X,ct,j,vt,Y,Q);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(w.pixel_size){case 8:r(W,Z,X,ct,j,vt,Y,Q,pt);break;case 16:s(W,Z,X,ct,j,vt,Y,Q);break;case 24:a(W,Z,X,ct,j,vt,Y,Q);break;case 32:o(W,Z,X,ct,j,vt,Y,Q);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return W}const u=0,p=1,f=2,g=3,_=9,m=10,h=11,x=48,M=4,S=0,R=1,L=2,P=3;if(t.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let N=0;const E=new Uint8Array(t),w={id_length:E[N++],colormap_type:E[N++],image_type:E[N++],colormap_index:E[N++]|E[N++]<<8,colormap_length:E[N++]|E[N++]<<8,colormap_size:E[N++],origin:[E[N++]|E[N++]<<8,E[N++]|E[N++]<<8],width:E[N++]|E[N++]<<8,height:E[N++]|E[N++]<<8,pixel_size:E[N++],flags:E[N++]};if(e(w),w.id_length+N>t.length)throw new Error("THREE.TGALoader: No data.");N+=w.id_length;let B=!1,C=!1,z=!1;switch(w.image_type){case _:B=!0,C=!0;break;case p:C=!0;break;case m:B=!0;break;case f:break;case h:B=!0,z=!0;break;case g:z=!0;break}const y=new Uint8Array(w.width*w.height*4),V=n(B,C,w,N,E);return d(y,w.width,w.height,V.pixel_data,V.palettes),{data:y,width:w.width,height:w.height,flipY:!0,generateMipmaps:!0,minFilter:Wn}}}class Vv extends Zn{load(t,e,n,r){const s=this,a=s.path===""?su.extractUrlBase(t):s.path,o=new ma(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(t,function(l){try{e(s.parse(l,a))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},n,r)}parse(t,e){function n(A,T){const U=[],I=A.childNodes;for(let k=0,dt=I.length;k<dt;k++){const gt=I[k];gt.nodeName===T&&U.push(gt)}return U}function r(A){if(A.length===0)return[];const T=A.trim().split(/\s+/),U=new Array(T.length);for(let I=0,k=T.length;I<k;I++)U[I]=T[I];return U}function s(A){if(A.length===0)return[];const T=A.trim().split(/\s+/),U=new Array(T.length);for(let I=0,k=T.length;I<k;I++)U[I]=parseFloat(T[I]);return U}function a(A){if(A.length===0)return[];const T=A.trim().split(/\s+/),U=new Array(T.length);for(let I=0,k=T.length;I<k;I++)U[I]=parseInt(T[I]);return U}function o(A){return A.substring(1)}function l(){return"three_default_"+Mu++}function c(A){return Object.keys(A).length===0}function d(A){return{unit:u(n(A,"unit")[0]),upAxis:p(n(A,"up_axis")[0])}}function u(A){return A!==void 0&&A.hasAttribute("meter")===!0?parseFloat(A.getAttribute("meter")):1}function p(A){return A!==void 0?A.textContent:"Y_UP"}function f(A,T,U,I){const k=n(A,T)[0];if(k!==void 0){const dt=n(k,U);for(let gt=0;gt<dt.length;gt++)I(dt[gt])}}function g(A,T){for(const U in A){const I=A[U];I.build=T(A[U])}}function _(A,T){return A.build!==void 0||(A.build=T(A)),A.build}function m(A){const T={sources:{},samplers:{},channels:{}};let U=!1;for(let I=0,k=A.childNodes.length;I<k;I++){const dt=A.childNodes[I];if(dt.nodeType!==1)continue;let gt;switch(dt.nodeName){case"source":gt=dt.getAttribute("id"),T.sources[gt]=mt(dt);break;case"sampler":gt=dt.getAttribute("id"),T.samplers[gt]=h(dt);break;case"channel":gt=dt.getAttribute("target"),T.channels[gt]=x(dt);break;case"animation":m(dt),U=!0;break;default:console.log(dt)}}U===!1&&($t.animations[A.getAttribute("id")||Ei.generateUUID()]=T)}function h(A){const T={inputs:{}};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const dt=o(k.getAttribute("source")),gt=k.getAttribute("semantic");T.inputs[gt]=dt;break}}return T}function x(A){const T={};let I=A.getAttribute("target").split("/");const k=I.shift();let dt=I.shift();const gt=dt.indexOf("(")!==-1,Bt=dt.indexOf(".")!==-1;if(Bt)I=dt.split("."),dt=I.shift(),T.member=I.shift();else if(gt){const Ct=dt.split("(");dt=Ct.shift();for(let Ot=0;Ot<Ct.length;Ot++)Ct[Ot]=parseInt(Ct[Ot].replace(/\)/,""));T.indices=Ct}return T.id=k,T.sid=dt,T.arraySyntax=gt,T.memberSyntax=Bt,T.sampler=o(A.getAttribute("source")),T}function M(A){const T=[],U=A.channels,I=A.samplers,k=A.sources;for(const dt in U)if(U.hasOwnProperty(dt)){const gt=U[dt],Bt=I[gt.sampler],Ct=Bt.inputs.INPUT,Ot=Bt.inputs.OUTPUT,qt=k[Ct],Et=k[Ot],jt=R(gt,qt,Et);w(jt,T)}return T}function S(A){return _($t.animations[A],M)}function R(A,T,U){const I=$t.nodes[A.id],k=Ne(I.id),dt=I.transforms[A.sid],gt=I.matrix.clone().transpose();let Bt,Ct,Ot,qt,Et,jt;const Ht={};switch(dt){case"matrix":for(Ot=0,qt=T.array.length;Ot<qt;Ot++)if(Bt=T.array[Ot],Ct=Ot*U.stride,Ht[Bt]===void 0&&(Ht[Bt]={}),A.arraySyntax===!0){const Le=U.array[Ct],we=A.indices[0]+4*A.indices[1];Ht[Bt][we]=Le}else for(Et=0,jt=U.stride;Et<jt;Et++)Ht[Bt][Et]=U.array[Ct+Et];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',dt);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',dt);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',dt);break}const Kt=L(Ht,gt);return{name:k.uuid,keyframes:Kt}}function L(A,T){const U=[];for(const k in A)U.push({time:parseFloat(k),value:A[k]});U.sort(I);for(let k=0;k<16;k++)B(U,k,T.elements[k]);return U;function I(k,dt){return k.time-dt.time}}const P=new K,N=new K,E=new En;function w(A,T){const U=A.keyframes,I=A.name,k=[],dt=[],gt=[],Bt=[];for(let Ct=0,Ot=U.length;Ct<Ot;Ct++){const qt=U[Ct],Et=qt.time,jt=qt.value;tt.fromArray(jt).transpose(),tt.decompose(P,E,N),k.push(Et),dt.push(P.x,P.y,P.z),gt.push(E.x,E.y,E.z,E.w),Bt.push(N.x,N.y,N.z)}return dt.length>0&&T.push(new xr(I+".position",k,dt)),gt.length>0&&T.push(new Jr(I+".quaternion",k,gt)),Bt.length>0&&T.push(new xr(I+".scale",k,Bt)),T}function B(A,T,U){let I,k=!0,dt,gt;for(dt=0,gt=A.length;dt<gt;dt++)I=A[dt],I.value[T]===void 0?I.value[T]=null:k=!1;if(k===!0)for(dt=0,gt=A.length;dt<gt;dt++)I=A[dt],I.value[T]=U;else C(A,T)}function C(A,T){let U,I;for(let k=0,dt=A.length;k<dt;k++){const gt=A[k];if(gt.value[T]===null){if(U=z(A,k,T),I=y(A,k,T),U===null){gt.value[T]=I.value[T];continue}if(I===null){gt.value[T]=U.value[T];continue}V(gt,U,I,T)}}}function z(A,T,U){for(;T>=0;){const I=A[T];if(I.value[U]!==null)return I;T--}return null}function y(A,T,U){for(;T<A.length;){const I=A[T];if(I.value[U]!==null)return I;T++}return null}function V(A,T,U,I){if(U.time-T.time===0){A.value[I]=T.value[I];return}A.value[I]=(A.time-T.time)*(U.value[I]-T.value[I])/(U.time-T.time)+T.value[I]}function W(A){const T={name:A.getAttribute("id")||"default",start:parseFloat(A.getAttribute("start")||0),end:parseFloat(A.getAttribute("end")||0),animations:[]};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"instance_animation":T.animations.push(o(k.getAttribute("url")));break}}$t.clips[A.getAttribute("id")]=T}function q(A){const T=[],U=A.name,I=A.end-A.start||-1,k=A.animations;for(let dt=0,gt=k.length;dt<gt;dt++){const Bt=S(k[dt]);for(let Ct=0,Ot=Bt.length;Ct<Ot;Ct++)T.push(Bt[Ct])}return new Hc(U,I,T)}function J(A){return _($t.clips[A],q)}function Q(A){const T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"skin":T.id=o(k.getAttribute("source")),T.skin=pt(k);break;case"morph":T.id=o(k.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}$t.controllers[A.getAttribute("id")]=T}function pt(A){const T={sources:{}};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"bind_shape_matrix":T.bindShapeMatrix=s(k.textContent);break;case"source":const dt=k.getAttribute("id");T.sources[dt]=mt(k);break;case"joints":T.joints=j(k);break;case"vertex_weights":T.vertexWeights=Z(k);break}}return T}function j(A){const T={inputs:{}};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const dt=k.getAttribute("semantic"),gt=o(k.getAttribute("source"));T.inputs[dt]=gt;break}}return T}function Z(A){const T={inputs:{}};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const dt=k.getAttribute("semantic"),gt=o(k.getAttribute("source")),Bt=parseInt(k.getAttribute("offset"));T.inputs[dt]={id:gt,offset:Bt};break;case"vcount":T.vcount=a(k.textContent);break;case"v":T.v=a(k.textContent);break}}return T}function vt(A){const T={id:A.id},U=$t.geometries[T.id];return A.skin!==void 0&&(T.skin=X(A.skin),U.sources.skinIndices=T.skin.indices,U.sources.skinWeights=T.skin.weights),T}function X(A){const U={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},I=A.sources,k=A.vertexWeights,dt=k.vcount,gt=k.v,Bt=k.inputs.JOINT.offset,Ct=k.inputs.WEIGHT.offset,Ot=A.sources[A.joints.inputs.JOINT],qt=A.sources[A.joints.inputs.INV_BIND_MATRIX],Et=I[k.inputs.WEIGHT.id].array;let jt=0,Ht,Kt,Yt;for(Ht=0,Yt=dt.length;Ht<Yt;Ht++){const we=dt[Ht],xe=[];for(Kt=0;Kt<we;Kt++){const ye=gt[jt+Bt],Nn=gt[jt+Ct],en=Et[Nn];xe.push({index:ye,weight:en}),jt+=2}for(xe.sort(Le),Kt=0;Kt<4;Kt++){const ye=xe[Kt];ye!==void 0?(U.indices.array.push(ye.index),U.weights.array.push(ye.weight)):(U.indices.array.push(0),U.weights.array.push(0))}}for(A.bindShapeMatrix?U.bindMatrix=new se().fromArray(A.bindShapeMatrix).transpose():U.bindMatrix=new se().identity(),Ht=0,Yt=Ot.array.length;Ht<Yt;Ht++){const we=Ot.array[Ht],xe=new se().fromArray(qt.array,Ht*qt.stride).transpose();U.joints.push({name:we,boneInverse:xe})}return U;function Le(we,xe){return xe.weight-we.weight}}function Y(A){return _($t.controllers[A],vt)}function ct(A){const T={init_from:n(A,"init_from")[0].textContent};$t.images[A.getAttribute("id")]=T}function ft(A){return A.build!==void 0?A.build:A.init_from}function yt(A){const T=$t.images[A];return T!==void 0?_(T,ft):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",A),null)}function Tt(A){const T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"profile_COMMON":T.profile=zt(k);break}}$t.effects[A.getAttribute("id")]=T}function zt(A){const T={surfaces:{},samplers:{}};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"newparam":Jt(k,T);break;case"technique":T.technique=v(k);break;case"extra":T.extra=ot(k);break}}return T}function Jt(A,T){const U=A.getAttribute("sid");for(let I=0,k=A.childNodes.length;I<k;I++){const dt=A.childNodes[I];if(dt.nodeType===1)switch(dt.nodeName){case"surface":T.surfaces[U]=te(dt);break;case"sampler2D":T.samplers[U]=me(dt);break}}}function te(A){const T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"init_from":T.init_from=k.textContent;break}}return T}function me(A){const T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"source":T.source=k.textContent;break}}return T}function v(A){const T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"constant":case"lambert":case"blinn":case"phong":T.type=k.nodeName,T.parameters=_t(k);break;case"extra":T.extra=ot(k);break}}return T}function _t(A){const T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":T[k.nodeName]=st(k);break;case"transparent":T[k.nodeName]={opaque:k.hasAttribute("opaque")?k.getAttribute("opaque"):"A_ONE",data:st(k)};break}}return T}function st(A){const T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"color":T[k.nodeName]=s(k.textContent);break;case"float":T[k.nodeName]=parseFloat(k.textContent);break;case"texture":T[k.nodeName]={id:k.getAttribute("texture"),extra:H(k)};break}}return T}function H(A){const T={technique:{}};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"extra":F(k,T);break}}return T}function F(A,T){for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"technique":$(k,T);break}}}function $(A,T){for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":T.technique[k.nodeName]=parseFloat(k.textContent);break;case"wrapU":case"wrapV":k.textContent.toUpperCase()==="TRUE"?T.technique[k.nodeName]=1:k.textContent.toUpperCase()==="FALSE"?T.technique[k.nodeName]=0:T.technique[k.nodeName]=parseInt(k.textContent);break;case"bump":T[k.nodeName]=b(k);break}}}function ot(A){const T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"technique":T.technique=D(k);break}}return T}function D(A){const T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"double_sided":T[k.nodeName]=parseInt(k.textContent);break;case"bump":T[k.nodeName]=b(k);break}}return T}function b(A){const T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"texture":T[k.nodeName]={id:k.getAttribute("texture"),texcoord:k.getAttribute("texcoord"),extra:H(k)};break}}return T}function G(A){return A}function rt(A){return _($t.effects[A],G)}function nt(A){const T={name:A.getAttribute("name")};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"instance_effect":T.url=o(k.getAttribute("url"));break}}$t.materials[A.getAttribute("id")]=T}function at(A){let T,U=A.slice((A.lastIndexOf(".")-1>>>0)+2);switch(U=U.toLowerCase(),U){case"tga":T=dn;break;default:T=xn}return T}function At(A){const T=rt(A.url),U=T.profile.technique;let I;switch(U.type){case"phong":case"blinn":I=new ur;break;case"lambert":I=new $g;break;default:I=new jr;break}I.name=A.name||"";function k(Ct,Ot=null){const qt=T.profile.samplers[Ct.id];let Et=null;if(qt!==void 0){const jt=T.profile.surfaces[qt.source];Et=yt(jt.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),Et=yt(Ct.id);if(Et!==null){const jt=at(Et);if(jt!==void 0){const Ht=jt.load(Et),Kt=Ct.extra;if(Kt!==void 0&&Kt.technique!==void 0&&c(Kt.technique)===!1){const Yt=Kt.technique;Ht.wrapS=Yt.wrapU?Gn:Mn,Ht.wrapT=Yt.wrapV?Gn:Mn,Ht.offset.set(Yt.offsetU||0,Yt.offsetV||0),Ht.repeat.set(Yt.repeatU||1,Yt.repeatV||1)}else Ht.wrapS=Gn,Ht.wrapT=Gn;return Ot!==null&&(Ht.colorSpace=Ot),Ht}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",Et),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",Ct.id),null}const dt=U.parameters;for(const Ct in dt){const Ot=dt[Ct];switch(Ct){case"diffuse":Ot.color&&I.color.fromArray(Ot.color),Ot.texture&&(I.map=k(Ot.texture,De));break;case"specular":Ot.color&&I.specular&&I.specular.fromArray(Ot.color),Ot.texture&&(I.specularMap=k(Ot.texture));break;case"bump":Ot.texture&&(I.normalMap=k(Ot.texture));break;case"ambient":Ot.texture&&(I.lightMap=k(Ot.texture,De));break;case"shininess":Ot.float&&I.shininess&&(I.shininess=Ot.float);break;case"emission":Ot.color&&I.emissive&&I.emissive.fromArray(Ot.color),Ot.texture&&(I.emissiveMap=k(Ot.texture,De));break}}pe.toWorkingColorSpace(I.color,De),I.specular&&pe.toWorkingColorSpace(I.specular,De),I.emissive&&pe.toWorkingColorSpace(I.emissive,De);let gt=dt.transparent,Bt=dt.transparency;if(Bt===void 0&&gt&&(Bt={float:1}),gt===void 0&&Bt&&(gt={opaque:"A_ONE",data:{color:[1,1,1,1]}}),gt&&Bt)if(gt.data.texture)I.transparent=!0;else{const Ct=gt.data.color;switch(gt.opaque){case"A_ONE":I.opacity=Ct[3]*Bt.float;break;case"RGB_ZERO":I.opacity=1-Ct[0]*Bt.float;break;case"A_ZERO":I.opacity=1-Ct[3]*Bt.float;break;case"RGB_ONE":I.opacity=Ct[0]*Bt.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',gt.opaque)}I.opacity<1&&(I.transparent=!0)}if(U.extra!==void 0&&U.extra.technique!==void 0){const Ct=U.extra.technique;for(const Ot in Ct){const qt=Ct[Ot];switch(Ot){case"double_sided":I.side=qt===1?Pn:qn;break;case"bump":I.normalMap=k(qt.texture),I.normalScale=new ne(1,1);break}}}return I}function St(A){return _($t.materials[A],At)}function Rt(A){const T={name:A.getAttribute("name")};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"optics":T.optics=ce(k);break}}$t.cameras[A.getAttribute("id")]=T}function ce(A){for(let T=0;T<A.childNodes.length;T++){const U=A.childNodes[T];switch(U.nodeName){case"technique_common":return Mt(U)}}return{}}function Mt(A){const T={};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];switch(I.nodeName){case"perspective":case"orthographic":T.technique=I.nodeName,T.parameters=Ft(I);break}}return T}function Ft(A){const T={};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];switch(I.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":T[I.nodeName]=parseFloat(I.textContent);break}}return T}function Nt(A){let T;switch(A.optics.technique){case"perspective":T=new Ye(A.optics.parameters.yfov,A.optics.parameters.aspect_ratio,A.optics.parameters.znear,A.optics.parameters.zfar);break;case"orthographic":let U=A.optics.parameters.ymag,I=A.optics.parameters.xmag;const k=A.optics.parameters.aspect_ratio;I=I===void 0?U*k:I,U=U===void 0?I/k:U,I*=.5,U*=.5,T=new ul(-I,I,U,-U,A.optics.parameters.znear,A.optics.parameters.zfar);break;default:T=new Ye;break}return T.name=A.name||"",T}function Zt(A){const T=$t.cameras[A];return T!==void 0?_(T,Nt):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",A),null)}function kt(A){let T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"technique_common":T=ee(k);break}}$t.lights[A.getAttribute("id")]=T}function ee(A){const T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"directional":case"point":case"spot":case"ambient":T.technique=k.nodeName,T.parameters=ie(k)}}return T}function ie(A){const T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"color":const dt=s(k.textContent);T.color=new le().fromArray(dt),pe.toWorkingColorSpace(T.color,De);break;case"falloff_angle":T.falloffAngle=parseFloat(k.textContent);break;case"quadratic_attenuation":const gt=parseFloat(k.textContent);T.distance=gt?Math.sqrt(1/gt):0;break}}return T}function be(A){let T;switch(A.technique){case"directional":T=new iu;break;case"point":T=new d0;break;case"spot":T=new h0;break;case"ambient":T=new ru;break}return A.parameters.color&&T.color.copy(A.parameters.color),A.parameters.distance&&(T.distance=A.parameters.distance),T}function et(A){const T=$t.lights[A];return T!==void 0?_(T,be):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",A),null)}function Pt(A){const T={name:A.getAttribute("name"),sources:{},vertices:{},primitives:[]},U=n(A,"mesh")[0];if(U!==void 0){for(let I=0;I<U.childNodes.length;I++){const k=U.childNodes[I];if(k.nodeType!==1)continue;const dt=k.getAttribute("id");switch(k.nodeName){case"source":T.sources[dt]=mt(k);break;case"vertices":T.vertices=xt(k);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",k.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":T.primitives.push(Lt(k));break;default:console.log(k)}}$t.geometries[A.getAttribute("id")]=T}}function mt(A){const T={array:[],stride:3};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType===1)switch(I.nodeName){case"float_array":T.array=s(I.textContent);break;case"Name_array":T.array=r(I.textContent);break;case"technique_common":const k=n(I,"accessor")[0];k!==void 0&&(T.stride=parseInt(k.getAttribute("stride")));break}}return T}function xt(A){const T={};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];I.nodeType===1&&(T[I.getAttribute("semantic")]=o(I.getAttribute("source")))}return T}function Lt(A){const T={type:A.nodeName,material:A.getAttribute("material"),count:parseInt(A.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const dt=o(k.getAttribute("source")),gt=k.getAttribute("semantic"),Bt=parseInt(k.getAttribute("offset")),Ct=parseInt(k.getAttribute("set")),Ot=Ct>0?gt+Ct:gt;T.inputs[Ot]={id:dt,offset:Bt},T.stride=Math.max(T.stride,Bt+1),gt==="TEXCOORD"&&(T.hasUV=!0);break;case"vcount":T.vcount=a(k.textContent);break;case"p":T.p=a(k.textContent);break}}return T}function Ut(A){const T={};for(let U=0;U<A.length;U++){const I=A[U];T[I.type]===void 0&&(T[I.type]=[]),T[I.type].push(I)}return T}function ae(A){let T=0;for(let U=0,I=A.length;U<I;U++)A[U].hasUV===!0&&T++;T>0&&T<A.length&&(A.uvsNeedsFix=!0)}function Pe(A){const T={},U=A.sources,I=A.vertices,k=A.primitives;if(k.length===0)return{};const dt=Ut(k);for(const gt in dt){const Bt=dt[gt];ae(Bt),T[gt]=ze(Bt,U,I)}return T}function ze(A,T,U){const I={},k={array:[],stride:0},dt={array:[],stride:0},gt={array:[],stride:0},Bt={array:[],stride:0},Ct={array:[],stride:0},Ot={array:[],stride:4},qt={array:[],stride:4},Et=new We,jt=[];let Ht=0;for(let Kt=0;Kt<A.length;Kt++){const Yt=A[Kt],Le=Yt.inputs;let we=0;switch(Yt.type){case"lines":case"linestrips":we=Yt.count*2;break;case"triangles":we=Yt.count*3;break;case"polylist":for(let xe=0;xe<Yt.count;xe++){const ye=Yt.vcount[xe];switch(ye){case 3:we+=3;break;case 4:we+=6;break;default:we+=(ye-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",Yt.type)}Et.addGroup(Ht,we,Kt),Ht+=we,Yt.material&&jt.push(Yt.material);for(const xe in Le){const ye=Le[xe];switch(xe){case"VERTEX":for(const Nn in U){const en=U[Nn];switch(Nn){case"POSITION":const ki=k.array.length;if(he(Yt,T[en],ye.offset,k.array),k.stride=T[en].stride,T.skinWeights&&T.skinIndices&&(he(Yt,T.skinIndices,ye.offset,Ot.array),he(Yt,T.skinWeights,ye.offset,qt.array)),Yt.hasUV===!1&&A.uvsNeedsFix===!0){const Eu=(k.array.length-ki)/k.stride;for(let El=0;El<Eu;El++)gt.array.push(0,0)}break;case"NORMAL":he(Yt,T[en],ye.offset,dt.array),dt.stride=T[en].stride;break;case"COLOR":he(Yt,T[en],ye.offset,Ct.array),Ct.stride=T[en].stride;break;case"TEXCOORD":he(Yt,T[en],ye.offset,gt.array),gt.stride=T[en].stride;break;case"TEXCOORD1":he(Yt,T[en],ye.offset,Bt.array),gt.stride=T[en].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Nn)}}break;case"NORMAL":he(Yt,T[ye.id],ye.offset,dt.array),dt.stride=T[ye.id].stride;break;case"COLOR":he(Yt,T[ye.id],ye.offset,Ct.array,!0),Ct.stride=T[ye.id].stride;break;case"TEXCOORD":he(Yt,T[ye.id],ye.offset,gt.array),gt.stride=T[ye.id].stride;break;case"TEXCOORD1":he(Yt,T[ye.id],ye.offset,Bt.array),Bt.stride=T[ye.id].stride;break}}}return k.array.length>0&&Et.setAttribute("position",new Se(k.array,k.stride)),dt.array.length>0&&Et.setAttribute("normal",new Se(dt.array,dt.stride)),Ct.array.length>0&&Et.setAttribute("color",new Se(Ct.array,Ct.stride)),gt.array.length>0&&Et.setAttribute("uv",new Se(gt.array,gt.stride)),Bt.array.length>0&&Et.setAttribute("uv1",new Se(Bt.array,Bt.stride)),Ot.array.length>0&&Et.setAttribute("skinIndex",new Se(Ot.array,Ot.stride)),qt.array.length>0&&Et.setAttribute("skinWeight",new Se(qt.array,qt.stride)),I.data=Et,I.type=A[0].type,I.materialKeys=jt,I}function he(A,T,U,I,k=!1){const dt=A.p,gt=A.stride,Bt=A.vcount;function Ct(Et){let jt=dt[Et+U]*qt;const Ht=jt+qt;for(;jt<Ht;jt++)I.push(Ot[jt]);if(k){const Kt=I.length-qt-1;mi.setRGB(I[Kt+0],I[Kt+1],I[Kt+2],De),I[Kt+0]=mi.r,I[Kt+1]=mi.g,I[Kt+2]=mi.b}}const Ot=T.array,qt=T.stride;if(A.vcount!==void 0){let Et=0;for(let jt=0,Ht=Bt.length;jt<Ht;jt++){const Kt=Bt[jt];if(Kt===4){const Yt=Et+gt*0,Le=Et+gt*1,we=Et+gt*2,xe=Et+gt*3;Ct(Yt),Ct(Le),Ct(xe),Ct(Le),Ct(we),Ct(xe)}else if(Kt===3){const Yt=Et+gt*0,Le=Et+gt*1,we=Et+gt*2;Ct(Yt),Ct(Le),Ct(we)}else if(Kt>4)for(let Yt=1,Le=Kt-2;Yt<=Le;Yt++){const we=Et+gt*0,xe=Et+gt*Yt,ye=Et+gt*(Yt+1);Ct(we),Ct(xe),Ct(ye)}Et+=gt*Kt}}else for(let Et=0,jt=dt.length;Et<jt;Et+=gt)Ct(Et)}function Qe(A){return _($t.geometries[A],Pe)}function gn(A){const T={name:A.getAttribute("name")||"",joints:{},links:[]};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType===1)switch(I.nodeName){case"technique_common":In(I,T);break}}$t.kinematicsModels[A.getAttribute("id")]=T}function Qr(A){return A.build!==void 0?A.build:A}function ts(A){return _($t.kinematicsModels[A],Qr)}function In(A,T){for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType===1)switch(I.nodeName){case"joint":T.joints[I.getAttribute("sid")]=Er(I);break;case"link":T.links.push(wr(I));break}}}function Er(A){let T;for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType===1)switch(I.nodeName){case"prismatic":case"revolute":T=es(I);break}}return T}function es(A){const T={sid:A.getAttribute("sid"),name:A.getAttribute("name")||"",axis:new K,limits:{min:0,max:0},type:A.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType===1)switch(I.nodeName){case"axis":const k=s(I.textContent);T.axis.fromArray(k);break;case"limits":const dt=I.getElementsByTagName("max")[0],gt=I.getElementsByTagName("min")[0];T.limits.max=parseFloat(dt.textContent),T.limits.min=parseFloat(gt.textContent);break}}return T.limits.min>=T.limits.max&&(T.static=!0),T.middlePosition=(T.limits.min+T.limits.max)/2,T}function wr(A){const T={sid:A.getAttribute("sid"),name:A.getAttribute("name")||"",attachments:[],transforms:[]};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType===1)switch(I.nodeName){case"attachment_full":T.attachments.push(Oi(I));break;case"matrix":case"translate":case"rotate":T.transforms.push(Tr(I));break}}return T}function Oi(A){const T={joint:A.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType===1)switch(I.nodeName){case"link":T.links.push(wr(I));break;case"matrix":case"translate":case"rotate":T.transforms.push(Tr(I));break}}return T}function Tr(A){const T={type:A.nodeName},U=s(A.textContent);switch(T.type){case"matrix":T.obj=new se,T.obj.fromArray(U).transpose();break;case"translate":T.obj=new K,T.obj.fromArray(U);break;case"rotate":T.obj=new K,T.obj.fromArray(U),T.angle=Ei.degToRad(U[3]);break}return T}function Fi(A){const T={name:A.getAttribute("name")||"",rigidBodies:{}};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType===1)switch(I.nodeName){case"rigid_body":T.rigidBodies[I.getAttribute("name")]={},ns(I,T.rigidBodies[I.getAttribute("name")]);break}}$t.physicsModels[A.getAttribute("id")]=T}function ns(A,T){for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType===1)switch(I.nodeName){case"technique_common":is(I,T);break}}}function is(A,T){for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType===1)switch(I.nodeName){case"inertia":T.inertia=s(I.textContent);break;case"mass":T.mass=s(I.textContent)[0];break}}}function va(A){const T={bindJointAxis:[]};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType===1)switch(I.nodeName){case"bind_joint_axis":T.bindJointAxis.push(xa(I));break}}$t.kinematicsScenes[o(A.getAttribute("url"))]=T}function xa(A){const T={target:A.getAttribute("target").split("/").pop()};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType===1)switch(I.nodeName){case"axis":const k=I.getElementsByTagName("param")[0];T.axis=k.textContent;const dt=T.axis.split("inst_").pop().split("axis")[0];T.jointIndex=dt.substring(0,dt.length-1);break}}return T}function ya(A){return A.build!==void 0?A.build:A}function O(A){return _($t.kinematicsScenes[A],ya)}function it(){const A=Object.keys($t.kinematicsModels)[0],T=Object.keys($t.kinematicsScenes)[0],U=Object.keys($t.visualScenes)[0];if(A===void 0||T===void 0)return;const I=ts(A),k=O(T),dt=ge(U),gt=k.bindJointAxis,Bt={};for(let qt=0,Et=gt.length;qt<Et;qt++){const jt=gt[qt],Ht=re.querySelector('[sid="'+jt.target+'"]');if(Ht){const Kt=Ht.parentElement;Ct(jt.jointIndex,Kt)}}function Ct(qt,Et){const jt=Et.getAttribute("name"),Ht=I.joints[qt];dt.traverse(function(Kt){Kt.name===jt&&(Bt[qt]={object:Kt,transforms:ht(Et),joint:Ht,position:Ht.zeroPosition})})}const Ot=new se;Ml={joints:I&&I.joints,getJointValue:function(qt){const Et=Bt[qt];if(Et)return Et.position;console.warn("THREE.ColladaLoader: Joint "+qt+" doesn't exist.")},setJointValue:function(qt,Et){const jt=Bt[qt];if(jt){const Ht=jt.joint;if(Et>Ht.limits.max||Et<Ht.limits.min)console.warn("THREE.ColladaLoader: Joint "+qt+" value "+Et+" outside of limits (min: "+Ht.limits.min+", max: "+Ht.limits.max+").");else if(Ht.static)console.warn("THREE.ColladaLoader: Joint "+qt+" is static.");else{const Kt=jt.object,Yt=Ht.axis,Le=jt.transforms;tt.identity();for(let we=0;we<Le.length;we++){const xe=Le[we];if(xe.sid&&xe.sid.indexOf(qt)!==-1)switch(Ht.type){case"revolute":tt.multiply(Ot.makeRotationAxis(Yt,Ei.degToRad(Et)));break;case"prismatic":tt.multiply(Ot.makeTranslation(Yt.x*Et,Yt.y*Et,Yt.z*Et));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ht.type);break}else switch(xe.type){case"matrix":tt.multiply(xe.obj);break;case"translate":tt.multiply(Ot.makeTranslation(xe.obj.x,xe.obj.y,xe.obj.z));break;case"scale":tt.scale(xe.obj);break;case"rotate":tt.multiply(Ot.makeRotationAxis(xe.obj,xe.angle));break}}Kt.matrix.copy(tt),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Bt[qt].position=Et}}else console.log("THREE.ColladaLoader: "+qt+" does not exist.")}}}function ht(A){const T=[],U=re.querySelector('[id="'+A.id+'"]');for(let I=0;I<U.childNodes.length;I++){const k=U.childNodes[I];if(k.nodeType!==1)continue;let dt,gt;switch(k.nodeName){case"matrix":dt=s(k.textContent);const Bt=new se().fromArray(dt).transpose();T.push({sid:k.getAttribute("sid"),type:k.nodeName,obj:Bt});break;case"translate":case"scale":dt=s(k.textContent),gt=new K().fromArray(dt),T.push({sid:k.getAttribute("sid"),type:k.nodeName,obj:gt});break;case"rotate":dt=s(k.textContent),gt=new K().fromArray(dt);const Ct=Ei.degToRad(dt[3]);T.push({sid:k.getAttribute("sid"),type:k.nodeName,obj:gt,angle:Ct});break}}return T}function ut(A){const T=A.getElementsByTagName("node");for(let U=0;U<T.length;U++){const I=T[U];I.hasAttribute("id")===!1&&I.setAttribute("id",l())}}const tt=new se,wt=new K;function It(A){const T={name:A.getAttribute("name")||"",type:A.getAttribute("type"),id:A.getAttribute("id"),sid:A.getAttribute("sid"),matrix:new se,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType!==1)continue;let k;switch(I.nodeName){case"node":T.nodes.push(I.getAttribute("id")),It(I);break;case"instance_camera":T.instanceCameras.push(o(I.getAttribute("url")));break;case"instance_controller":T.instanceControllers.push(Vt(I));break;case"instance_light":T.instanceLights.push(o(I.getAttribute("url")));break;case"instance_geometry":T.instanceGeometries.push(Vt(I));break;case"instance_node":T.instanceNodes.push(o(I.getAttribute("url")));break;case"matrix":k=s(I.textContent),T.matrix.multiply(tt.fromArray(k).transpose()),T.transforms[I.getAttribute("sid")]=I.nodeName;break;case"translate":k=s(I.textContent),wt.fromArray(k),T.matrix.multiply(tt.makeTranslation(wt.x,wt.y,wt.z)),T.transforms[I.getAttribute("sid")]=I.nodeName;break;case"rotate":k=s(I.textContent);const dt=Ei.degToRad(k[3]);T.matrix.multiply(tt.makeRotationAxis(wt.fromArray(k),dt)),T.transforms[I.getAttribute("sid")]=I.nodeName;break;case"scale":k=s(I.textContent),T.matrix.scale(wt.fromArray(k)),T.transforms[I.getAttribute("sid")]=I.nodeName;break;case"extra":break;default:console.log(I)}}return Te(T.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",T.id):$t.nodes[T.id]=T,T}function Vt(A){const T={id:o(A.getAttribute("url")),materials:{},skeletons:[]};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];switch(I.nodeName){case"bind_material":const k=I.getElementsByTagName("instance_material");for(let dt=0;dt<k.length;dt++){const gt=k[dt],Bt=gt.getAttribute("symbol"),Ct=gt.getAttribute("target");T.materials[Bt]=o(Ct)}break;case"skeleton":T.skeletons.push(o(I.textContent));break}}return T}function Gt(A,T){const U=[],I=[];let k,dt,gt;for(k=0;k<A.length;k++){const Ot=A[k];let qt;if(Te(Ot))qt=Ne(Ot),Qt(qt,T,U);else if(vn(Ot)){const jt=$t.visualScenes[Ot].children;for(let Ht=0;Ht<jt.length;Ht++){const Kt=jt[Ht];if(Kt.type==="JOINT"){const Yt=Ne(Kt.id);Qt(Yt,T,U)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Ot)}for(k=0;k<T.length;k++)for(dt=0;dt<U.length;dt++)if(gt=U[dt],gt.bone.name===T[k].name){I[k]=gt,gt.processed=!0;break}for(k=0;k<U.length;k++)gt=U[k],gt.processed===!1&&(I.push(gt),gt.processed=!0);const Bt=[],Ct=[];for(k=0;k<I.length;k++)gt=I[k],Bt.push(gt.bone),Ct.push(gt.boneInverse);return new fl(Bt,Ct)}function Qt(A,T,U){A.traverse(function(I){if(I.isBone===!0){let k;for(let dt=0;dt<T.length;dt++){const gt=T[dt];if(gt.name===I.name){k=gt.boneInverse;break}}k===void 0&&(k=new se),U.push({bone:I,boneInverse:k,processed:!1})}})}function oe(A){const T=[],U=A.matrix,I=A.nodes,k=A.type,dt=A.instanceCameras,gt=A.instanceControllers,Bt=A.instanceLights,Ct=A.instanceGeometries,Ot=A.instanceNodes;for(let Et=0,jt=I.length;Et<jt;Et++)T.push(Ne(I[Et]));for(let Et=0,jt=dt.length;Et<jt;Et++){const Ht=Zt(dt[Et]);Ht!==null&&T.push(Ht.clone())}for(let Et=0,jt=gt.length;Et<jt;Et++){const Ht=gt[Et],Kt=Y(Ht.id),Yt=Qe(Kt.id),Le=Ee(Yt,Ht.materials),we=Ht.skeletons,xe=Kt.skin.joints,ye=Gt(we,xe);for(let Nn=0,en=Le.length;Nn<en;Nn++){const ki=Le[Nn];ki.isSkinnedMesh&&(ki.bind(ye,Kt.skin.bindMatrix),ki.normalizeSkinWeights()),T.push(ki)}}for(let Et=0,jt=Bt.length;Et<jt;Et++){const Ht=et(Bt[Et]);Ht!==null&&T.push(Ht.clone())}for(let Et=0,jt=Ct.length;Et<jt;Et++){const Ht=Ct[Et],Kt=Qe(Ht.id),Yt=Ee(Kt,Ht.materials);for(let Le=0,we=Yt.length;Le<we;Le++)T.push(Yt[Le])}for(let Et=0,jt=Ot.length;Et<jt;Et++)T.push(Ne(Ot[Et]).clone());let qt;if(I.length===0&&T.length===1)qt=T[0];else{qt=k==="JOINT"?new Yh:new Ti;for(let Et=0;Et<T.length;Et++)qt.add(T[Et])}return qt.name=k==="JOINT"?A.sid:A.name,qt.matrix.copy(U),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt}const Wt=new jr({name:Zn.DEFAULT_MATERIAL_NAME,color:16711935});function _e(A,T){const U=[];for(let I=0,k=A.length;I<k;I++){const dt=T[A[I]];dt===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",A[I]),U.push(Wt)):U.push(St(dt))}return U}function Ee(A,T){const U=[];for(const I in A){const k=A[I],dt=_e(k.materialKeys,T);if(dt.length===0&&(I==="lines"||I==="linestrips"?dt.push(new Ci):dt.push(new ur)),I==="lines"||I==="linestrips")for(let Ot=0,qt=dt.length;Ot<qt;Ot++){const Et=dt[Ot];if(Et.isMeshPhongMaterial===!0||Et.isMeshLambertMaterial===!0){const jt=new Ci;jt.color.copy(Et.color),jt.opacity=Et.opacity,jt.transparent=Et.transparent,dt[Ot]=jt}}const gt=k.data.attributes.skinIndex!==void 0,Bt=dt.length===1?dt[0]:dt;let Ct;switch(I){case"lines":Ct=new ia(k.data,Bt);break;case"linestrips":Ct=new Kh(k.data,Bt);break;case"triangles":case"polylist":gt?Ct=new qg(k.data,Bt):Ct=new Oe(k.data,Bt);break}U.push(Ct)}return U}function Te(A){return $t.nodes[A]!==void 0}function Ne(A){return _($t.nodes[A],oe)}function ve(A){const T={name:A.getAttribute("name"),children:[]};ut(A);const U=n(A,"node");for(let I=0;I<U.length;I++)T.children.push(It(U[I]));$t.visualScenes[A.getAttribute("id")]=T}function Xt(A){const T=new Ti;T.name=A.name;const U=A.children;for(let I=0;I<U.length;I++){const k=U[I];T.add(Ne(k.id))}return T}function vn(A){return $t.visualScenes[A]!==void 0}function ge(A){return _($t.visualScenes[A],Xt)}function an(A){const T=n(A,"instance_visual_scene")[0];return ge(o(T.getAttribute("url")))}function Kn(){const A=$t.clips;if(c(A)===!0){if(c($t.animations)===!1){const T=[];for(const U in $t.animations){const I=S(U);for(let k=0,dt=I.length;k<dt;k++)T.push(I[k])}rs.push(new Hc("default",-1,T))}}else for(const T in A)rs.push(J(T))}function Ze(A){let T="";const U=[A];for(;U.length;){const I=U.shift();I.nodeType===Node.TEXT_NODE?T+=I.textContent:(T+=`
`,U.push.apply(U,I.childNodes))}return T.trim()}if(t.length===0)return{scene:new qh};const $n=new DOMParser().parseFromString(t,"application/xml"),re=n($n,"COLLADA")[0],tn=$n.getElementsByTagName("parsererror")[0];if(tn!==void 0){const A=n(tn,"div")[0];let T;return A?T=A.textContent:T=Ze(tn),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,T),null}const pi=re.getAttribute("version");console.debug("THREE.ColladaLoader: File version",pi);const Ke=d(n(re,"asset")[0]),xn=new nu(this.manager);xn.setPath(this.resourcePath||e).setCrossOrigin(this.crossOrigin);let dn;uh&&(dn=new uh(this.manager),dn.setPath(this.resourcePath||e));const mi=new le,rs=[];let Ml={},Mu=0;const $t={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};f(re,"library_animations","animation",m),f(re,"library_animation_clips","animation_clip",W),f(re,"library_controllers","controller",Q),f(re,"library_images","image",ct),f(re,"library_effects","effect",Tt),f(re,"library_materials","material",nt),f(re,"library_cameras","camera",Rt),f(re,"library_lights","light",kt),f(re,"library_geometries","geometry",Pt),f(re,"library_nodes","node",It),f(re,"library_visual_scenes","visual_scene",ve),f(re,"library_kinematics_models","kinematics_model",gn),f(re,"library_physics_models","physics_model",Fi),f(re,"scene","instance_kinematics_scene",va),g($t.animations,M),g($t.clips,q),g($t.controllers,vt),g($t.images,ft),g($t.effects,G),g($t.materials,At),g($t.cameras,Nt),g($t.lights,be),g($t.geometries,Pe),g($t.visualScenes,Xt),Kn(),it();const ss=an(n(re,"scene")[0]);return ss.animations=rs,Ke.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),ss.rotation.set(-Math.PI/2,0,0)),ss.scale.multiplyScalar(Ke.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),rs},kinematics:Ml,library:$t,scene:ss}}}const dh=new K,Gv=new sn,Vs=new se,ri=new se,Gs=new En,Ws=new K(1,1,1),Xs=new K;class ga extends Ie{constructor(...t){super(...t),this.urdfNode=null,this.urdfName=""}copy(t,e){return super.copy(t,e),this.urdfNode=t.urdfNode,this.urdfName=t.urdfName,this}}class Wv extends ga{constructor(...t){super(...t),this.isURDFCollider=!0,this.type="URDFCollider"}}class Xv extends ga{constructor(...t){super(...t),this.isURDFVisual=!0,this.type="URDFVisual"}}class xu extends ga{constructor(...t){super(...t),this.isURDFLink=!0,this.type="URDFLink"}}class yu extends ga{get jointType(){return this._jointType}set jointType(t){if(this.jointType!==t)switch(this._jointType=t,this.matrixWorldNeedsUpdate=!0,t){case"fixed":this.jointValue=[];break;case"continuous":case"revolute":case"prismatic":this.jointValue=new Array(1).fill(0);break;case"planar":this.jointValue=new Array(3).fill(0),this.axis=new K(0,0,1);break;case"floating":this.jointValue=new Array(6).fill(0);break}}get angle(){return this.jointValue[0]}constructor(...t){super(...t),this.isURDFJoint=!0,this.type="URDFJoint",this.jointValue=null,this.jointType="fixed",this.axis=new K(1,0,0),this.limit={lower:0,upper:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(t,e){return super.copy(t,e),this.jointType=t.jointType,this.axis=t.axis.clone(),this.limit.lower=t.limit.lower,this.limit.upper=t.limit.upper,this.ignoreLimits=!1,this.jointValue=[...t.jointValue],this.origPosition=t.origPosition?t.origPosition.clone():null,this.origQuaternion=t.origQuaternion?t.origQuaternion.clone():null,this.mimicJoints=[...t.mimicJoints],this}setJointValue(...t){t=t.map(n=>n===null?null:parseFloat(n)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let e=!1;switch(this.mimicJoints.forEach(n=>{e=n.updateFromMimickedJoint(...t)||e}),this.jointType){case"fixed":return e;case"continuous":case"revolute":{let n=t[0];return n==null||n===this.jointValue[0]?e:(!this.ignoreLimits&&this.jointType==="revolute"&&(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.quaternion.setFromAxisAngle(this.axis,n).premultiply(this.origQuaternion),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):e)}case"prismatic":{let n=t[0];return n==null||n===this.jointValue[0]?e:(this.ignoreLimits||(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.position.copy(this.origPosition),dh.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(dh,n),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):e)}case"floating":return this.jointValue.every((n,r)=>t[r]===n||t[r]===null)?e:(this.jointValue[0]=t[0]!==null?t[0]:this.jointValue[0],this.jointValue[1]=t[1]!==null?t[1]:this.jointValue[1],this.jointValue[2]=t[2]!==null?t[2]:this.jointValue[2],this.jointValue[3]=t[3]!==null?t[3]:this.jointValue[3],this.jointValue[4]=t[4]!==null?t[4]:this.jointValue[4],this.jointValue[5]=t[5]!==null?t[5]:this.jointValue[5],ri.compose(this.origPosition,this.origQuaternion,Ws),Gs.setFromEuler(Gv.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],"XYZ")),Xs.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),Vs.compose(Xs,Gs,Ws),ri.premultiply(Vs),this.position.setFromMatrixPosition(ri),this.rotation.setFromRotationMatrix(ri),this.matrixWorldNeedsUpdate=!0,!0);case"planar":return this.jointValue.every((n,r)=>t[r]===n||t[r]===null)?e:(this.jointValue[0]=t[0]!==null?t[0]:this.jointValue[0],this.jointValue[1]=t[1]!==null?t[1]:this.jointValue[1],this.jointValue[2]=t[2]!==null?t[2]:this.jointValue[2],ri.compose(this.origPosition,this.origQuaternion,Ws),Gs.setFromAxisAngle(this.axis,this.jointValue[2]),Xs.set(this.jointValue[0],this.jointValue[1],0),Vs.compose(Xs,Gs,Ws),ri.premultiply(Vs),this.position.setFromMatrixPosition(ri),this.rotation.setFromRotationMatrix(ri),this.matrixWorldNeedsUpdate=!0,!0)}return e}}class fh extends yu{constructor(...t){super(...t),this.type="URDFMimicJoint",this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...t){const e=t.map(n=>n*this.multiplier+this.offset);return super.setJointValue(...e)}copy(t,e){return super.copy(t,e),this.mimicJoint=t.mimicJoint,this.offset=t.offset,this.multiplier=t.multiplier,this}}class jv extends xu{constructor(...t){super(...t),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(t,e){super.copy(t,e),this.urdfRobotNode=t.urdfRobotNode,this.robotName=t.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(n=>{n.isURDFJoint&&n.urdfName in t.joints&&(this.joints[n.urdfName]=n),n.isURDFLink&&n.urdfName in t.links&&(this.links[n.urdfName]=n),n.isURDFCollider&&n.urdfName in t.colliders&&(this.colliders[n.urdfName]=n),n.isURDFVisual&&n.urdfName in t.visual&&(this.visual[n.urdfName]=n)});for(const n in this.joints)this.joints[n].mimicJoints=this.joints[n].mimicJoints.map(r=>this.joints[r.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(t){return this.frames[t]}setJointValue(t,...e){const n=this.joints[t];return n?n.setJointValue(...e):!1}setJointValues(t){let e=!1;for(const n in t){const r=t[n];Array.isArray(r)?e=this.setJointValue(n,...r)||e:e=this.setJointValue(n,r)||e}return e}}const oo=new En,ph=new sn;function Qi(i){return i?i.trim().split(/\s+/g).map(t=>parseFloat(t)):[0,0,0]}function mh(i,t,e=!1){e||i.rotation.set(0,0,0),ph.set(t[0],t[1],t[2],"ZYX"),oo.setFromEuler(ph),oo.multiply(i.quaternion),i.quaternion.copy(oo)}class qv{constructor(t){this.manager=t||eu,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions={}}loadAsync(t){return new Promise((e,n)=>{this.load(t,e,null,n)})}load(t,e,n,r){const s=this.manager,a=su.extractUrlBase(t),o=this.manager.resolveURL(t);s.itemStart(o),fetch(o,this.fetchOptions).then(l=>{if(l.ok)return n&&n(null),l.text();throw new Error(`URDFLoader: Failed to load url '${o}' with error code ${l.status} : ${l.statusText}.`)}).then(l=>{const c=this.parse(l,this.workingPath||a);e(c),s.itemEnd(o)}).catch(l=>{r?r(l):console.error("URDFLoader: Error loading file.",l),s.itemError(o),s.itemEnd(o)})}parse(t,e=this.workingPath){const n=this.packages,r=this.loadMeshCb,s=this.parseVisual,a=this.parseCollision,o=this.manager,l={},c={},d={};function u(x){if(!/^package:\/\//.test(x))return e?e+x:x;const[M,S]=x.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof n=="string")return n.endsWith(M)?n+"/"+S:n+"/"+M+"/"+S;if(n instanceof Function)return n(M)+"/"+S;if(typeof n=="object")return M in n?n[M]+"/"+S:(console.error(`URDFLoader : ${M} not found in provided package list.`),null)}function p(x){let M;x instanceof Document?M=[...x.children]:x instanceof Element?M=[x]:M=[...new DOMParser().parseFromString(x,"text/xml").children];const S=M.filter(R=>R.nodeName==="robot").pop();return f(S)}function f(x){const M=[...x.children],S=M.filter(B=>B.nodeName.toLowerCase()==="link"),R=M.filter(B=>B.nodeName.toLowerCase()==="joint"),L=M.filter(B=>B.nodeName.toLowerCase()==="material"),P=new jv;P.robotName=x.getAttribute("name"),P.urdfRobotNode=x,L.forEach(B=>{const C=B.getAttribute("name");d[C]=m(B)});const N={},E={};S.forEach(B=>{const C=B.getAttribute("name"),z=x.querySelector(`child[link="${C}"]`)===null;l[C]=_(B,N,E,z?P:null)}),R.forEach(B=>{const C=B.getAttribute("name");c[C]=g(B)}),P.joints=c,P.links=l,P.colliders=E,P.visual=N;const w=Object.values(c);return w.forEach(B=>{B instanceof fh&&c[B.mimicJoint].mimicJoints.push(B)}),w.forEach(B=>{const C=new Set,z=y=>{if(C.has(y))throw new Error("URDFLoader: Detected an infinite loop of mimic joints.");C.add(y),y.mimicJoints.forEach(V=>{z(V)})};z(B)}),P.frames={...E,...N,...l,...c},P}function g(x){const M=[...x.children],S=x.getAttribute("type");let R;const L=M.find(C=>C.nodeName.toLowerCase()==="mimic");L?(R=new fh,R.mimicJoint=L.getAttribute("joint"),R.multiplier=parseFloat(L.getAttribute("multiplier")||1),R.offset=parseFloat(L.getAttribute("offset")||0)):R=new yu,R.urdfNode=x,R.name=x.getAttribute("name"),R.urdfName=R.name,R.jointType=S;let P=null,N=null,E=[0,0,0],w=[0,0,0];M.forEach(C=>{const z=C.nodeName.toLowerCase();z==="origin"?(E=Qi(C.getAttribute("xyz")),w=Qi(C.getAttribute("rpy"))):z==="child"?N=l[C.getAttribute("link")]:z==="parent"?P=l[C.getAttribute("link")]:z==="limit"&&(R.limit.lower=parseFloat(C.getAttribute("lower")||R.limit.lower),R.limit.upper=parseFloat(C.getAttribute("upper")||R.limit.upper))}),P.add(R),R.add(N),mh(R,w),R.position.set(E[0],E[1],E[2]);const B=M.filter(C=>C.nodeName.toLowerCase()==="axis")[0];if(B){const C=B.getAttribute("xyz").split(/\s+/g).map(z=>parseFloat(z));R.axis=new K(C[0],C[1],C[2]),R.axis.normalize()}return R}function _(x,M,S,R=null){R===null&&(R=new xu);const L=[...x.children];return R.name=x.getAttribute("name"),R.urdfName=R.name,R.urdfNode=x,s&&L.filter(N=>N.nodeName.toLowerCase()==="visual").forEach(N=>{const E=h(N,d);if(R.add(E),N.hasAttribute("name")){const w=N.getAttribute("name");E.name=w,E.urdfName=w,M[w]=E}}),a&&L.filter(N=>N.nodeName.toLowerCase()==="collision").forEach(N=>{const E=h(N);if(R.add(E),N.hasAttribute("name")){const w=N.getAttribute("name");E.name=w,E.urdfName=w,S[w]=E}}),R}function m(x){const M=[...x.children],S=new ur;return S.name=x.getAttribute("name")||"",M.forEach(R=>{const L=R.nodeName.toLowerCase();if(L==="color"){const P=R.getAttribute("rgba").split(/\s/g).map(N=>parseFloat(N));S.color.setRGB(P[0],P[1],P[2]),S.opacity=P[3],S.transparent=P[3]<1,S.depthWrite=!S.transparent}else if(L==="texture"){const P=R.getAttribute("filename");if(P){const N=new nu(o),E=u(P);S.map=N.load(E),S.map.colorSpace=De}}}),S}function h(x,M={}){const S=x.nodeName.toLowerCase()==="collision",R=[...x.children];let L=null;const P=R.filter(E=>E.nodeName.toLowerCase()==="material")[0];if(P){const E=P.getAttribute("name");E&&E in M?L=M[E]:L=m(P)}else L=new ur;const N=S?new Wv:new Xv;return N.urdfNode=x,R.forEach(E=>{const w=E.nodeName.toLowerCase();if(w==="geometry"){const B=E.children[0].nodeName.toLowerCase();if(B==="mesh"){const C=E.children[0].getAttribute("filename"),z=u(C);if(z!==null){const y=E.children[0].getAttribute("scale");if(y){const V=Qi(y);N.scale.set(V[0],V[1],V[2])}r(z,o,(V,W)=>{W?console.error("URDFLoader: Error loading mesh.",W):V&&(V instanceof Oe&&(V.material=L),V.position.set(0,0,0),V.quaternion.identity(),N.add(V))})}}else if(B==="box"){const C=new Oe;C.geometry=new Ni(1,1,1),C.material=L;const z=Qi(E.children[0].getAttribute("size"));C.scale.set(z[0],z[1],z[2]),N.add(C)}else if(B==="sphere"){const C=new Oe;C.geometry=new ml(1,30,30),C.material=L;const z=parseFloat(E.children[0].getAttribute("radius"))||0;C.scale.set(z,z,z),N.add(C)}else if(B==="cylinder"){const C=new Oe;C.geometry=new pl(1,1,1,30),C.material=L;const z=parseFloat(E.children[0].getAttribute("radius"))||0,y=parseFloat(E.children[0].getAttribute("length"))||0;C.scale.set(z,y,z),C.rotation.set(Math.PI/2,0,0),N.add(C)}}else if(w==="origin"){const B=Qi(E.getAttribute("xyz")),C=Qi(E.getAttribute("rpy"));N.position.set(B[0],B[1],B[2]),N.rotation.set(0,0,0),mh(N,C)}}),N}return p(t)}defaultMeshLoader(t,e,n){/\.stl$/i.test(t)?new Hv(e).load(t,s=>{const a=new Oe(s,new ur);n(a)}):/\.dae$/i.test(t)?new Vv(e).load(t,s=>n(s.scene)):console.warn(`URDFLoader: Could not load model at ${t}.
No loader available`)}}function Yv(i,t){return new Promise((e,n)=>{i.packages={[t.packageName]:t.packagePath},i.load(t.urdfPath,r=>e(r),void 0,r=>n(r))})}function Zv(i){let t="",e="",n="";return i==Yr.OpticalTable&&(t=pv,e=mv,n=_v),{packageName:t,packagePath:e,urdfPath:n}}function Kv(i){const t=new tu,e=new qv(t),n=Zv(i);return Yv(e,n)}const Vn=class Vn{constructor(){fe(this,"files");fe(this,"modelMap");fe(this,"robotMap");this.files={textFiles:new Map,binaryFiles:new Map},this.modelMap=new Map,this.robotMap=new Map}static async init(){if(!Vn.instance){const t=new Vn;t.files=await Pv(),t.modelMap=zv(t.files),t.robotMap.set(Yr.OpticalTable,await Kv(Yr.OpticalTable)),Vn.instance=t}return Vn.instance}static getInstance(){if(!Vn.instance)throw new Error("Assets has not been initialized. Call init) first.");return Vn.instance}getModels(){return this.modelMap}getRobots(){return this.robotMap}getFiles(){return this.files}};fe(Vn,"instance");let la=Vn;function $v(){let i=new Ie;const t=new Ni(.5,1,.5),e=new jr({color:34850});let n=new Oe(t,e);const r=new Kg(t),s=new Ci({color:2236962}),a=new ia(r,s);return n.add(a),i.add(n),i}class bu{constructor(t){fe(this,"object");fe(this,"velocity");fe(this,"acceleration");this.velocity=new K,this.acceleration=new K,this.object=t}updatePosition(t){this.velocity.add(this.acceleration.clone().multiplyScalar(t)),this.object.position.add(this.velocity.clone().multiplyScalar(t));const e=1-Math.min(1,5*t);this.velocity.multiplyScalar(e);const n=.01;this.velocity.lengthSq()<n*n&&this.velocity.set(0,0,0)}}class Jv extends bu{constructor(){super($v())}handleMove(t){t.forward?this.acceleration.z=-10:t.backward?this.acceleration.z=10:this.acceleration.z=0,t.left?this.acceleration.x=-10:t.right?this.acceleration.x=10:this.acceleration.x=0}update(t){this.updatePosition(t)}}class Qv extends bu{constructor(){let e=la.getInstance().getRobots().get(Yr.OpticalTable);super(e);fe(this,"table");fe(this,"slideJoint");fe(this,"armFSM");this.table=e,this.slideJoint=e.joints["slide-j"],this.armFSM=new av}getCurrentAngle(){return this.slideJoint.angle}handleMove(e){}getArmState(){return this.armFSM.getState()}handleArmCommand(e){this.armFSM.transition(e)}getTargetAngle(){return this.armFSM.getTargetAngle()}update(e){if(this.armFSM.getState()==pu.Idle)return;const n=1,r=this.getCurrentAngle(),s=this.getTargetAngle()-r,a=Math.sign(s)*Math.min(Math.abs(s),n*e);this.slideJoint.setJointValue(r+a),Math.abs(s)<.01&&this.slideJoint.setJointValue(this.getTargetAngle())}}function tx(i){const e=new Di().setFromObject(i.object).min.y;e<fv&&(i.object.position.y-=e)}class ex{constructor(){}createHuman(){let t=new Jv;return tx(t),t}createOpticalTable(){let t=new Qv;return t.object.position.y+=.855,t.object.position.x-=2,t.object.position.z-=.7,t.object.rotation.x=Ei.degToRad(270),t}createActors(){return{player:this.createHuman(),table:this.createOpticalTable()}}}class nx{constructor(t,e){fe(this,"room");fe(this,"actors");this.room=t,this.actors=e}createScene(){const t=new qh;return ix().forEach(e=>t.add(e)),this.populateScene(t),t}populateScene(t){t.add(this.actors.player.object),t.add(this.actors.table.object),t.add(this.room.floor.object)}}function ix(){const i=new iu(16777215,1);i.position.set(5,5,5).normalize();const t=new ru(4210752,.5);return[i,t]}class rx{constructor(t){fe(this,"object");this.object=t}}const Su=Math.sqrt(3),sx=.5*(Su-1),Or=(3-Su)/6,_h=i=>Math.floor(i)|0,gh=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function ax(i=Math.random){const t=ox(i),e=new Float64Array(t).map(r=>gh[r%12*2]),n=new Float64Array(t).map(r=>gh[r%12*2+1]);return function(s,a){let o=0,l=0,c=0;const d=(s+a)*sx,u=_h(s+d),p=_h(a+d),f=(u+p)*Or,g=u-f,_=p-f,m=s-g,h=a-_;let x,M;m>h?(x=1,M=0):(x=0,M=1);const S=m-x+Or,R=h-M+Or,L=m-1+2*Or,P=h-1+2*Or,N=u&255,E=p&255;let w=.5-m*m-h*h;if(w>=0){const z=N+t[E],y=e[z],V=n[z];w*=w,o=w*w*(y*m+V*h)}let B=.5-S*S-R*R;if(B>=0){const z=N+x+t[E+M],y=e[z],V=n[z];B*=B,l=B*B*(y*S+V*R)}let C=.5-L*L-P*P;if(C>=0){const z=N+1+t[E+1],y=e[z],V=n[z];C*=C,c=C*C*(y*L+V*P)}return 70*(o+l+c)}}function ox(i){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const r=n+~~(i()*(256-n)),s=e[n];e[n]=e[r],e[r]=s}for(let n=256;n<512;n++)e[n]=e[n-256];return e}class lx extends rx{constructor(){super(cx())}}function cx(){const i=new $r(10,10),t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");if(e){const a=ax(),o=.01;for(let l=0;l<t.height;l++)for(let c=0;c<t.width;c++){const d=c/t.width-.5,u=l/t.height-.5,p=a(d/o,u/o),f=Math.floor((p+1)*127.5);e.fillStyle=`rgb(${f}, ${f}, ${f})`,e.fillRect(c,l,1,1)}}const n=new Zg(t);n.wrapS=Gn,n.wrapT=Gn,n.repeat.set(4,4);const r=new $h({map:n}),s=new Oe(i,r);return s.rotation.x=-Math.PI/2,s.position.y=0,s}class hx{constructor(){}createFloor(){return new lx}createRoom(){return{floor:this.createFloor()}}}async function ux(){await la.init();let i=new hx().createRoom(),t=new ex().createActors(),e=new nx(i,t).createScene();new dv(i,t,e).runSimulationLoop()}ux();
//# sourceMappingURL=index-rvkbHIbx.js.map
