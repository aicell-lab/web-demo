var Ah=Object.defineProperty;var Rh=(i,t,e)=>t in i?Ah(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var xe=(i,t,e)=>Rh(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eo="170",ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ch=0,Xo=1,Ph=2,Ac=1,Lh=2,Nn=3,zn=0,Qe=1,Sn=2,ei=0,qi=1,jo=2,qo=3,Yo=4,Dh=5,mi=100,Ih=101,Nh=102,Uh=103,Fh=104,Oh=200,kh=201,Bh=202,zh=203,Fa=204,Oa=205,Vh=206,Hh=207,Gh=208,Wh=209,Xh=210,jh=211,qh=212,Yh=213,Zh=214,ka=0,Ba=1,za=2,Ji=3,Va=4,Ha=5,Ga=6,Wa=7,ks=0,Kh=1,$h=2,ni=0,Jh=1,Qh=2,tu=3,eu=4,nu=5,iu=6,ru=7,Zo="attached",su="detached",Rc=300,Qi=301,tr=302,Xa=303,ja=304,Bs=306,Fn=1e3,xn=1001,qa=1002,an=1003,au=1004,Vr=1005,sn=1006,Ks=1007,On=1008,Vn=1009,Cc=1010,Pc=1011,wr=1012,wo=1013,yi=1014,En=1015,Pr=1016,To=1017,Ao=1018,er=1020,Lc=35902,Dc=1021,Ic=1022,dn=1023,Nc=1024,Uc=1025,Yi=1026,nr=1027,Fc=1028,Ro=1029,Oc=1030,Co=1031,Po=1033,ws=33776,Ts=33777,As=33778,Rs=33779,Ya=35840,Za=35841,Ka=35842,$a=35843,Ja=36196,Qa=37492,to=37496,eo=37808,no=37809,io=37810,ro=37811,so=37812,ao=37813,oo=37814,lo=37815,co=37816,ho=37817,uo=37818,fo=37819,po=37820,mo=37821,Cs=36492,go=36494,_o=36495,kc=36283,vo=36284,xo=36285,yo=36286,Ls=2300,bo=2301,$s=2302,Ko=2400,$o=2401,Jo=2402,ou=2500,lu=3200,cu=3201,zs=0,hu=1,Qn="",Ce="srgb",ar="srgb-linear",Vs="linear",we="srgb",Ri=7680,Qo=519,uu=512,du=513,fu=514,Bc=515,pu=516,mu=517,gu=518,_u=519,tl=35044,el="300 es",kn=2e3,Ds=2001;class Mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nl=1234567;const Zi=Math.PI/180,ir=180/Math.PI;function ri(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Ge(i,t,e){return Math.max(t,Math.min(e,i))}function Lo(i,t){return(i%t+t)%t}function vu(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function xu(i,t,e){return i!==t?(e-i)/(t-i):0}function Er(i,t,e){return(1-e)*i+e*t}function yu(i,t,e,n){return Er(i,t,1-Math.exp(-e*n))}function bu(i,t=1){return t-Math.abs(Lo(i,t*2)-t)}function Mu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Su(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Eu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function wu(i,t){return i+Math.random()*(t-i)}function Tu(i){return i*(.5-Math.random())}function Au(i){i!==void 0&&(nl=i);let t=nl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ru(i){return i*Zi}function Cu(i){return i*ir}function Pu(i){return(i&i-1)===0&&i!==0}function Lu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Du(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Iu(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),d=o((t+n)/2),f=s((t-n)/2),p=o((t-n)/2),u=s((n-t)/2),_=o((n-t)/2);switch(r){case"XYX":i.set(a*d,l*f,l*p,a*c);break;case"YZY":i.set(l*p,a*d,l*f,a*c);break;case"ZXZ":i.set(l*f,l*p,a*d,a*c);break;case"XZX":i.set(a*d,l*_,l*u,a*c);break;case"YXY":i.set(l*u,a*d,l*_,a*c);break;case"ZYZ":i.set(l*_,l*u,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ti={DEG2RAD:Zi,RAD2DEG:ir,generateUUID:ri,clamp:Ge,euclideanModulo:Lo,mapLinear:vu,inverseLerp:xu,lerp:Er,damp:yu,pingpong:bu,smoothstep:Mu,smootherstep:Su,randInt:Eu,randFloat:wu,randFloatSpread:Tu,seededRandom:Au,degToRad:Ru,radToDeg:Cu,isPowerOfTwo:Pu,ceilPowerOfTwo:Lu,floorPowerOfTwo:Du,setQuaternionFromProperEuler:Iu,normalize:qe,denormalize:Gi};class te{constructor(t=0,e=0){te.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,e,n,r,s,o,a,l,c){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const d=this.elements;return d[0]=t,d[1]=r,d[2]=a,d[3]=e,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],f=n[7],p=n[2],u=n[5],_=n[8],g=r[0],m=r[3],h=r[6],x=r[1],E=r[4],M=r[7],C=r[2],L=r[5],P=r[8];return s[0]=o*g+a*x+l*C,s[3]=o*m+a*E+l*L,s[6]=o*h+a*M+l*P,s[1]=c*g+d*x+f*C,s[4]=c*m+d*E+f*L,s[7]=c*h+d*M+f*P,s[2]=p*g+u*x+_*C,s[5]=p*m+u*E+_*L,s[8]=p*h+u*M+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*o*d-e*a*c-n*s*d+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],f=d*o-a*c,p=a*l-d*s,u=c*s-o*l,_=e*f+n*p+r*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=f*g,t[1]=(r*c-d*n)*g,t[2]=(a*n-r*o)*g,t[3]=p*g,t[4]=(d*e-r*l)*g,t[5]=(r*s-a*e)*g,t[6]=u*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Js.makeScale(t,e)),this}rotate(t){return this.premultiply(Js.makeRotation(-t)),this}translate(t,e){return this.premultiply(Js.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Js=new ce;function zc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nu(){const i=Tr("canvas");return i.style.display="block",i}const il={};function br(i){i in il||(il[i]=!0,console.warn(i))}function Uu(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Fu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ou(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ue={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===we&&(i.r=Bn(i.r),i.g=Bn(i.g),i.b=Bn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===we&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qn?Vs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const rl=[.64,.33,.3,.6,.15,.06],sl=[.2126,.7152,.0722],al=[.3127,.329],ol=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ll=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ue.define({[ar]:{primaries:rl,whitePoint:al,transfer:Vs,toXYZ:ol,fromXYZ:ll,luminanceCoefficients:sl,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:rl,whitePoint:al,transfer:we,toXYZ:ol,fromXYZ:ll,luminanceCoefficients:sl,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}});let Ci;class ku{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ci===void 0&&(Ci=Tr("canvas")),Ci.width=t.width,Ci.height=t.height;const n=Ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Tr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Bn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bn(e[n]/255)*255):e[n]=Bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bu=0;class Vc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=ri(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Qs(r[o].image)):s.push(Qs(r[o]))}else s=Qs(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Qs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ku.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zu=0;class Be extends Mi{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=xn,r=xn,s=sn,o=On,a=dn,l=Vn,c=Be.DEFAULT_ANISOTROPY,d=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=ri(),this.name="",this.source=new Vc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fn:t.x=t.x-Math.floor(t.x);break;case xn:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fn:t.y=t.y-Math.floor(t.y);break;case xn:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=Rc;Be.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,r=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],d=l[4],f=l[8],p=l[1],u=l[5],_=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+u+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,M=(u+1)/2,C=(h+1)/2,L=(d+p)/4,P=(f+g)/4,N=(_+m)/4;return E>M&&E>C?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=L/n,s=P/n):M>C?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=L/r,s=N/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=P/s,r=N/s),this.set(n,r,s,e),this}let x=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(p-d)*(p-d));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(f-g)/x,this.z=(p-d)/x,this.w=Math.acos((c+u+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vu extends Mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Be(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends Vu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Hc extends Be{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hu extends Be{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],d=n[r+2],f=n[r+3];const p=s[o+0],u=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=f;return}if(a===1){t[e+0]=p,t[e+1]=u,t[e+2]=_,t[e+3]=g;return}if(f!==g||l!==p||c!==u||d!==_){let m=1-a;const h=l*p+c*u+d*_+f*g,x=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const C=Math.sqrt(E),L=Math.atan2(C,h*x);m=Math.sin(m*L)/C,a=Math.sin(a*L)/C}const M=a*x;if(l=l*m+p*M,c=c*m+u*M,d=d*m+_*M,f=f*m+g*M,m===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=C,c*=C,d*=C,f*=C}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],d=n[r+3],f=s[o],p=s[o+1],u=s[o+2],_=s[o+3];return t[e]=a*_+d*f+l*u-c*p,t[e+1]=l*_+d*p+c*f-a*u,t[e+2]=c*_+d*u+a*p-l*f,t[e+3]=d*_-a*f-l*p-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(r/2),f=a(s/2),p=l(n/2),u=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=p*d*f+c*u*_,this._y=c*u*f-p*d*_,this._z=c*d*_+p*u*f,this._w=c*d*f-p*u*_;break;case"YXZ":this._x=p*d*f+c*u*_,this._y=c*u*f-p*d*_,this._z=c*d*_-p*u*f,this._w=c*d*f+p*u*_;break;case"ZXY":this._x=p*d*f-c*u*_,this._y=c*u*f+p*d*_,this._z=c*d*_+p*u*f,this._w=c*d*f-p*u*_;break;case"ZYX":this._x=p*d*f-c*u*_,this._y=c*u*f+p*d*_,this._z=c*d*_-p*u*f,this._w=c*d*f+p*u*_;break;case"YZX":this._x=p*d*f+c*u*_,this._y=c*u*f+p*d*_,this._z=c*d*_-p*u*f,this._w=c*d*f-p*u*_;break;case"XZY":this._x=p*d*f-c*u*_,this._y=c*u*f-p*d*_,this._z=c*d*_+p*u*f,this._w=c*d*f+p*u*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],d=e[6],f=e[10],p=n+a+f;if(p>0){const u=.5/Math.sqrt(p+1);this._w=.25/u,this._x=(d-l)*u,this._y=(s-c)*u,this._z=(o-r)*u}else if(n>a&&n>f){const u=2*Math.sqrt(1+n-a-f);this._w=(d-l)/u,this._x=.25*u,this._y=(r+o)/u,this._z=(s+c)/u}else if(a>f){const u=2*Math.sqrt(1+a-n-f);this._w=(s-c)/u,this._x=(r+o)/u,this._y=.25*u,this._z=(l+d)/u}else{const u=2*Math.sqrt(1+f-n-a);this._w=(o-r)/u,this._x=(s+c)/u,this._y=(l+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-n*c,this._z=s*d+o*c+n*l-r*a,this._w=o*d-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*r+e*this._y,this._z=u*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-e)*d)/c,p=Math.sin(e*d)/c;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,e=0,n=0){K.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),d=2*(a*e-s*r),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*d,this.y=n+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ta.copy(this).projectOnVector(t),this.sub(ta)}reflect(t){return this.sub(ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ta=new K,cl=new yn;class si{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,gn):gn.fromBufferAttribute(s,o),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(t.matrixWorld),this.union(Hr)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fr),Gr.subVectors(this.max,fr),Pi.subVectors(t.a,fr),Li.subVectors(t.b,fr),Di.subVectors(t.c,fr),Xn.subVectors(Li,Pi),jn.subVectors(Di,Li),li.subVectors(Pi,Di);let e=[0,-Xn.z,Xn.y,0,-jn.z,jn.y,0,-li.z,li.y,Xn.z,0,-Xn.x,jn.z,0,-jn.x,li.z,0,-li.x,-Xn.y,Xn.x,0,-jn.y,jn.x,0,-li.y,li.x,0];return!ea(e,Pi,Li,Di,Gr)||(e=[1,0,0,0,1,0,0,0,1],!ea(e,Pi,Li,Di,Gr))?!1:(Wr.crossVectors(Xn,jn),e=[Wr.x,Wr.y,Wr.z],ea(e,Pi,Li,Di,Gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Rn=[new K,new K,new K,new K,new K,new K,new K,new K],gn=new K,Hr=new si,Pi=new K,Li=new K,Di=new K,Xn=new K,jn=new K,li=new K,fr=new K,Gr=new K,Wr=new K,ci=new K;function ea(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ci.fromArray(i,s);const a=r.x*Math.abs(ci.x)+r.y*Math.abs(ci.y)+r.z*Math.abs(ci.z),l=t.dot(ci),c=e.dot(ci),d=n.dot(ci);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Gu=new si,pr=new K,na=new K;class Si{constructor(t=new K,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Gu.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pr.subVectors(t,this.center);const e=pr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(pr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pr.copy(t.center).add(na)),this.expandByPoint(pr.copy(t.center).sub(na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new K,ia=new K,Xr=new K,qn=new K,ra=new K,jr=new K,sa=new K;class Lr{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Cn.copy(this.origin).addScaledVector(this.direction,e),Cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){ia.copy(t).add(e).multiplyScalar(.5),Xr.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(ia);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Xr),a=qn.dot(this.direction),l=-qn.dot(Xr),c=qn.lengthSq(),d=Math.abs(1-o*o);let f,p,u,_;if(d>0)if(f=o*l-a,p=o*a-l,_=s*d,f>=0)if(p>=-_)if(p<=_){const g=1/d;f*=g,p*=g,u=f*(f+o*p+2*a)+p*(o*f+p+2*l)+c}else p=s,f=Math.max(0,-(o*p+a)),u=-f*f+p*(p+2*l)+c;else p=-s,f=Math.max(0,-(o*p+a)),u=-f*f+p*(p+2*l)+c;else p<=-_?(f=Math.max(0,-(-o*s+a)),p=f>0?-s:Math.min(Math.max(-s,-l),s),u=-f*f+p*(p+2*l)+c):p<=_?(f=0,p=Math.min(Math.max(-s,-l),s),u=p*(p+2*l)+c):(f=Math.max(0,-(o*s+a)),p=f>0?s:Math.min(Math.max(-s,-l),s),u=-f*f+p*(p+2*l)+c);else p=o>0?-s:s,f=Math.max(0,-(o*p+a)),u=-f*f+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ia).addScaledVector(Xr,p),u}intersectSphere(t,e){Cn.subVectors(t.center,this.origin);const n=Cn.dot(this.direction),r=Cn.dot(Cn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,r=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,r=(t.min.x-p.x)*c),d>=0?(s=(t.min.y-p.y)*d,o=(t.max.y-p.y)*d):(s=(t.max.y-p.y)*d,o=(t.min.y-p.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-p.z)*f,l=(t.max.z-p.z)*f):(a=(t.max.z-p.z)*f,l=(t.min.z-p.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Cn)!==null}intersectTriangle(t,e,n,r,s){ra.subVectors(e,t),jr.subVectors(n,t),sa.crossVectors(ra,jr);let o=this.direction.dot(sa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qn.subVectors(this.origin,t);const l=a*this.direction.dot(jr.crossVectors(qn,jr));if(l<0)return null;const c=a*this.direction.dot(ra.cross(qn));if(c<0||l+c>o)return null;const d=-a*qn.dot(sa);return d<0?null:this.at(d/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,r,s,o,a,l,c,d,f,p,u,_,g,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,d,f,p,u,_,g,m)}set(t,e,n,r,s,o,a,l,c,d,f,p,u,_,g,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=p,h[3]=u,h[7]=_,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ii.setFromMatrixColumn(t,0).length(),s=1/Ii.setFromMatrixColumn(t,1).length(),o=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const p=o*d,u=o*f,_=a*d,g=a*f;e[0]=l*d,e[4]=-l*f,e[8]=c,e[1]=u+_*c,e[5]=p-g*c,e[9]=-a*l,e[2]=g-p*c,e[6]=_+u*c,e[10]=o*l}else if(t.order==="YXZ"){const p=l*d,u=l*f,_=c*d,g=c*f;e[0]=p+g*a,e[4]=_*a-u,e[8]=o*c,e[1]=o*f,e[5]=o*d,e[9]=-a,e[2]=u*a-_,e[6]=g+p*a,e[10]=o*l}else if(t.order==="ZXY"){const p=l*d,u=l*f,_=c*d,g=c*f;e[0]=p-g*a,e[4]=-o*f,e[8]=_+u*a,e[1]=u+_*a,e[5]=o*d,e[9]=g-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const p=o*d,u=o*f,_=a*d,g=a*f;e[0]=l*d,e[4]=_*c-u,e[8]=p*c+g,e[1]=l*f,e[5]=g*c+p,e[9]=u*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const p=o*l,u=o*c,_=a*l,g=a*c;e[0]=l*d,e[4]=g-p*f,e[8]=_*f+u,e[1]=f,e[5]=o*d,e[9]=-a*d,e[2]=-c*d,e[6]=u*f+_,e[10]=p-g*f}else if(t.order==="XZY"){const p=o*l,u=o*c,_=a*l,g=a*c;e[0]=l*d,e[4]=-f,e[8]=c*d,e[1]=p*f+g,e[5]=o*d,e[9]=u*f-_,e[2]=_*f-u,e[6]=a*d,e[10]=g*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wu,t,Xu)}lookAt(t,e,n){const r=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Yn.crossVectors(n,nn),Yn.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Yn.crossVectors(n,nn)),Yn.normalize(),qr.crossVectors(nn,Yn),r[0]=Yn.x,r[4]=qr.x,r[8]=nn.x,r[1]=Yn.y,r[5]=qr.y,r[9]=nn.y,r[2]=Yn.z,r[6]=qr.z,r[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],f=n[5],p=n[9],u=n[13],_=n[2],g=n[6],m=n[10],h=n[14],x=n[3],E=n[7],M=n[11],C=n[15],L=r[0],P=r[4],N=r[8],S=r[12],w=r[1],B=r[5],R=r[9],z=r[13],y=r[2],H=r[6],W=r[10],q=r[14],J=r[3],Q=r[7],ft=r[11],j=r[15];return s[0]=o*L+a*w+l*y+c*J,s[4]=o*P+a*B+l*H+c*Q,s[8]=o*N+a*R+l*W+c*ft,s[12]=o*S+a*z+l*q+c*j,s[1]=d*L+f*w+p*y+u*J,s[5]=d*P+f*B+p*H+u*Q,s[9]=d*N+f*R+p*W+u*ft,s[13]=d*S+f*z+p*q+u*j,s[2]=_*L+g*w+m*y+h*J,s[6]=_*P+g*B+m*H+h*Q,s[10]=_*N+g*R+m*W+h*ft,s[14]=_*S+g*z+m*q+h*j,s[3]=x*L+E*w+M*y+C*J,s[7]=x*P+E*B+M*H+C*Q,s[11]=x*N+E*R+M*W+C*ft,s[15]=x*S+E*z+M*q+C*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],d=t[2],f=t[6],p=t[10],u=t[14],_=t[3],g=t[7],m=t[11],h=t[15];return _*(+s*l*f-r*c*f-s*a*p+n*c*p+r*a*u-n*l*u)+g*(+e*l*u-e*c*p+s*o*p-r*o*u+r*c*d-s*l*d)+m*(+e*c*f-e*a*u-s*o*f+n*o*u+s*a*d-n*c*d)+h*(-r*a*d-e*l*f+e*a*p+r*o*f-n*o*p+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],f=t[9],p=t[10],u=t[11],_=t[12],g=t[13],m=t[14],h=t[15],x=f*m*c-g*p*c+g*l*u-a*m*u-f*l*h+a*p*h,E=_*p*c-d*m*c-_*l*u+o*m*u+d*l*h-o*p*h,M=d*g*c-_*f*c+_*a*u-o*g*u-d*a*h+o*f*h,C=_*f*l-d*g*l-_*a*p+o*g*p+d*a*m-o*f*m,L=e*x+n*E+r*M+s*C;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return t[0]=x*P,t[1]=(g*p*s-f*m*s-g*r*u+n*m*u+f*r*h-n*p*h)*P,t[2]=(a*m*s-g*l*s+g*r*c-n*m*c-a*r*h+n*l*h)*P,t[3]=(f*l*s-a*p*s-f*r*c+n*p*c+a*r*u-n*l*u)*P,t[4]=E*P,t[5]=(d*m*s-_*p*s+_*r*u-e*m*u-d*r*h+e*p*h)*P,t[6]=(_*l*s-o*m*s-_*r*c+e*m*c+o*r*h-e*l*h)*P,t[7]=(o*p*s-d*l*s+d*r*c-e*p*c-o*r*u+e*l*u)*P,t[8]=M*P,t[9]=(_*f*s-d*g*s-_*n*u+e*g*u+d*n*h-e*f*h)*P,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*h+e*a*h)*P,t[11]=(d*a*s-o*f*s-d*n*c+e*f*c+o*n*u-e*a*u)*P,t[12]=C*P,t[13]=(d*g*r-_*f*r+_*n*p-e*g*p-d*n*m+e*f*m)*P,t[14]=(_*a*r-o*g*r-_*n*l+e*g*l+o*n*m-e*a*m)*P,t[15]=(o*f*r-d*a*r+d*n*l-e*f*l-o*n*p+e*a*p)*P,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,d=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+n,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,d=o+o,f=a+a,p=s*c,u=s*d,_=s*f,g=o*d,m=o*f,h=a*f,x=l*c,E=l*d,M=l*f,C=n.x,L=n.y,P=n.z;return r[0]=(1-(g+h))*C,r[1]=(u+M)*C,r[2]=(_-E)*C,r[3]=0,r[4]=(u-M)*L,r[5]=(1-(p+h))*L,r[6]=(m+x)*L,r[7]=0,r[8]=(_+E)*P,r[9]=(m-x)*P,r[10]=(1-(p+g))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Ii.set(r[0],r[1],r[2]).length();const o=Ii.set(r[4],r[5],r[6]).length(),a=Ii.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],_n.copy(this);const c=1/s,d=1/o,f=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=d,_n.elements[5]*=d,_n.elements[6]*=d,_n.elements[8]*=f,_n.elements[9]*=f,_n.elements[10]*=f,e.setFromRotationMatrix(_n),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=kn){const l=this.elements,c=2*s/(e-t),d=2*s/(n-r),f=(e+t)/(e-t),p=(n+r)/(n-r);let u,_;if(a===kn)u=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ds)u=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=kn){const l=this.elements,c=1/(e-t),d=1/(n-r),f=1/(o-s),p=(e+t)*c,u=(n+r)*d;let _,g;if(a===kn)_=(o+s)*f,g=-2*f;else if(a===Ds)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ii=new K,_n=new ie,Wu=new K(0,0,0),Xu=new K(1,1,1),Yn=new K,qr=new K,nn=new K,hl=new ie,ul=new yn;class tn{constructor(t=0,e=0,n=0,r=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],p=r[6],u=r[10];switch(e){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ul.setFromEuler(this),this.setFromQuaternion(ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class Gc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ju=0;const dl=new K,Ni=new yn,Pn=new ie,Yr=new K,mr=new K,qu=new K,Yu=new yn,fl=new K(1,0,0),pl=new K(0,1,0),ml=new K(0,0,1),gl={type:"added"},Zu={type:"removed"},Ui={type:"childadded",child:null},aa={type:"childremoved",child:null};class Pe extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new K,e=new tn,n=new yn,r=new K(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ie},normalMatrix:{value:new ce}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.premultiply(Ni),this}rotateX(t){return this.rotateOnAxis(fl,t)}rotateY(t){return this.rotateOnAxis(pl,t)}rotateZ(t){return this.rotateOnAxis(ml,t)}translateOnAxis(t,e){return dl.copy(t).applyQuaternion(this.quaternion),this.position.add(dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fl,t)}translateY(t){return this.translateOnAxis(pl,t)}translateZ(t){return this.translateOnAxis(ml,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yr.copy(t):Yr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(mr,Yr,this.up):Pn.lookAt(Yr,mr,this.up),this.quaternion.setFromRotationMatrix(Pn),r&&(Pn.extractRotation(r.matrixWorld),Ni.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gl),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zu),aa.child=t,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gl),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,t,qu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Yu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),d=o(t.images),f=o(t.shapes),p=o(t.skeletons),u=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),u.length>0&&(n.animations=u),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Pe.DEFAULT_UP=new K(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new K,Ln=new K,oa=new K,Dn=new K,Fi=new K,Oi=new K,_l=new K,la=new K,ca=new K,ha=new K,ua=new be,da=new be,fa=new be;class un{constructor(t=new K,e=new K,n=new K){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),vn.subVectors(t,e),r.cross(vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){vn.subVectors(r,e),Ln.subVectors(n,e),oa.subVectors(t,e);const o=vn.dot(vn),a=vn.dot(Ln),l=vn.dot(oa),c=Ln.dot(Ln),d=Ln.dot(oa),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const p=1/f,u=(c*l-a*d)*p,_=(o*d-a*l)*p;return s.set(1-u-_,_,u)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(a,Dn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return ua.setScalar(0),da.setScalar(0),fa.setScalar(0),ua.fromBufferAttribute(t,e),da.fromBufferAttribute(t,n),fa.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ua,s.x),o.addScaledVector(da,s.y),o.addScaledVector(fa,s.z),o}static isFrontFacing(t,e,n,r){return vn.subVectors(n,e),Ln.subVectors(t,e),vn.cross(Ln).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),vn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return un.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Fi.subVectors(r,n),Oi.subVectors(s,n),la.subVectors(t,n);const l=Fi.dot(la),c=Oi.dot(la);if(l<=0&&c<=0)return e.copy(n);ca.subVectors(t,r);const d=Fi.dot(ca),f=Oi.dot(ca);if(d>=0&&f<=d)return e.copy(r);const p=l*f-d*c;if(p<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(n).addScaledVector(Fi,o);ha.subVectors(t,s);const u=Fi.dot(ha),_=Oi.dot(ha);if(_>=0&&u<=_)return e.copy(s);const g=u*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Oi,a);const m=d*_-u*f;if(m<=0&&f-d>=0&&u-_>=0)return _l.subVectors(s,r),a=(f-d)/(f-d+(u-_)),e.copy(r).addScaledVector(_l,a);const h=1/(m+g+p);return o=g*h,a=p*h,e.copy(n).addScaledVector(Fi,o).addScaledVector(Oi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function pa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ae{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=ue.workingColorSpace){if(t=Lo(t,1),e=Ge(e,0,1),n=Ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=pa(o,s,t+1/3),this.g=pa(o,s,t),this.b=pa(o,s,t-1/3)}return ue.toWorkingColorSpace(this,r),this}setStyle(t,e=Ce){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){const n=Wc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return ue.fromWorkingColorSpace(He.copy(this),t),Math.round(Ge(He.r*255,0,255))*65536+Math.round(Ge(He.g*255,0,255))*256+Math.round(Ge(He.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(He.copy(this),e);const n=He.r,r=He.g,s=He.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Ce){ue.fromWorkingColorSpace(He.copy(this),t);const e=He.r,n=He.g,r=He.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(Zr);const n=Er(Zn.h,Zr.h,e),r=Er(Zn.s,Zr.s,e),s=Er(Zn.l,Zr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new ae;ae.NAMES=Wc;let Ku=0;class bn extends Mi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=ri(),this.name="",this.blending=qi,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fa,this.blendDst=Oa,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fa&&(n.blendSrc=this.blendSrc),this.blendDst!==Oa&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ar extends bn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=ks,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new K,Kr=new te;class on{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tl,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Kr.fromBufferAttribute(this,e),Kr.applyMatrix3(t),this.setXY(e,Kr.x,Kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gi(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gi(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gi(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),r=qe(r,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tl&&(t.usage=this.usage),t}}class Xc extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class jc extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}}let $u=0;const cn=new ie,ma=new Pe,ki=new K,rn=new si,gr=new si,ke=new K;class ze extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zc(t)?jc:Xc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ce().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return ma.lookAt(t),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ye(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(rn.min,gr.min),rn.expandByPoint(ke),ke.addVectors(rn.max,gr.max),rn.expandByPoint(ke)):(rn.expandByPoint(gr.min),rn.expandByPoint(gr.max))}rn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)ke.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ke));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)ke.fromBufferAttribute(a,c),l&&(ki.fromBufferAttribute(t,c),ke.add(ki)),r=Math.max(r,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new K,l[N]=new K;const c=new K,d=new K,f=new K,p=new te,u=new te,_=new te,g=new K,m=new K;function h(N,S,w){c.fromBufferAttribute(n,N),d.fromBufferAttribute(n,S),f.fromBufferAttribute(n,w),p.fromBufferAttribute(s,N),u.fromBufferAttribute(s,S),_.fromBufferAttribute(s,w),d.sub(c),f.sub(c),u.sub(p),_.sub(p);const B=1/(u.x*_.y-_.x*u.y);isFinite(B)&&(g.copy(d).multiplyScalar(_.y).addScaledVector(f,-u.y).multiplyScalar(B),m.copy(f).multiplyScalar(u.x).addScaledVector(d,-_.x).multiplyScalar(B),a[N].add(g),a[S].add(g),a[w].add(g),l[N].add(m),l[S].add(m),l[w].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let N=0,S=x.length;N<S;++N){const w=x[N],B=w.start,R=w.count;for(let z=B,y=B+R;z<y;z+=3)h(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const E=new K,M=new K,C=new K,L=new K;function P(N){C.fromBufferAttribute(r,N),L.copy(C);const S=a[N];E.copy(S),E.sub(C.multiplyScalar(C.dot(S))).normalize(),M.crossVectors(L,S);const B=M.dot(l[N])<0?-1:1;o.setXYZW(N,E.x,E.y,E.z,B)}for(let N=0,S=x.length;N<S;++N){const w=x[N],B=w.start,R=w.count;for(let z=B,y=B+R;z<y;z+=3)P(t.getX(z+0)),P(t.getX(z+1)),P(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,u=n.count;p<u;p++)n.setXYZ(p,0,0,0);const r=new K,s=new K,o=new K,a=new K,l=new K,c=new K,d=new K,f=new K;if(t)for(let p=0,u=t.count;p<u;p+=3){const _=t.getX(p+0),g=t.getX(p+1),m=t.getX(p+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(d),l.add(d),c.add(d),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,u=e.count;p<u;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){const c=a.array,d=a.itemSize,f=a.normalized,p=new c.constructor(l.length*d);let u=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?u=l[g]*a.data.stride+a.offset:u=l[g]*d;for(let h=0;h<d;h++)p[_++]=c[u++]}return new on(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const p=c[d],u=t(p,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,p=c.length;f<p;f++){const u=c[f];d.push(u.toJSON(t.data))}d.length>0&&(r[l]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(e))}const s=t.morphAttributes;for(const c in s){const d=[],f=s[c];for(let p=0,u=f.length;p<u;p++)d.push(f[p].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vl=new ie,hi=new Lr,$r=new Si,xl=new K,Jr=new K,Qr=new K,ts=new K,ga=new K,es=new K,yl=new K,ns=new K;class Ie extends Pe{constructor(t=new ze,e=new Ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){es.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(ga.fromBufferAttribute(f,t),o?es.addScaledVector(ga,d):es.addScaledVector(ga.sub(e),d))}e.add(es)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(s),hi.copy(t.ray).recast(t.near),!($r.containsPoint(hi.origin)===!1&&(hi.intersectSphere($r,xl)===null||hi.origin.distanceToSquared(xl)>(t.far-t.near)**2))&&(vl.copy(s).invert(),hi.copy(t.ray).applyMatrix4(vl),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,p=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=p.length;_<g;_++){const m=p[_],h=o[m.materialIndex],x=Math.max(m.start,u.start),E=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let M=x,C=E;M<C;M+=3){const L=a.getX(M),P=a.getX(M+1),N=a.getX(M+2);r=is(this,h,t,n,c,d,f,L,P,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let m=_,h=g;m<h;m+=3){const x=a.getX(m),E=a.getX(m+1),M=a.getX(m+2);r=is(this,o,t,n,c,d,f,x,E,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=p.length;_<g;_++){const m=p[_],h=o[m.materialIndex],x=Math.max(m.start,u.start),E=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let M=x,C=E;M<C;M+=3){const L=M,P=M+1,N=M+2;r=is(this,h,t,n,c,d,f,L,P,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,u.start),g=Math.min(l.count,u.start+u.count);for(let m=_,h=g;m<h;m+=3){const x=m,E=m+1,M=m+2;r=is(this,o,t,n,c,d,f,x,E,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Ju(i,t,e,n,r,s,o,a){let l;if(t.side===Qe?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===zn,a),l===null)return null;ns.copy(a),ns.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ns);return c<e.near||c>e.far?null:{distance:c,point:ns.clone(),object:i}}function is(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Jr),i.getVertexPosition(l,Qr),i.getVertexPosition(c,ts);const d=Ju(i,t,e,n,Jr,Qr,ts,yl);if(d){const f=new K;un.getBarycoord(yl,Jr,Qr,ts,f),r&&(d.uv=un.getInterpolatedAttribute(r,a,l,c,f,new te)),s&&(d.uv1=un.getInterpolatedAttribute(s,a,l,c,f,new te)),o&&(d.normal=un.getInterpolatedAttribute(o,a,l,c,f,new K),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new K,materialIndex:0};un.getNormal(Jr,Qr,ts,p.normal),d.face=p,d.barycoord=f}return d}class Ei extends ze{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let p=0,u=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,r,o,2),_("x","z","y",1,-1,t,n,-e,r,o,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(f,2));function _(g,m,h,x,E,M,C,L,P,N,S){const w=M/P,B=C/N,R=M/2,z=C/2,y=L/2,H=P+1,W=N+1;let q=0,J=0;const Q=new K;for(let ft=0;ft<W;ft++){const j=ft*B-z;for(let Z=0;Z<H;Z++){const _t=Z*w-R;Q[g]=_t*x,Q[m]=j*E,Q[h]=y,c.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[h]=L>0?1:-1,d.push(Q.x,Q.y,Q.z),f.push(Z/P),f.push(1-ft/N),q+=1}}for(let ft=0;ft<N;ft++)for(let j=0;j<P;j++){const Z=p+j+H*ft,_t=p+j+H*(ft+1),X=p+(j+1)+H*(ft+1),Y=p+(j+1)+H*ft;l.push(Z,_t,Y),l.push(_t,X,Y),J+=6}a.addGroup(u,J,S),u+=J,p+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function rr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ye(i){const t={};for(let e=0;e<i.length;e++){const n=rr(i[e]);for(const r in n)t[r]=n[r]}return t}function Qu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const td={clone:rr,merge:Ye};var ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends bn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ed,this.fragmentShader=nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rr(t.uniforms),this.uniformsGroups=Qu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Yc extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new K,bl=new te,Ml=new te;class We extends Yc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ir*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(Zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z)}getViewSize(t,e){return this.getViewBounds(t,bl,Ml),e.subVectors(Ml,bl)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zi*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bi=-90,zi=1;class id extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new We(Bi,zi,t,e);r.layers=this.layers,this.add(r);const s=new We(Bi,zi,t,e);s.layers=this.layers,this.add(s);const o=new We(Bi,zi,t,e);o.layers=this.layers,this.add(o);const a=new We(Bi,zi,t,e);a.layers=this.layers,this.add(a);const l=new We(Bi,zi,t,e);l.layers=this.layers,this.add(l);const c=new We(Bi,zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),t.render(e,d),t.setRenderTarget(f,p,u),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Zc extends Be{constructor(t,e,n,r,s,o,a,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:Qi,super(t,e,n,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rd extends bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Zc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ei(5,5,5),s=new ii({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:ei});s.uniforms.tEquirect.value=e;const o=new Ie(r,s),a=e.minFilter;return e.minFilter===On&&(e.minFilter=sn),new id(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const _a=new K,sd=new K,ad=new ce;class Jn{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=_a.subVectors(n,e).cross(sd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(_a),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ad.getNormalMatrix(t),r=this.coplanarPoint(_a).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new Si,rs=new K;class Do{constructor(t=new Jn,e=new Jn,n=new Jn,r=new Jn,s=new Jn,o=new Jn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],p=r[7],u=r[8],_=r[9],g=r[10],m=r[11],h=r[12],x=r[13],E=r[14],M=r[15];if(n[0].setComponents(l-s,p-c,m-u,M-h).normalize(),n[1].setComponents(l+s,p+c,m+u,M+h).normalize(),n[2].setComponents(l+o,p+d,m+_,M+x).normalize(),n[3].setComponents(l-o,p-d,m-_,M-x).normalize(),n[4].setComponents(l-a,p-f,m-g,M-E).normalize(),e===kn)n[5].setComponents(l+a,p+f,m+g,M+E).normalize();else if(e===Ds)n[5].setComponents(a,f,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(t){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(rs.x=r.normal.x>0?t.max.x:t.min.x,rs.y=r.normal.y>0?t.max.y:t.min.y,rs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(rs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kc(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function od(i){const t=new WeakMap;function e(a,l){const c=a.array,d=a.usage,f=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,d),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const d=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,d);else{f.sort((u,_)=>u.start-_.start);let p=0;for(let u=1;u<f.length;u++){const _=f[p],g=f[u];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++p,f[p]=g)}f.length=p+1;for(let u=0,_=f.length;u<_;u++){const g=f[u];i.bufferSubData(c,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Dr extends ze{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,d=l+1,f=t/a,p=e/l,u=[],_=[],g=[],m=[];for(let h=0;h<d;h++){const x=h*p-o;for(let E=0;E<c;E++){const M=E*f-s;_.push(M,-x,0),g.push(0,0,1),m.push(E/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<a;x++){const E=x+c*h,M=x+c*(h+1),C=x+1+c*(h+1),L=x+1+c*h;u.push(E,M,L),u.push(M,C,L)}this.setIndex(u),this.setAttribute("position",new ye(_,3)),this.setAttribute("normal",new ye(g,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.width,t.height,t.widthSegments,t.heightSegments)}}var ld=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cd=`#ifdef USE_ALPHAHASH
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
#endif`,hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pd=`#ifdef USE_AOMAP
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
#endif`,md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gd=`#ifdef USE_BATCHING
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
#endif`,_d=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bd=`#ifdef USE_IRIDESCENCE
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
#endif`,Md=`#ifdef USE_BUMPMAP
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
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ld=`#define PI 3.141592653589793
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
} // validated`,Dd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Id=`vec3 transformedNormal = objectNormal;
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
#endif`,Nd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Od=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Gd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zd=`#ifdef USE_GRADIENTMAP
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
}`,Kd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qd=`uniform bool receiveShadow;
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
#endif`,tf=`#ifdef USE_ENVMAP
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
#endif`,ef=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,af=`PhysicalMaterial material;
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
#endif`,of=`struct PhysicalMaterial {
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
}`,lf=`
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
#endif`,cf=`#if defined( RE_IndirectDiffuse )
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
#endif`,hf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,df=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ff=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vf=`#if defined( USE_POINTS_UV )
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
#endif`,xf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ef=`#ifdef USE_MORPHTARGETS
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
#endif`,wf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Af=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lf=`#ifdef USE_NORMALMAP
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
#endif`,Df=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,If=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ff=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Of=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qf=`float getShadowMask() {
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
}`,Yf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zf=`#ifdef USE_SKINNING
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
#endif`,Kf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$f=`#ifdef USE_SKINNING
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
#endif`,Jf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ep=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,np=`#ifdef USE_TRANSMISSION
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
#endif`,ip=`#ifdef USE_TRANSMISSION
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
#endif`,rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cp=`uniform sampler2D t2D;
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
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,up=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pp=`#include <common>
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
}`,mp=`#if DEPTH_PACKING == 3200
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
}`,gp=`#define DISTANCE
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
}`,_p=`#define DISTANCE
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
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`uniform float scale;
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
}`,bp=`uniform vec3 diffuse;
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
}`,Mp=`#include <common>
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
}`,Sp=`uniform vec3 diffuse;
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
}`,Ep=`#define LAMBERT
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
}`,wp=`#define LAMBERT
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
}`,Tp=`#define MATCAP
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
}`,Ap=`#define MATCAP
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
}`,Rp=`#define NORMAL
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
}`,Cp=`#define NORMAL
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
}`,Pp=`#define PHONG
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
}`,Lp=`#define PHONG
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
}`,Dp=`#define STANDARD
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
}`,Ip=`#define STANDARD
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
}`,Np=`#define TOON
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
}`,Up=`#define TOON
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
}`,Fp=`uniform float size;
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
}`,Op=`uniform vec3 diffuse;
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
}`,kp=`#include <common>
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
}`,Bp=`uniform vec3 color;
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
}`,zp=`uniform float rotation;
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
}`,Vp=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:ld,alphahash_pars_fragment:cd,alphamap_fragment:hd,alphamap_pars_fragment:ud,alphatest_fragment:dd,alphatest_pars_fragment:fd,aomap_fragment:pd,aomap_pars_fragment:md,batching_pars_vertex:gd,batching_vertex:_d,begin_vertex:vd,beginnormal_vertex:xd,bsdfs:yd,iridescence_fragment:bd,bumpmap_pars_fragment:Md,clipping_planes_fragment:Sd,clipping_planes_pars_fragment:Ed,clipping_planes_pars_vertex:wd,clipping_planes_vertex:Td,color_fragment:Ad,color_pars_fragment:Rd,color_pars_vertex:Cd,color_vertex:Pd,common:Ld,cube_uv_reflection_fragment:Dd,defaultnormal_vertex:Id,displacementmap_pars_vertex:Nd,displacementmap_vertex:Ud,emissivemap_fragment:Fd,emissivemap_pars_fragment:Od,colorspace_fragment:kd,colorspace_pars_fragment:Bd,envmap_fragment:zd,envmap_common_pars_fragment:Vd,envmap_pars_fragment:Hd,envmap_pars_vertex:Gd,envmap_physical_pars_fragment:tf,envmap_vertex:Wd,fog_vertex:Xd,fog_pars_vertex:jd,fog_fragment:qd,fog_pars_fragment:Yd,gradientmap_pars_fragment:Zd,lightmap_pars_fragment:Kd,lights_lambert_fragment:$d,lights_lambert_pars_fragment:Jd,lights_pars_begin:Qd,lights_toon_fragment:ef,lights_toon_pars_fragment:nf,lights_phong_fragment:rf,lights_phong_pars_fragment:sf,lights_physical_fragment:af,lights_physical_pars_fragment:of,lights_fragment_begin:lf,lights_fragment_maps:cf,lights_fragment_end:hf,logdepthbuf_fragment:uf,logdepthbuf_pars_fragment:df,logdepthbuf_pars_vertex:ff,logdepthbuf_vertex:pf,map_fragment:mf,map_pars_fragment:gf,map_particle_fragment:_f,map_particle_pars_fragment:vf,metalnessmap_fragment:xf,metalnessmap_pars_fragment:yf,morphinstance_vertex:bf,morphcolor_vertex:Mf,morphnormal_vertex:Sf,morphtarget_pars_vertex:Ef,morphtarget_vertex:wf,normal_fragment_begin:Tf,normal_fragment_maps:Af,normal_pars_fragment:Rf,normal_pars_vertex:Cf,normal_vertex:Pf,normalmap_pars_fragment:Lf,clearcoat_normal_fragment_begin:Df,clearcoat_normal_fragment_maps:If,clearcoat_pars_fragment:Nf,iridescence_pars_fragment:Uf,opaque_fragment:Ff,packing:Of,premultiplied_alpha_fragment:kf,project_vertex:Bf,dithering_fragment:zf,dithering_pars_fragment:Vf,roughnessmap_fragment:Hf,roughnessmap_pars_fragment:Gf,shadowmap_pars_fragment:Wf,shadowmap_pars_vertex:Xf,shadowmap_vertex:jf,shadowmask_pars_fragment:qf,skinbase_vertex:Yf,skinning_pars_vertex:Zf,skinning_vertex:Kf,skinnormal_vertex:$f,specularmap_fragment:Jf,specularmap_pars_fragment:Qf,tonemapping_fragment:tp,tonemapping_pars_fragment:ep,transmission_fragment:np,transmission_pars_fragment:ip,uv_pars_fragment:rp,uv_pars_vertex:sp,uv_vertex:ap,worldpos_vertex:op,background_vert:lp,background_frag:cp,backgroundCube_vert:hp,backgroundCube_frag:up,cube_vert:dp,cube_frag:fp,depth_vert:pp,depth_frag:mp,distanceRGBA_vert:gp,distanceRGBA_frag:_p,equirect_vert:vp,equirect_frag:xp,linedashed_vert:yp,linedashed_frag:bp,meshbasic_vert:Mp,meshbasic_frag:Sp,meshlambert_vert:Ep,meshlambert_frag:wp,meshmatcap_vert:Tp,meshmatcap_frag:Ap,meshnormal_vert:Rp,meshnormal_frag:Cp,meshphong_vert:Pp,meshphong_frag:Lp,meshphysical_vert:Dp,meshphysical_frag:Ip,meshtoon_vert:Np,meshtoon_frag:Up,points_vert:Fp,points_frag:Op,shadow_vert:kp,shadow_frag:Bp,sprite_vert:zp,sprite_frag:Vp},Pt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Mn={basic:{uniforms:Ye([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Ye([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ae(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Ye([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Ye([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Ye([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new ae(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Ye([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Ye([Pt.points,Pt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Ye([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Ye([Pt.common,Pt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Ye([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Ye([Pt.sprite,Pt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Ye([Pt.common,Pt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Ye([Pt.lights,Pt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Mn.physical={uniforms:Ye([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const ss={r:0,b:0,g:0},di=new tn,Hp=new ie;function Gp(i,t,e,n,r,s,o){const a=new ae(0);let l=s===!0?0:1,c,d,f=null,p=0,u=null;function _(x){let E=x.isScene===!0?x.background:null;return E&&E.isTexture&&(E=(x.backgroundBlurriness>0?e:t).get(E)),E}function g(x){let E=!1;const M=_(x);M===null?h(a,l):M&&M.isColor&&(h(M,1),E=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,E){const M=_(E);M&&(M.isCubeTexture||M.mapping===Bs)?(d===void 0&&(d=new Ie(new Ei(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:rr(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),di.copy(E.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Hp.makeRotationFromEuler(di)),d.material.toneMapped=ue.getTransfer(M.colorSpace)!==we,(f!==M||p!==M.version||u!==i.toneMapping)&&(d.material.needsUpdate=!0,f=M,p=M.version,u=i.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ie(new Dr(2,2),new ii({name:"BackgroundMaterial",uniforms:rr(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ue.getTransfer(M.colorSpace)!==we,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||p!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,p=M.version,u=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function h(x,E){x.getRGB(ss,qc(i)),n.buffers.color.setClear(ss.r,ss.g,ss.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(x,E=1){a.set(x),l=E,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,h(a,l)},render:g,addToRenderList:m}}function Wp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,o=!1;function a(w,B,R,z,y){let H=!1;const W=f(z,R,B);s!==W&&(s=W,c(s.object)),H=u(w,z,R,y),H&&_(w,z,R,y),y!==null&&t.update(y,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,M(w,B,R,z),y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(y).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function d(w){return i.deleteVertexArray(w)}function f(w,B,R){const z=R.wireframe===!0;let y=n[w.id];y===void 0&&(y={},n[w.id]=y);let H=y[B.id];H===void 0&&(H={},y[B.id]=H);let W=H[z];return W===void 0&&(W=p(l()),H[z]=W),W}function p(w){const B=[],R=[],z=[];for(let y=0;y<e;y++)B[y]=0,R[y]=0,z[y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:R,attributeDivisors:z,object:w,attributes:{},index:null}}function u(w,B,R,z){const y=s.attributes,H=B.attributes;let W=0;const q=R.getAttributes();for(const J in q)if(q[J].location>=0){const ft=y[J];let j=H[J];if(j===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(j=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(j=w.instanceColor)),ft===void 0||ft.attribute!==j||j&&ft.data!==j.data)return!0;W++}return s.attributesNum!==W||s.index!==z}function _(w,B,R,z){const y={},H=B.attributes;let W=0;const q=R.getAttributes();for(const J in q)if(q[J].location>=0){let ft=H[J];ft===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(ft=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(ft=w.instanceColor));const j={};j.attribute=ft,ft&&ft.data&&(j.data=ft.data),y[J]=j,W++}s.attributes=y,s.attributesNum=W,s.index=z}function g(){const w=s.newAttributes;for(let B=0,R=w.length;B<R;B++)w[B]=0}function m(w){h(w,0)}function h(w,B){const R=s.newAttributes,z=s.enabledAttributes,y=s.attributeDivisors;R[w]=1,z[w]===0&&(i.enableVertexAttribArray(w),z[w]=1),y[w]!==B&&(i.vertexAttribDivisor(w,B),y[w]=B)}function x(){const w=s.newAttributes,B=s.enabledAttributes;for(let R=0,z=B.length;R<z;R++)B[R]!==w[R]&&(i.disableVertexAttribArray(R),B[R]=0)}function E(w,B,R,z,y,H,W){W===!0?i.vertexAttribIPointer(w,B,R,y,H):i.vertexAttribPointer(w,B,R,z,y,H)}function M(w,B,R,z){g();const y=z.attributes,H=R.getAttributes(),W=B.defaultAttributeValues;for(const q in H){const J=H[q];if(J.location>=0){let Q=y[q];if(Q===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor)),Q!==void 0){const ft=Q.normalized,j=Q.itemSize,Z=t.get(Q);if(Z===void 0)continue;const _t=Z.buffer,X=Z.type,Y=Z.bytesPerElement,lt=X===i.INT||X===i.UNSIGNED_INT||Q.gpuType===wo;if(Q.isInterleavedBufferAttribute){const dt=Q.data,xt=dt.stride,Et=Q.offset;if(dt.isInstancedInterleavedBuffer){for(let kt=0;kt<J.locationSize;kt++)h(J.location+kt,dt.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let kt=0;kt<J.locationSize;kt++)m(J.location+kt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let kt=0;kt<J.locationSize;kt++)E(J.location+kt,j/J.locationSize,X,ft,xt*Y,(Et+j/J.locationSize*kt)*Y,lt)}else{if(Q.isInstancedBufferAttribute){for(let dt=0;dt<J.locationSize;dt++)h(J.location+dt,Q.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let dt=0;dt<J.locationSize;dt++)m(J.location+dt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let dt=0;dt<J.locationSize;dt++)E(J.location+dt,j/J.locationSize,X,ft,j*Y,j/J.locationSize*dt*Y,lt)}}else if(W!==void 0){const ft=W[q];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(J.location,ft);break;case 3:i.vertexAttrib3fv(J.location,ft);break;case 4:i.vertexAttrib4fv(J.location,ft);break;default:i.vertexAttrib1fv(J.location,ft)}}}}x()}function C(){N();for(const w in n){const B=n[w];for(const R in B){const z=B[R];for(const y in z)d(z[y].object),delete z[y];delete B[R]}delete n[w]}}function L(w){if(n[w.id]===void 0)return;const B=n[w.id];for(const R in B){const z=B[R];for(const y in z)d(z[y].object),delete z[y];delete B[R]}delete n[w.id]}function P(w){for(const B in n){const R=n[B];if(R[w.id]===void 0)continue;const z=R[w.id];for(const y in z)d(z[y].object),delete z[y];delete R[w.id]}}function N(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function Xp(i,t,e){let n;function r(c){n=c}function s(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function o(c,d,f){f!==0&&(i.drawArraysInstanced(n,c,d,f),e.update(d,n,f))}function a(c,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,f);let u=0;for(let _=0;_<f;_++)u+=d[_];e.update(u,n,1)}function l(c,d,f,p){if(f===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let _=0;_<c.length;_++)o(c[_],d[_],p[_]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,d,0,p,0,f);let _=0;for(let g=0;g<f;g++)_+=d[g]*p[g];e.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jp(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==dn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const N=P===Pr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Vn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==En&&!N)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:u,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:C,maxSamples:L}}function qp(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Jn,a=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const u=f.length!==0||p||n!==0||r;return r=p,n=f.length,u},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){e=d(f,p,0)},this.setState=function(f,p,u){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,h=i.get(f);if(!r||_===null||_.length===0||s&&!m)s?d(null):c();else{const x=s?0:n,E=x*4;let M=h.clippingState||null;l.value=M,M=d(_,p,E,u);for(let C=0;C!==E;++C)M[C]=e[C];h.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,p,u,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const h=u+g*4,x=p.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let E=0,M=u;E!==g;++E,M+=4)o.copy(f[E]).applyMatrix4(x,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Yp(i){let t=new WeakMap;function e(o,a){return a===Xa?o.mapping=Qi:a===ja&&(o.mapping=tr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xa||a===ja)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new rd(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Io extends Yc{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Xi=4,Sl=[.125,.215,.35,.446,.526,.582],gi=20,va=new Io,El=new ae;let xa=null,ya=0,ba=0,Ma=!1;const pi=(1+Math.sqrt(5))/2,Vi=1/pi,wl=[new K(-pi,Vi,0),new K(pi,Vi,0),new K(-Vi,0,pi),new K(Vi,0,pi),new K(0,pi,-Vi),new K(0,pi,Vi),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class Tl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){xa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xa,ya,ba),this._renderer.xr.enabled=Ma,t.scissorTest=!1,as(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Pr,format:dn,colorSpace:ar,depthBuffer:!1},r=Al(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Al(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zp(s)),this._blurMaterial=Kp(s,t,e)}return r}_compileMaterial(t){const e=new Ie(this._lodPlanes[0],t);this._renderer.compile(e,va)}_sceneToCubeUV(t,e,n,r){const a=new We(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(El),d.toneMapping=ni,d.autoClear=!1;const u=new Ar({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),_=new Ie(new Ei,u);let g=!1;const m=t.background;m?m.isColor&&(u.color.copy(m),t.background=null,g=!0):(u.color.copy(El),g=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):x===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const E=this._cubeSize;as(r,x*E,h>2?E:0,E,E),d.setRenderTarget(r),g&&d.render(_,a),d.render(t,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Qi||t.mapping===tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ie(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;as(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,va)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wl[(r-s-1)%wl.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Ie(this._lodPlanes[r],c),p=c.uniforms,u=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*gi-1),g=s/_,m=isFinite(s)?1+Math.floor(d*g):gi;m>gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const h=[];let x=0;for(let P=0;P<gi;++P){const N=P/g,S=Math.exp(-N*N/2);h.push(S),P===0?x+=S:P<m&&(x+=2*S)}for(let P=0;P<h.length;P++)h[P]=h[P]/x;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=h,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:E}=this;p.dTheta.value=_,p.mipInt.value=E-n;const M=this._sizeLods[r],C=3*M*(r>E-Xi?r-E+Xi:0),L=4*(this._cubeSize-M);as(e,C,L,3*M,2*M),l.setRenderTarget(e),l.render(f,va)}}function Zp(i){const t=[],e=[],n=[];let r=i;const s=i-Xi+1+Sl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Xi?l=Sl[o-i+Xi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,f=1+c,p=[d,d,f,d,f,f,d,d,f,f,d,f],u=6,_=6,g=3,m=2,h=1,x=new Float32Array(g*_*u),E=new Float32Array(m*_*u),M=new Float32Array(h*_*u);for(let L=0;L<u;L++){const P=L%3*2/3-1,N=L>2?0:-1,S=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];x.set(S,g*_*L),E.set(p,m*_*L);const w=[L,L,L,L,L,L];M.set(w,h*_*L)}const C=new ze;C.setAttribute("position",new on(x,g)),C.setAttribute("uv",new on(E,m)),C.setAttribute("faceIndex",new on(M,h)),t.push(C),r>Xi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Al(i,t,e){const n=new bi(i,t,e);return n.texture.mapping=Bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function as(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Kp(i,t,e){const n=new Float32Array(gi),r=new K(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:No(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Rl(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:No(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Cl(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function No(){return`

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
	`}function $p(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xa||l===ja,d=l===Qi||l===tr;if(c||d){let f=t.get(a);const p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Tl(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const u=a.image;return c&&u&&u.height>0||d&&u&&r(u)?(e===null&&(e=new Tl(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Jp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&br("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Qp(i,t,e,n){const r={},s=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);for(const _ in p.morphAttributes){const g=p.morphAttributes[_];for(let m=0,h=g.length;m<h;m++)t.remove(g[m])}p.removeEventListener("dispose",o),delete r[p.id];const u=s.get(p);u&&(t.remove(u),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function l(f){const p=f.attributes;for(const _ in p)t.update(p[_],i.ARRAY_BUFFER);const u=f.morphAttributes;for(const _ in u){const g=u[_];for(let m=0,h=g.length;m<h;m++)t.update(g[m],i.ARRAY_BUFFER)}}function c(f){const p=[],u=f.index,_=f.attributes.position;let g=0;if(u!==null){const x=u.array;g=u.version;for(let E=0,M=x.length;E<M;E+=3){const C=x[E+0],L=x[E+1],P=x[E+2];p.push(C,L,L,P,P,C)}}else if(_!==void 0){const x=_.array;g=_.version;for(let E=0,M=x.length/3-1;E<M;E+=3){const C=E+0,L=E+1,P=E+2;p.push(C,L,L,P,P,C)}}else return;const m=new(zc(p)?jc:Xc)(p,1);m.version=g;const h=s.get(f);h&&t.remove(h),s.set(f,m)}function d(f){const p=s.get(f);if(p){const u=f.index;u!==null&&p.version<u.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function tm(i,t,e){let n;function r(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,u){i.drawElements(n,u,s,p*o),e.update(u,n,1)}function c(p,u,_){_!==0&&(i.drawElementsInstanced(n,u,s,p*o,_),e.update(u,n,_))}function d(p,u,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,p,0,_);let m=0;for(let h=0;h<_;h++)m+=u[h];e.update(m,n,1)}function f(p,u,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<p.length;h++)c(p[h]/o,u[h],g[h]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,s,p,0,g,0,_);let h=0;for(let x=0;x<_;x++)h+=u[x]*g[x];e.update(h,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function em(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function nm(i,t,e){const n=new WeakMap,r=new be;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let p=n.get(a);if(p===void 0||p.count!==f){let w=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",w)};var u=w;p!==void 0&&p.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),g===!0&&(M=2),m===!0&&(M=3);let C=a.attributes.position.count*M,L=1;C>t.maxTextureSize&&(L=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const P=new Float32Array(C*L*4*f),N=new Hc(P,C,L,f);N.type=En,N.needsUpdate=!0;const S=M*4;for(let B=0;B<f;B++){const R=h[B],z=x[B],y=E[B],H=C*L*4*B;for(let W=0;W<R.count;W++){const q=W*S;_===!0&&(r.fromBufferAttribute(R,W),P[H+q+0]=r.x,P[H+q+1]=r.y,P[H+q+2]=r.z,P[H+q+3]=0),g===!0&&(r.fromBufferAttribute(z,W),P[H+q+4]=r.x,P[H+q+5]=r.y,P[H+q+6]=r.z,P[H+q+7]=0),m===!0&&(r.fromBufferAttribute(y,W),P[H+q+8]=r.x,P[H+q+9]=r.y,P[H+q+10]=r.z,P[H+q+11]=y.itemSize===4?r.w:1)}}p={count:f,texture:N,size:new te(C,L)},n.set(a,p),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function im(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,f=t.get(l,d);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class $c extends Be{constructor(t,e,n,r,s,o,a,l,c,d=Yi){if(d!==Yi&&d!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Yi&&(n=yi),n===void 0&&d===nr&&(n=er),super(null,r,s,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Jc=new Be,Pl=new $c(1,1),Qc=new Hc,th=new Hu,eh=new Zc,Ll=[],Dl=[],Il=new Float32Array(16),Nl=new Float32Array(9),Ul=new Float32Array(4);function or(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Ll[r];if(s===void 0&&(s=new Float32Array(r),Ll[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Hs(i,t){let e=Dl[t];e===void 0&&(e=new Int32Array(t),Dl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function rm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function lm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Ul.set(n),i.uniformMatrix2fv(this.addr,!1,Ul),Fe(e,n)}}function cm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Nl.set(n),i.uniformMatrix3fv(this.addr,!1,Nl),Fe(e,n)}}function hm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Il.set(n),i.uniformMatrix4fv(this.addr,!1,Il),Fe(e,n)}}function um(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function mm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function xm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Pl.compareFunction=Bc,s=Pl):s=Jc,e.setTexture2D(t||s,r)}function ym(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||th,r)}function bm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||eh,r)}function Mm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Qc,r)}function Sm(i){switch(i){case 5126:return rm;case 35664:return sm;case 35665:return am;case 35666:return om;case 35674:return lm;case 35675:return cm;case 35676:return hm;case 5124:case 35670:return um;case 35667:case 35671:return dm;case 35668:case 35672:return fm;case 35669:case 35673:return pm;case 5125:return mm;case 36294:return gm;case 36295:return _m;case 36296:return vm;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return ym;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return Mm}}function Em(i,t){i.uniform1fv(this.addr,t)}function wm(i,t){const e=or(t,this.size,2);i.uniform2fv(this.addr,e)}function Tm(i,t){const e=or(t,this.size,3);i.uniform3fv(this.addr,e)}function Am(i,t){const e=or(t,this.size,4);i.uniform4fv(this.addr,e)}function Rm(i,t){const e=or(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cm(i,t){const e=or(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pm(i,t){const e=or(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Lm(i,t){i.uniform1iv(this.addr,t)}function Dm(i,t){i.uniform2iv(this.addr,t)}function Im(i,t){i.uniform3iv(this.addr,t)}function Nm(i,t){i.uniform4iv(this.addr,t)}function Um(i,t){i.uniform1uiv(this.addr,t)}function Fm(i,t){i.uniform2uiv(this.addr,t)}function Om(i,t){i.uniform3uiv(this.addr,t)}function km(i,t){i.uniform4uiv(this.addr,t)}function Bm(i,t,e){const n=this.cache,r=t.length,s=Hs(e,r);Ue(n,s)||(i.uniform1iv(this.addr,s),Fe(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Jc,s[o])}function zm(i,t,e){const n=this.cache,r=t.length,s=Hs(e,r);Ue(n,s)||(i.uniform1iv(this.addr,s),Fe(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||th,s[o])}function Vm(i,t,e){const n=this.cache,r=t.length,s=Hs(e,r);Ue(n,s)||(i.uniform1iv(this.addr,s),Fe(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||eh,s[o])}function Hm(i,t,e){const n=this.cache,r=t.length,s=Hs(e,r);Ue(n,s)||(i.uniform1iv(this.addr,s),Fe(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Qc,s[o])}function Gm(i){switch(i){case 5126:return Em;case 35664:return wm;case 35665:return Tm;case 35666:return Am;case 35674:return Rm;case 35675:return Cm;case 35676:return Pm;case 5124:case 35670:return Lm;case 35667:case 35671:return Dm;case 35668:case 35672:return Im;case 35669:case 35673:return Nm;case 5125:return Um;case 36294:return Fm;case 36295:return Om;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Vm;case 36289:case 36303:case 36311:case 36292:return Hm}}class Wm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sm(e.type)}}class Xm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gm(e.type)}}class jm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function Fl(i,t){i.seq.push(t),i.map[t.id]=t}function qm(i,t,e){const n=i.name,r=n.length;for(Sa.lastIndex=0;;){const s=Sa.exec(n),o=Sa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Fl(e,c===void 0?new Wm(a,i,t):new Xm(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new jm(a),Fl(e,f)),e=f}}}class Ps{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);qm(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Ol(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Ym=37297;let Zm=0;function Km(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const kl=new ce;function $m(i){ue._getMatrix(kl,ue.workingColorSpace,i);const t=`mat3( ${kl.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case Vs:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Bl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Km(i.getShaderSource(t),o)}else return r}function Jm(i,t){const e=$m(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Qm(i,t){let e;switch(t){case Jh:e="Linear";break;case Qh:e="Reinhard";break;case tu:e="Cineon";break;case eu:e="ACESFilmic";break;case iu:e="AgX";break;case ru:e="Neutral";break;case nu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const os=new K;function tg(){ue.getLuminanceCoefficients(os);const i=os.x.toFixed(4),t=os.y.toFixed(4),e=os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function ng(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ig(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Mr(i){return i!==""}function zl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mo(i){return i.replace(rg,ag)}const sg=new Map;function ag(i,t){let e=he[t];if(e===void 0){const n=sg.get(t);if(n!==void 0)e=he[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mo(e)}const og=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hl(i){return i.replace(og,lg)}function lg(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function cg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ac?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function hg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qi:case tr:t="ENVMAP_TYPE_CUBE";break;case Bs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ug(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case tr:t="ENVMAP_MODE_REFRACTION";break}return t}function dg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ks:t="ENVMAP_BLENDING_MULTIPLY";break;case Kh:t="ENVMAP_BLENDING_MIX";break;case $h:t="ENVMAP_BLENDING_ADD";break}return t}function fg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function pg(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=cg(e),c=hg(e),d=ug(e),f=dg(e),p=fg(e),u=eg(e),_=ng(s),g=r.createProgram();let m,h,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Mr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Mr).join(`
`),h.length>0&&(h+=`
`)):(m=[Gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),h=[Gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?he.tonemapping_pars_fragment:"",e.toneMapping!==ni?Qm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,Jm("linearToOutputTexel",e.outputColorSpace),tg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mr).join(`
`)),o=Mo(o),o=zl(o,e),o=Vl(o,e),a=Mo(a),a=zl(a,e),a=Vl(a,e),o=Hl(o),a=Hl(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===el?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===el?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=x+m+o,M=x+h+a,C=Ol(r,r.VERTEX_SHADER,E),L=Ol(r,r.FRAGMENT_SHADER,M);r.attachShader(g,C),r.attachShader(g,L),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function P(B){if(i.debug.checkShaderErrors){const R=r.getProgramInfoLog(g).trim(),z=r.getShaderInfoLog(C).trim(),y=r.getShaderInfoLog(L).trim();let H=!0,W=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,C,L);else{const q=Bl(r,C,"vertex"),J=Bl(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+R+`
`+q+`
`+J)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(z===""||y==="")&&(W=!1);W&&(B.diagnostics={runnable:H,programLog:R,vertexShader:{log:z,prefix:m},fragmentShader:{log:y,prefix:h}})}r.deleteShader(C),r.deleteShader(L),N=new Ps(r,g),S=ig(r,g)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(g,Ym)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=L,this}let mg=0;class gg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new _g(t),e.set(t,n)),n}}class _g{constructor(t){this.id=mg++,this.code=t,this.usedTimes=0}}function vg(i,t,e,n,r,s,o){const a=new Gc,l=new gg,c=new Set,d=[],f=r.logarithmicDepthBuffer,p=r.vertexTextures;let u=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,w,B,R,z){const y=R.fog,H=z.geometry,W=S.isMeshStandardMaterial?R.environment:null,q=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),J=q&&q.mapping===Bs?q.image.height:null,Q=_[S.type];S.precision!==null&&(u=r.getMaxPrecision(S.precision),u!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const ft=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,j=ft!==void 0?ft.length:0;let Z=0;H.morphAttributes.position!==void 0&&(Z=1),H.morphAttributes.normal!==void 0&&(Z=2),H.morphAttributes.color!==void 0&&(Z=3);let _t,X,Y,lt;if(Q){const le=Mn[Q];_t=le.vertexShader,X=le.fragmentShader}else _t=S.vertexShader,X=S.fragmentShader,l.update(S),Y=l.getVertexShaderID(S),lt=l.getFragmentShaderID(S);const dt=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Et=z.isInstancedMesh===!0,kt=z.isBatchedMesh===!0,Kt=!!S.map,Jt=!!S.matcap,de=!!q,v=!!S.aoMap,mt=!!S.lightMap,st=!!S.bumpMap,V=!!S.normalMap,O=!!S.displacementMap,$=!!S.emissiveMap,ot=!!S.metalnessMap,D=!!S.roughnessMap,b=S.anisotropy>0,G=S.clearcoat>0,rt=S.dispersion>0,nt=S.iridescence>0,at=S.sheen>0,wt=S.transmission>0,yt=b&&!!S.anisotropyMap,At=G&&!!S.clearcoatMap,oe=G&&!!S.clearcoatNormalMap,bt=G&&!!S.clearcoatRoughnessMap,Ut=nt&&!!S.iridescenceMap,Dt=nt&&!!S.iridescenceThicknessMap,qt=at&&!!S.sheenColorMap,Ft=at&&!!S.sheenRoughnessMap,Qt=!!S.specularMap,ee=!!S.specularColorMap,ve=!!S.specularIntensityMap,et=wt&&!!S.transmissionMap,Rt=wt&&!!S.thicknessMap,pt=!!S.gradientMap,vt=!!S.alphaMap,Ct=S.alphaTest>0,It=!!S.alphaHash,re=!!S.extensions;let Ae=ni;S.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Ae=i.toneMapping);const Oe={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:_t,fragmentShader:X,defines:S.defines,customVertexShaderID:Y,customFragmentShaderID:lt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:kt,batchingColor:kt&&z._colorsTexture!==null,instancing:Et,instancingColor:Et&&z.instanceColor!==null,instancingMorph:Et&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:ar,alphaToCoverage:!!S.alphaToCoverage,map:Kt,matcap:Jt,envMap:de,envMapMode:de&&q.mapping,envMapCubeUVHeight:J,aoMap:v,lightMap:mt,bumpMap:st,normalMap:V,displacementMap:p&&O,emissiveMap:$,normalMapObjectSpace:V&&S.normalMapType===hu,normalMapTangentSpace:V&&S.normalMapType===zs,metalnessMap:ot,roughnessMap:D,anisotropy:b,anisotropyMap:yt,clearcoat:G,clearcoatMap:At,clearcoatNormalMap:oe,clearcoatRoughnessMap:bt,dispersion:rt,iridescence:nt,iridescenceMap:Ut,iridescenceThicknessMap:Dt,sheen:at,sheenColorMap:qt,sheenRoughnessMap:Ft,specularMap:Qt,specularColorMap:ee,specularIntensityMap:ve,transmission:wt,transmissionMap:et,thicknessMap:Rt,gradientMap:pt,opaque:S.transparent===!1&&S.blending===qi&&S.alphaToCoverage===!1,alphaMap:vt,alphaTest:Ct,alphaHash:It,combine:S.combine,mapUv:Kt&&g(S.map.channel),aoMapUv:v&&g(S.aoMap.channel),lightMapUv:mt&&g(S.lightMap.channel),bumpMapUv:st&&g(S.bumpMap.channel),normalMapUv:V&&g(S.normalMap.channel),displacementMapUv:O&&g(S.displacementMap.channel),emissiveMapUv:$&&g(S.emissiveMap.channel),metalnessMapUv:ot&&g(S.metalnessMap.channel),roughnessMapUv:D&&g(S.roughnessMap.channel),anisotropyMapUv:yt&&g(S.anisotropyMap.channel),clearcoatMapUv:At&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&g(S.sheenRoughnessMap.channel),specularMapUv:Qt&&g(S.specularMap.channel),specularColorMapUv:ee&&g(S.specularColorMap.channel),specularIntensityMapUv:ve&&g(S.specularIntensityMap.channel),transmissionMapUv:et&&g(S.transmissionMap.channel),thicknessMapUv:Rt&&g(S.thicknessMap.channel),alphaMapUv:vt&&g(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(V||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!H.attributes.uv&&(Kt||vt),fog:!!y,useFog:S.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:xt,skinning:z.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Z,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Kt&&S.map.isVideoTexture===!0&&ue.getTransfer(S.map.colorSpace)===we,decodeVideoTextureEmissive:$&&S.emissiveMap.isVideoTexture===!0&&ue.getTransfer(S.emissiveMap.colorSpace)===we,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Sn,flipSided:S.side===Qe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:re&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&S.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function h(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const B in S.defines)w.push(B),w.push(S.defines[B]);return S.isRawShaderMaterial===!1&&(x(w,S),E(w,S),w.push(i.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function x(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function E(S,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),S.push(a.mask)}function M(S){const w=_[S.type];let B;if(w){const R=Mn[w];B=td.clone(R.uniforms)}else B=S.uniforms;return B}function C(S,w){let B;for(let R=0,z=d.length;R<z;R++){const y=d[R];if(y.cacheKey===w){B=y,++B.usedTimes;break}}return B===void 0&&(B=new pg(i,w,S,s),d.push(B)),B}function L(S){if(--S.usedTimes===0){const w=d.indexOf(S);d[w]=d[d.length-1],d.pop(),S.destroy()}}function P(S){l.remove(S)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:M,acquireProgram:C,releaseProgram:L,releaseShaderCache:P,programs:d,dispose:N}}function xg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function yg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Wl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xl(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f,p,u,_,g,m){let h=i[t];return h===void 0?(h={id:f.id,object:f,geometry:p,material:u,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},i[t]=h):(h.id=f.id,h.object=f,h.geometry=p,h.material=u,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=g,h.group=m),t++,h}function a(f,p,u,_,g,m){const h=o(f,p,u,_,g,m);u.transmission>0?n.push(h):u.transparent===!0?r.push(h):e.push(h)}function l(f,p,u,_,g,m){const h=o(f,p,u,_,g,m);u.transmission>0?n.unshift(h):u.transparent===!0?r.unshift(h):e.unshift(h)}function c(f,p){e.length>1&&e.sort(f||yg),n.length>1&&n.sort(p||Wl),r.length>1&&r.sort(p||Wl)}function d(){for(let f=t,p=i.length;f<p;f++){const u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function bg(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Xl,i.set(n,[o])):r>=s.length?(o=new Xl,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Mg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new K,color:new ae};break;case"SpotLight":e={position:new K,direction:new K,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new K,halfWidth:new K,halfHeight:new K};break}return i[t.id]=e,e}}}function Sg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Eg=0;function wg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Tg(i){const t=new Mg,e=Sg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new K);const r=new K,s=new ie,o=new ie;function a(c){let d=0,f=0,p=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let u=0,_=0,g=0,m=0,h=0,x=0,E=0,M=0,C=0,L=0,P=0;c.sort(wg);for(let S=0,w=c.length;S<w;S++){const B=c[S],R=B.color,z=B.intensity,y=B.distance,H=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=R.r*z,f+=R.g*z,p+=R.b*z;else if(B.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(B.sh.coefficients[W],z);P++}else if(B.isDirectionalLight){const W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const q=B.shadow,J=e.get(B);J.shadowIntensity=q.intensity,J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,n.directionalShadow[u]=J,n.directionalShadowMap[u]=H,n.directionalShadowMatrix[u]=B.shadow.matrix,x++}n.directional[u]=W,u++}else if(B.isSpotLight){const W=t.get(B);W.position.setFromMatrixPosition(B.matrixWorld),W.color.copy(R).multiplyScalar(z),W.distance=y,W.coneCos=Math.cos(B.angle),W.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),W.decay=B.decay,n.spot[g]=W;const q=B.shadow;if(B.map&&(n.spotLightMap[C]=B.map,C++,q.updateMatrices(B),B.castShadow&&L++),n.spotLightMatrix[g]=q.matrix,B.castShadow){const J=e.get(B);J.shadowIntensity=q.intensity,J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,n.spotShadow[g]=J,n.spotShadowMap[g]=H,M++}g++}else if(B.isRectAreaLight){const W=t.get(B);W.color.copy(R).multiplyScalar(z),W.halfWidth.set(B.width*.5,0,0),W.halfHeight.set(0,B.height*.5,0),n.rectArea[m]=W,m++}else if(B.isPointLight){const W=t.get(B);if(W.color.copy(B.color).multiplyScalar(B.intensity),W.distance=B.distance,W.decay=B.decay,B.castShadow){const q=B.shadow,J=e.get(B);J.shadowIntensity=q.intensity,J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,J.shadowCameraNear=q.camera.near,J.shadowCameraFar=q.camera.far,n.pointShadow[_]=J,n.pointShadowMap[_]=H,n.pointShadowMatrix[_]=B.shadow.matrix,E++}n.point[_]=W,_++}else if(B.isHemisphereLight){const W=t.get(B);W.skyColor.copy(B.color).multiplyScalar(z),W.groundColor.copy(B.groundColor).multiplyScalar(z),n.hemi[h]=W,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=p;const N=n.hash;(N.directionalLength!==u||N.pointLength!==_||N.spotLength!==g||N.rectAreaLength!==m||N.hemiLength!==h||N.numDirectionalShadows!==x||N.numPointShadows!==E||N.numSpotShadows!==M||N.numSpotMaps!==C||N.numLightProbes!==P)&&(n.directional.length=u,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+C-L,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=P,N.directionalLength=u,N.pointLength=_,N.spotLength=g,N.rectAreaLength=m,N.hemiLength=h,N.numDirectionalShadows=x,N.numPointShadows=E,N.numSpotShadows=M,N.numSpotMaps=C,N.numLightProbes=P,n.version=Eg++)}function l(c,d){let f=0,p=0,u=0,_=0,g=0;const m=d.matrixWorldInverse;for(let h=0,x=c.length;h<x;h++){const E=c[h];if(E.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(E.isSpotLight){const M=n.spot[u];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),u++}else if(E.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const M=n.point[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),p++}else if(E.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function jl(i){const t=new Tg(i),e=[],n=[];function r(d){c.camera=d,e.length=0,n.length=0}function s(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Ag(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new jl(i),t.set(r,[a])):s>=o.length?(a=new jl(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Rg extends bn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cg extends bn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lg=`uniform sampler2D shadow_pass;
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
}`;function Dg(i,t,e){let n=new Do;const r=new te,s=new te,o=new be,a=new Rg({depthPacking:cu}),l=new Cg,c={},d=e.maxTextureSize,f={[zn]:Qe,[Qe]:zn,[Sn]:Sn},p=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:Pg,fragmentShader:Lg}),u=p.clone();u.defines.HORIZONTAL_PASS=1;const _=new ze;_.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ie(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ac;let h=this.type;this.render=function(L,P,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const S=i.getRenderTarget(),w=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),R=i.state;R.setBlending(ei),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const z=h!==Nn&&this.type===Nn,y=h===Nn&&this.type!==Nn;for(let H=0,W=L.length;H<W;H++){const q=L[H],J=q.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const Q=J.getFrameExtents();if(r.multiply(Q),s.copy(J.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Q.x),r.x=s.x*Q.x,J.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Q.y),r.y=s.y*Q.y,J.mapSize.y=s.y)),J.map===null||z===!0||y===!0){const j=this.type!==Nn?{minFilter:an,magFilter:an}:{};J.map!==null&&J.map.dispose(),J.map=new bi(r.x,r.y,j),J.map.texture.name=q.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const ft=J.getViewportCount();for(let j=0;j<ft;j++){const Z=J.getViewport(j);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),R.viewport(o),J.updateMatrices(q,j),n=J.getFrustum(),M(P,N,J.camera,q,this.type)}J.isPointLightShadow!==!0&&this.type===Nn&&x(J,N),J.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(S,w,B)};function x(L,P){const N=t.update(g);p.defines.VSM_SAMPLES!==L.blurSamples&&(p.defines.VSM_SAMPLES=L.blurSamples,u.defines.VSM_SAMPLES=L.blurSamples,p.needsUpdate=!0,u.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new bi(r.x,r.y)),p.uniforms.shadow_pass.value=L.map.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(P,null,N,p,g,null),u.uniforms.shadow_pass.value=L.mapPass.texture,u.uniforms.resolution.value=L.mapSize,u.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(P,null,N,u,g,null)}function E(L,P,N,S){let w=null;const B=N.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(B!==void 0)w=B;else if(w=N.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const R=w.uuid,z=P.uuid;let y=c[R];y===void 0&&(y={},c[R]=y);let H=y[z];H===void 0&&(H=w.clone(),y[z]=H,P.addEventListener("dispose",C)),w=H}if(w.visible=P.visible,w.wireframe=P.wireframe,S===Nn?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:f[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,N.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const R=i.properties.get(w);R.light=N}return w}function M(L,P,N,S,w){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&w===Nn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,L.matrixWorld);const z=t.update(L),y=L.material;if(Array.isArray(y)){const H=z.groups;for(let W=0,q=H.length;W<q;W++){const J=H[W],Q=y[J.materialIndex];if(Q&&Q.visible){const ft=E(L,Q,S,w);L.onBeforeShadow(i,L,P,N,z,ft,J),i.renderBufferDirect(N,null,z,ft,L,J),L.onAfterShadow(i,L,P,N,z,ft,J)}}}else if(y.visible){const H=E(L,y,S,w);L.onBeforeShadow(i,L,P,N,z,H,null),i.renderBufferDirect(N,null,z,H,L,null),L.onAfterShadow(i,L,P,N,z,H,null)}}const R=L.children;for(let z=0,y=R.length;z<y;z++)M(R[z],P,N,S,w)}function C(L){L.target.removeEventListener("dispose",C);for(const N in c){const S=c[N],w=L.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}const Ig={[ka]:Ba,[za]:Ga,[Va]:Wa,[Ji]:Ha,[Ba]:ka,[Ga]:za,[Wa]:Va,[Ha]:Ji};function Ng(i,t){function e(){let et=!1;const Rt=new be;let pt=null;const vt=new be(0,0,0,0);return{setMask:function(Ct){pt!==Ct&&!et&&(i.colorMask(Ct,Ct,Ct,Ct),pt=Ct)},setLocked:function(Ct){et=Ct},setClear:function(Ct,It,re,Ae,Oe){Oe===!0&&(Ct*=Ae,It*=Ae,re*=Ae),Rt.set(Ct,It,re,Ae),vt.equals(Rt)===!1&&(i.clearColor(Ct,It,re,Ae),vt.copy(Rt))},reset:function(){et=!1,pt=null,vt.set(-1,0,0,0)}}}function n(){let et=!1,Rt=!1,pt=null,vt=null,Ct=null;return{setReversed:function(It){if(Rt!==It){const re=t.get("EXT_clip_control");Rt?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT);const Ae=Ct;Ct=null,this.setClear(Ae)}Rt=It},getReversed:function(){return Rt},setTest:function(It){It?dt(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(It){pt!==It&&!et&&(i.depthMask(It),pt=It)},setFunc:function(It){if(Rt&&(It=Ig[It]),vt!==It){switch(It){case ka:i.depthFunc(i.NEVER);break;case Ba:i.depthFunc(i.ALWAYS);break;case za:i.depthFunc(i.LESS);break;case Ji:i.depthFunc(i.LEQUAL);break;case Va:i.depthFunc(i.EQUAL);break;case Ha:i.depthFunc(i.GEQUAL);break;case Ga:i.depthFunc(i.GREATER);break;case Wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=It}},setLocked:function(It){et=It},setClear:function(It){Ct!==It&&(Rt&&(It=1-It),i.clearDepth(It),Ct=It)},reset:function(){et=!1,pt=null,vt=null,Ct=null,Rt=!1}}}function r(){let et=!1,Rt=null,pt=null,vt=null,Ct=null,It=null,re=null,Ae=null,Oe=null;return{setTest:function(le){et||(le?dt(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(le){Rt!==le&&!et&&(i.stencilMask(le),Rt=le)},setFunc:function(le,Ze,fn){(pt!==le||vt!==Ze||Ct!==fn)&&(i.stencilFunc(le,Ze,fn),pt=le,vt=Ze,Ct=fn)},setOp:function(le,Ze,fn){(It!==le||re!==Ze||Ae!==fn)&&(i.stencilOp(le,Ze,fn),It=le,re=Ze,Ae=fn)},setLocked:function(le){et=le},setClear:function(le){Oe!==le&&(i.clearStencil(le),Oe=le)},reset:function(){et=!1,Rt=null,pt=null,vt=null,Ct=null,It=null,re=null,Ae=null,Oe=null}}}const s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let d={},f={},p=new WeakMap,u=[],_=null,g=!1,m=null,h=null,x=null,E=null,M=null,C=null,L=null,P=new ae(0,0,0),N=0,S=!1,w=null,B=null,R=null,z=null,y=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,q=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(J)[1]),W=q>=1):J.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),W=q>=2);let Q=null,ft={};const j=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),_t=new be().fromArray(j),X=new be().fromArray(Z);function Y(et,Rt,pt,vt){const Ct=new Uint8Array(4),It=i.createTexture();i.bindTexture(et,It),i.texParameteri(et,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(et,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let re=0;re<pt;re++)et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?i.texImage3D(Rt,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(Rt+re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return It}const lt={};lt[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),dt(i.DEPTH_TEST),o.setFunc(Ji),st(!1),V(Xo),dt(i.CULL_FACE),v(ei);function dt(et){d[et]!==!0&&(i.enable(et),d[et]=!0)}function xt(et){d[et]!==!1&&(i.disable(et),d[et]=!1)}function Et(et,Rt){return f[et]!==Rt?(i.bindFramebuffer(et,Rt),f[et]=Rt,et===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Rt),et===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Rt),!0):!1}function kt(et,Rt){let pt=u,vt=!1;if(et){pt=p.get(Rt),pt===void 0&&(pt=[],p.set(Rt,pt));const Ct=et.textures;if(pt.length!==Ct.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let It=0,re=Ct.length;It<re;It++)pt[It]=i.COLOR_ATTACHMENT0+It;pt.length=Ct.length,vt=!0}}else pt[0]!==i.BACK&&(pt[0]=i.BACK,vt=!0);vt&&i.drawBuffers(pt)}function Kt(et){return _!==et?(i.useProgram(et),_=et,!0):!1}const Jt={[mi]:i.FUNC_ADD,[Ih]:i.FUNC_SUBTRACT,[Nh]:i.FUNC_REVERSE_SUBTRACT};Jt[Uh]=i.MIN,Jt[Fh]=i.MAX;const de={[Oh]:i.ZERO,[kh]:i.ONE,[Bh]:i.SRC_COLOR,[Fa]:i.SRC_ALPHA,[Xh]:i.SRC_ALPHA_SATURATE,[Gh]:i.DST_COLOR,[Vh]:i.DST_ALPHA,[zh]:i.ONE_MINUS_SRC_COLOR,[Oa]:i.ONE_MINUS_SRC_ALPHA,[Wh]:i.ONE_MINUS_DST_COLOR,[Hh]:i.ONE_MINUS_DST_ALPHA,[jh]:i.CONSTANT_COLOR,[qh]:i.ONE_MINUS_CONSTANT_COLOR,[Yh]:i.CONSTANT_ALPHA,[Zh]:i.ONE_MINUS_CONSTANT_ALPHA};function v(et,Rt,pt,vt,Ct,It,re,Ae,Oe,le){if(et===ei){g===!0&&(xt(i.BLEND),g=!1);return}if(g===!1&&(dt(i.BLEND),g=!0),et!==Dh){if(et!==m||le!==S){if((h!==mi||M!==mi)&&(i.blendEquation(i.FUNC_ADD),h=mi,M=mi),le)switch(et){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jo:i.blendFunc(i.ONE,i.ONE);break;case qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",et);break}else switch(et){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",et);break}x=null,E=null,C=null,L=null,P.set(0,0,0),N=0,m=et,S=le}return}Ct=Ct||Rt,It=It||pt,re=re||vt,(Rt!==h||Ct!==M)&&(i.blendEquationSeparate(Jt[Rt],Jt[Ct]),h=Rt,M=Ct),(pt!==x||vt!==E||It!==C||re!==L)&&(i.blendFuncSeparate(de[pt],de[vt],de[It],de[re]),x=pt,E=vt,C=It,L=re),(Ae.equals(P)===!1||Oe!==N)&&(i.blendColor(Ae.r,Ae.g,Ae.b,Oe),P.copy(Ae),N=Oe),m=et,S=!1}function mt(et,Rt){et.side===Sn?xt(i.CULL_FACE):dt(i.CULL_FACE);let pt=et.side===Qe;Rt&&(pt=!pt),st(pt),et.blending===qi&&et.transparent===!1?v(ei):v(et.blending,et.blendEquation,et.blendSrc,et.blendDst,et.blendEquationAlpha,et.blendSrcAlpha,et.blendDstAlpha,et.blendColor,et.blendAlpha,et.premultipliedAlpha),o.setFunc(et.depthFunc),o.setTest(et.depthTest),o.setMask(et.depthWrite),s.setMask(et.colorWrite);const vt=et.stencilWrite;a.setTest(vt),vt&&(a.setMask(et.stencilWriteMask),a.setFunc(et.stencilFunc,et.stencilRef,et.stencilFuncMask),a.setOp(et.stencilFail,et.stencilZFail,et.stencilZPass)),$(et.polygonOffset,et.polygonOffsetFactor,et.polygonOffsetUnits),et.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(et){w!==et&&(et?i.frontFace(i.CW):i.frontFace(i.CCW),w=et)}function V(et){et!==Ch?(dt(i.CULL_FACE),et!==B&&(et===Xo?i.cullFace(i.BACK):et===Ph?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),B=et}function O(et){et!==R&&(W&&i.lineWidth(et),R=et)}function $(et,Rt,pt){et?(dt(i.POLYGON_OFFSET_FILL),(z!==Rt||y!==pt)&&(i.polygonOffset(Rt,pt),z=Rt,y=pt)):xt(i.POLYGON_OFFSET_FILL)}function ot(et){et?dt(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function D(et){et===void 0&&(et=i.TEXTURE0+H-1),Q!==et&&(i.activeTexture(et),Q=et)}function b(et,Rt,pt){pt===void 0&&(Q===null?pt=i.TEXTURE0+H-1:pt=Q);let vt=ft[pt];vt===void 0&&(vt={type:void 0,texture:void 0},ft[pt]=vt),(vt.type!==et||vt.texture!==Rt)&&(Q!==pt&&(i.activeTexture(pt),Q=pt),i.bindTexture(et,Rt||lt[et]),vt.type=et,vt.texture=Rt)}function G(){const et=ft[Q];et!==void 0&&et.type!==void 0&&(i.bindTexture(et.type,null),et.type=void 0,et.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function at(){try{i.texSubImage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function yt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function bt(){try{i.texStorage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Ut(){try{i.texImage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function qt(et){_t.equals(et)===!1&&(i.scissor(et.x,et.y,et.z,et.w),_t.copy(et))}function Ft(et){X.equals(et)===!1&&(i.viewport(et.x,et.y,et.z,et.w),X.copy(et))}function Qt(et,Rt){let pt=c.get(Rt);pt===void 0&&(pt=new WeakMap,c.set(Rt,pt));let vt=pt.get(et);vt===void 0&&(vt=i.getUniformBlockIndex(Rt,et.name),pt.set(et,vt))}function ee(et,Rt){const vt=c.get(Rt).get(et);l.get(Rt)!==vt&&(i.uniformBlockBinding(Rt,vt,et.__bindingPointIndex),l.set(Rt,vt))}function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Q=null,ft={},f={},p=new WeakMap,u=[],_=null,g=!1,m=null,h=null,x=null,E=null,M=null,C=null,L=null,P=new ae(0,0,0),N=0,S=!1,w=null,B=null,R=null,z=null,y=null,_t.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:dt,disable:xt,bindFramebuffer:Et,drawBuffers:kt,useProgram:Kt,setBlending:v,setMaterial:mt,setFlipSided:st,setCullFace:V,setLineWidth:O,setPolygonOffset:$,setScissorTest:ot,activeTexture:D,bindTexture:b,unbindTexture:G,compressedTexImage2D:rt,compressedTexImage3D:nt,texImage2D:Ut,texImage3D:Dt,updateUBOMapping:Qt,uniformBlockBinding:ee,texStorage2D:oe,texStorage3D:bt,texSubImage2D:at,texSubImage3D:wt,compressedTexSubImage2D:yt,compressedTexSubImage3D:At,scissor:qt,viewport:Ft,reset:ve}}function ql(i,t,e,n){const r=Ug(n);switch(e){case Dc:return i*t;case Nc:return i*t;case Uc:return i*t*2;case Fc:return i*t/r.components*r.byteLength;case Ro:return i*t/r.components*r.byteLength;case Oc:return i*t*2/r.components*r.byteLength;case Co:return i*t*2/r.components*r.byteLength;case Ic:return i*t*3/r.components*r.byteLength;case dn:return i*t*4/r.components*r.byteLength;case Po:return i*t*4/r.components*r.byteLength;case ws:case Ts:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case As:case Rs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:case $a:return Math.max(i,16)*Math.max(t,8)/4;case Ya:case Ka:return Math.max(i,8)*Math.max(t,8)/2;case Ja:case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case no:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case io:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ro:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ao:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case oo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case lo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case uo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case po:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case mo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Cs:case go:case _o:return Math.ceil(i/4)*Math.ceil(t/4)*16;case kc:case vo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xo:case yo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ug(i){switch(i){case Vn:case Cc:return{byteLength:1,components:1};case wr:case Pc:case Pr:return{byteLength:2,components:1};case To:case Ao:return{byteLength:2,components:4};case yi:case wo:case En:return{byteLength:4,components:1};case Lc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Fg(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,d=new WeakMap;let f;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,b){return u?new OffscreenCanvas(D,b):Tr("canvas")}function g(D,b,G){let rt=1;const nt=ot(D);if((nt.width>G||nt.height>G)&&(rt=G/Math.max(nt.width,nt.height)),rt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const at=Math.floor(rt*nt.width),wt=Math.floor(rt*nt.height);f===void 0&&(f=_(at,wt));const yt=b?_(at,wt):f;return yt.width=at,yt.height=wt,yt.getContext("2d").drawImage(D,0,0,at,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+at+"x"+wt+")."),yt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),D;return D}function m(D){return D.generateMipmaps}function h(D){i.generateMipmap(D)}function x(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(D,b,G,rt,nt=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let at=b;if(b===i.RED&&(G===i.FLOAT&&(at=i.R32F),G===i.HALF_FLOAT&&(at=i.R16F),G===i.UNSIGNED_BYTE&&(at=i.R8)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(at=i.R8UI),G===i.UNSIGNED_SHORT&&(at=i.R16UI),G===i.UNSIGNED_INT&&(at=i.R32UI),G===i.BYTE&&(at=i.R8I),G===i.SHORT&&(at=i.R16I),G===i.INT&&(at=i.R32I)),b===i.RG&&(G===i.FLOAT&&(at=i.RG32F),G===i.HALF_FLOAT&&(at=i.RG16F),G===i.UNSIGNED_BYTE&&(at=i.RG8)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(at=i.RG8UI),G===i.UNSIGNED_SHORT&&(at=i.RG16UI),G===i.UNSIGNED_INT&&(at=i.RG32UI),G===i.BYTE&&(at=i.RG8I),G===i.SHORT&&(at=i.RG16I),G===i.INT&&(at=i.RG32I)),b===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(at=i.RGB8UI),G===i.UNSIGNED_SHORT&&(at=i.RGB16UI),G===i.UNSIGNED_INT&&(at=i.RGB32UI),G===i.BYTE&&(at=i.RGB8I),G===i.SHORT&&(at=i.RGB16I),G===i.INT&&(at=i.RGB32I)),b===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),G===i.UNSIGNED_INT&&(at=i.RGBA32UI),G===i.BYTE&&(at=i.RGBA8I),G===i.SHORT&&(at=i.RGBA16I),G===i.INT&&(at=i.RGBA32I)),b===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),b===i.RGBA){const wt=nt?Vs:ue.getTransfer(rt);G===i.FLOAT&&(at=i.RGBA32F),G===i.HALF_FLOAT&&(at=i.RGBA16F),G===i.UNSIGNED_BYTE&&(at=wt===we?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function M(D,b){let G;return D?b===null||b===yi||b===er?G=i.DEPTH24_STENCIL8:b===En?G=i.DEPTH32F_STENCIL8:b===wr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===yi||b===er?G=i.DEPTH_COMPONENT24:b===En?G=i.DEPTH_COMPONENT32F:b===wr&&(G=i.DEPTH_COMPONENT16),G}function C(D,b){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==an&&D.minFilter!==sn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function L(D){const b=D.target;b.removeEventListener("dispose",L),N(b),b.isVideoTexture&&d.delete(b)}function P(D){const b=D.target;b.removeEventListener("dispose",P),w(b)}function N(D){const b=n.get(D);if(b.__webglInit===void 0)return;const G=D.source,rt=p.get(G);if(rt){const nt=rt[b.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&S(D),Object.keys(rt).length===0&&p.delete(G)}n.remove(D)}function S(D){const b=n.get(D);i.deleteTexture(b.__webglTexture);const G=D.source,rt=p.get(G);delete rt[b.__cacheKey],o.memory.textures--}function w(D){const b=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(b.__webglFramebuffer[rt]))for(let nt=0;nt<b.__webglFramebuffer[rt].length;nt++)i.deleteFramebuffer(b.__webglFramebuffer[rt][nt]);else i.deleteFramebuffer(b.__webglFramebuffer[rt]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[rt])}else{if(Array.isArray(b.__webglFramebuffer))for(let rt=0;rt<b.__webglFramebuffer.length;rt++)i.deleteFramebuffer(b.__webglFramebuffer[rt]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let rt=0;rt<b.__webglColorRenderbuffer.length;rt++)b.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[rt]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=D.textures;for(let rt=0,nt=G.length;rt<nt;rt++){const at=n.get(G[rt]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),o.memory.textures--),n.remove(G[rt])}n.remove(D)}let B=0;function R(){B=0}function z(){const D=B;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),B+=1,D}function y(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function H(D,b){const G=n.get(D);if(D.isVideoTexture&&O(D),D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){const rt=D.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(G,D,b);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function W(D,b){const G=n.get(D);if(D.version>0&&G.__version!==D.version){X(G,D,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function q(D,b){const G=n.get(D);if(D.version>0&&G.__version!==D.version){X(G,D,b);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function J(D,b){const G=n.get(D);if(D.version>0&&G.__version!==D.version){Y(G,D,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}const Q={[Fn]:i.REPEAT,[xn]:i.CLAMP_TO_EDGE,[qa]:i.MIRRORED_REPEAT},ft={[an]:i.NEAREST,[au]:i.NEAREST_MIPMAP_NEAREST,[Vr]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[Ks]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},j={[uu]:i.NEVER,[_u]:i.ALWAYS,[du]:i.LESS,[Bc]:i.LEQUAL,[fu]:i.EQUAL,[gu]:i.GEQUAL,[pu]:i.GREATER,[mu]:i.NOTEQUAL};function Z(D,b){if(b.type===En&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===sn||b.magFilter===Ks||b.magFilter===Vr||b.magFilter===On||b.minFilter===sn||b.minFilter===Ks||b.minFilter===Vr||b.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,Q[b.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,Q[b.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,Q[b.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,ft[b.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,ft[b.minFilter]),b.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,j[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===an||b.minFilter!==Vr&&b.minFilter!==On||b.type===En&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function _t(D,b){let G=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",L));const rt=b.source;let nt=p.get(rt);nt===void 0&&(nt={},p.set(rt,nt));const at=y(b);if(at!==D.__cacheKey){nt[at]===void 0&&(nt[at]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),nt[at].usedTimes++;const wt=nt[D.__cacheKey];wt!==void 0&&(nt[D.__cacheKey].usedTimes--,wt.usedTimes===0&&S(b)),D.__cacheKey=at,D.__webglTexture=nt[at].texture}return G}function X(D,b,G){let rt=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(rt=i.TEXTURE_3D);const nt=_t(D,b),at=b.source;e.bindTexture(rt,D.__webglTexture,i.TEXTURE0+G);const wt=n.get(at);if(at.version!==wt.__version||nt===!0){e.activeTexture(i.TEXTURE0+G);const yt=ue.getPrimaries(ue.workingColorSpace),At=b.colorSpace===Qn?null:ue.getPrimaries(b.colorSpace),oe=b.colorSpace===Qn||yt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let bt=g(b.image,!1,r.maxTextureSize);bt=$(b,bt);const Ut=s.convert(b.format,b.colorSpace),Dt=s.convert(b.type);let qt=E(b.internalFormat,Ut,Dt,b.colorSpace,b.isVideoTexture);Z(rt,b);let Ft;const Qt=b.mipmaps,ee=b.isVideoTexture!==!0,ve=wt.__version===void 0||nt===!0,et=at.dataReady,Rt=C(b,bt);if(b.isDepthTexture)qt=M(b.format===nr,b.type),ve&&(ee?e.texStorage2D(i.TEXTURE_2D,1,qt,bt.width,bt.height):e.texImage2D(i.TEXTURE_2D,0,qt,bt.width,bt.height,0,Ut,Dt,null));else if(b.isDataTexture)if(Qt.length>0){ee&&ve&&e.texStorage2D(i.TEXTURE_2D,Rt,qt,Qt[0].width,Qt[0].height);for(let pt=0,vt=Qt.length;pt<vt;pt++)Ft=Qt[pt],ee?et&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Ft.width,Ft.height,Ut,Dt,Ft.data):e.texImage2D(i.TEXTURE_2D,pt,qt,Ft.width,Ft.height,0,Ut,Dt,Ft.data);b.generateMipmaps=!1}else ee?(ve&&e.texStorage2D(i.TEXTURE_2D,Rt,qt,bt.width,bt.height),et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt.width,bt.height,Ut,Dt,bt.data)):e.texImage2D(i.TEXTURE_2D,0,qt,bt.width,bt.height,0,Ut,Dt,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ee&&ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,qt,Qt[0].width,Qt[0].height,bt.depth);for(let pt=0,vt=Qt.length;pt<vt;pt++)if(Ft=Qt[pt],b.format!==dn)if(Ut!==null)if(ee){if(et)if(b.layerUpdates.size>0){const Ct=ql(Ft.width,Ft.height,b.format,b.type);for(const It of b.layerUpdates){const re=Ft.data.subarray(It*Ct/Ft.data.BYTES_PER_ELEMENT,(It+1)*Ct/Ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,It,Ft.width,Ft.height,1,Ut,re)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Ft.width,Ft.height,bt.depth,Ut,Ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,qt,Ft.width,Ft.height,bt.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?et&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Ft.width,Ft.height,bt.depth,Ut,Dt,Ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,qt,Ft.width,Ft.height,bt.depth,0,Ut,Dt,Ft.data)}else{ee&&ve&&e.texStorage2D(i.TEXTURE_2D,Rt,qt,Qt[0].width,Qt[0].height);for(let pt=0,vt=Qt.length;pt<vt;pt++)Ft=Qt[pt],b.format!==dn?Ut!==null?ee?et&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,Ft.width,Ft.height,Ut,Ft.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,qt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?et&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Ft.width,Ft.height,Ut,Dt,Ft.data):e.texImage2D(i.TEXTURE_2D,pt,qt,Ft.width,Ft.height,0,Ut,Dt,Ft.data)}else if(b.isDataArrayTexture)if(ee){if(ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Rt,qt,bt.width,bt.height,bt.depth),et)if(b.layerUpdates.size>0){const pt=ql(bt.width,bt.height,b.format,b.type);for(const vt of b.layerUpdates){const Ct=bt.data.subarray(vt*pt/bt.data.BYTES_PER_ELEMENT,(vt+1)*pt/bt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,bt.width,bt.height,1,Ut,Dt,Ct)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ut,Dt,bt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,qt,bt.width,bt.height,bt.depth,0,Ut,Dt,bt.data);else if(b.isData3DTexture)ee?(ve&&e.texStorage3D(i.TEXTURE_3D,Rt,qt,bt.width,bt.height,bt.depth),et&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ut,Dt,bt.data)):e.texImage3D(i.TEXTURE_3D,0,qt,bt.width,bt.height,bt.depth,0,Ut,Dt,bt.data);else if(b.isFramebufferTexture){if(ve)if(ee)e.texStorage2D(i.TEXTURE_2D,Rt,qt,bt.width,bt.height);else{let pt=bt.width,vt=bt.height;for(let Ct=0;Ct<Rt;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,qt,pt,vt,0,Ut,Dt,null),pt>>=1,vt>>=1}}else if(Qt.length>0){if(ee&&ve){const pt=ot(Qt[0]);e.texStorage2D(i.TEXTURE_2D,Rt,qt,pt.width,pt.height)}for(let pt=0,vt=Qt.length;pt<vt;pt++)Ft=Qt[pt],ee?et&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Ut,Dt,Ft):e.texImage2D(i.TEXTURE_2D,pt,qt,Ut,Dt,Ft);b.generateMipmaps=!1}else if(ee){if(ve){const pt=ot(bt);e.texStorage2D(i.TEXTURE_2D,Rt,qt,pt.width,pt.height)}et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ut,Dt,bt)}else e.texImage2D(i.TEXTURE_2D,0,qt,Ut,Dt,bt);m(b)&&h(rt),wt.__version=at.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Y(D,b,G){if(b.image.length!==6)return;const rt=_t(D,b),nt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+G);const at=n.get(nt);if(nt.version!==at.__version||rt===!0){e.activeTexture(i.TEXTURE0+G);const wt=ue.getPrimaries(ue.workingColorSpace),yt=b.colorSpace===Qn?null:ue.getPrimaries(b.colorSpace),At=b.colorSpace===Qn||wt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const oe=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,Ut=[];for(let vt=0;vt<6;vt++)!oe&&!bt?Ut[vt]=g(b.image[vt],!0,r.maxCubemapSize):Ut[vt]=bt?b.image[vt].image:b.image[vt],Ut[vt]=$(b,Ut[vt]);const Dt=Ut[0],qt=s.convert(b.format,b.colorSpace),Ft=s.convert(b.type),Qt=E(b.internalFormat,qt,Ft,b.colorSpace),ee=b.isVideoTexture!==!0,ve=at.__version===void 0||rt===!0,et=nt.dataReady;let Rt=C(b,Dt);Z(i.TEXTURE_CUBE_MAP,b);let pt;if(oe){ee&&ve&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,Qt,Dt.width,Dt.height);for(let vt=0;vt<6;vt++){pt=Ut[vt].mipmaps;for(let Ct=0;Ct<pt.length;Ct++){const It=pt[Ct];b.format!==dn?qt!==null?ee?et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,0,0,It.width,It.height,qt,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,Qt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,0,0,It.width,It.height,qt,Ft,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,Qt,It.width,It.height,0,qt,Ft,It.data)}}}else{if(pt=b.mipmaps,ee&&ve){pt.length>0&&Rt++;const vt=ot(Ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Rt,Qt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(bt){ee?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ut[vt].width,Ut[vt].height,qt,Ft,Ut[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Qt,Ut[vt].width,Ut[vt].height,0,qt,Ft,Ut[vt].data);for(let Ct=0;Ct<pt.length;Ct++){const re=pt[Ct].image[vt].image;ee?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,0,0,re.width,re.height,qt,Ft,re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,Qt,re.width,re.height,0,qt,Ft,re.data)}}else{ee?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,qt,Ft,Ut[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Qt,qt,Ft,Ut[vt]);for(let Ct=0;Ct<pt.length;Ct++){const It=pt[Ct];ee?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,0,0,qt,Ft,It.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,Qt,qt,Ft,It.image[vt])}}}m(b)&&h(i.TEXTURE_CUBE_MAP),at.__version=nt.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function lt(D,b,G,rt,nt,at){const wt=s.convert(G.format,G.colorSpace),yt=s.convert(G.type),At=E(G.internalFormat,wt,yt,G.colorSpace),oe=n.get(b),bt=n.get(G);if(bt.__renderTarget=b,!oe.__hasExternalTextures){const Ut=Math.max(1,b.width>>at),Dt=Math.max(1,b.height>>at);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,at,At,Ut,Dt,b.depth,0,wt,yt,null):e.texImage2D(nt,at,At,Ut,Dt,0,wt,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),V(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,nt,bt.__webglTexture,0,st(b)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,nt,bt.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(D,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,D),b.depthBuffer){const rt=b.depthTexture,nt=rt&&rt.isDepthTexture?rt.type:null,at=M(b.stencilBuffer,nt),wt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=st(b);V(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,at,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,at,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,at,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,D)}else{const rt=b.textures;for(let nt=0;nt<rt.length;nt++){const at=rt[nt],wt=s.convert(at.format,at.colorSpace),yt=s.convert(at.type),At=E(at.internalFormat,wt,yt,at.colorSpace),oe=st(b);G&&V(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,At,b.width,b.height):V(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,At,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,At,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(D,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=n.get(b.depthTexture);rt.__renderTarget=b,(!rt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),H(b.depthTexture,0);const nt=rt.__webglTexture,at=st(b);if(b.depthTexture.format===Yi)V(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(b.depthTexture.format===nr)V(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Et(D){const b=n.get(D),G=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const rt=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),rt){const nt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,rt.removeEventListener("dispose",nt)};rt.addEventListener("dispose",nt),b.__depthDisposeCallback=nt}b.__boundDepthTexture=rt}if(D.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");xt(b.__webglFramebuffer,D)}else if(G){b.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[rt]),b.__webglDepthbuffer[rt]===void 0)b.__webglDepthbuffer[rt]=i.createRenderbuffer(),dt(b.__webglDepthbuffer[rt],D,!1);else{const nt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=b.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,at)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),dt(b.__webglDepthbuffer,D,!1);else{const rt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(D,b,G){const rt=n.get(D);b!==void 0&&lt(rt.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Et(D)}function Kt(D){const b=D.texture,G=n.get(D),rt=n.get(b);D.addEventListener("dispose",P);const nt=D.textures,at=D.isWebGLCubeRenderTarget===!0,wt=nt.length>1;if(wt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=b.version,o.memory.textures++),at){G.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[yt]=[];for(let At=0;At<b.mipmaps.length;At++)G.__webglFramebuffer[yt][At]=i.createFramebuffer()}else G.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let yt=0;yt<b.mipmaps.length;yt++)G.__webglFramebuffer[yt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(wt)for(let yt=0,At=nt.length;yt<At;yt++){const oe=n.get(nt[yt]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&V(D)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let yt=0;yt<nt.length;yt++){const At=nt[yt];G.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[yt]);const oe=s.convert(At.format,At.colorSpace),bt=s.convert(At.type),Ut=E(At.internalFormat,oe,bt,At.colorSpace,D.isXRRenderTarget===!0),Dt=st(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,Ut,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,G.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(G.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),Z(i.TEXTURE_CUBE_MAP,b);for(let yt=0;yt<6;yt++)if(b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)lt(G.__webglFramebuffer[yt][At],D,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,At);else lt(G.__webglFramebuffer[yt],D,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);m(b)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let yt=0,At=nt.length;yt<At;yt++){const oe=nt[yt],bt=n.get(oe);e.bindTexture(i.TEXTURE_2D,bt.__webglTexture),Z(i.TEXTURE_2D,oe),lt(G.__webglFramebuffer,D,oe,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,0),m(oe)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(yt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,rt.__webglTexture),Z(yt,b),b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)lt(G.__webglFramebuffer[At],D,b,i.COLOR_ATTACHMENT0,yt,At);else lt(G.__webglFramebuffer,D,b,i.COLOR_ATTACHMENT0,yt,0);m(b)&&h(yt),e.unbindTexture()}D.depthBuffer&&Et(D)}function Jt(D){const b=D.textures;for(let G=0,rt=b.length;G<rt;G++){const nt=b[G];if(m(nt)){const at=x(D),wt=n.get(nt).__webglTexture;e.bindTexture(at,wt),h(at),e.unbindTexture()}}}const de=[],v=[];function mt(D){if(D.samples>0){if(V(D)===!1){const b=D.textures,G=D.width,rt=D.height;let nt=i.COLOR_BUFFER_BIT;const at=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(D),yt=b.length>1;if(yt)for(let At=0;At<b.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let At=0;At<b.length;At++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);const oe=n.get(b[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,G,rt,0,0,G,rt,nt,i.NEAREST),l===!0&&(de.length=0,v.length=0,de.push(i.COLOR_ATTACHMENT0+At),D.depthBuffer&&D.resolveDepthBuffer===!1&&(de.push(at),v.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,v)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let At=0;At<b.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);const oe=n.get(b[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,oe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const b=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function st(D){return Math.min(r.maxSamples,D.samples)}function V(D){const b=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function O(D){const b=o.render.frame;d.get(D)!==b&&(d.set(D,b),D.update())}function $(D,b){const G=D.colorSpace,rt=D.format,nt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||G!==ar&&G!==Qn&&(ue.getTransfer(G)===we?(rt!==dn||nt!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function ot(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=R,this.setTexture2D=H,this.setTexture2DArray=W,this.setTexture3D=q,this.setTextureCube=J,this.rebindTextures=kt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=V}function Og(i,t){function e(n,r=Qn){let s;const o=ue.getTransfer(r);if(n===Vn)return i.UNSIGNED_BYTE;if(n===To)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ao)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cc)return i.BYTE;if(n===Pc)return i.SHORT;if(n===wr)return i.UNSIGNED_SHORT;if(n===wo)return i.INT;if(n===yi)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===Pr)return i.HALF_FLOAT;if(n===Dc)return i.ALPHA;if(n===Ic)return i.RGB;if(n===dn)return i.RGBA;if(n===Nc)return i.LUMINANCE;if(n===Uc)return i.LUMINANCE_ALPHA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===nr)return i.DEPTH_STENCIL;if(n===Fc)return i.RED;if(n===Ro)return i.RED_INTEGER;if(n===Oc)return i.RG;if(n===Co)return i.RG_INTEGER;if(n===Po)return i.RGBA_INTEGER;if(n===ws||n===Ts||n===As||n===Rs)if(o===we)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ws)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===As)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ws)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ts)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===As)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ya||n===Za||n===Ka||n===$a)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ya)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Za)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ka)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$a)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ja||n===Qa||n===to)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ja||n===Qa)return o===we?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===to)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===eo||n===no||n===io||n===ro||n===so||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===eo)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===no)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===io)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ro)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===so)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ao)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oo)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lo)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===co)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ho)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uo)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fo)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===po)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mo)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cs||n===go||n===_o)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Cs)return o===we?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===go)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_o)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kc||n===vo||n===xo||n===yo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Cs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===vo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class kg extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _i extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bg={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),h=this._getHandJoint(c,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=d.position.distanceTo(f.position),u=.02,_=.005;c.inputState.pinching&&p>u+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=u-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new _i;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vg=`
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

}`;class Hg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Be,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ii({vertexShader:zg,fragmentShader:Vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ie(new Dr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gg extends Mi{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,p=null,u=null,_=null;const g=new Hg,m=e.getContextAttributes();let h=null,x=null;const E=[],M=[],C=new te;let L=null;const P=new We;P.viewport=new be;const N=new We;N.viewport=new be;const S=[P,N],w=new kg;let B=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Y=E[X];return Y===void 0&&(Y=new Ea,E[X]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(X){let Y=E[X];return Y===void 0&&(Y=new Ea,E[X]=Y),Y.getGripSpace()},this.getHand=function(X){let Y=E[X];return Y===void 0&&(Y=new Ea,E[X]=Y),Y.getHandSpace()};function z(X){const Y=M.indexOf(X.inputSource);if(Y===-1)return;const lt=E[Y];lt!==void 0&&(lt.update(X.inputSource,X.frame,c||o),lt.dispatchEvent({type:X.type,data:X.inputSource}))}function y(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",y),r.removeEventListener("inputsourceschange",H);for(let X=0;X<E.length;X++){const Y=M[X];Y!==null&&(M[X]=null,E[X].disconnect(Y))}B=null,R=null,g.reset(),t.setRenderTarget(h),u=null,p=null,f=null,r=null,x=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return p!==null?p:u},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",y),r.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(C),r.renderState.layers===void 0){const Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(r,e,Y),r.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new bi(u.framebufferWidth,u.framebufferHeight,{format:dn,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,lt=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=m.stencil?nr:Yi,lt=m.stencil?er:yi);const xt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:s};f=new XRWebGLBinding(r,e),p=f.createProjectionLayer(xt),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),x=new bi(p.textureWidth,p.textureHeight,{format:dn,type:Vn,depthTexture:new $c(p.textureWidth,p.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),_t.setContext(r),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(X){for(let Y=0;Y<X.removed.length;Y++){const lt=X.removed[Y],dt=M.indexOf(lt);dt>=0&&(M[dt]=null,E[dt].disconnect(lt))}for(let Y=0;Y<X.added.length;Y++){const lt=X.added[Y];let dt=M.indexOf(lt);if(dt===-1){for(let Et=0;Et<E.length;Et++)if(Et>=M.length){M.push(lt),dt=Et;break}else if(M[Et]===null){M[Et]=lt,dt=Et;break}if(dt===-1)break}const xt=E[dt];xt&&xt.connect(lt)}}const W=new K,q=new K;function J(X,Y,lt){W.setFromMatrixPosition(Y.matrixWorld),q.setFromMatrixPosition(lt.matrixWorld);const dt=W.distanceTo(q),xt=Y.projectionMatrix.elements,Et=lt.projectionMatrix.elements,kt=xt[14]/(xt[10]-1),Kt=xt[14]/(xt[10]+1),Jt=(xt[9]+1)/xt[5],de=(xt[9]-1)/xt[5],v=(xt[8]-1)/xt[0],mt=(Et[8]+1)/Et[0],st=kt*v,V=kt*mt,O=dt/(-v+mt),$=O*-v;if(Y.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX($),X.translateZ(O),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),xt[10]===-1)X.projectionMatrix.copy(Y.projectionMatrix),X.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const ot=kt+O,D=Kt+O,b=st-$,G=V+(dt-$),rt=Jt*Kt/D*ot,nt=de*Kt/D*ot;X.projectionMatrix.makePerspective(b,G,rt,nt,ot,D),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Q(X,Y){Y===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Y.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let Y=X.near,lt=X.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(lt=g.depthFar)),w.near=N.near=P.near=Y,w.far=N.far=P.far=lt,(B!==w.near||R!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),B=w.near,R=w.far),P.layers.mask=X.layers.mask|2,N.layers.mask=X.layers.mask|4,w.layers.mask=P.layers.mask|N.layers.mask;const dt=X.parent,xt=w.cameras;Q(w,dt);for(let Et=0;Et<xt.length;Et++)Q(xt[Et],dt);xt.length===2?J(w,P,N):w.projectionMatrix.copy(P.projectionMatrix),ft(X,w,dt)};function ft(X,Y,lt){lt===null?X.matrix.copy(Y.matrixWorld):(X.matrix.copy(lt.matrixWorld),X.matrix.invert(),X.matrix.multiply(Y.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Y.projectionMatrix),X.projectionMatrixInverse.copy(Y.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ir*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(p===null&&u===null))return l},this.setFoveation=function(X){l=X,p!==null&&(p.fixedFoveation=X),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(w)};let j=null;function Z(X,Y){if(d=Y.getViewerPose(c||o),_=Y,d!==null){const lt=d.views;u!==null&&(t.setRenderTargetFramebuffer(x,u.framebuffer),t.setRenderTarget(x));let dt=!1;lt.length!==w.cameras.length&&(w.cameras.length=0,dt=!0);for(let Et=0;Et<lt.length;Et++){const kt=lt[Et];let Kt=null;if(u!==null)Kt=u.getViewport(kt);else{const de=f.getViewSubImage(p,kt);Kt=de.viewport,Et===0&&(t.setRenderTargetTextures(x,de.colorTexture,p.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(x))}let Jt=S[Et];Jt===void 0&&(Jt=new We,Jt.layers.enable(Et),Jt.viewport=new be,S[Et]=Jt),Jt.matrix.fromArray(kt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(kt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Et===0&&(w.matrix.copy(Jt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),dt===!0&&w.cameras.push(Jt)}const xt=r.enabledFeatures;if(xt&&xt.includes("depth-sensing")){const Et=f.getDepthInformation(lt[0]);Et&&Et.isValid&&Et.texture&&g.init(t,Et,r.renderState)}}for(let lt=0;lt<E.length;lt++){const dt=M[lt],xt=E[lt];dt!==null&&xt!==void 0&&xt.update(dt,Y,c||o)}j&&j(X,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),_=null}const _t=new Kc;_t.setAnimationLoop(Z),this.setAnimationLoop=function(X){j=X},this.dispose=function(){}}}const fi=new tn,Wg=new ie;function Xg(i,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,qc(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,x,E,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),d(m,h)):h.isMeshStandardMaterial?(s(m,h),p(m,h),h.isMeshPhysicalMaterial&&u(m,h,M)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,x,E):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Qe&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Qe&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const x=t.get(h),E=x.envMap,M=x.envMapRotation;E&&(m.envMap.value=E,fi.copy(M),fi.x*=-1,fi.y*=-1,fi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),m.envMapRotation.value.setFromMatrix4(Wg.makeRotationFromEuler(fi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,x,E){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=E*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function p(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function u(m,h,x){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Qe&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const x=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function jg(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){const M=E.program;n.uniformBlockBinding(x,M)}function c(x,E){let M=r[x.id];M===void 0&&(_(x),M=d(x),r[x.id]=M,x.addEventListener("dispose",m));const C=E.program;n.updateUBOMapping(x,C);const L=t.render.frame;s[x.id]!==L&&(p(x),s[x.id]=L)}function d(x){const E=f();x.__bindingPointIndex=E;const M=i.createBuffer(),C=x.__size,L=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,M),M}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const E=r[x.id],M=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let L=0,P=M.length;L<P;L++){const N=Array.isArray(M[L])?M[L]:[M[L]];for(let S=0,w=N.length;S<w;S++){const B=N[S];if(u(B,L,S,C)===!0){const R=B.__offset,z=Array.isArray(B.value)?B.value:[B.value];let y=0;for(let H=0;H<z.length;H++){const W=z[H],q=g(W);typeof W=="number"||typeof W=="boolean"?(B.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,R+y,B.__data)):W.isMatrix3?(B.__data[0]=W.elements[0],B.__data[1]=W.elements[1],B.__data[2]=W.elements[2],B.__data[3]=0,B.__data[4]=W.elements[3],B.__data[5]=W.elements[4],B.__data[6]=W.elements[5],B.__data[7]=0,B.__data[8]=W.elements[6],B.__data[9]=W.elements[7],B.__data[10]=W.elements[8],B.__data[11]=0):(W.toArray(B.__data,y),y+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,R,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(x,E,M,C){const L=x.value,P=E+"_"+M;if(C[P]===void 0)return typeof L=="number"||typeof L=="boolean"?C[P]=L:C[P]=L.clone(),!0;{const N=C[P];if(typeof L=="number"||typeof L=="boolean"){if(N!==L)return C[P]=L,!0}else if(N.equals(L)===!1)return N.copy(L),!0}return!1}function _(x){const E=x.uniforms;let M=0;const C=16;for(let P=0,N=E.length;P<N;P++){const S=Array.isArray(E[P])?E[P]:[E[P]];for(let w=0,B=S.length;w<B;w++){const R=S[w],z=Array.isArray(R.value)?R.value:[R.value];for(let y=0,H=z.length;y<H;y++){const W=z[y],q=g(W),J=M%C,Q=J%q.boundary,ft=J+Q;M+=Q,ft!==0&&C-ft<q.storage&&(M+=C-ft),R.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=M,M+=q.storage}}}const L=M%C;return L>0&&(M+=C-L),x.__size=M,x.__cache={},this}function g(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),E}function m(x){const E=x.target;E.removeEventListener("dispose",m);const M=o.indexOf(E.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function h(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class qg{constructor(t={}){const{canvas:e=Nu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,h=null;const x=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this.toneMapping=ni,this.toneMappingExposure=1;const M=this;let C=!1,L=0,P=0,N=null,S=-1,w=null;const B=new be,R=new be;let z=null;const y=new ae(0);let H=0,W=e.width,q=e.height,J=1,Q=null,ft=null;const j=new be(0,0,W,q),Z=new be(0,0,W,q);let _t=!1;const X=new Do;let Y=!1,lt=!1;const dt=new ie,xt=new ie,Et=new K,kt=new be,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function de(){return N===null?J:1}let v=n;function mt(F,it){return e.getContext(F,it)}try{const F={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Eo}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",It,!1),v===null){const it="webgl2";if(v=mt(it,F),v===null)throw mt(it)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let st,V,O,$,ot,D,b,G,rt,nt,at,wt,yt,At,oe,bt,Ut,Dt,qt,Ft,Qt,ee,ve,et;function Rt(){st=new Jp(v),st.init(),ee=new Og(v,st),V=new jp(v,st,t,ee),O=new Ng(v,st),V.reverseDepthBuffer&&p&&O.buffers.depth.setReversed(!0),$=new em(v),ot=new xg,D=new Fg(v,st,O,ot,V,ee,$),b=new Yp(M),G=new $p(M),rt=new od(v),ve=new Wp(v,rt),nt=new Qp(v,rt,$,ve),at=new im(v,nt,rt,$),qt=new nm(v,V,D),bt=new qp(ot),wt=new vg(M,b,G,st,V,ve,bt),yt=new Xg(M,ot),At=new bg,oe=new Ag(st),Dt=new Gp(M,b,G,O,at,u,l),Ut=new Dg(M,at,V),et=new jg(v,$,V,O),Ft=new Xp(v,st,$),Qt=new tm(v,st,$),$.programs=wt.programs,M.capabilities=V,M.extensions=st,M.properties=ot,M.renderLists=At,M.shadowMap=Ut,M.state=O,M.info=$}Rt();const pt=new Gg(M,v);this.xr=pt,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const F=st.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=st.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(F){F!==void 0&&(J=F,this.setSize(W,q,!1))},this.getSize=function(F){return F.set(W,q)},this.setSize=function(F,it,ct=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=F,q=it,e.width=Math.floor(F*J),e.height=Math.floor(it*J),ct===!0&&(e.style.width=F+"px",e.style.height=it+"px"),this.setViewport(0,0,F,it)},this.getDrawingBufferSize=function(F){return F.set(W*J,q*J).floor()},this.setDrawingBufferSize=function(F,it,ct){W=F,q=it,J=ct,e.width=Math.floor(F*ct),e.height=Math.floor(it*ct),this.setViewport(0,0,F,it)},this.getCurrentViewport=function(F){return F.copy(B)},this.getViewport=function(F){return F.copy(j)},this.setViewport=function(F,it,ct,ht){F.isVector4?j.set(F.x,F.y,F.z,F.w):j.set(F,it,ct,ht),O.viewport(B.copy(j).multiplyScalar(J).round())},this.getScissor=function(F){return F.copy(Z)},this.setScissor=function(F,it,ct,ht){F.isVector4?Z.set(F.x,F.y,F.z,F.w):Z.set(F,it,ct,ht),O.scissor(R.copy(Z).multiplyScalar(J).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(F){O.setScissorTest(_t=F)},this.setOpaqueSort=function(F){Q=F},this.setTransparentSort=function(F){ft=F},this.getClearColor=function(F){return F.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(F=!0,it=!0,ct=!0){let ht=0;if(F){let tt=!1;if(N!==null){const St=N.texture.format;tt=St===Po||St===Co||St===Ro}if(tt){const St=N.texture.type,Lt=St===Vn||St===yi||St===wr||St===er||St===To||St===Ao,zt=Dt.getClearColor(),Vt=Dt.getClearAlpha(),$t=zt.r,se=zt.g,Ht=zt.b;Lt?(_[0]=$t,_[1]=se,_[2]=Ht,_[3]=Vt,v.clearBufferuiv(v.COLOR,0,_)):(g[0]=$t,g[1]=se,g[2]=Ht,g[3]=Vt,v.clearBufferiv(v.COLOR,0,g))}else ht|=v.COLOR_BUFFER_BIT}it&&(ht|=v.DEPTH_BUFFER_BIT),ct&&(ht|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",It,!1),At.dispose(),oe.dispose(),ot.dispose(),b.dispose(),G.dispose(),at.dispose(),ve.dispose(),et.dispose(),wt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Nr),pt.removeEventListener("sessionend",Ur),Tn.stop()};function vt(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const F=$.autoReset,it=Ut.enabled,ct=Ut.autoUpdate,ht=Ut.needsUpdate,tt=Ut.type;Rt(),$.autoReset=F,Ut.enabled=it,Ut.autoUpdate=ct,Ut.needsUpdate=ht,Ut.type=tt}function It(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function re(F){const it=F.target;it.removeEventListener("dispose",re),Ae(it)}function Ae(F){Oe(F),ot.remove(F)}function Oe(F){const it=ot.get(F).programs;it!==void 0&&(it.forEach(function(ct){wt.releaseProgram(ct)}),F.isShaderMaterial&&wt.releaseShaderCache(F))}this.renderBufferDirect=function(F,it,ct,ht,tt,St){it===null&&(it=Kt);const Lt=tt.isMesh&&tt.matrixWorld.determinant()<0,zt=qs(F,it,ct,ht,tt);O.setMaterial(ht,Lt);let Vt=ct.index,$t=1;if(ht.wireframe===!0){if(Vt=nt.getWireframeAttribute(ct),Vt===void 0)return;$t=2}const se=ct.drawRange,Ht=ct.attributes.position;let fe=se.start*$t,Me=(se.start+se.count)*$t;St!==null&&(fe=Math.max(fe,St.start*$t),Me=Math.min(Me,(St.start+St.count)*$t)),Vt!==null?(fe=Math.max(fe,0),Me=Math.min(Me,Vt.count)):Ht!=null&&(fe=Math.max(fe,0),Me=Math.min(Me,Ht.count));const Ee=Me-fe;if(Ee<0||Ee===1/0)return;ve.setup(tt,ht,zt,ct,Vt);let Le,me=Ft;if(Vt!==null&&(Le=rt.get(Vt),me=Qt,me.setIndex(Le)),tt.isMesh)ht.wireframe===!0?(O.setLineWidth(ht.wireframeLinewidth*de()),me.setMode(v.LINES)):me.setMode(v.TRIANGLES);else if(tt.isLine){let Gt=ht.linewidth;Gt===void 0&&(Gt=1),O.setLineWidth(Gt*de()),tt.isLineSegments?me.setMode(v.LINES):tt.isLineLoop?me.setMode(v.LINE_LOOP):me.setMode(v.LINE_STRIP)}else tt.isPoints?me.setMode(v.POINTS):tt.isSprite&&me.setMode(v.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)me.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))me.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const Gt=tt._multiDrawStarts,pn=tt._multiDrawCounts,pe=tt._multiDrawCount,en=Vt?rt.get(Vt).bytesPerElement:1,Gn=ot.get(ht).currentProgram.getUniforms();for(let Xe=0;Xe<pe;Xe++)Gn.setValue(v,"_gl_DrawID",Xe),me.render(Gt[Xe]/en,pn[Xe])}else if(tt.isInstancedMesh)me.renderInstances(fe,Ee,tt.count);else if(ct.isInstancedBufferGeometry){const Gt=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,pn=Math.min(ct.instanceCount,Gt);me.renderInstances(fe,Ee,pn)}else me.render(fe,Ee)};function le(F,it,ct){F.transparent===!0&&F.side===Sn&&F.forceSinglePass===!1?(F.side=Qe,F.needsUpdate=!0,Ti(F,it,ct),F.side=zn,F.needsUpdate=!0,Ti(F,it,ct),F.side=Sn):Ti(F,it,ct)}this.compile=function(F,it,ct=null){ct===null&&(ct=F),h=oe.get(ct),h.init(it),E.push(h),ct.traverseVisible(function(tt){tt.isLight&&tt.layers.test(it.layers)&&(h.pushLight(tt),tt.castShadow&&h.pushShadow(tt))}),F!==ct&&F.traverseVisible(function(tt){tt.isLight&&tt.layers.test(it.layers)&&(h.pushLight(tt),tt.castShadow&&h.pushShadow(tt))}),h.setupLights();const ht=new Set;return F.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const St=tt.material;if(St)if(Array.isArray(St))for(let Lt=0;Lt<St.length;Lt++){const zt=St[Lt];le(zt,ct,tt),ht.add(zt)}else le(St,ct,tt),ht.add(St)}),E.pop(),h=null,ht},this.compileAsync=function(F,it,ct=null){const ht=this.compile(F,it,ct);return new Promise(tt=>{function St(){if(ht.forEach(function(Lt){ot.get(Lt).currentProgram.isReady()&&ht.delete(Lt)}),ht.size===0){tt(F);return}setTimeout(St,10)}st.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Ze=null;function fn(F){Ze&&Ze(F)}function Nr(){Tn.stop()}function Ur(){Tn.start()}const Tn=new Kc;Tn.setAnimationLoop(fn),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(F){Ze=F,pt.setAnimationLoop(F),F===null?Tn.stop():Tn.start()},pt.addEventListener("sessionstart",Nr),pt.addEventListener("sessionend",Ur),this.render=function(F,it){if(it!==void 0&&it.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),it.parent===null&&it.matrixWorldAutoUpdate===!0&&it.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(it),it=pt.getCamera()),F.isScene===!0&&F.onBeforeRender(M,F,it,N),h=oe.get(F,E.length),h.init(it),E.push(h),xt.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),X.setFromProjectionMatrix(xt),lt=this.localClippingEnabled,Y=bt.init(this.clippingPlanes,lt),m=At.get(F,x.length),m.init(),x.push(m),pt.enabled===!0&&pt.isPresenting===!0){const St=M.xr.getDepthSensingMesh();St!==null&&hr(St,it,-1/0,M.sortObjects)}hr(F,it,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(Q,ft),Jt=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,Jt&&Dt.addToRenderList(m,F),this.info.render.frame++,Y===!0&&bt.beginShadows();const ct=h.state.shadowsArray;Ut.render(ct,F,it),Y===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ht=m.opaque,tt=m.transmissive;if(h.setupLights(),it.isArrayCamera){const St=it.cameras;if(tt.length>0)for(let Lt=0,zt=St.length;Lt<zt;Lt++){const Vt=St[Lt];ur(ht,tt,F,Vt)}Jt&&Dt.render(F);for(let Lt=0,zt=St.length;Lt<zt;Lt++){const Vt=St[Lt];Fr(m,F,Vt,Vt.viewport)}}else tt.length>0&&ur(ht,tt,F,it),Jt&&Dt.render(F),Fr(m,F,it);N!==null&&(D.updateMultisampleRenderTarget(N),D.updateRenderTargetMipmap(N)),F.isScene===!0&&F.onAfterRender(M,F,it),ve.resetDefaultState(),S=-1,w=null,E.pop(),E.length>0?(h=E[E.length-1],Y===!0&&bt.setGlobalState(M.clippingPlanes,h.state.camera)):h=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function hr(F,it,ct,ht){if(F.visible===!1)return;if(F.layers.test(it.layers)){if(F.isGroup)ct=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(it);else if(F.isLight)h.pushLight(F),F.castShadow&&h.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||X.intersectsSprite(F)){ht&&kt.setFromMatrixPosition(F.matrixWorld).applyMatrix4(xt);const Lt=at.update(F),zt=F.material;zt.visible&&m.push(F,Lt,zt,ct,kt.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||X.intersectsObject(F))){const Lt=at.update(F),zt=F.material;if(ht&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),kt.copy(F.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),kt.copy(Lt.boundingSphere.center)),kt.applyMatrix4(F.matrixWorld).applyMatrix4(xt)),Array.isArray(zt)){const Vt=Lt.groups;for(let $t=0,se=Vt.length;$t<se;$t++){const Ht=Vt[$t],fe=zt[Ht.materialIndex];fe&&fe.visible&&m.push(F,Lt,fe,ct,kt.z,Ht)}}else zt.visible&&m.push(F,Lt,zt,ct,kt.z,null)}}const St=F.children;for(let Lt=0,zt=St.length;Lt<zt;Lt++)hr(St[Lt],it,ct,ht)}function Fr(F,it,ct,ht){const tt=F.opaque,St=F.transmissive,Lt=F.transparent;h.setupLightsView(ct),Y===!0&&bt.setGlobalState(M.clippingPlanes,ct),ht&&O.viewport(B.copy(ht)),tt.length>0&&wi(tt,it,ct),St.length>0&&wi(St,it,ct),Lt.length>0&&wi(Lt,it,ct),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function ur(F,it,ct,ht){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[ht.id]===void 0&&(h.state.transmissionRenderTarget[ht.id]=new bi(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Pr:Vn,minFilter:On,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const St=h.state.transmissionRenderTarget[ht.id],Lt=ht.viewport||B;St.setSize(Lt.z,Lt.w);const zt=M.getRenderTarget();M.setRenderTarget(St),M.getClearColor(y),H=M.getClearAlpha(),H<1&&M.setClearColor(16777215,.5),M.clear(),Jt&&Dt.render(ct);const Vt=M.toneMapping;M.toneMapping=ni;const $t=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),h.setupLightsView(ht),Y===!0&&bt.setGlobalState(M.clippingPlanes,ht),wi(F,ct,ht),D.updateMultisampleRenderTarget(St),D.updateRenderTargetMipmap(St),st.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let Ht=0,fe=it.length;Ht<fe;Ht++){const Me=it[Ht],Ee=Me.object,Le=Me.geometry,me=Me.material,Gt=Me.group;if(me.side===Sn&&Ee.layers.test(ht.layers)){const pn=me.side;me.side=Qe,me.needsUpdate=!0,dr(Ee,ct,ht,Le,me,Gt),me.side=pn,me.needsUpdate=!0,se=!0}}se===!0&&(D.updateMultisampleRenderTarget(St),D.updateRenderTargetMipmap(St))}M.setRenderTarget(zt),M.setClearColor(y,H),$t!==void 0&&(ht.viewport=$t),M.toneMapping=Vt}function wi(F,it,ct){const ht=it.isScene===!0?it.overrideMaterial:null;for(let tt=0,St=F.length;tt<St;tt++){const Lt=F[tt],zt=Lt.object,Vt=Lt.geometry,$t=ht===null?Lt.material:ht,se=Lt.group;zt.layers.test(ct.layers)&&dr(zt,it,ct,Vt,$t,se)}}function dr(F,it,ct,ht,tt,St){F.onBeforeRender(M,it,ct,ht,tt,St),F.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),tt.onBeforeRender(M,it,ct,ht,F,St),tt.transparent===!0&&tt.side===Sn&&tt.forceSinglePass===!1?(tt.side=Qe,tt.needsUpdate=!0,M.renderBufferDirect(ct,it,ht,tt,F,St),tt.side=zn,tt.needsUpdate=!0,M.renderBufferDirect(ct,it,ht,tt,F,St),tt.side=Sn):M.renderBufferDirect(ct,it,ht,tt,F,St),F.onAfterRender(M,it,ct,ht,tt,St)}function Ti(F,it,ct){it.isScene!==!0&&(it=Kt);const ht=ot.get(F),tt=h.state.lights,St=h.state.shadowsArray,Lt=tt.state.version,zt=wt.getParameters(F,tt.state,St,it,ct),Vt=wt.getProgramCacheKey(zt);let $t=ht.programs;ht.environment=F.isMeshStandardMaterial?it.environment:null,ht.fog=it.fog,ht.envMap=(F.isMeshStandardMaterial?G:b).get(F.envMap||ht.environment),ht.envMapRotation=ht.environment!==null&&F.envMap===null?it.environmentRotation:F.envMapRotation,$t===void 0&&(F.addEventListener("dispose",re),$t=new Map,ht.programs=$t);let se=$t.get(Vt);if(se!==void 0){if(ht.currentProgram===se&&ht.lightsStateVersion===Lt)return kr(F,zt),se}else zt.uniforms=wt.getUniforms(F),F.onBeforeCompile(zt,M),se=wt.acquireProgram(zt,Vt),$t.set(Vt,se),ht.uniforms=zt.uniforms;const Ht=ht.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Ht.clippingPlanes=bt.uniform),kr(F,zt),ht.needsLights=Zs(F),ht.lightsStateVersion=Lt,ht.needsLights&&(Ht.ambientLightColor.value=tt.state.ambient,Ht.lightProbe.value=tt.state.probe,Ht.directionalLights.value=tt.state.directional,Ht.directionalLightShadows.value=tt.state.directionalShadow,Ht.spotLights.value=tt.state.spot,Ht.spotLightShadows.value=tt.state.spotShadow,Ht.rectAreaLights.value=tt.state.rectArea,Ht.ltc_1.value=tt.state.rectAreaLTC1,Ht.ltc_2.value=tt.state.rectAreaLTC2,Ht.pointLights.value=tt.state.point,Ht.pointLightShadows.value=tt.state.pointShadow,Ht.hemisphereLights.value=tt.state.hemi,Ht.directionalShadowMap.value=tt.state.directionalShadowMap,Ht.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Ht.spotShadowMap.value=tt.state.spotShadowMap,Ht.spotLightMatrix.value=tt.state.spotLightMatrix,Ht.spotLightMap.value=tt.state.spotLightMap,Ht.pointShadowMap.value=tt.state.pointShadowMap,Ht.pointShadowMatrix.value=tt.state.pointShadowMatrix),ht.currentProgram=se,ht.uniformsList=null,se}function Or(F){if(F.uniformsList===null){const it=F.currentProgram.getUniforms();F.uniformsList=Ps.seqWithValue(it.seq,F.uniforms)}return F.uniformsList}function kr(F,it){const ct=ot.get(F);ct.outputColorSpace=it.outputColorSpace,ct.batching=it.batching,ct.batchingColor=it.batchingColor,ct.instancing=it.instancing,ct.instancingColor=it.instancingColor,ct.instancingMorph=it.instancingMorph,ct.skinning=it.skinning,ct.morphTargets=it.morphTargets,ct.morphNormals=it.morphNormals,ct.morphColors=it.morphColors,ct.morphTargetsCount=it.morphTargetsCount,ct.numClippingPlanes=it.numClippingPlanes,ct.numIntersection=it.numClipIntersection,ct.vertexAlphas=it.vertexAlphas,ct.vertexTangents=it.vertexTangents,ct.toneMapping=it.toneMapping}function qs(F,it,ct,ht,tt){it.isScene!==!0&&(it=Kt),D.resetTextureUnits();const St=it.fog,Lt=ht.isMeshStandardMaterial?it.environment:null,zt=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ar,Vt=(ht.isMeshStandardMaterial?G:b).get(ht.envMap||Lt),$t=ht.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,se=!!ct.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),Ht=!!ct.morphAttributes.position,fe=!!ct.morphAttributes.normal,Me=!!ct.morphAttributes.color;let Ee=ni;ht.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ee=M.toneMapping);const Le=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,me=Le!==void 0?Le.length:0,Gt=ot.get(ht),pn=h.state.lights;if(Y===!0&&(lt===!0||F!==w)){const je=F===w&&ht.id===S;bt.setState(ht,F,je)}let pe=!1;ht.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==pn.state.version||Gt.outputColorSpace!==zt||tt.isBatchedMesh&&Gt.batching===!1||!tt.isBatchedMesh&&Gt.batching===!0||tt.isBatchedMesh&&Gt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&Gt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&Gt.instancing===!1||!tt.isInstancedMesh&&Gt.instancing===!0||tt.isSkinnedMesh&&Gt.skinning===!1||!tt.isSkinnedMesh&&Gt.skinning===!0||tt.isInstancedMesh&&Gt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Gt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Gt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Gt.instancingMorph===!1&&tt.morphTexture!==null||Gt.envMap!==Vt||ht.fog===!0&&Gt.fog!==St||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==bt.numPlanes||Gt.numIntersection!==bt.numIntersection)||Gt.vertexAlphas!==$t||Gt.vertexTangents!==se||Gt.morphTargets!==Ht||Gt.morphNormals!==fe||Gt.morphColors!==Me||Gt.toneMapping!==Ee||Gt.morphTargetsCount!==me)&&(pe=!0):(pe=!0,Gt.__version=ht.version);let en=Gt.currentProgram;pe===!0&&(en=Ti(ht,it,tt));let Gn=!1,Xe=!1,Wn=!1;const ne=en.getUniforms(),Ke=Gt.uniforms;if(O.useProgram(en.program)&&(Gn=!0,Xe=!0,Wn=!0),ht.id!==S&&(S=ht.id,Xe=!0),Gn||w!==F){O.buffers.depth.getReversed()?(dt.copy(F.projectionMatrix),Fu(dt),Ou(dt),ne.setValue(v,"projectionMatrix",dt)):ne.setValue(v,"projectionMatrix",F.projectionMatrix),ne.setValue(v,"viewMatrix",F.matrixWorldInverse);const mn=ne.map.cameraPosition;mn!==void 0&&mn.setValue(v,Et.setFromMatrixPosition(F.matrixWorld)),V.logarithmicDepthBuffer&&ne.setValue(v,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&ne.setValue(v,"isOrthographic",F.isOrthographicCamera===!0),w!==F&&(w=F,Xe=!0,Wn=!0)}if(tt.isSkinnedMesh){ne.setOptional(v,tt,"bindMatrix"),ne.setOptional(v,tt,"bindMatrixInverse");const je=tt.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),ne.setValue(v,"boneTexture",je.boneTexture,D))}tt.isBatchedMesh&&(ne.setOptional(v,tt,"batchingTexture"),ne.setValue(v,"batchingTexture",tt._matricesTexture,D),ne.setOptional(v,tt,"batchingIdTexture"),ne.setValue(v,"batchingIdTexture",tt._indirectTexture,D),ne.setOptional(v,tt,"batchingColorTexture"),tt._colorsTexture!==null&&ne.setValue(v,"batchingColorTexture",tt._colorsTexture,D));const ai=ct.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&qt.update(tt,ct,en),(Xe||Gt.receiveShadow!==tt.receiveShadow)&&(Gt.receiveShadow=tt.receiveShadow,ne.setValue(v,"receiveShadow",tt.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(Ke.envMap.value=Vt,Ke.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),ht.isMeshStandardMaterial&&ht.envMap===null&&it.environment!==null&&(Ke.envMapIntensity.value=it.environmentIntensity),Xe&&(ne.setValue(v,"toneMappingExposure",M.toneMappingExposure),Gt.needsLights&&Ys(Ke,Wn),St&&ht.fog===!0&&yt.refreshFogUniforms(Ke,St),yt.refreshMaterialUniforms(Ke,ht,J,q,h.state.transmissionRenderTarget[F.id]),Ps.upload(v,Or(Gt),Ke,D)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(Ps.upload(v,Or(Gt),Ke,D),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&ne.setValue(v,"center",tt.center),ne.setValue(v,"modelViewMatrix",tt.modelViewMatrix),ne.setValue(v,"normalMatrix",tt.normalMatrix),ne.setValue(v,"modelMatrix",tt.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){const je=ht.uniformsGroups;for(let mn=0,ln=je.length;mn<ln;mn++){const oi=je[mn];et.update(oi,en),et.bind(oi,en)}}return en}function Ys(F,it){F.ambientLightColor.needsUpdate=it,F.lightProbe.needsUpdate=it,F.directionalLights.needsUpdate=it,F.directionalLightShadows.needsUpdate=it,F.pointLights.needsUpdate=it,F.pointLightShadows.needsUpdate=it,F.spotLights.needsUpdate=it,F.spotLightShadows.needsUpdate=it,F.rectAreaLights.needsUpdate=it,F.hemisphereLights.needsUpdate=it}function Zs(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(F,it,ct){ot.get(F.texture).__webglTexture=it,ot.get(F.depthTexture).__webglTexture=ct;const ht=ot.get(F);ht.__hasExternalTextures=!0,ht.__autoAllocateDepthBuffer=ct===void 0,ht.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ht.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(F,it){const ct=ot.get(F);ct.__webglFramebuffer=it,ct.__useDefaultFramebuffer=it===void 0},this.setRenderTarget=function(F,it=0,ct=0){N=F,L=it,P=ct;let ht=!0,tt=null,St=!1,Lt=!1;if(F){const Vt=ot.get(F);if(Vt.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(v.FRAMEBUFFER,null),ht=!1;else if(Vt.__webglFramebuffer===void 0)D.setupRenderTarget(F);else if(Vt.__hasExternalTextures)D.rebindTextures(F,ot.get(F.texture).__webglTexture,ot.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){const Ht=F.depthTexture;if(Vt.__boundDepthTexture!==Ht){if(Ht!==null&&ot.has(Ht)&&(F.width!==Ht.image.width||F.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(F)}}const $t=F.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Lt=!0);const se=ot.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(se[it])?tt=se[it][ct]:tt=se[it],St=!0):F.samples>0&&D.useMultisampledRTT(F)===!1?tt=ot.get(F).__webglMultisampledFramebuffer:Array.isArray(se)?tt=se[ct]:tt=se,B.copy(F.viewport),R.copy(F.scissor),z=F.scissorTest}else B.copy(j).multiplyScalar(J).floor(),R.copy(Z).multiplyScalar(J).floor(),z=_t;if(O.bindFramebuffer(v.FRAMEBUFFER,tt)&&ht&&O.drawBuffers(F,tt),O.viewport(B),O.scissor(R),O.setScissorTest(z),St){const Vt=ot.get(F.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+it,Vt.__webglTexture,ct)}else if(Lt){const Vt=ot.get(F.texture),$t=it||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,Vt.__webglTexture,ct||0,$t)}S=-1},this.readRenderTargetPixels=function(F,it,ct,ht,tt,St,Lt){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=ot.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Lt!==void 0&&(zt=zt[Lt]),zt){O.bindFramebuffer(v.FRAMEBUFFER,zt);try{const Vt=F.texture,$t=Vt.format,se=Vt.type;if(!V.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}it>=0&&it<=F.width-ht&&ct>=0&&ct<=F.height-tt&&v.readPixels(it,ct,ht,tt,ee.convert($t),ee.convert(se),St)}finally{const Vt=N!==null?ot.get(N).__webglFramebuffer:null;O.bindFramebuffer(v.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(F,it,ct,ht,tt,St,Lt){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=ot.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Lt!==void 0&&(zt=zt[Lt]),zt){const Vt=F.texture,$t=Vt.format,se=Vt.type;if(!V.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(it>=0&&it<=F.width-ht&&ct>=0&&ct<=F.height-tt){O.bindFramebuffer(v.FRAMEBUFFER,zt);const Ht=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,Ht),v.bufferData(v.PIXEL_PACK_BUFFER,St.byteLength,v.STREAM_READ),v.readPixels(it,ct,ht,tt,ee.convert($t),ee.convert(se),0);const fe=N!==null?ot.get(N).__webglFramebuffer:null;O.bindFramebuffer(v.FRAMEBUFFER,fe);const Me=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await Uu(v,Me,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,Ht),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,St),v.deleteBuffer(Ht),v.deleteSync(Me),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(F,it=null,ct=0){F.isTexture!==!0&&(br("WebGLRenderer: copyFramebufferToTexture function signature has changed."),it=arguments[0]||null,F=arguments[1]);const ht=Math.pow(2,-ct),tt=Math.floor(F.image.width*ht),St=Math.floor(F.image.height*ht),Lt=it!==null?it.x:0,zt=it!==null?it.y:0;D.setTexture2D(F,0),v.copyTexSubImage2D(v.TEXTURE_2D,ct,0,0,Lt,zt,tt,St),O.unbindTexture()},this.copyTextureToTexture=function(F,it,ct=null,ht=null,tt=0){F.isTexture!==!0&&(br("WebGLRenderer: copyTextureToTexture function signature has changed."),ht=arguments[0]||null,F=arguments[1],it=arguments[2],tt=arguments[3]||0,ct=null);let St,Lt,zt,Vt,$t,se,Ht,fe,Me;const Ee=F.isCompressedTexture?F.mipmaps[tt]:F.image;ct!==null?(St=ct.max.x-ct.min.x,Lt=ct.max.y-ct.min.y,zt=ct.isBox3?ct.max.z-ct.min.z:1,Vt=ct.min.x,$t=ct.min.y,se=ct.isBox3?ct.min.z:0):(St=Ee.width,Lt=Ee.height,zt=Ee.depth||1,Vt=0,$t=0,se=0),ht!==null?(Ht=ht.x,fe=ht.y,Me=ht.z):(Ht=0,fe=0,Me=0);const Le=ee.convert(it.format),me=ee.convert(it.type);let Gt;it.isData3DTexture?(D.setTexture3D(it,0),Gt=v.TEXTURE_3D):it.isDataArrayTexture||it.isCompressedArrayTexture?(D.setTexture2DArray(it,0),Gt=v.TEXTURE_2D_ARRAY):(D.setTexture2D(it,0),Gt=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,it.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,it.unpackAlignment);const pn=v.getParameter(v.UNPACK_ROW_LENGTH),pe=v.getParameter(v.UNPACK_IMAGE_HEIGHT),en=v.getParameter(v.UNPACK_SKIP_PIXELS),Gn=v.getParameter(v.UNPACK_SKIP_ROWS),Xe=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,Ee.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Ee.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Vt),v.pixelStorei(v.UNPACK_SKIP_ROWS,$t),v.pixelStorei(v.UNPACK_SKIP_IMAGES,se);const Wn=F.isDataArrayTexture||F.isData3DTexture,ne=it.isDataArrayTexture||it.isData3DTexture;if(F.isRenderTargetTexture||F.isDepthTexture){const Ke=ot.get(F),ai=ot.get(it),je=ot.get(Ke.__renderTarget),mn=ot.get(ai.__renderTarget);O.bindFramebuffer(v.READ_FRAMEBUFFER,je.__webglFramebuffer),O.bindFramebuffer(v.DRAW_FRAMEBUFFER,mn.__webglFramebuffer);for(let ln=0;ln<zt;ln++)Wn&&v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,ot.get(F).__webglTexture,tt,se+ln),F.isDepthTexture?(ne&&v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,ot.get(it).__webglTexture,tt,Me+ln),v.blitFramebuffer(Vt,$t,St,Lt,Ht,fe,St,Lt,v.DEPTH_BUFFER_BIT,v.NEAREST)):ne?v.copyTexSubImage3D(Gt,tt,Ht,fe,Me+ln,Vt,$t,St,Lt):v.copyTexSubImage2D(Gt,tt,Ht,fe,Me+ln,Vt,$t,St,Lt);O.bindFramebuffer(v.READ_FRAMEBUFFER,null),O.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else ne?F.isDataTexture||F.isData3DTexture?v.texSubImage3D(Gt,tt,Ht,fe,Me,St,Lt,zt,Le,me,Ee.data):it.isCompressedArrayTexture?v.compressedTexSubImage3D(Gt,tt,Ht,fe,Me,St,Lt,zt,Le,Ee.data):v.texSubImage3D(Gt,tt,Ht,fe,Me,St,Lt,zt,Le,me,Ee):F.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,tt,Ht,fe,St,Lt,Le,me,Ee.data):F.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,tt,Ht,fe,Ee.width,Ee.height,Le,Ee.data):v.texSubImage2D(v.TEXTURE_2D,tt,Ht,fe,St,Lt,Le,me,Ee);v.pixelStorei(v.UNPACK_ROW_LENGTH,pn),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,pe),v.pixelStorei(v.UNPACK_SKIP_PIXELS,en),v.pixelStorei(v.UNPACK_SKIP_ROWS,Gn),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Xe),tt===0&&it.generateMipmaps&&v.generateMipmap(Gt),O.unbindTexture()},this.copyTextureToTexture3D=function(F,it,ct=null,ht=null,tt=0){return F.isTexture!==!0&&(br("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ct=arguments[0]||null,ht=arguments[1]||null,F=arguments[2],it=arguments[3],tt=arguments[4]||0),br('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(F,it,ct,ht,tt)},this.initRenderTarget=function(F){ot.get(F).__webglFramebuffer===void 0&&D.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?D.setTextureCube(F,0):F.isData3DTexture?D.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?D.setTexture2DArray(F,0):D.setTexture2D(F,0),O.unbindTexture()},this.resetState=function(){L=0,P=0,N=null,O.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}class nh extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Yl=new K,Zl=new be,Kl=new be,Yg=new K,$l=new ie,ls=new K,wa=new Si,Jl=new ie,Ta=new Lr;class Zg extends Ie{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zo,this.bindMatrix=new ie,this.bindMatrixInverse=new ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new si),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ls),this.boundingBox.expandByPoint(ls)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Si),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ls),this.boundingSphere.expandByPoint(ls)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wa.copy(this.boundingSphere),wa.applyMatrix4(r),t.ray.intersectsSphere(wa)!==!1&&(Jl.copy(r).invert(),Ta.copy(t.ray).applyMatrix4(Jl),!(this.boundingBox!==null&&Ta.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ta)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new be,e=this.geometry.attributes.skinWeight;for(let n=0,r=e.count;n<r;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Zo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===su?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,r=this.geometry;Zl.fromBufferAttribute(r.attributes.skinIndex,t),Kl.fromBufferAttribute(r.attributes.skinWeight,t),Yl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=Kl.getComponent(s);if(o!==0){const a=Zl.getComponent(s);$l.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Yg.copy(Yl).applyMatrix4($l),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class ih extends Pe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class rh extends Be{constructor(t=null,e=1,n=1,r,s,o,a,l,c=an,d=an,f,p){super(null,o,a,l,c,d,r,s,f,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ql=new ie,Kg=new ie;class Uo{constructor(t=[],e=[]){this.uuid=ri(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new ie)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new ie;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:Kg;Ql.multiplyMatrices(a,e[s]),Ql.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Uo(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new rh(e,t,t,dn,En);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const r=this.bones[e];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,r=t.bones.length;n<r;n++){const s=t.bones[n];let o=e[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new ih),this.bones.push(o),this.boneInverses.push(new ie().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let r=0,s=e.length;r<s;r++){const o=e[r];t.bones.push(o.uuid);const a=n[r];t.boneInverses.push(a.toArray())}return t}}class xi extends bn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Is=new K,Ns=new K,tc=new ie,_r=new Lr,cs=new Si,Aa=new K,ec=new K;class sh extends Pe{constructor(t=new ze,e=new xi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Is.fromBufferAttribute(e,r-1),Ns.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Is.distanceTo(Ns);t.setAttribute("lineDistance",new ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(r),cs.radius+=s,t.ray.intersectsSphere(cs)===!1)return;tc.copy(r).invert(),_r.copy(t.ray).applyMatrix4(tc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,p=n.attributes.position;if(d!==null){const u=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=u,m=_-1;g<m;g+=c){const h=d.getX(g),x=d.getX(g+1),E=hs(this,t,_r,l,h,x);E&&e.push(E)}if(this.isLineLoop){const g=d.getX(_-1),m=d.getX(u),h=hs(this,t,_r,l,g,m);h&&e.push(h)}}else{const u=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let g=u,m=_-1;g<m;g+=c){const h=hs(this,t,_r,l,g,g+1);h&&e.push(h)}if(this.isLineLoop){const g=hs(this,t,_r,l,_-1,u);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function hs(i,t,e,n,r,s){const o=i.geometry.attributes.position;if(Is.fromBufferAttribute(o,r),Ns.fromBufferAttribute(o,s),e.distanceSqToSegment(Is,Ns,Aa,ec)>n)return;Aa.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Aa);if(!(l<t.near||l>t.far))return{distance:l,point:ec.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const nc=new K,ic=new K;class Us extends sh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)nc.fromBufferAttribute(e,r),ic.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+nc.distanceTo(ic);t.setAttribute("lineDistance",new ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sr extends bn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const rc=new ie,So=new Lr,us=new Si,ds=new K;class Ra extends Pe{constructor(t=new ze,e=new Sr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(r),us.radius+=s,t.ray.intersectsSphere(us)===!1)return;rc.copy(r).invert(),So.copy(t.ray).applyMatrix4(rc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const p=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let _=p,g=u;_<g;_++){const m=c.getX(_);ds.fromBufferAttribute(f,m),sc(ds,m,l,r,t,e,this)}}else{const p=Math.max(0,o.start),u=Math.min(f.count,o.start+o.count);for(let _=p,g=u;_<g;_++)ds.fromBufferAttribute(f,_),sc(ds,_,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function sc(i,t,e,n,r,s,o){const a=So.distanceSqToPoint(i);if(a<e){const l=new K;So.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class $g extends Be{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fo extends ze{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],p=[],u=[];let _=0;const g=[],m=n/2;let h=0;x(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new ye(f,3)),this.setAttribute("normal",new ye(p,3)),this.setAttribute("uv",new ye(u,2));function x(){const M=new K,C=new K;let L=0;const P=(e-t)/n;for(let N=0;N<=s;N++){const S=[],w=N/s,B=w*(e-t)+t;for(let R=0;R<=r;R++){const z=R/r,y=z*l+a,H=Math.sin(y),W=Math.cos(y);C.x=B*H,C.y=-w*n+m,C.z=B*W,f.push(C.x,C.y,C.z),M.set(H,P,W).normalize(),p.push(M.x,M.y,M.z),u.push(z,1-w),S.push(_++)}g.push(S)}for(let N=0;N<r;N++)for(let S=0;S<s;S++){const w=g[S][N],B=g[S+1][N],R=g[S+1][N+1],z=g[S][N+1];(t>0||S!==0)&&(d.push(w,B,z),L+=3),(e>0||S!==s-1)&&(d.push(B,R,z),L+=3)}c.addGroup(h,L,0),h+=L}function E(M){const C=_,L=new te,P=new K;let N=0;const S=M===!0?t:e,w=M===!0?1:-1;for(let R=1;R<=r;R++)f.push(0,m*w,0),p.push(0,w,0),u.push(.5,.5),_++;const B=_;for(let R=0;R<=r;R++){const y=R/r*l+a,H=Math.cos(y),W=Math.sin(y);P.x=S*W,P.y=m*w,P.z=S*H,f.push(P.x,P.y,P.z),p.push(0,w,0),L.x=H*.5+.5,L.y=W*.5*w+.5,u.push(L.x,L.y),_++}for(let R=0;R<r;R++){const z=C+R,y=B+R;M===!0?d.push(y,y+1,z):d.push(y+1,y,z),N+=3}c.addGroup(h,N,M===!0?1:2),h+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const fs=new K,ps=new K,Ca=new K,ms=new un;class Jg extends ze{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(Zi*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],d=["a","b","c"],f=new Array(3),p={},u=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:m,c:h}=ms;if(g.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),h.fromBufferAttribute(a,c[2]),ms.getNormal(Ca),f[0]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,f[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[2]=`${Math.round(h.x*r)},${Math.round(h.y*r)},${Math.round(h.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let x=0;x<3;x++){const E=(x+1)%3,M=f[x],C=f[E],L=ms[d[x]],P=ms[d[E]],N=`${M}_${C}`,S=`${C}_${M}`;S in p&&p[S]?(Ca.dot(p[S].normal)<=s&&(u.push(L.x,L.y,L.z),u.push(P.x,P.y,P.z)),p[S]=null):N in p||(p[N]={index0:c[x],index1:c[E],normal:Ca.clone()})}}for(const _ in p)if(p[_]){const{index0:g,index1:m}=p[_];fs.fromBufferAttribute(a,g),ps.fromBufferAttribute(a,m),u.push(fs.x,fs.y,fs.z),u.push(ps.x,ps.y,ps.z)}this.setAttribute("position",new ye(u,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Oo extends ze{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new K,p=new K,u=[],_=[],g=[],m=[];for(let h=0;h<=n;h++){const x=[],E=h/n;let M=0;h===0&&o===0?M=.5/e:h===n&&l===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){const L=C/e;f.x=-t*Math.cos(r+L*s)*Math.sin(o+E*a),f.y=t*Math.cos(o+E*a),f.z=t*Math.sin(r+L*s)*Math.sin(o+E*a),_.push(f.x,f.y,f.z),p.copy(f).normalize(),g.push(p.x,p.y,p.z),m.push(L+M,1-E),x.push(c++)}d.push(x)}for(let h=0;h<n;h++)for(let x=0;x<e;x++){const E=d[h][x+1],M=d[h][x],C=d[h+1][x],L=d[h+1][x+1];(h!==0||o>0)&&u.push(E,M,L),(h!==n-1||l<Math.PI)&&u.push(M,C,L)}this.setIndex(u),this.setAttribute("position",new ye(_,3)),this.setAttribute("normal",new ye(g,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ah extends bn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zs,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $i extends bn{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new ae(16777215),this.specular=new ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zs,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=ks,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qg extends bn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zs,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=ks,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function gs(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function t_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function e_(i){function t(r,s){return i[r]-i[s]}const e=i.length,n=new Array(e);for(let r=0;r!==e;++r)n[r]=r;return n.sort(t),n}function ac(i,t,e){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)r[o++]=i[a+l]}return r}function oh(i,t,e,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=i[r++];while(s!==void 0)}class Gs{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,r=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break e}o=e.length;break n}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class n_ extends Gs{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ko,endingEnd:Ko}}intervalChanged_(t,e,n){const r=this.parameterPositions;let s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case $o:s=t,a=2*e-n;break;case Jo:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $o:o=t,l=2*n-e;break;case Jo:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}const c=(n-e)*.5,d=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(t,e,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,u=this._weightNext,_=(n-e)/(r-e),g=_*_,m=g*_,h=-p*m+2*p*g-p*_,x=(1+p)*m+(-1.5-2*p)*g+(-.5+p)*_+1,E=(-1-u)*m+(1.5+u)*g+.5*_,M=u*m-u*g;for(let C=0;C!==a;++C)s[C]=h*o[d+C]+x*o[c+C]+E*o[l+C]+M*o[f+C];return s}}class i_ extends Gs{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=(n-e)/(r-e),f=1-d;for(let p=0;p!==a;++p)s[p]=o[c+p]*f+o[l+p]*d;return s}}class r_ extends Gs{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}}class wn{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=gs(e,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:gs(t.times,Array),values:gs(t.values,Array)};const r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new r_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new i_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new n_(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ls:e=this.InterpolantFactoryMethodDiscrete;break;case bo:e=this.InterpolantFactoryMethodLinear;break;case $s:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ls;case this.InterpolantFactoryMethodLinear:return bo;case this.InterpolantFactoryMethodSmooth:return $s}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&t_(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===$s,s=t.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],d=t[a+1];if(c!==d&&(a!==1||c!==t[0]))if(r)l=!0;else{const f=a*n,p=f-n,u=f+n;for(let _=0;_!==n;++_){const g=e[f+_];if(g!==e[p+_]||g!==e[u+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const f=a*n,p=o*n;for(let u=0;u!==n;++u)e[p+u]=e[f+u]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}}wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=bo;class lr extends wn{constructor(t,e,n){super(t,e,n)}}lr.prototype.ValueTypeName="bool";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=Ls;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;class lh extends wn{}lh.prototype.ValueTypeName="color";class Fs extends wn{}Fs.prototype.ValueTypeName="number";class s_ extends Gs{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e);let c=t*a;for(let d=c+a;c!==d;c+=4)yn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Ir extends wn{InterpolantFactoryMethodLinear(t){return new s_(this.times,this.values,this.getValueSize(),t)}}Ir.prototype.ValueTypeName="quaternion";Ir.prototype.InterpolantFactoryMethodSmooth=void 0;class cr extends wn{constructor(t,e,n){super(t,e,n)}}cr.prototype.ValueTypeName="string";cr.prototype.ValueBufferType=Array;cr.prototype.DefaultInterpolation=Ls;cr.prototype.InterpolantFactoryMethodLinear=void 0;cr.prototype.InterpolantFactoryMethodSmooth=void 0;class sr extends wn{}sr.prototype.ValueTypeName="vector";class oc{constructor(t="",e=-1,n=[],r=ou){this.name=t,this.tracks=n,this.duration=e,this.blendMode=r,this.uuid=ri(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,r=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(o_(n[o]).scale(r));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,r={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(wn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(t,e,n,r){const s=e.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const d=e_(l);l=ac(l,1,d),c=ac(c,1,d),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Fs(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const r=t;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===e)return n[r];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],d=c.name.match(s);if(d&&d.length>1){const f=d[1];let p=r[f];p||(r[f]=p=[]),p.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,p,u,_,g){if(u.length!==0){const m=[],h=[];oh(u,m,h,_),m.length!==0&&g.push(new f(p,m,h))}},r=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let f=0;f<c.length;f++){const p=c[f].keys;if(!(!p||p.length===0))if(p[0].morphTargets){const u={};let _;for(_=0;_<p.length;_++)if(p[_].morphTargets)for(let g=0;g<p[_].morphTargets.length;g++)u[p[_].morphTargets[g]]=-1;for(const g in u){const m=[],h=[];for(let x=0;x!==p[_].morphTargets.length;++x){const E=p[_];m.push(E.time),h.push(E.morphTarget===g?1:0)}r.push(new Fs(".morphTargetInfluence["+g+"]",m,h))}l=u.length*o}else{const u=".bones["+e[f].name+"]";n(sr,u+".position",p,"pos",r),n(Ir,u+".quaternion",p,"rot",r),n(sr,u+".scale",p,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,r=t.length;n!==r;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function a_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fs;case"vector":case"vector2":case"vector3":case"vector4":return sr;case"color":return lh;case"quaternion":return Ir;case"bool":case"boolean":return lr;case"string":return cr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function o_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=a_(i.type);if(i.times===void 0){const e=[],n=[];oh(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const Os={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ch{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){const f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,p=c.length;f<p;f+=2){const u=c[f],_=c[f+1];if(u.global&&(u.lastIndex=0),u.test(d))return _}return null}}}const hh=new ch;class Hn{constructor(t){this.manager=t!==void 0?t:hh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Hn.DEFAULT_MATERIAL_NAME="__DEFAULT";const In={};class l_ extends Error{constructor(t,e){super(t),this.response=e}}class Ws extends Hn{constructor(t){super(t)}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Os.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(In[t]!==void 0){In[t].push({onLoad:e,onProgress:n,onError:r});return}In[t]=[],In[t].push({onLoad:e,onProgress:n,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=In[t],f=c.body.getReader(),p=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),u=p?parseInt(p):0,_=u!==0;let g=0;const m=new ReadableStream({start(h){x();function x(){f.read().then(({done:E,value:M})=>{if(E)h.close();else{g+=M.byteLength;const C=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:u});for(let L=0,P=d.length;L<P;L++){const N=d[L];N.onProgress&&N.onProgress(C)}h.enqueue(M),x()}},E=>{h.error(E)})}}});return new Response(m)}else throw new l_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),p=f&&f[1]?f[1].toLowerCase():void 0,u=new TextDecoder(p);return c.arrayBuffer().then(_=>u.decode(_))}}}).then(c=>{Os.add(t,c);const d=In[t];delete In[t];for(let f=0,p=d.length;f<p;f++){const u=d[f];u.onLoad&&u.onLoad(c)}}).catch(c=>{const d=In[t];if(d===void 0)throw this.manager.itemError(t),c;delete In[t];for(let f=0,p=d.length;f<p;f++){const u=d[f];u.onError&&u.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class c_ extends Hn{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Os.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Tr("img");function l(){d(),Os.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(f){d(),r&&r(f),s.manager.itemError(t),s.manager.itemEnd(t)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class h_ extends Hn{constructor(t){super(t)}load(t,e,n,r){const s=this,o=new rh,a=new Ws(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(t,function(l){let c;try{c=s.parse(l)}catch(d){if(r!==void 0)r(d);else{console.error(d);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:xn,o.wrapT=c.wrapT!==void 0?c.wrapT:xn,o.magFilter=c.magFilter!==void 0?c.magFilter:sn,o.minFilter=c.minFilter!==void 0?c.minFilter:sn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=On),c.mipmapCount===1&&(o.minFilter=sn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,e&&e(o,c)},n,r),o}}class uh extends Hn{constructor(t){super(t)}load(t,e,n,r){const s=new Be,o=new c_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class Xs extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Pa=new ie,lc=new K,cc=new K;class ko{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Do,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;lc.setFromMatrixPosition(t.matrixWorld),e.position.copy(lc),cc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cc),e.updateMatrixWorld(),Pa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class u_ extends ko{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ir*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class d_ extends Xs{constructor(t,e,n=0,r=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new u_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const hc=new ie,vr=new K,La=new K;class f_ extends ko{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new K(1,0,0),new K(-1,0,0),new K(0,0,1),new K(0,0,-1),new K(0,1,0),new K(0,-1,0)],this._cubeUps=[new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,1,0),new K(0,0,1),new K(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),vr.setFromMatrixPosition(t.matrixWorld),n.position.copy(vr),La.copy(n.position),La.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(La),n.updateMatrixWorld(),r.makeTranslation(-vr.x,-vr.y,-vr.z),hc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc)}}class p_ extends Xs{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new f_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class m_ extends ko{constructor(){super(new Io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dh extends Xs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new m_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fh extends Xs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ph{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,r=t.length;n<r;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class uc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ge(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class g_ extends Mi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eo);const dc={type:"change"},Bo={type:"start"},mh={type:"end"},_s=new Lr,fc=new Jn,__=Math.cos(70*ti.DEG2RAD),Ne=new K,Je=2*Math.PI,Te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Da=1e-6;class v_ extends g_{constructor(t,e=null){super(t,e),this.state=Te.NONE,this.enabled=!0,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:Wi.ROTATE,TWO:Wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new yn,this._lastTargetPosition=new K,this._quat=new yn().setFromUnitVectors(t.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new uc,this._sphericalDelta=new uc,this._scale=1,this._panOffset=new K,this._rotateStart=new te,this._rotateEnd=new te,this._rotateDelta=new te,this._panStart=new te,this._panEnd=new te,this._panDelta=new te,this._dollyStart=new te,this._dollyEnd=new te,this._dollyDelta=new te,this._dollyDirection=new K,this._mouse=new te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=y_.bind(this),this._onPointerDown=x_.bind(this),this._onPointerUp=b_.bind(this),this._onContextMenu=R_.bind(this),this._onMouseWheel=E_.bind(this),this._onKeyDown=w_.bind(this),this._onTouchStart=T_.bind(this),this._onTouchMove=A_.bind(this),this._onMouseDown=M_.bind(this),this._onMouseMove=S_.bind(this),this._interceptControlDown=C_.bind(this),this._interceptControlUp=P_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(dc),this.update(),this.state=Te.NONE}update(t=null){const e=this.object.position;Ne.copy(e).sub(this.target),Ne.applyQuaternion(this._quat),this._spherical.setFromVector3(Ne),this.autoRotate&&this.state===Te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Je:n>Math.PI&&(n-=Je),r<-Math.PI?r+=Je:r>Math.PI&&(r-=Je),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ne.setFromSpherical(this._spherical),Ne.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ne),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ne.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new K(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new K(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ne.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(_s.origin.copy(this.object.position),_s.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_s.direction))<__?this.object.lookAt(this.target):(fc.setFromNormalAndCoplanarPoint(this.object.up,this.target),_s.intersectPlane(fc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Da||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Da||this._lastTargetPosition.distanceToSquared(this.target)>Da?(this.dispatchEvent(dc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Je/60*this.autoRotateSpeed*t:Je/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ne.setFromMatrixColumn(e,0),Ne.multiplyScalar(-t),this._panOffset.add(Ne)}_panUp(t,e){this.screenSpacePanning===!0?Ne.setFromMatrixColumn(e,1):(Ne.setFromMatrixColumn(e,0),Ne.crossVectors(this.object.up,Ne)),Ne.multiplyScalar(t),this._panOffset.add(Ne)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ne.copy(r).sub(this.target);let s=Ne.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Je*this._rotateDelta.x/e.clientHeight),this._rotateUp(Je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Je*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Je*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Je*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Je*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Je*this._rotateDelta.x/e.clientHeight),this._rotateUp(Je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new te,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function x_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function y_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function b_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mh),this.state=Te.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function M_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Te.DOLLY;break;case ji.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Te.ROTATE}break;case ji.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Te.PAN}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(Bo)}function S_(i){switch(this.state){case Te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function E_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Te.NONE||(i.preventDefault(),this.dispatchEvent(Bo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(mh))}function w_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function T_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Wi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Te.TOUCH_ROTATE;break;case Wi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Te.TOUCH_PAN;break;default:this.state=Te.NONE}break;case 2:switch(this.touches.TWO){case Wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Te.TOUCH_DOLLY_PAN;break;case Wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Te.TOUCH_DOLLY_ROTATE;break;default:this.state=Te.NONE}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(Bo)}function A_(i){switch(this._trackPointer(i),this.state){case Te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Te.NONE}}function R_(i){this.enabled!==!1&&i.preventDefault()}function C_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function P_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}let xr=null;function L_(i){window.addEventListener("resize",()=>{const t=window.innerWidth,e=window.innerHeight;zo().setSize(t,e),i.camera.aspect=t/e,i.camera.updateProjectionMatrix(),i.cameraCtrl.update()})}function zo(){return xr||(xr=new qg,xr.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(xr.domElement)),xr}class D_{constructor(t){xe(this,"prevCameraOffset");xe(this,"target");xe(this,"cameraSetup");this.cameraSetup=I_(),this.target=t,this.prevCameraOffset=this.getCameraOffset(),L_(this.cameraSetup)}getCameraOffset(){const e=this.cameraSetup.camera.position.clone(),n=this.target.position;return e.sub(n)}setPrevOffset(){this.prevCameraOffset=this.getCameraOffset()}updateCamera(){let t=this.cameraSetup.camera.position;const e=this.target.position;t.copy(e.clone().add(this.prevCameraOffset)),this.updateCameraCtrl()}updateCameraCtrl(){const t=this.target.position;this.cameraSetup.cameraCtrl.target.copy(t),this.cameraSetup.cameraCtrl.update()}getCamera(){return this.cameraSetup.camera}getCameraSetup(){return this.cameraSetup}executeWithOffsetHandling(t){this.setPrevOffset(),t(),this.updateCamera()}}function I_(){let i=N_();return{camera:i,cameraCtrl:new v_(i,zo().domElement)}}function N_(){const i=new We(75,window.innerWidth/window.innerHeight,.1,1e3);return i.position.set(0,2,5),i}function U_(i,t){i.actors.player.update(t)}class F_{constructor(t,e){xe(this,"room");xe(this,"actors");this.room=t,this.actors=e}getSimState(){return{actors:this.actors,room:this.room}}step(t){U_(this.getSimState(),t)}}var vi=(i=>(i.ArrowUp="ArrowUp",i.ArrowDown="ArrowDown",i.ArrowLeft="ArrowLeft",i.ArrowRight="ArrowRight",i.Space="Space",i))(vi||{});class O_{constructor(t){xe(this,"keys");this.keys={...t}}isPressed(t){return Array.isArray(t)?this.isAnyPressed(t):!!this.keys[t]}isAnyPressed(t){return t.some(e=>!!this.keys[e])}}class k_{constructor(){xe(this,"keys",{});window.addEventListener("keydown",t=>this.onKeyDown(t)),window.addEventListener("keyup",t=>this.onKeyUp(t))}onKeyDown(t){t.key in vi&&(this.keys[t.key]=!0)}onKeyUp(t){t.key in vi&&(this.keys[t.key]=!1)}getKeyboardState(){return new O_(this.keys)}}var Vo=(i=>(i[i.MOVE=0]="MOVE",i))(Vo||{});class B_{constructor(t){xe(this,"action");this.action=t}execute(t){switch(this.action.type){case Vo.MOVE:t.handleMove(this.action.payload);break}}}class z_{constructor(){xe(this,"keyboardListener");this.keyboardListener=new k_}getAction(){const t={forward:!1,backward:!1,left:!1,right:!1},e=this.keyboardListener.getKeyboardState();e.isPressed(vi.ArrowUp)&&(t.forward=!0),e.isPressed(vi.ArrowDown)&&(t.backward=!0),e.isPressed(vi.ArrowLeft)&&(t.left=!0),e.isPressed(vi.ArrowRight)&&(t.right=!0);const n={type:Vo.MOVE,payload:t};return new B_(n)}}class V_{constructor(t){xe(this,"actors");xe(this,"inputListener");this.actors=t,this.inputListener=new z_}handleUserInput(){let t=this.inputListener.getAction();t&&t.execute(this.actors.player)}}class H_{constructor(t,e){xe(this,"scene");xe(this,"camera");this.scene=t,this.camera=e}render(){zo().render(this.scene,this.camera)}}function pc(i){const t=performance.now();return{delta:i?(t-i.timestamp)/1e3:0,timestamp:t}}class G_{constructor(t,e,n){xe(this,"actorController");xe(this,"cameraController");xe(this,"renderController");xe(this,"simulationLoop");xe(this,"frameTime");xe(this,"runSimulationLoop",()=>{const t=pc(this.frameTime);this.cameraController.executeWithOffsetHandling(()=>{this.processNextFrame()}),this.frameTime=t,requestAnimationFrame(this.runSimulationLoop)});this.cameraController=new D_(e.player.object),this.renderController=new H_(n,this.cameraController.getCamera()),this.actorController=new V_(e),this.simulationLoop=new F_(t,e),this.frameTime=pc()}processNextFrame(){this.actorController.handleUserInput(),this.simulationLoop.step(this.frameTime.delta),this.renderController.render()}}const W_=0,gh=0,_h="./assets.zip",X_="digital_twin_lab-4",j_="./packages/digital_twin_lab-4",q_="./packages/digital_twin_lab-4/urdf/robot_arm.urdf";var Rr=(i=>(i[i.OpticalTable=0]="OpticalTable",i))(Rr||{}),vs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Y_(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function xs(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ia={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var mc;function Z_(){return mc||(mc=1,function(i,t){(function(e){i.exports=e()})(function(){return function e(n,r,s){function o(c,d){if(!r[c]){if(!n[c]){var f=typeof xs=="function"&&xs;if(!d&&f)return f(c,!0);if(a)return a(c,!0);var p=new Error("Cannot find module '"+c+"'");throw p.code="MODULE_NOT_FOUND",p}var u=r[c]={exports:{}};n[c][0].call(u.exports,function(_){var g=n[c][1][_];return o(g||_)},u,u.exports,e,n,r,s)}return r[c].exports}for(var a=typeof xs=="function"&&xs,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(e,n,r){var s=e("./utils"),o=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var c,d,f,p,u,_,g,m=[],h=0,x=l.length,E=x,M=s.getTypeOf(l)!=="string";h<l.length;)E=x-h,f=M?(c=l[h++],d=h<x?l[h++]:0,h<x?l[h++]:0):(c=l.charCodeAt(h++),d=h<x?l.charCodeAt(h++):0,h<x?l.charCodeAt(h++):0),p=c>>2,u=(3&c)<<4|d>>4,_=1<E?(15&d)<<2|f>>6:64,g=2<E?63&f:64,m.push(a.charAt(p)+a.charAt(u)+a.charAt(_)+a.charAt(g));return m.join("")},r.decode=function(l){var c,d,f,p,u,_,g=0,m=0,h="data:";if(l.substr(0,h.length)===h)throw new Error("Invalid base64 input, it looks like a data url.");var x,E=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&E--,l.charAt(l.length-2)===a.charAt(64)&&E--,E%1!=0)throw new Error("Invalid base64 input, bad content length.");for(x=o.uint8array?new Uint8Array(0|E):new Array(0|E);g<l.length;)c=a.indexOf(l.charAt(g++))<<2|(p=a.indexOf(l.charAt(g++)))>>4,d=(15&p)<<4|(u=a.indexOf(l.charAt(g++)))>>2,f=(3&u)<<6|(_=a.indexOf(l.charAt(g++))),x[m++]=c,u!==64&&(x[m++]=d),_!==64&&(x[m++]=f);return x}},{"./support":30,"./utils":32}],2:[function(e,n,r){var s=e("./external"),o=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function c(d,f,p,u,_){this.compressedSize=d,this.uncompressedSize=f,this.crc32=p,this.compression=u,this.compressedContent=_}c.prototype={getContentWorker:function(){var d=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),f=this;return d.on("end",function(){if(this.streamInfo.data_length!==f.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),d},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(d,f,p){return d.pipe(new a).pipe(new l("uncompressedSize")).pipe(f.compressWorker(p)).pipe(new l("compressedSize")).withStreamInfo("compression",f)},n.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,n,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,n,r){var s=e("./utils"),o=function(){for(var a,l=[],c=0;c<256;c++){a=c;for(var d=0;d<8;d++)a=1&a?3988292384^a>>>1:a>>>1;l[c]=a}return l}();n.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(c,d,f,p){var u=o,_=p+f;c^=-1;for(var g=p;g<_;g++)c=c>>>8^u[255&(c^d[g])];return-1^c}(0|l,a,a.length,0):function(c,d,f,p){var u=o,_=p+f;c^=-1;for(var g=p;g<_;g++)c=c>>>8^u[255&(c^d.charCodeAt(g))];return-1^c}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(e,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,n,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),n.exports={Promise:s}},{lie:37}],7:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=e("pako"),a=e("./utils"),l=e("./stream/GenericWorker"),c=s?"uint8array":"array";function d(f,p){l.call(this,"FlateWorker/"+f),this._pako=null,this._pakoAction=f,this._pakoOptions=p,this.meta={}}r.magic="\b\0",a.inherits(d,l),d.prototype.processChunk=function(f){this.meta=f.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(c,f.data),!1)},d.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},d.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},d.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var f=this;this._pako.onData=function(p){f.push({data:p,meta:f.meta})}},r.compressWorker=function(f){return new d("Deflate",f)},r.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,n,r){function s(u,_){var g,m="";for(g=0;g<_;g++)m+=String.fromCharCode(255&u),u>>>=8;return m}function o(u,_,g,m,h,x){var E,M,C=u.file,L=u.compression,P=x!==c.utf8encode,N=a.transformTo("string",x(C.name)),S=a.transformTo("string",c.utf8encode(C.name)),w=C.comment,B=a.transformTo("string",x(w)),R=a.transformTo("string",c.utf8encode(w)),z=S.length!==C.name.length,y=R.length!==w.length,H="",W="",q="",J=C.dir,Q=C.date,ft={crc32:0,compressedSize:0,uncompressedSize:0};_&&!g||(ft.crc32=u.crc32,ft.compressedSize=u.compressedSize,ft.uncompressedSize=u.uncompressedSize);var j=0;_&&(j|=8),P||!z&&!y||(j|=2048);var Z=0,_t=0;J&&(Z|=16),h==="UNIX"?(_t=798,Z|=function(Y,lt){var dt=Y;return Y||(dt=lt?16893:33204),(65535&dt)<<16}(C.unixPermissions,J)):(_t=20,Z|=function(Y){return 63&(Y||0)}(C.dosPermissions)),E=Q.getUTCHours(),E<<=6,E|=Q.getUTCMinutes(),E<<=5,E|=Q.getUTCSeconds()/2,M=Q.getUTCFullYear()-1980,M<<=4,M|=Q.getUTCMonth()+1,M<<=5,M|=Q.getUTCDate(),z&&(W=s(1,1)+s(d(N),4)+S,H+="up"+s(W.length,2)+W),y&&(q=s(1,1)+s(d(B),4)+R,H+="uc"+s(q.length,2)+q);var X="";return X+=`
\0`,X+=s(j,2),X+=L.magic,X+=s(E,2),X+=s(M,2),X+=s(ft.crc32,4),X+=s(ft.compressedSize,4),X+=s(ft.uncompressedSize,4),X+=s(N.length,2),X+=s(H.length,2),{fileRecord:f.LOCAL_FILE_HEADER+X+N+H,dirRecord:f.CENTRAL_FILE_HEADER+s(_t,2)+X+s(B.length,2)+"\0\0\0\0"+s(Z,4)+s(m,4)+N+H+B}}var a=e("../utils"),l=e("../stream/GenericWorker"),c=e("../utf8"),d=e("../crc32"),f=e("../signature");function p(u,_,g,m){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=g,this.encodeFileName=m,this.streamFiles=u,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(p,l),p.prototype.push=function(u){var _=u.meta.percent||0,g=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(u):(this.bytesWritten+=u.data.length,l.prototype.push.call(this,{data:u.data,meta:{currentFile:this.currentFile,percent:g?(_+100*(g-m-1))/g:100}}))},p.prototype.openedSource=function(u){this.currentSourceOffset=this.bytesWritten,this.currentFile=u.file.name;var _=this.streamFiles&&!u.file.dir;if(_){var g=o(u,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},p.prototype.closedSource=function(u){this.accumulate=!1;var _=this.streamFiles&&!u.file.dir,g=o(u,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),_)this.push({data:function(m){return f.DATA_DESCRIPTOR+s(m.crc32,4)+s(m.compressedSize,4)+s(m.uncompressedSize,4)}(u),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},p.prototype.flush=function(){for(var u=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var g=this.bytesWritten-u,m=function(h,x,E,M,C){var L=a.transformTo("string",C(M));return f.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(h,2)+s(h,2)+s(x,4)+s(E,4)+s(L.length,2)+L}(this.dirRecords.length,g,u,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},p.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},p.prototype.registerPrevious=function(u){this._sources.push(u);var _=this;return u.on("data",function(g){_.processChunk(g)}),u.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),u.on("error",function(g){_.error(g)}),this},p.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},p.prototype.error=function(u){var _=this._sources;if(!l.prototype.error.call(this,u))return!1;for(var g=0;g<_.length;g++)try{_[g].error(u)}catch{}return!0},p.prototype.lock=function(){l.prototype.lock.call(this);for(var u=this._sources,_=0;_<u.length;_++)u[_].lock()},n.exports=p},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,n,r){var s=e("../compressions"),o=e("./ZipFileWorker");r.generateWorker=function(a,l,c){var d=new o(l.streamFiles,c,l.platform,l.encodeFileName),f=0;try{a.forEach(function(p,u){f++;var _=function(x,E){var M=x||E,C=s[M];if(!C)throw new Error(M+" is not a valid compression method !");return C}(u.options.compression,l.compression),g=u.options.compressionOptions||l.compressionOptions||{},m=u.dir,h=u.date;u._compressWorker(_,g).withStreamInfo("file",{name:p,dir:m,date:h,comment:u.comment||"",unixPermissions:u.unixPermissions,dosPermissions:u.dosPermissions}).pipe(d)}),d.entriesCount=f}catch(p){d.error(p)}return d}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,n,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=e("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,n,r){var s=e("./utils"),o=e("./external"),a=e("./utf8"),l=e("./zipEntries"),c=e("./stream/Crc32Probe"),d=e("./nodejsUtils");function f(p){return new o.Promise(function(u,_){var g=p.decompressed.getContentWorker().pipe(new c);g.on("error",function(m){_(m)}).on("end",function(){g.streamInfo.crc32!==p.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):u()}).resume()})}n.exports=function(p,u){var _=this;return u=s.extend(u||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),d.isNode&&d.isStream(p)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",p,!0,u.optimizedBinaryString,u.base64).then(function(g){var m=new l(u);return m.load(g),m}).then(function(g){var m=[o.Promise.resolve(g)],h=g.files;if(u.checkCRC32)for(var x=0;x<h.length;x++)m.push(f(h[x]));return o.Promise.all(m)}).then(function(g){for(var m=g.shift(),h=m.files,x=0;x<h.length;x++){var E=h[x],M=E.fileNameStr,C=s.resolve(E.fileNameStr);_.file(C,E.decompressed,{binary:!0,optimizedBinaryString:!0,date:E.date,dir:E.dir,comment:E.fileCommentStr.length?E.fileCommentStr:null,unixPermissions:E.unixPermissions,dosPermissions:E.dosPermissions,createFolders:u.createFolders}),E.dir||(_.file(C).unsafeOriginalName=M)}return m.zipComment.length&&(_.comment=m.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,n,r){var s=e("../utils"),o=e("../stream/GenericWorker");function a(l,c){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(a,o),a.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(d){c.push({data:d,meta:{percent:0}})}).on("error",function(d){c.isPaused?this.generatedError=d:c.error(d)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,n,r){var s=e("readable-stream").Readable;function o(a,l,c){s.call(this,l),this._helper=a;var d=this;a.on("data",function(f,p){d.push(f)||d._helper.pause(),c&&c(p)}).on("error",function(f){d.emit("error",f)}).on("end",function(){d.push(null)})}e("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},n.exports=o},{"../utils":32,"readable-stream":16}],14:[function(e,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,n,r){function s(C,L,P){var N,S=a.getTypeOf(L),w=a.extend(P||{},d);w.date=w.date||new Date,w.compression!==null&&(w.compression=w.compression.toUpperCase()),typeof w.unixPermissions=="string"&&(w.unixPermissions=parseInt(w.unixPermissions,8)),w.unixPermissions&&16384&w.unixPermissions&&(w.dir=!0),w.dosPermissions&&16&w.dosPermissions&&(w.dir=!0),w.dir&&(C=h(C)),w.createFolders&&(N=m(C))&&x.call(this,N,!0);var B=S==="string"&&w.binary===!1&&w.base64===!1;P&&P.binary!==void 0||(w.binary=!B),(L instanceof f&&L.uncompressedSize===0||w.dir||!L||L.length===0)&&(w.base64=!1,w.binary=!0,L="",w.compression="STORE",S="string");var R=null;R=L instanceof f||L instanceof l?L:_.isNode&&_.isStream(L)?new g(C,L):a.prepareContent(C,L,w.binary,w.optimizedBinaryString,w.base64);var z=new p(C,R,w);this.files[C]=z}var o=e("./utf8"),a=e("./utils"),l=e("./stream/GenericWorker"),c=e("./stream/StreamHelper"),d=e("./defaults"),f=e("./compressedObject"),p=e("./zipObject"),u=e("./generate"),_=e("./nodejsUtils"),g=e("./nodejs/NodejsStreamInputAdapter"),m=function(C){C.slice(-1)==="/"&&(C=C.substring(0,C.length-1));var L=C.lastIndexOf("/");return 0<L?C.substring(0,L):""},h=function(C){return C.slice(-1)!=="/"&&(C+="/"),C},x=function(C,L){return L=L!==void 0?L:d.createFolders,C=h(C),this.files[C]||s.call(this,C,null,{dir:!0,createFolders:L}),this.files[C]};function E(C){return Object.prototype.toString.call(C)==="[object RegExp]"}var M={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(C){var L,P,N;for(L in this.files)N=this.files[L],(P=L.slice(this.root.length,L.length))&&L.slice(0,this.root.length)===this.root&&C(P,N)},filter:function(C){var L=[];return this.forEach(function(P,N){C(P,N)&&L.push(N)}),L},file:function(C,L,P){if(arguments.length!==1)return C=this.root+C,s.call(this,C,L,P),this;if(E(C)){var N=C;return this.filter(function(w,B){return!B.dir&&N.test(w)})}var S=this.files[this.root+C];return S&&!S.dir?S:null},folder:function(C){if(!C)return this;if(E(C))return this.filter(function(S,w){return w.dir&&C.test(S)});var L=this.root+C,P=x.call(this,L),N=this.clone();return N.root=P.name,N},remove:function(C){C=this.root+C;var L=this.files[C];if(L||(C.slice(-1)!=="/"&&(C+="/"),L=this.files[C]),L&&!L.dir)delete this.files[C];else for(var P=this.filter(function(S,w){return w.name.slice(0,C.length)===C}),N=0;N<P.length;N++)delete this.files[P[N].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(C){var L,P={};try{if((P=a.extend(C||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=P.type.toLowerCase(),P.compression=P.compression.toUpperCase(),P.type==="binarystring"&&(P.type="string"),!P.type)throw new Error("No output type specified.");a.checkSupport(P.type),P.platform!=="darwin"&&P.platform!=="freebsd"&&P.platform!=="linux"&&P.platform!=="sunos"||(P.platform="UNIX"),P.platform==="win32"&&(P.platform="DOS");var N=P.comment||this.comment||"";L=u.generateWorker(this,P,N)}catch(S){(L=new l("error")).error(S)}return new c(L,P.type||"string",P.mimeType)},generateAsync:function(C,L){return this.generateInternalStream(C).accumulate(L)},generateNodeStream:function(C,L){return(C=C||{}).type||(C.type="nodebuffer"),this.generateInternalStream(C).toNodejsStream(L)}};n.exports=M},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,n,r){n.exports=e("stream")},{stream:void 0}],17:[function(e,n,r){var s=e("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),f=a.charCodeAt(3),p=this.length-4;0<=p;--p)if(this.data[p]===l&&this.data[p+1]===c&&this.data[p+2]===d&&this.data[p+3]===f)return p-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),f=a.charCodeAt(3),p=this.readData(4);return l===p[0]&&c===p[1]&&d===p[2]&&f===p[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],18:[function(e,n,r){var s=e("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,c=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=a,c},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},n.exports=o},{"../utils":32}],19:[function(e,n,r){var s=e("./Uint8ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,n,r){var s=e("./DataReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],21:[function(e,n,r){var s=e("./ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(e,n,r){var s=e("../utils"),o=e("../support"),a=e("./ArrayReader"),l=e("./StringReader"),c=e("./NodeBufferReader"),d=e("./Uint8ArrayReader");n.exports=function(f){var p=s.getTypeOf(f);return s.checkSupport(p),p!=="string"||o.uint8array?p==="nodebuffer"?new c(f):o.uint8array?new d(s.transformTo("uint8array",f)):new a(s.transformTo("array",f)):new l(f)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,n,r){var s=e("./GenericWorker"),o=e("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},n.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,n,r){var s=e("./GenericWorker"),o=e("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},n.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,n,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}o.prototype.processChunk.call(this,l)},n.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,n,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(d){c.dataIsReady=!0,c.data=d,c.max=d&&d.length||0,c.type=s.getTypeOf(d),c.isPaused||c._tickAndRepeat()},function(d){c.error(d)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,n,r){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},n.exports=s},{}],29:[function(e,n,r){var s=e("../utils"),o=e("./ConvertWorker"),a=e("./GenericWorker"),l=e("../base64"),c=e("../support"),d=e("../external"),f=null;if(c.nodestream)try{f=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function p(_,g){return new d.Promise(function(m,h){var x=[],E=_._internalType,M=_._outputType,C=_._mimeType;_.on("data",function(L,P){x.push(L),g&&g(P)}).on("error",function(L){x=[],h(L)}).on("end",function(){try{var L=function(P,N,S){switch(P){case"blob":return s.newBlob(s.transformTo("arraybuffer",N),S);case"base64":return l.encode(N);default:return s.transformTo(P,N)}}(M,function(P,N){var S,w=0,B=null,R=0;for(S=0;S<N.length;S++)R+=N[S].length;switch(P){case"string":return N.join("");case"array":return Array.prototype.concat.apply([],N);case"uint8array":for(B=new Uint8Array(R),S=0;S<N.length;S++)B.set(N[S],w),w+=N[S].length;return B;case"nodebuffer":return Buffer.concat(N);default:throw new Error("concat : unsupported type '"+P+"'")}}(E,x),C);m(L)}catch(P){h(P)}x=[]}).resume()})}function u(_,g,m){var h=g;switch(g){case"blob":case"arraybuffer":h="uint8array";break;case"base64":h="string"}try{this._internalType=h,this._outputType=g,this._mimeType=m,s.checkSupport(h),this._worker=_.pipe(new o(h)),_.lock()}catch(x){this._worker=new a("error"),this._worker.error(x)}}u.prototype={accumulate:function(_){return p(this,_)},on:function(_,g){var m=this;return _==="data"?this._worker.on(_,function(h){g.call(m,h.data,h.meta)}):this._worker.on(_,function(){s.delay(g,arguments,m)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new f(this,{objectMode:this._outputType!=="nodebuffer"},_)}},n.exports=u},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),r.blob=o.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,n,r){for(var s=e("./utils"),o=e("./support"),a=e("./nodejsUtils"),l=e("./stream/GenericWorker"),c=new Array(256),d=0;d<256;d++)c[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;c[254]=c[254]=1;function f(){l.call(this,"utf-8 decode"),this.leftOver=null}function p(){l.call(this,"utf-8 encode")}r.utf8encode=function(u){return o.nodebuffer?a.newBufferFrom(u,"utf-8"):function(_){var g,m,h,x,E,M=_.length,C=0;for(x=0;x<M;x++)(64512&(m=_.charCodeAt(x)))==55296&&x+1<M&&(64512&(h=_.charCodeAt(x+1)))==56320&&(m=65536+(m-55296<<10)+(h-56320),x++),C+=m<128?1:m<2048?2:m<65536?3:4;for(g=o.uint8array?new Uint8Array(C):new Array(C),x=E=0;E<C;x++)(64512&(m=_.charCodeAt(x)))==55296&&x+1<M&&(64512&(h=_.charCodeAt(x+1)))==56320&&(m=65536+(m-55296<<10)+(h-56320),x++),m<128?g[E++]=m:(m<2048?g[E++]=192|m>>>6:(m<65536?g[E++]=224|m>>>12:(g[E++]=240|m>>>18,g[E++]=128|m>>>12&63),g[E++]=128|m>>>6&63),g[E++]=128|63&m);return g}(u)},r.utf8decode=function(u){return o.nodebuffer?s.transformTo("nodebuffer",u).toString("utf-8"):function(_){var g,m,h,x,E=_.length,M=new Array(2*E);for(g=m=0;g<E;)if((h=_[g++])<128)M[m++]=h;else if(4<(x=c[h]))M[m++]=65533,g+=x-1;else{for(h&=x===2?31:x===3?15:7;1<x&&g<E;)h=h<<6|63&_[g++],x--;1<x?M[m++]=65533:h<65536?M[m++]=h:(h-=65536,M[m++]=55296|h>>10&1023,M[m++]=56320|1023&h)}return M.length!==m&&(M.subarray?M=M.subarray(0,m):M.length=m),s.applyFromCharCode(M)}(u=s.transformTo(o.uint8array?"uint8array":"array",u))},s.inherits(f,l),f.prototype.processChunk=function(u){var _=s.transformTo(o.uint8array?"uint8array":"array",u.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var g=_;(_=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),_.set(g,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var m=function(x,E){var M;for((E=E||x.length)>x.length&&(E=x.length),M=E-1;0<=M&&(192&x[M])==128;)M--;return M<0||M===0?E:M+c[x[M]]>E?M:E}(_),h=_;m!==_.length&&(o.uint8array?(h=_.subarray(0,m),this.leftOver=_.subarray(m,_.length)):(h=_.slice(0,m),this.leftOver=_.slice(m,_.length))),this.push({data:r.utf8decode(h),meta:u.meta})},f.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=f,s.inherits(p,l),p.prototype.processChunk=function(u){this.push({data:r.utf8encode(u.data),meta:u.meta})},r.Utf8EncodeWorker=p},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,n,r){var s=e("./support"),o=e("./base64"),a=e("./nodejsUtils"),l=e("./external");function c(g){return g}function d(g,m){for(var h=0;h<g.length;++h)m[h]=255&g.charCodeAt(h);return m}e("setimmediate"),r.newBlob=function(g,m){r.checkSupport("blob");try{return new Blob([g],{type:m})}catch{try{var h=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return h.append(g),h.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var f={stringifyByChunk:function(g,m,h){var x=[],E=0,M=g.length;if(M<=h)return String.fromCharCode.apply(null,g);for(;E<M;)m==="array"||m==="nodebuffer"?x.push(String.fromCharCode.apply(null,g.slice(E,Math.min(E+h,M)))):x.push(String.fromCharCode.apply(null,g.subarray(E,Math.min(E+h,M)))),E+=h;return x.join("")},stringifyByChar:function(g){for(var m="",h=0;h<g.length;h++)m+=String.fromCharCode(g[h]);return m},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function p(g){var m=65536,h=r.getTypeOf(g),x=!0;if(h==="uint8array"?x=f.applyCanBeUsed.uint8array:h==="nodebuffer"&&(x=f.applyCanBeUsed.nodebuffer),x)for(;1<m;)try{return f.stringifyByChunk(g,h,m)}catch{m=Math.floor(m/2)}return f.stringifyByChar(g)}function u(g,m){for(var h=0;h<g.length;h++)m[h]=g[h];return m}r.applyFromCharCode=p;var _={};_.string={string:c,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return _.string.uint8array(g).buffer},uint8array:function(g){return d(g,new Uint8Array(g.length))},nodebuffer:function(g){return d(g,a.allocBuffer(g.length))}},_.array={string:p,array:c,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(g)}},_.arraybuffer={string:function(g){return p(new Uint8Array(g))},array:function(g){return u(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:c,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(new Uint8Array(g))}},_.uint8array={string:p,array:function(g){return u(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:c,nodebuffer:function(g){return a.newBufferFrom(g)}},_.nodebuffer={string:p,array:function(g){return u(g,new Array(g.length))},arraybuffer:function(g){return _.nodebuffer.uint8array(g).buffer},uint8array:function(g){return u(g,new Uint8Array(g.length))},nodebuffer:c},r.transformTo=function(g,m){if(m=m||"",!g)return m;r.checkSupport(g);var h=r.getTypeOf(m);return _[h][g](m)},r.resolve=function(g){for(var m=g.split("/"),h=[],x=0;x<m.length;x++){var E=m[x];E==="."||E===""&&x!==0&&x!==m.length-1||(E===".."?h.pop():h.push(E))}return h.join("/")},r.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(g)?"nodebuffer":s.uint8array&&g instanceof Uint8Array?"uint8array":s.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(g){if(!s[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(g){var m,h,x="";for(h=0;h<(g||"").length;h++)x+="\\x"+((m=g.charCodeAt(h))<16?"0":"")+m.toString(16).toUpperCase();return x},r.delay=function(g,m,h){setImmediate(function(){g.apply(h||null,m||[])})},r.inherits=function(g,m){function h(){}h.prototype=m.prototype,g.prototype=new h},r.extend=function(){var g,m,h={};for(g=0;g<arguments.length;g++)for(m in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],m)&&h[m]===void 0&&(h[m]=arguments[g][m]);return h},r.prepareContent=function(g,m,h,x,E){return l.Promise.resolve(m).then(function(M){return s.blob&&(M instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(M))!==-1)&&typeof FileReader<"u"?new l.Promise(function(C,L){var P=new FileReader;P.onload=function(N){C(N.target.result)},P.onerror=function(N){L(N.target.error)},P.readAsArrayBuffer(M)}):M}).then(function(M){var C=r.getTypeOf(M);return C?(C==="arraybuffer"?M=r.transformTo("uint8array",M):C==="string"&&(E?M=o.decode(M):h&&x!==!0&&(M=function(L){return d(L,s.uint8array?new Uint8Array(L.length):new Array(L.length))}(M))),M):l.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,n,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./signature"),l=e("./zipEntry"),c=e("./support");function d(f){this.files=[],this.loadOptions=f}d.prototype={checkSignature:function(f){if(!this.reader.readAndCheckSignature(f)){this.reader.index-=4;var p=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(p)+", expected "+o.pretty(f)+")")}},isSignature:function(f,p){var u=this.reader.index;this.reader.setIndex(f);var _=this.reader.readString(4)===p;return this.reader.setIndex(u),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var f=this.reader.readData(this.zipCommentLength),p=c.uint8array?"uint8array":"array",u=o.transformTo(p,f);this.zipComment=this.loadOptions.decodeFileName(u)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var f,p,u,_=this.zip64EndOfCentralSize-44;0<_;)f=this.reader.readInt(2),p=this.reader.readInt(4),u=this.reader.readData(p),this.zip64ExtensibleData[f]={id:f,length:p,value:u}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var f,p;for(f=0;f<this.files.length;f++)p=this.files[f],this.reader.setIndex(p.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),p.readLocalPart(this.reader),p.handleUTF8(),p.processAttributes()},readCentralDir:function(){var f;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(f=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(f);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var f=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(f<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(f);var p=f;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(f=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(f),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var u=this.centralDirOffset+this.centralDirSize;this.zip64&&(u+=20,u+=12+this.zip64EndOfCentralSize);var _=p-u;if(0<_)this.isSignature(p,a.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(f){this.reader=s(f)},load:function(f){this.prepareReader(f),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=d},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,n,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./compressedObject"),l=e("./crc32"),c=e("./utf8"),d=e("./compressions"),f=e("./support");function p(u,_){this.options=u,this.loadOptions=_}p.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(u){var _,g;if(u.skip(22),this.fileNameLength=u.readInt(2),g=u.readInt(2),this.fileName=u.readData(this.fileNameLength),u.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=function(m){for(var h in d)if(Object.prototype.hasOwnProperty.call(d,h)&&d[h].magic===m)return d[h];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,_,u.readData(this.compressedSize))},readCentralPart:function(u){this.versionMadeBy=u.readInt(2),u.skip(2),this.bitFlag=u.readInt(2),this.compressionMethod=u.readString(2),this.date=u.readDate(),this.crc32=u.readInt(4),this.compressedSize=u.readInt(4),this.uncompressedSize=u.readInt(4);var _=u.readInt(2);if(this.extraFieldsLength=u.readInt(2),this.fileCommentLength=u.readInt(2),this.diskNumberStart=u.readInt(2),this.internalFileAttributes=u.readInt(2),this.externalFileAttributes=u.readInt(4),this.localHeaderOffset=u.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");u.skip(_),this.readExtraFields(u),this.parseZIP64ExtraField(u),this.fileComment=u.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var u=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),u==0&&(this.dosPermissions=63&this.externalFileAttributes),u==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var u=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=u.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=u.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=u.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=u.readInt(4))}},readExtraFields:function(u){var _,g,m,h=u.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});u.index+4<h;)_=u.readInt(2),g=u.readInt(2),m=u.readData(g),this.extraFields[_]={id:_,length:g,value:m};u.setIndex(h)},handleUTF8:function(){var u=f.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var g=o.transformTo(u,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var h=o.transformTo(u,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(h)}}},findExtraFieldUnicodePath:function(){var u=this.extraFields[28789];if(u){var _=s(u.value);return _.readInt(1)!==1||l(this.fileName)!==_.readInt(4)?null:c.utf8decode(_.readData(u.length-5))}return null},findExtraFieldUnicodeComment:function(){var u=this.extraFields[25461];if(u){var _=s(u.value);return _.readInt(1)!==1||l(this.fileComment)!==_.readInt(4)?null:c.utf8decode(_.readData(u.length-5))}return null}},n.exports=p},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,n,r){function s(_,g,m){this.name=_,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=g,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var o=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),l=e("./utf8"),c=e("./compressedObject"),d=e("./stream/GenericWorker");s.prototype={internalStream:function(_){var g=null,m="string";try{if(!_)throw new Error("No output type specified.");var h=(m=_.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),g=this._decompressWorker();var x=!this._dataBinary;x&&!h&&(g=g.pipe(new l.Utf8EncodeWorker)),!x&&h&&(g=g.pipe(new l.Utf8DecodeWorker))}catch(E){(g=new d("error")).error(E)}return new o(g,m,"")},async:function(_,g){return this.internalStream(_).accumulate(g)},nodeStream:function(_,g){return this.internalStream(_||"nodebuffer").toNodejsStream(g)},_compressWorker:function(_,g){if(this._data instanceof c&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(m,_,g)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof d?this._data:new a(this._data)}};for(var f=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],p=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},u=0;u<f.length;u++)s.prototype[f[u]]=p;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,n,r){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,d=new l(_),f=s.document.createTextNode("");d.observe(f,{characterData:!0}),o=function(){f.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var g=s.document.createElement("script");g.onreadystatechange=function(){_(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},s.document.documentElement.appendChild(g)}:function(){setTimeout(_,0)};else{var p=new s.MessageChannel;p.port1.onmessage=_,o=function(){p.port2.postMessage(0)}}var u=[];function _(){var g,m;a=!0;for(var h=u.length;h;){for(m=u,u=[],g=-1;++g<h;)m[g]();h=u.length}a=!1}n.exports=function(g){u.push(g)!==1||a||o()}}).call(this,typeof vs<"u"?vs:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,n,r){var s=e("immediate");function o(){}var a={},l=["REJECTED"],c=["FULFILLED"],d=["PENDING"];function f(h){if(typeof h!="function")throw new TypeError("resolver must be a function");this.state=d,this.queue=[],this.outcome=void 0,h!==o&&g(this,h)}function p(h,x,E){this.promise=h,typeof x=="function"&&(this.onFulfilled=x,this.callFulfilled=this.otherCallFulfilled),typeof E=="function"&&(this.onRejected=E,this.callRejected=this.otherCallRejected)}function u(h,x,E){s(function(){var M;try{M=x(E)}catch(C){return a.reject(h,C)}M===h?a.reject(h,new TypeError("Cannot resolve promise with itself")):a.resolve(h,M)})}function _(h){var x=h&&h.then;if(h&&(typeof h=="object"||typeof h=="function")&&typeof x=="function")return function(){x.apply(h,arguments)}}function g(h,x){var E=!1;function M(P){E||(E=!0,a.reject(h,P))}function C(P){E||(E=!0,a.resolve(h,P))}var L=m(function(){x(C,M)});L.status==="error"&&M(L.value)}function m(h,x){var E={};try{E.value=h(x),E.status="success"}catch(M){E.status="error",E.value=M}return E}(n.exports=f).prototype.finally=function(h){if(typeof h!="function")return this;var x=this.constructor;return this.then(function(E){return x.resolve(h()).then(function(){return E})},function(E){return x.resolve(h()).then(function(){throw E})})},f.prototype.catch=function(h){return this.then(null,h)},f.prototype.then=function(h,x){if(typeof h!="function"&&this.state===c||typeof x!="function"&&this.state===l)return this;var E=new this.constructor(o);return this.state!==d?u(E,this.state===c?h:x,this.outcome):this.queue.push(new p(E,h,x)),E},p.prototype.callFulfilled=function(h){a.resolve(this.promise,h)},p.prototype.otherCallFulfilled=function(h){u(this.promise,this.onFulfilled,h)},p.prototype.callRejected=function(h){a.reject(this.promise,h)},p.prototype.otherCallRejected=function(h){u(this.promise,this.onRejected,h)},a.resolve=function(h,x){var E=m(_,x);if(E.status==="error")return a.reject(h,E.value);var M=E.value;if(M)g(h,M);else{h.state=c,h.outcome=x;for(var C=-1,L=h.queue.length;++C<L;)h.queue[C].callFulfilled(x)}return h},a.reject=function(h,x){h.state=l,h.outcome=x;for(var E=-1,M=h.queue.length;++E<M;)h.queue[E].callRejected(x);return h},f.resolve=function(h){return h instanceof this?h:a.resolve(new this(o),h)},f.reject=function(h){var x=new this(o);return a.reject(x,h)},f.all=function(h){var x=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var E=h.length,M=!1;if(!E)return this.resolve([]);for(var C=new Array(E),L=0,P=-1,N=new this(o);++P<E;)S(h[P],P);return N;function S(w,B){x.resolve(w).then(function(R){C[B]=R,++L!==E||M||(M=!0,a.resolve(N,C))},function(R){M||(M=!0,a.reject(N,R))})}},f.race=function(h){var x=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var E=h.length,M=!1;if(!E)return this.resolve([]);for(var C=-1,L=new this(o);++C<E;)P=h[C],x.resolve(P).then(function(N){M||(M=!0,a.resolve(L,N))},function(N){M||(M=!0,a.reject(L,N))});var P;return L}},{immediate:36}],38:[function(e,n,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,n,r){var s=e("./zlib/deflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/messages"),c=e("./zlib/zstream"),d=Object.prototype.toString,f=0,p=-1,u=0,_=8;function g(h){if(!(this instanceof g))return new g(h);this.options=o.assign({level:p,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:u,to:""},h||{});var x=this.options;x.raw&&0<x.windowBits?x.windowBits=-x.windowBits:x.gzip&&0<x.windowBits&&x.windowBits<16&&(x.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var E=s.deflateInit2(this.strm,x.level,x.method,x.windowBits,x.memLevel,x.strategy);if(E!==f)throw new Error(l[E]);if(x.header&&s.deflateSetHeader(this.strm,x.header),x.dictionary){var M;if(M=typeof x.dictionary=="string"?a.string2buf(x.dictionary):d.call(x.dictionary)==="[object ArrayBuffer]"?new Uint8Array(x.dictionary):x.dictionary,(E=s.deflateSetDictionary(this.strm,M))!==f)throw new Error(l[E]);this._dict_set=!0}}function m(h,x){var E=new g(x);if(E.push(h,!0),E.err)throw E.msg||l[E.err];return E.result}g.prototype.push=function(h,x){var E,M,C=this.strm,L=this.options.chunkSize;if(this.ended)return!1;M=x===~~x?x:x===!0?4:0,typeof h=="string"?C.input=a.string2buf(h):d.call(h)==="[object ArrayBuffer]"?C.input=new Uint8Array(h):C.input=h,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new o.Buf8(L),C.next_out=0,C.avail_out=L),(E=s.deflate(C,M))!==1&&E!==f)return this.onEnd(E),!(this.ended=!0);C.avail_out!==0&&(C.avail_in!==0||M!==4&&M!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(C.output,C.next_out))):this.onData(o.shrinkBuf(C.output,C.next_out)))}while((0<C.avail_in||C.avail_out===0)&&E!==1);return M===4?(E=s.deflateEnd(this.strm),this.onEnd(E),this.ended=!0,E===f):M!==2||(this.onEnd(f),!(C.avail_out=0))},g.prototype.onData=function(h){this.chunks.push(h)},g.prototype.onEnd=function(h){h===f&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},r.Deflate=g,r.deflate=m,r.deflateRaw=function(h,x){return(x=x||{}).raw=!0,m(h,x)},r.gzip=function(h,x){return(x=x||{}).gzip=!0,m(h,x)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,n,r){var s=e("./zlib/inflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/constants"),c=e("./zlib/messages"),d=e("./zlib/zstream"),f=e("./zlib/gzheader"),p=Object.prototype.toString;function u(g){if(!(this instanceof u))return new u(g);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},g||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||g&&g.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&!(15&m.windowBits)&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var h=s.inflateInit2(this.strm,m.windowBits);if(h!==l.Z_OK)throw new Error(c[h]);this.header=new f,s.inflateGetHeader(this.strm,this.header)}function _(g,m){var h=new u(m);if(h.push(g,!0),h.err)throw h.msg||c[h.err];return h.result}u.prototype.push=function(g,m){var h,x,E,M,C,L,P=this.strm,N=this.options.chunkSize,S=this.options.dictionary,w=!1;if(this.ended)return!1;x=m===~~m?m:m===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof g=="string"?P.input=a.binstring2buf(g):p.call(g)==="[object ArrayBuffer]"?P.input=new Uint8Array(g):P.input=g,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new o.Buf8(N),P.next_out=0,P.avail_out=N),(h=s.inflate(P,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&S&&(L=typeof S=="string"?a.string2buf(S):p.call(S)==="[object ArrayBuffer]"?new Uint8Array(S):S,h=s.inflateSetDictionary(this.strm,L)),h===l.Z_BUF_ERROR&&w===!0&&(h=l.Z_OK,w=!1),h!==l.Z_STREAM_END&&h!==l.Z_OK)return this.onEnd(h),!(this.ended=!0);P.next_out&&(P.avail_out!==0&&h!==l.Z_STREAM_END&&(P.avail_in!==0||x!==l.Z_FINISH&&x!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(E=a.utf8border(P.output,P.next_out),M=P.next_out-E,C=a.buf2string(P.output,E),P.next_out=M,P.avail_out=N-M,M&&o.arraySet(P.output,P.output,E,M,0),this.onData(C)):this.onData(o.shrinkBuf(P.output,P.next_out)))),P.avail_in===0&&P.avail_out===0&&(w=!0)}while((0<P.avail_in||P.avail_out===0)&&h!==l.Z_STREAM_END);return h===l.Z_STREAM_END&&(x=l.Z_FINISH),x===l.Z_FINISH?(h=s.inflateEnd(this.strm),this.onEnd(h),this.ended=!0,h===l.Z_OK):x!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(P.avail_out=0))},u.prototype.onData=function(g){this.chunks.push(g)},u.prototype.onEnd=function(g){g===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},r.Inflate=u,r.inflate=_,r.inflateRaw=function(g,m){return(m=m||{}).raw=!0,_(g,m)},r.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var d=c.shift();if(d){if(typeof d!="object")throw new TypeError(d+"must be non-object");for(var f in d)d.hasOwnProperty(f)&&(l[f]=d[f])}}return l},r.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var o={arraySet:function(l,c,d,f,p){if(c.subarray&&l.subarray)l.set(c.subarray(d,d+f),p);else for(var u=0;u<f;u++)l[p+u]=c[d+u]},flattenChunks:function(l){var c,d,f,p,u,_;for(c=f=0,d=l.length;c<d;c++)f+=l[c].length;for(_=new Uint8Array(f),c=p=0,d=l.length;c<d;c++)u=l[c],_.set(u,p),p+=u.length;return _}},a={arraySet:function(l,c,d,f,p){for(var u=0;u<f;u++)l[p+u]=c[d+u]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,o)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(s)},{}],42:[function(e,n,r){var s=e("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function d(f,p){if(p<65537&&(f.subarray&&a||!f.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(f,p));for(var u="",_=0;_<p;_++)u+=String.fromCharCode(f[_]);return u}l[254]=l[254]=1,r.string2buf=function(f){var p,u,_,g,m,h=f.length,x=0;for(g=0;g<h;g++)(64512&(u=f.charCodeAt(g)))==55296&&g+1<h&&(64512&(_=f.charCodeAt(g+1)))==56320&&(u=65536+(u-55296<<10)+(_-56320),g++),x+=u<128?1:u<2048?2:u<65536?3:4;for(p=new s.Buf8(x),g=m=0;m<x;g++)(64512&(u=f.charCodeAt(g)))==55296&&g+1<h&&(64512&(_=f.charCodeAt(g+1)))==56320&&(u=65536+(u-55296<<10)+(_-56320),g++),u<128?p[m++]=u:(u<2048?p[m++]=192|u>>>6:(u<65536?p[m++]=224|u>>>12:(p[m++]=240|u>>>18,p[m++]=128|u>>>12&63),p[m++]=128|u>>>6&63),p[m++]=128|63&u);return p},r.buf2binstring=function(f){return d(f,f.length)},r.binstring2buf=function(f){for(var p=new s.Buf8(f.length),u=0,_=p.length;u<_;u++)p[u]=f.charCodeAt(u);return p},r.buf2string=function(f,p){var u,_,g,m,h=p||f.length,x=new Array(2*h);for(u=_=0;u<h;)if((g=f[u++])<128)x[_++]=g;else if(4<(m=l[g]))x[_++]=65533,u+=m-1;else{for(g&=m===2?31:m===3?15:7;1<m&&u<h;)g=g<<6|63&f[u++],m--;1<m?x[_++]=65533:g<65536?x[_++]=g:(g-=65536,x[_++]=55296|g>>10&1023,x[_++]=56320|1023&g)}return d(x,_)},r.utf8border=function(f,p){var u;for((p=p||f.length)>f.length&&(p=f.length),u=p-1;0<=u&&(192&f[u])==128;)u--;return u<0||u===0?p:u+l[f[u]]>p?u:p}},{"./common":41}],43:[function(e,n,r){n.exports=function(s,o,a,l){for(var c=65535&s|0,d=s>>>16&65535|0,f=0;a!==0;){for(a-=f=2e3<a?2e3:a;d=d+(c=c+o[l++]|0)|0,--f;);c%=65521,d%=65521}return c|d<<16|0}},{}],44:[function(e,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,n,r){var s=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var c=0;c<8;c++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();n.exports=function(o,a,l,c){var d=s,f=c+l;o^=-1;for(var p=c;p<f;p++)o=o>>>8^d[255&(o^a[p])];return-1^o}},{}],46:[function(e,n,r){var s,o=e("../utils/common"),a=e("./trees"),l=e("./adler32"),c=e("./crc32"),d=e("./messages"),f=0,p=4,u=0,_=-2,g=-1,m=4,h=2,x=8,E=9,M=286,C=30,L=19,P=2*M+1,N=15,S=3,w=258,B=w+S+1,R=42,z=113,y=1,H=2,W=3,q=4;function J(v,mt){return v.msg=d[mt],mt}function Q(v){return(v<<1)-(4<v?9:0)}function ft(v){for(var mt=v.length;0<=--mt;)v[mt]=0}function j(v){var mt=v.state,st=mt.pending;st>v.avail_out&&(st=v.avail_out),st!==0&&(o.arraySet(v.output,mt.pending_buf,mt.pending_out,st,v.next_out),v.next_out+=st,mt.pending_out+=st,v.total_out+=st,v.avail_out-=st,mt.pending-=st,mt.pending===0&&(mt.pending_out=0))}function Z(v,mt){a._tr_flush_block(v,0<=v.block_start?v.block_start:-1,v.strstart-v.block_start,mt),v.block_start=v.strstart,j(v.strm)}function _t(v,mt){v.pending_buf[v.pending++]=mt}function X(v,mt){v.pending_buf[v.pending++]=mt>>>8&255,v.pending_buf[v.pending++]=255&mt}function Y(v,mt){var st,V,O=v.max_chain_length,$=v.strstart,ot=v.prev_length,D=v.nice_match,b=v.strstart>v.w_size-B?v.strstart-(v.w_size-B):0,G=v.window,rt=v.w_mask,nt=v.prev,at=v.strstart+w,wt=G[$+ot-1],yt=G[$+ot];v.prev_length>=v.good_match&&(O>>=2),D>v.lookahead&&(D=v.lookahead);do if(G[(st=mt)+ot]===yt&&G[st+ot-1]===wt&&G[st]===G[$]&&G[++st]===G[$+1]){$+=2,st++;do;while(G[++$]===G[++st]&&G[++$]===G[++st]&&G[++$]===G[++st]&&G[++$]===G[++st]&&G[++$]===G[++st]&&G[++$]===G[++st]&&G[++$]===G[++st]&&G[++$]===G[++st]&&$<at);if(V=w-(at-$),$=at-w,ot<V){if(v.match_start=mt,D<=(ot=V))break;wt=G[$+ot-1],yt=G[$+ot]}}while((mt=nt[mt&rt])>b&&--O!=0);return ot<=v.lookahead?ot:v.lookahead}function lt(v){var mt,st,V,O,$,ot,D,b,G,rt,nt=v.w_size;do{if(O=v.window_size-v.lookahead-v.strstart,v.strstart>=nt+(nt-B)){for(o.arraySet(v.window,v.window,nt,nt,0),v.match_start-=nt,v.strstart-=nt,v.block_start-=nt,mt=st=v.hash_size;V=v.head[--mt],v.head[mt]=nt<=V?V-nt:0,--st;);for(mt=st=nt;V=v.prev[--mt],v.prev[mt]=nt<=V?V-nt:0,--st;);O+=nt}if(v.strm.avail_in===0)break;if(ot=v.strm,D=v.window,b=v.strstart+v.lookahead,G=O,rt=void 0,rt=ot.avail_in,G<rt&&(rt=G),st=rt===0?0:(ot.avail_in-=rt,o.arraySet(D,ot.input,ot.next_in,rt,b),ot.state.wrap===1?ot.adler=l(ot.adler,D,rt,b):ot.state.wrap===2&&(ot.adler=c(ot.adler,D,rt,b)),ot.next_in+=rt,ot.total_in+=rt,rt),v.lookahead+=st,v.lookahead+v.insert>=S)for($=v.strstart-v.insert,v.ins_h=v.window[$],v.ins_h=(v.ins_h<<v.hash_shift^v.window[$+1])&v.hash_mask;v.insert&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[$+S-1])&v.hash_mask,v.prev[$&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=$,$++,v.insert--,!(v.lookahead+v.insert<S)););}while(v.lookahead<B&&v.strm.avail_in!==0)}function dt(v,mt){for(var st,V;;){if(v.lookahead<B){if(lt(v),v.lookahead<B&&mt===f)return y;if(v.lookahead===0)break}if(st=0,v.lookahead>=S&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+S-1])&v.hash_mask,st=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),st!==0&&v.strstart-st<=v.w_size-B&&(v.match_length=Y(v,st)),v.match_length>=S)if(V=a._tr_tally(v,v.strstart-v.match_start,v.match_length-S),v.lookahead-=v.match_length,v.match_length<=v.max_lazy_match&&v.lookahead>=S){for(v.match_length--;v.strstart++,v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+S-1])&v.hash_mask,st=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart,--v.match_length!=0;);v.strstart++}else v.strstart+=v.match_length,v.match_length=0,v.ins_h=v.window[v.strstart],v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+1])&v.hash_mask;else V=a._tr_tally(v,0,v.window[v.strstart]),v.lookahead--,v.strstart++;if(V&&(Z(v,!1),v.strm.avail_out===0))return y}return v.insert=v.strstart<S-1?v.strstart:S-1,mt===p?(Z(v,!0),v.strm.avail_out===0?W:q):v.last_lit&&(Z(v,!1),v.strm.avail_out===0)?y:H}function xt(v,mt){for(var st,V,O;;){if(v.lookahead<B){if(lt(v),v.lookahead<B&&mt===f)return y;if(v.lookahead===0)break}if(st=0,v.lookahead>=S&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+S-1])&v.hash_mask,st=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),v.prev_length=v.match_length,v.prev_match=v.match_start,v.match_length=S-1,st!==0&&v.prev_length<v.max_lazy_match&&v.strstart-st<=v.w_size-B&&(v.match_length=Y(v,st),v.match_length<=5&&(v.strategy===1||v.match_length===S&&4096<v.strstart-v.match_start)&&(v.match_length=S-1)),v.prev_length>=S&&v.match_length<=v.prev_length){for(O=v.strstart+v.lookahead-S,V=a._tr_tally(v,v.strstart-1-v.prev_match,v.prev_length-S),v.lookahead-=v.prev_length-1,v.prev_length-=2;++v.strstart<=O&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+S-1])&v.hash_mask,st=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),--v.prev_length!=0;);if(v.match_available=0,v.match_length=S-1,v.strstart++,V&&(Z(v,!1),v.strm.avail_out===0))return y}else if(v.match_available){if((V=a._tr_tally(v,0,v.window[v.strstart-1]))&&Z(v,!1),v.strstart++,v.lookahead--,v.strm.avail_out===0)return y}else v.match_available=1,v.strstart++,v.lookahead--}return v.match_available&&(V=a._tr_tally(v,0,v.window[v.strstart-1]),v.match_available=0),v.insert=v.strstart<S-1?v.strstart:S-1,mt===p?(Z(v,!0),v.strm.avail_out===0?W:q):v.last_lit&&(Z(v,!1),v.strm.avail_out===0)?y:H}function Et(v,mt,st,V,O){this.good_length=v,this.max_lazy=mt,this.nice_length=st,this.max_chain=V,this.func=O}function kt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=x,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*P),this.dyn_dtree=new o.Buf16(2*(2*C+1)),this.bl_tree=new o.Buf16(2*(2*L+1)),ft(this.dyn_ltree),ft(this.dyn_dtree),ft(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(N+1),this.heap=new o.Buf16(2*M+1),ft(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*M+1),ft(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Kt(v){var mt;return v&&v.state?(v.total_in=v.total_out=0,v.data_type=h,(mt=v.state).pending=0,mt.pending_out=0,mt.wrap<0&&(mt.wrap=-mt.wrap),mt.status=mt.wrap?R:z,v.adler=mt.wrap===2?0:1,mt.last_flush=f,a._tr_init(mt),u):J(v,_)}function Jt(v){var mt=Kt(v);return mt===u&&function(st){st.window_size=2*st.w_size,ft(st.head),st.max_lazy_match=s[st.level].max_lazy,st.good_match=s[st.level].good_length,st.nice_match=s[st.level].nice_length,st.max_chain_length=s[st.level].max_chain,st.strstart=0,st.block_start=0,st.lookahead=0,st.insert=0,st.match_length=st.prev_length=S-1,st.match_available=0,st.ins_h=0}(v.state),mt}function de(v,mt,st,V,O,$){if(!v)return _;var ot=1;if(mt===g&&(mt=6),V<0?(ot=0,V=-V):15<V&&(ot=2,V-=16),O<1||E<O||st!==x||V<8||15<V||mt<0||9<mt||$<0||m<$)return J(v,_);V===8&&(V=9);var D=new kt;return(v.state=D).strm=v,D.wrap=ot,D.gzhead=null,D.w_bits=V,D.w_size=1<<D.w_bits,D.w_mask=D.w_size-1,D.hash_bits=O+7,D.hash_size=1<<D.hash_bits,D.hash_mask=D.hash_size-1,D.hash_shift=~~((D.hash_bits+S-1)/S),D.window=new o.Buf8(2*D.w_size),D.head=new o.Buf16(D.hash_size),D.prev=new o.Buf16(D.w_size),D.lit_bufsize=1<<O+6,D.pending_buf_size=4*D.lit_bufsize,D.pending_buf=new o.Buf8(D.pending_buf_size),D.d_buf=1*D.lit_bufsize,D.l_buf=3*D.lit_bufsize,D.level=mt,D.strategy=$,D.method=st,Jt(v)}s=[new Et(0,0,0,0,function(v,mt){var st=65535;for(st>v.pending_buf_size-5&&(st=v.pending_buf_size-5);;){if(v.lookahead<=1){if(lt(v),v.lookahead===0&&mt===f)return y;if(v.lookahead===0)break}v.strstart+=v.lookahead,v.lookahead=0;var V=v.block_start+st;if((v.strstart===0||v.strstart>=V)&&(v.lookahead=v.strstart-V,v.strstart=V,Z(v,!1),v.strm.avail_out===0)||v.strstart-v.block_start>=v.w_size-B&&(Z(v,!1),v.strm.avail_out===0))return y}return v.insert=0,mt===p?(Z(v,!0),v.strm.avail_out===0?W:q):(v.strstart>v.block_start&&(Z(v,!1),v.strm.avail_out),y)}),new Et(4,4,8,4,dt),new Et(4,5,16,8,dt),new Et(4,6,32,32,dt),new Et(4,4,16,16,xt),new Et(8,16,32,32,xt),new Et(8,16,128,128,xt),new Et(8,32,128,256,xt),new Et(32,128,258,1024,xt),new Et(32,258,258,4096,xt)],r.deflateInit=function(v,mt){return de(v,mt,x,15,8,0)},r.deflateInit2=de,r.deflateReset=Jt,r.deflateResetKeep=Kt,r.deflateSetHeader=function(v,mt){return v&&v.state?v.state.wrap!==2?_:(v.state.gzhead=mt,u):_},r.deflate=function(v,mt){var st,V,O,$;if(!v||!v.state||5<mt||mt<0)return v?J(v,_):_;if(V=v.state,!v.output||!v.input&&v.avail_in!==0||V.status===666&&mt!==p)return J(v,v.avail_out===0?-5:_);if(V.strm=v,st=V.last_flush,V.last_flush=mt,V.status===R)if(V.wrap===2)v.adler=0,_t(V,31),_t(V,139),_t(V,8),V.gzhead?(_t(V,(V.gzhead.text?1:0)+(V.gzhead.hcrc?2:0)+(V.gzhead.extra?4:0)+(V.gzhead.name?8:0)+(V.gzhead.comment?16:0)),_t(V,255&V.gzhead.time),_t(V,V.gzhead.time>>8&255),_t(V,V.gzhead.time>>16&255),_t(V,V.gzhead.time>>24&255),_t(V,V.level===9?2:2<=V.strategy||V.level<2?4:0),_t(V,255&V.gzhead.os),V.gzhead.extra&&V.gzhead.extra.length&&(_t(V,255&V.gzhead.extra.length),_t(V,V.gzhead.extra.length>>8&255)),V.gzhead.hcrc&&(v.adler=c(v.adler,V.pending_buf,V.pending,0)),V.gzindex=0,V.status=69):(_t(V,0),_t(V,0),_t(V,0),_t(V,0),_t(V,0),_t(V,V.level===9?2:2<=V.strategy||V.level<2?4:0),_t(V,3),V.status=z);else{var ot=x+(V.w_bits-8<<4)<<8;ot|=(2<=V.strategy||V.level<2?0:V.level<6?1:V.level===6?2:3)<<6,V.strstart!==0&&(ot|=32),ot+=31-ot%31,V.status=z,X(V,ot),V.strstart!==0&&(X(V,v.adler>>>16),X(V,65535&v.adler)),v.adler=1}if(V.status===69)if(V.gzhead.extra){for(O=V.pending;V.gzindex<(65535&V.gzhead.extra.length)&&(V.pending!==V.pending_buf_size||(V.gzhead.hcrc&&V.pending>O&&(v.adler=c(v.adler,V.pending_buf,V.pending-O,O)),j(v),O=V.pending,V.pending!==V.pending_buf_size));)_t(V,255&V.gzhead.extra[V.gzindex]),V.gzindex++;V.gzhead.hcrc&&V.pending>O&&(v.adler=c(v.adler,V.pending_buf,V.pending-O,O)),V.gzindex===V.gzhead.extra.length&&(V.gzindex=0,V.status=73)}else V.status=73;if(V.status===73)if(V.gzhead.name){O=V.pending;do{if(V.pending===V.pending_buf_size&&(V.gzhead.hcrc&&V.pending>O&&(v.adler=c(v.adler,V.pending_buf,V.pending-O,O)),j(v),O=V.pending,V.pending===V.pending_buf_size)){$=1;break}$=V.gzindex<V.gzhead.name.length?255&V.gzhead.name.charCodeAt(V.gzindex++):0,_t(V,$)}while($!==0);V.gzhead.hcrc&&V.pending>O&&(v.adler=c(v.adler,V.pending_buf,V.pending-O,O)),$===0&&(V.gzindex=0,V.status=91)}else V.status=91;if(V.status===91)if(V.gzhead.comment){O=V.pending;do{if(V.pending===V.pending_buf_size&&(V.gzhead.hcrc&&V.pending>O&&(v.adler=c(v.adler,V.pending_buf,V.pending-O,O)),j(v),O=V.pending,V.pending===V.pending_buf_size)){$=1;break}$=V.gzindex<V.gzhead.comment.length?255&V.gzhead.comment.charCodeAt(V.gzindex++):0,_t(V,$)}while($!==0);V.gzhead.hcrc&&V.pending>O&&(v.adler=c(v.adler,V.pending_buf,V.pending-O,O)),$===0&&(V.status=103)}else V.status=103;if(V.status===103&&(V.gzhead.hcrc?(V.pending+2>V.pending_buf_size&&j(v),V.pending+2<=V.pending_buf_size&&(_t(V,255&v.adler),_t(V,v.adler>>8&255),v.adler=0,V.status=z)):V.status=z),V.pending!==0){if(j(v),v.avail_out===0)return V.last_flush=-1,u}else if(v.avail_in===0&&Q(mt)<=Q(st)&&mt!==p)return J(v,-5);if(V.status===666&&v.avail_in!==0)return J(v,-5);if(v.avail_in!==0||V.lookahead!==0||mt!==f&&V.status!==666){var D=V.strategy===2?function(b,G){for(var rt;;){if(b.lookahead===0&&(lt(b),b.lookahead===0)){if(G===f)return y;break}if(b.match_length=0,rt=a._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++,rt&&(Z(b,!1),b.strm.avail_out===0))return y}return b.insert=0,G===p?(Z(b,!0),b.strm.avail_out===0?W:q):b.last_lit&&(Z(b,!1),b.strm.avail_out===0)?y:H}(V,mt):V.strategy===3?function(b,G){for(var rt,nt,at,wt,yt=b.window;;){if(b.lookahead<=w){if(lt(b),b.lookahead<=w&&G===f)return y;if(b.lookahead===0)break}if(b.match_length=0,b.lookahead>=S&&0<b.strstart&&(nt=yt[at=b.strstart-1])===yt[++at]&&nt===yt[++at]&&nt===yt[++at]){wt=b.strstart+w;do;while(nt===yt[++at]&&nt===yt[++at]&&nt===yt[++at]&&nt===yt[++at]&&nt===yt[++at]&&nt===yt[++at]&&nt===yt[++at]&&nt===yt[++at]&&at<wt);b.match_length=w-(wt-at),b.match_length>b.lookahead&&(b.match_length=b.lookahead)}if(b.match_length>=S?(rt=a._tr_tally(b,1,b.match_length-S),b.lookahead-=b.match_length,b.strstart+=b.match_length,b.match_length=0):(rt=a._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++),rt&&(Z(b,!1),b.strm.avail_out===0))return y}return b.insert=0,G===p?(Z(b,!0),b.strm.avail_out===0?W:q):b.last_lit&&(Z(b,!1),b.strm.avail_out===0)?y:H}(V,mt):s[V.level].func(V,mt);if(D!==W&&D!==q||(V.status=666),D===y||D===W)return v.avail_out===0&&(V.last_flush=-1),u;if(D===H&&(mt===1?a._tr_align(V):mt!==5&&(a._tr_stored_block(V,0,0,!1),mt===3&&(ft(V.head),V.lookahead===0&&(V.strstart=0,V.block_start=0,V.insert=0))),j(v),v.avail_out===0))return V.last_flush=-1,u}return mt!==p?u:V.wrap<=0?1:(V.wrap===2?(_t(V,255&v.adler),_t(V,v.adler>>8&255),_t(V,v.adler>>16&255),_t(V,v.adler>>24&255),_t(V,255&v.total_in),_t(V,v.total_in>>8&255),_t(V,v.total_in>>16&255),_t(V,v.total_in>>24&255)):(X(V,v.adler>>>16),X(V,65535&v.adler)),j(v),0<V.wrap&&(V.wrap=-V.wrap),V.pending!==0?u:1)},r.deflateEnd=function(v){var mt;return v&&v.state?(mt=v.state.status)!==R&&mt!==69&&mt!==73&&mt!==91&&mt!==103&&mt!==z&&mt!==666?J(v,_):(v.state=null,mt===z?J(v,-3):u):_},r.deflateSetDictionary=function(v,mt){var st,V,O,$,ot,D,b,G,rt=mt.length;if(!v||!v.state||($=(st=v.state).wrap)===2||$===1&&st.status!==R||st.lookahead)return _;for($===1&&(v.adler=l(v.adler,mt,rt,0)),st.wrap=0,rt>=st.w_size&&($===0&&(ft(st.head),st.strstart=0,st.block_start=0,st.insert=0),G=new o.Buf8(st.w_size),o.arraySet(G,mt,rt-st.w_size,st.w_size,0),mt=G,rt=st.w_size),ot=v.avail_in,D=v.next_in,b=v.input,v.avail_in=rt,v.next_in=0,v.input=mt,lt(st);st.lookahead>=S;){for(V=st.strstart,O=st.lookahead-(S-1);st.ins_h=(st.ins_h<<st.hash_shift^st.window[V+S-1])&st.hash_mask,st.prev[V&st.w_mask]=st.head[st.ins_h],st.head[st.ins_h]=V,V++,--O;);st.strstart=V,st.lookahead=S-1,lt(st)}return st.strstart+=st.lookahead,st.block_start=st.strstart,st.insert=st.lookahead,st.lookahead=0,st.match_length=st.prev_length=S-1,st.match_available=0,v.next_in=D,v.input=b,v.avail_in=ot,st.wrap=$,u},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,n,r){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,n,r){n.exports=function(s,o){var a,l,c,d,f,p,u,_,g,m,h,x,E,M,C,L,P,N,S,w,B,R,z,y,H;a=s.state,l=s.next_in,y=s.input,c=l+(s.avail_in-5),d=s.next_out,H=s.output,f=d-(o-s.avail_out),p=d+(s.avail_out-257),u=a.dmax,_=a.wsize,g=a.whave,m=a.wnext,h=a.window,x=a.hold,E=a.bits,M=a.lencode,C=a.distcode,L=(1<<a.lenbits)-1,P=(1<<a.distbits)-1;t:do{E<15&&(x+=y[l++]<<E,E+=8,x+=y[l++]<<E,E+=8),N=M[x&L];e:for(;;){if(x>>>=S=N>>>24,E-=S,(S=N>>>16&255)===0)H[d++]=65535&N;else{if(!(16&S)){if(!(64&S)){N=M[(65535&N)+(x&(1<<S)-1)];continue e}if(32&S){a.mode=12;break t}s.msg="invalid literal/length code",a.mode=30;break t}w=65535&N,(S&=15)&&(E<S&&(x+=y[l++]<<E,E+=8),w+=x&(1<<S)-1,x>>>=S,E-=S),E<15&&(x+=y[l++]<<E,E+=8,x+=y[l++]<<E,E+=8),N=C[x&P];n:for(;;){if(x>>>=S=N>>>24,E-=S,!(16&(S=N>>>16&255))){if(!(64&S)){N=C[(65535&N)+(x&(1<<S)-1)];continue n}s.msg="invalid distance code",a.mode=30;break t}if(B=65535&N,E<(S&=15)&&(x+=y[l++]<<E,(E+=8)<S&&(x+=y[l++]<<E,E+=8)),u<(B+=x&(1<<S)-1)){s.msg="invalid distance too far back",a.mode=30;break t}if(x>>>=S,E-=S,(S=d-f)<B){if(g<(S=B-S)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break t}if(z=h,(R=0)===m){if(R+=_-S,S<w){for(w-=S;H[d++]=h[R++],--S;);R=d-B,z=H}}else if(m<S){if(R+=_+m-S,(S-=m)<w){for(w-=S;H[d++]=h[R++],--S;);if(R=0,m<w){for(w-=S=m;H[d++]=h[R++],--S;);R=d-B,z=H}}}else if(R+=m-S,S<w){for(w-=S;H[d++]=h[R++],--S;);R=d-B,z=H}for(;2<w;)H[d++]=z[R++],H[d++]=z[R++],H[d++]=z[R++],w-=3;w&&(H[d++]=z[R++],1<w&&(H[d++]=z[R++]))}else{for(R=d-B;H[d++]=H[R++],H[d++]=H[R++],H[d++]=H[R++],2<(w-=3););w&&(H[d++]=H[R++],1<w&&(H[d++]=H[R++]))}break}}break}}while(l<c&&d<p);l-=w=E>>3,x&=(1<<(E-=w<<3))-1,s.next_in=l,s.next_out=d,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=d<p?p-d+257:257-(d-p),a.hold=x,a.bits=E}},{}],49:[function(e,n,r){var s=e("../utils/common"),o=e("./adler32"),a=e("./crc32"),l=e("./inffast"),c=e("./inftrees"),d=1,f=2,p=0,u=-2,_=1,g=852,m=592;function h(R){return(R>>>24&255)+(R>>>8&65280)+((65280&R)<<8)+((255&R)<<24)}function x(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function E(R){var z;return R&&R.state?(z=R.state,R.total_in=R.total_out=z.total=0,R.msg="",z.wrap&&(R.adler=1&z.wrap),z.mode=_,z.last=0,z.havedict=0,z.dmax=32768,z.head=null,z.hold=0,z.bits=0,z.lencode=z.lendyn=new s.Buf32(g),z.distcode=z.distdyn=new s.Buf32(m),z.sane=1,z.back=-1,p):u}function M(R){var z;return R&&R.state?((z=R.state).wsize=0,z.whave=0,z.wnext=0,E(R)):u}function C(R,z){var y,H;return R&&R.state?(H=R.state,z<0?(y=0,z=-z):(y=1+(z>>4),z<48&&(z&=15)),z&&(z<8||15<z)?u:(H.window!==null&&H.wbits!==z&&(H.window=null),H.wrap=y,H.wbits=z,M(R))):u}function L(R,z){var y,H;return R?(H=new x,(R.state=H).window=null,(y=C(R,z))!==p&&(R.state=null),y):u}var P,N,S=!0;function w(R){if(S){var z;for(P=new s.Buf32(512),N=new s.Buf32(32),z=0;z<144;)R.lens[z++]=8;for(;z<256;)R.lens[z++]=9;for(;z<280;)R.lens[z++]=7;for(;z<288;)R.lens[z++]=8;for(c(d,R.lens,0,288,P,0,R.work,{bits:9}),z=0;z<32;)R.lens[z++]=5;c(f,R.lens,0,32,N,0,R.work,{bits:5}),S=!1}R.lencode=P,R.lenbits=9,R.distcode=N,R.distbits=5}function B(R,z,y,H){var W,q=R.state;return q.window===null&&(q.wsize=1<<q.wbits,q.wnext=0,q.whave=0,q.window=new s.Buf8(q.wsize)),H>=q.wsize?(s.arraySet(q.window,z,y-q.wsize,q.wsize,0),q.wnext=0,q.whave=q.wsize):(H<(W=q.wsize-q.wnext)&&(W=H),s.arraySet(q.window,z,y-H,W,q.wnext),(H-=W)?(s.arraySet(q.window,z,y-H,H,0),q.wnext=H,q.whave=q.wsize):(q.wnext+=W,q.wnext===q.wsize&&(q.wnext=0),q.whave<q.wsize&&(q.whave+=W))),0}r.inflateReset=M,r.inflateReset2=C,r.inflateResetKeep=E,r.inflateInit=function(R){return L(R,15)},r.inflateInit2=L,r.inflate=function(R,z){var y,H,W,q,J,Q,ft,j,Z,_t,X,Y,lt,dt,xt,Et,kt,Kt,Jt,de,v,mt,st,V,O=0,$=new s.Buf8(4),ot=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!R||!R.state||!R.output||!R.input&&R.avail_in!==0)return u;(y=R.state).mode===12&&(y.mode=13),J=R.next_out,W=R.output,ft=R.avail_out,q=R.next_in,H=R.input,Q=R.avail_in,j=y.hold,Z=y.bits,_t=Q,X=ft,mt=p;t:for(;;)switch(y.mode){case _:if(y.wrap===0){y.mode=13;break}for(;Z<16;){if(Q===0)break t;Q--,j+=H[q++]<<Z,Z+=8}if(2&y.wrap&&j===35615){$[y.check=0]=255&j,$[1]=j>>>8&255,y.check=a(y.check,$,2,0),Z=j=0,y.mode=2;break}if(y.flags=0,y.head&&(y.head.done=!1),!(1&y.wrap)||(((255&j)<<8)+(j>>8))%31){R.msg="incorrect header check",y.mode=30;break}if((15&j)!=8){R.msg="unknown compression method",y.mode=30;break}if(Z-=4,v=8+(15&(j>>>=4)),y.wbits===0)y.wbits=v;else if(v>y.wbits){R.msg="invalid window size",y.mode=30;break}y.dmax=1<<v,R.adler=y.check=1,y.mode=512&j?10:12,Z=j=0;break;case 2:for(;Z<16;){if(Q===0)break t;Q--,j+=H[q++]<<Z,Z+=8}if(y.flags=j,(255&y.flags)!=8){R.msg="unknown compression method",y.mode=30;break}if(57344&y.flags){R.msg="unknown header flags set",y.mode=30;break}y.head&&(y.head.text=j>>8&1),512&y.flags&&($[0]=255&j,$[1]=j>>>8&255,y.check=a(y.check,$,2,0)),Z=j=0,y.mode=3;case 3:for(;Z<32;){if(Q===0)break t;Q--,j+=H[q++]<<Z,Z+=8}y.head&&(y.head.time=j),512&y.flags&&($[0]=255&j,$[1]=j>>>8&255,$[2]=j>>>16&255,$[3]=j>>>24&255,y.check=a(y.check,$,4,0)),Z=j=0,y.mode=4;case 4:for(;Z<16;){if(Q===0)break t;Q--,j+=H[q++]<<Z,Z+=8}y.head&&(y.head.xflags=255&j,y.head.os=j>>8),512&y.flags&&($[0]=255&j,$[1]=j>>>8&255,y.check=a(y.check,$,2,0)),Z=j=0,y.mode=5;case 5:if(1024&y.flags){for(;Z<16;){if(Q===0)break t;Q--,j+=H[q++]<<Z,Z+=8}y.length=j,y.head&&(y.head.extra_len=j),512&y.flags&&($[0]=255&j,$[1]=j>>>8&255,y.check=a(y.check,$,2,0)),Z=j=0}else y.head&&(y.head.extra=null);y.mode=6;case 6:if(1024&y.flags&&(Q<(Y=y.length)&&(Y=Q),Y&&(y.head&&(v=y.head.extra_len-y.length,y.head.extra||(y.head.extra=new Array(y.head.extra_len)),s.arraySet(y.head.extra,H,q,Y,v)),512&y.flags&&(y.check=a(y.check,H,Y,q)),Q-=Y,q+=Y,y.length-=Y),y.length))break t;y.length=0,y.mode=7;case 7:if(2048&y.flags){if(Q===0)break t;for(Y=0;v=H[q+Y++],y.head&&v&&y.length<65536&&(y.head.name+=String.fromCharCode(v)),v&&Y<Q;);if(512&y.flags&&(y.check=a(y.check,H,Y,q)),Q-=Y,q+=Y,v)break t}else y.head&&(y.head.name=null);y.length=0,y.mode=8;case 8:if(4096&y.flags){if(Q===0)break t;for(Y=0;v=H[q+Y++],y.head&&v&&y.length<65536&&(y.head.comment+=String.fromCharCode(v)),v&&Y<Q;);if(512&y.flags&&(y.check=a(y.check,H,Y,q)),Q-=Y,q+=Y,v)break t}else y.head&&(y.head.comment=null);y.mode=9;case 9:if(512&y.flags){for(;Z<16;){if(Q===0)break t;Q--,j+=H[q++]<<Z,Z+=8}if(j!==(65535&y.check)){R.msg="header crc mismatch",y.mode=30;break}Z=j=0}y.head&&(y.head.hcrc=y.flags>>9&1,y.head.done=!0),R.adler=y.check=0,y.mode=12;break;case 10:for(;Z<32;){if(Q===0)break t;Q--,j+=H[q++]<<Z,Z+=8}R.adler=y.check=h(j),Z=j=0,y.mode=11;case 11:if(y.havedict===0)return R.next_out=J,R.avail_out=ft,R.next_in=q,R.avail_in=Q,y.hold=j,y.bits=Z,2;R.adler=y.check=1,y.mode=12;case 12:if(z===5||z===6)break t;case 13:if(y.last){j>>>=7&Z,Z-=7&Z,y.mode=27;break}for(;Z<3;){if(Q===0)break t;Q--,j+=H[q++]<<Z,Z+=8}switch(y.last=1&j,Z-=1,3&(j>>>=1)){case 0:y.mode=14;break;case 1:if(w(y),y.mode=20,z!==6)break;j>>>=2,Z-=2;break t;case 2:y.mode=17;break;case 3:R.msg="invalid block type",y.mode=30}j>>>=2,Z-=2;break;case 14:for(j>>>=7&Z,Z-=7&Z;Z<32;){if(Q===0)break t;Q--,j+=H[q++]<<Z,Z+=8}if((65535&j)!=(j>>>16^65535)){R.msg="invalid stored block lengths",y.mode=30;break}if(y.length=65535&j,Z=j=0,y.mode=15,z===6)break t;case 15:y.mode=16;case 16:if(Y=y.length){if(Q<Y&&(Y=Q),ft<Y&&(Y=ft),Y===0)break t;s.arraySet(W,H,q,Y,J),Q-=Y,q+=Y,ft-=Y,J+=Y,y.length-=Y;break}y.mode=12;break;case 17:for(;Z<14;){if(Q===0)break t;Q--,j+=H[q++]<<Z,Z+=8}if(y.nlen=257+(31&j),j>>>=5,Z-=5,y.ndist=1+(31&j),j>>>=5,Z-=5,y.ncode=4+(15&j),j>>>=4,Z-=4,286<y.nlen||30<y.ndist){R.msg="too many length or distance symbols",y.mode=30;break}y.have=0,y.mode=18;case 18:for(;y.have<y.ncode;){for(;Z<3;){if(Q===0)break t;Q--,j+=H[q++]<<Z,Z+=8}y.lens[ot[y.have++]]=7&j,j>>>=3,Z-=3}for(;y.have<19;)y.lens[ot[y.have++]]=0;if(y.lencode=y.lendyn,y.lenbits=7,st={bits:y.lenbits},mt=c(0,y.lens,0,19,y.lencode,0,y.work,st),y.lenbits=st.bits,mt){R.msg="invalid code lengths set",y.mode=30;break}y.have=0,y.mode=19;case 19:for(;y.have<y.nlen+y.ndist;){for(;Et=(O=y.lencode[j&(1<<y.lenbits)-1])>>>16&255,kt=65535&O,!((xt=O>>>24)<=Z);){if(Q===0)break t;Q--,j+=H[q++]<<Z,Z+=8}if(kt<16)j>>>=xt,Z-=xt,y.lens[y.have++]=kt;else{if(kt===16){for(V=xt+2;Z<V;){if(Q===0)break t;Q--,j+=H[q++]<<Z,Z+=8}if(j>>>=xt,Z-=xt,y.have===0){R.msg="invalid bit length repeat",y.mode=30;break}v=y.lens[y.have-1],Y=3+(3&j),j>>>=2,Z-=2}else if(kt===17){for(V=xt+3;Z<V;){if(Q===0)break t;Q--,j+=H[q++]<<Z,Z+=8}Z-=xt,v=0,Y=3+(7&(j>>>=xt)),j>>>=3,Z-=3}else{for(V=xt+7;Z<V;){if(Q===0)break t;Q--,j+=H[q++]<<Z,Z+=8}Z-=xt,v=0,Y=11+(127&(j>>>=xt)),j>>>=7,Z-=7}if(y.have+Y>y.nlen+y.ndist){R.msg="invalid bit length repeat",y.mode=30;break}for(;Y--;)y.lens[y.have++]=v}}if(y.mode===30)break;if(y.lens[256]===0){R.msg="invalid code -- missing end-of-block",y.mode=30;break}if(y.lenbits=9,st={bits:y.lenbits},mt=c(d,y.lens,0,y.nlen,y.lencode,0,y.work,st),y.lenbits=st.bits,mt){R.msg="invalid literal/lengths set",y.mode=30;break}if(y.distbits=6,y.distcode=y.distdyn,st={bits:y.distbits},mt=c(f,y.lens,y.nlen,y.ndist,y.distcode,0,y.work,st),y.distbits=st.bits,mt){R.msg="invalid distances set",y.mode=30;break}if(y.mode=20,z===6)break t;case 20:y.mode=21;case 21:if(6<=Q&&258<=ft){R.next_out=J,R.avail_out=ft,R.next_in=q,R.avail_in=Q,y.hold=j,y.bits=Z,l(R,X),J=R.next_out,W=R.output,ft=R.avail_out,q=R.next_in,H=R.input,Q=R.avail_in,j=y.hold,Z=y.bits,y.mode===12&&(y.back=-1);break}for(y.back=0;Et=(O=y.lencode[j&(1<<y.lenbits)-1])>>>16&255,kt=65535&O,!((xt=O>>>24)<=Z);){if(Q===0)break t;Q--,j+=H[q++]<<Z,Z+=8}if(Et&&!(240&Et)){for(Kt=xt,Jt=Et,de=kt;Et=(O=y.lencode[de+((j&(1<<Kt+Jt)-1)>>Kt)])>>>16&255,kt=65535&O,!(Kt+(xt=O>>>24)<=Z);){if(Q===0)break t;Q--,j+=H[q++]<<Z,Z+=8}j>>>=Kt,Z-=Kt,y.back+=Kt}if(j>>>=xt,Z-=xt,y.back+=xt,y.length=kt,Et===0){y.mode=26;break}if(32&Et){y.back=-1,y.mode=12;break}if(64&Et){R.msg="invalid literal/length code",y.mode=30;break}y.extra=15&Et,y.mode=22;case 22:if(y.extra){for(V=y.extra;Z<V;){if(Q===0)break t;Q--,j+=H[q++]<<Z,Z+=8}y.length+=j&(1<<y.extra)-1,j>>>=y.extra,Z-=y.extra,y.back+=y.extra}y.was=y.length,y.mode=23;case 23:for(;Et=(O=y.distcode[j&(1<<y.distbits)-1])>>>16&255,kt=65535&O,!((xt=O>>>24)<=Z);){if(Q===0)break t;Q--,j+=H[q++]<<Z,Z+=8}if(!(240&Et)){for(Kt=xt,Jt=Et,de=kt;Et=(O=y.distcode[de+((j&(1<<Kt+Jt)-1)>>Kt)])>>>16&255,kt=65535&O,!(Kt+(xt=O>>>24)<=Z);){if(Q===0)break t;Q--,j+=H[q++]<<Z,Z+=8}j>>>=Kt,Z-=Kt,y.back+=Kt}if(j>>>=xt,Z-=xt,y.back+=xt,64&Et){R.msg="invalid distance code",y.mode=30;break}y.offset=kt,y.extra=15&Et,y.mode=24;case 24:if(y.extra){for(V=y.extra;Z<V;){if(Q===0)break t;Q--,j+=H[q++]<<Z,Z+=8}y.offset+=j&(1<<y.extra)-1,j>>>=y.extra,Z-=y.extra,y.back+=y.extra}if(y.offset>y.dmax){R.msg="invalid distance too far back",y.mode=30;break}y.mode=25;case 25:if(ft===0)break t;if(Y=X-ft,y.offset>Y){if((Y=y.offset-Y)>y.whave&&y.sane){R.msg="invalid distance too far back",y.mode=30;break}lt=Y>y.wnext?(Y-=y.wnext,y.wsize-Y):y.wnext-Y,Y>y.length&&(Y=y.length),dt=y.window}else dt=W,lt=J-y.offset,Y=y.length;for(ft<Y&&(Y=ft),ft-=Y,y.length-=Y;W[J++]=dt[lt++],--Y;);y.length===0&&(y.mode=21);break;case 26:if(ft===0)break t;W[J++]=y.length,ft--,y.mode=21;break;case 27:if(y.wrap){for(;Z<32;){if(Q===0)break t;Q--,j|=H[q++]<<Z,Z+=8}if(X-=ft,R.total_out+=X,y.total+=X,X&&(R.adler=y.check=y.flags?a(y.check,W,X,J-X):o(y.check,W,X,J-X)),X=ft,(y.flags?j:h(j))!==y.check){R.msg="incorrect data check",y.mode=30;break}Z=j=0}y.mode=28;case 28:if(y.wrap&&y.flags){for(;Z<32;){if(Q===0)break t;Q--,j+=H[q++]<<Z,Z+=8}if(j!==(4294967295&y.total)){R.msg="incorrect length check",y.mode=30;break}Z=j=0}y.mode=29;case 29:mt=1;break t;case 30:mt=-3;break t;case 31:return-4;case 32:default:return u}return R.next_out=J,R.avail_out=ft,R.next_in=q,R.avail_in=Q,y.hold=j,y.bits=Z,(y.wsize||X!==R.avail_out&&y.mode<30&&(y.mode<27||z!==4))&&B(R,R.output,R.next_out,X-R.avail_out)?(y.mode=31,-4):(_t-=R.avail_in,X-=R.avail_out,R.total_in+=_t,R.total_out+=X,y.total+=X,y.wrap&&X&&(R.adler=y.check=y.flags?a(y.check,W,X,R.next_out-X):o(y.check,W,X,R.next_out-X)),R.data_type=y.bits+(y.last?64:0)+(y.mode===12?128:0)+(y.mode===20||y.mode===15?256:0),(_t==0&&X===0||z===4)&&mt===p&&(mt=-5),mt)},r.inflateEnd=function(R){if(!R||!R.state)return u;var z=R.state;return z.window&&(z.window=null),R.state=null,p},r.inflateGetHeader=function(R,z){var y;return R&&R.state&&2&(y=R.state).wrap?((y.head=z).done=!1,p):u},r.inflateSetDictionary=function(R,z){var y,H=z.length;return R&&R.state?(y=R.state).wrap!==0&&y.mode!==11?u:y.mode===11&&o(1,z,H,0)!==y.check?-3:B(R,z,H,H)?(y.mode=31,-4):(y.havedict=1,p):u},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,n,r){var s=e("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(d,f,p,u,_,g,m,h){var x,E,M,C,L,P,N,S,w,B=h.bits,R=0,z=0,y=0,H=0,W=0,q=0,J=0,Q=0,ft=0,j=0,Z=null,_t=0,X=new s.Buf16(16),Y=new s.Buf16(16),lt=null,dt=0;for(R=0;R<=15;R++)X[R]=0;for(z=0;z<u;z++)X[f[p+z]]++;for(W=B,H=15;1<=H&&X[H]===0;H--);if(H<W&&(W=H),H===0)return _[g++]=20971520,_[g++]=20971520,h.bits=1,0;for(y=1;y<H&&X[y]===0;y++);for(W<y&&(W=y),R=Q=1;R<=15;R++)if(Q<<=1,(Q-=X[R])<0)return-1;if(0<Q&&(d===0||H!==1))return-1;for(Y[1]=0,R=1;R<15;R++)Y[R+1]=Y[R]+X[R];for(z=0;z<u;z++)f[p+z]!==0&&(m[Y[f[p+z]]++]=z);if(P=d===0?(Z=lt=m,19):d===1?(Z=o,_t-=257,lt=a,dt-=257,256):(Z=l,lt=c,-1),R=y,L=g,J=z=j=0,M=-1,C=(ft=1<<(q=W))-1,d===1&&852<ft||d===2&&592<ft)return 1;for(;;){for(N=R-J,w=m[z]<P?(S=0,m[z]):m[z]>P?(S=lt[dt+m[z]],Z[_t+m[z]]):(S=96,0),x=1<<R-J,y=E=1<<q;_[L+(j>>J)+(E-=x)]=N<<24|S<<16|w|0,E!==0;);for(x=1<<R-1;j&x;)x>>=1;if(x!==0?(j&=x-1,j+=x):j=0,z++,--X[R]==0){if(R===H)break;R=f[p+m[z]]}if(W<R&&(j&C)!==M){for(J===0&&(J=W),L+=y,Q=1<<(q=R-J);q+J<H&&!((Q-=X[q+J])<=0);)q++,Q<<=1;if(ft+=1<<q,d===1&&852<ft||d===2&&592<ft)return 1;_[M=j&C]=W<<24|q<<16|L-g|0}}return j!==0&&(_[L+j]=R-J<<24|64<<16|0),h.bits=W,0}},{"../utils/common":41}],51:[function(e,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,n,r){var s=e("../utils/common"),o=0,a=1;function l(O){for(var $=O.length;0<=--$;)O[$]=0}var c=0,d=29,f=256,p=f+1+d,u=30,_=19,g=2*p+1,m=15,h=16,x=7,E=256,M=16,C=17,L=18,P=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],N=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],S=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],B=new Array(2*(p+2));l(B);var R=new Array(2*u);l(R);var z=new Array(512);l(z);var y=new Array(256);l(y);var H=new Array(d);l(H);var W,q,J,Q=new Array(u);function ft(O,$,ot,D,b){this.static_tree=O,this.extra_bits=$,this.extra_base=ot,this.elems=D,this.max_length=b,this.has_stree=O&&O.length}function j(O,$){this.dyn_tree=O,this.max_code=0,this.stat_desc=$}function Z(O){return O<256?z[O]:z[256+(O>>>7)]}function _t(O,$){O.pending_buf[O.pending++]=255&$,O.pending_buf[O.pending++]=$>>>8&255}function X(O,$,ot){O.bi_valid>h-ot?(O.bi_buf|=$<<O.bi_valid&65535,_t(O,O.bi_buf),O.bi_buf=$>>h-O.bi_valid,O.bi_valid+=ot-h):(O.bi_buf|=$<<O.bi_valid&65535,O.bi_valid+=ot)}function Y(O,$,ot){X(O,ot[2*$],ot[2*$+1])}function lt(O,$){for(var ot=0;ot|=1&O,O>>>=1,ot<<=1,0<--$;);return ot>>>1}function dt(O,$,ot){var D,b,G=new Array(m+1),rt=0;for(D=1;D<=m;D++)G[D]=rt=rt+ot[D-1]<<1;for(b=0;b<=$;b++){var nt=O[2*b+1];nt!==0&&(O[2*b]=lt(G[nt]++,nt))}}function xt(O){var $;for($=0;$<p;$++)O.dyn_ltree[2*$]=0;for($=0;$<u;$++)O.dyn_dtree[2*$]=0;for($=0;$<_;$++)O.bl_tree[2*$]=0;O.dyn_ltree[2*E]=1,O.opt_len=O.static_len=0,O.last_lit=O.matches=0}function Et(O){8<O.bi_valid?_t(O,O.bi_buf):0<O.bi_valid&&(O.pending_buf[O.pending++]=O.bi_buf),O.bi_buf=0,O.bi_valid=0}function kt(O,$,ot,D){var b=2*$,G=2*ot;return O[b]<O[G]||O[b]===O[G]&&D[$]<=D[ot]}function Kt(O,$,ot){for(var D=O.heap[ot],b=ot<<1;b<=O.heap_len&&(b<O.heap_len&&kt($,O.heap[b+1],O.heap[b],O.depth)&&b++,!kt($,D,O.heap[b],O.depth));)O.heap[ot]=O.heap[b],ot=b,b<<=1;O.heap[ot]=D}function Jt(O,$,ot){var D,b,G,rt,nt=0;if(O.last_lit!==0)for(;D=O.pending_buf[O.d_buf+2*nt]<<8|O.pending_buf[O.d_buf+2*nt+1],b=O.pending_buf[O.l_buf+nt],nt++,D===0?Y(O,b,$):(Y(O,(G=y[b])+f+1,$),(rt=P[G])!==0&&X(O,b-=H[G],rt),Y(O,G=Z(--D),ot),(rt=N[G])!==0&&X(O,D-=Q[G],rt)),nt<O.last_lit;);Y(O,E,$)}function de(O,$){var ot,D,b,G=$.dyn_tree,rt=$.stat_desc.static_tree,nt=$.stat_desc.has_stree,at=$.stat_desc.elems,wt=-1;for(O.heap_len=0,O.heap_max=g,ot=0;ot<at;ot++)G[2*ot]!==0?(O.heap[++O.heap_len]=wt=ot,O.depth[ot]=0):G[2*ot+1]=0;for(;O.heap_len<2;)G[2*(b=O.heap[++O.heap_len]=wt<2?++wt:0)]=1,O.depth[b]=0,O.opt_len--,nt&&(O.static_len-=rt[2*b+1]);for($.max_code=wt,ot=O.heap_len>>1;1<=ot;ot--)Kt(O,G,ot);for(b=at;ot=O.heap[1],O.heap[1]=O.heap[O.heap_len--],Kt(O,G,1),D=O.heap[1],O.heap[--O.heap_max]=ot,O.heap[--O.heap_max]=D,G[2*b]=G[2*ot]+G[2*D],O.depth[b]=(O.depth[ot]>=O.depth[D]?O.depth[ot]:O.depth[D])+1,G[2*ot+1]=G[2*D+1]=b,O.heap[1]=b++,Kt(O,G,1),2<=O.heap_len;);O.heap[--O.heap_max]=O.heap[1],function(yt,At){var oe,bt,Ut,Dt,qt,Ft,Qt=At.dyn_tree,ee=At.max_code,ve=At.stat_desc.static_tree,et=At.stat_desc.has_stree,Rt=At.stat_desc.extra_bits,pt=At.stat_desc.extra_base,vt=At.stat_desc.max_length,Ct=0;for(Dt=0;Dt<=m;Dt++)yt.bl_count[Dt]=0;for(Qt[2*yt.heap[yt.heap_max]+1]=0,oe=yt.heap_max+1;oe<g;oe++)vt<(Dt=Qt[2*Qt[2*(bt=yt.heap[oe])+1]+1]+1)&&(Dt=vt,Ct++),Qt[2*bt+1]=Dt,ee<bt||(yt.bl_count[Dt]++,qt=0,pt<=bt&&(qt=Rt[bt-pt]),Ft=Qt[2*bt],yt.opt_len+=Ft*(Dt+qt),et&&(yt.static_len+=Ft*(ve[2*bt+1]+qt)));if(Ct!==0){do{for(Dt=vt-1;yt.bl_count[Dt]===0;)Dt--;yt.bl_count[Dt]--,yt.bl_count[Dt+1]+=2,yt.bl_count[vt]--,Ct-=2}while(0<Ct);for(Dt=vt;Dt!==0;Dt--)for(bt=yt.bl_count[Dt];bt!==0;)ee<(Ut=yt.heap[--oe])||(Qt[2*Ut+1]!==Dt&&(yt.opt_len+=(Dt-Qt[2*Ut+1])*Qt[2*Ut],Qt[2*Ut+1]=Dt),bt--)}}(O,$),dt(G,wt,O.bl_count)}function v(O,$,ot){var D,b,G=-1,rt=$[1],nt=0,at=7,wt=4;for(rt===0&&(at=138,wt=3),$[2*(ot+1)+1]=65535,D=0;D<=ot;D++)b=rt,rt=$[2*(D+1)+1],++nt<at&&b===rt||(nt<wt?O.bl_tree[2*b]+=nt:b!==0?(b!==G&&O.bl_tree[2*b]++,O.bl_tree[2*M]++):nt<=10?O.bl_tree[2*C]++:O.bl_tree[2*L]++,G=b,wt=(nt=0)===rt?(at=138,3):b===rt?(at=6,3):(at=7,4))}function mt(O,$,ot){var D,b,G=-1,rt=$[1],nt=0,at=7,wt=4;for(rt===0&&(at=138,wt=3),D=0;D<=ot;D++)if(b=rt,rt=$[2*(D+1)+1],!(++nt<at&&b===rt)){if(nt<wt)for(;Y(O,b,O.bl_tree),--nt!=0;);else b!==0?(b!==G&&(Y(O,b,O.bl_tree),nt--),Y(O,M,O.bl_tree),X(O,nt-3,2)):nt<=10?(Y(O,C,O.bl_tree),X(O,nt-3,3)):(Y(O,L,O.bl_tree),X(O,nt-11,7));G=b,wt=(nt=0)===rt?(at=138,3):b===rt?(at=6,3):(at=7,4)}}l(Q);var st=!1;function V(O,$,ot,D){X(O,(c<<1)+(D?1:0),3),function(b,G,rt,nt){Et(b),_t(b,rt),_t(b,~rt),s.arraySet(b.pending_buf,b.window,G,rt,b.pending),b.pending+=rt}(O,$,ot)}r._tr_init=function(O){st||(function(){var $,ot,D,b,G,rt=new Array(m+1);for(b=D=0;b<d-1;b++)for(H[b]=D,$=0;$<1<<P[b];$++)y[D++]=b;for(y[D-1]=b,b=G=0;b<16;b++)for(Q[b]=G,$=0;$<1<<N[b];$++)z[G++]=b;for(G>>=7;b<u;b++)for(Q[b]=G<<7,$=0;$<1<<N[b]-7;$++)z[256+G++]=b;for(ot=0;ot<=m;ot++)rt[ot]=0;for($=0;$<=143;)B[2*$+1]=8,$++,rt[8]++;for(;$<=255;)B[2*$+1]=9,$++,rt[9]++;for(;$<=279;)B[2*$+1]=7,$++,rt[7]++;for(;$<=287;)B[2*$+1]=8,$++,rt[8]++;for(dt(B,p+1,rt),$=0;$<u;$++)R[2*$+1]=5,R[2*$]=lt($,5);W=new ft(B,P,f+1,p,m),q=new ft(R,N,0,u,m),J=new ft(new Array(0),S,0,_,x)}(),st=!0),O.l_desc=new j(O.dyn_ltree,W),O.d_desc=new j(O.dyn_dtree,q),O.bl_desc=new j(O.bl_tree,J),O.bi_buf=0,O.bi_valid=0,xt(O)},r._tr_stored_block=V,r._tr_flush_block=function(O,$,ot,D){var b,G,rt=0;0<O.level?(O.strm.data_type===2&&(O.strm.data_type=function(nt){var at,wt=4093624447;for(at=0;at<=31;at++,wt>>>=1)if(1&wt&&nt.dyn_ltree[2*at]!==0)return o;if(nt.dyn_ltree[18]!==0||nt.dyn_ltree[20]!==0||nt.dyn_ltree[26]!==0)return a;for(at=32;at<f;at++)if(nt.dyn_ltree[2*at]!==0)return a;return o}(O)),de(O,O.l_desc),de(O,O.d_desc),rt=function(nt){var at;for(v(nt,nt.dyn_ltree,nt.l_desc.max_code),v(nt,nt.dyn_dtree,nt.d_desc.max_code),de(nt,nt.bl_desc),at=_-1;3<=at&&nt.bl_tree[2*w[at]+1]===0;at--);return nt.opt_len+=3*(at+1)+5+5+4,at}(O),b=O.opt_len+3+7>>>3,(G=O.static_len+3+7>>>3)<=b&&(b=G)):b=G=ot+5,ot+4<=b&&$!==-1?V(O,$,ot,D):O.strategy===4||G===b?(X(O,2+(D?1:0),3),Jt(O,B,R)):(X(O,4+(D?1:0),3),function(nt,at,wt,yt){var At;for(X(nt,at-257,5),X(nt,wt-1,5),X(nt,yt-4,4),At=0;At<yt;At++)X(nt,nt.bl_tree[2*w[At]+1],3);mt(nt,nt.dyn_ltree,at-1),mt(nt,nt.dyn_dtree,wt-1)}(O,O.l_desc.max_code+1,O.d_desc.max_code+1,rt+1),Jt(O,O.dyn_ltree,O.dyn_dtree)),xt(O),D&&Et(O)},r._tr_tally=function(O,$,ot){return O.pending_buf[O.d_buf+2*O.last_lit]=$>>>8&255,O.pending_buf[O.d_buf+2*O.last_lit+1]=255&$,O.pending_buf[O.l_buf+O.last_lit]=255&ot,O.last_lit++,$===0?O.dyn_ltree[2*ot]++:(O.matches++,$--,O.dyn_ltree[2*(y[ot]+f+1)]++,O.dyn_dtree[2*Z($)]++),O.last_lit===O.lit_bufsize-1},r._tr_align=function(O){X(O,2,3),Y(O,E,B),function($){$.bi_valid===16?(_t($,$.bi_buf),$.bi_buf=0,$.bi_valid=0):8<=$.bi_valid&&($.pending_buf[$.pending++]=255&$.bi_buf,$.bi_buf>>=8,$.bi_valid-=8)}(O)}},{"../utils/common":41}],53:[function(e,n,r){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,n,r){(function(s){(function(o,a){if(!o.setImmediate){var l,c,d,f,p=1,u={},_=!1,g=o.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(o);m=m&&m.setTimeout?m:o,l={}.toString.call(o.process)==="[object process]"?function(M){process.nextTick(function(){x(M)})}:function(){if(o.postMessage&&!o.importScripts){var M=!0,C=o.onmessage;return o.onmessage=function(){M=!1},o.postMessage("","*"),o.onmessage=C,M}}()?(f="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",E,!1):o.attachEvent("onmessage",E),function(M){o.postMessage(f+M,"*")}):o.MessageChannel?((d=new MessageChannel).port1.onmessage=function(M){x(M.data)},function(M){d.port2.postMessage(M)}):g&&"onreadystatechange"in g.createElement("script")?(c=g.documentElement,function(M){var C=g.createElement("script");C.onreadystatechange=function(){x(M),C.onreadystatechange=null,c.removeChild(C),C=null},c.appendChild(C)}):function(M){setTimeout(x,0,M)},m.setImmediate=function(M){typeof M!="function"&&(M=new Function(""+M));for(var C=new Array(arguments.length-1),L=0;L<C.length;L++)C[L]=arguments[L+1];var P={callback:M,args:C};return u[p]=P,l(p),p++},m.clearImmediate=h}function h(M){delete u[M]}function x(M){if(_)setTimeout(x,0,M);else{var C=u[M];if(C){_=!0;try{(function(L){var P=L.callback,N=L.args;switch(N.length){case 0:P();break;case 1:P(N[0]);break;case 2:P(N[0],N[1]);break;case 3:P(N[0],N[1],N[2]);break;default:P.apply(a,N)}})(C)}finally{h(M),_=!1}}}}function E(M){M.source===o&&typeof M.data=="string"&&M.data.indexOf(f)===0&&x(+M.data.slice(f.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof vs<"u"?vs:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})}(Ia)),Ia.exports}var K_=Z_();const $_=Y_(K_);async function vh(i,t,e){try{const n=await J_(i);return Q_(n,t,e)}catch(n){return t0(n,`Error processing ZIP file at ${i}`),new Map}}async function J_(i){const t=await fetch(i);if(!t.ok)throw new Error(`Failed to load ZIP file: ${t.statusText}`);const e=await t.arrayBuffer();return $_.loadAsync(e)}async function Q_(i,t,e){const n=new Map,r=Object.entries(i.files).filter(([s,o])=>o&&!o.dir&&s.endsWith(t));for(const[s,o]of r){const a=await o.async(e);n.set(s,a)}return n}function t0(i,t){i instanceof Error?console.error(`${t}: ${i.message}`):console.error(`${t}: ${JSON.stringify(i)}`)}async function e0(i,t){return vh(i,t,"text")}async function n0(i,t){return vh(i,t,"arraybuffer")}function i0(...i){const t=new Map;return i.forEach(e=>{e.forEach((n,r)=>{t.set(r,n)})}),t}async function xh(i,t,e){const n=await Promise.all(t.map(r=>e(i,r)));return i0(...n)}async function r0(){return await xh(_h,[".obj",".urdf"],e0)}async function s0(){return await xh(_h,[".png",".STL"],n0)}async function a0(){return{textFiles:await r0(),binaryFiles:await s0()}}async function o0(){let i=null;try{i=await a0(),console.log("ZIP file loaded and extracted successfully.",i)}catch(t){console.error("Error during ZIP loading:",t)}return i||{textFiles:new Map,binaryFiles:new Map}}const l0=/^[og]\s*(.+)?/,c0=/^mtllib /,h0=/^usemtl /,u0=/^usemap /,gc=/\s+/,_c=new K,Na=new K,vc=new K,xc=new K,hn=new K,ys=new ae;function d0(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const r=this.normals,s=this.object.geometry.normals;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(t,e,n){const r=this.vertices,s=this.object.geometry.normals;_c.fromArray(r,t),Na.fromArray(r,e),vc.fromArray(r,n),hn.subVectors(vc,Na),xc.subVectors(_c,Na),hn.cross(xc),hn.normalize(),s.push(hn.x,hn.y,hn.z),s.push(hn.x,hn.y,hn.z),s.push(hn.x,hn.y,hn.z)},addColor:function(t,e,n){const r=this.colors,s=this.object.geometry.colors;r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[n]!==void 0&&s.push(r[n+0],r[n+1],r[n+2])},addUV:function(t,e,n){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[t+0],r[t+1]),s.push(r[e+0],r[e+1]),s.push(r[n+0],r[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,r,s,o,a,l,c){const d=this.vertices.length;let f=this.parseVertexIndex(t,d),p=this.parseVertexIndex(e,d),u=this.parseVertexIndex(n,d);if(this.addVertex(f,p,u),this.addColor(f,p,u),a!==void 0&&a!==""){const _=this.normals.length;f=this.parseNormalIndex(a,_),p=this.parseNormalIndex(l,_),u=this.parseNormalIndex(c,_),this.addNormal(f,p,u)}else this.addFaceNormal(f,p,u);if(r!==void 0&&r!==""){const _=this.uvs.length;f=this.parseUVIndex(r,_),p=this.parseUVIndex(s,_),u=this.parseUVIndex(o,_),this.addUV(f,p,u),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,r=t.length;n<r;n++){const s=this.parseVertexIndex(t[n],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,r=this.uvs.length;for(let s=0,o=t.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(t[s],n));for(let s=0,o=e.length;s<o;s++)this.addUVLine(this.parseUVIndex(e[s],r))}};return i.startObject("",!1),i}class f0 extends Hn{constructor(t){super(t),this.materials=null}load(t,e,n,r){const s=this,o=new Ws(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(t)}},n,r)}setMaterials(t){return this.materials=t,this}parse(t){const e=new d0;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let r=[];for(let a=0,l=n.length;a<l;a++){const c=n[a].trimStart();if(c.length===0)continue;const d=c.charAt(0);if(d!=="#")if(d==="v"){const f=c.split(gc);switch(f[0]){case"v":e.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7?(ys.setRGB(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6]),Ce),e.colors.push(ys.r,ys.g,ys.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":e.uvs.push(parseFloat(f[1]),parseFloat(f[2]));break}}else if(d==="f"){const p=c.slice(1).trim().split(gc),u=[];for(let g=0,m=p.length;g<m;g++){const h=p[g];if(h.length>0){const x=h.split("/");u.push(x)}}const _=u[0];for(let g=1,m=u.length-1;g<m;g++){const h=u[g],x=u[g+1];e.addFace(_[0],h[0],x[0],_[1],h[1],x[1],_[2],h[2],x[2])}}else if(d==="l"){const f=c.substring(1).trim().split(" ");let p=[];const u=[];if(c.indexOf("/")===-1)p=f;else for(let _=0,g=f.length;_<g;_++){const m=f[_].split("/");m[0]!==""&&p.push(m[0]),m[1]!==""&&u.push(m[1])}e.addLineGeometry(p,u)}else if(d==="p"){const p=c.slice(1).trim().split(" ");e.addPointGeometry(p)}else if((r=l0.exec(c))!==null){const f=(" "+r[0].slice(1).trim()).slice(1);e.startObject(f)}else if(h0.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(c0.test(c))e.materialLibraries.push(c.substring(7).trim());else if(u0.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(d==="s"){if(r=c.split(" "),r.length>1){const p=r[1].trim().toLowerCase();e.object.smooth=p!=="0"&&p!=="off"}else e.object.smooth=!0;const f=e.object.currentMaterial();f&&(f.smooth=e.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}e.finalize();const s=new _i;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=e.objects.length;a<l;a++){const c=e.objects[a],d=c.geometry,f=c.materials,p=d.type==="Line",u=d.type==="Points";let _=!1;if(d.vertices.length===0)continue;const g=new ze;g.setAttribute("position",new ye(d.vertices,3)),d.normals.length>0&&g.setAttribute("normal",new ye(d.normals,3)),d.colors.length>0&&(_=!0,g.setAttribute("color",new ye(d.colors,3))),d.hasUVIndices===!0&&g.setAttribute("uv",new ye(d.uvs,2));const m=[];for(let x=0,E=f.length;x<E;x++){const M=f[x],C=M.name+"_"+M.smooth+"_"+_;let L=e.materials[C];if(this.materials!==null){if(L=this.materials.create(M.name),p&&L&&!(L instanceof xi)){const P=new xi;bn.prototype.copy.call(P,L),P.color.copy(L.color),L=P}else if(u&&L&&!(L instanceof Sr)){const P=new Sr({size:10,sizeAttenuation:!1});bn.prototype.copy.call(P,L),P.color.copy(L.color),P.map=L.map,L=P}}L===void 0&&(p?L=new xi:u?L=new Sr({size:1,sizeAttenuation:!1}):L=new $i,L.name=M.name,L.flatShading=!M.smooth,L.vertexColors=_,e.materials[C]=L),m.push(L)}let h;if(m.length>1){for(let x=0,E=f.length;x<E;x++){const M=f[x];g.addGroup(M.groupStart,M.groupCount,x)}p?h=new Us(g,m):u?h=new Ra(g,m):h=new Ie(g,m)}else p?h=new Us(g,m[0]):u?h=new Ra(g,m[0]):h=new Ie(g,m[0]);h.name=c.name,s.add(h)}else if(e.vertices.length>0){const a=new Sr({size:1,sizeAttenuation:!1}),l=new ze;l.setAttribute("position",new ye(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new ye(e.colors,3)),a.vertexColors=!0);const c=new Ra(l,a);s.add(c)}return s}}var Ho=(i=>(i[i.OpticalTable=0]="OpticalTable",i))(Ho||{});const p0={0:"assets/objs/optical_table.obj"};function m0(i){i.traverse(t=>{if(t.isMesh){const e=t;e.material||(e.material=new ah({color:8947848}))}})}function g0(i,t){const e=i.textFiles.get(t);let n=null;return e&&(n=new f0().parse(e),m0(n)),n}function _0(i){let t=new Map;const e=[Ho.OpticalTable];for(const r of e){var n=g0(i,p0[r]);n&&t.set(r,n)}return t}class v0 extends Hn{constructor(t){super(t)}load(t,e,n,r){const s=this,o=new Ws(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(t)}},n,r)}parse(t){function e(c){const d=new DataView(c),f=32/8*3+32/8*3*3+16/8,p=d.getUint32(80,!0);if(80+32/8+p*f===d.byteLength)return!0;const _=[115,111,108,105,100];for(let g=0;g<5;g++)if(n(_,d,g))return!1;return!0}function n(c,d,f){for(let p=0,u=c.length;p<u;p++)if(c[p]!==d.getUint8(f+p))return!1;return!0}function r(c){const d=new DataView(c),f=d.getUint32(80,!0);let p,u,_,g=!1,m,h,x,E,M;for(let B=0;B<70;B++)d.getUint32(B,!1)==1129270351&&d.getUint8(B+4)==82&&d.getUint8(B+5)==61&&(g=!0,m=new Float32Array(f*3*3),h=d.getUint8(B+6)/255,x=d.getUint8(B+7)/255,E=d.getUint8(B+8)/255,M=d.getUint8(B+9)/255);const C=84,L=12*4+2,P=new ze,N=new Float32Array(f*3*3),S=new Float32Array(f*3*3),w=new ae;for(let B=0;B<f;B++){const R=C+B*L,z=d.getFloat32(R,!0),y=d.getFloat32(R+4,!0),H=d.getFloat32(R+8,!0);if(g){const W=d.getUint16(R+48,!0);W&32768?(p=h,u=x,_=E):(p=(W&31)/31,u=(W>>5&31)/31,_=(W>>10&31)/31)}for(let W=1;W<=3;W++){const q=R+W*12,J=B*3*3+(W-1)*3;N[J]=d.getFloat32(q,!0),N[J+1]=d.getFloat32(q+4,!0),N[J+2]=d.getFloat32(q+8,!0),S[J]=z,S[J+1]=y,S[J+2]=H,g&&(w.setRGB(p,u,_,Ce),m[J]=w.r,m[J+1]=w.g,m[J+2]=w.b)}}return P.setAttribute("position",new on(N,3)),P.setAttribute("normal",new on(S,3)),g&&(P.setAttribute("color",new on(m,3)),P.hasColors=!0,P.alpha=M),P}function s(c){const d=new ze,f=/solid([\s\S]*?)endsolid/g,p=/facet([\s\S]*?)endfacet/g,u=/solid\s(.+)/;let _=0;const g=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+g+g+g,"g"),h=new RegExp("normal"+g+g+g,"g"),x=[],E=[],M=[],C=new K;let L,P=0,N=0,S=0;for(;(L=f.exec(c))!==null;){N=S;const w=L[0],B=(L=u.exec(w))!==null?L[1]:"";for(M.push(B);(L=p.exec(w))!==null;){let y=0,H=0;const W=L[0];for(;(L=h.exec(W))!==null;)C.x=parseFloat(L[1]),C.y=parseFloat(L[2]),C.z=parseFloat(L[3]),H++;for(;(L=m.exec(W))!==null;)x.push(parseFloat(L[1]),parseFloat(L[2]),parseFloat(L[3])),E.push(C.x,C.y,C.z),y++,S++;H!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+_),y!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+_),_++}const R=N,z=S-N;d.userData.groupNames=M,d.addGroup(R,z,P),P++}return d.setAttribute("position",new ye(x,3)),d.setAttribute("normal",new ye(E,3)),d}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const d=new Uint8Array(c.length);for(let f=0;f<c.length;f++)d[f]=c.charCodeAt(f)&255;return d.buffer||d}else return c}const l=a(t);return e(l)?r(l):s(o(t))}}class yc extends h_{constructor(t){super(t)}parse(t){function e(W){switch(W.image_type){case p:case g:if(W.colormap_length>256||W.colormap_size!==24||W.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case u:case _:case m:case h:if(W.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case f:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+W.image_type)}if(W.width<=0||W.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(W.pixel_size!==8&&W.pixel_size!==16&&W.pixel_size!==24&&W.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+W.pixel_size)}function n(W,q,J,Q,ft){let j,Z;const _t=J.pixel_size>>3,X=J.width*J.height*_t;if(q&&(Z=ft.subarray(Q,Q+=J.colormap_length*(J.colormap_size>>3))),W){j=new Uint8Array(X);let Y,lt,dt,xt=0;const Et=new Uint8Array(_t);for(;xt<X;)if(Y=ft[Q++],lt=(Y&127)+1,Y&128){for(dt=0;dt<_t;++dt)Et[dt]=ft[Q++];for(dt=0;dt<lt;++dt)j.set(Et,xt+dt*_t);xt+=_t*lt}else{for(lt*=_t,dt=0;dt<lt;++dt)j[xt+dt]=ft[Q++];xt+=lt}}else j=ft.subarray(Q,Q+=q?J.width*J.height:X);return{pixel_data:j,palettes:Z}}function r(W,q,J,Q,ft,j,Z,_t,X){const Y=X;let lt,dt=0,xt,Et;const kt=w.width;for(Et=q;Et!==Q;Et+=J)for(xt=ft;xt!==Z;xt+=j,dt++)lt=_t[dt],W[(xt+kt*Et)*4+3]=255,W[(xt+kt*Et)*4+2]=Y[lt*3+0],W[(xt+kt*Et)*4+1]=Y[lt*3+1],W[(xt+kt*Et)*4+0]=Y[lt*3+2];return W}function s(W,q,J,Q,ft,j,Z,_t){let X,Y=0,lt,dt;const xt=w.width;for(dt=q;dt!==Q;dt+=J)for(lt=ft;lt!==Z;lt+=j,Y+=2)X=_t[Y+0]+(_t[Y+1]<<8),W[(lt+xt*dt)*4+0]=(X&31744)>>7,W[(lt+xt*dt)*4+1]=(X&992)>>2,W[(lt+xt*dt)*4+2]=(X&31)<<3,W[(lt+xt*dt)*4+3]=X&32768?0:255;return W}function o(W,q,J,Q,ft,j,Z,_t){let X=0,Y,lt;const dt=w.width;for(lt=q;lt!==Q;lt+=J)for(Y=ft;Y!==Z;Y+=j,X+=3)W[(Y+dt*lt)*4+3]=255,W[(Y+dt*lt)*4+2]=_t[X+0],W[(Y+dt*lt)*4+1]=_t[X+1],W[(Y+dt*lt)*4+0]=_t[X+2];return W}function a(W,q,J,Q,ft,j,Z,_t){let X=0,Y,lt;const dt=w.width;for(lt=q;lt!==Q;lt+=J)for(Y=ft;Y!==Z;Y+=j,X+=4)W[(Y+dt*lt)*4+2]=_t[X+0],W[(Y+dt*lt)*4+1]=_t[X+1],W[(Y+dt*lt)*4+0]=_t[X+2],W[(Y+dt*lt)*4+3]=_t[X+3];return W}function l(W,q,J,Q,ft,j,Z,_t){let X,Y=0,lt,dt;const xt=w.width;for(dt=q;dt!==Q;dt+=J)for(lt=ft;lt!==Z;lt+=j,Y++)X=_t[Y],W[(lt+xt*dt)*4+0]=X,W[(lt+xt*dt)*4+1]=X,W[(lt+xt*dt)*4+2]=X,W[(lt+xt*dt)*4+3]=255;return W}function c(W,q,J,Q,ft,j,Z,_t){let X=0,Y,lt;const dt=w.width;for(lt=q;lt!==Q;lt+=J)for(Y=ft;Y!==Z;Y+=j,X+=2)W[(Y+dt*lt)*4+0]=_t[X+0],W[(Y+dt*lt)*4+1]=_t[X+0],W[(Y+dt*lt)*4+2]=_t[X+0],W[(Y+dt*lt)*4+3]=_t[X+1];return W}function d(W,q,J,Q,ft){let j,Z,_t,X,Y,lt;switch((w.flags&x)>>E){default:case L:j=0,_t=1,Y=q,Z=0,X=1,lt=J;break;case M:j=0,_t=1,Y=q,Z=J-1,X=-1,lt=-1;break;case P:j=q-1,_t=-1,Y=-1,Z=0,X=1,lt=J;break;case C:j=q-1,_t=-1,Y=-1,Z=J-1,X=-1,lt=-1;break}if(z)switch(w.pixel_size){case 8:l(W,Z,X,lt,j,_t,Y,Q);break;case 16:c(W,Z,X,lt,j,_t,Y,Q);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(w.pixel_size){case 8:r(W,Z,X,lt,j,_t,Y,Q,ft);break;case 16:s(W,Z,X,lt,j,_t,Y,Q);break;case 24:o(W,Z,X,lt,j,_t,Y,Q);break;case 32:a(W,Z,X,lt,j,_t,Y,Q);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return W}const f=0,p=1,u=2,_=3,g=9,m=10,h=11,x=48,E=4,M=0,C=1,L=2,P=3;if(t.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let N=0;const S=new Uint8Array(t),w={id_length:S[N++],colormap_type:S[N++],image_type:S[N++],colormap_index:S[N++]|S[N++]<<8,colormap_length:S[N++]|S[N++]<<8,colormap_size:S[N++],origin:[S[N++]|S[N++]<<8,S[N++]|S[N++]<<8],width:S[N++]|S[N++]<<8,height:S[N++]|S[N++]<<8,pixel_size:S[N++],flags:S[N++]};if(e(w),w.id_length+N>t.length)throw new Error("THREE.TGALoader: No data.");N+=w.id_length;let B=!1,R=!1,z=!1;switch(w.image_type){case g:B=!0,R=!0;break;case p:R=!0;break;case m:B=!0;break;case u:break;case h:B=!0,z=!0;break;case _:z=!0;break}const y=new Uint8Array(w.width*w.height*4),H=n(B,R,w,N,S);return d(y,w.width,w.height,H.pixel_data,H.palettes),{data:y,width:w.width,height:w.height,flipY:!0,generateMipmaps:!0,minFilter:On}}}class x0 extends Hn{load(t,e,n,r){const s=this,o=s.path===""?ph.extractUrlBase(t):s.path,a=new Ws(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(t,function(l){try{e(s.parse(l,o))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},n,r)}parse(t,e){function n(A,T){const U=[],I=A.childNodes;for(let k=0,ut=I.length;k<ut;k++){const gt=I[k];gt.nodeName===T&&U.push(gt)}return U}function r(A){if(A.length===0)return[];const T=A.trim().split(/\s+/),U=new Array(T.length);for(let I=0,k=T.length;I<k;I++)U[I]=T[I];return U}function s(A){if(A.length===0)return[];const T=A.trim().split(/\s+/),U=new Array(T.length);for(let I=0,k=T.length;I<k;I++)U[I]=parseFloat(T[I]);return U}function o(A){if(A.length===0)return[];const T=A.trim().split(/\s+/),U=new Array(T.length);for(let I=0,k=T.length;I<k;I++)U[I]=parseInt(T[I]);return U}function a(A){return A.substring(1)}function l(){return"three_default_"+wh++}function c(A){return Object.keys(A).length===0}function d(A){return{unit:f(n(A,"unit")[0]),upAxis:p(n(A,"up_axis")[0])}}function f(A){return A!==void 0&&A.hasAttribute("meter")===!0?parseFloat(A.getAttribute("meter")):1}function p(A){return A!==void 0?A.textContent:"Y_UP"}function u(A,T,U,I){const k=n(A,T)[0];if(k!==void 0){const ut=n(k,U);for(let gt=0;gt<ut.length;gt++)I(ut[gt])}}function _(A,T){for(const U in A){const I=A[U];I.build=T(A[U])}}function g(A,T){return A.build!==void 0||(A.build=T(A)),A.build}function m(A){const T={sources:{},samplers:{},channels:{}};let U=!1;for(let I=0,k=A.childNodes.length;I<k;I++){const ut=A.childNodes[I];if(ut.nodeType!==1)continue;let gt;switch(ut.nodeName){case"source":gt=ut.getAttribute("id"),T.sources[gt]=pt(ut);break;case"sampler":gt=ut.getAttribute("id"),T.samplers[gt]=h(ut);break;case"channel":gt=ut.getAttribute("target"),T.channels[gt]=x(ut);break;case"animation":m(ut),U=!0;break;default:console.log(ut)}}U===!1&&(Zt.animations[A.getAttribute("id")||ti.generateUUID()]=T)}function h(A){const T={inputs:{}};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const ut=a(k.getAttribute("source")),gt=k.getAttribute("semantic");T.inputs[gt]=ut;break}}return T}function x(A){const T={};let I=A.getAttribute("target").split("/");const k=I.shift();let ut=I.shift();const gt=ut.indexOf("(")!==-1,Ot=ut.indexOf(".")!==-1;if(Ot)I=ut.split("."),ut=I.shift(),T.member=I.shift();else if(gt){const Tt=ut.split("(");ut=Tt.shift();for(let Nt=0;Nt<Tt.length;Nt++)Tt[Nt]=parseInt(Tt[Nt].replace(/\)/,""));T.indices=Tt}return T.id=k,T.sid=ut,T.arraySyntax=gt,T.memberSyntax=Ot,T.sampler=a(A.getAttribute("source")),T}function E(A){const T=[],U=A.channels,I=A.samplers,k=A.sources;for(const ut in U)if(U.hasOwnProperty(ut)){const gt=U[ut],Ot=I[gt.sampler],Tt=Ot.inputs.INPUT,Nt=Ot.inputs.OUTPUT,Xt=k[Tt],Mt=k[Nt],Wt=C(gt,Xt,Mt);w(Wt,T)}return T}function M(A){return g(Zt.animations[A],E)}function C(A,T,U){const I=Zt.nodes[A.id],k=Le(I.id),ut=I.transforms[A.sid],gt=I.matrix.clone().transpose();let Ot,Tt,Nt,Xt,Mt,Wt;const Bt={};switch(ut){case"matrix":for(Nt=0,Xt=T.array.length;Nt<Xt;Nt++)if(Ot=T.array[Nt],Tt=Nt*U.stride,Bt[Ot]===void 0&&(Bt[Ot]={}),A.arraySyntax===!0){const Re=U.array[Tt],Se=A.indices[0]+4*A.indices[1];Bt[Ot][Se]=Re}else for(Mt=0,Wt=U.stride;Mt<Wt;Mt++)Bt[Ot][Mt]=U.array[Tt+Mt];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',ut);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',ut);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',ut);break}const Yt=L(Bt,gt);return{name:k.uuid,keyframes:Yt}}function L(A,T){const U=[];for(const k in A)U.push({time:parseFloat(k),value:A[k]});U.sort(I);for(let k=0;k<16;k++)B(U,k,T.elements[k]);return U;function I(k,ut){return k.time-ut.time}}const P=new K,N=new K,S=new yn;function w(A,T){const U=A.keyframes,I=A.name,k=[],ut=[],gt=[],Ot=[];for(let Tt=0,Nt=U.length;Tt<Nt;Tt++){const Xt=U[Tt],Mt=Xt.time,Wt=Xt.value;tt.fromArray(Wt).transpose(),tt.decompose(P,S,N),k.push(Mt),ut.push(P.x,P.y,P.z),gt.push(S.x,S.y,S.z,S.w),Ot.push(N.x,N.y,N.z)}return ut.length>0&&T.push(new sr(I+".position",k,ut)),gt.length>0&&T.push(new Ir(I+".quaternion",k,gt)),Ot.length>0&&T.push(new sr(I+".scale",k,Ot)),T}function B(A,T,U){let I,k=!0,ut,gt;for(ut=0,gt=A.length;ut<gt;ut++)I=A[ut],I.value[T]===void 0?I.value[T]=null:k=!1;if(k===!0)for(ut=0,gt=A.length;ut<gt;ut++)I=A[ut],I.value[T]=U;else R(A,T)}function R(A,T){let U,I;for(let k=0,ut=A.length;k<ut;k++){const gt=A[k];if(gt.value[T]===null){if(U=z(A,k,T),I=y(A,k,T),U===null){gt.value[T]=I.value[T];continue}if(I===null){gt.value[T]=U.value[T];continue}H(gt,U,I,T)}}}function z(A,T,U){for(;T>=0;){const I=A[T];if(I.value[U]!==null)return I;T--}return null}function y(A,T,U){for(;T<A.length;){const I=A[T];if(I.value[U]!==null)return I;T++}return null}function H(A,T,U,I){if(U.time-T.time===0){A.value[I]=T.value[I];return}A.value[I]=(A.time-T.time)*(U.value[I]-T.value[I])/(U.time-T.time)+T.value[I]}function W(A){const T={name:A.getAttribute("id")||"default",start:parseFloat(A.getAttribute("start")||0),end:parseFloat(A.getAttribute("end")||0),animations:[]};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"instance_animation":T.animations.push(a(k.getAttribute("url")));break}}Zt.clips[A.getAttribute("id")]=T}function q(A){const T=[],U=A.name,I=A.end-A.start||-1,k=A.animations;for(let ut=0,gt=k.length;ut<gt;ut++){const Ot=M(k[ut]);for(let Tt=0,Nt=Ot.length;Tt<Nt;Tt++)T.push(Ot[Tt])}return new oc(U,I,T)}function J(A){return g(Zt.clips[A],q)}function Q(A){const T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"skin":T.id=a(k.getAttribute("source")),T.skin=ft(k);break;case"morph":T.id=a(k.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}Zt.controllers[A.getAttribute("id")]=T}function ft(A){const T={sources:{}};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"bind_shape_matrix":T.bindShapeMatrix=s(k.textContent);break;case"source":const ut=k.getAttribute("id");T.sources[ut]=pt(k);break;case"joints":T.joints=j(k);break;case"vertex_weights":T.vertexWeights=Z(k);break}}return T}function j(A){const T={inputs:{}};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const ut=k.getAttribute("semantic"),gt=a(k.getAttribute("source"));T.inputs[ut]=gt;break}}return T}function Z(A){const T={inputs:{}};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const ut=k.getAttribute("semantic"),gt=a(k.getAttribute("source")),Ot=parseInt(k.getAttribute("offset"));T.inputs[ut]={id:gt,offset:Ot};break;case"vcount":T.vcount=o(k.textContent);break;case"v":T.v=o(k.textContent);break}}return T}function _t(A){const T={id:A.id},U=Zt.geometries[T.id];return A.skin!==void 0&&(T.skin=X(A.skin),U.sources.skinIndices=T.skin.indices,U.sources.skinWeights=T.skin.weights),T}function X(A){const U={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},I=A.sources,k=A.vertexWeights,ut=k.vcount,gt=k.v,Ot=k.inputs.JOINT.offset,Tt=k.inputs.WEIGHT.offset,Nt=A.sources[A.joints.inputs.JOINT],Xt=A.sources[A.joints.inputs.INV_BIND_MATRIX],Mt=I[k.inputs.WEIGHT.id].array;let Wt=0,Bt,Yt,jt;for(Bt=0,jt=ut.length;Bt<jt;Bt++){const Se=ut[Bt],ge=[];for(Yt=0;Yt<Se;Yt++){const _e=gt[Wt+Ot],An=gt[Wt+Tt],$e=Mt[An];ge.push({index:_e,weight:$e}),Wt+=2}for(ge.sort(Re),Yt=0;Yt<4;Yt++){const _e=ge[Yt];_e!==void 0?(U.indices.array.push(_e.index),U.weights.array.push(_e.weight)):(U.indices.array.push(0),U.weights.array.push(0))}}for(A.bindShapeMatrix?U.bindMatrix=new ie().fromArray(A.bindShapeMatrix).transpose():U.bindMatrix=new ie().identity(),Bt=0,jt=Nt.array.length;Bt<jt;Bt++){const Se=Nt.array[Bt],ge=new ie().fromArray(Xt.array,Bt*Xt.stride).transpose();U.joints.push({name:Se,boneInverse:ge})}return U;function Re(Se,ge){return ge.weight-Se.weight}}function Y(A){return g(Zt.controllers[A],_t)}function lt(A){const T={init_from:n(A,"init_from")[0].textContent};Zt.images[A.getAttribute("id")]=T}function dt(A){return A.build!==void 0?A.build:A.init_from}function xt(A){const T=Zt.images[A];return T!==void 0?g(T,dt):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",A),null)}function Et(A){const T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"profile_COMMON":T.profile=kt(k);break}}Zt.effects[A.getAttribute("id")]=T}function kt(A){const T={surfaces:{},samplers:{}};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"newparam":Kt(k,T);break;case"technique":T.technique=v(k);break;case"extra":T.extra=ot(k);break}}return T}function Kt(A,T){const U=A.getAttribute("sid");for(let I=0,k=A.childNodes.length;I<k;I++){const ut=A.childNodes[I];if(ut.nodeType===1)switch(ut.nodeName){case"surface":T.surfaces[U]=Jt(ut);break;case"sampler2D":T.samplers[U]=de(ut);break}}}function Jt(A){const T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"init_from":T.init_from=k.textContent;break}}return T}function de(A){const T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"source":T.source=k.textContent;break}}return T}function v(A){const T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"constant":case"lambert":case"blinn":case"phong":T.type=k.nodeName,T.parameters=mt(k);break;case"extra":T.extra=ot(k);break}}return T}function mt(A){const T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":T[k.nodeName]=st(k);break;case"transparent":T[k.nodeName]={opaque:k.hasAttribute("opaque")?k.getAttribute("opaque"):"A_ONE",data:st(k)};break}}return T}function st(A){const T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"color":T[k.nodeName]=s(k.textContent);break;case"float":T[k.nodeName]=parseFloat(k.textContent);break;case"texture":T[k.nodeName]={id:k.getAttribute("texture"),extra:V(k)};break}}return T}function V(A){const T={technique:{}};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"extra":O(k,T);break}}return T}function O(A,T){for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"technique":$(k,T);break}}}function $(A,T){for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":T.technique[k.nodeName]=parseFloat(k.textContent);break;case"wrapU":case"wrapV":k.textContent.toUpperCase()==="TRUE"?T.technique[k.nodeName]=1:k.textContent.toUpperCase()==="FALSE"?T.technique[k.nodeName]=0:T.technique[k.nodeName]=parseInt(k.textContent);break;case"bump":T[k.nodeName]=b(k);break}}}function ot(A){const T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"technique":T.technique=D(k);break}}return T}function D(A){const T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"double_sided":T[k.nodeName]=parseInt(k.textContent);break;case"bump":T[k.nodeName]=b(k);break}}return T}function b(A){const T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"texture":T[k.nodeName]={id:k.getAttribute("texture"),texcoord:k.getAttribute("texcoord"),extra:V(k)};break}}return T}function G(A){return A}function rt(A){return g(Zt.effects[A],G)}function nt(A){const T={name:A.getAttribute("name")};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"instance_effect":T.url=a(k.getAttribute("url"));break}}Zt.materials[A.getAttribute("id")]=T}function at(A){let T,U=A.slice((A.lastIndexOf(".")-1>>>0)+2);switch(U=U.toLowerCase(),U){case"tga":T=ln;break;default:T=mn}return T}function wt(A){const T=rt(A.url),U=T.profile.technique;let I;switch(U.type){case"phong":case"blinn":I=new $i;break;case"lambert":I=new Qg;break;default:I=new Ar;break}I.name=A.name||"";function k(Tt,Nt=null){const Xt=T.profile.samplers[Tt.id];let Mt=null;if(Xt!==void 0){const Wt=T.profile.surfaces[Xt.source];Mt=xt(Wt.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),Mt=xt(Tt.id);if(Mt!==null){const Wt=at(Mt);if(Wt!==void 0){const Bt=Wt.load(Mt),Yt=Tt.extra;if(Yt!==void 0&&Yt.technique!==void 0&&c(Yt.technique)===!1){const jt=Yt.technique;Bt.wrapS=jt.wrapU?Fn:xn,Bt.wrapT=jt.wrapV?Fn:xn,Bt.offset.set(jt.offsetU||0,jt.offsetV||0),Bt.repeat.set(jt.repeatU||1,jt.repeatV||1)}else Bt.wrapS=Fn,Bt.wrapT=Fn;return Nt!==null&&(Bt.colorSpace=Nt),Bt}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",Mt),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",Tt.id),null}const ut=U.parameters;for(const Tt in ut){const Nt=ut[Tt];switch(Tt){case"diffuse":Nt.color&&I.color.fromArray(Nt.color),Nt.texture&&(I.map=k(Nt.texture,Ce));break;case"specular":Nt.color&&I.specular&&I.specular.fromArray(Nt.color),Nt.texture&&(I.specularMap=k(Nt.texture));break;case"bump":Nt.texture&&(I.normalMap=k(Nt.texture));break;case"ambient":Nt.texture&&(I.lightMap=k(Nt.texture,Ce));break;case"shininess":Nt.float&&I.shininess&&(I.shininess=Nt.float);break;case"emission":Nt.color&&I.emissive&&I.emissive.fromArray(Nt.color),Nt.texture&&(I.emissiveMap=k(Nt.texture,Ce));break}}ue.toWorkingColorSpace(I.color,Ce),I.specular&&ue.toWorkingColorSpace(I.specular,Ce),I.emissive&&ue.toWorkingColorSpace(I.emissive,Ce);let gt=ut.transparent,Ot=ut.transparency;if(Ot===void 0&&gt&&(Ot={float:1}),gt===void 0&&Ot&&(gt={opaque:"A_ONE",data:{color:[1,1,1,1]}}),gt&&Ot)if(gt.data.texture)I.transparent=!0;else{const Tt=gt.data.color;switch(gt.opaque){case"A_ONE":I.opacity=Tt[3]*Ot.float;break;case"RGB_ZERO":I.opacity=1-Tt[0]*Ot.float;break;case"A_ZERO":I.opacity=1-Tt[3]*Ot.float;break;case"RGB_ONE":I.opacity=Tt[0]*Ot.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',gt.opaque)}I.opacity<1&&(I.transparent=!0)}if(U.extra!==void 0&&U.extra.technique!==void 0){const Tt=U.extra.technique;for(const Nt in Tt){const Xt=Tt[Nt];switch(Nt){case"double_sided":I.side=Xt===1?Sn:zn;break;case"bump":I.normalMap=k(Xt.texture),I.normalScale=new te(1,1);break}}}return I}function yt(A){return g(Zt.materials[A],wt)}function At(A){const T={name:A.getAttribute("name")};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"optics":T.optics=oe(k);break}}Zt.cameras[A.getAttribute("id")]=T}function oe(A){for(let T=0;T<A.childNodes.length;T++){const U=A.childNodes[T];switch(U.nodeName){case"technique_common":return bt(U)}}return{}}function bt(A){const T={};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];switch(I.nodeName){case"perspective":case"orthographic":T.technique=I.nodeName,T.parameters=Ut(I);break}}return T}function Ut(A){const T={};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];switch(I.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":T[I.nodeName]=parseFloat(I.textContent);break}}return T}function Dt(A){let T;switch(A.optics.technique){case"perspective":T=new We(A.optics.parameters.yfov,A.optics.parameters.aspect_ratio,A.optics.parameters.znear,A.optics.parameters.zfar);break;case"orthographic":let U=A.optics.parameters.ymag,I=A.optics.parameters.xmag;const k=A.optics.parameters.aspect_ratio;I=I===void 0?U*k:I,U=U===void 0?I/k:U,I*=.5,U*=.5,T=new Io(-I,I,U,-U,A.optics.parameters.znear,A.optics.parameters.zfar);break;default:T=new We;break}return T.name=A.name||"",T}function qt(A){const T=Zt.cameras[A];return T!==void 0?g(T,Dt):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",A),null)}function Ft(A){let T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"technique_common":T=Qt(k);break}}Zt.lights[A.getAttribute("id")]=T}function Qt(A){const T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"directional":case"point":case"spot":case"ambient":T.technique=k.nodeName,T.parameters=ee(k)}}return T}function ee(A){const T={};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"color":const ut=s(k.textContent);T.color=new ae().fromArray(ut),ue.toWorkingColorSpace(T.color,Ce);break;case"falloff_angle":T.falloffAngle=parseFloat(k.textContent);break;case"quadratic_attenuation":const gt=parseFloat(k.textContent);T.distance=gt?Math.sqrt(1/gt):0;break}}return T}function ve(A){let T;switch(A.technique){case"directional":T=new dh;break;case"point":T=new p_;break;case"spot":T=new d_;break;case"ambient":T=new fh;break}return A.parameters.color&&T.color.copy(A.parameters.color),A.parameters.distance&&(T.distance=A.parameters.distance),T}function et(A){const T=Zt.lights[A];return T!==void 0?g(T,ve):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",A),null)}function Rt(A){const T={name:A.getAttribute("name"),sources:{},vertices:{},primitives:[]},U=n(A,"mesh")[0];if(U!==void 0){for(let I=0;I<U.childNodes.length;I++){const k=U.childNodes[I];if(k.nodeType!==1)continue;const ut=k.getAttribute("id");switch(k.nodeName){case"source":T.sources[ut]=pt(k);break;case"vertices":T.vertices=vt(k);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",k.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":T.primitives.push(Ct(k));break;default:console.log(k)}}Zt.geometries[A.getAttribute("id")]=T}}function pt(A){const T={array:[],stride:3};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType===1)switch(I.nodeName){case"float_array":T.array=s(I.textContent);break;case"Name_array":T.array=r(I.textContent);break;case"technique_common":const k=n(I,"accessor")[0];k!==void 0&&(T.stride=parseInt(k.getAttribute("stride")));break}}return T}function vt(A){const T={};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];I.nodeType===1&&(T[I.getAttribute("semantic")]=a(I.getAttribute("source")))}return T}function Ct(A){const T={type:A.nodeName,material:A.getAttribute("material"),count:parseInt(A.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let U=0,I=A.childNodes.length;U<I;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const ut=a(k.getAttribute("source")),gt=k.getAttribute("semantic"),Ot=parseInt(k.getAttribute("offset")),Tt=parseInt(k.getAttribute("set")),Nt=Tt>0?gt+Tt:gt;T.inputs[Nt]={id:ut,offset:Ot},T.stride=Math.max(T.stride,Ot+1),gt==="TEXCOORD"&&(T.hasUV=!0);break;case"vcount":T.vcount=o(k.textContent);break;case"p":T.p=o(k.textContent);break}}return T}function It(A){const T={};for(let U=0;U<A.length;U++){const I=A[U];T[I.type]===void 0&&(T[I.type]=[]),T[I.type].push(I)}return T}function re(A){let T=0;for(let U=0,I=A.length;U<I;U++)A[U].hasUV===!0&&T++;T>0&&T<A.length&&(A.uvsNeedsFix=!0)}function Ae(A){const T={},U=A.sources,I=A.vertices,k=A.primitives;if(k.length===0)return{};const ut=It(k);for(const gt in ut){const Ot=ut[gt];re(Ot),T[gt]=Oe(Ot,U,I)}return T}function Oe(A,T,U){const I={},k={array:[],stride:0},ut={array:[],stride:0},gt={array:[],stride:0},Ot={array:[],stride:0},Tt={array:[],stride:0},Nt={array:[],stride:4},Xt={array:[],stride:4},Mt=new ze,Wt=[];let Bt=0;for(let Yt=0;Yt<A.length;Yt++){const jt=A[Yt],Re=jt.inputs;let Se=0;switch(jt.type){case"lines":case"linestrips":Se=jt.count*2;break;case"triangles":Se=jt.count*3;break;case"polylist":for(let ge=0;ge<jt.count;ge++){const _e=jt.vcount[ge];switch(_e){case 3:Se+=3;break;case 4:Se+=6;break;default:Se+=(_e-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",jt.type)}Mt.addGroup(Bt,Se,Yt),Bt+=Se,jt.material&&Wt.push(jt.material);for(const ge in Re){const _e=Re[ge];switch(ge){case"VERTEX":for(const An in U){const $e=U[An];switch(An){case"POSITION":const Ai=k.array.length;if(le(jt,T[$e],_e.offset,k.array),k.stride=T[$e].stride,T.skinWeights&&T.skinIndices&&(le(jt,T.skinIndices,_e.offset,Nt.array),le(jt,T.skinWeights,_e.offset,Xt.array)),jt.hasUV===!1&&A.uvsNeedsFix===!0){const Th=(k.array.length-Ai)/k.stride;for(let Wo=0;Wo<Th;Wo++)gt.array.push(0,0)}break;case"NORMAL":le(jt,T[$e],_e.offset,ut.array),ut.stride=T[$e].stride;break;case"COLOR":le(jt,T[$e],_e.offset,Tt.array),Tt.stride=T[$e].stride;break;case"TEXCOORD":le(jt,T[$e],_e.offset,gt.array),gt.stride=T[$e].stride;break;case"TEXCOORD1":le(jt,T[$e],_e.offset,Ot.array),gt.stride=T[$e].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',An)}}break;case"NORMAL":le(jt,T[_e.id],_e.offset,ut.array),ut.stride=T[_e.id].stride;break;case"COLOR":le(jt,T[_e.id],_e.offset,Tt.array,!0),Tt.stride=T[_e.id].stride;break;case"TEXCOORD":le(jt,T[_e.id],_e.offset,gt.array),gt.stride=T[_e.id].stride;break;case"TEXCOORD1":le(jt,T[_e.id],_e.offset,Ot.array),Ot.stride=T[_e.id].stride;break}}}return k.array.length>0&&Mt.setAttribute("position",new ye(k.array,k.stride)),ut.array.length>0&&Mt.setAttribute("normal",new ye(ut.array,ut.stride)),Tt.array.length>0&&Mt.setAttribute("color",new ye(Tt.array,Tt.stride)),gt.array.length>0&&Mt.setAttribute("uv",new ye(gt.array,gt.stride)),Ot.array.length>0&&Mt.setAttribute("uv1",new ye(Ot.array,Ot.stride)),Nt.array.length>0&&Mt.setAttribute("skinIndex",new ye(Nt.array,Nt.stride)),Xt.array.length>0&&Mt.setAttribute("skinWeight",new ye(Xt.array,Xt.stride)),I.data=Mt,I.type=A[0].type,I.materialKeys=Wt,I}function le(A,T,U,I,k=!1){const ut=A.p,gt=A.stride,Ot=A.vcount;function Tt(Mt){let Wt=ut[Mt+U]*Xt;const Bt=Wt+Xt;for(;Wt<Bt;Wt++)I.push(Nt[Wt]);if(k){const Yt=I.length-Xt-1;oi.setRGB(I[Yt+0],I[Yt+1],I[Yt+2],Ce),I[Yt+0]=oi.r,I[Yt+1]=oi.g,I[Yt+2]=oi.b}}const Nt=T.array,Xt=T.stride;if(A.vcount!==void 0){let Mt=0;for(let Wt=0,Bt=Ot.length;Wt<Bt;Wt++){const Yt=Ot[Wt];if(Yt===4){const jt=Mt+gt*0,Re=Mt+gt*1,Se=Mt+gt*2,ge=Mt+gt*3;Tt(jt),Tt(Re),Tt(ge),Tt(Re),Tt(Se),Tt(ge)}else if(Yt===3){const jt=Mt+gt*0,Re=Mt+gt*1,Se=Mt+gt*2;Tt(jt),Tt(Re),Tt(Se)}else if(Yt>4)for(let jt=1,Re=Yt-2;jt<=Re;jt++){const Se=Mt+gt*0,ge=Mt+gt*jt,_e=Mt+gt*(jt+1);Tt(Se),Tt(ge),Tt(_e)}Mt+=gt*Yt}}else for(let Mt=0,Wt=ut.length;Mt<Wt;Mt+=gt)Tt(Mt)}function Ze(A){return g(Zt.geometries[A],Ae)}function fn(A){const T={name:A.getAttribute("name")||"",joints:{},links:[]};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType===1)switch(I.nodeName){case"technique_common":Tn(I,T);break}}Zt.kinematicsModels[A.getAttribute("id")]=T}function Nr(A){return A.build!==void 0?A.build:A}function Ur(A){return g(Zt.kinematicsModels[A],Nr)}function Tn(A,T){for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType===1)switch(I.nodeName){case"joint":T.joints[I.getAttribute("sid")]=hr(I);break;case"link":T.links.push(ur(I));break}}}function hr(A){let T;for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType===1)switch(I.nodeName){case"prismatic":case"revolute":T=Fr(I);break}}return T}function Fr(A){const T={sid:A.getAttribute("sid"),name:A.getAttribute("name")||"",axis:new K,limits:{min:0,max:0},type:A.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType===1)switch(I.nodeName){case"axis":const k=s(I.textContent);T.axis.fromArray(k);break;case"limits":const ut=I.getElementsByTagName("max")[0],gt=I.getElementsByTagName("min")[0];T.limits.max=parseFloat(ut.textContent),T.limits.min=parseFloat(gt.textContent);break}}return T.limits.min>=T.limits.max&&(T.static=!0),T.middlePosition=(T.limits.min+T.limits.max)/2,T}function ur(A){const T={sid:A.getAttribute("sid"),name:A.getAttribute("name")||"",attachments:[],transforms:[]};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType===1)switch(I.nodeName){case"attachment_full":T.attachments.push(wi(I));break;case"matrix":case"translate":case"rotate":T.transforms.push(dr(I));break}}return T}function wi(A){const T={joint:A.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType===1)switch(I.nodeName){case"link":T.links.push(ur(I));break;case"matrix":case"translate":case"rotate":T.transforms.push(dr(I));break}}return T}function dr(A){const T={type:A.nodeName},U=s(A.textContent);switch(T.type){case"matrix":T.obj=new ie,T.obj.fromArray(U).transpose();break;case"translate":T.obj=new K,T.obj.fromArray(U);break;case"rotate":T.obj=new K,T.obj.fromArray(U),T.angle=ti.degToRad(U[3]);break}return T}function Ti(A){const T={name:A.getAttribute("name")||"",rigidBodies:{}};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType===1)switch(I.nodeName){case"rigid_body":T.rigidBodies[I.getAttribute("name")]={},Or(I,T.rigidBodies[I.getAttribute("name")]);break}}Zt.physicsModels[A.getAttribute("id")]=T}function Or(A,T){for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType===1)switch(I.nodeName){case"technique_common":kr(I,T);break}}}function kr(A,T){for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType===1)switch(I.nodeName){case"inertia":T.inertia=s(I.textContent);break;case"mass":T.mass=s(I.textContent)[0];break}}}function qs(A){const T={bindJointAxis:[]};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType===1)switch(I.nodeName){case"bind_joint_axis":T.bindJointAxis.push(Ys(I));break}}Zt.kinematicsScenes[a(A.getAttribute("url"))]=T}function Ys(A){const T={target:A.getAttribute("target").split("/").pop()};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType===1)switch(I.nodeName){case"axis":const k=I.getElementsByTagName("param")[0];T.axis=k.textContent;const ut=T.axis.split("inst_").pop().split("axis")[0];T.jointIndex=ut.substring(0,ut.length-1);break}}return T}function Zs(A){return A.build!==void 0?A.build:A}function F(A){return g(Zt.kinematicsScenes[A],Zs)}function it(){const A=Object.keys(Zt.kinematicsModels)[0],T=Object.keys(Zt.kinematicsScenes)[0],U=Object.keys(Zt.visualScenes)[0];if(A===void 0||T===void 0)return;const I=Ur(A),k=F(T),ut=pe(U),gt=k.bindJointAxis,Ot={};for(let Xt=0,Mt=gt.length;Xt<Mt;Xt++){const Wt=gt[Xt],Bt=ne.querySelector('[sid="'+Wt.target+'"]');if(Bt){const Yt=Bt.parentElement;Tt(Wt.jointIndex,Yt)}}function Tt(Xt,Mt){const Wt=Mt.getAttribute("name"),Bt=I.joints[Xt];ut.traverse(function(Yt){Yt.name===Wt&&(Ot[Xt]={object:Yt,transforms:ct(Mt),joint:Bt,position:Bt.zeroPosition})})}const Nt=new ie;Go={joints:I&&I.joints,getJointValue:function(Xt){const Mt=Ot[Xt];if(Mt)return Mt.position;console.warn("THREE.ColladaLoader: Joint "+Xt+" doesn't exist.")},setJointValue:function(Xt,Mt){const Wt=Ot[Xt];if(Wt){const Bt=Wt.joint;if(Mt>Bt.limits.max||Mt<Bt.limits.min)console.warn("THREE.ColladaLoader: Joint "+Xt+" value "+Mt+" outside of limits (min: "+Bt.limits.min+", max: "+Bt.limits.max+").");else if(Bt.static)console.warn("THREE.ColladaLoader: Joint "+Xt+" is static.");else{const Yt=Wt.object,jt=Bt.axis,Re=Wt.transforms;tt.identity();for(let Se=0;Se<Re.length;Se++){const ge=Re[Se];if(ge.sid&&ge.sid.indexOf(Xt)!==-1)switch(Bt.type){case"revolute":tt.multiply(Nt.makeRotationAxis(jt,ti.degToRad(Mt)));break;case"prismatic":tt.multiply(Nt.makeTranslation(jt.x*Mt,jt.y*Mt,jt.z*Mt));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Bt.type);break}else switch(ge.type){case"matrix":tt.multiply(ge.obj);break;case"translate":tt.multiply(Nt.makeTranslation(ge.obj.x,ge.obj.y,ge.obj.z));break;case"scale":tt.scale(ge.obj);break;case"rotate":tt.multiply(Nt.makeRotationAxis(ge.obj,ge.angle));break}}Yt.matrix.copy(tt),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Ot[Xt].position=Mt}}else console.log("THREE.ColladaLoader: "+Xt+" does not exist.")}}}function ct(A){const T=[],U=ne.querySelector('[id="'+A.id+'"]');for(let I=0;I<U.childNodes.length;I++){const k=U.childNodes[I];if(k.nodeType!==1)continue;let ut,gt;switch(k.nodeName){case"matrix":ut=s(k.textContent);const Ot=new ie().fromArray(ut).transpose();T.push({sid:k.getAttribute("sid"),type:k.nodeName,obj:Ot});break;case"translate":case"scale":ut=s(k.textContent),gt=new K().fromArray(ut),T.push({sid:k.getAttribute("sid"),type:k.nodeName,obj:gt});break;case"rotate":ut=s(k.textContent),gt=new K().fromArray(ut);const Tt=ti.degToRad(ut[3]);T.push({sid:k.getAttribute("sid"),type:k.nodeName,obj:gt,angle:Tt});break}}return T}function ht(A){const T=A.getElementsByTagName("node");for(let U=0;U<T.length;U++){const I=T[U];I.hasAttribute("id")===!1&&I.setAttribute("id",l())}}const tt=new ie,St=new K;function Lt(A){const T={name:A.getAttribute("name")||"",type:A.getAttribute("type"),id:A.getAttribute("id"),sid:A.getAttribute("sid"),matrix:new ie,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];if(I.nodeType!==1)continue;let k;switch(I.nodeName){case"node":T.nodes.push(I.getAttribute("id")),Lt(I);break;case"instance_camera":T.instanceCameras.push(a(I.getAttribute("url")));break;case"instance_controller":T.instanceControllers.push(zt(I));break;case"instance_light":T.instanceLights.push(a(I.getAttribute("url")));break;case"instance_geometry":T.instanceGeometries.push(zt(I));break;case"instance_node":T.instanceNodes.push(a(I.getAttribute("url")));break;case"matrix":k=s(I.textContent),T.matrix.multiply(tt.fromArray(k).transpose()),T.transforms[I.getAttribute("sid")]=I.nodeName;break;case"translate":k=s(I.textContent),St.fromArray(k),T.matrix.multiply(tt.makeTranslation(St.x,St.y,St.z)),T.transforms[I.getAttribute("sid")]=I.nodeName;break;case"rotate":k=s(I.textContent);const ut=ti.degToRad(k[3]);T.matrix.multiply(tt.makeRotationAxis(St.fromArray(k),ut)),T.transforms[I.getAttribute("sid")]=I.nodeName;break;case"scale":k=s(I.textContent),T.matrix.scale(St.fromArray(k)),T.transforms[I.getAttribute("sid")]=I.nodeName;break;case"extra":break;default:console.log(I)}}return Ee(T.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",T.id):Zt.nodes[T.id]=T,T}function zt(A){const T={id:a(A.getAttribute("url")),materials:{},skeletons:[]};for(let U=0;U<A.childNodes.length;U++){const I=A.childNodes[U];switch(I.nodeName){case"bind_material":const k=I.getElementsByTagName("instance_material");for(let ut=0;ut<k.length;ut++){const gt=k[ut],Ot=gt.getAttribute("symbol"),Tt=gt.getAttribute("target");T.materials[Ot]=a(Tt)}break;case"skeleton":T.skeletons.push(a(I.textContent));break}}return T}function Vt(A,T){const U=[],I=[];let k,ut,gt;for(k=0;k<A.length;k++){const Nt=A[k];let Xt;if(Ee(Nt))Xt=Le(Nt),$t(Xt,T,U);else if(pn(Nt)){const Wt=Zt.visualScenes[Nt].children;for(let Bt=0;Bt<Wt.length;Bt++){const Yt=Wt[Bt];if(Yt.type==="JOINT"){const jt=Le(Yt.id);$t(jt,T,U)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Nt)}for(k=0;k<T.length;k++)for(ut=0;ut<U.length;ut++)if(gt=U[ut],gt.bone.name===T[k].name){I[k]=gt,gt.processed=!0;break}for(k=0;k<U.length;k++)gt=U[k],gt.processed===!1&&(I.push(gt),gt.processed=!0);const Ot=[],Tt=[];for(k=0;k<I.length;k++)gt=I[k],Ot.push(gt.bone),Tt.push(gt.boneInverse);return new Uo(Ot,Tt)}function $t(A,T,U){A.traverse(function(I){if(I.isBone===!0){let k;for(let ut=0;ut<T.length;ut++){const gt=T[ut];if(gt.name===I.name){k=gt.boneInverse;break}}k===void 0&&(k=new ie),U.push({bone:I,boneInverse:k,processed:!1})}})}function se(A){const T=[],U=A.matrix,I=A.nodes,k=A.type,ut=A.instanceCameras,gt=A.instanceControllers,Ot=A.instanceLights,Tt=A.instanceGeometries,Nt=A.instanceNodes;for(let Mt=0,Wt=I.length;Mt<Wt;Mt++)T.push(Le(I[Mt]));for(let Mt=0,Wt=ut.length;Mt<Wt;Mt++){const Bt=qt(ut[Mt]);Bt!==null&&T.push(Bt.clone())}for(let Mt=0,Wt=gt.length;Mt<Wt;Mt++){const Bt=gt[Mt],Yt=Y(Bt.id),jt=Ze(Yt.id),Re=Me(jt,Bt.materials),Se=Bt.skeletons,ge=Yt.skin.joints,_e=Vt(Se,ge);for(let An=0,$e=Re.length;An<$e;An++){const Ai=Re[An];Ai.isSkinnedMesh&&(Ai.bind(_e,Yt.skin.bindMatrix),Ai.normalizeSkinWeights()),T.push(Ai)}}for(let Mt=0,Wt=Ot.length;Mt<Wt;Mt++){const Bt=et(Ot[Mt]);Bt!==null&&T.push(Bt.clone())}for(let Mt=0,Wt=Tt.length;Mt<Wt;Mt++){const Bt=Tt[Mt],Yt=Ze(Bt.id),jt=Me(Yt,Bt.materials);for(let Re=0,Se=jt.length;Re<Se;Re++)T.push(jt[Re])}for(let Mt=0,Wt=Nt.length;Mt<Wt;Mt++)T.push(Le(Nt[Mt]).clone());let Xt;if(I.length===0&&T.length===1)Xt=T[0];else{Xt=k==="JOINT"?new ih:new _i;for(let Mt=0;Mt<T.length;Mt++)Xt.add(T[Mt])}return Xt.name=k==="JOINT"?A.sid:A.name,Xt.matrix.copy(U),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt}const Ht=new Ar({name:Hn.DEFAULT_MATERIAL_NAME,color:16711935});function fe(A,T){const U=[];for(let I=0,k=A.length;I<k;I++){const ut=T[A[I]];ut===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",A[I]),U.push(Ht)):U.push(yt(ut))}return U}function Me(A,T){const U=[];for(const I in A){const k=A[I],ut=fe(k.materialKeys,T);if(ut.length===0&&(I==="lines"||I==="linestrips"?ut.push(new xi):ut.push(new $i)),I==="lines"||I==="linestrips")for(let Nt=0,Xt=ut.length;Nt<Xt;Nt++){const Mt=ut[Nt];if(Mt.isMeshPhongMaterial===!0||Mt.isMeshLambertMaterial===!0){const Wt=new xi;Wt.color.copy(Mt.color),Wt.opacity=Mt.opacity,Wt.transparent=Mt.transparent,ut[Nt]=Wt}}const gt=k.data.attributes.skinIndex!==void 0,Ot=ut.length===1?ut[0]:ut;let Tt;switch(I){case"lines":Tt=new Us(k.data,Ot);break;case"linestrips":Tt=new sh(k.data,Ot);break;case"triangles":case"polylist":gt?Tt=new Zg(k.data,Ot):Tt=new Ie(k.data,Ot);break}U.push(Tt)}return U}function Ee(A){return Zt.nodes[A]!==void 0}function Le(A){return g(Zt.nodes[A],se)}function me(A){const T={name:A.getAttribute("name"),children:[]};ht(A);const U=n(A,"node");for(let I=0;I<U.length;I++)T.children.push(Lt(U[I]));Zt.visualScenes[A.getAttribute("id")]=T}function Gt(A){const T=new _i;T.name=A.name;const U=A.children;for(let I=0;I<U.length;I++){const k=U[I];T.add(Le(k.id))}return T}function pn(A){return Zt.visualScenes[A]!==void 0}function pe(A){return g(Zt.visualScenes[A],Gt)}function en(A){const T=n(A,"instance_visual_scene")[0];return pe(a(T.getAttribute("url")))}function Gn(){const A=Zt.clips;if(c(A)===!0){if(c(Zt.animations)===!1){const T=[];for(const U in Zt.animations){const I=M(U);for(let k=0,ut=I.length;k<ut;k++)T.push(I[k])}Br.push(new oc("default",-1,T))}}else for(const T in A)Br.push(J(T))}function Xe(A){let T="";const U=[A];for(;U.length;){const I=U.shift();I.nodeType===Node.TEXT_NODE?T+=I.textContent:(T+=`
`,U.push.apply(U,I.childNodes))}return T.trim()}if(t.length===0)return{scene:new nh};const Wn=new DOMParser().parseFromString(t,"application/xml"),ne=n(Wn,"COLLADA")[0],Ke=Wn.getElementsByTagName("parsererror")[0];if(Ke!==void 0){const A=n(Ke,"div")[0];let T;return A?T=A.textContent:T=Xe(Ke),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,T),null}const ai=ne.getAttribute("version");console.debug("THREE.ColladaLoader: File version",ai);const je=d(n(ne,"asset")[0]),mn=new uh(this.manager);mn.setPath(this.resourcePath||e).setCrossOrigin(this.crossOrigin);let ln;yc&&(ln=new yc(this.manager),ln.setPath(this.resourcePath||e));const oi=new ae,Br=[];let Go={},wh=0;const Zt={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};u(ne,"library_animations","animation",m),u(ne,"library_animation_clips","animation_clip",W),u(ne,"library_controllers","controller",Q),u(ne,"library_images","image",lt),u(ne,"library_effects","effect",Et),u(ne,"library_materials","material",nt),u(ne,"library_cameras","camera",At),u(ne,"library_lights","light",Ft),u(ne,"library_geometries","geometry",Rt),u(ne,"library_nodes","node",Lt),u(ne,"library_visual_scenes","visual_scene",me),u(ne,"library_kinematics_models","kinematics_model",fn),u(ne,"library_physics_models","physics_model",Ti),u(ne,"scene","instance_kinematics_scene",qs),_(Zt.animations,E),_(Zt.clips,q),_(Zt.controllers,_t),_(Zt.images,dt),_(Zt.effects,G),_(Zt.materials,wt),_(Zt.cameras,Dt),_(Zt.lights,ve),_(Zt.geometries,Ae),_(Zt.visualScenes,Gt),Gn(),it();const zr=en(n(ne,"scene")[0]);return zr.animations=Br,je.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),zr.rotation.set(-Math.PI/2,0,0)),zr.scale.multiplyScalar(je.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Br},kinematics:Go,library:Zt,scene:zr}}}const bc=new K,y0=new tn,bs=new ie,$n=new ie,Ms=new yn,Ss=new K(1,1,1),Es=new K;class js extends Pe{constructor(...t){super(...t),this.urdfNode=null,this.urdfName=""}copy(t,e){return super.copy(t,e),this.urdfNode=t.urdfNode,this.urdfName=t.urdfName,this}}class b0 extends js{constructor(...t){super(...t),this.isURDFCollider=!0,this.type="URDFCollider"}}class M0 extends js{constructor(...t){super(...t),this.isURDFVisual=!0,this.type="URDFVisual"}}class yh extends js{constructor(...t){super(...t),this.isURDFLink=!0,this.type="URDFLink"}}class bh extends js{get jointType(){return this._jointType}set jointType(t){if(this.jointType!==t)switch(this._jointType=t,this.matrixWorldNeedsUpdate=!0,t){case"fixed":this.jointValue=[];break;case"continuous":case"revolute":case"prismatic":this.jointValue=new Array(1).fill(0);break;case"planar":this.jointValue=new Array(3).fill(0),this.axis=new K(0,0,1);break;case"floating":this.jointValue=new Array(6).fill(0);break}}get angle(){return this.jointValue[0]}constructor(...t){super(...t),this.isURDFJoint=!0,this.type="URDFJoint",this.jointValue=null,this.jointType="fixed",this.axis=new K(1,0,0),this.limit={lower:0,upper:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(t,e){return super.copy(t,e),this.jointType=t.jointType,this.axis=t.axis.clone(),this.limit.lower=t.limit.lower,this.limit.upper=t.limit.upper,this.ignoreLimits=!1,this.jointValue=[...t.jointValue],this.origPosition=t.origPosition?t.origPosition.clone():null,this.origQuaternion=t.origQuaternion?t.origQuaternion.clone():null,this.mimicJoints=[...t.mimicJoints],this}setJointValue(...t){t=t.map(n=>n===null?null:parseFloat(n)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let e=!1;switch(this.mimicJoints.forEach(n=>{e=n.updateFromMimickedJoint(...t)||e}),this.jointType){case"fixed":return e;case"continuous":case"revolute":{let n=t[0];return n==null||n===this.jointValue[0]?e:(!this.ignoreLimits&&this.jointType==="revolute"&&(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.quaternion.setFromAxisAngle(this.axis,n).premultiply(this.origQuaternion),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):e)}case"prismatic":{let n=t[0];return n==null||n===this.jointValue[0]?e:(this.ignoreLimits||(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.position.copy(this.origPosition),bc.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(bc,n),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):e)}case"floating":return this.jointValue.every((n,r)=>t[r]===n||t[r]===null)?e:(this.jointValue[0]=t[0]!==null?t[0]:this.jointValue[0],this.jointValue[1]=t[1]!==null?t[1]:this.jointValue[1],this.jointValue[2]=t[2]!==null?t[2]:this.jointValue[2],this.jointValue[3]=t[3]!==null?t[3]:this.jointValue[3],this.jointValue[4]=t[4]!==null?t[4]:this.jointValue[4],this.jointValue[5]=t[5]!==null?t[5]:this.jointValue[5],$n.compose(this.origPosition,this.origQuaternion,Ss),Ms.setFromEuler(y0.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],"XYZ")),Es.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),bs.compose(Es,Ms,Ss),$n.premultiply(bs),this.position.setFromMatrixPosition($n),this.rotation.setFromRotationMatrix($n),this.matrixWorldNeedsUpdate=!0,!0);case"planar":return this.jointValue.every((n,r)=>t[r]===n||t[r]===null)?e:(this.jointValue[0]=t[0]!==null?t[0]:this.jointValue[0],this.jointValue[1]=t[1]!==null?t[1]:this.jointValue[1],this.jointValue[2]=t[2]!==null?t[2]:this.jointValue[2],$n.compose(this.origPosition,this.origQuaternion,Ss),Ms.setFromAxisAngle(this.axis,this.jointValue[2]),Es.set(this.jointValue[0],this.jointValue[1],0),bs.compose(Es,Ms,Ss),$n.premultiply(bs),this.position.setFromMatrixPosition($n),this.rotation.setFromRotationMatrix($n),this.matrixWorldNeedsUpdate=!0,!0)}return e}}class Mc extends bh{constructor(...t){super(...t),this.type="URDFMimicJoint",this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...t){const e=t.map(n=>n*this.multiplier+this.offset);return super.setJointValue(...e)}copy(t,e){return super.copy(t,e),this.mimicJoint=t.mimicJoint,this.offset=t.offset,this.multiplier=t.multiplier,this}}class S0 extends yh{constructor(...t){super(...t),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(t,e){super.copy(t,e),this.urdfRobotNode=t.urdfRobotNode,this.robotName=t.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(n=>{n.isURDFJoint&&n.urdfName in t.joints&&(this.joints[n.urdfName]=n),n.isURDFLink&&n.urdfName in t.links&&(this.links[n.urdfName]=n),n.isURDFCollider&&n.urdfName in t.colliders&&(this.colliders[n.urdfName]=n),n.isURDFVisual&&n.urdfName in t.visual&&(this.visual[n.urdfName]=n)});for(const n in this.joints)this.joints[n].mimicJoints=this.joints[n].mimicJoints.map(r=>this.joints[r.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(t){return this.frames[t]}setJointValue(t,...e){const n=this.joints[t];return n?n.setJointValue(...e):!1}setJointValues(t){let e=!1;for(const n in t){const r=t[n];Array.isArray(r)?e=this.setJointValue(n,...r)||e:e=this.setJointValue(n,r)||e}return e}}const Ua=new yn,Sc=new tn;function Hi(i){return i?i.trim().split(/\s+/g).map(t=>parseFloat(t)):[0,0,0]}function Ec(i,t,e=!1){e||i.rotation.set(0,0,0),Sc.set(t[0],t[1],t[2],"ZYX"),Ua.setFromEuler(Sc),Ua.multiply(i.quaternion),i.quaternion.copy(Ua)}class E0{constructor(t){this.manager=t||hh,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions={}}loadAsync(t){return new Promise((e,n)=>{this.load(t,e,null,n)})}load(t,e,n,r){const s=this.manager,o=ph.extractUrlBase(t),a=this.manager.resolveURL(t);s.itemStart(a),fetch(a,this.fetchOptions).then(l=>{if(l.ok)return n&&n(null),l.text();throw new Error(`URDFLoader: Failed to load url '${a}' with error code ${l.status} : ${l.statusText}.`)}).then(l=>{const c=this.parse(l,this.workingPath||o);e(c),s.itemEnd(a)}).catch(l=>{r?r(l):console.error("URDFLoader: Error loading file.",l),s.itemError(a),s.itemEnd(a)})}parse(t,e=this.workingPath){const n=this.packages,r=this.loadMeshCb,s=this.parseVisual,o=this.parseCollision,a=this.manager,l={},c={},d={};function f(x){if(!/^package:\/\//.test(x))return e?e+x:x;const[E,M]=x.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof n=="string")return n.endsWith(E)?n+"/"+M:n+"/"+E+"/"+M;if(n instanceof Function)return n(E)+"/"+M;if(typeof n=="object")return E in n?n[E]+"/"+M:(console.error(`URDFLoader : ${E} not found in provided package list.`),null)}function p(x){let E;x instanceof Document?E=[...x.children]:x instanceof Element?E=[x]:E=[...new DOMParser().parseFromString(x,"text/xml").children];const M=E.filter(C=>C.nodeName==="robot").pop();return u(M)}function u(x){const E=[...x.children],M=E.filter(B=>B.nodeName.toLowerCase()==="link"),C=E.filter(B=>B.nodeName.toLowerCase()==="joint"),L=E.filter(B=>B.nodeName.toLowerCase()==="material"),P=new S0;P.robotName=x.getAttribute("name"),P.urdfRobotNode=x,L.forEach(B=>{const R=B.getAttribute("name");d[R]=m(B)});const N={},S={};M.forEach(B=>{const R=B.getAttribute("name"),z=x.querySelector(`child[link="${R}"]`)===null;l[R]=g(B,N,S,z?P:null)}),C.forEach(B=>{const R=B.getAttribute("name");c[R]=_(B)}),P.joints=c,P.links=l,P.colliders=S,P.visual=N;const w=Object.values(c);return w.forEach(B=>{B instanceof Mc&&c[B.mimicJoint].mimicJoints.push(B)}),w.forEach(B=>{const R=new Set,z=y=>{if(R.has(y))throw new Error("URDFLoader: Detected an infinite loop of mimic joints.");R.add(y),y.mimicJoints.forEach(H=>{z(H)})};z(B)}),P.frames={...S,...N,...l,...c},P}function _(x){const E=[...x.children],M=x.getAttribute("type");let C;const L=E.find(R=>R.nodeName.toLowerCase()==="mimic");L?(C=new Mc,C.mimicJoint=L.getAttribute("joint"),C.multiplier=parseFloat(L.getAttribute("multiplier")||1),C.offset=parseFloat(L.getAttribute("offset")||0)):C=new bh,C.urdfNode=x,C.name=x.getAttribute("name"),C.urdfName=C.name,C.jointType=M;let P=null,N=null,S=[0,0,0],w=[0,0,0];E.forEach(R=>{const z=R.nodeName.toLowerCase();z==="origin"?(S=Hi(R.getAttribute("xyz")),w=Hi(R.getAttribute("rpy"))):z==="child"?N=l[R.getAttribute("link")]:z==="parent"?P=l[R.getAttribute("link")]:z==="limit"&&(C.limit.lower=parseFloat(R.getAttribute("lower")||C.limit.lower),C.limit.upper=parseFloat(R.getAttribute("upper")||C.limit.upper))}),P.add(C),C.add(N),Ec(C,w),C.position.set(S[0],S[1],S[2]);const B=E.filter(R=>R.nodeName.toLowerCase()==="axis")[0];if(B){const R=B.getAttribute("xyz").split(/\s+/g).map(z=>parseFloat(z));C.axis=new K(R[0],R[1],R[2]),C.axis.normalize()}return C}function g(x,E,M,C=null){C===null&&(C=new yh);const L=[...x.children];return C.name=x.getAttribute("name"),C.urdfName=C.name,C.urdfNode=x,s&&L.filter(N=>N.nodeName.toLowerCase()==="visual").forEach(N=>{const S=h(N,d);if(C.add(S),N.hasAttribute("name")){const w=N.getAttribute("name");S.name=w,S.urdfName=w,E[w]=S}}),o&&L.filter(N=>N.nodeName.toLowerCase()==="collision").forEach(N=>{const S=h(N);if(C.add(S),N.hasAttribute("name")){const w=N.getAttribute("name");S.name=w,S.urdfName=w,M[w]=S}}),C}function m(x){const E=[...x.children],M=new $i;return M.name=x.getAttribute("name")||"",E.forEach(C=>{const L=C.nodeName.toLowerCase();if(L==="color"){const P=C.getAttribute("rgba").split(/\s/g).map(N=>parseFloat(N));M.color.setRGB(P[0],P[1],P[2]),M.opacity=P[3],M.transparent=P[3]<1,M.depthWrite=!M.transparent}else if(L==="texture"){const P=C.getAttribute("filename");if(P){const N=new uh(a),S=f(P);M.map=N.load(S),M.map.colorSpace=Ce}}}),M}function h(x,E={}){const M=x.nodeName.toLowerCase()==="collision",C=[...x.children];let L=null;const P=C.filter(S=>S.nodeName.toLowerCase()==="material")[0];if(P){const S=P.getAttribute("name");S&&S in E?L=E[S]:L=m(P)}else L=new $i;const N=M?new b0:new M0;return N.urdfNode=x,C.forEach(S=>{const w=S.nodeName.toLowerCase();if(w==="geometry"){const B=S.children[0].nodeName.toLowerCase();if(B==="mesh"){const R=S.children[0].getAttribute("filename"),z=f(R);if(z!==null){const y=S.children[0].getAttribute("scale");if(y){const H=Hi(y);N.scale.set(H[0],H[1],H[2])}r(z,a,(H,W)=>{W?console.error("URDFLoader: Error loading mesh.",W):H&&(H instanceof Ie&&(H.material=L),H.position.set(0,0,0),H.quaternion.identity(),N.add(H))})}}else if(B==="box"){const R=new Ie;R.geometry=new Ei(1,1,1),R.material=L;const z=Hi(S.children[0].getAttribute("size"));R.scale.set(z[0],z[1],z[2]),N.add(R)}else if(B==="sphere"){const R=new Ie;R.geometry=new Oo(1,30,30),R.material=L;const z=parseFloat(S.children[0].getAttribute("radius"))||0;R.scale.set(z,z,z),N.add(R)}else if(B==="cylinder"){const R=new Ie;R.geometry=new Fo(1,1,1,30),R.material=L;const z=parseFloat(S.children[0].getAttribute("radius"))||0,y=parseFloat(S.children[0].getAttribute("length"))||0;R.scale.set(z,y,z),R.rotation.set(Math.PI/2,0,0),N.add(R)}}else if(w==="origin"){const B=Hi(S.getAttribute("xyz")),R=Hi(S.getAttribute("rpy"));N.position.set(B[0],B[1],B[2]),N.rotation.set(0,0,0),Ec(N,R)}}),N}return p(t)}defaultMeshLoader(t,e,n){/\.stl$/i.test(t)?new v0(e).load(t,s=>{const o=new Ie(s,new $i);n(o)}):/\.dae$/i.test(t)?new x0(e).load(t,s=>n(s.scene)):console.warn(`URDFLoader: Could not load model at ${t}.
No loader available`)}}function w0(i,t){return new Promise((e,n)=>{i.packages={[t.packageName]:t.packagePath},i.load(t.urdfPath,r=>e(r),void 0,r=>n(r))})}function T0(i){let t="",e="",n="";return i==Rr.OpticalTable&&(t=X_,e=j_,n=q_),{packageName:t,packagePath:e,urdfPath:n}}function A0(i){const t=new ch,e=new E0(t),n=T0(i);return w0(e,n)}const Un=class Un{constructor(){xe(this,"files");xe(this,"modelMap");xe(this,"robotMap");this.files={textFiles:new Map,binaryFiles:new Map},this.modelMap=new Map,this.robotMap=new Map}static async init(){if(!Un.instance){const t=new Un;t.files=await o0(),t.modelMap=_0(t.files),t.robotMap.set(Rr.OpticalTable,await A0(Rr.OpticalTable)),Un.instance=t}return Un.instance}static getInstance(){if(!Un.instance)throw new Error("Assets has not been initialized. Call init) first.");return Un.instance}getModels(){return this.modelMap}getRobots(){return this.robotMap}getFiles(){return this.files}};xe(Un,"instance");let Cr=Un;function R0(){let i=new Pe;const t=new Ei(.5,1,.5),e=new Ar({color:34850});let n=new Ie(t,e);const r=new Jg(t),s=new xi({color:2236962}),o=new Us(r,s);return n.add(o),i.add(n),i}class Mh{constructor(t){xe(this,"object");xe(this,"velocity");xe(this,"acceleration");this.velocity=new K,this.acceleration=new K,this.object=t}update(t){this.updatePosition(t)}updatePosition(t){this.velocity.add(this.acceleration.clone().multiplyScalar(t)),this.object.position.add(this.velocity.clone().multiplyScalar(t));const e=1-Math.min(1,5*t);this.velocity.multiplyScalar(e);const n=.01;this.velocity.lengthSq()<n*n&&this.velocity.set(0,0,0)}}class C0 extends Mh{constructor(){super(R0())}handleMove(t){t.forward?this.acceleration.z=-10:t.backward?this.acceleration.z=10:this.acceleration.z=0,t.left?this.acceleration.x=-10:t.right?this.acceleration.x=10:this.acceleration.x=0}}let P0=class extends Mh{constructor(){let e=Cr.getInstance().getRobots().get(Rr.OpticalTable);super(e);xe(this,"table");this.table=e}handleMove(e){}};function L0(i){const e=new si().setFromObject(i.object).min.y;e<gh&&(i.object.position.y-=e)}class D0{constructor(){}createHuman(){let t=new C0;return L0(t),t}createOpticalTable(){let t=new P0;return t.object.position.y+=.855,t.object.position.x-=2,t.object.position.z-=.7,t.object.rotation.x=ti.degToRad(270),t}createActors(){return{player:this.createHuman(),table:this.createOpticalTable()}}}class I0{constructor(t,e){xe(this,"room");xe(this,"actors");this.room=t,this.actors=e}createScene(){const t=new nh;return N0().forEach(e=>t.add(e)),this.populateScene(t),t}populateScene(t){t.add(this.actors.player.object),t.add(this.actors.table.object),t.add(this.room.floor.object)}}function N0(){const i=new dh(16777215,1);i.position.set(5,5,5).normalize();const t=new fh(4210752,.5);return[i,t]}class Sh{constructor(t){xe(this,"object");this.object=t}}class U0 extends Sh{constructor(){let e=Cr.getInstance().getModels().get(Ho.OpticalTable);super(e)}}const Eh=Math.sqrt(3),F0=.5*(Eh-1),yr=(3-Eh)/6,wc=i=>Math.floor(i)|0,Tc=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function O0(i=Math.random){const t=k0(i),e=new Float64Array(t).map(r=>Tc[r%12*2]),n=new Float64Array(t).map(r=>Tc[r%12*2+1]);return function(s,o){let a=0,l=0,c=0;const d=(s+o)*F0,f=wc(s+d),p=wc(o+d),u=(f+p)*yr,_=f-u,g=p-u,m=s-_,h=o-g;let x,E;m>h?(x=1,E=0):(x=0,E=1);const M=m-x+yr,C=h-E+yr,L=m-1+2*yr,P=h-1+2*yr,N=f&255,S=p&255;let w=.5-m*m-h*h;if(w>=0){const z=N+t[S],y=e[z],H=n[z];w*=w,a=w*w*(y*m+H*h)}let B=.5-M*M-C*C;if(B>=0){const z=N+x+t[S+E],y=e[z],H=n[z];B*=B,l=B*B*(y*M+H*C)}let R=.5-L*L-P*P;if(R>=0){const z=N+1+t[S+1],y=e[z],H=n[z];R*=R,c=R*R*(y*L+H*P)}return 70*(a+l+c)}}function k0(i){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const r=n+~~(i()*(256-n)),s=e[n];e[n]=e[r],e[r]=s}for(let n=256;n<512;n++)e[n]=e[n-256];return e}class B0 extends Sh{constructor(){super(z0())}}function z0(){const i=new Dr(10,10),t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");if(e){const o=O0(),a=.01;for(let l=0;l<t.height;l++)for(let c=0;c<t.width;c++){const d=c/t.width-.5,f=l/t.height-.5,p=o(d/a,f/a),u=Math.floor((p+1)*127.5);e.fillStyle=`rgb(${u}, ${u}, ${u})`,e.fillRect(c,l,1,1)}}const n=new $g(t);n.wrapS=Fn,n.wrapT=Fn,n.repeat.set(4,4);const r=new ah({map:n}),s=new Ie(i,r);return s.rotation.x=-Math.PI/2,s.position.y=0,s}class V0{constructor(){}createFloor(){return new B0}createOpticalTable(){let t=new U0;return H0(t.object),t.object.rotation.x=ti.degToRad(W_),t}createRoom(){return{floor:this.createFloor(),opticalTable:this.createOpticalTable()}}}function H0(i){const e=new si().setFromObject(i).min.y;e<gh&&(i.position.y-=e)}async function G0(){await Cr.init();let i=new V0().createRoom(),t=new D0().createActors(),e=new I0(i,t).createScene();new G_(i,t,e).runSimulationLoop()}G0();
//# sourceMappingURL=index-E3P0aU3Q.js.map
