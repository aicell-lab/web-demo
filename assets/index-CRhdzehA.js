var vu=Object.defineProperty;var xu=(i,t,e)=>t in i?vu(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var jt=(i,t,e)=>xu(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xo="170",yu=0,Oo=1,bu=2,yc=1,Mu=2,Ln=3,kn=0,qe=1,xn=2,ti=0,Vi=1,ko=2,Bo=3,zo=4,Su=5,pi=100,Eu=101,wu=102,Tu=103,Au=104,Cu=200,Ru=201,Pu=202,Lu=203,Pa=204,La=205,Iu=206,Du=207,Nu=208,Uu=209,Fu=210,Ou=211,ku=212,Bu=213,zu=214,Ia=0,Da=1,Na=2,qi=3,Ua=4,Fa=5,Oa=6,ka=7,Is=0,Vu=1,Hu=2,ei=0,Gu=1,Wu=2,Xu=3,ju=4,qu=5,Yu=6,Zu=7,Vo="attached",Ku="detached",bc=300,Yi=301,Zi=302,Ba=303,za=304,Ds=306,Nn=1e3,gn=1001,Va=1002,nn=1003,Ju=1004,kr=1005,en=1006,js=1007,Un=1008,Bn=1009,Mc=1010,Sc=1011,Sr=1012,yo=1013,_i=1014,yn=1015,Cr=1016,bo=1017,Mo=1018,Ki=1020,Ec=35902,wc=1021,Tc=1022,ln=1023,Ac=1024,Cc=1025,Hi=1026,Ji=1027,Rc=1028,So=1029,Pc=1030,Eo=1031,wo=1033,vs=33776,xs=33777,ys=33778,bs=33779,Ha=35840,Ga=35841,Wa=35842,Xa=35843,ja=36196,qa=37492,Ya=37496,Za=37808,Ka=37809,Ja=37810,$a=37811,Qa=37812,to=37813,eo=37814,no=37815,io=37816,ro=37817,so=37818,ao=37819,oo=37820,lo=37821,Ms=36492,co=36494,uo=36495,Lc=36283,ho=36284,fo=36285,po=36286,Es=2300,mo=2301,qs=2302,Ho=2400,Go=2401,Wo=2402,$u=2500,Qu=3200,th=3201,Ns=0,eh=1,Qn="",Pe="srgb",er="srgb-linear",Us="linear",we="srgb",Ei=7680,Xo=519,nh=512,ih=513,rh=514,Ic=515,sh=516,ah=517,oh=518,lh=519,jo=35044,qo="300 es",Fn=2e3,ws=2001;class nr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yo=1234567;const br=Math.PI/180,$i=180/Math.PI;function ni(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function je(i,t,e){return Math.max(t,Math.min(e,i))}function To(i,t){return(i%t+t)%t}function ch(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function uh(i,t,e){return i!==t?(e-i)/(t-i):0}function Mr(i,t,e){return(1-e)*i+e*t}function hh(i,t,e,n){return Mr(i,t,1-Math.exp(-e*n))}function dh(i,t=1){return t-Math.abs(To(i,t*2)-t)}function fh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ph(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function mh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function gh(i,t){return i+Math.random()*(t-i)}function _h(i){return i*(.5-Math.random())}function vh(i){i!==void 0&&(Yo=i);let t=Yo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xh(i){return i*br}function yh(i){return i*$i}function bh(i){return(i&i-1)===0&&i!==0}function Mh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Sh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Eh(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),d=o((t+n)/2),f=s((t-n)/2),p=o((t-n)/2),h=s((n-t)/2),_=o((n-t)/2);switch(r){case"XYX":i.set(a*d,l*f,l*p,a*c);break;case"YZY":i.set(l*p,a*d,l*f,a*c);break;case"ZXZ":i.set(l*f,l*p,a*d,a*c);break;case"XZX":i.set(a*d,l*_,l*h,a*c);break;case"YXY":i.set(l*h,a*d,l*_,a*c);break;case"ZYZ":i.set(l*_,l*h,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Bi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function We(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Dn={DEG2RAD:br,RAD2DEG:$i,generateUUID:ni,clamp:je,euclideanModulo:To,mapLinear:ch,inverseLerp:uh,lerp:Mr,damp:hh,pingpong:dh,smoothstep:fh,smootherstep:ph,randInt:mh,randFloat:gh,randFloatSpread:_h,seededRandom:vh,degToRad:xh,radToDeg:yh,isPowerOfTwo:bh,ceilPowerOfTwo:Mh,floorPowerOfTwo:Sh,setQuaternionFromProperEuler:Eh,normalize:We,denormalize:Bi};class fe{constructor(t=0,e=0){fe.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,e,n,r,s,o,a,l,c){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const d=this.elements;return d[0]=t,d[1]=r,d[2]=a,d[3]=e,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],f=n[7],p=n[2],h=n[5],_=n[8],g=r[0],m=r[3],u=r[6],x=r[1],E=r[4],M=r[7],R=r[2],P=r[5],L=r[8];return s[0]=o*g+a*x+l*R,s[3]=o*m+a*E+l*P,s[6]=o*u+a*M+l*L,s[1]=c*g+d*x+f*R,s[4]=c*m+d*E+f*P,s[7]=c*u+d*M+f*L,s[2]=p*g+h*x+_*R,s[5]=p*m+h*E+_*P,s[8]=p*u+h*M+_*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*o*d-e*a*c-n*s*d+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],f=d*o-a*c,p=a*l-d*s,h=c*s-o*l,_=e*f+n*p+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=f*g,t[1]=(r*c-d*n)*g,t[2]=(a*n-r*o)*g,t[3]=p*g,t[4]=(d*e-r*l)*g,t[5]=(r*s-a*e)*g,t[6]=h*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ys.makeScale(t,e)),this}rotate(t){return this.premultiply(Ys.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ys.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ys=new ce;function Dc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wh(){const i=Er("canvas");return i.style.display="block",i}const Zo={};function vr(i){i in Zo||(Zo[i]=!0,console.warn(i))}function Th(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Ah(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ch(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const he={enabled:!0,workingColorSpace:er,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===we&&(i.r=On(i.r),i.g=On(i.g),i.b=On(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===we&&(i.r=Gi(i.r),i.g=Gi(i.g),i.b=Gi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qn?Us:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ko=[.64,.33,.3,.6,.15,.06],Jo=[.2126,.7152,.0722],$o=[.3127,.329],Qo=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tl=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);he.define({[er]:{primaries:Ko,whitePoint:$o,transfer:Us,toXYZ:Qo,fromXYZ:tl,luminanceCoefficients:Jo,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:Ko,whitePoint:$o,transfer:we,toXYZ:Qo,fromXYZ:tl,luminanceCoefficients:Jo,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});let wi;class Rh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{wi===void 0&&(wi=Er("canvas")),wi.width=t.width,wi.height=t.height;const n=wi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Er("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=On(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(On(e[n]/255)*255):e[n]=On(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ph=0;class Nc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=ni(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Zs(r[o].image)):s.push(Zs(r[o]))}else s=Zs(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Zs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lh=0;class Oe extends nr{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=gn,r=gn,s=en,o=Un,a=ln,l=Bn,c=Oe.DEFAULT_ANISOTROPY,d=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=ni(),this.name="",this.source=new Nc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nn:t.x=t.x-Math.floor(t.x);break;case gn:t.x=t.x<0?0:1;break;case Va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nn:t.y=t.y-Math.floor(t.y);break;case gn:t.y=t.y<0?0:1;break;case Va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=bc;Oe.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,n=0,r=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],d=l[4],f=l[8],p=l[1],h=l[5],_=l[9],g=l[2],m=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,M=(h+1)/2,R=(u+1)/2,P=(d+p)/4,L=(f+g)/4,N=(_+m)/4;return E>M&&E>R?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=P/n,s=L/n):M>R?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=P/r,s=N/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=L/s,r=N/s),this.set(n,r,s,e),this}let x=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(p-d)*(p-d));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(f-g)/x,this.z=(p-d)/x,this.w=Math.acos((c+h+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ih extends nr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Oe(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Nc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends Ih{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Uc extends Oe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dh extends Oe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],d=n[r+2],f=n[r+3];const p=s[o+0],h=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=f;return}if(a===1){t[e+0]=p,t[e+1]=h,t[e+2]=_,t[e+3]=g;return}if(f!==g||l!==p||c!==h||d!==_){let m=1-a;const u=l*p+c*h+d*_+f*g,x=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){const R=Math.sqrt(E),P=Math.atan2(R,u*x);m=Math.sin(m*P)/R,a=Math.sin(a*P)/R}const M=a*x;if(l=l*m+p*M,c=c*m+h*M,d=d*m+_*M,f=f*m+g*M,m===1-a){const R=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=R,c*=R,d*=R,f*=R}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],d=n[r+3],f=s[o],p=s[o+1],h=s[o+2],_=s[o+3];return t[e]=a*_+d*f+l*h-c*p,t[e+1]=l*_+d*p+c*f-a*h,t[e+2]=c*_+d*h+a*p-l*f,t[e+3]=d*_-a*f-l*p-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(r/2),f=a(s/2),p=l(n/2),h=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=p*d*f+c*h*_,this._y=c*h*f-p*d*_,this._z=c*d*_+p*h*f,this._w=c*d*f-p*h*_;break;case"YXZ":this._x=p*d*f+c*h*_,this._y=c*h*f-p*d*_,this._z=c*d*_-p*h*f,this._w=c*d*f+p*h*_;break;case"ZXY":this._x=p*d*f-c*h*_,this._y=c*h*f+p*d*_,this._z=c*d*_+p*h*f,this._w=c*d*f-p*h*_;break;case"ZYX":this._x=p*d*f-c*h*_,this._y=c*h*f+p*d*_,this._z=c*d*_-p*h*f,this._w=c*d*f+p*h*_;break;case"YZX":this._x=p*d*f+c*h*_,this._y=c*h*f+p*d*_,this._z=c*d*_-p*h*f,this._w=c*d*f-p*h*_;break;case"XZY":this._x=p*d*f-c*h*_,this._y=c*h*f-p*d*_,this._z=c*d*_+p*h*f,this._w=c*d*f+p*h*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],d=e[6],f=e[10],p=n+a+f;if(p>0){const h=.5/Math.sqrt(p+1);this._w=.25/h,this._x=(d-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(n>a&&n>f){const h=2*Math.sqrt(1+n-a-f);this._w=(d-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-n-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+d)/h}else{const h=2*Math.sqrt(1+f-n-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-n*c,this._z=s*d+o*c+n*l-r*a,this._w=o*d-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-e;return this._w=h*o+e*this._w,this._x=h*n+e*this._x,this._y=h*r+e*this._y,this._z=h*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-e)*d)/c,p=Math.sin(e*d)/c;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,e=0,n=0){Z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(el.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(el.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),d=2*(a*e-s*r),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*d,this.y=n+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ks.copy(this).projectOnVector(t),this.sub(Ks)}reflect(t){return this.sub(Ks.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ks=new Z,el=new Hn;class ii{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(s,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Br.copy(n.boundingBox)),Br.applyMatrix4(t.matrixWorld),this.union(Br)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),zr.subVectors(this.max,ur),Ti.subVectors(t.a,ur),Ai.subVectors(t.b,ur),Ci.subVectors(t.c,ur),jn.subVectors(Ai,Ti),qn.subVectors(Ci,Ai),ai.subVectors(Ti,Ci);let e=[0,-jn.z,jn.y,0,-qn.z,qn.y,0,-ai.z,ai.y,jn.z,0,-jn.x,qn.z,0,-qn.x,ai.z,0,-ai.x,-jn.y,jn.x,0,-qn.y,qn.x,0,-ai.y,ai.x,0];return!Js(e,Ti,Ai,Ci,zr)||(e=[1,0,0,0,1,0,0,0,1],!Js(e,Ti,Ai,Ci,zr))?!1:(Vr.crossVectors(jn,qn),e=[Vr.x,Vr.y,Vr.z],Js(e,Ti,Ai,Ci,zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wn=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],dn=new Z,Br=new ii,Ti=new Z,Ai=new Z,Ci=new Z,jn=new Z,qn=new Z,ai=new Z,ur=new Z,zr=new Z,Vr=new Z,oi=new Z;function Js(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){oi.fromArray(i,s);const a=r.x*Math.abs(oi.x)+r.y*Math.abs(oi.y)+r.z*Math.abs(oi.z),l=t.dot(oi),c=e.dot(oi),d=n.dot(oi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Nh=new ii,hr=new Z,$s=new Z;class yi{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Nh.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hr.subVectors(t,this.center);const e=hr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(hr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($s.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hr.copy(t.center).add($s)),this.expandByPoint(hr.copy(t.center).sub($s))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new Z,Qs=new Z,Hr=new Z,Yn=new Z,ta=new Z,Gr=new Z,ea=new Z;class Fs{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Qs.copy(t).add(e).multiplyScalar(.5),Hr.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(Qs);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Hr),a=Yn.dot(this.direction),l=-Yn.dot(Hr),c=Yn.lengthSq(),d=Math.abs(1-o*o);let f,p,h,_;if(d>0)if(f=o*l-a,p=o*a-l,_=s*d,f>=0)if(p>=-_)if(p<=_){const g=1/d;f*=g,p*=g,h=f*(f+o*p+2*a)+p*(o*f+p+2*l)+c}else p=s,f=Math.max(0,-(o*p+a)),h=-f*f+p*(p+2*l)+c;else p=-s,f=Math.max(0,-(o*p+a)),h=-f*f+p*(p+2*l)+c;else p<=-_?(f=Math.max(0,-(-o*s+a)),p=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+p*(p+2*l)+c):p<=_?(f=0,p=Math.min(Math.max(-s,-l),s),h=p*(p+2*l)+c):(f=Math.max(0,-(o*s+a)),p=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+p*(p+2*l)+c);else p=o>0?-s:s,f=Math.max(0,-(o*p+a)),h=-f*f+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Qs).addScaledVector(Hr,p),h}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const n=Tn.dot(this.direction),r=Tn.dot(Tn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,r=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,r=(t.min.x-p.x)*c),d>=0?(s=(t.min.y-p.y)*d,o=(t.max.y-p.y)*d):(s=(t.max.y-p.y)*d,o=(t.min.y-p.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-p.z)*f,l=(t.max.z-p.z)*f):(a=(t.max.z-p.z)*f,l=(t.min.z-p.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,r,s){ta.subVectors(e,t),Gr.subVectors(n,t),ea.crossVectors(ta,Gr);let o=this.direction.dot(ea),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,t);const l=a*this.direction.dot(Gr.crossVectors(Yn,Gr));if(l<0)return null;const c=a*this.direction.dot(ta.cross(Yn));if(c<0||l+c>o)return null;const d=-a*Yn.dot(ea);return d<0?null:this.at(d/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,r,s,o,a,l,c,d,f,p,h,_,g,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,d,f,p,h,_,g,m)}set(t,e,n,r,s,o,a,l,c,d,f,p,h,_,g,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=p,u[3]=h,u[7]=_,u[11]=g,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ri.setFromMatrixColumn(t,0).length(),s=1/Ri.setFromMatrixColumn(t,1).length(),o=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const p=o*d,h=o*f,_=a*d,g=a*f;e[0]=l*d,e[4]=-l*f,e[8]=c,e[1]=h+_*c,e[5]=p-g*c,e[9]=-a*l,e[2]=g-p*c,e[6]=_+h*c,e[10]=o*l}else if(t.order==="YXZ"){const p=l*d,h=l*f,_=c*d,g=c*f;e[0]=p+g*a,e[4]=_*a-h,e[8]=o*c,e[1]=o*f,e[5]=o*d,e[9]=-a,e[2]=h*a-_,e[6]=g+p*a,e[10]=o*l}else if(t.order==="ZXY"){const p=l*d,h=l*f,_=c*d,g=c*f;e[0]=p-g*a,e[4]=-o*f,e[8]=_+h*a,e[1]=h+_*a,e[5]=o*d,e[9]=g-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const p=o*d,h=o*f,_=a*d,g=a*f;e[0]=l*d,e[4]=_*c-h,e[8]=p*c+g,e[1]=l*f,e[5]=g*c+p,e[9]=h*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const p=o*l,h=o*c,_=a*l,g=a*c;e[0]=l*d,e[4]=g-p*f,e[8]=_*f+h,e[1]=f,e[5]=o*d,e[9]=-a*d,e[2]=-c*d,e[6]=h*f+_,e[10]=p-g*f}else if(t.order==="XZY"){const p=o*l,h=o*c,_=a*l,g=a*c;e[0]=l*d,e[4]=-f,e[8]=c*d,e[1]=p*f+g,e[5]=o*d,e[9]=h*f-_,e[2]=_*f-h,e[6]=a*d,e[10]=g*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uh,t,Fh)}lookAt(t,e,n){const r=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),Zn.crossVectors(n,Qe),Zn.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),Zn.crossVectors(n,Qe)),Zn.normalize(),Wr.crossVectors(Qe,Zn),r[0]=Zn.x,r[4]=Wr.x,r[8]=Qe.x,r[1]=Zn.y,r[5]=Wr.y,r[9]=Qe.y,r[2]=Zn.z,r[6]=Wr.z,r[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],f=n[5],p=n[9],h=n[13],_=n[2],g=n[6],m=n[10],u=n[14],x=n[3],E=n[7],M=n[11],R=n[15],P=r[0],L=r[4],N=r[8],S=r[12],w=r[1],B=r[5],C=r[9],z=r[13],y=r[2],W=r[6],H=r[10],K=r[14],$=r[3],Q=r[7],ft=r[11],j=r[15];return s[0]=o*P+a*w+l*y+c*$,s[4]=o*L+a*B+l*W+c*Q,s[8]=o*N+a*C+l*H+c*ft,s[12]=o*S+a*z+l*K+c*j,s[1]=d*P+f*w+p*y+h*$,s[5]=d*L+f*B+p*W+h*Q,s[9]=d*N+f*C+p*H+h*ft,s[13]=d*S+f*z+p*K+h*j,s[2]=_*P+g*w+m*y+u*$,s[6]=_*L+g*B+m*W+u*Q,s[10]=_*N+g*C+m*H+u*ft,s[14]=_*S+g*z+m*K+u*j,s[3]=x*P+E*w+M*y+R*$,s[7]=x*L+E*B+M*W+R*Q,s[11]=x*N+E*C+M*H+R*ft,s[15]=x*S+E*z+M*K+R*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],d=t[2],f=t[6],p=t[10],h=t[14],_=t[3],g=t[7],m=t[11],u=t[15];return _*(+s*l*f-r*c*f-s*a*p+n*c*p+r*a*h-n*l*h)+g*(+e*l*h-e*c*p+s*o*p-r*o*h+r*c*d-s*l*d)+m*(+e*c*f-e*a*h-s*o*f+n*o*h+s*a*d-n*c*d)+u*(-r*a*d-e*l*f+e*a*p+r*o*f-n*o*p+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],f=t[9],p=t[10],h=t[11],_=t[12],g=t[13],m=t[14],u=t[15],x=f*m*c-g*p*c+g*l*h-a*m*h-f*l*u+a*p*u,E=_*p*c-d*m*c-_*l*h+o*m*h+d*l*u-o*p*u,M=d*g*c-_*f*c+_*a*h-o*g*h-d*a*u+o*f*u,R=_*f*l-d*g*l-_*a*p+o*g*p+d*a*m-o*f*m,P=e*x+n*E+r*M+s*R;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return t[0]=x*L,t[1]=(g*p*s-f*m*s-g*r*h+n*m*h+f*r*u-n*p*u)*L,t[2]=(a*m*s-g*l*s+g*r*c-n*m*c-a*r*u+n*l*u)*L,t[3]=(f*l*s-a*p*s-f*r*c+n*p*c+a*r*h-n*l*h)*L,t[4]=E*L,t[5]=(d*m*s-_*p*s+_*r*h-e*m*h-d*r*u+e*p*u)*L,t[6]=(_*l*s-o*m*s-_*r*c+e*m*c+o*r*u-e*l*u)*L,t[7]=(o*p*s-d*l*s+d*r*c-e*p*c-o*r*h+e*l*h)*L,t[8]=M*L,t[9]=(_*f*s-d*g*s-_*n*h+e*g*h+d*n*u-e*f*u)*L,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*u+e*a*u)*L,t[11]=(d*a*s-o*f*s-d*n*c+e*f*c+o*n*h-e*a*h)*L,t[12]=R*L,t[13]=(d*g*r-_*f*r+_*n*p-e*g*p-d*n*m+e*f*m)*L,t[14]=(_*a*r-o*g*r-_*n*l+e*g*l+o*n*m-e*a*m)*L,t[15]=(o*f*r-d*a*r+d*n*l-e*f*l-o*n*p+e*a*p)*L,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,d=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+n,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,d=o+o,f=a+a,p=s*c,h=s*d,_=s*f,g=o*d,m=o*f,u=a*f,x=l*c,E=l*d,M=l*f,R=n.x,P=n.y,L=n.z;return r[0]=(1-(g+u))*R,r[1]=(h+M)*R,r[2]=(_-E)*R,r[3]=0,r[4]=(h-M)*P,r[5]=(1-(p+u))*P,r[6]=(m+x)*P,r[7]=0,r[8]=(_+E)*L,r[9]=(m-x)*L,r[10]=(1-(p+g))*L,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Ri.set(r[0],r[1],r[2]).length();const o=Ri.set(r[4],r[5],r[6]).length(),a=Ri.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],fn.copy(this);const c=1/s,d=1/o,f=1/a;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=d,fn.elements[5]*=d,fn.elements[6]*=d,fn.elements[8]*=f,fn.elements[9]*=f,fn.elements[10]*=f,e.setFromRotationMatrix(fn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Fn){const l=this.elements,c=2*s/(e-t),d=2*s/(n-r),f=(e+t)/(e-t),p=(n+r)/(n-r);let h,_;if(a===Fn)h=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ws)h=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Fn){const l=this.elements,c=1/(e-t),d=1/(n-r),f=1/(o-s),p=(e+t)*c,h=(n+r)*d;let _,g;if(a===Fn)_=(o+s)*f,g=-2*f;else if(a===ws)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ri=new Z,fn=new ie,Uh=new Z(0,0,0),Fh=new Z(1,1,1),Zn=new Z,Wr=new Z,Qe=new Z,nl=new ie,il=new Hn;class Je{constructor(t=0,e=0,n=0,r=Je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],p=r[6],h=r[10];switch(e){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return il.setFromEuler(this),this.setFromQuaternion(il,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Je.DEFAULT_ORDER="XYZ";class Fc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Oh=0;const rl=new Z,Pi=new Hn,An=new ie,Xr=new Z,dr=new Z,kh=new Z,Bh=new Hn,sl=new Z(1,0,0),al=new Z(0,1,0),ol=new Z(0,0,1),ll={type:"added"},zh={type:"removed"},Li={type:"childadded",child:null},na={type:"childremoved",child:null};class Ce extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new Z,e=new Je,n=new Hn,r=new Z(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ie},normalMatrix:{value:new ce}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(sl,t)}rotateY(t){return this.rotateOnAxis(al,t)}rotateZ(t){return this.rotateOnAxis(ol,t)}translateOnAxis(t,e){return rl.copy(t).applyQuaternion(this.quaternion),this.position.add(rl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sl,t)}translateY(t){return this.translateOnAxis(al,t)}translateZ(t){return this.translateOnAxis(ol,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xr.copy(t):Xr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(dr,Xr,this.up):An.lookAt(Xr,dr,this.up),this.quaternion.setFromRotationMatrix(An),r&&(An.extractRotation(r.matrixWorld),Pi.setFromRotationMatrix(An),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ll),Li.child=t,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zh),na.child=t,this.dispatchEvent(na),na.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ll),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,kh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Bh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),d=o(t.images),f=o(t.shapes),p=o(t.skeletons),h=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),h.length>0&&(n.animations=h),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ce.DEFAULT_UP=new Z(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new Z,Cn=new Z,ia=new Z,Rn=new Z,Ii=new Z,Di=new Z,cl=new Z,ra=new Z,sa=new Z,aa=new Z,oa=new ye,la=new ye,ca=new ye;class mn{constructor(t=new Z,e=new Z,n=new Z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),pn.subVectors(t,e),r.cross(pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){pn.subVectors(r,e),Cn.subVectors(n,e),ia.subVectors(t,e);const o=pn.dot(pn),a=pn.dot(Cn),l=pn.dot(ia),c=Cn.dot(Cn),d=Cn.dot(ia),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const p=1/f,h=(c*l-a*d)*p,_=(o*d-a*l)*p;return s.set(1-h-_,_,h)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(a,Rn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return oa.setScalar(0),la.setScalar(0),ca.setScalar(0),oa.fromBufferAttribute(t,e),la.fromBufferAttribute(t,n),ca.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(oa,s.x),o.addScaledVector(la,s.y),o.addScaledVector(ca,s.z),o}static isFrontFacing(t,e,n,r){return pn.subVectors(n,e),Cn.subVectors(t,e),pn.cross(Cn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),pn.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Ii.subVectors(r,n),Di.subVectors(s,n),ra.subVectors(t,n);const l=Ii.dot(ra),c=Di.dot(ra);if(l<=0&&c<=0)return e.copy(n);sa.subVectors(t,r);const d=Ii.dot(sa),f=Di.dot(sa);if(d>=0&&f<=d)return e.copy(r);const p=l*f-d*c;if(p<=0&&l>=0&&d<=0)return o=l/(l-d),e.copy(n).addScaledVector(Ii,o);aa.subVectors(t,s);const h=Ii.dot(aa),_=Di.dot(aa);if(_>=0&&h<=_)return e.copy(s);const g=h*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Di,a);const m=d*_-h*f;if(m<=0&&f-d>=0&&h-_>=0)return cl.subVectors(s,r),a=(f-d)/(f-d+(h-_)),e.copy(r).addScaledVector(cl,a);const u=1/(m+g+p);return o=g*u,a=p*u,e.copy(n).addScaledVector(Ii,o).addScaledVector(Di,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},jr={h:0,s:0,l:0};function ua(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class re{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=he.workingColorSpace){if(t=To(t,1),e=je(e,0,1),n=je(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ua(o,s,t+1/3),this.g=ua(o,s,t),this.b=ua(o,s,t-1/3)}return he.toWorkingColorSpace(this,r),this}setStyle(t,e=Pe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=Oc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return he.fromWorkingColorSpace(Be.copy(this),t),Math.round(je(Be.r*255,0,255))*65536+Math.round(je(Be.g*255,0,255))*256+Math.round(je(Be.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,r=Be.g,s=Be.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Pe){he.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,r=Be.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(jr);const n=Mr(Kn.h,jr.h,e),r=Mr(Kn.s,jr.s,e),s=Mr(Kn.l,jr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new re;re.NAMES=Oc;let Vh=0;class _n extends nr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=ni(),this.name="",this.blending=Vi,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pa,this.blendDst=La,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pa&&(n.blendSrc=this.blendSrc),this.blendDst!==La&&(n.blendDst=this.blendDst),this.blendEquation!==pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class wr extends _n{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=Is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new Z,qr=new fe;class rn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jo,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qr.fromBufferAttribute(this,e),qr.applyMatrix3(t),this.setXY(e,qr.x,qr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),r=We(r,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jo&&(t.usage=this.usage),t}}class kc extends rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Bc extends rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class be extends rn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hh=0;const an=new ie,ha=new Ce,Ni=new Z,tn=new ii,fr=new ii,Fe=new Z;class Ve extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dc(t)?Bc:kc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ce().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return ha.lookAt(t),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new be(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(tn.min,fr.min),tn.expandByPoint(Fe),Fe.addVectors(tn.max,fr.max),tn.expandByPoint(Fe)):(tn.expandByPoint(fr.min),tn.expandByPoint(fr.max))}tn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Fe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Fe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Fe.fromBufferAttribute(a,c),l&&(Ni.fromBufferAttribute(t,c),Fe.add(Ni)),r=Math.max(r,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new Z,l[N]=new Z;const c=new Z,d=new Z,f=new Z,p=new fe,h=new fe,_=new fe,g=new Z,m=new Z;function u(N,S,w){c.fromBufferAttribute(n,N),d.fromBufferAttribute(n,S),f.fromBufferAttribute(n,w),p.fromBufferAttribute(s,N),h.fromBufferAttribute(s,S),_.fromBufferAttribute(s,w),d.sub(c),f.sub(c),h.sub(p),_.sub(p);const B=1/(h.x*_.y-_.x*h.y);isFinite(B)&&(g.copy(d).multiplyScalar(_.y).addScaledVector(f,-h.y).multiplyScalar(B),m.copy(f).multiplyScalar(h.x).addScaledVector(d,-_.x).multiplyScalar(B),a[N].add(g),a[S].add(g),a[w].add(g),l[N].add(m),l[S].add(m),l[w].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let N=0,S=x.length;N<S;++N){const w=x[N],B=w.start,C=w.count;for(let z=B,y=B+C;z<y;z+=3)u(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const E=new Z,M=new Z,R=new Z,P=new Z;function L(N){R.fromBufferAttribute(r,N),P.copy(R);const S=a[N];E.copy(S),E.sub(R.multiplyScalar(R.dot(S))).normalize(),M.crossVectors(P,S);const B=M.dot(l[N])<0?-1:1;o.setXYZW(N,E.x,E.y,E.z,B)}for(let N=0,S=x.length;N<S;++N){const w=x[N],B=w.start,C=w.count;for(let z=B,y=B+C;z<y;z+=3)L(t.getX(z+0)),L(t.getX(z+1)),L(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,h=n.count;p<h;p++)n.setXYZ(p,0,0,0);const r=new Z,s=new Z,o=new Z,a=new Z,l=new Z,c=new Z,d=new Z,f=new Z;if(t)for(let p=0,h=t.count;p<h;p+=3){const _=t.getX(p+0),g=t.getX(p+1),m=t.getX(p+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(d),l.add(d),c.add(d),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,h=e.count;p<h;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,l){const c=a.array,d=a.itemSize,f=a.normalized,p=new c.constructor(l.length*d);let h=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?h=l[g]*a.data.stride+a.offset:h=l[g]*d;for(let u=0;u<d;u++)p[_++]=c[h++]}return new rn(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const p=c[d],h=t(p,n);l.push(h)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,p=c.length;f<p;f++){const h=c[f];d.push(h.toJSON(t.data))}d.length>0&&(r[l]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(e))}const s=t.morphAttributes;for(const c in s){const d=[],f=s[c];for(let p=0,h=f.length;p<h;p++)d.push(f[p].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ul=new ie,li=new Fs,Yr=new yi,hl=new Z,Zr=new Z,Kr=new Z,Jr=new Z,da=new Z,$r=new Z,dl=new Z,Qr=new Z;class Te extends Ce{constructor(t=new Ve,e=new wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){$r.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(da.fromBufferAttribute(f,t),o?$r.addScaledVector(da,d):$r.addScaledVector(da.sub(e),d))}e.add($r)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(s),li.copy(t.ray).recast(t.near),!(Yr.containsPoint(li.origin)===!1&&(li.intersectSphere(Yr,hl)===null||li.origin.distanceToSquared(hl)>(t.far-t.near)**2))&&(ul.copy(s).invert(),li.copy(t.ray).applyMatrix4(ul),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,p=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=p.length;_<g;_++){const m=p[_],u=o[m.materialIndex],x=Math.max(m.start,h.start),E=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let M=x,R=E;M<R;M+=3){const P=a.getX(M),L=a.getX(M+1),N=a.getX(M+2);r=ts(this,u,t,n,c,d,f,P,L,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let m=_,u=g;m<u;m+=3){const x=a.getX(m),E=a.getX(m+1),M=a.getX(m+2);r=ts(this,o,t,n,c,d,f,x,E,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=p.length;_<g;_++){const m=p[_],u=o[m.materialIndex],x=Math.max(m.start,h.start),E=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let M=x,R=E;M<R;M+=3){const P=M,L=M+1,N=M+2;r=ts(this,u,t,n,c,d,f,P,L,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let m=_,u=g;m<u;m+=3){const x=m,E=m+1,M=m+2;r=ts(this,o,t,n,c,d,f,x,E,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Gh(i,t,e,n,r,s,o,a){let l;if(t.side===qe?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===kn,a),l===null)return null;Qr.copy(a),Qr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Qr);return c<e.near||c>e.far?null:{distance:c,point:Qr.clone(),object:i}}function ts(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Zr),i.getVertexPosition(l,Kr),i.getVertexPosition(c,Jr);const d=Gh(i,t,e,n,Zr,Kr,Jr,dl);if(d){const f=new Z;mn.getBarycoord(dl,Zr,Kr,Jr,f),r&&(d.uv=mn.getInterpolatedAttribute(r,a,l,c,f,new fe)),s&&(d.uv1=mn.getInterpolatedAttribute(s,a,l,c,f,new fe)),o&&(d.normal=mn.getInterpolatedAttribute(o,a,l,c,f,new Z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new Z,materialIndex:0};mn.getNormal(Zr,Kr,Jr,p.normal),d.face=p,d.barycoord=f}return d}class Gn extends Ve{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let p=0,h=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,r,o,2),_("x","z","y",1,-1,t,n,-e,r,o,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(f,2));function _(g,m,u,x,E,M,R,P,L,N,S){const w=M/L,B=R/N,C=M/2,z=R/2,y=P/2,W=L+1,H=N+1;let K=0,$=0;const Q=new Z;for(let ft=0;ft<H;ft++){const j=ft*B-z;for(let Y=0;Y<W;Y++){const _t=Y*w-C;Q[g]=_t*x,Q[m]=j*E,Q[u]=y,c.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[u]=P>0?1:-1,d.push(Q.x,Q.y,Q.z),f.push(Y/L),f.push(1-ft/N),K+=1}}for(let ft=0;ft<N;ft++)for(let j=0;j<L;j++){const Y=p+j+W*ft,_t=p+j+W*(ft+1),X=p+(j+1)+W*(ft+1),q=p+(j+1)+W*ft;l.push(Y,_t,q),l.push(_t,X,q),$+=6}a.addGroup(h,$,S),h+=$,p+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=Qi(i[e]);for(const r in n)t[r]=n[r]}return t}function Wh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function zc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const Vc={clone:Qi,merge:Xe};var Xh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends _n{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xh,this.fragmentShader=jh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=Wh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Hc extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new Z,fl=new fe,pl=new fe;class ze extends Hc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$i*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z)}getViewSize(t,e){return this.getViewBounds(t,fl,pl),e.subVectors(pl,fl)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(br*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ui=-90,Fi=1;class qh extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ze(Ui,Fi,t,e);r.layers=this.layers,this.add(r);const s=new ze(Ui,Fi,t,e);s.layers=this.layers,this.add(s);const o=new ze(Ui,Fi,t,e);o.layers=this.layers,this.add(o);const a=new ze(Ui,Fi,t,e);a.layers=this.layers,this.add(a);const l=new ze(Ui,Fi,t,e);l.layers=this.layers,this.add(l);const c=new ze(Ui,Fi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),t.render(e,d),t.setRenderTarget(f,p,h),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Gc extends Oe{constructor(t,e,n,r,s,o,a,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:Yi,super(t,e,n,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yh extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Gc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gn(5,5,5),s=new zn({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:ti});s.uniforms.tEquirect.value=e;const o=new Te(r,s),a=e.minFilter;return e.minFilter===Un&&(e.minFilter=en),new qh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const fa=new Z,Zh=new Z,Kh=new ce;class di{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=fa.subVectors(n,e).cross(Zh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Kh.getNormalMatrix(t),r=this.coplanarPoint(fa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new yi,es=new Z;class Ao{constructor(t=new di,e=new di,n=new di,r=new di,s=new di,o=new di){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],p=r[7],h=r[8],_=r[9],g=r[10],m=r[11],u=r[12],x=r[13],E=r[14],M=r[15];if(n[0].setComponents(l-s,p-c,m-h,M-u).normalize(),n[1].setComponents(l+s,p+c,m+h,M+u).normalize(),n[2].setComponents(l+o,p+d,m+_,M+x).normalize(),n[3].setComponents(l-o,p-d,m-_,M-x).normalize(),n[4].setComponents(l-a,p-f,m-g,M-E).normalize(),e===Fn)n[5].setComponents(l+a,p+f,m+g,M+E).normalize();else if(e===ws)n[5].setComponents(a,f,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(es.x=r.normal.x>0?t.max.x:t.min.x,es.y=r.normal.y>0?t.max.y:t.min.y,es.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(es)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wc(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Jh(i){const t=new WeakMap;function e(a,l){const c=a.array,d=a.usage,f=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,d),a.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const d=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,d);else{f.sort((h,_)=>h.start-_.start);let p=0;for(let h=1;h<f.length;h++){const _=f[p],g=f[h];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++p,f[p]=g)}f.length=p+1;for(let h=0,_=f.length;h<_;h++){const g=f[h];i.bufferSubData(c,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class ir extends Ve{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,d=l+1,f=t/a,p=e/l,h=[],_=[],g=[],m=[];for(let u=0;u<d;u++){const x=u*p-o;for(let E=0;E<c;E++){const M=E*f-s;_.push(M,-x,0),g.push(0,0,1),m.push(E/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<a;x++){const E=x+c*u,M=x+c*(u+1),R=x+1+c*(u+1),P=x+1+c*u;h.push(E,M,P),h.push(M,R,P)}this.setIndex(h),this.setAttribute("position",new be(_,3)),this.setAttribute("normal",new be(g,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.width,t.height,t.widthSegments,t.heightSegments)}}var $h=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qh=`#ifdef USE_ALPHAHASH
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
#endif`,td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rd=`#ifdef USE_AOMAP
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
#endif`,sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ad=`#ifdef USE_BATCHING
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
#endif`,od=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ud=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hd=`#ifdef USE_IRIDESCENCE
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
#endif`,dd=`#ifdef USE_BUMPMAP
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
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bd=`#define PI 3.141592653589793
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
} // validated`,Md=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sd=`vec3 transformedNormal = objectNormal;
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
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ad=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Id=`#ifdef USE_ENVMAP
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
#endif`,Dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
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
#endif`,Ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bd=`#ifdef USE_GRADIENTMAP
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
}`,zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gd=`uniform bool receiveShadow;
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
#endif`,Wd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zd=`PhysicalMaterial material;
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
#endif`,Kd=`struct PhysicalMaterial {
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
}`,Jd=`
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
#endif`,$d=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ef=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,af=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lf=`#if defined( USE_POINTS_UV )
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
#endif`,cf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,df=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ff=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pf=`#ifdef USE_MORPHTARGETS
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
#endif`,mf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_f=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bf=`#ifdef USE_NORMALMAP
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
#endif`,Mf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Af=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,If=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Df=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Of=`float getShadowMask() {
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
}`,kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bf=`#ifdef USE_SKINNING
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
#endif`,zf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vf=`#ifdef USE_SKINNING
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
#endif`,Hf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jf=`#ifdef USE_TRANSMISSION
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
#endif`,qf=`#ifdef USE_TRANSMISSION
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
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $f=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qf=`uniform sampler2D t2D;
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
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`#ifdef ENVMAP_TYPE_CUBE
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
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`#include <common>
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
}`,sp=`#if DEPTH_PACKING == 3200
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
}`,ap=`#define DISTANCE
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
}`,op=`#define DISTANCE
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
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`uniform float scale;
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
}`,hp=`uniform vec3 diffuse;
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
}`,dp=`#include <common>
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
}`,fp=`uniform vec3 diffuse;
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
}`,pp=`#define LAMBERT
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
}`,mp=`#define LAMBERT
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
}`,gp=`#define MATCAP
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
}`,_p=`#define MATCAP
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
}`,vp=`#define NORMAL
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
}`,xp=`#define NORMAL
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
}`,yp=`#define PHONG
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
}`,bp=`#define PHONG
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
}`,Mp=`#define STANDARD
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
}`,Sp=`#define STANDARD
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
}`,Ep=`#define TOON
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
}`,wp=`#define TOON
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
}`,Tp=`uniform float size;
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
}`,Ap=`uniform vec3 diffuse;
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
}`,Cp=`#include <common>
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
}`,Rp=`uniform vec3 color;
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
}`,Pp=`uniform float rotation;
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
}`,Lp=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:$h,alphahash_pars_fragment:Qh,alphamap_fragment:td,alphamap_pars_fragment:ed,alphatest_fragment:nd,alphatest_pars_fragment:id,aomap_fragment:rd,aomap_pars_fragment:sd,batching_pars_vertex:ad,batching_vertex:od,begin_vertex:ld,beginnormal_vertex:cd,bsdfs:ud,iridescence_fragment:hd,bumpmap_pars_fragment:dd,clipping_planes_fragment:fd,clipping_planes_pars_fragment:pd,clipping_planes_pars_vertex:md,clipping_planes_vertex:gd,color_fragment:_d,color_pars_fragment:vd,color_pars_vertex:xd,color_vertex:yd,common:bd,cube_uv_reflection_fragment:Md,defaultnormal_vertex:Sd,displacementmap_pars_vertex:Ed,displacementmap_vertex:wd,emissivemap_fragment:Td,emissivemap_pars_fragment:Ad,colorspace_fragment:Cd,colorspace_pars_fragment:Rd,envmap_fragment:Pd,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Id,envmap_pars_vertex:Dd,envmap_physical_pars_fragment:Wd,envmap_vertex:Nd,fog_vertex:Ud,fog_pars_vertex:Fd,fog_fragment:Od,fog_pars_fragment:kd,gradientmap_pars_fragment:Bd,lightmap_pars_fragment:zd,lights_lambert_fragment:Vd,lights_lambert_pars_fragment:Hd,lights_pars_begin:Gd,lights_toon_fragment:Xd,lights_toon_pars_fragment:jd,lights_phong_fragment:qd,lights_phong_pars_fragment:Yd,lights_physical_fragment:Zd,lights_physical_pars_fragment:Kd,lights_fragment_begin:Jd,lights_fragment_maps:$d,lights_fragment_end:Qd,logdepthbuf_fragment:tf,logdepthbuf_pars_fragment:ef,logdepthbuf_pars_vertex:nf,logdepthbuf_vertex:rf,map_fragment:sf,map_pars_fragment:af,map_particle_fragment:of,map_particle_pars_fragment:lf,metalnessmap_fragment:cf,metalnessmap_pars_fragment:uf,morphinstance_vertex:hf,morphcolor_vertex:df,morphnormal_vertex:ff,morphtarget_pars_vertex:pf,morphtarget_vertex:mf,normal_fragment_begin:gf,normal_fragment_maps:_f,normal_pars_fragment:vf,normal_pars_vertex:xf,normal_vertex:yf,normalmap_pars_fragment:bf,clearcoat_normal_fragment_begin:Mf,clearcoat_normal_fragment_maps:Sf,clearcoat_pars_fragment:Ef,iridescence_pars_fragment:wf,opaque_fragment:Tf,packing:Af,premultiplied_alpha_fragment:Cf,project_vertex:Rf,dithering_fragment:Pf,dithering_pars_fragment:Lf,roughnessmap_fragment:If,roughnessmap_pars_fragment:Df,shadowmap_pars_fragment:Nf,shadowmap_pars_vertex:Uf,shadowmap_vertex:Ff,shadowmask_pars_fragment:Of,skinbase_vertex:kf,skinning_pars_vertex:Bf,skinning_vertex:zf,skinnormal_vertex:Vf,specularmap_fragment:Hf,specularmap_pars_fragment:Gf,tonemapping_fragment:Wf,tonemapping_pars_fragment:Xf,transmission_fragment:jf,transmission_pars_fragment:qf,uv_pars_fragment:Yf,uv_pars_vertex:Zf,uv_vertex:Kf,worldpos_vertex:Jf,background_vert:$f,background_frag:Qf,backgroundCube_vert:tp,backgroundCube_frag:ep,cube_vert:np,cube_frag:ip,depth_vert:rp,depth_frag:sp,distanceRGBA_vert:ap,distanceRGBA_frag:op,equirect_vert:lp,equirect_frag:cp,linedashed_vert:up,linedashed_frag:hp,meshbasic_vert:dp,meshbasic_frag:fp,meshlambert_vert:pp,meshlambert_frag:mp,meshmatcap_vert:gp,meshmatcap_frag:_p,meshnormal_vert:vp,meshnormal_frag:xp,meshphong_vert:yp,meshphong_frag:bp,meshphysical_vert:Mp,meshphysical_frag:Sp,meshtoon_vert:Ep,meshtoon_frag:wp,points_vert:Tp,points_frag:Ap,shadow_vert:Cp,shadow_frag:Rp,sprite_vert:Pp,sprite_frag:Lp},Pt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},vn={basic:{uniforms:Xe([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Xe([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new re(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Xe([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Xe([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Xe([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new re(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Xe([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Xe([Pt.points,Pt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Xe([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Xe([Pt.common,Pt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Xe([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Xe([Pt.sprite,Pt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:Xe([Pt.common,Pt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:Xe([Pt.lights,Pt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};vn.physical={uniforms:Xe([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const ns={r:0,b:0,g:0},ui=new Je,Ip=new ie;function Dp(i,t,e,n,r,s,o){const a=new re(0);let l=s===!0?0:1,c,d,f=null,p=0,h=null;function _(x){let E=x.isScene===!0?x.background:null;return E&&E.isTexture&&(E=(x.backgroundBlurriness>0?e:t).get(E)),E}function g(x){let E=!1;const M=_(x);M===null?u(a,l):M&&M.isColor&&(u(M,1),E=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,E){const M=_(E);M&&(M.isCubeTexture||M.mapping===Ds)?(d===void 0&&(d=new Te(new Gn(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Qi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),ui.copy(E.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Ip.makeRotationFromEuler(ui)),d.material.toneMapped=he.getTransfer(M.colorSpace)!==we,(f!==M||p!==M.version||h!==i.toneMapping)&&(d.material.needsUpdate=!0,f=M,p=M.version,h=i.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Te(new ir(2,2),new zn({name:"BackgroundMaterial",uniforms:Qi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=he.getTransfer(M.colorSpace)!==we,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||p!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,p=M.version,h=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,E){x.getRGB(ns,zc(i)),n.buffers.color.setClear(ns.r,ns.g,ns.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(x,E=1){a.set(x),l=E,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(a,l)},render:g,addToRenderList:m}}function Np(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,o=!1;function a(w,B,C,z,y){let W=!1;const H=f(z,C,B);s!==H&&(s=H,c(s.object)),W=h(w,z,C,y),W&&_(w,z,C,y),y!==null&&t.update(y,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(w,B,C,z),y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(y).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function d(w){return i.deleteVertexArray(w)}function f(w,B,C){const z=C.wireframe===!0;let y=n[w.id];y===void 0&&(y={},n[w.id]=y);let W=y[B.id];W===void 0&&(W={},y[B.id]=W);let H=W[z];return H===void 0&&(H=p(l()),W[z]=H),H}function p(w){const B=[],C=[],z=[];for(let y=0;y<e;y++)B[y]=0,C[y]=0,z[y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:C,attributeDivisors:z,object:w,attributes:{},index:null}}function h(w,B,C,z){const y=s.attributes,W=B.attributes;let H=0;const K=C.getAttributes();for(const $ in K)if(K[$].location>=0){const ft=y[$];let j=W[$];if(j===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(j=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(j=w.instanceColor)),ft===void 0||ft.attribute!==j||j&&ft.data!==j.data)return!0;H++}return s.attributesNum!==H||s.index!==z}function _(w,B,C,z){const y={},W=B.attributes;let H=0;const K=C.getAttributes();for(const $ in K)if(K[$].location>=0){let ft=W[$];ft===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(ft=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(ft=w.instanceColor));const j={};j.attribute=ft,ft&&ft.data&&(j.data=ft.data),y[$]=j,H++}s.attributes=y,s.attributesNum=H,s.index=z}function g(){const w=s.newAttributes;for(let B=0,C=w.length;B<C;B++)w[B]=0}function m(w){u(w,0)}function u(w,B){const C=s.newAttributes,z=s.enabledAttributes,y=s.attributeDivisors;C[w]=1,z[w]===0&&(i.enableVertexAttribArray(w),z[w]=1),y[w]!==B&&(i.vertexAttribDivisor(w,B),y[w]=B)}function x(){const w=s.newAttributes,B=s.enabledAttributes;for(let C=0,z=B.length;C<z;C++)B[C]!==w[C]&&(i.disableVertexAttribArray(C),B[C]=0)}function E(w,B,C,z,y,W,H){H===!0?i.vertexAttribIPointer(w,B,C,y,W):i.vertexAttribPointer(w,B,C,z,y,W)}function M(w,B,C,z){g();const y=z.attributes,W=C.getAttributes(),H=B.defaultAttributeValues;for(const K in W){const $=W[K];if($.location>=0){let Q=y[K];if(Q===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor)),Q!==void 0){const ft=Q.normalized,j=Q.itemSize,Y=t.get(Q);if(Y===void 0)continue;const _t=Y.buffer,X=Y.type,q=Y.bytesPerElement,lt=X===i.INT||X===i.UNSIGNED_INT||Q.gpuType===yo;if(Q.isInterleavedBufferAttribute){const dt=Q.data,xt=dt.stride,Et=Q.offset;if(dt.isInstancedInterleavedBuffer){for(let kt=0;kt<$.locationSize;kt++)u($.location+kt,dt.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let kt=0;kt<$.locationSize;kt++)m($.location+kt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let kt=0;kt<$.locationSize;kt++)E($.location+kt,j/$.locationSize,X,ft,xt*q,(Et+j/$.locationSize*kt)*q,lt)}else{if(Q.isInstancedBufferAttribute){for(let dt=0;dt<$.locationSize;dt++)u($.location+dt,Q.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let dt=0;dt<$.locationSize;dt++)m($.location+dt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let dt=0;dt<$.locationSize;dt++)E($.location+dt,j/$.locationSize,X,ft,j*q,j/$.locationSize*dt*q,lt)}}else if(H!==void 0){const ft=H[K];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv($.location,ft);break;case 3:i.vertexAttrib3fv($.location,ft);break;case 4:i.vertexAttrib4fv($.location,ft);break;default:i.vertexAttrib1fv($.location,ft)}}}}x()}function R(){N();for(const w in n){const B=n[w];for(const C in B){const z=B[C];for(const y in z)d(z[y].object),delete z[y];delete B[C]}delete n[w]}}function P(w){if(n[w.id]===void 0)return;const B=n[w.id];for(const C in B){const z=B[C];for(const y in z)d(z[y].object),delete z[y];delete B[C]}delete n[w.id]}function L(w){for(const B in n){const C=n[B];if(C[w.id]===void 0)continue;const z=C[w.id];for(const y in z)d(z[y].object),delete z[y];delete C[w.id]}}function N(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function Up(i,t,e){let n;function r(c){n=c}function s(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function o(c,d,f){f!==0&&(i.drawArraysInstanced(n,c,d,f),e.update(d,n,f))}function a(c,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,f);let h=0;for(let _=0;_<f;_++)h+=d[_];e.update(h,n,1)}function l(c,d,f,p){if(f===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<c.length;_++)o(c[_],d[_],p[_]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,d,0,p,0,f);let _=0;for(let g=0;g<f;g++)_+=d[g]*p[g];e.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Fp(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==ln&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const N=L===Cr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Bn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==yn&&!N)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:h,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:R,maxSamples:P}}function Op(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new di,a=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const h=f.length!==0||p||n!==0||r;return r=p,n=f.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){e=d(f,p,0)},this.setState=function(f,p,h){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,u=i.get(f);if(!r||_===null||_.length===0||s&&!m)s?d(null):c();else{const x=s?0:n,E=x*4;let M=u.clippingState||null;l.value=M,M=d(_,p,E,h);for(let R=0;R!==E;++R)M[R]=e[R];u.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,p,h,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const u=h+g*4,x=p.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<u)&&(m=new Float32Array(u));for(let E=0,M=h;E!==g;++E,M+=4)o.copy(f[E]).applyMatrix4(x,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function kp(i){let t=new WeakMap;function e(o,a){return a===Ba?o.mapping=Yi:a===za&&(o.mapping=Zi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ba||a===za)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Yh(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Co extends Hc{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const zi=4,ml=[.125,.215,.35,.446,.526,.582],mi=20,pa=new Co,gl=new re;let ma=null,ga=0,_a=0,va=!1;const fi=(1+Math.sqrt(5))/2,Oi=1/fi,_l=[new Z(-fi,Oi,0),new Z(fi,Oi,0),new Z(-Oi,0,fi),new Z(Oi,0,fi),new Z(0,fi,-Oi),new Z(0,fi,Oi),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class vl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma,ga,_a),this._renderer.xr.enabled=va,t.scissorTest=!1,is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Cr,format:ln,colorSpace:er,depthBuffer:!1},r=xl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bp(s)),this._blurMaterial=zp(s,t,e)}return r}_compileMaterial(t){const e=new Te(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,r){const a=new ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(gl),d.toneMapping=ei,d.autoClear=!1;const h=new wr({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),_=new Te(new Gn,h);let g=!1;const m=t.background;m?m.isColor&&(h.color.copy(m),t.background=null,g=!0):(h.color.copy(gl),g=!0);for(let u=0;u<6;u++){const x=u%3;x===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):x===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const E=this._cubeSize;is(r,x*E,u>2?E:0,E,E),d.setRenderTarget(r),g&&d.render(_,a),d.render(t,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Yi||t.mapping===Zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Te(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;is(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,pa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=_l[(r-s-1)%_l.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Te(this._lodPlanes[r],c),p=c.uniforms,h=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*mi-1),g=s/_,m=isFinite(s)?1+Math.floor(d*g):mi;m>mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);const u=[];let x=0;for(let L=0;L<mi;++L){const N=L/g,S=Math.exp(-N*N/2);u.push(S),L===0?x+=S:L<m&&(x+=2*S)}for(let L=0;L<u.length;L++)u[L]=u[L]/x;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:E}=this;p.dTheta.value=_,p.mipInt.value=E-n;const M=this._sizeLods[r],R=3*M*(r>E-zi?r-E+zi:0),P=4*(this._cubeSize-M);is(e,R,P,3*M,2*M),l.setRenderTarget(e),l.render(f,pa)}}function Bp(i){const t=[],e=[],n=[];let r=i;const s=i-zi+1+ml.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-zi?l=ml[o-i+zi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,f=1+c,p=[d,d,f,d,f,f,d,d,f,f,d,f],h=6,_=6,g=3,m=2,u=1,x=new Float32Array(g*_*h),E=new Float32Array(m*_*h),M=new Float32Array(u*_*h);for(let P=0;P<h;P++){const L=P%3*2/3-1,N=P>2?0:-1,S=[L,N,0,L+2/3,N,0,L+2/3,N+1,0,L,N,0,L+2/3,N+1,0,L,N+1,0];x.set(S,g*_*P),E.set(p,m*_*P);const w=[P,P,P,P,P,P];M.set(w,u*_*P)}const R=new Ve;R.setAttribute("position",new rn(x,g)),R.setAttribute("uv",new rn(E,m)),R.setAttribute("faceIndex",new rn(M,u)),t.push(R),r>zi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xl(i,t,e){const n=new vi(i,t,e);return n.texture.mapping=Ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function is(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function zp(i,t,e){const n=new Float32Array(mi),r=new Z(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function yl(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function bl(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Ro(){return`

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
	`}function Vp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ba||l===za,d=l===Yi||l===Zi;if(c||d){let f=t.get(a);const p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new vl(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||d&&h&&r(h)?(e===null&&(e=new vl(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Hp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&vr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Gp(i,t,e,n){const r={},s=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);for(const _ in p.morphAttributes){const g=p.morphAttributes[_];for(let m=0,u=g.length;m<u;m++)t.remove(g[m])}p.removeEventListener("dispose",o),delete r[p.id];const h=s.get(p);h&&(t.remove(h),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function l(f){const p=f.attributes;for(const _ in p)t.update(p[_],i.ARRAY_BUFFER);const h=f.morphAttributes;for(const _ in h){const g=h[_];for(let m=0,u=g.length;m<u;m++)t.update(g[m],i.ARRAY_BUFFER)}}function c(f){const p=[],h=f.index,_=f.attributes.position;let g=0;if(h!==null){const x=h.array;g=h.version;for(let E=0,M=x.length;E<M;E+=3){const R=x[E+0],P=x[E+1],L=x[E+2];p.push(R,P,P,L,L,R)}}else if(_!==void 0){const x=_.array;g=_.version;for(let E=0,M=x.length/3-1;E<M;E+=3){const R=E+0,P=E+1,L=E+2;p.push(R,P,P,L,L,R)}}else return;const m=new(Dc(p)?Bc:kc)(p,1);m.version=g;const u=s.get(f);u&&t.remove(u),s.set(f,m)}function d(f){const p=s.get(f);if(p){const h=f.index;h!==null&&p.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function Wp(i,t,e){let n;function r(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,h){i.drawElements(n,h,s,p*o),e.update(h,n,1)}function c(p,h,_){_!==0&&(i.drawElementsInstanced(n,h,s,p*o,_),e.update(h,n,_))}function d(p,h,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,p,0,_);let m=0;for(let u=0;u<_;u++)m+=h[u];e.update(m,n,1)}function f(p,h,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)c(p[u]/o,h[u],g[u]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,s,p,0,g,0,_);let u=0;for(let x=0;x<_;x++)u+=h[x]*g[x];e.update(u,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function Xp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function jp(i,t,e){const n=new WeakMap,r=new ye;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let p=n.get(a);if(p===void 0||p.count!==f){let S=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",S)};p!==void 0&&p.texture.dispose();const h=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let E=0;h===!0&&(E=1),_===!0&&(E=2),g===!0&&(E=3);let M=a.attributes.position.count*E,R=1;M>t.maxTextureSize&&(R=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const P=new Float32Array(M*R*4*f),L=new Uc(P,M,R,f);L.type=yn,L.needsUpdate=!0;const N=E*4;for(let w=0;w<f;w++){const B=m[w],C=u[w],z=x[w],y=M*R*4*w;for(let W=0;W<B.count;W++){const H=W*N;h===!0&&(r.fromBufferAttribute(B,W),P[y+H+0]=r.x,P[y+H+1]=r.y,P[y+H+2]=r.z,P[y+H+3]=0),_===!0&&(r.fromBufferAttribute(C,W),P[y+H+4]=r.x,P[y+H+5]=r.y,P[y+H+6]=r.z,P[y+H+7]=0),g===!0&&(r.fromBufferAttribute(z,W),P[y+H+8]=r.x,P[y+H+9]=r.y,P[y+H+10]=r.z,P[y+H+11]=z.itemSize===4?r.w:1)}}p={count:f,texture:L,size:new fe(M,R)},n.set(a,p),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let h=0;for(let g=0;g<c.length;g++)h+=c[g];const _=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function qp(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,f=t.get(l,d);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Xc extends Oe{constructor(t,e,n,r,s,o,a,l,c,d=Hi){if(d!==Hi&&d!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Hi&&(n=_i),n===void 0&&d===Ji&&(n=Ki),super(null,r,s,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const jc=new Oe,Ml=new Xc(1,1),qc=new Uc,Yc=new Dh,Zc=new Gc,Sl=[],El=[],wl=new Float32Array(16),Tl=new Float32Array(9),Al=new Float32Array(4);function rr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Sl[r];if(s===void 0&&(s=new Float32Array(r),Sl[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Os(i,t){let e=El[t];e===void 0&&(e=new Int32Array(t),El[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Yp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function Kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function Jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function $p(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;Al.set(n),i.uniformMatrix2fv(this.addr,!1,Al),Ne(e,n)}}function Qp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;Tl.set(n),i.uniformMatrix3fv(this.addr,!1,Tl),Ne(e,n)}}function tm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;wl.set(n),i.uniformMatrix4fv(this.addr,!1,wl),Ne(e,n)}}function em(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function sm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function cm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ml.compareFunction=Ic,s=Ml):s=jc,e.setTexture2D(t||s,r)}function um(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Yc,r)}function hm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Zc,r)}function dm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||qc,r)}function fm(i){switch(i){case 5126:return Yp;case 35664:return Zp;case 35665:return Kp;case 35666:return Jp;case 35674:return $p;case 35675:return Qp;case 35676:return tm;case 5124:case 35670:return em;case 35667:case 35671:return nm;case 35668:case 35672:return im;case 35669:case 35673:return rm;case 5125:return sm;case 36294:return am;case 36295:return om;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return cm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return hm;case 36289:case 36303:case 36311:case 36292:return dm}}function pm(i,t){i.uniform1fv(this.addr,t)}function mm(i,t){const e=rr(t,this.size,2);i.uniform2fv(this.addr,e)}function gm(i,t){const e=rr(t,this.size,3);i.uniform3fv(this.addr,e)}function _m(i,t){const e=rr(t,this.size,4);i.uniform4fv(this.addr,e)}function vm(i,t){const e=rr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xm(i,t){const e=rr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ym(i,t){const e=rr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bm(i,t){i.uniform1iv(this.addr,t)}function Mm(i,t){i.uniform2iv(this.addr,t)}function Sm(i,t){i.uniform3iv(this.addr,t)}function Em(i,t){i.uniform4iv(this.addr,t)}function wm(i,t){i.uniform1uiv(this.addr,t)}function Tm(i,t){i.uniform2uiv(this.addr,t)}function Am(i,t){i.uniform3uiv(this.addr,t)}function Cm(i,t){i.uniform4uiv(this.addr,t)}function Rm(i,t,e){const n=this.cache,r=t.length,s=Os(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||jc,s[o])}function Pm(i,t,e){const n=this.cache,r=t.length,s=Os(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Yc,s[o])}function Lm(i,t,e){const n=this.cache,r=t.length,s=Os(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Zc,s[o])}function Im(i,t,e){const n=this.cache,r=t.length,s=Os(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Ne(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||qc,s[o])}function Dm(i){switch(i){case 5126:return pm;case 35664:return mm;case 35665:return gm;case 35666:return _m;case 35674:return vm;case 35675:return xm;case 35676:return ym;case 5124:case 35670:return bm;case 35667:case 35671:return Mm;case 35668:case 35672:return Sm;case 35669:case 35673:return Em;case 5125:return wm;case 36294:return Tm;case 36295:return Am;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Pm;case 35680:case 36300:case 36308:case 36293:return Lm;case 36289:case 36303:case 36311:case 36292:return Im}}class Nm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fm(e.type)}}class Um{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dm(e.type)}}class Fm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function Cl(i,t){i.seq.push(t),i.map[t.id]=t}function Om(i,t,e){const n=i.name,r=n.length;for(xa.lastIndex=0;;){const s=xa.exec(n),o=xa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Cl(e,c===void 0?new Nm(a,i,t):new Um(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Fm(a),Cl(e,f)),e=f}}}class Ss{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Om(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Rl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const km=37297;let Bm=0;function zm(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Pl=new ce;function Vm(i){he._getMatrix(Pl,he.workingColorSpace,i);const t=`mat3( ${Pl.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case Us:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ll(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+zm(i.getShaderSource(t),o)}else return r}function Hm(i,t){const e=Vm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Gm(i,t){let e;switch(t){case Gu:e="Linear";break;case Wu:e="Reinhard";break;case Xu:e="Cineon";break;case ju:e="ACESFilmic";break;case Yu:e="AgX";break;case Zu:e="Neutral";break;case qu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const rs=new Z;function Wm(){he.getLuminanceCoefficients(rs);const i=rs.x.toFixed(4),t=rs.y.toFixed(4),e=rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function jm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function xr(i){return i!==""}function Il(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function go(i){return i.replace(Ym,Km)}const Zm=new Map;function Km(i,t){let e=ue[t];if(e===void 0){const n=Zm.get(t);if(n!==void 0)e=ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return go(e)}const Jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nl(i){return i.replace(Jm,$m)}function $m(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ul(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Qm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function tg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Yi:case Zi:t="ENVMAP_TYPE_CUBE";break;case Ds:t="ENVMAP_TYPE_CUBE_UV";break}return t}function eg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zi:t="ENVMAP_MODE_REFRACTION";break}return t}function ng(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Is:t="ENVMAP_BLENDING_MULTIPLY";break;case Vu:t="ENVMAP_BLENDING_MIX";break;case Hu:t="ENVMAP_BLENDING_ADD";break}return t}function ig(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function rg(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Qm(e),c=tg(e),d=eg(e),f=ng(e),p=ig(e),h=Xm(e),_=jm(s),g=r.createProgram();let m,u,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(xr).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(xr).join(`
`),u.length>0&&(u+=`
`)):(m=[Ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),u=[Ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?ue.tonemapping_pars_fragment:"",e.toneMapping!==ei?Gm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,Hm("linearToOutputTexel",e.outputColorSpace),Wm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xr).join(`
`)),o=go(o),o=Il(o,e),o=Dl(o,e),a=go(a),a=Il(a,e),a=Dl(a,e),o=Nl(o),a=Nl(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const E=x+m+o,M=x+u+a,R=Rl(r,r.VERTEX_SHADER,E),P=Rl(r,r.FRAGMENT_SHADER,M);r.attachShader(g,R),r.attachShader(g,P),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function L(B){if(i.debug.checkShaderErrors){const C=r.getProgramInfoLog(g).trim(),z=r.getShaderInfoLog(R).trim(),y=r.getShaderInfoLog(P).trim();let W=!0,H=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,R,P);else{const K=Ll(r,R,"vertex"),$=Ll(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+C+`
`+K+`
`+$)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(z===""||y==="")&&(H=!1);H&&(B.diagnostics={runnable:W,programLog:C,vertexShader:{log:z,prefix:m},fragmentShader:{log:y,prefix:u}})}r.deleteShader(R),r.deleteShader(P),N=new Ss(r,g),S=qm(r,g)}let N;this.getUniforms=function(){return N===void 0&&L(this),N};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(g,km)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=P,this}let sg=0;class ag{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new og(t),e.set(t,n)),n}}class og{constructor(t){this.id=sg++,this.code=t,this.usedTimes=0}}function lg(i,t,e,n,r,s,o){const a=new Fc,l=new ag,c=new Set,d=[],f=r.logarithmicDepthBuffer,p=r.vertexTextures;let h=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,w,B,C,z){const y=C.fog,W=z.geometry,H=S.isMeshStandardMaterial?C.environment:null,K=(S.isMeshStandardMaterial?e:t).get(S.envMap||H),$=K&&K.mapping===Ds?K.image.height:null,Q=_[S.type];S.precision!==null&&(h=r.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const ft=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,j=ft!==void 0?ft.length:0;let Y=0;W.morphAttributes.position!==void 0&&(Y=1),W.morphAttributes.normal!==void 0&&(Y=2),W.morphAttributes.color!==void 0&&(Y=3);let _t,X,q,lt;if(Q){const le=vn[Q];_t=le.vertexShader,X=le.fragmentShader}else _t=S.vertexShader,X=S.fragmentShader,l.update(S),q=l.getVertexShaderID(S),lt=l.getFragmentShaderID(S);const dt=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Et=z.isInstancedMesh===!0,kt=z.isBatchedMesh===!0,Jt=!!S.map,Qt=!!S.matcap,de=!!K,v=!!S.aoMap,mt=!!S.lightMap,st=!!S.bumpMap,V=!!S.normalMap,O=!!S.displacementMap,J=!!S.emissiveMap,ot=!!S.metalnessMap,I=!!S.roughnessMap,b=S.anisotropy>0,G=S.clearcoat>0,rt=S.dispersion>0,nt=S.iridescence>0,at=S.sheen>0,wt=S.transmission>0,yt=b&&!!S.anisotropyMap,At=G&&!!S.clearcoatMap,oe=G&&!!S.clearcoatNormalMap,bt=G&&!!S.clearcoatRoughnessMap,Ut=nt&&!!S.iridescenceMap,It=nt&&!!S.iridescenceThicknessMap,Yt=at&&!!S.sheenColorMap,Ft=at&&!!S.sheenRoughnessMap,te=!!S.specularMap,ee=!!S.specularColorMap,xe=!!S.specularIntensityMap,et=wt&&!!S.transmissionMap,Ct=wt&&!!S.thicknessMap,pt=!!S.gradientMap,vt=!!S.alphaMap,Rt=S.alphaTest>0,Dt=!!S.alphaHash,se=!!S.extensions;let Ae=ei;S.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Ae=i.toneMapping);const Ue={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:_t,fragmentShader:X,defines:S.defines,customVertexShaderID:q,customFragmentShaderID:lt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:kt,batchingColor:kt&&z._colorsTexture!==null,instancing:Et,instancingColor:Et&&z.instanceColor!==null,instancingMorph:Et&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:er,alphaToCoverage:!!S.alphaToCoverage,map:Jt,matcap:Qt,envMap:de,envMapMode:de&&K.mapping,envMapCubeUVHeight:$,aoMap:v,lightMap:mt,bumpMap:st,normalMap:V,displacementMap:p&&O,emissiveMap:J,normalMapObjectSpace:V&&S.normalMapType===eh,normalMapTangentSpace:V&&S.normalMapType===Ns,metalnessMap:ot,roughnessMap:I,anisotropy:b,anisotropyMap:yt,clearcoat:G,clearcoatMap:At,clearcoatNormalMap:oe,clearcoatRoughnessMap:bt,dispersion:rt,iridescence:nt,iridescenceMap:Ut,iridescenceThicknessMap:It,sheen:at,sheenColorMap:Yt,sheenRoughnessMap:Ft,specularMap:te,specularColorMap:ee,specularIntensityMap:xe,transmission:wt,transmissionMap:et,thicknessMap:Ct,gradientMap:pt,opaque:S.transparent===!1&&S.blending===Vi&&S.alphaToCoverage===!1,alphaMap:vt,alphaTest:Rt,alphaHash:Dt,combine:S.combine,mapUv:Jt&&g(S.map.channel),aoMapUv:v&&g(S.aoMap.channel),lightMapUv:mt&&g(S.lightMap.channel),bumpMapUv:st&&g(S.bumpMap.channel),normalMapUv:V&&g(S.normalMap.channel),displacementMapUv:O&&g(S.displacementMap.channel),emissiveMapUv:J&&g(S.emissiveMap.channel),metalnessMapUv:ot&&g(S.metalnessMap.channel),roughnessMapUv:I&&g(S.roughnessMap.channel),anisotropyMapUv:yt&&g(S.anisotropyMap.channel),clearcoatMapUv:At&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:It&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&g(S.sheenRoughnessMap.channel),specularMapUv:te&&g(S.specularMap.channel),specularColorMapUv:ee&&g(S.specularColorMap.channel),specularIntensityMapUv:xe&&g(S.specularIntensityMap.channel),transmissionMapUv:et&&g(S.transmissionMap.channel),thicknessMapUv:Ct&&g(S.thicknessMap.channel),alphaMapUv:vt&&g(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(V||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(Jt||vt),fog:!!y,useFog:S.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:xt,skinning:z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Y,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Jt&&S.map.isVideoTexture===!0&&he.getTransfer(S.map.colorSpace)===we,decodeVideoTextureEmissive:J&&S.emissiveMap.isVideoTexture===!0&&he.getTransfer(S.emissiveMap.colorSpace)===we,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===xn,flipSided:S.side===qe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:se&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&S.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function u(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const B in S.defines)w.push(B),w.push(S.defines[B]);return S.isRawShaderMaterial===!1&&(x(w,S),E(w,S),w.push(i.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function x(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function E(S,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),S.push(a.mask)}function M(S){const w=_[S.type];let B;if(w){const C=vn[w];B=Vc.clone(C.uniforms)}else B=S.uniforms;return B}function R(S,w){let B;for(let C=0,z=d.length;C<z;C++){const y=d[C];if(y.cacheKey===w){B=y,++B.usedTimes;break}}return B===void 0&&(B=new rg(i,w,S,s),d.push(B)),B}function P(S){if(--S.usedTimes===0){const w=d.indexOf(S);d[w]=d[d.length-1],d.pop(),S.destroy()}}function L(S){l.remove(S)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:R,releaseProgram:P,releaseShaderCache:L,programs:d,dispose:N}}function cg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function ug(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Fl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ol(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f,p,h,_,g,m){let u=i[t];return u===void 0?(u={id:f.id,object:f,geometry:p,material:h,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},i[t]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=h,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=g,u.group=m),t++,u}function a(f,p,h,_,g,m){const u=o(f,p,h,_,g,m);h.transmission>0?n.push(u):h.transparent===!0?r.push(u):e.push(u)}function l(f,p,h,_,g,m){const u=o(f,p,h,_,g,m);h.transmission>0?n.unshift(u):h.transparent===!0?r.unshift(u):e.unshift(u)}function c(f,p){e.length>1&&e.sort(f||ug),n.length>1&&n.sort(p||Fl),r.length>1&&r.sort(p||Fl)}function d(){for(let f=t,p=i.length;f<p;f++){const h=i[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function hg(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Ol,i.set(n,[o])):r>=s.length?(o=new Ol,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function dg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Z,color:new re};break;case"SpotLight":e={position:new Z,direction:new Z,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[t.id]=e,e}}}function fg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let pg=0;function mg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function gg(i){const t=new dg,e=fg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Z);const r=new Z,s=new ie,o=new ie;function a(c){let d=0,f=0,p=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let h=0,_=0,g=0,m=0,u=0,x=0,E=0,M=0,R=0,P=0,L=0;c.sort(mg);for(let S=0,w=c.length;S<w;S++){const B=c[S],C=B.color,z=B.intensity,y=B.distance,W=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=C.r*z,f+=C.g*z,p+=C.b*z;else if(B.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(B.sh.coefficients[H],z);L++}else if(B.isDirectionalLight){const H=t.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const K=B.shadow,$=e.get(B);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,n.directionalShadow[h]=$,n.directionalShadowMap[h]=W,n.directionalShadowMatrix[h]=B.shadow.matrix,x++}n.directional[h]=H,h++}else if(B.isSpotLight){const H=t.get(B);H.position.setFromMatrixPosition(B.matrixWorld),H.color.copy(C).multiplyScalar(z),H.distance=y,H.coneCos=Math.cos(B.angle),H.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),H.decay=B.decay,n.spot[g]=H;const K=B.shadow;if(B.map&&(n.spotLightMap[R]=B.map,R++,K.updateMatrices(B),B.castShadow&&P++),n.spotLightMatrix[g]=K.matrix,B.castShadow){const $=e.get(B);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,n.spotShadow[g]=$,n.spotShadowMap[g]=W,M++}g++}else if(B.isRectAreaLight){const H=t.get(B);H.color.copy(C).multiplyScalar(z),H.halfWidth.set(B.width*.5,0,0),H.halfHeight.set(0,B.height*.5,0),n.rectArea[m]=H,m++}else if(B.isPointLight){const H=t.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity),H.distance=B.distance,H.decay=B.decay,B.castShadow){const K=B.shadow,$=e.get(B);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,$.shadowCameraNear=K.camera.near,$.shadowCameraFar=K.camera.far,n.pointShadow[_]=$,n.pointShadowMap[_]=W,n.pointShadowMatrix[_]=B.shadow.matrix,E++}n.point[_]=H,_++}else if(B.isHemisphereLight){const H=t.get(B);H.skyColor.copy(B.color).multiplyScalar(z),H.groundColor.copy(B.groundColor).multiplyScalar(z),n.hemi[u]=H,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=p;const N=n.hash;(N.directionalLength!==h||N.pointLength!==_||N.spotLength!==g||N.rectAreaLength!==m||N.hemiLength!==u||N.numDirectionalShadows!==x||N.numPointShadows!==E||N.numSpotShadows!==M||N.numSpotMaps!==R||N.numLightProbes!==L)&&(n.directional.length=h,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+R-P,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=L,N.directionalLength=h,N.pointLength=_,N.spotLength=g,N.rectAreaLength=m,N.hemiLength=u,N.numDirectionalShadows=x,N.numPointShadows=E,N.numSpotShadows=M,N.numSpotMaps=R,N.numLightProbes=L,n.version=pg++)}function l(c,d){let f=0,p=0,h=0,_=0,g=0;const m=d.matrixWorldInverse;for(let u=0,x=c.length;u<x;u++){const E=c[u];if(E.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(E.isSpotLight){const M=n.spot[h];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(E.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const M=n.point[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),p++}else if(E.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function kl(i){const t=new gg(i),e=[],n=[];function r(d){c.camera=d,e.length=0,n.length=0}function s(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function _g(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new kl(i),t.set(r,[a])):s>=o.length?(a=new kl(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class vg extends _n{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xg extends _n{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bg=`uniform sampler2D shadow_pass;
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
}`;function Mg(i,t,e){let n=new Ao;const r=new fe,s=new fe,o=new ye,a=new vg({depthPacking:th}),l=new xg,c={},d=e.maxTextureSize,f={[kn]:qe,[qe]:kn,[xn]:xn},p=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:yg,fragmentShader:bg}),h=p.clone();h.defines.HORIZONTAL_PASS=1;const _=new Ve;_.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Te(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yc;let u=this.type;this.render=function(P,L,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const S=i.getRenderTarget(),w=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),C=i.state;C.setBlending(ti),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const z=u!==Ln&&this.type===Ln,y=u===Ln&&this.type!==Ln;for(let W=0,H=P.length;W<H;W++){const K=P[W],$=K.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const Q=$.getFrameExtents();if(r.multiply(Q),s.copy($.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Q.x),r.x=s.x*Q.x,$.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Q.y),r.y=s.y*Q.y,$.mapSize.y=s.y)),$.map===null||z===!0||y===!0){const j=this.type!==Ln?{minFilter:nn,magFilter:nn}:{};$.map!==null&&$.map.dispose(),$.map=new vi(r.x,r.y,j),$.map.texture.name=K.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const ft=$.getViewportCount();for(let j=0;j<ft;j++){const Y=$.getViewport(j);o.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),C.viewport(o),$.updateMatrices(K,j),n=$.getFrustum(),M(L,N,$.camera,K,this.type)}$.isPointLightShadow!==!0&&this.type===Ln&&x($,N),$.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(S,w,B)};function x(P,L){const N=t.update(g);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,h.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,h.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new vi(r.x,r.y)),p.uniforms.shadow_pass.value=P.map.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(L,null,N,p,g,null),h.uniforms.shadow_pass.value=P.mapPass.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(L,null,N,h,g,null)}function E(P,L,N,S){let w=null;const B=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(B!==void 0)w=B;else if(w=N.isPointLight===!0?l:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const C=w.uuid,z=L.uuid;let y=c[C];y===void 0&&(y={},c[C]=y);let W=y[z];W===void 0&&(W=w.clone(),y[z]=W,L.addEventListener("dispose",R)),w=W}if(w.visible=L.visible,w.wireframe=L.wireframe,S===Ln?w.side=L.shadowSide!==null?L.shadowSide:L.side:w.side=L.shadowSide!==null?L.shadowSide:f[L.side],w.alphaMap=L.alphaMap,w.alphaTest=L.alphaTest,w.map=L.map,w.clipShadows=L.clipShadows,w.clippingPlanes=L.clippingPlanes,w.clipIntersection=L.clipIntersection,w.displacementMap=L.displacementMap,w.displacementScale=L.displacementScale,w.displacementBias=L.displacementBias,w.wireframeLinewidth=L.wireframeLinewidth,w.linewidth=L.linewidth,N.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const C=i.properties.get(w);C.light=N}return w}function M(P,L,N,S,w){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&w===Ln)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const z=t.update(P),y=P.material;if(Array.isArray(y)){const W=z.groups;for(let H=0,K=W.length;H<K;H++){const $=W[H],Q=y[$.materialIndex];if(Q&&Q.visible){const ft=E(P,Q,S,w);P.onBeforeShadow(i,P,L,N,z,ft,$),i.renderBufferDirect(N,null,z,ft,P,$),P.onAfterShadow(i,P,L,N,z,ft,$)}}}else if(y.visible){const W=E(P,y,S,w);P.onBeforeShadow(i,P,L,N,z,W,null),i.renderBufferDirect(N,null,z,W,P,null),P.onAfterShadow(i,P,L,N,z,W,null)}}const C=P.children;for(let z=0,y=C.length;z<y;z++)M(C[z],L,N,S,w)}function R(P){P.target.removeEventListener("dispose",R);for(const N in c){const S=c[N],w=P.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}const Sg={[Ia]:Da,[Na]:Oa,[Ua]:ka,[qi]:Fa,[Da]:Ia,[Oa]:Na,[ka]:Ua,[Fa]:qi};function Eg(i,t){function e(){let et=!1;const Ct=new ye;let pt=null;const vt=new ye(0,0,0,0);return{setMask:function(Rt){pt!==Rt&&!et&&(i.colorMask(Rt,Rt,Rt,Rt),pt=Rt)},setLocked:function(Rt){et=Rt},setClear:function(Rt,Dt,se,Ae,Ue){Ue===!0&&(Rt*=Ae,Dt*=Ae,se*=Ae),Ct.set(Rt,Dt,se,Ae),vt.equals(Ct)===!1&&(i.clearColor(Rt,Dt,se,Ae),vt.copy(Ct))},reset:function(){et=!1,pt=null,vt.set(-1,0,0,0)}}}function n(){let et=!1,Ct=!1,pt=null,vt=null,Rt=null;return{setReversed:function(Dt){if(Ct!==Dt){const se=t.get("EXT_clip_control");Ct?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT);const Ae=Rt;Rt=null,this.setClear(Ae)}Ct=Dt},getReversed:function(){return Ct},setTest:function(Dt){Dt?dt(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(Dt){pt!==Dt&&!et&&(i.depthMask(Dt),pt=Dt)},setFunc:function(Dt){if(Ct&&(Dt=Sg[Dt]),vt!==Dt){switch(Dt){case Ia:i.depthFunc(i.NEVER);break;case Da:i.depthFunc(i.ALWAYS);break;case Na:i.depthFunc(i.LESS);break;case qi:i.depthFunc(i.LEQUAL);break;case Ua:i.depthFunc(i.EQUAL);break;case Fa:i.depthFunc(i.GEQUAL);break;case Oa:i.depthFunc(i.GREATER);break;case ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=Dt}},setLocked:function(Dt){et=Dt},setClear:function(Dt){Rt!==Dt&&(Ct&&(Dt=1-Dt),i.clearDepth(Dt),Rt=Dt)},reset:function(){et=!1,pt=null,vt=null,Rt=null,Ct=!1}}}function r(){let et=!1,Ct=null,pt=null,vt=null,Rt=null,Dt=null,se=null,Ae=null,Ue=null;return{setTest:function(le){et||(le?dt(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(le){Ct!==le&&!et&&(i.stencilMask(le),Ct=le)},setFunc:function(le,Ye,cn){(pt!==le||vt!==Ye||Rt!==cn)&&(i.stencilFunc(le,Ye,cn),pt=le,vt=Ye,Rt=cn)},setOp:function(le,Ye,cn){(Dt!==le||se!==Ye||Ae!==cn)&&(i.stencilOp(le,Ye,cn),Dt=le,se=Ye,Ae=cn)},setLocked:function(le){et=le},setClear:function(le){Ue!==le&&(i.clearStencil(le),Ue=le)},reset:function(){et=!1,Ct=null,pt=null,vt=null,Rt=null,Dt=null,se=null,Ae=null,Ue=null}}}const s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let d={},f={},p=new WeakMap,h=[],_=null,g=!1,m=null,u=null,x=null,E=null,M=null,R=null,P=null,L=new re(0,0,0),N=0,S=!1,w=null,B=null,C=null,z=null,y=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,K=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec($)[1]),H=K>=1):$.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),H=K>=2);let Q=null,ft={};const j=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),_t=new ye().fromArray(j),X=new ye().fromArray(Y);function q(et,Ct,pt,vt){const Rt=new Uint8Array(4),Dt=i.createTexture();i.bindTexture(et,Dt),i.texParameteri(et,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(et,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<pt;se++)et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?i.texImage3D(Ct,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(Ct+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return Dt}const lt={};lt[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),dt(i.DEPTH_TEST),o.setFunc(qi),st(!1),V(Oo),dt(i.CULL_FACE),v(ti);function dt(et){d[et]!==!0&&(i.enable(et),d[et]=!0)}function xt(et){d[et]!==!1&&(i.disable(et),d[et]=!1)}function Et(et,Ct){return f[et]!==Ct?(i.bindFramebuffer(et,Ct),f[et]=Ct,et===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ct),et===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ct),!0):!1}function kt(et,Ct){let pt=h,vt=!1;if(et){pt=p.get(Ct),pt===void 0&&(pt=[],p.set(Ct,pt));const Rt=et.textures;if(pt.length!==Rt.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let Dt=0,se=Rt.length;Dt<se;Dt++)pt[Dt]=i.COLOR_ATTACHMENT0+Dt;pt.length=Rt.length,vt=!0}}else pt[0]!==i.BACK&&(pt[0]=i.BACK,vt=!0);vt&&i.drawBuffers(pt)}function Jt(et){return _!==et?(i.useProgram(et),_=et,!0):!1}const Qt={[pi]:i.FUNC_ADD,[Eu]:i.FUNC_SUBTRACT,[wu]:i.FUNC_REVERSE_SUBTRACT};Qt[Tu]=i.MIN,Qt[Au]=i.MAX;const de={[Cu]:i.ZERO,[Ru]:i.ONE,[Pu]:i.SRC_COLOR,[Pa]:i.SRC_ALPHA,[Fu]:i.SRC_ALPHA_SATURATE,[Nu]:i.DST_COLOR,[Iu]:i.DST_ALPHA,[Lu]:i.ONE_MINUS_SRC_COLOR,[La]:i.ONE_MINUS_SRC_ALPHA,[Uu]:i.ONE_MINUS_DST_COLOR,[Du]:i.ONE_MINUS_DST_ALPHA,[Ou]:i.CONSTANT_COLOR,[ku]:i.ONE_MINUS_CONSTANT_COLOR,[Bu]:i.CONSTANT_ALPHA,[zu]:i.ONE_MINUS_CONSTANT_ALPHA};function v(et,Ct,pt,vt,Rt,Dt,se,Ae,Ue,le){if(et===ti){g===!0&&(xt(i.BLEND),g=!1);return}if(g===!1&&(dt(i.BLEND),g=!0),et!==Su){if(et!==m||le!==S){if((u!==pi||M!==pi)&&(i.blendEquation(i.FUNC_ADD),u=pi,M=pi),le)switch(et){case Vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ko:i.blendFunc(i.ONE,i.ONE);break;case Bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",et);break}else switch(et){case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ko:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",et);break}x=null,E=null,R=null,P=null,L.set(0,0,0),N=0,m=et,S=le}return}Rt=Rt||Ct,Dt=Dt||pt,se=se||vt,(Ct!==u||Rt!==M)&&(i.blendEquationSeparate(Qt[Ct],Qt[Rt]),u=Ct,M=Rt),(pt!==x||vt!==E||Dt!==R||se!==P)&&(i.blendFuncSeparate(de[pt],de[vt],de[Dt],de[se]),x=pt,E=vt,R=Dt,P=se),(Ae.equals(L)===!1||Ue!==N)&&(i.blendColor(Ae.r,Ae.g,Ae.b,Ue),L.copy(Ae),N=Ue),m=et,S=!1}function mt(et,Ct){et.side===xn?xt(i.CULL_FACE):dt(i.CULL_FACE);let pt=et.side===qe;Ct&&(pt=!pt),st(pt),et.blending===Vi&&et.transparent===!1?v(ti):v(et.blending,et.blendEquation,et.blendSrc,et.blendDst,et.blendEquationAlpha,et.blendSrcAlpha,et.blendDstAlpha,et.blendColor,et.blendAlpha,et.premultipliedAlpha),o.setFunc(et.depthFunc),o.setTest(et.depthTest),o.setMask(et.depthWrite),s.setMask(et.colorWrite);const vt=et.stencilWrite;a.setTest(vt),vt&&(a.setMask(et.stencilWriteMask),a.setFunc(et.stencilFunc,et.stencilRef,et.stencilFuncMask),a.setOp(et.stencilFail,et.stencilZFail,et.stencilZPass)),J(et.polygonOffset,et.polygonOffsetFactor,et.polygonOffsetUnits),et.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(et){w!==et&&(et?i.frontFace(i.CW):i.frontFace(i.CCW),w=et)}function V(et){et!==yu?(dt(i.CULL_FACE),et!==B&&(et===Oo?i.cullFace(i.BACK):et===bu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),B=et}function O(et){et!==C&&(H&&i.lineWidth(et),C=et)}function J(et,Ct,pt){et?(dt(i.POLYGON_OFFSET_FILL),(z!==Ct||y!==pt)&&(i.polygonOffset(Ct,pt),z=Ct,y=pt)):xt(i.POLYGON_OFFSET_FILL)}function ot(et){et?dt(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function I(et){et===void 0&&(et=i.TEXTURE0+W-1),Q!==et&&(i.activeTexture(et),Q=et)}function b(et,Ct,pt){pt===void 0&&(Q===null?pt=i.TEXTURE0+W-1:pt=Q);let vt=ft[pt];vt===void 0&&(vt={type:void 0,texture:void 0},ft[pt]=vt),(vt.type!==et||vt.texture!==Ct)&&(Q!==pt&&(i.activeTexture(pt),Q=pt),i.bindTexture(et,Ct||lt[et]),vt.type=et,vt.texture=Ct)}function G(){const et=ft[Q];et!==void 0&&et.type!==void 0&&(i.bindTexture(et.type,null),et.type=void 0,et.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function at(){try{i.texSubImage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function yt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function bt(){try{i.texStorage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Ut(){try{i.texImage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function It(){try{i.texImage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Yt(et){_t.equals(et)===!1&&(i.scissor(et.x,et.y,et.z,et.w),_t.copy(et))}function Ft(et){X.equals(et)===!1&&(i.viewport(et.x,et.y,et.z,et.w),X.copy(et))}function te(et,Ct){let pt=c.get(Ct);pt===void 0&&(pt=new WeakMap,c.set(Ct,pt));let vt=pt.get(et);vt===void 0&&(vt=i.getUniformBlockIndex(Ct,et.name),pt.set(et,vt))}function ee(et,Ct){const vt=c.get(Ct).get(et);l.get(Ct)!==vt&&(i.uniformBlockBinding(Ct,vt,et.__bindingPointIndex),l.set(Ct,vt))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Q=null,ft={},f={},p=new WeakMap,h=[],_=null,g=!1,m=null,u=null,x=null,E=null,M=null,R=null,P=null,L=new re(0,0,0),N=0,S=!1,w=null,B=null,C=null,z=null,y=null,_t.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:dt,disable:xt,bindFramebuffer:Et,drawBuffers:kt,useProgram:Jt,setBlending:v,setMaterial:mt,setFlipSided:st,setCullFace:V,setLineWidth:O,setPolygonOffset:J,setScissorTest:ot,activeTexture:I,bindTexture:b,unbindTexture:G,compressedTexImage2D:rt,compressedTexImage3D:nt,texImage2D:Ut,texImage3D:It,updateUBOMapping:te,uniformBlockBinding:ee,texStorage2D:oe,texStorage3D:bt,texSubImage2D:at,texSubImage3D:wt,compressedTexSubImage2D:yt,compressedTexSubImage3D:At,scissor:Yt,viewport:Ft,reset:xe}}function Bl(i,t,e,n){const r=wg(n);switch(e){case wc:return i*t;case Ac:return i*t;case Cc:return i*t*2;case Rc:return i*t/r.components*r.byteLength;case So:return i*t/r.components*r.byteLength;case Pc:return i*t*2/r.components*r.byteLength;case Eo:return i*t*2/r.components*r.byteLength;case Tc:return i*t*3/r.components*r.byteLength;case ln:return i*t*4/r.components*r.byteLength;case wo:return i*t*4/r.components*r.byteLength;case vs:case xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ys:case bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:case Xa:return Math.max(i,16)*Math.max(t,8)/4;case Ha:case Wa:return Math.max(i,8)*Math.max(t,8)/2;case ja:case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case to:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case no:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case io:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ro:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case so:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case oo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case lo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ms:case co:case uo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Lc:case ho:return Math.ceil(i/4)*Math.ceil(t/4)*8;case fo:case po:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wg(i){switch(i){case Bn:case Mc:return{byteLength:1,components:1};case Sr:case Sc:case Cr:return{byteLength:2,components:1};case bo:case Mo:return{byteLength:2,components:4};case _i:case yo:case yn:return{byteLength:4,components:1};case Ec:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Tg(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,d=new WeakMap;let f;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,b){return h?new OffscreenCanvas(I,b):Er("canvas")}function g(I,b,G){let rt=1;const nt=ot(I);if((nt.width>G||nt.height>G)&&(rt=G/Math.max(nt.width,nt.height)),rt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const at=Math.floor(rt*nt.width),wt=Math.floor(rt*nt.height);f===void 0&&(f=_(at,wt));const yt=b?_(at,wt):f;return yt.width=at,yt.height=wt,yt.getContext("2d").drawImage(I,0,0,at,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+at+"x"+wt+")."),yt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),I;return I}function m(I){return I.generateMipmaps}function u(I){i.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(I,b,G,rt,nt=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let at=b;if(b===i.RED&&(G===i.FLOAT&&(at=i.R32F),G===i.HALF_FLOAT&&(at=i.R16F),G===i.UNSIGNED_BYTE&&(at=i.R8)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(at=i.R8UI),G===i.UNSIGNED_SHORT&&(at=i.R16UI),G===i.UNSIGNED_INT&&(at=i.R32UI),G===i.BYTE&&(at=i.R8I),G===i.SHORT&&(at=i.R16I),G===i.INT&&(at=i.R32I)),b===i.RG&&(G===i.FLOAT&&(at=i.RG32F),G===i.HALF_FLOAT&&(at=i.RG16F),G===i.UNSIGNED_BYTE&&(at=i.RG8)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(at=i.RG8UI),G===i.UNSIGNED_SHORT&&(at=i.RG16UI),G===i.UNSIGNED_INT&&(at=i.RG32UI),G===i.BYTE&&(at=i.RG8I),G===i.SHORT&&(at=i.RG16I),G===i.INT&&(at=i.RG32I)),b===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(at=i.RGB8UI),G===i.UNSIGNED_SHORT&&(at=i.RGB16UI),G===i.UNSIGNED_INT&&(at=i.RGB32UI),G===i.BYTE&&(at=i.RGB8I),G===i.SHORT&&(at=i.RGB16I),G===i.INT&&(at=i.RGB32I)),b===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),G===i.UNSIGNED_INT&&(at=i.RGBA32UI),G===i.BYTE&&(at=i.RGBA8I),G===i.SHORT&&(at=i.RGBA16I),G===i.INT&&(at=i.RGBA32I)),b===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),b===i.RGBA){const wt=nt?Us:he.getTransfer(rt);G===i.FLOAT&&(at=i.RGBA32F),G===i.HALF_FLOAT&&(at=i.RGBA16F),G===i.UNSIGNED_BYTE&&(at=wt===we?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function M(I,b){let G;return I?b===null||b===_i||b===Ki?G=i.DEPTH24_STENCIL8:b===yn?G=i.DEPTH32F_STENCIL8:b===Sr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===_i||b===Ki?G=i.DEPTH_COMPONENT24:b===yn?G=i.DEPTH_COMPONENT32F:b===Sr&&(G=i.DEPTH_COMPONENT16),G}function R(I,b){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==nn&&I.minFilter!==en?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function P(I){const b=I.target;b.removeEventListener("dispose",P),N(b),b.isVideoTexture&&d.delete(b)}function L(I){const b=I.target;b.removeEventListener("dispose",L),w(b)}function N(I){const b=n.get(I);if(b.__webglInit===void 0)return;const G=I.source,rt=p.get(G);if(rt){const nt=rt[b.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&S(I),Object.keys(rt).length===0&&p.delete(G)}n.remove(I)}function S(I){const b=n.get(I);i.deleteTexture(b.__webglTexture);const G=I.source,rt=p.get(G);delete rt[b.__cacheKey],o.memory.textures--}function w(I){const b=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(b.__webglFramebuffer[rt]))for(let nt=0;nt<b.__webglFramebuffer[rt].length;nt++)i.deleteFramebuffer(b.__webglFramebuffer[rt][nt]);else i.deleteFramebuffer(b.__webglFramebuffer[rt]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[rt])}else{if(Array.isArray(b.__webglFramebuffer))for(let rt=0;rt<b.__webglFramebuffer.length;rt++)i.deleteFramebuffer(b.__webglFramebuffer[rt]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let rt=0;rt<b.__webglColorRenderbuffer.length;rt++)b.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[rt]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=I.textures;for(let rt=0,nt=G.length;rt<nt;rt++){const at=n.get(G[rt]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),o.memory.textures--),n.remove(G[rt])}n.remove(I)}let B=0;function C(){B=0}function z(){const I=B;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),B+=1,I}function y(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function W(I,b){const G=n.get(I);if(I.isVideoTexture&&O(I),I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){const rt=I.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(G,I,b);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function H(I,b){const G=n.get(I);if(I.version>0&&G.__version!==I.version){X(G,I,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function K(I,b){const G=n.get(I);if(I.version>0&&G.__version!==I.version){X(G,I,b);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function $(I,b){const G=n.get(I);if(I.version>0&&G.__version!==I.version){q(G,I,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}const Q={[Nn]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[Va]:i.MIRRORED_REPEAT},ft={[nn]:i.NEAREST,[Ju]:i.NEAREST_MIPMAP_NEAREST,[kr]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[js]:i.LINEAR_MIPMAP_NEAREST,[Un]:i.LINEAR_MIPMAP_LINEAR},j={[nh]:i.NEVER,[lh]:i.ALWAYS,[ih]:i.LESS,[Ic]:i.LEQUAL,[rh]:i.EQUAL,[oh]:i.GEQUAL,[sh]:i.GREATER,[ah]:i.NOTEQUAL};function Y(I,b){if(b.type===yn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===en||b.magFilter===js||b.magFilter===kr||b.magFilter===Un||b.minFilter===en||b.minFilter===js||b.minFilter===kr||b.minFilter===Un)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Q[b.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Q[b.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Q[b.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ft[b.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ft[b.minFilter]),b.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,j[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===nn||b.minFilter!==kr&&b.minFilter!==Un||b.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function _t(I,b){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",P));const rt=b.source;let nt=p.get(rt);nt===void 0&&(nt={},p.set(rt,nt));const at=y(b);if(at!==I.__cacheKey){nt[at]===void 0&&(nt[at]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),nt[at].usedTimes++;const wt=nt[I.__cacheKey];wt!==void 0&&(nt[I.__cacheKey].usedTimes--,wt.usedTimes===0&&S(b)),I.__cacheKey=at,I.__webglTexture=nt[at].texture}return G}function X(I,b,G){let rt=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(rt=i.TEXTURE_3D);const nt=_t(I,b),at=b.source;e.bindTexture(rt,I.__webglTexture,i.TEXTURE0+G);const wt=n.get(at);if(at.version!==wt.__version||nt===!0){e.activeTexture(i.TEXTURE0+G);const yt=he.getPrimaries(he.workingColorSpace),At=b.colorSpace===Qn?null:he.getPrimaries(b.colorSpace),oe=b.colorSpace===Qn||yt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let bt=g(b.image,!1,r.maxTextureSize);bt=J(b,bt);const Ut=s.convert(b.format,b.colorSpace),It=s.convert(b.type);let Yt=E(b.internalFormat,Ut,It,b.colorSpace,b.isVideoTexture);Y(rt,b);let Ft;const te=b.mipmaps,ee=b.isVideoTexture!==!0,xe=wt.__version===void 0||nt===!0,et=at.dataReady,Ct=R(b,bt);if(b.isDepthTexture)Yt=M(b.format===Ji,b.type),xe&&(ee?e.texStorage2D(i.TEXTURE_2D,1,Yt,bt.width,bt.height):e.texImage2D(i.TEXTURE_2D,0,Yt,bt.width,bt.height,0,Ut,It,null));else if(b.isDataTexture)if(te.length>0){ee&&xe&&e.texStorage2D(i.TEXTURE_2D,Ct,Yt,te[0].width,te[0].height);for(let pt=0,vt=te.length;pt<vt;pt++)Ft=te[pt],ee?et&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Ft.width,Ft.height,Ut,It,Ft.data):e.texImage2D(i.TEXTURE_2D,pt,Yt,Ft.width,Ft.height,0,Ut,It,Ft.data);b.generateMipmaps=!1}else ee?(xe&&e.texStorage2D(i.TEXTURE_2D,Ct,Yt,bt.width,bt.height),et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt.width,bt.height,Ut,It,bt.data)):e.texImage2D(i.TEXTURE_2D,0,Yt,bt.width,bt.height,0,Ut,It,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ee&&xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Yt,te[0].width,te[0].height,bt.depth);for(let pt=0,vt=te.length;pt<vt;pt++)if(Ft=te[pt],b.format!==ln)if(Ut!==null)if(ee){if(et)if(b.layerUpdates.size>0){const Rt=Bl(Ft.width,Ft.height,b.format,b.type);for(const Dt of b.layerUpdates){const se=Ft.data.subarray(Dt*Rt/Ft.data.BYTES_PER_ELEMENT,(Dt+1)*Rt/Ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,Dt,Ft.width,Ft.height,1,Ut,se)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Ft.width,Ft.height,bt.depth,Ut,Ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,Yt,Ft.width,Ft.height,bt.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?et&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Ft.width,Ft.height,bt.depth,Ut,It,Ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,Yt,Ft.width,Ft.height,bt.depth,0,Ut,It,Ft.data)}else{ee&&xe&&e.texStorage2D(i.TEXTURE_2D,Ct,Yt,te[0].width,te[0].height);for(let pt=0,vt=te.length;pt<vt;pt++)Ft=te[pt],b.format!==ln?Ut!==null?ee?et&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,Ft.width,Ft.height,Ut,Ft.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,Yt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?et&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Ft.width,Ft.height,Ut,It,Ft.data):e.texImage2D(i.TEXTURE_2D,pt,Yt,Ft.width,Ft.height,0,Ut,It,Ft.data)}else if(b.isDataArrayTexture)if(ee){if(xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Yt,bt.width,bt.height,bt.depth),et)if(b.layerUpdates.size>0){const pt=Bl(bt.width,bt.height,b.format,b.type);for(const vt of b.layerUpdates){const Rt=bt.data.subarray(vt*pt/bt.data.BYTES_PER_ELEMENT,(vt+1)*pt/bt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,bt.width,bt.height,1,Ut,It,Rt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ut,It,bt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Yt,bt.width,bt.height,bt.depth,0,Ut,It,bt.data);else if(b.isData3DTexture)ee?(xe&&e.texStorage3D(i.TEXTURE_3D,Ct,Yt,bt.width,bt.height,bt.depth),et&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ut,It,bt.data)):e.texImage3D(i.TEXTURE_3D,0,Yt,bt.width,bt.height,bt.depth,0,Ut,It,bt.data);else if(b.isFramebufferTexture){if(xe)if(ee)e.texStorage2D(i.TEXTURE_2D,Ct,Yt,bt.width,bt.height);else{let pt=bt.width,vt=bt.height;for(let Rt=0;Rt<Ct;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,Yt,pt,vt,0,Ut,It,null),pt>>=1,vt>>=1}}else if(te.length>0){if(ee&&xe){const pt=ot(te[0]);e.texStorage2D(i.TEXTURE_2D,Ct,Yt,pt.width,pt.height)}for(let pt=0,vt=te.length;pt<vt;pt++)Ft=te[pt],ee?et&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Ut,It,Ft):e.texImage2D(i.TEXTURE_2D,pt,Yt,Ut,It,Ft);b.generateMipmaps=!1}else if(ee){if(xe){const pt=ot(bt);e.texStorage2D(i.TEXTURE_2D,Ct,Yt,pt.width,pt.height)}et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ut,It,bt)}else e.texImage2D(i.TEXTURE_2D,0,Yt,Ut,It,bt);m(b)&&u(rt),wt.__version=at.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function q(I,b,G){if(b.image.length!==6)return;const rt=_t(I,b),nt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+G);const at=n.get(nt);if(nt.version!==at.__version||rt===!0){e.activeTexture(i.TEXTURE0+G);const wt=he.getPrimaries(he.workingColorSpace),yt=b.colorSpace===Qn?null:he.getPrimaries(b.colorSpace),At=b.colorSpace===Qn||wt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const oe=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,Ut=[];for(let vt=0;vt<6;vt++)!oe&&!bt?Ut[vt]=g(b.image[vt],!0,r.maxCubemapSize):Ut[vt]=bt?b.image[vt].image:b.image[vt],Ut[vt]=J(b,Ut[vt]);const It=Ut[0],Yt=s.convert(b.format,b.colorSpace),Ft=s.convert(b.type),te=E(b.internalFormat,Yt,Ft,b.colorSpace),ee=b.isVideoTexture!==!0,xe=at.__version===void 0||rt===!0,et=nt.dataReady;let Ct=R(b,It);Y(i.TEXTURE_CUBE_MAP,b);let pt;if(oe){ee&&xe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,te,It.width,It.height);for(let vt=0;vt<6;vt++){pt=Ut[vt].mipmaps;for(let Rt=0;Rt<pt.length;Rt++){const Dt=pt[Rt];b.format!==ln?Yt!==null?ee?et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt,0,0,Dt.width,Dt.height,Yt,Dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt,te,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt,0,0,Dt.width,Dt.height,Yt,Ft,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt,te,Dt.width,Dt.height,0,Yt,Ft,Dt.data)}}}else{if(pt=b.mipmaps,ee&&xe){pt.length>0&&Ct++;const vt=ot(Ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,te,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(bt){ee?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ut[vt].width,Ut[vt].height,Yt,Ft,Ut[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,te,Ut[vt].width,Ut[vt].height,0,Yt,Ft,Ut[vt].data);for(let Rt=0;Rt<pt.length;Rt++){const se=pt[Rt].image[vt].image;ee?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt+1,0,0,se.width,se.height,Yt,Ft,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt+1,te,se.width,se.height,0,Yt,Ft,se.data)}}else{ee?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Yt,Ft,Ut[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,te,Yt,Ft,Ut[vt]);for(let Rt=0;Rt<pt.length;Rt++){const Dt=pt[Rt];ee?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt+1,0,0,Yt,Ft,Dt.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt+1,te,Yt,Ft,Dt.image[vt])}}}m(b)&&u(i.TEXTURE_CUBE_MAP),at.__version=nt.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function lt(I,b,G,rt,nt,at){const wt=s.convert(G.format,G.colorSpace),yt=s.convert(G.type),At=E(G.internalFormat,wt,yt,G.colorSpace),oe=n.get(b),bt=n.get(G);if(bt.__renderTarget=b,!oe.__hasExternalTextures){const Ut=Math.max(1,b.width>>at),It=Math.max(1,b.height>>at);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,at,At,Ut,It,b.depth,0,wt,yt,null):e.texImage2D(nt,at,At,Ut,It,0,wt,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),V(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,nt,bt.__webglTexture,0,st(b)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,nt,bt.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(I,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,I),b.depthBuffer){const rt=b.depthTexture,nt=rt&&rt.isDepthTexture?rt.type:null,at=M(b.stencilBuffer,nt),wt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=st(b);V(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,at,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,at,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,at,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,I)}else{const rt=b.textures;for(let nt=0;nt<rt.length;nt++){const at=rt[nt],wt=s.convert(at.format,at.colorSpace),yt=s.convert(at.type),At=E(at.internalFormat,wt,yt,at.colorSpace),oe=st(b);G&&V(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,At,b.width,b.height):V(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,At,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,At,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=n.get(b.depthTexture);rt.__renderTarget=b,(!rt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W(b.depthTexture,0);const nt=rt.__webglTexture,at=st(b);if(b.depthTexture.format===Hi)V(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(b.depthTexture.format===Ji)V(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Et(I){const b=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const rt=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),rt){const nt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,rt.removeEventListener("dispose",nt)};rt.addEventListener("dispose",nt),b.__depthDisposeCallback=nt}b.__boundDepthTexture=rt}if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");xt(b.__webglFramebuffer,I)}else if(G){b.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[rt]),b.__webglDepthbuffer[rt]===void 0)b.__webglDepthbuffer[rt]=i.createRenderbuffer(),dt(b.__webglDepthbuffer[rt],I,!1);else{const nt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=b.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,at)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),dt(b.__webglDepthbuffer,I,!1);else{const rt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(I,b,G){const rt=n.get(I);b!==void 0&&lt(rt.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Et(I)}function Jt(I){const b=I.texture,G=n.get(I),rt=n.get(b);I.addEventListener("dispose",L);const nt=I.textures,at=I.isWebGLCubeRenderTarget===!0,wt=nt.length>1;if(wt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=b.version,o.memory.textures++),at){G.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[yt]=[];for(let At=0;At<b.mipmaps.length;At++)G.__webglFramebuffer[yt][At]=i.createFramebuffer()}else G.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let yt=0;yt<b.mipmaps.length;yt++)G.__webglFramebuffer[yt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(wt)for(let yt=0,At=nt.length;yt<At;yt++){const oe=n.get(nt[yt]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&V(I)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let yt=0;yt<nt.length;yt++){const At=nt[yt];G.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[yt]);const oe=s.convert(At.format,At.colorSpace),bt=s.convert(At.type),Ut=E(At.internalFormat,oe,bt,At.colorSpace,I.isXRRenderTarget===!0),It=st(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,Ut,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,G.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(G.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),Y(i.TEXTURE_CUBE_MAP,b);for(let yt=0;yt<6;yt++)if(b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)lt(G.__webglFramebuffer[yt][At],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,At);else lt(G.__webglFramebuffer[yt],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);m(b)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let yt=0,At=nt.length;yt<At;yt++){const oe=nt[yt],bt=n.get(oe);e.bindTexture(i.TEXTURE_2D,bt.__webglTexture),Y(i.TEXTURE_2D,oe),lt(G.__webglFramebuffer,I,oe,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,0),m(oe)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(yt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,rt.__webglTexture),Y(yt,b),b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)lt(G.__webglFramebuffer[At],I,b,i.COLOR_ATTACHMENT0,yt,At);else lt(G.__webglFramebuffer,I,b,i.COLOR_ATTACHMENT0,yt,0);m(b)&&u(yt),e.unbindTexture()}I.depthBuffer&&Et(I)}function Qt(I){const b=I.textures;for(let G=0,rt=b.length;G<rt;G++){const nt=b[G];if(m(nt)){const at=x(I),wt=n.get(nt).__webglTexture;e.bindTexture(at,wt),u(at),e.unbindTexture()}}}const de=[],v=[];function mt(I){if(I.samples>0){if(V(I)===!1){const b=I.textures,G=I.width,rt=I.height;let nt=i.COLOR_BUFFER_BIT;const at=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(I),yt=b.length>1;if(yt)for(let At=0;At<b.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let At=0;At<b.length;At++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);const oe=n.get(b[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,G,rt,0,0,G,rt,nt,i.NEAREST),l===!0&&(de.length=0,v.length=0,de.push(i.COLOR_ATTACHMENT0+At),I.depthBuffer&&I.resolveDepthBuffer===!1&&(de.push(at),v.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,v)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let At=0;At<b.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);const oe=n.get(b[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,oe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const b=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function st(I){return Math.min(r.maxSamples,I.samples)}function V(I){const b=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function O(I){const b=o.render.frame;d.get(I)!==b&&(d.set(I,b),I.update())}function J(I,b){const G=I.colorSpace,rt=I.format,nt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==er&&G!==Qn&&(he.getTransfer(G)===we?(rt!==ln||nt!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function ot(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=C,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=$,this.rebindTextures=kt,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=V}function Ag(i,t){function e(n,r=Qn){let s;const o=he.getTransfer(r);if(n===Bn)return i.UNSIGNED_BYTE;if(n===bo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ec)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mc)return i.BYTE;if(n===Sc)return i.SHORT;if(n===Sr)return i.UNSIGNED_SHORT;if(n===yo)return i.INT;if(n===_i)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===Cr)return i.HALF_FLOAT;if(n===wc)return i.ALPHA;if(n===Tc)return i.RGB;if(n===ln)return i.RGBA;if(n===Ac)return i.LUMINANCE;if(n===Cc)return i.LUMINANCE_ALPHA;if(n===Hi)return i.DEPTH_COMPONENT;if(n===Ji)return i.DEPTH_STENCIL;if(n===Rc)return i.RED;if(n===So)return i.RED_INTEGER;if(n===Pc)return i.RG;if(n===Eo)return i.RG_INTEGER;if(n===wo)return i.RGBA_INTEGER;if(n===vs||n===xs||n===ys||n===bs)if(o===we)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===vs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===vs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ys)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ha||n===Ga||n===Wa||n===Xa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ha)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ga)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ja||n===qa||n===Ya)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ja||n===qa)return o===we?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ya)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Za||n===Ka||n===Ja||n===$a||n===Qa||n===to||n===eo||n===no||n===io||n===ro||n===so||n===ao||n===oo||n===lo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Za)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ka)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ja)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===to)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eo)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===no)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===io)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ro)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===so)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ao)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oo)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lo)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ms||n===co||n===uo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ms)return o===we?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===co)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lc||n===ho||n===fo||n===po)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ms)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ho)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===po)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Cg extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class gi extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rg={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),u=this._getHandJoint(c,g);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=d.position.distanceTo(f.position),h=.02,_=.005;c.inputState.pinching&&p>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new gi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Pg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lg=`
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

}`;class Ig{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Oe,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new zn({vertexShader:Pg,fragmentShader:Lg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Te(new ir(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dg extends nr{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,p=null,h=null,_=null;const g=new Ig,m=e.getContextAttributes();let u=null,x=null;const E=[],M=[],R=new fe;let P=null;const L=new ze;L.viewport=new ye;const N=new ze;N.viewport=new ye;const S=[L,N],w=new Cg;let B=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let q=E[X];return q===void 0&&(q=new ya,E[X]=q),q.getTargetRaySpace()},this.getControllerGrip=function(X){let q=E[X];return q===void 0&&(q=new ya,E[X]=q),q.getGripSpace()},this.getHand=function(X){let q=E[X];return q===void 0&&(q=new ya,E[X]=q),q.getHandSpace()};function z(X){const q=M.indexOf(X.inputSource);if(q===-1)return;const lt=E[q];lt!==void 0&&(lt.update(X.inputSource,X.frame,c||o),lt.dispatchEvent({type:X.type,data:X.inputSource}))}function y(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",y),r.removeEventListener("inputsourceschange",W);for(let X=0;X<E.length;X++){const q=M[X];q!==null&&(M[X]=null,E[X].disconnect(q))}B=null,C=null,g.reset(),t.setRenderTarget(u),h=null,p=null,f=null,r=null,x=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(u=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",y),r.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(R),r.renderState.layers===void 0){const q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,e,q),r.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new vi(h.framebufferWidth,h.framebufferHeight,{format:ln,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let q=null,lt=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=m.stencil?Ji:Hi,lt=m.stencil?Ki:_i);const xt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:s};f=new XRWebGLBinding(r,e),p=f.createProjectionLayer(xt),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),x=new vi(p.textureWidth,p.textureHeight,{format:ln,type:Bn,depthTexture:new Xc(p.textureWidth,p.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),_t.setContext(r),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(X){for(let q=0;q<X.removed.length;q++){const lt=X.removed[q],dt=M.indexOf(lt);dt>=0&&(M[dt]=null,E[dt].disconnect(lt))}for(let q=0;q<X.added.length;q++){const lt=X.added[q];let dt=M.indexOf(lt);if(dt===-1){for(let Et=0;Et<E.length;Et++)if(Et>=M.length){M.push(lt),dt=Et;break}else if(M[Et]===null){M[Et]=lt,dt=Et;break}if(dt===-1)break}const xt=E[dt];xt&&xt.connect(lt)}}const H=new Z,K=new Z;function $(X,q,lt){H.setFromMatrixPosition(q.matrixWorld),K.setFromMatrixPosition(lt.matrixWorld);const dt=H.distanceTo(K),xt=q.projectionMatrix.elements,Et=lt.projectionMatrix.elements,kt=xt[14]/(xt[10]-1),Jt=xt[14]/(xt[10]+1),Qt=(xt[9]+1)/xt[5],de=(xt[9]-1)/xt[5],v=(xt[8]-1)/xt[0],mt=(Et[8]+1)/Et[0],st=kt*v,V=kt*mt,O=dt/(-v+mt),J=O*-v;if(q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(J),X.translateZ(O),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),xt[10]===-1)X.projectionMatrix.copy(q.projectionMatrix),X.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const ot=kt+O,I=Jt+O,b=st-J,G=V+(dt-J),rt=Qt*Jt/I*ot,nt=de*Jt/I*ot;X.projectionMatrix.makePerspective(b,G,rt,nt,ot,I),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Q(X,q){q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let q=X.near,lt=X.far;g.texture!==null&&(g.depthNear>0&&(q=g.depthNear),g.depthFar>0&&(lt=g.depthFar)),w.near=N.near=L.near=q,w.far=N.far=L.far=lt,(B!==w.near||C!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),B=w.near,C=w.far),L.layers.mask=X.layers.mask|2,N.layers.mask=X.layers.mask|4,w.layers.mask=L.layers.mask|N.layers.mask;const dt=X.parent,xt=w.cameras;Q(w,dt);for(let Et=0;Et<xt.length;Et++)Q(xt[Et],dt);xt.length===2?$(w,L,N):w.projectionMatrix.copy(L.projectionMatrix),ft(X,w,dt)};function ft(X,q,lt){lt===null?X.matrix.copy(q.matrixWorld):(X.matrix.copy(lt.matrixWorld),X.matrix.invert(),X.matrix.multiply(q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(q.projectionMatrix),X.projectionMatrixInverse.copy(q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=$i*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(p===null&&h===null))return l},this.setFoveation=function(X){l=X,p!==null&&(p.fixedFoveation=X),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(w)};let j=null;function Y(X,q){if(d=q.getViewerPose(c||o),_=q,d!==null){const lt=d.views;h!==null&&(t.setRenderTargetFramebuffer(x,h.framebuffer),t.setRenderTarget(x));let dt=!1;lt.length!==w.cameras.length&&(w.cameras.length=0,dt=!0);for(let Et=0;Et<lt.length;Et++){const kt=lt[Et];let Jt=null;if(h!==null)Jt=h.getViewport(kt);else{const de=f.getViewSubImage(p,kt);Jt=de.viewport,Et===0&&(t.setRenderTargetTextures(x,de.colorTexture,p.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(x))}let Qt=S[Et];Qt===void 0&&(Qt=new ze,Qt.layers.enable(Et),Qt.viewport=new ye,S[Et]=Qt),Qt.matrix.fromArray(kt.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(kt.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Et===0&&(w.matrix.copy(Qt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),dt===!0&&w.cameras.push(Qt)}const xt=r.enabledFeatures;if(xt&&xt.includes("depth-sensing")){const Et=f.getDepthInformation(lt[0]);Et&&Et.isValid&&Et.texture&&g.init(t,Et,r.renderState)}}for(let lt=0;lt<E.length;lt++){const dt=M[lt],xt=E[lt];dt!==null&&xt!==void 0&&xt.update(dt,q,c||o)}j&&j(X,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),_=null}const _t=new Wc;_t.setAnimationLoop(Y),this.setAnimationLoop=function(X){j=X},this.dispose=function(){}}}const hi=new Je,Ng=new ie;function Ug(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,zc(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,x,E,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),p(m,u),u.isMeshPhysicalMaterial&&h(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),g(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,x,E):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===qe&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===qe&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const x=t.get(u),E=x.envMap,M=x.envMapRotation;E&&(m.envMap.value=E,hi.copy(M),hi.x*=-1,hi.y*=-1,hi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),m.envMapRotation.value.setFromMatrix4(Ng.makeRotationFromEuler(hi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,x,E){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*x,m.scale.value=E*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function h(m,u,x){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===qe&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function g(m,u){const x=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Fg(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){const M=E.program;n.uniformBlockBinding(x,M)}function c(x,E){let M=r[x.id];M===void 0&&(_(x),M=d(x),r[x.id]=M,x.addEventListener("dispose",m));const R=E.program;n.updateUBOMapping(x,R);const P=t.render.frame;s[x.id]!==P&&(p(x),s[x.id]=P)}function d(x){const E=f();x.__bindingPointIndex=E;const M=i.createBuffer(),R=x.__size,P=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,R,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,M),M}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const E=r[x.id],M=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let P=0,L=M.length;P<L;P++){const N=Array.isArray(M[P])?M[P]:[M[P]];for(let S=0,w=N.length;S<w;S++){const B=N[S];if(h(B,P,S,R)===!0){const C=B.__offset,z=Array.isArray(B.value)?B.value:[B.value];let y=0;for(let W=0;W<z.length;W++){const H=z[W],K=g(H);typeof H=="number"||typeof H=="boolean"?(B.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,C+y,B.__data)):H.isMatrix3?(B.__data[0]=H.elements[0],B.__data[1]=H.elements[1],B.__data[2]=H.elements[2],B.__data[3]=0,B.__data[4]=H.elements[3],B.__data[5]=H.elements[4],B.__data[6]=H.elements[5],B.__data[7]=0,B.__data[8]=H.elements[6],B.__data[9]=H.elements[7],B.__data[10]=H.elements[8],B.__data[11]=0):(H.toArray(B.__data,y),y+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,E,M,R){const P=x.value,L=E+"_"+M;if(R[L]===void 0)return typeof P=="number"||typeof P=="boolean"?R[L]=P:R[L]=P.clone(),!0;{const N=R[L];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return R[L]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function _(x){const E=x.uniforms;let M=0;const R=16;for(let L=0,N=E.length;L<N;L++){const S=Array.isArray(E[L])?E[L]:[E[L]];for(let w=0,B=S.length;w<B;w++){const C=S[w],z=Array.isArray(C.value)?C.value:[C.value];for(let y=0,W=z.length;y<W;y++){const H=z[y],K=g(H),$=M%R,Q=$%K.boundary,ft=$+Q;M+=Q,ft!==0&&R-ft<K.storage&&(M+=R-ft),C.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=M,M+=K.storage}}}const P=M%R;return P>0&&(M+=R-P),x.__size=M,x.__cache={},this}function g(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),E}function m(x){const E=x.target;E.removeEventListener("dispose",m);const M=o.indexOf(E.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function u(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Og{constructor(t={}){const{canvas:e=wh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,u=null;const x=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=ei,this.toneMappingExposure=1;const M=this;let R=!1,P=0,L=0,N=null,S=-1,w=null;const B=new ye,C=new ye;let z=null;const y=new re(0);let W=0,H=e.width,K=e.height,$=1,Q=null,ft=null;const j=new ye(0,0,H,K),Y=new ye(0,0,H,K);let _t=!1;const X=new Ao;let q=!1,lt=!1;const dt=new ie,xt=new ie,Et=new Z,kt=new ye,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function de(){return N===null?$:1}let v=n;function mt(F,it){return e.getContext(F,it)}try{const F={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xo}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",Dt,!1),v===null){const it="webgl2";if(v=mt(it,F),v===null)throw mt(it)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let st,V,O,J,ot,I,b,G,rt,nt,at,wt,yt,At,oe,bt,Ut,It,Yt,Ft,te,ee,xe,et;function Ct(){st=new Hp(v),st.init(),ee=new Ag(v,st),V=new Fp(v,st,t,ee),O=new Eg(v,st),V.reverseDepthBuffer&&p&&O.buffers.depth.setReversed(!0),J=new Xp(v),ot=new cg,I=new Tg(v,st,O,ot,V,ee,J),b=new kp(M),G=new Vp(M),rt=new Jh(v),xe=new Np(v,rt),nt=new Gp(v,rt,J,xe),at=new qp(v,nt,rt,J),Yt=new jp(v,V,I),bt=new Op(ot),wt=new lg(M,b,G,st,V,xe,bt),yt=new Ug(M,ot),At=new hg,oe=new _g(st),It=new Dp(M,b,G,O,at,h,l),Ut=new Mg(M,at,V),et=new Fg(v,J,V,O),Ft=new Up(v,st,J),te=new Wp(v,st,J),J.programs=wt.programs,M.capabilities=V,M.extensions=st,M.properties=ot,M.renderLists=At,M.shadowMap=Ut,M.state=O,M.info=J}Ct();const pt=new Dg(M,v);this.xr=pt,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const F=st.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=st.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(F){F!==void 0&&($=F,this.setSize(H,K,!1))},this.getSize=function(F){return F.set(H,K)},this.setSize=function(F,it,ct=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=F,K=it,e.width=Math.floor(F*$),e.height=Math.floor(it*$),ct===!0&&(e.style.width=F+"px",e.style.height=it+"px"),this.setViewport(0,0,F,it)},this.getDrawingBufferSize=function(F){return F.set(H*$,K*$).floor()},this.setDrawingBufferSize=function(F,it,ct){H=F,K=it,$=ct,e.width=Math.floor(F*ct),e.height=Math.floor(it*ct),this.setViewport(0,0,F,it)},this.getCurrentViewport=function(F){return F.copy(B)},this.getViewport=function(F){return F.copy(j)},this.setViewport=function(F,it,ct,ut){F.isVector4?j.set(F.x,F.y,F.z,F.w):j.set(F,it,ct,ut),O.viewport(B.copy(j).multiplyScalar($).round())},this.getScissor=function(F){return F.copy(Y)},this.setScissor=function(F,it,ct,ut){F.isVector4?Y.set(F.x,F.y,F.z,F.w):Y.set(F,it,ct,ut),O.scissor(C.copy(Y).multiplyScalar($).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(F){O.setScissorTest(_t=F)},this.setOpaqueSort=function(F){Q=F},this.setTransparentSort=function(F){ft=F},this.getClearColor=function(F){return F.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(F=!0,it=!0,ct=!0){let ut=0;if(F){let tt=!1;if(N!==null){const St=N.texture.format;tt=St===wo||St===Eo||St===So}if(tt){const St=N.texture.type,Lt=St===Bn||St===_i||St===Sr||St===Ki||St===bo||St===Mo,zt=It.getClearColor(),Vt=It.getClearAlpha(),$t=zt.r,ae=zt.g,Ht=zt.b;Lt?(_[0]=$t,_[1]=ae,_[2]=Ht,_[3]=Vt,v.clearBufferuiv(v.COLOR,0,_)):(g[0]=$t,g[1]=ae,g[2]=Ht,g[3]=Vt,v.clearBufferiv(v.COLOR,0,g))}else ut|=v.COLOR_BUFFER_BIT}it&&(ut|=v.DEPTH_BUFFER_BIT),ct&&(ut|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",Dt,!1),At.dispose(),oe.dispose(),ot.dispose(),b.dispose(),G.dispose(),at.dispose(),xe.dispose(),et.dispose(),wt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Lr),pt.removeEventListener("sessionend",Ir),Sn.stop()};function vt(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const F=J.autoReset,it=Ut.enabled,ct=Ut.autoUpdate,ut=Ut.needsUpdate,tt=Ut.type;Ct(),J.autoReset=F,Ut.enabled=it,Ut.autoUpdate=ct,Ut.needsUpdate=ut,Ut.type=tt}function Dt(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function se(F){const it=F.target;it.removeEventListener("dispose",se),Ae(it)}function Ae(F){Ue(F),ot.remove(F)}function Ue(F){const it=ot.get(F).programs;it!==void 0&&(it.forEach(function(ct){wt.releaseProgram(ct)}),F.isShaderMaterial&&wt.releaseShaderCache(F))}this.renderBufferDirect=function(F,it,ct,ut,tt,St){it===null&&(it=Jt);const Lt=tt.isMesh&&tt.matrixWorld.determinant()<0,zt=Gs(F,it,ct,ut,tt);O.setMaterial(ut,Lt);let Vt=ct.index,$t=1;if(ut.wireframe===!0){if(Vt=nt.getWireframeAttribute(ct),Vt===void 0)return;$t=2}const ae=ct.drawRange,Ht=ct.attributes.position;let pe=ae.start*$t,Me=(ae.start+ae.count)*$t;St!==null&&(pe=Math.max(pe,St.start*$t),Me=Math.min(Me,(St.start+St.count)*$t)),Vt!==null?(pe=Math.max(pe,0),Me=Math.min(Me,Vt.count)):Ht!=null&&(pe=Math.max(pe,0),Me=Math.min(Me,Ht.count));const Ee=Me-pe;if(Ee<0||Ee===1/0)return;xe.setup(tt,ut,zt,ct,Vt);let Le,ge=Ft;if(Vt!==null&&(Le=rt.get(Vt),ge=te,ge.setIndex(Le)),tt.isMesh)ut.wireframe===!0?(O.setLineWidth(ut.wireframeLinewidth*de()),ge.setMode(v.LINES)):ge.setMode(v.TRIANGLES);else if(tt.isLine){let Gt=ut.linewidth;Gt===void 0&&(Gt=1),O.setLineWidth(Gt*de()),tt.isLineSegments?ge.setMode(v.LINES):tt.isLineLoop?ge.setMode(v.LINE_LOOP):ge.setMode(v.LINE_STRIP)}else tt.isPoints?ge.setMode(v.POINTS):tt.isSprite&&ge.setMode(v.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)ge.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))ge.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const Gt=tt._multiDrawStarts,un=tt._multiDrawCounts,me=tt._multiDrawCount,$e=Vt?rt.get(Vt).bytesPerElement:1,Wn=ot.get(ut).currentProgram.getUniforms();for(let He=0;He<me;He++)Wn.setValue(v,"_gl_DrawID",He),ge.render(Gt[He]/$e,un[He])}else if(tt.isInstancedMesh)ge.renderInstances(pe,Ee,tt.count);else if(ct.isInstancedBufferGeometry){const Gt=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,un=Math.min(ct.instanceCount,Gt);ge.renderInstances(pe,Ee,un)}else ge.render(pe,Ee)};function le(F,it,ct){F.transparent===!0&&F.side===xn&&F.forceSinglePass===!1?(F.side=qe,F.needsUpdate=!0,Mi(F,it,ct),F.side=kn,F.needsUpdate=!0,Mi(F,it,ct),F.side=xn):Mi(F,it,ct)}this.compile=function(F,it,ct=null){ct===null&&(ct=F),u=oe.get(ct),u.init(it),E.push(u),ct.traverseVisible(function(tt){tt.isLight&&tt.layers.test(it.layers)&&(u.pushLight(tt),tt.castShadow&&u.pushShadow(tt))}),F!==ct&&F.traverseVisible(function(tt){tt.isLight&&tt.layers.test(it.layers)&&(u.pushLight(tt),tt.castShadow&&u.pushShadow(tt))}),u.setupLights();const ut=new Set;return F.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const St=tt.material;if(St)if(Array.isArray(St))for(let Lt=0;Lt<St.length;Lt++){const zt=St[Lt];le(zt,ct,tt),ut.add(zt)}else le(St,ct,tt),ut.add(St)}),E.pop(),u=null,ut},this.compileAsync=function(F,it,ct=null){const ut=this.compile(F,it,ct);return new Promise(tt=>{function St(){if(ut.forEach(function(Lt){ot.get(Lt).currentProgram.isReady()&&ut.delete(Lt)}),ut.size===0){tt(F);return}setTimeout(St,10)}st.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Ye=null;function cn(F){Ye&&Ye(F)}function Lr(){Sn.stop()}function Ir(){Sn.start()}const Sn=new Wc;Sn.setAnimationLoop(cn),typeof self<"u"&&Sn.setContext(self),this.setAnimationLoop=function(F){Ye=F,pt.setAnimationLoop(F),F===null?Sn.stop():Sn.start()},pt.addEventListener("sessionstart",Lr),pt.addEventListener("sessionend",Ir),this.render=function(F,it){if(it!==void 0&&it.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),it.parent===null&&it.matrixWorldAutoUpdate===!0&&it.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(it),it=pt.getCamera()),F.isScene===!0&&F.onBeforeRender(M,F,it,N),u=oe.get(F,E.length),u.init(it),E.push(u),xt.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),X.setFromProjectionMatrix(xt),lt=this.localClippingEnabled,q=bt.init(this.clippingPlanes,lt),m=At.get(F,x.length),m.init(),x.push(m),pt.enabled===!0&&pt.isPresenting===!0){const St=M.xr.getDepthSensingMesh();St!==null&&or(St,it,-1/0,M.sortObjects)}or(F,it,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(Q,ft),Qt=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,Qt&&It.addToRenderList(m,F),this.info.render.frame++,q===!0&&bt.beginShadows();const ct=u.state.shadowsArray;Ut.render(ct,F,it),q===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=m.opaque,tt=m.transmissive;if(u.setupLights(),it.isArrayCamera){const St=it.cameras;if(tt.length>0)for(let Lt=0,zt=St.length;Lt<zt;Lt++){const Vt=St[Lt];lr(ut,tt,F,Vt)}Qt&&It.render(F);for(let Lt=0,zt=St.length;Lt<zt;Lt++){const Vt=St[Lt];Dr(m,F,Vt,Vt.viewport)}}else tt.length>0&&lr(ut,tt,F,it),Qt&&It.render(F),Dr(m,F,it);N!==null&&(I.updateMultisampleRenderTarget(N),I.updateRenderTargetMipmap(N)),F.isScene===!0&&F.onAfterRender(M,F,it),xe.resetDefaultState(),S=-1,w=null,E.pop(),E.length>0?(u=E[E.length-1],q===!0&&bt.setGlobalState(M.clippingPlanes,u.state.camera)):u=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function or(F,it,ct,ut){if(F.visible===!1)return;if(F.layers.test(it.layers)){if(F.isGroup)ct=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(it);else if(F.isLight)u.pushLight(F),F.castShadow&&u.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||X.intersectsSprite(F)){ut&&kt.setFromMatrixPosition(F.matrixWorld).applyMatrix4(xt);const Lt=at.update(F),zt=F.material;zt.visible&&m.push(F,Lt,zt,ct,kt.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||X.intersectsObject(F))){const Lt=at.update(F),zt=F.material;if(ut&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),kt.copy(F.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),kt.copy(Lt.boundingSphere.center)),kt.applyMatrix4(F.matrixWorld).applyMatrix4(xt)),Array.isArray(zt)){const Vt=Lt.groups;for(let $t=0,ae=Vt.length;$t<ae;$t++){const Ht=Vt[$t],pe=zt[Ht.materialIndex];pe&&pe.visible&&m.push(F,Lt,pe,ct,kt.z,Ht)}}else zt.visible&&m.push(F,Lt,zt,ct,kt.z,null)}}const St=F.children;for(let Lt=0,zt=St.length;Lt<zt;Lt++)or(St[Lt],it,ct,ut)}function Dr(F,it,ct,ut){const tt=F.opaque,St=F.transmissive,Lt=F.transparent;u.setupLightsView(ct),q===!0&&bt.setGlobalState(M.clippingPlanes,ct),ut&&O.viewport(B.copy(ut)),tt.length>0&&bi(tt,it,ct),St.length>0&&bi(St,it,ct),Lt.length>0&&bi(Lt,it,ct),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function lr(F,it,ct,ut){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[ut.id]===void 0&&(u.state.transmissionRenderTarget[ut.id]=new vi(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Cr:Bn,minFilter:Un,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const St=u.state.transmissionRenderTarget[ut.id],Lt=ut.viewport||B;St.setSize(Lt.z,Lt.w);const zt=M.getRenderTarget();M.setRenderTarget(St),M.getClearColor(y),W=M.getClearAlpha(),W<1&&M.setClearColor(16777215,.5),M.clear(),Qt&&It.render(ct);const Vt=M.toneMapping;M.toneMapping=ei;const $t=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),u.setupLightsView(ut),q===!0&&bt.setGlobalState(M.clippingPlanes,ut),bi(F,ct,ut),I.updateMultisampleRenderTarget(St),I.updateRenderTargetMipmap(St),st.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let Ht=0,pe=it.length;Ht<pe;Ht++){const Me=it[Ht],Ee=Me.object,Le=Me.geometry,ge=Me.material,Gt=Me.group;if(ge.side===xn&&Ee.layers.test(ut.layers)){const un=ge.side;ge.side=qe,ge.needsUpdate=!0,cr(Ee,ct,ut,Le,ge,Gt),ge.side=un,ge.needsUpdate=!0,ae=!0}}ae===!0&&(I.updateMultisampleRenderTarget(St),I.updateRenderTargetMipmap(St))}M.setRenderTarget(zt),M.setClearColor(y,W),$t!==void 0&&(ut.viewport=$t),M.toneMapping=Vt}function bi(F,it,ct){const ut=it.isScene===!0?it.overrideMaterial:null;for(let tt=0,St=F.length;tt<St;tt++){const Lt=F[tt],zt=Lt.object,Vt=Lt.geometry,$t=ut===null?Lt.material:ut,ae=Lt.group;zt.layers.test(ct.layers)&&cr(zt,it,ct,Vt,$t,ae)}}function cr(F,it,ct,ut,tt,St){F.onBeforeRender(M,it,ct,ut,tt,St),F.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),tt.onBeforeRender(M,it,ct,ut,F,St),tt.transparent===!0&&tt.side===xn&&tt.forceSinglePass===!1?(tt.side=qe,tt.needsUpdate=!0,M.renderBufferDirect(ct,it,ut,tt,F,St),tt.side=kn,tt.needsUpdate=!0,M.renderBufferDirect(ct,it,ut,tt,F,St),tt.side=xn):M.renderBufferDirect(ct,it,ut,tt,F,St),F.onAfterRender(M,it,ct,ut,tt,St)}function Mi(F,it,ct){it.isScene!==!0&&(it=Jt);const ut=ot.get(F),tt=u.state.lights,St=u.state.shadowsArray,Lt=tt.state.version,zt=wt.getParameters(F,tt.state,St,it,ct),Vt=wt.getProgramCacheKey(zt);let $t=ut.programs;ut.environment=F.isMeshStandardMaterial?it.environment:null,ut.fog=it.fog,ut.envMap=(F.isMeshStandardMaterial?G:b).get(F.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&F.envMap===null?it.environmentRotation:F.envMapRotation,$t===void 0&&(F.addEventListener("dispose",se),$t=new Map,ut.programs=$t);let ae=$t.get(Vt);if(ae!==void 0){if(ut.currentProgram===ae&&ut.lightsStateVersion===Lt)return Ur(F,zt),ae}else zt.uniforms=wt.getUniforms(F),F.onBeforeCompile(zt,M),ae=wt.acquireProgram(zt,Vt),$t.set(Vt,ae),ut.uniforms=zt.uniforms;const Ht=ut.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Ht.clippingPlanes=bt.uniform),Ur(F,zt),ut.needsLights=Xs(F),ut.lightsStateVersion=Lt,ut.needsLights&&(Ht.ambientLightColor.value=tt.state.ambient,Ht.lightProbe.value=tt.state.probe,Ht.directionalLights.value=tt.state.directional,Ht.directionalLightShadows.value=tt.state.directionalShadow,Ht.spotLights.value=tt.state.spot,Ht.spotLightShadows.value=tt.state.spotShadow,Ht.rectAreaLights.value=tt.state.rectArea,Ht.ltc_1.value=tt.state.rectAreaLTC1,Ht.ltc_2.value=tt.state.rectAreaLTC2,Ht.pointLights.value=tt.state.point,Ht.pointLightShadows.value=tt.state.pointShadow,Ht.hemisphereLights.value=tt.state.hemi,Ht.directionalShadowMap.value=tt.state.directionalShadowMap,Ht.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Ht.spotShadowMap.value=tt.state.spotShadowMap,Ht.spotLightMatrix.value=tt.state.spotLightMatrix,Ht.spotLightMap.value=tt.state.spotLightMap,Ht.pointShadowMap.value=tt.state.pointShadowMap,Ht.pointShadowMatrix.value=tt.state.pointShadowMatrix),ut.currentProgram=ae,ut.uniformsList=null,ae}function Nr(F){if(F.uniformsList===null){const it=F.currentProgram.getUniforms();F.uniformsList=Ss.seqWithValue(it.seq,F.uniforms)}return F.uniformsList}function Ur(F,it){const ct=ot.get(F);ct.outputColorSpace=it.outputColorSpace,ct.batching=it.batching,ct.batchingColor=it.batchingColor,ct.instancing=it.instancing,ct.instancingColor=it.instancingColor,ct.instancingMorph=it.instancingMorph,ct.skinning=it.skinning,ct.morphTargets=it.morphTargets,ct.morphNormals=it.morphNormals,ct.morphColors=it.morphColors,ct.morphTargetsCount=it.morphTargetsCount,ct.numClippingPlanes=it.numClippingPlanes,ct.numIntersection=it.numClipIntersection,ct.vertexAlphas=it.vertexAlphas,ct.vertexTangents=it.vertexTangents,ct.toneMapping=it.toneMapping}function Gs(F,it,ct,ut,tt){it.isScene!==!0&&(it=Jt),I.resetTextureUnits();const St=it.fog,Lt=ut.isMeshStandardMaterial?it.environment:null,zt=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:er,Vt=(ut.isMeshStandardMaterial?G:b).get(ut.envMap||Lt),$t=ut.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,ae=!!ct.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),Ht=!!ct.morphAttributes.position,pe=!!ct.morphAttributes.normal,Me=!!ct.morphAttributes.color;let Ee=ei;ut.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ee=M.toneMapping);const Le=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,ge=Le!==void 0?Le.length:0,Gt=ot.get(ut),un=u.state.lights;if(q===!0&&(lt===!0||F!==w)){const Ge=F===w&&ut.id===S;bt.setState(ut,F,Ge)}let me=!1;ut.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==un.state.version||Gt.outputColorSpace!==zt||tt.isBatchedMesh&&Gt.batching===!1||!tt.isBatchedMesh&&Gt.batching===!0||tt.isBatchedMesh&&Gt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&Gt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&Gt.instancing===!1||!tt.isInstancedMesh&&Gt.instancing===!0||tt.isSkinnedMesh&&Gt.skinning===!1||!tt.isSkinnedMesh&&Gt.skinning===!0||tt.isInstancedMesh&&Gt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Gt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Gt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Gt.instancingMorph===!1&&tt.morphTexture!==null||Gt.envMap!==Vt||ut.fog===!0&&Gt.fog!==St||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==bt.numPlanes||Gt.numIntersection!==bt.numIntersection)||Gt.vertexAlphas!==$t||Gt.vertexTangents!==ae||Gt.morphTargets!==Ht||Gt.morphNormals!==pe||Gt.morphColors!==Me||Gt.toneMapping!==Ee||Gt.morphTargetsCount!==ge)&&(me=!0):(me=!0,Gt.__version=ut.version);let $e=Gt.currentProgram;me===!0&&($e=Mi(ut,it,tt));let Wn=!1,He=!1,Xn=!1;const ne=$e.getUniforms(),Ze=Gt.uniforms;if(O.useProgram($e.program)&&(Wn=!0,He=!0,Xn=!0),ut.id!==S&&(S=ut.id,He=!0),Wn||w!==F){O.buffers.depth.getReversed()?(dt.copy(F.projectionMatrix),Ah(dt),Ch(dt),ne.setValue(v,"projectionMatrix",dt)):ne.setValue(v,"projectionMatrix",F.projectionMatrix),ne.setValue(v,"viewMatrix",F.matrixWorldInverse);const hn=ne.map.cameraPosition;hn!==void 0&&hn.setValue(v,Et.setFromMatrixPosition(F.matrixWorld)),V.logarithmicDepthBuffer&&ne.setValue(v,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&ne.setValue(v,"isOrthographic",F.isOrthographicCamera===!0),w!==F&&(w=F,He=!0,Xn=!0)}if(tt.isSkinnedMesh){ne.setOptional(v,tt,"bindMatrix"),ne.setOptional(v,tt,"bindMatrixInverse");const Ge=tt.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),ne.setValue(v,"boneTexture",Ge.boneTexture,I))}tt.isBatchedMesh&&(ne.setOptional(v,tt,"batchingTexture"),ne.setValue(v,"batchingTexture",tt._matricesTexture,I),ne.setOptional(v,tt,"batchingIdTexture"),ne.setValue(v,"batchingIdTexture",tt._indirectTexture,I),ne.setOptional(v,tt,"batchingColorTexture"),tt._colorsTexture!==null&&ne.setValue(v,"batchingColorTexture",tt._colorsTexture,I));const ri=ct.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&Yt.update(tt,ct,$e),(He||Gt.receiveShadow!==tt.receiveShadow)&&(Gt.receiveShadow=tt.receiveShadow,ne.setValue(v,"receiveShadow",tt.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(Ze.envMap.value=Vt,Ze.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&it.environment!==null&&(Ze.envMapIntensity.value=it.environmentIntensity),He&&(ne.setValue(v,"toneMappingExposure",M.toneMappingExposure),Gt.needsLights&&Ws(Ze,Xn),St&&ut.fog===!0&&yt.refreshFogUniforms(Ze,St),yt.refreshMaterialUniforms(Ze,ut,$,K,u.state.transmissionRenderTarget[F.id]),Ss.upload(v,Nr(Gt),Ze,I)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(Ss.upload(v,Nr(Gt),Ze,I),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&ne.setValue(v,"center",tt.center),ne.setValue(v,"modelViewMatrix",tt.modelViewMatrix),ne.setValue(v,"normalMatrix",tt.normalMatrix),ne.setValue(v,"modelMatrix",tt.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const Ge=ut.uniformsGroups;for(let hn=0,sn=Ge.length;hn<sn;hn++){const si=Ge[hn];et.update(si,$e),et.bind(si,$e)}}return $e}function Ws(F,it){F.ambientLightColor.needsUpdate=it,F.lightProbe.needsUpdate=it,F.directionalLights.needsUpdate=it,F.directionalLightShadows.needsUpdate=it,F.pointLights.needsUpdate=it,F.pointLightShadows.needsUpdate=it,F.spotLights.needsUpdate=it,F.spotLightShadows.needsUpdate=it,F.rectAreaLights.needsUpdate=it,F.hemisphereLights.needsUpdate=it}function Xs(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(F,it,ct){ot.get(F.texture).__webglTexture=it,ot.get(F.depthTexture).__webglTexture=ct;const ut=ot.get(F);ut.__hasExternalTextures=!0,ut.__autoAllocateDepthBuffer=ct===void 0,ut.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ut.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(F,it){const ct=ot.get(F);ct.__webglFramebuffer=it,ct.__useDefaultFramebuffer=it===void 0},this.setRenderTarget=function(F,it=0,ct=0){N=F,P=it,L=ct;let ut=!0,tt=null,St=!1,Lt=!1;if(F){const Vt=ot.get(F);if(Vt.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(v.FRAMEBUFFER,null),ut=!1;else if(Vt.__webglFramebuffer===void 0)I.setupRenderTarget(F);else if(Vt.__hasExternalTextures)I.rebindTextures(F,ot.get(F.texture).__webglTexture,ot.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){const Ht=F.depthTexture;if(Vt.__boundDepthTexture!==Ht){if(Ht!==null&&ot.has(Ht)&&(F.width!==Ht.image.width||F.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(F)}}const $t=F.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Lt=!0);const ae=ot.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(ae[it])?tt=ae[it][ct]:tt=ae[it],St=!0):F.samples>0&&I.useMultisampledRTT(F)===!1?tt=ot.get(F).__webglMultisampledFramebuffer:Array.isArray(ae)?tt=ae[ct]:tt=ae,B.copy(F.viewport),C.copy(F.scissor),z=F.scissorTest}else B.copy(j).multiplyScalar($).floor(),C.copy(Y).multiplyScalar($).floor(),z=_t;if(O.bindFramebuffer(v.FRAMEBUFFER,tt)&&ut&&O.drawBuffers(F,tt),O.viewport(B),O.scissor(C),O.setScissorTest(z),St){const Vt=ot.get(F.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+it,Vt.__webglTexture,ct)}else if(Lt){const Vt=ot.get(F.texture),$t=it||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,Vt.__webglTexture,ct||0,$t)}S=-1},this.readRenderTargetPixels=function(F,it,ct,ut,tt,St,Lt){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=ot.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Lt!==void 0&&(zt=zt[Lt]),zt){O.bindFramebuffer(v.FRAMEBUFFER,zt);try{const Vt=F.texture,$t=Vt.format,ae=Vt.type;if(!V.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}it>=0&&it<=F.width-ut&&ct>=0&&ct<=F.height-tt&&v.readPixels(it,ct,ut,tt,ee.convert($t),ee.convert(ae),St)}finally{const Vt=N!==null?ot.get(N).__webglFramebuffer:null;O.bindFramebuffer(v.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(F,it,ct,ut,tt,St,Lt){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=ot.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Lt!==void 0&&(zt=zt[Lt]),zt){const Vt=F.texture,$t=Vt.format,ae=Vt.type;if(!V.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(it>=0&&it<=F.width-ut&&ct>=0&&ct<=F.height-tt){O.bindFramebuffer(v.FRAMEBUFFER,zt);const Ht=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,Ht),v.bufferData(v.PIXEL_PACK_BUFFER,St.byteLength,v.STREAM_READ),v.readPixels(it,ct,ut,tt,ee.convert($t),ee.convert(ae),0);const pe=N!==null?ot.get(N).__webglFramebuffer:null;O.bindFramebuffer(v.FRAMEBUFFER,pe);const Me=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await Th(v,Me,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,Ht),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,St),v.deleteBuffer(Ht),v.deleteSync(Me),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(F,it=null,ct=0){F.isTexture!==!0&&(vr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),it=arguments[0]||null,F=arguments[1]);const ut=Math.pow(2,-ct),tt=Math.floor(F.image.width*ut),St=Math.floor(F.image.height*ut),Lt=it!==null?it.x:0,zt=it!==null?it.y:0;I.setTexture2D(F,0),v.copyTexSubImage2D(v.TEXTURE_2D,ct,0,0,Lt,zt,tt,St),O.unbindTexture()},this.copyTextureToTexture=function(F,it,ct=null,ut=null,tt=0){F.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture function signature has changed."),ut=arguments[0]||null,F=arguments[1],it=arguments[2],tt=arguments[3]||0,ct=null);let St,Lt,zt,Vt,$t,ae,Ht,pe,Me;const Ee=F.isCompressedTexture?F.mipmaps[tt]:F.image;ct!==null?(St=ct.max.x-ct.min.x,Lt=ct.max.y-ct.min.y,zt=ct.isBox3?ct.max.z-ct.min.z:1,Vt=ct.min.x,$t=ct.min.y,ae=ct.isBox3?ct.min.z:0):(St=Ee.width,Lt=Ee.height,zt=Ee.depth||1,Vt=0,$t=0,ae=0),ut!==null?(Ht=ut.x,pe=ut.y,Me=ut.z):(Ht=0,pe=0,Me=0);const Le=ee.convert(it.format),ge=ee.convert(it.type);let Gt;it.isData3DTexture?(I.setTexture3D(it,0),Gt=v.TEXTURE_3D):it.isDataArrayTexture||it.isCompressedArrayTexture?(I.setTexture2DArray(it,0),Gt=v.TEXTURE_2D_ARRAY):(I.setTexture2D(it,0),Gt=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,it.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,it.unpackAlignment);const un=v.getParameter(v.UNPACK_ROW_LENGTH),me=v.getParameter(v.UNPACK_IMAGE_HEIGHT),$e=v.getParameter(v.UNPACK_SKIP_PIXELS),Wn=v.getParameter(v.UNPACK_SKIP_ROWS),He=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,Ee.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Ee.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Vt),v.pixelStorei(v.UNPACK_SKIP_ROWS,$t),v.pixelStorei(v.UNPACK_SKIP_IMAGES,ae);const Xn=F.isDataArrayTexture||F.isData3DTexture,ne=it.isDataArrayTexture||it.isData3DTexture;if(F.isRenderTargetTexture||F.isDepthTexture){const Ze=ot.get(F),ri=ot.get(it),Ge=ot.get(Ze.__renderTarget),hn=ot.get(ri.__renderTarget);O.bindFramebuffer(v.READ_FRAMEBUFFER,Ge.__webglFramebuffer),O.bindFramebuffer(v.DRAW_FRAMEBUFFER,hn.__webglFramebuffer);for(let sn=0;sn<zt;sn++)Xn&&v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,ot.get(F).__webglTexture,tt,ae+sn),F.isDepthTexture?(ne&&v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,ot.get(it).__webglTexture,tt,Me+sn),v.blitFramebuffer(Vt,$t,St,Lt,Ht,pe,St,Lt,v.DEPTH_BUFFER_BIT,v.NEAREST)):ne?v.copyTexSubImage3D(Gt,tt,Ht,pe,Me+sn,Vt,$t,St,Lt):v.copyTexSubImage2D(Gt,tt,Ht,pe,Me+sn,Vt,$t,St,Lt);O.bindFramebuffer(v.READ_FRAMEBUFFER,null),O.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else ne?F.isDataTexture||F.isData3DTexture?v.texSubImage3D(Gt,tt,Ht,pe,Me,St,Lt,zt,Le,ge,Ee.data):it.isCompressedArrayTexture?v.compressedTexSubImage3D(Gt,tt,Ht,pe,Me,St,Lt,zt,Le,Ee.data):v.texSubImage3D(Gt,tt,Ht,pe,Me,St,Lt,zt,Le,ge,Ee):F.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,tt,Ht,pe,St,Lt,Le,ge,Ee.data):F.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,tt,Ht,pe,Ee.width,Ee.height,Le,Ee.data):v.texSubImage2D(v.TEXTURE_2D,tt,Ht,pe,St,Lt,Le,ge,Ee);v.pixelStorei(v.UNPACK_ROW_LENGTH,un),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,me),v.pixelStorei(v.UNPACK_SKIP_PIXELS,$e),v.pixelStorei(v.UNPACK_SKIP_ROWS,Wn),v.pixelStorei(v.UNPACK_SKIP_IMAGES,He),tt===0&&it.generateMipmaps&&v.generateMipmap(Gt),O.unbindTexture()},this.copyTextureToTexture3D=function(F,it,ct=null,ut=null,tt=0){return F.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ct=arguments[0]||null,ut=arguments[1]||null,F=arguments[2],it=arguments[3],tt=arguments[4]||0),vr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(F,it,ct,ut,tt)},this.initRenderTarget=function(F){ot.get(F).__webglFramebuffer===void 0&&I.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?I.setTextureCube(F,0):F.isData3DTexture?I.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?I.setTexture2DArray(F,0):I.setTexture2D(F,0),O.unbindTexture()},this.resetState=function(){P=0,L=0,N=null,O.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}class Kc extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Je,this.environmentIntensity=1,this.environmentRotation=new Je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const zl=new Z,Vl=new ye,Hl=new ye,kg=new Z,Gl=new ie,ss=new Z,ba=new yi,Wl=new ie,Ma=new Fs;class Bg extends Te{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vo,this.bindMatrix=new ie,this.bindMatrixInverse=new ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ii),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ss),this.boundingBox.expandByPoint(ss)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yi),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ss),this.boundingSphere.expandByPoint(ss)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ba.copy(this.boundingSphere),ba.applyMatrix4(r),t.ray.intersectsSphere(ba)!==!1&&(Wl.copy(r).invert(),Ma.copy(t.ray).applyMatrix4(Wl),!(this.boundingBox!==null&&Ma.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ma)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ye,e=this.geometry.attributes.skinWeight;for(let n=0,r=e.count;n<r;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Vo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ku?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,r=this.geometry;Vl.fromBufferAttribute(r.attributes.skinIndex,t),Hl.fromBufferAttribute(r.attributes.skinWeight,t),zl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=Hl.getComponent(s);if(o!==0){const a=Vl.getComponent(s);Gl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(kg.copy(zl).applyMatrix4(Gl),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Jc extends Ce{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $c extends Oe{constructor(t=null,e=1,n=1,r,s,o,a,l,c=nn,d=nn,f,p){super(null,o,a,l,c,d,r,s,f,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xl=new ie,zg=new ie;class Po{constructor(t=[],e=[]){this.uuid=ni(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new ie)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new ie;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:zg;Xl.multiplyMatrices(a,e[s]),Xl.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Po(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new $c(e,t,t,ln,yn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const r=this.bones[e];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,r=t.bones.length;n<r;n++){const s=t.bones[n];let o=e[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Jc),this.bones.push(o),this.boneInverses.push(new ie().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let r=0,s=e.length;r<s;r++){const o=e[r];t.bones.push(o.uuid);const a=n[r];t.boneInverses.push(a.toArray())}return t}}class Wi extends _n{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ts=new Z,As=new Z,jl=new ie,pr=new Fs,as=new yi,Sa=new Z,ql=new Z;class Qc extends Ce{constructor(t=new Ve,e=new Wi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ts.fromBufferAttribute(e,r-1),As.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ts.distanceTo(As);t.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(r),as.radius+=s,t.ray.intersectsSphere(as)===!1)return;jl.copy(r).invert(),pr.copy(t.ray).applyMatrix4(jl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,p=n.attributes.position;if(d!==null){const h=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=h,m=_-1;g<m;g+=c){const u=d.getX(g),x=d.getX(g+1),E=os(this,t,pr,l,u,x);E&&e.push(E)}if(this.isLineLoop){const g=d.getX(_-1),m=d.getX(h),u=os(this,t,pr,l,g,m);u&&e.push(u)}}else{const h=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let g=h,m=_-1;g<m;g+=c){const u=os(this,t,pr,l,g,g+1);u&&e.push(u)}if(this.isLineLoop){const g=os(this,t,pr,l,_-1,h);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function os(i,t,e,n,r,s){const o=i.geometry.attributes.position;if(Ts.fromBufferAttribute(o,r),As.fromBufferAttribute(o,s),e.distanceSqToSegment(Ts,As,Sa,ql)>n)return;Sa.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Sa);if(!(l<t.near||l>t.far))return{distance:l,point:ql.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Yl=new Z,Zl=new Z;class _o extends Qc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Yl.fromBufferAttribute(e,r),Zl.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Yl.distanceTo(Zl);t.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yr extends _n{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Kl=new ie,vo=new Fs,ls=new yi,cs=new Z;class Ea extends Ce{constructor(t=new Ve,e=new yr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(r),ls.radius+=s,t.ray.intersectsSphere(ls)===!1)return;Kl.copy(r).invert(),vo.copy(t.ray).applyMatrix4(Kl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const p=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let _=p,g=h;_<g;_++){const m=c.getX(_);cs.fromBufferAttribute(f,m),Jl(cs,m,l,r,t,e,this)}}else{const p=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let _=p,g=h;_<g;_++)cs.fromBufferAttribute(f,_),Jl(cs,_,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Jl(i,t,e,n,r,s,o){const a=vo.distanceSqToPoint(i);if(a<e){const l=new Z;vo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class tu extends Oe{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Lo extends Ve{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],p=[],h=[];let _=0;const g=[],m=n/2;let u=0;x(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new be(f,3)),this.setAttribute("normal",new be(p,3)),this.setAttribute("uv",new be(h,2));function x(){const M=new Z,R=new Z;let P=0;const L=(e-t)/n;for(let N=0;N<=s;N++){const S=[],w=N/s,B=w*(e-t)+t;for(let C=0;C<=r;C++){const z=C/r,y=z*l+a,W=Math.sin(y),H=Math.cos(y);R.x=B*W,R.y=-w*n+m,R.z=B*H,f.push(R.x,R.y,R.z),M.set(W,L,H).normalize(),p.push(M.x,M.y,M.z),h.push(z,1-w),S.push(_++)}g.push(S)}for(let N=0;N<r;N++)for(let S=0;S<s;S++){const w=g[S][N],B=g[S+1][N],C=g[S+1][N+1],z=g[S][N+1];(t>0||S!==0)&&(d.push(w,B,z),P+=3),(e>0||S!==s-1)&&(d.push(B,C,z),P+=3)}c.addGroup(u,P,0),u+=P}function E(M){const R=_,P=new fe,L=new Z;let N=0;const S=M===!0?t:e,w=M===!0?1:-1;for(let C=1;C<=r;C++)f.push(0,m*w,0),p.push(0,w,0),h.push(.5,.5),_++;const B=_;for(let C=0;C<=r;C++){const y=C/r*l+a,W=Math.cos(y),H=Math.sin(y);L.x=S*H,L.y=m*w,L.z=S*W,f.push(L.x,L.y,L.z),p.push(0,w,0),P.x=W*.5+.5,P.y=H*.5*w+.5,h.push(P.x,P.y),_++}for(let C=0;C<r;C++){const z=R+C,y=B+C;M===!0?d.push(y,y+1,z):d.push(y+1,y,z),N+=3}c.addGroup(u,N,M===!0?1:2),u+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Io extends Ve{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new Z,p=new Z,h=[],_=[],g=[],m=[];for(let u=0;u<=n;u++){const x=[],E=u/n;let M=0;u===0&&o===0?M=.5/e:u===n&&l===Math.PI&&(M=-.5/e);for(let R=0;R<=e;R++){const P=R/e;f.x=-t*Math.cos(r+P*s)*Math.sin(o+E*a),f.y=t*Math.cos(o+E*a),f.z=t*Math.sin(r+P*s)*Math.sin(o+E*a),_.push(f.x,f.y,f.z),p.copy(f).normalize(),g.push(p.x,p.y,p.z),m.push(P+M,1-E),x.push(c++)}d.push(x)}for(let u=0;u<n;u++)for(let x=0;x<e;x++){const E=d[u][x+1],M=d[u][x],R=d[u+1][x],P=d[u+1][x+1];(u!==0||o>0)&&h.push(E,M,P),(u!==n-1||l<Math.PI)&&h.push(M,R,P)}this.setIndex(h),this.setAttribute("position",new be(_,3)),this.setAttribute("normal",new be(g,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ks extends _n{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ns,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xi extends _n{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new re(16777215),this.specular=new re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ns,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=Is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vg extends _n{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ns,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=Is,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function us(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Hg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Gg(i){function t(r,s){return i[r]-i[s]}const e=i.length,n=new Array(e);for(let r=0;r!==e;++r)n[r]=r;return n.sort(t),n}function $l(i,t,e){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)r[o++]=i[a+l]}return r}function eu(i,t,e,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=i[r++];while(s!==void 0)}class Bs{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,r=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break e}o=e.length;break n}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Wg extends Bs{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ho,endingEnd:Ho}}intervalChanged_(t,e,n){const r=this.parameterPositions;let s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Go:s=t,a=2*e-n;break;case Wo:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Go:o=t,l=2*n-e;break;case Wo:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}const c=(n-e)*.5,d=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(t,e,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,h=this._weightNext,_=(n-e)/(r-e),g=_*_,m=g*_,u=-p*m+2*p*g-p*_,x=(1+p)*m+(-1.5-2*p)*g+(-.5+p)*_+1,E=(-1-h)*m+(1.5+h)*g+.5*_,M=h*m-h*g;for(let R=0;R!==a;++R)s[R]=u*o[d+R]+x*o[c+R]+E*o[l+R]+M*o[f+R];return s}}class Xg extends Bs{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=(n-e)/(r-e),f=1-d;for(let p=0;p!==a;++p)s[p]=o[c+p]*f+o[l+p]*d;return s}}class jg extends Bs{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}}class Mn{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=us(e,this.TimeBufferType),this.values=us(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:us(t.times,Array),values:us(t.values,Array)};const r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new jg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wg(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Es:e=this.InterpolantFactoryMethodDiscrete;break;case mo:e=this.InterpolantFactoryMethodLinear;break;case qs:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return mo;case this.InterpolantFactoryMethodSmooth:return qs}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&Hg(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===qs,s=t.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],d=t[a+1];if(c!==d&&(a!==1||c!==t[0]))if(r)l=!0;else{const f=a*n,p=f-n,h=f+n;for(let _=0;_!==n;++_){const g=e[f+_];if(g!==e[p+_]||g!==e[h+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const f=a*n,p=o*n;for(let h=0;h!==n;++h)e[p+h]=e[f+h]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}}Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=mo;class sr extends Mn{constructor(t,e,n){super(t,e,n)}}sr.prototype.ValueTypeName="bool";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Es;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;class nu extends Mn{}nu.prototype.ValueTypeName="color";class Cs extends Mn{}Cs.prototype.ValueTypeName="number";class qg extends Bs{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e);let c=t*a;for(let d=c+a;c!==d;c+=4)Hn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Rr extends Mn{InterpolantFactoryMethodLinear(t){return new qg(this.times,this.values,this.getValueSize(),t)}}Rr.prototype.ValueTypeName="quaternion";Rr.prototype.InterpolantFactoryMethodSmooth=void 0;class ar extends Mn{constructor(t,e,n){super(t,e,n)}}ar.prototype.ValueTypeName="string";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Es;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;class tr extends Mn{}tr.prototype.ValueTypeName="vector";class Ql{constructor(t="",e=-1,n=[],r=$u){this.name=t,this.tracks=n,this.duration=e,this.blendMode=r,this.uuid=ni(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,r=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Zg(n[o]).scale(r));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,r={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(Mn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(t,e,n,r){const s=e.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const d=Gg(l);l=$l(l,1,d),c=$l(c,1,d),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Cs(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const r=t;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===e)return n[r];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],d=c.name.match(s);if(d&&d.length>1){const f=d[1];let p=r[f];p||(r[f]=p=[]),p.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,p,h,_,g){if(h.length!==0){const m=[],u=[];eu(h,m,u,_),m.length!==0&&g.push(new f(p,m,u))}},r=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let f=0;f<c.length;f++){const p=c[f].keys;if(!(!p||p.length===0))if(p[0].morphTargets){const h={};let _;for(_=0;_<p.length;_++)if(p[_].morphTargets)for(let g=0;g<p[_].morphTargets.length;g++)h[p[_].morphTargets[g]]=-1;for(const g in h){const m=[],u=[];for(let x=0;x!==p[_].morphTargets.length;++x){const E=p[_];m.push(E.time),u.push(E.morphTarget===g?1:0)}r.push(new Cs(".morphTargetInfluence["+g+"]",m,u))}l=h.length*o}else{const h=".bones["+e[f].name+"]";n(tr,h+".position",p,"pos",r),n(Rr,h+".quaternion",p,"rot",r),n(tr,h+".scale",p,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,r=t.length;n!==r;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Yg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Cs;case"vector":case"vector2":case"vector3":case"vector4":return tr;case"color":return nu;case"quaternion":return Rr;case"bool":case"boolean":return sr;case"string":return ar}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Zg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Yg(i.type);if(i.times===void 0){const e=[],n=[];eu(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const Rs={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class iu{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){const f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,p=c.length;f<p;f+=2){const h=c[f],_=c[f+1];if(h.global&&(h.lastIndex=0),h.test(d))return _}return null}}}const ru=new iu;class Vn{constructor(t){this.manager=t!==void 0?t:ru,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Vn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pn={};class Kg extends Error{constructor(t,e){super(t),this.response=e}}class zs extends Vn{constructor(t){super(t)}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Rs.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Pn[t]!==void 0){Pn[t].push({onLoad:e,onProgress:n,onError:r});return}Pn[t]=[],Pn[t].push({onLoad:e,onProgress:n,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=Pn[t],f=c.body.getReader(),p=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),h=p?parseInt(p):0,_=h!==0;let g=0;const m=new ReadableStream({start(u){x();function x(){f.read().then(({done:E,value:M})=>{if(E)u.close();else{g+=M.byteLength;const R=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:h});for(let P=0,L=d.length;P<L;P++){const N=d[P];N.onProgress&&N.onProgress(R)}u.enqueue(M),x()}},E=>{u.error(E)})}}});return new Response(m)}else throw new Kg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),p=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(p);return c.arrayBuffer().then(_=>h.decode(_))}}}).then(c=>{Rs.add(t,c);const d=Pn[t];delete Pn[t];for(let f=0,p=d.length;f<p;f++){const h=d[f];h.onLoad&&h.onLoad(c)}}).catch(c=>{const d=Pn[t];if(d===void 0)throw this.manager.itemError(t),c;delete Pn[t];for(let f=0,p=d.length;f<p;f++){const h=d[f];h.onError&&h.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Jg extends Vn{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Rs.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Er("img");function l(){d(),Rs.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(f){d(),r&&r(f),s.manager.itemError(t),s.manager.itemEnd(t)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class $g extends Vn{constructor(t){super(t)}load(t,e,n,r){const s=this,o=new $c,a=new zs(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(t,function(l){let c;try{c=s.parse(l)}catch(d){if(r!==void 0)r(d);else{console.error(d);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:gn,o.wrapT=c.wrapT!==void 0?c.wrapT:gn,o.magFilter=c.magFilter!==void 0?c.magFilter:en,o.minFilter=c.minFilter!==void 0?c.minFilter:en,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Un),c.mipmapCount===1&&(o.minFilter=en),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,e&&e(o,c)},n,r),o}}class su extends Vn{constructor(t){super(t)}load(t,e,n,r){const s=new Oe,o=new Jg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class Pr extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Qg extends Pr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const wa=new ie,tc=new Z,ec=new Z;class Do{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ao,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;tc.setFromMatrixPosition(t.matrixWorld),e.position.copy(tc),ec.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ec),e.updateMatrixWorld(),wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class t_ extends Do{constructor(){super(new ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=$i*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class e_ extends Pr{constructor(t,e,n=0,r=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new t_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const nc=new ie,mr=new Z,Ta=new Z;class n_ extends Do{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),mr.setFromMatrixPosition(t.matrixWorld),n.position.copy(mr),Ta.copy(n.position),Ta.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ta),n.updateMatrixWorld(),r.makeTranslation(-mr.x,-mr.y,-mr.z),nc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nc)}}class i_ extends Pr{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new n_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class r_ extends Do{constructor(){super(new Co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class au extends Pr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new r_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ou extends Pr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class lu{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,r=t.length;n<r;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class s_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ic(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ic();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ic(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xo);let gr=null;function a_(i){window.addEventListener("resize",()=>{const t=window.innerWidth,e=window.innerHeight;cu().setSize(t,e),i.aspect=t/e,i.updateProjectionMatrix()})}function cu(){return gr||(gr=new Og,gr.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(gr.domElement)),gr}class o_{constructor(t,e){jt(this,"targetObject");jt(this,"currentPosition");jt(this,"currentLookat");jt(this,"camera");this.targetObject=e,this.camera=t,this.currentPosition=new Z,this.currentLookat=new Z}getIdealOffset(){const t=new Z(-1,.8,-2.5);return t.applyQuaternion(this.targetObject.quaternion),t.add(this.targetObject.position),t}getIdealLookat(){const t=new Z(0,1,30);return t.applyQuaternion(this.targetObject.quaternion),t.add(this.targetObject.position),t}update(t){const e=this.getIdealOffset(),n=this.getIdealLookat();this.currentPosition=e,this.currentLookat=n,this.camera.position.copy(this.currentPosition),this.camera.lookAt(this.currentLookat)}}class l_{constructor(t){jt(this,"camera");jt(this,"thirdPersonCamera");this.camera=c_(),a_(this.camera),this.thirdPersonCamera=new o_(this.camera,t)}update(t){this.thirdPersonCamera.update(t)}getCamera(){return this.camera}}function c_(){const i=new ze(75,window.innerWidth/window.innerHeight,.1,1e3);return i.position.set(0,2,5),i}function u_(i,t){i.actors.player.update(t),i.actors.table.update(t)}class h_{constructor(t,e,n){jt(this,"room");jt(this,"actors");jt(this,"world");var r;this.room=t,this.actors=e,this.world=n,(r=t.cube.physicsController)==null||r.applyImpulse(new Z(4.5,0,0))}getSimState(){return{actors:this.actors,room:this.room}}step(t){var e;u_(this.getSimState(),t),this.world.step(t/3),(e=this.room.cube.physicsController)==null||e.updateFromPhysics(this.room.cube.object)}}class d_{constructor(t,e){jt(this,"actors");jt(this,"inputListener");this.actors=t,this.inputListener=e}handleUserInput(){this.inputListener.getPlayerActions().forEach(t=>{t.execute(this.actors.player)}),this.inputListener.getArmCommands().forEach(t=>{var e;(e=this.actors.table.armController)==null||e.handleArmCommand(t)})}}class f_{constructor(t,e){jt(this,"scene");jt(this,"camera");this.scene=t,this.camera=e}render(){cu().render(this.scene,this.camera)}}class p_{constructor(){jt(this,"keyDown");window.addEventListener("keydown",t=>this.onKeyDown(t)),window.addEventListener("keyup",t=>this.onKeyUp(t)),this.keyDown={ArrowUp:!1,ArrowDown:!1,ArrowLeft:!1,ArrowRight:!1," ":!1,w:!1}}onKeyDown(t){this.keyDown[t.key]=!0}onKeyUp(t){this.keyDown[t.key]=!1}}var Tr=(i=>(i[i.OpticalTable=0]="OpticalTable",i))(Tr||{}),No=(i=>(i[i.OpticalTable=0]="OpticalTable",i))(No||{}),ji=(i=>(i[i.Idle=0]="Idle",i[i.Moving=1]="Moving",i))(ji||{}),bn=(i=>(i[i.GOTO_A=0]="GOTO_A",i[i.GOTO_B=1]="GOTO_B",i[i.STOP=2]="STOP",i))(bn||{}),Ar=(i=>(i[i.PLAYER_MOVE=0]="PLAYER_MOVE",i[i.PLAYER_ROTATE=1]="PLAYER_ROTATE",i))(Ar||{});class rc{constructor(t){jt(this,"action");this.action=t}execute(t){if(!t.playerController)return;let e=t.playerController;switch(this.action.type){case Ar.PLAYER_MOVE:e.handleMove(this.action.payload);break;case Ar.PLAYER_ROTATE:e.handleRotation(this.action.payload)}}}class m_{constructor(t){jt(this,"keyboardListener");jt(this,"uiController");this.uiController=t,this.keyboardListener=new p_}getMoveAction(){const t={forward:!1,backward:!1,left:!1,right:!1},e=this.keyboardListener.keyDown;(e.ArrowUp||e.w)&&(t.forward=!0),(e.ArrowDown||e.s)&&(t.backward=!0),(e.ArrowLeft||e.a)&&(t.left=!0),(e.ArrowRight||e.d)&&(t.right=!0);const n={type:Ar.PLAYER_MOVE,payload:t};return new rc(n)}getRotateAction(){const t={left:!1,right:!1},e=this.keyboardListener.keyDown;e.q&&(t.left=!0),e.e&&(t.right=!0);const n={type:Ar.PLAYER_ROTATE,payload:t};return new rc(n)}getPlayerActions(){const t=[];return t.push(this.getMoveAction()),t.push(this.getRotateAction()),t}getArmCommands(){return this.uiController.getArmCommands()}}function g_(){document.addEventListener("keydown",i=>{if(i.key.toLowerCase()==="h"){const t=document.getElementById("ui");t&&t.classList.toggle("hidden")}})}class __{constructor(){jt(this,"actionQueue",[]);this.initButtons()}initButtons(){const t=document.getElementById("btn1"),e=document.getElementById("btn2"),n=document.getElementById("btn3");t&&t.addEventListener("click",()=>this.armGotoA()),e&&e.addEventListener("click",()=>this.armGotoB()),n&&n.addEventListener("click",()=>this.armStop())}armGotoA(){console.log("armGotoA command"),this.actionQueue.push(bn.GOTO_A)}armGotoB(){console.log("armGotoB command"),this.actionQueue.push(bn.GOTO_B)}armStop(){console.log("armStop command"),this.actionQueue.push(bn.STOP)}getAndClearQueue(){const t=[...this.actionQueue];return this.actionQueue=[],t}}class v_{constructor(t,e,n){jt(this,"camera");jt(this,"room");jt(this,"armCommandUI");this.camera=t,this.room=e,this.armCommandUI=new __,g_()}updateSpatialUI(){this.room.cube.updateNameplate(this.camera)}getArmCommands(){return this.armCommandUI.getAndClearQueue()}}class x_{constructor(t,e,n,r){jt(this,"uiController");jt(this,"actorController");jt(this,"cameraController");jt(this,"renderController");jt(this,"simulationLoop");jt(this,"clock");jt(this,"runSimulationLoop",()=>{this.processNextFrame(),requestAnimationFrame(this.runSimulationLoop)});this.cameraController=new l_(e.player.object);let s=this.cameraController.getCamera();this.uiController=new v_(s,t,e),this.renderController=new f_(n,s),this.actorController=new d_(e,new m_(this.uiController)),this.simulationLoop=new h_(t,e,r),this.clock=new s_}processNextFrame(){const t=this.clock.getDelta();this.cameraController.update(t),this.actorController.handleUserInput(),this.simulationLoop.step(t),this.uiController.updateSpatialUI(),this.renderController.render()}}const y_=0,uu="./assets.zip",b_="digital_twin_lab-4",M_="./packages/digital_twin_lab-4",S_="./packages/digital_twin_lab-4/urdf/robot_arm.urdf",E_={[No.OpticalTable]:"assets/objs/optical_table.obj"};var hs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function w_(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function D0(i){if(i.__esModule)return i;var t=i.default;if(typeof t=="function"){var e=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var r=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return i[n]}})}),e}function ds(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Aa={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var sc;function T_(){return sc||(sc=1,function(i,t){(function(e){i.exports=e()})(function(){return function e(n,r,s){function o(c,d){if(!r[c]){if(!n[c]){var f=typeof ds=="function"&&ds;if(!d&&f)return f(c,!0);if(a)return a(c,!0);var p=new Error("Cannot find module '"+c+"'");throw p.code="MODULE_NOT_FOUND",p}var h=r[c]={exports:{}};n[c][0].call(h.exports,function(_){var g=n[c][1][_];return o(g||_)},h,h.exports,e,n,r,s)}return r[c].exports}for(var a=typeof ds=="function"&&ds,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(e,n,r){var s=e("./utils"),o=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var c,d,f,p,h,_,g,m=[],u=0,x=l.length,E=x,M=s.getTypeOf(l)!=="string";u<l.length;)E=x-u,f=M?(c=l[u++],d=u<x?l[u++]:0,u<x?l[u++]:0):(c=l.charCodeAt(u++),d=u<x?l.charCodeAt(u++):0,u<x?l.charCodeAt(u++):0),p=c>>2,h=(3&c)<<4|d>>4,_=1<E?(15&d)<<2|f>>6:64,g=2<E?63&f:64,m.push(a.charAt(p)+a.charAt(h)+a.charAt(_)+a.charAt(g));return m.join("")},r.decode=function(l){var c,d,f,p,h,_,g=0,m=0,u="data:";if(l.substr(0,u.length)===u)throw new Error("Invalid base64 input, it looks like a data url.");var x,E=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&E--,l.charAt(l.length-2)===a.charAt(64)&&E--,E%1!=0)throw new Error("Invalid base64 input, bad content length.");for(x=o.uint8array?new Uint8Array(0|E):new Array(0|E);g<l.length;)c=a.indexOf(l.charAt(g++))<<2|(p=a.indexOf(l.charAt(g++)))>>4,d=(15&p)<<4|(h=a.indexOf(l.charAt(g++)))>>2,f=(3&h)<<6|(_=a.indexOf(l.charAt(g++))),x[m++]=c,h!==64&&(x[m++]=d),_!==64&&(x[m++]=f);return x}},{"./support":30,"./utils":32}],2:[function(e,n,r){var s=e("./external"),o=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function c(d,f,p,h,_){this.compressedSize=d,this.uncompressedSize=f,this.crc32=p,this.compression=h,this.compressedContent=_}c.prototype={getContentWorker:function(){var d=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),f=this;return d.on("end",function(){if(this.streamInfo.data_length!==f.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),d},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(d,f,p){return d.pipe(new a).pipe(new l("uncompressedSize")).pipe(f.compressWorker(p)).pipe(new l("compressedSize")).withStreamInfo("compression",f)},n.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,n,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,n,r){var s=e("./utils"),o=function(){for(var a,l=[],c=0;c<256;c++){a=c;for(var d=0;d<8;d++)a=1&a?3988292384^a>>>1:a>>>1;l[c]=a}return l}();n.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(c,d,f,p){var h=o,_=p+f;c^=-1;for(var g=p;g<_;g++)c=c>>>8^h[255&(c^d[g])];return-1^c}(0|l,a,a.length,0):function(c,d,f,p){var h=o,_=p+f;c^=-1;for(var g=p;g<_;g++)c=c>>>8^h[255&(c^d.charCodeAt(g))];return-1^c}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(e,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,n,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),n.exports={Promise:s}},{lie:37}],7:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=e("pako"),a=e("./utils"),l=e("./stream/GenericWorker"),c=s?"uint8array":"array";function d(f,p){l.call(this,"FlateWorker/"+f),this._pako=null,this._pakoAction=f,this._pakoOptions=p,this.meta={}}r.magic="\b\0",a.inherits(d,l),d.prototype.processChunk=function(f){this.meta=f.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(c,f.data),!1)},d.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},d.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},d.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var f=this;this._pako.onData=function(p){f.push({data:p,meta:f.meta})}},r.compressWorker=function(f){return new d("Deflate",f)},r.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,n,r){function s(h,_){var g,m="";for(g=0;g<_;g++)m+=String.fromCharCode(255&h),h>>>=8;return m}function o(h,_,g,m,u,x){var E,M,R=h.file,P=h.compression,L=x!==c.utf8encode,N=a.transformTo("string",x(R.name)),S=a.transformTo("string",c.utf8encode(R.name)),w=R.comment,B=a.transformTo("string",x(w)),C=a.transformTo("string",c.utf8encode(w)),z=S.length!==R.name.length,y=C.length!==w.length,W="",H="",K="",$=R.dir,Q=R.date,ft={crc32:0,compressedSize:0,uncompressedSize:0};_&&!g||(ft.crc32=h.crc32,ft.compressedSize=h.compressedSize,ft.uncompressedSize=h.uncompressedSize);var j=0;_&&(j|=8),L||!z&&!y||(j|=2048);var Y=0,_t=0;$&&(Y|=16),u==="UNIX"?(_t=798,Y|=function(q,lt){var dt=q;return q||(dt=lt?16893:33204),(65535&dt)<<16}(R.unixPermissions,$)):(_t=20,Y|=function(q){return 63&(q||0)}(R.dosPermissions)),E=Q.getUTCHours(),E<<=6,E|=Q.getUTCMinutes(),E<<=5,E|=Q.getUTCSeconds()/2,M=Q.getUTCFullYear()-1980,M<<=4,M|=Q.getUTCMonth()+1,M<<=5,M|=Q.getUTCDate(),z&&(H=s(1,1)+s(d(N),4)+S,W+="up"+s(H.length,2)+H),y&&(K=s(1,1)+s(d(B),4)+C,W+="uc"+s(K.length,2)+K);var X="";return X+=`
\0`,X+=s(j,2),X+=P.magic,X+=s(E,2),X+=s(M,2),X+=s(ft.crc32,4),X+=s(ft.compressedSize,4),X+=s(ft.uncompressedSize,4),X+=s(N.length,2),X+=s(W.length,2),{fileRecord:f.LOCAL_FILE_HEADER+X+N+W,dirRecord:f.CENTRAL_FILE_HEADER+s(_t,2)+X+s(B.length,2)+"\0\0\0\0"+s(Y,4)+s(m,4)+N+W+B}}var a=e("../utils"),l=e("../stream/GenericWorker"),c=e("../utf8"),d=e("../crc32"),f=e("../signature");function p(h,_,g,m){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=g,this.encodeFileName=m,this.streamFiles=h,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(p,l),p.prototype.push=function(h){var _=h.meta.percent||0,g=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(h):(this.bytesWritten+=h.data.length,l.prototype.push.call(this,{data:h.data,meta:{currentFile:this.currentFile,percent:g?(_+100*(g-m-1))/g:100}}))},p.prototype.openedSource=function(h){this.currentSourceOffset=this.bytesWritten,this.currentFile=h.file.name;var _=this.streamFiles&&!h.file.dir;if(_){var g=o(h,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},p.prototype.closedSource=function(h){this.accumulate=!1;var _=this.streamFiles&&!h.file.dir,g=o(h,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),_)this.push({data:function(m){return f.DATA_DESCRIPTOR+s(m.crc32,4)+s(m.compressedSize,4)+s(m.uncompressedSize,4)}(h),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},p.prototype.flush=function(){for(var h=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var g=this.bytesWritten-h,m=function(u,x,E,M,R){var P=a.transformTo("string",R(M));return f.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(u,2)+s(u,2)+s(x,4)+s(E,4)+s(P.length,2)+P}(this.dirRecords.length,g,h,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},p.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},p.prototype.registerPrevious=function(h){this._sources.push(h);var _=this;return h.on("data",function(g){_.processChunk(g)}),h.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),h.on("error",function(g){_.error(g)}),this},p.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},p.prototype.error=function(h){var _=this._sources;if(!l.prototype.error.call(this,h))return!1;for(var g=0;g<_.length;g++)try{_[g].error(h)}catch{}return!0},p.prototype.lock=function(){l.prototype.lock.call(this);for(var h=this._sources,_=0;_<h.length;_++)h[_].lock()},n.exports=p},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,n,r){var s=e("../compressions"),o=e("./ZipFileWorker");r.generateWorker=function(a,l,c){var d=new o(l.streamFiles,c,l.platform,l.encodeFileName),f=0;try{a.forEach(function(p,h){f++;var _=function(x,E){var M=x||E,R=s[M];if(!R)throw new Error(M+" is not a valid compression method !");return R}(h.options.compression,l.compression),g=h.options.compressionOptions||l.compressionOptions||{},m=h.dir,u=h.date;h._compressWorker(_,g).withStreamInfo("file",{name:p,dir:m,date:u,comment:h.comment||"",unixPermissions:h.unixPermissions,dosPermissions:h.dosPermissions}).pipe(d)}),d.entriesCount=f}catch(p){d.error(p)}return d}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,n,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=e("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,n,r){var s=e("./utils"),o=e("./external"),a=e("./utf8"),l=e("./zipEntries"),c=e("./stream/Crc32Probe"),d=e("./nodejsUtils");function f(p){return new o.Promise(function(h,_){var g=p.decompressed.getContentWorker().pipe(new c);g.on("error",function(m){_(m)}).on("end",function(){g.streamInfo.crc32!==p.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):h()}).resume()})}n.exports=function(p,h){var _=this;return h=s.extend(h||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),d.isNode&&d.isStream(p)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",p,!0,h.optimizedBinaryString,h.base64).then(function(g){var m=new l(h);return m.load(g),m}).then(function(g){var m=[o.Promise.resolve(g)],u=g.files;if(h.checkCRC32)for(var x=0;x<u.length;x++)m.push(f(u[x]));return o.Promise.all(m)}).then(function(g){for(var m=g.shift(),u=m.files,x=0;x<u.length;x++){var E=u[x],M=E.fileNameStr,R=s.resolve(E.fileNameStr);_.file(R,E.decompressed,{binary:!0,optimizedBinaryString:!0,date:E.date,dir:E.dir,comment:E.fileCommentStr.length?E.fileCommentStr:null,unixPermissions:E.unixPermissions,dosPermissions:E.dosPermissions,createFolders:h.createFolders}),E.dir||(_.file(R).unsafeOriginalName=M)}return m.zipComment.length&&(_.comment=m.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,n,r){var s=e("../utils"),o=e("../stream/GenericWorker");function a(l,c){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(a,o),a.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(d){c.push({data:d,meta:{percent:0}})}).on("error",function(d){c.isPaused?this.generatedError=d:c.error(d)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,n,r){var s=e("readable-stream").Readable;function o(a,l,c){s.call(this,l),this._helper=a;var d=this;a.on("data",function(f,p){d.push(f)||d._helper.pause(),c&&c(p)}).on("error",function(f){d.emit("error",f)}).on("end",function(){d.push(null)})}e("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},n.exports=o},{"../utils":32,"readable-stream":16}],14:[function(e,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,n,r){function s(R,P,L){var N,S=a.getTypeOf(P),w=a.extend(L||{},d);w.date=w.date||new Date,w.compression!==null&&(w.compression=w.compression.toUpperCase()),typeof w.unixPermissions=="string"&&(w.unixPermissions=parseInt(w.unixPermissions,8)),w.unixPermissions&&16384&w.unixPermissions&&(w.dir=!0),w.dosPermissions&&16&w.dosPermissions&&(w.dir=!0),w.dir&&(R=u(R)),w.createFolders&&(N=m(R))&&x.call(this,N,!0);var B=S==="string"&&w.binary===!1&&w.base64===!1;L&&L.binary!==void 0||(w.binary=!B),(P instanceof f&&P.uncompressedSize===0||w.dir||!P||P.length===0)&&(w.base64=!1,w.binary=!0,P="",w.compression="STORE",S="string");var C=null;C=P instanceof f||P instanceof l?P:_.isNode&&_.isStream(P)?new g(R,P):a.prepareContent(R,P,w.binary,w.optimizedBinaryString,w.base64);var z=new p(R,C,w);this.files[R]=z}var o=e("./utf8"),a=e("./utils"),l=e("./stream/GenericWorker"),c=e("./stream/StreamHelper"),d=e("./defaults"),f=e("./compressedObject"),p=e("./zipObject"),h=e("./generate"),_=e("./nodejsUtils"),g=e("./nodejs/NodejsStreamInputAdapter"),m=function(R){R.slice(-1)==="/"&&(R=R.substring(0,R.length-1));var P=R.lastIndexOf("/");return 0<P?R.substring(0,P):""},u=function(R){return R.slice(-1)!=="/"&&(R+="/"),R},x=function(R,P){return P=P!==void 0?P:d.createFolders,R=u(R),this.files[R]||s.call(this,R,null,{dir:!0,createFolders:P}),this.files[R]};function E(R){return Object.prototype.toString.call(R)==="[object RegExp]"}var M={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(R){var P,L,N;for(P in this.files)N=this.files[P],(L=P.slice(this.root.length,P.length))&&P.slice(0,this.root.length)===this.root&&R(L,N)},filter:function(R){var P=[];return this.forEach(function(L,N){R(L,N)&&P.push(N)}),P},file:function(R,P,L){if(arguments.length!==1)return R=this.root+R,s.call(this,R,P,L),this;if(E(R)){var N=R;return this.filter(function(w,B){return!B.dir&&N.test(w)})}var S=this.files[this.root+R];return S&&!S.dir?S:null},folder:function(R){if(!R)return this;if(E(R))return this.filter(function(S,w){return w.dir&&R.test(S)});var P=this.root+R,L=x.call(this,P),N=this.clone();return N.root=L.name,N},remove:function(R){R=this.root+R;var P=this.files[R];if(P||(R.slice(-1)!=="/"&&(R+="/"),P=this.files[R]),P&&!P.dir)delete this.files[R];else for(var L=this.filter(function(S,w){return w.name.slice(0,R.length)===R}),N=0;N<L.length;N++)delete this.files[L[N].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(R){var P,L={};try{if((L=a.extend(R||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=L.type.toLowerCase(),L.compression=L.compression.toUpperCase(),L.type==="binarystring"&&(L.type="string"),!L.type)throw new Error("No output type specified.");a.checkSupport(L.type),L.platform!=="darwin"&&L.platform!=="freebsd"&&L.platform!=="linux"&&L.platform!=="sunos"||(L.platform="UNIX"),L.platform==="win32"&&(L.platform="DOS");var N=L.comment||this.comment||"";P=h.generateWorker(this,L,N)}catch(S){(P=new l("error")).error(S)}return new c(P,L.type||"string",L.mimeType)},generateAsync:function(R,P){return this.generateInternalStream(R).accumulate(P)},generateNodeStream:function(R,P){return(R=R||{}).type||(R.type="nodebuffer"),this.generateInternalStream(R).toNodejsStream(P)}};n.exports=M},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,n,r){n.exports=e("stream")},{stream:void 0}],17:[function(e,n,r){var s=e("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),f=a.charCodeAt(3),p=this.length-4;0<=p;--p)if(this.data[p]===l&&this.data[p+1]===c&&this.data[p+2]===d&&this.data[p+3]===f)return p-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),f=a.charCodeAt(3),p=this.readData(4);return l===p[0]&&c===p[1]&&d===p[2]&&f===p[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],18:[function(e,n,r){var s=e("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,c=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=a,c},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},n.exports=o},{"../utils":32}],19:[function(e,n,r){var s=e("./Uint8ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,n,r){var s=e("./DataReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],21:[function(e,n,r){var s=e("./ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(e,n,r){var s=e("../utils"),o=e("../support"),a=e("./ArrayReader"),l=e("./StringReader"),c=e("./NodeBufferReader"),d=e("./Uint8ArrayReader");n.exports=function(f){var p=s.getTypeOf(f);return s.checkSupport(p),p!=="string"||o.uint8array?p==="nodebuffer"?new c(f):o.uint8array?new d(s.transformTo("uint8array",f)):new a(s.transformTo("array",f)):new l(f)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,n,r){var s=e("./GenericWorker"),o=e("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},n.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,n,r){var s=e("./GenericWorker"),o=e("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},n.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,n,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}o.prototype.processChunk.call(this,l)},n.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,n,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(d){c.dataIsReady=!0,c.data=d,c.max=d&&d.length||0,c.type=s.getTypeOf(d),c.isPaused||c._tickAndRepeat()},function(d){c.error(d)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,n,r){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},n.exports=s},{}],29:[function(e,n,r){var s=e("../utils"),o=e("./ConvertWorker"),a=e("./GenericWorker"),l=e("../base64"),c=e("../support"),d=e("../external"),f=null;if(c.nodestream)try{f=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function p(_,g){return new d.Promise(function(m,u){var x=[],E=_._internalType,M=_._outputType,R=_._mimeType;_.on("data",function(P,L){x.push(P),g&&g(L)}).on("error",function(P){x=[],u(P)}).on("end",function(){try{var P=function(L,N,S){switch(L){case"blob":return s.newBlob(s.transformTo("arraybuffer",N),S);case"base64":return l.encode(N);default:return s.transformTo(L,N)}}(M,function(L,N){var S,w=0,B=null,C=0;for(S=0;S<N.length;S++)C+=N[S].length;switch(L){case"string":return N.join("");case"array":return Array.prototype.concat.apply([],N);case"uint8array":for(B=new Uint8Array(C),S=0;S<N.length;S++)B.set(N[S],w),w+=N[S].length;return B;case"nodebuffer":return Buffer.concat(N);default:throw new Error("concat : unsupported type '"+L+"'")}}(E,x),R);m(P)}catch(L){u(L)}x=[]}).resume()})}function h(_,g,m){var u=g;switch(g){case"blob":case"arraybuffer":u="uint8array";break;case"base64":u="string"}try{this._internalType=u,this._outputType=g,this._mimeType=m,s.checkSupport(u),this._worker=_.pipe(new o(u)),_.lock()}catch(x){this._worker=new a("error"),this._worker.error(x)}}h.prototype={accumulate:function(_){return p(this,_)},on:function(_,g){var m=this;return _==="data"?this._worker.on(_,function(u){g.call(m,u.data,u.meta)}):this._worker.on(_,function(){s.delay(g,arguments,m)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new f(this,{objectMode:this._outputType!=="nodebuffer"},_)}},n.exports=h},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),r.blob=o.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,n,r){for(var s=e("./utils"),o=e("./support"),a=e("./nodejsUtils"),l=e("./stream/GenericWorker"),c=new Array(256),d=0;d<256;d++)c[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;c[254]=c[254]=1;function f(){l.call(this,"utf-8 decode"),this.leftOver=null}function p(){l.call(this,"utf-8 encode")}r.utf8encode=function(h){return o.nodebuffer?a.newBufferFrom(h,"utf-8"):function(_){var g,m,u,x,E,M=_.length,R=0;for(x=0;x<M;x++)(64512&(m=_.charCodeAt(x)))==55296&&x+1<M&&(64512&(u=_.charCodeAt(x+1)))==56320&&(m=65536+(m-55296<<10)+(u-56320),x++),R+=m<128?1:m<2048?2:m<65536?3:4;for(g=o.uint8array?new Uint8Array(R):new Array(R),x=E=0;E<R;x++)(64512&(m=_.charCodeAt(x)))==55296&&x+1<M&&(64512&(u=_.charCodeAt(x+1)))==56320&&(m=65536+(m-55296<<10)+(u-56320),x++),m<128?g[E++]=m:(m<2048?g[E++]=192|m>>>6:(m<65536?g[E++]=224|m>>>12:(g[E++]=240|m>>>18,g[E++]=128|m>>>12&63),g[E++]=128|m>>>6&63),g[E++]=128|63&m);return g}(h)},r.utf8decode=function(h){return o.nodebuffer?s.transformTo("nodebuffer",h).toString("utf-8"):function(_){var g,m,u,x,E=_.length,M=new Array(2*E);for(g=m=0;g<E;)if((u=_[g++])<128)M[m++]=u;else if(4<(x=c[u]))M[m++]=65533,g+=x-1;else{for(u&=x===2?31:x===3?15:7;1<x&&g<E;)u=u<<6|63&_[g++],x--;1<x?M[m++]=65533:u<65536?M[m++]=u:(u-=65536,M[m++]=55296|u>>10&1023,M[m++]=56320|1023&u)}return M.length!==m&&(M.subarray?M=M.subarray(0,m):M.length=m),s.applyFromCharCode(M)}(h=s.transformTo(o.uint8array?"uint8array":"array",h))},s.inherits(f,l),f.prototype.processChunk=function(h){var _=s.transformTo(o.uint8array?"uint8array":"array",h.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var g=_;(_=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),_.set(g,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var m=function(x,E){var M;for((E=E||x.length)>x.length&&(E=x.length),M=E-1;0<=M&&(192&x[M])==128;)M--;return M<0||M===0?E:M+c[x[M]]>E?M:E}(_),u=_;m!==_.length&&(o.uint8array?(u=_.subarray(0,m),this.leftOver=_.subarray(m,_.length)):(u=_.slice(0,m),this.leftOver=_.slice(m,_.length))),this.push({data:r.utf8decode(u),meta:h.meta})},f.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=f,s.inherits(p,l),p.prototype.processChunk=function(h){this.push({data:r.utf8encode(h.data),meta:h.meta})},r.Utf8EncodeWorker=p},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,n,r){var s=e("./support"),o=e("./base64"),a=e("./nodejsUtils"),l=e("./external");function c(g){return g}function d(g,m){for(var u=0;u<g.length;++u)m[u]=255&g.charCodeAt(u);return m}e("setimmediate"),r.newBlob=function(g,m){r.checkSupport("blob");try{return new Blob([g],{type:m})}catch{try{var u=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return u.append(g),u.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var f={stringifyByChunk:function(g,m,u){var x=[],E=0,M=g.length;if(M<=u)return String.fromCharCode.apply(null,g);for(;E<M;)m==="array"||m==="nodebuffer"?x.push(String.fromCharCode.apply(null,g.slice(E,Math.min(E+u,M)))):x.push(String.fromCharCode.apply(null,g.subarray(E,Math.min(E+u,M)))),E+=u;return x.join("")},stringifyByChar:function(g){for(var m="",u=0;u<g.length;u++)m+=String.fromCharCode(g[u]);return m},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function p(g){var m=65536,u=r.getTypeOf(g),x=!0;if(u==="uint8array"?x=f.applyCanBeUsed.uint8array:u==="nodebuffer"&&(x=f.applyCanBeUsed.nodebuffer),x)for(;1<m;)try{return f.stringifyByChunk(g,u,m)}catch{m=Math.floor(m/2)}return f.stringifyByChar(g)}function h(g,m){for(var u=0;u<g.length;u++)m[u]=g[u];return m}r.applyFromCharCode=p;var _={};_.string={string:c,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return _.string.uint8array(g).buffer},uint8array:function(g){return d(g,new Uint8Array(g.length))},nodebuffer:function(g){return d(g,a.allocBuffer(g.length))}},_.array={string:p,array:c,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(g)}},_.arraybuffer={string:function(g){return p(new Uint8Array(g))},array:function(g){return h(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:c,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(new Uint8Array(g))}},_.uint8array={string:p,array:function(g){return h(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:c,nodebuffer:function(g){return a.newBufferFrom(g)}},_.nodebuffer={string:p,array:function(g){return h(g,new Array(g.length))},arraybuffer:function(g){return _.nodebuffer.uint8array(g).buffer},uint8array:function(g){return h(g,new Uint8Array(g.length))},nodebuffer:c},r.transformTo=function(g,m){if(m=m||"",!g)return m;r.checkSupport(g);var u=r.getTypeOf(m);return _[u][g](m)},r.resolve=function(g){for(var m=g.split("/"),u=[],x=0;x<m.length;x++){var E=m[x];E==="."||E===""&&x!==0&&x!==m.length-1||(E===".."?u.pop():u.push(E))}return u.join("/")},r.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(g)?"nodebuffer":s.uint8array&&g instanceof Uint8Array?"uint8array":s.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(g){if(!s[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(g){var m,u,x="";for(u=0;u<(g||"").length;u++)x+="\\x"+((m=g.charCodeAt(u))<16?"0":"")+m.toString(16).toUpperCase();return x},r.delay=function(g,m,u){setImmediate(function(){g.apply(u||null,m||[])})},r.inherits=function(g,m){function u(){}u.prototype=m.prototype,g.prototype=new u},r.extend=function(){var g,m,u={};for(g=0;g<arguments.length;g++)for(m in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],m)&&u[m]===void 0&&(u[m]=arguments[g][m]);return u},r.prepareContent=function(g,m,u,x,E){return l.Promise.resolve(m).then(function(M){return s.blob&&(M instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(M))!==-1)&&typeof FileReader<"u"?new l.Promise(function(R,P){var L=new FileReader;L.onload=function(N){R(N.target.result)},L.onerror=function(N){P(N.target.error)},L.readAsArrayBuffer(M)}):M}).then(function(M){var R=r.getTypeOf(M);return R?(R==="arraybuffer"?M=r.transformTo("uint8array",M):R==="string"&&(E?M=o.decode(M):u&&x!==!0&&(M=function(P){return d(P,s.uint8array?new Uint8Array(P.length):new Array(P.length))}(M))),M):l.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,n,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./signature"),l=e("./zipEntry"),c=e("./support");function d(f){this.files=[],this.loadOptions=f}d.prototype={checkSignature:function(f){if(!this.reader.readAndCheckSignature(f)){this.reader.index-=4;var p=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(p)+", expected "+o.pretty(f)+")")}},isSignature:function(f,p){var h=this.reader.index;this.reader.setIndex(f);var _=this.reader.readString(4)===p;return this.reader.setIndex(h),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var f=this.reader.readData(this.zipCommentLength),p=c.uint8array?"uint8array":"array",h=o.transformTo(p,f);this.zipComment=this.loadOptions.decodeFileName(h)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var f,p,h,_=this.zip64EndOfCentralSize-44;0<_;)f=this.reader.readInt(2),p=this.reader.readInt(4),h=this.reader.readData(p),this.zip64ExtensibleData[f]={id:f,length:p,value:h}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var f,p;for(f=0;f<this.files.length;f++)p=this.files[f],this.reader.setIndex(p.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),p.readLocalPart(this.reader),p.handleUTF8(),p.processAttributes()},readCentralDir:function(){var f;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(f=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(f);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var f=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(f<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(f);var p=f;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(f=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(f),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var h=this.centralDirOffset+this.centralDirSize;this.zip64&&(h+=20,h+=12+this.zip64EndOfCentralSize);var _=p-h;if(0<_)this.isSignature(p,a.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(f){this.reader=s(f)},load:function(f){this.prepareReader(f),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=d},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,n,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./compressedObject"),l=e("./crc32"),c=e("./utf8"),d=e("./compressions"),f=e("./support");function p(h,_){this.options=h,this.loadOptions=_}p.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(h){var _,g;if(h.skip(22),this.fileNameLength=h.readInt(2),g=h.readInt(2),this.fileName=h.readData(this.fileNameLength),h.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=function(m){for(var u in d)if(Object.prototype.hasOwnProperty.call(d,u)&&d[u].magic===m)return d[u];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,_,h.readData(this.compressedSize))},readCentralPart:function(h){this.versionMadeBy=h.readInt(2),h.skip(2),this.bitFlag=h.readInt(2),this.compressionMethod=h.readString(2),this.date=h.readDate(),this.crc32=h.readInt(4),this.compressedSize=h.readInt(4),this.uncompressedSize=h.readInt(4);var _=h.readInt(2);if(this.extraFieldsLength=h.readInt(2),this.fileCommentLength=h.readInt(2),this.diskNumberStart=h.readInt(2),this.internalFileAttributes=h.readInt(2),this.externalFileAttributes=h.readInt(4),this.localHeaderOffset=h.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");h.skip(_),this.readExtraFields(h),this.parseZIP64ExtraField(h),this.fileComment=h.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var h=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),h==0&&(this.dosPermissions=63&this.externalFileAttributes),h==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var h=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=h.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=h.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=h.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=h.readInt(4))}},readExtraFields:function(h){var _,g,m,u=h.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});h.index+4<u;)_=h.readInt(2),g=h.readInt(2),m=h.readData(g),this.extraFields[_]={id:_,length:g,value:m};h.setIndex(u)},handleUTF8:function(){var h=f.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var g=o.transformTo(h,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var u=o.transformTo(h,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(u)}}},findExtraFieldUnicodePath:function(){var h=this.extraFields[28789];if(h){var _=s(h.value);return _.readInt(1)!==1||l(this.fileName)!==_.readInt(4)?null:c.utf8decode(_.readData(h.length-5))}return null},findExtraFieldUnicodeComment:function(){var h=this.extraFields[25461];if(h){var _=s(h.value);return _.readInt(1)!==1||l(this.fileComment)!==_.readInt(4)?null:c.utf8decode(_.readData(h.length-5))}return null}},n.exports=p},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,n,r){function s(_,g,m){this.name=_,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=g,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var o=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),l=e("./utf8"),c=e("./compressedObject"),d=e("./stream/GenericWorker");s.prototype={internalStream:function(_){var g=null,m="string";try{if(!_)throw new Error("No output type specified.");var u=(m=_.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),g=this._decompressWorker();var x=!this._dataBinary;x&&!u&&(g=g.pipe(new l.Utf8EncodeWorker)),!x&&u&&(g=g.pipe(new l.Utf8DecodeWorker))}catch(E){(g=new d("error")).error(E)}return new o(g,m,"")},async:function(_,g){return this.internalStream(_).accumulate(g)},nodeStream:function(_,g){return this.internalStream(_||"nodebuffer").toNodejsStream(g)},_compressWorker:function(_,g){if(this._data instanceof c&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(m,_,g)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof d?this._data:new a(this._data)}};for(var f=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],p=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},h=0;h<f.length;h++)s.prototype[f[h]]=p;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,n,r){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,d=new l(_),f=s.document.createTextNode("");d.observe(f,{characterData:!0}),o=function(){f.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var g=s.document.createElement("script");g.onreadystatechange=function(){_(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},s.document.documentElement.appendChild(g)}:function(){setTimeout(_,0)};else{var p=new s.MessageChannel;p.port1.onmessage=_,o=function(){p.port2.postMessage(0)}}var h=[];function _(){var g,m;a=!0;for(var u=h.length;u;){for(m=h,h=[],g=-1;++g<u;)m[g]();u=h.length}a=!1}n.exports=function(g){h.push(g)!==1||a||o()}}).call(this,typeof hs<"u"?hs:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,n,r){var s=e("immediate");function o(){}var a={},l=["REJECTED"],c=["FULFILLED"],d=["PENDING"];function f(u){if(typeof u!="function")throw new TypeError("resolver must be a function");this.state=d,this.queue=[],this.outcome=void 0,u!==o&&g(this,u)}function p(u,x,E){this.promise=u,typeof x=="function"&&(this.onFulfilled=x,this.callFulfilled=this.otherCallFulfilled),typeof E=="function"&&(this.onRejected=E,this.callRejected=this.otherCallRejected)}function h(u,x,E){s(function(){var M;try{M=x(E)}catch(R){return a.reject(u,R)}M===u?a.reject(u,new TypeError("Cannot resolve promise with itself")):a.resolve(u,M)})}function _(u){var x=u&&u.then;if(u&&(typeof u=="object"||typeof u=="function")&&typeof x=="function")return function(){x.apply(u,arguments)}}function g(u,x){var E=!1;function M(L){E||(E=!0,a.reject(u,L))}function R(L){E||(E=!0,a.resolve(u,L))}var P=m(function(){x(R,M)});P.status==="error"&&M(P.value)}function m(u,x){var E={};try{E.value=u(x),E.status="success"}catch(M){E.status="error",E.value=M}return E}(n.exports=f).prototype.finally=function(u){if(typeof u!="function")return this;var x=this.constructor;return this.then(function(E){return x.resolve(u()).then(function(){return E})},function(E){return x.resolve(u()).then(function(){throw E})})},f.prototype.catch=function(u){return this.then(null,u)},f.prototype.then=function(u,x){if(typeof u!="function"&&this.state===c||typeof x!="function"&&this.state===l)return this;var E=new this.constructor(o);return this.state!==d?h(E,this.state===c?u:x,this.outcome):this.queue.push(new p(E,u,x)),E},p.prototype.callFulfilled=function(u){a.resolve(this.promise,u)},p.prototype.otherCallFulfilled=function(u){h(this.promise,this.onFulfilled,u)},p.prototype.callRejected=function(u){a.reject(this.promise,u)},p.prototype.otherCallRejected=function(u){h(this.promise,this.onRejected,u)},a.resolve=function(u,x){var E=m(_,x);if(E.status==="error")return a.reject(u,E.value);var M=E.value;if(M)g(u,M);else{u.state=c,u.outcome=x;for(var R=-1,P=u.queue.length;++R<P;)u.queue[R].callFulfilled(x)}return u},a.reject=function(u,x){u.state=l,u.outcome=x;for(var E=-1,M=u.queue.length;++E<M;)u.queue[E].callRejected(x);return u},f.resolve=function(u){return u instanceof this?u:a.resolve(new this(o),u)},f.reject=function(u){var x=new this(o);return a.reject(x,u)},f.all=function(u){var x=this;if(Object.prototype.toString.call(u)!=="[object Array]")return this.reject(new TypeError("must be an array"));var E=u.length,M=!1;if(!E)return this.resolve([]);for(var R=new Array(E),P=0,L=-1,N=new this(o);++L<E;)S(u[L],L);return N;function S(w,B){x.resolve(w).then(function(C){R[B]=C,++P!==E||M||(M=!0,a.resolve(N,R))},function(C){M||(M=!0,a.reject(N,C))})}},f.race=function(u){var x=this;if(Object.prototype.toString.call(u)!=="[object Array]")return this.reject(new TypeError("must be an array"));var E=u.length,M=!1;if(!E)return this.resolve([]);for(var R=-1,P=new this(o);++R<E;)L=u[R],x.resolve(L).then(function(N){M||(M=!0,a.resolve(P,N))},function(N){M||(M=!0,a.reject(P,N))});var L;return P}},{immediate:36}],38:[function(e,n,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,n,r){var s=e("./zlib/deflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/messages"),c=e("./zlib/zstream"),d=Object.prototype.toString,f=0,p=-1,h=0,_=8;function g(u){if(!(this instanceof g))return new g(u);this.options=o.assign({level:p,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:h,to:""},u||{});var x=this.options;x.raw&&0<x.windowBits?x.windowBits=-x.windowBits:x.gzip&&0<x.windowBits&&x.windowBits<16&&(x.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var E=s.deflateInit2(this.strm,x.level,x.method,x.windowBits,x.memLevel,x.strategy);if(E!==f)throw new Error(l[E]);if(x.header&&s.deflateSetHeader(this.strm,x.header),x.dictionary){var M;if(M=typeof x.dictionary=="string"?a.string2buf(x.dictionary):d.call(x.dictionary)==="[object ArrayBuffer]"?new Uint8Array(x.dictionary):x.dictionary,(E=s.deflateSetDictionary(this.strm,M))!==f)throw new Error(l[E]);this._dict_set=!0}}function m(u,x){var E=new g(x);if(E.push(u,!0),E.err)throw E.msg||l[E.err];return E.result}g.prototype.push=function(u,x){var E,M,R=this.strm,P=this.options.chunkSize;if(this.ended)return!1;M=x===~~x?x:x===!0?4:0,typeof u=="string"?R.input=a.string2buf(u):d.call(u)==="[object ArrayBuffer]"?R.input=new Uint8Array(u):R.input=u,R.next_in=0,R.avail_in=R.input.length;do{if(R.avail_out===0&&(R.output=new o.Buf8(P),R.next_out=0,R.avail_out=P),(E=s.deflate(R,M))!==1&&E!==f)return this.onEnd(E),!(this.ended=!0);R.avail_out!==0&&(R.avail_in!==0||M!==4&&M!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(R.output,R.next_out))):this.onData(o.shrinkBuf(R.output,R.next_out)))}while((0<R.avail_in||R.avail_out===0)&&E!==1);return M===4?(E=s.deflateEnd(this.strm),this.onEnd(E),this.ended=!0,E===f):M!==2||(this.onEnd(f),!(R.avail_out=0))},g.prototype.onData=function(u){this.chunks.push(u)},g.prototype.onEnd=function(u){u===f&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=u,this.msg=this.strm.msg},r.Deflate=g,r.deflate=m,r.deflateRaw=function(u,x){return(x=x||{}).raw=!0,m(u,x)},r.gzip=function(u,x){return(x=x||{}).gzip=!0,m(u,x)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,n,r){var s=e("./zlib/inflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/constants"),c=e("./zlib/messages"),d=e("./zlib/zstream"),f=e("./zlib/gzheader"),p=Object.prototype.toString;function h(g){if(!(this instanceof h))return new h(g);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},g||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||g&&g.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&!(15&m.windowBits)&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var u=s.inflateInit2(this.strm,m.windowBits);if(u!==l.Z_OK)throw new Error(c[u]);this.header=new f,s.inflateGetHeader(this.strm,this.header)}function _(g,m){var u=new h(m);if(u.push(g,!0),u.err)throw u.msg||c[u.err];return u.result}h.prototype.push=function(g,m){var u,x,E,M,R,P,L=this.strm,N=this.options.chunkSize,S=this.options.dictionary,w=!1;if(this.ended)return!1;x=m===~~m?m:m===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof g=="string"?L.input=a.binstring2buf(g):p.call(g)==="[object ArrayBuffer]"?L.input=new Uint8Array(g):L.input=g,L.next_in=0,L.avail_in=L.input.length;do{if(L.avail_out===0&&(L.output=new o.Buf8(N),L.next_out=0,L.avail_out=N),(u=s.inflate(L,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&S&&(P=typeof S=="string"?a.string2buf(S):p.call(S)==="[object ArrayBuffer]"?new Uint8Array(S):S,u=s.inflateSetDictionary(this.strm,P)),u===l.Z_BUF_ERROR&&w===!0&&(u=l.Z_OK,w=!1),u!==l.Z_STREAM_END&&u!==l.Z_OK)return this.onEnd(u),!(this.ended=!0);L.next_out&&(L.avail_out!==0&&u!==l.Z_STREAM_END&&(L.avail_in!==0||x!==l.Z_FINISH&&x!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(E=a.utf8border(L.output,L.next_out),M=L.next_out-E,R=a.buf2string(L.output,E),L.next_out=M,L.avail_out=N-M,M&&o.arraySet(L.output,L.output,E,M,0),this.onData(R)):this.onData(o.shrinkBuf(L.output,L.next_out)))),L.avail_in===0&&L.avail_out===0&&(w=!0)}while((0<L.avail_in||L.avail_out===0)&&u!==l.Z_STREAM_END);return u===l.Z_STREAM_END&&(x=l.Z_FINISH),x===l.Z_FINISH?(u=s.inflateEnd(this.strm),this.onEnd(u),this.ended=!0,u===l.Z_OK):x!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(L.avail_out=0))},h.prototype.onData=function(g){this.chunks.push(g)},h.prototype.onEnd=function(g){g===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},r.Inflate=h,r.inflate=_,r.inflateRaw=function(g,m){return(m=m||{}).raw=!0,_(g,m)},r.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var d=c.shift();if(d){if(typeof d!="object")throw new TypeError(d+"must be non-object");for(var f in d)d.hasOwnProperty(f)&&(l[f]=d[f])}}return l},r.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var o={arraySet:function(l,c,d,f,p){if(c.subarray&&l.subarray)l.set(c.subarray(d,d+f),p);else for(var h=0;h<f;h++)l[p+h]=c[d+h]},flattenChunks:function(l){var c,d,f,p,h,_;for(c=f=0,d=l.length;c<d;c++)f+=l[c].length;for(_=new Uint8Array(f),c=p=0,d=l.length;c<d;c++)h=l[c],_.set(h,p),p+=h.length;return _}},a={arraySet:function(l,c,d,f,p){for(var h=0;h<f;h++)l[p+h]=c[d+h]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,o)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(s)},{}],42:[function(e,n,r){var s=e("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function d(f,p){if(p<65537&&(f.subarray&&a||!f.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(f,p));for(var h="",_=0;_<p;_++)h+=String.fromCharCode(f[_]);return h}l[254]=l[254]=1,r.string2buf=function(f){var p,h,_,g,m,u=f.length,x=0;for(g=0;g<u;g++)(64512&(h=f.charCodeAt(g)))==55296&&g+1<u&&(64512&(_=f.charCodeAt(g+1)))==56320&&(h=65536+(h-55296<<10)+(_-56320),g++),x+=h<128?1:h<2048?2:h<65536?3:4;for(p=new s.Buf8(x),g=m=0;m<x;g++)(64512&(h=f.charCodeAt(g)))==55296&&g+1<u&&(64512&(_=f.charCodeAt(g+1)))==56320&&(h=65536+(h-55296<<10)+(_-56320),g++),h<128?p[m++]=h:(h<2048?p[m++]=192|h>>>6:(h<65536?p[m++]=224|h>>>12:(p[m++]=240|h>>>18,p[m++]=128|h>>>12&63),p[m++]=128|h>>>6&63),p[m++]=128|63&h);return p},r.buf2binstring=function(f){return d(f,f.length)},r.binstring2buf=function(f){for(var p=new s.Buf8(f.length),h=0,_=p.length;h<_;h++)p[h]=f.charCodeAt(h);return p},r.buf2string=function(f,p){var h,_,g,m,u=p||f.length,x=new Array(2*u);for(h=_=0;h<u;)if((g=f[h++])<128)x[_++]=g;else if(4<(m=l[g]))x[_++]=65533,h+=m-1;else{for(g&=m===2?31:m===3?15:7;1<m&&h<u;)g=g<<6|63&f[h++],m--;1<m?x[_++]=65533:g<65536?x[_++]=g:(g-=65536,x[_++]=55296|g>>10&1023,x[_++]=56320|1023&g)}return d(x,_)},r.utf8border=function(f,p){var h;for((p=p||f.length)>f.length&&(p=f.length),h=p-1;0<=h&&(192&f[h])==128;)h--;return h<0||h===0?p:h+l[f[h]]>p?h:p}},{"./common":41}],43:[function(e,n,r){n.exports=function(s,o,a,l){for(var c=65535&s|0,d=s>>>16&65535|0,f=0;a!==0;){for(a-=f=2e3<a?2e3:a;d=d+(c=c+o[l++]|0)|0,--f;);c%=65521,d%=65521}return c|d<<16|0}},{}],44:[function(e,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,n,r){var s=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var c=0;c<8;c++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();n.exports=function(o,a,l,c){var d=s,f=c+l;o^=-1;for(var p=c;p<f;p++)o=o>>>8^d[255&(o^a[p])];return-1^o}},{}],46:[function(e,n,r){var s,o=e("../utils/common"),a=e("./trees"),l=e("./adler32"),c=e("./crc32"),d=e("./messages"),f=0,p=4,h=0,_=-2,g=-1,m=4,u=2,x=8,E=9,M=286,R=30,P=19,L=2*M+1,N=15,S=3,w=258,B=w+S+1,C=42,z=113,y=1,W=2,H=3,K=4;function $(v,mt){return v.msg=d[mt],mt}function Q(v){return(v<<1)-(4<v?9:0)}function ft(v){for(var mt=v.length;0<=--mt;)v[mt]=0}function j(v){var mt=v.state,st=mt.pending;st>v.avail_out&&(st=v.avail_out),st!==0&&(o.arraySet(v.output,mt.pending_buf,mt.pending_out,st,v.next_out),v.next_out+=st,mt.pending_out+=st,v.total_out+=st,v.avail_out-=st,mt.pending-=st,mt.pending===0&&(mt.pending_out=0))}function Y(v,mt){a._tr_flush_block(v,0<=v.block_start?v.block_start:-1,v.strstart-v.block_start,mt),v.block_start=v.strstart,j(v.strm)}function _t(v,mt){v.pending_buf[v.pending++]=mt}function X(v,mt){v.pending_buf[v.pending++]=mt>>>8&255,v.pending_buf[v.pending++]=255&mt}function q(v,mt){var st,V,O=v.max_chain_length,J=v.strstart,ot=v.prev_length,I=v.nice_match,b=v.strstart>v.w_size-B?v.strstart-(v.w_size-B):0,G=v.window,rt=v.w_mask,nt=v.prev,at=v.strstart+w,wt=G[J+ot-1],yt=G[J+ot];v.prev_length>=v.good_match&&(O>>=2),I>v.lookahead&&(I=v.lookahead);do if(G[(st=mt)+ot]===yt&&G[st+ot-1]===wt&&G[st]===G[J]&&G[++st]===G[J+1]){J+=2,st++;do;while(G[++J]===G[++st]&&G[++J]===G[++st]&&G[++J]===G[++st]&&G[++J]===G[++st]&&G[++J]===G[++st]&&G[++J]===G[++st]&&G[++J]===G[++st]&&G[++J]===G[++st]&&J<at);if(V=w-(at-J),J=at-w,ot<V){if(v.match_start=mt,I<=(ot=V))break;wt=G[J+ot-1],yt=G[J+ot]}}while((mt=nt[mt&rt])>b&&--O!=0);return ot<=v.lookahead?ot:v.lookahead}function lt(v){var mt,st,V,O,J,ot,I,b,G,rt,nt=v.w_size;do{if(O=v.window_size-v.lookahead-v.strstart,v.strstart>=nt+(nt-B)){for(o.arraySet(v.window,v.window,nt,nt,0),v.match_start-=nt,v.strstart-=nt,v.block_start-=nt,mt=st=v.hash_size;V=v.head[--mt],v.head[mt]=nt<=V?V-nt:0,--st;);for(mt=st=nt;V=v.prev[--mt],v.prev[mt]=nt<=V?V-nt:0,--st;);O+=nt}if(v.strm.avail_in===0)break;if(ot=v.strm,I=v.window,b=v.strstart+v.lookahead,G=O,rt=void 0,rt=ot.avail_in,G<rt&&(rt=G),st=rt===0?0:(ot.avail_in-=rt,o.arraySet(I,ot.input,ot.next_in,rt,b),ot.state.wrap===1?ot.adler=l(ot.adler,I,rt,b):ot.state.wrap===2&&(ot.adler=c(ot.adler,I,rt,b)),ot.next_in+=rt,ot.total_in+=rt,rt),v.lookahead+=st,v.lookahead+v.insert>=S)for(J=v.strstart-v.insert,v.ins_h=v.window[J],v.ins_h=(v.ins_h<<v.hash_shift^v.window[J+1])&v.hash_mask;v.insert&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[J+S-1])&v.hash_mask,v.prev[J&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=J,J++,v.insert--,!(v.lookahead+v.insert<S)););}while(v.lookahead<B&&v.strm.avail_in!==0)}function dt(v,mt){for(var st,V;;){if(v.lookahead<B){if(lt(v),v.lookahead<B&&mt===f)return y;if(v.lookahead===0)break}if(st=0,v.lookahead>=S&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+S-1])&v.hash_mask,st=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),st!==0&&v.strstart-st<=v.w_size-B&&(v.match_length=q(v,st)),v.match_length>=S)if(V=a._tr_tally(v,v.strstart-v.match_start,v.match_length-S),v.lookahead-=v.match_length,v.match_length<=v.max_lazy_match&&v.lookahead>=S){for(v.match_length--;v.strstart++,v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+S-1])&v.hash_mask,st=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart,--v.match_length!=0;);v.strstart++}else v.strstart+=v.match_length,v.match_length=0,v.ins_h=v.window[v.strstart],v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+1])&v.hash_mask;else V=a._tr_tally(v,0,v.window[v.strstart]),v.lookahead--,v.strstart++;if(V&&(Y(v,!1),v.strm.avail_out===0))return y}return v.insert=v.strstart<S-1?v.strstart:S-1,mt===p?(Y(v,!0),v.strm.avail_out===0?H:K):v.last_lit&&(Y(v,!1),v.strm.avail_out===0)?y:W}function xt(v,mt){for(var st,V,O;;){if(v.lookahead<B){if(lt(v),v.lookahead<B&&mt===f)return y;if(v.lookahead===0)break}if(st=0,v.lookahead>=S&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+S-1])&v.hash_mask,st=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),v.prev_length=v.match_length,v.prev_match=v.match_start,v.match_length=S-1,st!==0&&v.prev_length<v.max_lazy_match&&v.strstart-st<=v.w_size-B&&(v.match_length=q(v,st),v.match_length<=5&&(v.strategy===1||v.match_length===S&&4096<v.strstart-v.match_start)&&(v.match_length=S-1)),v.prev_length>=S&&v.match_length<=v.prev_length){for(O=v.strstart+v.lookahead-S,V=a._tr_tally(v,v.strstart-1-v.prev_match,v.prev_length-S),v.lookahead-=v.prev_length-1,v.prev_length-=2;++v.strstart<=O&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+S-1])&v.hash_mask,st=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),--v.prev_length!=0;);if(v.match_available=0,v.match_length=S-1,v.strstart++,V&&(Y(v,!1),v.strm.avail_out===0))return y}else if(v.match_available){if((V=a._tr_tally(v,0,v.window[v.strstart-1]))&&Y(v,!1),v.strstart++,v.lookahead--,v.strm.avail_out===0)return y}else v.match_available=1,v.strstart++,v.lookahead--}return v.match_available&&(V=a._tr_tally(v,0,v.window[v.strstart-1]),v.match_available=0),v.insert=v.strstart<S-1?v.strstart:S-1,mt===p?(Y(v,!0),v.strm.avail_out===0?H:K):v.last_lit&&(Y(v,!1),v.strm.avail_out===0)?y:W}function Et(v,mt,st,V,O){this.good_length=v,this.max_lazy=mt,this.nice_length=st,this.max_chain=V,this.func=O}function kt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=x,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*L),this.dyn_dtree=new o.Buf16(2*(2*R+1)),this.bl_tree=new o.Buf16(2*(2*P+1)),ft(this.dyn_ltree),ft(this.dyn_dtree),ft(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(N+1),this.heap=new o.Buf16(2*M+1),ft(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*M+1),ft(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Jt(v){var mt;return v&&v.state?(v.total_in=v.total_out=0,v.data_type=u,(mt=v.state).pending=0,mt.pending_out=0,mt.wrap<0&&(mt.wrap=-mt.wrap),mt.status=mt.wrap?C:z,v.adler=mt.wrap===2?0:1,mt.last_flush=f,a._tr_init(mt),h):$(v,_)}function Qt(v){var mt=Jt(v);return mt===h&&function(st){st.window_size=2*st.w_size,ft(st.head),st.max_lazy_match=s[st.level].max_lazy,st.good_match=s[st.level].good_length,st.nice_match=s[st.level].nice_length,st.max_chain_length=s[st.level].max_chain,st.strstart=0,st.block_start=0,st.lookahead=0,st.insert=0,st.match_length=st.prev_length=S-1,st.match_available=0,st.ins_h=0}(v.state),mt}function de(v,mt,st,V,O,J){if(!v)return _;var ot=1;if(mt===g&&(mt=6),V<0?(ot=0,V=-V):15<V&&(ot=2,V-=16),O<1||E<O||st!==x||V<8||15<V||mt<0||9<mt||J<0||m<J)return $(v,_);V===8&&(V=9);var I=new kt;return(v.state=I).strm=v,I.wrap=ot,I.gzhead=null,I.w_bits=V,I.w_size=1<<I.w_bits,I.w_mask=I.w_size-1,I.hash_bits=O+7,I.hash_size=1<<I.hash_bits,I.hash_mask=I.hash_size-1,I.hash_shift=~~((I.hash_bits+S-1)/S),I.window=new o.Buf8(2*I.w_size),I.head=new o.Buf16(I.hash_size),I.prev=new o.Buf16(I.w_size),I.lit_bufsize=1<<O+6,I.pending_buf_size=4*I.lit_bufsize,I.pending_buf=new o.Buf8(I.pending_buf_size),I.d_buf=1*I.lit_bufsize,I.l_buf=3*I.lit_bufsize,I.level=mt,I.strategy=J,I.method=st,Qt(v)}s=[new Et(0,0,0,0,function(v,mt){var st=65535;for(st>v.pending_buf_size-5&&(st=v.pending_buf_size-5);;){if(v.lookahead<=1){if(lt(v),v.lookahead===0&&mt===f)return y;if(v.lookahead===0)break}v.strstart+=v.lookahead,v.lookahead=0;var V=v.block_start+st;if((v.strstart===0||v.strstart>=V)&&(v.lookahead=v.strstart-V,v.strstart=V,Y(v,!1),v.strm.avail_out===0)||v.strstart-v.block_start>=v.w_size-B&&(Y(v,!1),v.strm.avail_out===0))return y}return v.insert=0,mt===p?(Y(v,!0),v.strm.avail_out===0?H:K):(v.strstart>v.block_start&&(Y(v,!1),v.strm.avail_out),y)}),new Et(4,4,8,4,dt),new Et(4,5,16,8,dt),new Et(4,6,32,32,dt),new Et(4,4,16,16,xt),new Et(8,16,32,32,xt),new Et(8,16,128,128,xt),new Et(8,32,128,256,xt),new Et(32,128,258,1024,xt),new Et(32,258,258,4096,xt)],r.deflateInit=function(v,mt){return de(v,mt,x,15,8,0)},r.deflateInit2=de,r.deflateReset=Qt,r.deflateResetKeep=Jt,r.deflateSetHeader=function(v,mt){return v&&v.state?v.state.wrap!==2?_:(v.state.gzhead=mt,h):_},r.deflate=function(v,mt){var st,V,O,J;if(!v||!v.state||5<mt||mt<0)return v?$(v,_):_;if(V=v.state,!v.output||!v.input&&v.avail_in!==0||V.status===666&&mt!==p)return $(v,v.avail_out===0?-5:_);if(V.strm=v,st=V.last_flush,V.last_flush=mt,V.status===C)if(V.wrap===2)v.adler=0,_t(V,31),_t(V,139),_t(V,8),V.gzhead?(_t(V,(V.gzhead.text?1:0)+(V.gzhead.hcrc?2:0)+(V.gzhead.extra?4:0)+(V.gzhead.name?8:0)+(V.gzhead.comment?16:0)),_t(V,255&V.gzhead.time),_t(V,V.gzhead.time>>8&255),_t(V,V.gzhead.time>>16&255),_t(V,V.gzhead.time>>24&255),_t(V,V.level===9?2:2<=V.strategy||V.level<2?4:0),_t(V,255&V.gzhead.os),V.gzhead.extra&&V.gzhead.extra.length&&(_t(V,255&V.gzhead.extra.length),_t(V,V.gzhead.extra.length>>8&255)),V.gzhead.hcrc&&(v.adler=c(v.adler,V.pending_buf,V.pending,0)),V.gzindex=0,V.status=69):(_t(V,0),_t(V,0),_t(V,0),_t(V,0),_t(V,0),_t(V,V.level===9?2:2<=V.strategy||V.level<2?4:0),_t(V,3),V.status=z);else{var ot=x+(V.w_bits-8<<4)<<8;ot|=(2<=V.strategy||V.level<2?0:V.level<6?1:V.level===6?2:3)<<6,V.strstart!==0&&(ot|=32),ot+=31-ot%31,V.status=z,X(V,ot),V.strstart!==0&&(X(V,v.adler>>>16),X(V,65535&v.adler)),v.adler=1}if(V.status===69)if(V.gzhead.extra){for(O=V.pending;V.gzindex<(65535&V.gzhead.extra.length)&&(V.pending!==V.pending_buf_size||(V.gzhead.hcrc&&V.pending>O&&(v.adler=c(v.adler,V.pending_buf,V.pending-O,O)),j(v),O=V.pending,V.pending!==V.pending_buf_size));)_t(V,255&V.gzhead.extra[V.gzindex]),V.gzindex++;V.gzhead.hcrc&&V.pending>O&&(v.adler=c(v.adler,V.pending_buf,V.pending-O,O)),V.gzindex===V.gzhead.extra.length&&(V.gzindex=0,V.status=73)}else V.status=73;if(V.status===73)if(V.gzhead.name){O=V.pending;do{if(V.pending===V.pending_buf_size&&(V.gzhead.hcrc&&V.pending>O&&(v.adler=c(v.adler,V.pending_buf,V.pending-O,O)),j(v),O=V.pending,V.pending===V.pending_buf_size)){J=1;break}J=V.gzindex<V.gzhead.name.length?255&V.gzhead.name.charCodeAt(V.gzindex++):0,_t(V,J)}while(J!==0);V.gzhead.hcrc&&V.pending>O&&(v.adler=c(v.adler,V.pending_buf,V.pending-O,O)),J===0&&(V.gzindex=0,V.status=91)}else V.status=91;if(V.status===91)if(V.gzhead.comment){O=V.pending;do{if(V.pending===V.pending_buf_size&&(V.gzhead.hcrc&&V.pending>O&&(v.adler=c(v.adler,V.pending_buf,V.pending-O,O)),j(v),O=V.pending,V.pending===V.pending_buf_size)){J=1;break}J=V.gzindex<V.gzhead.comment.length?255&V.gzhead.comment.charCodeAt(V.gzindex++):0,_t(V,J)}while(J!==0);V.gzhead.hcrc&&V.pending>O&&(v.adler=c(v.adler,V.pending_buf,V.pending-O,O)),J===0&&(V.status=103)}else V.status=103;if(V.status===103&&(V.gzhead.hcrc?(V.pending+2>V.pending_buf_size&&j(v),V.pending+2<=V.pending_buf_size&&(_t(V,255&v.adler),_t(V,v.adler>>8&255),v.adler=0,V.status=z)):V.status=z),V.pending!==0){if(j(v),v.avail_out===0)return V.last_flush=-1,h}else if(v.avail_in===0&&Q(mt)<=Q(st)&&mt!==p)return $(v,-5);if(V.status===666&&v.avail_in!==0)return $(v,-5);if(v.avail_in!==0||V.lookahead!==0||mt!==f&&V.status!==666){var I=V.strategy===2?function(b,G){for(var rt;;){if(b.lookahead===0&&(lt(b),b.lookahead===0)){if(G===f)return y;break}if(b.match_length=0,rt=a._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++,rt&&(Y(b,!1),b.strm.avail_out===0))return y}return b.insert=0,G===p?(Y(b,!0),b.strm.avail_out===0?H:K):b.last_lit&&(Y(b,!1),b.strm.avail_out===0)?y:W}(V,mt):V.strategy===3?function(b,G){for(var rt,nt,at,wt,yt=b.window;;){if(b.lookahead<=w){if(lt(b),b.lookahead<=w&&G===f)return y;if(b.lookahead===0)break}if(b.match_length=0,b.lookahead>=S&&0<b.strstart&&(nt=yt[at=b.strstart-1])===yt[++at]&&nt===yt[++at]&&nt===yt[++at]){wt=b.strstart+w;do;while(nt===yt[++at]&&nt===yt[++at]&&nt===yt[++at]&&nt===yt[++at]&&nt===yt[++at]&&nt===yt[++at]&&nt===yt[++at]&&nt===yt[++at]&&at<wt);b.match_length=w-(wt-at),b.match_length>b.lookahead&&(b.match_length=b.lookahead)}if(b.match_length>=S?(rt=a._tr_tally(b,1,b.match_length-S),b.lookahead-=b.match_length,b.strstart+=b.match_length,b.match_length=0):(rt=a._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++),rt&&(Y(b,!1),b.strm.avail_out===0))return y}return b.insert=0,G===p?(Y(b,!0),b.strm.avail_out===0?H:K):b.last_lit&&(Y(b,!1),b.strm.avail_out===0)?y:W}(V,mt):s[V.level].func(V,mt);if(I!==H&&I!==K||(V.status=666),I===y||I===H)return v.avail_out===0&&(V.last_flush=-1),h;if(I===W&&(mt===1?a._tr_align(V):mt!==5&&(a._tr_stored_block(V,0,0,!1),mt===3&&(ft(V.head),V.lookahead===0&&(V.strstart=0,V.block_start=0,V.insert=0))),j(v),v.avail_out===0))return V.last_flush=-1,h}return mt!==p?h:V.wrap<=0?1:(V.wrap===2?(_t(V,255&v.adler),_t(V,v.adler>>8&255),_t(V,v.adler>>16&255),_t(V,v.adler>>24&255),_t(V,255&v.total_in),_t(V,v.total_in>>8&255),_t(V,v.total_in>>16&255),_t(V,v.total_in>>24&255)):(X(V,v.adler>>>16),X(V,65535&v.adler)),j(v),0<V.wrap&&(V.wrap=-V.wrap),V.pending!==0?h:1)},r.deflateEnd=function(v){var mt;return v&&v.state?(mt=v.state.status)!==C&&mt!==69&&mt!==73&&mt!==91&&mt!==103&&mt!==z&&mt!==666?$(v,_):(v.state=null,mt===z?$(v,-3):h):_},r.deflateSetDictionary=function(v,mt){var st,V,O,J,ot,I,b,G,rt=mt.length;if(!v||!v.state||(J=(st=v.state).wrap)===2||J===1&&st.status!==C||st.lookahead)return _;for(J===1&&(v.adler=l(v.adler,mt,rt,0)),st.wrap=0,rt>=st.w_size&&(J===0&&(ft(st.head),st.strstart=0,st.block_start=0,st.insert=0),G=new o.Buf8(st.w_size),o.arraySet(G,mt,rt-st.w_size,st.w_size,0),mt=G,rt=st.w_size),ot=v.avail_in,I=v.next_in,b=v.input,v.avail_in=rt,v.next_in=0,v.input=mt,lt(st);st.lookahead>=S;){for(V=st.strstart,O=st.lookahead-(S-1);st.ins_h=(st.ins_h<<st.hash_shift^st.window[V+S-1])&st.hash_mask,st.prev[V&st.w_mask]=st.head[st.ins_h],st.head[st.ins_h]=V,V++,--O;);st.strstart=V,st.lookahead=S-1,lt(st)}return st.strstart+=st.lookahead,st.block_start=st.strstart,st.insert=st.lookahead,st.lookahead=0,st.match_length=st.prev_length=S-1,st.match_available=0,v.next_in=I,v.input=b,v.avail_in=ot,st.wrap=J,h},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,n,r){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,n,r){n.exports=function(s,o){var a,l,c,d,f,p,h,_,g,m,u,x,E,M,R,P,L,N,S,w,B,C,z,y,W;a=s.state,l=s.next_in,y=s.input,c=l+(s.avail_in-5),d=s.next_out,W=s.output,f=d-(o-s.avail_out),p=d+(s.avail_out-257),h=a.dmax,_=a.wsize,g=a.whave,m=a.wnext,u=a.window,x=a.hold,E=a.bits,M=a.lencode,R=a.distcode,P=(1<<a.lenbits)-1,L=(1<<a.distbits)-1;t:do{E<15&&(x+=y[l++]<<E,E+=8,x+=y[l++]<<E,E+=8),N=M[x&P];e:for(;;){if(x>>>=S=N>>>24,E-=S,(S=N>>>16&255)===0)W[d++]=65535&N;else{if(!(16&S)){if(!(64&S)){N=M[(65535&N)+(x&(1<<S)-1)];continue e}if(32&S){a.mode=12;break t}s.msg="invalid literal/length code",a.mode=30;break t}w=65535&N,(S&=15)&&(E<S&&(x+=y[l++]<<E,E+=8),w+=x&(1<<S)-1,x>>>=S,E-=S),E<15&&(x+=y[l++]<<E,E+=8,x+=y[l++]<<E,E+=8),N=R[x&L];n:for(;;){if(x>>>=S=N>>>24,E-=S,!(16&(S=N>>>16&255))){if(!(64&S)){N=R[(65535&N)+(x&(1<<S)-1)];continue n}s.msg="invalid distance code",a.mode=30;break t}if(B=65535&N,E<(S&=15)&&(x+=y[l++]<<E,(E+=8)<S&&(x+=y[l++]<<E,E+=8)),h<(B+=x&(1<<S)-1)){s.msg="invalid distance too far back",a.mode=30;break t}if(x>>>=S,E-=S,(S=d-f)<B){if(g<(S=B-S)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break t}if(z=u,(C=0)===m){if(C+=_-S,S<w){for(w-=S;W[d++]=u[C++],--S;);C=d-B,z=W}}else if(m<S){if(C+=_+m-S,(S-=m)<w){for(w-=S;W[d++]=u[C++],--S;);if(C=0,m<w){for(w-=S=m;W[d++]=u[C++],--S;);C=d-B,z=W}}}else if(C+=m-S,S<w){for(w-=S;W[d++]=u[C++],--S;);C=d-B,z=W}for(;2<w;)W[d++]=z[C++],W[d++]=z[C++],W[d++]=z[C++],w-=3;w&&(W[d++]=z[C++],1<w&&(W[d++]=z[C++]))}else{for(C=d-B;W[d++]=W[C++],W[d++]=W[C++],W[d++]=W[C++],2<(w-=3););w&&(W[d++]=W[C++],1<w&&(W[d++]=W[C++]))}break}}break}}while(l<c&&d<p);l-=w=E>>3,x&=(1<<(E-=w<<3))-1,s.next_in=l,s.next_out=d,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=d<p?p-d+257:257-(d-p),a.hold=x,a.bits=E}},{}],49:[function(e,n,r){var s=e("../utils/common"),o=e("./adler32"),a=e("./crc32"),l=e("./inffast"),c=e("./inftrees"),d=1,f=2,p=0,h=-2,_=1,g=852,m=592;function u(C){return(C>>>24&255)+(C>>>8&65280)+((65280&C)<<8)+((255&C)<<24)}function x(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function E(C){var z;return C&&C.state?(z=C.state,C.total_in=C.total_out=z.total=0,C.msg="",z.wrap&&(C.adler=1&z.wrap),z.mode=_,z.last=0,z.havedict=0,z.dmax=32768,z.head=null,z.hold=0,z.bits=0,z.lencode=z.lendyn=new s.Buf32(g),z.distcode=z.distdyn=new s.Buf32(m),z.sane=1,z.back=-1,p):h}function M(C){var z;return C&&C.state?((z=C.state).wsize=0,z.whave=0,z.wnext=0,E(C)):h}function R(C,z){var y,W;return C&&C.state?(W=C.state,z<0?(y=0,z=-z):(y=1+(z>>4),z<48&&(z&=15)),z&&(z<8||15<z)?h:(W.window!==null&&W.wbits!==z&&(W.window=null),W.wrap=y,W.wbits=z,M(C))):h}function P(C,z){var y,W;return C?(W=new x,(C.state=W).window=null,(y=R(C,z))!==p&&(C.state=null),y):h}var L,N,S=!0;function w(C){if(S){var z;for(L=new s.Buf32(512),N=new s.Buf32(32),z=0;z<144;)C.lens[z++]=8;for(;z<256;)C.lens[z++]=9;for(;z<280;)C.lens[z++]=7;for(;z<288;)C.lens[z++]=8;for(c(d,C.lens,0,288,L,0,C.work,{bits:9}),z=0;z<32;)C.lens[z++]=5;c(f,C.lens,0,32,N,0,C.work,{bits:5}),S=!1}C.lencode=L,C.lenbits=9,C.distcode=N,C.distbits=5}function B(C,z,y,W){var H,K=C.state;return K.window===null&&(K.wsize=1<<K.wbits,K.wnext=0,K.whave=0,K.window=new s.Buf8(K.wsize)),W>=K.wsize?(s.arraySet(K.window,z,y-K.wsize,K.wsize,0),K.wnext=0,K.whave=K.wsize):(W<(H=K.wsize-K.wnext)&&(H=W),s.arraySet(K.window,z,y-W,H,K.wnext),(W-=H)?(s.arraySet(K.window,z,y-W,W,0),K.wnext=W,K.whave=K.wsize):(K.wnext+=H,K.wnext===K.wsize&&(K.wnext=0),K.whave<K.wsize&&(K.whave+=H))),0}r.inflateReset=M,r.inflateReset2=R,r.inflateResetKeep=E,r.inflateInit=function(C){return P(C,15)},r.inflateInit2=P,r.inflate=function(C,z){var y,W,H,K,$,Q,ft,j,Y,_t,X,q,lt,dt,xt,Et,kt,Jt,Qt,de,v,mt,st,V,O=0,J=new s.Buf8(4),ot=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!C||!C.state||!C.output||!C.input&&C.avail_in!==0)return h;(y=C.state).mode===12&&(y.mode=13),$=C.next_out,H=C.output,ft=C.avail_out,K=C.next_in,W=C.input,Q=C.avail_in,j=y.hold,Y=y.bits,_t=Q,X=ft,mt=p;t:for(;;)switch(y.mode){case _:if(y.wrap===0){y.mode=13;break}for(;Y<16;){if(Q===0)break t;Q--,j+=W[K++]<<Y,Y+=8}if(2&y.wrap&&j===35615){J[y.check=0]=255&j,J[1]=j>>>8&255,y.check=a(y.check,J,2,0),Y=j=0,y.mode=2;break}if(y.flags=0,y.head&&(y.head.done=!1),!(1&y.wrap)||(((255&j)<<8)+(j>>8))%31){C.msg="incorrect header check",y.mode=30;break}if((15&j)!=8){C.msg="unknown compression method",y.mode=30;break}if(Y-=4,v=8+(15&(j>>>=4)),y.wbits===0)y.wbits=v;else if(v>y.wbits){C.msg="invalid window size",y.mode=30;break}y.dmax=1<<v,C.adler=y.check=1,y.mode=512&j?10:12,Y=j=0;break;case 2:for(;Y<16;){if(Q===0)break t;Q--,j+=W[K++]<<Y,Y+=8}if(y.flags=j,(255&y.flags)!=8){C.msg="unknown compression method",y.mode=30;break}if(57344&y.flags){C.msg="unknown header flags set",y.mode=30;break}y.head&&(y.head.text=j>>8&1),512&y.flags&&(J[0]=255&j,J[1]=j>>>8&255,y.check=a(y.check,J,2,0)),Y=j=0,y.mode=3;case 3:for(;Y<32;){if(Q===0)break t;Q--,j+=W[K++]<<Y,Y+=8}y.head&&(y.head.time=j),512&y.flags&&(J[0]=255&j,J[1]=j>>>8&255,J[2]=j>>>16&255,J[3]=j>>>24&255,y.check=a(y.check,J,4,0)),Y=j=0,y.mode=4;case 4:for(;Y<16;){if(Q===0)break t;Q--,j+=W[K++]<<Y,Y+=8}y.head&&(y.head.xflags=255&j,y.head.os=j>>8),512&y.flags&&(J[0]=255&j,J[1]=j>>>8&255,y.check=a(y.check,J,2,0)),Y=j=0,y.mode=5;case 5:if(1024&y.flags){for(;Y<16;){if(Q===0)break t;Q--,j+=W[K++]<<Y,Y+=8}y.length=j,y.head&&(y.head.extra_len=j),512&y.flags&&(J[0]=255&j,J[1]=j>>>8&255,y.check=a(y.check,J,2,0)),Y=j=0}else y.head&&(y.head.extra=null);y.mode=6;case 6:if(1024&y.flags&&(Q<(q=y.length)&&(q=Q),q&&(y.head&&(v=y.head.extra_len-y.length,y.head.extra||(y.head.extra=new Array(y.head.extra_len)),s.arraySet(y.head.extra,W,K,q,v)),512&y.flags&&(y.check=a(y.check,W,q,K)),Q-=q,K+=q,y.length-=q),y.length))break t;y.length=0,y.mode=7;case 7:if(2048&y.flags){if(Q===0)break t;for(q=0;v=W[K+q++],y.head&&v&&y.length<65536&&(y.head.name+=String.fromCharCode(v)),v&&q<Q;);if(512&y.flags&&(y.check=a(y.check,W,q,K)),Q-=q,K+=q,v)break t}else y.head&&(y.head.name=null);y.length=0,y.mode=8;case 8:if(4096&y.flags){if(Q===0)break t;for(q=0;v=W[K+q++],y.head&&v&&y.length<65536&&(y.head.comment+=String.fromCharCode(v)),v&&q<Q;);if(512&y.flags&&(y.check=a(y.check,W,q,K)),Q-=q,K+=q,v)break t}else y.head&&(y.head.comment=null);y.mode=9;case 9:if(512&y.flags){for(;Y<16;){if(Q===0)break t;Q--,j+=W[K++]<<Y,Y+=8}if(j!==(65535&y.check)){C.msg="header crc mismatch",y.mode=30;break}Y=j=0}y.head&&(y.head.hcrc=y.flags>>9&1,y.head.done=!0),C.adler=y.check=0,y.mode=12;break;case 10:for(;Y<32;){if(Q===0)break t;Q--,j+=W[K++]<<Y,Y+=8}C.adler=y.check=u(j),Y=j=0,y.mode=11;case 11:if(y.havedict===0)return C.next_out=$,C.avail_out=ft,C.next_in=K,C.avail_in=Q,y.hold=j,y.bits=Y,2;C.adler=y.check=1,y.mode=12;case 12:if(z===5||z===6)break t;case 13:if(y.last){j>>>=7&Y,Y-=7&Y,y.mode=27;break}for(;Y<3;){if(Q===0)break t;Q--,j+=W[K++]<<Y,Y+=8}switch(y.last=1&j,Y-=1,3&(j>>>=1)){case 0:y.mode=14;break;case 1:if(w(y),y.mode=20,z!==6)break;j>>>=2,Y-=2;break t;case 2:y.mode=17;break;case 3:C.msg="invalid block type",y.mode=30}j>>>=2,Y-=2;break;case 14:for(j>>>=7&Y,Y-=7&Y;Y<32;){if(Q===0)break t;Q--,j+=W[K++]<<Y,Y+=8}if((65535&j)!=(j>>>16^65535)){C.msg="invalid stored block lengths",y.mode=30;break}if(y.length=65535&j,Y=j=0,y.mode=15,z===6)break t;case 15:y.mode=16;case 16:if(q=y.length){if(Q<q&&(q=Q),ft<q&&(q=ft),q===0)break t;s.arraySet(H,W,K,q,$),Q-=q,K+=q,ft-=q,$+=q,y.length-=q;break}y.mode=12;break;case 17:for(;Y<14;){if(Q===0)break t;Q--,j+=W[K++]<<Y,Y+=8}if(y.nlen=257+(31&j),j>>>=5,Y-=5,y.ndist=1+(31&j),j>>>=5,Y-=5,y.ncode=4+(15&j),j>>>=4,Y-=4,286<y.nlen||30<y.ndist){C.msg="too many length or distance symbols",y.mode=30;break}y.have=0,y.mode=18;case 18:for(;y.have<y.ncode;){for(;Y<3;){if(Q===0)break t;Q--,j+=W[K++]<<Y,Y+=8}y.lens[ot[y.have++]]=7&j,j>>>=3,Y-=3}for(;y.have<19;)y.lens[ot[y.have++]]=0;if(y.lencode=y.lendyn,y.lenbits=7,st={bits:y.lenbits},mt=c(0,y.lens,0,19,y.lencode,0,y.work,st),y.lenbits=st.bits,mt){C.msg="invalid code lengths set",y.mode=30;break}y.have=0,y.mode=19;case 19:for(;y.have<y.nlen+y.ndist;){for(;Et=(O=y.lencode[j&(1<<y.lenbits)-1])>>>16&255,kt=65535&O,!((xt=O>>>24)<=Y);){if(Q===0)break t;Q--,j+=W[K++]<<Y,Y+=8}if(kt<16)j>>>=xt,Y-=xt,y.lens[y.have++]=kt;else{if(kt===16){for(V=xt+2;Y<V;){if(Q===0)break t;Q--,j+=W[K++]<<Y,Y+=8}if(j>>>=xt,Y-=xt,y.have===0){C.msg="invalid bit length repeat",y.mode=30;break}v=y.lens[y.have-1],q=3+(3&j),j>>>=2,Y-=2}else if(kt===17){for(V=xt+3;Y<V;){if(Q===0)break t;Q--,j+=W[K++]<<Y,Y+=8}Y-=xt,v=0,q=3+(7&(j>>>=xt)),j>>>=3,Y-=3}else{for(V=xt+7;Y<V;){if(Q===0)break t;Q--,j+=W[K++]<<Y,Y+=8}Y-=xt,v=0,q=11+(127&(j>>>=xt)),j>>>=7,Y-=7}if(y.have+q>y.nlen+y.ndist){C.msg="invalid bit length repeat",y.mode=30;break}for(;q--;)y.lens[y.have++]=v}}if(y.mode===30)break;if(y.lens[256]===0){C.msg="invalid code -- missing end-of-block",y.mode=30;break}if(y.lenbits=9,st={bits:y.lenbits},mt=c(d,y.lens,0,y.nlen,y.lencode,0,y.work,st),y.lenbits=st.bits,mt){C.msg="invalid literal/lengths set",y.mode=30;break}if(y.distbits=6,y.distcode=y.distdyn,st={bits:y.distbits},mt=c(f,y.lens,y.nlen,y.ndist,y.distcode,0,y.work,st),y.distbits=st.bits,mt){C.msg="invalid distances set",y.mode=30;break}if(y.mode=20,z===6)break t;case 20:y.mode=21;case 21:if(6<=Q&&258<=ft){C.next_out=$,C.avail_out=ft,C.next_in=K,C.avail_in=Q,y.hold=j,y.bits=Y,l(C,X),$=C.next_out,H=C.output,ft=C.avail_out,K=C.next_in,W=C.input,Q=C.avail_in,j=y.hold,Y=y.bits,y.mode===12&&(y.back=-1);break}for(y.back=0;Et=(O=y.lencode[j&(1<<y.lenbits)-1])>>>16&255,kt=65535&O,!((xt=O>>>24)<=Y);){if(Q===0)break t;Q--,j+=W[K++]<<Y,Y+=8}if(Et&&!(240&Et)){for(Jt=xt,Qt=Et,de=kt;Et=(O=y.lencode[de+((j&(1<<Jt+Qt)-1)>>Jt)])>>>16&255,kt=65535&O,!(Jt+(xt=O>>>24)<=Y);){if(Q===0)break t;Q--,j+=W[K++]<<Y,Y+=8}j>>>=Jt,Y-=Jt,y.back+=Jt}if(j>>>=xt,Y-=xt,y.back+=xt,y.length=kt,Et===0){y.mode=26;break}if(32&Et){y.back=-1,y.mode=12;break}if(64&Et){C.msg="invalid literal/length code",y.mode=30;break}y.extra=15&Et,y.mode=22;case 22:if(y.extra){for(V=y.extra;Y<V;){if(Q===0)break t;Q--,j+=W[K++]<<Y,Y+=8}y.length+=j&(1<<y.extra)-1,j>>>=y.extra,Y-=y.extra,y.back+=y.extra}y.was=y.length,y.mode=23;case 23:for(;Et=(O=y.distcode[j&(1<<y.distbits)-1])>>>16&255,kt=65535&O,!((xt=O>>>24)<=Y);){if(Q===0)break t;Q--,j+=W[K++]<<Y,Y+=8}if(!(240&Et)){for(Jt=xt,Qt=Et,de=kt;Et=(O=y.distcode[de+((j&(1<<Jt+Qt)-1)>>Jt)])>>>16&255,kt=65535&O,!(Jt+(xt=O>>>24)<=Y);){if(Q===0)break t;Q--,j+=W[K++]<<Y,Y+=8}j>>>=Jt,Y-=Jt,y.back+=Jt}if(j>>>=xt,Y-=xt,y.back+=xt,64&Et){C.msg="invalid distance code",y.mode=30;break}y.offset=kt,y.extra=15&Et,y.mode=24;case 24:if(y.extra){for(V=y.extra;Y<V;){if(Q===0)break t;Q--,j+=W[K++]<<Y,Y+=8}y.offset+=j&(1<<y.extra)-1,j>>>=y.extra,Y-=y.extra,y.back+=y.extra}if(y.offset>y.dmax){C.msg="invalid distance too far back",y.mode=30;break}y.mode=25;case 25:if(ft===0)break t;if(q=X-ft,y.offset>q){if((q=y.offset-q)>y.whave&&y.sane){C.msg="invalid distance too far back",y.mode=30;break}lt=q>y.wnext?(q-=y.wnext,y.wsize-q):y.wnext-q,q>y.length&&(q=y.length),dt=y.window}else dt=H,lt=$-y.offset,q=y.length;for(ft<q&&(q=ft),ft-=q,y.length-=q;H[$++]=dt[lt++],--q;);y.length===0&&(y.mode=21);break;case 26:if(ft===0)break t;H[$++]=y.length,ft--,y.mode=21;break;case 27:if(y.wrap){for(;Y<32;){if(Q===0)break t;Q--,j|=W[K++]<<Y,Y+=8}if(X-=ft,C.total_out+=X,y.total+=X,X&&(C.adler=y.check=y.flags?a(y.check,H,X,$-X):o(y.check,H,X,$-X)),X=ft,(y.flags?j:u(j))!==y.check){C.msg="incorrect data check",y.mode=30;break}Y=j=0}y.mode=28;case 28:if(y.wrap&&y.flags){for(;Y<32;){if(Q===0)break t;Q--,j+=W[K++]<<Y,Y+=8}if(j!==(4294967295&y.total)){C.msg="incorrect length check",y.mode=30;break}Y=j=0}y.mode=29;case 29:mt=1;break t;case 30:mt=-3;break t;case 31:return-4;case 32:default:return h}return C.next_out=$,C.avail_out=ft,C.next_in=K,C.avail_in=Q,y.hold=j,y.bits=Y,(y.wsize||X!==C.avail_out&&y.mode<30&&(y.mode<27||z!==4))&&B(C,C.output,C.next_out,X-C.avail_out)?(y.mode=31,-4):(_t-=C.avail_in,X-=C.avail_out,C.total_in+=_t,C.total_out+=X,y.total+=X,y.wrap&&X&&(C.adler=y.check=y.flags?a(y.check,H,X,C.next_out-X):o(y.check,H,X,C.next_out-X)),C.data_type=y.bits+(y.last?64:0)+(y.mode===12?128:0)+(y.mode===20||y.mode===15?256:0),(_t==0&&X===0||z===4)&&mt===p&&(mt=-5),mt)},r.inflateEnd=function(C){if(!C||!C.state)return h;var z=C.state;return z.window&&(z.window=null),C.state=null,p},r.inflateGetHeader=function(C,z){var y;return C&&C.state&&2&(y=C.state).wrap?((y.head=z).done=!1,p):h},r.inflateSetDictionary=function(C,z){var y,W=z.length;return C&&C.state?(y=C.state).wrap!==0&&y.mode!==11?h:y.mode===11&&o(1,z,W,0)!==y.check?-3:B(C,z,W,W)?(y.mode=31,-4):(y.havedict=1,p):h},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,n,r){var s=e("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(d,f,p,h,_,g,m,u){var x,E,M,R,P,L,N,S,w,B=u.bits,C=0,z=0,y=0,W=0,H=0,K=0,$=0,Q=0,ft=0,j=0,Y=null,_t=0,X=new s.Buf16(16),q=new s.Buf16(16),lt=null,dt=0;for(C=0;C<=15;C++)X[C]=0;for(z=0;z<h;z++)X[f[p+z]]++;for(H=B,W=15;1<=W&&X[W]===0;W--);if(W<H&&(H=W),W===0)return _[g++]=20971520,_[g++]=20971520,u.bits=1,0;for(y=1;y<W&&X[y]===0;y++);for(H<y&&(H=y),C=Q=1;C<=15;C++)if(Q<<=1,(Q-=X[C])<0)return-1;if(0<Q&&(d===0||W!==1))return-1;for(q[1]=0,C=1;C<15;C++)q[C+1]=q[C]+X[C];for(z=0;z<h;z++)f[p+z]!==0&&(m[q[f[p+z]]++]=z);if(L=d===0?(Y=lt=m,19):d===1?(Y=o,_t-=257,lt=a,dt-=257,256):(Y=l,lt=c,-1),C=y,P=g,$=z=j=0,M=-1,R=(ft=1<<(K=H))-1,d===1&&852<ft||d===2&&592<ft)return 1;for(;;){for(N=C-$,w=m[z]<L?(S=0,m[z]):m[z]>L?(S=lt[dt+m[z]],Y[_t+m[z]]):(S=96,0),x=1<<C-$,y=E=1<<K;_[P+(j>>$)+(E-=x)]=N<<24|S<<16|w|0,E!==0;);for(x=1<<C-1;j&x;)x>>=1;if(x!==0?(j&=x-1,j+=x):j=0,z++,--X[C]==0){if(C===W)break;C=f[p+m[z]]}if(H<C&&(j&R)!==M){for($===0&&($=H),P+=y,Q=1<<(K=C-$);K+$<W&&!((Q-=X[K+$])<=0);)K++,Q<<=1;if(ft+=1<<K,d===1&&852<ft||d===2&&592<ft)return 1;_[M=j&R]=H<<24|K<<16|P-g|0}}return j!==0&&(_[P+j]=C-$<<24|64<<16|0),u.bits=H,0}},{"../utils/common":41}],51:[function(e,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,n,r){var s=e("../utils/common"),o=0,a=1;function l(O){for(var J=O.length;0<=--J;)O[J]=0}var c=0,d=29,f=256,p=f+1+d,h=30,_=19,g=2*p+1,m=15,u=16,x=7,E=256,M=16,R=17,P=18,L=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],N=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],S=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],B=new Array(2*(p+2));l(B);var C=new Array(2*h);l(C);var z=new Array(512);l(z);var y=new Array(256);l(y);var W=new Array(d);l(W);var H,K,$,Q=new Array(h);function ft(O,J,ot,I,b){this.static_tree=O,this.extra_bits=J,this.extra_base=ot,this.elems=I,this.max_length=b,this.has_stree=O&&O.length}function j(O,J){this.dyn_tree=O,this.max_code=0,this.stat_desc=J}function Y(O){return O<256?z[O]:z[256+(O>>>7)]}function _t(O,J){O.pending_buf[O.pending++]=255&J,O.pending_buf[O.pending++]=J>>>8&255}function X(O,J,ot){O.bi_valid>u-ot?(O.bi_buf|=J<<O.bi_valid&65535,_t(O,O.bi_buf),O.bi_buf=J>>u-O.bi_valid,O.bi_valid+=ot-u):(O.bi_buf|=J<<O.bi_valid&65535,O.bi_valid+=ot)}function q(O,J,ot){X(O,ot[2*J],ot[2*J+1])}function lt(O,J){for(var ot=0;ot|=1&O,O>>>=1,ot<<=1,0<--J;);return ot>>>1}function dt(O,J,ot){var I,b,G=new Array(m+1),rt=0;for(I=1;I<=m;I++)G[I]=rt=rt+ot[I-1]<<1;for(b=0;b<=J;b++){var nt=O[2*b+1];nt!==0&&(O[2*b]=lt(G[nt]++,nt))}}function xt(O){var J;for(J=0;J<p;J++)O.dyn_ltree[2*J]=0;for(J=0;J<h;J++)O.dyn_dtree[2*J]=0;for(J=0;J<_;J++)O.bl_tree[2*J]=0;O.dyn_ltree[2*E]=1,O.opt_len=O.static_len=0,O.last_lit=O.matches=0}function Et(O){8<O.bi_valid?_t(O,O.bi_buf):0<O.bi_valid&&(O.pending_buf[O.pending++]=O.bi_buf),O.bi_buf=0,O.bi_valid=0}function kt(O,J,ot,I){var b=2*J,G=2*ot;return O[b]<O[G]||O[b]===O[G]&&I[J]<=I[ot]}function Jt(O,J,ot){for(var I=O.heap[ot],b=ot<<1;b<=O.heap_len&&(b<O.heap_len&&kt(J,O.heap[b+1],O.heap[b],O.depth)&&b++,!kt(J,I,O.heap[b],O.depth));)O.heap[ot]=O.heap[b],ot=b,b<<=1;O.heap[ot]=I}function Qt(O,J,ot){var I,b,G,rt,nt=0;if(O.last_lit!==0)for(;I=O.pending_buf[O.d_buf+2*nt]<<8|O.pending_buf[O.d_buf+2*nt+1],b=O.pending_buf[O.l_buf+nt],nt++,I===0?q(O,b,J):(q(O,(G=y[b])+f+1,J),(rt=L[G])!==0&&X(O,b-=W[G],rt),q(O,G=Y(--I),ot),(rt=N[G])!==0&&X(O,I-=Q[G],rt)),nt<O.last_lit;);q(O,E,J)}function de(O,J){var ot,I,b,G=J.dyn_tree,rt=J.stat_desc.static_tree,nt=J.stat_desc.has_stree,at=J.stat_desc.elems,wt=-1;for(O.heap_len=0,O.heap_max=g,ot=0;ot<at;ot++)G[2*ot]!==0?(O.heap[++O.heap_len]=wt=ot,O.depth[ot]=0):G[2*ot+1]=0;for(;O.heap_len<2;)G[2*(b=O.heap[++O.heap_len]=wt<2?++wt:0)]=1,O.depth[b]=0,O.opt_len--,nt&&(O.static_len-=rt[2*b+1]);for(J.max_code=wt,ot=O.heap_len>>1;1<=ot;ot--)Jt(O,G,ot);for(b=at;ot=O.heap[1],O.heap[1]=O.heap[O.heap_len--],Jt(O,G,1),I=O.heap[1],O.heap[--O.heap_max]=ot,O.heap[--O.heap_max]=I,G[2*b]=G[2*ot]+G[2*I],O.depth[b]=(O.depth[ot]>=O.depth[I]?O.depth[ot]:O.depth[I])+1,G[2*ot+1]=G[2*I+1]=b,O.heap[1]=b++,Jt(O,G,1),2<=O.heap_len;);O.heap[--O.heap_max]=O.heap[1],function(yt,At){var oe,bt,Ut,It,Yt,Ft,te=At.dyn_tree,ee=At.max_code,xe=At.stat_desc.static_tree,et=At.stat_desc.has_stree,Ct=At.stat_desc.extra_bits,pt=At.stat_desc.extra_base,vt=At.stat_desc.max_length,Rt=0;for(It=0;It<=m;It++)yt.bl_count[It]=0;for(te[2*yt.heap[yt.heap_max]+1]=0,oe=yt.heap_max+1;oe<g;oe++)vt<(It=te[2*te[2*(bt=yt.heap[oe])+1]+1]+1)&&(It=vt,Rt++),te[2*bt+1]=It,ee<bt||(yt.bl_count[It]++,Yt=0,pt<=bt&&(Yt=Ct[bt-pt]),Ft=te[2*bt],yt.opt_len+=Ft*(It+Yt),et&&(yt.static_len+=Ft*(xe[2*bt+1]+Yt)));if(Rt!==0){do{for(It=vt-1;yt.bl_count[It]===0;)It--;yt.bl_count[It]--,yt.bl_count[It+1]+=2,yt.bl_count[vt]--,Rt-=2}while(0<Rt);for(It=vt;It!==0;It--)for(bt=yt.bl_count[It];bt!==0;)ee<(Ut=yt.heap[--oe])||(te[2*Ut+1]!==It&&(yt.opt_len+=(It-te[2*Ut+1])*te[2*Ut],te[2*Ut+1]=It),bt--)}}(O,J),dt(G,wt,O.bl_count)}function v(O,J,ot){var I,b,G=-1,rt=J[1],nt=0,at=7,wt=4;for(rt===0&&(at=138,wt=3),J[2*(ot+1)+1]=65535,I=0;I<=ot;I++)b=rt,rt=J[2*(I+1)+1],++nt<at&&b===rt||(nt<wt?O.bl_tree[2*b]+=nt:b!==0?(b!==G&&O.bl_tree[2*b]++,O.bl_tree[2*M]++):nt<=10?O.bl_tree[2*R]++:O.bl_tree[2*P]++,G=b,wt=(nt=0)===rt?(at=138,3):b===rt?(at=6,3):(at=7,4))}function mt(O,J,ot){var I,b,G=-1,rt=J[1],nt=0,at=7,wt=4;for(rt===0&&(at=138,wt=3),I=0;I<=ot;I++)if(b=rt,rt=J[2*(I+1)+1],!(++nt<at&&b===rt)){if(nt<wt)for(;q(O,b,O.bl_tree),--nt!=0;);else b!==0?(b!==G&&(q(O,b,O.bl_tree),nt--),q(O,M,O.bl_tree),X(O,nt-3,2)):nt<=10?(q(O,R,O.bl_tree),X(O,nt-3,3)):(q(O,P,O.bl_tree),X(O,nt-11,7));G=b,wt=(nt=0)===rt?(at=138,3):b===rt?(at=6,3):(at=7,4)}}l(Q);var st=!1;function V(O,J,ot,I){X(O,(c<<1)+(I?1:0),3),function(b,G,rt,nt){Et(b),_t(b,rt),_t(b,~rt),s.arraySet(b.pending_buf,b.window,G,rt,b.pending),b.pending+=rt}(O,J,ot)}r._tr_init=function(O){st||(function(){var J,ot,I,b,G,rt=new Array(m+1);for(b=I=0;b<d-1;b++)for(W[b]=I,J=0;J<1<<L[b];J++)y[I++]=b;for(y[I-1]=b,b=G=0;b<16;b++)for(Q[b]=G,J=0;J<1<<N[b];J++)z[G++]=b;for(G>>=7;b<h;b++)for(Q[b]=G<<7,J=0;J<1<<N[b]-7;J++)z[256+G++]=b;for(ot=0;ot<=m;ot++)rt[ot]=0;for(J=0;J<=143;)B[2*J+1]=8,J++,rt[8]++;for(;J<=255;)B[2*J+1]=9,J++,rt[9]++;for(;J<=279;)B[2*J+1]=7,J++,rt[7]++;for(;J<=287;)B[2*J+1]=8,J++,rt[8]++;for(dt(B,p+1,rt),J=0;J<h;J++)C[2*J+1]=5,C[2*J]=lt(J,5);H=new ft(B,L,f+1,p,m),K=new ft(C,N,0,h,m),$=new ft(new Array(0),S,0,_,x)}(),st=!0),O.l_desc=new j(O.dyn_ltree,H),O.d_desc=new j(O.dyn_dtree,K),O.bl_desc=new j(O.bl_tree,$),O.bi_buf=0,O.bi_valid=0,xt(O)},r._tr_stored_block=V,r._tr_flush_block=function(O,J,ot,I){var b,G,rt=0;0<O.level?(O.strm.data_type===2&&(O.strm.data_type=function(nt){var at,wt=4093624447;for(at=0;at<=31;at++,wt>>>=1)if(1&wt&&nt.dyn_ltree[2*at]!==0)return o;if(nt.dyn_ltree[18]!==0||nt.dyn_ltree[20]!==0||nt.dyn_ltree[26]!==0)return a;for(at=32;at<f;at++)if(nt.dyn_ltree[2*at]!==0)return a;return o}(O)),de(O,O.l_desc),de(O,O.d_desc),rt=function(nt){var at;for(v(nt,nt.dyn_ltree,nt.l_desc.max_code),v(nt,nt.dyn_dtree,nt.d_desc.max_code),de(nt,nt.bl_desc),at=_-1;3<=at&&nt.bl_tree[2*w[at]+1]===0;at--);return nt.opt_len+=3*(at+1)+5+5+4,at}(O),b=O.opt_len+3+7>>>3,(G=O.static_len+3+7>>>3)<=b&&(b=G)):b=G=ot+5,ot+4<=b&&J!==-1?V(O,J,ot,I):O.strategy===4||G===b?(X(O,2+(I?1:0),3),Qt(O,B,C)):(X(O,4+(I?1:0),3),function(nt,at,wt,yt){var At;for(X(nt,at-257,5),X(nt,wt-1,5),X(nt,yt-4,4),At=0;At<yt;At++)X(nt,nt.bl_tree[2*w[At]+1],3);mt(nt,nt.dyn_ltree,at-1),mt(nt,nt.dyn_dtree,wt-1)}(O,O.l_desc.max_code+1,O.d_desc.max_code+1,rt+1),Qt(O,O.dyn_ltree,O.dyn_dtree)),xt(O),I&&Et(O)},r._tr_tally=function(O,J,ot){return O.pending_buf[O.d_buf+2*O.last_lit]=J>>>8&255,O.pending_buf[O.d_buf+2*O.last_lit+1]=255&J,O.pending_buf[O.l_buf+O.last_lit]=255&ot,O.last_lit++,J===0?O.dyn_ltree[2*ot]++:(O.matches++,J--,O.dyn_ltree[2*(y[ot]+f+1)]++,O.dyn_dtree[2*Y(J)]++),O.last_lit===O.lit_bufsize-1},r._tr_align=function(O){X(O,2,3),q(O,E,B),function(J){J.bi_valid===16?(_t(J,J.bi_buf),J.bi_buf=0,J.bi_valid=0):8<=J.bi_valid&&(J.pending_buf[J.pending++]=255&J.bi_buf,J.bi_buf>>=8,J.bi_valid-=8)}(O)}},{"../utils/common":41}],53:[function(e,n,r){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,n,r){(function(s){(function(o,a){if(!o.setImmediate){var l,c,d,f,p=1,h={},_=!1,g=o.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(o);m=m&&m.setTimeout?m:o,l={}.toString.call(o.process)==="[object process]"?function(M){process.nextTick(function(){x(M)})}:function(){if(o.postMessage&&!o.importScripts){var M=!0,R=o.onmessage;return o.onmessage=function(){M=!1},o.postMessage("","*"),o.onmessage=R,M}}()?(f="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",E,!1):o.attachEvent("onmessage",E),function(M){o.postMessage(f+M,"*")}):o.MessageChannel?((d=new MessageChannel).port1.onmessage=function(M){x(M.data)},function(M){d.port2.postMessage(M)}):g&&"onreadystatechange"in g.createElement("script")?(c=g.documentElement,function(M){var R=g.createElement("script");R.onreadystatechange=function(){x(M),R.onreadystatechange=null,c.removeChild(R),R=null},c.appendChild(R)}):function(M){setTimeout(x,0,M)},m.setImmediate=function(M){typeof M!="function"&&(M=new Function(""+M));for(var R=new Array(arguments.length-1),P=0;P<R.length;P++)R[P]=arguments[P+1];var L={callback:M,args:R};return h[p]=L,l(p),p++},m.clearImmediate=u}function u(M){delete h[M]}function x(M){if(_)setTimeout(x,0,M);else{var R=h[M];if(R){_=!0;try{(function(P){var L=P.callback,N=P.args;switch(N.length){case 0:L();break;case 1:L(N[0]);break;case 2:L(N[0],N[1]);break;case 3:L(N[0],N[1],N[2]);break;default:L.apply(a,N)}})(R)}finally{u(M),_=!1}}}}function E(M){M.source===o&&typeof M.data=="string"&&M.data.indexOf(f)===0&&x(+M.data.slice(f.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof hs<"u"?hs:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})}(Aa)),Aa.exports}var A_=T_();const C_=w_(A_);async function hu(i,t,e){try{const n=await R_(i);return P_(n,t,e)}catch(n){return L_(n,`Error processing ZIP file at ${i}`),new Map}}async function R_(i){const t=await fetch(i);if(!t.ok)throw new Error(`Failed to load ZIP file: ${t.statusText}`);const e=await t.arrayBuffer();return C_.loadAsync(e)}async function P_(i,t,e){const n=new Map,r=Object.entries(i.files).filter(([s,o])=>o&&!o.dir&&s.endsWith(t));for(const[s,o]of r){const a=await o.async(e);n.set(s,a)}return n}function L_(i,t){i instanceof Error?console.error(`${t}: ${i.message}`):console.error(`${t}: ${JSON.stringify(i)}`)}async function I_(i,t){return hu(i,t,"text")}async function D_(i,t){return hu(i,t,"arraybuffer")}function N_(...i){const t=new Map;return i.forEach(e=>{e.forEach((n,r)=>{t.set(r,n)})}),t}async function du(i,t,e){const n=await Promise.all(t.map(r=>e(i,r)));return N_(...n)}async function U_(){return await du(uu,[".obj",".urdf"],I_)}async function F_(){return await du(uu,[".png",".STL"],D_)}async function O_(){return{textFiles:await U_(),binaryFiles:await F_()}}async function k_(){let i=null;try{i=await O_(),console.log("ZIP file loaded and extracted successfully.",i)}catch(t){console.error("Error during ZIP loading:",t)}return i||{textFiles:new Map,binaryFiles:new Map}}const B_=/^[og]\s*(.+)?/,z_=/^mtllib /,V_=/^usemtl /,H_=/^usemap /,ac=/\s+/,oc=new Z,Ca=new Z,lc=new Z,cc=new Z,on=new Z,fs=new re;function G_(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const r=this.normals,s=this.object.geometry.normals;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(t,e,n){const r=this.vertices,s=this.object.geometry.normals;oc.fromArray(r,t),Ca.fromArray(r,e),lc.fromArray(r,n),on.subVectors(lc,Ca),cc.subVectors(oc,Ca),on.cross(cc),on.normalize(),s.push(on.x,on.y,on.z),s.push(on.x,on.y,on.z),s.push(on.x,on.y,on.z)},addColor:function(t,e,n){const r=this.colors,s=this.object.geometry.colors;r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[n]!==void 0&&s.push(r[n+0],r[n+1],r[n+2])},addUV:function(t,e,n){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[t+0],r[t+1]),s.push(r[e+0],r[e+1]),s.push(r[n+0],r[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,r,s,o,a,l,c){const d=this.vertices.length;let f=this.parseVertexIndex(t,d),p=this.parseVertexIndex(e,d),h=this.parseVertexIndex(n,d);if(this.addVertex(f,p,h),this.addColor(f,p,h),a!==void 0&&a!==""){const _=this.normals.length;f=this.parseNormalIndex(a,_),p=this.parseNormalIndex(l,_),h=this.parseNormalIndex(c,_),this.addNormal(f,p,h)}else this.addFaceNormal(f,p,h);if(r!==void 0&&r!==""){const _=this.uvs.length;f=this.parseUVIndex(r,_),p=this.parseUVIndex(s,_),h=this.parseUVIndex(o,_),this.addUV(f,p,h),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,r=t.length;n<r;n++){const s=this.parseVertexIndex(t[n],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,r=this.uvs.length;for(let s=0,o=t.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(t[s],n));for(let s=0,o=e.length;s<o;s++)this.addUVLine(this.parseUVIndex(e[s],r))}};return i.startObject("",!1),i}class W_ extends Vn{constructor(t){super(t),this.materials=null}load(t,e,n,r){const s=this,o=new zs(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(t)}},n,r)}setMaterials(t){return this.materials=t,this}parse(t){const e=new G_;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let r=[];for(let a=0,l=n.length;a<l;a++){const c=n[a].trimStart();if(c.length===0)continue;const d=c.charAt(0);if(d!=="#")if(d==="v"){const f=c.split(ac);switch(f[0]){case"v":e.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7?(fs.setRGB(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6]),Pe),e.colors.push(fs.r,fs.g,fs.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":e.uvs.push(parseFloat(f[1]),parseFloat(f[2]));break}}else if(d==="f"){const p=c.slice(1).trim().split(ac),h=[];for(let g=0,m=p.length;g<m;g++){const u=p[g];if(u.length>0){const x=u.split("/");h.push(x)}}const _=h[0];for(let g=1,m=h.length-1;g<m;g++){const u=h[g],x=h[g+1];e.addFace(_[0],u[0],x[0],_[1],u[1],x[1],_[2],u[2],x[2])}}else if(d==="l"){const f=c.substring(1).trim().split(" ");let p=[];const h=[];if(c.indexOf("/")===-1)p=f;else for(let _=0,g=f.length;_<g;_++){const m=f[_].split("/");m[0]!==""&&p.push(m[0]),m[1]!==""&&h.push(m[1])}e.addLineGeometry(p,h)}else if(d==="p"){const p=c.slice(1).trim().split(" ");e.addPointGeometry(p)}else if((r=B_.exec(c))!==null){const f=(" "+r[0].slice(1).trim()).slice(1);e.startObject(f)}else if(V_.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(z_.test(c))e.materialLibraries.push(c.substring(7).trim());else if(H_.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(d==="s"){if(r=c.split(" "),r.length>1){const p=r[1].trim().toLowerCase();e.object.smooth=p!=="0"&&p!=="off"}else e.object.smooth=!0;const f=e.object.currentMaterial();f&&(f.smooth=e.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}e.finalize();const s=new gi;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=e.objects.length;a<l;a++){const c=e.objects[a],d=c.geometry,f=c.materials,p=d.type==="Line",h=d.type==="Points";let _=!1;if(d.vertices.length===0)continue;const g=new Ve;g.setAttribute("position",new be(d.vertices,3)),d.normals.length>0&&g.setAttribute("normal",new be(d.normals,3)),d.colors.length>0&&(_=!0,g.setAttribute("color",new be(d.colors,3))),d.hasUVIndices===!0&&g.setAttribute("uv",new be(d.uvs,2));const m=[];for(let x=0,E=f.length;x<E;x++){const M=f[x],R=M.name+"_"+M.smooth+"_"+_;let P=e.materials[R];if(this.materials!==null){if(P=this.materials.create(M.name),p&&P&&!(P instanceof Wi)){const L=new Wi;_n.prototype.copy.call(L,P),L.color.copy(P.color),P=L}else if(h&&P&&!(P instanceof yr)){const L=new yr({size:10,sizeAttenuation:!1});_n.prototype.copy.call(L,P),L.color.copy(P.color),L.map=P.map,P=L}}P===void 0&&(p?P=new Wi:h?P=new yr({size:1,sizeAttenuation:!1}):P=new Xi,P.name=M.name,P.flatShading=!M.smooth,P.vertexColors=_,e.materials[R]=P),m.push(P)}let u;if(m.length>1){for(let x=0,E=f.length;x<E;x++){const M=f[x];g.addGroup(M.groupStart,M.groupCount,x)}p?u=new _o(g,m):h?u=new Ea(g,m):u=new Te(g,m)}else p?u=new _o(g,m[0]):h?u=new Ea(g,m[0]):u=new Te(g,m[0]);u.name=c.name,s.add(u)}else if(e.vertices.length>0){const a=new yr({size:1,sizeAttenuation:!1}),l=new Ve;l.setAttribute("position",new be(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new be(e.colors,3)),a.vertexColors=!0);const c=new Ea(l,a);s.add(c)}return s}}function X_(i){i.traverse(t=>{if(t.isMesh){const e=t;e.material||(e.material=new ks({color:8947848}))}})}function j_(i,t){const e=i.textFiles.get(t);let n=null;return e&&(n=new W_().parse(e),X_(n)),n}function q_(i){let t=new Map;const e=[No.OpticalTable];for(const r of e){var n=j_(i,E_[r]);n&&t.set(r,n)}return t}class Y_ extends Vn{constructor(t){super(t)}load(t,e,n,r){const s=this,o=new zs(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(t)}},n,r)}parse(t){function e(c){const d=new DataView(c),f=32/8*3+32/8*3*3+16/8,p=d.getUint32(80,!0);if(80+32/8+p*f===d.byteLength)return!0;const _=[115,111,108,105,100];for(let g=0;g<5;g++)if(n(_,d,g))return!1;return!0}function n(c,d,f){for(let p=0,h=c.length;p<h;p++)if(c[p]!==d.getUint8(f+p))return!1;return!0}function r(c){const d=new DataView(c),f=d.getUint32(80,!0);let p,h,_,g=!1,m,u,x,E,M;for(let B=0;B<70;B++)d.getUint32(B,!1)==1129270351&&d.getUint8(B+4)==82&&d.getUint8(B+5)==61&&(g=!0,m=new Float32Array(f*3*3),u=d.getUint8(B+6)/255,x=d.getUint8(B+7)/255,E=d.getUint8(B+8)/255,M=d.getUint8(B+9)/255);const R=84,P=12*4+2,L=new Ve,N=new Float32Array(f*3*3),S=new Float32Array(f*3*3),w=new re;for(let B=0;B<f;B++){const C=R+B*P,z=d.getFloat32(C,!0),y=d.getFloat32(C+4,!0),W=d.getFloat32(C+8,!0);if(g){const H=d.getUint16(C+48,!0);H&32768?(p=u,h=x,_=E):(p=(H&31)/31,h=(H>>5&31)/31,_=(H>>10&31)/31)}for(let H=1;H<=3;H++){const K=C+H*12,$=B*3*3+(H-1)*3;N[$]=d.getFloat32(K,!0),N[$+1]=d.getFloat32(K+4,!0),N[$+2]=d.getFloat32(K+8,!0),S[$]=z,S[$+1]=y,S[$+2]=W,g&&(w.setRGB(p,h,_,Pe),m[$]=w.r,m[$+1]=w.g,m[$+2]=w.b)}}return L.setAttribute("position",new rn(N,3)),L.setAttribute("normal",new rn(S,3)),g&&(L.setAttribute("color",new rn(m,3)),L.hasColors=!0,L.alpha=M),L}function s(c){const d=new Ve,f=/solid([\s\S]*?)endsolid/g,p=/facet([\s\S]*?)endfacet/g,h=/solid\s(.+)/;let _=0;const g=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+g+g+g,"g"),u=new RegExp("normal"+g+g+g,"g"),x=[],E=[],M=[],R=new Z;let P,L=0,N=0,S=0;for(;(P=f.exec(c))!==null;){N=S;const w=P[0],B=(P=h.exec(w))!==null?P[1]:"";for(M.push(B);(P=p.exec(w))!==null;){let y=0,W=0;const H=P[0];for(;(P=u.exec(H))!==null;)R.x=parseFloat(P[1]),R.y=parseFloat(P[2]),R.z=parseFloat(P[3]),W++;for(;(P=m.exec(H))!==null;)x.push(parseFloat(P[1]),parseFloat(P[2]),parseFloat(P[3])),E.push(R.x,R.y,R.z),y++,S++;W!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+_),y!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+_),_++}const C=N,z=S-N;d.userData.groupNames=M,d.addGroup(C,z,L),L++}return d.setAttribute("position",new be(x,3)),d.setAttribute("normal",new be(E,3)),d}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const d=new Uint8Array(c.length);for(let f=0;f<c.length;f++)d[f]=c.charCodeAt(f)&255;return d.buffer||d}else return c}const l=a(t);return e(l)?r(l):s(o(t))}}class uc extends $g{constructor(t){super(t)}parse(t){function e(H){switch(H.image_type){case p:case g:if(H.colormap_length>256||H.colormap_size!==24||H.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case h:case _:case m:case u:if(H.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case f:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+H.image_type)}if(H.width<=0||H.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(H.pixel_size!==8&&H.pixel_size!==16&&H.pixel_size!==24&&H.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+H.pixel_size)}function n(H,K,$,Q,ft){let j,Y;const _t=$.pixel_size>>3,X=$.width*$.height*_t;if(K&&(Y=ft.subarray(Q,Q+=$.colormap_length*($.colormap_size>>3))),H){j=new Uint8Array(X);let q,lt,dt,xt=0;const Et=new Uint8Array(_t);for(;xt<X;)if(q=ft[Q++],lt=(q&127)+1,q&128){for(dt=0;dt<_t;++dt)Et[dt]=ft[Q++];for(dt=0;dt<lt;++dt)j.set(Et,xt+dt*_t);xt+=_t*lt}else{for(lt*=_t,dt=0;dt<lt;++dt)j[xt+dt]=ft[Q++];xt+=lt}}else j=ft.subarray(Q,Q+=K?$.width*$.height:X);return{pixel_data:j,palettes:Y}}function r(H,K,$,Q,ft,j,Y,_t,X){const q=X;let lt,dt=0,xt,Et;const kt=w.width;for(Et=K;Et!==Q;Et+=$)for(xt=ft;xt!==Y;xt+=j,dt++)lt=_t[dt],H[(xt+kt*Et)*4+3]=255,H[(xt+kt*Et)*4+2]=q[lt*3+0],H[(xt+kt*Et)*4+1]=q[lt*3+1],H[(xt+kt*Et)*4+0]=q[lt*3+2];return H}function s(H,K,$,Q,ft,j,Y,_t){let X,q=0,lt,dt;const xt=w.width;for(dt=K;dt!==Q;dt+=$)for(lt=ft;lt!==Y;lt+=j,q+=2)X=_t[q+0]+(_t[q+1]<<8),H[(lt+xt*dt)*4+0]=(X&31744)>>7,H[(lt+xt*dt)*4+1]=(X&992)>>2,H[(lt+xt*dt)*4+2]=(X&31)<<3,H[(lt+xt*dt)*4+3]=X&32768?0:255;return H}function o(H,K,$,Q,ft,j,Y,_t){let X=0,q,lt;const dt=w.width;for(lt=K;lt!==Q;lt+=$)for(q=ft;q!==Y;q+=j,X+=3)H[(q+dt*lt)*4+3]=255,H[(q+dt*lt)*4+2]=_t[X+0],H[(q+dt*lt)*4+1]=_t[X+1],H[(q+dt*lt)*4+0]=_t[X+2];return H}function a(H,K,$,Q,ft,j,Y,_t){let X=0,q,lt;const dt=w.width;for(lt=K;lt!==Q;lt+=$)for(q=ft;q!==Y;q+=j,X+=4)H[(q+dt*lt)*4+2]=_t[X+0],H[(q+dt*lt)*4+1]=_t[X+1],H[(q+dt*lt)*4+0]=_t[X+2],H[(q+dt*lt)*4+3]=_t[X+3];return H}function l(H,K,$,Q,ft,j,Y,_t){let X,q=0,lt,dt;const xt=w.width;for(dt=K;dt!==Q;dt+=$)for(lt=ft;lt!==Y;lt+=j,q++)X=_t[q],H[(lt+xt*dt)*4+0]=X,H[(lt+xt*dt)*4+1]=X,H[(lt+xt*dt)*4+2]=X,H[(lt+xt*dt)*4+3]=255;return H}function c(H,K,$,Q,ft,j,Y,_t){let X=0,q,lt;const dt=w.width;for(lt=K;lt!==Q;lt+=$)for(q=ft;q!==Y;q+=j,X+=2)H[(q+dt*lt)*4+0]=_t[X+0],H[(q+dt*lt)*4+1]=_t[X+0],H[(q+dt*lt)*4+2]=_t[X+0],H[(q+dt*lt)*4+3]=_t[X+1];return H}function d(H,K,$,Q,ft){let j,Y,_t,X,q,lt;switch((w.flags&x)>>E){default:case P:j=0,_t=1,q=K,Y=0,X=1,lt=$;break;case M:j=0,_t=1,q=K,Y=$-1,X=-1,lt=-1;break;case L:j=K-1,_t=-1,q=-1,Y=0,X=1,lt=$;break;case R:j=K-1,_t=-1,q=-1,Y=$-1,X=-1,lt=-1;break}if(z)switch(w.pixel_size){case 8:l(H,Y,X,lt,j,_t,q,Q);break;case 16:c(H,Y,X,lt,j,_t,q,Q);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(w.pixel_size){case 8:r(H,Y,X,lt,j,_t,q,Q,ft);break;case 16:s(H,Y,X,lt,j,_t,q,Q);break;case 24:o(H,Y,X,lt,j,_t,q,Q);break;case 32:a(H,Y,X,lt,j,_t,q,Q);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return H}const f=0,p=1,h=2,_=3,g=9,m=10,u=11,x=48,E=4,M=0,R=1,P=2,L=3;if(t.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let N=0;const S=new Uint8Array(t),w={id_length:S[N++],colormap_type:S[N++],image_type:S[N++],colormap_index:S[N++]|S[N++]<<8,colormap_length:S[N++]|S[N++]<<8,colormap_size:S[N++],origin:[S[N++]|S[N++]<<8,S[N++]|S[N++]<<8],width:S[N++]|S[N++]<<8,height:S[N++]|S[N++]<<8,pixel_size:S[N++],flags:S[N++]};if(e(w),w.id_length+N>t.length)throw new Error("THREE.TGALoader: No data.");N+=w.id_length;let B=!1,C=!1,z=!1;switch(w.image_type){case g:B=!0,C=!0;break;case p:C=!0;break;case m:B=!0;break;case h:break;case u:B=!0,z=!0;break;case _:z=!0;break}const y=new Uint8Array(w.width*w.height*4),W=n(B,C,w,N,S);return d(y,w.width,w.height,W.pixel_data,W.palettes),{data:y,width:w.width,height:w.height,flipY:!0,generateMipmaps:!0,minFilter:Un}}}class Z_ extends Vn{load(t,e,n,r){const s=this,o=s.path===""?lu.extractUrlBase(t):s.path,a=new zs(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(t,function(l){try{e(s.parse(l,o))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},n,r)}parse(t,e){function n(A,T){const U=[],D=A.childNodes;for(let k=0,ht=D.length;k<ht;k++){const gt=D[k];gt.nodeName===T&&U.push(gt)}return U}function r(A){if(A.length===0)return[];const T=A.trim().split(/\s+/),U=new Array(T.length);for(let D=0,k=T.length;D<k;D++)U[D]=T[D];return U}function s(A){if(A.length===0)return[];const T=A.trim().split(/\s+/),U=new Array(T.length);for(let D=0,k=T.length;D<k;D++)U[D]=parseFloat(T[D]);return U}function o(A){if(A.length===0)return[];const T=A.trim().split(/\s+/),U=new Array(T.length);for(let D=0,k=T.length;D<k;D++)U[D]=parseInt(T[D]);return U}function a(A){return A.substring(1)}function l(){return"three_default_"+gu++}function c(A){return Object.keys(A).length===0}function d(A){return{unit:f(n(A,"unit")[0]),upAxis:p(n(A,"up_axis")[0])}}function f(A){return A!==void 0&&A.hasAttribute("meter")===!0?parseFloat(A.getAttribute("meter")):1}function p(A){return A!==void 0?A.textContent:"Y_UP"}function h(A,T,U,D){const k=n(A,T)[0];if(k!==void 0){const ht=n(k,U);for(let gt=0;gt<ht.length;gt++)D(ht[gt])}}function _(A,T){for(const U in A){const D=A[U];D.build=T(A[U])}}function g(A,T){return A.build!==void 0||(A.build=T(A)),A.build}function m(A){const T={sources:{},samplers:{},channels:{}};let U=!1;for(let D=0,k=A.childNodes.length;D<k;D++){const ht=A.childNodes[D];if(ht.nodeType!==1)continue;let gt;switch(ht.nodeName){case"source":gt=ht.getAttribute("id"),T.sources[gt]=pt(ht);break;case"sampler":gt=ht.getAttribute("id"),T.samplers[gt]=u(ht);break;case"channel":gt=ht.getAttribute("target"),T.channels[gt]=x(ht);break;case"animation":m(ht),U=!0;break;default:console.log(ht)}}U===!1&&(Kt.animations[A.getAttribute("id")||Dn.generateUUID()]=T)}function u(A){const T={inputs:{}};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const ht=a(k.getAttribute("source")),gt=k.getAttribute("semantic");T.inputs[gt]=ht;break}}return T}function x(A){const T={};let D=A.getAttribute("target").split("/");const k=D.shift();let ht=D.shift();const gt=ht.indexOf("(")!==-1,Ot=ht.indexOf(".")!==-1;if(Ot)D=ht.split("."),ht=D.shift(),T.member=D.shift();else if(gt){const Tt=ht.split("(");ht=Tt.shift();for(let Nt=0;Nt<Tt.length;Nt++)Tt[Nt]=parseInt(Tt[Nt].replace(/\)/,""));T.indices=Tt}return T.id=k,T.sid=ht,T.arraySyntax=gt,T.memberSyntax=Ot,T.sampler=a(A.getAttribute("source")),T}function E(A){const T=[],U=A.channels,D=A.samplers,k=A.sources;for(const ht in U)if(U.hasOwnProperty(ht)){const gt=U[ht],Ot=D[gt.sampler],Tt=Ot.inputs.INPUT,Nt=Ot.inputs.OUTPUT,Xt=k[Tt],Mt=k[Nt],Wt=R(gt,Xt,Mt);w(Wt,T)}return T}function M(A){return g(Kt.animations[A],E)}function R(A,T,U){const D=Kt.nodes[A.id],k=Le(D.id),ht=D.transforms[A.sid],gt=D.matrix.clone().transpose();let Ot,Tt,Nt,Xt,Mt,Wt;const Bt={};switch(ht){case"matrix":for(Nt=0,Xt=T.array.length;Nt<Xt;Nt++)if(Ot=T.array[Nt],Tt=Nt*U.stride,Bt[Ot]===void 0&&(Bt[Ot]={}),A.arraySyntax===!0){const Re=U.array[Tt],Se=A.indices[0]+4*A.indices[1];Bt[Ot][Se]=Re}else for(Mt=0,Wt=U.stride;Mt<Wt;Mt++)Bt[Ot][Mt]=U.array[Tt+Mt];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',ht);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',ht);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',ht);break}const Zt=P(Bt,gt);return{name:k.uuid,keyframes:Zt}}function P(A,T){const U=[];for(const k in A)U.push({time:parseFloat(k),value:A[k]});U.sort(D);for(let k=0;k<16;k++)B(U,k,T.elements[k]);return U;function D(k,ht){return k.time-ht.time}}const L=new Z,N=new Z,S=new Hn;function w(A,T){const U=A.keyframes,D=A.name,k=[],ht=[],gt=[],Ot=[];for(let Tt=0,Nt=U.length;Tt<Nt;Tt++){const Xt=U[Tt],Mt=Xt.time,Wt=Xt.value;tt.fromArray(Wt).transpose(),tt.decompose(L,S,N),k.push(Mt),ht.push(L.x,L.y,L.z),gt.push(S.x,S.y,S.z,S.w),Ot.push(N.x,N.y,N.z)}return ht.length>0&&T.push(new tr(D+".position",k,ht)),gt.length>0&&T.push(new Rr(D+".quaternion",k,gt)),Ot.length>0&&T.push(new tr(D+".scale",k,Ot)),T}function B(A,T,U){let D,k=!0,ht,gt;for(ht=0,gt=A.length;ht<gt;ht++)D=A[ht],D.value[T]===void 0?D.value[T]=null:k=!1;if(k===!0)for(ht=0,gt=A.length;ht<gt;ht++)D=A[ht],D.value[T]=U;else C(A,T)}function C(A,T){let U,D;for(let k=0,ht=A.length;k<ht;k++){const gt=A[k];if(gt.value[T]===null){if(U=z(A,k,T),D=y(A,k,T),U===null){gt.value[T]=D.value[T];continue}if(D===null){gt.value[T]=U.value[T];continue}W(gt,U,D,T)}}}function z(A,T,U){for(;T>=0;){const D=A[T];if(D.value[U]!==null)return D;T--}return null}function y(A,T,U){for(;T<A.length;){const D=A[T];if(D.value[U]!==null)return D;T++}return null}function W(A,T,U,D){if(U.time-T.time===0){A.value[D]=T.value[D];return}A.value[D]=(A.time-T.time)*(U.value[D]-T.value[D])/(U.time-T.time)+T.value[D]}function H(A){const T={name:A.getAttribute("id")||"default",start:parseFloat(A.getAttribute("start")||0),end:parseFloat(A.getAttribute("end")||0),animations:[]};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"instance_animation":T.animations.push(a(k.getAttribute("url")));break}}Kt.clips[A.getAttribute("id")]=T}function K(A){const T=[],U=A.name,D=A.end-A.start||-1,k=A.animations;for(let ht=0,gt=k.length;ht<gt;ht++){const Ot=M(k[ht]);for(let Tt=0,Nt=Ot.length;Tt<Nt;Tt++)T.push(Ot[Tt])}return new Ql(U,D,T)}function $(A){return g(Kt.clips[A],K)}function Q(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"skin":T.id=a(k.getAttribute("source")),T.skin=ft(k);break;case"morph":T.id=a(k.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}Kt.controllers[A.getAttribute("id")]=T}function ft(A){const T={sources:{}};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"bind_shape_matrix":T.bindShapeMatrix=s(k.textContent);break;case"source":const ht=k.getAttribute("id");T.sources[ht]=pt(k);break;case"joints":T.joints=j(k);break;case"vertex_weights":T.vertexWeights=Y(k);break}}return T}function j(A){const T={inputs:{}};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const ht=k.getAttribute("semantic"),gt=a(k.getAttribute("source"));T.inputs[ht]=gt;break}}return T}function Y(A){const T={inputs:{}};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const ht=k.getAttribute("semantic"),gt=a(k.getAttribute("source")),Ot=parseInt(k.getAttribute("offset"));T.inputs[ht]={id:gt,offset:Ot};break;case"vcount":T.vcount=o(k.textContent);break;case"v":T.v=o(k.textContent);break}}return T}function _t(A){const T={id:A.id},U=Kt.geometries[T.id];return A.skin!==void 0&&(T.skin=X(A.skin),U.sources.skinIndices=T.skin.indices,U.sources.skinWeights=T.skin.weights),T}function X(A){const U={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},D=A.sources,k=A.vertexWeights,ht=k.vcount,gt=k.v,Ot=k.inputs.JOINT.offset,Tt=k.inputs.WEIGHT.offset,Nt=A.sources[A.joints.inputs.JOINT],Xt=A.sources[A.joints.inputs.INV_BIND_MATRIX],Mt=D[k.inputs.WEIGHT.id].array;let Wt=0,Bt,Zt,qt;for(Bt=0,qt=ht.length;Bt<qt;Bt++){const Se=ht[Bt],_e=[];for(Zt=0;Zt<Se;Zt++){const ve=gt[Wt+Ot],En=gt[Wt+Tt],Ke=Mt[En];_e.push({index:ve,weight:Ke}),Wt+=2}for(_e.sort(Re),Zt=0;Zt<4;Zt++){const ve=_e[Zt];ve!==void 0?(U.indices.array.push(ve.index),U.weights.array.push(ve.weight)):(U.indices.array.push(0),U.weights.array.push(0))}}for(A.bindShapeMatrix?U.bindMatrix=new ie().fromArray(A.bindShapeMatrix).transpose():U.bindMatrix=new ie().identity(),Bt=0,qt=Nt.array.length;Bt<qt;Bt++){const Se=Nt.array[Bt],_e=new ie().fromArray(Xt.array,Bt*Xt.stride).transpose();U.joints.push({name:Se,boneInverse:_e})}return U;function Re(Se,_e){return _e.weight-Se.weight}}function q(A){return g(Kt.controllers[A],_t)}function lt(A){const T={init_from:n(A,"init_from")[0].textContent};Kt.images[A.getAttribute("id")]=T}function dt(A){return A.build!==void 0?A.build:A.init_from}function xt(A){const T=Kt.images[A];return T!==void 0?g(T,dt):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",A),null)}function Et(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"profile_COMMON":T.profile=kt(k);break}}Kt.effects[A.getAttribute("id")]=T}function kt(A){const T={surfaces:{},samplers:{}};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"newparam":Jt(k,T);break;case"technique":T.technique=v(k);break;case"extra":T.extra=ot(k);break}}return T}function Jt(A,T){const U=A.getAttribute("sid");for(let D=0,k=A.childNodes.length;D<k;D++){const ht=A.childNodes[D];if(ht.nodeType===1)switch(ht.nodeName){case"surface":T.surfaces[U]=Qt(ht);break;case"sampler2D":T.samplers[U]=de(ht);break}}}function Qt(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"init_from":T.init_from=k.textContent;break}}return T}function de(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"source":T.source=k.textContent;break}}return T}function v(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"constant":case"lambert":case"blinn":case"phong":T.type=k.nodeName,T.parameters=mt(k);break;case"extra":T.extra=ot(k);break}}return T}function mt(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":T[k.nodeName]=st(k);break;case"transparent":T[k.nodeName]={opaque:k.hasAttribute("opaque")?k.getAttribute("opaque"):"A_ONE",data:st(k)};break}}return T}function st(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"color":T[k.nodeName]=s(k.textContent);break;case"float":T[k.nodeName]=parseFloat(k.textContent);break;case"texture":T[k.nodeName]={id:k.getAttribute("texture"),extra:V(k)};break}}return T}function V(A){const T={technique:{}};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"extra":O(k,T);break}}return T}function O(A,T){for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"technique":J(k,T);break}}}function J(A,T){for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":T.technique[k.nodeName]=parseFloat(k.textContent);break;case"wrapU":case"wrapV":k.textContent.toUpperCase()==="TRUE"?T.technique[k.nodeName]=1:k.textContent.toUpperCase()==="FALSE"?T.technique[k.nodeName]=0:T.technique[k.nodeName]=parseInt(k.textContent);break;case"bump":T[k.nodeName]=b(k);break}}}function ot(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"technique":T.technique=I(k);break}}return T}function I(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"double_sided":T[k.nodeName]=parseInt(k.textContent);break;case"bump":T[k.nodeName]=b(k);break}}return T}function b(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"texture":T[k.nodeName]={id:k.getAttribute("texture"),texcoord:k.getAttribute("texcoord"),extra:V(k)};break}}return T}function G(A){return A}function rt(A){return g(Kt.effects[A],G)}function nt(A){const T={name:A.getAttribute("name")};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"instance_effect":T.url=a(k.getAttribute("url"));break}}Kt.materials[A.getAttribute("id")]=T}function at(A){let T,U=A.slice((A.lastIndexOf(".")-1>>>0)+2);switch(U=U.toLowerCase(),U){case"tga":T=sn;break;default:T=hn}return T}function wt(A){const T=rt(A.url),U=T.profile.technique;let D;switch(U.type){case"phong":case"blinn":D=new Xi;break;case"lambert":D=new Vg;break;default:D=new wr;break}D.name=A.name||"";function k(Tt,Nt=null){const Xt=T.profile.samplers[Tt.id];let Mt=null;if(Xt!==void 0){const Wt=T.profile.surfaces[Xt.source];Mt=xt(Wt.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),Mt=xt(Tt.id);if(Mt!==null){const Wt=at(Mt);if(Wt!==void 0){const Bt=Wt.load(Mt),Zt=Tt.extra;if(Zt!==void 0&&Zt.technique!==void 0&&c(Zt.technique)===!1){const qt=Zt.technique;Bt.wrapS=qt.wrapU?Nn:gn,Bt.wrapT=qt.wrapV?Nn:gn,Bt.offset.set(qt.offsetU||0,qt.offsetV||0),Bt.repeat.set(qt.repeatU||1,qt.repeatV||1)}else Bt.wrapS=Nn,Bt.wrapT=Nn;return Nt!==null&&(Bt.colorSpace=Nt),Bt}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",Mt),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",Tt.id),null}const ht=U.parameters;for(const Tt in ht){const Nt=ht[Tt];switch(Tt){case"diffuse":Nt.color&&D.color.fromArray(Nt.color),Nt.texture&&(D.map=k(Nt.texture,Pe));break;case"specular":Nt.color&&D.specular&&D.specular.fromArray(Nt.color),Nt.texture&&(D.specularMap=k(Nt.texture));break;case"bump":Nt.texture&&(D.normalMap=k(Nt.texture));break;case"ambient":Nt.texture&&(D.lightMap=k(Nt.texture,Pe));break;case"shininess":Nt.float&&D.shininess&&(D.shininess=Nt.float);break;case"emission":Nt.color&&D.emissive&&D.emissive.fromArray(Nt.color),Nt.texture&&(D.emissiveMap=k(Nt.texture,Pe));break}}he.toWorkingColorSpace(D.color,Pe),D.specular&&he.toWorkingColorSpace(D.specular,Pe),D.emissive&&he.toWorkingColorSpace(D.emissive,Pe);let gt=ht.transparent,Ot=ht.transparency;if(Ot===void 0&&gt&&(Ot={float:1}),gt===void 0&&Ot&&(gt={opaque:"A_ONE",data:{color:[1,1,1,1]}}),gt&&Ot)if(gt.data.texture)D.transparent=!0;else{const Tt=gt.data.color;switch(gt.opaque){case"A_ONE":D.opacity=Tt[3]*Ot.float;break;case"RGB_ZERO":D.opacity=1-Tt[0]*Ot.float;break;case"A_ZERO":D.opacity=1-Tt[3]*Ot.float;break;case"RGB_ONE":D.opacity=Tt[0]*Ot.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',gt.opaque)}D.opacity<1&&(D.transparent=!0)}if(U.extra!==void 0&&U.extra.technique!==void 0){const Tt=U.extra.technique;for(const Nt in Tt){const Xt=Tt[Nt];switch(Nt){case"double_sided":D.side=Xt===1?xn:kn;break;case"bump":D.normalMap=k(Xt.texture),D.normalScale=new fe(1,1);break}}}return D}function yt(A){return g(Kt.materials[A],wt)}function At(A){const T={name:A.getAttribute("name")};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"optics":T.optics=oe(k);break}}Kt.cameras[A.getAttribute("id")]=T}function oe(A){for(let T=0;T<A.childNodes.length;T++){const U=A.childNodes[T];switch(U.nodeName){case"technique_common":return bt(U)}}return{}}function bt(A){const T={};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];switch(D.nodeName){case"perspective":case"orthographic":T.technique=D.nodeName,T.parameters=Ut(D);break}}return T}function Ut(A){const T={};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];switch(D.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":T[D.nodeName]=parseFloat(D.textContent);break}}return T}function It(A){let T;switch(A.optics.technique){case"perspective":T=new ze(A.optics.parameters.yfov,A.optics.parameters.aspect_ratio,A.optics.parameters.znear,A.optics.parameters.zfar);break;case"orthographic":let U=A.optics.parameters.ymag,D=A.optics.parameters.xmag;const k=A.optics.parameters.aspect_ratio;D=D===void 0?U*k:D,U=U===void 0?D/k:U,D*=.5,U*=.5,T=new Co(-D,D,U,-U,A.optics.parameters.znear,A.optics.parameters.zfar);break;default:T=new ze;break}return T.name=A.name||"",T}function Yt(A){const T=Kt.cameras[A];return T!==void 0?g(T,It):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",A),null)}function Ft(A){let T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"technique_common":T=te(k);break}}Kt.lights[A.getAttribute("id")]=T}function te(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"directional":case"point":case"spot":case"ambient":T.technique=k.nodeName,T.parameters=ee(k)}}return T}function ee(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"color":const ht=s(k.textContent);T.color=new re().fromArray(ht),he.toWorkingColorSpace(T.color,Pe);break;case"falloff_angle":T.falloffAngle=parseFloat(k.textContent);break;case"quadratic_attenuation":const gt=parseFloat(k.textContent);T.distance=gt?Math.sqrt(1/gt):0;break}}return T}function xe(A){let T;switch(A.technique){case"directional":T=new au;break;case"point":T=new i_;break;case"spot":T=new e_;break;case"ambient":T=new ou;break}return A.parameters.color&&T.color.copy(A.parameters.color),A.parameters.distance&&(T.distance=A.parameters.distance),T}function et(A){const T=Kt.lights[A];return T!==void 0?g(T,xe):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",A),null)}function Ct(A){const T={name:A.getAttribute("name"),sources:{},vertices:{},primitives:[]},U=n(A,"mesh")[0];if(U!==void 0){for(let D=0;D<U.childNodes.length;D++){const k=U.childNodes[D];if(k.nodeType!==1)continue;const ht=k.getAttribute("id");switch(k.nodeName){case"source":T.sources[ht]=pt(k);break;case"vertices":T.vertices=vt(k);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",k.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":T.primitives.push(Rt(k));break;default:console.log(k)}}Kt.geometries[A.getAttribute("id")]=T}}function pt(A){const T={array:[],stride:3};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"float_array":T.array=s(D.textContent);break;case"Name_array":T.array=r(D.textContent);break;case"technique_common":const k=n(D,"accessor")[0];k!==void 0&&(T.stride=parseInt(k.getAttribute("stride")));break}}return T}function vt(A){const T={};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];D.nodeType===1&&(T[D.getAttribute("semantic")]=a(D.getAttribute("source")))}return T}function Rt(A){const T={type:A.nodeName,material:A.getAttribute("material"),count:parseInt(A.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const ht=a(k.getAttribute("source")),gt=k.getAttribute("semantic"),Ot=parseInt(k.getAttribute("offset")),Tt=parseInt(k.getAttribute("set")),Nt=Tt>0?gt+Tt:gt;T.inputs[Nt]={id:ht,offset:Ot},T.stride=Math.max(T.stride,Ot+1),gt==="TEXCOORD"&&(T.hasUV=!0);break;case"vcount":T.vcount=o(k.textContent);break;case"p":T.p=o(k.textContent);break}}return T}function Dt(A){const T={};for(let U=0;U<A.length;U++){const D=A[U];T[D.type]===void 0&&(T[D.type]=[]),T[D.type].push(D)}return T}function se(A){let T=0;for(let U=0,D=A.length;U<D;U++)A[U].hasUV===!0&&T++;T>0&&T<A.length&&(A.uvsNeedsFix=!0)}function Ae(A){const T={},U=A.sources,D=A.vertices,k=A.primitives;if(k.length===0)return{};const ht=Dt(k);for(const gt in ht){const Ot=ht[gt];se(Ot),T[gt]=Ue(Ot,U,D)}return T}function Ue(A,T,U){const D={},k={array:[],stride:0},ht={array:[],stride:0},gt={array:[],stride:0},Ot={array:[],stride:0},Tt={array:[],stride:0},Nt={array:[],stride:4},Xt={array:[],stride:4},Mt=new Ve,Wt=[];let Bt=0;for(let Zt=0;Zt<A.length;Zt++){const qt=A[Zt],Re=qt.inputs;let Se=0;switch(qt.type){case"lines":case"linestrips":Se=qt.count*2;break;case"triangles":Se=qt.count*3;break;case"polylist":for(let _e=0;_e<qt.count;_e++){const ve=qt.vcount[_e];switch(ve){case 3:Se+=3;break;case 4:Se+=6;break;default:Se+=(ve-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",qt.type)}Mt.addGroup(Bt,Se,Zt),Bt+=Se,qt.material&&Wt.push(qt.material);for(const _e in Re){const ve=Re[_e];switch(_e){case"VERTEX":for(const En in U){const Ke=U[En];switch(En){case"POSITION":const Si=k.array.length;if(le(qt,T[Ke],ve.offset,k.array),k.stride=T[Ke].stride,T.skinWeights&&T.skinIndices&&(le(qt,T.skinIndices,ve.offset,Nt.array),le(qt,T.skinWeights,ve.offset,Xt.array)),qt.hasUV===!1&&A.uvsNeedsFix===!0){const _u=(k.array.length-Si)/k.stride;for(let Fo=0;Fo<_u;Fo++)gt.array.push(0,0)}break;case"NORMAL":le(qt,T[Ke],ve.offset,ht.array),ht.stride=T[Ke].stride;break;case"COLOR":le(qt,T[Ke],ve.offset,Tt.array),Tt.stride=T[Ke].stride;break;case"TEXCOORD":le(qt,T[Ke],ve.offset,gt.array),gt.stride=T[Ke].stride;break;case"TEXCOORD1":le(qt,T[Ke],ve.offset,Ot.array),gt.stride=T[Ke].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',En)}}break;case"NORMAL":le(qt,T[ve.id],ve.offset,ht.array),ht.stride=T[ve.id].stride;break;case"COLOR":le(qt,T[ve.id],ve.offset,Tt.array,!0),Tt.stride=T[ve.id].stride;break;case"TEXCOORD":le(qt,T[ve.id],ve.offset,gt.array),gt.stride=T[ve.id].stride;break;case"TEXCOORD1":le(qt,T[ve.id],ve.offset,Ot.array),Ot.stride=T[ve.id].stride;break}}}return k.array.length>0&&Mt.setAttribute("position",new be(k.array,k.stride)),ht.array.length>0&&Mt.setAttribute("normal",new be(ht.array,ht.stride)),Tt.array.length>0&&Mt.setAttribute("color",new be(Tt.array,Tt.stride)),gt.array.length>0&&Mt.setAttribute("uv",new be(gt.array,gt.stride)),Ot.array.length>0&&Mt.setAttribute("uv1",new be(Ot.array,Ot.stride)),Nt.array.length>0&&Mt.setAttribute("skinIndex",new be(Nt.array,Nt.stride)),Xt.array.length>0&&Mt.setAttribute("skinWeight",new be(Xt.array,Xt.stride)),D.data=Mt,D.type=A[0].type,D.materialKeys=Wt,D}function le(A,T,U,D,k=!1){const ht=A.p,gt=A.stride,Ot=A.vcount;function Tt(Mt){let Wt=ht[Mt+U]*Xt;const Bt=Wt+Xt;for(;Wt<Bt;Wt++)D.push(Nt[Wt]);if(k){const Zt=D.length-Xt-1;si.setRGB(D[Zt+0],D[Zt+1],D[Zt+2],Pe),D[Zt+0]=si.r,D[Zt+1]=si.g,D[Zt+2]=si.b}}const Nt=T.array,Xt=T.stride;if(A.vcount!==void 0){let Mt=0;for(let Wt=0,Bt=Ot.length;Wt<Bt;Wt++){const Zt=Ot[Wt];if(Zt===4){const qt=Mt+gt*0,Re=Mt+gt*1,Se=Mt+gt*2,_e=Mt+gt*3;Tt(qt),Tt(Re),Tt(_e),Tt(Re),Tt(Se),Tt(_e)}else if(Zt===3){const qt=Mt+gt*0,Re=Mt+gt*1,Se=Mt+gt*2;Tt(qt),Tt(Re),Tt(Se)}else if(Zt>4)for(let qt=1,Re=Zt-2;qt<=Re;qt++){const Se=Mt+gt*0,_e=Mt+gt*qt,ve=Mt+gt*(qt+1);Tt(Se),Tt(_e),Tt(ve)}Mt+=gt*Zt}}else for(let Mt=0,Wt=ht.length;Mt<Wt;Mt+=gt)Tt(Mt)}function Ye(A){return g(Kt.geometries[A],Ae)}function cn(A){const T={name:A.getAttribute("name")||"",joints:{},links:[]};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"technique_common":Sn(D,T);break}}Kt.kinematicsModels[A.getAttribute("id")]=T}function Lr(A){return A.build!==void 0?A.build:A}function Ir(A){return g(Kt.kinematicsModels[A],Lr)}function Sn(A,T){for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"joint":T.joints[D.getAttribute("sid")]=or(D);break;case"link":T.links.push(lr(D));break}}}function or(A){let T;for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"prismatic":case"revolute":T=Dr(D);break}}return T}function Dr(A){const T={sid:A.getAttribute("sid"),name:A.getAttribute("name")||"",axis:new Z,limits:{min:0,max:0},type:A.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"axis":const k=s(D.textContent);T.axis.fromArray(k);break;case"limits":const ht=D.getElementsByTagName("max")[0],gt=D.getElementsByTagName("min")[0];T.limits.max=parseFloat(ht.textContent),T.limits.min=parseFloat(gt.textContent);break}}return T.limits.min>=T.limits.max&&(T.static=!0),T.middlePosition=(T.limits.min+T.limits.max)/2,T}function lr(A){const T={sid:A.getAttribute("sid"),name:A.getAttribute("name")||"",attachments:[],transforms:[]};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"attachment_full":T.attachments.push(bi(D));break;case"matrix":case"translate":case"rotate":T.transforms.push(cr(D));break}}return T}function bi(A){const T={joint:A.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"link":T.links.push(lr(D));break;case"matrix":case"translate":case"rotate":T.transforms.push(cr(D));break}}return T}function cr(A){const T={type:A.nodeName},U=s(A.textContent);switch(T.type){case"matrix":T.obj=new ie,T.obj.fromArray(U).transpose();break;case"translate":T.obj=new Z,T.obj.fromArray(U);break;case"rotate":T.obj=new Z,T.obj.fromArray(U),T.angle=Dn.degToRad(U[3]);break}return T}function Mi(A){const T={name:A.getAttribute("name")||"",rigidBodies:{}};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"rigid_body":T.rigidBodies[D.getAttribute("name")]={},Nr(D,T.rigidBodies[D.getAttribute("name")]);break}}Kt.physicsModels[A.getAttribute("id")]=T}function Nr(A,T){for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"technique_common":Ur(D,T);break}}}function Ur(A,T){for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"inertia":T.inertia=s(D.textContent);break;case"mass":T.mass=s(D.textContent)[0];break}}}function Gs(A){const T={bindJointAxis:[]};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"bind_joint_axis":T.bindJointAxis.push(Ws(D));break}}Kt.kinematicsScenes[a(A.getAttribute("url"))]=T}function Ws(A){const T={target:A.getAttribute("target").split("/").pop()};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"axis":const k=D.getElementsByTagName("param")[0];T.axis=k.textContent;const ht=T.axis.split("inst_").pop().split("axis")[0];T.jointIndex=ht.substring(0,ht.length-1);break}}return T}function Xs(A){return A.build!==void 0?A.build:A}function F(A){return g(Kt.kinematicsScenes[A],Xs)}function it(){const A=Object.keys(Kt.kinematicsModels)[0],T=Object.keys(Kt.kinematicsScenes)[0],U=Object.keys(Kt.visualScenes)[0];if(A===void 0||T===void 0)return;const D=Ir(A),k=F(T),ht=me(U),gt=k.bindJointAxis,Ot={};for(let Xt=0,Mt=gt.length;Xt<Mt;Xt++){const Wt=gt[Xt],Bt=ne.querySelector('[sid="'+Wt.target+'"]');if(Bt){const Zt=Bt.parentElement;Tt(Wt.jointIndex,Zt)}}function Tt(Xt,Mt){const Wt=Mt.getAttribute("name"),Bt=D.joints[Xt];ht.traverse(function(Zt){Zt.name===Wt&&(Ot[Xt]={object:Zt,transforms:ct(Mt),joint:Bt,position:Bt.zeroPosition})})}const Nt=new ie;Uo={joints:D&&D.joints,getJointValue:function(Xt){const Mt=Ot[Xt];if(Mt)return Mt.position;console.warn("THREE.ColladaLoader: Joint "+Xt+" doesn't exist.")},setJointValue:function(Xt,Mt){const Wt=Ot[Xt];if(Wt){const Bt=Wt.joint;if(Mt>Bt.limits.max||Mt<Bt.limits.min)console.warn("THREE.ColladaLoader: Joint "+Xt+" value "+Mt+" outside of limits (min: "+Bt.limits.min+", max: "+Bt.limits.max+").");else if(Bt.static)console.warn("THREE.ColladaLoader: Joint "+Xt+" is static.");else{const Zt=Wt.object,qt=Bt.axis,Re=Wt.transforms;tt.identity();for(let Se=0;Se<Re.length;Se++){const _e=Re[Se];if(_e.sid&&_e.sid.indexOf(Xt)!==-1)switch(Bt.type){case"revolute":tt.multiply(Nt.makeRotationAxis(qt,Dn.degToRad(Mt)));break;case"prismatic":tt.multiply(Nt.makeTranslation(qt.x*Mt,qt.y*Mt,qt.z*Mt));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Bt.type);break}else switch(_e.type){case"matrix":tt.multiply(_e.obj);break;case"translate":tt.multiply(Nt.makeTranslation(_e.obj.x,_e.obj.y,_e.obj.z));break;case"scale":tt.scale(_e.obj);break;case"rotate":tt.multiply(Nt.makeRotationAxis(_e.obj,_e.angle));break}}Zt.matrix.copy(tt),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Ot[Xt].position=Mt}}else console.log("THREE.ColladaLoader: "+Xt+" does not exist.")}}}function ct(A){const T=[],U=ne.querySelector('[id="'+A.id+'"]');for(let D=0;D<U.childNodes.length;D++){const k=U.childNodes[D];if(k.nodeType!==1)continue;let ht,gt;switch(k.nodeName){case"matrix":ht=s(k.textContent);const Ot=new ie().fromArray(ht).transpose();T.push({sid:k.getAttribute("sid"),type:k.nodeName,obj:Ot});break;case"translate":case"scale":ht=s(k.textContent),gt=new Z().fromArray(ht),T.push({sid:k.getAttribute("sid"),type:k.nodeName,obj:gt});break;case"rotate":ht=s(k.textContent),gt=new Z().fromArray(ht);const Tt=Dn.degToRad(ht[3]);T.push({sid:k.getAttribute("sid"),type:k.nodeName,obj:gt,angle:Tt});break}}return T}function ut(A){const T=A.getElementsByTagName("node");for(let U=0;U<T.length;U++){const D=T[U];D.hasAttribute("id")===!1&&D.setAttribute("id",l())}}const tt=new ie,St=new Z;function Lt(A){const T={name:A.getAttribute("name")||"",type:A.getAttribute("type"),id:A.getAttribute("id"),sid:A.getAttribute("sid"),matrix:new ie,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType!==1)continue;let k;switch(D.nodeName){case"node":T.nodes.push(D.getAttribute("id")),Lt(D);break;case"instance_camera":T.instanceCameras.push(a(D.getAttribute("url")));break;case"instance_controller":T.instanceControllers.push(zt(D));break;case"instance_light":T.instanceLights.push(a(D.getAttribute("url")));break;case"instance_geometry":T.instanceGeometries.push(zt(D));break;case"instance_node":T.instanceNodes.push(a(D.getAttribute("url")));break;case"matrix":k=s(D.textContent),T.matrix.multiply(tt.fromArray(k).transpose()),T.transforms[D.getAttribute("sid")]=D.nodeName;break;case"translate":k=s(D.textContent),St.fromArray(k),T.matrix.multiply(tt.makeTranslation(St.x,St.y,St.z)),T.transforms[D.getAttribute("sid")]=D.nodeName;break;case"rotate":k=s(D.textContent);const ht=Dn.degToRad(k[3]);T.matrix.multiply(tt.makeRotationAxis(St.fromArray(k),ht)),T.transforms[D.getAttribute("sid")]=D.nodeName;break;case"scale":k=s(D.textContent),T.matrix.scale(St.fromArray(k)),T.transforms[D.getAttribute("sid")]=D.nodeName;break;case"extra":break;default:console.log(D)}}return Ee(T.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",T.id):Kt.nodes[T.id]=T,T}function zt(A){const T={id:a(A.getAttribute("url")),materials:{},skeletons:[]};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];switch(D.nodeName){case"bind_material":const k=D.getElementsByTagName("instance_material");for(let ht=0;ht<k.length;ht++){const gt=k[ht],Ot=gt.getAttribute("symbol"),Tt=gt.getAttribute("target");T.materials[Ot]=a(Tt)}break;case"skeleton":T.skeletons.push(a(D.textContent));break}}return T}function Vt(A,T){const U=[],D=[];let k,ht,gt;for(k=0;k<A.length;k++){const Nt=A[k];let Xt;if(Ee(Nt))Xt=Le(Nt),$t(Xt,T,U);else if(un(Nt)){const Wt=Kt.visualScenes[Nt].children;for(let Bt=0;Bt<Wt.length;Bt++){const Zt=Wt[Bt];if(Zt.type==="JOINT"){const qt=Le(Zt.id);$t(qt,T,U)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Nt)}for(k=0;k<T.length;k++)for(ht=0;ht<U.length;ht++)if(gt=U[ht],gt.bone.name===T[k].name){D[k]=gt,gt.processed=!0;break}for(k=0;k<U.length;k++)gt=U[k],gt.processed===!1&&(D.push(gt),gt.processed=!0);const Ot=[],Tt=[];for(k=0;k<D.length;k++)gt=D[k],Ot.push(gt.bone),Tt.push(gt.boneInverse);return new Po(Ot,Tt)}function $t(A,T,U){A.traverse(function(D){if(D.isBone===!0){let k;for(let ht=0;ht<T.length;ht++){const gt=T[ht];if(gt.name===D.name){k=gt.boneInverse;break}}k===void 0&&(k=new ie),U.push({bone:D,boneInverse:k,processed:!1})}})}function ae(A){const T=[],U=A.matrix,D=A.nodes,k=A.type,ht=A.instanceCameras,gt=A.instanceControllers,Ot=A.instanceLights,Tt=A.instanceGeometries,Nt=A.instanceNodes;for(let Mt=0,Wt=D.length;Mt<Wt;Mt++)T.push(Le(D[Mt]));for(let Mt=0,Wt=ht.length;Mt<Wt;Mt++){const Bt=Yt(ht[Mt]);Bt!==null&&T.push(Bt.clone())}for(let Mt=0,Wt=gt.length;Mt<Wt;Mt++){const Bt=gt[Mt],Zt=q(Bt.id),qt=Ye(Zt.id),Re=Me(qt,Bt.materials),Se=Bt.skeletons,_e=Zt.skin.joints,ve=Vt(Se,_e);for(let En=0,Ke=Re.length;En<Ke;En++){const Si=Re[En];Si.isSkinnedMesh&&(Si.bind(ve,Zt.skin.bindMatrix),Si.normalizeSkinWeights()),T.push(Si)}}for(let Mt=0,Wt=Ot.length;Mt<Wt;Mt++){const Bt=et(Ot[Mt]);Bt!==null&&T.push(Bt.clone())}for(let Mt=0,Wt=Tt.length;Mt<Wt;Mt++){const Bt=Tt[Mt],Zt=Ye(Bt.id),qt=Me(Zt,Bt.materials);for(let Re=0,Se=qt.length;Re<Se;Re++)T.push(qt[Re])}for(let Mt=0,Wt=Nt.length;Mt<Wt;Mt++)T.push(Le(Nt[Mt]).clone());let Xt;if(D.length===0&&T.length===1)Xt=T[0];else{Xt=k==="JOINT"?new Jc:new gi;for(let Mt=0;Mt<T.length;Mt++)Xt.add(T[Mt])}return Xt.name=k==="JOINT"?A.sid:A.name,Xt.matrix.copy(U),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt}const Ht=new wr({name:Vn.DEFAULT_MATERIAL_NAME,color:16711935});function pe(A,T){const U=[];for(let D=0,k=A.length;D<k;D++){const ht=T[A[D]];ht===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",A[D]),U.push(Ht)):U.push(yt(ht))}return U}function Me(A,T){const U=[];for(const D in A){const k=A[D],ht=pe(k.materialKeys,T);if(ht.length===0&&(D==="lines"||D==="linestrips"?ht.push(new Wi):ht.push(new Xi)),D==="lines"||D==="linestrips")for(let Nt=0,Xt=ht.length;Nt<Xt;Nt++){const Mt=ht[Nt];if(Mt.isMeshPhongMaterial===!0||Mt.isMeshLambertMaterial===!0){const Wt=new Wi;Wt.color.copy(Mt.color),Wt.opacity=Mt.opacity,Wt.transparent=Mt.transparent,ht[Nt]=Wt}}const gt=k.data.attributes.skinIndex!==void 0,Ot=ht.length===1?ht[0]:ht;let Tt;switch(D){case"lines":Tt=new _o(k.data,Ot);break;case"linestrips":Tt=new Qc(k.data,Ot);break;case"triangles":case"polylist":gt?Tt=new Bg(k.data,Ot):Tt=new Te(k.data,Ot);break}U.push(Tt)}return U}function Ee(A){return Kt.nodes[A]!==void 0}function Le(A){return g(Kt.nodes[A],ae)}function ge(A){const T={name:A.getAttribute("name"),children:[]};ut(A);const U=n(A,"node");for(let D=0;D<U.length;D++)T.children.push(Lt(U[D]));Kt.visualScenes[A.getAttribute("id")]=T}function Gt(A){const T=new gi;T.name=A.name;const U=A.children;for(let D=0;D<U.length;D++){const k=U[D];T.add(Le(k.id))}return T}function un(A){return Kt.visualScenes[A]!==void 0}function me(A){return g(Kt.visualScenes[A],Gt)}function $e(A){const T=n(A,"instance_visual_scene")[0];return me(a(T.getAttribute("url")))}function Wn(){const A=Kt.clips;if(c(A)===!0){if(c(Kt.animations)===!1){const T=[];for(const U in Kt.animations){const D=M(U);for(let k=0,ht=D.length;k<ht;k++)T.push(D[k])}Fr.push(new Ql("default",-1,T))}}else for(const T in A)Fr.push($(T))}function He(A){let T="";const U=[A];for(;U.length;){const D=U.shift();D.nodeType===Node.TEXT_NODE?T+=D.textContent:(T+=`
`,U.push.apply(U,D.childNodes))}return T.trim()}if(t.length===0)return{scene:new Kc};const Xn=new DOMParser().parseFromString(t,"application/xml"),ne=n(Xn,"COLLADA")[0],Ze=Xn.getElementsByTagName("parsererror")[0];if(Ze!==void 0){const A=n(Ze,"div")[0];let T;return A?T=A.textContent:T=He(Ze),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,T),null}const ri=ne.getAttribute("version");console.debug("THREE.ColladaLoader: File version",ri);const Ge=d(n(ne,"asset")[0]),hn=new su(this.manager);hn.setPath(this.resourcePath||e).setCrossOrigin(this.crossOrigin);let sn;uc&&(sn=new uc(this.manager),sn.setPath(this.resourcePath||e));const si=new re,Fr=[];let Uo={},gu=0;const Kt={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};h(ne,"library_animations","animation",m),h(ne,"library_animation_clips","animation_clip",H),h(ne,"library_controllers","controller",Q),h(ne,"library_images","image",lt),h(ne,"library_effects","effect",Et),h(ne,"library_materials","material",nt),h(ne,"library_cameras","camera",At),h(ne,"library_lights","light",Ft),h(ne,"library_geometries","geometry",Ct),h(ne,"library_nodes","node",Lt),h(ne,"library_visual_scenes","visual_scene",ge),h(ne,"library_kinematics_models","kinematics_model",cn),h(ne,"library_physics_models","physics_model",Mi),h(ne,"scene","instance_kinematics_scene",Gs),_(Kt.animations,E),_(Kt.clips,K),_(Kt.controllers,_t),_(Kt.images,dt),_(Kt.effects,G),_(Kt.materials,wt),_(Kt.cameras,It),_(Kt.lights,xe),_(Kt.geometries,Ae),_(Kt.visualScenes,Gt),Wn(),it();const Or=$e(n(ne,"scene")[0]);return Or.animations=Fr,Ge.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Or.rotation.set(-Math.PI/2,0,0)),Or.scale.multiplyScalar(Ge.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),Fr},kinematics:Uo,library:Kt,scene:Or}}}const hc=new Z,K_=new Je,ps=new ie,$n=new ie,ms=new Hn,gs=new Z(1,1,1),_s=new Z;class Vs extends Ce{constructor(...t){super(...t),this.urdfNode=null,this.urdfName=""}copy(t,e){return super.copy(t,e),this.urdfNode=t.urdfNode,this.urdfName=t.urdfName,this}}class J_ extends Vs{constructor(...t){super(...t),this.isURDFCollider=!0,this.type="URDFCollider"}}class $_ extends Vs{constructor(...t){super(...t),this.isURDFVisual=!0,this.type="URDFVisual"}}class fu extends Vs{constructor(...t){super(...t),this.isURDFLink=!0,this.type="URDFLink"}}class pu extends Vs{get jointType(){return this._jointType}set jointType(t){if(this.jointType!==t)switch(this._jointType=t,this.matrixWorldNeedsUpdate=!0,t){case"fixed":this.jointValue=[];break;case"continuous":case"revolute":case"prismatic":this.jointValue=new Array(1).fill(0);break;case"planar":this.jointValue=new Array(3).fill(0),this.axis=new Z(0,0,1);break;case"floating":this.jointValue=new Array(6).fill(0);break}}get angle(){return this.jointValue[0]}constructor(...t){super(...t),this.isURDFJoint=!0,this.type="URDFJoint",this.jointValue=null,this.jointType="fixed",this.axis=new Z(1,0,0),this.limit={lower:0,upper:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(t,e){return super.copy(t,e),this.jointType=t.jointType,this.axis=t.axis.clone(),this.limit.lower=t.limit.lower,this.limit.upper=t.limit.upper,this.ignoreLimits=!1,this.jointValue=[...t.jointValue],this.origPosition=t.origPosition?t.origPosition.clone():null,this.origQuaternion=t.origQuaternion?t.origQuaternion.clone():null,this.mimicJoints=[...t.mimicJoints],this}setJointValue(...t){t=t.map(n=>n===null?null:parseFloat(n)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let e=!1;switch(this.mimicJoints.forEach(n=>{e=n.updateFromMimickedJoint(...t)||e}),this.jointType){case"fixed":return e;case"continuous":case"revolute":{let n=t[0];return n==null||n===this.jointValue[0]?e:(!this.ignoreLimits&&this.jointType==="revolute"&&(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.quaternion.setFromAxisAngle(this.axis,n).premultiply(this.origQuaternion),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):e)}case"prismatic":{let n=t[0];return n==null||n===this.jointValue[0]?e:(this.ignoreLimits||(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.position.copy(this.origPosition),hc.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(hc,n),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):e)}case"floating":return this.jointValue.every((n,r)=>t[r]===n||t[r]===null)?e:(this.jointValue[0]=t[0]!==null?t[0]:this.jointValue[0],this.jointValue[1]=t[1]!==null?t[1]:this.jointValue[1],this.jointValue[2]=t[2]!==null?t[2]:this.jointValue[2],this.jointValue[3]=t[3]!==null?t[3]:this.jointValue[3],this.jointValue[4]=t[4]!==null?t[4]:this.jointValue[4],this.jointValue[5]=t[5]!==null?t[5]:this.jointValue[5],$n.compose(this.origPosition,this.origQuaternion,gs),ms.setFromEuler(K_.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],"XYZ")),_s.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),ps.compose(_s,ms,gs),$n.premultiply(ps),this.position.setFromMatrixPosition($n),this.rotation.setFromRotationMatrix($n),this.matrixWorldNeedsUpdate=!0,!0);case"planar":return this.jointValue.every((n,r)=>t[r]===n||t[r]===null)?e:(this.jointValue[0]=t[0]!==null?t[0]:this.jointValue[0],this.jointValue[1]=t[1]!==null?t[1]:this.jointValue[1],this.jointValue[2]=t[2]!==null?t[2]:this.jointValue[2],$n.compose(this.origPosition,this.origQuaternion,gs),ms.setFromAxisAngle(this.axis,this.jointValue[2]),_s.set(this.jointValue[0],this.jointValue[1],0),ps.compose(_s,ms,gs),$n.premultiply(ps),this.position.setFromMatrixPosition($n),this.rotation.setFromRotationMatrix($n),this.matrixWorldNeedsUpdate=!0,!0)}return e}}class dc extends pu{constructor(...t){super(...t),this.type="URDFMimicJoint",this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...t){const e=t.map(n=>n*this.multiplier+this.offset);return super.setJointValue(...e)}copy(t,e){return super.copy(t,e),this.mimicJoint=t.mimicJoint,this.offset=t.offset,this.multiplier=t.multiplier,this}}class Q_ extends fu{constructor(...t){super(...t),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(t,e){super.copy(t,e),this.urdfRobotNode=t.urdfRobotNode,this.robotName=t.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(n=>{n.isURDFJoint&&n.urdfName in t.joints&&(this.joints[n.urdfName]=n),n.isURDFLink&&n.urdfName in t.links&&(this.links[n.urdfName]=n),n.isURDFCollider&&n.urdfName in t.colliders&&(this.colliders[n.urdfName]=n),n.isURDFVisual&&n.urdfName in t.visual&&(this.visual[n.urdfName]=n)});for(const n in this.joints)this.joints[n].mimicJoints=this.joints[n].mimicJoints.map(r=>this.joints[r.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(t){return this.frames[t]}setJointValue(t,...e){const n=this.joints[t];return n?n.setJointValue(...e):!1}setJointValues(t){let e=!1;for(const n in t){const r=t[n];Array.isArray(r)?e=this.setJointValue(n,...r)||e:e=this.setJointValue(n,r)||e}return e}}const Ra=new Hn,fc=new Je;function ki(i){return i?i.trim().split(/\s+/g).map(t=>parseFloat(t)):[0,0,0]}function pc(i,t,e=!1){e||i.rotation.set(0,0,0),fc.set(t[0],t[1],t[2],"ZYX"),Ra.setFromEuler(fc),Ra.multiply(i.quaternion),i.quaternion.copy(Ra)}class t0{constructor(t){this.manager=t||ru,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions={}}loadAsync(t){return new Promise((e,n)=>{this.load(t,e,null,n)})}load(t,e,n,r){const s=this.manager,o=lu.extractUrlBase(t),a=this.manager.resolveURL(t);s.itemStart(a),fetch(a,this.fetchOptions).then(l=>{if(l.ok)return n&&n(null),l.text();throw new Error(`URDFLoader: Failed to load url '${a}' with error code ${l.status} : ${l.statusText}.`)}).then(l=>{const c=this.parse(l,this.workingPath||o);e(c),s.itemEnd(a)}).catch(l=>{r?r(l):console.error("URDFLoader: Error loading file.",l),s.itemError(a),s.itemEnd(a)})}parse(t,e=this.workingPath){const n=this.packages,r=this.loadMeshCb,s=this.parseVisual,o=this.parseCollision,a=this.manager,l={},c={},d={};function f(x){if(!/^package:\/\//.test(x))return e?e+x:x;const[E,M]=x.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof n=="string")return n.endsWith(E)?n+"/"+M:n+"/"+E+"/"+M;if(n instanceof Function)return n(E)+"/"+M;if(typeof n=="object")return E in n?n[E]+"/"+M:(console.error(`URDFLoader : ${E} not found in provided package list.`),null)}function p(x){let E;x instanceof Document?E=[...x.children]:x instanceof Element?E=[x]:E=[...new DOMParser().parseFromString(x,"text/xml").children];const M=E.filter(R=>R.nodeName==="robot").pop();return h(M)}function h(x){const E=[...x.children],M=E.filter(B=>B.nodeName.toLowerCase()==="link"),R=E.filter(B=>B.nodeName.toLowerCase()==="joint"),P=E.filter(B=>B.nodeName.toLowerCase()==="material"),L=new Q_;L.robotName=x.getAttribute("name"),L.urdfRobotNode=x,P.forEach(B=>{const C=B.getAttribute("name");d[C]=m(B)});const N={},S={};M.forEach(B=>{const C=B.getAttribute("name"),z=x.querySelector(`child[link="${C}"]`)===null;l[C]=g(B,N,S,z?L:null)}),R.forEach(B=>{const C=B.getAttribute("name");c[C]=_(B)}),L.joints=c,L.links=l,L.colliders=S,L.visual=N;const w=Object.values(c);return w.forEach(B=>{B instanceof dc&&c[B.mimicJoint].mimicJoints.push(B)}),w.forEach(B=>{const C=new Set,z=y=>{if(C.has(y))throw new Error("URDFLoader: Detected an infinite loop of mimic joints.");C.add(y),y.mimicJoints.forEach(W=>{z(W)})};z(B)}),L.frames={...S,...N,...l,...c},L}function _(x){const E=[...x.children],M=x.getAttribute("type");let R;const P=E.find(C=>C.nodeName.toLowerCase()==="mimic");P?(R=new dc,R.mimicJoint=P.getAttribute("joint"),R.multiplier=parseFloat(P.getAttribute("multiplier")||1),R.offset=parseFloat(P.getAttribute("offset")||0)):R=new pu,R.urdfNode=x,R.name=x.getAttribute("name"),R.urdfName=R.name,R.jointType=M;let L=null,N=null,S=[0,0,0],w=[0,0,0];E.forEach(C=>{const z=C.nodeName.toLowerCase();z==="origin"?(S=ki(C.getAttribute("xyz")),w=ki(C.getAttribute("rpy"))):z==="child"?N=l[C.getAttribute("link")]:z==="parent"?L=l[C.getAttribute("link")]:z==="limit"&&(R.limit.lower=parseFloat(C.getAttribute("lower")||R.limit.lower),R.limit.upper=parseFloat(C.getAttribute("upper")||R.limit.upper))}),L.add(R),R.add(N),pc(R,w),R.position.set(S[0],S[1],S[2]);const B=E.filter(C=>C.nodeName.toLowerCase()==="axis")[0];if(B){const C=B.getAttribute("xyz").split(/\s+/g).map(z=>parseFloat(z));R.axis=new Z(C[0],C[1],C[2]),R.axis.normalize()}return R}function g(x,E,M,R=null){R===null&&(R=new fu);const P=[...x.children];return R.name=x.getAttribute("name"),R.urdfName=R.name,R.urdfNode=x,s&&P.filter(N=>N.nodeName.toLowerCase()==="visual").forEach(N=>{const S=u(N,d);if(R.add(S),N.hasAttribute("name")){const w=N.getAttribute("name");S.name=w,S.urdfName=w,E[w]=S}}),o&&P.filter(N=>N.nodeName.toLowerCase()==="collision").forEach(N=>{const S=u(N);if(R.add(S),N.hasAttribute("name")){const w=N.getAttribute("name");S.name=w,S.urdfName=w,M[w]=S}}),R}function m(x){const E=[...x.children],M=new Xi;return M.name=x.getAttribute("name")||"",E.forEach(R=>{const P=R.nodeName.toLowerCase();if(P==="color"){const L=R.getAttribute("rgba").split(/\s/g).map(N=>parseFloat(N));M.color.setRGB(L[0],L[1],L[2]),M.opacity=L[3],M.transparent=L[3]<1,M.depthWrite=!M.transparent}else if(P==="texture"){const L=R.getAttribute("filename");if(L){const N=new su(a),S=f(L);M.map=N.load(S),M.map.colorSpace=Pe}}}),M}function u(x,E={}){const M=x.nodeName.toLowerCase()==="collision",R=[...x.children];let P=null;const L=R.filter(S=>S.nodeName.toLowerCase()==="material")[0];if(L){const S=L.getAttribute("name");S&&S in E?P=E[S]:P=m(L)}else P=new Xi;const N=M?new J_:new $_;return N.urdfNode=x,R.forEach(S=>{const w=S.nodeName.toLowerCase();if(w==="geometry"){const B=S.children[0].nodeName.toLowerCase();if(B==="mesh"){const C=S.children[0].getAttribute("filename"),z=f(C);if(z!==null){const y=S.children[0].getAttribute("scale");if(y){const W=ki(y);N.scale.set(W[0],W[1],W[2])}r(z,a,(W,H)=>{H?console.error("URDFLoader: Error loading mesh.",H):W&&(W instanceof Te&&(W.material=P),W.position.set(0,0,0),W.quaternion.identity(),N.add(W))})}}else if(B==="box"){const C=new Te;C.geometry=new Gn(1,1,1),C.material=P;const z=ki(S.children[0].getAttribute("size"));C.scale.set(z[0],z[1],z[2]),N.add(C)}else if(B==="sphere"){const C=new Te;C.geometry=new Io(1,30,30),C.material=P;const z=parseFloat(S.children[0].getAttribute("radius"))||0;C.scale.set(z,z,z),N.add(C)}else if(B==="cylinder"){const C=new Te;C.geometry=new Lo(1,1,1,30),C.material=P;const z=parseFloat(S.children[0].getAttribute("radius"))||0,y=parseFloat(S.children[0].getAttribute("length"))||0;C.scale.set(z,y,z),C.rotation.set(Math.PI/2,0,0),N.add(C)}}else if(w==="origin"){const B=ki(S.getAttribute("xyz")),C=ki(S.getAttribute("rpy"));N.position.set(B[0],B[1],B[2]),N.rotation.set(0,0,0),pc(N,C)}}),N}return p(t)}defaultMeshLoader(t,e,n){/\.stl$/i.test(t)?new Y_(e).load(t,s=>{const o=new Te(s,new Xi);n(o)}):/\.dae$/i.test(t)?new Z_(e).load(t,s=>n(s.scene)):console.warn(`URDFLoader: Could not load model at ${t}.
No loader available`)}}function e0(i,t){return new Promise((e,n)=>{i.packages={[t.packageName]:t.packagePath},i.load(t.urdfPath,r=>e(r),void 0,r=>n(r))})}function n0(i){let t="",e="",n="";return i==Tr.OpticalTable&&(t=b_,e=M_,n=S_),{packageName:t,packagePath:e,urdfPath:n}}function i0(i){const t=new iu,e=new t0(t),n=n0(i);return e0(e,n)}const In=class In{constructor(){jt(this,"files");jt(this,"modelMap");jt(this,"robotMap");this.files={textFiles:new Map,binaryFiles:new Map},this.modelMap=new Map,this.robotMap=new Map}static async init(){if(!In.instance){const t=new In;t.files=await k_(),t.modelMap=q_(t.files),t.robotMap.set(Tr.OpticalTable,await i0(Tr.OpticalTable)),In.instance=t}return In.instance}static getInstance(){if(!In.instance)throw new Error("Assets has not been initialized. Call init) first.");return In.instance}getModels(){return this.modelMap}getRobots(){return this.robotMap}getFiles(){return this.files}};jt(In,"instance");let Ps=In;const r0={text:"<Insert Text>",font:"30px Arial",color:"white"};function s0(i,t="30px Arial",e="white"){const n=document.createElement("canvas"),r=n.getContext("2d");r.font=t;const o=r.measureText(i).width,a=Math.ceil(o)+20,l=50;return n.width=a,n.height=l,r.clearRect(0,0,n.width,n.height),r.font=t,r.fillStyle=e,r.textAlign="center",r.textBaseline="middle",r.fillText(i,n.width/2,n.height/2),new tu(n)}function a0(i={}){const t={...r0,...i},e=new ir(2.5,.5),n=new wr({map:s0(t.text,t.font,t.color),transparent:!0});return new Te(e,n)}class Ls{constructor({object:t,playerController:e,armController:n,physicsController:r,nametag:s}){jt(this,"object");jt(this,"playerController");jt(this,"armController");jt(this,"physicsController");jt(this,"nametagMesh");this.object=t,this.playerController=e,this.armController=n,this.physicsController=r,s&&this.setNametag(s)}setNametag(t){this.nametagMesh=a0({text:t,font:"50px Verdana",color:"yellow"})}update(t){var e,n;(e=this.playerController)==null||e.update(this.object,t),(n=this.armController)==null||n.update(t)}updateNameplate(t){if(!this.nametagMesh)return;this.nametagMesh.position.copy(this.object.position).add(new Z(0,1,0));const e=this.nametagMesh.position,n=t.position.clone();n.y=e.y,this.nametagMesh.lookAt(n)}}class o0{constructor(){jt(this,"kinState");jt(this,"rotationSpeed");this.kinState={velocity:new Z,acceleration:new Z},this.rotationSpeed=0}update(t,e){if(this.kinState){const{acceleration:n,velocity:r}=this.kinState,s=new Z(0,0,1);t.getWorldDirection(s);const o=new Z;o.crossVectors(new Z(0,1,0),s).normalize();const a=.025;n.z!==0&&r.add(s.clone().multiplyScalar(n.z*a)),n.x!==0&&r.add(o.clone().multiplyScalar(n.x*a)),t.position.add(r.clone().multiplyScalar(e));const l=1-Math.min(1,5*e);r.multiplyScalar(l),r.lengthSq()<.01**2&&r.set(0,0,0)}t.rotation.y+=this.rotationSpeed*e}handleMove(t){let e=this.kinState.acceleration;const n=10;t.forward?e.z=n:t.backward?e.z=-n:e.z=0,t.left?e.x=n:t.right?e.x=-n:e.x=0}handleRotation(t){this.rotationSpeed=0;const e=2;t.left&&(this.rotationSpeed=-e),t.right&&(this.rotationSpeed=e)}}function l0(i,t){switch(t){case bn.GOTO_A:return{from:i,to:ji.Moving,command:t};case bn.GOTO_B:return{from:i,to:ji.Moving,command:t};case bn.STOP:return{from:i,to:ji.Idle,command:t};default:throw new Error(`Unhandled case: ${t}`)}}class c0{constructor(){jt(this,"state",ji.Idle);jt(this,"command",bn.STOP)}transition(t){const{from:e,to:n,command:r}=l0(this.state,t);return this.state=n,this.command=r,{from:e,to:n,command:r}}getState(){return this.state}getTargetAngle(){return this.command==bn.GOTO_A?-3:this.command==bn.GOTO_B?-1:0}}class u0{constructor(t){jt(this,"table");jt(this,"slideJoint");jt(this,"armFSM");this.table=t,this.slideJoint=t.joints["slide-j"],this.armFSM=new c0}getCurrentAngle(){return this.slideJoint.angle}getArmState(){return this.armFSM.getState()}handleArmCommand(t){this.armFSM.transition(t)}getTargetAngle(){return this.armFSM.getTargetAngle()}update(t){if(this.armFSM.getState()==ji.Idle)return;const e=1,n=this.getCurrentAngle(),r=this.getTargetAngle()-n,s=Math.sign(r)*Math.min(Math.abs(r),e*t);this.slideJoint.setJointValue(n+s),Math.abs(r)<.01&&this.slideJoint.setJointValue(this.getTargetAngle())}}function h0(i){const e=new ii().setFromObject(i.object).min.y;e<y_&&(i.object.position.y-=e)}function d0(){return new ks({color:34850,metalness:.3,roughness:.7})}function f0(){let i=new Ce;const t=new Gn(.5,1,.5),e=d0();let n=new Te(t,e);return i.add(n),i}class p0{constructor(){}createHuman(){const t={object:f0(),playerController:new o0};let e=new Ls(t);const n=Dn.degToRad(180);return e.object.rotateY(n),h0(e),e.object.position.z=-2,e.object.position.x=2,e}createOpticalTable(){let t=Ps.getInstance().getRobots().get(Tr.OpticalTable);const e={object:t,armController:new u0(t)};let n=new Ls(e);return n.object.position.y+=.855,n.object.position.x-=2,n.object.position.z-=.7,n.object.rotation.x=Dn.degToRad(270),n}createActors(){return{player:this.createHuman(),table:this.createOpticalTable()}}}class Hs extends Te{constructor(){const t=Hs.SkyShader,e=new zn({name:t.name,uniforms:Vc.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:qe,depthWrite:!1});super(new Gn(1,1,1),e),this.isSky=!0}}Hs.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new Z},up:{value:new Z(0,1,0)}},vertexShader:`
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

		}`};const m0="modulepreload",g0=function(i){return"/"+i},mc={},_0=function(t,e,n){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(e.map(l=>{if(l=g0(l),l in mc)return;mc[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":m0,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((p,h)=>{f.addEventListener("load",p),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};class v0{constructor(t,e){jt(this,"room");jt(this,"actors");this.room=t,this.actors=e}createSky(){const t=new Hs;t.scale.setScalar(1e4);const e=new Z,n=Dn.degToRad(90),r=Dn.degToRad(0);return e.setFromSphericalCoords(1,n,r),t.material.uniforms.rayleigh.value=.95,t.material.uniforms.mieCoefficient.value=0,t.material.uniforms.mieDirectionalG.value=0,t.material.uniforms.sunPosition.value.copy(e),t}createScene(){const t=new Kc;return x0().forEach(e=>t.add(e)),this.populateScene(t),t.add(this.createSky()),t}populateScene(t){t.add(this.actors.player.object),t.add(this.actors.table.object),t.add(this.room.floor.object),t.add(this.room.cube.object),this.room.cube.nametagMesh&&t.add(this.room.cube.nametagMesh)}}function x0(){const i=new au(16777215,1);i.position.set(5,5,5).normalize();const t=new ou(4210752,.5),e=new Qg(16777215,2236962,.2);return[i,t,e]}const mu=Math.sqrt(3),y0=.5*(mu-1),_r=(3-mu)/6,gc=i=>Math.floor(i)|0,_c=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function b0(i=Math.random){const t=M0(i),e=new Float64Array(t).map(r=>_c[r%12*2]),n=new Float64Array(t).map(r=>_c[r%12*2+1]);return function(s,o){let a=0,l=0,c=0;const d=(s+o)*y0,f=gc(s+d),p=gc(o+d),h=(f+p)*_r,_=f-h,g=p-h,m=s-_,u=o-g;let x,E;m>u?(x=1,E=0):(x=0,E=1);const M=m-x+_r,R=u-E+_r,P=m-1+2*_r,L=u-1+2*_r,N=f&255,S=p&255;let w=.5-m*m-u*u;if(w>=0){const z=N+t[S],y=e[z],W=n[z];w*=w,a=w*w*(y*m+W*u)}let B=.5-M*M-R*R;if(B>=0){const z=N+x+t[S+E],y=e[z],W=n[z];B*=B,l=B*B*(y*M+W*R)}let C=.5-P*P-L*L;if(C>=0){const z=N+1+t[S+1],y=e[z],W=n[z];C*=C,c=C*C*(y*P+W*L)}return 70*(a+l+c)}}function M0(i){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const r=n+~~(i()*(256-n)),s=e[n];e[n]=e[r],e[r]=s}for(let n=256;n<512;n++)e[n]=e[n-256];return e}class xi{static async init(){this.instance||(this.instance=await(await _0(async()=>{const{default:t}=await import("./ammo-CXnAYD2T.js").then(e=>e.a);return{default:t}},[])).default())}static get(){if(!this.instance)throw new Error("Ammo has not been initialized. Call AmmoSingleton.init() first.");return this.instance}}jt(xi,"instance",null);function S0(i){const t=xi.get(),e=new ii().setFromObject(i),n=new Z;e.getSize(n);const r=new t.btVector3(n.x/2,n.y/2,n.z/2);return new t.btBoxShape(r)}function E0(i,t){const e=xi.get(),n=new e.btTransform;n.setIdentity(),n.setOrigin(new e.btVector3(i.position.x,i.position.y,i.position.z));const r=new e.btDefaultMotionState(n),s=S0(i),o=new e.btVector3(0,0,0);t>0&&s.calculateLocalInertia(t,o);const a=new e.btRigidBodyConstructionInfo(t,r,s,o);return new e.btRigidBody(a)}class vc{constructor(t,e,n){jt(this,"body");this.body=E0(t,e),n.addRigidBody(this.body,t)}updateFromPhysics(t){const e=xi.get(),n=new e.btTransform;this.body.getMotionState().getWorldTransform(n);const r=n.getOrigin();t.position.set(r.x(),r.y(),r.z());const s=n.getRotation();t.quaternion.set(s.x(),s.y(),s.z(),s.w())}applyImpulse(t,e){if(!this.body)return;const n=xi.get(),r=new n.btVector3(t.x,t.y,t.z),s=e?new n.btVector3(e.x,e.y,e.z):new n.btVector3(0,0,0);this.body.applyImpulse(r,s)}}function w0(){const i=new ir(10,10),t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");if(e){const o=b0(),a=.01;for(let l=0;l<t.height;l++)for(let c=0;c<t.width;c++){const d=c/t.width-.5,f=l/t.height-.5,p=o(d/a,f/a),h=Math.floor((p+1)*127.5);e.fillStyle=`rgb(${h}, ${h}, ${h})`,e.fillRect(c,l,1,1)}}const n=new tu(t);n.wrapS=Nn,n.wrapT=Nn,n.repeat.set(4,4);const r=new ks({map:n}),s=new Te(i,r);return s.rotation.x=-Math.PI/2,s.position.y=0,s}function T0(){return new ks({color:3447003,metalness:.3,roughness:.7})}class A0{constructor(t){jt(this,"world");this.world=t}createFloor(){let t=w0();const e={object:t,physicsController:new vc(t,0,this.world)};return new Ls(e)}createCube(){const t=new Gn(1,1,1),e=T0(),n=new Te(t,e);n.position.y=.5,n.position.x=1,n.position.z=-4.5;const r={object:n,physicsController:new vc(n,1,this.world),nametag:"TEST"};return new Ls(r)}createRoom(){return{floor:this.createFloor(),cube:this.createCube()}}}function xc(i,t){i.traverse(e=>{e instanceof Te&&e.material&&(Array.isArray(e.material)?e.material.forEach(n=>{n.color.set(t),n.needsUpdate=!0}):(e.material.color.set(t),e.material.needsUpdate=!0))})}class C0{constructor(){jt(this,"world");jt(this,"rigidBodies",[]);jt(this,"objectMap",new Map);jt(this,"nextUserIndex",0);jt(this,"originalMaterials",new Map);jt(this,"collidingObjects",new Set);const t=xi.get();let e=new t.btDefaultCollisionConfiguration,n=new t.btCollisionDispatcher(e),r=new t.btDbvtBroadphase,s=new t.btSequentialImpulseConstraintSolver;this.world=new t.btDiscreteDynamicsWorld(n,r,s,e),this.world.setGravity(new t.btVector3(0,-10,0))}step(t){this.world.stepSimulation(t,10);const n=new Set,r=this.world.getDispatcher(),s=r.getNumManifolds();for(let o=0;o<s;o++){const a=r.getManifoldByIndexInternal(o),l=a.getBody0(),c=a.getBody1(),d=a.getNumContacts();let f=!1;for(let p=0;p<d;p++)a.getContactPoint(p).getDistance()<0&&(f=!0);if(f){const p=this.objectMap.get(l.getUserIndex()),h=this.objectMap.get(c.getUserIndex()),_=new re(.5,.5,.5);p&&(n.add(p),xc(p,_)),h&&(n.add(h),xc(h,_))}}this.collidingObjects.forEach(o=>{n.has(o)||this.restoreOriginalMaterial(o)}),this.collidingObjects=n}storeOriginalMaterial(t){t.traverse(e=>{e instanceof Te&&e.material&&(this.originalMaterials.has(e)||(Array.isArray(e.material)?this.originalMaterials.set(e,e.material.map(n=>n.clone())):this.originalMaterials.set(e,e.material.clone())))})}restoreOriginalMaterial(t){t.traverse(e=>{if(e instanceof Te&&this.originalMaterials.has(e)){const n=this.originalMaterials.get(e);Array.isArray(n)?e.material=n.map(r=>r.clone()):e.material=n.clone(),e.material.needsUpdate=!0}})}addRigidBody(t,e){const n=this.nextUserIndex++;t.setUserIndex(n),this.objectMap.set(n,e),this.rigidBodies.push(t),this.world.addRigidBody(t),this.storeOriginalMaterial(e)}}async function R0(){await xi.init(),await Ps.init()}function P0(){let i=new C0,t=new A0(i).createRoom(),e=new p0().createActors(),n=new v0(t,e).createScene();return new x_(t,e,n,i)}async function L0(){await R0(),P0().runSimulationLoop()}L0();export{w_ as a,D0 as g};
//# sourceMappingURL=index-CRhdzehA.js.map
