var Ul=Object.defineProperty;var Nl=(i,t,e)=>t in i?Ul(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var de=(i,t,e)=>Nl(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ia="170",ri={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fl=0,wa=1,Ol=2,qo=1,Bl=2,nn=3,Mn=0,Ee=1,rn=2,xn=0,si=1,Aa=2,Ra=3,Ca=4,zl=5,Dn=100,kl=101,Hl=102,Vl=103,Gl=104,Wl=200,Xl=201,jl=202,Yl=203,_s=204,gs=205,ql=206,Zl=207,Kl=208,$l=209,Jl=210,Ql=211,tc=212,ec=213,nc=214,vs=0,xs=1,ys=2,ci=3,Ms=4,Ss=5,Es=6,bs=7,ra=0,ic=1,rc=2,yn=0,sc=1,ac=2,oc=3,lc=4,cc=5,hc=6,uc=7,Zo=300,hi=301,ui=302,Ts=303,ws=304,Pr=306,Ui=1e3,In=1001,As=1002,He=1003,dc=1004,Vi=1005,Xe=1006,Nr=1007,Un=1008,ln=1009,Ko=1010,$o=1011,Ni=1012,sa=1013,Fn=1014,sn=1015,Oi=1016,aa=1017,oa=1018,di=1020,Jo=35902,Qo=1021,tl=1022,ke=1023,el=1024,nl=1025,ai=1026,fi=1027,il=1028,la=1029,rl=1030,ca=1031,ha=1033,yr=33776,Mr=33777,Sr=33778,Er=33779,Rs=35840,Cs=35841,Ps=35842,Ds=35843,Ls=36196,Is=37492,Us=37496,Ns=37808,Fs=37809,Os=37810,Bs=37811,zs=37812,ks=37813,Hs=37814,Vs=37815,Gs=37816,Ws=37817,Xs=37818,js=37819,Ys=37820,qs=37821,br=36492,Zs=36494,Ks=36495,sl=36283,$s=36284,Js=36285,Qs=36286,fc=3200,pc=3201,ua=0,mc=1,vn="",Ae="srgb",mi="srgb-linear",Dr="linear",Jt="srgb",Hn=7680,Pa=519,_c=512,gc=513,vc=514,al=515,xc=516,yc=517,Mc=518,Sc=519,Da=35044,La="300 es",an=2e3,wr=2001;class zn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ia=1234567;const oi=Math.PI/180,Fi=180/Math.PI;function _i(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pe[i&255]+pe[i>>8&255]+pe[i>>16&255]+pe[i>>24&255]+"-"+pe[t&255]+pe[t>>8&255]+"-"+pe[t>>16&15|64]+pe[t>>24&255]+"-"+pe[e&63|128]+pe[e>>8&255]+"-"+pe[e>>16&255]+pe[e>>24&255]+pe[n&255]+pe[n>>8&255]+pe[n>>16&255]+pe[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function da(i,t){return(i%t+t)%t}function Ec(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function bc(i,t,e){return i!==t?(e-i)/(t-i):0}function Li(i,t,e){return(1-e)*i+e*t}function Tc(i,t,e,n){return Li(i,t,1-Math.exp(-e*n))}function wc(i,t=1){return t-Math.abs(da(i,t*2)-t)}function Ac(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Rc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Cc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Pc(i,t){return i+Math.random()*(t-i)}function Dc(i){return i*(.5-Math.random())}function Lc(i){i!==void 0&&(Ia=i);let t=Ia+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ic(i){return i*oi}function Uc(i){return i*Fi}function Nc(i){return(i&i-1)===0&&i!==0}function Fc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Oc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bc(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),p=o((t+n)/2),d=s((t-n)/2),m=o((t-n)/2),u=s((n-t)/2),v=o((n-t)/2);switch(r){case"XYX":i.set(a*p,l*d,l*m,a*c);break;case"YZY":i.set(l*m,a*p,l*d,a*c);break;case"ZXZ":i.set(l*d,l*m,a*p,a*c);break;case"XZX":i.set(a*p,l*v,l*u,a*c);break;case"YXY":i.set(l*u,a*p,l*v,a*c);break;case"ZYZ":i.set(l*v,l*u,a*p,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ei(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ol={DEG2RAD:oi,RAD2DEG:Fi,generateUUID:_i,clamp:_e,euclideanModulo:da,mapLinear:Ec,inverseLerp:bc,lerp:Li,damp:Tc,pingpong:wc,smoothstep:Ac,smootherstep:Rc,randInt:Cc,randFloat:Pc,randFloatSpread:Dc,seededRandom:Lc,degToRad:Ic,radToDeg:Uc,isPowerOfTwo:Nc,ceilPowerOfTwo:Fc,floorPowerOfTwo:Oc,setQuaternionFromProperEuler:Bc,normalize:ve,denormalize:ei};class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,r,s,o,a,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const p=this.elements;return p[0]=t,p[1]=r,p[2]=a,p[3]=e,p[4]=s,p[5]=l,p[6]=n,p[7]=o,p[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],p=n[4],d=n[7],m=n[2],u=n[5],v=n[8],_=r[0],f=r[3],h=r[6],M=r[1],E=r[4],S=r[7],L=r[2],D=r[5],A=r[8];return s[0]=o*_+a*M+l*L,s[3]=o*f+a*E+l*D,s[6]=o*h+a*S+l*A,s[1]=c*_+p*M+d*L,s[4]=c*f+p*E+d*D,s[7]=c*h+p*S+d*A,s[2]=m*_+u*M+v*L,s[5]=m*f+u*E+v*D,s[8]=m*h+u*S+v*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],p=t[8];return e*o*p-e*a*c-n*s*p+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],p=t[8],d=p*o-a*c,m=a*l-p*s,u=c*s-o*l,v=e*d+n*m+r*u;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return t[0]=d*_,t[1]=(r*c-p*n)*_,t[2]=(a*n-r*o)*_,t[3]=m*_,t[4]=(p*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fr.makeScale(t,e)),this}rotate(t){return this.premultiply(Fr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fr=new Ht;function ll(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zc(){const i=Ar("canvas");return i.style.display="block",i}const Ua={};function Ri(i){i in Ua||(Ua[i]=!0,console.warn(i))}function kc(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Hc(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Vc(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const jt={enabled:!0,workingColorSpace:mi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Jt&&(i.r=on(i.r),i.g=on(i.g),i.b=on(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Jt&&(i.r=li(i.r),i.g=li(i.g),i.b=li(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vn?Dr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function on(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function li(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Na=[.64,.33,.3,.6,.15,.06],Fa=[.2126,.7152,.0722],Oa=[.3127,.329],Ba=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),za=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[mi]:{primaries:Na,whitePoint:Oa,transfer:Dr,toXYZ:Ba,fromXYZ:za,luminanceCoefficients:Fa,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:Na,whitePoint:Oa,transfer:Jt,toXYZ:Ba,fromXYZ:za,luminanceCoefficients:Fa,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}});let Vn;class Gc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vn===void 0&&(Vn=Ar("canvas")),Vn.width=t.width,Vn.height=t.height;const n=Vn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Vn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ar("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=on(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(on(e[n]/255)*255):e[n]=on(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wc=0;class cl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=_i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Or(r[o].image)):s.push(Or(r[o]))}else s=Or(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Or(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xc=0;class ye extends zn{constructor(t=ye.DEFAULT_IMAGE,e=ye.DEFAULT_MAPPING,n=In,r=In,s=Xe,o=Un,a=ke,l=ln,c=ye.DEFAULT_ANISOTROPY,p=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=_i(),this.name="",this.source=new cl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ui:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case As:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ui:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case As:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ye.DEFAULT_IMAGE=null;ye.DEFAULT_MAPPING=Zo;ye.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,r=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],p=l[4],d=l[8],m=l[1],u=l[5],v=l[9],_=l[2],f=l[6],h=l[10];if(Math.abs(p-m)<.01&&Math.abs(d-_)<.01&&Math.abs(v-f)<.01){if(Math.abs(p+m)<.1&&Math.abs(d+_)<.1&&Math.abs(v+f)<.1&&Math.abs(c+u+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,S=(u+1)/2,L=(h+1)/2,D=(p+m)/4,A=(d+_)/4,N=(v+f)/4;return E>S&&E>L?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=D/n,s=A/n):S>L?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=D/r,s=N/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=A/s,r=N/s),this.set(n,r,s,e),this}let M=Math.sqrt((f-v)*(f-v)+(d-_)*(d-_)+(m-p)*(m-p));return Math.abs(M)<.001&&(M=1),this.x=(f-v)/M,this.y=(d-_)/M,this.z=(m-p)/M,this.w=Math.acos((c+u+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jc extends zn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new ye(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new cl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends jc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class hl extends ye{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=He,this.minFilter=He,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yc extends ye{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=He,this.minFilter=He,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],p=n[r+2],d=n[r+3];const m=s[o+0],u=s[o+1],v=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=p,t[e+3]=d;return}if(a===1){t[e+0]=m,t[e+1]=u,t[e+2]=v,t[e+3]=_;return}if(d!==_||l!==m||c!==u||p!==v){let f=1-a;const h=l*m+c*u+p*v+d*_,M=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const L=Math.sqrt(E),D=Math.atan2(L,h*M);f=Math.sin(f*D)/L,a=Math.sin(a*D)/L}const S=a*M;if(l=l*f+m*S,c=c*f+u*S,p=p*f+v*S,d=d*f+_*S,f===1-a){const L=1/Math.sqrt(l*l+c*c+p*p+d*d);l*=L,c*=L,p*=L,d*=L}}t[e]=l,t[e+1]=c,t[e+2]=p,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],p=n[r+3],d=s[o],m=s[o+1],u=s[o+2],v=s[o+3];return t[e]=a*v+p*d+l*u-c*m,t[e+1]=l*v+p*m+c*d-a*u,t[e+2]=c*v+p*u+a*m-l*d,t[e+3]=p*v-a*d-l*m-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),p=a(r/2),d=a(s/2),m=l(n/2),u=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=m*p*d+c*u*v,this._y=c*u*d-m*p*v,this._z=c*p*v+m*u*d,this._w=c*p*d-m*u*v;break;case"YXZ":this._x=m*p*d+c*u*v,this._y=c*u*d-m*p*v,this._z=c*p*v-m*u*d,this._w=c*p*d+m*u*v;break;case"ZXY":this._x=m*p*d-c*u*v,this._y=c*u*d+m*p*v,this._z=c*p*v+m*u*d,this._w=c*p*d-m*u*v;break;case"ZYX":this._x=m*p*d-c*u*v,this._y=c*u*d+m*p*v,this._z=c*p*v-m*u*d,this._w=c*p*d+m*u*v;break;case"YZX":this._x=m*p*d+c*u*v,this._y=c*u*d+m*p*v,this._z=c*p*v-m*u*d,this._w=c*p*d-m*u*v;break;case"XZY":this._x=m*p*d-c*u*v,this._y=c*u*d-m*p*v,this._z=c*p*v+m*u*d,this._w=c*p*d+m*u*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],p=e[6],d=e[10],m=n+a+d;if(m>0){const u=.5/Math.sqrt(m+1);this._w=.25/u,this._x=(p-l)*u,this._y=(s-c)*u,this._z=(o-r)*u}else if(n>a&&n>d){const u=2*Math.sqrt(1+n-a-d);this._w=(p-l)/u,this._x=.25*u,this._y=(r+o)/u,this._z=(s+c)/u}else if(a>d){const u=2*Math.sqrt(1+a-n-d);this._w=(s-c)/u,this._x=(r+o)/u,this._y=.25*u,this._z=(l+p)/u}else{const u=2*Math.sqrt(1+d-n-a);this._w=(o-r)/u,this._x=(s+c)/u,this._y=(l+p)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,p=e._w;return this._x=n*p+o*a+r*c-s*l,this._y=r*p+o*l+s*a-n*c,this._z=s*p+o*c+n*l-r*a,this._w=o*p-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*r+e*this._y,this._z=u*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),p=Math.atan2(c,a),d=Math.sin((1-e)*p)/c,m=Math.sin(e*p)/c;return this._w=o*d+this._w*m,this._x=n*d+this._x*m,this._y=r*d+this._y*m,this._z=s*d+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,e=0,n=0){K.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ka.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ka.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),p=2*(a*e-s*r),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*p,this.y=n+l*p+a*c-s*d,this.z=r+l*d+s*p-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Br.copy(this).projectOnVector(t),this.sub(Br)}reflect(t){return this.sub(Br.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Br=new K,ka=new Bn;class gi{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Oe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Oe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Oe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Oe):Oe.fromBufferAttribute(s,o),Oe.applyMatrix4(t.matrixWorld),this.expandByPoint(Oe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gi.copy(n.boundingBox)),Gi.applyMatrix4(t.matrixWorld),this.union(Gi)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oe),Oe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Si),Wi.subVectors(this.max,Si),Gn.subVectors(t.a,Si),Wn.subVectors(t.b,Si),Xn.subVectors(t.c,Si),un.subVectors(Wn,Gn),dn.subVectors(Xn,Wn),bn.subVectors(Gn,Xn);let e=[0,-un.z,un.y,0,-dn.z,dn.y,0,-bn.z,bn.y,un.z,0,-un.x,dn.z,0,-dn.x,bn.z,0,-bn.x,-un.y,un.x,0,-dn.y,dn.x,0,-bn.y,bn.x,0];return!zr(e,Gn,Wn,Xn,Wi)||(e=[1,0,0,0,1,0,0,0,1],!zr(e,Gn,Wn,Xn,Wi))?!1:(Xi.crossVectors(un,dn),e=[Xi.x,Xi.y,Xi.z],zr(e,Gn,Wn,Xn,Wi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ke[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ke[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ke[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ke[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ke[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ke[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ke[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ke[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ke),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ke=[new K,new K,new K,new K,new K,new K,new K,new K],Oe=new K,Gi=new gi,Gn=new K,Wn=new K,Xn=new K,un=new K,dn=new K,bn=new K,Si=new K,Wi=new K,Xi=new K,Tn=new K;function zr(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Tn.fromArray(i,s);const a=r.x*Math.abs(Tn.x)+r.y*Math.abs(Tn.y)+r.z*Math.abs(Tn.z),l=t.dot(Tn),c=e.dot(Tn),p=n.dot(Tn);if(Math.max(-Math.max(l,c,p),Math.min(l,c,p))>a)return!1}return!0}const qc=new gi,Ei=new K,kr=new K;class Bi{constructor(t=new K,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):qc.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ei.subVectors(t,this.center);const e=Ei.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ei,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ei.copy(t.center).add(kr)),this.expandByPoint(Ei.copy(t.center).sub(kr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $e=new K,Hr=new K,ji=new K,fn=new K,Vr=new K,Yi=new K,Gr=new K;class Lr{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$e)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$e.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($e.copy(this.origin).addScaledVector(this.direction,e),$e.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Hr.copy(t).add(e).multiplyScalar(.5),ji.copy(e).sub(t).normalize(),fn.copy(this.origin).sub(Hr);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ji),a=fn.dot(this.direction),l=-fn.dot(ji),c=fn.lengthSq(),p=Math.abs(1-o*o);let d,m,u,v;if(p>0)if(d=o*l-a,m=o*a-l,v=s*p,d>=0)if(m>=-v)if(m<=v){const _=1/p;d*=_,m*=_,u=d*(d+o*m+2*a)+m*(o*d+m+2*l)+c}else m=s,d=Math.max(0,-(o*m+a)),u=-d*d+m*(m+2*l)+c;else m=-s,d=Math.max(0,-(o*m+a)),u=-d*d+m*(m+2*l)+c;else m<=-v?(d=Math.max(0,-(-o*s+a)),m=d>0?-s:Math.min(Math.max(-s,-l),s),u=-d*d+m*(m+2*l)+c):m<=v?(d=0,m=Math.min(Math.max(-s,-l),s),u=m*(m+2*l)+c):(d=Math.max(0,-(o*s+a)),m=d>0?s:Math.min(Math.max(-s,-l),s),u=-d*d+m*(m+2*l)+c);else m=o>0?-s:s,d=Math.max(0,-(o*m+a)),u=-d*d+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Hr).addScaledVector(ji,m),u}intersectSphere(t,e){$e.subVectors(t.center,this.origin);const n=$e.dot(this.direction),r=$e.dot($e)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,p=1/this.direction.y,d=1/this.direction.z,m=this.origin;return c>=0?(n=(t.min.x-m.x)*c,r=(t.max.x-m.x)*c):(n=(t.max.x-m.x)*c,r=(t.min.x-m.x)*c),p>=0?(s=(t.min.y-m.y)*p,o=(t.max.y-m.y)*p):(s=(t.max.y-m.y)*p,o=(t.min.y-m.y)*p),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-m.z)*d,l=(t.max.z-m.z)*d):(a=(t.max.z-m.z)*d,l=(t.min.z-m.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,$e)!==null}intersectTriangle(t,e,n,r,s){Vr.subVectors(e,t),Yi.subVectors(n,t),Gr.crossVectors(Vr,Yi);let o=this.direction.dot(Gr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fn.subVectors(this.origin,t);const l=a*this.direction.dot(Yi.crossVectors(fn,Yi));if(l<0)return null;const c=a*this.direction.dot(Vr.cross(fn));if(c<0||l+c>o)return null;const p=-a*fn.dot(Gr);return p<0?null:this.at(p/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,r,s,o,a,l,c,p,d,m,u,v,_,f){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,p,d,m,u,v,_,f)}set(t,e,n,r,s,o,a,l,c,p,d,m,u,v,_,f){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=p,h[10]=d,h[14]=m,h[3]=u,h[7]=v,h[11]=_,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/jn.setFromMatrixColumn(t,0).length(),s=1/jn.setFromMatrixColumn(t,1).length(),o=1/jn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),p=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const m=o*p,u=o*d,v=a*p,_=a*d;e[0]=l*p,e[4]=-l*d,e[8]=c,e[1]=u+v*c,e[5]=m-_*c,e[9]=-a*l,e[2]=_-m*c,e[6]=v+u*c,e[10]=o*l}else if(t.order==="YXZ"){const m=l*p,u=l*d,v=c*p,_=c*d;e[0]=m+_*a,e[4]=v*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*p,e[9]=-a,e[2]=u*a-v,e[6]=_+m*a,e[10]=o*l}else if(t.order==="ZXY"){const m=l*p,u=l*d,v=c*p,_=c*d;e[0]=m-_*a,e[4]=-o*d,e[8]=v+u*a,e[1]=u+v*a,e[5]=o*p,e[9]=_-m*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const m=o*p,u=o*d,v=a*p,_=a*d;e[0]=l*p,e[4]=v*c-u,e[8]=m*c+_,e[1]=l*d,e[5]=_*c+m,e[9]=u*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const m=o*l,u=o*c,v=a*l,_=a*c;e[0]=l*p,e[4]=_-m*d,e[8]=v*d+u,e[1]=d,e[5]=o*p,e[9]=-a*p,e[2]=-c*p,e[6]=u*d+v,e[10]=m-_*d}else if(t.order==="XZY"){const m=o*l,u=o*c,v=a*l,_=a*c;e[0]=l*p,e[4]=-d,e[8]=c*p,e[1]=m*d+_,e[5]=o*p,e[9]=u*d-v,e[2]=v*d-u,e[6]=a*p,e[10]=_*d+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zc,t,Kc)}lookAt(t,e,n){const r=this.elements;return Te.subVectors(t,e),Te.lengthSq()===0&&(Te.z=1),Te.normalize(),pn.crossVectors(n,Te),pn.lengthSq()===0&&(Math.abs(n.z)===1?Te.x+=1e-4:Te.z+=1e-4,Te.normalize(),pn.crossVectors(n,Te)),pn.normalize(),qi.crossVectors(Te,pn),r[0]=pn.x,r[4]=qi.x,r[8]=Te.x,r[1]=pn.y,r[5]=qi.y,r[9]=Te.y,r[2]=pn.z,r[6]=qi.z,r[10]=Te.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],p=n[1],d=n[5],m=n[9],u=n[13],v=n[2],_=n[6],f=n[10],h=n[14],M=n[3],E=n[7],S=n[11],L=n[15],D=r[0],A=r[4],N=r[8],b=r[12],T=r[1],F=r[5],R=r[9],U=r[13],y=r[2],B=r[6],nt=r[10],k=r[14],J=r[3],tt=r[7],lt=r[11],H=r[15];return s[0]=o*D+a*T+l*y+c*J,s[4]=o*A+a*F+l*B+c*tt,s[8]=o*N+a*R+l*nt+c*lt,s[12]=o*b+a*U+l*k+c*H,s[1]=p*D+d*T+m*y+u*J,s[5]=p*A+d*F+m*B+u*tt,s[9]=p*N+d*R+m*nt+u*lt,s[13]=p*b+d*U+m*k+u*H,s[2]=v*D+_*T+f*y+h*J,s[6]=v*A+_*F+f*B+h*tt,s[10]=v*N+_*R+f*nt+h*lt,s[14]=v*b+_*U+f*k+h*H,s[3]=M*D+E*T+S*y+L*J,s[7]=M*A+E*F+S*B+L*tt,s[11]=M*N+E*R+S*nt+L*lt,s[15]=M*b+E*U+S*k+L*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],p=t[2],d=t[6],m=t[10],u=t[14],v=t[3],_=t[7],f=t[11],h=t[15];return v*(+s*l*d-r*c*d-s*a*m+n*c*m+r*a*u-n*l*u)+_*(+e*l*u-e*c*m+s*o*m-r*o*u+r*c*p-s*l*p)+f*(+e*c*d-e*a*u-s*o*d+n*o*u+s*a*p-n*c*p)+h*(-r*a*p-e*l*d+e*a*m+r*o*d-n*o*m+n*l*p)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],p=t[8],d=t[9],m=t[10],u=t[11],v=t[12],_=t[13],f=t[14],h=t[15],M=d*f*c-_*m*c+_*l*u-a*f*u-d*l*h+a*m*h,E=v*m*c-p*f*c-v*l*u+o*f*u+p*l*h-o*m*h,S=p*_*c-v*d*c+v*a*u-o*_*u-p*a*h+o*d*h,L=v*d*l-p*_*l-v*a*m+o*_*m+p*a*f-o*d*f,D=e*M+n*E+r*S+s*L;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/D;return t[0]=M*A,t[1]=(_*m*s-d*f*s-_*r*u+n*f*u+d*r*h-n*m*h)*A,t[2]=(a*f*s-_*l*s+_*r*c-n*f*c-a*r*h+n*l*h)*A,t[3]=(d*l*s-a*m*s-d*r*c+n*m*c+a*r*u-n*l*u)*A,t[4]=E*A,t[5]=(p*f*s-v*m*s+v*r*u-e*f*u-p*r*h+e*m*h)*A,t[6]=(v*l*s-o*f*s-v*r*c+e*f*c+o*r*h-e*l*h)*A,t[7]=(o*m*s-p*l*s+p*r*c-e*m*c-o*r*u+e*l*u)*A,t[8]=S*A,t[9]=(v*d*s-p*_*s-v*n*u+e*_*u+p*n*h-e*d*h)*A,t[10]=(o*_*s-v*a*s+v*n*c-e*_*c-o*n*h+e*a*h)*A,t[11]=(p*a*s-o*d*s-p*n*c+e*d*c+o*n*u-e*a*u)*A,t[12]=L*A,t[13]=(p*_*r-v*d*r+v*n*m-e*_*m-p*n*f+e*d*f)*A,t[14]=(v*a*r-o*_*r-v*n*l+e*_*l+o*n*f-e*a*f)*A,t[15]=(o*d*r-p*a*r+p*n*l-e*d*l-o*n*m+e*a*m)*A,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,p=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,p*a+n,p*l-r*o,0,c*l-r*a,p*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,p=o+o,d=a+a,m=s*c,u=s*p,v=s*d,_=o*p,f=o*d,h=a*d,M=l*c,E=l*p,S=l*d,L=n.x,D=n.y,A=n.z;return r[0]=(1-(_+h))*L,r[1]=(u+S)*L,r[2]=(v-E)*L,r[3]=0,r[4]=(u-S)*D,r[5]=(1-(m+h))*D,r[6]=(f+M)*D,r[7]=0,r[8]=(v+E)*A,r[9]=(f-M)*A,r[10]=(1-(m+_))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=jn.set(r[0],r[1],r[2]).length();const o=jn.set(r[4],r[5],r[6]).length(),a=jn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Be.copy(this);const c=1/s,p=1/o,d=1/a;return Be.elements[0]*=c,Be.elements[1]*=c,Be.elements[2]*=c,Be.elements[4]*=p,Be.elements[5]*=p,Be.elements[6]*=p,Be.elements[8]*=d,Be.elements[9]*=d,Be.elements[10]*=d,e.setFromRotationMatrix(Be),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=an){const l=this.elements,c=2*s/(e-t),p=2*s/(n-r),d=(e+t)/(e-t),m=(n+r)/(n-r);let u,v;if(a===an)u=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===wr)u=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=p,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=an){const l=this.elements,c=1/(e-t),p=1/(n-r),d=1/(o-s),m=(e+t)*c,u=(n+r)*p;let v,_;if(a===an)v=(o+s)*d,_=-2*d;else if(a===wr)v=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*p,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const jn=new K,Be=new ie,Zc=new K(0,0,0),Kc=new K(1,1,1),pn=new K,qi=new K,Te=new K,Ha=new ie,Va=new Bn;class Ve{constructor(t=0,e=0,n=0,r=Ve.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],p=r[9],d=r[2],m=r[6],u=r[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-p,u),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(_e(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-p,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ha.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ha,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Va.setFromEuler(this),this.setFromQuaternion(Va,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ve.DEFAULT_ORDER="XYZ";class ul{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $c=0;const Ga=new K,Yn=new Bn,Je=new ie,Zi=new K,bi=new K,Jc=new K,Qc=new Bn,Wa=new K(1,0,0),Xa=new K(0,1,0),ja=new K(0,0,1),Ya={type:"added"},th={type:"removed"},qn={type:"childadded",child:null},Wr={type:"childremoved",child:null};class ue extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new K,e=new Ve,n=new Bn,r=new K(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ie},normalMatrix:{value:new Ht}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yn.setFromAxisAngle(t,e),this.quaternion.multiply(Yn),this}rotateOnWorldAxis(t,e){return Yn.setFromAxisAngle(t,e),this.quaternion.premultiply(Yn),this}rotateX(t){return this.rotateOnAxis(Wa,t)}rotateY(t){return this.rotateOnAxis(Xa,t)}rotateZ(t){return this.rotateOnAxis(ja,t)}translateOnAxis(t,e){return Ga.copy(t).applyQuaternion(this.quaternion),this.position.add(Ga.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wa,t)}translateY(t){return this.translateOnAxis(Xa,t)}translateZ(t){return this.translateOnAxis(ja,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Je.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zi.copy(t):Zi.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Je.lookAt(bi,Zi,this.up):Je.lookAt(Zi,bi,this.up),this.quaternion.setFromRotationMatrix(Je),r&&(Je.extractRotation(r.matrixWorld),Yn.setFromRotationMatrix(Je),this.quaternion.premultiply(Yn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ya),qn.child=t,this.dispatchEvent(qn),qn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(th),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Je.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Je.multiply(t.parent.matrixWorld)),t.applyMatrix4(Je),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ya),qn.child=t,this.dispatchEvent(qn),qn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,t,Jc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,Qc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,p=l.length;c<p;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),p=o(t.images),d=o(t.shapes),m=o(t.skeletons),u=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),p.length>0&&(n.images=p),d.length>0&&(n.shapes=d),m.length>0&&(n.skeletons=m),u.length>0&&(n.animations=u),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const c in a){const p=a[c];delete p.metadata,l.push(p)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ue.DEFAULT_UP=new K(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ze=new K,Qe=new K,Xr=new K,tn=new K,Zn=new K,Kn=new K,qa=new K,jr=new K,Yr=new K,qr=new K,Zr=new se,Kr=new se,$r=new se;class Ie{constructor(t=new K,e=new K,n=new K){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ze.subVectors(t,e),r.cross(ze);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){ze.subVectors(r,e),Qe.subVectors(n,e),Xr.subVectors(t,e);const o=ze.dot(ze),a=ze.dot(Qe),l=ze.dot(Xr),c=Qe.dot(Qe),p=Qe.dot(Xr),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const m=1/d,u=(c*l-a*p)*m,v=(o*p-a*l)*m;return s.set(1-u-v,v,u)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,tn.x),l.addScaledVector(o,tn.y),l.addScaledVector(a,tn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Zr.setScalar(0),Kr.setScalar(0),$r.setScalar(0),Zr.fromBufferAttribute(t,e),Kr.fromBufferAttribute(t,n),$r.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Zr,s.x),o.addScaledVector(Kr,s.y),o.addScaledVector($r,s.z),o}static isFrontFacing(t,e,n,r){return ze.subVectors(n,e),Qe.subVectors(t,e),ze.cross(Qe).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ze.subVectors(this.c,this.b),Qe.subVectors(this.a,this.b),ze.cross(Qe).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ie.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ie.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Ie.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ie.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ie.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Zn.subVectors(r,n),Kn.subVectors(s,n),jr.subVectors(t,n);const l=Zn.dot(jr),c=Kn.dot(jr);if(l<=0&&c<=0)return e.copy(n);Yr.subVectors(t,r);const p=Zn.dot(Yr),d=Kn.dot(Yr);if(p>=0&&d<=p)return e.copy(r);const m=l*d-p*c;if(m<=0&&l>=0&&p<=0)return o=l/(l-p),e.copy(n).addScaledVector(Zn,o);qr.subVectors(t,s);const u=Zn.dot(qr),v=Kn.dot(qr);if(v>=0&&u<=v)return e.copy(s);const _=u*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(n).addScaledVector(Kn,a);const f=p*v-u*d;if(f<=0&&d-p>=0&&u-v>=0)return qa.subVectors(s,r),a=(d-p)/(d-p+(u-v)),e.copy(r).addScaledVector(qa,a);const h=1/(f+_+m);return o=_*h,a=m*h,e.copy(n).addScaledVector(Zn,o).addScaledVector(Kn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function Jr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=jt.workingColorSpace){if(t=da(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Jr(o,s,t+1/3),this.g=Jr(o,s,t),this.b=Jr(o,s,t-1/3)}return jt.toWorkingColorSpace(this,r),this}setStyle(t,e=Ae){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){const n=dl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=on(t.r),this.g=on(t.g),this.b=on(t.b),this}copyLinearToSRGB(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return jt.fromWorkingColorSpace(me.copy(this),t),Math.round(_e(me.r*255,0,255))*65536+Math.round(_e(me.g*255,0,255))*256+Math.round(_e(me.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(me.copy(this),e);const n=me.r,r=me.g,s=me.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const p=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=p<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=p,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(me.copy(this),e),t.r=me.r,t.g=me.g,t.b=me.b,t}getStyle(t=Ae){jt.fromWorkingColorSpace(me.copy(this),t);const e=me.r,n=me.g,r=me.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(mn),this.setHSL(mn.h+t,mn.s+e,mn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mn),t.getHSL(Ki);const n=Li(mn.h,Ki.h,e),r=Li(mn.s,Ki.s,e),s=Li(mn.l,Ki.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const me=new Wt;Wt.NAMES=dl;let eh=0;class Ye extends zn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=_i(),this.name="",this.blending=si,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_s,this.blendDst=gs,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hn,this.stencilZFail=Hn,this.stencilZPass=Hn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_s&&(n.blendSrc=this.blendSrc),this.blendDst!==gs&&(n.blendDst=this.blendDst),this.blendEquation!==Dn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fa extends Ye{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ve,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ae=new K,$i=new Bt;class je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Da,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$i.fromBufferAttribute(this,e),$i.applyMatrix3(t),this.setXY(e,$i.x,$i.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),r=ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),r=ve(r,this.array),s=ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Da&&(t.usage=this.usage),t}}class fl extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class pl extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ge extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let nh=0;const Pe=new ie,Qr=new ue,$n=new K,we=new gi,Ti=new gi,he=new K;class Ue extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ll(t)?pl:fl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pe.makeRotationFromQuaternion(t),this.applyMatrix4(Pe),this}rotateX(t){return Pe.makeRotationX(t),this.applyMatrix4(Pe),this}rotateY(t){return Pe.makeRotationY(t),this.applyMatrix4(Pe),this}rotateZ(t){return Pe.makeRotationZ(t),this.applyMatrix4(Pe),this}translate(t,e,n){return Pe.makeTranslation(t,e,n),this.applyMatrix4(Pe),this}scale(t,e,n){return Pe.makeScale(t,e,n),this.applyMatrix4(Pe),this}lookAt(t){return Qr.lookAt(t),Qr.updateMatrix(),this.applyMatrix4(Qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($n).negate(),this.translate($n.x,$n.y,$n.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ge(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];we.setFromBufferAttribute(s),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,we.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,we.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(we.min),this.boundingBox.expandByPoint(we.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const n=this.boundingSphere.center;if(we.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ti.setFromBufferAttribute(a),this.morphTargetsRelative?(he.addVectors(we.min,Ti.min),we.expandByPoint(he),he.addVectors(we.max,Ti.max),we.expandByPoint(he)):(we.expandByPoint(Ti.min),we.expandByPoint(Ti.max))}we.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)he.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(he));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,p=a.count;c<p;c++)he.fromBufferAttribute(a,c),l&&($n.fromBufferAttribute(t,c),he.add($n)),r=Math.max(r,n.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new K,l[N]=new K;const c=new K,p=new K,d=new K,m=new Bt,u=new Bt,v=new Bt,_=new K,f=new K;function h(N,b,T){c.fromBufferAttribute(n,N),p.fromBufferAttribute(n,b),d.fromBufferAttribute(n,T),m.fromBufferAttribute(s,N),u.fromBufferAttribute(s,b),v.fromBufferAttribute(s,T),p.sub(c),d.sub(c),u.sub(m),v.sub(m);const F=1/(u.x*v.y-v.x*u.y);isFinite(F)&&(_.copy(p).multiplyScalar(v.y).addScaledVector(d,-u.y).multiplyScalar(F),f.copy(d).multiplyScalar(u.x).addScaledVector(p,-v.x).multiplyScalar(F),a[N].add(_),a[b].add(_),a[T].add(_),l[N].add(f),l[b].add(f),l[T].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let N=0,b=M.length;N<b;++N){const T=M[N],F=T.start,R=T.count;for(let U=F,y=F+R;U<y;U+=3)h(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const E=new K,S=new K,L=new K,D=new K;function A(N){L.fromBufferAttribute(r,N),D.copy(L);const b=a[N];E.copy(b),E.sub(L.multiplyScalar(L.dot(b))).normalize(),S.crossVectors(D,b);const F=S.dot(l[N])<0?-1:1;o.setXYZW(N,E.x,E.y,E.z,F)}for(let N=0,b=M.length;N<b;++N){const T=M[N],F=T.start,R=T.count;for(let U=F,y=F+R;U<y;U+=3)A(t.getX(U+0)),A(t.getX(U+1)),A(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,u=n.count;m<u;m++)n.setXYZ(m,0,0,0);const r=new K,s=new K,o=new K,a=new K,l=new K,c=new K,p=new K,d=new K;if(t)for(let m=0,u=t.count;m<u;m+=3){const v=t.getX(m+0),_=t.getX(m+1),f=t.getX(m+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,f),p.subVectors(o,s),d.subVectors(r,s),p.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),a.add(p),l.add(p),c.add(p),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let m=0,u=e.count;m<u;m+=3)r.fromBufferAttribute(e,m+0),s.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),p.subVectors(o,s),d.subVectors(r,s),p.cross(d),n.setXYZ(m+0,p.x,p.y,p.z),n.setXYZ(m+1,p.x,p.y,p.z),n.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(a,l){const c=a.array,p=a.itemSize,d=a.normalized,m=new c.constructor(l.length*p);let u=0,v=0;for(let _=0,f=l.length;_<f;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*p;for(let h=0;h<p;h++)m[v++]=c[u++]}return new je(m,p,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let p=0,d=c.length;p<d;p++){const m=c[p],u=t(m,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],p=[];for(let d=0,m=c.length;d<m;d++){const u=c[d];p.push(u.toJSON(t.data))}p.length>0&&(r[l]=p,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const p=r[c];this.setAttribute(c,p.clone(e))}const s=t.morphAttributes;for(const c in s){const p=[],d=s[c];for(let m=0,u=d.length;m<u;m++)p.push(d[m].clone(e));this.morphAttributes[c]=p}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,p=o.length;c<p;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Za=new ie,wn=new Lr,Ji=new Bi,Ka=new K,Qi=new K,tr=new K,er=new K,ts=new K,nr=new K,$a=new K,ir=new K;class Re extends ue{constructor(t=new Ue,e=new fa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){nr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const p=a[l],d=s[l];p!==0&&(ts.fromBufferAttribute(d,t),o?nr.addScaledVector(ts,p):nr.addScaledVector(ts.sub(e),p))}e.add(nr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere),Ji.applyMatrix4(s),wn.copy(t.ray).recast(t.near),!(Ji.containsPoint(wn.origin)===!1&&(wn.intersectSphere(Ji,Ka)===null||wn.origin.distanceToSquared(Ka)>(t.far-t.near)**2))&&(Za.copy(s).invert(),wn.copy(t.ray).applyMatrix4(Za),!(n.boundingBox!==null&&wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,p=s.attributes.uv1,d=s.attributes.normal,m=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=m.length;v<_;v++){const f=m[v],h=o[f.materialIndex],M=Math.max(f.start,u.start),E=Math.min(a.count,Math.min(f.start+f.count,u.start+u.count));for(let S=M,L=E;S<L;S+=3){const D=a.getX(S),A=a.getX(S+1),N=a.getX(S+2);r=rr(this,h,t,n,c,p,d,D,A,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const v=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let f=v,h=_;f<h;f+=3){const M=a.getX(f),E=a.getX(f+1),S=a.getX(f+2);r=rr(this,o,t,n,c,p,d,M,E,S),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=m.length;v<_;v++){const f=m[v],h=o[f.materialIndex],M=Math.max(f.start,u.start),E=Math.min(l.count,Math.min(f.start+f.count,u.start+u.count));for(let S=M,L=E;S<L;S+=3){const D=S,A=S+1,N=S+2;r=rr(this,h,t,n,c,p,d,D,A,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const v=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let f=v,h=_;f<h;f+=3){const M=f,E=f+1,S=f+2;r=rr(this,o,t,n,c,p,d,M,E,S),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}}function ih(i,t,e,n,r,s,o,a){let l;if(t.side===Ee?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Mn,a),l===null)return null;ir.copy(a),ir.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ir);return c<e.near||c>e.far?null:{distance:c,point:ir.clone(),object:i}}function rr(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Qi),i.getVertexPosition(l,tr),i.getVertexPosition(c,er);const p=ih(i,t,e,n,Qi,tr,er,$a);if(p){const d=new K;Ie.getBarycoord($a,Qi,tr,er,d),r&&(p.uv=Ie.getInterpolatedAttribute(r,a,l,c,d,new Bt)),s&&(p.uv1=Ie.getInterpolatedAttribute(s,a,l,c,d,new Bt)),o&&(p.normal=Ie.getInterpolatedAttribute(o,a,l,c,d,new K),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const m={a,b:l,c,normal:new K,materialIndex:0};Ie.getNormal(Qi,tr,er,m.normal),p.face=m,p.barycoord=d}return p}class vi extends Ue{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],p=[],d=[];let m=0,u=0;v("z","y","x",-1,-1,n,e,t,o,s,0),v("z","y","x",1,-1,n,e,-t,o,s,1),v("x","z","y",1,1,t,n,e,r,o,2),v("x","z","y",1,-1,t,n,-e,r,o,3),v("x","y","z",1,-1,t,e,n,r,s,4),v("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(p,3)),this.setAttribute("uv",new ge(d,2));function v(_,f,h,M,E,S,L,D,A,N,b){const T=S/A,F=L/N,R=S/2,U=L/2,y=D/2,B=A+1,nt=N+1;let k=0,J=0;const tt=new K;for(let lt=0;lt<nt;lt++){const H=lt*F-U;for(let W=0;W<B;W++){const _t=W*T-R;tt[_]=_t*M,tt[f]=H*E,tt[h]=y,c.push(tt.x,tt.y,tt.z),tt[_]=0,tt[f]=0,tt[h]=D>0?1:-1,p.push(tt.x,tt.y,tt.z),d.push(W/A),d.push(1-lt/N),k+=1}}for(let lt=0;lt<N;lt++)for(let H=0;H<A;H++){const W=m+H+B*lt,_t=m+H+B*(lt+1),X=m+(H+1)+B*(lt+1),Q=m+(H+1)+B*lt;l.push(W,_t,Q),l.push(_t,X,Q),J+=6}a.addGroup(u,J,b),u+=J,m+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function pi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function xe(i){const t={};for(let e=0;e<i.length;e++){const n=pi(i[e]);for(const r in n)t[r]=n[r]}return t}function rh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ml(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const sh={clone:pi,merge:xe};var ah=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends Ye{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ah,this.fragmentShader=oh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pi(t.uniforms),this.uniformsGroups=rh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class _l extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=an}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _n=new K,Ja=new Bt,Qa=new Bt;class Le extends _l{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(oi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fi*2*Math.atan(Math.tan(oi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_n.x,_n.y).multiplyScalar(-t/_n.z),_n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_n.x,_n.y).multiplyScalar(-t/_n.z)}getViewSize(t,e){return this.getViewBounds(t,Ja,Qa),e.subVectors(Qa,Ja)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(oi*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Jn=-90,Qn=1;class lh extends ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Le(Jn,Qn,t,e);r.layers=this.layers,this.add(r);const s=new Le(Jn,Qn,t,e);s.layers=this.layers,this.add(s);const o=new Le(Jn,Qn,t,e);o.layers=this.layers,this.add(o);const a=new Le(Jn,Qn,t,e);a.layers=this.layers,this.add(a);const l=new Le(Jn,Qn,t,e);l.layers=this.layers,this.add(l);const c=new Le(Jn,Qn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===an)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,p]=this.children,d=t.getRenderTarget(),m=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,p),t.setRenderTarget(d,m,u),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class gl extends ye{constructor(t,e,n,r,s,o,a,l,c,p){t=t!==void 0?t:[],e=e!==void 0?e:hi,super(t,e,n,r,s,o,a,l,c,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ch extends On{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new gl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vi(5,5,5),s=new Sn({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ee,blending:xn});s.uniforms.tEquirect.value=e;const o=new Re(r,s),a=e.minFilter;return e.minFilter===Un&&(e.minFilter=Xe),new lh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const es=new K,hh=new K,uh=new Ht;class gn{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=es.subVectors(n,e).cross(hh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(es),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||uh.getNormalMatrix(t),r=this.coplanarPoint(es).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const An=new Bi,sr=new K;class pa{constructor(t=new gn,e=new gn,n=new gn,r=new gn,s=new gn,o=new gn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=an){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],p=r[5],d=r[6],m=r[7],u=r[8],v=r[9],_=r[10],f=r[11],h=r[12],M=r[13],E=r[14],S=r[15];if(n[0].setComponents(l-s,m-c,f-u,S-h).normalize(),n[1].setComponents(l+s,m+c,f+u,S+h).normalize(),n[2].setComponents(l+o,m+p,f+v,S+M).normalize(),n[3].setComponents(l-o,m-p,f-v,S-M).normalize(),n[4].setComponents(l-a,m-d,f-_,S-E).normalize(),e===an)n[5].setComponents(l+a,m+d,f+_,S+E).normalize();else if(e===wr)n[5].setComponents(a,d,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),An.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),An.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(An)}intersectsSprite(t){return An.center.set(0,0,0),An.radius=.7071067811865476,An.applyMatrix4(t.matrixWorld),this.intersectsSphere(An)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(sr.x=r.normal.x>0?t.max.x:t.min.x,sr.y=r.normal.y>0?t.max.y:t.min.y,sr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(sr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vl(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function dh(i){const t=new WeakMap;function e(a,l){const c=a.array,p=a.usage,d=c.byteLength,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,c,p),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const p=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,p);else{d.sort((u,v)=>u.start-v.start);let m=0;for(let u=1;u<d.length;u++){const v=d[m],_=d[u];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++m,d[m]=_)}d.length=m+1;for(let u=0,v=d.length;u<v;u++){const _=d[u];i.bufferSubData(c,_.start*p.BYTES_PER_ELEMENT,p,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const p=t.get(a);(!p||p.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class zi extends Ue{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,p=l+1,d=t/a,m=e/l,u=[],v=[],_=[],f=[];for(let h=0;h<p;h++){const M=h*m-o;for(let E=0;E<c;E++){const S=E*d-s;v.push(S,-M,0),_.push(0,0,1),f.push(E/a),f.push(1-h/l)}}for(let h=0;h<l;h++)for(let M=0;M<a;M++){const E=M+c*h,S=M+c*(h+1),L=M+1+c*(h+1),D=M+1+c*h;u.push(E,S,D),u.push(S,L,D)}this.setIndex(u),this.setAttribute("position",new ge(v,3)),this.setAttribute("normal",new ge(_,3)),this.setAttribute("uv",new ge(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.width,t.height,t.widthSegments,t.heightSegments)}}var fh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ph=`#ifdef USE_ALPHAHASH
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
#endif`,mh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xh=`#ifdef USE_AOMAP
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
#endif`,yh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mh=`#ifdef USE_BATCHING
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
#endif`,Sh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Eh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Th=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wh=`#ifdef USE_IRIDESCENCE
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
#endif`,Ah=`#ifdef USE_BUMPMAP
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
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fh=`#define PI 3.141592653589793
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
} // validated`,Oh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bh=`vec3 transformedNormal = objectNormal;
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
#endif`,zh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xh=`#ifdef USE_ENVMAP
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
#endif`,jh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yh=`#ifdef USE_ENVMAP
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
#endif`,qh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zh=`#ifdef USE_ENVMAP
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
#endif`,Kh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$h=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tu=`#ifdef USE_GRADIENTMAP
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
}`,eu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ru=`uniform bool receiveShadow;
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
#endif`,su=`#ifdef USE_ENVMAP
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
#endif`,au=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ou=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hu=`PhysicalMaterial material;
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
#endif`,uu=`struct PhysicalMaterial {
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
}`,du=`
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
#endif`,fu=`#if defined( RE_IndirectDiffuse )
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
#endif`,pu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_u=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Su=`#if defined( USE_POINTS_UV )
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
#endif`,Eu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Au=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ru=`#ifdef USE_MORPHTARGETS
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
#endif`,Cu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Du=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nu=`#ifdef USE_NORMALMAP
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
#endif`,Fu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ou=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ku=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ju=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ku=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$u=`float getShadowMask() {
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
}`,Ju=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qu=`#ifdef USE_SKINNING
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
#endif`,td=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ed=`#ifdef USE_SKINNING
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
#endif`,nd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,id=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ad=`#ifdef USE_TRANSMISSION
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
#endif`,od=`#ifdef USE_TRANSMISSION
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
#endif`,ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ud=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fd=`uniform sampler2D t2D;
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
}`,pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,md=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vd=`#include <common>
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
}`,xd=`#if DEPTH_PACKING == 3200
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
}`,yd=`#define DISTANCE
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
}`,Md=`#define DISTANCE
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
}`,Sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ed=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bd=`uniform float scale;
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
}`,Td=`uniform vec3 diffuse;
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
}`,wd=`#include <common>
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
}`,Ad=`uniform vec3 diffuse;
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
}`,Rd=`#define LAMBERT
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
}`,Cd=`#define LAMBERT
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
}`,Pd=`#define MATCAP
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
}`,Dd=`#define MATCAP
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
}`,Ld=`#define NORMAL
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
}`,Id=`#define NORMAL
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
}`,Ud=`#define PHONG
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
}`,Nd=`#define PHONG
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
}`,Fd=`#define STANDARD
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
}`,Od=`#define STANDARD
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
}`,Bd=`#define TOON
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
}`,zd=`#define TOON
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
}`,kd=`uniform float size;
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
}`,Hd=`uniform vec3 diffuse;
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
}`,Vd=`#include <common>
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
}`,Gd=`uniform vec3 color;
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
}`,Wd=`uniform float rotation;
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
}`,Xd=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:fh,alphahash_pars_fragment:ph,alphamap_fragment:mh,alphamap_pars_fragment:_h,alphatest_fragment:gh,alphatest_pars_fragment:vh,aomap_fragment:xh,aomap_pars_fragment:yh,batching_pars_vertex:Mh,batching_vertex:Sh,begin_vertex:Eh,beginnormal_vertex:bh,bsdfs:Th,iridescence_fragment:wh,bumpmap_pars_fragment:Ah,clipping_planes_fragment:Rh,clipping_planes_pars_fragment:Ch,clipping_planes_pars_vertex:Ph,clipping_planes_vertex:Dh,color_fragment:Lh,color_pars_fragment:Ih,color_pars_vertex:Uh,color_vertex:Nh,common:Fh,cube_uv_reflection_fragment:Oh,defaultnormal_vertex:Bh,displacementmap_pars_vertex:zh,displacementmap_vertex:kh,emissivemap_fragment:Hh,emissivemap_pars_fragment:Vh,colorspace_fragment:Gh,colorspace_pars_fragment:Wh,envmap_fragment:Xh,envmap_common_pars_fragment:jh,envmap_pars_fragment:Yh,envmap_pars_vertex:qh,envmap_physical_pars_fragment:su,envmap_vertex:Zh,fog_vertex:Kh,fog_pars_vertex:$h,fog_fragment:Jh,fog_pars_fragment:Qh,gradientmap_pars_fragment:tu,lightmap_pars_fragment:eu,lights_lambert_fragment:nu,lights_lambert_pars_fragment:iu,lights_pars_begin:ru,lights_toon_fragment:au,lights_toon_pars_fragment:ou,lights_phong_fragment:lu,lights_phong_pars_fragment:cu,lights_physical_fragment:hu,lights_physical_pars_fragment:uu,lights_fragment_begin:du,lights_fragment_maps:fu,lights_fragment_end:pu,logdepthbuf_fragment:mu,logdepthbuf_pars_fragment:_u,logdepthbuf_pars_vertex:gu,logdepthbuf_vertex:vu,map_fragment:xu,map_pars_fragment:yu,map_particle_fragment:Mu,map_particle_pars_fragment:Su,metalnessmap_fragment:Eu,metalnessmap_pars_fragment:bu,morphinstance_vertex:Tu,morphcolor_vertex:wu,morphnormal_vertex:Au,morphtarget_pars_vertex:Ru,morphtarget_vertex:Cu,normal_fragment_begin:Pu,normal_fragment_maps:Du,normal_pars_fragment:Lu,normal_pars_vertex:Iu,normal_vertex:Uu,normalmap_pars_fragment:Nu,clearcoat_normal_fragment_begin:Fu,clearcoat_normal_fragment_maps:Ou,clearcoat_pars_fragment:Bu,iridescence_pars_fragment:zu,opaque_fragment:ku,packing:Hu,premultiplied_alpha_fragment:Vu,project_vertex:Gu,dithering_fragment:Wu,dithering_pars_fragment:Xu,roughnessmap_fragment:ju,roughnessmap_pars_fragment:Yu,shadowmap_pars_fragment:qu,shadowmap_pars_vertex:Zu,shadowmap_vertex:Ku,shadowmask_pars_fragment:$u,skinbase_vertex:Ju,skinning_pars_vertex:Qu,skinning_vertex:td,skinnormal_vertex:ed,specularmap_fragment:nd,specularmap_pars_fragment:id,tonemapping_fragment:rd,tonemapping_pars_fragment:sd,transmission_fragment:ad,transmission_pars_fragment:od,uv_pars_fragment:ld,uv_pars_vertex:cd,uv_vertex:hd,worldpos_vertex:ud,background_vert:dd,background_frag:fd,backgroundCube_vert:pd,backgroundCube_frag:md,cube_vert:_d,cube_frag:gd,depth_vert:vd,depth_frag:xd,distanceRGBA_vert:yd,distanceRGBA_frag:Md,equirect_vert:Sd,equirect_frag:Ed,linedashed_vert:bd,linedashed_frag:Td,meshbasic_vert:wd,meshbasic_frag:Ad,meshlambert_vert:Rd,meshlambert_frag:Cd,meshmatcap_vert:Pd,meshmatcap_frag:Dd,meshnormal_vert:Ld,meshnormal_frag:Id,meshphong_vert:Ud,meshphong_frag:Nd,meshphysical_vert:Fd,meshphysical_frag:Od,meshtoon_vert:Bd,meshtoon_frag:zd,points_vert:kd,points_frag:Hd,shadow_vert:Vd,shadow_frag:Gd,sprite_vert:Wd,sprite_frag:Xd},vt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},We={basic:{uniforms:xe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:xe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:xe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:xe([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:xe([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:xe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:xe([vt.points,vt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:xe([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:xe([vt.common,vt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:xe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:xe([vt.sprite,vt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:xe([vt.common,vt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:xe([vt.lights,vt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};We.physical={uniforms:xe([We.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const ar={r:0,b:0,g:0},Rn=new Ve,jd=new ie;function Yd(i,t,e,n,r,s,o){const a=new Wt(0);let l=s===!0?0:1,c,p,d=null,m=0,u=null;function v(M){let E=M.isScene===!0?M.background:null;return E&&E.isTexture&&(E=(M.backgroundBlurriness>0?e:t).get(E)),E}function _(M){let E=!1;const S=v(M);S===null?h(a,l):S&&S.isColor&&(h(S,1),E=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(M,E){const S=v(E);S&&(S.isCubeTexture||S.mapping===Pr)?(p===void 0&&(p=new Re(new vi(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:pi(We.backgroundCube.uniforms),vertexShader:We.backgroundCube.vertexShader,fragmentShader:We.backgroundCube.fragmentShader,side:Ee,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(L,D,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Rn.copy(E.backgroundRotation),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),p.material.uniforms.envMap.value=S,p.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(jd.makeRotationFromEuler(Rn)),p.material.toneMapped=jt.getTransfer(S.colorSpace)!==Jt,(d!==S||m!==S.version||u!==i.toneMapping)&&(p.material.needsUpdate=!0,d=S,m=S.version,u=i.toneMapping),p.layers.enableAll(),M.unshift(p,p.geometry,p.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Re(new zi(2,2),new Sn({name:"BackgroundMaterial",uniforms:pi(We.background.uniforms),vertexShader:We.background.vertexShader,fragmentShader:We.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=jt.getTransfer(S.colorSpace)!==Jt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||m!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=S,m=S.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function h(M,E){M.getRGB(ar,ml(i)),n.buffers.color.setClear(ar.r,ar.g,ar.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),l=E,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,h(a,l)},render:_,addToRenderList:f}}function qd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null);let s=r,o=!1;function a(T,F,R,U,y){let B=!1;const nt=d(U,R,F);s!==nt&&(s=nt,c(s.object)),B=u(T,U,R,y),B&&v(T,U,R,y),y!==null&&t.update(y,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,S(T,F,R,U),y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(y).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function p(T){return i.deleteVertexArray(T)}function d(T,F,R){const U=R.wireframe===!0;let y=n[T.id];y===void 0&&(y={},n[T.id]=y);let B=y[F.id];B===void 0&&(B={},y[F.id]=B);let nt=B[U];return nt===void 0&&(nt=m(l()),B[U]=nt),nt}function m(T){const F=[],R=[],U=[];for(let y=0;y<e;y++)F[y]=0,R[y]=0,U[y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:R,attributeDivisors:U,object:T,attributes:{},index:null}}function u(T,F,R,U){const y=s.attributes,B=F.attributes;let nt=0;const k=R.getAttributes();for(const J in k)if(k[J].location>=0){const lt=y[J];let H=B[J];if(H===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(H=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(H=T.instanceColor)),lt===void 0||lt.attribute!==H||H&&lt.data!==H.data)return!0;nt++}return s.attributesNum!==nt||s.index!==U}function v(T,F,R,U){const y={},B=F.attributes;let nt=0;const k=R.getAttributes();for(const J in k)if(k[J].location>=0){let lt=B[J];lt===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(lt=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(lt=T.instanceColor));const H={};H.attribute=lt,lt&&lt.data&&(H.data=lt.data),y[J]=H,nt++}s.attributes=y,s.attributesNum=nt,s.index=U}function _(){const T=s.newAttributes;for(let F=0,R=T.length;F<R;F++)T[F]=0}function f(T){h(T,0)}function h(T,F){const R=s.newAttributes,U=s.enabledAttributes,y=s.attributeDivisors;R[T]=1,U[T]===0&&(i.enableVertexAttribArray(T),U[T]=1),y[T]!==F&&(i.vertexAttribDivisor(T,F),y[T]=F)}function M(){const T=s.newAttributes,F=s.enabledAttributes;for(let R=0,U=F.length;R<U;R++)F[R]!==T[R]&&(i.disableVertexAttribArray(R),F[R]=0)}function E(T,F,R,U,y,B,nt){nt===!0?i.vertexAttribIPointer(T,F,R,y,B):i.vertexAttribPointer(T,F,R,U,y,B)}function S(T,F,R,U){_();const y=U.attributes,B=R.getAttributes(),nt=F.defaultAttributeValues;for(const k in B){const J=B[k];if(J.location>=0){let tt=y[k];if(tt===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(tt=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(tt=T.instanceColor)),tt!==void 0){const lt=tt.normalized,H=tt.itemSize,W=t.get(tt);if(W===void 0)continue;const _t=W.buffer,X=W.type,Q=W.bytesPerElement,mt=X===i.INT||X===i.UNSIGNED_INT||tt.gpuType===sa;if(tt.isInterleavedBufferAttribute){const ut=tt.data,pt=ut.stride,Mt=tt.offset;if(ut.isInstancedInterleavedBuffer){for(let Pt=0;Pt<J.locationSize;Pt++)h(J.location+Pt,ut.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Pt=0;Pt<J.locationSize;Pt++)f(J.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Pt=0;Pt<J.locationSize;Pt++)E(J.location+Pt,H/J.locationSize,X,lt,pt*Q,(Mt+H/J.locationSize*Pt)*Q,mt)}else{if(tt.isInstancedBufferAttribute){for(let ut=0;ut<J.locationSize;ut++)h(J.location+ut,tt.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ut=0;ut<J.locationSize;ut++)f(J.location+ut);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let ut=0;ut<J.locationSize;ut++)E(J.location+ut,H/J.locationSize,X,lt,H*Q,H/J.locationSize*ut*Q,mt)}}else if(nt!==void 0){const lt=nt[k];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(J.location,lt);break;case 3:i.vertexAttrib3fv(J.location,lt);break;case 4:i.vertexAttrib4fv(J.location,lt);break;default:i.vertexAttrib1fv(J.location,lt)}}}}M()}function L(){N();for(const T in n){const F=n[T];for(const R in F){const U=F[R];for(const y in U)p(U[y].object),delete U[y];delete F[R]}delete n[T]}}function D(T){if(n[T.id]===void 0)return;const F=n[T.id];for(const R in F){const U=F[R];for(const y in U)p(U[y].object),delete U[y];delete F[R]}delete n[T.id]}function A(T){for(const F in n){const R=n[F];if(R[T.id]===void 0)continue;const U=R[T.id];for(const y in U)p(U[y].object),delete U[y];delete R[T.id]}}function N(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:D,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:f,disableUnusedAttributes:M}}function Zd(i,t,e){let n;function r(c){n=c}function s(c,p){i.drawArrays(n,c,p),e.update(p,n,1)}function o(c,p,d){d!==0&&(i.drawArraysInstanced(n,c,p,d),e.update(p,n,d))}function a(c,p,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,p,0,d);let u=0;for(let v=0;v<d;v++)u+=p[v];e.update(u,n,1)}function l(c,p,d,m){if(d===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let v=0;v<c.length;v++)o(c[v],p[v],m[v]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,p,0,m,0,d);let v=0;for(let _=0;_<d;_++)v+=p[_]*m[_];e.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Kd(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==ke&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const N=A===Oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ln&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==sn&&!N)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const p=l(c);p!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);const d=e.logarithmicDepthBuffer===!0,m=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:m,maxTextures:u,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:L,maxSamples:D}}function $d(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new gn,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){const u=d.length!==0||m||n!==0||r;return r=m,n=d.length,u},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,m){e=p(d,m,0)},this.setState=function(d,m,u){const v=d.clippingPlanes,_=d.clipIntersection,f=d.clipShadows,h=i.get(d);if(!r||v===null||v.length===0||s&&!f)s?p(null):c();else{const M=s?0:n,E=M*4;let S=h.clippingState||null;l.value=S,S=p(v,m,E,u);for(let L=0;L!==E;++L)S[L]=e[L];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function p(d,m,u,v){const _=d!==null?d.length:0;let f=null;if(_!==0){if(f=l.value,v!==!0||f===null){const h=u+_*4,M=m.matrixWorldInverse;a.getNormalMatrix(M),(f===null||f.length<h)&&(f=new Float32Array(h));for(let E=0,S=u;E!==_;++E,S+=4)o.copy(d[E]).applyMatrix4(M,a),o.normal.toArray(f,S),f[S+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function Jd(i){let t=new WeakMap;function e(o,a){return a===Ts?o.mapping=hi:a===ws&&(o.mapping=ui),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ts||a===ws)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ch(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class xl extends _l{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=p*this.view.offsetY,l=a-p*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ii=4,to=[.125,.215,.35,.446,.526,.582],Ln=20,ns=new xl,eo=new Wt;let is=null,rs=0,ss=0,as=!1;const Pn=(1+Math.sqrt(5))/2,ti=1/Pn,no=[new K(-Pn,ti,0),new K(Pn,ti,0),new K(-ti,0,Pn),new K(ti,0,Pn),new K(0,Pn,-ti),new K(0,Pn,ti),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class io{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){is=this._renderer.getRenderTarget(),rs=this._renderer.getActiveCubeFace(),ss=this._renderer.getActiveMipmapLevel(),as=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ao(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=so(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(is,rs,ss),this._renderer.xr.enabled=as,t.scissorTest=!1,or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hi||t.mapping===ui?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),is=this._renderer.getRenderTarget(),rs=this._renderer.getActiveCubeFace(),ss=this._renderer.getActiveMipmapLevel(),as=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:Oi,format:ke,colorSpace:mi,depthBuffer:!1},r=ro(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ro(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qd(s)),this._blurMaterial=tf(s,t,e)}return r}_compileMaterial(t){const e=new Re(this._lodPlanes[0],t);this._renderer.compile(e,ns)}_sceneToCubeUV(t,e,n,r){const a=new Le(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,m=p.toneMapping;p.getClearColor(eo),p.toneMapping=yn,p.autoClear=!1;const u=new fa({name:"PMREM.Background",side:Ee,depthWrite:!1,depthTest:!1}),v=new Re(new vi,u);let _=!1;const f=t.background;f?f.isColor&&(u.color.copy(f),t.background=null,_=!0):(u.color.copy(eo),_=!0);for(let h=0;h<6;h++){const M=h%3;M===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):M===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const E=this._cubeSize;or(r,M*E,h>2?E:0,E,E),p.setRenderTarget(r),_&&p.render(v,a),p.render(t,a)}v.geometry.dispose(),v.material.dispose(),p.toneMapping=m,p.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===hi||t.mapping===ui;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ao()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=so());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Re(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;or(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ns)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=no[(r-s-1)%no.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,d=new Re(this._lodPlanes[r],c),m=c.uniforms,u=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*Ln-1),_=s/v,f=isFinite(s)?1+Math.floor(p*_):Ln;f>Ln&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Ln}`);const h=[];let M=0;for(let A=0;A<Ln;++A){const N=A/_,b=Math.exp(-N*N/2);h.push(b),A===0?M+=b:A<f&&(M+=2*b)}for(let A=0;A<h.length;A++)h[A]=h[A]/M;m.envMap.value=t.texture,m.samples.value=f,m.weights.value=h,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:E}=this;m.dTheta.value=v,m.mipInt.value=E-n;const S=this._sizeLods[r],L=3*S*(r>E-ii?r-E+ii:0),D=4*(this._cubeSize-S);or(e,L,D,3*S,2*S),l.setRenderTarget(e),l.render(d,ns)}}function Qd(i){const t=[],e=[],n=[];let r=i;const s=i-ii+1+to.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-ii?l=to[o-i+ii-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),p=-c,d=1+c,m=[p,p,d,p,d,d,p,p,d,d,p,d],u=6,v=6,_=3,f=2,h=1,M=new Float32Array(_*v*u),E=new Float32Array(f*v*u),S=new Float32Array(h*v*u);for(let D=0;D<u;D++){const A=D%3*2/3-1,N=D>2?0:-1,b=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];M.set(b,_*v*D),E.set(m,f*v*D);const T=[D,D,D,D,D,D];S.set(T,h*v*D)}const L=new Ue;L.setAttribute("position",new je(M,_)),L.setAttribute("uv",new je(E,f)),L.setAttribute("faceIndex",new je(S,h)),t.push(L),r>ii&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ro(i,t,e){const n=new On(i,t,e);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function or(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function tf(i,t,e){const n=new Float32Array(Ln),r=new K(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Ln,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ma(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function so(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ma(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function ao(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function ma(){return`

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
	`}function ef(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ts||l===ws,p=l===hi||l===ui;if(c||p){let d=t.get(a);const m=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return e===null&&(e=new io(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const u=a.image;return c&&u&&u.height>0||p&&u&&r(u)?(e===null&&(e=new io(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let p=0;p<c;p++)a[p]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function nf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ri("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function rf(i,t,e,n){const r={},s=new WeakMap;function o(d){const m=d.target;m.index!==null&&t.remove(m.index);for(const v in m.attributes)t.remove(m.attributes[v]);for(const v in m.morphAttributes){const _=m.morphAttributes[v];for(let f=0,h=_.length;f<h;f++)t.remove(_[f])}m.removeEventListener("dispose",o),delete r[m.id];const u=s.get(m);u&&(t.remove(u),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(d,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,e.memory.geometries++),m}function l(d){const m=d.attributes;for(const v in m)t.update(m[v],i.ARRAY_BUFFER);const u=d.morphAttributes;for(const v in u){const _=u[v];for(let f=0,h=_.length;f<h;f++)t.update(_[f],i.ARRAY_BUFFER)}}function c(d){const m=[],u=d.index,v=d.attributes.position;let _=0;if(u!==null){const M=u.array;_=u.version;for(let E=0,S=M.length;E<S;E+=3){const L=M[E+0],D=M[E+1],A=M[E+2];m.push(L,D,D,A,A,L)}}else if(v!==void 0){const M=v.array;_=v.version;for(let E=0,S=M.length/3-1;E<S;E+=3){const L=E+0,D=E+1,A=E+2;m.push(L,D,D,A,A,L)}}else return;const f=new(ll(m)?pl:fl)(m,1);f.version=_;const h=s.get(d);h&&t.remove(h),s.set(d,f)}function p(d){const m=s.get(d);if(m){const u=d.index;u!==null&&m.version<u.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:p}}function sf(i,t,e){let n;function r(m){n=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function l(m,u){i.drawElements(n,u,s,m*o),e.update(u,n,1)}function c(m,u,v){v!==0&&(i.drawElementsInstanced(n,u,s,m*o,v),e.update(u,n,v))}function p(m,u,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,m,0,v);let f=0;for(let h=0;h<v;h++)f+=u[h];e.update(f,n,1)}function d(m,u,v,_){if(v===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<m.length;h++)c(m[h]/o,u[h],_[h]);else{f.multiDrawElementsInstancedWEBGL(n,u,0,s,m,0,_,0,v);let h=0;for(let M=0;M<v;M++)h+=u[M]*_[M];e.update(h,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=p,this.renderMultiDrawInstances=d}function af(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function of(i,t,e){const n=new WeakMap,r=new se;function s(o,a,l){const c=o.morphTargetInfluences,p=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=p!==void 0?p.length:0;let m=n.get(a);if(m===void 0||m.count!==d){let T=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",T)};var u=T;m!==void 0&&m.texture.dispose();const v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),_===!0&&(S=2),f===!0&&(S=3);let L=a.attributes.position.count*S,D=1;L>t.maxTextureSize&&(D=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const A=new Float32Array(L*D*4*d),N=new hl(A,L,D,d);N.type=sn,N.needsUpdate=!0;const b=S*4;for(let F=0;F<d;F++){const R=h[F],U=M[F],y=E[F],B=L*D*4*F;for(let nt=0;nt<R.count;nt++){const k=nt*b;v===!0&&(r.fromBufferAttribute(R,nt),A[B+k+0]=r.x,A[B+k+1]=r.y,A[B+k+2]=r.z,A[B+k+3]=0),_===!0&&(r.fromBufferAttribute(U,nt),A[B+k+4]=r.x,A[B+k+5]=r.y,A[B+k+6]=r.z,A[B+k+7]=0),f===!0&&(r.fromBufferAttribute(y,nt),A[B+k+8]=r.x,A[B+k+9]=r.y,A[B+k+10]=r.z,A[B+k+11]=y.itemSize===4?r.w:1)}}m={count:d,texture:N,size:new Bt(L,D)},n.set(a,m),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let v=0;for(let f=0;f<c.length;f++)v+=c[f];const _=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:s}}function lf(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,p=l.geometry,d=t.get(l,p);if(r.get(d)!==c&&(t.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==c&&(m.update(),r.set(m,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class yl extends ye{constructor(t,e,n,r,s,o,a,l,c,p=ai){if(p!==ai&&p!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===ai&&(n=Fn),n===void 0&&p===fi&&(n=di),super(null,r,s,o,a,l,p,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:He,this.minFilter=l!==void 0?l:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ml=new ye,oo=new yl(1,1),Sl=new hl,El=new Yc,bl=new gl,lo=[],co=[],ho=new Float32Array(16),uo=new Float32Array(9),fo=new Float32Array(4);function xi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=lo[r];if(s===void 0&&(s=new Float32Array(r),lo[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ir(i,t){let e=co[t];e===void 0&&(e=new Int32Array(t),co[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2fv(this.addr,t),ce(e,t)}}function uf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(le(e,t))return;i.uniform3fv(this.addr,t),ce(e,t)}}function df(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4fv(this.addr,t),ce(e,t)}}function ff(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;fo.set(n),i.uniformMatrix2fv(this.addr,!1,fo),ce(e,n)}}function pf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;uo.set(n),i.uniformMatrix3fv(this.addr,!1,uo),ce(e,n)}}function mf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;ho.set(n),i.uniformMatrix4fv(this.addr,!1,ho),ce(e,n)}}function _f(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function gf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2iv(this.addr,t),ce(e,t)}}function vf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;i.uniform3iv(this.addr,t),ce(e,t)}}function xf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4iv(this.addr,t),ce(e,t)}}function yf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Mf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2uiv(this.addr,t),ce(e,t)}}function Sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;i.uniform3uiv(this.addr,t),ce(e,t)}}function Ef(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4uiv(this.addr,t),ce(e,t)}}function bf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(oo.compareFunction=al,s=oo):s=Ml,e.setTexture2D(t||s,r)}function Tf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||El,r)}function wf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||bl,r)}function Af(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Sl,r)}function Rf(i){switch(i){case 5126:return cf;case 35664:return hf;case 35665:return uf;case 35666:return df;case 35674:return ff;case 35675:return pf;case 35676:return mf;case 5124:case 35670:return _f;case 35667:case 35671:return gf;case 35668:case 35672:return vf;case 35669:case 35673:return xf;case 5125:return yf;case 36294:return Mf;case 36295:return Sf;case 36296:return Ef;case 35678:case 36198:case 36298:case 36306:case 35682:return bf;case 35679:case 36299:case 36307:return Tf;case 35680:case 36300:case 36308:case 36293:return wf;case 36289:case 36303:case 36311:case 36292:return Af}}function Cf(i,t){i.uniform1fv(this.addr,t)}function Pf(i,t){const e=xi(t,this.size,2);i.uniform2fv(this.addr,e)}function Df(i,t){const e=xi(t,this.size,3);i.uniform3fv(this.addr,e)}function Lf(i,t){const e=xi(t,this.size,4);i.uniform4fv(this.addr,e)}function If(i,t){const e=xi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Uf(i,t){const e=xi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Nf(i,t){const e=xi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ff(i,t){i.uniform1iv(this.addr,t)}function Of(i,t){i.uniform2iv(this.addr,t)}function Bf(i,t){i.uniform3iv(this.addr,t)}function zf(i,t){i.uniform4iv(this.addr,t)}function kf(i,t){i.uniform1uiv(this.addr,t)}function Hf(i,t){i.uniform2uiv(this.addr,t)}function Vf(i,t){i.uniform3uiv(this.addr,t)}function Gf(i,t){i.uniform4uiv(this.addr,t)}function Wf(i,t,e){const n=this.cache,r=t.length,s=Ir(e,r);le(n,s)||(i.uniform1iv(this.addr,s),ce(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Ml,s[o])}function Xf(i,t,e){const n=this.cache,r=t.length,s=Ir(e,r);le(n,s)||(i.uniform1iv(this.addr,s),ce(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||El,s[o])}function jf(i,t,e){const n=this.cache,r=t.length,s=Ir(e,r);le(n,s)||(i.uniform1iv(this.addr,s),ce(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||bl,s[o])}function Yf(i,t,e){const n=this.cache,r=t.length,s=Ir(e,r);le(n,s)||(i.uniform1iv(this.addr,s),ce(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Sl,s[o])}function qf(i){switch(i){case 5126:return Cf;case 35664:return Pf;case 35665:return Df;case 35666:return Lf;case 35674:return If;case 35675:return Uf;case 35676:return Nf;case 5124:case 35670:return Ff;case 35667:case 35671:return Of;case 35668:case 35672:return Bf;case 35669:case 35673:return zf;case 5125:return kf;case 36294:return Hf;case 36295:return Vf;case 36296:return Gf;case 35678:case 36198:case 36298:case 36306:case 35682:return Wf;case 35679:case 36299:case 36307:return Xf;case 35680:case 36300:case 36308:case 36293:return jf;case 36289:case 36303:case 36311:case 36292:return Yf}}class Zf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rf(e.type)}}class Kf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qf(e.type)}}class $f{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const os=/(\w+)(\])?(\[|\.)?/g;function po(i,t){i.seq.push(t),i.map[t.id]=t}function Jf(i,t,e){const n=i.name,r=n.length;for(os.lastIndex=0;;){const s=os.exec(n),o=os.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){po(e,c===void 0?new Zf(a,i,t):new Kf(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new $f(a),po(e,d)),e=d}}}class Tr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Jf(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function mo(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Qf=37297;let tp=0;function ep(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const _o=new Ht;function np(i){jt._getMatrix(_o,jt.workingColorSpace,i);const t=`mat3( ${_o.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case Dr:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function go(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+ep(i.getShaderSource(t),o)}else return r}function ip(i,t){const e=np(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rp(i,t){let e;switch(t){case sc:e="Linear";break;case ac:e="Reinhard";break;case oc:e="Cineon";break;case lc:e="ACESFilmic";break;case hc:e="AgX";break;case uc:e="Neutral";break;case cc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const lr=new K;function sp(){jt.getLuminanceCoefficients(lr);const i=lr.x.toFixed(4),t=lr.y.toFixed(4),e=lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ap(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ci).join(`
`)}function op(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ci(i){return i!==""}function vo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ta(i){return i.replace(cp,up)}const hp=new Map;function up(i,t){let e=Vt[t];if(e===void 0){const n=hp.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ta(e)}const dp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yo(i){return i.replace(dp,fp)}function fp(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mo(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function pp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===qo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===nn&&(t="SHADOWMAP_TYPE_VSM"),t}function mp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hi:case ui:t="ENVMAP_TYPE_CUBE";break;case Pr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _p(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ui:t="ENVMAP_MODE_REFRACTION";break}return t}function gp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ra:t="ENVMAP_BLENDING_MULTIPLY";break;case ic:t="ENVMAP_BLENDING_MIX";break;case rc:t="ENVMAP_BLENDING_ADD";break}return t}function vp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xp(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=pp(e),c=mp(e),p=_p(e),d=gp(e),m=vp(e),u=ap(e),v=op(s),_=r.createProgram();let f,h,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ci).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ci).join(`
`),h.length>0&&(h+=`
`)):(f=[Mo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ci).join(`
`),h=[Mo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+p:"",e.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==yn?rp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,ip("linearToOutputTexel",e.outputColorSpace),sp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ci).join(`
`)),o=ta(o),o=vo(o,e),o=xo(o,e),a=ta(a),a=vo(a,e),a=xo(a,e),o=yo(o),a=yo(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",e.glslVersion===La?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===La?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=M+f+o,S=M+h+a,L=mo(r,r.VERTEX_SHADER,E),D=mo(r,r.FRAGMENT_SHADER,S);r.attachShader(_,L),r.attachShader(_,D),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(F){if(i.debug.checkShaderErrors){const R=r.getProgramInfoLog(_).trim(),U=r.getShaderInfoLog(L).trim(),y=r.getShaderInfoLog(D).trim();let B=!0,nt=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,L,D);else{const k=go(r,L,"vertex"),J=go(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+R+`
`+k+`
`+J)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(U===""||y==="")&&(nt=!1);nt&&(F.diagnostics={runnable:B,programLog:R,vertexShader:{log:U,prefix:f},fragmentShader:{log:y,prefix:h}})}r.deleteShader(L),r.deleteShader(D),N=new Tr(r,_),b=lp(r,_)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(_,Qf)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=D,this}let yp=0;class Mp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Sp(t),e.set(t,n)),n}}class Sp{constructor(t){this.id=yp++,this.code=t,this.usedTimes=0}}function Ep(i,t,e,n,r,s,o){const a=new ul,l=new Mp,c=new Set,p=[],d=r.logarithmicDepthBuffer,m=r.vertexTextures;let u=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function f(b,T,F,R,U){const y=R.fog,B=U.geometry,nt=b.isMeshStandardMaterial?R.environment:null,k=(b.isMeshStandardMaterial?e:t).get(b.envMap||nt),J=k&&k.mapping===Pr?k.image.height:null,tt=v[b.type];b.precision!==null&&(u=r.getMaxPrecision(b.precision),u!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));const lt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,H=lt!==void 0?lt.length:0;let W=0;B.morphAttributes.position!==void 0&&(W=1),B.morphAttributes.normal!==void 0&&(W=2),B.morphAttributes.color!==void 0&&(W=3);let _t,X,Q,mt;if(tt){const Kt=We[tt];_t=Kt.vertexShader,X=Kt.fragmentShader}else _t=b.vertexShader,X=b.fragmentShader,l.update(b),Q=l.getVertexShaderID(b),mt=l.getFragmentShaderID(b);const ut=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),Mt=U.isInstancedMesh===!0,Pt=U.isBatchedMesh===!0,It=!!b.map,Ut=!!b.matcap,Xt=!!k,g=!!b.aoMap,at=!!b.lightMap,Z=!!b.bumpMap,I=!!b.normalMap,P=!!b.displacementMap,z=!!b.emissiveMap,et=!!b.metalnessMap,w=!!b.roughnessMap,x=b.anisotropy>0,O=b.clearcoat>0,q=b.dispersion>0,G=b.iridescence>0,$=b.sheen>0,ft=b.transmission>0,ct=x&&!!b.anisotropyMap,gt=O&&!!b.clearcoatMap,Gt=O&&!!b.clearcoatNormalMap,ht=O&&!!b.clearcoatRoughnessMap,Tt=G&&!!b.iridescenceMap,St=G&&!!b.iridescenceThicknessMap,Lt=$&&!!b.sheenColorMap,wt=$&&!!b.sheenRoughnessMap,Nt=!!b.specularMap,Ot=!!b.specularColorMap,$t=!!b.specularIntensityMap,V=ft&&!!b.transmissionMap,xt=ft&&!!b.thicknessMap,st=!!b.gradientMap,ot=!!b.alphaMap,yt=b.alphaTest>0,Et=!!b.alphaHash,zt=!!b.extensions;let re=yn;b.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(re=i.toneMapping);const fe={shaderID:tt,shaderType:b.type,shaderName:b.name,vertexShader:_t,fragmentShader:X,defines:b.defines,customVertexShaderID:Q,customFragmentShaderID:mt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:Pt,batchingColor:Pt&&U._colorsTexture!==null,instancing:Mt,instancingColor:Mt&&U.instanceColor!==null,instancingMorph:Mt&&U.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:mi,alphaToCoverage:!!b.alphaToCoverage,map:It,matcap:Ut,envMap:Xt,envMapMode:Xt&&k.mapping,envMapCubeUVHeight:J,aoMap:g,lightMap:at,bumpMap:Z,normalMap:I,displacementMap:m&&P,emissiveMap:z,normalMapObjectSpace:I&&b.normalMapType===mc,normalMapTangentSpace:I&&b.normalMapType===ua,metalnessMap:et,roughnessMap:w,anisotropy:x,anisotropyMap:ct,clearcoat:O,clearcoatMap:gt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:ht,dispersion:q,iridescence:G,iridescenceMap:Tt,iridescenceThicknessMap:St,sheen:$,sheenColorMap:Lt,sheenRoughnessMap:wt,specularMap:Nt,specularColorMap:Ot,specularIntensityMap:$t,transmission:ft,transmissionMap:V,thicknessMap:xt,gradientMap:st,opaque:b.transparent===!1&&b.blending===si&&b.alphaToCoverage===!1,alphaMap:ot,alphaTest:yt,alphaHash:Et,combine:b.combine,mapUv:It&&_(b.map.channel),aoMapUv:g&&_(b.aoMap.channel),lightMapUv:at&&_(b.lightMap.channel),bumpMapUv:Z&&_(b.bumpMap.channel),normalMapUv:I&&_(b.normalMap.channel),displacementMapUv:P&&_(b.displacementMap.channel),emissiveMapUv:z&&_(b.emissiveMap.channel),metalnessMapUv:et&&_(b.metalnessMap.channel),roughnessMapUv:w&&_(b.roughnessMap.channel),anisotropyMapUv:ct&&_(b.anisotropyMap.channel),clearcoatMapUv:gt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:St&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:wt&&_(b.sheenRoughnessMap.channel),specularMapUv:Nt&&_(b.specularMap.channel),specularColorMapUv:Ot&&_(b.specularColorMap.channel),specularIntensityMapUv:$t&&_(b.specularIntensityMap.channel),transmissionMapUv:V&&_(b.transmissionMap.channel),thicknessMapUv:xt&&_(b.thicknessMap.channel),alphaMapUv:ot&&_(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(I||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(It||ot),fog:!!y,useFog:b.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:pt,skinning:U.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:W,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:It&&b.map.isVideoTexture===!0&&jt.getTransfer(b.map.colorSpace)===Jt,decodeVideoTextureEmissive:z&&b.emissiveMap.isVideoTexture===!0&&jt.getTransfer(b.emissiveMap.colorSpace)===Jt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===rn,flipSided:b.side===Ee,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:zt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&b.extensions.multiDraw===!0||Pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function h(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)T.push(F),T.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(M(T,b),E(T,b),T.push(i.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function M(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function E(b,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),b.push(a.mask)}function S(b){const T=v[b.type];let F;if(T){const R=We[T];F=sh.clone(R.uniforms)}else F=b.uniforms;return F}function L(b,T){let F;for(let R=0,U=p.length;R<U;R++){const y=p[R];if(y.cacheKey===T){F=y,++F.usedTimes;break}}return F===void 0&&(F=new xp(i,T,b,s),p.push(F)),F}function D(b){if(--b.usedTimes===0){const T=p.indexOf(b);p[T]=p[p.length-1],p.pop(),b.destroy()}}function A(b){l.remove(b)}function N(){l.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:S,acquireProgram:L,releaseProgram:D,releaseShaderCache:A,programs:p,dispose:N}}function bp(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Tp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function So(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Eo(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(d,m,u,v,_,f){let h=i[t];return h===void 0?(h={id:d.id,object:d,geometry:m,material:u,groupOrder:v,renderOrder:d.renderOrder,z:_,group:f},i[t]=h):(h.id=d.id,h.object=d,h.geometry=m,h.material=u,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=_,h.group=f),t++,h}function a(d,m,u,v,_,f){const h=o(d,m,u,v,_,f);u.transmission>0?n.push(h):u.transparent===!0?r.push(h):e.push(h)}function l(d,m,u,v,_,f){const h=o(d,m,u,v,_,f);u.transmission>0?n.unshift(h):u.transparent===!0?r.unshift(h):e.unshift(h)}function c(d,m){e.length>1&&e.sort(d||Tp),n.length>1&&n.sort(m||So),r.length>1&&r.sort(m||So)}function p(){for(let d=t,m=i.length;d<m;d++){const u=i[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:p,sort:c}}function wp(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Eo,i.set(n,[o])):r>=s.length?(o=new Eo,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ap(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new K,color:new Wt};break;case"SpotLight":e={position:new K,direction:new K,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new K,halfWidth:new K,halfHeight:new K};break}return i[t.id]=e,e}}}function Rp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Cp=0;function Pp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Dp(i){const t=new Ap,e=Rp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new K);const r=new K,s=new ie,o=new ie;function a(c){let p=0,d=0,m=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let u=0,v=0,_=0,f=0,h=0,M=0,E=0,S=0,L=0,D=0,A=0;c.sort(Pp);for(let b=0,T=c.length;b<T;b++){const F=c[b],R=F.color,U=F.intensity,y=F.distance,B=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)p+=R.r*U,d+=R.g*U,m+=R.b*U;else if(F.isLightProbe){for(let nt=0;nt<9;nt++)n.probe[nt].addScaledVector(F.sh.coefficients[nt],U);A++}else if(F.isDirectionalLight){const nt=t.get(F);if(nt.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const k=F.shadow,J=e.get(F);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,n.directionalShadow[u]=J,n.directionalShadowMap[u]=B,n.directionalShadowMatrix[u]=F.shadow.matrix,M++}n.directional[u]=nt,u++}else if(F.isSpotLight){const nt=t.get(F);nt.position.setFromMatrixPosition(F.matrixWorld),nt.color.copy(R).multiplyScalar(U),nt.distance=y,nt.coneCos=Math.cos(F.angle),nt.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),nt.decay=F.decay,n.spot[_]=nt;const k=F.shadow;if(F.map&&(n.spotLightMap[L]=F.map,L++,k.updateMatrices(F),F.castShadow&&D++),n.spotLightMatrix[_]=k.matrix,F.castShadow){const J=e.get(F);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=B,S++}_++}else if(F.isRectAreaLight){const nt=t.get(F);nt.color.copy(R).multiplyScalar(U),nt.halfWidth.set(F.width*.5,0,0),nt.halfHeight.set(0,F.height*.5,0),n.rectArea[f]=nt,f++}else if(F.isPointLight){const nt=t.get(F);if(nt.color.copy(F.color).multiplyScalar(F.intensity),nt.distance=F.distance,nt.decay=F.decay,F.castShadow){const k=F.shadow,J=e.get(F);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,J.shadowCameraNear=k.camera.near,J.shadowCameraFar=k.camera.far,n.pointShadow[v]=J,n.pointShadowMap[v]=B,n.pointShadowMatrix[v]=F.shadow.matrix,E++}n.point[v]=nt,v++}else if(F.isHemisphereLight){const nt=t.get(F);nt.skyColor.copy(F.color).multiplyScalar(U),nt.groundColor.copy(F.groundColor).multiplyScalar(U),n.hemi[h]=nt,h++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=d,n.ambient[2]=m;const N=n.hash;(N.directionalLength!==u||N.pointLength!==v||N.spotLength!==_||N.rectAreaLength!==f||N.hemiLength!==h||N.numDirectionalShadows!==M||N.numPointShadows!==E||N.numSpotShadows!==S||N.numSpotMaps!==L||N.numLightProbes!==A)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=f,n.point.length=v,n.hemi.length=h,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+L-D,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=A,N.directionalLength=u,N.pointLength=v,N.spotLength=_,N.rectAreaLength=f,N.hemiLength=h,N.numDirectionalShadows=M,N.numPointShadows=E,N.numSpotShadows=S,N.numSpotMaps=L,N.numLightProbes=A,n.version=Cp++)}function l(c,p){let d=0,m=0,u=0,v=0,_=0;const f=p.matrixWorldInverse;for(let h=0,M=c.length;h<M;h++){const E=c[h];if(E.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),d++}else if(E.isSpotLight){const S=n.spot[u];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(f),u++}else if(E.isRectAreaLight){const S=n.rectArea[v];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(f),o.identity(),s.copy(E.matrixWorld),s.premultiply(f),o.extractRotation(s),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(E.isPointLight){const S=n.point[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(f),m++}else if(E.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(f),_++}}}return{setup:a,setupView:l,state:n}}function bo(i){const t=new Dp(i),e=[],n=[];function r(p){c.camera=p,e.length=0,n.length=0}function s(p){e.push(p)}function o(p){n.push(p)}function a(){t.setup(e)}function l(p){t.setupView(e,p)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Lp(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new bo(i),t.set(r,[a])):s>=o.length?(a=new bo(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Ip extends Ye{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Up extends Ye{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Np=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fp=`uniform sampler2D shadow_pass;
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
}`;function Op(i,t,e){let n=new pa;const r=new Bt,s=new Bt,o=new se,a=new Ip({depthPacking:pc}),l=new Up,c={},p=e.maxTextureSize,d={[Mn]:Ee,[Ee]:Mn,[rn]:rn},m=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:Np,fragmentShader:Fp}),u=m.clone();u.defines.HORIZONTAL_PASS=1;const v=new Ue;v.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Re(v,m),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qo;let h=this.type;this.render=function(D,A,N){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||D.length===0)return;const b=i.getRenderTarget(),T=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),R=i.state;R.setBlending(xn),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const U=h!==nn&&this.type===nn,y=h===nn&&this.type!==nn;for(let B=0,nt=D.length;B<nt;B++){const k=D[B],J=k.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const tt=J.getFrameExtents();if(r.multiply(tt),s.copy(J.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/tt.x),r.x=s.x*tt.x,J.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/tt.y),r.y=s.y*tt.y,J.mapSize.y=s.y)),J.map===null||U===!0||y===!0){const H=this.type!==nn?{minFilter:He,magFilter:He}:{};J.map!==null&&J.map.dispose(),J.map=new On(r.x,r.y,H),J.map.texture.name=k.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const lt=J.getViewportCount();for(let H=0;H<lt;H++){const W=J.getViewport(H);o.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),R.viewport(o),J.updateMatrices(k,H),n=J.getFrustum(),S(A,N,J.camera,k,this.type)}J.isPointLightShadow!==!0&&this.type===nn&&M(J,N),J.needsUpdate=!1}h=this.type,f.needsUpdate=!1,i.setRenderTarget(b,T,F)};function M(D,A){const N=t.update(_);m.defines.VSM_SAMPLES!==D.blurSamples&&(m.defines.VSM_SAMPLES=D.blurSamples,u.defines.VSM_SAMPLES=D.blurSamples,m.needsUpdate=!0,u.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new On(r.x,r.y)),m.uniforms.shadow_pass.value=D.map.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(A,null,N,m,_,null),u.uniforms.shadow_pass.value=D.mapPass.texture,u.uniforms.resolution.value=D.mapSize,u.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(A,null,N,u,_,null)}function E(D,A,N,b){let T=null;const F=N.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(F!==void 0)T=F;else if(T=N.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const R=T.uuid,U=A.uuid;let y=c[R];y===void 0&&(y={},c[R]=y);let B=y[U];B===void 0&&(B=T.clone(),y[U]=B,A.addEventListener("dispose",L)),T=B}if(T.visible=A.visible,T.wireframe=A.wireframe,b===nn?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:d[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,N.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const R=i.properties.get(T);R.light=N}return T}function S(D,A,N,b,T){if(D.visible===!1)return;if(D.layers.test(A.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&T===nn)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,D.matrixWorld);const U=t.update(D),y=D.material;if(Array.isArray(y)){const B=U.groups;for(let nt=0,k=B.length;nt<k;nt++){const J=B[nt],tt=y[J.materialIndex];if(tt&&tt.visible){const lt=E(D,tt,b,T);D.onBeforeShadow(i,D,A,N,U,lt,J),i.renderBufferDirect(N,null,U,lt,D,J),D.onAfterShadow(i,D,A,N,U,lt,J)}}}else if(y.visible){const B=E(D,y,b,T);D.onBeforeShadow(i,D,A,N,U,B,null),i.renderBufferDirect(N,null,U,B,D,null),D.onAfterShadow(i,D,A,N,U,B,null)}}const R=D.children;for(let U=0,y=R.length;U<y;U++)S(R[U],A,N,b,T)}function L(D){D.target.removeEventListener("dispose",L);for(const N in c){const b=c[N],T=D.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}const Bp={[vs]:xs,[ys]:Es,[Ms]:bs,[ci]:Ss,[xs]:vs,[Es]:ys,[bs]:Ms,[Ss]:ci};function zp(i,t){function e(){let V=!1;const xt=new se;let st=null;const ot=new se(0,0,0,0);return{setMask:function(yt){st!==yt&&!V&&(i.colorMask(yt,yt,yt,yt),st=yt)},setLocked:function(yt){V=yt},setClear:function(yt,Et,zt,re,fe){fe===!0&&(yt*=re,Et*=re,zt*=re),xt.set(yt,Et,zt,re),ot.equals(xt)===!1&&(i.clearColor(yt,Et,zt,re),ot.copy(xt))},reset:function(){V=!1,st=null,ot.set(-1,0,0,0)}}}function n(){let V=!1,xt=!1,st=null,ot=null,yt=null;return{setReversed:function(Et){if(xt!==Et){const zt=t.get("EXT_clip_control");xt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const re=yt;yt=null,this.setClear(re)}xt=Et},getReversed:function(){return xt},setTest:function(Et){Et?ut(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(Et){st!==Et&&!V&&(i.depthMask(Et),st=Et)},setFunc:function(Et){if(xt&&(Et=Bp[Et]),ot!==Et){switch(Et){case vs:i.depthFunc(i.NEVER);break;case xs:i.depthFunc(i.ALWAYS);break;case ys:i.depthFunc(i.LESS);break;case ci:i.depthFunc(i.LEQUAL);break;case Ms:i.depthFunc(i.EQUAL);break;case Ss:i.depthFunc(i.GEQUAL);break;case Es:i.depthFunc(i.GREATER);break;case bs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=Et}},setLocked:function(Et){V=Et},setClear:function(Et){yt!==Et&&(xt&&(Et=1-Et),i.clearDepth(Et),yt=Et)},reset:function(){V=!1,st=null,ot=null,yt=null,xt=!1}}}function r(){let V=!1,xt=null,st=null,ot=null,yt=null,Et=null,zt=null,re=null,fe=null;return{setTest:function(Kt){V||(Kt?ut(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(Kt){xt!==Kt&&!V&&(i.stencilMask(Kt),xt=Kt)},setFunc:function(Kt,Ne,qe){(st!==Kt||ot!==Ne||yt!==qe)&&(i.stencilFunc(Kt,Ne,qe),st=Kt,ot=Ne,yt=qe)},setOp:function(Kt,Ne,qe){(Et!==Kt||zt!==Ne||re!==qe)&&(i.stencilOp(Kt,Ne,qe),Et=Kt,zt=Ne,re=qe)},setLocked:function(Kt){V=Kt},setClear:function(Kt){fe!==Kt&&(i.clearStencil(Kt),fe=Kt)},reset:function(){V=!1,xt=null,st=null,ot=null,yt=null,Et=null,zt=null,re=null,fe=null}}}const s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let p={},d={},m=new WeakMap,u=[],v=null,_=!1,f=null,h=null,M=null,E=null,S=null,L=null,D=null,A=new Wt(0,0,0),N=0,b=!1,T=null,F=null,R=null,U=null,y=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,k=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(J)[1]),nt=k>=1):J.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),nt=k>=2);let tt=null,lt={};const H=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),_t=new se().fromArray(H),X=new se().fromArray(W);function Q(V,xt,st,ot){const yt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(V,Et),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<st;zt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(xt+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return Et}const mt={};mt[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(i.DEPTH_TEST),o.setFunc(ci),Z(!1),I(wa),ut(i.CULL_FACE),g(xn);function ut(V){p[V]!==!0&&(i.enable(V),p[V]=!0)}function pt(V){p[V]!==!1&&(i.disable(V),p[V]=!1)}function Mt(V,xt){return d[V]!==xt?(i.bindFramebuffer(V,xt),d[V]=xt,V===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=xt),V===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function Pt(V,xt){let st=u,ot=!1;if(V){st=m.get(xt),st===void 0&&(st=[],m.set(xt,st));const yt=V.textures;if(st.length!==yt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,zt=yt.length;Et<zt;Et++)st[Et]=i.COLOR_ATTACHMENT0+Et;st.length=yt.length,ot=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,ot=!0);ot&&i.drawBuffers(st)}function It(V){return v!==V?(i.useProgram(V),v=V,!0):!1}const Ut={[Dn]:i.FUNC_ADD,[kl]:i.FUNC_SUBTRACT,[Hl]:i.FUNC_REVERSE_SUBTRACT};Ut[Vl]=i.MIN,Ut[Gl]=i.MAX;const Xt={[Wl]:i.ZERO,[Xl]:i.ONE,[jl]:i.SRC_COLOR,[_s]:i.SRC_ALPHA,[Jl]:i.SRC_ALPHA_SATURATE,[Kl]:i.DST_COLOR,[ql]:i.DST_ALPHA,[Yl]:i.ONE_MINUS_SRC_COLOR,[gs]:i.ONE_MINUS_SRC_ALPHA,[$l]:i.ONE_MINUS_DST_COLOR,[Zl]:i.ONE_MINUS_DST_ALPHA,[Ql]:i.CONSTANT_COLOR,[tc]:i.ONE_MINUS_CONSTANT_COLOR,[ec]:i.CONSTANT_ALPHA,[nc]:i.ONE_MINUS_CONSTANT_ALPHA};function g(V,xt,st,ot,yt,Et,zt,re,fe,Kt){if(V===xn){_===!0&&(pt(i.BLEND),_=!1);return}if(_===!1&&(ut(i.BLEND),_=!0),V!==zl){if(V!==f||Kt!==b){if((h!==Dn||S!==Dn)&&(i.blendEquation(i.FUNC_ADD),h=Dn,S=Dn),Kt)switch(V){case si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Aa:i.blendFunc(i.ONE,i.ONE);break;case Ra:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ca:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Aa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ra:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ca:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}M=null,E=null,L=null,D=null,A.set(0,0,0),N=0,f=V,b=Kt}return}yt=yt||xt,Et=Et||st,zt=zt||ot,(xt!==h||yt!==S)&&(i.blendEquationSeparate(Ut[xt],Ut[yt]),h=xt,S=yt),(st!==M||ot!==E||Et!==L||zt!==D)&&(i.blendFuncSeparate(Xt[st],Xt[ot],Xt[Et],Xt[zt]),M=st,E=ot,L=Et,D=zt),(re.equals(A)===!1||fe!==N)&&(i.blendColor(re.r,re.g,re.b,fe),A.copy(re),N=fe),f=V,b=!1}function at(V,xt){V.side===rn?pt(i.CULL_FACE):ut(i.CULL_FACE);let st=V.side===Ee;xt&&(st=!st),Z(st),V.blending===si&&V.transparent===!1?g(xn):g(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const ot=V.stencilWrite;a.setTest(ot),ot&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),z(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(V){T!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),T=V)}function I(V){V!==Fl?(ut(i.CULL_FACE),V!==F&&(V===wa?i.cullFace(i.BACK):V===Ol?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),F=V}function P(V){V!==R&&(nt&&i.lineWidth(V),R=V)}function z(V,xt,st){V?(ut(i.POLYGON_OFFSET_FILL),(U!==xt||y!==st)&&(i.polygonOffset(xt,st),U=xt,y=st)):pt(i.POLYGON_OFFSET_FILL)}function et(V){V?ut(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function w(V){V===void 0&&(V=i.TEXTURE0+B-1),tt!==V&&(i.activeTexture(V),tt=V)}function x(V,xt,st){st===void 0&&(tt===null?st=i.TEXTURE0+B-1:st=tt);let ot=lt[st];ot===void 0&&(ot={type:void 0,texture:void 0},lt[st]=ot),(ot.type!==V||ot.texture!==xt)&&(tt!==st&&(i.activeTexture(st),tt=st),i.bindTexture(V,xt||mt[V]),ot.type=V,ot.texture=xt)}function O(){const V=lt[tt];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function G(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ht(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function St(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Lt(V){_t.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),_t.copy(V))}function wt(V){X.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),X.copy(V))}function Nt(V,xt){let st=c.get(xt);st===void 0&&(st=new WeakMap,c.set(xt,st));let ot=st.get(V);ot===void 0&&(ot=i.getUniformBlockIndex(xt,V.name),st.set(V,ot))}function Ot(V,xt){const ot=c.get(xt).get(V);l.get(xt)!==ot&&(i.uniformBlockBinding(xt,ot,V.__bindingPointIndex),l.set(xt,ot))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},tt=null,lt={},d={},m=new WeakMap,u=[],v=null,_=!1,f=null,h=null,M=null,E=null,S=null,L=null,D=null,A=new Wt(0,0,0),N=0,b=!1,T=null,F=null,R=null,U=null,y=null,_t.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ut,disable:pt,bindFramebuffer:Mt,drawBuffers:Pt,useProgram:It,setBlending:g,setMaterial:at,setFlipSided:Z,setCullFace:I,setLineWidth:P,setPolygonOffset:z,setScissorTest:et,activeTexture:w,bindTexture:x,unbindTexture:O,compressedTexImage2D:q,compressedTexImage3D:G,texImage2D:Tt,texImage3D:St,updateUBOMapping:Nt,uniformBlockBinding:Ot,texStorage2D:Gt,texStorage3D:ht,texSubImage2D:$,texSubImage3D:ft,compressedTexSubImage2D:ct,compressedTexSubImage3D:gt,scissor:Lt,viewport:wt,reset:$t}}function To(i,t,e,n){const r=kp(n);switch(e){case Qo:return i*t;case el:return i*t;case nl:return i*t*2;case il:return i*t/r.components*r.byteLength;case la:return i*t/r.components*r.byteLength;case rl:return i*t*2/r.components*r.byteLength;case ca:return i*t*2/r.components*r.byteLength;case tl:return i*t*3/r.components*r.byteLength;case ke:return i*t*4/r.components*r.byteLength;case ha:return i*t*4/r.components*r.byteLength;case yr:case Mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sr:case Er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cs:case Ds:return Math.max(i,16)*Math.max(t,8)/4;case Rs:case Ps:return Math.max(i,8)*Math.max(t,8)/2;case Ls:case Is:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Us:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ns:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fs:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Os:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Bs:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case zs:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ks:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Hs:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Vs:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Gs:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ws:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xs:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case js:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ys:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case qs:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case br:case Zs:case Ks:return Math.ceil(i/4)*Math.ceil(t/4)*16;case sl:case $s:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Js:case Qs:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kp(i){switch(i){case ln:case Ko:return{byteLength:1,components:1};case Ni:case $o:case Oi:return{byteLength:2,components:1};case aa:case oa:return{byteLength:2,components:4};case Fn:case sa:case sn:return{byteLength:4,components:1};case Jo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Hp(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,p=new WeakMap;let d;const m=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,x){return u?new OffscreenCanvas(w,x):Ar("canvas")}function _(w,x,O){let q=1;const G=et(w);if((G.width>O||G.height>O)&&(q=O/Math.max(G.width,G.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const $=Math.floor(q*G.width),ft=Math.floor(q*G.height);d===void 0&&(d=v($,ft));const ct=x?v($,ft):d;return ct.width=$,ct.height=ft,ct.getContext("2d").drawImage(w,0,0,$,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+$+"x"+ft+")."),ct}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),w;return w}function f(w){return w.generateMipmaps}function h(w){i.generateMipmap(w)}function M(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,x,O,q,G=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=x;if(x===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),x===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),x===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),x===i.RGBA){const ft=G?Dr:jt.getTransfer(q);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=ft===Jt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function S(w,x){let O;return w?x===null||x===Fn||x===di?O=i.DEPTH24_STENCIL8:x===sn?O=i.DEPTH32F_STENCIL8:x===Ni&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Fn||x===di?O=i.DEPTH_COMPONENT24:x===sn?O=i.DEPTH_COMPONENT32F:x===Ni&&(O=i.DEPTH_COMPONENT16),O}function L(w,x){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==He&&w.minFilter!==Xe?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function D(w){const x=w.target;x.removeEventListener("dispose",D),N(x),x.isVideoTexture&&p.delete(x)}function A(w){const x=w.target;x.removeEventListener("dispose",A),T(x)}function N(w){const x=n.get(w);if(x.__webglInit===void 0)return;const O=w.source,q=m.get(O);if(q){const G=q[x.__cacheKey];G.usedTimes--,G.usedTimes===0&&b(w),Object.keys(q).length===0&&m.delete(O)}n.remove(w)}function b(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const O=w.source,q=m.get(O);delete q[x.__cacheKey],o.memory.textures--}function T(w){const x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let G=0;G<x.__webglFramebuffer[q].length;G++)i.deleteFramebuffer(x.__webglFramebuffer[q][G]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=w.textures;for(let q=0,G=O.length;q<G;q++){const $=n.get(O[q]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(O[q])}n.remove(w)}let F=0;function R(){F=0}function U(){const w=F;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),F+=1,w}function y(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function B(w,x){const O=n.get(w);if(w.isVideoTexture&&P(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(O,w,x);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function nt(w,x){const O=n.get(w);if(w.version>0&&O.__version!==w.version){X(O,w,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function k(w,x){const O=n.get(w);if(w.version>0&&O.__version!==w.version){X(O,w,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function J(w,x){const O=n.get(w);if(w.version>0&&O.__version!==w.version){Q(O,w,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const tt={[Ui]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[As]:i.MIRRORED_REPEAT},lt={[He]:i.NEAREST,[dc]:i.NEAREST_MIPMAP_NEAREST,[Vi]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[Nr]:i.LINEAR_MIPMAP_NEAREST,[Un]:i.LINEAR_MIPMAP_LINEAR},H={[_c]:i.NEVER,[Sc]:i.ALWAYS,[gc]:i.LESS,[al]:i.LEQUAL,[vc]:i.EQUAL,[Mc]:i.GEQUAL,[xc]:i.GREATER,[yc]:i.NOTEQUAL};function W(w,x){if(x.type===sn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Xe||x.magFilter===Nr||x.magFilter===Vi||x.magFilter===Un||x.minFilter===Xe||x.minFilter===Nr||x.minFilter===Vi||x.minFilter===Un)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,tt[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,tt[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,tt[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,lt[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,lt[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,H[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===He||x.minFilter!==Vi&&x.minFilter!==Un||x.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function _t(w,x){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",D));const q=x.source;let G=m.get(q);G===void 0&&(G={},m.set(q,G));const $=y(x);if($!==w.__cacheKey){G[$]===void 0&&(G[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),G[$].usedTimes++;const ft=G[w.__cacheKey];ft!==void 0&&(G[w.__cacheKey].usedTimes--,ft.usedTimes===0&&b(x)),w.__cacheKey=$,w.__webglTexture=G[$].texture}return O}function X(w,x,O){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);const G=_t(w,x),$=x.source;e.bindTexture(q,w.__webglTexture,i.TEXTURE0+O);const ft=n.get($);if($.version!==ft.__version||G===!0){e.activeTexture(i.TEXTURE0+O);const ct=jt.getPrimaries(jt.workingColorSpace),gt=x.colorSpace===vn?null:jt.getPrimaries(x.colorSpace),Gt=x.colorSpace===vn||ct===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let ht=_(x.image,!1,r.maxTextureSize);ht=z(x,ht);const Tt=s.convert(x.format,x.colorSpace),St=s.convert(x.type);let Lt=E(x.internalFormat,Tt,St,x.colorSpace,x.isVideoTexture);W(q,x);let wt;const Nt=x.mipmaps,Ot=x.isVideoTexture!==!0,$t=ft.__version===void 0||G===!0,V=$.dataReady,xt=L(x,ht);if(x.isDepthTexture)Lt=S(x.format===fi,x.type),$t&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Lt,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,Lt,ht.width,ht.height,0,Tt,St,null));else if(x.isDataTexture)if(Nt.length>0){Ot&&$t&&e.texStorage2D(i.TEXTURE_2D,xt,Lt,Nt[0].width,Nt[0].height);for(let st=0,ot=Nt.length;st<ot;st++)wt=Nt[st],Ot?V&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,wt.width,wt.height,Tt,St,wt.data):e.texImage2D(i.TEXTURE_2D,st,Lt,wt.width,wt.height,0,Tt,St,wt.data);x.generateMipmaps=!1}else Ot?($t&&e.texStorage2D(i.TEXTURE_2D,xt,Lt,ht.width,ht.height),V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht.width,ht.height,Tt,St,ht.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,ht.width,ht.height,0,Tt,St,ht.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ot&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Lt,Nt[0].width,Nt[0].height,ht.depth);for(let st=0,ot=Nt.length;st<ot;st++)if(wt=Nt[st],x.format!==ke)if(Tt!==null)if(Ot){if(V)if(x.layerUpdates.size>0){const yt=To(wt.width,wt.height,x.format,x.type);for(const Et of x.layerUpdates){const zt=wt.data.subarray(Et*yt/wt.data.BYTES_PER_ELEMENT,(Et+1)*yt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,Et,wt.width,wt.height,1,Tt,zt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,wt.width,wt.height,ht.depth,Tt,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Lt,wt.width,wt.height,ht.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,wt.width,wt.height,ht.depth,Tt,St,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Lt,wt.width,wt.height,ht.depth,0,Tt,St,wt.data)}else{Ot&&$t&&e.texStorage2D(i.TEXTURE_2D,xt,Lt,Nt[0].width,Nt[0].height);for(let st=0,ot=Nt.length;st<ot;st++)wt=Nt[st],x.format!==ke?Tt!==null?Ot?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,wt.width,wt.height,Tt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Lt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?V&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,wt.width,wt.height,Tt,St,wt.data):e.texImage2D(i.TEXTURE_2D,st,Lt,wt.width,wt.height,0,Tt,St,wt.data)}else if(x.isDataArrayTexture)if(Ot){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Lt,ht.width,ht.height,ht.depth),V)if(x.layerUpdates.size>0){const st=To(ht.width,ht.height,x.format,x.type);for(const ot of x.layerUpdates){const yt=ht.data.subarray(ot*st/ht.data.BYTES_PER_ELEMENT,(ot+1)*st/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,ht.width,ht.height,1,Tt,St,yt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Tt,St,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,ht.width,ht.height,ht.depth,0,Tt,St,ht.data);else if(x.isData3DTexture)Ot?($t&&e.texStorage3D(i.TEXTURE_3D,xt,Lt,ht.width,ht.height,ht.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Tt,St,ht.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,ht.width,ht.height,ht.depth,0,Tt,St,ht.data);else if(x.isFramebufferTexture){if($t)if(Ot)e.texStorage2D(i.TEXTURE_2D,xt,Lt,ht.width,ht.height);else{let st=ht.width,ot=ht.height;for(let yt=0;yt<xt;yt++)e.texImage2D(i.TEXTURE_2D,yt,Lt,st,ot,0,Tt,St,null),st>>=1,ot>>=1}}else if(Nt.length>0){if(Ot&&$t){const st=et(Nt[0]);e.texStorage2D(i.TEXTURE_2D,xt,Lt,st.width,st.height)}for(let st=0,ot=Nt.length;st<ot;st++)wt=Nt[st],Ot?V&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,Tt,St,wt):e.texImage2D(i.TEXTURE_2D,st,Lt,Tt,St,wt);x.generateMipmaps=!1}else if(Ot){if($t){const st=et(ht);e.texStorage2D(i.TEXTURE_2D,xt,Lt,st.width,st.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,St,ht)}else e.texImage2D(i.TEXTURE_2D,0,Lt,Tt,St,ht);f(x)&&h(q),ft.__version=$.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Q(w,x,O){if(x.image.length!==6)return;const q=_t(w,x),G=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);const $=n.get(G);if(G.version!==$.__version||q===!0){e.activeTexture(i.TEXTURE0+O);const ft=jt.getPrimaries(jt.workingColorSpace),ct=x.colorSpace===vn?null:jt.getPrimaries(x.colorSpace),gt=x.colorSpace===vn||ft===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Gt=x.isCompressedTexture||x.image[0].isCompressedTexture,ht=x.image[0]&&x.image[0].isDataTexture,Tt=[];for(let ot=0;ot<6;ot++)!Gt&&!ht?Tt[ot]=_(x.image[ot],!0,r.maxCubemapSize):Tt[ot]=ht?x.image[ot].image:x.image[ot],Tt[ot]=z(x,Tt[ot]);const St=Tt[0],Lt=s.convert(x.format,x.colorSpace),wt=s.convert(x.type),Nt=E(x.internalFormat,Lt,wt,x.colorSpace),Ot=x.isVideoTexture!==!0,$t=$.__version===void 0||q===!0,V=G.dataReady;let xt=L(x,St);W(i.TEXTURE_CUBE_MAP,x);let st;if(Gt){Ot&&$t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,Nt,St.width,St.height);for(let ot=0;ot<6;ot++){st=Tt[ot].mipmaps;for(let yt=0;yt<st.length;yt++){const Et=st[yt];x.format!==ke?Lt!==null?Ot?V&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,yt,0,0,Et.width,Et.height,Lt,Et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,yt,Nt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,yt,0,0,Et.width,Et.height,Lt,wt,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,yt,Nt,Et.width,Et.height,0,Lt,wt,Et.data)}}}else{if(st=x.mipmaps,Ot&&$t){st.length>0&&xt++;const ot=et(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,Nt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(ht){Ot?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Tt[ot].width,Tt[ot].height,Lt,wt,Tt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Nt,Tt[ot].width,Tt[ot].height,0,Lt,wt,Tt[ot].data);for(let yt=0;yt<st.length;yt++){const zt=st[yt].image[ot].image;Ot?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,yt+1,0,0,zt.width,zt.height,Lt,wt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,yt+1,Nt,zt.width,zt.height,0,Lt,wt,zt.data)}}else{Ot?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Lt,wt,Tt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Nt,Lt,wt,Tt[ot]);for(let yt=0;yt<st.length;yt++){const Et=st[yt];Ot?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,yt+1,0,0,Lt,wt,Et.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,yt+1,Nt,Lt,wt,Et.image[ot])}}}f(x)&&h(i.TEXTURE_CUBE_MAP),$.__version=G.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function mt(w,x,O,q,G,$){const ft=s.convert(O.format,O.colorSpace),ct=s.convert(O.type),gt=E(O.internalFormat,ft,ct,O.colorSpace),Gt=n.get(x),ht=n.get(O);if(ht.__renderTarget=x,!Gt.__hasExternalTextures){const Tt=Math.max(1,x.width>>$),St=Math.max(1,x.height>>$);G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?e.texImage3D(G,$,gt,Tt,St,x.depth,0,ft,ct,null):e.texImage2D(G,$,gt,Tt,St,0,ft,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),I(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,G,ht.__webglTexture,0,Z(x)):(G===i.TEXTURE_2D||G>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,G,ht.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(w,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){const q=x.depthTexture,G=q&&q.isDepthTexture?q.type:null,$=S(x.stencilBuffer,G),ft=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=Z(x);I(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,$,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,w)}else{const q=x.textures;for(let G=0;G<q.length;G++){const $=q[G],ft=s.convert($.format,$.colorSpace),ct=s.convert($.type),gt=E($.internalFormat,ft,ct,$.colorSpace),Gt=Z(x);O&&I(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,gt,x.width,x.height):I(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,gt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,gt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),B(x.depthTexture,0);const G=q.__webglTexture,$=Z(x);if(x.depthTexture.format===ai)I(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0);else if(x.depthTexture.format===fi)I(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Mt(w){const x=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const q=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const G=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",G)};q.addEventListener("dispose",G),x.__depthDisposeCallback=G}x.__boundDepthTexture=q}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");pt(x.__webglFramebuffer,w)}else if(O){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),ut(x.__webglDepthbuffer[q],w,!1);else{const G=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ut(x.__webglDepthbuffer,w,!1);else{const q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,G)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(w,x,O){const q=n.get(w);x!==void 0&&mt(q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Mt(w)}function It(w){const x=w.texture,O=n.get(w),q=n.get(x);w.addEventListener("dispose",A);const G=w.textures,$=w.isWebGLCubeRenderTarget===!0,ft=G.length>1;if(ft||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,o.memory.textures++),$){O.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[ct]=[];for(let gt=0;gt<x.mipmaps.length;gt++)O.__webglFramebuffer[ct][gt]=i.createFramebuffer()}else O.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)O.__webglFramebuffer[ct]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ft)for(let ct=0,gt=G.length;ct<gt;ct++){const Gt=n.get(G[ct]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&I(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ct=0;ct<G.length;ct++){const gt=G[ct];O.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ct]);const Gt=s.convert(gt.format,gt.colorSpace),ht=s.convert(gt.type),Tt=E(gt.internalFormat,Gt,ht,gt.colorSpace,w.isXRRenderTarget===!0),St=Z(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,Tt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,O.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),W(i.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let gt=0;gt<x.mipmaps.length;gt++)mt(O.__webglFramebuffer[ct][gt],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,gt);else mt(O.__webglFramebuffer[ct],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);f(x)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let ct=0,gt=G.length;ct<gt;ct++){const Gt=G[ct],ht=n.get(Gt);e.bindTexture(i.TEXTURE_2D,ht.__webglTexture),W(i.TEXTURE_2D,Gt),mt(O.__webglFramebuffer,w,Gt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),f(Gt)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ct=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,q.__webglTexture),W(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let gt=0;gt<x.mipmaps.length;gt++)mt(O.__webglFramebuffer[gt],w,x,i.COLOR_ATTACHMENT0,ct,gt);else mt(O.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,ct,0);f(x)&&h(ct),e.unbindTexture()}w.depthBuffer&&Mt(w)}function Ut(w){const x=w.textures;for(let O=0,q=x.length;O<q;O++){const G=x[O];if(f(G)){const $=M(w),ft=n.get(G).__webglTexture;e.bindTexture($,ft),h($),e.unbindTexture()}}}const Xt=[],g=[];function at(w){if(w.samples>0){if(I(w)===!1){const x=w.textures,O=w.width,q=w.height;let G=i.COLOR_BUFFER_BIT;const $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(w),ct=x.length>1;if(ct)for(let gt=0;gt<x.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let gt=0;gt<x.length;gt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(G|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(G|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[gt]);const Gt=n.get(x[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,G,i.NEAREST),l===!0&&(Xt.length=0,g.length=0,Xt.push(i.COLOR_ATTACHMENT0+gt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Xt.push($),g.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,g)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let gt=0;gt<x.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,ft.__webglColorRenderbuffer[gt]);const Gt=n.get(x[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Z(w){return Math.min(r.maxSamples,w.samples)}function I(w){const x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function P(w){const x=o.render.frame;p.get(w)!==x&&(p.set(w,x),w.update())}function z(w,x){const O=w.colorSpace,q=w.format,G=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==mi&&O!==vn&&(jt.getTransfer(O)===Jt?(q!==ke||G!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function et(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=R,this.setTexture2D=B,this.setTexture2DArray=nt,this.setTexture3D=k,this.setTextureCube=J,this.rebindTextures=Pt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=I}function Vp(i,t){function e(n,r=vn){let s;const o=jt.getTransfer(r);if(n===ln)return i.UNSIGNED_BYTE;if(n===aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ko)return i.BYTE;if(n===$o)return i.SHORT;if(n===Ni)return i.UNSIGNED_SHORT;if(n===sa)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===Oi)return i.HALF_FLOAT;if(n===Qo)return i.ALPHA;if(n===tl)return i.RGB;if(n===ke)return i.RGBA;if(n===el)return i.LUMINANCE;if(n===nl)return i.LUMINANCE_ALPHA;if(n===ai)return i.DEPTH_COMPONENT;if(n===fi)return i.DEPTH_STENCIL;if(n===il)return i.RED;if(n===la)return i.RED_INTEGER;if(n===rl)return i.RG;if(n===ca)return i.RG_INTEGER;if(n===ha)return i.RGBA_INTEGER;if(n===yr||n===Mr||n===Sr||n===Er)if(o===Jt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===yr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===yr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rs||n===Cs||n===Ps||n===Ds)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Rs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ps)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ds)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ls||n===Is||n===Us)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ls||n===Is)return o===Jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Us)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ns||n===Fs||n===Os||n===Bs||n===zs||n===ks||n===Hs||n===Vs||n===Gs||n===Ws||n===Xs||n===js||n===Ys||n===qs)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ns)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fs)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Os)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bs)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zs)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ks)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hs)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vs)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gs)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ws)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xs)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===js)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ys)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qs)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===br||n===Zs||n===Ks)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===br)return o===Jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ks)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sl||n===$s||n===Js||n===Qs)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===br)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$s)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Js)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qs)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Gp extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Pi extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wp={type:"move"};class ls{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,n),h=this._getHandJoint(c,_);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const p=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],m=p.position.distanceTo(d.position),u=.02,v=.005;c.inputState.pinching&&m>u+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&m<=u-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wp)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Xp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jp=`
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

}`;class Yp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new ye,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Sn({vertexShader:Xp,fragmentShader:jp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qp extends zn{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,p=null,d=null,m=null,u=null,v=null;const _=new Yp,f=e.getContextAttributes();let h=null,M=null;const E=[],S=[],L=new Bt;let D=null;const A=new Le;A.viewport=new se;const N=new Le;N.viewport=new se;const b=[A,N],T=new Gp;let F=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=E[X];return Q===void 0&&(Q=new ls,E[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=E[X];return Q===void 0&&(Q=new ls,E[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=E[X];return Q===void 0&&(Q=new ls,E[X]=Q),Q.getHandSpace()};function U(X){const Q=S.indexOf(X.inputSource);if(Q===-1)return;const mt=E[Q];mt!==void 0&&(mt.update(X.inputSource,X.frame,c||o),mt.dispatchEvent({type:X.type,data:X.inputSource}))}function y(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",y),r.removeEventListener("inputsourceschange",B);for(let X=0;X<E.length;X++){const Q=S[X];Q!==null&&(S[X]=null,E[X].disconnect(Q))}F=null,R=null,_.reset(),t.setRenderTarget(h),u=null,m=null,d=null,r=null,M=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return m!==null?m:u},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",y),r.addEventListener("inputsourceschange",B),f.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(L),r.renderState.layers===void 0){const Q={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(r,e,Q),r.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new On(u.framebufferWidth,u.framebufferHeight,{format:ke,type:ln,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let Q=null,mt=null,ut=null;f.depth&&(ut=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=f.stencil?fi:ai,mt=f.stencil?di:Fn);const pt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};d=new XRWebGLBinding(r,e),m=d.createProjectionLayer(pt),r.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),M=new On(m.textureWidth,m.textureHeight,{format:ke,type:ln,depthTexture:new yl(m.textureWidth,m.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),_t.setContext(r),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function B(X){for(let Q=0;Q<X.removed.length;Q++){const mt=X.removed[Q],ut=S.indexOf(mt);ut>=0&&(S[ut]=null,E[ut].disconnect(mt))}for(let Q=0;Q<X.added.length;Q++){const mt=X.added[Q];let ut=S.indexOf(mt);if(ut===-1){for(let Mt=0;Mt<E.length;Mt++)if(Mt>=S.length){S.push(mt),ut=Mt;break}else if(S[Mt]===null){S[Mt]=mt,ut=Mt;break}if(ut===-1)break}const pt=E[ut];pt&&pt.connect(mt)}}const nt=new K,k=new K;function J(X,Q,mt){nt.setFromMatrixPosition(Q.matrixWorld),k.setFromMatrixPosition(mt.matrixWorld);const ut=nt.distanceTo(k),pt=Q.projectionMatrix.elements,Mt=mt.projectionMatrix.elements,Pt=pt[14]/(pt[10]-1),It=pt[14]/(pt[10]+1),Ut=(pt[9]+1)/pt[5],Xt=(pt[9]-1)/pt[5],g=(pt[8]-1)/pt[0],at=(Mt[8]+1)/Mt[0],Z=Pt*g,I=Pt*at,P=ut/(-g+at),z=P*-g;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(z),X.translateZ(P),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),pt[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const et=Pt+P,w=It+P,x=Z-z,O=I+(ut-z),q=Ut*It/w*et,G=Xt*It/w*et;X.projectionMatrix.makePerspective(x,O,q,G,et,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function tt(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let Q=X.near,mt=X.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(mt=_.depthFar)),T.near=N.near=A.near=Q,T.far=N.far=A.far=mt,(F!==T.near||R!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,R=T.far),A.layers.mask=X.layers.mask|2,N.layers.mask=X.layers.mask|4,T.layers.mask=A.layers.mask|N.layers.mask;const ut=X.parent,pt=T.cameras;tt(T,ut);for(let Mt=0;Mt<pt.length;Mt++)tt(pt[Mt],ut);pt.length===2?J(T,A,N):T.projectionMatrix.copy(A.projectionMatrix),lt(X,T,ut)};function lt(X,Q,mt){mt===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(mt.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Fi*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(m===null&&u===null))return l},this.setFoveation=function(X){l=X,m!==null&&(m.fixedFoveation=X),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(T)};let H=null;function W(X,Q){if(p=Q.getViewerPose(c||o),v=Q,p!==null){const mt=p.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let ut=!1;mt.length!==T.cameras.length&&(T.cameras.length=0,ut=!0);for(let Mt=0;Mt<mt.length;Mt++){const Pt=mt[Mt];let It=null;if(u!==null)It=u.getViewport(Pt);else{const Xt=d.getViewSubImage(m,Pt);It=Xt.viewport,Mt===0&&(t.setRenderTargetTextures(M,Xt.colorTexture,m.ignoreDepthValues?void 0:Xt.depthStencilTexture),t.setRenderTarget(M))}let Ut=b[Mt];Ut===void 0&&(Ut=new Le,Ut.layers.enable(Mt),Ut.viewport=new se,b[Mt]=Ut),Ut.matrix.fromArray(Pt.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Pt.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(It.x,It.y,It.width,It.height),Mt===0&&(T.matrix.copy(Ut.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ut===!0&&T.cameras.push(Ut)}const pt=r.enabledFeatures;if(pt&&pt.includes("depth-sensing")){const Mt=d.getDepthInformation(mt[0]);Mt&&Mt.isValid&&Mt.texture&&_.init(t,Mt,r.renderState)}}for(let mt=0;mt<E.length;mt++){const ut=S[mt],pt=E[mt];ut!==null&&pt!==void 0&&pt.update(ut,Q,c||o)}H&&H(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),v=null}const _t=new vl;_t.setAnimationLoop(W),this.setAnimationLoop=function(X){H=X},this.dispose=function(){}}}const Cn=new Ve,Zp=new ie;function Kp(i,t){function e(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,ml(i)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function r(f,h,M,E,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(f,h):h.isMeshToonMaterial?(s(f,h),d(f,h)):h.isMeshPhongMaterial?(s(f,h),p(f,h)):h.isMeshStandardMaterial?(s(f,h),m(f,h),h.isMeshPhysicalMaterial&&u(f,h,S)):h.isMeshMatcapMaterial?(s(f,h),v(f,h)):h.isMeshDepthMaterial?s(f,h):h.isMeshDistanceMaterial?(s(f,h),_(f,h)):h.isMeshNormalMaterial?s(f,h):h.isLineBasicMaterial?(o(f,h),h.isLineDashedMaterial&&a(f,h)):h.isPointsMaterial?l(f,h,M,E):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,e(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===Ee&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,e(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===Ee&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,e(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,e(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const M=t.get(h),E=M.envMap,S=M.envMapRotation;E&&(f.envMap.value=E,Cn.copy(S),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),f.envMapRotation.value.setFromMatrix4(Zp.makeRotationFromEuler(Cn)),f.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,f.aoMapTransform))}function o(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform))}function a(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function l(f,h,M,E){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*M,f.scale.value=E*.5,h.map&&(f.map.value=h.map,e(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function p(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function d(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function m(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function u(f,h,M){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ee&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,h){h.matcap&&(f.matcap.value=h.matcap)}function _(f,h){const M=t.get(h).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function $p(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){const S=E.program;n.uniformBlockBinding(M,S)}function c(M,E){let S=r[M.id];S===void 0&&(v(M),S=p(M),r[M.id]=S,M.addEventListener("dispose",f));const L=E.program;n.updateUBOMapping(M,L);const D=t.render.frame;s[M.id]!==D&&(m(M),s[M.id]=D)}function p(M){const E=d();M.__bindingPointIndex=E;const S=i.createBuffer(),L=M.__size,D=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,L,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(M){const E=r[M.id],S=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let D=0,A=S.length;D<A;D++){const N=Array.isArray(S[D])?S[D]:[S[D]];for(let b=0,T=N.length;b<T;b++){const F=N[b];if(u(F,D,b,L)===!0){const R=F.__offset,U=Array.isArray(F.value)?F.value:[F.value];let y=0;for(let B=0;B<U.length;B++){const nt=U[B],k=_(nt);typeof nt=="number"||typeof nt=="boolean"?(F.__data[0]=nt,i.bufferSubData(i.UNIFORM_BUFFER,R+y,F.__data)):nt.isMatrix3?(F.__data[0]=nt.elements[0],F.__data[1]=nt.elements[1],F.__data[2]=nt.elements[2],F.__data[3]=0,F.__data[4]=nt.elements[3],F.__data[5]=nt.elements[4],F.__data[6]=nt.elements[5],F.__data[7]=0,F.__data[8]=nt.elements[6],F.__data[9]=nt.elements[7],F.__data[10]=nt.elements[8],F.__data[11]=0):(nt.toArray(F.__data,y),y+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,R,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,E,S,L){const D=M.value,A=E+"_"+S;if(L[A]===void 0)return typeof D=="number"||typeof D=="boolean"?L[A]=D:L[A]=D.clone(),!0;{const N=L[A];if(typeof D=="number"||typeof D=="boolean"){if(N!==D)return L[A]=D,!0}else if(N.equals(D)===!1)return N.copy(D),!0}return!1}function v(M){const E=M.uniforms;let S=0;const L=16;for(let A=0,N=E.length;A<N;A++){const b=Array.isArray(E[A])?E[A]:[E[A]];for(let T=0,F=b.length;T<F;T++){const R=b[T],U=Array.isArray(R.value)?R.value:[R.value];for(let y=0,B=U.length;y<B;y++){const nt=U[y],k=_(nt),J=S%L,tt=J%k.boundary,lt=J+tt;S+=tt,lt!==0&&L-lt<k.storage&&(S+=L-lt),R.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=S,S+=k.storage}}}const D=S%L;return D>0&&(S+=L-D),M.__size=S,M.__cache={},this}function _(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),E}function f(M){const E=M.target;E.removeEventListener("dispose",f);const S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function h(){for(const M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Jp{constructor(t={}){const{canvas:e=zc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:m=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const v=new Uint32Array(4),_=new Int32Array(4);let f=null,h=null;const M=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this.toneMapping=yn,this.toneMappingExposure=1;const S=this;let L=!1,D=0,A=0,N=null,b=-1,T=null;const F=new se,R=new se;let U=null;const y=new Wt(0);let B=0,nt=e.width,k=e.height,J=1,tt=null,lt=null;const H=new se(0,0,nt,k),W=new se(0,0,nt,k);let _t=!1;const X=new pa;let Q=!1,mt=!1;const ut=new ie,pt=new ie,Mt=new K,Pt=new se,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function Xt(){return N===null?J:1}let g=n;function at(C,j){return e.getContext(C,j)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:p,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ia}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),g===null){const j="webgl2";if(g=at(j,C),g===null)throw at(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Z,I,P,z,et,w,x,O,q,G,$,ft,ct,gt,Gt,ht,Tt,St,Lt,wt,Nt,Ot,$t,V;function xt(){Z=new nf(g),Z.init(),Ot=new Vp(g,Z),I=new Kd(g,Z,t,Ot),P=new zp(g,Z),I.reverseDepthBuffer&&m&&P.buffers.depth.setReversed(!0),z=new af(g),et=new bp,w=new Hp(g,Z,P,et,I,Ot,z),x=new Jd(S),O=new ef(S),q=new dh(g),$t=new qd(g,q),G=new rf(g,q,z,$t),$=new lf(g,G,q,z),Lt=new of(g,I,w),ht=new $d(et),ft=new Ep(S,x,O,Z,I,$t,ht),ct=new Kp(S,et),gt=new wp,Gt=new Lp(Z),St=new Yd(S,x,O,P,$,u,l),Tt=new Op(S,$,I),V=new $p(g,z,I,P),wt=new Zd(g,Z,z),Nt=new sf(g,Z,z),z.programs=ft.programs,S.capabilities=I,S.extensions=Z,S.properties=et,S.renderLists=gt,S.shadowMap=Tt,S.state=P,S.info=z}xt();const st=new qp(S,g);this.xr=st,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const C=Z.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Z.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(C){C!==void 0&&(J=C,this.setSize(nt,k,!1))},this.getSize=function(C){return C.set(nt,k)},this.setSize=function(C,j,it=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}nt=C,k=j,e.width=Math.floor(C*J),e.height=Math.floor(j*J),it===!0&&(e.style.width=C+"px",e.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(nt*J,k*J).floor()},this.setDrawingBufferSize=function(C,j,it){nt=C,k=j,J=it,e.width=Math.floor(C*it),e.height=Math.floor(j*it),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(H)},this.setViewport=function(C,j,it,rt){C.isVector4?H.set(C.x,C.y,C.z,C.w):H.set(C,j,it,rt),P.viewport(F.copy(H).multiplyScalar(J).round())},this.getScissor=function(C){return C.copy(W)},this.setScissor=function(C,j,it,rt){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,j,it,rt),P.scissor(R.copy(W).multiplyScalar(J).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(C){P.setScissorTest(_t=C)},this.setOpaqueSort=function(C){tt=C},this.setTransparentSort=function(C){lt=C},this.getClearColor=function(C){return C.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(C=!0,j=!0,it=!0){let rt=0;if(C){let Y=!1;if(N!==null){const dt=N.texture.format;Y=dt===ha||dt===ca||dt===la}if(Y){const dt=N.texture.type,bt=dt===ln||dt===Fn||dt===Ni||dt===di||dt===aa||dt===oa,At=St.getClearColor(),Rt=St.getClearAlpha(),Ft=At.r,kt=At.g,Ct=At.b;bt?(v[0]=Ft,v[1]=kt,v[2]=Ct,v[3]=Rt,g.clearBufferuiv(g.COLOR,0,v)):(_[0]=Ft,_[1]=kt,_[2]=Ct,_[3]=Rt,g.clearBufferiv(g.COLOR,0,_))}else rt|=g.COLOR_BUFFER_BIT}j&&(rt|=g.DEPTH_BUFFER_BIT),it&&(rt|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),gt.dispose(),Gt.dispose(),et.dispose(),x.dispose(),O.dispose(),$.dispose(),$t.dispose(),V.dispose(),ft.dispose(),st.dispose(),st.removeEventListener("sessionstart",va),st.removeEventListener("sessionend",xa),En.stop()};function ot(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const C=z.autoReset,j=Tt.enabled,it=Tt.autoUpdate,rt=Tt.needsUpdate,Y=Tt.type;xt(),z.autoReset=C,Tt.enabled=j,Tt.autoUpdate=it,Tt.needsUpdate=rt,Tt.type=Y}function Et(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function zt(C){const j=C.target;j.removeEventListener("dispose",zt),re(j)}function re(C){fe(C),et.remove(C)}function fe(C){const j=et.get(C).programs;j!==void 0&&(j.forEach(function(it){ft.releaseProgram(it)}),C.isShaderMaterial&&ft.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,it,rt,Y,dt){j===null&&(j=It);const bt=Y.isMesh&&Y.matrixWorld.determinant()<0,At=Dl(C,j,it,rt,Y);P.setMaterial(rt,bt);let Rt=it.index,Ft=1;if(rt.wireframe===!0){if(Rt=G.getWireframeAttribute(it),Rt===void 0)return;Ft=2}const kt=it.drawRange,Ct=it.attributes.position;let Yt=kt.start*Ft,te=(kt.start+kt.count)*Ft;dt!==null&&(Yt=Math.max(Yt,dt.start*Ft),te=Math.min(te,(dt.start+dt.count)*Ft)),Rt!==null?(Yt=Math.max(Yt,0),te=Math.min(te,Rt.count)):Ct!=null&&(Yt=Math.max(Yt,0),te=Math.min(te,Ct.count));const ee=te-Yt;if(ee<0||ee===1/0)return;$t.setup(Y,rt,At,it,Rt);let Me,qt=wt;if(Rt!==null&&(Me=q.get(Rt),qt=Nt,qt.setIndex(Me)),Y.isMesh)rt.wireframe===!0?(P.setLineWidth(rt.wireframeLinewidth*Xt()),qt.setMode(g.LINES)):qt.setMode(g.TRIANGLES);else if(Y.isLine){let Dt=rt.linewidth;Dt===void 0&&(Dt=1),P.setLineWidth(Dt*Xt()),Y.isLineSegments?qt.setMode(g.LINES):Y.isLineLoop?qt.setMode(g.LINE_LOOP):qt.setMode(g.LINE_STRIP)}else Y.isPoints?qt.setMode(g.POINTS):Y.isSprite&&qt.setMode(g.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)qt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))qt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Dt=Y._multiDrawStarts,Ze=Y._multiDrawCounts,Zt=Y._multiDrawCount,Fe=Rt?q.get(Rt).bytesPerElement:1,kn=et.get(rt).currentProgram.getUniforms();for(let be=0;be<Zt;be++)kn.setValue(g,"_gl_DrawID",be),qt.render(Dt[be]/Fe,Ze[be])}else if(Y.isInstancedMesh)qt.renderInstances(Yt,ee,Y.count);else if(it.isInstancedBufferGeometry){const Dt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Ze=Math.min(it.instanceCount,Dt);qt.renderInstances(Yt,ee,Ze)}else qt.render(Yt,ee)};function Kt(C,j,it){C.transparent===!0&&C.side===rn&&C.forceSinglePass===!1?(C.side=Ee,C.needsUpdate=!0,Hi(C,j,it),C.side=Mn,C.needsUpdate=!0,Hi(C,j,it),C.side=rn):Hi(C,j,it)}this.compile=function(C,j,it=null){it===null&&(it=C),h=Gt.get(it),h.init(j),E.push(h),it.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(h.pushLight(Y),Y.castShadow&&h.pushShadow(Y))}),C!==it&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(h.pushLight(Y),Y.castShadow&&h.pushShadow(Y))}),h.setupLights();const rt=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const dt=Y.material;if(dt)if(Array.isArray(dt))for(let bt=0;bt<dt.length;bt++){const At=dt[bt];Kt(At,it,Y),rt.add(At)}else Kt(dt,it,Y),rt.add(dt)}),E.pop(),h=null,rt},this.compileAsync=function(C,j,it=null){const rt=this.compile(C,j,it);return new Promise(Y=>{function dt(){if(rt.forEach(function(bt){et.get(bt).currentProgram.isReady()&&rt.delete(bt)}),rt.size===0){Y(C);return}setTimeout(dt,10)}Z.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Ne=null;function qe(C){Ne&&Ne(C)}function va(){En.stop()}function xa(){En.start()}const En=new vl;En.setAnimationLoop(qe),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(C){Ne=C,st.setAnimationLoop(C),C===null?En.stop():En.start()},st.addEventListener("sessionstart",va),st.addEventListener("sessionend",xa),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(j),j=st.getCamera()),C.isScene===!0&&C.onBeforeRender(S,C,j,N),h=Gt.get(C,E.length),h.init(j),E.push(h),pt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),X.setFromProjectionMatrix(pt),mt=this.localClippingEnabled,Q=ht.init(this.clippingPlanes,mt),f=gt.get(C,M.length),f.init(),M.push(f),st.enabled===!0&&st.isPresenting===!0){const dt=S.xr.getDepthSensingMesh();dt!==null&&Ur(dt,j,-1/0,S.sortObjects)}Ur(C,j,0,S.sortObjects),f.finish(),S.sortObjects===!0&&f.sort(tt,lt),Ut=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Ut&&St.addToRenderList(f,C),this.info.render.frame++,Q===!0&&ht.beginShadows();const it=h.state.shadowsArray;Tt.render(it,C,j),Q===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=f.opaque,Y=f.transmissive;if(h.setupLights(),j.isArrayCamera){const dt=j.cameras;if(Y.length>0)for(let bt=0,At=dt.length;bt<At;bt++){const Rt=dt[bt];Ma(rt,Y,C,Rt)}Ut&&St.render(C);for(let bt=0,At=dt.length;bt<At;bt++){const Rt=dt[bt];ya(f,C,Rt,Rt.viewport)}}else Y.length>0&&Ma(rt,Y,C,j),Ut&&St.render(C),ya(f,C,j);N!==null&&(w.updateMultisampleRenderTarget(N),w.updateRenderTargetMipmap(N)),C.isScene===!0&&C.onAfterRender(S,C,j),$t.resetDefaultState(),b=-1,T=null,E.pop(),E.length>0?(h=E[E.length-1],Q===!0&&ht.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,M.pop(),M.length>0?f=M[M.length-1]:f=null};function Ur(C,j,it,rt){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)it=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)h.pushLight(C),C.castShadow&&h.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||X.intersectsSprite(C)){rt&&Pt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(pt);const bt=$.update(C),At=C.material;At.visible&&f.push(C,bt,At,it,Pt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||X.intersectsObject(C))){const bt=$.update(C),At=C.material;if(rt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Pt.copy(C.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Pt.copy(bt.boundingSphere.center)),Pt.applyMatrix4(C.matrixWorld).applyMatrix4(pt)),Array.isArray(At)){const Rt=bt.groups;for(let Ft=0,kt=Rt.length;Ft<kt;Ft++){const Ct=Rt[Ft],Yt=At[Ct.materialIndex];Yt&&Yt.visible&&f.push(C,bt,Yt,it,Pt.z,Ct)}}else At.visible&&f.push(C,bt,At,it,Pt.z,null)}}const dt=C.children;for(let bt=0,At=dt.length;bt<At;bt++)Ur(dt[bt],j,it,rt)}function ya(C,j,it,rt){const Y=C.opaque,dt=C.transmissive,bt=C.transparent;h.setupLightsView(it),Q===!0&&ht.setGlobalState(S.clippingPlanes,it),rt&&P.viewport(F.copy(rt)),Y.length>0&&ki(Y,j,it),dt.length>0&&ki(dt,j,it),bt.length>0&&ki(bt,j,it),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Ma(C,j,it,rt){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[rt.id]===void 0&&(h.state.transmissionRenderTarget[rt.id]=new On(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?Oi:ln,minFilter:Un,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const dt=h.state.transmissionRenderTarget[rt.id],bt=rt.viewport||F;dt.setSize(bt.z,bt.w);const At=S.getRenderTarget();S.setRenderTarget(dt),S.getClearColor(y),B=S.getClearAlpha(),B<1&&S.setClearColor(16777215,.5),S.clear(),Ut&&St.render(it);const Rt=S.toneMapping;S.toneMapping=yn;const Ft=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),h.setupLightsView(rt),Q===!0&&ht.setGlobalState(S.clippingPlanes,rt),ki(C,it,rt),w.updateMultisampleRenderTarget(dt),w.updateRenderTargetMipmap(dt),Z.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Ct=0,Yt=j.length;Ct<Yt;Ct++){const te=j[Ct],ee=te.object,Me=te.geometry,qt=te.material,Dt=te.group;if(qt.side===rn&&ee.layers.test(rt.layers)){const Ze=qt.side;qt.side=Ee,qt.needsUpdate=!0,Sa(ee,it,rt,Me,qt,Dt),qt.side=Ze,qt.needsUpdate=!0,kt=!0}}kt===!0&&(w.updateMultisampleRenderTarget(dt),w.updateRenderTargetMipmap(dt))}S.setRenderTarget(At),S.setClearColor(y,B),Ft!==void 0&&(rt.viewport=Ft),S.toneMapping=Rt}function ki(C,j,it){const rt=j.isScene===!0?j.overrideMaterial:null;for(let Y=0,dt=C.length;Y<dt;Y++){const bt=C[Y],At=bt.object,Rt=bt.geometry,Ft=rt===null?bt.material:rt,kt=bt.group;At.layers.test(it.layers)&&Sa(At,j,it,Rt,Ft,kt)}}function Sa(C,j,it,rt,Y,dt){C.onBeforeRender(S,j,it,rt,Y,dt),C.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(S,j,it,rt,C,dt),Y.transparent===!0&&Y.side===rn&&Y.forceSinglePass===!1?(Y.side=Ee,Y.needsUpdate=!0,S.renderBufferDirect(it,j,rt,Y,C,dt),Y.side=Mn,Y.needsUpdate=!0,S.renderBufferDirect(it,j,rt,Y,C,dt),Y.side=rn):S.renderBufferDirect(it,j,rt,Y,C,dt),C.onAfterRender(S,j,it,rt,Y,dt)}function Hi(C,j,it){j.isScene!==!0&&(j=It);const rt=et.get(C),Y=h.state.lights,dt=h.state.shadowsArray,bt=Y.state.version,At=ft.getParameters(C,Y.state,dt,j,it),Rt=ft.getProgramCacheKey(At);let Ft=rt.programs;rt.environment=C.isMeshStandardMaterial?j.environment:null,rt.fog=j.fog,rt.envMap=(C.isMeshStandardMaterial?O:x).get(C.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,Ft===void 0&&(C.addEventListener("dispose",zt),Ft=new Map,rt.programs=Ft);let kt=Ft.get(Rt);if(kt!==void 0){if(rt.currentProgram===kt&&rt.lightsStateVersion===bt)return ba(C,At),kt}else At.uniforms=ft.getUniforms(C),C.onBeforeCompile(At,S),kt=ft.acquireProgram(At,Rt),Ft.set(Rt,kt),rt.uniforms=At.uniforms;const Ct=rt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ct.clippingPlanes=ht.uniform),ba(C,At),rt.needsLights=Il(C),rt.lightsStateVersion=bt,rt.needsLights&&(Ct.ambientLightColor.value=Y.state.ambient,Ct.lightProbe.value=Y.state.probe,Ct.directionalLights.value=Y.state.directional,Ct.directionalLightShadows.value=Y.state.directionalShadow,Ct.spotLights.value=Y.state.spot,Ct.spotLightShadows.value=Y.state.spotShadow,Ct.rectAreaLights.value=Y.state.rectArea,Ct.ltc_1.value=Y.state.rectAreaLTC1,Ct.ltc_2.value=Y.state.rectAreaLTC2,Ct.pointLights.value=Y.state.point,Ct.pointLightShadows.value=Y.state.pointShadow,Ct.hemisphereLights.value=Y.state.hemi,Ct.directionalShadowMap.value=Y.state.directionalShadowMap,Ct.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ct.spotShadowMap.value=Y.state.spotShadowMap,Ct.spotLightMatrix.value=Y.state.spotLightMatrix,Ct.spotLightMap.value=Y.state.spotLightMap,Ct.pointShadowMap.value=Y.state.pointShadowMap,Ct.pointShadowMatrix.value=Y.state.pointShadowMatrix),rt.currentProgram=kt,rt.uniformsList=null,kt}function Ea(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=Tr.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function ba(C,j){const it=et.get(C);it.outputColorSpace=j.outputColorSpace,it.batching=j.batching,it.batchingColor=j.batchingColor,it.instancing=j.instancing,it.instancingColor=j.instancingColor,it.instancingMorph=j.instancingMorph,it.skinning=j.skinning,it.morphTargets=j.morphTargets,it.morphNormals=j.morphNormals,it.morphColors=j.morphColors,it.morphTargetsCount=j.morphTargetsCount,it.numClippingPlanes=j.numClippingPlanes,it.numIntersection=j.numClipIntersection,it.vertexAlphas=j.vertexAlphas,it.vertexTangents=j.vertexTangents,it.toneMapping=j.toneMapping}function Dl(C,j,it,rt,Y){j.isScene!==!0&&(j=It),w.resetTextureUnits();const dt=j.fog,bt=rt.isMeshStandardMaterial?j.environment:null,At=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:mi,Rt=(rt.isMeshStandardMaterial?O:x).get(rt.envMap||bt),Ft=rt.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,kt=!!it.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Ct=!!it.morphAttributes.position,Yt=!!it.morphAttributes.normal,te=!!it.morphAttributes.color;let ee=yn;rt.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ee=S.toneMapping);const Me=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,qt=Me!==void 0?Me.length:0,Dt=et.get(rt),Ze=h.state.lights;if(Q===!0&&(mt===!0||C!==T)){const Ce=C===T&&rt.id===b;ht.setState(rt,C,Ce)}let Zt=!1;rt.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Ze.state.version||Dt.outputColorSpace!==At||Y.isBatchedMesh&&Dt.batching===!1||!Y.isBatchedMesh&&Dt.batching===!0||Y.isBatchedMesh&&Dt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Dt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Dt.instancing===!1||!Y.isInstancedMesh&&Dt.instancing===!0||Y.isSkinnedMesh&&Dt.skinning===!1||!Y.isSkinnedMesh&&Dt.skinning===!0||Y.isInstancedMesh&&Dt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Dt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Dt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Dt.instancingMorph===!1&&Y.morphTexture!==null||Dt.envMap!==Rt||rt.fog===!0&&Dt.fog!==dt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==ht.numPlanes||Dt.numIntersection!==ht.numIntersection)||Dt.vertexAlphas!==Ft||Dt.vertexTangents!==kt||Dt.morphTargets!==Ct||Dt.morphNormals!==Yt||Dt.morphColors!==te||Dt.toneMapping!==ee||Dt.morphTargetsCount!==qt)&&(Zt=!0):(Zt=!0,Dt.__version=rt.version);let Fe=Dt.currentProgram;Zt===!0&&(Fe=Hi(rt,j,Y));let kn=!1,be=!1,yi=!1;const ne=Fe.getUniforms(),Ge=Dt.uniforms;if(P.useProgram(Fe.program)&&(kn=!0,be=!0,yi=!0),rt.id!==b&&(b=rt.id,be=!0),kn||T!==C){P.buffers.depth.getReversed()?(ut.copy(C.projectionMatrix),Hc(ut),Vc(ut),ne.setValue(g,"projectionMatrix",ut)):ne.setValue(g,"projectionMatrix",C.projectionMatrix),ne.setValue(g,"viewMatrix",C.matrixWorldInverse);const cn=ne.map.cameraPosition;cn!==void 0&&cn.setValue(g,Mt.setFromMatrixPosition(C.matrixWorld)),I.logarithmicDepthBuffer&&ne.setValue(g,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&ne.setValue(g,"isOrthographic",C.isOrthographicCamera===!0),T!==C&&(T=C,be=!0,yi=!0)}if(Y.isSkinnedMesh){ne.setOptional(g,Y,"bindMatrix"),ne.setOptional(g,Y,"bindMatrixInverse");const Ce=Y.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),ne.setValue(g,"boneTexture",Ce.boneTexture,w))}Y.isBatchedMesh&&(ne.setOptional(g,Y,"batchingTexture"),ne.setValue(g,"batchingTexture",Y._matricesTexture,w),ne.setOptional(g,Y,"batchingIdTexture"),ne.setValue(g,"batchingIdTexture",Y._indirectTexture,w),ne.setOptional(g,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ne.setValue(g,"batchingColorTexture",Y._colorsTexture,w));const Mi=it.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&Lt.update(Y,it,Fe),(be||Dt.receiveShadow!==Y.receiveShadow)&&(Dt.receiveShadow=Y.receiveShadow,ne.setValue(g,"receiveShadow",Y.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Ge.envMap.value=Rt,Ge.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&j.environment!==null&&(Ge.envMapIntensity.value=j.environmentIntensity),be&&(ne.setValue(g,"toneMappingExposure",S.toneMappingExposure),Dt.needsLights&&Ll(Ge,yi),dt&&rt.fog===!0&&ct.refreshFogUniforms(Ge,dt),ct.refreshMaterialUniforms(Ge,rt,J,k,h.state.transmissionRenderTarget[C.id]),Tr.upload(g,Ea(Dt),Ge,w)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Tr.upload(g,Ea(Dt),Ge,w),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&ne.setValue(g,"center",Y.center),ne.setValue(g,"modelViewMatrix",Y.modelViewMatrix),ne.setValue(g,"normalMatrix",Y.normalMatrix),ne.setValue(g,"modelMatrix",Y.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Ce=rt.uniformsGroups;for(let cn=0,hn=Ce.length;cn<hn;cn++){const Ta=Ce[cn];V.update(Ta,Fe),V.bind(Ta,Fe)}}return Fe}function Ll(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function Il(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(C,j,it){et.get(C.texture).__webglTexture=j,et.get(C.depthTexture).__webglTexture=it;const rt=et.get(C);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=it===void 0,rt.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,j){const it=et.get(C);it.__webglFramebuffer=j,it.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,it=0){N=C,D=j,A=it;let rt=!0,Y=null,dt=!1,bt=!1;if(C){const Rt=et.get(C);if(Rt.__useDefaultFramebuffer!==void 0)P.bindFramebuffer(g.FRAMEBUFFER,null),rt=!1;else if(Rt.__webglFramebuffer===void 0)w.setupRenderTarget(C);else if(Rt.__hasExternalTextures)w.rebindTextures(C,et.get(C.texture).__webglTexture,et.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ct=C.depthTexture;if(Rt.__boundDepthTexture!==Ct){if(Ct!==null&&et.has(Ct)&&(C.width!==Ct.image.width||C.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(C)}}const Ft=C.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(bt=!0);const kt=et.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(kt[j])?Y=kt[j][it]:Y=kt[j],dt=!0):C.samples>0&&w.useMultisampledRTT(C)===!1?Y=et.get(C).__webglMultisampledFramebuffer:Array.isArray(kt)?Y=kt[it]:Y=kt,F.copy(C.viewport),R.copy(C.scissor),U=C.scissorTest}else F.copy(H).multiplyScalar(J).floor(),R.copy(W).multiplyScalar(J).floor(),U=_t;if(P.bindFramebuffer(g.FRAMEBUFFER,Y)&&rt&&P.drawBuffers(C,Y),P.viewport(F),P.scissor(R),P.setScissorTest(U),dt){const Rt=et.get(C.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+j,Rt.__webglTexture,it)}else if(bt){const Rt=et.get(C.texture),Ft=j||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Rt.__webglTexture,it||0,Ft)}b=-1},this.readRenderTargetPixels=function(C,j,it,rt,Y,dt,bt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=et.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&bt!==void 0&&(At=At[bt]),At){P.bindFramebuffer(g.FRAMEBUFFER,At);try{const Rt=C.texture,Ft=Rt.format,kt=Rt.type;if(!I.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-rt&&it>=0&&it<=C.height-Y&&g.readPixels(j,it,rt,Y,Ot.convert(Ft),Ot.convert(kt),dt)}finally{const Rt=N!==null?et.get(N).__webglFramebuffer:null;P.bindFramebuffer(g.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(C,j,it,rt,Y,dt,bt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=et.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&bt!==void 0&&(At=At[bt]),At){const Rt=C.texture,Ft=Rt.format,kt=Rt.type;if(!I.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=C.width-rt&&it>=0&&it<=C.height-Y){P.bindFramebuffer(g.FRAMEBUFFER,At);const Ct=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Ct),g.bufferData(g.PIXEL_PACK_BUFFER,dt.byteLength,g.STREAM_READ),g.readPixels(j,it,rt,Y,Ot.convert(Ft),Ot.convert(kt),0);const Yt=N!==null?et.get(N).__webglFramebuffer:null;P.bindFramebuffer(g.FRAMEBUFFER,Yt);const te=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await kc(g,te,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Ct),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,dt),g.deleteBuffer(Ct),g.deleteSync(te),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,j=null,it=0){C.isTexture!==!0&&(Ri("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,C=arguments[1]);const rt=Math.pow(2,-it),Y=Math.floor(C.image.width*rt),dt=Math.floor(C.image.height*rt),bt=j!==null?j.x:0,At=j!==null?j.y:0;w.setTexture2D(C,0),g.copyTexSubImage2D(g.TEXTURE_2D,it,0,0,bt,At,Y,dt),P.unbindTexture()},this.copyTextureToTexture=function(C,j,it=null,rt=null,Y=0){C.isTexture!==!0&&(Ri("WebGLRenderer: copyTextureToTexture function signature has changed."),rt=arguments[0]||null,C=arguments[1],j=arguments[2],Y=arguments[3]||0,it=null);let dt,bt,At,Rt,Ft,kt,Ct,Yt,te;const ee=C.isCompressedTexture?C.mipmaps[Y]:C.image;it!==null?(dt=it.max.x-it.min.x,bt=it.max.y-it.min.y,At=it.isBox3?it.max.z-it.min.z:1,Rt=it.min.x,Ft=it.min.y,kt=it.isBox3?it.min.z:0):(dt=ee.width,bt=ee.height,At=ee.depth||1,Rt=0,Ft=0,kt=0),rt!==null?(Ct=rt.x,Yt=rt.y,te=rt.z):(Ct=0,Yt=0,te=0);const Me=Ot.convert(j.format),qt=Ot.convert(j.type);let Dt;j.isData3DTexture?(w.setTexture3D(j,0),Dt=g.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(w.setTexture2DArray(j,0),Dt=g.TEXTURE_2D_ARRAY):(w.setTexture2D(j,0),Dt=g.TEXTURE_2D),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,j.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,j.unpackAlignment);const Ze=g.getParameter(g.UNPACK_ROW_LENGTH),Zt=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Fe=g.getParameter(g.UNPACK_SKIP_PIXELS),kn=g.getParameter(g.UNPACK_SKIP_ROWS),be=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,ee.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ee.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Rt),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ft),g.pixelStorei(g.UNPACK_SKIP_IMAGES,kt);const yi=C.isDataArrayTexture||C.isData3DTexture,ne=j.isDataArrayTexture||j.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const Ge=et.get(C),Mi=et.get(j),Ce=et.get(Ge.__renderTarget),cn=et.get(Mi.__renderTarget);P.bindFramebuffer(g.READ_FRAMEBUFFER,Ce.__webglFramebuffer),P.bindFramebuffer(g.DRAW_FRAMEBUFFER,cn.__webglFramebuffer);for(let hn=0;hn<At;hn++)yi&&g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,et.get(C).__webglTexture,Y,kt+hn),C.isDepthTexture?(ne&&g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,et.get(j).__webglTexture,Y,te+hn),g.blitFramebuffer(Rt,Ft,dt,bt,Ct,Yt,dt,bt,g.DEPTH_BUFFER_BIT,g.NEAREST)):ne?g.copyTexSubImage3D(Dt,Y,Ct,Yt,te+hn,Rt,Ft,dt,bt):g.copyTexSubImage2D(Dt,Y,Ct,Yt,te+hn,Rt,Ft,dt,bt);P.bindFramebuffer(g.READ_FRAMEBUFFER,null),P.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else ne?C.isDataTexture||C.isData3DTexture?g.texSubImage3D(Dt,Y,Ct,Yt,te,dt,bt,At,Me,qt,ee.data):j.isCompressedArrayTexture?g.compressedTexSubImage3D(Dt,Y,Ct,Yt,te,dt,bt,At,Me,ee.data):g.texSubImage3D(Dt,Y,Ct,Yt,te,dt,bt,At,Me,qt,ee):C.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,Y,Ct,Yt,dt,bt,Me,qt,ee.data):C.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,Y,Ct,Yt,ee.width,ee.height,Me,ee.data):g.texSubImage2D(g.TEXTURE_2D,Y,Ct,Yt,dt,bt,Me,qt,ee);g.pixelStorei(g.UNPACK_ROW_LENGTH,Ze),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Zt),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Fe),g.pixelStorei(g.UNPACK_SKIP_ROWS,kn),g.pixelStorei(g.UNPACK_SKIP_IMAGES,be),Y===0&&j.generateMipmaps&&g.generateMipmap(Dt),P.unbindTexture()},this.copyTextureToTexture3D=function(C,j,it=null,rt=null,Y=0){return C.isTexture!==!0&&(Ri("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,rt=arguments[1]||null,C=arguments[2],j=arguments[3],Y=arguments[4]||0),Ri('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,j,it,rt,Y)},this.initRenderTarget=function(C){et.get(C).__webglFramebuffer===void 0&&w.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?w.setTextureCube(C,0):C.isData3DTexture?w.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?w.setTexture2DArray(C,0):w.setTexture2D(C,0),P.unbindTexture()},this.resetState=function(){D=0,A=0,N=null,P.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}class Qp extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ve,this.environmentIntensity=1,this.environmentRotation=new Ve,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ii extends Ye{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Rr=new K,Cr=new K,wo=new ie,wi=new Lr,cr=new Bi,cs=new K,Ao=new K;class tm extends ue{constructor(t=new Ue,e=new Ii){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Rr.fromBufferAttribute(e,r-1),Cr.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Rr.distanceTo(Cr);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(r),cr.radius+=s,t.ray.intersectsSphere(cr)===!1)return;wo.copy(r).invert(),wi.copy(t.ray).applyMatrix4(wo);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(p!==null){const u=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let _=u,f=v-1;_<f;_+=c){const h=p.getX(_),M=p.getX(_+1),E=hr(this,t,wi,l,h,M);E&&e.push(E)}if(this.isLineLoop){const _=p.getX(v-1),f=p.getX(u),h=hr(this,t,wi,l,_,f);h&&e.push(h)}}else{const u=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let _=u,f=v-1;_<f;_+=c){const h=hr(this,t,wi,l,_,_+1);h&&e.push(h)}if(this.isLineLoop){const _=hr(this,t,wi,l,v-1,u);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function hr(i,t,e,n,r,s){const o=i.geometry.attributes.position;if(Rr.fromBufferAttribute(o,r),Cr.fromBufferAttribute(o,s),e.distanceSqToSegment(Rr,Cr,cs,Ao)>n)return;cs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(cs);if(!(l<t.near||l>t.far))return{distance:l,point:Ao.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Ro=new K,Co=new K;class ea extends tm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Ro.fromBufferAttribute(e,r),Co.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ro.distanceTo(Co);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Di extends Ye{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Po=new ie,na=new Lr,ur=new Bi,dr=new K;class hs extends ue{constructor(t=new Ue,e=new Di){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(r),ur.radius+=s,t.ray.intersectsSphere(ur)===!1)return;Po.copy(r).invert(),na.copy(t.ray).applyMatrix4(Po);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const m=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let v=m,_=u;v<_;v++){const f=c.getX(v);dr.fromBufferAttribute(d,f),Do(dr,f,l,r,t,e,this)}}else{const m=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let v=m,_=u;v<_;v++)dr.fromBufferAttribute(d,v),Do(dr,v,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Do(i,t,e,n,r,s,o){const a=na.distanceSqToPoint(i);if(a<e){const l=new K;na.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class em extends ye{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const fr=new K,pr=new K,us=new K,mr=new Ie;class nm extends Ue{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos(oi*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],p=["a","b","c"],d=new Array(3),m={},u=[];for(let v=0;v<l;v+=3){o?(c[0]=o.getX(v),c[1]=o.getX(v+1),c[2]=o.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:_,b:f,c:h}=mr;if(_.fromBufferAttribute(a,c[0]),f.fromBufferAttribute(a,c[1]),h.fromBufferAttribute(a,c[2]),mr.getNormal(us),d[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,d[1]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,d[2]=`${Math.round(h.x*r)},${Math.round(h.y*r)},${Math.round(h.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let M=0;M<3;M++){const E=(M+1)%3,S=d[M],L=d[E],D=mr[p[M]],A=mr[p[E]],N=`${S}_${L}`,b=`${L}_${S}`;b in m&&m[b]?(us.dot(m[b].normal)<=s&&(u.push(D.x,D.y,D.z),u.push(A.x,A.y,A.z)),m[b]=null):N in m||(m[N]={index0:c[M],index1:c[E],normal:us.clone()})}}for(const v in m)if(m[v]){const{index0:_,index1:f}=m[v];fr.fromBufferAttribute(a,_),pr.fromBufferAttribute(a,f),u.push(fr.x,fr.y,fr.z),u.push(pr.x,pr.y,pr.z)}this.setAttribute("position",new ge(u,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Tl extends Ye{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ve,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class im extends Ye{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Wt(16777215),this.specular=new Wt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ve,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Lo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class rm{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(p){a++,s===!1&&r.onStart!==void 0&&r.onStart(p,o,a),s=!0},this.itemEnd=function(p){o++,r.onProgress!==void 0&&r.onProgress(p,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return l?l(p):p},this.setURLModifier=function(p){return l=p,this},this.addHandler=function(p,d){return c.push(p,d),this},this.removeHandler=function(p){const d=c.indexOf(p);return d!==-1&&c.splice(d,2),this},this.getHandler=function(p){for(let d=0,m=c.length;d<m;d+=2){const u=c[d],v=c[d+1];if(u.global&&(u.lastIndex=0),u.test(p))return v}return null}}}const sm=new rm;class _a{constructor(t){this.manager=t!==void 0?t:sm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}_a.DEFAULT_MATERIAL_NAME="__DEFAULT";const en={};class am extends Error{constructor(t,e){super(t),this.response=e}}class om extends _a{constructor(t){super(t)}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Lo.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(en[t]!==void 0){en[t].push({onLoad:e,onProgress:n,onError:r});return}en[t]=[],en[t].push({onLoad:e,onProgress:n,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const p=en[t],d=c.body.getReader(),m=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),u=m?parseInt(m):0,v=u!==0;let _=0;const f=new ReadableStream({start(h){M();function M(){d.read().then(({done:E,value:S})=>{if(E)h.close();else{_+=S.byteLength;const L=new ProgressEvent("progress",{lengthComputable:v,loaded:_,total:u});for(let D=0,A=p.length;D<A;D++){const N=p[D];N.onProgress&&N.onProgress(L)}h.enqueue(S),M()}},E=>{h.error(E)})}}});return new Response(f)}else throw new am(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(p=>new DOMParser().parseFromString(p,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),m=d&&d[1]?d[1].toLowerCase():void 0,u=new TextDecoder(m);return c.arrayBuffer().then(v=>u.decode(v))}}}).then(c=>{Lo.add(t,c);const p=en[t];delete en[t];for(let d=0,m=p.length;d<m;d++){const u=p[d];u.onLoad&&u.onLoad(c)}}).catch(c=>{const p=en[t];if(p===void 0)throw this.manager.itemError(t),c;delete en[t];for(let d=0,m=p.length;d<m;d++){const u=p[d];u.onError&&u.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class wl extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ds=new ie,Io=new K,Uo=new K;class lm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pa,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Io.setFromMatrixPosition(t.matrixWorld),e.position.copy(Io),Uo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uo),e.updateMatrixWorld(),ds.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ds),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ds)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class cm extends lm{constructor(){super(new xl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hm extends wl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new cm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class um extends wl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class No{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class dm extends zn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ia}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ia);const fm=/^[og]\s*(.+)?/,pm=/^mtllib /,mm=/^usemtl /,_m=/^usemap /,Fo=/\s+/,Oo=new K,fs=new K,Bo=new K,zo=new K,De=new K,_r=new Wt;function gm(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const r=this.normals,s=this.object.geometry.normals;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(t,e,n){const r=this.vertices,s=this.object.geometry.normals;Oo.fromArray(r,t),fs.fromArray(r,e),Bo.fromArray(r,n),De.subVectors(Bo,fs),zo.subVectors(Oo,fs),De.cross(zo),De.normalize(),s.push(De.x,De.y,De.z),s.push(De.x,De.y,De.z),s.push(De.x,De.y,De.z)},addColor:function(t,e,n){const r=this.colors,s=this.object.geometry.colors;r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[n]!==void 0&&s.push(r[n+0],r[n+1],r[n+2])},addUV:function(t,e,n){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[t+0],r[t+1]),s.push(r[e+0],r[e+1]),s.push(r[n+0],r[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,r,s,o,a,l,c){const p=this.vertices.length;let d=this.parseVertexIndex(t,p),m=this.parseVertexIndex(e,p),u=this.parseVertexIndex(n,p);if(this.addVertex(d,m,u),this.addColor(d,m,u),a!==void 0&&a!==""){const v=this.normals.length;d=this.parseNormalIndex(a,v),m=this.parseNormalIndex(l,v),u=this.parseNormalIndex(c,v),this.addNormal(d,m,u)}else this.addFaceNormal(d,m,u);if(r!==void 0&&r!==""){const v=this.uvs.length;d=this.parseUVIndex(r,v),m=this.parseUVIndex(s,v),u=this.parseUVIndex(o,v),this.addUV(d,m,u),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,r=t.length;n<r;n++){const s=this.parseVertexIndex(t[n],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,r=this.uvs.length;for(let s=0,o=t.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(t[s],n));for(let s=0,o=e.length;s<o;s++)this.addUVLine(this.parseUVIndex(e[s],r))}};return i.startObject("",!1),i}class vm extends _a{constructor(t){super(t),this.materials=null}load(t,e,n,r){const s=this,o=new om(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(t)}},n,r)}setMaterials(t){return this.materials=t,this}parse(t){const e=new gm;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let r=[];for(let a=0,l=n.length;a<l;a++){const c=n[a].trimStart();if(c.length===0)continue;const p=c.charAt(0);if(p!=="#")if(p==="v"){const d=c.split(Fo);switch(d[0]){case"v":e.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(_r.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6]),Ae),e.colors.push(_r.r,_r.g,_r.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":e.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(p==="f"){const m=c.slice(1).trim().split(Fo),u=[];for(let _=0,f=m.length;_<f;_++){const h=m[_];if(h.length>0){const M=h.split("/");u.push(M)}}const v=u[0];for(let _=1,f=u.length-1;_<f;_++){const h=u[_],M=u[_+1];e.addFace(v[0],h[0],M[0],v[1],h[1],M[1],v[2],h[2],M[2])}}else if(p==="l"){const d=c.substring(1).trim().split(" ");let m=[];const u=[];if(c.indexOf("/")===-1)m=d;else for(let v=0,_=d.length;v<_;v++){const f=d[v].split("/");f[0]!==""&&m.push(f[0]),f[1]!==""&&u.push(f[1])}e.addLineGeometry(m,u)}else if(p==="p"){const m=c.slice(1).trim().split(" ");e.addPointGeometry(m)}else if((r=fm.exec(c))!==null){const d=(" "+r[0].slice(1).trim()).slice(1);e.startObject(d)}else if(mm.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(pm.test(c))e.materialLibraries.push(c.substring(7).trim());else if(_m.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(p==="s"){if(r=c.split(" "),r.length>1){const m=r[1].trim().toLowerCase();e.object.smooth=m!=="0"&&m!=="off"}else e.object.smooth=!0;const d=e.object.currentMaterial();d&&(d.smooth=e.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}e.finalize();const s=new Pi;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=e.objects.length;a<l;a++){const c=e.objects[a],p=c.geometry,d=c.materials,m=p.type==="Line",u=p.type==="Points";let v=!1;if(p.vertices.length===0)continue;const _=new Ue;_.setAttribute("position",new ge(p.vertices,3)),p.normals.length>0&&_.setAttribute("normal",new ge(p.normals,3)),p.colors.length>0&&(v=!0,_.setAttribute("color",new ge(p.colors,3))),p.hasUVIndices===!0&&_.setAttribute("uv",new ge(p.uvs,2));const f=[];for(let M=0,E=d.length;M<E;M++){const S=d[M],L=S.name+"_"+S.smooth+"_"+v;let D=e.materials[L];if(this.materials!==null){if(D=this.materials.create(S.name),m&&D&&!(D instanceof Ii)){const A=new Ii;Ye.prototype.copy.call(A,D),A.color.copy(D.color),D=A}else if(u&&D&&!(D instanceof Di)){const A=new Di({size:10,sizeAttenuation:!1});Ye.prototype.copy.call(A,D),A.color.copy(D.color),A.map=D.map,D=A}}D===void 0&&(m?D=new Ii:u?D=new Di({size:1,sizeAttenuation:!1}):D=new im,D.name=S.name,D.flatShading=!S.smooth,D.vertexColors=v,e.materials[L]=D),f.push(D)}let h;if(f.length>1){for(let M=0,E=d.length;M<E;M++){const S=d[M];_.addGroup(S.groupStart,S.groupCount,M)}m?h=new ea(_,f):u?h=new hs(_,f):h=new Re(_,f)}else m?h=new ea(_,f[0]):u?h=new hs(_,f[0]):h=new Re(_,f[0]);h.name=c.name,s.add(h)}else if(e.vertices.length>0){const a=new Di({size:1,sizeAttenuation:!1}),l=new Ue;l.setAttribute("position",new ge(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new ge(e.colors,3)),a.vertexColors=!0);const c=new hs(l,a);s.add(c)}return s}}var Al=(i=>(i[i.OpticalTable=0]="OpticalTable",i))(Al||{});const xm={0:"objs/optical_table.obj"};function ym(i){i.traverse(t=>{if(t.isMesh){const e=t;e.material||(e.material=new Tl({color:8947848}))}})}function Mm(i,t){const e=i.textFiles.get(t);let n=null;return e&&(n=new vm().parse(e),ym(n)),n}function Sm(i){let t=new Map;const e=[0];for(const r of e){var n=Mm(i,xm[r]);n&&t.set(r,n)}return t}const ko={type:"change"},ga={type:"start"},Rl={type:"end"},gr=new Lr,Ho=new gn,Em=Math.cos(70*ol.DEG2RAD),oe=new K,Se=2*Math.PI,Qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ps=1e-6;class bm extends dm{constructor(t,e=null){super(t,e),this.state=Qt.NONE,this.enabled=!0,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ri.ROTATE,MIDDLE:ri.DOLLY,RIGHT:ri.PAN},this.touches={ONE:ni.ROTATE,TWO:ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Bn,this._lastTargetPosition=new K,this._quat=new Bn().setFromUnitVectors(t.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new No,this._sphericalDelta=new No,this._scale=1,this._panOffset=new K,this._rotateStart=new Bt,this._rotateEnd=new Bt,this._rotateDelta=new Bt,this._panStart=new Bt,this._panEnd=new Bt,this._panDelta=new Bt,this._dollyStart=new Bt,this._dollyEnd=new Bt,this._dollyDelta=new Bt,this._dollyDirection=new K,this._mouse=new Bt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wm.bind(this),this._onPointerDown=Tm.bind(this),this._onPointerUp=Am.bind(this),this._onContextMenu=Um.bind(this),this._onMouseWheel=Pm.bind(this),this._onKeyDown=Dm.bind(this),this._onTouchStart=Lm.bind(this),this._onTouchMove=Im.bind(this),this._onMouseDown=Rm.bind(this),this._onMouseMove=Cm.bind(this),this._interceptControlDown=Nm.bind(this),this._interceptControlUp=Fm.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ko),this.update(),this.state=Qt.NONE}update(t=null){const e=this.object.position;oe.copy(e).sub(this.target),oe.applyQuaternion(this._quat),this._spherical.setFromVector3(oe),this.autoRotate&&this.state===Qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Se:n>Math.PI&&(n-=Se),r<-Math.PI?r+=Se:r>Math.PI&&(r-=Se),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(oe.setFromSpherical(this._spherical),oe.applyQuaternion(this._quatInverse),e.copy(this.target).add(oe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=oe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new K(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new K(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=oe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(gr.origin.copy(this.object.position),gr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gr.direction))<Em?this.object.lookAt(this.target):(Ho.setFromNormalAndCoplanarPoint(this.object.up,this.target),gr.intersectPlane(Ho,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ps||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ps||this._lastTargetPosition.distanceToSquared(this.target)>ps?(this.dispatchEvent(ko),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Se/60*this.autoRotateSpeed*t:Se/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){oe.setFromMatrixColumn(e,0),oe.multiplyScalar(-t),this._panOffset.add(oe)}_panUp(t,e){this.screenSpacePanning===!0?oe.setFromMatrixColumn(e,1):(oe.setFromMatrixColumn(e,0),oe.crossVectors(this.object.up,oe)),oe.multiplyScalar(t),this._panOffset.add(oe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;oe.copy(r).sub(this.target);let s=oe.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Se*this._rotateDelta.x/e.clientHeight),this._rotateUp(Se*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Se*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Se*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Se*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Se*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Se*this._rotateDelta.x/e.clientHeight),this._rotateUp(Se*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Bt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Tm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function wm(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Am(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rl),this.state=Qt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Rm(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ri.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Qt.DOLLY;break;case ri.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qt.ROTATE}break;case ri.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qt.PAN}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(ga)}function Cm(i){switch(this.state){case Qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Pm(i){this.enabled===!1||this.enableZoom===!1||this.state!==Qt.NONE||(i.preventDefault(),this.dispatchEvent(ga),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Rl))}function Dm(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Lm(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ni.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Qt.TOUCH_ROTATE;break;case ni.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Qt.TOUCH_PAN;break;default:this.state=Qt.NONE}break;case 2:switch(this.touches.TWO){case ni.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Qt.TOUCH_DOLLY_PAN;break;case ni.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Qt.TOUCH_DOLLY_ROTATE;break;default:this.state=Qt.NONE}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(ga)}function Im(i){switch(this._trackPointer(i),this.state){case Qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Qt.NONE}}function Um(i){this.enabled!==!1&&i.preventDefault()}function Nm(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Fm(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Cl=Math.sqrt(3),Om=.5*(Cl-1),Ai=(3-Cl)/6,Vo=i=>Math.floor(i)|0,Go=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Bm(i=Math.random){const t=zm(i),e=new Float64Array(t).map(r=>Go[r%12*2]),n=new Float64Array(t).map(r=>Go[r%12*2+1]);return function(s,o){let a=0,l=0,c=0;const p=(s+o)*Om,d=Vo(s+p),m=Vo(o+p),u=(d+m)*Ai,v=d-u,_=m-u,f=s-v,h=o-_;let M,E;f>h?(M=1,E=0):(M=0,E=1);const S=f-M+Ai,L=h-E+Ai,D=f-1+2*Ai,A=h-1+2*Ai,N=d&255,b=m&255;let T=.5-f*f-h*h;if(T>=0){const U=N+t[b],y=e[U],B=n[U];T*=T,a=T*T*(y*f+B*h)}let F=.5-S*S-L*L;if(F>=0){const U=N+M+t[b+E],y=e[U],B=n[U];F*=F,l=F*F*(y*S+B*L)}let R=.5-D*D-A*A;if(R>=0){const U=N+1+t[b+1],y=e[U],B=n[U];R*=R,c=R*R*(y*D+B*A)}return 70*(a+l+c)}}function zm(i){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const r=n+~~(i()*(256-n)),s=e[n];e[n]=e[r],e[r]=s}for(let n=256;n<512;n++)e[n]=e[n-256];return e}function km(){const i=new hm(16777215,1);i.position.set(5,5,5).normalize();const t=new um(4210752,.5);return[i,t]}function Hm(){return Vm()}function Vm(){const i=new zi(10,10),t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");if(e){const o=Bm(),a=.01;for(let l=0;l<t.height;l++)for(let c=0;c<t.width;c++){const p=c/t.width-.5,d=l/t.height-.5,m=o(p/a,d/a),u=Math.floor((m+1)*127.5);e.fillStyle=`rgb(${u}, ${u}, ${u})`,e.fillRect(c,l,1,1)}}const n=new em(t);n.wrapS=Ui,n.wrapT=Ui,n.repeat.set(4,4);const r=new Tl({map:n}),s=new Re(i,r);return s.rotation.x=-Math.PI/2,s.position.y=0,s}function Gm(){const i=new Le(75,window.innerWidth/window.innerHeight,.1,1e3);return i.position.z=5,i}function Wm(){const i=new Qp;return km().forEach(t=>i.add(t)),i.add(Hm()),i}function Xm(){const i=new Jp;return i.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(i.domElement),i}class jm{constructor(t){de(this,"scene");de(this,"modelMap");de(this,"renderer");de(this,"camera");de(this,"cameraCtrl");this.scene=Wm(),this.modelMap=Sm(t),this.modelMap.forEach((e,n)=>{this.scene.add(e)}),this.renderer=Xm(),this.camera=Gm(),this.cameraCtrl=new bm(this.camera,this.renderer.domElement)}}class Ym{constructor(){de(this,"mesh");de(this,"velocity");de(this,"acceleration");const t=new vi(.5,1,.5),e=new fa({color:34850});this.mesh=new Re(t,e);const n=new nm(t),r=new Ii({color:2236962}),s=new ea(n,r);this.mesh.add(s),this.velocity=new K,this.acceleration=new K}applyMove(t){let e=5;t.forward?this.acceleration.z=-e:t.backward?this.acceleration.z=e:this.acceleration.z=0,t.left?this.acceleration.x=-e:t.right?this.acceleration.x=e:this.acceleration.x=0}applyAction(t){this.applyMove(t.move)}update(t){this.updatePosition(t)}updatePosition(t){this.velocity.add(this.acceleration.clone().multiplyScalar(t)),this.mesh.position.add(this.velocity.clone().multiplyScalar(t)),this.velocity.multiplyScalar(.95)}}var Nn=(i=>(i.ArrowUp="ArrowUp",i.ArrowDown="ArrowDown",i.ArrowLeft="ArrowLeft",i.ArrowRight="ArrowRight",i.Space="Space",i))(Nn||{});class qm{constructor(t){de(this,"keys");this.keys={...t}}isPressed(t){return Array.isArray(t)?this.isAnyPressed(t):!!this.keys[t]}isAnyPressed(t){return t.some(e=>!!this.keys[e])}}class Zm{constructor(){de(this,"keys",{});window.addEventListener("keydown",t=>this.onKeyDown(t)),window.addEventListener("keyup",t=>this.onKeyUp(t))}onKeyDown(t){t.key in Nn&&(this.keys[t.key]=!0)}onKeyUp(t){t.key in Nn&&(this.keys[t.key]=!1)}getKeyboardState(){return new qm(this.keys)}}class Km{constructor(){de(this,"keyboardListener");this.keyboardListener=new Zm}getAction(){let t={forward:!1,backward:!1,left:!1,right:!1},e=this.keyboardListener.getKeyboardState();return e.isPressed(Nn.ArrowUp)?t.forward=!0:e.isPressed(Nn.ArrowDown)&&(t.backward=!0),e.isPressed(Nn.ArrowLeft)?t.left=!0:e.isPressed(Nn.ArrowRight)&&(t.right=!0),{move:t}}}function $m(i){window.addEventListener("resize",()=>{const t=window.innerWidth,e=window.innerHeight;i.renderer.setSize(t,e),i.camera.aspect=t/e,i.camera.updateProjectionMatrix(),i.cameraCtrl.update()})}function Wo(i){const e=new gi().setFromObject(i).min.y;e<0&&(i.position.y-=e)}function Xo(i){const t=performance.now();return{delta:i?(t-i.timestamp)/1e3:0,timestamp:t}}class Jm{constructor(t){de(this,"inputListener");de(this,"sceneSetup");de(this,"actor");de(this,"frameTime");de(this,"mainLoop",()=>{this.frameTime=Xo(this.frameTime),this.actorUpdate(),this.renderScene(),requestAnimationFrame(this.mainLoop)});this.sceneSetup=t,this.inputListener=new Km,this.actor=new Ym,this.sceneSetup.scene.add(this.actor.mesh),$m(t),this.frameTime=Xo(),this.positionSceneObjects(this.sceneSetup)}actorUpdate(){Wo(this.actor.mesh),this.actor.applyAction(this.inputListener.getAction()),this.actor.update(this.frameTime.delta)}positionSceneObjects(t){let e=t.modelMap.get(Al.OpticalTable);e&&(Wo(e),e.rotation.x=ol.degToRad(0))}renderScene(){this.sceneSetup.renderer.render(this.sceneSetup.scene,this.sceneSetup.camera)}}var vr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qm(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function xr(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ms={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var jo;function t_(){return jo||(jo=1,function(i,t){(function(e){i.exports=e()})(function(){return function e(n,r,s){function o(c,p){if(!r[c]){if(!n[c]){var d=typeof xr=="function"&&xr;if(!p&&d)return d(c,!0);if(a)return a(c,!0);var m=new Error("Cannot find module '"+c+"'");throw m.code="MODULE_NOT_FOUND",m}var u=r[c]={exports:{}};n[c][0].call(u.exports,function(v){var _=n[c][1][v];return o(_||v)},u,u.exports,e,n,r,s)}return r[c].exports}for(var a=typeof xr=="function"&&xr,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(e,n,r){var s=e("./utils"),o=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var c,p,d,m,u,v,_,f=[],h=0,M=l.length,E=M,S=s.getTypeOf(l)!=="string";h<l.length;)E=M-h,d=S?(c=l[h++],p=h<M?l[h++]:0,h<M?l[h++]:0):(c=l.charCodeAt(h++),p=h<M?l.charCodeAt(h++):0,h<M?l.charCodeAt(h++):0),m=c>>2,u=(3&c)<<4|p>>4,v=1<E?(15&p)<<2|d>>6:64,_=2<E?63&d:64,f.push(a.charAt(m)+a.charAt(u)+a.charAt(v)+a.charAt(_));return f.join("")},r.decode=function(l){var c,p,d,m,u,v,_=0,f=0,h="data:";if(l.substr(0,h.length)===h)throw new Error("Invalid base64 input, it looks like a data url.");var M,E=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&E--,l.charAt(l.length-2)===a.charAt(64)&&E--,E%1!=0)throw new Error("Invalid base64 input, bad content length.");for(M=o.uint8array?new Uint8Array(0|E):new Array(0|E);_<l.length;)c=a.indexOf(l.charAt(_++))<<2|(m=a.indexOf(l.charAt(_++)))>>4,p=(15&m)<<4|(u=a.indexOf(l.charAt(_++)))>>2,d=(3&u)<<6|(v=a.indexOf(l.charAt(_++))),M[f++]=c,u!==64&&(M[f++]=p),v!==64&&(M[f++]=d);return M}},{"./support":30,"./utils":32}],2:[function(e,n,r){var s=e("./external"),o=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function c(p,d,m,u,v){this.compressedSize=p,this.uncompressedSize=d,this.crc32=m,this.compression=u,this.compressedContent=v}c.prototype={getContentWorker:function(){var p=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),d=this;return p.on("end",function(){if(this.streamInfo.data_length!==d.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),p},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(p,d,m){return p.pipe(new a).pipe(new l("uncompressedSize")).pipe(d.compressWorker(m)).pipe(new l("compressedSize")).withStreamInfo("compression",d)},n.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,n,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,n,r){var s=e("./utils"),o=function(){for(var a,l=[],c=0;c<256;c++){a=c;for(var p=0;p<8;p++)a=1&a?3988292384^a>>>1:a>>>1;l[c]=a}return l}();n.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(c,p,d,m){var u=o,v=m+d;c^=-1;for(var _=m;_<v;_++)c=c>>>8^u[255&(c^p[_])];return-1^c}(0|l,a,a.length,0):function(c,p,d,m){var u=o,v=m+d;c^=-1;for(var _=m;_<v;_++)c=c>>>8^u[255&(c^p.charCodeAt(_))];return-1^c}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(e,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,n,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),n.exports={Promise:s}},{lie:37}],7:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=e("pako"),a=e("./utils"),l=e("./stream/GenericWorker"),c=s?"uint8array":"array";function p(d,m){l.call(this,"FlateWorker/"+d),this._pako=null,this._pakoAction=d,this._pakoOptions=m,this.meta={}}r.magic="\b\0",a.inherits(p,l),p.prototype.processChunk=function(d){this.meta=d.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(c,d.data),!1)},p.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},p.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},p.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var d=this;this._pako.onData=function(m){d.push({data:m,meta:d.meta})}},r.compressWorker=function(d){return new p("Deflate",d)},r.uncompressWorker=function(){return new p("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,n,r){function s(u,v){var _,f="";for(_=0;_<v;_++)f+=String.fromCharCode(255&u),u>>>=8;return f}function o(u,v,_,f,h,M){var E,S,L=u.file,D=u.compression,A=M!==c.utf8encode,N=a.transformTo("string",M(L.name)),b=a.transformTo("string",c.utf8encode(L.name)),T=L.comment,F=a.transformTo("string",M(T)),R=a.transformTo("string",c.utf8encode(T)),U=b.length!==L.name.length,y=R.length!==T.length,B="",nt="",k="",J=L.dir,tt=L.date,lt={crc32:0,compressedSize:0,uncompressedSize:0};v&&!_||(lt.crc32=u.crc32,lt.compressedSize=u.compressedSize,lt.uncompressedSize=u.uncompressedSize);var H=0;v&&(H|=8),A||!U&&!y||(H|=2048);var W=0,_t=0;J&&(W|=16),h==="UNIX"?(_t=798,W|=function(Q,mt){var ut=Q;return Q||(ut=mt?16893:33204),(65535&ut)<<16}(L.unixPermissions,J)):(_t=20,W|=function(Q){return 63&(Q||0)}(L.dosPermissions)),E=tt.getUTCHours(),E<<=6,E|=tt.getUTCMinutes(),E<<=5,E|=tt.getUTCSeconds()/2,S=tt.getUTCFullYear()-1980,S<<=4,S|=tt.getUTCMonth()+1,S<<=5,S|=tt.getUTCDate(),U&&(nt=s(1,1)+s(p(N),4)+b,B+="up"+s(nt.length,2)+nt),y&&(k=s(1,1)+s(p(F),4)+R,B+="uc"+s(k.length,2)+k);var X="";return X+=`
\0`,X+=s(H,2),X+=D.magic,X+=s(E,2),X+=s(S,2),X+=s(lt.crc32,4),X+=s(lt.compressedSize,4),X+=s(lt.uncompressedSize,4),X+=s(N.length,2),X+=s(B.length,2),{fileRecord:d.LOCAL_FILE_HEADER+X+N+B,dirRecord:d.CENTRAL_FILE_HEADER+s(_t,2)+X+s(F.length,2)+"\0\0\0\0"+s(W,4)+s(f,4)+N+B+F}}var a=e("../utils"),l=e("../stream/GenericWorker"),c=e("../utf8"),p=e("../crc32"),d=e("../signature");function m(u,v,_,f){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=v,this.zipPlatform=_,this.encodeFileName=f,this.streamFiles=u,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(m,l),m.prototype.push=function(u){var v=u.meta.percent||0,_=this.entriesCount,f=this._sources.length;this.accumulate?this.contentBuffer.push(u):(this.bytesWritten+=u.data.length,l.prototype.push.call(this,{data:u.data,meta:{currentFile:this.currentFile,percent:_?(v+100*(_-f-1))/_:100}}))},m.prototype.openedSource=function(u){this.currentSourceOffset=this.bytesWritten,this.currentFile=u.file.name;var v=this.streamFiles&&!u.file.dir;if(v){var _=o(u,v,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:_.fileRecord,meta:{percent:0}})}else this.accumulate=!0},m.prototype.closedSource=function(u){this.accumulate=!1;var v=this.streamFiles&&!u.file.dir,_=o(u,v,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(_.dirRecord),v)this.push({data:function(f){return d.DATA_DESCRIPTOR+s(f.crc32,4)+s(f.compressedSize,4)+s(f.uncompressedSize,4)}(u),meta:{percent:100}});else for(this.push({data:_.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},m.prototype.flush=function(){for(var u=this.bytesWritten,v=0;v<this.dirRecords.length;v++)this.push({data:this.dirRecords[v],meta:{percent:100}});var _=this.bytesWritten-u,f=function(h,M,E,S,L){var D=a.transformTo("string",L(S));return d.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(h,2)+s(h,2)+s(M,4)+s(E,4)+s(D.length,2)+D}(this.dirRecords.length,_,u,this.zipComment,this.encodeFileName);this.push({data:f,meta:{percent:100}})},m.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},m.prototype.registerPrevious=function(u){this._sources.push(u);var v=this;return u.on("data",function(_){v.processChunk(_)}),u.on("end",function(){v.closedSource(v.previous.streamInfo),v._sources.length?v.prepareNextSource():v.end()}),u.on("error",function(_){v.error(_)}),this},m.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},m.prototype.error=function(u){var v=this._sources;if(!l.prototype.error.call(this,u))return!1;for(var _=0;_<v.length;_++)try{v[_].error(u)}catch{}return!0},m.prototype.lock=function(){l.prototype.lock.call(this);for(var u=this._sources,v=0;v<u.length;v++)u[v].lock()},n.exports=m},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,n,r){var s=e("../compressions"),o=e("./ZipFileWorker");r.generateWorker=function(a,l,c){var p=new o(l.streamFiles,c,l.platform,l.encodeFileName),d=0;try{a.forEach(function(m,u){d++;var v=function(M,E){var S=M||E,L=s[S];if(!L)throw new Error(S+" is not a valid compression method !");return L}(u.options.compression,l.compression),_=u.options.compressionOptions||l.compressionOptions||{},f=u.dir,h=u.date;u._compressWorker(v,_).withStreamInfo("file",{name:m,dir:f,date:h,comment:u.comment||"",unixPermissions:u.unixPermissions,dosPermissions:u.dosPermissions}).pipe(p)}),p.entriesCount=d}catch(m){p.error(m)}return p}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,n,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=e("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,n,r){var s=e("./utils"),o=e("./external"),a=e("./utf8"),l=e("./zipEntries"),c=e("./stream/Crc32Probe"),p=e("./nodejsUtils");function d(m){return new o.Promise(function(u,v){var _=m.decompressed.getContentWorker().pipe(new c);_.on("error",function(f){v(f)}).on("end",function(){_.streamInfo.crc32!==m.decompressed.crc32?v(new Error("Corrupted zip : CRC32 mismatch")):u()}).resume()})}n.exports=function(m,u){var v=this;return u=s.extend(u||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),p.isNode&&p.isStream(m)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",m,!0,u.optimizedBinaryString,u.base64).then(function(_){var f=new l(u);return f.load(_),f}).then(function(_){var f=[o.Promise.resolve(_)],h=_.files;if(u.checkCRC32)for(var M=0;M<h.length;M++)f.push(d(h[M]));return o.Promise.all(f)}).then(function(_){for(var f=_.shift(),h=f.files,M=0;M<h.length;M++){var E=h[M],S=E.fileNameStr,L=s.resolve(E.fileNameStr);v.file(L,E.decompressed,{binary:!0,optimizedBinaryString:!0,date:E.date,dir:E.dir,comment:E.fileCommentStr.length?E.fileCommentStr:null,unixPermissions:E.unixPermissions,dosPermissions:E.dosPermissions,createFolders:u.createFolders}),E.dir||(v.file(L).unsafeOriginalName=S)}return f.zipComment.length&&(v.comment=f.zipComment),v})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,n,r){var s=e("../utils"),o=e("../stream/GenericWorker");function a(l,c){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(a,o),a.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(p){c.push({data:p,meta:{percent:0}})}).on("error",function(p){c.isPaused?this.generatedError=p:c.error(p)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,n,r){var s=e("readable-stream").Readable;function o(a,l,c){s.call(this,l),this._helper=a;var p=this;a.on("data",function(d,m){p.push(d)||p._helper.pause(),c&&c(m)}).on("error",function(d){p.emit("error",d)}).on("end",function(){p.push(null)})}e("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},n.exports=o},{"../utils":32,"readable-stream":16}],14:[function(e,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,n,r){function s(L,D,A){var N,b=a.getTypeOf(D),T=a.extend(A||{},p);T.date=T.date||new Date,T.compression!==null&&(T.compression=T.compression.toUpperCase()),typeof T.unixPermissions=="string"&&(T.unixPermissions=parseInt(T.unixPermissions,8)),T.unixPermissions&&16384&T.unixPermissions&&(T.dir=!0),T.dosPermissions&&16&T.dosPermissions&&(T.dir=!0),T.dir&&(L=h(L)),T.createFolders&&(N=f(L))&&M.call(this,N,!0);var F=b==="string"&&T.binary===!1&&T.base64===!1;A&&A.binary!==void 0||(T.binary=!F),(D instanceof d&&D.uncompressedSize===0||T.dir||!D||D.length===0)&&(T.base64=!1,T.binary=!0,D="",T.compression="STORE",b="string");var R=null;R=D instanceof d||D instanceof l?D:v.isNode&&v.isStream(D)?new _(L,D):a.prepareContent(L,D,T.binary,T.optimizedBinaryString,T.base64);var U=new m(L,R,T);this.files[L]=U}var o=e("./utf8"),a=e("./utils"),l=e("./stream/GenericWorker"),c=e("./stream/StreamHelper"),p=e("./defaults"),d=e("./compressedObject"),m=e("./zipObject"),u=e("./generate"),v=e("./nodejsUtils"),_=e("./nodejs/NodejsStreamInputAdapter"),f=function(L){L.slice(-1)==="/"&&(L=L.substring(0,L.length-1));var D=L.lastIndexOf("/");return 0<D?L.substring(0,D):""},h=function(L){return L.slice(-1)!=="/"&&(L+="/"),L},M=function(L,D){return D=D!==void 0?D:p.createFolders,L=h(L),this.files[L]||s.call(this,L,null,{dir:!0,createFolders:D}),this.files[L]};function E(L){return Object.prototype.toString.call(L)==="[object RegExp]"}var S={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(L){var D,A,N;for(D in this.files)N=this.files[D],(A=D.slice(this.root.length,D.length))&&D.slice(0,this.root.length)===this.root&&L(A,N)},filter:function(L){var D=[];return this.forEach(function(A,N){L(A,N)&&D.push(N)}),D},file:function(L,D,A){if(arguments.length!==1)return L=this.root+L,s.call(this,L,D,A),this;if(E(L)){var N=L;return this.filter(function(T,F){return!F.dir&&N.test(T)})}var b=this.files[this.root+L];return b&&!b.dir?b:null},folder:function(L){if(!L)return this;if(E(L))return this.filter(function(b,T){return T.dir&&L.test(b)});var D=this.root+L,A=M.call(this,D),N=this.clone();return N.root=A.name,N},remove:function(L){L=this.root+L;var D=this.files[L];if(D||(L.slice(-1)!=="/"&&(L+="/"),D=this.files[L]),D&&!D.dir)delete this.files[L];else for(var A=this.filter(function(b,T){return T.name.slice(0,L.length)===L}),N=0;N<A.length;N++)delete this.files[A[N].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(L){var D,A={};try{if((A=a.extend(L||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=A.type.toLowerCase(),A.compression=A.compression.toUpperCase(),A.type==="binarystring"&&(A.type="string"),!A.type)throw new Error("No output type specified.");a.checkSupport(A.type),A.platform!=="darwin"&&A.platform!=="freebsd"&&A.platform!=="linux"&&A.platform!=="sunos"||(A.platform="UNIX"),A.platform==="win32"&&(A.platform="DOS");var N=A.comment||this.comment||"";D=u.generateWorker(this,A,N)}catch(b){(D=new l("error")).error(b)}return new c(D,A.type||"string",A.mimeType)},generateAsync:function(L,D){return this.generateInternalStream(L).accumulate(D)},generateNodeStream:function(L,D){return(L=L||{}).type||(L.type="nodebuffer"),this.generateInternalStream(L).toNodejsStream(D)}};n.exports=S},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,n,r){n.exports=e("stream")},{stream:void 0}],17:[function(e,n,r){var s=e("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),c=a.charCodeAt(1),p=a.charCodeAt(2),d=a.charCodeAt(3),m=this.length-4;0<=m;--m)if(this.data[m]===l&&this.data[m+1]===c&&this.data[m+2]===p&&this.data[m+3]===d)return m-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),c=a.charCodeAt(1),p=a.charCodeAt(2),d=a.charCodeAt(3),m=this.readData(4);return l===m[0]&&c===m[1]&&p===m[2]&&d===m[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],18:[function(e,n,r){var s=e("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,c=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=a,c},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},n.exports=o},{"../utils":32}],19:[function(e,n,r){var s=e("./Uint8ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,n,r){var s=e("./DataReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],21:[function(e,n,r){var s=e("./ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(e,n,r){var s=e("../utils"),o=e("../support"),a=e("./ArrayReader"),l=e("./StringReader"),c=e("./NodeBufferReader"),p=e("./Uint8ArrayReader");n.exports=function(d){var m=s.getTypeOf(d);return s.checkSupport(m),m!=="string"||o.uint8array?m==="nodebuffer"?new c(d):o.uint8array?new p(s.transformTo("uint8array",d)):new a(s.transformTo("array",d)):new l(d)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,n,r){var s=e("./GenericWorker"),o=e("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},n.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,n,r){var s=e("./GenericWorker"),o=e("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},n.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,n,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}o.prototype.processChunk.call(this,l)},n.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,n,r){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(p){c.dataIsReady=!0,c.data=p,c.max=p&&p.length||0,c.type=s.getTypeOf(p),c.isPaused||c._tickAndRepeat()},function(p){c.error(p)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,n,r){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},n.exports=s},{}],29:[function(e,n,r){var s=e("../utils"),o=e("./ConvertWorker"),a=e("./GenericWorker"),l=e("../base64"),c=e("../support"),p=e("../external"),d=null;if(c.nodestream)try{d=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function m(v,_){return new p.Promise(function(f,h){var M=[],E=v._internalType,S=v._outputType,L=v._mimeType;v.on("data",function(D,A){M.push(D),_&&_(A)}).on("error",function(D){M=[],h(D)}).on("end",function(){try{var D=function(A,N,b){switch(A){case"blob":return s.newBlob(s.transformTo("arraybuffer",N),b);case"base64":return l.encode(N);default:return s.transformTo(A,N)}}(S,function(A,N){var b,T=0,F=null,R=0;for(b=0;b<N.length;b++)R+=N[b].length;switch(A){case"string":return N.join("");case"array":return Array.prototype.concat.apply([],N);case"uint8array":for(F=new Uint8Array(R),b=0;b<N.length;b++)F.set(N[b],T),T+=N[b].length;return F;case"nodebuffer":return Buffer.concat(N);default:throw new Error("concat : unsupported type '"+A+"'")}}(E,M),L);f(D)}catch(A){h(A)}M=[]}).resume()})}function u(v,_,f){var h=_;switch(_){case"blob":case"arraybuffer":h="uint8array";break;case"base64":h="string"}try{this._internalType=h,this._outputType=_,this._mimeType=f,s.checkSupport(h),this._worker=v.pipe(new o(h)),v.lock()}catch(M){this._worker=new a("error"),this._worker.error(M)}}u.prototype={accumulate:function(v){return m(this,v)},on:function(v,_){var f=this;return v==="data"?this._worker.on(v,function(h){_.call(f,h.data,h.meta)}):this._worker.on(v,function(){s.delay(_,arguments,f)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(v){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new d(this,{objectMode:this._outputType!=="nodebuffer"},v)}},n.exports=u},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),r.blob=o.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,n,r){for(var s=e("./utils"),o=e("./support"),a=e("./nodejsUtils"),l=e("./stream/GenericWorker"),c=new Array(256),p=0;p<256;p++)c[p]=252<=p?6:248<=p?5:240<=p?4:224<=p?3:192<=p?2:1;c[254]=c[254]=1;function d(){l.call(this,"utf-8 decode"),this.leftOver=null}function m(){l.call(this,"utf-8 encode")}r.utf8encode=function(u){return o.nodebuffer?a.newBufferFrom(u,"utf-8"):function(v){var _,f,h,M,E,S=v.length,L=0;for(M=0;M<S;M++)(64512&(f=v.charCodeAt(M)))==55296&&M+1<S&&(64512&(h=v.charCodeAt(M+1)))==56320&&(f=65536+(f-55296<<10)+(h-56320),M++),L+=f<128?1:f<2048?2:f<65536?3:4;for(_=o.uint8array?new Uint8Array(L):new Array(L),M=E=0;E<L;M++)(64512&(f=v.charCodeAt(M)))==55296&&M+1<S&&(64512&(h=v.charCodeAt(M+1)))==56320&&(f=65536+(f-55296<<10)+(h-56320),M++),f<128?_[E++]=f:(f<2048?_[E++]=192|f>>>6:(f<65536?_[E++]=224|f>>>12:(_[E++]=240|f>>>18,_[E++]=128|f>>>12&63),_[E++]=128|f>>>6&63),_[E++]=128|63&f);return _}(u)},r.utf8decode=function(u){return o.nodebuffer?s.transformTo("nodebuffer",u).toString("utf-8"):function(v){var _,f,h,M,E=v.length,S=new Array(2*E);for(_=f=0;_<E;)if((h=v[_++])<128)S[f++]=h;else if(4<(M=c[h]))S[f++]=65533,_+=M-1;else{for(h&=M===2?31:M===3?15:7;1<M&&_<E;)h=h<<6|63&v[_++],M--;1<M?S[f++]=65533:h<65536?S[f++]=h:(h-=65536,S[f++]=55296|h>>10&1023,S[f++]=56320|1023&h)}return S.length!==f&&(S.subarray?S=S.subarray(0,f):S.length=f),s.applyFromCharCode(S)}(u=s.transformTo(o.uint8array?"uint8array":"array",u))},s.inherits(d,l),d.prototype.processChunk=function(u){var v=s.transformTo(o.uint8array?"uint8array":"array",u.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var _=v;(v=new Uint8Array(_.length+this.leftOver.length)).set(this.leftOver,0),v.set(_,this.leftOver.length)}else v=this.leftOver.concat(v);this.leftOver=null}var f=function(M,E){var S;for((E=E||M.length)>M.length&&(E=M.length),S=E-1;0<=S&&(192&M[S])==128;)S--;return S<0||S===0?E:S+c[M[S]]>E?S:E}(v),h=v;f!==v.length&&(o.uint8array?(h=v.subarray(0,f),this.leftOver=v.subarray(f,v.length)):(h=v.slice(0,f),this.leftOver=v.slice(f,v.length))),this.push({data:r.utf8decode(h),meta:u.meta})},d.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=d,s.inherits(m,l),m.prototype.processChunk=function(u){this.push({data:r.utf8encode(u.data),meta:u.meta})},r.Utf8EncodeWorker=m},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,n,r){var s=e("./support"),o=e("./base64"),a=e("./nodejsUtils"),l=e("./external");function c(_){return _}function p(_,f){for(var h=0;h<_.length;++h)f[h]=255&_.charCodeAt(h);return f}e("setimmediate"),r.newBlob=function(_,f){r.checkSupport("blob");try{return new Blob([_],{type:f})}catch{try{var h=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return h.append(_),h.getBlob(f)}catch{throw new Error("Bug : can't construct the Blob.")}}};var d={stringifyByChunk:function(_,f,h){var M=[],E=0,S=_.length;if(S<=h)return String.fromCharCode.apply(null,_);for(;E<S;)f==="array"||f==="nodebuffer"?M.push(String.fromCharCode.apply(null,_.slice(E,Math.min(E+h,S)))):M.push(String.fromCharCode.apply(null,_.subarray(E,Math.min(E+h,S)))),E+=h;return M.join("")},stringifyByChar:function(_){for(var f="",h=0;h<_.length;h++)f+=String.fromCharCode(_[h]);return f},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function m(_){var f=65536,h=r.getTypeOf(_),M=!0;if(h==="uint8array"?M=d.applyCanBeUsed.uint8array:h==="nodebuffer"&&(M=d.applyCanBeUsed.nodebuffer),M)for(;1<f;)try{return d.stringifyByChunk(_,h,f)}catch{f=Math.floor(f/2)}return d.stringifyByChar(_)}function u(_,f){for(var h=0;h<_.length;h++)f[h]=_[h];return f}r.applyFromCharCode=m;var v={};v.string={string:c,array:function(_){return p(_,new Array(_.length))},arraybuffer:function(_){return v.string.uint8array(_).buffer},uint8array:function(_){return p(_,new Uint8Array(_.length))},nodebuffer:function(_){return p(_,a.allocBuffer(_.length))}},v.array={string:m,array:c,arraybuffer:function(_){return new Uint8Array(_).buffer},uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return a.newBufferFrom(_)}},v.arraybuffer={string:function(_){return m(new Uint8Array(_))},array:function(_){return u(new Uint8Array(_),new Array(_.byteLength))},arraybuffer:c,uint8array:function(_){return new Uint8Array(_)},nodebuffer:function(_){return a.newBufferFrom(new Uint8Array(_))}},v.uint8array={string:m,array:function(_){return u(_,new Array(_.length))},arraybuffer:function(_){return _.buffer},uint8array:c,nodebuffer:function(_){return a.newBufferFrom(_)}},v.nodebuffer={string:m,array:function(_){return u(_,new Array(_.length))},arraybuffer:function(_){return v.nodebuffer.uint8array(_).buffer},uint8array:function(_){return u(_,new Uint8Array(_.length))},nodebuffer:c},r.transformTo=function(_,f){if(f=f||"",!_)return f;r.checkSupport(_);var h=r.getTypeOf(f);return v[h][_](f)},r.resolve=function(_){for(var f=_.split("/"),h=[],M=0;M<f.length;M++){var E=f[M];E==="."||E===""&&M!==0&&M!==f.length-1||(E===".."?h.pop():h.push(E))}return h.join("/")},r.getTypeOf=function(_){return typeof _=="string"?"string":Object.prototype.toString.call(_)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(_)?"nodebuffer":s.uint8array&&_ instanceof Uint8Array?"uint8array":s.arraybuffer&&_ instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(_){if(!s[_.toLowerCase()])throw new Error(_+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(_){var f,h,M="";for(h=0;h<(_||"").length;h++)M+="\\x"+((f=_.charCodeAt(h))<16?"0":"")+f.toString(16).toUpperCase();return M},r.delay=function(_,f,h){setImmediate(function(){_.apply(h||null,f||[])})},r.inherits=function(_,f){function h(){}h.prototype=f.prototype,_.prototype=new h},r.extend=function(){var _,f,h={};for(_=0;_<arguments.length;_++)for(f in arguments[_])Object.prototype.hasOwnProperty.call(arguments[_],f)&&h[f]===void 0&&(h[f]=arguments[_][f]);return h},r.prepareContent=function(_,f,h,M,E){return l.Promise.resolve(f).then(function(S){return s.blob&&(S instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(S))!==-1)&&typeof FileReader<"u"?new l.Promise(function(L,D){var A=new FileReader;A.onload=function(N){L(N.target.result)},A.onerror=function(N){D(N.target.error)},A.readAsArrayBuffer(S)}):S}).then(function(S){var L=r.getTypeOf(S);return L?(L==="arraybuffer"?S=r.transformTo("uint8array",S):L==="string"&&(E?S=o.decode(S):h&&M!==!0&&(S=function(D){return p(D,s.uint8array?new Uint8Array(D.length):new Array(D.length))}(S))),S):l.Promise.reject(new Error("Can't read the data of '"+_+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,n,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./signature"),l=e("./zipEntry"),c=e("./support");function p(d){this.files=[],this.loadOptions=d}p.prototype={checkSignature:function(d){if(!this.reader.readAndCheckSignature(d)){this.reader.index-=4;var m=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(m)+", expected "+o.pretty(d)+")")}},isSignature:function(d,m){var u=this.reader.index;this.reader.setIndex(d);var v=this.reader.readString(4)===m;return this.reader.setIndex(u),v},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var d=this.reader.readData(this.zipCommentLength),m=c.uint8array?"uint8array":"array",u=o.transformTo(m,d);this.zipComment=this.loadOptions.decodeFileName(u)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var d,m,u,v=this.zip64EndOfCentralSize-44;0<v;)d=this.reader.readInt(2),m=this.reader.readInt(4),u=this.reader.readData(m),this.zip64ExtensibleData[d]={id:d,length:m,value:u}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var d,m;for(d=0;d<this.files.length;d++)m=this.files[d],this.reader.setIndex(m.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),m.readLocalPart(this.reader),m.handleUTF8(),m.processAttributes()},readCentralDir:function(){var d;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(d=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(d);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var d=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(d<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(d);var m=d;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(d=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(d),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var u=this.centralDirOffset+this.centralDirSize;this.zip64&&(u+=20,u+=12+this.zip64EndOfCentralSize);var v=m-u;if(0<v)this.isSignature(m,a.CENTRAL_FILE_HEADER)||(this.reader.zero=v);else if(v<0)throw new Error("Corrupted zip: missing "+Math.abs(v)+" bytes.")},prepareReader:function(d){this.reader=s(d)},load:function(d){this.prepareReader(d),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=p},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,n,r){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./compressedObject"),l=e("./crc32"),c=e("./utf8"),p=e("./compressions"),d=e("./support");function m(u,v){this.options=u,this.loadOptions=v}m.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(u){var v,_;if(u.skip(22),this.fileNameLength=u.readInt(2),_=u.readInt(2),this.fileName=u.readData(this.fileNameLength),u.skip(_),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((v=function(f){for(var h in p)if(Object.prototype.hasOwnProperty.call(p,h)&&p[h].magic===f)return p[h];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,v,u.readData(this.compressedSize))},readCentralPart:function(u){this.versionMadeBy=u.readInt(2),u.skip(2),this.bitFlag=u.readInt(2),this.compressionMethod=u.readString(2),this.date=u.readDate(),this.crc32=u.readInt(4),this.compressedSize=u.readInt(4),this.uncompressedSize=u.readInt(4);var v=u.readInt(2);if(this.extraFieldsLength=u.readInt(2),this.fileCommentLength=u.readInt(2),this.diskNumberStart=u.readInt(2),this.internalFileAttributes=u.readInt(2),this.externalFileAttributes=u.readInt(4),this.localHeaderOffset=u.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");u.skip(v),this.readExtraFields(u),this.parseZIP64ExtraField(u),this.fileComment=u.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var u=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),u==0&&(this.dosPermissions=63&this.externalFileAttributes),u==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var u=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=u.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=u.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=u.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=u.readInt(4))}},readExtraFields:function(u){var v,_,f,h=u.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});u.index+4<h;)v=u.readInt(2),_=u.readInt(2),f=u.readData(_),this.extraFields[v]={id:v,length:_,value:f};u.setIndex(h)},handleUTF8:function(){var u=d.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var v=this.findExtraFieldUnicodePath();if(v!==null)this.fileNameStr=v;else{var _=o.transformTo(u,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(_)}var f=this.findExtraFieldUnicodeComment();if(f!==null)this.fileCommentStr=f;else{var h=o.transformTo(u,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(h)}}},findExtraFieldUnicodePath:function(){var u=this.extraFields[28789];if(u){var v=s(u.value);return v.readInt(1)!==1||l(this.fileName)!==v.readInt(4)?null:c.utf8decode(v.readData(u.length-5))}return null},findExtraFieldUnicodeComment:function(){var u=this.extraFields[25461];if(u){var v=s(u.value);return v.readInt(1)!==1||l(this.fileComment)!==v.readInt(4)?null:c.utf8decode(v.readData(u.length-5))}return null}},n.exports=m},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,n,r){function s(v,_,f){this.name=v,this.dir=f.dir,this.date=f.date,this.comment=f.comment,this.unixPermissions=f.unixPermissions,this.dosPermissions=f.dosPermissions,this._data=_,this._dataBinary=f.binary,this.options={compression:f.compression,compressionOptions:f.compressionOptions}}var o=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),l=e("./utf8"),c=e("./compressedObject"),p=e("./stream/GenericWorker");s.prototype={internalStream:function(v){var _=null,f="string";try{if(!v)throw new Error("No output type specified.");var h=(f=v.toLowerCase())==="string"||f==="text";f!=="binarystring"&&f!=="text"||(f="string"),_=this._decompressWorker();var M=!this._dataBinary;M&&!h&&(_=_.pipe(new l.Utf8EncodeWorker)),!M&&h&&(_=_.pipe(new l.Utf8DecodeWorker))}catch(E){(_=new p("error")).error(E)}return new o(_,f,"")},async:function(v,_){return this.internalStream(v).accumulate(_)},nodeStream:function(v,_){return this.internalStream(v||"nodebuffer").toNodejsStream(_)},_compressWorker:function(v,_){if(this._data instanceof c&&this._data.compression.magic===v.magic)return this._data.getCompressedWorker();var f=this._decompressWorker();return this._dataBinary||(f=f.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(f,v,_)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof p?this._data:new a(this._data)}};for(var d=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],m=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},u=0;u<d.length;u++)s.prototype[d[u]]=m;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,n,r){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,p=new l(v),d=s.document.createTextNode("");p.observe(d,{characterData:!0}),o=function(){d.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var _=s.document.createElement("script");_.onreadystatechange=function(){v(),_.onreadystatechange=null,_.parentNode.removeChild(_),_=null},s.document.documentElement.appendChild(_)}:function(){setTimeout(v,0)};else{var m=new s.MessageChannel;m.port1.onmessage=v,o=function(){m.port2.postMessage(0)}}var u=[];function v(){var _,f;a=!0;for(var h=u.length;h;){for(f=u,u=[],_=-1;++_<h;)f[_]();h=u.length}a=!1}n.exports=function(_){u.push(_)!==1||a||o()}}).call(this,typeof vr<"u"?vr:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,n,r){var s=e("immediate");function o(){}var a={},l=["REJECTED"],c=["FULFILLED"],p=["PENDING"];function d(h){if(typeof h!="function")throw new TypeError("resolver must be a function");this.state=p,this.queue=[],this.outcome=void 0,h!==o&&_(this,h)}function m(h,M,E){this.promise=h,typeof M=="function"&&(this.onFulfilled=M,this.callFulfilled=this.otherCallFulfilled),typeof E=="function"&&(this.onRejected=E,this.callRejected=this.otherCallRejected)}function u(h,M,E){s(function(){var S;try{S=M(E)}catch(L){return a.reject(h,L)}S===h?a.reject(h,new TypeError("Cannot resolve promise with itself")):a.resolve(h,S)})}function v(h){var M=h&&h.then;if(h&&(typeof h=="object"||typeof h=="function")&&typeof M=="function")return function(){M.apply(h,arguments)}}function _(h,M){var E=!1;function S(A){E||(E=!0,a.reject(h,A))}function L(A){E||(E=!0,a.resolve(h,A))}var D=f(function(){M(L,S)});D.status==="error"&&S(D.value)}function f(h,M){var E={};try{E.value=h(M),E.status="success"}catch(S){E.status="error",E.value=S}return E}(n.exports=d).prototype.finally=function(h){if(typeof h!="function")return this;var M=this.constructor;return this.then(function(E){return M.resolve(h()).then(function(){return E})},function(E){return M.resolve(h()).then(function(){throw E})})},d.prototype.catch=function(h){return this.then(null,h)},d.prototype.then=function(h,M){if(typeof h!="function"&&this.state===c||typeof M!="function"&&this.state===l)return this;var E=new this.constructor(o);return this.state!==p?u(E,this.state===c?h:M,this.outcome):this.queue.push(new m(E,h,M)),E},m.prototype.callFulfilled=function(h){a.resolve(this.promise,h)},m.prototype.otherCallFulfilled=function(h){u(this.promise,this.onFulfilled,h)},m.prototype.callRejected=function(h){a.reject(this.promise,h)},m.prototype.otherCallRejected=function(h){u(this.promise,this.onRejected,h)},a.resolve=function(h,M){var E=f(v,M);if(E.status==="error")return a.reject(h,E.value);var S=E.value;if(S)_(h,S);else{h.state=c,h.outcome=M;for(var L=-1,D=h.queue.length;++L<D;)h.queue[L].callFulfilled(M)}return h},a.reject=function(h,M){h.state=l,h.outcome=M;for(var E=-1,S=h.queue.length;++E<S;)h.queue[E].callRejected(M);return h},d.resolve=function(h){return h instanceof this?h:a.resolve(new this(o),h)},d.reject=function(h){var M=new this(o);return a.reject(M,h)},d.all=function(h){var M=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var E=h.length,S=!1;if(!E)return this.resolve([]);for(var L=new Array(E),D=0,A=-1,N=new this(o);++A<E;)b(h[A],A);return N;function b(T,F){M.resolve(T).then(function(R){L[F]=R,++D!==E||S||(S=!0,a.resolve(N,L))},function(R){S||(S=!0,a.reject(N,R))})}},d.race=function(h){var M=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var E=h.length,S=!1;if(!E)return this.resolve([]);for(var L=-1,D=new this(o);++L<E;)A=h[L],M.resolve(A).then(function(N){S||(S=!0,a.resolve(D,N))},function(N){S||(S=!0,a.reject(D,N))});var A;return D}},{immediate:36}],38:[function(e,n,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,n,r){var s=e("./zlib/deflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/messages"),c=e("./zlib/zstream"),p=Object.prototype.toString,d=0,m=-1,u=0,v=8;function _(h){if(!(this instanceof _))return new _(h);this.options=o.assign({level:m,method:v,chunkSize:16384,windowBits:15,memLevel:8,strategy:u,to:""},h||{});var M=this.options;M.raw&&0<M.windowBits?M.windowBits=-M.windowBits:M.gzip&&0<M.windowBits&&M.windowBits<16&&(M.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var E=s.deflateInit2(this.strm,M.level,M.method,M.windowBits,M.memLevel,M.strategy);if(E!==d)throw new Error(l[E]);if(M.header&&s.deflateSetHeader(this.strm,M.header),M.dictionary){var S;if(S=typeof M.dictionary=="string"?a.string2buf(M.dictionary):p.call(M.dictionary)==="[object ArrayBuffer]"?new Uint8Array(M.dictionary):M.dictionary,(E=s.deflateSetDictionary(this.strm,S))!==d)throw new Error(l[E]);this._dict_set=!0}}function f(h,M){var E=new _(M);if(E.push(h,!0),E.err)throw E.msg||l[E.err];return E.result}_.prototype.push=function(h,M){var E,S,L=this.strm,D=this.options.chunkSize;if(this.ended)return!1;S=M===~~M?M:M===!0?4:0,typeof h=="string"?L.input=a.string2buf(h):p.call(h)==="[object ArrayBuffer]"?L.input=new Uint8Array(h):L.input=h,L.next_in=0,L.avail_in=L.input.length;do{if(L.avail_out===0&&(L.output=new o.Buf8(D),L.next_out=0,L.avail_out=D),(E=s.deflate(L,S))!==1&&E!==d)return this.onEnd(E),!(this.ended=!0);L.avail_out!==0&&(L.avail_in!==0||S!==4&&S!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(L.output,L.next_out))):this.onData(o.shrinkBuf(L.output,L.next_out)))}while((0<L.avail_in||L.avail_out===0)&&E!==1);return S===4?(E=s.deflateEnd(this.strm),this.onEnd(E),this.ended=!0,E===d):S!==2||(this.onEnd(d),!(L.avail_out=0))},_.prototype.onData=function(h){this.chunks.push(h)},_.prototype.onEnd=function(h){h===d&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},r.Deflate=_,r.deflate=f,r.deflateRaw=function(h,M){return(M=M||{}).raw=!0,f(h,M)},r.gzip=function(h,M){return(M=M||{}).gzip=!0,f(h,M)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,n,r){var s=e("./zlib/inflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/constants"),c=e("./zlib/messages"),p=e("./zlib/zstream"),d=e("./zlib/gzheader"),m=Object.prototype.toString;function u(_){if(!(this instanceof u))return new u(_);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},_||{});var f=this.options;f.raw&&0<=f.windowBits&&f.windowBits<16&&(f.windowBits=-f.windowBits,f.windowBits===0&&(f.windowBits=-15)),!(0<=f.windowBits&&f.windowBits<16)||_&&_.windowBits||(f.windowBits+=32),15<f.windowBits&&f.windowBits<48&&!(15&f.windowBits)&&(f.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new p,this.strm.avail_out=0;var h=s.inflateInit2(this.strm,f.windowBits);if(h!==l.Z_OK)throw new Error(c[h]);this.header=new d,s.inflateGetHeader(this.strm,this.header)}function v(_,f){var h=new u(f);if(h.push(_,!0),h.err)throw h.msg||c[h.err];return h.result}u.prototype.push=function(_,f){var h,M,E,S,L,D,A=this.strm,N=this.options.chunkSize,b=this.options.dictionary,T=!1;if(this.ended)return!1;M=f===~~f?f:f===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof _=="string"?A.input=a.binstring2buf(_):m.call(_)==="[object ArrayBuffer]"?A.input=new Uint8Array(_):A.input=_,A.next_in=0,A.avail_in=A.input.length;do{if(A.avail_out===0&&(A.output=new o.Buf8(N),A.next_out=0,A.avail_out=N),(h=s.inflate(A,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&b&&(D=typeof b=="string"?a.string2buf(b):m.call(b)==="[object ArrayBuffer]"?new Uint8Array(b):b,h=s.inflateSetDictionary(this.strm,D)),h===l.Z_BUF_ERROR&&T===!0&&(h=l.Z_OK,T=!1),h!==l.Z_STREAM_END&&h!==l.Z_OK)return this.onEnd(h),!(this.ended=!0);A.next_out&&(A.avail_out!==0&&h!==l.Z_STREAM_END&&(A.avail_in!==0||M!==l.Z_FINISH&&M!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(E=a.utf8border(A.output,A.next_out),S=A.next_out-E,L=a.buf2string(A.output,E),A.next_out=S,A.avail_out=N-S,S&&o.arraySet(A.output,A.output,E,S,0),this.onData(L)):this.onData(o.shrinkBuf(A.output,A.next_out)))),A.avail_in===0&&A.avail_out===0&&(T=!0)}while((0<A.avail_in||A.avail_out===0)&&h!==l.Z_STREAM_END);return h===l.Z_STREAM_END&&(M=l.Z_FINISH),M===l.Z_FINISH?(h=s.inflateEnd(this.strm),this.onEnd(h),this.ended=!0,h===l.Z_OK):M!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(A.avail_out=0))},u.prototype.onData=function(_){this.chunks.push(_)},u.prototype.onEnd=function(_){_===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=_,this.msg=this.strm.msg},r.Inflate=u,r.inflate=v,r.inflateRaw=function(_,f){return(f=f||{}).raw=!0,v(_,f)},r.ungzip=v},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var p=c.shift();if(p){if(typeof p!="object")throw new TypeError(p+"must be non-object");for(var d in p)p.hasOwnProperty(d)&&(l[d]=p[d])}}return l},r.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var o={arraySet:function(l,c,p,d,m){if(c.subarray&&l.subarray)l.set(c.subarray(p,p+d),m);else for(var u=0;u<d;u++)l[m+u]=c[p+u]},flattenChunks:function(l){var c,p,d,m,u,v;for(c=d=0,p=l.length;c<p;c++)d+=l[c].length;for(v=new Uint8Array(d),c=m=0,p=l.length;c<p;c++)u=l[c],v.set(u,m),m+=u.length;return v}},a={arraySet:function(l,c,p,d,m){for(var u=0;u<d;u++)l[m+u]=c[p+u]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,o)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(s)},{}],42:[function(e,n,r){var s=e("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function p(d,m){if(m<65537&&(d.subarray&&a||!d.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(d,m));for(var u="",v=0;v<m;v++)u+=String.fromCharCode(d[v]);return u}l[254]=l[254]=1,r.string2buf=function(d){var m,u,v,_,f,h=d.length,M=0;for(_=0;_<h;_++)(64512&(u=d.charCodeAt(_)))==55296&&_+1<h&&(64512&(v=d.charCodeAt(_+1)))==56320&&(u=65536+(u-55296<<10)+(v-56320),_++),M+=u<128?1:u<2048?2:u<65536?3:4;for(m=new s.Buf8(M),_=f=0;f<M;_++)(64512&(u=d.charCodeAt(_)))==55296&&_+1<h&&(64512&(v=d.charCodeAt(_+1)))==56320&&(u=65536+(u-55296<<10)+(v-56320),_++),u<128?m[f++]=u:(u<2048?m[f++]=192|u>>>6:(u<65536?m[f++]=224|u>>>12:(m[f++]=240|u>>>18,m[f++]=128|u>>>12&63),m[f++]=128|u>>>6&63),m[f++]=128|63&u);return m},r.buf2binstring=function(d){return p(d,d.length)},r.binstring2buf=function(d){for(var m=new s.Buf8(d.length),u=0,v=m.length;u<v;u++)m[u]=d.charCodeAt(u);return m},r.buf2string=function(d,m){var u,v,_,f,h=m||d.length,M=new Array(2*h);for(u=v=0;u<h;)if((_=d[u++])<128)M[v++]=_;else if(4<(f=l[_]))M[v++]=65533,u+=f-1;else{for(_&=f===2?31:f===3?15:7;1<f&&u<h;)_=_<<6|63&d[u++],f--;1<f?M[v++]=65533:_<65536?M[v++]=_:(_-=65536,M[v++]=55296|_>>10&1023,M[v++]=56320|1023&_)}return p(M,v)},r.utf8border=function(d,m){var u;for((m=m||d.length)>d.length&&(m=d.length),u=m-1;0<=u&&(192&d[u])==128;)u--;return u<0||u===0?m:u+l[d[u]]>m?u:m}},{"./common":41}],43:[function(e,n,r){n.exports=function(s,o,a,l){for(var c=65535&s|0,p=s>>>16&65535|0,d=0;a!==0;){for(a-=d=2e3<a?2e3:a;p=p+(c=c+o[l++]|0)|0,--d;);c%=65521,p%=65521}return c|p<<16|0}},{}],44:[function(e,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,n,r){var s=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var c=0;c<8;c++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();n.exports=function(o,a,l,c){var p=s,d=c+l;o^=-1;for(var m=c;m<d;m++)o=o>>>8^p[255&(o^a[m])];return-1^o}},{}],46:[function(e,n,r){var s,o=e("../utils/common"),a=e("./trees"),l=e("./adler32"),c=e("./crc32"),p=e("./messages"),d=0,m=4,u=0,v=-2,_=-1,f=4,h=2,M=8,E=9,S=286,L=30,D=19,A=2*S+1,N=15,b=3,T=258,F=T+b+1,R=42,U=113,y=1,B=2,nt=3,k=4;function J(g,at){return g.msg=p[at],at}function tt(g){return(g<<1)-(4<g?9:0)}function lt(g){for(var at=g.length;0<=--at;)g[at]=0}function H(g){var at=g.state,Z=at.pending;Z>g.avail_out&&(Z=g.avail_out),Z!==0&&(o.arraySet(g.output,at.pending_buf,at.pending_out,Z,g.next_out),g.next_out+=Z,at.pending_out+=Z,g.total_out+=Z,g.avail_out-=Z,at.pending-=Z,at.pending===0&&(at.pending_out=0))}function W(g,at){a._tr_flush_block(g,0<=g.block_start?g.block_start:-1,g.strstart-g.block_start,at),g.block_start=g.strstart,H(g.strm)}function _t(g,at){g.pending_buf[g.pending++]=at}function X(g,at){g.pending_buf[g.pending++]=at>>>8&255,g.pending_buf[g.pending++]=255&at}function Q(g,at){var Z,I,P=g.max_chain_length,z=g.strstart,et=g.prev_length,w=g.nice_match,x=g.strstart>g.w_size-F?g.strstart-(g.w_size-F):0,O=g.window,q=g.w_mask,G=g.prev,$=g.strstart+T,ft=O[z+et-1],ct=O[z+et];g.prev_length>=g.good_match&&(P>>=2),w>g.lookahead&&(w=g.lookahead);do if(O[(Z=at)+et]===ct&&O[Z+et-1]===ft&&O[Z]===O[z]&&O[++Z]===O[z+1]){z+=2,Z++;do;while(O[++z]===O[++Z]&&O[++z]===O[++Z]&&O[++z]===O[++Z]&&O[++z]===O[++Z]&&O[++z]===O[++Z]&&O[++z]===O[++Z]&&O[++z]===O[++Z]&&O[++z]===O[++Z]&&z<$);if(I=T-($-z),z=$-T,et<I){if(g.match_start=at,w<=(et=I))break;ft=O[z+et-1],ct=O[z+et]}}while((at=G[at&q])>x&&--P!=0);return et<=g.lookahead?et:g.lookahead}function mt(g){var at,Z,I,P,z,et,w,x,O,q,G=g.w_size;do{if(P=g.window_size-g.lookahead-g.strstart,g.strstart>=G+(G-F)){for(o.arraySet(g.window,g.window,G,G,0),g.match_start-=G,g.strstart-=G,g.block_start-=G,at=Z=g.hash_size;I=g.head[--at],g.head[at]=G<=I?I-G:0,--Z;);for(at=Z=G;I=g.prev[--at],g.prev[at]=G<=I?I-G:0,--Z;);P+=G}if(g.strm.avail_in===0)break;if(et=g.strm,w=g.window,x=g.strstart+g.lookahead,O=P,q=void 0,q=et.avail_in,O<q&&(q=O),Z=q===0?0:(et.avail_in-=q,o.arraySet(w,et.input,et.next_in,q,x),et.state.wrap===1?et.adler=l(et.adler,w,q,x):et.state.wrap===2&&(et.adler=c(et.adler,w,q,x)),et.next_in+=q,et.total_in+=q,q),g.lookahead+=Z,g.lookahead+g.insert>=b)for(z=g.strstart-g.insert,g.ins_h=g.window[z],g.ins_h=(g.ins_h<<g.hash_shift^g.window[z+1])&g.hash_mask;g.insert&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[z+b-1])&g.hash_mask,g.prev[z&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=z,z++,g.insert--,!(g.lookahead+g.insert<b)););}while(g.lookahead<F&&g.strm.avail_in!==0)}function ut(g,at){for(var Z,I;;){if(g.lookahead<F){if(mt(g),g.lookahead<F&&at===d)return y;if(g.lookahead===0)break}if(Z=0,g.lookahead>=b&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+b-1])&g.hash_mask,Z=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart),Z!==0&&g.strstart-Z<=g.w_size-F&&(g.match_length=Q(g,Z)),g.match_length>=b)if(I=a._tr_tally(g,g.strstart-g.match_start,g.match_length-b),g.lookahead-=g.match_length,g.match_length<=g.max_lazy_match&&g.lookahead>=b){for(g.match_length--;g.strstart++,g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+b-1])&g.hash_mask,Z=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart,--g.match_length!=0;);g.strstart++}else g.strstart+=g.match_length,g.match_length=0,g.ins_h=g.window[g.strstart],g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+1])&g.hash_mask;else I=a._tr_tally(g,0,g.window[g.strstart]),g.lookahead--,g.strstart++;if(I&&(W(g,!1),g.strm.avail_out===0))return y}return g.insert=g.strstart<b-1?g.strstart:b-1,at===m?(W(g,!0),g.strm.avail_out===0?nt:k):g.last_lit&&(W(g,!1),g.strm.avail_out===0)?y:B}function pt(g,at){for(var Z,I,P;;){if(g.lookahead<F){if(mt(g),g.lookahead<F&&at===d)return y;if(g.lookahead===0)break}if(Z=0,g.lookahead>=b&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+b-1])&g.hash_mask,Z=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart),g.prev_length=g.match_length,g.prev_match=g.match_start,g.match_length=b-1,Z!==0&&g.prev_length<g.max_lazy_match&&g.strstart-Z<=g.w_size-F&&(g.match_length=Q(g,Z),g.match_length<=5&&(g.strategy===1||g.match_length===b&&4096<g.strstart-g.match_start)&&(g.match_length=b-1)),g.prev_length>=b&&g.match_length<=g.prev_length){for(P=g.strstart+g.lookahead-b,I=a._tr_tally(g,g.strstart-1-g.prev_match,g.prev_length-b),g.lookahead-=g.prev_length-1,g.prev_length-=2;++g.strstart<=P&&(g.ins_h=(g.ins_h<<g.hash_shift^g.window[g.strstart+b-1])&g.hash_mask,Z=g.prev[g.strstart&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=g.strstart),--g.prev_length!=0;);if(g.match_available=0,g.match_length=b-1,g.strstart++,I&&(W(g,!1),g.strm.avail_out===0))return y}else if(g.match_available){if((I=a._tr_tally(g,0,g.window[g.strstart-1]))&&W(g,!1),g.strstart++,g.lookahead--,g.strm.avail_out===0)return y}else g.match_available=1,g.strstart++,g.lookahead--}return g.match_available&&(I=a._tr_tally(g,0,g.window[g.strstart-1]),g.match_available=0),g.insert=g.strstart<b-1?g.strstart:b-1,at===m?(W(g,!0),g.strm.avail_out===0?nt:k):g.last_lit&&(W(g,!1),g.strm.avail_out===0)?y:B}function Mt(g,at,Z,I,P){this.good_length=g,this.max_lazy=at,this.nice_length=Z,this.max_chain=I,this.func=P}function Pt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=M,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*A),this.dyn_dtree=new o.Buf16(2*(2*L+1)),this.bl_tree=new o.Buf16(2*(2*D+1)),lt(this.dyn_ltree),lt(this.dyn_dtree),lt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(N+1),this.heap=new o.Buf16(2*S+1),lt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*S+1),lt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function It(g){var at;return g&&g.state?(g.total_in=g.total_out=0,g.data_type=h,(at=g.state).pending=0,at.pending_out=0,at.wrap<0&&(at.wrap=-at.wrap),at.status=at.wrap?R:U,g.adler=at.wrap===2?0:1,at.last_flush=d,a._tr_init(at),u):J(g,v)}function Ut(g){var at=It(g);return at===u&&function(Z){Z.window_size=2*Z.w_size,lt(Z.head),Z.max_lazy_match=s[Z.level].max_lazy,Z.good_match=s[Z.level].good_length,Z.nice_match=s[Z.level].nice_length,Z.max_chain_length=s[Z.level].max_chain,Z.strstart=0,Z.block_start=0,Z.lookahead=0,Z.insert=0,Z.match_length=Z.prev_length=b-1,Z.match_available=0,Z.ins_h=0}(g.state),at}function Xt(g,at,Z,I,P,z){if(!g)return v;var et=1;if(at===_&&(at=6),I<0?(et=0,I=-I):15<I&&(et=2,I-=16),P<1||E<P||Z!==M||I<8||15<I||at<0||9<at||z<0||f<z)return J(g,v);I===8&&(I=9);var w=new Pt;return(g.state=w).strm=g,w.wrap=et,w.gzhead=null,w.w_bits=I,w.w_size=1<<w.w_bits,w.w_mask=w.w_size-1,w.hash_bits=P+7,w.hash_size=1<<w.hash_bits,w.hash_mask=w.hash_size-1,w.hash_shift=~~((w.hash_bits+b-1)/b),w.window=new o.Buf8(2*w.w_size),w.head=new o.Buf16(w.hash_size),w.prev=new o.Buf16(w.w_size),w.lit_bufsize=1<<P+6,w.pending_buf_size=4*w.lit_bufsize,w.pending_buf=new o.Buf8(w.pending_buf_size),w.d_buf=1*w.lit_bufsize,w.l_buf=3*w.lit_bufsize,w.level=at,w.strategy=z,w.method=Z,Ut(g)}s=[new Mt(0,0,0,0,function(g,at){var Z=65535;for(Z>g.pending_buf_size-5&&(Z=g.pending_buf_size-5);;){if(g.lookahead<=1){if(mt(g),g.lookahead===0&&at===d)return y;if(g.lookahead===0)break}g.strstart+=g.lookahead,g.lookahead=0;var I=g.block_start+Z;if((g.strstart===0||g.strstart>=I)&&(g.lookahead=g.strstart-I,g.strstart=I,W(g,!1),g.strm.avail_out===0)||g.strstart-g.block_start>=g.w_size-F&&(W(g,!1),g.strm.avail_out===0))return y}return g.insert=0,at===m?(W(g,!0),g.strm.avail_out===0?nt:k):(g.strstart>g.block_start&&(W(g,!1),g.strm.avail_out),y)}),new Mt(4,4,8,4,ut),new Mt(4,5,16,8,ut),new Mt(4,6,32,32,ut),new Mt(4,4,16,16,pt),new Mt(8,16,32,32,pt),new Mt(8,16,128,128,pt),new Mt(8,32,128,256,pt),new Mt(32,128,258,1024,pt),new Mt(32,258,258,4096,pt)],r.deflateInit=function(g,at){return Xt(g,at,M,15,8,0)},r.deflateInit2=Xt,r.deflateReset=Ut,r.deflateResetKeep=It,r.deflateSetHeader=function(g,at){return g&&g.state?g.state.wrap!==2?v:(g.state.gzhead=at,u):v},r.deflate=function(g,at){var Z,I,P,z;if(!g||!g.state||5<at||at<0)return g?J(g,v):v;if(I=g.state,!g.output||!g.input&&g.avail_in!==0||I.status===666&&at!==m)return J(g,g.avail_out===0?-5:v);if(I.strm=g,Z=I.last_flush,I.last_flush=at,I.status===R)if(I.wrap===2)g.adler=0,_t(I,31),_t(I,139),_t(I,8),I.gzhead?(_t(I,(I.gzhead.text?1:0)+(I.gzhead.hcrc?2:0)+(I.gzhead.extra?4:0)+(I.gzhead.name?8:0)+(I.gzhead.comment?16:0)),_t(I,255&I.gzhead.time),_t(I,I.gzhead.time>>8&255),_t(I,I.gzhead.time>>16&255),_t(I,I.gzhead.time>>24&255),_t(I,I.level===9?2:2<=I.strategy||I.level<2?4:0),_t(I,255&I.gzhead.os),I.gzhead.extra&&I.gzhead.extra.length&&(_t(I,255&I.gzhead.extra.length),_t(I,I.gzhead.extra.length>>8&255)),I.gzhead.hcrc&&(g.adler=c(g.adler,I.pending_buf,I.pending,0)),I.gzindex=0,I.status=69):(_t(I,0),_t(I,0),_t(I,0),_t(I,0),_t(I,0),_t(I,I.level===9?2:2<=I.strategy||I.level<2?4:0),_t(I,3),I.status=U);else{var et=M+(I.w_bits-8<<4)<<8;et|=(2<=I.strategy||I.level<2?0:I.level<6?1:I.level===6?2:3)<<6,I.strstart!==0&&(et|=32),et+=31-et%31,I.status=U,X(I,et),I.strstart!==0&&(X(I,g.adler>>>16),X(I,65535&g.adler)),g.adler=1}if(I.status===69)if(I.gzhead.extra){for(P=I.pending;I.gzindex<(65535&I.gzhead.extra.length)&&(I.pending!==I.pending_buf_size||(I.gzhead.hcrc&&I.pending>P&&(g.adler=c(g.adler,I.pending_buf,I.pending-P,P)),H(g),P=I.pending,I.pending!==I.pending_buf_size));)_t(I,255&I.gzhead.extra[I.gzindex]),I.gzindex++;I.gzhead.hcrc&&I.pending>P&&(g.adler=c(g.adler,I.pending_buf,I.pending-P,P)),I.gzindex===I.gzhead.extra.length&&(I.gzindex=0,I.status=73)}else I.status=73;if(I.status===73)if(I.gzhead.name){P=I.pending;do{if(I.pending===I.pending_buf_size&&(I.gzhead.hcrc&&I.pending>P&&(g.adler=c(g.adler,I.pending_buf,I.pending-P,P)),H(g),P=I.pending,I.pending===I.pending_buf_size)){z=1;break}z=I.gzindex<I.gzhead.name.length?255&I.gzhead.name.charCodeAt(I.gzindex++):0,_t(I,z)}while(z!==0);I.gzhead.hcrc&&I.pending>P&&(g.adler=c(g.adler,I.pending_buf,I.pending-P,P)),z===0&&(I.gzindex=0,I.status=91)}else I.status=91;if(I.status===91)if(I.gzhead.comment){P=I.pending;do{if(I.pending===I.pending_buf_size&&(I.gzhead.hcrc&&I.pending>P&&(g.adler=c(g.adler,I.pending_buf,I.pending-P,P)),H(g),P=I.pending,I.pending===I.pending_buf_size)){z=1;break}z=I.gzindex<I.gzhead.comment.length?255&I.gzhead.comment.charCodeAt(I.gzindex++):0,_t(I,z)}while(z!==0);I.gzhead.hcrc&&I.pending>P&&(g.adler=c(g.adler,I.pending_buf,I.pending-P,P)),z===0&&(I.status=103)}else I.status=103;if(I.status===103&&(I.gzhead.hcrc?(I.pending+2>I.pending_buf_size&&H(g),I.pending+2<=I.pending_buf_size&&(_t(I,255&g.adler),_t(I,g.adler>>8&255),g.adler=0,I.status=U)):I.status=U),I.pending!==0){if(H(g),g.avail_out===0)return I.last_flush=-1,u}else if(g.avail_in===0&&tt(at)<=tt(Z)&&at!==m)return J(g,-5);if(I.status===666&&g.avail_in!==0)return J(g,-5);if(g.avail_in!==0||I.lookahead!==0||at!==d&&I.status!==666){var w=I.strategy===2?function(x,O){for(var q;;){if(x.lookahead===0&&(mt(x),x.lookahead===0)){if(O===d)return y;break}if(x.match_length=0,q=a._tr_tally(x,0,x.window[x.strstart]),x.lookahead--,x.strstart++,q&&(W(x,!1),x.strm.avail_out===0))return y}return x.insert=0,O===m?(W(x,!0),x.strm.avail_out===0?nt:k):x.last_lit&&(W(x,!1),x.strm.avail_out===0)?y:B}(I,at):I.strategy===3?function(x,O){for(var q,G,$,ft,ct=x.window;;){if(x.lookahead<=T){if(mt(x),x.lookahead<=T&&O===d)return y;if(x.lookahead===0)break}if(x.match_length=0,x.lookahead>=b&&0<x.strstart&&(G=ct[$=x.strstart-1])===ct[++$]&&G===ct[++$]&&G===ct[++$]){ft=x.strstart+T;do;while(G===ct[++$]&&G===ct[++$]&&G===ct[++$]&&G===ct[++$]&&G===ct[++$]&&G===ct[++$]&&G===ct[++$]&&G===ct[++$]&&$<ft);x.match_length=T-(ft-$),x.match_length>x.lookahead&&(x.match_length=x.lookahead)}if(x.match_length>=b?(q=a._tr_tally(x,1,x.match_length-b),x.lookahead-=x.match_length,x.strstart+=x.match_length,x.match_length=0):(q=a._tr_tally(x,0,x.window[x.strstart]),x.lookahead--,x.strstart++),q&&(W(x,!1),x.strm.avail_out===0))return y}return x.insert=0,O===m?(W(x,!0),x.strm.avail_out===0?nt:k):x.last_lit&&(W(x,!1),x.strm.avail_out===0)?y:B}(I,at):s[I.level].func(I,at);if(w!==nt&&w!==k||(I.status=666),w===y||w===nt)return g.avail_out===0&&(I.last_flush=-1),u;if(w===B&&(at===1?a._tr_align(I):at!==5&&(a._tr_stored_block(I,0,0,!1),at===3&&(lt(I.head),I.lookahead===0&&(I.strstart=0,I.block_start=0,I.insert=0))),H(g),g.avail_out===0))return I.last_flush=-1,u}return at!==m?u:I.wrap<=0?1:(I.wrap===2?(_t(I,255&g.adler),_t(I,g.adler>>8&255),_t(I,g.adler>>16&255),_t(I,g.adler>>24&255),_t(I,255&g.total_in),_t(I,g.total_in>>8&255),_t(I,g.total_in>>16&255),_t(I,g.total_in>>24&255)):(X(I,g.adler>>>16),X(I,65535&g.adler)),H(g),0<I.wrap&&(I.wrap=-I.wrap),I.pending!==0?u:1)},r.deflateEnd=function(g){var at;return g&&g.state?(at=g.state.status)!==R&&at!==69&&at!==73&&at!==91&&at!==103&&at!==U&&at!==666?J(g,v):(g.state=null,at===U?J(g,-3):u):v},r.deflateSetDictionary=function(g,at){var Z,I,P,z,et,w,x,O,q=at.length;if(!g||!g.state||(z=(Z=g.state).wrap)===2||z===1&&Z.status!==R||Z.lookahead)return v;for(z===1&&(g.adler=l(g.adler,at,q,0)),Z.wrap=0,q>=Z.w_size&&(z===0&&(lt(Z.head),Z.strstart=0,Z.block_start=0,Z.insert=0),O=new o.Buf8(Z.w_size),o.arraySet(O,at,q-Z.w_size,Z.w_size,0),at=O,q=Z.w_size),et=g.avail_in,w=g.next_in,x=g.input,g.avail_in=q,g.next_in=0,g.input=at,mt(Z);Z.lookahead>=b;){for(I=Z.strstart,P=Z.lookahead-(b-1);Z.ins_h=(Z.ins_h<<Z.hash_shift^Z.window[I+b-1])&Z.hash_mask,Z.prev[I&Z.w_mask]=Z.head[Z.ins_h],Z.head[Z.ins_h]=I,I++,--P;);Z.strstart=I,Z.lookahead=b-1,mt(Z)}return Z.strstart+=Z.lookahead,Z.block_start=Z.strstart,Z.insert=Z.lookahead,Z.lookahead=0,Z.match_length=Z.prev_length=b-1,Z.match_available=0,g.next_in=w,g.input=x,g.avail_in=et,Z.wrap=z,u},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,n,r){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,n,r){n.exports=function(s,o){var a,l,c,p,d,m,u,v,_,f,h,M,E,S,L,D,A,N,b,T,F,R,U,y,B;a=s.state,l=s.next_in,y=s.input,c=l+(s.avail_in-5),p=s.next_out,B=s.output,d=p-(o-s.avail_out),m=p+(s.avail_out-257),u=a.dmax,v=a.wsize,_=a.whave,f=a.wnext,h=a.window,M=a.hold,E=a.bits,S=a.lencode,L=a.distcode,D=(1<<a.lenbits)-1,A=(1<<a.distbits)-1;t:do{E<15&&(M+=y[l++]<<E,E+=8,M+=y[l++]<<E,E+=8),N=S[M&D];e:for(;;){if(M>>>=b=N>>>24,E-=b,(b=N>>>16&255)===0)B[p++]=65535&N;else{if(!(16&b)){if(!(64&b)){N=S[(65535&N)+(M&(1<<b)-1)];continue e}if(32&b){a.mode=12;break t}s.msg="invalid literal/length code",a.mode=30;break t}T=65535&N,(b&=15)&&(E<b&&(M+=y[l++]<<E,E+=8),T+=M&(1<<b)-1,M>>>=b,E-=b),E<15&&(M+=y[l++]<<E,E+=8,M+=y[l++]<<E,E+=8),N=L[M&A];n:for(;;){if(M>>>=b=N>>>24,E-=b,!(16&(b=N>>>16&255))){if(!(64&b)){N=L[(65535&N)+(M&(1<<b)-1)];continue n}s.msg="invalid distance code",a.mode=30;break t}if(F=65535&N,E<(b&=15)&&(M+=y[l++]<<E,(E+=8)<b&&(M+=y[l++]<<E,E+=8)),u<(F+=M&(1<<b)-1)){s.msg="invalid distance too far back",a.mode=30;break t}if(M>>>=b,E-=b,(b=p-d)<F){if(_<(b=F-b)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break t}if(U=h,(R=0)===f){if(R+=v-b,b<T){for(T-=b;B[p++]=h[R++],--b;);R=p-F,U=B}}else if(f<b){if(R+=v+f-b,(b-=f)<T){for(T-=b;B[p++]=h[R++],--b;);if(R=0,f<T){for(T-=b=f;B[p++]=h[R++],--b;);R=p-F,U=B}}}else if(R+=f-b,b<T){for(T-=b;B[p++]=h[R++],--b;);R=p-F,U=B}for(;2<T;)B[p++]=U[R++],B[p++]=U[R++],B[p++]=U[R++],T-=3;T&&(B[p++]=U[R++],1<T&&(B[p++]=U[R++]))}else{for(R=p-F;B[p++]=B[R++],B[p++]=B[R++],B[p++]=B[R++],2<(T-=3););T&&(B[p++]=B[R++],1<T&&(B[p++]=B[R++]))}break}}break}}while(l<c&&p<m);l-=T=E>>3,M&=(1<<(E-=T<<3))-1,s.next_in=l,s.next_out=p,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=p<m?m-p+257:257-(p-m),a.hold=M,a.bits=E}},{}],49:[function(e,n,r){var s=e("../utils/common"),o=e("./adler32"),a=e("./crc32"),l=e("./inffast"),c=e("./inftrees"),p=1,d=2,m=0,u=-2,v=1,_=852,f=592;function h(R){return(R>>>24&255)+(R>>>8&65280)+((65280&R)<<8)+((255&R)<<24)}function M(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function E(R){var U;return R&&R.state?(U=R.state,R.total_in=R.total_out=U.total=0,R.msg="",U.wrap&&(R.adler=1&U.wrap),U.mode=v,U.last=0,U.havedict=0,U.dmax=32768,U.head=null,U.hold=0,U.bits=0,U.lencode=U.lendyn=new s.Buf32(_),U.distcode=U.distdyn=new s.Buf32(f),U.sane=1,U.back=-1,m):u}function S(R){var U;return R&&R.state?((U=R.state).wsize=0,U.whave=0,U.wnext=0,E(R)):u}function L(R,U){var y,B;return R&&R.state?(B=R.state,U<0?(y=0,U=-U):(y=1+(U>>4),U<48&&(U&=15)),U&&(U<8||15<U)?u:(B.window!==null&&B.wbits!==U&&(B.window=null),B.wrap=y,B.wbits=U,S(R))):u}function D(R,U){var y,B;return R?(B=new M,(R.state=B).window=null,(y=L(R,U))!==m&&(R.state=null),y):u}var A,N,b=!0;function T(R){if(b){var U;for(A=new s.Buf32(512),N=new s.Buf32(32),U=0;U<144;)R.lens[U++]=8;for(;U<256;)R.lens[U++]=9;for(;U<280;)R.lens[U++]=7;for(;U<288;)R.lens[U++]=8;for(c(p,R.lens,0,288,A,0,R.work,{bits:9}),U=0;U<32;)R.lens[U++]=5;c(d,R.lens,0,32,N,0,R.work,{bits:5}),b=!1}R.lencode=A,R.lenbits=9,R.distcode=N,R.distbits=5}function F(R,U,y,B){var nt,k=R.state;return k.window===null&&(k.wsize=1<<k.wbits,k.wnext=0,k.whave=0,k.window=new s.Buf8(k.wsize)),B>=k.wsize?(s.arraySet(k.window,U,y-k.wsize,k.wsize,0),k.wnext=0,k.whave=k.wsize):(B<(nt=k.wsize-k.wnext)&&(nt=B),s.arraySet(k.window,U,y-B,nt,k.wnext),(B-=nt)?(s.arraySet(k.window,U,y-B,B,0),k.wnext=B,k.whave=k.wsize):(k.wnext+=nt,k.wnext===k.wsize&&(k.wnext=0),k.whave<k.wsize&&(k.whave+=nt))),0}r.inflateReset=S,r.inflateReset2=L,r.inflateResetKeep=E,r.inflateInit=function(R){return D(R,15)},r.inflateInit2=D,r.inflate=function(R,U){var y,B,nt,k,J,tt,lt,H,W,_t,X,Q,mt,ut,pt,Mt,Pt,It,Ut,Xt,g,at,Z,I,P=0,z=new s.Buf8(4),et=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!R||!R.state||!R.output||!R.input&&R.avail_in!==0)return u;(y=R.state).mode===12&&(y.mode=13),J=R.next_out,nt=R.output,lt=R.avail_out,k=R.next_in,B=R.input,tt=R.avail_in,H=y.hold,W=y.bits,_t=tt,X=lt,at=m;t:for(;;)switch(y.mode){case v:if(y.wrap===0){y.mode=13;break}for(;W<16;){if(tt===0)break t;tt--,H+=B[k++]<<W,W+=8}if(2&y.wrap&&H===35615){z[y.check=0]=255&H,z[1]=H>>>8&255,y.check=a(y.check,z,2,0),W=H=0,y.mode=2;break}if(y.flags=0,y.head&&(y.head.done=!1),!(1&y.wrap)||(((255&H)<<8)+(H>>8))%31){R.msg="incorrect header check",y.mode=30;break}if((15&H)!=8){R.msg="unknown compression method",y.mode=30;break}if(W-=4,g=8+(15&(H>>>=4)),y.wbits===0)y.wbits=g;else if(g>y.wbits){R.msg="invalid window size",y.mode=30;break}y.dmax=1<<g,R.adler=y.check=1,y.mode=512&H?10:12,W=H=0;break;case 2:for(;W<16;){if(tt===0)break t;tt--,H+=B[k++]<<W,W+=8}if(y.flags=H,(255&y.flags)!=8){R.msg="unknown compression method",y.mode=30;break}if(57344&y.flags){R.msg="unknown header flags set",y.mode=30;break}y.head&&(y.head.text=H>>8&1),512&y.flags&&(z[0]=255&H,z[1]=H>>>8&255,y.check=a(y.check,z,2,0)),W=H=0,y.mode=3;case 3:for(;W<32;){if(tt===0)break t;tt--,H+=B[k++]<<W,W+=8}y.head&&(y.head.time=H),512&y.flags&&(z[0]=255&H,z[1]=H>>>8&255,z[2]=H>>>16&255,z[3]=H>>>24&255,y.check=a(y.check,z,4,0)),W=H=0,y.mode=4;case 4:for(;W<16;){if(tt===0)break t;tt--,H+=B[k++]<<W,W+=8}y.head&&(y.head.xflags=255&H,y.head.os=H>>8),512&y.flags&&(z[0]=255&H,z[1]=H>>>8&255,y.check=a(y.check,z,2,0)),W=H=0,y.mode=5;case 5:if(1024&y.flags){for(;W<16;){if(tt===0)break t;tt--,H+=B[k++]<<W,W+=8}y.length=H,y.head&&(y.head.extra_len=H),512&y.flags&&(z[0]=255&H,z[1]=H>>>8&255,y.check=a(y.check,z,2,0)),W=H=0}else y.head&&(y.head.extra=null);y.mode=6;case 6:if(1024&y.flags&&(tt<(Q=y.length)&&(Q=tt),Q&&(y.head&&(g=y.head.extra_len-y.length,y.head.extra||(y.head.extra=new Array(y.head.extra_len)),s.arraySet(y.head.extra,B,k,Q,g)),512&y.flags&&(y.check=a(y.check,B,Q,k)),tt-=Q,k+=Q,y.length-=Q),y.length))break t;y.length=0,y.mode=7;case 7:if(2048&y.flags){if(tt===0)break t;for(Q=0;g=B[k+Q++],y.head&&g&&y.length<65536&&(y.head.name+=String.fromCharCode(g)),g&&Q<tt;);if(512&y.flags&&(y.check=a(y.check,B,Q,k)),tt-=Q,k+=Q,g)break t}else y.head&&(y.head.name=null);y.length=0,y.mode=8;case 8:if(4096&y.flags){if(tt===0)break t;for(Q=0;g=B[k+Q++],y.head&&g&&y.length<65536&&(y.head.comment+=String.fromCharCode(g)),g&&Q<tt;);if(512&y.flags&&(y.check=a(y.check,B,Q,k)),tt-=Q,k+=Q,g)break t}else y.head&&(y.head.comment=null);y.mode=9;case 9:if(512&y.flags){for(;W<16;){if(tt===0)break t;tt--,H+=B[k++]<<W,W+=8}if(H!==(65535&y.check)){R.msg="header crc mismatch",y.mode=30;break}W=H=0}y.head&&(y.head.hcrc=y.flags>>9&1,y.head.done=!0),R.adler=y.check=0,y.mode=12;break;case 10:for(;W<32;){if(tt===0)break t;tt--,H+=B[k++]<<W,W+=8}R.adler=y.check=h(H),W=H=0,y.mode=11;case 11:if(y.havedict===0)return R.next_out=J,R.avail_out=lt,R.next_in=k,R.avail_in=tt,y.hold=H,y.bits=W,2;R.adler=y.check=1,y.mode=12;case 12:if(U===5||U===6)break t;case 13:if(y.last){H>>>=7&W,W-=7&W,y.mode=27;break}for(;W<3;){if(tt===0)break t;tt--,H+=B[k++]<<W,W+=8}switch(y.last=1&H,W-=1,3&(H>>>=1)){case 0:y.mode=14;break;case 1:if(T(y),y.mode=20,U!==6)break;H>>>=2,W-=2;break t;case 2:y.mode=17;break;case 3:R.msg="invalid block type",y.mode=30}H>>>=2,W-=2;break;case 14:for(H>>>=7&W,W-=7&W;W<32;){if(tt===0)break t;tt--,H+=B[k++]<<W,W+=8}if((65535&H)!=(H>>>16^65535)){R.msg="invalid stored block lengths",y.mode=30;break}if(y.length=65535&H,W=H=0,y.mode=15,U===6)break t;case 15:y.mode=16;case 16:if(Q=y.length){if(tt<Q&&(Q=tt),lt<Q&&(Q=lt),Q===0)break t;s.arraySet(nt,B,k,Q,J),tt-=Q,k+=Q,lt-=Q,J+=Q,y.length-=Q;break}y.mode=12;break;case 17:for(;W<14;){if(tt===0)break t;tt--,H+=B[k++]<<W,W+=8}if(y.nlen=257+(31&H),H>>>=5,W-=5,y.ndist=1+(31&H),H>>>=5,W-=5,y.ncode=4+(15&H),H>>>=4,W-=4,286<y.nlen||30<y.ndist){R.msg="too many length or distance symbols",y.mode=30;break}y.have=0,y.mode=18;case 18:for(;y.have<y.ncode;){for(;W<3;){if(tt===0)break t;tt--,H+=B[k++]<<W,W+=8}y.lens[et[y.have++]]=7&H,H>>>=3,W-=3}for(;y.have<19;)y.lens[et[y.have++]]=0;if(y.lencode=y.lendyn,y.lenbits=7,Z={bits:y.lenbits},at=c(0,y.lens,0,19,y.lencode,0,y.work,Z),y.lenbits=Z.bits,at){R.msg="invalid code lengths set",y.mode=30;break}y.have=0,y.mode=19;case 19:for(;y.have<y.nlen+y.ndist;){for(;Mt=(P=y.lencode[H&(1<<y.lenbits)-1])>>>16&255,Pt=65535&P,!((pt=P>>>24)<=W);){if(tt===0)break t;tt--,H+=B[k++]<<W,W+=8}if(Pt<16)H>>>=pt,W-=pt,y.lens[y.have++]=Pt;else{if(Pt===16){for(I=pt+2;W<I;){if(tt===0)break t;tt--,H+=B[k++]<<W,W+=8}if(H>>>=pt,W-=pt,y.have===0){R.msg="invalid bit length repeat",y.mode=30;break}g=y.lens[y.have-1],Q=3+(3&H),H>>>=2,W-=2}else if(Pt===17){for(I=pt+3;W<I;){if(tt===0)break t;tt--,H+=B[k++]<<W,W+=8}W-=pt,g=0,Q=3+(7&(H>>>=pt)),H>>>=3,W-=3}else{for(I=pt+7;W<I;){if(tt===0)break t;tt--,H+=B[k++]<<W,W+=8}W-=pt,g=0,Q=11+(127&(H>>>=pt)),H>>>=7,W-=7}if(y.have+Q>y.nlen+y.ndist){R.msg="invalid bit length repeat",y.mode=30;break}for(;Q--;)y.lens[y.have++]=g}}if(y.mode===30)break;if(y.lens[256]===0){R.msg="invalid code -- missing end-of-block",y.mode=30;break}if(y.lenbits=9,Z={bits:y.lenbits},at=c(p,y.lens,0,y.nlen,y.lencode,0,y.work,Z),y.lenbits=Z.bits,at){R.msg="invalid literal/lengths set",y.mode=30;break}if(y.distbits=6,y.distcode=y.distdyn,Z={bits:y.distbits},at=c(d,y.lens,y.nlen,y.ndist,y.distcode,0,y.work,Z),y.distbits=Z.bits,at){R.msg="invalid distances set",y.mode=30;break}if(y.mode=20,U===6)break t;case 20:y.mode=21;case 21:if(6<=tt&&258<=lt){R.next_out=J,R.avail_out=lt,R.next_in=k,R.avail_in=tt,y.hold=H,y.bits=W,l(R,X),J=R.next_out,nt=R.output,lt=R.avail_out,k=R.next_in,B=R.input,tt=R.avail_in,H=y.hold,W=y.bits,y.mode===12&&(y.back=-1);break}for(y.back=0;Mt=(P=y.lencode[H&(1<<y.lenbits)-1])>>>16&255,Pt=65535&P,!((pt=P>>>24)<=W);){if(tt===0)break t;tt--,H+=B[k++]<<W,W+=8}if(Mt&&!(240&Mt)){for(It=pt,Ut=Mt,Xt=Pt;Mt=(P=y.lencode[Xt+((H&(1<<It+Ut)-1)>>It)])>>>16&255,Pt=65535&P,!(It+(pt=P>>>24)<=W);){if(tt===0)break t;tt--,H+=B[k++]<<W,W+=8}H>>>=It,W-=It,y.back+=It}if(H>>>=pt,W-=pt,y.back+=pt,y.length=Pt,Mt===0){y.mode=26;break}if(32&Mt){y.back=-1,y.mode=12;break}if(64&Mt){R.msg="invalid literal/length code",y.mode=30;break}y.extra=15&Mt,y.mode=22;case 22:if(y.extra){for(I=y.extra;W<I;){if(tt===0)break t;tt--,H+=B[k++]<<W,W+=8}y.length+=H&(1<<y.extra)-1,H>>>=y.extra,W-=y.extra,y.back+=y.extra}y.was=y.length,y.mode=23;case 23:for(;Mt=(P=y.distcode[H&(1<<y.distbits)-1])>>>16&255,Pt=65535&P,!((pt=P>>>24)<=W);){if(tt===0)break t;tt--,H+=B[k++]<<W,W+=8}if(!(240&Mt)){for(It=pt,Ut=Mt,Xt=Pt;Mt=(P=y.distcode[Xt+((H&(1<<It+Ut)-1)>>It)])>>>16&255,Pt=65535&P,!(It+(pt=P>>>24)<=W);){if(tt===0)break t;tt--,H+=B[k++]<<W,W+=8}H>>>=It,W-=It,y.back+=It}if(H>>>=pt,W-=pt,y.back+=pt,64&Mt){R.msg="invalid distance code",y.mode=30;break}y.offset=Pt,y.extra=15&Mt,y.mode=24;case 24:if(y.extra){for(I=y.extra;W<I;){if(tt===0)break t;tt--,H+=B[k++]<<W,W+=8}y.offset+=H&(1<<y.extra)-1,H>>>=y.extra,W-=y.extra,y.back+=y.extra}if(y.offset>y.dmax){R.msg="invalid distance too far back",y.mode=30;break}y.mode=25;case 25:if(lt===0)break t;if(Q=X-lt,y.offset>Q){if((Q=y.offset-Q)>y.whave&&y.sane){R.msg="invalid distance too far back",y.mode=30;break}mt=Q>y.wnext?(Q-=y.wnext,y.wsize-Q):y.wnext-Q,Q>y.length&&(Q=y.length),ut=y.window}else ut=nt,mt=J-y.offset,Q=y.length;for(lt<Q&&(Q=lt),lt-=Q,y.length-=Q;nt[J++]=ut[mt++],--Q;);y.length===0&&(y.mode=21);break;case 26:if(lt===0)break t;nt[J++]=y.length,lt--,y.mode=21;break;case 27:if(y.wrap){for(;W<32;){if(tt===0)break t;tt--,H|=B[k++]<<W,W+=8}if(X-=lt,R.total_out+=X,y.total+=X,X&&(R.adler=y.check=y.flags?a(y.check,nt,X,J-X):o(y.check,nt,X,J-X)),X=lt,(y.flags?H:h(H))!==y.check){R.msg="incorrect data check",y.mode=30;break}W=H=0}y.mode=28;case 28:if(y.wrap&&y.flags){for(;W<32;){if(tt===0)break t;tt--,H+=B[k++]<<W,W+=8}if(H!==(4294967295&y.total)){R.msg="incorrect length check",y.mode=30;break}W=H=0}y.mode=29;case 29:at=1;break t;case 30:at=-3;break t;case 31:return-4;case 32:default:return u}return R.next_out=J,R.avail_out=lt,R.next_in=k,R.avail_in=tt,y.hold=H,y.bits=W,(y.wsize||X!==R.avail_out&&y.mode<30&&(y.mode<27||U!==4))&&F(R,R.output,R.next_out,X-R.avail_out)?(y.mode=31,-4):(_t-=R.avail_in,X-=R.avail_out,R.total_in+=_t,R.total_out+=X,y.total+=X,y.wrap&&X&&(R.adler=y.check=y.flags?a(y.check,nt,X,R.next_out-X):o(y.check,nt,X,R.next_out-X)),R.data_type=y.bits+(y.last?64:0)+(y.mode===12?128:0)+(y.mode===20||y.mode===15?256:0),(_t==0&&X===0||U===4)&&at===m&&(at=-5),at)},r.inflateEnd=function(R){if(!R||!R.state)return u;var U=R.state;return U.window&&(U.window=null),R.state=null,m},r.inflateGetHeader=function(R,U){var y;return R&&R.state&&2&(y=R.state).wrap?((y.head=U).done=!1,m):u},r.inflateSetDictionary=function(R,U){var y,B=U.length;return R&&R.state?(y=R.state).wrap!==0&&y.mode!==11?u:y.mode===11&&o(1,U,B,0)!==y.check?-3:F(R,U,B,B)?(y.mode=31,-4):(y.havedict=1,m):u},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,n,r){var s=e("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(p,d,m,u,v,_,f,h){var M,E,S,L,D,A,N,b,T,F=h.bits,R=0,U=0,y=0,B=0,nt=0,k=0,J=0,tt=0,lt=0,H=0,W=null,_t=0,X=new s.Buf16(16),Q=new s.Buf16(16),mt=null,ut=0;for(R=0;R<=15;R++)X[R]=0;for(U=0;U<u;U++)X[d[m+U]]++;for(nt=F,B=15;1<=B&&X[B]===0;B--);if(B<nt&&(nt=B),B===0)return v[_++]=20971520,v[_++]=20971520,h.bits=1,0;for(y=1;y<B&&X[y]===0;y++);for(nt<y&&(nt=y),R=tt=1;R<=15;R++)if(tt<<=1,(tt-=X[R])<0)return-1;if(0<tt&&(p===0||B!==1))return-1;for(Q[1]=0,R=1;R<15;R++)Q[R+1]=Q[R]+X[R];for(U=0;U<u;U++)d[m+U]!==0&&(f[Q[d[m+U]]++]=U);if(A=p===0?(W=mt=f,19):p===1?(W=o,_t-=257,mt=a,ut-=257,256):(W=l,mt=c,-1),R=y,D=_,J=U=H=0,S=-1,L=(lt=1<<(k=nt))-1,p===1&&852<lt||p===2&&592<lt)return 1;for(;;){for(N=R-J,T=f[U]<A?(b=0,f[U]):f[U]>A?(b=mt[ut+f[U]],W[_t+f[U]]):(b=96,0),M=1<<R-J,y=E=1<<k;v[D+(H>>J)+(E-=M)]=N<<24|b<<16|T|0,E!==0;);for(M=1<<R-1;H&M;)M>>=1;if(M!==0?(H&=M-1,H+=M):H=0,U++,--X[R]==0){if(R===B)break;R=d[m+f[U]]}if(nt<R&&(H&L)!==S){for(J===0&&(J=nt),D+=y,tt=1<<(k=R-J);k+J<B&&!((tt-=X[k+J])<=0);)k++,tt<<=1;if(lt+=1<<k,p===1&&852<lt||p===2&&592<lt)return 1;v[S=H&L]=nt<<24|k<<16|D-_|0}}return H!==0&&(v[D+H]=R-J<<24|64<<16|0),h.bits=nt,0}},{"../utils/common":41}],51:[function(e,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,n,r){var s=e("../utils/common"),o=0,a=1;function l(P){for(var z=P.length;0<=--z;)P[z]=0}var c=0,p=29,d=256,m=d+1+p,u=30,v=19,_=2*m+1,f=15,h=16,M=7,E=256,S=16,L=17,D=18,A=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],N=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],T=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],F=new Array(2*(m+2));l(F);var R=new Array(2*u);l(R);var U=new Array(512);l(U);var y=new Array(256);l(y);var B=new Array(p);l(B);var nt,k,J,tt=new Array(u);function lt(P,z,et,w,x){this.static_tree=P,this.extra_bits=z,this.extra_base=et,this.elems=w,this.max_length=x,this.has_stree=P&&P.length}function H(P,z){this.dyn_tree=P,this.max_code=0,this.stat_desc=z}function W(P){return P<256?U[P]:U[256+(P>>>7)]}function _t(P,z){P.pending_buf[P.pending++]=255&z,P.pending_buf[P.pending++]=z>>>8&255}function X(P,z,et){P.bi_valid>h-et?(P.bi_buf|=z<<P.bi_valid&65535,_t(P,P.bi_buf),P.bi_buf=z>>h-P.bi_valid,P.bi_valid+=et-h):(P.bi_buf|=z<<P.bi_valid&65535,P.bi_valid+=et)}function Q(P,z,et){X(P,et[2*z],et[2*z+1])}function mt(P,z){for(var et=0;et|=1&P,P>>>=1,et<<=1,0<--z;);return et>>>1}function ut(P,z,et){var w,x,O=new Array(f+1),q=0;for(w=1;w<=f;w++)O[w]=q=q+et[w-1]<<1;for(x=0;x<=z;x++){var G=P[2*x+1];G!==0&&(P[2*x]=mt(O[G]++,G))}}function pt(P){var z;for(z=0;z<m;z++)P.dyn_ltree[2*z]=0;for(z=0;z<u;z++)P.dyn_dtree[2*z]=0;for(z=0;z<v;z++)P.bl_tree[2*z]=0;P.dyn_ltree[2*E]=1,P.opt_len=P.static_len=0,P.last_lit=P.matches=0}function Mt(P){8<P.bi_valid?_t(P,P.bi_buf):0<P.bi_valid&&(P.pending_buf[P.pending++]=P.bi_buf),P.bi_buf=0,P.bi_valid=0}function Pt(P,z,et,w){var x=2*z,O=2*et;return P[x]<P[O]||P[x]===P[O]&&w[z]<=w[et]}function It(P,z,et){for(var w=P.heap[et],x=et<<1;x<=P.heap_len&&(x<P.heap_len&&Pt(z,P.heap[x+1],P.heap[x],P.depth)&&x++,!Pt(z,w,P.heap[x],P.depth));)P.heap[et]=P.heap[x],et=x,x<<=1;P.heap[et]=w}function Ut(P,z,et){var w,x,O,q,G=0;if(P.last_lit!==0)for(;w=P.pending_buf[P.d_buf+2*G]<<8|P.pending_buf[P.d_buf+2*G+1],x=P.pending_buf[P.l_buf+G],G++,w===0?Q(P,x,z):(Q(P,(O=y[x])+d+1,z),(q=A[O])!==0&&X(P,x-=B[O],q),Q(P,O=W(--w),et),(q=N[O])!==0&&X(P,w-=tt[O],q)),G<P.last_lit;);Q(P,E,z)}function Xt(P,z){var et,w,x,O=z.dyn_tree,q=z.stat_desc.static_tree,G=z.stat_desc.has_stree,$=z.stat_desc.elems,ft=-1;for(P.heap_len=0,P.heap_max=_,et=0;et<$;et++)O[2*et]!==0?(P.heap[++P.heap_len]=ft=et,P.depth[et]=0):O[2*et+1]=0;for(;P.heap_len<2;)O[2*(x=P.heap[++P.heap_len]=ft<2?++ft:0)]=1,P.depth[x]=0,P.opt_len--,G&&(P.static_len-=q[2*x+1]);for(z.max_code=ft,et=P.heap_len>>1;1<=et;et--)It(P,O,et);for(x=$;et=P.heap[1],P.heap[1]=P.heap[P.heap_len--],It(P,O,1),w=P.heap[1],P.heap[--P.heap_max]=et,P.heap[--P.heap_max]=w,O[2*x]=O[2*et]+O[2*w],P.depth[x]=(P.depth[et]>=P.depth[w]?P.depth[et]:P.depth[w])+1,O[2*et+1]=O[2*w+1]=x,P.heap[1]=x++,It(P,O,1),2<=P.heap_len;);P.heap[--P.heap_max]=P.heap[1],function(ct,gt){var Gt,ht,Tt,St,Lt,wt,Nt=gt.dyn_tree,Ot=gt.max_code,$t=gt.stat_desc.static_tree,V=gt.stat_desc.has_stree,xt=gt.stat_desc.extra_bits,st=gt.stat_desc.extra_base,ot=gt.stat_desc.max_length,yt=0;for(St=0;St<=f;St++)ct.bl_count[St]=0;for(Nt[2*ct.heap[ct.heap_max]+1]=0,Gt=ct.heap_max+1;Gt<_;Gt++)ot<(St=Nt[2*Nt[2*(ht=ct.heap[Gt])+1]+1]+1)&&(St=ot,yt++),Nt[2*ht+1]=St,Ot<ht||(ct.bl_count[St]++,Lt=0,st<=ht&&(Lt=xt[ht-st]),wt=Nt[2*ht],ct.opt_len+=wt*(St+Lt),V&&(ct.static_len+=wt*($t[2*ht+1]+Lt)));if(yt!==0){do{for(St=ot-1;ct.bl_count[St]===0;)St--;ct.bl_count[St]--,ct.bl_count[St+1]+=2,ct.bl_count[ot]--,yt-=2}while(0<yt);for(St=ot;St!==0;St--)for(ht=ct.bl_count[St];ht!==0;)Ot<(Tt=ct.heap[--Gt])||(Nt[2*Tt+1]!==St&&(ct.opt_len+=(St-Nt[2*Tt+1])*Nt[2*Tt],Nt[2*Tt+1]=St),ht--)}}(P,z),ut(O,ft,P.bl_count)}function g(P,z,et){var w,x,O=-1,q=z[1],G=0,$=7,ft=4;for(q===0&&($=138,ft=3),z[2*(et+1)+1]=65535,w=0;w<=et;w++)x=q,q=z[2*(w+1)+1],++G<$&&x===q||(G<ft?P.bl_tree[2*x]+=G:x!==0?(x!==O&&P.bl_tree[2*x]++,P.bl_tree[2*S]++):G<=10?P.bl_tree[2*L]++:P.bl_tree[2*D]++,O=x,ft=(G=0)===q?($=138,3):x===q?($=6,3):($=7,4))}function at(P,z,et){var w,x,O=-1,q=z[1],G=0,$=7,ft=4;for(q===0&&($=138,ft=3),w=0;w<=et;w++)if(x=q,q=z[2*(w+1)+1],!(++G<$&&x===q)){if(G<ft)for(;Q(P,x,P.bl_tree),--G!=0;);else x!==0?(x!==O&&(Q(P,x,P.bl_tree),G--),Q(P,S,P.bl_tree),X(P,G-3,2)):G<=10?(Q(P,L,P.bl_tree),X(P,G-3,3)):(Q(P,D,P.bl_tree),X(P,G-11,7));O=x,ft=(G=0)===q?($=138,3):x===q?($=6,3):($=7,4)}}l(tt);var Z=!1;function I(P,z,et,w){X(P,(c<<1)+(w?1:0),3),function(x,O,q,G){Mt(x),_t(x,q),_t(x,~q),s.arraySet(x.pending_buf,x.window,O,q,x.pending),x.pending+=q}(P,z,et)}r._tr_init=function(P){Z||(function(){var z,et,w,x,O,q=new Array(f+1);for(x=w=0;x<p-1;x++)for(B[x]=w,z=0;z<1<<A[x];z++)y[w++]=x;for(y[w-1]=x,x=O=0;x<16;x++)for(tt[x]=O,z=0;z<1<<N[x];z++)U[O++]=x;for(O>>=7;x<u;x++)for(tt[x]=O<<7,z=0;z<1<<N[x]-7;z++)U[256+O++]=x;for(et=0;et<=f;et++)q[et]=0;for(z=0;z<=143;)F[2*z+1]=8,z++,q[8]++;for(;z<=255;)F[2*z+1]=9,z++,q[9]++;for(;z<=279;)F[2*z+1]=7,z++,q[7]++;for(;z<=287;)F[2*z+1]=8,z++,q[8]++;for(ut(F,m+1,q),z=0;z<u;z++)R[2*z+1]=5,R[2*z]=mt(z,5);nt=new lt(F,A,d+1,m,f),k=new lt(R,N,0,u,f),J=new lt(new Array(0),b,0,v,M)}(),Z=!0),P.l_desc=new H(P.dyn_ltree,nt),P.d_desc=new H(P.dyn_dtree,k),P.bl_desc=new H(P.bl_tree,J),P.bi_buf=0,P.bi_valid=0,pt(P)},r._tr_stored_block=I,r._tr_flush_block=function(P,z,et,w){var x,O,q=0;0<P.level?(P.strm.data_type===2&&(P.strm.data_type=function(G){var $,ft=4093624447;for($=0;$<=31;$++,ft>>>=1)if(1&ft&&G.dyn_ltree[2*$]!==0)return o;if(G.dyn_ltree[18]!==0||G.dyn_ltree[20]!==0||G.dyn_ltree[26]!==0)return a;for($=32;$<d;$++)if(G.dyn_ltree[2*$]!==0)return a;return o}(P)),Xt(P,P.l_desc),Xt(P,P.d_desc),q=function(G){var $;for(g(G,G.dyn_ltree,G.l_desc.max_code),g(G,G.dyn_dtree,G.d_desc.max_code),Xt(G,G.bl_desc),$=v-1;3<=$&&G.bl_tree[2*T[$]+1]===0;$--);return G.opt_len+=3*($+1)+5+5+4,$}(P),x=P.opt_len+3+7>>>3,(O=P.static_len+3+7>>>3)<=x&&(x=O)):x=O=et+5,et+4<=x&&z!==-1?I(P,z,et,w):P.strategy===4||O===x?(X(P,2+(w?1:0),3),Ut(P,F,R)):(X(P,4+(w?1:0),3),function(G,$,ft,ct){var gt;for(X(G,$-257,5),X(G,ft-1,5),X(G,ct-4,4),gt=0;gt<ct;gt++)X(G,G.bl_tree[2*T[gt]+1],3);at(G,G.dyn_ltree,$-1),at(G,G.dyn_dtree,ft-1)}(P,P.l_desc.max_code+1,P.d_desc.max_code+1,q+1),Ut(P,P.dyn_ltree,P.dyn_dtree)),pt(P),w&&Mt(P)},r._tr_tally=function(P,z,et){return P.pending_buf[P.d_buf+2*P.last_lit]=z>>>8&255,P.pending_buf[P.d_buf+2*P.last_lit+1]=255&z,P.pending_buf[P.l_buf+P.last_lit]=255&et,P.last_lit++,z===0?P.dyn_ltree[2*et]++:(P.matches++,z--,P.dyn_ltree[2*(y[et]+d+1)]++,P.dyn_dtree[2*W(z)]++),P.last_lit===P.lit_bufsize-1},r._tr_align=function(P){X(P,2,3),Q(P,E,F),function(z){z.bi_valid===16?(_t(z,z.bi_buf),z.bi_buf=0,z.bi_valid=0):8<=z.bi_valid&&(z.pending_buf[z.pending++]=255&z.bi_buf,z.bi_buf>>=8,z.bi_valid-=8)}(P)}},{"../utils/common":41}],53:[function(e,n,r){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,n,r){(function(s){(function(o,a){if(!o.setImmediate){var l,c,p,d,m=1,u={},v=!1,_=o.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(o);f=f&&f.setTimeout?f:o,l={}.toString.call(o.process)==="[object process]"?function(S){process.nextTick(function(){M(S)})}:function(){if(o.postMessage&&!o.importScripts){var S=!0,L=o.onmessage;return o.onmessage=function(){S=!1},o.postMessage("","*"),o.onmessage=L,S}}()?(d="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",E,!1):o.attachEvent("onmessage",E),function(S){o.postMessage(d+S,"*")}):o.MessageChannel?((p=new MessageChannel).port1.onmessage=function(S){M(S.data)},function(S){p.port2.postMessage(S)}):_&&"onreadystatechange"in _.createElement("script")?(c=_.documentElement,function(S){var L=_.createElement("script");L.onreadystatechange=function(){M(S),L.onreadystatechange=null,c.removeChild(L),L=null},c.appendChild(L)}):function(S){setTimeout(M,0,S)},f.setImmediate=function(S){typeof S!="function"&&(S=new Function(""+S));for(var L=new Array(arguments.length-1),D=0;D<L.length;D++)L[D]=arguments[D+1];var A={callback:S,args:L};return u[m]=A,l(m),m++},f.clearImmediate=h}function h(S){delete u[S]}function M(S){if(v)setTimeout(M,0,S);else{var L=u[S];if(L){v=!0;try{(function(D){var A=D.callback,N=D.args;switch(N.length){case 0:A();break;case 1:A(N[0]);break;case 2:A(N[0],N[1]);break;case 3:A(N[0],N[1],N[2]);break;default:A.apply(a,N)}})(L)}finally{h(S),v=!1}}}}function E(S){S.source===o&&typeof S.data=="string"&&S.data.indexOf(d)===0&&M(+S.data.slice(d.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof vr<"u"?vr:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})}(ms)),ms.exports}var e_=t_();const n_=Qm(e_);function i_(i){const t=new Map,e=new Map;for(const[n,r]of i.textFiles.entries()){const s=new Blob([r],{type:"text/plain"}),o=URL.createObjectURL(s);t.set(n,o)}for(const[n,r]of i.binaryFiles.entries()){const s=new Blob([r],{type:"application/octet-stream"}),o=URL.createObjectURL(s);e.set(n,o)}return{textFileURIs:t,binaryFileURIs:e}}async function Pl(i,t,e){const n=new Map;try{const r=await fetch(i);if(!r.ok)throw new Error(`Failed to load ZIP file: ${r.statusText}`);const s=await r.arrayBuffer(),o=await n_.loadAsync(s);for(const a of Object.keys(o.files)){const l=o.files[a];if(l&&!l.dir&&a.endsWith(t)){const c=await l.async(e);n.set(a,c)}}}catch(r){r instanceof Error?console.error(`Error loading ZIP file: ${r.message}`):console.error(`Unknown error occurred: ${JSON.stringify(r)}`)}return n}async function r_(i,t){return Pl(i,t,"text")}async function s_(i,t){return Pl(i,t,"arraybuffer")}function a_(...i){const t=new Map;return i.forEach(e=>{e.forEach((n,r)=>{t.set(r,n)})}),t}async function Yo(i,t,e){const n=await Promise.all(t.map(r=>e(i,r)));return a_(...n)}async function o_(){const i="./assets.zip",t=[".obj",".urdf"],e=[".png",".STL"],n=await Yo(i,t,r_),r=await Yo(i,e,s_);return{textFiles:n,binaryFiles:r}}async function l_(){try{const i=await o_();return console.log("ZIP file loaded and extracted successfully.",i),i}catch(i){console.error("Error during ZIP loading:",i)}return{textFiles:new Map,binaryFiles:new Map}}async function c_(){const i=await l_(),t=i_(i);console.log(t);const e=new jm(i);new Jm(e).mainLoop()}c_();
//# sourceMappingURL=index-BqMfQtRZ.js.map
