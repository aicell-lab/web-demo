var lh=Object.defineProperty;var uh=(s,e,t)=>e in s?lh(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var ke=(s,e,t)=>uh(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qo="170",hh=0,Ec=1,dh=2,lu=1,fh=2,Jn=3,Bn=0,Qt=1,_n=2,gi=0,ur=1,wc=2,Tc=3,Ac=4,ph=5,Li=100,mh=101,gh=102,_h=103,vh=104,xh=200,yh=201,bh=202,Mh=203,co=204,lo=205,Sh=206,Eh=207,wh=208,Th=209,Ah=210,Rh=211,Ch=212,Ih=213,Lh=214,uo=0,ho=1,fo=2,mr=3,po=4,mo=5,go=6,_o=7,ca=0,Ph=1,Nh=2,_i=0,Dh=1,Uh=2,Fh=3,Oh=4,kh=5,Bh=6,zh=7,Rc="attached",Vh="detached",uu=300,gr=301,_r=302,vo=303,xo=304,la=306,vn=1e3,xn=1001,ea=1002,en=1003,hu=1004,Wr=1005,Yt=1006,Xs=1007,In=1008,ni=1009,du=1010,fu=1011,Kr=1012,ec=1013,Fi=1014,Ln=1015,ns=1016,tc=1017,nc=1018,vr=1020,pu=35902,mu=1021,gu=1022,yn=1023,_u=1024,vu=1025,hr=1026,xr=1027,ic=1028,rc=1029,xu=1030,sc=1031,ac=1033,qs=33776,Ys=33777,Ks=33778,Zs=33779,yo=35840,bo=35841,Mo=35842,So=35843,Eo=36196,wo=37492,To=37496,Ao=37808,Ro=37809,Co=37810,Io=37811,Lo=37812,Po=37813,No=37814,Do=37815,Uo=37816,Fo=37817,Oo=37818,ko=37819,Bo=37820,zo=37821,Js=36492,Vo=36494,Ho=36495,yu=36283,Go=36284,Wo=36285,jo=36286,Hh=2200,Gh=2201,Wh=2202,Zr=2300,Jr=2301,Sa=2302,ar=2400,or=2401,ta=2402,oc=2500,jh=2501,Xh=0,bu=1,Xo=2,qh=3200,Yh=3201,ua=0,Kh=1,pi="",Ct="srgb",nn="srgb-linear",ha="linear",Rt="srgb",Wi=7680,Cc=519,Zh=512,Jh=513,$h=514,Mu=515,Qh=516,ed=517,td=518,nd=519,qo=35044,Ic="300 es",ei=2e3,na=2001;class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lc=1234567;const qr=Math.PI/180,yr=180/Math.PI;function Pn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[s&255]+jt[s>>8&255]+jt[s>>16&255]+jt[s>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function qt(s,e,t){return Math.max(e,Math.min(t,s))}function cc(s,e){return(s%e+e)%e}function id(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function rd(s,e,t){return s!==e?(t-s)/(e-s):0}function Yr(s,e,t){return(1-t)*s+t*e}function sd(s,e,t,n){return Yr(s,e,1-Math.exp(-t*n))}function ad(s,e=1){return e-Math.abs(cc(s,e*2)-e)}function od(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function cd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ld(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ud(s,e){return s+Math.random()*(e-s)}function hd(s){return s*(.5-Math.random())}function dd(s){s!==void 0&&(Lc=s);let e=Lc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fd(s){return s*qr}function pd(s){return s*yr}function md(s){return(s&s-1)===0&&s!==0}function gd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function _d(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function vd(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),p=a((e-n)/2),d=r((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":s.set(o*u,c*h,c*p,o*l);break;case"YZY":s.set(c*p,o*u,c*h,o*l);break;case"ZXZ":s.set(c*h,c*p,o*u,o*l);break;case"XZX":s.set(o*u,c*_,c*d,o*l);break;case"YXY":s.set(c*d,o*u,c*_,o*l);break;case"ZYZ":s.set(c*_,c*d,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function An(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Tt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Rn={DEG2RAD:qr,RAD2DEG:yr,generateUUID:Pn,clamp:qt,euclideanModulo:cc,mapLinear:id,inverseLerp:rd,lerp:Yr,damp:sd,pingpong:ad,smoothstep:od,smootherstep:cd,randInt:ld,randFloat:ud,randFloatSpread:hd,seededRandom:dd,degToRad:fd,radToDeg:pd,isPowerOfTwo:md,ceilPowerOfTwo:gd,floorPowerOfTwo:_d,setQuaternionFromProperEuler:vd,normalize:Tt,denormalize:An};class st{constructor(e=0,t=0){st.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,n,i,r,a,o,c,l){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],p=n[2],d=n[5],_=n[8],g=i[0],m=i[3],f=i[6],x=i[1],S=i[4],y=i[7],C=i[2],I=i[5],L=i[8];return r[0]=a*g+o*x+c*C,r[3]=a*m+o*S+c*I,r[6]=a*f+o*y+c*L,r[1]=l*g+u*x+h*C,r[4]=l*m+u*S+h*I,r[7]=l*f+u*y+h*L,r[2]=p*g+d*x+_*C,r[5]=p*m+d*S+_*I,r[8]=p*f+d*y+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,p=o*c-u*r,d=l*r-a*c,_=t*h+n*p+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*l-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=p*g,e[4]=(u*t-i*c)*g,e[5]=(i*r-o*t)*g,e[6]=d*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ea.makeScale(e,t)),this}rotate(e){return this.premultiply(Ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ea=new ut;function Su(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function $r(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xd(){const s=$r("canvas");return s.style.display="block",s}const Pc={};function jr(s){s in Pc||(Pc[s]=!0,console.warn(s))}function yd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function bd(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Md(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const dt={enabled:!0,workingColorSpace:nn,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Rt&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Rt&&(s.r=dr(s.r),s.g=dr(s.g),s.b=dr(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pi?ha:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ti(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function dr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Nc=[.64,.33,.3,.6,.15,.06],Dc=[.2126,.7152,.0722],Uc=[.3127,.329],Fc=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oc=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);dt.define({[nn]:{primaries:Nc,whitePoint:Uc,transfer:ha,toXYZ:Fc,fromXYZ:Oc,luminanceCoefficients:Dc,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:Nc,whitePoint:Uc,transfer:Rt,toXYZ:Fc,fromXYZ:Oc,luminanceCoefficients:Dc,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}});let ji;class Sd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ji===void 0&&(ji=$r("canvas")),ji.width=e.width,ji.height=e.height;const n=ji.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ti(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ed=0;class Eu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(wa(i[a].image)):r.push(wa(i[a]))}else r=wa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function wa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Sd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wd=0;class Ot extends zi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=xn,i=xn,r=Yt,a=In,o=yn,c=ni,l=Ot.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Pn(),this.name="",this.source=new Eu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vn:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vn:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=uu;Ot.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,i=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],p=c[1],d=c[5],_=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(u-p)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,y=(d+1)/2,C=(f+1)/2,I=(u+p)/4,L=(h+g)/4,D=(_+m)/4;return S>y&&S>C?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=I/n,r=L/n):y>C?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=I/i,r=D/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=L/r,i=D/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(p-u)*(p-u));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(h-g)/x,this.z=(p-u)/x,this.w=Math.acos((l+d+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Td extends zi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ot(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Eu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends Td{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wu extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ad extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const p=r[a+0],d=r[a+1],_=r[a+2],g=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=p,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||c!==p||l!==d||u!==_){let m=1-o;const f=c*p+l*d+u*_+h*g,x=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const C=Math.sqrt(S),I=Math.atan2(C,f*x);m=Math.sin(m*I)/C,o=Math.sin(o*I)/C}const y=o*x;if(c=c*m+p*y,l=l*m+d*y,u=u*m+_*y,h=h*m+g*y,m===1-o){const C=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=C,l*=C,u*=C,h*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],p=r[a+1],d=r[a+2],_=r[a+3];return e[t]=o*_+u*h+c*d-l*p,e[t+1]=c*_+u*p+l*h-o*d,e[t+2]=l*_+u*d+o*p-c*h,e[t+3]=u*_-o*h-c*p-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(r/2),p=c(n/2),d=c(i/2),_=c(r/2);switch(a){case"XYZ":this._x=p*u*h+l*d*_,this._y=l*d*h-p*u*_,this._z=l*u*_+p*d*h,this._w=l*u*h-p*d*_;break;case"YXZ":this._x=p*u*h+l*d*_,this._y=l*d*h-p*u*_,this._z=l*u*_-p*d*h,this._w=l*u*h+p*d*_;break;case"ZXY":this._x=p*u*h-l*d*_,this._y=l*d*h+p*u*_,this._z=l*u*_+p*d*h,this._w=l*u*h-p*d*_;break;case"ZYX":this._x=p*u*h-l*d*_,this._y=l*d*h+p*u*_,this._z=l*u*_-p*d*h,this._w=l*u*h+p*d*_;break;case"YZX":this._x=p*u*h+l*d*_,this._y=l*d*h+p*u*_,this._z=l*u*_-p*d*h,this._w=l*u*h-p*d*_;break;case"XZY":this._x=p*u*h-l*d*_,this._y=l*d*h-p*u*_,this._z=l*u*_+p*d*h,this._w=l*u*h+p*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],p=n+o+h;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,p=Math.sin(t*u)/l;return this._w=a*h+this._w*p,this._x=n*h+this._x*p,this._y=i*h+this._y*p,this._z=r*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=i+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ta.copy(this).projectOnVector(e),this.sub(Ta)}reflect(e){return this.sub(Ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ta=new q,kc=new tn;class Dn{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ds.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(e.matrixWorld),this.union(ds)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),fs.subVectors(this.max,Nr),Xi.subVectors(e.a,Nr),qi.subVectors(e.b,Nr),Yi.subVectors(e.c,Nr),ai.subVectors(qi,Xi),oi.subVectors(Yi,qi),Mi.subVectors(Xi,Yi);let t=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-Mi.z,Mi.y,ai.z,0,-ai.x,oi.z,0,-oi.x,Mi.z,0,-Mi.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-Mi.y,Mi.x,0];return!Aa(t,Xi,qi,Yi,fs)||(t=[1,0,0,0,1,0,0,0,1],!Aa(t,Xi,qi,Yi,fs))?!1:(ps.crossVectors(ai,oi),t=[ps.x,ps.y,ps.z],Aa(t,Xi,qi,Yi,fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new q,new q,new q,new q,new q,new q,new q,new q],En=new q,ds=new Dn,Xi=new q,qi=new q,Yi=new q,ai=new q,oi=new q,Mi=new q,Nr=new q,fs=new q,ps=new q,Si=new q;function Aa(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Si.fromArray(s,r);const o=i.x*Math.abs(Si.x)+i.y*Math.abs(Si.y)+i.z*Math.abs(Si.z),c=e.dot(Si),l=t.dot(Si),u=n.dot(Si);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Rd=new Dn,Dr=new q,Ra=new q;class zn{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);const t=Dr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Dr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(Ra)),this.expandByPoint(Dr.copy(e.center).sub(Ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new q,Ca=new q,ms=new q,ci=new q,Ia=new q,gs=new q,La=new q;class da{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ca.copy(e).add(t).multiplyScalar(.5),ms.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(Ca);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ms),o=ci.dot(this.direction),c=-ci.dot(ms),l=ci.lengthSq(),u=Math.abs(1-a*a);let h,p,d,_;if(u>0)if(h=a*c-o,p=a*o-c,_=r*u,h>=0)if(p>=-_)if(p<=_){const g=1/u;h*=g,p*=g,d=h*(h+a*p+2*o)+p*(a*h+p+2*c)+l}else p=r,h=Math.max(0,-(a*p+o)),d=-h*h+p*(p+2*c)+l;else p=-r,h=Math.max(0,-(a*p+o)),d=-h*h+p*(p+2*c)+l;else p<=-_?(h=Math.max(0,-(-a*r+o)),p=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+p*(p+2*c)+l):p<=_?(h=0,p=Math.min(Math.max(-r,-c),r),d=p*(p+2*c)+l):(h=Math.max(0,-(a*r+o)),p=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+p*(p+2*c)+l);else p=a>0?-r:r,h=Math.max(0,-(a*p+o)),d=-h*h+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ca).addScaledVector(ms,p),d}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,i=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,i=(e.min.x-p.x)*l),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-p.z)*h,c=(e.max.z-p.z)*h):(o=(e.max.z-p.z)*h,c=(e.min.z-p.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,i,r){Ia.subVectors(t,e),gs.subVectors(n,e),La.crossVectors(Ia,gs);let a=this.direction.dot(La),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ci.subVectors(this.origin,e);const c=o*this.direction.dot(gs.crossVectors(ci,gs));if(c<0)return null;const l=o*this.direction.dot(Ia.cross(ci));if(l<0||c+l>a)return null;const u=-o*ci.dot(La);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,n,i,r,a,o,c,l,u,h,p,d,_,g,m){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,u,h,p,d,_,g,m)}set(e,t,n,i,r,a,o,c,l,u,h,p,d,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=p,f[3]=d,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ki.setFromMatrixColumn(e,0).length(),r=1/Ki.setFromMatrixColumn(e,1).length(),a=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const p=a*u,d=a*h,_=o*u,g=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+_*l,t[5]=p-g*l,t[9]=-o*c,t[2]=g-p*l,t[6]=_+d*l,t[10]=a*c}else if(e.order==="YXZ"){const p=c*u,d=c*h,_=l*u,g=l*h;t[0]=p+g*o,t[4]=_*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=g+p*o,t[10]=a*c}else if(e.order==="ZXY"){const p=c*u,d=c*h,_=l*u,g=l*h;t[0]=p-g*o,t[4]=-a*h,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=g-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const p=a*u,d=a*h,_=o*u,g=o*h;t[0]=c*u,t[4]=_*l-d,t[8]=p*l+g,t[1]=c*h,t[5]=g*l+p,t[9]=d*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const p=a*c,d=a*l,_=o*c,g=o*l;t[0]=c*u,t[4]=g-p*h,t[8]=_*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+_,t[10]=p-g*h}else if(e.order==="XZY"){const p=a*c,d=a*l,_=o*c,g=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=p*h+g,t[5]=a*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=o*u,t[10]=g*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cd,e,Id)}lookAt(e,t,n){const i=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),li.crossVectors(n,un),li.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),li.crossVectors(n,un)),li.normalize(),_s.crossVectors(un,li),i[0]=li.x,i[4]=_s.x,i[8]=un.x,i[1]=li.y,i[5]=_s.y,i[9]=un.y,i[2]=li.z,i[6]=_s.z,i[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],p=n[9],d=n[13],_=n[2],g=n[6],m=n[10],f=n[14],x=n[3],S=n[7],y=n[11],C=n[15],I=i[0],L=i[4],D=i[8],E=i[12],w=i[1],B=i[5],R=i[9],z=i[13],b=i[2],W=i[6],H=i[10],Z=i[14],$=i[3],Q=i[7],fe=i[11],X=i[15];return r[0]=a*I+o*w+c*b+l*$,r[4]=a*L+o*B+c*W+l*Q,r[8]=a*D+o*R+c*H+l*fe,r[12]=a*E+o*z+c*Z+l*X,r[1]=u*I+h*w+p*b+d*$,r[5]=u*L+h*B+p*W+d*Q,r[9]=u*D+h*R+p*H+d*fe,r[13]=u*E+h*z+p*Z+d*X,r[2]=_*I+g*w+m*b+f*$,r[6]=_*L+g*B+m*W+f*Q,r[10]=_*D+g*R+m*H+f*fe,r[14]=_*E+g*z+m*Z+f*X,r[3]=x*I+S*w+y*b+C*$,r[7]=x*L+S*B+y*W+C*Q,r[11]=x*D+S*R+y*H+C*fe,r[15]=x*E+S*z+y*Z+C*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],p=e[10],d=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+r*c*h-i*l*h-r*o*p+n*l*p+i*o*d-n*c*d)+g*(+t*c*d-t*l*p+r*a*p-i*a*d+i*l*u-r*c*u)+m*(+t*l*h-t*o*d-r*a*h+n*a*d+r*o*u-n*l*u)+f*(-i*o*u-t*c*h+t*o*p+i*a*h-n*a*p+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],p=e[10],d=e[11],_=e[12],g=e[13],m=e[14],f=e[15],x=h*m*l-g*p*l+g*c*d-o*m*d-h*c*f+o*p*f,S=_*p*l-u*m*l-_*c*d+a*m*d+u*c*f-a*p*f,y=u*g*l-_*h*l+_*o*d-a*g*d-u*o*f+a*h*f,C=_*h*c-u*g*c-_*o*p+a*g*p+u*o*m-a*h*m,I=t*x+n*S+i*y+r*C;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/I;return e[0]=x*L,e[1]=(g*p*r-h*m*r-g*i*d+n*m*d+h*i*f-n*p*f)*L,e[2]=(o*m*r-g*c*r+g*i*l-n*m*l-o*i*f+n*c*f)*L,e[3]=(h*c*r-o*p*r-h*i*l+n*p*l+o*i*d-n*c*d)*L,e[4]=S*L,e[5]=(u*m*r-_*p*r+_*i*d-t*m*d-u*i*f+t*p*f)*L,e[6]=(_*c*r-a*m*r-_*i*l+t*m*l+a*i*f-t*c*f)*L,e[7]=(a*p*r-u*c*r+u*i*l-t*p*l-a*i*d+t*c*d)*L,e[8]=y*L,e[9]=(_*h*r-u*g*r-_*n*d+t*g*d+u*n*f-t*h*f)*L,e[10]=(a*g*r-_*o*r+_*n*l-t*g*l-a*n*f+t*o*f)*L,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*d-t*o*d)*L,e[12]=C*L,e[13]=(u*g*i-_*h*i+_*n*p-t*g*p-u*n*m+t*h*m)*L,e[14]=(_*o*i-a*g*i-_*n*c+t*g*c+a*n*m-t*o*m)*L,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*p+t*o*p)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,p=r*l,d=r*u,_=r*h,g=a*u,m=a*h,f=o*h,x=c*l,S=c*u,y=c*h,C=n.x,I=n.y,L=n.z;return i[0]=(1-(g+f))*C,i[1]=(d+y)*C,i[2]=(_-S)*C,i[3]=0,i[4]=(d-y)*I,i[5]=(1-(p+f))*I,i[6]=(m+x)*I,i[7]=0,i[8]=(_+S)*L,i[9]=(m-x)*L,i[10]=(1-(p+g))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ki.set(i[0],i[1],i[2]).length();const a=Ki.set(i[4],i[5],i[6]).length(),o=Ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],wn.copy(this);const l=1/r,u=1/a,h=1/o;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=h,wn.elements[9]*=h,wn.elements[10]*=h,t.setFromRotationMatrix(wn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=ei){const c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),p=(n+i)/(n-i);let d,_;if(o===ei)d=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===na)d=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=ei){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(a-r),p=(t+e)*l,d=(n+i)*u;let _,g;if(o===ei)_=(a+r)*h,g=-2*h;else if(o===na)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ki=new q,wn=new Je,Cd=new q(0,0,0),Id=new q(1,1,1),li=new q,_s=new q,un=new q,Bc=new Je,zc=new tn;class cn{constructor(e=0,t=0,n=0,i=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],p=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zc.setFromEuler(this),this.setFromQuaternion(zc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class Tu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ld=0;const Vc=new q,Zi=new tn,qn=new Je,vs=new q,Ur=new q,Pd=new q,Nd=new tn,Hc=new q(1,0,0),Gc=new q(0,1,0),Wc=new q(0,0,1),jc={type:"added"},Dd={type:"removed"},Ji={type:"childadded",child:null},Pa={type:"childremoved",child:null};class Pt extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new q,t=new cn,n=new tn,i=new q(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new ut}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(Hc,e)}rotateY(e){return this.rotateOnAxis(Gc,e)}rotateZ(e){return this.rotateOnAxis(Wc,e)}translateOnAxis(e,t){return Vc.copy(e).applyQuaternion(this.quaternion),this.position.add(Vc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hc,e)}translateY(e){return this.translateOnAxis(Gc,e)}translateZ(e){return this.translateOnAxis(Wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vs.copy(e):vs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Ur,vs,this.up):qn.lookAt(vs,Ur,this.up),this.quaternion.setFromRotationMatrix(qn),i&&(qn.extractRotation(i.matrixWorld),Zi.setFromRotationMatrix(qn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jc),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dd),Pa.child=e,this.dispatchEvent(Pa),Pa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jc),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,Pd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,Nd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),p=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Pt.DEFAULT_UP=new q(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new q,Yn=new q,Na=new q,Kn=new q,$i=new q,Qi=new q,Xc=new q,Da=new q,Ua=new q,Fa=new q,Oa=new bt,ka=new bt,Ba=new bt;class Cn{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Tn.subVectors(e,t),i.cross(Tn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Tn.subVectors(i,t),Yn.subVectors(n,t),Na.subVectors(e,t);const a=Tn.dot(Tn),o=Tn.dot(Yn),c=Tn.dot(Na),l=Yn.dot(Yn),u=Yn.dot(Na),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const p=1/h,d=(l*c-o*u)*p,_=(a*u-o*c)*p;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Kn.x),c.addScaledVector(a,Kn.y),c.addScaledVector(o,Kn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return Oa.setScalar(0),ka.setScalar(0),Ba.setScalar(0),Oa.fromBufferAttribute(e,t),ka.fromBufferAttribute(e,n),Ba.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Oa,r.x),a.addScaledVector(ka,r.y),a.addScaledVector(Ba,r.z),a}static isFrontFacing(e,t,n,i){return Tn.subVectors(n,t),Yn.subVectors(e,t),Tn.cross(Yn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Tn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Cn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;$i.subVectors(i,n),Qi.subVectors(r,n),Da.subVectors(e,n);const c=$i.dot(Da),l=Qi.dot(Da);if(c<=0&&l<=0)return t.copy(n);Ua.subVectors(e,i);const u=$i.dot(Ua),h=Qi.dot(Ua);if(u>=0&&h<=u)return t.copy(i);const p=c*h-u*l;if(p<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector($i,a);Fa.subVectors(e,r);const d=$i.dot(Fa),_=Qi.dot(Fa);if(_>=0&&d<=_)return t.copy(r);const g=d*l-c*_;if(g<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Qi,o);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return Xc.subVectors(r,i),o=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(Xc,o);const f=1/(m+g+p);return a=g*f,o=p*f,t.copy(n).addScaledVector($i,a).addScaledVector(Qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},xs={h:0,s:0,l:0};function za(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=cc(e,1),t=qt(t,0,1),n=qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=za(a,r,e+1/3),this.g=za(a,r,e),this.b=za(a,r,e-1/3)}return dt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=Au[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return dt.fromWorkingColorSpace(Xt.copy(this),e),Math.round(qt(Xt.r*255,0,255))*65536+Math.round(qt(Xt.g*255,0,255))*256+Math.round(qt(Xt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(Xt.copy(this),t);const n=Xt.r,i=Xt.g,r=Xt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Ct){dt.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,i=Xt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(xs);const n=Yr(ui.h,xs.h,t),i=Yr(ui.s,xs.s,t),r=Yr(ui.l,xs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Ye;Ye.NAMES=Au;let Ud=0;class on extends zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Pn(),this.name="",this.blending=ur,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=co,this.blendDst=lo,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==co&&(n.blendSrc=this.blendSrc),this.blendDst!==lo&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class On extends on{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new q,ys=new st;class Ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qo,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ys.fromBufferAttribute(this,t),ys.applyMatrix3(e),this.setXY(t,ys.x,ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qo&&(e.usage=this.usage),e}}class Ru extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cu extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class St extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Fd=0;const pn=new Je,Va=new Pt,er=new q,hn=new Dn,Fr=new Dn,Vt=new q;class Wt extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Su(e)?Cu:Ru)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ut().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return Va.lookAt(e),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new St(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(hn.min,Fr.min),hn.expandByPoint(Vt),Vt.addVectors(hn.max,Fr.max),hn.expandByPoint(Vt)):(hn.expandByPoint(Fr.min),hn.expandByPoint(Fr.max))}hn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Vt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Vt.fromBufferAttribute(o,l),c&&(er.fromBufferAttribute(e,l),Vt.add(er)),i=Math.max(i,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new q,c[D]=new q;const l=new q,u=new q,h=new q,p=new st,d=new st,_=new st,g=new q,m=new q;function f(D,E,w){l.fromBufferAttribute(n,D),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,w),p.fromBufferAttribute(r,D),d.fromBufferAttribute(r,E),_.fromBufferAttribute(r,w),u.sub(l),h.sub(l),d.sub(p),_.sub(p);const B=1/(d.x*_.y-_.x*d.y);isFinite(B)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(B),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(B),o[D].add(g),o[E].add(g),o[w].add(g),c[D].add(m),c[E].add(m),c[w].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let D=0,E=x.length;D<E;++D){const w=x[D],B=w.start,R=w.count;for(let z=B,b=B+R;z<b;z+=3)f(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const S=new q,y=new q,C=new q,I=new q;function L(D){C.fromBufferAttribute(i,D),I.copy(C);const E=o[D];S.copy(E),S.sub(C.multiplyScalar(C.dot(E))).normalize(),y.crossVectors(I,E);const B=y.dot(c[D])<0?-1:1;a.setXYZW(D,S.x,S.y,S.z,B)}for(let D=0,E=x.length;D<E;++D){const w=x[D],B=w.start,R=w.count;for(let z=B,b=B+R;z<b;z+=3)L(e.getX(z+0)),L(e.getX(z+1)),L(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);const i=new q,r=new q,a=new q,o=new q,c=new q,l=new q,u=new q,h=new q;if(e)for(let p=0,d=e.count;p<d;p+=3){const _=e.getX(p+0),g=e.getX(p+1),m=e.getX(p+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,d=t.count;p<d;p+=3)i.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,p=new l.constructor(c.length*u);let d=0,_=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?d=c[g]*o.data.stride+o.offset:d=c[g]*u;for(let f=0;f<u;f++)p[_++]=l[d++]}return new Ht(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const p=l[u],d=e(p,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,p=l.length;h<p;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let p=0,d=h.length;p<d;p++)u.push(h[p].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qc=new Je,Ei=new da,bs=new zn,Yc=new q,Ms=new q,Ss=new q,Es=new q,Ha=new q,ws=new q,Kc=new q,Ts=new q;class Lt extends Pt{constructor(e=new Wt,t=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ws.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(Ha.fromBufferAttribute(h,e),a?ws.addScaledVector(Ha,u):ws.addScaledVector(Ha.sub(t),u))}t.add(ws)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(r),Ei.copy(e.ray).recast(e.near),!(bs.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(bs,Yc)===null||Ei.origin.distanceToSquared(Yc)>(e.far-e.near)**2))&&(qc.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(qc),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,p=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=p.length;_<g;_++){const m=p[_],f=a[m.materialIndex],x=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,C=S;y<C;y+=3){const I=o.getX(y),L=o.getX(y+1),D=o.getX(y+2);i=As(this,f,e,n,l,u,h,I,L,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=_,f=g;m<f;m+=3){const x=o.getX(m),S=o.getX(m+1),y=o.getX(m+2);i=As(this,a,e,n,l,u,h,x,S,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,g=p.length;_<g;_++){const m=p[_],f=a[m.materialIndex],x=Math.max(m.start,d.start),S=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,C=S;y<C;y+=3){const I=y,L=y+1,D=y+2;i=As(this,f,e,n,l,u,h,I,L,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let m=_,f=g;m<f;m+=3){const x=m,S=m+1,y=m+2;i=As(this,a,e,n,l,u,h,x,S,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Od(s,e,t,n,i,r,a,o){let c;if(e.side===Qt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Bn,o),c===null)return null;Ts.copy(o),Ts.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Ts);return l<t.near||l>t.far?null:{distance:l,point:Ts.clone(),object:s}}function As(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Ms),s.getVertexPosition(c,Ss),s.getVertexPosition(l,Es);const u=Od(s,e,t,n,Ms,Ss,Es,Kc);if(u){const h=new q;Cn.getBarycoord(Kc,Ms,Ss,Es,h),i&&(u.uv=Cn.getInterpolatedAttribute(i,o,c,l,h,new st)),r&&(u.uv1=Cn.getInterpolatedAttribute(r,o,c,l,h,new st)),a&&(u.normal=Cn.getInterpolatedAttribute(a,o,c,l,h,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new q,materialIndex:0};Cn.getNormal(Ms,Ss,Es,p.normal),u.face=p,u.barycoord=h}return u}class xi extends Wt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let p=0,d=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(h,2));function _(g,m,f,x,S,y,C,I,L,D,E){const w=y/L,B=C/D,R=y/2,z=C/2,b=I/2,W=L+1,H=D+1;let Z=0,$=0;const Q=new q;for(let fe=0;fe<H;fe++){const X=fe*B-z;for(let K=0;K<W;K++){const _e=K*w-R;Q[g]=_e*x,Q[m]=X*S,Q[f]=b,l.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[f]=I>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(K/L),h.push(1-fe/D),Z+=1}}for(let fe=0;fe<D;fe++)for(let X=0;X<L;X++){const K=p+X+W*fe,_e=p+X+W*(fe+1),j=p+(X+1)+W*(fe+1),Y=p+(X+1)+W*fe;c.push(K,_e,Y),c.push(_e,j,Y),$+=6}o.addGroup(d,$,E),d+=$,p+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function br(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function $t(s){const e={};for(let t=0;t<s.length;t++){const n=br(s[t]);for(const i in n)e[i]=n[i]}return e}function kd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Iu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const Lu={clone:br,merge:$t};var Bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends on{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bd,this.fragmentShader=zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=kd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Pu extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new q,Zc=new st,Jc=new st;class Gt extends Pu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yr*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,Zc,Jc),t.subVectors(Jc,Zc)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class Vd extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gt(tr,nr,e,t);i.layers=this.layers,this.add(i);const r=new Gt(tr,nr,e,t);r.layers=this.layers,this.add(r);const a=new Gt(tr,nr,e,t);a.layers=this.layers,this.add(a);const o=new Gt(tr,nr,e,t);o.layers=this.layers,this.add(o);const c=new Gt(tr,nr,e,t);c.layers=this.layers,this.add(c);const l=new Gt(tr,nr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===na)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,p,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Nu extends Ot{constructor(e,t,n,i,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:gr,super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hd extends Oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Nu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xi(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:gi});r.uniforms.tEquirect.value=t;const a=new Lt(i,r),o=t.minFilter;return t.minFilter===In&&(t.minFilter=Yt),new Vd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Ga=new q,Gd=new q,Wd=new ut;class Ci{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ga.subVectors(n,t).cross(Gd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ga),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wd.getNormalMatrix(e),i=this.coplanarPoint(Ga).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new zn,Rs=new q;class lc{constructor(e=new Ci,t=new Ci,n=new Ci,i=new Ci,r=new Ci,a=new Ci){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],u=i[5],h=i[6],p=i[7],d=i[8],_=i[9],g=i[10],m=i[11],f=i[12],x=i[13],S=i[14],y=i[15];if(n[0].setComponents(c-r,p-l,m-d,y-f).normalize(),n[1].setComponents(c+r,p+l,m+d,y+f).normalize(),n[2].setComponents(c+a,p+u,m+_,y+x).normalize(),n[3].setComponents(c-a,p-u,m-_,y-x).normalize(),n[4].setComponents(c-o,p-h,m-g,y-S).normalize(),t===ei)n[5].setComponents(c+o,p+h,m+g,y+S).normalize();else if(t===na)n[5].setComponents(o,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Rs.x=i.normal.x>0?e.max.x:e.min.x,Rs.y=i.normal.y>0?e.max.y:e.min.y,Rs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Du(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function jd(s){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,p=s.createBuffer();s.bindBuffer(c,p),s.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(s.bindBuffer(l,o),h.length===0)s.bufferSubData(l,0,u);else{h.sort((d,_)=>d.start-_.start);let p=0;for(let d=1;d<h.length;d++){const _=h[p],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++p,h[p]=g)}h.length=p+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];s.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class Er extends Wt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,p=t/c,d=[],_=[],g=[],m=[];for(let f=0;f<u;f++){const x=f*p-a;for(let S=0;S<l;S++){const y=S*h-r;_.push(y,-x,0),g.push(0,0,1),m.push(S/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<o;x++){const S=x+l*f,y=x+l*(f+1),C=x+1+l*(f+1),I=x+1+l*f;d.push(S,y,I),d.push(y,C,I)}this.setIndex(d),this.setAttribute("position",new St(_,3)),this.setAttribute("normal",new St(g,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qd=`#ifdef USE_ALPHAHASH
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
#endif`,Yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$d=`#ifdef USE_AOMAP
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
#endif`,Qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ef=`#ifdef USE_BATCHING
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
#endif`,tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,af=`#ifdef USE_IRIDESCENCE
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
#endif`,of=`#ifdef USE_BUMPMAP
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
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gf=`#define PI 3.141592653589793
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
} // validated`,_f=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vf=`vec3 transformedNormal = objectNormal;
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
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ef=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wf=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
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
#endif`,If=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Df=`#ifdef USE_GRADIENTMAP
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
}`,Uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kf=`uniform bool receiveShadow;
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
#endif`,Bf=`#ifdef USE_ENVMAP
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
#endif`,zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wf=`PhysicalMaterial material;
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
#endif`,jf=`struct PhysicalMaterial {
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
}`,Xf=`
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
#endif`,qf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$f=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,np=`#if defined( USE_POINTS_UV )
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
#endif`,ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,op=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
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
#endif`,lp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mp=`#ifdef USE_NORMALMAP
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
#endif`,gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ep=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ap=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lp=`float getShadowMask() {
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
}`,Pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Np=`#ifdef USE_SKINNING
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
#endif`,Dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,Fp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zp=`#ifdef USE_TRANSMISSION
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
#endif`,Vp=`#ifdef USE_TRANSMISSION
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qp=`uniform sampler2D t2D;
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`#include <common>
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
}`,Qp=`#if DEPTH_PACKING == 3200
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
}`,em=`#define DISTANCE
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
}`,tm=`#define DISTANCE
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
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
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
}`,sm=`uniform vec3 diffuse;
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
}`,am=`#include <common>
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
}`,om=`uniform vec3 diffuse;
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
}`,cm=`#define LAMBERT
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
}`,lm=`#define LAMBERT
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
}`,um=`#define MATCAP
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
}`,hm=`#define MATCAP
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
}`,dm=`#define NORMAL
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
}`,fm=`#define NORMAL
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
}`,pm=`#define PHONG
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
}`,mm=`#define PHONG
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
}`,gm=`#define STANDARD
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
}`,_m=`#define STANDARD
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
}`,vm=`#define TOON
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
}`,xm=`#define TOON
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
}`,ym=`uniform float size;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Mm=`#include <common>
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
}`,Sm=`uniform vec3 color;
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
}`,Em=`uniform float rotation;
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
}`,wm=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Xd,alphahash_pars_fragment:qd,alphamap_fragment:Yd,alphamap_pars_fragment:Kd,alphatest_fragment:Zd,alphatest_pars_fragment:Jd,aomap_fragment:$d,aomap_pars_fragment:Qd,batching_pars_vertex:ef,batching_vertex:tf,begin_vertex:nf,beginnormal_vertex:rf,bsdfs:sf,iridescence_fragment:af,bumpmap_pars_fragment:of,clipping_planes_fragment:cf,clipping_planes_pars_fragment:lf,clipping_planes_pars_vertex:uf,clipping_planes_vertex:hf,color_fragment:df,color_pars_fragment:ff,color_pars_vertex:pf,color_vertex:mf,common:gf,cube_uv_reflection_fragment:_f,defaultnormal_vertex:vf,displacementmap_pars_vertex:xf,displacementmap_vertex:yf,emissivemap_fragment:bf,emissivemap_pars_fragment:Mf,colorspace_fragment:Sf,colorspace_pars_fragment:Ef,envmap_fragment:wf,envmap_common_pars_fragment:Tf,envmap_pars_fragment:Af,envmap_pars_vertex:Rf,envmap_physical_pars_fragment:Bf,envmap_vertex:Cf,fog_vertex:If,fog_pars_vertex:Lf,fog_fragment:Pf,fog_pars_fragment:Nf,gradientmap_pars_fragment:Df,lightmap_pars_fragment:Uf,lights_lambert_fragment:Ff,lights_lambert_pars_fragment:Of,lights_pars_begin:kf,lights_toon_fragment:zf,lights_toon_pars_fragment:Vf,lights_phong_fragment:Hf,lights_phong_pars_fragment:Gf,lights_physical_fragment:Wf,lights_physical_pars_fragment:jf,lights_fragment_begin:Xf,lights_fragment_maps:qf,lights_fragment_end:Yf,logdepthbuf_fragment:Kf,logdepthbuf_pars_fragment:Zf,logdepthbuf_pars_vertex:Jf,logdepthbuf_vertex:$f,map_fragment:Qf,map_pars_fragment:ep,map_particle_fragment:tp,map_particle_pars_fragment:np,metalnessmap_fragment:ip,metalnessmap_pars_fragment:rp,morphinstance_vertex:sp,morphcolor_vertex:ap,morphnormal_vertex:op,morphtarget_pars_vertex:cp,morphtarget_vertex:lp,normal_fragment_begin:up,normal_fragment_maps:hp,normal_pars_fragment:dp,normal_pars_vertex:fp,normal_vertex:pp,normalmap_pars_fragment:mp,clearcoat_normal_fragment_begin:gp,clearcoat_normal_fragment_maps:_p,clearcoat_pars_fragment:vp,iridescence_pars_fragment:xp,opaque_fragment:yp,packing:bp,premultiplied_alpha_fragment:Mp,project_vertex:Sp,dithering_fragment:Ep,dithering_pars_fragment:wp,roughnessmap_fragment:Tp,roughnessmap_pars_fragment:Ap,shadowmap_pars_fragment:Rp,shadowmap_pars_vertex:Cp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Lp,skinbase_vertex:Pp,skinning_pars_vertex:Np,skinning_vertex:Dp,skinnormal_vertex:Up,specularmap_fragment:Fp,specularmap_pars_fragment:Op,tonemapping_fragment:kp,tonemapping_pars_fragment:Bp,transmission_fragment:zp,transmission_pars_fragment:Vp,uv_pars_fragment:Hp,uv_pars_vertex:Gp,uv_vertex:Wp,worldpos_vertex:jp,background_vert:Xp,background_frag:qp,backgroundCube_vert:Yp,backgroundCube_frag:Kp,cube_vert:Zp,cube_frag:Jp,depth_vert:$p,depth_frag:Qp,distanceRGBA_vert:em,distanceRGBA_frag:tm,equirect_vert:nm,equirect_frag:im,linedashed_vert:rm,linedashed_frag:sm,meshbasic_vert:am,meshbasic_frag:om,meshlambert_vert:cm,meshlambert_frag:lm,meshmatcap_vert:um,meshmatcap_frag:hm,meshnormal_vert:dm,meshnormal_frag:fm,meshphong_vert:pm,meshphong_frag:mm,meshphysical_vert:gm,meshphysical_frag:_m,meshtoon_vert:vm,meshtoon_frag:xm,points_vert:ym,points_frag:bm,shadow_vert:Mm,shadow_frag:Sm,sprite_vert:Em,sprite_frag:wm},Ie={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Fn={basic:{uniforms:$t([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:$t([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:$t([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:$t([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:$t([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:$t([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:$t([Ie.points,Ie.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:$t([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:$t([Ie.common,Ie.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:$t([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:$t([Ie.sprite,Ie.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:$t([Ie.common,Ie.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:$t([Ie.lights,Ie.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Fn.physical={uniforms:$t([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Cs={r:0,b:0,g:0},Ti=new cn,Tm=new Je;function Am(s,e,t,n,i,r,a){const o=new Ye(0);let c=r===!0?0:1,l,u,h=null,p=0,d=null;function _(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?t:e).get(S)),S}function g(x){let S=!1;const y=_(x);y===null?f(o,c):y&&y.isColor&&(f(y,1),S=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,S){const y=_(S);y&&(y.isCubeTexture||y.mapping===la)?(u===void 0&&(u=new Lt(new xi(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:br(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ti.copy(S.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Tm.makeRotationFromEuler(Ti)),u.material.toneMapped=dt.getTransfer(y.colorSpace)!==Rt,(h!==y||p!==y.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=y,p=y.version,d=s.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Lt(new Er(2,2),new ii({name:"BackgroundMaterial",uniforms:br(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=dt.getTransfer(y.colorSpace)!==Rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||p!==y.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,p=y.version,d=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function f(x,S){x.getRGB(Cs,Iu(s)),n.buffers.color.setClear(Cs.r,Cs.g,Cs.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(x,S=1){o.set(x),c=S,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,f(o,c)},render:g,addToRenderList:m}}function Rm(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=p(null);let r=i,a=!1;function o(w,B,R,z,b){let W=!1;const H=h(z,R,B);r!==H&&(r=H,l(r.object)),W=d(w,z,R,b),W&&_(w,z,R,b),b!==null&&e.update(b,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,y(w,B,R,z),b!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(b).buffer))}function c(){return s.createVertexArray()}function l(w){return s.bindVertexArray(w)}function u(w){return s.deleteVertexArray(w)}function h(w,B,R){const z=R.wireframe===!0;let b=n[w.id];b===void 0&&(b={},n[w.id]=b);let W=b[B.id];W===void 0&&(W={},b[B.id]=W);let H=W[z];return H===void 0&&(H=p(c()),W[z]=H),H}function p(w){const B=[],R=[],z=[];for(let b=0;b<t;b++)B[b]=0,R[b]=0,z[b]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:R,attributeDivisors:z,object:w,attributes:{},index:null}}function d(w,B,R,z){const b=r.attributes,W=B.attributes;let H=0;const Z=R.getAttributes();for(const $ in Z)if(Z[$].location>=0){const fe=b[$];let X=W[$];if(X===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(X=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(X=w.instanceColor)),fe===void 0||fe.attribute!==X||X&&fe.data!==X.data)return!0;H++}return r.attributesNum!==H||r.index!==z}function _(w,B,R,z){const b={},W=B.attributes;let H=0;const Z=R.getAttributes();for(const $ in Z)if(Z[$].location>=0){let fe=W[$];fe===void 0&&($==="instanceMatrix"&&w.instanceMatrix&&(fe=w.instanceMatrix),$==="instanceColor"&&w.instanceColor&&(fe=w.instanceColor));const X={};X.attribute=fe,fe&&fe.data&&(X.data=fe.data),b[$]=X,H++}r.attributes=b,r.attributesNum=H,r.index=z}function g(){const w=r.newAttributes;for(let B=0,R=w.length;B<R;B++)w[B]=0}function m(w){f(w,0)}function f(w,B){const R=r.newAttributes,z=r.enabledAttributes,b=r.attributeDivisors;R[w]=1,z[w]===0&&(s.enableVertexAttribArray(w),z[w]=1),b[w]!==B&&(s.vertexAttribDivisor(w,B),b[w]=B)}function x(){const w=r.newAttributes,B=r.enabledAttributes;for(let R=0,z=B.length;R<z;R++)B[R]!==w[R]&&(s.disableVertexAttribArray(R),B[R]=0)}function S(w,B,R,z,b,W,H){H===!0?s.vertexAttribIPointer(w,B,R,b,W):s.vertexAttribPointer(w,B,R,z,b,W)}function y(w,B,R,z){g();const b=z.attributes,W=R.getAttributes(),H=B.defaultAttributeValues;for(const Z in W){const $=W[Z];if($.location>=0){let Q=b[Z];if(Q===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor)),Q!==void 0){const fe=Q.normalized,X=Q.itemSize,K=e.get(Q);if(K===void 0)continue;const _e=K.buffer,j=K.type,Y=K.bytesPerElement,ce=j===s.INT||j===s.UNSIGNED_INT||Q.gpuType===ec;if(Q.isInterleavedBufferAttribute){const de=Q.data,xe=de.stride,Ee=Q.offset;if(de.isInstancedInterleavedBuffer){for(let Be=0;Be<$.locationSize;Be++)f($.location+Be,de.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Be=0;Be<$.locationSize;Be++)m($.location+Be);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let Be=0;Be<$.locationSize;Be++)S($.location+Be,X/$.locationSize,j,fe,xe*Y,(Ee+X/$.locationSize*Be)*Y,ce)}else{if(Q.isInstancedBufferAttribute){for(let de=0;de<$.locationSize;de++)f($.location+de,Q.meshPerAttribute);w.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let de=0;de<$.locationSize;de++)m($.location+de);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let de=0;de<$.locationSize;de++)S($.location+de,X/$.locationSize,j,fe,X*Y,X/$.locationSize*de*Y,ce)}}else if(H!==void 0){const fe=H[Z];if(fe!==void 0)switch(fe.length){case 2:s.vertexAttrib2fv($.location,fe);break;case 3:s.vertexAttrib3fv($.location,fe);break;case 4:s.vertexAttrib4fv($.location,fe);break;default:s.vertexAttrib1fv($.location,fe)}}}}x()}function C(){D();for(const w in n){const B=n[w];for(const R in B){const z=B[R];for(const b in z)u(z[b].object),delete z[b];delete B[R]}delete n[w]}}function I(w){if(n[w.id]===void 0)return;const B=n[w.id];for(const R in B){const z=B[R];for(const b in z)u(z[b].object),delete z[b];delete B[R]}delete n[w.id]}function L(w){for(const B in n){const R=n[B];if(R[w.id]===void 0)continue;const z=R[w.id];for(const b in z)u(z[b].object),delete z[b];delete R[w.id]}}function D(){E(),a=!0,r!==i&&(r=i,l(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:L,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function Cm(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,n,1)}function c(l,u,h,p){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)a(l[_],u[_],p[_]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,p,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*p[g];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Im(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(L){return!(L!==yn&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const D=L===ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==ni&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Ln&&!D)}function c(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:C,maxSamples:I}}function Lm(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Ci,o=new ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const d=h.length!==0||p||n!==0||i;return i=p,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,f=s.get(h);if(!i||_===null||_.length===0||r&&!m)r?u(null):l();else{const x=r?0:n,S=x*4;let y=f.clippingState||null;c.value=y,y=u(_,p,S,d);for(let C=0;C!==S;++C)y[C]=t[C];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,p,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const f=d+g*4,x=p.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,y=d;S!==g;++S,y+=4)a.copy(h[S]).applyMatrix4(x,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Pm(s){let e=new WeakMap;function t(a,o){return o===vo?a.mapping=gr:o===xo&&(a.mapping=_r),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===vo||o===xo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Hd(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class fa extends Pu{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const cr=4,$c=[.125,.215,.35,.446,.526,.582],Pi=20,Wa=new fa,Qc=new Ye;let ja=null,Xa=0,qa=0,Ya=!1;const Ii=(1+Math.sqrt(5))/2,ir=1/Ii,el=[new q(-Ii,ir,0),new q(Ii,ir,0),new q(-ir,0,Ii),new q(ir,0,Ii),new q(0,Ii,-ir),new q(0,Ii,ir),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class tl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ja=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ja,Xa,qa),this._renderer.xr.enabled=Ya,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ja=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:ns,format:yn,colorSpace:nn,depthBuffer:!1},i=nl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nm(r)),this._blurMaterial=Dm(r,e,t)}return i}_compileMaterial(e){const t=new Lt(this._lodPlanes[0],e);this._renderer.compile(t,Wa)}_sceneToCubeUV(e,t,n,i){const o=new Gt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(Qc),u.toneMapping=_i,u.autoClear=!1;const d=new On({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),_=new Lt(new xi,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(Qc),g=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):x===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const S=this._cubeSize;Is(i,x*S,f>2?S:0,S,S),u.setRenderTarget(i),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===gr||e.mapping===_r;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=il());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Is(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=el[(i-r-1)%el.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Lt(this._lodPlanes[i],l),p=l.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Pi-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):Pi;m>Pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pi}`);const f=[];let x=0;for(let L=0;L<Pi;++L){const D=L/g,E=Math.exp(-D*D/2);f.push(E),L===0?x+=E:L<m&&(x+=2*E)}for(let L=0;L<f.length;L++)f[L]=f[L]/x;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:S}=this;p.dTheta.value=_,p.mipInt.value=S-n;const y=this._sizeLods[i],C=3*y*(i>S-cr?i-S+cr:0),I=4*(this._cubeSize-y);Is(t,C,I,3*y,2*y),c.setRenderTarget(t),c.render(h,Wa)}}function Nm(s){const e=[],t=[],n=[];let i=s;const r=s-cr+1+$c.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-cr?c=$c[a-s+cr-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,p=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,f=1,x=new Float32Array(g*_*d),S=new Float32Array(m*_*d),y=new Float32Array(f*_*d);for(let I=0;I<d;I++){const L=I%3*2/3-1,D=I>2?0:-1,E=[L,D,0,L+2/3,D,0,L+2/3,D+1,0,L,D,0,L+2/3,D+1,0,L,D+1,0];x.set(E,g*_*I),S.set(p,m*_*I);const w=[I,I,I,I,I,I];y.set(w,f*_*I)}const C=new Wt;C.setAttribute("position",new Ht(x,g)),C.setAttribute("uv",new Ht(S,m)),C.setAttribute("faceIndex",new Ht(y,f)),e.push(C),i>cr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nl(s,e,t){const n=new Oi(s,e,t);return n.texture.mapping=la,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Is(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Dm(s,e,t){const n=new Float32Array(Pi),i=new q(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:uc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function il(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function rl(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function uc(){return`

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
	`}function Um(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===vo||c===xo,u=c===gr||c===_r;if(l||u){let h=e.get(o);const p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new tl(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return l&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new tl(s)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Fm(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&jr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Om(s,e,t,n){const i={},r=new WeakMap;function a(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const g=p.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}p.removeEventListener("dispose",a),delete i[p.id];const d=r.get(p);d&&(e.remove(d),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(h,p){return i[p.id]===!0||(p.addEventListener("dispose",a),i[p.id]=!0,t.memory.geometries++),p}function c(h){const p=h.attributes;for(const _ in p)e.update(p[_],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],s.ARRAY_BUFFER)}}function l(h){const p=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const x=d.array;g=d.version;for(let S=0,y=x.length;S<y;S+=3){const C=x[S+0],I=x[S+1],L=x[S+2];p.push(C,I,I,L,L,C)}}else if(_!==void 0){const x=_.array;g=_.version;for(let S=0,y=x.length/3-1;S<y;S+=3){const C=S+0,I=S+1,L=S+2;p.push(C,I,I,L,L,C)}}else return;const m=new(Su(p)?Cu:Ru)(p,1);m.version=g;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const p=r.get(h);if(p){const d=h.index;d!==null&&p.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function km(s,e,t){let n;function i(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,d){s.drawElements(n,d,r,p*a),t.update(d,n,1)}function l(p,d,_){_!==0&&(s.drawElementsInstanced(n,d,r,p*a,_),t.update(d,n,_))}function u(p,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,_);let m=0;for(let f=0;f<_;f++)m+=d[f];t.update(m,n,1)}function h(p,d,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)l(p[f]/a,d[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,p,0,g,0,_);let f=0;for(let x=0;x<_;x++)f+=d[x]*g[x];t.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Bm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function zm(s,e,t){const n=new WeakMap,i=new bt;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let p=n.get(o);if(p===void 0||p.count!==h){let E=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",E)};p!==void 0&&p.texture.dispose();const d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;d===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let y=o.attributes.position.count*S,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const I=new Float32Array(y*C*4*h),L=new wu(I,y,C,h);L.type=Ln,L.needsUpdate=!0;const D=S*4;for(let w=0;w<h;w++){const B=m[w],R=f[w],z=x[w],b=y*C*4*w;for(let W=0;W<B.count;W++){const H=W*D;d===!0&&(i.fromBufferAttribute(B,W),I[b+H+0]=i.x,I[b+H+1]=i.y,I[b+H+2]=i.z,I[b+H+3]=0),_===!0&&(i.fromBufferAttribute(R,W),I[b+H+4]=i.x,I[b+H+5]=i.y,I[b+H+6]=i.z,I[b+H+7]=0),g===!0&&(i.fromBufferAttribute(z,W),I[b+H+8]=i.x,I[b+H+9]=i.y,I[b+H+10]=i.z,I[b+H+11]=z.itemSize===4?i.w:1)}}p={count:h,texture:L,size:new st(y,C)},n.set(o,p),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let g=0;g<l.length;g++)d+=l[g];const _=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}return{update:r}}function Vm(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;i.get(p)!==l&&(p.update(),i.set(p,l))}return h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class Uu extends Ot{constructor(e,t,n,i,r,a,o,c,l,u=hr){if(u!==hr&&u!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===hr&&(n=Fi),n===void 0&&u===xr&&(n=vr),super(null,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:en,this.minFilter=c!==void 0?c:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Fu=new Ot,sl=new Uu(1,1),Ou=new wu,ku=new Ad,Bu=new Nu,al=[],ol=[],cl=new Float32Array(16),ll=new Float32Array(9),ul=new Float32Array(4);function wr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=al[i];if(r===void 0&&(r=new Float32Array(i),al[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function kt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Bt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function pa(s,e){let t=ol[e];t===void 0&&(t=new Int32Array(e),ol[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Hm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Gm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2fv(this.addr,e),Bt(t,e)}}function Wm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;s.uniform3fv(this.addr,e),Bt(t,e)}}function jm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4fv(this.addr,e),Bt(t,e)}}function Xm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;ul.set(n),s.uniformMatrix2fv(this.addr,!1,ul),Bt(t,n)}}function qm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;ll.set(n),s.uniformMatrix3fv(this.addr,!1,ll),Bt(t,n)}}function Ym(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;cl.set(n),s.uniformMatrix4fv(this.addr,!1,cl),Bt(t,n)}}function Km(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Zm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2iv(this.addr,e),Bt(t,e)}}function Jm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;s.uniform3iv(this.addr,e),Bt(t,e)}}function $m(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4iv(this.addr,e),Bt(t,e)}}function Qm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function eg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;s.uniform2uiv(this.addr,e),Bt(t,e)}}function tg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;s.uniform3uiv(this.addr,e),Bt(t,e)}}function ng(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;s.uniform4uiv(this.addr,e),Bt(t,e)}}function ig(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(sl.compareFunction=Mu,r=sl):r=Fu,t.setTexture2D(e||r,i)}function rg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ku,i)}function sg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Bu,i)}function ag(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ou,i)}function og(s){switch(s){case 5126:return Hm;case 35664:return Gm;case 35665:return Wm;case 35666:return jm;case 35674:return Xm;case 35675:return qm;case 35676:return Ym;case 5124:case 35670:return Km;case 35667:case 35671:return Zm;case 35668:case 35672:return Jm;case 35669:case 35673:return $m;case 5125:return Qm;case 36294:return eg;case 36295:return tg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return ag}}function cg(s,e){s.uniform1fv(this.addr,e)}function lg(s,e){const t=wr(e,this.size,2);s.uniform2fv(this.addr,t)}function ug(s,e){const t=wr(e,this.size,3);s.uniform3fv(this.addr,t)}function hg(s,e){const t=wr(e,this.size,4);s.uniform4fv(this.addr,t)}function dg(s,e){const t=wr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function fg(s,e){const t=wr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function pg(s,e){const t=wr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function mg(s,e){s.uniform1iv(this.addr,e)}function gg(s,e){s.uniform2iv(this.addr,e)}function _g(s,e){s.uniform3iv(this.addr,e)}function vg(s,e){s.uniform4iv(this.addr,e)}function xg(s,e){s.uniform1uiv(this.addr,e)}function yg(s,e){s.uniform2uiv(this.addr,e)}function bg(s,e){s.uniform3uiv(this.addr,e)}function Mg(s,e){s.uniform4uiv(this.addr,e)}function Sg(s,e,t){const n=this.cache,i=e.length,r=pa(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Fu,r[a])}function Eg(s,e,t){const n=this.cache,i=e.length,r=pa(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||ku,r[a])}function wg(s,e,t){const n=this.cache,i=e.length,r=pa(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Bu,r[a])}function Tg(s,e,t){const n=this.cache,i=e.length,r=pa(t,i);kt(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ou,r[a])}function Ag(s){switch(s){case 5126:return cg;case 35664:return lg;case 35665:return ug;case 35666:return hg;case 35674:return dg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return _g;case 35669:case 35673:return vg;case 5125:return xg;case 36294:return yg;case 36295:return bg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Tg}}class Rg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=og(t.type)}}class Cg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ag(t.type)}}class Ig{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Ka=/(\w+)(\])?(\[|\.)?/g;function hl(s,e){s.seq.push(e),s.map[e.id]=e}function Lg(s,e,t){const n=s.name,i=n.length;for(Ka.lastIndex=0;;){const r=Ka.exec(n),a=Ka.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){hl(t,l===void 0?new Rg(o,s,e):new Cg(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Ig(o),hl(t,h)),t=h}}}class $s{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Lg(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function dl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Pg=37297;let Ng=0;function Dg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const fl=new ut;function Ug(s){dt._getMatrix(fl,dt.workingColorSpace,s);const e=`mat3( ${fl.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(s)){case ha:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function pl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Dg(s.getShaderSource(e),a)}else return i}function Fg(s,e){const t=Ug(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Og(s,e){let t;switch(e){case Dh:t="Linear";break;case Uh:t="Reinhard";break;case Fh:t="Cineon";break;case Oh:t="ACESFilmic";break;case Bh:t="AgX";break;case zh:t="Neutral";break;case kh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ls=new q;function kg(){dt.getLuminanceCoefficients(Ls);const s=Ls.x.toFixed(4),e=Ls.y.toFixed(4),t=Ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function zg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vg(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Xr(s){return s!==""}function ml(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(s){return s.replace(Hg,Wg)}const Gg=new Map;function Wg(s,e){let t=ht[e];if(t===void 0){const n=Gg.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yo(t)}const jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(s){return s.replace(jg,Xg)}function Xg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function vl(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function qg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===lu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===fh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function Yg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case gr:case _r:e="ENVMAP_TYPE_CUBE";break;case la:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kg(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case _r:e="ENVMAP_MODE_REFRACTION";break}return e}function Zg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ca:e="ENVMAP_BLENDING_MULTIPLY";break;case Ph:e="ENVMAP_BLENDING_MIX";break;case Nh:e="ENVMAP_BLENDING_ADD";break}return e}function Jg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function $g(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=qg(t),l=Yg(t),u=Kg(t),h=Zg(t),p=Jg(t),d=Bg(t),_=zg(r),g=i.createProgram();let m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Xr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Xr).join(`
`),f.length>0&&(f+=`
`)):(m=[vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),f=[vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?ht.tonemapping_pars_fragment:"",t.toneMapping!==_i?Og("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Fg("linearToOutputTexel",t.outputColorSpace),kg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xr).join(`
`)),a=Yo(a),a=ml(a,t),a=gl(a,t),o=Yo(o),o=ml(o,t),o=gl(o,t),a=_l(a),o=_l(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=x+m+a,y=x+f+o,C=dl(i,i.VERTEX_SHADER,S),I=dl(i,i.FRAGMENT_SHADER,y);i.attachShader(g,C),i.attachShader(g,I),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function L(B){if(s.debug.checkShaderErrors){const R=i.getProgramInfoLog(g).trim(),z=i.getShaderInfoLog(C).trim(),b=i.getShaderInfoLog(I).trim();let W=!0,H=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,C,I);else{const Z=pl(i,C,"vertex"),$=pl(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+R+`
`+Z+`
`+$)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(z===""||b==="")&&(H=!1);H&&(B.diagnostics={runnable:W,programLog:R,vertexShader:{log:z,prefix:m},fragmentShader:{log:b,prefix:f}})}i.deleteShader(C),i.deleteShader(I),D=new $s(i,g),E=Vg(i,g)}let D;this.getUniforms=function(){return D===void 0&&L(this),D};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(g,Pg)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ng++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=I,this}let Qg=0;class e_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new t_(e),t.set(e,n)),n}}class t_{constructor(e){this.id=Qg++,this.code=e,this.usedTimes=0}}function n_(s,e,t,n,i,r,a){const o=new Tu,c=new e_,l=new Set,u=[],h=i.logarithmicDepthBuffer,p=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,w,B,R,z){const b=R.fog,W=z.geometry,H=E.isMeshStandardMaterial?R.environment:null,Z=(E.isMeshStandardMaterial?t:e).get(E.envMap||H),$=Z&&Z.mapping===la?Z.image.height:null,Q=_[E.type];E.precision!==null&&(d=i.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const fe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,X=fe!==void 0?fe.length:0;let K=0;W.morphAttributes.position!==void 0&&(K=1),W.morphAttributes.normal!==void 0&&(K=2),W.morphAttributes.color!==void 0&&(K=3);let _e,j,Y,ce;if(Q){const lt=Fn[Q];_e=lt.vertexShader,j=lt.fragmentShader}else _e=E.vertexShader,j=E.fragmentShader,c.update(E),Y=c.getVertexShaderID(E),ce=c.getFragmentShaderID(E);const de=s.getRenderTarget(),xe=s.state.buffers.depth.getReversed(),Ee=z.isInstancedMesh===!0,Be=z.isBatchedMesh===!0,Qe=!!E.map,tt=!!E.matcap,pt=!!Z,v=!!E.aoMap,me=!!E.lightMap,se=!!E.bumpMap,V=!!E.normalMap,O=!!E.displacementMap,J=!!E.emissiveMap,oe=!!E.metalnessMap,P=!!E.roughnessMap,M=E.anisotropy>0,G=E.clearcoat>0,re=E.dispersion>0,ne=E.iridescence>0,ae=E.sheen>0,we=E.transmission>0,ye=M&&!!E.anisotropyMap,Ae=G&&!!E.clearcoatMap,ct=G&&!!E.clearcoatNormalMap,be=G&&!!E.clearcoatRoughnessMap,Ue=ne&&!!E.iridescenceMap,Pe=ne&&!!E.iridescenceThicknessMap,Ke=ae&&!!E.sheenColorMap,Fe=ae&&!!E.sheenRoughnessMap,nt=!!E.specularMap,it=!!E.specularColorMap,yt=!!E.specularIntensityMap,te=we&&!!E.transmissionMap,Re=we&&!!E.thicknessMap,pe=!!E.gradientMap,ve=!!E.alphaMap,Ce=E.alphaTest>0,Ne=!!E.alphaHash,at=!!E.extensions;let It=_i;E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(It=s.toneMapping);const zt={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:_e,fragmentShader:j,defines:E.defines,customVertexShaderID:Y,customFragmentShaderID:ce,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Be,batchingColor:Be&&z._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&z.instanceColor!==null,instancingMorph:Ee&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:nn,alphaToCoverage:!!E.alphaToCoverage,map:Qe,matcap:tt,envMap:pt,envMapMode:pt&&Z.mapping,envMapCubeUVHeight:$,aoMap:v,lightMap:me,bumpMap:se,normalMap:V,displacementMap:p&&O,emissiveMap:J,normalMapObjectSpace:V&&E.normalMapType===Kh,normalMapTangentSpace:V&&E.normalMapType===ua,metalnessMap:oe,roughnessMap:P,anisotropy:M,anisotropyMap:ye,clearcoat:G,clearcoatMap:Ae,clearcoatNormalMap:ct,clearcoatRoughnessMap:be,dispersion:re,iridescence:ne,iridescenceMap:Ue,iridescenceThicknessMap:Pe,sheen:ae,sheenColorMap:Ke,sheenRoughnessMap:Fe,specularMap:nt,specularColorMap:it,specularIntensityMap:yt,transmission:we,transmissionMap:te,thicknessMap:Re,gradientMap:pe,opaque:E.transparent===!1&&E.blending===ur&&E.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ce,alphaHash:Ne,combine:E.combine,mapUv:Qe&&g(E.map.channel),aoMapUv:v&&g(E.aoMap.channel),lightMapUv:me&&g(E.lightMap.channel),bumpMapUv:se&&g(E.bumpMap.channel),normalMapUv:V&&g(E.normalMap.channel),displacementMapUv:O&&g(E.displacementMap.channel),emissiveMapUv:J&&g(E.emissiveMap.channel),metalnessMapUv:oe&&g(E.metalnessMap.channel),roughnessMapUv:P&&g(E.roughnessMap.channel),anisotropyMapUv:ye&&g(E.anisotropyMap.channel),clearcoatMapUv:Ae&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:ct&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&g(E.sheenRoughnessMap.channel),specularMapUv:nt&&g(E.specularMap.channel),specularColorMapUv:it&&g(E.specularColorMap.channel),specularIntensityMapUv:yt&&g(E.specularIntensityMap.channel),transmissionMapUv:te&&g(E.transmissionMap.channel),thicknessMapUv:Re&&g(E.thicknessMap.channel),alphaMapUv:ve&&g(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(V||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(Qe||ve),fog:!!b,useFog:E.fog===!0,fogExp2:!!b&&b.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:xe,skinning:z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:K,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:Qe&&E.map.isVideoTexture===!0&&dt.getTransfer(E.map.colorSpace)===Rt,decodeVideoTextureEmissive:J&&E.emissiveMap.isVideoTexture===!0&&dt.getTransfer(E.emissiveMap.colorSpace)===Rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===_n,flipSided:E.side===Qt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:at&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&E.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function f(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const B in E.defines)w.push(B),w.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(x(w,E),S(w,E),w.push(s.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function x(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function S(E,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){const w=_[E.type];let B;if(w){const R=Fn[w];B=Lu.clone(R.uniforms)}else B=E.uniforms;return B}function C(E,w){let B;for(let R=0,z=u.length;R<z;R++){const b=u[R];if(b.cacheKey===w){B=b,++B.usedTimes;break}}return B===void 0&&(B=new $g(s,w,E,r),u.push(B)),B}function I(E){if(--E.usedTimes===0){const w=u.indexOf(E);u[w]=u[u.length-1],u.pop(),E.destroy()}}function L(E){c.remove(E)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:C,releaseProgram:I,releaseShaderCache:L,programs:u,dispose:D}}function i_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function r_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function xl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function yl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,p,d,_,g,m){let f=s[e];return f===void 0?(f={id:h.id,object:h,geometry:p,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},s[e]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=d,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=g,f.group=m),e++,f}function o(h,p,d,_,g,m){const f=a(h,p,d,_,g,m);d.transmission>0?n.push(f):d.transparent===!0?i.push(f):t.push(f)}function c(h,p,d,_,g,m){const f=a(h,p,d,_,g,m);d.transmission>0?n.unshift(f):d.transparent===!0?i.unshift(f):t.unshift(f)}function l(h,p){t.length>1&&t.sort(h||r_),n.length>1&&n.sort(p||xl),i.length>1&&i.sort(p||xl)}function u(){for(let h=e,p=s.length;h<p;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:l}}function s_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new yl,s.set(n,[a])):i>=r.length?(a=new yl,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function a_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new Ye};break;case"SpotLight":t={position:new q,direction:new q,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new q,halfWidth:new q,halfHeight:new q};break}return s[e.id]=t,t}}}function o_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let c_=0;function l_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function u_(s){const e=new a_,t=o_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new q);const i=new q,r=new Je,a=new Je;function o(l){let u=0,h=0,p=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,_=0,g=0,m=0,f=0,x=0,S=0,y=0,C=0,I=0,L=0;l.sort(l_);for(let E=0,w=l.length;E<w;E++){const B=l[E],R=B.color,z=B.intensity,b=B.distance,W=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)u+=R.r*z,h+=R.g*z,p+=R.b*z;else if(B.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(B.sh.coefficients[H],z);L++}else if(B.isDirectionalLight){const H=e.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Z=B.shadow,$=t.get(B);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,n.directionalShadow[d]=$,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=B.shadow.matrix,x++}n.directional[d]=H,d++}else if(B.isSpotLight){const H=e.get(B);H.position.setFromMatrixPosition(B.matrixWorld),H.color.copy(R).multiplyScalar(z),H.distance=b,H.coneCos=Math.cos(B.angle),H.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),H.decay=B.decay,n.spot[g]=H;const Z=B.shadow;if(B.map&&(n.spotLightMap[C]=B.map,C++,Z.updateMatrices(B),B.castShadow&&I++),n.spotLightMatrix[g]=Z.matrix,B.castShadow){const $=t.get(B);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,n.spotShadow[g]=$,n.spotShadowMap[g]=W,y++}g++}else if(B.isRectAreaLight){const H=e.get(B);H.color.copy(R).multiplyScalar(z),H.halfWidth.set(B.width*.5,0,0),H.halfHeight.set(0,B.height*.5,0),n.rectArea[m]=H,m++}else if(B.isPointLight){const H=e.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity),H.distance=B.distance,H.decay=B.decay,B.castShadow){const Z=B.shadow,$=t.get(B);$.shadowIntensity=Z.intensity,$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,$.shadowCameraNear=Z.camera.near,$.shadowCameraFar=Z.camera.far,n.pointShadow[_]=$,n.pointShadowMap[_]=W,n.pointShadowMatrix[_]=B.shadow.matrix,S++}n.point[_]=H,_++}else if(B.isHemisphereLight){const H=e.get(B);H.skyColor.copy(B.color).multiplyScalar(z),H.groundColor.copy(B.groundColor).multiplyScalar(z),n.hemi[f]=H,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=p;const D=n.hash;(D.directionalLength!==d||D.pointLength!==_||D.spotLength!==g||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==x||D.numPointShadows!==S||D.numSpotShadows!==y||D.numSpotMaps!==C||D.numLightProbes!==L)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+C-I,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=L,D.directionalLength=d,D.pointLength=_,D.spotLength=g,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=x,D.numPointShadows=S,D.numSpotShadows=y,D.numSpotMaps=C,D.numLightProbes=L,n.version=c_++)}function c(l,u){let h=0,p=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let f=0,x=l.length;f<x;f++){const S=l[f];if(S.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(S.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const y=n.point[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function bl(s){const e=new u_(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function h_(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new bl(s),e.set(i,[o])):r>=a.length?(o=new bl(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class d_ extends on{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=qh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class f_ extends on{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const p_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m_=`uniform sampler2D shadow_pass;
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
}`;function g_(s,e,t){let n=new lc;const i=new st,r=new st,a=new bt,o=new d_({depthPacking:Yh}),c=new f_,l={},u=t.maxTextureSize,h={[Bn]:Qt,[Qt]:Bn,[_n]:_n},p=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:p_,fragmentShader:m_}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const _=new Wt;_.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Lt(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lu;let f=this.type;this.render=function(I,L,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const E=s.getRenderTarget(),w=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),R=s.state;R.setBlending(gi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const z=f!==Jn&&this.type===Jn,b=f===Jn&&this.type!==Jn;for(let W=0,H=I.length;W<H;W++){const Z=I[W],$=Z.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const Q=$.getFrameExtents();if(i.multiply(Q),r.copy($.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Q.x),i.x=r.x*Q.x,$.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Q.y),i.y=r.y*Q.y,$.mapSize.y=r.y)),$.map===null||z===!0||b===!0){const X=this.type!==Jn?{minFilter:en,magFilter:en}:{};$.map!==null&&$.map.dispose(),$.map=new Oi(i.x,i.y,X),$.map.texture.name=Z.name+".shadowMap",$.camera.updateProjectionMatrix()}s.setRenderTarget($.map),s.clear();const fe=$.getViewportCount();for(let X=0;X<fe;X++){const K=$.getViewport(X);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),R.viewport(a),$.updateMatrices(Z,X),n=$.getFrustum(),y(L,D,$.camera,Z,this.type)}$.isPointLightShadow!==!0&&this.type===Jn&&x($,D),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(E,w,B)};function x(I,L){const D=e.update(g);p.defines.VSM_SAMPLES!==I.blurSamples&&(p.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Oi(i.x,i.y)),p.uniforms.shadow_pass.value=I.map.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(L,null,D,p,g,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(L,null,D,d,g,null)}function S(I,L,D,E){let w=null;const B=D.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)w=B;else if(w=D.isPointLight===!0?c:o,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const R=w.uuid,z=L.uuid;let b=l[R];b===void 0&&(b={},l[R]=b);let W=b[z];W===void 0&&(W=w.clone(),b[z]=W,L.addEventListener("dispose",C)),w=W}if(w.visible=L.visible,w.wireframe=L.wireframe,E===Jn?w.side=L.shadowSide!==null?L.shadowSide:L.side:w.side=L.shadowSide!==null?L.shadowSide:h[L.side],w.alphaMap=L.alphaMap,w.alphaTest=L.alphaTest,w.map=L.map,w.clipShadows=L.clipShadows,w.clippingPlanes=L.clippingPlanes,w.clipIntersection=L.clipIntersection,w.displacementMap=L.displacementMap,w.displacementScale=L.displacementScale,w.displacementBias=L.displacementBias,w.wireframeLinewidth=L.wireframeLinewidth,w.linewidth=L.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const R=s.properties.get(w);R.light=D}return w}function y(I,L,D,E,w){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===Jn)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,I.matrixWorld);const z=e.update(I),b=I.material;if(Array.isArray(b)){const W=z.groups;for(let H=0,Z=W.length;H<Z;H++){const $=W[H],Q=b[$.materialIndex];if(Q&&Q.visible){const fe=S(I,Q,E,w);I.onBeforeShadow(s,I,L,D,z,fe,$),s.renderBufferDirect(D,null,z,fe,I,$),I.onAfterShadow(s,I,L,D,z,fe,$)}}}else if(b.visible){const W=S(I,b,E,w);I.onBeforeShadow(s,I,L,D,z,W,null),s.renderBufferDirect(D,null,z,W,I,null),I.onAfterShadow(s,I,L,D,z,W,null)}}const R=I.children;for(let z=0,b=R.length;z<b;z++)y(R[z],L,D,E,w)}function C(I){I.target.removeEventListener("dispose",C);for(const D in l){const E=l[D],w=I.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}const __={[uo]:ho,[fo]:go,[po]:_o,[mr]:mo,[ho]:uo,[go]:fo,[_o]:po,[mo]:mr};function v_(s,e){function t(){let te=!1;const Re=new bt;let pe=null;const ve=new bt(0,0,0,0);return{setMask:function(Ce){pe!==Ce&&!te&&(s.colorMask(Ce,Ce,Ce,Ce),pe=Ce)},setLocked:function(Ce){te=Ce},setClear:function(Ce,Ne,at,It,zt){zt===!0&&(Ce*=It,Ne*=It,at*=It),Re.set(Ce,Ne,at,It),ve.equals(Re)===!1&&(s.clearColor(Ce,Ne,at,It),ve.copy(Re))},reset:function(){te=!1,pe=null,ve.set(-1,0,0,0)}}}function n(){let te=!1,Re=!1,pe=null,ve=null,Ce=null;return{setReversed:function(Ne){if(Re!==Ne){const at=e.get("EXT_clip_control");Re?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);const It=Ce;Ce=null,this.setClear(It)}Re=Ne},getReversed:function(){return Re},setTest:function(Ne){Ne?de(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(Ne){pe!==Ne&&!te&&(s.depthMask(Ne),pe=Ne)},setFunc:function(Ne){if(Re&&(Ne=__[Ne]),ve!==Ne){switch(Ne){case uo:s.depthFunc(s.NEVER);break;case ho:s.depthFunc(s.ALWAYS);break;case fo:s.depthFunc(s.LESS);break;case mr:s.depthFunc(s.LEQUAL);break;case po:s.depthFunc(s.EQUAL);break;case mo:s.depthFunc(s.GEQUAL);break;case go:s.depthFunc(s.GREATER);break;case _o:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ve=Ne}},setLocked:function(Ne){te=Ne},setClear:function(Ne){Ce!==Ne&&(Re&&(Ne=1-Ne),s.clearDepth(Ne),Ce=Ne)},reset:function(){te=!1,pe=null,ve=null,Ce=null,Re=!1}}}function i(){let te=!1,Re=null,pe=null,ve=null,Ce=null,Ne=null,at=null,It=null,zt=null;return{setTest:function(lt){te||(lt?de(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(lt){Re!==lt&&!te&&(s.stencilMask(lt),Re=lt)},setFunc:function(lt,rn,bn){(pe!==lt||ve!==rn||Ce!==bn)&&(s.stencilFunc(lt,rn,bn),pe=lt,ve=rn,Ce=bn)},setOp:function(lt,rn,bn){(Ne!==lt||at!==rn||It!==bn)&&(s.stencilOp(lt,rn,bn),Ne=lt,at=rn,It=bn)},setLocked:function(lt){te=lt},setClear:function(lt){zt!==lt&&(s.clearStencil(lt),zt=lt)},reset:function(){te=!1,Re=null,pe=null,ve=null,Ce=null,Ne=null,at=null,It=null,zt=null}}}const r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let u={},h={},p=new WeakMap,d=[],_=null,g=!1,m=null,f=null,x=null,S=null,y=null,C=null,I=null,L=new Ye(0,0,0),D=0,E=!1,w=null,B=null,R=null,z=null,b=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec($)[1]),H=Z>=1):$.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),H=Z>=2);let Q=null,fe={};const X=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),_e=new bt().fromArray(X),j=new bt().fromArray(K);function Y(te,Re,pe,ve){const Ce=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(te,Ne),s.texParameteri(te,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(te,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<pe;at++)te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,ve,0,s.RGBA,s.UNSIGNED_BYTE,Ce):s.texImage2D(Re+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ce);return Ne}const ce={};ce[s.TEXTURE_2D]=Y(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=Y(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[s.TEXTURE_2D_ARRAY]=Y(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=Y(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),de(s.DEPTH_TEST),a.setFunc(mr),se(!1),V(Ec),de(s.CULL_FACE),v(gi);function de(te){u[te]!==!0&&(s.enable(te),u[te]=!0)}function xe(te){u[te]!==!1&&(s.disable(te),u[te]=!1)}function Ee(te,Re){return h[te]!==Re?(s.bindFramebuffer(te,Re),h[te]=Re,te===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Re),te===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Be(te,Re){let pe=d,ve=!1;if(te){pe=p.get(Re),pe===void 0&&(pe=[],p.set(Re,pe));const Ce=te.textures;if(pe.length!==Ce.length||pe[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,at=Ce.length;Ne<at;Ne++)pe[Ne]=s.COLOR_ATTACHMENT0+Ne;pe.length=Ce.length,ve=!0}}else pe[0]!==s.BACK&&(pe[0]=s.BACK,ve=!0);ve&&s.drawBuffers(pe)}function Qe(te){return _!==te?(s.useProgram(te),_=te,!0):!1}const tt={[Li]:s.FUNC_ADD,[mh]:s.FUNC_SUBTRACT,[gh]:s.FUNC_REVERSE_SUBTRACT};tt[_h]=s.MIN,tt[vh]=s.MAX;const pt={[xh]:s.ZERO,[yh]:s.ONE,[bh]:s.SRC_COLOR,[co]:s.SRC_ALPHA,[Ah]:s.SRC_ALPHA_SATURATE,[wh]:s.DST_COLOR,[Sh]:s.DST_ALPHA,[Mh]:s.ONE_MINUS_SRC_COLOR,[lo]:s.ONE_MINUS_SRC_ALPHA,[Th]:s.ONE_MINUS_DST_COLOR,[Eh]:s.ONE_MINUS_DST_ALPHA,[Rh]:s.CONSTANT_COLOR,[Ch]:s.ONE_MINUS_CONSTANT_COLOR,[Ih]:s.CONSTANT_ALPHA,[Lh]:s.ONE_MINUS_CONSTANT_ALPHA};function v(te,Re,pe,ve,Ce,Ne,at,It,zt,lt){if(te===gi){g===!0&&(xe(s.BLEND),g=!1);return}if(g===!1&&(de(s.BLEND),g=!0),te!==ph){if(te!==m||lt!==E){if((f!==Li||y!==Li)&&(s.blendEquation(s.FUNC_ADD),f=Li,y=Li),lt)switch(te){case ur:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wc:s.blendFunc(s.ONE,s.ONE);break;case Tc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ac:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",te);break}else switch(te){case ur:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Tc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ac:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",te);break}x=null,S=null,C=null,I=null,L.set(0,0,0),D=0,m=te,E=lt}return}Ce=Ce||Re,Ne=Ne||pe,at=at||ve,(Re!==f||Ce!==y)&&(s.blendEquationSeparate(tt[Re],tt[Ce]),f=Re,y=Ce),(pe!==x||ve!==S||Ne!==C||at!==I)&&(s.blendFuncSeparate(pt[pe],pt[ve],pt[Ne],pt[at]),x=pe,S=ve,C=Ne,I=at),(It.equals(L)===!1||zt!==D)&&(s.blendColor(It.r,It.g,It.b,zt),L.copy(It),D=zt),m=te,E=!1}function me(te,Re){te.side===_n?xe(s.CULL_FACE):de(s.CULL_FACE);let pe=te.side===Qt;Re&&(pe=!pe),se(pe),te.blending===ur&&te.transparent===!1?v(gi):v(te.blending,te.blendEquation,te.blendSrc,te.blendDst,te.blendEquationAlpha,te.blendSrcAlpha,te.blendDstAlpha,te.blendColor,te.blendAlpha,te.premultipliedAlpha),a.setFunc(te.depthFunc),a.setTest(te.depthTest),a.setMask(te.depthWrite),r.setMask(te.colorWrite);const ve=te.stencilWrite;o.setTest(ve),ve&&(o.setMask(te.stencilWriteMask),o.setFunc(te.stencilFunc,te.stencilRef,te.stencilFuncMask),o.setOp(te.stencilFail,te.stencilZFail,te.stencilZPass)),J(te.polygonOffset,te.polygonOffsetFactor,te.polygonOffsetUnits),te.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function se(te){w!==te&&(te?s.frontFace(s.CW):s.frontFace(s.CCW),w=te)}function V(te){te!==hh?(de(s.CULL_FACE),te!==B&&(te===Ec?s.cullFace(s.BACK):te===dh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),B=te}function O(te){te!==R&&(H&&s.lineWidth(te),R=te)}function J(te,Re,pe){te?(de(s.POLYGON_OFFSET_FILL),(z!==Re||b!==pe)&&(s.polygonOffset(Re,pe),z=Re,b=pe)):xe(s.POLYGON_OFFSET_FILL)}function oe(te){te?de(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function P(te){te===void 0&&(te=s.TEXTURE0+W-1),Q!==te&&(s.activeTexture(te),Q=te)}function M(te,Re,pe){pe===void 0&&(Q===null?pe=s.TEXTURE0+W-1:pe=Q);let ve=fe[pe];ve===void 0&&(ve={type:void 0,texture:void 0},fe[pe]=ve),(ve.type!==te||ve.texture!==Re)&&(Q!==pe&&(s.activeTexture(pe),Q=pe),s.bindTexture(te,Re||ce[te]),ve.type=te,ve.texture=Re)}function G(){const te=fe[Q];te!==void 0&&te.type!==void 0&&(s.bindTexture(te.type,null),te.type=void 0,te.texture=void 0)}function re(){try{s.compressedTexImage2D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function ne(){try{s.compressedTexImage3D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function ae(){try{s.texSubImage2D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function we(){try{s.texSubImage3D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function ye(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Ae(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function ct(){try{s.texStorage2D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function be(){try{s.texStorage3D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Ue(){try{s.texImage2D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Pe(){try{s.texImage3D.apply(s,arguments)}catch(te){console.error("THREE.WebGLState:",te)}}function Ke(te){_e.equals(te)===!1&&(s.scissor(te.x,te.y,te.z,te.w),_e.copy(te))}function Fe(te){j.equals(te)===!1&&(s.viewport(te.x,te.y,te.z,te.w),j.copy(te))}function nt(te,Re){let pe=l.get(Re);pe===void 0&&(pe=new WeakMap,l.set(Re,pe));let ve=pe.get(te);ve===void 0&&(ve=s.getUniformBlockIndex(Re,te.name),pe.set(te,ve))}function it(te,Re){const ve=l.get(Re).get(te);c.get(Re)!==ve&&(s.uniformBlockBinding(Re,ve,te.__bindingPointIndex),c.set(Re,ve))}function yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},Q=null,fe={},h={},p=new WeakMap,d=[],_=null,g=!1,m=null,f=null,x=null,S=null,y=null,C=null,I=null,L=new Ye(0,0,0),D=0,E=!1,w=null,B=null,R=null,z=null,b=null,_e.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:de,disable:xe,bindFramebuffer:Ee,drawBuffers:Be,useProgram:Qe,setBlending:v,setMaterial:me,setFlipSided:se,setCullFace:V,setLineWidth:O,setPolygonOffset:J,setScissorTest:oe,activeTexture:P,bindTexture:M,unbindTexture:G,compressedTexImage2D:re,compressedTexImage3D:ne,texImage2D:Ue,texImage3D:Pe,updateUBOMapping:nt,uniformBlockBinding:it,texStorage2D:ct,texStorage3D:be,texSubImage2D:ae,texSubImage3D:we,compressedTexSubImage2D:ye,compressedTexSubImage3D:Ae,scissor:Ke,viewport:Fe,reset:yt}}function Ml(s,e,t,n){const i=x_(n);switch(t){case mu:return s*e;case _u:return s*e;case vu:return s*e*2;case ic:return s*e/i.components*i.byteLength;case rc:return s*e/i.components*i.byteLength;case xu:return s*e*2/i.components*i.byteLength;case sc:return s*e*2/i.components*i.byteLength;case gu:return s*e*3/i.components*i.byteLength;case yn:return s*e*4/i.components*i.byteLength;case ac:return s*e*4/i.components*i.byteLength;case qs:case Ys:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ks:case Zs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bo:case So:return Math.max(s,16)*Math.max(e,8)/4;case yo:case Mo:return Math.max(s,8)*Math.max(e,8)/2;case Eo:case wo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case To:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Co:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Io:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Po:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case No:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Do:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Uo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ko:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case zo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Js:case Vo:case Ho:return Math.ceil(s/4)*Math.ceil(e/4)*16;case yu:case Go:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Wo:case jo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function x_(s){switch(s){case ni:case du:return{byteLength:1,components:1};case Kr:case fu:case ns:return{byteLength:2,components:1};case tc:case nc:return{byteLength:2,components:4};case Fi:case ec:case Ln:return{byteLength:4,components:1};case pu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function y_(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new st,u=new WeakMap;let h;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,M){return d?new OffscreenCanvas(P,M):$r("canvas")}function g(P,M,G){let re=1;const ne=oe(P);if((ne.width>G||ne.height>G)&&(re=G/Math.max(ne.width,ne.height)),re<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ae=Math.floor(re*ne.width),we=Math.floor(re*ne.height);h===void 0&&(h=_(ae,we));const ye=M?_(ae,we):h;return ye.width=ae,ye.height=we,ye.getContext("2d").drawImage(P,0,0,ae,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ae+"x"+we+")."),ye}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function m(P){return P.generateMipmaps}function f(P){s.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(P,M,G,re,ne=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ae=M;if(M===s.RED&&(G===s.FLOAT&&(ae=s.R32F),G===s.HALF_FLOAT&&(ae=s.R16F),G===s.UNSIGNED_BYTE&&(ae=s.R8)),M===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(ae=s.R8UI),G===s.UNSIGNED_SHORT&&(ae=s.R16UI),G===s.UNSIGNED_INT&&(ae=s.R32UI),G===s.BYTE&&(ae=s.R8I),G===s.SHORT&&(ae=s.R16I),G===s.INT&&(ae=s.R32I)),M===s.RG&&(G===s.FLOAT&&(ae=s.RG32F),G===s.HALF_FLOAT&&(ae=s.RG16F),G===s.UNSIGNED_BYTE&&(ae=s.RG8)),M===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(ae=s.RG8UI),G===s.UNSIGNED_SHORT&&(ae=s.RG16UI),G===s.UNSIGNED_INT&&(ae=s.RG32UI),G===s.BYTE&&(ae=s.RG8I),G===s.SHORT&&(ae=s.RG16I),G===s.INT&&(ae=s.RG32I)),M===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(ae=s.RGB8UI),G===s.UNSIGNED_SHORT&&(ae=s.RGB16UI),G===s.UNSIGNED_INT&&(ae=s.RGB32UI),G===s.BYTE&&(ae=s.RGB8I),G===s.SHORT&&(ae=s.RGB16I),G===s.INT&&(ae=s.RGB32I)),M===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(ae=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(ae=s.RGBA16UI),G===s.UNSIGNED_INT&&(ae=s.RGBA32UI),G===s.BYTE&&(ae=s.RGBA8I),G===s.SHORT&&(ae=s.RGBA16I),G===s.INT&&(ae=s.RGBA32I)),M===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&(ae=s.RGB9_E5),M===s.RGBA){const we=ne?ha:dt.getTransfer(re);G===s.FLOAT&&(ae=s.RGBA32F),G===s.HALF_FLOAT&&(ae=s.RGBA16F),G===s.UNSIGNED_BYTE&&(ae=we===Rt?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(ae=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(ae=s.RGB5_A1)}return(ae===s.R16F||ae===s.R32F||ae===s.RG16F||ae===s.RG32F||ae===s.RGBA16F||ae===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function y(P,M){let G;return P?M===null||M===Fi||M===vr?G=s.DEPTH24_STENCIL8:M===Ln?G=s.DEPTH32F_STENCIL8:M===Kr&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Fi||M===vr?G=s.DEPTH_COMPONENT24:M===Ln?G=s.DEPTH_COMPONENT32F:M===Kr&&(G=s.DEPTH_COMPONENT16),G}function C(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==en&&P.minFilter!==Yt?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function I(P){const M=P.target;M.removeEventListener("dispose",I),D(M),M.isVideoTexture&&u.delete(M)}function L(P){const M=P.target;M.removeEventListener("dispose",L),w(M)}function D(P){const M=n.get(P);if(M.__webglInit===void 0)return;const G=P.source,re=p.get(G);if(re){const ne=re[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&E(P),Object.keys(re).length===0&&p.delete(G)}n.remove(P)}function E(P){const M=n.get(P);s.deleteTexture(M.__webglTexture);const G=P.source,re=p.get(G);delete re[M.__cacheKey],a.memory.textures--}function w(P){const M=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(M.__webglFramebuffer[re]))for(let ne=0;ne<M.__webglFramebuffer[re].length;ne++)s.deleteFramebuffer(M.__webglFramebuffer[re][ne]);else s.deleteFramebuffer(M.__webglFramebuffer[re]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[re])}else{if(Array.isArray(M.__webglFramebuffer))for(let re=0;re<M.__webglFramebuffer.length;re++)s.deleteFramebuffer(M.__webglFramebuffer[re]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let re=0;re<M.__webglColorRenderbuffer.length;re++)M.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[re]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=P.textures;for(let re=0,ne=G.length;re<ne;re++){const ae=n.get(G[re]);ae.__webglTexture&&(s.deleteTexture(ae.__webglTexture),a.memory.textures--),n.remove(G[re])}n.remove(P)}let B=0;function R(){B=0}function z(){const P=B;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),B+=1,P}function b(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function W(P,M){const G=n.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const re=P.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(G,P,M);return}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+M)}function H(P,M){const G=n.get(P);if(P.version>0&&G.__version!==P.version){j(G,P,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+M)}function Z(P,M){const G=n.get(P);if(P.version>0&&G.__version!==P.version){j(G,P,M);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+M)}function $(P,M){const G=n.get(P);if(P.version>0&&G.__version!==P.version){Y(G,P,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+M)}const Q={[vn]:s.REPEAT,[xn]:s.CLAMP_TO_EDGE,[ea]:s.MIRRORED_REPEAT},fe={[en]:s.NEAREST,[hu]:s.NEAREST_MIPMAP_NEAREST,[Wr]:s.NEAREST_MIPMAP_LINEAR,[Yt]:s.LINEAR,[Xs]:s.LINEAR_MIPMAP_NEAREST,[In]:s.LINEAR_MIPMAP_LINEAR},X={[Zh]:s.NEVER,[nd]:s.ALWAYS,[Jh]:s.LESS,[Mu]:s.LEQUAL,[$h]:s.EQUAL,[td]:s.GEQUAL,[Qh]:s.GREATER,[ed]:s.NOTEQUAL};function K(P,M){if(M.type===Ln&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Yt||M.magFilter===Xs||M.magFilter===Wr||M.magFilter===In||M.minFilter===Yt||M.minFilter===Xs||M.minFilter===Wr||M.minFilter===In)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Q[M.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Q[M.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Q[M.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,fe[M.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,fe[M.minFilter]),M.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,X[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===en||M.minFilter!==Wr&&M.minFilter!==In||M.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function _e(P,M){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",I));const re=M.source;let ne=p.get(re);ne===void 0&&(ne={},p.set(re,ne));const ae=b(M);if(ae!==P.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ne[ae].usedTimes++;const we=ne[P.__cacheKey];we!==void 0&&(ne[P.__cacheKey].usedTimes--,we.usedTimes===0&&E(M)),P.__cacheKey=ae,P.__webglTexture=ne[ae].texture}return G}function j(P,M,G){let re=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=s.TEXTURE_3D);const ne=_e(P,M),ae=M.source;t.bindTexture(re,P.__webglTexture,s.TEXTURE0+G);const we=n.get(ae);if(ae.version!==we.__version||ne===!0){t.activeTexture(s.TEXTURE0+G);const ye=dt.getPrimaries(dt.workingColorSpace),Ae=M.colorSpace===pi?null:dt.getPrimaries(M.colorSpace),ct=M.colorSpace===pi||ye===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let be=g(M.image,!1,i.maxTextureSize);be=J(M,be);const Ue=r.convert(M.format,M.colorSpace),Pe=r.convert(M.type);let Ke=S(M.internalFormat,Ue,Pe,M.colorSpace,M.isVideoTexture);K(re,M);let Fe;const nt=M.mipmaps,it=M.isVideoTexture!==!0,yt=we.__version===void 0||ne===!0,te=ae.dataReady,Re=C(M,be);if(M.isDepthTexture)Ke=y(M.format===xr,M.type),yt&&(it?t.texStorage2D(s.TEXTURE_2D,1,Ke,be.width,be.height):t.texImage2D(s.TEXTURE_2D,0,Ke,be.width,be.height,0,Ue,Pe,null));else if(M.isDataTexture)if(nt.length>0){it&&yt&&t.texStorage2D(s.TEXTURE_2D,Re,Ke,nt[0].width,nt[0].height);for(let pe=0,ve=nt.length;pe<ve;pe++)Fe=nt[pe],it?te&&t.texSubImage2D(s.TEXTURE_2D,pe,0,0,Fe.width,Fe.height,Ue,Pe,Fe.data):t.texImage2D(s.TEXTURE_2D,pe,Ke,Fe.width,Fe.height,0,Ue,Pe,Fe.data);M.generateMipmaps=!1}else it?(yt&&t.texStorage2D(s.TEXTURE_2D,Re,Ke,be.width,be.height),te&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,be.width,be.height,Ue,Pe,be.data)):t.texImage2D(s.TEXTURE_2D,0,Ke,be.width,be.height,0,Ue,Pe,be.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){it&&yt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Ke,nt[0].width,nt[0].height,be.depth);for(let pe=0,ve=nt.length;pe<ve;pe++)if(Fe=nt[pe],M.format!==yn)if(Ue!==null)if(it){if(te)if(M.layerUpdates.size>0){const Ce=Ml(Fe.width,Fe.height,M.format,M.type);for(const Ne of M.layerUpdates){const at=Fe.data.subarray(Ne*Ce/Fe.data.BYTES_PER_ELEMENT,(Ne+1)*Ce/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,Ne,Fe.width,Fe.height,1,Ue,at)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,Fe.width,Fe.height,be.depth,Ue,Fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pe,Ke,Fe.width,Fe.height,be.depth,0,Fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?te&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,Fe.width,Fe.height,be.depth,Ue,Pe,Fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,pe,Ke,Fe.width,Fe.height,be.depth,0,Ue,Pe,Fe.data)}else{it&&yt&&t.texStorage2D(s.TEXTURE_2D,Re,Ke,nt[0].width,nt[0].height);for(let pe=0,ve=nt.length;pe<ve;pe++)Fe=nt[pe],M.format!==yn?Ue!==null?it?te&&t.compressedTexSubImage2D(s.TEXTURE_2D,pe,0,0,Fe.width,Fe.height,Ue,Fe.data):t.compressedTexImage2D(s.TEXTURE_2D,pe,Ke,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?te&&t.texSubImage2D(s.TEXTURE_2D,pe,0,0,Fe.width,Fe.height,Ue,Pe,Fe.data):t.texImage2D(s.TEXTURE_2D,pe,Ke,Fe.width,Fe.height,0,Ue,Pe,Fe.data)}else if(M.isDataArrayTexture)if(it){if(yt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Ke,be.width,be.height,be.depth),te)if(M.layerUpdates.size>0){const pe=Ml(be.width,be.height,M.format,M.type);for(const ve of M.layerUpdates){const Ce=be.data.subarray(ve*pe/be.data.BYTES_PER_ELEMENT,(ve+1)*pe/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ve,be.width,be.height,1,Ue,Pe,Ce)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ue,Pe,be.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ke,be.width,be.height,be.depth,0,Ue,Pe,be.data);else if(M.isData3DTexture)it?(yt&&t.texStorage3D(s.TEXTURE_3D,Re,Ke,be.width,be.height,be.depth),te&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ue,Pe,be.data)):t.texImage3D(s.TEXTURE_3D,0,Ke,be.width,be.height,be.depth,0,Ue,Pe,be.data);else if(M.isFramebufferTexture){if(yt)if(it)t.texStorage2D(s.TEXTURE_2D,Re,Ke,be.width,be.height);else{let pe=be.width,ve=be.height;for(let Ce=0;Ce<Re;Ce++)t.texImage2D(s.TEXTURE_2D,Ce,Ke,pe,ve,0,Ue,Pe,null),pe>>=1,ve>>=1}}else if(nt.length>0){if(it&&yt){const pe=oe(nt[0]);t.texStorage2D(s.TEXTURE_2D,Re,Ke,pe.width,pe.height)}for(let pe=0,ve=nt.length;pe<ve;pe++)Fe=nt[pe],it?te&&t.texSubImage2D(s.TEXTURE_2D,pe,0,0,Ue,Pe,Fe):t.texImage2D(s.TEXTURE_2D,pe,Ke,Ue,Pe,Fe);M.generateMipmaps=!1}else if(it){if(yt){const pe=oe(be);t.texStorage2D(s.TEXTURE_2D,Re,Ke,pe.width,pe.height)}te&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ue,Pe,be)}else t.texImage2D(s.TEXTURE_2D,0,Ke,Ue,Pe,be);m(M)&&f(re),we.__version=ae.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Y(P,M,G){if(M.image.length!==6)return;const re=_e(P,M),ne=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+G);const ae=n.get(ne);if(ne.version!==ae.__version||re===!0){t.activeTexture(s.TEXTURE0+G);const we=dt.getPrimaries(dt.workingColorSpace),ye=M.colorSpace===pi?null:dt.getPrimaries(M.colorSpace),Ae=M.colorSpace===pi||we===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const ct=M.isCompressedTexture||M.image[0].isCompressedTexture,be=M.image[0]&&M.image[0].isDataTexture,Ue=[];for(let ve=0;ve<6;ve++)!ct&&!be?Ue[ve]=g(M.image[ve],!0,i.maxCubemapSize):Ue[ve]=be?M.image[ve].image:M.image[ve],Ue[ve]=J(M,Ue[ve]);const Pe=Ue[0],Ke=r.convert(M.format,M.colorSpace),Fe=r.convert(M.type),nt=S(M.internalFormat,Ke,Fe,M.colorSpace),it=M.isVideoTexture!==!0,yt=ae.__version===void 0||re===!0,te=ne.dataReady;let Re=C(M,Pe);K(s.TEXTURE_CUBE_MAP,M);let pe;if(ct){it&&yt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,nt,Pe.width,Pe.height);for(let ve=0;ve<6;ve++){pe=Ue[ve].mipmaps;for(let Ce=0;Ce<pe.length;Ce++){const Ne=pe[Ce];M.format!==yn?Ke!==null?it?te&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce,0,0,Ne.width,Ne.height,Ke,Ne.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce,nt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce,0,0,Ne.width,Ne.height,Ke,Fe,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce,nt,Ne.width,Ne.height,0,Ke,Fe,Ne.data)}}}else{if(pe=M.mipmaps,it&&yt){pe.length>0&&Re++;const ve=oe(Ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,nt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(be){it?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ue[ve].width,Ue[ve].height,Ke,Fe,Ue[ve].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,nt,Ue[ve].width,Ue[ve].height,0,Ke,Fe,Ue[ve].data);for(let Ce=0;Ce<pe.length;Ce++){const at=pe[Ce].image[ve].image;it?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce+1,0,0,at.width,at.height,Ke,Fe,at.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce+1,nt,at.width,at.height,0,Ke,Fe,at.data)}}else{it?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ke,Fe,Ue[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,nt,Ke,Fe,Ue[ve]);for(let Ce=0;Ce<pe.length;Ce++){const Ne=pe[Ce];it?te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce+1,0,0,Ke,Fe,Ne.image[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce+1,nt,Ke,Fe,Ne.image[ve])}}}m(M)&&f(s.TEXTURE_CUBE_MAP),ae.__version=ne.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ce(P,M,G,re,ne,ae){const we=r.convert(G.format,G.colorSpace),ye=r.convert(G.type),Ae=S(G.internalFormat,we,ye,G.colorSpace),ct=n.get(M),be=n.get(G);if(be.__renderTarget=M,!ct.__hasExternalTextures){const Ue=Math.max(1,M.width>>ae),Pe=Math.max(1,M.height>>ae);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,ae,Ae,Ue,Pe,M.depth,0,we,ye,null):t.texImage2D(ne,ae,Ae,Ue,Pe,0,we,ye,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),V(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,ne,be.__webglTexture,0,se(M)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,ne,be.__webglTexture,ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function de(P,M,G){if(s.bindRenderbuffer(s.RENDERBUFFER,P),M.depthBuffer){const re=M.depthTexture,ne=re&&re.isDepthTexture?re.type:null,ae=y(M.stencilBuffer,ne),we=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=se(M);V(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,ae,M.width,M.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,ae,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ae,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,P)}else{const re=M.textures;for(let ne=0;ne<re.length;ne++){const ae=re[ne],we=r.convert(ae.format,ae.colorSpace),ye=r.convert(ae.type),Ae=S(ae.internalFormat,we,ye,ae.colorSpace),ct=se(M);G&&V(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,Ae,M.width,M.height):V(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,Ae,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xe(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=n.get(M.depthTexture);re.__renderTarget=M,(!re.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const ne=re.__webglTexture,ae=se(M);if(M.depthTexture.format===hr)V(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0);else if(M.depthTexture.format===xr)V(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ee(P){const M=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const re=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),re){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,re.removeEventListener("dispose",ne)};re.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=re}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");xe(M.__webglFramebuffer,P)}else if(G){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]===void 0)M.__webglDepthbuffer[re]=s.createRenderbuffer(),de(M.__webglDepthbuffer[re],P,!1);else{const ne=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,ae)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),de(M.__webglDepthbuffer,P,!1);else{const re=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,ne)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(P,M,G){const re=n.get(P);M!==void 0&&ce(re.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Ee(P)}function Qe(P){const M=P.texture,G=n.get(P),re=n.get(M);P.addEventListener("dispose",L);const ne=P.textures,ae=P.isWebGLCubeRenderTarget===!0,we=ne.length>1;if(we||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=M.version,a.memory.textures++),ae){G.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[ye]=[];for(let Ae=0;Ae<M.mipmaps.length;Ae++)G.__webglFramebuffer[ye][Ae]=s.createFramebuffer()}else G.__webglFramebuffer[ye]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let ye=0;ye<M.mipmaps.length;ye++)G.__webglFramebuffer[ye]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(we)for(let ye=0,Ae=ne.length;ye<Ae;ye++){const ct=n.get(ne[ye]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&V(P)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ye=0;ye<ne.length;ye++){const Ae=ne[ye];G.__webglColorRenderbuffer[ye]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[ye]);const ct=r.convert(Ae.format,Ae.colorSpace),be=r.convert(Ae.type),Ue=S(Ae.internalFormat,ct,be,Ae.colorSpace,P.isXRRenderTarget===!0),Pe=se(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,Ue,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,G.__webglColorRenderbuffer[ye])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),de(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),K(s.TEXTURE_CUBE_MAP,M);for(let ye=0;ye<6;ye++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)ce(G.__webglFramebuffer[ye][Ae],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ae);else ce(G.__webglFramebuffer[ye],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(M)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let ye=0,Ae=ne.length;ye<Ae;ye++){const ct=ne[ye],be=n.get(ct);t.bindTexture(s.TEXTURE_2D,be.__webglTexture),K(s.TEXTURE_2D,ct),ce(G.__webglFramebuffer,P,ct,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,0),m(ct)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let ye=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ye=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ye,re.__webglTexture),K(ye,M),M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)ce(G.__webglFramebuffer[Ae],P,M,s.COLOR_ATTACHMENT0,ye,Ae);else ce(G.__webglFramebuffer,P,M,s.COLOR_ATTACHMENT0,ye,0);m(M)&&f(ye),t.unbindTexture()}P.depthBuffer&&Ee(P)}function tt(P){const M=P.textures;for(let G=0,re=M.length;G<re;G++){const ne=M[G];if(m(ne)){const ae=x(P),we=n.get(ne).__webglTexture;t.bindTexture(ae,we),f(ae),t.unbindTexture()}}}const pt=[],v=[];function me(P){if(P.samples>0){if(V(P)===!1){const M=P.textures,G=P.width,re=P.height;let ne=s.COLOR_BUFFER_BIT;const ae=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=n.get(P),ye=M.length>1;if(ye)for(let Ae=0;Ae<M.length;Ae++)t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ae=0;Ae<M.length;Ae++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),ye){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,we.__webglColorRenderbuffer[Ae]);const ct=n.get(M[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ct,0)}s.blitFramebuffer(0,0,G,re,0,0,G,re,ne,s.NEAREST),c===!0&&(pt.length=0,v.length=0,pt.push(s.COLOR_ATTACHMENT0+Ae),P.depthBuffer&&P.resolveDepthBuffer===!1&&(pt.push(ae),v.push(ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,v)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ye)for(let Ae=0;Ae<M.length;Ae++){t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,we.__webglColorRenderbuffer[Ae]);const ct=n.get(M[Ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,ct,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const M=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function se(P){return Math.min(i.maxSamples,P.samples)}function V(P){const M=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function O(P){const M=a.render.frame;u.get(P)!==M&&(u.set(P,M),P.update())}function J(P,M){const G=P.colorSpace,re=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==nn&&G!==pi&&(dt.getTransfer(G)===Rt?(re!==yn||ne!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function oe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=R,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=$,this.rebindTextures=Be,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=V}function b_(s,e){function t(n,i=pi){let r;const a=dt.getTransfer(i);if(n===ni)return s.UNSIGNED_BYTE;if(n===tc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===nc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===pu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===du)return s.BYTE;if(n===fu)return s.SHORT;if(n===Kr)return s.UNSIGNED_SHORT;if(n===ec)return s.INT;if(n===Fi)return s.UNSIGNED_INT;if(n===Ln)return s.FLOAT;if(n===ns)return s.HALF_FLOAT;if(n===mu)return s.ALPHA;if(n===gu)return s.RGB;if(n===yn)return s.RGBA;if(n===_u)return s.LUMINANCE;if(n===vu)return s.LUMINANCE_ALPHA;if(n===hr)return s.DEPTH_COMPONENT;if(n===xr)return s.DEPTH_STENCIL;if(n===ic)return s.RED;if(n===rc)return s.RED_INTEGER;if(n===xu)return s.RG;if(n===sc)return s.RG_INTEGER;if(n===ac)return s.RGBA_INTEGER;if(n===qs||n===Ys||n===Ks||n===Zs)if(a===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yo||n===bo||n===Mo||n===So)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===wo||n===To)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Eo||n===wo)return a===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===To)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ao||n===Ro||n===Co||n===Io||n===Lo||n===Po||n===No||n===Do||n===Uo||n===Fo||n===Oo||n===ko||n===Bo||n===zo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ao)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ro)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Co)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Io)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Po)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===No)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Do)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ko)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Js||n===Vo||n===Ho)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Js)return a===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yu||n===Go||n===Wo||n===jo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Js)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Go)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class M_ extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class kn extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S_={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(l,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],p=u.position.distanceTo(h.position),d=.02,_=.005;l.inputState.pinching&&p>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(S_)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new kn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const E_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w_=`
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

}`;class T_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ot,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ii({vertexShader:E_,fragmentShader:w_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new Er(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class A_ extends zi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,p=null,d=null,_=null;const g=new T_,m=t.getContextAttributes();let f=null,x=null;const S=[],y=[],C=new st;let I=null;const L=new Gt;L.viewport=new bt;const D=new Gt;D.viewport=new bt;const E=[L,D],w=new M_;let B=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Y=S[j];return Y===void 0&&(Y=new Za,S[j]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(j){let Y=S[j];return Y===void 0&&(Y=new Za,S[j]=Y),Y.getGripSpace()},this.getHand=function(j){let Y=S[j];return Y===void 0&&(Y=new Za,S[j]=Y),Y.getHandSpace()};function z(j){const Y=y.indexOf(j.inputSource);if(Y===-1)return;const ce=S[Y];ce!==void 0&&(ce.update(j.inputSource,j.frame,l||a),ce.dispatchEvent({type:j.type,data:j.inputSource}))}function b(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",b),i.removeEventListener("inputsourceschange",W);for(let j=0;j<S.length;j++){const Y=y[j];Y!==null&&(y[j]=null,S[j].disconnect(Y))}B=null,R=null,g.reset(),e.setRenderTarget(f),d=null,p=null,h=null,i=null,x=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",b),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Oi(d.framebufferWidth,d.framebufferHeight,{format:yn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,ce=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=m.stencil?xr:hr,ce=m.stencil?vr:Fi);const xe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};h=new XRWebGLBinding(i,t),p=h.createProjectionLayer(xe),i.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),x=new Oi(p.textureWidth,p.textureHeight,{format:yn,type:ni,depthTexture:new Uu(p.textureWidth,p.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),_e.setContext(i),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(j){for(let Y=0;Y<j.removed.length;Y++){const ce=j.removed[Y],de=y.indexOf(ce);de>=0&&(y[de]=null,S[de].disconnect(ce))}for(let Y=0;Y<j.added.length;Y++){const ce=j.added[Y];let de=y.indexOf(ce);if(de===-1){for(let Ee=0;Ee<S.length;Ee++)if(Ee>=y.length){y.push(ce),de=Ee;break}else if(y[Ee]===null){y[Ee]=ce,de=Ee;break}if(de===-1)break}const xe=S[de];xe&&xe.connect(ce)}}const H=new q,Z=new q;function $(j,Y,ce){H.setFromMatrixPosition(Y.matrixWorld),Z.setFromMatrixPosition(ce.matrixWorld);const de=H.distanceTo(Z),xe=Y.projectionMatrix.elements,Ee=ce.projectionMatrix.elements,Be=xe[14]/(xe[10]-1),Qe=xe[14]/(xe[10]+1),tt=(xe[9]+1)/xe[5],pt=(xe[9]-1)/xe[5],v=(xe[8]-1)/xe[0],me=(Ee[8]+1)/Ee[0],se=Be*v,V=Be*me,O=de/(-v+me),J=O*-v;if(Y.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(J),j.translateZ(O),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),xe[10]===-1)j.projectionMatrix.copy(Y.projectionMatrix),j.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const oe=Be+O,P=Qe+O,M=se-J,G=V+(de-J),re=tt*Qe/P*oe,ne=pt*Qe/P*oe;j.projectionMatrix.makePerspective(M,G,re,ne,oe,P),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Q(j,Y){Y===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Y.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let Y=j.near,ce=j.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(ce=g.depthFar)),w.near=D.near=L.near=Y,w.far=D.far=L.far=ce,(B!==w.near||R!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),B=w.near,R=w.far),L.layers.mask=j.layers.mask|2,D.layers.mask=j.layers.mask|4,w.layers.mask=L.layers.mask|D.layers.mask;const de=j.parent,xe=w.cameras;Q(w,de);for(let Ee=0;Ee<xe.length;Ee++)Q(xe[Ee],de);xe.length===2?$(w,L,D):w.projectionMatrix.copy(L.projectionMatrix),fe(j,w,de)};function fe(j,Y,ce){ce===null?j.matrix.copy(Y.matrixWorld):(j.matrix.copy(ce.matrixWorld),j.matrix.invert(),j.matrix.multiply(Y.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Y.projectionMatrix),j.projectionMatrixInverse.copy(Y.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=yr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(p===null&&d===null))return c},this.setFoveation=function(j){c=j,p!==null&&(p.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(w)};let X=null;function K(j,Y){if(u=Y.getViewerPose(l||a),_=Y,u!==null){const ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let de=!1;ce.length!==w.cameras.length&&(w.cameras.length=0,de=!0);for(let Ee=0;Ee<ce.length;Ee++){const Be=ce[Ee];let Qe=null;if(d!==null)Qe=d.getViewport(Be);else{const pt=h.getViewSubImage(p,Be);Qe=pt.viewport,Ee===0&&(e.setRenderTargetTextures(x,pt.colorTexture,p.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(x))}let tt=E[Ee];tt===void 0&&(tt=new Gt,tt.layers.enable(Ee),tt.viewport=new bt,E[Ee]=tt),tt.matrix.fromArray(Be.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Be.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ee===0&&(w.matrix.copy(tt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),de===!0&&w.cameras.push(tt)}const xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")){const Ee=h.getDepthInformation(ce[0]);Ee&&Ee.isValid&&Ee.texture&&g.init(e,Ee,i.renderState)}}for(let ce=0;ce<S.length;ce++){const de=y[ce],xe=S[ce];de!==null&&xe!==void 0&&xe.update(de,Y,l||a)}X&&X(j,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),_=null}const _e=new Du;_e.setAnimationLoop(K),this.setAnimationLoop=function(j){X=j},this.dispose=function(){}}}const Ai=new cn,R_=new Je;function C_(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Iu(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,x,S,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,x,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Qt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Qt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),S=x.envMap,y=x.envMapRotation;S&&(m.envMap.value=S,Ai.copy(y),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),m.envMapRotation.value.setFromMatrix4(R_.makeRotationFromEuler(Ai)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,x,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Qt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function I_(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,S){const y=S.program;n.uniformBlockBinding(x,y)}function l(x,S){let y=i[x.id];y===void 0&&(_(x),y=u(x),i[x.id]=y,x.addEventListener("dispose",m));const C=S.program;n.updateUBOMapping(x,C);const I=e.render.frame;r[x.id]!==I&&(p(x),r[x.id]=I)}function u(x){const S=h();x.__bindingPointIndex=S;const y=s.createBuffer(),C=x.__size,I=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,C,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,y),y}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const S=i[x.id],y=x.uniforms,C=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let I=0,L=y.length;I<L;I++){const D=Array.isArray(y[I])?y[I]:[y[I]];for(let E=0,w=D.length;E<w;E++){const B=D[E];if(d(B,I,E,C)===!0){const R=B.__offset,z=Array.isArray(B.value)?B.value:[B.value];let b=0;for(let W=0;W<z.length;W++){const H=z[W],Z=g(H);typeof H=="number"||typeof H=="boolean"?(B.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,R+b,B.__data)):H.isMatrix3?(B.__data[0]=H.elements[0],B.__data[1]=H.elements[1],B.__data[2]=H.elements[2],B.__data[3]=0,B.__data[4]=H.elements[3],B.__data[5]=H.elements[4],B.__data[6]=H.elements[5],B.__data[7]=0,B.__data[8]=H.elements[6],B.__data[9]=H.elements[7],B.__data[10]=H.elements[8],B.__data[11]=0):(H.toArray(B.__data,b),b+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,R,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,S,y,C){const I=x.value,L=S+"_"+y;if(C[L]===void 0)return typeof I=="number"||typeof I=="boolean"?C[L]=I:C[L]=I.clone(),!0;{const D=C[L];if(typeof I=="number"||typeof I=="boolean"){if(D!==I)return C[L]=I,!0}else if(D.equals(I)===!1)return D.copy(I),!0}return!1}function _(x){const S=x.uniforms;let y=0;const C=16;for(let L=0,D=S.length;L<D;L++){const E=Array.isArray(S[L])?S[L]:[S[L]];for(let w=0,B=E.length;w<B;w++){const R=E[w],z=Array.isArray(R.value)?R.value:[R.value];for(let b=0,W=z.length;b<W;b++){const H=z[b],Z=g(H),$=y%C,Q=$%Z.boundary,fe=$+Q;y+=Q,fe!==0&&C-fe<Z.storage&&(y+=C-fe),R.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=y,y+=Z.storage}}}const I=y%C;return I>0&&(y+=C-I),x.__size=y,x.__cache={},this}function g(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),S}function m(x){const S=x.target;S.removeEventListener("dispose",m);const y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function f(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:c,update:l,dispose:f}}class L_{constructor(e={}){const{canvas:t=xd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const x=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this.toneMapping=_i,this.toneMappingExposure=1;const y=this;let C=!1,I=0,L=0,D=null,E=-1,w=null;const B=new bt,R=new bt;let z=null;const b=new Ye(0);let W=0,H=t.width,Z=t.height,$=1,Q=null,fe=null;const X=new bt(0,0,H,Z),K=new bt(0,0,H,Z);let _e=!1;const j=new lc;let Y=!1,ce=!1;const de=new Je,xe=new Je,Ee=new q,Be=new bt,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function pt(){return D===null?$:1}let v=n;function me(F,ie){return t.getContext(F,ie)}try{const F={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qo}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),v===null){const ie="webgl2";if(v=me(ie,F),v===null)throw me(ie)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let se,V,O,J,oe,P,M,G,re,ne,ae,we,ye,Ae,ct,be,Ue,Pe,Ke,Fe,nt,it,yt,te;function Re(){se=new Fm(v),se.init(),it=new b_(v,se),V=new Im(v,se,e,it),O=new v_(v,se),V.reverseDepthBuffer&&p&&O.buffers.depth.setReversed(!0),J=new Bm(v),oe=new i_,P=new y_(v,se,O,oe,V,it,J),M=new Pm(y),G=new Um(y),re=new jd(v),yt=new Rm(v,re),ne=new Om(v,re,J,yt),ae=new Vm(v,ne,re,J),Ke=new zm(v,V,P),be=new Lm(oe),we=new n_(y,M,G,se,V,yt,be),ye=new C_(y,oe),Ae=new s_,ct=new h_(se),Pe=new Am(y,M,G,O,ae,d,c),Ue=new g_(y,ae,V),te=new I_(v,J,V,O),Fe=new Cm(v,se,J),nt=new km(v,se,J),J.programs=we.programs,y.capabilities=V,y.extensions=se,y.properties=oe,y.renderLists=Ae,y.shadowMap=Ue,y.state=O,y.info=J}Re();const pe=new A_(y,v);this.xr=pe,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const F=se.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=se.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(F){F!==void 0&&($=F,this.setSize(H,Z,!1))},this.getSize=function(F){return F.set(H,Z)},this.setSize=function(F,ie,le=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=F,Z=ie,t.width=Math.floor(F*$),t.height=Math.floor(ie*$),le===!0&&(t.style.width=F+"px",t.style.height=ie+"px"),this.setViewport(0,0,F,ie)},this.getDrawingBufferSize=function(F){return F.set(H*$,Z*$).floor()},this.setDrawingBufferSize=function(F,ie,le){H=F,Z=ie,$=le,t.width=Math.floor(F*le),t.height=Math.floor(ie*le),this.setViewport(0,0,F,ie)},this.getCurrentViewport=function(F){return F.copy(B)},this.getViewport=function(F){return F.copy(X)},this.setViewport=function(F,ie,le,ue){F.isVector4?X.set(F.x,F.y,F.z,F.w):X.set(F,ie,le,ue),O.viewport(B.copy(X).multiplyScalar($).round())},this.getScissor=function(F){return F.copy(K)},this.setScissor=function(F,ie,le,ue){F.isVector4?K.set(F.x,F.y,F.z,F.w):K.set(F,ie,le,ue),O.scissor(R.copy(K).multiplyScalar($).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(F){O.setScissorTest(_e=F)},this.setOpaqueSort=function(F){Q=F},this.setTransparentSort=function(F){fe=F},this.getClearColor=function(F){return F.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(F=!0,ie=!0,le=!0){let ue=0;if(F){let ee=!1;if(D!==null){const Se=D.texture.format;ee=Se===ac||Se===sc||Se===rc}if(ee){const Se=D.texture.type,Le=Se===ni||Se===Fi||Se===Kr||Se===vr||Se===tc||Se===nc,Ve=Pe.getClearColor(),He=Pe.getClearAlpha(),et=Ve.r,ot=Ve.g,Ge=Ve.b;Le?(_[0]=et,_[1]=ot,_[2]=Ge,_[3]=He,v.clearBufferuiv(v.COLOR,0,_)):(g[0]=et,g[1]=ot,g[2]=Ge,g[3]=He,v.clearBufferiv(v.COLOR,0,g))}else ue|=v.COLOR_BUFFER_BIT}ie&&(ue|=v.DEPTH_BUFFER_BIT),le&&(ue|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Ae.dispose(),ct.dispose(),oe.dispose(),M.dispose(),G.dispose(),ae.dispose(),yt.dispose(),te.dispose(),we.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",ss),pe.removeEventListener("sessionend",as),Gn.stop()};function ve(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const F=J.autoReset,ie=Ue.enabled,le=Ue.autoUpdate,ue=Ue.needsUpdate,ee=Ue.type;Re(),J.autoReset=F,Ue.enabled=ie,Ue.autoUpdate=le,Ue.needsUpdate=ue,Ue.type=ee}function Ne(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function at(F){const ie=F.target;ie.removeEventListener("dispose",at),It(ie)}function It(F){zt(F),oe.remove(F)}function zt(F){const ie=oe.get(F).programs;ie!==void 0&&(ie.forEach(function(le){we.releaseProgram(le)}),F.isShaderMaterial&&we.releaseShaderCache(F))}this.renderBufferDirect=function(F,ie,le,ue,ee,Se){ie===null&&(ie=Qe);const Le=ee.isMesh&&ee.matrixWorld.determinant()<0,Ve=ya(F,ie,le,ue,ee);O.setMaterial(ue,Le);let He=le.index,et=1;if(ue.wireframe===!0){if(He=ne.getWireframeAttribute(le),He===void 0)return;et=2}const ot=le.drawRange,Ge=le.attributes.position;let mt=ot.start*et,Et=(ot.start+ot.count)*et;Se!==null&&(mt=Math.max(mt,Se.start*et),Et=Math.min(Et,(Se.start+Se.count)*et)),He!==null?(mt=Math.max(mt,0),Et=Math.min(Et,He.count)):Ge!=null&&(mt=Math.max(mt,0),Et=Math.min(Et,Ge.count));const At=Et-mt;if(At<0||At===1/0)return;yt.setup(ee,ue,Ve,le,He);let Ut,_t=Fe;if(He!==null&&(Ut=re.get(He),_t=nt,_t.setIndex(Ut)),ee.isMesh)ue.wireframe===!0?(O.setLineWidth(ue.wireframeLinewidth*pt()),_t.setMode(v.LINES)):_t.setMode(v.TRIANGLES);else if(ee.isLine){let We=ue.linewidth;We===void 0&&(We=1),O.setLineWidth(We*pt()),ee.isLineSegments?_t.setMode(v.LINES):ee.isLineLoop?_t.setMode(v.LINE_LOOP):_t.setMode(v.LINE_STRIP)}else ee.isPoints?_t.setMode(v.POINTS):ee.isSprite&&_t.setMode(v.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)_t.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))_t.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const We=ee._multiDrawStarts,Mn=ee._multiDrawCounts,gt=ee._multiDrawCount,ln=He?re.get(He).bytesPerElement:1,ri=oe.get(ue).currentProgram.getUniforms();for(let Kt=0;Kt<gt;Kt++)ri.setValue(v,"_gl_DrawID",Kt),_t.render(We[Kt]/ln,Mn[Kt])}else if(ee.isInstancedMesh)_t.renderInstances(mt,At,ee.count);else if(le.isInstancedBufferGeometry){const We=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Mn=Math.min(le.instanceCount,We);_t.renderInstances(mt,At,Mn)}else _t.render(mt,At)};function lt(F,ie,le){F.transparent===!0&&F.side===_n&&F.forceSinglePass===!1?(F.side=Qt,F.needsUpdate=!0,Hi(F,ie,le),F.side=Bn,F.needsUpdate=!0,Hi(F,ie,le),F.side=_n):Hi(F,ie,le)}this.compile=function(F,ie,le=null){le===null&&(le=F),f=ct.get(le),f.init(ie),S.push(f),le.traverseVisible(function(ee){ee.isLight&&ee.layers.test(ie.layers)&&(f.pushLight(ee),ee.castShadow&&f.pushShadow(ee))}),F!==le&&F.traverseVisible(function(ee){ee.isLight&&ee.layers.test(ie.layers)&&(f.pushLight(ee),ee.castShadow&&f.pushShadow(ee))}),f.setupLights();const ue=new Set;return F.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Se=ee.material;if(Se)if(Array.isArray(Se))for(let Le=0;Le<Se.length;Le++){const Ve=Se[Le];lt(Ve,le,ee),ue.add(Ve)}else lt(Se,le,ee),ue.add(Se)}),S.pop(),f=null,ue},this.compileAsync=function(F,ie,le=null){const ue=this.compile(F,ie,le);return new Promise(ee=>{function Se(){if(ue.forEach(function(Le){oe.get(Le).currentProgram.isReady()&&ue.delete(Le)}),ue.size===0){ee(F);return}setTimeout(Se,10)}se.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let rn=null;function bn(F){rn&&rn(F)}function ss(){Gn.stop()}function as(){Gn.start()}const Gn=new Du;Gn.setAnimationLoop(bn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(F){rn=F,pe.setAnimationLoop(F),F===null?Gn.stop():Gn.start()},pe.addEventListener("sessionstart",ss),pe.addEventListener("sessionend",as),this.render=function(F,ie){if(ie!==void 0&&ie.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ie.parent===null&&ie.matrixWorldAutoUpdate===!0&&ie.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(ie),ie=pe.getCamera()),F.isScene===!0&&F.onBeforeRender(y,F,ie,D),f=ct.get(F,S.length),f.init(ie),S.push(f),xe.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),j.setFromProjectionMatrix(xe),ce=this.localClippingEnabled,Y=be.init(this.clippingPlanes,ce),m=Ae.get(F,x.length),m.init(),x.push(m),pe.enabled===!0&&pe.isPresenting===!0){const Se=y.xr.getDepthSensingMesh();Se!==null&&Ir(Se,ie,-1/0,y.sortObjects)}Ir(F,ie,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Q,fe),tt=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,tt&&Pe.addToRenderList(m,F),this.info.render.frame++,Y===!0&&be.beginShadows();const le=f.state.shadowsArray;Ue.render(le,F,ie),Y===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=m.opaque,ee=m.transmissive;if(f.setupLights(),ie.isArrayCamera){const Se=ie.cameras;if(ee.length>0)for(let Le=0,Ve=Se.length;Le<Ve;Le++){const He=Se[Le];Lr(ue,ee,F,He)}tt&&Pe.render(F);for(let Le=0,Ve=Se.length;Le<Ve;Le++){const He=Se[Le];os(m,F,He,He.viewport)}}else ee.length>0&&Lr(ue,ee,F,ie),tt&&Pe.render(F),os(m,F,ie);D!==null&&(P.updateMultisampleRenderTarget(D),P.updateRenderTargetMipmap(D)),F.isScene===!0&&F.onAfterRender(y,F,ie),yt.resetDefaultState(),E=-1,w=null,S.pop(),S.length>0?(f=S[S.length-1],Y===!0&&be.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Ir(F,ie,le,ue){if(F.visible===!1)return;if(F.layers.test(ie.layers)){if(F.isGroup)le=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(ie);else if(F.isLight)f.pushLight(F),F.castShadow&&f.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||j.intersectsSprite(F)){ue&&Be.setFromMatrixPosition(F.matrixWorld).applyMatrix4(xe);const Le=ae.update(F),Ve=F.material;Ve.visible&&m.push(F,Le,Ve,le,Be.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||j.intersectsObject(F))){const Le=ae.update(F),Ve=F.material;if(ue&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),Be.copy(F.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Be.copy(Le.boundingSphere.center)),Be.applyMatrix4(F.matrixWorld).applyMatrix4(xe)),Array.isArray(Ve)){const He=Le.groups;for(let et=0,ot=He.length;et<ot;et++){const Ge=He[et],mt=Ve[Ge.materialIndex];mt&&mt.visible&&m.push(F,Le,mt,le,Be.z,Ge)}}else Ve.visible&&m.push(F,Le,Ve,le,Be.z,null)}}const Se=F.children;for(let Le=0,Ve=Se.length;Le<Ve;Le++)Ir(Se[Le],ie,le,ue)}function os(F,ie,le,ue){const ee=F.opaque,Se=F.transmissive,Le=F.transparent;f.setupLightsView(le),Y===!0&&be.setGlobalState(y.clippingPlanes,le),ue&&O.viewport(B.copy(ue)),ee.length>0&&Vi(ee,ie,le),Se.length>0&&Vi(Se,ie,le),Le.length>0&&Vi(Le,ie,le),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Lr(F,ie,le,ue){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[ue.id]===void 0&&(f.state.transmissionRenderTarget[ue.id]=new Oi(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?ns:ni,minFilter:In,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const Se=f.state.transmissionRenderTarget[ue.id],Le=ue.viewport||B;Se.setSize(Le.z,Le.w);const Ve=y.getRenderTarget();y.setRenderTarget(Se),y.getClearColor(b),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),tt&&Pe.render(le);const He=y.toneMapping;y.toneMapping=_i;const et=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),f.setupLightsView(ue),Y===!0&&be.setGlobalState(y.clippingPlanes,ue),Vi(F,le,ue),P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se),se.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Ge=0,mt=ie.length;Ge<mt;Ge++){const Et=ie[Ge],At=Et.object,Ut=Et.geometry,_t=Et.material,We=Et.group;if(_t.side===_n&&At.layers.test(ue.layers)){const Mn=_t.side;_t.side=Qt,_t.needsUpdate=!0,Pr(At,le,ue,Ut,_t,We),_t.side=Mn,_t.needsUpdate=!0,ot=!0}}ot===!0&&(P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se))}y.setRenderTarget(Ve),y.setClearColor(b,W),et!==void 0&&(ue.viewport=et),y.toneMapping=He}function Vi(F,ie,le){const ue=ie.isScene===!0?ie.overrideMaterial:null;for(let ee=0,Se=F.length;ee<Se;ee++){const Le=F[ee],Ve=Le.object,He=Le.geometry,et=ue===null?Le.material:ue,ot=Le.group;Ve.layers.test(le.layers)&&Pr(Ve,ie,le,He,et,ot)}}function Pr(F,ie,le,ue,ee,Se){F.onBeforeRender(y,ie,le,ue,ee,Se),F.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),ee.onBeforeRender(y,ie,le,ue,F,Se),ee.transparent===!0&&ee.side===_n&&ee.forceSinglePass===!1?(ee.side=Qt,ee.needsUpdate=!0,y.renderBufferDirect(le,ie,ue,ee,F,Se),ee.side=Bn,ee.needsUpdate=!0,y.renderBufferDirect(le,ie,ue,ee,F,Se),ee.side=_n):y.renderBufferDirect(le,ie,ue,ee,F,Se),F.onAfterRender(y,ie,le,ue,ee,Se)}function Hi(F,ie,le){ie.isScene!==!0&&(ie=Qe);const ue=oe.get(F),ee=f.state.lights,Se=f.state.shadowsArray,Le=ee.state.version,Ve=we.getParameters(F,ee.state,Se,ie,le),He=we.getProgramCacheKey(Ve);let et=ue.programs;ue.environment=F.isMeshStandardMaterial?ie.environment:null,ue.fog=ie.fog,ue.envMap=(F.isMeshStandardMaterial?G:M).get(F.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&F.envMap===null?ie.environmentRotation:F.envMapRotation,et===void 0&&(F.addEventListener("dispose",at),et=new Map,ue.programs=et);let ot=et.get(He);if(ot!==void 0){if(ue.currentProgram===ot&&ue.lightsStateVersion===Le)return ls(F,Ve),ot}else Ve.uniforms=we.getUniforms(F),F.onBeforeCompile(Ve,y),ot=we.acquireProgram(Ve,He),et.set(He,ot),ue.uniforms=Ve.uniforms;const Ge=ue.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Ge.clippingPlanes=be.uniform),ls(F,Ve),ue.needsLights=Ma(F),ue.lightsStateVersion=Le,ue.needsLights&&(Ge.ambientLightColor.value=ee.state.ambient,Ge.lightProbe.value=ee.state.probe,Ge.directionalLights.value=ee.state.directional,Ge.directionalLightShadows.value=ee.state.directionalShadow,Ge.spotLights.value=ee.state.spot,Ge.spotLightShadows.value=ee.state.spotShadow,Ge.rectAreaLights.value=ee.state.rectArea,Ge.ltc_1.value=ee.state.rectAreaLTC1,Ge.ltc_2.value=ee.state.rectAreaLTC2,Ge.pointLights.value=ee.state.point,Ge.pointLightShadows.value=ee.state.pointShadow,Ge.hemisphereLights.value=ee.state.hemi,Ge.directionalShadowMap.value=ee.state.directionalShadowMap,Ge.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ge.spotShadowMap.value=ee.state.spotShadowMap,Ge.spotLightMatrix.value=ee.state.spotLightMatrix,Ge.spotLightMap.value=ee.state.spotLightMap,Ge.pointShadowMap.value=ee.state.pointShadowMap,Ge.pointShadowMatrix.value=ee.state.pointShadowMatrix),ue.currentProgram=ot,ue.uniformsList=null,ot}function cs(F){if(F.uniformsList===null){const ie=F.currentProgram.getUniforms();F.uniformsList=$s.seqWithValue(ie.seq,F.uniforms)}return F.uniformsList}function ls(F,ie){const le=oe.get(F);le.outputColorSpace=ie.outputColorSpace,le.batching=ie.batching,le.batchingColor=ie.batchingColor,le.instancing=ie.instancing,le.instancingColor=ie.instancingColor,le.instancingMorph=ie.instancingMorph,le.skinning=ie.skinning,le.morphTargets=ie.morphTargets,le.morphNormals=ie.morphNormals,le.morphColors=ie.morphColors,le.morphTargetsCount=ie.morphTargetsCount,le.numClippingPlanes=ie.numClippingPlanes,le.numIntersection=ie.numClipIntersection,le.vertexAlphas=ie.vertexAlphas,le.vertexTangents=ie.vertexTangents,le.toneMapping=ie.toneMapping}function ya(F,ie,le,ue,ee){ie.isScene!==!0&&(ie=Qe),P.resetTextureUnits();const Se=ie.fog,Le=ue.isMeshStandardMaterial?ie.environment:null,Ve=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:nn,He=(ue.isMeshStandardMaterial?G:M).get(ue.envMap||Le),et=ue.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,ot=!!le.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Ge=!!le.morphAttributes.position,mt=!!le.morphAttributes.normal,Et=!!le.morphAttributes.color;let At=_i;ue.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(At=y.toneMapping);const Ut=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,_t=Ut!==void 0?Ut.length:0,We=oe.get(ue),Mn=f.state.lights;if(Y===!0&&(ce===!0||F!==w)){const Zt=F===w&&ue.id===E;be.setState(ue,F,Zt)}let gt=!1;ue.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Mn.state.version||We.outputColorSpace!==Ve||ee.isBatchedMesh&&We.batching===!1||!ee.isBatchedMesh&&We.batching===!0||ee.isBatchedMesh&&We.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&We.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&We.instancing===!1||!ee.isInstancedMesh&&We.instancing===!0||ee.isSkinnedMesh&&We.skinning===!1||!ee.isSkinnedMesh&&We.skinning===!0||ee.isInstancedMesh&&We.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&We.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&We.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&We.instancingMorph===!1&&ee.morphTexture!==null||We.envMap!==He||ue.fog===!0&&We.fog!==Se||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==be.numPlanes||We.numIntersection!==be.numIntersection)||We.vertexAlphas!==et||We.vertexTangents!==ot||We.morphTargets!==Ge||We.morphNormals!==mt||We.morphColors!==Et||We.toneMapping!==At||We.morphTargetsCount!==_t)&&(gt=!0):(gt=!0,We.__version=ue.version);let ln=We.currentProgram;gt===!0&&(ln=Hi(ue,ie,ee));let ri=!1,Kt=!1,si=!1;const rt=ln.getUniforms(),sn=We.uniforms;if(O.useProgram(ln.program)&&(ri=!0,Kt=!0,si=!0),ue.id!==E&&(E=ue.id,Kt=!0),ri||w!==F){O.buffers.depth.getReversed()?(de.copy(F.projectionMatrix),bd(de),Md(de),rt.setValue(v,"projectionMatrix",de)):rt.setValue(v,"projectionMatrix",F.projectionMatrix),rt.setValue(v,"viewMatrix",F.matrixWorldInverse);const Sn=rt.map.cameraPosition;Sn!==void 0&&Sn.setValue(v,Ee.setFromMatrixPosition(F.matrixWorld)),V.logarithmicDepthBuffer&&rt.setValue(v,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&rt.setValue(v,"isOrthographic",F.isOrthographicCamera===!0),w!==F&&(w=F,Kt=!0,si=!0)}if(ee.isSkinnedMesh){rt.setOptional(v,ee,"bindMatrix"),rt.setOptional(v,ee,"bindMatrixInverse");const Zt=ee.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),rt.setValue(v,"boneTexture",Zt.boneTexture,P))}ee.isBatchedMesh&&(rt.setOptional(v,ee,"batchingTexture"),rt.setValue(v,"batchingTexture",ee._matricesTexture,P),rt.setOptional(v,ee,"batchingIdTexture"),rt.setValue(v,"batchingIdTexture",ee._indirectTexture,P),rt.setOptional(v,ee,"batchingColorTexture"),ee._colorsTexture!==null&&rt.setValue(v,"batchingColorTexture",ee._colorsTexture,P));const yi=le.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&Ke.update(ee,le,ln),(Kt||We.receiveShadow!==ee.receiveShadow)&&(We.receiveShadow=ee.receiveShadow,rt.setValue(v,"receiveShadow",ee.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(sn.envMap.value=He,sn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&ie.environment!==null&&(sn.envMapIntensity.value=ie.environmentIntensity),Kt&&(rt.setValue(v,"toneMappingExposure",y.toneMappingExposure),We.needsLights&&ba(sn,si),Se&&ue.fog===!0&&ye.refreshFogUniforms(sn,Se),ye.refreshMaterialUniforms(sn,ue,$,Z,f.state.transmissionRenderTarget[F.id]),$s.upload(v,cs(We),sn,P)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&($s.upload(v,cs(We),sn,P),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&rt.setValue(v,"center",ee.center),rt.setValue(v,"modelViewMatrix",ee.modelViewMatrix),rt.setValue(v,"normalMatrix",ee.normalMatrix),rt.setValue(v,"modelMatrix",ee.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const Zt=ue.uniformsGroups;for(let Sn=0,fn=Zt.length;Sn<fn;Sn++){const bi=Zt[Sn];te.update(bi,ln),te.bind(bi,ln)}}return ln}function ba(F,ie){F.ambientLightColor.needsUpdate=ie,F.lightProbe.needsUpdate=ie,F.directionalLights.needsUpdate=ie,F.directionalLightShadows.needsUpdate=ie,F.pointLights.needsUpdate=ie,F.pointLightShadows.needsUpdate=ie,F.spotLights.needsUpdate=ie,F.spotLightShadows.needsUpdate=ie,F.rectAreaLights.needsUpdate=ie,F.hemisphereLights.needsUpdate=ie}function Ma(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(F,ie,le){oe.get(F.texture).__webglTexture=ie,oe.get(F.depthTexture).__webglTexture=le;const ue=oe.get(F);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=le===void 0,ue.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(F,ie){const le=oe.get(F);le.__webglFramebuffer=ie,le.__useDefaultFramebuffer=ie===void 0},this.setRenderTarget=function(F,ie=0,le=0){D=F,I=ie,L=le;let ue=!0,ee=null,Se=!1,Le=!1;if(F){const He=oe.get(F);if(He.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(v.FRAMEBUFFER,null),ue=!1;else if(He.__webglFramebuffer===void 0)P.setupRenderTarget(F);else if(He.__hasExternalTextures)P.rebindTextures(F,oe.get(F.texture).__webglTexture,oe.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){const Ge=F.depthTexture;if(He.__boundDepthTexture!==Ge){if(Ge!==null&&oe.has(Ge)&&(F.width!==Ge.image.width||F.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(F)}}const et=F.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Le=!0);const ot=oe.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(ot[ie])?ee=ot[ie][le]:ee=ot[ie],Se=!0):F.samples>0&&P.useMultisampledRTT(F)===!1?ee=oe.get(F).__webglMultisampledFramebuffer:Array.isArray(ot)?ee=ot[le]:ee=ot,B.copy(F.viewport),R.copy(F.scissor),z=F.scissorTest}else B.copy(X).multiplyScalar($).floor(),R.copy(K).multiplyScalar($).floor(),z=_e;if(O.bindFramebuffer(v.FRAMEBUFFER,ee)&&ue&&O.drawBuffers(F,ee),O.viewport(B),O.scissor(R),O.setScissorTest(z),Se){const He=oe.get(F.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+ie,He.__webglTexture,le)}else if(Le){const He=oe.get(F.texture),et=ie||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,He.__webglTexture,le||0,et)}E=-1},this.readRenderTargetPixels=function(F,ie,le,ue,ee,Se,Le){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=oe.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Le!==void 0&&(Ve=Ve[Le]),Ve){O.bindFramebuffer(v.FRAMEBUFFER,Ve);try{const He=F.texture,et=He.format,ot=He.type;if(!V.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ie>=0&&ie<=F.width-ue&&le>=0&&le<=F.height-ee&&v.readPixels(ie,le,ue,ee,it.convert(et),it.convert(ot),Se)}finally{const He=D!==null?oe.get(D).__webglFramebuffer:null;O.bindFramebuffer(v.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(F,ie,le,ue,ee,Se,Le){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=oe.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Le!==void 0&&(Ve=Ve[Le]),Ve){const He=F.texture,et=He.format,ot=He.type;if(!V.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(ie>=0&&ie<=F.width-ue&&le>=0&&le<=F.height-ee){O.bindFramebuffer(v.FRAMEBUFFER,Ve);const Ge=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,Ge),v.bufferData(v.PIXEL_PACK_BUFFER,Se.byteLength,v.STREAM_READ),v.readPixels(ie,le,ue,ee,it.convert(et),it.convert(ot),0);const mt=D!==null?oe.get(D).__webglFramebuffer:null;O.bindFramebuffer(v.FRAMEBUFFER,mt);const Et=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await yd(v,Et,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,Ge),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,Se),v.deleteBuffer(Ge),v.deleteSync(Et),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(F,ie=null,le=0){F.isTexture!==!0&&(jr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),ie=arguments[0]||null,F=arguments[1]);const ue=Math.pow(2,-le),ee=Math.floor(F.image.width*ue),Se=Math.floor(F.image.height*ue),Le=ie!==null?ie.x:0,Ve=ie!==null?ie.y:0;P.setTexture2D(F,0),v.copyTexSubImage2D(v.TEXTURE_2D,le,0,0,Le,Ve,ee,Se),O.unbindTexture()},this.copyTextureToTexture=function(F,ie,le=null,ue=null,ee=0){F.isTexture!==!0&&(jr("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,F=arguments[1],ie=arguments[2],ee=arguments[3]||0,le=null);let Se,Le,Ve,He,et,ot,Ge,mt,Et;const At=F.isCompressedTexture?F.mipmaps[ee]:F.image;le!==null?(Se=le.max.x-le.min.x,Le=le.max.y-le.min.y,Ve=le.isBox3?le.max.z-le.min.z:1,He=le.min.x,et=le.min.y,ot=le.isBox3?le.min.z:0):(Se=At.width,Le=At.height,Ve=At.depth||1,He=0,et=0,ot=0),ue!==null?(Ge=ue.x,mt=ue.y,Et=ue.z):(Ge=0,mt=0,Et=0);const Ut=it.convert(ie.format),_t=it.convert(ie.type);let We;ie.isData3DTexture?(P.setTexture3D(ie,0),We=v.TEXTURE_3D):ie.isDataArrayTexture||ie.isCompressedArrayTexture?(P.setTexture2DArray(ie,0),We=v.TEXTURE_2D_ARRAY):(P.setTexture2D(ie,0),We=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,ie.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,ie.unpackAlignment);const Mn=v.getParameter(v.UNPACK_ROW_LENGTH),gt=v.getParameter(v.UNPACK_IMAGE_HEIGHT),ln=v.getParameter(v.UNPACK_SKIP_PIXELS),ri=v.getParameter(v.UNPACK_SKIP_ROWS),Kt=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,At.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,At.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,He),v.pixelStorei(v.UNPACK_SKIP_ROWS,et),v.pixelStorei(v.UNPACK_SKIP_IMAGES,ot);const si=F.isDataArrayTexture||F.isData3DTexture,rt=ie.isDataArrayTexture||ie.isData3DTexture;if(F.isRenderTargetTexture||F.isDepthTexture){const sn=oe.get(F),yi=oe.get(ie),Zt=oe.get(sn.__renderTarget),Sn=oe.get(yi.__renderTarget);O.bindFramebuffer(v.READ_FRAMEBUFFER,Zt.__webglFramebuffer),O.bindFramebuffer(v.DRAW_FRAMEBUFFER,Sn.__webglFramebuffer);for(let fn=0;fn<Ve;fn++)si&&v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,oe.get(F).__webglTexture,ee,ot+fn),F.isDepthTexture?(rt&&v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,oe.get(ie).__webglTexture,ee,Et+fn),v.blitFramebuffer(He,et,Se,Le,Ge,mt,Se,Le,v.DEPTH_BUFFER_BIT,v.NEAREST)):rt?v.copyTexSubImage3D(We,ee,Ge,mt,Et+fn,He,et,Se,Le):v.copyTexSubImage2D(We,ee,Ge,mt,Et+fn,He,et,Se,Le);O.bindFramebuffer(v.READ_FRAMEBUFFER,null),O.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else rt?F.isDataTexture||F.isData3DTexture?v.texSubImage3D(We,ee,Ge,mt,Et,Se,Le,Ve,Ut,_t,At.data):ie.isCompressedArrayTexture?v.compressedTexSubImage3D(We,ee,Ge,mt,Et,Se,Le,Ve,Ut,At.data):v.texSubImage3D(We,ee,Ge,mt,Et,Se,Le,Ve,Ut,_t,At):F.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,ee,Ge,mt,Se,Le,Ut,_t,At.data):F.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,ee,Ge,mt,At.width,At.height,Ut,At.data):v.texSubImage2D(v.TEXTURE_2D,ee,Ge,mt,Se,Le,Ut,_t,At);v.pixelStorei(v.UNPACK_ROW_LENGTH,Mn),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,gt),v.pixelStorei(v.UNPACK_SKIP_PIXELS,ln),v.pixelStorei(v.UNPACK_SKIP_ROWS,ri),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Kt),ee===0&&ie.generateMipmaps&&v.generateMipmap(We),O.unbindTexture()},this.copyTextureToTexture3D=function(F,ie,le=null,ue=null,ee=0){return F.isTexture!==!0&&(jr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,ue=arguments[1]||null,F=arguments[2],ie=arguments[3],ee=arguments[4]||0),jr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(F,ie,le,ue,ee)},this.initRenderTarget=function(F){oe.get(F).__webglFramebuffer===void 0&&P.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?P.setTextureCube(F,0):F.isData3DTexture?P.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?P.setTexture2DArray(F,0):P.setTexture2D(F,0),O.unbindTexture()},this.resetState=function(){I=0,L=0,D=null,O.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}class zu extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class P_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qo,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new q;class hc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Sl=new q,El=new bt,wl=new bt,N_=new q,Tl=new Je,Ps=new q,Ja=new zn,Al=new Je,$a=new da;class Vu extends Lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Rc,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Dn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ps),this.boundingBox.expandByPoint(Ps)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ps),this.boundingSphere.expandByPoint(Ps)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ja.copy(this.boundingSphere),Ja.applyMatrix4(i),e.ray.intersectsSphere(Ja)!==!1&&(Al.copy(i).invert(),$a.copy(e.ray).applyMatrix4(Al),!(this.boundingBox!==null&&$a.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,$a)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new bt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Rc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;El.fromBufferAttribute(i.attributes.skinIndex,e),wl.fromBufferAttribute(i.attributes.skinWeight,e),Sl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=wl.getComponent(r);if(a!==0){const o=El.getComponent(r);Tl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(N_.copy(Sl).applyMatrix4(Tl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class dc extends Pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class fc extends Ot{constructor(e=null,t=1,n=1,i,r,a,o,c,l=en,u=en,h,p){super(null,a,o,c,l,u,i,r,h,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rl=new Je,D_=new Je;class ma{constructor(e=[],t=[]){this.uuid=Pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:D_;Rl.multiplyMatrices(o,t[r]),Rl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ma(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new fc(t,e,e,yn,Ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new dc),this.bones.push(a),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Ko extends Ht{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const rr=new Je,Cl=new Je,Ns=[],Il=new Dn,U_=new Je,Or=new Lt,kr=new zn;class F_ extends Lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ko(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,U_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),Il.copy(e.boundingBox).applyMatrix4(rr),this.boundingBox.union(Il)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),kr.copy(e.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(kr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Or.geometry=this.geometry,Or.material=this.material,Or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kr.copy(this.boundingSphere),kr.applyMatrix4(n),e.ray.intersectsSphere(kr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,rr),Cl.multiplyMatrices(n,rr),Or.matrixWorld=Cl,Or.raycast(e,Ns);for(let a=0,o=Ns.length;a<o;a++){const c=Ns[a];c.instanceId=r,c.object=this,t.push(c)}Ns.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ko(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new fc(new Float32Array(i*this.count),i,this.count,ic,Ln));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Di extends on{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ia=new q,ra=new q,Ll=new Je,Br=new da,Ds=new zn,Qa=new q,Pl=new q;class ga extends Pt{constructor(e=new Wt,t=new Di){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ia.fromBufferAttribute(t,i-1),ra.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ia.distanceTo(ra);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(i),Ds.radius+=r,e.ray.intersectsSphere(Ds)===!1)return;Ll.copy(i).invert(),Br.copy(e.ray).applyMatrix4(Ll);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=d,m=_-1;g<m;g+=l){const f=u.getX(g),x=u.getX(g+1),S=Us(this,e,Br,c,f,x);S&&t.push(S)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(d),f=Us(this,e,Br,c,g,m);f&&t.push(f)}}else{const d=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let g=d,m=_-1;g<m;g+=l){const f=Us(this,e,Br,c,g,g+1);f&&t.push(f)}if(this.isLineLoop){const g=Us(this,e,Br,c,_-1,d);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Us(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(ia.fromBufferAttribute(a,i),ra.fromBufferAttribute(a,r),t.distanceSqToSegment(ia,ra,Qa,Pl)>n)return;Qa.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Qa);if(!(c<e.near||c>e.far))return{distance:c,point:Pl.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Nl=new q,Dl=new q;class sa extends ga{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Nl.fromBufferAttribute(t,i),Dl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Nl.distanceTo(Dl);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class O_ extends ga{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class lr extends on{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ul=new Je,Zo=new da,Fs=new zn,Os=new q;class Qs extends Pt{constructor(e=new Wt,t=new lr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(i),Fs.radius+=r,e.ray.intersectsSphere(Fs)===!1)return;Ul.copy(i).invert(),Zo.copy(e.ray).applyMatrix4(Ul);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const p=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let _=p,g=d;_<g;_++){const m=l.getX(_);Os.fromBufferAttribute(h,m),Fl(Os,m,c,i,e,t,this)}}else{const p=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let _=p,g=d;_<g;_++)Os.fromBufferAttribute(h,_),Fl(Os,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Fl(s,e,t,n,i,r,a){const o=Zo.distanceSqToPoint(s);if(o<t){const c=new q;Zo.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Hu extends Ot{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pc extends Wt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],p=[],d=[];let _=0;const g=[],m=n/2;let f=0;x(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new St(h,3)),this.setAttribute("normal",new St(p,3)),this.setAttribute("uv",new St(d,2));function x(){const y=new q,C=new q;let I=0;const L=(t-e)/n;for(let D=0;D<=r;D++){const E=[],w=D/r,B=w*(t-e)+e;for(let R=0;R<=i;R++){const z=R/i,b=z*c+o,W=Math.sin(b),H=Math.cos(b);C.x=B*W,C.y=-w*n+m,C.z=B*H,h.push(C.x,C.y,C.z),y.set(W,L,H).normalize(),p.push(y.x,y.y,y.z),d.push(z,1-w),E.push(_++)}g.push(E)}for(let D=0;D<i;D++)for(let E=0;E<r;E++){const w=g[E][D],B=g[E+1][D],R=g[E+1][D+1],z=g[E][D+1];(e>0||E!==0)&&(u.push(w,B,z),I+=3),(t>0||E!==r-1)&&(u.push(B,R,z),I+=3)}l.addGroup(f,I,0),f+=I}function S(y){const C=_,I=new st,L=new q;let D=0;const E=y===!0?e:t,w=y===!0?1:-1;for(let R=1;R<=i;R++)h.push(0,m*w,0),p.push(0,w,0),d.push(.5,.5),_++;const B=_;for(let R=0;R<=i;R++){const b=R/i*c+o,W=Math.cos(b),H=Math.sin(b);L.x=E*H,L.y=m*w,L.z=E*W,h.push(L.x,L.y,L.z),p.push(0,w,0),I.x=W*.5+.5,I.y=H*.5*w+.5,d.push(I.x,I.y),_++}for(let R=0;R<i;R++){const z=C+R,b=B+R;y===!0?u.push(b,b+1,z):u.push(b+1,b,z),D+=3}l.addGroup(f,D,y===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mc extends Wt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new q,p=new q,d=[],_=[],g=[],m=[];for(let f=0;f<=n;f++){const x=[],S=f/n;let y=0;f===0&&a===0?y=.5/t:f===n&&c===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const I=C/t;h.x=-e*Math.cos(i+I*r)*Math.sin(a+S*o),h.y=e*Math.cos(a+S*o),h.z=e*Math.sin(i+I*r)*Math.sin(a+S*o),_.push(h.x,h.y,h.z),p.copy(h).normalize(),g.push(p.x,p.y,p.z),m.push(I+y,1-S),x.push(l++)}u.push(x)}for(let f=0;f<n;f++)for(let x=0;x<t;x++){const S=u[f][x+1],y=u[f][x],C=u[f+1][x],I=u[f+1][x+1];(f!==0||a>0)&&d.push(S,y,I),(f!==n-1||c<Math.PI)&&d.push(y,C,I)}this.setIndex(d),this.setAttribute("position",new St(_,3)),this.setAttribute("normal",new St(g,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tr extends on{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vn extends Tr{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class fr extends on{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Ye(16777215),this.specular=new Ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class k_ extends on{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ks(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function B_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function z_(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ol(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Gu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class is{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class V_ extends is{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ar,endingEnd:ar}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case or:r=e,o=2*t-n;break;case ta:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case or:a=e,c=2*n-t;break;case ta:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,p=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,f=-p*m+2*p*g-p*_,x=(1+p)*m+(-1.5-2*p)*g+(-.5+p)*_+1,S=(-1-d)*m+(1.5+d)*g+.5*_,y=d*m-d*g;for(let C=0;C!==o;++C)r[C]=f*a[u+C]+x*a[l+C]+S*a[c+C]+y*a[h+C];return r}}class Wu extends is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),h=1-u;for(let p=0;p!==o;++p)r[p]=a[l+p]*h+a[c+p]*u;return r}}class H_ extends is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Hn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ks(t,this.TimeBufferType),this.values=ks(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ks(e.times,Array),values:ks(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new H_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new V_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Zr:t=this.InterpolantFactoryMethodDiscrete;break;case Jr:t=this.InterpolantFactoryMethodLinear;break;case Sa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zr;case this.InterpolantFactoryMethodLinear:return Jr;case this.InterpolantFactoryMethodSmooth:return Sa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&B_(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Sa,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{const h=o*n,p=h-n,d=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[p+_]||g!==t[d+_]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,p=a*n;for(let d=0;d!==n;++d)t[p+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Jr;class Ar extends Hn{constructor(e,t,n){super(e,t,n)}}Ar.prototype.ValueTypeName="bool";Ar.prototype.ValueBufferType=Array;Ar.prototype.DefaultInterpolation=Zr;Ar.prototype.InterpolantFactoryMethodLinear=void 0;Ar.prototype.InterpolantFactoryMethodSmooth=void 0;class ju extends Hn{}ju.prototype.ValueTypeName="color";class Mr extends Hn{}Mr.prototype.ValueTypeName="number";class G_ extends is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let u=l+o;l!==u;l+=4)tn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class ki extends Hn{InterpolantFactoryMethodLinear(e){return new G_(this.times,this.values,this.getValueSize(),e)}}ki.prototype.ValueTypeName="quaternion";ki.prototype.InterpolantFactoryMethodSmooth=void 0;class Rr extends Hn{constructor(e,t,n){super(e,t,n)}}Rr.prototype.ValueTypeName="string";Rr.prototype.ValueBufferType=Array;Rr.prototype.DefaultInterpolation=Zr;Rr.prototype.InterpolantFactoryMethodLinear=void 0;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;class vi extends Hn{}vi.prototype.ValueTypeName="vector";class Qr{constructor(e="",t=-1,n=[],i=oc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(j_(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Hn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=z_(c);c=Ol(c,1,u),l=Ol(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Mr(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let p=i[h];p||(i[h]=p=[]),p.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,p,d,_,g){if(d.length!==0){const m=[],f=[];Gu(d,m,f,_),m.length!==0&&g.push(new h(p,m,f))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const p=l[h].keys;if(!(!p||p.length===0))if(p[0].morphTargets){const d={};let _;for(_=0;_<p.length;_++)if(p[_].morphTargets)for(let g=0;g<p[_].morphTargets.length;g++)d[p[_].morphTargets[g]]=-1;for(const g in d){const m=[],f=[];for(let x=0;x!==p[_].morphTargets.length;++x){const S=p[_];m.push(S.time),f.push(S.morphTarget===g?1:0)}i.push(new Mr(".morphTargetInfluence["+g+"]",m,f))}c=d.length*a}else{const d=".bones["+t[h].name+"]";n(vi,d+".position",p,"pos",i),n(ki,d+".quaternion",p,"rot",i),n(vi,d+".scale",p,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function W_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mr;case"vector":case"vector2":case"vector3":case"vector4":return vi;case"color":return ju;case"quaternion":return ki;case"bool":case"boolean":return Ar;case"string":return Rr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function j_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=W_(s.type);if(s.times===void 0){const t=[],n=[];Gu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const mi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Xu{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=l.length;h<p;h+=2){const d=l[h],_=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const qu=new Xu;class Nn{constructor(e){this.manager=e!==void 0?e:qu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Nn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zn={};class X_ extends Error{constructor(e,t){super(e),this.response=t}}class Cr extends Nn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=mi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Zn[e]!==void 0){Zn[e].push({onLoad:t,onProgress:n,onError:i});return}Zn[e]=[],Zn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Zn[e],h=l.body.getReader(),p=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=p?parseInt(p):0,_=d!==0;let g=0;const m=new ReadableStream({start(f){x();function x(){h.read().then(({done:S,value:y})=>{if(S)f.close();else{g+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let I=0,L=u.length;I<L;I++){const D=u[I];D.onProgress&&D.onProgress(C)}f.enqueue(y),x()}},S=>{f.error(S)})}}});return new Response(m)}else throw new X_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),p=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(p);return l.arrayBuffer().then(_=>d.decode(_))}}}).then(l=>{mi.add(e,l);const u=Zn[e];delete Zn[e];for(let h=0,p=u.length;h<p;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=Zn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Zn[e];for(let h=0,p=u.length;h<p;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class q_ extends Nn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=mi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=$r("img");function c(){u(),mi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Y_ extends Nn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new fc,o=new Cr(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:xn,a.wrapT=l.wrapT!==void 0?l.wrapT:xn,a.magFilter=l.magFilter!==void 0?l.magFilter:Yt,a.minFilter=l.minFilter!==void 0?l.minFilter:Yt,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=In),l.mipmapCount===1&&(a.minFilter=Yt),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,i),a}}class gc extends Nn{constructor(e){super(e)}load(e,t,n,i){const r=new Ot,a=new q_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class rs extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class K_ extends rs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const eo=new Je,kl=new q,Bl=new q;class _c{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lc,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;kl.setFromMatrixPosition(e.matrixWorld),t.position.copy(kl),Bl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bl),t.updateMatrixWorld(),eo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(eo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Z_ extends _c{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=yr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Yu extends rs{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Z_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const zl=new Je,zr=new q,to=new q;class J_ extends _c{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),zr.setFromMatrixPosition(e.matrixWorld),n.position.copy(zr),to.copy(n.position),to.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(to),n.updateMatrixWorld(),i.makeTranslation(-zr.x,-zr.y,-zr.z),zl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl)}}class Ku extends rs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new J_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $_ extends _c{constructor(){super(new fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vc extends rs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new $_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zu extends rs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ui{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Q_ extends Nn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=mi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return mi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),mi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});mi.add(e,c),r.manager.itemStart(e)}}class e0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Vl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Vl(){return performance.now()}class t0{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){tn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;tn.multiplyQuaternionsFlat(e,a,e,t,e,n),tn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const xc="\\[\\]\\.:\\/",n0=new RegExp("["+xc+"]","g"),yc="[^"+xc+"]",i0="[^"+xc.replace("\\.","")+"]",r0=/((?:WC+[\/:])*)/.source.replace("WC",yc),s0=/(WCOD+)?/.source.replace("WCOD",i0),a0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),o0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),c0=new RegExp("^"+r0+s0+a0+o0+"$"),l0=["material","materials","bones","map"];class u0{constructor(e,t,n){const i=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Mt{constructor(e,t,n){this.path=t,this.parsedPath=n||Mt.parseTrackName(t),this.node=Mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Mt.Composite(e,t,n):new Mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(n0,"")}static parseTrackName(e){const t=c0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);l0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Mt.Composite=u0;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class h0{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),c={endingStart:ar,endingEnd:ar};for(let l=0;l!==a;++l){const u=r[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Gh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case jh:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case oc:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===Wh;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Hh){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=or,i.endingEnd=or):(e?i.endingStart=this.zeroSlopeAtStart?or:ar:i.endingStart=ta,t?i.endingEnd=this.zeroSlopeAtEnd?or:ar:i.endingEnd=ta)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}}const d0=new Float32Array(1);class f0 extends zi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const p=i[h],d=p.name;let _=u[d];if(_!==void 0)++_.referenceCount,a[h]=_;else{if(_=a[h],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,c,d));continue}const g=t&&t._propertyBindings[h].binding.parsedPath;_=new t0(Mt.create(n,d,g),p.ValueTypeName,p.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,c,d),a[h]=_}o[h].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,p=(e._localRoot||this._root).uuid;delete h[p],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Wu(new Float32Array(2),new Float32Array(2),1,d0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?Qr.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=oc),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const u=new h0(this,a,t,n);return this._bindAction(u,l),this._addInactiveAction(u,o,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Qr.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Hl=new st;class p0{constructor(e=new st(1/0,1/0),t=new st(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hl.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hl).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qo);let Vr=null;function m0(s){window.addEventListener("resize",()=>{const e=window.innerWidth,t=window.innerHeight;Ju().setSize(e,t),s.aspect=e/t,s.updateProjectionMatrix()})}function Ju(){return Vr||(Vr=new L_,Vr.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(Vr.domElement)),Vr}class g0{constructor(e,t){ke(this,"targetObject");ke(this,"currentPosition");ke(this,"currentLookat");ke(this,"camera");this.targetObject=t,this.camera=e,this.currentPosition=new q,this.currentLookat=new q}getIdealOffset(){const e=new q(-1.6,.7,-2.5);return e.applyQuaternion(this.targetObject.quaternion),e.add(this.targetObject.position),e}getIdealLookat(){const e=new q(0,1,30);return e.applyQuaternion(this.targetObject.quaternion),e.add(this.targetObject.position),e}update(e){const t=this.getIdealOffset(),n=this.getIdealLookat();this.currentPosition=t,this.currentLookat=n,this.camera.position.copy(this.currentPosition),this.camera.lookAt(this.currentLookat)}}class _0{constructor(e){ke(this,"camera");ke(this,"thirdPersonCamera");this.camera=v0(),m0(this.camera),this.thirdPersonCamera=new g0(this.camera,e)}update(e){this.thirdPersonCamera.update(e)}getCamera(){return this.camera}}function v0(){const s=new Gt(75,window.innerWidth/window.innerHeight,.1,1e3);return s.position.set(0,2,5),s}const x0="modulepreload",y0=function(s){return"/"+s},Gl={},b0=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(t.map(c=>{if(c=y0(c),c in Gl)return;Gl[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":x0,l||(h.as="script"),h.crossOrigin="",h.href=c,o&&h.setAttribute("nonce",o),document.head.appendChild(h),l)return new Promise((p,d)=>{h.addEventListener("load",p),h.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};class Bi{static async init(){this.instance||(this.instance=await(await b0(async()=>{const{default:e}=await import("./ammo-DRcOblal.js").then(t=>t.a);return{default:e}},[])).default())}static get(){if(!this.instance)throw new Error("Ammo has not been initialized. Call AmmoSingleton.init() first.");return this.instance}}ke(Bi,"instance",null);function M0(s){const e=Bi.get(),t=new Dn().setFromObject(s),n=new q;t.getSize(n);const i=new e.btVector3(n.x/2,n.y/2,n.z/2);return new e.btBoxShape(i)}function S0(s,e){const t=Bi.get(),n=new t.btTransform;n.setIdentity(),n.setOrigin(new t.btVector3(s.position.x,s.position.y,s.position.z));const i=new t.btDefaultMotionState(n),r=M0(s),a=new t.btVector3(0,0,0);e>0&&r.calculateLocalInertia(e,a);const o=new t.btRigidBodyConstructionInfo(e,i,r,a);return new t.btRigidBody(o)}class E0{constructor(){ke(this,"objects",new Map)}addObject(e,t){const n=S0(e,t);this.objects.set(e,{body:n,mass:t})}getPhysicsData(){return Array.from(this.objects.entries())}update(){Array.from(this.objects.entries()).filter(([e,t])=>t.mass!==0).forEach(([e,t])=>this.applyPhysics(t,e))}getWorldTransform(e){const t=Bi.get(),n=new t.btTransform;return e.getMotionState().getWorldTransform(n),n}applyPhysics(e,t){const n=this.getWorldTransform(e.body),i=n.getOrigin();t.position.set(i.x(),i.y(),i.z());const r=n.getRotation();t.quaternion.set(r.x(),r.y(),r.z(),r.w())}applyImpulse(e,t){const n=Bi.get(),i=new n.btVector3(e.x,e.y,e.z),r=t?new n.btVector3(t.x,t.y,t.z):new n.btVector3(0,0,0);Array.from(this.objects.entries()).filter(([a,o])=>o.mass!==0).forEach(([a,o])=>o.body.applyImpulse(i,r))}}function w0(s){let e=s.getRoom(),t=new E0;return t.addObject(e.cube.object,1),t.addObject(e.floor.object,0),t.applyImpulse(new q(4.5,0,0)),t}class T0{constructor(e,t){ke(this,"entities");ke(this,"world");ke(this,"physicsCtrl");this.entities=e,this.world=t,this.physicsCtrl=w0(this.entities),this.addRigidBodiesToWorld()}addRigidBodiesToWorld(){this.physicsCtrl.getPhysicsData().forEach(([e,t])=>{this.world.addRigidBody(t.body,e)})}step(e){let t=e/10;this.world.step(t),this.physicsCtrl.update()}}class A0{constructor(e,t,n,i){ke(this,"actors");ke(this,"inputListener");ke(this,"playerController");ke(this,"tableController");this.actors=e,this.inputListener=t,this.playerController=n,this.tableController=i}handleUserInput(){this.inputListener.getPlayerActions().forEach(e=>{e.execute(this.actors.player,this.playerController)}),this.inputListener.getArmCommands().forEach(e=>{this.tableController.handleArmCommand(e)})}}class R0{constructor(e,t){ke(this,"scene");ke(this,"camera");this.scene=e,this.camera=t}render(){Ju().render(this.scene,this.camera)}}class C0{constructor(){ke(this,"keyDown");window.addEventListener("keydown",e=>this.onKeyDown(e)),window.addEventListener("keyup",e=>this.onKeyUp(e)),this.keyDown={ArrowUp:!1,ArrowDown:!1,ArrowLeft:!1,ArrowRight:!1," ":!1,w:!1}}onKeyDown(e){this.keyDown[e.key]=!0}onKeyUp(e){this.keyDown[e.key]=!1}}var es=(s=>(s[s.OpticalTable=0]="OpticalTable",s))(es||{}),bc=(s=>(s[s.OpticalTable=0]="OpticalTable",s))(bc||{}),dn=(s=>(s[s.Error=0]="Error",s[s.PhotoCamera=1]="PhotoCamera",s[s.Timelapse=2]="Timelapse",s[s.Timer=3]="Timer",s))(dn||{}),_a=(s=>(s[s.Human=0]="Human",s))(_a||{}),Un=(s=>(s[s.Idle=0]="Idle",s[s.Moving=1]="Moving",s))(Un||{}),Dt=(s=>(s[s.GOTO_1=0]="GOTO_1",s[s.GOTO_2=1]="GOTO_2",s[s.GOTO_3=2]="GOTO_3",s[s.GOTO_4=3]="GOTO_4",s[s.GOTO_5=4]="GOTO_5",s[s.GOTO_6=5]="GOTO_6",s[s.STOP=6]="STOP",s))(Dt||{}),ts=(s=>(s[s.PLAYER_MOVE=0]="PLAYER_MOVE",s[s.PLAYER_ROTATE=1]="PLAYER_ROTATE",s))(ts||{}),Ni=(s=>(s[s.ERROR=0]="ERROR",s[s.CAPTURING=1]="CAPTURING",s[s.STANDBY=2]="STANDBY",s[s.LOADING=3]="LOADING",s))(Ni||{});class Wl{constructor(e){ke(this,"action");this.action=e}execute(e,t){switch(this.action.type){case ts.PLAYER_MOVE:t.handleMove(this.action.payload);break;case ts.PLAYER_ROTATE:t.handleRotation(this.action.payload)}}}class I0{constructor(e){ke(this,"keyboardListener");ke(this,"uiController");this.uiController=e,this.keyboardListener=new C0}getMoveAction(){const e={forward:!1,backward:!1,left:!1,right:!1},t=this.keyboardListener.keyDown;(t.ArrowUp||t.w)&&(e.forward=!0),(t.ArrowDown||t.s)&&(e.backward=!0),(t.ArrowLeft||t.a)&&(e.left=!0),(t.ArrowRight||t.d)&&(e.right=!0);const n={type:ts.PLAYER_MOVE,payload:e};return new Wl(n)}getRotateAction(){const e={left:!1,right:!1},t=this.keyboardListener.keyDown;t.q&&(e.left=!0),t.e&&(e.right=!0);const n={type:ts.PLAYER_ROTATE,payload:e};return new Wl(n)}getPlayerActions(){const e=[];return e.push(this.getMoveAction()),e.push(this.getRotateAction()),e}getArmCommands(){return this.uiController.getArmCommands()}}function L0(){document.addEventListener("keydown",s=>{if(s.key.toLowerCase()==="h"){const e=document.getElementById("ui");e&&e.classList.toggle("hidden")}})}class P0{constructor(){ke(this,"actionQueue",[]);this.initButtons()}initButtons(){[{id:"btn1",command:Dt.GOTO_1},{id:"btn2",command:Dt.GOTO_2},{id:"btn3",command:Dt.GOTO_3},{id:"btn4",command:Dt.GOTO_4},{id:"btn5",command:Dt.GOTO_5},{id:"btn6",command:Dt.GOTO_6}].forEach(({id:n,command:i})=>{const r=document.getElementById(n);r&&r.addEventListener("click",()=>this.queueCommand(i))});const t=document.getElementById("btn7");t&&t.addEventListener("click",()=>this.armStop())}queueCommand(e){console.log(`Command: ${e}`),this.actionQueue.push(e)}armStop(){console.log("armStop command"),this.actionQueue.push(Dt.STOP)}getAndClearQueue(){const e=[...this.actionQueue];return this.actionQueue=[],e}}class N0{constructor(e,t){ke(this,"armCommandUI");this.armCommandUI=new P0,L0()}updateSpatialUI(){}getArmCommands(){return this.armCommandUI.getAndClearQueue()}}class D0{constructor(){ke(this,"kinState");ke(this,"rotationSpeed");this.kinState={velocity:new q,acceleration:new q},this.rotationSpeed=0}update(e,t){if(this.kinState){const{acceleration:i,velocity:r}=this.kinState,a=new q(0,0,1);e.getWorldDirection(a);const o=new q;o.crossVectors(new q(0,1,0),a).normalize();const c=.025;i.z!==0&&r.add(a.clone().multiplyScalar(i.z*c)),i.x!==0&&r.add(o.clone().multiplyScalar(i.x*c)),e.position.add(r.clone().multiplyScalar(t));const l=1-Math.min(1,5*t);r.multiplyScalar(l),r.lengthSq()<.01**2&&r.set(0,0,0)}const n=new tn;n.setFromAxisAngle(new q(0,1,0),this.rotationSpeed*t),e.quaternion.multiplyQuaternions(n,e.quaternion)}handleMove(e){let t=this.kinState.acceleration;const n=10;e.forward?t.z=n:e.backward?t.z=-n:t.z=0,e.left?t.x=n:e.right?t.x=-n:t.x=0}handleRotation(e){this.rotationSpeed=0;const t=2;e.left&&(this.rotationSpeed=t),e.right&&(this.rotationSpeed=-t)}getVelocity(){return this.kinState.velocity.clone()}getRelativeVelocity(e){return e.worldToLocal(this.kinState.velocity.clone().add(e.position))}}class U0{constructor(e,t){ke(this,"animationMixer");ke(this,"object");ke(this,"animations");ke(this,"walkAction");ke(this,"physicsCtrl");this.object=e.object,this.animations=e.animations,this.animationMixer=new f0(this.object),this.walkAction=this.animationMixer.clipAction(this.animations[0]),this.walkAction.play(),this.walkAction.paused=!0,this.physicsCtrl=t}update(e){const n=this.physicsCtrl.getVelocity().length(),i=this.physicsCtrl.getRelativeVelocity(this.object);if(n>.01){this.walkAction.paused=!1;let r=Math.min(2,n*.5);i.z<0&&(r=r*-1),this.walkAction.timeScale=r}else this.walkAction.paused=!0;this.animationMixer.update(e)}}class F0{constructor(e){ke(this,"phyicsCtrl");ke(this,"animationCtrl");ke(this,"bounds");this.phyicsCtrl=new D0,this.animationCtrl=new U0(e,this.phyicsCtrl);const t=5;this.bounds=new p0(new st(-t,-t),new st(t,t))}update(e,t){this.phyicsCtrl.update(e,t),this.animationCtrl.update(t),this.setWithinBounds(e)}setWithinBounds(e){if(this.isOutOfBounds(e)){const t=new q(this.bounds.min.x,-9999,this.bounds.min.y),n=new q(this.bounds.max.x,9999,this.bounds.max.y);e.position.clamp(t,n)}}isOutOfBounds(e){const t=e.position.clone();return this.bounds.containsPoint(new st(t.x,t.z))==!1}handleMove(e){this.phyicsCtrl.handleMove(e)}handleRotation(e){this.phyicsCtrl.handleRotation(e)}addCollider(e){}setBounds(e){this.bounds=e}}function O0(s,e){switch(e){case Dt.GOTO_1:return{from:s,to:Un.Moving,command:e};case Dt.GOTO_2:return{from:s,to:Un.Moving,command:e};case Dt.GOTO_3:return{from:s,to:Un.Moving,command:e};case Dt.GOTO_4:return{from:s,to:Un.Moving,command:e};case Dt.GOTO_5:return{from:s,to:Un.Moving,command:e};case Dt.GOTO_6:return{from:s,to:Un.Moving,command:e};case Dt.STOP:return{from:s,to:Un.Idle,command:e};default:throw new Error(`Unhandled case: ${e}`)}}class k0{constructor(){ke(this,"state",Un.Idle);ke(this,"command",Dt.STOP);ke(this,"targetAngleMap");this.targetAngleMap=new Map([[Dt.GOTO_1,.2],[Dt.GOTO_2,.8],[Dt.GOTO_3,1.4],[Dt.GOTO_4,2],[Dt.GOTO_5,2.5],[Dt.GOTO_6,3],[Dt.STOP,0]])}transition(e){const{from:t,to:n,command:i}=O0(this.state,e);return this.state=n,this.command=i,{from:t,to:n,command:i}}getState(){return this.state}getTargetAngle(){return this.targetAngleMap.get(this.command)||0}}class B0{constructor(e,t){ke(this,"bubble");ke(this,"state",Ni.STANDBY);ke(this,"pos");this.bubble=e,this.pos=t,e.setPosition(t)}update(e){}}class z0{constructor(e,t){ke(this,"table");ke(this,"slideJoint");ke(this,"armFSM");ke(this,"opticsControllers");if(t.length!==10)throw new Error("Expected exactly 10 speech buubles.");this.table=e,e.updateMatrixWorld(!0),this.slideJoint=e.joints["slide-j"],this.armFSM=new k0,this.opticsControllers=[];for(let i=0;i<10;i++){const r=new q(-1.3+i*.57,1.5,-.5);i>4&&(r.x-=5*.57,r.z=.5);let a=new B0(t[i],r);this.opticsControllers.push(a)}}createStatusBubbles(){return[]}getCurrentAngle(){return this.slideJoint.angle}getArmState(){return this.armFSM.getState()}handleArmCommand(e){this.armFSM.transition(e)}getTargetAngle(){return this.armFSM.getTargetAngle()}update(e){if(this.armFSM.getState()==Un.Idle)return;const t=1,n=this.getCurrentAngle(),i=this.getTargetAngle()-n,r=Math.sign(i)*Math.min(Math.abs(i),t*e);this.slideJoint.setJointValue(n+r),Math.abs(i)<.01&&this.slideJoint.setJointValue(this.getTargetAngle())}}function V0(s,e){let t=s.getActors(),n=new _0(t.player.object),i=n.getCamera(),r=new F0(s.getActors().player),a=new z0(t.table.object,t.table.bubbles),o=new N0(i,s),c=new I0(o),l=new R0(e,i),u=new A0(t,c,r,a);return{player:r,table:a,camera:n,ui:o,render:l,actor:u}}function H0(s,e,t){e.camera.update(s),e.actor.handleUserInput(),e.player.update(t.getActors().player.object,s),e.table.update(s)}function G0(s){s.ui.updateSpatialUI(),s.render.render()}class W0{constructor(e,t,n){ke(this,"simulationLoop");ke(this,"clock");ke(this,"entities");ke(this,"controllers");ke(this,"runSimulationLoop",()=>{this.processNextFrame(),requestAnimationFrame(this.runSimulationLoop)});this.entities=e,this.simulationLoop=new T0(e,n),this.clock=new e0,this.controllers=V0(e,t)}processNextFrame(){const e=this.clock.getDelta();H0(e,this.controllers,this.entities),this.simulationLoop.step(e),G0(this.controllers)}}const j0=0,$u="./assets.zip",aa="digital-twin-lab-v4-no-arm",X0=aa,q0=`./packages/${aa}`,Y0=`./packages/${aa}/urdf/${aa}.urdf`,K0={[bc.OpticalTable]:"assets/objs/optical_table.obj"},Z0={[_a.Human]:"assets/gltfs/CesiumMan2.glb"},J0={[dn.Error]:"assets/imgs/error.png",[dn.PhotoCamera]:"assets/imgs/photo_camera.png",[dn.Timelapse]:"assets/imgs/timelapse.png",[dn.Timer]:"assets/imgs/timer.png"};var Bs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function Ox(s){if(s.__esModule)return s;var e=s.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(s).forEach(function(n){var i=Object.getOwnPropertyDescriptor(s,n);Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:function(){return s[n]}})}),t}function zs(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var no={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var jl;function Q0(){return jl||(jl=1,function(s,e){(function(t){s.exports=t()})(function(){return function t(n,i,r){function a(l,u){if(!i[l]){if(!n[l]){var h=typeof zs=="function"&&zs;if(!u&&h)return h(l,!0);if(o)return o(l,!0);var p=new Error("Cannot find module '"+l+"'");throw p.code="MODULE_NOT_FOUND",p}var d=i[l]={exports:{}};n[l][0].call(d.exports,function(_){var g=n[l][1][_];return a(g||_)},d,d.exports,t,n,i,r)}return i[l].exports}for(var o=typeof zs=="function"&&zs,c=0;c<r.length;c++)a(r[c]);return a}({1:[function(t,n,i){var r=t("./utils"),a=t("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(c){for(var l,u,h,p,d,_,g,m=[],f=0,x=c.length,S=x,y=r.getTypeOf(c)!=="string";f<c.length;)S=x-f,h=y?(l=c[f++],u=f<x?c[f++]:0,f<x?c[f++]:0):(l=c.charCodeAt(f++),u=f<x?c.charCodeAt(f++):0,f<x?c.charCodeAt(f++):0),p=l>>2,d=(3&l)<<4|u>>4,_=1<S?(15&u)<<2|h>>6:64,g=2<S?63&h:64,m.push(o.charAt(p)+o.charAt(d)+o.charAt(_)+o.charAt(g));return m.join("")},i.decode=function(c){var l,u,h,p,d,_,g=0,m=0,f="data:";if(c.substr(0,f.length)===f)throw new Error("Invalid base64 input, it looks like a data url.");var x,S=3*(c=c.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(c.charAt(c.length-1)===o.charAt(64)&&S--,c.charAt(c.length-2)===o.charAt(64)&&S--,S%1!=0)throw new Error("Invalid base64 input, bad content length.");for(x=a.uint8array?new Uint8Array(0|S):new Array(0|S);g<c.length;)l=o.indexOf(c.charAt(g++))<<2|(p=o.indexOf(c.charAt(g++)))>>4,u=(15&p)<<4|(d=o.indexOf(c.charAt(g++)))>>2,h=(3&d)<<6|(_=o.indexOf(c.charAt(g++))),x[m++]=l,d!==64&&(x[m++]=u),_!==64&&(x[m++]=h);return x}},{"./support":30,"./utils":32}],2:[function(t,n,i){var r=t("./external"),a=t("./stream/DataWorker"),o=t("./stream/Crc32Probe"),c=t("./stream/DataLengthProbe");function l(u,h,p,d,_){this.compressedSize=u,this.uncompressedSize=h,this.crc32=p,this.compression=d,this.compressedContent=_}l.prototype={getContentWorker:function(){var u=new a(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")),h=this;return u.on("end",function(){if(this.streamInfo.data_length!==h.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),u},getCompressedWorker:function(){return new a(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},l.createWorkerFrom=function(u,h,p){return u.pipe(new o).pipe(new c("uncompressedSize")).pipe(h.compressWorker(p)).pipe(new c("compressedSize")).withStreamInfo("compression",h)},n.exports=l},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,n,i){var r=t("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},i.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,n,i){var r=t("./utils"),a=function(){for(var o,c=[],l=0;l<256;l++){o=l;for(var u=0;u<8;u++)o=1&o?3988292384^o>>>1:o>>>1;c[l]=o}return c}();n.exports=function(o,c){return o!==void 0&&o.length?r.getTypeOf(o)!=="string"?function(l,u,h,p){var d=a,_=p+h;l^=-1;for(var g=p;g<_;g++)l=l>>>8^d[255&(l^u[g])];return-1^l}(0|c,o,o.length,0):function(l,u,h,p){var d=a,_=p+h;l^=-1;for(var g=p;g<_;g++)l=l>>>8^d[255&(l^u.charCodeAt(g))];return-1^l}(0|c,o,o.length,0):0}},{"./utils":32}],5:[function(t,n,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(t,n,i){var r=null;r=typeof Promise<"u"?Promise:t("lie"),n.exports={Promise:r}},{lie:37}],7:[function(t,n,i){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=t("pako"),o=t("./utils"),c=t("./stream/GenericWorker"),l=r?"uint8array":"array";function u(h,p){c.call(this,"FlateWorker/"+h),this._pako=null,this._pakoAction=h,this._pakoOptions=p,this.meta={}}i.magic="\b\0",o.inherits(u,c),u.prototype.processChunk=function(h){this.meta=h.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(l,h.data),!1)},u.prototype.flush=function(){c.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},u.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this._pako=null},u.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var h=this;this._pako.onData=function(p){h.push({data:p,meta:h.meta})}},i.compressWorker=function(h){return new u("Deflate",h)},i.uncompressWorker=function(){return new u("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,n,i){function r(d,_){var g,m="";for(g=0;g<_;g++)m+=String.fromCharCode(255&d),d>>>=8;return m}function a(d,_,g,m,f,x){var S,y,C=d.file,I=d.compression,L=x!==l.utf8encode,D=o.transformTo("string",x(C.name)),E=o.transformTo("string",l.utf8encode(C.name)),w=C.comment,B=o.transformTo("string",x(w)),R=o.transformTo("string",l.utf8encode(w)),z=E.length!==C.name.length,b=R.length!==w.length,W="",H="",Z="",$=C.dir,Q=C.date,fe={crc32:0,compressedSize:0,uncompressedSize:0};_&&!g||(fe.crc32=d.crc32,fe.compressedSize=d.compressedSize,fe.uncompressedSize=d.uncompressedSize);var X=0;_&&(X|=8),L||!z&&!b||(X|=2048);var K=0,_e=0;$&&(K|=16),f==="UNIX"?(_e=798,K|=function(Y,ce){var de=Y;return Y||(de=ce?16893:33204),(65535&de)<<16}(C.unixPermissions,$)):(_e=20,K|=function(Y){return 63&(Y||0)}(C.dosPermissions)),S=Q.getUTCHours(),S<<=6,S|=Q.getUTCMinutes(),S<<=5,S|=Q.getUTCSeconds()/2,y=Q.getUTCFullYear()-1980,y<<=4,y|=Q.getUTCMonth()+1,y<<=5,y|=Q.getUTCDate(),z&&(H=r(1,1)+r(u(D),4)+E,W+="up"+r(H.length,2)+H),b&&(Z=r(1,1)+r(u(B),4)+R,W+="uc"+r(Z.length,2)+Z);var j="";return j+=`
\0`,j+=r(X,2),j+=I.magic,j+=r(S,2),j+=r(y,2),j+=r(fe.crc32,4),j+=r(fe.compressedSize,4),j+=r(fe.uncompressedSize,4),j+=r(D.length,2),j+=r(W.length,2),{fileRecord:h.LOCAL_FILE_HEADER+j+D+W,dirRecord:h.CENTRAL_FILE_HEADER+r(_e,2)+j+r(B.length,2)+"\0\0\0\0"+r(K,4)+r(m,4)+D+W+B}}var o=t("../utils"),c=t("../stream/GenericWorker"),l=t("../utf8"),u=t("../crc32"),h=t("../signature");function p(d,_,g,m){c.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=g,this.encodeFileName=m,this.streamFiles=d,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(p,c),p.prototype.push=function(d){var _=d.meta.percent||0,g=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(d):(this.bytesWritten+=d.data.length,c.prototype.push.call(this,{data:d.data,meta:{currentFile:this.currentFile,percent:g?(_+100*(g-m-1))/g:100}}))},p.prototype.openedSource=function(d){this.currentSourceOffset=this.bytesWritten,this.currentFile=d.file.name;var _=this.streamFiles&&!d.file.dir;if(_){var g=a(d,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},p.prototype.closedSource=function(d){this.accumulate=!1;var _=this.streamFiles&&!d.file.dir,g=a(d,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),_)this.push({data:function(m){return h.DATA_DESCRIPTOR+r(m.crc32,4)+r(m.compressedSize,4)+r(m.uncompressedSize,4)}(d),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},p.prototype.flush=function(){for(var d=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var g=this.bytesWritten-d,m=function(f,x,S,y,C){var I=o.transformTo("string",C(y));return h.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(f,2)+r(f,2)+r(x,4)+r(S,4)+r(I.length,2)+I}(this.dirRecords.length,g,d,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},p.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},p.prototype.registerPrevious=function(d){this._sources.push(d);var _=this;return d.on("data",function(g){_.processChunk(g)}),d.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),d.on("error",function(g){_.error(g)}),this},p.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},p.prototype.error=function(d){var _=this._sources;if(!c.prototype.error.call(this,d))return!1;for(var g=0;g<_.length;g++)try{_[g].error(d)}catch{}return!0},p.prototype.lock=function(){c.prototype.lock.call(this);for(var d=this._sources,_=0;_<d.length;_++)d[_].lock()},n.exports=p},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,n,i){var r=t("../compressions"),a=t("./ZipFileWorker");i.generateWorker=function(o,c,l){var u=new a(c.streamFiles,l,c.platform,c.encodeFileName),h=0;try{o.forEach(function(p,d){h++;var _=function(x,S){var y=x||S,C=r[y];if(!C)throw new Error(y+" is not a valid compression method !");return C}(d.options.compression,c.compression),g=d.options.compressionOptions||c.compressionOptions||{},m=d.dir,f=d.date;d._compressWorker(_,g).withStreamInfo("file",{name:p,dir:m,date:f,comment:d.comment||"",unixPermissions:d.unixPermissions,dosPermissions:d.dosPermissions}).pipe(u)}),u.entriesCount=h}catch(p){u.error(p)}return u}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,n,i){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new r;for(var o in this)typeof this[o]!="function"&&(a[o]=this[o]);return a}}(r.prototype=t("./object")).loadAsync=t("./load"),r.support=t("./support"),r.defaults=t("./defaults"),r.version="3.10.1",r.loadAsync=function(a,o){return new r().loadAsync(a,o)},r.external=t("./external"),n.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,n,i){var r=t("./utils"),a=t("./external"),o=t("./utf8"),c=t("./zipEntries"),l=t("./stream/Crc32Probe"),u=t("./nodejsUtils");function h(p){return new a.Promise(function(d,_){var g=p.decompressed.getContentWorker().pipe(new l);g.on("error",function(m){_(m)}).on("end",function(){g.streamInfo.crc32!==p.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):d()}).resume()})}n.exports=function(p,d){var _=this;return d=r.extend(d||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),u.isNode&&u.isStream(p)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",p,!0,d.optimizedBinaryString,d.base64).then(function(g){var m=new c(d);return m.load(g),m}).then(function(g){var m=[a.Promise.resolve(g)],f=g.files;if(d.checkCRC32)for(var x=0;x<f.length;x++)m.push(h(f[x]));return a.Promise.all(m)}).then(function(g){for(var m=g.shift(),f=m.files,x=0;x<f.length;x++){var S=f[x],y=S.fileNameStr,C=r.resolve(S.fileNameStr);_.file(C,S.decompressed,{binary:!0,optimizedBinaryString:!0,date:S.date,dir:S.dir,comment:S.fileCommentStr.length?S.fileCommentStr:null,unixPermissions:S.unixPermissions,dosPermissions:S.dosPermissions,createFolders:d.createFolders}),S.dir||(_.file(C).unsafeOriginalName=y)}return m.zipComment.length&&(_.comment=m.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,n,i){var r=t("../utils"),a=t("../stream/GenericWorker");function o(c,l){a.call(this,"Nodejs stream input adapter for "+c),this._upstreamEnded=!1,this._bindStream(l)}r.inherits(o,a),o.prototype._bindStream=function(c){var l=this;(this._stream=c).pause(),c.on("data",function(u){l.push({data:u,meta:{percent:0}})}).on("error",function(u){l.isPaused?this.generatedError=u:l.error(u)}).on("end",function(){l.isPaused?l._upstreamEnded=!0:l.end()})},o.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,n,i){var r=t("readable-stream").Readable;function a(o,c,l){r.call(this,c),this._helper=o;var u=this;o.on("data",function(h,p){u.push(h)||u._helper.pause(),l&&l(p)}).on("error",function(h){u.emit("error",h)}).on("end",function(){u.push(null)})}t("../utils").inherits(a,r),a.prototype._read=function(){this._helper.resume()},n.exports=a},{"../utils":32,"readable-stream":16}],14:[function(t,n,i){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(r,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(r,a);if(typeof r=="number")throw new Error('The "data" argument must not be a number');return new Buffer(r,a)},allocBuffer:function(r){if(Buffer.alloc)return Buffer.alloc(r);var a=new Buffer(r);return a.fill(0),a},isBuffer:function(r){return Buffer.isBuffer(r)},isStream:function(r){return r&&typeof r.on=="function"&&typeof r.pause=="function"&&typeof r.resume=="function"}}},{}],15:[function(t,n,i){function r(C,I,L){var D,E=o.getTypeOf(I),w=o.extend(L||{},u);w.date=w.date||new Date,w.compression!==null&&(w.compression=w.compression.toUpperCase()),typeof w.unixPermissions=="string"&&(w.unixPermissions=parseInt(w.unixPermissions,8)),w.unixPermissions&&16384&w.unixPermissions&&(w.dir=!0),w.dosPermissions&&16&w.dosPermissions&&(w.dir=!0),w.dir&&(C=f(C)),w.createFolders&&(D=m(C))&&x.call(this,D,!0);var B=E==="string"&&w.binary===!1&&w.base64===!1;L&&L.binary!==void 0||(w.binary=!B),(I instanceof h&&I.uncompressedSize===0||w.dir||!I||I.length===0)&&(w.base64=!1,w.binary=!0,I="",w.compression="STORE",E="string");var R=null;R=I instanceof h||I instanceof c?I:_.isNode&&_.isStream(I)?new g(C,I):o.prepareContent(C,I,w.binary,w.optimizedBinaryString,w.base64);var z=new p(C,R,w);this.files[C]=z}var a=t("./utf8"),o=t("./utils"),c=t("./stream/GenericWorker"),l=t("./stream/StreamHelper"),u=t("./defaults"),h=t("./compressedObject"),p=t("./zipObject"),d=t("./generate"),_=t("./nodejsUtils"),g=t("./nodejs/NodejsStreamInputAdapter"),m=function(C){C.slice(-1)==="/"&&(C=C.substring(0,C.length-1));var I=C.lastIndexOf("/");return 0<I?C.substring(0,I):""},f=function(C){return C.slice(-1)!=="/"&&(C+="/"),C},x=function(C,I){return I=I!==void 0?I:u.createFolders,C=f(C),this.files[C]||r.call(this,C,null,{dir:!0,createFolders:I}),this.files[C]};function S(C){return Object.prototype.toString.call(C)==="[object RegExp]"}var y={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(C){var I,L,D;for(I in this.files)D=this.files[I],(L=I.slice(this.root.length,I.length))&&I.slice(0,this.root.length)===this.root&&C(L,D)},filter:function(C){var I=[];return this.forEach(function(L,D){C(L,D)&&I.push(D)}),I},file:function(C,I,L){if(arguments.length!==1)return C=this.root+C,r.call(this,C,I,L),this;if(S(C)){var D=C;return this.filter(function(w,B){return!B.dir&&D.test(w)})}var E=this.files[this.root+C];return E&&!E.dir?E:null},folder:function(C){if(!C)return this;if(S(C))return this.filter(function(E,w){return w.dir&&C.test(E)});var I=this.root+C,L=x.call(this,I),D=this.clone();return D.root=L.name,D},remove:function(C){C=this.root+C;var I=this.files[C];if(I||(C.slice(-1)!=="/"&&(C+="/"),I=this.files[C]),I&&!I.dir)delete this.files[C];else for(var L=this.filter(function(E,w){return w.name.slice(0,C.length)===C}),D=0;D<L.length;D++)delete this.files[L[D].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(C){var I,L={};try{if((L=o.extend(C||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=L.type.toLowerCase(),L.compression=L.compression.toUpperCase(),L.type==="binarystring"&&(L.type="string"),!L.type)throw new Error("No output type specified.");o.checkSupport(L.type),L.platform!=="darwin"&&L.platform!=="freebsd"&&L.platform!=="linux"&&L.platform!=="sunos"||(L.platform="UNIX"),L.platform==="win32"&&(L.platform="DOS");var D=L.comment||this.comment||"";I=d.generateWorker(this,L,D)}catch(E){(I=new c("error")).error(E)}return new l(I,L.type||"string",L.mimeType)},generateAsync:function(C,I){return this.generateInternalStream(C).accumulate(I)},generateNodeStream:function(C,I){return(C=C||{}).type||(C.type="nodebuffer"),this.generateInternalStream(C).toNodejsStream(I)}};n.exports=y},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,n,i){n.exports=t("stream")},{stream:void 0}],17:[function(t,n,i){var r=t("./DataReader");function a(o){r.call(this,o);for(var c=0;c<this.data.length;c++)o[c]=255&o[c]}t("../utils").inherits(a,r),a.prototype.byteAt=function(o){return this.data[this.zero+o]},a.prototype.lastIndexOfSignature=function(o){for(var c=o.charCodeAt(0),l=o.charCodeAt(1),u=o.charCodeAt(2),h=o.charCodeAt(3),p=this.length-4;0<=p;--p)if(this.data[p]===c&&this.data[p+1]===l&&this.data[p+2]===u&&this.data[p+3]===h)return p-this.zero;return-1},a.prototype.readAndCheckSignature=function(o){var c=o.charCodeAt(0),l=o.charCodeAt(1),u=o.charCodeAt(2),h=o.charCodeAt(3),p=this.readData(4);return c===p[0]&&l===p[1]&&u===p[2]&&h===p[3]},a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var c=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},n.exports=a},{"../utils":32,"./DataReader":18}],18:[function(t,n,i){var r=t("../utils");function a(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var c,l=0;for(this.checkOffset(o),c=this.index+o-1;c>=this.index;c--)l=(l<<8)+this.byteAt(c);return this.index+=o,l},readString:function(o){return r.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},n.exports=a},{"../utils":32}],19:[function(t,n,i){var r=t("./Uint8ArrayReader");function a(o){r.call(this,o)}t("../utils").inherits(a,r),a.prototype.readData=function(o){this.checkOffset(o);var c=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},n.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,n,i){var r=t("./DataReader");function a(o){r.call(this,o)}t("../utils").inherits(a,r),a.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},a.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},a.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},a.prototype.readData=function(o){this.checkOffset(o);var c=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},n.exports=a},{"../utils":32,"./DataReader":18}],21:[function(t,n,i){var r=t("./ArrayReader");function a(o){r.call(this,o)}t("../utils").inherits(a,r),a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var c=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,c},n.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(t,n,i){var r=t("../utils"),a=t("../support"),o=t("./ArrayReader"),c=t("./StringReader"),l=t("./NodeBufferReader"),u=t("./Uint8ArrayReader");n.exports=function(h){var p=r.getTypeOf(h);return r.checkSupport(p),p!=="string"||a.uint8array?p==="nodebuffer"?new l(h):a.uint8array?new u(r.transformTo("uint8array",h)):new o(r.transformTo("array",h)):new c(h)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,n,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,n,i){var r=t("./GenericWorker"),a=t("../utils");function o(c){r.call(this,"ConvertWorker to "+c),this.destType=c}a.inherits(o,r),o.prototype.processChunk=function(c){this.push({data:a.transformTo(this.destType,c.data),meta:c.meta})},n.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(t,n,i){var r=t("./GenericWorker"),a=t("../crc32");function o(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(o,r),o.prototype.processChunk=function(c){this.streamInfo.crc32=a(c.data,this.streamInfo.crc32||0),this.push(c)},n.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,n,i){var r=t("../utils"),a=t("./GenericWorker");function o(c){a.call(this,"DataLengthProbe for "+c),this.propName=c,this.withStreamInfo(c,0)}r.inherits(o,a),o.prototype.processChunk=function(c){if(c){var l=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=l+c.data.length}a.prototype.processChunk.call(this,c)},n.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(t,n,i){var r=t("../utils"),a=t("./GenericWorker");function o(c){a.call(this,"DataWorker");var l=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,c.then(function(u){l.dataIsReady=!0,l.data=u,l.max=u&&u.length||0,l.type=r.getTypeOf(u),l.isPaused||l._tickAndRepeat()},function(u){l.error(u)})}r.inherits(o,a),o.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var c=null,l=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":c=this.data.substring(this.index,l);break;case"uint8array":c=this.data.subarray(this.index,l);break;case"array":case"nodebuffer":c=this.data.slice(this.index,l)}return this.index=l,this.push({data:c,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(t,n,i){function r(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,o){return this._listeners[a].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,o){if(this._listeners[a])for(var c=0;c<this._listeners[a].length;c++)this._listeners[a][c].call(this,o)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var o=this;return a.on("data",function(c){o.processChunk(c)}),a.on("end",function(){o.end()}),a.on("error",function(c){o.error(c)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,o){return this.extraStreamInfo[a]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},n.exports=r},{}],29:[function(t,n,i){var r=t("../utils"),a=t("./ConvertWorker"),o=t("./GenericWorker"),c=t("../base64"),l=t("../support"),u=t("../external"),h=null;if(l.nodestream)try{h=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function p(_,g){return new u.Promise(function(m,f){var x=[],S=_._internalType,y=_._outputType,C=_._mimeType;_.on("data",function(I,L){x.push(I),g&&g(L)}).on("error",function(I){x=[],f(I)}).on("end",function(){try{var I=function(L,D,E){switch(L){case"blob":return r.newBlob(r.transformTo("arraybuffer",D),E);case"base64":return c.encode(D);default:return r.transformTo(L,D)}}(y,function(L,D){var E,w=0,B=null,R=0;for(E=0;E<D.length;E++)R+=D[E].length;switch(L){case"string":return D.join("");case"array":return Array.prototype.concat.apply([],D);case"uint8array":for(B=new Uint8Array(R),E=0;E<D.length;E++)B.set(D[E],w),w+=D[E].length;return B;case"nodebuffer":return Buffer.concat(D);default:throw new Error("concat : unsupported type '"+L+"'")}}(S,x),C);m(I)}catch(L){f(L)}x=[]}).resume()})}function d(_,g,m){var f=g;switch(g){case"blob":case"arraybuffer":f="uint8array";break;case"base64":f="string"}try{this._internalType=f,this._outputType=g,this._mimeType=m,r.checkSupport(f),this._worker=_.pipe(new a(f)),_.lock()}catch(x){this._worker=new o("error"),this._worker.error(x)}}d.prototype={accumulate:function(_){return p(this,_)},on:function(_,g){var m=this;return _==="data"?this._worker.on(_,function(f){g.call(m,f.data,f.meta)}):this._worker.on(_,function(){r.delay(g,arguments,m)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(r.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new h(this,{objectMode:this._outputType!=="nodebuffer"},_)}},n.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,n,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",i.nodebuffer=typeof Buffer<"u",i.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")i.blob=!1;else{var r=new ArrayBuffer(0);try{i.blob=new Blob([r],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(r),i.blob=a.getBlob("application/zip").size===0}catch{i.blob=!1}}}try{i.nodestream=!!t("readable-stream").Readable}catch{i.nodestream=!1}},{"readable-stream":16}],31:[function(t,n,i){for(var r=t("./utils"),a=t("./support"),o=t("./nodejsUtils"),c=t("./stream/GenericWorker"),l=new Array(256),u=0;u<256;u++)l[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;l[254]=l[254]=1;function h(){c.call(this,"utf-8 decode"),this.leftOver=null}function p(){c.call(this,"utf-8 encode")}i.utf8encode=function(d){return a.nodebuffer?o.newBufferFrom(d,"utf-8"):function(_){var g,m,f,x,S,y=_.length,C=0;for(x=0;x<y;x++)(64512&(m=_.charCodeAt(x)))==55296&&x+1<y&&(64512&(f=_.charCodeAt(x+1)))==56320&&(m=65536+(m-55296<<10)+(f-56320),x++),C+=m<128?1:m<2048?2:m<65536?3:4;for(g=a.uint8array?new Uint8Array(C):new Array(C),x=S=0;S<C;x++)(64512&(m=_.charCodeAt(x)))==55296&&x+1<y&&(64512&(f=_.charCodeAt(x+1)))==56320&&(m=65536+(m-55296<<10)+(f-56320),x++),m<128?g[S++]=m:(m<2048?g[S++]=192|m>>>6:(m<65536?g[S++]=224|m>>>12:(g[S++]=240|m>>>18,g[S++]=128|m>>>12&63),g[S++]=128|m>>>6&63),g[S++]=128|63&m);return g}(d)},i.utf8decode=function(d){return a.nodebuffer?r.transformTo("nodebuffer",d).toString("utf-8"):function(_){var g,m,f,x,S=_.length,y=new Array(2*S);for(g=m=0;g<S;)if((f=_[g++])<128)y[m++]=f;else if(4<(x=l[f]))y[m++]=65533,g+=x-1;else{for(f&=x===2?31:x===3?15:7;1<x&&g<S;)f=f<<6|63&_[g++],x--;1<x?y[m++]=65533:f<65536?y[m++]=f:(f-=65536,y[m++]=55296|f>>10&1023,y[m++]=56320|1023&f)}return y.length!==m&&(y.subarray?y=y.subarray(0,m):y.length=m),r.applyFromCharCode(y)}(d=r.transformTo(a.uint8array?"uint8array":"array",d))},r.inherits(h,c),h.prototype.processChunk=function(d){var _=r.transformTo(a.uint8array?"uint8array":"array",d.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var g=_;(_=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),_.set(g,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var m=function(x,S){var y;for((S=S||x.length)>x.length&&(S=x.length),y=S-1;0<=y&&(192&x[y])==128;)y--;return y<0||y===0?S:y+l[x[y]]>S?y:S}(_),f=_;m!==_.length&&(a.uint8array?(f=_.subarray(0,m),this.leftOver=_.subarray(m,_.length)):(f=_.slice(0,m),this.leftOver=_.slice(m,_.length))),this.push({data:i.utf8decode(f),meta:d.meta})},h.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=h,r.inherits(p,c),p.prototype.processChunk=function(d){this.push({data:i.utf8encode(d.data),meta:d.meta})},i.Utf8EncodeWorker=p},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,n,i){var r=t("./support"),a=t("./base64"),o=t("./nodejsUtils"),c=t("./external");function l(g){return g}function u(g,m){for(var f=0;f<g.length;++f)m[f]=255&g.charCodeAt(f);return m}t("setimmediate"),i.newBlob=function(g,m){i.checkSupport("blob");try{return new Blob([g],{type:m})}catch{try{var f=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return f.append(g),f.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var h={stringifyByChunk:function(g,m,f){var x=[],S=0,y=g.length;if(y<=f)return String.fromCharCode.apply(null,g);for(;S<y;)m==="array"||m==="nodebuffer"?x.push(String.fromCharCode.apply(null,g.slice(S,Math.min(S+f,y)))):x.push(String.fromCharCode.apply(null,g.subarray(S,Math.min(S+f,y)))),S+=f;return x.join("")},stringifyByChar:function(g){for(var m="",f=0;f<g.length;f++)m+=String.fromCharCode(g[f]);return m},applyCanBeUsed:{uint8array:function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}}()}};function p(g){var m=65536,f=i.getTypeOf(g),x=!0;if(f==="uint8array"?x=h.applyCanBeUsed.uint8array:f==="nodebuffer"&&(x=h.applyCanBeUsed.nodebuffer),x)for(;1<m;)try{return h.stringifyByChunk(g,f,m)}catch{m=Math.floor(m/2)}return h.stringifyByChar(g)}function d(g,m){for(var f=0;f<g.length;f++)m[f]=g[f];return m}i.applyFromCharCode=p;var _={};_.string={string:l,array:function(g){return u(g,new Array(g.length))},arraybuffer:function(g){return _.string.uint8array(g).buffer},uint8array:function(g){return u(g,new Uint8Array(g.length))},nodebuffer:function(g){return u(g,o.allocBuffer(g.length))}},_.array={string:p,array:l,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return o.newBufferFrom(g)}},_.arraybuffer={string:function(g){return p(new Uint8Array(g))},array:function(g){return d(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:l,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return o.newBufferFrom(new Uint8Array(g))}},_.uint8array={string:p,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:l,nodebuffer:function(g){return o.newBufferFrom(g)}},_.nodebuffer={string:p,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return _.nodebuffer.uint8array(g).buffer},uint8array:function(g){return d(g,new Uint8Array(g.length))},nodebuffer:l},i.transformTo=function(g,m){if(m=m||"",!g)return m;i.checkSupport(g);var f=i.getTypeOf(m);return _[f][g](m)},i.resolve=function(g){for(var m=g.split("/"),f=[],x=0;x<m.length;x++){var S=m[x];S==="."||S===""&&x!==0&&x!==m.length-1||(S===".."?f.pop():f.push(S))}return f.join("/")},i.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":r.nodebuffer&&o.isBuffer(g)?"nodebuffer":r.uint8array&&g instanceof Uint8Array?"uint8array":r.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(g){if(!r[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(g){var m,f,x="";for(f=0;f<(g||"").length;f++)x+="\\x"+((m=g.charCodeAt(f))<16?"0":"")+m.toString(16).toUpperCase();return x},i.delay=function(g,m,f){setImmediate(function(){g.apply(f||null,m||[])})},i.inherits=function(g,m){function f(){}f.prototype=m.prototype,g.prototype=new f},i.extend=function(){var g,m,f={};for(g=0;g<arguments.length;g++)for(m in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],m)&&f[m]===void 0&&(f[m]=arguments[g][m]);return f},i.prepareContent=function(g,m,f,x,S){return c.Promise.resolve(m).then(function(y){return r.blob&&(y instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(y))!==-1)&&typeof FileReader<"u"?new c.Promise(function(C,I){var L=new FileReader;L.onload=function(D){C(D.target.result)},L.onerror=function(D){I(D.target.error)},L.readAsArrayBuffer(y)}):y}).then(function(y){var C=i.getTypeOf(y);return C?(C==="arraybuffer"?y=i.transformTo("uint8array",y):C==="string"&&(S?y=a.decode(y):f&&x!==!0&&(y=function(I){return u(I,r.uint8array?new Uint8Array(I.length):new Array(I.length))}(y))),y):c.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,n,i){var r=t("./reader/readerFor"),a=t("./utils"),o=t("./signature"),c=t("./zipEntry"),l=t("./support");function u(h){this.files=[],this.loadOptions=h}u.prototype={checkSignature:function(h){if(!this.reader.readAndCheckSignature(h)){this.reader.index-=4;var p=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(p)+", expected "+a.pretty(h)+")")}},isSignature:function(h,p){var d=this.reader.index;this.reader.setIndex(h);var _=this.reader.readString(4)===p;return this.reader.setIndex(d),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var h=this.reader.readData(this.zipCommentLength),p=l.uint8array?"uint8array":"array",d=a.transformTo(p,h);this.zipComment=this.loadOptions.decodeFileName(d)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var h,p,d,_=this.zip64EndOfCentralSize-44;0<_;)h=this.reader.readInt(2),p=this.reader.readInt(4),d=this.reader.readData(p),this.zip64ExtensibleData[h]={id:h,length:p,value:d}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var h,p;for(h=0;h<this.files.length;h++)p=this.files[h],this.reader.setIndex(p.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),p.readLocalPart(this.reader),p.handleUTF8(),p.processAttributes()},readCentralDir:function(){var h;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(h=new c({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(h);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var h=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(h<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(h);var p=h;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(h=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(h),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var _=p-d;if(0<_)this.isSignature(p,o.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(h){this.reader=r(h)},load:function(h){this.prepareReader(h),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=u},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,n,i){var r=t("./reader/readerFor"),a=t("./utils"),o=t("./compressedObject"),c=t("./crc32"),l=t("./utf8"),u=t("./compressions"),h=t("./support");function p(d,_){this.options=d,this.loadOptions=_}p.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(d){var _,g;if(d.skip(22),this.fileNameLength=d.readInt(2),g=d.readInt(2),this.fileName=d.readData(this.fileNameLength),d.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=function(m){for(var f in u)if(Object.prototype.hasOwnProperty.call(u,f)&&u[f].magic===m)return u[f];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,_,d.readData(this.compressedSize))},readCentralPart:function(d){this.versionMadeBy=d.readInt(2),d.skip(2),this.bitFlag=d.readInt(2),this.compressionMethod=d.readString(2),this.date=d.readDate(),this.crc32=d.readInt(4),this.compressedSize=d.readInt(4),this.uncompressedSize=d.readInt(4);var _=d.readInt(2);if(this.extraFieldsLength=d.readInt(2),this.fileCommentLength=d.readInt(2),this.diskNumberStart=d.readInt(2),this.internalFileAttributes=d.readInt(2),this.externalFileAttributes=d.readInt(4),this.localHeaderOffset=d.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");d.skip(_),this.readExtraFields(d),this.parseZIP64ExtraField(d),this.fileComment=d.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var d=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),d==0&&(this.dosPermissions=63&this.externalFileAttributes),d==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var d=r(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=d.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=d.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=d.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=d.readInt(4))}},readExtraFields:function(d){var _,g,m,f=d.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});d.index+4<f;)_=d.readInt(2),g=d.readInt(2),m=d.readData(g),this.extraFields[_]={id:_,length:g,value:m};d.setIndex(f)},handleUTF8:function(){var d=h.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=l.utf8decode(this.fileName),this.fileCommentStr=l.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var g=a.transformTo(d,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var f=a.transformTo(d,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(f)}}},findExtraFieldUnicodePath:function(){var d=this.extraFields[28789];if(d){var _=r(d.value);return _.readInt(1)!==1||c(this.fileName)!==_.readInt(4)?null:l.utf8decode(_.readData(d.length-5))}return null},findExtraFieldUnicodeComment:function(){var d=this.extraFields[25461];if(d){var _=r(d.value);return _.readInt(1)!==1||c(this.fileComment)!==_.readInt(4)?null:l.utf8decode(_.readData(d.length-5))}return null}},n.exports=p},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,n,i){function r(_,g,m){this.name=_,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=g,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var a=t("./stream/StreamHelper"),o=t("./stream/DataWorker"),c=t("./utf8"),l=t("./compressedObject"),u=t("./stream/GenericWorker");r.prototype={internalStream:function(_){var g=null,m="string";try{if(!_)throw new Error("No output type specified.");var f=(m=_.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),g=this._decompressWorker();var x=!this._dataBinary;x&&!f&&(g=g.pipe(new c.Utf8EncodeWorker)),!x&&f&&(g=g.pipe(new c.Utf8DecodeWorker))}catch(S){(g=new u("error")).error(S)}return new a(g,m,"")},async:function(_,g){return this.internalStream(_).accumulate(g)},nodeStream:function(_,g){return this.internalStream(_||"nodebuffer").toNodejsStream(g)},_compressWorker:function(_,g){if(this._data instanceof l&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new c.Utf8EncodeWorker)),l.createWorkerFrom(m,_,g)},_decompressWorker:function(){return this._data instanceof l?this._data.getContentWorker():this._data instanceof u?this._data:new o(this._data)}};for(var h=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],p=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},d=0;d<h.length;d++)r.prototype[h[d]]=p;n.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,n,i){(function(r){var a,o,c=r.MutationObserver||r.WebKitMutationObserver;if(c){var l=0,u=new c(_),h=r.document.createTextNode("");u.observe(h,{characterData:!0}),a=function(){h.data=l=++l%2}}else if(r.setImmediate||r.MessageChannel===void 0)a="document"in r&&"onreadystatechange"in r.document.createElement("script")?function(){var g=r.document.createElement("script");g.onreadystatechange=function(){_(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},r.document.documentElement.appendChild(g)}:function(){setTimeout(_,0)};else{var p=new r.MessageChannel;p.port1.onmessage=_,a=function(){p.port2.postMessage(0)}}var d=[];function _(){var g,m;o=!0;for(var f=d.length;f;){for(m=d,d=[],g=-1;++g<f;)m[g]();f=d.length}o=!1}n.exports=function(g){d.push(g)!==1||o||a()}}).call(this,typeof Bs<"u"?Bs:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,n,i){var r=t("immediate");function a(){}var o={},c=["REJECTED"],l=["FULFILLED"],u=["PENDING"];function h(f){if(typeof f!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,f!==a&&g(this,f)}function p(f,x,S){this.promise=f,typeof x=="function"&&(this.onFulfilled=x,this.callFulfilled=this.otherCallFulfilled),typeof S=="function"&&(this.onRejected=S,this.callRejected=this.otherCallRejected)}function d(f,x,S){r(function(){var y;try{y=x(S)}catch(C){return o.reject(f,C)}y===f?o.reject(f,new TypeError("Cannot resolve promise with itself")):o.resolve(f,y)})}function _(f){var x=f&&f.then;if(f&&(typeof f=="object"||typeof f=="function")&&typeof x=="function")return function(){x.apply(f,arguments)}}function g(f,x){var S=!1;function y(L){S||(S=!0,o.reject(f,L))}function C(L){S||(S=!0,o.resolve(f,L))}var I=m(function(){x(C,y)});I.status==="error"&&y(I.value)}function m(f,x){var S={};try{S.value=f(x),S.status="success"}catch(y){S.status="error",S.value=y}return S}(n.exports=h).prototype.finally=function(f){if(typeof f!="function")return this;var x=this.constructor;return this.then(function(S){return x.resolve(f()).then(function(){return S})},function(S){return x.resolve(f()).then(function(){throw S})})},h.prototype.catch=function(f){return this.then(null,f)},h.prototype.then=function(f,x){if(typeof f!="function"&&this.state===l||typeof x!="function"&&this.state===c)return this;var S=new this.constructor(a);return this.state!==u?d(S,this.state===l?f:x,this.outcome):this.queue.push(new p(S,f,x)),S},p.prototype.callFulfilled=function(f){o.resolve(this.promise,f)},p.prototype.otherCallFulfilled=function(f){d(this.promise,this.onFulfilled,f)},p.prototype.callRejected=function(f){o.reject(this.promise,f)},p.prototype.otherCallRejected=function(f){d(this.promise,this.onRejected,f)},o.resolve=function(f,x){var S=m(_,x);if(S.status==="error")return o.reject(f,S.value);var y=S.value;if(y)g(f,y);else{f.state=l,f.outcome=x;for(var C=-1,I=f.queue.length;++C<I;)f.queue[C].callFulfilled(x)}return f},o.reject=function(f,x){f.state=c,f.outcome=x;for(var S=-1,y=f.queue.length;++S<y;)f.queue[S].callRejected(x);return f},h.resolve=function(f){return f instanceof this?f:o.resolve(new this(a),f)},h.reject=function(f){var x=new this(a);return o.reject(x,f)},h.all=function(f){var x=this;if(Object.prototype.toString.call(f)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=f.length,y=!1;if(!S)return this.resolve([]);for(var C=new Array(S),I=0,L=-1,D=new this(a);++L<S;)E(f[L],L);return D;function E(w,B){x.resolve(w).then(function(R){C[B]=R,++I!==S||y||(y=!0,o.resolve(D,C))},function(R){y||(y=!0,o.reject(D,R))})}},h.race=function(f){var x=this;if(Object.prototype.toString.call(f)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=f.length,y=!1;if(!S)return this.resolve([]);for(var C=-1,I=new this(a);++C<S;)L=f[C],x.resolve(L).then(function(D){y||(y=!0,o.resolve(I,D))},function(D){y||(y=!0,o.reject(I,D))});var L;return I}},{immediate:36}],38:[function(t,n,i){var r={};(0,t("./lib/utils/common").assign)(r,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),n.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,n,i){var r=t("./zlib/deflate"),a=t("./utils/common"),o=t("./utils/strings"),c=t("./zlib/messages"),l=t("./zlib/zstream"),u=Object.prototype.toString,h=0,p=-1,d=0,_=8;function g(f){if(!(this instanceof g))return new g(f);this.options=a.assign({level:p,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},f||{});var x=this.options;x.raw&&0<x.windowBits?x.windowBits=-x.windowBits:x.gzip&&0<x.windowBits&&x.windowBits<16&&(x.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var S=r.deflateInit2(this.strm,x.level,x.method,x.windowBits,x.memLevel,x.strategy);if(S!==h)throw new Error(c[S]);if(x.header&&r.deflateSetHeader(this.strm,x.header),x.dictionary){var y;if(y=typeof x.dictionary=="string"?o.string2buf(x.dictionary):u.call(x.dictionary)==="[object ArrayBuffer]"?new Uint8Array(x.dictionary):x.dictionary,(S=r.deflateSetDictionary(this.strm,y))!==h)throw new Error(c[S]);this._dict_set=!0}}function m(f,x){var S=new g(x);if(S.push(f,!0),S.err)throw S.msg||c[S.err];return S.result}g.prototype.push=function(f,x){var S,y,C=this.strm,I=this.options.chunkSize;if(this.ended)return!1;y=x===~~x?x:x===!0?4:0,typeof f=="string"?C.input=o.string2buf(f):u.call(f)==="[object ArrayBuffer]"?C.input=new Uint8Array(f):C.input=f,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new a.Buf8(I),C.next_out=0,C.avail_out=I),(S=r.deflate(C,y))!==1&&S!==h)return this.onEnd(S),!(this.ended=!0);C.avail_out!==0&&(C.avail_in!==0||y!==4&&y!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(a.shrinkBuf(C.output,C.next_out))):this.onData(a.shrinkBuf(C.output,C.next_out)))}while((0<C.avail_in||C.avail_out===0)&&S!==1);return y===4?(S=r.deflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===h):y!==2||(this.onEnd(h),!(C.avail_out=0))},g.prototype.onData=function(f){this.chunks.push(f)},g.prototype.onEnd=function(f){f===h&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=f,this.msg=this.strm.msg},i.Deflate=g,i.deflate=m,i.deflateRaw=function(f,x){return(x=x||{}).raw=!0,m(f,x)},i.gzip=function(f,x){return(x=x||{}).gzip=!0,m(f,x)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,n,i){var r=t("./zlib/inflate"),a=t("./utils/common"),o=t("./utils/strings"),c=t("./zlib/constants"),l=t("./zlib/messages"),u=t("./zlib/zstream"),h=t("./zlib/gzheader"),p=Object.prototype.toString;function d(g){if(!(this instanceof d))return new d(g);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},g||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||g&&g.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&!(15&m.windowBits)&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var f=r.inflateInit2(this.strm,m.windowBits);if(f!==c.Z_OK)throw new Error(l[f]);this.header=new h,r.inflateGetHeader(this.strm,this.header)}function _(g,m){var f=new d(m);if(f.push(g,!0),f.err)throw f.msg||l[f.err];return f.result}d.prototype.push=function(g,m){var f,x,S,y,C,I,L=this.strm,D=this.options.chunkSize,E=this.options.dictionary,w=!1;if(this.ended)return!1;x=m===~~m?m:m===!0?c.Z_FINISH:c.Z_NO_FLUSH,typeof g=="string"?L.input=o.binstring2buf(g):p.call(g)==="[object ArrayBuffer]"?L.input=new Uint8Array(g):L.input=g,L.next_in=0,L.avail_in=L.input.length;do{if(L.avail_out===0&&(L.output=new a.Buf8(D),L.next_out=0,L.avail_out=D),(f=r.inflate(L,c.Z_NO_FLUSH))===c.Z_NEED_DICT&&E&&(I=typeof E=="string"?o.string2buf(E):p.call(E)==="[object ArrayBuffer]"?new Uint8Array(E):E,f=r.inflateSetDictionary(this.strm,I)),f===c.Z_BUF_ERROR&&w===!0&&(f=c.Z_OK,w=!1),f!==c.Z_STREAM_END&&f!==c.Z_OK)return this.onEnd(f),!(this.ended=!0);L.next_out&&(L.avail_out!==0&&f!==c.Z_STREAM_END&&(L.avail_in!==0||x!==c.Z_FINISH&&x!==c.Z_SYNC_FLUSH)||(this.options.to==="string"?(S=o.utf8border(L.output,L.next_out),y=L.next_out-S,C=o.buf2string(L.output,S),L.next_out=y,L.avail_out=D-y,y&&a.arraySet(L.output,L.output,S,y,0),this.onData(C)):this.onData(a.shrinkBuf(L.output,L.next_out)))),L.avail_in===0&&L.avail_out===0&&(w=!0)}while((0<L.avail_in||L.avail_out===0)&&f!==c.Z_STREAM_END);return f===c.Z_STREAM_END&&(x=c.Z_FINISH),x===c.Z_FINISH?(f=r.inflateEnd(this.strm),this.onEnd(f),this.ended=!0,f===c.Z_OK):x!==c.Z_SYNC_FLUSH||(this.onEnd(c.Z_OK),!(L.avail_out=0))},d.prototype.onData=function(g){this.chunks.push(g)},d.prototype.onEnd=function(g){g===c.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},i.Inflate=d,i.inflate=_,i.inflateRaw=function(g,m){return(m=m||{}).raw=!0,_(g,m)},i.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,n,i){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";i.assign=function(c){for(var l=Array.prototype.slice.call(arguments,1);l.length;){var u=l.shift();if(u){if(typeof u!="object")throw new TypeError(u+"must be non-object");for(var h in u)u.hasOwnProperty(h)&&(c[h]=u[h])}}return c},i.shrinkBuf=function(c,l){return c.length===l?c:c.subarray?c.subarray(0,l):(c.length=l,c)};var a={arraySet:function(c,l,u,h,p){if(l.subarray&&c.subarray)c.set(l.subarray(u,u+h),p);else for(var d=0;d<h;d++)c[p+d]=l[u+d]},flattenChunks:function(c){var l,u,h,p,d,_;for(l=h=0,u=c.length;l<u;l++)h+=c[l].length;for(_=new Uint8Array(h),l=p=0,u=c.length;l<u;l++)d=c[l],_.set(d,p),p+=d.length;return _}},o={arraySet:function(c,l,u,h,p){for(var d=0;d<h;d++)c[p+d]=l[u+d]},flattenChunks:function(c){return[].concat.apply([],c)}};i.setTyped=function(c){c?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,a)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,o))},i.setTyped(r)},{}],42:[function(t,n,i){var r=t("./common"),a=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var c=new r.Buf8(256),l=0;l<256;l++)c[l]=252<=l?6:248<=l?5:240<=l?4:224<=l?3:192<=l?2:1;function u(h,p){if(p<65537&&(h.subarray&&o||!h.subarray&&a))return String.fromCharCode.apply(null,r.shrinkBuf(h,p));for(var d="",_=0;_<p;_++)d+=String.fromCharCode(h[_]);return d}c[254]=c[254]=1,i.string2buf=function(h){var p,d,_,g,m,f=h.length,x=0;for(g=0;g<f;g++)(64512&(d=h.charCodeAt(g)))==55296&&g+1<f&&(64512&(_=h.charCodeAt(g+1)))==56320&&(d=65536+(d-55296<<10)+(_-56320),g++),x+=d<128?1:d<2048?2:d<65536?3:4;for(p=new r.Buf8(x),g=m=0;m<x;g++)(64512&(d=h.charCodeAt(g)))==55296&&g+1<f&&(64512&(_=h.charCodeAt(g+1)))==56320&&(d=65536+(d-55296<<10)+(_-56320),g++),d<128?p[m++]=d:(d<2048?p[m++]=192|d>>>6:(d<65536?p[m++]=224|d>>>12:(p[m++]=240|d>>>18,p[m++]=128|d>>>12&63),p[m++]=128|d>>>6&63),p[m++]=128|63&d);return p},i.buf2binstring=function(h){return u(h,h.length)},i.binstring2buf=function(h){for(var p=new r.Buf8(h.length),d=0,_=p.length;d<_;d++)p[d]=h.charCodeAt(d);return p},i.buf2string=function(h,p){var d,_,g,m,f=p||h.length,x=new Array(2*f);for(d=_=0;d<f;)if((g=h[d++])<128)x[_++]=g;else if(4<(m=c[g]))x[_++]=65533,d+=m-1;else{for(g&=m===2?31:m===3?15:7;1<m&&d<f;)g=g<<6|63&h[d++],m--;1<m?x[_++]=65533:g<65536?x[_++]=g:(g-=65536,x[_++]=55296|g>>10&1023,x[_++]=56320|1023&g)}return u(x,_)},i.utf8border=function(h,p){var d;for((p=p||h.length)>h.length&&(p=h.length),d=p-1;0<=d&&(192&h[d])==128;)d--;return d<0||d===0?p:d+c[h[d]]>p?d:p}},{"./common":41}],43:[function(t,n,i){n.exports=function(r,a,o,c){for(var l=65535&r|0,u=r>>>16&65535|0,h=0;o!==0;){for(o-=h=2e3<o?2e3:o;u=u+(l=l+a[c++]|0)|0,--h;);l%=65521,u%=65521}return l|u<<16|0}},{}],44:[function(t,n,i){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,n,i){var r=function(){for(var a,o=[],c=0;c<256;c++){a=c;for(var l=0;l<8;l++)a=1&a?3988292384^a>>>1:a>>>1;o[c]=a}return o}();n.exports=function(a,o,c,l){var u=r,h=l+c;a^=-1;for(var p=l;p<h;p++)a=a>>>8^u[255&(a^o[p])];return-1^a}},{}],46:[function(t,n,i){var r,a=t("../utils/common"),o=t("./trees"),c=t("./adler32"),l=t("./crc32"),u=t("./messages"),h=0,p=4,d=0,_=-2,g=-1,m=4,f=2,x=8,S=9,y=286,C=30,I=19,L=2*y+1,D=15,E=3,w=258,B=w+E+1,R=42,z=113,b=1,W=2,H=3,Z=4;function $(v,me){return v.msg=u[me],me}function Q(v){return(v<<1)-(4<v?9:0)}function fe(v){for(var me=v.length;0<=--me;)v[me]=0}function X(v){var me=v.state,se=me.pending;se>v.avail_out&&(se=v.avail_out),se!==0&&(a.arraySet(v.output,me.pending_buf,me.pending_out,se,v.next_out),v.next_out+=se,me.pending_out+=se,v.total_out+=se,v.avail_out-=se,me.pending-=se,me.pending===0&&(me.pending_out=0))}function K(v,me){o._tr_flush_block(v,0<=v.block_start?v.block_start:-1,v.strstart-v.block_start,me),v.block_start=v.strstart,X(v.strm)}function _e(v,me){v.pending_buf[v.pending++]=me}function j(v,me){v.pending_buf[v.pending++]=me>>>8&255,v.pending_buf[v.pending++]=255&me}function Y(v,me){var se,V,O=v.max_chain_length,J=v.strstart,oe=v.prev_length,P=v.nice_match,M=v.strstart>v.w_size-B?v.strstart-(v.w_size-B):0,G=v.window,re=v.w_mask,ne=v.prev,ae=v.strstart+w,we=G[J+oe-1],ye=G[J+oe];v.prev_length>=v.good_match&&(O>>=2),P>v.lookahead&&(P=v.lookahead);do if(G[(se=me)+oe]===ye&&G[se+oe-1]===we&&G[se]===G[J]&&G[++se]===G[J+1]){J+=2,se++;do;while(G[++J]===G[++se]&&G[++J]===G[++se]&&G[++J]===G[++se]&&G[++J]===G[++se]&&G[++J]===G[++se]&&G[++J]===G[++se]&&G[++J]===G[++se]&&G[++J]===G[++se]&&J<ae);if(V=w-(ae-J),J=ae-w,oe<V){if(v.match_start=me,P<=(oe=V))break;we=G[J+oe-1],ye=G[J+oe]}}while((me=ne[me&re])>M&&--O!=0);return oe<=v.lookahead?oe:v.lookahead}function ce(v){var me,se,V,O,J,oe,P,M,G,re,ne=v.w_size;do{if(O=v.window_size-v.lookahead-v.strstart,v.strstart>=ne+(ne-B)){for(a.arraySet(v.window,v.window,ne,ne,0),v.match_start-=ne,v.strstart-=ne,v.block_start-=ne,me=se=v.hash_size;V=v.head[--me],v.head[me]=ne<=V?V-ne:0,--se;);for(me=se=ne;V=v.prev[--me],v.prev[me]=ne<=V?V-ne:0,--se;);O+=ne}if(v.strm.avail_in===0)break;if(oe=v.strm,P=v.window,M=v.strstart+v.lookahead,G=O,re=void 0,re=oe.avail_in,G<re&&(re=G),se=re===0?0:(oe.avail_in-=re,a.arraySet(P,oe.input,oe.next_in,re,M),oe.state.wrap===1?oe.adler=c(oe.adler,P,re,M):oe.state.wrap===2&&(oe.adler=l(oe.adler,P,re,M)),oe.next_in+=re,oe.total_in+=re,re),v.lookahead+=se,v.lookahead+v.insert>=E)for(J=v.strstart-v.insert,v.ins_h=v.window[J],v.ins_h=(v.ins_h<<v.hash_shift^v.window[J+1])&v.hash_mask;v.insert&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[J+E-1])&v.hash_mask,v.prev[J&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=J,J++,v.insert--,!(v.lookahead+v.insert<E)););}while(v.lookahead<B&&v.strm.avail_in!==0)}function de(v,me){for(var se,V;;){if(v.lookahead<B){if(ce(v),v.lookahead<B&&me===h)return b;if(v.lookahead===0)break}if(se=0,v.lookahead>=E&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+E-1])&v.hash_mask,se=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),se!==0&&v.strstart-se<=v.w_size-B&&(v.match_length=Y(v,se)),v.match_length>=E)if(V=o._tr_tally(v,v.strstart-v.match_start,v.match_length-E),v.lookahead-=v.match_length,v.match_length<=v.max_lazy_match&&v.lookahead>=E){for(v.match_length--;v.strstart++,v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+E-1])&v.hash_mask,se=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart,--v.match_length!=0;);v.strstart++}else v.strstart+=v.match_length,v.match_length=0,v.ins_h=v.window[v.strstart],v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+1])&v.hash_mask;else V=o._tr_tally(v,0,v.window[v.strstart]),v.lookahead--,v.strstart++;if(V&&(K(v,!1),v.strm.avail_out===0))return b}return v.insert=v.strstart<E-1?v.strstart:E-1,me===p?(K(v,!0),v.strm.avail_out===0?H:Z):v.last_lit&&(K(v,!1),v.strm.avail_out===0)?b:W}function xe(v,me){for(var se,V,O;;){if(v.lookahead<B){if(ce(v),v.lookahead<B&&me===h)return b;if(v.lookahead===0)break}if(se=0,v.lookahead>=E&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+E-1])&v.hash_mask,se=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),v.prev_length=v.match_length,v.prev_match=v.match_start,v.match_length=E-1,se!==0&&v.prev_length<v.max_lazy_match&&v.strstart-se<=v.w_size-B&&(v.match_length=Y(v,se),v.match_length<=5&&(v.strategy===1||v.match_length===E&&4096<v.strstart-v.match_start)&&(v.match_length=E-1)),v.prev_length>=E&&v.match_length<=v.prev_length){for(O=v.strstart+v.lookahead-E,V=o._tr_tally(v,v.strstart-1-v.prev_match,v.prev_length-E),v.lookahead-=v.prev_length-1,v.prev_length-=2;++v.strstart<=O&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+E-1])&v.hash_mask,se=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),--v.prev_length!=0;);if(v.match_available=0,v.match_length=E-1,v.strstart++,V&&(K(v,!1),v.strm.avail_out===0))return b}else if(v.match_available){if((V=o._tr_tally(v,0,v.window[v.strstart-1]))&&K(v,!1),v.strstart++,v.lookahead--,v.strm.avail_out===0)return b}else v.match_available=1,v.strstart++,v.lookahead--}return v.match_available&&(V=o._tr_tally(v,0,v.window[v.strstart-1]),v.match_available=0),v.insert=v.strstart<E-1?v.strstart:E-1,me===p?(K(v,!0),v.strm.avail_out===0?H:Z):v.last_lit&&(K(v,!1),v.strm.avail_out===0)?b:W}function Ee(v,me,se,V,O){this.good_length=v,this.max_lazy=me,this.nice_length=se,this.max_chain=V,this.func=O}function Be(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=x,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*L),this.dyn_dtree=new a.Buf16(2*(2*C+1)),this.bl_tree=new a.Buf16(2*(2*I+1)),fe(this.dyn_ltree),fe(this.dyn_dtree),fe(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(D+1),this.heap=new a.Buf16(2*y+1),fe(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*y+1),fe(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Qe(v){var me;return v&&v.state?(v.total_in=v.total_out=0,v.data_type=f,(me=v.state).pending=0,me.pending_out=0,me.wrap<0&&(me.wrap=-me.wrap),me.status=me.wrap?R:z,v.adler=me.wrap===2?0:1,me.last_flush=h,o._tr_init(me),d):$(v,_)}function tt(v){var me=Qe(v);return me===d&&function(se){se.window_size=2*se.w_size,fe(se.head),se.max_lazy_match=r[se.level].max_lazy,se.good_match=r[se.level].good_length,se.nice_match=r[se.level].nice_length,se.max_chain_length=r[se.level].max_chain,se.strstart=0,se.block_start=0,se.lookahead=0,se.insert=0,se.match_length=se.prev_length=E-1,se.match_available=0,se.ins_h=0}(v.state),me}function pt(v,me,se,V,O,J){if(!v)return _;var oe=1;if(me===g&&(me=6),V<0?(oe=0,V=-V):15<V&&(oe=2,V-=16),O<1||S<O||se!==x||V<8||15<V||me<0||9<me||J<0||m<J)return $(v,_);V===8&&(V=9);var P=new Be;return(v.state=P).strm=v,P.wrap=oe,P.gzhead=null,P.w_bits=V,P.w_size=1<<P.w_bits,P.w_mask=P.w_size-1,P.hash_bits=O+7,P.hash_size=1<<P.hash_bits,P.hash_mask=P.hash_size-1,P.hash_shift=~~((P.hash_bits+E-1)/E),P.window=new a.Buf8(2*P.w_size),P.head=new a.Buf16(P.hash_size),P.prev=new a.Buf16(P.w_size),P.lit_bufsize=1<<O+6,P.pending_buf_size=4*P.lit_bufsize,P.pending_buf=new a.Buf8(P.pending_buf_size),P.d_buf=1*P.lit_bufsize,P.l_buf=3*P.lit_bufsize,P.level=me,P.strategy=J,P.method=se,tt(v)}r=[new Ee(0,0,0,0,function(v,me){var se=65535;for(se>v.pending_buf_size-5&&(se=v.pending_buf_size-5);;){if(v.lookahead<=1){if(ce(v),v.lookahead===0&&me===h)return b;if(v.lookahead===0)break}v.strstart+=v.lookahead,v.lookahead=0;var V=v.block_start+se;if((v.strstart===0||v.strstart>=V)&&(v.lookahead=v.strstart-V,v.strstart=V,K(v,!1),v.strm.avail_out===0)||v.strstart-v.block_start>=v.w_size-B&&(K(v,!1),v.strm.avail_out===0))return b}return v.insert=0,me===p?(K(v,!0),v.strm.avail_out===0?H:Z):(v.strstart>v.block_start&&(K(v,!1),v.strm.avail_out),b)}),new Ee(4,4,8,4,de),new Ee(4,5,16,8,de),new Ee(4,6,32,32,de),new Ee(4,4,16,16,xe),new Ee(8,16,32,32,xe),new Ee(8,16,128,128,xe),new Ee(8,32,128,256,xe),new Ee(32,128,258,1024,xe),new Ee(32,258,258,4096,xe)],i.deflateInit=function(v,me){return pt(v,me,x,15,8,0)},i.deflateInit2=pt,i.deflateReset=tt,i.deflateResetKeep=Qe,i.deflateSetHeader=function(v,me){return v&&v.state?v.state.wrap!==2?_:(v.state.gzhead=me,d):_},i.deflate=function(v,me){var se,V,O,J;if(!v||!v.state||5<me||me<0)return v?$(v,_):_;if(V=v.state,!v.output||!v.input&&v.avail_in!==0||V.status===666&&me!==p)return $(v,v.avail_out===0?-5:_);if(V.strm=v,se=V.last_flush,V.last_flush=me,V.status===R)if(V.wrap===2)v.adler=0,_e(V,31),_e(V,139),_e(V,8),V.gzhead?(_e(V,(V.gzhead.text?1:0)+(V.gzhead.hcrc?2:0)+(V.gzhead.extra?4:0)+(V.gzhead.name?8:0)+(V.gzhead.comment?16:0)),_e(V,255&V.gzhead.time),_e(V,V.gzhead.time>>8&255),_e(V,V.gzhead.time>>16&255),_e(V,V.gzhead.time>>24&255),_e(V,V.level===9?2:2<=V.strategy||V.level<2?4:0),_e(V,255&V.gzhead.os),V.gzhead.extra&&V.gzhead.extra.length&&(_e(V,255&V.gzhead.extra.length),_e(V,V.gzhead.extra.length>>8&255)),V.gzhead.hcrc&&(v.adler=l(v.adler,V.pending_buf,V.pending,0)),V.gzindex=0,V.status=69):(_e(V,0),_e(V,0),_e(V,0),_e(V,0),_e(V,0),_e(V,V.level===9?2:2<=V.strategy||V.level<2?4:0),_e(V,3),V.status=z);else{var oe=x+(V.w_bits-8<<4)<<8;oe|=(2<=V.strategy||V.level<2?0:V.level<6?1:V.level===6?2:3)<<6,V.strstart!==0&&(oe|=32),oe+=31-oe%31,V.status=z,j(V,oe),V.strstart!==0&&(j(V,v.adler>>>16),j(V,65535&v.adler)),v.adler=1}if(V.status===69)if(V.gzhead.extra){for(O=V.pending;V.gzindex<(65535&V.gzhead.extra.length)&&(V.pending!==V.pending_buf_size||(V.gzhead.hcrc&&V.pending>O&&(v.adler=l(v.adler,V.pending_buf,V.pending-O,O)),X(v),O=V.pending,V.pending!==V.pending_buf_size));)_e(V,255&V.gzhead.extra[V.gzindex]),V.gzindex++;V.gzhead.hcrc&&V.pending>O&&(v.adler=l(v.adler,V.pending_buf,V.pending-O,O)),V.gzindex===V.gzhead.extra.length&&(V.gzindex=0,V.status=73)}else V.status=73;if(V.status===73)if(V.gzhead.name){O=V.pending;do{if(V.pending===V.pending_buf_size&&(V.gzhead.hcrc&&V.pending>O&&(v.adler=l(v.adler,V.pending_buf,V.pending-O,O)),X(v),O=V.pending,V.pending===V.pending_buf_size)){J=1;break}J=V.gzindex<V.gzhead.name.length?255&V.gzhead.name.charCodeAt(V.gzindex++):0,_e(V,J)}while(J!==0);V.gzhead.hcrc&&V.pending>O&&(v.adler=l(v.adler,V.pending_buf,V.pending-O,O)),J===0&&(V.gzindex=0,V.status=91)}else V.status=91;if(V.status===91)if(V.gzhead.comment){O=V.pending;do{if(V.pending===V.pending_buf_size&&(V.gzhead.hcrc&&V.pending>O&&(v.adler=l(v.adler,V.pending_buf,V.pending-O,O)),X(v),O=V.pending,V.pending===V.pending_buf_size)){J=1;break}J=V.gzindex<V.gzhead.comment.length?255&V.gzhead.comment.charCodeAt(V.gzindex++):0,_e(V,J)}while(J!==0);V.gzhead.hcrc&&V.pending>O&&(v.adler=l(v.adler,V.pending_buf,V.pending-O,O)),J===0&&(V.status=103)}else V.status=103;if(V.status===103&&(V.gzhead.hcrc?(V.pending+2>V.pending_buf_size&&X(v),V.pending+2<=V.pending_buf_size&&(_e(V,255&v.adler),_e(V,v.adler>>8&255),v.adler=0,V.status=z)):V.status=z),V.pending!==0){if(X(v),v.avail_out===0)return V.last_flush=-1,d}else if(v.avail_in===0&&Q(me)<=Q(se)&&me!==p)return $(v,-5);if(V.status===666&&v.avail_in!==0)return $(v,-5);if(v.avail_in!==0||V.lookahead!==0||me!==h&&V.status!==666){var P=V.strategy===2?function(M,G){for(var re;;){if(M.lookahead===0&&(ce(M),M.lookahead===0)){if(G===h)return b;break}if(M.match_length=0,re=o._tr_tally(M,0,M.window[M.strstart]),M.lookahead--,M.strstart++,re&&(K(M,!1),M.strm.avail_out===0))return b}return M.insert=0,G===p?(K(M,!0),M.strm.avail_out===0?H:Z):M.last_lit&&(K(M,!1),M.strm.avail_out===0)?b:W}(V,me):V.strategy===3?function(M,G){for(var re,ne,ae,we,ye=M.window;;){if(M.lookahead<=w){if(ce(M),M.lookahead<=w&&G===h)return b;if(M.lookahead===0)break}if(M.match_length=0,M.lookahead>=E&&0<M.strstart&&(ne=ye[ae=M.strstart-1])===ye[++ae]&&ne===ye[++ae]&&ne===ye[++ae]){we=M.strstart+w;do;while(ne===ye[++ae]&&ne===ye[++ae]&&ne===ye[++ae]&&ne===ye[++ae]&&ne===ye[++ae]&&ne===ye[++ae]&&ne===ye[++ae]&&ne===ye[++ae]&&ae<we);M.match_length=w-(we-ae),M.match_length>M.lookahead&&(M.match_length=M.lookahead)}if(M.match_length>=E?(re=o._tr_tally(M,1,M.match_length-E),M.lookahead-=M.match_length,M.strstart+=M.match_length,M.match_length=0):(re=o._tr_tally(M,0,M.window[M.strstart]),M.lookahead--,M.strstart++),re&&(K(M,!1),M.strm.avail_out===0))return b}return M.insert=0,G===p?(K(M,!0),M.strm.avail_out===0?H:Z):M.last_lit&&(K(M,!1),M.strm.avail_out===0)?b:W}(V,me):r[V.level].func(V,me);if(P!==H&&P!==Z||(V.status=666),P===b||P===H)return v.avail_out===0&&(V.last_flush=-1),d;if(P===W&&(me===1?o._tr_align(V):me!==5&&(o._tr_stored_block(V,0,0,!1),me===3&&(fe(V.head),V.lookahead===0&&(V.strstart=0,V.block_start=0,V.insert=0))),X(v),v.avail_out===0))return V.last_flush=-1,d}return me!==p?d:V.wrap<=0?1:(V.wrap===2?(_e(V,255&v.adler),_e(V,v.adler>>8&255),_e(V,v.adler>>16&255),_e(V,v.adler>>24&255),_e(V,255&v.total_in),_e(V,v.total_in>>8&255),_e(V,v.total_in>>16&255),_e(V,v.total_in>>24&255)):(j(V,v.adler>>>16),j(V,65535&v.adler)),X(v),0<V.wrap&&(V.wrap=-V.wrap),V.pending!==0?d:1)},i.deflateEnd=function(v){var me;return v&&v.state?(me=v.state.status)!==R&&me!==69&&me!==73&&me!==91&&me!==103&&me!==z&&me!==666?$(v,_):(v.state=null,me===z?$(v,-3):d):_},i.deflateSetDictionary=function(v,me){var se,V,O,J,oe,P,M,G,re=me.length;if(!v||!v.state||(J=(se=v.state).wrap)===2||J===1&&se.status!==R||se.lookahead)return _;for(J===1&&(v.adler=c(v.adler,me,re,0)),se.wrap=0,re>=se.w_size&&(J===0&&(fe(se.head),se.strstart=0,se.block_start=0,se.insert=0),G=new a.Buf8(se.w_size),a.arraySet(G,me,re-se.w_size,se.w_size,0),me=G,re=se.w_size),oe=v.avail_in,P=v.next_in,M=v.input,v.avail_in=re,v.next_in=0,v.input=me,ce(se);se.lookahead>=E;){for(V=se.strstart,O=se.lookahead-(E-1);se.ins_h=(se.ins_h<<se.hash_shift^se.window[V+E-1])&se.hash_mask,se.prev[V&se.w_mask]=se.head[se.ins_h],se.head[se.ins_h]=V,V++,--O;);se.strstart=V,se.lookahead=E-1,ce(se)}return se.strstart+=se.lookahead,se.block_start=se.strstart,se.insert=se.lookahead,se.lookahead=0,se.match_length=se.prev_length=E-1,se.match_available=0,v.next_in=P,v.input=M,v.avail_in=oe,se.wrap=J,d},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,n,i){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,n,i){n.exports=function(r,a){var o,c,l,u,h,p,d,_,g,m,f,x,S,y,C,I,L,D,E,w,B,R,z,b,W;o=r.state,c=r.next_in,b=r.input,l=c+(r.avail_in-5),u=r.next_out,W=r.output,h=u-(a-r.avail_out),p=u+(r.avail_out-257),d=o.dmax,_=o.wsize,g=o.whave,m=o.wnext,f=o.window,x=o.hold,S=o.bits,y=o.lencode,C=o.distcode,I=(1<<o.lenbits)-1,L=(1<<o.distbits)-1;e:do{S<15&&(x+=b[c++]<<S,S+=8,x+=b[c++]<<S,S+=8),D=y[x&I];t:for(;;){if(x>>>=E=D>>>24,S-=E,(E=D>>>16&255)===0)W[u++]=65535&D;else{if(!(16&E)){if(!(64&E)){D=y[(65535&D)+(x&(1<<E)-1)];continue t}if(32&E){o.mode=12;break e}r.msg="invalid literal/length code",o.mode=30;break e}w=65535&D,(E&=15)&&(S<E&&(x+=b[c++]<<S,S+=8),w+=x&(1<<E)-1,x>>>=E,S-=E),S<15&&(x+=b[c++]<<S,S+=8,x+=b[c++]<<S,S+=8),D=C[x&L];n:for(;;){if(x>>>=E=D>>>24,S-=E,!(16&(E=D>>>16&255))){if(!(64&E)){D=C[(65535&D)+(x&(1<<E)-1)];continue n}r.msg="invalid distance code",o.mode=30;break e}if(B=65535&D,S<(E&=15)&&(x+=b[c++]<<S,(S+=8)<E&&(x+=b[c++]<<S,S+=8)),d<(B+=x&(1<<E)-1)){r.msg="invalid distance too far back",o.mode=30;break e}if(x>>>=E,S-=E,(E=u-h)<B){if(g<(E=B-E)&&o.sane){r.msg="invalid distance too far back",o.mode=30;break e}if(z=f,(R=0)===m){if(R+=_-E,E<w){for(w-=E;W[u++]=f[R++],--E;);R=u-B,z=W}}else if(m<E){if(R+=_+m-E,(E-=m)<w){for(w-=E;W[u++]=f[R++],--E;);if(R=0,m<w){for(w-=E=m;W[u++]=f[R++],--E;);R=u-B,z=W}}}else if(R+=m-E,E<w){for(w-=E;W[u++]=f[R++],--E;);R=u-B,z=W}for(;2<w;)W[u++]=z[R++],W[u++]=z[R++],W[u++]=z[R++],w-=3;w&&(W[u++]=z[R++],1<w&&(W[u++]=z[R++]))}else{for(R=u-B;W[u++]=W[R++],W[u++]=W[R++],W[u++]=W[R++],2<(w-=3););w&&(W[u++]=W[R++],1<w&&(W[u++]=W[R++]))}break}}break}}while(c<l&&u<p);c-=w=S>>3,x&=(1<<(S-=w<<3))-1,r.next_in=c,r.next_out=u,r.avail_in=c<l?l-c+5:5-(c-l),r.avail_out=u<p?p-u+257:257-(u-p),o.hold=x,o.bits=S}},{}],49:[function(t,n,i){var r=t("../utils/common"),a=t("./adler32"),o=t("./crc32"),c=t("./inffast"),l=t("./inftrees"),u=1,h=2,p=0,d=-2,_=1,g=852,m=592;function f(R){return(R>>>24&255)+(R>>>8&65280)+((65280&R)<<8)+((255&R)<<24)}function x(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function S(R){var z;return R&&R.state?(z=R.state,R.total_in=R.total_out=z.total=0,R.msg="",z.wrap&&(R.adler=1&z.wrap),z.mode=_,z.last=0,z.havedict=0,z.dmax=32768,z.head=null,z.hold=0,z.bits=0,z.lencode=z.lendyn=new r.Buf32(g),z.distcode=z.distdyn=new r.Buf32(m),z.sane=1,z.back=-1,p):d}function y(R){var z;return R&&R.state?((z=R.state).wsize=0,z.whave=0,z.wnext=0,S(R)):d}function C(R,z){var b,W;return R&&R.state?(W=R.state,z<0?(b=0,z=-z):(b=1+(z>>4),z<48&&(z&=15)),z&&(z<8||15<z)?d:(W.window!==null&&W.wbits!==z&&(W.window=null),W.wrap=b,W.wbits=z,y(R))):d}function I(R,z){var b,W;return R?(W=new x,(R.state=W).window=null,(b=C(R,z))!==p&&(R.state=null),b):d}var L,D,E=!0;function w(R){if(E){var z;for(L=new r.Buf32(512),D=new r.Buf32(32),z=0;z<144;)R.lens[z++]=8;for(;z<256;)R.lens[z++]=9;for(;z<280;)R.lens[z++]=7;for(;z<288;)R.lens[z++]=8;for(l(u,R.lens,0,288,L,0,R.work,{bits:9}),z=0;z<32;)R.lens[z++]=5;l(h,R.lens,0,32,D,0,R.work,{bits:5}),E=!1}R.lencode=L,R.lenbits=9,R.distcode=D,R.distbits=5}function B(R,z,b,W){var H,Z=R.state;return Z.window===null&&(Z.wsize=1<<Z.wbits,Z.wnext=0,Z.whave=0,Z.window=new r.Buf8(Z.wsize)),W>=Z.wsize?(r.arraySet(Z.window,z,b-Z.wsize,Z.wsize,0),Z.wnext=0,Z.whave=Z.wsize):(W<(H=Z.wsize-Z.wnext)&&(H=W),r.arraySet(Z.window,z,b-W,H,Z.wnext),(W-=H)?(r.arraySet(Z.window,z,b-W,W,0),Z.wnext=W,Z.whave=Z.wsize):(Z.wnext+=H,Z.wnext===Z.wsize&&(Z.wnext=0),Z.whave<Z.wsize&&(Z.whave+=H))),0}i.inflateReset=y,i.inflateReset2=C,i.inflateResetKeep=S,i.inflateInit=function(R){return I(R,15)},i.inflateInit2=I,i.inflate=function(R,z){var b,W,H,Z,$,Q,fe,X,K,_e,j,Y,ce,de,xe,Ee,Be,Qe,tt,pt,v,me,se,V,O=0,J=new r.Buf8(4),oe=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!R||!R.state||!R.output||!R.input&&R.avail_in!==0)return d;(b=R.state).mode===12&&(b.mode=13),$=R.next_out,H=R.output,fe=R.avail_out,Z=R.next_in,W=R.input,Q=R.avail_in,X=b.hold,K=b.bits,_e=Q,j=fe,me=p;e:for(;;)switch(b.mode){case _:if(b.wrap===0){b.mode=13;break}for(;K<16;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}if(2&b.wrap&&X===35615){J[b.check=0]=255&X,J[1]=X>>>8&255,b.check=o(b.check,J,2,0),K=X=0,b.mode=2;break}if(b.flags=0,b.head&&(b.head.done=!1),!(1&b.wrap)||(((255&X)<<8)+(X>>8))%31){R.msg="incorrect header check",b.mode=30;break}if((15&X)!=8){R.msg="unknown compression method",b.mode=30;break}if(K-=4,v=8+(15&(X>>>=4)),b.wbits===0)b.wbits=v;else if(v>b.wbits){R.msg="invalid window size",b.mode=30;break}b.dmax=1<<v,R.adler=b.check=1,b.mode=512&X?10:12,K=X=0;break;case 2:for(;K<16;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}if(b.flags=X,(255&b.flags)!=8){R.msg="unknown compression method",b.mode=30;break}if(57344&b.flags){R.msg="unknown header flags set",b.mode=30;break}b.head&&(b.head.text=X>>8&1),512&b.flags&&(J[0]=255&X,J[1]=X>>>8&255,b.check=o(b.check,J,2,0)),K=X=0,b.mode=3;case 3:for(;K<32;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}b.head&&(b.head.time=X),512&b.flags&&(J[0]=255&X,J[1]=X>>>8&255,J[2]=X>>>16&255,J[3]=X>>>24&255,b.check=o(b.check,J,4,0)),K=X=0,b.mode=4;case 4:for(;K<16;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}b.head&&(b.head.xflags=255&X,b.head.os=X>>8),512&b.flags&&(J[0]=255&X,J[1]=X>>>8&255,b.check=o(b.check,J,2,0)),K=X=0,b.mode=5;case 5:if(1024&b.flags){for(;K<16;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}b.length=X,b.head&&(b.head.extra_len=X),512&b.flags&&(J[0]=255&X,J[1]=X>>>8&255,b.check=o(b.check,J,2,0)),K=X=0}else b.head&&(b.head.extra=null);b.mode=6;case 6:if(1024&b.flags&&(Q<(Y=b.length)&&(Y=Q),Y&&(b.head&&(v=b.head.extra_len-b.length,b.head.extra||(b.head.extra=new Array(b.head.extra_len)),r.arraySet(b.head.extra,W,Z,Y,v)),512&b.flags&&(b.check=o(b.check,W,Y,Z)),Q-=Y,Z+=Y,b.length-=Y),b.length))break e;b.length=0,b.mode=7;case 7:if(2048&b.flags){if(Q===0)break e;for(Y=0;v=W[Z+Y++],b.head&&v&&b.length<65536&&(b.head.name+=String.fromCharCode(v)),v&&Y<Q;);if(512&b.flags&&(b.check=o(b.check,W,Y,Z)),Q-=Y,Z+=Y,v)break e}else b.head&&(b.head.name=null);b.length=0,b.mode=8;case 8:if(4096&b.flags){if(Q===0)break e;for(Y=0;v=W[Z+Y++],b.head&&v&&b.length<65536&&(b.head.comment+=String.fromCharCode(v)),v&&Y<Q;);if(512&b.flags&&(b.check=o(b.check,W,Y,Z)),Q-=Y,Z+=Y,v)break e}else b.head&&(b.head.comment=null);b.mode=9;case 9:if(512&b.flags){for(;K<16;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}if(X!==(65535&b.check)){R.msg="header crc mismatch",b.mode=30;break}K=X=0}b.head&&(b.head.hcrc=b.flags>>9&1,b.head.done=!0),R.adler=b.check=0,b.mode=12;break;case 10:for(;K<32;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}R.adler=b.check=f(X),K=X=0,b.mode=11;case 11:if(b.havedict===0)return R.next_out=$,R.avail_out=fe,R.next_in=Z,R.avail_in=Q,b.hold=X,b.bits=K,2;R.adler=b.check=1,b.mode=12;case 12:if(z===5||z===6)break e;case 13:if(b.last){X>>>=7&K,K-=7&K,b.mode=27;break}for(;K<3;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}switch(b.last=1&X,K-=1,3&(X>>>=1)){case 0:b.mode=14;break;case 1:if(w(b),b.mode=20,z!==6)break;X>>>=2,K-=2;break e;case 2:b.mode=17;break;case 3:R.msg="invalid block type",b.mode=30}X>>>=2,K-=2;break;case 14:for(X>>>=7&K,K-=7&K;K<32;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}if((65535&X)!=(X>>>16^65535)){R.msg="invalid stored block lengths",b.mode=30;break}if(b.length=65535&X,K=X=0,b.mode=15,z===6)break e;case 15:b.mode=16;case 16:if(Y=b.length){if(Q<Y&&(Y=Q),fe<Y&&(Y=fe),Y===0)break e;r.arraySet(H,W,Z,Y,$),Q-=Y,Z+=Y,fe-=Y,$+=Y,b.length-=Y;break}b.mode=12;break;case 17:for(;K<14;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}if(b.nlen=257+(31&X),X>>>=5,K-=5,b.ndist=1+(31&X),X>>>=5,K-=5,b.ncode=4+(15&X),X>>>=4,K-=4,286<b.nlen||30<b.ndist){R.msg="too many length or distance symbols",b.mode=30;break}b.have=0,b.mode=18;case 18:for(;b.have<b.ncode;){for(;K<3;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}b.lens[oe[b.have++]]=7&X,X>>>=3,K-=3}for(;b.have<19;)b.lens[oe[b.have++]]=0;if(b.lencode=b.lendyn,b.lenbits=7,se={bits:b.lenbits},me=l(0,b.lens,0,19,b.lencode,0,b.work,se),b.lenbits=se.bits,me){R.msg="invalid code lengths set",b.mode=30;break}b.have=0,b.mode=19;case 19:for(;b.have<b.nlen+b.ndist;){for(;Ee=(O=b.lencode[X&(1<<b.lenbits)-1])>>>16&255,Be=65535&O,!((xe=O>>>24)<=K);){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}if(Be<16)X>>>=xe,K-=xe,b.lens[b.have++]=Be;else{if(Be===16){for(V=xe+2;K<V;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}if(X>>>=xe,K-=xe,b.have===0){R.msg="invalid bit length repeat",b.mode=30;break}v=b.lens[b.have-1],Y=3+(3&X),X>>>=2,K-=2}else if(Be===17){for(V=xe+3;K<V;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}K-=xe,v=0,Y=3+(7&(X>>>=xe)),X>>>=3,K-=3}else{for(V=xe+7;K<V;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}K-=xe,v=0,Y=11+(127&(X>>>=xe)),X>>>=7,K-=7}if(b.have+Y>b.nlen+b.ndist){R.msg="invalid bit length repeat",b.mode=30;break}for(;Y--;)b.lens[b.have++]=v}}if(b.mode===30)break;if(b.lens[256]===0){R.msg="invalid code -- missing end-of-block",b.mode=30;break}if(b.lenbits=9,se={bits:b.lenbits},me=l(u,b.lens,0,b.nlen,b.lencode,0,b.work,se),b.lenbits=se.bits,me){R.msg="invalid literal/lengths set",b.mode=30;break}if(b.distbits=6,b.distcode=b.distdyn,se={bits:b.distbits},me=l(h,b.lens,b.nlen,b.ndist,b.distcode,0,b.work,se),b.distbits=se.bits,me){R.msg="invalid distances set",b.mode=30;break}if(b.mode=20,z===6)break e;case 20:b.mode=21;case 21:if(6<=Q&&258<=fe){R.next_out=$,R.avail_out=fe,R.next_in=Z,R.avail_in=Q,b.hold=X,b.bits=K,c(R,j),$=R.next_out,H=R.output,fe=R.avail_out,Z=R.next_in,W=R.input,Q=R.avail_in,X=b.hold,K=b.bits,b.mode===12&&(b.back=-1);break}for(b.back=0;Ee=(O=b.lencode[X&(1<<b.lenbits)-1])>>>16&255,Be=65535&O,!((xe=O>>>24)<=K);){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}if(Ee&&!(240&Ee)){for(Qe=xe,tt=Ee,pt=Be;Ee=(O=b.lencode[pt+((X&(1<<Qe+tt)-1)>>Qe)])>>>16&255,Be=65535&O,!(Qe+(xe=O>>>24)<=K);){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}X>>>=Qe,K-=Qe,b.back+=Qe}if(X>>>=xe,K-=xe,b.back+=xe,b.length=Be,Ee===0){b.mode=26;break}if(32&Ee){b.back=-1,b.mode=12;break}if(64&Ee){R.msg="invalid literal/length code",b.mode=30;break}b.extra=15&Ee,b.mode=22;case 22:if(b.extra){for(V=b.extra;K<V;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}b.length+=X&(1<<b.extra)-1,X>>>=b.extra,K-=b.extra,b.back+=b.extra}b.was=b.length,b.mode=23;case 23:for(;Ee=(O=b.distcode[X&(1<<b.distbits)-1])>>>16&255,Be=65535&O,!((xe=O>>>24)<=K);){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}if(!(240&Ee)){for(Qe=xe,tt=Ee,pt=Be;Ee=(O=b.distcode[pt+((X&(1<<Qe+tt)-1)>>Qe)])>>>16&255,Be=65535&O,!(Qe+(xe=O>>>24)<=K);){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}X>>>=Qe,K-=Qe,b.back+=Qe}if(X>>>=xe,K-=xe,b.back+=xe,64&Ee){R.msg="invalid distance code",b.mode=30;break}b.offset=Be,b.extra=15&Ee,b.mode=24;case 24:if(b.extra){for(V=b.extra;K<V;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}b.offset+=X&(1<<b.extra)-1,X>>>=b.extra,K-=b.extra,b.back+=b.extra}if(b.offset>b.dmax){R.msg="invalid distance too far back",b.mode=30;break}b.mode=25;case 25:if(fe===0)break e;if(Y=j-fe,b.offset>Y){if((Y=b.offset-Y)>b.whave&&b.sane){R.msg="invalid distance too far back",b.mode=30;break}ce=Y>b.wnext?(Y-=b.wnext,b.wsize-Y):b.wnext-Y,Y>b.length&&(Y=b.length),de=b.window}else de=H,ce=$-b.offset,Y=b.length;for(fe<Y&&(Y=fe),fe-=Y,b.length-=Y;H[$++]=de[ce++],--Y;);b.length===0&&(b.mode=21);break;case 26:if(fe===0)break e;H[$++]=b.length,fe--,b.mode=21;break;case 27:if(b.wrap){for(;K<32;){if(Q===0)break e;Q--,X|=W[Z++]<<K,K+=8}if(j-=fe,R.total_out+=j,b.total+=j,j&&(R.adler=b.check=b.flags?o(b.check,H,j,$-j):a(b.check,H,j,$-j)),j=fe,(b.flags?X:f(X))!==b.check){R.msg="incorrect data check",b.mode=30;break}K=X=0}b.mode=28;case 28:if(b.wrap&&b.flags){for(;K<32;){if(Q===0)break e;Q--,X+=W[Z++]<<K,K+=8}if(X!==(4294967295&b.total)){R.msg="incorrect length check",b.mode=30;break}K=X=0}b.mode=29;case 29:me=1;break e;case 30:me=-3;break e;case 31:return-4;case 32:default:return d}return R.next_out=$,R.avail_out=fe,R.next_in=Z,R.avail_in=Q,b.hold=X,b.bits=K,(b.wsize||j!==R.avail_out&&b.mode<30&&(b.mode<27||z!==4))&&B(R,R.output,R.next_out,j-R.avail_out)?(b.mode=31,-4):(_e-=R.avail_in,j-=R.avail_out,R.total_in+=_e,R.total_out+=j,b.total+=j,b.wrap&&j&&(R.adler=b.check=b.flags?o(b.check,H,j,R.next_out-j):a(b.check,H,j,R.next_out-j)),R.data_type=b.bits+(b.last?64:0)+(b.mode===12?128:0)+(b.mode===20||b.mode===15?256:0),(_e==0&&j===0||z===4)&&me===p&&(me=-5),me)},i.inflateEnd=function(R){if(!R||!R.state)return d;var z=R.state;return z.window&&(z.window=null),R.state=null,p},i.inflateGetHeader=function(R,z){var b;return R&&R.state&&2&(b=R.state).wrap?((b.head=z).done=!1,p):d},i.inflateSetDictionary=function(R,z){var b,W=z.length;return R&&R.state?(b=R.state).wrap!==0&&b.mode!==11?d:b.mode===11&&a(1,z,W,0)!==b.check?-3:B(R,z,W,W)?(b.mode=31,-4):(b.havedict=1,p):d},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,n,i){var r=t("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],l=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(u,h,p,d,_,g,m,f){var x,S,y,C,I,L,D,E,w,B=f.bits,R=0,z=0,b=0,W=0,H=0,Z=0,$=0,Q=0,fe=0,X=0,K=null,_e=0,j=new r.Buf16(16),Y=new r.Buf16(16),ce=null,de=0;for(R=0;R<=15;R++)j[R]=0;for(z=0;z<d;z++)j[h[p+z]]++;for(H=B,W=15;1<=W&&j[W]===0;W--);if(W<H&&(H=W),W===0)return _[g++]=20971520,_[g++]=20971520,f.bits=1,0;for(b=1;b<W&&j[b]===0;b++);for(H<b&&(H=b),R=Q=1;R<=15;R++)if(Q<<=1,(Q-=j[R])<0)return-1;if(0<Q&&(u===0||W!==1))return-1;for(Y[1]=0,R=1;R<15;R++)Y[R+1]=Y[R]+j[R];for(z=0;z<d;z++)h[p+z]!==0&&(m[Y[h[p+z]]++]=z);if(L=u===0?(K=ce=m,19):u===1?(K=a,_e-=257,ce=o,de-=257,256):(K=c,ce=l,-1),R=b,I=g,$=z=X=0,y=-1,C=(fe=1<<(Z=H))-1,u===1&&852<fe||u===2&&592<fe)return 1;for(;;){for(D=R-$,w=m[z]<L?(E=0,m[z]):m[z]>L?(E=ce[de+m[z]],K[_e+m[z]]):(E=96,0),x=1<<R-$,b=S=1<<Z;_[I+(X>>$)+(S-=x)]=D<<24|E<<16|w|0,S!==0;);for(x=1<<R-1;X&x;)x>>=1;if(x!==0?(X&=x-1,X+=x):X=0,z++,--j[R]==0){if(R===W)break;R=h[p+m[z]]}if(H<R&&(X&C)!==y){for($===0&&($=H),I+=b,Q=1<<(Z=R-$);Z+$<W&&!((Q-=j[Z+$])<=0);)Z++,Q<<=1;if(fe+=1<<Z,u===1&&852<fe||u===2&&592<fe)return 1;_[y=X&C]=H<<24|Z<<16|I-g|0}}return X!==0&&(_[I+X]=R-$<<24|64<<16|0),f.bits=H,0}},{"../utils/common":41}],51:[function(t,n,i){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,n,i){var r=t("../utils/common"),a=0,o=1;function c(O){for(var J=O.length;0<=--J;)O[J]=0}var l=0,u=29,h=256,p=h+1+u,d=30,_=19,g=2*p+1,m=15,f=16,x=7,S=256,y=16,C=17,I=18,L=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],D=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],E=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],B=new Array(2*(p+2));c(B);var R=new Array(2*d);c(R);var z=new Array(512);c(z);var b=new Array(256);c(b);var W=new Array(u);c(W);var H,Z,$,Q=new Array(d);function fe(O,J,oe,P,M){this.static_tree=O,this.extra_bits=J,this.extra_base=oe,this.elems=P,this.max_length=M,this.has_stree=O&&O.length}function X(O,J){this.dyn_tree=O,this.max_code=0,this.stat_desc=J}function K(O){return O<256?z[O]:z[256+(O>>>7)]}function _e(O,J){O.pending_buf[O.pending++]=255&J,O.pending_buf[O.pending++]=J>>>8&255}function j(O,J,oe){O.bi_valid>f-oe?(O.bi_buf|=J<<O.bi_valid&65535,_e(O,O.bi_buf),O.bi_buf=J>>f-O.bi_valid,O.bi_valid+=oe-f):(O.bi_buf|=J<<O.bi_valid&65535,O.bi_valid+=oe)}function Y(O,J,oe){j(O,oe[2*J],oe[2*J+1])}function ce(O,J){for(var oe=0;oe|=1&O,O>>>=1,oe<<=1,0<--J;);return oe>>>1}function de(O,J,oe){var P,M,G=new Array(m+1),re=0;for(P=1;P<=m;P++)G[P]=re=re+oe[P-1]<<1;for(M=0;M<=J;M++){var ne=O[2*M+1];ne!==0&&(O[2*M]=ce(G[ne]++,ne))}}function xe(O){var J;for(J=0;J<p;J++)O.dyn_ltree[2*J]=0;for(J=0;J<d;J++)O.dyn_dtree[2*J]=0;for(J=0;J<_;J++)O.bl_tree[2*J]=0;O.dyn_ltree[2*S]=1,O.opt_len=O.static_len=0,O.last_lit=O.matches=0}function Ee(O){8<O.bi_valid?_e(O,O.bi_buf):0<O.bi_valid&&(O.pending_buf[O.pending++]=O.bi_buf),O.bi_buf=0,O.bi_valid=0}function Be(O,J,oe,P){var M=2*J,G=2*oe;return O[M]<O[G]||O[M]===O[G]&&P[J]<=P[oe]}function Qe(O,J,oe){for(var P=O.heap[oe],M=oe<<1;M<=O.heap_len&&(M<O.heap_len&&Be(J,O.heap[M+1],O.heap[M],O.depth)&&M++,!Be(J,P,O.heap[M],O.depth));)O.heap[oe]=O.heap[M],oe=M,M<<=1;O.heap[oe]=P}function tt(O,J,oe){var P,M,G,re,ne=0;if(O.last_lit!==0)for(;P=O.pending_buf[O.d_buf+2*ne]<<8|O.pending_buf[O.d_buf+2*ne+1],M=O.pending_buf[O.l_buf+ne],ne++,P===0?Y(O,M,J):(Y(O,(G=b[M])+h+1,J),(re=L[G])!==0&&j(O,M-=W[G],re),Y(O,G=K(--P),oe),(re=D[G])!==0&&j(O,P-=Q[G],re)),ne<O.last_lit;);Y(O,S,J)}function pt(O,J){var oe,P,M,G=J.dyn_tree,re=J.stat_desc.static_tree,ne=J.stat_desc.has_stree,ae=J.stat_desc.elems,we=-1;for(O.heap_len=0,O.heap_max=g,oe=0;oe<ae;oe++)G[2*oe]!==0?(O.heap[++O.heap_len]=we=oe,O.depth[oe]=0):G[2*oe+1]=0;for(;O.heap_len<2;)G[2*(M=O.heap[++O.heap_len]=we<2?++we:0)]=1,O.depth[M]=0,O.opt_len--,ne&&(O.static_len-=re[2*M+1]);for(J.max_code=we,oe=O.heap_len>>1;1<=oe;oe--)Qe(O,G,oe);for(M=ae;oe=O.heap[1],O.heap[1]=O.heap[O.heap_len--],Qe(O,G,1),P=O.heap[1],O.heap[--O.heap_max]=oe,O.heap[--O.heap_max]=P,G[2*M]=G[2*oe]+G[2*P],O.depth[M]=(O.depth[oe]>=O.depth[P]?O.depth[oe]:O.depth[P])+1,G[2*oe+1]=G[2*P+1]=M,O.heap[1]=M++,Qe(O,G,1),2<=O.heap_len;);O.heap[--O.heap_max]=O.heap[1],function(ye,Ae){var ct,be,Ue,Pe,Ke,Fe,nt=Ae.dyn_tree,it=Ae.max_code,yt=Ae.stat_desc.static_tree,te=Ae.stat_desc.has_stree,Re=Ae.stat_desc.extra_bits,pe=Ae.stat_desc.extra_base,ve=Ae.stat_desc.max_length,Ce=0;for(Pe=0;Pe<=m;Pe++)ye.bl_count[Pe]=0;for(nt[2*ye.heap[ye.heap_max]+1]=0,ct=ye.heap_max+1;ct<g;ct++)ve<(Pe=nt[2*nt[2*(be=ye.heap[ct])+1]+1]+1)&&(Pe=ve,Ce++),nt[2*be+1]=Pe,it<be||(ye.bl_count[Pe]++,Ke=0,pe<=be&&(Ke=Re[be-pe]),Fe=nt[2*be],ye.opt_len+=Fe*(Pe+Ke),te&&(ye.static_len+=Fe*(yt[2*be+1]+Ke)));if(Ce!==0){do{for(Pe=ve-1;ye.bl_count[Pe]===0;)Pe--;ye.bl_count[Pe]--,ye.bl_count[Pe+1]+=2,ye.bl_count[ve]--,Ce-=2}while(0<Ce);for(Pe=ve;Pe!==0;Pe--)for(be=ye.bl_count[Pe];be!==0;)it<(Ue=ye.heap[--ct])||(nt[2*Ue+1]!==Pe&&(ye.opt_len+=(Pe-nt[2*Ue+1])*nt[2*Ue],nt[2*Ue+1]=Pe),be--)}}(O,J),de(G,we,O.bl_count)}function v(O,J,oe){var P,M,G=-1,re=J[1],ne=0,ae=7,we=4;for(re===0&&(ae=138,we=3),J[2*(oe+1)+1]=65535,P=0;P<=oe;P++)M=re,re=J[2*(P+1)+1],++ne<ae&&M===re||(ne<we?O.bl_tree[2*M]+=ne:M!==0?(M!==G&&O.bl_tree[2*M]++,O.bl_tree[2*y]++):ne<=10?O.bl_tree[2*C]++:O.bl_tree[2*I]++,G=M,we=(ne=0)===re?(ae=138,3):M===re?(ae=6,3):(ae=7,4))}function me(O,J,oe){var P,M,G=-1,re=J[1],ne=0,ae=7,we=4;for(re===0&&(ae=138,we=3),P=0;P<=oe;P++)if(M=re,re=J[2*(P+1)+1],!(++ne<ae&&M===re)){if(ne<we)for(;Y(O,M,O.bl_tree),--ne!=0;);else M!==0?(M!==G&&(Y(O,M,O.bl_tree),ne--),Y(O,y,O.bl_tree),j(O,ne-3,2)):ne<=10?(Y(O,C,O.bl_tree),j(O,ne-3,3)):(Y(O,I,O.bl_tree),j(O,ne-11,7));G=M,we=(ne=0)===re?(ae=138,3):M===re?(ae=6,3):(ae=7,4)}}c(Q);var se=!1;function V(O,J,oe,P){j(O,(l<<1)+(P?1:0),3),function(M,G,re,ne){Ee(M),_e(M,re),_e(M,~re),r.arraySet(M.pending_buf,M.window,G,re,M.pending),M.pending+=re}(O,J,oe)}i._tr_init=function(O){se||(function(){var J,oe,P,M,G,re=new Array(m+1);for(M=P=0;M<u-1;M++)for(W[M]=P,J=0;J<1<<L[M];J++)b[P++]=M;for(b[P-1]=M,M=G=0;M<16;M++)for(Q[M]=G,J=0;J<1<<D[M];J++)z[G++]=M;for(G>>=7;M<d;M++)for(Q[M]=G<<7,J=0;J<1<<D[M]-7;J++)z[256+G++]=M;for(oe=0;oe<=m;oe++)re[oe]=0;for(J=0;J<=143;)B[2*J+1]=8,J++,re[8]++;for(;J<=255;)B[2*J+1]=9,J++,re[9]++;for(;J<=279;)B[2*J+1]=7,J++,re[7]++;for(;J<=287;)B[2*J+1]=8,J++,re[8]++;for(de(B,p+1,re),J=0;J<d;J++)R[2*J+1]=5,R[2*J]=ce(J,5);H=new fe(B,L,h+1,p,m),Z=new fe(R,D,0,d,m),$=new fe(new Array(0),E,0,_,x)}(),se=!0),O.l_desc=new X(O.dyn_ltree,H),O.d_desc=new X(O.dyn_dtree,Z),O.bl_desc=new X(O.bl_tree,$),O.bi_buf=0,O.bi_valid=0,xe(O)},i._tr_stored_block=V,i._tr_flush_block=function(O,J,oe,P){var M,G,re=0;0<O.level?(O.strm.data_type===2&&(O.strm.data_type=function(ne){var ae,we=4093624447;for(ae=0;ae<=31;ae++,we>>>=1)if(1&we&&ne.dyn_ltree[2*ae]!==0)return a;if(ne.dyn_ltree[18]!==0||ne.dyn_ltree[20]!==0||ne.dyn_ltree[26]!==0)return o;for(ae=32;ae<h;ae++)if(ne.dyn_ltree[2*ae]!==0)return o;return a}(O)),pt(O,O.l_desc),pt(O,O.d_desc),re=function(ne){var ae;for(v(ne,ne.dyn_ltree,ne.l_desc.max_code),v(ne,ne.dyn_dtree,ne.d_desc.max_code),pt(ne,ne.bl_desc),ae=_-1;3<=ae&&ne.bl_tree[2*w[ae]+1]===0;ae--);return ne.opt_len+=3*(ae+1)+5+5+4,ae}(O),M=O.opt_len+3+7>>>3,(G=O.static_len+3+7>>>3)<=M&&(M=G)):M=G=oe+5,oe+4<=M&&J!==-1?V(O,J,oe,P):O.strategy===4||G===M?(j(O,2+(P?1:0),3),tt(O,B,R)):(j(O,4+(P?1:0),3),function(ne,ae,we,ye){var Ae;for(j(ne,ae-257,5),j(ne,we-1,5),j(ne,ye-4,4),Ae=0;Ae<ye;Ae++)j(ne,ne.bl_tree[2*w[Ae]+1],3);me(ne,ne.dyn_ltree,ae-1),me(ne,ne.dyn_dtree,we-1)}(O,O.l_desc.max_code+1,O.d_desc.max_code+1,re+1),tt(O,O.dyn_ltree,O.dyn_dtree)),xe(O),P&&Ee(O)},i._tr_tally=function(O,J,oe){return O.pending_buf[O.d_buf+2*O.last_lit]=J>>>8&255,O.pending_buf[O.d_buf+2*O.last_lit+1]=255&J,O.pending_buf[O.l_buf+O.last_lit]=255&oe,O.last_lit++,J===0?O.dyn_ltree[2*oe]++:(O.matches++,J--,O.dyn_ltree[2*(b[oe]+h+1)]++,O.dyn_dtree[2*K(J)]++),O.last_lit===O.lit_bufsize-1},i._tr_align=function(O){j(O,2,3),Y(O,S,B),function(J){J.bi_valid===16?(_e(J,J.bi_buf),J.bi_buf=0,J.bi_valid=0):8<=J.bi_valid&&(J.pending_buf[J.pending++]=255&J.bi_buf,J.bi_buf>>=8,J.bi_valid-=8)}(O)}},{"../utils/common":41}],53:[function(t,n,i){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,n,i){(function(r){(function(a,o){if(!a.setImmediate){var c,l,u,h,p=1,d={},_=!1,g=a.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(a);m=m&&m.setTimeout?m:a,c={}.toString.call(a.process)==="[object process]"?function(y){process.nextTick(function(){x(y)})}:function(){if(a.postMessage&&!a.importScripts){var y=!0,C=a.onmessage;return a.onmessage=function(){y=!1},a.postMessage("","*"),a.onmessage=C,y}}()?(h="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",S,!1):a.attachEvent("onmessage",S),function(y){a.postMessage(h+y,"*")}):a.MessageChannel?((u=new MessageChannel).port1.onmessage=function(y){x(y.data)},function(y){u.port2.postMessage(y)}):g&&"onreadystatechange"in g.createElement("script")?(l=g.documentElement,function(y){var C=g.createElement("script");C.onreadystatechange=function(){x(y),C.onreadystatechange=null,l.removeChild(C),C=null},l.appendChild(C)}):function(y){setTimeout(x,0,y)},m.setImmediate=function(y){typeof y!="function"&&(y=new Function(""+y));for(var C=new Array(arguments.length-1),I=0;I<C.length;I++)C[I]=arguments[I+1];var L={callback:y,args:C};return d[p]=L,c(p),p++},m.clearImmediate=f}function f(y){delete d[y]}function x(y){if(_)setTimeout(x,0,y);else{var C=d[y];if(C){_=!0;try{(function(I){var L=I.callback,D=I.args;switch(D.length){case 0:L();break;case 1:L(D[0]);break;case 2:L(D[0],D[1]);break;case 3:L(D[0],D[1],D[2]);break;default:L.apply(o,D)}})(C)}finally{f(y),_=!1}}}}function S(y){y.source===a&&typeof y.data=="string"&&y.data.indexOf(h)===0&&x(+y.data.slice(h.length))}})(typeof self>"u"?r===void 0?this:r:self)}).call(this,typeof Bs<"u"?Bs:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})}(no)),no.exports}var ev=Q0();const tv=$0(ev);async function Qu(s,e,t){try{const n=await nv(s);return iv(n,e,t)}catch(n){return rv(n,`Error processing ZIP file at ${s}`),new Map}}async function nv(s){const e=await fetch(s);if(!e.ok)throw new Error(`Failed to load ZIP file: ${e.statusText}`);const t=await e.arrayBuffer();return tv.loadAsync(t)}async function iv(s,e,t){const n=new Map,i=Object.entries(s.files).filter(([r,a])=>a&&!a.dir&&r.endsWith(e));for(const[r,a]of i){const o=await a.async(t);n.set(r,o)}return n}function rv(s,e){s instanceof Error?console.error(`${e}: ${s.message}`):console.error(`${e}: ${JSON.stringify(s)}`)}async function sv(s,e){return Qu(s,e,"text")}async function av(s,e){return Qu(s,e,"arraybuffer")}function ov(...s){const e=new Map;return s.forEach(t=>{t.forEach((n,i)=>{e.set(i,n)})}),e}async function eh(s,e,t){const n=await Promise.all(e.map(i=>t(s,i)));return ov(...n)}async function cv(){return await eh($u,[".obj",".urdf"],sv)}async function lv(){return await eh($u,[".png",".STL",".glb"],av)}async function uv(){return{textFiles:await cv(),binaryFiles:await lv()}}async function hv(){let s=null;try{s=await uv(),console.log("ZIP file loaded and extracted successfully.",s)}catch(e){console.error("Error during ZIP loading:",e)}return s||{textFiles:new Map,binaryFiles:new Map}}const dv=/^[og]\s*(.+)?/,fv=/^mtllib /,pv=/^usemtl /,mv=/^usemap /,Xl=/\s+/,ql=new q,io=new q,Yl=new q,Kl=new q,mn=new q,Vs=new Ye;function gv(){const s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:i||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),i&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,r=this.object.geometry.vertices;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,r=this.object.geometry.normals;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,r=this.object.geometry.normals;ql.fromArray(i,e),io.fromArray(i,t),Yl.fromArray(i,n),mn.subVectors(Yl,io),Kl.subVectors(ql,io),mn.cross(Kl),mn.normalize(),r.push(mn.x,mn.y,mn.z),r.push(mn.x,mn.y,mn.z),r.push(mn.x,mn.y,mn.z)},addColor:function(e,t,n){const i=this.colors,r=this.object.geometry.colors;i[e]!==void 0&&r.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&r.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&r.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,r=this.object.geometry.uvs;r.push(i[e+0],i[e+1]),r.push(i[t+0],i[t+1]),r.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,r,a,o,c,l){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),p=this.parseVertexIndex(t,u),d=this.parseVertexIndex(n,u);if(this.addVertex(h,p,d),this.addColor(h,p,d),o!==void 0&&o!==""){const _=this.normals.length;h=this.parseNormalIndex(o,_),p=this.parseNormalIndex(c,_),d=this.parseNormalIndex(l,_),this.addNormal(h,p,d)}else this.addFaceNormal(h,p,d);if(i!==void 0&&i!==""){const _=this.uvs.length;h=this.parseUVIndex(i,_),p=this.parseUVIndex(r,_),d=this.parseUVIndex(a,_),this.addUV(h,p,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],i))}};return s.startObject("",!1),s}class _v extends Nn{constructor(e){super(e),this.materials=null}load(e,t,n,i){const r=this,a=new Cr(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new gv;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let o=0,c=n.length;o<c;o++){const l=n[o].trimStart();if(l.length===0)continue;const u=l.charAt(0);if(u!=="#")if(u==="v"){const h=l.split(Xl);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(Vs.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6]),Ct),t.colors.push(Vs.r,Vs.g,Vs.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const p=l.slice(1).trim().split(Xl),d=[];for(let g=0,m=p.length;g<m;g++){const f=p[g];if(f.length>0){const x=f.split("/");d.push(x)}}const _=d[0];for(let g=1,m=d.length-1;g<m;g++){const f=d[g],x=d[g+1];t.addFace(_[0],f[0],x[0],_[1],f[1],x[1],_[2],f[2],x[2])}}else if(u==="l"){const h=l.substring(1).trim().split(" ");let p=[];const d=[];if(l.indexOf("/")===-1)p=h;else for(let _=0,g=h.length;_<g;_++){const m=h[_].split("/");m[0]!==""&&p.push(m[0]),m[1]!==""&&d.push(m[1])}t.addLineGeometry(p,d)}else if(u==="p"){const p=l.slice(1).trim().split(" ");t.addPointGeometry(p)}else if((i=dv.exec(l))!==null){const h=(" "+i[0].slice(1).trim()).slice(1);t.startObject(h)}else if(pv.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(fv.test(l))t.materialLibraries.push(l.substring(7).trim());else if(mv.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(i=l.split(" "),i.length>1){const p=i[1].trim().toLowerCase();t.object.smooth=p!=="0"&&p!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const r=new kn;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,c=t.objects.length;o<c;o++){const l=t.objects[o],u=l.geometry,h=l.materials,p=u.type==="Line",d=u.type==="Points";let _=!1;if(u.vertices.length===0)continue;const g=new Wt;g.setAttribute("position",new St(u.vertices,3)),u.normals.length>0&&g.setAttribute("normal",new St(u.normals,3)),u.colors.length>0&&(_=!0,g.setAttribute("color",new St(u.colors,3))),u.hasUVIndices===!0&&g.setAttribute("uv",new St(u.uvs,2));const m=[];for(let x=0,S=h.length;x<S;x++){const y=h[x],C=y.name+"_"+y.smooth+"_"+_;let I=t.materials[C];if(this.materials!==null){if(I=this.materials.create(y.name),p&&I&&!(I instanceof Di)){const L=new Di;on.prototype.copy.call(L,I),L.color.copy(I.color),I=L}else if(d&&I&&!(I instanceof lr)){const L=new lr({size:10,sizeAttenuation:!1});on.prototype.copy.call(L,I),L.color.copy(I.color),L.map=I.map,I=L}}I===void 0&&(p?I=new Di:d?I=new lr({size:1,sizeAttenuation:!1}):I=new fr,I.name=y.name,I.flatShading=!y.smooth,I.vertexColors=_,t.materials[C]=I),m.push(I)}let f;if(m.length>1){for(let x=0,S=h.length;x<S;x++){const y=h[x];g.addGroup(y.groupStart,y.groupCount,x)}p?f=new sa(g,m):d?f=new Qs(g,m):f=new Lt(g,m)}else p?f=new sa(g,m[0]):d?f=new Qs(g,m[0]):f=new Lt(g,m[0]);f.name=l.name,r.add(f)}else if(t.vertices.length>0){const o=new lr({size:1,sizeAttenuation:!1}),c=new Wt;c.setAttribute("position",new St(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new St(t.colors,3)),o.vertexColors=!0);const l=new Qs(c,o);r.add(l)}return r}}function vv(s){s.traverse(e=>{if(e.isMesh){const t=e;t.material||(t.material=new Tr({color:8947848}))}})}function xv(s,e){const t=s.textFiles.get(e);let n=null;return t&&(n=new _v().parse(t),vv(n)),n}function yv(s){let e=new Map;const t=[bc.OpticalTable];for(const i of t){var n=xv(s,K0[i]);n&&e.set(i,n)}return e}class bv extends Nn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Cr(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){function t(l){const u=new DataView(l),h=32/8*3+32/8*3*3+16/8,p=u.getUint32(80,!0);if(80+32/8+p*h===u.byteLength)return!0;const _=[115,111,108,105,100];for(let g=0;g<5;g++)if(n(_,u,g))return!1;return!0}function n(l,u,h){for(let p=0,d=l.length;p<d;p++)if(l[p]!==u.getUint8(h+p))return!1;return!0}function i(l){const u=new DataView(l),h=u.getUint32(80,!0);let p,d,_,g=!1,m,f,x,S,y;for(let B=0;B<70;B++)u.getUint32(B,!1)==1129270351&&u.getUint8(B+4)==82&&u.getUint8(B+5)==61&&(g=!0,m=new Float32Array(h*3*3),f=u.getUint8(B+6)/255,x=u.getUint8(B+7)/255,S=u.getUint8(B+8)/255,y=u.getUint8(B+9)/255);const C=84,I=12*4+2,L=new Wt,D=new Float32Array(h*3*3),E=new Float32Array(h*3*3),w=new Ye;for(let B=0;B<h;B++){const R=C+B*I,z=u.getFloat32(R,!0),b=u.getFloat32(R+4,!0),W=u.getFloat32(R+8,!0);if(g){const H=u.getUint16(R+48,!0);H&32768?(p=f,d=x,_=S):(p=(H&31)/31,d=(H>>5&31)/31,_=(H>>10&31)/31)}for(let H=1;H<=3;H++){const Z=R+H*12,$=B*3*3+(H-1)*3;D[$]=u.getFloat32(Z,!0),D[$+1]=u.getFloat32(Z+4,!0),D[$+2]=u.getFloat32(Z+8,!0),E[$]=z,E[$+1]=b,E[$+2]=W,g&&(w.setRGB(p,d,_,Ct),m[$]=w.r,m[$+1]=w.g,m[$+2]=w.b)}}return L.setAttribute("position",new Ht(D,3)),L.setAttribute("normal",new Ht(E,3)),g&&(L.setAttribute("color",new Ht(m,3)),L.hasColors=!0,L.alpha=y),L}function r(l){const u=new Wt,h=/solid([\s\S]*?)endsolid/g,p=/facet([\s\S]*?)endfacet/g,d=/solid\s(.+)/;let _=0;const g=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+g+g+g,"g"),f=new RegExp("normal"+g+g+g,"g"),x=[],S=[],y=[],C=new q;let I,L=0,D=0,E=0;for(;(I=h.exec(l))!==null;){D=E;const w=I[0],B=(I=d.exec(w))!==null?I[1]:"";for(y.push(B);(I=p.exec(w))!==null;){let b=0,W=0;const H=I[0];for(;(I=f.exec(H))!==null;)C.x=parseFloat(I[1]),C.y=parseFloat(I[2]),C.z=parseFloat(I[3]),W++;for(;(I=m.exec(H))!==null;)x.push(parseFloat(I[1]),parseFloat(I[2]),parseFloat(I[3])),S.push(C.x,C.y,C.z),b++,E++;W!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+_),b!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+_),_++}const R=D,z=E-D;u.userData.groupNames=y,u.addGroup(R,z,L),L++}return u.setAttribute("position",new St(x,3)),u.setAttribute("normal",new St(S,3)),u}function a(l){return typeof l!="string"?new TextDecoder().decode(l):l}function o(l){if(typeof l=="string"){const u=new Uint8Array(l.length);for(let h=0;h<l.length;h++)u[h]=l.charCodeAt(h)&255;return u.buffer||u}else return l}const c=o(e);return t(c)?i(c):r(a(e))}}class Zl extends Y_{constructor(e){super(e)}parse(e){function t(H){switch(H.image_type){case p:case g:if(H.colormap_length>256||H.colormap_size!==24||H.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case d:case _:case m:case f:if(H.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case h:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+H.image_type)}if(H.width<=0||H.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(H.pixel_size!==8&&H.pixel_size!==16&&H.pixel_size!==24&&H.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+H.pixel_size)}function n(H,Z,$,Q,fe){let X,K;const _e=$.pixel_size>>3,j=$.width*$.height*_e;if(Z&&(K=fe.subarray(Q,Q+=$.colormap_length*($.colormap_size>>3))),H){X=new Uint8Array(j);let Y,ce,de,xe=0;const Ee=new Uint8Array(_e);for(;xe<j;)if(Y=fe[Q++],ce=(Y&127)+1,Y&128){for(de=0;de<_e;++de)Ee[de]=fe[Q++];for(de=0;de<ce;++de)X.set(Ee,xe+de*_e);xe+=_e*ce}else{for(ce*=_e,de=0;de<ce;++de)X[xe+de]=fe[Q++];xe+=ce}}else X=fe.subarray(Q,Q+=Z?$.width*$.height:j);return{pixel_data:X,palettes:K}}function i(H,Z,$,Q,fe,X,K,_e,j){const Y=j;let ce,de=0,xe,Ee;const Be=w.width;for(Ee=Z;Ee!==Q;Ee+=$)for(xe=fe;xe!==K;xe+=X,de++)ce=_e[de],H[(xe+Be*Ee)*4+3]=255,H[(xe+Be*Ee)*4+2]=Y[ce*3+0],H[(xe+Be*Ee)*4+1]=Y[ce*3+1],H[(xe+Be*Ee)*4+0]=Y[ce*3+2];return H}function r(H,Z,$,Q,fe,X,K,_e){let j,Y=0,ce,de;const xe=w.width;for(de=Z;de!==Q;de+=$)for(ce=fe;ce!==K;ce+=X,Y+=2)j=_e[Y+0]+(_e[Y+1]<<8),H[(ce+xe*de)*4+0]=(j&31744)>>7,H[(ce+xe*de)*4+1]=(j&992)>>2,H[(ce+xe*de)*4+2]=(j&31)<<3,H[(ce+xe*de)*4+3]=j&32768?0:255;return H}function a(H,Z,$,Q,fe,X,K,_e){let j=0,Y,ce;const de=w.width;for(ce=Z;ce!==Q;ce+=$)for(Y=fe;Y!==K;Y+=X,j+=3)H[(Y+de*ce)*4+3]=255,H[(Y+de*ce)*4+2]=_e[j+0],H[(Y+de*ce)*4+1]=_e[j+1],H[(Y+de*ce)*4+0]=_e[j+2];return H}function o(H,Z,$,Q,fe,X,K,_e){let j=0,Y,ce;const de=w.width;for(ce=Z;ce!==Q;ce+=$)for(Y=fe;Y!==K;Y+=X,j+=4)H[(Y+de*ce)*4+2]=_e[j+0],H[(Y+de*ce)*4+1]=_e[j+1],H[(Y+de*ce)*4+0]=_e[j+2],H[(Y+de*ce)*4+3]=_e[j+3];return H}function c(H,Z,$,Q,fe,X,K,_e){let j,Y=0,ce,de;const xe=w.width;for(de=Z;de!==Q;de+=$)for(ce=fe;ce!==K;ce+=X,Y++)j=_e[Y],H[(ce+xe*de)*4+0]=j,H[(ce+xe*de)*4+1]=j,H[(ce+xe*de)*4+2]=j,H[(ce+xe*de)*4+3]=255;return H}function l(H,Z,$,Q,fe,X,K,_e){let j=0,Y,ce;const de=w.width;for(ce=Z;ce!==Q;ce+=$)for(Y=fe;Y!==K;Y+=X,j+=2)H[(Y+de*ce)*4+0]=_e[j+0],H[(Y+de*ce)*4+1]=_e[j+0],H[(Y+de*ce)*4+2]=_e[j+0],H[(Y+de*ce)*4+3]=_e[j+1];return H}function u(H,Z,$,Q,fe){let X,K,_e,j,Y,ce;switch((w.flags&x)>>S){default:case I:X=0,_e=1,Y=Z,K=0,j=1,ce=$;break;case y:X=0,_e=1,Y=Z,K=$-1,j=-1,ce=-1;break;case L:X=Z-1,_e=-1,Y=-1,K=0,j=1,ce=$;break;case C:X=Z-1,_e=-1,Y=-1,K=$-1,j=-1,ce=-1;break}if(z)switch(w.pixel_size){case 8:c(H,K,j,ce,X,_e,Y,Q);break;case 16:l(H,K,j,ce,X,_e,Y,Q);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(w.pixel_size){case 8:i(H,K,j,ce,X,_e,Y,Q,fe);break;case 16:r(H,K,j,ce,X,_e,Y,Q);break;case 24:a(H,K,j,ce,X,_e,Y,Q);break;case 32:o(H,K,j,ce,X,_e,Y,Q);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return H}const h=0,p=1,d=2,_=3,g=9,m=10,f=11,x=48,S=4,y=0,C=1,I=2,L=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let D=0;const E=new Uint8Array(e),w={id_length:E[D++],colormap_type:E[D++],image_type:E[D++],colormap_index:E[D++]|E[D++]<<8,colormap_length:E[D++]|E[D++]<<8,colormap_size:E[D++],origin:[E[D++]|E[D++]<<8,E[D++]|E[D++]<<8],width:E[D++]|E[D++]<<8,height:E[D++]|E[D++]<<8,pixel_size:E[D++],flags:E[D++]};if(t(w),w.id_length+D>e.length)throw new Error("THREE.TGALoader: No data.");D+=w.id_length;let B=!1,R=!1,z=!1;switch(w.image_type){case g:B=!0,R=!0;break;case p:R=!0;break;case m:B=!0;break;case d:break;case f:B=!0,z=!0;break;case _:z=!0;break}const b=new Uint8Array(w.width*w.height*4),W=n(B,R,w,D,E);return u(b,w.width,w.height,W.pixel_data,W.palettes),{data:b,width:w.width,height:w.height,flipY:!0,generateMipmaps:!0,minFilter:In}}}class Mv extends Nn{load(e,t,n,i){const r=this,a=r.path===""?Ui.extractUrlBase(e):r.path,o=new Cr(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(c){try{t(r.parse(c,a))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e,t){function n(A,T){const U=[],N=A.childNodes;for(let k=0,he=N.length;k<he;k++){const ge=N[k];ge.nodeName===T&&U.push(ge)}return U}function i(A){if(A.length===0)return[];const T=A.trim().split(/\s+/),U=new Array(T.length);for(let N=0,k=T.length;N<k;N++)U[N]=T[N];return U}function r(A){if(A.length===0)return[];const T=A.trim().split(/\s+/),U=new Array(T.length);for(let N=0,k=T.length;N<k;N++)U[N]=parseFloat(T[N]);return U}function a(A){if(A.length===0)return[];const T=A.trim().split(/\s+/),U=new Array(T.length);for(let N=0,k=T.length;N<k;N++)U[N]=parseInt(T[N]);return U}function o(A){return A.substring(1)}function c(){return"three_default_"+oh++}function l(A){return Object.keys(A).length===0}function u(A){return{unit:h(n(A,"unit")[0]),upAxis:p(n(A,"up_axis")[0])}}function h(A){return A!==void 0&&A.hasAttribute("meter")===!0?parseFloat(A.getAttribute("meter")):1}function p(A){return A!==void 0?A.textContent:"Y_UP"}function d(A,T,U,N){const k=n(A,T)[0];if(k!==void 0){const he=n(k,U);for(let ge=0;ge<he.length;ge++)N(he[ge])}}function _(A,T){for(const U in A){const N=A[U];N.build=T(A[U])}}function g(A,T){return A.build!==void 0||(A.build=T(A)),A.build}function m(A){const T={sources:{},samplers:{},channels:{}};let U=!1;for(let N=0,k=A.childNodes.length;N<k;N++){const he=A.childNodes[N];if(he.nodeType!==1)continue;let ge;switch(he.nodeName){case"source":ge=he.getAttribute("id"),T.sources[ge]=pe(he);break;case"sampler":ge=he.getAttribute("id"),T.samplers[ge]=f(he);break;case"channel":ge=he.getAttribute("target"),T.channels[ge]=x(he);break;case"animation":m(he),U=!0;break;default:console.log(he)}}U===!1&&($e.animations[A.getAttribute("id")||Rn.generateUUID()]=T)}function f(A){const T={inputs:{}};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const he=o(k.getAttribute("source")),ge=k.getAttribute("semantic");T.inputs[ge]=he;break}}return T}function x(A){const T={};let N=A.getAttribute("target").split("/");const k=N.shift();let he=N.shift();const ge=he.indexOf("(")!==-1,Oe=he.indexOf(".")!==-1;if(Oe)N=he.split("."),he=N.shift(),T.member=N.shift();else if(ge){const Te=he.split("(");he=Te.shift();for(let De=0;De<Te.length;De++)Te[De]=parseInt(Te[De].replace(/\)/,""));T.indices=Te}return T.id=k,T.sid=he,T.arraySyntax=ge,T.memberSyntax=Oe,T.sampler=o(A.getAttribute("source")),T}function S(A){const T=[],U=A.channels,N=A.samplers,k=A.sources;for(const he in U)if(U.hasOwnProperty(he)){const ge=U[he],Oe=N[ge.sampler],Te=Oe.inputs.INPUT,De=Oe.inputs.OUTPUT,Xe=k[Te],Me=k[De],je=C(ge,Xe,Me);w(je,T)}return T}function y(A){return g($e.animations[A],S)}function C(A,T,U){const N=$e.nodes[A.id],k=Ut(N.id),he=N.transforms[A.sid],ge=N.matrix.clone().transpose();let Oe,Te,De,Xe,Me,je;const ze={};switch(he){case"matrix":for(De=0,Xe=T.array.length;De<Xe;De++)if(Oe=T.array[De],Te=De*U.stride,ze[Oe]===void 0&&(ze[Oe]={}),A.arraySyntax===!0){const Nt=U.array[Te],wt=A.indices[0]+4*A.indices[1];ze[Oe][wt]=Nt}else for(Me=0,je=U.stride;Me<je;Me++)ze[Oe][Me]=U.array[Te+Me];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',he);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',he);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',he);break}const Ze=I(ze,ge);return{name:k.uuid,keyframes:Ze}}function I(A,T){const U=[];for(const k in A)U.push({time:parseFloat(k),value:A[k]});U.sort(N);for(let k=0;k<16;k++)B(U,k,T.elements[k]);return U;function N(k,he){return k.time-he.time}}const L=new q,D=new q,E=new tn;function w(A,T){const U=A.keyframes,N=A.name,k=[],he=[],ge=[],Oe=[];for(let Te=0,De=U.length;Te<De;Te++){const Xe=U[Te],Me=Xe.time,je=Xe.value;ee.fromArray(je).transpose(),ee.decompose(L,E,D),k.push(Me),he.push(L.x,L.y,L.z),ge.push(E.x,E.y,E.z,E.w),Oe.push(D.x,D.y,D.z)}return he.length>0&&T.push(new vi(N+".position",k,he)),ge.length>0&&T.push(new ki(N+".quaternion",k,ge)),Oe.length>0&&T.push(new vi(N+".scale",k,Oe)),T}function B(A,T,U){let N,k=!0,he,ge;for(he=0,ge=A.length;he<ge;he++)N=A[he],N.value[T]===void 0?N.value[T]=null:k=!1;if(k===!0)for(he=0,ge=A.length;he<ge;he++)N=A[he],N.value[T]=U;else R(A,T)}function R(A,T){let U,N;for(let k=0,he=A.length;k<he;k++){const ge=A[k];if(ge.value[T]===null){if(U=z(A,k,T),N=b(A,k,T),U===null){ge.value[T]=N.value[T];continue}if(N===null){ge.value[T]=U.value[T];continue}W(ge,U,N,T)}}}function z(A,T,U){for(;T>=0;){const N=A[T];if(N.value[U]!==null)return N;T--}return null}function b(A,T,U){for(;T<A.length;){const N=A[T];if(N.value[U]!==null)return N;T++}return null}function W(A,T,U,N){if(U.time-T.time===0){A.value[N]=T.value[N];return}A.value[N]=(A.time-T.time)*(U.value[N]-T.value[N])/(U.time-T.time)+T.value[N]}function H(A){const T={name:A.getAttribute("id")||"default",start:parseFloat(A.getAttribute("start")||0),end:parseFloat(A.getAttribute("end")||0),animations:[]};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"instance_animation":T.animations.push(o(k.getAttribute("url")));break}}$e.clips[A.getAttribute("id")]=T}function Z(A){const T=[],U=A.name,N=A.end-A.start||-1,k=A.animations;for(let he=0,ge=k.length;he<ge;he++){const Oe=y(k[he]);for(let Te=0,De=Oe.length;Te<De;Te++)T.push(Oe[Te])}return new Qr(U,N,T)}function $(A){return g($e.clips[A],Z)}function Q(A){const T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"skin":T.id=o(k.getAttribute("source")),T.skin=fe(k);break;case"morph":T.id=o(k.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}$e.controllers[A.getAttribute("id")]=T}function fe(A){const T={sources:{}};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"bind_shape_matrix":T.bindShapeMatrix=r(k.textContent);break;case"source":const he=k.getAttribute("id");T.sources[he]=pe(k);break;case"joints":T.joints=X(k);break;case"vertex_weights":T.vertexWeights=K(k);break}}return T}function X(A){const T={inputs:{}};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const he=k.getAttribute("semantic"),ge=o(k.getAttribute("source"));T.inputs[he]=ge;break}}return T}function K(A){const T={inputs:{}};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const he=k.getAttribute("semantic"),ge=o(k.getAttribute("source")),Oe=parseInt(k.getAttribute("offset"));T.inputs[he]={id:ge,offset:Oe};break;case"vcount":T.vcount=a(k.textContent);break;case"v":T.v=a(k.textContent);break}}return T}function _e(A){const T={id:A.id},U=$e.geometries[T.id];return A.skin!==void 0&&(T.skin=j(A.skin),U.sources.skinIndices=T.skin.indices,U.sources.skinWeights=T.skin.weights),T}function j(A){const U={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},N=A.sources,k=A.vertexWeights,he=k.vcount,ge=k.v,Oe=k.inputs.JOINT.offset,Te=k.inputs.WEIGHT.offset,De=A.sources[A.joints.inputs.JOINT],Xe=A.sources[A.joints.inputs.INV_BIND_MATRIX],Me=N[k.inputs.WEIGHT.id].array;let je=0,ze,Ze,qe;for(ze=0,qe=he.length;ze<qe;ze++){const wt=he[ze],vt=[];for(Ze=0;Ze<wt;Ze++){const xt=ge[je+Oe],Wn=ge[je+Te],an=Me[Wn];vt.push({index:xt,weight:an}),je+=2}for(vt.sort(Nt),Ze=0;Ze<4;Ze++){const xt=vt[Ze];xt!==void 0?(U.indices.array.push(xt.index),U.weights.array.push(xt.weight)):(U.indices.array.push(0),U.weights.array.push(0))}}for(A.bindShapeMatrix?U.bindMatrix=new Je().fromArray(A.bindShapeMatrix).transpose():U.bindMatrix=new Je().identity(),ze=0,qe=De.array.length;ze<qe;ze++){const wt=De.array[ze],vt=new Je().fromArray(Xe.array,ze*Xe.stride).transpose();U.joints.push({name:wt,boneInverse:vt})}return U;function Nt(wt,vt){return vt.weight-wt.weight}}function Y(A){return g($e.controllers[A],_e)}function ce(A){const T={init_from:n(A,"init_from")[0].textContent};$e.images[A.getAttribute("id")]=T}function de(A){return A.build!==void 0?A.build:A.init_from}function xe(A){const T=$e.images[A];return T!==void 0?g(T,de):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",A),null)}function Ee(A){const T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"profile_COMMON":T.profile=Be(k);break}}$e.effects[A.getAttribute("id")]=T}function Be(A){const T={surfaces:{},samplers:{}};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"newparam":Qe(k,T);break;case"technique":T.technique=v(k);break;case"extra":T.extra=oe(k);break}}return T}function Qe(A,T){const U=A.getAttribute("sid");for(let N=0,k=A.childNodes.length;N<k;N++){const he=A.childNodes[N];if(he.nodeType===1)switch(he.nodeName){case"surface":T.surfaces[U]=tt(he);break;case"sampler2D":T.samplers[U]=pt(he);break}}}function tt(A){const T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"init_from":T.init_from=k.textContent;break}}return T}function pt(A){const T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"source":T.source=k.textContent;break}}return T}function v(A){const T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"constant":case"lambert":case"blinn":case"phong":T.type=k.nodeName,T.parameters=me(k);break;case"extra":T.extra=oe(k);break}}return T}function me(A){const T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":T[k.nodeName]=se(k);break;case"transparent":T[k.nodeName]={opaque:k.hasAttribute("opaque")?k.getAttribute("opaque"):"A_ONE",data:se(k)};break}}return T}function se(A){const T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"color":T[k.nodeName]=r(k.textContent);break;case"float":T[k.nodeName]=parseFloat(k.textContent);break;case"texture":T[k.nodeName]={id:k.getAttribute("texture"),extra:V(k)};break}}return T}function V(A){const T={technique:{}};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"extra":O(k,T);break}}return T}function O(A,T){for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"technique":J(k,T);break}}}function J(A,T){for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":T.technique[k.nodeName]=parseFloat(k.textContent);break;case"wrapU":case"wrapV":k.textContent.toUpperCase()==="TRUE"?T.technique[k.nodeName]=1:k.textContent.toUpperCase()==="FALSE"?T.technique[k.nodeName]=0:T.technique[k.nodeName]=parseInt(k.textContent);break;case"bump":T[k.nodeName]=M(k);break}}}function oe(A){const T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"technique":T.technique=P(k);break}}return T}function P(A){const T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"double_sided":T[k.nodeName]=parseInt(k.textContent);break;case"bump":T[k.nodeName]=M(k);break}}return T}function M(A){const T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"texture":T[k.nodeName]={id:k.getAttribute("texture"),texcoord:k.getAttribute("texcoord"),extra:V(k)};break}}return T}function G(A){return A}function re(A){return g($e.effects[A],G)}function ne(A){const T={name:A.getAttribute("name")};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"instance_effect":T.url=o(k.getAttribute("url"));break}}$e.materials[A.getAttribute("id")]=T}function ae(A){let T,U=A.slice((A.lastIndexOf(".")-1>>>0)+2);switch(U=U.toLowerCase(),U){case"tga":T=fn;break;default:T=Sn}return T}function we(A){const T=re(A.url),U=T.profile.technique;let N;switch(U.type){case"phong":case"blinn":N=new fr;break;case"lambert":N=new k_;break;default:N=new On;break}N.name=A.name||"";function k(Te,De=null){const Xe=T.profile.samplers[Te.id];let Me=null;if(Xe!==void 0){const je=T.profile.surfaces[Xe.source];Me=xe(je.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),Me=xe(Te.id);if(Me!==null){const je=ae(Me);if(je!==void 0){const ze=je.load(Me),Ze=Te.extra;if(Ze!==void 0&&Ze.technique!==void 0&&l(Ze.technique)===!1){const qe=Ze.technique;ze.wrapS=qe.wrapU?vn:xn,ze.wrapT=qe.wrapV?vn:xn,ze.offset.set(qe.offsetU||0,qe.offsetV||0),ze.repeat.set(qe.repeatU||1,qe.repeatV||1)}else ze.wrapS=vn,ze.wrapT=vn;return De!==null&&(ze.colorSpace=De),ze}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",Me),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",Te.id),null}const he=U.parameters;for(const Te in he){const De=he[Te];switch(Te){case"diffuse":De.color&&N.color.fromArray(De.color),De.texture&&(N.map=k(De.texture,Ct));break;case"specular":De.color&&N.specular&&N.specular.fromArray(De.color),De.texture&&(N.specularMap=k(De.texture));break;case"bump":De.texture&&(N.normalMap=k(De.texture));break;case"ambient":De.texture&&(N.lightMap=k(De.texture,Ct));break;case"shininess":De.float&&N.shininess&&(N.shininess=De.float);break;case"emission":De.color&&N.emissive&&N.emissive.fromArray(De.color),De.texture&&(N.emissiveMap=k(De.texture,Ct));break}}dt.toWorkingColorSpace(N.color,Ct),N.specular&&dt.toWorkingColorSpace(N.specular,Ct),N.emissive&&dt.toWorkingColorSpace(N.emissive,Ct);let ge=he.transparent,Oe=he.transparency;if(Oe===void 0&&ge&&(Oe={float:1}),ge===void 0&&Oe&&(ge={opaque:"A_ONE",data:{color:[1,1,1,1]}}),ge&&Oe)if(ge.data.texture)N.transparent=!0;else{const Te=ge.data.color;switch(ge.opaque){case"A_ONE":N.opacity=Te[3]*Oe.float;break;case"RGB_ZERO":N.opacity=1-Te[0]*Oe.float;break;case"A_ZERO":N.opacity=1-Te[3]*Oe.float;break;case"RGB_ONE":N.opacity=Te[0]*Oe.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',ge.opaque)}N.opacity<1&&(N.transparent=!0)}if(U.extra!==void 0&&U.extra.technique!==void 0){const Te=U.extra.technique;for(const De in Te){const Xe=Te[De];switch(De){case"double_sided":N.side=Xe===1?_n:Bn;break;case"bump":N.normalMap=k(Xe.texture),N.normalScale=new st(1,1);break}}}return N}function ye(A){return g($e.materials[A],we)}function Ae(A){const T={name:A.getAttribute("name")};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"optics":T.optics=ct(k);break}}$e.cameras[A.getAttribute("id")]=T}function ct(A){for(let T=0;T<A.childNodes.length;T++){const U=A.childNodes[T];switch(U.nodeName){case"technique_common":return be(U)}}return{}}function be(A){const T={};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];switch(N.nodeName){case"perspective":case"orthographic":T.technique=N.nodeName,T.parameters=Ue(N);break}}return T}function Ue(A){const T={};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];switch(N.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":T[N.nodeName]=parseFloat(N.textContent);break}}return T}function Pe(A){let T;switch(A.optics.technique){case"perspective":T=new Gt(A.optics.parameters.yfov,A.optics.parameters.aspect_ratio,A.optics.parameters.znear,A.optics.parameters.zfar);break;case"orthographic":let U=A.optics.parameters.ymag,N=A.optics.parameters.xmag;const k=A.optics.parameters.aspect_ratio;N=N===void 0?U*k:N,U=U===void 0?N/k:U,N*=.5,U*=.5,T=new fa(-N,N,U,-U,A.optics.parameters.znear,A.optics.parameters.zfar);break;default:T=new Gt;break}return T.name=A.name||"",T}function Ke(A){const T=$e.cameras[A];return T!==void 0?g(T,Pe):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",A),null)}function Fe(A){let T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"technique_common":T=nt(k);break}}$e.lights[A.getAttribute("id")]=T}function nt(A){const T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"directional":case"point":case"spot":case"ambient":T.technique=k.nodeName,T.parameters=it(k)}}return T}function it(A){const T={};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"color":const he=r(k.textContent);T.color=new Ye().fromArray(he),dt.toWorkingColorSpace(T.color,Ct);break;case"falloff_angle":T.falloffAngle=parseFloat(k.textContent);break;case"quadratic_attenuation":const ge=parseFloat(k.textContent);T.distance=ge?Math.sqrt(1/ge):0;break}}return T}function yt(A){let T;switch(A.technique){case"directional":T=new vc;break;case"point":T=new Ku;break;case"spot":T=new Yu;break;case"ambient":T=new Zu;break}return A.parameters.color&&T.color.copy(A.parameters.color),A.parameters.distance&&(T.distance=A.parameters.distance),T}function te(A){const T=$e.lights[A];return T!==void 0?g(T,yt):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",A),null)}function Re(A){const T={name:A.getAttribute("name"),sources:{},vertices:{},primitives:[]},U=n(A,"mesh")[0];if(U!==void 0){for(let N=0;N<U.childNodes.length;N++){const k=U.childNodes[N];if(k.nodeType!==1)continue;const he=k.getAttribute("id");switch(k.nodeName){case"source":T.sources[he]=pe(k);break;case"vertices":T.vertices=ve(k);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",k.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":T.primitives.push(Ce(k));break;default:console.log(k)}}$e.geometries[A.getAttribute("id")]=T}}function pe(A){const T={array:[],stride:3};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType===1)switch(N.nodeName){case"float_array":T.array=r(N.textContent);break;case"Name_array":T.array=i(N.textContent);break;case"technique_common":const k=n(N,"accessor")[0];k!==void 0&&(T.stride=parseInt(k.getAttribute("stride")));break}}return T}function ve(A){const T={};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];N.nodeType===1&&(T[N.getAttribute("semantic")]=o(N.getAttribute("source")))}return T}function Ce(A){const T={type:A.nodeName,material:A.getAttribute("material"),count:parseInt(A.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let U=0,N=A.childNodes.length;U<N;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const he=o(k.getAttribute("source")),ge=k.getAttribute("semantic"),Oe=parseInt(k.getAttribute("offset")),Te=parseInt(k.getAttribute("set")),De=Te>0?ge+Te:ge;T.inputs[De]={id:he,offset:Oe},T.stride=Math.max(T.stride,Oe+1),ge==="TEXCOORD"&&(T.hasUV=!0);break;case"vcount":T.vcount=a(k.textContent);break;case"p":T.p=a(k.textContent);break}}return T}function Ne(A){const T={};for(let U=0;U<A.length;U++){const N=A[U];T[N.type]===void 0&&(T[N.type]=[]),T[N.type].push(N)}return T}function at(A){let T=0;for(let U=0,N=A.length;U<N;U++)A[U].hasUV===!0&&T++;T>0&&T<A.length&&(A.uvsNeedsFix=!0)}function It(A){const T={},U=A.sources,N=A.vertices,k=A.primitives;if(k.length===0)return{};const he=Ne(k);for(const ge in he){const Oe=he[ge];at(Oe),T[ge]=zt(Oe,U,N)}return T}function zt(A,T,U){const N={},k={array:[],stride:0},he={array:[],stride:0},ge={array:[],stride:0},Oe={array:[],stride:0},Te={array:[],stride:0},De={array:[],stride:4},Xe={array:[],stride:4},Me=new Wt,je=[];let ze=0;for(let Ze=0;Ze<A.length;Ze++){const qe=A[Ze],Nt=qe.inputs;let wt=0;switch(qe.type){case"lines":case"linestrips":wt=qe.count*2;break;case"triangles":wt=qe.count*3;break;case"polylist":for(let vt=0;vt<qe.count;vt++){const xt=qe.vcount[vt];switch(xt){case 3:wt+=3;break;case 4:wt+=6;break;default:wt+=(xt-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",qe.type)}Me.addGroup(ze,wt,Ze),ze+=wt,qe.material&&je.push(qe.material);for(const vt in Nt){const xt=Nt[vt];switch(vt){case"VERTEX":for(const Wn in U){const an=U[Wn];switch(Wn){case"POSITION":const Gi=k.array.length;if(lt(qe,T[an],xt.offset,k.array),k.stride=T[an].stride,T.skinWeights&&T.skinIndices&&(lt(qe,T.skinIndices,xt.offset,De.array),lt(qe,T.skinWeights,xt.offset,Xe.array)),qe.hasUV===!1&&A.uvsNeedsFix===!0){const ch=(k.array.length-Gi)/k.stride;for(let Sc=0;Sc<ch;Sc++)ge.array.push(0,0)}break;case"NORMAL":lt(qe,T[an],xt.offset,he.array),he.stride=T[an].stride;break;case"COLOR":lt(qe,T[an],xt.offset,Te.array),Te.stride=T[an].stride;break;case"TEXCOORD":lt(qe,T[an],xt.offset,ge.array),ge.stride=T[an].stride;break;case"TEXCOORD1":lt(qe,T[an],xt.offset,Oe.array),ge.stride=T[an].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Wn)}}break;case"NORMAL":lt(qe,T[xt.id],xt.offset,he.array),he.stride=T[xt.id].stride;break;case"COLOR":lt(qe,T[xt.id],xt.offset,Te.array,!0),Te.stride=T[xt.id].stride;break;case"TEXCOORD":lt(qe,T[xt.id],xt.offset,ge.array),ge.stride=T[xt.id].stride;break;case"TEXCOORD1":lt(qe,T[xt.id],xt.offset,Oe.array),Oe.stride=T[xt.id].stride;break}}}return k.array.length>0&&Me.setAttribute("position",new St(k.array,k.stride)),he.array.length>0&&Me.setAttribute("normal",new St(he.array,he.stride)),Te.array.length>0&&Me.setAttribute("color",new St(Te.array,Te.stride)),ge.array.length>0&&Me.setAttribute("uv",new St(ge.array,ge.stride)),Oe.array.length>0&&Me.setAttribute("uv1",new St(Oe.array,Oe.stride)),De.array.length>0&&Me.setAttribute("skinIndex",new St(De.array,De.stride)),Xe.array.length>0&&Me.setAttribute("skinWeight",new St(Xe.array,Xe.stride)),N.data=Me,N.type=A[0].type,N.materialKeys=je,N}function lt(A,T,U,N,k=!1){const he=A.p,ge=A.stride,Oe=A.vcount;function Te(Me){let je=he[Me+U]*Xe;const ze=je+Xe;for(;je<ze;je++)N.push(De[je]);if(k){const Ze=N.length-Xe-1;bi.setRGB(N[Ze+0],N[Ze+1],N[Ze+2],Ct),N[Ze+0]=bi.r,N[Ze+1]=bi.g,N[Ze+2]=bi.b}}const De=T.array,Xe=T.stride;if(A.vcount!==void 0){let Me=0;for(let je=0,ze=Oe.length;je<ze;je++){const Ze=Oe[je];if(Ze===4){const qe=Me+ge*0,Nt=Me+ge*1,wt=Me+ge*2,vt=Me+ge*3;Te(qe),Te(Nt),Te(vt),Te(Nt),Te(wt),Te(vt)}else if(Ze===3){const qe=Me+ge*0,Nt=Me+ge*1,wt=Me+ge*2;Te(qe),Te(Nt),Te(wt)}else if(Ze>4)for(let qe=1,Nt=Ze-2;qe<=Nt;qe++){const wt=Me+ge*0,vt=Me+ge*qe,xt=Me+ge*(qe+1);Te(wt),Te(vt),Te(xt)}Me+=ge*Ze}}else for(let Me=0,je=he.length;Me<je;Me+=ge)Te(Me)}function rn(A){return g($e.geometries[A],It)}function bn(A){const T={name:A.getAttribute("name")||"",joints:{},links:[]};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType===1)switch(N.nodeName){case"technique_common":Gn(N,T);break}}$e.kinematicsModels[A.getAttribute("id")]=T}function ss(A){return A.build!==void 0?A.build:A}function as(A){return g($e.kinematicsModels[A],ss)}function Gn(A,T){for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType===1)switch(N.nodeName){case"joint":T.joints[N.getAttribute("sid")]=Ir(N);break;case"link":T.links.push(Lr(N));break}}}function Ir(A){let T;for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType===1)switch(N.nodeName){case"prismatic":case"revolute":T=os(N);break}}return T}function os(A){const T={sid:A.getAttribute("sid"),name:A.getAttribute("name")||"",axis:new q,limits:{min:0,max:0},type:A.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType===1)switch(N.nodeName){case"axis":const k=r(N.textContent);T.axis.fromArray(k);break;case"limits":const he=N.getElementsByTagName("max")[0],ge=N.getElementsByTagName("min")[0];T.limits.max=parseFloat(he.textContent),T.limits.min=parseFloat(ge.textContent);break}}return T.limits.min>=T.limits.max&&(T.static=!0),T.middlePosition=(T.limits.min+T.limits.max)/2,T}function Lr(A){const T={sid:A.getAttribute("sid"),name:A.getAttribute("name")||"",attachments:[],transforms:[]};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType===1)switch(N.nodeName){case"attachment_full":T.attachments.push(Vi(N));break;case"matrix":case"translate":case"rotate":T.transforms.push(Pr(N));break}}return T}function Vi(A){const T={joint:A.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType===1)switch(N.nodeName){case"link":T.links.push(Lr(N));break;case"matrix":case"translate":case"rotate":T.transforms.push(Pr(N));break}}return T}function Pr(A){const T={type:A.nodeName},U=r(A.textContent);switch(T.type){case"matrix":T.obj=new Je,T.obj.fromArray(U).transpose();break;case"translate":T.obj=new q,T.obj.fromArray(U);break;case"rotate":T.obj=new q,T.obj.fromArray(U),T.angle=Rn.degToRad(U[3]);break}return T}function Hi(A){const T={name:A.getAttribute("name")||"",rigidBodies:{}};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType===1)switch(N.nodeName){case"rigid_body":T.rigidBodies[N.getAttribute("name")]={},cs(N,T.rigidBodies[N.getAttribute("name")]);break}}$e.physicsModels[A.getAttribute("id")]=T}function cs(A,T){for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType===1)switch(N.nodeName){case"technique_common":ls(N,T);break}}}function ls(A,T){for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType===1)switch(N.nodeName){case"inertia":T.inertia=r(N.textContent);break;case"mass":T.mass=r(N.textContent)[0];break}}}function ya(A){const T={bindJointAxis:[]};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType===1)switch(N.nodeName){case"bind_joint_axis":T.bindJointAxis.push(ba(N));break}}$e.kinematicsScenes[o(A.getAttribute("url"))]=T}function ba(A){const T={target:A.getAttribute("target").split("/").pop()};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType===1)switch(N.nodeName){case"axis":const k=N.getElementsByTagName("param")[0];T.axis=k.textContent;const he=T.axis.split("inst_").pop().split("axis")[0];T.jointIndex=he.substring(0,he.length-1);break}}return T}function Ma(A){return A.build!==void 0?A.build:A}function F(A){return g($e.kinematicsScenes[A],Ma)}function ie(){const A=Object.keys($e.kinematicsModels)[0],T=Object.keys($e.kinematicsScenes)[0],U=Object.keys($e.visualScenes)[0];if(A===void 0||T===void 0)return;const N=as(A),k=F(T),he=gt(U),ge=k.bindJointAxis,Oe={};for(let Xe=0,Me=ge.length;Xe<Me;Xe++){const je=ge[Xe],ze=rt.querySelector('[sid="'+je.target+'"]');if(ze){const Ze=ze.parentElement;Te(je.jointIndex,Ze)}}function Te(Xe,Me){const je=Me.getAttribute("name"),ze=N.joints[Xe];he.traverse(function(Ze){Ze.name===je&&(Oe[Xe]={object:Ze,transforms:le(Me),joint:ze,position:ze.zeroPosition})})}const De=new Je;Mc={joints:N&&N.joints,getJointValue:function(Xe){const Me=Oe[Xe];if(Me)return Me.position;console.warn("THREE.ColladaLoader: Joint "+Xe+" doesn't exist.")},setJointValue:function(Xe,Me){const je=Oe[Xe];if(je){const ze=je.joint;if(Me>ze.limits.max||Me<ze.limits.min)console.warn("THREE.ColladaLoader: Joint "+Xe+" value "+Me+" outside of limits (min: "+ze.limits.min+", max: "+ze.limits.max+").");else if(ze.static)console.warn("THREE.ColladaLoader: Joint "+Xe+" is static.");else{const Ze=je.object,qe=ze.axis,Nt=je.transforms;ee.identity();for(let wt=0;wt<Nt.length;wt++){const vt=Nt[wt];if(vt.sid&&vt.sid.indexOf(Xe)!==-1)switch(ze.type){case"revolute":ee.multiply(De.makeRotationAxis(qe,Rn.degToRad(Me)));break;case"prismatic":ee.multiply(De.makeTranslation(qe.x*Me,qe.y*Me,qe.z*Me));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+ze.type);break}else switch(vt.type){case"matrix":ee.multiply(vt.obj);break;case"translate":ee.multiply(De.makeTranslation(vt.obj.x,vt.obj.y,vt.obj.z));break;case"scale":ee.scale(vt.obj);break;case"rotate":ee.multiply(De.makeRotationAxis(vt.obj,vt.angle));break}}Ze.matrix.copy(ee),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Oe[Xe].position=Me}}else console.log("THREE.ColladaLoader: "+Xe+" does not exist.")}}}function le(A){const T=[],U=rt.querySelector('[id="'+A.id+'"]');for(let N=0;N<U.childNodes.length;N++){const k=U.childNodes[N];if(k.nodeType!==1)continue;let he,ge;switch(k.nodeName){case"matrix":he=r(k.textContent);const Oe=new Je().fromArray(he).transpose();T.push({sid:k.getAttribute("sid"),type:k.nodeName,obj:Oe});break;case"translate":case"scale":he=r(k.textContent),ge=new q().fromArray(he),T.push({sid:k.getAttribute("sid"),type:k.nodeName,obj:ge});break;case"rotate":he=r(k.textContent),ge=new q().fromArray(he);const Te=Rn.degToRad(he[3]);T.push({sid:k.getAttribute("sid"),type:k.nodeName,obj:ge,angle:Te});break}}return T}function ue(A){const T=A.getElementsByTagName("node");for(let U=0;U<T.length;U++){const N=T[U];N.hasAttribute("id")===!1&&N.setAttribute("id",c())}}const ee=new Je,Se=new q;function Le(A){const T={name:A.getAttribute("name")||"",type:A.getAttribute("type"),id:A.getAttribute("id"),sid:A.getAttribute("sid"),matrix:new Je,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];if(N.nodeType!==1)continue;let k;switch(N.nodeName){case"node":T.nodes.push(N.getAttribute("id")),Le(N);break;case"instance_camera":T.instanceCameras.push(o(N.getAttribute("url")));break;case"instance_controller":T.instanceControllers.push(Ve(N));break;case"instance_light":T.instanceLights.push(o(N.getAttribute("url")));break;case"instance_geometry":T.instanceGeometries.push(Ve(N));break;case"instance_node":T.instanceNodes.push(o(N.getAttribute("url")));break;case"matrix":k=r(N.textContent),T.matrix.multiply(ee.fromArray(k).transpose()),T.transforms[N.getAttribute("sid")]=N.nodeName;break;case"translate":k=r(N.textContent),Se.fromArray(k),T.matrix.multiply(ee.makeTranslation(Se.x,Se.y,Se.z)),T.transforms[N.getAttribute("sid")]=N.nodeName;break;case"rotate":k=r(N.textContent);const he=Rn.degToRad(k[3]);T.matrix.multiply(ee.makeRotationAxis(Se.fromArray(k),he)),T.transforms[N.getAttribute("sid")]=N.nodeName;break;case"scale":k=r(N.textContent),T.matrix.scale(Se.fromArray(k)),T.transforms[N.getAttribute("sid")]=N.nodeName;break;case"extra":break;default:console.log(N)}}return At(T.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",T.id):$e.nodes[T.id]=T,T}function Ve(A){const T={id:o(A.getAttribute("url")),materials:{},skeletons:[]};for(let U=0;U<A.childNodes.length;U++){const N=A.childNodes[U];switch(N.nodeName){case"bind_material":const k=N.getElementsByTagName("instance_material");for(let he=0;he<k.length;he++){const ge=k[he],Oe=ge.getAttribute("symbol"),Te=ge.getAttribute("target");T.materials[Oe]=o(Te)}break;case"skeleton":T.skeletons.push(o(N.textContent));break}}return T}function He(A,T){const U=[],N=[];let k,he,ge;for(k=0;k<A.length;k++){const De=A[k];let Xe;if(At(De))Xe=Ut(De),et(Xe,T,U);else if(Mn(De)){const je=$e.visualScenes[De].children;for(let ze=0;ze<je.length;ze++){const Ze=je[ze];if(Ze.type==="JOINT"){const qe=Ut(Ze.id);et(qe,T,U)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",De)}for(k=0;k<T.length;k++)for(he=0;he<U.length;he++)if(ge=U[he],ge.bone.name===T[k].name){N[k]=ge,ge.processed=!0;break}for(k=0;k<U.length;k++)ge=U[k],ge.processed===!1&&(N.push(ge),ge.processed=!0);const Oe=[],Te=[];for(k=0;k<N.length;k++)ge=N[k],Oe.push(ge.bone),Te.push(ge.boneInverse);return new ma(Oe,Te)}function et(A,T,U){A.traverse(function(N){if(N.isBone===!0){let k;for(let he=0;he<T.length;he++){const ge=T[he];if(ge.name===N.name){k=ge.boneInverse;break}}k===void 0&&(k=new Je),U.push({bone:N,boneInverse:k,processed:!1})}})}function ot(A){const T=[],U=A.matrix,N=A.nodes,k=A.type,he=A.instanceCameras,ge=A.instanceControllers,Oe=A.instanceLights,Te=A.instanceGeometries,De=A.instanceNodes;for(let Me=0,je=N.length;Me<je;Me++)T.push(Ut(N[Me]));for(let Me=0,je=he.length;Me<je;Me++){const ze=Ke(he[Me]);ze!==null&&T.push(ze.clone())}for(let Me=0,je=ge.length;Me<je;Me++){const ze=ge[Me],Ze=Y(ze.id),qe=rn(Ze.id),Nt=Et(qe,ze.materials),wt=ze.skeletons,vt=Ze.skin.joints,xt=He(wt,vt);for(let Wn=0,an=Nt.length;Wn<an;Wn++){const Gi=Nt[Wn];Gi.isSkinnedMesh&&(Gi.bind(xt,Ze.skin.bindMatrix),Gi.normalizeSkinWeights()),T.push(Gi)}}for(let Me=0,je=Oe.length;Me<je;Me++){const ze=te(Oe[Me]);ze!==null&&T.push(ze.clone())}for(let Me=0,je=Te.length;Me<je;Me++){const ze=Te[Me],Ze=rn(ze.id),qe=Et(Ze,ze.materials);for(let Nt=0,wt=qe.length;Nt<wt;Nt++)T.push(qe[Nt])}for(let Me=0,je=De.length;Me<je;Me++)T.push(Ut(De[Me]).clone());let Xe;if(N.length===0&&T.length===1)Xe=T[0];else{Xe=k==="JOINT"?new dc:new kn;for(let Me=0;Me<T.length;Me++)Xe.add(T[Me])}return Xe.name=k==="JOINT"?A.sid:A.name,Xe.matrix.copy(U),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe}const Ge=new On({name:Nn.DEFAULT_MATERIAL_NAME,color:16711935});function mt(A,T){const U=[];for(let N=0,k=A.length;N<k;N++){const he=T[A[N]];he===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",A[N]),U.push(Ge)):U.push(ye(he))}return U}function Et(A,T){const U=[];for(const N in A){const k=A[N],he=mt(k.materialKeys,T);if(he.length===0&&(N==="lines"||N==="linestrips"?he.push(new Di):he.push(new fr)),N==="lines"||N==="linestrips")for(let De=0,Xe=he.length;De<Xe;De++){const Me=he[De];if(Me.isMeshPhongMaterial===!0||Me.isMeshLambertMaterial===!0){const je=new Di;je.color.copy(Me.color),je.opacity=Me.opacity,je.transparent=Me.transparent,he[De]=je}}const ge=k.data.attributes.skinIndex!==void 0,Oe=he.length===1?he[0]:he;let Te;switch(N){case"lines":Te=new sa(k.data,Oe);break;case"linestrips":Te=new ga(k.data,Oe);break;case"triangles":case"polylist":ge?Te=new Vu(k.data,Oe):Te=new Lt(k.data,Oe);break}U.push(Te)}return U}function At(A){return $e.nodes[A]!==void 0}function Ut(A){return g($e.nodes[A],ot)}function _t(A){const T={name:A.getAttribute("name"),children:[]};ue(A);const U=n(A,"node");for(let N=0;N<U.length;N++)T.children.push(Le(U[N]));$e.visualScenes[A.getAttribute("id")]=T}function We(A){const T=new kn;T.name=A.name;const U=A.children;for(let N=0;N<U.length;N++){const k=U[N];T.add(Ut(k.id))}return T}function Mn(A){return $e.visualScenes[A]!==void 0}function gt(A){return g($e.visualScenes[A],We)}function ln(A){const T=n(A,"instance_visual_scene")[0];return gt(o(T.getAttribute("url")))}function ri(){const A=$e.clips;if(l(A)===!0){if(l($e.animations)===!1){const T=[];for(const U in $e.animations){const N=y(U);for(let k=0,he=N.length;k<he;k++)T.push(N[k])}us.push(new Qr("default",-1,T))}}else for(const T in A)us.push($(T))}function Kt(A){let T="";const U=[A];for(;U.length;){const N=U.shift();N.nodeType===Node.TEXT_NODE?T+=N.textContent:(T+=`
`,U.push.apply(U,N.childNodes))}return T.trim()}if(e.length===0)return{scene:new zu};const si=new DOMParser().parseFromString(e,"application/xml"),rt=n(si,"COLLADA")[0],sn=si.getElementsByTagName("parsererror")[0];if(sn!==void 0){const A=n(sn,"div")[0];let T;return A?T=A.textContent:T=Kt(sn),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,T),null}const yi=rt.getAttribute("version");console.debug("THREE.ColladaLoader: File version",yi);const Zt=u(n(rt,"asset")[0]),Sn=new gc(this.manager);Sn.setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);let fn;Zl&&(fn=new Zl(this.manager),fn.setPath(this.resourcePath||t));const bi=new Ye,us=[];let Mc={},oh=0;const $e={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};d(rt,"library_animations","animation",m),d(rt,"library_animation_clips","animation_clip",H),d(rt,"library_controllers","controller",Q),d(rt,"library_images","image",ce),d(rt,"library_effects","effect",Ee),d(rt,"library_materials","material",ne),d(rt,"library_cameras","camera",Ae),d(rt,"library_lights","light",Fe),d(rt,"library_geometries","geometry",Re),d(rt,"library_nodes","node",Le),d(rt,"library_visual_scenes","visual_scene",_t),d(rt,"library_kinematics_models","kinematics_model",bn),d(rt,"library_physics_models","physics_model",Hi),d(rt,"scene","instance_kinematics_scene",ya),_($e.animations,S),_($e.clips,Z),_($e.controllers,_e),_($e.images,de),_($e.effects,G),_($e.materials,we),_($e.cameras,Pe),_($e.lights,yt),_($e.geometries,It),_($e.visualScenes,We),ri(),ie();const hs=ln(n(rt,"scene")[0]);return hs.animations=us,Zt.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),hs.rotation.set(-Math.PI/2,0,0)),hs.scale.multiplyScalar(Zt.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),us},kinematics:Mc,library:$e,scene:hs}}}const Jl=new q,Sv=new cn,Hs=new Je,di=new Je,Gs=new tn,Ws=new q(1,1,1),js=new q;class va extends Pt{constructor(...e){super(...e),this.urdfNode=null,this.urdfName=""}copy(e,t){return super.copy(e,t),this.urdfNode=e.urdfNode,this.urdfName=e.urdfName,this}}class Ev extends va{constructor(...e){super(...e),this.isURDFCollider=!0,this.type="URDFCollider"}}class wv extends va{constructor(...e){super(...e),this.isURDFVisual=!0,this.type="URDFVisual"}}class th extends va{constructor(...e){super(...e),this.isURDFLink=!0,this.type="URDFLink"}}class nh extends va{get jointType(){return this._jointType}set jointType(e){if(this.jointType!==e)switch(this._jointType=e,this.matrixWorldNeedsUpdate=!0,e){case"fixed":this.jointValue=[];break;case"continuous":case"revolute":case"prismatic":this.jointValue=new Array(1).fill(0);break;case"planar":this.jointValue=new Array(3).fill(0),this.axis=new q(0,0,1);break;case"floating":this.jointValue=new Array(6).fill(0);break}}get angle(){return this.jointValue[0]}constructor(...e){super(...e),this.isURDFJoint=!0,this.type="URDFJoint",this.jointValue=null,this.jointType="fixed",this.axis=new q(1,0,0),this.limit={lower:0,upper:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(e,t){return super.copy(e,t),this.jointType=e.jointType,this.axis=e.axis.clone(),this.limit.lower=e.limit.lower,this.limit.upper=e.limit.upper,this.ignoreLimits=!1,this.jointValue=[...e.jointValue],this.origPosition=e.origPosition?e.origPosition.clone():null,this.origQuaternion=e.origQuaternion?e.origQuaternion.clone():null,this.mimicJoints=[...e.mimicJoints],this}setJointValue(...e){e=e.map(n=>n===null?null:parseFloat(n)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let t=!1;switch(this.mimicJoints.forEach(n=>{t=n.updateFromMimickedJoint(...e)||t}),this.jointType){case"fixed":return t;case"continuous":case"revolute":{let n=e[0];return n==null||n===this.jointValue[0]?t:(!this.ignoreLimits&&this.jointType==="revolute"&&(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.quaternion.setFromAxisAngle(this.axis,n).premultiply(this.origQuaternion),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):t)}case"prismatic":{let n=e[0];return n==null||n===this.jointValue[0]?t:(this.ignoreLimits||(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.position.copy(this.origPosition),Jl.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(Jl,n),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):t)}case"floating":return this.jointValue.every((n,i)=>e[i]===n||e[i]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],this.jointValue[3]=e[3]!==null?e[3]:this.jointValue[3],this.jointValue[4]=e[4]!==null?e[4]:this.jointValue[4],this.jointValue[5]=e[5]!==null?e[5]:this.jointValue[5],di.compose(this.origPosition,this.origQuaternion,Ws),Gs.setFromEuler(Sv.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],"XYZ")),js.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),Hs.compose(js,Gs,Ws),di.premultiply(Hs),this.position.setFromMatrixPosition(di),this.rotation.setFromRotationMatrix(di),this.matrixWorldNeedsUpdate=!0,!0);case"planar":return this.jointValue.every((n,i)=>e[i]===n||e[i]===null)?t:(this.jointValue[0]=e[0]!==null?e[0]:this.jointValue[0],this.jointValue[1]=e[1]!==null?e[1]:this.jointValue[1],this.jointValue[2]=e[2]!==null?e[2]:this.jointValue[2],di.compose(this.origPosition,this.origQuaternion,Ws),Gs.setFromAxisAngle(this.axis,this.jointValue[2]),js.set(this.jointValue[0],this.jointValue[1],0),Hs.compose(js,Gs,Ws),di.premultiply(Hs),this.position.setFromMatrixPosition(di),this.rotation.setFromRotationMatrix(di),this.matrixWorldNeedsUpdate=!0,!0)}return t}}class $l extends nh{constructor(...e){super(...e),this.type="URDFMimicJoint",this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...e){const t=e.map(n=>n*this.multiplier+this.offset);return super.setJointValue(...t)}copy(e,t){return super.copy(e,t),this.mimicJoint=e.mimicJoint,this.offset=e.offset,this.multiplier=e.multiplier,this}}class Tv extends th{constructor(...e){super(...e),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(e,t){super.copy(e,t),this.urdfRobotNode=e.urdfRobotNode,this.robotName=e.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(n=>{n.isURDFJoint&&n.urdfName in e.joints&&(this.joints[n.urdfName]=n),n.isURDFLink&&n.urdfName in e.links&&(this.links[n.urdfName]=n),n.isURDFCollider&&n.urdfName in e.colliders&&(this.colliders[n.urdfName]=n),n.isURDFVisual&&n.urdfName in e.visual&&(this.visual[n.urdfName]=n)});for(const n in this.joints)this.joints[n].mimicJoints=this.joints[n].mimicJoints.map(i=>this.joints[i.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(e){return this.frames[e]}setJointValue(e,...t){const n=this.joints[e];return n?n.setJointValue(...t):!1}setJointValues(e){let t=!1;for(const n in e){const i=e[n];Array.isArray(i)?t=this.setJointValue(n,...i)||t:t=this.setJointValue(n,i)||t}return t}}const ro=new tn,Ql=new cn;function sr(s){return s?s.trim().split(/\s+/g).map(e=>parseFloat(e)):[0,0,0]}function eu(s,e,t=!1){t||s.rotation.set(0,0,0),Ql.set(e[0],e[1],e[2],"ZYX"),ro.setFromEuler(Ql),ro.multiply(s.quaternion),s.quaternion.copy(ro)}class Av{constructor(e){this.manager=e||qu,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions={}}loadAsync(e){return new Promise((t,n)=>{this.load(e,t,null,n)})}load(e,t,n,i){const r=this.manager,a=Ui.extractUrlBase(e),o=this.manager.resolveURL(e);r.itemStart(o),fetch(o,this.fetchOptions).then(c=>{if(c.ok)return n&&n(null),c.text();throw new Error(`URDFLoader: Failed to load url '${o}' with error code ${c.status} : ${c.statusText}.`)}).then(c=>{const l=this.parse(c,this.workingPath||a);t(l),r.itemEnd(o)}).catch(c=>{i?i(c):console.error("URDFLoader: Error loading file.",c),r.itemError(o),r.itemEnd(o)})}parse(e,t=this.workingPath){const n=this.packages,i=this.loadMeshCb,r=this.parseVisual,a=this.parseCollision,o=this.manager,c={},l={},u={};function h(x){if(!/^package:\/\//.test(x))return t?t+x:x;const[S,y]=x.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof n=="string")return n.endsWith(S)?n+"/"+y:n+"/"+S+"/"+y;if(n instanceof Function)return n(S)+"/"+y;if(typeof n=="object")return S in n?n[S]+"/"+y:(console.error(`URDFLoader : ${S} not found in provided package list.`),null)}function p(x){let S;x instanceof Document?S=[...x.children]:x instanceof Element?S=[x]:S=[...new DOMParser().parseFromString(x,"text/xml").children];const y=S.filter(C=>C.nodeName==="robot").pop();return d(y)}function d(x){const S=[...x.children],y=S.filter(B=>B.nodeName.toLowerCase()==="link"),C=S.filter(B=>B.nodeName.toLowerCase()==="joint"),I=S.filter(B=>B.nodeName.toLowerCase()==="material"),L=new Tv;L.robotName=x.getAttribute("name"),L.urdfRobotNode=x,I.forEach(B=>{const R=B.getAttribute("name");u[R]=m(B)});const D={},E={};y.forEach(B=>{const R=B.getAttribute("name"),z=x.querySelector(`child[link="${R}"]`)===null;c[R]=g(B,D,E,z?L:null)}),C.forEach(B=>{const R=B.getAttribute("name");l[R]=_(B)}),L.joints=l,L.links=c,L.colliders=E,L.visual=D;const w=Object.values(l);return w.forEach(B=>{B instanceof $l&&l[B.mimicJoint].mimicJoints.push(B)}),w.forEach(B=>{const R=new Set,z=b=>{if(R.has(b))throw new Error("URDFLoader: Detected an infinite loop of mimic joints.");R.add(b),b.mimicJoints.forEach(W=>{z(W)})};z(B)}),L.frames={...E,...D,...c,...l},L}function _(x){const S=[...x.children],y=x.getAttribute("type");let C;const I=S.find(R=>R.nodeName.toLowerCase()==="mimic");I?(C=new $l,C.mimicJoint=I.getAttribute("joint"),C.multiplier=parseFloat(I.getAttribute("multiplier")||1),C.offset=parseFloat(I.getAttribute("offset")||0)):C=new nh,C.urdfNode=x,C.name=x.getAttribute("name"),C.urdfName=C.name,C.jointType=y;let L=null,D=null,E=[0,0,0],w=[0,0,0];S.forEach(R=>{const z=R.nodeName.toLowerCase();z==="origin"?(E=sr(R.getAttribute("xyz")),w=sr(R.getAttribute("rpy"))):z==="child"?D=c[R.getAttribute("link")]:z==="parent"?L=c[R.getAttribute("link")]:z==="limit"&&(C.limit.lower=parseFloat(R.getAttribute("lower")||C.limit.lower),C.limit.upper=parseFloat(R.getAttribute("upper")||C.limit.upper))}),L.add(C),C.add(D),eu(C,w),C.position.set(E[0],E[1],E[2]);const B=S.filter(R=>R.nodeName.toLowerCase()==="axis")[0];if(B){const R=B.getAttribute("xyz").split(/\s+/g).map(z=>parseFloat(z));C.axis=new q(R[0],R[1],R[2]),C.axis.normalize()}return C}function g(x,S,y,C=null){C===null&&(C=new th);const I=[...x.children];return C.name=x.getAttribute("name"),C.urdfName=C.name,C.urdfNode=x,r&&I.filter(D=>D.nodeName.toLowerCase()==="visual").forEach(D=>{const E=f(D,u);if(C.add(E),D.hasAttribute("name")){const w=D.getAttribute("name");E.name=w,E.urdfName=w,S[w]=E}}),a&&I.filter(D=>D.nodeName.toLowerCase()==="collision").forEach(D=>{const E=f(D);if(C.add(E),D.hasAttribute("name")){const w=D.getAttribute("name");E.name=w,E.urdfName=w,y[w]=E}}),C}function m(x){const S=[...x.children],y=new fr;return y.name=x.getAttribute("name")||"",S.forEach(C=>{const I=C.nodeName.toLowerCase();if(I==="color"){const L=C.getAttribute("rgba").split(/\s/g).map(D=>parseFloat(D));y.color.setRGB(L[0],L[1],L[2]),y.opacity=L[3],y.transparent=L[3]<1,y.depthWrite=!y.transparent}else if(I==="texture"){const L=C.getAttribute("filename");if(L){const D=new gc(o),E=h(L);y.map=D.load(E),y.map.colorSpace=Ct}}}),y}function f(x,S={}){const y=x.nodeName.toLowerCase()==="collision",C=[...x.children];let I=null;const L=C.filter(E=>E.nodeName.toLowerCase()==="material")[0];if(L){const E=L.getAttribute("name");E&&E in S?I=S[E]:I=m(L)}else I=new fr;const D=y?new Ev:new wv;return D.urdfNode=x,C.forEach(E=>{const w=E.nodeName.toLowerCase();if(w==="geometry"){const B=E.children[0].nodeName.toLowerCase();if(B==="mesh"){const R=E.children[0].getAttribute("filename"),z=h(R);if(z!==null){const b=E.children[0].getAttribute("scale");if(b){const W=sr(b);D.scale.set(W[0],W[1],W[2])}i(z,o,(W,H)=>{H?console.error("URDFLoader: Error loading mesh.",H):W&&(W instanceof Lt&&(W.material=I),W.position.set(0,0,0),W.quaternion.identity(),D.add(W))})}}else if(B==="box"){const R=new Lt;R.geometry=new xi(1,1,1),R.material=I;const z=sr(E.children[0].getAttribute("size"));R.scale.set(z[0],z[1],z[2]),D.add(R)}else if(B==="sphere"){const R=new Lt;R.geometry=new mc(1,30,30),R.material=I;const z=parseFloat(E.children[0].getAttribute("radius"))||0;R.scale.set(z,z,z),D.add(R)}else if(B==="cylinder"){const R=new Lt;R.geometry=new pc(1,1,1,30),R.material=I;const z=parseFloat(E.children[0].getAttribute("radius"))||0,b=parseFloat(E.children[0].getAttribute("length"))||0;R.scale.set(z,b,z),R.rotation.set(Math.PI/2,0,0),D.add(R)}}else if(w==="origin"){const B=sr(E.getAttribute("xyz")),R=sr(E.getAttribute("rpy"));D.position.set(B[0],B[1],B[2]),D.rotation.set(0,0,0),eu(D,R)}}),D}return p(e)}defaultMeshLoader(e,t,n){/\.stl$/i.test(e)?new bv(t).load(e,r=>{const a=new Lt(r,new fr);n(a)}):/\.dae$/i.test(e)?new Mv(t).load(e,r=>n(r.scene)):console.warn(`URDFLoader: Could not load model at ${e}.
No loader available`)}}function Rv(s,e){return new Promise((t,n)=>{s.packages={[e.packageName]:e.packagePath},s.load(e.urdfPath,i=>t(i),void 0,i=>n(i))})}function Cv(s){let e="",t="",n="";return s==es.OpticalTable&&(e=X0,t=q0,n=Y0),{packageName:e,packagePath:t,urdfPath:n}}function Iv(s){const e=new Xu,t=new Av(e),n=Cv(s);return Rv(t,n)}function tu(s,e){if(e===Xh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Xo||e===bu){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Xo)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Lv extends Nn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Fv(t)}),this.register(function(t){return new Ov(t)}),this.register(function(t){return new Xv(t)}),this.register(function(t){return new qv(t)}),this.register(function(t){return new Yv(t)}),this.register(function(t){return new Bv(t)}),this.register(function(t){return new zv(t)}),this.register(function(t){return new Vv(t)}),this.register(function(t){return new Hv(t)}),this.register(function(t){return new Uv(t)}),this.register(function(t){return new Gv(t)}),this.register(function(t){return new kv(t)}),this.register(function(t){return new jv(t)}),this.register(function(t){return new Wv(t)}),this.register(function(t){return new Nv(t)}),this.register(function(t){return new Kv(t)}),this.register(function(t){return new Zv(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Ui.extractUrlBase(e);a=Ui.resolveURL(l,this.path)}else a=Ui.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Cr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===ih){try{a[ft.KHR_BINARY_GLTF]=new Jv(e)}catch(h){i&&i(h);return}r=JSON.parse(a[ft.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new ux(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],p=r.extensionsRequired||[];switch(h){case ft.KHR_MATERIALS_UNLIT:a[h]=new Dv;break;case ft.KHR_DRACO_MESH_COMPRESSION:a[h]=new $v(r,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:a[h]=new Qv;break;case ft.KHR_MESH_QUANTIZATION:a[h]=new ex;break;default:p.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Pv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Nv{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Ye(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],nn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new vc(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ku(u),l.distance=h;break;case"spot":l=new Yu(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,$n(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class Dv{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return On}extendParams(e,t,n){const i=[];e.color=new Ye(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],nn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ct))}return Promise.all(i)}}class Uv{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Fv{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new st(o,o)}return Promise.all(r)}}class Ov{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class kv{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Bv{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ye(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],nn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ct)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class zv{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Vv{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ye().setRGB(o[0],o[1],o[2],nn),Promise.all(r)}}class Hv{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Gv{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ye().setRGB(o[0],o[1],o[2],nn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ct)),Promise.all(r)}}class Wv{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class jv{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Xv{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class qv{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Yv{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Kv{constructor(e){this.name=ft.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,p=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,p,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,p,i.mode,i.filter),d})})}else return null}}class Zv{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==gn.TRIANGLES&&l.mode!==gn.TRIANGLE_STRIP&&l.mode!==gn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],p=l[0].count,d=[];for(const _ of h){const g=new Je,m=new q,f=new tn,x=new q(1,1,1),S=new F_(_.geometry,_.material,p);for(let y=0;y<p;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,y),c.SCALE&&x.fromBufferAttribute(c.SCALE,y),S.setMatrixAt(y,g.compose(m,f,x));for(const y in c)if(y==="_COLOR_0"){const C=c[y];S.instanceColor=new Ko(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&_.geometry.setAttribute(y,c[y]);Pt.prototype.copy.call(S,_),this.parser.assignFinalMaterial(S),d.push(S)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const ih="glTF",Hr=12,nu={JSON:1313821514,BIN:5130562};class Jv{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Hr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ih)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Hr,r=new DataView(e,Hr);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===nu.JSON){const l=new Uint8Array(e,Hr+a,o);this.content=n.decode(l)}else if(c===nu.BIN){const l=Hr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class $v{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=Jo[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Jo[u]||u.toLowerCase();if(a[u]!==void 0){const p=n.accessors[e.attributes[u]],d=pr[p.componentType];l[h]=d.name,c[h]=p.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,p){i.decodeDracoFile(u,function(d){for(const _ in d.attributes){const g=d.attributes[_],m=c[_];m!==void 0&&(g.normalized=m)}h(d)},o,l,nn,p)})})}}class Qv{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ex{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}}class rh extends is{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,h=(n-t)/u,p=h*h,d=p*h,_=e*l,g=_-l,m=-2*d+3*p,f=d-p,x=1-m,S=f-p+h;for(let y=0;y!==o;y++){const C=a[g+y+o],I=a[g+y+c]*u,L=a[_+y+o],D=a[_+y]*u;r[y]=x*C+S*I+m*L+f*D}return r}}const tx=new tn;class nx extends rh{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return tx.fromArray(r).normalize().toArray(r),r}}const gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},pr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},iu={9728:en,9729:Yt,9984:hu,9985:Xs,9986:Wr,9987:In},ru={33071:xn,33648:ea,10497:vn},so={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ix={CUBICSPLINE:void 0,LINEAR:Jr,STEP:Zr},ao={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function rx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Tr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Bn})),s.DefaultMaterial}function Ri(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function $n(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function sx(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const p=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(p)}if(i){const p=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(p)}if(r){const p=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(p)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],p=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=p),s.morphTargetsRelative=!0,s})}function ax(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ox(s){let e;const t=s.extensions&&s.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+oo(t.attributes):e=s.indices+":"+oo(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+oo(s.targets[n]);return e}function oo(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function $o(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function cx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const lx=new Je;class ux{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Pv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new gc(this.options.manager):this.textureLoader=new Q_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Cr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ri(r,o,i),$n(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())r(u,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Ui.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=so[i.type],o=pr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Ht(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=so[i.type],l=pr[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,p=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(d&&d!==h){const f=Math.floor(p/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let S=t.cache.get(x);S||(g=new l(o,f*d,i.count*d/u),S=new P_(g,d/u),t.cache.add(x,S)),m=new hc(S,c,p%d/u,_)}else o===null?g=new l(i.count*c):g=new l(o,p,i.count*c),m=new Ht(g,c,_);if(i.sparse!==void 0){const f=so.SCALAR,x=pr[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,C=new x(a[1],S,i.sparse.count*f),I=new l(a[2],y,i.sparse.count*c);o!==null&&(m=new Ht(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let L=0,D=C.length;L<D;L++){const E=C[L];if(m.setX(E,I[L*c]),c>=2&&m.setY(E,I[L*c+1]),c>=3&&m.setZ(E,I[L*c+2]),c>=4&&m.setW(E,I[L*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const p=(r.samplers||{})[a.sampler]||{};return u.magFilter=iu[p.magFilter]||Yt,u.minFilter=iu[p.minFilter]||In,u.wrapS=ru[p.wrapS]||vn,u.wrapT=ru[p.wrapT]||vn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==en&&u.minFilter!==Yt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const p=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(p),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(p,d){let _=p;t.isImageBitmapLoader===!0&&(_=function(g){const m=new Ot(g);m.needsUpdate=!0,p(m)}),t.load(Ui.resolveURL(h,r.path),_,void 0,d)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),$n(h,a),h.userData.mimeType=a.mimeType||cx(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ft.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new lr,on.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Di,on.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Tr}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[ft.KHR_MATERIALS_UNLIT]){const h=i[ft.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Ye(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const p=h.baseColorFactor;o.color.setRGB(p[0],p[1],p[2],nn),o.opacity=p[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Ct)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=_n);const u=r.alphaMode||ao.OPAQUE;if(u===ao.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===ao.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==On&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new st(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==On&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==On){const h=r.emissiveFactor;o.emissive=new Ye().setRGB(h[0],h[1],h[2],nn)}return r.emissiveTexture!==void 0&&a!==On&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ct)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),$n(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ri(i,h,r),h})}createUniqueName(e){const t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return su(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=ox(l),h=i[u];if(h)a.push(h.promise);else{let p;l.extensions&&l.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?p=r(l):p=su(new Wt,l,t),i[u]={primitive:l,promise:p},a.push(p)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?rx(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],m=a[d];let f;const x=l[d];if(m.mode===gn.TRIANGLES||m.mode===gn.TRIANGLE_STRIP||m.mode===gn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new Vu(g,x):new Lt(g,x),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===gn.TRIANGLE_STRIP?f.geometry=tu(f.geometry,bu):m.mode===gn.TRIANGLE_FAN&&(f.geometry=tu(f.geometry,Xo));else if(m.mode===gn.LINES)f=new sa(g,x);else if(m.mode===gn.LINE_STRIP)f=new ga(g,x);else if(m.mode===gn.LINE_LOOP)f=new O_(g,x);else if(m.mode===gn.POINTS)f=new Qs(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&ax(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),$n(f,r),m.extensions&&Ri(i,f,m),t.assignFinalMaterial(f),h.push(f)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Ri(i,h[0],r),h[0];const p=new kn;r.extensions&&Ri(i,p,r),t.associations.set(p,{meshes:e});for(let d=0,_=h.length;d<_;d++)p.add(h[d]);return p})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(Rn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new fa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),$n(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const p=new Je;r!==null&&p.fromArray(r.array,l*16),c.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ma(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,p=i.channels.length;h<p;h++){const d=i.channels[h],_=i.samplers[d.sampler],g=d.target,m=g.node,f=i.parameters!==void 0?i.parameters[_.input]:_.input,x=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",x)),l.push(_),u.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const p=h[0],d=h[1],_=h[2],g=h[3],m=h[4],f=[];for(let x=0,S=p.length;x<S;x++){const y=p[x],C=d[x],I=_[x],L=g[x],D=m[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const E=n._createAnimationTracks(y,C,I,L,D);if(E)for(let w=0;w<E.length;w++)f.push(E[w])}return new Qr(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],p=l[2];p!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(p,lx)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new dc:l.length>1?u=new kn:l.length===1?u=l[0]:u=new Pt,u!==l[0])for(let h=0,p=l.length;h<p;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),$n(u,r),r.extensions&&Ri(n,u,r),r.matrix!==void 0){const h=new Je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new kn;n.name&&(r.name=i.createUniqueName(n.name)),$n(r,n),n.extensions&&Ri(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[p,d]of i.associations)(p instanceof on||p instanceof Ot)&&h.set(p,d);return u.traverse(p=>{const d=i.associations.get(p);d!=null&&h.set(p,d)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];fi[r.path]===fi.weights?e.traverse(function(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}):c.push(o);let l;switch(fi[r.path]){case fi.weights:l=Mr;break;case fi.rotation:l=ki;break;case fi.position:case fi.scale:l=vi;break;default:switch(n.itemSize){case 1:l=Mr;break;case 2:case 3:default:l=vi;break}break}const u=i.interpolation!==void 0?ix[i.interpolation]:Jr,h=this._getArrayFromAccessor(n);for(let p=0,d=c.length;p<d;p++){const _=new l(c[p]+"."+fi[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=$o(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ki?nx:rh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function hx(s,e,t){const n=e.attributes,i=new Dn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new q(c[0],c[1],c[2]),new q(l[0],l[1],l[2])),o.normalized){const u=$o(pr[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new q,c=new q;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const p=t.json.accessors[h.POSITION],d=p.min,_=p.max;if(d!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),p.normalized){const g=$o(pr[p.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new zn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function su(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=Jo[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return dt.workingColorSpace!==nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),$n(s,e),hx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?sx(s,e.targets,t):s})}async function dx(s,e){const t=Z0[s],n=e.binaryFiles.get(t);if(!n)return console.error("GLB file not found!",t),null;const i=new Lv,r=new Uint8Array(n);return new Promise((a,o)=>{i.parse(r.buffer,"",c=>{const l=c.scene.children[0];l.position.set(0,0,0),a({model:l,animations:c.animations})},c=>{console.error("Error loading GLB:",c),o(c)})})}async function fx(s){let e=new Map;const t=[_a.Human];for(const n of t){let i=await dx(n,s);i&&e.set(n,i)}return e}async function px(s){const e=new Map,t=[dn.Error,dn.PhotoCamera,dn.Timelapse,dn.Timer];for(const n of t){const i=s.binaryFiles.get(J0[n]);if(!i)throw new Error(`Failed to load png data: ${n}`);const r=new Blob([i],{type:"image/png"}),a=URL.createObjectURL(r),o=new Image;await new Promise((c,l)=>{o.onload=()=>{const u=new Ot(o);u.needsUpdate=!0,e.set(n,u),c()},o.onerror=l,o.src=a}),URL.revokeObjectURL(a)}return e}const Qn=class Qn{constructor(){ke(this,"files");ke(this,"modelMap");ke(this,"robotMap");ke(this,"animationMap");ke(this,"textureMap");this.files={textFiles:new Map,binaryFiles:new Map},this.modelMap=new Map,this.robotMap=new Map,this.animationMap=new Map,this.textureMap=new Map}static async init(){if(!Qn.instance){const e=new Qn;e.files=await hv(),e.modelMap=yv(e.files),e.animationMap=await fx(e.files),e.textureMap=await px(e.files),e.robotMap.set(es.OpticalTable,await Iv(es.OpticalTable)),Qn.instance=e}return Qn.instance}static getInstance(){if(!Qn.instance)throw new Error("Assets has not been initialized. Call init) first.");return Qn.instance}getModels(){return this.modelMap}getRobots(){return this.robotMap}getAnimations(){return this.animationMap}getTextures(){return this.textureMap}getFiles(){return this.files}};ke(Qn,"instance");let Sr=Qn;class oa{constructor({object:e,animations:t}){ke(this,"object");ke(this,"animations");ke(this,"bubbles");this.bubbles=[],this.object=e,this.animations=t}}const au={[Ni.STANDBY]:{text:"Idle",font:"bold 50px Arial",color:"black",texture:dn.Timer,textureColor:"black"},[Ni.CAPTURING]:{text:"Capturing",font:"bold 50px Arial",color:"black",texture:dn.PhotoCamera,textureColor:"black"},[Ni.ERROR]:{text:"Error",font:"bold 50px Arial",color:"black",texture:dn.Error,textureColor:"red"},[Ni.LOADING]:{text:"Loading",font:"bold 50px Arial",color:"black",texture:dn.Timelapse,textureColor:"black"}};class mx{constructor(){ke(this,"mesh");this.mesh=gx(au[Ni.STANDBY])}setState(e){const t=sh(au[e]),n=this.mesh.material;n.map=t,n.needsUpdate=!0}getMesh(){return this.mesh}setPosition(e){this.mesh.position.copy(e)}update(e){const t=this.mesh.position,n=e.position.clone();n.y=t.y,this.mesh.lookAt(n)}}function gx(s){const e=new Er(1,1),t=new On({map:sh(s),transparent:!0,side:_n}),n=new Lt(e,t);return n.scale.set(.35,.35,1),n}function sh(s){const{text:e,font:t,color:n,texture:i,textureColor:r}=s,a=15,o=400,c=200,l=40,u=document.createElement("canvas");u.width=o+a*2,u.height=c+a*2+l;const h=u.getContext("2d");return h.clearRect(0,0,u.width,u.height),_x(h,u,{padding:a,bubbleWidth:o,bubbleHeight:c,tailSize:l}),vx(h,u,i,r,a,c),xx(h,u,e,t,n,a,c),new Hu(u)}function _x(s,e,{padding:t,bubbleWidth:n,bubbleHeight:i,tailSize:r}){const a=s.createRadialGradient(e.width/2,e.height/2,10,e.width/2,e.height/2,e.width/2);a.addColorStop(0,"white"),a.addColorStop(1,"gray"),s.fillStyle=a,s.strokeStyle="black",s.lineWidth=4,s.beginPath(),s.moveTo(t+20,t),s.lineTo(n-20+t,t),s.quadraticCurveTo(n+t,t,n+t,t+20),s.lineTo(n+t,i-20+t),s.quadraticCurveTo(n+t,i+t,n-20+t,i+t),s.lineTo(t+40,i+t),s.lineTo(t+20,i+t+r),s.lineTo(t,i+t),s.quadraticCurveTo(t,i+t,t,i-20+t),s.lineTo(t,t+20),s.quadraticCurveTo(t,t,t+20,t),s.closePath(),s.fill(),s.stroke()}function vx(s,e,t,n,i,r){const a=Sr.getInstance().getTextures().get(t),o=document.createElement("canvas"),c=o.getContext("2d");o.width=a.image.width,o.height=a.image.height,c.drawImage(a.image,0,0),c.globalCompositeOperation="source-atop",c.fillStyle=n,c.fillRect(0,0,o.width,o.height),c.globalCompositeOperation="source-over";const l=140,u=140,h=(e.width-l)/2,p=i/2+(r-u)/2;s.drawImage(o,h,p,l,u)}function xx(s,e,t,n,i,r,a){s.font=n;const o=s.measureText(t),c=o.actualBoundingBoxAscent+o.actualBoundingBoxDescent,l=140,u=r/2+(a-l)/2,h=e.width/2,p=u+l+c/2;s.fillStyle=i,s.textAlign="center",s.textBaseline="middle",s.shadowColor="rgba(0, 0, 0, 0.5)",s.shadowBlur=3,s.shadowOffsetX=2,s.shadowOffsetY=2,s.fillText(t,h,p)}function yx(s){const t=new Dn().setFromObject(s.object).min.y;t<j0&&(s.object.position.y-=t)}function bx(s){return Sr.getInstance().getAnimations().get(s)}class Mx{constructor(){}createHuman(){let e=bx(_a.Human);const t={object:e.model,animations:e.animations};let n=new oa(t);const i=Rn.degToRad(90);n.object.rotateY(i);const r=Rn.degToRad(-90);return n.object.rotateX(r),yx(n),n.object.position.z=3,n.object.position.x=-.5,n}createOpticalTable(){let e=Sr.getInstance().getRobots().get(es.OpticalTable);const t=Array.from({length:10},()=>new mx),n={object:e};let i=new oa(n);return i.bubbles=t,i.object.position.y+=.855,i.object.rotation.x=Rn.degToRad(270),i}createActors(){return{player:this.createHuman(),table:this.createOpticalTable()}}}class xa extends Lt{constructor(){const e=xa.SkyShader,t=new ii({name:e.name,uniforms:Lu.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Qt,depthWrite:!1});super(new xi(1,1,1),t),this.isSky=!0}}xa.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new q},up:{value:new q(0,1,0)}},vertexShader:`
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

		}`};class Sx{constructor(e){ke(this,"entities");this.entities=e}createSky(){const e=new xa;e.scale.setScalar(1e4);const t=new q,n=Rn.degToRad(90),i=Rn.degToRad(0);return t.setFromSphericalCoords(1,n,i),e.material.uniforms.rayleigh.value=.95,e.material.uniforms.mieCoefficient.value=0,e.material.uniforms.mieDirectionalG.value=0,e.material.uniforms.sunPosition.value.copy(t),e}createScene(){const e=new zu;return Ex().forEach(t=>e.add(t)),this.populateScene(e),e.add(this.createSky()),e}populateScene(e){for(const t of this.entities.getEntities())e.add(t.object);for(const t of this.entities.getBubbles())e.add(t.getMesh())}}function Ex(){const s=new vc(16777215,1);s.position.set(5,5,5).normalize();const e=new Zu(4210752,.5),t=new K_(16777215,2236962,.2);return[s,e,t]}const ah=Math.sqrt(3),wx=.5*(ah-1),Gr=(3-ah)/6,ou=s=>Math.floor(s)|0,cu=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Tx(s=Math.random){const e=Ax(s),t=new Float64Array(e).map(i=>cu[i%12*2]),n=new Float64Array(e).map(i=>cu[i%12*2+1]);return function(r,a){let o=0,c=0,l=0;const u=(r+a)*wx,h=ou(r+u),p=ou(a+u),d=(h+p)*Gr,_=h-d,g=p-d,m=r-_,f=a-g;let x,S;m>f?(x=1,S=0):(x=0,S=1);const y=m-x+Gr,C=f-S+Gr,I=m-1+2*Gr,L=f-1+2*Gr,D=h&255,E=p&255;let w=.5-m*m-f*f;if(w>=0){const z=D+e[E],b=t[z],W=n[z];w*=w,o=w*w*(b*m+W*f)}let B=.5-y*y-C*C;if(B>=0){const z=D+x+e[E+S],b=t[z],W=n[z];B*=B,c=B*B*(b*y+W*C)}let R=.5-I*I-L*L;if(R>=0){const z=D+1+e[E+1],b=t[z],W=n[z];R*=R,l=R*R*(b*I+W*L)}return 70*(o+c+l)}}function Ax(s){const t=new Uint8Array(512);for(let n=0;n<512/2;n++)t[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(s()*(256-n)),r=t[n];t[n]=t[i],t[i]=r}for(let n=256;n<512;n++)t[n]=t[n-256];return t}function Rx(){const s=new Er(10,10),e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");if(t){const a=Tx(),o=.01;for(let c=0;c<e.height;c++)for(let l=0;l<e.width;l++){const u=l/e.width-.5,h=c/e.height-.5,p=a(u/o,h/o),d=Math.floor((p+1)*127.5);t.fillStyle=`rgb(${d}, ${d}, ${d})`,t.fillRect(l,c,1,1)}}const n=new Hu(e);n.wrapS=vn,n.wrapT=vn,n.repeat.set(4,4);const i=new Tr({map:n}),r=new Lt(s,i);return r.rotation.x=-Math.PI/2,r.position.y=0,r}function Cx(){return new Tr({color:3447003,metalness:.3,roughness:.7})}class Ix{constructor(e){ke(this,"world");this.world=e}createFloor(){const t={object:Rx()};return new oa(t)}createCube(){const e=new xi(1,1,1),t=Cx(),n=new Lt(e,t);n.position.y=.5,n.position.x=1,n.position.z=-4.5;const i={object:n};return new oa(i)}createRoom(){return{floor:this.createFloor(),cube:this.createCube()}}}class Lx{constructor(){ke(this,"world");ke(this,"rigidBodies",[]);ke(this,"objectMap",new Map);ke(this,"nextUserIndex",0);const e=Bi.get();let t=new e.btDefaultCollisionConfiguration,n=new e.btCollisionDispatcher(t),i=new e.btDbvtBroadphase,r=new e.btSequentialImpulseConstraintSolver;this.world=new e.btDiscreteDynamicsWorld(n,i,r,t),this.world.setGravity(new e.btVector3(0,-10,0))}step(e){this.world.stepSimulation(e,10)}addRigidBody(e,t){const n=this.nextUserIndex++;e.setUserIndex(n),this.objectMap.set(n,t),this.rigidBodies.push(e),this.world.addRigidBody(e)}}class Px{constructor(e,t){ke(this,"room");ke(this,"actors");this.room=e,this.actors=t}getEntities(){return[...Object.values(this.room),...Object.values(this.actors)]}getBubbles(){const e=this.getEntities(),t=[];for(const n of e)t.push(...n.bubbles);return t}getRoom(){return this.room}getActors(){return this.actors}}async function Nx(){await Bi.init(),await Sr.init()}function Dx(){let s=new Lx,e=new Ix(s).createRoom(),t=new Mx().createActors();const n=new Px(e,t);let i=new Sx(n).createScene();return new W0(n,i,s)}async function Ux(){await Nx(),Dx().runSimulationLoop()}Ux();export{$0 as a,Ox as g};
//# sourceMappingURL=index-CNqZD6bc.js.map
