var mh=Object.defineProperty;var gh=(i,t,e)=>t in i?mh(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Zt=(i,t,e)=>gh(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ko="170",_h=0,_l=1,vh=2,hu=1,xh=2,kn=3,Xn=0,$e=1,Tn=2,oi=0,er=1,vl=2,xl=3,yl=4,yh=5,wi=100,bh=101,Sh=102,Mh=103,wh=104,Eh=200,Th=201,Ah=202,Ch=203,eo=204,no=205,Rh=206,Ph=207,Lh=208,Ih=209,Dh=210,Nh=211,Uh=212,Fh=213,Oh=214,io=0,ro=1,so=2,or=3,ao=4,oo=5,lo=6,co=7,na=0,kh=1,Bh=2,li=0,zh=1,Vh=2,Hh=3,Gh=4,Wh=5,Xh=6,jh=7,bl="attached",qh="detached",du=300,lr=301,cr=302,uo=303,ho=304,ia=306,Vn=1e3,yn=1001,fo=1002,on=1003,Yh=1004,is=1005,an=1006,ga=1007,Hn=1008,jn=1009,fu=1010,pu=1011,Vr=1012,$o=1013,Ai=1014,An=1015,jr=1016,Jo=1017,Qo=1018,ur=1020,mu=35902,gu=1021,_u=1022,dn=1023,vu=1024,xu=1025,nr=1026,hr=1027,yu=1028,tl=1029,bu=1030,el=1031,nl=1033,Bs=33776,zs=33777,Vs=33778,Hs=33779,po=35840,mo=35841,go=35842,_o=35843,vo=36196,xo=37492,yo=37496,bo=37808,So=37809,Mo=37810,wo=37811,Eo=37812,To=37813,Ao=37814,Co=37815,Ro=37816,Po=37817,Lo=37818,Io=37819,Do=37820,No=37821,Gs=36492,Uo=36494,Fo=36495,Su=36283,Oo=36284,ko=36285,Bo=36286,Xs=2300,zo=2301,_a=2302,Sl=2400,Ml=2401,wl=2402,Zh=2500,Kh=3200,$h=3201,ra=0,Jh=1,ai="",De="srgb",mr="srgb-linear",sa="linear",Ae="srgb",Ui=7680,El=519,Qh=512,td=513,ed=514,Mu=515,nd=516,id=517,rd=518,sd=519,Tl=35044,Al="300 es",Gn=2e3,js=2001;class gr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cl=1234567;const Or=Math.PI/180,dr=180/Math.PI;function ui(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Ke(i,t,e){return Math.max(t,Math.min(e,i))}function il(i,t){return(i%t+t)%t}function ad(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function od(i,t,e){return i!==t?(e-i)/(t-i):0}function kr(i,t,e){return(1-e)*i+e*t}function ld(i,t,e,n){return kr(i,t,1-Math.exp(-e*n))}function cd(i,t=1){return t-Math.abs(il(i,t*2)-t)}function ud(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function hd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function dd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function fd(i,t){return i+Math.random()*(t-i)}function pd(i){return i*(.5-Math.random())}function md(i){i!==void 0&&(Cl=i);let t=Cl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gd(i){return i*Or}function _d(i){return i*dr}function vd(i){return(i&i-1)===0&&i!==0}function xd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bd(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),d=a((t+n)/2),h=s((t-n)/2),p=a((t-n)/2),f=s((n-t)/2),_=a((n-t)/2);switch(r){case"XYX":i.set(o*d,l*h,l*p,o*c);break;case"YZY":i.set(l*p,o*d,l*h,o*c);break;case"ZXZ":i.set(l*h,l*p,o*d,o*c);break;case"XZX":i.set(o*d,l*_,l*f,o*c);break;case"YXY":i.set(l*f,o*d,l*_,o*c);break;case"ZYZ":i.set(l*_,l*f,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ki(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const zn={DEG2RAD:Or,RAD2DEG:dr,generateUUID:ui,clamp:Ke,euclideanModulo:il,mapLinear:ad,inverseLerp:od,lerp:kr,damp:ld,pingpong:cd,smoothstep:ud,smootherstep:hd,randInt:dd,randFloat:fd,randFloatSpread:pd,seededRandom:md,degToRad:gd,radToDeg:_d,isPowerOfTwo:vd,ceilPowerOfTwo:xd,floorPowerOfTwo:yd,setQuaternionFromProperEuler:bd,normalize:Ye,denormalize:Ki};class me{constructor(t=0,e=0){me.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(t,e,n,r,s,a,o,l,c){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=r,d[2]=o,d[3]=e,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],p=n[2],f=n[5],_=n[8],g=r[0],m=r[3],u=r[6],x=r[1],M=r[4],S=r[7],R=r[2],P=r[5],L=r[8];return s[0]=a*g+o*x+l*R,s[3]=a*m+o*M+l*P,s[6]=a*u+o*S+l*L,s[1]=c*g+d*x+h*R,s[4]=c*m+d*M+h*P,s[7]=c*u+d*S+h*L,s[2]=p*g+f*x+_*R,s[5]=p*m+f*M+_*P,s[8]=p*u+f*S+_*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-n*s*d+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=d*a-o*c,p=o*l-d*s,f=c*s-a*l,_=e*h+n*p+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(r*c-d*n)*g,t[2]=(o*n-r*a)*g,t[3]=p*g,t[4]=(d*e-r*l)*g,t[5]=(r*s-o*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(va.makeScale(t,e)),this}rotate(t){return this.premultiply(va.makeRotation(-t)),this}translate(t,e){return this.premultiply(va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const va=new he;function wu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sd(){const i=Hr("canvas");return i.style.display="block",i}const Rl={};function Dr(i){i in Rl||(Rl[i]=!0,console.warn(i))}function Md(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function wd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ed(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const fe={enabled:!0,workingColorSpace:mr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ae&&(i.r=Wn(i.r),i.g=Wn(i.g),i.b=Wn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ae&&(i.r=ir(i.r),i.g=ir(i.g),i.b=ir(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ai?sa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Pl=[.64,.33,.3,.6,.15,.06],Ll=[.2126,.7152,.0722],Il=[.3127,.329],Dl=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nl=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);fe.define({[mr]:{primaries:Pl,whitePoint:Il,transfer:sa,toXYZ:Dl,fromXYZ:Nl,luminanceCoefficients:Ll,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:Pl,whitePoint:Il,transfer:Ae,toXYZ:Dl,fromXYZ:Nl,luminanceCoefficients:Ll,outputColorSpaceConfig:{drawingBufferColorSpace:De}}});let Fi;class Td{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fi===void 0&&(Fi=Hr("canvas")),Fi.width=t.width,Fi.height=t.height;const n=Fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Hr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Wn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ad=0;class Eu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=ui(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(xa(r[a].image)):s.push(xa(r[a]))}else s=xa(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function xa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Td.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cd=0;class Ve extends gr{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=yn,r=yn,s=an,a=Hn,o=dn,l=jn,c=Ve.DEFAULT_ANISOTROPY,d=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=ui(),this.name="",this.source=new Eu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==du)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vn:t.x=t.x-Math.floor(t.x);break;case yn:t.x=t.x<0?0:1;break;case fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vn:t.y=t.y-Math.floor(t.y);break;case yn:t.y=t.y<0?0:1;break;case fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=du;Ve.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,n=0,r=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],d=l[4],h=l[8],p=l[1],f=l[5],_=l[9],g=l[2],m=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,S=(f+1)/2,R=(u+1)/2,P=(d+p)/4,L=(h+g)/4,N=(_+m)/4;return M>S&&M>R?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=P/n,s=L/n):S>R?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=P/r,s=N/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=L/s,r=N/s),this.set(n,r,s,e),this}let x=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(p-d)*(p-d));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(h-g)/x,this.z=(p-d)/x,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rd extends gr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ve(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Eu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends Rd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Tu extends Ve{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pd extends Ve{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],d=n[r+2],h=n[r+3];const p=s[a+0],f=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h;return}if(o===1){t[e+0]=p,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==p||c!==f||d!==_){let m=1-o;const u=l*p+c*f+d*_+h*g,x=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){const R=Math.sqrt(M),P=Math.atan2(R,u*x);m=Math.sin(m*P)/R,o=Math.sin(o*P)/R}const S=o*x;if(l=l*m+p*S,c=c*m+f*S,d=d*m+_*S,h=h*m+g*S,m===1-o){const R=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=R,c*=R,d*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],d=n[r+3],h=s[a],p=s[a+1],f=s[a+2],_=s[a+3];return t[e]=o*_+d*h+l*f-c*p,t[e+1]=l*_+d*p+c*h-o*f,t[e+2]=c*_+d*f+o*p-l*h,t[e+3]=d*_-o*h-l*p-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(r/2),h=o(s/2),p=l(n/2),f=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=p*d*h+c*f*_,this._y=c*f*h-p*d*_,this._z=c*d*_+p*f*h,this._w=c*d*h-p*f*_;break;case"YXZ":this._x=p*d*h+c*f*_,this._y=c*f*h-p*d*_,this._z=c*d*_-p*f*h,this._w=c*d*h+p*f*_;break;case"ZXY":this._x=p*d*h-c*f*_,this._y=c*f*h+p*d*_,this._z=c*d*_+p*f*h,this._w=c*d*h-p*f*_;break;case"ZYX":this._x=p*d*h-c*f*_,this._y=c*f*h+p*d*_,this._z=c*d*_-p*f*h,this._w=c*d*h+p*f*_;break;case"YZX":this._x=p*d*h+c*f*_,this._y=c*f*h+p*d*_,this._z=c*d*_-p*f*h,this._w=c*d*h-p*f*_;break;case"XZY":this._x=p*d*h-c*f*_,this._y=c*f*h-p*d*_,this._z=c*d*_+p*f*h,this._w=c*d*h+p*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],h=e[10],p=n+o+h;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(d-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ke(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-n*c,this._z=s*d+a*c+n*l-r*o,this._w=a*d-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*r+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-e)*d)/c,p=Math.sin(e*d)/c;return this._w=a*h+this._w*p,this._x=n*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,e=0,n=0){$.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ul.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ul.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),d=2*(o*e-s*r),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*d,this.y=n+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ya.copy(this).projectOnVector(t),this.sub(ya)}reflect(t){return this.sub(ya.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new $,Ul=new Zn;class hi{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gn):gn.fromBufferAttribute(s,a),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rs.copy(n.boundingBox)),rs.applyMatrix4(t.matrixWorld),this.union(rs)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),ss.subVectors(this.max,Mr),Oi.subVectors(t.a,Mr),ki.subVectors(t.b,Mr),Bi.subVectors(t.c,Mr),Qn.subVectors(ki,Oi),ti.subVectors(Bi,ki),gi.subVectors(Oi,Bi);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-gi.z,gi.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,gi.z,0,-gi.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-gi.y,gi.x,0];return!ba(e,Oi,ki,Bi,ss)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,Oi,ki,Bi,ss))?!1:(as.crossVectors(Qn,ti),e=[as.x,as.y,as.z],ba(e,Oi,ki,Bi,ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const In=[new $,new $,new $,new $,new $,new $,new $,new $],gn=new $,rs=new hi,Oi=new $,ki=new $,Bi=new $,Qn=new $,ti=new $,gi=new $,Mr=new $,ss=new $,as=new $,_i=new $;function ba(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){_i.fromArray(i,s);const o=r.x*Math.abs(_i.x)+r.y*Math.abs(_i.y)+r.z*Math.abs(_i.z),l=t.dot(_i),c=e.dot(_i),d=n.dot(_i);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Ld=new hi,wr=new $,Sa=new $;class Pi{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ld.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wr.subVectors(t,this.center);const e=wr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(wr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wr.copy(t.center).add(Sa)),this.expandByPoint(wr.copy(t.center).sub(Sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new $,Ma=new $,os=new $,ei=new $,wa=new $,ls=new $,Ea=new $;class aa{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ma.copy(t).add(e).multiplyScalar(.5),os.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(Ma);const s=t.distanceTo(e)*.5,a=-this.direction.dot(os),o=ei.dot(this.direction),l=-ei.dot(os),c=ei.lengthSq(),d=Math.abs(1-a*a);let h,p,f,_;if(d>0)if(h=a*l-o,p=a*o-l,_=s*d,h>=0)if(p>=-_)if(p<=_){const g=1/d;h*=g,p*=g,f=h*(h+a*p+2*o)+p*(a*h+p+2*l)+c}else p=s,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*l)+c;else p=-s,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*l)+c;else p<=-_?(h=Math.max(0,-(-a*s+o)),p=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+p*(p+2*l)+c):p<=_?(h=0,p=Math.min(Math.max(-s,-l),s),f=p*(p+2*l)+c):(h=Math.max(0,-(a*s+o)),p=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+p*(p+2*l)+c);else p=a>0?-s:s,h=Math.max(0,-(a*p+o)),f=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ma).addScaledVector(os,p),f}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),r=Dn.dot(Dn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,r=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,r=(t.min.x-p.x)*c),d>=0?(s=(t.min.y-p.y)*d,a=(t.max.y-p.y)*d):(s=(t.max.y-p.y)*d,a=(t.min.y-p.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-p.z)*h,l=(t.max.z-p.z)*h):(o=(t.max.z-p.z)*h,l=(t.min.z-p.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,r,s){wa.subVectors(e,t),ls.subVectors(n,t),Ea.crossVectors(wa,ls);let a=this.direction.dot(Ea),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ei.subVectors(this.origin,t);const l=o*this.direction.dot(ls.crossVectors(ei,ls));if(l<0)return null;const c=o*this.direction.dot(wa.cross(ei));if(c<0||l+c>a)return null;const d=-o*ei.dot(Ea);return d<0?null:this.at(d/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,r,s,a,o,l,c,d,h,p,f,_,g,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,d,h,p,f,_,g,m)}set(t,e,n,r,s,a,o,l,c,d,h,p,f,_,g,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=p,u[3]=f,u[7]=_,u[11]=g,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/zi.setFromMatrixColumn(t,0).length(),s=1/zi.setFromMatrixColumn(t,1).length(),a=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const p=a*d,f=a*h,_=o*d,g=o*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=f+_*c,e[5]=p-g*c,e[9]=-o*l,e[2]=g-p*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){const p=l*d,f=l*h,_=c*d,g=c*h;e[0]=p+g*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*d,e[9]=-o,e[2]=f*o-_,e[6]=g+p*o,e[10]=a*l}else if(t.order==="ZXY"){const p=l*d,f=l*h,_=c*d,g=c*h;e[0]=p-g*o,e[4]=-a*h,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*d,e[9]=g-p*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const p=a*d,f=a*h,_=o*d,g=o*h;e[0]=l*d,e[4]=_*c-f,e[8]=p*c+g,e[1]=l*h,e[5]=g*c+p,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const p=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*d,e[4]=g-p*h,e[8]=_*h+f,e[1]=h,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=f*h+_,e[10]=p-g*h}else if(t.order==="XZY"){const p=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=p*h+g,e[5]=a*d,e[9]=f*h-_,e[2]=_*h-f,e[6]=o*d,e[10]=g*h+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Id,t,Dd)}lookAt(t,e,n){const r=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ni.crossVectors(n,rn),ni.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ni.crossVectors(n,rn)),ni.normalize(),cs.crossVectors(rn,ni),r[0]=ni.x,r[4]=cs.x,r[8]=rn.x,r[1]=ni.y,r[5]=cs.y,r[9]=rn.y,r[2]=ni.z,r[6]=cs.z,r[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],p=n[9],f=n[13],_=n[2],g=n[6],m=n[10],u=n[14],x=n[3],M=n[7],S=n[11],R=n[15],P=r[0],L=r[4],N=r[8],w=r[12],E=r[1],B=r[5],C=r[9],z=r[13],y=r[2],W=r[6],H=r[10],Z=r[14],J=r[3],Q=r[7],pt=r[11],j=r[15];return s[0]=a*P+o*E+l*y+c*J,s[4]=a*L+o*B+l*W+c*Q,s[8]=a*N+o*C+l*H+c*pt,s[12]=a*w+o*z+l*Z+c*j,s[1]=d*P+h*E+p*y+f*J,s[5]=d*L+h*B+p*W+f*Q,s[9]=d*N+h*C+p*H+f*pt,s[13]=d*w+h*z+p*Z+f*j,s[2]=_*P+g*E+m*y+u*J,s[6]=_*L+g*B+m*W+u*Q,s[10]=_*N+g*C+m*H+u*pt,s[14]=_*w+g*z+m*Z+u*j,s[3]=x*P+M*E+S*y+R*J,s[7]=x*L+M*B+S*W+R*Q,s[11]=x*N+M*C+S*H+R*pt,s[15]=x*w+M*z+S*Z+R*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],h=t[6],p=t[10],f=t[14],_=t[3],g=t[7],m=t[11],u=t[15];return _*(+s*l*h-r*c*h-s*o*p+n*c*p+r*o*f-n*l*f)+g*(+e*l*f-e*c*p+s*a*p-r*a*f+r*c*d-s*l*d)+m*(+e*c*h-e*o*f-s*a*h+n*a*f+s*o*d-n*c*d)+u*(-r*o*d-e*l*h+e*o*p+r*a*h-n*a*p+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=t[9],p=t[10],f=t[11],_=t[12],g=t[13],m=t[14],u=t[15],x=h*m*c-g*p*c+g*l*f-o*m*f-h*l*u+o*p*u,M=_*p*c-d*m*c-_*l*f+a*m*f+d*l*u-a*p*u,S=d*g*c-_*h*c+_*o*f-a*g*f-d*o*u+a*h*u,R=_*h*l-d*g*l-_*o*p+a*g*p+d*o*m-a*h*m,P=e*x+n*M+r*S+s*R;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return t[0]=x*L,t[1]=(g*p*s-h*m*s-g*r*f+n*m*f+h*r*u-n*p*u)*L,t[2]=(o*m*s-g*l*s+g*r*c-n*m*c-o*r*u+n*l*u)*L,t[3]=(h*l*s-o*p*s-h*r*c+n*p*c+o*r*f-n*l*f)*L,t[4]=M*L,t[5]=(d*m*s-_*p*s+_*r*f-e*m*f-d*r*u+e*p*u)*L,t[6]=(_*l*s-a*m*s-_*r*c+e*m*c+a*r*u-e*l*u)*L,t[7]=(a*p*s-d*l*s+d*r*c-e*p*c-a*r*f+e*l*f)*L,t[8]=S*L,t[9]=(_*h*s-d*g*s-_*n*f+e*g*f+d*n*u-e*h*u)*L,t[10]=(a*g*s-_*o*s+_*n*c-e*g*c-a*n*u+e*o*u)*L,t[11]=(d*o*s-a*h*s-d*n*c+e*h*c+a*n*f-e*o*f)*L,t[12]=R*L,t[13]=(d*g*r-_*h*r+_*n*p-e*g*p-d*n*m+e*h*m)*L,t[14]=(_*o*r-a*g*r-_*n*l+e*g*l+a*n*m-e*o*m)*L,t[15]=(a*h*r-d*o*r+d*n*l-e*h*l-a*n*p+e*o*p)*L,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,d=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+n,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,d=a+a,h=o+o,p=s*c,f=s*d,_=s*h,g=a*d,m=a*h,u=o*h,x=l*c,M=l*d,S=l*h,R=n.x,P=n.y,L=n.z;return r[0]=(1-(g+u))*R,r[1]=(f+S)*R,r[2]=(_-M)*R,r[3]=0,r[4]=(f-S)*P,r[5]=(1-(p+u))*P,r[6]=(m+x)*P,r[7]=0,r[8]=(_+M)*L,r[9]=(m-x)*L,r[10]=(1-(p+g))*L,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=zi.set(r[0],r[1],r[2]).length();const a=zi.set(r[4],r[5],r[6]).length(),o=zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],_n.copy(this);const c=1/s,d=1/a,h=1/o;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=d,_n.elements[5]*=d,_n.elements[6]*=d,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,e.setFromRotationMatrix(_n),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Gn){const l=this.elements,c=2*s/(e-t),d=2*s/(n-r),h=(e+t)/(e-t),p=(n+r)/(n-r);let f,_;if(o===Gn)f=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===js)f=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Gn){const l=this.elements,c=1/(e-t),d=1/(n-r),h=1/(a-s),p=(e+t)*c,f=(n+r)*d;let _,g;if(o===Gn)_=(a+s)*h,g=-2*h;else if(o===js)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const zi=new $,_n=new se,Id=new $(0,0,0),Dd=new $(1,1,1),ni=new $,cs=new $,rn=new $,Fl=new se,Ol=new Zn;class en{constructor(t=0,e=0,n=0,r=en.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],p=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ol.setFromEuler(this),this.setFromQuaternion(Ol,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class Au{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Nd=0;const kl=new $,Vi=new Zn,Nn=new se,us=new $,Er=new $,Ud=new $,Fd=new Zn,Bl=new $(1,0,0),zl=new $(0,1,0),Vl=new $(0,0,1),Hl={type:"added"},Od={type:"removed"},Hi={type:"childadded",child:null},Ta={type:"childremoved",child:null};class Le extends gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new $,e=new en,n=new Zn,r=new $(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new se},normalMatrix:{value:new he}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Au,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(Bl,t)}rotateY(t){return this.rotateOnAxis(zl,t)}rotateZ(t){return this.rotateOnAxis(Vl,t)}translateOnAxis(t,e){return kl.copy(t).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bl,t)}translateY(t){return this.translateOnAxis(zl,t)}translateZ(t){return this.translateOnAxis(Vl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?us.copy(t):us.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Er,us,this.up):Nn.lookAt(us,Er,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),Vi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hl),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Od),Ta.child=t,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hl),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,Ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,Fd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),h=a(t.shapes),p=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Le.DEFAULT_UP=new $(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new $,Un=new $,Aa=new $,Fn=new $,Gi=new $,Wi=new $,Gl=new $,Ca=new $,Ra=new $,Pa=new $,La=new Se,Ia=new Se,Da=new Se;class xn{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),vn.subVectors(t,e),r.cross(vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){vn.subVectors(r,e),Un.subVectors(n,e),Aa.subVectors(t,e);const a=vn.dot(vn),o=vn.dot(Un),l=vn.dot(Aa),c=Un.dot(Un),d=Un.dot(Aa),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const p=1/h,f=(c*l-o*d)*p,_=(a*d-o*l)*p;return s.set(1-f-_,_,f)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return La.setScalar(0),Ia.setScalar(0),Da.setScalar(0),La.fromBufferAttribute(t,e),Ia.fromBufferAttribute(t,n),Da.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(La,s.x),a.addScaledVector(Ia,s.y),a.addScaledVector(Da,s.z),a}static isFrontFacing(t,e,n,r){return vn.subVectors(n,e),Un.subVectors(t,e),vn.cross(Un).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),vn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Gi.subVectors(r,n),Wi.subVectors(s,n),Ca.subVectors(t,n);const l=Gi.dot(Ca),c=Wi.dot(Ca);if(l<=0&&c<=0)return e.copy(n);Ra.subVectors(t,r);const d=Gi.dot(Ra),h=Wi.dot(Ra);if(d>=0&&h<=d)return e.copy(r);const p=l*h-d*c;if(p<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(Gi,a);Pa.subVectors(t,s);const f=Gi.dot(Pa),_=Wi.dot(Pa);if(_>=0&&f<=_)return e.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Wi,o);const m=d*_-f*h;if(m<=0&&h-d>=0&&f-_>=0)return Gl.subVectors(s,r),o=(h-d)/(h-d+(f-_)),e.copy(r).addScaledVector(Gl,o);const u=1/(m+g+p);return a=g*u,o=p*u,e.copy(n).addScaledVector(Gi,a).addScaledVector(Wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},hs={h:0,s:0,l:0};function Na(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}let ae=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=fe.workingColorSpace){if(t=il(t,1),e=Ke(e,0,1),n=Ke(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Na(a,s,t+1/3),this.g=Na(a,s,t),this.b=Na(a,s,t-1/3)}return fe.toWorkingColorSpace(this,r),this}setStyle(t,e=De){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=Cu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return fe.fromWorkingColorSpace(Ge.copy(this),t),Math.round(Ke(Ge.r*255,0,255))*65536+Math.round(Ke(Ge.g*255,0,255))*256+Math.round(Ke(Ge.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(Ge.copy(this),e);const n=Ge.r,r=Ge.g,s=Ge.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=De){fe.fromWorkingColorSpace(Ge.copy(this),t);const e=Ge.r,n=Ge.g,r=Ge.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(hs);const n=kr(ii.h,hs.h,e),r=kr(ii.s,hs.s,e),s=kr(ii.l,hs.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Ge=new ae;ae.NAMES=Cu;let kd=0;class bn extends gr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=ui(),this.name="",this.blending=er,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eo,this.blendDst=no,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=El,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==eo&&(n.blendSrc=this.blendSrc),this.blendDst!==no&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==El&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qs extends bn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new $,ds=new me;class ln{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Tl,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ds.fromBufferAttribute(this,e),ds.applyMatrix3(t),this.setXY(e,ds.x,ds.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),r=Ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),r=Ye(r,this.array),s=Ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tl&&(t.usage=this.usage),t}}class Ru extends ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Pu extends ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends ln{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Bd=0;const un=new se,Ua=new Le,Xi=new $,sn=new hi,Tr=new hi,Be=new $;class Xe extends gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wu(t)?Pu:Ru)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new he().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return Ua.lookAt(t),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Me(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Tr.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(sn.min,Tr.min),sn.expandByPoint(Be),Be.addVectors(sn.max,Tr.max),sn.expandByPoint(Be)):(sn.expandByPoint(Tr.min),sn.expandByPoint(Tr.max))}sn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Be.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Be));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Be.fromBufferAttribute(o,c),l&&(Xi.fromBufferAttribute(t,c),Be.add(Xi)),r=Math.max(r,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new $,l[N]=new $;const c=new $,d=new $,h=new $,p=new me,f=new me,_=new me,g=new $,m=new $;function u(N,w,E){c.fromBufferAttribute(n,N),d.fromBufferAttribute(n,w),h.fromBufferAttribute(n,E),p.fromBufferAttribute(s,N),f.fromBufferAttribute(s,w),_.fromBufferAttribute(s,E),d.sub(c),h.sub(c),f.sub(p),_.sub(p);const B=1/(f.x*_.y-_.x*f.y);isFinite(B)&&(g.copy(d).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(B),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-_.x).multiplyScalar(B),o[N].add(g),o[w].add(g),o[E].add(g),l[N].add(m),l[w].add(m),l[E].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let N=0,w=x.length;N<w;++N){const E=x[N],B=E.start,C=E.count;for(let z=B,y=B+C;z<y;z+=3)u(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const M=new $,S=new $,R=new $,P=new $;function L(N){R.fromBufferAttribute(r,N),P.copy(R);const w=o[N];M.copy(w),M.sub(R.multiplyScalar(R.dot(w))).normalize(),S.crossVectors(P,w);const B=S.dot(l[N])<0?-1:1;a.setXYZW(N,M.x,M.y,M.z,B)}for(let N=0,w=x.length;N<w;++N){const E=x[N],B=E.start,C=E.count;for(let z=B,y=B+C;z<y;z+=3)L(t.getX(z+0)),L(t.getX(z+1)),L(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const r=new $,s=new $,a=new $,o=new $,l=new $,c=new $,d=new $,h=new $;if(t)for(let p=0,f=t.count;p<f;p+=3){const _=t.getX(p+0),g=t.getX(p+1),m=t.getX(p+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=e.count;p<f;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,h=o.normalized,p=new c.constructor(l.length*d);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*d;for(let u=0;u<d;u++)p[_++]=c[f++]}return new ln(p,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xe,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const p=c[d],f=t(p,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,p=c.length;h<p;h++){const f=c[h];d.push(f.toJSON(t.data))}d.length>0&&(r[l]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(e))}const s=t.morphAttributes;for(const c in s){const d=[],h=s[c];for(let p=0,f=h.length;p<f;p++)d.push(h[p].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wl=new se,vi=new aa,fs=new Pi,Xl=new $,ps=new $,ms=new $,gs=new $,Fa=new $,_s=new $,jl=new $,vs=new $;class Pe extends Le{constructor(t=new Xe,e=new qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){_s.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(Fa.fromBufferAttribute(h,t),a?_s.addScaledVector(Fa,d):_s.addScaledVector(Fa.sub(e),d))}e.add(_s)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(s),vi.copy(t.ray).recast(t.near),!(fs.containsPoint(vi.origin)===!1&&(vi.intersectSphere(fs,Xl)===null||vi.origin.distanceToSquared(Xl)>(t.far-t.near)**2))&&(Wl.copy(s).invert(),vi.copy(t.ray).applyMatrix4(Wl),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,p=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=p.length;_<g;_++){const m=p[_],u=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=x,R=M;S<R;S+=3){const P=o.getX(S),L=o.getX(S+1),N=o.getX(S+2);r=xs(this,u,t,n,c,d,h,P,L,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,u=g;m<u;m+=3){const x=o.getX(m),M=o.getX(m+1),S=o.getX(m+2);r=xs(this,a,t,n,c,d,h,x,M,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=p.length;_<g;_++){const m=p[_],u=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=x,R=M;S<R;S+=3){const P=S,L=S+1,N=S+2;r=xs(this,u,t,n,c,d,h,P,L,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,u=g;m<u;m+=3){const x=m,M=m+1,S=m+2;r=xs(this,a,t,n,c,d,h,x,M,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function zd(i,t,e,n,r,s,a,o){let l;if(t.side===$e?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===Xn,o),l===null)return null;vs.copy(o),vs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(vs);return c<e.near||c>e.far?null:{distance:c,point:vs.clone(),object:i}}function xs(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,ps),i.getVertexPosition(l,ms),i.getVertexPosition(c,gs);const d=zd(i,t,e,n,ps,ms,gs,jl);if(d){const h=new $;xn.getBarycoord(jl,ps,ms,gs,h),r&&(d.uv=xn.getInterpolatedAttribute(r,o,l,c,h,new me)),s&&(d.uv1=xn.getInterpolatedAttribute(s,o,l,c,h,new me)),a&&(d.normal=xn.getInterpolatedAttribute(a,o,l,c,h,new $),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new $,materialIndex:0};xn.getNormal(ps,ms,gs,p.normal),d.face=p,d.barycoord=h}return d}class Kn extends Xe{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let p=0,f=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,r,a,2),_("x","z","y",1,-1,t,n,-e,r,a,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(h,2));function _(g,m,u,x,M,S,R,P,L,N,w){const E=S/L,B=R/N,C=S/2,z=R/2,y=P/2,W=L+1,H=N+1;let Z=0,J=0;const Q=new $;for(let pt=0;pt<H;pt++){const j=pt*B-z;for(let Y=0;Y<W;Y++){const vt=Y*E-C;Q[g]=vt*x,Q[m]=j*M,Q[u]=y,c.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[u]=P>0?1:-1,d.push(Q.x,Q.y,Q.z),h.push(Y/L),h.push(1-pt/N),Z+=1}}for(let pt=0;pt<N;pt++)for(let j=0;j<L;j++){const Y=p+j+W*pt,vt=p+j+W*(pt+1),X=p+(j+1)+W*(pt+1),q=p+(j+1)+W*pt;l.push(Y,vt,q),l.push(vt,X,q),J+=6}o.addGroup(f,J,w),f+=J,p+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ze(i){const t={};for(let e=0;e<i.length;e++){const n=fr(i[e]);for(const r in n)t[r]=n[r]}return t}function Vd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Lu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}const Iu={clone:fr,merge:Ze};var Hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends bn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hd,this.fragmentShader=Gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fr(t.uniforms),this.uniformsGroups=Vd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Du extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new $,ql=new me,Yl=new me;class We extends Du{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=dr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,ql,Yl),e.subVectors(Yl,ql)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Or*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ji=-90,qi=1;class Wd extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new We(ji,qi,t,e);r.layers=this.layers,this.add(r);const s=new We(ji,qi,t,e);s.layers=this.layers,this.add(s);const a=new We(ji,qi,t,e);a.layers=this.layers,this.add(a);const o=new We(ji,qi,t,e);o.layers=this.layers,this.add(o);const l=new We(ji,qi,t,e);l.layers=this.layers,this.add(l);const c=new We(ji,qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),t.render(e,d),t.setRenderTarget(h,p,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Nu extends Ve{constructor(t,e,n,r,s,a,o,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:lr,super(t,e,n,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xd extends Ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Nu(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Kn(5,5,5),s=new qn({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:oi});s.uniforms.tEquirect.value=e;const a=new Pe(r,s),o=e.minFilter;return e.minFilter===Hn&&(e.minFilter=an),new Wd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Oa=new $,jd=new $,qd=new he;class Si{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Oa.subVectors(n,e).cross(jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Oa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||qd.getNormalMatrix(t),r=this.coplanarPoint(Oa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Pi,ys=new $;class rl{constructor(t=new Si,e=new Si,n=new Si,r=new Si,s=new Si,a=new Si){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],h=r[6],p=r[7],f=r[8],_=r[9],g=r[10],m=r[11],u=r[12],x=r[13],M=r[14],S=r[15];if(n[0].setComponents(l-s,p-c,m-f,S-u).normalize(),n[1].setComponents(l+s,p+c,m+f,S+u).normalize(),n[2].setComponents(l+a,p+d,m+_,S+x).normalize(),n[3].setComponents(l-a,p-d,m-_,S-x).normalize(),n[4].setComponents(l-o,p-h,m-g,S-M).normalize(),e===Gn)n[5].setComponents(l+o,p+h,m+g,S+M).normalize();else if(e===js)n[5].setComponents(o,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(ys.x=r.normal.x>0?t.max.x:t.min.x,ys.y=r.normal.y>0?t.max.y:t.min.y,ys.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ys)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Uu(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Yd(i){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,h=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,d);else{h.sort((f,_)=>f.start-_.start);let p=0;for(let f=1;f<h.length;f++){const _=h[p],g=h[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++p,h[p]=g)}h.length=p+1;for(let f=0,_=h.length;f<_;f++){const g=h[f];i.bufferSubData(c,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class qr extends Xe{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,d=l+1,h=t/o,p=e/l,f=[],_=[],g=[],m=[];for(let u=0;u<d;u++){const x=u*p-a;for(let M=0;M<c;M++){const S=M*h-s;_.push(S,-x,0),g.push(0,0,1),m.push(M/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<o;x++){const M=x+c*u,S=x+c*(u+1),R=x+1+c*(u+1),P=x+1+c*u;f.push(M,S,P),f.push(S,R,P)}this.setIndex(f),this.setAttribute("position",new Me(_,3)),this.setAttribute("normal",new Me(g,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Zd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kd=`#ifdef USE_ALPHAHASH
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
#endif`,$d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ef=`#ifdef USE_AOMAP
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
#endif`,nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rf=`#ifdef USE_BATCHING
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
#endif`,sf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cf=`#ifdef USE_IRIDESCENCE
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
#endif`,uf=`#ifdef USE_BUMPMAP
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
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xf=`#define PI 3.141592653589793
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
} // validated`,yf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bf=`vec3 transformedNormal = objectNormal;
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
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Af=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Df=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Of=`#ifdef USE_GRADIENTMAP
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
}`,kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vf=`uniform bool receiveShadow;
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
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qf=`PhysicalMaterial material;
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
#endif`,Yf=`struct PhysicalMaterial {
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
}`,Zf=`
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
#endif`,Kf=`#if defined( RE_IndirectDiffuse )
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
#endif`,$f=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sp=`#if defined( USE_POINTS_UV )
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
#endif`,ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hp=`#ifdef USE_MORPHTARGETS
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
#endif`,dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vp=`#ifdef USE_NORMALMAP
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
#endif`,xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Np=`float getShadowMask() {
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
}`,Up=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,Op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kp=`#ifdef USE_SKINNING
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
#endif`,Bp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gp=`#ifdef USE_TRANSMISSION
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
#endif`,Wp=`#ifdef USE_TRANSMISSION
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kp=`uniform sampler2D t2D;
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`#include <common>
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
}`,nm=`#if DEPTH_PACKING == 3200
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
}`,im=`#define DISTANCE
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
}`,rm=`#define DISTANCE
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
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`uniform float scale;
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#include <common>
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
}`,um=`uniform vec3 diffuse;
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
}`,hm=`#define LAMBERT
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
}`,dm=`#define LAMBERT
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
}`,fm=`#define MATCAP
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
}`,pm=`#define MATCAP
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
}`,mm=`#define NORMAL
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
}`,gm=`#define NORMAL
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
}`,_m=`#define PHONG
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
}`,vm=`#define PHONG
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
}`,xm=`#define STANDARD
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
}`,ym=`#define STANDARD
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
}`,bm=`#define TOON
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
}`,Sm=`#define TOON
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
}`,Mm=`uniform float size;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Em=`#include <common>
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
}`,Tm=`uniform vec3 color;
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
}`,Am=`uniform float rotation;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:Zd,alphahash_pars_fragment:Kd,alphamap_fragment:$d,alphamap_pars_fragment:Jd,alphatest_fragment:Qd,alphatest_pars_fragment:tf,aomap_fragment:ef,aomap_pars_fragment:nf,batching_pars_vertex:rf,batching_vertex:sf,begin_vertex:af,beginnormal_vertex:of,bsdfs:lf,iridescence_fragment:cf,bumpmap_pars_fragment:uf,clipping_planes_fragment:hf,clipping_planes_pars_fragment:df,clipping_planes_pars_vertex:ff,clipping_planes_vertex:pf,color_fragment:mf,color_pars_fragment:gf,color_pars_vertex:_f,color_vertex:vf,common:xf,cube_uv_reflection_fragment:yf,defaultnormal_vertex:bf,displacementmap_pars_vertex:Sf,displacementmap_vertex:Mf,emissivemap_fragment:wf,emissivemap_pars_fragment:Ef,colorspace_fragment:Tf,colorspace_pars_fragment:Af,envmap_fragment:Cf,envmap_common_pars_fragment:Rf,envmap_pars_fragment:Pf,envmap_pars_vertex:Lf,envmap_physical_pars_fragment:Hf,envmap_vertex:If,fog_vertex:Df,fog_pars_vertex:Nf,fog_fragment:Uf,fog_pars_fragment:Ff,gradientmap_pars_fragment:Of,lightmap_pars_fragment:kf,lights_lambert_fragment:Bf,lights_lambert_pars_fragment:zf,lights_pars_begin:Vf,lights_toon_fragment:Gf,lights_toon_pars_fragment:Wf,lights_phong_fragment:Xf,lights_phong_pars_fragment:jf,lights_physical_fragment:qf,lights_physical_pars_fragment:Yf,lights_fragment_begin:Zf,lights_fragment_maps:Kf,lights_fragment_end:$f,logdepthbuf_fragment:Jf,logdepthbuf_pars_fragment:Qf,logdepthbuf_pars_vertex:tp,logdepthbuf_vertex:ep,map_fragment:np,map_pars_fragment:ip,map_particle_fragment:rp,map_particle_pars_fragment:sp,metalnessmap_fragment:ap,metalnessmap_pars_fragment:op,morphinstance_vertex:lp,morphcolor_vertex:cp,morphnormal_vertex:up,morphtarget_pars_vertex:hp,morphtarget_vertex:dp,normal_fragment_begin:fp,normal_fragment_maps:pp,normal_pars_fragment:mp,normal_pars_vertex:gp,normal_vertex:_p,normalmap_pars_fragment:vp,clearcoat_normal_fragment_begin:xp,clearcoat_normal_fragment_maps:yp,clearcoat_pars_fragment:bp,iridescence_pars_fragment:Sp,opaque_fragment:Mp,packing:wp,premultiplied_alpha_fragment:Ep,project_vertex:Tp,dithering_fragment:Ap,dithering_pars_fragment:Cp,roughnessmap_fragment:Rp,roughnessmap_pars_fragment:Pp,shadowmap_pars_fragment:Lp,shadowmap_pars_vertex:Ip,shadowmap_vertex:Dp,shadowmask_pars_fragment:Np,skinbase_vertex:Up,skinning_pars_vertex:Fp,skinning_vertex:Op,skinnormal_vertex:kp,specularmap_fragment:Bp,specularmap_pars_fragment:zp,tonemapping_fragment:Vp,tonemapping_pars_fragment:Hp,transmission_fragment:Gp,transmission_pars_fragment:Wp,uv_pars_fragment:Xp,uv_pars_vertex:jp,uv_vertex:qp,worldpos_vertex:Yp,background_vert:Zp,background_frag:Kp,backgroundCube_vert:$p,backgroundCube_frag:Jp,cube_vert:Qp,cube_frag:tm,depth_vert:em,depth_frag:nm,distanceRGBA_vert:im,distanceRGBA_frag:rm,equirect_vert:sm,equirect_frag:am,linedashed_vert:om,linedashed_frag:lm,meshbasic_vert:cm,meshbasic_frag:um,meshlambert_vert:hm,meshlambert_frag:dm,meshmatcap_vert:fm,meshmatcap_frag:pm,meshnormal_vert:mm,meshnormal_frag:gm,meshphong_vert:_m,meshphong_frag:vm,meshphysical_vert:xm,meshphysical_frag:ym,meshtoon_vert:bm,meshtoon_frag:Sm,points_vert:Mm,points_frag:wm,shadow_vert:Em,shadow_frag:Tm,sprite_vert:Am,sprite_frag:Cm},It={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},En={basic:{uniforms:Ze([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Ze([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new ae(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Ze([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Ze([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Ze([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new ae(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Ze([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Ze([It.points,It.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Ze([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Ze([It.common,It.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Ze([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Ze([It.sprite,It.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:Ze([It.common,It.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:Ze([It.lights,It.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};En.physical={uniforms:Ze([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const bs={r:0,b:0,g:0},yi=new en,Rm=new se;function Pm(i,t,e,n,r,s,a){const o=new ae(0);let l=s===!0?0:1,c,d,h=null,p=0,f=null;function _(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function g(x){let M=!1;const S=_(x);S===null?u(o,l):S&&S.isColor&&(u(S,1),M=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,M){const S=_(M);S&&(S.isCubeTexture||S.mapping===ia)?(d===void 0&&(d=new Pe(new Kn(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:fr(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),yi.copy(M.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Rm.makeRotationFromEuler(yi)),d.material.toneMapped=fe.getTransfer(S.colorSpace)!==Ae,(h!==S||p!==S.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,h=S,p=S.version,f=i.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Pe(new qr(2,2),new qn({name:"BackgroundMaterial",uniforms:fr(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=fe.getTransfer(S.colorSpace)!==Ae,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||p!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,p=S.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,M){x.getRGB(bs,Lu(i)),n.buffers.color.setClear(bs.r,bs.g,bs.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),l=M,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(o,l)},render:g,addToRenderList:m}}function Lm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,a=!1;function o(E,B,C,z,y){let W=!1;const H=h(z,C,B);s!==H&&(s=H,c(s.object)),W=f(E,z,C,y),W&&_(E,z,C,y),y!==null&&t.update(y,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,S(E,B,C,z),y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(y).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function d(E){return i.deleteVertexArray(E)}function h(E,B,C){const z=C.wireframe===!0;let y=n[E.id];y===void 0&&(y={},n[E.id]=y);let W=y[B.id];W===void 0&&(W={},y[B.id]=W);let H=W[z];return H===void 0&&(H=p(l()),W[z]=H),H}function p(E){const B=[],C=[],z=[];for(let y=0;y<e;y++)B[y]=0,C[y]=0,z[y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:C,attributeDivisors:z,object:E,attributes:{},index:null}}function f(E,B,C,z){const y=s.attributes,W=B.attributes;let H=0;const Z=C.getAttributes();for(const J in Z)if(Z[J].location>=0){const pt=y[J];let j=W[J];if(j===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(j=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(j=E.instanceColor)),pt===void 0||pt.attribute!==j||j&&pt.data!==j.data)return!0;H++}return s.attributesNum!==H||s.index!==z}function _(E,B,C,z){const y={},W=B.attributes;let H=0;const Z=C.getAttributes();for(const J in Z)if(Z[J].location>=0){let pt=W[J];pt===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(pt=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(pt=E.instanceColor));const j={};j.attribute=pt,pt&&pt.data&&(j.data=pt.data),y[J]=j,H++}s.attributes=y,s.attributesNum=H,s.index=z}function g(){const E=s.newAttributes;for(let B=0,C=E.length;B<C;B++)E[B]=0}function m(E){u(E,0)}function u(E,B){const C=s.newAttributes,z=s.enabledAttributes,y=s.attributeDivisors;C[E]=1,z[E]===0&&(i.enableVertexAttribArray(E),z[E]=1),y[E]!==B&&(i.vertexAttribDivisor(E,B),y[E]=B)}function x(){const E=s.newAttributes,B=s.enabledAttributes;for(let C=0,z=B.length;C<z;C++)B[C]!==E[C]&&(i.disableVertexAttribArray(C),B[C]=0)}function M(E,B,C,z,y,W,H){H===!0?i.vertexAttribIPointer(E,B,C,y,W):i.vertexAttribPointer(E,B,C,z,y,W)}function S(E,B,C,z){g();const y=z.attributes,W=C.getAttributes(),H=B.defaultAttributeValues;for(const Z in W){const J=W[Z];if(J.location>=0){let Q=y[Z];if(Q===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(Q=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(Q=E.instanceColor)),Q!==void 0){const pt=Q.normalized,j=Q.itemSize,Y=t.get(Q);if(Y===void 0)continue;const vt=Y.buffer,X=Y.type,q=Y.bytesPerElement,ct=X===i.INT||X===i.UNSIGNED_INT||Q.gpuType===$o;if(Q.isInterleavedBufferAttribute){const ft=Q.data,yt=ft.stride,Tt=Q.offset;if(ft.isInstancedInterleavedBuffer){for(let zt=0;zt<J.locationSize;zt++)u(J.location+zt,ft.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let zt=0;zt<J.locationSize;zt++)m(J.location+zt);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let zt=0;zt<J.locationSize;zt++)M(J.location+zt,j/J.locationSize,X,pt,yt*q,(Tt+j/J.locationSize*zt)*q,ct)}else{if(Q.isInstancedBufferAttribute){for(let ft=0;ft<J.locationSize;ft++)u(J.location+ft,Q.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ft=0;ft<J.locationSize;ft++)m(J.location+ft);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let ft=0;ft<J.locationSize;ft++)M(J.location+ft,j/J.locationSize,X,pt,j*q,j/J.locationSize*ft*q,ct)}}else if(H!==void 0){const pt=H[Z];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(J.location,pt);break;case 3:i.vertexAttrib3fv(J.location,pt);break;case 4:i.vertexAttrib4fv(J.location,pt);break;default:i.vertexAttrib1fv(J.location,pt)}}}}x()}function R(){N();for(const E in n){const B=n[E];for(const C in B){const z=B[C];for(const y in z)d(z[y].object),delete z[y];delete B[C]}delete n[E]}}function P(E){if(n[E.id]===void 0)return;const B=n[E.id];for(const C in B){const z=B[C];for(const y in z)d(z[y].object),delete z[y];delete B[C]}delete n[E.id]}function L(E){for(const B in n){const C=n[B];if(C[E.id]===void 0)continue;const z=C[E.id];for(const y in z)d(z[y].object),delete z[y];delete C[E.id]}}function N(){w(),a=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function Im(i,t,e){let n;function r(c){n=c}function s(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function a(c,d,h){h!==0&&(i.drawArraysInstanced(n,c,d,h),e.update(d,n,h))}function o(c,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let f=0;for(let _=0;_<h;_++)f+=d[_];e.update(f,n,1)}function l(c,d,h,p){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],d[_],p[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,p,0,h);let _=0;for(let g=0;g<h;g++)_+=d[g]*p[g];e.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Dm(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==dn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const N=L===jr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==jn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==An&&!N)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:R,maxSamples:P}}function Nm(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Si,o=new he,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const f=h.length!==0||p||n!==0||r;return r=p,n=h.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){e=d(h,p,0)},this.setState=function(h,p,f){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,u=i.get(h);if(!r||_===null||_.length===0||s&&!m)s?d(null):c();else{const x=s?0:n,M=x*4;let S=u.clippingState||null;l.value=S,S=d(_,p,M,f);for(let R=0;R!==M;++R)S[R]=e[R];u.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,p,f,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const u=f+g*4,x=p.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<u)&&(m=new Float32Array(u));for(let M=0,S=f;M!==g;++M,S+=4)a.copy(h[M]).applyMatrix4(x,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Um(i){let t=new WeakMap;function e(a,o){return o===uo?a.mapping=lr:o===ho&&(a.mapping=cr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===uo||o===ho)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Xd(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class sl extends Du{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Qi=4,Zl=[.125,.215,.35,.446,.526,.582],Ei=20,ka=new sl,Kl=new ae;let Ba=null,za=0,Va=0,Ha=!1;const Mi=(1+Math.sqrt(5))/2,Yi=1/Mi,$l=[new $(-Mi,Yi,0),new $(Mi,Yi,0),new $(-Yi,0,Mi),new $(Yi,0,Mi),new $(0,Mi,-Yi),new $(0,Mi,Yi),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class Jl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ba,za,Va),this._renderer.xr.enabled=Ha,t.scissorTest=!1,Ss(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===lr||t.mapping===cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:jr,format:dn,colorSpace:mr,depthBuffer:!1},r=Ql(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ql(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fm(s)),this._blurMaterial=Om(s,t,e)}return r}_compileMaterial(t){const e=new Pe(this._lodPlanes[0],t);this._renderer.compile(e,ka)}_sceneToCubeUV(t,e,n,r){const o=new We(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Kl),d.toneMapping=li,d.autoClear=!1;const f=new qs({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),_=new Pe(new Kn,f);let g=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(Kl),g=!0);for(let u=0;u<6;u++){const x=u%3;x===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):x===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const M=this._cubeSize;Ss(r,x*M,u>2?M:0,M,M),d.setRenderTarget(r),g&&d.render(_,o),d.render(t,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=p,d.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===lr||t.mapping===cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Pe(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ss(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ka)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=$l[(r-s-1)%$l.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Pe(this._lodPlanes[r],c),p=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ei-1),g=s/_,m=isFinite(s)?1+Math.floor(d*g):Ei;m>Ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const u=[];let x=0;for(let L=0;L<Ei;++L){const N=L/g,w=Math.exp(-N*N/2);u.push(w),L===0?x+=w:L<m&&(x+=2*w)}for(let L=0;L<u.length;L++)u[L]=u[L]/x;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:M}=this;p.dTheta.value=_,p.mipInt.value=M-n;const S=this._sizeLods[r],R=3*S*(r>M-Qi?r-M+Qi:0),P=4*(this._cubeSize-S);Ss(e,R,P,3*S,2*S),l.setRenderTarget(e),l.render(h,ka)}}function Fm(i){const t=[],e=[],n=[];let r=i;const s=i-Qi+1+Zl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Qi?l=Zl[a-i+Qi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,p=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,_=6,g=3,m=2,u=1,x=new Float32Array(g*_*f),M=new Float32Array(m*_*f),S=new Float32Array(u*_*f);for(let P=0;P<f;P++){const L=P%3*2/3-1,N=P>2?0:-1,w=[L,N,0,L+2/3,N,0,L+2/3,N+1,0,L,N,0,L+2/3,N+1,0,L,N+1,0];x.set(w,g*_*P),M.set(p,m*_*P);const E=[P,P,P,P,P,P];S.set(E,u*_*P)}const R=new Xe;R.setAttribute("position",new ln(x,g)),R.setAttribute("uv",new ln(M,m)),R.setAttribute("faceIndex",new ln(S,u)),t.push(R),r>Qi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ql(i,t,e){const n=new Ci(i,t,e);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ss(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Om(i,t,e){const n=new Float32Array(Ei),r=new $(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:al(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function tc(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:al(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function ec(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function al(){return`

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
	`}function km(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===uo||l===ho,d=l===lr||l===cr;if(c||d){let h=t.get(o);const p=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new Jl(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||d&&f&&r(f)?(e===null&&(e=new Jl(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Bm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Dr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function zm(i,t,e,n){const r={},s=new WeakMap;function a(h){const p=h.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);for(const _ in p.morphAttributes){const g=p.morphAttributes[_];for(let m=0,u=g.length;m<u;m++)t.remove(g[m])}p.removeEventListener("dispose",a),delete r[p.id];const f=s.get(p);f&&(t.remove(f),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(h,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,e.memory.geometries++),p}function l(h){const p=h.attributes;for(const _ in p)t.update(p[_],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const _ in f){const g=f[_];for(let m=0,u=g.length;m<u;m++)t.update(g[m],i.ARRAY_BUFFER)}}function c(h){const p=[],f=h.index,_=h.attributes.position;let g=0;if(f!==null){const x=f.array;g=f.version;for(let M=0,S=x.length;M<S;M+=3){const R=x[M+0],P=x[M+1],L=x[M+2];p.push(R,P,P,L,L,R)}}else if(_!==void 0){const x=_.array;g=_.version;for(let M=0,S=x.length/3-1;M<S;M+=3){const R=M+0,P=M+1,L=M+2;p.push(R,P,P,L,L,R)}}else return;const m=new(wu(p)?Pu:Ru)(p,1);m.version=g;const u=s.get(h);u&&t.remove(u),s.set(h,m)}function d(h){const p=s.get(h);if(p){const f=h.index;f!==null&&p.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function Vm(i,t,e){let n;function r(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,f){i.drawElements(n,f,s,p*a),e.update(f,n,1)}function c(p,f,_){_!==0&&(i.drawElementsInstanced(n,f,s,p*a,_),e.update(f,n,_))}function d(p,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,p,0,_);let m=0;for(let u=0;u<_;u++)m+=f[u];e.update(m,n,1)}function h(p,f,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)c(p[u]/a,f[u],g[u]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,p,0,g,0,_);let u=0;for(let x=0;x<_;x++)u+=f[x]*g[x];e.update(u,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Hm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Gm(i,t,e){const n=new WeakMap,r=new Se;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let p=n.get(o);if(p===void 0||p.count!==h){let w=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",w)};p!==void 0&&p.texture.dispose();const f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;f===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let S=o.attributes.position.count*M,R=1;S>t.maxTextureSize&&(R=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const P=new Float32Array(S*R*4*h),L=new Tu(P,S,R,h);L.type=An,L.needsUpdate=!0;const N=M*4;for(let E=0;E<h;E++){const B=m[E],C=u[E],z=x[E],y=S*R*4*E;for(let W=0;W<B.count;W++){const H=W*N;f===!0&&(r.fromBufferAttribute(B,W),P[y+H+0]=r.x,P[y+H+1]=r.y,P[y+H+2]=r.z,P[y+H+3]=0),_===!0&&(r.fromBufferAttribute(C,W),P[y+H+4]=r.x,P[y+H+5]=r.y,P[y+H+6]=r.z,P[y+H+7]=0),g===!0&&(r.fromBufferAttribute(z,W),P[y+H+8]=r.x,P[y+H+9]=r.y,P[y+H+10]=r.z,P[y+H+11]=z.itemSize===4?r.w:1)}}p={count:h,texture:L,size:new me(S,R)},n.set(o,p),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];const _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function Wm(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,h=t.get(l,d);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Fu extends Ve{constructor(t,e,n,r,s,a,o,l,c,d=nr){if(d!==nr&&d!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===nr&&(n=Ai),n===void 0&&d===hr&&(n=ur),super(null,r,s,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ou=new Ve,nc=new Fu(1,1),ku=new Tu,Bu=new Pd,zu=new Nu,ic=[],rc=[],sc=new Float32Array(16),ac=new Float32Array(9),oc=new Float32Array(4);function _r(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=ic[r];if(s===void 0&&(s=new Float32Array(r),ic[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function oa(i,t){let e=rc[t];e===void 0&&(e=new Int32Array(t),rc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function Ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function Zm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;oc.set(n),i.uniformMatrix2fv(this.addr,!1,oc),Oe(e,n)}}function Km(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;ac.set(n),i.uniformMatrix3fv(this.addr,!1,ac),Oe(e,n)}}function $m(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;sc.set(n),i.uniformMatrix4fv(this.addr,!1,sc),Oe(e,n)}}function Jm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function ng(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function ag(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(nc.compareFunction=Mu,s=nc):s=Ou,e.setTexture2D(t||s,r)}function og(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Bu,r)}function lg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||zu,r)}function cg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||ku,r)}function ug(i){switch(i){case 5126:return Xm;case 35664:return jm;case 35665:return qm;case 35666:return Ym;case 35674:return Zm;case 35675:return Km;case 35676:return $m;case 5124:case 35670:return Jm;case 35667:case 35671:return Qm;case 35668:case 35672:return tg;case 35669:case 35673:return eg;case 5125:return ng;case 36294:return ig;case 36295:return rg;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}function hg(i,t){i.uniform1fv(this.addr,t)}function dg(i,t){const e=_r(t,this.size,2);i.uniform2fv(this.addr,e)}function fg(i,t){const e=_r(t,this.size,3);i.uniform3fv(this.addr,e)}function pg(i,t){const e=_r(t,this.size,4);i.uniform4fv(this.addr,e)}function mg(i,t){const e=_r(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gg(i,t){const e=_r(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _g(i,t){const e=_r(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function vg(i,t){i.uniform1iv(this.addr,t)}function xg(i,t){i.uniform2iv(this.addr,t)}function yg(i,t){i.uniform3iv(this.addr,t)}function bg(i,t){i.uniform4iv(this.addr,t)}function Sg(i,t){i.uniform1uiv(this.addr,t)}function Mg(i,t){i.uniform2uiv(this.addr,t)}function wg(i,t){i.uniform3uiv(this.addr,t)}function Eg(i,t){i.uniform4uiv(this.addr,t)}function Tg(i,t,e){const n=this.cache,r=t.length,s=oa(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Ou,s[a])}function Ag(i,t,e){const n=this.cache,r=t.length,s=oa(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Bu,s[a])}function Cg(i,t,e){const n=this.cache,r=t.length,s=oa(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||zu,s[a])}function Rg(i,t,e){const n=this.cache,r=t.length,s=oa(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),Oe(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||ku,s[a])}function Pg(i){switch(i){case 5126:return hg;case 35664:return dg;case 35665:return fg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return _g;case 5124:case 35670:return vg;case 35667:case 35671:return xg;case 35668:case 35672:return yg;case 35669:case 35673:return bg;case 5125:return Sg;case 36294:return Mg;case 36295:return wg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Rg}}class Lg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ug(e.type)}}class Ig{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pg(e.type)}}class Dg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function lc(i,t){i.seq.push(t),i.map[t.id]=t}function Ng(i,t,e){const n=i.name,r=n.length;for(Ga.lastIndex=0;;){const s=Ga.exec(n),a=Ga.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){lc(e,c===void 0?new Lg(o,i,t):new Ig(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new Dg(o),lc(e,h)),e=h}}}class Ws{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Ng(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function cc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Ug=37297;let Fg=0;function Og(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const uc=new he;function kg(i){fe._getMatrix(uc,fe.workingColorSpace,i);const t=`mat3( ${uc.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(i)){case sa:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function hc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Og(i.getShaderSource(t),a)}else return r}function Bg(i,t){const e=kg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function zg(i,t){let e;switch(t){case zh:e="Linear";break;case Vh:e="Reinhard";break;case Hh:e="Cineon";break;case Gh:e="ACESFilmic";break;case Xh:e="AgX";break;case jh:e="Neutral";break;case Wh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ms=new $;function Vg(){fe.getLuminanceCoefficients(Ms);const i=Ms.x.toFixed(4),t=Ms.y.toFixed(4),e=Ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function Gg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Nr(i){return i!==""}function dc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(i){return i.replace(Xg,qg)}const jg=new Map;function qg(i,t){let e=de[t];if(e===void 0){const n=jg.get(t);if(n!==void 0)e=de[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Vo(e)}const Yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pc(i){return i.replace(Yg,Zg)}function Zg(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Kg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===xh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function $g(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case lr:case cr:t="ENVMAP_TYPE_CUBE";break;case ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cr:t="ENVMAP_MODE_REFRACTION";break}return t}function Qg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case na:t="ENVMAP_BLENDING_MULTIPLY";break;case kh:t="ENVMAP_BLENDING_MIX";break;case Bh:t="ENVMAP_BLENDING_ADD";break}return t}function t_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function e_(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Kg(e),c=$g(e),d=Jg(e),h=Qg(e),p=t_(e),f=Hg(e),_=Gg(s),g=r.createProgram();let m,u,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Nr).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Nr).join(`
`),u.length>0&&(u+=`
`)):(m=[mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),u=[mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?de.tonemapping_pars_fragment:"",e.toneMapping!==li?zg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,Bg("linearToOutputTexel",e.outputColorSpace),Vg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Nr).join(`
`)),a=Vo(a),a=dc(a,e),a=fc(a,e),o=Vo(o),o=dc(o,e),o=fc(o,e),a=pc(a),o=pc(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Al?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const M=x+m+a,S=x+u+o,R=cc(r,r.VERTEX_SHADER,M),P=cc(r,r.FRAGMENT_SHADER,S);r.attachShader(g,R),r.attachShader(g,P),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function L(B){if(i.debug.checkShaderErrors){const C=r.getProgramInfoLog(g).trim(),z=r.getShaderInfoLog(R).trim(),y=r.getShaderInfoLog(P).trim();let W=!0,H=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,R,P);else{const Z=hc(r,R,"vertex"),J=hc(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+C+`
`+Z+`
`+J)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(z===""||y==="")&&(H=!1);H&&(B.diagnostics={runnable:W,programLog:C,vertexShader:{log:z,prefix:m},fragmentShader:{log:y,prefix:u}})}r.deleteShader(R),r.deleteShader(P),N=new Ws(r,g),w=Wg(r,g)}let N;this.getUniforms=function(){return N===void 0&&L(this),N};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(g,Ug)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=P,this}let n_=0;class i_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new r_(t),e.set(t,n)),n}}class r_{constructor(t){this.id=n_++,this.code=t,this.usedTimes=0}}function s_(i,t,e,n,r,s,a){const o=new Au,l=new i_,c=new Set,d=[],h=r.logarithmicDepthBuffer,p=r.vertexTextures;let f=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,E,B,C,z){const y=C.fog,W=z.geometry,H=w.isMeshStandardMaterial?C.environment:null,Z=(w.isMeshStandardMaterial?e:t).get(w.envMap||H),J=Z&&Z.mapping===ia?Z.image.height:null,Q=_[w.type];w.precision!==null&&(f=r.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const pt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,j=pt!==void 0?pt.length:0;let Y=0;W.morphAttributes.position!==void 0&&(Y=1),W.morphAttributes.normal!==void 0&&(Y=2),W.morphAttributes.color!==void 0&&(Y=3);let vt,X,q,ct;if(Q){const ue=En[Q];vt=ue.vertexShader,X=ue.fragmentShader}else vt=w.vertexShader,X=w.fragmentShader,l.update(w),q=l.getVertexShaderID(w),ct=l.getFragmentShaderID(w);const ft=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),Tt=z.isInstancedMesh===!0,zt=z.isBatchedMesh===!0,Qt=!!w.map,ee=!!w.matcap,pe=!!Z,v=!!w.aoMap,gt=!!w.lightMap,st=!!w.bumpMap,V=!!w.normalMap,O=!!w.displacementMap,K=!!w.emissiveMap,ot=!!w.metalnessMap,I=!!w.roughnessMap,b=w.anisotropy>0,G=w.clearcoat>0,rt=w.dispersion>0,nt=w.iridescence>0,at=w.sheen>0,At=w.transmission>0,St=b&&!!w.anisotropyMap,Rt=G&&!!w.clearcoatMap,ce=G&&!!w.clearcoatNormalMap,Mt=G&&!!w.clearcoatRoughnessMap,Ot=nt&&!!w.iridescenceMap,Nt=nt&&!!w.iridescenceThicknessMap,Kt=at&&!!w.sheenColorMap,kt=at&&!!w.sheenRoughnessMap,ne=!!w.specularMap,ie=!!w.specularColorMap,be=!!w.specularIntensityMap,et=At&&!!w.transmissionMap,Pt=At&&!!w.thicknessMap,mt=!!w.gradientMap,xt=!!w.alphaMap,Lt=w.alphaTest>0,Ut=!!w.alphaHash,oe=!!w.extensions;let Re=li;w.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Re=i.toneMapping);const ke={shaderID:Q,shaderType:w.type,shaderName:w.name,vertexShader:vt,fragmentShader:X,defines:w.defines,customVertexShaderID:q,customFragmentShaderID:ct,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:zt,batchingColor:zt&&z._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&z.instanceColor!==null,instancingMorph:Tt&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:mr,alphaToCoverage:!!w.alphaToCoverage,map:Qt,matcap:ee,envMap:pe,envMapMode:pe&&Z.mapping,envMapCubeUVHeight:J,aoMap:v,lightMap:gt,bumpMap:st,normalMap:V,displacementMap:p&&O,emissiveMap:K,normalMapObjectSpace:V&&w.normalMapType===Jh,normalMapTangentSpace:V&&w.normalMapType===ra,metalnessMap:ot,roughnessMap:I,anisotropy:b,anisotropyMap:St,clearcoat:G,clearcoatMap:Rt,clearcoatNormalMap:ce,clearcoatRoughnessMap:Mt,dispersion:rt,iridescence:nt,iridescenceMap:Ot,iridescenceThicknessMap:Nt,sheen:at,sheenColorMap:Kt,sheenRoughnessMap:kt,specularMap:ne,specularColorMap:ie,specularIntensityMap:be,transmission:At,transmissionMap:et,thicknessMap:Pt,gradientMap:mt,opaque:w.transparent===!1&&w.blending===er&&w.alphaToCoverage===!1,alphaMap:xt,alphaTest:Lt,alphaHash:Ut,combine:w.combine,mapUv:Qt&&g(w.map.channel),aoMapUv:v&&g(w.aoMap.channel),lightMapUv:gt&&g(w.lightMap.channel),bumpMapUv:st&&g(w.bumpMap.channel),normalMapUv:V&&g(w.normalMap.channel),displacementMapUv:O&&g(w.displacementMap.channel),emissiveMapUv:K&&g(w.emissiveMap.channel),metalnessMapUv:ot&&g(w.metalnessMap.channel),roughnessMapUv:I&&g(w.roughnessMap.channel),anisotropyMapUv:St&&g(w.anisotropyMap.channel),clearcoatMapUv:Rt&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:kt&&g(w.sheenRoughnessMap.channel),specularMapUv:ne&&g(w.specularMap.channel),specularColorMapUv:ie&&g(w.specularColorMap.channel),specularIntensityMapUv:be&&g(w.specularIntensityMap.channel),transmissionMapUv:et&&g(w.transmissionMap.channel),thicknessMapUv:Pt&&g(w.thicknessMap.channel),alphaMapUv:xt&&g(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(V||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(Qt||xt),fog:!!y,useFog:w.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:yt,skinning:z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Y,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:Qt&&w.map.isVideoTexture===!0&&fe.getTransfer(w.map.colorSpace)===Ae,decodeVideoTextureEmissive:K&&w.emissiveMap.isVideoTexture===!0&&fe.getTransfer(w.emissiveMap.colorSpace)===Ae,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Tn,flipSided:w.side===$e,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:oe&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&w.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function u(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const B in w.defines)E.push(B),E.push(w.defines[B]);return w.isRawShaderMaterial===!1&&(x(E,w),M(E,w),E.push(i.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function x(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function M(w,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),w.push(o.mask)}function S(w){const E=_[w.type];let B;if(E){const C=En[E];B=Iu.clone(C.uniforms)}else B=w.uniforms;return B}function R(w,E){let B;for(let C=0,z=d.length;C<z;C++){const y=d[C];if(y.cacheKey===E){B=y,++B.usedTimes;break}}return B===void 0&&(B=new e_(i,E,w,s),d.push(B)),B}function P(w){if(--w.usedTimes===0){const E=d.indexOf(w);d[E]=d[d.length-1],d.pop(),w.destroy()}}function L(w){l.remove(w)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:R,releaseProgram:P,releaseShaderCache:L,programs:d,dispose:N}}function a_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function o_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _c(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(h,p,f,_,g,m){let u=i[t];return u===void 0?(u={id:h.id,object:h,geometry:p,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},i[t]=u):(u.id=h.id,u.object=h,u.geometry=p,u.material=f,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=g,u.group=m),t++,u}function o(h,p,f,_,g,m){const u=a(h,p,f,_,g,m);f.transmission>0?n.push(u):f.transparent===!0?r.push(u):e.push(u)}function l(h,p,f,_,g,m){const u=a(h,p,f,_,g,m);f.transmission>0?n.unshift(u):f.transparent===!0?r.unshift(u):e.unshift(u)}function c(h,p){e.length>1&&e.sort(h||o_),n.length>1&&n.sort(p||gc),r.length>1&&r.sort(p||gc)}function d(){for(let h=t,p=i.length;h<p;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function l_(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new _c,i.set(n,[a])):r>=s.length?(a=new _c,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function c_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new ae};break;case"SpotLight":e={position:new $,direction:new $,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function u_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let h_=0;function d_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function f_(i){const t=new c_,e=u_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);const r=new $,s=new se,a=new se;function o(c){let d=0,h=0,p=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,_=0,g=0,m=0,u=0,x=0,M=0,S=0,R=0,P=0,L=0;c.sort(d_);for(let w=0,E=c.length;w<E;w++){const B=c[w],C=B.color,z=B.intensity,y=B.distance,W=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=C.r*z,h+=C.g*z,p+=C.b*z;else if(B.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(B.sh.coefficients[H],z);L++}else if(B.isDirectionalLight){const H=t.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Z=B.shadow,J=e.get(B);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,n.directionalShadow[f]=J,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=B.shadow.matrix,x++}n.directional[f]=H,f++}else if(B.isSpotLight){const H=t.get(B);H.position.setFromMatrixPosition(B.matrixWorld),H.color.copy(C).multiplyScalar(z),H.distance=y,H.coneCos=Math.cos(B.angle),H.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),H.decay=B.decay,n.spot[g]=H;const Z=B.shadow;if(B.map&&(n.spotLightMap[R]=B.map,R++,Z.updateMatrices(B),B.castShadow&&P++),n.spotLightMatrix[g]=Z.matrix,B.castShadow){const J=e.get(B);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,n.spotShadow[g]=J,n.spotShadowMap[g]=W,S++}g++}else if(B.isRectAreaLight){const H=t.get(B);H.color.copy(C).multiplyScalar(z),H.halfWidth.set(B.width*.5,0,0),H.halfHeight.set(0,B.height*.5,0),n.rectArea[m]=H,m++}else if(B.isPointLight){const H=t.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity),H.distance=B.distance,H.decay=B.decay,B.castShadow){const Z=B.shadow,J=e.get(B);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,J.shadowCameraNear=Z.camera.near,J.shadowCameraFar=Z.camera.far,n.pointShadow[_]=J,n.pointShadowMap[_]=W,n.pointShadowMatrix[_]=B.shadow.matrix,M++}n.point[_]=H,_++}else if(B.isHemisphereLight){const H=t.get(B);H.skyColor.copy(B.color).multiplyScalar(z),H.groundColor.copy(B.groundColor).multiplyScalar(z),n.hemi[u]=H,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=p;const N=n.hash;(N.directionalLength!==f||N.pointLength!==_||N.spotLength!==g||N.rectAreaLength!==m||N.hemiLength!==u||N.numDirectionalShadows!==x||N.numPointShadows!==M||N.numSpotShadows!==S||N.numSpotMaps!==R||N.numLightProbes!==L)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=S+R-P,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=L,N.directionalLength=f,N.pointLength=_,N.spotLength=g,N.rectAreaLength=m,N.hemiLength=u,N.numDirectionalShadows=x,N.numPointShadows=M,N.numSpotShadows=S,N.numSpotMaps=R,N.numLightProbes=L,n.version=h_++)}function l(c,d){let h=0,p=0,f=0,_=0,g=0;const m=d.matrixWorldInverse;for(let u=0,x=c.length;u<x;u++){const M=c[u];if(M.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(M.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const S=n.point[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function vc(i){const t=new f_(i),e=[],n=[];function r(d){c.camera=d,e.length=0,n.length=0}function s(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function p_(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new vc(i),t.set(r,[o])):s>=a.length?(o=new vc(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class m_ extends bn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class g_ extends bn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const __=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v_=`uniform sampler2D shadow_pass;
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
}`;function x_(i,t,e){let n=new rl;const r=new me,s=new me,a=new Se,o=new m_({depthPacking:$h}),l=new g_,c={},d=e.maxTextureSize,h={[Xn]:$e,[$e]:Xn,[Tn]:Tn},p=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:__,fragmentShader:v_}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const _=new Xe;_.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Pe(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hu;let u=this.type;this.render=function(P,L,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const w=i.getRenderTarget(),E=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),C=i.state;C.setBlending(oi),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const z=u!==kn&&this.type===kn,y=u===kn&&this.type!==kn;for(let W=0,H=P.length;W<H;W++){const Z=P[W],J=Z.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const Q=J.getFrameExtents();if(r.multiply(Q),s.copy(J.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Q.x),r.x=s.x*Q.x,J.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Q.y),r.y=s.y*Q.y,J.mapSize.y=s.y)),J.map===null||z===!0||y===!0){const j=this.type!==kn?{minFilter:on,magFilter:on}:{};J.map!==null&&J.map.dispose(),J.map=new Ci(r.x,r.y,j),J.map.texture.name=Z.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const pt=J.getViewportCount();for(let j=0;j<pt;j++){const Y=J.getViewport(j);a.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),C.viewport(a),J.updateMatrices(Z,j),n=J.getFrustum(),S(L,N,J.camera,Z,this.type)}J.isPointLightShadow!==!0&&this.type===kn&&x(J,N),J.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(w,E,B)};function x(P,L){const N=t.update(g);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ci(r.x,r.y)),p.uniforms.shadow_pass.value=P.map.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(L,null,N,p,g,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(L,null,N,f,g,null)}function M(P,L,N,w){let E=null;const B=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(B!==void 0)E=B;else if(E=N.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const C=E.uuid,z=L.uuid;let y=c[C];y===void 0&&(y={},c[C]=y);let W=y[z];W===void 0&&(W=E.clone(),y[z]=W,L.addEventListener("dispose",R)),E=W}if(E.visible=L.visible,E.wireframe=L.wireframe,w===kn?E.side=L.shadowSide!==null?L.shadowSide:L.side:E.side=L.shadowSide!==null?L.shadowSide:h[L.side],E.alphaMap=L.alphaMap,E.alphaTest=L.alphaTest,E.map=L.map,E.clipShadows=L.clipShadows,E.clippingPlanes=L.clippingPlanes,E.clipIntersection=L.clipIntersection,E.displacementMap=L.displacementMap,E.displacementScale=L.displacementScale,E.displacementBias=L.displacementBias,E.wireframeLinewidth=L.wireframeLinewidth,E.linewidth=L.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const C=i.properties.get(E);C.light=N}return E}function S(P,L,N,w,E){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&E===kn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const z=t.update(P),y=P.material;if(Array.isArray(y)){const W=z.groups;for(let H=0,Z=W.length;H<Z;H++){const J=W[H],Q=y[J.materialIndex];if(Q&&Q.visible){const pt=M(P,Q,w,E);P.onBeforeShadow(i,P,L,N,z,pt,J),i.renderBufferDirect(N,null,z,pt,P,J),P.onAfterShadow(i,P,L,N,z,pt,J)}}}else if(y.visible){const W=M(P,y,w,E);P.onBeforeShadow(i,P,L,N,z,W,null),i.renderBufferDirect(N,null,z,W,P,null),P.onAfterShadow(i,P,L,N,z,W,null)}}const C=P.children;for(let z=0,y=C.length;z<y;z++)S(C[z],L,N,w,E)}function R(P){P.target.removeEventListener("dispose",R);for(const N in c){const w=c[N],E=P.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}const y_={[io]:ro,[so]:lo,[ao]:co,[or]:oo,[ro]:io,[lo]:so,[co]:ao,[oo]:or};function b_(i,t){function e(){let et=!1;const Pt=new Se;let mt=null;const xt=new Se(0,0,0,0);return{setMask:function(Lt){mt!==Lt&&!et&&(i.colorMask(Lt,Lt,Lt,Lt),mt=Lt)},setLocked:function(Lt){et=Lt},setClear:function(Lt,Ut,oe,Re,ke){ke===!0&&(Lt*=Re,Ut*=Re,oe*=Re),Pt.set(Lt,Ut,oe,Re),xt.equals(Pt)===!1&&(i.clearColor(Lt,Ut,oe,Re),xt.copy(Pt))},reset:function(){et=!1,mt=null,xt.set(-1,0,0,0)}}}function n(){let et=!1,Pt=!1,mt=null,xt=null,Lt=null;return{setReversed:function(Ut){if(Pt!==Ut){const oe=t.get("EXT_clip_control");Pt?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT);const Re=Lt;Lt=null,this.setClear(Re)}Pt=Ut},getReversed:function(){return Pt},setTest:function(Ut){Ut?ft(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(Ut){mt!==Ut&&!et&&(i.depthMask(Ut),mt=Ut)},setFunc:function(Ut){if(Pt&&(Ut=y_[Ut]),xt!==Ut){switch(Ut){case io:i.depthFunc(i.NEVER);break;case ro:i.depthFunc(i.ALWAYS);break;case so:i.depthFunc(i.LESS);break;case or:i.depthFunc(i.LEQUAL);break;case ao:i.depthFunc(i.EQUAL);break;case oo:i.depthFunc(i.GEQUAL);break;case lo:i.depthFunc(i.GREATER);break;case co:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=Ut}},setLocked:function(Ut){et=Ut},setClear:function(Ut){Lt!==Ut&&(Pt&&(Ut=1-Ut),i.clearDepth(Ut),Lt=Ut)},reset:function(){et=!1,mt=null,xt=null,Lt=null,Pt=!1}}}function r(){let et=!1,Pt=null,mt=null,xt=null,Lt=null,Ut=null,oe=null,Re=null,ke=null;return{setTest:function(ue){et||(ue?ft(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(ue){Pt!==ue&&!et&&(i.stencilMask(ue),Pt=ue)},setFunc:function(ue,Je,fn){(mt!==ue||xt!==Je||Lt!==fn)&&(i.stencilFunc(ue,Je,fn),mt=ue,xt=Je,Lt=fn)},setOp:function(ue,Je,fn){(Ut!==ue||oe!==Je||Re!==fn)&&(i.stencilOp(ue,Je,fn),Ut=ue,oe=Je,Re=fn)},setLocked:function(ue){et=ue},setClear:function(ue){ke!==ue&&(i.clearStencil(ue),ke=ue)},reset:function(){et=!1,Pt=null,mt=null,xt=null,Lt=null,Ut=null,oe=null,Re=null,ke=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let d={},h={},p=new WeakMap,f=[],_=null,g=!1,m=null,u=null,x=null,M=null,S=null,R=null,P=null,L=new ae(0,0,0),N=0,w=!1,E=null,B=null,C=null,z=null,y=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(J)[1]),H=Z>=1):J.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),H=Z>=2);let Q=null,pt={};const j=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),vt=new Se().fromArray(j),X=new Se().fromArray(Y);function q(et,Pt,mt,xt){const Lt=new Uint8Array(4),Ut=i.createTexture();i.bindTexture(et,Ut),i.texParameteri(et,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(et,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let oe=0;oe<mt;oe++)et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?i.texImage3D(Pt,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,Lt):i.texImage2D(Pt+oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Lt);return Ut}const ct={};ct[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ft(i.DEPTH_TEST),a.setFunc(or),st(!1),V(_l),ft(i.CULL_FACE),v(oi);function ft(et){d[et]!==!0&&(i.enable(et),d[et]=!0)}function yt(et){d[et]!==!1&&(i.disable(et),d[et]=!1)}function Tt(et,Pt){return h[et]!==Pt?(i.bindFramebuffer(et,Pt),h[et]=Pt,et===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Pt),et===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Pt),!0):!1}function zt(et,Pt){let mt=f,xt=!1;if(et){mt=p.get(Pt),mt===void 0&&(mt=[],p.set(Pt,mt));const Lt=et.textures;if(mt.length!==Lt.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let Ut=0,oe=Lt.length;Ut<oe;Ut++)mt[Ut]=i.COLOR_ATTACHMENT0+Ut;mt.length=Lt.length,xt=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,xt=!0);xt&&i.drawBuffers(mt)}function Qt(et){return _!==et?(i.useProgram(et),_=et,!0):!1}const ee={[wi]:i.FUNC_ADD,[bh]:i.FUNC_SUBTRACT,[Sh]:i.FUNC_REVERSE_SUBTRACT};ee[Mh]=i.MIN,ee[wh]=i.MAX;const pe={[Eh]:i.ZERO,[Th]:i.ONE,[Ah]:i.SRC_COLOR,[eo]:i.SRC_ALPHA,[Dh]:i.SRC_ALPHA_SATURATE,[Lh]:i.DST_COLOR,[Rh]:i.DST_ALPHA,[Ch]:i.ONE_MINUS_SRC_COLOR,[no]:i.ONE_MINUS_SRC_ALPHA,[Ih]:i.ONE_MINUS_DST_COLOR,[Ph]:i.ONE_MINUS_DST_ALPHA,[Nh]:i.CONSTANT_COLOR,[Uh]:i.ONE_MINUS_CONSTANT_COLOR,[Fh]:i.CONSTANT_ALPHA,[Oh]:i.ONE_MINUS_CONSTANT_ALPHA};function v(et,Pt,mt,xt,Lt,Ut,oe,Re,ke,ue){if(et===oi){g===!0&&(yt(i.BLEND),g=!1);return}if(g===!1&&(ft(i.BLEND),g=!0),et!==yh){if(et!==m||ue!==w){if((u!==wi||S!==wi)&&(i.blendEquation(i.FUNC_ADD),u=wi,S=wi),ue)switch(et){case er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vl:i.blendFunc(i.ONE,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",et);break}else switch(et){case er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",et);break}x=null,M=null,R=null,P=null,L.set(0,0,0),N=0,m=et,w=ue}return}Lt=Lt||Pt,Ut=Ut||mt,oe=oe||xt,(Pt!==u||Lt!==S)&&(i.blendEquationSeparate(ee[Pt],ee[Lt]),u=Pt,S=Lt),(mt!==x||xt!==M||Ut!==R||oe!==P)&&(i.blendFuncSeparate(pe[mt],pe[xt],pe[Ut],pe[oe]),x=mt,M=xt,R=Ut,P=oe),(Re.equals(L)===!1||ke!==N)&&(i.blendColor(Re.r,Re.g,Re.b,ke),L.copy(Re),N=ke),m=et,w=!1}function gt(et,Pt){et.side===Tn?yt(i.CULL_FACE):ft(i.CULL_FACE);let mt=et.side===$e;Pt&&(mt=!mt),st(mt),et.blending===er&&et.transparent===!1?v(oi):v(et.blending,et.blendEquation,et.blendSrc,et.blendDst,et.blendEquationAlpha,et.blendSrcAlpha,et.blendDstAlpha,et.blendColor,et.blendAlpha,et.premultipliedAlpha),a.setFunc(et.depthFunc),a.setTest(et.depthTest),a.setMask(et.depthWrite),s.setMask(et.colorWrite);const xt=et.stencilWrite;o.setTest(xt),xt&&(o.setMask(et.stencilWriteMask),o.setFunc(et.stencilFunc,et.stencilRef,et.stencilFuncMask),o.setOp(et.stencilFail,et.stencilZFail,et.stencilZPass)),K(et.polygonOffset,et.polygonOffsetFactor,et.polygonOffsetUnits),et.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(et){E!==et&&(et?i.frontFace(i.CW):i.frontFace(i.CCW),E=et)}function V(et){et!==_h?(ft(i.CULL_FACE),et!==B&&(et===_l?i.cullFace(i.BACK):et===vh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),B=et}function O(et){et!==C&&(H&&i.lineWidth(et),C=et)}function K(et,Pt,mt){et?(ft(i.POLYGON_OFFSET_FILL),(z!==Pt||y!==mt)&&(i.polygonOffset(Pt,mt),z=Pt,y=mt)):yt(i.POLYGON_OFFSET_FILL)}function ot(et){et?ft(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function I(et){et===void 0&&(et=i.TEXTURE0+W-1),Q!==et&&(i.activeTexture(et),Q=et)}function b(et,Pt,mt){mt===void 0&&(Q===null?mt=i.TEXTURE0+W-1:mt=Q);let xt=pt[mt];xt===void 0&&(xt={type:void 0,texture:void 0},pt[mt]=xt),(xt.type!==et||xt.texture!==Pt)&&(Q!==mt&&(i.activeTexture(mt),Q=mt),i.bindTexture(et,Pt||ct[et]),xt.type=et,xt.texture=Pt)}function G(){const et=pt[Q];et!==void 0&&et.type!==void 0&&(i.bindTexture(et.type,null),et.type=void 0,et.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function at(){try{i.texSubImage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function St(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Rt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function ce(){try{i.texStorage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Mt(){try{i.texStorage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Ot(){try{i.texImage2D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Kt(et){vt.equals(et)===!1&&(i.scissor(et.x,et.y,et.z,et.w),vt.copy(et))}function kt(et){X.equals(et)===!1&&(i.viewport(et.x,et.y,et.z,et.w),X.copy(et))}function ne(et,Pt){let mt=c.get(Pt);mt===void 0&&(mt=new WeakMap,c.set(Pt,mt));let xt=mt.get(et);xt===void 0&&(xt=i.getUniformBlockIndex(Pt,et.name),mt.set(et,xt))}function ie(et,Pt){const xt=c.get(Pt).get(et);l.get(Pt)!==xt&&(i.uniformBlockBinding(Pt,xt,et.__bindingPointIndex),l.set(Pt,xt))}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Q=null,pt={},h={},p=new WeakMap,f=[],_=null,g=!1,m=null,u=null,x=null,M=null,S=null,R=null,P=null,L=new ae(0,0,0),N=0,w=!1,E=null,B=null,C=null,z=null,y=null,vt.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ft,disable:yt,bindFramebuffer:Tt,drawBuffers:zt,useProgram:Qt,setBlending:v,setMaterial:gt,setFlipSided:st,setCullFace:V,setLineWidth:O,setPolygonOffset:K,setScissorTest:ot,activeTexture:I,bindTexture:b,unbindTexture:G,compressedTexImage2D:rt,compressedTexImage3D:nt,texImage2D:Ot,texImage3D:Nt,updateUBOMapping:ne,uniformBlockBinding:ie,texStorage2D:ce,texStorage3D:Mt,texSubImage2D:at,texSubImage3D:At,compressedTexSubImage2D:St,compressedTexSubImage3D:Rt,scissor:Kt,viewport:kt,reset:be}}function xc(i,t,e,n){const r=S_(n);switch(e){case gu:return i*t;case vu:return i*t;case xu:return i*t*2;case yu:return i*t/r.components*r.byteLength;case tl:return i*t/r.components*r.byteLength;case bu:return i*t*2/r.components*r.byteLength;case el:return i*t*2/r.components*r.byteLength;case _u:return i*t*3/r.components*r.byteLength;case dn:return i*t*4/r.components*r.byteLength;case nl:return i*t*4/r.components*r.byteLength;case Bs:case zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vs:case Hs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mo:case _o:return Math.max(i,16)*Math.max(t,8)/4;case po:case go:return Math.max(i,8)*Math.max(t,8)/2;case vo:case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case To:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Co:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Po:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Io:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Do:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case No:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Gs:case Uo:case Fo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Su:case Oo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ko:case Bo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function S_(i){switch(i){case jn:case fu:return{byteLength:1,components:1};case Vr:case pu:case jr:return{byteLength:2,components:1};case Jo:case Qo:return{byteLength:2,components:4};case Ai:case $o:case An:return{byteLength:4,components:1};case mu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function M_(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,d=new WeakMap;let h;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,b){return f?new OffscreenCanvas(I,b):Hr("canvas")}function g(I,b,G){let rt=1;const nt=ot(I);if((nt.width>G||nt.height>G)&&(rt=G/Math.max(nt.width,nt.height)),rt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const at=Math.floor(rt*nt.width),At=Math.floor(rt*nt.height);h===void 0&&(h=_(at,At));const St=b?_(at,At):h;return St.width=at,St.height=At,St.getContext("2d").drawImage(I,0,0,at,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+at+"x"+At+")."),St}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),I;return I}function m(I){return I.generateMipmaps}function u(I){i.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(I,b,G,rt,nt=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let at=b;if(b===i.RED&&(G===i.FLOAT&&(at=i.R32F),G===i.HALF_FLOAT&&(at=i.R16F),G===i.UNSIGNED_BYTE&&(at=i.R8)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(at=i.R8UI),G===i.UNSIGNED_SHORT&&(at=i.R16UI),G===i.UNSIGNED_INT&&(at=i.R32UI),G===i.BYTE&&(at=i.R8I),G===i.SHORT&&(at=i.R16I),G===i.INT&&(at=i.R32I)),b===i.RG&&(G===i.FLOAT&&(at=i.RG32F),G===i.HALF_FLOAT&&(at=i.RG16F),G===i.UNSIGNED_BYTE&&(at=i.RG8)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(at=i.RG8UI),G===i.UNSIGNED_SHORT&&(at=i.RG16UI),G===i.UNSIGNED_INT&&(at=i.RG32UI),G===i.BYTE&&(at=i.RG8I),G===i.SHORT&&(at=i.RG16I),G===i.INT&&(at=i.RG32I)),b===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(at=i.RGB8UI),G===i.UNSIGNED_SHORT&&(at=i.RGB16UI),G===i.UNSIGNED_INT&&(at=i.RGB32UI),G===i.BYTE&&(at=i.RGB8I),G===i.SHORT&&(at=i.RGB16I),G===i.INT&&(at=i.RGB32I)),b===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),G===i.UNSIGNED_INT&&(at=i.RGBA32UI),G===i.BYTE&&(at=i.RGBA8I),G===i.SHORT&&(at=i.RGBA16I),G===i.INT&&(at=i.RGBA32I)),b===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),b===i.RGBA){const At=nt?sa:fe.getTransfer(rt);G===i.FLOAT&&(at=i.RGBA32F),G===i.HALF_FLOAT&&(at=i.RGBA16F),G===i.UNSIGNED_BYTE&&(at=At===Ae?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function S(I,b){let G;return I?b===null||b===Ai||b===ur?G=i.DEPTH24_STENCIL8:b===An?G=i.DEPTH32F_STENCIL8:b===Vr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ai||b===ur?G=i.DEPTH_COMPONENT24:b===An?G=i.DEPTH_COMPONENT32F:b===Vr&&(G=i.DEPTH_COMPONENT16),G}function R(I,b){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==on&&I.minFilter!==an?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function P(I){const b=I.target;b.removeEventListener("dispose",P),N(b),b.isVideoTexture&&d.delete(b)}function L(I){const b=I.target;b.removeEventListener("dispose",L),E(b)}function N(I){const b=n.get(I);if(b.__webglInit===void 0)return;const G=I.source,rt=p.get(G);if(rt){const nt=rt[b.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&w(I),Object.keys(rt).length===0&&p.delete(G)}n.remove(I)}function w(I){const b=n.get(I);i.deleteTexture(b.__webglTexture);const G=I.source,rt=p.get(G);delete rt[b.__cacheKey],a.memory.textures--}function E(I){const b=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(b.__webglFramebuffer[rt]))for(let nt=0;nt<b.__webglFramebuffer[rt].length;nt++)i.deleteFramebuffer(b.__webglFramebuffer[rt][nt]);else i.deleteFramebuffer(b.__webglFramebuffer[rt]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[rt])}else{if(Array.isArray(b.__webglFramebuffer))for(let rt=0;rt<b.__webglFramebuffer.length;rt++)i.deleteFramebuffer(b.__webglFramebuffer[rt]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let rt=0;rt<b.__webglColorRenderbuffer.length;rt++)b.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[rt]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=I.textures;for(let rt=0,nt=G.length;rt<nt;rt++){const at=n.get(G[rt]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),a.memory.textures--),n.remove(G[rt])}n.remove(I)}let B=0;function C(){B=0}function z(){const I=B;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),B+=1,I}function y(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function W(I,b){const G=n.get(I);if(I.isVideoTexture&&O(I),I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){const rt=I.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(G,I,b);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function H(I,b){const G=n.get(I);if(I.version>0&&G.__version!==I.version){X(G,I,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function Z(I,b){const G=n.get(I);if(I.version>0&&G.__version!==I.version){X(G,I,b);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function J(I,b){const G=n.get(I);if(I.version>0&&G.__version!==I.version){q(G,I,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}const Q={[Vn]:i.REPEAT,[yn]:i.CLAMP_TO_EDGE,[fo]:i.MIRRORED_REPEAT},pt={[on]:i.NEAREST,[Yh]:i.NEAREST_MIPMAP_NEAREST,[is]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[ga]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},j={[Qh]:i.NEVER,[sd]:i.ALWAYS,[td]:i.LESS,[Mu]:i.LEQUAL,[ed]:i.EQUAL,[rd]:i.GEQUAL,[nd]:i.GREATER,[id]:i.NOTEQUAL};function Y(I,b){if(b.type===An&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===an||b.magFilter===ga||b.magFilter===is||b.magFilter===Hn||b.minFilter===an||b.minFilter===ga||b.minFilter===is||b.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Q[b.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Q[b.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Q[b.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,pt[b.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,pt[b.minFilter]),b.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,j[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===on||b.minFilter!==is&&b.minFilter!==Hn||b.type===An&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function vt(I,b){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",P));const rt=b.source;let nt=p.get(rt);nt===void 0&&(nt={},p.set(rt,nt));const at=y(b);if(at!==I.__cacheKey){nt[at]===void 0&&(nt[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),nt[at].usedTimes++;const At=nt[I.__cacheKey];At!==void 0&&(nt[I.__cacheKey].usedTimes--,At.usedTimes===0&&w(b)),I.__cacheKey=at,I.__webglTexture=nt[at].texture}return G}function X(I,b,G){let rt=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(rt=i.TEXTURE_3D);const nt=vt(I,b),at=b.source;e.bindTexture(rt,I.__webglTexture,i.TEXTURE0+G);const At=n.get(at);if(at.version!==At.__version||nt===!0){e.activeTexture(i.TEXTURE0+G);const St=fe.getPrimaries(fe.workingColorSpace),Rt=b.colorSpace===ai?null:fe.getPrimaries(b.colorSpace),ce=b.colorSpace===ai||St===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let Mt=g(b.image,!1,r.maxTextureSize);Mt=K(b,Mt);const Ot=s.convert(b.format,b.colorSpace),Nt=s.convert(b.type);let Kt=M(b.internalFormat,Ot,Nt,b.colorSpace,b.isVideoTexture);Y(rt,b);let kt;const ne=b.mipmaps,ie=b.isVideoTexture!==!0,be=At.__version===void 0||nt===!0,et=at.dataReady,Pt=R(b,Mt);if(b.isDepthTexture)Kt=S(b.format===hr,b.type),be&&(ie?e.texStorage2D(i.TEXTURE_2D,1,Kt,Mt.width,Mt.height):e.texImage2D(i.TEXTURE_2D,0,Kt,Mt.width,Mt.height,0,Ot,Nt,null));else if(b.isDataTexture)if(ne.length>0){ie&&be&&e.texStorage2D(i.TEXTURE_2D,Pt,Kt,ne[0].width,ne[0].height);for(let mt=0,xt=ne.length;mt<xt;mt++)kt=ne[mt],ie?et&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,kt.width,kt.height,Ot,Nt,kt.data):e.texImage2D(i.TEXTURE_2D,mt,Kt,kt.width,kt.height,0,Ot,Nt,kt.data);b.generateMipmaps=!1}else ie?(be&&e.texStorage2D(i.TEXTURE_2D,Pt,Kt,Mt.width,Mt.height),et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt.width,Mt.height,Ot,Nt,Mt.data)):e.texImage2D(i.TEXTURE_2D,0,Kt,Mt.width,Mt.height,0,Ot,Nt,Mt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ie&&be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Kt,ne[0].width,ne[0].height,Mt.depth);for(let mt=0,xt=ne.length;mt<xt;mt++)if(kt=ne[mt],b.format!==dn)if(Ot!==null)if(ie){if(et)if(b.layerUpdates.size>0){const Lt=xc(kt.width,kt.height,b.format,b.type);for(const Ut of b.layerUpdates){const oe=kt.data.subarray(Ut*Lt/kt.data.BYTES_PER_ELEMENT,(Ut+1)*Lt/kt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,Ut,kt.width,kt.height,1,Ot,oe)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,kt.width,kt.height,Mt.depth,Ot,kt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,Kt,kt.width,kt.height,Mt.depth,0,kt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?et&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,kt.width,kt.height,Mt.depth,Ot,Nt,kt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,Kt,kt.width,kt.height,Mt.depth,0,Ot,Nt,kt.data)}else{ie&&be&&e.texStorage2D(i.TEXTURE_2D,Pt,Kt,ne[0].width,ne[0].height);for(let mt=0,xt=ne.length;mt<xt;mt++)kt=ne[mt],b.format!==dn?Ot!==null?ie?et&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,kt.width,kt.height,Ot,kt.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,Kt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?et&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,kt.width,kt.height,Ot,Nt,kt.data):e.texImage2D(i.TEXTURE_2D,mt,Kt,kt.width,kt.height,0,Ot,Nt,kt.data)}else if(b.isDataArrayTexture)if(ie){if(be&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Kt,Mt.width,Mt.height,Mt.depth),et)if(b.layerUpdates.size>0){const mt=xc(Mt.width,Mt.height,b.format,b.type);for(const xt of b.layerUpdates){const Lt=Mt.data.subarray(xt*mt/Mt.data.BYTES_PER_ELEMENT,(xt+1)*mt/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xt,Mt.width,Mt.height,1,Ot,Nt,Lt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ot,Nt,Mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Kt,Mt.width,Mt.height,Mt.depth,0,Ot,Nt,Mt.data);else if(b.isData3DTexture)ie?(be&&e.texStorage3D(i.TEXTURE_3D,Pt,Kt,Mt.width,Mt.height,Mt.depth),et&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ot,Nt,Mt.data)):e.texImage3D(i.TEXTURE_3D,0,Kt,Mt.width,Mt.height,Mt.depth,0,Ot,Nt,Mt.data);else if(b.isFramebufferTexture){if(be)if(ie)e.texStorage2D(i.TEXTURE_2D,Pt,Kt,Mt.width,Mt.height);else{let mt=Mt.width,xt=Mt.height;for(let Lt=0;Lt<Pt;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,Kt,mt,xt,0,Ot,Nt,null),mt>>=1,xt>>=1}}else if(ne.length>0){if(ie&&be){const mt=ot(ne[0]);e.texStorage2D(i.TEXTURE_2D,Pt,Kt,mt.width,mt.height)}for(let mt=0,xt=ne.length;mt<xt;mt++)kt=ne[mt],ie?et&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Ot,Nt,kt):e.texImage2D(i.TEXTURE_2D,mt,Kt,Ot,Nt,kt);b.generateMipmaps=!1}else if(ie){if(be){const mt=ot(Mt);e.texStorage2D(i.TEXTURE_2D,Pt,Kt,mt.width,mt.height)}et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ot,Nt,Mt)}else e.texImage2D(i.TEXTURE_2D,0,Kt,Ot,Nt,Mt);m(b)&&u(rt),At.__version=at.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function q(I,b,G){if(b.image.length!==6)return;const rt=vt(I,b),nt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+G);const at=n.get(nt);if(nt.version!==at.__version||rt===!0){e.activeTexture(i.TEXTURE0+G);const At=fe.getPrimaries(fe.workingColorSpace),St=b.colorSpace===ai?null:fe.getPrimaries(b.colorSpace),Rt=b.colorSpace===ai||At===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const ce=b.isCompressedTexture||b.image[0].isCompressedTexture,Mt=b.image[0]&&b.image[0].isDataTexture,Ot=[];for(let xt=0;xt<6;xt++)!ce&&!Mt?Ot[xt]=g(b.image[xt],!0,r.maxCubemapSize):Ot[xt]=Mt?b.image[xt].image:b.image[xt],Ot[xt]=K(b,Ot[xt]);const Nt=Ot[0],Kt=s.convert(b.format,b.colorSpace),kt=s.convert(b.type),ne=M(b.internalFormat,Kt,kt,b.colorSpace),ie=b.isVideoTexture!==!0,be=at.__version===void 0||rt===!0,et=nt.dataReady;let Pt=R(b,Nt);Y(i.TEXTURE_CUBE_MAP,b);let mt;if(ce){ie&&be&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,ne,Nt.width,Nt.height);for(let xt=0;xt<6;xt++){mt=Ot[xt].mipmaps;for(let Lt=0;Lt<mt.length;Lt++){const Ut=mt[Lt];b.format!==dn?Kt!==null?ie?et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt,0,0,Ut.width,Ut.height,Kt,Ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt,ne,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt,0,0,Ut.width,Ut.height,Kt,kt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt,ne,Ut.width,Ut.height,0,Kt,kt,Ut.data)}}}else{if(mt=b.mipmaps,ie&&be){mt.length>0&&Pt++;const xt=ot(Ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,ne,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Mt){ie?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ot[xt].width,Ot[xt].height,Kt,kt,Ot[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ne,Ot[xt].width,Ot[xt].height,0,Kt,kt,Ot[xt].data);for(let Lt=0;Lt<mt.length;Lt++){const oe=mt[Lt].image[xt].image;ie?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt+1,0,0,oe.width,oe.height,Kt,kt,oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt+1,ne,oe.width,oe.height,0,Kt,kt,oe.data)}}else{ie?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Kt,kt,Ot[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ne,Kt,kt,Ot[xt]);for(let Lt=0;Lt<mt.length;Lt++){const Ut=mt[Lt];ie?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt+1,0,0,Kt,kt,Ut.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Lt+1,ne,Kt,kt,Ut.image[xt])}}}m(b)&&u(i.TEXTURE_CUBE_MAP),at.__version=nt.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function ct(I,b,G,rt,nt,at){const At=s.convert(G.format,G.colorSpace),St=s.convert(G.type),Rt=M(G.internalFormat,At,St,G.colorSpace),ce=n.get(b),Mt=n.get(G);if(Mt.__renderTarget=b,!ce.__hasExternalTextures){const Ot=Math.max(1,b.width>>at),Nt=Math.max(1,b.height>>at);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,at,Rt,Ot,Nt,b.depth,0,At,St,null):e.texImage2D(nt,at,Rt,Ot,Nt,0,At,St,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),V(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,nt,Mt.__webglTexture,0,st(b)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,nt,Mt.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(I,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,I),b.depthBuffer){const rt=b.depthTexture,nt=rt&&rt.isDepthTexture?rt.type:null,at=S(b.stencilBuffer,nt),At=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=st(b);V(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St,at,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,St,at,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,at,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,I)}else{const rt=b.textures;for(let nt=0;nt<rt.length;nt++){const at=rt[nt],At=s.convert(at.format,at.colorSpace),St=s.convert(at.type),Rt=M(at.internalFormat,At,St,at.colorSpace),ce=st(b);G&&V(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,Rt,b.width,b.height):V(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,Rt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=n.get(b.depthTexture);rt.__renderTarget=b,(!rt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W(b.depthTexture,0);const nt=rt.__webglTexture,at=st(b);if(b.depthTexture.format===nr)V(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(b.depthTexture.format===hr)V(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Tt(I){const b=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const rt=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),rt){const nt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,rt.removeEventListener("dispose",nt)};rt.addEventListener("dispose",nt),b.__depthDisposeCallback=nt}b.__boundDepthTexture=rt}if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");yt(b.__webglFramebuffer,I)}else if(G){b.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[rt]),b.__webglDepthbuffer[rt]===void 0)b.__webglDepthbuffer[rt]=i.createRenderbuffer(),ft(b.__webglDepthbuffer[rt],I,!1);else{const nt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=b.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,at)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ft(b.__webglDepthbuffer,I,!1);else{const rt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(I,b,G){const rt=n.get(I);b!==void 0&&ct(rt.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Tt(I)}function Qt(I){const b=I.texture,G=n.get(I),rt=n.get(b);I.addEventListener("dispose",L);const nt=I.textures,at=I.isWebGLCubeRenderTarget===!0,At=nt.length>1;if(At||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=b.version,a.memory.textures++),at){G.__webglFramebuffer=[];for(let St=0;St<6;St++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[St]=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)G.__webglFramebuffer[St][Rt]=i.createFramebuffer()}else G.__webglFramebuffer[St]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let St=0;St<b.mipmaps.length;St++)G.__webglFramebuffer[St]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(At)for(let St=0,Rt=nt.length;St<Rt;St++){const ce=n.get(nt[St]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&V(I)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let St=0;St<nt.length;St++){const Rt=nt[St];G.__webglColorRenderbuffer[St]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[St]);const ce=s.convert(Rt.format,Rt.colorSpace),Mt=s.convert(Rt.type),Ot=M(Rt.internalFormat,ce,Mt,Rt.colorSpace,I.isXRRenderTarget===!0),Nt=st(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,Ot,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,G.__webglColorRenderbuffer[St])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(G.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),Y(i.TEXTURE_CUBE_MAP,b);for(let St=0;St<6;St++)if(b.mipmaps&&b.mipmaps.length>0)for(let Rt=0;Rt<b.mipmaps.length;Rt++)ct(G.__webglFramebuffer[St][Rt],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt);else ct(G.__webglFramebuffer[St],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);m(b)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let St=0,Rt=nt.length;St<Rt;St++){const ce=nt[St],Mt=n.get(ce);e.bindTexture(i.TEXTURE_2D,Mt.__webglTexture),Y(i.TEXTURE_2D,ce),ct(G.__webglFramebuffer,I,ce,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,0),m(ce)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let St=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(St=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,rt.__webglTexture),Y(St,b),b.mipmaps&&b.mipmaps.length>0)for(let Rt=0;Rt<b.mipmaps.length;Rt++)ct(G.__webglFramebuffer[Rt],I,b,i.COLOR_ATTACHMENT0,St,Rt);else ct(G.__webglFramebuffer,I,b,i.COLOR_ATTACHMENT0,St,0);m(b)&&u(St),e.unbindTexture()}I.depthBuffer&&Tt(I)}function ee(I){const b=I.textures;for(let G=0,rt=b.length;G<rt;G++){const nt=b[G];if(m(nt)){const at=x(I),At=n.get(nt).__webglTexture;e.bindTexture(at,At),u(at),e.unbindTexture()}}}const pe=[],v=[];function gt(I){if(I.samples>0){if(V(I)===!1){const b=I.textures,G=I.width,rt=I.height;let nt=i.COLOR_BUFFER_BIT;const at=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(I),St=b.length>1;if(St)for(let Rt=0;Rt<b.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Rt=0;Rt<b.length;Rt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),St){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Rt]);const ce=n.get(b[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,G,rt,0,0,G,rt,nt,i.NEAREST),l===!0&&(pe.length=0,v.length=0,pe.push(i.COLOR_ATTACHMENT0+Rt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(pe.push(at),v.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,v)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),St)for(let Rt=0;Rt<b.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,At.__webglColorRenderbuffer[Rt]);const ce=n.get(b[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,ce,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const b=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function st(I){return Math.min(r.maxSamples,I.samples)}function V(I){const b=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function O(I){const b=a.render.frame;d.get(I)!==b&&(d.set(I,b),I.update())}function K(I,b){const G=I.colorSpace,rt=I.format,nt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==mr&&G!==ai&&(fe.getTransfer(G)===Ae?(rt!==dn||nt!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function ot(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=C,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=J,this.rebindTextures=zt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=V}function w_(i,t){function e(n,r=ai){let s;const a=fe.getTransfer(r);if(n===jn)return i.UNSIGNED_BYTE;if(n===Jo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fu)return i.BYTE;if(n===pu)return i.SHORT;if(n===Vr)return i.UNSIGNED_SHORT;if(n===$o)return i.INT;if(n===Ai)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===jr)return i.HALF_FLOAT;if(n===gu)return i.ALPHA;if(n===_u)return i.RGB;if(n===dn)return i.RGBA;if(n===vu)return i.LUMINANCE;if(n===xu)return i.LUMINANCE_ALPHA;if(n===nr)return i.DEPTH_COMPONENT;if(n===hr)return i.DEPTH_STENCIL;if(n===yu)return i.RED;if(n===tl)return i.RED_INTEGER;if(n===bu)return i.RG;if(n===el)return i.RG_INTEGER;if(n===nl)return i.RGBA_INTEGER;if(n===Bs||n===zs||n===Vs||n===Hs)if(a===Ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Bs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Bs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===po||n===mo||n===go||n===_o)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===po)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===go)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_o)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vo||n===xo||n===yo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===vo||n===xo)return a===Ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===yo)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bo||n===So||n===Mo||n===wo||n===Eo||n===To||n===Ao||n===Co||n===Ro||n===Po||n===Lo||n===Io||n===Do||n===No)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===bo)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===So)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mo)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wo)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eo)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===To)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ao)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Co)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ro)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Po)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lo)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Io)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Do)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===No)return a===Ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gs||n===Uo||n===Fo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Gs)return a===Ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Su||n===Oo||n===ko||n===Bo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Gs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Oo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ko)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class E_ extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ti extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T_={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),u=this._getHandJoint(c,g);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=d.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&p>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(T_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ti;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const A_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C_=`
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

}`;class R_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Ve,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new qn({vertexShader:A_,fragmentShader:C_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new qr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class P_ extends gr{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,p=null,f=null,_=null;const g=new R_,m=e.getContextAttributes();let u=null,x=null;const M=[],S=[],R=new me;let P=null;const L=new We;L.viewport=new Se;const N=new We;N.viewport=new Se;const w=[L,N],E=new E_;let B=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let q=M[X];return q===void 0&&(q=new Wa,M[X]=q),q.getTargetRaySpace()},this.getControllerGrip=function(X){let q=M[X];return q===void 0&&(q=new Wa,M[X]=q),q.getGripSpace()},this.getHand=function(X){let q=M[X];return q===void 0&&(q=new Wa,M[X]=q),q.getHandSpace()};function z(X){const q=S.indexOf(X.inputSource);if(q===-1)return;const ct=M[q];ct!==void 0&&(ct.update(X.inputSource,X.frame,c||a),ct.dispatchEvent({type:X.type,data:X.inputSource}))}function y(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",y),r.removeEventListener("inputsourceschange",W);for(let X=0;X<M.length;X++){const q=S[X];q!==null&&(S[X]=null,M[X].disconnect(q))}B=null,C=null,g.reset(),t.setRenderTarget(u),f=null,p=null,h=null,r=null,x=null,vt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(u=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",y),r.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(R),r.renderState.layers===void 0){const q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,q),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ci(f.framebufferWidth,f.framebufferHeight,{format:dn,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let q=null,ct=null,ft=null;m.depth&&(ft=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=m.stencil?hr:nr,ct=m.stencil?ur:Ai);const yt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};h=new XRWebGLBinding(r,e),p=h.createProjectionLayer(yt),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),x=new Ci(p.textureWidth,p.textureHeight,{format:dn,type:jn,depthTexture:new Fu(p.textureWidth,p.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),vt.setContext(r),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(X){for(let q=0;q<X.removed.length;q++){const ct=X.removed[q],ft=S.indexOf(ct);ft>=0&&(S[ft]=null,M[ft].disconnect(ct))}for(let q=0;q<X.added.length;q++){const ct=X.added[q];let ft=S.indexOf(ct);if(ft===-1){for(let Tt=0;Tt<M.length;Tt++)if(Tt>=S.length){S.push(ct),ft=Tt;break}else if(S[Tt]===null){S[Tt]=ct,ft=Tt;break}if(ft===-1)break}const yt=M[ft];yt&&yt.connect(ct)}}const H=new $,Z=new $;function J(X,q,ct){H.setFromMatrixPosition(q.matrixWorld),Z.setFromMatrixPosition(ct.matrixWorld);const ft=H.distanceTo(Z),yt=q.projectionMatrix.elements,Tt=ct.projectionMatrix.elements,zt=yt[14]/(yt[10]-1),Qt=yt[14]/(yt[10]+1),ee=(yt[9]+1)/yt[5],pe=(yt[9]-1)/yt[5],v=(yt[8]-1)/yt[0],gt=(Tt[8]+1)/Tt[0],st=zt*v,V=zt*gt,O=ft/(-v+gt),K=O*-v;if(q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(K),X.translateZ(O),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),yt[10]===-1)X.projectionMatrix.copy(q.projectionMatrix),X.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const ot=zt+O,I=Qt+O,b=st-K,G=V+(ft-K),rt=ee*Qt/I*ot,nt=pe*Qt/I*ot;X.projectionMatrix.makePerspective(b,G,rt,nt,ot,I),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Q(X,q){q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let q=X.near,ct=X.far;g.texture!==null&&(g.depthNear>0&&(q=g.depthNear),g.depthFar>0&&(ct=g.depthFar)),E.near=N.near=L.near=q,E.far=N.far=L.far=ct,(B!==E.near||C!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),B=E.near,C=E.far),L.layers.mask=X.layers.mask|2,N.layers.mask=X.layers.mask|4,E.layers.mask=L.layers.mask|N.layers.mask;const ft=X.parent,yt=E.cameras;Q(E,ft);for(let Tt=0;Tt<yt.length;Tt++)Q(yt[Tt],ft);yt.length===2?J(E,L,N):E.projectionMatrix.copy(L.projectionMatrix),pt(X,E,ft)};function pt(X,q,ct){ct===null?X.matrix.copy(q.matrixWorld):(X.matrix.copy(ct.matrixWorld),X.matrix.invert(),X.matrix.multiply(q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(q.projectionMatrix),X.projectionMatrixInverse.copy(q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=dr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(X){l=X,p!==null&&(p.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(E)};let j=null;function Y(X,q){if(d=q.getViewerPose(c||a),_=q,d!==null){const ct=d.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let ft=!1;ct.length!==E.cameras.length&&(E.cameras.length=0,ft=!0);for(let Tt=0;Tt<ct.length;Tt++){const zt=ct[Tt];let Qt=null;if(f!==null)Qt=f.getViewport(zt);else{const pe=h.getViewSubImage(p,zt);Qt=pe.viewport,Tt===0&&(t.setRenderTargetTextures(x,pe.colorTexture,p.ignoreDepthValues?void 0:pe.depthStencilTexture),t.setRenderTarget(x))}let ee=w[Tt];ee===void 0&&(ee=new We,ee.layers.enable(Tt),ee.viewport=new Se,w[Tt]=ee),ee.matrix.fromArray(zt.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(zt.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Tt===0&&(E.matrix.copy(ee.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ft===!0&&E.cameras.push(ee)}const yt=r.enabledFeatures;if(yt&&yt.includes("depth-sensing")){const Tt=h.getDepthInformation(ct[0]);Tt&&Tt.isValid&&Tt.texture&&g.init(t,Tt,r.renderState)}}for(let ct=0;ct<M.length;ct++){const ft=S[ct],yt=M[ct];ft!==null&&yt!==void 0&&yt.update(ft,q,c||a)}j&&j(X,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),_=null}const vt=new Uu;vt.setAnimationLoop(Y),this.setAnimationLoop=function(X){j=X},this.dispose=function(){}}}const bi=new en,L_=new se;function I_(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Lu(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,x,M,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,S)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),g(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,x,M):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===$e&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===$e&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const x=t.get(u),M=x.envMap,S=x.envMapRotation;M&&(m.envMap.value=M,bi.copy(S),bi.x*=-1,bi.y*=-1,bi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),m.envMapRotation.value.setFromMatrix4(L_.makeRotationFromEuler(bi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,x,M){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*x,m.scale.value=M*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,x){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===$e&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function g(m,u){const x=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function D_(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const S=M.program;n.uniformBlockBinding(x,S)}function c(x,M){let S=r[x.id];S===void 0&&(_(x),S=d(x),r[x.id]=S,x.addEventListener("dispose",m));const R=M.program;n.updateUBOMapping(x,R);const P=t.render.frame;s[x.id]!==P&&(p(x),s[x.id]=P)}function d(x){const M=h();x.__bindingPointIndex=M;const S=i.createBuffer(),R=x.__size,P=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const M=r[x.id],S=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let P=0,L=S.length;P<L;P++){const N=Array.isArray(S[P])?S[P]:[S[P]];for(let w=0,E=N.length;w<E;w++){const B=N[w];if(f(B,P,w,R)===!0){const C=B.__offset,z=Array.isArray(B.value)?B.value:[B.value];let y=0;for(let W=0;W<z.length;W++){const H=z[W],Z=g(H);typeof H=="number"||typeof H=="boolean"?(B.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,C+y,B.__data)):H.isMatrix3?(B.__data[0]=H.elements[0],B.__data[1]=H.elements[1],B.__data[2]=H.elements[2],B.__data[3]=0,B.__data[4]=H.elements[3],B.__data[5]=H.elements[4],B.__data[6]=H.elements[5],B.__data[7]=0,B.__data[8]=H.elements[6],B.__data[9]=H.elements[7],B.__data[10]=H.elements[8],B.__data[11]=0):(H.toArray(B.__data,y),y+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,M,S,R){const P=x.value,L=M+"_"+S;if(R[L]===void 0)return typeof P=="number"||typeof P=="boolean"?R[L]=P:R[L]=P.clone(),!0;{const N=R[L];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return R[L]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function _(x){const M=x.uniforms;let S=0;const R=16;for(let L=0,N=M.length;L<N;L++){const w=Array.isArray(M[L])?M[L]:[M[L]];for(let E=0,B=w.length;E<B;E++){const C=w[E],z=Array.isArray(C.value)?C.value:[C.value];for(let y=0,W=z.length;y<W;y++){const H=z[y],Z=g(H),J=S%R,Q=J%Z.boundary,pt=J+Q;S+=Q,pt!==0&&R-pt<Z.storage&&(S+=R-pt),C.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=Z.storage}}}const P=S%R;return P>0&&(S+=R-P),x.__size=S,x.__cache={},this}function g(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function u(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class N_{constructor(t={}){const{canvas:e=Sd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,u=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this.toneMapping=li,this.toneMappingExposure=1;const S=this;let R=!1,P=0,L=0,N=null,w=-1,E=null;const B=new Se,C=new Se;let z=null;const y=new ae(0);let W=0,H=e.width,Z=e.height,J=1,Q=null,pt=null;const j=new Se(0,0,H,Z),Y=new Se(0,0,H,Z);let vt=!1;const X=new rl;let q=!1,ct=!1;const ft=new se,yt=new se,Tt=new $,zt=new Se,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function pe(){return N===null?J:1}let v=n;function gt(F,it){return e.getContext(F,it)}try{const F={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ko}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",Ut,!1),v===null){const it="webgl2";if(v=gt(it,F),v===null)throw gt(it)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let st,V,O,K,ot,I,b,G,rt,nt,at,At,St,Rt,ce,Mt,Ot,Nt,Kt,kt,ne,ie,be,et;function Pt(){st=new Bm(v),st.init(),ie=new w_(v,st),V=new Dm(v,st,t,ie),O=new b_(v,st),V.reverseDepthBuffer&&p&&O.buffers.depth.setReversed(!0),K=new Hm(v),ot=new a_,I=new M_(v,st,O,ot,V,ie,K),b=new Um(S),G=new km(S),rt=new Yd(v),be=new Lm(v,rt),nt=new zm(v,rt,K,be),at=new Wm(v,nt,rt,K),Kt=new Gm(v,V,I),Mt=new Nm(ot),At=new s_(S,b,G,st,V,be,Mt),St=new I_(S,ot),Rt=new l_,ce=new p_(st),Nt=new Pm(S,b,G,O,at,f,l),Ot=new x_(S,at,V),et=new D_(v,K,V,O),kt=new Im(v,st,K),ne=new Vm(v,st,K),K.programs=At.programs,S.capabilities=V,S.extensions=st,S.properties=ot,S.renderLists=Rt,S.shadowMap=Ot,S.state=O,S.info=K}Pt();const mt=new P_(S,v);this.xr=mt,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const F=st.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=st.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(F){F!==void 0&&(J=F,this.setSize(H,Z,!1))},this.getSize=function(F){return F.set(H,Z)},this.setSize=function(F,it,ut=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=F,Z=it,e.width=Math.floor(F*J),e.height=Math.floor(it*J),ut===!0&&(e.style.width=F+"px",e.style.height=it+"px"),this.setViewport(0,0,F,it)},this.getDrawingBufferSize=function(F){return F.set(H*J,Z*J).floor()},this.setDrawingBufferSize=function(F,it,ut){H=F,Z=it,J=ut,e.width=Math.floor(F*ut),e.height=Math.floor(it*ut),this.setViewport(0,0,F,it)},this.getCurrentViewport=function(F){return F.copy(B)},this.getViewport=function(F){return F.copy(j)},this.setViewport=function(F,it,ut,ht){F.isVector4?j.set(F.x,F.y,F.z,F.w):j.set(F,it,ut,ht),O.viewport(B.copy(j).multiplyScalar(J).round())},this.getScissor=function(F){return F.copy(Y)},this.setScissor=function(F,it,ut,ht){F.isVector4?Y.set(F.x,F.y,F.z,F.w):Y.set(F,it,ut,ht),O.scissor(C.copy(Y).multiplyScalar(J).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(F){O.setScissorTest(vt=F)},this.setOpaqueSort=function(F){Q=F},this.setTransparentSort=function(F){pt=F},this.getClearColor=function(F){return F.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(F=!0,it=!0,ut=!0){let ht=0;if(F){let tt=!1;if(N!==null){const Et=N.texture.format;tt=Et===nl||Et===el||Et===tl}if(tt){const Et=N.texture.type,Dt=Et===jn||Et===Ai||Et===Vr||Et===ur||Et===Jo||Et===Qo,Ht=Nt.getClearColor(),Gt=Nt.getClearAlpha(),te=Ht.r,le=Ht.g,Wt=Ht.b;Dt?(_[0]=te,_[1]=le,_[2]=Wt,_[3]=Gt,v.clearBufferuiv(v.COLOR,0,_)):(g[0]=te,g[1]=le,g[2]=Wt,g[3]=Gt,v.clearBufferiv(v.COLOR,0,g))}else ht|=v.COLOR_BUFFER_BIT}it&&(ht|=v.DEPTH_BUFFER_BIT),ut&&(ht|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",Ut,!1),Rt.dispose(),ce.dispose(),ot.dispose(),b.dispose(),G.dispose(),at.dispose(),be.dispose(),et.dispose(),At.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",Kr),mt.removeEventListener("sessionend",$r),Pn.stop()};function xt(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const F=K.autoReset,it=Ot.enabled,ut=Ot.autoUpdate,ht=Ot.needsUpdate,tt=Ot.type;Pt(),K.autoReset=F,Ot.enabled=it,Ot.autoUpdate=ut,Ot.needsUpdate=ht,Ot.type=tt}function Ut(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function oe(F){const it=F.target;it.removeEventListener("dispose",oe),Re(it)}function Re(F){ke(F),ot.remove(F)}function ke(F){const it=ot.get(F).programs;it!==void 0&&(it.forEach(function(ut){At.releaseProgram(ut)}),F.isShaderMaterial&&At.releaseShaderCache(F))}this.renderBufferDirect=function(F,it,ut,ht,tt,Et){it===null&&(it=Qt);const Dt=tt.isMesh&&tt.matrixWorld.determinant()<0,Ht=fa(F,it,ut,ht,tt);O.setMaterial(ht,Dt);let Gt=ut.index,te=1;if(ht.wireframe===!0){if(Gt=nt.getWireframeAttribute(ut),Gt===void 0)return;te=2}const le=ut.drawRange,Wt=ut.attributes.position;let ge=le.start*te,we=(le.start+le.count)*te;Et!==null&&(ge=Math.max(ge,Et.start*te),we=Math.min(we,(Et.start+Et.count)*te)),Gt!==null?(ge=Math.max(ge,0),we=Math.min(we,Gt.count)):Wt!=null&&(ge=Math.max(ge,0),we=Math.min(we,Wt.count));const Te=we-ge;if(Te<0||Te===1/0)return;be.setup(tt,ht,Ht,ut,Gt);let Ne,ve=kt;if(Gt!==null&&(Ne=rt.get(Gt),ve=ne,ve.setIndex(Ne)),tt.isMesh)ht.wireframe===!0?(O.setLineWidth(ht.wireframeLinewidth*pe()),ve.setMode(v.LINES)):ve.setMode(v.TRIANGLES);else if(tt.isLine){let Xt=ht.linewidth;Xt===void 0&&(Xt=1),O.setLineWidth(Xt*pe()),tt.isLineSegments?ve.setMode(v.LINES):tt.isLineLoop?ve.setMode(v.LINE_LOOP):ve.setMode(v.LINE_STRIP)}else tt.isPoints?ve.setMode(v.POINTS):tt.isSprite&&ve.setMode(v.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)ve.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))ve.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const Xt=tt._multiDrawStarts,pn=tt._multiDrawCounts,_e=tt._multiDrawCount,nn=Gt?rt.get(Gt).bytesPerElement:1,$n=ot.get(ht).currentProgram.getUniforms();for(let je=0;je<_e;je++)$n.setValue(v,"_gl_DrawID",je),ve.render(Xt[je]/nn,pn[je])}else if(tt.isInstancedMesh)ve.renderInstances(ge,Te,tt.count);else if(ut.isInstancedBufferGeometry){const Xt=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,pn=Math.min(ut.instanceCount,Xt);ve.renderInstances(ge,Te,pn)}else ve.render(ge,Te)};function ue(F,it,ut){F.transparent===!0&&F.side===Tn&&F.forceSinglePass===!1?(F.side=$e,F.needsUpdate=!0,Di(F,it,ut),F.side=Xn,F.needsUpdate=!0,Di(F,it,ut),F.side=Tn):Di(F,it,ut)}this.compile=function(F,it,ut=null){ut===null&&(ut=F),u=ce.get(ut),u.init(it),M.push(u),ut.traverseVisible(function(tt){tt.isLight&&tt.layers.test(it.layers)&&(u.pushLight(tt),tt.castShadow&&u.pushShadow(tt))}),F!==ut&&F.traverseVisible(function(tt){tt.isLight&&tt.layers.test(it.layers)&&(u.pushLight(tt),tt.castShadow&&u.pushShadow(tt))}),u.setupLights();const ht=new Set;return F.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Et=tt.material;if(Et)if(Array.isArray(Et))for(let Dt=0;Dt<Et.length;Dt++){const Ht=Et[Dt];ue(Ht,ut,tt),ht.add(Ht)}else ue(Et,ut,tt),ht.add(Et)}),M.pop(),u=null,ht},this.compileAsync=function(F,it,ut=null){const ht=this.compile(F,it,ut);return new Promise(tt=>{function Et(){if(ht.forEach(function(Dt){ot.get(Dt).currentProgram.isReady()&&ht.delete(Dt)}),ht.size===0){tt(F);return}setTimeout(Et,10)}st.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Je=null;function fn(F){Je&&Je(F)}function Kr(){Pn.stop()}function $r(){Pn.start()}const Pn=new Uu;Pn.setAnimationLoop(fn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(F){Je=F,mt.setAnimationLoop(F),F===null?Pn.stop():Pn.start()},mt.addEventListener("sessionstart",Kr),mt.addEventListener("sessionend",$r),this.render=function(F,it){if(it!==void 0&&it.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),it.parent===null&&it.matrixWorldAutoUpdate===!0&&it.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(it),it=mt.getCamera()),F.isScene===!0&&F.onBeforeRender(S,F,it,N),u=ce.get(F,M.length),u.init(it),M.push(u),yt.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),X.setFromProjectionMatrix(yt),ct=this.localClippingEnabled,q=Mt.init(this.clippingPlanes,ct),m=Rt.get(F,x.length),m.init(),x.push(m),mt.enabled===!0&&mt.isPresenting===!0){const Et=S.xr.getDepthSensingMesh();Et!==null&&yr(Et,it,-1/0,S.sortObjects)}yr(F,it,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(Q,pt),ee=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,ee&&Nt.addToRenderList(m,F),this.info.render.frame++,q===!0&&Mt.beginShadows();const ut=u.state.shadowsArray;Ot.render(ut,F,it),q===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ht=m.opaque,tt=m.transmissive;if(u.setupLights(),it.isArrayCamera){const Et=it.cameras;if(tt.length>0)for(let Dt=0,Ht=Et.length;Dt<Ht;Dt++){const Gt=Et[Dt];br(ht,tt,F,Gt)}ee&&Nt.render(F);for(let Dt=0,Ht=Et.length;Dt<Ht;Dt++){const Gt=Et[Dt];Jr(m,F,Gt,Gt.viewport)}}else tt.length>0&&br(ht,tt,F,it),ee&&Nt.render(F),Jr(m,F,it);N!==null&&(I.updateMultisampleRenderTarget(N),I.updateRenderTargetMipmap(N)),F.isScene===!0&&F.onAfterRender(S,F,it),be.resetDefaultState(),w=-1,E=null,M.pop(),M.length>0?(u=M[M.length-1],q===!0&&Mt.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function yr(F,it,ut,ht){if(F.visible===!1)return;if(F.layers.test(it.layers)){if(F.isGroup)ut=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(it);else if(F.isLight)u.pushLight(F),F.castShadow&&u.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||X.intersectsSprite(F)){ht&&zt.setFromMatrixPosition(F.matrixWorld).applyMatrix4(yt);const Dt=at.update(F),Ht=F.material;Ht.visible&&m.push(F,Dt,Ht,ut,zt.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||X.intersectsObject(F))){const Dt=at.update(F),Ht=F.material;if(ht&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),zt.copy(F.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),zt.copy(Dt.boundingSphere.center)),zt.applyMatrix4(F.matrixWorld).applyMatrix4(yt)),Array.isArray(Ht)){const Gt=Dt.groups;for(let te=0,le=Gt.length;te<le;te++){const Wt=Gt[te],ge=Ht[Wt.materialIndex];ge&&ge.visible&&m.push(F,Dt,ge,ut,zt.z,Wt)}}else Ht.visible&&m.push(F,Dt,Ht,ut,zt.z,null)}}const Et=F.children;for(let Dt=0,Ht=Et.length;Dt<Ht;Dt++)yr(Et[Dt],it,ut,ht)}function Jr(F,it,ut,ht){const tt=F.opaque,Et=F.transmissive,Dt=F.transparent;u.setupLightsView(ut),q===!0&&Mt.setGlobalState(S.clippingPlanes,ut),ht&&O.viewport(B.copy(ht)),tt.length>0&&Ii(tt,it,ut),Et.length>0&&Ii(Et,it,ut),Dt.length>0&&Ii(Dt,it,ut),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function br(F,it,ut,ht){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[ht.id]===void 0&&(u.state.transmissionRenderTarget[ht.id]=new Ci(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?jr:jn,minFilter:Hn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));const Et=u.state.transmissionRenderTarget[ht.id],Dt=ht.viewport||B;Et.setSize(Dt.z,Dt.w);const Ht=S.getRenderTarget();S.setRenderTarget(Et),S.getClearColor(y),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),S.clear(),ee&&Nt.render(ut);const Gt=S.toneMapping;S.toneMapping=li;const te=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),u.setupLightsView(ht),q===!0&&Mt.setGlobalState(S.clippingPlanes,ht),Ii(F,ut,ht),I.updateMultisampleRenderTarget(Et),I.updateRenderTargetMipmap(Et),st.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Wt=0,ge=it.length;Wt<ge;Wt++){const we=it[Wt],Te=we.object,Ne=we.geometry,ve=we.material,Xt=we.group;if(ve.side===Tn&&Te.layers.test(ht.layers)){const pn=ve.side;ve.side=$e,ve.needsUpdate=!0,Sr(Te,ut,ht,Ne,ve,Xt),ve.side=pn,ve.needsUpdate=!0,le=!0}}le===!0&&(I.updateMultisampleRenderTarget(Et),I.updateRenderTargetMipmap(Et))}S.setRenderTarget(Ht),S.setClearColor(y,W),te!==void 0&&(ht.viewport=te),S.toneMapping=Gt}function Ii(F,it,ut){const ht=it.isScene===!0?it.overrideMaterial:null;for(let tt=0,Et=F.length;tt<Et;tt++){const Dt=F[tt],Ht=Dt.object,Gt=Dt.geometry,te=ht===null?Dt.material:ht,le=Dt.group;Ht.layers.test(ut.layers)&&Sr(Ht,it,ut,Gt,te,le)}}function Sr(F,it,ut,ht,tt,Et){F.onBeforeRender(S,it,ut,ht,tt,Et),F.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),tt.onBeforeRender(S,it,ut,ht,F,Et),tt.transparent===!0&&tt.side===Tn&&tt.forceSinglePass===!1?(tt.side=$e,tt.needsUpdate=!0,S.renderBufferDirect(ut,it,ht,tt,F,Et),tt.side=Xn,tt.needsUpdate=!0,S.renderBufferDirect(ut,it,ht,tt,F,Et),tt.side=Tn):S.renderBufferDirect(ut,it,ht,tt,F,Et),F.onAfterRender(S,it,ut,ht,tt,Et)}function Di(F,it,ut){it.isScene!==!0&&(it=Qt);const ht=ot.get(F),tt=u.state.lights,Et=u.state.shadowsArray,Dt=tt.state.version,Ht=At.getParameters(F,tt.state,Et,it,ut),Gt=At.getProgramCacheKey(Ht);let te=ht.programs;ht.environment=F.isMeshStandardMaterial?it.environment:null,ht.fog=it.fog,ht.envMap=(F.isMeshStandardMaterial?G:b).get(F.envMap||ht.environment),ht.envMapRotation=ht.environment!==null&&F.envMap===null?it.environmentRotation:F.envMapRotation,te===void 0&&(F.addEventListener("dispose",oe),te=new Map,ht.programs=te);let le=te.get(Gt);if(le!==void 0){if(ht.currentProgram===le&&ht.lightsStateVersion===Dt)return ts(F,Ht),le}else Ht.uniforms=At.getUniforms(F),F.onBeforeCompile(Ht,S),le=At.acquireProgram(Ht,Gt),te.set(Gt,le),ht.uniforms=Ht.uniforms;const Wt=ht.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Wt.clippingPlanes=Mt.uniform),ts(F,Ht),ht.needsLights=ma(F),ht.lightsStateVersion=Dt,ht.needsLights&&(Wt.ambientLightColor.value=tt.state.ambient,Wt.lightProbe.value=tt.state.probe,Wt.directionalLights.value=tt.state.directional,Wt.directionalLightShadows.value=tt.state.directionalShadow,Wt.spotLights.value=tt.state.spot,Wt.spotLightShadows.value=tt.state.spotShadow,Wt.rectAreaLights.value=tt.state.rectArea,Wt.ltc_1.value=tt.state.rectAreaLTC1,Wt.ltc_2.value=tt.state.rectAreaLTC2,Wt.pointLights.value=tt.state.point,Wt.pointLightShadows.value=tt.state.pointShadow,Wt.hemisphereLights.value=tt.state.hemi,Wt.directionalShadowMap.value=tt.state.directionalShadowMap,Wt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Wt.spotShadowMap.value=tt.state.spotShadowMap,Wt.spotLightMatrix.value=tt.state.spotLightMatrix,Wt.spotLightMap.value=tt.state.spotLightMap,Wt.pointShadowMap.value=tt.state.pointShadowMap,Wt.pointShadowMatrix.value=tt.state.pointShadowMatrix),ht.currentProgram=le,ht.uniformsList=null,le}function Qr(F){if(F.uniformsList===null){const it=F.currentProgram.getUniforms();F.uniformsList=Ws.seqWithValue(it.seq,F.uniforms)}return F.uniformsList}function ts(F,it){const ut=ot.get(F);ut.outputColorSpace=it.outputColorSpace,ut.batching=it.batching,ut.batchingColor=it.batchingColor,ut.instancing=it.instancing,ut.instancingColor=it.instancingColor,ut.instancingMorph=it.instancingMorph,ut.skinning=it.skinning,ut.morphTargets=it.morphTargets,ut.morphNormals=it.morphNormals,ut.morphColors=it.morphColors,ut.morphTargetsCount=it.morphTargetsCount,ut.numClippingPlanes=it.numClippingPlanes,ut.numIntersection=it.numClipIntersection,ut.vertexAlphas=it.vertexAlphas,ut.vertexTangents=it.vertexTangents,ut.toneMapping=it.toneMapping}function fa(F,it,ut,ht,tt){it.isScene!==!0&&(it=Qt),I.resetTextureUnits();const Et=it.fog,Dt=ht.isMeshStandardMaterial?it.environment:null,Ht=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:mr,Gt=(ht.isMeshStandardMaterial?G:b).get(ht.envMap||Dt),te=ht.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,le=!!ut.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),Wt=!!ut.morphAttributes.position,ge=!!ut.morphAttributes.normal,we=!!ut.morphAttributes.color;let Te=li;ht.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Te=S.toneMapping);const Ne=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,ve=Ne!==void 0?Ne.length:0,Xt=ot.get(ht),pn=u.state.lights;if(q===!0&&(ct===!0||F!==E)){const qe=F===E&&ht.id===w;Mt.setState(ht,F,qe)}let _e=!1;ht.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==pn.state.version||Xt.outputColorSpace!==Ht||tt.isBatchedMesh&&Xt.batching===!1||!tt.isBatchedMesh&&Xt.batching===!0||tt.isBatchedMesh&&Xt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&Xt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&Xt.instancing===!1||!tt.isInstancedMesh&&Xt.instancing===!0||tt.isSkinnedMesh&&Xt.skinning===!1||!tt.isSkinnedMesh&&Xt.skinning===!0||tt.isInstancedMesh&&Xt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Xt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Xt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Xt.instancingMorph===!1&&tt.morphTexture!==null||Xt.envMap!==Gt||ht.fog===!0&&Xt.fog!==Et||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Mt.numPlanes||Xt.numIntersection!==Mt.numIntersection)||Xt.vertexAlphas!==te||Xt.vertexTangents!==le||Xt.morphTargets!==Wt||Xt.morphNormals!==ge||Xt.morphColors!==we||Xt.toneMapping!==Te||Xt.morphTargetsCount!==ve)&&(_e=!0):(_e=!0,Xt.__version=ht.version);let nn=Xt.currentProgram;_e===!0&&(nn=Di(ht,it,tt));let $n=!1,je=!1,Jn=!1;const re=nn.getUniforms(),Qe=Xt.uniforms;if(O.useProgram(nn.program)&&($n=!0,je=!0,Jn=!0),ht.id!==w&&(w=ht.id,je=!0),$n||E!==F){O.buffers.depth.getReversed()?(ft.copy(F.projectionMatrix),wd(ft),Ed(ft),re.setValue(v,"projectionMatrix",ft)):re.setValue(v,"projectionMatrix",F.projectionMatrix),re.setValue(v,"viewMatrix",F.matrixWorldInverse);const mn=re.map.cameraPosition;mn!==void 0&&mn.setValue(v,Tt.setFromMatrixPosition(F.matrixWorld)),V.logarithmicDepthBuffer&&re.setValue(v,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&re.setValue(v,"isOrthographic",F.isOrthographicCamera===!0),E!==F&&(E=F,je=!0,Jn=!0)}if(tt.isSkinnedMesh){re.setOptional(v,tt,"bindMatrix"),re.setOptional(v,tt,"bindMatrixInverse");const qe=tt.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),re.setValue(v,"boneTexture",qe.boneTexture,I))}tt.isBatchedMesh&&(re.setOptional(v,tt,"batchingTexture"),re.setValue(v,"batchingTexture",tt._matricesTexture,I),re.setOptional(v,tt,"batchingIdTexture"),re.setValue(v,"batchingIdTexture",tt._indirectTexture,I),re.setOptional(v,tt,"batchingColorTexture"),tt._colorsTexture!==null&&re.setValue(v,"batchingColorTexture",tt._colorsTexture,I));const pi=ut.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&Kt.update(tt,ut,nn),(je||Xt.receiveShadow!==tt.receiveShadow)&&(Xt.receiveShadow=tt.receiveShadow,re.setValue(v,"receiveShadow",tt.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(Qe.envMap.value=Gt,Qe.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),ht.isMeshStandardMaterial&&ht.envMap===null&&it.environment!==null&&(Qe.envMapIntensity.value=it.environmentIntensity),je&&(re.setValue(v,"toneMappingExposure",S.toneMappingExposure),Xt.needsLights&&pa(Qe,Jn),Et&&ht.fog===!0&&St.refreshFogUniforms(Qe,Et),St.refreshMaterialUniforms(Qe,ht,J,Z,u.state.transmissionRenderTarget[F.id]),Ws.upload(v,Qr(Xt),Qe,I)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(Ws.upload(v,Qr(Xt),Qe,I),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&re.setValue(v,"center",tt.center),re.setValue(v,"modelViewMatrix",tt.modelViewMatrix),re.setValue(v,"normalMatrix",tt.normalMatrix),re.setValue(v,"modelMatrix",tt.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){const qe=ht.uniformsGroups;for(let mn=0,cn=qe.length;mn<cn;mn++){const mi=qe[mn];et.update(mi,nn),et.bind(mi,nn)}}return nn}function pa(F,it){F.ambientLightColor.needsUpdate=it,F.lightProbe.needsUpdate=it,F.directionalLights.needsUpdate=it,F.directionalLightShadows.needsUpdate=it,F.pointLights.needsUpdate=it,F.pointLightShadows.needsUpdate=it,F.spotLights.needsUpdate=it,F.spotLightShadows.needsUpdate=it,F.rectAreaLights.needsUpdate=it,F.hemisphereLights.needsUpdate=it}function ma(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(F,it,ut){ot.get(F.texture).__webglTexture=it,ot.get(F.depthTexture).__webglTexture=ut;const ht=ot.get(F);ht.__hasExternalTextures=!0,ht.__autoAllocateDepthBuffer=ut===void 0,ht.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ht.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(F,it){const ut=ot.get(F);ut.__webglFramebuffer=it,ut.__useDefaultFramebuffer=it===void 0},this.setRenderTarget=function(F,it=0,ut=0){N=F,P=it,L=ut;let ht=!0,tt=null,Et=!1,Dt=!1;if(F){const Gt=ot.get(F);if(Gt.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(v.FRAMEBUFFER,null),ht=!1;else if(Gt.__webglFramebuffer===void 0)I.setupRenderTarget(F);else if(Gt.__hasExternalTextures)I.rebindTextures(F,ot.get(F.texture).__webglTexture,ot.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){const Wt=F.depthTexture;if(Gt.__boundDepthTexture!==Wt){if(Wt!==null&&ot.has(Wt)&&(F.width!==Wt.image.width||F.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(F)}}const te=F.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Dt=!0);const le=ot.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(le[it])?tt=le[it][ut]:tt=le[it],Et=!0):F.samples>0&&I.useMultisampledRTT(F)===!1?tt=ot.get(F).__webglMultisampledFramebuffer:Array.isArray(le)?tt=le[ut]:tt=le,B.copy(F.viewport),C.copy(F.scissor),z=F.scissorTest}else B.copy(j).multiplyScalar(J).floor(),C.copy(Y).multiplyScalar(J).floor(),z=vt;if(O.bindFramebuffer(v.FRAMEBUFFER,tt)&&ht&&O.drawBuffers(F,tt),O.viewport(B),O.scissor(C),O.setScissorTest(z),Et){const Gt=ot.get(F.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+it,Gt.__webglTexture,ut)}else if(Dt){const Gt=ot.get(F.texture),te=it||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,Gt.__webglTexture,ut||0,te)}w=-1},this.readRenderTargetPixels=function(F,it,ut,ht,tt,Et,Dt){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=ot.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ht=Ht[Dt]),Ht){O.bindFramebuffer(v.FRAMEBUFFER,Ht);try{const Gt=F.texture,te=Gt.format,le=Gt.type;if(!V.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}it>=0&&it<=F.width-ht&&ut>=0&&ut<=F.height-tt&&v.readPixels(it,ut,ht,tt,ie.convert(te),ie.convert(le),Et)}finally{const Gt=N!==null?ot.get(N).__webglFramebuffer:null;O.bindFramebuffer(v.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(F,it,ut,ht,tt,Et,Dt){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=ot.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ht=Ht[Dt]),Ht){const Gt=F.texture,te=Gt.format,le=Gt.type;if(!V.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(it>=0&&it<=F.width-ht&&ut>=0&&ut<=F.height-tt){O.bindFramebuffer(v.FRAMEBUFFER,Ht);const Wt=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,Wt),v.bufferData(v.PIXEL_PACK_BUFFER,Et.byteLength,v.STREAM_READ),v.readPixels(it,ut,ht,tt,ie.convert(te),ie.convert(le),0);const ge=N!==null?ot.get(N).__webglFramebuffer:null;O.bindFramebuffer(v.FRAMEBUFFER,ge);const we=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await Md(v,we,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,Wt),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,Et),v.deleteBuffer(Wt),v.deleteSync(we),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(F,it=null,ut=0){F.isTexture!==!0&&(Dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),it=arguments[0]||null,F=arguments[1]);const ht=Math.pow(2,-ut),tt=Math.floor(F.image.width*ht),Et=Math.floor(F.image.height*ht),Dt=it!==null?it.x:0,Ht=it!==null?it.y:0;I.setTexture2D(F,0),v.copyTexSubImage2D(v.TEXTURE_2D,ut,0,0,Dt,Ht,tt,Et),O.unbindTexture()},this.copyTextureToTexture=function(F,it,ut=null,ht=null,tt=0){F.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture function signature has changed."),ht=arguments[0]||null,F=arguments[1],it=arguments[2],tt=arguments[3]||0,ut=null);let Et,Dt,Ht,Gt,te,le,Wt,ge,we;const Te=F.isCompressedTexture?F.mipmaps[tt]:F.image;ut!==null?(Et=ut.max.x-ut.min.x,Dt=ut.max.y-ut.min.y,Ht=ut.isBox3?ut.max.z-ut.min.z:1,Gt=ut.min.x,te=ut.min.y,le=ut.isBox3?ut.min.z:0):(Et=Te.width,Dt=Te.height,Ht=Te.depth||1,Gt=0,te=0,le=0),ht!==null?(Wt=ht.x,ge=ht.y,we=ht.z):(Wt=0,ge=0,we=0);const Ne=ie.convert(it.format),ve=ie.convert(it.type);let Xt;it.isData3DTexture?(I.setTexture3D(it,0),Xt=v.TEXTURE_3D):it.isDataArrayTexture||it.isCompressedArrayTexture?(I.setTexture2DArray(it,0),Xt=v.TEXTURE_2D_ARRAY):(I.setTexture2D(it,0),Xt=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,it.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,it.unpackAlignment);const pn=v.getParameter(v.UNPACK_ROW_LENGTH),_e=v.getParameter(v.UNPACK_IMAGE_HEIGHT),nn=v.getParameter(v.UNPACK_SKIP_PIXELS),$n=v.getParameter(v.UNPACK_SKIP_ROWS),je=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,Te.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Te.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Gt),v.pixelStorei(v.UNPACK_SKIP_ROWS,te),v.pixelStorei(v.UNPACK_SKIP_IMAGES,le);const Jn=F.isDataArrayTexture||F.isData3DTexture,re=it.isDataArrayTexture||it.isData3DTexture;if(F.isRenderTargetTexture||F.isDepthTexture){const Qe=ot.get(F),pi=ot.get(it),qe=ot.get(Qe.__renderTarget),mn=ot.get(pi.__renderTarget);O.bindFramebuffer(v.READ_FRAMEBUFFER,qe.__webglFramebuffer),O.bindFramebuffer(v.DRAW_FRAMEBUFFER,mn.__webglFramebuffer);for(let cn=0;cn<Ht;cn++)Jn&&v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,ot.get(F).__webglTexture,tt,le+cn),F.isDepthTexture?(re&&v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,ot.get(it).__webglTexture,tt,we+cn),v.blitFramebuffer(Gt,te,Et,Dt,Wt,ge,Et,Dt,v.DEPTH_BUFFER_BIT,v.NEAREST)):re?v.copyTexSubImage3D(Xt,tt,Wt,ge,we+cn,Gt,te,Et,Dt):v.copyTexSubImage2D(Xt,tt,Wt,ge,we+cn,Gt,te,Et,Dt);O.bindFramebuffer(v.READ_FRAMEBUFFER,null),O.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else re?F.isDataTexture||F.isData3DTexture?v.texSubImage3D(Xt,tt,Wt,ge,we,Et,Dt,Ht,Ne,ve,Te.data):it.isCompressedArrayTexture?v.compressedTexSubImage3D(Xt,tt,Wt,ge,we,Et,Dt,Ht,Ne,Te.data):v.texSubImage3D(Xt,tt,Wt,ge,we,Et,Dt,Ht,Ne,ve,Te):F.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,tt,Wt,ge,Et,Dt,Ne,ve,Te.data):F.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,tt,Wt,ge,Te.width,Te.height,Ne,Te.data):v.texSubImage2D(v.TEXTURE_2D,tt,Wt,ge,Et,Dt,Ne,ve,Te);v.pixelStorei(v.UNPACK_ROW_LENGTH,pn),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,_e),v.pixelStorei(v.UNPACK_SKIP_PIXELS,nn),v.pixelStorei(v.UNPACK_SKIP_ROWS,$n),v.pixelStorei(v.UNPACK_SKIP_IMAGES,je),tt===0&&it.generateMipmaps&&v.generateMipmap(Xt),O.unbindTexture()},this.copyTextureToTexture3D=function(F,it,ut=null,ht=null,tt=0){return F.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ut=arguments[0]||null,ht=arguments[1]||null,F=arguments[2],it=arguments[3],tt=arguments[4]||0),Dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(F,it,ut,ht,tt)},this.initRenderTarget=function(F){ot.get(F).__webglFramebuffer===void 0&&I.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?I.setTextureCube(F,0):F.isData3DTexture?I.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?I.setTexture2DArray(F,0):I.setTexture2D(F,0),O.unbindTexture()},this.resetState=function(){P=0,L=0,N=null,O.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}}class Vu extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const yc=new $,bc=new Se,Sc=new Se,U_=new $,Mc=new se,ws=new $,Xa=new Pi,wc=new se,ja=new aa;class F_ extends Pe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bl,this.bindMatrix=new se,this.bindMatrixInverse=new se,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new hi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ws),this.boundingBox.expandByPoint(ws)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pi),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ws),this.boundingSphere.expandByPoint(ws)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xa.copy(this.boundingSphere),Xa.applyMatrix4(r),t.ray.intersectsSphere(Xa)!==!1&&(wc.copy(r).invert(),ja.copy(t.ray).applyMatrix4(wc),!(this.boundingBox!==null&&ja.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ja)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Se,e=this.geometry.attributes.skinWeight;for(let n=0,r=e.count;n<r;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===bl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,r=this.geometry;bc.fromBufferAttribute(r.attributes.skinIndex,t),Sc.fromBufferAttribute(r.attributes.skinWeight,t),yc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const a=Sc.getComponent(s);if(a!==0){const o=bc.getComponent(s);Mc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(U_.copy(yc).applyMatrix4(Mc),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Hu extends Le{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Gu extends Ve{constructor(t=null,e=1,n=1,r,s,a,o,l,c=on,d=on,h,p){super(null,a,o,l,c,d,r,s,h,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ec=new se,O_=new se;class ol{constructor(t=[],e=[]){this.uuid=ui(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new se)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new se;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=t.length;s<a;s++){const o=t[s]?t[s].matrixWorld:O_;Ec.multiplyMatrices(o,e[s]),Ec.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new ol(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Gu(e,t,t,dn,An);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const r=this.bones[e];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,r=t.bones.length;n<r;n++){const s=t.bones[n];let a=e[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Hu),this.bones.push(a),this.boneInverses.push(new se().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let r=0,s=e.length;r<s;r++){const a=e[r];t.bones.push(a.uuid);const o=n[r];t.boneInverses.push(o.toArray())}return t}}class rr extends bn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ys=new $,Zs=new $,Tc=new se,Ar=new aa,Es=new Pi,qa=new $,Ac=new $;class Wu extends Le{constructor(t=new Xe,e=new rr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ys.fromBufferAttribute(e,r-1),Zs.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ys.distanceTo(Zs);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(r),Es.radius+=s,t.ray.intersectsSphere(Es)===!1)return;Tc.copy(r).invert(),Ar.copy(t.ray).applyMatrix4(Tc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,p=n.attributes.position;if(d!==null){const f=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){const u=d.getX(g),x=d.getX(g+1),M=Ts(this,t,Ar,l,u,x);M&&e.push(M)}if(this.isLineLoop){const g=d.getX(_-1),m=d.getX(f),u=Ts(this,t,Ar,l,g,m);u&&e.push(u)}}else{const f=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){const u=Ts(this,t,Ar,l,g,g+1);u&&e.push(u)}if(this.isLineLoop){const g=Ts(this,t,Ar,l,_-1,f);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ts(i,t,e,n,r,s){const a=i.geometry.attributes.position;if(Ys.fromBufferAttribute(a,r),Zs.fromBufferAttribute(a,s),e.distanceSqToSegment(Ys,Zs,qa,Ac)>n)return;qa.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(qa);if(!(l<t.near||l>t.far))return{distance:l,point:Ac.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Cc=new $,Rc=new $;class Ho extends Wu{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Cc.fromBufferAttribute(e,r),Rc.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Cc.distanceTo(Rc);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ur extends bn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Pc=new se,Go=new aa,As=new Pi,Cs=new $;class Ya extends Le{constructor(t=new Xe,e=new Ur){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(r),As.radius+=s,t.ray.intersectsSphere(As)===!1)return;Pc.copy(r).invert(),Go.copy(t.ray).applyMatrix4(Pc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const p=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=p,g=f;_<g;_++){const m=c.getX(_);Cs.fromBufferAttribute(h,m),Lc(Cs,m,l,r,t,e,this)}}else{const p=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let _=p,g=f;_<g;_++)Cs.fromBufferAttribute(h,_),Lc(Cs,_,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Lc(i,t,e,n,r,s,a){const o=Go.distanceSqToPoint(i);if(o<e){const l=new $;Go.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class k_ extends Ve{constructor(t,e,n,r,s,a,o,l,c){super(t,e,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ll extends Xe{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],p=[],f=[];let _=0;const g=[],m=n/2;let u=0;x(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(p,3)),this.setAttribute("uv",new Me(f,2));function x(){const S=new $,R=new $;let P=0;const L=(e-t)/n;for(let N=0;N<=s;N++){const w=[],E=N/s,B=E*(e-t)+t;for(let C=0;C<=r;C++){const z=C/r,y=z*l+o,W=Math.sin(y),H=Math.cos(y);R.x=B*W,R.y=-E*n+m,R.z=B*H,h.push(R.x,R.y,R.z),S.set(W,L,H).normalize(),p.push(S.x,S.y,S.z),f.push(z,1-E),w.push(_++)}g.push(w)}for(let N=0;N<r;N++)for(let w=0;w<s;w++){const E=g[w][N],B=g[w+1][N],C=g[w+1][N+1],z=g[w][N+1];(t>0||w!==0)&&(d.push(E,B,z),P+=3),(e>0||w!==s-1)&&(d.push(B,C,z),P+=3)}c.addGroup(u,P,0),u+=P}function M(S){const R=_,P=new me,L=new $;let N=0;const w=S===!0?t:e,E=S===!0?1:-1;for(let C=1;C<=r;C++)h.push(0,m*E,0),p.push(0,E,0),f.push(.5,.5),_++;const B=_;for(let C=0;C<=r;C++){const y=C/r*l+o,W=Math.cos(y),H=Math.sin(y);L.x=w*H,L.y=m*E,L.z=w*W,h.push(L.x,L.y,L.z),p.push(0,E,0),P.x=W*.5+.5,P.y=H*.5*E+.5,f.push(P.x,P.y),_++}for(let C=0;C<r;C++){const z=R+C,y=B+C;S===!0?d.push(y,y+1,z):d.push(y+1,y,z),N+=3}c.addGroup(u,N,S===!0?1:2),u+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class cl extends Xe{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new $,p=new $,f=[],_=[],g=[],m=[];for(let u=0;u<=n;u++){const x=[],M=u/n;let S=0;u===0&&a===0?S=.5/e:u===n&&l===Math.PI&&(S=-.5/e);for(let R=0;R<=e;R++){const P=R/e;h.x=-t*Math.cos(r+P*s)*Math.sin(a+M*o),h.y=t*Math.cos(a+M*o),h.z=t*Math.sin(r+P*s)*Math.sin(a+M*o),_.push(h.x,h.y,h.z),p.copy(h).normalize(),g.push(p.x,p.y,p.z),m.push(P+S,1-M),x.push(c++)}d.push(x)}for(let u=0;u<n;u++)for(let x=0;x<e;x++){const M=d[u][x+1],S=d[u][x],R=d[u+1][x],P=d[u+1][x+1];(u!==0||a>0)&&f.push(M,S,P),(u!==n-1||l<Math.PI)&&f.push(S,R,P)}this.setIndex(f),this.setAttribute("position",new Me(_,3)),this.setAttribute("normal",new Me(g,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class la extends bn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sr extends bn{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new ae(16777215),this.specular=new ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class B_ extends bn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Rs(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function z_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function V_(i){function t(r,s){return i[r]-i[s]}const e=i.length,n=new Array(e);for(let r=0;r!==e;++r)n[r]=r;return n.sort(t),n}function Ic(i,t,e){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=e[s]*t;for(let l=0;l!==t;++l)r[a++]=i[o+l]}return r}function Xu(i,t,e,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(t.push(s.time),e.push.apply(e,a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(t.push(s.time),e.push(a)),s=i[r++];while(s!==void 0)}class ca{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,r=e[n],s=e[n-1];t:{e:{let a;n:{i:if(!(t<r)){for(let o=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=e[++n],t<r)break e}a=e.length;break n}if(!(t>=s)){const o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let a=0;a!==r;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class H_ extends ca{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sl,endingEnd:Sl}}intervalChanged_(t,e,n){const r=this.parameterPositions;let s=t-2,a=t+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ml:s=t,o=2*e-n;break;case wl:s=r.length-2,o=e+r[s]-r[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ml:a=t,l=2*n-e;break;case wl:a=1,l=n+r[1]-r[0];break;default:a=t-1,l=e}const c=(n-e)*.5,d=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*d,this._offsetNext=a*d}interpolate_(t,e,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=this._offsetPrev,h=this._offsetNext,p=this._weightPrev,f=this._weightNext,_=(n-e)/(r-e),g=_*_,m=g*_,u=-p*m+2*p*g-p*_,x=(1+p)*m+(-1.5-2*p)*g+(-.5+p)*_+1,M=(-1-f)*m+(1.5+f)*g+.5*_,S=f*m-f*g;for(let R=0;R!==o;++R)s[R]=u*a[d+R]+x*a[c+R]+M*a[l+R]+S*a[h+R];return s}}class G_ extends ca{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=(n-e)/(r-e),h=1-d;for(let p=0;p!==o;++p)s[p]=a[c+p]*h+a[l+p]*d;return s}}class W_ extends ca{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}}class Rn{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Rs(e,this.TimeBufferType),this.values=Rs(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Rs(t.times,Array),values:Rs(t.values,Array)};const r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new W_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new G_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new H_(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Xs:e=this.InterpolantFactoryMethodDiscrete;break;case zo:e=this.InterpolantFactoryMethodLinear;break;case _a:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xs;case this.InterpolantFactoryMethodLinear:return zo;case this.InterpolantFactoryMethodSmooth:return _a}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(r!==void 0&&z_(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===_a,s=t.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=t[o],d=t[o+1];if(c!==d&&(o!==1||c!==t[0]))if(r)l=!0;else{const h=o*n,p=h-n,f=h+n;for(let _=0;_!==n;++_){const g=e[h+_];if(g!==e[p+_]||g!==e[f+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const h=o*n,p=a*n;for(let f=0;f!==n;++f)e[p+f]=e[h+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}}Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=zo;class vr extends Rn{constructor(t,e,n){super(t,e,n)}}vr.prototype.ValueTypeName="bool";vr.prototype.ValueBufferType=Array;vr.prototype.DefaultInterpolation=Xs;vr.prototype.InterpolantFactoryMethodLinear=void 0;vr.prototype.InterpolantFactoryMethodSmooth=void 0;class ju extends Rn{}ju.prototype.ValueTypeName="color";class Ks extends Rn{}Ks.prototype.ValueTypeName="number";class X_ extends ca{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(r-e);let c=t*o;for(let d=c+o;c!==d;c+=4)Zn.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Yr extends Rn{InterpolantFactoryMethodLinear(t){return new X_(this.times,this.values,this.getValueSize(),t)}}Yr.prototype.ValueTypeName="quaternion";Yr.prototype.InterpolantFactoryMethodSmooth=void 0;class xr extends Rn{constructor(t,e,n){super(t,e,n)}}xr.prototype.ValueTypeName="string";xr.prototype.ValueBufferType=Array;xr.prototype.DefaultInterpolation=Xs;xr.prototype.InterpolantFactoryMethodLinear=void 0;xr.prototype.InterpolantFactoryMethodSmooth=void 0;class pr extends Rn{}pr.prototype.ValueTypeName="vector";class Dc{constructor(t="",e=-1,n=[],r=Zh){this.name=t,this.tracks=n,this.duration=e,this.blendMode=r,this.uuid=ui(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,r=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(q_(n[a]).scale(r));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,r={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,a=n.length;s!==a;++s)e.push(Rn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(t,e,n,r){const s=e.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const d=V_(l);l=Ic(l,1,d),c=Ic(c,1,d),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Ks(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const r=t;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===e)return n[r];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],d=c.name.match(s);if(d&&d.length>1){const h=d[1];let p=r[h];p||(r[h]=p=[]),p.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,p,f,_,g){if(f.length!==0){const m=[],u=[];Xu(f,m,u,_),m.length!==0&&g.push(new h(p,m,u))}},r=[],s=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const p=c[h].keys;if(!(!p||p.length===0))if(p[0].morphTargets){const f={};let _;for(_=0;_<p.length;_++)if(p[_].morphTargets)for(let g=0;g<p[_].morphTargets.length;g++)f[p[_].morphTargets[g]]=-1;for(const g in f){const m=[],u=[];for(let x=0;x!==p[_].morphTargets.length;++x){const M=p[_];m.push(M.time),u.push(M.morphTarget===g?1:0)}r.push(new Ks(".morphTargetInfluence["+g+"]",m,u))}l=f.length*a}else{const f=".bones["+e[h].name+"]";n(pr,f+".position",p,"pos",r),n(Yr,f+".quaternion",p,"rot",r),n(pr,f+".scale",p,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,r=t.length;n!==r;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function j_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ks;case"vector":case"vector2":case"vector3":case"vector4":return pr;case"color":return ju;case"quaternion":return Yr;case"bool":case"boolean":return vr;case"string":return xr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function q_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=j_(i.type);if(i.times===void 0){const e=[],n=[];Xu(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const $s={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class qu{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,p=c.length;h<p;h+=2){const f=c[h],_=c[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return _}return null}}}const Yu=new qu;class Yn{constructor(t){this.manager=t!==void 0?t:Yu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Yn.DEFAULT_MATERIAL_NAME="__DEFAULT";const On={};class Y_ extends Error{constructor(t,e){super(t),this.response=e}}class ua extends Yn{constructor(t){super(t)}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=$s.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(On[t]!==void 0){On[t].push({onLoad:e,onProgress:n,onError:r});return}On[t]=[],On[t].push({onLoad:e,onProgress:n,onError:r});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=On[t],h=c.body.getReader(),p=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=p?parseInt(p):0,_=f!==0;let g=0;const m=new ReadableStream({start(u){x();function x(){h.read().then(({done:M,value:S})=>{if(M)u.close();else{g+=S.byteLength;const R=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let P=0,L=d.length;P<L;P++){const N=d[P];N.onProgress&&N.onProgress(R)}u.enqueue(S),x()}},M=>{u.error(M)})}}});return new Response(m)}else throw new Y_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),p=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(p);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{$s.add(t,c);const d=On[t];delete On[t];for(let h=0,p=d.length;h<p;h++){const f=d[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const d=On[t];if(d===void 0)throw this.manager.itemError(t),c;delete On[t];for(let h=0,p=d.length;h<p;h++){const f=d[h];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Z_ extends Yn{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=$s.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=Hr("img");function l(){d(),$s.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){d(),r&&r(h),s.manager.itemError(t),s.manager.itemEnd(t)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class K_ extends Yn{constructor(t){super(t)}load(t,e,n,r){const s=this,a=new Gu,o=new ua(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(t,function(l){let c;try{c=s.parse(l)}catch(d){if(r!==void 0)r(d);else{console.error(d);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:yn,a.wrapT=c.wrapT!==void 0?c.wrapT:yn,a.magFilter=c.magFilter!==void 0?c.magFilter:an,a.minFilter=c.minFilter!==void 0?c.minFilter:an,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Hn),c.mipmapCount===1&&(a.minFilter=an),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,e&&e(a,c)},n,r),a}}class Zu extends Yn{constructor(t){super(t)}load(t,e,n,r){const s=new Ve,a=new Z_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class Zr extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class $_ extends Zr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Za=new se,Nc=new $,Uc=new $;class ul{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rl,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Nc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nc),Uc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uc),e.updateMatrixWorld(),Za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Za)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class J_ extends ul{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=dr*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Q_ extends Zr{constructor(t,e,n=0,r=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new J_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Fc=new se,Cr=new $,Ka=new $;class t0 extends ul{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new Se(2,1,1,1),new Se(0,1,1,1),new Se(3,1,1,1),new Se(1,1,1,1),new Se(3,0,1,1),new Se(1,0,1,1)],this._cubeDirections=[new $(1,0,0),new $(-1,0,0),new $(0,0,1),new $(0,0,-1),new $(0,1,0),new $(0,-1,0)],this._cubeUps=[new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,1,0),new $(0,0,1),new $(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Cr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Cr),Ka.copy(n.position),Ka.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ka),n.updateMatrixWorld(),r.makeTranslation(-Cr.x,-Cr.y,-Cr.z),Fc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fc)}}class e0 extends Zr{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new t0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class n0 extends ul{constructor(){super(new sl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ku extends Zr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new n0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $u extends Zr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ju{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,r=t.length;n<r;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class i0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Oc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Oc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Oc(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ko}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ko);let Rr=null;function r0(i){window.addEventListener("resize",()=>{const t=window.innerWidth,e=window.innerHeight;Qu().setSize(t,e),i.aspect=t/e,i.updateProjectionMatrix()})}function Qu(){return Rr||(Rr=new N_,Rr.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(Rr.domElement)),Rr}class s0{constructor(t,e){Zt(this,"targetObject");Zt(this,"currentPosition");Zt(this,"currentLookat");Zt(this,"camera");this.targetObject=e,this.camera=t,this.currentPosition=new $,this.currentLookat=new $}getIdealOffset(){const t=new $(-1,.8,-2.5);return t.applyQuaternion(this.targetObject.quaternion),t.add(this.targetObject.position),t}getIdealLookat(){const t=new $(0,1,30);return t.applyQuaternion(this.targetObject.quaternion),t.add(this.targetObject.position),t}update(t){const e=this.getIdealOffset(),n=this.getIdealLookat();this.currentPosition=e,this.currentLookat=n,this.camera.position.copy(this.currentPosition),this.camera.lookAt(this.currentLookat)}}class a0{constructor(t){Zt(this,"camera");Zt(this,"thirdPersonCamera");this.camera=o0(),r0(this.camera),this.thirdPersonCamera=new s0(this.camera,t)}update(t){this.thirdPersonCamera.update(t)}getCamera(){return this.camera}}function o0(){const i=new We(75,window.innerWidth/window.innerHeight,.1,1e3);return i.position.set(0,2,5),i}function l0(i,t){i.actors.player.update(t),i.actors.table.update(t)}class c0{constructor(t,e,n){Zt(this,"room");Zt(this,"actors");Zt(this,"world");var r;this.room=t,this.actors=e,this.world=n,(r=t.cube.physicsController)==null||r.applyImpulse(new $(4.5,0,0))}getSimState(){return{actors:this.actors,room:this.room}}step(t){var e;l0(this.getSimState(),t),this.world.step(t/2),(e=this.room.cube.physicsController)==null||e.updateFromPhysics(this.room.cube.object)}}class u0{constructor(t,e){Zt(this,"actors");Zt(this,"inputListener");this.actors=t,this.inputListener=e}handleUserInput(){this.inputListener.getPlayerActions().forEach(t=>{t.execute(this.actors.player)}),this.inputListener.getArmCommands().forEach(t=>{var e;(e=this.actors.table.armController)==null||e.handleArmCommand(t)})}}class h0{constructor(t,e){Zt(this,"scene");Zt(this,"camera");this.scene=t,this.camera=e}render(){Qu().render(this.scene,this.camera)}}function d0(i){if(!(typeof window>"u")){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=i,document.head.appendChild(t),i}}function tr(i,t){var e=i.__state.conversionName.toString(),n=Math.round(i.r),r=Math.round(i.g),s=Math.round(i.b),a=i.a,o=Math.round(i.h),l=i.s.toFixed(1),c=i.v.toFixed(1);if(t||e==="THREE_CHAR_HEX"||e==="SIX_CHAR_HEX"){for(var d=i.hex.toString(16);d.length<6;)d="0"+d;return"#"+d}else{if(e==="CSS_RGB")return"rgb("+n+","+r+","+s+")";if(e==="CSS_RGBA")return"rgba("+n+","+r+","+s+","+a+")";if(e==="HEX")return"0x"+i.hex.toString(16);if(e==="RGB_ARRAY")return"["+n+","+r+","+s+"]";if(e==="RGBA_ARRAY")return"["+n+","+r+","+s+","+a+"]";if(e==="RGB_OBJ")return"{r:"+n+",g:"+r+",b:"+s+"}";if(e==="RGBA_OBJ")return"{r:"+n+",g:"+r+",b:"+s+",a:"+a+"}";if(e==="HSV_OBJ")return"{h:"+o+",s:"+l+",v:"+c+"}";if(e==="HSVA_OBJ")return"{h:"+o+",s:"+l+",v:"+c+",a:"+a+"}"}return"unknown format"}var kc=Array.prototype.forEach,Pr=Array.prototype.slice,bt={BREAK:{},extend:function(t){return this.each(Pr.call(arguments,1),function(e){var n=this.isObject(e)?Object.keys(e):[];n.forEach((function(r){this.isUndefined(e[r])||(t[r]=e[r])}).bind(this))},this),t},defaults:function(t){return this.each(Pr.call(arguments,1),function(e){var n=this.isObject(e)?Object.keys(e):[];n.forEach((function(r){this.isUndefined(t[r])&&(t[r]=e[r])}).bind(this))},this),t},compose:function(){var t=Pr.call(arguments);return function(){for(var e=Pr.call(arguments),n=t.length-1;n>=0;n--)e=[t[n].apply(this,e)];return e[0]}},each:function(t,e,n){if(t){if(kc&&t.forEach&&t.forEach===kc)t.forEach(e,n);else if(t.length===t.length+0){var r=void 0,s=void 0;for(r=0,s=t.length;r<s;r++)if(r in t&&e.call(n,t[r],r)===this.BREAK)return}else for(var a in t)if(e.call(n,t[a],a)===this.BREAK)return}},defer:function(t){setTimeout(t,0)},debounce:function(t,e,n){var r=void 0;return function(){var s=this,a=arguments;function o(){r=null,n||t.apply(s,a)}var l=n||!r;clearTimeout(r),r=setTimeout(o,e),l&&t.apply(s,a)}},toArray:function(t){return t.toArray?t.toArray():Pr.call(t)},isUndefined:function(t){return t===void 0},isNull:function(t){return t===null},isNaN:function(i){function t(e){return i.apply(this,arguments)}return t.toString=function(){return i.toString()},t}(function(i){return isNaN(i)}),isArray:Array.isArray||function(i){return i.constructor===Array},isObject:function(t){return t===Object(t)},isNumber:function(t){return t===t+0},isString:function(t){return t===t+""},isBoolean:function(t){return t===!1||t===!0},isFunction:function(t){return t instanceof Function}},f0=[{litmus:bt.isString,conversions:{THREE_CHAR_HEX:{read:function(t){var e=t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return e===null?!1:{space:"HEX",hex:parseInt("0x"+e[1].toString()+e[1].toString()+e[2].toString()+e[2].toString()+e[3].toString()+e[3].toString(),0)}},write:tr},SIX_CHAR_HEX:{read:function(t){var e=t.match(/^#([A-F0-9]{6})$/i);return e===null?!1:{space:"HEX",hex:parseInt("0x"+e[1].toString(),0)}},write:tr},CSS_RGB:{read:function(t){var e=t.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return e===null?!1:{space:"RGB",r:parseFloat(e[1]),g:parseFloat(e[2]),b:parseFloat(e[3])}},write:tr},CSS_RGBA:{read:function(t){var e=t.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return e===null?!1:{space:"RGB",r:parseFloat(e[1]),g:parseFloat(e[2]),b:parseFloat(e[3]),a:parseFloat(e[4])}},write:tr}}},{litmus:bt.isNumber,conversions:{HEX:{read:function(t){return{space:"HEX",hex:t,conversionName:"HEX"}},write:function(t){return t.hex}}}},{litmus:bt.isArray,conversions:{RGB_ARRAY:{read:function(t){return t.length!==3?!1:{space:"RGB",r:t[0],g:t[1],b:t[2]}},write:function(t){return[t.r,t.g,t.b]}},RGBA_ARRAY:{read:function(t){return t.length!==4?!1:{space:"RGB",r:t[0],g:t[1],b:t[2],a:t[3]}},write:function(t){return[t.r,t.g,t.b,t.a]}}}},{litmus:bt.isObject,conversions:{RGBA_OBJ:{read:function(t){return bt.isNumber(t.r)&&bt.isNumber(t.g)&&bt.isNumber(t.b)&&bt.isNumber(t.a)?{space:"RGB",r:t.r,g:t.g,b:t.b,a:t.a}:!1},write:function(t){return{r:t.r,g:t.g,b:t.b,a:t.a}}},RGB_OBJ:{read:function(t){return bt.isNumber(t.r)&&bt.isNumber(t.g)&&bt.isNumber(t.b)?{space:"RGB",r:t.r,g:t.g,b:t.b}:!1},write:function(t){return{r:t.r,g:t.g,b:t.b}}},HSVA_OBJ:{read:function(t){return bt.isNumber(t.h)&&bt.isNumber(t.s)&&bt.isNumber(t.v)&&bt.isNumber(t.a)?{space:"HSV",h:t.h,s:t.s,v:t.v,a:t.a}:!1},write:function(t){return{h:t.h,s:t.s,v:t.v,a:t.a}}},HSV_OBJ:{read:function(t){return bt.isNumber(t.h)&&bt.isNumber(t.s)&&bt.isNumber(t.v)?{space:"HSV",h:t.h,s:t.s,v:t.v}:!1},write:function(t){return{h:t.h,s:t.s,v:t.v}}}}}],Lr=void 0,Ps=void 0,Wo=function(){Ps=!1;var t=arguments.length>1?bt.toArray(arguments):arguments[0];return bt.each(f0,function(e){if(e.litmus(t))return bt.each(e.conversions,function(n,r){if(Lr=n.read(t),Ps===!1&&Lr!==!1)return Ps=Lr,Lr.conversionName=r,Lr.conversion=n,bt.BREAK}),bt.BREAK}),Ps},Bc=void 0,Js={hsv_to_rgb:function(t,e,n){var r=Math.floor(t/60)%6,s=t/60-Math.floor(t/60),a=n*(1-e),o=n*(1-s*e),l=n*(1-(1-s)*e),c=[[n,l,a],[o,n,a],[a,n,l],[a,o,n],[l,a,n],[n,a,o]][r];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(t,e,n){var r=Math.min(t,e,n),s=Math.max(t,e,n),a=s-r,o=void 0,l=void 0;if(s!==0)l=a/s;else return{h:NaN,s:0,v:0};return t===s?o=(e-n)/a:e===s?o=2+(n-t)/a:o=4+(t-e)/a,o/=6,o<0&&(o+=1),{h:o*360,s:l,v:s/255}},rgb_to_hex:function(t,e,n){var r=this.hex_with_component(0,2,t);return r=this.hex_with_component(r,1,e),r=this.hex_with_component(r,0,n),r},component_from_hex:function(t,e){return t>>e*8&255},hex_with_component:function(t,e,n){return n<<(Bc=e*8)|t&~(255<<Bc)}},p0=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Sn=function(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")},Mn=function(){function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),ci=function i(t,e,n){t===null&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(r===void 0){var s=Object.getPrototypeOf(t);return s===null?void 0:i(s,e,n)}else{if("value"in r)return r.value;var a=r.get;return a===void 0?void 0:a.call(n)}},di=function(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(i,t):i.__proto__=t)},fi=function(i,t){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:i},ze=function(){function i(){if(Sn(this,i),this.__state=Wo.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Mn(i,[{key:"toString",value:function(){return tr(this)}},{key:"toHexString",value:function(){return tr(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),i}();function hl(i,t,e){Object.defineProperty(i,t,{get:function(){return this.__state.space==="RGB"?this.__state[t]:(ze.recalculateRGB(this,t,e),this.__state[t])},set:function(r){this.__state.space!=="RGB"&&(ze.recalculateRGB(this,t,e),this.__state.space="RGB"),this.__state[t]=r}})}function dl(i,t){Object.defineProperty(i,t,{get:function(){return this.__state.space==="HSV"?this.__state[t]:(ze.recalculateHSV(this),this.__state[t])},set:function(n){this.__state.space!=="HSV"&&(ze.recalculateHSV(this),this.__state.space="HSV"),this.__state[t]=n}})}ze.recalculateRGB=function(i,t,e){if(i.__state.space==="HEX")i.__state[t]=Js.component_from_hex(i.__state.hex,e);else if(i.__state.space==="HSV")bt.extend(i.__state,Js.hsv_to_rgb(i.__state.h,i.__state.s,i.__state.v));else throw new Error("Corrupted color state")};ze.recalculateHSV=function(i){var t=Js.rgb_to_hsv(i.r,i.g,i.b);bt.extend(i.__state,{s:t.s,v:t.v}),bt.isNaN(t.h)?bt.isUndefined(i.__state.h)&&(i.__state.h=0):i.__state.h=t.h};ze.COMPONENTS=["r","g","b","h","s","v","hex","a"];hl(ze.prototype,"r",2);hl(ze.prototype,"g",1);hl(ze.prototype,"b",0);dl(ze.prototype,"h");dl(ze.prototype,"s");dl(ze.prototype,"v");Object.defineProperty(ze.prototype,"a",{get:function(){return this.__state.a},set:function(t){this.__state.a=t}});Object.defineProperty(ze.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Js.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(t){this.__state.space="HEX",this.__state.hex=t}});var Li=function(){function i(t,e){Sn(this,i),this.initialValue=t[e],this.domElement=document.createElement("div"),this.object=t,this.property=e,this.__onChange=void 0,this.__onFinishChange=void 0}return Mn(i,[{key:"onChange",value:function(e){return this.__onChange=e,this}},{key:"onFinishChange",value:function(e){return this.__onFinishChange=e,this}},{key:"setValue",value:function(e){return this.object[this.property]=e,this.__onChange&&this.__onChange.call(this,e),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),i}(),m0={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},th={};bt.each(m0,function(i,t){bt.each(i,function(e){th[e]=t})});var g0=/(\d+(\.\d+)?)px/;function wn(i){if(i==="0"||bt.isUndefined(i))return 0;var t=i.match(g0);return bt.isNull(t)?0:parseFloat(t[1])}var lt={makeSelectable:function(t,e){t===void 0||t.style===void 0||(t.onselectstart=e?function(){return!1}:function(){},t.style.MozUserSelect=e?"auto":"none",t.style.KhtmlUserSelect=e?"auto":"none",t.unselectable=e?"on":"off")},makeFullscreen:function(t,e,n){var r=n,s=e;bt.isUndefined(s)&&(s=!0),bt.isUndefined(r)&&(r=!0),t.style.position="absolute",s&&(t.style.left=0,t.style.right=0),r&&(t.style.top=0,t.style.bottom=0)},fakeEvent:function(t,e,n,r){var s=n||{},a=th[e];if(!a)throw new Error("Event type "+e+" not supported.");var o=document.createEvent(a);switch(a){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;o.initMouseEvent(e,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var d=o.initKeyboardEvent||o.initKeyEvent;bt.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),d(e,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{o.initEvent(e,s.bubbles||!1,s.cancelable||!0);break}}bt.defaults(o,r),t.dispatchEvent(o)},bind:function(t,e,n,r){var s=r||!1;return t.addEventListener?t.addEventListener(e,n,s):t.attachEvent&&t.attachEvent("on"+e,n),lt},unbind:function(t,e,n,r){var s=r||!1;return t.removeEventListener?t.removeEventListener(e,n,s):t.detachEvent&&t.detachEvent("on"+e,n),lt},addClass:function(t,e){if(t.className===void 0)t.className=e;else if(t.className!==e){var n=t.className.split(/ +/);n.indexOf(e)===-1&&(n.push(e),t.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return lt},removeClass:function(t,e){if(e)if(t.className===e)t.removeAttribute("class");else{var n=t.className.split(/ +/),r=n.indexOf(e);r!==-1&&(n.splice(r,1),t.className=n.join(" "))}else t.className=void 0;return lt},hasClass:function(t,e){return new RegExp("(?:^|\\s+)"+e+"(?:\\s+|$)").test(t.className)||!1},getWidth:function(t){var e=getComputedStyle(t);return wn(e["border-left-width"])+wn(e["border-right-width"])+wn(e["padding-left"])+wn(e["padding-right"])+wn(e.width)},getHeight:function(t){var e=getComputedStyle(t);return wn(e["border-top-width"])+wn(e["border-bottom-width"])+wn(e["padding-top"])+wn(e["padding-bottom"])+wn(e.height)},getOffset:function(t){var e=t,n={left:0,top:0};if(e.offsetParent)do n.left+=e.offsetLeft,n.top+=e.offsetTop,e=e.offsetParent;while(e);return n},isActive:function(t){return t===document.activeElement&&(t.type||t.href)}},eh=function(i){di(t,i);function t(e,n){Sn(this,t);var r=fi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),s=r;r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox");function a(){s.setValue(!s.__prev)}return lt.bind(r.__checkbox,"change",a,!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return Mn(t,[{key:"setValue",value:function(n){var r=ci(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),ci(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(Li),_0=function(i){di(t,i);function t(e,n,r){Sn(this,t);var s=fi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),a=r,o=s;if(s.__select=document.createElement("select"),bt.isArray(a)){var l={};bt.each(a,function(c){l[c]=c}),a=l}return bt.each(a,function(c,d){var h=document.createElement("option");h.innerHTML=d,h.setAttribute("value",c),o.__select.appendChild(h)}),s.updateDisplay(),lt.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;o.setValue(c)}),s.domElement.appendChild(s.__select),s}return Mn(t,[{key:"setValue",value:function(n){var r=ci(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r}},{key:"updateDisplay",value:function(){return lt.isActive(this.__select)?this:(this.__select.value=this.getValue(),ci(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this))}}]),t}(Li),v0=function(i){di(t,i);function t(e,n){Sn(this,t);var r=fi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),s=r;function a(){s.setValue(s.__input.value)}function o(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),lt.bind(r.__input,"keyup",a),lt.bind(r.__input,"change",a),lt.bind(r.__input,"blur",o),lt.bind(r.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return Mn(t,[{key:"updateDisplay",value:function(){return lt.isActive(this.__input)||(this.__input.value=this.getValue()),ci(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(Li);function zc(i){var t=i.toString();return t.indexOf(".")>-1?t.length-t.indexOf(".")-1:0}var nh=function(i){di(t,i);function t(e,n,r){Sn(this,t);var s=fi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),a=r||{};return s.__min=a.min,s.__max=a.max,s.__step=a.step,bt.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=zc(s.__impliedStep),s}return Mn(t,[{key:"setValue",value:function(n){var r=n;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),ci(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,r)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=zc(n),this}}]),t}(Li);function x0(i,t){var e=Math.pow(10,t);return Math.round(i*e)/e}var Qs=function(i){di(t,i);function t(e,n,r){Sn(this,t);var s=fi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,r));s.__truncationSuspended=!1;var a=s,o=void 0;function l(){var _=parseFloat(a.__input.value);bt.isNaN(_)||a.setValue(_)}function c(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}function d(){c()}function h(_){var g=o-_.clientY;a.setValue(a.getValue()+g*a.__impliedStep),o=_.clientY}function p(){lt.unbind(window,"mousemove",h),lt.unbind(window,"mouseup",p),c()}function f(_){lt.bind(window,"mousemove",h),lt.bind(window,"mouseup",p),o=_.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),lt.bind(s.__input,"change",l),lt.bind(s.__input,"blur",d),lt.bind(s.__input,"mousedown",f),lt.bind(s.__input,"keydown",function(_){_.keyCode===13&&(a.__truncationSuspended=!0,this.blur(),a.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Mn(t,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():x0(this.getValue(),this.__precision),ci(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(nh);function Vc(i,t,e,n,r){return n+(r-n)*((i-t)/(e-t))}var Xo=function(i){di(t,i);function t(e,n,r,s,a){Sn(this,t);var o=fi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,{min:r,max:s,step:a})),l=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),lt.bind(o.__background,"mousedown",c),lt.bind(o.__background,"touchstart",p),lt.addClass(o.__background,"slider"),lt.addClass(o.__foreground,"slider-fg");function c(g){document.activeElement.blur(),lt.bind(window,"mousemove",d),lt.bind(window,"mouseup",h),d(g)}function d(g){g.preventDefault();var m=l.__background.getBoundingClientRect();return l.setValue(Vc(g.clientX,m.left,m.right,l.__min,l.__max)),!1}function h(){lt.unbind(window,"mousemove",d),lt.unbind(window,"mouseup",h),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function p(g){g.touches.length===1&&(lt.bind(window,"touchmove",f),lt.bind(window,"touchend",_),f(g))}function f(g){var m=g.touches[0].clientX,u=l.__background.getBoundingClientRect();l.setValue(Vc(m,u.left,u.right,l.__min,l.__max))}function _(){lt.unbind(window,"touchmove",f),lt.unbind(window,"touchend",_),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return Mn(t,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",ci(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(nh),ih=function(i){di(t,i);function t(e,n,r){Sn(this,t);var s=fi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),a=s;return s.__button=document.createElement("div"),s.__button.innerHTML=r===void 0?"Fire":r,lt.bind(s.__button,"click",function(o){return o.preventDefault(),a.fire(),!1}),lt.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return Mn(t,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),t}(Li),jo=function(i){di(t,i);function t(e,n){Sn(this,t);var r=fi(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));r.__color=new ze(r.getValue()),r.__temp=new ze(0);var s=r;r.domElement=document.createElement("div"),lt.makeSelectable(r.domElement,!1),r.__selector=document.createElement("div"),r.__selector.className="selector",r.__saturation_field=document.createElement("div"),r.__saturation_field.className="saturation-field",r.__field_knob=document.createElement("div"),r.__field_knob.className="field-knob",r.__field_knob_border="2px solid ",r.__hue_knob=document.createElement("div"),r.__hue_knob.className="hue-knob",r.__hue_field=document.createElement("div"),r.__hue_field.className="hue-field",r.__input=document.createElement("input"),r.__input.type="text",r.__input_textShadow="0 1px 1px ",lt.bind(r.__input,"keydown",function(g){g.keyCode===13&&h.call(this)}),lt.bind(r.__input,"blur",h),lt.bind(r.__selector,"mousedown",function(){lt.addClass(this,"drag").bind(window,"mouseup",function(){lt.removeClass(s.__selector,"drag")})}),lt.bind(r.__selector,"touchstart",function(){lt.addClass(this,"drag").bind(window,"touchend",function(){lt.removeClass(s.__selector,"drag")})});var a=document.createElement("div");bt.extend(r.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),bt.extend(r.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:r.__field_knob_border+(r.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),bt.extend(r.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),bt.extend(r.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),bt.extend(a.style,{width:"100%",height:"100%",background:"none"}),Hc(a,"top","rgba(0,0,0,0)","#000"),bt.extend(r.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),b0(r.__hue_field),bt.extend(r.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:r.__input_textShadow+"rgba(0,0,0,0.7)"}),lt.bind(r.__saturation_field,"mousedown",o),lt.bind(r.__saturation_field,"touchstart",o),lt.bind(r.__field_knob,"mousedown",o),lt.bind(r.__field_knob,"touchstart",o),lt.bind(r.__hue_field,"mousedown",l),lt.bind(r.__hue_field,"touchstart",l);function o(g){f(g),lt.bind(window,"mousemove",f),lt.bind(window,"touchmove",f),lt.bind(window,"mouseup",c),lt.bind(window,"touchend",c)}function l(g){_(g),lt.bind(window,"mousemove",_),lt.bind(window,"touchmove",_),lt.bind(window,"mouseup",d),lt.bind(window,"touchend",d)}function c(){lt.unbind(window,"mousemove",f),lt.unbind(window,"touchmove",f),lt.unbind(window,"mouseup",c),lt.unbind(window,"touchend",c),p()}function d(){lt.unbind(window,"mousemove",_),lt.unbind(window,"touchmove",_),lt.unbind(window,"mouseup",d),lt.unbind(window,"touchend",d),p()}function h(){var g=Wo(this.value);g!==!1?(s.__color.__state=g,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function p(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}r.__saturation_field.appendChild(a),r.__selector.appendChild(r.__field_knob),r.__selector.appendChild(r.__saturation_field),r.__selector.appendChild(r.__hue_field),r.__hue_field.appendChild(r.__hue_knob),r.domElement.appendChild(r.__input),r.domElement.appendChild(r.__selector),r.updateDisplay();function f(g){g.type.indexOf("touch")===-1&&g.preventDefault();var m=s.__saturation_field.getBoundingClientRect(),u=g.touches&&g.touches[0]||g,x=u.clientX,M=u.clientY,S=(x-m.left)/(m.right-m.left),R=1-(M-m.top)/(m.bottom-m.top);return R>1?R=1:R<0&&(R=0),S>1?S=1:S<0&&(S=0),s.__color.v=R,s.__color.s=S,s.setValue(s.__color.toOriginal()),!1}function _(g){g.type.indexOf("touch")===-1&&g.preventDefault();var m=s.__hue_field.getBoundingClientRect(),u=g.touches&&g.touches[0]||g,x=u.clientY,M=1-(x-m.top)/(m.bottom-m.top);return M>1?M=1:M<0&&(M=0),s.__color.h=M*360,s.setValue(s.__color.toOriginal()),!1}return r}return Mn(t,[{key:"updateDisplay",value:function(){var n=Wo(this.getValue());if(n!==!1){var r=!1;bt.each(ze.COMPONENTS,function(o){if(!bt.isUndefined(n[o])&&!bt.isUndefined(this.__color.__state[o])&&n[o]!==this.__color.__state[o])return r=!0,{}},this),r&&bt.extend(this.__color.__state,n)}bt.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,a=255-s;bt.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Hc(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),bt.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+a+","+a+","+a+",.7)"})}}]),t}(Li),y0=["-moz-","-o-","-webkit-","-ms-",""];function Hc(i,t,e,n){i.style.background="",bt.each(y0,function(r){i.style.cssText+="background: "+r+"linear-gradient("+t+", "+e+" 0%, "+n+" 100%); "})}function b0(i){i.style.background="",i.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",i.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var S0={load:function(t,e){var n=e||document,r=n.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=t,n.getElementsByTagName("head")[0].appendChild(r)},inject:function(t,e){var n=e||document,r=document.createElement("style");r.type="text/css",r.innerHTML=t;var s=n.getElementsByTagName("head")[0];try{s.appendChild(r)}catch{}}},M0=`<div id="dg-save" class="dg dialogue">

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

</div>`,w0=function(t,e){var n=t[e];return bt.isArray(arguments[2])||bt.isObject(arguments[2])?new _0(t,e,arguments[2]):bt.isNumber(n)?bt.isNumber(arguments[2])&&bt.isNumber(arguments[3])?bt.isNumber(arguments[4])?new Xo(t,e,arguments[2],arguments[3],arguments[4]):new Xo(t,e,arguments[2],arguments[3]):bt.isNumber(arguments[4])?new Qs(t,e,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Qs(t,e,{min:arguments[2],max:arguments[3]}):bt.isString(n)?new v0(t,e):bt.isFunction(n)?new ih(t,e,""):bt.isBoolean(n)?new eh(t,e):null};function E0(i){setTimeout(i,1e3/60)}var T0=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||E0,A0=function(){function i(){Sn(this,i),this.backgroundElement=document.createElement("div"),bt.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),lt.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),bt.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var t=this;lt.bind(this.backgroundElement,"click",function(){t.hide()})}return Mn(i,[{key:"show",value:function(){var e=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),bt.defer(function(){e.backgroundElement.style.opacity=1,e.domElement.style.opacity=1,e.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var e=this,n=function r(){e.domElement.style.display="none",e.backgroundElement.style.display="none",lt.unbind(e.domElement,"webkitTransitionEnd",r),lt.unbind(e.domElement,"transitionend",r),lt.unbind(e.domElement,"oTransitionEnd",r)};lt.bind(this.domElement,"webkitTransitionEnd",n),lt.bind(this.domElement,"transitionend",n),lt.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-lt.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-lt.getHeight(this.domElement)/2+"px"}}]),i}(),C0=d0(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);S0.inject(C0);var Gc="dg",Wc=72,Xc=20,Gr="Default",Fr=function(){try{return!!window.localStorage}catch{return!1}}(),Br=void 0,jc=!0,$i=void 0,$a=!1,rh=[],Ce=function i(t){var e=this,n=t||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),lt.addClass(this.domElement,Gc),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=bt.defaults(n,{closeOnTop:!1,autoPlace:!0,width:i.DEFAULT_WIDTH}),n=bt.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),bt.isUndefined(n.load)?n.load={preset:Gr}:n.preset&&(n.load.preset=n.preset),bt.isUndefined(n.parent)&&n.hideable&&rh.push(this),n.resizable=bt.isUndefined(n.parent)&&n.resizable,n.autoPlace&&bt.isUndefined(n.scrollable)&&(n.scrollable=!0);var r=Fr&&localStorage.getItem(Ji(this,"isLocal"))==="true",s=void 0,a=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return e.parent?e.getRoot().preset:n.load.preset},set:function(p){e.parent?e.getRoot().preset=p:n.load.preset=p,I0(this),e.revert()}},width:{get:function(){return n.width},set:function(p){n.width=p,Zo(e,p)}},name:{get:function(){return n.name},set:function(p){n.name=p,a&&(a.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(p){n.closed=p,n.closed?lt.addClass(e.__ul,i.CLASS_CLOSED):lt.removeClass(e.__ul,i.CLASS_CLOSED),this.onResize(),e.__closeButton&&(e.__closeButton.innerHTML=p?i.TEXT_OPEN:i.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return r},set:function(p){Fr&&(r=p,p?lt.bind(window,"unload",s):lt.unbind(window,"unload",s),localStorage.setItem(Ji(e,"isLocal"),p))}}}),bt.isUndefined(n.parent)){if(this.closed=n.closed||!1,lt.addClass(this.domElement,i.CLASS_MAIN),lt.makeSelectable(this.domElement,!1),Fr&&r){e.useLocalStorage=!0;var o=localStorage.getItem(Ji(this,"gui"));o&&(n.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=i.TEXT_CLOSED,lt.addClass(this.__closeButton,i.CLASS_CLOSE_BUTTON),n.closeOnTop?(lt.addClass(this.__closeButton,i.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(lt.addClass(this.__closeButton,i.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),lt.bind(this.__closeButton,"click",function(){e.closed=!e.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);lt.addClass(l,"controller-name"),a=fl(e,l);var c=function(p){return p.preventDefault(),e.closed=!e.closed,!1};lt.addClass(this.__ul,i.CLASS_CLOSED),lt.addClass(a,"title"),lt.bind(a,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(bt.isUndefined(n.parent)&&(jc&&($i=document.createElement("div"),lt.addClass($i,Gc),lt.addClass($i,i.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild($i),jc=!1),$i.appendChild(this.domElement),lt.addClass(this.domElement,i.CLASS_AUTO_PLACE)),this.parent||Zo(e,n.width)),this.__resizeHandler=function(){e.onResizeDebounced()},lt.bind(window,"resize",this.__resizeHandler),lt.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),lt.bind(this.__ul,"transitionend",this.__resizeHandler),lt.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&L0(this),s=function(){Fr&&localStorage.getItem(Ji(e,"isLocal"))==="true"&&localStorage.setItem(Ji(e,"gui"),JSON.stringify(e.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function d(){var h=e.getRoot();h.width+=1,bt.defer(function(){h.width-=1})}n.parent||d()};Ce.toggleHide=function(){$a=!$a,bt.each(rh,function(i){i.domElement.style.display=$a?"none":""})};Ce.CLASS_AUTO_PLACE="a";Ce.CLASS_AUTO_PLACE_CONTAINER="ac";Ce.CLASS_MAIN="main";Ce.CLASS_CONTROLLER_ROW="cr";Ce.CLASS_TOO_TALL="taller-than-window";Ce.CLASS_CLOSED="closed";Ce.CLASS_CLOSE_BUTTON="close-button";Ce.CLASS_CLOSE_TOP="close-top";Ce.CLASS_CLOSE_BOTTOM="close-bottom";Ce.CLASS_DRAG="drag";Ce.DEFAULT_WIDTH=245;Ce.TEXT_CLOSED="Close Controls";Ce.TEXT_OPEN="Open Controls";Ce._keydownHandler=function(i){document.activeElement.type!=="text"&&(i.which===Wc||i.keyCode===Wc)&&Ce.toggleHide()};lt.bind(window,"keydown",Ce._keydownHandler,!1);bt.extend(Ce.prototype,{add:function(t,e){return zr(this,t,e,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(t,e){return zr(this,t,e,{color:!0})},remove:function(t){this.__ul.removeChild(t.__li),this.__controllers.splice(this.__controllers.indexOf(t),1);var e=this;bt.defer(function(){e.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&$i.removeChild(this.domElement);var t=this;bt.each(this.__folders,function(e){t.removeFolder(e)}),lt.unbind(window,"keydown",Ce._keydownHandler,!1),qc(this)},addFolder:function(t){if(this.__folders[t]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+t+'"');var e={name:t,parent:this};e.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[t]&&(e.closed=this.load.folders[t].closed,e.load=this.load.folders[t]);var n=new Ce(e);this.__folders[t]=n;var r=fl(this,n.domElement);return lt.addClass(r,"folder"),n},removeFolder:function(t){this.__ul.removeChild(t.domElement.parentElement),delete this.__folders[t.name],this.load&&this.load.folders&&this.load.folders[t.name]&&delete this.load.folders[t.name],qc(t);var e=this;bt.each(t.__folders,function(n){t.removeFolder(n)}),bt.defer(function(){e.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var t=this.getRoot();if(t.scrollable){var e=lt.getOffset(t.__ul).top,n=0;bt.each(t.__ul.childNodes,function(r){t.autoPlace&&r===t.__save_row||(n+=lt.getHeight(r))}),window.innerHeight-e-Xc<n?(lt.addClass(t.domElement,Ce.CLASS_TOO_TALL),t.__ul.style.height=window.innerHeight-e-Xc+"px"):(lt.removeClass(t.domElement,Ce.CLASS_TOO_TALL),t.__ul.style.height="auto")}t.__resize_handle&&bt.defer(function(){t.__resize_handle.style.height=t.__ul.offsetHeight+"px"}),t.__closeButton&&(t.__closeButton.style.width=t.width+"px")},onResizeDebounced:bt.debounce(function(){this.onResize()},50),remember:function(){if(bt.isUndefined(Br)&&(Br=new A0,Br.domElement.innerHTML=M0),this.parent)throw new Error("You can only call remember on a top level GUI.");var t=this;bt.each(Array.prototype.slice.call(arguments),function(e){t.__rememberedObjects.length===0&&P0(t),t.__rememberedObjects.indexOf(e)===-1&&t.__rememberedObjects.push(e)}),this.autoPlace&&Zo(this,this.width)},getRoot:function(){for(var t=this;t.parent;)t=t.parent;return t},getSaveObject:function(){var t=this.load;return t.closed=this.closed,this.__rememberedObjects.length>0&&(t.preset=this.preset,t.remembered||(t.remembered={}),t.remembered[this.preset]=Ls(this)),t.folders={},bt.each(this.__folders,function(e,n){t.folders[n]=e.getSaveObject()}),t},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Ls(this),qo(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(t){this.load.remembered||(this.load.remembered={},this.load.remembered[Gr]=Ls(this,!0)),this.load.remembered[t]=Ls(this),this.preset=t,Yo(this,t,!0),this.saveToLocalStorageIfPossible()},revert:function(t){bt.each(this.__controllers,function(e){this.getRoot().load.remembered?sh(t||this.getRoot(),e):e.setValue(e.initialValue),e.__onFinishChange&&e.__onFinishChange.call(e,e.getValue())},this),bt.each(this.__folders,function(e){e.revert(e)}),t||qo(this.getRoot(),!1)},listen:function(t){var e=this.__listening.length===0;this.__listening.push(t),e&&ah(this.__listening)},updateDisplay:function(){bt.each(this.__controllers,function(t){t.updateDisplay()}),bt.each(this.__folders,function(t){t.updateDisplay()})}});function fl(i,t,e){var n=document.createElement("li");return t&&n.appendChild(t),e?i.__ul.insertBefore(n,e):i.__ul.appendChild(n),i.onResize(),n}function qc(i){lt.unbind(window,"resize",i.__resizeHandler),i.saveToLocalStorageIfPossible&&lt.unbind(window,"unload",i.saveToLocalStorageIfPossible)}function qo(i,t){var e=i.__preset_select[i.__preset_select.selectedIndex];t?e.innerHTML=e.value+"*":e.innerHTML=e.value}function R0(i,t,e){if(e.__li=t,e.__gui=i,bt.extend(e,{options:function(a){if(arguments.length>1){var o=e.__li.nextElementSibling;return e.remove(),zr(i,e.object,e.property,{before:o,factoryArgs:[bt.toArray(arguments)]})}if(bt.isArray(a)||bt.isObject(a)){var l=e.__li.nextElementSibling;return e.remove(),zr(i,e.object,e.property,{before:l,factoryArgs:[a]})}},name:function(a){return e.__li.firstElementChild.firstElementChild.innerHTML=a,e},listen:function(){return e.__gui.listen(e),e},remove:function(){return e.__gui.remove(e),e}}),e instanceof Xo){var n=new Qs(e.object,e.property,{min:e.__min,max:e.__max,step:e.__step});bt.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var a=e[s],o=n[s];e[s]=n[s]=function(){var l=Array.prototype.slice.call(arguments);return o.apply(n,l),a.apply(e,l)}}),lt.addClass(t,"has-slider"),e.domElement.insertBefore(n.domElement,e.domElement.firstElementChild)}else if(e instanceof Qs){var r=function(a){if(bt.isNumber(e.__min)&&bt.isNumber(e.__max)){var o=e.__li.firstElementChild.firstElementChild.innerHTML,l=e.__gui.__listening.indexOf(e)>-1;e.remove();var c=zr(i,e.object,e.property,{before:e.__li.nextElementSibling,factoryArgs:[e.__min,e.__max,e.__step]});return c.name(o),l&&c.listen(),c}return a};e.min=bt.compose(r,e.min),e.max=bt.compose(r,e.max)}else e instanceof eh?(lt.bind(t,"click",function(){lt.fakeEvent(e.__checkbox,"click")}),lt.bind(e.__checkbox,"click",function(s){s.stopPropagation()})):e instanceof ih?(lt.bind(t,"click",function(){lt.fakeEvent(e.__button,"click")}),lt.bind(t,"mouseover",function(){lt.addClass(e.__button,"hover")}),lt.bind(t,"mouseout",function(){lt.removeClass(e.__button,"hover")})):e instanceof jo&&(lt.addClass(t,"color"),e.updateDisplay=bt.compose(function(s){return t.style.borderLeftColor=e.__color.toString(),s},e.updateDisplay),e.updateDisplay());e.setValue=bt.compose(function(s){return i.getRoot().__preset_select&&e.isModified()&&qo(i.getRoot(),!0),s},e.setValue)}function sh(i,t){var e=i.getRoot(),n=e.__rememberedObjects.indexOf(t.object);if(n!==-1){var r=e.__rememberedObjectIndecesToControllers[n];if(r===void 0&&(r={},e.__rememberedObjectIndecesToControllers[n]=r),r[t.property]=t,e.load&&e.load.remembered){var s=e.load.remembered,a=void 0;if(s[i.preset])a=s[i.preset];else if(s[Gr])a=s[Gr];else return;if(a[n]&&a[n][t.property]!==void 0){var o=a[n][t.property];t.initialValue=o,t.setValue(o)}}}}function zr(i,t,e,n){if(t[e]===void 0)throw new Error('Object "'+t+'" has no property "'+e+'"');var r=void 0;if(n.color)r=new jo(t,e);else{var s=[t,e].concat(n.factoryArgs);r=w0.apply(i,s)}n.before instanceof Li&&(n.before=n.before.__li),sh(i,r),lt.addClass(r.domElement,"c");var a=document.createElement("span");lt.addClass(a,"property-name"),a.innerHTML=r.property;var o=document.createElement("div");o.appendChild(a),o.appendChild(r.domElement);var l=fl(i,o,n.before);return lt.addClass(l,Ce.CLASS_CONTROLLER_ROW),r instanceof jo?lt.addClass(l,"color"):lt.addClass(l,p0(r.getValue())),R0(i,l,r),i.__controllers.push(r),r}function Ji(i,t){return document.location.href+"."+t}function Yo(i,t,e){var n=document.createElement("option");n.innerHTML=t,n.value=t,i.__preset_select.appendChild(n),e&&(i.__preset_select.selectedIndex=i.__preset_select.length-1)}function Yc(i,t){t.style.display=i.useLocalStorage?"block":"none"}function P0(i){var t=i.__save_row=document.createElement("li");lt.addClass(i.domElement,"has-save"),i.__ul.insertBefore(t,i.__ul.firstChild),lt.addClass(t,"save-row");var e=document.createElement("span");e.innerHTML="&nbsp;",lt.addClass(e,"button gears");var n=document.createElement("span");n.innerHTML="Save",lt.addClass(n,"button"),lt.addClass(n,"save");var r=document.createElement("span");r.innerHTML="New",lt.addClass(r,"button"),lt.addClass(r,"save-as");var s=document.createElement("span");s.innerHTML="Revert",lt.addClass(s,"button"),lt.addClass(s,"revert");var a=i.__preset_select=document.createElement("select");if(i.load&&i.load.remembered?bt.each(i.load.remembered,function(h,p){Yo(i,p,p===i.preset)}):Yo(i,Gr,!1),lt.bind(a,"change",function(){for(var h=0;h<i.__preset_select.length;h++)i.__preset_select[h].innerHTML=i.__preset_select[h].value;i.preset=this.value}),t.appendChild(a),t.appendChild(e),t.appendChild(n),t.appendChild(r),t.appendChild(s),Fr){var o=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Ji(i,"isLocal"))==="true"&&l.setAttribute("checked","checked"),Yc(i,o),lt.bind(l,"change",function(){i.useLocalStorage=!i.useLocalStorage,Yc(i,o)})}var d=document.getElementById("dg-new-constructor");lt.bind(d,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&Br.hide()}),lt.bind(e,"click",function(){d.innerHTML=JSON.stringify(i.getSaveObject(),void 0,2),Br.show(),d.focus(),d.select()}),lt.bind(n,"click",function(){i.save()}),lt.bind(r,"click",function(){var h=prompt("Enter a new preset name.");h&&i.saveAs(h)}),lt.bind(s,"click",function(){i.revert()})}function L0(i){var t=void 0;i.__resize_handle=document.createElement("div"),bt.extend(i.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function e(s){return s.preventDefault(),i.width+=t-s.clientX,i.onResize(),t=s.clientX,!1}function n(){lt.removeClass(i.__closeButton,Ce.CLASS_DRAG),lt.unbind(window,"mousemove",e),lt.unbind(window,"mouseup",n)}function r(s){return s.preventDefault(),t=s.clientX,lt.addClass(i.__closeButton,Ce.CLASS_DRAG),lt.bind(window,"mousemove",e),lt.bind(window,"mouseup",n),!1}lt.bind(i.__resize_handle,"mousedown",r),lt.bind(i.__closeButton,"mousedown",r),i.domElement.insertBefore(i.__resize_handle,i.domElement.firstElementChild)}function Zo(i,t){i.domElement.style.width=t+"px",i.__save_row&&i.autoPlace&&(i.__save_row.style.width=t+"px"),i.__closeButton&&(i.__closeButton.style.width=t+"px")}function Ls(i,t){var e={};return bt.each(i.__rememberedObjects,function(n,r){var s={},a=i.__rememberedObjectIndecesToControllers[r];bt.each(a,function(o,l){s[l]=t?o.initialValue:o.getValue()}),e[r]=s}),e}function I0(i){for(var t=0;t<i.__preset_select.length;t++)i.__preset_select[t].value===i.preset&&(i.__preset_select.selectedIndex=t)}function ah(i){i.length!==0&&T0.call(window,function(){ah(i)}),bt.each(i,function(t){t.updateDisplay()})}var D0=Ce,Wr=(i=>(i[i.OpticalTable=0]="OpticalTable",i))(Wr||{}),pl=(i=>(i[i.OpticalTable=0]="OpticalTable",i))(pl||{}),ar=(i=>(i[i.Idle=0]="Idle",i[i.Moving=1]="Moving",i))(ar||{}),Cn=(i=>(i[i.GOTO_A=0]="GOTO_A",i[i.GOTO_B=1]="GOTO_B",i[i.STOP=2]="STOP",i))(Cn||{}),Xr=(i=>(i[i.PLAYER_MOVE=0]="PLAYER_MOVE",i[i.PLAYER_ROTATE=1]="PLAYER_ROTATE",i))(Xr||{});class N0{constructor(){Zt(this,"gui");Zt(this,"actionQueue",[]);this.gui=new D0;const t=this.gui.addFolder("Table");t.add({armGotoA:()=>this.armGotoA()},"armGotoA").name("Position A"),t.add({armGotoB:()=>this.armGotoB()},"armGotoB").name("Position B"),t.add({armStop:()=>this.armStop()},"armStop").name("STOP"),t.open()}armGotoA(){console.log("armGotoA command"),this.actionQueue.push(Cn.GOTO_A)}armGotoB(){console.log("armGotoB command"),this.actionQueue.push(Cn.GOTO_B)}armStop(){console.log("armStop command"),this.actionQueue.push(Cn.STOP)}getAndClearQueue(){const t=[...this.actionQueue];return this.actionQueue=[],t}}class U0{constructor(){Zt(this,"keyDown");window.addEventListener("keydown",t=>this.onKeyDown(t)),window.addEventListener("keyup",t=>this.onKeyUp(t)),this.keyDown={ArrowUp:!1,ArrowDown:!1,ArrowLeft:!1,ArrowRight:!1," ":!1,w:!1}}onKeyDown(t){this.keyDown[t.key]=!0}onKeyUp(t){this.keyDown[t.key]=!1}}class Zc{constructor(t){Zt(this,"action");this.action=t}execute(t){if(!t.playerController)return;let e=t.playerController;switch(this.action.type){case Xr.PLAYER_MOVE:e.handleMove(this.action.payload);break;case Xr.PLAYER_ROTATE:e.handleRotation(this.action.payload)}}}class F0{constructor(t){Zt(this,"keyboardListener");Zt(this,"dashboardController");this.dashboardController=t,this.keyboardListener=new U0}getMoveAction(){const t={forward:!1,backward:!1,left:!1,right:!1},e=this.keyboardListener.keyDown;(e.ArrowUp||e.w)&&(t.forward=!0),(e.ArrowDown||e.s)&&(t.backward=!0),(e.ArrowLeft||e.a)&&(t.left=!0),(e.ArrowRight||e.d)&&(t.right=!0);const n={type:Xr.PLAYER_MOVE,payload:t};return new Zc(n)}getRotateAction(){const t={left:!1,right:!1},e=this.keyboardListener.keyDown;e.q&&(t.left=!0),e.e&&(t.right=!0);const n={type:Xr.PLAYER_ROTATE,payload:t};return new Zc(n)}getPlayerActions(){const t=[];return t.push(this.getMoveAction()),t.push(this.getRotateAction()),t}getArmCommands(){return this.dashboardController.getAndClearQueue()}}class O0{constructor(t,e,n,r){Zt(this,"dashboardController");Zt(this,"actorController");Zt(this,"cameraController");Zt(this,"renderController");Zt(this,"simulationLoop");Zt(this,"clock");Zt(this,"runSimulationLoop",()=>{this.processNextFrame(),requestAnimationFrame(this.runSimulationLoop)});this.cameraController=new a0(e.player.object),this.dashboardController=new N0,this.renderController=new h0(n,this.cameraController.getCamera()),this.actorController=new u0(e,new F0(this.dashboardController)),this.simulationLoop=new c0(t,e,r),this.clock=new i0}processNextFrame(){const t=this.clock.getDelta();this.cameraController.update(t),this.actorController.handleUserInput(),this.simulationLoop.step(t),this.renderController.render()}}const k0=0,oh="./assets.zip",B0="digital_twin_lab-4",z0="./packages/digital_twin_lab-4",V0="./packages/digital_twin_lab-4/urdf/robot_arm.urdf",H0={[pl.OpticalTable]:"assets/objs/optical_table.obj"};var Is=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function G0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Zv(i){if(i.__esModule)return i;var t=i.default;if(typeof t=="function"){var e=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var r=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return i[n]}})}),e}function Ds(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ja={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var Kc;function W0(){return Kc||(Kc=1,function(i,t){(function(e){i.exports=e()})(function(){return function e(n,r,s){function a(c,d){if(!r[c]){if(!n[c]){var h=typeof Ds=="function"&&Ds;if(!d&&h)return h(c,!0);if(o)return o(c,!0);var p=new Error("Cannot find module '"+c+"'");throw p.code="MODULE_NOT_FOUND",p}var f=r[c]={exports:{}};n[c][0].call(f.exports,function(_){var g=n[c][1][_];return a(g||_)},f,f.exports,e,n,r,s)}return r[c].exports}for(var o=typeof Ds=="function"&&Ds,l=0;l<s.length;l++)a(s[l]);return a}({1:[function(e,n,r){var s=e("./utils"),a=e("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var c,d,h,p,f,_,g,m=[],u=0,x=l.length,M=x,S=s.getTypeOf(l)!=="string";u<l.length;)M=x-u,h=S?(c=l[u++],d=u<x?l[u++]:0,u<x?l[u++]:0):(c=l.charCodeAt(u++),d=u<x?l.charCodeAt(u++):0,u<x?l.charCodeAt(u++):0),p=c>>2,f=(3&c)<<4|d>>4,_=1<M?(15&d)<<2|h>>6:64,g=2<M?63&h:64,m.push(o.charAt(p)+o.charAt(f)+o.charAt(_)+o.charAt(g));return m.join("")},r.decode=function(l){var c,d,h,p,f,_,g=0,m=0,u="data:";if(l.substr(0,u.length)===u)throw new Error("Invalid base64 input, it looks like a data url.");var x,M=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===o.charAt(64)&&M--,l.charAt(l.length-2)===o.charAt(64)&&M--,M%1!=0)throw new Error("Invalid base64 input, bad content length.");for(x=a.uint8array?new Uint8Array(0|M):new Array(0|M);g<l.length;)c=o.indexOf(l.charAt(g++))<<2|(p=o.indexOf(l.charAt(g++)))>>4,d=(15&p)<<4|(f=o.indexOf(l.charAt(g++)))>>2,h=(3&f)<<6|(_=o.indexOf(l.charAt(g++))),x[m++]=c,f!==64&&(x[m++]=d),_!==64&&(x[m++]=h);return x}},{"./support":30,"./utils":32}],2:[function(e,n,r){var s=e("./external"),a=e("./stream/DataWorker"),o=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function c(d,h,p,f,_){this.compressedSize=d,this.uncompressedSize=h,this.crc32=p,this.compression=f,this.compressedContent=_}c.prototype={getContentWorker:function(){var d=new a(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),h=this;return d.on("end",function(){if(this.streamInfo.data_length!==h.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),d},getCompressedWorker:function(){return new a(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(d,h,p){return d.pipe(new o).pipe(new l("uncompressedSize")).pipe(h.compressWorker(p)).pipe(new l("compressedSize")).withStreamInfo("compression",h)},n.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,n,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,n,r){var s=e("./utils"),a=function(){for(var o,l=[],c=0;c<256;c++){o=c;for(var d=0;d<8;d++)o=1&o?3988292384^o>>>1:o>>>1;l[c]=o}return l}();n.exports=function(o,l){return o!==void 0&&o.length?s.getTypeOf(o)!=="string"?function(c,d,h,p){var f=a,_=p+h;c^=-1;for(var g=p;g<_;g++)c=c>>>8^f[255&(c^d[g])];return-1^c}(0|l,o,o.length,0):function(c,d,h,p){var f=a,_=p+h;c^=-1;for(var g=p;g<_;g++)c=c>>>8^f[255&(c^d.charCodeAt(g))];return-1^c}(0|l,o,o.length,0):0}},{"./utils":32}],5:[function(e,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,n,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),n.exports={Promise:s}},{lie:37}],7:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=e("pako"),o=e("./utils"),l=e("./stream/GenericWorker"),c=s?"uint8array":"array";function d(h,p){l.call(this,"FlateWorker/"+h),this._pako=null,this._pakoAction=h,this._pakoOptions=p,this.meta={}}r.magic="\b\0",o.inherits(d,l),d.prototype.processChunk=function(h){this.meta=h.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(c,h.data),!1)},d.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},d.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},d.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var h=this;this._pako.onData=function(p){h.push({data:p,meta:h.meta})}},r.compressWorker=function(h){return new d("Deflate",h)},r.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,n,r){function s(f,_){var g,m="";for(g=0;g<_;g++)m+=String.fromCharCode(255&f),f>>>=8;return m}function a(f,_,g,m,u,x){var M,S,R=f.file,P=f.compression,L=x!==c.utf8encode,N=o.transformTo("string",x(R.name)),w=o.transformTo("string",c.utf8encode(R.name)),E=R.comment,B=o.transformTo("string",x(E)),C=o.transformTo("string",c.utf8encode(E)),z=w.length!==R.name.length,y=C.length!==E.length,W="",H="",Z="",J=R.dir,Q=R.date,pt={crc32:0,compressedSize:0,uncompressedSize:0};_&&!g||(pt.crc32=f.crc32,pt.compressedSize=f.compressedSize,pt.uncompressedSize=f.uncompressedSize);var j=0;_&&(j|=8),L||!z&&!y||(j|=2048);var Y=0,vt=0;J&&(Y|=16),u==="UNIX"?(vt=798,Y|=function(q,ct){var ft=q;return q||(ft=ct?16893:33204),(65535&ft)<<16}(R.unixPermissions,J)):(vt=20,Y|=function(q){return 63&(q||0)}(R.dosPermissions)),M=Q.getUTCHours(),M<<=6,M|=Q.getUTCMinutes(),M<<=5,M|=Q.getUTCSeconds()/2,S=Q.getUTCFullYear()-1980,S<<=4,S|=Q.getUTCMonth()+1,S<<=5,S|=Q.getUTCDate(),z&&(H=s(1,1)+s(d(N),4)+w,W+="up"+s(H.length,2)+H),y&&(Z=s(1,1)+s(d(B),4)+C,W+="uc"+s(Z.length,2)+Z);var X="";return X+=`
\0`,X+=s(j,2),X+=P.magic,X+=s(M,2),X+=s(S,2),X+=s(pt.crc32,4),X+=s(pt.compressedSize,4),X+=s(pt.uncompressedSize,4),X+=s(N.length,2),X+=s(W.length,2),{fileRecord:h.LOCAL_FILE_HEADER+X+N+W,dirRecord:h.CENTRAL_FILE_HEADER+s(vt,2)+X+s(B.length,2)+"\0\0\0\0"+s(Y,4)+s(m,4)+N+W+B}}var o=e("../utils"),l=e("../stream/GenericWorker"),c=e("../utf8"),d=e("../crc32"),h=e("../signature");function p(f,_,g,m){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=g,this.encodeFileName=m,this.streamFiles=f,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(p,l),p.prototype.push=function(f){var _=f.meta.percent||0,g=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(f):(this.bytesWritten+=f.data.length,l.prototype.push.call(this,{data:f.data,meta:{currentFile:this.currentFile,percent:g?(_+100*(g-m-1))/g:100}}))},p.prototype.openedSource=function(f){this.currentSourceOffset=this.bytesWritten,this.currentFile=f.file.name;var _=this.streamFiles&&!f.file.dir;if(_){var g=a(f,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},p.prototype.closedSource=function(f){this.accumulate=!1;var _=this.streamFiles&&!f.file.dir,g=a(f,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),_)this.push({data:function(m){return h.DATA_DESCRIPTOR+s(m.crc32,4)+s(m.compressedSize,4)+s(m.uncompressedSize,4)}(f),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},p.prototype.flush=function(){for(var f=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var g=this.bytesWritten-f,m=function(u,x,M,S,R){var P=o.transformTo("string",R(S));return h.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(u,2)+s(u,2)+s(x,4)+s(M,4)+s(P.length,2)+P}(this.dirRecords.length,g,f,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},p.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},p.prototype.registerPrevious=function(f){this._sources.push(f);var _=this;return f.on("data",function(g){_.processChunk(g)}),f.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),f.on("error",function(g){_.error(g)}),this},p.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},p.prototype.error=function(f){var _=this._sources;if(!l.prototype.error.call(this,f))return!1;for(var g=0;g<_.length;g++)try{_[g].error(f)}catch{}return!0},p.prototype.lock=function(){l.prototype.lock.call(this);for(var f=this._sources,_=0;_<f.length;_++)f[_].lock()},n.exports=p},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,n,r){var s=e("../compressions"),a=e("./ZipFileWorker");r.generateWorker=function(o,l,c){var d=new a(l.streamFiles,c,l.platform,l.encodeFileName),h=0;try{o.forEach(function(p,f){h++;var _=function(x,M){var S=x||M,R=s[S];if(!R)throw new Error(S+" is not a valid compression method !");return R}(f.options.compression,l.compression),g=f.options.compressionOptions||l.compressionOptions||{},m=f.dir,u=f.date;f._compressWorker(_,g).withStreamInfo("file",{name:p,dir:m,date:u,comment:f.comment||"",unixPermissions:f.unixPermissions,dosPermissions:f.dosPermissions}).pipe(d)}),d.entriesCount=h}catch(p){d.error(p)}return d}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,n,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new s;for(var o in this)typeof this[o]!="function"&&(a[o]=this[o]);return a}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(a,o){return new s().loadAsync(a,o)},s.external=e("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,n,r){var s=e("./utils"),a=e("./external"),o=e("./utf8"),l=e("./zipEntries"),c=e("./stream/Crc32Probe"),d=e("./nodejsUtils");function h(p){return new a.Promise(function(f,_){var g=p.decompressed.getContentWorker().pipe(new c);g.on("error",function(m){_(m)}).on("end",function(){g.streamInfo.crc32!==p.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):f()}).resume()})}n.exports=function(p,f){var _=this;return f=s.extend(f||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),d.isNode&&d.isStream(p)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",p,!0,f.optimizedBinaryString,f.base64).then(function(g){var m=new l(f);return m.load(g),m}).then(function(g){var m=[a.Promise.resolve(g)],u=g.files;if(f.checkCRC32)for(var x=0;x<u.length;x++)m.push(h(u[x]));return a.Promise.all(m)}).then(function(g){for(var m=g.shift(),u=m.files,x=0;x<u.length;x++){var M=u[x],S=M.fileNameStr,R=s.resolve(M.fileNameStr);_.file(R,M.decompressed,{binary:!0,optimizedBinaryString:!0,date:M.date,dir:M.dir,comment:M.fileCommentStr.length?M.fileCommentStr:null,unixPermissions:M.unixPermissions,dosPermissions:M.dosPermissions,createFolders:f.createFolders}),M.dir||(_.file(R).unsafeOriginalName=S)}return m.zipComment.length&&(_.comment=m.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,n,r){var s=e("../utils"),a=e("../stream/GenericWorker");function o(l,c){a.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(o,a),o.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(d){c.push({data:d,meta:{percent:0}})}).on("error",function(d){c.isPaused?this.generatedError=d:c.error(d)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},o.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,n,r){var s=e("readable-stream").Readable;function a(o,l,c){s.call(this,l),this._helper=o;var d=this;o.on("data",function(h,p){d.push(h)||d._helper.pause(),c&&c(p)}).on("error",function(h){d.emit("error",h)}).on("end",function(){d.push(null)})}e("../utils").inherits(a,s),a.prototype._read=function(){this._helper.resume()},n.exports=a},{"../utils":32,"readable-stream":16}],14:[function(e,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,a);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,a)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var a=new Buffer(s);return a.fill(0),a},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,n,r){function s(R,P,L){var N,w=o.getTypeOf(P),E=o.extend(L||{},d);E.date=E.date||new Date,E.compression!==null&&(E.compression=E.compression.toUpperCase()),typeof E.unixPermissions=="string"&&(E.unixPermissions=parseInt(E.unixPermissions,8)),E.unixPermissions&&16384&E.unixPermissions&&(E.dir=!0),E.dosPermissions&&16&E.dosPermissions&&(E.dir=!0),E.dir&&(R=u(R)),E.createFolders&&(N=m(R))&&x.call(this,N,!0);var B=w==="string"&&E.binary===!1&&E.base64===!1;L&&L.binary!==void 0||(E.binary=!B),(P instanceof h&&P.uncompressedSize===0||E.dir||!P||P.length===0)&&(E.base64=!1,E.binary=!0,P="",E.compression="STORE",w="string");var C=null;C=P instanceof h||P instanceof l?P:_.isNode&&_.isStream(P)?new g(R,P):o.prepareContent(R,P,E.binary,E.optimizedBinaryString,E.base64);var z=new p(R,C,E);this.files[R]=z}var a=e("./utf8"),o=e("./utils"),l=e("./stream/GenericWorker"),c=e("./stream/StreamHelper"),d=e("./defaults"),h=e("./compressedObject"),p=e("./zipObject"),f=e("./generate"),_=e("./nodejsUtils"),g=e("./nodejs/NodejsStreamInputAdapter"),m=function(R){R.slice(-1)==="/"&&(R=R.substring(0,R.length-1));var P=R.lastIndexOf("/");return 0<P?R.substring(0,P):""},u=function(R){return R.slice(-1)!=="/"&&(R+="/"),R},x=function(R,P){return P=P!==void 0?P:d.createFolders,R=u(R),this.files[R]||s.call(this,R,null,{dir:!0,createFolders:P}),this.files[R]};function M(R){return Object.prototype.toString.call(R)==="[object RegExp]"}var S={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(R){var P,L,N;for(P in this.files)N=this.files[P],(L=P.slice(this.root.length,P.length))&&P.slice(0,this.root.length)===this.root&&R(L,N)},filter:function(R){var P=[];return this.forEach(function(L,N){R(L,N)&&P.push(N)}),P},file:function(R,P,L){if(arguments.length!==1)return R=this.root+R,s.call(this,R,P,L),this;if(M(R)){var N=R;return this.filter(function(E,B){return!B.dir&&N.test(E)})}var w=this.files[this.root+R];return w&&!w.dir?w:null},folder:function(R){if(!R)return this;if(M(R))return this.filter(function(w,E){return E.dir&&R.test(w)});var P=this.root+R,L=x.call(this,P),N=this.clone();return N.root=L.name,N},remove:function(R){R=this.root+R;var P=this.files[R];if(P||(R.slice(-1)!=="/"&&(R+="/"),P=this.files[R]),P&&!P.dir)delete this.files[R];else for(var L=this.filter(function(w,E){return E.name.slice(0,R.length)===R}),N=0;N<L.length;N++)delete this.files[L[N].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(R){var P,L={};try{if((L=o.extend(R||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=L.type.toLowerCase(),L.compression=L.compression.toUpperCase(),L.type==="binarystring"&&(L.type="string"),!L.type)throw new Error("No output type specified.");o.checkSupport(L.type),L.platform!=="darwin"&&L.platform!=="freebsd"&&L.platform!=="linux"&&L.platform!=="sunos"||(L.platform="UNIX"),L.platform==="win32"&&(L.platform="DOS");var N=L.comment||this.comment||"";P=f.generateWorker(this,L,N)}catch(w){(P=new l("error")).error(w)}return new c(P,L.type||"string",L.mimeType)},generateAsync:function(R,P){return this.generateInternalStream(R).accumulate(P)},generateNodeStream:function(R,P){return(R=R||{}).type||(R.type="nodebuffer"),this.generateInternalStream(R).toNodejsStream(P)}};n.exports=S},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,n,r){n.exports=e("stream")},{stream:void 0}],17:[function(e,n,r){var s=e("./DataReader");function a(o){s.call(this,o);for(var l=0;l<this.data.length;l++)o[l]=255&o[l]}e("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data[this.zero+o]},a.prototype.lastIndexOfSignature=function(o){for(var l=o.charCodeAt(0),c=o.charCodeAt(1),d=o.charCodeAt(2),h=o.charCodeAt(3),p=this.length-4;0<=p;--p)if(this.data[p]===l&&this.data[p+1]===c&&this.data[p+2]===d&&this.data[p+3]===h)return p-this.zero;return-1},a.prototype.readAndCheckSignature=function(o){var l=o.charCodeAt(0),c=o.charCodeAt(1),d=o.charCodeAt(2),h=o.charCodeAt(3),p=this.readData(4);return l===p[0]&&c===p[1]&&d===p[2]&&h===p[3]},a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},n.exports=a},{"../utils":32,"./DataReader":18}],18:[function(e,n,r){var s=e("../utils");function a(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var l,c=0;for(this.checkOffset(o),l=this.index+o-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=o,c},readString:function(o){return s.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},n.exports=a},{"../utils":32}],19:[function(e,n,r){var s=e("./Uint8ArrayReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},n.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,n,r){var s=e("./DataReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},a.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},a.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},n.exports=a},{"../utils":32,"./DataReader":18}],21:[function(e,n,r){var s=e("./ArrayReader");function a(o){s.call(this,o)}e("../utils").inherits(a,s),a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},n.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(e,n,r){var s=e("../utils"),a=e("../support"),o=e("./ArrayReader"),l=e("./StringReader"),c=e("./NodeBufferReader"),d=e("./Uint8ArrayReader");n.exports=function(h){var p=s.getTypeOf(h);return s.checkSupport(p),p!=="string"||a.uint8array?p==="nodebuffer"?new c(h):a.uint8array?new d(s.transformTo("uint8array",h)):new o(s.transformTo("array",h)):new l(h)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,n,r){var s=e("./GenericWorker"),a=e("../utils");function o(l){s.call(this,"ConvertWorker to "+l),this.destType=l}a.inherits(o,s),o.prototype.processChunk=function(l){this.push({data:a.transformTo(this.destType,l.data),meta:l.meta})},n.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(e,n,r){var s=e("./GenericWorker"),a=e("../crc32");function o(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(o,s),o.prototype.processChunk=function(l){this.streamInfo.crc32=a(l.data,this.streamInfo.crc32||0),this.push(l)},n.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,n,r){var s=e("../utils"),a=e("./GenericWorker");function o(l){a.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(o,a),o.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}a.prototype.processChunk.call(this,l)},n.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(e,n,r){var s=e("../utils"),a=e("./GenericWorker");function o(l){a.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(d){c.dataIsReady=!0,c.data=d,c.max=d&&d.length||0,c.type=s.getTypeOf(d),c.isPaused||c._tickAndRepeat()},function(d){c.error(d)})}s.inherits(o,a),o.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(e,n,r){function s(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,o){return this._listeners[a].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,o){if(this._listeners[a])for(var l=0;l<this._listeners[a].length;l++)this._listeners[a][l].call(this,o)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var o=this;return a.on("data",function(l){o.processChunk(l)}),a.on("end",function(){o.end()}),a.on("error",function(l){o.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,o){return this.extraStreamInfo[a]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},n.exports=s},{}],29:[function(e,n,r){var s=e("../utils"),a=e("./ConvertWorker"),o=e("./GenericWorker"),l=e("../base64"),c=e("../support"),d=e("../external"),h=null;if(c.nodestream)try{h=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function p(_,g){return new d.Promise(function(m,u){var x=[],M=_._internalType,S=_._outputType,R=_._mimeType;_.on("data",function(P,L){x.push(P),g&&g(L)}).on("error",function(P){x=[],u(P)}).on("end",function(){try{var P=function(L,N,w){switch(L){case"blob":return s.newBlob(s.transformTo("arraybuffer",N),w);case"base64":return l.encode(N);default:return s.transformTo(L,N)}}(S,function(L,N){var w,E=0,B=null,C=0;for(w=0;w<N.length;w++)C+=N[w].length;switch(L){case"string":return N.join("");case"array":return Array.prototype.concat.apply([],N);case"uint8array":for(B=new Uint8Array(C),w=0;w<N.length;w++)B.set(N[w],E),E+=N[w].length;return B;case"nodebuffer":return Buffer.concat(N);default:throw new Error("concat : unsupported type '"+L+"'")}}(M,x),R);m(P)}catch(L){u(L)}x=[]}).resume()})}function f(_,g,m){var u=g;switch(g){case"blob":case"arraybuffer":u="uint8array";break;case"base64":u="string"}try{this._internalType=u,this._outputType=g,this._mimeType=m,s.checkSupport(u),this._worker=_.pipe(new a(u)),_.lock()}catch(x){this._worker=new o("error"),this._worker.error(x)}}f.prototype={accumulate:function(_){return p(this,_)},on:function(_,g){var m=this;return _==="data"?this._worker.on(_,function(u){g.call(m,u.data,u.meta)}):this._worker.on(_,function(){s.delay(g,arguments,m)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new h(this,{objectMode:this._outputType!=="nodebuffer"},_)}},n.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(s),r.blob=a.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,n,r){for(var s=e("./utils"),a=e("./support"),o=e("./nodejsUtils"),l=e("./stream/GenericWorker"),c=new Array(256),d=0;d<256;d++)c[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;c[254]=c[254]=1;function h(){l.call(this,"utf-8 decode"),this.leftOver=null}function p(){l.call(this,"utf-8 encode")}r.utf8encode=function(f){return a.nodebuffer?o.newBufferFrom(f,"utf-8"):function(_){var g,m,u,x,M,S=_.length,R=0;for(x=0;x<S;x++)(64512&(m=_.charCodeAt(x)))==55296&&x+1<S&&(64512&(u=_.charCodeAt(x+1)))==56320&&(m=65536+(m-55296<<10)+(u-56320),x++),R+=m<128?1:m<2048?2:m<65536?3:4;for(g=a.uint8array?new Uint8Array(R):new Array(R),x=M=0;M<R;x++)(64512&(m=_.charCodeAt(x)))==55296&&x+1<S&&(64512&(u=_.charCodeAt(x+1)))==56320&&(m=65536+(m-55296<<10)+(u-56320),x++),m<128?g[M++]=m:(m<2048?g[M++]=192|m>>>6:(m<65536?g[M++]=224|m>>>12:(g[M++]=240|m>>>18,g[M++]=128|m>>>12&63),g[M++]=128|m>>>6&63),g[M++]=128|63&m);return g}(f)},r.utf8decode=function(f){return a.nodebuffer?s.transformTo("nodebuffer",f).toString("utf-8"):function(_){var g,m,u,x,M=_.length,S=new Array(2*M);for(g=m=0;g<M;)if((u=_[g++])<128)S[m++]=u;else if(4<(x=c[u]))S[m++]=65533,g+=x-1;else{for(u&=x===2?31:x===3?15:7;1<x&&g<M;)u=u<<6|63&_[g++],x--;1<x?S[m++]=65533:u<65536?S[m++]=u:(u-=65536,S[m++]=55296|u>>10&1023,S[m++]=56320|1023&u)}return S.length!==m&&(S.subarray?S=S.subarray(0,m):S.length=m),s.applyFromCharCode(S)}(f=s.transformTo(a.uint8array?"uint8array":"array",f))},s.inherits(h,l),h.prototype.processChunk=function(f){var _=s.transformTo(a.uint8array?"uint8array":"array",f.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var g=_;(_=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),_.set(g,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var m=function(x,M){var S;for((M=M||x.length)>x.length&&(M=x.length),S=M-1;0<=S&&(192&x[S])==128;)S--;return S<0||S===0?M:S+c[x[S]]>M?S:M}(_),u=_;m!==_.length&&(a.uint8array?(u=_.subarray(0,m),this.leftOver=_.subarray(m,_.length)):(u=_.slice(0,m),this.leftOver=_.slice(m,_.length))),this.push({data:r.utf8decode(u),meta:f.meta})},h.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=h,s.inherits(p,l),p.prototype.processChunk=function(f){this.push({data:r.utf8encode(f.data),meta:f.meta})},r.Utf8EncodeWorker=p},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,n,r){var s=e("./support"),a=e("./base64"),o=e("./nodejsUtils"),l=e("./external");function c(g){return g}function d(g,m){for(var u=0;u<g.length;++u)m[u]=255&g.charCodeAt(u);return m}e("setimmediate"),r.newBlob=function(g,m){r.checkSupport("blob");try{return new Blob([g],{type:m})}catch{try{var u=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return u.append(g),u.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var h={stringifyByChunk:function(g,m,u){var x=[],M=0,S=g.length;if(S<=u)return String.fromCharCode.apply(null,g);for(;M<S;)m==="array"||m==="nodebuffer"?x.push(String.fromCharCode.apply(null,g.slice(M,Math.min(M+u,S)))):x.push(String.fromCharCode.apply(null,g.subarray(M,Math.min(M+u,S)))),M+=u;return x.join("")},stringifyByChar:function(g){for(var m="",u=0;u<g.length;u++)m+=String.fromCharCode(g[u]);return m},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}}()}};function p(g){var m=65536,u=r.getTypeOf(g),x=!0;if(u==="uint8array"?x=h.applyCanBeUsed.uint8array:u==="nodebuffer"&&(x=h.applyCanBeUsed.nodebuffer),x)for(;1<m;)try{return h.stringifyByChunk(g,u,m)}catch{m=Math.floor(m/2)}return h.stringifyByChar(g)}function f(g,m){for(var u=0;u<g.length;u++)m[u]=g[u];return m}r.applyFromCharCode=p;var _={};_.string={string:c,array:function(g){return d(g,new Array(g.length))},arraybuffer:function(g){return _.string.uint8array(g).buffer},uint8array:function(g){return d(g,new Uint8Array(g.length))},nodebuffer:function(g){return d(g,o.allocBuffer(g.length))}},_.array={string:p,array:c,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return o.newBufferFrom(g)}},_.arraybuffer={string:function(g){return p(new Uint8Array(g))},array:function(g){return f(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:c,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return o.newBufferFrom(new Uint8Array(g))}},_.uint8array={string:p,array:function(g){return f(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:c,nodebuffer:function(g){return o.newBufferFrom(g)}},_.nodebuffer={string:p,array:function(g){return f(g,new Array(g.length))},arraybuffer:function(g){return _.nodebuffer.uint8array(g).buffer},uint8array:function(g){return f(g,new Uint8Array(g.length))},nodebuffer:c},r.transformTo=function(g,m){if(m=m||"",!g)return m;r.checkSupport(g);var u=r.getTypeOf(m);return _[u][g](m)},r.resolve=function(g){for(var m=g.split("/"),u=[],x=0;x<m.length;x++){var M=m[x];M==="."||M===""&&x!==0&&x!==m.length-1||(M===".."?u.pop():u.push(M))}return u.join("/")},r.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":s.nodebuffer&&o.isBuffer(g)?"nodebuffer":s.uint8array&&g instanceof Uint8Array?"uint8array":s.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(g){if(!s[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(g){var m,u,x="";for(u=0;u<(g||"").length;u++)x+="\\x"+((m=g.charCodeAt(u))<16?"0":"")+m.toString(16).toUpperCase();return x},r.delay=function(g,m,u){setImmediate(function(){g.apply(u||null,m||[])})},r.inherits=function(g,m){function u(){}u.prototype=m.prototype,g.prototype=new u},r.extend=function(){var g,m,u={};for(g=0;g<arguments.length;g++)for(m in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],m)&&u[m]===void 0&&(u[m]=arguments[g][m]);return u},r.prepareContent=function(g,m,u,x,M){return l.Promise.resolve(m).then(function(S){return s.blob&&(S instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(S))!==-1)&&typeof FileReader<"u"?new l.Promise(function(R,P){var L=new FileReader;L.onload=function(N){R(N.target.result)},L.onerror=function(N){P(N.target.error)},L.readAsArrayBuffer(S)}):S}).then(function(S){var R=r.getTypeOf(S);return R?(R==="arraybuffer"?S=r.transformTo("uint8array",S):R==="string"&&(M?S=a.decode(S):u&&x!==!0&&(S=function(P){return d(P,s.uint8array?new Uint8Array(P.length):new Array(P.length))}(S))),S):l.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,n,r){var s=e("./reader/readerFor"),a=e("./utils"),o=e("./signature"),l=e("./zipEntry"),c=e("./support");function d(h){this.files=[],this.loadOptions=h}d.prototype={checkSignature:function(h){if(!this.reader.readAndCheckSignature(h)){this.reader.index-=4;var p=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(p)+", expected "+a.pretty(h)+")")}},isSignature:function(h,p){var f=this.reader.index;this.reader.setIndex(h);var _=this.reader.readString(4)===p;return this.reader.setIndex(f),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var h=this.reader.readData(this.zipCommentLength),p=c.uint8array?"uint8array":"array",f=a.transformTo(p,h);this.zipComment=this.loadOptions.decodeFileName(f)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var h,p,f,_=this.zip64EndOfCentralSize-44;0<_;)h=this.reader.readInt(2),p=this.reader.readInt(4),f=this.reader.readData(p),this.zip64ExtensibleData[h]={id:h,length:p,value:f}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var h,p;for(h=0;h<this.files.length;h++)p=this.files[h],this.reader.setIndex(p.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),p.readLocalPart(this.reader),p.handleUTF8(),p.processAttributes()},readCentralDir:function(){var h;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(h=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(h);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var h=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(h<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(h);var p=h;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(h=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(h),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var f=this.centralDirOffset+this.centralDirSize;this.zip64&&(f+=20,f+=12+this.zip64EndOfCentralSize);var _=p-f;if(0<_)this.isSignature(p,o.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(h){this.reader=s(h)},load:function(h){this.prepareReader(h),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=d},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,n,r){var s=e("./reader/readerFor"),a=e("./utils"),o=e("./compressedObject"),l=e("./crc32"),c=e("./utf8"),d=e("./compressions"),h=e("./support");function p(f,_){this.options=f,this.loadOptions=_}p.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(f){var _,g;if(f.skip(22),this.fileNameLength=f.readInt(2),g=f.readInt(2),this.fileName=f.readData(this.fileNameLength),f.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=function(m){for(var u in d)if(Object.prototype.hasOwnProperty.call(d,u)&&d[u].magic===m)return d[u];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,_,f.readData(this.compressedSize))},readCentralPart:function(f){this.versionMadeBy=f.readInt(2),f.skip(2),this.bitFlag=f.readInt(2),this.compressionMethod=f.readString(2),this.date=f.readDate(),this.crc32=f.readInt(4),this.compressedSize=f.readInt(4),this.uncompressedSize=f.readInt(4);var _=f.readInt(2);if(this.extraFieldsLength=f.readInt(2),this.fileCommentLength=f.readInt(2),this.diskNumberStart=f.readInt(2),this.internalFileAttributes=f.readInt(2),this.externalFileAttributes=f.readInt(4),this.localHeaderOffset=f.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");f.skip(_),this.readExtraFields(f),this.parseZIP64ExtraField(f),this.fileComment=f.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var f=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),f==0&&(this.dosPermissions=63&this.externalFileAttributes),f==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var f=s(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=f.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=f.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=f.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=f.readInt(4))}},readExtraFields:function(f){var _,g,m,u=f.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});f.index+4<u;)_=f.readInt(2),g=f.readInt(2),m=f.readData(g),this.extraFields[_]={id:_,length:g,value:m};f.setIndex(u)},handleUTF8:function(){var f=h.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var g=a.transformTo(f,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var u=a.transformTo(f,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(u)}}},findExtraFieldUnicodePath:function(){var f=this.extraFields[28789];if(f){var _=s(f.value);return _.readInt(1)!==1||l(this.fileName)!==_.readInt(4)?null:c.utf8decode(_.readData(f.length-5))}return null},findExtraFieldUnicodeComment:function(){var f=this.extraFields[25461];if(f){var _=s(f.value);return _.readInt(1)!==1||l(this.fileComment)!==_.readInt(4)?null:c.utf8decode(_.readData(f.length-5))}return null}},n.exports=p},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,n,r){function s(_,g,m){this.name=_,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=g,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var a=e("./stream/StreamHelper"),o=e("./stream/DataWorker"),l=e("./utf8"),c=e("./compressedObject"),d=e("./stream/GenericWorker");s.prototype={internalStream:function(_){var g=null,m="string";try{if(!_)throw new Error("No output type specified.");var u=(m=_.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),g=this._decompressWorker();var x=!this._dataBinary;x&&!u&&(g=g.pipe(new l.Utf8EncodeWorker)),!x&&u&&(g=g.pipe(new l.Utf8DecodeWorker))}catch(M){(g=new d("error")).error(M)}return new a(g,m,"")},async:function(_,g){return this.internalStream(_).accumulate(g)},nodeStream:function(_,g){return this.internalStream(_||"nodebuffer").toNodejsStream(g)},_compressWorker:function(_,g){if(this._data instanceof c&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(m,_,g)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof d?this._data:new o(this._data)}};for(var h=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],p=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<h.length;f++)s.prototype[h[f]]=p;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,n,r){(function(s){var a,o,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,d=new l(_),h=s.document.createTextNode("");d.observe(h,{characterData:!0}),a=function(){h.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)a="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var g=s.document.createElement("script");g.onreadystatechange=function(){_(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},s.document.documentElement.appendChild(g)}:function(){setTimeout(_,0)};else{var p=new s.MessageChannel;p.port1.onmessage=_,a=function(){p.port2.postMessage(0)}}var f=[];function _(){var g,m;o=!0;for(var u=f.length;u;){for(m=f,f=[],g=-1;++g<u;)m[g]();u=f.length}o=!1}n.exports=function(g){f.push(g)!==1||o||a()}}).call(this,typeof Is<"u"?Is:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,n,r){var s=e("immediate");function a(){}var o={},l=["REJECTED"],c=["FULFILLED"],d=["PENDING"];function h(u){if(typeof u!="function")throw new TypeError("resolver must be a function");this.state=d,this.queue=[],this.outcome=void 0,u!==a&&g(this,u)}function p(u,x,M){this.promise=u,typeof x=="function"&&(this.onFulfilled=x,this.callFulfilled=this.otherCallFulfilled),typeof M=="function"&&(this.onRejected=M,this.callRejected=this.otherCallRejected)}function f(u,x,M){s(function(){var S;try{S=x(M)}catch(R){return o.reject(u,R)}S===u?o.reject(u,new TypeError("Cannot resolve promise with itself")):o.resolve(u,S)})}function _(u){var x=u&&u.then;if(u&&(typeof u=="object"||typeof u=="function")&&typeof x=="function")return function(){x.apply(u,arguments)}}function g(u,x){var M=!1;function S(L){M||(M=!0,o.reject(u,L))}function R(L){M||(M=!0,o.resolve(u,L))}var P=m(function(){x(R,S)});P.status==="error"&&S(P.value)}function m(u,x){var M={};try{M.value=u(x),M.status="success"}catch(S){M.status="error",M.value=S}return M}(n.exports=h).prototype.finally=function(u){if(typeof u!="function")return this;var x=this.constructor;return this.then(function(M){return x.resolve(u()).then(function(){return M})},function(M){return x.resolve(u()).then(function(){throw M})})},h.prototype.catch=function(u){return this.then(null,u)},h.prototype.then=function(u,x){if(typeof u!="function"&&this.state===c||typeof x!="function"&&this.state===l)return this;var M=new this.constructor(a);return this.state!==d?f(M,this.state===c?u:x,this.outcome):this.queue.push(new p(M,u,x)),M},p.prototype.callFulfilled=function(u){o.resolve(this.promise,u)},p.prototype.otherCallFulfilled=function(u){f(this.promise,this.onFulfilled,u)},p.prototype.callRejected=function(u){o.reject(this.promise,u)},p.prototype.otherCallRejected=function(u){f(this.promise,this.onRejected,u)},o.resolve=function(u,x){var M=m(_,x);if(M.status==="error")return o.reject(u,M.value);var S=M.value;if(S)g(u,S);else{u.state=c,u.outcome=x;for(var R=-1,P=u.queue.length;++R<P;)u.queue[R].callFulfilled(x)}return u},o.reject=function(u,x){u.state=l,u.outcome=x;for(var M=-1,S=u.queue.length;++M<S;)u.queue[M].callRejected(x);return u},h.resolve=function(u){return u instanceof this?u:o.resolve(new this(a),u)},h.reject=function(u){var x=new this(a);return o.reject(x,u)},h.all=function(u){var x=this;if(Object.prototype.toString.call(u)!=="[object Array]")return this.reject(new TypeError("must be an array"));var M=u.length,S=!1;if(!M)return this.resolve([]);for(var R=new Array(M),P=0,L=-1,N=new this(a);++L<M;)w(u[L],L);return N;function w(E,B){x.resolve(E).then(function(C){R[B]=C,++P!==M||S||(S=!0,o.resolve(N,R))},function(C){S||(S=!0,o.reject(N,C))})}},h.race=function(u){var x=this;if(Object.prototype.toString.call(u)!=="[object Array]")return this.reject(new TypeError("must be an array"));var M=u.length,S=!1;if(!M)return this.resolve([]);for(var R=-1,P=new this(a);++R<M;)L=u[R],x.resolve(L).then(function(N){S||(S=!0,o.resolve(P,N))},function(N){S||(S=!0,o.reject(P,N))});var L;return P}},{immediate:36}],38:[function(e,n,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,n,r){var s=e("./zlib/deflate"),a=e("./utils/common"),o=e("./utils/strings"),l=e("./zlib/messages"),c=e("./zlib/zstream"),d=Object.prototype.toString,h=0,p=-1,f=0,_=8;function g(u){if(!(this instanceof g))return new g(u);this.options=a.assign({level:p,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:f,to:""},u||{});var x=this.options;x.raw&&0<x.windowBits?x.windowBits=-x.windowBits:x.gzip&&0<x.windowBits&&x.windowBits<16&&(x.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var M=s.deflateInit2(this.strm,x.level,x.method,x.windowBits,x.memLevel,x.strategy);if(M!==h)throw new Error(l[M]);if(x.header&&s.deflateSetHeader(this.strm,x.header),x.dictionary){var S;if(S=typeof x.dictionary=="string"?o.string2buf(x.dictionary):d.call(x.dictionary)==="[object ArrayBuffer]"?new Uint8Array(x.dictionary):x.dictionary,(M=s.deflateSetDictionary(this.strm,S))!==h)throw new Error(l[M]);this._dict_set=!0}}function m(u,x){var M=new g(x);if(M.push(u,!0),M.err)throw M.msg||l[M.err];return M.result}g.prototype.push=function(u,x){var M,S,R=this.strm,P=this.options.chunkSize;if(this.ended)return!1;S=x===~~x?x:x===!0?4:0,typeof u=="string"?R.input=o.string2buf(u):d.call(u)==="[object ArrayBuffer]"?R.input=new Uint8Array(u):R.input=u,R.next_in=0,R.avail_in=R.input.length;do{if(R.avail_out===0&&(R.output=new a.Buf8(P),R.next_out=0,R.avail_out=P),(M=s.deflate(R,S))!==1&&M!==h)return this.onEnd(M),!(this.ended=!0);R.avail_out!==0&&(R.avail_in!==0||S!==4&&S!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(a.shrinkBuf(R.output,R.next_out))):this.onData(a.shrinkBuf(R.output,R.next_out)))}while((0<R.avail_in||R.avail_out===0)&&M!==1);return S===4?(M=s.deflateEnd(this.strm),this.onEnd(M),this.ended=!0,M===h):S!==2||(this.onEnd(h),!(R.avail_out=0))},g.prototype.onData=function(u){this.chunks.push(u)},g.prototype.onEnd=function(u){u===h&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=u,this.msg=this.strm.msg},r.Deflate=g,r.deflate=m,r.deflateRaw=function(u,x){return(x=x||{}).raw=!0,m(u,x)},r.gzip=function(u,x){return(x=x||{}).gzip=!0,m(u,x)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,n,r){var s=e("./zlib/inflate"),a=e("./utils/common"),o=e("./utils/strings"),l=e("./zlib/constants"),c=e("./zlib/messages"),d=e("./zlib/zstream"),h=e("./zlib/gzheader"),p=Object.prototype.toString;function f(g){if(!(this instanceof f))return new f(g);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},g||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||g&&g.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&!(15&m.windowBits)&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var u=s.inflateInit2(this.strm,m.windowBits);if(u!==l.Z_OK)throw new Error(c[u]);this.header=new h,s.inflateGetHeader(this.strm,this.header)}function _(g,m){var u=new f(m);if(u.push(g,!0),u.err)throw u.msg||c[u.err];return u.result}f.prototype.push=function(g,m){var u,x,M,S,R,P,L=this.strm,N=this.options.chunkSize,w=this.options.dictionary,E=!1;if(this.ended)return!1;x=m===~~m?m:m===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof g=="string"?L.input=o.binstring2buf(g):p.call(g)==="[object ArrayBuffer]"?L.input=new Uint8Array(g):L.input=g,L.next_in=0,L.avail_in=L.input.length;do{if(L.avail_out===0&&(L.output=new a.Buf8(N),L.next_out=0,L.avail_out=N),(u=s.inflate(L,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&w&&(P=typeof w=="string"?o.string2buf(w):p.call(w)==="[object ArrayBuffer]"?new Uint8Array(w):w,u=s.inflateSetDictionary(this.strm,P)),u===l.Z_BUF_ERROR&&E===!0&&(u=l.Z_OK,E=!1),u!==l.Z_STREAM_END&&u!==l.Z_OK)return this.onEnd(u),!(this.ended=!0);L.next_out&&(L.avail_out!==0&&u!==l.Z_STREAM_END&&(L.avail_in!==0||x!==l.Z_FINISH&&x!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(M=o.utf8border(L.output,L.next_out),S=L.next_out-M,R=o.buf2string(L.output,M),L.next_out=S,L.avail_out=N-S,S&&a.arraySet(L.output,L.output,M,S,0),this.onData(R)):this.onData(a.shrinkBuf(L.output,L.next_out)))),L.avail_in===0&&L.avail_out===0&&(E=!0)}while((0<L.avail_in||L.avail_out===0)&&u!==l.Z_STREAM_END);return u===l.Z_STREAM_END&&(x=l.Z_FINISH),x===l.Z_FINISH?(u=s.inflateEnd(this.strm),this.onEnd(u),this.ended=!0,u===l.Z_OK):x!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(L.avail_out=0))},f.prototype.onData=function(g){this.chunks.push(g)},f.prototype.onEnd=function(g){g===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},r.Inflate=f,r.inflate=_,r.inflateRaw=function(g,m){return(m=m||{}).raw=!0,_(g,m)},r.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var d=c.shift();if(d){if(typeof d!="object")throw new TypeError(d+"must be non-object");for(var h in d)d.hasOwnProperty(h)&&(l[h]=d[h])}}return l},r.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var a={arraySet:function(l,c,d,h,p){if(c.subarray&&l.subarray)l.set(c.subarray(d,d+h),p);else for(var f=0;f<h;f++)l[p+f]=c[d+f]},flattenChunks:function(l){var c,d,h,p,f,_;for(c=h=0,d=l.length;c<d;c++)h+=l[c].length;for(_=new Uint8Array(h),c=p=0,d=l.length;c<d;c++)f=l[c],_.set(f,p),p+=f.length;return _}},o={arraySet:function(l,c,d,h,p){for(var f=0;f<h;f++)l[p+f]=c[d+f]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,a)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,o))},r.setTyped(s)},{}],42:[function(e,n,r){var s=e("./common"),a=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function d(h,p){if(p<65537&&(h.subarray&&o||!h.subarray&&a))return String.fromCharCode.apply(null,s.shrinkBuf(h,p));for(var f="",_=0;_<p;_++)f+=String.fromCharCode(h[_]);return f}l[254]=l[254]=1,r.string2buf=function(h){var p,f,_,g,m,u=h.length,x=0;for(g=0;g<u;g++)(64512&(f=h.charCodeAt(g)))==55296&&g+1<u&&(64512&(_=h.charCodeAt(g+1)))==56320&&(f=65536+(f-55296<<10)+(_-56320),g++),x+=f<128?1:f<2048?2:f<65536?3:4;for(p=new s.Buf8(x),g=m=0;m<x;g++)(64512&(f=h.charCodeAt(g)))==55296&&g+1<u&&(64512&(_=h.charCodeAt(g+1)))==56320&&(f=65536+(f-55296<<10)+(_-56320),g++),f<128?p[m++]=f:(f<2048?p[m++]=192|f>>>6:(f<65536?p[m++]=224|f>>>12:(p[m++]=240|f>>>18,p[m++]=128|f>>>12&63),p[m++]=128|f>>>6&63),p[m++]=128|63&f);return p},r.buf2binstring=function(h){return d(h,h.length)},r.binstring2buf=function(h){for(var p=new s.Buf8(h.length),f=0,_=p.length;f<_;f++)p[f]=h.charCodeAt(f);return p},r.buf2string=function(h,p){var f,_,g,m,u=p||h.length,x=new Array(2*u);for(f=_=0;f<u;)if((g=h[f++])<128)x[_++]=g;else if(4<(m=l[g]))x[_++]=65533,f+=m-1;else{for(g&=m===2?31:m===3?15:7;1<m&&f<u;)g=g<<6|63&h[f++],m--;1<m?x[_++]=65533:g<65536?x[_++]=g:(g-=65536,x[_++]=55296|g>>10&1023,x[_++]=56320|1023&g)}return d(x,_)},r.utf8border=function(h,p){var f;for((p=p||h.length)>h.length&&(p=h.length),f=p-1;0<=f&&(192&h[f])==128;)f--;return f<0||f===0?p:f+l[h[f]]>p?f:p}},{"./common":41}],43:[function(e,n,r){n.exports=function(s,a,o,l){for(var c=65535&s|0,d=s>>>16&65535|0,h=0;o!==0;){for(o-=h=2e3<o?2e3:o;d=d+(c=c+a[l++]|0)|0,--h;);c%=65521,d%=65521}return c|d<<16|0}},{}],44:[function(e,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,n,r){var s=function(){for(var a,o=[],l=0;l<256;l++){a=l;for(var c=0;c<8;c++)a=1&a?3988292384^a>>>1:a>>>1;o[l]=a}return o}();n.exports=function(a,o,l,c){var d=s,h=c+l;a^=-1;for(var p=c;p<h;p++)a=a>>>8^d[255&(a^o[p])];return-1^a}},{}],46:[function(e,n,r){var s,a=e("../utils/common"),o=e("./trees"),l=e("./adler32"),c=e("./crc32"),d=e("./messages"),h=0,p=4,f=0,_=-2,g=-1,m=4,u=2,x=8,M=9,S=286,R=30,P=19,L=2*S+1,N=15,w=3,E=258,B=E+w+1,C=42,z=113,y=1,W=2,H=3,Z=4;function J(v,gt){return v.msg=d[gt],gt}function Q(v){return(v<<1)-(4<v?9:0)}function pt(v){for(var gt=v.length;0<=--gt;)v[gt]=0}function j(v){var gt=v.state,st=gt.pending;st>v.avail_out&&(st=v.avail_out),st!==0&&(a.arraySet(v.output,gt.pending_buf,gt.pending_out,st,v.next_out),v.next_out+=st,gt.pending_out+=st,v.total_out+=st,v.avail_out-=st,gt.pending-=st,gt.pending===0&&(gt.pending_out=0))}function Y(v,gt){o._tr_flush_block(v,0<=v.block_start?v.block_start:-1,v.strstart-v.block_start,gt),v.block_start=v.strstart,j(v.strm)}function vt(v,gt){v.pending_buf[v.pending++]=gt}function X(v,gt){v.pending_buf[v.pending++]=gt>>>8&255,v.pending_buf[v.pending++]=255&gt}function q(v,gt){var st,V,O=v.max_chain_length,K=v.strstart,ot=v.prev_length,I=v.nice_match,b=v.strstart>v.w_size-B?v.strstart-(v.w_size-B):0,G=v.window,rt=v.w_mask,nt=v.prev,at=v.strstart+E,At=G[K+ot-1],St=G[K+ot];v.prev_length>=v.good_match&&(O>>=2),I>v.lookahead&&(I=v.lookahead);do if(G[(st=gt)+ot]===St&&G[st+ot-1]===At&&G[st]===G[K]&&G[++st]===G[K+1]){K+=2,st++;do;while(G[++K]===G[++st]&&G[++K]===G[++st]&&G[++K]===G[++st]&&G[++K]===G[++st]&&G[++K]===G[++st]&&G[++K]===G[++st]&&G[++K]===G[++st]&&G[++K]===G[++st]&&K<at);if(V=E-(at-K),K=at-E,ot<V){if(v.match_start=gt,I<=(ot=V))break;At=G[K+ot-1],St=G[K+ot]}}while((gt=nt[gt&rt])>b&&--O!=0);return ot<=v.lookahead?ot:v.lookahead}function ct(v){var gt,st,V,O,K,ot,I,b,G,rt,nt=v.w_size;do{if(O=v.window_size-v.lookahead-v.strstart,v.strstart>=nt+(nt-B)){for(a.arraySet(v.window,v.window,nt,nt,0),v.match_start-=nt,v.strstart-=nt,v.block_start-=nt,gt=st=v.hash_size;V=v.head[--gt],v.head[gt]=nt<=V?V-nt:0,--st;);for(gt=st=nt;V=v.prev[--gt],v.prev[gt]=nt<=V?V-nt:0,--st;);O+=nt}if(v.strm.avail_in===0)break;if(ot=v.strm,I=v.window,b=v.strstart+v.lookahead,G=O,rt=void 0,rt=ot.avail_in,G<rt&&(rt=G),st=rt===0?0:(ot.avail_in-=rt,a.arraySet(I,ot.input,ot.next_in,rt,b),ot.state.wrap===1?ot.adler=l(ot.adler,I,rt,b):ot.state.wrap===2&&(ot.adler=c(ot.adler,I,rt,b)),ot.next_in+=rt,ot.total_in+=rt,rt),v.lookahead+=st,v.lookahead+v.insert>=w)for(K=v.strstart-v.insert,v.ins_h=v.window[K],v.ins_h=(v.ins_h<<v.hash_shift^v.window[K+1])&v.hash_mask;v.insert&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[K+w-1])&v.hash_mask,v.prev[K&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=K,K++,v.insert--,!(v.lookahead+v.insert<w)););}while(v.lookahead<B&&v.strm.avail_in!==0)}function ft(v,gt){for(var st,V;;){if(v.lookahead<B){if(ct(v),v.lookahead<B&&gt===h)return y;if(v.lookahead===0)break}if(st=0,v.lookahead>=w&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+w-1])&v.hash_mask,st=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),st!==0&&v.strstart-st<=v.w_size-B&&(v.match_length=q(v,st)),v.match_length>=w)if(V=o._tr_tally(v,v.strstart-v.match_start,v.match_length-w),v.lookahead-=v.match_length,v.match_length<=v.max_lazy_match&&v.lookahead>=w){for(v.match_length--;v.strstart++,v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+w-1])&v.hash_mask,st=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart,--v.match_length!=0;);v.strstart++}else v.strstart+=v.match_length,v.match_length=0,v.ins_h=v.window[v.strstart],v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+1])&v.hash_mask;else V=o._tr_tally(v,0,v.window[v.strstart]),v.lookahead--,v.strstart++;if(V&&(Y(v,!1),v.strm.avail_out===0))return y}return v.insert=v.strstart<w-1?v.strstart:w-1,gt===p?(Y(v,!0),v.strm.avail_out===0?H:Z):v.last_lit&&(Y(v,!1),v.strm.avail_out===0)?y:W}function yt(v,gt){for(var st,V,O;;){if(v.lookahead<B){if(ct(v),v.lookahead<B&&gt===h)return y;if(v.lookahead===0)break}if(st=0,v.lookahead>=w&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+w-1])&v.hash_mask,st=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),v.prev_length=v.match_length,v.prev_match=v.match_start,v.match_length=w-1,st!==0&&v.prev_length<v.max_lazy_match&&v.strstart-st<=v.w_size-B&&(v.match_length=q(v,st),v.match_length<=5&&(v.strategy===1||v.match_length===w&&4096<v.strstart-v.match_start)&&(v.match_length=w-1)),v.prev_length>=w&&v.match_length<=v.prev_length){for(O=v.strstart+v.lookahead-w,V=o._tr_tally(v,v.strstart-1-v.prev_match,v.prev_length-w),v.lookahead-=v.prev_length-1,v.prev_length-=2;++v.strstart<=O&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+w-1])&v.hash_mask,st=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),--v.prev_length!=0;);if(v.match_available=0,v.match_length=w-1,v.strstart++,V&&(Y(v,!1),v.strm.avail_out===0))return y}else if(v.match_available){if((V=o._tr_tally(v,0,v.window[v.strstart-1]))&&Y(v,!1),v.strstart++,v.lookahead--,v.strm.avail_out===0)return y}else v.match_available=1,v.strstart++,v.lookahead--}return v.match_available&&(V=o._tr_tally(v,0,v.window[v.strstart-1]),v.match_available=0),v.insert=v.strstart<w-1?v.strstart:w-1,gt===p?(Y(v,!0),v.strm.avail_out===0?H:Z):v.last_lit&&(Y(v,!1),v.strm.avail_out===0)?y:W}function Tt(v,gt,st,V,O){this.good_length=v,this.max_lazy=gt,this.nice_length=st,this.max_chain=V,this.func=O}function zt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=x,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*L),this.dyn_dtree=new a.Buf16(2*(2*R+1)),this.bl_tree=new a.Buf16(2*(2*P+1)),pt(this.dyn_ltree),pt(this.dyn_dtree),pt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(N+1),this.heap=new a.Buf16(2*S+1),pt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*S+1),pt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Qt(v){var gt;return v&&v.state?(v.total_in=v.total_out=0,v.data_type=u,(gt=v.state).pending=0,gt.pending_out=0,gt.wrap<0&&(gt.wrap=-gt.wrap),gt.status=gt.wrap?C:z,v.adler=gt.wrap===2?0:1,gt.last_flush=h,o._tr_init(gt),f):J(v,_)}function ee(v){var gt=Qt(v);return gt===f&&function(st){st.window_size=2*st.w_size,pt(st.head),st.max_lazy_match=s[st.level].max_lazy,st.good_match=s[st.level].good_length,st.nice_match=s[st.level].nice_length,st.max_chain_length=s[st.level].max_chain,st.strstart=0,st.block_start=0,st.lookahead=0,st.insert=0,st.match_length=st.prev_length=w-1,st.match_available=0,st.ins_h=0}(v.state),gt}function pe(v,gt,st,V,O,K){if(!v)return _;var ot=1;if(gt===g&&(gt=6),V<0?(ot=0,V=-V):15<V&&(ot=2,V-=16),O<1||M<O||st!==x||V<8||15<V||gt<0||9<gt||K<0||m<K)return J(v,_);V===8&&(V=9);var I=new zt;return(v.state=I).strm=v,I.wrap=ot,I.gzhead=null,I.w_bits=V,I.w_size=1<<I.w_bits,I.w_mask=I.w_size-1,I.hash_bits=O+7,I.hash_size=1<<I.hash_bits,I.hash_mask=I.hash_size-1,I.hash_shift=~~((I.hash_bits+w-1)/w),I.window=new a.Buf8(2*I.w_size),I.head=new a.Buf16(I.hash_size),I.prev=new a.Buf16(I.w_size),I.lit_bufsize=1<<O+6,I.pending_buf_size=4*I.lit_bufsize,I.pending_buf=new a.Buf8(I.pending_buf_size),I.d_buf=1*I.lit_bufsize,I.l_buf=3*I.lit_bufsize,I.level=gt,I.strategy=K,I.method=st,ee(v)}s=[new Tt(0,0,0,0,function(v,gt){var st=65535;for(st>v.pending_buf_size-5&&(st=v.pending_buf_size-5);;){if(v.lookahead<=1){if(ct(v),v.lookahead===0&&gt===h)return y;if(v.lookahead===0)break}v.strstart+=v.lookahead,v.lookahead=0;var V=v.block_start+st;if((v.strstart===0||v.strstart>=V)&&(v.lookahead=v.strstart-V,v.strstart=V,Y(v,!1),v.strm.avail_out===0)||v.strstart-v.block_start>=v.w_size-B&&(Y(v,!1),v.strm.avail_out===0))return y}return v.insert=0,gt===p?(Y(v,!0),v.strm.avail_out===0?H:Z):(v.strstart>v.block_start&&(Y(v,!1),v.strm.avail_out),y)}),new Tt(4,4,8,4,ft),new Tt(4,5,16,8,ft),new Tt(4,6,32,32,ft),new Tt(4,4,16,16,yt),new Tt(8,16,32,32,yt),new Tt(8,16,128,128,yt),new Tt(8,32,128,256,yt),new Tt(32,128,258,1024,yt),new Tt(32,258,258,4096,yt)],r.deflateInit=function(v,gt){return pe(v,gt,x,15,8,0)},r.deflateInit2=pe,r.deflateReset=ee,r.deflateResetKeep=Qt,r.deflateSetHeader=function(v,gt){return v&&v.state?v.state.wrap!==2?_:(v.state.gzhead=gt,f):_},r.deflate=function(v,gt){var st,V,O,K;if(!v||!v.state||5<gt||gt<0)return v?J(v,_):_;if(V=v.state,!v.output||!v.input&&v.avail_in!==0||V.status===666&&gt!==p)return J(v,v.avail_out===0?-5:_);if(V.strm=v,st=V.last_flush,V.last_flush=gt,V.status===C)if(V.wrap===2)v.adler=0,vt(V,31),vt(V,139),vt(V,8),V.gzhead?(vt(V,(V.gzhead.text?1:0)+(V.gzhead.hcrc?2:0)+(V.gzhead.extra?4:0)+(V.gzhead.name?8:0)+(V.gzhead.comment?16:0)),vt(V,255&V.gzhead.time),vt(V,V.gzhead.time>>8&255),vt(V,V.gzhead.time>>16&255),vt(V,V.gzhead.time>>24&255),vt(V,V.level===9?2:2<=V.strategy||V.level<2?4:0),vt(V,255&V.gzhead.os),V.gzhead.extra&&V.gzhead.extra.length&&(vt(V,255&V.gzhead.extra.length),vt(V,V.gzhead.extra.length>>8&255)),V.gzhead.hcrc&&(v.adler=c(v.adler,V.pending_buf,V.pending,0)),V.gzindex=0,V.status=69):(vt(V,0),vt(V,0),vt(V,0),vt(V,0),vt(V,0),vt(V,V.level===9?2:2<=V.strategy||V.level<2?4:0),vt(V,3),V.status=z);else{var ot=x+(V.w_bits-8<<4)<<8;ot|=(2<=V.strategy||V.level<2?0:V.level<6?1:V.level===6?2:3)<<6,V.strstart!==0&&(ot|=32),ot+=31-ot%31,V.status=z,X(V,ot),V.strstart!==0&&(X(V,v.adler>>>16),X(V,65535&v.adler)),v.adler=1}if(V.status===69)if(V.gzhead.extra){for(O=V.pending;V.gzindex<(65535&V.gzhead.extra.length)&&(V.pending!==V.pending_buf_size||(V.gzhead.hcrc&&V.pending>O&&(v.adler=c(v.adler,V.pending_buf,V.pending-O,O)),j(v),O=V.pending,V.pending!==V.pending_buf_size));)vt(V,255&V.gzhead.extra[V.gzindex]),V.gzindex++;V.gzhead.hcrc&&V.pending>O&&(v.adler=c(v.adler,V.pending_buf,V.pending-O,O)),V.gzindex===V.gzhead.extra.length&&(V.gzindex=0,V.status=73)}else V.status=73;if(V.status===73)if(V.gzhead.name){O=V.pending;do{if(V.pending===V.pending_buf_size&&(V.gzhead.hcrc&&V.pending>O&&(v.adler=c(v.adler,V.pending_buf,V.pending-O,O)),j(v),O=V.pending,V.pending===V.pending_buf_size)){K=1;break}K=V.gzindex<V.gzhead.name.length?255&V.gzhead.name.charCodeAt(V.gzindex++):0,vt(V,K)}while(K!==0);V.gzhead.hcrc&&V.pending>O&&(v.adler=c(v.adler,V.pending_buf,V.pending-O,O)),K===0&&(V.gzindex=0,V.status=91)}else V.status=91;if(V.status===91)if(V.gzhead.comment){O=V.pending;do{if(V.pending===V.pending_buf_size&&(V.gzhead.hcrc&&V.pending>O&&(v.adler=c(v.adler,V.pending_buf,V.pending-O,O)),j(v),O=V.pending,V.pending===V.pending_buf_size)){K=1;break}K=V.gzindex<V.gzhead.comment.length?255&V.gzhead.comment.charCodeAt(V.gzindex++):0,vt(V,K)}while(K!==0);V.gzhead.hcrc&&V.pending>O&&(v.adler=c(v.adler,V.pending_buf,V.pending-O,O)),K===0&&(V.status=103)}else V.status=103;if(V.status===103&&(V.gzhead.hcrc?(V.pending+2>V.pending_buf_size&&j(v),V.pending+2<=V.pending_buf_size&&(vt(V,255&v.adler),vt(V,v.adler>>8&255),v.adler=0,V.status=z)):V.status=z),V.pending!==0){if(j(v),v.avail_out===0)return V.last_flush=-1,f}else if(v.avail_in===0&&Q(gt)<=Q(st)&&gt!==p)return J(v,-5);if(V.status===666&&v.avail_in!==0)return J(v,-5);if(v.avail_in!==0||V.lookahead!==0||gt!==h&&V.status!==666){var I=V.strategy===2?function(b,G){for(var rt;;){if(b.lookahead===0&&(ct(b),b.lookahead===0)){if(G===h)return y;break}if(b.match_length=0,rt=o._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++,rt&&(Y(b,!1),b.strm.avail_out===0))return y}return b.insert=0,G===p?(Y(b,!0),b.strm.avail_out===0?H:Z):b.last_lit&&(Y(b,!1),b.strm.avail_out===0)?y:W}(V,gt):V.strategy===3?function(b,G){for(var rt,nt,at,At,St=b.window;;){if(b.lookahead<=E){if(ct(b),b.lookahead<=E&&G===h)return y;if(b.lookahead===0)break}if(b.match_length=0,b.lookahead>=w&&0<b.strstart&&(nt=St[at=b.strstart-1])===St[++at]&&nt===St[++at]&&nt===St[++at]){At=b.strstart+E;do;while(nt===St[++at]&&nt===St[++at]&&nt===St[++at]&&nt===St[++at]&&nt===St[++at]&&nt===St[++at]&&nt===St[++at]&&nt===St[++at]&&at<At);b.match_length=E-(At-at),b.match_length>b.lookahead&&(b.match_length=b.lookahead)}if(b.match_length>=w?(rt=o._tr_tally(b,1,b.match_length-w),b.lookahead-=b.match_length,b.strstart+=b.match_length,b.match_length=0):(rt=o._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++),rt&&(Y(b,!1),b.strm.avail_out===0))return y}return b.insert=0,G===p?(Y(b,!0),b.strm.avail_out===0?H:Z):b.last_lit&&(Y(b,!1),b.strm.avail_out===0)?y:W}(V,gt):s[V.level].func(V,gt);if(I!==H&&I!==Z||(V.status=666),I===y||I===H)return v.avail_out===0&&(V.last_flush=-1),f;if(I===W&&(gt===1?o._tr_align(V):gt!==5&&(o._tr_stored_block(V,0,0,!1),gt===3&&(pt(V.head),V.lookahead===0&&(V.strstart=0,V.block_start=0,V.insert=0))),j(v),v.avail_out===0))return V.last_flush=-1,f}return gt!==p?f:V.wrap<=0?1:(V.wrap===2?(vt(V,255&v.adler),vt(V,v.adler>>8&255),vt(V,v.adler>>16&255),vt(V,v.adler>>24&255),vt(V,255&v.total_in),vt(V,v.total_in>>8&255),vt(V,v.total_in>>16&255),vt(V,v.total_in>>24&255)):(X(V,v.adler>>>16),X(V,65535&v.adler)),j(v),0<V.wrap&&(V.wrap=-V.wrap),V.pending!==0?f:1)},r.deflateEnd=function(v){var gt;return v&&v.state?(gt=v.state.status)!==C&&gt!==69&&gt!==73&&gt!==91&&gt!==103&&gt!==z&&gt!==666?J(v,_):(v.state=null,gt===z?J(v,-3):f):_},r.deflateSetDictionary=function(v,gt){var st,V,O,K,ot,I,b,G,rt=gt.length;if(!v||!v.state||(K=(st=v.state).wrap)===2||K===1&&st.status!==C||st.lookahead)return _;for(K===1&&(v.adler=l(v.adler,gt,rt,0)),st.wrap=0,rt>=st.w_size&&(K===0&&(pt(st.head),st.strstart=0,st.block_start=0,st.insert=0),G=new a.Buf8(st.w_size),a.arraySet(G,gt,rt-st.w_size,st.w_size,0),gt=G,rt=st.w_size),ot=v.avail_in,I=v.next_in,b=v.input,v.avail_in=rt,v.next_in=0,v.input=gt,ct(st);st.lookahead>=w;){for(V=st.strstart,O=st.lookahead-(w-1);st.ins_h=(st.ins_h<<st.hash_shift^st.window[V+w-1])&st.hash_mask,st.prev[V&st.w_mask]=st.head[st.ins_h],st.head[st.ins_h]=V,V++,--O;);st.strstart=V,st.lookahead=w-1,ct(st)}return st.strstart+=st.lookahead,st.block_start=st.strstart,st.insert=st.lookahead,st.lookahead=0,st.match_length=st.prev_length=w-1,st.match_available=0,v.next_in=I,v.input=b,v.avail_in=ot,st.wrap=K,f},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,n,r){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,n,r){n.exports=function(s,a){var o,l,c,d,h,p,f,_,g,m,u,x,M,S,R,P,L,N,w,E,B,C,z,y,W;o=s.state,l=s.next_in,y=s.input,c=l+(s.avail_in-5),d=s.next_out,W=s.output,h=d-(a-s.avail_out),p=d+(s.avail_out-257),f=o.dmax,_=o.wsize,g=o.whave,m=o.wnext,u=o.window,x=o.hold,M=o.bits,S=o.lencode,R=o.distcode,P=(1<<o.lenbits)-1,L=(1<<o.distbits)-1;t:do{M<15&&(x+=y[l++]<<M,M+=8,x+=y[l++]<<M,M+=8),N=S[x&P];e:for(;;){if(x>>>=w=N>>>24,M-=w,(w=N>>>16&255)===0)W[d++]=65535&N;else{if(!(16&w)){if(!(64&w)){N=S[(65535&N)+(x&(1<<w)-1)];continue e}if(32&w){o.mode=12;break t}s.msg="invalid literal/length code",o.mode=30;break t}E=65535&N,(w&=15)&&(M<w&&(x+=y[l++]<<M,M+=8),E+=x&(1<<w)-1,x>>>=w,M-=w),M<15&&(x+=y[l++]<<M,M+=8,x+=y[l++]<<M,M+=8),N=R[x&L];n:for(;;){if(x>>>=w=N>>>24,M-=w,!(16&(w=N>>>16&255))){if(!(64&w)){N=R[(65535&N)+(x&(1<<w)-1)];continue n}s.msg="invalid distance code",o.mode=30;break t}if(B=65535&N,M<(w&=15)&&(x+=y[l++]<<M,(M+=8)<w&&(x+=y[l++]<<M,M+=8)),f<(B+=x&(1<<w)-1)){s.msg="invalid distance too far back",o.mode=30;break t}if(x>>>=w,M-=w,(w=d-h)<B){if(g<(w=B-w)&&o.sane){s.msg="invalid distance too far back",o.mode=30;break t}if(z=u,(C=0)===m){if(C+=_-w,w<E){for(E-=w;W[d++]=u[C++],--w;);C=d-B,z=W}}else if(m<w){if(C+=_+m-w,(w-=m)<E){for(E-=w;W[d++]=u[C++],--w;);if(C=0,m<E){for(E-=w=m;W[d++]=u[C++],--w;);C=d-B,z=W}}}else if(C+=m-w,w<E){for(E-=w;W[d++]=u[C++],--w;);C=d-B,z=W}for(;2<E;)W[d++]=z[C++],W[d++]=z[C++],W[d++]=z[C++],E-=3;E&&(W[d++]=z[C++],1<E&&(W[d++]=z[C++]))}else{for(C=d-B;W[d++]=W[C++],W[d++]=W[C++],W[d++]=W[C++],2<(E-=3););E&&(W[d++]=W[C++],1<E&&(W[d++]=W[C++]))}break}}break}}while(l<c&&d<p);l-=E=M>>3,x&=(1<<(M-=E<<3))-1,s.next_in=l,s.next_out=d,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=d<p?p-d+257:257-(d-p),o.hold=x,o.bits=M}},{}],49:[function(e,n,r){var s=e("../utils/common"),a=e("./adler32"),o=e("./crc32"),l=e("./inffast"),c=e("./inftrees"),d=1,h=2,p=0,f=-2,_=1,g=852,m=592;function u(C){return(C>>>24&255)+(C>>>8&65280)+((65280&C)<<8)+((255&C)<<24)}function x(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function M(C){var z;return C&&C.state?(z=C.state,C.total_in=C.total_out=z.total=0,C.msg="",z.wrap&&(C.adler=1&z.wrap),z.mode=_,z.last=0,z.havedict=0,z.dmax=32768,z.head=null,z.hold=0,z.bits=0,z.lencode=z.lendyn=new s.Buf32(g),z.distcode=z.distdyn=new s.Buf32(m),z.sane=1,z.back=-1,p):f}function S(C){var z;return C&&C.state?((z=C.state).wsize=0,z.whave=0,z.wnext=0,M(C)):f}function R(C,z){var y,W;return C&&C.state?(W=C.state,z<0?(y=0,z=-z):(y=1+(z>>4),z<48&&(z&=15)),z&&(z<8||15<z)?f:(W.window!==null&&W.wbits!==z&&(W.window=null),W.wrap=y,W.wbits=z,S(C))):f}function P(C,z){var y,W;return C?(W=new x,(C.state=W).window=null,(y=R(C,z))!==p&&(C.state=null),y):f}var L,N,w=!0;function E(C){if(w){var z;for(L=new s.Buf32(512),N=new s.Buf32(32),z=0;z<144;)C.lens[z++]=8;for(;z<256;)C.lens[z++]=9;for(;z<280;)C.lens[z++]=7;for(;z<288;)C.lens[z++]=8;for(c(d,C.lens,0,288,L,0,C.work,{bits:9}),z=0;z<32;)C.lens[z++]=5;c(h,C.lens,0,32,N,0,C.work,{bits:5}),w=!1}C.lencode=L,C.lenbits=9,C.distcode=N,C.distbits=5}function B(C,z,y,W){var H,Z=C.state;return Z.window===null&&(Z.wsize=1<<Z.wbits,Z.wnext=0,Z.whave=0,Z.window=new s.Buf8(Z.wsize)),W>=Z.wsize?(s.arraySet(Z.window,z,y-Z.wsize,Z.wsize,0),Z.wnext=0,Z.whave=Z.wsize):(W<(H=Z.wsize-Z.wnext)&&(H=W),s.arraySet(Z.window,z,y-W,H,Z.wnext),(W-=H)?(s.arraySet(Z.window,z,y-W,W,0),Z.wnext=W,Z.whave=Z.wsize):(Z.wnext+=H,Z.wnext===Z.wsize&&(Z.wnext=0),Z.whave<Z.wsize&&(Z.whave+=H))),0}r.inflateReset=S,r.inflateReset2=R,r.inflateResetKeep=M,r.inflateInit=function(C){return P(C,15)},r.inflateInit2=P,r.inflate=function(C,z){var y,W,H,Z,J,Q,pt,j,Y,vt,X,q,ct,ft,yt,Tt,zt,Qt,ee,pe,v,gt,st,V,O=0,K=new s.Buf8(4),ot=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!C||!C.state||!C.output||!C.input&&C.avail_in!==0)return f;(y=C.state).mode===12&&(y.mode=13),J=C.next_out,H=C.output,pt=C.avail_out,Z=C.next_in,W=C.input,Q=C.avail_in,j=y.hold,Y=y.bits,vt=Q,X=pt,gt=p;t:for(;;)switch(y.mode){case _:if(y.wrap===0){y.mode=13;break}for(;Y<16;){if(Q===0)break t;Q--,j+=W[Z++]<<Y,Y+=8}if(2&y.wrap&&j===35615){K[y.check=0]=255&j,K[1]=j>>>8&255,y.check=o(y.check,K,2,0),Y=j=0,y.mode=2;break}if(y.flags=0,y.head&&(y.head.done=!1),!(1&y.wrap)||(((255&j)<<8)+(j>>8))%31){C.msg="incorrect header check",y.mode=30;break}if((15&j)!=8){C.msg="unknown compression method",y.mode=30;break}if(Y-=4,v=8+(15&(j>>>=4)),y.wbits===0)y.wbits=v;else if(v>y.wbits){C.msg="invalid window size",y.mode=30;break}y.dmax=1<<v,C.adler=y.check=1,y.mode=512&j?10:12,Y=j=0;break;case 2:for(;Y<16;){if(Q===0)break t;Q--,j+=W[Z++]<<Y,Y+=8}if(y.flags=j,(255&y.flags)!=8){C.msg="unknown compression method",y.mode=30;break}if(57344&y.flags){C.msg="unknown header flags set",y.mode=30;break}y.head&&(y.head.text=j>>8&1),512&y.flags&&(K[0]=255&j,K[1]=j>>>8&255,y.check=o(y.check,K,2,0)),Y=j=0,y.mode=3;case 3:for(;Y<32;){if(Q===0)break t;Q--,j+=W[Z++]<<Y,Y+=8}y.head&&(y.head.time=j),512&y.flags&&(K[0]=255&j,K[1]=j>>>8&255,K[2]=j>>>16&255,K[3]=j>>>24&255,y.check=o(y.check,K,4,0)),Y=j=0,y.mode=4;case 4:for(;Y<16;){if(Q===0)break t;Q--,j+=W[Z++]<<Y,Y+=8}y.head&&(y.head.xflags=255&j,y.head.os=j>>8),512&y.flags&&(K[0]=255&j,K[1]=j>>>8&255,y.check=o(y.check,K,2,0)),Y=j=0,y.mode=5;case 5:if(1024&y.flags){for(;Y<16;){if(Q===0)break t;Q--,j+=W[Z++]<<Y,Y+=8}y.length=j,y.head&&(y.head.extra_len=j),512&y.flags&&(K[0]=255&j,K[1]=j>>>8&255,y.check=o(y.check,K,2,0)),Y=j=0}else y.head&&(y.head.extra=null);y.mode=6;case 6:if(1024&y.flags&&(Q<(q=y.length)&&(q=Q),q&&(y.head&&(v=y.head.extra_len-y.length,y.head.extra||(y.head.extra=new Array(y.head.extra_len)),s.arraySet(y.head.extra,W,Z,q,v)),512&y.flags&&(y.check=o(y.check,W,q,Z)),Q-=q,Z+=q,y.length-=q),y.length))break t;y.length=0,y.mode=7;case 7:if(2048&y.flags){if(Q===0)break t;for(q=0;v=W[Z+q++],y.head&&v&&y.length<65536&&(y.head.name+=String.fromCharCode(v)),v&&q<Q;);if(512&y.flags&&(y.check=o(y.check,W,q,Z)),Q-=q,Z+=q,v)break t}else y.head&&(y.head.name=null);y.length=0,y.mode=8;case 8:if(4096&y.flags){if(Q===0)break t;for(q=0;v=W[Z+q++],y.head&&v&&y.length<65536&&(y.head.comment+=String.fromCharCode(v)),v&&q<Q;);if(512&y.flags&&(y.check=o(y.check,W,q,Z)),Q-=q,Z+=q,v)break t}else y.head&&(y.head.comment=null);y.mode=9;case 9:if(512&y.flags){for(;Y<16;){if(Q===0)break t;Q--,j+=W[Z++]<<Y,Y+=8}if(j!==(65535&y.check)){C.msg="header crc mismatch",y.mode=30;break}Y=j=0}y.head&&(y.head.hcrc=y.flags>>9&1,y.head.done=!0),C.adler=y.check=0,y.mode=12;break;case 10:for(;Y<32;){if(Q===0)break t;Q--,j+=W[Z++]<<Y,Y+=8}C.adler=y.check=u(j),Y=j=0,y.mode=11;case 11:if(y.havedict===0)return C.next_out=J,C.avail_out=pt,C.next_in=Z,C.avail_in=Q,y.hold=j,y.bits=Y,2;C.adler=y.check=1,y.mode=12;case 12:if(z===5||z===6)break t;case 13:if(y.last){j>>>=7&Y,Y-=7&Y,y.mode=27;break}for(;Y<3;){if(Q===0)break t;Q--,j+=W[Z++]<<Y,Y+=8}switch(y.last=1&j,Y-=1,3&(j>>>=1)){case 0:y.mode=14;break;case 1:if(E(y),y.mode=20,z!==6)break;j>>>=2,Y-=2;break t;case 2:y.mode=17;break;case 3:C.msg="invalid block type",y.mode=30}j>>>=2,Y-=2;break;case 14:for(j>>>=7&Y,Y-=7&Y;Y<32;){if(Q===0)break t;Q--,j+=W[Z++]<<Y,Y+=8}if((65535&j)!=(j>>>16^65535)){C.msg="invalid stored block lengths",y.mode=30;break}if(y.length=65535&j,Y=j=0,y.mode=15,z===6)break t;case 15:y.mode=16;case 16:if(q=y.length){if(Q<q&&(q=Q),pt<q&&(q=pt),q===0)break t;s.arraySet(H,W,Z,q,J),Q-=q,Z+=q,pt-=q,J+=q,y.length-=q;break}y.mode=12;break;case 17:for(;Y<14;){if(Q===0)break t;Q--,j+=W[Z++]<<Y,Y+=8}if(y.nlen=257+(31&j),j>>>=5,Y-=5,y.ndist=1+(31&j),j>>>=5,Y-=5,y.ncode=4+(15&j),j>>>=4,Y-=4,286<y.nlen||30<y.ndist){C.msg="too many length or distance symbols",y.mode=30;break}y.have=0,y.mode=18;case 18:for(;y.have<y.ncode;){for(;Y<3;){if(Q===0)break t;Q--,j+=W[Z++]<<Y,Y+=8}y.lens[ot[y.have++]]=7&j,j>>>=3,Y-=3}for(;y.have<19;)y.lens[ot[y.have++]]=0;if(y.lencode=y.lendyn,y.lenbits=7,st={bits:y.lenbits},gt=c(0,y.lens,0,19,y.lencode,0,y.work,st),y.lenbits=st.bits,gt){C.msg="invalid code lengths set",y.mode=30;break}y.have=0,y.mode=19;case 19:for(;y.have<y.nlen+y.ndist;){for(;Tt=(O=y.lencode[j&(1<<y.lenbits)-1])>>>16&255,zt=65535&O,!((yt=O>>>24)<=Y);){if(Q===0)break t;Q--,j+=W[Z++]<<Y,Y+=8}if(zt<16)j>>>=yt,Y-=yt,y.lens[y.have++]=zt;else{if(zt===16){for(V=yt+2;Y<V;){if(Q===0)break t;Q--,j+=W[Z++]<<Y,Y+=8}if(j>>>=yt,Y-=yt,y.have===0){C.msg="invalid bit length repeat",y.mode=30;break}v=y.lens[y.have-1],q=3+(3&j),j>>>=2,Y-=2}else if(zt===17){for(V=yt+3;Y<V;){if(Q===0)break t;Q--,j+=W[Z++]<<Y,Y+=8}Y-=yt,v=0,q=3+(7&(j>>>=yt)),j>>>=3,Y-=3}else{for(V=yt+7;Y<V;){if(Q===0)break t;Q--,j+=W[Z++]<<Y,Y+=8}Y-=yt,v=0,q=11+(127&(j>>>=yt)),j>>>=7,Y-=7}if(y.have+q>y.nlen+y.ndist){C.msg="invalid bit length repeat",y.mode=30;break}for(;q--;)y.lens[y.have++]=v}}if(y.mode===30)break;if(y.lens[256]===0){C.msg="invalid code -- missing end-of-block",y.mode=30;break}if(y.lenbits=9,st={bits:y.lenbits},gt=c(d,y.lens,0,y.nlen,y.lencode,0,y.work,st),y.lenbits=st.bits,gt){C.msg="invalid literal/lengths set",y.mode=30;break}if(y.distbits=6,y.distcode=y.distdyn,st={bits:y.distbits},gt=c(h,y.lens,y.nlen,y.ndist,y.distcode,0,y.work,st),y.distbits=st.bits,gt){C.msg="invalid distances set",y.mode=30;break}if(y.mode=20,z===6)break t;case 20:y.mode=21;case 21:if(6<=Q&&258<=pt){C.next_out=J,C.avail_out=pt,C.next_in=Z,C.avail_in=Q,y.hold=j,y.bits=Y,l(C,X),J=C.next_out,H=C.output,pt=C.avail_out,Z=C.next_in,W=C.input,Q=C.avail_in,j=y.hold,Y=y.bits,y.mode===12&&(y.back=-1);break}for(y.back=0;Tt=(O=y.lencode[j&(1<<y.lenbits)-1])>>>16&255,zt=65535&O,!((yt=O>>>24)<=Y);){if(Q===0)break t;Q--,j+=W[Z++]<<Y,Y+=8}if(Tt&&!(240&Tt)){for(Qt=yt,ee=Tt,pe=zt;Tt=(O=y.lencode[pe+((j&(1<<Qt+ee)-1)>>Qt)])>>>16&255,zt=65535&O,!(Qt+(yt=O>>>24)<=Y);){if(Q===0)break t;Q--,j+=W[Z++]<<Y,Y+=8}j>>>=Qt,Y-=Qt,y.back+=Qt}if(j>>>=yt,Y-=yt,y.back+=yt,y.length=zt,Tt===0){y.mode=26;break}if(32&Tt){y.back=-1,y.mode=12;break}if(64&Tt){C.msg="invalid literal/length code",y.mode=30;break}y.extra=15&Tt,y.mode=22;case 22:if(y.extra){for(V=y.extra;Y<V;){if(Q===0)break t;Q--,j+=W[Z++]<<Y,Y+=8}y.length+=j&(1<<y.extra)-1,j>>>=y.extra,Y-=y.extra,y.back+=y.extra}y.was=y.length,y.mode=23;case 23:for(;Tt=(O=y.distcode[j&(1<<y.distbits)-1])>>>16&255,zt=65535&O,!((yt=O>>>24)<=Y);){if(Q===0)break t;Q--,j+=W[Z++]<<Y,Y+=8}if(!(240&Tt)){for(Qt=yt,ee=Tt,pe=zt;Tt=(O=y.distcode[pe+((j&(1<<Qt+ee)-1)>>Qt)])>>>16&255,zt=65535&O,!(Qt+(yt=O>>>24)<=Y);){if(Q===0)break t;Q--,j+=W[Z++]<<Y,Y+=8}j>>>=Qt,Y-=Qt,y.back+=Qt}if(j>>>=yt,Y-=yt,y.back+=yt,64&Tt){C.msg="invalid distance code",y.mode=30;break}y.offset=zt,y.extra=15&Tt,y.mode=24;case 24:if(y.extra){for(V=y.extra;Y<V;){if(Q===0)break t;Q--,j+=W[Z++]<<Y,Y+=8}y.offset+=j&(1<<y.extra)-1,j>>>=y.extra,Y-=y.extra,y.back+=y.extra}if(y.offset>y.dmax){C.msg="invalid distance too far back",y.mode=30;break}y.mode=25;case 25:if(pt===0)break t;if(q=X-pt,y.offset>q){if((q=y.offset-q)>y.whave&&y.sane){C.msg="invalid distance too far back",y.mode=30;break}ct=q>y.wnext?(q-=y.wnext,y.wsize-q):y.wnext-q,q>y.length&&(q=y.length),ft=y.window}else ft=H,ct=J-y.offset,q=y.length;for(pt<q&&(q=pt),pt-=q,y.length-=q;H[J++]=ft[ct++],--q;);y.length===0&&(y.mode=21);break;case 26:if(pt===0)break t;H[J++]=y.length,pt--,y.mode=21;break;case 27:if(y.wrap){for(;Y<32;){if(Q===0)break t;Q--,j|=W[Z++]<<Y,Y+=8}if(X-=pt,C.total_out+=X,y.total+=X,X&&(C.adler=y.check=y.flags?o(y.check,H,X,J-X):a(y.check,H,X,J-X)),X=pt,(y.flags?j:u(j))!==y.check){C.msg="incorrect data check",y.mode=30;break}Y=j=0}y.mode=28;case 28:if(y.wrap&&y.flags){for(;Y<32;){if(Q===0)break t;Q--,j+=W[Z++]<<Y,Y+=8}if(j!==(4294967295&y.total)){C.msg="incorrect length check",y.mode=30;break}Y=j=0}y.mode=29;case 29:gt=1;break t;case 30:gt=-3;break t;case 31:return-4;case 32:default:return f}return C.next_out=J,C.avail_out=pt,C.next_in=Z,C.avail_in=Q,y.hold=j,y.bits=Y,(y.wsize||X!==C.avail_out&&y.mode<30&&(y.mode<27||z!==4))&&B(C,C.output,C.next_out,X-C.avail_out)?(y.mode=31,-4):(vt-=C.avail_in,X-=C.avail_out,C.total_in+=vt,C.total_out+=X,y.total+=X,y.wrap&&X&&(C.adler=y.check=y.flags?o(y.check,H,X,C.next_out-X):a(y.check,H,X,C.next_out-X)),C.data_type=y.bits+(y.last?64:0)+(y.mode===12?128:0)+(y.mode===20||y.mode===15?256:0),(vt==0&&X===0||z===4)&&gt===p&&(gt=-5),gt)},r.inflateEnd=function(C){if(!C||!C.state)return f;var z=C.state;return z.window&&(z.window=null),C.state=null,p},r.inflateGetHeader=function(C,z){var y;return C&&C.state&&2&(y=C.state).wrap?((y.head=z).done=!1,p):f},r.inflateSetDictionary=function(C,z){var y,W=z.length;return C&&C.state?(y=C.state).wrap!==0&&y.mode!==11?f:y.mode===11&&a(1,z,W,0)!==y.check?-3:B(C,z,W,W)?(y.mode=31,-4):(y.havedict=1,p):f},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,n,r){var s=e("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(d,h,p,f,_,g,m,u){var x,M,S,R,P,L,N,w,E,B=u.bits,C=0,z=0,y=0,W=0,H=0,Z=0,J=0,Q=0,pt=0,j=0,Y=null,vt=0,X=new s.Buf16(16),q=new s.Buf16(16),ct=null,ft=0;for(C=0;C<=15;C++)X[C]=0;for(z=0;z<f;z++)X[h[p+z]]++;for(H=B,W=15;1<=W&&X[W]===0;W--);if(W<H&&(H=W),W===0)return _[g++]=20971520,_[g++]=20971520,u.bits=1,0;for(y=1;y<W&&X[y]===0;y++);for(H<y&&(H=y),C=Q=1;C<=15;C++)if(Q<<=1,(Q-=X[C])<0)return-1;if(0<Q&&(d===0||W!==1))return-1;for(q[1]=0,C=1;C<15;C++)q[C+1]=q[C]+X[C];for(z=0;z<f;z++)h[p+z]!==0&&(m[q[h[p+z]]++]=z);if(L=d===0?(Y=ct=m,19):d===1?(Y=a,vt-=257,ct=o,ft-=257,256):(Y=l,ct=c,-1),C=y,P=g,J=z=j=0,S=-1,R=(pt=1<<(Z=H))-1,d===1&&852<pt||d===2&&592<pt)return 1;for(;;){for(N=C-J,E=m[z]<L?(w=0,m[z]):m[z]>L?(w=ct[ft+m[z]],Y[vt+m[z]]):(w=96,0),x=1<<C-J,y=M=1<<Z;_[P+(j>>J)+(M-=x)]=N<<24|w<<16|E|0,M!==0;);for(x=1<<C-1;j&x;)x>>=1;if(x!==0?(j&=x-1,j+=x):j=0,z++,--X[C]==0){if(C===W)break;C=h[p+m[z]]}if(H<C&&(j&R)!==S){for(J===0&&(J=H),P+=y,Q=1<<(Z=C-J);Z+J<W&&!((Q-=X[Z+J])<=0);)Z++,Q<<=1;if(pt+=1<<Z,d===1&&852<pt||d===2&&592<pt)return 1;_[S=j&R]=H<<24|Z<<16|P-g|0}}return j!==0&&(_[P+j]=C-J<<24|64<<16|0),u.bits=H,0}},{"../utils/common":41}],51:[function(e,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,n,r){var s=e("../utils/common"),a=0,o=1;function l(O){for(var K=O.length;0<=--K;)O[K]=0}var c=0,d=29,h=256,p=h+1+d,f=30,_=19,g=2*p+1,m=15,u=16,x=7,M=256,S=16,R=17,P=18,L=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],N=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],w=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],E=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],B=new Array(2*(p+2));l(B);var C=new Array(2*f);l(C);var z=new Array(512);l(z);var y=new Array(256);l(y);var W=new Array(d);l(W);var H,Z,J,Q=new Array(f);function pt(O,K,ot,I,b){this.static_tree=O,this.extra_bits=K,this.extra_base=ot,this.elems=I,this.max_length=b,this.has_stree=O&&O.length}function j(O,K){this.dyn_tree=O,this.max_code=0,this.stat_desc=K}function Y(O){return O<256?z[O]:z[256+(O>>>7)]}function vt(O,K){O.pending_buf[O.pending++]=255&K,O.pending_buf[O.pending++]=K>>>8&255}function X(O,K,ot){O.bi_valid>u-ot?(O.bi_buf|=K<<O.bi_valid&65535,vt(O,O.bi_buf),O.bi_buf=K>>u-O.bi_valid,O.bi_valid+=ot-u):(O.bi_buf|=K<<O.bi_valid&65535,O.bi_valid+=ot)}function q(O,K,ot){X(O,ot[2*K],ot[2*K+1])}function ct(O,K){for(var ot=0;ot|=1&O,O>>>=1,ot<<=1,0<--K;);return ot>>>1}function ft(O,K,ot){var I,b,G=new Array(m+1),rt=0;for(I=1;I<=m;I++)G[I]=rt=rt+ot[I-1]<<1;for(b=0;b<=K;b++){var nt=O[2*b+1];nt!==0&&(O[2*b]=ct(G[nt]++,nt))}}function yt(O){var K;for(K=0;K<p;K++)O.dyn_ltree[2*K]=0;for(K=0;K<f;K++)O.dyn_dtree[2*K]=0;for(K=0;K<_;K++)O.bl_tree[2*K]=0;O.dyn_ltree[2*M]=1,O.opt_len=O.static_len=0,O.last_lit=O.matches=0}function Tt(O){8<O.bi_valid?vt(O,O.bi_buf):0<O.bi_valid&&(O.pending_buf[O.pending++]=O.bi_buf),O.bi_buf=0,O.bi_valid=0}function zt(O,K,ot,I){var b=2*K,G=2*ot;return O[b]<O[G]||O[b]===O[G]&&I[K]<=I[ot]}function Qt(O,K,ot){for(var I=O.heap[ot],b=ot<<1;b<=O.heap_len&&(b<O.heap_len&&zt(K,O.heap[b+1],O.heap[b],O.depth)&&b++,!zt(K,I,O.heap[b],O.depth));)O.heap[ot]=O.heap[b],ot=b,b<<=1;O.heap[ot]=I}function ee(O,K,ot){var I,b,G,rt,nt=0;if(O.last_lit!==0)for(;I=O.pending_buf[O.d_buf+2*nt]<<8|O.pending_buf[O.d_buf+2*nt+1],b=O.pending_buf[O.l_buf+nt],nt++,I===0?q(O,b,K):(q(O,(G=y[b])+h+1,K),(rt=L[G])!==0&&X(O,b-=W[G],rt),q(O,G=Y(--I),ot),(rt=N[G])!==0&&X(O,I-=Q[G],rt)),nt<O.last_lit;);q(O,M,K)}function pe(O,K){var ot,I,b,G=K.dyn_tree,rt=K.stat_desc.static_tree,nt=K.stat_desc.has_stree,at=K.stat_desc.elems,At=-1;for(O.heap_len=0,O.heap_max=g,ot=0;ot<at;ot++)G[2*ot]!==0?(O.heap[++O.heap_len]=At=ot,O.depth[ot]=0):G[2*ot+1]=0;for(;O.heap_len<2;)G[2*(b=O.heap[++O.heap_len]=At<2?++At:0)]=1,O.depth[b]=0,O.opt_len--,nt&&(O.static_len-=rt[2*b+1]);for(K.max_code=At,ot=O.heap_len>>1;1<=ot;ot--)Qt(O,G,ot);for(b=at;ot=O.heap[1],O.heap[1]=O.heap[O.heap_len--],Qt(O,G,1),I=O.heap[1],O.heap[--O.heap_max]=ot,O.heap[--O.heap_max]=I,G[2*b]=G[2*ot]+G[2*I],O.depth[b]=(O.depth[ot]>=O.depth[I]?O.depth[ot]:O.depth[I])+1,G[2*ot+1]=G[2*I+1]=b,O.heap[1]=b++,Qt(O,G,1),2<=O.heap_len;);O.heap[--O.heap_max]=O.heap[1],function(St,Rt){var ce,Mt,Ot,Nt,Kt,kt,ne=Rt.dyn_tree,ie=Rt.max_code,be=Rt.stat_desc.static_tree,et=Rt.stat_desc.has_stree,Pt=Rt.stat_desc.extra_bits,mt=Rt.stat_desc.extra_base,xt=Rt.stat_desc.max_length,Lt=0;for(Nt=0;Nt<=m;Nt++)St.bl_count[Nt]=0;for(ne[2*St.heap[St.heap_max]+1]=0,ce=St.heap_max+1;ce<g;ce++)xt<(Nt=ne[2*ne[2*(Mt=St.heap[ce])+1]+1]+1)&&(Nt=xt,Lt++),ne[2*Mt+1]=Nt,ie<Mt||(St.bl_count[Nt]++,Kt=0,mt<=Mt&&(Kt=Pt[Mt-mt]),kt=ne[2*Mt],St.opt_len+=kt*(Nt+Kt),et&&(St.static_len+=kt*(be[2*Mt+1]+Kt)));if(Lt!==0){do{for(Nt=xt-1;St.bl_count[Nt]===0;)Nt--;St.bl_count[Nt]--,St.bl_count[Nt+1]+=2,St.bl_count[xt]--,Lt-=2}while(0<Lt);for(Nt=xt;Nt!==0;Nt--)for(Mt=St.bl_count[Nt];Mt!==0;)ie<(Ot=St.heap[--ce])||(ne[2*Ot+1]!==Nt&&(St.opt_len+=(Nt-ne[2*Ot+1])*ne[2*Ot],ne[2*Ot+1]=Nt),Mt--)}}(O,K),ft(G,At,O.bl_count)}function v(O,K,ot){var I,b,G=-1,rt=K[1],nt=0,at=7,At=4;for(rt===0&&(at=138,At=3),K[2*(ot+1)+1]=65535,I=0;I<=ot;I++)b=rt,rt=K[2*(I+1)+1],++nt<at&&b===rt||(nt<At?O.bl_tree[2*b]+=nt:b!==0?(b!==G&&O.bl_tree[2*b]++,O.bl_tree[2*S]++):nt<=10?O.bl_tree[2*R]++:O.bl_tree[2*P]++,G=b,At=(nt=0)===rt?(at=138,3):b===rt?(at=6,3):(at=7,4))}function gt(O,K,ot){var I,b,G=-1,rt=K[1],nt=0,at=7,At=4;for(rt===0&&(at=138,At=3),I=0;I<=ot;I++)if(b=rt,rt=K[2*(I+1)+1],!(++nt<at&&b===rt)){if(nt<At)for(;q(O,b,O.bl_tree),--nt!=0;);else b!==0?(b!==G&&(q(O,b,O.bl_tree),nt--),q(O,S,O.bl_tree),X(O,nt-3,2)):nt<=10?(q(O,R,O.bl_tree),X(O,nt-3,3)):(q(O,P,O.bl_tree),X(O,nt-11,7));G=b,At=(nt=0)===rt?(at=138,3):b===rt?(at=6,3):(at=7,4)}}l(Q);var st=!1;function V(O,K,ot,I){X(O,(c<<1)+(I?1:0),3),function(b,G,rt,nt){Tt(b),vt(b,rt),vt(b,~rt),s.arraySet(b.pending_buf,b.window,G,rt,b.pending),b.pending+=rt}(O,K,ot)}r._tr_init=function(O){st||(function(){var K,ot,I,b,G,rt=new Array(m+1);for(b=I=0;b<d-1;b++)for(W[b]=I,K=0;K<1<<L[b];K++)y[I++]=b;for(y[I-1]=b,b=G=0;b<16;b++)for(Q[b]=G,K=0;K<1<<N[b];K++)z[G++]=b;for(G>>=7;b<f;b++)for(Q[b]=G<<7,K=0;K<1<<N[b]-7;K++)z[256+G++]=b;for(ot=0;ot<=m;ot++)rt[ot]=0;for(K=0;K<=143;)B[2*K+1]=8,K++,rt[8]++;for(;K<=255;)B[2*K+1]=9,K++,rt[9]++;for(;K<=279;)B[2*K+1]=7,K++,rt[7]++;for(;K<=287;)B[2*K+1]=8,K++,rt[8]++;for(ft(B,p+1,rt),K=0;K<f;K++)C[2*K+1]=5,C[2*K]=ct(K,5);H=new pt(B,L,h+1,p,m),Z=new pt(C,N,0,f,m),J=new pt(new Array(0),w,0,_,x)}(),st=!0),O.l_desc=new j(O.dyn_ltree,H),O.d_desc=new j(O.dyn_dtree,Z),O.bl_desc=new j(O.bl_tree,J),O.bi_buf=0,O.bi_valid=0,yt(O)},r._tr_stored_block=V,r._tr_flush_block=function(O,K,ot,I){var b,G,rt=0;0<O.level?(O.strm.data_type===2&&(O.strm.data_type=function(nt){var at,At=4093624447;for(at=0;at<=31;at++,At>>>=1)if(1&At&&nt.dyn_ltree[2*at]!==0)return a;if(nt.dyn_ltree[18]!==0||nt.dyn_ltree[20]!==0||nt.dyn_ltree[26]!==0)return o;for(at=32;at<h;at++)if(nt.dyn_ltree[2*at]!==0)return o;return a}(O)),pe(O,O.l_desc),pe(O,O.d_desc),rt=function(nt){var at;for(v(nt,nt.dyn_ltree,nt.l_desc.max_code),v(nt,nt.dyn_dtree,nt.d_desc.max_code),pe(nt,nt.bl_desc),at=_-1;3<=at&&nt.bl_tree[2*E[at]+1]===0;at--);return nt.opt_len+=3*(at+1)+5+5+4,at}(O),b=O.opt_len+3+7>>>3,(G=O.static_len+3+7>>>3)<=b&&(b=G)):b=G=ot+5,ot+4<=b&&K!==-1?V(O,K,ot,I):O.strategy===4||G===b?(X(O,2+(I?1:0),3),ee(O,B,C)):(X(O,4+(I?1:0),3),function(nt,at,At,St){var Rt;for(X(nt,at-257,5),X(nt,At-1,5),X(nt,St-4,4),Rt=0;Rt<St;Rt++)X(nt,nt.bl_tree[2*E[Rt]+1],3);gt(nt,nt.dyn_ltree,at-1),gt(nt,nt.dyn_dtree,At-1)}(O,O.l_desc.max_code+1,O.d_desc.max_code+1,rt+1),ee(O,O.dyn_ltree,O.dyn_dtree)),yt(O),I&&Tt(O)},r._tr_tally=function(O,K,ot){return O.pending_buf[O.d_buf+2*O.last_lit]=K>>>8&255,O.pending_buf[O.d_buf+2*O.last_lit+1]=255&K,O.pending_buf[O.l_buf+O.last_lit]=255&ot,O.last_lit++,K===0?O.dyn_ltree[2*ot]++:(O.matches++,K--,O.dyn_ltree[2*(y[ot]+h+1)]++,O.dyn_dtree[2*Y(K)]++),O.last_lit===O.lit_bufsize-1},r._tr_align=function(O){X(O,2,3),q(O,M,B),function(K){K.bi_valid===16?(vt(K,K.bi_buf),K.bi_buf=0,K.bi_valid=0):8<=K.bi_valid&&(K.pending_buf[K.pending++]=255&K.bi_buf,K.bi_buf>>=8,K.bi_valid-=8)}(O)}},{"../utils/common":41}],53:[function(e,n,r){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,n,r){(function(s){(function(a,o){if(!a.setImmediate){var l,c,d,h,p=1,f={},_=!1,g=a.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(a);m=m&&m.setTimeout?m:a,l={}.toString.call(a.process)==="[object process]"?function(S){process.nextTick(function(){x(S)})}:function(){if(a.postMessage&&!a.importScripts){var S=!0,R=a.onmessage;return a.onmessage=function(){S=!1},a.postMessage("","*"),a.onmessage=R,S}}()?(h="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",M,!1):a.attachEvent("onmessage",M),function(S){a.postMessage(h+S,"*")}):a.MessageChannel?((d=new MessageChannel).port1.onmessage=function(S){x(S.data)},function(S){d.port2.postMessage(S)}):g&&"onreadystatechange"in g.createElement("script")?(c=g.documentElement,function(S){var R=g.createElement("script");R.onreadystatechange=function(){x(S),R.onreadystatechange=null,c.removeChild(R),R=null},c.appendChild(R)}):function(S){setTimeout(x,0,S)},m.setImmediate=function(S){typeof S!="function"&&(S=new Function(""+S));for(var R=new Array(arguments.length-1),P=0;P<R.length;P++)R[P]=arguments[P+1];var L={callback:S,args:R};return f[p]=L,l(p),p++},m.clearImmediate=u}function u(S){delete f[S]}function x(S){if(_)setTimeout(x,0,S);else{var R=f[S];if(R){_=!0;try{(function(P){var L=P.callback,N=P.args;switch(N.length){case 0:L();break;case 1:L(N[0]);break;case 2:L(N[0],N[1]);break;case 3:L(N[0],N[1],N[2]);break;default:L.apply(o,N)}})(R)}finally{u(S),_=!1}}}}function M(S){S.source===a&&typeof S.data=="string"&&S.data.indexOf(h)===0&&x(+S.data.slice(h.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof Is<"u"?Is:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})}(Ja)),Ja.exports}var X0=W0();const j0=G0(X0);async function lh(i,t,e){try{const n=await q0(i);return Y0(n,t,e)}catch(n){return Z0(n,`Error processing ZIP file at ${i}`),new Map}}async function q0(i){const t=await fetch(i);if(!t.ok)throw new Error(`Failed to load ZIP file: ${t.statusText}`);const e=await t.arrayBuffer();return j0.loadAsync(e)}async function Y0(i,t,e){const n=new Map,r=Object.entries(i.files).filter(([s,a])=>a&&!a.dir&&s.endsWith(t));for(const[s,a]of r){const o=await a.async(e);n.set(s,o)}return n}function Z0(i,t){i instanceof Error?console.error(`${t}: ${i.message}`):console.error(`${t}: ${JSON.stringify(i)}`)}async function K0(i,t){return lh(i,t,"text")}async function $0(i,t){return lh(i,t,"arraybuffer")}function J0(...i){const t=new Map;return i.forEach(e=>{e.forEach((n,r)=>{t.set(r,n)})}),t}async function ch(i,t,e){const n=await Promise.all(t.map(r=>e(i,r)));return J0(...n)}async function Q0(){return await ch(oh,[".obj",".urdf"],K0)}async function tv(){return await ch(oh,[".png",".STL"],$0)}async function ev(){return{textFiles:await Q0(),binaryFiles:await tv()}}async function nv(){let i=null;try{i=await ev(),console.log("ZIP file loaded and extracted successfully.",i)}catch(t){console.error("Error during ZIP loading:",t)}return i||{textFiles:new Map,binaryFiles:new Map}}const iv=/^[og]\s*(.+)?/,rv=/^mtllib /,sv=/^usemtl /,av=/^usemap /,$c=/\s+/,Jc=new $,Qa=new $,Qc=new $,tu=new $,hn=new $,Ns=new ae;function ov(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const r=this.normals,s=this.object.geometry.normals;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(t,e,n){const r=this.vertices,s=this.object.geometry.normals;Jc.fromArray(r,t),Qa.fromArray(r,e),Qc.fromArray(r,n),hn.subVectors(Qc,Qa),tu.subVectors(Jc,Qa),hn.cross(tu),hn.normalize(),s.push(hn.x,hn.y,hn.z),s.push(hn.x,hn.y,hn.z),s.push(hn.x,hn.y,hn.z)},addColor:function(t,e,n){const r=this.colors,s=this.object.geometry.colors;r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[n]!==void 0&&s.push(r[n+0],r[n+1],r[n+2])},addUV:function(t,e,n){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[t+0],r[t+1]),s.push(r[e+0],r[e+1]),s.push(r[n+0],r[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,r,s,a,o,l,c){const d=this.vertices.length;let h=this.parseVertexIndex(t,d),p=this.parseVertexIndex(e,d),f=this.parseVertexIndex(n,d);if(this.addVertex(h,p,f),this.addColor(h,p,f),o!==void 0&&o!==""){const _=this.normals.length;h=this.parseNormalIndex(o,_),p=this.parseNormalIndex(l,_),f=this.parseNormalIndex(c,_),this.addNormal(h,p,f)}else this.addFaceNormal(h,p,f);if(r!==void 0&&r!==""){const _=this.uvs.length;h=this.parseUVIndex(r,_),p=this.parseUVIndex(s,_),f=this.parseUVIndex(a,_),this.addUV(h,p,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,r=t.length;n<r;n++){const s=this.parseVertexIndex(t[n],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,r=this.uvs.length;for(let s=0,a=t.length;s<a;s++)this.addVertexLine(this.parseVertexIndex(t[s],n));for(let s=0,a=e.length;s<a;s++)this.addUVLine(this.parseUVIndex(e[s],r))}};return i.startObject("",!1),i}class lv extends Yn{constructor(t){super(t),this.materials=null}load(t,e,n,r){const s=this,a=new ua(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(s.parse(o))}catch(l){r?r(l):console.error(l),s.manager.itemError(t)}},n,r)}setMaterials(t){return this.materials=t,this}parse(t){const e=new ov;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let r=[];for(let o=0,l=n.length;o<l;o++){const c=n[o].trimStart();if(c.length===0)continue;const d=c.charAt(0);if(d!=="#")if(d==="v"){const h=c.split($c);switch(h[0]){case"v":e.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(Ns.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6]),De),e.colors.push(Ns.r,Ns.g,Ns.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":e.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(d==="f"){const p=c.slice(1).trim().split($c),f=[];for(let g=0,m=p.length;g<m;g++){const u=p[g];if(u.length>0){const x=u.split("/");f.push(x)}}const _=f[0];for(let g=1,m=f.length-1;g<m;g++){const u=f[g],x=f[g+1];e.addFace(_[0],u[0],x[0],_[1],u[1],x[1],_[2],u[2],x[2])}}else if(d==="l"){const h=c.substring(1).trim().split(" ");let p=[];const f=[];if(c.indexOf("/")===-1)p=h;else for(let _=0,g=h.length;_<g;_++){const m=h[_].split("/");m[0]!==""&&p.push(m[0]),m[1]!==""&&f.push(m[1])}e.addLineGeometry(p,f)}else if(d==="p"){const p=c.slice(1).trim().split(" ");e.addPointGeometry(p)}else if((r=iv.exec(c))!==null){const h=(" "+r[0].slice(1).trim()).slice(1);e.startObject(h)}else if(sv.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(rv.test(c))e.materialLibraries.push(c.substring(7).trim());else if(av.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(d==="s"){if(r=c.split(" "),r.length>1){const p=r[1].trim().toLowerCase();e.object.smooth=p!=="0"&&p!=="off"}else e.object.smooth=!0;const h=e.object.currentMaterial();h&&(h.smooth=e.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}e.finalize();const s=new Ti;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=e.objects.length;o<l;o++){const c=e.objects[o],d=c.geometry,h=c.materials,p=d.type==="Line",f=d.type==="Points";let _=!1;if(d.vertices.length===0)continue;const g=new Xe;g.setAttribute("position",new Me(d.vertices,3)),d.normals.length>0&&g.setAttribute("normal",new Me(d.normals,3)),d.colors.length>0&&(_=!0,g.setAttribute("color",new Me(d.colors,3))),d.hasUVIndices===!0&&g.setAttribute("uv",new Me(d.uvs,2));const m=[];for(let x=0,M=h.length;x<M;x++){const S=h[x],R=S.name+"_"+S.smooth+"_"+_;let P=e.materials[R];if(this.materials!==null){if(P=this.materials.create(S.name),p&&P&&!(P instanceof rr)){const L=new rr;bn.prototype.copy.call(L,P),L.color.copy(P.color),P=L}else if(f&&P&&!(P instanceof Ur)){const L=new Ur({size:10,sizeAttenuation:!1});bn.prototype.copy.call(L,P),L.color.copy(P.color),L.map=P.map,P=L}}P===void 0&&(p?P=new rr:f?P=new Ur({size:1,sizeAttenuation:!1}):P=new sr,P.name=S.name,P.flatShading=!S.smooth,P.vertexColors=_,e.materials[R]=P),m.push(P)}let u;if(m.length>1){for(let x=0,M=h.length;x<M;x++){const S=h[x];g.addGroup(S.groupStart,S.groupCount,x)}p?u=new Ho(g,m):f?u=new Ya(g,m):u=new Pe(g,m)}else p?u=new Ho(g,m[0]):f?u=new Ya(g,m[0]):u=new Pe(g,m[0]);u.name=c.name,s.add(u)}else if(e.vertices.length>0){const o=new Ur({size:1,sizeAttenuation:!1}),l=new Xe;l.setAttribute("position",new Me(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new Me(e.colors,3)),o.vertexColors=!0);const c=new Ya(l,o);s.add(c)}return s}}function cv(i){i.traverse(t=>{if(t.isMesh){const e=t;e.material||(e.material=new la({color:8947848}))}})}function uv(i,t){const e=i.textFiles.get(t);let n=null;return e&&(n=new lv().parse(e),cv(n)),n}function hv(i){let t=new Map;const e=[pl.OpticalTable];for(const r of e){var n=uv(i,H0[r]);n&&t.set(r,n)}return t}class dv extends Yn{constructor(t){super(t)}load(t,e,n,r){const s=this,a=new ua(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(s.parse(o))}catch(l){r?r(l):console.error(l),s.manager.itemError(t)}},n,r)}parse(t){function e(c){const d=new DataView(c),h=32/8*3+32/8*3*3+16/8,p=d.getUint32(80,!0);if(80+32/8+p*h===d.byteLength)return!0;const _=[115,111,108,105,100];for(let g=0;g<5;g++)if(n(_,d,g))return!1;return!0}function n(c,d,h){for(let p=0,f=c.length;p<f;p++)if(c[p]!==d.getUint8(h+p))return!1;return!0}function r(c){const d=new DataView(c),h=d.getUint32(80,!0);let p,f,_,g=!1,m,u,x,M,S;for(let B=0;B<70;B++)d.getUint32(B,!1)==1129270351&&d.getUint8(B+4)==82&&d.getUint8(B+5)==61&&(g=!0,m=new Float32Array(h*3*3),u=d.getUint8(B+6)/255,x=d.getUint8(B+7)/255,M=d.getUint8(B+8)/255,S=d.getUint8(B+9)/255);const R=84,P=12*4+2,L=new Xe,N=new Float32Array(h*3*3),w=new Float32Array(h*3*3),E=new ae;for(let B=0;B<h;B++){const C=R+B*P,z=d.getFloat32(C,!0),y=d.getFloat32(C+4,!0),W=d.getFloat32(C+8,!0);if(g){const H=d.getUint16(C+48,!0);H&32768?(p=u,f=x,_=M):(p=(H&31)/31,f=(H>>5&31)/31,_=(H>>10&31)/31)}for(let H=1;H<=3;H++){const Z=C+H*12,J=B*3*3+(H-1)*3;N[J]=d.getFloat32(Z,!0),N[J+1]=d.getFloat32(Z+4,!0),N[J+2]=d.getFloat32(Z+8,!0),w[J]=z,w[J+1]=y,w[J+2]=W,g&&(E.setRGB(p,f,_,De),m[J]=E.r,m[J+1]=E.g,m[J+2]=E.b)}}return L.setAttribute("position",new ln(N,3)),L.setAttribute("normal",new ln(w,3)),g&&(L.setAttribute("color",new ln(m,3)),L.hasColors=!0,L.alpha=S),L}function s(c){const d=new Xe,h=/solid([\s\S]*?)endsolid/g,p=/facet([\s\S]*?)endfacet/g,f=/solid\s(.+)/;let _=0;const g=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+g+g+g,"g"),u=new RegExp("normal"+g+g+g,"g"),x=[],M=[],S=[],R=new $;let P,L=0,N=0,w=0;for(;(P=h.exec(c))!==null;){N=w;const E=P[0],B=(P=f.exec(E))!==null?P[1]:"";for(S.push(B);(P=p.exec(E))!==null;){let y=0,W=0;const H=P[0];for(;(P=u.exec(H))!==null;)R.x=parseFloat(P[1]),R.y=parseFloat(P[2]),R.z=parseFloat(P[3]),W++;for(;(P=m.exec(H))!==null;)x.push(parseFloat(P[1]),parseFloat(P[2]),parseFloat(P[3])),M.push(R.x,R.y,R.z),y++,w++;W!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+_),y!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+_),_++}const C=N,z=w-N;d.userData.groupNames=S,d.addGroup(C,z,L),L++}return d.setAttribute("position",new Me(x,3)),d.setAttribute("normal",new Me(M,3)),d}function a(c){return typeof c!="string"?new TextDecoder().decode(c):c}function o(c){if(typeof c=="string"){const d=new Uint8Array(c.length);for(let h=0;h<c.length;h++)d[h]=c.charCodeAt(h)&255;return d.buffer||d}else return c}const l=o(t);return e(l)?r(l):s(a(t))}}class eu extends K_{constructor(t){super(t)}parse(t){function e(H){switch(H.image_type){case p:case g:if(H.colormap_length>256||H.colormap_size!==24||H.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case f:case _:case m:case u:if(H.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case h:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+H.image_type)}if(H.width<=0||H.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(H.pixel_size!==8&&H.pixel_size!==16&&H.pixel_size!==24&&H.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+H.pixel_size)}function n(H,Z,J,Q,pt){let j,Y;const vt=J.pixel_size>>3,X=J.width*J.height*vt;if(Z&&(Y=pt.subarray(Q,Q+=J.colormap_length*(J.colormap_size>>3))),H){j=new Uint8Array(X);let q,ct,ft,yt=0;const Tt=new Uint8Array(vt);for(;yt<X;)if(q=pt[Q++],ct=(q&127)+1,q&128){for(ft=0;ft<vt;++ft)Tt[ft]=pt[Q++];for(ft=0;ft<ct;++ft)j.set(Tt,yt+ft*vt);yt+=vt*ct}else{for(ct*=vt,ft=0;ft<ct;++ft)j[yt+ft]=pt[Q++];yt+=ct}}else j=pt.subarray(Q,Q+=Z?J.width*J.height:X);return{pixel_data:j,palettes:Y}}function r(H,Z,J,Q,pt,j,Y,vt,X){const q=X;let ct,ft=0,yt,Tt;const zt=E.width;for(Tt=Z;Tt!==Q;Tt+=J)for(yt=pt;yt!==Y;yt+=j,ft++)ct=vt[ft],H[(yt+zt*Tt)*4+3]=255,H[(yt+zt*Tt)*4+2]=q[ct*3+0],H[(yt+zt*Tt)*4+1]=q[ct*3+1],H[(yt+zt*Tt)*4+0]=q[ct*3+2];return H}function s(H,Z,J,Q,pt,j,Y,vt){let X,q=0,ct,ft;const yt=E.width;for(ft=Z;ft!==Q;ft+=J)for(ct=pt;ct!==Y;ct+=j,q+=2)X=vt[q+0]+(vt[q+1]<<8),H[(ct+yt*ft)*4+0]=(X&31744)>>7,H[(ct+yt*ft)*4+1]=(X&992)>>2,H[(ct+yt*ft)*4+2]=(X&31)<<3,H[(ct+yt*ft)*4+3]=X&32768?0:255;return H}function a(H,Z,J,Q,pt,j,Y,vt){let X=0,q,ct;const ft=E.width;for(ct=Z;ct!==Q;ct+=J)for(q=pt;q!==Y;q+=j,X+=3)H[(q+ft*ct)*4+3]=255,H[(q+ft*ct)*4+2]=vt[X+0],H[(q+ft*ct)*4+1]=vt[X+1],H[(q+ft*ct)*4+0]=vt[X+2];return H}function o(H,Z,J,Q,pt,j,Y,vt){let X=0,q,ct;const ft=E.width;for(ct=Z;ct!==Q;ct+=J)for(q=pt;q!==Y;q+=j,X+=4)H[(q+ft*ct)*4+2]=vt[X+0],H[(q+ft*ct)*4+1]=vt[X+1],H[(q+ft*ct)*4+0]=vt[X+2],H[(q+ft*ct)*4+3]=vt[X+3];return H}function l(H,Z,J,Q,pt,j,Y,vt){let X,q=0,ct,ft;const yt=E.width;for(ft=Z;ft!==Q;ft+=J)for(ct=pt;ct!==Y;ct+=j,q++)X=vt[q],H[(ct+yt*ft)*4+0]=X,H[(ct+yt*ft)*4+1]=X,H[(ct+yt*ft)*4+2]=X,H[(ct+yt*ft)*4+3]=255;return H}function c(H,Z,J,Q,pt,j,Y,vt){let X=0,q,ct;const ft=E.width;for(ct=Z;ct!==Q;ct+=J)for(q=pt;q!==Y;q+=j,X+=2)H[(q+ft*ct)*4+0]=vt[X+0],H[(q+ft*ct)*4+1]=vt[X+0],H[(q+ft*ct)*4+2]=vt[X+0],H[(q+ft*ct)*4+3]=vt[X+1];return H}function d(H,Z,J,Q,pt){let j,Y,vt,X,q,ct;switch((E.flags&x)>>M){default:case P:j=0,vt=1,q=Z,Y=0,X=1,ct=J;break;case S:j=0,vt=1,q=Z,Y=J-1,X=-1,ct=-1;break;case L:j=Z-1,vt=-1,q=-1,Y=0,X=1,ct=J;break;case R:j=Z-1,vt=-1,q=-1,Y=J-1,X=-1,ct=-1;break}if(z)switch(E.pixel_size){case 8:l(H,Y,X,ct,j,vt,q,Q);break;case 16:c(H,Y,X,ct,j,vt,q,Q);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(E.pixel_size){case 8:r(H,Y,X,ct,j,vt,q,Q,pt);break;case 16:s(H,Y,X,ct,j,vt,q,Q);break;case 24:a(H,Y,X,ct,j,vt,q,Q);break;case 32:o(H,Y,X,ct,j,vt,q,Q);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return H}const h=0,p=1,f=2,_=3,g=9,m=10,u=11,x=48,M=4,S=0,R=1,P=2,L=3;if(t.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let N=0;const w=new Uint8Array(t),E={id_length:w[N++],colormap_type:w[N++],image_type:w[N++],colormap_index:w[N++]|w[N++]<<8,colormap_length:w[N++]|w[N++]<<8,colormap_size:w[N++],origin:[w[N++]|w[N++]<<8,w[N++]|w[N++]<<8],width:w[N++]|w[N++]<<8,height:w[N++]|w[N++]<<8,pixel_size:w[N++],flags:w[N++]};if(e(E),E.id_length+N>t.length)throw new Error("THREE.TGALoader: No data.");N+=E.id_length;let B=!1,C=!1,z=!1;switch(E.image_type){case g:B=!0,C=!0;break;case p:C=!0;break;case m:B=!0;break;case f:break;case u:B=!0,z=!0;break;case _:z=!0;break}const y=new Uint8Array(E.width*E.height*4),W=n(B,C,E,N,w);return d(y,E.width,E.height,W.pixel_data,W.palettes),{data:y,width:E.width,height:E.height,flipY:!0,generateMipmaps:!0,minFilter:Hn}}}class fv extends Yn{load(t,e,n,r){const s=this,a=s.path===""?Ju.extractUrlBase(t):s.path,o=new ua(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(t,function(l){try{e(s.parse(l,a))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},n,r)}parse(t,e){function n(A,T){const U=[],D=A.childNodes;for(let k=0,dt=D.length;k<dt;k++){const _t=D[k];_t.nodeName===T&&U.push(_t)}return U}function r(A){if(A.length===0)return[];const T=A.trim().split(/\s+/),U=new Array(T.length);for(let D=0,k=T.length;D<k;D++)U[D]=T[D];return U}function s(A){if(A.length===0)return[];const T=A.trim().split(/\s+/),U=new Array(T.length);for(let D=0,k=T.length;D<k;D++)U[D]=parseFloat(T[D]);return U}function a(A){if(A.length===0)return[];const T=A.trim().split(/\s+/),U=new Array(T.length);for(let D=0,k=T.length;D<k;D++)U[D]=parseInt(T[D]);return U}function o(A){return A.substring(1)}function l(){return"three_default_"+fh++}function c(A){return Object.keys(A).length===0}function d(A){return{unit:h(n(A,"unit")[0]),upAxis:p(n(A,"up_axis")[0])}}function h(A){return A!==void 0&&A.hasAttribute("meter")===!0?parseFloat(A.getAttribute("meter")):1}function p(A){return A!==void 0?A.textContent:"Y_UP"}function f(A,T,U,D){const k=n(A,T)[0];if(k!==void 0){const dt=n(k,U);for(let _t=0;_t<dt.length;_t++)D(dt[_t])}}function _(A,T){for(const U in A){const D=A[U];D.build=T(A[U])}}function g(A,T){return A.build!==void 0||(A.build=T(A)),A.build}function m(A){const T={sources:{},samplers:{},channels:{}};let U=!1;for(let D=0,k=A.childNodes.length;D<k;D++){const dt=A.childNodes[D];if(dt.nodeType!==1)continue;let _t;switch(dt.nodeName){case"source":_t=dt.getAttribute("id"),T.sources[_t]=mt(dt);break;case"sampler":_t=dt.getAttribute("id"),T.samplers[_t]=u(dt);break;case"channel":_t=dt.getAttribute("target"),T.channels[_t]=x(dt);break;case"animation":m(dt),U=!0;break;default:console.log(dt)}}U===!1&&(Jt.animations[A.getAttribute("id")||zn.generateUUID()]=T)}function u(A){const T={inputs:{}};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const dt=o(k.getAttribute("source")),_t=k.getAttribute("semantic");T.inputs[_t]=dt;break}}return T}function x(A){const T={};let D=A.getAttribute("target").split("/");const k=D.shift();let dt=D.shift();const _t=dt.indexOf("(")!==-1,Bt=dt.indexOf(".")!==-1;if(Bt)D=dt.split("."),dt=D.shift(),T.member=D.shift();else if(_t){const Ct=dt.split("(");dt=Ct.shift();for(let Ft=0;Ft<Ct.length;Ft++)Ct[Ft]=parseInt(Ct[Ft].replace(/\)/,""));T.indices=Ct}return T.id=k,T.sid=dt,T.arraySyntax=_t,T.memberSyntax=Bt,T.sampler=o(A.getAttribute("source")),T}function M(A){const T=[],U=A.channels,D=A.samplers,k=A.sources;for(const dt in U)if(U.hasOwnProperty(dt)){const _t=U[dt],Bt=D[_t.sampler],Ct=Bt.inputs.INPUT,Ft=Bt.inputs.OUTPUT,qt=k[Ct],wt=k[Ft],jt=R(_t,qt,wt);E(jt,T)}return T}function S(A){return g(Jt.animations[A],M)}function R(A,T,U){const D=Jt.nodes[A.id],k=Ne(D.id),dt=D.transforms[A.sid],_t=D.matrix.clone().transpose();let Bt,Ct,Ft,qt,wt,jt;const Vt={};switch(dt){case"matrix":for(Ft=0,qt=T.array.length;Ft<qt;Ft++)if(Bt=T.array[Ft],Ct=Ft*U.stride,Vt[Bt]===void 0&&(Vt[Bt]={}),A.arraySyntax===!0){const Ie=U.array[Ct],Ee=A.indices[0]+4*A.indices[1];Vt[Bt][Ee]=Ie}else for(wt=0,jt=U.stride;wt<jt;wt++)Vt[Bt][wt]=U.array[Ct+wt];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',dt);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',dt);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',dt);break}const $t=P(Vt,_t);return{name:k.uuid,keyframes:$t}}function P(A,T){const U=[];for(const k in A)U.push({time:parseFloat(k),value:A[k]});U.sort(D);for(let k=0;k<16;k++)B(U,k,T.elements[k]);return U;function D(k,dt){return k.time-dt.time}}const L=new $,N=new $,w=new Zn;function E(A,T){const U=A.keyframes,D=A.name,k=[],dt=[],_t=[],Bt=[];for(let Ct=0,Ft=U.length;Ct<Ft;Ct++){const qt=U[Ct],wt=qt.time,jt=qt.value;tt.fromArray(jt).transpose(),tt.decompose(L,w,N),k.push(wt),dt.push(L.x,L.y,L.z),_t.push(w.x,w.y,w.z,w.w),Bt.push(N.x,N.y,N.z)}return dt.length>0&&T.push(new pr(D+".position",k,dt)),_t.length>0&&T.push(new Yr(D+".quaternion",k,_t)),Bt.length>0&&T.push(new pr(D+".scale",k,Bt)),T}function B(A,T,U){let D,k=!0,dt,_t;for(dt=0,_t=A.length;dt<_t;dt++)D=A[dt],D.value[T]===void 0?D.value[T]=null:k=!1;if(k===!0)for(dt=0,_t=A.length;dt<_t;dt++)D=A[dt],D.value[T]=U;else C(A,T)}function C(A,T){let U,D;for(let k=0,dt=A.length;k<dt;k++){const _t=A[k];if(_t.value[T]===null){if(U=z(A,k,T),D=y(A,k,T),U===null){_t.value[T]=D.value[T];continue}if(D===null){_t.value[T]=U.value[T];continue}W(_t,U,D,T)}}}function z(A,T,U){for(;T>=0;){const D=A[T];if(D.value[U]!==null)return D;T--}return null}function y(A,T,U){for(;T<A.length;){const D=A[T];if(D.value[U]!==null)return D;T++}return null}function W(A,T,U,D){if(U.time-T.time===0){A.value[D]=T.value[D];return}A.value[D]=(A.time-T.time)*(U.value[D]-T.value[D])/(U.time-T.time)+T.value[D]}function H(A){const T={name:A.getAttribute("id")||"default",start:parseFloat(A.getAttribute("start")||0),end:parseFloat(A.getAttribute("end")||0),animations:[]};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"instance_animation":T.animations.push(o(k.getAttribute("url")));break}}Jt.clips[A.getAttribute("id")]=T}function Z(A){const T=[],U=A.name,D=A.end-A.start||-1,k=A.animations;for(let dt=0,_t=k.length;dt<_t;dt++){const Bt=S(k[dt]);for(let Ct=0,Ft=Bt.length;Ct<Ft;Ct++)T.push(Bt[Ct])}return new Dc(U,D,T)}function J(A){return g(Jt.clips[A],Z)}function Q(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"skin":T.id=o(k.getAttribute("source")),T.skin=pt(k);break;case"morph":T.id=o(k.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}Jt.controllers[A.getAttribute("id")]=T}function pt(A){const T={sources:{}};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"bind_shape_matrix":T.bindShapeMatrix=s(k.textContent);break;case"source":const dt=k.getAttribute("id");T.sources[dt]=mt(k);break;case"joints":T.joints=j(k);break;case"vertex_weights":T.vertexWeights=Y(k);break}}return T}function j(A){const T={inputs:{}};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const dt=k.getAttribute("semantic"),_t=o(k.getAttribute("source"));T.inputs[dt]=_t;break}}return T}function Y(A){const T={inputs:{}};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const dt=k.getAttribute("semantic"),_t=o(k.getAttribute("source")),Bt=parseInt(k.getAttribute("offset"));T.inputs[dt]={id:_t,offset:Bt};break;case"vcount":T.vcount=a(k.textContent);break;case"v":T.v=a(k.textContent);break}}return T}function vt(A){const T={id:A.id},U=Jt.geometries[T.id];return A.skin!==void 0&&(T.skin=X(A.skin),U.sources.skinIndices=T.skin.indices,U.sources.skinWeights=T.skin.weights),T}function X(A){const U={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},D=A.sources,k=A.vertexWeights,dt=k.vcount,_t=k.v,Bt=k.inputs.JOINT.offset,Ct=k.inputs.WEIGHT.offset,Ft=A.sources[A.joints.inputs.JOINT],qt=A.sources[A.joints.inputs.INV_BIND_MATRIX],wt=D[k.inputs.WEIGHT.id].array;let jt=0,Vt,$t,Yt;for(Vt=0,Yt=dt.length;Vt<Yt;Vt++){const Ee=dt[Vt],xe=[];for($t=0;$t<Ee;$t++){const ye=_t[jt+Bt],Ln=_t[jt+Ct],tn=wt[Ln];xe.push({index:ye,weight:tn}),jt+=2}for(xe.sort(Ie),$t=0;$t<4;$t++){const ye=xe[$t];ye!==void 0?(U.indices.array.push(ye.index),U.weights.array.push(ye.weight)):(U.indices.array.push(0),U.weights.array.push(0))}}for(A.bindShapeMatrix?U.bindMatrix=new se().fromArray(A.bindShapeMatrix).transpose():U.bindMatrix=new se().identity(),Vt=0,Yt=Ft.array.length;Vt<Yt;Vt++){const Ee=Ft.array[Vt],xe=new se().fromArray(qt.array,Vt*qt.stride).transpose();U.joints.push({name:Ee,boneInverse:xe})}return U;function Ie(Ee,xe){return xe.weight-Ee.weight}}function q(A){return g(Jt.controllers[A],vt)}function ct(A){const T={init_from:n(A,"init_from")[0].textContent};Jt.images[A.getAttribute("id")]=T}function ft(A){return A.build!==void 0?A.build:A.init_from}function yt(A){const T=Jt.images[A];return T!==void 0?g(T,ft):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",A),null)}function Tt(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"profile_COMMON":T.profile=zt(k);break}}Jt.effects[A.getAttribute("id")]=T}function zt(A){const T={surfaces:{},samplers:{}};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"newparam":Qt(k,T);break;case"technique":T.technique=v(k);break;case"extra":T.extra=ot(k);break}}return T}function Qt(A,T){const U=A.getAttribute("sid");for(let D=0,k=A.childNodes.length;D<k;D++){const dt=A.childNodes[D];if(dt.nodeType===1)switch(dt.nodeName){case"surface":T.surfaces[U]=ee(dt);break;case"sampler2D":T.samplers[U]=pe(dt);break}}}function ee(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"init_from":T.init_from=k.textContent;break}}return T}function pe(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"source":T.source=k.textContent;break}}return T}function v(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"constant":case"lambert":case"blinn":case"phong":T.type=k.nodeName,T.parameters=gt(k);break;case"extra":T.extra=ot(k);break}}return T}function gt(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":T[k.nodeName]=st(k);break;case"transparent":T[k.nodeName]={opaque:k.hasAttribute("opaque")?k.getAttribute("opaque"):"A_ONE",data:st(k)};break}}return T}function st(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"color":T[k.nodeName]=s(k.textContent);break;case"float":T[k.nodeName]=parseFloat(k.textContent);break;case"texture":T[k.nodeName]={id:k.getAttribute("texture"),extra:V(k)};break}}return T}function V(A){const T={technique:{}};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"extra":O(k,T);break}}return T}function O(A,T){for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"technique":K(k,T);break}}}function K(A,T){for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":T.technique[k.nodeName]=parseFloat(k.textContent);break;case"wrapU":case"wrapV":k.textContent.toUpperCase()==="TRUE"?T.technique[k.nodeName]=1:k.textContent.toUpperCase()==="FALSE"?T.technique[k.nodeName]=0:T.technique[k.nodeName]=parseInt(k.textContent);break;case"bump":T[k.nodeName]=b(k);break}}}function ot(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"technique":T.technique=I(k);break}}return T}function I(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"double_sided":T[k.nodeName]=parseInt(k.textContent);break;case"bump":T[k.nodeName]=b(k);break}}return T}function b(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"texture":T[k.nodeName]={id:k.getAttribute("texture"),texcoord:k.getAttribute("texcoord"),extra:V(k)};break}}return T}function G(A){return A}function rt(A){return g(Jt.effects[A],G)}function nt(A){const T={name:A.getAttribute("name")};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"instance_effect":T.url=o(k.getAttribute("url"));break}}Jt.materials[A.getAttribute("id")]=T}function at(A){let T,U=A.slice((A.lastIndexOf(".")-1>>>0)+2);switch(U=U.toLowerCase(),U){case"tga":T=cn;break;default:T=mn}return T}function At(A){const T=rt(A.url),U=T.profile.technique;let D;switch(U.type){case"phong":case"blinn":D=new sr;break;case"lambert":D=new B_;break;default:D=new qs;break}D.name=A.name||"";function k(Ct,Ft=null){const qt=T.profile.samplers[Ct.id];let wt=null;if(qt!==void 0){const jt=T.profile.surfaces[qt.source];wt=yt(jt.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),wt=yt(Ct.id);if(wt!==null){const jt=at(wt);if(jt!==void 0){const Vt=jt.load(wt),$t=Ct.extra;if($t!==void 0&&$t.technique!==void 0&&c($t.technique)===!1){const Yt=$t.technique;Vt.wrapS=Yt.wrapU?Vn:yn,Vt.wrapT=Yt.wrapV?Vn:yn,Vt.offset.set(Yt.offsetU||0,Yt.offsetV||0),Vt.repeat.set(Yt.repeatU||1,Yt.repeatV||1)}else Vt.wrapS=Vn,Vt.wrapT=Vn;return Ft!==null&&(Vt.colorSpace=Ft),Vt}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",wt),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",Ct.id),null}const dt=U.parameters;for(const Ct in dt){const Ft=dt[Ct];switch(Ct){case"diffuse":Ft.color&&D.color.fromArray(Ft.color),Ft.texture&&(D.map=k(Ft.texture,De));break;case"specular":Ft.color&&D.specular&&D.specular.fromArray(Ft.color),Ft.texture&&(D.specularMap=k(Ft.texture));break;case"bump":Ft.texture&&(D.normalMap=k(Ft.texture));break;case"ambient":Ft.texture&&(D.lightMap=k(Ft.texture,De));break;case"shininess":Ft.float&&D.shininess&&(D.shininess=Ft.float);break;case"emission":Ft.color&&D.emissive&&D.emissive.fromArray(Ft.color),Ft.texture&&(D.emissiveMap=k(Ft.texture,De));break}}fe.toWorkingColorSpace(D.color,De),D.specular&&fe.toWorkingColorSpace(D.specular,De),D.emissive&&fe.toWorkingColorSpace(D.emissive,De);let _t=dt.transparent,Bt=dt.transparency;if(Bt===void 0&&_t&&(Bt={float:1}),_t===void 0&&Bt&&(_t={opaque:"A_ONE",data:{color:[1,1,1,1]}}),_t&&Bt)if(_t.data.texture)D.transparent=!0;else{const Ct=_t.data.color;switch(_t.opaque){case"A_ONE":D.opacity=Ct[3]*Bt.float;break;case"RGB_ZERO":D.opacity=1-Ct[0]*Bt.float;break;case"A_ZERO":D.opacity=1-Ct[3]*Bt.float;break;case"RGB_ONE":D.opacity=Ct[0]*Bt.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',_t.opaque)}D.opacity<1&&(D.transparent=!0)}if(U.extra!==void 0&&U.extra.technique!==void 0){const Ct=U.extra.technique;for(const Ft in Ct){const qt=Ct[Ft];switch(Ft){case"double_sided":D.side=qt===1?Tn:Xn;break;case"bump":D.normalMap=k(qt.texture),D.normalScale=new me(1,1);break}}}return D}function St(A){return g(Jt.materials[A],At)}function Rt(A){const T={name:A.getAttribute("name")};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"optics":T.optics=ce(k);break}}Jt.cameras[A.getAttribute("id")]=T}function ce(A){for(let T=0;T<A.childNodes.length;T++){const U=A.childNodes[T];switch(U.nodeName){case"technique_common":return Mt(U)}}return{}}function Mt(A){const T={};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];switch(D.nodeName){case"perspective":case"orthographic":T.technique=D.nodeName,T.parameters=Ot(D);break}}return T}function Ot(A){const T={};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];switch(D.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":T[D.nodeName]=parseFloat(D.textContent);break}}return T}function Nt(A){let T;switch(A.optics.technique){case"perspective":T=new We(A.optics.parameters.yfov,A.optics.parameters.aspect_ratio,A.optics.parameters.znear,A.optics.parameters.zfar);break;case"orthographic":let U=A.optics.parameters.ymag,D=A.optics.parameters.xmag;const k=A.optics.parameters.aspect_ratio;D=D===void 0?U*k:D,U=U===void 0?D/k:U,D*=.5,U*=.5,T=new sl(-D,D,U,-U,A.optics.parameters.znear,A.optics.parameters.zfar);break;default:T=new We;break}return T.name=A.name||"",T}function Kt(A){const T=Jt.cameras[A];return T!==void 0?g(T,Nt):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",A),null)}function kt(A){let T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"technique_common":T=ne(k);break}}Jt.lights[A.getAttribute("id")]=T}function ne(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"directional":case"point":case"spot":case"ambient":T.technique=k.nodeName,T.parameters=ie(k)}}return T}function ie(A){const T={};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"color":const dt=s(k.textContent);T.color=new ae().fromArray(dt),fe.toWorkingColorSpace(T.color,De);break;case"falloff_angle":T.falloffAngle=parseFloat(k.textContent);break;case"quadratic_attenuation":const _t=parseFloat(k.textContent);T.distance=_t?Math.sqrt(1/_t):0;break}}return T}function be(A){let T;switch(A.technique){case"directional":T=new Ku;break;case"point":T=new e0;break;case"spot":T=new Q_;break;case"ambient":T=new $u;break}return A.parameters.color&&T.color.copy(A.parameters.color),A.parameters.distance&&(T.distance=A.parameters.distance),T}function et(A){const T=Jt.lights[A];return T!==void 0?g(T,be):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",A),null)}function Pt(A){const T={name:A.getAttribute("name"),sources:{},vertices:{},primitives:[]},U=n(A,"mesh")[0];if(U!==void 0){for(let D=0;D<U.childNodes.length;D++){const k=U.childNodes[D];if(k.nodeType!==1)continue;const dt=k.getAttribute("id");switch(k.nodeName){case"source":T.sources[dt]=mt(k);break;case"vertices":T.vertices=xt(k);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",k.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":T.primitives.push(Lt(k));break;default:console.log(k)}}Jt.geometries[A.getAttribute("id")]=T}}function mt(A){const T={array:[],stride:3};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"float_array":T.array=s(D.textContent);break;case"Name_array":T.array=r(D.textContent);break;case"technique_common":const k=n(D,"accessor")[0];k!==void 0&&(T.stride=parseInt(k.getAttribute("stride")));break}}return T}function xt(A){const T={};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];D.nodeType===1&&(T[D.getAttribute("semantic")]=o(D.getAttribute("source")))}return T}function Lt(A){const T={type:A.nodeName,material:A.getAttribute("material"),count:parseInt(A.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let U=0,D=A.childNodes.length;U<D;U++){const k=A.childNodes[U];if(k.nodeType===1)switch(k.nodeName){case"input":const dt=o(k.getAttribute("source")),_t=k.getAttribute("semantic"),Bt=parseInt(k.getAttribute("offset")),Ct=parseInt(k.getAttribute("set")),Ft=Ct>0?_t+Ct:_t;T.inputs[Ft]={id:dt,offset:Bt},T.stride=Math.max(T.stride,Bt+1),_t==="TEXCOORD"&&(T.hasUV=!0);break;case"vcount":T.vcount=a(k.textContent);break;case"p":T.p=a(k.textContent);break}}return T}function Ut(A){const T={};for(let U=0;U<A.length;U++){const D=A[U];T[D.type]===void 0&&(T[D.type]=[]),T[D.type].push(D)}return T}function oe(A){let T=0;for(let U=0,D=A.length;U<D;U++)A[U].hasUV===!0&&T++;T>0&&T<A.length&&(A.uvsNeedsFix=!0)}function Re(A){const T={},U=A.sources,D=A.vertices,k=A.primitives;if(k.length===0)return{};const dt=Ut(k);for(const _t in dt){const Bt=dt[_t];oe(Bt),T[_t]=ke(Bt,U,D)}return T}function ke(A,T,U){const D={},k={array:[],stride:0},dt={array:[],stride:0},_t={array:[],stride:0},Bt={array:[],stride:0},Ct={array:[],stride:0},Ft={array:[],stride:4},qt={array:[],stride:4},wt=new Xe,jt=[];let Vt=0;for(let $t=0;$t<A.length;$t++){const Yt=A[$t],Ie=Yt.inputs;let Ee=0;switch(Yt.type){case"lines":case"linestrips":Ee=Yt.count*2;break;case"triangles":Ee=Yt.count*3;break;case"polylist":for(let xe=0;xe<Yt.count;xe++){const ye=Yt.vcount[xe];switch(ye){case 3:Ee+=3;break;case 4:Ee+=6;break;default:Ee+=(ye-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",Yt.type)}wt.addGroup(Vt,Ee,$t),Vt+=Ee,Yt.material&&jt.push(Yt.material);for(const xe in Ie){const ye=Ie[xe];switch(xe){case"VERTEX":for(const Ln in U){const tn=U[Ln];switch(Ln){case"POSITION":const Ni=k.array.length;if(ue(Yt,T[tn],ye.offset,k.array),k.stride=T[tn].stride,T.skinWeights&&T.skinIndices&&(ue(Yt,T.skinIndices,ye.offset,Ft.array),ue(Yt,T.skinWeights,ye.offset,qt.array)),Yt.hasUV===!1&&A.uvsNeedsFix===!0){const ph=(k.array.length-Ni)/k.stride;for(let gl=0;gl<ph;gl++)_t.array.push(0,0)}break;case"NORMAL":ue(Yt,T[tn],ye.offset,dt.array),dt.stride=T[tn].stride;break;case"COLOR":ue(Yt,T[tn],ye.offset,Ct.array),Ct.stride=T[tn].stride;break;case"TEXCOORD":ue(Yt,T[tn],ye.offset,_t.array),_t.stride=T[tn].stride;break;case"TEXCOORD1":ue(Yt,T[tn],ye.offset,Bt.array),_t.stride=T[tn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',Ln)}}break;case"NORMAL":ue(Yt,T[ye.id],ye.offset,dt.array),dt.stride=T[ye.id].stride;break;case"COLOR":ue(Yt,T[ye.id],ye.offset,Ct.array,!0),Ct.stride=T[ye.id].stride;break;case"TEXCOORD":ue(Yt,T[ye.id],ye.offset,_t.array),_t.stride=T[ye.id].stride;break;case"TEXCOORD1":ue(Yt,T[ye.id],ye.offset,Bt.array),Bt.stride=T[ye.id].stride;break}}}return k.array.length>0&&wt.setAttribute("position",new Me(k.array,k.stride)),dt.array.length>0&&wt.setAttribute("normal",new Me(dt.array,dt.stride)),Ct.array.length>0&&wt.setAttribute("color",new Me(Ct.array,Ct.stride)),_t.array.length>0&&wt.setAttribute("uv",new Me(_t.array,_t.stride)),Bt.array.length>0&&wt.setAttribute("uv1",new Me(Bt.array,Bt.stride)),Ft.array.length>0&&wt.setAttribute("skinIndex",new Me(Ft.array,Ft.stride)),qt.array.length>0&&wt.setAttribute("skinWeight",new Me(qt.array,qt.stride)),D.data=wt,D.type=A[0].type,D.materialKeys=jt,D}function ue(A,T,U,D,k=!1){const dt=A.p,_t=A.stride,Bt=A.vcount;function Ct(wt){let jt=dt[wt+U]*qt;const Vt=jt+qt;for(;jt<Vt;jt++)D.push(Ft[jt]);if(k){const $t=D.length-qt-1;mi.setRGB(D[$t+0],D[$t+1],D[$t+2],De),D[$t+0]=mi.r,D[$t+1]=mi.g,D[$t+2]=mi.b}}const Ft=T.array,qt=T.stride;if(A.vcount!==void 0){let wt=0;for(let jt=0,Vt=Bt.length;jt<Vt;jt++){const $t=Bt[jt];if($t===4){const Yt=wt+_t*0,Ie=wt+_t*1,Ee=wt+_t*2,xe=wt+_t*3;Ct(Yt),Ct(Ie),Ct(xe),Ct(Ie),Ct(Ee),Ct(xe)}else if($t===3){const Yt=wt+_t*0,Ie=wt+_t*1,Ee=wt+_t*2;Ct(Yt),Ct(Ie),Ct(Ee)}else if($t>4)for(let Yt=1,Ie=$t-2;Yt<=Ie;Yt++){const Ee=wt+_t*0,xe=wt+_t*Yt,ye=wt+_t*(Yt+1);Ct(Ee),Ct(xe),Ct(ye)}wt+=_t*$t}}else for(let wt=0,jt=dt.length;wt<jt;wt+=_t)Ct(wt)}function Je(A){return g(Jt.geometries[A],Re)}function fn(A){const T={name:A.getAttribute("name")||"",joints:{},links:[]};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"technique_common":Pn(D,T);break}}Jt.kinematicsModels[A.getAttribute("id")]=T}function Kr(A){return A.build!==void 0?A.build:A}function $r(A){return g(Jt.kinematicsModels[A],Kr)}function Pn(A,T){for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"joint":T.joints[D.getAttribute("sid")]=yr(D);break;case"link":T.links.push(br(D));break}}}function yr(A){let T;for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"prismatic":case"revolute":T=Jr(D);break}}return T}function Jr(A){const T={sid:A.getAttribute("sid"),name:A.getAttribute("name")||"",axis:new $,limits:{min:0,max:0},type:A.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"axis":const k=s(D.textContent);T.axis.fromArray(k);break;case"limits":const dt=D.getElementsByTagName("max")[0],_t=D.getElementsByTagName("min")[0];T.limits.max=parseFloat(dt.textContent),T.limits.min=parseFloat(_t.textContent);break}}return T.limits.min>=T.limits.max&&(T.static=!0),T.middlePosition=(T.limits.min+T.limits.max)/2,T}function br(A){const T={sid:A.getAttribute("sid"),name:A.getAttribute("name")||"",attachments:[],transforms:[]};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"attachment_full":T.attachments.push(Ii(D));break;case"matrix":case"translate":case"rotate":T.transforms.push(Sr(D));break}}return T}function Ii(A){const T={joint:A.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"link":T.links.push(br(D));break;case"matrix":case"translate":case"rotate":T.transforms.push(Sr(D));break}}return T}function Sr(A){const T={type:A.nodeName},U=s(A.textContent);switch(T.type){case"matrix":T.obj=new se,T.obj.fromArray(U).transpose();break;case"translate":T.obj=new $,T.obj.fromArray(U);break;case"rotate":T.obj=new $,T.obj.fromArray(U),T.angle=zn.degToRad(U[3]);break}return T}function Di(A){const T={name:A.getAttribute("name")||"",rigidBodies:{}};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"rigid_body":T.rigidBodies[D.getAttribute("name")]={},Qr(D,T.rigidBodies[D.getAttribute("name")]);break}}Jt.physicsModels[A.getAttribute("id")]=T}function Qr(A,T){for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"technique_common":ts(D,T);break}}}function ts(A,T){for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"inertia":T.inertia=s(D.textContent);break;case"mass":T.mass=s(D.textContent)[0];break}}}function fa(A){const T={bindJointAxis:[]};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"bind_joint_axis":T.bindJointAxis.push(pa(D));break}}Jt.kinematicsScenes[o(A.getAttribute("url"))]=T}function pa(A){const T={target:A.getAttribute("target").split("/").pop()};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType===1)switch(D.nodeName){case"axis":const k=D.getElementsByTagName("param")[0];T.axis=k.textContent;const dt=T.axis.split("inst_").pop().split("axis")[0];T.jointIndex=dt.substring(0,dt.length-1);break}}return T}function ma(A){return A.build!==void 0?A.build:A}function F(A){return g(Jt.kinematicsScenes[A],ma)}function it(){const A=Object.keys(Jt.kinematicsModels)[0],T=Object.keys(Jt.kinematicsScenes)[0],U=Object.keys(Jt.visualScenes)[0];if(A===void 0||T===void 0)return;const D=$r(A),k=F(T),dt=_e(U),_t=k.bindJointAxis,Bt={};for(let qt=0,wt=_t.length;qt<wt;qt++){const jt=_t[qt],Vt=re.querySelector('[sid="'+jt.target+'"]');if(Vt){const $t=Vt.parentElement;Ct(jt.jointIndex,$t)}}function Ct(qt,wt){const jt=wt.getAttribute("name"),Vt=D.joints[qt];dt.traverse(function($t){$t.name===jt&&(Bt[qt]={object:$t,transforms:ut(wt),joint:Vt,position:Vt.zeroPosition})})}const Ft=new se;ml={joints:D&&D.joints,getJointValue:function(qt){const wt=Bt[qt];if(wt)return wt.position;console.warn("THREE.ColladaLoader: Joint "+qt+" doesn't exist.")},setJointValue:function(qt,wt){const jt=Bt[qt];if(jt){const Vt=jt.joint;if(wt>Vt.limits.max||wt<Vt.limits.min)console.warn("THREE.ColladaLoader: Joint "+qt+" value "+wt+" outside of limits (min: "+Vt.limits.min+", max: "+Vt.limits.max+").");else if(Vt.static)console.warn("THREE.ColladaLoader: Joint "+qt+" is static.");else{const $t=jt.object,Yt=Vt.axis,Ie=jt.transforms;tt.identity();for(let Ee=0;Ee<Ie.length;Ee++){const xe=Ie[Ee];if(xe.sid&&xe.sid.indexOf(qt)!==-1)switch(Vt.type){case"revolute":tt.multiply(Ft.makeRotationAxis(Yt,zn.degToRad(wt)));break;case"prismatic":tt.multiply(Ft.makeTranslation(Yt.x*wt,Yt.y*wt,Yt.z*wt));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Vt.type);break}else switch(xe.type){case"matrix":tt.multiply(xe.obj);break;case"translate":tt.multiply(Ft.makeTranslation(xe.obj.x,xe.obj.y,xe.obj.z));break;case"scale":tt.scale(xe.obj);break;case"rotate":tt.multiply(Ft.makeRotationAxis(xe.obj,xe.angle));break}}$t.matrix.copy(tt),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),Bt[qt].position=wt}}else console.log("THREE.ColladaLoader: "+qt+" does not exist.")}}}function ut(A){const T=[],U=re.querySelector('[id="'+A.id+'"]');for(let D=0;D<U.childNodes.length;D++){const k=U.childNodes[D];if(k.nodeType!==1)continue;let dt,_t;switch(k.nodeName){case"matrix":dt=s(k.textContent);const Bt=new se().fromArray(dt).transpose();T.push({sid:k.getAttribute("sid"),type:k.nodeName,obj:Bt});break;case"translate":case"scale":dt=s(k.textContent),_t=new $().fromArray(dt),T.push({sid:k.getAttribute("sid"),type:k.nodeName,obj:_t});break;case"rotate":dt=s(k.textContent),_t=new $().fromArray(dt);const Ct=zn.degToRad(dt[3]);T.push({sid:k.getAttribute("sid"),type:k.nodeName,obj:_t,angle:Ct});break}}return T}function ht(A){const T=A.getElementsByTagName("node");for(let U=0;U<T.length;U++){const D=T[U];D.hasAttribute("id")===!1&&D.setAttribute("id",l())}}const tt=new se,Et=new $;function Dt(A){const T={name:A.getAttribute("name")||"",type:A.getAttribute("type"),id:A.getAttribute("id"),sid:A.getAttribute("sid"),matrix:new se,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];if(D.nodeType!==1)continue;let k;switch(D.nodeName){case"node":T.nodes.push(D.getAttribute("id")),Dt(D);break;case"instance_camera":T.instanceCameras.push(o(D.getAttribute("url")));break;case"instance_controller":T.instanceControllers.push(Ht(D));break;case"instance_light":T.instanceLights.push(o(D.getAttribute("url")));break;case"instance_geometry":T.instanceGeometries.push(Ht(D));break;case"instance_node":T.instanceNodes.push(o(D.getAttribute("url")));break;case"matrix":k=s(D.textContent),T.matrix.multiply(tt.fromArray(k).transpose()),T.transforms[D.getAttribute("sid")]=D.nodeName;break;case"translate":k=s(D.textContent),Et.fromArray(k),T.matrix.multiply(tt.makeTranslation(Et.x,Et.y,Et.z)),T.transforms[D.getAttribute("sid")]=D.nodeName;break;case"rotate":k=s(D.textContent);const dt=zn.degToRad(k[3]);T.matrix.multiply(tt.makeRotationAxis(Et.fromArray(k),dt)),T.transforms[D.getAttribute("sid")]=D.nodeName;break;case"scale":k=s(D.textContent),T.matrix.scale(Et.fromArray(k)),T.transforms[D.getAttribute("sid")]=D.nodeName;break;case"extra":break;default:console.log(D)}}return Te(T.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",T.id):Jt.nodes[T.id]=T,T}function Ht(A){const T={id:o(A.getAttribute("url")),materials:{},skeletons:[]};for(let U=0;U<A.childNodes.length;U++){const D=A.childNodes[U];switch(D.nodeName){case"bind_material":const k=D.getElementsByTagName("instance_material");for(let dt=0;dt<k.length;dt++){const _t=k[dt],Bt=_t.getAttribute("symbol"),Ct=_t.getAttribute("target");T.materials[Bt]=o(Ct)}break;case"skeleton":T.skeletons.push(o(D.textContent));break}}return T}function Gt(A,T){const U=[],D=[];let k,dt,_t;for(k=0;k<A.length;k++){const Ft=A[k];let qt;if(Te(Ft))qt=Ne(Ft),te(qt,T,U);else if(pn(Ft)){const jt=Jt.visualScenes[Ft].children;for(let Vt=0;Vt<jt.length;Vt++){const $t=jt[Vt];if($t.type==="JOINT"){const Yt=Ne($t.id);te(Yt,T,U)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",Ft)}for(k=0;k<T.length;k++)for(dt=0;dt<U.length;dt++)if(_t=U[dt],_t.bone.name===T[k].name){D[k]=_t,_t.processed=!0;break}for(k=0;k<U.length;k++)_t=U[k],_t.processed===!1&&(D.push(_t),_t.processed=!0);const Bt=[],Ct=[];for(k=0;k<D.length;k++)_t=D[k],Bt.push(_t.bone),Ct.push(_t.boneInverse);return new ol(Bt,Ct)}function te(A,T,U){A.traverse(function(D){if(D.isBone===!0){let k;for(let dt=0;dt<T.length;dt++){const _t=T[dt];if(_t.name===D.name){k=_t.boneInverse;break}}k===void 0&&(k=new se),U.push({bone:D,boneInverse:k,processed:!1})}})}function le(A){const T=[],U=A.matrix,D=A.nodes,k=A.type,dt=A.instanceCameras,_t=A.instanceControllers,Bt=A.instanceLights,Ct=A.instanceGeometries,Ft=A.instanceNodes;for(let wt=0,jt=D.length;wt<jt;wt++)T.push(Ne(D[wt]));for(let wt=0,jt=dt.length;wt<jt;wt++){const Vt=Kt(dt[wt]);Vt!==null&&T.push(Vt.clone())}for(let wt=0,jt=_t.length;wt<jt;wt++){const Vt=_t[wt],$t=q(Vt.id),Yt=Je($t.id),Ie=we(Yt,Vt.materials),Ee=Vt.skeletons,xe=$t.skin.joints,ye=Gt(Ee,xe);for(let Ln=0,tn=Ie.length;Ln<tn;Ln++){const Ni=Ie[Ln];Ni.isSkinnedMesh&&(Ni.bind(ye,$t.skin.bindMatrix),Ni.normalizeSkinWeights()),T.push(Ni)}}for(let wt=0,jt=Bt.length;wt<jt;wt++){const Vt=et(Bt[wt]);Vt!==null&&T.push(Vt.clone())}for(let wt=0,jt=Ct.length;wt<jt;wt++){const Vt=Ct[wt],$t=Je(Vt.id),Yt=we($t,Vt.materials);for(let Ie=0,Ee=Yt.length;Ie<Ee;Ie++)T.push(Yt[Ie])}for(let wt=0,jt=Ft.length;wt<jt;wt++)T.push(Ne(Ft[wt]).clone());let qt;if(D.length===0&&T.length===1)qt=T[0];else{qt=k==="JOINT"?new Hu:new Ti;for(let wt=0;wt<T.length;wt++)qt.add(T[wt])}return qt.name=k==="JOINT"?A.sid:A.name,qt.matrix.copy(U),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt}const Wt=new qs({name:Yn.DEFAULT_MATERIAL_NAME,color:16711935});function ge(A,T){const U=[];for(let D=0,k=A.length;D<k;D++){const dt=T[A[D]];dt===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",A[D]),U.push(Wt)):U.push(St(dt))}return U}function we(A,T){const U=[];for(const D in A){const k=A[D],dt=ge(k.materialKeys,T);if(dt.length===0&&(D==="lines"||D==="linestrips"?dt.push(new rr):dt.push(new sr)),D==="lines"||D==="linestrips")for(let Ft=0,qt=dt.length;Ft<qt;Ft++){const wt=dt[Ft];if(wt.isMeshPhongMaterial===!0||wt.isMeshLambertMaterial===!0){const jt=new rr;jt.color.copy(wt.color),jt.opacity=wt.opacity,jt.transparent=wt.transparent,dt[Ft]=jt}}const _t=k.data.attributes.skinIndex!==void 0,Bt=dt.length===1?dt[0]:dt;let Ct;switch(D){case"lines":Ct=new Ho(k.data,Bt);break;case"linestrips":Ct=new Wu(k.data,Bt);break;case"triangles":case"polylist":_t?Ct=new F_(k.data,Bt):Ct=new Pe(k.data,Bt);break}U.push(Ct)}return U}function Te(A){return Jt.nodes[A]!==void 0}function Ne(A){return g(Jt.nodes[A],le)}function ve(A){const T={name:A.getAttribute("name"),children:[]};ht(A);const U=n(A,"node");for(let D=0;D<U.length;D++)T.children.push(Dt(U[D]));Jt.visualScenes[A.getAttribute("id")]=T}function Xt(A){const T=new Ti;T.name=A.name;const U=A.children;for(let D=0;D<U.length;D++){const k=U[D];T.add(Ne(k.id))}return T}function pn(A){return Jt.visualScenes[A]!==void 0}function _e(A){return g(Jt.visualScenes[A],Xt)}function nn(A){const T=n(A,"instance_visual_scene")[0];return _e(o(T.getAttribute("url")))}function $n(){const A=Jt.clips;if(c(A)===!0){if(c(Jt.animations)===!1){const T=[];for(const U in Jt.animations){const D=S(U);for(let k=0,dt=D.length;k<dt;k++)T.push(D[k])}es.push(new Dc("default",-1,T))}}else for(const T in A)es.push(J(T))}function je(A){let T="";const U=[A];for(;U.length;){const D=U.shift();D.nodeType===Node.TEXT_NODE?T+=D.textContent:(T+=`
`,U.push.apply(U,D.childNodes))}return T.trim()}if(t.length===0)return{scene:new Vu};const Jn=new DOMParser().parseFromString(t,"application/xml"),re=n(Jn,"COLLADA")[0],Qe=Jn.getElementsByTagName("parsererror")[0];if(Qe!==void 0){const A=n(Qe,"div")[0];let T;return A?T=A.textContent:T=je(Qe),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,T),null}const pi=re.getAttribute("version");console.debug("THREE.ColladaLoader: File version",pi);const qe=d(n(re,"asset")[0]),mn=new Zu(this.manager);mn.setPath(this.resourcePath||e).setCrossOrigin(this.crossOrigin);let cn;eu&&(cn=new eu(this.manager),cn.setPath(this.resourcePath||e));const mi=new ae,es=[];let ml={},fh=0;const Jt={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};f(re,"library_animations","animation",m),f(re,"library_animation_clips","animation_clip",H),f(re,"library_controllers","controller",Q),f(re,"library_images","image",ct),f(re,"library_effects","effect",Tt),f(re,"library_materials","material",nt),f(re,"library_cameras","camera",Rt),f(re,"library_lights","light",kt),f(re,"library_geometries","geometry",Pt),f(re,"library_nodes","node",Dt),f(re,"library_visual_scenes","visual_scene",ve),f(re,"library_kinematics_models","kinematics_model",fn),f(re,"library_physics_models","physics_model",Di),f(re,"scene","instance_kinematics_scene",fa),_(Jt.animations,M),_(Jt.clips,Z),_(Jt.controllers,vt),_(Jt.images,ft),_(Jt.effects,G),_(Jt.materials,At),_(Jt.cameras,Nt),_(Jt.lights,be),_(Jt.geometries,Re),_(Jt.visualScenes,Xt),$n(),it();const ns=nn(n(re,"scene")[0]);return ns.animations=es,qe.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),ns.rotation.set(-Math.PI/2,0,0)),ns.scale.multiplyScalar(qe.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),es},kinematics:ml,library:Jt,scene:ns}}}const nu=new $,pv=new en,Us=new se,si=new se,Fs=new Zn,Os=new $(1,1,1),ks=new $;class ha extends Le{constructor(...t){super(...t),this.urdfNode=null,this.urdfName=""}copy(t,e){return super.copy(t,e),this.urdfNode=t.urdfNode,this.urdfName=t.urdfName,this}}class mv extends ha{constructor(...t){super(...t),this.isURDFCollider=!0,this.type="URDFCollider"}}class gv extends ha{constructor(...t){super(...t),this.isURDFVisual=!0,this.type="URDFVisual"}}class uh extends ha{constructor(...t){super(...t),this.isURDFLink=!0,this.type="URDFLink"}}class hh extends ha{get jointType(){return this._jointType}set jointType(t){if(this.jointType!==t)switch(this._jointType=t,this.matrixWorldNeedsUpdate=!0,t){case"fixed":this.jointValue=[];break;case"continuous":case"revolute":case"prismatic":this.jointValue=new Array(1).fill(0);break;case"planar":this.jointValue=new Array(3).fill(0),this.axis=new $(0,0,1);break;case"floating":this.jointValue=new Array(6).fill(0);break}}get angle(){return this.jointValue[0]}constructor(...t){super(...t),this.isURDFJoint=!0,this.type="URDFJoint",this.jointValue=null,this.jointType="fixed",this.axis=new $(1,0,0),this.limit={lower:0,upper:0},this.ignoreLimits=!1,this.origPosition=null,this.origQuaternion=null,this.mimicJoints=[]}copy(t,e){return super.copy(t,e),this.jointType=t.jointType,this.axis=t.axis.clone(),this.limit.lower=t.limit.lower,this.limit.upper=t.limit.upper,this.ignoreLimits=!1,this.jointValue=[...t.jointValue],this.origPosition=t.origPosition?t.origPosition.clone():null,this.origQuaternion=t.origQuaternion?t.origQuaternion.clone():null,this.mimicJoints=[...t.mimicJoints],this}setJointValue(...t){t=t.map(n=>n===null?null:parseFloat(n)),(!this.origPosition||!this.origQuaternion)&&(this.origPosition=this.position.clone(),this.origQuaternion=this.quaternion.clone());let e=!1;switch(this.mimicJoints.forEach(n=>{e=n.updateFromMimickedJoint(...t)||e}),this.jointType){case"fixed":return e;case"continuous":case"revolute":{let n=t[0];return n==null||n===this.jointValue[0]?e:(!this.ignoreLimits&&this.jointType==="revolute"&&(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.quaternion.setFromAxisAngle(this.axis,n).premultiply(this.origQuaternion),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):e)}case"prismatic":{let n=t[0];return n==null||n===this.jointValue[0]?e:(this.ignoreLimits||(n=Math.min(this.limit.upper,n),n=Math.max(this.limit.lower,n)),this.position.copy(this.origPosition),nu.copy(this.axis).applyEuler(this.rotation),this.position.addScaledVector(nu,n),this.jointValue[0]!==n?(this.jointValue[0]=n,this.matrixWorldNeedsUpdate=!0,!0):e)}case"floating":return this.jointValue.every((n,r)=>t[r]===n||t[r]===null)?e:(this.jointValue[0]=t[0]!==null?t[0]:this.jointValue[0],this.jointValue[1]=t[1]!==null?t[1]:this.jointValue[1],this.jointValue[2]=t[2]!==null?t[2]:this.jointValue[2],this.jointValue[3]=t[3]!==null?t[3]:this.jointValue[3],this.jointValue[4]=t[4]!==null?t[4]:this.jointValue[4],this.jointValue[5]=t[5]!==null?t[5]:this.jointValue[5],si.compose(this.origPosition,this.origQuaternion,Os),Fs.setFromEuler(pv.set(this.jointValue[3],this.jointValue[4],this.jointValue[5],"XYZ")),ks.set(this.jointValue[0],this.jointValue[1],this.jointValue[2]),Us.compose(ks,Fs,Os),si.premultiply(Us),this.position.setFromMatrixPosition(si),this.rotation.setFromRotationMatrix(si),this.matrixWorldNeedsUpdate=!0,!0);case"planar":return this.jointValue.every((n,r)=>t[r]===n||t[r]===null)?e:(this.jointValue[0]=t[0]!==null?t[0]:this.jointValue[0],this.jointValue[1]=t[1]!==null?t[1]:this.jointValue[1],this.jointValue[2]=t[2]!==null?t[2]:this.jointValue[2],si.compose(this.origPosition,this.origQuaternion,Os),Fs.setFromAxisAngle(this.axis,this.jointValue[2]),ks.set(this.jointValue[0],this.jointValue[1],0),Us.compose(ks,Fs,Os),si.premultiply(Us),this.position.setFromMatrixPosition(si),this.rotation.setFromRotationMatrix(si),this.matrixWorldNeedsUpdate=!0,!0)}return e}}class iu extends hh{constructor(...t){super(...t),this.type="URDFMimicJoint",this.mimicJoint=null,this.offset=0,this.multiplier=1}updateFromMimickedJoint(...t){const e=t.map(n=>n*this.multiplier+this.offset);return super.setJointValue(...e)}copy(t,e){return super.copy(t,e),this.mimicJoint=t.mimicJoint,this.offset=t.offset,this.multiplier=t.multiplier,this}}class _v extends uh{constructor(...t){super(...t),this.isURDFRobot=!0,this.urdfNode=null,this.urdfRobotNode=null,this.robotName=null,this.links=null,this.joints=null,this.colliders=null,this.visual=null,this.frames=null}copy(t,e){super.copy(t,e),this.urdfRobotNode=t.urdfRobotNode,this.robotName=t.robotName,this.links={},this.joints={},this.colliders={},this.visual={},this.traverse(n=>{n.isURDFJoint&&n.urdfName in t.joints&&(this.joints[n.urdfName]=n),n.isURDFLink&&n.urdfName in t.links&&(this.links[n.urdfName]=n),n.isURDFCollider&&n.urdfName in t.colliders&&(this.colliders[n.urdfName]=n),n.isURDFVisual&&n.urdfName in t.visual&&(this.visual[n.urdfName]=n)});for(const n in this.joints)this.joints[n].mimicJoints=this.joints[n].mimicJoints.map(r=>this.joints[r.name]);return this.frames={...this.colliders,...this.visual,...this.links,...this.joints},this}getFrame(t){return this.frames[t]}setJointValue(t,...e){const n=this.joints[t];return n?n.setJointValue(...e):!1}setJointValues(t){let e=!1;for(const n in t){const r=t[n];Array.isArray(r)?e=this.setJointValue(n,...r)||e:e=this.setJointValue(n,r)||e}return e}}const to=new Zn,ru=new en;function Zi(i){return i?i.trim().split(/\s+/g).map(t=>parseFloat(t)):[0,0,0]}function su(i,t,e=!1){e||i.rotation.set(0,0,0),ru.set(t[0],t[1],t[2],"ZYX"),to.setFromEuler(ru),to.multiply(i.quaternion),i.quaternion.copy(to)}class vv{constructor(t){this.manager=t||Yu,this.loadMeshCb=this.defaultMeshLoader.bind(this),this.parseVisual=!0,this.parseCollision=!1,this.packages="",this.workingPath="",this.fetchOptions={}}loadAsync(t){return new Promise((e,n)=>{this.load(t,e,null,n)})}load(t,e,n,r){const s=this.manager,a=Ju.extractUrlBase(t),o=this.manager.resolveURL(t);s.itemStart(o),fetch(o,this.fetchOptions).then(l=>{if(l.ok)return n&&n(null),l.text();throw new Error(`URDFLoader: Failed to load url '${o}' with error code ${l.status} : ${l.statusText}.`)}).then(l=>{const c=this.parse(l,this.workingPath||a);e(c),s.itemEnd(o)}).catch(l=>{r?r(l):console.error("URDFLoader: Error loading file.",l),s.itemError(o),s.itemEnd(o)})}parse(t,e=this.workingPath){const n=this.packages,r=this.loadMeshCb,s=this.parseVisual,a=this.parseCollision,o=this.manager,l={},c={},d={};function h(x){if(!/^package:\/\//.test(x))return e?e+x:x;const[M,S]=x.replace(/^package:\/\//,"").split(/\/(.+)/);if(typeof n=="string")return n.endsWith(M)?n+"/"+S:n+"/"+M+"/"+S;if(n instanceof Function)return n(M)+"/"+S;if(typeof n=="object")return M in n?n[M]+"/"+S:(console.error(`URDFLoader : ${M} not found in provided package list.`),null)}function p(x){let M;x instanceof Document?M=[...x.children]:x instanceof Element?M=[x]:M=[...new DOMParser().parseFromString(x,"text/xml").children];const S=M.filter(R=>R.nodeName==="robot").pop();return f(S)}function f(x){const M=[...x.children],S=M.filter(B=>B.nodeName.toLowerCase()==="link"),R=M.filter(B=>B.nodeName.toLowerCase()==="joint"),P=M.filter(B=>B.nodeName.toLowerCase()==="material"),L=new _v;L.robotName=x.getAttribute("name"),L.urdfRobotNode=x,P.forEach(B=>{const C=B.getAttribute("name");d[C]=m(B)});const N={},w={};S.forEach(B=>{const C=B.getAttribute("name"),z=x.querySelector(`child[link="${C}"]`)===null;l[C]=g(B,N,w,z?L:null)}),R.forEach(B=>{const C=B.getAttribute("name");c[C]=_(B)}),L.joints=c,L.links=l,L.colliders=w,L.visual=N;const E=Object.values(c);return E.forEach(B=>{B instanceof iu&&c[B.mimicJoint].mimicJoints.push(B)}),E.forEach(B=>{const C=new Set,z=y=>{if(C.has(y))throw new Error("URDFLoader: Detected an infinite loop of mimic joints.");C.add(y),y.mimicJoints.forEach(W=>{z(W)})};z(B)}),L.frames={...w,...N,...l,...c},L}function _(x){const M=[...x.children],S=x.getAttribute("type");let R;const P=M.find(C=>C.nodeName.toLowerCase()==="mimic");P?(R=new iu,R.mimicJoint=P.getAttribute("joint"),R.multiplier=parseFloat(P.getAttribute("multiplier")||1),R.offset=parseFloat(P.getAttribute("offset")||0)):R=new hh,R.urdfNode=x,R.name=x.getAttribute("name"),R.urdfName=R.name,R.jointType=S;let L=null,N=null,w=[0,0,0],E=[0,0,0];M.forEach(C=>{const z=C.nodeName.toLowerCase();z==="origin"?(w=Zi(C.getAttribute("xyz")),E=Zi(C.getAttribute("rpy"))):z==="child"?N=l[C.getAttribute("link")]:z==="parent"?L=l[C.getAttribute("link")]:z==="limit"&&(R.limit.lower=parseFloat(C.getAttribute("lower")||R.limit.lower),R.limit.upper=parseFloat(C.getAttribute("upper")||R.limit.upper))}),L.add(R),R.add(N),su(R,E),R.position.set(w[0],w[1],w[2]);const B=M.filter(C=>C.nodeName.toLowerCase()==="axis")[0];if(B){const C=B.getAttribute("xyz").split(/\s+/g).map(z=>parseFloat(z));R.axis=new $(C[0],C[1],C[2]),R.axis.normalize()}return R}function g(x,M,S,R=null){R===null&&(R=new uh);const P=[...x.children];return R.name=x.getAttribute("name"),R.urdfName=R.name,R.urdfNode=x,s&&P.filter(N=>N.nodeName.toLowerCase()==="visual").forEach(N=>{const w=u(N,d);if(R.add(w),N.hasAttribute("name")){const E=N.getAttribute("name");w.name=E,w.urdfName=E,M[E]=w}}),a&&P.filter(N=>N.nodeName.toLowerCase()==="collision").forEach(N=>{const w=u(N);if(R.add(w),N.hasAttribute("name")){const E=N.getAttribute("name");w.name=E,w.urdfName=E,S[E]=w}}),R}function m(x){const M=[...x.children],S=new sr;return S.name=x.getAttribute("name")||"",M.forEach(R=>{const P=R.nodeName.toLowerCase();if(P==="color"){const L=R.getAttribute("rgba").split(/\s/g).map(N=>parseFloat(N));S.color.setRGB(L[0],L[1],L[2]),S.opacity=L[3],S.transparent=L[3]<1,S.depthWrite=!S.transparent}else if(P==="texture"){const L=R.getAttribute("filename");if(L){const N=new Zu(o),w=h(L);S.map=N.load(w),S.map.colorSpace=De}}}),S}function u(x,M={}){const S=x.nodeName.toLowerCase()==="collision",R=[...x.children];let P=null;const L=R.filter(w=>w.nodeName.toLowerCase()==="material")[0];if(L){const w=L.getAttribute("name");w&&w in M?P=M[w]:P=m(L)}else P=new sr;const N=S?new mv:new gv;return N.urdfNode=x,R.forEach(w=>{const E=w.nodeName.toLowerCase();if(E==="geometry"){const B=w.children[0].nodeName.toLowerCase();if(B==="mesh"){const C=w.children[0].getAttribute("filename"),z=h(C);if(z!==null){const y=w.children[0].getAttribute("scale");if(y){const W=Zi(y);N.scale.set(W[0],W[1],W[2])}r(z,o,(W,H)=>{H?console.error("URDFLoader: Error loading mesh.",H):W&&(W instanceof Pe&&(W.material=P),W.position.set(0,0,0),W.quaternion.identity(),N.add(W))})}}else if(B==="box"){const C=new Pe;C.geometry=new Kn(1,1,1),C.material=P;const z=Zi(w.children[0].getAttribute("size"));C.scale.set(z[0],z[1],z[2]),N.add(C)}else if(B==="sphere"){const C=new Pe;C.geometry=new cl(1,30,30),C.material=P;const z=parseFloat(w.children[0].getAttribute("radius"))||0;C.scale.set(z,z,z),N.add(C)}else if(B==="cylinder"){const C=new Pe;C.geometry=new ll(1,1,1,30),C.material=P;const z=parseFloat(w.children[0].getAttribute("radius"))||0,y=parseFloat(w.children[0].getAttribute("length"))||0;C.scale.set(z,y,z),C.rotation.set(Math.PI/2,0,0),N.add(C)}}else if(E==="origin"){const B=Zi(w.getAttribute("xyz")),C=Zi(w.getAttribute("rpy"));N.position.set(B[0],B[1],B[2]),N.rotation.set(0,0,0),su(N,C)}}),N}return p(t)}defaultMeshLoader(t,e,n){/\.stl$/i.test(t)?new dv(e).load(t,s=>{const a=new Pe(s,new sr);n(a)}):/\.dae$/i.test(t)?new fv(e).load(t,s=>n(s.scene)):console.warn(`URDFLoader: Could not load model at ${t}.
No loader available`)}}function xv(i,t){return new Promise((e,n)=>{i.packages={[t.packageName]:t.packagePath},i.load(t.urdfPath,r=>e(r),void 0,r=>n(r))})}function yv(i){let t="",e="",n="";return i==Wr.OpticalTable&&(t=B0,e=z0,n=V0),{packageName:t,packagePath:e,urdfPath:n}}function bv(i){const t=new qu,e=new vv(t),n=yv(i);return xv(e,n)}const Bn=class Bn{constructor(){Zt(this,"files");Zt(this,"modelMap");Zt(this,"robotMap");this.files={textFiles:new Map,binaryFiles:new Map},this.modelMap=new Map,this.robotMap=new Map}static async init(){if(!Bn.instance){const t=new Bn;t.files=await nv(),t.modelMap=hv(t.files),t.robotMap.set(Wr.OpticalTable,await bv(Wr.OpticalTable)),Bn.instance=t}return Bn.instance}static getInstance(){if(!Bn.instance)throw new Error("Assets has not been initialized. Call init) first.");return Bn.instance}getModels(){return this.modelMap}getRobots(){return this.robotMap}getFiles(){return this.files}};Zt(Bn,"instance");let ta=Bn;class ea{constructor({object:t,playerController:e,armController:n,physicsController:r}){Zt(this,"object");Zt(this,"playerController");Zt(this,"armController");Zt(this,"physicsController");this.object=t,this.playerController=e,this.armController=n,this.physicsController=r}update(t){var e,n;(e=this.playerController)==null||e.update(this.object,t),(n=this.armController)==null||n.update(t)}}class Sv{constructor(){Zt(this,"kinState");Zt(this,"rotationSpeed");this.kinState={velocity:new $,acceleration:new $},this.rotationSpeed=0}update(t,e){if(this.kinState){const{acceleration:n,velocity:r}=this.kinState,s=new $(0,0,1);t.getWorldDirection(s);const a=new $;a.crossVectors(new $(0,1,0),s).normalize();const o=.025;n.z!==0&&r.add(s.clone().multiplyScalar(n.z*o)),n.x!==0&&r.add(a.clone().multiplyScalar(n.x*o)),t.position.add(r.clone().multiplyScalar(e));const l=1-Math.min(1,5*e);r.multiplyScalar(l),r.lengthSq()<.01**2&&r.set(0,0,0)}t.rotation.y+=this.rotationSpeed*e}handleMove(t){let e=this.kinState.acceleration;const n=10;t.forward?e.z=n:t.backward?e.z=-n:e.z=0,t.left?e.x=n:t.right?e.x=-n:e.x=0}handleRotation(t){this.rotationSpeed=0;const e=2;t.left&&(this.rotationSpeed=e),t.right&&(this.rotationSpeed=-e)}}function Mv(i,t){switch(t){case Cn.GOTO_A:return{from:i,to:ar.Moving,command:t};case Cn.GOTO_B:return{from:i,to:ar.Moving,command:t};case Cn.STOP:return{from:i,to:ar.Idle,command:t};default:throw new Error(`Unhandled case: ${t}`)}}class wv{constructor(){Zt(this,"state",ar.Idle);Zt(this,"command",Cn.STOP)}transition(t){const{from:e,to:n,command:r}=Mv(this.state,t);return this.state=n,this.command=r,{from:e,to:n,command:r}}getState(){return this.state}getTargetAngle(){return this.command==Cn.GOTO_A?-3:this.command==Cn.GOTO_B?-1:0}}class Ev{constructor(t){Zt(this,"table");Zt(this,"slideJoint");Zt(this,"armFSM");this.table=t,this.slideJoint=t.joints["slide-j"],this.armFSM=new wv}getCurrentAngle(){return this.slideJoint.angle}getArmState(){return this.armFSM.getState()}handleArmCommand(t){this.armFSM.transition(t)}getTargetAngle(){return this.armFSM.getTargetAngle()}update(t){if(this.armFSM.getState()==ar.Idle)return;const e=1,n=this.getCurrentAngle(),r=this.getTargetAngle()-n,s=Math.sign(r)*Math.min(Math.abs(r),e*t);this.slideJoint.setJointValue(n+s),Math.abs(r)<.01&&this.slideJoint.setJointValue(this.getTargetAngle())}}function Tv(i){const e=new hi().setFromObject(i.object).min.y;e<k0&&(i.object.position.y-=e)}function Av(){return new la({color:34850,metalness:.3,roughness:.7})}function Cv(){let i=new Le;const t=new Kn(.5,1,.5),e=Av();let n=new Pe(t,e);return i.add(n),i}class Rv{constructor(){}createHuman(){const t={object:Cv(),playerController:new Sv};let e=new ea(t);const n=zn.degToRad(180);return e.object.rotateY(n),Tv(e),e.object.position.z=-2,e.object.position.x=2,e}createOpticalTable(){let t=ta.getInstance().getRobots().get(Wr.OpticalTable);const e={object:t,armController:new Ev(t)};let n=new ea(e);return n.object.position.y+=.855,n.object.position.x-=2,n.object.position.z-=.7,n.object.rotation.x=zn.degToRad(270),n}createActors(){return{player:this.createHuman(),table:this.createOpticalTable()}}}class da extends Pe{constructor(){const t=da.SkyShader,e=new qn({name:t.name,uniforms:Iu.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:$e,depthWrite:!1});super(new Kn(1,1,1),e),this.isSky=!0}}da.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new $},up:{value:new $(0,1,0)}},vertexShader:`
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

		}`};const Pv="modulepreload",Lv=function(i){return"/"+i},au={},Iv=function(t,e,n){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(e.map(l=>{if(l=Lv(l),l in au)return;au[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":Pv,c||(h.as="script"),h.crossOrigin="",h.href=l,o&&h.setAttribute("nonce",o),document.head.appendChild(h),c)return new Promise((p,f)=>{h.addEventListener("load",p),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})};class Dv{constructor(t,e){Zt(this,"room");Zt(this,"actors");this.room=t,this.actors=e}createSky(){const t=new da;t.scale.setScalar(1e4);const e=new $,n=zn.degToRad(90),r=zn.degToRad(0);return e.setFromSphericalCoords(1,n,r),t.material.uniforms.rayleigh.value=.95,t.material.uniforms.mieCoefficient.value=0,t.material.uniforms.mieDirectionalG.value=0,t.material.uniforms.sunPosition.value.copy(e),t}createScene(){const t=new Vu;return Nv().forEach(e=>t.add(e)),this.populateScene(t),t.add(this.createSky()),t}populateScene(t){t.add(this.actors.player.object),t.add(this.actors.table.object),t.add(this.room.floor.object),t.add(this.room.cube.object)}}function Nv(){const i=new Ku(16777215,1);i.position.set(5,5,5).normalize();const t=new $u(4210752,.5),e=new $_(16777215,2236962,.2);return[i,t,e]}const dh=Math.sqrt(3),Uv=.5*(dh-1),Ir=(3-dh)/6,ou=i=>Math.floor(i)|0,lu=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Fv(i=Math.random){const t=Ov(i),e=new Float64Array(t).map(r=>lu[r%12*2]),n=new Float64Array(t).map(r=>lu[r%12*2+1]);return function(s,a){let o=0,l=0,c=0;const d=(s+a)*Uv,h=ou(s+d),p=ou(a+d),f=(h+p)*Ir,_=h-f,g=p-f,m=s-_,u=a-g;let x,M;m>u?(x=1,M=0):(x=0,M=1);const S=m-x+Ir,R=u-M+Ir,P=m-1+2*Ir,L=u-1+2*Ir,N=h&255,w=p&255;let E=.5-m*m-u*u;if(E>=0){const z=N+t[w],y=e[z],W=n[z];E*=E,o=E*E*(y*m+W*u)}let B=.5-S*S-R*R;if(B>=0){const z=N+x+t[w+M],y=e[z],W=n[z];B*=B,l=B*B*(y*S+W*R)}let C=.5-P*P-L*L;if(C>=0){const z=N+1+t[w+1],y=e[z],W=n[z];C*=C,c=C*C*(y*P+W*L)}return 70*(o+l+c)}}function Ov(i){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const r=n+~~(i()*(256-n)),s=e[n];e[n]=e[r],e[r]=s}for(let n=256;n<512;n++)e[n]=e[n-256];return e}class Ri{static async init(){this.instance||(this.instance=await(await Iv(async()=>{const{default:t}=await import("./ammo-CRJduAVl.js").then(e=>e.a);return{default:t}},[])).default())}static get(){if(!this.instance)throw new Error("Ammo has not been initialized. Call AmmoSingleton.init() first.");return this.instance}}Zt(Ri,"instance",null);function kv(i){const t=Ri.get(),e=new hi().setFromObject(i),n=new $;e.getSize(n);const r=new t.btVector3(n.x/2,n.y/2,n.z/2);return new t.btBoxShape(r)}function Bv(i,t){const e=Ri.get(),n=new e.btTransform;n.setIdentity(),n.setOrigin(new e.btVector3(i.position.x,i.position.y,i.position.z));const r=new e.btDefaultMotionState(n),s=kv(i),a=new e.btVector3(0,0,0);t>0&&s.calculateLocalInertia(t,a);const o=new e.btRigidBodyConstructionInfo(t,r,s,a);return new e.btRigidBody(o)}class cu{constructor(t,e,n){Zt(this,"body");this.body=Bv(t,e),n.addRigidBody(this.body,t)}updateFromPhysics(t){const e=Ri.get(),n=new e.btTransform;this.body.getMotionState().getWorldTransform(n);const r=n.getOrigin();t.position.set(r.x(),r.y(),r.z());const s=n.getRotation();t.quaternion.set(s.x(),s.y(),s.z(),s.w())}applyImpulse(t,e){if(!this.body)return;const n=Ri.get(),r=new n.btVector3(t.x,t.y,t.z),s=e?new n.btVector3(e.x,e.y,e.z):new n.btVector3(0,0,0);this.body.applyImpulse(r,s)}}function zv(){const i=new qr(10,10),t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");if(e){const a=Fv(),o=.01;for(let l=0;l<t.height;l++)for(let c=0;c<t.width;c++){const d=c/t.width-.5,h=l/t.height-.5,p=a(d/o,h/o),f=Math.floor((p+1)*127.5);e.fillStyle=`rgb(${f}, ${f}, ${f})`,e.fillRect(c,l,1,1)}}const n=new k_(t);n.wrapS=Vn,n.wrapT=Vn,n.repeat.set(4,4);const r=new la({map:n}),s=new Pe(i,r);return s.rotation.x=-Math.PI/2,s.position.y=0,s}function Vv(){return new la({color:3447003,metalness:.3,roughness:.7})}class Hv{constructor(t){Zt(this,"world");this.world=t}createFloor(){let t=zv();const e={object:t,physicsController:new cu(t,0,this.world)};return new ea(e)}createCube(){const t=new Kn(1,1,1),e=Vv(),n=new Pe(t,e);n.position.y=.5,n.position.x=1,n.position.z=-4.5;const r={object:n,physicsController:new cu(n,1,this.world)};return new ea(r)}createRoom(){return{floor:this.createFloor(),cube:this.createCube()}}}function uu(i,t){i.traverse(e=>{e instanceof Pe&&e.material&&(Array.isArray(e.material)?e.material.forEach(n=>{n.color.set(t),n.needsUpdate=!0}):(e.material.color.set(t),e.material.needsUpdate=!0))})}class Gv{constructor(){Zt(this,"world");Zt(this,"rigidBodies",[]);Zt(this,"objectMap",new Map);Zt(this,"nextUserIndex",0);Zt(this,"originalMaterials",new Map);Zt(this,"collidingObjects",new Set);const t=Ri.get();let e=new t.btDefaultCollisionConfiguration,n=new t.btCollisionDispatcher(e),r=new t.btDbvtBroadphase,s=new t.btSequentialImpulseConstraintSolver;this.world=new t.btDiscreteDynamicsWorld(n,r,s,e),this.world.setGravity(new t.btVector3(0,-10,0))}step(t){this.world.stepSimulation(t,10);const n=new Set,r=this.world.getDispatcher(),s=r.getNumManifolds();for(let a=0;a<s;a++){const o=r.getManifoldByIndexInternal(a),l=o.getBody0(),c=o.getBody1(),d=o.getNumContacts();let h=!1;for(let p=0;p<d;p++)o.getContactPoint(p).getDistance()<0&&(h=!0);if(h){const p=this.objectMap.get(l.getUserIndex()),f=this.objectMap.get(c.getUserIndex()),_=new ae(.5,.5,.5);p&&(n.add(p),uu(p,_)),f&&(n.add(f),uu(f,_))}}this.collidingObjects.forEach(a=>{n.has(a)||this.restoreOriginalMaterial(a)}),this.collidingObjects=n}storeOriginalMaterial(t){t.traverse(e=>{e instanceof Pe&&e.material&&(this.originalMaterials.has(e)||(Array.isArray(e.material)?this.originalMaterials.set(e,e.material.map(n=>n.clone())):this.originalMaterials.set(e,e.material.clone())))})}restoreOriginalMaterial(t){t.traverse(e=>{if(e instanceof Pe&&this.originalMaterials.has(e)){const n=this.originalMaterials.get(e);Array.isArray(n)?e.material=n.map(r=>r.clone()):e.material=n.clone(),e.material.needsUpdate=!0}})}addRigidBody(t,e){const n=this.nextUserIndex++;t.setUserIndex(n),this.objectMap.set(n,e),this.rigidBodies.push(t),this.world.addRigidBody(t),this.storeOriginalMaterial(e)}}async function Wv(){await Ri.init(),await ta.init()}function Xv(){let i=new Gv,t=new Hv(i).createRoom(),e=new Rv().createActors(),n=new Dv(t,e).createScene();return new O0(t,e,n,i)}async function jv(){await Wv(),Xv().runSimulationLoop()}jv();export{G0 as a,Zv as g};
//# sourceMappingURL=index-D9cylR8h.js.map
